import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderSuccessPage = () => {
  const location = useLocation();
  const { orderId, total } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex-grow">
      <div className="container max-w-2xl">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Order Placed Successfully!</h1>
          
          <div className="mt-6 card p-6 text-left max-w-md mx-auto">
            {orderId && (
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Order ID:</span> #{orderId}
              </p>
            )}
            
            {total && (
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Total Amount:</span> ${total.toFixed(2)}
              </p>
            )}
            
            <p className="text-gray-600 text-sm">
              Thank you for your order! We've received your order and will process it shortly.
            </p>
          </div>
          
          <div className="mt-8 space-x-4">
            <Link
              to="/"
              className="btn btn-primary"
            >
              Continue Shopping
            </Link>
            
            <Link
              to="/cart"
              className="btn btn-secondary"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;