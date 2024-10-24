type InputType = 'mV' | 'V' | 'mA' | 'Zirconia' | 'TC' | 'RTD';

const eLinearizationType = {
  J: 'J',
  K: 'K',
  L: 'L',
  R: 'R',
  B: 'B',
  N: 'N',
  T: 'T',
  S: 'S',
  Cust_1: 'Cust_1',
  Cust_2: 'Cust_2',
  PT100: 'PT100',
  PT1000: 'PT1000',
  Linear: 'Linear',
  Sqrt: 'Sqrt'
};

export function LinearizationAvailability(selectedInputType: InputType): { [key: string]: boolean } {
  // Define conditions for each linearization type
  const isStandardType = selectedInputType === 'mV' || selectedInputType === 'V' || selectedInputType === 'mA';
  const isZirconiaType = selectedInputType === 'Zirconia';
  const isTCType = selectedInputType === 'TC';
  const isRTDType = selectedInputType === 'RTD';

  // Create a dictionary to return availability for each linearization type
  const availabilityDict = {
    J: isStandardType || isTCType,
    K: isStandardType || isTCType,
    L: isStandardType || isTCType,
    R: isStandardType || isTCType,
    B: isStandardType || isTCType,
    N: isStandardType || isTCType,
    T: isStandardType || isTCType,
    S: isStandardType || isTCType,
    Cust_1: isStandardType || isTCType || isRTDType,
    Cust_2: isStandardType || isTCType || isRTDType,
    PT100: isStandardType || isRTDType,
    PT1000: isStandardType || isRTDType,
    Linear: isStandardType || isZirconiaType,
    Sqrt: isStandardType
  };

  return availabilityDict;
}
