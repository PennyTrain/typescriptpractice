export const menuItems = [
  { name: 'Threshold', types: [1, 2], inputType: 'number', min: 0, max: 100 },
  { name: 'Reference', types: [1, 3], inputType: 'text' },
  { name: 'Deviation', types: [1, 4], inputType: 'number', min: 0, max: 50 },
  { name: 'Rate', types: [1, 5], inputType: 'number', min: 1, max: 10, unit: 'seconds' },
  { name: 'FilterTimeConstant', types: [2, 6], inputType: 'number', min: 0, max: 20 },
  { name: 'Shelve', types: [2, 7], inputType: 'text' },
  { name: 'ShelveTime', types: [3, 8], inputType: 'number', min: 0, max: 60 },
  { name: 'MaxShelveTime', types: [3, 9], inputType: 'number', min: 0, max: 120 },
  { name: 'UniversalItem', types: [0], inputType: 'text' }
];
