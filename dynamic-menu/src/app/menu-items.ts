export const menuItems = [
  { 
    id: 1, 
    name: 'Linearisation', 
    types:[2, 3],
    description: 'Linearisation Type', 
    inputType: 'select',
    options: [
      'B', 'C', 'D', 'E', 'G2', 'J', 'K', 'L', 'N', 'R', 'S', 'T', 'U', 
      'NiMo/Nico', 'Ni/NiMo', 'Platinel', 'Pt 20% Rh/Pt 40% Rh', 'MoRe', 
      'Cu10', 'Cu53', 'JPT100', 'Ni100', 'Ni120', 'PT100', 'PT100a', 
      'PT1000', 'Linear', 'Square Root', 'Power 3/2', 'Power 5/2', 
      'Invert', 'Custom'
    ],
    value: '' 
  },
  { 
    id: 2, 
    name: 'Units', 
    types:[2, 3],
    description: 'Units of the PV', 
    inputType: 'text',
    value: '' 
  },
  { 
    id: 3, 
    name: 'Resolution', 
    types:[2, 3],
    description: 'Decimal point position', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 4, 
    name: 'RangeHigh', 
    types:[2, 3],
    description: 'Range high', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 5, 
    name: 'RangeLow', 
    types:[2, 3],
    description: 'Range low', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 6, 
    name: 'PVOffset',
    types:[2, 3], 
    description: 'PV offset', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 7, 
    name: 'FilterTime',     
    types:[2, 3],
    description: 'Filter time constant', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 8, 
    name: 'CJCType', 
    types:[2, 3],
    description: 'Cold junction compensation type', 
    inputType: 'text',
    value: '' 
  },
  { 
    id: 9, 
    name: 'SensorBreakType', 
    types:[2, 3],
    description: 'Sensor break type', 
    inputType: 'text',
    value: '' 
  },
  { 
    id: 10, 
    name: 'SensorBreakOutput', 
    types:[2, 3],
    description: 'Sensor break output', 
    inputType: 'text',
    value: '' 
  },
  { 
    id: 11, 
    name: 'CJCTemp', 
    types:[2, 3],
    description: 'CJC temperature', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 12, 
    name: 'PV', 
    types:[2, 3],
    description: 'PV', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 13, 
    name: 'PVStatus', 
    types:[2, 3],
    description: 'PV status', 
    inputType: 'text',
    value: '' 
  },
  { 
    id: 14, 
    name: 'MVIn', 
    types:[2, 3],
    description: 'Measured Value', 
    inputType: 'number',
    value: 0 
  },
  {
    id: 15,
    name: 'InputHigh',
    types:[3],
    description: 'Input high limit',
    inputType: 'number',
    value: 0 
  },
  {
    id: 16,
    name: 'InputLow',
    types:[3],
    description: 'Input Low Limit',
    inputType: 'number',
    value: 0 
  },
  {
    id: 17,
    name: 'Custom Linearization Name',
    types:[4],
    description: 'Custom linearization name refence. Custom linearization are defined globally with a dedicated tool',
    inputType: 'number',
    value: 0
  },
  {
    id: 18,
    name: 'Custom Lenearization Table Size',
    types:[4],
    description:'Size of custom linearization table, in number of bytes',
    inputType: 'number',
    value: 0,
  },
  {
    id: 19,
    name: 'Temperature Unit',
    types:[4],
    description:'indicates the units that the PV parameter will be in when the input Type is selected to be a thermocouple or an RTD',
    inputType: 'number',
    value: 0,
  },
  {
    id: 20,
    name: 'Pv Bad Action',
    types:[4],
    description:'Defines the value of PV in case of bad PV status, apart from the case when Type is configured as Off',
    inputType: 'select',
    options: [
      'Hold', 'Up', 'Down'
    ],
    value: '',
  },
  {
    id: 21,
    name: 'Sensor Break Detection',
    types: [4],
    description: 'Type of operation for the detection of a sensor break',
    inputType: 'select',
    options: [
      'No Sensor Break Detection', 'When Impedance High', 'When Impedance HighHigh'
    ],
    value:'',
  },
  {
    id: 22,
    name: 'Sensor Break Action',
    types: [4],
    description: 'Action taken on PV value in case of detection of Sensor Break',
    inputType: 'select',
    options: [
      'High', 'Low', 'No Action'
    ],
    value: ''
  }
];
