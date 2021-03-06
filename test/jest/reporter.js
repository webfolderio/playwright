/**
 * Copyright Microsoft Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const os = require('os');

module.exports = function Reporter() {
  this.onRunComplete = (test, runResults) => {
    runResults.platform = process.env.REPORT_ONLY_PLATFORM || os.platform();
    runResults.browserName = process.env.BROWSER || 'chromium';
    fs.writeFileSync('jest-report.json', JSON.stringify(runResults, undefined, 2));
  };
}
