import { Component } from '@angular/core';

interface RoleCard {
  id: string;
  title: string;
  description: string;
  accentColor: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  readonly roles: RoleCard[] = [
    {
      id: 'frontend',
      title: 'Frontend Dev',
      description: 'Create the visual and interactive parts of a website or app that users see and engage with.',
      accentColor: '#6366f1',
    },
    {
      id: 'backend',
      title: 'Backend Dev',
      description: 'Build and maintain the server, database, and logic that power the application behind the scenes.',
      accentColor: '#0ea5e9',
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Dev',
      description: 'Handle both frontend and backend, integrating user interfaces with server-side functionality.',
      accentColor: '#10b981',
    },
    {
      id: 'ai',
      title: 'AI Engineer',
      description: 'Design and integrate AI-powered features — LLMs, agents, RAG pipelines, and smart automation into products.',
      accentColor: '#f59e0b',
    },
  ];

  hoveredRole: string | null = null;

  svgW(id: string, w: number): string {
    return this.hoveredRole === id ? String(w) : '0';
  }

  svgOpacity(id: string): number {
    return this.hoveredRole === id ? 1 : 0;
  }

  svgDash(id: string): string {
    return this.hoveredRole === id ? '0' : '50';
  }

  svgFill(id: string, active: string, inactive: string): string {
    return this.hoveredRole === id ? active : inactive;
  }

  hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
