import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { orderService } from '../services/orderService';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import OrderForm from '../components/cart/OrderForm';
import LoadingSpinner from '../components/common/LoadingSpinner';

const CartPage = () => {
  const { items, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePlaceOrder = async (customerData) => {
    try {
      setLoading(true);
      setError('');

      const orderData = {
        ...customerData,
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      };

      const response = await orderService.placeOrder(orderData);
      
      // Clear cart and redirect to success page
      clearCart();
      navigate('/order-success', { 
        state: { 
          orderId: response.data.orderId,
          total: response.data.total
        }
      });
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex-grow">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some products to your cart to get started!</p>
            <button
              onClick={() => navigate('/')}
              className="btn btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex-grow">
      <div className="container">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg-grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg-col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          {/* Order Summary and Form */}
          <div className="space-y-6">
            <CartSummary />
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h3>
              
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              
              <OrderForm onSubmit={handlePlaceOrder} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;