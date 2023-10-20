// @ts-nocheck
// NOTE: The above comment is crucial for all this to work
// The puppeteer project caused a type breaking shift in v6 while switching from @types/puppeteer to built-in types
// This type definition file is only relevant when puppeteer < v6 is being used,
// if we don't instruct TS to skip checking this file it would cause errors when pptr >= v6 is used (e.g. ChromeArgOptions is missing)
import { Browser, ConnectOptions, BrowserWorker } from "@cloudflare/puppeteer"

// Make puppeteer-extra typings backwards compatible with puppeteer < v6
// In pptr >= v6 they switched to built-in types and the `@types/puppeteer` package is not needed anymore.
// This is essentially a shim for `PuppeteerNode`, which is found in pptr >= v6 and missing in `@types/puppeteer`.
// Requires the `@types/puppeteer` package to be installed when using pptr < v6, `@types/puppeteer` will be ignored by TS when built-in types are available.
interface VanillaPuppeteer {
  /** Attaches Puppeteer to an existing Chromium instance */
  connect(options?: ConnectOptions): Promise<Browser>
  /** The method launches a browser instance with given arguments. The browser will be closed when the parent node.js process is closed. */
  launch(endpoint: BrowserWorker): Promise<Browser>
  /** This methods attaches Puppeteer to an existing Chromium instance. */
}
