import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 bg-[#050816] px-6 py-20 text-white md:px-20">
      <div className="max-w-7xl">
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-12">
          {/* Brand */}
          <div className="max-w-xs">
            <h3 className="font-(--font-playfair) text-3xl">Aurora Haven</h3>

            <p className="mt-4 text-sm leading-7 text-white/60">A luxury Nordic retreat designed for travelers seeking comfort, nature, and unforgettable moments beneath the Northern Lights.</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#D4AF37]">Explore</h4>

            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="/#story" className="transition hover:text-[#D4AF37]">
                  Story
                </Link>
              </li>

              <li>
                <Link href="/#suites" className="transition hover:text-[#D4AF37]">
                  Suites
                </Link>
              </li>

              <li>
                <Link href="/#experience" className="transition hover:text-[#D4AF37]">
                  Experience
                </Link>
              </li>

              <li>
                <Link href="/room-grid" className="transition hover:text-[#D4AF37]">
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#D4AF37]">Contact</h4>

            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37]" />
                <span>hello@aurorahaven.com</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4AF37]" />
                <span>+45 12 34 56 78</span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D4AF37]" />
                <span>Nordic Wilderness Retreat</span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#D4AF37]">Follow</h4>

            <div className="flex gap-3">
              <Link href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                <FaInstagram size={18} />
              </Link>

              <Link href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                <FaFacebookF size={18} />
              </Link>

              <Link href="#" aria-label="Pinterest" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                <FaPinterestP size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Aurora Haven. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition hover:text-[#D4AF37]">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-[#D4AF37]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
