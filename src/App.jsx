import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import RestaurantDetail from './pages/RestaurantDetail';
import Cart from './pages/Cart';
import Tracking from './pages/Tracking';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"                    element={<Home />} />
          <Route path="/restaurants"         element={<Restaurants />} />
          <Route path="/restaurants/:id"     element={<RestaurantDetail />} />
          <Route path="/cart"                element={<Cart />} />
          <Route path="/tracking"            element={<Tracking />} />
          {/* Catch-all */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center py-32 text-slate-500">
              <p className="text-6xl mb-4">🛵</p>
              <p className="text-xl font-semibold">Page not found</p>
              <a href="/" className="mt-4 text-brand-600 underline">Go home</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
