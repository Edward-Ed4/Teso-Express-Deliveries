import { Zap, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-soroti-night text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-8 h-8 bg-brand-500 rounded-lg">
              <Zap size={16} className="text-white" fill="white" />
            </span>
            <span className="font-bold text-white text-lg">
              Teso Express <span className="text-brand-400">Deliveries</span>
            </span>
          </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Soroti's first dedicated food delivery service — powered by clean
            electric Spiro motorcycles and trained, accountable riders.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 badge bg-brand-900 text-brand-300">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            Electric · Zero emissions · Modern
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Navigate</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: '/',            label: 'Home' },
              { to: '/restaurants', label: 'Restaurants' },
              { to: '/cart',        label: 'My Cart' },
              { to: '/tracking',    label: 'Track Order' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <span>+256 770 123 456</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <span>hello@ted.ug</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <span>Soroti Town, Eastern Uganda</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Teso Express Deliveries (TED) · Soroti, Uganda ·{' '}
        <span className="text-brand-600">MVP Demo Build</span>
      </div>
    </footer>
  );
}
