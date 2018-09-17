import fs from "fs";
import {IReporter} from "nightharbor/interface";

/**
 * output result to json file
 */
export default class JsonReporter implements IReporter {
  private outputPath: string;
  private report: { results: any[] };

  constructor(outputPath: string) {
    this.outputPath = outputPath;
    this.report = { results: [] };
  }

  public open() {
    return;
  }

  public write(result: any) {
    this.report.results.push(result);
  }

  public close() {
    fs.writeFileSync(this.outputPath, JSON.stringify(this.report));
    return Promise.resolve();
  }
}
