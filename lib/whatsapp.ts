export const WA_NUMBER = "2290169118745";
export const WA_DISPLAY = "+229 01 69 11 87 45";

export function waLink(message?: string): string {
  const text =
    message ?? "Bonjour Max iPhone 👋 Je viens du site, j'aimerais être conseillé.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
