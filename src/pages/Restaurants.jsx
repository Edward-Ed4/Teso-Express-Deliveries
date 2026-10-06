import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Bike, Search, ChevronRight, ShieldCheck } from 'lucide-react';
import { restaurants } from '../data/restaurants';

const ALL_TAGS = ['All', ...Array.from(new Set(restaurants.flatMap((r) => r.tags)))];

export default function Restaurants() {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const filtered = restaurants.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(query.toLowerCase());
    const matchesTag = activeTag === 'All' || r.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-display section-title">Partner Restaurants</h1>
        <p className="text-slate-500 mt-1 text-sm">
          {restaurants.length} restaurants delivering across Soroti via TED
        </p>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search restaurants or cuisine…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field pl-10 shadow-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                activeTag === tag
                  ? 'bg-brand-500 border-brand-500 text-white shadow-md shadow-brand-200'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurant grid */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center text-slate-400">
          <Search size={40} className="mx-auto mb-4 text-slate-300" />
          <p className="font-semibold">No restaurants match your search</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r) => (
            <Link
              key={r.id}
              to={`/restaurants/${r.id}`}
              className="card group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)] transition-all duration-200"
            >
              {/* Photo banner */}
              <div className="h-36 overflow-hidden relative">
                <img
                  src={r.photo}
                  alt={r.cuisine}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {r.open && (
                  <span className="absolute top-3 right-3 badge bg-brand-500 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Open
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h2 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {r.name}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">{r.cuisine}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg flex-shrink-0">
                    <Star size={12} fill="currentColor" /> {r.rating}
                    <span className="text-slate-400 font-normal">({r.reviewCount})</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                  {r.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock size={12} /> {r.deliveryTime}</span>
                    <span className="flex items-center gap-1"><Bike size={12} /> UGX {r.deliveryFee.toLocaleString()}</span>
                  </div>
                  <span className="flex items-center gap-0.5 text-brand-600 font-semibold">
                    Order <ChevronRight size={13} />
                  </span>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <span key={t} className="badge bg-slate-100 text-slate-600 text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Bottom trust note */}
      <div className="mt-12 trust-banner flex gap-4 items-start">
        <ShieldCheck size={18} className="text-brand-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-slate-800 text-sm">All partner restaurants are TED verified</p>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
            Every restaurant on Teso Express Deliveries has agreed to our food quality standards. Our riders use
            sealed insulated bags and are trained in safe food handling — so your meal arrives exactly
            as it left the kitchen.
          </p>
        </div>
      </div>
    </div>
  );
}
