import { TemporalUnit } from "../types";

export const stringToTemporalUnit = (
  str?: string,
  def: TemporalUnit = TemporalUnit.MILLISECONDS
): TemporalUnit => {
  return TemporalUnit[str as keyof typeof TemporalUnit] || def;
};
