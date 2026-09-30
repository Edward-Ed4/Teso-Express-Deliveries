import { Link } from 'react-router-dom';
import {
  Zap, ShieldCheck, Clock, Star, ChevronRight,
  Bike, Package, BadgeCheck, Leaf,
} from 'lucide-react';
import { restaurants } from '../data/restaurants';

/* ── Small reusable trust-badge card ── */
function TrustCard({ icon: Icon, color, title, body }) {
  return (
    <div className="card p-6 flex flex-col gap-3">
      <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${color}`}>
        <Icon size={22} className="text-white" />
      </span>
      <h3 className="font-bold text-slate-900 text-base">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
    </div>
  );
}

/* ── Step in "how it works" ── */
function Step({ num, title, body }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center shadow-md text-sm">
        {num}
      </div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const featured = restaurants.slice(0, 3);

  return (
    <div>
      {/* ══════════ HERO ══════════ */}
      {/* Soroti city aerial as a dark, blurred backdrop */}
      <section className="relative overflow-hidden bg-soroti-night">
        <img
          src="/soroti-city.jpg"
          alt="Aerial view of Soroti City, Uganda"
          className="absolute inset-0 w-full h-full object-cover opacity-20 select-none pointer-events-none"
        />
        {/* gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-soroti-night/95 via-soroti-night/80 to-soroti-night/50 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          {/* ── Left: copy ── */}
          <div>
            <div className="inline-flex items-center gap-2 badge bg-brand-500/15 text-brand-400 mb-5">
              <Leaf size={13} />
              Soroti's first electric food delivery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Hot food,<br />
              <span className="text-brand-400">delivered fast</span><br />
              across Soroti.
            </h1>
            {/* Updated copy — action-oriented, non-AI feel */}
            <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-md">
              Get food from your favorite Soroti restaurants delivered right to
              your desk or doorstep. Every TED order is carried in specialized
              dust-proof hot boxes by certified, hygiene-trained riders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/restaurants" className="btn-primary text-base px-6 py-3.5">
                Order Now <ChevronRight size={18} />
              </Link>
              <a href="#how-it-works" className="btn-secondary text-base px-6 py-3.5 border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500">
                How it works
              </a>
            </div>
            {/* Quick stats */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              {[
                { v: '4',      l: 'Partner restaurants' },
                { v: '5+',     l: 'Trained riders' },
                { v: '<35 min', l: 'Avg delivery time' },
              ].map(({ v, l }) => (
                <div key={l}>
                  <span className="block text-2xl font-extrabold text-white">{v}</span>
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: real Spiro fleet photo ── */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main fleet photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/spiro-fleet.png"
                  alt="Spiro electric delivery bikes lined up in Uganda"
                  className="w-full h-72 object-cover object-center"
                />
              </div>

              {/* Floating badge — close-up Spiro bike tech */}
              <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/spiro-bike.jpg"
                  alt="Spiro Commando electric bike close-up"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text badge top-right */}
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 text-sm font-semibold text-slate-800 border border-slate-100">
                <span className="text-base">⚡</span> Zero emissions
              </div>
              <div className="absolute bottom-16 -right-4 bg-brand-500 text-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 text-xs font-semibold">
                <ShieldCheck size={14} /> Trained rider
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRUST / KEY DIFFERENTIATORS ══════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 badge bg-amber-100 text-amber-700 mb-3">
            <ShieldCheck size={13} /> Why TED is different
          </div>
          <h2 className="section-title">Delivery you can trust</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Most boda-boda delivery is informal and unaccountable. Teso Express Deliveries was
            built from the ground up around one promise: your food arrives exactly
            as the restaurant prepared it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <TrustCard
            icon={BadgeCheck}
            color="bg-brand-500"
            title="Certified food handlers"
            body="Every TED rider completes a food-handling and hygiene certification before their first delivery."
          />
          <TrustCard
            icon={Package}
            color="bg-soroti-sky"
            title="Sealed insulated bags"
            body="Orders travel in tamper-evident, dust-proof hot boxes — no spills, no contamination, still hot on arrival."
          />
          <TrustCard
            icon={ShieldCheck}
            color="bg-amber-500"
            title="Accountability guarantee"
            body="If your order arrives damaged or incorrect, TED compensates — protecting both you and the restaurant."
          />
          <TrustCard
            icon={Leaf}
            color="bg-teal-500"
            title="Electric Spiro bikes"
            body="Zero tailpipe emissions, quieter roads, and lower running costs — a greener delivery model for Soroti."
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
              <Link key={r.id} to={`/restaurants/${r.id}`} className="card group hover:shadow-md transition-shadow">
                {/* Real food photo banner */}
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* subtle dark overlay at bottom for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                        {r.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{r.cuisine}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg flex-shrink-0">
                      <Star size={12} fill="currentColor" /> {r.rating}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Clock size={12} /> {r.deliveryTime}</span>
                    <span className="flex items-center gap-1"><Bike size={12} /> UGX {r.deliveryFee.toLocaleString()} fee</span>
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
            <div className="inline-flex items-center gap-2 badge bg-brand-100 text-brand-700 mb-4">
              <Zap size={13} /> Simple. Fast. Reliable.
            </div>
            <h2 className="section-title mb-8">How TED works</h2>
            <div className="flex flex-col gap-7">
              <Step
                num={1}
                title="Browse & order"
                body="Pick your favorite meal from our featured Soroti restaurant menus — right here, no phone calls needed."
              />
              <Step
                num={2}
                title="Eco-friendly dispatch"
                body="A trained TED rider collects your food using a quiet, zero-emission Spiro electric bike. No fumes, no noise."
              />
              <Step
                num={3}
                title="Sealed delivery"
                body="Enjoy your lunch fresh and hot, safely sealed in a dust-proof insulated box against Soroti's roads."
              />
              <Step
                num={4}
                title="Track & receive"
                body="Live stage updates let you know exactly where your order is — from kitchen to doorstep."
              />
            </div>
          </div>

          {/* Explainer card — Soroti context with city photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/soroti-city.jpg"
              alt="Soroti City aerial view showing Soroti Rock"
              className="w-full h-80 object-cover object-top"
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-soroti-night via-soroti-night/80 to-transparent" />
            {/* text on top of photo */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="text-lg font-bold text-white mb-3">
                Why delivery has been hard in Soroti — until now
              </h3>
              <ul className="text-sm text-slate-300 space-y-2 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0 mt-0.5">▸</span>
                  Most restaurants have no delivery — customers eat in or collect.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 flex-shrink-0 mt-0.5">▸</span>
                  Informal boda-boda delivery: spills, contamination, zero accountability.
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-400 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-brand-200 font-medium">
                    TED fixes this with trained riders, sealed hot boxes, and a compensation policy.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="bg-brand-500 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Ready to order?</h2>
          <p className="text-brand-100 mb-7 text-base">
            Browse Soroti's top restaurants and get food delivered to your door — fresh, safe, and fast.
          </p>
          <Link to="/restaurants" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-xl shadow-lg hover:bg-brand-50 transition-colors text-base active:scale-95">
            Browse restaurants <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
