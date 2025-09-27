import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interface for Blog Post Data
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string; // Used for routing: /blogs/my-first-angular-post
  date: Date;
  imageUrl: string;
  tags: string[];
  primaryTag: string;
}

@Component({
  selector: 'app-blogs',
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blogs implements OnInit {
  // Master list of all blog posts
  allPosts: BlogPost[] = [];
  // List of posts currently displayed (filtered list)
  filteredPosts: BlogPost[] = [];
  // Available tags for filtering
  allTags: string[] = ['All Topics', 'Angular', 'Spring Boot', 'Tailwind CSS', 'Database', 'Rust'];
  // Tracks the currently active tag filter
  activeTag: string = 'All Topics';
  // Tracks the current search query
  searchQuery: string = '';

  ngOnInit(): void {
    // 1. Define sample blog posts
    this.allPosts = [
      {
        id: 1,
        title: 'Mastering Angular Change Detection: OnPush vs Default',
        excerpt:
          "A deep dive into Angular's change detection strategies and how to leverage OnPush for significant performance improvements in large applications.",
        slug: 'mastering-angular-change-detection',
        date: new Date('2024-09-10'),
        imageUrl: 'https://placehold.co/600x300/FACC15/78350F?text=Angular',
        tags: ['Angular', 'TypeScript', 'Performance'],
        primaryTag: 'Angular',
      },
      {
        id: 2,
        title: 'Building RESTful APIs with Spring Boot 3: A Complete Guide',
        excerpt:
          'Step-by-step tutorial on setting up a robust, secure, and scalable RESTful service using the latest features of Spring Boot and Java.',
        slug: 'spring-boot-rest-api-guide',
        date: new Date('2024-08-25'),
        imageUrl: 'https://placehold.co/600x300/3B82F6/1E3A8A?text=Spring+Boot',
        tags: ['Spring Boot', 'Java', 'Backend', 'API'],
        primaryTag: 'Spring Boot',
      },
      {
        id: 3,
        title: 'Styling Modern Apps: The Power of Tailwind CSS Utility-First',
        excerpt:
          'Exploring why Tailwind CSS is the ultimate choice for rapid UI development and how to integrate it seamlessly into your Angular projects.',
        slug: 'tailwind-css-utility-first',
        date: new Date('2024-08-01'),
        imageUrl: 'https://placehold.co/600x300/4F46E5/FFFFFF?text=Tailwind+CSS',
        tags: ['Tailwind CSS', 'Frontend', 'UI/UX'],
        primaryTag: 'Tailwind CSS',
      },
      {
        id: 4,
        title: 'Database Design for Scalability: SQL vs NoSQL Decisions',
        excerpt:
          'Analyzing the trade-offs between relational (PostgreSQL) and non-relational (MongoDB) databases for different use cases and application scales.',
        slug: 'database-design-scalability',
        date: new Date('2024-07-15'),
        imageUrl: 'https://placehold.co/600x300/10B981/047857?text=Database',
        tags: ['Database', 'SQL', 'NoSQL', 'Backend'],
        primaryTag: 'Database',
      },
      {
        id: 5,
        title: "My First Rust Service with Axum: A Beginner's Journey",
        excerpt:
          'Documenting the process of building a simple, high-performance web service in Rust using the lightweight Axum web framework.',
        slug: 'first-rust-service-axum',
        date: new Date('2024-06-01'),
        imageUrl: 'https://placehold.co/600x300/EF4444/991B1B?text=Rust',
        tags: ['Rust', 'Backend', 'Performance'],
        primaryTag: 'Rust',
      },
    ];

    // 2. Initialize the displayed list
    this.filteredPosts = [...this.allPosts];
  }

  /**
   * Filters the post list based on the selected tag and the current search query.
   * @param tag The tag to filter by.
   */
  filterByTag(tag: string): void {
    this.activeTag = tag;
    this.applyFilters();
  }

  /**
   * Updates the search query from the input event and applies filters.
   * @param event The input event from the search bar.
   */
  searchPosts(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value.toLowerCase();
    this.applyFilters();
  }

  /**
   * Central function to apply both tag and search filters.
   */
  private applyFilters(): void {
    let tempPosts = [...this.allPosts];

    // 1. Apply Tag Filter
    if (this.activeTag !== 'All Topics') {
      tempPosts = tempPosts.filter((post) => post.tags.includes(this.activeTag));
    }

    // 2. Apply Search Query Filter
    if (this.searchQuery) {
      const query = this.searchQuery;
      tempPosts = tempPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    this.filteredPosts = tempPosts;
  }
}
