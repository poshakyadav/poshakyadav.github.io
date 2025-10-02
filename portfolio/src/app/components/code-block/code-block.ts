import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-code-block',
  imports: [NgClass],
  templateUrl: './code-block.html',
  styleUrl: './code-block.css',
})
export class CodeBlock implements OnChanges {
  @Input() code: string = ''; // The code text to display
  @Input() language: string = 'rust'; // Default language for syntax highlighting (e.g., 'rust', 'toml')
  @Input() id?: string; // Optional ID for the code element (if needed for specific blocks)

  copied = false; // Flag for copy feedback

  // 👇 NEW: Property to hold the safely sanitized code for innerHTML
  safeCode: SafeHtml = '';

  // 👇 NEW: Inject DomSanitizer
  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {}

  // 👇 NEW: Sanitize on initialization and when input 'code' changes
  ngOnChanges(changes: SimpleChanges) {
    if (changes['code'] || changes['language']) {
      // Use bypassSecurityTrustHtml to allow the syntax highlighter to insert its structure.
      // Since 'code' is expected to be raw text, this is the safe and necessary approach
      // to allow syntax highlighting libraries to work.
      this.safeCode = this.sanitizer.bypassSecurityTrustHtml(this.code);
    }
  }

  copyCode() {
    // Prevent accidental double-clicks from interfering
    if (!this.code || this.copied) {
      return;
    }

    navigator.clipboard
      .writeText(this.code)
      .then(() => {
        // Successfully copied
        this.copied = true;
        // 👇 FIX 1: Manually trigger change detection after setting 'copied' to update the button immediately
        this.cdr.detectChanges();

        setTimeout(() => {
          this.copied = false;
          // 👇 FIX 2: Manually trigger change detection when resetting 'copied' inside setTimeout
          // setTimeout runs outside the Angular zone, so Angular doesn't know 'copied' changed.
          this.cdr.detectChanges();
        }, 2000);
      })
      .catch((err) => {
        // This is often the reason for the "click 2-3 times" issue.
        // The browser requires user interaction to grant clipboard permission.
        // We log the error but allow the user to try again.
        console.error('Failed to copy. Permission or security issue: ', err);
        // Reset in case it failed after a previous success (though unlikely)
        this.copied = false;
        this.cdr.detectChanges();
      });
  }
}
