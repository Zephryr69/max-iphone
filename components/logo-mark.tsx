import Image from "next/image";

/**
 * Le fond sombre du badge est nécessaire : le logo fourni a un blanc de la
 * pomme peu lisible sans arrière-plan sombre (transparent sur fond clair du
 * header = quasi invisible). On garde donc un badge sombre fixe, dans les deux
 * thèmes, fidèle au fichier logo original.
 */
export function LogoMark({ size = 42 }: { size?: number }) {
  return (
    <div
      className="rounded-[13px] grid place-items-center flex-none bg-[#06080C] border border-white/5"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo-icon.png"
        alt="Max iPhone"
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size * 0.72, height: "auto" }}
      />
    </div>
  );
}
