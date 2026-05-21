import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import Typed from "typed.js";
import { AppConfigService } from "../../services/app-config.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild("typedEl") typedEl!: ElementRef;

  private typed!: Typed;

  constructor(readonly config: AppConfigService) {}

  ngAfterViewInit(): void {
    this.typed = new Typed(this.typedEl.nativeElement, {
      strings: ["Frontend Dev", "Backend Dev", "Full-Stack Dev", "AI Engineer"],
      typeSpeed: 20,
      loop: true,
      backSpeed: 20,
    });
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }

  downloadPDF(): void {
    const link = document.createElement("a");
    link.href = encodeURI("/files/CV - Borys Burdeinyi - Full stack.pdf");
    link.download = "CV - Borys Burdeinyi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
