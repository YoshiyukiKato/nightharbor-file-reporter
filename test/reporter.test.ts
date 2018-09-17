import csv from "csvtojson";
import fs from "fs-extra";
import path from "path";
import assert from "power-assert";
import {CsvReporter, JsonReporter} from "../src";

describe("Local file reporters", () => {
  const outputDir = path.resolve(__dirname, "outputs");
  before(() => {
    // refresh directory for test outputs
    fs.removeSync(outputDir);
    fs.mkdirpSync(outputDir);
  });

  after(() => {
    // teardown local directory
    fs.removeSync(outputDir);
  });

  it("puts a report file by json", () => {
    const outputPath = path.resolve(outputDir, "output.json");
    const reporter = new JsonReporter(outputPath);
    const data = { message: "test" };
    const expected = { results: [data] };
    reporter.write(data);
    return reporter.close()
      .then(() => {
        const actual = JSON.parse(fs.readFileSync(outputPath).toString());
        assert.deepEqual(actual, expected);
      });
  });

  it("puts a report file by csv", () => {
    const outputPath = path.resolve(outputDir, "output.csv");
    const reporter = new CsvReporter(outputPath);
    const data = { message: "test" };
    const expected = [data];
    reporter.write(data);
    return reporter.close()
      .then(() => {
        return csv().fromString(fs.readFileSync(outputPath).toString());
      })
      .then((actual: any) => {
        assert.deepEqual(actual, expected);
      });
  });
});
