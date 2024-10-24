export function UnitsAvailability(): { [key: string]: boolean } {
    // All units are always available
    const availabilityDict = {
      None: true,
      AbsTemp: true,
      V: true,
      mV: true,
      A: true,
      mA: false, //true
      PH: true,
      mmHg: true,
      psi: true,
      Bar: true,
      mBar: true,
      RH: true,
      Percent: true,
      mmWG: true,
      inWG: true,
      inWW: true,
      Ohms: true,
      PSIG: true,
      O2: true,
      PPM: true,
      CO2: true,
      Carb: true,
      PerSec: true
    };
  
    return availabilityDict;
  }
  