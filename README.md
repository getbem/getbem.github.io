# feather

Feather is a proof of concept app demonstrating the following in 8.5kb of min/gzipped code.

Visit http://feather.surge.sh, open the network panel and see for yourself.

- Initial render of clientside components to static HTML at build time. So the browser gets "pre-rendered" HTML.
- JS "taking over" once loaded in the browser.
- App state, logic, and virtual DOM rendering and diffing happens outside of main UI thread using a WebWorker.
- WebWorker code is "inlined" and loaded as a data URI using `Blob` interface.
- Worker code is written in ES2015 and `import` other modules and npm modules from inside worker.
- Insanely light "router" (feels silly to even call it that). The current URL is simply treated as a part of application state. It then gets "rendered" to the URL bar with `history.pushState` if it's different than current.
- Styles are pre-processed and live-reloaded during development without need for browser plugins.
- `npm run build && npm run deploy` puts a fully static site with clean URLs on the Internet using [Surge.sh](https://surge.sh).
- Main UI thread has only three responsibilities:
	- sending "state of the world" to worker on start. This includes parsing real DOM into a virtual dom so the worker has a starting point for calculating diffs and sending in the current URL.
	- listening for and sending serializable actions back to the worker (this includes `popstate` events) for routing.
	- applying DOM patches when received from worker

# credits

Huge thanks to [@NolanLawson](http://twitter.com/NolanLawson) for his pioneering work on using WebWorkers for DOM diffing. Read his incredible post here: http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org

Very little of what enables this was created by me. I'm just pulling together awesome modules like: `webpack`, `virtual-dom`, `babel`, `vdom-serialized-patch`, `vdom-to-html`, `vdom-virtualize` to name a few.

Created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg).

