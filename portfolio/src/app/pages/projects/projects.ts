import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interface for Project Data
interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Frontend' | 'Full-Stack' | 'Backend';
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
  categoryBadgeClass: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink, NgClass],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects implements OnInit {
  // Master list of all projects
  allProjects: Project[] = [];
  // List of projects currently displayed (filtered list)
  filteredProjects: Project[] = [];
  // Tracks the currently active filter button
  activeFilter: 'all' | 'Frontend' | 'Full-Stack' | 'Backend' = 'all';

  // Getter methods for project counts
  get frontendProjectsCount(): number {
    return this.allProjects.filter((p) => p.category === 'Frontend').length;
  }

  get fullStackProjectsCount(): number {
    return this.allProjects.filter((p) => p.category === 'Full-Stack').length;
  }

  get backendProjectsCount(): number {
    return this.allProjects.filter((p) => p.category === 'Backend').length;
  }

  ngOnInit(): void {
    // 1. Define all projects with consistent badge colors
    this.allProjects = [
      {
        id: 1,
        title: 'Enterprise Task Manager',
        description:
          'A robust full-stack solution for team collaboration, task assignments, and progress tracking, featuring real-time updates and notifications.',
        category: 'Full-Stack',
        tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Tailwind'],
        imageUrl: 'https://placehold.co/600x400/A5B4FC/1E293B?text=Task+Manager',
        liveUrl: '#',
        sourceUrl: '#',
        categoryBadgeClass: 'bg-indigo-100 text-indigo-800',
      },
      {
        id: 2,
        title: 'Modern E-commerce Platform',
        description:
          'A responsive and high-performance e-commerce website with advanced product filtering, secure payment integration (Stripe), and an admin dashboard.',
        category: 'Full-Stack',
        tags: ['Angular', 'Node.js/Express', 'MongoDB', 'Stripe'],
        imageUrl: 'https://placehold.co/600x400/D8B4FE/3B0764?text=E-commerce+Site',
        liveUrl: '#',
        sourceUrl: '#',
        categoryBadgeClass: 'bg-indigo-100 text-indigo-800',
      },
      {
        id: 3,
        title: 'Blog & Markdown Editor',
        description:
          'A clean and simple blogging platform with a built-in WYSIWYG markdown editor and static site generation features for better SEO.',
        category: 'Frontend',
        tags: ['Angular', 'NgRx', 'Tailwind', 'SSR'],
        imageUrl: 'https://placehold.co/600x400/93C5FD/1E3A8A?text=Blog+Platform',
        liveUrl: '#',
        sourceUrl: '#',
        categoryBadgeClass: 'bg-green-100 text-green-800',
      },
      {
        id: 4,
        title: 'RESTful API Service',
        description:
          'A scalable and high-speed API built with Rust (Axum) and secured with JWT for microservice communication and data delivery.',
        category: 'Backend',
        tags: ['Rust/Axum', 'PostgreSQL', 'JWT', 'Docker'],
        imageUrl: 'https://placehold.co/600x400/FECACA/7F1D1D?text=Backend+API',
        liveUrl: '#',
        sourceUrl: '#',
        categoryBadgeClass: 'bg-red-100 text-red-800',
      },
      {
        id: 5,
        title: 'Interactive Data Dashboard',
        description:
          'A complex data visualization dashboard, consuming real-time API data and displaying it via responsive charts and interactive tables.',
        category: 'Frontend',
        tags: ['Angular', 'Chart.js', 'RxJS', 'TypeScript'],
        imageUrl: 'https://placehold.co/600x400/FDBA74/7C2D12?text=Data+Dashboard',
        liveUrl: '#',
        sourceUrl: '#',
        categoryBadgeClass: 'bg-green-100 text-green-800',
      },
      {
        id: 6,
        title: 'User Authentication System',
        description:
          'A standalone backend service handling user registration, login, token management, and password reset functionalities.',
        category: 'Backend',
        tags: ['Spring Security', 'Java', 'OAuth2', 'Testing'],
        imageUrl: 'https://placehold.co/600x400/C7D2FE/3730A3?text=Auth+Service',
        liveUrl: '#',
        sourceUrl: '#',
        categoryBadgeClass: 'bg-red-100 text-red-800',
      },
    ];

    // 2. Initialize the displayed list with all projects
    this.filteredProjects = [...this.allProjects];
  }

  /**
   * Filters the project list based on the selected category.
   * @param category The category to filter by ('all', 'Frontend', 'Full-Stack', 'Backend').
   */
  filterProjects(category: 'all' | 'Frontend' | 'Full-Stack' | 'Backend'): void {
    this.activeFilter = category;

    if (category === 'all') {
      this.filteredProjects = [...this.allProjects];
    } else {
      this.filteredProjects = this.allProjects.filter((project) => project.category === category);
    }
  }
}
