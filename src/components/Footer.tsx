import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.6 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.5 6.2s-.3-1.9-1.1-2.7c-1-.8-2.1-.8-2.6-.9C16.8 2.4 12 2.4 12 2.4s-4.8 0-7.8.2c-.5.1-1.6.1-2.6.9C.8 4.3.5 6.2.5 6.2S.2 8.3.2 10.5v2c0 2.2.3 4.3.3 4.3s.3 1.9 1.1 2.7c1 .8 2.3.8 2.9.9C6.3 20.6 12 20.6 12 20.6s4.8 0 7.8-.2c.5-.1 1.6-.1 2.6-.9.8-.8 1.1-2.7 1.1-2.7s.3-2.1.3-4.3v-2c0-2.2-.3-4.3-.3-4.3zM9.7 15V8.6l7 3.2-7 3.2z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-1.9.9-1.9 1.9v2.2h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18.2 2h3.4l-7.4 8.5 8.7 11.5h-6.8L11 14.5l-5.8 7.5H1.7l7.9-9L1 2h7l4.5 5.9L18.2 2zm-1.2 17.9h1.9L7.1 3.9H5L17 19.9z"/>
  </svg>
);

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/equipment', label: 'Equipment' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://www.instagram.com/kodner.aerial/', Icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://www.youtube.com/@KodnerAerial', Icon: YoutubeIcon, label: 'YouTube' },
  { href: 'https://facebook.com/kodneraerialservices', Icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://twitter.com/kodneraerialservices', Icon: XIcon, label: 'Twitter / X' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1220] border-t border-[#0d3d54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-white font-bold text-2xl tracking-wider">KODNER</div>
              <div className="text-[#e8701a] text-xs tracking-[0.3em] font-medium uppercase mt-0.5">
                Aerial Services
              </div>
              <div className="text-[#1a4a5c] text-xs tracking-[0.2em] mt-0.5">
                AIR · LAND · VIEW
              </div>
            </div>
            <p className="text-[#7a99b8] text-sm leading-relaxed">
              Professional drone photography and videography services. Capturing the world from above with cinematic precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#7a99b8] text-sm hover:text-[#1a8fbf] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#7a99b8] text-sm">
                <Mail size={15} className="text-[#1a8fbf] flex-shrink-0 mt-0.5" />
                <span>isaackodner@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-[#7a99b8] text-sm">
                <MapPin size={15} className="text-[#e8701a] flex-shrink-0 mt-0.5" />
                <span>Bay Area, CA</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded border border-[#0d3d54] text-[#7a99b8] hover:text-[#1a8fbf] hover:border-[#1a8fbf] hover:bg-[#1a8fbf]/10 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-[#1a4a5c] text-xs mt-5 leading-relaxed">
              Follow <span className="text-[#7a99b8]">@kodner.aerial</span> on Instagram for the latest aerial photos and videos.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#1a4a5c] text-xs">
            &copy; {new Date().getFullYear()} Kodner Aerial Services. All rights reserved.
          </p>
          <p className="text-[#1a4a5c] text-xs">
            AIR · LAND · VIEW
          </p>
        </div>
      </div>
    </footer>
  );
}
