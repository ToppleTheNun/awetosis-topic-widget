import { capitalize } from "../strings";

describe("capitalize", () => {
  it("makes the first letter capital and the rest lowercase", () => {
    const toCapitalize = "DANK MEMES";
    expect(capitalize(toCapitalize)).toBe("Dank memes");
  });
});
