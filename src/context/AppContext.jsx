import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext(null);

const initialState = {
  // cart: { restaurantId, items: [{ item, qty }] }
  cart: null,
  // activeOrder: { id, restaurantId, restaurantName, items, address, phone, placedAt, stageIndex }
  activeOrder: null,
};

function appReducer(state, action) {
  switch (action.type) {

    case 'ADD_TO_CART': {
      const { restaurantId, restaurantName, item } = action.payload;
      // If cart exists for a different restaurant, replace it
      if (state.cart && state.cart.restaurantId !== restaurantId) {
        return {
          ...state,
          cart: {
            restaurantId,
            restaurantName,
            items: [{ item, qty: 1 }],
          },
        };
      }
      if (!state.cart) {
        return {
          ...state,
          cart: {
            restaurantId,
            restaurantName,
            items: [{ item, qty: 1 }],
          },
        };
      }
      const existing = state.cart.items.find((ci) => ci.item.id === item.id);
      if (existing) {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.map((ci) =>
              ci.item.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci
            ),
          },
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, { item, qty: 1 }],
        },
      };
    }

    case 'REMOVE_FROM_CART': {
      if (!state.cart) return state;
      const updated = state.cart.items
        .map((ci) =>
          ci.item.id === action.payload.itemId
            ? { ...ci, qty: ci.qty - 1 }
            : ci
        )
        .filter((ci) => ci.qty > 0);
      return {
        ...state,
        cart: updated.length === 0 ? null : { ...state.cart, items: updated },
      };
    }

    case 'CLEAR_CART':
      return { ...state, cart: null };

    case 'PLACE_ORDER': {
      const { address, phone } = action.payload;
      return {
        ...state,
        cart: null,
        activeOrder: {
          id: `TED-${Date.now().toString().slice(-6)}`,
          restaurantId: state.cart.restaurantId,
          restaurantName: state.cart.restaurantName,
          items: state.cart.items,
          address,
          phone,
          placedAt: new Date().toISOString(),
          stageIndex: 0,   // starts at "Order Received"
        },
      };
    }

    case 'ADVANCE_STAGE': {
      if (!state.activeOrder) return state;
      const next = Math.min(state.activeOrder.stageIndex + 1, 4);
      return {
        ...state,
        activeOrder: { ...state.activeOrder, stageIndex: next },
      };
    }

    case 'CLEAR_ORDER':
      return { ...state, activeOrder: null };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const cartTotal = state.cart
    ? state.cart.items.reduce((sum, ci) => sum + ci.item.price * ci.qty, 0)
    : 0;

  const cartCount = state.cart
    ? state.cart.items.reduce((sum, ci) => sum + ci.qty, 0)
    : 0;

  return (
    <AppContext.Provider value={{ state, dispatch, cartTotal, cartCount }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
