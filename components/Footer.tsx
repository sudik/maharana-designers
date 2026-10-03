import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-3">
            <Image
              src="/images/brand/logo-mark.png"
              alt="Maharana Designers"
              width={28}
              height={36}
              className="h-7 w-auto"
            />
            <p className="font-serif text-xl">Maharana Designers</p>
          </div>
          <p className="text-sm text-foreground/70 max-w-sm">
            Interior design consultancy creating warm, considered spaces for
            homes and businesses across Pune.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium mb-3">Explore</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link href="/portfolio" className="hover:text-accent">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-accent">Services</Link></li>
            <li><Link href="/about" className="hover:text-accent">About</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium mb-3">Get in touch</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>shiboo@maharanadesigners.com</li>
            <li>+91 73853 42723</li>
            <li>Pune, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-foreground/50">
          © {new Date().getFullYear()} Maharana Designers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
