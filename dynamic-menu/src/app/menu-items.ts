export const menuItems = [
  { 
    id: 1, 
    name: 'Linearisation', 
    types:[2, 3, 4],
    description: 'Linearisation Type', 
    inputType: 'select',
    options: [
      'B', 'C', 'D', 'E', 'G2', 'J', 'K', 'L', 'N', 'R', 'S', 'T', 'U', 
      'NiMo/Nico', 'Ni/NiMo', 'Platinel', 'Pt 20% Rh/Pt 40% Rh', 'MoRe', 
      'Cu10', 'Cu53', 'JPT100', 'Ni100', 'Ni120', 'PT100', 'PT100a', 
      'PT1000', 'Linear', 'Square Root', 'Power 3/2', 'Power 5/2', 
      'Invert', 'Custom'
    ],
    value: '', 
    channel: 'conditioning'
  },
  { 
    id: 2, 
    name: 'Units', 
    types:[2, 3, 4],
    description: 'Units of the PV', 
    inputType: 'text',
    value: '' 
  },
  { 
    id: 3, 
    name: 'Resolution', 
    types:[2, 3, 4],
    description: 'Decimal point position', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 4, 
    name: 'RangeHigh', 
    types:[2, 3, 4],
    description: 'Range high', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 5, 
    name: 'RangeLow', 
    types:[2, 3, 4],
    description: 'Range low', 
    inputType: 'number',
    value: 0 
  },
  { 
    id: 6, 
    name: 'PVOffset',
    types:[2, 3, 4], 
    description: 'PV offset', 
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  },
  { 
    id: 7, 
    name: 'FilterTime',     
    types:[2, 3, 4],
    description: 'Filter time constant', 
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
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
    types:[2, 3, 4],
    description: 'Sensor break type', 
    inputType: 'text',
    value: '' 
  },
  { 
    id: 10, 
    name: 'SensorBreakOutput', 
    types:[2, 3, 4],
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
    types:[2, 3, 4],
    description: 'PV status', 
    inputType: 'text',
    value: '' 
  },
  { 
    id: 14, 
    name: 'MVIn', 
    types:[2, 3, 4],
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
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 16,
    name: 'InputLow',
    types:[3],
    description: 'Input Low Limit',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 17,
    name: 'Custom Linearization Name',
    types:[4],
    description: 'Custom linearization name refence. Custom linearization are defined globally with a dedicated tool',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 18,
    name: 'Custom Lenearization Table Size',
    types:[4],
    description:'Size of custom linearization table, in number of bytes',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 19,
    name: 'Temperature Unit',
    types:[4],
    description:'indicates the units that the PV parameter will be in when the input Type is selected to be a thermocouple or an RTD',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
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
    channel: 'conditioning'
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
    channel: 'conditioning'
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
    value: '',
    channel: 'conditioning'
  },
  {
    id: 23,
    name: 'Cold Junction Compensation Type',
    types:[5],
    description:'Specifies the type of cold junction compensation strategy adopted',
    inputType:'select',
    options: [
      'Automatic CJC', 'Fixed CJC', 'No CJC', 'Remote CJC'
    ],
    value: '',
    channel: 'Cold Junction Compensation'
  },
  {
    id: 24,
    name: 'Cold Junction Temperature Input',
    types:[5],
    description:'Cold Junction Remote Temperature, used only when CJCType is set to remote',
    inputType: 'number',
    value: 0,
    channel: 'Cold Junction Compensation'
  },
  {
    id: 25,
    name: 'Cold Junction Fixed Temperature',
    types: [5],
    description: 'Cold Junction Fixed Temperature, used only when the CJCType is set to fixed.',
    inputType: 'number',
    value: 0,
    channel: 'Cold Junction Compensation'
  },
  {
    id: 26,
    name: 'User Calibration Mode',
    types: [6],
    description: 'Indicates the state of the user calibration',
    inputType: 'select',
    options: [
      'Idle', 'Start', 'Unsuccessful', 'Point 1', 'Set Point 1', 'Point 2',
      'Set Point 2', 'Point 3', 'Set Point 3', 'Point 4', 'Set Point 4',
      'Point 5', 'Set Point 5', 'Point 6', 'Set Point 6','Adjusted', 'Discard'
    ],
    value: '',
    channel: 'User Calibration'
  },
  {
    id: 27,
    name: 'User Cal Current Target',
    types: [6],
    description: 'User Cal Current Target',
    inputType: 'number',
    value: 0,
    channel: 'User Calibration'
  },
  {
    id: 28,
    name: 'User Calibration Points',
    types: [6],
    description: 'The user can select from 2 to 6 points to configure the user calibration',
    inputType: 'number',
    value: 0,
    min: 2,
    max: 6,
    channel:'User Calibration'
  },
  {
    id: 29,
    name: 'Calibration Selection',
    types: [6],
    description: 'Indicates if we use the factory calibration or the user calibration.',
    inputType: 'select',
    options: [
      'Factory calibration', 'User calibration'
    ],
    value: '',
    channel: 'User Calibration'
  },
  {
    id: 30,
    name: 'Apply Impedance Test Resistor',
    types: [7],
    description: 'Typically wired from Zirconia function block. Applies an internal resistor into the Zirconia probe measurement circuit, which allows the impedance reading of the probe',
    inputType: 'switch',
    value: false,
    channel: 'main'
  },
  {
    id: 31,
    name: 'Cluster Number',
    types: [8],
    description: 'Cluster number to which the associated module belongs to',
    inputType: 'select',
    value: '',
    options: ['Local I/O'],
    channel: 'hardware'
  },
  {
    id: 32,
    name: 'Slot Number',
    types: [8],
    description: 'Slot number where the associated module is plugged to',
    inputType: 'number',
    value: 0,
    channel: 'hardware'
  },
  {
    id: 33,
    name: 'Channel Number',
    types: [8],
    description: 'Associated channel in the module to which the function block instance belongs to',
    inputType: 'number',
    value: 0,
    channel: 'hardware',
  },
  {
    id: 34,
    name: 'PV Range High',
    types: [9],
    description: 'Range High Limit. Used to limit ranges of thermocouple and RTD input types, and scale mV, V and mA inputs',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 35,
    name: 'PV Range Low',
    types: [9],
    description: 'Range Low Limit. Used to limit ranges of thermocouple and RTD input types, and scale mV, V and mA inputs',
    inputType: 'number',
    value: 0,
    channel: 'conditioning',
  },
  {
    id: 36,
    name: 'Clip Enable',
    types: [9],
    description: 'Clip Enable',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 37,
    name: 'Clip Percentage',
    types: [9],
    description: 'Clip Percentage',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 38,
    name: 'Sensor Break Delay',
    types: [9],
    description: 'Specifies the delay in seconds between sensor break detection and sensor break status indication',
    inputType:'number',
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 39,
    name: 'Emissivity',
    types: [9],
    description: 'Correction factor applied to compensate for the emissivity of the object whose temperature is currently being measured',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  },
  {
    id: 40,
    name: 'Shunt Value',
    types: [9],
    description: 'Shunt value being used for mA input type',
    inputType: 'number',
    value: 0,
    channel: 'conditioning'
  }
];

