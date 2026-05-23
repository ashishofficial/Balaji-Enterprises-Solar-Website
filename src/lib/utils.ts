export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function whatsappMessage(text: string): string {
  const base = "https://wa.me/919452099320";
  return `${base}?text=${encodeURIComponent(text)}`;
}
