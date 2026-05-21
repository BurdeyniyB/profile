interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_SHOW_CONTACTS: string;
  readonly NG_APP_WHATSAPP: string;
  readonly NG_APP_TELEGRAM: string;
  readonly NG_APP_TELEGRAM_BOOKING: string;
  readonly NG_APP_EMAIL: string;
  readonly NG_APP_UPWORK: string;
  readonly NG_APP_GITHUB: string;
  readonly NG_APP_LINKEDIN: string;
}

declare const process: { env: Env };
