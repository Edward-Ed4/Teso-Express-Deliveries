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
      <section className="relative overflow-hidden bg-soroti-night bg-hero-pattern">
        {/* decorative gradient orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-10 w-80 h-80 bg-soroti-sky/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
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
            <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-md">
              Order from your favourite Soroti restaurants and have it delivered
              by a trained, uniformed TED rider on a clean electric Spiro
              motorcycle — fresh, safe, and on time.
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
                { v: '4', l: 'Partner restaurants' },
                { v: '5+', l: 'Trained riders' },
                { v: '<35 min', l: 'Avg delivery time' },
              ].map(({ v, l }) => (
                <div key={l}>
                  <span className="block text-2xl font-extrabold text-white">{v}</span>
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual — electric bike illustration (pure CSS + emoji) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-brand-500/30 to-soroti-sky/20 flex items-center justify-center border border-brand-500/20 shadow-2xl">
                <span className="text-9xl select-none" role="img" aria-label="Electric delivery bike">🛵</span>
              </div>
              {/* floating badges */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-slate-800 border border-slate-100">
                <span className="text-lg">⚡</span> Electric bike
              </div>
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-slate-800 border border-slate-100">
                <ShieldCheck size={16} className="text-brand-500" /> Trained rider
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
            body="Orders travel in tamper-evident, temperature-controlled delivery bags — no spills, no contamination."
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
                {/* Colour banner */}
                <div className={`h-28 bg-gradient-to-r ${r.heroColor} flex items-center justify-center`}>
                  <span className="text-6xl" role="img" aria-label={r.cuisine}>{r.emoji}</span>
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
              <Step num={1} title="Browse & order" body="Pick a partner restaurant, choose your items, and confirm your delivery address — right here in the app." />
              <Step num={2} title="Restaurant prepares" body="Your order goes straight to the kitchen. The restaurant contacts TED dispatch to request a rider." />
              <Step num={3} title="Rider picks up" body="A uniformed TED rider collects your sealed order in an insulated delivery bag and heads your way." />
              <Step num={4} title="Track & receive" body="Watch live stage updates as your rider approaches. No guessing — you always know where your food is." />
            </div>
          </div>

          {/* Explainer card — the Soroti context */}
          <div className="bg-gradient-to-br from-soroti-night to-slate-800 rounded-3xl p-8 text-white shadow-xl">
            <div className="text-4xl mb-4">🏙️</div>
            <h3 className="text-xl font-bold mb-3">Why delivery has been hard in Soroti — until now</h3>
            <ul className="text-sm text-slate-300 space-y-3 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">▸</span>
                Most Soroti restaurants have no delivery infrastructure — customers must eat in or collect.
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">▸</span>
                Informal boda-boda delivery carries real risk: spills, contamination, and zero accountability.
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">▸</span>
                Restaurants fear their reputation suffers when a third party delivers food poorly.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-400 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-brand-200 font-medium">
                  Teso Express Deliveries (TED) solves this with trained riders, insulated bags, and a clear compensation policy — giving restaurants a safe way to expand to delivery for the first time.
                </span>
              </li>
            </ul>
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
