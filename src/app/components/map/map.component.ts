import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

interface MapItem {
  name: string;
  color: string;
  size: number;
}

interface Rect {
  cx: number;
  cy: number;
  hw: number;
  hh: number;
}

interface PositionedItem extends MapItem {
  top: string;
  left: string;
  opacity: number;
  bgColor: string;
  borderColor: string;
  moveX: string;
  moveY: string;
  animationDelay: string;
  animationDuration: string;
}

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements AfterViewInit {
  @ViewChild("container") containerRef!: ElementRef<HTMLElement>;

  items: MapItem[] = [
    // --- Найбільший Fiverr-попит ---
    { name: "Website Development", color: "#1EF2BD", size: 21 },
    { name: "Business Website", color: "#0ea5e9", size: 21 },
    { name: "E-commerce Website", color: "#f59e0b", size: 20 },
    { name: "Full Stack Development", color: "#14b8a6", size: 19 },
    { name: "JavaScript", color: "#F7DF1E", size: 19 },
    { name: "Stripe Integration", color: "#635BFF", size: 18 },
    { name: "Landing Page", color: "#6366f1", size: 18 },

    // --- React / Node stack ---
    { name: "React / Next.js", color: "#61DAFB", size: 18 },
    { name: "Node.js", color: "#0ABB04", size: 17 },
    { name: "Responsive Design", color: "#f43f5e", size: 17 },
    { name: "Tailwind CSS", color: "#38BDF8", size: 14 },
    { name: "TypeScript", color: "#3178C6", size: 14 },

    // --- AI / automation напрямок ---
    { name: "Automations & Agents", color: "#8b5cf6", size: 16 },
    { name: "AI Chatbot", color: "#FF03BC", size: 16 },
    { name: "AI Web App", color: "#c084fc", size: 16 },
    { name: "API Integration", color: "#0ea5e9", size: 15 },
    { name: "AI Integration", color: "#a855f7", size: 14 },
    { name: "RAG Chatbot", color: "#D35400", size: 14 },
    { name: "OpenAI / ChatGPT", color: "#10b981", size: 14 },
    { name: "LangChain", color: "#139913", size: 13 },

    // --- Бази даних / менш пошукові, але корисні для довіри ---
    { name: "PostgreSQL", color: "#2bffd1", size: 12 },
    { name: "MongoDB", color: "#00a900", size: 12 },
    { name: "Portfolio Website", color: "#10b981", size: 12 },
  ];

  positionedItems: PositionedItem[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const el = this.containerRef.nativeElement;
    this.placeItems(el.offsetWidth, el.offsetHeight);
    this.cdr.detectChanges();
  }

  private placeItems(cw: number, ch: number): void {
    const placed: Rect[] = [];
    const GAP = 14;
    const MAX_ATTEMPTS = 300;

    // largest items first — harder to fit, must go first
    const order = [...this.items.keys()].sort(
      (a, b) => this.items[b].size - this.items[a].size,
    );
    const result = new Array<PositionedItem>(this.items.length);

    for (const i of order) {
      const item = this.items[i];
      const { hw, hh } = this.estimateHalf(item);

      let rect = this.randomRect(hw, hh, cw, ch);

      for (let t = 0; t < MAX_ATTEMPTS; t++) {
        const candidate = this.randomRect(hw, hh, cw, ch);
        if (!placed.some((r) => this.overlaps(r, candidate, GAP))) {
          rect = candidate;
          break;
        }
      }

      placed.push(rect);

      const sign = () => (Math.random() > 0.5 ? 1 : -1);
      result[i] = {
        ...item,
        top: `${((rect.cy / ch) * 100).toFixed(2)}%`,
        left: `${((rect.cx / cw) * 100).toFixed(2)}%`,
        opacity: this.computeOpacity(item.size),
        bgColor: this.hexToRgba(item.color, 0.07),
        borderColor: this.hexToRgba(item.color, 0.28),
        moveX: `${(sign() * (8 + Math.random() * 14)).toFixed(1)}px`,
        moveY: `${(sign() * (5 + Math.random() * 9)).toFixed(1)}px`,
        animationDelay: `${+(Math.random() * 4).toFixed(2)}s`,
        animationDuration: `${+(5 + Math.random() * 4).toFixed(2)}s`,
      };
    }

    this.positionedItems = result;
  }

  private randomRect(hw: number, hh: number, cw: number, ch: number): Rect {
    return {
      cx: hw + Math.random() * Math.max(0, cw - hw * 2),
      cy: hh + Math.random() * Math.max(0, ch - hh * 2),
      hw,
      hh,
    };
  }

  private overlaps(a: Rect, b: Rect, gap: number): boolean {
    return (
      Math.abs(a.cx - b.cx) < a.hw + b.hw + gap &&
      Math.abs(a.cy - b.cy) < a.hh + b.hh + gap
    );
  }

  // rough estimate of half-dimensions based on font size and text length
  private estimateHalf(item: MapItem): { hw: number; hh: number } {
    return {
      hw: (item.name.length * item.size * 0.55 + 40) / 2,
      hh: (item.size * 1.4 + 20) / 2,
    };
  }

  private computeOpacity(size: number): number {
    if (size >= 28) return 0.9;
    if (size >= 22) return 0.8;
    if (size >= 16) return 0.7;
    return 0.6;
  }

  private hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
