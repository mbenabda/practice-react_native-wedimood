const initialState = {
  departments: [
    { id: 'it', name: 'I.T.' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'supply', name: 'Supply' },
    { id: 'loading', name: 'Loading' },
    { id: 'customer_care', name: 'Customer Care' },
    { id: 'accounting', name: 'Accounting' },
    { id: 'product', name: 'Product' },
  ],

  teamsByDepartment: {
    'it': [
      {id: 'it_distribution', name: 'Distribution'},
      {id: 'it_production', name: 'Production'},
      {id: 'it_supply', name: 'Supply'},
    ]
  }
}

module.exports = (state = initialState, action) => {
  return initialState
}
