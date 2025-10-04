import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">ShopWithBablu</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Cart
              {getCartItemsCount() > 0 && (
                <span className="cart-badge">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;