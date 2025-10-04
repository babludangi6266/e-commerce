let orderIdCounter = 1;

const placeOrder = (req, res) => {
  try {
    const { firstName, lastName, address, items } = req.body;
    
    const order = {
      id: orderIdCounter++,
      customer: {
        firstName,
        lastName,
        address
      },
      items: items,
      total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      orderDate: new Date().toISOString(),
      status: 'confirmed'
    };

    // Simulate order processing (in real app, this would save to database)
    console.log('📦 New Order Placed:');
    console.log('Order ID:', order.id);
    console.log('Customer:', `${firstName} ${lastName}`);
    console.log('Address:', address);
    console.log('Items:', items);
    console.log('Total:', `$${order.total.toFixed(2)}`);
    console.log('Order Date:', order.orderDate);
    console.log('---');

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: {
        orderId: order.id,
        total: order.total,
        orderDate: order.orderDate
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error placing order',
      error: error.message
    });
  }
};

const getOrders = (req, res) => {
  try {
    // This would typically fetch from database
    // For now, return empty array or mock data
    res.status(200).json({
      success: true,
      data: [],
      message: 'Orders endpoint - in real implementation would fetch from database'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching orders',
      error: error.message
    });
  }
};

module.exports = {
  placeOrder,
  getOrders
};