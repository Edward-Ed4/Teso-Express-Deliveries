import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { cartCount, state } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: '/',             label: 'Home' },
    { to: '/restaurants',  label: 'Restaurants' },
    ...(state.activeOrder ? [{ to: '/tracking', label: 'Track Order' }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-[0_10px_18px_rgba(34,197,94,0.35)] transition-transform duration-200 group-hover:scale-105">
            <Zap size={20} className="text-white" fill="white" />
          </span>
          <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-[-0.04em]">
            Teso Express <span className="text-brand-600">Deliveries</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/80 p-1.5 shadow-inner border border-slate-200/80">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-slate-600 hover:text-brand-600 hover:bg-white/70'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/cart')}
            className="relative flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="View cart"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 flex items-center justify-center bg-brand-500 text-white text-[10px] font-bold rounded-full px-1 shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-slate-100 bg-white/95 px-4 py-3 flex flex-col gap-1 shadow-lg">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
