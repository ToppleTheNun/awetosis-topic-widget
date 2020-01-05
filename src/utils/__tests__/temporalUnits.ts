import { stringToTemporalUnit } from "../temporalUnits";
import { TemporalUnit } from "../../types";

describe("stringToTemporalUnit", () => {
  it("converts known string to TemporalUnit", () => {
    const temporalUnit = stringToTemporalUnit("MILLISECONDS");
    expect(temporalUnit).toBeDefined();
    expect(temporalUnit).toBe(TemporalUnit.MILLISECONDS);
  });

  it("converts unknown strings to TemporalUnit.MILLISECONDS", () => {
    const temporalUnit = stringToTemporalUnit("DANKMEMES");
    expect(temporalUnit).toBeDefined();
    expect(temporalUnit).toBe(TemporalUnit.MILLISECONDS);
  });
});
