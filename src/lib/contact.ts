import { businessConfig } from "@/data/business";

export const hasWhatsApp = () => businessConfig.whatsapp.replace(/\D/g, "").length >= 8;
export const hasPhone = () => businessConfig.phone.trim().length > 0;
export const hasEmail = () => businessConfig.email.trim().length > 0;

export const whatsappHref = (message?: string) => {
  const number = businessConfig.whatsapp.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
};

export const telHref = () => `tel:${businessConfig.phone.replace(/[^\d+]/g, "")}`;
export const mailHref = () => `mailto:${businessConfig.email}`;

export const DEFAULT_ENQUIRY = `Hello ${businessConfig.name}, I would like to make an enquiry.`;
