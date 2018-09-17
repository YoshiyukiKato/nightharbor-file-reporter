# nightharbor-file-reporter
[![CircleCI](https://circleci.com/gh/YoshiyukiKato/nightharbor-file-reporter.svg?style=svg)](https://circleci.com/gh/YoshiyukiKato/nightharbor-file-reporter)
[![sonarcloud badge](https://sonarcloud.io/api/project_badges/measure?project=YoshiyukiKato_nightharbor-file-reporter&metric=alert_status)](https://sonarcloud.io/api/project_badges/measure?project=YoshiyukiKato_nightharbor-file-reporter&metric=alert_status)
[![Greenkeeper badge](https://badges.greenkeeper.io/YoshiyukiKato/nightharbor-file-reporter.svg)](https://greenkeeper.io/)

A [nightharbor](https://github.com/YoshiyukiKato/nightharbor) reporter for local file.

```sh
$ npm install --save nightharbor nightharbor-file-reporter
```

#### report by json and csv

```js
import {CsvReporter, JsonReporter} from "nightharbor/reporter";
const reporter = new JsonReporter("/path/to/output.json");

export default {
  ...,
  reporters: [
    new CsvReporter("/path/to/output.csv"),
    new JsonReporter("/path/to/output.json")
  ],
  ...
}
```