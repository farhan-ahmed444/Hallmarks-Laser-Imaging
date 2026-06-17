import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const footerLinks = {
  services: [
    { label: 'Laser Marking & Engraving', path: '/services/laser-engraving' },
    { label: 'Nameplates & Data Plates', path: '/services/nameplates' },
    { label: 'Asset Tags & Barcode Labels', path: '/services/asset-tags' },
    { label: 'Industrial Signage', path: '/services/industrial-labels' },
    { label: 'Control Panels & Overlays', path: '/services/control-panels' },
    { label: 'Custom Manufacturing', path: '/services/custom-manufacturing' },
  ],
  products: [
    { label: 'Metal Nameplates', path: '/products' },
    { label: 'Asset Tags', path: '/products' },
    { label: 'Barcode Labels', path: '/products' },
    { label: 'Equipment Labels', path: '/products' },
    { label: 'Control Panels', path: '/products' },
    { label: 'Engraved Components', path: '/products' },
  ],
  industries: [
    { label: 'Manufacturing', path: '/industries#manufacturing' },
    { label: 'Aerospace', path: '/industries#aerospace' },
    { label: 'Defense', path: '/industries#defense' },
    { label: 'Medical', path: '/industries#medical' },
    { label: 'Energy', path: '/industries#energy' },
    { label: 'Commercial Equipment', path: '/industries#commercial-equipment' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Request Quote', path: '/request-quote' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                <span className="text-accent text-lg font-black">HL</span>
              </div>
              <div>
                <span className="text-white font-extrabold text-lg block leading-tight">Hallmarks</span>
                <span className="text-body text-xs tracking-wider">LASER IMAGING</span>
              </div>
            </Link>
            <p className="text-body/70 text-sm leading-relaxed mb-6 max-w-xs">
              Precision laser marking and industrial identification solutions since 1985. Serving demanding industries worldwide.
            </p>
            <div className="flex gap-3">
              {[FaLinkedin, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-body/50 hover:text-accent hover:border-accent/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-body/70 text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-body/70 text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-body/70 text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-body/70 text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: HiPhone, text: '+1 (800) 555-LASER', href: 'tel:+18005555273' },
              { icon: HiMail, text: 'info@hallmarkslaser.com', href: 'mailto:info@hallmarkslaser.com' },
              { icon: HiLocationMarker, text: '1234 Industrial Blvd, Detroit, MI 48201', href: '#' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-3 text-body/60 hover:text-accent transition-colors text-sm"
              >
                <item.icon className="w-5 h-5 text-accent" />
                {item.text}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body/40 text-xs">
            &copy; {new Date().getFullYear()} Hallmarks Laser Imaging. All rights reserved. Precision Manufacturing Meets Advanced Laser Technology.
          </p>
          <div className="flex gap-6 text-xs text-body/40">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
