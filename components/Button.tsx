import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants = {
  //   primary: "bg-[#D4AF37] text-[#050816] border border-[#D4AF37] hover:bg-white hover:text-[#050816]",
  primary: "bg-[#D4AF37] text-[#050816] border border-[#D4AF37] hover:bg-[#e2bd4f] hover:border-[#e2bd4f] hover:text-[#050816]",

  secondary: "bg-white text-[#050816] border border-white hover:bg-[#D4AF37] hover:text-[#050816]",

  //   tertiary: "bg-white/5 text-white border border-white/25 backdrop-blur-md hover:bg-white/15 hover:border-white/50",
  tertiary: "bg-white/5 text-white border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:text-white",
};

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-center text-sm font-semibold transition-all duration-300 ${variants[variant]}`}>
      {children}
    </Link>
  );
}
