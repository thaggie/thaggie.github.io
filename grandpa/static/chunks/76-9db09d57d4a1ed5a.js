"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [76],
  {
    5771: function (t, e, i) {
      i.d(e, {
        default: function () {
          return n.a;
        },
      });
      var s = i(2424),
        n = i.n(s);
    },
    9231: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let s = i(6552),
        n = i(6997),
        r = i(95),
        o = n._(i(3882)),
        a = s._(i(8602)),
        l = s._(i(9466)),
        u = i(2940),
        h = i(7454),
        d = i(9717);
      i(9447);
      let c = i(9416),
        p = s._(i(801)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/grandpa/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function f(t, e, i, s, n, r, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && n(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let s = !1,
                    n = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => s,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      (s = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (n = !0), e.stopPropagation();
                    },
                  });
                }
                (null == s ? void 0 : s.current) && s.current(t);
              }
            }));
      }
      function g(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, o.forwardRef)((t, e) => {
        let {
          src: i,
          srcSet: s,
          sizes: n,
          height: a,
          width: l,
          decoding: u,
          className: h,
          style: d,
          fetchPriority: c,
          placeholder: p,
          loading: m,
          unoptimized: v,
          fill: y,
          onLoadRef: x,
          onLoadingCompleteRef: P,
          setBlurComplete: w,
          setShowAltText: b,
          sizesInput: S,
          onLoad: T,
          onError: A,
          ...M
        } = t;
        return (0, r.jsx)("img", {
          ...M,
          ...g(c),
          loading: m,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: h,
          style: d,
          sizes: n,
          srcSet: s,
          src: i,
          ref: (0, o.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (A && (t.src = t.src), t.complete && f(t, p, x, P, w, v, S));
            },
            [i, p, x, P, w, A, v, S, e]
          ),
          onLoad: (t) => {
            f(t.currentTarget, p, x, P, w, v, S);
          },
          onError: (t) => {
            b(!0), "empty" !== p && w(!0), A && A(t);
          },
        });
      });
      function y(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          s = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...g(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, s), null)
          : (0, r.jsx)(l.default, {
              children: (0, r.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...s },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let x = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(c.RouterContext),
          s = (0, o.useContext)(d.ImageConfigContext),
          n = (0, o.useMemo)(() => {
            let t = m || s || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              i = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: i };
          }, [s]),
          { onLoad: a, onLoadingComplete: l } = t,
          f = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          f.current = a;
        }, [a]);
        let g = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [x, P] = (0, o.useState)(!1),
          [w, b] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: n,
            blurComplete: x,
            showAltText: w,
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(v, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: f,
              onLoadingCompleteRef: g,
              setBlurComplete: P,
              setShowAltText: b,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, r.jsx)(y, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6176: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let s = i(6552)._(i(3882)).default.createContext({});
    },
    9919: function (t, e) {
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: s = !1,
        } = void 0 === t ? {} : t;
        return e || (i && s);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    2940: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        i(9447);
      let s = i(8862),
        n = i(7454);
      function r(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var i;
        let a,
          l,
          u,
          {
            src: h,
            sizes: d,
            unoptimized: c = !1,
            priority: p = !1,
            loading: m,
            className: f,
            quality: g,
            width: v,
            height: y,
            fill: x = !1,
            style: P,
            overrideSrc: w,
            onLoad: b,
            onLoadingComplete: S,
            placeholder: T = "empty",
            blurDataURL: A,
            fetchPriority: M,
            layout: C,
            objectFit: E,
            objectPosition: V,
            lazyBoundary: j,
            lazyRoot: R,
            ...k
          } = t,
          { imgConf: D, showAltText: L, blurComplete: F, defaultLoader: O } = e,
          B = D || n.imageConfigDefault;
        if ("allSizes" in B) a = B;
        else {
          let t = [...B.deviceSizes, ...B.imageSizes].sort((t, e) => t - e),
            e = B.deviceSizes.sort((t, e) => t - e);
          a = { ...B, allSizes: t, deviceSizes: e };
        }
        if (void 0 === O)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let I = k.loader || O;
        delete k.loader, delete k.srcSet;
        let U = "__next_img_default" in I;
        if (U) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                h +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = I;
          I = (e) => {
            let { config: i, ...s } = e;
            return t(s);
          };
        }
        if (C) {
          "fill" === C && (x = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          t && (P = { ...P, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[C];
          e && !d && (d = e);
        }
        let _ = "",
          z = o(v),
          $ = o(y);
        if ("object" == typeof (i = h) && (r(i) || void 0 !== i.src)) {
          let t = r(h) ? h.default : h;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (A = A || t.blurDataURL),
            (_ = t.src),
            !x)
          ) {
            if (z || $) {
              if (z && !$) {
                let e = z / t.width;
                $ = Math.round(t.height * e);
              } else if (!z && $) {
                let e = $ / t.height;
                z = Math.round(t.width * e);
              }
            } else (z = t.width), ($ = t.height);
          }
        }
        let N = !p && ("lazy" === m || void 0 === m);
        (!(h = "string" == typeof h ? h : _) ||
          h.startsWith("data:") ||
          h.startsWith("blob:")) &&
          ((c = !0), (N = !1)),
          a.unoptimized && (c = !0),
          U && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0),
          p && (M = "high");
        let W = o(g),
          H = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: E,
                  objectPosition: V,
                }
              : {},
            L ? {} : { color: "transparent" },
            P
          ),
          Y =
            F || "empty" === T
              ? null
              : "blur" === T
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, s.getImageBlurSvg)({
                  widthInt: z,
                  heightInt: $,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: A || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + T + '")',
          G = Y
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          X = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: s,
              width: n,
              quality: r,
              sizes: o,
              loader: a,
            } = t;
            if (s) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: s, allSizes: n } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let s; (s = t.exec(i)); s) e.push(parseInt(s[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: n.filter((e) => e >= s[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: s, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => n.find((e) => e >= t) || n[n.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, n, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, s) =>
                    a({ config: e, src: i, quality: r, width: t }) +
                    " " +
                    ("w" === u ? t : s + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: r, width: l[h] }),
            };
          })({
            config: a,
            src: h,
            unoptimized: c,
            width: z,
            quality: W,
            sizes: d,
            loader: I,
          });
        return {
          props: {
            ...k,
            loading: N ? "lazy" : m,
            fetchPriority: M,
            width: z,
            height: $,
            decoding: "async",
            className: f,
            style: { ...H, ...G },
            sizes: X.sizes,
            srcSet: X.srcSet,
            src: w || X.src,
          },
          meta: { unoptimized: c, priority: p, placeholder: T, fill: x },
        };
      }
    },
    9466: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return f;
          },
          defaultHead: function () {
            return d;
          },
        });
      let s = i(6552),
        n = i(6997),
        r = i(95),
        o = n._(i(3882)),
        a = s._(i(5216)),
        l = i(6176),
        u = i(9628),
        h = i(9919);
      function d(t) {
        void 0 === t && (t = !1);
        let e = [(0, r.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, r.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function c(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(9447);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(c, [])
          .reverse()
          .concat(d(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                s = {};
              return (n) => {
                let r = !0,
                  o = !1;
                if (
                  n.key &&
                  "number" != typeof n.key &&
                  n.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = n.key.slice(n.key.indexOf("$") + 1);
                  t.has(e) ? (r = !1) : t.add(e);
                }
                switch (n.type) {
                  case "title":
                  case "base":
                    e.has(n.type) ? (r = !1) : e.add(n.type);
                    break;
                  case "meta":
                    for (let t = 0, e = p.length; t < e; t++) {
                      let e = p[t];
                      if (n.props.hasOwnProperty(e)) {
                        if ("charSet" === e) i.has(e) ? (r = !1) : i.add(e);
                        else {
                          let t = n.props[e],
                            i = s[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (r = !1)
                            : (i.add(t), (s[e] = i));
                        }
                      }
                    }
                }
                return r;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let s = t.key || e;
            if (
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                o.default.cloneElement(t, e)
              );
            }
            return o.default.cloneElement(t, { key: s });
          });
      }
      let f = function (t) {
        let { children: e } = t,
          i = (0, o.useContext)(l.AmpStateContext),
          s = (0, o.useContext)(u.HeadManagerContext);
        return (0, r.jsx)(a.default, {
          reduceComponentsToState: m,
          headManager: s,
          inAmpMode: (0, h.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8862: function (t, e) {
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: s,
            blurHeight: n,
            blurDataURL: r,
            objectFit: o,
          } = t,
          a = s ? 40 * s : e,
          l = n ? 40 * n : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          r +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    9717: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let s = i(6552)._(i(3882)),
        n = i(7454),
        r = s.default.createContext(n.imageConfigDefault);
    },
    7454: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return s;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        s = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/grandpa/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    2424: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let s = i(6552),
        n = i(2940),
        r = i(9231),
        o = s._(i(801));
      function a(t) {
        let { props: e } = (0, n.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/grandpa/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = r.Image;
    },
    801: function (t, e) {
      function i(t) {
        let { config: e, src: i, width: s, quality: n } = t;
        return (
          e.path +
          "?url=" +
          encodeURIComponent(i) +
          "&w=" +
          s +
          "&q=" +
          (n || 75)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        (i.__next_img_default = !0);
      let s = i;
    },
    9416: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let s = i(6552)._(i(3882)).default.createContext(null);
    },
    5216: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let s = i(3882),
        n = "undefined" == typeof window,
        r = n ? () => {} : s.useLayoutEffect,
        o = n ? () => {} : s.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let n = s.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(n, t));
          }
        }
        if (n) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          r(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          r(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3437: function (t, e, i) {
      let s;
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return ro;
        },
      });
      let r = (t) => Array.isArray(t);
      function o(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function a(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function l(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function u(t, e, i, s) {
        if ("function" == typeof e) {
          let [n, r] = l(s);
          e = e(void 0 !== i ? i : t.custom, n, r);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, r] = l(s);
          e = e(void 0 !== i ? i : t.custom, n, r);
        }
        return e;
      }
      function h(t, e, i) {
        let s = t.getProps();
        return u(s, e, void 0 !== i ? i : s.custom, t);
      }
      let d = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...d],
        p = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        m = new Set(p),
        f = (t) => 1e3 * t,
        g = (t) => t / 1e3,
        v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        y = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        x = { type: "keyframes", duration: 0.8 },
        P = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        w = (t, { keyframes: e }) =>
          e.length > 2
            ? x
            : m.has(t)
            ? t.startsWith("scale")
              ? y(e[1])
              : v
            : P;
      function b(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let S = { skipAnimations: !1, useManualTiming: !1 },
        T = { current: !1 },
        A = (t) => null !== t;
      function M(t, { repeat: e, repeatType: i = "loop" }, s) {
        let n = t.filter(A),
          r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return r && void 0 !== s ? s : n[r];
      }
      let C = (t) => t,
        E = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function V(t, e) {
        let i = !1,
          s = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          r = () => (i = !0),
          o = E.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  s = !1,
                  n = !1,
                  r = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  r.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, n = !1, o = !1) => {
                    let a = o && s ? e : i;
                    return n && r.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), r.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), s)) {
                      n = !0;
                      return;
                    }
                    (s = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (s = !1),
                      n && ((n = !1), l.process(t));
                  },
                };
                return l;
              })(r)),
              t
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: h,
            render: d,
            postRender: c,
          } = o,
          p = () => {
            let r = S.useManualTiming ? n.timestamp : performance.now();
            (i = !1),
              (n.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - n.timestamp, 40), 1)),
              (n.timestamp = r),
              (n.isProcessing = !0),
              a.process(n),
              l.process(n),
              u.process(n),
              h.process(n),
              d.process(n),
              c.process(n),
              (n.isProcessing = !1),
              i && e && ((s = !1), t(p));
          },
          m = () => {
            (i = !0), (s = !0), n.isProcessing || t(p);
          };
        return {
          schedule: E.reduce((t, e) => {
            let s = o[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || m(), s.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < E.length; e++) o[E[e]].cancel(t);
          },
          state: n,
          steps: o,
        };
      }
      let {
          schedule: j,
          cancel: R,
          state: k,
          steps: D,
        } = V(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : C,
          !0
        ),
        L = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function F(t, e, i, s) {
        if (t === e && i === s) return C;
        let n = (e) =>
          (function (t, e, i, s, n) {
            let r, o;
            let a = 0;
            do (r = L((o = e + (i - e) / 2), s, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : L(n(t), e, s));
      }
      let O = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        B = (t) => (e) => 1 - t(1 - e),
        I = F(0.33, 1.53, 0.69, 0.99),
        U = B(I),
        _ = O(U),
        z = (t) =>
          (t *= 2) < 1 ? 0.5 * U(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        $ = (t) => 1 - Math.sin(Math.acos(t)),
        N = B($),
        W = O($),
        H = (t) => /^0[^.\s]+$/u.test(t),
        Y = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        G = (t) => (e) => "string" == typeof e && e.startsWith(t),
        X = G("--"),
        K = G("var(--"),
        q = (t) => !!K(t) && Z.test(t.split("/*")[0].trim()),
        Z =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        J = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        Q = (t, e, i) => (i > e ? e : i < t ? t : i),
        tt = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        te = { ...tt, transform: (t) => Q(0, 1, t) },
        ti = { ...tt, default: 1 },
        ts = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tn = ts("deg"),
        tr = ts("%"),
        to = ts("px"),
        ta = ts("vh"),
        tl = ts("vw"),
        tu = {
          ...tr,
          parse: (t) => tr.parse(t) / 100,
          transform: (t) => tr.transform(100 * t),
        },
        th = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        td = (t) => t === tt || t === to,
        tc = (t, e) => parseFloat(t.split(", ")[e]),
        tp =
          (t, e) =>
          (i, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let n = s.match(/^matrix3d\((.+)\)$/u);
            if (n) return tc(n[1], e);
            {
              let e = s.match(/^matrix\((.+)\)$/u);
              return e ? tc(e[1], t) : 0;
            }
          },
        tm = new Set(["x", "y", "z"]),
        tf = p.filter((t) => !tm.has(t)),
        tg = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: tp(4, 13),
          y: tp(5, 14),
        };
      (tg.translateX = tg.x), (tg.translateY = tg.y);
      let tv = (t) => (e) => e.test(t),
        ty = [
          tt,
          to,
          tr,
          tn,
          tl,
          ta,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tx = (t) => ty.find(tv(t)),
        tP = new Set(),
        tw = !1,
        tb = !1;
      function tS() {
        if (tb) {
          let t = Array.from(tP).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tf.forEach((i) => {
                  let s = t.getValue(i);
                  void 0 !== s &&
                    (e.push([i, s.get()]),
                    s.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var s;
                  null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tb = !1), (tw = !1), tP.forEach((t) => t.complete()), tP.clear();
      }
      function tT() {
        tP.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tb = !0);
        });
      }
      class tA {
        constructor(t, e, i, s, n, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tP.add(this),
                tw || ((tw = !0), j.read(tT), j.resolveKeyframes(tS)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == s ? void 0 : s.get(),
                  r = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let s = i.readValue(e, r);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tP.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tP.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tM = (t) => Math.round(1e5 * t) / 1e5,
        tC = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tE =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tV = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tE.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tj = (t, e, i) => (s) => {
          if ("string" != typeof s) return s;
          let [n, r, o, a] = s.match(tC);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tR = (t) => Q(0, 255, t),
        tk = { ...tt, transform: (t) => Math.round(tR(t)) },
        tD = {
          test: tV("rgb", "red"),
          parse: tj("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            tk.transform(t) +
            ", " +
            tk.transform(e) +
            ", " +
            tk.transform(i) +
            ", " +
            tM(te.transform(s)) +
            ")",
        },
        tL = {
          test: tV("#"),
          parse: function (t) {
            let e = "",
              i = "",
              s = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: tD.transform,
        },
        tF = {
          test: tV("hsl", "hue"),
          parse: tj("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tr.transform(tM(e)) +
            ", " +
            tr.transform(tM(i)) +
            ", " +
            tM(te.transform(s)) +
            ")",
        },
        tO = {
          test: (t) => tD.test(t) || tL.test(t) || tF.test(t),
          parse: (t) =>
            tD.test(t) ? tD.parse(t) : tF.test(t) ? tF.parse(t) : tL.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tD.transform(t)
              : tF.transform(t),
        },
        tB =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tI = "number",
        tU = "color",
        t_ =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tz(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          o = e
            .replace(
              t_,
              (t) => (
                tO.test(t)
                  ? (s.color.push(r), n.push(tU), i.push(tO.parse(t)))
                  : t.startsWith("var(")
                  ? (s.var.push(r), n.push("var"), i.push(t))
                  : (s.number.push(r), n.push(tI), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: s, types: n };
      }
      function t$(t) {
        return tz(t).values;
      }
      function tN(t) {
        let { split: e, types: i } = tz(t),
          s = e.length;
        return (t) => {
          let n = "";
          for (let r = 0; r < s; r++)
            if (((n += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === tI
                ? (n += tM(t[r]))
                : e === tU
                ? (n += tO.transform(t[r]))
                : (n += t[r]);
            }
          return n;
        };
      }
      let tW = (t) => ("number" == typeof t ? 0 : t),
        tH = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tC)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tB)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: t$,
          createTransformer: tN,
          getAnimatableNone: function (t) {
            let e = t$(t);
            return tN(t)(e.map(tW));
          },
        },
        tY = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tG(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(tC) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = tY.has(e) ? 1 : 0;
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let tX = /\b([a-z-]*)\(.*?\)/gu,
        tK = {
          ...tH,
          getAnimatableNone: (t) => {
            let e = t.match(tX);
            return e ? e.map(tG).join(" ") : t;
          },
        },
        tq = { ...tt, transform: Math.round },
        tZ = {
          borderWidth: to,
          borderTopWidth: to,
          borderRightWidth: to,
          borderBottomWidth: to,
          borderLeftWidth: to,
          borderRadius: to,
          radius: to,
          borderTopLeftRadius: to,
          borderTopRightRadius: to,
          borderBottomRightRadius: to,
          borderBottomLeftRadius: to,
          width: to,
          maxWidth: to,
          height: to,
          maxHeight: to,
          top: to,
          right: to,
          bottom: to,
          left: to,
          padding: to,
          paddingTop: to,
          paddingRight: to,
          paddingBottom: to,
          paddingLeft: to,
          margin: to,
          marginTop: to,
          marginRight: to,
          marginBottom: to,
          marginLeft: to,
          backgroundPositionX: to,
          backgroundPositionY: to,
          rotate: tn,
          rotateX: tn,
          rotateY: tn,
          rotateZ: tn,
          scale: ti,
          scaleX: ti,
          scaleY: ti,
          scaleZ: ti,
          skew: tn,
          skewX: tn,
          skewY: tn,
          distance: to,
          translateX: to,
          translateY: to,
          translateZ: to,
          x: to,
          y: to,
          z: to,
          perspective: to,
          transformPerspective: to,
          opacity: te,
          originX: tu,
          originY: tu,
          originZ: to,
          zIndex: tq,
          size: to,
          fillOpacity: te,
          strokeOpacity: te,
          numOctaves: tq,
        },
        tJ = {
          ...tZ,
          color: tO,
          backgroundColor: tO,
          outlineColor: tO,
          fill: tO,
          stroke: tO,
          borderColor: tO,
          borderTopColor: tO,
          borderRightColor: tO,
          borderBottomColor: tO,
          borderLeftColor: tO,
          filter: tK,
          WebkitFilter: tK,
        },
        tQ = (t) => tJ[t];
      function t0(t, e) {
        let i = tQ(t);
        return (
          i !== tK && (i = tH),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let t1 = new Set(["auto", "none", "0"]);
      class t2 extends tA {
        constructor(t, e, i, s, n) {
          super(t, e, i, s, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && q((s = s.trim()))) {
              let n = (function t(e, i, s = 1) {
                C(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, r] = (function (t) {
                  let e = J.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${null != i ? i : s}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return Y(t) ? parseFloat(t) : t;
                }
                return q(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if ((this.resolveNoneKeyframes(), !th.has(i) || 2 !== t.length))
            return;
          let [s, n] = t,
            r = tx(s),
            o = tx(n);
          if (r !== o) {
            if (td(r) && td(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var s;
            ("number" == typeof (s = t[e])
              ? 0 === s
              : null === s || "none" === s || "0" === s || H(s)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; ) {
                let e = t[n];
                "string" == typeof e &&
                  !t1.has(e) &&
                  tz(e).values.length &&
                  (s = t[n]),
                  n++;
              }
              if (s && i) for (let n of e) t[n] = t0(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tg[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let r = s.length - 1,
            o = s[r];
          (s[r] = tg[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function t5(t) {
        return "function" == typeof t;
      }
      function t3() {
        s = void 0;
      }
      let t9 = {
          now: () => (
            void 0 === s &&
              t9.set(
                k.isProcessing || S.useManualTiming
                  ? k.timestamp
                  : performance.now()
              ),
            s
          ),
          set: (t) => {
            (s = t), queueMicrotask(t3);
          },
        },
        t4 = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tH.test(t) || "0" === t) &&
              !t.startsWith("url("))
          );
      class t6 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: n = 0,
          repeatType: r = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = t9.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: n,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tT(), tS()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = t9.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: s,
            velocity: n,
            delay: r,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                o = t4(n, e),
                a = t4(r, e);
              return (
                C(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || t5(i)) && s))
              );
            })(t, i, s, n)
          ) {
            if (T.current || !r) {
              null == a || a(M(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      function t8(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return (s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0;
      }
      function t7(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let et = ["duration", "bounce"],
        ee = ["stiffness", "damping", "mass"];
      function ei(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function es({ keyframes: t, restDelta: e, restSpeed: i, ...s }) {
        let n;
        let r = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: r },
          {
            stiffness: l,
            damping: u,
            mass: h,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ei(t, ee) && ei(t, et)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: s = 1,
              }) {
                let n, r;
                C(t <= f(10), "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                (o = Q(0.05, 1, o)),
                  (t = Q(0.01, 10, g(t))),
                  o < 1
                    ? ((n = (e) => {
                        let s = e * o,
                          n = s * t;
                        return 0.001 - ((s - i) / t7(e, o)) * Math.exp(-n);
                      }),
                      (r = (e) => {
                        let s = e * o * t,
                          r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = t7(Math.pow(e, 2), o);
                        return (
                          ((s * i + i - r) *
                            Math.exp(-s) *
                            (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(n, r, 5 / t);
                if (((t = f(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * s;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(s * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...s, velocity: -g(s.velocity || 0) }),
          m = c || 0,
          v = u / (2 * Math.sqrt(l * h)),
          y = o - r,
          x = g(Math.sqrt(l / h)),
          P = 5 > Math.abs(y);
        if ((i || (i = P ? 0.01 : 2), e || (e = P ? 0.005 : 0.5), v < 1)) {
          let t = t7(x, v);
          n = (e) =>
            o -
            Math.exp(-v * x * e) *
              (((m + v * x * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === v)
          n = (t) => o - Math.exp(-x * t) * (y + (m + x * y) * t);
        else {
          let t = x * Math.sqrt(v * v - 1);
          n = (e) => {
            let i = Math.exp(-v * x * e),
              s = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + v * x * y) * Math.sinh(s) + t * y * Math.cosh(s))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let s = n(t);
            if (p) a.done = t >= d;
            else {
              let r = 0;
              v < 1 && (r = 0 === t ? f(m) : t8(n, t, s));
              let l = Math.abs(r) <= i,
                u = Math.abs(o - s) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : s), a;
          },
        };
      }
      function en({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = p + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - p);
        let P = (t) => -v * Math.exp(-t / s),
          w = (t) => x + P(t),
          b = (t) => {
            let e = P(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          S = (t) => {
            f(m.value) &&
              ((d = t),
              (c = es({
                keyframes: [m.value, g(m.value)],
                velocity: t8(w, t, m.value),
                damping: n,
                stiffness: r,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), b(t), S(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || b(t), m);
            },
          }
        );
      }
      let er = F(0.42, 0, 1, 1),
        eo = F(0, 0, 0.58, 1),
        ea = F(0.42, 0, 0.58, 1),
        el = (t) => Array.isArray(t) && "number" != typeof t[0],
        eu = (t) => Array.isArray(t) && "number" == typeof t[0],
        eh = {
          linear: C,
          easeIn: er,
          easeInOut: ea,
          easeOut: eo,
          circIn: $,
          circInOut: W,
          circOut: N,
          backIn: U,
          backInOut: _,
          backOut: I,
          anticipate: z,
        },
        ed = (t) => {
          if (eu(t)) {
            C(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, n] = t;
            return F(e, i, s, n);
          }
          return "string" == typeof t
            ? (C(void 0 !== eh[t], `Invalid easing type '${t}'`), eh[t])
            : t;
        },
        ec = (t, e) => (i) => e(t(i)),
        ep = (...t) => t.reduce(ec),
        em = (t, e, i) => {
          let s = e - t;
          return 0 === s ? 1 : (i - t) / s;
        },
        ef = (t, e, i) => t + (e - t) * i;
      function eg(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function ev(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let ey = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        ex = [tL, tD, tF],
        eP = (t) => ex.find((e) => e.test(t));
      function ew(t) {
        let e = eP(t);
        if (
          (C(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tF &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - s;
                (n = eg(a, s, t + 1 / 3)),
                  (r = eg(a, s, t)),
                  (o = eg(a, s, t - 1 / 3));
              } else n = r = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let eb = (t, e) => {
          let i = ew(t),
            s = ew(e);
          if (!i || !s) return ev(t, e);
          let n = { ...i };
          return (t) => (
            (n.red = ey(i.red, s.red, t)),
            (n.green = ey(i.green, s.green, t)),
            (n.blue = ey(i.blue, s.blue, t)),
            (n.alpha = ef(i.alpha, s.alpha, t)),
            tD.transform(n)
          );
        },
        eS = new Set(["none", "hidden"]);
      function eT(t, e) {
        return (i) => ef(t, e, i);
      }
      function eA(t) {
        return "number" == typeof t
          ? eT
          : "string" == typeof t
          ? q(t)
            ? ev
            : tO.test(t)
            ? eb
            : eE
          : Array.isArray(t)
          ? eM
          : "object" == typeof t
          ? tO.test(t)
            ? eb
            : eC
          : ev;
      }
      function eM(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => eA(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function eC(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = eA(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let eE = (t, e) => {
        let i = tH.createTransformer(e),
          s = tz(t),
          n = tz(e);
        return s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
          ? (eS.has(t) && !n.values.length) || (eS.has(e) && !s.values.length)
            ? eS.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : ep(
                eM(
                  (function (t, e) {
                    var i;
                    let s = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let o = e.types[r],
                        a = t.indexes[o][n[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (s[r] = l), n[o]++;
                    }
                    return s;
                  })(s, n),
                  n.values
                ),
                i
              )
          : (C(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            ev(t, e));
      };
      function eV(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? ef(t, e, i)
          : eA(t)(t, e);
      }
      function ej({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        let n = el(s) ? s.map(ed) : ed(s),
          r = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
            let r = t.length;
            if (
              (C(
                r === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  n = i || eV,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = n(t[i], t[i + 1]);
                  e && (r = ep(Array.isArray(e) ? e[i] || C : e, r)), s.push(r);
                }
                return s;
              })(e, s, n),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = em(t[i], t[i + 1], e);
                return o[i](s);
              };
            return i ? (e) => l(Q(t[0], t[r - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let n = em(0, e, s);
                        t.push(ef(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || ea).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
        };
      }
      let eR = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => j.update(e, !0),
            stop: () => R(e),
            now: () => (k.isProcessing ? k.timestamp : t9.now()),
          };
        },
        ek = { decay: en, inertia: en, tween: ej, keyframes: ej, spring: es },
        eD = (t) => t / 100;
      class eL extends t6 {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: s,
              keyframes: n,
            } = this.options,
            r = (null == s ? void 0 : s.KeyframeResolver) || tA;
          (this.resolver = new r(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            s
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: s = "keyframes",
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = t5(s) ? s : ek[s] || ej;
          l !== ej &&
            "number" != typeof t[0] &&
            ((e = ep(eD, eV(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            d = h + r;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: n,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = n;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (x = r)),
              (y = Q(0, 1, i) * h);
          }
          let P = v ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: w } = P;
          v ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            b && void 0 !== s && (P.value = M(a, this.options, s)),
            f && f(P.value),
            b && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? g(t.calculatedDuration) : 0;
        }
        get time() {
          return g(this.currentTime);
        }
        set time(t) {
          (t = f(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = g(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = eR, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let s = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = s - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = s)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let eF = new Set(["opacity", "clipPath", "filter", "transform"]),
        eO = (t, e) => {
          let i = "",
            s = Math.max(Math.round(e / 10), 2);
          for (let e = 0; e < s; e++) i += t(em(0, s - 1, e)) + ", ";
          return `linear(${i.substring(0, i.length - 2)})`;
        };
      function eB(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eI = { linearEasing: void 0 },
        eU = (function (t, e) {
          let i = eB(t);
          return () => {
            var t;
            return null !== (t = eI[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        e_ = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        ez = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: e_([0, 0.65, 0.55, 1]),
          circOut: e_([0.55, 0, 1, 0.45]),
          backIn: e_([0.31, 0.01, 0.66, -0.59]),
          backOut: e_([0.33, 1.53, 0.69, 0.99]),
        };
      function e$(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let eN = eB(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        eW = { anticipate: z, backInOut: _, circInOut: W };
      class eH extends t6 {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: s,
            keyframes: n,
          } = this.options;
          (this.resolver = new t2(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            s
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, s;
          let {
            duration: n = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof o && eU() && o in eW && (o = eW[o]),
            t5((s = this.options).type) ||
              "spring" === s.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && eU()) ||
                  !e ||
                  ("string" == typeof e && (e in ez || eU())) ||
                  eu(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(s.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: s,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new eL({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  s = { done: !1, value: t[0] },
                  n = [],
                  r = 0;
                for (; !s.done && r < 2e4; )
                  n.push((s = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (r = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: n = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && eU()
                  ? eO(e, i)
                  : eu(e)
                  ? e_(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || ez.easeOut)
                  : ez[e];
            })(a, n);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: s,
                duration: n,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: n,
            times: r,
            ease: o,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? (e$(d, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(M(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: n,
              times: r,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return g(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return g(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = f(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return C;
            let { animation: i } = e;
            e$(i, t);
          } else this.pendingTimeline = t;
          return C;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: s,
            type: n,
            ease: r,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new eL({
                ...u,
                keyframes: i,
                duration: s,
                type: n,
                ease: r,
                times: o,
                isGenerator: !0,
              }),
              d = f(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: n,
            damping: r,
            type: o,
          } = t;
          return (
            eN() &&
            i &&
            eF.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== n &&
            0 !== r &&
            "inertia" !== o
          );
        }
      }
      let eY = eB(() => void 0 !== window.ScrollTimeline);
      class eG {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            eY() && i.attachTimeline ? i.attachTimeline(t) : e(i)
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let eX =
          (t, e, i, s = {}, n, r) =>
          (o) => {
            let a = b(s, t) || {},
              l = a.delay || s.delay || 0,
              { elapsed: u = 0 } = s;
            u -= f(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: r ? void 0 : n,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: s,
              staggerDirection: n,
              repeat: r,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ...w(t, h) }),
              h.duration && (h.duration = f(h.duration)),
              h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let d = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (d = !0)),
              (T.current || S.skipAnimations) &&
                ((d = !0), (h.duration = 0), (h.delay = 0)),
              d && !r && void 0 !== e.get())
            ) {
              let t = M(h.keyframes, a);
              if (void 0 !== t)
                return (
                  j.update(() => {
                    h.onUpdate(t), h.onComplete();
                  }),
                  new eG([])
                );
            }
            return !r && eH.supports(h) ? new eH(h) : new eL(h);
          },
        eK = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        eq = (t) => (r(t) ? t[t.length - 1] || 0 : t);
      function eZ(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function eJ(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class eQ {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return eZ(this.subscriptions, t), () => eJ(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let e0 = (t) => !isNaN(parseFloat(t)),
        e1 = { current: void 0 };
      class e2 {
        constructor(t, e = {}) {
          (this.version = "11.11.17"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = t9.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = t9.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = e0(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new eQ());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  j.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return e1.current && e1.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = t9.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function e5(t, e) {
        return new e2(t, e);
      }
      let e3 = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        e9 = "data-" + e3("framerAppearId"),
        e4 = (t) => !!(t && t.getVelocity);
      function e6(t, e) {
        let i = t.getValue("willChange");
        if (e4(i) && i.add) return i.add(e);
      }
      function e8(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        var r;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        s && (o = s);
        let u = [],
          d = n && t.animationState && t.animationState.getState()[n];
        for (let e in l) {
          let s = t.getValue(
              e,
              null !== (r = t.latestValues[e]) && void 0 !== r ? r : null
            ),
            n = l[e];
          if (
            void 0 === n ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(d, e))
          )
            continue;
          let a = { delay: i, ...b(o || {}, e) },
            h = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[e9];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, j);
              null !== t && ((a.startTime = t), (h = !0));
            }
          }
          e6(t, e),
            s.start(
              eX(
                e,
                s,
                n,
                t.shouldReduceMotion && m.has(e) ? { type: !1 } : a,
                t,
                h
              )
            );
          let c = s.animation;
          c && u.push(c);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              j.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: s = {},
                      ...n
                    } = h(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = eq(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, e5(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function e7(t, e, i = {}) {
        var s;
        let n = h(
            t,
            e,
            "exit" === i.type
              ? null === (s = t.presenceContext) || void 0 === s
                ? void 0
                : s.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = n ? () => Promise.all(e8(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, s = 0, n = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(it)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              e7(t, e, { ...r, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function it(t, e) {
        return t.sortNodePosition(e);
      }
      let ie = c.length,
        ii = [...d].reverse(),
        is = d.length;
      function ir(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function io() {
        return {
          animate: ir(!0),
          whileInView: ir(),
          whileHover: ir(),
          whileTap: ir(),
          whileDrag: ir(),
          whileFocus: ir(),
          exit: ir(),
        };
      }
      class ia {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class il extends ia {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let s;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            s = Promise.all(e.map((e) => e7(t, e, i)));
                          else if ("string" == typeof e) s = e7(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? h(t, e, i.custom) : e;
                            s = Promise.all(e8(t, n, i));
                          }
                          return s.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = io(),
                  s = !0,
                  l = (e) => (i, s) => {
                    var n;
                    let r = h(
                      t,
                      s,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...s } = r;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function u(u) {
                  let { props: h } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ie; t++) {
                          let s = c[t],
                            n = e.props[s];
                          (a(n) || !1 === n) && (i[s] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    m = new Set(),
                    f = {},
                    g = 1 / 0;
                  for (let e = 0; e < is; e++) {
                    var v;
                    let c = ii[e],
                      y = i[c],
                      x = void 0 !== h[c] ? h[c] : d[c],
                      P = a(x),
                      w = c === u ? y.isActive : null;
                    !1 === w && (g = e);
                    let b = x === d[c] && x !== h[c] && P;
                    if (
                      (b && s && t.manuallyAnimateOnMount && (b = !1),
                      (y.protectedKeys = { ...f }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        n(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let S =
                        ((v = y.prevProp),
                        "string" == typeof x
                          ? x !== v
                          : !!Array.isArray(x) && !o(x, v)),
                      T =
                        S || (c === u && y.isActive && !b && P) || (e > g && P),
                      A = !1,
                      M = Array.isArray(x) ? x : [x],
                      C = M.reduce(l(c), {});
                    !1 === w && (C = {});
                    let { prevResolvedValues: E = {} } = y,
                      V = { ...E, ...C },
                      j = (e) => {
                        (T = !0),
                          m.has(e) && ((A = !0), m.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in V) {
                      let e = C[t],
                        i = E[t];
                      if (!f.hasOwnProperty(t))
                        (r(e) && r(i) ? o(e, i) : e === i)
                          ? void 0 !== e && m.has(t)
                            ? j(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? j(t)
                          : m.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = C),
                      y.isActive && (f = { ...f, ...C }),
                      s && t.blockInitialAnimation && (T = !1);
                    let R = !(b && S) || A;
                    T &&
                      R &&
                      p.push(
                        ...M.map((t) => ({
                          animation: t,
                          options: { type: c },
                        }))
                      );
                  }
                  if (m.size) {
                    let e = {};
                    m.forEach((i) => {
                      let s = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != s ? s : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    s &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (s = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (e, s) {
                    var n;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let r = u(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = io()), (s = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let iu = 0;
      class ih extends ia {
        constructor() {
          super(...arguments), (this.id = iu++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let id = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function ic(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let ip = (t) => (e) => id(e) && t(e, ic(e));
      function im(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      function ig(t, e, i, s) {
        return im(t, e, ip(i), s);
      }
      let iv = (t, e) => Math.abs(t - e);
      class iy {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = iw(this.lastMoveEventInfo, this.history),
                s = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(iv(t.x, e.x) ** 2 + iv(t.y, e.y) ** 2) >= 3);
              if (!s && !n) return;
              let { point: r } = i,
                { timestamp: o } = k;
              this.history.push({ ...r, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              s ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = ix(e, this.transformPagePoint)),
                j.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = iw(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : ix(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !id(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = ix(ic(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = k;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, iw(r, this.history)),
            (this.removeListeners = ep(
              ig(this.contextWindow, "pointermove", this.handlePointerMove),
              ig(this.contextWindow, "pointerup", this.handlePointerUp),
              ig(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), R(this.updatePoint);
        }
      }
      function ix(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iP(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iw({ point: t }, e) {
        return {
          point: t,
          delta: iP(t, ib(e)),
          offset: iP(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = ib(t);
            for (
              ;
              i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > f(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = g(n.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function ib(t) {
        return t[t.length - 1];
      }
      function iS(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let iT = iS("dragHorizontal"),
        iA = iS("dragVertical");
      function iM(t) {
        let e = !1;
        if ("y" === t) e = iA();
        else if ("x" === t) e = iT();
        else {
          let t = iT(),
            i = iA();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function iC() {
        let t = iM(!0);
        return !t || (t(), !1);
      }
      function iE(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function iV(t) {
        return t.max - t.min;
      }
      function ij(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = ef(e.min, e.max, t.origin)),
          (t.scale = iV(i) / iV(e)),
          (t.translate = ef(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iR(t, e, i, s) {
        ij(t.x, e.x, i.x, s ? s.originX : void 0),
          ij(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function ik(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iV(e));
      }
      function iD(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iV(e));
      }
      function iL(t, e, i) {
        iD(t.x, e.x, i.x), iD(t.y, e.y, i.y);
      }
      function iF(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iO(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function iB(t, e, i) {
        return { min: iI(t, e), max: iI(t, i) };
      }
      function iI(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iU = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i_ = () => ({ x: iU(), y: iU() }),
        iz = () => ({ min: 0, max: 0 }),
        i$ = () => ({ x: iz(), y: iz() });
      function iN(t) {
        return [t("x"), t("y")];
      }
      function iW({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function iH(t) {
        return void 0 === t || 1 === t;
      }
      function iY({ scale: t, scaleX: e, scaleY: i }) {
        return !iH(t) || !iH(e) || !iH(i);
      }
      function iG(t) {
        return (
          iY(t) ||
          iX(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function iX(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function iK(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function iq(t, e = 0, i = 1, s, n) {
        (t.min = iK(t.min, e, i, s, n)), (t.max = iK(t.max, e, i, s, n));
      }
      function iZ(t, { x: e, y: i }) {
        iq(t.x, e.translate, e.scale, e.originPoint),
          iq(t.y, i.translate, i.scale, i.originPoint);
      }
      function iJ(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function iQ(t, e, i, s, n = 0.5) {
        let r = ef(t.min, t.max, n);
        iq(t, e, i, r, s);
      }
      function i0(t, e) {
        iQ(t.x, e.x, e.scaleX, e.scale, e.originX),
          iQ(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function i1(t, e) {
        return iW(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let i2 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        i5 = new WeakMap();
      class i3 {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = i$()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new iy(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(ic(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: n,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = iM(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iN((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tr.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        if (s) {
                          let t = iV(s);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && j.postRender(() => n(t, e)),
                  e6(this.visualElement, "transform");
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: n,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iN((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: i2(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: n } = this.getProps();
          n && j.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !i9(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? ef(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? ef(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && iE(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: n }
              ) {
                return { x: iF(t.x, i, n), y: iF(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iB(t, "left", "right"), y: iB(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iN((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !iE(e)) return !1;
          let s = e.current;
          C(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = i1(t, i),
                { scroll: n } = e;
              return n && (iJ(s.x, n.offset.x), iJ(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: iO((t = n.layout.layoutBox).x, r.x), y: iO(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = iW(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iN((o) => {
              if (!i9(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            e6(this.visualElement, t),
            i.start(eX(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iN((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iN((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          iN((e) => {
            let { drag: i } = this.getProps();
            if (!i9(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              n.set(t[e] - ef(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iE(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          iN((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = iV(t),
                  n = iV(e);
                return (
                  n > s
                    ? (i = em(e.min, e.max - s, t.min))
                    : s > n && (i = em(t.min, t.max - n, e.min)),
                  Q(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iN((e) => {
              if (!i9(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set(ef(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          i5.set(this.visualElement, this);
          let t = ig(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              iE(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            j.read(e);
          let n = im(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iN((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function i9(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class i4 extends ia {
        constructor(t) {
          super(t),
            (this.removeGroupControls = C),
            (this.removeListeners = C),
            (this.controls = new i3(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || C);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let i6 = (t) => (e, i) => {
        t && j.postRender(() => t(e, i));
      };
      class i8 extends ia {
        constructor() {
          super(...arguments), (this.removePointerDownListener = C);
        }
        onPointerDown(t) {
          this.session = new iy(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: i2(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: i6(t),
            onStart: i6(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && j.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = ig(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var i7,
        st,
        se,
        si = i(95),
        ss = i(3882);
      let sn = (0, ss.createContext)(null),
        sr = (0, ss.createContext)({}),
        so = (0, ss.createContext)({}),
        sa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function sl(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let su = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!to.test(t)) return t;
              t = parseFloat(t);
            }
            let i = sl(t, e.target.x),
              s = sl(t, e.target.y);
            return `${i}% ${s}%`;
          },
        },
        sh = {},
        { schedule: sd, cancel: sc } = V(queueMicrotask, !1);
      class sp extends ss.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          Object.assign(sh, sf),
            n &&
              (e.group && e.group.add(n),
              i && i.register && s && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (sa.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = n),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? r.promote()
                  : r.relegate() ||
                    j.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            sd.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function sm(t) {
        let [e, i] = (function () {
            let t = (0, ss.useContext)(sn);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              n = (0, ss.useId)();
            (0, ss.useEffect)(() => s(n), []);
            let r = (0, ss.useCallback)(() => i && i(n), [n, i]);
            return !e && i ? [!1, r] : [!0];
          })(),
          s = (0, ss.useContext)(sr);
        return (0, si.jsx)(sp, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, ss.useContext)(so),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let sf = {
          borderRadius: {
            ...su,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: su,
          borderTopRightRadius: su,
          borderBottomLeftRadius: su,
          borderBottomRightRadius: su,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let s = tH.parse(t);
              if (s.length > 5) return t;
              let n = tH.createTransformer(t),
                r = "number" != typeof s[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (s[0 + r] /= o), (s[1 + r] /= a);
              let l = ef(o, a, 0.5);
              return (
                "number" == typeof s[2 + r] && (s[2 + r] /= l),
                "number" == typeof s[3 + r] && (s[3 + r] /= l),
                n(s)
              );
            },
          },
        },
        sg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        sv = sg.length,
        sy = (t) => ("string" == typeof t ? parseFloat(t) : t),
        sx = (t) => "number" == typeof t || to.test(t);
      function sP(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let sw = sS(0, 0.5, N),
        sb = sS(0.5, 0.95, C);
      function sS(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i(em(t, e, s)));
      }
      function sT(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function sA(t, e) {
        sT(t.x, e.x), sT(t.y, e.y);
      }
      function sM(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function sC(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function sE(t, e, [i, s, n], r, o) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
          if (
            (tr.test(e) &&
              ((e = parseFloat(e)), (e = ef(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = ef(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = sC(t.min, e, i, a, n)),
            (t.max = sC(t.max, e, i, a, n));
        })(t, e[i], e[s], e[n], e.scale, r, o);
      }
      let sV = ["x", "scaleX", "originX"],
        sj = ["y", "scaleY", "originY"];
      function sR(t, e, i, s) {
        sE(t.x, e, sV, i ? i.x : void 0, s ? s.x : void 0),
          sE(t.y, e, sj, i ? i.y : void 0, s ? s.y : void 0);
      }
      function sk(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function sD(t) {
        return sk(t.x) && sk(t.y);
      }
      function sL(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function sF(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function sO(t, e) {
        return sF(t.x, e.x) && sF(t.y, e.y);
      }
      function sB(t) {
        return iV(t.x) / iV(t.y);
      }
      function sI(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class sU {
        constructor() {
          this.members = [];
        }
        add(t) {
          eZ(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (eJ(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let s_ = (t, e) => t.depth - e.depth;
      class sz {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          eZ(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          eJ(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(s_),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function s$(t) {
        let e = e4(t) ? t.get() : t;
        return eK(e) ? e.toValue() : e;
      }
      let sN = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        sW = "undefined" != typeof window && void 0 !== window.MotionDebug,
        sH = ["", "X", "Y", "Z"],
        sY = { visibility: "hidden" },
        sG = 0;
      function sX(t, e, i, s) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function sK({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = sG++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  sW &&
                    (sN.totalNodes =
                      sN.resolvedTargetDeltas =
                      sN.recalculatedProjection =
                        0),
                  this.nodes.forEach(sJ),
                  this.nodes.forEach(s9),
                  this.nodes.forEach(s4),
                  this.nodes.forEach(sQ),
                  sW && window.MotionDebug.record(sN);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new sz());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new eQ()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t9.now(),
                      s = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && (R(s), t(n - 250));
                      };
                    return j.read(s, !0), () => R(s);
                  })(s, 0)),
                  sa.hasAnimatedSinceResize &&
                    ((sa.hasAnimatedSinceResize = !1), this.nodes.forEach(s3));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        ni,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !sO(this.targetLayout, s) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...b(n, "layout"), onPlay: o, onComplete: a };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || s3(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              R(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(s6),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = i.props[e9];
                  if (window.MotionHasOptimisedAnimation(s, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      "transform",
                      j,
                      !(t || i)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(s1);
              return;
            }
            this.isUpdating || this.nodes.forEach(s2),
              (this.isUpdating = !1),
              this.nodes.forEach(s5),
              this.nodes.forEach(sq),
              this.nodes.forEach(sZ),
              this.clearAllSnapshots();
            let t = t9.now();
            (k.delta = Q(0, 1e3 / 60, t - k.timestamp)),
              (k.timestamp = t),
              (k.isProcessing = !0),
              D.update.process(k),
              D.preRender.process(k),
              D.render.process(k),
              (k.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), sd.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(s0), this.sharedNodes.forEach(s8);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              j.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            j.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = i$()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !sD(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || iG(this.latestValues) || r) &&
              (n(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              nr((e = s).x),
              nr(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return i$();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(na)
              )
            ) {
              let { scroll: t } = this.root;
              t && (iJ(i.x, t.offset.x), iJ(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = i$();
            if (
              (sA(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e],
                { scroll: n, options: r } = s;
              s !== this.root &&
                n &&
                r.layoutScroll &&
                (n.wasRoot && sA(i, t),
                iJ(i.x, n.offset.x),
                iJ(i.y, n.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = i$();
            sA(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                i0(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                iG(s.latestValues) && i0(i, s.latestValues);
            }
            return iG(this.latestValues) && i0(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = i$();
            sA(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !iG(i.latestValues)) continue;
              iY(i.latestValues) && i.updateSnapshot();
              let s = i$();
              sA(s, i.measurePageBox()),
                sR(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return iG(this.latestValues) && sR(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== k.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, n;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = k.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = i$()),
                    (this.relativeTargetOrigin = i$()),
                    iL(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    sA(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = i$()), (this.targetWithTransforms = i$())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (n = this.relativeParent.target),
                      ik(i.x, s.x, n.x),
                      ik(i.y, s.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : sA(this.target, this.layout.layoutBox),
                      iZ(this.target, this.targetDelta))
                    : sA(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = i$()),
                      (this.relativeTargetOrigin = i$()),
                      iL(this.relativeTargetOrigin, this.target, t.target),
                      sA(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                sW && sN.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              iY(this.parent.latestValues) ||
              iX(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === k.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            sA(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      i0(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), iZ(t, r)),
                    s && iG(n.latestValues) && i0(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = i$()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (sM(this.prevProjectionDelta.x, this.projectionDelta.x),
                sM(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iR(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                sI(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                sI(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              sW && sN.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = i_()),
              (this.projectionDelta = i_()),
              (this.projectionDeltaWithTransform = i_());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              o = i_();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = i$(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(ne)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (s7(o.x, t.x, s),
                  s7(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  iL(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nt(p.x, m.x, a.x, s),
                    nt(p.y, m.y, a.y, s),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      sL(u.x, c.x) && sL(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = i$()),
                    sA(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = ef(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          sw(s)
                        )),
                        (t.opacityExit = ef(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          sb(s)
                        )))
                      : r &&
                        (t.opacity = ef(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let n = 0; n < sv; n++) {
                      let r = `border${sg[n]}Radius`,
                        o = sP(e, r),
                        a = sP(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || sx(o) === sx(a)
                          ? ((t[r] = Math.max(ef(sy(o), sy(a), s), 0)),
                            (tr.test(a) || tr.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = ef(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (R(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = j.update(() => {
                (sa.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = e4(0) ? 0 : e5(0);
                    return s.start(eX("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: n,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                no(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || i$();
                let e = iV(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = iV(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              sA(e, i),
                i0(e, n),
                iR(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new sU()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && sX("z", t, s, this.animationValues);
            for (let e = 0; e < sH.length; e++)
              sX(`rotate${sH[e]}`, t, s, this.animationValues),
                sX(`skew${sH[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return sY;
            let s = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  s$(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = n ? n(this.latestValues, "") : "none"),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    s$(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !iG(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = (function (t, e, i) {
                let s = "",
                  n = t.x.translate / e.x,
                  r = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((n || r || o) &&
                    (s = `translate3d(${n}px, ${r}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: r,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    n && (s += `rotateX(${n}deg) `),
                    r && (s += `rotateY(${r}deg) `),
                    o && (s += `skewX(${o}deg) `),
                    a && (s += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                  s || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              n && (s.transform = n(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            sh)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = sh[t],
                n = "none" === s.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = n;
              } else s[t] = n;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? s$(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(s1),
              this.root.sharedNodes.clear();
          }
        };
      }
      function sq(t) {
        t.updateLayout();
      }
      function sZ(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = i.source !== t.layout.source;
          "size" === n
            ? iN((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  n = iV(s);
                (s.min = e[t].min), (s.max = s.min + n);
              })
            : no(n, i.layoutBox, e) &&
              iN((s) => {
                let n = r ? i.measuredBox[s] : i.layoutBox[s],
                  o = iV(e[s]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = i_();
          iR(o, e, i.layoutBox);
          let a = i_();
          r
            ? iR(a, t.applyTransform(s, !0), i.measuredBox)
            : iR(a, e, i.layoutBox);
          let l = !sD(o),
            u = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let o = i$();
                iL(o, i.layoutBox, n.layoutBox);
                let a = i$();
                iL(a, e, r.layoutBox),
                  sO(o, a) || (u = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function sJ(t) {
        sW && sN.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function sQ(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function s0(t) {
        t.clearSnapshot();
      }
      function s1(t) {
        t.clearMeasurements();
      }
      function s2(t) {
        t.isLayoutDirty = !1;
      }
      function s5(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function s3(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function s9(t) {
        t.resolveTargetDelta();
      }
      function s4(t) {
        t.calcProjection();
      }
      function s6(t) {
        t.resetSkewAndRotation();
      }
      function s8(t) {
        t.removeLeadSnapshot();
      }
      function s7(t, e, i) {
        (t.translate = ef(e.translate, 0, i)),
          (t.scale = ef(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nt(t, e, i, s) {
        (t.min = ef(e.min, i.min, s)), (t.max = ef(e.max, i.max, s));
      }
      function ne(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ni = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ns = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nn = ns("applewebkit/") && !ns("chrome/") ? Math.round : C;
      function nr(t) {
        (t.min = nn(t.min)), (t.max = nn(t.max));
      }
      function no(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(sB(e) - sB(i))))
        );
      }
      function na(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let nl = sK({
          attachResizeListener: (t, e) => im(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nu = { current: void 0 },
        nh = sK({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nu.current) {
              let t = new nl({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nu.current = t);
            }
            return nu.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function nd(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return ig(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (s, n) => {
            if ("touch" === s.pointerType || iC()) return;
            let r = t.getProps();
            t.animationState &&
              r.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = r[i];
            o && j.postRender(() => o(s, n));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class nc extends ia {
        mount() {
          this.unmount = ep(nd(this.node, !0), nd(this.node, !1));
        }
        unmount() {}
      }
      class np extends ia {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = ep(
            im(this.node.current, "focus", () => this.onFocus()),
            im(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let nm = (t, e) => !!e && (t === e || nm(t, e.parentElement));
      function nf(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, ic(i));
      }
      class ng extends ia {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = C),
            (this.removeEndListeners = C),
            (this.removeAccessibleListeners = C),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = ig(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: s,
                        globalTapTarget: n,
                      } = this.node.getProps(),
                      r = n || nm(this.node.current, t.target) ? i : s;
                    r && j.update(() => r(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = ig(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = ep(s, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = im(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = im(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          nf("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && j.postRender(() => i(t, e));
                          });
                      }
                    )),
                    nf("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = im(this.node.current, "blur", () => {
                  this.isPressing &&
                    nf("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = ep(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: s } = this.node.getProps();
          s &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && j.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !iC()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && j.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = ig(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = im(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = ep(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let nv = new WeakMap(),
        ny = new WeakMap(),
        nx = (t) => {
          let e = nv.get(t.target);
          e && e(t);
        },
        nP = (t) => {
          t.forEach(nx);
        },
        nw = { some: 0, all: 1 };
      class nb extends ia {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: n } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : nw[s],
            };
          return (function (t, e, i) {
            let s = (function ({ root: t, ...e }) {
              let i = t || document;
              ny.has(i) || ny.set(i, {});
              let s = ny.get(i),
                n = JSON.stringify(e);
              return (
                s[n] ||
                  (s[n] = new IntersectionObserver(nP, { root: t, ...e })),
                s[n]
              );
            })(e);
            return (
              nv.set(t, i),
              s.observe(t),
              () => {
                nv.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: s } =
                this.node.getProps(),
              r = e ? i : s;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nS = (0, ss.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        nT = (0, ss.createContext)({}),
        nA = "undefined" != typeof window,
        nM = nA ? ss.useLayoutEffect : ss.useEffect,
        nC = (0, ss.createContext)({ strict: !1 });
      function nE(t) {
        return n(t.animate) || c.some((e) => a(t[e]));
      }
      function nV(t) {
        return !!(nE(t) || t.variants);
      }
      function nj(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let nR = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nk = {};
      for (let t in nR) nk[t] = { isEnabled: (e) => nR[t].some((t) => !!e[t]) };
      let nD = Symbol.for("motionComponentSymbol"),
        nL = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function nF(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (nL.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function nO(t, { style: e, vars: i }, s, n) {
        for (let r in (Object.assign(t.style, e, n && n.getProjectionStyles(s)),
        i))
          t.style.setProperty(r, i[r]);
      }
      let nB = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function nI(t, e, i, s) {
        for (let i in (nO(t, e, void 0, s), e.attrs))
          t.setAttribute(nB.has(i) ? i : e3(i), e.attrs[i]);
      }
      function nU(t, { layout: e, layoutId: i }) {
        return (
          m.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!sh[t] || "opacity" === t))
        );
      }
      function n_(t, e, i) {
        var s;
        let { style: n } = t,
          r = {};
        for (let o in n)
          (e4(n[o]) ||
            (e.style && e4(e.style[o])) ||
            nU(o, t) ||
            (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (r[o] = n[o]);
        return r;
      }
      function nz(t, e, i) {
        let s = n_(t, e, i);
        for (let i in t)
          (e4(t[i]) || e4(e[i])) &&
            (s[
              -1 !== p.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return s;
      }
      let n$ = (t) => (e, i) => {
          let s = (0, ss.useContext)(nT),
            r = (0, ss.useContext)(sn),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                s,
                r,
                o
              ) {
                let a = {
                  latestValues: (function (t, e, i, s) {
                    let r = {},
                      o = s(t, {});
                    for (let t in o) r[t] = s$(o[t]);
                    let { initial: a, animate: l } = t,
                      h = nE(t),
                      d = nV(t);
                    e &&
                      d &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === l && (l = e.animate));
                    let c = !!i && !1 === i.initial,
                      p = (c = c || !1 === a) ? l : a;
                    if (p && "boolean" != typeof p && !n(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let s = u(t, e[i]);
                        if (s) {
                          let { transitionEnd: t, transition: e, ...i } = s;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (r[t] = e);
                          }
                          for (let e in t) r[e] = t[e];
                        }
                      }
                    }
                    return r;
                  })(s, r, o, t),
                  renderState: e(),
                };
                return i && (a.mount = (t) => i(s, t, a)), a;
              })(t, e, s, r);
          return i
            ? o()
            : (function (t) {
                let e = (0, ss.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(o);
        },
        nN = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        nW = () => ({ ...nN(), attrs: {} }),
        nH = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        nY = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        nG = p.length;
      function nX(t, e, i) {
        let { style: s, vars: n, transformOrigin: r } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (m.has(t)) {
            o = !0;
            continue;
          }
          if (X(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = nH(i, tZ[t]);
            t.startsWith("origin") ? ((a = !0), (r[t] = e)) : (s[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (s.transform = (function (t, e, i) {
                  let s = "",
                    n = !0;
                  for (let r = 0; r < nG; r++) {
                    let o = p[r],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = nH(a, tZ[o]);
                      if (!l) {
                        n = !1;
                        let e = nY[o] || o;
                        s += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (s = s.trim()),
                    i ? (s = i(e, n ? "" : s)) : n && (s = "none"),
                    s
                  );
                })(e, t.transform, i))
              : s.transform && (s.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
          s.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function nK(t, e, i) {
        return "string" == typeof t ? t : to.transform(e + i * t);
      }
      let nq = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        nZ = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function nJ(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          originX: n,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((nX(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== r || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let s = nK(e, t.x, t.width),
                n = nK(i, t.y, t.height);
              return `${s} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== s && (c.scale = s),
          void 0 !== o &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? nq : nZ;
              t[r.offset] = to.transform(-s);
              let o = to.transform(e),
                a = to.transform(i);
              t[r.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let nQ = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        n0 = {
          useVisualState: n$({
            scrapeMotionValuesFromProps: nz,
            createRenderState: nW,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              j.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                j.render(() => {
                  nJ(i, s, nQ(e.tagName), t.transformTemplate), nI(e, i);
                });
            },
          }),
        },
        n1 = {
          useVisualState: n$({
            scrapeMotionValuesFromProps: n_,
            createRenderState: nN,
          }),
        };
      function n2(t, e, i) {
        for (let s in e) e4(e[s]) || nU(s, i) || (t[s] = e[s]);
      }
      let n5 = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function n3(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          n5.has(t)
        );
      }
      let n9 = (t) => !n3(t);
      try {
        (i7 = require("@emotion/is-prop-valid").default) &&
          (n9 = (t) => (t.startsWith("on") ? !n3(t) : i7(t)));
      } catch (t) {}
      let n4 = { current: null },
        n6 = { current: !1 },
        n8 = new WeakMap(),
        n7 = [...ty, tO, tH],
        rt = (t) => n7.find(tv(t)),
        re = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class ri {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tA),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t9.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), j.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = nE(e)),
            (this.isVariantNode = nV(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && e4(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            n8.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            n6.current ||
              (function () {
                if (((n6.current = !0), nA)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (n4.current = t.matches);
                    t.addListener(e), e();
                  } else n4.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || n4.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (n8.delete(this.current),
          this.projection && this.projection.unmount(),
          R(this.notifyUpdate),
          R(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let s = m.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && j.preRender(this.notifyUpdate),
                s && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), r(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in nk) {
            let e = nk[t];
            if (!e) continue;
            let { isEnabled: i, Feature: s } = e;
            if (
              (!this.features[t] &&
                s &&
                i(this.props) &&
                (this.features[t] = new s(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : i$();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < re.length; e++) {
            let i = re[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let s in e) {
              let n = e[s],
                r = i[s];
              if (e4(n)) t.addValue(s, n);
              else if (e4(r)) t.addValue(s, e5(n, { owner: t }));
              else if (r !== n) {
                if (t.hasValue(s)) {
                  let e = t.getValue(s);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(s);
                  t.addValue(s, e5(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = e5(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && (Y(s) || H(s))
                ? (s = parseFloat(s))
                : !rt(s) && tH.test(e) && (s = t0(t, e)),
              this.setBaseTarget(t, e4(s) ? s.get() : s)),
            e4(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: s } = this.props;
          if ("string" == typeof s || "object" == typeof s) {
            let n = u(
              this.props,
              s,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (s && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || e4(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eQ()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class rs extends ri {
        constructor() {
          super(...arguments), (this.KeyframeResolver = t2);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class rn extends rs {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = nO);
        }
        readValueFromInstance(t, e) {
          if (m.has(e)) {
            let t = tQ(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = (X(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return i1(t, e);
        }
        build(t, e, i) {
          nX(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return n_(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          e4(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class rr extends rs {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = i$);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (m.has(e)) {
            let t = tQ(e);
            return (t && t.default) || 0;
          }
          return (e = nB.has(e) ? e : e3(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nz(t, e, i);
        }
        build(t, e, i) {
          nJ(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          nI(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = nQ(t.tagName)), super.mount(t);
        }
      }
      let ro = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, s) =>
            "create" === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s)),
        });
      })(
        ((st = {
          animation: { Feature: il },
          exit: { Feature: ih },
          inView: { Feature: nb },
          tap: { Feature: ng },
          focus: { Feature: np },
          hover: { Feature: nc },
          pan: { Feature: i8 },
          drag: { Feature: i4, ProjectionNode: nh, MeasureLayout: sm },
          layout: { ProjectionNode: nh, MeasureLayout: sm },
        }),
        (se = (t, e) =>
          nF(t)
            ? new rr(e)
            : new rn(e, { allowProjection: t !== ss.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: s,
              useVisualState: n,
              Component: r,
            } = t;
            e &&
              (function (t) {
                for (let e in t) nk[e] = { ...nk[e], ...t[e] };
              })(e);
            let o = (0, ss.forwardRef)(function (t, e) {
              var o;
              let l;
              let u = {
                  ...(0, ss.useContext)(nS),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, ss.useContext)(sr).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (nE(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || a(e) ? e : void 0,
                        animate: a(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, ss.useContext)(nT));
                  return (0, ss.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [nj(e), nj(i)]
                  );
                })(t),
                c = n(t, h);
              if (!h && nA) {
                (0, ss.useContext)(nC).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = nk;
                  if (!e && !i) return {};
                  let s = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? s.MeasureLayout
                        : void 0,
                    ProjectionNode: s.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, s, n) {
                    var r, o;
                    let { visualElement: a } = (0, ss.useContext)(nT),
                      l = (0, ss.useContext)(nC),
                      u = (0, ss.useContext)(sn),
                      h = (0, ss.useContext)(nS).reducedMotion,
                      d = (0, ss.useRef)();
                    (s = s || l.renderer),
                      !d.current &&
                        s &&
                        (d.current = s(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let c = d.current,
                      p = (0, ss.useContext)(so);
                    c &&
                      !c.projection &&
                      n &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, s) {
                        let {
                          layoutId: n,
                          layout: r,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: r,
                            alwaysMeasureLayout: !!o || (a && iE(a)),
                            visualElement: t,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: s,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, i, n, p);
                    let m = (0, ss.useRef)(!1);
                    (0, ss.useInsertionEffect)(() => {
                      c && m.current && c.update(i, u);
                    });
                    let f = i[e9],
                      g = (0, ss.useRef)(
                        !!f &&
                          !(null === (r = window.MotionHandoffIsComplete) ||
                          void 0 === r
                            ? void 0
                            : r.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      nM(() => {
                        c &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          sd.render(c.render),
                          g.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, ss.useEffect)(() => {
                        c &&
                          (!g.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (g.current = !1)));
                      }),
                      c
                    );
                  })(r, c, u, i, t.ProjectionNode));
              }
              return (0, si.jsxs)(nT.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, si.jsx)(l, { visualElement: d.visualElement, ...u })
                    : null,
                  s(
                    r,
                    t,
                    ((o = d.visualElement),
                    (0, ss.useCallback)(
                      (t) => {
                        t && c.mount && c.mount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : iE(e) && (e.current = t));
                      },
                      [o]
                    )),
                    c,
                    h,
                    d.visualElement
                  ),
                ],
              });
            });
            return (o[nD] = r), o;
          })({
            ...(nF(t) ? n0 : n1),
            preloadedFeatures: st,
            useRender: (function (t = !1) {
              return (e, i, s, { latestValues: n }, r) => {
                let o = (
                    nF(e)
                      ? function (t, e, i, s) {
                          let n = (0, ss.useMemo)(() => {
                            let i = nW();
                            return (
                              nJ(i, e, nQ(s), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            n2(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            s = (function (t, e) {
                              let i = t.style || {},
                                s = {};
                              return (
                                n2(s, i, t),
                                Object.assign(
                                  s,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, ss.useMemo)(() => {
                                      let i = nN();
                                      return (
                                        nX(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                s
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (s.userSelect =
                                s.WebkitUserSelect =
                                s.WebkitTouchCallout =
                                  "none"),
                              (s.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = s),
                            i
                          );
                        }
                  )(i, n, r, e),
                  a = (function (t, e, i) {
                    let s = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (n9(n) ||
                          (!0 === i && n3(n)) ||
                          (!e && !n3(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (s[n] = t[n]);
                    return s;
                  })(i, "string" == typeof e, t),
                  l = e !== ss.Fragment ? { ...a, ...o, ref: s } : {},
                  { children: u } = i,
                  h = (0, ss.useMemo)(() => (e4(u) ? u.get() : u), [u]);
                return (0, ss.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: se,
            Component: t,
          });
        })
      );
    },
  },
]);
