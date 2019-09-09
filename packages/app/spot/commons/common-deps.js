!(function(e) {
  var r = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, n) {
    !(function(e, r) {
      if (!g[e] || !w[e]) return;
      for (var n in ((w[e] = !1), r))
        Object.prototype.hasOwnProperty.call(r, n) && (m[n] = r[n]);
      0 == --v && 0 === b && D();
    })(e, n),
      r && r(e, n);
  };
  var n,
    t = !0,
    o = "b457ad29dc61b3d16e25",
    c = 1e4,
    d = {},
    i = [],
    a = [];
  function s(e) {
    var r = P[e];
    if (!r) return H;
    var t = function(t) {
        return (
          r.hot.active
            ? (P[t]
                ? -1 === P[t].parents.indexOf(e) && P[t].parents.push(e)
                : ((i = [e]), (n = t)),
              -1 === r.children.indexOf(t) && r.children.push(t))
            : (console.warn(
                "[HMR] unexpected require(" + t + ") from disposed module " + e
              ),
              (i = [])),
          H(t)
        );
      },
      o = function(e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return H[e];
          },
          set: function(r) {
            H[e] = r;
          }
        };
      };
    for (var c in H)
      Object.prototype.hasOwnProperty.call(H, c) &&
        "e" !== c &&
        "t" !== c &&
        Object.defineProperty(t, c, o(c));
    return (
      (t.e = function(e) {
        return (
          "ready" === u && f("prepare"),
          b++,
          H.e(e).then(r, function(e) {
            throw (r(), e);
          })
        );
        function r() {
          b--, "prepare" === u && (j[e] || x(e), 0 === b && 0 === v && D());
        }
      }),
      (t.t = function(e, r) {
        return 1 & r && (e = t(e)), H.t(e, -2 & r);
      }),
      t
    );
  }
  function l(e) {
    var r = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: n !== e,
      active: !0,
      accept: function(e, n) {
        if (void 0 === e) r._selfAccepted = !0;
        else if ("function" == typeof e) r._selfAccepted = e;
        else if ("object" == typeof e)
          for (var t = 0; t < e.length; t++)
            r._acceptedDependencies[e[t]] = n || function() {};
        else r._acceptedDependencies[e] = n || function() {};
      },
      decline: function(e) {
        if (void 0 === e) r._selfDeclined = !0;
        else if ("object" == typeof e)
          for (var n = 0; n < e.length; n++) r._declinedDependencies[e[n]] = !0;
        else r._declinedDependencies[e] = !0;
      },
      dispose: function(e) {
        r._disposeHandlers.push(e);
      },
      addDisposeHandler: function(e) {
        r._disposeHandlers.push(e);
      },
      removeDisposeHandler: function(e) {
        var n = r._disposeHandlers.indexOf(e);
        n >= 0 && r._disposeHandlers.splice(n, 1);
      },
      check: _,
      apply: E,
      status: function(e) {
        if (!e) return u;
        p.push(e);
      },
      addStatusHandler: function(e) {
        p.push(e);
      },
      removeStatusHandler: function(e) {
        var r = p.indexOf(e);
        r >= 0 && p.splice(r, 1);
      },
      data: d[e]
    };
    return (n = void 0), r;
  }
  var p = [],
    u = "idle";
  function f(e) {
    u = e;
    for (var r = 0; r < p.length; r++) p[r].call(null, e);
  }
  var h,
    m,
    y,
    v = 0,
    b = 0,
    j = {},
    w = {},
    g = {};
  function O(e) {
    return +e + "" === e ? +e : e;
  }
  function _(e) {
    if ("idle" !== u) throw new Error("check() is only allowed in idle status");
    return (
      (t = e),
      f("check"),
      ((r = c),
      (r = r || 1e4),
      new Promise(function(e, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var t = new XMLHttpRequest(),
            c = H.p + "" + o + ".hot-update.json";
          t.open("GET", c, !0), (t.timeout = r), t.send(null);
        } catch (e) {
          return n(e);
        }
        t.onreadystatechange = function() {
          if (4 === t.readyState)
            if (0 === t.status)
              n(new Error("Manifest request to " + c + " timed out."));
            else if (404 === t.status) e();
            else if (200 !== t.status && 304 !== t.status)
              n(new Error("Manifest request to " + c + " failed."));
            else {
              try {
                var r = JSON.parse(t.responseText);
              } catch (e) {
                return void n(e);
              }
              e(r);
            }
        };
      })).then(function(e) {
        if (!e) return f("idle"), null;
        (w = {}), (j = {}), (g = e.c), (y = e.h), f("prepare");
        var r = new Promise(function(e, r) {
          h = { resolve: e, reject: r };
        });
        m = {};
        return x(0), "prepare" === u && 0 === b && 0 === v && D(), r;
      })
    );
    var r;
  }
  function x(e) {
    g[e]
      ? ((w[e] = !0),
        v++,
        (function(e) {
          var r = document.createElement("script");
          (r.charset = "utf-8"),
            (r.src = H.p + "" + e + "." + o + ".hot-update.js"),
            document.head.appendChild(r);
        })(e))
      : (j[e] = !0);
  }
  function D() {
    f("ready");
    var e = h;
    if (((h = null), e))
      if (t)
        Promise.resolve()
          .then(function() {
            return E(t);
          })
          .then(
            function(r) {
              e.resolve(r);
            },
            function(r) {
              e.reject(r);
            }
          );
      else {
        var r = [];
        for (var n in m)
          Object.prototype.hasOwnProperty.call(m, n) && r.push(O(n));
        e.resolve(r);
      }
  }
  function E(r) {
    if ("ready" !== u)
      throw new Error("apply() is only allowed in ready status");
    var n, t, c, a, s;
    function l(e) {
      for (
        var r = [e],
          n = {},
          t = r.map(function(e) {
            return { chain: [e], id: e };
          });
        t.length > 0;

      ) {
        var o = t.pop(),
          c = o.id,
          d = o.chain;
        if ((a = P[c]) && !a.hot._selfAccepted) {
          if (a.hot._selfDeclined)
            return { type: "self-declined", chain: d, moduleId: c };
          if (a.hot._main) return { type: "unaccepted", chain: d, moduleId: c };
          for (var i = 0; i < a.parents.length; i++) {
            var s = a.parents[i],
              l = P[s];
            if (l) {
              if (l.hot._declinedDependencies[c])
                return {
                  type: "declined",
                  chain: d.concat([s]),
                  moduleId: c,
                  parentId: s
                };
              -1 === r.indexOf(s) &&
                (l.hot._acceptedDependencies[c]
                  ? (n[s] || (n[s] = []), p(n[s], [c]))
                  : (delete n[s],
                    r.push(s),
                    t.push({ chain: d.concat([s]), id: s })));
            }
          }
        }
      }
      return {
        type: "accepted",
        moduleId: e,
        outdatedModules: r,
        outdatedDependencies: n
      };
    }
    function p(e, r) {
      for (var n = 0; n < r.length; n++) {
        var t = r[n];
        -1 === e.indexOf(t) && e.push(t);
      }
    }
    r = r || {};
    var h = {},
      v = [],
      b = {},
      j = function() {
        console.warn(
          "[HMR] unexpected require(" + _.moduleId + ") to disposed module"
        );
      };
    for (var w in m)
      if (Object.prototype.hasOwnProperty.call(m, w)) {
        var _;
        s = O(w);
        var x = !1,
          D = !1,
          E = !1,
          I = "";
        switch (
          ((_ = m[w] ? l(s) : { type: "disposed", moduleId: w }).chain &&
            (I = "\nUpdate propagation: " + _.chain.join(" -> ")),
          _.type)
        ) {
          case "self-declined":
            r.onDeclined && r.onDeclined(_),
              r.ignoreDeclined ||
                (x = new Error(
                  "Aborted because of self decline: " + _.moduleId + I
                ));
            break;
          case "declined":
            r.onDeclined && r.onDeclined(_),
              r.ignoreDeclined ||
                (x = new Error(
                  "Aborted because of declined dependency: " +
                    _.moduleId +
                    " in " +
                    _.parentId +
                    I
                ));
            break;
          case "unaccepted":
            r.onUnaccepted && r.onUnaccepted(_),
              r.ignoreUnaccepted ||
                (x = new Error(
                  "Aborted because " + s + " is not accepted" + I
                ));
            break;
          case "accepted":
            r.onAccepted && r.onAccepted(_), (D = !0);
            break;
          case "disposed":
            r.onDisposed && r.onDisposed(_), (E = !0);
            break;
          default:
            throw new Error("Unexception type " + _.type);
        }
        if (x) return f("abort"), Promise.reject(x);
        if (D)
          for (s in ((b[s] = m[s]),
          p(v, _.outdatedModules),
          _.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(_.outdatedDependencies, s) &&
              (h[s] || (h[s] = []), p(h[s], _.outdatedDependencies[s]));
        E && (p(v, [_.moduleId]), (b[s] = j));
      }
    var k,
      S = [];
    for (t = 0; t < v.length; t++)
      (s = v[t]),
        P[s] &&
          P[s].hot._selfAccepted &&
          b[s] !== j &&
          S.push({ module: s, errorHandler: P[s].hot._selfAccepted });
    f("dispose"),
      Object.keys(g).forEach(function(e) {
        !1 === g[e] &&
          (function(e) {
            delete installedChunks[e];
          })(e);
      });
    for (var A, M, q = v.slice(); q.length > 0; )
      if (((s = q.pop()), (a = P[s]))) {
        var U = {},
          R = a.hot._disposeHandlers;
        for (c = 0; c < R.length; c++) (n = R[c])(U);
        for (
          d[s] = U, a.hot.active = !1, delete P[s], delete h[s], c = 0;
          c < a.children.length;
          c++
        ) {
          var T = P[a.children[c]];
          T && ((k = T.parents.indexOf(s)) >= 0 && T.parents.splice(k, 1));
        }
      }
    for (s in h)
      if (Object.prototype.hasOwnProperty.call(h, s) && (a = P[s]))
        for (M = h[s], c = 0; c < M.length; c++)
          (A = M[c]),
            (k = a.children.indexOf(A)) >= 0 && a.children.splice(k, 1);
    for (s in (f("apply"), (o = y), b))
      Object.prototype.hasOwnProperty.call(b, s) && (e[s] = b[s]);
    var J = null;
    for (s in h)
      if (Object.prototype.hasOwnProperty.call(h, s) && (a = P[s])) {
        M = h[s];
        var N = [];
        for (t = 0; t < M.length; t++)
          if (((A = M[t]), (n = a.hot._acceptedDependencies[A]))) {
            if (-1 !== N.indexOf(n)) continue;
            N.push(n);
          }
        for (t = 0; t < N.length; t++) {
          n = N[t];
          try {
            n(M);
          } catch (e) {
            r.onErrored &&
              r.onErrored({
                type: "accept-errored",
                moduleId: s,
                dependencyId: M[t],
                error: e
              }),
              r.ignoreErrored || J || (J = e);
          }
        }
      }
    for (t = 0; t < S.length; t++) {
      var C = S[t];
      (s = C.module), (i = [s]);
      try {
        H(s);
      } catch (e) {
        if ("function" == typeof C.errorHandler)
          try {
            C.errorHandler(e);
          } catch (n) {
            r.onErrored &&
              r.onErrored({
                type: "self-accept-error-handler-errored",
                moduleId: s,
                error: n,
                originalError: e
              }),
              r.ignoreErrored || J || (J = n),
              J || (J = e);
          }
        else
          r.onErrored &&
            r.onErrored({ type: "self-accept-errored", moduleId: s, error: e }),
            r.ignoreErrored || J || (J = e);
      }
    }
    return J
      ? (f("fail"), Promise.reject(J))
      : (f("idle"),
        new Promise(function(e) {
          e(v);
        }));
  }
  var P = {};
  function H(r) {
    if (P[r]) return P[r].exports;
    var n = (P[r] = {
      i: r,
      l: !1,
      exports: {},
      hot: l(r),
      parents: ((a = i), (i = []), a),
      children: []
    });
    return e[r].call(n.exports, n, n.exports, s(r)), (n.l = !0), n.exports;
  }
  (H.m = e),
    (H.c = P),
    (H.d = function(e, r, n) {
      H.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (H.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (H.t = function(e, r) {
      if ((1 & r && (e = H(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (H.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var t in e)
          H.d(
            n,
            t,
            function(r) {
              return e[r];
            }.bind(null, t)
          );
      return n;
    }),
    (H.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return H.d(r, "a", r), r;
    }),
    (H.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (H.p = ""),
    (H.h = function() {
      return o;
    }),
    s(0)((H.s = 0));
})([
  function(e, r) {
    function n(e) {
      var r = document.createElement("script");
      (r.type = "systemjs-importmap"), (r.text = JSON.stringify(e));
      var n = document.querySelectorAll('script[type="systemjs-importmap"]');
      n[n.length - 1].insertAdjacentElement("afterEnd", r);
    }
    window.SystemJS = window.System;
    n({
      imports: {
        react:
          "https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js",
        "react-dom":
          "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js",
        "react-dom/server":
          "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom-server.browser.production.min.js",
        "single-spa":
          "https://unpkg.com/single-spa@4.3.2/lib/umd/single-spa.min.js",
        lodash:
          "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js",
        rxjs: "https://unpkg.com/rxjs@6.4.0/bundles/rxjs.umd.min.js"
      }
    });
  }
]);
//# sourceMappingURL=common-deps.js.map
