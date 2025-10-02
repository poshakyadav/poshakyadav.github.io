import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Blogs } from './pages/blogs/blogs';
import { Contact } from './pages/contact/contact';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import path from 'node:path';
import { RustAsync } from './blogs/rust/rust-async/rust-async';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home - Poshak Yadav',
  },
  {
    path: 'about',
    component: About,
    title: 'About - Poshak Yadav',
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects - Poshak Yadav',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact - Poshak Yadav',
  },
  {
    path: 'blogs',
    component: Blogs,
    title: 'Blogs - Poshak Yadav',
  },
  {
    title: 'Rust Async Programming - Poshak Yadav',
    path: 'blogs/rust-asynchronous-programming-guide',
    component: RustAsync,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
