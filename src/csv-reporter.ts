import fs from "fs";
import {parse} from "json2csv";
import {IReporter} from "nightharbor/interface";

/**
 * output result to csv file
 */
export default class CsvReporter implements IReporter {
  private results: any[];
  private fields: string[];
  private outputPath: string;

  constructor(outputPath: string) {
    this.results = [];
    this.fields = [];
    this.outputPath = outputPath;
  }

  public write(result: any) {
    if (this.fields.length === 0) {
      this.fields = Object.keys(result);
    }
    this.results.push(result);
  }

  public close(): Promise<void> {
    fs.writeFileSync(this.outputPath, parse(this.results, { fields: this.fields }));
    return Promise.resolve();
  }
}
