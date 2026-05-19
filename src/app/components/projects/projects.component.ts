import { Component } from '@angular/core';

interface ProjectItem {
  folder: string;
  title: string;
  description: string;
  repo: string;
  images: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  currentIndex = 0;
  isHovered = false;

  readonly projects: ProjectItem[] = [
    {
      folder: 'GPT-trace/',
      title: 'GPT Trace',
      description: 'A full-featured GPT-Trace is an AI-powered crypto analytics platform built with Next.js, NestJS, TypeScript, and MongoDB that delivers real-time market insights and GPT-driven forecasts.',
      repo: 'https://github.com/BurdeyniyB/GPT-Trace',
      images: ['img1', 'img2', 'img3', 'img4', 'img5'],
    },
    {
      folder: 'music/',
      title: 'Music Platform',
      description: 'A full-featured music streaming platform built with Nest.js, Next.js, TypeScript, and MongoDB.',
      repo: 'https://github.com/BurdeyniyB/music-platform-client',
      images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'],
    },
    {
      folder: 'store/',
      title: 'Online Store',
      description: 'An e-commerce platform built with Node.js, React, PostgreSQL, and Express.',
      repo: 'https://github.com/BurdeyniyB/online-store',
      images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'],
    },
    {
      folder: 'crisp/',
      title: 'Crisp',
      description: 'Crisp is a modern online fashion store offering the latest trends and exclusive deals.',
      repo: 'https://github.com/BurdeyniyB/Crisp',
      images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'],
    },
    {
      folder: 'findtrend/',
      title: 'Findtrend',
      description: 'Findtrend helps you gather all your favorite websites in one place and stay updated on trends.',
      repo: 'https://github.com/BurdeyniyB/Findtrend',
      images: ['img1', 'img2', 'img3', 'img4', 'img5'],
    },
    {
      folder: 'quiz/',
      title: 'Quiz',
      description: 'Develop a quiz with different types of questions.',
      repo: 'https://github.com/BurdeyniyB/Quiz',
      images: ['img1', 'img2', 'img3', 'img4', 'img5'],
    },
  ];

  get current(): ProjectItem {
    return this.projects[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }
}
