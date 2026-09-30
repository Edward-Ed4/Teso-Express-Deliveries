import { useParams, useNavigate } from 'react-router-dom';
import {
  Star, Clock, Bike, MapPin, ShieldCheck, Plus, Minus,
  ShoppingCart, ArrowLeft, BadgeCheck,
} from 'lucide-react';
import { getRestaurantById } from '../data/restaurants';
import { useApp } from '../context/AppContext';

function CartConflictBanner({ currentRestaurant, onSwitch }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-soroti-night text-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 max-w-md w-[calc(100%-2rem)]">
      <span className="text-2xl">⚠️</span>
      <div className="flex-1 text-sm">
        <p className="font-semibold">You have items from another restaurant</p>
        <p className="text-slate-400 text-xs mt-0.5">Adding this item will clear your current cart.</p>
      </div>
      <button
        onClick={onSwitch}
        className="flex-shrink-0 px-3 py-2 bg-brand-500 hover:bg-brand-600 rounded-xl text-sm font-semibold transition-colors"
      >
        Switch
      </button>
    </div>
  );
}

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch, cartTotal, cartCount } = useApp();

  const restaurant = getRestaurantById(id);

  if (!restaurant) {
    return (
      <div className="py-32 text-center text-slate-500">
        <p className="text-5xl mb-4">🤔</p>
        <p className="font-semibold text-lg">Restaurant not found</p>
        <button onClick={() => navigate('/restaurants')} className="mt-4 btn-primary">
          Back to restaurants
        </button>
      </div>
    );
  }

  const cartIsFromHere = state.cart?.restaurantId === restaurant.id;
  const cartIsFromElsewhere = state.cart && !cartIsFromHere;

  // qty of a given item in cart
  const getQty = (itemId) => {
    if (!cartIsFromHere) return 0;
    return state.cart.items.find((ci) => ci.item.id === itemId)?.qty ?? 0;
  };

  const addItem = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: { restaurantId: restaurant.id, restaurantName: restaurant.name, item } });
  };

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { itemId } });
  };

  const cartItemsHere = cartIsFromHere ? state.cart.items : [];
  const localTotal = cartItemsHere.reduce((s, ci) => s + ci.item.price * ci.qty, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

      {/* Back */}
      <button
        onClick={() => navigate('/restaurants')}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> All restaurants
      </button>

      {/* Hero banner — real food photo */}
      <div className="relative rounded-3xl overflow-hidden h-44 md:h-56 mb-6">
        <img
          src={restaurant.photo}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-5 left-6 text-white">
          <h1 className="text-2xl md:text-3xl font-extrabold drop-shadow">{restaurant.name}</h1>
          <p className="text-sm text-white/80 mt-0.5">{restaurant.cuisine}</p>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-4 items-center mb-4 text-sm text-slate-600">
        <span className="flex items-center gap-1 font-semibold text-amber-600">
          <Star size={14} fill="currentColor" /> {restaurant.rating}
          <span className="text-slate-400 font-normal">({restaurant.reviewCount} reviews)</span>
        </span>
        <span className="flex items-center gap-1"><Clock size={14} /> {restaurant.deliveryTime}</span>
        <span className="flex items-center gap-1"><Bike size={14} /> UGX {restaurant.deliveryFee.toLocaleString()} delivery fee</span>
        <span className="flex items-center gap-1"><MapPin size={14} /> {restaurant.address}</span>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-2xl">{restaurant.description}</p>

      {/* ── Trust signal banner ── */}
      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-4 flex gap-3 items-start mb-8">
        <BadgeCheck size={20} className="text-brand-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-brand-800 text-sm">TED quality guarantee</p>
          <p className="text-xs text-brand-700/80 mt-0.5 leading-relaxed">
            Your order will be collected by a trained, uniformed TED rider in a sealed insulated bag.
            If anything arrives damaged or incorrect, Teso Express Deliveries' compensation policy applies — protecting
            you and this restaurant.
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {restaurant.menu.map((section) => (
            <div key={section.category}>
              <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => {
                  const qty = getQty(item.id);
                  return (
                    <div key={item.id} className="card p-4 flex gap-4 items-start hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-slate-900 text-sm">{item.name}</p>
                          {item.popular && (
                            <span className="badge bg-amber-100 text-amber-700 text-xs">Popular</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                        <p className="mt-2 font-bold text-brand-600 text-sm">
                          UGX {item.price.toLocaleString()}
                        </p>
                      </div>
                      {/* Qty controls */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {qty > 0 ? (
                          <>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-brand-300 text-brand-600 hover:bg-brand-50 transition-colors"
                              aria-label={`Remove one ${item.name}`}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-5 text-center font-bold text-slate-800 text-sm">{qty}</span>
                          </>
                        ) : null}
                        <button
                          onClick={() => addItem(item)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-500 hover:bg-brand-600 text-white transition-colors shadow-sm"
                          aria-label={`Add ${item.name} to cart`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky cart summary (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-24 card p-5">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShoppingCart size={18} className="text-brand-500" />
              Your order
            </h3>

            {cartItemsHere.length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-8">
                Add items from the menu to get started
              </p>
            ) : (
              <>
                <ul className="space-y-2 mb-4">
                  {cartItemsHere.map((ci) => (
                    <li key={ci.item.id} className="flex justify-between text-sm">
                      <span className="text-slate-700">{ci.item.name} × {ci.qty}</span>
                      <span className="font-semibold text-slate-800">
                        UGX {(ci.item.price * ci.qty).toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 pt-3 mb-4">
                  <div className="flex justify-between text-sm font-semibold text-slate-800">
                    <span>Subtotal</span>
                    <span>UGX {localTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>Delivery fee</span>
                    <span>UGX {restaurant.deliveryFee.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/cart')}
                  className="btn-primary w-full"
                >
                  Checkout ({cartCount} item{cartCount !== 1 ? 's' : ''})
                </button>
              </>
            )}

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck size={13} className="text-brand-400" />
              TED quality guaranteed
            </div>
          </div>
        </div>
      </div>

      {/* Mobile cart bar */}
      {cartItemsHere.length > 0 && (
        <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
          <button
            onClick={() => navigate('/cart')}
            className="btn-primary w-full justify-between shadow-2xl py-4"
          >
            <span className="bg-brand-600 text-white text-xs font-bold px-2 py-0.5 rounded-lg">
              {cartCount}
            </span>
            <span>View cart</span>
            <span>UGX {localTotal.toLocaleString()}</span>
          </button>
        </div>
      )}

      {/* Conflict banner */}
      {cartIsFromElsewhere && (
        <CartConflictBanner
          onSwitch={() => {
            dispatch({ type: 'CLEAR_CART' });
          }}
        />
      )}
    </div>
  );
}
