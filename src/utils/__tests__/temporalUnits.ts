import { stringToTemporalUnit } from "../temporalUnits";
import { TemporalUnit } from "../../types";

describe("stringToTemporalUnit", () => {
  it("converts known string to TemporalUnit", () => {
    const temporalUnit = stringToTemporalUnit("SECONDS");
    expect(temporalUnit).toBeDefined();
    expect(temporalUnit).toBe(TemporalUnit.SECONDS);
  });

  it("converts unknown strings to TemporalUnit.SECONDS", () => {
    const temporalUnit = stringToTemporalUnit("DANKMEMES");
    expect(temporalUnit).toBeDefined();
    expect(temporalUnit).toBe(TemporalUnit.SECONDS);
  });
});
