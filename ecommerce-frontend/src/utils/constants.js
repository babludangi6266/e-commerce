export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
};

export const ORDER_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error'
};