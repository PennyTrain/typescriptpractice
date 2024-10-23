export function NextGenAnalogAlarm_Availability(Parameters: any): { [key: string]: boolean } {
    const eAnalogTriggerType_T = {
      AbsHigh: 0,
      AbsLow: 1,
      DevBandIn: 2,
      DevBandOut: 3,
      DevHigh: 4,
      DevLow: 5,
      RisingRate: 6,
      FallingRate: 7,
    };
  
    // Define trigger conditions
    const absolute_trig =
      Parameters.TriggerType === eAnalogTriggerType_T.AbsHigh ||
      Parameters.TriggerType === eAnalogTriggerType_T.AbsLow;
  
    const deviation_trig =
      Parameters.TriggerType === eAnalogTriggerType_T.DevBandIn ||
      Parameters.TriggerType === eAnalogTriggerType_T.DevBandOut ||
      Parameters.TriggerType === eAnalogTriggerType_T.DevHigh ||
      Parameters.TriggerType === eAnalogTriggerType_T.DevLow;
  
    const rate_trig =
      Parameters.TriggerType === eAnalogTriggerType_T.RisingRate ||
      Parameters.TriggerType === eAnalogTriggerType_T.FallingRate;
  
    // Create a dictionary to return availability for each parameter
    const availabilityDict = {
      Threshold: absolute_trig,
      Reference: deviation_trig,
      Deviation: deviation_trig,
      Rate: rate_trig,
      FilterTimeConstant: rate_trig,
      Shelve: Parameters.ShelvingAllowed,
      ShelveTime: Parameters.ShelvingAllowed,
      MaxShelveTime: Parameters.ShelvingAllowed,
    };
  
    return availabilityDict;
  }
  