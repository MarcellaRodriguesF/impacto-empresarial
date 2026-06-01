export const WHATSAPP_NUMBER = "553434849810";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Impacto e quero entender como vocês podem transformar a gestão da minha empresa.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  phoneLabel: "(34) 3484-9810",
  hours: "Segunda a Sexta, 8h às 18h",
  addressLine: "Avenida Raulino Cotta Pacheco, 1080 — Sala 01, Térreo",
  addressCity: "Martins, Uberlândia — MG",
  instagram: "https://www.instagram.com/impactogestaoempresarial/",
  facebook: "https://www.facebook.com/impactogestaoempresarial",
} as const;
