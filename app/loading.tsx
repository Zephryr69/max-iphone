import { LogoMark } from "@/components/logo-mark";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="absolute -inset-2 rounded-2xl border-2 border-accent/30 border-t-accent animate-spin" />
        <LogoMark size={56} />
      </div>
      <p className="text-muted text-[13.5px] font-medium tracking-wide">Chargement…</p>
    </div>
  );
}
