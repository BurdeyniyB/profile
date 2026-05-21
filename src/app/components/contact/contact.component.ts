import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactService } from "../../services/contact.service";

const SERVICES = ["Web Development", "Frontend", "Backend / API", "Consulting"];
const BUDGETS = ["Less than $100", "$100 – $250", "More than $250"];

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  readonly serviceOptions = SERVICES;
  readonly budgetOptions = BUDGETS;

  fullName = "";
  email = "";
  text = "";
  selectedService: string | null = null;
  selectedBudget: string | null = null;
  file: File | null = null;
  dragging = false;
  errors = { fullName: false, email: false, text: false };
  fileName = "";

  constructor(private contactService: ContactService) {}

  toggleService(s: string): void {
    this.selectedService = this.selectedService === s ? null : s;
  }

  toggleBudget(b: string): void {
    this.selectedBudget = this.selectedBudget === b ? null : b;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      this.file = input.files[0];
      this.fileName = this.file.name;
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragging = true;
  }

  onDragLeave(): void {
    this.dragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging = false;
    const dropped = event.dataTransfer?.files[0];
    if (dropped) {
      this.file = dropped;
      this.fileName = dropped.name;
    }
  }

  triggerFileInput(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  async onSubmit(form: NgForm): Promise<void> {
    this.errors = {
      fullName: this.fullName.trim() === "",
      email: this.email.trim() === "",
      text: this.text.trim() === "",
    };
    if (Object.values(this.errors).includes(true)) return;

    const formData = new FormData();
    formData.append("fullName", this.fullName);
    formData.append("email", this.email);
    formData.append("text", this.text);
    if (this.selectedService) formData.append("service", this.selectedService);
    if (this.selectedBudget) formData.append("budget", this.selectedBudget);
    if (this.file) formData.append("file", this.file);

    this.contactService.sendMessage(formData).subscribe({
      next: () => this.clearForm(form),
      error: (err) => console.error(err),
    });
  }

  private clearForm(form: NgForm): void {
    this.fullName = "";
    this.email = "";
    this.text = "";
    this.selectedService = null;
    this.selectedBudget = null;
    this.file = null;
    this.fileName = "";
    form.resetForm();
  }
}
