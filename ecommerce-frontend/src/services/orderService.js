import api from './api';

export const orderService = {
  async placeOrder(orderData) {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to place order');
    }
  }
};