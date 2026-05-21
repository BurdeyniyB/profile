import { Component } from "@angular/core";

interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accentColor: string;
  size: "sm" | "lg";
  chartBars?: number[];
}

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent {
  readonly services: ServiceItem[] = [
    {
      id: "landing",
      number: "01",
      category: "Conversion",
      title: "Landing Page",
      subtitle: "Target Landing Pages",
      description:
        "Conversion-focused websites with clear structure and a strong CTA for maximum ad campaign effectiveness.",
      tags: ["Next.js", "Tailwind", "GSAP"],
      accentColor: "#6366f1",
      size: "sm",
    },
    {
      id: "ecommerce",
      number: "02",
      category: "Commerce",
      title: "E-commerce",
      subtitle: "Online Stores & Marketplaces",
      description:
        "Full-featured commerce platforms with catalog, cart, payment systems, and an admin panel for managing products and orders.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      accentColor: "#f59e0b",
      size: "lg",
    },
    {
      id: "corporate",
      number: "03",
      category: "Business",
      title: "Corporate Websites",
      subtitle: "Brand Representation",
      description:
        "Company presentation websites with CMS, multilingual support, and integration with corporate systems.",
      tags: ["React", "Strapi", "i18n"],
      accentColor: "#0ea5e9",
      size: "sm",
    },
    {
      id: "portfolio",
      number: "04",
      category: "Personal",
      title: "Personal Sites",
      subtitle: "Portfolios & Personal Pages",
      description:
        "Minimalist personal websites and digital portfolios for professionals and creative teams.",
      tags: ["React", "Framer Motion"],
      accentColor: "#10b981",
      size: "sm",
    },
    {
      id: "promo",
      number: "05",
      category: "Campaign",
      title: "Promo Sites",
      subtitle: "Product Launches & Campaigns",
      description:
        "Campaign websites for product launches, events, or limited-time promotions with striking animations and countdown timers.",
      tags: ["React", "Three.js", "GSAP"],
      accentColor: "#f43f5e",
      size: "sm",
    },
    {
      id: "media",
      number: "06",
      category: "Media",
      title: "Information Portals",
      subtitle: "News Sites, Blogs & Media",
      description:
        "Scalable media platforms with CMS, full-text search, categories, and subscription systems.",
      tags: ["Next.js", "Sanity", "Elasticsearch"],
      accentColor: "#14b8a6",
      size: "lg",
    },
    {
      id: "saas",
      number: "07",
      category: "Platform",
      title: "Web Services & SaaS",
      subtitle: "Software as a Service",
      description:
        "Complex web applications and SaaS platforms with authentication, billing, and a full API ecosystem.",
      tags: ["React", "NestJS", "PostgreSQL", "Redis"],
      accentColor: "#8b5cf6",
      size: "lg",
      chartBars: [40, 65, 50, 80, 55, 90, 70],
    },
    {
      id: "b2b",
      number: "08",
      category: "Enterprise",
      title: "B2B / B2C Portals",
      subtitle: "Dashboards, CRM & ERP Systems",
      description:
        "Client portals and management systems with role-based access, audit trails, and deep business logic.",
      tags: ["React", "NestJS", "GraphQL", "PostgreSQL"],
      accentColor: "#3b82f6",
      size: "lg",
    },
  ];

  readonly ecomProducts = [0, 1, 2, 3, 4, 5];

  hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
