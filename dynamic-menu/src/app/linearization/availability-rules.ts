type InputType = 'mV' | 'V' | 'mA' | 'Zirconia' | 'TC' | 'RTD';

const inputTypes: { [key in InputType]: string[] } = {
  mV: ['J', 'K', 'L', 'R', 'B', 'N', 'T', 'S', 'Cust_1', 'Cust_2', 'PT100', 'PT1000', 'Linear', 'Sqrt'],
  V: ['J', 'K', 'L', 'R', 'B', 'N', 'T', 'S', 'Cust_1', 'Cust_2', 'PT100', 'PT1000', 'Linear', 'Sqrt'],
  mA: ['J', 'K', 'L', 'R', 'B', 'N', 'T', 'S', 'Cust_1', 'Cust_2', 'PT100', 'PT1000', 'Linear', 'Sqrt'],
  Zirconia: ['Linear'],
  TC: ['J', 'K', 'L', 'R', 'B', 'N', 'T', 'S', 'Cust_1', 'Cust_2'],
  RTD: ['Cust_1', 'Cust_2', 'PT100', 'PT1000']
};

export function LinearizationAvailability(selectedInputType: InputType): { [key: string]: boolean } {
  const availabilityDict = {
    J: inputTypes[selectedInputType].includes('J'),
    K: inputTypes[selectedInputType].includes('K'),
    L: inputTypes[selectedInputType].includes('L'),
    R: inputTypes[selectedInputType].includes('R'),
    B: inputTypes[selectedInputType].includes('B'),
    N: inputTypes[selectedInputType].includes('N'),
    T: inputTypes[selectedInputType].includes('T'),
    S: inputTypes[selectedInputType].includes('S'),
    Cust_1: inputTypes[selectedInputType].includes('Cust_1'),
    Cust_2: inputTypes[selectedInputType].includes('Cust_2'),
    PT100: inputTypes[selectedInputType].includes('PT100'),
    PT1000: inputTypes[selectedInputType].includes('PT1000'),
    Linear: inputTypes[selectedInputType].includes('Linear'),
    Sqrt: inputTypes[selectedInputType].includes('Sqrt')
  };

  return availabilityDict;
}
