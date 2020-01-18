import { TemporalUnit } from "../types";

export const stringToTemporalUnit = (
  str?: string,
  def: TemporalUnit = TemporalUnit.SECONDS
): TemporalUnit => {
  return TemporalUnit[str as keyof typeof TemporalUnit] || def;
};

export const temporalUnitAndAmountToSeconds = (
  amount?: number,
  temporalUnit?: TemporalUnit
): number => {
  if (!amount || !temporalUnit) {
    return 0;
  }
  switch (temporalUnit) {
    case TemporalUnit.SECONDS:
      return amount;
    case TemporalUnit.MINUTES:
      return 60 * amount;
    case TemporalUnit.HOURS:
      return 60 * 60 * amount;
  }
};
