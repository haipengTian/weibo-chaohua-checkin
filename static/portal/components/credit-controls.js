var fy = (n) => {
  throw TypeError(n);
};
var dy = (n, a, l) => a.has(n) || fy("Cannot " + l);
var Yt = (n, a, l) => (dy(n, a, "read from private field"), l ? l.call(n) : a.get(n)), my = (n, a, l) => a.has(n) ? fy("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(n) : a.set(n, l), Rf = (n, a, l, o) => (dy(n, a, "write to private field"), o ? o.call(n, l) : a.set(n, l), l);
function X1(n, a) {
  for (var l = 0; l < a.length; l++) {
    const o = a[l];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in n)) {
          const u = Object.getOwnPropertyDescriptor(o, s);
          u && Object.defineProperty(n, s, u.get ? u : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function Q1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var zf = { exports: {} }, Vl = {};
var hy;
function Z1() {
  if (hy) return Vl;
  hy = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(o, s, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      u = {};
      for (var m in s)
        m !== "key" && (u[m] = s[m]);
    } else u = s;
    return s = u.ref, {
      $$typeof: n,
      type: o,
      key: d,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return Vl.Fragment = a, Vl.jsx = l, Vl.jsxs = l, Vl;
}
var py;
function I1() {
  return py || (py = 1, zf.exports = Z1()), zf.exports;
}
var g = I1(), Hf = { exports: {} }, Fl = {}, Yf = { exports: {} }, Uf = {};
var gy;
function $1() {
  return gy || (gy = 1, (function(n) {
    function a(H, F) {
      var K = H.length;
      H.push(F);
      e: for (; 0 < K; ) {
        var oe = K - 1 >>> 1, G = H[oe];
        if (0 < s(G, F))
          H[oe] = F, H[K] = G, K = oe;
        else break e;
      }
    }
    function l(H) {
      return H.length === 0 ? null : H[0];
    }
    function o(H) {
      if (H.length === 0) return null;
      var F = H[0], K = H.pop();
      if (K !== F) {
        H[0] = K;
        e: for (var oe = 0, G = H.length, A = G >>> 1; oe < A; ) {
          var W = 2 * (oe + 1) - 1, ae = H[W], se = W + 1, ce = H[se];
          if (0 > s(ae, K))
            se < G && 0 > s(ce, ae) ? (H[oe] = ce, H[se] = K, oe = se) : (H[oe] = ae, H[W] = K, oe = W);
          else if (se < G && 0 > s(ce, K))
            H[oe] = ce, H[se] = K, oe = se;
          else break e;
        }
      }
      return F;
    }
    function s(H, F) {
      var K = H.sortIndex - F.sortIndex;
      return K !== 0 ? K : H.id - F.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var d = Date, m = d.now();
      n.unstable_now = function() {
        return d.now() - m;
      };
    }
    var h = [], p = [], b = 1, v = null, w = 3, T = !1, E = !1, O = !1, C = !1, D = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function N(H) {
      for (var F = l(p); F !== null; ) {
        if (F.callback === null) o(p);
        else if (F.startTime <= H)
          o(p), F.sortIndex = F.expirationTime, a(h, F);
        else break;
        F = l(p);
      }
    }
    function z(H) {
      if (O = !1, N(H), !E)
        if (l(h) !== null)
          E = !0, k || (k = !0, ne());
        else {
          var F = l(p);
          F !== null && ie(z, F.startTime - H);
        }
    }
    var k = !1, Y = -1, B = 5, Z = -1;
    function te() {
      return C ? !0 : !(n.unstable_now() - Z < B);
    }
    function re() {
      if (C = !1, k) {
        var H = n.unstable_now();
        Z = H;
        var F = !0;
        try {
          e: {
            E = !1, O && (O = !1, _(Y), Y = -1), T = !0;
            var K = w;
            try {
              t: {
                for (N(H), v = l(h); v !== null && !(v.expirationTime > H && te()); ) {
                  var oe = v.callback;
                  if (typeof oe == "function") {
                    v.callback = null, w = v.priorityLevel;
                    var G = oe(
                      v.expirationTime <= H
                    );
                    if (H = n.unstable_now(), typeof G == "function") {
                      v.callback = G, N(H), F = !0;
                      break t;
                    }
                    v === l(h) && o(h), N(H);
                  } else o(h);
                  v = l(h);
                }
                if (v !== null) F = !0;
                else {
                  var A = l(p);
                  A !== null && ie(
                    z,
                    A.startTime - H
                  ), F = !1;
                }
              }
              break e;
            } finally {
              v = null, w = K, T = !1;
            }
            F = void 0;
          }
        } finally {
          F ? ne() : k = !1;
        }
      }
    }
    var ne;
    if (typeof M == "function")
      ne = function() {
        M(re);
      };
    else if (typeof MessageChannel < "u") {
      var X = new MessageChannel(), ee = X.port2;
      X.port1.onmessage = re, ne = function() {
        ee.postMessage(null);
      };
    } else
      ne = function() {
        D(re, 0);
      };
    function ie(H, F) {
      Y = D(function() {
        H(n.unstable_now());
      }, F);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, n.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : B = 0 < H ? Math.floor(1e3 / H) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(H) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = w;
      }
      var K = w;
      w = F;
      try {
        return H();
      } finally {
        w = K;
      }
    }, n.unstable_requestPaint = function() {
      C = !0;
    }, n.unstable_runWithPriority = function(H, F) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var K = w;
      w = H;
      try {
        return F();
      } finally {
        w = K;
      }
    }, n.unstable_scheduleCallback = function(H, F, K) {
      var oe = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? oe + K : oe) : K = oe, H) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = K + G, H = {
        id: b++,
        callback: F,
        priorityLevel: H,
        startTime: K,
        expirationTime: G,
        sortIndex: -1
      }, K > oe ? (H.sortIndex = K, a(p, H), l(h) === null && H === l(p) && (O ? (_(Y), Y = -1) : O = !0, ie(z, K - oe))) : (H.sortIndex = G, a(h, H), E || T || (E = !0, k || (k = !0, ne()))), H;
    }, n.unstable_shouldYield = te, n.unstable_wrapCallback = function(H) {
      var F = w;
      return function() {
        var K = w;
        w = F;
        try {
          return H.apply(this, arguments);
        } finally {
          w = K;
        }
      };
    };
  })(Uf)), Uf;
}
var yy;
function K1() {
  return yy || (yy = 1, Yf.exports = $1()), Yf.exports;
}
var Bf = { exports: {} }, Ce = {};
var vy;
function J1() {
  if (vy) return Ce;
  vy = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), u = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function T(A) {
    return A === null || typeof A != "object" ? null : (A = w && A[w] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, O = Object.assign, C = {};
  function D(A, W, ae) {
    this.props = A, this.context = W, this.refs = C, this.updater = ae || E;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(A, W) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, W, "setState");
  }, D.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function _() {
  }
  _.prototype = D.prototype;
  function M(A, W, ae) {
    this.props = A, this.context = W, this.refs = C, this.updater = ae || E;
  }
  var N = M.prototype = new _();
  N.constructor = M, O(N, D.prototype), N.isPureReactComponent = !0;
  var z = Array.isArray;
  function k() {
  }
  var Y = { H: null, A: null, T: null, S: null }, B = Object.prototype.hasOwnProperty;
  function Z(A, W, ae) {
    var se = ae.ref;
    return {
      $$typeof: n,
      type: A,
      key: W,
      ref: se !== void 0 ? se : null,
      props: ae
    };
  }
  function te(A, W) {
    return Z(A.type, W, A.props);
  }
  function re(A) {
    return typeof A == "object" && A !== null && A.$$typeof === n;
  }
  function ne(A) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(ae) {
      return W[ae];
    });
  }
  var X = /\/+/g;
  function ee(A, W) {
    return typeof A == "object" && A !== null && A.key != null ? ne("" + A.key) : W.toString(36);
  }
  function ie(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(k, k) : (A.status = "pending", A.then(
          function(W) {
            A.status === "pending" && (A.status = "fulfilled", A.value = W);
          },
          function(W) {
            A.status === "pending" && (A.status = "rejected", A.reason = W);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function H(A, W, ae, se, ce) {
    var I = typeof A;
    (I === "undefined" || I === "boolean") && (A = null);
    var le = !1;
    if (A === null) le = !0;
    else
      switch (I) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case n:
            case a:
              le = !0;
              break;
            case b:
              return le = A._init, H(
                le(A._payload),
                W,
                ae,
                se,
                ce
              );
          }
      }
    if (le)
      return ce = ce(A), le = se === "" ? "." + ee(A, 0) : se, z(ce) ? (ae = "", le != null && (ae = le.replace(X, "$&/") + "/"), H(ce, W, ae, "", function(ge) {
        return ge;
      })) : ce != null && (re(ce) && (ce = te(
        ce,
        ae + (ce.key == null || A && A.key === ce.key ? "" : ("" + ce.key).replace(
          X,
          "$&/"
        ) + "/") + le
      )), W.push(ce)), 1;
    le = 0;
    var Se = se === "" ? "." : se + ":";
    if (z(A))
      for (var he = 0; he < A.length; he++)
        se = A[he], I = Se + ee(se, he), le += H(
          se,
          W,
          ae,
          I,
          ce
        );
    else if (he = T(A), typeof he == "function")
      for (A = he.call(A), he = 0; !(se = A.next()).done; )
        se = se.value, I = Se + ee(se, he++), le += H(
          se,
          W,
          ae,
          I,
          ce
        );
    else if (I === "object") {
      if (typeof A.then == "function")
        return H(
          ie(A),
          W,
          ae,
          se,
          ce
        );
      throw W = String(A), Error(
        "Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return le;
  }
  function F(A, W, ae) {
    if (A == null) return A;
    var se = [], ce = 0;
    return H(A, se, "", "", function(I) {
      return W.call(ae, I, ce++);
    }), se;
  }
  function K(A) {
    if (A._status === -1) {
      var W = A._result;
      W = W(), W.then(
        function(ae) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = ae);
        },
        function(ae) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = ae);
        }
      ), A._status === -1 && (A._status = 0, A._result = W);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var oe = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var W = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(W)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  }, G = {
    map: F,
    forEach: function(A, W, ae) {
      F(
        A,
        function() {
          W.apply(this, arguments);
        },
        ae
      );
    },
    count: function(A) {
      var W = 0;
      return F(A, function() {
        W++;
      }), W;
    },
    toArray: function(A) {
      return F(A, function(W) {
        return W;
      }) || [];
    },
    only: function(A) {
      if (!re(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return Ce.Activity = v, Ce.Children = G, Ce.Component = D, Ce.Fragment = l, Ce.Profiler = s, Ce.PureComponent = M, Ce.StrictMode = o, Ce.Suspense = h, Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, Ce.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return Y.H.useMemoCache(A);
    }
  }, Ce.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, Ce.cacheSignal = function() {
    return null;
  }, Ce.cloneElement = function(A, W, ae) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var se = O({}, A.props), ce = A.key;
    if (W != null)
      for (I in W.key !== void 0 && (ce = "" + W.key), W)
        !B.call(W, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && W.ref === void 0 || (se[I] = W[I]);
    var I = arguments.length - 2;
    if (I === 1) se.children = ae;
    else if (1 < I) {
      for (var le = Array(I), Se = 0; Se < I; Se++)
        le[Se] = arguments[Se + 2];
      se.children = le;
    }
    return Z(A.type, ce, se);
  }, Ce.createContext = function(A) {
    return A = {
      $$typeof: d,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: u,
      _context: A
    }, A;
  }, Ce.createElement = function(A, W, ae) {
    var se, ce = {}, I = null;
    if (W != null)
      for (se in W.key !== void 0 && (I = "" + W.key), W)
        B.call(W, se) && se !== "key" && se !== "__self" && se !== "__source" && (ce[se] = W[se]);
    var le = arguments.length - 2;
    if (le === 1) ce.children = ae;
    else if (1 < le) {
      for (var Se = Array(le), he = 0; he < le; he++)
        Se[he] = arguments[he + 2];
      ce.children = Se;
    }
    if (A && A.defaultProps)
      for (se in le = A.defaultProps, le)
        ce[se] === void 0 && (ce[se] = le[se]);
    return Z(A, I, ce);
  }, Ce.createRef = function() {
    return { current: null };
  }, Ce.forwardRef = function(A) {
    return { $$typeof: m, render: A };
  }, Ce.isValidElement = re, Ce.lazy = function(A) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: A },
      _init: K
    };
  }, Ce.memo = function(A, W) {
    return {
      $$typeof: p,
      type: A,
      compare: W === void 0 ? null : W
    };
  }, Ce.startTransition = function(A) {
    var W = Y.T, ae = {};
    Y.T = ae;
    try {
      var se = A(), ce = Y.S;
      ce !== null && ce(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(k, oe);
    } catch (I) {
      oe(I);
    } finally {
      W !== null && ae.types !== null && (W.types = ae.types), Y.T = W;
    }
  }, Ce.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, Ce.use = function(A) {
    return Y.H.use(A);
  }, Ce.useActionState = function(A, W, ae) {
    return Y.H.useActionState(A, W, ae);
  }, Ce.useCallback = function(A, W) {
    return Y.H.useCallback(A, W);
  }, Ce.useContext = function(A) {
    return Y.H.useContext(A);
  }, Ce.useDebugValue = function() {
  }, Ce.useDeferredValue = function(A, W) {
    return Y.H.useDeferredValue(A, W);
  }, Ce.useEffect = function(A, W) {
    return Y.H.useEffect(A, W);
  }, Ce.useEffectEvent = function(A) {
    return Y.H.useEffectEvent(A);
  }, Ce.useId = function() {
    return Y.H.useId();
  }, Ce.useImperativeHandle = function(A, W, ae) {
    return Y.H.useImperativeHandle(A, W, ae);
  }, Ce.useInsertionEffect = function(A, W) {
    return Y.H.useInsertionEffect(A, W);
  }, Ce.useLayoutEffect = function(A, W) {
    return Y.H.useLayoutEffect(A, W);
  }, Ce.useMemo = function(A, W) {
    return Y.H.useMemo(A, W);
  }, Ce.useOptimistic = function(A, W) {
    return Y.H.useOptimistic(A, W);
  }, Ce.useReducer = function(A, W, ae) {
    return Y.H.useReducer(A, W, ae);
  }, Ce.useRef = function(A) {
    return Y.H.useRef(A);
  }, Ce.useState = function(A) {
    return Y.H.useState(A);
  }, Ce.useSyncExternalStore = function(A, W, ae) {
    return Y.H.useSyncExternalStore(
      A,
      W,
      ae
    );
  }, Ce.useTransition = function() {
    return Y.H.useTransition();
  }, Ce.version = "19.2.3", Ce;
}
var by;
function Ed() {
  return by || (by = 1, Bf.exports = J1()), Bf.exports;
}
var Lf = { exports: {} }, Bt = {};
var xy;
function eS() {
  if (xy) return Bt;
  xy = 1;
  var n = Ed();
  function a(h) {
    var p = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        p += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + h + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var o = {
    d: {
      f: l,
      r: function() {
        throw Error(a(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function u(h, p, b) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : "" + v,
      children: h,
      containerInfo: p,
      implementation: b
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, p) {
    if (h === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Bt.createPortal = function(h, p) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(a(299));
    return u(h, p, null, b);
  }, Bt.flushSync = function(h) {
    var p = d.T, b = o.p;
    try {
      if (d.T = null, o.p = 2, h) return h();
    } finally {
      d.T = p, o.p = b, o.d.f();
    }
  }, Bt.preconnect = function(h, p) {
    typeof h == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(h, p));
  }, Bt.prefetchDNS = function(h) {
    typeof h == "string" && o.d.D(h);
  }, Bt.preinit = function(h, p) {
    if (typeof h == "string" && p && typeof p.as == "string") {
      var b = p.as, v = m(b, p.crossOrigin), w = typeof p.integrity == "string" ? p.integrity : void 0, T = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      b === "style" ? o.d.S(
        h,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: v,
          integrity: w,
          fetchPriority: T
        }
      ) : b === "script" && o.d.X(h, {
        crossOrigin: v,
        integrity: w,
        fetchPriority: T,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Bt.preinitModule = function(h, p) {
    if (typeof h == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var b = m(
            p.as,
            p.crossOrigin
          );
          o.d.M(h, {
            crossOrigin: b,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && o.d.M(h);
  }, Bt.preload = function(h, p) {
    if (typeof h == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var b = p.as, v = m(b, p.crossOrigin);
      o.d.L(h, b, {
        crossOrigin: v,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Bt.preloadModule = function(h, p) {
    if (typeof h == "string")
      if (p) {
        var b = m(p.as, p.crossOrigin);
        o.d.m(h, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(h);
  }, Bt.requestFormReset = function(h) {
    o.d.r(h);
  }, Bt.unstable_batchedUpdates = function(h, p) {
    return h(p);
  }, Bt.useFormState = function(h, p, b) {
    return d.H.useFormState(h, p, b);
  }, Bt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, Bt.version = "19.2.3", Bt;
}
var wy;
function _v() {
  if (wy) return Lf.exports;
  wy = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Lf.exports = eS(), Lf.exports;
}
var Sy;
function tS() {
  if (Sy) return Fl;
  Sy = 1;
  var n = K1(), a = Ed(), l = _v();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (u(e) !== e)
      throw Error(o(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = u(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var c = r.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (i = c.return, i !== null) {
          r = i;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === r) return h(c), e;
          if (f === i) return h(c), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== i.return) r = c, i = f;
      else {
        for (var y = !1, S = c.child; S; ) {
          if (S === r) {
            y = !0, r = c, i = f;
            break;
          }
          if (S === i) {
            y = !0, i = c, r = f;
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = f.child; S; ) {
            if (S === r) {
              y = !0, r = f, i = c;
              break;
            }
            if (S === i) {
              y = !0, i = f, r = c;
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (r.alternate !== i) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), te = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var X = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === X ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case D:
        return "Profiler";
      case C:
        return "StrictMode";
      case z:
        return "Suspense";
      case k:
        return "SuspenseList";
      case Z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return "Portal";
        case M:
          return e.displayName || "Context";
        case _:
          return (e._context.displayName || "Context") + ".Consumer";
        case N:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Y:
          return t = e.displayName || null, t !== null ? t : ee(e.type) || "Memo";
        case B:
          t = e._payload, e = e._init;
          try {
            return ee(e(t));
          } catch {
          }
      }
    return null;
  }
  var ie = Array.isArray, H = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, oe = [], G = -1;
  function A(e) {
    return { current: e };
  }
  function W(e) {
    0 > G || (e.current = oe[G], oe[G] = null, G--);
  }
  function ae(e, t) {
    G++, oe[G] = e.current, e.current = t;
  }
  var se = A(null), ce = A(null), I = A(null), le = A(null);
  function Se(e, t) {
    switch (ae(I, t), ae(ce, e), ae(se, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Rg(t), e = zg(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    W(se), ae(se, e);
  }
  function he() {
    W(se), W(ce), W(I);
  }
  function ge(e) {
    e.memoizedState !== null && ae(le, e);
    var t = se.current, r = zg(t, e.type);
    t !== r && (ae(ce, e), ae(se, r));
  }
  function Qe(e) {
    ce.current === e && (W(se), W(ce)), le.current === e && (W(le), ql._currentValue = K);
  }
  var Pe, Ee;
  function Me(e) {
    if (Pe === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        Pe = t && t[1] || "", Ee = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pe + e + Ee;
  }
  var Ve = !1;
  function Zn(e, t) {
    if (!e || Ve) return "";
    Ve = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (V) {
                  var P = V;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch (V) {
                  P = V;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                P = V;
              }
              (J = e()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (V) {
            if (V && P && typeof V.stack == "string")
              return [V.stack, P.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = i.DetermineComponentFrameRoot(), y = f[0], S = f[1];
      if (y && S) {
        var j = y.split(`
`), q = S.split(`
`);
        for (c = i = 0; i < j.length && !j[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (i === j.length || c === q.length)
          for (i = j.length - 1, c = q.length - 1; 1 <= i && 0 <= c && j[i] !== q[c]; )
            c--;
        for (; 1 <= i && 0 <= c; i--, c--)
          if (j[i] !== q[c]) {
            if (i !== 1 || c !== 1)
              do
                if (i--, c--, 0 > c || j[i] !== q[c]) {
                  var Q = `
` + j[i].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= i && 0 <= c);
            break;
          }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? Me(r) : "";
  }
  function ur(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Me(e.type);
      case 16:
        return Me("Lazy");
      case 13:
        return e.child !== t && t !== null ? Me("Suspense Fallback") : Me("Suspense");
      case 19:
        return Me("SuspenseList");
      case 0:
      case 15:
        return Zn(e.type, !1);
      case 11:
        return Zn(e.type.render, !1);
      case 1:
        return Zn(e.type, !0);
      case 31:
        return Me("Activity");
      default:
        return "";
    }
  }
  function Da(e) {
    try {
      var t = "", r = null;
      do
        t += ur(e, r), r = e, e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Ko = Object.prototype.hasOwnProperty, Jo = n.unstable_scheduleCallback, el = n.unstable_cancelCallback, gc = n.unstable_shouldYield, oi = n.unstable_requestPaint, At = n.unstable_now, tl = n.unstable_getCurrentPriorityLevel, li = n.unstable_ImmediatePriority, ii = n.unstable_UserBlockingPriority, Qr = n.unstable_NormalPriority, yc = n.unstable_LowPriority, si = n.unstable_IdlePriority, vc = n.log, bc = n.unstable_setDisableYieldValue, fr = null, Pt = null;
  function An(e) {
    if (typeof vc == "function" && bc(e), Pt && typeof Pt.setStrictMode == "function")
      try {
        Pt.setStrictMode(fr, e);
      } catch {
      }
  }
  var Gt = Math.clz32 ? Math.clz32 : Te, ci = Math.log, xc = Math.LN2;
  function Te(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ci(e) / xc | 0) | 0;
  }
  var Ue = 256, be = 262144, Re = 4194304;
  function mt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ne(e, t, r) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var c = 0, f = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var S = i & 134217727;
    return S !== 0 ? (i = S & ~f, i !== 0 ? c = mt(i) : (y &= S, y !== 0 ? c = mt(y) : r || (r = S & ~e, r !== 0 && (c = mt(r))))) : (S = i & ~f, S !== 0 ? c = mt(S) : y !== 0 ? c = mt(y) : r || (r = i & ~e, r !== 0 && (c = mt(r)))), c === 0 ? 0 : t !== 0 && t !== c && (t & f) === 0 && (f = c & -c, r = t & -t, f >= r || f === 32 && (r & 4194048) !== 0) ? t : c;
  }
  function dr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function wc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ui() {
    var e = Re;
    return Re <<= 1, (Re & 62914560) === 0 && (Re = 4194304), e;
  }
  function mr(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function In(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function zx(e, t, r, i, c, f) {
    var y = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var S = e.entanglements, j = e.expirationTimes, q = e.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var Q = 31 - Gt(r), J = 1 << Q;
      S[Q] = 0, j[Q] = -1;
      var P = q[Q];
      if (P !== null)
        for (q[Q] = null, Q = 0; Q < P.length; Q++) {
          var V = P[Q];
          V !== null && (V.lane &= -536870913);
        }
      r &= ~J;
    }
    i !== 0 && gm(e, i, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t));
  }
  function gm(e, t, r) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - Gt(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | r & 261930;
  }
  function ym(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var i = 31 - Gt(r), c = 1 << i;
      c & t | e[i] & t && (e[i] |= t), r &= ~c;
    }
  }
  function vm(e, t) {
    var r = t & -t;
    return r = (r & 42) !== 0 ? 1 : Sc(r), (r & (e.suspendedLanes | t)) !== 0 ? 0 : r;
  }
  function Sc(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Cc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function bm() {
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ry(e.type));
  }
  function xm(e, t) {
    var r = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = r;
    }
  }
  var _a = Math.random().toString(36).slice(2), kt = "__reactFiber$" + _a, Vt = "__reactProps$" + _a, Zr = "__reactContainer$" + _a, Ec = "__reactEvents$" + _a, Hx = "__reactListeners$" + _a, Yx = "__reactHandles$" + _a, wm = "__reactResources$" + _a, nl = "__reactMarker$" + _a;
  function Tc(e) {
    delete e[kt], delete e[Vt], delete e[Ec], delete e[Hx], delete e[Yx];
  }
  function Ir(e) {
    var t = e[kt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[Zr] || r[kt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
          for (e = Pg(e); e !== null; ) {
            if (r = e[kt]) return r;
            e = Pg(e);
          }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function $r(e) {
    if (e = e[kt] || e[Zr]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function al(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Kr(e) {
    var t = e[wm];
    return t || (t = e[wm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dt(e) {
    e[nl] = !0;
  }
  var Sm = /* @__PURE__ */ new Set(), Cm = {};
  function hr(e, t) {
    Jr(e, t), Jr(e + "Capture", t);
  }
  function Jr(e, t) {
    for (Cm[e] = t, e = 0; e < t.length; e++)
      Sm.add(t[e]);
  }
  var Ux = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Em = {}, Tm = {};
  function Bx(e) {
    return Ko.call(Tm, e) ? !0 : Ko.call(Em, e) ? !1 : Ux.test(e) ? Tm[e] = !0 : (Em[e] = !0, !1);
  }
  function fi(e, t, r) {
    if (Bx(t))
      if (r === null) e.removeAttribute(t);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + r);
      }
  }
  function di(e, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + r);
    }
  }
  function $n(e, t, r, i) {
    if (i === null) e.removeAttribute(r);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(t, r, "" + i);
    }
  }
  function fn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Om(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Lx(e, t, r) {
    var i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, f = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(y) {
          r = "" + y, f.call(this, y);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(y) {
          r = "" + y;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Oc(e) {
    if (!e._valueTracker) {
      var t = Om(e) ? "checked" : "value";
      e._valueTracker = Lx(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Mm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), i = "";
    return e && (i = Om(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (t.setValue(e), !0) : !1;
  }
  function mi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var qx = /[\n"\\]/g;
  function dn(e) {
    return e.replace(
      qx,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Mc(e, t, r, i, c, f, y, S) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + fn(t)) : e.value !== "" + fn(t) && (e.value = "" + fn(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), t != null ? Dc(e, y, fn(t)) : r != null ? Dc(e, y, fn(r)) : i != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + fn(S) : e.removeAttribute("name");
  }
  function Dm(e, t, r, i, c, f, y, S) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || r != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        Oc(e);
        return;
      }
      r = r != null ? "" + fn(r) : "", t = t != null ? "" + fn(t) : r, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? c, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = S ? e.checked : !!i, e.defaultChecked = !!i, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y), Oc(e);
  }
  function Dc(e, t, r) {
    t === "number" && mi(e.ownerDocument) === e || e.defaultValue === "" + r || (e.defaultValue = "" + r);
  }
  function eo(e, t, r, i) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < r.length; c++)
        t["$" + r[c]] = !0;
      for (r = 0; r < e.length; r++)
        c = t.hasOwnProperty("$" + e[r].value), e[r].selected !== c && (e[r].selected = c), c && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + fn(r), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === r) {
          e[c].selected = !0, i && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _m(e, t, r) {
    if (t != null && (t = "" + fn(t), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? "" + fn(r) : "";
  }
  function Nm(e, t, r, i) {
    if (t == null) {
      if (i != null) {
        if (r != null) throw Error(o(92));
        if (ie(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), t = r;
    }
    r = fn(t), e.defaultValue = r, i = e.textContent, i === r && i !== "" && i !== null && (e.value = i), Oc(e);
  }
  function to(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Px = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Am(e, t, r) {
    var i = t.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, r) : typeof r != "number" || r === 0 || Px.has(t) ? t === "float" ? e.cssFloat = r : e[t] = ("" + r).trim() : e[t] = r + "px";
  }
  function km(e, t, r) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, r != null) {
      for (var i in r)
        !r.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var c in t)
        i = t[c], t.hasOwnProperty(c) && r[c] !== i && Am(e, c, i);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && Am(e, f, t[f]);
  }
  function _c(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Gx = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Wx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hi(e) {
    return Wx.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Kn() {
  }
  var Nc = null;
  function Ac(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var no = null, ao = null;
  function jm(e) {
    var t = $r(e);
    if (t && (e = t.stateNode)) {
      var r = e[Vt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Mc(
            e,
            r.value,
            r.defaultValue,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name
          ), t = r.name, r.type === "radio" && t != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll(
              'input[name="' + dn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < r.length; t++) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var c = i[Vt] || null;
                if (!c) throw Error(o(90));
                Mc(
                  i,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (t = 0; t < r.length; t++)
              i = r[t], i.form === e.form && Mm(i);
          }
          break e;
        case "textarea":
          _m(e, r.value, r.defaultValue);
          break e;
        case "select":
          t = r.value, t != null && eo(e, !!r.multiple, t, !1);
      }
    }
  }
  var kc = !1;
  function Rm(e, t, r) {
    if (kc) return e(t, r);
    kc = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (kc = !1, (no !== null || ao !== null) && (ts(), no && (t = no, e = ao, ao = no = null, jm(t), e)))
        for (t = 0; t < e.length; t++) jm(e[t]);
    }
  }
  function rl(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = r[Vt] || null;
    if (i === null) return null;
    r = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function")
      throw Error(
        o(231, t, typeof r)
      );
    return r;
  }
  var Jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), jc = !1;
  if (Jn)
    try {
      var ol = {};
      Object.defineProperty(ol, "passive", {
        get: function() {
          jc = !0;
        }
      }), window.addEventListener("test", ol, ol), window.removeEventListener("test", ol, ol);
    } catch {
      jc = !1;
    }
  var Na = null, Rc = null, pi = null;
  function zm() {
    if (pi) return pi;
    var e, t = Rc, r = t.length, i, c = "value" in Na ? Na.value : Na.textContent, f = c.length;
    for (e = 0; e < r && t[e] === c[e]; e++) ;
    var y = r - e;
    for (i = 1; i <= y && t[r - i] === c[f - i]; i++) ;
    return pi = c.slice(e, 1 < i ? 1 - i : void 0);
  }
  function gi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yi() {
    return !0;
  }
  function Hm() {
    return !1;
  }
  function Ft(e) {
    function t(r, i, c, f, y) {
      this._reactName = r, this._targetInst = c, this.type = i, this.nativeEvent = f, this.target = y, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (r = e[S], this[S] = r ? r(f) : f[S]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? yi : Hm, this.isPropagationStopped = Hm, this;
    }
    return v(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = yi);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = yi);
      },
      persist: function() {
      },
      isPersistent: yi
    }), t;
  }
  var pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, vi = Ft(pr), ll = v({}, pr, { view: 0, detail: 0 }), Vx = Ft(ll), zc, Hc, il, bi = v({}, ll, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Uc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== il && (il && e.type === "mousemove" ? (zc = e.screenX - il.screenX, Hc = e.screenY - il.screenY) : Hc = zc = 0, il = e), zc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Hc;
    }
  }), Ym = Ft(bi), Fx = v({}, bi, { dataTransfer: 0 }), Xx = Ft(Fx), Qx = v({}, ll, { relatedTarget: 0 }), Yc = Ft(Qx), Zx = v({}, pr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ix = Ft(Zx), $x = v({}, pr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Kx = Ft($x), Jx = v({}, pr, { data: 0 }), Um = Ft(Jx), ew = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, tw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, nw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function aw(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = nw[e]) ? !!t[e] : !1;
  }
  function Uc() {
    return aw;
  }
  var rw = v({}, ll, {
    key: function(e) {
      if (e.key) {
        var t = ew[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = gi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uc,
    charCode: function(e) {
      return e.type === "keypress" ? gi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ow = Ft(rw), lw = v({}, bi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Bm = Ft(lw), iw = v({}, ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uc
  }), sw = Ft(iw), cw = v({}, pr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), uw = Ft(cw), fw = v({}, bi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dw = Ft(fw), mw = v({}, pr, {
    newState: 0,
    oldState: 0
  }), hw = Ft(mw), pw = [9, 13, 27, 32], Bc = Jn && "CompositionEvent" in window, sl = null;
  Jn && "documentMode" in document && (sl = document.documentMode);
  var gw = Jn && "TextEvent" in window && !sl, Lm = Jn && (!Bc || sl && 8 < sl && 11 >= sl), qm = " ", Pm = !1;
  function Gm(e, t) {
    switch (e) {
      case "keyup":
        return pw.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ro = !1;
  function yw(e, t) {
    switch (e) {
      case "compositionend":
        return Wm(t);
      case "keypress":
        return t.which !== 32 ? null : (Pm = !0, qm);
      case "textInput":
        return e = t.data, e === qm && Pm ? null : e;
      default:
        return null;
    }
  }
  function vw(e, t) {
    if (ro)
      return e === "compositionend" || !Bc && Gm(e, t) ? (e = zm(), pi = Rc = Na = null, ro = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Lm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var bw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Vm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!bw[e.type] : t === "textarea";
  }
  function Fm(e, t, r, i) {
    no ? ao ? ao.push(i) : ao = [i] : no = i, t = ss(t, "onChange"), 0 < t.length && (r = new vi(
      "onChange",
      "change",
      null,
      r,
      i
    ), e.push({ event: r, listeners: t }));
  }
  var cl = null, ul = null;
  function xw(e) {
    Dg(e, 0);
  }
  function xi(e) {
    var t = al(e);
    if (Mm(t)) return e;
  }
  function Xm(e, t) {
    if (e === "change") return t;
  }
  var Qm = !1;
  if (Jn) {
    var Lc;
    if (Jn) {
      var qc = "oninput" in document;
      if (!qc) {
        var Zm = document.createElement("div");
        Zm.setAttribute("oninput", "return;"), qc = typeof Zm.oninput == "function";
      }
      Lc = qc;
    } else Lc = !1;
    Qm = Lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Im() {
    cl && (cl.detachEvent("onpropertychange", $m), ul = cl = null);
  }
  function $m(e) {
    if (e.propertyName === "value" && xi(ul)) {
      var t = [];
      Fm(
        t,
        ul,
        e,
        Ac(e)
      ), Rm(xw, t);
    }
  }
  function ww(e, t, r) {
    e === "focusin" ? (Im(), cl = t, ul = r, cl.attachEvent("onpropertychange", $m)) : e === "focusout" && Im();
  }
  function Sw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return xi(ul);
  }
  function Cw(e, t) {
    if (e === "click") return xi(t);
  }
  function Ew(e, t) {
    if (e === "input" || e === "change")
      return xi(t);
  }
  function Tw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var en = typeof Object.is == "function" ? Object.is : Tw;
  function fl(e, t) {
    if (en(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var r = Object.keys(e), i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var c = r[i];
      if (!Ko.call(t, c) || !en(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function Km(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Jm(e, t) {
    var r = Km(e);
    e = 0;
    for (var i; r; ) {
      if (r.nodeType === 3) {
        if (i = e + r.textContent.length, e <= t && i >= t)
          return { node: r, offset: t - e };
        e = i;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Km(r);
    }
  }
  function eh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? eh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function th(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = mi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = mi(e.document);
    }
    return t;
  }
  function Pc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Ow = Jn && "documentMode" in document && 11 >= document.documentMode, oo = null, Gc = null, dl = null, Wc = !1;
  function nh(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Wc || oo == null || oo !== mi(i) || (i = oo, "selectionStart" in i && Pc(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), dl && fl(dl, i) || (dl = i, i = ss(Gc, "onSelect"), 0 < i.length && (t = new vi(
      "onSelect",
      "select",
      null,
      t,
      r
    ), e.push({ event: t, listeners: i }), t.target = oo)));
  }
  function gr(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var lo = {
    animationend: gr("Animation", "AnimationEnd"),
    animationiteration: gr("Animation", "AnimationIteration"),
    animationstart: gr("Animation", "AnimationStart"),
    transitionrun: gr("Transition", "TransitionRun"),
    transitionstart: gr("Transition", "TransitionStart"),
    transitioncancel: gr("Transition", "TransitionCancel"),
    transitionend: gr("Transition", "TransitionEnd")
  }, Vc = {}, ah = {};
  Jn && (ah = document.createElement("div").style, "AnimationEvent" in window || (delete lo.animationend.animation, delete lo.animationiteration.animation, delete lo.animationstart.animation), "TransitionEvent" in window || delete lo.transitionend.transition);
  function yr(e) {
    if (Vc[e]) return Vc[e];
    if (!lo[e]) return e;
    var t = lo[e], r;
    for (r in t)
      if (t.hasOwnProperty(r) && r in ah)
        return Vc[e] = t[r];
    return e;
  }
  var rh = yr("animationend"), oh = yr("animationiteration"), lh = yr("animationstart"), Mw = yr("transitionrun"), Dw = yr("transitionstart"), _w = yr("transitioncancel"), ih = yr("transitionend"), sh = /* @__PURE__ */ new Map(), Fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Fc.push("scrollEnd");
  function Cn(e, t) {
    sh.set(e, t), hr(t, [e]);
  }
  var wi = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, mn = [], io = 0, Xc = 0;
  function Si() {
    for (var e = io, t = Xc = io = 0; t < e; ) {
      var r = mn[t];
      mn[t++] = null;
      var i = mn[t];
      mn[t++] = null;
      var c = mn[t];
      mn[t++] = null;
      var f = mn[t];
      if (mn[t++] = null, i !== null && c !== null) {
        var y = i.pending;
        y === null ? c.next = c : (c.next = y.next, y.next = c), i.pending = c;
      }
      f !== 0 && ch(r, c, f);
    }
  }
  function Ci(e, t, r, i) {
    mn[io++] = e, mn[io++] = t, mn[io++] = r, mn[io++] = i, Xc |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Qc(e, t, r, i) {
    return Ci(e, t, r, i), Ei(e);
  }
  function vr(e, t) {
    return Ci(e, null, null, t), Ei(e);
  }
  function ch(e, t, r) {
    e.lanes |= r;
    var i = e.alternate;
    i !== null && (i.lanes |= r);
    for (var c = !1, f = e.return; f !== null; )
      f.childLanes |= r, i = f.alternate, i !== null && (i.childLanes |= r), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, c && t !== null && (c = 31 - Gt(r), e = f.hiddenUpdates, i = e[c], i === null ? e[c] = [t] : i.push(t), t.lane = r | 536870912), f) : null;
  }
  function Ei(e) {
    if (50 < Rl)
      throw Rl = 0, af = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var so = {};
  function Nw(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(e, t, r, i) {
    return new Nw(e, t, r, i);
  }
  function Zc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ea(e, t) {
    var r = e.alternate;
    return r === null ? (r = tn(
      e.tag,
      t,
      e.key,
      e.mode
    ), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 65011712, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function uh(e, t) {
    e.flags &= 65011714;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ti(e, t, r, i, c, f) {
    var y = 0;
    if (i = e, typeof e == "function") Zc(e) && (y = 1);
    else if (typeof e == "string")
      y = z1(
        e,
        r,
        se.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Z:
          return e = tn(31, r, t, c), e.elementType = Z, e.lanes = f, e;
        case O:
          return br(r.children, c, f, t);
        case C:
          y = 8, c |= 24;
          break;
        case D:
          return e = tn(12, r, t, c | 2), e.elementType = D, e.lanes = f, e;
        case z:
          return e = tn(13, r, t, c), e.elementType = z, e.lanes = f, e;
        case k:
          return e = tn(19, r, t, c), e.elementType = k, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
                y = 10;
                break e;
              case _:
                y = 9;
                break e;
              case N:
                y = 11;
                break e;
              case Y:
                y = 14;
                break e;
              case B:
                y = 16, i = null;
                break e;
            }
          y = 29, r = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = tn(y, r, t, c), t.elementType = e, t.type = i, t.lanes = f, t;
  }
  function br(e, t, r, i) {
    return e = tn(7, e, i, t), e.lanes = r, e;
  }
  function Ic(e, t, r) {
    return e = tn(6, e, null, t), e.lanes = r, e;
  }
  function fh(e) {
    var t = tn(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function $c(e, t, r) {
    return t = tn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = r, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var dh = /* @__PURE__ */ new WeakMap();
  function hn(e, t) {
    if (typeof e == "object" && e !== null) {
      var r = dh.get(e);
      return r !== void 0 ? r : (t = {
        value: e,
        source: t,
        stack: Da(t)
      }, dh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Da(t)
    };
  }
  var co = [], uo = 0, Oi = null, ml = 0, pn = [], gn = 0, Aa = null, kn = 1, jn = "";
  function ta(e, t) {
    co[uo++] = ml, co[uo++] = Oi, Oi = e, ml = t;
  }
  function mh(e, t, r) {
    pn[gn++] = kn, pn[gn++] = jn, pn[gn++] = Aa, Aa = e;
    var i = kn;
    e = jn;
    var c = 32 - Gt(i) - 1;
    i &= ~(1 << c), r += 1;
    var f = 32 - Gt(t) + c;
    if (30 < f) {
      var y = c - c % 5;
      f = (i & (1 << y) - 1).toString(32), i >>= y, c -= y, kn = 1 << 32 - Gt(t) + c | r << c | i, jn = f + e;
    } else
      kn = 1 << f | r << c | i, jn = e;
  }
  function Kc(e) {
    e.return !== null && (ta(e, 1), mh(e, 1, 0));
  }
  function Jc(e) {
    for (; e === Oi; )
      Oi = co[--uo], co[uo] = null, ml = co[--uo], co[uo] = null;
    for (; e === Aa; )
      Aa = pn[--gn], pn[gn] = null, jn = pn[--gn], pn[gn] = null, kn = pn[--gn], pn[gn] = null;
  }
  function hh(e, t) {
    pn[gn++] = kn, pn[gn++] = jn, pn[gn++] = Aa, kn = t.id, jn = t.overflow, Aa = e;
  }
  var jt = null, ot = null, Be = !1, ka = null, yn = !1, eu = Error(o(519));
  function ja(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw hl(hn(t, e)), eu;
  }
  function ph(e) {
    var t = e.stateNode, r = e.type, i = e.memoizedProps;
    switch (t[kt] = e, t[Vt] = i, r) {
      case "dialog":
        je("cancel", t), je("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        je("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Hl.length; r++)
          je(Hl[r], t);
        break;
      case "source":
        je("error", t);
        break;
      case "img":
      case "image":
      case "link":
        je("error", t), je("load", t);
        break;
      case "details":
        je("toggle", t);
        break;
      case "input":
        je("invalid", t), Dm(
          t,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        je("invalid", t);
        break;
      case "textarea":
        je("invalid", t), Nm(t, i.value, i.defaultValue, i.children);
    }
    r = i.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || t.textContent === "" + r || i.suppressHydrationWarning === !0 || kg(t.textContent, r) ? (i.popover != null && (je("beforetoggle", t), je("toggle", t)), i.onScroll != null && je("scroll", t), i.onScrollEnd != null && je("scrollend", t), i.onClick != null && (t.onclick = Kn), t = !0) : t = !1, t || ja(e, !0);
  }
  function gh(e) {
    for (jt = e.return; jt; )
      switch (jt.tag) {
        case 5:
        case 31:
        case 13:
          yn = !1;
          return;
        case 27:
        case 3:
          yn = !0;
          return;
        default:
          jt = jt.return;
      }
  }
  function fo(e) {
    if (e !== jt) return !1;
    if (!Be) return gh(e), Be = !0, !1;
    var t = e.tag, r;
    if ((r = t !== 3 && t !== 27) && ((r = t === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || bf(e.type, e.memoizedProps)), r = !r), r && ot && ja(e), gh(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = qg(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = qg(e);
    } else
      t === 27 ? (t = ot, Xa(e.type) ? (e = Ef, Ef = null, ot = e) : ot = t) : ot = jt ? bn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function xr() {
    ot = jt = null, Be = !1;
  }
  function tu() {
    var e = ka;
    return e !== null && (It === null ? It = e : It.push.apply(
      It,
      e
    ), ka = null), e;
  }
  function hl(e) {
    ka === null ? ka = [e] : ka.push(e);
  }
  var nu = A(null), wr = null, na = null;
  function Ra(e, t, r) {
    ae(nu, t._currentValue), t._currentValue = r;
  }
  function aa(e) {
    e._currentValue = nu.current, W(nu);
  }
  function au(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function ru(e, t, r, i) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var y = c.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var S = f;
          f = c;
          for (var j = 0; j < t.length; j++)
            if (S.context === t[j]) {
              f.lanes |= r, S = f.alternate, S !== null && (S.lanes |= r), au(
                f.return,
                r,
                e
              ), i || (y = null);
              break e;
            }
          f = S.next;
        }
      } else if (c.tag === 18) {
        if (y = c.return, y === null) throw Error(o(341));
        y.lanes |= r, f = y.alternate, f !== null && (f.lanes |= r), au(y, r, e), y = null;
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (c = y.sibling, c !== null) {
            c.return = y.return, y = c;
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function mo(e, t, r, i) {
    e = null;
    for (var c = t, f = !1; c !== null; ) {
      if (!f) {
        if ((c.flags & 524288) !== 0) f = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(o(387));
        if (y = y.memoizedProps, y !== null) {
          var S = c.type;
          en(c.pendingProps.value, y.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (c === le.current) {
        if (y = c.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ql) : e = [ql]);
      }
      c = c.return;
    }
    e !== null && ru(
      t,
      e,
      r,
      i
    ), t.flags |= 262144;
  }
  function Mi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!en(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Sr(e) {
    wr = e, na = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Rt(e) {
    return yh(wr, e);
  }
  function Di(e, t) {
    return wr === null && Sr(e), yh(e, t);
  }
  function yh(e, t) {
    var r = t._currentValue;
    if (t = { context: t, memoizedValue: r, next: null }, na === null) {
      if (e === null) throw Error(o(308));
      na = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else na = na.next = t;
    return r;
  }
  var Aw = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(r, i) {
        e.push(i);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(r) {
        return r();
      });
    };
  }, kw = n.unstable_scheduleCallback, jw = n.unstable_NormalPriority, xt = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ou() {
    return {
      controller: new Aw(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pl(e) {
    e.refCount--, e.refCount === 0 && kw(jw, function() {
      e.controller.abort();
    });
  }
  var gl = null, lu = 0, ho = 0, po = null;
  function Rw(e, t) {
    if (gl === null) {
      var r = gl = [];
      lu = 0, ho = uf(), po = {
        status: "pending",
        value: void 0,
        then: function(i) {
          r.push(i);
        }
      };
    }
    return lu++, t.then(vh, vh), t;
  }
  function vh() {
    if (--lu === 0 && gl !== null) {
      po !== null && (po.status = "fulfilled");
      var e = gl;
      gl = null, ho = 0, po = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function zw(e, t) {
    var r = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        r.push(c);
      }
    };
    return e.then(
      function() {
        i.status = "fulfilled", i.value = t;
        for (var c = 0; c < r.length; c++) (0, r[c])(t);
      },
      function(c) {
        for (i.status = "rejected", i.reason = c, c = 0; c < r.length; c++)
          (0, r[c])(void 0);
      }
    ), i;
  }
  var bh = H.S;
  H.S = function(e, t) {
    ng = At(), typeof t == "object" && t !== null && typeof t.then == "function" && Rw(e, t), bh !== null && bh(e, t);
  };
  var Cr = A(null);
  function iu() {
    var e = Cr.current;
    return e !== null ? e : nt.pooledCache;
  }
  function _i(e, t) {
    t === null ? ae(Cr, Cr.current) : ae(Cr, t.pool);
  }
  function xh() {
    var e = iu();
    return e === null ? null : { parent: xt._currentValue, pool: e };
  }
  var go = Error(o(460)), su = Error(o(474)), Ni = Error(o(542)), Ai = { then: function() {
  } };
  function wh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Sh(e, t, r) {
    switch (r = e[r], r === void 0 ? e.push(t) : r !== t && (t.then(Kn, Kn), t = r), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Eh(e), e;
      default:
        if (typeof t.status == "string") t.then(Kn, Kn);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(i) {
              if (t.status === "pending") {
                var c = t;
                c.status = "fulfilled", c.value = i;
              }
            },
            function(i) {
              if (t.status === "pending") {
                var c = t;
                c.status = "rejected", c.reason = i;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Eh(e), e;
        }
        throw Tr = t, go;
    }
  }
  function Er(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Tr = r, go) : r;
    }
  }
  var Tr = null;
  function Ch() {
    if (Tr === null) throw Error(o(459));
    var e = Tr;
    return Tr = null, e;
  }
  function Eh(e) {
    if (e === go || e === Ni)
      throw Error(o(483));
  }
  var yo = null, yl = 0;
  function ki(e) {
    var t = yl;
    return yl += 1, yo === null && (yo = []), Sh(yo, e, t);
  }
  function vl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ji(e, t) {
    throw t.$$typeof === w ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Th(e) {
    function t(U, R) {
      if (e) {
        var L = U.deletions;
        L === null ? (U.deletions = [R], U.flags |= 16) : L.push(R);
      }
    }
    function r(U, R) {
      if (!e) return null;
      for (; R !== null; )
        t(U, R), R = R.sibling;
      return null;
    }
    function i(U) {
      for (var R = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? R.set(U.key, U) : R.set(U.index, U), U = U.sibling;
      return R;
    }
    function c(U, R) {
      return U = ea(U, R), U.index = 0, U.sibling = null, U;
    }
    function f(U, R, L) {
      return U.index = L, e ? (L = U.alternate, L !== null ? (L = L.index, L < R ? (U.flags |= 67108866, R) : L) : (U.flags |= 67108866, R)) : (U.flags |= 1048576, R);
    }
    function y(U) {
      return e && U.alternate === null && (U.flags |= 67108866), U;
    }
    function S(U, R, L, $) {
      return R === null || R.tag !== 6 ? (R = Ic(L, U.mode, $), R.return = U, R) : (R = c(R, L), R.return = U, R);
    }
    function j(U, R, L, $) {
      var ve = L.type;
      return ve === O ? Q(
        U,
        R,
        L.props.children,
        $,
        L.key
      ) : R !== null && (R.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === B && Er(ve) === R.type) ? (R = c(R, L.props), vl(R, L), R.return = U, R) : (R = Ti(
        L.type,
        L.key,
        L.props,
        null,
        U.mode,
        $
      ), vl(R, L), R.return = U, R);
    }
    function q(U, R, L, $) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = $c(L, U.mode, $), R.return = U, R) : (R = c(R, L.children || []), R.return = U, R);
    }
    function Q(U, R, L, $, ve) {
      return R === null || R.tag !== 7 ? (R = br(
        L,
        U.mode,
        $,
        ve
      ), R.return = U, R) : (R = c(R, L), R.return = U, R);
    }
    function J(U, R, L) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = Ic(
          "" + R,
          U.mode,
          L
        ), R.return = U, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case T:
            return L = Ti(
              R.type,
              R.key,
              R.props,
              null,
              U.mode,
              L
            ), vl(L, R), L.return = U, L;
          case E:
            return R = $c(
              R,
              U.mode,
              L
            ), R.return = U, R;
          case B:
            return R = Er(R), J(U, R, L);
        }
        if (ie(R) || ne(R))
          return R = br(
            R,
            U.mode,
            L,
            null
          ), R.return = U, R;
        if (typeof R.then == "function")
          return J(U, ki(R), L);
        if (R.$$typeof === M)
          return J(
            U,
            Di(U, R),
            L
          );
        ji(U, R);
      }
      return null;
    }
    function P(U, R, L, $) {
      var ve = R !== null ? R.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return ve !== null ? null : S(U, R, "" + L, $);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case T:
            return L.key === ve ? j(U, R, L, $) : null;
          case E:
            return L.key === ve ? q(U, R, L, $) : null;
          case B:
            return L = Er(L), P(U, R, L, $);
        }
        if (ie(L) || ne(L))
          return ve !== null ? null : Q(U, R, L, $, null);
        if (typeof L.then == "function")
          return P(
            U,
            R,
            ki(L),
            $
          );
        if (L.$$typeof === M)
          return P(
            U,
            R,
            Di(U, L),
            $
          );
        ji(U, L);
      }
      return null;
    }
    function V(U, R, L, $, ve) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
        return U = U.get(L) || null, S(R, U, "" + $, ve);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case T:
            return U = U.get(
              $.key === null ? L : $.key
            ) || null, j(R, U, $, ve);
          case E:
            return U = U.get(
              $.key === null ? L : $.key
            ) || null, q(R, U, $, ve);
          case B:
            return $ = Er($), V(
              U,
              R,
              L,
              $,
              ve
            );
        }
        if (ie($) || ne($))
          return U = U.get(L) || null, Q(R, U, $, ve, null);
        if (typeof $.then == "function")
          return V(
            U,
            R,
            L,
            ki($),
            ve
          );
        if ($.$$typeof === M)
          return V(
            U,
            R,
            L,
            Di(R, $),
            ve
          );
        ji(R, $);
      }
      return null;
    }
    function me(U, R, L, $) {
      for (var ve = null, Ge = null, pe = R, _e = R = 0, He = null; pe !== null && _e < L.length; _e++) {
        pe.index > _e ? (He = pe, pe = null) : He = pe.sibling;
        var We = P(
          U,
          pe,
          L[_e],
          $
        );
        if (We === null) {
          pe === null && (pe = He);
          break;
        }
        e && pe && We.alternate === null && t(U, pe), R = f(We, R, _e), Ge === null ? ve = We : Ge.sibling = We, Ge = We, pe = He;
      }
      if (_e === L.length)
        return r(U, pe), Be && ta(U, _e), ve;
      if (pe === null) {
        for (; _e < L.length; _e++)
          pe = J(U, L[_e], $), pe !== null && (R = f(
            pe,
            R,
            _e
          ), Ge === null ? ve = pe : Ge.sibling = pe, Ge = pe);
        return Be && ta(U, _e), ve;
      }
      for (pe = i(pe); _e < L.length; _e++)
        He = V(
          pe,
          U,
          _e,
          L[_e],
          $
        ), He !== null && (e && He.alternate !== null && pe.delete(
          He.key === null ? _e : He.key
        ), R = f(
          He,
          R,
          _e
        ), Ge === null ? ve = He : Ge.sibling = He, Ge = He);
      return e && pe.forEach(function(Ka) {
        return t(U, Ka);
      }), Be && ta(U, _e), ve;
    }
    function xe(U, R, L, $) {
      if (L == null) throw Error(o(151));
      for (var ve = null, Ge = null, pe = R, _e = R = 0, He = null, We = L.next(); pe !== null && !We.done; _e++, We = L.next()) {
        pe.index > _e ? (He = pe, pe = null) : He = pe.sibling;
        var Ka = P(U, pe, We.value, $);
        if (Ka === null) {
          pe === null && (pe = He);
          break;
        }
        e && pe && Ka.alternate === null && t(U, pe), R = f(Ka, R, _e), Ge === null ? ve = Ka : Ge.sibling = Ka, Ge = Ka, pe = He;
      }
      if (We.done)
        return r(U, pe), Be && ta(U, _e), ve;
      if (pe === null) {
        for (; !We.done; _e++, We = L.next())
          We = J(U, We.value, $), We !== null && (R = f(We, R, _e), Ge === null ? ve = We : Ge.sibling = We, Ge = We);
        return Be && ta(U, _e), ve;
      }
      for (pe = i(pe); !We.done; _e++, We = L.next())
        We = V(pe, U, _e, We.value, $), We !== null && (e && We.alternate !== null && pe.delete(We.key === null ? _e : We.key), R = f(We, R, _e), Ge === null ? ve = We : Ge.sibling = We, Ge = We);
      return e && pe.forEach(function(F1) {
        return t(U, F1);
      }), Be && ta(U, _e), ve;
    }
    function tt(U, R, L, $) {
      if (typeof L == "object" && L !== null && L.type === O && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case T:
            e: {
              for (var ve = L.key; R !== null; ) {
                if (R.key === ve) {
                  if (ve = L.type, ve === O) {
                    if (R.tag === 7) {
                      r(
                        U,
                        R.sibling
                      ), $ = c(
                        R,
                        L.props.children
                      ), $.return = U, U = $;
                      break e;
                    }
                  } else if (R.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === B && Er(ve) === R.type) {
                    r(
                      U,
                      R.sibling
                    ), $ = c(R, L.props), vl($, L), $.return = U, U = $;
                    break e;
                  }
                  r(U, R);
                  break;
                } else t(U, R);
                R = R.sibling;
              }
              L.type === O ? ($ = br(
                L.props.children,
                U.mode,
                $,
                L.key
              ), $.return = U, U = $) : ($ = Ti(
                L.type,
                L.key,
                L.props,
                null,
                U.mode,
                $
              ), vl($, L), $.return = U, U = $);
            }
            return y(U);
          case E:
            e: {
              for (ve = L.key; R !== null; ) {
                if (R.key === ve)
                  if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                    r(
                      U,
                      R.sibling
                    ), $ = c(R, L.children || []), $.return = U, U = $;
                    break e;
                  } else {
                    r(U, R);
                    break;
                  }
                else t(U, R);
                R = R.sibling;
              }
              $ = $c(L, U.mode, $), $.return = U, U = $;
            }
            return y(U);
          case B:
            return L = Er(L), tt(
              U,
              R,
              L,
              $
            );
        }
        if (ie(L))
          return me(
            U,
            R,
            L,
            $
          );
        if (ne(L)) {
          if (ve = ne(L), typeof ve != "function") throw Error(o(150));
          return L = ve.call(L), xe(
            U,
            R,
            L,
            $
          );
        }
        if (typeof L.then == "function")
          return tt(
            U,
            R,
            ki(L),
            $
          );
        if (L.$$typeof === M)
          return tt(
            U,
            R,
            Di(U, L),
            $
          );
        ji(U, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, R !== null && R.tag === 6 ? (r(U, R.sibling), $ = c(R, L), $.return = U, U = $) : (r(U, R), $ = Ic(L, U.mode, $), $.return = U, U = $), y(U)) : r(U, R);
    }
    return function(U, R, L, $) {
      try {
        yl = 0;
        var ve = tt(
          U,
          R,
          L,
          $
        );
        return yo = null, ve;
      } catch (pe) {
        if (pe === go || pe === Ni) throw pe;
        var Ge = tn(29, pe, null, U.mode);
        return Ge.lanes = $, Ge.return = U, Ge;
      }
    };
  }
  var Or = Th(!0), Oh = Th(!1), za = !1;
  function cu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function uu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ha(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ya(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Fe & 2) !== 0) {
      var c = i.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), i.pending = t, t = Ei(e), ch(e, null, r), t;
    }
    return Ci(e, i, t, r), Ei(e);
  }
  function bl(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, ym(e, r);
    }
  }
  function fu(e, t) {
    var r = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, r === i)) {
      var c = null, f = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var y = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          f === null ? c = f = y : f = f.next = y, r = r.next;
        } while (r !== null);
        f === null ? c = f = t : f = f.next = t;
      } else c = f = t;
      r = {
        baseState: i.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  var du = !1;
  function xl() {
    if (du) {
      var e = po;
      if (e !== null) throw e;
    }
  }
  function wl(e, t, r, i) {
    du = !1;
    var c = e.updateQueue;
    za = !1;
    var f = c.firstBaseUpdate, y = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var j = S, q = j.next;
      j.next = null, y === null ? f = q : y.next = q, y = j;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, S = Q.lastBaseUpdate, S !== y && (S === null ? Q.firstBaseUpdate = q : S.next = q, Q.lastBaseUpdate = j));
    }
    if (f !== null) {
      var J = c.baseState;
      y = 0, Q = q = j = null, S = f;
      do {
        var P = S.lane & -536870913, V = P !== S.lane;
        if (V ? (ze & P) === P : (i & P) === P) {
          P !== 0 && P === ho && (du = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var me = e, xe = S;
            P = t;
            var tt = r;
            switch (xe.tag) {
              case 1:
                if (me = xe.payload, typeof me == "function") {
                  J = me.call(tt, J, P);
                  break e;
                }
                J = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = xe.payload, P = typeof me == "function" ? me.call(tt, J, P) : me, P == null) break e;
                J = v({}, J, P);
                break e;
              case 2:
                za = !0;
            }
          }
          P = S.callback, P !== null && (e.flags |= 64, V && (e.flags |= 8192), V = c.callbacks, V === null ? c.callbacks = [P] : V.push(P));
        } else
          V = {
            lane: P,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, Q === null ? (q = Q = V, j = J) : Q = Q.next = V, y |= P;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          V = S, S = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
        }
      } while (!0);
      Q === null && (j = J), c.baseState = j, c.firstBaseUpdate = q, c.lastBaseUpdate = Q, f === null && (c.shared.lanes = 0), Pa |= y, e.lanes = y, e.memoizedState = J;
    }
  }
  function Mh(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Dh(e, t) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        Mh(r[e], t);
  }
  var vo = A(null), Ri = A(0);
  function _h(e, t) {
    e = da, ae(Ri, e), ae(vo, t), da = e | t.baseLanes;
  }
  function mu() {
    ae(Ri, da), ae(vo, vo.current);
  }
  function hu() {
    da = Ri.current, W(vo), W(Ri);
  }
  var nn = A(null), vn = null;
  function Ua(e) {
    var t = e.alternate;
    ae(ht, ht.current & 1), ae(nn, e), vn === null && (t === null || vo.current !== null || t.memoizedState !== null) && (vn = e);
  }
  function pu(e) {
    ae(ht, ht.current), ae(nn, e), vn === null && (vn = e);
  }
  function Nh(e) {
    e.tag === 22 ? (ae(ht, ht.current), ae(nn, e), vn === null && (vn = e)) : Ba();
  }
  function Ba() {
    ae(ht, ht.current), ae(nn, nn.current);
  }
  function an(e) {
    W(nn), vn === e && (vn = null), W(ht);
  }
  var ht = A(0);
  function zi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || Sf(r) || Cf(r)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ra = 0, De = null, Je = null, wt = null, Hi = !1, bo = !1, Mr = !1, Yi = 0, Sl = 0, xo = null, Hw = 0;
  function ut() {
    throw Error(o(321));
  }
  function gu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!en(e[r], t[r])) return !1;
    return !0;
  }
  function yu(e, t, r, i, c, f) {
    return ra = f, De = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? mp : ku, Mr = !1, f = r(i, c), Mr = !1, bo && (f = kh(
      t,
      r,
      i,
      c
    )), Ah(e), f;
  }
  function Ah(e) {
    H.H = Tl;
    var t = Je !== null && Je.next !== null;
    if (ra = 0, wt = Je = De = null, Hi = !1, Sl = 0, xo = null, t) throw Error(o(300));
    e === null || St || (e = e.dependencies, e !== null && Mi(e) && (St = !0));
  }
  function kh(e, t, r, i) {
    De = e;
    var c = 0;
    do {
      if (bo && (xo = null), Sl = 0, bo = !1, 25 <= c) throw Error(o(301));
      if (c += 1, wt = Je = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      H.H = hp, f = t(r, i);
    } while (bo);
    return f;
  }
  function Yw() {
    var e = H.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Cl(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (De.flags |= 1024), t;
  }
  function vu() {
    var e = Yi !== 0;
    return Yi = 0, e;
  }
  function bu(e, t, r) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r;
  }
  function xu(e) {
    if (Hi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Hi = !1;
    }
    ra = 0, wt = Je = De = null, bo = !1, Sl = Yi = 0, xo = null;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return wt === null ? De.memoizedState = wt = e : wt = wt.next = e, wt;
  }
  function pt() {
    if (Je === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = wt === null ? De.memoizedState : wt.next;
    if (t !== null)
      wt = t, Je = e;
    else {
      if (e === null)
        throw De.alternate === null ? Error(o(467)) : Error(o(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, wt === null ? De.memoizedState = wt = e : wt = wt.next = e;
    }
    return wt;
  }
  function Ui() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cl(e) {
    var t = Sl;
    return Sl += 1, xo === null && (xo = []), e = Sh(xo, e, t), t = De, (wt === null ? t.memoizedState : wt.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? mp : ku), e;
  }
  function Bi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Cl(e);
      if (e.$$typeof === M) return Rt(e);
    }
    throw Error(o(438, String(e)));
  }
  function wu(e) {
    var t = null, r = De.updateQueue;
    if (r !== null && (t = r.memoCache), t == null) {
      var i = De.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), r === null && (r = Ui(), De.updateQueue = r), r.memoCache = t, r = t.data[t.index], r === void 0)
      for (r = t.data[t.index] = Array(e), i = 0; i < e; i++)
        r[i] = te;
    return t.index++, r;
  }
  function oa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Li(e) {
    var t = pt();
    return Su(t, Je, e);
  }
  function Su(e, t, r) {
    var i = e.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = r;
    var c = e.baseQueue, f = i.pending;
    if (f !== null) {
      if (c !== null) {
        var y = c.next;
        c.next = f.next, f.next = y;
      }
      t.baseQueue = c = f, i.pending = null;
    }
    if (f = e.baseState, c === null) e.memoizedState = f;
    else {
      t = c.next;
      var S = y = null, j = null, q = t, Q = !1;
      do {
        var J = q.lane & -536870913;
        if (J !== q.lane ? (ze & J) === J : (ra & J) === J) {
          var P = q.revertLane;
          if (P === 0)
            j !== null && (j = j.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), J === ho && (Q = !0);
          else if ((ra & P) === P) {
            q = q.next, P === ho && (Q = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, j === null ? (S = j = J, y = f) : j = j.next = J, De.lanes |= P, Pa |= P;
          J = q.action, Mr && r(f, J), f = q.hasEagerState ? q.eagerState : r(f, J);
        } else
          P = {
            lane: J,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, j === null ? (S = j = P, y = f) : j = j.next = P, De.lanes |= J, Pa |= J;
        q = q.next;
      } while (q !== null && q !== t);
      if (j === null ? y = f : j.next = S, !en(f, e.memoizedState) && (St = !0, Q && (r = po, r !== null)))
        throw r;
      e.memoizedState = f, e.baseState = y, e.baseQueue = j, i.lastRenderedState = f;
    }
    return c === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function Cu(e) {
    var t = pt(), r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch, c = r.pending, f = t.memoizedState;
    if (c !== null) {
      r.pending = null;
      var y = c = c.next;
      do
        f = e(f, y.action), y = y.next;
      while (y !== c);
      en(f, t.memoizedState) || (St = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), r.lastRenderedState = f;
    }
    return [f, i];
  }
  function jh(e, t, r) {
    var i = De, c = pt(), f = Be;
    if (f) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = t();
    var y = !en(
      (Je || c).memoizedState,
      r
    );
    if (y && (c.memoizedState = r, St = !0), c = c.queue, Ou(Hh.bind(null, i, c, e), [
      e
    ]), c.getSnapshot !== t || y || wt !== null && wt.memoizedState.tag & 1) {
      if (i.flags |= 2048, wo(
        9,
        { destroy: void 0 },
        zh.bind(
          null,
          i,
          c,
          r,
          t
        ),
        null
      ), nt === null) throw Error(o(349));
      f || (ra & 127) !== 0 || Rh(i, t, r);
    }
    return r;
  }
  function Rh(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = De.updateQueue, t === null ? (t = Ui(), De.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function zh(e, t, r, i) {
    t.value = r, t.getSnapshot = i, Yh(t) && Uh(e);
  }
  function Hh(e, t, r) {
    return r(function() {
      Yh(t) && Uh(e);
    });
  }
  function Yh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !en(e, r);
    } catch {
      return !0;
    }
  }
  function Uh(e) {
    var t = vr(e, 2);
    t !== null && $t(t, e, 2);
  }
  function Eu(e) {
    var t = Wt();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), Mr) {
        An(!0);
        try {
          r();
        } finally {
          An(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oa,
      lastRenderedState: e
    }, t;
  }
  function Bh(e, t, r, i) {
    return e.baseState = r, Su(
      e,
      Je,
      typeof i == "function" ? i : oa
    );
  }
  function Uw(e, t, r, i, c) {
    if (Gi(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          f.listeners.push(y);
        }
      };
      H.T !== null ? r(!0) : f.isTransition = !1, i(f), r = t.pending, r === null ? (f.next = t.pending = f, Lh(t, f)) : (f.next = r.next, t.pending = r.next = f);
    }
  }
  function Lh(e, t) {
    var r = t.action, i = t.payload, c = e.state;
    if (t.isTransition) {
      var f = H.T, y = {};
      H.T = y;
      try {
        var S = r(c, i), j = H.S;
        j !== null && j(y, S), qh(e, t, S);
      } catch (q) {
        Tu(e, t, q);
      } finally {
        f !== null && y.types !== null && (f.types = y.types), H.T = f;
      }
    } else
      try {
        f = r(c, i), qh(e, t, f);
      } catch (q) {
        Tu(e, t, q);
      }
  }
  function qh(e, t, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(i) {
        Ph(e, t, i);
      },
      function(i) {
        return Tu(e, t, i);
      }
    ) : Ph(e, t, r);
  }
  function Ph(e, t, r) {
    t.status = "fulfilled", t.value = r, Gh(t), e.state = r, t = e.pending, t !== null && (r = t.next, r === t ? e.pending = null : (r = r.next, t.next = r, Lh(e, r)));
  }
  function Tu(e, t, r) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = r, Gh(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function Gh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Wh(e, t) {
    return t;
  }
  function Vh(e, t) {
    if (Be) {
      var r = nt.formState;
      if (r !== null) {
        e: {
          var i = De;
          if (Be) {
            if (ot) {
              t: {
                for (var c = ot, f = yn; c.nodeType !== 8; ) {
                  if (!f) {
                    c = null;
                    break t;
                  }
                  if (c = bn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                f = c.data, c = f === "F!" || f === "F" ? c : null;
              }
              if (c) {
                ot = bn(
                  c.nextSibling
                ), i = c.data === "F!";
                break e;
              }
            }
            ja(i);
          }
          i = !1;
        }
        i && (t = r[0]);
      }
    }
    return r = Wt(), r.memoizedState = r.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wh,
      lastRenderedState: t
    }, r.queue = i, r = up.bind(
      null,
      De,
      i
    ), i.dispatch = r, i = Eu(!1), f = Au.bind(
      null,
      De,
      !1,
      i.queue
    ), i = Wt(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = c, r = Uw.bind(
      null,
      De,
      c,
      f,
      r
    ), c.dispatch = r, i.memoizedState = e, [t, r, !1];
  }
  function Fh(e) {
    var t = pt();
    return Xh(t, Je, e);
  }
  function Xh(e, t, r) {
    if (t = Su(
      e,
      t,
      Wh
    )[0], e = Li(oa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Cl(t);
      } catch (y) {
        throw y === go ? Ni : y;
      }
    else i = t;
    t = pt();
    var c = t.queue, f = c.dispatch;
    return r !== t.memoizedState && (De.flags |= 2048, wo(
      9,
      { destroy: void 0 },
      Bw.bind(null, c, r),
      null
    )), [i, f, e];
  }
  function Bw(e, t) {
    e.action = t;
  }
  function Qh(e) {
    var t = pt(), r = Je;
    if (r !== null)
      return Xh(t, r, e);
    pt(), t = t.memoizedState, r = pt();
    var i = r.queue.dispatch;
    return r.memoizedState = e, [t, i, !1];
  }
  function wo(e, t, r, i) {
    return e = { tag: e, create: r, deps: i, inst: t, next: null }, t = De.updateQueue, t === null && (t = Ui(), De.updateQueue = t), r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e), e;
  }
  function Zh() {
    return pt().memoizedState;
  }
  function qi(e, t, r, i) {
    var c = Wt();
    De.flags |= e, c.memoizedState = wo(
      1 | t,
      { destroy: void 0 },
      r,
      i === void 0 ? null : i
    );
  }
  function Pi(e, t, r, i) {
    var c = pt();
    i = i === void 0 ? null : i;
    var f = c.memoizedState.inst;
    Je !== null && i !== null && gu(i, Je.memoizedState.deps) ? c.memoizedState = wo(t, f, r, i) : (De.flags |= e, c.memoizedState = wo(
      1 | t,
      f,
      r,
      i
    ));
  }
  function Ih(e, t) {
    qi(8390656, 8, e, t);
  }
  function Ou(e, t) {
    Pi(2048, 8, e, t);
  }
  function Lw(e) {
    De.flags |= 4;
    var t = De.updateQueue;
    if (t === null)
      t = Ui(), De.updateQueue = t, t.events = [e];
    else {
      var r = t.events;
      r === null ? t.events = [e] : r.push(e);
    }
  }
  function $h(e) {
    var t = pt().memoizedState;
    return Lw({ ref: t, nextImpl: e }), function() {
      if ((Fe & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Kh(e, t) {
    return Pi(4, 2, e, t);
  }
  function Jh(e, t) {
    return Pi(4, 4, e, t);
  }
  function ep(e, t) {
    if (typeof t == "function") {
      e = e();
      var r = t(e);
      return function() {
        typeof r == "function" ? r() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function tp(e, t, r) {
    r = r != null ? r.concat([e]) : null, Pi(4, 4, ep.bind(null, t, e), r);
  }
  function Mu() {
  }
  function np(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return t !== null && gu(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function ap(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    if (t !== null && gu(t, i[1]))
      return i[0];
    if (i = e(), Mr) {
      An(!0);
      try {
        e();
      } finally {
        An(!1);
      }
    }
    return r.memoizedState = [i, t], i;
  }
  function Du(e, t, r) {
    return r === void 0 || (ra & 1073741824) !== 0 && (ze & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = r, e = rg(), De.lanes |= e, Pa |= e, r);
  }
  function rp(e, t, r, i) {
    return en(r, t) ? r : vo.current !== null ? (e = Du(e, r, i), en(e, t) || (St = !0), e) : (ra & 42) === 0 || (ra & 1073741824) !== 0 && (ze & 261930) === 0 ? (St = !0, e.memoizedState = r) : (e = rg(), De.lanes |= e, Pa |= e, t);
  }
  function op(e, t, r, i, c) {
    var f = F.p;
    F.p = f !== 0 && 8 > f ? f : 8;
    var y = H.T, S = {};
    H.T = S, Au(e, !1, t, r);
    try {
      var j = c(), q = H.S;
      if (q !== null && q(S, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var Q = zw(
          j,
          i
        );
        El(
          e,
          t,
          Q,
          ln(e)
        );
      } else
        El(
          e,
          t,
          i,
          ln(e)
        );
    } catch (J) {
      El(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: J },
        ln()
      );
    } finally {
      F.p = f, y !== null && S.types !== null && (y.types = S.types), H.T = y;
    }
  }
  function qw() {
  }
  function _u(e, t, r, i) {
    if (e.tag !== 5) throw Error(o(476));
    var c = lp(e).queue;
    op(
      e,
      c,
      t,
      K,
      r === null ? qw : function() {
        return ip(e), r(i);
      }
    );
  }
  function lp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oa,
        lastRenderedState: K
      },
      next: null
    };
    var r = {};
    return t.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oa,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ip(e) {
    var t = lp(e);
    t.next === null && (t = e.alternate.memoizedState), El(
      e,
      t.next.queue,
      {},
      ln()
    );
  }
  function Nu() {
    return Rt(ql);
  }
  function sp() {
    return pt().memoizedState;
  }
  function cp() {
    return pt().memoizedState;
  }
  function Pw(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = ln();
          e = Ha(r);
          var i = Ya(t, e, r);
          i !== null && ($t(i, t, r), bl(i, t, r)), t = { cache: ou() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Gw(e, t, r) {
    var i = ln();
    r = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Gi(e) ? fp(t, r) : (r = Qc(e, t, r, i), r !== null && ($t(r, e, i), dp(r, t, i)));
  }
  function up(e, t, r) {
    var i = ln();
    El(e, t, r, i);
  }
  function El(e, t, r, i) {
    var c = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Gi(e)) fp(t, c);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var y = t.lastRenderedState, S = f(y, r);
          if (c.hasEagerState = !0, c.eagerState = S, en(S, y))
            return Ci(e, t, c, 0), nt === null && Si(), !1;
        } catch {
        }
      if (r = Qc(e, t, c, i), r !== null)
        return $t(r, e, i), dp(r, t, i), !0;
    }
    return !1;
  }
  function Au(e, t, r, i) {
    if (i = {
      lane: 2,
      revertLane: uf(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Gi(e)) {
      if (t) throw Error(o(479));
    } else
      t = Qc(
        e,
        r,
        i,
        2
      ), t !== null && $t(t, e, 2);
  }
  function Gi(e) {
    var t = e.alternate;
    return e === De || t !== null && t === De;
  }
  function fp(e, t) {
    bo = Hi = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function dp(e, t, r) {
    if ((r & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, ym(e, r);
    }
  }
  var Tl = {
    readContext: Rt,
    use: Bi,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useLayoutEffect: ut,
    useInsertionEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useSyncExternalStore: ut,
    useId: ut,
    useHostTransitionStatus: ut,
    useFormState: ut,
    useActionState: ut,
    useOptimistic: ut,
    useMemoCache: ut,
    useCacheRefresh: ut
  };
  Tl.useEffectEvent = ut;
  var mp = {
    readContext: Rt,
    use: Bi,
    useCallback: function(e, t) {
      return Wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Rt,
    useEffect: Ih,
    useImperativeHandle: function(e, t, r) {
      r = r != null ? r.concat([e]) : null, qi(
        4194308,
        4,
        ep.bind(null, t, e),
        r
      );
    },
    useLayoutEffect: function(e, t) {
      return qi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      qi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var r = Wt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Mr) {
        An(!0);
        try {
          e();
        } finally {
          An(!1);
        }
      }
      return r.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, r) {
      var i = Wt();
      if (r !== void 0) {
        var c = r(t);
        if (Mr) {
          An(!0);
          try {
            r(t);
          } finally {
            An(!1);
          }
        }
      } else c = t;
      return i.memoizedState = i.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, i.queue = e, e = e.dispatch = Gw.bind(
        null,
        De,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = Wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Eu(e);
      var t = e.queue, r = up.bind(null, De, t);
      return t.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Mu,
    useDeferredValue: function(e, t) {
      var r = Wt();
      return Du(r, e, t);
    },
    useTransition: function() {
      var e = Eu(!1);
      return e = op.bind(
        null,
        De,
        e.queue,
        !0,
        !1
      ), Wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, r) {
      var i = De, c = Wt();
      if (Be) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = t(), nt === null)
          throw Error(o(349));
        (ze & 127) !== 0 || Rh(i, t, r);
      }
      c.memoizedState = r;
      var f = { value: r, getSnapshot: t };
      return c.queue = f, Ih(Hh.bind(null, i, f, e), [
        e
      ]), i.flags |= 2048, wo(
        9,
        { destroy: void 0 },
        zh.bind(
          null,
          i,
          f,
          r,
          t
        ),
        null
      ), r;
    },
    useId: function() {
      var e = Wt(), t = nt.identifierPrefix;
      if (Be) {
        var r = jn, i = kn;
        r = (i & ~(1 << 32 - Gt(i) - 1)).toString(32) + r, t = "_" + t + "R_" + r, r = Yi++, 0 < r && (t += "H" + r.toString(32)), t += "_";
      } else
        r = Hw++, t = "_" + t + "r_" + r.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Nu,
    useFormState: Vh,
    useActionState: Vh,
    useOptimistic: function(e) {
      var t = Wt();
      t.memoizedState = t.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = r, t = Au.bind(
        null,
        De,
        !0,
        r
      ), r.dispatch = t, [e, t];
    },
    useMemoCache: wu,
    useCacheRefresh: function() {
      return Wt().memoizedState = Pw.bind(
        null,
        De
      );
    },
    useEffectEvent: function(e) {
      var t = Wt(), r = { impl: e };
      return t.memoizedState = r, function() {
        if ((Fe & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, ku = {
    readContext: Rt,
    use: Bi,
    useCallback: np,
    useContext: Rt,
    useEffect: Ou,
    useImperativeHandle: tp,
    useInsertionEffect: Kh,
    useLayoutEffect: Jh,
    useMemo: ap,
    useReducer: Li,
    useRef: Zh,
    useState: function() {
      return Li(oa);
    },
    useDebugValue: Mu,
    useDeferredValue: function(e, t) {
      var r = pt();
      return rp(
        r,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Li(oa)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : Cl(e),
        t
      ];
    },
    useSyncExternalStore: jh,
    useId: sp,
    useHostTransitionStatus: Nu,
    useFormState: Fh,
    useActionState: Fh,
    useOptimistic: function(e, t) {
      var r = pt();
      return Bh(r, Je, e, t);
    },
    useMemoCache: wu,
    useCacheRefresh: cp
  };
  ku.useEffectEvent = $h;
  var hp = {
    readContext: Rt,
    use: Bi,
    useCallback: np,
    useContext: Rt,
    useEffect: Ou,
    useImperativeHandle: tp,
    useInsertionEffect: Kh,
    useLayoutEffect: Jh,
    useMemo: ap,
    useReducer: Cu,
    useRef: Zh,
    useState: function() {
      return Cu(oa);
    },
    useDebugValue: Mu,
    useDeferredValue: function(e, t) {
      var r = pt();
      return Je === null ? Du(r, e, t) : rp(
        r,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Cu(oa)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : Cl(e),
        t
      ];
    },
    useSyncExternalStore: jh,
    useId: sp,
    useHostTransitionStatus: Nu,
    useFormState: Qh,
    useActionState: Qh,
    useOptimistic: function(e, t) {
      var r = pt();
      return Je !== null ? Bh(r, Je, e, t) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: wu,
    useCacheRefresh: cp
  };
  hp.useEffectEvent = $h;
  function ju(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : v({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Ru = {
    enqueueSetState: function(e, t, r) {
      e = e._reactInternals;
      var i = ln(), c = Ha(i);
      c.payload = t, r != null && (c.callback = r), t = Ya(e, c, i), t !== null && ($t(t, e, i), bl(t, e, i));
    },
    enqueueReplaceState: function(e, t, r) {
      e = e._reactInternals;
      var i = ln(), c = Ha(i);
      c.tag = 1, c.payload = t, r != null && (c.callback = r), t = Ya(e, c, i), t !== null && ($t(t, e, i), bl(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var r = ln(), i = Ha(r);
      i.tag = 2, t != null && (i.callback = t), t = Ya(e, i, r), t !== null && ($t(t, e, r), bl(t, e, r));
    }
  };
  function pp(e, t, r, i, c, f, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, f, y) : t.prototype && t.prototype.isPureReactComponent ? !fl(r, i) || !fl(c, f) : !0;
  }
  function gp(e, t, r, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && Ru.enqueueReplaceState(t, t.state, null);
  }
  function Dr(e, t) {
    var r = t;
    if ("ref" in t) {
      r = {};
      for (var i in t)
        i !== "ref" && (r[i] = t[i]);
    }
    if (e = e.defaultProps) {
      r === t && (r = v({}, r));
      for (var c in e)
        r[c] === void 0 && (r[c] = e[c]);
    }
    return r;
  }
  function yp(e) {
    wi(e);
  }
  function vp(e) {
    console.error(e);
  }
  function bp(e) {
    wi(e);
  }
  function Wi(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function xp(e, t, r) {
    try {
      var i = e.onCaughtError;
      i(r.value, {
        componentStack: r.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function zu(e, t, r) {
    return r = Ha(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      Wi(e, t);
    }, r;
  }
  function wp(e) {
    return e = Ha(e), e.tag = 3, e;
  }
  function Sp(e, t, r, i) {
    var c = r.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var f = i.value;
      e.payload = function() {
        return c(f);
      }, e.callback = function() {
        xp(t, r, i);
      };
    }
    var y = r.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      xp(t, r, i), typeof c != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var S = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function Ww(e, t, r, i, c) {
    if (r.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = r.alternate, t !== null && mo(
        t,
        r,
        c,
        !0
      ), r = nn.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return vn === null ? ns() : r.alternate === null && ft === 0 && (ft = 3), r.flags &= -257, r.flags |= 65536, r.lanes = c, i === Ai ? r.flags |= 16384 : (t = r.updateQueue, t === null ? r.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), lf(e, i, c)), !1;
          case 22:
            return r.flags |= 65536, i === Ai ? r.flags |= 16384 : (t = r.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, r.updateQueue = t) : (r = t.retryQueue, r === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : r.add(i)), lf(e, i, c)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return lf(e, i, c), ns(), !1;
    }
    if (Be)
      return t = nn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, i !== eu && (e = Error(o(422), { cause: i }), hl(hn(e, r)))) : (i !== eu && (t = Error(o(423), {
        cause: i
      }), hl(
        hn(t, r)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, i = hn(i, r), c = zu(
        e.stateNode,
        i,
        c
      ), fu(e, c), ft !== 4 && (ft = 2)), !1;
    var f = Error(o(520), { cause: i });
    if (f = hn(f, r), jl === null ? jl = [f] : jl.push(f), ft !== 4 && (ft = 2), t === null) return !0;
    i = hn(i, r), r = t;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = c & -c, r.lanes |= e, e = zu(r.stateNode, i, e), fu(r, e), !1;
        case 1:
          if (t = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Ga === null || !Ga.has(f))))
            return r.flags |= 65536, c &= -c, r.lanes |= c, c = wp(c), Sp(
              c,
              e,
              r,
              i
            ), fu(r, c), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Hu = Error(o(461)), St = !1;
  function zt(e, t, r, i) {
    t.child = e === null ? Oh(t, null, r, i) : Or(
      t,
      e.child,
      r,
      i
    );
  }
  function Cp(e, t, r, i, c) {
    r = r.render;
    var f = t.ref;
    if ("ref" in i) {
      var y = {};
      for (var S in i)
        S !== "ref" && (y[S] = i[S]);
    } else y = i;
    return Sr(t), i = yu(
      e,
      t,
      r,
      y,
      f,
      c
    ), S = vu(), e !== null && !St ? (bu(e, t, c), la(e, t, c)) : (Be && S && Kc(t), t.flags |= 1, zt(e, t, i, c), t.child);
  }
  function Ep(e, t, r, i, c) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" && !Zc(f) && f.defaultProps === void 0 && r.compare === null ? (t.tag = 15, t.type = f, Tp(
        e,
        t,
        f,
        i,
        c
      )) : (e = Ti(
        r.type,
        null,
        i,
        t,
        t.mode,
        c
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !Wu(e, c)) {
      var y = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : fl, r(y, i) && e.ref === t.ref)
        return la(e, t, c);
    }
    return t.flags |= 1, e = ea(f, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Tp(e, t, r, i, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (fl(f, i) && e.ref === t.ref)
        if (St = !1, t.pendingProps = i = f, Wu(e, c))
          (e.flags & 131072) !== 0 && (St = !0);
        else
          return t.lanes = e.lanes, la(e, t, c);
    }
    return Yu(
      e,
      t,
      r,
      i,
      c
    );
  }
  function Op(e, t, r, i) {
    var c = i.children, f = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | r : r, e !== null) {
          for (i = t.child = e.child, c = 0; i !== null; )
            c = c | i.lanes | i.childLanes, i = i.sibling;
          i = c & ~f;
        } else i = 0, t.child = null;
        return Mp(
          e,
          t,
          f,
          r,
          i
        );
      }
      if ((r & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && _i(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? _h(t, f) : mu(), Nh(t);
      else
        return i = t.lanes = 536870912, Mp(
          e,
          t,
          f !== null ? f.baseLanes | r : r,
          r,
          i
        );
    } else
      f !== null ? (_i(t, f.cachePool), _h(t, f), Ba(), t.memoizedState = null) : (e !== null && _i(t, null), mu(), Ba());
    return zt(e, t, c, r), t.child;
  }
  function Ol(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Mp(e, t, r, i, c) {
    var f = iu();
    return f = f === null ? null : { parent: xt._currentValue, pool: f }, t.memoizedState = {
      baseLanes: r,
      cachePool: f
    }, e !== null && _i(t, null), mu(), Nh(t), e !== null && mo(e, t, i, !0), t.childLanes = c, null;
  }
  function Vi(e, t) {
    return t = Xi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Dp(e, t, r) {
    return Or(t, e.child, null, r), e = Vi(t, t.pendingProps), e.flags |= 2, an(t), t.memoizedState = null, e;
  }
  function Vw(e, t, r) {
    var i = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Be) {
        if (i.mode === "hidden")
          return e = Vi(t, i), t.lanes = 536870912, Ol(null, e);
        if (pu(t), (e = ot) ? (e = Lg(
          e,
          yn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Aa !== null ? { id: kn, overflow: jn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = fh(e), r.return = t, t.child = r, jt = t, ot = null)) : e = null, e === null) throw ja(t);
        return t.lanes = 536870912, null;
      }
      return Vi(t, i);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var y = f.dehydrated;
      if (pu(t), c)
        if (t.flags & 256)
          t.flags &= -257, t = Dp(
            e,
            t,
            r
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (St || mo(e, t, r, !1), c = (r & e.childLanes) !== 0, St || c) {
        if (i = nt, i !== null && (y = vm(i, r), y !== 0 && y !== f.retryLane))
          throw f.retryLane = y, vr(e, y), $t(i, e, y), Hu;
        ns(), t = Dp(
          e,
          t,
          r
        );
      } else
        e = f.treeContext, ot = bn(y.nextSibling), jt = t, Be = !0, ka = null, yn = !1, e !== null && hh(t, e), t = Vi(t, i), t.flags |= 4096;
      return t;
    }
    return e = ea(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Fi(e, t) {
    var r = t.ref;
    if (r === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (e === null || e.ref !== r) && (t.flags |= 4194816);
    }
  }
  function Yu(e, t, r, i, c) {
    return Sr(t), r = yu(
      e,
      t,
      r,
      i,
      void 0,
      c
    ), i = vu(), e !== null && !St ? (bu(e, t, c), la(e, t, c)) : (Be && i && Kc(t), t.flags |= 1, zt(e, t, r, c), t.child);
  }
  function _p(e, t, r, i, c, f) {
    return Sr(t), t.updateQueue = null, r = kh(
      t,
      i,
      r,
      c
    ), Ah(e), i = vu(), e !== null && !St ? (bu(e, t, f), la(e, t, f)) : (Be && i && Kc(t), t.flags |= 1, zt(e, t, r, f), t.child);
  }
  function Np(e, t, r, i, c) {
    if (Sr(t), t.stateNode === null) {
      var f = so, y = r.contextType;
      typeof y == "object" && y !== null && (f = Rt(y)), f = new r(i, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Ru, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, cu(t), y = r.contextType, f.context = typeof y == "object" && y !== null ? Rt(y) : so, f.state = t.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (ju(
        t,
        r,
        y,
        i
      ), f.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (y = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), y !== f.state && Ru.enqueueReplaceState(f, f.state, null), wl(t, i, f, c), xl(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      f = t.stateNode;
      var S = t.memoizedProps, j = Dr(r, S);
      f.props = j;
      var q = f.context, Q = r.contextType;
      y = so, typeof Q == "object" && Q !== null && (y = Rt(Q));
      var J = r.getDerivedStateFromProps;
      Q = typeof J == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, Q || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || q !== y) && gp(
        t,
        f,
        i,
        y
      ), za = !1;
      var P = t.memoizedState;
      f.state = P, wl(t, i, f, c), xl(), q = t.memoizedState, S || P !== q || za ? (typeof J == "function" && (ju(
        t,
        r,
        J,
        i
      ), q = t.memoizedState), (j = za || pp(
        t,
        r,
        j,
        i,
        P,
        q,
        y
      )) ? (Q || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = q), f.props = i, f.state = q, f.context = y, i = j) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, uu(e, t), y = t.memoizedProps, Q = Dr(r, y), f.props = Q, J = t.pendingProps, P = f.context, q = r.contextType, j = so, typeof q == "object" && q !== null && (j = Rt(q)), S = r.getDerivedStateFromProps, (q = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (y !== J || P !== j) && gp(
        t,
        f,
        i,
        j
      ), za = !1, P = t.memoizedState, f.state = P, wl(t, i, f, c), xl();
      var V = t.memoizedState;
      y !== J || P !== V || za || e !== null && e.dependencies !== null && Mi(e.dependencies) ? (typeof S == "function" && (ju(
        t,
        r,
        S,
        i
      ), V = t.memoizedState), (Q = za || pp(
        t,
        r,
        Q,
        i,
        P,
        V,
        j
      ) || e !== null && e.dependencies !== null && Mi(e.dependencies)) ? (q || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, j), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        i,
        V,
        j
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = j, i = Q) : (typeof f.componentDidUpdate != "function" || y === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return f = i, Fi(e, t), i = (t.flags & 128) !== 0, f || i ? (f = t.stateNode, r = i && typeof r.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && i ? (t.child = Or(
      t,
      e.child,
      null,
      c
    ), t.child = Or(
      t,
      null,
      r,
      c
    )) : zt(e, t, r, c), t.memoizedState = f.state, e = t.child) : e = la(
      e,
      t,
      c
    ), e;
  }
  function Ap(e, t, r, i) {
    return xr(), t.flags |= 256, zt(e, t, r, i), t.child;
  }
  var Uu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Bu(e) {
    return { baseLanes: e, cachePool: xh() };
  }
  function Lu(e, t, r) {
    return e = e !== null ? e.childLanes & ~r : 0, t && (e |= on), e;
  }
  function kp(e, t, r) {
    var i = t.pendingProps, c = !1, f = (t.flags & 128) !== 0, y;
    if ((y = f) || (y = e !== null && e.memoizedState === null ? !1 : (ht.current & 2) !== 0), y && (c = !0, t.flags &= -129), y = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Be) {
        if (c ? Ua(t) : Ba(), (e = ot) ? (e = Lg(
          e,
          yn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Aa !== null ? { id: kn, overflow: jn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = fh(e), r.return = t, t.child = r, jt = t, ot = null)) : e = null, e === null) throw ja(t);
        return Cf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = i.children;
      return i = i.fallback, c ? (Ba(), c = t.mode, S = Xi(
        { mode: "hidden", children: S },
        c
      ), i = br(
        i,
        c,
        r,
        null
      ), S.return = t, i.return = t, S.sibling = i, t.child = S, i = t.child, i.memoizedState = Bu(r), i.childLanes = Lu(
        e,
        y,
        r
      ), t.memoizedState = Uu, Ol(null, i)) : (Ua(t), qu(t, S));
    }
    var j = e.memoizedState;
    if (j !== null && (S = j.dehydrated, S !== null)) {
      if (f)
        t.flags & 256 ? (Ua(t), t.flags &= -257, t = Pu(
          e,
          t,
          r
        )) : t.memoizedState !== null ? (Ba(), t.child = e.child, t.flags |= 128, t = null) : (Ba(), S = i.fallback, c = t.mode, i = Xi(
          { mode: "visible", children: i.children },
          c
        ), S = br(
          S,
          c,
          r,
          null
        ), S.flags |= 2, i.return = t, S.return = t, i.sibling = S, t.child = i, Or(
          t,
          e.child,
          null,
          r
        ), i = t.child, i.memoizedState = Bu(r), i.childLanes = Lu(
          e,
          y,
          r
        ), t.memoizedState = Uu, t = Ol(null, i));
      else if (Ua(t), Cf(S)) {
        if (y = S.nextSibling && S.nextSibling.dataset, y) var q = y.dgst;
        y = q, i = Error(o(419)), i.stack = "", i.digest = y, hl({ value: i, source: null, stack: null }), t = Pu(
          e,
          t,
          r
        );
      } else if (St || mo(e, t, r, !1), y = (r & e.childLanes) !== 0, St || y) {
        if (y = nt, y !== null && (i = vm(y, r), i !== 0 && i !== j.retryLane))
          throw j.retryLane = i, vr(e, i), $t(y, e, i), Hu;
        Sf(S) || ns(), t = Pu(
          e,
          t,
          r
        );
      } else
        Sf(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = j.treeContext, ot = bn(
          S.nextSibling
        ), jt = t, Be = !0, ka = null, yn = !1, e !== null && hh(t, e), t = qu(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return c ? (Ba(), S = i.fallback, c = t.mode, j = e.child, q = j.sibling, i = ea(j, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = j.subtreeFlags & 65011712, q !== null ? S = ea(
      q,
      S
    ) : (S = br(
      S,
      c,
      r,
      null
    ), S.flags |= 2), S.return = t, i.return = t, i.sibling = S, t.child = i, Ol(null, i), i = t.child, S = e.child.memoizedState, S === null ? S = Bu(r) : (c = S.cachePool, c !== null ? (j = xt._currentValue, c = c.parent !== j ? { parent: j, pool: j } : c) : c = xh(), S = {
      baseLanes: S.baseLanes | r,
      cachePool: c
    }), i.memoizedState = S, i.childLanes = Lu(
      e,
      y,
      r
    ), t.memoizedState = Uu, Ol(e.child, i)) : (Ua(t), r = e.child, e = r.sibling, r = ea(r, {
      mode: "visible",
      children: i.children
    }), r.return = t, r.sibling = null, e !== null && (y = t.deletions, y === null ? (t.deletions = [e], t.flags |= 16) : y.push(e)), t.child = r, t.memoizedState = null, r);
  }
  function qu(e, t) {
    return t = Xi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Xi(e, t) {
    return e = tn(22, e, null, t), e.lanes = 0, e;
  }
  function Pu(e, t, r) {
    return Or(t, e.child, null, r), e = qu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function jp(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), au(e.return, t, r);
  }
  function Gu(e, t, r, i, c, f) {
    var y = e.memoizedState;
    y === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: r,
      tailMode: c,
      treeForkCount: f
    } : (y.isBackwards = t, y.rendering = null, y.renderingStartTime = 0, y.last = i, y.tail = r, y.tailMode = c, y.treeForkCount = f);
  }
  function Rp(e, t, r) {
    var i = t.pendingProps, c = i.revealOrder, f = i.tail;
    i = i.children;
    var y = ht.current, S = (y & 2) !== 0;
    if (S ? (y = y & 1 | 2, t.flags |= 128) : y &= 1, ae(ht, y), zt(e, t, i, r), i = Be ? ml : 0, !S && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && jp(e, r, t);
        else if (e.tag === 19)
          jp(e, r, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (c) {
      case "forwards":
        for (r = t.child, c = null; r !== null; )
          e = r.alternate, e !== null && zi(e) === null && (c = r), r = r.sibling;
        r = c, r === null ? (c = t.child, t.child = null) : (c = r.sibling, r.sibling = null), Gu(
          t,
          !1,
          c,
          r,
          f,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && zi(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = r, r = c, c = e;
        }
        Gu(
          t,
          !0,
          r,
          null,
          f,
          i
        );
        break;
      case "together":
        Gu(
          t,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function la(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), Pa |= t.lanes, (r & t.childLanes) === 0)
      if (e !== null) {
        if (mo(
          e,
          t,
          r,
          !1
        ), (r & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, r = ea(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        e = e.sibling, r = r.sibling = ea(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function Wu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mi(e)));
  }
  function Fw(e, t, r) {
    switch (t.tag) {
      case 3:
        Se(t, t.stateNode.containerInfo), Ra(t, xt, e.memoizedState.cache), xr();
        break;
      case 27:
      case 5:
        ge(t);
        break;
      case 4:
        Se(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ra(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, pu(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Ua(t), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? kp(e, t, r) : (Ua(t), e = la(
            e,
            t,
            r
          ), e !== null ? e.sibling : null);
        Ua(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (i = (r & t.childLanes) !== 0, i || (mo(
          e,
          t,
          r,
          !1
        ), i = (r & t.childLanes) !== 0), c) {
          if (i)
            return Rp(
              e,
              t,
              r
            );
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ae(ht, ht.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, Op(
          e,
          t,
          r,
          t.pendingProps
        );
      case 24:
        Ra(t, xt, e.memoizedState.cache);
    }
    return la(e, t, r);
  }
  function zp(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        St = !0;
      else {
        if (!Wu(e, r) && (t.flags & 128) === 0)
          return St = !1, Fw(
            e,
            t,
            r
          );
        St = (e.flags & 131072) !== 0;
      }
    else
      St = !1, Be && (t.flags & 1048576) !== 0 && mh(t, ml, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = Er(t.elementType), t.type = e, typeof e == "function")
            Zc(e) ? (i = Dr(e, i), t.tag = 1, t = Np(
              null,
              t,
              e,
              i,
              r
            )) : (t.tag = 0, t = Yu(
              null,
              t,
              e,
              i,
              r
            ));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === N) {
                t.tag = 11, t = Cp(
                  null,
                  t,
                  e,
                  i,
                  r
                );
                break e;
              } else if (c === Y) {
                t.tag = 14, t = Ep(
                  null,
                  t,
                  e,
                  i,
                  r
                );
                break e;
              }
            }
            throw t = ee(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Yu(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 1:
        return i = t.type, c = Dr(
          i,
          t.pendingProps
        ), Np(
          e,
          t,
          i,
          c,
          r
        );
      case 3:
        e: {
          if (Se(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          i = t.pendingProps;
          var f = t.memoizedState;
          c = f.element, uu(e, t), wl(t, i, null, r);
          var y = t.memoizedState;
          if (i = y.cache, Ra(t, xt, i), i !== f.cache && ru(
            t,
            [xt],
            r,
            !0
          ), xl(), i = y.element, f.isDehydrated)
            if (f = {
              element: i,
              isDehydrated: !1,
              cache: y.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = Ap(
                e,
                t,
                i,
                r
              );
              break e;
            } else if (i !== c) {
              c = hn(
                Error(o(424)),
                t
              ), hl(c), t = Ap(
                e,
                t,
                i,
                r
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ot = bn(e.firstChild), jt = t, Be = !0, ka = null, yn = !0, r = Oh(
                t,
                null,
                i,
                r
              ), t.child = r; r; )
                r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (xr(), i === c) {
              t = la(
                e,
                t,
                r
              );
              break e;
            }
            zt(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Fi(e, t), e === null ? (r = Fg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = r : Be || (r = t.type, e = t.pendingProps, i = cs(
          I.current
        ).createElement(r), i[kt] = t, i[Vt] = e, Ht(i, r, e), Dt(i), t.stateNode = i) : t.memoizedState = Fg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ge(t), e === null && Be && (i = t.stateNode = Gg(
          t.type,
          t.pendingProps,
          I.current
        ), jt = t, yn = !0, c = ot, Xa(t.type) ? (Ef = c, ot = bn(i.firstChild)) : ot = c), zt(
          e,
          t,
          t.pendingProps.children,
          r
        ), Fi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Be && ((c = i = ot) && (i = S1(
          i,
          t.type,
          t.pendingProps,
          yn
        ), i !== null ? (t.stateNode = i, jt = t, ot = bn(i.firstChild), yn = !1, c = !0) : c = !1), c || ja(t)), ge(t), c = t.type, f = t.pendingProps, y = e !== null ? e.memoizedProps : null, i = f.children, bf(c, f) ? i = null : y !== null && bf(c, y) && (t.flags |= 32), t.memoizedState !== null && (c = yu(
          e,
          t,
          Yw,
          null,
          null,
          r
        ), ql._currentValue = c), Fi(e, t), zt(e, t, i, r), t.child;
      case 6:
        return e === null && Be && ((e = r = ot) && (r = C1(
          r,
          t.pendingProps,
          yn
        ), r !== null ? (t.stateNode = r, jt = t, ot = null, e = !0) : e = !1), e || ja(t)), null;
      case 13:
        return kp(e, t, r);
      case 4:
        return Se(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Or(
          t,
          null,
          i,
          r
        ) : zt(e, t, i, r), t.child;
      case 11:
        return Cp(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 7:
        return zt(
          e,
          t,
          t.pendingProps,
          r
        ), t.child;
      case 8:
        return zt(
          e,
          t,
          t.pendingProps.children,
          r
        ), t.child;
      case 12:
        return zt(
          e,
          t,
          t.pendingProps.children,
          r
        ), t.child;
      case 10:
        return i = t.pendingProps, Ra(t, t.type, i.value), zt(e, t, i.children, r), t.child;
      case 9:
        return c = t.type._context, i = t.pendingProps.children, Sr(t), c = Rt(c), i = i(c), t.flags |= 1, zt(e, t, i, r), t.child;
      case 14:
        return Ep(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 15:
        return Tp(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 19:
        return Rp(e, t, r);
      case 31:
        return Vw(e, t, r);
      case 22:
        return Op(
          e,
          t,
          r,
          t.pendingProps
        );
      case 24:
        return Sr(t), i = Rt(xt), e === null ? (c = iu(), c === null && (c = nt, f = ou(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= r), c = f), t.memoizedState = { parent: i, cache: c }, cu(t), Ra(t, xt, c)) : ((e.lanes & r) !== 0 && (uu(e, t), wl(t, null, null, r), xl()), c = e.memoizedState, f = t.memoizedState, c.parent !== i ? (c = { parent: i, cache: i }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), Ra(t, xt, i)) : (i = f.cache, Ra(t, xt, i), i !== c.cache && ru(
          t,
          [xt],
          r,
          !0
        ))), zt(
          e,
          t,
          t.pendingProps.children,
          r
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function ia(e) {
    e.flags |= 4;
  }
  function Vu(e, t, r, i, c) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (c & 335544128) === c)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (sg()) e.flags |= 8192;
        else
          throw Tr = Ai, su;
    } else e.flags &= -16777217;
  }
  function Hp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !$g(t))
      if (sg()) e.flags |= 8192;
      else
        throw Tr = Ai, su;
  }
  function Qi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ui() : 536870912, e.lanes |= t, To |= t);
  }
  function Ml(e, t) {
    if (!Be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), t = t.sibling;
          r === null ? e.tail = null : r.sibling = null;
          break;
        case "collapsed":
          r = e.tail;
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), r = r.sibling;
          i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
      }
  }
  function lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, i = 0;
    if (t)
      for (var c = e.child; c !== null; )
        r |= c.lanes | c.childLanes, i |= c.subtreeFlags & 65011712, i |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        r |= c.lanes | c.childLanes, i |= c.subtreeFlags, i |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= i, e.childLanes = r, t;
  }
  function Xw(e, t, r) {
    var i = t.pendingProps;
    switch (Jc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lt(t), null;
      case 1:
        return lt(t), null;
      case 3:
        return r = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), aa(xt), he(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (fo(t) ? ia(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, tu())), lt(t), null;
      case 26:
        var c = t.type, f = t.memoizedState;
        return e === null ? (ia(t), f !== null ? (lt(t), Hp(t, f)) : (lt(t), Vu(
          t,
          c,
          null,
          i,
          r
        ))) : f ? f !== e.memoizedState ? (ia(t), lt(t), Hp(t, f)) : (lt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && ia(t), lt(t), Vu(
          t,
          c,
          e,
          i,
          r
        )), null;
      case 27:
        if (Qe(t), r = I.current, c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && ia(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(o(166));
            return lt(t), null;
          }
          e = se.current, fo(t) ? ph(t) : (e = Gg(c, i, r), t.stateNode = e, ia(t));
        }
        return lt(t), null;
      case 5:
        if (Qe(t), c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && ia(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(o(166));
            return lt(t), null;
          }
          if (f = se.current, fo(t))
            ph(t);
          else {
            var y = cs(
              I.current
            );
            switch (f) {
              case 1:
                f = y.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c
                );
                break;
              case 2:
                f = y.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  c
                );
                break;
              default:
                switch (c) {
                  case "svg":
                    f = y.createElementNS(
                      "http://www.w3.org/2000/svg",
                      c
                    );
                    break;
                  case "math":
                    f = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    f = y.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof i.is == "string" ? y.createElement("select", {
                      is: i.is
                    }) : y.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                    break;
                  default:
                    f = typeof i.is == "string" ? y.createElement(c, { is: i.is }) : y.createElement(c);
                }
            }
            f[kt] = t, f[Vt] = i;
            e: for (y = t.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6)
                f.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                y.child.return = y, y = y.child;
                continue;
              }
              if (y === t) break e;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === t)
                  break e;
                y = y.return;
              }
              y.sibling.return = y.return, y = y.sibling;
            }
            t.stateNode = f;
            e: switch (Ht(f, c, i), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && ia(t);
          }
        }
        return lt(t), Vu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          r
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && ia(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = I.current, fo(t)) {
            if (e = t.stateNode, r = t.memoizedProps, i = null, c = jt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  i = c.memoizedProps;
              }
            e[kt] = t, e = !!(e.nodeValue === r || i !== null && i.suppressHydrationWarning === !0 || kg(e.nodeValue, r)), e || ja(t, !0);
          } else
            e = cs(e).createTextNode(
              i
            ), e[kt] = t, t.stateNode = e;
        }
        return lt(t), null;
      case 31:
        if (r = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = fo(t), r !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[kt] = t;
            } else
              xr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), e = !1;
          } else
            r = tu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return t.flags & 256 ? (an(t), t) : (an(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return lt(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = fo(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317));
              c[kt] = t;
            } else
              xr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), c = !1;
          } else
            c = tu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (an(t), t) : (an(t), null);
        }
        return an(t), (t.flags & 128) !== 0 ? (t.lanes = r, t) : (r = i !== null, e = e !== null && e.memoizedState !== null, r && (i = t.child, c = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (c = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== c && (i.flags |= 2048)), r !== e && r && (t.child.flags |= 8192), Qi(t, t.updateQueue), lt(t), null);
      case 4:
        return he(), e === null && hf(t.stateNode.containerInfo), lt(t), null;
      case 10:
        return aa(t.type), lt(t), null;
      case 19:
        if (W(ht), i = t.memoizedState, i === null) return lt(t), null;
        if (c = (t.flags & 128) !== 0, f = i.rendering, f === null)
          if (c) Ml(i, !1);
          else {
            if (ft !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = zi(e), f !== null) {
                  for (t.flags |= 128, Ml(i, !1), e = f.updateQueue, t.updateQueue = e, Qi(t, e), t.subtreeFlags = 0, e = r, r = t.child; r !== null; )
                    uh(r, e), r = r.sibling;
                  return ae(
                    ht,
                    ht.current & 1 | 2
                  ), Be && ta(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && At() > Ji && (t.flags |= 128, c = !0, Ml(i, !1), t.lanes = 4194304);
          }
        else {
          if (!c)
            if (e = zi(f), e !== null) {
              if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Qi(t, e), Ml(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !Be)
                return lt(t), null;
            } else
              2 * At() - i.renderingStartTime > Ji && r !== 536870912 && (t.flags |= 128, c = !0, Ml(i, !1), t.lanes = 4194304);
          i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = At(), e.sibling = null, r = ht.current, ae(
          ht,
          c ? r & 1 | 2 : r & 1
        ), Be && ta(t, i.treeForkCount), e) : (lt(t), null);
      case 22:
      case 23:
        return an(t), hu(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (r & 536870912) !== 0 && (t.flags & 128) === 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), r = t.updateQueue, r !== null && Qi(t, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== r && (t.flags |= 2048), e !== null && W(Cr), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), aa(xt), lt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Qw(e, t) {
    switch (Jc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return aa(xt), he(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Qe(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (an(t), t.alternate === null)
            throw Error(o(340));
          xr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (an(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          xr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return W(ht), null;
      case 4:
        return he(), null;
      case 10:
        return aa(t.type), null;
      case 22:
      case 23:
        return an(t), hu(), e !== null && W(Cr), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return aa(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yp(e, t) {
    switch (Jc(t), t.tag) {
      case 3:
        aa(xt), he();
        break;
      case 26:
      case 27:
      case 5:
        Qe(t);
        break;
      case 4:
        he();
        break;
      case 31:
        t.memoizedState !== null && an(t);
        break;
      case 13:
        an(t);
        break;
      case 19:
        W(ht);
        break;
      case 10:
        aa(t.type);
        break;
      case 22:
      case 23:
        an(t), hu(), e !== null && W(Cr);
        break;
      case 24:
        aa(xt);
    }
  }
  function Dl(e, t) {
    try {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            i = void 0;
            var f = r.create, y = r.inst;
            i = f(), y.destroy = i;
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (S) {
      Ie(t, t.return, S);
    }
  }
  function La(e, t, r) {
    try {
      var i = t.updateQueue, c = i !== null ? i.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        i = f;
        do {
          if ((i.tag & e) === e) {
            var y = i.inst, S = y.destroy;
            if (S !== void 0) {
              y.destroy = void 0, c = t;
              var j = r, q = S;
              try {
                q();
              } catch (Q) {
                Ie(
                  c,
                  j,
                  Q
                );
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (Q) {
      Ie(t, t.return, Q);
    }
  }
  function Up(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Dh(t, r);
      } catch (i) {
        Ie(e, e.return, i);
      }
    }
  }
  function Bp(e, t, r) {
    r.props = Dr(
      e.type,
      e.memoizedProps
    ), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (i) {
      Ie(e, t, i);
    }
  }
  function _l(e, t) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof r == "function" ? e.refCleanup = r(i) : r.current = i;
      }
    } catch (c) {
      Ie(e, t, c);
    }
  }
  function Rn(e, t) {
    var r = e.ref, i = e.refCleanup;
    if (r !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (c) {
          Ie(e, t, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (c) {
          Ie(e, t, c);
        }
      else r.current = null;
  }
  function Lp(e) {
    var t = e.type, r = e.memoizedProps, i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && i.focus();
          break e;
        case "img":
          r.src ? i.src = r.src : r.srcSet && (i.srcset = r.srcSet);
      }
    } catch (c) {
      Ie(e, e.return, c);
    }
  }
  function Fu(e, t, r) {
    try {
      var i = e.stateNode;
      g1(i, e.type, r, t), i[Vt] = t;
    } catch (c) {
      Ie(e, e.return, c);
    }
  }
  function qp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Xa(e.type) || e.tag === 4;
  }
  function Xu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Xa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(e, t) : (t = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, t.appendChild(e), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Kn));
    else if (i !== 4 && (i === 27 && Xa(e.type) && (r = e.stateNode, t = null), e = e.child, e !== null))
      for (Qu(e, t, r), e = e.sibling; e !== null; )
        Qu(e, t, r), e = e.sibling;
  }
  function Zi(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && (i === 27 && Xa(e.type) && (r = e.stateNode), e = e.child, e !== null))
      for (Zi(e, t, r), e = e.sibling; e !== null; )
        Zi(e, t, r), e = e.sibling;
  }
  function Pp(e) {
    var t = e.stateNode, r = e.memoizedProps;
    try {
      for (var i = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      Ht(t, i, r), t[kt] = e, t[Vt] = r;
    } catch (f) {
      Ie(e, e.return, f);
    }
  }
  var sa = !1, Ct = !1, Zu = !1, Gp = typeof WeakSet == "function" ? WeakSet : Set, _t = null;
  function Zw(e, t) {
    if (e = e.containerInfo, yf = gs, e = th(e), Pc(e)) {
      if ("selectionStart" in e)
        var r = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          r = (r = e.ownerDocument) && r.defaultView || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var c = i.anchorOffset, f = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, f.nodeType;
            } catch {
              r = null;
              break e;
            }
            var y = 0, S = -1, j = -1, q = 0, Q = 0, J = e, P = null;
            t: for (; ; ) {
              for (var V; J !== r || c !== 0 && J.nodeType !== 3 || (S = y + c), J !== f || i !== 0 && J.nodeType !== 3 || (j = y + i), J.nodeType === 3 && (y += J.nodeValue.length), (V = J.firstChild) !== null; )
                P = J, J = V;
              for (; ; ) {
                if (J === e) break t;
                if (P === r && ++q === c && (S = y), P === f && ++Q === i && (j = y), (V = J.nextSibling) !== null) break;
                J = P, P = J.parentNode;
              }
              J = V;
            }
            r = S === -1 || j === -1 ? null : { start: S, end: j };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (vf = { focusedElem: e, selectionRange: r }, gs = !1, _t = t; _t !== null; )
      if (t = _t, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, _t = e;
      else
        for (; _t !== null; ) {
          switch (t = _t, f = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (r = 0; r < e.length; r++)
                  c = e[r], c.ref.impl = c.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                e = void 0, r = t, c = f.memoizedProps, f = f.memoizedState, i = r.stateNode;
                try {
                  var me = Dr(
                    r.type,
                    c
                  );
                  e = i.getSnapshotBeforeUpdate(
                    me,
                    f
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (xe) {
                  Ie(
                    r,
                    r.return,
                    xe
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, r = e.nodeType, r === 9)
                  wf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, _t = e;
            break;
          }
          _t = t.return;
        }
  }
  function Wp(e, t, r) {
    var i = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ua(e, r), i & 4 && Dl(5, r);
        break;
      case 1:
        if (ua(e, r), i & 4)
          if (e = r.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (y) {
              Ie(r, r.return, y);
            }
          else {
            var c = Dr(
              r.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              Ie(
                r,
                r.return,
                y
              );
            }
          }
        i & 64 && Up(r), i & 512 && _l(r, r.return);
        break;
      case 3:
        if (ua(e, r), i & 64 && (e = r.updateQueue, e !== null)) {
          if (t = null, r.child !== null)
            switch (r.child.tag) {
              case 27:
              case 5:
                t = r.child.stateNode;
                break;
              case 1:
                t = r.child.stateNode;
            }
          try {
            Dh(e, t);
          } catch (y) {
            Ie(r, r.return, y);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Pp(r);
      case 26:
      case 5:
        ua(e, r), t === null && i & 4 && Lp(r), i & 512 && _l(r, r.return);
        break;
      case 12:
        ua(e, r);
        break;
      case 31:
        ua(e, r), i & 4 && Xp(e, r);
        break;
      case 13:
        ua(e, r), i & 4 && Qp(e, r), i & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = r1.bind(
          null,
          r
        ), E1(e, r))));
        break;
      case 22:
        if (i = r.memoizedState !== null || sa, !i) {
          t = t !== null && t.memoizedState !== null || Ct, c = sa;
          var f = Ct;
          sa = i, (Ct = t) && !f ? fa(
            e,
            r,
            (r.subtreeFlags & 8772) !== 0
          ) : ua(e, r), sa = c, Ct = f;
        }
        break;
      case 30:
        break;
      default:
        ua(e, r);
    }
  }
  function Vp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Tc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var it = null, Xt = !1;
  function ca(e, t, r) {
    for (r = r.child; r !== null; )
      Fp(e, t, r), r = r.sibling;
  }
  function Fp(e, t, r) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(fr, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Ct || Rn(r, t), ca(
          e,
          t,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Ct || Rn(r, t);
        var i = it, c = Xt;
        Xa(r.type) && (it = r.stateNode, Xt = !1), ca(
          e,
          t,
          r
        ), Ul(r.stateNode), it = i, Xt = c;
        break;
      case 5:
        Ct || Rn(r, t);
      case 6:
        if (i = it, c = Xt, it = null, ca(
          e,
          t,
          r
        ), it = i, Xt = c, it !== null)
          if (Xt)
            try {
              (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(r.stateNode);
            } catch (f) {
              Ie(
                r,
                t,
                f
              );
            }
          else
            try {
              it.removeChild(r.stateNode);
            } catch (f) {
              Ie(
                r,
                t,
                f
              );
            }
        break;
      case 18:
        it !== null && (Xt ? (e = it, Ug(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), jo(e)) : Ug(it, r.stateNode));
        break;
      case 4:
        i = it, c = Xt, it = r.stateNode.containerInfo, Xt = !0, ca(
          e,
          t,
          r
        ), it = i, Xt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        La(2, r, t), Ct || La(4, r, t), ca(
          e,
          t,
          r
        );
        break;
      case 1:
        Ct || (Rn(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function" && Bp(
          r,
          t,
          i
        )), ca(
          e,
          t,
          r
        );
        break;
      case 21:
        ca(
          e,
          t,
          r
        );
        break;
      case 22:
        Ct = (i = Ct) || r.memoizedState !== null, ca(
          e,
          t,
          r
        ), Ct = i;
        break;
      default:
        ca(
          e,
          t,
          r
        );
    }
  }
  function Xp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        jo(e);
      } catch (r) {
        Ie(t, t.return, r);
      }
    }
  }
  function Qp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        jo(e);
      } catch (r) {
        Ie(t, t.return, r);
      }
  }
  function Iw(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Gp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Gp()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Ii(e, t) {
    var r = Iw(e);
    t.forEach(function(i) {
      if (!r.has(i)) {
        r.add(i);
        var c = o1.bind(null, e, i);
        i.then(c, c);
      }
    });
  }
  function Qt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var c = r[i], f = e, y = t, S = y;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (Xa(S.type)) {
                it = S.stateNode, Xt = !1;
                break e;
              }
              break;
            case 5:
              it = S.stateNode, Xt = !1;
              break e;
            case 3:
            case 4:
              it = S.stateNode.containerInfo, Xt = !0;
              break e;
          }
          S = S.return;
        }
        if (it === null) throw Error(o(160));
        Fp(f, y, c), it = null, Xt = !1, f = c.alternate, f !== null && (f.return = null), c.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Zp(t, e), t = t.sibling;
  }
  var En = null;
  function Zp(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Qt(t, e), Zt(e), i & 4 && (La(3, e, e.return), Dl(3, e), La(5, e, e.return));
        break;
      case 1:
        Qt(t, e), Zt(e), i & 512 && (Ct || r === null || Rn(r, r.return)), i & 64 && sa && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? i : r.concat(i))));
        break;
      case 26:
        var c = En;
        if (Qt(t, e), Zt(e), i & 512 && (Ct || r === null || Rn(r, r.return)), i & 4) {
          var f = r !== null ? r.memoizedState : null;
          if (i = e.memoizedState, r === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, r = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (i) {
                    case "title":
                      f = c.getElementsByTagName("title")[0], (!f || f[nl] || f[kt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(i), c.head.insertBefore(
                        f,
                        c.querySelector("head > title")
                      )), Ht(f, i, r), f[kt] = e, Dt(f), i = f;
                      break e;
                    case "link":
                      var y = Zg(
                        "link",
                        "href",
                        c
                      ).get(i + (r.href || ""));
                      if (y) {
                        for (var S = 0; S < y.length; S++)
                          if (f = y[S], f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      f = c.createElement(i), Ht(f, i, r), c.head.appendChild(f);
                      break;
                    case "meta":
                      if (y = Zg(
                        "meta",
                        "content",
                        c
                      ).get(i + (r.content || ""))) {
                        for (S = 0; S < y.length; S++)
                          if (f = y[S], f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      f = c.createElement(i), Ht(f, i, r), c.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  f[kt] = e, Dt(f), i = f;
                }
                e.stateNode = i;
              } else
                Ig(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Qg(
                c,
                i,
                e.memoizedProps
              );
          else
            f !== i ? (f === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : f.count--, i === null ? Ig(
              c,
              e.type,
              e.stateNode
            ) : Qg(
              c,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && Fu(
              e,
              e.memoizedProps,
              r.memoizedProps
            );
        }
        break;
      case 27:
        Qt(t, e), Zt(e), i & 512 && (Ct || r === null || Rn(r, r.return)), r !== null && i & 4 && Fu(
          e,
          e.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (Qt(t, e), Zt(e), i & 512 && (Ct || r === null || Rn(r, r.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            to(c, "");
          } catch (me) {
            Ie(e, e.return, me);
          }
        }
        i & 4 && e.stateNode != null && (c = e.memoizedProps, Fu(
          e,
          c,
          r !== null ? r.memoizedProps : c
        )), i & 1024 && (Zu = !0);
        break;
      case 6:
        if (Qt(t, e), Zt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          i = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = i;
          } catch (me) {
            Ie(e, e.return, me);
          }
        }
        break;
      case 3:
        if (ds = null, c = En, En = us(t.containerInfo), Qt(t, e), En = c, Zt(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            jo(t.containerInfo);
          } catch (me) {
            Ie(e, e.return, me);
          }
        Zu && (Zu = !1, Ip(e));
        break;
      case 4:
        i = En, En = us(
          e.stateNode.containerInfo
        ), Qt(t, e), Zt(e), En = i;
        break;
      case 12:
        Qt(t, e), Zt(e);
        break;
      case 31:
        Qt(t, e), Zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Ii(e, i)));
        break;
      case 13:
        Qt(t, e), Zt(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (Ki = At()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Ii(e, i)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var j = r !== null && r.memoizedState !== null, q = sa, Q = Ct;
        if (sa = q || c, Ct = Q || j, Qt(t, e), Ct = Q, sa = q, Zt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (r === null || j || sa || Ct || _r(e)), r = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (r === null) {
                j = r = t;
                try {
                  if (f = j.stateNode, c)
                    y = f.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    S = j.stateNode;
                    var J = j.memoizedProps.style, P = J != null && J.hasOwnProperty("display") ? J.display : null;
                    S.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (me) {
                  Ie(j, j.return, me);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                j = t;
                try {
                  j.stateNode.nodeValue = c ? "" : j.memoizedProps;
                } catch (me) {
                  Ie(j, j.return, me);
                }
              }
            } else if (t.tag === 18) {
              if (r === null) {
                j = t;
                try {
                  var V = j.stateNode;
                  c ? Bg(V, !0) : Bg(j.stateNode, !1);
                } catch (me) {
                  Ie(j, j.return, me);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              r === t && (r = null), t = t.return;
            }
            r === t && (r = null), t.sibling.return = t.return, t = t.sibling;
          }
        i & 4 && (i = e.updateQueue, i !== null && (r = i.retryQueue, r !== null && (i.retryQueue = null, Ii(e, r))));
        break;
      case 19:
        Qt(t, e), Zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Ii(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Qt(t, e), Zt(e);
    }
  }
  function Zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var r, i = e.return; i !== null; ) {
          if (qp(i)) {
            r = i;
            break;
          }
          i = i.return;
        }
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var c = r.stateNode, f = Xu(e);
            Zi(e, f, c);
            break;
          case 5:
            var y = r.stateNode;
            r.flags & 32 && (to(y, ""), r.flags &= -33);
            var S = Xu(e);
            Zi(e, S, y);
            break;
          case 3:
          case 4:
            var j = r.stateNode.containerInfo, q = Xu(e);
            Qu(
              e,
              q,
              j
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (Q) {
        Ie(e, e.return, Q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ip(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Ip(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ua(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Wp(e, t.alternate, t), t = t.sibling;
  }
  function _r(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          La(4, t, t.return), _r(t);
          break;
        case 1:
          Rn(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && Bp(
            t,
            t.return,
            r
          ), _r(t);
          break;
        case 27:
          Ul(t.stateNode);
        case 26:
        case 5:
          Rn(t, t.return), _r(t);
          break;
        case 22:
          t.memoizedState === null && _r(t);
          break;
        case 30:
          _r(t);
          break;
        default:
          _r(t);
      }
      e = e.sibling;
    }
  }
  function fa(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, c = e, f = t, y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          fa(
            c,
            f,
            r
          ), Dl(4, f);
          break;
        case 1:
          if (fa(
            c,
            f,
            r
          ), i = f, c = i.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              Ie(i, i.return, q);
            }
          if (i = f, c = i.updateQueue, c !== null) {
            var S = i.stateNode;
            try {
              var j = c.shared.hiddenCallbacks;
              if (j !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < j.length; c++)
                  Mh(j[c], S);
            } catch (q) {
              Ie(i, i.return, q);
            }
          }
          r && y & 64 && Up(f), _l(f, f.return);
          break;
        case 27:
          Pp(f);
        case 26:
        case 5:
          fa(
            c,
            f,
            r
          ), r && i === null && y & 4 && Lp(f), _l(f, f.return);
          break;
        case 12:
          fa(
            c,
            f,
            r
          );
          break;
        case 31:
          fa(
            c,
            f,
            r
          ), r && y & 4 && Xp(c, f);
          break;
        case 13:
          fa(
            c,
            f,
            r
          ), r && y & 4 && Qp(c, f);
          break;
        case 22:
          f.memoizedState === null && fa(
            c,
            f,
            r
          ), _l(f, f.return);
          break;
        case 30:
          break;
        default:
          fa(
            c,
            f,
            r
          );
      }
      t = t.sibling;
    }
  }
  function Iu(e, t) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && pl(r));
  }
  function $u(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pl(e));
  }
  function Tn(e, t, r, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $p(
          e,
          t,
          r,
          i
        ), t = t.sibling;
  }
  function $p(e, t, r, i) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tn(
          e,
          t,
          r,
          i
        ), c & 2048 && Dl(9, t);
        break;
      case 1:
        Tn(
          e,
          t,
          r,
          i
        );
        break;
      case 3:
        Tn(
          e,
          t,
          r,
          i
        ), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pl(e)));
        break;
      case 12:
        if (c & 2048) {
          Tn(
            e,
            t,
            r,
            i
          ), e = t.stateNode;
          try {
            var f = t.memoizedProps, y = f.id, S = f.onPostCommit;
            typeof S == "function" && S(
              y,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (j) {
            Ie(t, t.return, j);
          }
        } else
          Tn(
            e,
            t,
            r,
            i
          );
        break;
      case 31:
        Tn(
          e,
          t,
          r,
          i
        );
        break;
      case 13:
        Tn(
          e,
          t,
          r,
          i
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, y = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? Tn(
          e,
          t,
          r,
          i
        ) : Nl(e, t) : f._visibility & 2 ? Tn(
          e,
          t,
          r,
          i
        ) : (f._visibility |= 2, So(
          e,
          t,
          r,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), c & 2048 && Iu(y, t);
        break;
      case 24:
        Tn(
          e,
          t,
          r,
          i
        ), c & 2048 && $u(t.alternate, t);
        break;
      default:
        Tn(
          e,
          t,
          r,
          i
        );
    }
  }
  function So(e, t, r, i, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, y = t, S = r, j = i, q = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          So(
            f,
            y,
            S,
            j,
            c
          ), Dl(8, y);
          break;
        case 23:
          break;
        case 22:
          var Q = y.stateNode;
          y.memoizedState !== null ? Q._visibility & 2 ? So(
            f,
            y,
            S,
            j,
            c
          ) : Nl(
            f,
            y
          ) : (Q._visibility |= 2, So(
            f,
            y,
            S,
            j,
            c
          )), c && q & 2048 && Iu(
            y.alternate,
            y
          );
          break;
        case 24:
          So(
            f,
            y,
            S,
            j,
            c
          ), c && q & 2048 && $u(y.alternate, y);
          break;
        default:
          So(
            f,
            y,
            S,
            j,
            c
          );
      }
      t = t.sibling;
    }
  }
  function Nl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e, i = t, c = i.flags;
        switch (i.tag) {
          case 22:
            Nl(r, i), c & 2048 && Iu(
              i.alternate,
              i
            );
            break;
          case 24:
            Nl(r, i), c & 2048 && $u(i.alternate, i);
            break;
          default:
            Nl(r, i);
        }
        t = t.sibling;
      }
  }
  var Al = 8192;
  function Co(e, t, r) {
    if (e.subtreeFlags & Al)
      for (e = e.child; e !== null; )
        Kp(
          e,
          t,
          r
        ), e = e.sibling;
  }
  function Kp(e, t, r) {
    switch (e.tag) {
      case 26:
        Co(
          e,
          t,
          r
        ), e.flags & Al && e.memoizedState !== null && H1(
          r,
          En,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Co(
          e,
          t,
          r
        );
        break;
      case 3:
      case 4:
        var i = En;
        En = us(e.stateNode.containerInfo), Co(
          e,
          t,
          r
        ), En = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Al, Al = 16777216, Co(
          e,
          t,
          r
        ), Al = i) : Co(
          e,
          t,
          r
        ));
        break;
      default:
        Co(
          e,
          t,
          r
        );
    }
  }
  function Jp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function kl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          _t = i, tg(
            i,
            e
          );
        }
      Jp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        eg(e), e = e.sibling;
  }
  function eg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        kl(e), e.flags & 2048 && La(9, e, e.return);
        break;
      case 3:
        kl(e);
        break;
      case 12:
        kl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, $i(e)) : kl(e);
        break;
      default:
        kl(e);
    }
  }
  function $i(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          _t = i, tg(
            i,
            e
          );
        }
      Jp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          La(8, t, t.return), $i(t);
          break;
        case 22:
          r = t.stateNode, r._visibility & 2 && (r._visibility &= -3, $i(t));
          break;
        default:
          $i(t);
      }
      e = e.sibling;
    }
  }
  function tg(e, t) {
    for (; _t !== null; ) {
      var r = _t;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          La(8, r, t);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var i = r.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          pl(r.memoizedState.cache);
      }
      if (i = r.child, i !== null) i.return = r, _t = i;
      else
        e: for (r = e; _t !== null; ) {
          i = _t;
          var c = i.sibling, f = i.return;
          if (Vp(i), i === r) {
            _t = null;
            break e;
          }
          if (c !== null) {
            c.return = f, _t = c;
            break e;
          }
          _t = f;
        }
    }
  }
  var $w = {
    getCacheForType: function(e) {
      var t = Rt(xt), r = t.data.get(e);
      return r === void 0 && (r = e(), t.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return Rt(xt).controller.signal;
    }
  }, Kw = typeof WeakMap == "function" ? WeakMap : Map, Fe = 0, nt = null, ke = null, ze = 0, Ze = 0, rn = null, qa = !1, Eo = !1, Ku = !1, da = 0, ft = 0, Pa = 0, Nr = 0, Ju = 0, on = 0, To = 0, jl = null, It = null, ef = !1, Ki = 0, ng = 0, Ji = 1 / 0, es = null, Ga = null, Tt = 0, Wa = null, Oo = null, ma = 0, tf = 0, nf = null, ag = null, Rl = 0, af = null;
  function ln() {
    return (Fe & 2) !== 0 && ze !== 0 ? ze & -ze : H.T !== null ? uf() : bm();
  }
  function rg() {
    if (on === 0)
      if ((ze & 536870912) === 0 || Be) {
        var e = be;
        be <<= 1, (be & 3932160) === 0 && (be = 262144), on = e;
      } else on = 536870912;
    return e = nn.current, e !== null && (e.flags |= 32), on;
  }
  function $t(e, t, r) {
    (e === nt && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null) && (Mo(e, 0), Va(
      e,
      ze,
      on,
      !1
    )), In(e, r), ((Fe & 2) === 0 || e !== nt) && (e === nt && ((Fe & 2) === 0 && (Nr |= r), ft === 4 && Va(
      e,
      ze,
      on,
      !1
    )), zn(e));
  }
  function og(e, t, r) {
    if ((Fe & 6) !== 0) throw Error(o(327));
    var i = !r && (t & 127) === 0 && (t & e.expiredLanes) === 0 || dr(e, t), c = i ? t1(e, t) : of(e, t, !0), f = i;
    do {
      if (c === 0) {
        Eo && !i && Va(e, t, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, f && !Jw(r)) {
          c = of(e, t, !1), f = !1;
          continue;
        }
        if (c === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var y = 0;
          else
            y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            t = y;
            e: {
              var S = e;
              c = jl;
              var j = S.current.memoizedState.isDehydrated;
              if (j && (Mo(S, y).flags |= 256), y = of(
                S,
                y,
                !1
              ), y !== 2) {
                if (Ku && !j) {
                  S.errorRecoveryDisabledLanes |= f, Nr |= f, c = 4;
                  break e;
                }
                f = It, It = c, f !== null && (It === null ? It = f : It.push.apply(
                  It,
                  f
                ));
              }
              c = y;
            }
            if (f = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          Mo(e, 0), Va(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, f = c, f) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Va(
                i,
                t,
                on,
                !qa
              );
              break e;
            case 2:
              It = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (c = Ki + 300 - At(), 10 < c)) {
            if (Va(
              i,
              t,
              on,
              !qa
            ), Ne(i, 0, !0) !== 0) break e;
            ma = t, i.timeoutHandle = Hg(
              lg.bind(
                null,
                i,
                r,
                It,
                es,
                ef,
                t,
                on,
                Nr,
                To,
                qa,
                f,
                "Throttled",
                -0,
                0
              ),
              c
            );
            break e;
          }
          lg(
            i,
            r,
            It,
            es,
            ef,
            t,
            on,
            Nr,
            To,
            qa,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    zn(e);
  }
  function lg(e, t, r, i, c, f, y, S, j, q, Q, J, P, V) {
    if (e.timeoutHandle = -1, J = t.subtreeFlags, J & 8192 || (J & 16785408) === 16785408) {
      J = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Kn
      }, Kp(
        t,
        f,
        J
      );
      var me = (f & 62914560) === f ? Ki - At() : (f & 4194048) === f ? ng - At() : 0;
      if (me = Y1(
        J,
        me
      ), me !== null) {
        ma = f, e.cancelPendingCommit = me(
          hg.bind(
            null,
            e,
            t,
            f,
            r,
            i,
            c,
            y,
            S,
            j,
            Q,
            J,
            null,
            P,
            V
          )
        ), Va(e, f, y, !q);
        return;
      }
    }
    hg(
      e,
      t,
      f,
      r,
      i,
      c,
      y,
      S,
      j
    );
  }
  function Jw(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if ((r === 0 || r === 11 || r === 15) && t.flags & 16384 && (r = t.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var i = 0; i < r.length; i++) {
          var c = r[i], f = c.getSnapshot;
          c = c.value;
          try {
            if (!en(f(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null)
        r.return = t, t = r;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Va(e, t, r, i) {
    t &= ~Ju, t &= ~Nr, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var f = 31 - Gt(c), y = 1 << f;
      i[f] = -1, c &= ~y;
    }
    r !== 0 && gm(e, r, t);
  }
  function ts() {
    return (Fe & 6) === 0 ? (zl(0), !1) : !0;
  }
  function rf() {
    if (ke !== null) {
      if (Ze === 0)
        var e = ke.return;
      else
        e = ke, na = wr = null, xu(e), yo = null, yl = 0, e = ke;
      for (; e !== null; )
        Yp(e.alternate, e), e = e.return;
      ke = null;
    }
  }
  function Mo(e, t) {
    var r = e.timeoutHandle;
    r !== -1 && (e.timeoutHandle = -1, b1(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), ma = 0, rf(), nt = e, ke = r = ea(e.current, null), ze = t, Ze = 0, rn = null, qa = !1, Eo = dr(e, t), Ku = !1, To = on = Ju = Nr = Pa = ft = 0, It = jl = null, ef = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var c = 31 - Gt(i), f = 1 << c;
        t |= e[c], i &= ~f;
      }
    return da = t, Si(), r;
  }
  function ig(e, t) {
    De = null, H.H = Tl, t === go || t === Ni ? (t = Ch(), Ze = 3) : t === su ? (t = Ch(), Ze = 4) : Ze = t === Hu ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, rn = t, ke === null && (ft = 1, Wi(
      e,
      hn(t, e.current)
    ));
  }
  function sg() {
    var e = nn.current;
    return e === null ? !0 : (ze & 4194048) === ze ? vn === null : (ze & 62914560) === ze || (ze & 536870912) !== 0 ? e === vn : !1;
  }
  function cg() {
    var e = H.H;
    return H.H = Tl, e === null ? Tl : e;
  }
  function ug() {
    var e = H.A;
    return H.A = $w, e;
  }
  function ns() {
    ft = 4, qa || (ze & 4194048) !== ze && nn.current !== null || (Eo = !0), (Pa & 134217727) === 0 && (Nr & 134217727) === 0 || nt === null || Va(
      nt,
      ze,
      on,
      !1
    );
  }
  function of(e, t, r) {
    var i = Fe;
    Fe |= 2;
    var c = cg(), f = ug();
    (nt !== e || ze !== t) && (es = null, Mo(e, t)), t = !1;
    var y = ft;
    e: do
      try {
        if (Ze !== 0 && ke !== null) {
          var S = ke, j = rn;
          switch (Ze) {
            case 8:
              rf(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              nn.current === null && (t = !0);
              var q = Ze;
              if (Ze = 0, rn = null, Do(e, S, j, q), r && Eo) {
                y = 0;
                break e;
              }
              break;
            default:
              q = Ze, Ze = 0, rn = null, Do(e, S, j, q);
          }
        }
        e1(), y = ft;
        break;
      } catch (Q) {
        ig(e, Q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, na = wr = null, Fe = i, H.H = c, H.A = f, ke === null && (nt = null, ze = 0, Si()), y;
  }
  function e1() {
    for (; ke !== null; ) fg(ke);
  }
  function t1(e, t) {
    var r = Fe;
    Fe |= 2;
    var i = cg(), c = ug();
    nt !== e || ze !== t ? (es = null, Ji = At() + 500, Mo(e, t)) : Eo = dr(
      e,
      t
    );
    e: do
      try {
        if (Ze !== 0 && ke !== null) {
          t = ke;
          var f = rn;
          t: switch (Ze) {
            case 1:
              Ze = 0, rn = null, Do(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (wh(f)) {
                Ze = 0, rn = null, dg(t);
                break;
              }
              t = function() {
                Ze !== 2 && Ze !== 9 || nt !== e || (Ze = 7), zn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              wh(f) ? (Ze = 0, rn = null, dg(t)) : (Ze = 0, rn = null, Do(e, t, f, 7));
              break;
            case 5:
              var y = null;
              switch (ke.tag) {
                case 26:
                  y = ke.memoizedState;
                case 5:
                case 27:
                  var S = ke;
                  if (y ? $g(y) : S.stateNode.complete) {
                    Ze = 0, rn = null;
                    var j = S.sibling;
                    if (j !== null) ke = j;
                    else {
                      var q = S.return;
                      q !== null ? (ke = q, as(q)) : ke = null;
                    }
                    break t;
                  }
              }
              Ze = 0, rn = null, Do(e, t, f, 5);
              break;
            case 6:
              Ze = 0, rn = null, Do(e, t, f, 6);
              break;
            case 8:
              rf(), ft = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        n1();
        break;
      } catch (Q) {
        ig(e, Q);
      }
    while (!0);
    return na = wr = null, H.H = i, H.A = c, Fe = r, ke !== null ? 0 : (nt = null, ze = 0, Si(), ft);
  }
  function n1() {
    for (; ke !== null && !gc(); )
      fg(ke);
  }
  function fg(e) {
    var t = zp(e.alternate, e, da);
    e.memoizedProps = e.pendingProps, t === null ? as(e) : ke = t;
  }
  function dg(e) {
    var t = e, r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _p(
          r,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ze
        );
        break;
      case 11:
        t = _p(
          r,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ze
        );
        break;
      case 5:
        xu(t);
      default:
        Yp(r, t), t = ke = uh(t, da), t = zp(r, t, da);
    }
    e.memoizedProps = e.pendingProps, t === null ? as(e) : ke = t;
  }
  function Do(e, t, r, i) {
    na = wr = null, xu(t), yo = null, yl = 0;
    var c = t.return;
    try {
      if (Ww(
        e,
        c,
        t,
        r,
        ze
      )) {
        ft = 1, Wi(
          e,
          hn(r, e.current)
        ), ke = null;
        return;
      }
    } catch (f) {
      if (c !== null) throw ke = c, f;
      ft = 1, Wi(
        e,
        hn(r, e.current)
      ), ke = null;
      return;
    }
    t.flags & 32768 ? (Be || i === 1 ? e = !0 : Eo || (ze & 536870912) !== 0 ? e = !1 : (qa = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = nn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), mg(t, e)) : as(t);
  }
  function as(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        mg(
          t,
          qa
        );
        return;
      }
      e = t.return;
      var r = Xw(
        t.alternate,
        t,
        da
      );
      if (r !== null) {
        ke = r;
        return;
      }
      if (t = t.sibling, t !== null) {
        ke = t;
        return;
      }
      ke = t = e;
    } while (t !== null);
    ft === 0 && (ft = 5);
  }
  function mg(e, t) {
    do {
      var r = Qw(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, ke = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !t && (e = e.sibling, e !== null)) {
        ke = e;
        return;
      }
      ke = e = r;
    } while (e !== null);
    ft = 6, ke = null;
  }
  function hg(e, t, r, i, c, f, y, S, j) {
    e.cancelPendingCommit = null;
    do
      rs();
    while (Tt !== 0);
    if ((Fe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (f = t.lanes | t.childLanes, f |= Xc, zx(
        e,
        r,
        f,
        y,
        S,
        j
      ), e === nt && (ke = nt = null, ze = 0), Oo = t, Wa = e, ma = r, tf = f, nf = c, ag = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, l1(Qr, function() {
        return bg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = H.T, H.T = null, c = F.p, F.p = 2, y = Fe, Fe |= 4;
        try {
          Zw(e, t, r);
        } finally {
          Fe = y, F.p = c, H.T = i;
        }
      }
      Tt = 1, pg(), gg(), yg();
    }
  }
  function pg() {
    if (Tt === 1) {
      Tt = 0;
      var e = Wa, t = Oo, r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        r = H.T, H.T = null;
        var i = F.p;
        F.p = 2;
        var c = Fe;
        Fe |= 4;
        try {
          Zp(t, e);
          var f = vf, y = th(e.containerInfo), S = f.focusedElem, j = f.selectionRange;
          if (y !== S && S && S.ownerDocument && eh(
            S.ownerDocument.documentElement,
            S
          )) {
            if (j !== null && Pc(S)) {
              var q = j.start, Q = j.end;
              if (Q === void 0 && (Q = q), "selectionStart" in S)
                S.selectionStart = q, S.selectionEnd = Math.min(
                  Q,
                  S.value.length
                );
              else {
                var J = S.ownerDocument || document, P = J && J.defaultView || window;
                if (P.getSelection) {
                  var V = P.getSelection(), me = S.textContent.length, xe = Math.min(j.start, me), tt = j.end === void 0 ? xe : Math.min(j.end, me);
                  !V.extend && xe > tt && (y = tt, tt = xe, xe = y);
                  var U = Jm(
                    S,
                    xe
                  ), R = Jm(
                    S,
                    tt
                  );
                  if (U && R && (V.rangeCount !== 1 || V.anchorNode !== U.node || V.anchorOffset !== U.offset || V.focusNode !== R.node || V.focusOffset !== R.offset)) {
                    var L = J.createRange();
                    L.setStart(U.node, U.offset), V.removeAllRanges(), xe > tt ? (V.addRange(L), V.extend(R.node, R.offset)) : (L.setEnd(R.node, R.offset), V.addRange(L));
                  }
                }
              }
            }
            for (J = [], V = S; V = V.parentNode; )
              V.nodeType === 1 && J.push({
                element: V,
                left: V.scrollLeft,
                top: V.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < J.length; S++) {
              var $ = J[S];
              $.element.scrollLeft = $.left, $.element.scrollTop = $.top;
            }
          }
          gs = !!yf, vf = yf = null;
        } finally {
          Fe = c, F.p = i, H.T = r;
        }
      }
      e.current = t, Tt = 2;
    }
  }
  function gg() {
    if (Tt === 2) {
      Tt = 0;
      var e = Wa, t = Oo, r = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        r = H.T, H.T = null;
        var i = F.p;
        F.p = 2;
        var c = Fe;
        Fe |= 4;
        try {
          Wp(e, t.alternate, t);
        } finally {
          Fe = c, F.p = i, H.T = r;
        }
      }
      Tt = 3;
    }
  }
  function yg() {
    if (Tt === 4 || Tt === 3) {
      Tt = 0, oi();
      var e = Wa, t = Oo, r = ma, i = ag;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tt = 5 : (Tt = 0, Oo = Wa = null, vg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Ga = null), Cc(r), t = t.stateNode, Pt && typeof Pt.onCommitFiberRoot == "function")
        try {
          Pt.onCommitFiberRoot(
            fr,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = H.T, c = F.p, F.p = 2, H.T = null;
        try {
          for (var f = e.onRecoverableError, y = 0; y < i.length; y++) {
            var S = i[y];
            f(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          H.T = t, F.p = c;
        }
      }
      (ma & 3) !== 0 && rs(), zn(e), c = e.pendingLanes, (r & 261930) !== 0 && (c & 42) !== 0 ? e === af ? Rl++ : (Rl = 0, af = e) : Rl = 0, zl(0);
    }
  }
  function vg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pl(t)));
  }
  function rs() {
    return pg(), gg(), yg(), bg();
  }
  function bg() {
    if (Tt !== 5) return !1;
    var e = Wa, t = tf;
    tf = 0;
    var r = Cc(ma), i = H.T, c = F.p;
    try {
      F.p = 32 > r ? 32 : r, H.T = null, r = nf, nf = null;
      var f = Wa, y = ma;
      if (Tt = 0, Oo = Wa = null, ma = 0, (Fe & 6) !== 0) throw Error(o(331));
      var S = Fe;
      if (Fe |= 4, eg(f.current), $p(
        f,
        f.current,
        y,
        r
      ), Fe = S, zl(0, !1), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        try {
          Pt.onPostCommitFiberRoot(fr, f);
        } catch {
        }
      return !0;
    } finally {
      F.p = c, H.T = i, vg(e, t);
    }
  }
  function xg(e, t, r) {
    t = hn(r, t), t = zu(e.stateNode, t, 2), e = Ya(e, t, 2), e !== null && (In(e, 2), zn(e));
  }
  function Ie(e, t, r) {
    if (e.tag === 3)
      xg(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          xg(
            t,
            e,
            r
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ga === null || !Ga.has(i))) {
            e = hn(r, e), r = wp(2), i = Ya(t, r, 2), i !== null && (Sp(
              r,
              i,
              t,
              e
            ), In(i, 2), zn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function lf(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Kw();
      var c = /* @__PURE__ */ new Set();
      i.set(t, c);
    } else
      c = i.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), i.set(t, c));
    c.has(r) || (Ku = !0, c.add(r), e = a1.bind(null, e, t, r), t.then(e, e));
  }
  function a1(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, nt === e && (ze & r) === r && (ft === 4 || ft === 3 && (ze & 62914560) === ze && 300 > At() - Ki ? (Fe & 2) === 0 && Mo(e, 0) : Ju |= r, To === ze && (To = 0)), zn(e);
  }
  function wg(e, t) {
    t === 0 && (t = ui()), e = vr(e, t), e !== null && (In(e, t), zn(e));
  }
  function r1(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), wg(e, r);
  }
  function o1(e, t) {
    var r = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode, c = e.memoizedState;
        c !== null && (r = c.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(t), wg(e, r);
  }
  function l1(e, t) {
    return Jo(e, t);
  }
  var os = null, _o = null, sf = !1, ls = !1, cf = !1, Fa = 0;
  function zn(e) {
    e !== _o && e.next === null && (_o === null ? os = _o = e : _o = _o.next = e), ls = !0, sf || (sf = !0, s1());
  }
  function zl(e, t) {
    if (!cf && ls) {
      cf = !0;
      do
        for (var r = !1, i = os; i !== null; ) {
          if (e !== 0) {
            var c = i.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var y = i.suspendedLanes, S = i.pingedLanes;
              f = (1 << 31 - Gt(42 | e) + 1) - 1, f &= c & ~(y & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (r = !0, Tg(i, f));
          } else
            f = ze, f = Ne(
              i,
              i === nt ? f : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (f & 3) === 0 || dr(i, f) || (r = !0, Tg(i, f));
          i = i.next;
        }
      while (r);
      cf = !1;
    }
  }
  function i1() {
    Sg();
  }
  function Sg() {
    ls = sf = !1;
    var e = 0;
    Fa !== 0 && v1() && (e = Fa);
    for (var t = At(), r = null, i = os; i !== null; ) {
      var c = i.next, f = Cg(i, t);
      f === 0 ? (i.next = null, r === null ? os = c : r.next = c, c === null && (_o = r)) : (r = i, (e !== 0 || (f & 3) !== 0) && (ls = !0)), i = c;
    }
    Tt !== 0 && Tt !== 5 || zl(e), Fa !== 0 && (Fa = 0);
  }
  function Cg(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var y = 31 - Gt(f), S = 1 << y, j = c[y];
      j === -1 ? ((S & r) === 0 || (S & i) !== 0) && (c[y] = wc(S, t)) : j <= t && (e.expiredLanes |= S), f &= ~S;
    }
    if (t = nt, r = ze, r = Ne(
      e,
      e === t ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, r === 0 || e === t && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && el(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || dr(e, r)) {
      if (t = r & -r, t === e.callbackPriority) return t;
      switch (i !== null && el(i), Cc(r)) {
        case 2:
        case 8:
          r = ii;
          break;
        case 32:
          r = Qr;
          break;
        case 268435456:
          r = si;
          break;
        default:
          r = Qr;
      }
      return i = Eg.bind(null, e), r = Jo(r, i), e.callbackPriority = t, e.callbackNode = r, t;
    }
    return i !== null && i !== null && el(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Eg(e, t) {
    if (Tt !== 0 && Tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (rs() && e.callbackNode !== r)
      return null;
    var i = ze;
    return i = Ne(
      e,
      e === nt ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (og(e, i, t), Cg(e, At()), e.callbackNode != null && e.callbackNode === r ? Eg.bind(null, e) : null);
  }
  function Tg(e, t) {
    if (rs()) return null;
    og(e, t, !0);
  }
  function s1() {
    x1(function() {
      (Fe & 6) !== 0 ? Jo(
        li,
        i1
      ) : Sg();
    });
  }
  function uf() {
    if (Fa === 0) {
      var e = ho;
      e === 0 && (e = Ue, Ue <<= 1, (Ue & 261888) === 0 && (Ue = 256)), Fa = e;
    }
    return Fa;
  }
  function Og(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : hi("" + e);
  }
  function Mg(e, t) {
    var r = t.ownerDocument.createElement("input");
    return r.name = t.name, r.value = t.value, e.id && r.setAttribute("form", e.id), t.parentNode.insertBefore(r, t), e = new FormData(e), r.parentNode.removeChild(r), e;
  }
  function c1(e, t, r, i, c) {
    if (t === "submit" && r && r.stateNode === c) {
      var f = Og(
        (c[Vt] || null).action
      ), y = i.submitter;
      y && (t = (t = y[Vt] || null) ? Og(t.formAction) : y.getAttribute("formAction"), t !== null && (f = t, y = null));
      var S = new vi(
        "action",
        "action",
        null,
        i,
        c
      );
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (Fa !== 0) {
                  var j = y ? Mg(c, y) : new FormData(c);
                  _u(
                    r,
                    {
                      pending: !0,
                      data: j,
                      method: c.method,
                      action: f
                    },
                    null,
                    j
                  );
                }
              } else
                typeof f == "function" && (S.preventDefault(), j = y ? Mg(c, y) : new FormData(c), _u(
                  r,
                  {
                    pending: !0,
                    data: j,
                    method: c.method,
                    action: f
                  },
                  f,
                  j
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var ff = 0; ff < Fc.length; ff++) {
    var df = Fc[ff], u1 = df.toLowerCase(), f1 = df[0].toUpperCase() + df.slice(1);
    Cn(
      u1,
      "on" + f1
    );
  }
  Cn(rh, "onAnimationEnd"), Cn(oh, "onAnimationIteration"), Cn(lh, "onAnimationStart"), Cn("dblclick", "onDoubleClick"), Cn("focusin", "onFocus"), Cn("focusout", "onBlur"), Cn(Mw, "onTransitionRun"), Cn(Dw, "onTransitionStart"), Cn(_w, "onTransitionCancel"), Cn(ih, "onTransitionEnd"), Jr("onMouseEnter", ["mouseout", "mouseover"]), Jr("onMouseLeave", ["mouseout", "mouseover"]), Jr("onPointerEnter", ["pointerout", "pointerover"]), Jr("onPointerLeave", ["pointerout", "pointerover"]), hr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), hr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), hr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), hr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), hr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), hr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), d1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl)
  );
  function Dg(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], c = i.event;
      i = i.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = i.length - 1; 0 <= y; y--) {
            var S = i[y], j = S.instance, q = S.currentTarget;
            if (S = S.listener, j !== f && c.isPropagationStopped())
              break e;
            f = S, c.currentTarget = q;
            try {
              f(c);
            } catch (Q) {
              wi(Q);
            }
            c.currentTarget = null, f = j;
          }
        else
          for (y = 0; y < i.length; y++) {
            if (S = i[y], j = S.instance, q = S.currentTarget, S = S.listener, j !== f && c.isPropagationStopped())
              break e;
            f = S, c.currentTarget = q;
            try {
              f(c);
            } catch (Q) {
              wi(Q);
            }
            c.currentTarget = null, f = j;
          }
      }
    }
  }
  function je(e, t) {
    var r = t[Ec];
    r === void 0 && (r = t[Ec] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (_g(t, e, 2, !1), r.add(i));
  }
  function mf(e, t, r) {
    var i = 0;
    t && (i |= 4), _g(
      r,
      e,
      i,
      t
    );
  }
  var is = "_reactListening" + Math.random().toString(36).slice(2);
  function hf(e) {
    if (!e[is]) {
      e[is] = !0, Sm.forEach(function(r) {
        r !== "selectionchange" && (d1.has(r) || mf(r, !1, e), mf(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[is] || (t[is] = !0, mf("selectionchange", !1, t));
    }
  }
  function _g(e, t, r, i) {
    switch (ry(t)) {
      case 2:
        var c = L1;
        break;
      case 8:
        c = q1;
        break;
      default:
        c = _f;
    }
    r = c.bind(
      null,
      t,
      r,
      e
    ), c = void 0, !jc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), i ? c !== void 0 ? e.addEventListener(t, r, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, r, !0) : c !== void 0 ? e.addEventListener(t, r, {
      passive: c
    }) : e.addEventListener(t, r, !1);
  }
  function pf(e, t, r, i, c) {
    var f = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var y = i.tag;
        if (y === 3 || y === 4) {
          var S = i.stateNode.containerInfo;
          if (S === c) break;
          if (y === 4)
            for (y = i.return; y !== null; ) {
              var j = y.tag;
              if ((j === 3 || j === 4) && y.stateNode.containerInfo === c)
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (y = Ir(S), y === null) return;
            if (j = y.tag, j === 5 || j === 6 || j === 26 || j === 27) {
              i = f = y;
              continue e;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    Rm(function() {
      var q = f, Q = Ac(r), J = [];
      e: {
        var P = sh.get(e);
        if (P !== void 0) {
          var V = vi, me = e;
          switch (e) {
            case "keypress":
              if (gi(r) === 0) break e;
            case "keydown":
            case "keyup":
              V = ow;
              break;
            case "focusin":
              me = "focus", V = Yc;
              break;
            case "focusout":
              me = "blur", V = Yc;
              break;
            case "beforeblur":
            case "afterblur":
              V = Yc;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Ym;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Xx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = sw;
              break;
            case rh:
            case oh:
            case lh:
              V = Ix;
              break;
            case ih:
              V = uw;
              break;
            case "scroll":
            case "scrollend":
              V = Vx;
              break;
            case "wheel":
              V = dw;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Kx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Bm;
              break;
            case "toggle":
            case "beforetoggle":
              V = hw;
          }
          var xe = (t & 4) !== 0, tt = !xe && (e === "scroll" || e === "scrollend"), U = xe ? P !== null ? P + "Capture" : null : P;
          xe = [];
          for (var R = q, L; R !== null; ) {
            var $ = R;
            if (L = $.stateNode, $ = $.tag, $ !== 5 && $ !== 26 && $ !== 27 || L === null || U === null || ($ = rl(R, U), $ != null && xe.push(
              Yl(R, $, L)
            )), tt) break;
            R = R.return;
          }
          0 < xe.length && (P = new V(
            P,
            me,
            null,
            r,
            Q
          ), J.push({ event: P, listeners: xe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (P = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", P && r !== Nc && (me = r.relatedTarget || r.fromElement) && (Ir(me) || me[Zr]))
            break e;
          if ((V || P) && (P = Q.window === Q ? Q : (P = Q.ownerDocument) ? P.defaultView || P.parentWindow : window, V ? (me = r.relatedTarget || r.toElement, V = q, me = me ? Ir(me) : null, me !== null && (tt = u(me), xe = me.tag, me !== tt || xe !== 5 && xe !== 27 && xe !== 6) && (me = null)) : (V = null, me = q), V !== me)) {
            if (xe = Ym, $ = "onMouseLeave", U = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (xe = Bm, $ = "onPointerLeave", U = "onPointerEnter", R = "pointer"), tt = V == null ? P : al(V), L = me == null ? P : al(me), P = new xe(
              $,
              R + "leave",
              V,
              r,
              Q
            ), P.target = tt, P.relatedTarget = L, $ = null, Ir(Q) === q && (xe = new xe(
              U,
              R + "enter",
              me,
              r,
              Q
            ), xe.target = L, xe.relatedTarget = tt, $ = xe), tt = $, V && me)
              t: {
                for (xe = m1, U = V, R = me, L = 0, $ = U; $; $ = xe($))
                  L++;
                $ = 0;
                for (var ve = R; ve; ve = xe(ve))
                  $++;
                for (; 0 < L - $; )
                  U = xe(U), L--;
                for (; 0 < $ - L; )
                  R = xe(R), $--;
                for (; L--; ) {
                  if (U === R || R !== null && U === R.alternate) {
                    xe = U;
                    break t;
                  }
                  U = xe(U), R = xe(R);
                }
                xe = null;
              }
            else xe = null;
            V !== null && Ng(
              J,
              P,
              V,
              xe,
              !1
            ), me !== null && tt !== null && Ng(
              J,
              tt,
              me,
              xe,
              !0
            );
          }
        }
        e: {
          if (P = q ? al(q) : window, V = P.nodeName && P.nodeName.toLowerCase(), V === "select" || V === "input" && P.type === "file")
            var Ge = Xm;
          else if (Vm(P))
            if (Qm)
              Ge = Ew;
            else {
              Ge = Sw;
              var pe = ww;
            }
          else
            V = P.nodeName, !V || V.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? q && _c(q.elementType) && (Ge = Xm) : Ge = Cw;
          if (Ge && (Ge = Ge(e, q))) {
            Fm(
              J,
              Ge,
              r,
              Q
            );
            break e;
          }
          pe && pe(e, P, q), e === "focusout" && q && P.type === "number" && q.memoizedProps.value != null && Dc(P, "number", P.value);
        }
        switch (pe = q ? al(q) : window, e) {
          case "focusin":
            (Vm(pe) || pe.contentEditable === "true") && (oo = pe, Gc = q, dl = null);
            break;
          case "focusout":
            dl = Gc = oo = null;
            break;
          case "mousedown":
            Wc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wc = !1, nh(J, r, Q);
            break;
          case "selectionchange":
            if (Ow) break;
          case "keydown":
          case "keyup":
            nh(J, r, Q);
        }
        var _e;
        if (Bc)
          e: {
            switch (e) {
              case "compositionstart":
                var He = "onCompositionStart";
                break e;
              case "compositionend":
                He = "onCompositionEnd";
                break e;
              case "compositionupdate":
                He = "onCompositionUpdate";
                break e;
            }
            He = void 0;
          }
        else
          ro ? Gm(e, r) && (He = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (He = "onCompositionStart");
        He && (Lm && r.locale !== "ko" && (ro || He !== "onCompositionStart" ? He === "onCompositionEnd" && ro && (_e = zm()) : (Na = Q, Rc = "value" in Na ? Na.value : Na.textContent, ro = !0)), pe = ss(q, He), 0 < pe.length && (He = new Um(
          He,
          e,
          null,
          r,
          Q
        ), J.push({ event: He, listeners: pe }), _e ? He.data = _e : (_e = Wm(r), _e !== null && (He.data = _e)))), (_e = gw ? yw(e, r) : vw(e, r)) && (He = ss(q, "onBeforeInput"), 0 < He.length && (pe = new Um(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          Q
        ), J.push({
          event: pe,
          listeners: He
        }), pe.data = _e)), c1(
          J,
          e,
          q,
          r,
          Q
        );
      }
      Dg(J, t);
    });
  }
  function Yl(e, t, r) {
    return {
      instance: e,
      listener: t,
      currentTarget: r
    };
  }
  function ss(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var c = e, f = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = rl(e, r), c != null && i.unshift(
        Yl(e, c, f)
      ), c = rl(e, t), c != null && i.push(
        Yl(e, c, f)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function m1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ng(e, t, r, i, c) {
    for (var f = t._reactName, y = []; r !== null && r !== i; ) {
      var S = r, j = S.alternate, q = S.stateNode;
      if (S = S.tag, j !== null && j === i) break;
      S !== 5 && S !== 26 && S !== 27 || q === null || (j = q, c ? (q = rl(r, f), q != null && y.unshift(
        Yl(r, q, j)
      )) : c || (q = rl(r, f), q != null && y.push(
        Yl(r, q, j)
      ))), r = r.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var h1 = /\r\n?/g, p1 = /\u0000|\uFFFD/g;
  function Ag(e) {
    return (typeof e == "string" ? e : "" + e).replace(h1, `
`).replace(p1, "");
  }
  function kg(e, t) {
    return t = Ag(t), Ag(e) === t;
  }
  function et(e, t, r, i, c, f) {
    switch (r) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || to(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && to(e, "" + i);
        break;
      case "className":
        di(e, "class", i);
        break;
      case "tabIndex":
        di(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        di(e, r, i);
        break;
      case "style":
        km(e, i, f);
        break;
      case "data":
        if (t !== "object") {
          di(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(r);
          break;
        }
        i = hi("" + i), e.setAttribute(r, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (r === "formAction" ? (t !== "input" && et(e, t, "name", c.name, c, null), et(
            e,
            t,
            "formEncType",
            c.formEncType,
            c,
            null
          ), et(
            e,
            t,
            "formMethod",
            c.formMethod,
            c,
            null
          ), et(
            e,
            t,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (et(e, t, "encType", c.encType, c, null), et(e, t, "method", c.method, c, null), et(e, t, "target", c.target, c, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(r);
          break;
        }
        i = hi("" + i), e.setAttribute(r, i);
        break;
      case "onClick":
        i != null && (e.onclick = Kn);
        break;
      case "onScroll":
        i != null && je("scroll", e);
        break;
      case "onScrollEnd":
        i != null && je("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(o(61));
          if (r = i.__html, r != null) {
            if (c.children != null) throw Error(o(60));
            e.innerHTML = r;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        r = hi("" + i), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          r
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(r, "" + i) : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(r, "") : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        i === !0 ? e.setAttribute(r, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(r, i) : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(r, i) : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(r) : e.setAttribute(r, i);
        break;
      case "popover":
        je("beforetoggle", e), je("toggle", e), fi(e, "popover", i);
        break;
      case "xlinkActuate":
        $n(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        $n(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        $n(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        $n(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        $n(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        $n(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        $n(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        $n(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        $n(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        fi(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Gx.get(r) || r, fi(e, r, i));
    }
  }
  function gf(e, t, r, i, c, f) {
    switch (r) {
      case "style":
        km(e, i, f);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(o(61));
          if (r = i.__html, r != null) {
            if (c.children != null) throw Error(o(60));
            e.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof i == "string" ? to(e, i) : (typeof i == "number" || typeof i == "bigint") && to(e, "" + i);
        break;
      case "onScroll":
        i != null && je("scroll", e);
        break;
      case "onScrollEnd":
        i != null && je("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = Kn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Cm.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (c = r.endsWith("Capture"), t = r.slice(2, c ? r.length - 7 : void 0), f = e[Vt] || null, f = f != null ? f[r] : null, typeof f == "function" && e.removeEventListener(t, f, c), typeof i == "function")) {
              typeof f != "function" && f !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(t, i, c);
              break e;
            }
            r in e ? e[r] = i : i === !0 ? e.setAttribute(r, "") : fi(e, r, i);
          }
    }
  }
  function Ht(e, t, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        je("error", e), je("load", e);
        var i = !1, c = !1, f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var y = r[f];
            if (y != null)
              switch (f) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  et(e, t, f, y, r, null);
              }
          }
        c && et(e, t, "srcSet", r.srcSet, r, null), i && et(e, t, "src", r.src, r, null);
        return;
      case "input":
        je("invalid", e);
        var S = f = y = c = null, j = null, q = null;
        for (i in r)
          if (r.hasOwnProperty(i)) {
            var Q = r[i];
            if (Q != null)
              switch (i) {
                case "name":
                  c = Q;
                  break;
                case "type":
                  y = Q;
                  break;
                case "checked":
                  j = Q;
                  break;
                case "defaultChecked":
                  q = Q;
                  break;
                case "value":
                  f = Q;
                  break;
                case "defaultValue":
                  S = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(o(137, t));
                  break;
                default:
                  et(e, t, i, Q, r, null);
              }
          }
        Dm(
          e,
          f,
          S,
          j,
          q,
          y,
          c,
          !1
        );
        return;
      case "select":
        je("invalid", e), i = y = f = null;
        for (c in r)
          if (r.hasOwnProperty(c) && (S = r[c], S != null))
            switch (c) {
              case "value":
                f = S;
                break;
              case "defaultValue":
                y = S;
                break;
              case "multiple":
                i = S;
              default:
                et(e, t, c, S, r, null);
            }
        t = f, r = y, e.multiple = !!i, t != null ? eo(e, !!i, t, !1) : r != null && eo(e, !!i, r, !0);
        return;
      case "textarea":
        je("invalid", e), f = c = i = null;
        for (y in r)
          if (r.hasOwnProperty(y) && (S = r[y], S != null))
            switch (y) {
              case "value":
                i = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
                f = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(91));
                break;
              default:
                et(e, t, y, S, r, null);
            }
        Nm(e, i, c, f);
        return;
      case "option":
        for (j in r)
          r.hasOwnProperty(j) && (i = r[j], i != null) && (j === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : et(e, t, j, i, r, null));
        return;
      case "dialog":
        je("beforetoggle", e), je("toggle", e), je("cancel", e), je("close", e);
        break;
      case "iframe":
      case "object":
        je("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Hl.length; i++)
          je(Hl[i], e);
        break;
      case "image":
        je("error", e), je("load", e);
        break;
      case "details":
        je("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        je("error", e), je("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in r)
          if (r.hasOwnProperty(q) && (i = r[q], i != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                et(e, t, q, i, r, null);
            }
        return;
      default:
        if (_c(t)) {
          for (Q in r)
            r.hasOwnProperty(Q) && (i = r[Q], i !== void 0 && gf(
              e,
              t,
              Q,
              i,
              r,
              void 0
            ));
          return;
        }
    }
    for (S in r)
      r.hasOwnProperty(S) && (i = r[S], i != null && et(e, t, S, i, r, null));
  }
  function g1(e, t, r, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, f = null, y = null, S = null, j = null, q = null, Q = null;
        for (V in r) {
          var J = r[V];
          if (r.hasOwnProperty(V) && J != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = J;
              default:
                i.hasOwnProperty(V) || et(e, t, V, null, i, J);
            }
        }
        for (var P in i) {
          var V = i[P];
          if (J = r[P], i.hasOwnProperty(P) && (V != null || J != null))
            switch (P) {
              case "type":
                f = V;
                break;
              case "name":
                c = V;
                break;
              case "checked":
                q = V;
                break;
              case "defaultChecked":
                Q = V;
                break;
              case "value":
                y = V;
                break;
              case "defaultValue":
                S = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(o(137, t));
                break;
              default:
                V !== J && et(
                  e,
                  t,
                  P,
                  V,
                  i,
                  J
                );
            }
        }
        Mc(
          e,
          y,
          S,
          j,
          q,
          Q,
          f,
          c
        );
        return;
      case "select":
        V = y = S = P = null;
        for (f in r)
          if (j = r[f], r.hasOwnProperty(f) && j != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                V = j;
              default:
                i.hasOwnProperty(f) || et(
                  e,
                  t,
                  f,
                  null,
                  i,
                  j
                );
            }
        for (c in i)
          if (f = i[c], j = r[c], i.hasOwnProperty(c) && (f != null || j != null))
            switch (c) {
              case "value":
                P = f;
                break;
              case "defaultValue":
                S = f;
                break;
              case "multiple":
                y = f;
              default:
                f !== j && et(
                  e,
                  t,
                  c,
                  f,
                  i,
                  j
                );
            }
        t = S, r = y, i = V, P != null ? eo(e, !!r, P, !1) : !!i != !!r && (t != null ? eo(e, !!r, t, !0) : eo(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        V = P = null;
        for (S in r)
          if (c = r[S], r.hasOwnProperty(S) && c != null && !i.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                et(e, t, S, null, i, c);
            }
        for (y in i)
          if (c = i[y], f = r[y], i.hasOwnProperty(y) && (c != null || f != null))
            switch (y) {
              case "value":
                P = c;
                break;
              case "defaultValue":
                V = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                c !== f && et(e, t, y, c, i, f);
            }
        _m(e, P, V);
        return;
      case "option":
        for (var me in r)
          P = r[me], r.hasOwnProperty(me) && P != null && !i.hasOwnProperty(me) && (me === "selected" ? e.selected = !1 : et(
            e,
            t,
            me,
            null,
            i,
            P
          ));
        for (j in i)
          P = i[j], V = r[j], i.hasOwnProperty(j) && P !== V && (P != null || V != null) && (j === "selected" ? e.selected = P && typeof P != "function" && typeof P != "symbol" : et(
            e,
            t,
            j,
            P,
            i,
            V
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var xe in r)
          P = r[xe], r.hasOwnProperty(xe) && P != null && !i.hasOwnProperty(xe) && et(e, t, xe, null, i, P);
        for (q in i)
          if (P = i[q], V = r[q], i.hasOwnProperty(q) && P !== V && (P != null || V != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null)
                  throw Error(o(137, t));
                break;
              default:
                et(
                  e,
                  t,
                  q,
                  P,
                  i,
                  V
                );
            }
        return;
      default:
        if (_c(t)) {
          for (var tt in r)
            P = r[tt], r.hasOwnProperty(tt) && P !== void 0 && !i.hasOwnProperty(tt) && gf(
              e,
              t,
              tt,
              void 0,
              i,
              P
            );
          for (Q in i)
            P = i[Q], V = r[Q], !i.hasOwnProperty(Q) || P === V || P === void 0 && V === void 0 || gf(
              e,
              t,
              Q,
              P,
              i,
              V
            );
          return;
        }
    }
    for (var U in r)
      P = r[U], r.hasOwnProperty(U) && P != null && !i.hasOwnProperty(U) && et(e, t, U, null, i, P);
    for (J in i)
      P = i[J], V = r[J], !i.hasOwnProperty(J) || P === V || P == null && V == null || et(e, t, J, P, i, V);
  }
  function jg(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function y1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, r = performance.getEntriesByType("resource"), i = 0; i < r.length; i++) {
        var c = r[i], f = c.transferSize, y = c.initiatorType, S = c.duration;
        if (f && S && jg(y)) {
          for (y = 0, S = c.responseEnd, i += 1; i < r.length; i++) {
            var j = r[i], q = j.startTime;
            if (q > S) break;
            var Q = j.transferSize, J = j.initiatorType;
            Q && jg(J) && (j = j.responseEnd, y += Q * (j < S ? 1 : (S - q) / (j - q)));
          }
          if (--i, t += 8 * (f + y) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var yf = null, vf = null;
  function cs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function bf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var xf = null;
  function v1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === xf ? !1 : (xf = e, !0) : (xf = null, !1);
  }
  var Hg = typeof setTimeout == "function" ? setTimeout : void 0, b1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Yg = typeof Promise == "function" ? Promise : void 0, x1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yg < "u" ? function(e) {
    return Yg.resolve(null).then(e).catch(w1);
  } : Hg;
  function w1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Xa(e) {
    return e === "head";
  }
  function Ug(e, t) {
    var r = t, i = 0;
    do {
      var c = r.nextSibling;
      if (e.removeChild(r), c && c.nodeType === 8)
        if (r = c.data, r === "/$" || r === "/&") {
          if (i === 0) {
            e.removeChild(c), jo(t);
            return;
          }
          i--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          i++;
        else if (r === "html")
          Ul(e.ownerDocument.documentElement);
        else if (r === "head") {
          r = e.ownerDocument.head, Ul(r);
          for (var f = r.firstChild; f; ) {
            var y = f.nextSibling, S = f.nodeName;
            f[nl] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = y;
          }
        } else
          r === "body" && Ul(e.ownerDocument.body);
      r = c;
    } while (r);
    jo(t);
  }
  function Bg(e, t) {
    var r = e;
    e = 0;
    do {
      var i = r.nextSibling;
      if (r.nodeType === 1 ? t ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (t ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), i && i.nodeType === 8)
        if (r = i.data, r === "/$") {
          if (e === 0) break;
          e--;
        } else
          r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || e++;
      r = i;
    } while (r);
  }
  function wf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (t = t.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wf(r), Tc(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function S1(e, t, r, i) {
    for (; e.nodeType === 1; ) {
      var c = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[nl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = bn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function C1(e, t, r) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = bn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Lg(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = bn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Sf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Cf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function E1(e, t) {
    var r = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || r.readyState !== "loading")
      t();
    else {
      var i = function() {
        t(), r.removeEventListener("DOMContentLoaded", i);
      };
      r.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
    }
  }
  function bn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Ef = null;
  function qg(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (t === 0)
            return bn(e.nextSibling);
          t--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Pg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (t === 0) return e;
          t--;
        } else r !== "/$" && r !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Gg(e, t, r) {
    switch (t = cs(r), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Ul(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Tc(e);
  }
  var xn = /* @__PURE__ */ new Map(), Wg = /* @__PURE__ */ new Set();
  function us(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ha = F.d;
  F.d = {
    f: T1,
    r: O1,
    D: M1,
    C: D1,
    L: _1,
    m: N1,
    X: k1,
    S: A1,
    M: j1
  };
  function T1() {
    var e = ha.f(), t = ts();
    return e || t;
  }
  function O1(e) {
    var t = $r(e);
    t !== null && t.tag === 5 && t.type === "form" ? ip(t) : ha.r(e);
  }
  var No = typeof document > "u" ? null : document;
  function Vg(e, t, r) {
    var i = No;
    if (i && typeof t == "string" && t) {
      var c = dn(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof r == "string" && (c += '[crossorigin="' + r + '"]'), Wg.has(c) || (Wg.add(c), e = { rel: e, crossOrigin: r, href: t }, i.querySelector(c) === null && (t = i.createElement("link"), Ht(t, "link", e), Dt(t), i.head.appendChild(t)));
    }
  }
  function M1(e) {
    ha.D(e), Vg("dns-prefetch", e, null);
  }
  function D1(e, t) {
    ha.C(e, t), Vg("preconnect", e, t);
  }
  function _1(e, t, r) {
    ha.L(e, t, r);
    var i = No;
    if (i && e && t) {
      var c = 'link[rel="preload"][as="' + dn(t) + '"]';
      t === "image" && r && r.imageSrcSet ? (c += '[imagesrcset="' + dn(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (c += '[imagesizes="' + dn(
        r.imageSizes
      ) + '"]')) : c += '[href="' + dn(e) + '"]';
      var f = c;
      switch (t) {
        case "style":
          f = Ao(e);
          break;
        case "script":
          f = ko(e);
      }
      xn.has(f) || (e = v(
        {
          rel: "preload",
          href: t === "image" && r && r.imageSrcSet ? void 0 : e,
          as: t
        },
        r
      ), xn.set(f, e), i.querySelector(c) !== null || t === "style" && i.querySelector(Bl(f)) || t === "script" && i.querySelector(Ll(f)) || (t = i.createElement("link"), Ht(t, "link", e), Dt(t), i.head.appendChild(t)));
    }
  }
  function N1(e, t) {
    ha.m(e, t);
    var r = No;
    if (r && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + dn(i) + '"][href="' + dn(e) + '"]', f = c;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = ko(e);
      }
      if (!xn.has(f) && (e = v({ rel: "modulepreload", href: e }, t), xn.set(f, e), r.querySelector(c) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Ll(f)))
              return;
        }
        i = r.createElement("link"), Ht(i, "link", e), Dt(i), r.head.appendChild(i);
      }
    }
  }
  function A1(e, t, r) {
    ha.S(e, t, r);
    var i = No;
    if (i && e) {
      var c = Kr(i).hoistableStyles, f = Ao(e);
      t = t || "default";
      var y = c.get(f);
      if (!y) {
        var S = { loading: 0, preload: null };
        if (y = i.querySelector(
          Bl(f)
        ))
          S.loading = 5;
        else {
          e = v(
            { rel: "stylesheet", href: e, "data-precedence": t },
            r
          ), (r = xn.get(f)) && Tf(e, r);
          var j = y = i.createElement("link");
          Dt(j), Ht(j, "link", e), j._p = new Promise(function(q, Q) {
            j.onload = q, j.onerror = Q;
          }), j.addEventListener("load", function() {
            S.loading |= 1;
          }), j.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, fs(y, t, i);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: S
        }, c.set(f, y);
      }
    }
  }
  function k1(e, t) {
    ha.X(e, t);
    var r = No;
    if (r && e) {
      var i = Kr(r).hoistableScripts, c = ko(e), f = i.get(c);
      f || (f = r.querySelector(Ll(c)), f || (e = v({ src: e, async: !0 }, t), (t = xn.get(c)) && Of(e, t), f = r.createElement("script"), Dt(f), Ht(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(c, f));
    }
  }
  function j1(e, t) {
    ha.M(e, t);
    var r = No;
    if (r && e) {
      var i = Kr(r).hoistableScripts, c = ko(e), f = i.get(c);
      f || (f = r.querySelector(Ll(c)), f || (e = v({ src: e, async: !0, type: "module" }, t), (t = xn.get(c)) && Of(e, t), f = r.createElement("script"), Dt(f), Ht(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(c, f));
    }
  }
  function Fg(e, t, r, i) {
    var c = (c = I.current) ? us(c) : null;
    if (!c) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (t = Ao(r.href), r = Kr(
          c
        ).hoistableStyles, i = r.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = Ao(r.href);
          var f = Kr(
            c
          ).hoistableStyles, y = f.get(e);
          if (y || (c = c.ownerDocument || c, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, y), (f = c.querySelector(
            Bl(e)
          )) && !f._p && (y.instance = f, y.state.loading = 5), xn.has(e) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, xn.set(e, r), f || R1(
            c,
            e,
            r,
            y.state
          ))), t && i === null)
            throw Error(o(528, ""));
          return y;
        }
        if (t && i !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = r.async, r = r.src, typeof r == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ko(r), r = Kr(
          c
        ).hoistableScripts, i = r.get(t), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, r.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Ao(e) {
    return 'href="' + dn(e) + '"';
  }
  function Bl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xg(e) {
    return v({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function R1(e, t, r, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), Ht(t, "link", r), Dt(t), e.head.appendChild(t));
  }
  function ko(e) {
    return '[src="' + dn(e) + '"]';
  }
  function Ll(e) {
    return "script[async]" + e;
  }
  function Qg(e, t, r) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + dn(r.href) + '"]'
          );
          if (i)
            return t.instance = i, Dt(i), i;
          var c = v({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), Dt(i), Ht(i, "style", c), fs(i, r.precedence, e), t.instance = i;
        case "stylesheet":
          c = Ao(r.href);
          var f = e.querySelector(
            Bl(c)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, Dt(f), f;
          i = Xg(r), (c = xn.get(c)) && Tf(i, c), f = (e.ownerDocument || e).createElement("link"), Dt(f);
          var y = f;
          return y._p = new Promise(function(S, j) {
            y.onload = S, y.onerror = j;
          }), Ht(f, "link", i), t.state.loading |= 4, fs(f, r.precedence, e), t.instance = f;
        case "script":
          return f = ko(r.src), (c = e.querySelector(
            Ll(f)
          )) ? (t.instance = c, Dt(c), c) : (i = r, (c = xn.get(f)) && (i = v({}, r), Of(i, c)), e = e.ownerDocument || e, c = e.createElement("script"), Dt(c), Ht(c, "link", i), e.head.appendChild(c), t.instance = c);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, fs(i, r.precedence, e));
    return t.instance;
  }
  function fs(e, t, r) {
    for (var i = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = i.length ? i[i.length - 1] : null, f = c, y = 0; y < i.length; y++) {
      var S = i[y];
      if (S.dataset.precedence === t) f = S;
      else if (f !== c) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = r.nodeType === 9 ? r.head : r, t.insertBefore(e, t.firstChild));
  }
  function Tf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Of(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ds = null;
  function Zg(e, t, r) {
    if (ds === null) {
      var i = /* @__PURE__ */ new Map(), c = ds = /* @__PURE__ */ new Map();
      c.set(r, i);
    } else
      c = ds, i = c.get(r), i || (i = /* @__PURE__ */ new Map(), c.set(r, i));
    if (i.has(e)) return i;
    for (i.set(e, null), r = r.getElementsByTagName(e), c = 0; c < r.length; c++) {
      var f = r[c];
      if (!(f[nl] || f[kt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = f.getAttribute(t) || "";
        y = e + y;
        var S = i.get(y);
        S ? S.push(f) : i.set(y, [f]);
      }
    }
    return i;
  }
  function Ig(e, t, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function z1(e, t, r) {
    if (r === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function $g(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function H1(e, t, r, i) {
    if (r.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var c = Ao(i.href), f = t.querySelector(
          Bl(c)
        );
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ms.bind(e), t.then(e, e)), r.state.loading |= 4, r.instance = f, Dt(f);
          return;
        }
        f = t.ownerDocument || t, i = Xg(i), (c = xn.get(c)) && Tf(i, c), f = f.createElement("link"), Dt(f);
        var y = f;
        y._p = new Promise(function(S, j) {
          y.onload = S, y.onerror = j;
        }), Ht(f, "link", i), r.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, t), (t = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = ms.bind(e), t.addEventListener("load", r), t.addEventListener("error", r));
    }
  }
  var Mf = 0;
  function Y1(e, t) {
    return e.stylesheets && e.count === 0 && ps(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var i = setTimeout(function() {
        if (e.stylesheets && ps(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Mf === 0 && (Mf = 62500 * y1());
      var c = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ps(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > Mf ? 50 : 800) + t
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(c);
      };
    } : null;
  }
  function ms() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ps(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var hs = null;
  function ps(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, hs = /* @__PURE__ */ new Map(), t.forEach(U1, e), hs = null, ms.call(e));
  }
  function U1(e, t) {
    if (!(t.state.loading & 4)) {
      var r = hs.get(e);
      if (r) var i = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), hs.set(e, r);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < c.length; f++) {
          var y = c[f];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (r.set(y.dataset.precedence, y), i = y);
        }
        i && r.set(null, i);
      }
      c = t.instance, y = c.getAttribute("data-precedence"), f = r.get(y) || i, f === i && r.set(null, c), r.set(y, c), this.count++, i = ms.bind(this), c.addEventListener("load", i), c.addEventListener("error", i), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ql = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function B1(e, t, r, i, c, f, y, S, j) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mr(0), this.hiddenUpdates = mr(null), this.identifierPrefix = i, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = j, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kg(e, t, r, i, c, f, y, S, j, q, Q, J) {
    return e = new B1(
      e,
      t,
      r,
      y,
      j,
      q,
      Q,
      J,
      S
    ), t = 1, f === !0 && (t |= 24), f = tn(3, null, null, t), e.current = f, f.stateNode = e, t = ou(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: i,
      isDehydrated: r,
      cache: t
    }, cu(f), e;
  }
  function Jg(e) {
    return e ? (e = so, e) : so;
  }
  function ey(e, t, r, i, c, f) {
    c = Jg(c), i.context === null ? i.context = c : i.pendingContext = c, i = Ha(t), i.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (i.callback = f), r = Ya(e, i, t), r !== null && ($t(r, e, t), bl(r, e, t));
  }
  function ty(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Df(e, t) {
    ty(e, t), (e = e.alternate) && ty(e, t);
  }
  function ny(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = vr(e, 67108864);
      t !== null && $t(t, e, 67108864), Df(e, 67108864);
    }
  }
  function ay(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ln();
      t = Sc(t);
      var r = vr(e, t);
      r !== null && $t(r, e, t), Df(e, t);
    }
  }
  var gs = !0;
  function L1(e, t, r, i) {
    var c = H.T;
    H.T = null;
    var f = F.p;
    try {
      F.p = 2, _f(e, t, r, i);
    } finally {
      F.p = f, H.T = c;
    }
  }
  function q1(e, t, r, i) {
    var c = H.T;
    H.T = null;
    var f = F.p;
    try {
      F.p = 8, _f(e, t, r, i);
    } finally {
      F.p = f, H.T = c;
    }
  }
  function _f(e, t, r, i) {
    if (gs) {
      var c = Nf(i);
      if (c === null)
        pf(
          e,
          t,
          i,
          ys,
          r
        ), oy(e, i);
      else if (G1(
        c,
        e,
        t,
        r,
        i
      ))
        i.stopPropagation();
      else if (oy(e, i), t & 4 && -1 < P1.indexOf(e)) {
        for (; c !== null; ) {
          var f = $r(c);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var y = mt(f.pendingLanes);
                  if (y !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; y; ) {
                      var j = 1 << 31 - Gt(y);
                      S.entanglements[1] |= j, y &= ~j;
                    }
                    zn(f), (Fe & 6) === 0 && (Ji = At() + 500, zl(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = vr(f, 2), S !== null && $t(S, f, 2), ts(), Df(f, 2);
            }
          if (f = Nf(i), f === null && pf(
            e,
            t,
            i,
            ys,
            r
          ), f === c) break;
          c = f;
        }
        c !== null && i.stopPropagation();
      } else
        pf(
          e,
          t,
          i,
          null,
          r
        );
    }
  }
  function Nf(e) {
    return e = Ac(e), Af(e);
  }
  var ys = null;
  function Af(e) {
    if (ys = null, e = Ir(e), e !== null) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var r = t.tag;
        if (r === 13) {
          if (e = d(t), e !== null) return e;
          e = null;
        } else if (r === 31) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ys = e, null;
  }
  function ry(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (tl()) {
          case li:
            return 2;
          case ii:
            return 8;
          case Qr:
          case yc:
            return 32;
          case si:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kf = !1, Qa = null, Za = null, Ia = null, Pl = /* @__PURE__ */ new Map(), Gl = /* @__PURE__ */ new Map(), $a = [], P1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function oy(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qa = null;
        break;
      case "dragenter":
      case "dragleave":
        Za = null;
        break;
      case "mouseover":
      case "mouseout":
        Ia = null;
        break;
      case "pointerover":
      case "pointerout":
        Pl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gl.delete(t.pointerId);
    }
  }
  function Wl(e, t, r, i, c, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: r,
      eventSystemFlags: i,
      nativeEvent: f,
      targetContainers: [c]
    }, t !== null && (t = $r(t), t !== null && ny(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function G1(e, t, r, i, c) {
    switch (t) {
      case "focusin":
        return Qa = Wl(
          Qa,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "dragenter":
        return Za = Wl(
          Za,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "mouseover":
        return Ia = Wl(
          Ia,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "pointerover":
        var f = c.pointerId;
        return Pl.set(
          f,
          Wl(
            Pl.get(f) || null,
            e,
            t,
            r,
            i,
            c
          )
        ), !0;
      case "gotpointercapture":
        return f = c.pointerId, Gl.set(
          f,
          Wl(
            Gl.get(f) || null,
            e,
            t,
            r,
            i,
            c
          )
        ), !0;
    }
    return !1;
  }
  function ly(e) {
    var t = Ir(e.target);
    if (t !== null) {
      var r = u(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = d(r), t !== null) {
            e.blockedOn = t, xm(e.priority, function() {
              ay(r);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(r), t !== null) {
            e.blockedOn = t, xm(e.priority, function() {
              ay(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function vs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Nf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(
          r.type,
          r
        );
        Nc = i, r.target.dispatchEvent(i), Nc = null;
      } else
        return t = $r(r), t !== null && ny(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function iy(e, t, r) {
    vs(e) && r.delete(t);
  }
  function W1() {
    kf = !1, Qa !== null && vs(Qa) && (Qa = null), Za !== null && vs(Za) && (Za = null), Ia !== null && vs(Ia) && (Ia = null), Pl.forEach(iy), Gl.forEach(iy);
  }
  function bs(e, t) {
    e.blockedOn === t && (e.blockedOn = null, kf || (kf = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      W1
    )));
  }
  var xs = null;
  function sy(e) {
    xs !== e && (xs = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        xs === e && (xs = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t], i = e[t + 1], c = e[t + 2];
          if (typeof i != "function") {
            if (Af(i || r) === null)
              continue;
            break;
          }
          var f = $r(r);
          f !== null && (e.splice(t, 3), t -= 3, _u(
            f,
            {
              pending: !0,
              data: c,
              method: r.method,
              action: i
            },
            i,
            c
          ));
        }
      }
    ));
  }
  function jo(e) {
    function t(j) {
      return bs(j, e);
    }
    Qa !== null && bs(Qa, e), Za !== null && bs(Za, e), Ia !== null && bs(Ia, e), Pl.forEach(t), Gl.forEach(t);
    for (var r = 0; r < $a.length; r++) {
      var i = $a[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < $a.length && (r = $a[0], r.blockedOn === null); )
      ly(r), r.blockedOn === null && $a.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (i = 0; i < r.length; i += 3) {
        var c = r[i], f = r[i + 1], y = c[Vt] || null;
        if (typeof f == "function")
          y || sy(r);
        else if (y) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (c = f, y = f[Vt] || null)
              S = y.formAction;
            else if (Af(c) !== null) continue;
          } else S = y.action;
          typeof S == "function" ? r[i + 1] = S : (r.splice(i, 3), i -= 3), sy(r);
        }
      }
  }
  function cy() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(y) {
            return c = y;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      c !== null && (c(), c = null), i || setTimeout(r, 20);
    }
    function r() {
      if (!i && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, c = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(r, 100), function() {
        i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null);
      };
    }
  }
  function jf(e) {
    this._internalRoot = e;
  }
  ws.prototype.render = jf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var r = t.current, i = ln();
    ey(r, i, e, t, null, null);
  }, ws.prototype.unmount = jf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ey(e.current, 2, null, e, null, null), ts(), t[Zr] = null;
    }
  };
  function ws(e) {
    this._internalRoot = e;
  }
  ws.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = bm();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < $a.length && t !== 0 && t < $a[r].priority; r++) ;
      $a.splice(r, 0, e), r === 0 && ly(e);
    }
  };
  var uy = a.version;
  if (uy !== "19.2.3")
    throw Error(
      o(
        527,
        uy,
        "19.2.3"
      )
    );
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = p(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var V1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ss.isDisabled && Ss.supportsFiber)
      try {
        fr = Ss.inject(
          V1
        ), Pt = Ss;
      } catch {
      }
  }
  return Fl.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var r = !1, i = "", c = yp, f = vp, y = bp;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (y = t.onRecoverableError)), t = Kg(
      e,
      1,
      !1,
      null,
      null,
      r,
      i,
      null,
      c,
      f,
      y,
      cy
    ), e[Zr] = t.current, hf(e), new jf(t);
  }, Fl.hydrateRoot = function(e, t, r) {
    if (!s(e)) throw Error(o(299));
    var i = !1, c = "", f = yp, y = vp, S = bp, j = null;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onUncaughtError !== void 0 && (f = r.onUncaughtError), r.onCaughtError !== void 0 && (y = r.onCaughtError), r.onRecoverableError !== void 0 && (S = r.onRecoverableError), r.formState !== void 0 && (j = r.formState)), t = Kg(
      e,
      1,
      !0,
      t,
      r ?? null,
      i,
      c,
      j,
      f,
      y,
      S,
      cy
    ), t.context = Jg(null), r = t.current, i = ln(), i = Sc(i), c = Ha(i), c.callback = null, Ya(r, c, i), r = i, t.current.lanes = r, In(t, r), zn(t), e[Zr] = t.current, hf(e), new ws(t);
  }, Fl.version = "19.2.3", Fl;
}
var Cy;
function nS() {
  if (Cy) return Hf.exports;
  Cy = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Hf.exports = tS(), Hf.exports;
}
var aS = nS(), x = Ed();
const ue = /* @__PURE__ */ Q1(x), qr = /* @__PURE__ */ X1({
  __proto__: null,
  default: ue
}, [x]);
var rS = Object.defineProperty, Td = (n, a) => rS(n, "name", { value: a, configurable: !0 });
function rd(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
Td(rd, "setRef");
function Nv(...n) {
  return (a) => {
    let l = !1;
    const o = n.map((s) => {
      const u = rd(s, a);
      return !l && typeof u == "function" && (l = !0), u;
    });
    if (l)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const u = o[s];
          typeof u == "function" ? u() : rd(n[s], null);
        }
      };
  };
}
Td(Nv, "composeRefs");
function at(...n) {
  return x.useCallback(Nv(...n), n);
}
Td(at, "useComposedRefs");
var oS = Object.defineProperty, un = (n, a) => oS(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Sa(n) {
  const a = x.forwardRef((l, o) => {
    let { children: s, ...u } = l, d = null, m = !1;
    const h = [];
    s = Hv(s), x.Children.forEach(s, (w) => {
      if (Rv(w)) {
        m = !0;
        const T = w;
        let E = "child" in T.props ? T.props.child : T.props.children;
        for (; Od(E) && typeof Us == "function"; )
          E = Us(E._payload);
        d = sS(T, E), h.push(d?.props?.children);
      } else
        h.push(w);
    }), d ? d = x.cloneElement(d, void 0, h) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && x.Children.count(s) === 1 && x.isValidElement(s) && (d = s)
    );
    const p = d ? jv(d) : void 0, b = at(o, p);
    if (!d) {
      if (s || s === 0)
        throw new Error(
          m ? fS(n) : uS(n)
        );
      return s;
    }
    const v = kv(u, d.props ?? {});
    return d.type !== x.Fragment && (v.ref = o ? b : p), x.cloneElement(d, v);
  });
  return a.displayName = `${n}.Slot`, a;
}
un(Sa, "createSlot");
var lS = /* @__PURE__ */ Sa("Slot"), Av = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function iS(n) {
  const a = /* @__PURE__ */ un((l) => "child" in l ? l.children(l.child) : l.children, "Slottable");
  return a.displayName = `${n}.Slottable`, a.__radixId = Av, a;
}
un(iS, "createSlottable");
var sS = /* @__PURE__ */ un((n, a) => "child" in n.props ? x.isValidElement(a) ? x.cloneElement(a, void 0, n.props.children(a.props.children)) : null : x.isValidElement(a) ? a : null, "getSlottableElementFromSlottable");
function kv(n, a) {
  const l = { ...a };
  for (const o in a) {
    const s = n[o], u = a[o];
    /^on[A-Z]/.test(o) ? s && u ? l[o] = (...m) => {
      const h = u(...m);
      return s(...m), h;
    } : s && (l[o] = s) : o === "style" ? l[o] = { ...s, ...u } : o === "className" ? l[o] = [s, u].filter(Boolean).join(" ") : o === "aria-describedby" && (l[o] = Yv(u, s));
  }
  return { ...n, ...l };
}
un(kv, "mergeProps");
function jv(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning;
  return l ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
un(jv, "getElementRef");
function Rv(n) {
  return x.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Av;
}
un(Rv, "isSlottable");
var cS = /* @__PURE__ */ Symbol.for("react.lazy");
function Od(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === cS && "_payload" in n && zv(n._payload);
}
un(Od, "isLazyComponent");
function zv(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
un(zv, "isPromiseLike");
function Hv(n) {
  let a = n;
  for (; Od(a) && typeof Us == "function"; )
    a = Us(a._payload);
  return a;
}
un(Hv, "useUnwrappedLazy");
function Yv(...n) {
  const a = /* @__PURE__ */ new Set();
  for (const l of n)
    if (typeof l == "string")
      for (const o of String(l).trim().split(/\s+/))
        o && a.add(o);
  return a.size > 0 ? Array.from(a).join(" ") : void 0;
}
un(Yv, "concatAriaDescribedby");
var uS = /* @__PURE__ */ un((n) => `${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), fS = /* @__PURE__ */ un((n) => `${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Us = qr[" use ".trim().toString()];
function Uv(n) {
  var a, l, o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (a = 0; a < s; a++) n[a] && (l = Uv(n[a])) && (o && (o += " "), o += l);
  } else for (l in n) n[l] && (o && (o += " "), o += l);
  return o;
}
function Bv() {
  for (var n, a, l = 0, o = "", s = arguments.length; l < s; l++) (n = arguments[l]) && (a = Uv(n)) && (o && (o += " "), o += a);
  return o;
}
const Ey = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, Ty = Bv, dS = (n, a) => (l) => {
  var o;
  if (a?.variants == null) return Ty(n, l?.class, l?.className);
  const { variants: s, defaultVariants: u } = a, d = Object.keys(s).map((p) => {
    const b = l?.[p], v = u?.[p];
    if (b === null) return null;
    const w = Ey(b) || Ey(v);
    return s[p][w];
  }), m = l && Object.entries(l).reduce((p, b) => {
    let [v, w] = b;
    return w === void 0 || (p[v] = w), p;
  }, {}), h = a == null || (o = a.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, b) => {
    let { class: v, className: w, ...T } = b;
    return Object.entries(T).every((E) => {
      let [O, C] = E;
      return Array.isArray(C) ? C.includes({
        ...u,
        ...m
      }[O]) : {
        ...u,
        ...m
      }[O] === C;
    }) ? [
      ...p,
      v,
      w
    ] : p;
  }, []);
  return Ty(n, d, h, l?.class, l?.className);
}, mS = (n, a) => {
  const l = new Array(n.length + a.length);
  for (let o = 0; o < n.length; o++)
    l[o] = n[o];
  for (let o = 0; o < a.length; o++)
    l[n.length + o] = a[o];
  return l;
}, hS = (n, a) => ({
  classGroupId: n,
  validator: a
}), Lv = (n = /* @__PURE__ */ new Map(), a = null, l) => ({
  nextPart: n,
  validators: a,
  classGroupId: l
}), Bs = "-", Oy = [], pS = "arbitrary..", gS = (n) => {
  const a = vS(n), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: o
  } = n;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return yS(d);
      const m = d.split(Bs), h = m[0] === "" && m.length > 1 ? 1 : 0;
      return qv(m, h, a);
    },
    getConflictingClassGroupIds: (d, m) => {
      if (m) {
        const h = o[d], p = l[d];
        return h ? p ? mS(p, h) : h : p || Oy;
      }
      return l[d] || Oy;
    }
  };
}, qv = (n, a, l) => {
  if (n.length - a === 0)
    return l.classGroupId;
  const s = n[a], u = l.nextPart.get(s);
  if (u) {
    const p = qv(n, a + 1, u);
    if (p) return p;
  }
  const d = l.validators;
  if (d === null)
    return;
  const m = a === 0 ? n.join(Bs) : n.slice(a).join(Bs), h = d.length;
  for (let p = 0; p < h; p++) {
    const b = d[p];
    if (b.validator(m))
      return b.classGroupId;
  }
}, yS = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const a = n.slice(1, -1), l = a.indexOf(":"), o = a.slice(0, l);
  return o ? pS + o : void 0;
})(), vS = (n) => {
  const {
    theme: a,
    classGroups: l
  } = n;
  return bS(l, a);
}, bS = (n, a) => {
  const l = Lv();
  for (const o in n) {
    const s = n[o];
    Md(s, l, o, a);
  }
  return l;
}, Md = (n, a, l, o) => {
  const s = n.length;
  for (let u = 0; u < s; u++) {
    const d = n[u];
    xS(d, a, l, o);
  }
}, xS = (n, a, l, o) => {
  if (typeof n == "string") {
    wS(n, a, l);
    return;
  }
  if (typeof n == "function") {
    SS(n, a, l, o);
    return;
  }
  CS(n, a, l, o);
}, wS = (n, a, l) => {
  const o = n === "" ? a : Pv(a, n);
  o.classGroupId = l;
}, SS = (n, a, l, o) => {
  if (ES(n)) {
    Md(n(o), a, l, o);
    return;
  }
  a.validators === null && (a.validators = []), a.validators.push(hS(l, n));
}, CS = (n, a, l, o) => {
  const s = Object.entries(n), u = s.length;
  for (let d = 0; d < u; d++) {
    const [m, h] = s[d];
    Md(h, Pv(a, m), l, o);
  }
}, Pv = (n, a) => {
  let l = n;
  const o = a.split(Bs), s = o.length;
  for (let u = 0; u < s; u++) {
    const d = o[u];
    let m = l.nextPart.get(d);
    m || (m = Lv(), l.nextPart.set(d, m)), l = m;
  }
  return l;
}, ES = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, TS = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const s = (u, d) => {
    l[u] = d, a++, a > n && (a = 0, o = l, l = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(u) {
      let d = l[u];
      if (d !== void 0)
        return d;
      if ((d = o[u]) !== void 0)
        return s(u, d), d;
    },
    set(u, d) {
      u in l ? l[u] = d : s(u, d);
    }
  };
}, od = "!", My = ":", OS = [], Dy = (n, a, l, o, s) => ({
  modifiers: n,
  hasImportantModifier: a,
  baseClassName: l,
  maybePostfixModifierPosition: o,
  isExternal: s
}), MS = (n) => {
  const {
    prefix: a,
    experimentalParseClassName: l
  } = n;
  let o = (s) => {
    const u = [];
    let d = 0, m = 0, h = 0, p;
    const b = s.length;
    for (let O = 0; O < b; O++) {
      const C = s[O];
      if (d === 0 && m === 0) {
        if (C === My) {
          u.push(s.slice(h, O)), h = O + 1;
          continue;
        }
        if (C === "/") {
          p = O;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" ? d-- : C === "(" ? m++ : C === ")" && m--;
    }
    const v = u.length === 0 ? s : s.slice(h);
    let w = v, T = !1;
    v.endsWith(od) ? (w = v.slice(0, -1), T = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      v.startsWith(od) && (w = v.slice(1), T = !0)
    );
    const E = p && p > h ? p - h : void 0;
    return Dy(u, T, w, E);
  };
  if (a) {
    const s = a + My, u = o;
    o = (d) => d.startsWith(s) ? u(d.slice(s.length)) : Dy(OS, !1, d, void 0, !0);
  }
  if (l) {
    const s = o;
    o = (u) => l({
      className: u,
      parseClassName: s
    });
  }
  return o;
}, DS = (n) => {
  const a = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((l, o) => {
    a.set(l, 1e6 + o);
  }), (l) => {
    const o = [];
    let s = [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u], m = d[0] === "[", h = a.has(d);
      m || h ? (s.length > 0 && (s.sort(), o.push(...s), s = []), o.push(d)) : s.push(d);
    }
    return s.length > 0 && (s.sort(), o.push(...s)), o;
  };
}, _S = (n) => ({
  cache: TS(n.cacheSize),
  parseClassName: MS(n),
  sortModifiers: DS(n),
  postfixLookupClassGroupIds: NS(n),
  ...gS(n)
}), NS = (n) => {
  const a = /* @__PURE__ */ Object.create(null), l = n.postfixLookupClassGroups;
  if (l)
    for (let o = 0; o < l.length; o++)
      a[l[o]] = !0;
  return a;
}, AS = /\s+/, kS = (n, a) => {
  const {
    parseClassName: l,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: u,
    postfixLookupClassGroupIds: d
  } = a, m = [], h = n.trim().split(AS);
  let p = "";
  for (let b = h.length - 1; b >= 0; b -= 1) {
    const v = h[b], {
      isExternal: w,
      modifiers: T,
      hasImportantModifier: E,
      baseClassName: O,
      maybePostfixModifierPosition: C
    } = l(v);
    if (w) {
      p = v + (p.length > 0 ? " " + p : p);
      continue;
    }
    let D = !!C, _;
    if (D) {
      const Y = O.substring(0, C);
      _ = o(Y);
      const B = _ && d[_] ? o(O) : void 0;
      B && B !== _ && (_ = B, D = !1);
    } else
      _ = o(O);
    if (!_) {
      if (!D) {
        p = v + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (_ = o(O), !_) {
        p = v + (p.length > 0 ? " " + p : p);
        continue;
      }
      D = !1;
    }
    const M = T.length === 0 ? "" : T.length === 1 ? T[0] : u(T).join(":"), N = E ? M + od : M, z = N + _;
    if (m.indexOf(z) > -1)
      continue;
    m.push(z);
    const k = s(_, D);
    for (let Y = 0; Y < k.length; ++Y) {
      const B = k[Y];
      m.push(N + B);
    }
    p = v + (p.length > 0 ? " " + p : p);
  }
  return p;
}, jS = (...n) => {
  let a = 0, l, o, s = "";
  for (; a < n.length; )
    (l = n[a++]) && (o = Gv(l)) && (s && (s += " "), s += o);
  return s;
}, Gv = (n) => {
  if (typeof n == "string")
    return n;
  let a, l = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (a = Gv(n[o])) && (l && (l += " "), l += a);
  return l;
}, RS = (n, ...a) => {
  let l, o, s, u;
  const d = (h) => {
    const p = a.reduce((b, v) => v(b), n());
    return l = _S(p), o = l.cache.get, s = l.cache.set, u = m, m(h);
  }, m = (h) => {
    const p = o(h);
    if (p)
      return p;
    const b = kS(h, l);
    return s(h, b), b;
  };
  return u = d, (...h) => u(jS(...h));
}, zS = [], Ot = (n) => {
  const a = (l) => l[n] || zS;
  return a.isThemeGetter = !0, a.themeKey = n, a;
}, Wv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Vv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, HS = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, YS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, US = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, BS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, LS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ja = (n) => HS.test(n), Ae = (n) => !!n && !Number.isNaN(Number(n)), Hn = (n) => !!n && Number.isInteger(Number(n)), qf = (n) => n.endsWith("%") && Ae(n.slice(0, -1)), pa = (n) => YS.test(n), Fv = () => !0, PS = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  US.test(n) && !BS.test(n)
), Dd = () => !1, GS = (n) => LS.test(n), WS = (n) => qS.test(n), VS = (n) => !fe(n) && !de(n), FS = (n) => n.startsWith("@container") && (n[10] === "/" && n[11] !== void 0 || n[11] === "s" && n[16] !== void 0 && n.startsWith("-size/", 10) || n[11] === "n" && n[18] !== void 0 && n.startsWith("-normal/", 10)), XS = (n) => ir(n, Zv, Dd), fe = (n) => Wv.test(n), Ar = (n) => ir(n, Iv, PS), _y = (n) => ir(n, tC, Ae), QS = (n) => ir(n, Kv, Fv), ZS = (n) => ir(n, $v, Dd), Ny = (n) => ir(n, Xv, Dd), IS = (n) => ir(n, Qv, WS), Cs = (n) => ir(n, Jv, GS), de = (n) => Vv.test(n), Xl = (n) => Pr(n, Iv), $S = (n) => Pr(n, $v), Ay = (n) => Pr(n, Xv), KS = (n) => Pr(n, Zv), JS = (n) => Pr(n, Qv), Es = (n) => Pr(n, Jv, !0), eC = (n) => Pr(n, Kv, !0), ir = (n, a, l) => {
  const o = Wv.exec(n);
  return o ? o[1] ? a(o[1]) : l(o[2]) : !1;
}, Pr = (n, a, l = !1) => {
  const o = Vv.exec(n);
  return o ? o[1] ? a(o[1]) : l : !1;
}, Xv = (n) => n === "position" || n === "percentage", Qv = (n) => n === "image" || n === "url", Zv = (n) => n === "length" || n === "size" || n === "bg-size", Iv = (n) => n === "length", tC = (n) => n === "number", $v = (n) => n === "family-name", Kv = (n) => n === "number" || n === "weight", Jv = (n) => n === "shadow", nC = () => {
  const n = Ot("color"), a = Ot("font"), l = Ot("text"), o = Ot("font-weight"), s = Ot("tracking"), u = Ot("leading"), d = Ot("breakpoint"), m = Ot("container"), h = Ot("spacing"), p = Ot("radius"), b = Ot("shadow"), v = Ot("inset-shadow"), w = Ot("text-shadow"), T = Ot("drop-shadow"), E = Ot("blur"), O = Ot("perspective"), C = Ot("aspect"), D = Ot("ease"), _ = Ot("animate"), M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], z = () => [...N(), de, fe], k = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", "contain", "none"], B = () => [de, fe, h], Z = () => [Ja, "full", "auto", ...B()], te = () => [Hn, "none", "subgrid", de, fe], re = () => ["auto", {
    span: ["full", Hn, de, fe]
  }, Hn, de, fe], ne = () => [Hn, "auto", de, fe], X = () => ["auto", "min", "max", "fr", de, fe], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ie = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...B()], F = () => [Ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()], K = () => [m, Ja, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...B()], oe = () => [Ja, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...B()], G = () => [n, de, fe], A = () => [...N(), Ay, Ny, {
    position: [de, fe]
  }], W = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ae = () => ["auto", "cover", "contain", KS, XS, {
    size: [de, fe]
  }], se = () => [qf, Xl, Ar], ce = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    de,
    fe
  ], I = () => ["", Ae, Xl, Ar], le = () => ["solid", "dashed", "dotted", "double"], Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], he = () => [Ae, qf, Ay, Ny], ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    de,
    fe
  ], Qe = () => ["none", Ae, de, fe], Pe = () => ["none", Ae, de, fe], Ee = () => [Ae, de, fe], Me = () => [Ja, "full", ...B()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pa],
      breakpoint: [pa],
      color: [Fv],
      container: [pa],
      "drop-shadow": [pa],
      ease: ["in", "out", "in-out"],
      font: [VS],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [pa],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [pa],
      shadow: [pa],
      spacing: ["px", Ae],
      text: [pa],
      "text-shadow": [pa],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ja, fe, de, C]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", de, fe]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [FS],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ae, "auto", fe, de, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": M()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": M()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: z()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: Z()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Z()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Z()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": Z(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: Z()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": Z(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: Z()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": Z()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": Z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Z()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Hn, "auto", de, fe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ja, "full", "auto", m, ...B()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ae, Ja, "auto", "initial", "none", fe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ae, de, fe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ae, de, fe]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Hn, "first", "last", "none", de, fe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": te()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: re()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ne()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ne()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": te()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: re()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ne()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ne()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": X()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": X()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: B()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": B()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": B()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ee(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ie(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ie()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ee()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ie(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ee()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ie(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ie()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: B()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: B()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: B()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: B()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: B()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: B()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: B()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: B()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: B()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: B()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: B()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: H()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: H()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": B()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": B()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: F()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ...K()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...K()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...K()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...oe()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...oe()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...oe()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...F()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...F()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...F()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...F()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...F()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...F()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", l, Xl, Ar]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, eC, QS]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qf, fe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [$S, ZS, a]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [fe]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, de, fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ae, "none", de, _y]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          u,
          ...B()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", de, fe]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", de, fe]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: G()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: G()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...le(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ae, "from-font", "auto", de, Ar]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: G()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ae, "auto", de, fe]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: B()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Hn, de, fe]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de, fe]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", de, fe]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: A()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: W()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ae()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Hn, de, fe],
          radial: ["", de, fe],
          conic: ["", Hn, de, fe]
        }, JS, IS]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: G()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: se()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: se()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: se()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: G()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ce()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ce()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ce()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ce()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ce()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ce()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ce()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ce()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ce()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ce()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ce()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ce()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ce()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ce()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ce()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: I()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": I()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": I()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": I()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": I()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": I()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": I()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": I()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": I()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": I()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": I()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": I()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": I()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...le(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...le(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: G()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": G()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": G()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": G()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": G()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": G()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": G()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": G()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": G()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": G()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": G()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: G()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...le(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ae, de, fe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ae, Xl, Ar]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: G()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          // Deprecated since Tailwind CSS v4.0.0
          "inner",
          "none",
          b,
          Es,
          Cs
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: G()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", v, Es, Cs]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": G()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: I()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: G()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ae, Ar]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": G()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": I()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": G()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, Es, Cs]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": G()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ae, de, fe]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Se()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": he()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": he()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": G()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": he()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": he()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": G()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": he()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": he()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": G()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": he()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": he()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": G()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": he()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": he()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": G()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": he()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": he()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": G()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": he()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": he()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": G()
      }],
      "mask-image-radial": [{
        "mask-radial": [de, fe]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": he()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": he()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": G()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": he()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": he()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": G()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: A()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: W()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ae()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", de, fe]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          de,
          fe
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ge()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ae, de, fe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ae, de, fe]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          T,
          Es,
          Cs
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": G()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ae, de, fe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ae, de, fe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ae, de, fe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ae, de, fe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ae, de, fe]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          de,
          fe
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ge()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ae, de, fe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ae, de, fe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ae, de, fe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ae, de, fe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ae, de, fe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ae, de, fe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ae, de, fe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ae, de, fe]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": B()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": B()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": B()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", de, fe]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ae, "initial", de, fe]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, de, fe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ae, de, fe]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", _, de, fe]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [O, de, fe]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Qe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Qe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Qe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Qe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Pe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Pe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Pe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Pe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Ee()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Ee()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Ee()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [de, fe, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: z()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Me()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Me()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Me()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Me()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [Hn, de, fe]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: G()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: G()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de, fe]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": G()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": G()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": B()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": B()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": B()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", de, fe]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...G()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ae, Xl, Ar, _y]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...G()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["start", "end", "right", "left"],
      "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["ps", "pe", "pr", "pl"],
      py: ["pbs", "pbe", "pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["ms", "me", "mr", "ml"],
      my: ["mbs", "mbe", "mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-s", "border-w-e", "border-w-r", "border-w-l"],
      "border-w-y": ["border-w-bs", "border-w-be", "border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-s", "border-color-e", "border-color-r", "border-color-l"],
      "border-color-y": ["border-color-bs", "border-color-be", "border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, aC = /* @__PURE__ */ RS(nC);
function we(...n) {
  return aC(Bv(n));
}
const ld = dS(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Oe({
  className: n,
  variant: a,
  size: l,
  asChild: o = !1,
  ...s
}) {
  const u = o ? lS : "button";
  return /* @__PURE__ */ g.jsx(
    u,
    {
      "data-slot": "button",
      className: we(ld({ variant: a, size: l, className: n })),
      ...s
    }
  );
}
function Vn({ className: n, type: a, ...l }) {
  return /* @__PURE__ */ g.jsx(
    "input",
    {
      type: a,
      "data-slot": "input",
      className: we(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-xs file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[2px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n
      ),
      ...l
    }
  );
}
var ei = _v(), rC = Object.defineProperty, oC = (n, a) => rC(n, "name", { value: a, configurable: !0 }), lC = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], rt = lC.reduce((n, a) => {
  const l = /* @__PURE__ */ Sa(`Primitive.${a}`), o = x.forwardRef((s, u) => {
    const { asChild: d, ...m } = s, h = d ? l : a;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g.jsx(h, { ...m, ref: u });
  });
  return o.displayName = `Primitive.${a}`, { ...n, [a]: o };
}, {});
function eb(n, a) {
  n && ei.flushSync(() => n.dispatchEvent(a));
}
oC(eb, "dispatchDiscreteCustomEvent");
var iC = Object.defineProperty, sC = (n, a) => iC(n, "name", { value: a, configurable: !0 }), cC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ sC(function(a, l) {
    return /* @__PURE__ */ g.jsx(
      rt.label,
      {
        ...a,
        ref: l,
        onMouseDown: (o) => {
          o.target.closest("button, input, select, textarea") || (a.onMouseDown?.(o), !o.defaultPrevented && o.detail > 1 && o.preventDefault());
        }
      }
    );
  }, "Label")
);
function qt({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ g.jsx(
    cC,
    {
      "data-slot": "label",
      className: we(
        "flex items-center gap-2 text-xs leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        n
      ),
      ...a
    }
  );
}
var uC = Object.defineProperty, Xo = (n, a) => uC(n, "name", { value: a, configurable: !0 }), tb = !!(typeof window < "u" && window.document && window.document.createElement);
function Ye(n, a, { checkForDefaultPrevented: l = !0 } = {}) {
  return /* @__PURE__ */ Xo(function(s) {
    if (n?.(s), l === !1 || !s || !s.defaultPrevented)
      return a?.(s);
  }, "handleEvent");
}
Xo(Ye, "composeEventHandlers");
function fC(n) {
  if (!tb)
    throw new Error("Cannot access window outside of the DOM");
  return n?.ownerDocument?.defaultView ?? window;
}
Xo(fC, "getOwnerWindow");
function id(n) {
  if (!tb)
    throw new Error("Cannot access document outside of the DOM");
  return n?.ownerDocument ?? document;
}
Xo(id, "getOwnerDocument");
function nb(n, a = !1) {
  const { activeElement: l } = id(n);
  if (!l?.nodeName)
    return null;
  if (ab(l) && l.contentDocument)
    return nb(l.contentDocument.body, a);
  if (a) {
    const o = l.getAttribute("aria-activedescendant");
    if (o) {
      const s = id(l).getElementById(o);
      if (s)
        return s;
    }
  }
  return l;
}
Xo(nb, "getActiveElement");
function ab(n) {
  return n.tagName === "IFRAME";
}
Xo(ab, "isFrame");
var dC = Object.defineProperty, Sn = (n, a) => dC(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function mC(n, a) {
  const l = x.createContext(a);
  l.displayName = n + "Context";
  const o = /* @__PURE__ */ Sn((u) => {
    const { children: d, ...m } = u, h = x.useMemo(() => m, Object.values(m));
    return /* @__PURE__ */ g.jsx(l.Provider, { value: h, children: d });
  }, "Provider");
  o.displayName = n + "Provider";
  function s(u, d = {}) {
    const { optional: m = !1 } = d, h = x.useContext(l);
    if (h) return h;
    if (a !== void 0) return a;
    if (!m)
      throw new Error(`\`${u}\` must be used within \`${n}\``);
  }
  return Sn(s, "useContext"), [o, s];
}
Sn(mC, "createContext");
// @__NO_SIDE_EFFECTS__
function Ta(n, a = []) {
  let l = [];
  function o(u, d) {
    const m = x.createContext(d);
    m.displayName = u + "Context";
    const h = l.length;
    l = [...l, d];
    const p = /* @__PURE__ */ Sn((v) => {
      const { scope: w, children: T, ...E } = v, O = w?.[n]?.[h] || m, C = x.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ g.jsx(O.Provider, { value: C, children: T });
    }, "Provider");
    p.displayName = u + "Provider";
    function b(v, w, T = {}) {
      const { optional: E = !1 } = T, O = w?.[n]?.[h] || m, C = x.useContext(O);
      if (C) return C;
      if (d !== void 0) return d;
      if (!E)
        throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return Sn(b, "useContext"), [p, b];
  }
  Sn(o, "createContext");
  const s = /* @__PURE__ */ Sn(() => {
    const u = l.map((d) => x.createContext(d));
    return /* @__PURE__ */ Sn(function(m) {
      const h = m?.[n] || u;
      return x.useMemo(
        () => ({ [`__scope${n}`]: { ...m, [n]: h } }),
        [m, h]
      );
    }, "useScope");
  }, "createScope");
  return s.scopeName = n, [o, rb(s, ...a)];
}
Sn(Ta, "createContextScope");
function rb(...n) {
  const a = n[0];
  if (n.length === 1) return a;
  const l = /* @__PURE__ */ Sn(() => {
    const o = n.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return /* @__PURE__ */ Sn(function(u) {
      const d = o.reduce((m, { useScope: h, scopeName: p }) => {
        const v = h(u)[`__scope${p}`];
        return { ...m, ...v };
      }, {});
      return x.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    }, "useComposedScopes");
  }, "createScope");
  return l.scopeName = a.scopeName, l;
}
Sn(rb, "composeContextScopes");
var bt = globalThis?.document ? x.useLayoutEffect : () => {
}, hC = Object.defineProperty, pC = (n, a) => hC(n, "name", { value: a, configurable: !0 }), ky = qr[" useEffectEvent ".trim().toString()], jy = qr[" useInsertionEffect ".trim().toString()];
function ob(n) {
  if (typeof ky == "function")
    return ky(n);
  const a = x.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof jy == "function" ? jy(() => {
    a.current = n;
  }) : bt(() => {
    a.current = n;
  }), x.useMemo(() => ((...l) => a.current?.(...l)), []);
}
pC(ob, "useEffectEvent");
var gC = Object.defineProperty, ti = (n, a) => gC(n, "name", { value: a, configurable: !0 }), yC = qr[" useInsertionEffect ".trim().toString()] || bt;
function Hr({
  prop: n,
  defaultProp: a,
  onChange: l = /* @__PURE__ */ ti(() => {
  }, "onChange"),
  caller: o
}) {
  const [s, u, d] = lb({
    defaultProp: a,
    onChange: l
  }), m = n !== void 0, h = m ? n : s, p = x.useCallback(
    (b) => {
      if (m) {
        const v = ib(b) ? b(n) : b;
        v !== n && d.current?.(v);
      } else
        u(b);
    },
    [m, n, u, d]
  );
  return [h, p];
}
ti(Hr, "useControllableState");
function lb({
  defaultProp: n,
  onChange: a
}) {
  const [l, o] = x.useState(n), s = x.useRef(l), u = x.useRef(a);
  return yC(() => {
    u.current = a;
  }, [a]), x.useEffect(() => {
    s.current !== l && (u.current?.(l), s.current = l);
  }, [l, s]), [l, o, u];
}
ti(lb, "useUncontrolledState");
function ib(n) {
  return typeof n == "function";
}
ti(ib, "isFunction");
var Ry = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function vC(n, a, l, o) {
  const { prop: s, defaultProp: u, onChange: d, caller: m } = a, h = s !== void 0, p = ob(d), b = [{ ...l, state: u }];
  o && b.push(o);
  const [v, w] = x.useReducer(
    (C, D) => {
      if (D.type === Ry)
        return { ...C, state: D.state };
      const _ = n(C, D);
      return h && !Object.is(_.state, C.state) && p(_.state), _;
    },
    ...b
  ), T = v.state, E = x.useRef(T);
  x.useEffect(() => {
    E.current !== T && (E.current = T, h || p(T));
  }, [T, E, h]);
  const O = x.useMemo(() => s !== void 0 ? { ...v, state: s } : v, [v, s]);
  return x.useEffect(() => {
    h && !Object.is(s, v.state) && w({ type: Ry, state: s });
  }, [s, v.state, h]), [O, w];
}
ti(vC, "useControllableStateReducer");
var bC = Object.defineProperty, xC = (n, a) => bC(n, "name", { value: a, configurable: !0 });
function _d(n) {
  const [a, l] = x.useState(void 0);
  return bt(() => {
    if (n) {
      l({ width: n.offsetWidth, height: n.offsetHeight });
      let o = 0;
      const s = new ResizeObserver((u) => {
        if (!Array.isArray(u) || !u.length)
          return;
        const d = u[0];
        window.cancelAnimationFrame(o), o = window.requestAnimationFrame(() => {
          let m, h;
          if ("borderBoxSize" in d) {
            const p = d.borderBoxSize, b = Array.isArray(p) ? p[0] : p;
            m = b.inlineSize, h = b.blockSize;
          } else
            m = n.offsetWidth, h = n.offsetHeight;
          l({ width: m, height: h });
        });
      });
      return s.observe(n, { box: "border-box" }), () => {
        window.cancelAnimationFrame(o), s.unobserve(n);
      };
    } else
      l(void 0);
  }, [n]), a;
}
xC(_d, "useSize");
var wC = Object.defineProperty, rr = (n, a) => wC(n, "name", { value: a, configurable: !0 }), Nd = "Switch", [SC, KA] = /* @__PURE__ */ Ta(Nd), [CC, Ad] = SC(Nd);
function sb(n) {
  const {
    __scopeSwitch: a,
    checked: l,
    children: o,
    defaultChecked: s,
    disabled: u,
    form: d,
    name: m,
    onCheckedChange: h,
    required: p,
    value: b = "on",
    // @ts-expect-error
    internal_do_not_use_render: v
  } = n, [w, T] = Hr({
    prop: l,
    defaultProp: s ?? !1,
    onChange: h,
    caller: Nd
  }), [E, O] = x.useState(null), [C, D] = x.useState(null), [_, M] = x.useState(null), N = E ? !!d || !!E.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), z = {
    checked: w,
    setChecked: T,
    disabled: u,
    control: E,
    setControl: O,
    name: m,
    form: d,
    value: b,
    userClick: _,
    onUserClick: M,
    required: p,
    defaultChecked: s,
    isFormControl: N,
    bubbleInput: C,
    setBubbleInput: D
  };
  return /* @__PURE__ */ g.jsx(CC, { scope: a, ...z, children: cb(v) ? v(z) : o });
}
rr(sb, "SwitchProvider");
var EC = "SwitchTrigger", TC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ rr(function({ __scopeSwitch: a, onClick: l, ...o }, s) {
    const {
      control: u,
      form: d,
      value: m,
      disabled: h,
      checked: p,
      required: b,
      setControl: v,
      setChecked: w,
      onUserClick: T,
      isFormControl: E,
      bubbleInput: O
    } = Ad(EC, a), C = at(s, v), D = x.useRef(p);
    return x.useEffect(() => {
      const _ = d ? u?.ownerDocument.getElementById(d) : u?.form;
      if (_ instanceof HTMLFormElement) {
        const M = /* @__PURE__ */ rr(() => w(D.current), "reset");
        return _.addEventListener("reset", M), () => _.removeEventListener("reset", M);
      }
    }, [u, d, w]), /* @__PURE__ */ g.jsx(
      rt.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": p,
        "aria-required": b,
        "data-state": kd(p),
        "data-disabled": h ? "" : void 0,
        disabled: h,
        value: m,
        ...o,
        ref: C,
        onClick: Ye(l, (_) => {
          const M = _.isPropagationStopped();
          T({ requestedChecked: !p, hasConsumerStoppedPropagation: M }), w((N) => !N), O && E && (M || _.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), OC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rr(function(a, l) {
    const {
      __scopeSwitch: o,
      name: s,
      checked: u,
      defaultChecked: d,
      required: m,
      disabled: h,
      value: p,
      onCheckedChange: b,
      form: v,
      ...w
    } = a;
    return /* @__PURE__ */ g.jsx(
      sb,
      {
        __scopeSwitch: o,
        checked: u,
        defaultChecked: d,
        disabled: h,
        required: m,
        onCheckedChange: b,
        name: s,
        form: v,
        value: p,
        internal_do_not_use_render: ({ isFormControl: T }) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsx(
            TC,
            {
              ...w,
              ref: l,
              __scopeSwitch: o
            }
          ),
          T && /* @__PURE__ */ g.jsx(
            NC,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), MC = "SwitchThumb", DC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ rr(function(a, l) {
    const { __scopeSwitch: o, ...s } = a, u = Ad(MC, o);
    return /* @__PURE__ */ g.jsx(
      rt.span,
      {
        "data-state": kd(u.checked),
        "data-disabled": u.disabled ? "" : void 0,
        ...s,
        ref: l
      }
    );
  }, "SwitchThumb")
), _C = "SwitchBubbleInput", NC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rr(function({ __scopeSwitch: a, onClick: l, ...o }, s) {
    const {
      control: u,
      userClick: d,
      checked: m,
      defaultChecked: h,
      required: p,
      disabled: b,
      name: v,
      value: w,
      form: T,
      bubbleInput: E,
      setBubbleInput: O
    } = Ad(_C, a), C = at(s, O), D = _d(u), _ = x.useRef(!1), M = x.useRef(m), N = x.useRef(d), z = x.useRef(null);
    x.useEffect(() => {
      const Y = E;
      if (!Y) return;
      const B = window.HTMLInputElement.prototype, te = Object.getOwnPropertyDescriptor(
        B,
        "checked"
      ).set;
      if (!te)
        return;
      const re = M.current !== m;
      M.current = m;
      const ne = d !== null && d !== N.current;
      if (N.current = d, ne)
        z.current = re ? null : d, re && te.call(Y, m), Y.dispatchEvent(
          new Event("click", { bubbles: !d.hasConsumerStoppedPropagation })
        );
      else if (re) {
        const X = z.current;
        z.current = null;
        const ee = X?.requestedChecked === m;
        _.current = !0, te.call(Y, m), Y.dispatchEvent(
          new Event("click", {
            bubbles: !(ee && X.hasConsumerStoppedPropagation)
          })
        ), _.current = !1;
      }
    }, [E, m, d]);
    const k = x.useRef(m);
    return /* @__PURE__ */ g.jsx(
      rt.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: h ?? k.current,
        required: p,
        disabled: b,
        name: v,
        value: w,
        form: T,
        ...o,
        tabIndex: -1,
        ref: C,
        onClick: Ye(l, (Y) => {
          _.current && Y.stopPropagation();
        }),
        style: {
          ...o.style,
          ...D,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "SwitchBubbleInput")
);
function cb(n) {
  return typeof n == "function";
}
rr(cb, "isFunction");
function kd(n) {
  return n ? "checked" : "unchecked";
}
rr(kd, "getState");
function Qs({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ g.jsx(
    OC,
    {
      "data-slot": "switch",
      className: we(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ...a,
      children: /* @__PURE__ */ g.jsx(
        DC,
        {
          "data-slot": "switch-thumb",
          className: we(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
var AC = Object.defineProperty, Mt = (n, a) => AC(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function jd(n) {
  const a = n + "CollectionProvider", [l, o] = /* @__PURE__ */ Ta(a), [s, u] = l(
    a,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = /* @__PURE__ */ Mt((O) => {
    const { scope: C, children: D } = O, _ = x.useRef(null), M = x.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ g.jsx(s, { scope: C, itemMap: M, collectionRef: _, children: D });
  }, "CollectionProvider");
  d.displayName = a;
  const m = n + "CollectionSlot", h = /* @__PURE__ */ Sa(m), p = x.forwardRef(
    (O, C) => {
      const { scope: D, children: _ } = O, M = u(m, D), N = at(C, M.collectionRef);
      return /* @__PURE__ */ g.jsx(h, { ref: N, children: _ });
    }
  );
  p.displayName = m;
  const b = n + "CollectionItemSlot", v = "data-radix-collection-item", w = /* @__PURE__ */ Sa(b), T = x.forwardRef(
    (O, C) => {
      const { scope: D, children: _, ...M } = O, N = x.useRef(null), z = at(C, N), k = u(b, D);
      return x.useEffect(() => (k.itemMap.set(N, { ref: N, ...M }), () => {
        k.itemMap.delete(N);
      })), /* @__PURE__ */ g.jsx(w, { [v]: "", ref: z, children: _ });
    }
  );
  T.displayName = b;
  function E(O) {
    const C = u(n + "CollectionConsumer", O);
    return x.useCallback(() => {
      const _ = C.collectionRef.current;
      if (!_) return [];
      const M = Array.from(_.querySelectorAll(`[${v}]`));
      return Array.from(C.itemMap.values()).sort(
        (k, Y) => M.indexOf(k.ref.current) - M.indexOf(Y.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return Mt(E, "useCollection"), [
    { Provider: d, Slot: p, ItemSlot: T },
    E,
    o
  ];
}
Mt(jd, "createCollection");
var zy = /* @__PURE__ */ new WeakMap(), gt, cn, Ts = (cn = class extends Map {
  constructor(l) {
    super(l);
    my(this, gt);
    Rf(this, gt, [...super.keys()]), zy.set(this, !0);
  }
  set(l, o) {
    return zy.get(this) && !this.has(l) && Yt(this, gt).push(l), super.set(l, o), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(l, o, s) {
    const u = this.has(o), d = u ? this.size : this.size + 1, m = Rd(l), h = m >= 0 ? Math.min(m, d - 1) : Math.max(d + m, 0);
    if (u ? Yt(this, gt).indexOf(o) === h : h === this.size)
      return this.set(o, s), this;
    const p = Yt(this, gt).filter((v) => v !== o);
    p.splice(h, 0, o);
    const b = p.map((v) => [
      v,
      v === o ? s : this.get(v)
    ]);
    this.clear();
    for (const [v, w] of b)
      this.set(v, w);
    return this;
  }
  with(l, o, s) {
    const u = new cn(this);
    return u.insert(l, o, s), u;
  }
  before(l) {
    const o = Yt(this, gt).indexOf(l) - 1;
    if (!(o < 0))
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(l, o, s) {
    const u = Yt(this, gt).indexOf(l);
    if (u === -1)
      return this;
    const d = Yt(this, gt).indexOf(o), m = d !== -1 && d < u ? u - 1 : u;
    return this.insert(m, o, s);
  }
  after(l) {
    let o = Yt(this, gt).indexOf(l);
    if (o = o === -1 || o === this.size - 1 ? -1 : o + 1, o !== -1)
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(l, o, s) {
    const u = Yt(this, gt).indexOf(l);
    if (u === -1)
      return this;
    const d = Yt(this, gt).indexOf(o), m = d !== -1 && d <= u ? u : u + 1;
    return this.insert(m, o, s);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return Rf(this, gt, []), super.clear();
  }
  delete(l) {
    const o = super.delete(l);
    return o && Yt(this, gt).splice(Yt(this, gt).indexOf(l), 1), o;
  }
  deleteAt(l) {
    const o = this.keyAt(l);
    return o !== void 0 ? this.delete(o) : !1;
  }
  at(l) {
    const o = js(Yt(this, gt), l);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(l) {
    const o = js(Yt(this, gt), l);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(l) {
    return Yt(this, gt).indexOf(l);
  }
  keyAt(l) {
    return js(Yt(this, gt), l);
  }
  from(l, o) {
    const s = this.indexOf(l);
    if (s === -1)
      return;
    let u = s + o;
    return u < 0 && (u = 0), u >= this.size && (u = this.size - 1), this.at(u);
  }
  keyFrom(l, o) {
    const s = this.indexOf(l);
    if (s === -1)
      return;
    let u = s + o;
    return u < 0 && (u = 0), u >= this.size && (u = this.size - 1), this.keyAt(u);
  }
  find(l, o) {
    let s = 0;
    for (const u of this) {
      if (Reflect.apply(l, o, [u, s, this]))
        return u;
      s++;
    }
  }
  findIndex(l, o) {
    let s = 0;
    for (const u of this) {
      if (Reflect.apply(l, o, [u, s, this]))
        return s;
      s++;
    }
    return -1;
  }
  filter(l, o) {
    const s = [];
    let u = 0;
    for (const d of this)
      Reflect.apply(l, o, [d, u, this]) && s.push(d), u++;
    return new cn(s);
  }
  map(l, o) {
    const s = [];
    let u = 0;
    for (const d of this)
      s.push([d[0], Reflect.apply(l, o, [d, u, this])]), u++;
    return new cn(s);
  }
  reduce(...l) {
    const [o, s] = l, u = l.length > 1;
    if (!u && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let d = 0, m = s;
    for (const h of this)
      d === 0 && !u ? m = h : m = Reflect.apply(o, this, [m, h, d, this]), d++;
    return m;
  }
  reduceRight(...l) {
    const [o, s] = l, u = l.length > 1;
    if (!u && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let d = s;
    for (let m = this.size - 1; m >= 0; m--) {
      const h = this.entryAt(m);
      m === this.size - 1 && !u ? d = h : d = Reflect.apply(o, this, [d, h, m, this]);
    }
    return d;
  }
  /**
   * Sorts the dictionary in place. This method mutates the dictionary and
   * returns a reference to the same object
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  sort(l) {
    if (typeof l != "function")
      throw new TypeError("OrderedDict.sort requires a compare function");
    const o = [...this.entries()].sort(l);
    this.clear();
    for (const [s, u] of o)
      this.set(s, u);
    return this;
  }
  /**
   * Returns a copy of the dictionary with its elements sorted.
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  toSorted(l) {
    if (typeof l != "function")
      throw new TypeError("OrderedDict.toSorted requires a compare function");
    const o = [...this.entries()].sort(l);
    return new cn(o);
  }
  toReversed() {
    const l = new cn();
    for (let o = this.size - 1; o >= 0; o--) {
      const s = this.keyAt(o), u = this.get(s);
      l.set(s, u);
    }
    return l;
  }
  toSpliced(...l) {
    const o = [...this.entries()];
    return o.splice(...l), new cn(o);
  }
  slice(l, o) {
    const s = new cn();
    for (const u of Yt(this, gt).slice(l, o))
      s.set(u, this.get(u));
    return s;
  }
  every(l, o) {
    let s = 0;
    for (const u of this) {
      if (!Reflect.apply(l, o, [u, s, this]))
        return !1;
      s++;
    }
    return !0;
  }
  some(l, o) {
    let s = 0;
    for (const u of this) {
      if (Reflect.apply(l, o, [u, s, this]))
        return !0;
      s++;
    }
    return !1;
  }
}, gt = new WeakMap(), Mt(cn, "OrderedDict"), cn);
function js(n, a) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(n, a);
  const l = ub(n, a);
  return l === -1 ? void 0 : n[l];
}
Mt(js, "at");
function ub(n, a) {
  const l = n.length, o = Rd(a), s = o >= 0 ? o : l + o;
  return s < 0 || s >= l ? -1 : s;
}
Mt(ub, "toSafeIndex");
function Rd(n) {
  return n !== n || n === 0 ? 0 : Math.trunc(n);
}
Mt(Rd, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function kC(n) {
  const a = n + "CollectionProvider", [l, o] = /* @__PURE__ */ Ta(a), [s, u] = l(a);
  s.displayName = n + "CollectionStableContextProvider";
  const [d, m] = l(a);
  d.displayName = n + "CollectionStatefulContextProvider";
  const h = /* @__PURE__ */ Mt(({ state: k, ...Y }) => k ? /* @__PURE__ */ g.jsx(b, { ...Y, state: k }) : /* @__PURE__ */ g.jsx(p, { ...Y }), "CollectionProvider");
  h.displayName = a;
  const p = /* @__PURE__ */ Mt((k) => {
    const Y = _();
    return /* @__PURE__ */ g.jsx(b, { ...k, state: Y });
  }, "CollectionInit");
  p.displayName = n + "CollectionInit";
  const b = /* @__PURE__ */ Mt((k) => {
    const { scope: Y, children: B, state: Z } = k, te = x.useRef(null), [re, ne] = x.useState(
      null
    ), X = at(te, ne), [ee, ie] = Z, H = x.useRef(
      new Ts()
    ), F = x.useCallback(() => {
      const K = H.current;
      return mb(K) || K.sort(Rs), K;
    }, []);
    return x.useEffect(() => {
      if (!re)
        return;
      const K = hb(() => {
        ie((oe) => {
          const G = oe.toSorted(Rs);
          return G.some(([W], ae) => oe.keyAt(ae) !== W) ? G : oe;
        });
      });
      return K.observe(re, {
        childList: !0,
        subtree: !0
      }), () => {
        K.disconnect();
      };
    }, [re, ie]), /* @__PURE__ */ g.jsx(
      s,
      {
        scope: Y,
        collectionElementRef: X,
        collectionElementRefObject: te,
        getCollection: F,
        setCollection: ie,
        registryRef: H,
        children: /* @__PURE__ */ g.jsx(
          d,
          {
            scope: Y,
            collectionElement: re,
            collection: ee,
            children: B
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  b.displayName = n + "CollectionProviderImpl";
  const v = n + "CollectionSlot", w = /* @__PURE__ */ Sa(v), T = x.forwardRef(
    (k, Y) => {
      const { scope: B, children: Z } = k, te = u(v, B), re = at(Y, te.collectionElementRef);
      return /* @__PURE__ */ g.jsx(w, { ref: re, children: Z });
    }
  );
  T.displayName = v;
  const E = n + "CollectionItemSlot", O = "data-radix-collection-item", C = /* @__PURE__ */ Sa(E), D = x.forwardRef(
    (k, Y) => {
      const { scope: B, children: Z, ...te } = k, re = x.useRef(null), ne = u(E, B), { setCollection: X, registryRef: ee } = ne, ie = x.useRef(te);
      fb(ie.current, te) || (ie.current = te);
      const H = ie.current, F = x.useCallback(
        (G) => {
          const A = ee.current;
          G ? A.set(G, {
            ...ie.current,
            element: G
          }) : re.current && A.delete(re.current);
        },
        [ee]
      ), K = at(Y, F, re);
      bt(() => {
        const G = re.current, A = ee.current;
        G && A.has(G) && A.set(G, { ...H, element: G });
      }, [H, ee]);
      const oe = x.useRef(null);
      return x.useEffect(() => {
        const G = re.current, A = oe.current;
        (A?.element ?? null) === G && (!G || A?.itemData === H) || (oe.current = G ? { element: G, itemData: H } : null, X((W) => {
          const ae = new Ts(W);
          return A && A.element !== G && ae.delete(A.element), G && ae.set(G, { ...H, element: G }), ae.sort(Rs);
        }));
      }), x.useEffect(() => () => {
        const G = oe.current;
        oe.current = null, G && X((A) => {
          if (!A.has(G.element))
            return A;
          const W = new Ts(A);
          return W.delete(G.element), W;
        });
      }, [X]), /* @__PURE__ */ g.jsx(C, { [O]: "", ref: K, children: Z });
    }
  );
  D.displayName = E;
  function _() {
    return x.useState(new Ts());
  }
  Mt(_, "useInitCollection");
  function M(k) {
    const { collection: Y } = m(n + "CollectionConsumer", k);
    return Y;
  }
  Mt(M, "useCollection");
  function N(k) {
    const { getCollection: Y } = u(n + "CollectionConsumer", k);
    return Y;
  }
  return Mt(N, "useGetCollection"), [
    { Provider: h, Slot: T, ItemSlot: D },
    {
      createCollectionScope: o,
      useCollection: M,
      useGetCollection: N,
      useInitCollection: _
    }
  ];
}
Mt(kC, "createCollection");
function fb(n, a) {
  if (n === a) return !0;
  if (typeof n != "object" || typeof a != "object" || n == null || a == null) return !1;
  const l = Object.keys(n), o = Object.keys(a);
  if (l.length !== o.length) return !1;
  for (const s of l)
    if (!Object.prototype.hasOwnProperty.call(a, s) || n[s] !== a[s]) return !1;
  return !0;
}
Mt(fb, "shallowEqual");
function db(n, a) {
  return !!(a.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING);
}
Mt(db, "isElementPreceding");
function mb(n) {
  let a;
  for (const l of n.keys()) {
    if (a) {
      const o = a.compareDocumentPosition(l);
      if (!(o & Node.DOCUMENT_POSITION_DISCONNECTED) && o & Node.DOCUMENT_POSITION_PRECEDING)
        return !1;
    }
    a = l;
  }
  return !0;
}
Mt(mb, "isInDocumentOrder");
function Rs(n, a) {
  return !n[1].element || !a[1].element ? 0 : db(n[1].element, a[1].element) ? -1 : 1;
}
Mt(Rs, "sortByDocumentPosition");
function hb(n) {
  return new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList") {
        n();
        return;
      }
  });
}
Mt(hb, "getChildListObserver");
var jC = Object.defineProperty, RC = (n, a) => jC(n, "name", { value: a, configurable: !0 }), zC = qr[" useId ".trim().toString()] || (() => {
}), HC = 0;
function nr(n) {
  const [a, l] = x.useState(zC());
  return bt(() => {
    n || l((o) => o ?? String(HC++));
  }, [n]), n || (a ? `radix-${a}` : "");
}
RC(nr, "useId");
var YC = Object.defineProperty, UC = (n, a) => YC(n, "name", { value: a, configurable: !0 }), Hy = qr[" useInsertionEffect ".trim().toString()];
function _n(n) {
  const a = x.useRef(n);
  return typeof Hy == "function" ? Hy(() => {
    a.current = n;
  }) : bt(() => {
    a.current = n;
  }), x.useMemo(() => ((...l) => a.current?.(...l)), []);
}
UC(_n, "useCallbackRef");
var BC = Object.defineProperty, LC = (n, a) => BC(n, "name", { value: a, configurable: !0 }), qC = {
  LTR: "ltr"
}, PC = x.createContext(void 0);
function Zs(n) {
  const a = x.useContext(PC);
  return n || a || qC.LTR;
}
LC(Zs, "useDirection");
var GC = Object.defineProperty, zd = (n, a) => GC(n, "name", { value: a, configurable: !0 }), Pf = !1;
function pb() {
  const [n, a] = x.useState(Pf);
  return x.useEffect(() => {
    Pf || (Pf = !0, a(!0));
  }, []), n;
}
zd(pb, "useIsHydrated");
var gb = qr[" useSyncExternalStore ".trim().toString()];
function yb() {
  return () => {
  };
}
zd(yb, "subscribe");
function vb() {
  return gb(
    yb,
    () => !0,
    () => !1
  );
}
zd(vb, "useIsHydratedModern");
var WC = typeof gb == "function" ? vb : pb, VC = Object.defineProperty, Gr = (n, a) => VC(n, "name", { value: a, configurable: !0 }), Gf = "rovingFocusGroup.onEntryFocus", FC = { bubbles: !1, cancelable: !0 }, Is = "RovingFocusGroup", [sd, bb, XC] = /* @__PURE__ */ jd(Is), [QC, xb] = /* @__PURE__ */ Ta(
  Is,
  [XC]
), Yy = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, ZC = {
  RTL: "rtl"
}, [IC, $C] = QC(Is), KC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Gr(function(a, l) {
    return /* @__PURE__ */ g.jsx(sd.Provider, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ g.jsx(sd.Slot, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ g.jsx(JC, { ...a, ref: l }) }) });
  }, "RovingFocusGroup")
), JC = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Gr(function(a, l) {
  const {
    __scopeRovingFocusGroup: o,
    orientation: s,
    loop: u = !1,
    dir: d,
    currentTabStopId: m,
    defaultCurrentTabStopId: h,
    onCurrentTabStopIdChange: p,
    onEntryFocus: b,
    preventScrollOnEntryFocus: v = !1,
    ...w
  } = a, T = x.useRef(null), E = at(l, T), O = Zs(d), [C, D] = Hr({
    prop: m,
    defaultProp: h ?? null,
    onChange: p,
    caller: Is
  }), [_, M] = x.useState(!1), N = _n(b), z = bb(o), k = x.useRef(!1), [Y, B] = x.useState(0);
  return x.useEffect(() => {
    const Z = T.current;
    if (Z)
      return Z.addEventListener(Gf, N), () => Z.removeEventListener(Gf, N);
  }, [N]), /* @__PURE__ */ g.jsx(
    IC,
    {
      scope: o,
      orientation: s,
      dir: O,
      loop: u,
      currentTabStopId: C,
      onItemFocus: x.useCallback(
        (Z) => D(Z),
        [D]
      ),
      onItemShiftTab: x.useCallback(() => M(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => B((Z) => Z + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => B((Z) => Z - 1),
        []
      ),
      children: /* @__PURE__ */ g.jsx(
        rt.div,
        {
          tabIndex: _ || Y === 0 ? -1 : 0,
          "data-orientation": s,
          ...w,
          ref: E,
          style: { outline: "none", ...a.style },
          onMouseDown: Ye(a.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: Ye(a.onFocus, (Z) => {
            const te = !k.current;
            if (Z.target === Z.currentTarget && te && !_) {
              const re = new CustomEvent(Gf, FC);
              if (Z.currentTarget.dispatchEvent(re), !re.defaultPrevented) {
                const ne = z().filter((F) => F.focusable), X = ne.find((F) => F.active), ee = ne.find((F) => F.id === C), H = [X, ee, ...ne].filter(
                  Boolean
                ).map((F) => F.ref.current);
                Hd(H, v);
              }
            }
            k.current = !1;
          }),
          onBlur: Ye(a.onBlur, () => M(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), eE = "RovingFocusGroupItem", tE = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Gr(function(a, l) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: s = !0,
      active: u = !1,
      tabStopId: d,
      children: m,
      ...h
    } = a, p = nr(), b = d || p, v = $C(eE, o), w = v.currentTabStopId === b, T = bb(o), { onFocusableItemAdd: E, onFocusableItemRemove: O, currentTabStopId: C } = v, D = WC();
    return bt(() => {
      if (!(!D || !s))
        return E(), () => O();
    }, [D, s, E, O]), x.useEffect(() => {
      if (!(D || !s))
        return E(), () => O();
    }, [D, s, E, O]), /* @__PURE__ */ g.jsx(
      sd.ItemSlot,
      {
        scope: o,
        id: b,
        focusable: s,
        active: u,
        children: /* @__PURE__ */ g.jsx(
          rt.span,
          {
            tabIndex: w ? 0 : -1,
            "data-orientation": v.orientation,
            ...h,
            ref: l,
            onMouseDown: Ye(a.onMouseDown, (_) => {
              s ? v.onItemFocus(b) : _.preventDefault();
            }),
            onFocus: Ye(a.onFocus, () => v.onItemFocus(b)),
            onKeyDown: Ye(a.onKeyDown, (_) => {
              if (_.key === "Tab" && _.shiftKey) {
                v.onItemShiftTab();
                return;
              }
              if (_.target !== _.currentTarget) return;
              const M = Sb(_, v.orientation, v.dir);
              if (M !== void 0) {
                if (_.metaKey || _.ctrlKey || _.altKey || _.shiftKey) return;
                _.preventDefault();
                let z = T().filter((k) => k.focusable).map((k) => k.ref.current);
                if (M === "last") z.reverse();
                else if (M === "prev" || M === "next") {
                  M === "prev" && z.reverse();
                  const k = z.indexOf(_.currentTarget);
                  z = v.loop ? Cb(z, k + 1) : z.slice(k + 1);
                }
                setTimeout(() => Hd(z));
              }
            }),
            children: typeof m == "function" ? m({ isCurrentTabStop: w, hasTabStop: C != null }) : m
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), nE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function wb(n, a) {
  return a !== ZC.RTL ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
Gr(wb, "getDirectionAwareKey");
function Sb(n, a, l) {
  const o = wb(n.key, l);
  if (!(a === Yy.Vertical && ["ArrowLeft", "ArrowRight"].includes(o)) && !(a === Yy.Horizontal && ["ArrowUp", "ArrowDown"].includes(o)))
    return nE[o];
}
Gr(Sb, "getFocusIntent");
function Hd(n, a = !1) {
  const l = document.activeElement;
  for (const o of n)
    if (o === l || (o.focus({ preventScroll: a }), document.activeElement !== l)) return;
}
Gr(Hd, "focusFirst");
function Cb(n, a) {
  return n.map((l, o) => n[(a + o) % n.length]);
}
Gr(Cb, "wrapArray");
var aE = Object.defineProperty, Ca = (n, a) => aE(n, "name", { value: a, configurable: !0 });
function Eb(n, a) {
  return x.useReducer((l, o) => a[l][o] ?? l, n);
}
Ca(Eb, "useStateMachine");
var $s = /* @__PURE__ */ Ca((n) => {
  const { present: a, children: l } = n, o = Tb(a), s = typeof l == "function" ? l({ present: o.isPresent }) : x.Children.only(l), u = Ob(o.ref, Mb(s));
  return typeof l == "function" || o.isPresent ? x.cloneElement(s, { ref: u }) : null;
}, "Presence");
function Tb(n) {
  const [a, l] = x.useState(), o = x.useRef(null), s = x.useRef(n), u = x.useRef("none"), d = x.useRef(void 0), m = n ? "mounted" : "unmounted", [h, p] = Eb(m, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return x.useEffect(() => {
    h === "mounted" ? (u.current = d.current ?? qo(o.current), d.current = void 0) : u.current = "none";
  }, [h]), bt(() => {
    const b = o.current, v = s.current;
    if (v !== n) {
      const T = u.current, E = qo(b);
      n ? (d.current = E, p("MOUNT")) : E === "none" || b?.display === "none" ? p("UNMOUNT") : p(v && T !== E ? "ANIMATION_OUT" : "UNMOUNT"), s.current = n;
    }
  }, [n, p]), bt(() => {
    if (a) {
      let b;
      const v = a.ownerDocument.defaultView ?? window, w = /* @__PURE__ */ Ca((E) => {
        const C = qo(o.current).includes(CSS.escape(E.animationName));
        if (E.target === a && C && (p("ANIMATION_END"), !s.current)) {
          const D = a.style.animationFillMode;
          a.style.animationFillMode = "forwards", b = v.setTimeout(() => {
            a.style.animationFillMode === "forwards" && (a.style.animationFillMode = D);
          });
        }
      }, "handleAnimationEnd"), T = /* @__PURE__ */ Ca((E) => {
        E.target === a && (u.current = qo(o.current));
      }, "handleAnimationStart");
      return a.addEventListener("animationstart", T), a.addEventListener("animationcancel", w), a.addEventListener("animationend", w), () => {
        v.clearTimeout(b), a.removeEventListener("animationstart", T), a.removeEventListener("animationcancel", w), a.removeEventListener("animationend", w);
      };
    } else
      p("ANIMATION_END");
  }, [a, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: x.useCallback((b) => {
      if (b) {
        const v = getComputedStyle(b);
        o.current = v, d.current = qo(v);
      } else
        o.current = null;
      l(b);
    }, [])
  };
}
Ca(Tb, "usePresence");
function cd(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
Ca(cd, "setRef");
function Ob(...n) {
  const a = x.useRef(n);
  return a.current = n, x.useCallback((l) => {
    const o = a.current;
    let s = !1;
    const u = o.map((d) => {
      const m = cd(d, l);
      return !s && typeof m == "function" && (s = !0), m;
    });
    if (s)
      return () => {
        for (let d = 0; d < u.length; d++) {
          const m = u[d];
          typeof m == "function" ? m() : cd(o[d], null);
        }
      };
  }, []);
}
Ca(Ob, "useStableComposedRefs");
function qo(n) {
  return n?.animationName || "none";
}
Ca(qo, "getAnimationName");
function Mb(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning;
  return l ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
Ca(Mb, "getElementRef");
var rE = Object.defineProperty, Qo = (n, a) => rE(n, "name", { value: a, configurable: !0 }), Db = {
  Automatic: "automatic",
  Manual: "manual"
}, Yd = "Tabs", [oE, JA] = /* @__PURE__ */ Ta(Yd, [
  xb
]), _b = xb(), [lE, Ud] = oE(Yd), iE = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qo(function(a, l) {
    const {
      __scopeTabs: o,
      value: s,
      onValueChange: u,
      defaultValue: d,
      orientation: m = "horizontal",
      dir: h,
      activationMode: p = Db.Automatic,
      ...b
    } = a, v = Zs(h), [w, T] = Hr({
      prop: s,
      onChange: u,
      defaultProp: d ?? "",
      caller: Yd
    });
    return /* @__PURE__ */ g.jsx(
      lE,
      {
        scope: o,
        baseId: nr(),
        value: w,
        onValueChange: T,
        orientation: m,
        dir: v,
        activationMode: p,
        children: /* @__PURE__ */ g.jsx(
          rt.div,
          {
            dir: v,
            "data-orientation": m,
            ...b,
            ref: l
          }
        )
      }
    );
  }, "Tabs")
), sE = "TabsList", cE = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qo(function(a, l) {
    const { __scopeTabs: o, loop: s = !0, ...u } = a, d = Ud(sE, o), m = _b(o);
    return /* @__PURE__ */ g.jsx(
      KC,
      {
        asChild: !0,
        ...m,
        orientation: d.orientation,
        dir: d.dir,
        loop: s,
        children: /* @__PURE__ */ g.jsx(
          rt.div,
          {
            role: "tablist",
            "aria-orientation": d.orientation,
            ...u,
            ref: l
          }
        )
      }
    );
  }, "TabsList")
), uE = "TabsTrigger", fE = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Qo(function(a, l) {
    const { __scopeTabs: o, value: s, disabled: u = !1, ...d } = a, m = Ud(uE, o), h = _b(o), p = Bd(m.baseId, s), b = Ld(m.baseId, s), v = s === m.value;
    return /* @__PURE__ */ g.jsx(
      tE,
      {
        asChild: !0,
        ...h,
        focusable: !u,
        active: v,
        children: /* @__PURE__ */ g.jsx(
          rt.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": v,
            "aria-controls": b,
            "data-state": v ? "active" : "inactive",
            "data-disabled": u ? "" : void 0,
            disabled: u,
            id: p,
            ...d,
            ref: l,
            onMouseDown: Ye(a.onMouseDown, (w) => {
              !u && w.button === 0 && w.ctrlKey === !1 ? (w.currentTarget.focus(), m.onValueChange(s)) : w.preventDefault();
            }),
            onKeyDown: Ye(a.onKeyDown, (w) => {
              u || w.target !== w.currentTarget || [" ", "Enter"].includes(w.key) && m.onValueChange(s);
            }),
            onFocus: Ye(a.onFocus, () => {
              const w = m.activationMode !== Db.Manual;
              !v && !u && w && m.onValueChange(s);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), dE = "TabsContent", mE = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Qo(function(a, l) {
    const { __scopeTabs: o, value: s, forceMount: u, children: d, ...m } = a, h = Ud(dE, o), p = Bd(h.baseId, s), b = Ld(h.baseId, s), v = s === h.value, w = x.useRef(v);
    return x.useEffect(() => {
      const T = requestAnimationFrame(() => w.current = !1);
      return () => cancelAnimationFrame(T);
    }, []), /* @__PURE__ */ g.jsx($s, { present: u || v, children: ({ present: T }) => /* @__PURE__ */ g.jsx(
      rt.div,
      {
        "data-state": v ? "active" : "inactive",
        "data-orientation": h.orientation,
        role: "tabpanel",
        "aria-labelledby": p,
        hidden: !T,
        id: b,
        tabIndex: 0,
        ...m,
        ref: l,
        style: {
          ...a.style,
          animationDuration: w.current ? "0s" : void 0
        },
        children: T && d
      }
    ) });
  }, "TabsContent")
);
function Bd(n, a) {
  return `${n}-trigger-${a}`;
}
Qo(Bd, "makeTriggerId");
function Ld(n, a) {
  return `${n}-content-${a}`;
}
Qo(Ld, "makeContentId");
function Nb({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ g.jsx(
    iE,
    {
      "data-slot": "tabs",
      className: we("flex flex-col gap-2", n),
      ...a
    }
  );
}
function Ab({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ g.jsx(
    cE,
    {
      "data-slot": "tabs-list",
      className: we(
        "bg-background text-muted-foreground inline-flex h-9 w-fit items-center justify-start rounded-none gap-4 border-b border-border",
        n
      ),
      ...a
    }
  );
}
function kb({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ g.jsx(
    fE,
    {
      "data-slot": "tabs-trigger",
      className: we(
        "cursor-pointer data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n
      ),
      ...a
    }
  );
}
function jb({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ g.jsx(
    mE,
    {
      "data-slot": "tabs-content",
      className: we("flex-1 outline-none", n),
      ...a
    }
  );
}
const Rb = 6048e5, hE = 864e5, pE = 6e4, gE = 36e5, yE = 1e3, Uy = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Ke(n, a) {
  return typeof n == "function" ? n(a) : n && typeof n == "object" && Uy in n ? n[Uy](a) : n instanceof Date ? new n.constructor(a) : new Date(a);
}
function Le(n, a) {
  return Ke(a || n, n);
}
function Ks(n, a, l) {
  const o = Le(n, l?.in);
  return isNaN(a) ? Ke(l?.in || n, NaN) : (a && o.setDate(o.getDate() + a), o);
}
function zb(n, a, l) {
  const o = Le(n, l?.in);
  if (isNaN(a)) return Ke(n, NaN);
  if (!a)
    return o;
  const s = o.getDate(), u = Ke(n, o.getTime());
  u.setMonth(o.getMonth() + a + 1, 0);
  const d = u.getDate();
  return s >= d ? u : (o.setFullYear(
    u.getFullYear(),
    u.getMonth(),
    s
  ), o);
}
let vE = {};
function Wr() {
  return vE;
}
function Nn(n, a) {
  const l = Wr(), o = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, s = Le(n, a?.in), u = s.getDay(), d = (u < o ? 7 : 0) + u - o;
  return s.setDate(s.getDate() - d), s.setHours(0, 0, 0, 0), s;
}
function Yr(n, a) {
  return Nn(n, { ...a, weekStartsOn: 1 });
}
function Hb(n, a) {
  const l = Le(n, a?.in), o = l.getFullYear(), s = Ke(l, 0);
  s.setFullYear(o + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const u = Yr(s), d = Ke(l, 0);
  d.setFullYear(o, 0, 4), d.setHours(0, 0, 0, 0);
  const m = Yr(d);
  return l.getTime() >= u.getTime() ? o + 1 : l.getTime() >= m.getTime() ? o : o - 1;
}
function Ls(n) {
  const a = Le(n), l = new Date(
    Date.UTC(
      a.getFullYear(),
      a.getMonth(),
      a.getDate(),
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
      a.getMilliseconds()
    )
  );
  return l.setUTCFullYear(a.getFullYear()), +n - +l;
}
function Vr(n, ...a) {
  const l = Ke.bind(
    null,
    n || a.find((o) => typeof o == "object")
  );
  return a.map(l);
}
function Zl(n, a) {
  const l = Le(n, a?.in);
  return l.setHours(0, 0, 0, 0), l;
}
function qd(n, a, l) {
  const [o, s] = Vr(
    l?.in,
    n,
    a
  ), u = Zl(o), d = Zl(s), m = +u - Ls(u), h = +d - Ls(d);
  return Math.round((m - h) / hE);
}
function bE(n, a) {
  const l = Hb(n, a), o = Ke(n, 0);
  return o.setFullYear(l, 0, 4), o.setHours(0, 0, 0, 0), Yr(o);
}
function xE(n, a, l) {
  return Ks(n, a * 7, l);
}
function wE(n, a, l) {
  return zb(n, a * 12, l);
}
function SE(n, a) {
  let l, o = a?.in;
  return n.forEach((s) => {
    !o && typeof s == "object" && (o = Ke.bind(null, s));
    const u = Le(s, o);
    (!l || l < u || isNaN(+u)) && (l = u);
  }), Ke(o, l || NaN);
}
function CE(n, a) {
  let l, o = a?.in;
  return n.forEach((s) => {
    !o && typeof s == "object" && (o = Ke.bind(null, s));
    const u = Le(s, o);
    (!l || l > u || isNaN(+u)) && (l = u);
  }), Ke(o, l || NaN);
}
function EE(n, a, l) {
  const [o, s] = Vr(
    l?.in,
    n,
    a
  );
  return +Zl(o) == +Zl(s);
}
function Yb(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function Ub(n) {
  return !(!Yb(n) && typeof n != "number" || isNaN(+Le(n)));
}
function Bb(n, a, l) {
  const [o, s] = Vr(
    l?.in,
    n,
    a
  ), u = o.getFullYear() - s.getFullYear(), d = o.getMonth() - s.getMonth();
  return u * 12 + d;
}
function TE(n, a) {
  const l = Le(n, a?.in), o = l.getMonth();
  return l.setFullYear(l.getFullYear(), o + 1, 0), l.setHours(23, 59, 59, 999), l;
}
function Lb(n, a) {
  const [l, o] = Vr(n, a.start, a.end);
  return { start: l, end: o };
}
function OE(n, a) {
  const { start: l, end: o } = Lb(a?.in, n);
  let s = +l > +o;
  const u = s ? +l : +o, d = s ? o : l;
  d.setHours(0, 0, 0, 0), d.setDate(1);
  let m = 1;
  const h = [];
  for (; +d <= u; )
    h.push(Ke(l, d)), d.setMonth(d.getMonth() + m);
  return s ? h.reverse() : h;
}
function ME(n, a) {
  const l = Le(n, a?.in);
  return l.setDate(1), l.setHours(0, 0, 0, 0), l;
}
function DE(n, a) {
  const l = Le(n, a?.in), o = l.getFullYear();
  return l.setFullYear(o + 1, 0, 0), l.setHours(23, 59, 59, 999), l;
}
function qb(n, a) {
  const l = Le(n, a?.in);
  return l.setFullYear(l.getFullYear(), 0, 1), l.setHours(0, 0, 0, 0), l;
}
function _E(n, a) {
  const { start: l, end: o } = Lb(a?.in, n);
  let s = +l > +o;
  const u = s ? +l : +o, d = s ? o : l;
  d.setHours(0, 0, 0, 0), d.setMonth(0, 1);
  let m = 1;
  const h = [];
  for (; +d <= u; )
    h.push(Ke(l, d)), d.setFullYear(d.getFullYear() + m);
  return s ? h.reverse() : h;
}
function Pb(n, a) {
  const l = Wr(), o = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, s = Le(n, a?.in), u = s.getDay(), d = (u < o ? -7 : 0) + 6 - (u - o);
  return s.setDate(s.getDate() + d), s.setHours(23, 59, 59, 999), s;
}
function NE(n, a) {
  return Pb(n, { ...a, weekStartsOn: 1 });
}
const AE = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, kE = (n, a, l) => {
  let o;
  const s = AE[n];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", a.toString()), l?.addSuffix ? l.comparison && l.comparison > 0 ? "in " + o : o + " ago" : o;
};
function Po(n) {
  return (a = {}) => {
    const l = a.width ? String(a.width) : n.defaultWidth;
    return n.formats[l] || n.formats[n.defaultWidth];
  };
}
const jE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, RE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, zE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, HE = {
  date: Po({
    formats: jE,
    defaultWidth: "full"
  }),
  time: Po({
    formats: RE,
    defaultWidth: "full"
  }),
  dateTime: Po({
    formats: zE,
    defaultWidth: "full"
  })
}, YE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, UE = (n, a, l, o) => YE[n];
function Un(n) {
  return (a, l) => {
    const o = l?.context ? String(l.context) : "standalone";
    let s;
    if (o === "formatting" && n.formattingValues) {
      const d = n.defaultFormattingWidth || n.defaultWidth, m = l?.width ? String(l.width) : d;
      s = n.formattingValues[m] || n.formattingValues[d];
    } else {
      const d = n.defaultWidth, m = l?.width ? String(l.width) : n.defaultWidth;
      s = n.values[m] || n.values[d];
    }
    const u = n.argumentCallback ? n.argumentCallback(a) : a;
    return s[u];
  };
}
const BE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, LE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qE = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, PE = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, GE = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, WE = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, VE = (n, a) => {
  const l = Number(n), o = l % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return l + "st";
      case 2:
        return l + "nd";
      case 3:
        return l + "rd";
    }
  return l + "th";
}, FE = {
  ordinalNumber: VE,
  era: Un({
    values: BE,
    defaultWidth: "wide"
  }),
  quarter: Un({
    values: LE,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Un({
    values: qE,
    defaultWidth: "wide"
  }),
  day: Un({
    values: PE,
    defaultWidth: "wide"
  }),
  dayPeriod: Un({
    values: GE,
    defaultWidth: "wide",
    formattingValues: WE,
    defaultFormattingWidth: "wide"
  })
};
function Bn(n) {
  return (a, l = {}) => {
    const o = l.width, s = o && n.matchPatterns[o] || n.matchPatterns[n.defaultMatchWidth], u = a.match(s);
    if (!u)
      return null;
    const d = u[0], m = o && n.parsePatterns[o] || n.parsePatterns[n.defaultParseWidth], h = Array.isArray(m) ? QE(m, (v) => v.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      XE(m, (v) => v.test(d))
    );
    let p;
    p = n.valueCallback ? n.valueCallback(h) : h, p = l.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      l.valueCallback(p)
    ) : p;
    const b = a.slice(d.length);
    return { value: p, rest: b };
  };
}
function XE(n, a) {
  for (const l in n)
    if (Object.prototype.hasOwnProperty.call(n, l) && a(n[l]))
      return l;
}
function QE(n, a) {
  for (let l = 0; l < n.length; l++)
    if (a(n[l]))
      return l;
}
function Gb(n) {
  return (a, l = {}) => {
    const o = a.match(n.matchPattern);
    if (!o) return null;
    const s = o[0], u = a.match(n.parsePattern);
    if (!u) return null;
    let d = n.valueCallback ? n.valueCallback(u[0]) : u[0];
    d = l.valueCallback ? l.valueCallback(d) : d;
    const m = a.slice(s.length);
    return { value: d, rest: m };
  };
}
const ZE = /^(\d+)(th|st|nd|rd)?/i, IE = /\d+/i, $E = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, KE = {
  any: [/^b/i, /^(a|c)/i]
}, JE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, eT = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, nT = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, aT = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, rT = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, oT = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, lT = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, iT = {
  ordinalNumber: Gb({
    matchPattern: ZE,
    parsePattern: IE,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Bn({
    matchPatterns: $E,
    defaultMatchWidth: "wide",
    parsePatterns: KE,
    defaultParseWidth: "any"
  }),
  quarter: Bn({
    matchPatterns: JE,
    defaultMatchWidth: "wide",
    parsePatterns: eT,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Bn({
    matchPatterns: tT,
    defaultMatchWidth: "wide",
    parsePatterns: nT,
    defaultParseWidth: "any"
  }),
  day: Bn({
    matchPatterns: aT,
    defaultMatchWidth: "wide",
    parsePatterns: rT,
    defaultParseWidth: "any"
  }),
  dayPeriod: Bn({
    matchPatterns: oT,
    defaultMatchWidth: "any",
    parsePatterns: lT,
    defaultParseWidth: "any"
  })
}, zr = {
  code: "en-US",
  formatDistance: kE,
  formatLong: HE,
  formatRelative: UE,
  localize: FE,
  match: iT,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function sT(n, a) {
  const l = Le(n, a?.in);
  return qd(l, qb(l)) + 1;
}
function Js(n, a) {
  const l = Le(n, a?.in), o = +Yr(l) - +bE(l);
  return Math.round(o / Rb) + 1;
}
function Pd(n, a) {
  const l = Le(n, a?.in), o = l.getFullYear(), s = Wr(), u = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, d = Ke(a?.in || n, 0);
  d.setFullYear(o + 1, 0, u), d.setHours(0, 0, 0, 0);
  const m = Nn(d, a), h = Ke(a?.in || n, 0);
  h.setFullYear(o, 0, u), h.setHours(0, 0, 0, 0);
  const p = Nn(h, a);
  return +l >= +m ? o + 1 : +l >= +p ? o : o - 1;
}
function cT(n, a) {
  const l = Wr(), o = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, s = Pd(n, a), u = Ke(a?.in || n, 0);
  return u.setFullYear(s, 0, o), u.setHours(0, 0, 0, 0), Nn(u, a);
}
function ec(n, a) {
  const l = Le(n, a?.in), o = +Nn(l, a) - +cT(l, a);
  return Math.round(o / Rb) + 1;
}
function $e(n, a) {
  const l = n < 0 ? "-" : "", o = Math.abs(n).toString().padStart(a, "0");
  return l + o;
}
const er = {
  // Year
  y(n, a) {
    const l = n.getFullYear(), o = l > 0 ? l : 1 - l;
    return $e(a === "yy" ? o % 100 : o, a.length);
  },
  // Month
  M(n, a) {
    const l = n.getMonth();
    return a === "M" ? String(l + 1) : $e(l + 1, 2);
  },
  // Day of the month
  d(n, a) {
    return $e(n.getDate(), a.length);
  },
  // AM or PM
  a(n, a) {
    const l = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return l.toUpperCase();
      case "aaa":
        return l;
      case "aaaaa":
        return l[0];
      default:
        return l === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, a) {
    return $e(n.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(n, a) {
    return $e(n.getHours(), a.length);
  },
  // Minute
  m(n, a) {
    return $e(n.getMinutes(), a.length);
  },
  // Second
  s(n, a) {
    return $e(n.getSeconds(), a.length);
  },
  // Fraction of second
  S(n, a) {
    const l = a.length, o = n.getMilliseconds(), s = Math.trunc(
      o * Math.pow(10, l - 3)
    );
    return $e(s, a.length);
  }
}, Ro = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, By = {
  // Era
  G: function(n, a, l) {
    const o = n.getFullYear() > 0 ? 1 : 0;
    switch (a) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return l.era(o, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return l.era(o, { width: "narrow" });
      default:
        return l.era(o, { width: "wide" });
    }
  },
  // Year
  y: function(n, a, l) {
    if (a === "yo") {
      const o = n.getFullYear(), s = o > 0 ? o : 1 - o;
      return l.ordinalNumber(s, { unit: "year" });
    }
    return er.y(n, a);
  },
  // Local week-numbering year
  Y: function(n, a, l, o) {
    const s = Pd(n, o), u = s > 0 ? s : 1 - s;
    if (a === "YY") {
      const d = u % 100;
      return $e(d, 2);
    }
    return a === "Yo" ? l.ordinalNumber(u, { unit: "year" }) : $e(u, a.length);
  },
  // ISO week-numbering year
  R: function(n, a) {
    const l = Hb(n);
    return $e(l, a.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, a) {
    const l = n.getFullYear();
    return $e(l, a.length);
  },
  // Quarter
  Q: function(n, a, l) {
    const o = Math.ceil((n.getMonth() + 1) / 3);
    switch (a) {
      // 1, 2, 3, 4
      case "Q":
        return String(o);
      // 01, 02, 03, 04
      case "QQ":
        return $e(o, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return l.ordinalNumber(o, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return l.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return l.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return l.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, a, l) {
    const o = Math.ceil((n.getMonth() + 1) / 3);
    switch (a) {
      // 1, 2, 3, 4
      case "q":
        return String(o);
      // 01, 02, 03, 04
      case "qq":
        return $e(o, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return l.ordinalNumber(o, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return l.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return l.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return l.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, a, l) {
    const o = n.getMonth();
    switch (a) {
      case "M":
      case "MM":
        return er.M(n, a);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return l.ordinalNumber(o + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return l.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return l.month(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return l.month(o, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, a, l) {
    const o = n.getMonth();
    switch (a) {
      // 1, 2, ..., 12
      case "L":
        return String(o + 1);
      // 01, 02, ..., 12
      case "LL":
        return $e(o + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return l.ordinalNumber(o + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return l.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return l.month(o, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return l.month(o, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, a, l, o) {
    const s = ec(n, o);
    return a === "wo" ? l.ordinalNumber(s, { unit: "week" }) : $e(s, a.length);
  },
  // ISO week of year
  I: function(n, a, l) {
    const o = Js(n);
    return a === "Io" ? l.ordinalNumber(o, { unit: "week" }) : $e(o, a.length);
  },
  // Day of the month
  d: function(n, a, l) {
    return a === "do" ? l.ordinalNumber(n.getDate(), { unit: "date" }) : er.d(n, a);
  },
  // Day of year
  D: function(n, a, l) {
    const o = sT(n);
    return a === "Do" ? l.ordinalNumber(o, { unit: "dayOfYear" }) : $e(o, a.length);
  },
  // Day of week
  E: function(n, a, l) {
    const o = n.getDay();
    switch (a) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return l.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return l.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return l.day(o, {
          width: "short",
          context: "formatting"
        });
      default:
        return l.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, a, l, o) {
    const s = n.getDay(), u = (s - o.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(u);
      // Padded numerical value
      case "ee":
        return $e(u, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return l.ordinalNumber(u, { unit: "day" });
      case "eee":
        return l.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return l.day(s, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return l.day(s, {
          width: "short",
          context: "formatting"
        });
      default:
        return l.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, a, l, o) {
    const s = n.getDay(), u = (s - o.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      // Numerical value (same as in `e`)
      case "c":
        return String(u);
      // Padded numerical value
      case "cc":
        return $e(u, a.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return l.ordinalNumber(u, { unit: "day" });
      case "ccc":
        return l.day(s, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return l.day(s, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return l.day(s, {
          width: "short",
          context: "standalone"
        });
      default:
        return l.day(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, a, l) {
    const o = n.getDay(), s = o === 0 ? 7 : o;
    switch (a) {
      // 2
      case "i":
        return String(s);
      // 02
      case "ii":
        return $e(s, a.length);
      // 2nd
      case "io":
        return l.ordinalNumber(s, { unit: "day" });
      // Tue
      case "iii":
        return l.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return l.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return l.day(o, {
          width: "short",
          context: "formatting"
        });
      default:
        return l.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, a, l) {
    const s = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return l.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return l.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return l.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return l.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, a, l) {
    const o = n.getHours();
    let s;
    switch (o === 12 ? s = Ro.noon : o === 0 ? s = Ro.midnight : s = o / 12 >= 1 ? "pm" : "am", a) {
      case "b":
      case "bb":
        return l.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return l.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return l.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return l.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, a, l) {
    const o = n.getHours();
    let s;
    switch (o >= 17 ? s = Ro.evening : o >= 12 ? s = Ro.afternoon : o >= 4 ? s = Ro.morning : s = Ro.night, a) {
      case "B":
      case "BB":
      case "BBB":
        return l.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return l.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return l.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, a, l) {
    if (a === "ho") {
      let o = n.getHours() % 12;
      return o === 0 && (o = 12), l.ordinalNumber(o, { unit: "hour" });
    }
    return er.h(n, a);
  },
  // Hour [0-23]
  H: function(n, a, l) {
    return a === "Ho" ? l.ordinalNumber(n.getHours(), { unit: "hour" }) : er.H(n, a);
  },
  // Hour [0-11]
  K: function(n, a, l) {
    const o = n.getHours() % 12;
    return a === "Ko" ? l.ordinalNumber(o, { unit: "hour" }) : $e(o, a.length);
  },
  // Hour [1-24]
  k: function(n, a, l) {
    let o = n.getHours();
    return o === 0 && (o = 24), a === "ko" ? l.ordinalNumber(o, { unit: "hour" }) : $e(o, a.length);
  },
  // Minute
  m: function(n, a, l) {
    return a === "mo" ? l.ordinalNumber(n.getMinutes(), { unit: "minute" }) : er.m(n, a);
  },
  // Second
  s: function(n, a, l) {
    return a === "so" ? l.ordinalNumber(n.getSeconds(), { unit: "second" }) : er.s(n, a);
  },
  // Fraction of second
  S: function(n, a) {
    return er.S(n, a);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, a, l) {
    const o = n.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (a) {
      // Hours and optional minutes
      case "X":
        return qy(o);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Rr(o);
      // Hours and minutes with `:` delimiter
      default:
        return Rr(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, a, l) {
    const o = n.getTimezoneOffset();
    switch (a) {
      // Hours and optional minutes
      case "x":
        return qy(o);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Rr(o);
      // Hours and minutes with `:` delimiter
      default:
        return Rr(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, a, l) {
    const o = n.getTimezoneOffset();
    switch (a) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ly(o, ":");
      default:
        return "GMT" + Rr(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, a, l) {
    const o = n.getTimezoneOffset();
    switch (a) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ly(o, ":");
      default:
        return "GMT" + Rr(o, ":");
    }
  },
  // Seconds timestamp
  t: function(n, a, l) {
    const o = Math.trunc(+n / 1e3);
    return $e(o, a.length);
  },
  // Milliseconds timestamp
  T: function(n, a, l) {
    return $e(+n, a.length);
  }
};
function Ly(n, a = "") {
  const l = n > 0 ? "-" : "+", o = Math.abs(n), s = Math.trunc(o / 60), u = o % 60;
  return u === 0 ? l + String(s) : l + String(s) + a + $e(u, 2);
}
function qy(n, a) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + $e(Math.abs(n) / 60, 2) : Rr(n, a);
}
function Rr(n, a = "") {
  const l = n > 0 ? "-" : "+", o = Math.abs(n), s = $e(Math.trunc(o / 60), 2), u = $e(o % 60, 2);
  return l + s + a + u;
}
const Py = (n, a) => {
  switch (n) {
    case "P":
      return a.date({ width: "short" });
    case "PP":
      return a.date({ width: "medium" });
    case "PPP":
      return a.date({ width: "long" });
    default:
      return a.date({ width: "full" });
  }
}, Wb = (n, a) => {
  switch (n) {
    case "p":
      return a.time({ width: "short" });
    case "pp":
      return a.time({ width: "medium" });
    case "ppp":
      return a.time({ width: "long" });
    default:
      return a.time({ width: "full" });
  }
}, uT = (n, a) => {
  const l = n.match(/(P+)(p+)?/) || [], o = l[1], s = l[2];
  if (!s)
    return Py(n, a);
  let u;
  switch (o) {
    case "P":
      u = a.dateTime({ width: "short" });
      break;
    case "PP":
      u = a.dateTime({ width: "medium" });
      break;
    case "PPP":
      u = a.dateTime({ width: "long" });
      break;
    default:
      u = a.dateTime({ width: "full" });
      break;
  }
  return u.replace("{{date}}", Py(o, a)).replace("{{time}}", Wb(s, a));
}, ud = {
  p: Wb,
  P: uT
}, fT = /^D+$/, dT = /^Y+$/, mT = ["D", "DD", "YY", "YYYY"];
function Vb(n) {
  return fT.test(n);
}
function Fb(n) {
  return dT.test(n);
}
function fd(n, a, l) {
  const o = hT(n, a, l);
  if (console.warn(o), mT.includes(n)) throw new RangeError(o);
}
function hT(n, a, l) {
  const o = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${o} to the input \`${l}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const pT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, yT = /^'([^]*?)'?$/, vT = /''/g, bT = /[a-zA-Z]/;
function tr(n, a, l) {
  const o = Wr(), s = l?.locale ?? o.locale ?? zr, u = l?.firstWeekContainsDate ?? l?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, d = l?.weekStartsOn ?? l?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, m = Le(n, l?.in);
  if (!Ub(m))
    throw new RangeError("Invalid time value");
  let h = a.match(gT).map((b) => {
    const v = b[0];
    if (v === "p" || v === "P") {
      const w = ud[v];
      return w(b, s.formatLong);
    }
    return b;
  }).join("").match(pT).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const v = b[0];
    if (v === "'")
      return { isToken: !1, value: xT(b) };
    if (By[v])
      return { isToken: !0, value: b };
    if (v.match(bT))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: b };
  });
  s.localize.preprocessor && (h = s.localize.preprocessor(m, h));
  const p = {
    firstWeekContainsDate: u,
    weekStartsOn: d,
    locale: s
  };
  return h.map((b) => {
    if (!b.isToken) return b.value;
    const v = b.value;
    (!l?.useAdditionalWeekYearTokens && Fb(v) || !l?.useAdditionalDayOfYearTokens && Vb(v)) && fd(v, a, String(n));
    const w = By[v[0]];
    return w(m, v, s.localize, p);
  }).join("");
}
function xT(n) {
  const a = n.match(yT);
  return a ? a[1].replace(vT, "'") : n;
}
function wT(n, a) {
  const l = Le(n, a?.in), o = l.getFullYear(), s = l.getMonth(), u = Ke(l, 0);
  return u.setFullYear(o, s + 1, 0), u.setHours(0, 0, 0, 0), u.getDate();
}
function ST() {
  return Object.assign({}, Wr());
}
function CT(n, a) {
  const l = Le(n, a?.in).getDay();
  return l === 0 ? 7 : l;
}
function ET(n, a) {
  return Le(n, a?.in).getMonth();
}
function TT(n, a) {
  return Le(n, a?.in).getFullYear();
}
function OT(n, a) {
  return +Le(n) > +Le(a);
}
function MT(n, a) {
  return +Le(n) < +Le(a);
}
function DT(n, a) {
  const l = _T(a) ? new a(0) : Ke(a, 0);
  return l.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), l.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), l;
}
function _T(n) {
  return typeof n == "function" && n.prototype?.constructor === n;
}
const NT = 10;
class Xb {
  subPriority = 0;
  validate(a, l) {
    return !0;
  }
}
class AT extends Xb {
  constructor(a, l, o, s, u) {
    super(), this.value = a, this.validateValue = l, this.setValue = o, this.priority = s, u && (this.subPriority = u);
  }
  validate(a, l) {
    return this.validateValue(a, this.value, l);
  }
  set(a, l, o) {
    return this.setValue(a, l, this.value, o);
  }
}
class kT extends Xb {
  priority = NT;
  subPriority = -1;
  constructor(a, l) {
    super(), this.context = a || ((o) => Ke(l, o));
  }
  set(a, l) {
    return l.timestampIsSet ? a : Ke(a, DT(a, this.context));
  }
}
class Xe {
  run(a, l, o, s) {
    const u = this.parse(a, l, o, s);
    return u ? {
      setter: new AT(
        u.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: u.rest
    } : null;
  }
  validate(a, l, o) {
    return !0;
  }
}
class jT extends Xe {
  priority = 140;
  parse(a, l, o) {
    switch (l) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return o.era(a, { width: "abbreviated" }) || o.era(a, { width: "narrow" });
      // A, B
      case "GGGGG":
        return o.era(a, { width: "narrow" });
      default:
        return o.era(a, { width: "wide" }) || o.era(a, { width: "abbreviated" }) || o.era(a, { width: "narrow" });
    }
  }
  set(a, l, o) {
    return l.era = o, a.setFullYear(o, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
}
const yt = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Ln = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function vt(n, a) {
  return n && {
    value: a(n.value),
    rest: n.rest
  };
}
function ct(n, a) {
  const l = a.match(n);
  return l ? {
    value: parseInt(l[0], 10),
    rest: a.slice(l[0].length)
  } : null;
}
function qn(n, a) {
  const l = a.match(n);
  if (!l)
    return null;
  if (l[0] === "Z")
    return {
      value: 0,
      rest: a.slice(1)
    };
  const o = l[1] === "+" ? 1 : -1, s = l[2] ? parseInt(l[2], 10) : 0, u = l[3] ? parseInt(l[3], 10) : 0, d = l[5] ? parseInt(l[5], 10) : 0;
  return {
    value: o * (s * gE + u * pE + d * yE),
    rest: a.slice(l[0].length)
  };
}
function Qb(n) {
  return ct(yt.anyDigitsSigned, n);
}
function dt(n, a) {
  switch (n) {
    case 1:
      return ct(yt.singleDigit, a);
    case 2:
      return ct(yt.twoDigits, a);
    case 3:
      return ct(yt.threeDigits, a);
    case 4:
      return ct(yt.fourDigits, a);
    default:
      return ct(new RegExp("^\\d{1," + n + "}"), a);
  }
}
function qs(n, a) {
  switch (n) {
    case 1:
      return ct(yt.singleDigitSigned, a);
    case 2:
      return ct(yt.twoDigitsSigned, a);
    case 3:
      return ct(yt.threeDigitsSigned, a);
    case 4:
      return ct(yt.fourDigitsSigned, a);
    default:
      return ct(new RegExp("^-?\\d{1," + n + "}"), a);
  }
}
function Gd(n) {
  switch (n) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    default:
      return 0;
  }
}
function Zb(n, a) {
  const l = a > 0, o = l ? a : 1 - a;
  let s;
  if (o <= 50)
    s = n || 100;
  else {
    const u = o + 50, d = Math.trunc(u / 100) * 100, m = n >= u % 100;
    s = n + d - (m ? 100 : 0);
  }
  return l ? s : 1 - s;
}
function Ib(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class RT extends Xe {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(a, l, o) {
    const s = (u) => ({
      year: u,
      isTwoDigitYear: l === "yy"
    });
    switch (l) {
      case "y":
        return vt(dt(4, a), s);
      case "yo":
        return vt(
          o.ordinalNumber(a, {
            unit: "year"
          }),
          s
        );
      default:
        return vt(dt(l.length, a), s);
    }
  }
  validate(a, l) {
    return l.isTwoDigitYear || l.year > 0;
  }
  set(a, l, o) {
    const s = a.getFullYear();
    if (o.isTwoDigitYear) {
      const d = Zb(
        o.year,
        s
      );
      return a.setFullYear(d, 0, 1), a.setHours(0, 0, 0, 0), a;
    }
    const u = !("era" in l) || l.era === 1 ? o.year : 1 - o.year;
    return a.setFullYear(u, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class zT extends Xe {
  priority = 130;
  parse(a, l, o) {
    const s = (u) => ({
      year: u,
      isTwoDigitYear: l === "YY"
    });
    switch (l) {
      case "Y":
        return vt(dt(4, a), s);
      case "Yo":
        return vt(
          o.ordinalNumber(a, {
            unit: "year"
          }),
          s
        );
      default:
        return vt(dt(l.length, a), s);
    }
  }
  validate(a, l) {
    return l.isTwoDigitYear || l.year > 0;
  }
  set(a, l, o, s) {
    const u = Pd(a, s);
    if (o.isTwoDigitYear) {
      const m = Zb(
        o.year,
        u
      );
      return a.setFullYear(
        m,
        0,
        s.firstWeekContainsDate
      ), a.setHours(0, 0, 0, 0), Nn(a, s);
    }
    const d = !("era" in l) || l.era === 1 ? o.year : 1 - o.year;
    return a.setFullYear(d, 0, s.firstWeekContainsDate), a.setHours(0, 0, 0, 0), Nn(a, s);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
class HT extends Xe {
  priority = 130;
  parse(a, l) {
    return qs(l === "R" ? 4 : l.length, a);
  }
  set(a, l, o) {
    const s = Ke(a, 0);
    return s.setFullYear(o, 0, 4), s.setHours(0, 0, 0, 0), Yr(s);
  }
  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
class YT extends Xe {
  priority = 130;
  parse(a, l) {
    return qs(l === "u" ? 4 : l.length, a);
  }
  set(a, l, o) {
    return a.setFullYear(o, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class UT extends Xe {
  priority = 120;
  parse(a, l, o) {
    switch (l) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return dt(l.length, a);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return o.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return o.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return o.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return o.quarter(a, {
          width: "wide",
          context: "formatting"
        }) || o.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(a, l) {
    return l >= 1 && l <= 4;
  }
  set(a, l, o) {
    return a.setMonth((o - 1) * 3, 1), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class BT extends Xe {
  priority = 120;
  parse(a, l, o) {
    switch (l) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return dt(l.length, a);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return o.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return o.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        }) || o.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return o.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return o.quarter(a, {
          width: "wide",
          context: "standalone"
        }) || o.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        }) || o.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(a, l) {
    return l >= 1 && l <= 4;
  }
  set(a, l, o) {
    return a.setMonth((o - 1) * 3, 1), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class LT extends Xe {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
  priority = 110;
  parse(a, l, o) {
    const s = (u) => u - 1;
    switch (l) {
      // 1, 2, ..., 12
      case "M":
        return vt(
          ct(yt.month, a),
          s
        );
      // 01, 02, ..., 12
      case "MM":
        return vt(dt(2, a), s);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return vt(
          o.ordinalNumber(a, {
            unit: "month"
          }),
          s
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return o.month(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.month(a, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return o.month(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return o.month(a, { width: "wide", context: "formatting" }) || o.month(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.month(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 11;
  }
  set(a, l, o) {
    return a.setMonth(o, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class qT extends Xe {
  priority = 110;
  parse(a, l, o) {
    const s = (u) => u - 1;
    switch (l) {
      // 1, 2, ..., 12
      case "L":
        return vt(
          ct(yt.month, a),
          s
        );
      // 01, 02, ..., 12
      case "LL":
        return vt(dt(2, a), s);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return vt(
          o.ordinalNumber(a, {
            unit: "month"
          }),
          s
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return o.month(a, {
          width: "abbreviated",
          context: "standalone"
        }) || o.month(a, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return o.month(a, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return o.month(a, { width: "wide", context: "standalone" }) || o.month(a, {
          width: "abbreviated",
          context: "standalone"
        }) || o.month(a, { width: "narrow", context: "standalone" });
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 11;
  }
  set(a, l, o) {
    return a.setMonth(o, 1), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function PT(n, a, l) {
  const o = Le(n, l?.in), s = ec(o, l) - a;
  return o.setDate(o.getDate() - s * 7), Le(o, l?.in);
}
class GT extends Xe {
  priority = 100;
  parse(a, l, o) {
    switch (l) {
      case "w":
        return ct(yt.week, a);
      case "wo":
        return o.ordinalNumber(a, { unit: "week" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    return l >= 1 && l <= 53;
  }
  set(a, l, o, s) {
    return Nn(PT(a, o, s), s);
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T"
  ];
}
function WT(n, a, l) {
  const o = Le(n, l?.in), s = Js(o, l) - a;
  return o.setDate(o.getDate() - s * 7), o;
}
class VT extends Xe {
  priority = 100;
  parse(a, l, o) {
    switch (l) {
      case "I":
        return ct(yt.week, a);
      case "Io":
        return o.ordinalNumber(a, { unit: "week" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    return l >= 1 && l <= 53;
  }
  set(a, l, o) {
    return Yr(WT(a, o));
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T"
  ];
}
const FT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], XT = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class QT extends Xe {
  priority = 90;
  subPriority = 1;
  parse(a, l, o) {
    switch (l) {
      case "d":
        return ct(yt.date, a);
      case "do":
        return o.ordinalNumber(a, { unit: "date" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    const o = a.getFullYear(), s = Ib(o), u = a.getMonth();
    return s ? l >= 1 && l <= XT[u] : l >= 1 && l <= FT[u];
  }
  set(a, l, o) {
    return a.setDate(o), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
class ZT extends Xe {
  priority = 90;
  subpriority = 1;
  parse(a, l, o) {
    switch (l) {
      case "D":
      case "DD":
        return ct(yt.dayOfYear, a);
      case "Do":
        return o.ordinalNumber(a, { unit: "date" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    const o = a.getFullYear();
    return Ib(o) ? l >= 1 && l <= 366 : l >= 1 && l <= 365;
  }
  set(a, l, o) {
    return a.setMonth(0, o), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T"
  ];
}
function Wd(n, a, l) {
  const o = Wr(), s = l?.weekStartsOn ?? l?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, u = Le(n, l?.in), d = u.getDay(), h = (a % 7 + 7) % 7, p = 7 - s, b = a < 0 || a > 6 ? a - (d + p) % 7 : (h + p) % 7 - (d + p) % 7;
  return Ks(u, b, l);
}
class IT extends Xe {
  priority = 90;
  parse(a, l, o) {
    switch (l) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return o.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(a, { width: "short", context: "formatting" }) || o.day(a, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return o.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return o.day(a, { width: "short", context: "formatting" }) || o.day(a, { width: "narrow", context: "formatting" });
      default:
        return o.day(a, { width: "wide", context: "formatting" }) || o.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(a, { width: "short", context: "formatting" }) || o.day(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 6;
  }
  set(a, l, o, s) {
    return a = Wd(a, o, s), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class $T extends Xe {
  priority = 90;
  parse(a, l, o, s) {
    const u = (d) => {
      const m = Math.floor((d - 1) / 7) * 7;
      return (d + s.weekStartsOn + 6) % 7 + m;
    };
    switch (l) {
      // 3
      case "e":
      case "ee":
        return vt(dt(l.length, a), u);
      // 3rd
      case "eo":
        return vt(
          o.ordinalNumber(a, {
            unit: "day"
          }),
          u
        );
      // Tue
      case "eee":
        return o.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(a, { width: "short", context: "formatting" }) || o.day(a, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return o.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return o.day(a, { width: "short", context: "formatting" }) || o.day(a, { width: "narrow", context: "formatting" });
      default:
        return o.day(a, { width: "wide", context: "formatting" }) || o.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(a, { width: "short", context: "formatting" }) || o.day(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 6;
  }
  set(a, l, o, s) {
    return a = Wd(a, o, s), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T"
  ];
}
class KT extends Xe {
  priority = 90;
  parse(a, l, o, s) {
    const u = (d) => {
      const m = Math.floor((d - 1) / 7) * 7;
      return (d + s.weekStartsOn + 6) % 7 + m;
    };
    switch (l) {
      // 3
      case "c":
      case "cc":
        return vt(dt(l.length, a), u);
      // 3rd
      case "co":
        return vt(
          o.ordinalNumber(a, {
            unit: "day"
          }),
          u
        );
      // Tue
      case "ccc":
        return o.day(a, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(a, { width: "short", context: "standalone" }) || o.day(a, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return o.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return o.day(a, { width: "short", context: "standalone" }) || o.day(a, { width: "narrow", context: "standalone" });
      default:
        return o.day(a, { width: "wide", context: "standalone" }) || o.day(a, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(a, { width: "short", context: "standalone" }) || o.day(a, { width: "narrow", context: "standalone" });
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 6;
  }
  set(a, l, o, s) {
    return a = Wd(a, o, s), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T"
  ];
}
function JT(n, a, l) {
  const o = Le(n, l?.in), s = CT(o, l), u = a - s;
  return Ks(o, u, l);
}
class eO extends Xe {
  priority = 90;
  parse(a, l, o) {
    const s = (u) => u === 0 ? 7 : u;
    switch (l) {
      // 2
      case "i":
      case "ii":
        return dt(l.length, a);
      // 2nd
      case "io":
        return o.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return vt(
          o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      // T
      case "iiiii":
        return vt(
          o.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      // Tu
      case "iiiiii":
        return vt(
          o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      default:
        return vt(
          o.day(a, {
            width: "wide",
            context: "formatting"
          }) || o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
    }
  }
  validate(a, l) {
    return l >= 1 && l <= 7;
  }
  set(a, l, o) {
    return a = JT(a, o), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T"
  ];
}
class tO extends Xe {
  priority = 80;
  parse(a, l, o) {
    switch (l) {
      case "a":
      case "aa":
      case "aaa":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, l, o) {
    return a.setHours(Gd(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class nO extends Xe {
  priority = 80;
  parse(a, l, o) {
    switch (l) {
      case "b":
      case "bb":
      case "bbb":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, l, o) {
    return a.setHours(Gd(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class aO extends Xe {
  priority = 80;
  parse(a, l, o) {
    switch (l) {
      case "B":
      case "BB":
      case "BBB":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, l, o) {
    return a.setHours(Gd(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class rO extends Xe {
  priority = 70;
  parse(a, l, o) {
    switch (l) {
      case "h":
        return ct(yt.hour12h, a);
      case "ho":
        return o.ordinalNumber(a, { unit: "hour" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    return l >= 1 && l <= 12;
  }
  set(a, l, o) {
    const s = a.getHours() >= 12;
    return s && o < 12 ? a.setHours(o + 12, 0, 0, 0) : !s && o === 12 ? a.setHours(0, 0, 0, 0) : a.setHours(o, 0, 0, 0), a;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
class oO extends Xe {
  priority = 70;
  parse(a, l, o) {
    switch (l) {
      case "H":
        return ct(yt.hour23h, a);
      case "Ho":
        return o.ordinalNumber(a, { unit: "hour" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 23;
  }
  set(a, l, o) {
    return a.setHours(o, 0, 0, 0), a;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
class lO extends Xe {
  priority = 70;
  parse(a, l, o) {
    switch (l) {
      case "K":
        return ct(yt.hour11h, a);
      case "Ko":
        return o.ordinalNumber(a, { unit: "hour" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 11;
  }
  set(a, l, o) {
    return a.getHours() >= 12 && o < 12 ? a.setHours(o + 12, 0, 0, 0) : a.setHours(o, 0, 0, 0), a;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
}
class iO extends Xe {
  priority = 70;
  parse(a, l, o) {
    switch (l) {
      case "k":
        return ct(yt.hour24h, a);
      case "ko":
        return o.ordinalNumber(a, { unit: "hour" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    return l >= 1 && l <= 24;
  }
  set(a, l, o) {
    const s = o <= 24 ? o % 24 : o;
    return a.setHours(s, 0, 0, 0), a;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
class sO extends Xe {
  priority = 60;
  parse(a, l, o) {
    switch (l) {
      case "m":
        return ct(yt.minute, a);
      case "mo":
        return o.ordinalNumber(a, { unit: "minute" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 59;
  }
  set(a, l, o) {
    return a.setMinutes(o, 0, 0), a;
  }
  incompatibleTokens = ["t", "T"];
}
class cO extends Xe {
  priority = 50;
  parse(a, l, o) {
    switch (l) {
      case "s":
        return ct(yt.second, a);
      case "so":
        return o.ordinalNumber(a, { unit: "second" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    return l >= 0 && l <= 59;
  }
  set(a, l, o) {
    return a.setSeconds(o, 0), a;
  }
  incompatibleTokens = ["t", "T"];
}
class uO extends Xe {
  priority = 30;
  parse(a, l) {
    const o = (s) => Math.trunc(s * Math.pow(10, -l.length + 3));
    return vt(dt(l.length, a), o);
  }
  set(a, l, o) {
    return a.setMilliseconds(o), a;
  }
  incompatibleTokens = ["t", "T"];
}
class fO extends Xe {
  priority = 10;
  parse(a, l) {
    switch (l) {
      case "X":
        return qn(
          Ln.basicOptionalMinutes,
          a
        );
      case "XX":
        return qn(Ln.basic, a);
      case "XXXX":
        return qn(
          Ln.basicOptionalSeconds,
          a
        );
      case "XXXXX":
        return qn(
          Ln.extendedOptionalSeconds,
          a
        );
      default:
        return qn(Ln.extended, a);
    }
  }
  set(a, l, o) {
    return l.timestampIsSet ? a : Ke(
      a,
      a.getTime() - Ls(a) - o
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class dO extends Xe {
  priority = 10;
  parse(a, l) {
    switch (l) {
      case "x":
        return qn(
          Ln.basicOptionalMinutes,
          a
        );
      case "xx":
        return qn(Ln.basic, a);
      case "xxxx":
        return qn(
          Ln.basicOptionalSeconds,
          a
        );
      case "xxxxx":
        return qn(
          Ln.extendedOptionalSeconds,
          a
        );
      default:
        return qn(Ln.extended, a);
    }
  }
  set(a, l, o) {
    return l.timestampIsSet ? a : Ke(
      a,
      a.getTime() - Ls(a) - o
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class mO extends Xe {
  priority = 40;
  parse(a) {
    return Qb(a);
  }
  set(a, l, o) {
    return [Ke(a, o * 1e3), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
class hO extends Xe {
  priority = 20;
  parse(a) {
    return Qb(a);
  }
  set(a, l, o) {
    return [Ke(a, o), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
const pO = {
  G: new jT(),
  y: new RT(),
  Y: new zT(),
  R: new HT(),
  u: new YT(),
  Q: new UT(),
  q: new BT(),
  M: new LT(),
  L: new qT(),
  w: new GT(),
  I: new VT(),
  d: new QT(),
  D: new ZT(),
  E: new IT(),
  e: new $T(),
  c: new KT(),
  i: new eO(),
  a: new tO(),
  b: new nO(),
  B: new aO(),
  h: new rO(),
  H: new oO(),
  K: new lO(),
  k: new iO(),
  m: new sO(),
  s: new cO(),
  S: new uO(),
  X: new fO(),
  x: new dO(),
  t: new mO(),
  T: new hO()
}, gO = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, yO = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, vO = /^'([^]*?)'?$/, bO = /''/g, xO = /\S/, wO = /[a-zA-Z]/;
function SO(n, a, l, o) {
  const s = () => Ke(l, NaN), u = ST(), d = u.locale ?? zr, m = u.firstWeekContainsDate ?? u.locale?.options?.firstWeekContainsDate ?? 1, h = u.weekStartsOn ?? u.locale?.options?.weekStartsOn ?? 0, p = {
    firstWeekContainsDate: m,
    weekStartsOn: h,
    locale: d
  }, b = [new kT(o?.in, l)], v = a.match(yO).map((C) => {
    const D = C[0];
    if (D in ud) {
      const _ = ud[D];
      return _(C, d.formatLong);
    }
    return C;
  }).join("").match(gO), w = [];
  for (let C of v) {
    Fb(C) && fd(C, a, n), Vb(C) && fd(C, a, n);
    const D = C[0], _ = pO[D];
    if (_) {
      const { incompatibleTokens: M } = _;
      if (Array.isArray(M)) {
        const z = w.find(
          (k) => M.includes(k.token) || k.token === D
        );
        if (z)
          throw new RangeError(
            `The format string mustn't contain \`${z.fullToken}\` and \`${C}\` at the same time`
          );
      } else if (_.incompatibleTokens === "*" && w.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${C}\` and any other token at the same time`
        );
      w.push({ token: D, fullToken: C });
      const N = _.run(
        n,
        C,
        d.match,
        p
      );
      if (!N)
        return s();
      b.push(N.setter), n = N.rest;
    } else {
      if (D.match(wO))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + D + "`"
        );
      if (C === "''" ? C = "'" : D === "'" && (C = CO(C)), n.indexOf(C) === 0)
        n = n.slice(C.length);
      else
        return s();
    }
  }
  if (n.length > 0 && xO.test(n))
    return s();
  const T = b.map((C) => C.priority).sort((C, D) => D - C).filter((C, D, _) => _.indexOf(C) === D).map(
    (C) => b.filter((D) => D.priority === C).sort((D, _) => _.subPriority - D.subPriority)
  ).map((C) => C[0]);
  let E = Le(l, o?.in);
  if (isNaN(+E)) return s();
  const O = {};
  for (const C of T) {
    if (!C.validate(E, p))
      return s();
    const D = C.set(E, O, p);
    Array.isArray(D) ? (E = D[0], Object.assign(O, D[1])) : E = D;
  }
  return E;
}
function CO(n) {
  return n.match(vO)[1].replace(bO, "'");
}
function EO(n, a, l) {
  const [o, s] = Vr(
    l?.in,
    n,
    a
  );
  return +Nn(o, l) == +Nn(s, l);
}
function TO(n, a, l) {
  const [o, s] = Vr(
    l?.in,
    n,
    a
  );
  return o.getFullYear() === s.getFullYear() && o.getMonth() === s.getMonth();
}
function OO(n, a, l) {
  const [o, s] = Vr(
    l?.in,
    n,
    a
  );
  return o.getFullYear() === s.getFullYear();
}
function MO(n, a, l) {
  const o = Le(n, l?.in), s = o.getFullYear(), u = o.getDate(), d = Ke(n, 0);
  d.setFullYear(s, a, 15), d.setHours(0, 0, 0, 0);
  const m = wT(d);
  return o.setMonth(a, Math.min(u, m)), o;
}
function DO(n, a, l) {
  const o = Le(n, l?.in);
  return isNaN(+o) ? Ke(n, NaN) : (o.setFullYear(a), o);
}
const _O = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
}, NO = (n, a, l) => {
  let o;
  const s = _O[n];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", String(a)), l?.addSuffix ? l.comparison && l.comparison > 0 ? o + "内" : o + "前" : o;
}, AO = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, kO = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, jO = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, RO = {
  date: Po({
    formats: AO,
    defaultWidth: "full"
  }),
  time: Po({
    formats: kO,
    defaultWidth: "full"
  }),
  dateTime: Po({
    formats: jO,
    defaultWidth: "full"
  })
};
function Gy(n, a, l) {
  const o = "eeee p";
  return EO(n, a, l) ? o : n.getTime() > a.getTime() ? "'下个'" + o : "'上个'" + o;
}
const zO = {
  lastWeek: Gy,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Gy,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, HO = (n, a, l, o) => {
  const s = zO[n];
  return typeof s == "function" ? s(a, l, o) : s;
}, YO = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, UO = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, BO = {
  narrow: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
  ],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ]
}, LO = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, qO = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, PO = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, GO = (n, a) => {
  const l = Number(n);
  switch (a?.unit) {
    case "date":
      return l.toString() + "日";
    case "hour":
      return l.toString() + "时";
    case "minute":
      return l.toString() + "分";
    case "second":
      return l.toString() + "秒";
    default:
      return "第 " + l.toString();
  }
}, WO = {
  ordinalNumber: GO,
  era: Un({
    values: YO,
    defaultWidth: "wide"
  }),
  quarter: Un({
    values: UO,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Un({
    values: BO,
    defaultWidth: "wide"
  }),
  day: Un({
    values: LO,
    defaultWidth: "wide"
  }),
  dayPeriod: Un({
    values: qO,
    defaultWidth: "wide",
    formattingValues: PO,
    defaultFormattingWidth: "wide"
  })
}, VO = /^(第\s*)?\d+(日|时|分|秒)?/i, FO = /\d+/i, XO = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, QO = {
  any: [/^(前)/i, /^(公元)/i]
}, ZO = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, IO = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, $O = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i
}, KO = {
  narrow: [
    /^一/i,
    /^二/i,
    /^三/i,
    /^四/i,
    /^五/i,
    /^六/i,
    /^七/i,
    /^八/i,
    /^九/i,
    /^十(?!(一|二))/i,
    /^十一/i,
    /^十二/i
  ],
  any: [
    /^(一|1(?!\d))/i,
    /^(二|2)/i,
    /^(三|3)/i,
    /^(四|4)/i,
    /^(五|5)/i,
    /^(六|6)/i,
    /^(七|7)/i,
    /^(八|8)/i,
    /^(九|9)/i,
    /^(十(?!(一|二))|10)/i,
    /^(十一|11)/i,
    /^(十二|12)/i
  ]
}, JO = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, eM = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, tM = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, nM = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, aM = {
  ordinalNumber: Gb({
    matchPattern: VO,
    parsePattern: FO,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Bn({
    matchPatterns: XO,
    defaultMatchWidth: "wide",
    parsePatterns: QO,
    defaultParseWidth: "any"
  }),
  quarter: Bn({
    matchPatterns: ZO,
    defaultMatchWidth: "wide",
    parsePatterns: IO,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Bn({
    matchPatterns: $O,
    defaultMatchWidth: "wide",
    parsePatterns: KO,
    defaultParseWidth: "any"
  }),
  day: Bn({
    matchPatterns: JO,
    defaultMatchWidth: "wide",
    parsePatterns: eM,
    defaultParseWidth: "any"
  }),
  dayPeriod: Bn({
    matchPatterns: tM,
    defaultMatchWidth: "any",
    parsePatterns: nM,
    defaultParseWidth: "any"
  })
}, rM = {
  code: "zh-CN",
  formatDistance: NO,
  formatLong: RO,
  formatRelative: HO,
  localize: WO,
  match: aM,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function oM(n, a, l = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: n,
    timeZoneName: l
  }).format(a).split(/\s/g).slice(2).join(" ");
}
const lM = {}, Ql = {};
function ya(n, a) {
  try {
    const o = (lM[n] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: n,
      timeZoneName: "longOffset"
    }).format)(a).split("GMT")[1];
    return o in Ql ? Ql[o] : Wy(o, o.split(":"));
  } catch {
    if (n in Ql) return Ql[n];
    const l = n?.match(iM);
    return l ? Wy(n, l.slice(1)) : NaN;
  }
}
const iM = /([+-]\d\d):?(\d\d)?/;
function Wy(n, a) {
  const l = +(a[0] || 0), o = +(a[1] || 0), s = +(a[2] || 0) / 60;
  return Ql[n] = l * 60 + o > 0 ? l * 60 + o + s : l * 60 - o - s;
}
class Gn extends Date {
  //#region static
  constructor(...a) {
    super(), a.length > 1 && typeof a[a.length - 1] == "string" && (this.timeZone = a.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(ya(this.timeZone, this)) ? this.setTime(NaN) : a.length ? typeof a[0] == "number" && (a.length === 1 || a.length === 2 && typeof a[1] != "number") ? this.setTime(a[0]) : typeof a[0] == "string" ? this.setTime(+new Date(a[0])) : a[0] instanceof Date ? this.setTime(+a[0]) : (this.setTime(+new Date(...a)), $b(this, a)) : this.setTime(Date.now());
  }
  static tz(a, ...l) {
    return l.length ? new Gn(...l, a) : new Gn(Date.now(), a);
  }
  //#endregion
  //#region time zone
  withTimeZone(a) {
    return new Gn(+this, a);
  }
  getTimezoneOffset() {
    const a = -ya(this.timeZone, this);
    return a > 0 ? Math.floor(a) : Math.ceil(a);
  }
  //#endregion
  //#region time
  setTime(a) {
    return Date.prototype.setTime.apply(this, arguments), Ps(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](a) {
    return new Gn(+new Date(a), this.timeZone);
  }
  //#endregion
}
const Vy = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((n) => {
  if (!Vy.test(n)) return;
  const a = n.replace(Vy, "$1UTC");
  Gn.prototype[a] && (n.startsWith("get") ? Gn.prototype[n] = function() {
    return this.internal[a]();
  } : (Gn.prototype[n] = function() {
    return Date.prototype[a].apply(this.internal, arguments), sM(this), +this;
  }, Gn.prototype[a] = function() {
    return Date.prototype[a].apply(this, arguments), Ps(this), +this;
  }));
});
function Ps(n) {
  n.internal.setTime(+n), n.internal.setUTCSeconds(n.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-ya(n.timeZone, n) * 60));
}
function sM(n) {
  Date.prototype.setFullYear.call(n, n.internal.getUTCFullYear(), n.internal.getUTCMonth(), n.internal.getUTCDate()), Date.prototype.setHours.call(n, n.internal.getUTCHours(), n.internal.getUTCMinutes(), n.internal.getUTCSeconds(), n.internal.getUTCMilliseconds()), $b(n);
}
function $b(n, a) {
  const l = Array.isArray(a) ? cM(a) : +n.internal, o = ya(n.timeZone, n), s = o > 0 ? Math.floor(o) : Math.ceil(o), u = /* @__PURE__ */ new Date(+n);
  u.setUTCHours(u.getUTCHours() - 1);
  const d = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset(), m = -(/* @__PURE__ */ new Date(+u)).getTimezoneOffset(), h = d - m;
  let p = d;
  if (h && d !== s) {
    const Z = Date.prototype.getHours.apply(n), te = Array.isArray(a) ? a[3] || 0 : n.internal.getUTCHours();
    if (Z !== te) {
      const re = /* @__PURE__ */ new Date(+n), ne = d - s;
      ne && re.setUTCMinutes(re.getUTCMinutes() + ne);
      const X = ya(n.timeZone, re);
      (X > 0 ? Math.floor(X) : Math.ceil(X)) === s && (p = m);
    }
  }
  const b = p - s;
  b && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + b);
  const v = /* @__PURE__ */ new Date(+n);
  v.setUTCSeconds(0);
  const w = d > 0 ? v.getSeconds() : (v.getSeconds() - 60) % 60, T = Math.round(-(ya(n.timeZone, n) * 60)) % 60;
  (T || w) && Date.prototype.setUTCSeconds.call(n, Date.prototype.getUTCSeconds.call(n) + T + w);
  const E = ya(n.timeZone, n), O = E > 0 ? Math.floor(E) : Math.ceil(E), D = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset() - O, _ = O !== s, M = D - b, N = O - s, z = l - O * 60 * 1e3, k = N > 0 && Fy(n) - l === N * 60 * 1e3 && Fy(n, z) !== l;
  if (_ && M && !k) {
    Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + M);
    const Z = ya(n.timeZone, n), te = Z > 0 ? Math.floor(Z) : Math.ceil(Z), re = O - te;
    re && M < 0 && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + re);
  }
  Ps(n);
  const B = (a ? l : l + T * 1e3) - +n.internal;
  B && Math.abs(B) < 1800 * 1e3 && (Date.prototype.setTime.call(n, +n + B), Ps(n));
}
function cM(n) {
  return Date.UTC(n[0], n.length > 1 ? n[1] : 0, n.length > 2 ? n[2] : 1, ...n.slice(3));
}
function Fy(n, a) {
  const l = new Date(a ?? +n);
  return l.setUTCSeconds(l.getUTCSeconds() - Math.round(-ya(n.timeZone, l) * 60)), +l;
}
class Lt extends Gn {
  //#region static
  static tz(a, ...l) {
    return l.length ? new Lt(...l, a) : new Lt(Date.now(), a);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [a, l, o] = this.tzComponents(), s = `${a}${l}:${o}`;
    return this.internal.toISOString().slice(0, -1) + s;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [a, l, o, s] = this.internal.toUTCString().split(" ");
    return `${a?.slice(0, -1)} ${o} ${l} ${s}`;
  }
  toTimeString() {
    const a = this.internal.toUTCString().split(" ")[4], [l, o, s] = this.tzComponents();
    return `${a} GMT${l}${o}${s} (${oM(this.timeZone, this)})`;
  }
  toLocaleString(a, l) {
    return Date.prototype.toLocaleString.call(this, a, {
      ...l,
      timeZone: l?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(a, l) {
    return Date.prototype.toLocaleDateString.call(this, a, {
      ...l,
      timeZone: l?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(a, l) {
    return Date.prototype.toLocaleTimeString.call(this, a, {
      ...l,
      timeZone: l?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const a = this.getTimezoneOffset(), l = a > 0 ? "-" : "+", o = String(Math.floor(Math.abs(a) / 60)).padStart(2, "0"), s = String(Math.abs(a) % 60).padStart(2, "0");
    return [l, o, s];
  }
  //#endregion
  withTimeZone(a) {
    return new Lt(+this, a);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](a) {
    return new Lt(+new Date(a), this.timeZone);
  }
  //#endregion
}
const Xy = 5, uM = 4;
function fM(n, a) {
  const l = a.startOfMonth(n), o = l.getDay() > 0 ? l.getDay() : 7, s = a.addDays(n, -o + 1), u = a.addDays(s, Xy * 7 - 1);
  return a.getMonth(n) === a.getMonth(u) ? Xy : uM;
}
function Kb(n, a) {
  const l = a.startOfMonth(n), o = l.getDay();
  return o === 1 ? l : o === 0 ? a.addDays(l, -6) : a.addDays(l, -1 * (o - 1));
}
function dM(n, a) {
  const l = Kb(n, a), o = fM(n, a);
  return a.addDays(l, o * 7 - 1);
}
const Jb = {
  ...zr,
  labels: {
    labelDayButton: (n, a, l, o) => {
      let s;
      o && typeof o.format == "function" ? s = o.format.bind(o) : s = (d, m) => tr(d, m, { locale: zr, ...l });
      let u = s(n, "PPPP");
      return a.today && (u = `Today, ${u}`), a.selected && (u = `${u}, selected`), u;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (n) => `Week ${n}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (n, a, l) => {
      let o;
      return l && typeof l.format == "function" ? o = l.format.bind(l) : o = (s, u) => tr(s, u, { locale: zr, ...a }), o(n, "LLLL yyyy");
    },
    labelGridcell: (n, a, l, o) => {
      let s;
      o && typeof o.format == "function" ? s = o.format.bind(o) : s = (d, m) => tr(d, m, { locale: zr, ...l });
      let u = s(n, "PPPP");
      return a?.today && (u = `Today, ${u}`), u;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (n, a, l) => {
      let o;
      return l && typeof l.format == "function" ? o = l.format.bind(l) : o = (s, u) => tr(s, u, { locale: zr, ...a }), o(n, "cccc");
    }
  }
};
class Ut {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(a, l) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Lt.tz(this.options.timeZone) : new this.Date(), this.newDate = (o, s, u) => this.overrides?.newDate ? this.overrides.newDate(o, s, u) : this.options.timeZone ? new Lt(o, s, u, this.options.timeZone) : new Date(o, s, u), this.addDays = (o, s) => this.overrides?.addDays ? this.overrides.addDays(o, s) : Ks(o, s), this.addMonths = (o, s) => this.overrides?.addMonths ? this.overrides.addMonths(o, s) : zb(o, s), this.addWeeks = (o, s) => this.overrides?.addWeeks ? this.overrides.addWeeks(o, s) : xE(o, s), this.addYears = (o, s) => this.overrides?.addYears ? this.overrides.addYears(o, s) : wE(o, s), this.differenceInCalendarDays = (o, s) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(o, s) : qd(o, s), this.differenceInCalendarMonths = (o, s) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(o, s) : Bb(o, s), this.eachMonthOfInterval = (o) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(o) : OE(o), this.eachYearOfInterval = (o) => {
      const s = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(o) : _E(o), u = new Set(s.map((m) => this.getYear(m)));
      if (u.size === s.length)
        return s;
      const d = [];
      return u.forEach((m) => {
        d.push(new Date(m, 0, 1));
      }), d;
    }, this.endOfBroadcastWeek = (o) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(o) : dM(o, this), this.endOfISOWeek = (o) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(o) : NE(o), this.endOfMonth = (o) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(o) : TE(o), this.endOfWeek = (o, s) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(o, s) : Pb(o, this.options), this.endOfYear = (o) => this.overrides?.endOfYear ? this.overrides.endOfYear(o) : DE(o), this.format = (o, s, u) => {
      const d = this.overrides?.format ? this.overrides.format(o, s, this.options) : tr(o, s, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(d) : d;
    }, this.getISOWeek = (o) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(o) : Js(o), this.getMonth = (o, s) => this.overrides?.getMonth ? this.overrides.getMonth(o, this.options) : ET(o, this.options), this.getYear = (o, s) => this.overrides?.getYear ? this.overrides.getYear(o, this.options) : TT(o, this.options), this.getWeek = (o, s) => this.overrides?.getWeek ? this.overrides.getWeek(o, this.options) : ec(o, this.options), this.isAfter = (o, s) => this.overrides?.isAfter ? this.overrides.isAfter(o, s) : OT(o, s), this.isBefore = (o, s) => this.overrides?.isBefore ? this.overrides.isBefore(o, s) : MT(o, s), this.isDate = (o) => this.overrides?.isDate ? this.overrides.isDate(o) : Yb(o), this.isSameDay = (o, s) => this.overrides?.isSameDay ? this.overrides.isSameDay(o, s) : EE(o, s), this.isSameMonth = (o, s) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(o, s) : TO(o, s), this.isSameYear = (o, s) => this.overrides?.isSameYear ? this.overrides.isSameYear(o, s) : OO(o, s), this.max = (o) => this.overrides?.max ? this.overrides.max(o) : SE(o), this.min = (o) => this.overrides?.min ? this.overrides.min(o) : CE(o), this.setMonth = (o, s) => this.overrides?.setMonth ? this.overrides.setMonth(o, s) : MO(o, s), this.setYear = (o, s) => this.overrides?.setYear ? this.overrides.setYear(o, s) : DO(o, s), this.startOfBroadcastWeek = (o, s) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(o, this) : Kb(o, this), this.startOfDay = (o) => this.overrides?.startOfDay ? this.overrides.startOfDay(o) : Zl(o), this.startOfISOWeek = (o) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(o) : Yr(o), this.startOfMonth = (o) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(o) : ME(o), this.startOfWeek = (o, s) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(o, this.options) : Nn(o, this.options), this.startOfYear = (o) => this.overrides?.startOfYear ? this.overrides.startOfYear(o) : qb(o), this.options = { locale: Jb, ...a }, this.overrides = l;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: a = "latn" } = this.options, l = new Intl.NumberFormat("en-US", {
      numberingSystem: a
    }), o = {};
    for (let s = 0; s < 10; s++)
      o[s.toString()] = l.format(s);
    return o;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(a) {
    const l = this.getDigitMap();
    return a.replace(/\d/g, (o) => l[o] || o);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(a) {
    return this.replaceDigits(a.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const a = this.options.locale?.code;
    return a && Ut.yearFirstLocales.has(a) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(a) {
    const { locale: l, timeZone: o, numerals: s } = this.options, u = l?.code;
    if (u && Ut.yearFirstLocales.has(u))
      try {
        return new Intl.DateTimeFormat(u, {
          month: "long",
          year: "numeric",
          timeZone: o,
          numberingSystem: s
        }).format(a);
      } catch {
      }
    const d = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(a, d);
  }
}
Ut.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Qn = new Ut(), mM = {
  ...rM,
  labels: {
    labelDayButton: (n, a, l, o) => {
      let u = (o ?? new Ut(l)).format(n, "PPPP");
      return a.today && (u = `今天，${u}`), a.selected && (u = `${u}，已选择`), u;
    },
    labelMonthDropdown: "选择月份",
    labelNext: "前往下个月",
    labelPrevious: "前往上个月",
    labelWeekNumber: (n) => `第 ${n} 周`,
    labelYearDropdown: "选择年份",
    labelGrid: (n, a, l) => (l ?? new Ut(a)).formatMonthYear(n),
    labelGridcell: (n, a, l, o) => {
      let u = (o ?? new Ut(l)).format(n, "PPPP");
      return a?.today && (u = `今天，${u}`), u;
    },
    labelNav: "导航栏",
    labelWeekNumberHeader: "周数",
    labelWeekday: (n, a, l) => (l ?? new Ut(a)).format(n, "cccc")
  }
};
const hM = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pM = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, l, o) => o ? o.toUpperCase() : l.toLowerCase()
), Qy = (n) => {
  const a = pM(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, e0 = (...n) => n.filter((a, l, o) => !!a && a.trim() !== "" && o.indexOf(a) === l).join(" ").trim(), gM = (n) => {
  for (const a in n)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
var yM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const vM = x.forwardRef(
  ({
    color: n = "currentColor",
    size: a = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: u,
    iconNode: d,
    ...m
  }, h) => x.createElement(
    "svg",
    {
      ref: h,
      ...yM,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: o ? Number(l) * 24 / Number(a) : l,
      className: e0("lucide", s),
      ...!u && !gM(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([p, b]) => x.createElement(p, b)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
const Jt = (n, a) => {
  const l = x.forwardRef(
    ({ className: o, ...s }, u) => x.createElement(vM, {
      ref: u,
      iconNode: a,
      className: e0(
        `lucide-${hM(Qy(n))}`,
        `lucide-${n}`,
        o
      ),
      ...s
    })
  );
  return l.displayName = Qy(n), l;
};
const bM = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], xM = Jt("calendar", bM);
const wM = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Go = Jt("check", wM);
const SM = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Vd = Jt("chevron-down", SM);
const CM = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], EM = Jt("chevron-left", CM);
const TM = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], OM = Jt("chevron-right", TM);
const MM = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], DM = Jt("chevron-up", MM);
const _M = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], NM = Jt("clock-3", _M);
const AM = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], kM = Jt("copy", AM);
const jM = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
], RM = Jt("key-round", jM);
const zM = [["path", { d: "M5 12h14", key: "1ays0h" }]], HM = Jt("minus", zM);
const YM = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], t0 = Jt("refresh-cw", YM);
const UM = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], dd = Jt("search", UM);
const BM = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], LM = Jt("shield-check", BM);
const qM = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], n0 = Jt("x", qM);
class a0 {
  constructor(a, l, o = Qn) {
    this.date = a, this.displayMonth = l, this.outside = !!(l && !o.isSameMonth(a, l)), this.dateLib = o, this.isoDate = o.format(a, "yyyy-MM-dd"), this.displayMonthId = o.format(l, "yyyy-MM"), this.dateMonthId = o.format(a, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(a) {
    return this.dateLib.isSameDay(a.date, this.date) && this.dateLib.isSameMonth(a.displayMonth, this.displayMonth);
  }
}
class PM {
  constructor(a, l) {
    this.date = a, this.weeks = l;
  }
}
class GM {
  constructor(a, l) {
    this.days = l, this.weekNumber = a;
  }
}
function WM(n) {
  return ue.createElement("button", { ...n });
}
function VM(n) {
  return ue.createElement("span", { ...n });
}
function FM(n) {
  const { size: a = 24, orientation: l = "left", className: o } = n;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    ue.createElement(
      "svg",
      { className: o, width: a, height: a, viewBox: "0 0 24 24" },
      l === "up" && ue.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      l === "down" && ue.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      l === "left" && ue.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      l === "right" && ue.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function XM(n) {
  const { day: a, modifiers: l, ...o } = n;
  return ue.createElement("td", { ...o });
}
function QM(n) {
  const { day: a, modifiers: l, ...o } = n, s = ue.useRef(null);
  return ue.useEffect(() => {
    l.focused && s.current?.focus();
  }, [l.focused]), ue.createElement("button", { ref: s, ...o });
}
var ye;
(function(n) {
  n.Root = "root", n.Chevron = "chevron", n.Day = "day", n.DayButton = "day_button", n.CaptionLabel = "caption_label", n.Dropdowns = "dropdowns", n.Dropdown = "dropdown", n.DropdownRoot = "dropdown_root", n.Footer = "footer", n.MonthGrid = "month_grid", n.MonthCaption = "month_caption", n.MonthsDropdown = "months_dropdown", n.Month = "month", n.Months = "months", n.Nav = "nav", n.NextMonthButton = "button_next", n.PreviousMonthButton = "button_previous", n.Week = "week", n.Weeks = "weeks", n.Weekday = "weekday", n.Weekdays = "weekdays", n.WeekNumber = "week_number", n.WeekNumberHeader = "week_number_header", n.YearsDropdown = "years_dropdown";
})(ye || (ye = {}));
var st;
(function(n) {
  n.disabled = "disabled", n.hidden = "hidden", n.outside = "outside", n.focused = "focused", n.today = "today";
})(st || (st = {}));
var Dn;
(function(n) {
  n.range_end = "range_end", n.range_middle = "range_middle", n.range_start = "range_start", n.selected = "selected";
})(Dn || (Dn = {}));
var sn;
(function(n) {
  n.weeks_before_enter = "weeks_before_enter", n.weeks_before_exit = "weeks_before_exit", n.weeks_after_enter = "weeks_after_enter", n.weeks_after_exit = "weeks_after_exit", n.caption_after_enter = "caption_after_enter", n.caption_after_exit = "caption_after_exit", n.caption_before_enter = "caption_before_enter", n.caption_before_exit = "caption_before_exit";
})(sn || (sn = {}));
function ZM(n) {
  const { options: a, className: l, components: o, classNames: s, ...u } = n, d = [s[ye.Dropdown], l].join(" "), m = a?.find(({ value: h }) => h === u.value);
  return ue.createElement(
    "span",
    { "data-disabled": u.disabled, className: s[ye.DropdownRoot] },
    ue.createElement(o.Select, { className: d, ...u }, a?.map(({ value: h, label: p, disabled: b }) => ue.createElement(o.Option, { key: h, value: h, disabled: b }, p))),
    ue.createElement(
      "span",
      { className: s[ye.CaptionLabel], "aria-hidden": !0 },
      m?.label,
      ue.createElement(o.Chevron, { orientation: "down", size: 18, className: s[ye.Chevron] })
    )
  );
}
function IM(n) {
  return ue.createElement("div", { ...n });
}
function $M(n) {
  return ue.createElement("div", { ...n });
}
function KM(n) {
  const { calendarMonth: a, displayIndex: l, ...o } = n;
  return ue.createElement("div", { ...o }, n.children);
}
function JM(n) {
  const { calendarMonth: a, displayIndex: l, ...o } = n;
  return ue.createElement("div", { ...o });
}
function eD(n) {
  return ue.createElement("table", { ...n });
}
function tD(n) {
  return ue.createElement("div", { ...n });
}
const r0 = x.createContext(void 0);
function ni() {
  const n = x.useContext(r0);
  if (n === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return n;
}
function nD(n) {
  const { components: a } = ni();
  return ue.createElement(a.Dropdown, { ...n });
}
function aD(n) {
  const { onPreviousClick: a, onNextClick: l, previousMonth: o, nextMonth: s, ...u } = n, { components: d, classNames: m, labels: { labelPrevious: h, labelNext: p } } = ni(), b = x.useCallback((w) => {
    s && l?.(w);
  }, [s, l]), v = x.useCallback((w) => {
    o && a?.(w);
  }, [o, a]);
  return ue.createElement(
    "nav",
    { ...u },
    ue.createElement(
      d.PreviousMonthButton,
      { type: "button", className: m[ye.PreviousMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": h(o), onClick: v },
      ue.createElement(d.Chevron, { disabled: o ? void 0 : !0, className: m[ye.Chevron], orientation: "left" })
    ),
    ue.createElement(
      d.NextMonthButton,
      { type: "button", className: m[ye.NextMonthButton], tabIndex: s ? void 0 : -1, "aria-disabled": s ? void 0 : !0, "aria-label": p(s), onClick: b },
      ue.createElement(d.Chevron, { disabled: s ? void 0 : !0, orientation: "right", className: m[ye.Chevron] })
    )
  );
}
function rD(n) {
  const { components: a } = ni();
  return ue.createElement(a.Button, { ...n });
}
function oD(n) {
  return ue.createElement("option", { ...n });
}
function lD(n) {
  const { components: a } = ni();
  return ue.createElement(a.Button, { ...n });
}
function iD(n) {
  const { rootRef: a, ...l } = n;
  return ue.createElement("div", { ...l, ref: a });
}
function sD(n) {
  return ue.createElement("select", { ...n });
}
function cD(n) {
  const { week: a, ...l } = n;
  return ue.createElement("tr", { ...l });
}
function uD(n) {
  return ue.createElement("th", { ...n });
}
function fD(n) {
  return ue.createElement(
    "thead",
    { "aria-hidden": !0 },
    ue.createElement("tr", { ...n })
  );
}
function dD(n) {
  const { week: a, ...l } = n;
  return ue.createElement("th", { ...l });
}
function mD(n) {
  return ue.createElement("th", { ...n });
}
function hD(n) {
  return ue.createElement("tbody", { ...n });
}
function pD(n) {
  const { components: a } = ni();
  return ue.createElement(a.Dropdown, { ...n });
}
const gD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: WM,
  CaptionLabel: VM,
  Chevron: FM,
  Day: XM,
  DayButton: QM,
  Dropdown: ZM,
  DropdownNav: IM,
  Footer: $M,
  Month: KM,
  MonthCaption: JM,
  MonthGrid: eD,
  Months: tD,
  MonthsDropdown: nD,
  Nav: aD,
  NextMonthButton: rD,
  Option: oD,
  PreviousMonthButton: lD,
  Root: iD,
  Select: sD,
  Week: cD,
  WeekNumber: dD,
  WeekNumberHeader: mD,
  Weekday: uD,
  Weekdays: fD,
  Weeks: hD,
  YearsDropdown: pD
}, Symbol.toStringTag, { value: "Module" }));
function va(n, a, l = !1, o = Qn) {
  let { from: s, to: u } = n;
  const { differenceInCalendarDays: d, isSameDay: m } = o;
  return s && u ? (d(u, s) < 0 && ([s, u] = [u, s]), d(a, s) >= (l ? 1 : 0) && d(u, a) >= (l ? 1 : 0)) : !l && u ? m(u, a) : !l && s ? m(s, a) : !1;
}
function Fd(n) {
  return !!(n && typeof n == "object" && "before" in n && "after" in n);
}
function tc(n) {
  return !!(n && typeof n == "object" && "from" in n);
}
function Xd(n) {
  return !!(n && typeof n == "object" && "after" in n);
}
function Qd(n) {
  return !!(n && typeof n == "object" && "before" in n);
}
function o0(n) {
  return !!(n && typeof n == "object" && "dayOfWeek" in n);
}
function l0(n, a) {
  return Array.isArray(n) && n.every(a.isDate);
}
function ba(n, a, l = Qn) {
  const o = Array.isArray(a) ? a : [a], { isSameDay: s, differenceInCalendarDays: u, isAfter: d } = l;
  return o.some((m) => {
    if (typeof m == "boolean")
      return m;
    if (l.isDate(m))
      return s(n, m);
    if (l0(m, l))
      return m.some((h) => s(n, h));
    if (tc(m))
      return va(m, n, !1, l);
    if (o0(m))
      return Array.isArray(m.dayOfWeek) ? m.dayOfWeek.includes(n.getDay()) : m.dayOfWeek === n.getDay();
    if (Fd(m)) {
      const h = u(m.before, n), p = u(m.after, n), b = h > 0, v = p < 0;
      return d(m.before, m.after) ? v && b : b || v;
    }
    return Xd(m) ? u(n, m.after) > 0 : Qd(m) ? u(m.before, n) > 0 : typeof m == "function" ? m(n) : !1;
  });
}
function yD(n, a, l, o, s) {
  const { disabled: u, hidden: d, modifiers: m, showOutsideDays: h, broadcastCalendar: p, today: b = s.today() } = a, { isSameDay: v, isSameMonth: w, startOfMonth: T, isBefore: E, endOfMonth: O, isAfter: C } = s, D = l && T(l), _ = o && O(o), M = {
    [st.focused]: [],
    [st.outside]: [],
    [st.disabled]: [],
    [st.hidden]: [],
    [st.today]: []
  }, N = {};
  for (const z of n) {
    const { date: k, displayMonth: Y } = z, B = !!(Y && !w(k, Y)), Z = !!(D && E(k, D)), te = !!(_ && C(k, _)), re = !!(u && ba(k, u, s)), ne = !!(d && ba(k, d, s)) || Z || te || // Broadcast calendar will show outside days as default
    !p && !h && B || p && h === !1 && B, X = v(k, b);
    B && M.outside.push(z), re && M.disabled.push(z), ne && M.hidden.push(z), X && M.today.push(z), m && Object.keys(m).forEach((ee) => {
      const ie = m?.[ee];
      ie && ba(k, ie, s) && (N[ee] ? N[ee].push(z) : N[ee] = [z]);
    });
  }
  return (z) => {
    const k = {
      [st.focused]: !1,
      [st.disabled]: !1,
      [st.hidden]: !1,
      [st.outside]: !1,
      [st.today]: !1
    }, Y = {};
    for (const B in M) {
      const Z = M[B];
      k[B] = Z.some((te) => te === z);
    }
    for (const B in N)
      Y[B] = N[B].some((Z) => Z === z);
    return {
      ...k,
      // custom modifiers should override all the previous ones
      ...Y
    };
  };
}
function vD(n, a, l = {}) {
  return Object.entries(n).filter(([, s]) => s === !0).reduce((s, [u]) => (l[u] ? s.push(l[u]) : a[st[u]] ? s.push(a[st[u]]) : a[Dn[u]] && s.push(a[Dn[u]]), s), [a[ye.Day]]);
}
function bD(n) {
  return {
    ...gD,
    ...n
  };
}
function xD(n) {
  const a = {
    "data-mode": n.mode ?? void 0,
    "data-required": "required" in n ? n.required : void 0,
    "data-multiple-months": n.numberOfMonths && n.numberOfMonths > 1 || void 0,
    "data-week-numbers": n.showWeekNumber || void 0,
    "data-broadcast-calendar": n.broadcastCalendar || void 0,
    "data-nav-layout": n.navLayout || void 0
  };
  return Object.entries(n).forEach(([l, o]) => {
    l.startsWith("data-") && (a[l] = o);
  }), a;
}
function Zd() {
  const n = {};
  for (const a in ye)
    n[ye[a]] = `rdp-${ye[a]}`;
  for (const a in st)
    n[st[a]] = `rdp-${st[a]}`;
  for (const a in Dn)
    n[Dn[a]] = `rdp-${Dn[a]}`;
  for (const a in sn)
    n[sn[a]] = `rdp-${sn[a]}`;
  return n;
}
function i0(n, a, l) {
  return (l ?? new Ut(a)).formatMonthYear(n);
}
const wD = i0;
function SD(n, a, l) {
  return (l ?? new Ut(a)).format(n, "d");
}
function CD(n, a = Qn) {
  return a.format(n, "LLLL");
}
function ED(n, a, l) {
  return (l ?? new Ut(a)).format(n, "cccccc");
}
function TD(n, a = Qn) {
  return n < 10 ? a.formatNumber(`0${n.toLocaleString()}`) : a.formatNumber(`${n.toLocaleString()}`);
}
function OD() {
  return "";
}
function s0(n, a = Qn) {
  return a.format(n, "yyyy");
}
const MD = s0, DD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: i0,
  formatDay: SD,
  formatMonthCaption: wD,
  formatMonthDropdown: CD,
  formatWeekNumber: TD,
  formatWeekNumberHeader: OD,
  formatWeekdayName: ED,
  formatYearCaption: MD,
  formatYearDropdown: s0
}, Symbol.toStringTag, { value: "Module" }));
function _D(n) {
  return n?.formatMonthCaption && !n.formatCaption && (n.formatCaption = n.formatMonthCaption), n?.formatYearCaption && !n.formatYearDropdown && (n.formatYearDropdown = n.formatYearCaption), {
    ...DD,
    ...n
  };
}
function Id(n, a, l, o) {
  let s = (o ?? new Ut(l)).format(n, "PPPP");
  return a.today && (s = `Today, ${s}`), a.selected && (s = `${s}, selected`), s;
}
const ND = Id;
function $d(n, a, l) {
  return (l ?? new Ut(a)).formatMonthYear(n);
}
const AD = $d;
function c0(n, a, l, o) {
  let s = (o ?? new Ut(l)).format(n, "PPPP");
  return a?.today && (s = `Today, ${s}`), s;
}
function u0(n) {
  return "Choose the Month";
}
function f0() {
  return "";
}
const kD = "Go to the Next Month";
function d0(n, a) {
  return kD;
}
function m0(n) {
  return "Go to the Previous Month";
}
function h0(n, a, l) {
  return (l ?? new Ut(a)).format(n, "cccc");
}
function p0(n, a) {
  return `Week ${n}`;
}
function g0(n) {
  return "Week Number";
}
function y0(n) {
  return "Choose the Year";
}
const jD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: AD,
  labelDay: ND,
  labelDayButton: Id,
  labelGrid: $d,
  labelGridcell: c0,
  labelMonthDropdown: u0,
  labelNav: f0,
  labelNext: d0,
  labelPrevious: m0,
  labelWeekNumber: p0,
  labelWeekNumberHeader: g0,
  labelWeekday: h0,
  labelYearDropdown: y0
}, Symbol.toStringTag, { value: "Module" })), On = (n, a, l) => a || (l ? typeof l == "function" ? l : (...o) => l : n);
function RD(n, a) {
  const l = a.locale?.labels ?? {};
  return {
    ...jD,
    ...n ?? {},
    labelDayButton: On(Id, n?.labelDayButton, l.labelDayButton),
    labelMonthDropdown: On(u0, n?.labelMonthDropdown, l.labelMonthDropdown),
    labelNext: On(d0, n?.labelNext, l.labelNext),
    labelPrevious: On(m0, n?.labelPrevious, l.labelPrevious),
    labelWeekNumber: On(p0, n?.labelWeekNumber, l.labelWeekNumber),
    labelYearDropdown: On(y0, n?.labelYearDropdown, l.labelYearDropdown),
    labelGrid: On($d, n?.labelGrid, l.labelGrid),
    labelGridcell: On(c0, n?.labelGridcell, l.labelGridcell),
    labelNav: On(f0, n?.labelNav, l.labelNav),
    labelWeekNumberHeader: On(g0, n?.labelWeekNumberHeader, l.labelWeekNumberHeader),
    labelWeekday: On(h0, n?.labelWeekday, l.labelWeekday)
  };
}
function zD(n, a, l, o, s) {
  const { startOfMonth: u, startOfYear: d, endOfYear: m, eachMonthOfInterval: h, getMonth: p } = s;
  return h({
    start: d(n),
    end: m(n)
  }).map((w) => {
    const T = o.formatMonthDropdown(w, s), E = p(w), O = a && w < u(a) || l && w > u(l) || !1;
    return { value: E, label: T, disabled: O };
  });
}
function HD(n, a = {}, l = {}) {
  let o = { ...a?.[ye.Day] };
  return Object.entries(n).filter(([, s]) => s === !0).forEach(([s]) => {
    o = {
      ...o,
      ...l?.[s]
    };
  }), o;
}
function YD(n, a, l, o) {
  const s = o ?? n.today(), u = l ? n.startOfBroadcastWeek(s, n) : a ? n.startOfISOWeek(s) : n.startOfWeek(s), d = [];
  for (let m = 0; m < 7; m++) {
    const h = n.addDays(u, m);
    d.push(h);
  }
  return d;
}
function UD(n, a, l, o, s = !1) {
  if (!n || !a)
    return;
  const { startOfYear: u, endOfYear: d, eachYearOfInterval: m, getYear: h } = o, p = u(n), b = d(a), v = m({ start: p, end: b });
  return s && v.reverse(), v.map((w) => {
    const T = l.formatYearDropdown(w, o);
    return {
      value: h(w),
      label: T,
      disabled: !1
    };
  });
}
function BD(n, a = {}) {
  const { weekStartsOn: l, locale: o } = a, s = l ?? o?.options?.weekStartsOn ?? 0, u = (m) => {
    const h = typeof m == "number" || typeof m == "string" ? new Date(m) : m;
    return new Lt(h.getFullYear(), h.getMonth(), h.getDate(), 12, 0, 0, n);
  }, d = (m) => {
    const h = u(m);
    return new Date(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => u(Lt.tz(n)),
    newDate: (m, h, p) => new Lt(m, h, p, 12, 0, 0, n),
    startOfDay: (m) => u(m),
    startOfWeek: (m, h) => {
      const p = u(m), b = h?.weekStartsOn ?? s, v = (p.getDay() - b + 7) % 7;
      return p.setDate(p.getDate() - v), p;
    },
    startOfISOWeek: (m) => {
      const h = u(m), p = (h.getDay() - 1 + 7) % 7;
      return h.setDate(h.getDate() - p), h;
    },
    startOfMonth: (m) => {
      const h = u(m);
      return h.setDate(1), h;
    },
    startOfYear: (m) => {
      const h = u(m);
      return h.setMonth(0, 1), h;
    },
    endOfWeek: (m, h) => {
      const p = u(m), w = (((h?.weekStartsOn ?? s) + 6) % 7 - p.getDay() + 7) % 7;
      return p.setDate(p.getDate() + w), p;
    },
    endOfISOWeek: (m) => {
      const h = u(m), p = (7 - h.getDay()) % 7;
      return h.setDate(h.getDate() + p), h;
    },
    endOfMonth: (m) => {
      const h = u(m);
      return h.setMonth(h.getMonth() + 1, 0), h;
    },
    endOfYear: (m) => {
      const h = u(m);
      return h.setMonth(11, 31), h;
    },
    eachMonthOfInterval: (m) => {
      const h = u(m.start), p = u(m.end), b = [], v = new Lt(h.getFullYear(), h.getMonth(), 1, 12, 0, 0, n), w = p.getFullYear() * 12 + p.getMonth();
      for (; v.getFullYear() * 12 + v.getMonth() <= w; )
        b.push(new Lt(v, n)), v.setMonth(v.getMonth() + 1, 1);
      return b;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (m, h) => {
      const p = u(m);
      return p.setDate(p.getDate() + h), p;
    },
    addWeeks: (m, h) => {
      const p = u(m);
      return p.setDate(p.getDate() + h * 7), p;
    },
    addMonths: (m, h) => {
      const p = u(m);
      return p.setMonth(p.getMonth() + h), p;
    },
    addYears: (m, h) => {
      const p = u(m);
      return p.setFullYear(p.getFullYear() + h), p;
    },
    eachYearOfInterval: (m) => {
      const h = u(m.start), p = u(m.end), b = [], v = new Lt(h.getFullYear(), 0, 1, 12, 0, 0, n);
      for (; v.getFullYear() <= p.getFullYear(); )
        b.push(new Lt(v, n)), v.setFullYear(v.getFullYear() + 1, 0, 1);
      return b;
    },
    getWeek: (m, h) => {
      const p = d(m);
      return ec(p, {
        weekStartsOn: h?.weekStartsOn ?? s,
        firstWeekContainsDate: h?.firstWeekContainsDate ?? o?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (m) => {
      const h = d(m);
      return Js(h);
    },
    differenceInCalendarDays: (m, h) => {
      const p = d(m), b = d(h);
      return qd(p, b);
    },
    differenceInCalendarMonths: (m, h) => {
      const p = d(m), b = d(h);
      return Bb(p, b);
    }
  };
}
const ai = (n) => n instanceof HTMLElement ? n : null, Wf = (n) => [
  ...n.querySelectorAll("[data-animated-month]") ?? []
], LD = (n) => ai(n.querySelector("[data-animated-month]")), Vf = (n) => ai(n.querySelector("[data-animated-caption]")), Ff = (n) => ai(n.querySelector("[data-animated-weeks]")), qD = (n) => ai(n.querySelector("[data-animated-nav]")), PD = (n) => ai(n.querySelector("[data-animated-weekdays]"));
function GD(n, a, { classNames: l, months: o, focused: s, dateLib: u }) {
  const d = x.useRef(null), m = x.useRef(o), h = x.useRef(!1);
  x.useLayoutEffect(() => {
    const p = m.current;
    if (m.current = o, !a || !n.current || // safety check because the ref can be set to anything by consumers
    !(n.current instanceof HTMLElement) || // validation required for the animation to work as expected
    o.length === 0 || p.length === 0 || o.length !== p.length)
      return;
    const b = u.isSameMonth(o[0].date, p[0].date), v = u.isAfter(o[0].date, p[0].date), w = v ? l[sn.caption_after_enter] : l[sn.caption_before_enter], T = v ? l[sn.weeks_after_enter] : l[sn.weeks_before_enter], E = d.current, O = n.current.cloneNode(!0);
    if (O instanceof HTMLElement ? (Wf(O).forEach((M) => {
      if (!(M instanceof HTMLElement))
        return;
      const N = LD(M);
      N && M.contains(N) && M.removeChild(N);
      const z = Vf(M);
      z && z.classList.remove(w);
      const k = Ff(M);
      k && k.classList.remove(T);
    }), d.current = O) : d.current = null, h.current || b || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    s)
      return;
    const C = E instanceof HTMLElement ? Wf(E) : [], D = Wf(n.current);
    if (D?.every((_) => _ instanceof HTMLElement) && C && C.every((_) => _ instanceof HTMLElement)) {
      h.current = !0, n.current.style.isolation = "isolate";
      const _ = qD(n.current);
      _ && (_.style.zIndex = "1"), D.forEach((M, N) => {
        const z = C[N];
        if (!z)
          return;
        M.style.position = "relative", M.style.overflow = "hidden";
        const k = Vf(M);
        k && k.classList.add(w);
        const Y = Ff(M);
        Y && Y.classList.add(T);
        const B = () => {
          h.current = !1, n.current && (n.current.style.isolation = ""), _ && (_.style.zIndex = ""), k && k.classList.remove(w), Y && Y.classList.remove(T), M.style.position = "", M.style.overflow = "", M.contains(z) && M.removeChild(z);
        };
        z.style.pointerEvents = "none", z.style.position = "absolute", z.style.overflow = "hidden", z.setAttribute("aria-hidden", "true");
        const Z = PD(z);
        Z && (Z.style.opacity = "0");
        const te = Vf(z);
        te && (te.classList.add(v ? l[sn.caption_before_exit] : l[sn.caption_after_exit]), te.addEventListener("animationend", B));
        const re = Ff(z);
        re && re.classList.add(v ? l[sn.weeks_before_exit] : l[sn.weeks_after_exit]), M.insertBefore(z, M.firstChild);
      });
    }
  });
}
function WD(n, a, l, o) {
  const s = n[0], u = n[n.length - 1], { ISOWeek: d, fixedWeeks: m, broadcastCalendar: h } = l ?? {}, { addDays: p, differenceInCalendarDays: b, differenceInCalendarMonths: v, endOfBroadcastWeek: w, endOfISOWeek: T, endOfMonth: E, endOfWeek: O, isAfter: C, startOfBroadcastWeek: D, startOfISOWeek: _, startOfWeek: M } = o, N = h ? D(s, o) : d ? _(s) : M(s), z = h ? w(u) : d ? T(E(u)) : O(E(u)), k = a && (h ? w(a) : d ? T(a) : O(a)), Y = k && C(z, k) ? k : z, B = b(Y, N), Z = v(u, s) + 1, te = [];
  for (let X = 0; X <= B; X++) {
    const ee = p(N, X);
    te.push(ee);
  }
  const ne = (h ? 35 : 42) * Z;
  if (m && te.length < ne) {
    const X = ne - te.length;
    for (let ee = 0; ee < X; ee++) {
      const ie = p(te[te.length - 1], 1);
      te.push(ie);
    }
  }
  return te;
}
function VD(n) {
  const a = [];
  return n.reduce((l, o) => {
    const s = o.weeks.reduce((u, d) => u.concat(d.days.slice()), a.slice());
    return l.concat(s.slice());
  }, a.slice());
}
function FD(n, a, l, o) {
  const { numberOfMonths: s = 1 } = l, u = [];
  for (let d = 0; d < s; d++) {
    const m = o.addMonths(n, d);
    if (a && m > a)
      break;
    u.push(m);
  }
  return u;
}
function Zy(n, a, l, o) {
  const { month: s, defaultMonth: u, today: d = o.today(), numberOfMonths: m = 1 } = n;
  let h = s || u || d;
  const { differenceInCalendarMonths: p, addMonths: b, startOfMonth: v } = o;
  if (l && p(l, h) < m - 1) {
    const w = -1 * (m - 1);
    h = b(l, w);
  }
  return a && p(h, a) < 0 && (h = a), v(h);
}
function XD(n, a, l, o) {
  const { addDays: s, endOfBroadcastWeek: u, endOfISOWeek: d, endOfMonth: m, endOfWeek: h, getISOWeek: p, getWeek: b, startOfBroadcastWeek: v, startOfISOWeek: w, startOfWeek: T } = o, E = n.reduce((O, C) => {
    const D = l.broadcastCalendar ? v(C, o) : l.ISOWeek ? w(C) : T(C), _ = l.broadcastCalendar ? u(C) : l.ISOWeek ? d(m(C)) : h(m(C)), M = a.filter((Y) => Y >= D && Y <= _), N = l.broadcastCalendar ? 35 : 42;
    if (l.fixedWeeks && M.length < N) {
      const Y = a.filter((B) => {
        const Z = N - M.length;
        return B > _ && B <= s(_, Z);
      });
      M.push(...Y);
    }
    const z = M.reduce((Y, B) => {
      const Z = l.ISOWeek ? p(B) : b(B), te = Y.find((ne) => ne.weekNumber === Z), re = new a0(B, C, o);
      return te ? te.days.push(re) : Y.push(new GM(Z, [re])), Y;
    }, []), k = new PM(C, z);
    return O.push(k), O;
  }, []);
  return l.reverseMonths ? E.reverse() : E;
}
function QD(n, a) {
  let { startMonth: l, endMonth: o } = n;
  const { startOfYear: s, startOfDay: u, startOfMonth: d, endOfMonth: m, addYears: h, endOfYear: p, newDate: b, today: v } = a, { fromYear: w, toYear: T, fromMonth: E, toMonth: O } = n;
  !l && E && (l = E), !l && w && (l = a.newDate(w, 0, 1)), !o && O && (o = O), !o && T && (o = b(T, 11, 31));
  const C = n.captionLayout === "dropdown" || n.captionLayout === "dropdown-years";
  return l ? l = d(l) : w ? l = b(w, 0, 1) : !l && C && (l = s(h(n.today ?? v(), -100))), o ? o = m(o) : T ? o = b(T, 11, 31) : !o && C && (o = p(n.today ?? v())), [
    l && u(l),
    o && u(o)
  ];
}
function ZD(n, a, l, o) {
  if (l.disableNavigation)
    return;
  const { pagedNavigation: s, numberOfMonths: u = 1 } = l, { startOfMonth: d, addMonths: m, differenceInCalendarMonths: h } = o, p = s ? u : 1, b = d(n);
  if (!a)
    return m(b, p);
  if (!(h(a, n) < u))
    return m(b, p);
}
function ID(n, a, l, o) {
  if (l.disableNavigation)
    return;
  const { pagedNavigation: s, numberOfMonths: u } = l, { startOfMonth: d, addMonths: m, differenceInCalendarMonths: h } = o, p = s ? u ?? 1 : 1, b = d(n);
  if (!a)
    return m(b, -p);
  if (!(h(b, a) <= 0))
    return m(b, -p);
}
function $D(n) {
  const a = [];
  return n.reduce((l, o) => l.concat(o.weeks.slice()), a.slice());
}
function nc(n, a) {
  const [l, o] = x.useState(n);
  return [a === void 0 ? l : a, o];
}
function KD(n, a) {
  const [l, o] = QD(n, a), { startOfMonth: s, endOfMonth: u } = a, d = Zy(n, l, o, a), [m, h] = nc(
    d,
    // initialMonth is always computed from props.month if provided
    n.month ? d : void 0
  );
  x.useEffect(() => {
    const N = Zy(n, l, o, a);
    h(N);
  }, [n.timeZone]);
  const { months: p, weeks: b, days: v, previousMonth: w, nextMonth: T } = x.useMemo(() => {
    const N = FD(m, o, { numberOfMonths: n.numberOfMonths }, a), z = WD(N, n.endMonth ? u(n.endMonth) : void 0, {
      ISOWeek: n.ISOWeek,
      fixedWeeks: n.fixedWeeks,
      broadcastCalendar: n.broadcastCalendar
    }, a), k = XD(N, z, {
      broadcastCalendar: n.broadcastCalendar,
      fixedWeeks: n.fixedWeeks,
      ISOWeek: n.ISOWeek,
      reverseMonths: n.reverseMonths
    }, a), Y = $D(k), B = VD(k), Z = ID(m, l, n, a), te = ZD(m, o, n, a);
    return {
      months: k,
      weeks: Y,
      days: B,
      previousMonth: Z,
      nextMonth: te
    };
  }, [
    a,
    m.getTime(),
    o?.getTime(),
    l?.getTime(),
    n.disableNavigation,
    n.broadcastCalendar,
    n.endMonth?.getTime(),
    n.fixedWeeks,
    n.ISOWeek,
    n.numberOfMonths,
    n.pagedNavigation,
    n.reverseMonths
  ]), { disableNavigation: E, onMonthChange: O } = n, C = (N) => b.some((z) => z.days.some((k) => k.isEqualTo(N))), D = (N) => {
    if (E)
      return;
    let z = s(N);
    l && z < s(l) && (z = s(l)), o && z > s(o) && (z = s(o)), h(z), O?.(z);
  };
  return {
    months: p,
    weeks: b,
    days: v,
    navStart: l,
    navEnd: o,
    previousMonth: w,
    nextMonth: T,
    goToMonth: D,
    goToDay: (N) => {
      C(N) || D(N.date);
    }
  };
}
var Yn;
(function(n) {
  n[n.Today = 0] = "Today", n[n.Selected = 1] = "Selected", n[n.LastFocused = 2] = "LastFocused", n[n.FocusedModifier = 3] = "FocusedModifier";
})(Yn || (Yn = {}));
function Iy(n) {
  return !n[st.disabled] && !n[st.hidden] && !n[st.outside];
}
function JD(n, a, l, o) {
  let s, u = -1;
  for (const d of n) {
    const m = a(d);
    Iy(m) && (m[st.focused] && u < Yn.FocusedModifier ? (s = d, u = Yn.FocusedModifier) : o?.isEqualTo(d) && u < Yn.LastFocused ? (s = d, u = Yn.LastFocused) : l(d.date) && u < Yn.Selected ? (s = d, u = Yn.Selected) : m[st.today] && u < Yn.Today && (s = d, u = Yn.Today));
  }
  return s || (s = n.find((d) => Iy(a(d)))), s;
}
function e_(n, a, l, o, s, u, d) {
  const { ISOWeek: m, broadcastCalendar: h } = u, { addDays: p, addMonths: b, addWeeks: v, addYears: w, endOfBroadcastWeek: T, endOfISOWeek: E, endOfWeek: O, max: C, min: D, startOfBroadcastWeek: _, startOfISOWeek: M, startOfWeek: N } = d;
  let k = {
    day: p,
    week: v,
    month: b,
    year: w,
    startOfWeek: (Y) => h ? _(Y, d) : m ? M(Y) : N(Y),
    endOfWeek: (Y) => h ? T(Y) : m ? E(Y) : O(Y)
  }[n](l, a === "after" ? 1 : -1);
  return a === "before" && o ? k = C([o, k]) : a === "after" && s && (k = D([s, k])), k;
}
function v0(n, a, l, o, s, u, d, m = 0) {
  if (m > 365)
    return;
  const h = e_(n, a, l.date, o, s, u, d), p = !!(u.disabled && ba(h, u.disabled, d)), b = !!(u.hidden && ba(h, u.hidden, d)), v = h, w = new a0(h, v, d);
  return !p && !b ? w : v0(n, a, w, o, s, u, d, m + 1);
}
function t_(n, a, l, o, s) {
  const { autoFocus: u } = n, [d, m] = x.useState(), h = JD(a.days, l, o || (() => !1), d), [p, b] = x.useState(u ? h : void 0);
  return {
    isFocusTarget: (O) => !!h?.isEqualTo(O),
    setFocused: b,
    focused: p,
    blur: () => {
      m(p), b(void 0);
    },
    moveFocus: (O, C) => {
      if (!p)
        return;
      const D = v0(O, C, p, a.navStart, a.navEnd, n, s);
      D && (n.disableNavigation && !a.days.some((M) => M.isEqualTo(D)) || (a.goToDay(D), b(D)));
    }
  };
}
function n_(n, a) {
  const { selected: l, required: o, onSelect: s } = n, [u, d] = nc(l, s ? l : void 0), m = s ? l : u, { isSameDay: h } = a, p = (T) => m?.some((E) => h(E, T)) ?? !1, { min: b, max: v } = n;
  return {
    selected: m,
    select: (T, E, O) => {
      let C = [...m ?? []];
      if (p(T)) {
        if (m?.length === b || o && m?.length === 1)
          return;
        C = m?.filter((D) => !h(D, T));
      } else
        m?.length === v ? C = [T] : C = [...C, T];
      return s || d(C), s?.(C, T, E, O), C;
    },
    isSelected: p
  };
}
function a_(n, a, l = 0, o = 0, s = !1, u = Qn) {
  const { from: d, to: m } = a || {}, { isSameDay: h, isAfter: p, isBefore: b } = u;
  let v;
  if (!d && !m)
    v = { from: n, to: l > 0 ? void 0 : n };
  else if (d && !m)
    h(d, n) ? l === 0 ? v = { from: d, to: n } : s ? v = { from: d, to: void 0 } : v = void 0 : b(n, d) ? v = { from: n, to: d } : v = { from: d, to: n };
  else if (d && m)
    if (h(d, n) && h(m, n))
      s ? v = { from: d, to: m } : v = void 0;
    else if (h(d, n))
      v = { from: d, to: l > 0 ? void 0 : n };
    else if (h(m, n))
      v = { from: n, to: l > 0 ? void 0 : n };
    else if (b(n, d))
      v = { from: n, to: m };
    else if (p(n, d))
      v = { from: d, to: n };
    else if (p(n, m))
      v = { from: d, to: n };
    else
      throw new Error("Invalid range");
  if (v?.from && v?.to) {
    const w = u.differenceInCalendarDays(v.to, v.from);
    o > 0 && w > o ? v = { from: n, to: void 0 } : l > 1 && w < l && (v = { from: n, to: void 0 });
  }
  return v;
}
function r_(n, a, l = Qn) {
  const o = Array.isArray(a) ? a : [a];
  let s = n.from;
  const u = l.differenceInCalendarDays(n.to, n.from), d = Math.min(u, 6);
  for (let m = 0; m <= d; m++) {
    if (o.includes(s.getDay()))
      return !0;
    s = l.addDays(s, 1);
  }
  return !1;
}
function $y(n, a, l = Qn) {
  return va(n, a.from, !1, l) || va(n, a.to, !1, l) || va(a, n.from, !1, l) || va(a, n.to, !1, l);
}
function o_(n, a, l = Qn) {
  const o = Array.isArray(a) ? a : [a];
  if (o.filter((m) => typeof m != "function").some((m) => typeof m == "boolean" ? m : l.isDate(m) ? va(n, m, !1, l) : l0(m, l) ? m.some((h) => va(n, h, !1, l)) : tc(m) ? m.from && m.to ? $y(n, { from: m.from, to: m.to }, l) : !1 : o0(m) ? r_(n, m.dayOfWeek, l) : Fd(m) ? l.isAfter(m.before, m.after) ? $y(n, {
    from: l.addDays(m.after, 1),
    to: l.addDays(m.before, -1)
  }, l) : ba(n.from, m, l) || ba(n.to, m, l) : Xd(m) || Qd(m) ? ba(n.from, m, l) || ba(n.to, m, l) : !1))
    return !0;
  const d = o.filter((m) => typeof m == "function");
  if (d.length) {
    let m = n.from;
    const h = l.differenceInCalendarDays(n.to, n.from);
    for (let p = 0; p <= h; p++) {
      if (d.some((b) => b(m)))
        return !0;
      m = l.addDays(m, 1);
    }
  }
  return !1;
}
function l_(n, a) {
  const { disabled: l, excludeDisabled: o, resetOnSelect: s, selected: u, required: d, onSelect: m } = n, [h, p] = nc(u, m ? u : void 0), b = m ? u : h;
  return {
    selected: b,
    select: (T, E, O) => {
      const { min: C, max: D } = n;
      let _;
      if (T) {
        const M = b?.from, N = b?.to, z = !!M && !!N, k = !!M && !!N && a.isSameDay(M, N) && a.isSameDay(T, M);
        s && (z || !b?.from) ? !d && k ? _ = void 0 : _ = { from: T, to: void 0 } : _ = a_(T, b, C, D, d, a);
      }
      return o && l && _?.from && _.to && o_({ from: _.from, to: _.to }, l, a) && (_.from = T, _.to = void 0), m || p(_), m?.(_, T, E, O), _;
    },
    isSelected: (T) => b && va(b, T, !1, a)
  };
}
function i_(n, a) {
  const { selected: l, required: o, onSelect: s } = n, [u, d] = nc(l, s ? l : void 0), m = s ? l : u, { isSameDay: h } = a;
  return {
    selected: m,
    select: (v, w, T) => {
      let E = v;
      return !o && m && m && h(v, m) && (E = void 0), s || d(E), s?.(E, v, w, T), E;
    },
    isSelected: (v) => m ? h(m, v) : !1
  };
}
function s_(n, a) {
  const l = i_(n, a), o = n_(n, a), s = l_(n, a);
  switch (n.mode) {
    case "single":
      return l;
    case "multiple":
      return o;
    case "range":
      return s;
    default:
      return;
  }
}
function wn(n, a) {
  return n instanceof Lt && n.timeZone === a ? n : new Lt(n, a);
}
function zo(n, a, l) {
  return wn(n, a);
}
function Ky(n, a, l) {
  return typeof n == "boolean" || typeof n == "function" ? n : n instanceof Date ? zo(n, a) : Array.isArray(n) ? n.map((o) => o instanceof Date ? zo(o, a) : o) : tc(n) ? {
    ...n,
    from: n.from ? wn(n.from, a) : n.from,
    to: n.to ? wn(n.to, a) : n.to
  } : Fd(n) ? {
    before: zo(n.before, a),
    after: zo(n.after, a)
  } : Xd(n) ? {
    after: zo(n.after, a)
  } : Qd(n) ? {
    before: zo(n.before, a)
  } : n;
}
function Xf(n, a, l) {
  return n && (Array.isArray(n) ? n.map((o) => Ky(o, a)) : Ky(n, a));
}
function c_(n) {
  let a = n;
  const l = a.timeZone;
  if (l && (a = {
    ...n,
    timeZone: l
  }, a.today && (a.today = wn(a.today, l)), a.month && (a.month = wn(a.month, l)), a.defaultMonth && (a.defaultMonth = wn(a.defaultMonth, l)), a.startMonth && (a.startMonth = wn(a.startMonth, l)), a.endMonth && (a.endMonth = wn(a.endMonth, l)), a.mode === "single" && a.selected ? a.selected = wn(a.selected, l) : a.mode === "multiple" && a.selected ? a.selected = a.selected?.map((Te) => wn(Te, l)) : a.mode === "range" && a.selected && (a.selected = {
    from: a.selected.from ? wn(a.selected.from, l) : a.selected.from,
    to: a.selected.to ? wn(a.selected.to, l) : a.selected.to
  }), a.disabled !== void 0 && (a.disabled = Xf(a.disabled, l)), a.hidden !== void 0 && (a.hidden = Xf(a.hidden, l)), a.modifiers)) {
    const Te = {};
    Object.keys(a.modifiers).forEach((Ue) => {
      Te[Ue] = Xf(a.modifiers?.[Ue], l);
    }), a.modifiers = Te;
  }
  const { components: o, formatters: s, labels: u, dateLib: d, locale: m, classNames: h } = x.useMemo(() => {
    const Te = { ...Jb, ...a.locale }, Ue = a.broadcastCalendar ? 1 : a.weekStartsOn, be = a.noonSafe && a.timeZone ? BD(a.timeZone, {
      weekStartsOn: Ue,
      locale: Te
    }) : void 0, Re = a.dateLib && be ? { ...be, ...a.dateLib } : a.dateLib ?? be, mt = new Ut({
      locale: Te,
      weekStartsOn: Ue,
      firstWeekContainsDate: a.firstWeekContainsDate,
      useAdditionalWeekYearTokens: a.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: a.useAdditionalDayOfYearTokens,
      timeZone: a.timeZone,
      numerals: a.numerals
    }, Re);
    return {
      dateLib: mt,
      components: bD(a.components),
      formatters: _D(a.formatters),
      labels: RD(a.labels, mt.options),
      locale: Te,
      classNames: { ...Zd(), ...a.classNames }
    };
  }, [
    a.locale,
    a.broadcastCalendar,
    a.weekStartsOn,
    a.firstWeekContainsDate,
    a.useAdditionalWeekYearTokens,
    a.useAdditionalDayOfYearTokens,
    a.timeZone,
    a.numerals,
    a.dateLib,
    a.noonSafe,
    a.components,
    a.formatters,
    a.labels,
    a.classNames
  ]);
  a.today || (a = { ...a, today: d.today() });
  const { captionLayout: p, mode: b, navLayout: v, numberOfMonths: w = 1, onDayBlur: T, onDayClick: E, onDayFocus: O, onDayKeyDown: C, onDayMouseEnter: D, onDayMouseLeave: _, onNextClick: M, onPrevClick: N, showWeekNumber: z, styles: k } = a, { formatCaption: Y, formatDay: B, formatMonthDropdown: Z, formatWeekNumber: te, formatWeekNumberHeader: re, formatWeekdayName: ne, formatYearDropdown: X } = s, ee = KD(a, d), { days: ie, months: H, navStart: F, navEnd: K, previousMonth: oe, nextMonth: G, goToMonth: A } = ee, W = yD(ie, a, F, K, d), { isSelected: ae, select: se, selected: ce } = s_(a, d) ?? {}, { blur: I, focused: le, isFocusTarget: Se, moveFocus: he, setFocused: ge } = t_(a, ee, W, ae ?? (() => !1), d), { labelDayButton: Qe, labelGridcell: Pe, labelGrid: Ee, labelMonthDropdown: Me, labelNav: Ve, labelPrevious: Zn, labelNext: ur, labelWeekday: Da, labelWeekNumber: Ko, labelWeekNumberHeader: Jo, labelYearDropdown: el } = u, gc = x.useMemo(() => YD(d, a.ISOWeek, a.broadcastCalendar, a.today), [d, a.ISOWeek, a.broadcastCalendar, a.today]), oi = b !== void 0 || E !== void 0, At = x.useCallback(() => {
    oe && (A(oe), N?.(oe));
  }, [oe, A, N]), tl = x.useCallback(() => {
    G && (A(G), M?.(G));
  }, [A, G, M]), li = x.useCallback((Te, Ue) => (be) => {
    be.preventDefault(), be.stopPropagation(), ge(Te), !Ue.disabled && (se?.(Te.date, Ue, be), E?.(Te.date, Ue, be));
  }, [se, E, ge]), ii = x.useCallback((Te, Ue) => (be) => {
    ge(Te), O?.(Te.date, Ue, be);
  }, [O, ge]), Qr = x.useCallback((Te, Ue) => (be) => {
    I(), T?.(Te.date, Ue, be);
  }, [I, T]), yc = x.useCallback((Te, Ue) => (be) => {
    const Re = {
      ArrowLeft: [
        be.shiftKey ? "month" : "day",
        a.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        be.shiftKey ? "month" : "day",
        a.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [be.shiftKey ? "year" : "week", "after"],
      ArrowUp: [be.shiftKey ? "year" : "week", "before"],
      PageUp: [be.shiftKey ? "year" : "month", "before"],
      PageDown: [be.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (Re[be.key]) {
      be.preventDefault(), be.stopPropagation();
      const [mt, Ne] = Re[be.key];
      he(mt, Ne);
    }
    C?.(Te.date, Ue, be);
  }, [he, C, a.dir]), si = x.useCallback((Te, Ue) => (be) => {
    D?.(Te.date, Ue, be);
  }, [D]), vc = x.useCallback((Te, Ue) => (be) => {
    _?.(Te.date, Ue, be);
  }, [_]), bc = x.useCallback((Te) => (Ue) => {
    const be = Number(Ue.target.value), Re = d.setMonth(d.startOfMonth(Te), be);
    A(Re);
  }, [d, A]), fr = x.useCallback((Te) => (Ue) => {
    const be = Number(Ue.target.value), Re = d.setYear(d.startOfMonth(Te), be);
    A(Re);
  }, [d, A]), { className: Pt, style: An } = x.useMemo(() => ({
    className: [h[ye.Root], a.className].filter(Boolean).join(" "),
    style: { ...k?.[ye.Root], ...a.style }
  }), [h, a.className, a.style, k]), Gt = xD(a), ci = x.useRef(null);
  GD(ci, !!a.animate, {
    classNames: h,
    months: H,
    focused: le,
    dateLib: d
  });
  const xc = {
    dayPickerProps: a,
    selected: ce,
    select: se,
    isSelected: ae,
    months: H,
    nextMonth: G,
    previousMonth: oe,
    goToMonth: A,
    getModifiers: W,
    components: o,
    classNames: h,
    styles: k,
    labels: u,
    formatters: s
  };
  return ue.createElement(
    r0.Provider,
    { value: xc },
    ue.createElement(
      o.Root,
      { rootRef: a.animate ? ci : void 0, className: Pt, style: An, dir: a.dir, id: a.id, lang: a.lang ?? m.code, nonce: a.nonce, title: a.title, role: a.role, "aria-label": a["aria-label"], "aria-labelledby": a["aria-labelledby"], ...Gt },
      ue.createElement(
        o.Months,
        { className: h[ye.Months], style: k?.[ye.Months] },
        !a.hideNavigation && !v && ue.createElement(o.Nav, { "data-animated-nav": a.animate ? "true" : void 0, className: h[ye.Nav], style: k?.[ye.Nav], "aria-label": Ve(), onPreviousClick: At, onNextClick: tl, previousMonth: oe, nextMonth: G }),
        H.map((Te, Ue) => ue.createElement(
          o.Month,
          {
            "data-animated-month": a.animate ? "true" : void 0,
            className: h[ye.Month],
            style: k?.[ye.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: Ue,
            displayIndex: Ue,
            calendarMonth: Te
          },
          v === "around" && !a.hideNavigation && Ue === 0 && ue.createElement(
            o.PreviousMonthButton,
            { type: "button", className: h[ye.PreviousMonthButton], tabIndex: oe ? void 0 : -1, "aria-disabled": oe ? void 0 : !0, "aria-label": Zn(oe), onClick: At, "data-animated-button": a.animate ? "true" : void 0 },
            ue.createElement(o.Chevron, { disabled: oe ? void 0 : !0, className: h[ye.Chevron], orientation: a.dir === "rtl" ? "right" : "left" })
          ),
          ue.createElement(o.MonthCaption, { "data-animated-caption": a.animate ? "true" : void 0, className: h[ye.MonthCaption], style: k?.[ye.MonthCaption], calendarMonth: Te, displayIndex: Ue }, p?.startsWith("dropdown") ? ue.createElement(
            o.DropdownNav,
            { className: h[ye.Dropdowns], style: k?.[ye.Dropdowns] },
            (() => {
              const be = p === "dropdown" || p === "dropdown-months" ? ue.createElement(o.MonthsDropdown, { key: "month", className: h[ye.MonthsDropdown], "aria-label": Me(), classNames: h, components: o, disabled: !!a.disableNavigation, onChange: bc(Te.date), options: zD(Te.date, F, K, s, d), style: k?.[ye.Dropdown], value: d.getMonth(Te.date) }) : ue.createElement("span", { key: "month" }, Z(Te.date, d)), Re = p === "dropdown" || p === "dropdown-years" ? ue.createElement(o.YearsDropdown, { key: "year", className: h[ye.YearsDropdown], "aria-label": el(d.options), classNames: h, components: o, disabled: !!a.disableNavigation, onChange: fr(Te.date), options: UD(F, K, s, d, !!a.reverseYears), style: k?.[ye.Dropdown], value: d.getYear(Te.date) }) : ue.createElement("span", { key: "year" }, X(Te.date, d));
              return d.getMonthYearOrder() === "year-first" ? [Re, be] : [be, Re];
            })(),
            ue.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, Y(Te.date, d.options, d))
          ) : ue.createElement(o.CaptionLabel, { className: h[ye.CaptionLabel], role: "status", "aria-live": "polite" }, Y(Te.date, d.options, d))),
          v === "around" && !a.hideNavigation && Ue === w - 1 && ue.createElement(
            o.NextMonthButton,
            { type: "button", className: h[ye.NextMonthButton], tabIndex: G ? void 0 : -1, "aria-disabled": G ? void 0 : !0, "aria-label": ur(G), onClick: tl, "data-animated-button": a.animate ? "true" : void 0 },
            ue.createElement(o.Chevron, { disabled: G ? void 0 : !0, className: h[ye.Chevron], orientation: a.dir === "rtl" ? "left" : "right" })
          ),
          Ue === w - 1 && v === "after" && !a.hideNavigation && ue.createElement(o.Nav, { "data-animated-nav": a.animate ? "true" : void 0, className: h[ye.Nav], style: k?.[ye.Nav], "aria-label": Ve(), onPreviousClick: At, onNextClick: tl, previousMonth: oe, nextMonth: G }),
          ue.createElement(
            o.MonthGrid,
            { role: "grid", "aria-multiselectable": b === "multiple" || b === "range", "aria-label": Ee(Te.date, d.options, d) || void 0, className: h[ye.MonthGrid], style: k?.[ye.MonthGrid] },
            !a.hideWeekdays && ue.createElement(
              o.Weekdays,
              { "data-animated-weekdays": a.animate ? "true" : void 0, className: h[ye.Weekdays], style: k?.[ye.Weekdays] },
              z && ue.createElement(o.WeekNumberHeader, { "aria-label": Jo(d.options), className: h[ye.WeekNumberHeader], style: k?.[ye.WeekNumberHeader], scope: "col" }, re()),
              gc.map((be) => ue.createElement(o.Weekday, { "aria-label": Da(be, d.options, d), className: h[ye.Weekday], key: String(be), style: k?.[ye.Weekday], scope: "col" }, ne(be, d.options, d)))
            ),
            ue.createElement(o.Weeks, { "data-animated-weeks": a.animate ? "true" : void 0, className: h[ye.Weeks], style: k?.[ye.Weeks] }, Te.weeks.map((be) => ue.createElement(
              o.Week,
              { className: h[ye.Week], key: be.weekNumber, style: k?.[ye.Week], week: be },
              z && ue.createElement(o.WeekNumber, { week: be, style: k?.[ye.WeekNumber], "aria-label": Ko(be.weekNumber, {
                locale: m
              }), className: h[ye.WeekNumber], scope: "row", role: "rowheader" }, te(be.weekNumber, d)),
              be.days.map((Re) => {
                const { date: mt } = Re, Ne = W(Re);
                if (Ne[st.focused] = !Ne.hidden && !!le?.isEqualTo(Re), Ne[Dn.selected] = ae?.(mt) || Ne.selected, tc(ce)) {
                  const { from: mr, to: In } = ce;
                  Ne[Dn.range_start] = !!(mr && In && d.isSameDay(mt, mr)), Ne[Dn.range_end] = !!(mr && In && d.isSameDay(mt, In)), Ne[Dn.range_middle] = va(ce, mt, !0, d);
                }
                const dr = HD(Ne, k, a.modifiersStyles), wc = vD(Ne, h, a.modifiersClassNames), ui = !oi && !Ne.hidden ? Pe(mt, Ne, d.options, d) : void 0;
                return ue.createElement(o.Day, { key: `${Re.isoDate}_${Re.displayMonthId}`, day: Re, modifiers: Ne, className: wc.join(" "), style: dr, role: "gridcell", "aria-selected": Ne.selected || void 0, "aria-label": ui, "data-day": Re.isoDate, "data-month": Re.outside ? Re.dateMonthId : void 0, "data-selected": Ne.selected || void 0, "data-disabled": Ne.disabled || void 0, "data-hidden": Ne.hidden || void 0, "data-outside": Re.outside || void 0, "data-focused": Ne.focused || void 0, "data-today": Ne.today || void 0 }, !Ne.hidden && oi ? ue.createElement(o.DayButton, { className: h[ye.DayButton], style: k?.[ye.DayButton], type: "button", day: Re, modifiers: Ne, disabled: !Ne.focused && Ne.disabled || void 0, "aria-disabled": Ne.focused && Ne.disabled || void 0, tabIndex: Se(Re) ? 0 : -1, "aria-label": Qe(mt, Ne, d.options, d), onClick: li(Re, Ne), onBlur: Qr(Re, Ne), onFocus: ii(Re, Ne), onKeyDown: yc(Re, Ne), onMouseEnter: si(Re, Ne), onMouseLeave: vc(Re, Ne) }, B(mt, d.options, d)) : !Ne.hidden && B(Re.date, d.options, d));
              })
            )))
          )
        ))
      ),
      a.footer && ue.createElement(o.Footer, { className: h[ye.Footer], style: k?.[ye.Footer], role: "status", "aria-live": "polite" }, a.footer)
    )
  );
}
function u_({
  className: n,
  classNames: a,
  showOutsideDays: l = !0,
  captionLayout: o = "label",
  buttonVariant: s = "ghost",
  formatters: u,
  components: d,
  ...m
}) {
  const h = Zd();
  return /* @__PURE__ */ g.jsx(
    c_,
    {
      showOutsideDays: l,
      className: we(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        n
      ),
      captionLayout: o,
      formatters: {
        formatMonthDropdown: (p) => p.toLocaleString("default", { month: "short" }),
        ...u
      },
      classNames: {
        root: we("w-fit", h.root),
        months: we(
          "flex gap-4 flex-col md:flex-row relative",
          h.months
        ),
        month: we("flex flex-col w-full gap-4", h.month),
        nav: we(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          h.nav
        ),
        button_previous: we(
          ld({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          h.button_previous
        ),
        button_next: we(
          ld({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          h.button_next
        ),
        month_caption: we(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          h.month_caption
        ),
        dropdowns: we(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          h.dropdowns
        ),
        dropdown_root: we(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          h.dropdown_root
        ),
        dropdown: we(
          "absolute bg-popover inset-0 opacity-0",
          h.dropdown
        ),
        caption_label: we(
          "select-none font-medium",
          o === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          h.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: we("flex", h.weekdays),
        weekday: we(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          h.weekday
        ),
        week: we("flex w-full mt-2", h.week),
        week_number_header: we(
          "select-none w-(--cell-size)",
          h.week_number_header
        ),
        week_number: we(
          "text-[0.8rem] select-none text-muted-foreground",
          h.week_number
        ),
        day: we(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          m.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          h.day
        ),
        range_start: we(
          "rounded-l-md bg-accent",
          h.range_start
        ),
        range_middle: we("rounded-none", h.range_middle),
        range_end: we("rounded-r-md bg-accent", h.range_end),
        today: we(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          h.today
        ),
        outside: we(
          "text-muted-foreground aria-selected:text-muted-foreground",
          h.outside
        ),
        disabled: we(
          "text-muted-foreground opacity-50",
          h.disabled
        ),
        hidden: we("invisible", h.hidden),
        ...a
      },
      components: {
        Root: ({ className: p, rootRef: b, ...v }) => /* @__PURE__ */ g.jsx(
          "div",
          {
            "data-slot": "calendar",
            ref: b,
            className: we(p),
            ...v
          }
        ),
        Chevron: ({ className: p, orientation: b, ...v }) => b === "left" ? /* @__PURE__ */ g.jsx(EM, { className: we("size-4", p), ...v }) : b === "right" ? /* @__PURE__ */ g.jsx(
          OM,
          {
            className: we("size-4", p),
            ...v
          }
        ) : /* @__PURE__ */ g.jsx(Vd, { className: we("size-4", p), ...v }),
        DayButton: f_,
        WeekNumber: ({ children: p, ...b }) => /* @__PURE__ */ g.jsx("td", { ...b, children: /* @__PURE__ */ g.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) }),
        ...d
      },
      ...m
    }
  );
}
function f_({
  className: n,
  day: a,
  modifiers: l,
  ...o
}) {
  const s = Zd(), u = x.useRef(null);
  return x.useEffect(() => {
    l.focused && u.current?.focus();
  }, [l.focused]), /* @__PURE__ */ g.jsx(
    Oe,
    {
      ref: u,
      variant: "ghost",
      size: "icon",
      "data-day": a.date.toLocaleDateString(),
      "data-selected-single": l.selected && !l.range_start && !l.range_end && !l.range_middle,
      "data-range-start": l.range_start,
      "data-range-end": l.range_end,
      "data-range-middle": l.range_middle,
      className: we(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        s.day,
        n
      ),
      ...o
    }
  );
}
var d_ = Object.defineProperty, Nt = (n, a) => d_(n, "name", { value: a, configurable: !0 }), md = "dismissableLayer.update", m_ = "dismissableLayer.pointerDownOutside", h_ = "dismissableLayer.focusOutside", Jy, b0 = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), x0 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Nt(function(a, l) {
    const {
      disableOutsidePointerEvents: o = !1,
      deferPointerDownOutside: s = !1,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: m,
      onInteractOutside: h,
      onDismiss: p,
      ...b
    } = a, v = x.useContext(b0), [w, T] = x.useState(null), E = w?.ownerDocument ?? globalThis?.document, [, O] = x.useState({}), C = at(l, T), D = Array.from(v.layers), [_] = [
      ...v.layersWithOutsidePointerEventsDisabled
    ].slice(-1), M = _ ? D.indexOf(_) : -1, N = w ? D.indexOf(w) : -1, z = v.layersWithOutsidePointerEventsDisabled.size > 0, k = N >= M, Y = x.useRef(!1), B = w0(
      (ne) => {
        d?.(ne), h?.(ne), ne.defaultPrevented || p?.();
      },
      {
        ownerDocument: E,
        deferPointerDownOutside: s,
        isDeferredPointerDownOutsideRef: Y,
        dismissableSurfaces: v.dismissableSurfaces,
        shouldHandlePointerDownOutside: x.useCallback(
          (ne) => {
            if (!(ne instanceof Node))
              return !1;
            const X = [...v.branches].some(
              (ee) => ee.contains(ne)
            );
            return k && !X;
          },
          [v.branches, k]
        )
      }
    ), Z = S0((ne) => {
      if (s && Y.current)
        return;
      const X = ne.target;
      [...v.branches].some((ie) => ie.contains(X)) || (m?.(ne), h?.(ne), ne.defaultPrevented || p?.());
    }, E), te = w ? N === D.length - 1 : !1, re = _n((ne) => {
      ne.key === "Escape" && (u?.(ne), !ne.defaultPrevented && p && (ne.preventDefault(), p()));
    });
    return x.useEffect(() => {
      if (te)
        return E.addEventListener("keydown", re, { capture: !0 }), () => E.removeEventListener("keydown", re, { capture: !0 });
    }, [E, te, re]), x.useEffect(() => {
      if (w)
        return o && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (Jy = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(w)), v.layers.add(w), hd(), () => {
          o && (v.layersWithOutsidePointerEventsDisabled.delete(w), v.layersWithOutsidePointerEventsDisabled.size === 0 && (E.body.style.pointerEvents = Jy));
        };
    }, [w, E, o, v]), x.useEffect(() => () => {
      w && (v.layers.delete(w), v.layersWithOutsidePointerEventsDisabled.delete(w), hd());
    }, [w, v]), x.useEffect(() => {
      const ne = /* @__PURE__ */ Nt(() => O({}), "handleUpdate");
      return document.addEventListener(md, ne), () => document.removeEventListener(md, ne);
    }, []), /* @__PURE__ */ g.jsx(
      rt.div,
      {
        ...b,
        ref: C,
        style: {
          pointerEvents: z ? k ? "auto" : "none" : void 0,
          ...a.style
        },
        onFocusCapture: Ye(a.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Ye(a.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Ye(
          a.onPointerDownCapture,
          B.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function p_() {
  const n = x.useContext(b0), [a, l] = x.useState(null);
  return x.useEffect(() => {
    if (a)
      return n.dismissableSurfaces.add(a), () => {
        n.dismissableSurfaces.delete(a);
      };
  }, [a, n.dismissableSurfaces]), l;
}
Nt(p_, "useDismissableLayerSurface");
var g_ = /* @__PURE__ */ Nt(() => !0, "IS_TRUE");
function w0(n, a) {
  const {
    ownerDocument: l = globalThis?.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: s,
    dismissableSurfaces: u,
    shouldHandlePointerDownOutside: d = g_
  } = a, m = _n(n), h = x.useRef(!1), p = x.useRef(!1), b = x.useRef(/* @__PURE__ */ new Map()), v = x.useRef(() => {
  });
  return x.useEffect(() => {
    function w() {
      p.current = !1, s.current = !1, b.current.clear();
    }
    Nt(w, "resetOutsideInteraction");
    function T() {
      return Array.from(b.current.values()).some(Boolean);
    }
    Nt(T, "isOutsideInteractionIntercepted");
    function E(M) {
      if (!p.current)
        return;
      const N = M.target;
      N instanceof Node && [...u].some((k) => k.contains(N)) || b.current.set(M.type, !0), M.type === "click" && window.setTimeout(() => {
        p.current && v.current();
      }, 0);
    }
    Nt(E, "handleInteractionCapture");
    function O(M) {
      p.current && b.current.set(M.type, !1);
    }
    Nt(O, "handleInteractionBubble");
    const C = /* @__PURE__ */ Nt((M) => {
      if (M.target && !h.current) {
        let N = function() {
          l.removeEventListener("click", v.current);
          const k = T();
          w(), k || Kd(
            m_,
            m,
            z,
            { discrete: !0 }
          );
        };
        if (Nt(N, "handleAndDispatchPointerDownOutsideEvent"), !d(M.target)) {
          l.removeEventListener("click", v.current), w(), h.current = !1;
          return;
        }
        const z = { originalEvent: M };
        p.current = !0, s.current = o && M.button === 0, b.current.clear(), !o || M.button !== 0 ? N() : (l.removeEventListener("click", v.current), v.current = N, l.addEventListener("click", v.current, { once: !0 }));
      } else
        l.removeEventListener("click", v.current), w();
      h.current = !1;
    }, "handlePointerDown"), D = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const M of D)
      l.addEventListener(M, E, !0), l.addEventListener(M, O);
    const _ = window.setTimeout(() => {
      l.addEventListener("pointerdown", C);
    }, 0);
    return () => {
      window.clearTimeout(_), l.removeEventListener("pointerdown", C), l.removeEventListener("click", v.current);
      for (const M of D)
        l.removeEventListener(M, E, !0), l.removeEventListener(M, O);
    };
  }, [
    l,
    m,
    o,
    s,
    u,
    d
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ Nt(() => h.current = !0, "onPointerDownCapture")
  };
}
Nt(w0, "usePointerDownOutside");
function S0(n, a = globalThis?.document) {
  const l = _n(n), o = x.useRef(!1);
  return x.useEffect(() => {
    const s = /* @__PURE__ */ Nt((u) => {
      u.target && !o.current && Kd(h_, l, { originalEvent: u }, {
        discrete: !1
      });
    }, "handleFocus");
    return a.addEventListener("focusin", s), () => a.removeEventListener("focusin", s);
  }, [a, l]), {
    onFocusCapture: /* @__PURE__ */ Nt(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Nt(() => o.current = !1, "onBlurCapture")
  };
}
Nt(S0, "useFocusOutside");
function hd() {
  const n = new CustomEvent(md);
  document.dispatchEvent(n);
}
Nt(hd, "dispatchUpdate");
function Kd(n, a, l, { discrete: o }) {
  const s = l.originalEvent.target, u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: l });
  a && s.addEventListener(n, a, { once: !0 }), o ? eb(s, u) : s.dispatchEvent(u);
}
Nt(Kd, "handleAndDispatchCustomEvent");
var y_ = Object.defineProperty, Jd = (n, a) => y_(n, "name", { value: a, configurable: !0 }), Os = 0, Ho = null;
function v_(n) {
  return ac(), n.children;
}
Jd(v_, "FocusGuards");
function ac() {
  x.useEffect(() => {
    Ho || (Ho = { start: pd(), end: pd() });
    const { start: n, end: a } = Ho;
    return document.body.firstElementChild !== n && document.body.insertAdjacentElement("afterbegin", n), document.body.lastElementChild !== a && document.body.insertAdjacentElement("beforeend", a), Os++, () => {
      Os === 1 && (Ho?.start.remove(), Ho?.end.remove(), Ho = null), Os = Math.max(0, Os - 1);
    };
  }, []);
}
Jd(ac, "useFocusGuards");
function pd() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
Jd(pd, "createFocusGuard");
var b_ = Object.defineProperty, Et = (n, a) => b_(n, "name", { value: a, configurable: !0 }), Qf = "focusScope.autoFocusOnMount", Zf = "focusScope.autoFocusOnUnmount", ev = { bubbles: !1, cancelable: !0 }, C0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Et(function(a, l) {
    const {
      loop: o = !1,
      trapped: s = !1,
      branches: u,
      onMountAutoFocus: d,
      onUnmountAutoFocus: m,
      ...h
    } = a, [p, b] = x.useState(null), v = _n(d), w = _n(m), T = x.useRef(null), E = at(l, b), O = x.useRef(u);
    x.useEffect(() => {
      O.current = u;
    });
    const C = x.useCallback(
      (M) => M ? p?.contains(M) ? !0 : !!O.current?.some((N) => N.contains(M)) : !1,
      [p]
    ), D = x.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    x.useEffect(() => {
      if (s) {
        let M = function(Y) {
          if (D.paused || !p) return;
          const B = Y.target;
          C(B) ? T.current = B : ga(T.current, { select: !0 });
        }, N = function(Y) {
          if (D.paused || !p) return;
          const B = Y.relatedTarget;
          B !== null && (C(B) || ga(T.current, { select: !0 }));
        }, z = function(Y) {
          if (document.activeElement === document.body)
            for (const Z of Y)
              Z.removedNodes.length > 0 && ga(p);
        };
        Et(M, "handleFocusIn"), Et(N, "handleFocusOut"), Et(z, "handleMutations"), document.addEventListener("focusin", M), document.addEventListener("focusout", N);
        const k = new MutationObserver(z);
        return p && k.observe(p, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", M), document.removeEventListener("focusout", N), k.disconnect();
        };
      }
    }, [s, p, D.paused, C]), x.useEffect(() => {
      if (p) {
        tv.add(D);
        const M = document.activeElement;
        if (!p.contains(M)) {
          const z = new CustomEvent(Qf, ev);
          p.addEventListener(Qf, v), p.dispatchEvent(z), z.defaultPrevented || (D0(j0(em(p)), { select: !0 }), document.activeElement === M && ga(p));
        }
        return () => {
          p.removeEventListener(Qf, v);
          const z = p.ownerDocument, k = CustomEvent;
          setTimeout(() => {
            const Y = new k(Zf, ev);
            p.addEventListener(Zf, w), p.dispatchEvent(Y), Y.defaultPrevented || ga(M ?? z.body, { select: !0 }), p.removeEventListener(Zf, w), tv.remove(D);
          }, 0);
        };
      }
    }, [p, v, w, D]);
    const _ = x.useCallback(
      (M) => {
        if (!o && !s || D.paused) return;
        const N = M.key === "Tab" && !M.altKey && !M.ctrlKey && !M.metaKey, z = document.activeElement;
        if (N && z) {
          const k = M.currentTarget, [Y, B] = _0(k);
          Y && B ? !M.shiftKey && z === B ? (M.preventDefault(), o && ga(Y, { select: !0 })) : M.shiftKey && z === Y && (M.preventDefault(), o && ga(B, { select: !0 })) : z === k && M.preventDefault();
        }
      },
      [o, s, D.paused]
    );
    return /* @__PURE__ */ g.jsx(rt.div, { tabIndex: -1, ...h, ref: E, onKeyDown: _ });
  }, "FocusScope")
), E0 = x.createContext(null);
function T0({ registry: n, children: a }) {
  return n ? /* @__PURE__ */ g.jsx(E0.Provider, { value: n, children: a }) : a;
}
Et(T0, "FocusScopeBranchProvider");
function O0() {
  const [n, a] = x.useState([]), l = x.useMemo(
    () => ({
      add: /* @__PURE__ */ Et((o) => a((s) => s.includes(o) ? s : [...s, o]), "add"),
      remove: /* @__PURE__ */ Et((o) => a((s) => s.filter((u) => u !== o)), "remove")
    }),
    []
  );
  return { nodes: n, registry: l };
}
Et(O0, "useFocusScopeBranchRegistry");
function M0(n) {
  const a = x.useContext(E0);
  x.useEffect(() => {
    if (!(!n || !a))
      return a.add(n), () => a.remove(n);
  }, [n, a]);
}
Et(M0, "useFocusScopeBranch");
function D0(n, { select: a = !1 } = {}) {
  const l = document.activeElement;
  for (const o of n)
    if (ga(o, { select: a }), document.activeElement !== l) return;
}
Et(D0, "focusFirst");
function _0(n) {
  const a = em(n), l = gd(a, n), o = gd(a.reverse(), n);
  return [l, o];
}
Et(_0, "getTabbableEdges");
function em(n) {
  const a = [], o = n.ownerDocument.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Et((s) => {
      const u = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || u ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; o.nextNode(); )
    a.push(o.currentNode);
  return a;
}
Et(em, "getTabbableCandidates");
function gd(n, a) {
  const l = typeof a.checkVisibility == "function" && a.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of n)
    if (!(l ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : N0(o, { upTo: a })))
      return o;
}
Et(gd, "findVisible");
function N0(n, { upTo: a }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (a !== void 0 && n === a) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
Et(N0, "isHidden");
function A0(n) {
  return n.tagName === "INPUT" && typeof n.select == "function";
}
Et(A0, "isSelectableInput");
function ga(n, { select: a = !1 } = {}) {
  if (n && n.focus) {
    const o = (n.ownerDocument ?? document).activeElement;
    n.focus({ preventScroll: !0 }), n !== o && A0(n) && a && n.select();
  }
}
Et(ga, "focus");
var tv = k0();
function k0() {
  let n = [];
  return {
    add(a) {
      const l = n[0];
      a !== l && l?.pause(), n = yd(n, a), n.unshift(a);
    },
    remove(a) {
      n = yd(n, a), n[0]?.resume();
    }
  };
}
Et(k0, "createFocusScopesStack");
function yd(n, a) {
  const l = [...n], o = l.indexOf(a);
  return o !== -1 && l.splice(o, 1), l;
}
Et(yd, "arrayRemove");
function j0(n) {
  return n.filter((a) => a.tagName !== "A");
}
Et(j0, "removeLinks");
const x_ = ["top", "right", "bottom", "left"], or = Math.min, xa = Math.max, Gs = Math.round, Ms = Math.floor, wa = (n) => ({
  x: n,
  y: n
}), w_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function R0(n, a, l) {
  return xa(n, or(a, l));
}
function Ea(n, a) {
  return typeof n == "function" ? n(a) : n;
}
function lr(n) {
  return n.split("-")[0];
}
function Zo(n) {
  return n.split("-")[1];
}
function tm(n) {
  return n === "x" ? "y" : "x";
}
function nm(n) {
  return n === "y" ? "height" : "width";
}
function Wn(n) {
  const a = n[0];
  return a === "t" || a === "b" ? "y" : "x";
}
function am(n) {
  return tm(Wn(n));
}
function S_(n, a, l) {
  l === void 0 && (l = !1);
  const o = Zo(n), s = am(n), u = nm(s);
  let d = s === "x" ? o === (l ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return a.reference[u] > a.floating[u] && (d = Ws(d)), [d, Ws(d)];
}
function C_(n) {
  const a = Ws(n);
  return [vd(n), a, vd(a)];
}
function vd(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const nv = ["left", "right"], av = ["right", "left"], E_ = ["top", "bottom"], T_ = ["bottom", "top"];
function O_(n, a, l) {
  switch (n) {
    case "top":
    case "bottom":
      return l ? a ? av : nv : a ? nv : av;
    case "left":
    case "right":
      return a ? E_ : T_;
    default:
      return [];
  }
}
function M_(n, a, l, o) {
  const s = Zo(n);
  let u = O_(lr(n), l === "start", o);
  return s && (u = u.map((d) => d + "-" + s), a && (u = u.concat(u.map(vd)))), u;
}
function Ws(n) {
  const a = lr(n);
  return w_[a] + n.slice(a.length);
}
function D_(n) {
  var a, l, o, s;
  return {
    top: (a = n.top) != null ? a : 0,
    right: (l = n.right) != null ? l : 0,
    bottom: (o = n.bottom) != null ? o : 0,
    left: (s = n.left) != null ? s : 0
  };
}
function z0(n) {
  return typeof n != "number" ? D_(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Vs(n) {
  const {
    x: a,
    y: l,
    width: o,
    height: s
  } = n;
  return {
    width: o,
    height: s,
    top: l,
    left: a,
    right: a + o,
    bottom: l + s,
    x: a,
    y: l
  };
}
function rv(n, a, l) {
  let {
    reference: o,
    floating: s
  } = n;
  const u = Wn(a), d = am(a), m = nm(d), h = lr(a), p = u === "y", b = o.x + o.width / 2 - s.width / 2, v = o.y + o.height / 2 - s.height / 2, w = o[m] / 2 - s[m] / 2;
  let T;
  switch (h) {
    case "top":
      T = {
        x: b,
        y: o.y - s.height
      };
      break;
    case "bottom":
      T = {
        x: b,
        y: o.y + o.height
      };
      break;
    case "right":
      T = {
        x: o.x + o.width,
        y: v
      };
      break;
    case "left":
      T = {
        x: o.x - s.width,
        y: v
      };
      break;
    default:
      T = {
        x: o.x,
        y: o.y
      };
  }
  const E = Zo(a);
  return E && (T[d] += w * (E === "end" ? 1 : -1) * (l && p ? -1 : 1)), T;
}
async function __(n, a) {
  var l;
  a === void 0 && (a = {});
  const {
    x: o,
    y: s,
    platform: u,
    rects: d,
    elements: m,
    strategy: h
  } = n, {
    boundary: p = "clippingAncestors",
    rootBoundary: b = "viewport",
    elementContext: v = "floating",
    altBoundary: w = !1,
    padding: T = 0
  } = Ea(a, n), E = z0(T), C = m[w ? v === "floating" ? "reference" : "floating" : v], D = Vs(await u.getClippingRect({
    element: (l = await (u.isElement == null ? void 0 : u.isElement(C))) == null || l ? C : C.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(m.floating)),
    boundary: p,
    rootBoundary: b,
    strategy: h
  })), _ = v === "floating" ? {
    x: o,
    y: s,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, M = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(m.floating)), N = await (u.isElement == null ? void 0 : u.isElement(M)) && await (u.getScale == null ? void 0 : u.getScale(M)) || {
    x: 1,
    y: 1
  }, z = Vs(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: _,
    offsetParent: M,
    strategy: h
  }) : _);
  return {
    top: (D.top - z.top + E.top) / N.y,
    bottom: (z.bottom - D.bottom + E.bottom) / N.y,
    left: (D.left - z.left + E.left) / N.x,
    right: (z.right - D.right + E.right) / N.x
  };
}
const N_ = 50, A_ = async (n, a, l) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: u = [],
    platform: d
  } = l, m = d.detectOverflow ? d : {
    ...d,
    detectOverflow: __
  }, h = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let p = await d.getElementRects({
    reference: n,
    floating: a,
    strategy: s
  }), {
    x: b,
    y: v
  } = rv(p, o, h), w = o, T = 0;
  const E = {};
  for (let O = 0; O < u.length; O++) {
    const C = u[O];
    if (!C)
      continue;
    const {
      name: D,
      fn: _
    } = C, {
      x: M,
      y: N,
      data: z,
      reset: k
    } = await _({
      x: b,
      y: v,
      initialPlacement: o,
      placement: w,
      strategy: s,
      middlewareData: E,
      rects: p,
      platform: m,
      elements: {
        reference: n,
        floating: a
      }
    });
    b = M ?? b, v = N ?? v, E[D] = {
      ...E[D],
      ...z
    }, k && T < N_ && (T++, typeof k == "object" && (k.placement && (w = k.placement), k.rects && (p = k.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: a,
      strategy: s
    }) : k.rects), {
      x: b,
      y: v
    } = rv(p, w, h)), O = -1);
  }
  return {
    x: b,
    y: v,
    placement: w,
    strategy: s,
    middlewareData: E
  };
}, k_ = (n) => ({
  name: "arrow",
  options: n,
  async fn(a) {
    const {
      x: l,
      y: o,
      placement: s,
      rects: u,
      platform: d,
      elements: m,
      middlewareData: h
    } = a, {
      element: p,
      padding: b = 0
    } = Ea(n, a) || {};
    if (p == null)
      return {};
    const v = z0(b), w = {
      x: l,
      y: o
    }, T = am(s), E = nm(T), O = await d.getDimensions(p), C = T === "y", D = C ? "top" : "left", _ = C ? "bottom" : "right", M = C ? "clientHeight" : "clientWidth", N = u.reference[E] + u.reference[T] - w[T] - u.floating[E], z = w[T] - u.reference[T], k = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
    let Y = k ? k[M] : 0;
    (!Y || !await (d.isElement == null ? void 0 : d.isElement(k))) && (Y = m.floating[M] || u.floating[E]);
    const B = N / 2 - z / 2, Z = Y / 2 - O[E] / 2 - 1, te = or(v[D], Z), re = or(v[_], Z), ne = Y - O[E] - re, X = Y / 2 - O[E] / 2 + B, ee = R0(te, X, ne), ie = !h.arrow && Zo(s) != null && X !== ee && u.reference[E] / 2 - (X < te ? te : re) - O[E] / 2 < 0, H = ie ? X < te ? X - te : X - ne : 0;
    return {
      [T]: w[T] + H,
      data: {
        [T]: ee,
        centerOffset: X - ee - H,
        ...ie && {
          alignmentOffset: H
        }
      },
      reset: ie
    };
  }
}), j_ = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(a) {
      var l, o;
      const {
        placement: s,
        middlewareData: u,
        rects: d,
        initialPlacement: m,
        platform: h,
        elements: p
      } = a, {
        mainAxis: b = !0,
        crossAxis: v = !0,
        fallbackPlacements: w,
        fallbackStrategy: T = "bestFit",
        fallbackAxisSideDirection: E = "none",
        flipAlignment: O = !0,
        ...C
      } = Ea(n, a);
      if ((l = u.arrow) != null && l.alignmentOffset)
        return {};
      const D = lr(s), _ = Wn(m), M = lr(m) === m, N = await (h.isRTL == null ? void 0 : h.isRTL(p.floating)), z = w || (M || !O ? [Ws(m)] : C_(m)), k = E !== "none";
      !w && k && z.push(...M_(m, O, E, N));
      const Y = [m, ...z], B = await h.detectOverflow(a, C), Z = [];
      let te = ((o = u.flip) == null ? void 0 : o.overflows) || [];
      if (b && Z.push(B[D]), v) {
        const ee = S_(s, d, N);
        Z.push(B[ee[0]], B[ee[1]]);
      }
      if (te = [...te, {
        placement: s,
        overflows: Z
      }], !Z.every((ee) => ee <= 0)) {
        var re, ne;
        const ee = (((re = u.flip) == null ? void 0 : re.index) || 0) + 1, ie = Y[ee];
        if (ie && (!(v === "alignment" ? _ !== Wn(ie) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        te.every((K) => Wn(K.placement) === _ ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: ee,
              overflows: te
            },
            reset: {
              placement: ie
            }
          };
        let H = (ne = te.filter((F) => F.overflows[0] <= 0).sort((F, K) => F.overflows[1] - K.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!H)
          switch (T) {
            case "bestFit": {
              var X;
              const F = (X = te.filter((K) => {
                if (k) {
                  const oe = Wn(K.placement);
                  return oe === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((oe) => oe > 0).reduce((oe, G) => oe + G, 0)]).sort((K, oe) => K[1] - oe[1])[0]) == null ? void 0 : X[0];
              F && (H = F);
              break;
            }
            case "initialPlacement":
              H = m;
              break;
          }
        if (s !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function ov(n, a) {
  return {
    top: n.top - a.height,
    right: n.right - a.width,
    bottom: n.bottom - a.height,
    left: n.left - a.width
  };
}
function lv(n) {
  return x_.some((a) => n[a] >= 0);
}
const R_ = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(a) {
      const {
        rects: l,
        platform: o
      } = a, {
        strategy: s = "referenceHidden",
        ...u
      } = Ea(n, a);
      switch (s) {
        case "referenceHidden": {
          const d = await o.detectOverflow(a, {
            ...u,
            elementContext: "reference"
          }), m = ov(d, l.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: lv(m)
            }
          };
        }
        case "escaped": {
          const d = await o.detectOverflow(a, {
            ...u,
            altBoundary: !0
          }), m = ov(d, l.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: lv(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, H0 = /* @__PURE__ */ new Set(["left", "top"]);
async function z_(n, a) {
  const {
    placement: l,
    platform: o,
    elements: s
  } = n, u = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), d = lr(l), m = Zo(l), h = Wn(l) === "y", p = H0.has(d) ? -1 : 1, b = u && h ? -1 : 1, v = Ea(a, n);
  let {
    mainAxis: w,
    crossAxis: T,
    alignmentAxis: E
  } = typeof v == "number" ? {
    mainAxis: v,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: v.mainAxis || 0,
    crossAxis: v.crossAxis || 0,
    alignmentAxis: v.alignmentAxis
  };
  return m && typeof E == "number" && (T = m === "end" ? E * -1 : E), h ? {
    x: T * b,
    y: w * p
  } : {
    x: w * p,
    y: T * b
  };
}
const H_ = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(a) {
      var l, o;
      const {
        x: s,
        y: u,
        placement: d,
        middlewareData: m
      } = a, h = await z_(a, n);
      return d === ((l = m.offset) == null ? void 0 : l.placement) && (o = m.arrow) != null && o.alignmentOffset ? {} : {
        x: s + h.x,
        y: u + h.y,
        data: {
          ...h,
          placement: d
        }
      };
    }
  };
}, Y_ = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(a) {
      const {
        x: l,
        y: o,
        placement: s,
        platform: u
      } = a, {
        mainAxis: d = !0,
        crossAxis: m = !1,
        limiter: h = {
          fn: (_) => {
            let {
              x: M,
              y: N
            } = _;
            return {
              x: M,
              y: N
            };
          }
        },
        ...p
      } = Ea(n, a), b = {
        x: l,
        y: o
      }, v = await u.detectOverflow(a, p), w = Wn(s), T = tm(w);
      let E = b[T], O = b[w];
      const C = (_, M) => R0(M + v[_ === "y" ? "top" : "left"], M, M - v[_ === "y" ? "bottom" : "right"]);
      d && (E = C(T, E)), m && (O = C(w, O));
      const D = h.fn({
        ...a,
        [T]: E,
        [w]: O
      });
      return {
        ...D,
        data: {
          x: D.x - l,
          y: D.y - o,
          enabled: {
            [T]: d,
            [w]: m
          }
        }
      };
    }
  };
}, U_ = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(a) {
      var l, o;
      const {
        x: s,
        y: u,
        placement: d,
        rects: m,
        middlewareData: h
      } = a, {
        offset: p = 0,
        mainAxis: b = !0,
        crossAxis: v = !0
      } = Ea(n, a), w = {
        x: s,
        y: u
      }, T = Wn(d), E = tm(T);
      let O = w[E], C = w[T];
      const D = Ea(p, a), _ = typeof D == "number" ? {
        mainAxis: D,
        crossAxis: 0
      } : {
        mainAxis: (l = D.mainAxis) != null ? l : 0,
        crossAxis: (o = D.crossAxis) != null ? o : 0
      };
      if (b) {
        const z = E === "y" ? "height" : "width", k = m.reference[E] - m.floating[z] + _.mainAxis, Y = m.reference[E] + m.reference[z] - _.mainAxis;
        O < k ? O = k : O > Y && (O = Y);
      }
      if (v) {
        var M, N;
        const z = E === "y" ? "width" : "height", k = H0.has(lr(d)), Y = m.reference[T] - m.floating[z] + (k && ((M = h.offset) == null ? void 0 : M[T]) || 0) + (k ? 0 : _.crossAxis), B = m.reference[T] + m.reference[z] + (k ? 0 : ((N = h.offset) == null ? void 0 : N[T]) || 0) - (k ? _.crossAxis : 0);
        C < Y ? C = Y : C > B && (C = B);
      }
      return {
        [E]: O,
        [T]: C
      };
    }
  };
}, B_ = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(a) {
      const {
        placement: l,
        rects: o,
        platform: s,
        elements: u
      } = a, {
        apply: d = () => {
        },
        ...m
      } = Ea(n, a), h = await s.detectOverflow(a, m), p = lr(l), b = Zo(l), v = Wn(l) === "y", {
        width: w,
        height: T
      } = o.floating;
      let E, O;
      p === "top" || p === "bottom" ? (E = p, O = b === (await (s.isRTL == null ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (O = p, E = b === "end" ? "top" : "bottom");
      const C = T - h.top - h.bottom, D = w - h.left - h.right, _ = or(T - h[E], C), M = or(w - h[O], D), N = a.middlewareData.shift, z = !N;
      let k = _, Y = M;
      N != null && N.enabled.x && (Y = D), N != null && N.enabled.y && (k = C), z && !b && (v ? Y = w - 2 * xa(h.left, h.right) : k = T - 2 * xa(h.top, h.bottom)), await d({
        ...a,
        availableWidth: Y,
        availableHeight: k
      });
      const B = await s.getDimensions(u.floating);
      return w !== B.width || T !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function rc() {
  return typeof window < "u";
}
function Io(n) {
  return Y0(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Kt(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function Oa(n) {
  var a;
  return (a = (Y0(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : a.documentElement;
}
function Y0(n) {
  return rc() ? n instanceof Node || n instanceof Kt(n).Node : !1;
}
function Fn(n) {
  return rc() ? n instanceof Element || n instanceof Kt(n).Element : !1;
}
function sr(n) {
  return rc() ? n instanceof HTMLElement || n instanceof Kt(n).HTMLElement : !1;
}
function iv(n) {
  return !rc() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Kt(n).ShadowRoot;
}
function oc(n) {
  const {
    overflow: a,
    overflowX: l,
    overflowY: o,
    display: s
  } = Xn(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + o + l) && s !== "inline" && s !== "contents";
}
function L_(n) {
  return /^(table|td|th)$/.test(Io(n));
}
function lc(n) {
  try {
    if (n.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return n.matches(":modal");
  } catch {
    return !1;
  }
}
const q_ = /transform|translate|scale|rotate|perspective|filter/, P_ = /paint|layout|strict|content/, kr = (n) => !!n && n !== "none";
let If;
function rm(n) {
  const a = Fn(n) ? Xn(n) : n;
  return kr(a.transform) || kr(a.translate) || kr(a.scale) || kr(a.rotate) || kr(a.perspective) || !om() && (kr(a.backdropFilter) || kr(a.filter)) || q_.test(a.willChange || "") || P_.test(a.contain || "");
}
function G_(n) {
  let a = Ur(n);
  for (; sr(a) && !Il(a); ) {
    if (rm(a))
      return a;
    if (lc(a))
      return null;
    a = Ur(a);
  }
  return null;
}
function om() {
  return If == null && (If = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), If;
}
function Il(n) {
  return /^(html|body|#document)$/.test(Io(n));
}
function Xn(n) {
  return Kt(n).getComputedStyle(n);
}
function ic(n) {
  return Fn(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Ur(n) {
  if (Io(n) === "html")
    return n;
  const a = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    iv(n) && n.host || // Fallback.
    Oa(n)
  );
  return iv(a) ? a.host : a;
}
function U0(n) {
  const a = Ur(n);
  return Il(a) ? (n.ownerDocument || n).body : sr(a) && oc(a) ? a : U0(a);
}
function $l(n, a, l) {
  var o;
  a === void 0 && (a = []), l === void 0 && (l = !0);
  const s = U0(n), u = s === ((o = n.ownerDocument) == null ? void 0 : o.body), d = Kt(s);
  if (u) {
    const m = bd(d);
    return a.concat(d, d.visualViewport || [], oc(s) ? s : [], m && l ? $l(m) : []);
  } else
    return a.concat(s, $l(s, [], l));
}
function bd(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function B0(n) {
  const a = Xn(n);
  let l = parseFloat(a.width) || 0, o = parseFloat(a.height) || 0;
  const s = sr(n), u = s ? n.offsetWidth : l, d = s ? n.offsetHeight : o, m = Gs(l) !== u || Gs(o) !== d;
  return m && (l = u, o = d), {
    width: l,
    height: o,
    $: m
  };
}
function lm(n) {
  return Fn(n) ? n : n.contextElement;
}
function Wo(n) {
  const a = lm(n);
  if (!sr(a))
    return wa(1);
  const l = a.getBoundingClientRect(), {
    width: o,
    height: s,
    $: u
  } = B0(a);
  let d = (u ? Gs(l.width) : l.width) / o, m = (u ? Gs(l.height) : l.height) / s;
  return (!d || !Number.isFinite(d)) && (d = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: d,
    y: m
  };
}
const W_ = /* @__PURE__ */ wa(0);
function L0(n) {
  const a = Kt(n);
  return !om() || !a.visualViewport ? W_ : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function V_(n, a, l) {
  return a === void 0 && (a = !1), !!l && a && l === Kt(n);
}
function Br(n, a, l, o) {
  a === void 0 && (a = !1), l === void 0 && (l = !1);
  const s = n.getBoundingClientRect(), u = lm(n);
  let d = wa(1);
  a && (o ? Fn(o) && (d = Wo(o)) : d = Wo(n));
  const m = V_(u, l, o) ? L0(u) : wa(0);
  let h = (s.left + m.x) / d.x, p = (s.top + m.y) / d.y, b = s.width / d.x, v = s.height / d.y;
  if (u && o) {
    const w = Kt(u), T = Fn(o) ? Kt(o) : o;
    let E = w, O = bd(E);
    for (; O && T !== E; ) {
      const C = Wo(O), D = O.getBoundingClientRect(), _ = Xn(O), M = D.left + (O.clientLeft + parseFloat(_.paddingLeft)) * C.x, N = D.top + (O.clientTop + parseFloat(_.paddingTop)) * C.y;
      h *= C.x, p *= C.y, b *= C.x, v *= C.y, h += M, p += N, E = Kt(O), O = bd(E);
    }
  }
  return Vs({
    width: b,
    height: v,
    x: h,
    y: p
  });
}
function sc(n, a) {
  const l = ic(n).scrollLeft;
  return a ? a.left + l : Br(Oa(n)).left + l;
}
function q0(n, a) {
  const l = n.getBoundingClientRect(), o = l.left + a.scrollLeft - sc(n, l), s = l.top + a.scrollTop;
  return {
    x: o,
    y: s
  };
}
function F_(n) {
  let {
    elements: a,
    rect: l,
    offsetParent: o,
    strategy: s
  } = n;
  const u = s === "fixed", d = Oa(o), m = a ? lc(a.floating) : !1;
  if (o === d || m && u)
    return l;
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = wa(1);
  const b = wa(0), v = sr(o);
  if ((v || !u) && ((Io(o) !== "body" || oc(d)) && (h = ic(o)), v)) {
    const T = Br(o);
    p = Wo(o), b.x = T.x + o.clientLeft, b.y = T.y + o.clientTop;
  }
  const w = d && !v && !u ? q0(d, h) : wa(0);
  return {
    width: l.width * p.x,
    height: l.height * p.y,
    x: l.x * p.x - h.scrollLeft * p.x + b.x + w.x,
    y: l.y * p.y - h.scrollTop * p.y + b.y + w.y
  };
}
function X_(n) {
  return n.getClientRects ? Array.from(n.getClientRects()) : [];
}
function Q_(n) {
  const a = ic(n), l = n.ownerDocument.body, o = xa(n.scrollWidth, n.clientWidth, l.scrollWidth, l.clientWidth), s = xa(n.scrollHeight, n.clientHeight, l.scrollHeight, l.clientHeight);
  let u = -a.scrollLeft + sc(n);
  const d = -a.scrollTop;
  return Xn(l).direction === "rtl" && (u += xa(n.clientWidth, l.clientWidth) - o), {
    width: o,
    height: s,
    x: u,
    y: d
  };
}
const Z_ = 25;
function I_(n, a, l) {
  l === void 0 && (l = "viewport");
  const o = l === "layoutViewport", s = Kt(n), u = Oa(n), d = s.visualViewport;
  let m = u.clientWidth, h = u.clientHeight, p = 0, b = 0;
  if (d) {
    const w = !om() || a === "fixed";
    o ? w || (p = -d.offsetLeft, b = -d.offsetTop) : (m = d.width, h = d.height, w && (p = d.offsetLeft, b = d.offsetTop));
  }
  if (sc(u) <= 0) {
    const w = u.ownerDocument, T = w.body, E = getComputedStyle(T), O = w.compatMode === "CSS1Compat" && parseFloat(E.marginLeft) + parseFloat(E.marginRight) || 0, C = Math.abs(u.clientWidth - T.clientWidth - O), D = getComputedStyle(u).scrollbarGutter === "stable both-edges" ? C / 2 : C;
    D <= Z_ && (m -= D);
  }
  return {
    width: m,
    height: h,
    x: p,
    y: b
  };
}
function $_(n, a) {
  const l = Br(n, !0, a === "fixed"), o = l.top + n.clientTop, s = l.left + n.clientLeft, u = Wo(n), d = n.clientWidth * u.x, m = n.clientHeight * u.y, h = s * u.x, p = o * u.y;
  return {
    width: d,
    height: m,
    x: h,
    y: p
  };
}
function sv(n, a, l) {
  let o;
  if (a === "viewport" || a === "layoutViewport")
    o = I_(n, l, a);
  else if (a === "document")
    o = Q_(Oa(n));
  else if (Fn(a))
    o = $_(a, l);
  else {
    const s = L0(n);
    o = {
      x: a.x - s.x,
      y: a.y - s.y,
      width: a.width,
      height: a.height
    };
  }
  return Vs(o);
}
function K_(n, a) {
  const l = a.get(n);
  if (l)
    return l;
  let o = $l(n, [], !1).filter((m) => Fn(m) && Io(m) !== "body"), s = null;
  const u = Xn(n).position === "fixed";
  let d = u ? Ur(n) : n;
  for (; Fn(d) && !Il(d); ) {
    const m = Xn(d), h = rm(d), p = s ? s.position : u ? "fixed" : "";
    !h && (p === "fixed" || p === "absolute" && m.position === "static") ? o = o.filter((v) => v !== d) : s = m, d = Ur(d);
  }
  return a.set(n, o), o;
}
function J_(n) {
  let {
    element: a,
    boundary: l,
    rootBoundary: o,
    strategy: s
  } = n;
  const d = [...l === "clippingAncestors" ? lc(a) ? [] : K_(a, this._c) : [].concat(l), o], m = sv(a, d[0], s);
  let h = m.top, p = m.right, b = m.bottom, v = m.left;
  for (let w = 1; w < d.length; w++) {
    const T = sv(a, d[w], s);
    h = xa(T.top, h), p = or(T.right, p), b = or(T.bottom, b), v = xa(T.left, v);
  }
  return {
    width: p - v,
    height: b - h,
    x: v,
    y: h
  };
}
function eN(n) {
  const {
    width: a,
    height: l
  } = B0(n);
  return {
    width: a,
    height: l
  };
}
function tN(n, a, l) {
  const o = sr(a), s = Oa(a), u = l === "fixed", d = Br(n, !0, u, a);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const h = wa(0);
  if ((o || !u) && ((Io(a) !== "body" || oc(s)) && (m = ic(a)), o)) {
    const w = Br(a, !0, u, a);
    h.x = w.x + a.clientLeft, h.y = w.y + a.clientTop;
  }
  !o && s && (h.x = sc(s));
  const p = s && !o && !u ? q0(s, m) : wa(0), b = d.left + m.scrollLeft - h.x - p.x, v = d.top + m.scrollTop - h.y - p.y;
  return {
    x: b,
    y: v,
    width: d.width,
    height: d.height
  };
}
function $f(n) {
  return Xn(n).position === "static";
}
function cv(n, a) {
  if (!sr(n) || Xn(n).position === "fixed")
    return null;
  if (a)
    return a(n);
  let l = n.offsetParent;
  return Oa(n) === l && (l = l.ownerDocument.body), l;
}
function P0(n, a) {
  const l = Kt(n);
  if (lc(n))
    return l;
  if (!sr(n)) {
    let s = Ur(n);
    for (; s && !Il(s); ) {
      if (Fn(s) && !$f(s))
        return s;
      s = Ur(s);
    }
    return l;
  }
  let o = cv(n, a);
  for (; o && L_(o) && $f(o); )
    o = cv(o, a);
  return o && Il(o) && $f(o) && !rm(o) ? l : o || G_(n) || l;
}
const nN = async function(n) {
  const a = this.getOffsetParent || P0, l = this.getDimensions, o = await l(n.floating);
  return {
    reference: tN(n.reference, await a(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function aN(n) {
  return Xn(n).direction === "rtl";
}
const rN = {
  convertOffsetParentRelativeRectToViewportRelativeRect: F_,
  getDocumentElement: Oa,
  getClippingRect: J_,
  getOffsetParent: P0,
  getElementRects: nN,
  getClientRects: X_,
  getDimensions: eN,
  getScale: Wo,
  isElement: Fn,
  isRTL: aN
};
function G0(n, a) {
  return n.x === a.x && n.y === a.y && n.width === a.width && n.height === a.height;
}
function oN(n, a, l) {
  let o = null, s;
  const u = Oa(n);
  function d() {
    var b;
    clearTimeout(s), (b = o) == null || b.disconnect(), o = null;
  }
  function m(b, v) {
    b === void 0 && (b = !1), v === void 0 && (v = 1), d();
    const w = n.getBoundingClientRect(), {
      left: T,
      top: E,
      width: O,
      height: C
    } = w;
    if (b || a(), !O || !C)
      return;
    const D = Ms(E), _ = Ms(u.clientWidth - (T + O)), M = Ms(u.clientHeight - (E + C)), N = Ms(T), k = {
      rootMargin: -D + "px " + -_ + "px " + -M + "px " + -N + "px",
      threshold: xa(0, or(1, v)) || 1
    };
    let Y = !0;
    function B(Z) {
      const te = Z[0].intersectionRatio;
      if (!G0(w, n.getBoundingClientRect()))
        return m();
      if (te !== v) {
        if (!Y)
          return m();
        te ? m(!1, te) : s = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      Y = !1;
    }
    try {
      o = new IntersectionObserver(B, {
        ...k,
        // Handle <iframe>s
        root: u.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(B, k);
    }
    o.observe(n);
  }
  const h = Kt(n), p = () => m(l);
  return h.addEventListener("resize", p), m(!0), () => {
    h.removeEventListener("resize", p), d();
  };
}
function lN(n, a, l, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: u = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: h = !1
  } = o, p = lm(n), b = s || u ? [...p ? $l(p) : [], ...a ? $l(a) : []] : [];
  b.forEach((D) => {
    s && D.addEventListener("scroll", l), u && D.addEventListener("resize", l);
  });
  const v = p && m ? oN(p, l, u) : null;
  let w = -1, T = null;
  d && (T = new ResizeObserver((D) => {
    let [_] = D;
    _ && _.target === p && T && a && (T.unobserve(a), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
      var M;
      (M = T) == null || M.observe(a);
    })), l();
  }), p && !h && T.observe(p), a && T.observe(a));
  let E, O = h ? Br(n) : null;
  h && C();
  function C() {
    const D = Br(n);
    O && !G0(O, D) && l(), O = D, E = requestAnimationFrame(C);
  }
  return l(), () => {
    var D;
    b.forEach((_) => {
      s && _.removeEventListener("scroll", l), u && _.removeEventListener("resize", l);
    }), v?.(), (D = T) == null || D.disconnect(), T = null, h && cancelAnimationFrame(E);
  };
}
const iN = H_, sN = Y_, cN = j_, uN = B_, fN = R_, uv = k_, dN = U_, mN = (n, a, l) => {
  const o = /* @__PURE__ */ new Map(), s = l ?? {}, u = {
    ...rN,
    ...s.platform,
    _c: o
  };
  return A_(n, a, {
    ...s,
    platform: u
  });
};
var hN = typeof document < "u", pN = function() {
}, zs = hN ? x.useLayoutEffect : pN;
function Fs(n, a) {
  if (n === a)
    return !0;
  if (typeof n != typeof a)
    return !1;
  if (typeof n == "function" && n.toString() === a.toString())
    return !0;
  let l, o, s;
  if (n && a && typeof n == "object") {
    if (Array.isArray(n)) {
      if (l = n.length, l !== a.length) return !1;
      for (o = l; o-- !== 0; )
        if (!Fs(n[o], a[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(n), l = s.length, l !== Object.keys(a).length)
      return !1;
    for (o = l; o-- !== 0; )
      if (!{}.hasOwnProperty.call(a, s[o]))
        return !1;
    for (o = l; o-- !== 0; ) {
      const u = s[o];
      if (!(u === "_owner" && n.$$typeof) && !Fs(n[u], a[u]))
        return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function W0(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fv(n, a) {
  const l = W0(n);
  return Math.round(a * l) / l;
}
function Kf(n) {
  const a = x.useRef(n);
  return zs(() => {
    a.current = n;
  }), a;
}
function gN(n) {
  n === void 0 && (n = {});
  const {
    placement: a = "bottom",
    strategy: l = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: u,
      floating: d
    } = {},
    transform: m = !0,
    whileElementsMounted: h,
    open: p
  } = n, [b, v] = x.useState({
    x: 0,
    y: 0,
    strategy: l,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [w, T] = x.useState(o);
  Fs(w, o) || T(o);
  const [E, O] = x.useState(null), [C, D] = x.useState(null), _ = x.useCallback((K) => {
    K !== k.current && (k.current = K, O(K));
  }, []), M = x.useCallback((K) => {
    K !== Y.current && (Y.current = K, D(K));
  }, []), N = u || E, z = d || C, k = x.useRef(null), Y = x.useRef(null), B = x.useRef(b), Z = h != null, te = Kf(h), re = Kf(s), ne = Kf(p), X = x.useCallback(() => {
    if (!k.current || !Y.current)
      return;
    const K = {
      placement: a,
      strategy: l,
      middleware: w
    };
    re.current && (K.platform = re.current), mN(k.current, Y.current, K).then((oe) => {
      const G = {
        ...oe,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ne.current !== !1
      };
      ee.current && !Fs(B.current, G) && (B.current = G, ei.flushSync(() => {
        v(G);
      }));
    });
  }, [w, a, l, re, ne]);
  zs(() => {
    p === !1 && B.current.isPositioned && (B.current.isPositioned = !1, v((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [p]);
  const ee = x.useRef(!1);
  zs(() => (ee.current = !0, () => {
    ee.current = !1;
  }), []), zs(() => {
    if (N && (k.current = N), z && (Y.current = z), N && z) {
      if (te.current)
        return te.current(N, z, X);
      X();
    }
  }, [N, z, X, te, Z]);
  const ie = x.useMemo(() => ({
    reference: k,
    floating: Y,
    setReference: _,
    setFloating: M
  }), [_, M]), H = x.useMemo(() => ({
    reference: N,
    floating: z
  }), [N, z]), F = x.useMemo(() => {
    const K = {
      position: l,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return K;
    const oe = fv(H.floating, b.x), G = fv(H.floating, b.y);
    return m ? {
      ...K,
      transform: "translate(" + oe + "px, " + G + "px)",
      ...W0(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: l,
      left: oe,
      top: G
    };
  }, [l, m, H.floating, b.x, b.y]);
  return x.useMemo(() => ({
    ...b,
    update: X,
    refs: ie,
    elements: H,
    floatingStyles: F
  }), [b, X, ie, H, F]);
}
const yN = (n) => {
  function a(l) {
    return {}.hasOwnProperty.call(l, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(l) {
      const {
        element: o,
        padding: s
      } = typeof n == "function" ? n(l) : n;
      return o && a(o) ? o.current != null ? uv({
        element: o.current,
        padding: s
      }).fn(l) : {} : o ? uv({
        element: o,
        padding: s
      }).fn(l) : {};
    }
  };
}, vN = (n, a) => {
  const l = iN(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, bN = (n, a) => {
  const l = sN(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, xN = (n, a) => ({
  fn: dN(n).fn,
  options: [n, a]
}), wN = (n, a) => {
  const l = cN(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, SN = (n, a) => {
  const l = uN(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, CN = (n, a) => {
  const l = fN(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, EN = (n, a) => {
  const l = yN(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
};
var TN = Object.defineProperty, ar = (n, a) => TN(n, "name", { value: a, configurable: !0 }), dv = {
  Partial: "partial"
}, mv = {
  Optimized: "optimized",
  Always: "always"
}, V0 = "Popper", [F0, cc] = /* @__PURE__ */ Ta(V0), [ON, X0] = F0(V0), Q0 = /* @__PURE__ */ ar((n) => {
  const { __scopePopper: a, children: l } = n, [o, s] = x.useState(null), [u, d] = x.useState(void 0);
  return /* @__PURE__ */ g.jsx(
    ON,
    {
      scope: a,
      anchor: o,
      onAnchorChange: s,
      placementState: u,
      setPlacementState: d,
      children: l
    }
  );
}, "Popper"), MN = "PopperAnchor", Z0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ ar(function(a, l) {
    const { __scopePopper: o, virtualRef: s, ...u } = a, d = X0(MN, o), m = x.useRef(null), h = d.onAnchorChange, p = x.useCallback(
      (O) => {
        m.current = O, O && h(O);
      },
      [h]
    ), b = at(l, p), v = x.useRef(null);
    x.useEffect(() => {
      if (!s)
        return;
      const O = v.current;
      v.current = s.current, O !== v.current && h(v.current);
    });
    const w = d.placementState && uc(d.placementState), T = w?.[0], E = w?.[1];
    return s ? null : /* @__PURE__ */ g.jsx(
      rt.div,
      {
        "data-radix-popper-side": T,
        "data-radix-popper-align": E,
        ...u,
        ref: b
      }
    );
  }, "PopperAnchor")
), I0 = "PopperContent", [DN, ek] = F0(I0), $0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ ar(function(a, l) {
    const {
      __scopePopper: o,
      side: s = "bottom",
      sideOffset: u = 0,
      align: d = "center",
      alignOffset: m = 0,
      arrowPadding: h = 0,
      avoidCollisions: p = !0,
      collisionBoundary: b = [],
      collisionPadding: v = 0,
      sticky: w = dv.Partial,
      hideWhenDetached: T = !1,
      updatePositionStrategy: E = mv.Optimized,
      onPlaced: O,
      ...C
    } = a, D = X0(I0, o), [_, M] = x.useState(null), N = at(l, M), [z, k] = x.useState(null), Y = _d(z), B = Y?.width ?? 0, Z = Y?.height ?? 0, te = s + (d !== "center" ? "-" + d : ""), re = typeof v == "number" ? v : { top: 0, right: 0, bottom: 0, left: 0, ...v }, ne = Array.isArray(b) ? b : [b], X = ne.length > 0, ee = {
      padding: re,
      boundary: ne.filter(K0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: X
    }, { refs: ie, floatingStyles: H, placement: F, isPositioned: K, middlewareData: oe } = gN({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: te,
      whileElementsMounted: /* @__PURE__ */ ar((...he) => lN(...he, {
        animationFrame: E === mv.Always
      }), "whileElementsMounted"),
      elements: {
        reference: D.anchor
      },
      middleware: [
        vN({ mainAxis: u + Z, alignmentAxis: m }),
        p && bN({
          mainAxis: !0,
          crossAxis: !1,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...w === dv.Partial ? { limiter: xN() } : {},
          ...ee
        }),
        p && wN({ ...ee }),
        SN({
          ...ee,
          apply: /* @__PURE__ */ ar(({ elements: he, rects: ge, availableWidth: Qe, availableHeight: Pe }) => {
            const { width: Ee, height: Me } = ge.reference, Ve = he.floating.style;
            Ve.setProperty("--radix-popper-available-width", `${Qe}px`), Ve.setProperty("--radix-popper-available-height", `${Pe}px`), Ve.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ve.setProperty("--radix-popper-anchor-height", `${Me}px`);
          }, "apply")
        }),
        z && EN({ element: z, padding: h }),
        _N({ arrowWidth: B, arrowHeight: Z }),
        T && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        CN(
          X ? { strategy: "referenceHidden", ...ee } : {
            strategy: "referenceHidden",
            padding: ee.padding,
            altBoundary: ee.altBoundary
          }
        )
      ]
    }), G = D.setPlacementState;
    bt(() => (G(F), () => {
      G(void 0);
    }), [F, G]);
    const [A, W] = uc(F), ae = _n(O);
    bt(() => {
      K && ae?.();
    }, [K, ae]);
    const se = oe.arrow?.x, ce = oe.arrow?.y, I = oe.arrow?.centerOffset !== 0, [le, Se] = x.useState();
    return bt(() => {
      _ && Se(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: ie.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: K ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            oe.transformOrigin?.x,
            oe.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...oe.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: a.dir,
        children: /* @__PURE__ */ g.jsx(
          DN,
          {
            scope: o,
            placedSide: A,
            placedAlign: W,
            onArrowChange: k,
            arrowX: se,
            arrowY: ce,
            shouldHideArrow: I,
            children: /* @__PURE__ */ g.jsx(
              rt.div,
              {
                "data-side": A,
                "data-align": W,
                ...C,
                ref: N,
                style: {
                  ...C.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: K ? C.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function K0(n) {
  return n !== null;
}
ar(K0, "isNotNull");
var _N = /* @__PURE__ */ ar((n) => ({
  name: "transformOrigin",
  options: n,
  fn(a) {
    const { placement: l, rects: o, middlewareData: s } = a, d = s.arrow?.centerOffset !== 0, m = d ? 0 : n.arrowWidth, h = d ? 0 : n.arrowHeight, [p, b] = uc(l), v = { start: "0%", center: "50%", end: "100%" }[b], w = (s.arrow?.x ?? 0) + m / 2, T = (s.arrow?.y ?? 0) + h / 2;
    let E = "", O = "";
    return p === "bottom" ? (E = d ? v : `${w}px`, O = `${-h}px`) : p === "top" ? (E = d ? v : `${w}px`, O = `${o.floating.height + h}px`) : p === "right" ? (E = `${-h}px`, O = d ? v : `${T}px`) : p === "left" && (E = `${o.floating.width + h}px`, O = d ? v : `${T}px`), { data: { x: E, y: O } };
  }
}), "transformOrigin");
function uc(n) {
  const [a, l = "center"] = n.split("-");
  return [a, l];
}
ar(uc, "getSideAndAlignFromPlacement");
var NN = Object.defineProperty, AN = (n, a) => NN(n, "name", { value: a, configurable: !0 }), J0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ AN(function(a, l) {
    const { container: o, ...s } = a, [u, d] = x.useState(!1);
    bt(() => d(!0), []);
    const m = o || u && globalThis?.document?.body;
    return m ? ei.createPortal(/* @__PURE__ */ g.jsx(rt.div, { ...s, ref: l }), m) : null;
  }, "Portal")
), kN = function(n) {
  if (typeof document > "u")
    return null;
  var a = Array.isArray(n) ? n[0] : n;
  return a.ownerDocument.body;
}, Yo = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), _s = {}, Jf = 0, ex = function(n) {
  return n && (n.host || ex(n.parentNode));
}, jN = function(n, a) {
  return a.map(function(l) {
    if (n.contains(l))
      return l;
    var o = ex(l);
    return o && n.contains(o) ? o : (console.error("aria-hidden", l, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(l) {
    return !!l;
  });
}, RN = function(n, a, l, o) {
  var s = jN(a, Array.isArray(n) ? n : [n]);
  _s[l] || (_s[l] = /* @__PURE__ */ new WeakMap());
  var u = _s[l], d = [], m = /* @__PURE__ */ new Set(), h = new Set(s), p = function(v) {
    !v || m.has(v) || (m.add(v), p(v.parentNode));
  };
  s.forEach(p);
  var b = function(v) {
    !v || h.has(v) || Array.prototype.forEach.call(v.children, function(w) {
      if (m.has(w))
        b(w);
      else
        try {
          var T = w.getAttribute(o), E = T !== null && T !== "false", O = (Yo.get(w) || 0) + 1, C = (u.get(w) || 0) + 1;
          Yo.set(w, O), u.set(w, C), d.push(w), O === 1 && E && Ds.set(w, !0), C === 1 && w.setAttribute(l, "true"), E || w.setAttribute(o, "true");
        } catch (D) {
          console.error("aria-hidden: cannot operate on ", w, D);
        }
    });
  };
  return b(a), m.clear(), Jf++, function() {
    d.forEach(function(v) {
      var w = Yo.get(v) - 1, T = u.get(v) - 1;
      Yo.set(v, w), u.set(v, T), w || (Ds.has(v) || v.removeAttribute(o), Ds.delete(v)), T || v.removeAttribute(l);
    }), Jf--, Jf || (Yo = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), _s = {});
  };
}, tx = function(n, a, l) {
  l === void 0 && (l = "data-aria-hidden");
  var o = Array.from(Array.isArray(n) ? n : [n]), s = kN(n);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), RN(o, s, l, "aria-hidden")) : function() {
    return null;
  };
}, Pn = function() {
  return Pn = Object.assign || function(a) {
    for (var l, o = 1, s = arguments.length; o < s; o++) {
      l = arguments[o];
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (a[u] = l[u]);
    }
    return a;
  }, Pn.apply(this, arguments);
};
function nx(n, a) {
  var l = {};
  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && a.indexOf(o) < 0 && (l[o] = n[o]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(n); s < o.length; s++)
      a.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[s]) && (l[o[s]] = n[o[s]]);
  return l;
}
function zN(n, a, l) {
  if (l || arguments.length === 2) for (var o = 0, s = a.length, u; o < s; o++)
    (u || !(o in a)) && (u || (u = Array.prototype.slice.call(a, 0, o)), u[o] = a[o]);
  return n.concat(u || Array.prototype.slice.call(a));
}
var Hs = "right-scroll-bar-position", Ys = "width-before-scroll-bar", HN = "with-scroll-bars-hidden", YN = "--removed-body-scroll-bar-size";
function ed(n, a) {
  return typeof n == "function" ? n(a) : n && (n.current = a), n;
}
function UN(n, a) {
  var l = x.useState(function() {
    return {
      // value
      value: n,
      // last callback
      callback: a,
      // "memoized" public interface
      facade: {
        get current() {
          return l.value;
        },
        set current(o) {
          var s = l.value;
          s !== o && (l.value = o, l.callback(o, s));
        }
      }
    };
  })[0];
  return l.callback = a, l.facade;
}
var BN = typeof window < "u" ? x.useLayoutEffect : x.useEffect, hv = /* @__PURE__ */ new WeakMap();
function LN(n, a) {
  var l = UN(null, function(o) {
    return n.forEach(function(s) {
      return ed(s, o);
    });
  });
  return BN(function() {
    var o = hv.get(l);
    if (o) {
      var s = new Set(o), u = new Set(n), d = l.current;
      s.forEach(function(m) {
        u.has(m) || ed(m, null);
      }), u.forEach(function(m) {
        s.has(m) || ed(m, d);
      });
    }
    hv.set(l, n);
  }, [n]), l;
}
function qN(n) {
  return n;
}
function PN(n, a) {
  a === void 0 && (a = qN);
  var l = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return l.length ? l[l.length - 1] : n;
    },
    useMedium: function(u) {
      var d = a(u, o);
      return l.push(d), function() {
        l = l.filter(function(m) {
          return m !== d;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (o = !0; l.length; ) {
        var d = l;
        l = [], d.forEach(u);
      }
      l = {
        push: function(m) {
          return u(m);
        },
        filter: function() {
          return l;
        }
      };
    },
    assignMedium: function(u) {
      o = !0;
      var d = [];
      if (l.length) {
        var m = l;
        l = [], m.forEach(u), d = l;
      }
      var h = function() {
        var b = d;
        d = [], b.forEach(u);
      }, p = function() {
        return Promise.resolve().then(h);
      };
      p(), l = {
        push: function(b) {
          d.push(b), p();
        },
        filter: function(b) {
          return d = d.filter(b), l;
        }
      };
    }
  };
  return s;
}
function GN(n) {
  n === void 0 && (n = {});
  var a = PN(null);
  return a.options = Pn({ async: !0, ssr: !1 }, n), a;
}
var ax = function(n) {
  var a = n.sideCar, l = nx(n, ["sideCar"]);
  if (!a)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = a.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return x.createElement(o, Pn({}, l));
};
ax.isSideCarExport = !0;
function WN(n, a) {
  return n.useMedium(a), ax;
}
var rx = GN(), td = function() {
}, fc = x.forwardRef(function(n, a) {
  var l = x.useRef(null), o = x.useState({
    onScrollCapture: td,
    onWheelCapture: td,
    onTouchMoveCapture: td
  }), s = o[0], u = o[1], d = n.forwardProps, m = n.children, h = n.className, p = n.removeScrollBar, b = n.enabled, v = n.shards, w = n.sideCar, T = n.noRelative, E = n.noIsolation, O = n.inert, C = n.allowPinchZoom, D = n.as, _ = D === void 0 ? "div" : D, M = n.gapMode, N = nx(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), z = w, k = LN([l, a]), Y = Pn(Pn({}, N), s);
  return x.createElement(
    x.Fragment,
    null,
    b && x.createElement(z, { sideCar: rx, removeScrollBar: p, shards: v, noRelative: T, noIsolation: E, inert: O, setCallbacks: u, allowPinchZoom: !!C, lockRef: l, gapMode: M }),
    d ? x.cloneElement(x.Children.only(m), Pn(Pn({}, Y), { ref: k })) : x.createElement(_, Pn({}, Y, { className: h, ref: k }), m)
  );
});
fc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
fc.classNames = {
  fullWidth: Ys,
  zeroRight: Hs
};
var VN = function() {
  if (typeof globalThis.__weiboStyleNonce < "u")
    return globalThis.__weiboStyleNonce;
};
function FN() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var a = VN();
  return a && n.setAttribute("nonce", a), n;
}
function XN(n, a) {
  n.styleSheet ? n.styleSheet.cssText = a : n.appendChild(document.createTextNode(a));
}
function QN(n) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(n);
}
var ZN = function() {
  var n = 0, a = null;
  return {
    add: function(l) {
      n == 0 && (a = FN()) && (XN(a, l), QN(a)), n++;
    },
    remove: function() {
      n--, !n && a && (a.parentNode && a.parentNode.removeChild(a), a = null);
    }
  };
}, IN = function() {
  var n = ZN();
  return function(a, l) {
    x.useEffect(function() {
      return n.add(a), function() {
        n.remove();
      };
    }, [a && l]);
  };
}, ox = function() {
  var n = IN(), a = function(l) {
    var o = l.styles, s = l.dynamic;
    return n(o, s), null;
  };
  return a;
}, $N = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, nd = function(n) {
  return parseInt(n || "", 10) || 0;
}, KN = function(n) {
  var a = window.getComputedStyle(document.body), l = a[n === "padding" ? "paddingLeft" : "marginLeft"], o = a[n === "padding" ? "paddingTop" : "marginTop"], s = a[n === "padding" ? "paddingRight" : "marginRight"];
  return [nd(l), nd(o), nd(s)];
}, JN = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return $N;
  var a = KN(n), l = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: a[0],
    top: a[1],
    right: a[2],
    gap: Math.max(0, o - l + a[2] - a[0])
  };
}, e2 = ox(), Vo = "data-scroll-locked", t2 = function(n, a, l, o) {
  var s = n.left, u = n.top, d = n.right, m = n.gap;
  return l === void 0 && (l = "margin"), `
  .`.concat(HN, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(m, "px ").concat(o, `;
  }
  body[`).concat(Vo, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    a && "position: relative ".concat(o, ";"),
    l === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(o, `;
    `),
    l === "padding" && "padding-right: ".concat(m, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Hs, ` {
    right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(Ys, ` {
    margin-right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(Hs, " .").concat(Hs, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ys, " .").concat(Ys, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Vo, `] {
    `).concat(YN, ": ").concat(m, `px;
  }
`);
}, pv = function() {
  var n = parseInt(document.body.getAttribute(Vo) || "0", 10);
  return isFinite(n) ? n : 0;
}, n2 = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Vo, (pv() + 1).toString()), function() {
      var n = pv() - 1;
      n <= 0 ? document.body.removeAttribute(Vo) : document.body.setAttribute(Vo, n.toString());
    };
  }, []);
}, a2 = function(n) {
  var a = n.noRelative, l = n.noImportant, o = n.gapMode, s = o === void 0 ? "margin" : o;
  n2();
  var u = x.useMemo(function() {
    return JN(s);
  }, [s]);
  return x.createElement(e2, { styles: t2(u, !a, s, l ? "" : "!important") });
}, xd = !1;
if (typeof window < "u")
  try {
    var Ns = Object.defineProperty({}, "passive", {
      get: function() {
        return xd = !0, !0;
      }
    });
    window.addEventListener("test", Ns, Ns), window.removeEventListener("test", Ns, Ns);
  } catch {
    xd = !1;
  }
var Uo = xd ? { passive: !1 } : !1, r2 = function(n) {
  return n.tagName === "TEXTAREA";
}, lx = function(n, a) {
  if (!(n instanceof Element))
    return !1;
  var l = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    l[a] !== "hidden" && // contains scroll inside self
    !(l.overflowY === l.overflowX && !r2(n) && l[a] === "visible")
  );
}, o2 = function(n) {
  return lx(n, "overflowY");
}, l2 = function(n) {
  return lx(n, "overflowX");
}, gv = function(n, a) {
  var l = a.ownerDocument, o = a;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = ix(n, o);
    if (s) {
      var u = sx(n, o), d = u[1], m = u[2];
      if (d > m)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== l.body);
  return !1;
}, i2 = function(n) {
  var a = n.scrollTop, l = n.scrollHeight, o = n.clientHeight;
  return [
    a,
    l,
    o
  ];
}, s2 = function(n) {
  var a = n.scrollLeft, l = n.scrollWidth, o = n.clientWidth;
  return [
    a,
    l,
    o
  ];
}, ix = function(n, a) {
  return n === "v" ? o2(a) : l2(a);
}, sx = function(n, a) {
  return n === "v" ? i2(a) : s2(a);
}, c2 = function(n, a) {
  return n === "h" && a === "rtl" ? -1 : 1;
}, u2 = function(n, a, l, o, s) {
  var u = c2(n, window.getComputedStyle(a).direction), d = u * o, m = l.target, h = a.contains(m), p = !1, b = d > 0, v = 0, w = 0;
  do {
    if (!m)
      break;
    var T = sx(n, m), E = T[0], O = T[1], C = T[2], D = O - C - u * E;
    (E || D) && ix(n, m) && (v += D, w += E);
    var _ = m.parentNode;
    m = _ && _.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? _.host : _;
  } while (
    // portaled content
    !h && m !== document.body || // self content
    h && (a.contains(m) || a === m)
  );
  return (b && Math.abs(v) < 1 || !b && Math.abs(w) < 1) && (p = !0), p;
}, As = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, yv = function(n) {
  return [n.deltaX, n.deltaY];
}, vv = function(n) {
  return n && "current" in n ? n.current : n;
}, f2 = function(n, a) {
  return n[0] === a[0] && n[1] === a[1];
}, d2 = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, m2 = 0, Bo = [];
function h2(n) {
  var a = x.useRef([]), l = x.useRef([0, 0]), o = x.useRef(), s = x.useState(m2++)[0], u = x.useState(ox)[0], d = x.useRef(n);
  x.useEffect(function() {
    d.current = n;
  }, [n]), x.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var O = zN([n.lockRef.current], (n.shards || []).map(vv), !0).filter(Boolean);
      return O.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), O.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var m = x.useCallback(function(O, C) {
    if ("touches" in O && O.touches.length === 2 || O.type === "wheel" && O.ctrlKey)
      return !d.current.allowPinchZoom;
    var D = As(O), _ = l.current, M = "deltaX" in O ? O.deltaX : _[0] - D[0], N = "deltaY" in O ? O.deltaY : _[1] - D[1], z, k = O.target, Y = Math.abs(M) > Math.abs(N) ? "h" : "v";
    if ("touches" in O && Y === "h" && k.type === "range")
      return !1;
    var B = window.getSelection(), Z = B && B.anchorNode, te = Z ? Z === k || Z.contains(k) : !1;
    if (te)
      return !1;
    var re = gv(Y, k);
    if (!re)
      return !0;
    if (re ? z = Y : (z = Y === "v" ? "h" : "v", re = gv(Y, k)), !re)
      return !1;
    if (!o.current && "changedTouches" in O && (M || N) && (o.current = z), !z)
      return !0;
    var ne = o.current || z;
    return u2(ne, C, O, ne === "h" ? M : N);
  }, []), h = x.useCallback(function(O) {
    var C = O;
    if (!(!Bo.length || Bo[Bo.length - 1] !== u)) {
      var D = "deltaY" in C ? yv(C) : As(C), _ = a.current.filter(function(z) {
        return z.name === C.type && (z.target === C.target || C.target === z.shadowParent) && f2(z.delta, D);
      })[0];
      if (_ && _.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!_) {
        var M = (d.current.shards || []).map(vv).filter(Boolean).filter(function(z) {
          return z.contains(C.target);
        }), N = M.length > 0 ? m(C, M[0]) : !d.current.noIsolation;
        N && C.cancelable && C.preventDefault();
      }
    }
  }, []), p = x.useCallback(function(O, C, D, _) {
    var M = { name: O, delta: C, target: D, should: _, shadowParent: p2(D) };
    a.current.push(M), setTimeout(function() {
      a.current = a.current.filter(function(N) {
        return N !== M;
      });
    }, 1);
  }, []), b = x.useCallback(function(O) {
    l.current = As(O), o.current = void 0;
  }, []), v = x.useCallback(function(O) {
    p(O.type, yv(O), O.target, m(O, n.lockRef.current));
  }, []), w = x.useCallback(function(O) {
    p(O.type, As(O), O.target, m(O, n.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Bo.push(u), n.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: w
    }), document.addEventListener("wheel", h, Uo), document.addEventListener("touchmove", h, Uo), document.addEventListener("touchstart", b, Uo), function() {
      Bo = Bo.filter(function(O) {
        return O !== u;
      }), document.removeEventListener("wheel", h, Uo), document.removeEventListener("touchmove", h, Uo), document.removeEventListener("touchstart", b, Uo);
    };
  }, []);
  var T = n.removeScrollBar, E = n.inert;
  return x.createElement(
    x.Fragment,
    null,
    E ? x.createElement(u, { styles: d2(s) }) : null,
    T ? x.createElement(a2, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function p2(n) {
  for (var a = null; n !== null; )
    n instanceof ShadowRoot && (a = n.host, n = n.host), n = n.parentNode;
  return a;
}
const g2 = WN(rx, h2);
var im = x.forwardRef(function(n, a) {
  return x.createElement(fc, Pn({}, n, { ref: a, sideCar: g2 }));
});
im.classNames = fc.classNames;
var y2 = Object.defineProperty, Ma = (n, a) => y2(n, "name", { value: a, configurable: !0 }), sm = "Popover", [cx, tk] = /* @__PURE__ */ Ta(sm, [
  cc
]), cm = cc(), [v2, $o] = cx(sm), b2 = /* @__PURE__ */ Ma((n) => {
  const {
    __scopePopover: a,
    children: l,
    open: o,
    defaultOpen: s,
    onOpenChange: u,
    modal: d = !1
  } = n, m = cm(a), h = x.useRef(null), [p, b] = x.useState(!1), [v, w] = x.useState(0), [T, E] = x.useState(0), [O, C] = Hr({
    prop: o,
    defaultProp: s ?? !1,
    onChange: u,
    caller: sm
  });
  return /* @__PURE__ */ g.jsx(Q0, { ...m, children: /* @__PURE__ */ g.jsx(
    v2,
    {
      scope: a,
      contentId: nr(),
      titleId: nr(),
      descriptionId: nr(),
      titlePresent: v > 0,
      descriptionPresent: T > 0,
      setTitleCount: w,
      setDescriptionCount: E,
      triggerRef: h,
      open: O,
      onOpenChange: C,
      onOpenToggle: x.useCallback(() => C((D) => !D), [C]),
      hasCustomAnchor: p,
      onCustomAnchorAdd: x.useCallback(() => b(!0), []),
      onCustomAnchorRemove: x.useCallback(() => b(!1), []),
      modal: d,
      children: l
    }
  ) });
}, "Popover"), x2 = "PopoverTrigger", w2 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Ma(function(a, l) {
    const { __scopePopover: o, ...s } = a, u = $o(x2, o), d = cm(o), m = at(l, u.triggerRef), h = /* @__PURE__ */ g.jsx(
      rt.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : void 0,
        "data-state": um(u.open),
        ...s,
        ref: m,
        onClick: Ye(a.onClick, u.onOpenToggle)
      }
    );
    return u.hasCustomAnchor ? h : /* @__PURE__ */ g.jsx(Z0, { asChild: !0, ...d, children: h });
  }, "PopoverTrigger")
), ux = "PopoverPortal", [S2, C2] = cx(ux, {
  forceMount: void 0
}), E2 = /* @__PURE__ */ Ma((n) => {
  const { __scopePopover: a, forceMount: l, children: o, container: s } = n, u = $o(ux, a);
  return /* @__PURE__ */ g.jsx(S2, { scope: a, forceMount: l, children: /* @__PURE__ */ g.jsx($s, { present: l || u.open, children: /* @__PURE__ */ g.jsx(J0, { asChild: !0, container: s, children: o }) }) });
}, "PopoverPortal"), Kl = "PopoverContent", T2 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = C2(Kl, a.__scopePopover), { forceMount: s = o.forceMount, ...u } = a, d = $o(Kl, a.__scopePopover);
    return /* @__PURE__ */ g.jsx($s, { present: s || d.open, children: d.modal ? /* @__PURE__ */ g.jsx(M2, { ...u, ref: l }) : /* @__PURE__ */ g.jsx(D2, { ...u, ref: l }) });
  }, "PopoverContent")
), O2 = /* @__PURE__ */ Sa("PopoverContent.RemoveScroll"), M2 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = $o(Kl, a.__scopePopover), s = x.useRef(null), u = at(l, s), d = x.useRef(!1), { nodes: m, registry: h } = O0();
    return x.useEffect(() => {
      const p = s.current;
      if (p) return tx(p);
    }, []), /* @__PURE__ */ g.jsx(
      im,
      {
        as: O2,
        allowPinchZoom: !0,
        shards: x.useMemo(
          () => [s, ...m.map((p) => ({ current: p }))],
          [s, m]
        ),
        children: /* @__PURE__ */ g.jsx(
          fx,
          {
            ...a,
            ref: u,
            branchNodes: m,
            branchRegistry: h,
            trapFocus: o.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Ye(a.onCloseAutoFocus, (p) => {
              p.preventDefault(), d.current || o.triggerRef.current?.focus();
            }),
            onPointerDownOutside: Ye(
              a.onPointerDownOutside,
              (p) => {
                const b = p.detail.originalEvent, v = b.button === 0 && b.ctrlKey === !0, w = b.button === 2 || v;
                d.current = w;
              },
              { checkForDefaultPrevented: !1 }
            ),
            onFocusOutside: Ye(
              a.onFocusOutside,
              (p) => p.preventDefault(),
              { checkForDefaultPrevented: !1 }
            )
          }
        )
      }
    );
  }, "PopoverContentModal")
), D2 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = $o(Kl, a.__scopePopover), s = x.useRef(!1), u = x.useRef(!1);
    return /* @__PURE__ */ g.jsx(
      fx,
      {
        ...a,
        ref: l,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (d) => {
          a.onCloseAutoFocus?.(d), d.defaultPrevented || (s.current || o.triggerRef.current?.focus(), d.preventDefault()), s.current = !1, u.current = !1;
        },
        onInteractOutside: (d) => {
          a.onInteractOutside?.(d), d.defaultPrevented || (s.current = !0, d.detail.originalEvent.type === "pointerdown" && (u.current = !0));
          const m = d.target;
          o.triggerRef.current?.contains(m) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && u.current && d.preventDefault();
        }
      }
    );
  }, "PopoverContentNonModal")
), fx = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const {
      __scopePopover: o,
      trapFocus: s,
      onOpenAutoFocus: u,
      onCloseAutoFocus: d,
      disableOutsidePointerEvents: m,
      onEscapeKeyDown: h,
      onPointerDownOutside: p,
      onFocusOutside: b,
      onInteractOutside: v,
      "aria-describedby": w,
      branchNodes: T,
      branchRegistry: E,
      ...O
    } = a, C = $o(Kl, o), D = cm(o), [_, M] = x.useState(null), N = at(l, M);
    return M0(_), ac(), /* @__PURE__ */ g.jsx(T0, { registry: E, children: /* @__PURE__ */ g.jsx(
      C0,
      {
        asChild: !0,
        loop: !0,
        trapped: s,
        branches: T,
        onMountAutoFocus: u,
        onUnmountAutoFocus: d,
        children: /* @__PURE__ */ g.jsx(
          x0,
          {
            asChild: !0,
            disableOutsidePointerEvents: m,
            onInteractOutside: v,
            onEscapeKeyDown: h,
            onPointerDownOutside: p,
            onFocusOutside: b,
            onDismiss: () => C.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ g.jsx(
              $0,
              {
                "data-state": um(C.open),
                role: "dialog",
                id: C.contentId,
                "aria-labelledby": C.titlePresent ? C.titleId : void 0,
                "aria-describedby": C.descriptionPresent ? dx(w, C.descriptionId) : w,
                ...D,
                ...O,
                ref: N,
                style: {
                  ...O.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    ) });
  }, "PopoverContentImpl")
);
function um(n) {
  return n ? "open" : "closed";
}
Ma(um, "getState");
function dx(...n) {
  const a = /* @__PURE__ */ new Set();
  for (const l of n)
    if (typeof l == "string")
      for (const o of String(l).trim().split(/\s+/))
        o && a.add(o);
  return a.size > 0 ? Array.from(a).join(" ") : void 0;
}
Ma(dx, "concatAriaDescribedby");
const fm = x.createContext(null), mx = b2, hx = w2;
function px({
  className: n,
  align: a = "center",
  sideOffset: l = 4,
  ...o
}) {
  const s = x.useContext(fm);
  return /* @__PURE__ */ g.jsx(E2, { container: s || void 0, children: /* @__PURE__ */ g.jsx(
    T2,
    {
      align: a,
      sideOffset: l,
      className: we(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n
      ),
      ...o
    }
  ) });
}
var _2 = Object.defineProperty, N2 = (n, a) => _2(n, "name", { value: a, configurable: !0 });
function wd(n, [a, l]) {
  return Math.min(l, Math.max(a, n));
}
N2(wd, "clamp");
var A2 = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), k2 = Object.defineProperty, qe = (n, a) => k2(n, "name", { value: a, configurable: !0 }), bv = {
  ItemAligned: "item-aligned",
  Popper: "popper"
}, j2 = {
  RTL: "rtl"
}, R2 = [" ", "Enter", "ArrowUp", "ArrowDown"], z2 = [" ", "Enter"], Fo = "Select", [dc, mc, H2] = /* @__PURE__ */ jd(Fo), [Fr, nk] = /* @__PURE__ */ Ta(Fo, [
  H2,
  cc
]), dm = cc(), [Y2, cr] = Fr(Fo), [U2, B2] = Fr(Fo);
function gx(n) {
  const {
    __scopeSelect: a,
    children: l,
    open: o,
    defaultOpen: s,
    onOpenChange: u,
    value: d,
    defaultValue: m,
    onValueChange: h,
    dir: p,
    name: b,
    autoComplete: v,
    disabled: w,
    required: T,
    form: E,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: O
  } = n, C = dm(a), [D, _] = x.useState(null), [M, N] = x.useState(null), [z, k] = x.useState(!1), Y = Zs(p), [B, Z] = Hr({
    prop: o,
    defaultProp: s ?? !1,
    onChange: u,
    caller: Fo
  }), [te, re] = Hr({
    prop: d,
    defaultProp: m,
    onChange: h,
    caller: Fo
  }), ne = x.useRef(null), X = x.useRef(!1), [ee, ie] = x.useState(null), H = /* @__PURE__ */ qe((I) => {
    ie({
      value: I,
      hasConsumerStoppedPropagation: X.current
    }), re(I);
  }, "handleUserSelect"), F = x.useRef(te);
  x.useEffect(() => {
    const I = E ? D?.ownerDocument.getElementById(E) : D?.form;
    if (I instanceof HTMLFormElement) {
      const le = /* @__PURE__ */ qe(() => re(F.current), "reset");
      return I.addEventListener("reset", le), () => I.removeEventListener("reset", le);
    }
  }, [E, D, re]);
  const K = D ? !!E || !!D.closest("form") : !0, [oe, G] = x.useState(/* @__PURE__ */ new Set()), A = nr(), W = Array.from(oe).map((I) => I.props.value).join(";"), ae = x.useCallback((I) => {
    G((le) => new Set(le).add(I));
  }, []), se = x.useCallback((I) => {
    G((le) => {
      const Se = new Set(le);
      return Se.delete(I), Se;
    });
  }, []), ce = {
    required: T,
    trigger: D,
    onTriggerChange: _,
    valueNode: M,
    onValueNodeChange: N,
    valueNodeHasChildren: z,
    onValueNodeHasChildrenChange: k,
    contentId: A,
    value: te,
    onValueChange: re,
    hasConsumerStoppedPropagationRef: X,
    userSelection: ee,
    onUserSelect: H,
    open: B,
    onOpenChange: Z,
    dir: Y,
    triggerPointerDownPosRef: ne,
    disabled: w,
    name: b,
    autoComplete: v,
    form: E,
    nativeOptions: oe,
    nativeSelectKey: W,
    isFormControl: K
  };
  return /* @__PURE__ */ g.jsx(Q0, { ...C, children: /* @__PURE__ */ g.jsx(Y2, { scope: a, ...ce, children: /* @__PURE__ */ g.jsx(dc.Provider, { scope: a, children: /* @__PURE__ */ g.jsx(
    U2,
    {
      scope: a,
      onNativeOptionAdd: ae,
      onNativeOptionRemove: se,
      children: xx(O) ? O(ce) : l
    }
  ) }) }) });
}
qe(gx, "SelectProvider");
var L2 = /* @__PURE__ */ qe((n) => {
  const { __scopeSelect: a, children: l, ...o } = n;
  return /* @__PURE__ */ g.jsx(
    gx,
    {
      __scopeSelect: a,
      ...o,
      internal_do_not_use_render: ({ isFormControl: s }) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        l,
        s ? /* @__PURE__ */ g.jsx(
          dA,
          {
            __scopeSelect: a
          }
        ) : null
      ] })
    }
  );
}, "Select"), q2 = "SelectTrigger", P2 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ qe(function(a, l) {
    const { __scopeSelect: o, disabled: s = !1, ...u } = a, d = dm(o), m = cr(q2, o), h = m.disabled || s, p = at(l, m.onTriggerChange), b = mc(o), v = x.useRef("touch"), [w, T, E] = hm((C) => {
      const D = b().filter((N) => !N.disabled), _ = D.find((N) => N.value === m.value), M = pm(D, C, _);
      M !== void 0 && m.onUserSelect(M.value);
    }), O = /* @__PURE__ */ qe((C) => {
      h || (m.onOpenChange(!0), E()), C && (m.triggerPointerDownPosRef.current = {
        x: Math.round(C.pageX),
        y: Math.round(C.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ g.jsx(Z0, { asChild: !0, ...d, children: /* @__PURE__ */ g.jsx(
      rt.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": m.open ? m.contentId : void 0,
        "aria-expanded": m.open,
        "aria-required": m.required,
        "aria-autocomplete": "none",
        dir: m.dir,
        "data-state": m.open ? "open" : "closed",
        disabled: h,
        "data-disabled": h ? "" : void 0,
        "data-placeholder": ri(m.value) ? "" : void 0,
        ...u,
        ref: p,
        onClick: Ye(u.onClick, (C) => {
          C.currentTarget.focus(), v.current !== "mouse" && O(C);
        }),
        onPointerDown: Ye(u.onPointerDown, (C) => {
          v.current = C.pointerType;
          const D = C.target;
          D.hasPointerCapture(C.pointerId) && D.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (O(C), C.preventDefault());
        }),
        onKeyDown: Ye(u.onKeyDown, (C) => {
          const D = w.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && (m.hasConsumerStoppedPropagationRef.current = C.isPropagationStopped(), T(C.key)), !(D && C.key === " ") && R2.includes(C.key) && (O(), C.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), G2 = "SelectValue", W2 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ qe(function(a, l) {
    const { __scopeSelect: o, className: s, style: u, children: d, placeholder: m = "", ...h } = a, p = cr(G2, o), { onValueNodeHasChildrenChange: b } = p, v = d !== void 0, w = at(l, p.onValueNodeChange);
    bt(() => {
      b(v);
    }, [b, v]);
    const T = ri(p.value);
    return /* @__PURE__ */ g.jsx(
      rt.span,
      {
        ...h,
        asChild: T ? !1 : h.asChild,
        ref: w,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ g.jsx(x.Fragment, { children: T ? m : d }, T ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), V2 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ qe(function(a, l) {
    const { __scopeSelect: o, children: s, ...u } = a;
    return /* @__PURE__ */ g.jsx(rt.span, { "aria-hidden": !0, ...u, ref: l, children: s || "▼" });
  }, "SelectIcon")
), F2 = "SelectPortal", [X2, Q2] = Fr(F2, {
  forceMount: void 0
}), Z2 = /* @__PURE__ */ qe((n) => {
  const { __scopeSelect: a, forceMount: l, ...o } = n;
  return /* @__PURE__ */ g.jsx(X2, { scope: n.__scopeSelect, forceMount: l, children: /* @__PURE__ */ g.jsx(J0, { asChild: !0, ...o }) });
}, "SelectPortal"), Lr = "SelectContent", I2 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ qe(function(a, l) {
    const o = Q2(Lr, a.__scopeSelect), { forceMount: s = o.forceMount, ...u } = a, d = cr(Lr, a.__scopeSelect), [m, h] = x.useState();
    return bt(() => {
      h(new DocumentFragment());
    }, []), /* @__PURE__ */ g.jsx($s, { present: s || d.open, children: ({ present: p }) => p ? /* @__PURE__ */ g.jsx(J2, { ...u, ref: l }) : /* @__PURE__ */ g.jsx($2, { ...u, fragment: m }) });
  }, "SelectContent")
), $2 = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ qe(function(a, l) {
  const { __scopeSelect: o, children: s, fragment: u } = a;
  return u ? ei.createPortal(
    /* @__PURE__ */ g.jsx(yx, { scope: o, children: /* @__PURE__ */ g.jsx(dc.Slot, { scope: o, children: /* @__PURE__ */ g.jsx("div", { ref: l, children: s }) }) }),
    u
  ) : null;
}, "SelectContentFragment")), Mn = 10, [yx, Xr] = Fr(Lr), K2 = /* @__PURE__ */ Sa("SelectContent.RemoveScroll"), J2 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(a, l) {
    const { __scopeSelect: o } = a, {
      position: s = bv.ItemAligned,
      onCloseAutoFocus: u,
      onEscapeKeyDown: d,
      onPointerDownOutside: m,
      //
      // PopperContent props
      side: h,
      sideOffset: p,
      align: b,
      alignOffset: v,
      arrowPadding: w,
      collisionBoundary: T,
      collisionPadding: E,
      sticky: O,
      hideWhenDetached: C,
      avoidCollisions: D,
      //
      ..._
    } = a, M = cr(Lr, o), [N, z] = x.useState(null), [k, Y] = x.useState(null), B = at(l, z), [Z, te] = x.useState(null), [re, ne] = x.useState(
      null
    ), X = mc(o), [ee, ie] = x.useState(!1), H = x.useRef(!1), F = x.useRef(!1), K = x.useRef(!1);
    x.useEffect(() => {
      if (N) return tx(N);
    }, [N]), ac();
    const oe = x.useCallback(
      (ge) => {
        const [Qe, ...Pe] = X().map((Ve) => Ve.ref.current), [Ee] = Pe.slice(-1), Me = document.activeElement;
        for (const Ve of ge)
          if (Ve === Me || (Ve?.scrollIntoView({ block: "nearest" }), Ve === Qe && k && (k.scrollTop = 0), Ve === Ee && k && (k.scrollTop = k.scrollHeight), Ve?.focus(), document.activeElement !== Me)) return;
      },
      [X, k]
    ), G = x.useCallback(
      () => oe([Z, N]),
      [oe, Z, N]
    );
    x.useEffect(() => {
      ee && G();
    }, [ee, G]);
    const { onOpenChange: A, triggerPointerDownPosRef: W } = M;
    x.useEffect(() => {
      if (N) {
        let ge = { x: 0, y: 0 };
        const Qe = /* @__PURE__ */ qe((Ee) => {
          ge = {
            x: Math.abs(Math.round(Ee.pageX) - (W.current?.x ?? 0)),
            y: Math.abs(Math.round(Ee.pageY) - (W.current?.y ?? 0))
          };
        }, "handlePointerMove"), Pe = /* @__PURE__ */ qe((Ee) => {
          ge.x <= 10 && ge.y <= 10 ? Ee.preventDefault() : Ee.composedPath().includes(N) || A(!1), document.removeEventListener("pointermove", Qe), W.current = null;
        }, "handlePointerUp");
        return W.current !== null && (document.addEventListener("pointermove", Qe), document.addEventListener("pointerup", Pe, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Qe), document.removeEventListener("pointerup", Pe, { capture: !0 });
        };
      }
    }, [N, A, W]), x.useEffect(() => {
      const ge = /* @__PURE__ */ qe(() => A(!1), "close");
      return window.addEventListener("blur", ge), window.addEventListener("resize", ge), () => {
        window.removeEventListener("blur", ge), window.removeEventListener("resize", ge);
      };
    }, [A]);
    const [ae, se] = hm((ge) => {
      const Qe = X().filter((Me) => !Me.disabled), Pe = Qe.find((Me) => Me.ref.current === document.activeElement), Ee = pm(Qe, ge, Pe);
      Ee && setTimeout(() => Ee.ref.current?.focus());
    }), ce = x.useCallback(
      (ge, Qe, Pe) => {
        const Ee = !F.current;
        Ee && (F.current = !0);
        const Me = !H.current && !Pe;
        M.value !== void 0 && M.value === Qe || Me ? (te(ge), Me && (H.current = !0)) : Ee && te(ge);
      },
      [M.value]
    ), I = x.useCallback(() => N?.focus(), [N]), le = x.useCallback(
      (ge, Qe, Pe) => {
        if (!ge) return;
        const Ee = !K.current;
        Ee && (K.current = !0);
        const Me = !H.current && !Pe;
        (M.value !== void 0 && M.value === Qe || Me || Ee) && ne(ge);
      },
      [M.value]
    ), Se = s === bv.Popper ? xv : eA, he = Se === xv ? {
      side: h,
      sideOffset: p,
      align: b,
      alignOffset: v,
      arrowPadding: w,
      collisionBoundary: T,
      collisionPadding: E,
      sticky: O,
      hideWhenDetached: C,
      avoidCollisions: D
    } : {};
    return /* @__PURE__ */ g.jsx(
      yx,
      {
        scope: o,
        content: N,
        viewport: k,
        onViewportChange: Y,
        itemRefCallback: ce,
        selectedItem: Z,
        onItemLeave: I,
        itemTextRefCallback: le,
        focusSelectedItem: G,
        selectedItemText: re,
        position: s,
        isPositioned: ee,
        searchRef: ae,
        children: /* @__PURE__ */ g.jsx(im, { as: K2, allowPinchZoom: !0, children: /* @__PURE__ */ g.jsx(
          C0,
          {
            asChild: !0,
            trapped: M.open,
            onMountAutoFocus: (ge) => {
              ge.preventDefault();
            },
            onUnmountAutoFocus: Ye(u, (ge) => {
              M.trigger?.focus({ preventScroll: !0 }), ge.preventDefault();
            }),
            children: /* @__PURE__ */ g.jsx(
              x0,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: m,
                onFocusOutside: (ge) => ge.preventDefault(),
                onDismiss: () => M.onOpenChange(!1),
                children: /* @__PURE__ */ g.jsx(
                  Se,
                  {
                    role: "listbox",
                    id: M.contentId,
                    "data-state": M.open ? "open" : "closed",
                    dir: M.dir,
                    onContextMenu: (ge) => ge.preventDefault(),
                    ..._,
                    ...he,
                    onPlaced: () => ie(!0),
                    ref: B,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: Ye(_.onKeyDown, (ge) => {
                      const Qe = ge.ctrlKey || ge.altKey || ge.metaKey;
                      if (ge.key === "Tab" && ge.preventDefault(), !Qe && ge.key.length === 1 && se(ge.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(ge.key)) {
                        let Ee = X().filter((Me) => !Me.disabled).map((Me) => Me.ref.current);
                        if (["ArrowUp", "End"].includes(ge.key) && (Ee = Ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(ge.key)) {
                          const Me = ge.target, Ve = Ee.indexOf(Me);
                          Ee = Ee.slice(Ve + 1);
                        }
                        setTimeout(() => oe(Ee)), ge.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "SelectContentImpl")
), eA = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ qe(function(a, l) {
  const { __scopeSelect: o, onPlaced: s, ...u } = a, d = cr(Lr, o), m = Xr(Lr, o), [h, p] = x.useState(null), [b, v] = x.useState(null), w = at(l, v), T = mc(o), E = x.useRef(!1), O = x.useRef(!0), { viewport: C, selectedItem: D, selectedItemText: _, focusSelectedItem: M } = m, N = x.useCallback(() => {
    if (d.trigger && d.valueNode && h && b && C && D && _) {
      const B = d.trigger.getBoundingClientRect(), Z = b.getBoundingClientRect(), te = d.valueNode.getBoundingClientRect(), re = _.getBoundingClientRect();
      if (d.dir !== j2.RTL) {
        const Pe = re.left - Z.left, Ee = te.left - Pe, Me = B.left - Ee, Ve = B.width + Me, Zn = Math.max(Ve, Z.width), ur = window.innerWidth - Mn, Da = wd(Ee, [
          Mn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Mn, ur - Zn)
        ]);
        h.style.minWidth = Ve + "px", h.style.left = Da + "px";
      } else {
        const Pe = Z.right - re.right, Ee = window.innerWidth - te.right - Pe, Me = window.innerWidth - B.right - Ee, Ve = B.width + Me, Zn = Math.max(Ve, Z.width), ur = window.innerWidth - Mn, Da = wd(Ee, [
          Mn,
          Math.max(Mn, ur - Zn)
        ]);
        h.style.minWidth = Ve + "px", h.style.right = Da + "px";
      }
      const ne = T(), X = window.innerHeight - Mn * 2, ee = C.scrollHeight, ie = window.getComputedStyle(b), H = parseInt(ie.borderTopWidth, 10), F = parseInt(ie.paddingTop, 10), K = parseInt(ie.borderBottomWidth, 10), oe = parseInt(ie.paddingBottom, 10), G = H + F + ee + oe + K, A = Math.min(D.offsetHeight * 5, G), W = window.getComputedStyle(C), ae = parseInt(W.paddingTop, 10), se = parseInt(W.paddingBottom, 10), ce = B.top + B.height / 2 - Mn, I = X - ce, le = D.offsetHeight / 2, Se = D.offsetTop + le, he = H + F + Se, ge = G - he;
      if (he <= ce) {
        const Pe = ne.length > 0 && D === ne[ne.length - 1].ref.current;
        h.style.bottom = "0px";
        const Ee = b.clientHeight - C.offsetTop - C.offsetHeight, Me = Math.max(
          I,
          le + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Pe ? se : 0) + Ee + K
        ), Ve = he + Me;
        h.style.height = Ve + "px";
      } else {
        const Pe = ne.length > 0 && D === ne[0].ref.current;
        h.style.top = "0px";
        const Me = Math.max(
          ce,
          H + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Pe ? ae : 0) + le
        ) + ge;
        h.style.height = Me + "px", C.scrollTop = he - ce + C.offsetTop;
      }
      h.style.margin = `${Mn}px 0`, h.style.minHeight = A + "px", h.style.maxHeight = X + "px", s?.(), requestAnimationFrame(() => E.current = !0);
    }
  }, [
    T,
    d.trigger,
    d.valueNode,
    h,
    b,
    C,
    D,
    _,
    d.dir,
    s
  ]);
  bt(() => N(), [N]);
  const [z, k] = x.useState();
  bt(() => {
    b && k(window.getComputedStyle(b).zIndex);
  }, [b]);
  const Y = x.useCallback(
    (B) => {
      B && O.current === !0 && (N(), M?.(), O.current = !1);
    },
    [N, M]
  );
  return /* @__PURE__ */ g.jsx(
    tA,
    {
      scope: o,
      contentWrapper: h,
      shouldExpandOnScrollRef: E,
      onScrollButtonChange: Y,
      children: /* @__PURE__ */ g.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: z
          },
          children: /* @__PURE__ */ g.jsx(
            rt.div,
            {
              ...u,
              ref: w,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...u.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), xv = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ qe(function(a, l) {
  const {
    __scopeSelect: o,
    align: s = "start",
    collisionPadding: u = Mn,
    ...d
  } = a, m = dm(o);
  return /* @__PURE__ */ g.jsx(
    $0,
    {
      ...m,
      ...d,
      ref: l,
      align: s,
      collisionPadding: u,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...d.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "SelectPopperPosition")), [tA, mm] = Fr(Lr, {}), wv = "SelectViewport", nA = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ qe(function(a, l) {
    const { __scopeSelect: o, nonce: s, ...u } = a, d = Xr(wv, o), m = mm(wv, o), h = at(l, d.onViewportChange), p = x.useRef(0);
    return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ g.jsx(dc.Slot, { scope: o, children: /* @__PURE__ */ g.jsx(
        rt.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...u,
          ref: h,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...u.style
          },
          onScroll: Ye(u.onScroll, (b) => {
            const v = b.currentTarget, { contentWrapper: w, shouldExpandOnScrollRef: T } = m;
            if (T?.current && w) {
              const E = Math.abs(p.current - v.scrollTop);
              if (E > 0) {
                const O = window.innerHeight - Mn * 2, C = parseFloat(w.style.minHeight), D = parseFloat(w.style.height), _ = Math.max(C, D);
                if (_ < O) {
                  const M = _ + E, N = Math.min(O, M), z = M - N;
                  w.style.height = N + "px", w.style.bottom === "0px" && (v.scrollTop = z > 0 ? z : 0, w.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = v.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), aA = "SelectGroup", [ak, rk] = Fr(aA), Sd = "SelectItem", [rA, vx] = Fr(Sd), oA = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ qe(function(a, l) {
    const {
      __scopeSelect: o,
      value: s,
      disabled: u = !1,
      textValue: d,
      ...m
    } = a, h = cr(Sd, o), p = Xr(Sd, o), b = h.value === s, [v, w] = x.useState(d ?? ""), [T, E] = x.useState(!1), O = _n(
      (N) => p.itemRefCallback?.(N, s, u)
    ), C = at(l, O), D = nr(), _ = x.useRef("touch");
    function M(N) {
      h.hasConsumerStoppedPropagationRef.current = N.isPropagationStopped(), h.onUserSelect(s), h.onOpenChange(!1);
    }
    return qe(M, "handleSelect"), /* @__PURE__ */ g.jsx(
      rA,
      {
        scope: o,
        value: s,
        disabled: u,
        textId: D,
        isSelected: b,
        onItemTextChange: x.useCallback((N) => {
          w((z) => z || (N?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ g.jsx(
          dc.ItemSlot,
          {
            scope: o,
            value: s,
            disabled: u,
            textValue: v,
            children: /* @__PURE__ */ g.jsx(
              rt.div,
              {
                role: "option",
                "aria-labelledby": D,
                "data-highlighted": T ? "" : void 0,
                "aria-selected": b && T,
                "data-state": b ? "checked" : "unchecked",
                "aria-disabled": u || void 0,
                "data-disabled": u ? "" : void 0,
                tabIndex: u ? void 0 : -1,
                ...m,
                ref: C,
                onFocus: Ye(m.onFocus, () => E(!0)),
                onBlur: Ye(m.onBlur, () => E(!1)),
                onClick: Ye(m.onClick, (N) => {
                  u || _.current !== "mouse" && M(N);
                }),
                onPointerUp: Ye(m.onPointerUp, (N) => {
                  u || _.current === "mouse" && M(N);
                }),
                onPointerDown: Ye(m.onPointerDown, (N) => {
                  _.current = N.pointerType;
                }),
                onPointerMove: Ye(m.onPointerMove, (N) => {
                  _.current = N.pointerType, u ? p.onItemLeave?.() : _.current === "mouse" && N.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Ye(m.onPointerLeave, (N) => {
                  N.currentTarget === document.activeElement && p.onItemLeave?.();
                }),
                onKeyDown: Ye(m.onKeyDown, (N) => {
                  u || N.target !== N.currentTarget || p.searchRef?.current !== "" && N.key === " " || (z2.includes(N.key) && M(N), N.key === " " && N.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), ks = "SelectItemText", lA = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ qe(function(a, l) {
    const { __scopeSelect: o, className: s, style: u, ...d } = a, m = cr(ks, o), h = Xr(ks, o), p = vx(ks, o), b = B2(ks, o), [v, w] = x.useState(null), T = _n(
      (M) => h.itemTextRefCallback?.(M, p.value, p.disabled)
    ), E = at(
      l,
      w,
      p.onItemTextChange,
      T
    ), O = v?.textContent, C = x.useMemo(
      () => /* @__PURE__ */ g.jsx("option", { value: p.value, disabled: p.disabled, children: O }, p.value),
      [p.disabled, p.value, O]
    ), { onNativeOptionAdd: D, onNativeOptionRemove: _ } = b;
    return bt(() => (D(C), () => _(C)), [D, _, C]), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx(rt.span, { id: p.textId, ...d, ref: E }),
      p.isSelected && m.valueNode && !m.valueNodeHasChildren && !ri(m.value) ? ei.createPortal(d.children, m.valueNode) : null
    ] });
  }, "SelectItemText")
), iA = "SelectItemIndicator", sA = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(a, l) {
    const { __scopeSelect: o, ...s } = a;
    return vx(iA, o).isSelected ? /* @__PURE__ */ g.jsx(rt.span, { "aria-hidden": !0, ...s, ref: l }) : null;
  }, "SelectItemIndicator")
), Sv = "SelectScrollUpButton", cA = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ qe(function(a, l) {
  const o = Xr(Sv, a.__scopeSelect), s = mm(Sv, a.__scopeSelect), [u, d] = x.useState(!1), m = at(l, s.onScrollButtonChange);
  return bt(() => {
    if (o.viewport && o.isPositioned) {
      let h = function() {
        const b = p.scrollTop > 0;
        d(b);
      };
      qe(h, "handleScroll");
      const p = o.viewport;
      return h(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
    }
  }, [o.viewport, o.isPositioned]), u ? /* @__PURE__ */ g.jsx(
    bx,
    {
      ...a,
      ref: m,
      onAutoScroll: () => {
        const { viewport: h, selectedItem: p } = o;
        h && p && (h.scrollTop = h.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), Cv = "SelectScrollDownButton", uA = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ qe(function(a, l) {
  const o = Xr(Cv, a.__scopeSelect), s = mm(Cv, a.__scopeSelect), [u, d] = x.useState(!1), m = at(l, s.onScrollButtonChange);
  return bt(() => {
    if (o.viewport && o.isPositioned) {
      let h = function() {
        const b = p.scrollHeight - p.clientHeight, v = Math.ceil(p.scrollTop) < b;
        d(v);
      };
      qe(h, "handleScroll");
      const p = o.viewport;
      return h(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
    }
  }, [o.viewport, o.isPositioned]), u ? /* @__PURE__ */ g.jsx(
    bx,
    {
      ...a,
      ref: m,
      onAutoScroll: () => {
        const { viewport: h, selectedItem: p } = o;
        h && p && (h.scrollTop = h.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), bx = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ qe(function(a, l) {
  const { __scopeSelect: o, onAutoScroll: s, ...u } = a, d = Xr("SelectScrollButton", o), m = x.useRef(null), h = mc(o), p = x.useCallback(() => {
    m.current !== null && (window.clearInterval(m.current), m.current = null);
  }, []);
  return x.useEffect(() => () => p(), [p]), bt(() => {
    h().find((v) => v.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [h]), /* @__PURE__ */ g.jsx(
    rt.div,
    {
      "aria-hidden": !0,
      ...u,
      ref: l,
      style: { flexShrink: 0, ...u.style },
      onPointerDown: Ye(u.onPointerDown, () => {
        m.current === null && (m.current = window.setInterval(s, 50));
      }),
      onPointerMove: Ye(u.onPointerMove, () => {
        d.onItemLeave?.(), m.current === null && (m.current = window.setInterval(s, 50));
      }),
      onPointerLeave: Ye(u.onPointerLeave, () => {
        p();
      })
    }
  );
}, "SelectScrollButtonImpl")), fA = "SelectBubbleInput", dA = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function({ __scopeSelect: a, ...l }, o) {
    const s = cr(fA, a), { value: u, onValueChange: d, required: m, disabled: h, name: p, autoComplete: b, form: v, userSelection: w } = s, { nativeOptions: T, nativeSelectKey: E } = s, O = x.useRef(null), C = at(o, O), D = u ?? "", _ = x.useRef(D), M = x.useRef(w), N = x.useRef(!1), z = Array.from(T).some(
      (k) => (k.props.value ?? "") === ""
    );
    return x.useEffect(() => {
      const k = O.current;
      if (!k) return;
      const Y = window.HTMLSelectElement.prototype, Z = Object.getOwnPropertyDescriptor(
        Y,
        "value"
      ).set, te = w !== null && w !== M.current;
      M.current = w;
      const re = _.current !== D;
      _.current = D;
      const ne = te && re;
      if (te && !re && w.value !== D && !w.hasConsumerStoppedPropagation && Z) {
        N.current = !0;
        try {
          Z.call(k, w.value), k.dispatchEvent(new Event("change", { bubbles: !0 }));
        } finally {
          N.current = !1, Z.call(k, D);
        }
        return;
      }
      const X = ne && !w.hasConsumerStoppedPropagation;
      if (re && Z) {
        const ee = new Event("change", { bubbles: X });
        Z.call(k, D), k.dispatchEvent(ee);
      }
    }, [D, w]), /* @__PURE__ */ g.jsxs(
      rt.select,
      {
        "aria-hidden": !0,
        required: m,
        tabIndex: -1,
        name: p,
        autoComplete: b,
        disabled: h,
        form: v,
        onChange: (k) => {
          N.current || d(k.target.value);
        },
        ...l,
        style: { ...A2, ...l.style },
        ref: C,
        defaultValue: D,
        children: [
          ri(u) && !z ? /* @__PURE__ */ g.jsx("option", { value: "" }) : null,
          Array.from(T)
        ]
      },
      E
    );
  }, "SelectBubbleInput")
);
function xx(n) {
  return typeof n == "function";
}
qe(xx, "isFunction");
function ri(n) {
  return n === "" || n === void 0;
}
qe(ri, "shouldShowPlaceholder");
function hm(n) {
  const a = _n(n), l = x.useRef(""), o = x.useRef(0), s = x.useCallback(
    (d) => {
      const m = l.current + d;
      a(m);
      function h(p) {
        l.current = p, window.clearTimeout(o.current), p !== "" && (o.current = window.setTimeout(() => h(""), 1e3));
      }
      qe(h, "updateSearch"), h(m);
    },
    [a]
  ), u = x.useCallback(() => {
    l.current = "", window.clearTimeout(o.current);
  }, []);
  return x.useEffect(() => () => window.clearTimeout(o.current), []), [l, s, u];
}
qe(hm, "useTypeaheadSearch");
function pm(n, a, l) {
  const s = a.length > 1 && Array.from(a).every((p) => p === a[0]) ? a[0] : a, u = l ? n.indexOf(l) : -1;
  let d = wx(n, Math.max(u, 0));
  s.length === 1 && (d = d.filter((p) => p !== l));
  const h = d.find(
    (p) => p.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return h !== l ? h : void 0;
}
qe(pm, "findNextItem");
function wx(n, a) {
  return n.map((l, o) => n[(a + o) % n.length]);
}
qe(wx, "wrapArray");
const Sx = document.querySelector(
  'meta[name="csp-nonce"]'
)?.content;
globalThis.__weiboStyleNonce = Sx;
function mA({
  ...n
}) {
  return /* @__PURE__ */ g.jsx(L2, { "data-slot": "select", ...n });
}
function hA({
  ...n
}) {
  return /* @__PURE__ */ g.jsx(W2, { "data-slot": "select-value", ...n });
}
function pA({
  className: n,
  size: a = "default",
  children: l,
  ...o
}) {
  return /* @__PURE__ */ g.jsxs(
    P2,
    {
      "data-slot": "select-trigger",
      "data-size": a,
      className: we(
        "cursor-pointer border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-8 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n
      ),
      ...o,
      children: [
        l,
        /* @__PURE__ */ g.jsx(V2, { asChild: !0, children: /* @__PURE__ */ g.jsx(Vd, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function gA({
  className: n,
  children: a,
  position: l = "popper",
  align: o = "center",
  ...s
}) {
  const u = x.useContext(fm);
  return /* @__PURE__ */ g.jsx(Z2, { container: u || void 0, children: /* @__PURE__ */ g.jsxs(
    I2,
    {
      "data-slot": "select-content",
      className: we(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        l === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        n
      ),
      position: l,
      align: o,
      ...s,
      children: [
        /* @__PURE__ */ g.jsx(vA, {}),
        /* @__PURE__ */ g.jsx(
          nA,
          {
            nonce: Sx,
            className: we(
              "p-1",
              l === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: a
          }
        ),
        /* @__PURE__ */ g.jsx(bA, {})
      ]
    }
  ) });
}
function yA({
  className: n,
  children: a,
  ...l
}) {
  return /* @__PURE__ */ g.jsxs(
    oA,
    {
      "data-slot": "select-item",
      className: we(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...l,
      children: [
        /* @__PURE__ */ g.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ g.jsx(sA, { children: /* @__PURE__ */ g.jsx(Go, { className: "size-4" }) }) }),
        /* @__PURE__ */ g.jsx(lA, { children: a })
      ]
    }
  );
}
function vA({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ g.jsx(
    cA,
    {
      "data-slot": "select-scroll-up-button",
      className: we(
        "flex cursor-pointer items-center justify-center py-1",
        n
      ),
      ...a,
      children: /* @__PURE__ */ g.jsx(DM, { className: "size-4" })
    }
  );
}
function bA({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ g.jsx(
    uA,
    {
      "data-slot": "select-scroll-down-button",
      className: we(
        "flex cursor-pointer items-center justify-center py-1",
        n
      ),
      ...a,
      children: /* @__PURE__ */ g.jsx(Vd, { className: "size-4" })
    }
  );
}
function Jl({
  id: n,
  label: a,
  value: l,
  onChange: o,
  options: s
}) {
  return /* @__PURE__ */ g.jsxs(
    mA,
    {
      value: l || "__all__",
      onValueChange: (u) => o(u === "__all__" ? "" : u),
      children: [
        /* @__PURE__ */ g.jsx(pA, { id: n, className: "w-full h-9 text-xs", "aria-label": a, children: /* @__PURE__ */ g.jsx(hA, {}) }),
        /* @__PURE__ */ g.jsx(gA, { className: "credit-popup", position: "popper", align: "start", children: s.map((u) => /* @__PURE__ */ g.jsx(
          yA,
          {
            value: u.value || "__all__",
            children: u.label
          },
          u.value || "__all__"
        )) })
      ]
    }
  );
}
function xA(n) {
  if (!n) return;
  const a = SO(n, "yyyy-MM-dd", /* @__PURE__ */ new Date());
  return Ub(a) ? a : void 0;
}
function Ev({
  id: n,
  name: a,
  label: l,
  initialValue: o = "",
  placeholder: s = "选择日期"
}) {
  const [u, d] = x.useState(o), [m, h] = x.useState(!1), p = xA(u);
  return /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ g.jsx(qt, { htmlFor: n, children: l }),
    /* @__PURE__ */ g.jsx("input", { type: "hidden", name: a, value: u }),
    /* @__PURE__ */ g.jsxs(mx, { open: m, onOpenChange: h, children: [
      /* @__PURE__ */ g.jsx(hx, { asChild: !0, children: /* @__PURE__ */ g.jsxs(
        Oe,
        {
          id: n,
          type: "button",
          variant: "outline",
          className: "w-full justify-between h-9 px-3 text-xs font-normal",
          "aria-label": l,
          children: [
            /* @__PURE__ */ g.jsx("span", { className: u ? "" : "text-muted-foreground", children: p ? tr(p, "yyyy/MM/dd") : s }),
            /* @__PURE__ */ g.jsx(xM, { className: "size-4 text-muted-foreground" })
          ]
        }
      ) }),
      /* @__PURE__ */ g.jsxs(
        px,
        {
          align: "start",
          className: "credit-popup date-popup w-auto p-0",
          "aria-label": `${l}日历`,
          children: [
            /* @__PURE__ */ g.jsx(
              u_,
              {
                mode: "single",
                selected: p,
                defaultMonth: p,
                locale: mM,
                autoFocus: !0,
                labels: {
                  labelPrevious: () => "上个月",
                  labelNext: () => "下个月",
                  labelDayButton: (b) => tr(b, "yyyy年M月d日")
                },
                onSelect: (b) => {
                  d(b ? tr(b, "yyyy-MM-dd") : ""), h(!1);
                }
              }
            ),
            /* @__PURE__ */ g.jsxs("div", { className: "credit-picker-footer", children: [
              /* @__PURE__ */ g.jsx(
                Oe,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    d(""), h(!1);
                  },
                  children: "清除日期"
                }
              ),
              /* @__PURE__ */ g.jsx(
                Oe,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: () => {
                    d(
                      new Intl.DateTimeFormat("en-CA", {
                        timeZone: "Asia/Shanghai",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                      }).format(/* @__PURE__ */ new Date())
                    ), h(!1);
                  },
                  children: "今天"
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const Cx = (n) => Array.from({ length: n }, (a, l) => {
  const o = String(l).padStart(2, "0");
  return { value: o, label: o };
}), wA = Cx(24), SA = Cx(60);
function CA({
  initialValue: n,
  onChange: a
}) {
  const [l, o] = x.useState(n), [s, u] = x.useState(n), [d, m] = x.useState(!1), [h, p] = s.split(":");
  return /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ g.jsx(qt, { htmlFor: "plan-time", children: "每天签到时间 · 北京时间" }),
    /* @__PURE__ */ g.jsx("input", { type: "hidden", name: "time", value: l }),
    /* @__PURE__ */ g.jsxs(
      mx,
      {
        open: d,
        onOpenChange: (b) => {
          b && u(l), m(b);
        },
        children: [
          /* @__PURE__ */ g.jsx(hx, { asChild: !0, children: /* @__PURE__ */ g.jsxs(
            Oe,
            {
              id: "plan-time",
              type: "button",
              variant: "outline",
              className: "credit-time-trigger w-full justify-between h-14 px-3 text-2xl font-medium tabular-nums",
              "aria-label": "每天签到时间 · 北京时间",
              children: [
                l,
                /* @__PURE__ */ g.jsx(NM, { className: "size-5 text-muted-foreground" })
              ]
            }
          ) }),
          /* @__PURE__ */ g.jsxs(
            px,
            {
              align: "start",
              className: "credit-popup time-popup w-64 p-4",
              "aria-label": "签到时间选择器",
              children: [
                /* @__PURE__ */ g.jsxs("p", { className: "credit-picker-title", children: [
                  "每天签到时间 ",
                  /* @__PURE__ */ g.jsx("span", { children: "24 小时制" })
                ] }),
                /* @__PURE__ */ g.jsxs("div", { className: "credit-time-columns", children: [
                  /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ g.jsx(qt, { htmlFor: "time-hour", children: "小时" }),
                    /* @__PURE__ */ g.jsx(
                      Jl,
                      {
                        id: "time-hour",
                        label: "小时",
                        value: h,
                        options: wA,
                        onChange: (b) => u(`${b}:${p}`)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ g.jsx("span", { className: "credit-time-separator", children: ":" }),
                  /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ g.jsx(qt, { htmlFor: "time-minute", children: "分钟" }),
                    /* @__PURE__ */ g.jsx(
                      Jl,
                      {
                        id: "time-minute",
                        label: "分钟",
                        value: p,
                        options: SA,
                        onChange: (b) => u(`${h}:${b}`)
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ g.jsxs("div", { className: "credit-time-actions", children: [
                  /* @__PURE__ */ g.jsx(
                    Oe,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: () => m(!1),
                      children: "取消"
                    }
                  ),
                  /* @__PURE__ */ g.jsx(
                    Oe,
                    {
                      type: "button",
                      size: "sm",
                      onClick: () => {
                        o(s), a?.(s), m(!1);
                      },
                      children: "确定时间"
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function hc(n, a, l) {
  n.dispatchEvent(new CustomEvent(a, { detail: l, bubbles: !0 }));
}
class Ex extends Error {
  constructor(a, l, o) {
    super(a), this.status = l, this.code = o;
  }
  status;
  code;
}
async function pc(n, a, l = "POST") {
  const o = await fetch(n, {
    method: l,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "WeiboPortal"
    },
    body: JSON.stringify(a)
  });
  let s;
  try {
    s = await o.json();
  } catch {
    throw new Error("服务暂时不可用，请稍后重试");
  }
  if (!o.ok)
    throw o.status === 401 && (n === "/api/settings" || n.startsWith("/api/admin/")) && location.assign("/login"), new Ex(
      typeof s.detail == "string" ? s.detail : "请检查填写内容后重试",
      o.status,
      s.code
    );
  return s;
}
function Cd({
  id: n,
  name: a,
  label: l,
  value: o,
  placeholder: s,
  numeric: u = !1
}) {
  return /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ g.jsx(qt, { htmlFor: n, children: l }),
    /* @__PURE__ */ g.jsx(
      Vn,
      {
        id: n,
        name: a,
        defaultValue: o,
        placeholder: s,
        inputMode: u ? "numeric" : void 0,
        maxLength: u ? 32 : 64,
        className: "h-9 text-xs"
      }
    )
  ] });
}
function EA({
  admin: n,
  values: a,
  statuses: l
}) {
  const [o, s] = x.useState(a.status || "");
  return /* @__PURE__ */ g.jsxs(
    "form",
    {
      id: "filter-form",
      className: "credit-filter-form",
      onSubmit: (u) => {
        u.preventDefault(), u.stopPropagation(), hc(u.currentTarget, "credit:filters", {
          kind: "records",
          values: Object.fromEntries(new FormData(u.currentTarget))
        });
      },
      children: [
        n && /* @__PURE__ */ g.jsx(
          Cd,
          {
            id: "filter-username",
            name: "username",
            label: "平台用户名",
            value: a.username || "",
            placeholder: "完整用户名"
          }
        ),
        /* @__PURE__ */ g.jsx(
          Cd,
          {
            id: "filter-uid",
            name: "uid",
            label: "微博 UID",
            value: a.uid || "",
            placeholder: n ? "全部微博" : "微博 UID",
            numeric: !0
          }
        ),
        /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
          /* @__PURE__ */ g.jsx(qt, { htmlFor: "filter-status", children: "执行结果" }),
          /* @__PURE__ */ g.jsx("input", { type: "hidden", name: "status", value: o }),
          /* @__PURE__ */ g.jsx(
            Jl,
            {
              id: "filter-status",
              label: "执行结果",
              value: o,
              onChange: s,
              options: [{ value: "", label: "全部结果" }, ...l]
            }
          )
        ] }),
        /* @__PURE__ */ g.jsx(
          Ev,
          {
            id: "filter-start",
            name: "start",
            label: "开始日期",
            placeholder: n ? void 0 : "开始日期",
            initialValue: a.start
          }
        ),
        /* @__PURE__ */ g.jsx(
          Ev,
          {
            id: "filter-end",
            name: "end",
            label: "结束日期",
            placeholder: n ? void 0 : "结束日期",
            initialValue: a.end
          }
        ),
        /* @__PURE__ */ g.jsxs("div", { className: "credit-filter-actions", children: [
          /* @__PURE__ */ g.jsx(Oe, { variant: "outline", type: "submit", className: "h-9 text-xs", children: "筛选" }),
          /* @__PURE__ */ g.jsx(
            Oe,
            {
              type: "button",
              variant: "ghost",
              className: "h-9 text-xs",
              "data-action": "clear-filters",
              children: "重置"
            }
          )
        ] })
      ]
    }
  );
}
function TA({ search: n }) {
  const [a, l] = x.useState(!1);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs("div", { className: "credit-users-toolbar", children: [
      /* @__PURE__ */ g.jsxs(
        "form",
        {
          id: "user-search",
          className: "credit-filter-form credit-user-search",
          onSubmit: (o) => {
            o.preventDefault(), o.stopPropagation(), hc(o.currentTarget, "credit:filters", {
              kind: "users",
              values: Object.fromEntries(new FormData(o.currentTarget))
            });
          },
          children: [
            /* @__PURE__ */ g.jsx(
              Cd,
              {
                id: "user-search-input",
                name: "search",
                label: "搜索用户名",
                value: n,
                placeholder: "输入用户名关键词"
              }
            ),
            /* @__PURE__ */ g.jsx(Oe, { type: "submit", variant: "outline", className: "h-9 text-xs", children: "搜索" })
          ]
        }
      ),
      /* @__PURE__ */ g.jsx(
        Oe,
        {
          type: "button",
          size: "sm",
          disabled: a,
          onClick: () => l(!0),
          "aria-expanded": a,
          "aria-controls": "admin-create-user",
          children: "添加用户"
        }
      )
    ] }),
    a && /* @__PURE__ */ g.jsx(OA, { onCancel: () => l(!1) })
  ] });
}
function OA({ onCancel: n }) {
  const [a, l] = x.useState(!1), [o, s] = x.useState("");
  async function u(d) {
    d.preventDefault(), d.stopPropagation();
    const m = d.currentTarget, h = new FormData(m);
    if (s(""), h.get("password") !== h.get("confirmation")) {
      s("两次密码输入不一致");
      return;
    }
    l(!0);
    try {
      const p = await pc("/api/admin/users", {
        username: h.get("username"),
        password: h.get("password")
      });
      m.reset(), hc(m, "credit:user-created", { username: p.user.username });
    } catch (p) {
      s(
        p instanceof TypeError ? "无法连接服务，请稍后重试" : p.message
      );
    } finally {
      l(!1);
    }
  }
  return /* @__PURE__ */ g.jsxs(
    "form",
    {
      id: "admin-create-user",
      className: "credit-create-user",
      onSubmit: u,
      children: [
        /* @__PURE__ */ g.jsx("h3", { children: "添加平台用户" }),
        /* @__PURE__ */ g.jsx("p", { children: "创建普通用户账号，用户登录后自行绑定微博。" }),
        /* @__PURE__ */ g.jsxs("fieldset", { disabled: a, children: [
          /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ g.jsx(qt, { htmlFor: "new-user-name", children: "用户名" }),
            /* @__PURE__ */ g.jsx(
              Vn,
              {
                id: "new-user-name",
                name: "username",
                required: !0,
                minLength: 3,
                maxLength: 32,
                autoComplete: "off",
                placeholder: "3–32 位，支持中文、字母和数字"
              }
            )
          ] }),
          /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ g.jsx(qt, { htmlFor: "new-user-password", children: "初始密码" }),
            /* @__PURE__ */ g.jsx(
              Vn,
              {
                id: "new-user-password",
                name: "password",
                type: "password",
                required: !0,
                minLength: 12,
                maxLength: 128,
                autoComplete: "new-password",
                placeholder: "12–128 位"
              }
            )
          ] }),
          /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ g.jsx(qt, { htmlFor: "new-user-confirmation", children: "确认初始密码" }),
            /* @__PURE__ */ g.jsx(
              Vn,
              {
                id: "new-user-confirmation",
                name: "confirmation",
                type: "password",
                required: !0,
                minLength: 12,
                maxLength: 128,
                autoComplete: "new-password",
                placeholder: "再次输入初始密码"
              }
            )
          ] }),
          o && /* @__PURE__ */ g.jsx("p", { role: "alert", className: "credit-form-error", children: o }),
          /* @__PURE__ */ g.jsxs("div", { className: "credit-filter-actions", children: [
            /* @__PURE__ */ g.jsx(Oe, { type: "submit", size: "sm", children: a ? "正在创建…" : "创建用户" }),
            /* @__PURE__ */ g.jsx(Oe, { type: "button", variant: "ghost", size: "sm", onClick: n, children: "取消" })
          ] })
        ] })
      ]
    }
  );
}
function MA({ settings: n }) {
  const [a, l] = x.useState(n.registration_enabled), [o, s] = x.useState(!1), [u, d] = x.useState(""), [m, h] = x.useState(!1);
  async function p(b) {
    b.preventDefault(), b.stopPropagation(), s(!0), d(""), h(!1);
    try {
      await pc(
        "/api/admin/settings",
        { registration_enabled: a },
        "PUT"
      ), d(
        a ? "已保存：公开注册已开启" : "已保存：公开注册已关闭"
      );
    } catch (v) {
      h(!0), d(
        v instanceof TypeError ? "无法连接服务，请稍后重试" : v.message
      );
    } finally {
      s(!1);
    }
  }
  return /* @__PURE__ */ g.jsxs("form", { className: "credit-system-settings", onSubmit: p, children: [
    /* @__PURE__ */ g.jsxs("fieldset", { disabled: o, children: [
      /* @__PURE__ */ g.jsxs("div", { className: "credit-switch-row", children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx(qt, { htmlFor: "registration-enabled", children: "开放用户注册" }),
          /* @__PURE__ */ g.jsx("p", { id: "registration-help", children: "关闭后仅管理员可创建新账号，不影响已有用户登录。" })
        ] }),
        /* @__PURE__ */ g.jsx(
          Qs,
          {
            id: "registration-enabled",
            checked: a,
            onCheckedChange: (b) => {
              l(b), d("");
            },
            "aria-describedby": "registration-help"
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx(Oe, { type: "submit", size: "sm", children: o ? "正在保存…" : "保存系统设置" })
    ] }),
    u && /* @__PURE__ */ g.jsx(
      "p",
      {
        className: m ? "credit-form-error" : "credit-form-feedback",
        role: m ? "alert" : "status",
        children: u
      }
    )
  ] });
}
function Tx({
  plan: n,
  onSaved: a,
  onStateChange: l
}) {
  const [o, s] = x.useState(n.enabled), [u, d] = x.useState(n.time), [m, h] = x.useState(!1), [p, b] = x.useState(""), [v, w] = x.useState(!1);
  x.useEffect(() => {
    l?.({
      dirty: o !== n.enabled || u !== n.time,
      saving: m
    });
  }, [o, u, n.enabled, n.time, m, l]);
  async function T(E) {
    E.preventDefault(), E.stopPropagation();
    const O = E.currentTarget, C = { enabled: o, time: String(new FormData(O).get("time")) };
    h(!0), w(!1), b("");
    try {
      await pc("/api/settings", C, "PUT"), b(
        o ? `已保存：每天 ${C.time} 自动签到` : "已保存：每日签到已暂停"
      ), hc(O, "credit:plan-saved", C), a?.();
    } catch (D) {
      w(!0), b(
        D instanceof TypeError ? "无法连接服务，请稍后重试" : D.message
      );
    } finally {
      h(!1);
    }
  }
  return /* @__PURE__ */ g.jsxs("form", { id: "plan-form", className: "credit-plan-form", onSubmit: T, children: [
    /* @__PURE__ */ g.jsxs("fieldset", { disabled: m, children: [
      /* @__PURE__ */ g.jsx(CA, { initialValue: n.time, onChange: d }),
      /* @__PURE__ */ g.jsxs("div", { className: "credit-switch-row", children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx(qt, { htmlFor: "plan-enabled", children: "自动签到" }),
          /* @__PURE__ */ g.jsx("p", { id: "plan-enabled-help", children: "对你绑定的全部微博账号生效" })
        ] }),
        /* @__PURE__ */ g.jsx(
          Qs,
          {
            id: "plan-enabled",
            checked: o,
            onCheckedChange: s,
            "aria-describedby": "plan-enabled-help"
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx(Oe, { type: "submit", className: "w-full h-9 text-xs", children: m ? "正在保存…" : "保存签到计划" })
    ] }),
    p && /* @__PURE__ */ g.jsx(
      "p",
      {
        id: "plan-feedback",
        className: v ? "credit-form-error" : "credit-form-feedback",
        role: v ? "alert" : "status",
        children: p
      }
    )
  ] });
}
function DA() {
  const [n, a] = x.useState(
    () => document.documentElement.classList.contains("dark")
  );
  return /* @__PURE__ */ g.jsxs("div", { className: "credit-switch-row", children: [
    /* @__PURE__ */ g.jsx(qt, { htmlFor: "client-dark-mode", children: "深色模式" }),
    /* @__PURE__ */ g.jsx(
      Qs,
      {
        id: "client-dark-mode",
        checked: n,
        onCheckedChange: (l) => {
          a(l), document.dispatchEvent(
            new CustomEvent("credit:theme", { detail: { dark: l } })
          );
        }
      }
    )
  ] });
}
function _A() {
  const [n, a] = x.useState(
    () => document.querySelector(
      'meta[name="registration-enabled"]'
    )?.content !== "false"
  ), [l, o] = x.useState("login"), [s, u] = x.useState(!1), [d, m] = x.useState(""), h = l === "register";
  async function p(b) {
    b.preventDefault(), m("");
    const v = b.currentTarget, w = new FormData(v);
    if (h && w.get("password") !== w.get("confirm-password")) {
      m("两次密码输入不一致");
      return;
    }
    u(!0);
    try {
      const T = await pc(`/api/auth/${l}`, {
        username: w.get("username"),
        password: w.get("password")
      });
      location.assign(
        new URLSearchParams(location.search).get("next") === "admin" && T.user.role === "admin" ? "/admin" : "/"
      );
    } catch (T) {
      h && T instanceof Ex && T.code === "registration_closed" && (a(!1), o("login")), m(
        T instanceof TypeError ? "无法连接服务，请检查网络后重试" : T.message
      );
    } finally {
      u(!1);
    }
  }
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: /* @__PURE__ */ g.jsxs(
    Nb,
    {
      value: l,
      onValueChange: (b) => {
        o(b), m("");
      },
      children: [
        n && /* @__PURE__ */ g.jsx(Ab, { className: "credit-auth-tabs h-10 w-full gap-1 rounded-full border-0 bg-muted p-1", children: [["login", "登录"], ["register", "注册"]].map(([b, v]) => /* @__PURE__ */ g.jsx(kb, { value: b, disabled: s, className: "h-full rounded-full", children: v }, b)) }),
        !n && /* @__PURE__ */ g.jsx("p", { className: "credit-registration-closed", children: "注册已关闭，请联系管理员开通账号。" }),
        (n ? ["login", "register"] : ["login"]).map(
          (b) => /* @__PURE__ */ g.jsx(jb, { value: b, children: /* @__PURE__ */ g.jsx(
            "form",
            {
              id: "auth-form",
              className: "credit-auth-form",
              onSubmit: p,
              children: /* @__PURE__ */ g.jsxs("fieldset", { disabled: s, children: [
                /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
                  /* @__PURE__ */ g.jsx(qt, { htmlFor: `${b}-username`, children: "平台用户名" }),
                  /* @__PURE__ */ g.jsx(
                    Vn,
                    {
                      id: `${b}-username`,
                      name: "username",
                      autoComplete: "username",
                      required: !0,
                      minLength: 3,
                      maxLength: 32,
                      placeholder: "输入你的用户名",
                      className: "h-10 text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
                  /* @__PURE__ */ g.jsx(qt, { htmlFor: `${b}-password`, children: "密码" }),
                  /* @__PURE__ */ g.jsx(
                    Vn,
                    {
                      id: `${b}-password`,
                      name: "password",
                      type: "password",
                      autoComplete: h ? "new-password" : "current-password",
                      required: !0,
                      minLength: h ? 12 : 1,
                      maxLength: 128,
                      placeholder: "输入你的密码",
                      "aria-describedby": h ? "password-hint" : void 0,
                      className: "h-10 text-sm"
                    }
                  ),
                  h && /* @__PURE__ */ g.jsx("small", { id: "password-hint", children: "12–128 位，建议混合使用字母、数字和符号" })
                ] }),
                h && /* @__PURE__ */ g.jsxs("div", { className: "credit-field", children: [
                  /* @__PURE__ */ g.jsx(qt, { htmlFor: "confirm-password", children: "确认密码" }),
                  /* @__PURE__ */ g.jsx(
                    Vn,
                    {
                      id: "confirm-password",
                      name: "confirm-password",
                      type: "password",
                      autoComplete: "new-password",
                      required: !0,
                      maxLength: 128,
                      placeholder: "再次输入密码",
                      className: "h-10 text-sm"
                    }
                  )
                ] }),
                d && /* @__PURE__ */ g.jsx("div", { className: "error-box", role: "alert", children: d }),
                /* @__PURE__ */ g.jsx(Oe, { type: "submit", className: "mt-0.5 h-10 w-full rounded-full text-sm", children: s ? h ? "正在创建…" : "正在登录…" : h ? "创建账号" : "登录平台 →" })
              ] })
            }
          ) }, b)
        )
      ]
    }
  ) });
}
const Ox = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  active: "执行中",
  none: "无记录"
}, NA = () => new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(/* @__PURE__ */ new Date());
function AA(n, a, l) {
  if (!n) return "";
  const o = new URLSearchParams({ account_id: n });
  return a === "month" ? o.set("month", l) : o.set("period", a), `/api/calendar?${o}`;
}
function Mx(n, a) {
  const [l, o] = x.useState({ url: "", loading: !1 });
  return x.useEffect(() => {
    if (!n) return;
    const s = new AbortController();
    return o((u) => ({
      url: n,
      data: u.url === n ? u.data : void 0,
      loading: !0
    })), (async () => {
      try {
        const u = await fetch(n, { signal: s.signal });
        if (u.status === 401) {
          location.assign("/login");
          return;
        }
        const d = await u.json();
        if (!u.ok)
          throw new Error(
            typeof d.detail == "string" ? d.detail : "暂时无法加载，请重试"
          );
        s.signal.aborted || o({ url: n, data: d, loading: !1 });
      } catch (u) {
        s.signal.aborted || o((d) => ({
          url: n,
          data: d.url === n ? d.data : void 0,
          error: u instanceof TypeError ? "无法连接服务，请稍后重试" : u.message,
          loading: !1
        }));
      }
    })(), () => s.abort();
  }, [n, a]), l.url === n ? l : { url: n, loading: !!n };
}
const kA = ["一", "二", "三", "四", "五", "六", "日"], Dx = 864e5;
function jA(n, a) {
  return new Date(Date.parse(n) - (a - 1) * Dx).toISOString().slice(0, 10);
}
function _x(n) {
  return (new Date(n).getUTCDay() + 6) % 7;
}
function Nx({ day: n, accountId: a, today: l, includeYear: o = !1 }) {
  if (!n) return /* @__PURE__ */ g.jsx("span", { className: "footprint-day placeholder", "aria-hidden": "true" });
  const [s, u, d] = n.date.split("-").map(Number), m = n.date > l, h = `${o ? `${s}年` : ""}${u}月${d}日，${m ? "未到日期" : Ox[n.status]}`;
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      type: "button",
      className: `footprint-day ${m ? "future" : n.status}`,
      "data-action": "day-details",
      "data-id": a,
      "data-date": n.date,
      disabled: m,
      "aria-label": h,
      "aria-current": n.date === l ? "date" : void 0,
      title: h,
      children: !o && d
    }
  );
}
function RA({ monthKey: n, days: a, accountId: l, today: o, loading: s }) {
  const [u, d] = n.split("-").map(Number), m = new Date(Date.UTC(u, d, 0)).getUTCDate(), h = _x(`${n}-01`);
  return /* @__PURE__ */ g.jsxs("div", { className: "footprint-grid", role: "group", "aria-label": "本月每日签到状态", "aria-busy": s, children: [
    kA.map((p) => /* @__PURE__ */ g.jsx("span", { "aria-hidden": "true", children: p }, p)),
    Array.from({ length: h }, (p, b) => /* @__PURE__ */ g.jsx("span", { "aria-hidden": "true" }, `leading-${b}`)),
    Array.from({ length: m }, (p, b) => /* @__PURE__ */ g.jsx(Nx, { day: a?.[b], accountId: l, today: o }, b))
  ] });
}
function zA({ days: n, accountId: a, today: l, start: o, length: s, label: u, loading: d }) {
  const m = x.useRef(null), h = Date.parse(o), p = _x(o), b = Math.ceil((p + s) / 7);
  return x.useLayoutEffect(() => {
    const v = m.current;
    v && (v.scrollLeft = v.scrollWidth - v.clientWidth);
  }, [o]), /* @__PURE__ */ g.jsx("div", { className: "footprint-year-scroll", ref: m, role: "region", "aria-label": `${u}每日签到状态，可横向滚动`, tabIndex: 0, children: /* @__PURE__ */ g.jsx("div", { className: "footprint-year-grid", "aria-busy": d, children: Array.from({ length: b }, (v, w) => {
    const T = w * 7 - p, E = Array.from({ length: 7 }, (C, D) => {
      const _ = T + D;
      return _ >= 0 && _ < s ? new Date(h + _ * Dx) : void 0;
    }), O = E.find((C) => C?.getUTCDate() === 1);
    return /* @__PURE__ */ g.jsxs("div", { className: "footprint-week", children: [
      /* @__PURE__ */ g.jsx("span", { className: "footprint-week-label", "aria-hidden": "true", children: O ? s > 365 && O.getUTCMonth() === 0 ? `${O.getUTCFullYear()}年` : `${O.getUTCMonth() + 1}月` : "" }),
      E.map((C, D) => C ? /* @__PURE__ */ g.jsx(Nx, { day: n?.[T + D], accountId: a, today: l, includeYear: !0 }, D) : /* @__PURE__ */ g.jsx("span", { "aria-hidden": "true" }, D))
    ] }, w);
  }) }) });
}
function HA() {
  return /* @__PURE__ */ g.jsx("div", { className: "footprint-legend", children: Object.entries(Ox).map(([n, a]) => /* @__PURE__ */ g.jsxs("span", { children: [
    /* @__PURE__ */ g.jsx("i", { className: n, "aria-hidden": "true" }),
    a
  ] }, n)) });
}
const ad = { month: "本月", year: "近一年", two_years: "近两年" };
function Tv({ value: n }) {
  const [a] = x.useState(
    () => n > 0 && window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  ), [l, o] = x.useState(a ? 0 : n);
  return x.useEffect(() => {
    if (!a) return;
    const s = performance.now();
    let u = requestAnimationFrame(function d(m) {
      const h = Math.min(1, Math.max(0, m - s) / 520);
      o(Math.round(n * (1 - (1 - h) ** 3))), h < 1 && (u = requestAnimationFrame(d));
    });
    return () => cancelAnimationFrame(u);
  }, [a, n]), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs("span", { className: "footprint-count", children: [
      /* @__PURE__ */ g.jsx("span", { className: "footprint-count-target", children: n }),
      /* @__PURE__ */ g.jsx("span", { className: "footprint-count-display", "data-animated": a, "aria-hidden": "true", children: l })
    ] }),
    /* @__PURE__ */ g.jsx("small", { children: "天" })
  ] });
}
function YA({ accounts: n }) {
  const [a, l] = x.useState(n), [o, s] = x.useState(n[0]?.id || ""), [u, d] = x.useState("month"), [m, h] = x.useState(0), p = NA(), b = p.slice(0, 7), [v, w] = b.split("-").map(Number), T = Mx(AA(o, u, b), m), E = T.data, O = T.loading && !E, C = E?.today ?? p, D = u === "month" ? 0 : u === "year" ? 365 : 730, _ = D ? E?.start ?? jA(C, D) : "", M = D ? `${_.replaceAll("-", "/")} – ${C.replaceAll("-", "/")}` : `${v}年${w}月`;
  return x.useEffect(() => {
    const N = (z) => {
      const k = z.detail?.accounts;
      k && (l(k), s((Y) => k.some((B) => B.id === Y) ? Y : k[0]?.id || "")), h((Y) => Y + 1);
    };
    return document.addEventListener("credit:calendar-refresh", N), () => document.removeEventListener("credit:calendar-refresh", N);
  }, []), /* @__PURE__ */ g.jsx("section", { className: "card checkin-footprint", "aria-labelledby": "footprint-heading", children: /* @__PURE__ */ g.jsxs(Nb, { className: "gap-4", value: u, onValueChange: (N) => d(N), children: [
    /* @__PURE__ */ g.jsxs("div", { className: "footprint-heading", children: [
      /* @__PURE__ */ g.jsx("h2", { id: "footprint-heading", children: "签到足迹" }),
      /* @__PURE__ */ g.jsxs("p", { className: "footprint-period", children: [
        M,
        " · 北京时间"
      ] })
    ] }),
    o ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsxs("div", { className: "footprint-toolbar", children: [
        a.length > 1 && /* @__PURE__ */ g.jsx("div", { className: "footprint-account", children: /* @__PURE__ */ g.jsx(
          Jl,
          {
            id: "footprint-account",
            label: "签到足迹的微博账号",
            value: o,
            onChange: s,
            options: a.map((N) => ({
              value: N.id,
              label: `${N.nickname || "微博用户"} · ${N.uid}`
            }))
          }
        ) }),
        /* @__PURE__ */ g.jsx(Ab, { "aria-label": "签到足迹时间范围", className: "footprint-ranges h-9 gap-1 rounded-full border-0 bg-muted p-1", children: Object.entries(ad).map(([N, z]) => /* @__PURE__ */ g.jsx(kb, { value: N, className: "h-full rounded-full px-3 text-xs max-[640px]:px-2", children: z }, N)) })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "footprint-body", "data-period": u, children: [
        /* @__PURE__ */ g.jsxs("dl", { className: "footprint-metrics", children: [
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsxs("dt", { children: [
              ad[u],
              "已签"
            ] }),
            /* @__PURE__ */ g.jsx("dd", { "data-testid": "footprint-success-days", children: E ? /* @__PURE__ */ g.jsx(Tv, { value: E.summary.success_days }, E.summary.success_days) : "—" })
          ] }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("dt", { children: "连续签到" }),
            /* @__PURE__ */ g.jsx("dd", { "data-testid": "footprint-streak", children: E ? /* @__PURE__ */ g.jsx(Tv, { value: E.summary.streak }, E.summary.streak) : "—" })
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs(jb, { value: u, className: "footprint-chart", children: [
          O && /* @__PURE__ */ g.jsx("p", { className: "sr-only", role: "status", children: "正在加载签到足迹…" }),
          D ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            /* @__PURE__ */ g.jsx(
              zA,
              {
                accountId: o,
                days: E?.days,
                today: C,
                start: _,
                length: D,
                label: ad[u],
                loading: O
              }
            ),
            /* @__PURE__ */ g.jsx("p", { className: "footprint-year-hint", children: "左右滑动查看更多日期" })
          ] }) : /* @__PURE__ */ g.jsx(RA, { monthKey: b, accountId: o, days: E?.days, today: C, loading: O }),
          /* @__PURE__ */ g.jsx(HA, {}),
          T.error && /* @__PURE__ */ g.jsxs("div", { className: "footprint-error", role: "alert", children: [
            /* @__PURE__ */ g.jsx("span", { children: T.error }),
            /* @__PURE__ */ g.jsx(Oe, { type: "button", variant: "outline", size: "sm", onClick: () => h((N) => N + 1), children: "重试" })
          ] })
        ] }, u)
      ] })
    ] }) : /* @__PURE__ */ g.jsx("p", { className: "footprint-empty", children: "绑定微博后，在这里查看每天的签到进度。" })
  ] }) });
}
const Ax = {
  done: "今日已签到",
  pending: "待签到",
  failed: "签到失败",
  unknown: "待确认",
  done_before: "此前已签到",
  success: "本次签到成功",
  network_error: "接口异常"
}, Ov = {
  unscanned: "尚未扫描关注的超话。",
  scanning: "正在读取微博关注列表…",
  error: "扫描失败，请稍后刷新超话。",
  expired: "微博登录已失效，请重新扫码。",
  partial: "列表未完整读取，当前仅展示已读取的部分，请刷新重试。"
};
async function kx(n, a, l = "GET") {
  const o = await fetch(n, {
    method: l,
    signal: a,
    headers: { "X-Requested-With": "WeiboPortal" }
  });
  o.status === 401 && location.assign("/login");
  const s = await o.json();
  if (!o.ok)
    throw new Error(
      typeof s.detail == "string" ? s.detail : "暂时无法加载，请稍后重试"
    );
  return s;
}
function UA({
  items: n,
  historical: a = !1
}) {
  return /* @__PURE__ */ g.jsx("ul", { className: "topic-list", children: n.map((l, o) => /* @__PURE__ */ g.jsxs("li", { children: [
    /* @__PURE__ */ g.jsx("span", { className: "topic-name", children: l.name }),
    /* @__PURE__ */ g.jsx("span", { className: `topic-status ${l.status}`, children: a && l.status === "pending" ? "未执行" : a && l.status === "unknown" ? "状态未识别" : Ax[l.status] || "待确认" })
  ] }, o)) });
}
function BA({
  accountId: n,
  selection: a,
  allItems: l,
  items: o,
  ready: s,
  complete: u,
  configuration: d = !1,
  searchControl: m,
  onStateChange: h,
  onCancel: p,
  onSaved: b
}) {
  const [v, w] = x.useState({}), [T, E] = x.useState({}), [O, C] = x.useState({}), D = T[n] && T[n].revision > a.revision ? T[n] : a, _ = v[n] || D, M = O[n] || {}, N = new Set(_.topic_ids), z = _.mode !== D.mode || [..._.topic_ids].sort().join(",") !== [...D.topic_ids].sort().join(",");
  x.useEffect(() => {
    h?.({ dirty: z, saving: !!M.saving });
  }, [z, M.saving, h]);
  function k(X) {
    w((ee) => ({ ...ee, [n]: X })), C((ee) => ({ ...ee, [n]: {} }));
  }
  function Y(X) {
    const ee = new Set(
      _.mode === "all" ? l.flatMap((ie) => ie.id ? [ie.id] : []) : N
    );
    o.forEach((ie) => {
      ie.id && (X ? ee.add(ie.id) : ee.delete(ie.id));
    }), k({ ..._, mode: "selected", topic_ids: [...ee] });
  }
  async function B() {
    C((X) => ({ ...X, [n]: { saving: !0 } }));
    try {
      const X = await fetch(
        `/api/accounts/${encodeURIComponent(n)}/topics/selection`,
        {
          method: "PUT",
          headers: {
            "X-Requested-With": "WeiboPortal",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            mode: _.mode,
            topic_ids: _.mode === "all" ? [] : _.topic_ids
          })
        }
      );
      X.status === 401 && location.assign("/login");
      const ee = await X.json();
      if (!X.ok)
        throw new Error(
          typeof ee.detail == "string" ? ee.detail : "保存失败，请稍后重试"
        );
      E((ie) => ({ ...ie, [n]: ee.selection })), w((ie) => {
        const H = { ...ie };
        return delete H[n], H;
      }), C((ie) => ({
        ...ie,
        [n]: { message: "已保存" }
      })), document.dispatchEvent(
        new CustomEvent("credit:topics-saved", {
          detail: { accountId: n, selection: ee.selection }
        })
      ), b?.();
    } catch (X) {
      C((ee) => ({
        ...ee,
        [n]: {
          error: X instanceof TypeError ? "无法连接服务，请稍后重试" : X.message
        }
      }));
    }
  }
  const Z = _.topic_ids.filter(
    (X) => !l.some((ee) => ee.id === X)
  ).length, te = o.flatMap((X) => X.id ? [X.id] : []), re = te.filter(
    (X) => _.mode === "all" || N.has(X)
  ).length, ne = te.length > 0 && re === te.length;
  return s ? /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: `topic-selection${d ? " topic-configuration" : ""}`,
      children: [
        /* @__PURE__ */ g.jsxs("div", { className: "selection-settings", children: [
          /* @__PURE__ */ g.jsx(
            "div",
            {
              className: "selection-mode",
              role: d ? "radiogroup" : "group",
              "aria-label": "签到范围",
              children: [
                ["all", "全部签到"],
                ["selected", "自选超话"]
              ].map(([X, ee]) => /* @__PURE__ */ g.jsx(
                Oe,
                {
                  type: "button",
                  size: "sm",
                  variant: "ghost",
                  className: d ? "justify-start whitespace-normal h-auto px-3 py-3" : void 0,
                  role: d ? "radio" : void 0,
                  "aria-checked": d ? _.mode === X : void 0,
                  "aria-pressed": d ? void 0 : _.mode === X,
                  title: X === "selected" ? "只签到勾选的超话；新关注需手动勾选" : "包含以后新关注的超话",
                  disabled: M.saving || X === "selected" && _.mode === "all" && !u,
                  onClick: () => {
                    X !== _.mode && k({
                      ..._,
                      mode: X,
                      topic_ids: X === "all" ? [] : l.flatMap(
                        (ie) => ie.id ? [ie.id] : []
                      )
                    });
                  },
                  children: d ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                    /* @__PURE__ */ g.jsx("span", { className: "mode-indicator", "aria-hidden": "true" }),
                    /* @__PURE__ */ g.jsx("span", { children: X === "all" ? "全部关注的超话" : "只签到选中的超话" })
                  ] }) : ee
                },
                X
              ))
            }
          ),
          !d && /* @__PURE__ */ g.jsx("span", { className: "selection-count", children: _.mode === "all" ? u ? "新关注也会自动签到" : "刷新完整列表后可自选" : `已选 ${N.size} / ${l.length}` })
        ] }),
        d && _.mode === "all" && /* @__PURE__ */ g.jsxs("p", { className: "topics-notice", children: [
          u ? `将为全部 ${l.length} 个关注超话签到` : "将为全部关注超话签到，当前列表尚未读完",
          "，以后新关注的也会自动加入。",
          !u && "刷新完整列表后可改为自选。"
        ] }),
        d && _.mode === "selected" && m,
        (!d || _.mode === "selected") && /* @__PURE__ */ g.jsxs("div", { className: "selection-list-heading", children: [
          /* @__PURE__ */ g.jsxs(
            Oe,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              className: "selection-toggle",
              role: "checkbox",
              "aria-checked": ne ? !0 : re > 0 ? "mixed" : !1,
              "aria-label": o.length === l.length ? "全选超话" : "全选搜索结果",
              disabled: M.saving || !te.length || _.mode === "all" && !u,
              onClick: () => Y(!ne),
              children: [
                /* @__PURE__ */ g.jsx("span", { className: "topic-check", "aria-hidden": "true", children: ne ? /* @__PURE__ */ g.jsx(Go, { size: 14 }) : re > 0 ? /* @__PURE__ */ g.jsx(HM, { size: 14 }) : null }),
                o.length === l.length ? "全选" : `搜索结果 ${o.length}`
              ]
            }
          ),
          /* @__PURE__ */ g.jsx("span", { className: "topic-status", children: d ? `已选 ${N.size} 个` : "今日状态" })
        ] }),
        Z > 0 && _.mode === "selected" && /* @__PURE__ */ g.jsxs("p", { className: "topics-notice", children: [
          Z,
          " 个已选超话未在列表中找到",
          /* @__PURE__ */ g.jsx(
            Oe,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              disabled: M.saving,
              onClick: () => k({
                ..._,
                topic_ids: _.topic_ids.filter(
                  (X) => l.some((ee) => ee.id === X)
                )
              }),
              children: "移除"
            }
          )
        ] }),
        o.length > 0 && (!d || _.mode === "selected") && /* @__PURE__ */ g.jsx("ul", { className: "topic-list selectable-topic-list", children: o.map((X, ee) => {
          const ie = _.mode === "all" || !!X.id && N.has(X.id);
          return /* @__PURE__ */ g.jsxs("li", { children: [
            /* @__PURE__ */ g.jsxs(
              Oe,
              {
                type: "button",
                variant: "ghost",
                className: "topic-choice whitespace-normal h-auto justify-start px-2 py-0",
                role: "checkbox",
                "aria-checked": ie,
                "aria-label": X.name,
                disabled: !X.id || M.saving || _.mode === "all" && !u,
                onClick: () => {
                  const H = new Set(
                    _.mode === "all" ? l.flatMap((F) => F.id ? [F.id] : []) : N
                  );
                  H.has(X.id) ? H.delete(X.id) : H.add(X.id), k({
                    ..._,
                    mode: "selected",
                    topic_ids: [...H]
                  });
                },
                children: [
                  /* @__PURE__ */ g.jsx("span", { className: "topic-check", "aria-hidden": "true", children: ie && /* @__PURE__ */ g.jsx(Go, { size: 14 }) }),
                  /* @__PURE__ */ g.jsxs("span", { className: "topic-name", children: [
                    X.name,
                    !X.id && /* @__PURE__ */ g.jsx("small", { children: "请刷新后选择" })
                  ] })
                ]
              }
            ),
            !d && /* @__PURE__ */ g.jsx("span", { className: `topic-status ${X.status}`, children: Ax[X.status] || "待确认" })
          ] }, X.id || ee);
        }) }),
        _.mode === "selected" && !N.size && /* @__PURE__ */ g.jsx("p", { className: "topics-notice", children: z ? "未选择超话，保存后暂停这个微博的签到。" : "这个微博已暂停签到，勾选超话即可恢复。" }),
        M.error && /* @__PURE__ */ g.jsx("p", { role: "alert", className: "credit-form-error", children: M.error }),
        d || z ? /* @__PURE__ */ g.jsxs("div", { className: "selection-footer", children: [
          /* @__PURE__ */ g.jsx("span", { className: "selection-count", children: z ? "有未保存的修改" : "保存后用于手动和定时签到" }),
          /* @__PURE__ */ g.jsxs("div", { className: "selection-actions", children: [
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                size: "sm",
                variant: "ghost",
                disabled: M.saving,
                onClick: () => d ? p?.() : k(D),
                children: "取消"
              }
            ),
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                size: "sm",
                disabled: M.saving || !z,
                onClick: B,
                children: M.saving ? "保存中…" : d ? "保存设置" : "保存"
              }
            )
          ] })
        ] }) : M.message ? /* @__PURE__ */ g.jsx("p", { role: "status", className: "selection-saved", children: M.message }) : null
      ]
    }
  ) : null;
}
function jx({
  accounts: n,
  configuration: a = !1,
  onStateChange: l,
  onCancel: o,
  onSaved: s
}) {
  const [u, d] = x.useState(n), [m, h] = x.useState(n[0]?.id || ""), [p, b] = x.useState(""), [v, w] = x.useState({
    accountId: "",
    method: "GET",
    revision: 0
  }), [T, E] = x.useState({ accountId: "", loading: !1 }), O = T.accountId === m ? T : { loading: !!m }, C = O.scan;
  function D(M = "GET") {
    w((N) => ({
      accountId: m,
      method: M,
      revision: N.revision + 1
    }));
  }
  x.useEffect(() => {
    if (!m) return;
    const M = new AbortController();
    E((z) => ({
      accountId: m,
      scan: z.accountId === m ? z.scan : void 0,
      selection: z.accountId === m ? z.selection : void 0,
      loading: !0
    }));
    const N = v.accountId === m ? v.method : "GET";
    return kx(
      `/api/accounts/${encodeURIComponent(m)}/topics${N === "POST" ? "/refresh" : ""}`,
      M.signal,
      N
    ).then(({ scan: z, selection: k }) => {
      M.signal.aborted || (E({ accountId: m, scan: z, selection: k, loading: !1 }), document.dispatchEvent(
        new CustomEvent("credit:topics-loaded", {
          detail: { accountId: m, scan: z, selection: k }
        })
      ));
    }).catch((z) => {
      M.signal.aborted || E((k) => ({
        ...k,
        loading: !1,
        error: z instanceof TypeError ? "无法连接服务，请稍后重试" : z.message
      }));
    }), () => M.abort();
  }, [m, v]), x.useEffect(() => {
    if (!(!C || O.loading || O.error)) {
      if (C.status === "unscanned")
        w((M) => ({
          accountId: m,
          method: "POST",
          revision: M.revision + 1
        }));
      else if (C.status === "scanning") {
        const M = setTimeout(
          () => w((N) => ({
            accountId: m,
            method: "GET",
            revision: N.revision + 1
          })),
          2e3
        );
        return () => clearTimeout(M);
      }
    }
  }, [m, C, O.loading, O.error]), x.useEffect(() => {
    const M = (z) => {
      const k = z.detail?.accounts;
      k && !a && (d(k), h(
        (Y) => k.some((B) => B.id === Y) ? Y : k[0]?.id || ""
      )), w((Y) => ({
        accountId: "",
        method: "GET",
        revision: Y.revision + 1
      }));
    }, N = (z) => {
      h(z.detail.id), b("");
    };
    return document.addEventListener("credit:calendar-refresh", M), document.addEventListener("credit:topics-select", N), () => {
      document.removeEventListener("credit:calendar-refresh", M), document.removeEventListener("credit:topics-select", N);
    };
  }, [a]);
  const _ = (C?.items || []).filter(
    (M) => M.name.toLocaleLowerCase().includes(p.trim().toLocaleLowerCase())
  );
  return /* @__PURE__ */ g.jsxs(
    "section",
    {
      id: "followed-topics",
      className: `followed-topics${a ? " configured-topics" : ""}`,
      "aria-label": "关注的超话",
      children: [
        /* @__PURE__ */ g.jsxs("div", { className: "topics-heading", children: [
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("h2", { children: a ? "签到范围" : "超话签到" }),
            !a && C?.scanned_at ? /* @__PURE__ */ g.jsxs("p", { children: [
              C.complete ? "关注" : "已读取",
              " ",
              C.items.length,
              " 个",
              C.fresh ? ` · 今日已签 ${C.items.filter((M) => M.status === "done").length} 个` : " · 今日状态待刷新"
            ] }) : null
          ] }),
          m && /* @__PURE__ */ g.jsxs(
            Oe,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              title: C?.scanned_at ? `同步于 ${new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(C.scanned_at * 1e3)}` : "刷新关注列表",
              "aria-label": "刷新超话",
              disabled: O.loading || C?.status === "scanning",
              onClick: () => D("POST"),
              children: [
                /* @__PURE__ */ g.jsx(t0, { size: 14 }),
                O.loading || C?.status === "scanning" ? "扫描中…" : "刷新"
              ]
            }
          )
        ] }),
        u.length ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          !a && /* @__PURE__ */ g.jsxs("div", { className: "topics-toolbar", children: [
            /* @__PURE__ */ g.jsx("div", { className: "credit-field", children: /* @__PURE__ */ g.jsx(
              Jl,
              {
                id: "topics-account",
                label: "微博账号",
                value: m,
                onChange: (M) => {
                  h(M), b("");
                },
                options: u.map((M) => ({
                  value: M.id,
                  label: `${M.nickname || "微博用户"} · ${M.uid}`
                }))
              }
            ) }),
            /* @__PURE__ */ g.jsxs("div", { className: "topic-search", children: [
              /* @__PURE__ */ g.jsx(dd, { size: 14, "aria-hidden": "true" }),
              /* @__PURE__ */ g.jsx(
                Vn,
                {
                  type: "search",
                  placeholder: "搜索超话",
                  "aria-label": "搜索超话",
                  className: "pl-8",
                  value: p,
                  onChange: (M) => b(M.target.value)
                }
              )
            ] })
          ] }),
          O.error && /* @__PURE__ */ g.jsxs("p", { role: "alert", className: "credit-form-error", children: [
            O.error,
            " ",
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                onClick: () => D(),
                children: "重试加载"
              }
            )
          ] }),
          C && Ov[C.status] && /* @__PURE__ */ g.jsx(
            "p",
            {
              className: "topics-notice",
              role: C.status === "error" || C.status === "expired" ? "alert" : "status",
              children: Ov[C.status]
            }
          ),
          O.loading && !C && /* @__PURE__ */ g.jsx("p", { className: "topics-empty", role: "status", children: "正在加载超话…" }),
          /* @__PURE__ */ g.jsx(
            BA,
            {
              accountId: m,
              selection: O.selection || { mode: "all", topic_ids: [], revision: 0 },
              allItems: C?.items || [],
              items: _,
              ready: !!C && !!O.selection,
              complete: !!C?.complete,
              configuration: a,
              searchControl: /* @__PURE__ */ g.jsxs("div", { className: "topic-search", children: [
                /* @__PURE__ */ g.jsx(dd, { size: 14, "aria-hidden": "true" }),
                /* @__PURE__ */ g.jsx(
                  Vn,
                  {
                    type: "search",
                    placeholder: "搜索超话",
                    "aria-label": "搜索超话",
                    className: "pl-8",
                    value: p,
                    onChange: (M) => b(M.target.value)
                  }
                )
              ] }),
              onStateChange: l,
              onCancel: o,
              onSaved: s
            }
          ),
          !_.length && C?.scanned_at ? /* @__PURE__ */ g.jsx("p", { className: "topics-empty", children: p ? "没有匹配的超话" : C.complete ? "当前没有关注的超话" : "暂未获取到超话，请刷新重试" }) : null
        ] }) : /* @__PURE__ */ g.jsx("p", { className: "topics-empty", children: "绑定微博后显示你关注的超话。" })
      ]
    }
  );
}
const Mv = (n) => ["failed", "network_error", "unknown", "pending"].includes(n.status);
function Rx({
  runId: n,
  embedded: a = !1
}) {
  const [l, o] = x.useState(a), [s, u] = x.useState(0), [d, m] = x.useState(), [h, p] = x.useState("");
  return x.useEffect(() => {
    if (!l) return;
    const b = new AbortController();
    let v;
    return p(""), kx(
      `/api/runs/${encodeURIComponent(n)}/topics`,
      b.signal
    ).then((w) => {
      b.signal.aborted || (m(w), ["queued", "running"].includes(w.status) && (v = setTimeout(() => u((T) => T + 1), 2e3)));
    }).catch((w) => {
      b.signal.aborted || p(
        w instanceof TypeError ? "无法连接服务，请稍后重试" : w.message
      );
    }), () => {
      b.abort(), clearTimeout(v);
    };
  }, [l, n, s]), /* @__PURE__ */ g.jsxs("div", { className: "run-topics", children: [
    !a && /* @__PURE__ */ g.jsx(
      Oe,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        "aria-expanded": l,
        onClick: () => o((b) => !b),
        children: l ? "收起超话明细" : "查看超话明细"
      }
    ),
    l && /* @__PURE__ */ g.jsx("div", { className: "run-topics-content", children: h ? /* @__PURE__ */ g.jsxs("p", { role: "alert", className: "credit-form-error", children: [
      h,
      " ",
      /* @__PURE__ */ g.jsx(
        Oe,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: () => u((b) => b + 1),
          children: "重试"
        }
      )
    ] }) : d ? d.items.length ? /* @__PURE__ */ g.jsx(
      UA,
      {
        items: a ? [...d.items.filter(Mv), ...d.items.filter((b) => !Mv(b))] : d.items,
        historical: !0
      }
    ) : /* @__PURE__ */ g.jsx("p", { className: "topics-notice", children: "此记录暂无逐个超话明细。" }) : /* @__PURE__ */ g.jsx("p", { role: "status", children: "正在加载超话明细…" }) })
  ] });
}
const LA = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  queued: "等待执行",
  running: "正在签到",
  expired: "登录失效",
  network_error: "网络 / 接口异常",
  no_topics: "未获取到超话",
  interrupted: "任务中断"
}, qA = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});
function Lo({ label: n, children: a }) {
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsx("dt", { children: n }),
    /* @__PURE__ */ g.jsx("dd", { children: a })
  ] });
}
function PA({ account: n, date: a, onClose: l }) {
  const [o, s] = x.useState(1), [u, d] = x.useState(0), [m, h] = x.useState(0), p = () => h((D) => D + 1), b = new URLSearchParams({
    account_id: n.id,
    start: a,
    end: a,
    page: String(o),
    page_size: "1"
  }), { data: v, loading: w, error: T } = Mx(`/api/runs?${b}`, m), E = v?.items[0], O = v?.total ?? u;
  x.useEffect(() => (document.addEventListener("credit:calendar-refresh", p), () => document.removeEventListener("credit:calendar-refresh", p)), []);
  function C(D) {
    w || (d(O), s((_) => _ + D));
  }
  return /* @__PURE__ */ g.jsxs("section", { className: "checkin-day run-receipt-paper", "aria-label": "当日签到明细", children: [
    /* @__PURE__ */ g.jsx(
      Oe,
      {
        type: "button",
        size: "icon",
        variant: "ghost",
        className: "run-receipt-close",
        "aria-label": "关闭弹窗",
        onClick: l,
        children: /* @__PURE__ */ g.jsx(n0, { "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ g.jsxs("header", { className: "run-receipt-header", children: [
      /* @__PURE__ */ g.jsx("h2", { id: "account-panel-title", children: "签到详情" }),
      /* @__PURE__ */ g.jsxs("p", { className: "mono", children: [
        E ? qA.format(E.started_at * 1e3) : a.replaceAll("-", "/"),
        " · 北京时间"
      ] })
    ] }),
    O > 1 && /* @__PURE__ */ g.jsxs("nav", { className: "checkin-day-pager", "aria-label": "当日执行记录", children: [
      /* @__PURE__ */ g.jsx(Oe, { type: "button", variant: "outline", size: "sm", disabled: o <= 1, onClick: () => C(-1), children: "上一条" }),
      /* @__PURE__ */ g.jsxs("span", { children: [
        "第 ",
        o,
        " 条 · 共 ",
        O,
        " 条"
      ] }),
      /* @__PURE__ */ g.jsx(Oe, { type: "button", variant: "outline", size: "sm", disabled: o >= O, onClick: () => C(1), children: "下一条" })
    ] }),
    T ? /* @__PURE__ */ g.jsxs("div", { className: "checkin-day-notice", role: "alert", children: [
      /* @__PURE__ */ g.jsx("p", { children: T }),
      /* @__PURE__ */ g.jsx(Oe, { type: "button", variant: "outline", size: "sm", onClick: p, children: "重试" })
    ] }) : E ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsxs("div", { className: "run-receipt-total", children: [
        /* @__PURE__ */ g.jsx("span", { children: "本次新签超话" }),
        /* @__PURE__ */ g.jsx("strong", { children: E.success })
      ] }),
      /* @__PURE__ */ g.jsxs("dl", { className: "run-receipt-fields", children: [
        /* @__PURE__ */ g.jsx(Lo, { label: "微博账号", children: n.nickname || "微博用户" }),
        /* @__PURE__ */ g.jsx(Lo, { label: "微博 UID", children: /* @__PURE__ */ g.jsx("span", { className: "mono", children: n.uid }) }),
        /* @__PURE__ */ g.jsx(Lo, { label: "执行结果", children: /* @__PURE__ */ g.jsx("span", { className: `badge ${E.status}`, children: LA[E.status] || E.status }) }),
        /* @__PURE__ */ g.jsx(Lo, { label: "触发方式", children: E.trigger === "scheduled" ? "定时签到" : "手动签到" }),
        /* @__PURE__ */ g.jsxs(Lo, { label: "签到汇总", children: [
          "此前已签 ",
          E.done_before,
          " · ",
          /* @__PURE__ */ g.jsxs("span", { className: E.failed ? "has-failures" : void 0, children: [
            "失败 ",
            E.failed
          ] }),
          " · 共 ",
          E.total
        ] }),
        E.message && /* @__PURE__ */ g.jsx(Lo, { label: "说明", children: E.message })
      ] }),
      /* @__PURE__ */ g.jsxs("section", { className: "run-receipt-topics", "aria-labelledby": "day-receipt-topics-title", children: [
        /* @__PURE__ */ g.jsx("h3", { id: "day-receipt-topics-title", children: "超话明细" }),
        /* @__PURE__ */ g.jsx(Rx, { runId: E.id, embedded: !0 }, E.id)
      ] })
    ] }) : w ? /* @__PURE__ */ g.jsx("p", { className: "checkin-day-notice", role: "status", children: "正在加载当天明细…" }) : /* @__PURE__ */ g.jsx("p", { className: "checkin-day-notice", children: "当天没有签到记录" })
  ] });
}
function GA() {
  const n = x.useRef(null), a = x.useRef(null), [l, o] = x.useState(), [s, u] = x.useState({ dirty: !1, saving: !1 }), [d, m] = x.useState(!1), [h, p] = x.useState(!1);
  x.useEffect(() => {
    const E = (O) => {
      if (n.current?.open) return;
      const { panel: C, opener: D } = O.detail;
      a.current = D, u({ dirty: !1, saving: !1 }), m(!1), o(C);
    };
    return document.addEventListener("credit:account-panel", E), () => document.removeEventListener("credit:account-panel", E);
  }, []), x.useEffect(() => {
    if (!l) return;
    n.current?.showModal();
    const E = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = E;
    };
  }, [l]), x.useEffect(() => {
    if (!h) return;
    const E = n.current;
    if (!E) return;
    let O = !1;
    const C = E.getAnimations();
    return Promise.allSettled(C.map((D) => D.finished)).then(() => {
      O || E.close();
    }), () => {
      O = !0;
    };
  }, [h]);
  function b() {
    p(!0);
  }
  function v() {
    s.saving || h || (s.dirty ? m(!0) : b());
  }
  const w = l && "account" in l ? l.account : void 0, T = l?.kind === "topics" ? "配置签到" : "每日计划";
  return /* @__PURE__ */ g.jsx(
    "dialog",
    {
      ref: n,
      className: "account-panel",
      "data-kind": l?.kind,
      "data-state": h ? "closing" : "open",
      "aria-labelledby": "account-panel-title",
      onCancel: (E) => {
        E.preventDefault(), v();
      },
      onClick: (E) => {
        E.target === E.currentTarget && v();
      },
      onClose: () => {
        o(void 0), p(!1), m(!1);
        const E = a.current;
        ((E?.isConnected ? E : E && Array.from(
          document.querySelectorAll("#main button[data-action]")
        ).find(
          ({ dataset: C }) => C.action === E.dataset.action && C.id === E.dataset.id && C.date === E.dataset.date
        )) ?? document.querySelector("#main h1"))?.focus({ preventScroll: !0 });
      },
      children: l && /* @__PURE__ */ g.jsx(fm.Provider, { value: n.current, children: /* @__PURE__ */ g.jsxs("div", { className: "account-panel-layout", inert: h, children: [
        l.kind !== "day-details" && /* @__PURE__ */ g.jsxs("header", { className: "account-panel-header", children: [
          /* @__PURE__ */ g.jsx(
            Oe,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              "aria-label": "关闭弹窗",
              disabled: s.saving,
              onClick: v,
              children: /* @__PURE__ */ g.jsx(n0, { "aria-hidden": "true" })
            }
          ),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("h2", { id: "account-panel-title", children: T }),
            w ? /* @__PURE__ */ g.jsxs("p", { children: [
              w.nickname || "微博用户",
              /* @__PURE__ */ g.jsxs("span", { children: [
                "UID ",
                w.uid
              ] })
            ] }) : /* @__PURE__ */ g.jsx("p", { children: "北京时间 · 对你绑定的全部微博生效" })
          ] })
        ] }),
        d && /* @__PURE__ */ g.jsxs("div", { className: "panel-discard", role: "alert", children: [
          /* @__PURE__ */ g.jsx("p", { children: "还有未保存的修改，是否放弃？" }),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                size: "sm",
                variant: "outline",
                onClick: () => m(!1),
                children: "继续编辑"
              }
            ),
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                size: "sm",
                variant: "destructive",
                disabled: s.saving,
                onClick: () => {
                  s.saving || b();
                },
                children: "放弃修改"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "account-panel-body", children: [
          l.kind === "topics" && /* @__PURE__ */ g.jsx(
            jx,
            {
              accounts: [l.account],
              configuration: !0,
              onStateChange: u,
              onCancel: v,
              onSaved: b
            },
            l.account.id
          ),
          l.kind === "day-details" && /* @__PURE__ */ g.jsx(PA, { account: l.account, date: l.date, onClose: v }),
          l.kind === "plan" && /* @__PURE__ */ g.jsx(
            Tx,
            {
              plan: l.plan,
              onSaved: b,
              onStateChange: u
            }
          )
        ] })
      ] }) })
    }
  );
}
const jr = 50;
async function Dv(n, a, l) {
  const o = await fetch(n, {
    method: a,
    headers: {
      ...l !== void 0 ? { "Content-Type": "application/json" } : {},
      "X-Requested-With": "WeiboPortal"
    },
    ...l !== void 0 ? { body: JSON.stringify(l) } : {}
  });
  let s;
  try {
    s = await o.json();
  } catch {
    throw new Error("服务暂时不可用，请稍后重试");
  }
  if (!o.ok)
    throw o.status === 401 && location.assign("/login"), new Error(
      typeof s.detail == "string" ? s.detail : "操作失败，请稍后重试"
    );
  return s;
}
function WA(n) {
  if (!n) return "";
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1
    }).format(new Date(n * 1e3));
  } catch {
    return "";
  }
}
function VA(n) {
  return n === "valid" ? { label: "正常", tone: "ok" } : n === "expired" ? { label: "已失效", tone: "bad" } : n === "error" ? { label: "检测异常", tone: "warn" } : { label: n || "未知", tone: "muted" };
}
function FA(n) {
  return n.ready ? { label: "运行中", tone: "ok" } : n.enabled ? n.token_configured ? n.account_uids.length === 0 ? {
    label: "待选择账号",
    tone: "warn",
    hint: "请至少勾选 1 个授权微博账号并保存，接口才会开始对外响应。"
  } : { label: "未就绪", tone: "warn" } : {
    label: "待生成密钥",
    tone: "warn",
    hint: "请先生成只读密钥并填回麦麦插件配置，接口才会开始对外响应。"
  } : { label: "已停用", tone: "muted" };
}
function XA(n, a) {
  if (n.length !== a.length) return !1;
  const l = new Set(n);
  return l.size !== a.length ? !1 : a.every((o) => l.has(o));
}
async function QA(n) {
  if (navigator.clipboard?.writeText)
    try {
      return await navigator.clipboard.writeText(n), !0;
    } catch {
    }
  const a = document.createElement("textarea");
  a.value = n, a.setAttribute("readonly", ""), a.style.position = "fixed", a.style.opacity = "0", document.body.appendChild(a), a.select();
  let l = !1;
  try {
    l = document.execCommand("copy");
  } catch {
    l = !1;
  } finally {
    document.body.removeChild(a);
  }
  return l;
}
function ZA({
  config: n,
  accounts: a
}) {
  const [l, o] = x.useState(n), [s, u] = x.useState(n.enabled), [d, m] = x.useState(n.account_uids), [h, p] = x.useState(""), [b, v] = x.useState(!1), [w, T] = x.useState(""), [E, O] = x.useState(""), [C, D] = x.useState(!1), [_, M] = x.useState(!1), [N, z] = x.useState(""), [k, Y] = x.useState(!1), [B, Z] = x.useState(""), te = x.useMemo(() => new Set(a.map((I) => I.uid)), [a]), re = x.useMemo(() => new Set(d), [d]), ne = x.useMemo(() => {
    const I = /* @__PURE__ */ new Set(), le = [];
    for (const Se of [...l.account_uids, ...d])
      !te.has(Se) && !I.has(Se) && (I.add(Se), le.push(Se));
    return le;
  }, [te, l.account_uids, d]), X = h.trim().toLowerCase(), ee = x.useMemo(() => X ? a.filter(
    (I) => I.nickname.toLowerCase().includes(X) || I.uid.toLowerCase().includes(X) || I.username.toLowerCase().includes(X)
  ) : a, [a, X]), ie = x.useMemo(() => X ? ne.filter(
    (I) => I.toLowerCase().includes(X) || "未绑定".includes(X)
  ) : ne, [ne, X]), H = s !== l.enabled || !XA(d, l.account_uids), F = FA(l), K = b || C;
  function oe(I) {
    T(""), O(""), m((le) => le.includes(I) ? le.filter((Se) => Se !== I) : le.length >= jr ? le : [...le, I]);
  }
  function G() {
    T(""), O(""), m((I) => {
      const le = [...I], Se = new Set(I);
      for (const he of ee) {
        if (le.length >= jr) break;
        Se.has(he.uid) || (Se.add(he.uid), le.push(he.uid));
      }
      return le;
    });
  }
  function A() {
    T(""), O(""), m([]);
  }
  async function W(I) {
    I.preventDefault(), I.stopPropagation(), v(!0), T(""), O("");
    try {
      const le = await Dv(
        "/api/admin/maibot",
        "PUT",
        { enabled: s, account_uids: d }
      );
      o(le.config), u(le.config.enabled), m(le.config.account_uids), le.config.enabled ? le.config.ready ? T(
        `已保存：麦麦集成运行中，已授权 ${le.config.account_uids.length} 个微博账号。`
      ) : le.config.token_configured ? T("已保存：请至少勾选 1 个授权微博账号以启用接口。") : T("已保存：请继续生成只读密钥以启用接口。") : T("已保存：麦麦集成已停用。");
    } catch (le) {
      O(
        le instanceof TypeError ? "无法连接服务，请稍后重试" : le.message
      );
    } finally {
      v(!1);
    }
  }
  async function ae() {
    D(!0), Z(""), Y(!1);
    try {
      const I = await Dv(
        "/api/admin/maibot/token",
        "POST"
      );
      o(I.config), z(I.token), M(!1);
    } catch (I) {
      Z(
        I instanceof TypeError ? "无法连接服务，请稍后重试" : I.message
      );
    } finally {
      D(!1);
    }
  }
  async function se() {
    if (!N) return;
    await QA(N) ? (Y(!0), window.setTimeout(() => Y(!1), 2e3)) : Z("自动复制失败，请手动选中上方密钥复制");
  }
  const ce = l.token_source === "admin" ? `已由管理端生成${l.token_updated_at ? ` · 更新于 ${WA(l.token_updated_at)}` : ""}` : l.token_source === "env" ? "当前沿用 .env.portal 环境变量密钥" : "尚未生成密钥";
  return /* @__PURE__ */ g.jsxs("form", { className: "maibot-settings", onSubmit: W, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "maibot-status-bar", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "maibot-status-main", children: [
        /* @__PURE__ */ g.jsxs("span", { className: `maibot-pill maibot-pill--${F.tone}`, children: [
          /* @__PURE__ */ g.jsx(LM, { className: "size-3.5", "aria-hidden": "true" }),
          F.label
        ] }),
        l.settings_source === "env" && /* @__PURE__ */ g.jsx("span", { className: "maibot-env-note", children: "当前沿用 .env.portal 环境变量，保存后改为管理端接管" })
      ] }),
      H && /* @__PURE__ */ g.jsx("span", { className: "maibot-dirty-tag", children: "有未保存更改" })
    ] }),
    F.hint && /* @__PURE__ */ g.jsx("p", { className: "maibot-inline-hint", children: F.hint }),
    /* @__PURE__ */ g.jsxs("fieldset", { disabled: K, children: [
      /* @__PURE__ */ g.jsxs("div", { className: "credit-switch-row maibot-switch-row", children: [
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx(qt, { htmlFor: "maibot-enabled", children: "启用麦麦只读接口" }),
          /* @__PURE__ */ g.jsx("p", { id: "maibot-enabled-help", children: "开启后，麦麦可按分钟轮询并查询授权账号的今日签到状态与失效提醒；不传输微博 Cookie。" })
        ] }),
        /* @__PURE__ */ g.jsx(
          Qs,
          {
            id: "maibot-enabled",
            checked: s,
            onCheckedChange: (I) => {
              u(I), T(""), O("");
            },
            "aria-describedby": "maibot-enabled-help"
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "maibot-section", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "maibot-section-head", children: [
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsxs("h3", { className: "maibot-section-title", children: [
              /* @__PURE__ */ g.jsx(RM, { className: "size-3.5", "aria-hidden": "true" }),
              "只读密钥"
            ] }),
            /* @__PURE__ */ g.jsx("p", { className: "maibot-section-desc", children: ce })
          ] }),
          !_ && /* @__PURE__ */ g.jsxs(
            Oe,
            {
              type: "button",
              variant: l.token_configured ? "outline" : "default",
              size: "sm",
              disabled: K,
              onClick: () => {
                Z(""), l.token_configured ? M(!0) : ae();
              },
              children: [
                /* @__PURE__ */ g.jsx(t0, { className: "size-3.5", "aria-hidden": "true" }),
                C ? "正在生成…" : l.token_configured ? "重置密钥" : "生成密钥"
              ]
            }
          )
        ] }),
        _ && /* @__PURE__ */ g.jsxs("div", { className: "maibot-confirm-box", role: "alert", children: [
          /* @__PURE__ */ g.jsx("p", { children: "重置后旧密钥立即失效，需要同步更新麦麦插件中的「只读密钥」并重启麦麦。" }),
          /* @__PURE__ */ g.jsxs("div", { className: "maibot-confirm-actions", children: [
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                size: "sm",
                variant: "destructive",
                disabled: K,
                onClick: () => {
                  ae();
                },
                children: C ? "正在重置…" : "确认重置"
              }
            ),
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                size: "sm",
                variant: "outline",
                disabled: K,
                onClick: () => M(!1),
                children: "取消"
              }
            )
          ] })
        ] }),
        N && /* @__PURE__ */ g.jsxs("div", { className: "maibot-token-reveal", role: "status", "aria-live": "polite", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "maibot-token-reveal-head", children: [
            /* @__PURE__ */ g.jsx("strong", { children: "新只读密钥（仅展示这一次）" }),
            /* @__PURE__ */ g.jsxs("div", { className: "maibot-token-actions", children: [
              /* @__PURE__ */ g.jsx(
                Oe,
                {
                  type: "button",
                  size: "sm",
                  variant: "outline",
                  onClick: () => {
                    se();
                  },
                  children: k ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                    /* @__PURE__ */ g.jsx(Go, { className: "size-3.5", "aria-hidden": "true" }),
                    "已复制"
                  ] }) : /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                    /* @__PURE__ */ g.jsx(kM, { className: "size-3.5", "aria-hidden": "true" }),
                    "复制密钥"
                  ] })
                }
              ),
              /* @__PURE__ */ g.jsx(
                Oe,
                {
                  type: "button",
                  size: "sm",
                  variant: "ghost",
                  onClick: () => z(""),
                  children: "关闭"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ g.jsx("code", { className: "maibot-token-code", children: N }),
          /* @__PURE__ */ g.jsx("p", { className: "maibot-token-note", children: "请将此密钥填入麦麦管理页「微博超话签到」插件的只读密钥配置中，刷新页面后将无法再次查看明文。" })
        ] }),
        B && /* @__PURE__ */ g.jsx("p", { className: "credit-form-error", role: "alert", children: B })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "maibot-section", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "maibot-section-head", children: [
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("h3", { className: "maibot-section-title", children: "授权微博账号" }),
            /* @__PURE__ */ g.jsxs("p", { className: "maibot-section-desc", children: [
              "勾选允许麦麦查询与推送通知的微博账号，最多选择 ",
              jr,
              " 个。"
            ] })
          ] }),
          /* @__PURE__ */ g.jsxs("span", { className: "maibot-counter", children: [
            "已选 ",
            d.length,
            " / ",
            jr
          ] })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "maibot-accounts-toolbar", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "maibot-search", children: [
            /* @__PURE__ */ g.jsx(dd, { className: "size-3.5", "aria-hidden": "true" }),
            /* @__PURE__ */ g.jsx(
              Vn,
              {
                value: h,
                onChange: (I) => p(I.target.value),
                placeholder: "搜索微博昵称、UID 或平台用户",
                "aria-label": "搜索授权微博账号",
                className: "h-9 pl-8 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ g.jsxs("div", { className: "maibot-toolbar-actions", children: [
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: K || ee.length === 0 || d.length >= jr,
                onClick: G,
                children: "全选"
              }
            ),
            /* @__PURE__ */ g.jsx(
              Oe,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: K || d.length === 0,
                onClick: A,
                children: "清空"
              }
            )
          ] })
        ] }),
        a.length === 0 && ne.length === 0 ? /* @__PURE__ */ g.jsx("div", { className: "maibot-empty", children: "当前还没有用户绑定微博账号，绑定后即可在此勾选授权。" }) : ee.length === 0 && ie.length === 0 ? /* @__PURE__ */ g.jsx("div", { className: "maibot-empty", children: "没有匹配的微博账号，试试其他关键词。" }) : /* @__PURE__ */ g.jsxs("ul", { className: "maibot-account-list", role: "group", "aria-label": "授权微博账号列表", children: [
          ee.map((I) => {
            const le = re.has(I.uid), Se = !le && d.length >= jr, he = VA(I.login_status);
            return /* @__PURE__ */ g.jsx("li", { children: /* @__PURE__ */ g.jsxs(
              "button",
              {
                type: "button",
                role: "checkbox",
                "aria-checked": le,
                disabled: K || Se,
                className: "maibot-account-row",
                onClick: () => oe(I.uid),
                children: [
                  /* @__PURE__ */ g.jsx("span", { className: "maibot-check", "aria-hidden": "true", children: le && /* @__PURE__ */ g.jsx(Go, { className: "size-3" }) }),
                  /* @__PURE__ */ g.jsxs("span", { className: "maibot-account-main", children: [
                    /* @__PURE__ */ g.jsx("span", { className: "maibot-account-name", children: I.nickname || "微博用户" }),
                    /* @__PURE__ */ g.jsxs("span", { className: "maibot-account-meta", children: [
                      /* @__PURE__ */ g.jsx("span", { className: "maibot-mono", children: I.uid }),
                      /* @__PURE__ */ g.jsx("span", { "aria-hidden": "true", children: "·" }),
                      /* @__PURE__ */ g.jsx("span", { children: I.username }),
                      /* @__PURE__ */ g.jsx("span", { "aria-hidden": "true", children: "·" }),
                      /* @__PURE__ */ g.jsx("span", { children: I.automatic ? `自动 ${I.scheduled_time}` : "手动" })
                    ] })
                  ] }),
                  /* @__PURE__ */ g.jsx("span", { className: `maibot-pill maibot-pill--${he.tone}`, children: he.label })
                ]
              }
            ) }, I.id);
          }),
          ie.map((I) => {
            const le = re.has(I), Se = !le && d.length >= jr;
            return /* @__PURE__ */ g.jsx("li", { children: /* @__PURE__ */ g.jsxs(
              "button",
              {
                type: "button",
                role: "checkbox",
                "aria-checked": le,
                disabled: K || Se,
                className: "maibot-account-row",
                onClick: () => oe(I),
                children: [
                  /* @__PURE__ */ g.jsx("span", { className: "maibot-check", "aria-hidden": "true", children: le && /* @__PURE__ */ g.jsx(Go, { className: "size-3" }) }),
                  /* @__PURE__ */ g.jsxs("span", { className: "maibot-account-main", children: [
                    /* @__PURE__ */ g.jsx("span", { className: "maibot-account-name", children: "未绑定账号" }),
                    /* @__PURE__ */ g.jsxs("span", { className: "maibot-account-meta", children: [
                      /* @__PURE__ */ g.jsx("span", { className: "maibot-mono", children: I }),
                      /* @__PURE__ */ g.jsx("span", { "aria-hidden": "true", children: "·" }),
                      /* @__PURE__ */ g.jsx("span", { children: "该 UID 当前未绑定任何平台用户，取消勾选后保存可移除" })
                    ] })
                  ] }),
                  /* @__PURE__ */ g.jsx("span", { className: "maibot-pill maibot-pill--muted", children: "未绑定" })
                ]
              }
            ) }, `orphan-${I}`);
          })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "maibot-footer", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "maibot-footer-actions", children: [
          /* @__PURE__ */ g.jsx(Oe, { type: "submit", disabled: K, children: b ? "正在保存…" : "保存麦麦配置" }),
          H && /* @__PURE__ */ g.jsx(
            Oe,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              disabled: K,
              onClick: () => {
                u(l.enabled), m(l.account_uids), T(""), O("");
              },
              children: "撤销修改"
            }
          )
        ] }),
        E && /* @__PURE__ */ g.jsx("p", { className: "credit-form-error", role: "alert", children: E }),
        w && !E && /* @__PURE__ */ g.jsx("p", { className: "credit-form-feedback", role: "status", "aria-live": "polite", children: w })
      ] })
    ] })
  ] });
}
const Xs = /* @__PURE__ */ new Map();
function IA(n = document) {
  n.querySelectorAll("[data-credit-form]").forEach((a) => {
    if (Xs.has(a)) return;
    const l = aS.createRoot(a);
    if (a.classList.add("credit-controls"), Xs.set(a, l), a.dataset.creditForm === "appearance") {
      l.render(/* @__PURE__ */ g.jsx(DA, {}));
      return;
    }
    if (a.dataset.creditForm === "account-panel") {
      l.render(/* @__PURE__ */ g.jsx(GA, {}));
      return;
    }
    if (a.dataset.creditForm === "login") {
      l.render(/* @__PURE__ */ g.jsx(_A, {}));
      return;
    }
    if (a.dataset.creditForm === "maibot-settings") {
      const s = JSON.parse(a.dataset.props || "{}");
      l.render(
        /* @__PURE__ */ g.jsx(ZA, { config: s.config, accounts: s.accounts })
      );
      return;
    }
    if (a.dataset.creditForm === "footprint" || a.dataset.creditForm === "topics") {
      const s = JSON.parse(a.dataset.props || "{}");
      l.render(
        a.dataset.creditForm === "footprint" ? /* @__PURE__ */ g.jsx(YA, { accounts: s.accounts }) : /* @__PURE__ */ g.jsx(jx, { accounts: s.accounts })
      );
      return;
    }
    const o = JSON.parse(a.dataset.props || "{}");
    o.kind === "plan" ? l.render(/* @__PURE__ */ g.jsx(Tx, { plan: o.plan })) : o.kind === "filters" ? l.render(
      /* @__PURE__ */ g.jsx(
        EA,
        {
          admin: o.admin,
          values: o.values,
          statuses: o.statuses
        }
      )
    ) : o.kind === "users" ? l.render(/* @__PURE__ */ g.jsx(TA, { search: o.search })) : o.kind === "system-settings" ? l.render(/* @__PURE__ */ g.jsx(MA, { settings: o.settings })) : o.kind === "run-topics" && l.render(/* @__PURE__ */ g.jsx(Rx, { runId: o.runId, embedded: o.embedded }));
  });
}
function ok(n) {
  for (const [a, l] of Xs)
    n.contains(a) && (l.unmount(), Xs.delete(a));
}
IA();
export {
  IA as mountControls,
  ok as unmountControls
};
