import { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ClipboardCheck, ChefHat, Package, Bike, CheckCircle2,
  ShieldCheck, BadgeCheck, MapPin, Phone, Clock, Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ORDER_STAGES } from '../data/restaurants';

const STAGE_ICONS = { ClipboardCheck, ChefHat, Package, Bike, CheckCircle2 };

// Simulated auto-advance timings (ms) for demo
const AUTO_ADVANCE_DELAYS = [4000, 7000, 11000, 16000];

export default function Tracking() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const timerRefs = useRef([]);

  const order = state.activeOrder;

  // Auto-advance through stages for demo purposes
  useEffect(() => {
    if (!order) return;
    // Clear any existing timers
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];

    // Only schedule advances for stages not yet reached
    AUTO_ADVANCE_DELAYS.forEach((delay, idx) => {
      if (order.stageIndex <= idx) {
        const t = setTimeout(() => {
          dispatch({ type: 'ADVANCE_STAGE' });
        }, delay);
        timerRefs.current.push(t);
      }
    });

    return () => timerRefs.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  // run once on mount — we intentionally don't re-run on stageIndex changes

  if (!order) {
    return (
      <div className="max-w-xl mx-auto px-4 py-28 text-center">
        <span className="text-6xl mb-5 block">🛵</span>
        <h2 className="text-xl font-bold text-slate-700 mb-2">No active order</h2>
        <p className="text-slate-500 text-sm mb-7">
          Place an order first and you'll be able to track it here in real time.
        </p>
        <Link to="/restaurants" className="btn-primary">Browse restaurants</Link>
      </div>
    );
  }

  const currentStage = ORDER_STAGES[order.stageIndex];
  const isDelivered   = order.stageIndex === ORDER_STAGES.length - 1;

  // Rough ETA display
  const etaMinutes = Math.max(0, (ORDER_STAGES.length - 1 - order.stageIndex) * 7);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Order #{order.id}</p>
          <h1 className="section-title">Tracking your order</h1>
        </div>
        {!isDelivered && (
          <div className="flex items-center gap-2 px-4 py-2.5 bg-brand-50 border border-brand-200 rounded-xl text-sm">
            <Clock size={16} className="text-brand-500" />
            <span className="text-brand-700 font-semibold">ETA ~{etaMinutes} min</span>
          </div>
        )}
      </div>

      {/* ── Stage tracker ── */}
      <div className="card p-6 mb-6">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-slate-200" />
          {/* Progress fill */}
          <div
            className="absolute left-[19px] top-5 w-0.5 bg-brand-400 transition-all duration-700"
            style={{ height: `${(order.stageIndex / (ORDER_STAGES.length - 1)) * 100}%` }}
          />

          <ol className="relative space-y-6">
            {ORDER_STAGES.map((stage, idx) => {
              const done    = idx < order.stageIndex;
              const active  = idx === order.stageIndex;
              const pending = idx > order.stageIndex;
              const Icon = STAGE_ICONS[stage.icon];

              return (
                <li key={stage.id} className="flex gap-4 items-start">
                  {/* Dot / icon */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 border-2 transition-all duration-500 ${
                      done
                        ? 'bg-brand-500 border-brand-500 text-white'
                        : active
                        ? 'bg-white border-brand-500 text-brand-500 shadow-md shadow-brand-100'
                        : 'bg-white border-slate-200 text-slate-300'
                    }`}
                  >
                    {active ? (
                      <span className="animate-pulse-dot">
                        <Icon size={18} />
                      </span>
                    ) : (
                      <Icon size={18} />
                    )}
                  </div>

                  {/* Text */}
                  <div className={`pt-1.5 ${pending ? 'opacity-40' : ''}`}>
                    <p className={`font-semibold text-sm ${active ? 'text-brand-600' : done ? 'text-slate-800' : 'text-slate-500'}`}>
                      {stage.label}
                      {active && (
                        <span className="ml-2 badge bg-brand-100 text-brand-600 text-xs animate-pulse">
                          In progress
                        </span>
                      )}
                      {done && (
                        <span className="ml-2 text-brand-400 text-xs">✓</span>
                      )}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{stage.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* ── Delivery info ── */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="card p-4">
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Delivering to</p>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm font-semibold text-slate-800">{order.address}</p>
          </div>
        </div>
        <div className="card p-4">
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Contact number</p>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-brand-500 flex-shrink-0" />
            <p className="text-sm font-semibold text-slate-800">{order.phone}</p>
          </div>
        </div>
      </div>

      {/* ── Order items ── */}
      <div className="card p-5 mb-6">
        <h2 className="font-bold text-slate-900 mb-3 text-sm">Items ordered from {order.restaurantName}</h2>
        <ul className="divide-y divide-slate-100">
          {order.items.map((ci) => (
            <li key={ci.item.id} className="py-2.5 flex justify-between text-sm">
              <span className="text-slate-700">{ci.item.name} <span className="text-slate-400">× {ci.qty}</span></span>
              <span className="font-semibold text-slate-800">UGX {(ci.item.price * ci.qty).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Trust / rider card ── */}
      <div className="bg-soroti-night rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 bg-brand-500 rounded-xl shadow">
            <Zap size={20} className="text-white" fill="white" />
          </span>
          <div>
            <p className="font-bold">Your TED rider</p>
            <p className="text-xs text-slate-400">Certified food handler · Electric bike</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: BadgeCheck, label: 'Certified', body: 'Completed TED food-handling & hygiene training' },
            { icon: ShieldCheck, label: 'Accountable', body: 'Wears uniform & ID badge — you know who has your food' },
            { icon: Package,   label: 'Sealed bag', body: 'Insulated, tamper-evident delivery bag for every order' },
          ].map(({ icon: Icon, label, body }) => (
            <div key={label} className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <Icon size={14} className="text-brand-400" />
                <p className="text-xs font-semibold text-white">{label}</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Post-delivery CTA ── */}
      {isDelivered ? (
        <div className="text-center py-6">
          <p className="text-5xl mb-3">🎉</p>
          <h2 className="text-xl font-bold text-slate-900 mb-1">Your order has been delivered!</h2>
          <p className="text-slate-500 text-sm mb-6">Enjoy your meal. Thank you for using Teso Express Deliveries.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => { dispatch({ type: 'CLEAR_ORDER' }); navigate('/restaurants'); }}
              className="btn-primary"
            >
              Order again
            </button>
            <Link to="/" className="btn-secondary">Go home</Link>
          </div>
        </div>
      ) : (
        <p className="text-xs text-center text-slate-400">
          Stages update automatically in this demo. In production, updates are pushed in real time from dispatch.
        </p>
      )}
    </div>
  );
}
