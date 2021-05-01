/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-71e046241d7d5cdf707d.js"
  },
  {
    "url": "framework-a97aaa83d39a357eb2c9.js"
  },
  {
    "url": "styles.29cd7506868c71cb18dc.css"
  },
  {
    "url": "styles-29163f9dced6fe4a408a.js"
  },
  {
    "url": "b143b7b0-17c7ba271e92d83edf5c.js"
  },
  {
    "url": "app-0f3f30acbd3e113060a0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "45f293046c5c23942c76cdd6e2c07e0f"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "0282e2b86db56eb397d1111699dffeba"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6a95383c4ebde8073fdc7c6f8bd1c1c2"
  },
  {
    "url": "polyfill-111d186f0ff922d22178.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0898800a46ef604f2548f135b8901540"
  },
  {
    "url": "page-data/sq/d/2719112146.json",
    "revision": "eb1d66e892b4f7a794a1f070deb19c22"
  },
  {
    "url": "page-data/sq/d/321031768.json",
    "revision": "9b8fa6ea97076d21e212bcf3ee667ac6"
  },
  {
    "url": "page-data/sq/d/405221534.json",
    "revision": "44f7c55d46db1aa4b01d46b3f9b522b9"
  },
  {
    "url": "page-data/sq/d/983108779.json",
    "revision": "0a91157c7c6b390a0e911ba6ed4f01c8"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "744ec9d1ac94629277cde6a42a1bb59c"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "ea23d0409d79cfaa5b8f9ad7f23fc1ed"
  },
  {
    "url": "page-data/sq/d/2354469130.json",
    "revision": "ad810aef47cefc2a4ddea5687d710140"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "f1487f008c4798f763dde7fa7f46953c"
  },
  {
    "url": "page-data/tags/case-study/page-data.json",
    "revision": "26fee204eac26331bf9dea730fb5c8dd"
  },
  {
    "url": "page-data/tags/design/page-data.json",
    "revision": "22aedae2d30275c56aff621b9604655b"
  },
  {
    "url": "page-data/tags/electronics/page-data.json",
    "revision": "e7cab9fd8713060743c5a5546a0c24cb"
  },
  {
    "url": "page-data/tags/explainer/page-data.json",
    "revision": "beb32c77498dfa8234acad0423a3af72"
  },
  {
    "url": "page-data/tags/licensing/page-data.json",
    "revision": "ad685bdd1c455f8b02f6c71153236321"
  },
  {
    "url": "page-data/tags/open-source/page-data.json",
    "revision": "38efccad324379c7c78684afefe3c55c"
  },
  {
    "url": "page-data/tags/systems-engineering/page-data.json",
    "revision": "0a9ca7f99adb65874e25b7b8a98c4bfb"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "132f63776a59cf69f8726dda2763d7a8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-0f3f30acbd3e113060a0.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
