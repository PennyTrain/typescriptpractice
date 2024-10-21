export function NextGenAnalogAlarm_Availability(ruleID: number, Parameters: any): { availability: boolean, errorCode: boolean } {
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

  const eNextGenAnalogAlarm_Availability_T = {
      ThresholdAvailability: 0,
      ReferenceAvailability: 1,
      DeviationAvailability: 2,
      RateAvailability: 3,
      FilterTimeConstantAvailability: 4,
      ShelveAvailability: 5,
      ShelveTimeAvailability: 6,
      MaxShelveTimeAvailability: 7,
  };

  const absolute_trig = Parameters.TriggerType === eAnalogTriggerType_T.AbsHigh || Parameters.TriggerType === eAnalogTriggerType_T.AbsLow;
  const deviation_trig = Parameters.TriggerType === eAnalogTriggerType_T.DevBandIn || Parameters.TriggerType === eAnalogTriggerType_T.DevBandOut || Parameters.TriggerType === eAnalogTriggerType_T.DevHigh || Parameters.TriggerType === eAnalogTriggerType_T.DevLow;
  const rate_trig = Parameters.TriggerType === eAnalogTriggerType_T.RisingRate || Parameters.TriggerType === eAnalogTriggerType_T.FallingRate;

  let availability = false;
  let errorCode = true;

  switch (ruleID) {
      case eNextGenAnalogAlarm_Availability_T.ThresholdAvailability:
          availability = absolute_trig;
          break;
      case eNextGenAnalogAlarm_Availability_T.ReferenceAvailability:
          availability = deviation_trig;
          break;
      case eNextGenAnalogAlarm_Availability_T.DeviationAvailability:
          availability = deviation_trig;
          break;
      case eNextGenAnalogAlarm_Availability_T.RateAvailability:
          availability = rate_trig;
          break;
      case eNextGenAnalogAlarm_Availability_T.FilterTimeConstantAvailability:
          availability = rate_trig;
          break;
      case eNextGenAnalogAlarm_Availability_T.ShelveAvailability:
      case eNextGenAnalogAlarm_Availability_T.ShelveTimeAvailability:
      case eNextGenAnalogAlarm_Availability_T.MaxShelveTimeAvailability:
          availability = Parameters.ShelvingAllowed;
          break;
      default:
          errorCode = false;
          break;
  }

  return { availability, errorCode };
}
