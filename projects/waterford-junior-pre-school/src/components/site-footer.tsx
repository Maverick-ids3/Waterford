import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/waterfordjunior",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M24 12.073C24 5.404 18.629 0 12 0S0 5.404 0 12.073c0 6.028 4.388 11.025 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.098 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 1.938 2.09.521 3.507.004 5.35-.08 7.205-.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.853.6 3.697 2.018 5.114 1.417 1.417 3.261 1.932 5.114 2.018C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.853-.085 3.697-.6 5.114-2.018 1.417-1.417 1.932-3.261 2.018-5.114C23.986 15.668 24 15.259 24 12c0-3.259-.014-3.668-.072-4.948-.085-1.853-.6-3.697-2.018-5.114C20.493.521 18.65.006 16.795-.08 15.667-.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/263000000000",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-waterford-black text-waterford-white">
      {/* Main footer content */}
      <div className="mx-auto w-[min(1160px,calc(100%-40px))] grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">

        {/* Brand + Description + Social */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/waterford-logo.png"
              alt=""
              width={52}
              height={52}
              className="size-[52px] rounded-full"
            />
            <p className="m-0 font-black text-lg leading-tight">
              Waterford Junior &amp; Pre-School
            </p>
          </div>
          <p className="text-[0.92rem] text-white/60 leading-relaxed max-w-[300px]">
            A caring community dedicated to early learning, confident junior
            schooling, and the holistic development of every child — nurturing
            curious minds and strong characters since our founding.
          </p>
          <p className="text-[0.78rem] font-black uppercase tracking-widest text-waterford-gold">
            Explore. Discover. Learn.
          </p>

          {/* Social media icons */}
          <div className="flex flex-wrap gap-2 mt-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: s.color }}
                className="flex items-center justify-center size-10 rounded-lg bg-white/[0.06] hover:bg-white/[0.14] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[0.78rem] font-black uppercase tracking-widest text-waterford-gold m-0">
            Quick Links
          </h3>
          <nav className="flex flex-col gap-2" aria-label="Footer quick links">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.92rem] font-semibold text-white/[0.72] hover:text-waterford-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[0.78rem] font-black uppercase tracking-widest text-waterford-gold m-0">
            Contact Us
          </h3>
          <div className="flex flex-col gap-3 text-[0.92rem] text-white/[0.72]">
            <p className="m-0 flex flex-col gap-0.5">
              <span className="font-bold text-white/90">Phone</span>
              <a href="tel:+263000000000" className="hover:text-waterford-gold transition-colors">+263 000 000 000</a>
            </p>
            <p className="m-0 flex flex-col gap-0.5">
              <span className="font-bold text-white/90">Email</span>
              <a href="mailto:info@waterfordjunior.ac.zw" className="hover:text-waterford-gold transition-colors">info@waterfordjunior.ac.zw</a>
            </p>
            <p className="m-0 flex flex-col gap-0.5">
              <span className="font-bold text-white/90">Office Hours</span>
              <span>Mon – Fri, 8:00 AM – 4:00 PM</span>
            </p>
            <p className="m-0 flex flex-col gap-0.5">
              <span className="font-bold text-white/90">Locations</span>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6507+Budiriro+5,+Harare,+Zimbabwe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-waterford-gold transition-colors underline-offset-2 hover:underline"
              >
                📍 6507 Budiriro 5, Harare
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=24705+Budiriro+2,+Harare,+Zimbabwe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-waterford-gold transition-colors underline-offset-2 hover:underline"
              >
                📍 24705 Budiriro 2, Harare
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto w-[min(1160px,calc(100%-40px))] flex flex-wrap items-center justify-between gap-4 py-5 text-[0.8rem] text-white/40">
          <span>
            &copy; {new Date().getFullYear()} Waterford Junior &amp; Pre-School. All rights reserved.
          </span>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-waterford-gold transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-waterford-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
