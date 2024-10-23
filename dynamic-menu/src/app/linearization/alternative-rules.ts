export function LinearizationAlternative(selectedInputType: string): { [key: string]: boolean } {
  const alwaysAvailable = ['mV', 'V', 'mA', 'Zirconia', 'TC', 'RTD'];

  const alternativeDict = {
    Always: alwaysAvailable.includes(selectedInputType)
  };

  return alternativeDict;
}
