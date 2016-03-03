[![Build Status](https://travis-ci.org/zalando/ui-automation-chrome-extension.svg?branch=master)](https://travis-ci.org/zalando/ui-automation-chrome-extension)

# UI Automation Chrome Extension
When it comes to writing end-to-end tests, developers lose a lot of time writing boilerplate code. UI Automation Chrome Extension aims to address this problem by speeding up the process of writing automated Selenium tests. It provides simple DOM selectors with Java code snippets so that developers can reduce repetitive boilerplate-writing and focus on test logic instead.

Here’s what UI Automation Chrome Extension does:

- generates XPath and CSS selectors for selected elements in the Elements tab of Chrome’s Developer Tools.
- provides Java code samples to help you to write Selenium tests for your web application.

The extension is designed with simplicity in mind. It’s meant to be intuitive so you can start using it right away without reading any manuals.

Google already has a feature to get XPath and CSS selectors for a selected element. However, this tool does a better job keeping the selectors as simple as possible. For now, only CSS is optimized to use as short selectors as possible.

Examples of CSS selectors generated by UI automation vs Chrome:

[Hacker News](https://news.ycombinator.com) search field:

    input[name='q']
    #hnmain > tbody > tr:nth-child(4) > td > center:nth-child(6) > form > input[type="text"]

[Google](https://www.google.de) search button:

    input[name='btnK']
    #tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)

### Other Links
You can find UI Automation Chrome Extension at the [Chrome Store](https://chrome.google.com/webstore/detail/ui-automation/aacdhbhfmngpoiinjmphdcpalpdcmbpf/).

## Usage
Getting Started
Install the extension from the Chrome Web Store (https://chrome.google.com/webstore/detail/ui-automation/aacdhbhfmngpoiinjmphdcpalpdcmbpf).

When installed, a new tab (UI Automation) appears in the Developer Tools side panel. Selecting different elements will update the UI Automation panel.

![alt text](https://raw.githubusercontent.com/zalando/ui-automation-chrome-extension/master/docs/ui-automation.jpg "Developer Tools UI Automation")

## Tests
Tests are written with Jasmine (http://jasmine.github.io/). To run tests, open the SpecRunner.html file in Chrome.

## How to Contribute
If you want to contribute, please fork and create a pull request.

Before creating a pull request, run gulp lint and fix any/all reported issues.

### Bug Fixes
If you find a bug, it would be awesome if you created an issue about it. Please include a clear description of the problem so we can reproduce and fix it.

### TODO/Feature Requests
If you’d like to enhance UI Automation Chrome Extension’s functionality, consider working on these feature requests:

- Page object generator: Develop a super-easy way for developers to create page objects from the DOM. Java support is first priority.
- Evaluating Selenium commands straight from the browser
- You can also submit your own idea by filing an issue, and we’ll check it out/reply.

## Contact:
sebastian.monte@zalando.de

## License
The MIT License (MIT) Copyright © 2016 Zalando SE, https://tech.zalando.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.