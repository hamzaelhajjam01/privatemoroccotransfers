/** Site-wide settings. Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local (digits only, with country code). */
export const SITE_NAME = "Private Morocco Transfers";
export const SITE_URL = "https://www.privatemoroccotransfers.com";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212760426269";
export const SUPPORT_EMAIL = "contact@privatemoroccotransfers.com";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener");
}
