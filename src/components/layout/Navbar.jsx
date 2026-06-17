import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import Button from '../ui/Button';
import { servicesData } from '../../data';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    megaMenu: servicesData.map(s => ({
      label: s.title,
      path: `/services/${s.id}`,
      description: s.description.substring(0, 60) + '...',
    })),
  },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false);
      setMegaOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 z-50">
            <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
              <span className="text-accent text-lg font-black">HL</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-extrabold text-lg block leading-tight">Hallmarks</span>
              <span className="text-body text-xs tracking-wider">LASER IMAGING</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.megaMenu && setMegaOpen(true)}
                onMouseLeave={() => link.megaMenu && setMegaOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-8 text-sm font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-white/80 hover:text-accent'
                  }`}
                >
                  {link.label}
                  {link.megaMenu && <HiChevronDown className={`w-3 h-3 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />}
                </Link>

                {link.megaMenu && megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    <div className="bg-primary/95 backdrop-blur-xl border border-border rounded-2xl p-6 w-[600px] shadow-2xl shadow-black/30">
                      <div className="grid grid-cols-2 gap-4">
                        {link.megaMenu.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="group p-4 rounded-xl hover:bg-secondary/50 transition-all"
                          >
                            <span className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                              {item.label}
                            </span>
                            <p className="text-body/60 text-xs mt-1 leading-relaxed">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button href="/request-quote" variant="primary" size="sm" className="hidden md:inline-flex">
              Request a Quote
            </Button>
            <button
              className="lg:hidden z-50 text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 bg-primary/98 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-2xl font-bold transition-colors ${
                    location.pathname === link.path ? 'text-accent' : 'text-white/80 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/request-quote" variant="primary" size="lg" className="mt-4">
                Request a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
