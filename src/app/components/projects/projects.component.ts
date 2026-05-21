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
      id: "tech-hub",
      title: "Tech.Hub — Full-Stack E-Commerce Platform",
      shortDescription:
        "A full-stack e-commerce platform for an electronics store that combines a customer storefront featuring advanced search, a shopping cart, PayPal/Stripe checkout, and an AI assistant for faster product discovery with a comprehensive admin panel for managing products, orders, discounts, stock, and analytics.",
      fullDescription:
        "Tech.Hub is a full-stack e-commerce web application built for an online electronics store. The client’s goal was to create a complete shopping experience where users can browse products, search and filter the catalog, add items to the cart, apply promo codes, choose delivery options, and complete checkout through credit card or PayPal. The project includes a customer-facing storefront and an admin panel for managing products, orders, discounts, stock status, and sales analytics. One of the main challenges was connecting all parts of the purchase flow into one smooth process: catalog, cart, checkout, payment, order confirmation, and admin order tracking. This was solved by building a structured React interface, an Express/Node.js backend, PostgreSQL database storage, and dynamic UI updates for cart and product data. Additional features include authentication, product CRUD, image upload, PayPal/Stripe payment support, promo code management, order dashboards, charts, and an AI assistant that helps users find relevant products faster.",
      repo: "https://github.com/BurdeyniyB/tech.hub",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "AI Agent"],
      accentColor: "#1b02ff",
      imageCount: 6,
    },
    {
      id: "music",
      title: "Custom Music Streaming Web App",
      shortDescription:
        "Full-stack music streaming platform with audio playback, uploads, playlists, search, authentication, real-time features, and scalable backend architecture built with React, TypeScript, Node.js, Express, MongoDB, JWT, and WebSockets.",
      fullDescription:
        "Full-stack music platform designed for streaming, uploading, and managing audio content with a clean and interactive user experience. The application includes music playback, search, playlist organization, secure authentication, and real-time functionality, making it suitable for modern content-driven platforms. This project highlights my ability to build custom web apps with structured frontend architecture, backend APIs, database logic, JWT-based authentication, and scalable real-time features using React, TypeScript, Node.js, Express, MongoDB, and WebSockets.",
      repo: "https://github.com/BurdeyniyB/music-platform-client",
      technologies: ["Next.js", "NestJS", "TypeScript", "MongoDB"],
      accentColor: "#FF025B",
      imageCount: 6,
    },
    {
      id: "store",
      title: "Custom E-Commerce Web App",
      shortDescription:
        "Full-stack e-commerce platform with a React frontend, Node.js/Express backend, PostgreSQL database, product catalog, filters, cart, authentication, order management, inventory tracking, checkout flow, and an admin dashboard.",
      fullDescription:
        "Custom full-stack e-commerce web application designed for managing products, processing orders, and improving the customer shopping experience. The solution includes product listing and filtering, cart and checkout pages, authentication, and an admin-style order management area for controlling store operations.\nThis portfolio project reflects my ability to build scalable web apps with a strong product structure, user-focused flows, and functionality ready for backend logic, payment integrations, inventory handling, and external API connections.",
      repo: "https://github.com/BurdeyniyB/online-store",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      accentColor: "#c81ef2",
      imageCount: 6,
    },
    {
      id: "GPT-trace",
      title: "GPT Trace",
      shortDescription:
        "Modern custom landing website with a clean responsive interface, conversion-focused structure, call-to-action sections, polished visual blocks, and user-friendly content flow designed to promote a product or service, improve brand visibility, and generate leads.",
      fullDescription:
        "Modern custom landing website designed to promote a product or service with a clean interface and conversion-focused structure. The project includes responsive sections, call-to-action elements, clear content flow, and visually polished blocks created to support marketing goals and improve user engagement. This portfolio project highlights my ability to build custom websites with modern design, structured layouts, and user-friendly experiences tailored for business presentation, brand visibility, and lead generation.",
      repo: "https://github.com/BurdeyniyB/GPT-Trace",
      technologies: ["Next.js", "NestJS", "TypeScript", "MongoDB", "AI/GPT"],
      accentColor: "#4410FF",
      imageCount: 5,
    },
    {
      id: "fashion-store",
      title: "Custom Online Fashion Store",
      shortDescription:
        "Custom fashion e-commerce website with a modern storefront, product listings, category browsing, promotional banners, and conversion-focused UI designed for online retail, with a scalable structure ready for cart, payments, user accounts, product management, and API integrations.",
      fullDescription:
        "Custom fashion e-commerce website designed to showcase products, promotions, and a clean online shopping experience. The project includes a modern storefront layout, product listing sections, category-based browsing, promotional banners, and conversion-focused UI blocks tailored for online retail. This project demonstrates my ability to create polished custom web interfaces for e-commerce brands, with scalable structure ready for features such as product management, shopping cart logic, user accounts, payment flows, and third-party API integrations.",
      repo: "https://github.com/BurdeyniyB/Crisp",
      technologies: ["React", "Node.js", "MongoDB"],
      accentColor: "#F2994A",
      imageCount: 6,
    },
    {
      id: "find-trend",
      title: "Custom Trend Aggregation Web App",
      shortDescription:
        "Custom SaaS-style web app for organizing trend-related content in one clean interface, with responsive design, clear navigation, pricing sections, and structure ready for accounts, subscriptions, saved collections, and API integrations.",
      fullDescription:
        "Custom SaaS-style web application for aggregating and organizing trend-related content in one place. This project was designed to help users reduce browser tab overload and manage relevant sources through a clean, structured product interface. The solution includes a modern responsive layout, clear navigation, reusable UI sections, pricing blocks, and a scalable product structure suitable for startup platforms and content-driven tools. Instead of presenting it as a simple landing page, this project showcases how I build custom web applications with a strong product mindset, clean user flows, and architecture ready for backend logic, user accounts, saved collections, subscriptions, and third-party API integrations.",
      repo: "https://github.com/BurdeyniyB/Findtrend",
      technologies: ["React", "Firebase"],
      accentColor: "#EBD803",
      imageCount: 5,
    },
    // {
    //   id: "quiz",
    //   title: "Quiz App",
    //   shortDescription:
    //     "Interactive quiz with multiple question types, scoring, and results review.",
    //   fullDescription:
    //     "An interactive quiz application built with React and TypeScript. Supports multiple question types: single choice, multiple choice, true/false, and open-ended. Features include a countdown timer, score tracking, per-question result breakdown, answer review mode, and a configurable question engine driven by a simple JSON format.",
    //   repo: "https://github.com/BurdeyniyB/Quiz",
    //   technologies: ["React", "TypeScript"],
    //   accentColor: "#e124fa",
    //   imageCount: 5,
    // },
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
          { once: true },
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
    this.collapsingId = id; // x shrinks (320ms)

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
            setTimeout(() => {
              this.enteringPartnerId = null;
            }, FADE_IN);
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
