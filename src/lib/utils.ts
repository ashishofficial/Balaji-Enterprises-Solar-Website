export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function whatsappMessage(text: string, number = "919452099320"): string {
  const base = `https://wa.me/${number}`;
  return `${base}?text=${encodeURIComponent(text)}`;
}
