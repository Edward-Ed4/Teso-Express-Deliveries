import { Zap, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-[0_10px_18px_rgba(34,197,94,0.35)]">
              <Zap size={16} className="text-white" fill="white" />
            </span>
            <span className="font-display font-extrabold text-white text-lg">
              Teso Express <span className="text-brand-400">Deliveries</span>
            </span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Soroti's first dedicated food delivery service — powered by clean
            electric Spiro motorcycles and trained, accountable riders.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 text-xs font-medium text-brand-200">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Electric · Zero emissions · Modern
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-[0.16em]">Navigate</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: '/', label: 'Home' },
              { to: '/restaurants', label: 'Restaurants' },
              { to: '/cart', label: 'My Cart' },
              { to: '/tracking', label: 'Track Order' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-300 hover:text-brand-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-[0.16em]">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2 text-slate-300">
              <Phone size={14} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <span>+256 770 123 456</span>
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <Mail size={14} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <span>hello@ted.ug</span>
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <MapPin size={14} className="mt-0.5 text-brand-400 flex-shrink-0" />
              <span>Soroti Town, Eastern Uganda</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Teso Express Deliveries (TED) · Soroti, Uganda ·{' '}
        <span className="text-brand-400">MVP Demo Build</span>
      </div>
    </footer>
  );
}
