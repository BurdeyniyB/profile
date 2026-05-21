export const environment = {
  production: true,
  apiUrl: '/api/',
  showContacts: process.env['NG_APP_SHOW_CONTACTS'] !== 'false',
  contacts: {
    whatsapp: process.env['NG_APP_WHATSAPP'] ?? '',
    telegram: process.env['NG_APP_TELEGRAM'] ?? '',
    telegramBooking: process.env['NG_APP_TELEGRAM_BOOKING'] ?? '',
    email: process.env['NG_APP_EMAIL'] ?? '',
    upwork: process.env['NG_APP_UPWORK'] ?? '',
    github: process.env['NG_APP_GITHUB'] ?? '',
    linkedin: process.env['NG_APP_LINKEDIN'] ?? '',
  },
};
