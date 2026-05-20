import { Component } from "@angular/core";

interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  repo: string;
  liveUrl?: string;
  technologies: string[];
  accentColor: string;
  imageCount: number;
}

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  private readonly BASE = "/images/projects/";

  expandedId: string | null = null;
  carouselIndices: Record<string, number> = {};
  fadingPartnerId: string | null = null;
  enteringPartnerId: string | null = null;
  expandFromRight = false;
  collapsingId: string | null = null;
  private animating = false;

  readonly projects: ProjectItem[] = [
    {
      id: "GPT-trace",
      title: "GPT Trace",
      shortDescription:
        "AI-powered crypto analytics with real-time market insights and GPT-driven forecasts.",
      fullDescription:
        "GPT-Trace is a full-featured AI-powered crypto analytics platform built with Next.js, NestJS, TypeScript, and MongoDB. The platform delivers real-time market data, interactive charts, and GPT-driven price forecasts. It includes user authentication, portfolio tracking, watchlists, and AI-generated market summaries updated on demand.",
      repo: "https://github.com/BurdeyniyB/GPT-Trace",
      technologies: ["Next.js", "NestJS", "TypeScript", "MongoDB", "AI/GPT"],
      accentColor: "#4410FF",
      imageCount: 5,
    },
    {
      id: "music",
      title: "Music Platform",
      shortDescription:
        "Full-featured music streaming with upload, playback, and artist profiles.",
      fullDescription:
        "A comprehensive music streaming platform built with Next.js and NestJS, backed by TypeScript and MongoDB. Features include track upload and streaming, artist profile management, playlist creation, search and discovery, and a responsive audio player. Handles file storage, user authentication, and real-time playback state sync.",
      repo: "https://github.com/BurdeyniyB/music-platform-client",
      technologies: ["Next.js", "NestJS", "TypeScript", "MongoDB"],
      accentColor: "#FF025B",
      imageCount: 6,
    },
    {
      id: "store",
      title: "Online Store",
      shortDescription:
        "E-commerce platform with catalog, cart, orders, and admin panel.",
      fullDescription:
        "A complete e-commerce solution — React frontend, Node.js/Express backend, PostgreSQL database. Includes a full product catalog with categories and filters, shopping cart, order management, user authentication, and an admin dashboard. Supports product variants, inventory tracking, and a checkout flow.",
      repo: "https://github.com/BurdeyniyB/online-store",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      accentColor: "#1EF2BD",
      imageCount: 6,
    },
    {
      id: "crisp",
      title: "Crisp",
      shortDescription:
        "Modern online fashion store with trends, filters, and exclusive deals.",
      fullDescription:
        "Crisp is a modern online fashion store offering the latest trends and exclusive deals. Built with React and Node.js with a MongoDB backend. The storefront includes dynamic filtering by size, color, and category, a wishlist, a shopping cart, and a streamlined checkout. Design emphasizes clean typography and product photography.",
      repo: "https://github.com/BurdeyniyB/Crisp",
      technologies: ["React", "Node.js", "MongoDB"],
      accentColor: "#F2994A",
      imageCount: 6,
    },
    {
      id: "findtrend",
      title: "Findtrend",
      shortDescription:
        "Aggregate your favorite websites and stay updated on trends in one place.",
      fullDescription:
        "Findtrend is a personal dashboard that helps you gather all your favorite websites in one place and stay updated on trending content. Built with React and Firebase, it allows users to create custom link collections, categorize websites, and receive trend notifications. Features drag-and-drop organization, custom categories, and a clean minimalist interface.",
      repo: "https://github.com/BurdeyniyB/Findtrend",
      technologies: ["React", "Firebase"],
      accentColor: "#EBD803",
      imageCount: 5,
    },
    {
      id: "quiz",
      title: "Quiz App",
      shortDescription:
        "Interactive quiz with multiple question types, scoring, and results review.",
      fullDescription:
        "An interactive quiz application built with React and TypeScript. Supports multiple question types: single choice, multiple choice, true/false, and open-ended. Features include a countdown timer, score tracking, per-question result breakdown, answer review mode, and a configurable question engine driven by a simple JSON format.",
      repo: "https://github.com/BurdeyniyB/Quiz",
      technologies: ["React", "TypeScript"],
      accentColor: "#e124fa",
      imageCount: 5,
    },
  ];

  trackById(_: number, item: ProjectItem): string {
    return item.id;
  }

  get displayProjects(): ProjectItem[] {
    if (!this.expandedId) return this.projects;
    const idx = this.projects.findIndex((p) => p.id === this.expandedId);
    if (idx % 2 === 0) return this.projects;
    const reordered = [...this.projects];
    [reordered[idx - 1], reordered[idx]] = [reordered[idx], reordered[idx - 1]];
    return reordered;
  }

  private partnerIdFor(id: string): string | null {
    const idx = this.projects.findIndex((p) => p.id === id);
    const pIdx = idx % 2 === 0 ? idx + 1 : idx - 1;
    return pIdx >= 0 && pIdx < this.projects.length
      ? this.projects[pIdx].id
      : null;
  }

  private readRects(): Map<string, DOMRect> {
    const m = new Map<string, DOMRect>();
    document
      .querySelectorAll<HTMLElement>(".project-card[data-pid]")
      .forEach((el) => m.set(el.dataset["pid"]!, el.getBoundingClientRect()));
    return m;
  }

  private playFlip(before: Map<string, DOMRect>, skipId?: string): void {
    document
      .querySelectorAll<HTMLElement>(".project-card[data-pid]")
      .forEach((card) => {
        if (skipId && card.dataset["pid"] === skipId) return;
        const first = before.get(card.dataset["pid"]!);
        if (!first) return;
        const last = card.getBoundingClientRect();
        const dx = first.left - last.left;
        const dy = first.top - last.top;
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;

        card.style.transition = "none";
        card.style.transform = `translate(${dx}px,${dy}px)`;
        card.getBoundingClientRect(); // force reflow

        card.style.transition =
          "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        card.style.transform = "";

        card.addEventListener(
          "transitionend",
          (e) => {
            if ((e as TransitionEvent).propertyName === "transform") {
              card.style.transition = "";
            }
          },
          { once: true }
        );
      });
  }

  toggle(id: string): void {
    if (this.animating) return;
    this.expandedId === id ? this.collapseCard(id) : this.expandCard(id);
  }

  private expandCard(id: string): void {
    const FADE_OUT = 220;
    const FLIP_MS = 450;
    const FADE_IN = 320;

    this.animating = true;
    const idx = this.projects.findIndex((p) => p.id === id);
    this.expandFromRight = idx % 2 !== 0;
    const partnerId = this.partnerIdFor(id);
    this.fadingPartnerId = partnerId;

    setTimeout(() => {
      const before = this.readRects();
      this.expandedId = id;
      if (!(id in this.carouselIndices)) this.carouselIndices[id] = 0;

      requestAnimationFrame(() => {
        this.playFlip(before, id); // x card uses clip-path, skip from FLIP

        setTimeout(() => {
          this.fadingPartnerId = null;
          if (partnerId) {
            this.enteringPartnerId = partnerId;
            setTimeout(() => {
              this.enteringPartnerId = null;
              this.animating = false;
            }, FADE_IN);
          } else {
            this.animating = false;
          }
        }, FLIP_MS);
      });
    }, FADE_OUT);
  }

  private collapseCard(id: string): void {
    const COLLAPSE_ANIM = 320; // must match CSS collapse animation duration
    const FLIP_MS = 450;
    const FADE_IN = 280;

    this.animating = true;
    const partnerId = this.partnerIdFor(id);
    this.fadingPartnerId = partnerId; // y fades out (220ms)
    this.collapsingId = id;           // x shrinks (320ms)

    setTimeout(() => {
      this.collapsingId = null;
      const before = this.readRects();
      this.expandedId = null;

      requestAnimationFrame(() => {
        this.playFlip(before, id); // skip x — clip-path covered the visual

        setTimeout(() => {
          this.fadingPartnerId = null;
          this.animating = false;
          if (partnerId) {
            this.enteringPartnerId = partnerId;
            setTimeout(() => { this.enteringPartnerId = null; }, FADE_IN);
          }
        }, FLIP_MS);
      });
    }, COLLAPSE_ANIM);
  }

  prevImage(id: string, event: Event): void {
    event.stopPropagation();
    const item = this.projects.find((p) => p.id === id)!;
    const cur = this.carouselIndices[id] ?? 0;
    this.carouselIndices[id] = (cur - 1 + item.imageCount) % item.imageCount;
  }

  nextImage(id: string, event: Event): void {
    event.stopPropagation();
    const item = this.projects.find((p) => p.id === id)!;
    const cur = this.carouselIndices[id] ?? 0;
    this.carouselIndices[id] = (cur + 1) % item.imageCount;
  }

  goToImage(id: string, index: number, event: Event): void {
    event.stopPropagation();
    this.carouselIndices[id] = index;
  }

  getThumb(item: ProjectItem): string {
    return `${this.BASE}${item.id}/img1.png`;
  }

  getCurrentImage(item: ProjectItem): string {
    const idx = this.carouselIndices[item.id] ?? 0;
    return `${this.BASE}${item.id}/img${idx + 1}.png`;
  }

  imageRange(item: ProjectItem): number[] {
    return Array.from({ length: item.imageCount }, (_, i) => i);
  }

  carouselIndex(id: string): number {
    return this.carouselIndices[id] ?? 0;
  }

  hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
