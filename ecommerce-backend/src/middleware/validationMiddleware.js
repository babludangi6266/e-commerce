const validateOrderData = (req, res, next) => {
  const { firstName, lastName, address, items } = req.body;

  if (!firstName || !lastName || !address) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: {
        ...(!firstName && { firstName: 'First name is required' }),
        ...(!lastName && { lastName: 'Last name is required' }),
        ...(!address && { address: 'Address is required' })
      }
    });
  }

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: {
        items: 'At least one item is required in the order'
      }
    });
  }

  next();
};

module.exports = {
  validateOrderData
};