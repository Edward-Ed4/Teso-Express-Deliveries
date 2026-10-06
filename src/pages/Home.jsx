import { Link } from 'react-router-dom';
import {
  Zap, ShieldCheck, Clock, Star, ChevronRight,
  Bike, Package, BadgeCheck, Leaf,
} from 'lucide-react';
import { restaurants } from '../data/restaurants';

function TrustCard({ icon: Icon, color, title, body }) {
  return (
    <div className="card p-5 flex flex-col gap-3">
      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${color}`}>
        <Icon size={20} className="text-white" />
      </span>
      <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
    </div>
  );
}

function Step({ num, title, body }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center shadow text-sm font-display">
        {num}
      </div>
      <div>
        <p className="font-semibold text-slate-900 text-sm">{title}</p>
        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const featured = restaurants.slice(0, 3);

  return (
    <div>
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden bg-soroti-night">
        <img
          src="/soroti-city.jpg"
          alt="Aerial view of Soroti City, Uganda"
          className="absolute inset-0 w-full h-full object-cover opacity-20 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soroti-night/95 via-soroti-night/80 to-soroti-night/50 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            {/* Single badge — kept only here where it earns its place */}
            <div className="eyebrow mb-5 text-brand-700">
              <Leaf size={12} />
              Soroti's first electric food delivery
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Hot food,<br />
              <span className="text-brand-400">delivered fast</span><br />
              across Soroti.
            </h1>

            <p className="mt-5 text-slate-300 text-base leading-relaxed max-w-md">
              Get food from your favorite Soroti restaurants delivered right to
              your desk or doorstep. Every TED order is carried in specialized
              dust-proof hot boxes by certified, hygiene-trained riders.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/restaurants" className="btn-primary text-sm px-6 py-3">
                Order now <ChevronRight size={16} />
              </Link>
              <a href="#how-it-works" className="btn-secondary text-sm px-6 py-3 border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500">
                How it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-400">
              {[
                { v: '4',       l: 'Partner restaurants' },
                { v: '5+',      l: 'Trained riders' },
                { v: '<35 min', l: 'Avg delivery time' },
              ].map(({ v, l }) => (
                <div key={l}>
                  <span className="block text-2xl font-extrabold text-white font-display">{v}</span>
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image — real Spiro fleet */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/spiro-fleet.png"
                  alt="Spiro electric delivery bikes lined up in Uganda"
                  className="w-full h-72 object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/spiro-bike.jpg"
                  alt="Spiro Commando electric bike close-up"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-md px-3 py-2 flex items-center gap-2 text-xs font-semibold text-slate-800 border border-slate-100">
                <span>⚡</span> Zero emissions
              </div>
              <div className="absolute bottom-16 -right-4 bg-brand-500 text-white rounded-lg shadow-md px-3 py-2 flex items-center gap-1.5 text-xs font-semibold">
                <ShieldCheck size={13} /> Trained rider
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHY TED ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* No badge here — just a direct heading */}
        <div className="text-center mb-10">
          <h2 className="section-title">What makes TED different</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Most boda-boda delivery is informal and unaccountable. TED was built
            around one promise: your food arrives exactly as the restaurant prepared it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TrustCard
            icon={BadgeCheck}
            color="bg-brand-500"
            title="Certified food handlers"
            body="Every TED rider completes a food-handling and hygiene certification before their first delivery."
          />
          <TrustCard
            icon={Package}
            color="bg-soroti-sky"
            title="Dust-proof hot boxes"
            body="Orders travel in sealed, insulated delivery boxes — no spills, no road dust, still hot on arrival."
          />
          <TrustCard
            icon={ShieldCheck}
            color="bg-amber-500"
            title="Compensation guarantee"
            body="If your order arrives wrong or damaged, TED compensates — protecting both you and the restaurant."
          />
          <TrustCard
            icon={Leaf}
            color="bg-teal-500"
            title="Electric Spiro bikes"
            body="Zero tailpipe emissions, quieter roads, lower running costs — a greener model built for Soroti."
          />
        </div>
      </section>

      {/* ══════════ FEATURED RESTAURANTS ══════════ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title">Partner restaurants</h2>
              <p className="text-slate-500 mt-1 text-sm">All vetted. All delivering via TED.</p>
            </div>
            <Link to="/restaurants" className="btn-ghost text-brand-600 text-sm font-semibold">
              See all <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((r) => (
              <Link key={r.id} to={`/restaurants/${r.id}`} className="card group hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(15,23,42,0.10)] transition-all duration-200">
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                        {r.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{r.cuisine}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg flex-shrink-0">
                      <Star size={11} fill="currentColor" /> {r.rating}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Clock size={11} /> {r.deliveryTime}</span>
                    <span className="flex items-center gap-1"><Bike size={11} /> UGX {r.deliveryFee.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* No badge — heading stands on its own */}
            <h2 className="section-title mb-2">How an order works</h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              From choosing your meal to your door in four straightforward steps.
            </p>
            <div className="flex flex-col gap-6">
              <Step
                num={1}
                title="Pick your meal"
                body="Choose from our partner restaurant menus, add items to your cart, and confirm your address."
              />
              <Step
                num={2}
                title="Kitchen gets to work"
                body="Your order goes straight to the restaurant. They prepare it fresh while TED dispatch assigns a rider."
              />
              <Step
                num={3}
                title="Rider collects, sealed"
                body="A uniformed TED rider packs your food into a dust-proof insulated box and heads your way on an electric Spiro bike."
              />
              <Step
                num={4}
                title="Live updates to your door"
                body="Track each stage in real time. You always know exactly where your order is — no guessing."
              />
            </div>
          </div>

          {/* Soroti city photo with context overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/soroti-city.jpg"
              alt="Soroti City aerial view showing Soroti Rock"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soroti-night via-soroti-night/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-base font-display font-bold text-white mb-3">
                Why delivery was hard in Soroti — until now
              </h3>
              <ul className="text-sm text-slate-300 space-y-2 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">▸</span>
                  Most restaurants have no delivery — customers eat in or collect in person.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0">▸</span>
                  Informal boda-boda runs carry real risk: spills, contamination, zero accountability.
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-400 flex-shrink-0">✓</span>
                  <span className="text-brand-200 font-medium">
                    TED gives restaurants a safe, accountable way to offer delivery for the first time.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-brand-500 py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white mb-3">
            Ready to place your first order?
          </h2>
          <p className="text-brand-100 mb-7 text-sm leading-relaxed">
            Browse Soroti's top restaurants and get food at your door — fresh, sealed, and on time.
          </p>
          <Link
            to="/restaurants"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-700 font-semibold rounded-xl shadow hover:bg-brand-50 transition-colors text-sm active:scale-95"
          >
            Browse restaurants <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
