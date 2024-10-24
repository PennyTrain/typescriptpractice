export function AbsValAvailability(ruleID: number): { [key: string]: boolean } {
    // Define availability based on ruleID
    const availabilityDict = {
      available: ruleID === 0 // Example condition
    };
  
    return availabilityDict;
  }
  
  export function AbsValAlterability(ruleID: number): { [key: string]: boolean } {
    // Define alterability based on ruleID
    const alterabilityDict = {
      alterable: ruleID === 0 // Example condition
    };
  
    return alterabilityDict;
  }
  