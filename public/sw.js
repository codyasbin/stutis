if (!self.define) {
  let e,
    a = {};
  const s = (s, i) => (
    (s = new URL(s + ".js", i).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = s), (e.onload = a), document.head.appendChild(e));
        } else ((e = s), importScripts(s), a());
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[c]) return;
    let f = {};
    const t = (e) => s(e, c),
      r = { module: { uri: c }, exports: f, require: t };
    a[c] = Promise.all(i.map((e) => r[e] || t(e))).then((e) => (n(...e), f));
  };
}
define(["./workbox-95a36e9d"], function (e) {
  "use strict";
  (importScripts("/fallback-ce627215c0e4a9af.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/Bandey_bidenataya.png",
          revision: "0114a5e47840599587c3744bba91ef94",
        },
        {
          url: "/Jaya_ram_rup.jfif",
          revision: "62403e54c36b0fc3c116219d6863dd3b",
        },
        { url: "/Jaykar.png", revision: "0c5508effca494e76ddfb7c9e5118572" },
        { url: "/VogAarati.png", revision: "28029bff2fb1cd72728aebb475f348a3" },
        {
          url: "/_next/static/_MtfJ3dyXmheQOaQMDYlZ/_buildManifest.js",
          revision: "2ffa8b4d65b468db3567353b9d0934d2",
        },
        {
          url: "/_next/static/_MtfJ3dyXmheQOaQMDYlZ/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/09c3d449-1a38fd1c30a67865.js",
          revision: "1a38fd1c30a67865",
        },
        {
          url: "/_next/static/chunks/214.370fa2e0f5df3ec8.js",
          revision: "370fa2e0f5df3ec8",
        },
        {
          url: "/_next/static/chunks/43.81705cc66e0d813a.js",
          revision: "81705cc66e0d813a",
        },
        {
          url: "/_next/static/chunks/679-415e731a59c4c1fd.js",
          revision: "415e731a59c4c1fd",
        },
        {
          url: "/_next/static/chunks/8-2b04eba0475f32a4.js",
          revision: "2b04eba0475f32a4",
        },
        {
          url: "/_next/static/chunks/app/_global-error/page-a26ac67a7f880af6.js",
          revision: "a26ac67a7f880af6",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-c1e0ef51f853e457.js",
          revision: "c1e0ef51f853e457",
        },
        {
          url: "/_next/static/chunks/app/layout-6e415c03846ffa40.js",
          revision: "6e415c03846ffa40",
        },
        {
          url: "/_next/static/chunks/app/page-949ffed2e147c131.js",
          revision: "949ffed2e147c131",
        },
        {
          url: "/_next/static/chunks/app/~offline/page-a26ac67a7f880af6.js",
          revision: "a26ac67a7f880af6",
        },
        {
          url: "/_next/static/chunks/framework-33fe99a2c7a5f2b0.js",
          revision: "33fe99a2c7a5f2b0",
        },
        {
          url: "/_next/static/chunks/main-614dfd273fb3dfd8.js",
          revision: "614dfd273fb3dfd8",
        },
        {
          url: "/_next/static/chunks/main-app-995b428a21398555.js",
          revision: "995b428a21398555",
        },
        {
          url: "/_next/static/chunks/next/dist/client/components/builtin/app-error-a26ac67a7f880af6.js",
          revision: "a26ac67a7f880af6",
        },
        {
          url: "/_next/static/chunks/next/dist/client/components/builtin/forbidden-a26ac67a7f880af6.js",
          revision: "a26ac67a7f880af6",
        },
        {
          url: "/_next/static/chunks/next/dist/client/components/builtin/global-error-89eaee25674427f8.js",
          revision: "89eaee25674427f8",
        },
        {
          url: "/_next/static/chunks/next/dist/client/components/builtin/not-found-a26ac67a7f880af6.js",
          revision: "a26ac67a7f880af6",
        },
        {
          url: "/_next/static/chunks/next/dist/client/components/builtin/unauthorized-a26ac67a7f880af6.js",
          revision: "a26ac67a7f880af6",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-0da2cbb35d743983.js",
          revision: "0da2cbb35d743983",
        },
        {
          url: "/_next/static/css/04cebf9620c00530.css",
          revision: "04cebf9620c00530",
        },
        {
          url: "/_next/static/media/013b72fa676f92e0-s.woff2",
          revision: "bc06a1ea50382b6956e53aeb91c889c1",
        },
        {
          url: "/_next/static/media/22a5144ee8d83bca-s.p.woff2",
          revision: "f4634c3bc1fa7cb53247e1f2872adb5a",
        },
        {
          url: "/_next/static/media/2b5b02fc7e511755-s.woff2",
          revision: "a27466d069120e75e25b4fd06edd5be2",
        },
        {
          url: "/_next/static/media/65f03d54ccadf4a8-s.woff2",
          revision: "58bcf4f276e0844890901b91c411447c",
        },
        {
          url: "/_next/static/media/7d4881bb7e1bf84d-s.p.woff2",
          revision: "cd5b25781181c5c03d99ac2cbf88016a",
        },
        {
          url: "/_next/static/media/9766a7e9e2e0ad5a-s.woff2",
          revision: "9a45f5a5937490fac6d4f5043a36c125",
        },
        {
          url: "/_next/static/media/aa016aab0e6d1295-s.woff2",
          revision: "49215a3bccaeb5d483f4cf8fceb24776",
        },
        {
          url: "/_next/static/media/b66cf8e69499582a-s.woff2",
          revision: "dea7cff2e11a000dc4e0e913992f9c21",
        },
        {
          url: "/_next/static/media/b9408752a0c24fb9-s.woff2",
          revision: "c10faa6c8fbd7a47d8f00e75e82935cb",
        },
        {
          url: "/_next/static/media/e038a29029a234f2-s.woff2",
          revision: "42a21c981b367f31bd04683072dae1c1",
        },
        {
          url: "/_next/static/media/f639721981034f88-s.woff2",
          revision: "f4a75186954722ca80df35984adf581d",
        },
        {
          url: "/bajarangbaan_original.jfif",
          revision: "f43baf542495cdd63010952c769db11a",
        },
        {
          url: "/fallback-ce627215c0e4a9af.js",
          revision: "7de0f0c91d029cff327267893f1192b7",
        },
        {
          url: "/guru_aarati.jfif",
          revision: "92284a5058fddc2ec7ae138c9e25d90e",
        },
        {
          url: "/gurupadukavyam.jfif",
          revision: "9b20d8b0e43bac37e8db98026d5afcc7",
        },
        {
          url: "/hanumanchalisa.jpeg",
          revision: "4b8257bf4d4a4301d3347743e2f5a36d",
        },
        { url: "/logo.png", revision: "1ed0f9c15fdf179cba01b5a9495df033" },
        {
          url: "/namamibhaktabhatsalam.jfif",
          revision: "aa23b0f5808e21ea579836eaeba7aa13",
        },
        {
          url: "/namamishamishan.JPG",
          revision: "3aa47c3ed2ac14bf32c5ed9d0b5f5a36",
        },
        {
          url: "/sankatmochan.jpg",
          revision: "b4042db288e92a8e6ea2e2bff986a1e2",
        },
        {
          url: "/shri-bajrang-baan.webp",
          revision: "b374f3a43f0007150818485532f303b8",
        },
        {
          url: "/swastibachan.jfif",
          revision: "67b07d7a1f84d7096c5a0ed67cbf6ab9",
        },
        {
          url: "/swe-worker-5c72df51bb1f6ee0.js",
          revision: "76fdd3369f623a3edcf74ce2200bfdd0",
        },
        {
          url: "/vayeprakatkiprala.jfif",
          revision: "5c05617737fa8f98e86e9937e19e4a70",
        },
        { url: "/~offline", revision: "_MtfJ3dyXmheQOaQMDYlZ" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e }) => "navigate" === e.mode,
      new e.NetworkFirst({
        cacheName: "pages-cache",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 604800 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https?:\/\/(api\.)?your-domain\.com\/.*$/i,
      new e.NetworkFirst({
        cacheName: "api-cache",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 86400 }),
          new e.CacheableResponsePlugin({ statuses: [0, 200] }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js|css|json)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-resources",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 2592e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
      new e.CacheFirst({
        cacheName: "image-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 200, maxAgeSeconds: 5184e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-cache",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 30, maxAgeSeconds: 31536e3 }),
          {
            handlerDidError: async ({ request: e }) =>
              "undefined" != typeof self ? self.fallback(e) : Response.error(),
          },
        ],
      }),
      "GET",
    ));
});
