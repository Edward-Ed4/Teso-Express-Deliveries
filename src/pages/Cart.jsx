import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShoppingCart, Trash2, Plus, Minus, MapPin, Phone,
  ShieldCheck, ArrowLeft, ChevronRight, BadgeCheck,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getRestaurantById } from '../data/restaurants';

export default function Cart() {
  const { state, dispatch, cartTotal } = useApp();
  const navigate = useNavigate();

  const [address, setAddress]   = useState('');
  const [phone, setPhone]       = useState('');
  const [errors, setErrors]     = useState({});
  const [placing, setPlacing]   = useState(false);

  const cart = state.cart;
  const restaurant = cart ? getRestaurantById(cart.restaurantId) : null;
  const deliveryFee = restaurant?.deliveryFee ?? 0;
  const grandTotal  = cartTotal + deliveryFee;

  const validate = () => {
    const e = {};
    if (!address.trim()) e.address = 'Please enter your delivery address';
    if (!phone.trim())   e.phone   = 'Please enter a phone number';
    else if (!/^[0-9+\s()-]{7,}$/.test(phone)) e.phone = 'Enter a valid phone number';
    return e;
  };

  const handlePlaceOrder = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setPlacing(true);
    // Simulate a brief "sending" delay for demo realism
    setTimeout(() => {
      dispatch({ type: 'PLACE_ORDER', payload: { address: address.trim(), phone: phone.trim() } });
      navigate('/tracking');
    }, 900);
  };

  /* ── Empty cart ── */
  if (!cart || cart.items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <ShoppingCart size={56} className="mx-auto text-slate-300 mb-5" />
        <h2 className="text-xl font-bold text-slate-700 mb-2">Your cart is empty</h2>
        <p className="text-slate-500 text-sm mb-7">
          Browse our partner restaurants and add items to get started.
        </p>
        <Link to="/restaurants" className="btn-primary">
          Browse restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

      {/* Back */}
      <button
        onClick={() => navigate(`/restaurants/${cart.restaurantId}`)}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Back to menu
      </button>

      <h1 className="font-display section-title mb-8">Your cart</h1>

      <div className="grid lg:grid-cols-5 gap-8">

        {/* ── Cart items ── */}
        <div className="lg:col-span-3 space-y-4">
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="font-bold text-slate-800">{cart.restaurantName}</p>
              <button
                onClick={() => { dispatch({ type: 'CLEAR_CART' }); navigate('/restaurants'); }}
                className="flex items-center gap-1 text-xs text-rose-500 hover:text-rose-700 transition-colors"
              >
                <Trash2 size={13} /> Clear cart
              </button>
            </div>

            <ul className="divide-y divide-slate-100">
              {cart.items.map((ci) => (
                <li key={ci.item.id} className="py-4 flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 text-sm">{ci.item.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      UGX {ci.item.price.toLocaleString()} each
                    </p>
                  </div>
                  {/* Qty */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { itemId: ci.item.id } })}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:border-rose-400 hover:text-rose-500 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-5 text-center font-bold text-sm">{ci.qty}</span>
                    <button
                      onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { restaurantId: cart.restaurantId, restaurantName: cart.restaurantName, item: ci.item } })}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-brand-500 text-white hover:bg-brand-600 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                  <p className="w-28 text-right font-bold text-slate-800 text-sm">
                    UGX {(ci.item.price * ci.qty).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Delivery details form ── */}
          <div className="card p-5">
            <h2 className="font-bold text-slate-900 mb-4">Delivery details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> Delivery address</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Plot 7, Gweri Road, near Total petrol station, Soroti"
                  value={address}
                  onChange={(e) => { setAddress(e.target.value); setErrors((err) => ({ ...err, address: undefined })); }}
                  className={`input-field ${errors.address ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                />
                {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  <span className="flex items-center gap-1.5"><Phone size={14} /> Contact phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +256 772 123 456"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setErrors((err) => ({ ...err, phone: undefined })); }}
                  className={`input-field ${errors.phone ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                />
                {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* ── Order summary / checkout ── */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 space-y-4">

            <div className="card p-5">
              <h2 className="font-bold text-slate-900 mb-4">Order summary</h2>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">UGX {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery fee</span>
                  <span className="font-semibold text-slate-800">UGX {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-slate-900 text-base">
                  <span>Total</span>
                  <span>UGX {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
                <span className="text-amber-500">⚠</span>
                Payment is cash on delivery
              </p>

              <button
                onClick={handlePlaceOrder}
                disabled={placing}
                className="btn-primary w-full mt-5 text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {placing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Placing order…
                  </span>
                ) : (
                  <>Place order <ChevronRight size={18} /></>
                )}
              </button>
            </div>

            {/* Trust card — left-accent stripe, no colored box */}
            <div className="trust-banner">
              <div className="flex items-start gap-3">
                <BadgeCheck size={18} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">TED guarantee</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 leading-relaxed">
                    <li className="flex gap-1.5"><ShieldCheck size={11} className="mt-0.5 flex-shrink-0 text-brand-500" /> Trained, uniformed rider</li>
                    <li className="flex gap-1.5"><ShieldCheck size={11} className="mt-0.5 flex-shrink-0 text-brand-500" /> Sealed insulated delivery bag</li>
                    <li className="flex gap-1.5"><ShieldCheck size={11} className="mt-0.5 flex-shrink-0 text-brand-500" /> Compensation for damaged orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
