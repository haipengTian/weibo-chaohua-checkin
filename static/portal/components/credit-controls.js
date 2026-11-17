var cy = (n) => {
  throw TypeError(n);
};
var uy = (n, a, l) => a.has(n) || cy("Cannot " + l);
var Bt = (n, a, l) => (uy(n, a, "read from private field"), l ? l.call(n) : a.get(n)), fy = (n, a, l) => a.has(n) ? cy("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(n) : a.set(n, l), Rf = (n, a, l, o) => (uy(n, a, "write to private field"), o ? o.call(n, l) : a.set(n, l), l);
function jS(n, a) {
  for (var l = 0; l < a.length; l++) {
    const o = a[l];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in n)) {
          const f = Object.getOwnPropertyDescriptor(o, s);
          f && Object.defineProperty(n, s, f.get ? f : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function YS(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var kf = { exports: {} }, Wl = {};
var dy;
function HS() {
  if (dy) return Wl;
  dy = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(o, s, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      f = {};
      for (var m in s)
        m !== "key" && (f[m] = s[m]);
    } else f = s;
    return s = f.ref, {
      $$typeof: n,
      type: o,
      key: d,
      ref: s !== void 0 ? s : null,
      props: f
    };
  }
  return Wl.Fragment = a, Wl.jsx = l, Wl.jsxs = l, Wl;
}
var my;
function BS() {
  return my || (my = 1, kf.exports = HS()), kf.exports;
}
var v = BS(), zf = { exports: {} }, Vl = {}, jf = { exports: {} }, Yf = {};
var hy;
function US() {
  return hy || (hy = 1, (function(n) {
    function a(H, Q) {
      var K = H.length;
      H.push(Q);
      e: for (; 0 < K; ) {
        var ne = K - 1 >>> 1, W = H[ne];
        if (0 < s(W, Q))
          H[ne] = Q, H[K] = W, K = ne;
        else break e;
      }
    }
    function l(H) {
      return H.length === 0 ? null : H[0];
    }
    function o(H) {
      if (H.length === 0) return null;
      var Q = H[0], K = H.pop();
      if (K !== Q) {
        H[0] = K;
        e: for (var ne = 0, W = H.length, N = W >>> 1; ne < N; ) {
          var V = 2 * (ne + 1) - 1, J = H[V], ae = V + 1, re = H[ae];
          if (0 > s(J, K))
            ae < W && 0 > s(re, J) ? (H[ne] = re, H[ae] = K, ne = ae) : (H[ne] = J, H[V] = K, ne = V);
          else if (ae < W && 0 > s(re, K))
            H[ne] = re, H[ae] = K, ne = ae;
          else break e;
        }
      }
      return Q;
    }
    function s(H, Q) {
      var K = H.sortIndex - Q.sortIndex;
      return K !== 0 ? K : H.id - Q.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now();
      };
    } else {
      var d = Date, m = d.now();
      n.unstable_now = function() {
        return d.now() - m;
      };
    }
    var h = [], p = [], b = 1, y = null, w = 3, E = !1, M = !1, O = !1, C = !1, D = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    function T(H) {
      for (var Q = l(p); Q !== null; ) {
        if (Q.callback === null) o(p);
        else if (Q.startTime <= H)
          o(p), Q.sortIndex = Q.expirationTime, a(h, Q);
        else break;
        Q = l(p);
      }
    }
    function j(H) {
      if (O = !1, T(H), !M)
        if (l(h) !== null)
          M = !0, z || (z = !0, ee());
        else {
          var Q = l(p);
          Q !== null && me(j, Q.startTime - H);
        }
    }
    var z = !1, R = -1, U = 5, F = -1;
    function $() {
      return C ? !0 : !(n.unstable_now() - F < U);
    }
    function te() {
      if (C = !1, z) {
        var H = n.unstable_now();
        F = H;
        var Q = !0;
        try {
          e: {
            M = !1, O && (O = !1, A(R), R = -1), E = !0;
            var K = w;
            try {
              t: {
                for (T(H), y = l(h); y !== null && !(y.expirationTime > H && $()); ) {
                  var ne = y.callback;
                  if (typeof ne == "function") {
                    y.callback = null, w = y.priorityLevel;
                    var W = ne(
                      y.expirationTime <= H
                    );
                    if (H = n.unstable_now(), typeof W == "function") {
                      y.callback = W, T(H), Q = !0;
                      break t;
                    }
                    y === l(h) && o(h), T(H);
                  } else o(h);
                  y = l(h);
                }
                if (y !== null) Q = !0;
                else {
                  var N = l(p);
                  N !== null && me(
                    j,
                    N.startTime - H
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              y = null, w = K, E = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? ee() : z = !1;
        }
      }
    }
    var ee;
    if (typeof _ == "function")
      ee = function() {
        _(te);
      };
    else if (typeof MessageChannel < "u") {
      var ie = new MessageChannel(), le = ie.port2;
      ie.port1.onmessage = te, ee = function() {
        le.postMessage(null);
      };
    } else
      ee = function() {
        D(te, 0);
      };
    function me(H, Q) {
      R = D(function() {
        H(n.unstable_now());
      }, Q);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, n.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : U = 0 < H ? Math.floor(1e3 / H) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(H) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = w;
      }
      var K = w;
      w = Q;
      try {
        return H();
      } finally {
        w = K;
      }
    }, n.unstable_requestPaint = function() {
      C = !0;
    }, n.unstable_runWithPriority = function(H, Q) {
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
        return Q();
      } finally {
        w = K;
      }
    }, n.unstable_scheduleCallback = function(H, Q, K) {
      var ne = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ne + K : ne) : K = ne, H) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = K + W, H = {
        id: b++,
        callback: Q,
        priorityLevel: H,
        startTime: K,
        expirationTime: W,
        sortIndex: -1
      }, K > ne ? (H.sortIndex = K, a(p, H), l(h) === null && H === l(p) && (O ? (A(R), R = -1) : O = !0, me(j, K - ne))) : (H.sortIndex = W, a(h, H), M || E || (M = !0, z || (z = !0, ee()))), H;
    }, n.unstable_shouldYield = $, n.unstable_wrapCallback = function(H) {
      var Q = w;
      return function() {
        var K = w;
        w = Q;
        try {
          return H.apply(this, arguments);
        } finally {
          w = K;
        }
      };
    };
  })(Yf)), Yf;
}
var py;
function LS() {
  return py || (py = 1, jf.exports = US()), jf.exports;
}
var Hf = { exports: {} }, Se = {};
var gy;
function qS() {
  if (gy) return Se;
  gy = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function E(N) {
    return N === null || typeof N != "object" ? null : (N = w && N[w] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var M = {
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
  function D(N, V, J) {
    this.props = N, this.context = V, this.refs = C, this.updater = J || M;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(N, V) {
    if (typeof N != "object" && typeof N != "function" && N != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, N, V, "setState");
  }, D.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function A() {
  }
  A.prototype = D.prototype;
  function _(N, V, J) {
    this.props = N, this.context = V, this.refs = C, this.updater = J || M;
  }
  var T = _.prototype = new A();
  T.constructor = _, O(T, D.prototype), T.isPureReactComponent = !0;
  var j = Array.isArray;
  function z() {
  }
  var R = { H: null, A: null, T: null, S: null }, U = Object.prototype.hasOwnProperty;
  function F(N, V, J) {
    var ae = J.ref;
    return {
      $$typeof: n,
      type: N,
      key: V,
      ref: ae !== void 0 ? ae : null,
      props: J
    };
  }
  function $(N, V) {
    return F(N.type, V, N.props);
  }
  function te(N) {
    return typeof N == "object" && N !== null && N.$$typeof === n;
  }
  function ee(N) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(J) {
      return V[J];
    });
  }
  var ie = /\/+/g;
  function le(N, V) {
    return typeof N == "object" && N !== null && N.key != null ? ee("" + N.key) : V.toString(36);
  }
  function me(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (typeof N.status == "string" ? N.then(z, z) : (N.status = "pending", N.then(
          function(V) {
            N.status === "pending" && (N.status = "fulfilled", N.value = V);
          },
          function(V) {
            N.status === "pending" && (N.status = "rejected", N.reason = V);
          }
        )), N.status) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function H(N, V, J, ae, re) {
    var oe = typeof N;
    (oe === "undefined" || oe === "boolean") && (N = null);
    var ve = !1;
    if (N === null) ve = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case n:
            case a:
              ve = !0;
              break;
            case b:
              return ve = N._init, H(
                ve(N._payload),
                V,
                J,
                ae,
                re
              );
          }
      }
    if (ve)
      return re = re(N), ve = ae === "" ? "." + le(N, 0) : ae, j(re) ? (J = "", ve != null && (J = ve.replace(ie, "$&/") + "/"), H(re, V, J, "", function(he) {
        return he;
      })) : re != null && (te(re) && (re = $(
        re,
        J + (re.key == null || N && N.key === re.key ? "" : ("" + re.key).replace(
          ie,
          "$&/"
        ) + "/") + ve
      )), V.push(re)), 1;
    ve = 0;
    var Fe = ae === "" ? "." : ae + ":";
    if (j(N))
      for (var ye = 0; ye < N.length; ye++)
        ae = N[ye], oe = Fe + le(ae, ye), ve += H(
          ae,
          V,
          J,
          oe,
          re
        );
    else if (ye = E(N), typeof ye == "function")
      for (N = ye.call(N), ye = 0; !(ae = N.next()).done; )
        ae = ae.value, oe = Fe + le(ae, ye++), ve += H(
          ae,
          V,
          J,
          oe,
          re
        );
    else if (oe === "object") {
      if (typeof N.then == "function")
        return H(
          me(N),
          V,
          J,
          ae,
          re
        );
      throw V = String(N), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ve;
  }
  function Q(N, V, J) {
    if (N == null) return N;
    var ae = [], re = 0;
    return H(N, ae, "", "", function(oe) {
      return V.call(J, oe, re++);
    }), ae;
  }
  function K(N) {
    if (N._status === -1) {
      var V = N._result;
      V = V(), V.then(
        function(J) {
          (N._status === 0 || N._status === -1) && (N._status = 1, N._result = J);
        },
        function(J) {
          (N._status === 0 || N._status === -1) && (N._status = 2, N._result = J);
        }
      ), N._status === -1 && (N._status = 0, N._result = V);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ne = typeof reportError == "function" ? reportError : function(N) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof N == "object" && N !== null && typeof N.message == "string" ? String(N.message) : String(N),
        error: N
      });
      if (!window.dispatchEvent(V)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", N);
      return;
    }
    console.error(N);
  }, W = {
    map: Q,
    forEach: function(N, V, J) {
      Q(
        N,
        function() {
          V.apply(this, arguments);
        },
        J
      );
    },
    count: function(N) {
      var V = 0;
      return Q(N, function() {
        V++;
      }), V;
    },
    toArray: function(N) {
      return Q(N, function(V) {
        return V;
      }) || [];
    },
    only: function(N) {
      if (!te(N))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return N;
    }
  };
  return Se.Activity = y, Se.Children = W, Se.Component = D, Se.Fragment = l, Se.Profiler = s, Se.PureComponent = _, Se.StrictMode = o, Se.Suspense = h, Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, Se.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(N) {
      return R.H.useMemoCache(N);
    }
  }, Se.cache = function(N) {
    return function() {
      return N.apply(null, arguments);
    };
  }, Se.cacheSignal = function() {
    return null;
  }, Se.cloneElement = function(N, V, J) {
    if (N == null)
      throw Error(
        "The argument must be a React element, but you passed " + N + "."
      );
    var ae = O({}, N.props), re = N.key;
    if (V != null)
      for (oe in V.key !== void 0 && (re = "" + V.key), V)
        !U.call(V, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && V.ref === void 0 || (ae[oe] = V[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) ae.children = J;
    else if (1 < oe) {
      for (var ve = Array(oe), Fe = 0; Fe < oe; Fe++)
        ve[Fe] = arguments[Fe + 2];
      ae.children = ve;
    }
    return F(N.type, re, ae);
  }, Se.createContext = function(N) {
    return N = {
      $$typeof: d,
      _currentValue: N,
      _currentValue2: N,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, N.Provider = N, N.Consumer = {
      $$typeof: f,
      _context: N
    }, N;
  }, Se.createElement = function(N, V, J) {
    var ae, re = {}, oe = null;
    if (V != null)
      for (ae in V.key !== void 0 && (oe = "" + V.key), V)
        U.call(V, ae) && ae !== "key" && ae !== "__self" && ae !== "__source" && (re[ae] = V[ae]);
    var ve = arguments.length - 2;
    if (ve === 1) re.children = J;
    else if (1 < ve) {
      for (var Fe = Array(ve), ye = 0; ye < ve; ye++)
        Fe[ye] = arguments[ye + 2];
      re.children = Fe;
    }
    if (N && N.defaultProps)
      for (ae in ve = N.defaultProps, ve)
        re[ae] === void 0 && (re[ae] = ve[ae]);
    return F(N, oe, re);
  }, Se.createRef = function() {
    return { current: null };
  }, Se.forwardRef = function(N) {
    return { $$typeof: m, render: N };
  }, Se.isValidElement = te, Se.lazy = function(N) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: N },
      _init: K
    };
  }, Se.memo = function(N, V) {
    return {
      $$typeof: p,
      type: N,
      compare: V === void 0 ? null : V
    };
  }, Se.startTransition = function(N) {
    var V = R.T, J = {};
    R.T = J;
    try {
      var ae = N(), re = R.S;
      re !== null && re(J, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && ae.then(z, ne);
    } catch (oe) {
      ne(oe);
    } finally {
      V !== null && J.types !== null && (V.types = J.types), R.T = V;
    }
  }, Se.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, Se.use = function(N) {
    return R.H.use(N);
  }, Se.useActionState = function(N, V, J) {
    return R.H.useActionState(N, V, J);
  }, Se.useCallback = function(N, V) {
    return R.H.useCallback(N, V);
  }, Se.useContext = function(N) {
    return R.H.useContext(N);
  }, Se.useDebugValue = function() {
  }, Se.useDeferredValue = function(N, V) {
    return R.H.useDeferredValue(N, V);
  }, Se.useEffect = function(N, V) {
    return R.H.useEffect(N, V);
  }, Se.useEffectEvent = function(N) {
    return R.H.useEffectEvent(N);
  }, Se.useId = function() {
    return R.H.useId();
  }, Se.useImperativeHandle = function(N, V, J) {
    return R.H.useImperativeHandle(N, V, J);
  }, Se.useInsertionEffect = function(N, V) {
    return R.H.useInsertionEffect(N, V);
  }, Se.useLayoutEffect = function(N, V) {
    return R.H.useLayoutEffect(N, V);
  }, Se.useMemo = function(N, V) {
    return R.H.useMemo(N, V);
  }, Se.useOptimistic = function(N, V) {
    return R.H.useOptimistic(N, V);
  }, Se.useReducer = function(N, V, J) {
    return R.H.useReducer(N, V, J);
  }, Se.useRef = function(N) {
    return R.H.useRef(N);
  }, Se.useState = function(N) {
    return R.H.useState(N);
  }, Se.useSyncExternalStore = function(N, V, J) {
    return R.H.useSyncExternalStore(
      N,
      V,
      J
    );
  }, Se.useTransition = function() {
    return R.H.useTransition();
  }, Se.version = "19.2.3", Se;
}
var yy;
function Sd() {
  return yy || (yy = 1, Hf.exports = qS()), Hf.exports;
}
var Bf = { exports: {} }, Lt = {};
var vy;
function PS() {
  if (vy) return Lt;
  vy = 1;
  var n = Sd();
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
  function f(h, p, b) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
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
  return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Lt.createPortal = function(h, p) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(a(299));
    return f(h, p, null, b);
  }, Lt.flushSync = function(h) {
    var p = d.T, b = o.p;
    try {
      if (d.T = null, o.p = 2, h) return h();
    } finally {
      d.T = p, o.p = b, o.d.f();
    }
  }, Lt.preconnect = function(h, p) {
    typeof h == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(h, p));
  }, Lt.prefetchDNS = function(h) {
    typeof h == "string" && o.d.D(h);
  }, Lt.preinit = function(h, p) {
    if (typeof h == "string" && p && typeof p.as == "string") {
      var b = p.as, y = m(b, p.crossOrigin), w = typeof p.integrity == "string" ? p.integrity : void 0, E = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      b === "style" ? o.d.S(
        h,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: y,
          integrity: w,
          fetchPriority: E
        }
      ) : b === "script" && o.d.X(h, {
        crossOrigin: y,
        integrity: w,
        fetchPriority: E,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Lt.preinitModule = function(h, p) {
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
  }, Lt.preload = function(h, p) {
    if (typeof h == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var b = p.as, y = m(b, p.crossOrigin);
      o.d.L(h, b, {
        crossOrigin: y,
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
  }, Lt.preloadModule = function(h, p) {
    if (typeof h == "string")
      if (p) {
        var b = m(p.as, p.crossOrigin);
        o.d.m(h, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(h);
  }, Lt.requestFormReset = function(h) {
    o.d.r(h);
  }, Lt.unstable_batchedUpdates = function(h, p) {
    return h(p);
  }, Lt.useFormState = function(h, p, b) {
    return d.H.useFormState(h, p, b);
  }, Lt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, Lt.version = "19.2.3", Lt;
}
var by;
function Tv() {
  if (by) return Bf.exports;
  by = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Bf.exports = PS(), Bf.exports;
}
var xy;
function GS() {
  if (xy) return Vl;
  xy = 1;
  var n = LS(), a = Sd(), l = Tv();
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
  function f(e) {
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
    if (f(e) !== e)
      throw Error(o(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, i = t; ; ) {
      var c = r.return;
      if (c === null) break;
      var u = c.alternate;
      if (u === null) {
        if (i = c.return, i !== null) {
          r = i;
          continue;
        }
        break;
      }
      if (c.child === u.child) {
        for (u = c.child; u; ) {
          if (u === r) return h(c), e;
          if (u === i) return h(c), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== i.return) r = c, i = u;
      else {
        for (var g = !1, S = c.child; S; ) {
          if (S === r) {
            g = !0, r = c, i = u;
            break;
          }
          if (S === i) {
            g = !0, i = c, r = u;
            break;
          }
          S = S.sibling;
        }
        if (!g) {
          for (S = u.child; S; ) {
            if (S === r) {
              g = !0, r = u, i = c;
              break;
            }
            if (S === i) {
              g = !0, i = u, r = c;
              break;
            }
            S = S.sibling;
          }
          if (!g) throw Error(o(189));
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
  var y = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.activity"), $ = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), te = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = te && e[te] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ie = /* @__PURE__ */ Symbol.for("react.client.reference");
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ie ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case D:
        return "Profiler";
      case C:
        return "StrictMode";
      case j:
        return "Suspense";
      case z:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case _:
          return e.displayName || "Context";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case T:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
          return t = e.displayName || null, t !== null ? t : le(e.type) || "Memo";
        case U:
          t = e._payload, e = e._init;
          try {
            return le(e(t));
          } catch {
          }
      }
    return null;
  }
  var me = Array.isArray, H = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ne = [], W = -1;
  function N(e) {
    return { current: e };
  }
  function V(e) {
    0 > W || (e.current = ne[W], ne[W] = null, W--);
  }
  function J(e, t) {
    W++, ne[W] = e.current, e.current = t;
  }
  var ae = N(null), re = N(null), oe = N(null), ve = N(null);
  function Fe(e, t) {
    switch (J(oe, t), J(re, e), J(ae, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Rg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Rg(t), e = kg(t, e);
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
    V(ae), J(ae, e);
  }
  function ye() {
    V(ae), V(re), V(oe);
  }
  function he(e) {
    e.memoizedState !== null && J(ve, e);
    var t = ae.current, r = kg(t, e.type);
    t !== r && (J(re, e), J(ae, r));
  }
  function Qe(e) {
    re.current === e && (V(ae), V(re)), ve.current === e && (V(ve), Ll._currentValue = K);
  }
  var qe, Ce;
  function Oe(e) {
    if (qe === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        qe = t && t[1] || "", Ce = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + qe + e + Ce;
  }
  var We = !1;
  function Zn(e, t) {
    if (!e || We) return "";
    We = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var I = function() {
                throw Error();
              };
              if (Object.defineProperty(I.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(I, []);
                } catch (G) {
                  var P = G;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (G) {
                  P = G;
                }
                e.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                P = G;
              }
              (I = e()) && typeof I.catch == "function" && I.catch(function() {
              });
            }
          } catch (G) {
            if (G && P && typeof G.stack == "string")
              return [G.stack, P.stack];
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
      var u = i.DetermineComponentFrameRoot(), g = u[0], S = u[1];
      if (g && S) {
        var k = g.split(`
`), q = S.split(`
`);
        for (c = i = 0; i < k.length && !k[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (i === k.length || c === q.length)
          for (i = k.length - 1, c = q.length - 1; 1 <= i && 0 <= c && k[i] !== q[c]; )
            c--;
        for (; 1 <= i && 0 <= c; i--, c--)
          if (k[i] !== q[c]) {
            if (i !== 1 || c !== 1)
              do
                if (i--, c--, 0 > c || k[i] !== q[c]) {
                  var X = `
` + k[i].replace(" at new ", " at ");
                  return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
                }
              while (1 <= i && 0 <= c);
            break;
          }
      }
    } finally {
      We = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? Oe(r) : "";
  }
  function ur(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Oe(e.type);
      case 16:
        return Oe("Lazy");
      case 13:
        return e.child !== t && t !== null ? Oe("Suspense Fallback") : Oe("Suspense");
      case 19:
        return Oe("SuspenseList");
      case 0:
      case 15:
        return Zn(e.type, !1);
      case 11:
        return Zn(e.type.render, !1);
      case 1:
        return Zn(e.type, !0);
      case 31:
        return Oe("Activity");
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
  var Ko = Object.prototype.hasOwnProperty, $o = n.unstable_scheduleCallback, Jo = n.unstable_cancelCallback, hc = n.unstable_shouldYield, ai = n.unstable_requestPaint, Rt = n.unstable_now, el = n.unstable_getCurrentPriorityLevel, ri = n.unstable_ImmediatePriority, oi = n.unstable_UserBlockingPriority, Fr = n.unstable_NormalPriority, pc = n.unstable_LowPriority, li = n.unstable_IdlePriority, gc = n.log, yc = n.unstable_setDisableYieldValue, fr = null, Pt = null;
  function An(e) {
    if (typeof gc == "function" && yc(e), Pt && typeof Pt.setStrictMode == "function")
      try {
        Pt.setStrictMode(fr, e);
      } catch {
      }
  }
  var Gt = Math.clz32 ? Math.clz32 : Ee, ii = Math.log, vc = Math.LN2;
  function Ee(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ii(e) / vc | 0) | 0;
  }
  var He = 256, be = 262144, Re = 4194304;
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
  function De(e, t, r) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var c = 0, u = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var S = i & 134217727;
    return S !== 0 ? (i = S & ~u, i !== 0 ? c = mt(i) : (g &= S, g !== 0 ? c = mt(g) : r || (r = S & ~e, r !== 0 && (c = mt(r))))) : (S = i & ~u, S !== 0 ? c = mt(S) : g !== 0 ? c = mt(g) : r || (r = i & ~e, r !== 0 && (c = mt(r)))), c === 0 ? 0 : t !== 0 && t !== c && (t & u) === 0 && (u = c & -c, r = t & -t, u >= r || u === 32 && (r & 4194048) !== 0) ? t : c;
  }
  function dr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function bc(e, t) {
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
  function si() {
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
  function Cx(e, t, r, i, c, u) {
    var g = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var S = e.entanglements, k = e.expirationTimes, q = e.hiddenUpdates;
    for (r = g & ~r; 0 < r; ) {
      var X = 31 - Gt(r), I = 1 << X;
      S[X] = 0, k[X] = -1;
      var P = q[X];
      if (P !== null)
        for (q[X] = null, X = 0; X < P.length; X++) {
          var G = P[X];
          G !== null && (G.lane &= -536870913);
        }
      r &= ~I;
    }
    i !== 0 && hm(e, i, 0), u !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(g & ~t));
  }
  function hm(e, t, r) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - Gt(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | r & 261930;
  }
  function pm(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var i = 31 - Gt(r), c = 1 << i;
      c & t | e[i] & t && (e[i] |= t), r &= ~c;
    }
  }
  function gm(e, t) {
    var r = t & -t;
    return r = (r & 42) !== 0 ? 1 : xc(r), (r & (e.suspendedLanes | t)) !== 0 ? 0 : r;
  }
  function xc(e) {
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
  function wc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ym() {
    var e = Q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ny(e.type));
  }
  function vm(e, t) {
    var r = Q.p;
    try {
      return Q.p = e, t();
    } finally {
      Q.p = r;
    }
  }
  var _a = Math.random().toString(36).slice(2), kt = "__reactFiber$" + _a, Xt = "__reactProps$" + _a, Qr = "__reactContainer$" + _a, Sc = "__reactEvents$" + _a, Ex = "__reactListeners$" + _a, Ox = "__reactHandles$" + _a, bm = "__reactResources$" + _a, tl = "__reactMarker$" + _a;
  function Cc(e) {
    delete e[kt], delete e[Xt], delete e[Sc], delete e[Ex], delete e[Ox];
  }
  function Zr(e) {
    var t = e[kt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[Qr] || r[kt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
          for (e = Lg(e); e !== null; ) {
            if (r = e[kt]) return r;
            e = Lg(e);
          }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Ir(e) {
    if (e = e[kt] || e[Qr]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function nl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Kr(e) {
    var t = e[bm];
    return t || (t = e[bm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dt(e) {
    e[tl] = !0;
  }
  var xm = /* @__PURE__ */ new Set(), wm = {};
  function hr(e, t) {
    $r(e, t), $r(e + "Capture", t);
  }
  function $r(e, t) {
    for (wm[e] = t, e = 0; e < t.length; e++)
      xm.add(t[e]);
  }
  var Tx = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Sm = {}, Cm = {};
  function Mx(e) {
    return Ko.call(Cm, e) ? !0 : Ko.call(Sm, e) ? !1 : Tx.test(e) ? Cm[e] = !0 : (Sm[e] = !0, !1);
  }
  function ci(e, t, r) {
    if (Mx(t))
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
  function ui(e, t, r) {
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
  function Kn(e, t, r, i) {
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
  function Em(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Dx(e, t, r) {
    var i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, u = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(g) {
          r = "" + g, u.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(g) {
          r = "" + g;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Ec(e) {
    if (!e._valueTracker) {
      var t = Em(e) ? "checked" : "value";
      e._valueTracker = Dx(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Om(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), i = "";
    return e && (i = Em(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (t.setValue(e), !0) : !1;
  }
  function fi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var _x = /[\n"\\]/g;
  function dn(e) {
    return e.replace(
      _x,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Oc(e, t, r, i, c, u, g, S) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + fn(t)) : e.value !== "" + fn(t) && (e.value = "" + fn(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? Tc(e, g, fn(t)) : r != null ? Tc(e, g, fn(r)) : i != null && e.removeAttribute("value"), c == null && u != null && (e.defaultChecked = !!u), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + fn(S) : e.removeAttribute("name");
  }
  function Tm(e, t, r, i, c, u, g, S) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || r != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Ec(e);
        return;
      }
      r = r != null ? "" + fn(r) : "", t = t != null ? "" + fn(t) : r, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? c, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = S ? e.checked : !!i, e.defaultChecked = !!i, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g), Ec(e);
  }
  function Tc(e, t, r) {
    t === "number" && fi(e.ownerDocument) === e || e.defaultValue === "" + r || (e.defaultValue = "" + r);
  }
  function Jr(e, t, r, i) {
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
  function Mm(e, t, r) {
    if (t != null && (t = "" + fn(t), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? "" + fn(r) : "";
  }
  function Dm(e, t, r, i) {
    if (t == null) {
      if (i != null) {
        if (r != null) throw Error(o(92));
        if (me(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), t = r;
    }
    r = fn(t), e.defaultValue = r, i = e.textContent, i === r && i !== "" && i !== null && (e.value = i), Ec(e);
  }
  function eo(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Nx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _m(e, t, r) {
    var i = t.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, r) : typeof r != "number" || r === 0 || Nx.has(t) ? t === "float" ? e.cssFloat = r : e[t] = ("" + r).trim() : e[t] = r + "px";
  }
  function Nm(e, t, r) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, r != null) {
      for (var i in r)
        !r.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var c in t)
        i = t[c], t.hasOwnProperty(c) && r[c] !== i && _m(e, c, i);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && _m(e, u, t[u]);
  }
  function Mc(e) {
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
  var Ax = /* @__PURE__ */ new Map([
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
  ]), Rx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function di(e) {
    return Rx.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function $n() {
  }
  var Dc = null;
  function _c(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var to = null, no = null;
  function Am(e) {
    var t = Ir(e);
    if (t && (e = t.stateNode)) {
      var r = e[Xt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Oc(
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
                var c = i[Xt] || null;
                if (!c) throw Error(o(90));
                Oc(
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
              i = r[t], i.form === e.form && Om(i);
          }
          break e;
        case "textarea":
          Mm(e, r.value, r.defaultValue);
          break e;
        case "select":
          t = r.value, t != null && Jr(e, !!r.multiple, t, !1);
      }
    }
  }
  var Nc = !1;
  function Rm(e, t, r) {
    if (Nc) return e(t, r);
    Nc = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (Nc = !1, (to !== null || no !== null) && (Ji(), to && (t = to, e = no, no = to = null, Am(t), e)))
        for (t = 0; t < e.length; t++) Am(e[t]);
    }
  }
  function al(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var i = r[Xt] || null;
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
  var Jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ac = !1;
  if (Jn)
    try {
      var rl = {};
      Object.defineProperty(rl, "passive", {
        get: function() {
          Ac = !0;
        }
      }), window.addEventListener("test", rl, rl), window.removeEventListener("test", rl, rl);
    } catch {
      Ac = !1;
    }
  var Na = null, Rc = null, mi = null;
  function km() {
    if (mi) return mi;
    var e, t = Rc, r = t.length, i, c = "value" in Na ? Na.value : Na.textContent, u = c.length;
    for (e = 0; e < r && t[e] === c[e]; e++) ;
    var g = r - e;
    for (i = 1; i <= g && t[r - i] === c[u - i]; i++) ;
    return mi = c.slice(e, 1 < i ? 1 - i : void 0);
  }
  function hi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function pi() {
    return !0;
  }
  function zm() {
    return !1;
  }
  function Ft(e) {
    function t(r, i, c, u, g) {
      this._reactName = r, this._targetInst = c, this.type = i, this.nativeEvent = u, this.target = g, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (r = e[S], this[S] = r ? r(u) : u[S]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? pi : zm, this.isPropagationStopped = zm, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = pi);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = pi);
      },
      persist: function() {
      },
      isPersistent: pi
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
  }, gi = Ft(pr), ol = y({}, pr, { view: 0, detail: 0 }), kx = Ft(ol), kc, zc, ll, yi = y({}, ol, {
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
    getModifierState: Yc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ll && (ll && e.type === "mousemove" ? (kc = e.screenX - ll.screenX, zc = e.screenY - ll.screenY) : zc = kc = 0, ll = e), kc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : zc;
    }
  }), jm = Ft(yi), zx = y({}, yi, { dataTransfer: 0 }), jx = Ft(zx), Yx = y({}, ol, { relatedTarget: 0 }), jc = Ft(Yx), Hx = y({}, pr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bx = Ft(Hx), Ux = y({}, pr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Lx = Ft(Ux), qx = y({}, pr, { data: 0 }), Ym = Ft(qx), Px = {
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
  }, Gx = {
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
  }, Wx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vx(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wx[e]) ? !!t[e] : !1;
  }
  function Yc() {
    return Vx;
  }
  var Xx = y({}, ol, {
    key: function(e) {
      if (e.key) {
        var t = Px[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = hi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gx[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yc,
    charCode: function(e) {
      return e.type === "keypress" ? hi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Fx = Ft(Xx), Qx = y({}, yi, {
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
  }), Hm = Ft(Qx), Zx = y({}, ol, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yc
  }), Ix = Ft(Zx), Kx = y({}, pr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $x = Ft(Kx), Jx = y({}, yi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ew = Ft(Jx), tw = y({}, pr, {
    newState: 0,
    oldState: 0
  }), nw = Ft(tw), aw = [9, 13, 27, 32], Hc = Jn && "CompositionEvent" in window, il = null;
  Jn && "documentMode" in document && (il = document.documentMode);
  var rw = Jn && "TextEvent" in window && !il, Bm = Jn && (!Hc || il && 8 < il && 11 >= il), Um = " ", Lm = !1;
  function qm(e, t) {
    switch (e) {
      case "keyup":
        return aw.indexOf(t.keyCode) !== -1;
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
  function Pm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ao = !1;
  function ow(e, t) {
    switch (e) {
      case "compositionend":
        return Pm(t);
      case "keypress":
        return t.which !== 32 ? null : (Lm = !0, Um);
      case "textInput":
        return e = t.data, e === Um && Lm ? null : e;
      default:
        return null;
    }
  }
  function lw(e, t) {
    if (ao)
      return e === "compositionend" || !Hc && qm(e, t) ? (e = km(), mi = Rc = Na = null, ao = !1, e) : null;
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
        return Bm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var iw = {
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
  function Gm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!iw[e.type] : t === "textarea";
  }
  function Wm(e, t, r, i) {
    to ? no ? no.push(i) : no = [i] : to = i, t = ls(t, "onChange"), 0 < t.length && (r = new gi(
      "onChange",
      "change",
      null,
      r,
      i
    ), e.push({ event: r, listeners: t }));
  }
  var sl = null, cl = null;
  function sw(e) {
    Tg(e, 0);
  }
  function vi(e) {
    var t = nl(e);
    if (Om(t)) return e;
  }
  function Vm(e, t) {
    if (e === "change") return t;
  }
  var Xm = !1;
  if (Jn) {
    var Bc;
    if (Jn) {
      var Uc = "oninput" in document;
      if (!Uc) {
        var Fm = document.createElement("div");
        Fm.setAttribute("oninput", "return;"), Uc = typeof Fm.oninput == "function";
      }
      Bc = Uc;
    } else Bc = !1;
    Xm = Bc && (!document.documentMode || 9 < document.documentMode);
  }
  function Qm() {
    sl && (sl.detachEvent("onpropertychange", Zm), cl = sl = null);
  }
  function Zm(e) {
    if (e.propertyName === "value" && vi(cl)) {
      var t = [];
      Wm(
        t,
        cl,
        e,
        _c(e)
      ), Rm(sw, t);
    }
  }
  function cw(e, t, r) {
    e === "focusin" ? (Qm(), sl = t, cl = r, sl.attachEvent("onpropertychange", Zm)) : e === "focusout" && Qm();
  }
  function uw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vi(cl);
  }
  function fw(e, t) {
    if (e === "click") return vi(t);
  }
  function dw(e, t) {
    if (e === "input" || e === "change")
      return vi(t);
  }
  function mw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var en = typeof Object.is == "function" ? Object.is : mw;
  function ul(e, t) {
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
  function Im(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Km(e, t) {
    var r = Im(e);
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
      r = Im(r);
    }
  }
  function $m(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $m(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Jm(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = fi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = fi(e.document);
    }
    return t;
  }
  function Lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var hw = Jn && "documentMode" in document && 11 >= document.documentMode, ro = null, qc = null, fl = null, Pc = !1;
  function eh(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Pc || ro == null || ro !== fi(i) || (i = ro, "selectionStart" in i && Lc(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), fl && ul(fl, i) || (fl = i, i = ls(qc, "onSelect"), 0 < i.length && (t = new gi(
      "onSelect",
      "select",
      null,
      t,
      r
    ), e.push({ event: t, listeners: i }), t.target = ro)));
  }
  function gr(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var oo = {
    animationend: gr("Animation", "AnimationEnd"),
    animationiteration: gr("Animation", "AnimationIteration"),
    animationstart: gr("Animation", "AnimationStart"),
    transitionrun: gr("Transition", "TransitionRun"),
    transitionstart: gr("Transition", "TransitionStart"),
    transitioncancel: gr("Transition", "TransitionCancel"),
    transitionend: gr("Transition", "TransitionEnd")
  }, Gc = {}, th = {};
  Jn && (th = document.createElement("div").style, "AnimationEvent" in window || (delete oo.animationend.animation, delete oo.animationiteration.animation, delete oo.animationstart.animation), "TransitionEvent" in window || delete oo.transitionend.transition);
  function yr(e) {
    if (Gc[e]) return Gc[e];
    if (!oo[e]) return e;
    var t = oo[e], r;
    for (r in t)
      if (t.hasOwnProperty(r) && r in th)
        return Gc[e] = t[r];
    return e;
  }
  var nh = yr("animationend"), ah = yr("animationiteration"), rh = yr("animationstart"), pw = yr("transitionrun"), gw = yr("transitionstart"), yw = yr("transitioncancel"), oh = yr("transitionend"), lh = /* @__PURE__ */ new Map(), Wc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Wc.push("scrollEnd");
  function Cn(e, t) {
    lh.set(e, t), hr(t, [e]);
  }
  var bi = typeof reportError == "function" ? reportError : function(e) {
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
  }, mn = [], lo = 0, Vc = 0;
  function xi() {
    for (var e = lo, t = Vc = lo = 0; t < e; ) {
      var r = mn[t];
      mn[t++] = null;
      var i = mn[t];
      mn[t++] = null;
      var c = mn[t];
      mn[t++] = null;
      var u = mn[t];
      if (mn[t++] = null, i !== null && c !== null) {
        var g = i.pending;
        g === null ? c.next = c : (c.next = g.next, g.next = c), i.pending = c;
      }
      u !== 0 && ih(r, c, u);
    }
  }
  function wi(e, t, r, i) {
    mn[lo++] = e, mn[lo++] = t, mn[lo++] = r, mn[lo++] = i, Vc |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Xc(e, t, r, i) {
    return wi(e, t, r, i), Si(e);
  }
  function vr(e, t) {
    return wi(e, null, null, t), Si(e);
  }
  function ih(e, t, r) {
    e.lanes |= r;
    var i = e.alternate;
    i !== null && (i.lanes |= r);
    for (var c = !1, u = e.return; u !== null; )
      u.childLanes |= r, i = u.alternate, i !== null && (i.childLanes |= r), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (c = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, c && t !== null && (c = 31 - Gt(r), e = u.hiddenUpdates, i = e[c], i === null ? e[c] = [t] : i.push(t), t.lane = r | 536870912), u) : null;
  }
  function Si(e) {
    if (50 < kl)
      throw kl = 0, tf = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var io = {};
  function vw(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(e, t, r, i) {
    return new vw(e, t, r, i);
  }
  function Fc(e) {
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
  function sh(e, t) {
    e.flags &= 65011714;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ci(e, t, r, i, c, u) {
    var g = 0;
    if (i = e, typeof e == "function") Fc(e) && (g = 1);
    else if (typeof e == "string")
      g = CS(
        e,
        r,
        ae.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case F:
          return e = tn(31, r, t, c), e.elementType = F, e.lanes = u, e;
        case O:
          return br(r.children, c, u, t);
        case C:
          g = 8, c |= 24;
          break;
        case D:
          return e = tn(12, r, t, c | 2), e.elementType = D, e.lanes = u, e;
        case j:
          return e = tn(13, r, t, c), e.elementType = j, e.lanes = u, e;
        case z:
          return e = tn(19, r, t, c), e.elementType = z, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _:
                g = 10;
                break e;
              case A:
                g = 9;
                break e;
              case T:
                g = 11;
                break e;
              case R:
                g = 14;
                break e;
              case U:
                g = 16, i = null;
                break e;
            }
          g = 29, r = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = tn(g, r, t, c), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function br(e, t, r, i) {
    return e = tn(7, e, i, t), e.lanes = r, e;
  }
  function Qc(e, t, r) {
    return e = tn(6, e, null, t), e.lanes = r, e;
  }
  function ch(e) {
    var t = tn(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Zc(e, t, r) {
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
  var uh = /* @__PURE__ */ new WeakMap();
  function hn(e, t) {
    if (typeof e == "object" && e !== null) {
      var r = uh.get(e);
      return r !== void 0 ? r : (t = {
        value: e,
        source: t,
        stack: Da(t)
      }, uh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Da(t)
    };
  }
  var so = [], co = 0, Ei = null, dl = 0, pn = [], gn = 0, Aa = null, Rn = 1, kn = "";
  function ta(e, t) {
    so[co++] = dl, so[co++] = Ei, Ei = e, dl = t;
  }
  function fh(e, t, r) {
    pn[gn++] = Rn, pn[gn++] = kn, pn[gn++] = Aa, Aa = e;
    var i = Rn;
    e = kn;
    var c = 32 - Gt(i) - 1;
    i &= ~(1 << c), r += 1;
    var u = 32 - Gt(t) + c;
    if (30 < u) {
      var g = c - c % 5;
      u = (i & (1 << g) - 1).toString(32), i >>= g, c -= g, Rn = 1 << 32 - Gt(t) + c | r << c | i, kn = u + e;
    } else
      Rn = 1 << u | r << c | i, kn = e;
  }
  function Ic(e) {
    e.return !== null && (ta(e, 1), fh(e, 1, 0));
  }
  function Kc(e) {
    for (; e === Ei; )
      Ei = so[--co], so[co] = null, dl = so[--co], so[co] = null;
    for (; e === Aa; )
      Aa = pn[--gn], pn[gn] = null, kn = pn[--gn], pn[gn] = null, Rn = pn[--gn], pn[gn] = null;
  }
  function dh(e, t) {
    pn[gn++] = Rn, pn[gn++] = kn, pn[gn++] = Aa, Rn = t.id, kn = t.overflow, Aa = e;
  }
  var zt = null, ot = null, Be = !1, Ra = null, yn = !1, $c = Error(o(519));
  function ka(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ml(hn(t, e)), $c;
  }
  function mh(e) {
    var t = e.stateNode, r = e.type, i = e.memoizedProps;
    switch (t[kt] = e, t[Xt] = i, r) {
      case "dialog":
        Ae("cancel", t), Ae("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < jl.length; r++)
          Ae(jl[r], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ae("error", t), Ae("load", t);
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        Ae("invalid", t), Tm(
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
        Ae("invalid", t);
        break;
      case "textarea":
        Ae("invalid", t), Dm(t, i.value, i.defaultValue, i.children);
    }
    r = i.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || t.textContent === "" + r || i.suppressHydrationWarning === !0 || Ng(t.textContent, r) ? (i.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)), i.onScroll != null && Ae("scroll", t), i.onScrollEnd != null && Ae("scrollend", t), i.onClick != null && (t.onclick = $n), t = !0) : t = !1, t || ka(e, !0);
  }
  function hh(e) {
    for (zt = e.return; zt; )
      switch (zt.tag) {
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
          zt = zt.return;
      }
  }
  function uo(e) {
    if (e !== zt) return !1;
    if (!Be) return hh(e), Be = !0, !1;
    var t = e.tag, r;
    if ((r = t !== 3 && t !== 27) && ((r = t === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || yf(e.type, e.memoizedProps)), r = !r), r && ot && ka(e), hh(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = Ug(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = Ug(e);
    } else
      t === 27 ? (t = ot, Fa(e.type) ? (e = Sf, Sf = null, ot = e) : ot = t) : ot = zt ? bn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function xr() {
    ot = zt = null, Be = !1;
  }
  function Jc() {
    var e = Ra;
    return e !== null && (Kt === null ? Kt = e : Kt.push.apply(
      Kt,
      e
    ), Ra = null), e;
  }
  function ml(e) {
    Ra === null ? Ra = [e] : Ra.push(e);
  }
  var eu = N(null), wr = null, na = null;
  function za(e, t, r) {
    J(eu, t._currentValue), t._currentValue = r;
  }
  function aa(e) {
    e._currentValue = eu.current, V(eu);
  }
  function tu(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function nu(e, t, r, i) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var u = c.dependencies;
      if (u !== null) {
        var g = c.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var S = u;
          u = c;
          for (var k = 0; k < t.length; k++)
            if (S.context === t[k]) {
              u.lanes |= r, S = u.alternate, S !== null && (S.lanes |= r), tu(
                u.return,
                r,
                e
              ), i || (g = null);
              break e;
            }
          u = S.next;
        }
      } else if (c.tag === 18) {
        if (g = c.return, g === null) throw Error(o(341));
        g.lanes |= r, u = g.alternate, u !== null && (u.lanes |= r), tu(g, r, e), g = null;
      } else g = c.child;
      if (g !== null) g.return = c;
      else
        for (g = c; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (c = g.sibling, c !== null) {
            c.return = g.return, g = c;
            break;
          }
          g = g.return;
        }
      c = g;
    }
  }
  function fo(e, t, r, i) {
    e = null;
    for (var c = t, u = !1; c !== null; ) {
      if (!u) {
        if ((c.flags & 524288) !== 0) u = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var g = c.alternate;
        if (g === null) throw Error(o(387));
        if (g = g.memoizedProps, g !== null) {
          var S = c.type;
          en(c.pendingProps.value, g.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (c === ve.current) {
        if (g = c.alternate, g === null) throw Error(o(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ll) : e = [Ll]);
      }
      c = c.return;
    }
    e !== null && nu(
      t,
      e,
      r,
      i
    ), t.flags |= 262144;
  }
  function Oi(e) {
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
  function jt(e) {
    return ph(wr, e);
  }
  function Ti(e, t) {
    return wr === null && Sr(e), ph(e, t);
  }
  function ph(e, t) {
    var r = t._currentValue;
    if (t = { context: t, memoizedValue: r, next: null }, na === null) {
      if (e === null) throw Error(o(308));
      na = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else na = na.next = t;
    return r;
  }
  var bw = typeof AbortController < "u" ? AbortController : function() {
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
  }, xw = n.unstable_scheduleCallback, ww = n.unstable_NormalPriority, xt = {
    $$typeof: _,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function au() {
    return {
      controller: new bw(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hl(e) {
    e.refCount--, e.refCount === 0 && xw(ww, function() {
      e.controller.abort();
    });
  }
  var pl = null, ru = 0, mo = 0, ho = null;
  function Sw(e, t) {
    if (pl === null) {
      var r = pl = [];
      ru = 0, mo = sf(), ho = {
        status: "pending",
        value: void 0,
        then: function(i) {
          r.push(i);
        }
      };
    }
    return ru++, t.then(gh, gh), t;
  }
  function gh() {
    if (--ru === 0 && pl !== null) {
      ho !== null && (ho.status = "fulfilled");
      var e = pl;
      pl = null, mo = 0, ho = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Cw(e, t) {
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
  var yh = H.S;
  H.S = function(e, t) {
    eg = Rt(), typeof t == "object" && t !== null && typeof t.then == "function" && Sw(e, t), yh !== null && yh(e, t);
  };
  var Cr = N(null);
  function ou() {
    var e = Cr.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Mi(e, t) {
    t === null ? J(Cr, Cr.current) : J(Cr, t.pool);
  }
  function vh() {
    var e = ou();
    return e === null ? null : { parent: xt._currentValue, pool: e };
  }
  var po = Error(o(460)), lu = Error(o(474)), Di = Error(o(542)), _i = { then: function() {
  } };
  function bh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function xh(e, t, r) {
    switch (r = e[r], r === void 0 ? e.push(t) : r !== t && (t.then($n, $n), t = r), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Sh(e), e;
      default:
        if (typeof t.status == "string") t.then($n, $n);
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
            throw e = t.reason, Sh(e), e;
        }
        throw Or = t, po;
    }
  }
  function Er(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Or = r, po) : r;
    }
  }
  var Or = null;
  function wh() {
    if (Or === null) throw Error(o(459));
    var e = Or;
    return Or = null, e;
  }
  function Sh(e) {
    if (e === po || e === Di)
      throw Error(o(483));
  }
  var go = null, gl = 0;
  function Ni(e) {
    var t = gl;
    return gl += 1, go === null && (go = []), xh(go, e, t);
  }
  function yl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ai(e, t) {
    throw t.$$typeof === w ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ch(e) {
    function t(B, Y) {
      if (e) {
        var L = B.deletions;
        L === null ? (B.deletions = [Y], B.flags |= 16) : L.push(Y);
      }
    }
    function r(B, Y) {
      if (!e) return null;
      for (; Y !== null; )
        t(B, Y), Y = Y.sibling;
      return null;
    }
    function i(B) {
      for (var Y = /* @__PURE__ */ new Map(); B !== null; )
        B.key !== null ? Y.set(B.key, B) : Y.set(B.index, B), B = B.sibling;
      return Y;
    }
    function c(B, Y) {
      return B = ea(B, Y), B.index = 0, B.sibling = null, B;
    }
    function u(B, Y, L) {
      return B.index = L, e ? (L = B.alternate, L !== null ? (L = L.index, L < Y ? (B.flags |= 67108866, Y) : L) : (B.flags |= 67108866, Y)) : (B.flags |= 1048576, Y);
    }
    function g(B) {
      return e && B.alternate === null && (B.flags |= 67108866), B;
    }
    function S(B, Y, L, Z) {
      return Y === null || Y.tag !== 6 ? (Y = Qc(L, B.mode, Z), Y.return = B, Y) : (Y = c(Y, L), Y.return = B, Y);
    }
    function k(B, Y, L, Z) {
      var ge = L.type;
      return ge === O ? X(
        B,
        Y,
        L.props.children,
        Z,
        L.key
      ) : Y !== null && (Y.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === U && Er(ge) === Y.type) ? (Y = c(Y, L.props), yl(Y, L), Y.return = B, Y) : (Y = Ci(
        L.type,
        L.key,
        L.props,
        null,
        B.mode,
        Z
      ), yl(Y, L), Y.return = B, Y);
    }
    function q(B, Y, L, Z) {
      return Y === null || Y.tag !== 4 || Y.stateNode.containerInfo !== L.containerInfo || Y.stateNode.implementation !== L.implementation ? (Y = Zc(L, B.mode, Z), Y.return = B, Y) : (Y = c(Y, L.children || []), Y.return = B, Y);
    }
    function X(B, Y, L, Z, ge) {
      return Y === null || Y.tag !== 7 ? (Y = br(
        L,
        B.mode,
        Z,
        ge
      ), Y.return = B, Y) : (Y = c(Y, L), Y.return = B, Y);
    }
    function I(B, Y, L) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return Y = Qc(
          "" + Y,
          B.mode,
          L
        ), Y.return = B, Y;
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case E:
            return L = Ci(
              Y.type,
              Y.key,
              Y.props,
              null,
              B.mode,
              L
            ), yl(L, Y), L.return = B, L;
          case M:
            return Y = Zc(
              Y,
              B.mode,
              L
            ), Y.return = B, Y;
          case U:
            return Y = Er(Y), I(B, Y, L);
        }
        if (me(Y) || ee(Y))
          return Y = br(
            Y,
            B.mode,
            L,
            null
          ), Y.return = B, Y;
        if (typeof Y.then == "function")
          return I(B, Ni(Y), L);
        if (Y.$$typeof === _)
          return I(
            B,
            Ti(B, Y),
            L
          );
        Ai(B, Y);
      }
      return null;
    }
    function P(B, Y, L, Z) {
      var ge = Y !== null ? Y.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return ge !== null ? null : S(B, Y, "" + L, Z);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case E:
            return L.key === ge ? k(B, Y, L, Z) : null;
          case M:
            return L.key === ge ? q(B, Y, L, Z) : null;
          case U:
            return L = Er(L), P(B, Y, L, Z);
        }
        if (me(L) || ee(L))
          return ge !== null ? null : X(B, Y, L, Z, null);
        if (typeof L.then == "function")
          return P(
            B,
            Y,
            Ni(L),
            Z
          );
        if (L.$$typeof === _)
          return P(
            B,
            Y,
            Ti(B, L),
            Z
          );
        Ai(B, L);
      }
      return null;
    }
    function G(B, Y, L, Z, ge) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return B = B.get(L) || null, S(Y, B, "" + Z, ge);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case E:
            return B = B.get(
              Z.key === null ? L : Z.key
            ) || null, k(Y, B, Z, ge);
          case M:
            return B = B.get(
              Z.key === null ? L : Z.key
            ) || null, q(Y, B, Z, ge);
          case U:
            return Z = Er(Z), G(
              B,
              Y,
              L,
              Z,
              ge
            );
        }
        if (me(Z) || ee(Z))
          return B = B.get(L) || null, X(Y, B, Z, ge, null);
        if (typeof Z.then == "function")
          return G(
            B,
            Y,
            L,
            Ni(Z),
            ge
          );
        if (Z.$$typeof === _)
          return G(
            B,
            Y,
            L,
            Ti(Y, Z),
            ge
          );
        Ai(Y, Z);
      }
      return null;
    }
    function fe(B, Y, L, Z) {
      for (var ge = null, Pe = null, de = Y, Me = Y = 0, ze = null; de !== null && Me < L.length; Me++) {
        de.index > Me ? (ze = de, de = null) : ze = de.sibling;
        var Ge = P(
          B,
          de,
          L[Me],
          Z
        );
        if (Ge === null) {
          de === null && (de = ze);
          break;
        }
        e && de && Ge.alternate === null && t(B, de), Y = u(Ge, Y, Me), Pe === null ? ge = Ge : Pe.sibling = Ge, Pe = Ge, de = ze;
      }
      if (Me === L.length)
        return r(B, de), Be && ta(B, Me), ge;
      if (de === null) {
        for (; Me < L.length; Me++)
          de = I(B, L[Me], Z), de !== null && (Y = u(
            de,
            Y,
            Me
          ), Pe === null ? ge = de : Pe.sibling = de, Pe = de);
        return Be && ta(B, Me), ge;
      }
      for (de = i(de); Me < L.length; Me++)
        ze = G(
          de,
          B,
          Me,
          L[Me],
          Z
        ), ze !== null && (e && ze.alternate !== null && de.delete(
          ze.key === null ? Me : ze.key
        ), Y = u(
          ze,
          Y,
          Me
        ), Pe === null ? ge = ze : Pe.sibling = ze, Pe = ze);
      return e && de.forEach(function($a) {
        return t(B, $a);
      }), Be && ta(B, Me), ge;
    }
    function xe(B, Y, L, Z) {
      if (L == null) throw Error(o(151));
      for (var ge = null, Pe = null, de = Y, Me = Y = 0, ze = null, Ge = L.next(); de !== null && !Ge.done; Me++, Ge = L.next()) {
        de.index > Me ? (ze = de, de = null) : ze = de.sibling;
        var $a = P(B, de, Ge.value, Z);
        if ($a === null) {
          de === null && (de = ze);
          break;
        }
        e && de && $a.alternate === null && t(B, de), Y = u($a, Y, Me), Pe === null ? ge = $a : Pe.sibling = $a, Pe = $a, de = ze;
      }
      if (Ge.done)
        return r(B, de), Be && ta(B, Me), ge;
      if (de === null) {
        for (; !Ge.done; Me++, Ge = L.next())
          Ge = I(B, Ge.value, Z), Ge !== null && (Y = u(Ge, Y, Me), Pe === null ? ge = Ge : Pe.sibling = Ge, Pe = Ge);
        return Be && ta(B, Me), ge;
      }
      for (de = i(de); !Ge.done; Me++, Ge = L.next())
        Ge = G(de, B, Me, Ge.value, Z), Ge !== null && (e && Ge.alternate !== null && de.delete(Ge.key === null ? Me : Ge.key), Y = u(Ge, Y, Me), Pe === null ? ge = Ge : Pe.sibling = Ge, Pe = Ge);
      return e && de.forEach(function(zS) {
        return t(B, zS);
      }), Be && ta(B, Me), ge;
    }
    function tt(B, Y, L, Z) {
      if (typeof L == "object" && L !== null && L.type === O && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case E:
            e: {
              for (var ge = L.key; Y !== null; ) {
                if (Y.key === ge) {
                  if (ge = L.type, ge === O) {
                    if (Y.tag === 7) {
                      r(
                        B,
                        Y.sibling
                      ), Z = c(
                        Y,
                        L.props.children
                      ), Z.return = B, B = Z;
                      break e;
                    }
                  } else if (Y.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === U && Er(ge) === Y.type) {
                    r(
                      B,
                      Y.sibling
                    ), Z = c(Y, L.props), yl(Z, L), Z.return = B, B = Z;
                    break e;
                  }
                  r(B, Y);
                  break;
                } else t(B, Y);
                Y = Y.sibling;
              }
              L.type === O ? (Z = br(
                L.props.children,
                B.mode,
                Z,
                L.key
              ), Z.return = B, B = Z) : (Z = Ci(
                L.type,
                L.key,
                L.props,
                null,
                B.mode,
                Z
              ), yl(Z, L), Z.return = B, B = Z);
            }
            return g(B);
          case M:
            e: {
              for (ge = L.key; Y !== null; ) {
                if (Y.key === ge)
                  if (Y.tag === 4 && Y.stateNode.containerInfo === L.containerInfo && Y.stateNode.implementation === L.implementation) {
                    r(
                      B,
                      Y.sibling
                    ), Z = c(Y, L.children || []), Z.return = B, B = Z;
                    break e;
                  } else {
                    r(B, Y);
                    break;
                  }
                else t(B, Y);
                Y = Y.sibling;
              }
              Z = Zc(L, B.mode, Z), Z.return = B, B = Z;
            }
            return g(B);
          case U:
            return L = Er(L), tt(
              B,
              Y,
              L,
              Z
            );
        }
        if (me(L))
          return fe(
            B,
            Y,
            L,
            Z
          );
        if (ee(L)) {
          if (ge = ee(L), typeof ge != "function") throw Error(o(150));
          return L = ge.call(L), xe(
            B,
            Y,
            L,
            Z
          );
        }
        if (typeof L.then == "function")
          return tt(
            B,
            Y,
            Ni(L),
            Z
          );
        if (L.$$typeof === _)
          return tt(
            B,
            Y,
            Ti(B, L),
            Z
          );
        Ai(B, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, Y !== null && Y.tag === 6 ? (r(B, Y.sibling), Z = c(Y, L), Z.return = B, B = Z) : (r(B, Y), Z = Qc(L, B.mode, Z), Z.return = B, B = Z), g(B)) : r(B, Y);
    }
    return function(B, Y, L, Z) {
      try {
        gl = 0;
        var ge = tt(
          B,
          Y,
          L,
          Z
        );
        return go = null, ge;
      } catch (de) {
        if (de === po || de === Di) throw de;
        var Pe = tn(29, de, null, B.mode);
        return Pe.lanes = Z, Pe.return = B, Pe;
      }
    };
  }
  var Tr = Ch(!0), Eh = Ch(!1), ja = !1;
  function iu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function su(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ya(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ha(e, t, r) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ve & 2) !== 0) {
      var c = i.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), i.pending = t, t = Si(e), ih(e, null, r), t;
    }
    return wi(e, i, t, r), Si(e);
  }
  function vl(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, pm(e, r);
    }
  }
  function cu(e, t) {
    var r = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, r === i)) {
      var c = null, u = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var g = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          u === null ? c = u = g : u = u.next = g, r = r.next;
        } while (r !== null);
        u === null ? c = u = t : u = u.next = t;
      } else c = u = t;
      r = {
        baseState: i.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  var uu = !1;
  function bl() {
    if (uu) {
      var e = ho;
      if (e !== null) throw e;
    }
  }
  function xl(e, t, r, i) {
    uu = !1;
    var c = e.updateQueue;
    ja = !1;
    var u = c.firstBaseUpdate, g = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var k = S, q = k.next;
      k.next = null, g === null ? u = q : g.next = q, g = k;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, S = X.lastBaseUpdate, S !== g && (S === null ? X.firstBaseUpdate = q : S.next = q, X.lastBaseUpdate = k));
    }
    if (u !== null) {
      var I = c.baseState;
      g = 0, X = q = k = null, S = u;
      do {
        var P = S.lane & -536870913, G = P !== S.lane;
        if (G ? (ke & P) === P : (i & P) === P) {
          P !== 0 && P === mo && (uu = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = e, xe = S;
            P = t;
            var tt = r;
            switch (xe.tag) {
              case 1:
                if (fe = xe.payload, typeof fe == "function") {
                  I = fe.call(tt, I, P);
                  break e;
                }
                I = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = xe.payload, P = typeof fe == "function" ? fe.call(tt, I, P) : fe, P == null) break e;
                I = y({}, I, P);
                break e;
              case 2:
                ja = !0;
            }
          }
          P = S.callback, P !== null && (e.flags |= 64, G && (e.flags |= 8192), G = c.callbacks, G === null ? c.callbacks = [P] : G.push(P));
        } else
          G = {
            lane: P,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, X === null ? (q = X = G, k = I) : X = X.next = G, g |= P;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          G = S, S = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      X === null && (k = I), c.baseState = k, c.firstBaseUpdate = q, c.lastBaseUpdate = X, u === null && (c.shared.lanes = 0), Pa |= g, e.lanes = g, e.memoizedState = I;
    }
  }
  function Oh(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Th(e, t) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        Oh(r[e], t);
  }
  var yo = N(null), Ri = N(0);
  function Mh(e, t) {
    e = da, J(Ri, e), J(yo, t), da = e | t.baseLanes;
  }
  function fu() {
    J(Ri, da), J(yo, yo.current);
  }
  function du() {
    da = Ri.current, V(yo), V(Ri);
  }
  var nn = N(null), vn = null;
  function Ba(e) {
    var t = e.alternate;
    J(ht, ht.current & 1), J(nn, e), vn === null && (t === null || yo.current !== null || t.memoizedState !== null) && (vn = e);
  }
  function mu(e) {
    J(ht, ht.current), J(nn, e), vn === null && (vn = e);
  }
  function Dh(e) {
    e.tag === 22 ? (J(ht, ht.current), J(nn, e), vn === null && (vn = e)) : Ua();
  }
  function Ua() {
    J(ht, ht.current), J(nn, nn.current);
  }
  function an(e) {
    V(nn), vn === e && (vn = null), V(ht);
  }
  var ht = N(0);
  function ki(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || xf(r) || wf(r)))
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
  var ra = 0, Te = null, Je = null, wt = null, zi = !1, vo = !1, Mr = !1, ji = 0, wl = 0, bo = null, Ew = 0;
  function ut() {
    throw Error(o(321));
  }
  function hu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!en(e[r], t[r])) return !1;
    return !0;
  }
  function pu(e, t, r, i, c, u) {
    return ra = u, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? fp : Nu, Mr = !1, u = r(i, c), Mr = !1, vo && (u = Nh(
      t,
      r,
      i,
      c
    )), _h(e), u;
  }
  function _h(e) {
    H.H = El;
    var t = Je !== null && Je.next !== null;
    if (ra = 0, wt = Je = Te = null, zi = !1, wl = 0, bo = null, t) throw Error(o(300));
    e === null || St || (e = e.dependencies, e !== null && Oi(e) && (St = !0));
  }
  function Nh(e, t, r, i) {
    Te = e;
    var c = 0;
    do {
      if (vo && (bo = null), wl = 0, vo = !1, 25 <= c) throw Error(o(301));
      if (c += 1, wt = Je = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      H.H = dp, u = t(r, i);
    } while (vo);
    return u;
  }
  function Ow() {
    var e = H.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Sl(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Te.flags |= 1024), t;
  }
  function gu() {
    var e = ji !== 0;
    return ji = 0, e;
  }
  function yu(e, t, r) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r;
  }
  function vu(e) {
    if (zi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      zi = !1;
    }
    ra = 0, wt = Je = Te = null, vo = !1, wl = ji = 0, bo = null;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return wt === null ? Te.memoizedState = wt = e : wt = wt.next = e, wt;
  }
  function pt() {
    if (Je === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = wt === null ? Te.memoizedState : wt.next;
    if (t !== null)
      wt = t, Je = e;
    else {
      if (e === null)
        throw Te.alternate === null ? Error(o(467)) : Error(o(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, wt === null ? Te.memoizedState = wt = e : wt = wt.next = e;
    }
    return wt;
  }
  function Yi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sl(e) {
    var t = wl;
    return wl += 1, bo === null && (bo = []), e = xh(bo, e, t), t = Te, (wt === null ? t.memoizedState : wt.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? fp : Nu), e;
  }
  function Hi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Sl(e);
      if (e.$$typeof === _) return jt(e);
    }
    throw Error(o(438, String(e)));
  }
  function bu(e) {
    var t = null, r = Te.updateQueue;
    if (r !== null && (t = r.memoCache), t == null) {
      var i = Te.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), r === null && (r = Yi(), Te.updateQueue = r), r.memoCache = t, r = t.data[t.index], r === void 0)
      for (r = t.data[t.index] = Array(e), i = 0; i < e; i++)
        r[i] = $;
    return t.index++, r;
  }
  function oa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bi(e) {
    var t = pt();
    return xu(t, Je, e);
  }
  function xu(e, t, r) {
    var i = e.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = r;
    var c = e.baseQueue, u = i.pending;
    if (u !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = u.next, u.next = g;
      }
      t.baseQueue = c = u, i.pending = null;
    }
    if (u = e.baseState, c === null) e.memoizedState = u;
    else {
      t = c.next;
      var S = g = null, k = null, q = t, X = !1;
      do {
        var I = q.lane & -536870913;
        if (I !== q.lane ? (ke & I) === I : (ra & I) === I) {
          var P = q.revertLane;
          if (P === 0)
            k !== null && (k = k.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), I === mo && (X = !0);
          else if ((ra & P) === P) {
            q = q.next, P === mo && (X = !0);
            continue;
          } else
            I = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, k === null ? (S = k = I, g = u) : k = k.next = I, Te.lanes |= P, Pa |= P;
          I = q.action, Mr && r(u, I), u = q.hasEagerState ? q.eagerState : r(u, I);
        } else
          P = {
            lane: I,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, k === null ? (S = k = P, g = u) : k = k.next = P, Te.lanes |= I, Pa |= I;
        q = q.next;
      } while (q !== null && q !== t);
      if (k === null ? g = u : k.next = S, !en(u, e.memoizedState) && (St = !0, X && (r = ho, r !== null)))
        throw r;
      e.memoizedState = u, e.baseState = g, e.baseQueue = k, i.lastRenderedState = u;
    }
    return c === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function wu(e) {
    var t = pt(), r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch, c = r.pending, u = t.memoizedState;
    if (c !== null) {
      r.pending = null;
      var g = c = c.next;
      do
        u = e(u, g.action), g = g.next;
      while (g !== c);
      en(u, t.memoizedState) || (St = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), r.lastRenderedState = u;
    }
    return [u, i];
  }
  function Ah(e, t, r) {
    var i = Te, c = pt(), u = Be;
    if (u) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = t();
    var g = !en(
      (Je || c).memoizedState,
      r
    );
    if (g && (c.memoizedState = r, St = !0), c = c.queue, Eu(zh.bind(null, i, c, e), [
      e
    ]), c.getSnapshot !== t || g || wt !== null && wt.memoizedState.tag & 1) {
      if (i.flags |= 2048, xo(
        9,
        { destroy: void 0 },
        kh.bind(
          null,
          i,
          c,
          r,
          t
        ),
        null
      ), nt === null) throw Error(o(349));
      u || (ra & 127) !== 0 || Rh(i, t, r);
    }
    return r;
  }
  function Rh(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Te.updateQueue, t === null ? (t = Yi(), Te.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function kh(e, t, r, i) {
    t.value = r, t.getSnapshot = i, jh(t) && Yh(e);
  }
  function zh(e, t, r) {
    return r(function() {
      jh(t) && Yh(e);
    });
  }
  function jh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !en(e, r);
    } catch {
      return !0;
    }
  }
  function Yh(e) {
    var t = vr(e, 2);
    t !== null && $t(t, e, 2);
  }
  function Su(e) {
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
  function Hh(e, t, r, i) {
    return e.baseState = r, xu(
      e,
      Je,
      typeof i == "function" ? i : oa
    );
  }
  function Tw(e, t, r, i, c) {
    if (qi(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(g) {
          u.listeners.push(g);
        }
      };
      H.T !== null ? r(!0) : u.isTransition = !1, i(u), r = t.pending, r === null ? (u.next = t.pending = u, Bh(t, u)) : (u.next = r.next, t.pending = r.next = u);
    }
  }
  function Bh(e, t) {
    var r = t.action, i = t.payload, c = e.state;
    if (t.isTransition) {
      var u = H.T, g = {};
      H.T = g;
      try {
        var S = r(c, i), k = H.S;
        k !== null && k(g, S), Uh(e, t, S);
      } catch (q) {
        Cu(e, t, q);
      } finally {
        u !== null && g.types !== null && (u.types = g.types), H.T = u;
      }
    } else
      try {
        u = r(c, i), Uh(e, t, u);
      } catch (q) {
        Cu(e, t, q);
      }
  }
  function Uh(e, t, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(i) {
        Lh(e, t, i);
      },
      function(i) {
        return Cu(e, t, i);
      }
    ) : Lh(e, t, r);
  }
  function Lh(e, t, r) {
    t.status = "fulfilled", t.value = r, qh(t), e.state = r, t = e.pending, t !== null && (r = t.next, r === t ? e.pending = null : (r = r.next, t.next = r, Bh(e, r)));
  }
  function Cu(e, t, r) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = r, qh(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function qh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ph(e, t) {
    return t;
  }
  function Gh(e, t) {
    if (Be) {
      var r = nt.formState;
      if (r !== null) {
        e: {
          var i = Te;
          if (Be) {
            if (ot) {
              t: {
                for (var c = ot, u = yn; c.nodeType !== 8; ) {
                  if (!u) {
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
                u = c.data, c = u === "F!" || u === "F" ? c : null;
              }
              if (c) {
                ot = bn(
                  c.nextSibling
                ), i = c.data === "F!";
                break e;
              }
            }
            ka(i);
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
      lastRenderedReducer: Ph,
      lastRenderedState: t
    }, r.queue = i, r = sp.bind(
      null,
      Te,
      i
    ), i.dispatch = r, i = Su(!1), u = _u.bind(
      null,
      Te,
      !1,
      i.queue
    ), i = Wt(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = c, r = Tw.bind(
      null,
      Te,
      c,
      u,
      r
    ), c.dispatch = r, i.memoizedState = e, [t, r, !1];
  }
  function Wh(e) {
    var t = pt();
    return Vh(t, Je, e);
  }
  function Vh(e, t, r) {
    if (t = xu(
      e,
      t,
      Ph
    )[0], e = Bi(oa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Sl(t);
      } catch (g) {
        throw g === po ? Di : g;
      }
    else i = t;
    t = pt();
    var c = t.queue, u = c.dispatch;
    return r !== t.memoizedState && (Te.flags |= 2048, xo(
      9,
      { destroy: void 0 },
      Mw.bind(null, c, r),
      null
    )), [i, u, e];
  }
  function Mw(e, t) {
    e.action = t;
  }
  function Xh(e) {
    var t = pt(), r = Je;
    if (r !== null)
      return Vh(t, r, e);
    pt(), t = t.memoizedState, r = pt();
    var i = r.queue.dispatch;
    return r.memoizedState = e, [t, i, !1];
  }
  function xo(e, t, r, i) {
    return e = { tag: e, create: r, deps: i, inst: t, next: null }, t = Te.updateQueue, t === null && (t = Yi(), Te.updateQueue = t), r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e), e;
  }
  function Fh() {
    return pt().memoizedState;
  }
  function Ui(e, t, r, i) {
    var c = Wt();
    Te.flags |= e, c.memoizedState = xo(
      1 | t,
      { destroy: void 0 },
      r,
      i === void 0 ? null : i
    );
  }
  function Li(e, t, r, i) {
    var c = pt();
    i = i === void 0 ? null : i;
    var u = c.memoizedState.inst;
    Je !== null && i !== null && hu(i, Je.memoizedState.deps) ? c.memoizedState = xo(t, u, r, i) : (Te.flags |= e, c.memoizedState = xo(
      1 | t,
      u,
      r,
      i
    ));
  }
  function Qh(e, t) {
    Ui(8390656, 8, e, t);
  }
  function Eu(e, t) {
    Li(2048, 8, e, t);
  }
  function Dw(e) {
    Te.flags |= 4;
    var t = Te.updateQueue;
    if (t === null)
      t = Yi(), Te.updateQueue = t, t.events = [e];
    else {
      var r = t.events;
      r === null ? t.events = [e] : r.push(e);
    }
  }
  function Zh(e) {
    var t = pt().memoizedState;
    return Dw({ ref: t, nextImpl: e }), function() {
      if ((Ve & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ih(e, t) {
    return Li(4, 2, e, t);
  }
  function Kh(e, t) {
    return Li(4, 4, e, t);
  }
  function $h(e, t) {
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
  function Jh(e, t, r) {
    r = r != null ? r.concat([e]) : null, Li(4, 4, $h.bind(null, t, e), r);
  }
  function Ou() {
  }
  function ep(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return t !== null && hu(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function tp(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    if (t !== null && hu(t, i[1]))
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
  function Tu(e, t, r) {
    return r === void 0 || (ra & 1073741824) !== 0 && (ke & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = r, e = ng(), Te.lanes |= e, Pa |= e, r);
  }
  function np(e, t, r, i) {
    return en(r, t) ? r : yo.current !== null ? (e = Tu(e, r, i), en(e, t) || (St = !0), e) : (ra & 42) === 0 || (ra & 1073741824) !== 0 && (ke & 261930) === 0 ? (St = !0, e.memoizedState = r) : (e = ng(), Te.lanes |= e, Pa |= e, t);
  }
  function ap(e, t, r, i, c) {
    var u = Q.p;
    Q.p = u !== 0 && 8 > u ? u : 8;
    var g = H.T, S = {};
    H.T = S, _u(e, !1, t, r);
    try {
      var k = c(), q = H.S;
      if (q !== null && q(S, k), k !== null && typeof k == "object" && typeof k.then == "function") {
        var X = Cw(
          k,
          i
        );
        Cl(
          e,
          t,
          X,
          ln(e)
        );
      } else
        Cl(
          e,
          t,
          i,
          ln(e)
        );
    } catch (I) {
      Cl(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: I },
        ln()
      );
    } finally {
      Q.p = u, g !== null && S.types !== null && (g.types = S.types), H.T = g;
    }
  }
  function _w() {
  }
  function Mu(e, t, r, i) {
    if (e.tag !== 5) throw Error(o(476));
    var c = rp(e).queue;
    ap(
      e,
      c,
      t,
      K,
      r === null ? _w : function() {
        return op(e), r(i);
      }
    );
  }
  function rp(e) {
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
  function op(e) {
    var t = rp(e);
    t.next === null && (t = e.alternate.memoizedState), Cl(
      e,
      t.next.queue,
      {},
      ln()
    );
  }
  function Du() {
    return jt(Ll);
  }
  function lp() {
    return pt().memoizedState;
  }
  function ip() {
    return pt().memoizedState;
  }
  function Nw(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = ln();
          e = Ya(r);
          var i = Ha(t, e, r);
          i !== null && ($t(i, t, r), vl(i, t, r)), t = { cache: au() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Aw(e, t, r) {
    var i = ln();
    r = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qi(e) ? cp(t, r) : (r = Xc(e, t, r, i), r !== null && ($t(r, e, i), up(r, t, i)));
  }
  function sp(e, t, r) {
    var i = ln();
    Cl(e, t, r, i);
  }
  function Cl(e, t, r, i) {
    var c = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (qi(e)) cp(t, c);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var g = t.lastRenderedState, S = u(g, r);
          if (c.hasEagerState = !0, c.eagerState = S, en(S, g))
            return wi(e, t, c, 0), nt === null && xi(), !1;
        } catch {
        }
      if (r = Xc(e, t, c, i), r !== null)
        return $t(r, e, i), up(r, t, i), !0;
    }
    return !1;
  }
  function _u(e, t, r, i) {
    if (i = {
      lane: 2,
      revertLane: sf(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qi(e)) {
      if (t) throw Error(o(479));
    } else
      t = Xc(
        e,
        r,
        i,
        2
      ), t !== null && $t(t, e, 2);
  }
  function qi(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te;
  }
  function cp(e, t) {
    vo = zi = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function up(e, t, r) {
    if ((r & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, pm(e, r);
    }
  }
  var El = {
    readContext: jt,
    use: Hi,
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
  El.useEffectEvent = ut;
  var fp = {
    readContext: jt,
    use: Hi,
    useCallback: function(e, t) {
      return Wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: jt,
    useEffect: Qh,
    useImperativeHandle: function(e, t, r) {
      r = r != null ? r.concat([e]) : null, Ui(
        4194308,
        4,
        $h.bind(null, t, e),
        r
      );
    },
    useLayoutEffect: function(e, t) {
      return Ui(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ui(4, 2, e, t);
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
      }, i.queue = e, e = e.dispatch = Aw.bind(
        null,
        Te,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = Wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Su(e);
      var t = e.queue, r = sp.bind(null, Te, t);
      return t.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Ou,
    useDeferredValue: function(e, t) {
      var r = Wt();
      return Tu(r, e, t);
    },
    useTransition: function() {
      var e = Su(!1);
      return e = ap.bind(
        null,
        Te,
        e.queue,
        !0,
        !1
      ), Wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, r) {
      var i = Te, c = Wt();
      if (Be) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = t(), nt === null)
          throw Error(o(349));
        (ke & 127) !== 0 || Rh(i, t, r);
      }
      c.memoizedState = r;
      var u = { value: r, getSnapshot: t };
      return c.queue = u, Qh(zh.bind(null, i, u, e), [
        e
      ]), i.flags |= 2048, xo(
        9,
        { destroy: void 0 },
        kh.bind(
          null,
          i,
          u,
          r,
          t
        ),
        null
      ), r;
    },
    useId: function() {
      var e = Wt(), t = nt.identifierPrefix;
      if (Be) {
        var r = kn, i = Rn;
        r = (i & ~(1 << 32 - Gt(i) - 1)).toString(32) + r, t = "_" + t + "R_" + r, r = ji++, 0 < r && (t += "H" + r.toString(32)), t += "_";
      } else
        r = Ew++, t = "_" + t + "r_" + r.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Du,
    useFormState: Gh,
    useActionState: Gh,
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
      return t.queue = r, t = _u.bind(
        null,
        Te,
        !0,
        r
      ), r.dispatch = t, [e, t];
    },
    useMemoCache: bu,
    useCacheRefresh: function() {
      return Wt().memoizedState = Nw.bind(
        null,
        Te
      );
    },
    useEffectEvent: function(e) {
      var t = Wt(), r = { impl: e };
      return t.memoizedState = r, function() {
        if ((Ve & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, Nu = {
    readContext: jt,
    use: Hi,
    useCallback: ep,
    useContext: jt,
    useEffect: Eu,
    useImperativeHandle: Jh,
    useInsertionEffect: Ih,
    useLayoutEffect: Kh,
    useMemo: tp,
    useReducer: Bi,
    useRef: Fh,
    useState: function() {
      return Bi(oa);
    },
    useDebugValue: Ou,
    useDeferredValue: function(e, t) {
      var r = pt();
      return np(
        r,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bi(oa)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : Sl(e),
        t
      ];
    },
    useSyncExternalStore: Ah,
    useId: lp,
    useHostTransitionStatus: Du,
    useFormState: Wh,
    useActionState: Wh,
    useOptimistic: function(e, t) {
      var r = pt();
      return Hh(r, Je, e, t);
    },
    useMemoCache: bu,
    useCacheRefresh: ip
  };
  Nu.useEffectEvent = Zh;
  var dp = {
    readContext: jt,
    use: Hi,
    useCallback: ep,
    useContext: jt,
    useEffect: Eu,
    useImperativeHandle: Jh,
    useInsertionEffect: Ih,
    useLayoutEffect: Kh,
    useMemo: tp,
    useReducer: wu,
    useRef: Fh,
    useState: function() {
      return wu(oa);
    },
    useDebugValue: Ou,
    useDeferredValue: function(e, t) {
      var r = pt();
      return Je === null ? Tu(r, e, t) : np(
        r,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = wu(oa)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : Sl(e),
        t
      ];
    },
    useSyncExternalStore: Ah,
    useId: lp,
    useHostTransitionStatus: Du,
    useFormState: Xh,
    useActionState: Xh,
    useOptimistic: function(e, t) {
      var r = pt();
      return Je !== null ? Hh(r, Je, e, t) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: bu,
    useCacheRefresh: ip
  };
  dp.useEffectEvent = Zh;
  function Au(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : y({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Ru = {
    enqueueSetState: function(e, t, r) {
      e = e._reactInternals;
      var i = ln(), c = Ya(i);
      c.payload = t, r != null && (c.callback = r), t = Ha(e, c, i), t !== null && ($t(t, e, i), vl(t, e, i));
    },
    enqueueReplaceState: function(e, t, r) {
      e = e._reactInternals;
      var i = ln(), c = Ya(i);
      c.tag = 1, c.payload = t, r != null && (c.callback = r), t = Ha(e, c, i), t !== null && ($t(t, e, i), vl(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var r = ln(), i = Ya(r);
      i.tag = 2, t != null && (i.callback = t), t = Ha(e, i, r), t !== null && ($t(t, e, r), vl(t, e, r));
    }
  };
  function mp(e, t, r, i, c, u, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, g) : t.prototype && t.prototype.isPureReactComponent ? !ul(r, i) || !ul(c, u) : !0;
  }
  function hp(e, t, r, i) {
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
      r === t && (r = y({}, r));
      for (var c in e)
        r[c] === void 0 && (r[c] = e[c]);
    }
    return r;
  }
  function pp(e) {
    bi(e);
  }
  function gp(e) {
    console.error(e);
  }
  function yp(e) {
    bi(e);
  }
  function Pi(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function vp(e, t, r) {
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
  function ku(e, t, r) {
    return r = Ya(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      Pi(e, t);
    }, r;
  }
  function bp(e) {
    return e = Ya(e), e.tag = 3, e;
  }
  function xp(e, t, r, i) {
    var c = r.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var u = i.value;
      e.payload = function() {
        return c(u);
      }, e.callback = function() {
        vp(t, r, i);
      };
    }
    var g = r.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      vp(t, r, i), typeof c != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var S = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function Rw(e, t, r, i, c) {
    if (r.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = r.alternate, t !== null && fo(
        t,
        r,
        c,
        !0
      ), r = nn.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return vn === null ? es() : r.alternate === null && ft === 0 && (ft = 3), r.flags &= -257, r.flags |= 65536, r.lanes = c, i === _i ? r.flags |= 16384 : (t = r.updateQueue, t === null ? r.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), rf(e, i, c)), !1;
          case 22:
            return r.flags |= 65536, i === _i ? r.flags |= 16384 : (t = r.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, r.updateQueue = t) : (r = t.retryQueue, r === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : r.add(i)), rf(e, i, c)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return rf(e, i, c), es(), !1;
    }
    if (Be)
      return t = nn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, i !== $c && (e = Error(o(422), { cause: i }), ml(hn(e, r)))) : (i !== $c && (t = Error(o(423), {
        cause: i
      }), ml(
        hn(t, r)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, i = hn(i, r), c = ku(
        e.stateNode,
        i,
        c
      ), cu(e, c), ft !== 4 && (ft = 2)), !1;
    var u = Error(o(520), { cause: i });
    if (u = hn(u, r), Rl === null ? Rl = [u] : Rl.push(u), ft !== 4 && (ft = 2), t === null) return !0;
    i = hn(i, r), r = t;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = c & -c, r.lanes |= e, e = ku(r.stateNode, i, e), cu(r, e), !1;
        case 1:
          if (t = r.type, u = r.stateNode, (r.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ga === null || !Ga.has(u))))
            return r.flags |= 65536, c &= -c, r.lanes |= c, c = bp(c), xp(
              c,
              e,
              r,
              i
            ), cu(r, c), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var zu = Error(o(461)), St = !1;
  function Yt(e, t, r, i) {
    t.child = e === null ? Eh(t, null, r, i) : Tr(
      t,
      e.child,
      r,
      i
    );
  }
  function wp(e, t, r, i, c) {
    r = r.render;
    var u = t.ref;
    if ("ref" in i) {
      var g = {};
      for (var S in i)
        S !== "ref" && (g[S] = i[S]);
    } else g = i;
    return Sr(t), i = pu(
      e,
      t,
      r,
      g,
      u,
      c
    ), S = gu(), e !== null && !St ? (yu(e, t, c), la(e, t, c)) : (Be && S && Ic(t), t.flags |= 1, Yt(e, t, i, c), t.child);
  }
  function Sp(e, t, r, i, c) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" && !Fc(u) && u.defaultProps === void 0 && r.compare === null ? (t.tag = 15, t.type = u, Cp(
        e,
        t,
        u,
        i,
        c
      )) : (e = Ci(
        r.type,
        null,
        i,
        t,
        t.mode,
        c
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Pu(e, c)) {
      var g = u.memoizedProps;
      if (r = r.compare, r = r !== null ? r : ul, r(g, i) && e.ref === t.ref)
        return la(e, t, c);
    }
    return t.flags |= 1, e = ea(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Cp(e, t, r, i, c) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ul(u, i) && e.ref === t.ref)
        if (St = !1, t.pendingProps = i = u, Pu(e, c))
          (e.flags & 131072) !== 0 && (St = !0);
        else
          return t.lanes = e.lanes, la(e, t, c);
    }
    return ju(
      e,
      t,
      r,
      i,
      c
    );
  }
  function Ep(e, t, r, i) {
    var c = i.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | r : r, e !== null) {
          for (i = t.child = e.child, c = 0; i !== null; )
            c = c | i.lanes | i.childLanes, i = i.sibling;
          i = c & ~u;
        } else i = 0, t.child = null;
        return Op(
          e,
          t,
          u,
          r,
          i
        );
      }
      if ((r & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Mi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Mh(t, u) : fu(), Dh(t);
      else
        return i = t.lanes = 536870912, Op(
          e,
          t,
          u !== null ? u.baseLanes | r : r,
          r,
          i
        );
    } else
      u !== null ? (Mi(t, u.cachePool), Mh(t, u), Ua(), t.memoizedState = null) : (e !== null && Mi(t, null), fu(), Ua());
    return Yt(e, t, c, r), t.child;
  }
  function Ol(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Op(e, t, r, i, c) {
    var u = ou();
    return u = u === null ? null : { parent: xt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: r,
      cachePool: u
    }, e !== null && Mi(t, null), fu(), Dh(t), e !== null && fo(e, t, i, !0), t.childLanes = c, null;
  }
  function Gi(e, t) {
    return t = Vi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Tp(e, t, r) {
    return Tr(t, e.child, null, r), e = Gi(t, t.pendingProps), e.flags |= 2, an(t), t.memoizedState = null, e;
  }
  function kw(e, t, r) {
    var i = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Be) {
        if (i.mode === "hidden")
          return e = Gi(t, i), t.lanes = 536870912, Ol(null, e);
        if (mu(t), (e = ot) ? (e = Bg(
          e,
          yn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Aa !== null ? { id: Rn, overflow: kn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = ch(e), r.return = t, t.child = r, zt = t, ot = null)) : e = null, e === null) throw ka(t);
        return t.lanes = 536870912, null;
      }
      return Gi(t, i);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var g = u.dehydrated;
      if (mu(t), c)
        if (t.flags & 256)
          t.flags &= -257, t = Tp(
            e,
            t,
            r
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (St || fo(e, t, r, !1), c = (r & e.childLanes) !== 0, St || c) {
        if (i = nt, i !== null && (g = gm(i, r), g !== 0 && g !== u.retryLane))
          throw u.retryLane = g, vr(e, g), $t(i, e, g), zu;
        es(), t = Tp(
          e,
          t,
          r
        );
      } else
        e = u.treeContext, ot = bn(g.nextSibling), zt = t, Be = !0, Ra = null, yn = !1, e !== null && dh(t, e), t = Gi(t, i), t.flags |= 4096;
      return t;
    }
    return e = ea(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Wi(e, t) {
    var r = t.ref;
    if (r === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (e === null || e.ref !== r) && (t.flags |= 4194816);
    }
  }
  function ju(e, t, r, i, c) {
    return Sr(t), r = pu(
      e,
      t,
      r,
      i,
      void 0,
      c
    ), i = gu(), e !== null && !St ? (yu(e, t, c), la(e, t, c)) : (Be && i && Ic(t), t.flags |= 1, Yt(e, t, r, c), t.child);
  }
  function Mp(e, t, r, i, c, u) {
    return Sr(t), t.updateQueue = null, r = Nh(
      t,
      i,
      r,
      c
    ), _h(e), i = gu(), e !== null && !St ? (yu(e, t, u), la(e, t, u)) : (Be && i && Ic(t), t.flags |= 1, Yt(e, t, r, u), t.child);
  }
  function Dp(e, t, r, i, c) {
    if (Sr(t), t.stateNode === null) {
      var u = io, g = r.contextType;
      typeof g == "object" && g !== null && (u = jt(g)), u = new r(i, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ru, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = i, u.state = t.memoizedState, u.refs = {}, iu(t), g = r.contextType, u.context = typeof g == "object" && g !== null ? jt(g) : io, u.state = t.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (Au(
        t,
        r,
        g,
        i
      ), u.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (g = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), g !== u.state && Ru.enqueueReplaceState(u, u.state, null), xl(t, i, u, c), bl(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      u = t.stateNode;
      var S = t.memoizedProps, k = Dr(r, S);
      u.props = k;
      var q = u.context, X = r.contextType;
      g = io, typeof X == "object" && X !== null && (g = jt(X));
      var I = r.getDerivedStateFromProps;
      X = typeof I == "function" || typeof u.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, X || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (S || q !== g) && hp(
        t,
        u,
        i,
        g
      ), ja = !1;
      var P = t.memoizedState;
      u.state = P, xl(t, i, u, c), bl(), q = t.memoizedState, S || P !== q || ja ? (typeof I == "function" && (Au(
        t,
        r,
        I,
        i
      ), q = t.memoizedState), (k = ja || mp(
        t,
        r,
        k,
        i,
        P,
        q,
        g
      )) ? (X || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = q), u.props = i, u.state = q, u.context = g, i = k) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      u = t.stateNode, su(e, t), g = t.memoizedProps, X = Dr(r, g), u.props = X, I = t.pendingProps, P = u.context, q = r.contextType, k = io, typeof q == "object" && q !== null && (k = jt(q)), S = r.getDerivedStateFromProps, (q = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (g !== I || P !== k) && hp(
        t,
        u,
        i,
        k
      ), ja = !1, P = t.memoizedState, u.state = P, xl(t, i, u, c), bl();
      var G = t.memoizedState;
      g !== I || P !== G || ja || e !== null && e.dependencies !== null && Oi(e.dependencies) ? (typeof S == "function" && (Au(
        t,
        r,
        S,
        i
      ), G = t.memoizedState), (X = ja || mp(
        t,
        r,
        X,
        i,
        P,
        G,
        k
      ) || e !== null && e.dependencies !== null && Oi(e.dependencies)) ? (q || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, G, k), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        i,
        G,
        k
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), u.props = i, u.state = G, u.context = k, i = X) : (typeof u.componentDidUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return u = i, Wi(e, t), i = (t.flags & 128) !== 0, u || i ? (u = t.stateNode, r = i && typeof r.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && i ? (t.child = Tr(
      t,
      e.child,
      null,
      c
    ), t.child = Tr(
      t,
      null,
      r,
      c
    )) : Yt(e, t, r, c), t.memoizedState = u.state, e = t.child) : e = la(
      e,
      t,
      c
    ), e;
  }
  function _p(e, t, r, i) {
    return xr(), t.flags |= 256, Yt(e, t, r, i), t.child;
  }
  var Yu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hu(e) {
    return { baseLanes: e, cachePool: vh() };
  }
  function Bu(e, t, r) {
    return e = e !== null ? e.childLanes & ~r : 0, t && (e |= on), e;
  }
  function Np(e, t, r) {
    var i = t.pendingProps, c = !1, u = (t.flags & 128) !== 0, g;
    if ((g = u) || (g = e !== null && e.memoizedState === null ? !1 : (ht.current & 2) !== 0), g && (c = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Be) {
        if (c ? Ba(t) : Ua(), (e = ot) ? (e = Bg(
          e,
          yn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Aa !== null ? { id: Rn, overflow: kn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = ch(e), r.return = t, t.child = r, zt = t, ot = null)) : e = null, e === null) throw ka(t);
        return wf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = i.children;
      return i = i.fallback, c ? (Ua(), c = t.mode, S = Vi(
        { mode: "hidden", children: S },
        c
      ), i = br(
        i,
        c,
        r,
        null
      ), S.return = t, i.return = t, S.sibling = i, t.child = S, i = t.child, i.memoizedState = Hu(r), i.childLanes = Bu(
        e,
        g,
        r
      ), t.memoizedState = Yu, Ol(null, i)) : (Ba(t), Uu(t, S));
    }
    var k = e.memoizedState;
    if (k !== null && (S = k.dehydrated, S !== null)) {
      if (u)
        t.flags & 256 ? (Ba(t), t.flags &= -257, t = Lu(
          e,
          t,
          r
        )) : t.memoizedState !== null ? (Ua(), t.child = e.child, t.flags |= 128, t = null) : (Ua(), S = i.fallback, c = t.mode, i = Vi(
          { mode: "visible", children: i.children },
          c
        ), S = br(
          S,
          c,
          r,
          null
        ), S.flags |= 2, i.return = t, S.return = t, i.sibling = S, t.child = i, Tr(
          t,
          e.child,
          null,
          r
        ), i = t.child, i.memoizedState = Hu(r), i.childLanes = Bu(
          e,
          g,
          r
        ), t.memoizedState = Yu, t = Ol(null, i));
      else if (Ba(t), wf(S)) {
        if (g = S.nextSibling && S.nextSibling.dataset, g) var q = g.dgst;
        g = q, i = Error(o(419)), i.stack = "", i.digest = g, ml({ value: i, source: null, stack: null }), t = Lu(
          e,
          t,
          r
        );
      } else if (St || fo(e, t, r, !1), g = (r & e.childLanes) !== 0, St || g) {
        if (g = nt, g !== null && (i = gm(g, r), i !== 0 && i !== k.retryLane))
          throw k.retryLane = i, vr(e, i), $t(g, e, i), zu;
        xf(S) || es(), t = Lu(
          e,
          t,
          r
        );
      } else
        xf(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = k.treeContext, ot = bn(
          S.nextSibling
        ), zt = t, Be = !0, Ra = null, yn = !1, e !== null && dh(t, e), t = Uu(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return c ? (Ua(), S = i.fallback, c = t.mode, k = e.child, q = k.sibling, i = ea(k, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = k.subtreeFlags & 65011712, q !== null ? S = ea(
      q,
      S
    ) : (S = br(
      S,
      c,
      r,
      null
    ), S.flags |= 2), S.return = t, i.return = t, i.sibling = S, t.child = i, Ol(null, i), i = t.child, S = e.child.memoizedState, S === null ? S = Hu(r) : (c = S.cachePool, c !== null ? (k = xt._currentValue, c = c.parent !== k ? { parent: k, pool: k } : c) : c = vh(), S = {
      baseLanes: S.baseLanes | r,
      cachePool: c
    }), i.memoizedState = S, i.childLanes = Bu(
      e,
      g,
      r
    ), t.memoizedState = Yu, Ol(e.child, i)) : (Ba(t), r = e.child, e = r.sibling, r = ea(r, {
      mode: "visible",
      children: i.children
    }), r.return = t, r.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = r, t.memoizedState = null, r);
  }
  function Uu(e, t) {
    return t = Vi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Vi(e, t) {
    return e = tn(22, e, null, t), e.lanes = 0, e;
  }
  function Lu(e, t, r) {
    return Tr(t, e.child, null, r), e = Uu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ap(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), tu(e.return, t, r);
  }
  function qu(e, t, r, i, c, u) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: r,
      tailMode: c,
      treeForkCount: u
    } : (g.isBackwards = t, g.rendering = null, g.renderingStartTime = 0, g.last = i, g.tail = r, g.tailMode = c, g.treeForkCount = u);
  }
  function Rp(e, t, r) {
    var i = t.pendingProps, c = i.revealOrder, u = i.tail;
    i = i.children;
    var g = ht.current, S = (g & 2) !== 0;
    if (S ? (g = g & 1 | 2, t.flags |= 128) : g &= 1, J(ht, g), Yt(e, t, i, r), i = Be ? dl : 0, !S && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ap(e, r, t);
        else if (e.tag === 19)
          Ap(e, r, t);
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
          e = r.alternate, e !== null && ki(e) === null && (c = r), r = r.sibling;
        r = c, r === null ? (c = t.child, t.child = null) : (c = r.sibling, r.sibling = null), qu(
          t,
          !1,
          c,
          r,
          u,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && ki(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = r, r = c, c = e;
        }
        qu(
          t,
          !0,
          r,
          null,
          u,
          i
        );
        break;
      case "together":
        qu(
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
        if (fo(
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
  function Pu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Oi(e)));
  }
  function zw(e, t, r) {
    switch (t.tag) {
      case 3:
        Fe(t, t.stateNode.containerInfo), za(t, xt, e.memoizedState.cache), xr();
        break;
      case 27:
      case 5:
        he(t);
        break;
      case 4:
        Fe(t, t.stateNode.containerInfo);
        break;
      case 10:
        za(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, mu(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Ba(t), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Np(e, t, r) : (Ba(t), e = la(
            e,
            t,
            r
          ), e !== null ? e.sibling : null);
        Ba(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (i = (r & t.childLanes) !== 0, i || (fo(
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
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), J(ht, ht.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, Ep(
          e,
          t,
          r,
          t.pendingProps
        );
      case 24:
        za(t, xt, e.memoizedState.cache);
    }
    return la(e, t, r);
  }
  function kp(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        St = !0;
      else {
        if (!Pu(e, r) && (t.flags & 128) === 0)
          return St = !1, zw(
            e,
            t,
            r
          );
        St = (e.flags & 131072) !== 0;
      }
    else
      St = !1, Be && (t.flags & 1048576) !== 0 && fh(t, dl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = Er(t.elementType), t.type = e, typeof e == "function")
            Fc(e) ? (i = Dr(e, i), t.tag = 1, t = Dp(
              null,
              t,
              e,
              i,
              r
            )) : (t.tag = 0, t = ju(
              null,
              t,
              e,
              i,
              r
            ));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === T) {
                t.tag = 11, t = wp(
                  null,
                  t,
                  e,
                  i,
                  r
                );
                break e;
              } else if (c === R) {
                t.tag = 14, t = Sp(
                  null,
                  t,
                  e,
                  i,
                  r
                );
                break e;
              }
            }
            throw t = le(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return ju(
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
        ), Dp(
          e,
          t,
          i,
          c,
          r
        );
      case 3:
        e: {
          if (Fe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          i = t.pendingProps;
          var u = t.memoizedState;
          c = u.element, su(e, t), xl(t, i, null, r);
          var g = t.memoizedState;
          if (i = g.cache, za(t, xt, i), i !== u.cache && nu(
            t,
            [xt],
            r,
            !0
          ), bl(), i = g.element, u.isDehydrated)
            if (u = {
              element: i,
              isDehydrated: !1,
              cache: g.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = _p(
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
              ), ml(c), t = _p(
                e,
                t,
                i,
                r
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ot = bn(e.firstChild), zt = t, Be = !0, Ra = null, yn = !0, r = Eh(
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
            Yt(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Wi(e, t), e === null ? (r = Wg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = r : Be || (r = t.type, e = t.pendingProps, i = is(
          oe.current
        ).createElement(r), i[kt] = t, i[Xt] = e, Ht(i, r, e), Dt(i), t.stateNode = i) : t.memoizedState = Wg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return he(t), e === null && Be && (i = t.stateNode = qg(
          t.type,
          t.pendingProps,
          oe.current
        ), zt = t, yn = !0, c = ot, Fa(t.type) ? (Sf = c, ot = bn(i.firstChild)) : ot = c), Yt(
          e,
          t,
          t.pendingProps.children,
          r
        ), Wi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Be && ((c = i = ot) && (i = uS(
          i,
          t.type,
          t.pendingProps,
          yn
        ), i !== null ? (t.stateNode = i, zt = t, ot = bn(i.firstChild), yn = !1, c = !0) : c = !1), c || ka(t)), he(t), c = t.type, u = t.pendingProps, g = e !== null ? e.memoizedProps : null, i = u.children, yf(c, u) ? i = null : g !== null && yf(c, g) && (t.flags |= 32), t.memoizedState !== null && (c = pu(
          e,
          t,
          Ow,
          null,
          null,
          r
        ), Ll._currentValue = c), Wi(e, t), Yt(e, t, i, r), t.child;
      case 6:
        return e === null && Be && ((e = r = ot) && (r = fS(
          r,
          t.pendingProps,
          yn
        ), r !== null ? (t.stateNode = r, zt = t, ot = null, e = !0) : e = !1), e || ka(t)), null;
      case 13:
        return Np(e, t, r);
      case 4:
        return Fe(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Tr(
          t,
          null,
          i,
          r
        ) : Yt(e, t, i, r), t.child;
      case 11:
        return wp(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 7:
        return Yt(
          e,
          t,
          t.pendingProps,
          r
        ), t.child;
      case 8:
        return Yt(
          e,
          t,
          t.pendingProps.children,
          r
        ), t.child;
      case 12:
        return Yt(
          e,
          t,
          t.pendingProps.children,
          r
        ), t.child;
      case 10:
        return i = t.pendingProps, za(t, t.type, i.value), Yt(e, t, i.children, r), t.child;
      case 9:
        return c = t.type._context, i = t.pendingProps.children, Sr(t), c = jt(c), i = i(c), t.flags |= 1, Yt(e, t, i, r), t.child;
      case 14:
        return Sp(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 15:
        return Cp(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 19:
        return Rp(e, t, r);
      case 31:
        return kw(e, t, r);
      case 22:
        return Ep(
          e,
          t,
          r,
          t.pendingProps
        );
      case 24:
        return Sr(t), i = jt(xt), e === null ? (c = ou(), c === null && (c = nt, u = au(), c.pooledCache = u, u.refCount++, u !== null && (c.pooledCacheLanes |= r), c = u), t.memoizedState = { parent: i, cache: c }, iu(t), za(t, xt, c)) : ((e.lanes & r) !== 0 && (su(e, t), xl(t, null, null, r), bl()), c = e.memoizedState, u = t.memoizedState, c.parent !== i ? (c = { parent: i, cache: i }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), za(t, xt, i)) : (i = u.cache, za(t, xt, i), i !== c.cache && nu(
          t,
          [xt],
          r,
          !0
        ))), Yt(
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
  function Gu(e, t, r, i, c) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (c & 335544128) === c)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (lg()) e.flags |= 8192;
        else
          throw Or = _i, lu;
    } else e.flags &= -16777217;
  }
  function zp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Zg(t))
      if (lg()) e.flags |= 8192;
      else
        throw Or = _i, lu;
  }
  function Xi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? si() : 536870912, e.lanes |= t, Eo |= t);
  }
  function Tl(e, t) {
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
  function jw(e, t, r) {
    var i = t.pendingProps;
    switch (Kc(t), t.tag) {
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
        return r = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), aa(xt), ye(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (uo(t) ? ia(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Jc())), lt(t), null;
      case 26:
        var c = t.type, u = t.memoizedState;
        return e === null ? (ia(t), u !== null ? (lt(t), zp(t, u)) : (lt(t), Gu(
          t,
          c,
          null,
          i,
          r
        ))) : u ? u !== e.memoizedState ? (ia(t), lt(t), zp(t, u)) : (lt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && ia(t), lt(t), Gu(
          t,
          c,
          e,
          i,
          r
        )), null;
      case 27:
        if (Qe(t), r = oe.current, c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && ia(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(o(166));
            return lt(t), null;
          }
          e = ae.current, uo(t) ? mh(t) : (e = qg(c, i, r), t.stateNode = e, ia(t));
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
          if (u = ae.current, uo(t))
            mh(t);
          else {
            var g = is(
              oe.current
            );
            switch (u) {
              case 1:
                u = g.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c
                );
                break;
              case 2:
                u = g.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  c
                );
                break;
              default:
                switch (c) {
                  case "svg":
                    u = g.createElementNS(
                      "http://www.w3.org/2000/svg",
                      c
                    );
                    break;
                  case "math":
                    u = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    u = g.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof i.is == "string" ? g.createElement("select", {
                      is: i.is
                    }) : g.createElement("select"), i.multiple ? u.multiple = !0 : i.size && (u.size = i.size);
                    break;
                  default:
                    u = typeof i.is == "string" ? g.createElement(c, { is: i.is }) : g.createElement(c);
                }
            }
            u[kt] = t, u[Xt] = i;
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6)
                u.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t)
                  break e;
                g = g.return;
              }
              g.sibling.return = g.return, g = g.sibling;
            }
            t.stateNode = u;
            e: switch (Ht(u, c, i), c) {
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
        return lt(t), Gu(
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
          if (e = oe.current, uo(t)) {
            if (e = t.stateNode, r = t.memoizedProps, i = null, c = zt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  i = c.memoizedProps;
              }
            e[kt] = t, e = !!(e.nodeValue === r || i !== null && i.suppressHydrationWarning === !0 || Ng(e.nodeValue, r)), e || ka(t, !0);
          } else
            e = is(e).createTextNode(
              i
            ), e[kt] = t, t.stateNode = e;
        }
        return lt(t), null;
      case 31:
        if (r = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = uo(t), r !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[kt] = t;
            } else
              xr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), e = !1;
          } else
            r = Jc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return t.flags & 256 ? (an(t), t) : (an(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return lt(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = uo(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317));
              c[kt] = t;
            } else
              xr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), c = !1;
          } else
            c = Jc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (an(t), t) : (an(t), null);
        }
        return an(t), (t.flags & 128) !== 0 ? (t.lanes = r, t) : (r = i !== null, e = e !== null && e.memoizedState !== null, r && (i = t.child, c = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (c = i.alternate.memoizedState.cachePool.pool), u = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool), u !== c && (i.flags |= 2048)), r !== e && r && (t.child.flags |= 8192), Xi(t, t.updateQueue), lt(t), null);
      case 4:
        return ye(), e === null && df(t.stateNode.containerInfo), lt(t), null;
      case 10:
        return aa(t.type), lt(t), null;
      case 19:
        if (V(ht), i = t.memoizedState, i === null) return lt(t), null;
        if (c = (t.flags & 128) !== 0, u = i.rendering, u === null)
          if (c) Tl(i, !1);
          else {
            if (ft !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = ki(e), u !== null) {
                  for (t.flags |= 128, Tl(i, !1), e = u.updateQueue, t.updateQueue = e, Xi(t, e), t.subtreeFlags = 0, e = r, r = t.child; r !== null; )
                    sh(r, e), r = r.sibling;
                  return J(
                    ht,
                    ht.current & 1 | 2
                  ), Be && ta(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Rt() > Ki && (t.flags |= 128, c = !0, Tl(i, !1), t.lanes = 4194304);
          }
        else {
          if (!c)
            if (e = ki(u), e !== null) {
              if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Xi(t, e), Tl(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Be)
                return lt(t), null;
            } else
              2 * Rt() - i.renderingStartTime > Ki && r !== 536870912 && (t.flags |= 128, c = !0, Tl(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (e = i.last, e !== null ? e.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Rt(), e.sibling = null, r = ht.current, J(
          ht,
          c ? r & 1 | 2 : r & 1
        ), Be && ta(t, i.treeForkCount), e) : (lt(t), null);
      case 22:
      case 23:
        return an(t), du(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (r & 536870912) !== 0 && (t.flags & 128) === 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), r = t.updateQueue, r !== null && Xi(t, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== r && (t.flags |= 2048), e !== null && V(Cr), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), aa(xt), lt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Yw(e, t) {
    switch (Kc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return aa(xt), ye(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return V(ht), null;
      case 4:
        return ye(), null;
      case 10:
        return aa(t.type), null;
      case 22:
      case 23:
        return an(t), du(), e !== null && V(Cr), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return aa(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jp(e, t) {
    switch (Kc(t), t.tag) {
      case 3:
        aa(xt), ye();
        break;
      case 26:
      case 27:
      case 5:
        Qe(t);
        break;
      case 4:
        ye();
        break;
      case 31:
        t.memoizedState !== null && an(t);
        break;
      case 13:
        an(t);
        break;
      case 19:
        V(ht);
        break;
      case 10:
        aa(t.type);
        break;
      case 22:
      case 23:
        an(t), du(), e !== null && V(Cr);
        break;
      case 24:
        aa(xt);
    }
  }
  function Ml(e, t) {
    try {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            i = void 0;
            var u = r.create, g = r.inst;
            i = u(), g.destroy = i;
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
        var u = c.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            var g = i.inst, S = g.destroy;
            if (S !== void 0) {
              g.destroy = void 0, c = t;
              var k = r, q = S;
              try {
                q();
              } catch (X) {
                Ie(
                  c,
                  k,
                  X
                );
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (X) {
      Ie(t, t.return, X);
    }
  }
  function Yp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Th(t, r);
      } catch (i) {
        Ie(e, e.return, i);
      }
    }
  }
  function Hp(e, t, r) {
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
  function Dl(e, t) {
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
  function zn(e, t) {
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
  function Bp(e) {
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
  function Wu(e, t, r) {
    try {
      var i = e.stateNode;
      rS(i, e.type, r, t), i[Xt] = t;
    } catch (c) {
      Ie(e, e.return, c);
    }
  }
  function Up(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fa(e.type) || e.tag === 4;
  }
  function Vu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Up(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(e, t) : (t = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, t.appendChild(e), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = $n));
    else if (i !== 4 && (i === 27 && Fa(e.type) && (r = e.stateNode, t = null), e = e.child, e !== null))
      for (Xu(e, t, r), e = e.sibling; e !== null; )
        Xu(e, t, r), e = e.sibling;
  }
  function Fi(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && (i === 27 && Fa(e.type) && (r = e.stateNode), e = e.child, e !== null))
      for (Fi(e, t, r), e = e.sibling; e !== null; )
        Fi(e, t, r), e = e.sibling;
  }
  function Lp(e) {
    var t = e.stateNode, r = e.memoizedProps;
    try {
      for (var i = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      Ht(t, i, r), t[kt] = e, t[Xt] = r;
    } catch (u) {
      Ie(e, e.return, u);
    }
  }
  var sa = !1, Ct = !1, Fu = !1, qp = typeof WeakSet == "function" ? WeakSet : Set, _t = null;
  function Hw(e, t) {
    if (e = e.containerInfo, pf = hs, e = Jm(e), Lc(e)) {
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
            var c = i.anchorOffset, u = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType, u.nodeType;
            } catch {
              r = null;
              break e;
            }
            var g = 0, S = -1, k = -1, q = 0, X = 0, I = e, P = null;
            t: for (; ; ) {
              for (var G; I !== r || c !== 0 && I.nodeType !== 3 || (S = g + c), I !== u || i !== 0 && I.nodeType !== 3 || (k = g + i), I.nodeType === 3 && (g += I.nodeValue.length), (G = I.firstChild) !== null; )
                P = I, I = G;
              for (; ; ) {
                if (I === e) break t;
                if (P === r && ++q === c && (S = g), P === u && ++X === i && (k = g), (G = I.nextSibling) !== null) break;
                I = P, P = I.parentNode;
              }
              I = G;
            }
            r = S === -1 || k === -1 ? null : { start: S, end: k };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (gf = { focusedElem: e, selectionRange: r }, hs = !1, _t = t; _t !== null; )
      if (t = _t, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, _t = e;
      else
        for (; _t !== null; ) {
          switch (t = _t, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (r = 0; r < e.length; r++)
                  c = e[r], c.ref.impl = c.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, r = t, c = u.memoizedProps, u = u.memoizedState, i = r.stateNode;
                try {
                  var fe = Dr(
                    r.type,
                    c
                  );
                  e = i.getSnapshotBeforeUpdate(
                    fe,
                    u
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
                  bf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bf(e);
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
  function Pp(e, t, r) {
    var i = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ua(e, r), i & 4 && Ml(5, r);
        break;
      case 1:
        if (ua(e, r), i & 4)
          if (e = r.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (g) {
              Ie(r, r.return, g);
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
            } catch (g) {
              Ie(
                r,
                r.return,
                g
              );
            }
          }
        i & 64 && Yp(r), i & 512 && Dl(r, r.return);
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
            Th(e, t);
          } catch (g) {
            Ie(r, r.return, g);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Lp(r);
      case 26:
      case 5:
        ua(e, r), t === null && i & 4 && Bp(r), i & 512 && Dl(r, r.return);
        break;
      case 12:
        ua(e, r);
        break;
      case 31:
        ua(e, r), i & 4 && Vp(e, r);
        break;
      case 13:
        ua(e, r), i & 4 && Xp(e, r), i & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = Xw.bind(
          null,
          r
        ), dS(e, r))));
        break;
      case 22:
        if (i = r.memoizedState !== null || sa, !i) {
          t = t !== null && t.memoizedState !== null || Ct, c = sa;
          var u = Ct;
          sa = i, (Ct = t) && !u ? fa(
            e,
            r,
            (r.subtreeFlags & 8772) !== 0
          ) : ua(e, r), sa = c, Ct = u;
        }
        break;
      case 30:
        break;
      default:
        ua(e, r);
    }
  }
  function Gp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Cc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var it = null, Qt = !1;
  function ca(e, t, r) {
    for (r = r.child; r !== null; )
      Wp(e, t, r), r = r.sibling;
  }
  function Wp(e, t, r) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(fr, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Ct || zn(r, t), ca(
          e,
          t,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Ct || zn(r, t);
        var i = it, c = Qt;
        Fa(r.type) && (it = r.stateNode, Qt = !1), ca(
          e,
          t,
          r
        ), Hl(r.stateNode), it = i, Qt = c;
        break;
      case 5:
        Ct || zn(r, t);
      case 6:
        if (i = it, c = Qt, it = null, ca(
          e,
          t,
          r
        ), it = i, Qt = c, it !== null)
          if (Qt)
            try {
              (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(r.stateNode);
            } catch (u) {
              Ie(
                r,
                t,
                u
              );
            }
          else
            try {
              it.removeChild(r.stateNode);
            } catch (u) {
              Ie(
                r,
                t,
                u
              );
            }
        break;
      case 18:
        it !== null && (Qt ? (e = it, Yg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), Ro(e)) : Yg(it, r.stateNode));
        break;
      case 4:
        i = it, c = Qt, it = r.stateNode.containerInfo, Qt = !0, ca(
          e,
          t,
          r
        ), it = i, Qt = c;
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
        Ct || (zn(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function" && Hp(
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
  function Vp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ro(e);
      } catch (r) {
        Ie(t, t.return, r);
      }
    }
  }
  function Xp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ro(e);
      } catch (r) {
        Ie(t, t.return, r);
      }
  }
  function Bw(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new qp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new qp()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Qi(e, t) {
    var r = Bw(e);
    t.forEach(function(i) {
      if (!r.has(i)) {
        r.add(i);
        var c = Fw.bind(null, e, i);
        i.then(c, c);
      }
    });
  }
  function Zt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var c = r[i], u = e, g = t, S = g;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (Fa(S.type)) {
                it = S.stateNode, Qt = !1;
                break e;
              }
              break;
            case 5:
              it = S.stateNode, Qt = !1;
              break e;
            case 3:
            case 4:
              it = S.stateNode.containerInfo, Qt = !0;
              break e;
          }
          S = S.return;
        }
        if (it === null) throw Error(o(160));
        Wp(u, g, c), it = null, Qt = !1, u = c.alternate, u !== null && (u.return = null), c.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Fp(t, e), t = t.sibling;
  }
  var En = null;
  function Fp(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Zt(t, e), It(e), i & 4 && (La(3, e, e.return), Ml(3, e), La(5, e, e.return));
        break;
      case 1:
        Zt(t, e), It(e), i & 512 && (Ct || r === null || zn(r, r.return)), i & 64 && sa && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? i : r.concat(i))));
        break;
      case 26:
        var c = En;
        if (Zt(t, e), It(e), i & 512 && (Ct || r === null || zn(r, r.return)), i & 4) {
          var u = r !== null ? r.memoizedState : null;
          if (i = e.memoizedState, r === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, r = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (i) {
                    case "title":
                      u = c.getElementsByTagName("title")[0], (!u || u[tl] || u[kt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = c.createElement(i), c.head.insertBefore(
                        u,
                        c.querySelector("head > title")
                      )), Ht(u, i, r), u[kt] = e, Dt(u), i = u;
                      break e;
                    case "link":
                      var g = Fg(
                        "link",
                        "href",
                        c
                      ).get(i + (r.href || ""));
                      if (g) {
                        for (var S = 0; S < g.length; S++)
                          if (u = g[S], u.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && u.getAttribute("rel") === (r.rel == null ? null : r.rel) && u.getAttribute("title") === (r.title == null ? null : r.title) && u.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                            g.splice(S, 1);
                            break t;
                          }
                      }
                      u = c.createElement(i), Ht(u, i, r), c.head.appendChild(u);
                      break;
                    case "meta":
                      if (g = Fg(
                        "meta",
                        "content",
                        c
                      ).get(i + (r.content || ""))) {
                        for (S = 0; S < g.length; S++)
                          if (u = g[S], u.getAttribute("content") === (r.content == null ? null : "" + r.content) && u.getAttribute("name") === (r.name == null ? null : r.name) && u.getAttribute("property") === (r.property == null ? null : r.property) && u.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && u.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                            g.splice(S, 1);
                            break t;
                          }
                      }
                      u = c.createElement(i), Ht(u, i, r), c.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  u[kt] = e, Dt(u), i = u;
                }
                e.stateNode = i;
              } else
                Qg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Xg(
                c,
                i,
                e.memoizedProps
              );
          else
            u !== i ? (u === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : u.count--, i === null ? Qg(
              c,
              e.type,
              e.stateNode
            ) : Xg(
              c,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && Wu(
              e,
              e.memoizedProps,
              r.memoizedProps
            );
        }
        break;
      case 27:
        Zt(t, e), It(e), i & 512 && (Ct || r === null || zn(r, r.return)), r !== null && i & 4 && Wu(
          e,
          e.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (Zt(t, e), It(e), i & 512 && (Ct || r === null || zn(r, r.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            eo(c, "");
          } catch (fe) {
            Ie(e, e.return, fe);
          }
        }
        i & 4 && e.stateNode != null && (c = e.memoizedProps, Wu(
          e,
          c,
          r !== null ? r.memoizedProps : c
        )), i & 1024 && (Fu = !0);
        break;
      case 6:
        if (Zt(t, e), It(e), i & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          i = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = i;
          } catch (fe) {
            Ie(e, e.return, fe);
          }
        }
        break;
      case 3:
        if (us = null, c = En, En = ss(t.containerInfo), Zt(t, e), En = c, It(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            Ro(t.containerInfo);
          } catch (fe) {
            Ie(e, e.return, fe);
          }
        Fu && (Fu = !1, Qp(e));
        break;
      case 4:
        i = En, En = ss(
          e.stateNode.containerInfo
        ), Zt(t, e), It(e), En = i;
        break;
      case 12:
        Zt(t, e), It(e);
        break;
      case 31:
        Zt(t, e), It(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Qi(e, i)));
        break;
      case 13:
        Zt(t, e), It(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (Ii = Rt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Qi(e, i)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var k = r !== null && r.memoizedState !== null, q = sa, X = Ct;
        if (sa = q || c, Ct = X || k, Zt(t, e), Ct = X, sa = q, It(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (r === null || k || sa || Ct || _r(e)), r = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (r === null) {
                k = r = t;
                try {
                  if (u = k.stateNode, c)
                    g = u.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    S = k.stateNode;
                    var I = k.memoizedProps.style, P = I != null && I.hasOwnProperty("display") ? I.display : null;
                    S.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (fe) {
                  Ie(k, k.return, fe);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                k = t;
                try {
                  k.stateNode.nodeValue = c ? "" : k.memoizedProps;
                } catch (fe) {
                  Ie(k, k.return, fe);
                }
              }
            } else if (t.tag === 18) {
              if (r === null) {
                k = t;
                try {
                  var G = k.stateNode;
                  c ? Hg(G, !0) : Hg(k.stateNode, !1);
                } catch (fe) {
                  Ie(k, k.return, fe);
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
        i & 4 && (i = e.updateQueue, i !== null && (r = i.retryQueue, r !== null && (i.retryQueue = null, Qi(e, r))));
        break;
      case 19:
        Zt(t, e), It(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Qi(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Zt(t, e), It(e);
    }
  }
  function It(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var r, i = e.return; i !== null; ) {
          if (Up(i)) {
            r = i;
            break;
          }
          i = i.return;
        }
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var c = r.stateNode, u = Vu(e);
            Fi(e, u, c);
            break;
          case 5:
            var g = r.stateNode;
            r.flags & 32 && (eo(g, ""), r.flags &= -33);
            var S = Vu(e);
            Fi(e, S, g);
            break;
          case 3:
          case 4:
            var k = r.stateNode.containerInfo, q = Vu(e);
            Xu(
              e,
              q,
              k
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (X) {
        Ie(e, e.return, X);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Qp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ua(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Pp(e, t.alternate, t), t = t.sibling;
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
          zn(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && Hp(
            t,
            t.return,
            r
          ), _r(t);
          break;
        case 27:
          Hl(t.stateNode);
        case 26:
        case 5:
          zn(t, t.return), _r(t);
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
      var i = t.alternate, c = e, u = t, g = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          fa(
            c,
            u,
            r
          ), Ml(4, u);
          break;
        case 1:
          if (fa(
            c,
            u,
            r
          ), i = u, c = i.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              Ie(i, i.return, q);
            }
          if (i = u, c = i.updateQueue, c !== null) {
            var S = i.stateNode;
            try {
              var k = c.shared.hiddenCallbacks;
              if (k !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < k.length; c++)
                  Oh(k[c], S);
            } catch (q) {
              Ie(i, i.return, q);
            }
          }
          r && g & 64 && Yp(u), Dl(u, u.return);
          break;
        case 27:
          Lp(u);
        case 26:
        case 5:
          fa(
            c,
            u,
            r
          ), r && i === null && g & 4 && Bp(u), Dl(u, u.return);
          break;
        case 12:
          fa(
            c,
            u,
            r
          );
          break;
        case 31:
          fa(
            c,
            u,
            r
          ), r && g & 4 && Vp(c, u);
          break;
        case 13:
          fa(
            c,
            u,
            r
          ), r && g & 4 && Xp(c, u);
          break;
        case 22:
          u.memoizedState === null && fa(
            c,
            u,
            r
          ), Dl(u, u.return);
          break;
        case 30:
          break;
        default:
          fa(
            c,
            u,
            r
          );
      }
      t = t.sibling;
    }
  }
  function Qu(e, t) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && hl(r));
  }
  function Zu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hl(e));
  }
  function On(e, t, r, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zp(
          e,
          t,
          r,
          i
        ), t = t.sibling;
  }
  function Zp(e, t, r, i) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        On(
          e,
          t,
          r,
          i
        ), c & 2048 && Ml(9, t);
        break;
      case 1:
        On(
          e,
          t,
          r,
          i
        );
        break;
      case 3:
        On(
          e,
          t,
          r,
          i
        ), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hl(e)));
        break;
      case 12:
        if (c & 2048) {
          On(
            e,
            t,
            r,
            i
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, g = u.id, S = u.onPostCommit;
            typeof S == "function" && S(
              g,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (k) {
            Ie(t, t.return, k);
          }
        } else
          On(
            e,
            t,
            r,
            i
          );
        break;
      case 31:
        On(
          e,
          t,
          r,
          i
        );
        break;
      case 13:
        On(
          e,
          t,
          r,
          i
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, g = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? On(
          e,
          t,
          r,
          i
        ) : _l(e, t) : u._visibility & 2 ? On(
          e,
          t,
          r,
          i
        ) : (u._visibility |= 2, wo(
          e,
          t,
          r,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), c & 2048 && Qu(g, t);
        break;
      case 24:
        On(
          e,
          t,
          r,
          i
        ), c & 2048 && Zu(t.alternate, t);
        break;
      default:
        On(
          e,
          t,
          r,
          i
        );
    }
  }
  function wo(e, t, r, i, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, g = t, S = r, k = i, q = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          wo(
            u,
            g,
            S,
            k,
            c
          ), Ml(8, g);
          break;
        case 23:
          break;
        case 22:
          var X = g.stateNode;
          g.memoizedState !== null ? X._visibility & 2 ? wo(
            u,
            g,
            S,
            k,
            c
          ) : _l(
            u,
            g
          ) : (X._visibility |= 2, wo(
            u,
            g,
            S,
            k,
            c
          )), c && q & 2048 && Qu(
            g.alternate,
            g
          );
          break;
        case 24:
          wo(
            u,
            g,
            S,
            k,
            c
          ), c && q & 2048 && Zu(g.alternate, g);
          break;
        default:
          wo(
            u,
            g,
            S,
            k,
            c
          );
      }
      t = t.sibling;
    }
  }
  function _l(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e, i = t, c = i.flags;
        switch (i.tag) {
          case 22:
            _l(r, i), c & 2048 && Qu(
              i.alternate,
              i
            );
            break;
          case 24:
            _l(r, i), c & 2048 && Zu(i.alternate, i);
            break;
          default:
            _l(r, i);
        }
        t = t.sibling;
      }
  }
  var Nl = 8192;
  function So(e, t, r) {
    if (e.subtreeFlags & Nl)
      for (e = e.child; e !== null; )
        Ip(
          e,
          t,
          r
        ), e = e.sibling;
  }
  function Ip(e, t, r) {
    switch (e.tag) {
      case 26:
        So(
          e,
          t,
          r
        ), e.flags & Nl && e.memoizedState !== null && ES(
          r,
          En,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        So(
          e,
          t,
          r
        );
        break;
      case 3:
      case 4:
        var i = En;
        En = ss(e.stateNode.containerInfo), So(
          e,
          t,
          r
        ), En = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Nl, Nl = 16777216, So(
          e,
          t,
          r
        ), Nl = i) : So(
          e,
          t,
          r
        ));
        break;
      default:
        So(
          e,
          t,
          r
        );
    }
  }
  function Kp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Al(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          _t = i, Jp(
            i,
            e
          );
        }
      Kp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        $p(e), e = e.sibling;
  }
  function $p(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Al(e), e.flags & 2048 && La(9, e, e.return);
        break;
      case 3:
        Al(e);
        break;
      case 12:
        Al(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Zi(e)) : Al(e);
        break;
      default:
        Al(e);
    }
  }
  function Zi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          _t = i, Jp(
            i,
            e
          );
        }
      Kp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          La(8, t, t.return), Zi(t);
          break;
        case 22:
          r = t.stateNode, r._visibility & 2 && (r._visibility &= -3, Zi(t));
          break;
        default:
          Zi(t);
      }
      e = e.sibling;
    }
  }
  function Jp(e, t) {
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
          hl(r.memoizedState.cache);
      }
      if (i = r.child, i !== null) i.return = r, _t = i;
      else
        e: for (r = e; _t !== null; ) {
          i = _t;
          var c = i.sibling, u = i.return;
          if (Gp(i), i === r) {
            _t = null;
            break e;
          }
          if (c !== null) {
            c.return = u, _t = c;
            break e;
          }
          _t = u;
        }
    }
  }
  var Uw = {
    getCacheForType: function(e) {
      var t = jt(xt), r = t.data.get(e);
      return r === void 0 && (r = e(), t.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return jt(xt).controller.signal;
    }
  }, Lw = typeof WeakMap == "function" ? WeakMap : Map, Ve = 0, nt = null, Ne = null, ke = 0, Ze = 0, rn = null, qa = !1, Co = !1, Iu = !1, da = 0, ft = 0, Pa = 0, Nr = 0, Ku = 0, on = 0, Eo = 0, Rl = null, Kt = null, $u = !1, Ii = 0, eg = 0, Ki = 1 / 0, $i = null, Ga = null, Ot = 0, Wa = null, Oo = null, ma = 0, Ju = 0, ef = null, tg = null, kl = 0, tf = null;
  function ln() {
    return (Ve & 2) !== 0 && ke !== 0 ? ke & -ke : H.T !== null ? sf() : ym();
  }
  function ng() {
    if (on === 0)
      if ((ke & 536870912) === 0 || Be) {
        var e = be;
        be <<= 1, (be & 3932160) === 0 && (be = 262144), on = e;
      } else on = 536870912;
    return e = nn.current, e !== null && (e.flags |= 32), on;
  }
  function $t(e, t, r) {
    (e === nt && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null) && (To(e, 0), Va(
      e,
      ke,
      on,
      !1
    )), In(e, r), ((Ve & 2) === 0 || e !== nt) && (e === nt && ((Ve & 2) === 0 && (Nr |= r), ft === 4 && Va(
      e,
      ke,
      on,
      !1
    )), jn(e));
  }
  function ag(e, t, r) {
    if ((Ve & 6) !== 0) throw Error(o(327));
    var i = !r && (t & 127) === 0 && (t & e.expiredLanes) === 0 || dr(e, t), c = i ? Gw(e, t) : af(e, t, !0), u = i;
    do {
      if (c === 0) {
        Co && !i && Va(e, t, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, u && !qw(r)) {
          c = af(e, t, !1), u = !1;
          continue;
        }
        if (c === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var g = 0;
          else
            g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            t = g;
            e: {
              var S = e;
              c = Rl;
              var k = S.current.memoizedState.isDehydrated;
              if (k && (To(S, g).flags |= 256), g = af(
                S,
                g,
                !1
              ), g !== 2) {
                if (Iu && !k) {
                  S.errorRecoveryDisabledLanes |= u, Nr |= u, c = 4;
                  break e;
                }
                u = Kt, Kt = c, u !== null && (Kt === null ? Kt = u : Kt.push.apply(
                  Kt,
                  u
                ));
              }
              c = g;
            }
            if (u = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          To(e, 0), Va(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, u = c, u) {
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
              Kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (c = Ii + 300 - Rt(), 10 < c)) {
            if (Va(
              i,
              t,
              on,
              !qa
            ), De(i, 0, !0) !== 0) break e;
            ma = t, i.timeoutHandle = zg(
              rg.bind(
                null,
                i,
                r,
                Kt,
                $i,
                $u,
                t,
                on,
                Nr,
                Eo,
                qa,
                u,
                "Throttled",
                -0,
                0
              ),
              c
            );
            break e;
          }
          rg(
            i,
            r,
            Kt,
            $i,
            $u,
            t,
            on,
            Nr,
            Eo,
            qa,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    jn(e);
  }
  function rg(e, t, r, i, c, u, g, S, k, q, X, I, P, G) {
    if (e.timeoutHandle = -1, I = t.subtreeFlags, I & 8192 || (I & 16785408) === 16785408) {
      I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: $n
      }, Ip(
        t,
        u,
        I
      );
      var fe = (u & 62914560) === u ? Ii - Rt() : (u & 4194048) === u ? eg - Rt() : 0;
      if (fe = OS(
        I,
        fe
      ), fe !== null) {
        ma = u, e.cancelPendingCommit = fe(
          dg.bind(
            null,
            e,
            t,
            u,
            r,
            i,
            c,
            g,
            S,
            k,
            X,
            I,
            null,
            P,
            G
          )
        ), Va(e, u, g, !q);
        return;
      }
    }
    dg(
      e,
      t,
      u,
      r,
      i,
      c,
      g,
      S,
      k
    );
  }
  function qw(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if ((r === 0 || r === 11 || r === 15) && t.flags & 16384 && (r = t.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var i = 0; i < r.length; i++) {
          var c = r[i], u = c.getSnapshot;
          c = c.value;
          try {
            if (!en(u(), c)) return !1;
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
    t &= ~Ku, t &= ~Nr, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var u = 31 - Gt(c), g = 1 << u;
      i[u] = -1, c &= ~g;
    }
    r !== 0 && hm(e, r, t);
  }
  function Ji() {
    return (Ve & 6) === 0 ? (zl(0), !1) : !0;
  }
  function nf() {
    if (Ne !== null) {
      if (Ze === 0)
        var e = Ne.return;
      else
        e = Ne, na = wr = null, vu(e), go = null, gl = 0, e = Ne;
      for (; e !== null; )
        jp(e.alternate, e), e = e.return;
      Ne = null;
    }
  }
  function To(e, t) {
    var r = e.timeoutHandle;
    r !== -1 && (e.timeoutHandle = -1, iS(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), ma = 0, nf(), nt = e, Ne = r = ea(e.current, null), ke = t, Ze = 0, rn = null, qa = !1, Co = dr(e, t), Iu = !1, Eo = on = Ku = Nr = Pa = ft = 0, Kt = Rl = null, $u = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var c = 31 - Gt(i), u = 1 << c;
        t |= e[c], i &= ~u;
      }
    return da = t, xi(), r;
  }
  function og(e, t) {
    Te = null, H.H = El, t === po || t === Di ? (t = wh(), Ze = 3) : t === lu ? (t = wh(), Ze = 4) : Ze = t === zu ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, rn = t, Ne === null && (ft = 1, Pi(
      e,
      hn(t, e.current)
    ));
  }
  function lg() {
    var e = nn.current;
    return e === null ? !0 : (ke & 4194048) === ke ? vn === null : (ke & 62914560) === ke || (ke & 536870912) !== 0 ? e === vn : !1;
  }
  function ig() {
    var e = H.H;
    return H.H = El, e === null ? El : e;
  }
  function sg() {
    var e = H.A;
    return H.A = Uw, e;
  }
  function es() {
    ft = 4, qa || (ke & 4194048) !== ke && nn.current !== null || (Co = !0), (Pa & 134217727) === 0 && (Nr & 134217727) === 0 || nt === null || Va(
      nt,
      ke,
      on,
      !1
    );
  }
  function af(e, t, r) {
    var i = Ve;
    Ve |= 2;
    var c = ig(), u = sg();
    (nt !== e || ke !== t) && ($i = null, To(e, t)), t = !1;
    var g = ft;
    e: do
      try {
        if (Ze !== 0 && Ne !== null) {
          var S = Ne, k = rn;
          switch (Ze) {
            case 8:
              nf(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              nn.current === null && (t = !0);
              var q = Ze;
              if (Ze = 0, rn = null, Mo(e, S, k, q), r && Co) {
                g = 0;
                break e;
              }
              break;
            default:
              q = Ze, Ze = 0, rn = null, Mo(e, S, k, q);
          }
        }
        Pw(), g = ft;
        break;
      } catch (X) {
        og(e, X);
      }
    while (!0);
    return t && e.shellSuspendCounter++, na = wr = null, Ve = i, H.H = c, H.A = u, Ne === null && (nt = null, ke = 0, xi()), g;
  }
  function Pw() {
    for (; Ne !== null; ) cg(Ne);
  }
  function Gw(e, t) {
    var r = Ve;
    Ve |= 2;
    var i = ig(), c = sg();
    nt !== e || ke !== t ? ($i = null, Ki = Rt() + 500, To(e, t)) : Co = dr(
      e,
      t
    );
    e: do
      try {
        if (Ze !== 0 && Ne !== null) {
          t = Ne;
          var u = rn;
          t: switch (Ze) {
            case 1:
              Ze = 0, rn = null, Mo(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (bh(u)) {
                Ze = 0, rn = null, ug(t);
                break;
              }
              t = function() {
                Ze !== 2 && Ze !== 9 || nt !== e || (Ze = 7), jn(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              bh(u) ? (Ze = 0, rn = null, ug(t)) : (Ze = 0, rn = null, Mo(e, t, u, 7));
              break;
            case 5:
              var g = null;
              switch (Ne.tag) {
                case 26:
                  g = Ne.memoizedState;
                case 5:
                case 27:
                  var S = Ne;
                  if (g ? Zg(g) : S.stateNode.complete) {
                    Ze = 0, rn = null;
                    var k = S.sibling;
                    if (k !== null) Ne = k;
                    else {
                      var q = S.return;
                      q !== null ? (Ne = q, ts(q)) : Ne = null;
                    }
                    break t;
                  }
              }
              Ze = 0, rn = null, Mo(e, t, u, 5);
              break;
            case 6:
              Ze = 0, rn = null, Mo(e, t, u, 6);
              break;
            case 8:
              nf(), ft = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Ww();
        break;
      } catch (X) {
        og(e, X);
      }
    while (!0);
    return na = wr = null, H.H = i, H.A = c, Ve = r, Ne !== null ? 0 : (nt = null, ke = 0, xi(), ft);
  }
  function Ww() {
    for (; Ne !== null && !hc(); )
      cg(Ne);
  }
  function cg(e) {
    var t = kp(e.alternate, e, da);
    e.memoizedProps = e.pendingProps, t === null ? ts(e) : Ne = t;
  }
  function ug(e) {
    var t = e, r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Mp(
          r,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ke
        );
        break;
      case 11:
        t = Mp(
          r,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ke
        );
        break;
      case 5:
        vu(t);
      default:
        jp(r, t), t = Ne = sh(t, da), t = kp(r, t, da);
    }
    e.memoizedProps = e.pendingProps, t === null ? ts(e) : Ne = t;
  }
  function Mo(e, t, r, i) {
    na = wr = null, vu(t), go = null, gl = 0;
    var c = t.return;
    try {
      if (Rw(
        e,
        c,
        t,
        r,
        ke
      )) {
        ft = 1, Pi(
          e,
          hn(r, e.current)
        ), Ne = null;
        return;
      }
    } catch (u) {
      if (c !== null) throw Ne = c, u;
      ft = 1, Pi(
        e,
        hn(r, e.current)
      ), Ne = null;
      return;
    }
    t.flags & 32768 ? (Be || i === 1 ? e = !0 : Co || (ke & 536870912) !== 0 ? e = !1 : (qa = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = nn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), fg(t, e)) : ts(t);
  }
  function ts(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        fg(
          t,
          qa
        );
        return;
      }
      e = t.return;
      var r = jw(
        t.alternate,
        t,
        da
      );
      if (r !== null) {
        Ne = r;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    ft === 0 && (ft = 5);
  }
  function fg(e, t) {
    do {
      var r = Yw(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, Ne = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ne = e;
        return;
      }
      Ne = e = r;
    } while (e !== null);
    ft = 6, Ne = null;
  }
  function dg(e, t, r, i, c, u, g, S, k) {
    e.cancelPendingCommit = null;
    do
      ns();
    while (Ot !== 0);
    if ((Ve & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Vc, Cx(
        e,
        r,
        u,
        g,
        S,
        k
      ), e === nt && (Ne = nt = null, ke = 0), Oo = t, Wa = e, ma = r, Ju = u, ef = c, tg = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Qw(Fr, function() {
        return yg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = H.T, H.T = null, c = Q.p, Q.p = 2, g = Ve, Ve |= 4;
        try {
          Hw(e, t, r);
        } finally {
          Ve = g, Q.p = c, H.T = i;
        }
      }
      Ot = 1, mg(), hg(), pg();
    }
  }
  function mg() {
    if (Ot === 1) {
      Ot = 0;
      var e = Wa, t = Oo, r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        r = H.T, H.T = null;
        var i = Q.p;
        Q.p = 2;
        var c = Ve;
        Ve |= 4;
        try {
          Fp(t, e);
          var u = gf, g = Jm(e.containerInfo), S = u.focusedElem, k = u.selectionRange;
          if (g !== S && S && S.ownerDocument && $m(
            S.ownerDocument.documentElement,
            S
          )) {
            if (k !== null && Lc(S)) {
              var q = k.start, X = k.end;
              if (X === void 0 && (X = q), "selectionStart" in S)
                S.selectionStart = q, S.selectionEnd = Math.min(
                  X,
                  S.value.length
                );
              else {
                var I = S.ownerDocument || document, P = I && I.defaultView || window;
                if (P.getSelection) {
                  var G = P.getSelection(), fe = S.textContent.length, xe = Math.min(k.start, fe), tt = k.end === void 0 ? xe : Math.min(k.end, fe);
                  !G.extend && xe > tt && (g = tt, tt = xe, xe = g);
                  var B = Km(
                    S,
                    xe
                  ), Y = Km(
                    S,
                    tt
                  );
                  if (B && Y && (G.rangeCount !== 1 || G.anchorNode !== B.node || G.anchorOffset !== B.offset || G.focusNode !== Y.node || G.focusOffset !== Y.offset)) {
                    var L = I.createRange();
                    L.setStart(B.node, B.offset), G.removeAllRanges(), xe > tt ? (G.addRange(L), G.extend(Y.node, Y.offset)) : (L.setEnd(Y.node, Y.offset), G.addRange(L));
                  }
                }
              }
            }
            for (I = [], G = S; G = G.parentNode; )
              G.nodeType === 1 && I.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < I.length; S++) {
              var Z = I[S];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          hs = !!pf, gf = pf = null;
        } finally {
          Ve = c, Q.p = i, H.T = r;
        }
      }
      e.current = t, Ot = 2;
    }
  }
  function hg() {
    if (Ot === 2) {
      Ot = 0;
      var e = Wa, t = Oo, r = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        r = H.T, H.T = null;
        var i = Q.p;
        Q.p = 2;
        var c = Ve;
        Ve |= 4;
        try {
          Pp(e, t.alternate, t);
        } finally {
          Ve = c, Q.p = i, H.T = r;
        }
      }
      Ot = 3;
    }
  }
  function pg() {
    if (Ot === 4 || Ot === 3) {
      Ot = 0, ai();
      var e = Wa, t = Oo, r = ma, i = tg;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ot = 5 : (Ot = 0, Oo = Wa = null, gg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Ga = null), wc(r), t = t.stateNode, Pt && typeof Pt.onCommitFiberRoot == "function")
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
        t = H.T, c = Q.p, Q.p = 2, H.T = null;
        try {
          for (var u = e.onRecoverableError, g = 0; g < i.length; g++) {
            var S = i[g];
            u(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          H.T = t, Q.p = c;
        }
      }
      (ma & 3) !== 0 && ns(), jn(e), c = e.pendingLanes, (r & 261930) !== 0 && (c & 42) !== 0 ? e === tf ? kl++ : (kl = 0, tf = e) : kl = 0, zl(0);
    }
  }
  function gg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hl(t)));
  }
  function ns() {
    return mg(), hg(), pg(), yg();
  }
  function yg() {
    if (Ot !== 5) return !1;
    var e = Wa, t = Ju;
    Ju = 0;
    var r = wc(ma), i = H.T, c = Q.p;
    try {
      Q.p = 32 > r ? 32 : r, H.T = null, r = ef, ef = null;
      var u = Wa, g = ma;
      if (Ot = 0, Oo = Wa = null, ma = 0, (Ve & 6) !== 0) throw Error(o(331));
      var S = Ve;
      if (Ve |= 4, $p(u.current), Zp(
        u,
        u.current,
        g,
        r
      ), Ve = S, zl(0, !1), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        try {
          Pt.onPostCommitFiberRoot(fr, u);
        } catch {
        }
      return !0;
    } finally {
      Q.p = c, H.T = i, gg(e, t);
    }
  }
  function vg(e, t, r) {
    t = hn(r, t), t = ku(e.stateNode, t, 2), e = Ha(e, t, 2), e !== null && (In(e, 2), jn(e));
  }
  function Ie(e, t, r) {
    if (e.tag === 3)
      vg(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vg(
            t,
            e,
            r
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ga === null || !Ga.has(i))) {
            e = hn(r, e), r = bp(2), i = Ha(t, r, 2), i !== null && (xp(
              r,
              i,
              t,
              e
            ), In(i, 2), jn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function rf(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Lw();
      var c = /* @__PURE__ */ new Set();
      i.set(t, c);
    } else
      c = i.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), i.set(t, c));
    c.has(r) || (Iu = !0, c.add(r), e = Vw.bind(null, e, t, r), t.then(e, e));
  }
  function Vw(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, nt === e && (ke & r) === r && (ft === 4 || ft === 3 && (ke & 62914560) === ke && 300 > Rt() - Ii ? (Ve & 2) === 0 && To(e, 0) : Ku |= r, Eo === ke && (Eo = 0)), jn(e);
  }
  function bg(e, t) {
    t === 0 && (t = si()), e = vr(e, t), e !== null && (In(e, t), jn(e));
  }
  function Xw(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), bg(e, r);
  }
  function Fw(e, t) {
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
    i !== null && i.delete(t), bg(e, r);
  }
  function Qw(e, t) {
    return $o(e, t);
  }
  var as = null, Do = null, of = !1, rs = !1, lf = !1, Xa = 0;
  function jn(e) {
    e !== Do && e.next === null && (Do === null ? as = Do = e : Do = Do.next = e), rs = !0, of || (of = !0, Iw());
  }
  function zl(e, t) {
    if (!lf && rs) {
      lf = !0;
      do
        for (var r = !1, i = as; i !== null; ) {
          if (e !== 0) {
            var c = i.pendingLanes;
            if (c === 0) var u = 0;
            else {
              var g = i.suspendedLanes, S = i.pingedLanes;
              u = (1 << 31 - Gt(42 | e) + 1) - 1, u &= c & ~(g & ~S), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (r = !0, Cg(i, u));
          } else
            u = ke, u = De(
              i,
              i === nt ? u : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (u & 3) === 0 || dr(i, u) || (r = !0, Cg(i, u));
          i = i.next;
        }
      while (r);
      lf = !1;
    }
  }
  function Zw() {
    xg();
  }
  function xg() {
    rs = of = !1;
    var e = 0;
    Xa !== 0 && lS() && (e = Xa);
    for (var t = Rt(), r = null, i = as; i !== null; ) {
      var c = i.next, u = wg(i, t);
      u === 0 ? (i.next = null, r === null ? as = c : r.next = c, c === null && (Do = r)) : (r = i, (e !== 0 || (u & 3) !== 0) && (rs = !0)), i = c;
    }
    Ot !== 0 && Ot !== 5 || zl(e), Xa !== 0 && (Xa = 0);
  }
  function wg(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, c = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var g = 31 - Gt(u), S = 1 << g, k = c[g];
      k === -1 ? ((S & r) === 0 || (S & i) !== 0) && (c[g] = bc(S, t)) : k <= t && (e.expiredLanes |= S), u &= ~S;
    }
    if (t = nt, r = ke, r = De(
      e,
      e === t ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, r === 0 || e === t && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Jo(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || dr(e, r)) {
      if (t = r & -r, t === e.callbackPriority) return t;
      switch (i !== null && Jo(i), wc(r)) {
        case 2:
        case 8:
          r = oi;
          break;
        case 32:
          r = Fr;
          break;
        case 268435456:
          r = li;
          break;
        default:
          r = Fr;
      }
      return i = Sg.bind(null, e), r = $o(r, i), e.callbackPriority = t, e.callbackNode = r, t;
    }
    return i !== null && i !== null && Jo(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Sg(e, t) {
    if (Ot !== 0 && Ot !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (ns() && e.callbackNode !== r)
      return null;
    var i = ke;
    return i = De(
      e,
      e === nt ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (ag(e, i, t), wg(e, Rt()), e.callbackNode != null && e.callbackNode === r ? Sg.bind(null, e) : null);
  }
  function Cg(e, t) {
    if (ns()) return null;
    ag(e, t, !0);
  }
  function Iw() {
    sS(function() {
      (Ve & 6) !== 0 ? $o(
        ri,
        Zw
      ) : xg();
    });
  }
  function sf() {
    if (Xa === 0) {
      var e = mo;
      e === 0 && (e = He, He <<= 1, (He & 261888) === 0 && (He = 256)), Xa = e;
    }
    return Xa;
  }
  function Eg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : di("" + e);
  }
  function Og(e, t) {
    var r = t.ownerDocument.createElement("input");
    return r.name = t.name, r.value = t.value, e.id && r.setAttribute("form", e.id), t.parentNode.insertBefore(r, t), e = new FormData(e), r.parentNode.removeChild(r), e;
  }
  function Kw(e, t, r, i, c) {
    if (t === "submit" && r && r.stateNode === c) {
      var u = Eg(
        (c[Xt] || null).action
      ), g = i.submitter;
      g && (t = (t = g[Xt] || null) ? Eg(t.formAction) : g.getAttribute("formAction"), t !== null && (u = t, g = null));
      var S = new gi(
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
                if (Xa !== 0) {
                  var k = g ? Og(c, g) : new FormData(c);
                  Mu(
                    r,
                    {
                      pending: !0,
                      data: k,
                      method: c.method,
                      action: u
                    },
                    null,
                    k
                  );
                }
              } else
                typeof u == "function" && (S.preventDefault(), k = g ? Og(c, g) : new FormData(c), Mu(
                  r,
                  {
                    pending: !0,
                    data: k,
                    method: c.method,
                    action: u
                  },
                  u,
                  k
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var cf = 0; cf < Wc.length; cf++) {
    var uf = Wc[cf], $w = uf.toLowerCase(), Jw = uf[0].toUpperCase() + uf.slice(1);
    Cn(
      $w,
      "on" + Jw
    );
  }
  Cn(nh, "onAnimationEnd"), Cn(ah, "onAnimationIteration"), Cn(rh, "onAnimationStart"), Cn("dblclick", "onDoubleClick"), Cn("focusin", "onFocus"), Cn("focusout", "onBlur"), Cn(pw, "onTransitionRun"), Cn(gw, "onTransitionStart"), Cn(yw, "onTransitionCancel"), Cn(oh, "onTransitionEnd"), $r("onMouseEnter", ["mouseout", "mouseover"]), $r("onMouseLeave", ["mouseout", "mouseover"]), $r("onPointerEnter", ["pointerout", "pointerover"]), $r("onPointerLeave", ["pointerout", "pointerover"]), hr(
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
  var jl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), eS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl)
  );
  function Tg(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], c = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var S = i[g], k = S.instance, q = S.currentTarget;
            if (S = S.listener, k !== u && c.isPropagationStopped())
              break e;
            u = S, c.currentTarget = q;
            try {
              u(c);
            } catch (X) {
              bi(X);
            }
            c.currentTarget = null, u = k;
          }
        else
          for (g = 0; g < i.length; g++) {
            if (S = i[g], k = S.instance, q = S.currentTarget, S = S.listener, k !== u && c.isPropagationStopped())
              break e;
            u = S, c.currentTarget = q;
            try {
              u(c);
            } catch (X) {
              bi(X);
            }
            c.currentTarget = null, u = k;
          }
      }
    }
  }
  function Ae(e, t) {
    var r = t[Sc];
    r === void 0 && (r = t[Sc] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (Mg(t, e, 2, !1), r.add(i));
  }
  function ff(e, t, r) {
    var i = 0;
    t && (i |= 4), Mg(
      r,
      e,
      i,
      t
    );
  }
  var os = "_reactListening" + Math.random().toString(36).slice(2);
  function df(e) {
    if (!e[os]) {
      e[os] = !0, xm.forEach(function(r) {
        r !== "selectionchange" && (eS.has(r) || ff(r, !1, e), ff(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[os] || (t[os] = !0, ff("selectionchange", !1, t));
    }
  }
  function Mg(e, t, r, i) {
    switch (ny(t)) {
      case 2:
        var c = DS;
        break;
      case 8:
        c = _S;
        break;
      default:
        c = Mf;
    }
    r = c.bind(
      null,
      t,
      r,
      e
    ), c = void 0, !Ac || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), i ? c !== void 0 ? e.addEventListener(t, r, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, r, !0) : c !== void 0 ? e.addEventListener(t, r, {
      passive: c
    }) : e.addEventListener(t, r, !1);
  }
  function mf(e, t, r, i, c) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var S = i.stateNode.containerInfo;
          if (S === c) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var k = g.tag;
              if ((k === 3 || k === 4) && g.stateNode.containerInfo === c)
                return;
              g = g.return;
            }
          for (; S !== null; ) {
            if (g = Zr(S), g === null) return;
            if (k = g.tag, k === 5 || k === 6 || k === 26 || k === 27) {
              i = u = g;
              continue e;
            }
            S = S.parentNode;
          }
        }
        i = i.return;
      }
    Rm(function() {
      var q = u, X = _c(r), I = [];
      e: {
        var P = lh.get(e);
        if (P !== void 0) {
          var G = gi, fe = e;
          switch (e) {
            case "keypress":
              if (hi(r) === 0) break e;
            case "keydown":
            case "keyup":
              G = Fx;
              break;
            case "focusin":
              fe = "focus", G = jc;
              break;
            case "focusout":
              fe = "blur", G = jc;
              break;
            case "beforeblur":
            case "afterblur":
              G = jc;
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
              G = jm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = jx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Ix;
              break;
            case nh:
            case ah:
            case rh:
              G = Bx;
              break;
            case oh:
              G = $x;
              break;
            case "scroll":
            case "scrollend":
              G = kx;
              break;
            case "wheel":
              G = ew;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Lx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Hm;
              break;
            case "toggle":
            case "beforetoggle":
              G = nw;
          }
          var xe = (t & 4) !== 0, tt = !xe && (e === "scroll" || e === "scrollend"), B = xe ? P !== null ? P + "Capture" : null : P;
          xe = [];
          for (var Y = q, L; Y !== null; ) {
            var Z = Y;
            if (L = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || L === null || B === null || (Z = al(Y, B), Z != null && xe.push(
              Yl(Y, Z, L)
            )), tt) break;
            Y = Y.return;
          }
          0 < xe.length && (P = new G(
            P,
            fe,
            null,
            r,
            X
          ), I.push({ event: P, listeners: xe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (P = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", P && r !== Dc && (fe = r.relatedTarget || r.fromElement) && (Zr(fe) || fe[Qr]))
            break e;
          if ((G || P) && (P = X.window === X ? X : (P = X.ownerDocument) ? P.defaultView || P.parentWindow : window, G ? (fe = r.relatedTarget || r.toElement, G = q, fe = fe ? Zr(fe) : null, fe !== null && (tt = f(fe), xe = fe.tag, fe !== tt || xe !== 5 && xe !== 27 && xe !== 6) && (fe = null)) : (G = null, fe = q), G !== fe)) {
            if (xe = jm, Z = "onMouseLeave", B = "onMouseEnter", Y = "mouse", (e === "pointerout" || e === "pointerover") && (xe = Hm, Z = "onPointerLeave", B = "onPointerEnter", Y = "pointer"), tt = G == null ? P : nl(G), L = fe == null ? P : nl(fe), P = new xe(
              Z,
              Y + "leave",
              G,
              r,
              X
            ), P.target = tt, P.relatedTarget = L, Z = null, Zr(X) === q && (xe = new xe(
              B,
              Y + "enter",
              fe,
              r,
              X
            ), xe.target = L, xe.relatedTarget = tt, Z = xe), tt = Z, G && fe)
              t: {
                for (xe = tS, B = G, Y = fe, L = 0, Z = B; Z; Z = xe(Z))
                  L++;
                Z = 0;
                for (var ge = Y; ge; ge = xe(ge))
                  Z++;
                for (; 0 < L - Z; )
                  B = xe(B), L--;
                for (; 0 < Z - L; )
                  Y = xe(Y), Z--;
                for (; L--; ) {
                  if (B === Y || Y !== null && B === Y.alternate) {
                    xe = B;
                    break t;
                  }
                  B = xe(B), Y = xe(Y);
                }
                xe = null;
              }
            else xe = null;
            G !== null && Dg(
              I,
              P,
              G,
              xe,
              !1
            ), fe !== null && tt !== null && Dg(
              I,
              tt,
              fe,
              xe,
              !0
            );
          }
        }
        e: {
          if (P = q ? nl(q) : window, G = P.nodeName && P.nodeName.toLowerCase(), G === "select" || G === "input" && P.type === "file")
            var Pe = Vm;
          else if (Gm(P))
            if (Xm)
              Pe = dw;
            else {
              Pe = uw;
              var de = cw;
            }
          else
            G = P.nodeName, !G || G.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? q && Mc(q.elementType) && (Pe = Vm) : Pe = fw;
          if (Pe && (Pe = Pe(e, q))) {
            Wm(
              I,
              Pe,
              r,
              X
            );
            break e;
          }
          de && de(e, P, q), e === "focusout" && q && P.type === "number" && q.memoizedProps.value != null && Tc(P, "number", P.value);
        }
        switch (de = q ? nl(q) : window, e) {
          case "focusin":
            (Gm(de) || de.contentEditable === "true") && (ro = de, qc = q, fl = null);
            break;
          case "focusout":
            fl = qc = ro = null;
            break;
          case "mousedown":
            Pc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pc = !1, eh(I, r, X);
            break;
          case "selectionchange":
            if (hw) break;
          case "keydown":
          case "keyup":
            eh(I, r, X);
        }
        var Me;
        if (Hc)
          e: {
            switch (e) {
              case "compositionstart":
                var ze = "onCompositionStart";
                break e;
              case "compositionend":
                ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ze = "onCompositionUpdate";
                break e;
            }
            ze = void 0;
          }
        else
          ao ? qm(e, r) && (ze = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (ze = "onCompositionStart");
        ze && (Bm && r.locale !== "ko" && (ao || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && ao && (Me = km()) : (Na = X, Rc = "value" in Na ? Na.value : Na.textContent, ao = !0)), de = ls(q, ze), 0 < de.length && (ze = new Ym(
          ze,
          e,
          null,
          r,
          X
        ), I.push({ event: ze, listeners: de }), Me ? ze.data = Me : (Me = Pm(r), Me !== null && (ze.data = Me)))), (Me = rw ? ow(e, r) : lw(e, r)) && (ze = ls(q, "onBeforeInput"), 0 < ze.length && (de = new Ym(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          X
        ), I.push({
          event: de,
          listeners: ze
        }), de.data = Me)), Kw(
          I,
          e,
          q,
          r,
          X
        );
      }
      Tg(I, t);
    });
  }
  function Yl(e, t, r) {
    return {
      instance: e,
      listener: t,
      currentTarget: r
    };
  }
  function ls(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var c = e, u = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || u === null || (c = al(e, r), c != null && i.unshift(
        Yl(e, c, u)
      ), c = al(e, t), c != null && i.push(
        Yl(e, c, u)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function tS(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Dg(e, t, r, i, c) {
    for (var u = t._reactName, g = []; r !== null && r !== i; ) {
      var S = r, k = S.alternate, q = S.stateNode;
      if (S = S.tag, k !== null && k === i) break;
      S !== 5 && S !== 26 && S !== 27 || q === null || (k = q, c ? (q = al(r, u), q != null && g.unshift(
        Yl(r, q, k)
      )) : c || (q = al(r, u), q != null && g.push(
        Yl(r, q, k)
      ))), r = r.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var nS = /\r\n?/g, aS = /\u0000|\uFFFD/g;
  function _g(e) {
    return (typeof e == "string" ? e : "" + e).replace(nS, `
`).replace(aS, "");
  }
  function Ng(e, t) {
    return t = _g(t), _g(e) === t;
  }
  function et(e, t, r, i, c, u) {
    switch (r) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || eo(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && eo(e, "" + i);
        break;
      case "className":
        ui(e, "class", i);
        break;
      case "tabIndex":
        ui(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ui(e, r, i);
        break;
      case "style":
        Nm(e, i, u);
        break;
      case "data":
        if (t !== "object") {
          ui(e, "data", i);
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
        i = di("" + i), e.setAttribute(r, i);
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
          typeof u == "function" && (r === "formAction" ? (t !== "input" && et(e, t, "name", c.name, c, null), et(
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
        i = di("" + i), e.setAttribute(r, i);
        break;
      case "onClick":
        i != null && (e.onclick = $n);
        break;
      case "onScroll":
        i != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ae("scrollend", e);
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
        r = di("" + i), e.setAttributeNS(
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
        Ae("beforetoggle", e), Ae("toggle", e), ci(e, "popover", i);
        break;
      case "xlinkActuate":
        Kn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Kn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Kn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Kn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Kn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Kn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Kn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Kn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Kn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        ci(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Ax.get(r) || r, ci(e, r, i));
    }
  }
  function hf(e, t, r, i, c, u) {
    switch (r) {
      case "style":
        Nm(e, i, u);
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
        typeof i == "string" ? eo(e, i) : (typeof i == "number" || typeof i == "bigint") && eo(e, "" + i);
        break;
      case "onScroll":
        i != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ae("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = $n);
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
        if (!wm.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (c = r.endsWith("Capture"), t = r.slice(2, c ? r.length - 7 : void 0), u = e[Xt] || null, u = u != null ? u[r] : null, typeof u == "function" && e.removeEventListener(t, u, c), typeof i == "function")) {
              typeof u != "function" && u !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(t, i, c);
              break e;
            }
            r in e ? e[r] = i : i === !0 ? e.setAttribute(r, "") : ci(e, r, i);
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
        Ae("error", e), Ae("load", e);
        var i = !1, c = !1, u;
        for (u in r)
          if (r.hasOwnProperty(u)) {
            var g = r[u];
            if (g != null)
              switch (u) {
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
                  et(e, t, u, g, r, null);
              }
          }
        c && et(e, t, "srcSet", r.srcSet, r, null), i && et(e, t, "src", r.src, r, null);
        return;
      case "input":
        Ae("invalid", e);
        var S = u = g = c = null, k = null, q = null;
        for (i in r)
          if (r.hasOwnProperty(i)) {
            var X = r[i];
            if (X != null)
              switch (i) {
                case "name":
                  c = X;
                  break;
                case "type":
                  g = X;
                  break;
                case "checked":
                  k = X;
                  break;
                case "defaultChecked":
                  q = X;
                  break;
                case "value":
                  u = X;
                  break;
                case "defaultValue":
                  S = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(o(137, t));
                  break;
                default:
                  et(e, t, i, X, r, null);
              }
          }
        Tm(
          e,
          u,
          S,
          k,
          q,
          g,
          c,
          !1
        );
        return;
      case "select":
        Ae("invalid", e), i = g = u = null;
        for (c in r)
          if (r.hasOwnProperty(c) && (S = r[c], S != null))
            switch (c) {
              case "value":
                u = S;
                break;
              case "defaultValue":
                g = S;
                break;
              case "multiple":
                i = S;
              default:
                et(e, t, c, S, r, null);
            }
        t = u, r = g, e.multiple = !!i, t != null ? Jr(e, !!i, t, !1) : r != null && Jr(e, !!i, r, !0);
        return;
      case "textarea":
        Ae("invalid", e), u = c = i = null;
        for (g in r)
          if (r.hasOwnProperty(g) && (S = r[g], S != null))
            switch (g) {
              case "value":
                i = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
                u = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(91));
                break;
              default:
                et(e, t, g, S, r, null);
            }
        Dm(e, i, c, u);
        return;
      case "option":
        for (k in r)
          r.hasOwnProperty(k) && (i = r[k], i != null) && (k === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : et(e, t, k, i, r, null));
        return;
      case "dialog":
        Ae("beforetoggle", e), Ae("toggle", e), Ae("cancel", e), Ae("close", e);
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < jl.length; i++)
          Ae(jl[i], e);
        break;
      case "image":
        Ae("error", e), Ae("load", e);
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ae("error", e), Ae("load", e);
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
        if (Mc(t)) {
          for (X in r)
            r.hasOwnProperty(X) && (i = r[X], i !== void 0 && hf(
              e,
              t,
              X,
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
  function rS(e, t, r, i) {
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
        var c = null, u = null, g = null, S = null, k = null, q = null, X = null;
        for (G in r) {
          var I = r[G];
          if (r.hasOwnProperty(G) && I != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                k = I;
              default:
                i.hasOwnProperty(G) || et(e, t, G, null, i, I);
            }
        }
        for (var P in i) {
          var G = i[P];
          if (I = r[P], i.hasOwnProperty(P) && (G != null || I != null))
            switch (P) {
              case "type":
                u = G;
                break;
              case "name":
                c = G;
                break;
              case "checked":
                q = G;
                break;
              case "defaultChecked":
                X = G;
                break;
              case "value":
                g = G;
                break;
              case "defaultValue":
                S = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(o(137, t));
                break;
              default:
                G !== I && et(
                  e,
                  t,
                  P,
                  G,
                  i,
                  I
                );
            }
        }
        Oc(
          e,
          g,
          S,
          k,
          q,
          X,
          u,
          c
        );
        return;
      case "select":
        G = g = S = P = null;
        for (u in r)
          if (k = r[u], r.hasOwnProperty(u) && k != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                G = k;
              default:
                i.hasOwnProperty(u) || et(
                  e,
                  t,
                  u,
                  null,
                  i,
                  k
                );
            }
        for (c in i)
          if (u = i[c], k = r[c], i.hasOwnProperty(c) && (u != null || k != null))
            switch (c) {
              case "value":
                P = u;
                break;
              case "defaultValue":
                S = u;
                break;
              case "multiple":
                g = u;
              default:
                u !== k && et(
                  e,
                  t,
                  c,
                  u,
                  i,
                  k
                );
            }
        t = S, r = g, i = G, P != null ? Jr(e, !!r, P, !1) : !!i != !!r && (t != null ? Jr(e, !!r, t, !0) : Jr(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        G = P = null;
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
        for (g in i)
          if (c = i[g], u = r[g], i.hasOwnProperty(g) && (c != null || u != null))
            switch (g) {
              case "value":
                P = c;
                break;
              case "defaultValue":
                G = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                c !== u && et(e, t, g, c, i, u);
            }
        Mm(e, P, G);
        return;
      case "option":
        for (var fe in r)
          P = r[fe], r.hasOwnProperty(fe) && P != null && !i.hasOwnProperty(fe) && (fe === "selected" ? e.selected = !1 : et(
            e,
            t,
            fe,
            null,
            i,
            P
          ));
        for (k in i)
          P = i[k], G = r[k], i.hasOwnProperty(k) && P !== G && (P != null || G != null) && (k === "selected" ? e.selected = P && typeof P != "function" && typeof P != "symbol" : et(
            e,
            t,
            k,
            P,
            i,
            G
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
          if (P = i[q], G = r[q], i.hasOwnProperty(q) && P !== G && (P != null || G != null))
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
                  G
                );
            }
        return;
      default:
        if (Mc(t)) {
          for (var tt in r)
            P = r[tt], r.hasOwnProperty(tt) && P !== void 0 && !i.hasOwnProperty(tt) && hf(
              e,
              t,
              tt,
              void 0,
              i,
              P
            );
          for (X in i)
            P = i[X], G = r[X], !i.hasOwnProperty(X) || P === G || P === void 0 && G === void 0 || hf(
              e,
              t,
              X,
              P,
              i,
              G
            );
          return;
        }
    }
    for (var B in r)
      P = r[B], r.hasOwnProperty(B) && P != null && !i.hasOwnProperty(B) && et(e, t, B, null, i, P);
    for (I in i)
      P = i[I], G = r[I], !i.hasOwnProperty(I) || P === G || P == null && G == null || et(e, t, I, P, i, G);
  }
  function Ag(e) {
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
  function oS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, r = performance.getEntriesByType("resource"), i = 0; i < r.length; i++) {
        var c = r[i], u = c.transferSize, g = c.initiatorType, S = c.duration;
        if (u && S && Ag(g)) {
          for (g = 0, S = c.responseEnd, i += 1; i < r.length; i++) {
            var k = r[i], q = k.startTime;
            if (q > S) break;
            var X = k.transferSize, I = k.initiatorType;
            X && Ag(I) && (k = k.responseEnd, g += X * (k < S ? 1 : (S - q) / (k - q)));
          }
          if (--i, t += 8 * (u + g) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var pf = null, gf = null;
  function is(e) {
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
  function kg(e, t) {
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
  function yf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var vf = null;
  function lS() {
    var e = window.event;
    return e && e.type === "popstate" ? e === vf ? !1 : (vf = e, !0) : (vf = null, !1);
  }
  var zg = typeof setTimeout == "function" ? setTimeout : void 0, iS = typeof clearTimeout == "function" ? clearTimeout : void 0, jg = typeof Promise == "function" ? Promise : void 0, sS = typeof queueMicrotask == "function" ? queueMicrotask : typeof jg < "u" ? function(e) {
    return jg.resolve(null).then(e).catch(cS);
  } : zg;
  function cS(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fa(e) {
    return e === "head";
  }
  function Yg(e, t) {
    var r = t, i = 0;
    do {
      var c = r.nextSibling;
      if (e.removeChild(r), c && c.nodeType === 8)
        if (r = c.data, r === "/$" || r === "/&") {
          if (i === 0) {
            e.removeChild(c), Ro(t);
            return;
          }
          i--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          i++;
        else if (r === "html")
          Hl(e.ownerDocument.documentElement);
        else if (r === "head") {
          r = e.ownerDocument.head, Hl(r);
          for (var u = r.firstChild; u; ) {
            var g = u.nextSibling, S = u.nodeName;
            u[tl] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && u.rel.toLowerCase() === "stylesheet" || r.removeChild(u), u = g;
          }
        } else
          r === "body" && Hl(e.ownerDocument.body);
      r = c;
    } while (r);
    Ro(t);
  }
  function Hg(e, t) {
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
  function bf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (t = t.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bf(r), Cc(r);
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
  function uS(e, t, r, i) {
    for (; e.nodeType === 1; ) {
      var c = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[tl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = bn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function fS(e, t, r) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = bn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bg(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = bn(e.nextSibling), e === null)) return null;
    return e;
  }
  function xf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function wf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function dS(e, t) {
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
  var Sf = null;
  function Ug(e) {
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
  function Lg(e) {
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
  function qg(e, t, r) {
    switch (t = is(r), e) {
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
  function Hl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Cc(e);
  }
  var xn = /* @__PURE__ */ new Map(), Pg = /* @__PURE__ */ new Set();
  function ss(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ha = Q.d;
  Q.d = {
    f: mS,
    r: hS,
    D: pS,
    C: gS,
    L: yS,
    m: vS,
    X: xS,
    S: bS,
    M: wS
  };
  function mS() {
    var e = ha.f(), t = Ji();
    return e || t;
  }
  function hS(e) {
    var t = Ir(e);
    t !== null && t.tag === 5 && t.type === "form" ? op(t) : ha.r(e);
  }
  var _o = typeof document > "u" ? null : document;
  function Gg(e, t, r) {
    var i = _o;
    if (i && typeof t == "string" && t) {
      var c = dn(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof r == "string" && (c += '[crossorigin="' + r + '"]'), Pg.has(c) || (Pg.add(c), e = { rel: e, crossOrigin: r, href: t }, i.querySelector(c) === null && (t = i.createElement("link"), Ht(t, "link", e), Dt(t), i.head.appendChild(t)));
    }
  }
  function pS(e) {
    ha.D(e), Gg("dns-prefetch", e, null);
  }
  function gS(e, t) {
    ha.C(e, t), Gg("preconnect", e, t);
  }
  function yS(e, t, r) {
    ha.L(e, t, r);
    var i = _o;
    if (i && e && t) {
      var c = 'link[rel="preload"][as="' + dn(t) + '"]';
      t === "image" && r && r.imageSrcSet ? (c += '[imagesrcset="' + dn(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (c += '[imagesizes="' + dn(
        r.imageSizes
      ) + '"]')) : c += '[href="' + dn(e) + '"]';
      var u = c;
      switch (t) {
        case "style":
          u = No(e);
          break;
        case "script":
          u = Ao(e);
      }
      xn.has(u) || (e = y(
        {
          rel: "preload",
          href: t === "image" && r && r.imageSrcSet ? void 0 : e,
          as: t
        },
        r
      ), xn.set(u, e), i.querySelector(c) !== null || t === "style" && i.querySelector(Bl(u)) || t === "script" && i.querySelector(Ul(u)) || (t = i.createElement("link"), Ht(t, "link", e), Dt(t), i.head.appendChild(t)));
    }
  }
  function vS(e, t) {
    ha.m(e, t);
    var r = _o;
    if (r && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + dn(i) + '"][href="' + dn(e) + '"]', u = c;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ao(e);
      }
      if (!xn.has(u) && (e = y({ rel: "modulepreload", href: e }, t), xn.set(u, e), r.querySelector(c) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Ul(u)))
              return;
        }
        i = r.createElement("link"), Ht(i, "link", e), Dt(i), r.head.appendChild(i);
      }
    }
  }
  function bS(e, t, r) {
    ha.S(e, t, r);
    var i = _o;
    if (i && e) {
      var c = Kr(i).hoistableStyles, u = No(e);
      t = t || "default";
      var g = c.get(u);
      if (!g) {
        var S = { loading: 0, preload: null };
        if (g = i.querySelector(
          Bl(u)
        ))
          S.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            r
          ), (r = xn.get(u)) && Cf(e, r);
          var k = g = i.createElement("link");
          Dt(k), Ht(k, "link", e), k._p = new Promise(function(q, X) {
            k.onload = q, k.onerror = X;
          }), k.addEventListener("load", function() {
            S.loading |= 1;
          }), k.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, cs(g, t, i);
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: S
        }, c.set(u, g);
      }
    }
  }
  function xS(e, t) {
    ha.X(e, t);
    var r = _o;
    if (r && e) {
      var i = Kr(r).hoistableScripts, c = Ao(e), u = i.get(c);
      u || (u = r.querySelector(Ul(c)), u || (e = y({ src: e, async: !0 }, t), (t = xn.get(c)) && Ef(e, t), u = r.createElement("script"), Dt(u), Ht(u, "link", e), r.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(c, u));
    }
  }
  function wS(e, t) {
    ha.M(e, t);
    var r = _o;
    if (r && e) {
      var i = Kr(r).hoistableScripts, c = Ao(e), u = i.get(c);
      u || (u = r.querySelector(Ul(c)), u || (e = y({ src: e, async: !0, type: "module" }, t), (t = xn.get(c)) && Ef(e, t), u = r.createElement("script"), Dt(u), Ht(u, "link", e), r.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(c, u));
    }
  }
  function Wg(e, t, r, i) {
    var c = (c = oe.current) ? ss(c) : null;
    if (!c) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (t = No(r.href), r = Kr(
          c
        ).hoistableStyles, i = r.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = No(r.href);
          var u = Kr(
            c
          ).hoistableStyles, g = u.get(e);
          if (g || (c = c.ownerDocument || c, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, g), (u = c.querySelector(
            Bl(e)
          )) && !u._p && (g.instance = u, g.state.loading = 5), xn.has(e) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, xn.set(e, r), u || SS(
            c,
            e,
            r,
            g.state
          ))), t && i === null)
            throw Error(o(528, ""));
          return g;
        }
        if (t && i !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = r.async, r = r.src, typeof r == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ao(r), r = Kr(
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
  function No(e) {
    return 'href="' + dn(e) + '"';
  }
  function Bl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Vg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function SS(e, t, r, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), Ht(t, "link", r), Dt(t), e.head.appendChild(t));
  }
  function Ao(e) {
    return '[src="' + dn(e) + '"]';
  }
  function Ul(e) {
    return "script[async]" + e;
  }
  function Xg(e, t, r) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + dn(r.href) + '"]'
          );
          if (i)
            return t.instance = i, Dt(i), i;
          var c = y({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), Dt(i), Ht(i, "style", c), cs(i, r.precedence, e), t.instance = i;
        case "stylesheet":
          c = No(r.href);
          var u = e.querySelector(
            Bl(c)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Dt(u), u;
          i = Vg(r), (c = xn.get(c)) && Cf(i, c), u = (e.ownerDocument || e).createElement("link"), Dt(u);
          var g = u;
          return g._p = new Promise(function(S, k) {
            g.onload = S, g.onerror = k;
          }), Ht(u, "link", i), t.state.loading |= 4, cs(u, r.precedence, e), t.instance = u;
        case "script":
          return u = Ao(r.src), (c = e.querySelector(
            Ul(u)
          )) ? (t.instance = c, Dt(c), c) : (i = r, (c = xn.get(u)) && (i = y({}, r), Ef(i, c)), e = e.ownerDocument || e, c = e.createElement("script"), Dt(c), Ht(c, "link", i), e.head.appendChild(c), t.instance = c);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, cs(i, r.precedence, e));
    return t.instance;
  }
  function cs(e, t, r) {
    for (var i = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = i.length ? i[i.length - 1] : null, u = c, g = 0; g < i.length; g++) {
      var S = i[g];
      if (S.dataset.precedence === t) u = S;
      else if (u !== c) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = r.nodeType === 9 ? r.head : r, t.insertBefore(e, t.firstChild));
  }
  function Cf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ef(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var us = null;
  function Fg(e, t, r) {
    if (us === null) {
      var i = /* @__PURE__ */ new Map(), c = us = /* @__PURE__ */ new Map();
      c.set(r, i);
    } else
      c = us, i = c.get(r), i || (i = /* @__PURE__ */ new Map(), c.set(r, i));
    if (i.has(e)) return i;
    for (i.set(e, null), r = r.getElementsByTagName(e), c = 0; c < r.length; c++) {
      var u = r[c];
      if (!(u[tl] || u[kt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = u.getAttribute(t) || "";
        g = e + g;
        var S = i.get(g);
        S ? S.push(u) : i.set(g, [u]);
      }
    }
    return i;
  }
  function Qg(e, t, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function CS(e, t, r) {
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
  function Zg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ES(e, t, r, i) {
    if (r.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var c = No(i.href), u = t.querySelector(
          Bl(c)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = fs.bind(e), t.then(e, e)), r.state.loading |= 4, r.instance = u, Dt(u);
          return;
        }
        u = t.ownerDocument || t, i = Vg(i), (c = xn.get(c)) && Cf(i, c), u = u.createElement("link"), Dt(u);
        var g = u;
        g._p = new Promise(function(S, k) {
          g.onload = S, g.onerror = k;
        }), Ht(u, "link", i), r.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, t), (t = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = fs.bind(e), t.addEventListener("load", r), t.addEventListener("error", r));
    }
  }
  var Of = 0;
  function OS(e, t) {
    return e.stylesheets && e.count === 0 && ms(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var i = setTimeout(function() {
        if (e.stylesheets && ms(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Of === 0 && (Of = 62500 * oS());
      var c = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ms(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Of ? 50 : 800) + t
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(c);
      };
    } : null;
  }
  function fs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ms(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ds = null;
  function ms(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ds = /* @__PURE__ */ new Map(), t.forEach(TS, e), ds = null, fs.call(e));
  }
  function TS(e, t) {
    if (!(t.state.loading & 4)) {
      var r = ds.get(e);
      if (r) var i = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), ds.set(e, r);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < c.length; u++) {
          var g = c[u];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (r.set(g.dataset.precedence, g), i = g);
        }
        i && r.set(null, i);
      }
      c = t.instance, g = c.getAttribute("data-precedence"), u = r.get(g) || i, u === i && r.set(null, c), r.set(g, c), this.count++, i = fs.bind(this), c.addEventListener("load", i), c.addEventListener("error", i), u ? u.parentNode.insertBefore(c, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ll = {
    $$typeof: _,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function MS(e, t, r, i, c, u, g, S, k) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mr(0), this.hiddenUpdates = mr(null), this.identifierPrefix = i, this.onUncaughtError = c, this.onCaughtError = u, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = k, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ig(e, t, r, i, c, u, g, S, k, q, X, I) {
    return e = new MS(
      e,
      t,
      r,
      g,
      k,
      q,
      X,
      I,
      S
    ), t = 1, u === !0 && (t |= 24), u = tn(3, null, null, t), e.current = u, u.stateNode = e, t = au(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: i,
      isDehydrated: r,
      cache: t
    }, iu(u), e;
  }
  function Kg(e) {
    return e ? (e = io, e) : io;
  }
  function $g(e, t, r, i, c, u) {
    c = Kg(c), i.context === null ? i.context = c : i.pendingContext = c, i = Ya(t), i.payload = { element: r }, u = u === void 0 ? null : u, u !== null && (i.callback = u), r = Ha(e, i, t), r !== null && ($t(r, e, t), vl(r, e, t));
  }
  function Jg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Tf(e, t) {
    Jg(e, t), (e = e.alternate) && Jg(e, t);
  }
  function ey(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = vr(e, 67108864);
      t !== null && $t(t, e, 67108864), Tf(e, 67108864);
    }
  }
  function ty(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ln();
      t = xc(t);
      var r = vr(e, t);
      r !== null && $t(r, e, t), Tf(e, t);
    }
  }
  var hs = !0;
  function DS(e, t, r, i) {
    var c = H.T;
    H.T = null;
    var u = Q.p;
    try {
      Q.p = 2, Mf(e, t, r, i);
    } finally {
      Q.p = u, H.T = c;
    }
  }
  function _S(e, t, r, i) {
    var c = H.T;
    H.T = null;
    var u = Q.p;
    try {
      Q.p = 8, Mf(e, t, r, i);
    } finally {
      Q.p = u, H.T = c;
    }
  }
  function Mf(e, t, r, i) {
    if (hs) {
      var c = Df(i);
      if (c === null)
        mf(
          e,
          t,
          i,
          ps,
          r
        ), ay(e, i);
      else if (AS(
        c,
        e,
        t,
        r,
        i
      ))
        i.stopPropagation();
      else if (ay(e, i), t & 4 && -1 < NS.indexOf(e)) {
        for (; c !== null; ) {
          var u = Ir(c);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var g = mt(u.pendingLanes);
                  if (g !== 0) {
                    var S = u;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; g; ) {
                      var k = 1 << 31 - Gt(g);
                      S.entanglements[1] |= k, g &= ~k;
                    }
                    jn(u), (Ve & 6) === 0 && (Ki = Rt() + 500, zl(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = vr(u, 2), S !== null && $t(S, u, 2), Ji(), Tf(u, 2);
            }
          if (u = Df(i), u === null && mf(
            e,
            t,
            i,
            ps,
            r
          ), u === c) break;
          c = u;
        }
        c !== null && i.stopPropagation();
      } else
        mf(
          e,
          t,
          i,
          null,
          r
        );
    }
  }
  function Df(e) {
    return e = _c(e), _f(e);
  }
  var ps = null;
  function _f(e) {
    if (ps = null, e = Zr(e), e !== null) {
      var t = f(e);
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
    return ps = e, null;
  }
  function ny(e) {
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
        switch (el()) {
          case ri:
            return 2;
          case oi:
            return 8;
          case Fr:
          case pc:
            return 32;
          case li:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nf = !1, Qa = null, Za = null, Ia = null, ql = /* @__PURE__ */ new Map(), Pl = /* @__PURE__ */ new Map(), Ka = [], NS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ay(e, t) {
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
        ql.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pl.delete(t.pointerId);
    }
  }
  function Gl(e, t, r, i, c, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: r,
      eventSystemFlags: i,
      nativeEvent: u,
      targetContainers: [c]
    }, t !== null && (t = Ir(t), t !== null && ey(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function AS(e, t, r, i, c) {
    switch (t) {
      case "focusin":
        return Qa = Gl(
          Qa,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "dragenter":
        return Za = Gl(
          Za,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "mouseover":
        return Ia = Gl(
          Ia,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "pointerover":
        var u = c.pointerId;
        return ql.set(
          u,
          Gl(
            ql.get(u) || null,
            e,
            t,
            r,
            i,
            c
          )
        ), !0;
      case "gotpointercapture":
        return u = c.pointerId, Pl.set(
          u,
          Gl(
            Pl.get(u) || null,
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
  function ry(e) {
    var t = Zr(e.target);
    if (t !== null) {
      var r = f(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = d(r), t !== null) {
            e.blockedOn = t, vm(e.priority, function() {
              ty(r);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(r), t !== null) {
            e.blockedOn = t, vm(e.priority, function() {
              ty(r);
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
  function gs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Df(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(
          r.type,
          r
        );
        Dc = i, r.target.dispatchEvent(i), Dc = null;
      } else
        return t = Ir(r), t !== null && ey(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function oy(e, t, r) {
    gs(e) && r.delete(t);
  }
  function RS() {
    Nf = !1, Qa !== null && gs(Qa) && (Qa = null), Za !== null && gs(Za) && (Za = null), Ia !== null && gs(Ia) && (Ia = null), ql.forEach(oy), Pl.forEach(oy);
  }
  function ys(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Nf || (Nf = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      RS
    )));
  }
  var vs = null;
  function ly(e) {
    vs !== e && (vs = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        vs === e && (vs = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t], i = e[t + 1], c = e[t + 2];
          if (typeof i != "function") {
            if (_f(i || r) === null)
              continue;
            break;
          }
          var u = Ir(r);
          u !== null && (e.splice(t, 3), t -= 3, Mu(
            u,
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
  function Ro(e) {
    function t(k) {
      return ys(k, e);
    }
    Qa !== null && ys(Qa, e), Za !== null && ys(Za, e), Ia !== null && ys(Ia, e), ql.forEach(t), Pl.forEach(t);
    for (var r = 0; r < Ka.length; r++) {
      var i = Ka[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Ka.length && (r = Ka[0], r.blockedOn === null); )
      ry(r), r.blockedOn === null && Ka.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (i = 0; i < r.length; i += 3) {
        var c = r[i], u = r[i + 1], g = c[Xt] || null;
        if (typeof u == "function")
          g || ly(r);
        else if (g) {
          var S = null;
          if (u && u.hasAttribute("formAction")) {
            if (c = u, g = u[Xt] || null)
              S = g.formAction;
            else if (_f(c) !== null) continue;
          } else S = g.action;
          typeof S == "function" ? r[i + 1] = S : (r.splice(i, 3), i -= 3), ly(r);
        }
      }
  }
  function iy() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(g) {
            return c = g;
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
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
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
  function Af(e) {
    this._internalRoot = e;
  }
  bs.prototype.render = Af.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var r = t.current, i = ln();
    $g(r, i, e, t, null, null);
  }, bs.prototype.unmount = Af.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      $g(e.current, 2, null, e, null, null), Ji(), t[Qr] = null;
    }
  };
  function bs(e) {
    this._internalRoot = e;
  }
  bs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ym();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Ka.length && t !== 0 && t < Ka[r].priority; r++) ;
      Ka.splice(r, 0, e), r === 0 && ry(e);
    }
  };
  var sy = a.version;
  if (sy !== "19.2.3")
    throw Error(
      o(
        527,
        sy,
        "19.2.3"
      )
    );
  Q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = p(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var kS = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xs.isDisabled && xs.supportsFiber)
      try {
        fr = xs.inject(
          kS
        ), Pt = xs;
      } catch {
      }
  }
  return Vl.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var r = !1, i = "", c = pp, u = gp, g = yp;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError)), t = Ig(
      e,
      1,
      !1,
      null,
      null,
      r,
      i,
      null,
      c,
      u,
      g,
      iy
    ), e[Qr] = t.current, df(e), new Af(t);
  }, Vl.hydrateRoot = function(e, t, r) {
    if (!s(e)) throw Error(o(299));
    var i = !1, c = "", u = pp, g = gp, S = yp, k = null;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onUncaughtError !== void 0 && (u = r.onUncaughtError), r.onCaughtError !== void 0 && (g = r.onCaughtError), r.onRecoverableError !== void 0 && (S = r.onRecoverableError), r.formState !== void 0 && (k = r.formState)), t = Ig(
      e,
      1,
      !0,
      t,
      r ?? null,
      i,
      c,
      k,
      u,
      g,
      S,
      iy
    ), t.context = Kg(null), r = t.current, i = ln(), i = xc(i), c = Ya(i), c.callback = null, Ha(r, c, i), r = i, t.current.lanes = r, In(t, r), jn(t), e[Qr] = t.current, df(e), new bs(t);
  }, Vl.version = "19.2.3", Vl;
}
var wy;
function WS() {
  if (wy) return zf.exports;
  wy = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), zf.exports = GS(), zf.exports;
}
var VS = WS(), x = Sd();
const se = /* @__PURE__ */ YS(x), Lr = /* @__PURE__ */ jS({
  __proto__: null,
  default: se
}, [x]);
var XS = Object.defineProperty, Cd = (n, a) => XS(n, "name", { value: a, configurable: !0 });
function ad(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
Cd(ad, "setRef");
function Mv(...n) {
  return (a) => {
    let l = !1;
    const o = n.map((s) => {
      const f = ad(s, a);
      return !l && typeof f == "function" && (l = !0), f;
    });
    if (l)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const f = o[s];
          typeof f == "function" ? f() : ad(n[s], null);
        }
      };
  };
}
Cd(Mv, "composeRefs");
function at(...n) {
  return x.useCallback(Mv(...n), n);
}
Cd(at, "useComposedRefs");
var FS = Object.defineProperty, un = (n, a) => FS(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Sa(n) {
  const a = x.forwardRef((l, o) => {
    let { children: s, ...f } = l, d = null, m = !1;
    const h = [];
    s = kv(s), x.Children.forEach(s, (w) => {
      if (Av(w)) {
        m = !0;
        const E = w;
        let M = "child" in E.props ? E.props.child : E.props.children;
        for (; Ed(M) && typeof Ys == "function"; )
          M = Ys(M._payload);
        d = IS(E, M), h.push(d?.props?.children);
      } else
        h.push(w);
    }), d ? d = x.cloneElement(d, void 0, h) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && x.Children.count(s) === 1 && x.isValidElement(s) && (d = s)
    );
    const p = d ? Nv(d) : void 0, b = at(o, p);
    if (!d) {
      if (s || s === 0)
        throw new Error(
          m ? JS(n) : $S(n)
        );
      return s;
    }
    const y = _v(f, d.props ?? {});
    return d.type !== x.Fragment && (y.ref = o ? b : p), x.cloneElement(d, y);
  });
  return a.displayName = `${n}.Slot`, a;
}
un(Sa, "createSlot");
var QS = /* @__PURE__ */ Sa("Slot"), Dv = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ZS(n) {
  const a = /* @__PURE__ */ un((l) => "child" in l ? l.children(l.child) : l.children, "Slottable");
  return a.displayName = `${n}.Slottable`, a.__radixId = Dv, a;
}
un(ZS, "createSlottable");
var IS = /* @__PURE__ */ un((n, a) => "child" in n.props ? x.isValidElement(a) ? x.cloneElement(a, void 0, n.props.children(a.props.children)) : null : x.isValidElement(a) ? a : null, "getSlottableElementFromSlottable");
function _v(n, a) {
  const l = { ...a };
  for (const o in a) {
    const s = n[o], f = a[o];
    /^on[A-Z]/.test(o) ? s && f ? l[o] = (...m) => {
      const h = f(...m);
      return s(...m), h;
    } : s && (l[o] = s) : o === "style" ? l[o] = { ...s, ...f } : o === "className" ? l[o] = [s, f].filter(Boolean).join(" ") : o === "aria-describedby" && (l[o] = zv(f, s));
  }
  return { ...n, ...l };
}
un(_v, "mergeProps");
function Nv(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning;
  return l ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
un(Nv, "getElementRef");
function Av(n) {
  return x.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Dv;
}
un(Av, "isSlottable");
var KS = /* @__PURE__ */ Symbol.for("react.lazy");
function Ed(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === KS && "_payload" in n && Rv(n._payload);
}
un(Ed, "isLazyComponent");
function Rv(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
un(Rv, "isPromiseLike");
function kv(n) {
  let a = n;
  for (; Ed(a) && typeof Ys == "function"; )
    a = Ys(a._payload);
  return a;
}
un(kv, "useUnwrappedLazy");
function zv(...n) {
  const a = /* @__PURE__ */ new Set();
  for (const l of n)
    if (typeof l == "string")
      for (const o of String(l).trim().split(/\s+/))
        o && a.add(o);
  return a.size > 0 ? Array.from(a).join(" ") : void 0;
}
un(zv, "concatAriaDescribedby");
var $S = /* @__PURE__ */ un((n) => `${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), JS = /* @__PURE__ */ un((n) => `${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Ys = Lr[" use ".trim().toString()];
function jv(n) {
  var a, l, o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (a = 0; a < s; a++) n[a] && (l = jv(n[a])) && (o && (o += " "), o += l);
  } else for (l in n) n[l] && (o && (o += " "), o += l);
  return o;
}
function Yv() {
  for (var n, a, l = 0, o = "", s = arguments.length; l < s; l++) (n = arguments[l]) && (a = jv(n)) && (o && (o += " "), o += a);
  return o;
}
const Sy = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, Cy = Yv, e1 = (n, a) => (l) => {
  var o;
  if (a?.variants == null) return Cy(n, l?.class, l?.className);
  const { variants: s, defaultVariants: f } = a, d = Object.keys(s).map((p) => {
    const b = l?.[p], y = f?.[p];
    if (b === null) return null;
    const w = Sy(b) || Sy(y);
    return s[p][w];
  }), m = l && Object.entries(l).reduce((p, b) => {
    let [y, w] = b;
    return w === void 0 || (p[y] = w), p;
  }, {}), h = a == null || (o = a.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, b) => {
    let { class: y, className: w, ...E } = b;
    return Object.entries(E).every((M) => {
      let [O, C] = M;
      return Array.isArray(C) ? C.includes({
        ...f,
        ...m
      }[O]) : {
        ...f,
        ...m
      }[O] === C;
    }) ? [
      ...p,
      y,
      w
    ] : p;
  }, []);
  return Cy(n, d, h, l?.class, l?.className);
}, t1 = (n, a) => {
  const l = new Array(n.length + a.length);
  for (let o = 0; o < n.length; o++)
    l[o] = n[o];
  for (let o = 0; o < a.length; o++)
    l[n.length + o] = a[o];
  return l;
}, n1 = (n, a) => ({
  classGroupId: n,
  validator: a
}), Hv = (n = /* @__PURE__ */ new Map(), a = null, l) => ({
  nextPart: n,
  validators: a,
  classGroupId: l
}), Hs = "-", Ey = [], a1 = "arbitrary..", r1 = (n) => {
  const a = l1(n), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: o
  } = n;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return o1(d);
      const m = d.split(Hs), h = m[0] === "" && m.length > 1 ? 1 : 0;
      return Bv(m, h, a);
    },
    getConflictingClassGroupIds: (d, m) => {
      if (m) {
        const h = o[d], p = l[d];
        return h ? p ? t1(p, h) : h : p || Ey;
      }
      return l[d] || Ey;
    }
  };
}, Bv = (n, a, l) => {
  if (n.length - a === 0)
    return l.classGroupId;
  const s = n[a], f = l.nextPart.get(s);
  if (f) {
    const p = Bv(n, a + 1, f);
    if (p) return p;
  }
  const d = l.validators;
  if (d === null)
    return;
  const m = a === 0 ? n.join(Hs) : n.slice(a).join(Hs), h = d.length;
  for (let p = 0; p < h; p++) {
    const b = d[p];
    if (b.validator(m))
      return b.classGroupId;
  }
}, o1 = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const a = n.slice(1, -1), l = a.indexOf(":"), o = a.slice(0, l);
  return o ? a1 + o : void 0;
})(), l1 = (n) => {
  const {
    theme: a,
    classGroups: l
  } = n;
  return i1(l, a);
}, i1 = (n, a) => {
  const l = Hv();
  for (const o in n) {
    const s = n[o];
    Od(s, l, o, a);
  }
  return l;
}, Od = (n, a, l, o) => {
  const s = n.length;
  for (let f = 0; f < s; f++) {
    const d = n[f];
    s1(d, a, l, o);
  }
}, s1 = (n, a, l, o) => {
  if (typeof n == "string") {
    c1(n, a, l);
    return;
  }
  if (typeof n == "function") {
    u1(n, a, l, o);
    return;
  }
  f1(n, a, l, o);
}, c1 = (n, a, l) => {
  const o = n === "" ? a : Uv(a, n);
  o.classGroupId = l;
}, u1 = (n, a, l, o) => {
  if (d1(n)) {
    Od(n(o), a, l, o);
    return;
  }
  a.validators === null && (a.validators = []), a.validators.push(n1(l, n));
}, f1 = (n, a, l, o) => {
  const s = Object.entries(n), f = s.length;
  for (let d = 0; d < f; d++) {
    const [m, h] = s[d];
    Od(h, Uv(a, m), l, o);
  }
}, Uv = (n, a) => {
  let l = n;
  const o = a.split(Hs), s = o.length;
  for (let f = 0; f < s; f++) {
    const d = o[f];
    let m = l.nextPart.get(d);
    m || (m = Hv(), l.nextPart.set(d, m)), l = m;
  }
  return l;
}, d1 = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, m1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const s = (f, d) => {
    l[f] = d, a++, a > n && (a = 0, o = l, l = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(f) {
      let d = l[f];
      if (d !== void 0)
        return d;
      if ((d = o[f]) !== void 0)
        return s(f, d), d;
    },
    set(f, d) {
      f in l ? l[f] = d : s(f, d);
    }
  };
}, rd = "!", Oy = ":", h1 = [], Ty = (n, a, l, o, s) => ({
  modifiers: n,
  hasImportantModifier: a,
  baseClassName: l,
  maybePostfixModifierPosition: o,
  isExternal: s
}), p1 = (n) => {
  const {
    prefix: a,
    experimentalParseClassName: l
  } = n;
  let o = (s) => {
    const f = [];
    let d = 0, m = 0, h = 0, p;
    const b = s.length;
    for (let O = 0; O < b; O++) {
      const C = s[O];
      if (d === 0 && m === 0) {
        if (C === Oy) {
          f.push(s.slice(h, O)), h = O + 1;
          continue;
        }
        if (C === "/") {
          p = O;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" ? d-- : C === "(" ? m++ : C === ")" && m--;
    }
    const y = f.length === 0 ? s : s.slice(h);
    let w = y, E = !1;
    y.endsWith(rd) ? (w = y.slice(0, -1), E = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(rd) && (w = y.slice(1), E = !0)
    );
    const M = p && p > h ? p - h : void 0;
    return Ty(f, E, w, M);
  };
  if (a) {
    const s = a + Oy, f = o;
    o = (d) => d.startsWith(s) ? f(d.slice(s.length)) : Ty(h1, !1, d, void 0, !0);
  }
  if (l) {
    const s = o;
    o = (f) => l({
      className: f,
      parseClassName: s
    });
  }
  return o;
}, g1 = (n) => {
  const a = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((l, o) => {
    a.set(l, 1e6 + o);
  }), (l) => {
    const o = [];
    let s = [];
    for (let f = 0; f < l.length; f++) {
      const d = l[f], m = d[0] === "[", h = a.has(d);
      m || h ? (s.length > 0 && (s.sort(), o.push(...s), s = []), o.push(d)) : s.push(d);
    }
    return s.length > 0 && (s.sort(), o.push(...s)), o;
  };
}, y1 = (n) => ({
  cache: m1(n.cacheSize),
  parseClassName: p1(n),
  sortModifiers: g1(n),
  postfixLookupClassGroupIds: v1(n),
  ...r1(n)
}), v1 = (n) => {
  const a = /* @__PURE__ */ Object.create(null), l = n.postfixLookupClassGroups;
  if (l)
    for (let o = 0; o < l.length; o++)
      a[l[o]] = !0;
  return a;
}, b1 = /\s+/, x1 = (n, a) => {
  const {
    parseClassName: l,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: f,
    postfixLookupClassGroupIds: d
  } = a, m = [], h = n.trim().split(b1);
  let p = "";
  for (let b = h.length - 1; b >= 0; b -= 1) {
    const y = h[b], {
      isExternal: w,
      modifiers: E,
      hasImportantModifier: M,
      baseClassName: O,
      maybePostfixModifierPosition: C
    } = l(y);
    if (w) {
      p = y + (p.length > 0 ? " " + p : p);
      continue;
    }
    let D = !!C, A;
    if (D) {
      const R = O.substring(0, C);
      A = o(R);
      const U = A && d[A] ? o(O) : void 0;
      U && U !== A && (A = U, D = !1);
    } else
      A = o(O);
    if (!A) {
      if (!D) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (A = o(O), !A) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      D = !1;
    }
    const _ = E.length === 0 ? "" : E.length === 1 ? E[0] : f(E).join(":"), T = M ? _ + rd : _, j = T + A;
    if (m.indexOf(j) > -1)
      continue;
    m.push(j);
    const z = s(A, D);
    for (let R = 0; R < z.length; ++R) {
      const U = z[R];
      m.push(T + U);
    }
    p = y + (p.length > 0 ? " " + p : p);
  }
  return p;
}, w1 = (...n) => {
  let a = 0, l, o, s = "";
  for (; a < n.length; )
    (l = n[a++]) && (o = Lv(l)) && (s && (s += " "), s += o);
  return s;
}, Lv = (n) => {
  if (typeof n == "string")
    return n;
  let a, l = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (a = Lv(n[o])) && (l && (l += " "), l += a);
  return l;
}, S1 = (n, ...a) => {
  let l, o, s, f;
  const d = (h) => {
    const p = a.reduce((b, y) => y(b), n());
    return l = y1(p), o = l.cache.get, s = l.cache.set, f = m, m(h);
  }, m = (h) => {
    const p = o(h);
    if (p)
      return p;
    const b = x1(h, l);
    return s(h, b), b;
  };
  return f = d, (...h) => f(w1(...h));
}, C1 = [], Tt = (n) => {
  const a = (l) => l[n] || C1;
  return a.isThemeGetter = !0, a.themeKey = n, a;
}, qv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Pv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, E1 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, O1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, T1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, M1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, D1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ja = (n) => E1.test(n), _e = (n) => !!n && !Number.isNaN(Number(n)), Yn = (n) => !!n && Number.isInteger(Number(n)), Uf = (n) => n.endsWith("%") && _e(n.slice(0, -1)), pa = (n) => O1.test(n), Gv = () => !0, N1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  T1.test(n) && !M1.test(n)
), Td = () => !1, A1 = (n) => D1.test(n), R1 = (n) => _1.test(n), k1 = (n) => !ce(n) && !ue(n), z1 = (n) => n.startsWith("@container") && (n[10] === "/" && n[11] !== void 0 || n[11] === "s" && n[16] !== void 0 && n.startsWith("-size/", 10) || n[11] === "n" && n[18] !== void 0 && n.startsWith("-normal/", 10)), j1 = (n) => ir(n, Xv, Td), ce = (n) => qv.test(n), Ar = (n) => ir(n, Fv, N1), My = (n) => ir(n, G1, _e), Y1 = (n) => ir(n, Zv, Gv), H1 = (n) => ir(n, Qv, Td), Dy = (n) => ir(n, Wv, Td), B1 = (n) => ir(n, Vv, R1), ws = (n) => ir(n, Iv, A1), ue = (n) => Pv.test(n), Xl = (n) => qr(n, Fv), U1 = (n) => qr(n, Qv), _y = (n) => qr(n, Wv), L1 = (n) => qr(n, Xv), q1 = (n) => qr(n, Vv), Ss = (n) => qr(n, Iv, !0), P1 = (n) => qr(n, Zv, !0), ir = (n, a, l) => {
  const o = qv.exec(n);
  return o ? o[1] ? a(o[1]) : l(o[2]) : !1;
}, qr = (n, a, l = !1) => {
  const o = Pv.exec(n);
  return o ? o[1] ? a(o[1]) : l : !1;
}, Wv = (n) => n === "position" || n === "percentage", Vv = (n) => n === "image" || n === "url", Xv = (n) => n === "length" || n === "size" || n === "bg-size", Fv = (n) => n === "length", G1 = (n) => n === "number", Qv = (n) => n === "family-name", Zv = (n) => n === "number" || n === "weight", Iv = (n) => n === "shadow", W1 = () => {
  const n = Tt("color"), a = Tt("font"), l = Tt("text"), o = Tt("font-weight"), s = Tt("tracking"), f = Tt("leading"), d = Tt("breakpoint"), m = Tt("container"), h = Tt("spacing"), p = Tt("radius"), b = Tt("shadow"), y = Tt("inset-shadow"), w = Tt("text-shadow"), E = Tt("drop-shadow"), M = Tt("blur"), O = Tt("perspective"), C = Tt("aspect"), D = Tt("ease"), A = Tt("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
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
  ], j = () => [...T(), ue, ce], z = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], U = () => [ue, ce, h], F = () => [Ja, "full", "auto", ...U()], $ = () => [Yn, "none", "subgrid", ue, ce], te = () => ["auto", {
    span: ["full", Yn, ue, ce]
  }, Yn, ue, ce], ee = () => [Yn, "auto", ue, ce], ie = () => ["auto", "min", "max", "fr", ue, ce], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], me = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...U()], Q = () => [Ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...U()], K = () => [m, Ja, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...U()], ne = () => [Ja, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...U()], W = () => [n, ue, ce], N = () => [...T(), _y, Dy, {
    position: [ue, ce]
  }], V = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], J = () => ["auto", "cover", "contain", L1, j1, {
    size: [ue, ce]
  }], ae = () => [Uf, Xl, Ar], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    ue,
    ce
  ], oe = () => ["", _e, Xl, Ar], ve = () => ["solid", "dashed", "dotted", "double"], Fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => [_e, Uf, _y, Dy], he = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    M,
    ue,
    ce
  ], Qe = () => ["none", _e, ue, ce], qe = () => ["none", _e, ue, ce], Ce = () => [_e, ue, ce], Oe = () => [Ja, "full", ...U()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pa],
      breakpoint: [pa],
      color: [Gv],
      container: [pa],
      "drop-shadow": [pa],
      ease: ["in", "out", "in-out"],
      font: [k1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [pa],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [pa],
      shadow: [pa],
      spacing: ["px", _e],
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
        aspect: ["auto", "square", Ja, ce, ue, C]
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
        "@container": ["", "normal", "size", ue, ce]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [z1],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [_e, "auto", ce, ue, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
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
        object: j()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: F()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": F(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: F()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": F(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: F()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": F()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
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
        z: [Yn, "auto", ue, ce]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ja, "full", "auto", m, ...U()]
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
        flex: [_e, Ja, "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _e, ue, ce]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _e, ue, ce]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Yn, "first", "last", "none", ue, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": $()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: te()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": $()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: te()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        "auto-cols": ie()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ie()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: U()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": U()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": U()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...le(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...me(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...me()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...le()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...me(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...me(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": le()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...me(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...me()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: U()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: U()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: U()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: U()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: U()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: U()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: U()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: U()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: U()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: U()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: U()
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
        "space-x": U()
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
        "space-y": U()
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
        size: Q()
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
        block: ["auto", ...ne()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...ne()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...ne()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...Q()]
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
          ...Q()
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
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...Q()]
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
        font: [o, P1, Y1]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Uf, ce]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [U1, H1, a]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ce]
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
        tracking: [s, ue, ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_e, "none", ue, My]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...U()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue, ce]
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
        list: ["disc", "decimal", "none", ue, ce]
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
        placeholder: W()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: W()
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
        decoration: [...ve(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [_e, "from-font", "auto", ue, Ar]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: W()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [_e, "auto", ue, ce]
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
        indent: U()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Yn, ue, ce]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue, ce]
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
        content: ["none", ue, ce]
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
        bg: N()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: V()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: J()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Yn, ue, ce],
          radial: ["", ue, ce],
          conic: ["", Yn, ue, ce]
        }, q1, B1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: W()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ae()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ae()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ae()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: W()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: W()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: re()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": re()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": re()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": re()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": re()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": re()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": re()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": re()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": re()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": re()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": re()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": re()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": re()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": re()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": re()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: oe()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": oe()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": oe()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": oe()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": oe()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": oe()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": oe()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": oe()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": oe()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": oe()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": oe()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": oe()
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
        "divide-y": oe()
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
        border: [...ve(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ve(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: W()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": W()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": W()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": W()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": W()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": W()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": W()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": W()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": W()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": W()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": W()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: W()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ve(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_e, ue, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _e, Xl, Ar]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: W()
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
          Ss,
          ws
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: W()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, Ss, ws]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": W()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: oe()
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
        ring: W()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [_e, Ar]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": W()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": oe()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": W()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, Ss, ws]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": W()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_e, ue, ce]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Fe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Fe()
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
        "mask-linear": [_e]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ye()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ye()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": W()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ye()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ye()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": W()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ye()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ye()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": W()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ye()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ye()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": W()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ye()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ye()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": W()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ye()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ye()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": W()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ye()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ye()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": W()
      }],
      "mask-image-radial": [{
        "mask-radial": [ue, ce]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ye()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ye()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": W()
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
        "mask-radial-at": T()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [_e]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ye()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ye()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": W()
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
        mask: N()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: V()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: J()
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
        mask: ["none", ue, ce]
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
          ue,
          ce
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: he()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [_e, ue, ce]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_e, ue, ce]
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
          E,
          Ss,
          ws
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": W()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", _e, ue, ce]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_e, ue, ce]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _e, ue, ce]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_e, ue, ce]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _e, ue, ce]
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
          ue,
          ce
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": he()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [_e, ue, ce]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_e, ue, ce]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _e, ue, ce]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_e, ue, ce]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _e, ue, ce]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_e, ue, ce]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_e, ue, ce]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _e, ue, ce]
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
        "border-spacing": U()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": U()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": U()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ue, ce]
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
        duration: [_e, "initial", ue, ce]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, ue, ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_e, ue, ce]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", A, ue, ce]
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
        perspective: [O, ue, ce]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": j()
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
        scale: qe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": qe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": qe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": qe()
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
        skew: Ce()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Ce()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Ce()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ue, ce, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: j()
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
        translate: Oe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Oe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Oe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Oe()
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
        zoom: [Yn, ue, ce]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: W()
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
        caret: W()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue, ce]
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
        "scrollbar-thumb": W()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": W()
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
        "scroll-m": U()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": U()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": U()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": U()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": U()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": U()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": U()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": U()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": U()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": U()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": U()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": U()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": U()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": U()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": U()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": U()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": U()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": U()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": U()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": U()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": U()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": U()
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
        "will-change": ["auto", "scroll", "contents", "transform", ue, ce]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...W()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [_e, Xl, Ar, My]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...W()]
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
}, V1 = /* @__PURE__ */ S1(W1);
function we(...n) {
  return V1(Yv(n));
}
const od = e1(
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
function je({
  className: n,
  variant: a,
  size: l,
  asChild: o = !1,
  ...s
}) {
  const f = o ? QS : "button";
  return /* @__PURE__ */ v.jsx(
    f,
    {
      "data-slot": "button",
      className: we(od({ variant: a, size: l, className: n })),
      ...s
    }
  );
}
function tr({ className: n, type: a, ...l }) {
  return /* @__PURE__ */ v.jsx(
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
var $l = Tv(), X1 = Object.defineProperty, F1 = (n, a) => X1(n, "name", { value: a, configurable: !0 }), Q1 = [
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
], rt = Q1.reduce((n, a) => {
  const l = /* @__PURE__ */ Sa(`Primitive.${a}`), o = x.forwardRef((s, f) => {
    const { asChild: d, ...m } = s, h = d ? l : a;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(h, { ...m, ref: f });
  });
  return o.displayName = `Primitive.${a}`, { ...n, [a]: o };
}, {});
function Kv(n, a) {
  n && $l.flushSync(() => n.dispatchEvent(a));
}
F1(Kv, "dispatchDiscreteCustomEvent");
var Z1 = Object.defineProperty, I1 = (n, a) => Z1(n, "name", { value: a, configurable: !0 }), K1 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ I1(function(a, l) {
    return /* @__PURE__ */ v.jsx(
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
function At({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ v.jsx(
    K1,
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
var $1 = Object.defineProperty, Xo = (n, a) => $1(n, "name", { value: a, configurable: !0 }), $v = !!(typeof window < "u" && window.document && window.document.createElement);
function Ye(n, a, { checkForDefaultPrevented: l = !0 } = {}) {
  return /* @__PURE__ */ Xo(function(s) {
    if (n?.(s), l === !1 || !s || !s.defaultPrevented)
      return a?.(s);
  }, "handleEvent");
}
Xo(Ye, "composeEventHandlers");
function J1(n) {
  if (!$v)
    throw new Error("Cannot access window outside of the DOM");
  return n?.ownerDocument?.defaultView ?? window;
}
Xo(J1, "getOwnerWindow");
function ld(n) {
  if (!$v)
    throw new Error("Cannot access document outside of the DOM");
  return n?.ownerDocument ?? document;
}
Xo(ld, "getOwnerDocument");
function Jv(n, a = !1) {
  const { activeElement: l } = ld(n);
  if (!l?.nodeName)
    return null;
  if (eb(l) && l.contentDocument)
    return Jv(l.contentDocument.body, a);
  if (a) {
    const o = l.getAttribute("aria-activedescendant");
    if (o) {
      const s = ld(l).getElementById(o);
      if (s)
        return s;
    }
  }
  return l;
}
Xo(Jv, "getActiveElement");
function eb(n) {
  return n.tagName === "IFRAME";
}
Xo(eb, "isFrame");
var eC = Object.defineProperty, Sn = (n, a) => eC(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function tC(n, a) {
  const l = x.createContext(a);
  l.displayName = n + "Context";
  const o = /* @__PURE__ */ Sn((f) => {
    const { children: d, ...m } = f, h = x.useMemo(() => m, Object.values(m));
    return /* @__PURE__ */ v.jsx(l.Provider, { value: h, children: d });
  }, "Provider");
  o.displayName = n + "Provider";
  function s(f, d = {}) {
    const { optional: m = !1 } = d, h = x.useContext(l);
    if (h) return h;
    if (a !== void 0) return a;
    if (!m)
      throw new Error(`\`${f}\` must be used within \`${n}\``);
  }
  return Sn(s, "useContext"), [o, s];
}
Sn(tC, "createContext");
// @__NO_SIDE_EFFECTS__
function Oa(n, a = []) {
  let l = [];
  function o(f, d) {
    const m = x.createContext(d);
    m.displayName = f + "Context";
    const h = l.length;
    l = [...l, d];
    const p = /* @__PURE__ */ Sn((y) => {
      const { scope: w, children: E, ...M } = y, O = w?.[n]?.[h] || m, C = x.useMemo(() => M, Object.values(M));
      return /* @__PURE__ */ v.jsx(O.Provider, { value: C, children: E });
    }, "Provider");
    p.displayName = f + "Provider";
    function b(y, w, E = {}) {
      const { optional: M = !1 } = E, O = w?.[n]?.[h] || m, C = x.useContext(O);
      if (C) return C;
      if (d !== void 0) return d;
      if (!M)
        throw new Error(`\`${y}\` must be used within \`${f}\``);
    }
    return Sn(b, "useContext"), [p, b];
  }
  Sn(o, "createContext");
  const s = /* @__PURE__ */ Sn(() => {
    const f = l.map((d) => x.createContext(d));
    return /* @__PURE__ */ Sn(function(m) {
      const h = m?.[n] || f;
      return x.useMemo(
        () => ({ [`__scope${n}`]: { ...m, [n]: h } }),
        [m, h]
      );
    }, "useScope");
  }, "createScope");
  return s.scopeName = n, [o, tb(s, ...a)];
}
Sn(Oa, "createContextScope");
function tb(...n) {
  const a = n[0];
  if (n.length === 1) return a;
  const l = /* @__PURE__ */ Sn(() => {
    const o = n.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return /* @__PURE__ */ Sn(function(f) {
      const d = o.reduce((m, { useScope: h, scopeName: p }) => {
        const y = h(f)[`__scope${p}`];
        return { ...m, ...y };
      }, {});
      return x.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    }, "useComposedScopes");
  }, "createScope");
  return l.scopeName = a.scopeName, l;
}
Sn(tb, "composeContextScopes");
var bt = globalThis?.document ? x.useLayoutEffect : () => {
}, nC = Object.defineProperty, aC = (n, a) => nC(n, "name", { value: a, configurable: !0 }), Ny = Lr[" useEffectEvent ".trim().toString()], Ay = Lr[" useInsertionEffect ".trim().toString()];
function nb(n) {
  if (typeof Ny == "function")
    return Ny(n);
  const a = x.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Ay == "function" ? Ay(() => {
    a.current = n;
  }) : bt(() => {
    a.current = n;
  }), x.useMemo(() => ((...l) => a.current?.(...l)), []);
}
aC(nb, "useEffectEvent");
var rC = Object.defineProperty, Jl = (n, a) => rC(n, "name", { value: a, configurable: !0 }), oC = Lr[" useInsertionEffect ".trim().toString()] || bt;
function jr({
  prop: n,
  defaultProp: a,
  onChange: l = /* @__PURE__ */ Jl(() => {
  }, "onChange"),
  caller: o
}) {
  const [s, f, d] = ab({
    defaultProp: a,
    onChange: l
  }), m = n !== void 0, h = m ? n : s, p = x.useCallback(
    (b) => {
      if (m) {
        const y = rb(b) ? b(n) : b;
        y !== n && d.current?.(y);
      } else
        f(b);
    },
    [m, n, f, d]
  );
  return [h, p];
}
Jl(jr, "useControllableState");
function ab({
  defaultProp: n,
  onChange: a
}) {
  const [l, o] = x.useState(n), s = x.useRef(l), f = x.useRef(a);
  return oC(() => {
    f.current = a;
  }, [a]), x.useEffect(() => {
    s.current !== l && (f.current?.(l), s.current = l);
  }, [l, s]), [l, o, f];
}
Jl(ab, "useUncontrolledState");
function rb(n) {
  return typeof n == "function";
}
Jl(rb, "isFunction");
var Ry = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function lC(n, a, l, o) {
  const { prop: s, defaultProp: f, onChange: d, caller: m } = a, h = s !== void 0, p = nb(d), b = [{ ...l, state: f }];
  o && b.push(o);
  const [y, w] = x.useReducer(
    (C, D) => {
      if (D.type === Ry)
        return { ...C, state: D.state };
      const A = n(C, D);
      return h && !Object.is(A.state, C.state) && p(A.state), A;
    },
    ...b
  ), E = y.state, M = x.useRef(E);
  x.useEffect(() => {
    M.current !== E && (M.current = E, h || p(E));
  }, [E, M, h]);
  const O = x.useMemo(() => s !== void 0 ? { ...y, state: s } : y, [y, s]);
  return x.useEffect(() => {
    h && !Object.is(s, y.state) && w({ type: Ry, state: s });
  }, [s, y.state, h]), [O, w];
}
Jl(lC, "useControllableStateReducer");
var iC = Object.defineProperty, sC = (n, a) => iC(n, "name", { value: a, configurable: !0 });
function Md(n) {
  const [a, l] = x.useState(void 0);
  return bt(() => {
    if (n) {
      l({ width: n.offsetWidth, height: n.offsetHeight });
      let o = 0;
      const s = new ResizeObserver((f) => {
        if (!Array.isArray(f) || !f.length)
          return;
        const d = f[0];
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
sC(Md, "useSize");
var cC = Object.defineProperty, rr = (n, a) => cC(n, "name", { value: a, configurable: !0 }), Dd = "Switch", [uC, xA] = /* @__PURE__ */ Oa(Dd), [fC, _d] = uC(Dd);
function ob(n) {
  const {
    __scopeSwitch: a,
    checked: l,
    children: o,
    defaultChecked: s,
    disabled: f,
    form: d,
    name: m,
    onCheckedChange: h,
    required: p,
    value: b = "on",
    // @ts-expect-error
    internal_do_not_use_render: y
  } = n, [w, E] = jr({
    prop: l,
    defaultProp: s ?? !1,
    onChange: h,
    caller: Dd
  }), [M, O] = x.useState(null), [C, D] = x.useState(null), [A, _] = x.useState(null), T = M ? !!d || !!M.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), j = {
    checked: w,
    setChecked: E,
    disabled: f,
    control: M,
    setControl: O,
    name: m,
    form: d,
    value: b,
    userClick: A,
    onUserClick: _,
    required: p,
    defaultChecked: s,
    isFormControl: T,
    bubbleInput: C,
    setBubbleInput: D
  };
  return /* @__PURE__ */ v.jsx(fC, { scope: a, ...j, children: lb(y) ? y(j) : o });
}
rr(ob, "SwitchProvider");
var dC = "SwitchTrigger", mC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ rr(function({ __scopeSwitch: a, onClick: l, ...o }, s) {
    const {
      control: f,
      form: d,
      value: m,
      disabled: h,
      checked: p,
      required: b,
      setControl: y,
      setChecked: w,
      onUserClick: E,
      isFormControl: M,
      bubbleInput: O
    } = _d(dC, a), C = at(s, y), D = x.useRef(p);
    return x.useEffect(() => {
      const A = d ? f?.ownerDocument.getElementById(d) : f?.form;
      if (A instanceof HTMLFormElement) {
        const _ = /* @__PURE__ */ rr(() => w(D.current), "reset");
        return A.addEventListener("reset", _), () => A.removeEventListener("reset", _);
      }
    }, [f, d, w]), /* @__PURE__ */ v.jsx(
      rt.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": p,
        "aria-required": b,
        "data-state": Nd(p),
        "data-disabled": h ? "" : void 0,
        disabled: h,
        value: m,
        ...o,
        ref: C,
        onClick: Ye(l, (A) => {
          const _ = A.isPropagationStopped();
          E({ requestedChecked: !p, hasConsumerStoppedPropagation: _ }), w((T) => !T), O && M && (_ || A.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), hC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rr(function(a, l) {
    const {
      __scopeSwitch: o,
      name: s,
      checked: f,
      defaultChecked: d,
      required: m,
      disabled: h,
      value: p,
      onCheckedChange: b,
      form: y,
      ...w
    } = a;
    return /* @__PURE__ */ v.jsx(
      ob,
      {
        __scopeSwitch: o,
        checked: f,
        defaultChecked: d,
        disabled: h,
        required: m,
        onCheckedChange: b,
        name: s,
        form: y,
        value: p,
        internal_do_not_use_render: ({ isFormControl: E }) => /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsx(
            mC,
            {
              ...w,
              ref: l,
              __scopeSwitch: o
            }
          ),
          E && /* @__PURE__ */ v.jsx(
            vC,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), pC = "SwitchThumb", gC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ rr(function(a, l) {
    const { __scopeSwitch: o, ...s } = a, f = _d(pC, o);
    return /* @__PURE__ */ v.jsx(
      rt.span,
      {
        "data-state": Nd(f.checked),
        "data-disabled": f.disabled ? "" : void 0,
        ...s,
        ref: l
      }
    );
  }, "SwitchThumb")
), yC = "SwitchBubbleInput", vC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rr(function({ __scopeSwitch: a, onClick: l, ...o }, s) {
    const {
      control: f,
      userClick: d,
      checked: m,
      defaultChecked: h,
      required: p,
      disabled: b,
      name: y,
      value: w,
      form: E,
      bubbleInput: M,
      setBubbleInput: O
    } = _d(yC, a), C = at(s, O), D = Md(f), A = x.useRef(!1), _ = x.useRef(m), T = x.useRef(d), j = x.useRef(null);
    x.useEffect(() => {
      const R = M;
      if (!R) return;
      const U = window.HTMLInputElement.prototype, $ = Object.getOwnPropertyDescriptor(
        U,
        "checked"
      ).set;
      if (!$)
        return;
      const te = _.current !== m;
      _.current = m;
      const ee = d !== null && d !== T.current;
      if (T.current = d, ee)
        j.current = te ? null : d, te && $.call(R, m), R.dispatchEvent(
          new Event("click", { bubbles: !d.hasConsumerStoppedPropagation })
        );
      else if (te) {
        const ie = j.current;
        j.current = null;
        const le = ie?.requestedChecked === m;
        A.current = !0, $.call(R, m), R.dispatchEvent(
          new Event("click", {
            bubbles: !(le && ie.hasConsumerStoppedPropagation)
          })
        ), A.current = !1;
      }
    }, [M, m, d]);
    const z = x.useRef(m);
    return /* @__PURE__ */ v.jsx(
      rt.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: h ?? z.current,
        required: p,
        disabled: b,
        name: y,
        value: w,
        form: E,
        ...o,
        tabIndex: -1,
        ref: C,
        onClick: Ye(l, (R) => {
          A.current && R.stopPropagation();
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
function lb(n) {
  return typeof n == "function";
}
rr(lb, "isFunction");
function Nd(n) {
  return n ? "checked" : "unchecked";
}
rr(Nd, "getState");
function ib({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ v.jsx(
    hC,
    {
      "data-slot": "switch",
      className: we(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ...a,
      children: /* @__PURE__ */ v.jsx(
        gC,
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
var bC = Object.defineProperty, Mt = (n, a) => bC(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Ad(n) {
  const a = n + "CollectionProvider", [l, o] = /* @__PURE__ */ Oa(a), [s, f] = l(
    a,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = /* @__PURE__ */ Mt((O) => {
    const { scope: C, children: D } = O, A = x.useRef(null), _ = x.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(s, { scope: C, itemMap: _, collectionRef: A, children: D });
  }, "CollectionProvider");
  d.displayName = a;
  const m = n + "CollectionSlot", h = /* @__PURE__ */ Sa(m), p = x.forwardRef(
    (O, C) => {
      const { scope: D, children: A } = O, _ = f(m, D), T = at(C, _.collectionRef);
      return /* @__PURE__ */ v.jsx(h, { ref: T, children: A });
    }
  );
  p.displayName = m;
  const b = n + "CollectionItemSlot", y = "data-radix-collection-item", w = /* @__PURE__ */ Sa(b), E = x.forwardRef(
    (O, C) => {
      const { scope: D, children: A, ..._ } = O, T = x.useRef(null), j = at(C, T), z = f(b, D);
      return x.useEffect(() => (z.itemMap.set(T, { ref: T, ..._ }), () => {
        z.itemMap.delete(T);
      })), /* @__PURE__ */ v.jsx(w, { [y]: "", ref: j, children: A });
    }
  );
  E.displayName = b;
  function M(O) {
    const C = f(n + "CollectionConsumer", O);
    return x.useCallback(() => {
      const A = C.collectionRef.current;
      if (!A) return [];
      const _ = Array.from(A.querySelectorAll(`[${y}]`));
      return Array.from(C.itemMap.values()).sort(
        (z, R) => _.indexOf(z.ref.current) - _.indexOf(R.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return Mt(M, "useCollection"), [
    { Provider: d, Slot: p, ItemSlot: E },
    M,
    o
  ];
}
Mt(Ad, "createCollection");
var ky = /* @__PURE__ */ new WeakMap(), gt, cn, Cs = (cn = class extends Map {
  constructor(l) {
    super(l);
    fy(this, gt);
    Rf(this, gt, [...super.keys()]), ky.set(this, !0);
  }
  set(l, o) {
    return ky.get(this) && !this.has(l) && Bt(this, gt).push(l), super.set(l, o), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(l, o, s) {
    const f = this.has(o), d = f ? this.size : this.size + 1, m = Rd(l), h = m >= 0 ? Math.min(m, d - 1) : Math.max(d + m, 0);
    if (f ? Bt(this, gt).indexOf(o) === h : h === this.size)
      return this.set(o, s), this;
    const p = Bt(this, gt).filter((y) => y !== o);
    p.splice(h, 0, o);
    const b = p.map((y) => [
      y,
      y === o ? s : this.get(y)
    ]);
    this.clear();
    for (const [y, w] of b)
      this.set(y, w);
    return this;
  }
  with(l, o, s) {
    const f = new cn(this);
    return f.insert(l, o, s), f;
  }
  before(l) {
    const o = Bt(this, gt).indexOf(l) - 1;
    if (!(o < 0))
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(l, o, s) {
    const f = Bt(this, gt).indexOf(l);
    if (f === -1)
      return this;
    const d = Bt(this, gt).indexOf(o), m = d !== -1 && d < f ? f - 1 : f;
    return this.insert(m, o, s);
  }
  after(l) {
    let o = Bt(this, gt).indexOf(l);
    if (o = o === -1 || o === this.size - 1 ? -1 : o + 1, o !== -1)
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(l, o, s) {
    const f = Bt(this, gt).indexOf(l);
    if (f === -1)
      return this;
    const d = Bt(this, gt).indexOf(o), m = d !== -1 && d <= f ? f : f + 1;
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
    return o && Bt(this, gt).splice(Bt(this, gt).indexOf(l), 1), o;
  }
  deleteAt(l) {
    const o = this.keyAt(l);
    return o !== void 0 ? this.delete(o) : !1;
  }
  at(l) {
    const o = As(Bt(this, gt), l);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(l) {
    const o = As(Bt(this, gt), l);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(l) {
    return Bt(this, gt).indexOf(l);
  }
  keyAt(l) {
    return As(Bt(this, gt), l);
  }
  from(l, o) {
    const s = this.indexOf(l);
    if (s === -1)
      return;
    let f = s + o;
    return f < 0 && (f = 0), f >= this.size && (f = this.size - 1), this.at(f);
  }
  keyFrom(l, o) {
    const s = this.indexOf(l);
    if (s === -1)
      return;
    let f = s + o;
    return f < 0 && (f = 0), f >= this.size && (f = this.size - 1), this.keyAt(f);
  }
  find(l, o) {
    let s = 0;
    for (const f of this) {
      if (Reflect.apply(l, o, [f, s, this]))
        return f;
      s++;
    }
  }
  findIndex(l, o) {
    let s = 0;
    for (const f of this) {
      if (Reflect.apply(l, o, [f, s, this]))
        return s;
      s++;
    }
    return -1;
  }
  filter(l, o) {
    const s = [];
    let f = 0;
    for (const d of this)
      Reflect.apply(l, o, [d, f, this]) && s.push(d), f++;
    return new cn(s);
  }
  map(l, o) {
    const s = [];
    let f = 0;
    for (const d of this)
      s.push([d[0], Reflect.apply(l, o, [d, f, this])]), f++;
    return new cn(s);
  }
  reduce(...l) {
    const [o, s] = l, f = l.length > 1;
    if (!f && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let d = 0, m = s;
    for (const h of this)
      d === 0 && !f ? m = h : m = Reflect.apply(o, this, [m, h, d, this]), d++;
    return m;
  }
  reduceRight(...l) {
    const [o, s] = l, f = l.length > 1;
    if (!f && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let d = s;
    for (let m = this.size - 1; m >= 0; m--) {
      const h = this.entryAt(m);
      m === this.size - 1 && !f ? d = h : d = Reflect.apply(o, this, [d, h, m, this]);
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
    for (const [s, f] of o)
      this.set(s, f);
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
      const s = this.keyAt(o), f = this.get(s);
      l.set(s, f);
    }
    return l;
  }
  toSpliced(...l) {
    const o = [...this.entries()];
    return o.splice(...l), new cn(o);
  }
  slice(l, o) {
    const s = new cn();
    for (const f of Bt(this, gt).slice(l, o))
      s.set(f, this.get(f));
    return s;
  }
  every(l, o) {
    let s = 0;
    for (const f of this) {
      if (!Reflect.apply(l, o, [f, s, this]))
        return !1;
      s++;
    }
    return !0;
  }
  some(l, o) {
    let s = 0;
    for (const f of this) {
      if (Reflect.apply(l, o, [f, s, this]))
        return !0;
      s++;
    }
    return !1;
  }
}, gt = new WeakMap(), Mt(cn, "OrderedDict"), cn);
function As(n, a) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(n, a);
  const l = sb(n, a);
  return l === -1 ? void 0 : n[l];
}
Mt(As, "at");
function sb(n, a) {
  const l = n.length, o = Rd(a), s = o >= 0 ? o : l + o;
  return s < 0 || s >= l ? -1 : s;
}
Mt(sb, "toSafeIndex");
function Rd(n) {
  return n !== n || n === 0 ? 0 : Math.trunc(n);
}
Mt(Rd, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function xC(n) {
  const a = n + "CollectionProvider", [l, o] = /* @__PURE__ */ Oa(a), [s, f] = l(a);
  s.displayName = n + "CollectionStableContextProvider";
  const [d, m] = l(a);
  d.displayName = n + "CollectionStatefulContextProvider";
  const h = /* @__PURE__ */ Mt(({ state: z, ...R }) => z ? /* @__PURE__ */ v.jsx(b, { ...R, state: z }) : /* @__PURE__ */ v.jsx(p, { ...R }), "CollectionProvider");
  h.displayName = a;
  const p = /* @__PURE__ */ Mt((z) => {
    const R = A();
    return /* @__PURE__ */ v.jsx(b, { ...z, state: R });
  }, "CollectionInit");
  p.displayName = n + "CollectionInit";
  const b = /* @__PURE__ */ Mt((z) => {
    const { scope: R, children: U, state: F } = z, $ = x.useRef(null), [te, ee] = x.useState(
      null
    ), ie = at($, ee), [le, me] = F, H = x.useRef(
      new Cs()
    ), Q = x.useCallback(() => {
      const K = H.current;
      return fb(K) || K.sort(Rs), K;
    }, []);
    return x.useEffect(() => {
      if (!te)
        return;
      const K = db(() => {
        me((ne) => {
          const W = ne.toSorted(Rs);
          return W.some(([V], J) => ne.keyAt(J) !== V) ? W : ne;
        });
      });
      return K.observe(te, {
        childList: !0,
        subtree: !0
      }), () => {
        K.disconnect();
      };
    }, [te, me]), /* @__PURE__ */ v.jsx(
      s,
      {
        scope: R,
        collectionElementRef: ie,
        collectionElementRefObject: $,
        getCollection: Q,
        setCollection: me,
        registryRef: H,
        children: /* @__PURE__ */ v.jsx(
          d,
          {
            scope: R,
            collectionElement: te,
            collection: le,
            children: U
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  b.displayName = n + "CollectionProviderImpl";
  const y = n + "CollectionSlot", w = /* @__PURE__ */ Sa(y), E = x.forwardRef(
    (z, R) => {
      const { scope: U, children: F } = z, $ = f(y, U), te = at(R, $.collectionElementRef);
      return /* @__PURE__ */ v.jsx(w, { ref: te, children: F });
    }
  );
  E.displayName = y;
  const M = n + "CollectionItemSlot", O = "data-radix-collection-item", C = /* @__PURE__ */ Sa(M), D = x.forwardRef(
    (z, R) => {
      const { scope: U, children: F, ...$ } = z, te = x.useRef(null), ee = f(M, U), { setCollection: ie, registryRef: le } = ee, me = x.useRef($);
      cb(me.current, $) || (me.current = $);
      const H = me.current, Q = x.useCallback(
        (W) => {
          const N = le.current;
          W ? N.set(W, {
            ...me.current,
            element: W
          }) : te.current && N.delete(te.current);
        },
        [le]
      ), K = at(R, Q, te);
      bt(() => {
        const W = te.current, N = le.current;
        W && N.has(W) && N.set(W, { ...H, element: W });
      }, [H, le]);
      const ne = x.useRef(null);
      return x.useEffect(() => {
        const W = te.current, N = ne.current;
        (N?.element ?? null) === W && (!W || N?.itemData === H) || (ne.current = W ? { element: W, itemData: H } : null, ie((V) => {
          const J = new Cs(V);
          return N && N.element !== W && J.delete(N.element), W && J.set(W, { ...H, element: W }), J.sort(Rs);
        }));
      }), x.useEffect(() => () => {
        const W = ne.current;
        ne.current = null, W && ie((N) => {
          if (!N.has(W.element))
            return N;
          const V = new Cs(N);
          return V.delete(W.element), V;
        });
      }, [ie]), /* @__PURE__ */ v.jsx(C, { [O]: "", ref: K, children: F });
    }
  );
  D.displayName = M;
  function A() {
    return x.useState(new Cs());
  }
  Mt(A, "useInitCollection");
  function _(z) {
    const { collection: R } = m(n + "CollectionConsumer", z);
    return R;
  }
  Mt(_, "useCollection");
  function T(z) {
    const { getCollection: R } = f(n + "CollectionConsumer", z);
    return R;
  }
  return Mt(T, "useGetCollection"), [
    { Provider: h, Slot: E, ItemSlot: D },
    {
      createCollectionScope: o,
      useCollection: _,
      useGetCollection: T,
      useInitCollection: A
    }
  ];
}
Mt(xC, "createCollection");
function cb(n, a) {
  if (n === a) return !0;
  if (typeof n != "object" || typeof a != "object" || n == null || a == null) return !1;
  const l = Object.keys(n), o = Object.keys(a);
  if (l.length !== o.length) return !1;
  for (const s of l)
    if (!Object.prototype.hasOwnProperty.call(a, s) || n[s] !== a[s]) return !1;
  return !0;
}
Mt(cb, "shallowEqual");
function ub(n, a) {
  return !!(a.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING);
}
Mt(ub, "isElementPreceding");
function fb(n) {
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
Mt(fb, "isInDocumentOrder");
function Rs(n, a) {
  return !n[1].element || !a[1].element ? 0 : ub(n[1].element, a[1].element) ? -1 : 1;
}
Mt(Rs, "sortByDocumentPosition");
function db(n) {
  return new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList") {
        n();
        return;
      }
  });
}
Mt(db, "getChildListObserver");
var wC = Object.defineProperty, SC = (n, a) => wC(n, "name", { value: a, configurable: !0 }), CC = Lr[" useId ".trim().toString()] || (() => {
}), EC = 0;
function nr(n) {
  const [a, l] = x.useState(CC());
  return bt(() => {
    n || l((o) => o ?? String(EC++));
  }, [n]), n || (a ? `radix-${a}` : "");
}
SC(nr, "useId");
var OC = Object.defineProperty, TC = (n, a) => OC(n, "name", { value: a, configurable: !0 }), zy = Lr[" useInsertionEffect ".trim().toString()];
function _n(n) {
  const a = x.useRef(n);
  return typeof zy == "function" ? zy(() => {
    a.current = n;
  }) : bt(() => {
    a.current = n;
  }), x.useMemo(() => ((...l) => a.current?.(...l)), []);
}
TC(_n, "useCallbackRef");
var MC = Object.defineProperty, DC = (n, a) => MC(n, "name", { value: a, configurable: !0 }), _C = {
  LTR: "ltr"
}, NC = x.createContext(void 0);
function Fs(n) {
  const a = x.useContext(NC);
  return n || a || _C.LTR;
}
DC(Fs, "useDirection");
var AC = Object.defineProperty, kd = (n, a) => AC(n, "name", { value: a, configurable: !0 }), Lf = !1;
function mb() {
  const [n, a] = x.useState(Lf);
  return x.useEffect(() => {
    Lf || (Lf = !0, a(!0));
  }, []), n;
}
kd(mb, "useIsHydrated");
var hb = Lr[" useSyncExternalStore ".trim().toString()];
function pb() {
  return () => {
  };
}
kd(pb, "subscribe");
function gb() {
  return hb(
    pb,
    () => !0,
    () => !1
  );
}
kd(gb, "useIsHydratedModern");
var RC = typeof hb == "function" ? gb : mb, kC = Object.defineProperty, Pr = (n, a) => kC(n, "name", { value: a, configurable: !0 }), qf = "rovingFocusGroup.onEntryFocus", zC = { bubbles: !1, cancelable: !0 }, Qs = "RovingFocusGroup", [id, yb, jC] = /* @__PURE__ */ Ad(Qs), [YC, vb] = /* @__PURE__ */ Oa(
  Qs,
  [jC]
), jy = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, HC = {
  RTL: "rtl"
}, [BC, UC] = YC(Qs), LC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pr(function(a, l) {
    return /* @__PURE__ */ v.jsx(id.Provider, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(id.Slot, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(qC, { ...a, ref: l }) }) });
  }, "RovingFocusGroup")
), qC = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pr(function(a, l) {
  const {
    __scopeRovingFocusGroup: o,
    orientation: s,
    loop: f = !1,
    dir: d,
    currentTabStopId: m,
    defaultCurrentTabStopId: h,
    onCurrentTabStopIdChange: p,
    onEntryFocus: b,
    preventScrollOnEntryFocus: y = !1,
    ...w
  } = a, E = x.useRef(null), M = at(l, E), O = Fs(d), [C, D] = jr({
    prop: m,
    defaultProp: h ?? null,
    onChange: p,
    caller: Qs
  }), [A, _] = x.useState(!1), T = _n(b), j = yb(o), z = x.useRef(!1), [R, U] = x.useState(0);
  return x.useEffect(() => {
    const F = E.current;
    if (F)
      return F.addEventListener(qf, T), () => F.removeEventListener(qf, T);
  }, [T]), /* @__PURE__ */ v.jsx(
    BC,
    {
      scope: o,
      orientation: s,
      dir: O,
      loop: f,
      currentTabStopId: C,
      onItemFocus: x.useCallback(
        (F) => D(F),
        [D]
      ),
      onItemShiftTab: x.useCallback(() => _(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => U((F) => F + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => U((F) => F - 1),
        []
      ),
      children: /* @__PURE__ */ v.jsx(
        rt.div,
        {
          tabIndex: A || R === 0 ? -1 : 0,
          "data-orientation": s,
          ...w,
          ref: M,
          style: { outline: "none", ...a.style },
          onMouseDown: Ye(a.onMouseDown, () => {
            z.current = !0;
          }),
          onFocus: Ye(a.onFocus, (F) => {
            const $ = !z.current;
            if (F.target === F.currentTarget && $ && !A) {
              const te = new CustomEvent(qf, zC);
              if (F.currentTarget.dispatchEvent(te), !te.defaultPrevented) {
                const ee = j().filter((Q) => Q.focusable), ie = ee.find((Q) => Q.active), le = ee.find((Q) => Q.id === C), H = [ie, le, ...ee].filter(
                  Boolean
                ).map((Q) => Q.ref.current);
                zd(H, y);
              }
            }
            z.current = !1;
          }),
          onBlur: Ye(a.onBlur, () => _(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), PC = "RovingFocusGroupItem", GC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pr(function(a, l) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: s = !0,
      active: f = !1,
      tabStopId: d,
      children: m,
      ...h
    } = a, p = nr(), b = d || p, y = UC(PC, o), w = y.currentTabStopId === b, E = yb(o), { onFocusableItemAdd: M, onFocusableItemRemove: O, currentTabStopId: C } = y, D = RC();
    return bt(() => {
      if (!(!D || !s))
        return M(), () => O();
    }, [D, s, M, O]), x.useEffect(() => {
      if (!(D || !s))
        return M(), () => O();
    }, [D, s, M, O]), /* @__PURE__ */ v.jsx(
      id.ItemSlot,
      {
        scope: o,
        id: b,
        focusable: s,
        active: f,
        children: /* @__PURE__ */ v.jsx(
          rt.span,
          {
            tabIndex: w ? 0 : -1,
            "data-orientation": y.orientation,
            ...h,
            ref: l,
            onMouseDown: Ye(a.onMouseDown, (A) => {
              s ? y.onItemFocus(b) : A.preventDefault();
            }),
            onFocus: Ye(a.onFocus, () => y.onItemFocus(b)),
            onKeyDown: Ye(a.onKeyDown, (A) => {
              if (A.key === "Tab" && A.shiftKey) {
                y.onItemShiftTab();
                return;
              }
              if (A.target !== A.currentTarget) return;
              const _ = xb(A, y.orientation, y.dir);
              if (_ !== void 0) {
                if (A.metaKey || A.ctrlKey || A.altKey || A.shiftKey) return;
                A.preventDefault();
                let j = E().filter((z) => z.focusable).map((z) => z.ref.current);
                if (_ === "last") j.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && j.reverse();
                  const z = j.indexOf(A.currentTarget);
                  j = y.loop ? wb(j, z + 1) : j.slice(z + 1);
                }
                setTimeout(() => zd(j));
              }
            }),
            children: typeof m == "function" ? m({ isCurrentTabStop: w, hasTabStop: C != null }) : m
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), WC = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function bb(n, a) {
  return a !== HC.RTL ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
Pr(bb, "getDirectionAwareKey");
function xb(n, a, l) {
  const o = bb(n.key, l);
  if (!(a === jy.Vertical && ["ArrowLeft", "ArrowRight"].includes(o)) && !(a === jy.Horizontal && ["ArrowUp", "ArrowDown"].includes(o)))
    return WC[o];
}
Pr(xb, "getFocusIntent");
function zd(n, a = !1) {
  const l = document.activeElement;
  for (const o of n)
    if (o === l || (o.focus({ preventScroll: a }), document.activeElement !== l)) return;
}
Pr(zd, "focusFirst");
function wb(n, a) {
  return n.map((l, o) => n[(a + o) % n.length]);
}
Pr(wb, "wrapArray");
var VC = Object.defineProperty, Ca = (n, a) => VC(n, "name", { value: a, configurable: !0 });
function Sb(n, a) {
  return x.useReducer((l, o) => a[l][o] ?? l, n);
}
Ca(Sb, "useStateMachine");
var Zs = /* @__PURE__ */ Ca((n) => {
  const { present: a, children: l } = n, o = Cb(a), s = typeof l == "function" ? l({ present: o.isPresent }) : x.Children.only(l), f = Eb(o.ref, Ob(s));
  return typeof l == "function" || o.isPresent ? x.cloneElement(s, { ref: f }) : null;
}, "Presence");
function Cb(n) {
  const [a, l] = x.useState(), o = x.useRef(null), s = x.useRef(n), f = x.useRef("none"), d = x.useRef(void 0), m = n ? "mounted" : "unmounted", [h, p] = Sb(m, {
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
    h === "mounted" ? (f.current = d.current ?? Lo(o.current), d.current = void 0) : f.current = "none";
  }, [h]), bt(() => {
    const b = o.current, y = s.current;
    if (y !== n) {
      const E = f.current, M = Lo(b);
      n ? (d.current = M, p("MOUNT")) : M === "none" || b?.display === "none" ? p("UNMOUNT") : p(y && E !== M ? "ANIMATION_OUT" : "UNMOUNT"), s.current = n;
    }
  }, [n, p]), bt(() => {
    if (a) {
      let b;
      const y = a.ownerDocument.defaultView ?? window, w = /* @__PURE__ */ Ca((M) => {
        const C = Lo(o.current).includes(CSS.escape(M.animationName));
        if (M.target === a && C && (p("ANIMATION_END"), !s.current)) {
          const D = a.style.animationFillMode;
          a.style.animationFillMode = "forwards", b = y.setTimeout(() => {
            a.style.animationFillMode === "forwards" && (a.style.animationFillMode = D);
          });
        }
      }, "handleAnimationEnd"), E = /* @__PURE__ */ Ca((M) => {
        M.target === a && (f.current = Lo(o.current));
      }, "handleAnimationStart");
      return a.addEventListener("animationstart", E), a.addEventListener("animationcancel", w), a.addEventListener("animationend", w), () => {
        y.clearTimeout(b), a.removeEventListener("animationstart", E), a.removeEventListener("animationcancel", w), a.removeEventListener("animationend", w);
      };
    } else
      p("ANIMATION_END");
  }, [a, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: x.useCallback((b) => {
      if (b) {
        const y = getComputedStyle(b);
        o.current = y, d.current = Lo(y);
      } else
        o.current = null;
      l(b);
    }, [])
  };
}
Ca(Cb, "usePresence");
function sd(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
Ca(sd, "setRef");
function Eb(...n) {
  const a = x.useRef(n);
  return a.current = n, x.useCallback((l) => {
    const o = a.current;
    let s = !1;
    const f = o.map((d) => {
      const m = sd(d, l);
      return !s && typeof m == "function" && (s = !0), m;
    });
    if (s)
      return () => {
        for (let d = 0; d < f.length; d++) {
          const m = f[d];
          typeof m == "function" ? m() : sd(o[d], null);
        }
      };
  }, []);
}
Ca(Eb, "useStableComposedRefs");
function Lo(n) {
  return n?.animationName || "none";
}
Ca(Lo, "getAnimationName");
function Ob(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning;
  return l ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
Ca(Ob, "getElementRef");
var XC = Object.defineProperty, Fo = (n, a) => XC(n, "name", { value: a, configurable: !0 }), Tb = {
  Automatic: "automatic",
  Manual: "manual"
}, jd = "Tabs", [FC, wA] = /* @__PURE__ */ Oa(jd, [
  vb
]), Mb = vb(), [QC, Yd] = FC(jd), ZC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Fo(function(a, l) {
    const {
      __scopeTabs: o,
      value: s,
      onValueChange: f,
      defaultValue: d,
      orientation: m = "horizontal",
      dir: h,
      activationMode: p = Tb.Automatic,
      ...b
    } = a, y = Fs(h), [w, E] = jr({
      prop: s,
      onChange: f,
      defaultProp: d ?? "",
      caller: jd
    });
    return /* @__PURE__ */ v.jsx(
      QC,
      {
        scope: o,
        baseId: nr(),
        value: w,
        onValueChange: E,
        orientation: m,
        dir: y,
        activationMode: p,
        children: /* @__PURE__ */ v.jsx(
          rt.div,
          {
            dir: y,
            "data-orientation": m,
            ...b,
            ref: l
          }
        )
      }
    );
  }, "Tabs")
), IC = "TabsList", KC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Fo(function(a, l) {
    const { __scopeTabs: o, loop: s = !0, ...f } = a, d = Yd(IC, o), m = Mb(o);
    return /* @__PURE__ */ v.jsx(
      LC,
      {
        asChild: !0,
        ...m,
        orientation: d.orientation,
        dir: d.dir,
        loop: s,
        children: /* @__PURE__ */ v.jsx(
          rt.div,
          {
            role: "tablist",
            "aria-orientation": d.orientation,
            ...f,
            ref: l
          }
        )
      }
    );
  }, "TabsList")
), $C = "TabsTrigger", JC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Fo(function(a, l) {
    const { __scopeTabs: o, value: s, disabled: f = !1, ...d } = a, m = Yd($C, o), h = Mb(o), p = Hd(m.baseId, s), b = Bd(m.baseId, s), y = s === m.value;
    return /* @__PURE__ */ v.jsx(
      GC,
      {
        asChild: !0,
        ...h,
        focusable: !f,
        active: y,
        children: /* @__PURE__ */ v.jsx(
          rt.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": y,
            "aria-controls": b,
            "data-state": y ? "active" : "inactive",
            "data-disabled": f ? "" : void 0,
            disabled: f,
            id: p,
            ...d,
            ref: l,
            onMouseDown: Ye(a.onMouseDown, (w) => {
              !f && w.button === 0 && w.ctrlKey === !1 ? (w.currentTarget.focus(), m.onValueChange(s)) : w.preventDefault();
            }),
            onKeyDown: Ye(a.onKeyDown, (w) => {
              f || w.target !== w.currentTarget || [" ", "Enter"].includes(w.key) && m.onValueChange(s);
            }),
            onFocus: Ye(a.onFocus, () => {
              const w = m.activationMode !== Tb.Manual;
              !y && !f && w && m.onValueChange(s);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), eE = "TabsContent", tE = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Fo(function(a, l) {
    const { __scopeTabs: o, value: s, forceMount: f, children: d, ...m } = a, h = Yd(eE, o), p = Hd(h.baseId, s), b = Bd(h.baseId, s), y = s === h.value, w = x.useRef(y);
    return x.useEffect(() => {
      const E = requestAnimationFrame(() => w.current = !1);
      return () => cancelAnimationFrame(E);
    }, []), /* @__PURE__ */ v.jsx(Zs, { present: f || y, children: ({ present: E }) => /* @__PURE__ */ v.jsx(
      rt.div,
      {
        "data-state": y ? "active" : "inactive",
        "data-orientation": h.orientation,
        role: "tabpanel",
        "aria-labelledby": p,
        hidden: !E,
        id: b,
        tabIndex: 0,
        ...m,
        ref: l,
        style: {
          ...a.style,
          animationDuration: w.current ? "0s" : void 0
        },
        children: E && d
      }
    ) });
  }, "TabsContent")
);
function Hd(n, a) {
  return `${n}-trigger-${a}`;
}
Fo(Hd, "makeTriggerId");
function Bd(n, a) {
  return `${n}-content-${a}`;
}
Fo(Bd, "makeContentId");
function nE({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ v.jsx(
    ZC,
    {
      "data-slot": "tabs",
      className: we("flex flex-col gap-2", n),
      ...a
    }
  );
}
function aE({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ v.jsx(
    KC,
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
function Yy({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ v.jsx(
    JC,
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
function rE({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ v.jsx(
    tE,
    {
      "data-slot": "tabs-content",
      className: we("flex-1 outline-none", n),
      ...a
    }
  );
}
const Db = 6048e5, oE = 864e5, lE = 6e4, iE = 36e5, sE = 1e3, Hy = /* @__PURE__ */ Symbol.for("constructDateFrom");
function $e(n, a) {
  return typeof n == "function" ? n(a) : n && typeof n == "object" && Hy in n ? n[Hy](a) : n instanceof Date ? new n.constructor(a) : new Date(a);
}
function Ue(n, a) {
  return $e(a || n, n);
}
function Is(n, a, l) {
  const o = Ue(n, l?.in);
  return isNaN(a) ? $e(l?.in || n, NaN) : (a && o.setDate(o.getDate() + a), o);
}
function Bs(n, a, l) {
  const o = Ue(n, l?.in);
  if (isNaN(a)) return $e(n, NaN);
  if (!a)
    return o;
  const s = o.getDate(), f = $e(n, o.getTime());
  f.setMonth(o.getMonth() + a + 1, 0);
  const d = f.getDate();
  return s >= d ? f : (o.setFullYear(
    f.getFullYear(),
    f.getMonth(),
    s
  ), o);
}
let cE = {};
function Gr() {
  return cE;
}
function Nn(n, a) {
  const l = Gr(), o = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, s = Ue(n, a?.in), f = s.getDay(), d = (f < o ? 7 : 0) + f - o;
  return s.setDate(s.getDate() - d), s.setHours(0, 0, 0, 0), s;
}
function Yr(n, a) {
  return Nn(n, { ...a, weekStartsOn: 1 });
}
function _b(n, a) {
  const l = Ue(n, a?.in), o = l.getFullYear(), s = $e(l, 0);
  s.setFullYear(o + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const f = Yr(s), d = $e(l, 0);
  d.setFullYear(o, 0, 4), d.setHours(0, 0, 0, 0);
  const m = Yr(d);
  return l.getTime() >= f.getTime() ? o + 1 : l.getTime() >= m.getTime() ? o : o - 1;
}
function Us(n) {
  const a = Ue(n), l = new Date(
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
function Wr(n, ...a) {
  const l = $e.bind(
    null,
    n || a.find((o) => typeof o == "object")
  );
  return a.map(l);
}
function Ql(n, a) {
  const l = Ue(n, a?.in);
  return l.setHours(0, 0, 0, 0), l;
}
function Ud(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  ), f = Ql(o), d = Ql(s), m = +f - Us(f), h = +d - Us(d);
  return Math.round((m - h) / oE);
}
function uE(n, a) {
  const l = _b(n, a), o = $e(n, 0);
  return o.setFullYear(l, 0, 4), o.setHours(0, 0, 0, 0), Yr(o);
}
function fE(n, a, l) {
  return Is(n, a * 7, l);
}
function dE(n, a, l) {
  return Bs(n, a * 12, l);
}
function mE(n, a) {
  let l, o = a?.in;
  return n.forEach((s) => {
    !o && typeof s == "object" && (o = $e.bind(null, s));
    const f = Ue(s, o);
    (!l || l < f || isNaN(+f)) && (l = f);
  }), $e(o, l || NaN);
}
function hE(n, a) {
  let l, o = a?.in;
  return n.forEach((s) => {
    !o && typeof s == "object" && (o = $e.bind(null, s));
    const f = Ue(s, o);
    (!l || l > f || isNaN(+f)) && (l = f);
  }), $e(o, l || NaN);
}
function pE(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  );
  return +Ql(o) == +Ql(s);
}
function Nb(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function Ab(n) {
  return !(!Nb(n) && typeof n != "number" || isNaN(+Ue(n)));
}
function Rb(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  ), f = o.getFullYear() - s.getFullYear(), d = o.getMonth() - s.getMonth();
  return f * 12 + d;
}
function gE(n, a) {
  const l = Ue(n, a?.in), o = l.getMonth();
  return l.setFullYear(l.getFullYear(), o + 1, 0), l.setHours(23, 59, 59, 999), l;
}
function kb(n, a) {
  const [l, o] = Wr(n, a.start, a.end);
  return { start: l, end: o };
}
function yE(n, a) {
  const { start: l, end: o } = kb(a?.in, n);
  let s = +l > +o;
  const f = s ? +l : +o, d = s ? o : l;
  d.setHours(0, 0, 0, 0), d.setDate(1);
  let m = 1;
  const h = [];
  for (; +d <= f; )
    h.push($e(l, d)), d.setMonth(d.getMonth() + m);
  return s ? h.reverse() : h;
}
function vE(n, a) {
  const l = Ue(n, a?.in);
  return l.setDate(1), l.setHours(0, 0, 0, 0), l;
}
function bE(n, a) {
  const l = Ue(n, a?.in), o = l.getFullYear();
  return l.setFullYear(o + 1, 0, 0), l.setHours(23, 59, 59, 999), l;
}
function zb(n, a) {
  const l = Ue(n, a?.in);
  return l.setFullYear(l.getFullYear(), 0, 1), l.setHours(0, 0, 0, 0), l;
}
function xE(n, a) {
  const { start: l, end: o } = kb(a?.in, n);
  let s = +l > +o;
  const f = s ? +l : +o, d = s ? o : l;
  d.setHours(0, 0, 0, 0), d.setMonth(0, 1);
  let m = 1;
  const h = [];
  for (; +d <= f; )
    h.push($e(l, d)), d.setFullYear(d.getFullYear() + m);
  return s ? h.reverse() : h;
}
function jb(n, a) {
  const l = Gr(), o = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, s = Ue(n, a?.in), f = s.getDay(), d = (f < o ? -7 : 0) + 6 - (f - o);
  return s.setDate(s.getDate() + d), s.setHours(23, 59, 59, 999), s;
}
function wE(n, a) {
  return jb(n, { ...a, weekStartsOn: 1 });
}
const SE = {
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
}, CE = (n, a, l) => {
  let o;
  const s = SE[n];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", a.toString()), l?.addSuffix ? l.comparison && l.comparison > 0 ? "in " + o : o + " ago" : o;
};
function qo(n) {
  return (a = {}) => {
    const l = a.width ? String(a.width) : n.defaultWidth;
    return n.formats[l] || n.formats[n.defaultWidth];
  };
}
const EE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, OE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, TE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ME = {
  date: qo({
    formats: EE,
    defaultWidth: "full"
  }),
  time: qo({
    formats: OE,
    defaultWidth: "full"
  }),
  dateTime: qo({
    formats: TE,
    defaultWidth: "full"
  })
}, DE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, _E = (n, a, l, o) => DE[n];
function Bn(n) {
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
    const f = n.argumentCallback ? n.argumentCallback(a) : a;
    return s[f];
  };
}
const NE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, AE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, RE = {
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
}, kE = {
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
}, zE = {
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
}, jE = {
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
}, YE = (n, a) => {
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
}, HE = {
  ordinalNumber: YE,
  era: Bn({
    values: NE,
    defaultWidth: "wide"
  }),
  quarter: Bn({
    values: AE,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Bn({
    values: RE,
    defaultWidth: "wide"
  }),
  day: Bn({
    values: kE,
    defaultWidth: "wide"
  }),
  dayPeriod: Bn({
    values: zE,
    defaultWidth: "wide",
    formattingValues: jE,
    defaultFormattingWidth: "wide"
  })
};
function Un(n) {
  return (a, l = {}) => {
    const o = l.width, s = o && n.matchPatterns[o] || n.matchPatterns[n.defaultMatchWidth], f = a.match(s);
    if (!f)
      return null;
    const d = f[0], m = o && n.parsePatterns[o] || n.parsePatterns[n.defaultParseWidth], h = Array.isArray(m) ? UE(m, (y) => y.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      BE(m, (y) => y.test(d))
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
function BE(n, a) {
  for (const l in n)
    if (Object.prototype.hasOwnProperty.call(n, l) && a(n[l]))
      return l;
}
function UE(n, a) {
  for (let l = 0; l < n.length; l++)
    if (a(n[l]))
      return l;
}
function Yb(n) {
  return (a, l = {}) => {
    const o = a.match(n.matchPattern);
    if (!o) return null;
    const s = o[0], f = a.match(n.parsePattern);
    if (!f) return null;
    let d = n.valueCallback ? n.valueCallback(f[0]) : f[0];
    d = l.valueCallback ? l.valueCallback(d) : d;
    const m = a.slice(s.length);
    return { value: d, rest: m };
  };
}
const LE = /^(\d+)(th|st|nd|rd)?/i, qE = /\d+/i, PE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, GE = {
  any: [/^b/i, /^(a|c)/i]
}, WE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, VE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, XE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, FE = {
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
}, QE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ZE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, IE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, KE = {
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
}, $E = {
  ordinalNumber: Yb({
    matchPattern: LE,
    parsePattern: qE,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Un({
    matchPatterns: PE,
    defaultMatchWidth: "wide",
    parsePatterns: GE,
    defaultParseWidth: "any"
  }),
  quarter: Un({
    matchPatterns: WE,
    defaultMatchWidth: "wide",
    parsePatterns: VE,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Un({
    matchPatterns: XE,
    defaultMatchWidth: "wide",
    parsePatterns: FE,
    defaultParseWidth: "any"
  }),
  day: Un({
    matchPatterns: QE,
    defaultMatchWidth: "wide",
    parsePatterns: ZE,
    defaultParseWidth: "any"
  }),
  dayPeriod: Un({
    matchPatterns: IE,
    defaultMatchWidth: "any",
    parsePatterns: KE,
    defaultParseWidth: "any"
  })
}, zr = {
  code: "en-US",
  formatDistance: CE,
  formatLong: ME,
  formatRelative: _E,
  localize: HE,
  match: $E,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function JE(n, a) {
  const l = Ue(n, a?.in);
  return Ud(l, zb(l)) + 1;
}
function Ks(n, a) {
  const l = Ue(n, a?.in), o = +Yr(l) - +uE(l);
  return Math.round(o / Db) + 1;
}
function Ld(n, a) {
  const l = Ue(n, a?.in), o = l.getFullYear(), s = Gr(), f = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, d = $e(a?.in || n, 0);
  d.setFullYear(o + 1, 0, f), d.setHours(0, 0, 0, 0);
  const m = Nn(d, a), h = $e(a?.in || n, 0);
  h.setFullYear(o, 0, f), h.setHours(0, 0, 0, 0);
  const p = Nn(h, a);
  return +l >= +m ? o + 1 : +l >= +p ? o : o - 1;
}
function eO(n, a) {
  const l = Gr(), o = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, s = Ld(n, a), f = $e(a?.in || n, 0);
  return f.setFullYear(s, 0, o), f.setHours(0, 0, 0, 0), Nn(f, a);
}
function $s(n, a) {
  const l = Ue(n, a?.in), o = +Nn(l, a) - +eO(l, a);
  return Math.round(o / Db) + 1;
}
function Ke(n, a) {
  const l = n < 0 ? "-" : "", o = Math.abs(n).toString().padStart(a, "0");
  return l + o;
}
const er = {
  // Year
  y(n, a) {
    const l = n.getFullYear(), o = l > 0 ? l : 1 - l;
    return Ke(a === "yy" ? o % 100 : o, a.length);
  },
  // Month
  M(n, a) {
    const l = n.getMonth();
    return a === "M" ? String(l + 1) : Ke(l + 1, 2);
  },
  // Day of the month
  d(n, a) {
    return Ke(n.getDate(), a.length);
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
    return Ke(n.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(n, a) {
    return Ke(n.getHours(), a.length);
  },
  // Minute
  m(n, a) {
    return Ke(n.getMinutes(), a.length);
  },
  // Second
  s(n, a) {
    return Ke(n.getSeconds(), a.length);
  },
  // Fraction of second
  S(n, a) {
    const l = a.length, o = n.getMilliseconds(), s = Math.trunc(
      o * Math.pow(10, l - 3)
    );
    return Ke(s, a.length);
  }
}, ko = {
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
    const s = Ld(n, o), f = s > 0 ? s : 1 - s;
    if (a === "YY") {
      const d = f % 100;
      return Ke(d, 2);
    }
    return a === "Yo" ? l.ordinalNumber(f, { unit: "year" }) : Ke(f, a.length);
  },
  // ISO week-numbering year
  R: function(n, a) {
    const l = _b(n);
    return Ke(l, a.length);
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
    return Ke(l, a.length);
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
        return Ke(o, 2);
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
        return Ke(o, 2);
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
        return Ke(o + 1, 2);
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
    const s = $s(n, o);
    return a === "wo" ? l.ordinalNumber(s, { unit: "week" }) : Ke(s, a.length);
  },
  // ISO week of year
  I: function(n, a, l) {
    const o = Ks(n);
    return a === "Io" ? l.ordinalNumber(o, { unit: "week" }) : Ke(o, a.length);
  },
  // Day of the month
  d: function(n, a, l) {
    return a === "do" ? l.ordinalNumber(n.getDate(), { unit: "date" }) : er.d(n, a);
  },
  // Day of year
  D: function(n, a, l) {
    const o = JE(n);
    return a === "Do" ? l.ordinalNumber(o, { unit: "dayOfYear" }) : Ke(o, a.length);
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
    const s = n.getDay(), f = (s - o.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(f);
      // Padded numerical value
      case "ee":
        return Ke(f, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return l.ordinalNumber(f, { unit: "day" });
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
    const s = n.getDay(), f = (s - o.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      // Numerical value (same as in `e`)
      case "c":
        return String(f);
      // Padded numerical value
      case "cc":
        return Ke(f, a.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return l.ordinalNumber(f, { unit: "day" });
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
        return Ke(s, a.length);
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
    switch (o === 12 ? s = ko.noon : o === 0 ? s = ko.midnight : s = o / 12 >= 1 ? "pm" : "am", a) {
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
    switch (o >= 17 ? s = ko.evening : o >= 12 ? s = ko.afternoon : o >= 4 ? s = ko.morning : s = ko.night, a) {
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
    return a === "Ko" ? l.ordinalNumber(o, { unit: "hour" }) : Ke(o, a.length);
  },
  // Hour [1-24]
  k: function(n, a, l) {
    let o = n.getHours();
    return o === 0 && (o = 24), a === "ko" ? l.ordinalNumber(o, { unit: "hour" }) : Ke(o, a.length);
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
        return Ly(o);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return kr(o);
      // Hours and minutes with `:` delimiter
      default:
        return kr(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, a, l) {
    const o = n.getTimezoneOffset();
    switch (a) {
      // Hours and optional minutes
      case "x":
        return Ly(o);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return kr(o);
      // Hours and minutes with `:` delimiter
      default:
        return kr(o, ":");
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
        return "GMT" + Uy(o, ":");
      default:
        return "GMT" + kr(o, ":");
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
        return "GMT" + Uy(o, ":");
      default:
        return "GMT" + kr(o, ":");
    }
  },
  // Seconds timestamp
  t: function(n, a, l) {
    const o = Math.trunc(+n / 1e3);
    return Ke(o, a.length);
  },
  // Milliseconds timestamp
  T: function(n, a, l) {
    return Ke(+n, a.length);
  }
};
function Uy(n, a = "") {
  const l = n > 0 ? "-" : "+", o = Math.abs(n), s = Math.trunc(o / 60), f = o % 60;
  return f === 0 ? l + String(s) : l + String(s) + a + Ke(f, 2);
}
function Ly(n, a) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + Ke(Math.abs(n) / 60, 2) : kr(n, a);
}
function kr(n, a = "") {
  const l = n > 0 ? "-" : "+", o = Math.abs(n), s = Ke(Math.trunc(o / 60), 2), f = Ke(o % 60, 2);
  return l + s + a + f;
}
const qy = (n, a) => {
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
}, Hb = (n, a) => {
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
}, tO = (n, a) => {
  const l = n.match(/(P+)(p+)?/) || [], o = l[1], s = l[2];
  if (!s)
    return qy(n, a);
  let f;
  switch (o) {
    case "P":
      f = a.dateTime({ width: "short" });
      break;
    case "PP":
      f = a.dateTime({ width: "medium" });
      break;
    case "PPP":
      f = a.dateTime({ width: "long" });
      break;
    default:
      f = a.dateTime({ width: "full" });
      break;
  }
  return f.replace("{{date}}", qy(o, a)).replace("{{time}}", Hb(s, a));
}, cd = {
  p: Hb,
  P: tO
}, nO = /^D+$/, aO = /^Y+$/, rO = ["D", "DD", "YY", "YYYY"];
function Bb(n) {
  return nO.test(n);
}
function Ub(n) {
  return aO.test(n);
}
function ud(n, a, l) {
  const o = oO(n, a, l);
  if (console.warn(o), rO.includes(n)) throw new RangeError(o);
}
function oO(n, a, l) {
  const o = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${o} to the input \`${l}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const lO = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, iO = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sO = /^'([^]*?)'?$/, cO = /''/g, uO = /[a-zA-Z]/;
function Vt(n, a, l) {
  const o = Gr(), s = l?.locale ?? o.locale ?? zr, f = l?.firstWeekContainsDate ?? l?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, d = l?.weekStartsOn ?? l?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, m = Ue(n, l?.in);
  if (!Ab(m))
    throw new RangeError("Invalid time value");
  let h = a.match(iO).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const w = cd[y];
      return w(b, s.formatLong);
    }
    return b;
  }).join("").match(lO).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: fO(b) };
    if (By[y])
      return { isToken: !0, value: b };
    if (y.match(uO))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: b };
  });
  s.localize.preprocessor && (h = s.localize.preprocessor(m, h));
  const p = {
    firstWeekContainsDate: f,
    weekStartsOn: d,
    locale: s
  };
  return h.map((b) => {
    if (!b.isToken) return b.value;
    const y = b.value;
    (!l?.useAdditionalWeekYearTokens && Ub(y) || !l?.useAdditionalDayOfYearTokens && Bb(y)) && ud(y, a, String(n));
    const w = By[y[0]];
    return w(m, y, s.localize, p);
  }).join("");
}
function fO(n) {
  const a = n.match(sO);
  return a ? a[1].replace(cO, "'") : n;
}
function Lb(n, a) {
  const l = Ue(n, a?.in), o = l.getFullYear(), s = l.getMonth(), f = $e(l, 0);
  return f.setFullYear(o, s + 1, 0), f.setHours(0, 0, 0, 0), f.getDate();
}
function dO() {
  return Object.assign({}, Gr());
}
function mO(n, a) {
  const l = Ue(n, a?.in).getDay();
  return l === 0 ? 7 : l;
}
function hO(n, a) {
  return Ue(n, a?.in).getMonth();
}
function pO(n, a) {
  return Ue(n, a?.in).getFullYear();
}
function gO(n, a) {
  return +Ue(n) > +Ue(a);
}
function yO(n, a) {
  return +Ue(n) < +Ue(a);
}
function vO(n, a) {
  const l = bO(a) ? new a(0) : $e(a, 0);
  return l.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), l.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), l;
}
function bO(n) {
  return typeof n == "function" && n.prototype?.constructor === n;
}
const xO = 10;
class qb {
  subPriority = 0;
  validate(a, l) {
    return !0;
  }
}
class wO extends qb {
  constructor(a, l, o, s, f) {
    super(), this.value = a, this.validateValue = l, this.setValue = o, this.priority = s, f && (this.subPriority = f);
  }
  validate(a, l) {
    return this.validateValue(a, this.value, l);
  }
  set(a, l, o) {
    return this.setValue(a, l, this.value, o);
  }
}
class SO extends qb {
  priority = xO;
  subPriority = -1;
  constructor(a, l) {
    super(), this.context = a || ((o) => $e(l, o));
  }
  set(a, l) {
    return l.timestampIsSet ? a : $e(a, vO(a, this.context));
  }
}
class Xe {
  run(a, l, o, s) {
    const f = this.parse(a, l, o, s);
    return f ? {
      setter: new wO(
        f.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: f.rest
    } : null;
  }
  validate(a, l, o) {
    return !0;
  }
}
class CO extends Xe {
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
  const o = l[1] === "+" ? 1 : -1, s = l[2] ? parseInt(l[2], 10) : 0, f = l[3] ? parseInt(l[3], 10) : 0, d = l[5] ? parseInt(l[5], 10) : 0;
  return {
    value: o * (s * iE + f * lE + d * sE),
    rest: a.slice(l[0].length)
  };
}
function Pb(n) {
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
function Ls(n, a) {
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
function qd(n) {
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
function Gb(n, a) {
  const l = a > 0, o = l ? a : 1 - a;
  let s;
  if (o <= 50)
    s = n || 100;
  else {
    const f = o + 50, d = Math.trunc(f / 100) * 100, m = n >= f % 100;
    s = n + d - (m ? 100 : 0);
  }
  return l ? s : 1 - s;
}
function Wb(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class EO extends Xe {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(a, l, o) {
    const s = (f) => ({
      year: f,
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
      const d = Gb(
        o.year,
        s
      );
      return a.setFullYear(d, 0, 1), a.setHours(0, 0, 0, 0), a;
    }
    const f = !("era" in l) || l.era === 1 ? o.year : 1 - o.year;
    return a.setFullYear(f, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class OO extends Xe {
  priority = 130;
  parse(a, l, o) {
    const s = (f) => ({
      year: f,
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
    const f = Ld(a, s);
    if (o.isTwoDigitYear) {
      const m = Gb(
        o.year,
        f
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
class TO extends Xe {
  priority = 130;
  parse(a, l) {
    return Ls(l === "R" ? 4 : l.length, a);
  }
  set(a, l, o) {
    const s = $e(a, 0);
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
class MO extends Xe {
  priority = 130;
  parse(a, l) {
    return Ls(l === "u" ? 4 : l.length, a);
  }
  set(a, l, o) {
    return a.setFullYear(o, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class DO extends Xe {
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
class _O extends Xe {
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
class NO extends Xe {
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
    const s = (f) => f - 1;
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
class AO extends Xe {
  priority = 110;
  parse(a, l, o) {
    const s = (f) => f - 1;
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
function RO(n, a, l) {
  const o = Ue(n, l?.in), s = $s(o, l) - a;
  return o.setDate(o.getDate() - s * 7), Ue(o, l?.in);
}
class kO extends Xe {
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
    return Nn(RO(a, o, s), s);
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
function zO(n, a, l) {
  const o = Ue(n, l?.in), s = Ks(o, l) - a;
  return o.setDate(o.getDate() - s * 7), o;
}
class jO extends Xe {
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
    return Yr(zO(a, o));
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
const YO = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], HO = [
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
class BO extends Xe {
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
    const o = a.getFullYear(), s = Wb(o), f = a.getMonth();
    return s ? l >= 1 && l <= HO[f] : l >= 1 && l <= YO[f];
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
class UO extends Xe {
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
    return Wb(o) ? l >= 1 && l <= 366 : l >= 1 && l <= 365;
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
function Pd(n, a, l) {
  const o = Gr(), s = l?.weekStartsOn ?? l?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, f = Ue(n, l?.in), d = f.getDay(), h = (a % 7 + 7) % 7, p = 7 - s, b = a < 0 || a > 6 ? a - (d + p) % 7 : (h + p) % 7 - (d + p) % 7;
  return Is(f, b, l);
}
class LO extends Xe {
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
    return a = Pd(a, o, s), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class qO extends Xe {
  priority = 90;
  parse(a, l, o, s) {
    const f = (d) => {
      const m = Math.floor((d - 1) / 7) * 7;
      return (d + s.weekStartsOn + 6) % 7 + m;
    };
    switch (l) {
      // 3
      case "e":
      case "ee":
        return vt(dt(l.length, a), f);
      // 3rd
      case "eo":
        return vt(
          o.ordinalNumber(a, {
            unit: "day"
          }),
          f
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
    return a = Pd(a, o, s), a.setHours(0, 0, 0, 0), a;
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
class PO extends Xe {
  priority = 90;
  parse(a, l, o, s) {
    const f = (d) => {
      const m = Math.floor((d - 1) / 7) * 7;
      return (d + s.weekStartsOn + 6) % 7 + m;
    };
    switch (l) {
      // 3
      case "c":
      case "cc":
        return vt(dt(l.length, a), f);
      // 3rd
      case "co":
        return vt(
          o.ordinalNumber(a, {
            unit: "day"
          }),
          f
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
    return a = Pd(a, o, s), a.setHours(0, 0, 0, 0), a;
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
function GO(n, a, l) {
  const o = Ue(n, l?.in), s = mO(o, l), f = a - s;
  return Is(o, f, l);
}
class WO extends Xe {
  priority = 90;
  parse(a, l, o) {
    const s = (f) => f === 0 ? 7 : f;
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
    return a = GO(a, o), a.setHours(0, 0, 0, 0), a;
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
class VO extends Xe {
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
    return a.setHours(qd(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class XO extends Xe {
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
    return a.setHours(qd(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class FO extends Xe {
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
    return a.setHours(qd(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class QO extends Xe {
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
class ZO extends Xe {
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
class IO extends Xe {
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
class KO extends Xe {
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
class $O extends Xe {
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
class JO extends Xe {
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
class eT extends Xe {
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
class tT extends Xe {
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
    return l.timestampIsSet ? a : $e(
      a,
      a.getTime() - Us(a) - o
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class nT extends Xe {
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
    return l.timestampIsSet ? a : $e(
      a,
      a.getTime() - Us(a) - o
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class aT extends Xe {
  priority = 40;
  parse(a) {
    return Pb(a);
  }
  set(a, l, o) {
    return [$e(a, o * 1e3), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
class rT extends Xe {
  priority = 20;
  parse(a) {
    return Pb(a);
  }
  set(a, l, o) {
    return [$e(a, o), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
const oT = {
  G: new CO(),
  y: new EO(),
  Y: new OO(),
  R: new TO(),
  u: new MO(),
  Q: new DO(),
  q: new _O(),
  M: new NO(),
  L: new AO(),
  w: new kO(),
  I: new jO(),
  d: new BO(),
  D: new UO(),
  E: new LO(),
  e: new qO(),
  c: new PO(),
  i: new WO(),
  a: new VO(),
  b: new XO(),
  B: new FO(),
  h: new QO(),
  H: new ZO(),
  K: new IO(),
  k: new KO(),
  m: new $O(),
  s: new JO(),
  S: new eT(),
  X: new tT(),
  x: new nT(),
  t: new aT(),
  T: new rT()
}, lT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, iT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sT = /^'([^]*?)'?$/, cT = /''/g, uT = /\S/, fT = /[a-zA-Z]/;
function Vb(n, a, l, o) {
  const s = () => $e(l, NaN), f = dO(), d = f.locale ?? zr, m = f.firstWeekContainsDate ?? f.locale?.options?.firstWeekContainsDate ?? 1, h = f.weekStartsOn ?? f.locale?.options?.weekStartsOn ?? 0, p = {
    firstWeekContainsDate: m,
    weekStartsOn: h,
    locale: d
  }, b = [new SO(o?.in, l)], y = a.match(iT).map((C) => {
    const D = C[0];
    if (D in cd) {
      const A = cd[D];
      return A(C, d.formatLong);
    }
    return C;
  }).join("").match(lT), w = [];
  for (let C of y) {
    Ub(C) && ud(C, a, n), Bb(C) && ud(C, a, n);
    const D = C[0], A = oT[D];
    if (A) {
      const { incompatibleTokens: _ } = A;
      if (Array.isArray(_)) {
        const j = w.find(
          (z) => _.includes(z.token) || z.token === D
        );
        if (j)
          throw new RangeError(
            `The format string mustn't contain \`${j.fullToken}\` and \`${C}\` at the same time`
          );
      } else if (A.incompatibleTokens === "*" && w.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${C}\` and any other token at the same time`
        );
      w.push({ token: D, fullToken: C });
      const T = A.run(
        n,
        C,
        d.match,
        p
      );
      if (!T)
        return s();
      b.push(T.setter), n = T.rest;
    } else {
      if (D.match(fT))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + D + "`"
        );
      if (C === "''" ? C = "'" : D === "'" && (C = dT(C)), n.indexOf(C) === 0)
        n = n.slice(C.length);
      else
        return s();
    }
  }
  if (n.length > 0 && uT.test(n))
    return s();
  const E = b.map((C) => C.priority).sort((C, D) => D - C).filter((C, D, A) => A.indexOf(C) === D).map(
    (C) => b.filter((D) => D.priority === C).sort((D, A) => A.subPriority - D.subPriority)
  ).map((C) => C[0]);
  let M = Ue(l, o?.in);
  if (isNaN(+M)) return s();
  const O = {};
  for (const C of E) {
    if (!C.validate(M, p))
      return s();
    const D = C.set(M, O, p);
    Array.isArray(D) ? (M = D[0], Object.assign(O, D[1])) : M = D;
  }
  return M;
}
function dT(n) {
  return n.match(sT)[1].replace(cT, "'");
}
function mT(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  );
  return +Nn(o, l) == +Nn(s, l);
}
function hT(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  );
  return o.getFullYear() === s.getFullYear() && o.getMonth() === s.getMonth();
}
function pT(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  );
  return o.getFullYear() === s.getFullYear();
}
function gT(n, a, l) {
  const o = Ue(n, l?.in), s = o.getFullYear(), f = o.getDate(), d = $e(n, 0);
  d.setFullYear(s, a, 15), d.setHours(0, 0, 0, 0);
  const m = Lb(d);
  return o.setMonth(a, Math.min(f, m)), o;
}
function yT(n, a, l) {
  const o = Ue(n, l?.in);
  return isNaN(+o) ? $e(n, NaN) : (o.setFullYear(a), o);
}
const vT = {
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
}, bT = (n, a, l) => {
  let o;
  const s = vT[n];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", String(a)), l?.addSuffix ? l.comparison && l.comparison > 0 ? o + "内" : o + "前" : o;
}, xT = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, wT = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, ST = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, CT = {
  date: qo({
    formats: xT,
    defaultWidth: "full"
  }),
  time: qo({
    formats: wT,
    defaultWidth: "full"
  }),
  dateTime: qo({
    formats: ST,
    defaultWidth: "full"
  })
};
function Py(n, a, l) {
  const o = "eeee p";
  return mT(n, a, l) ? o : n.getTime() > a.getTime() ? "'下个'" + o : "'上个'" + o;
}
const ET = {
  lastWeek: Py,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Py,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, OT = (n, a, l, o) => {
  const s = ET[n];
  return typeof s == "function" ? s(a, l, o) : s;
}, TT = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, MT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, DT = {
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
}, _T = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, NT = {
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
}, AT = {
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
}, RT = (n, a) => {
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
}, kT = {
  ordinalNumber: RT,
  era: Bn({
    values: TT,
    defaultWidth: "wide"
  }),
  quarter: Bn({
    values: MT,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Bn({
    values: DT,
    defaultWidth: "wide"
  }),
  day: Bn({
    values: _T,
    defaultWidth: "wide"
  }),
  dayPeriod: Bn({
    values: NT,
    defaultWidth: "wide",
    formattingValues: AT,
    defaultFormattingWidth: "wide"
  })
}, zT = /^(第\s*)?\d+(日|时|分|秒)?/i, jT = /\d+/i, YT = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, HT = {
  any: [/^(前)/i, /^(公元)/i]
}, BT = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, UT = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, LT = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i
}, qT = {
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
}, PT = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, GT = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, WT = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, VT = {
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
}, XT = {
  ordinalNumber: Yb({
    matchPattern: zT,
    parsePattern: jT,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Un({
    matchPatterns: YT,
    defaultMatchWidth: "wide",
    parsePatterns: HT,
    defaultParseWidth: "any"
  }),
  quarter: Un({
    matchPatterns: BT,
    defaultMatchWidth: "wide",
    parsePatterns: UT,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Un({
    matchPatterns: LT,
    defaultMatchWidth: "wide",
    parsePatterns: qT,
    defaultParseWidth: "any"
  }),
  day: Un({
    matchPatterns: PT,
    defaultMatchWidth: "wide",
    parsePatterns: GT,
    defaultParseWidth: "any"
  }),
  dayPeriod: Un({
    matchPatterns: WT,
    defaultMatchWidth: "any",
    parsePatterns: VT,
    defaultParseWidth: "any"
  })
}, FT = {
  code: "zh-CN",
  formatDistance: bT,
  formatLong: CT,
  formatRelative: OT,
  localize: kT,
  match: XT,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function QT(n, a, l = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: n,
    timeZoneName: l
  }).format(a).split(/\s/g).slice(2).join(" ");
}
const ZT = {}, Fl = {};
function ya(n, a) {
  try {
    const o = (ZT[n] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: n,
      timeZoneName: "longOffset"
    }).format)(a).split("GMT")[1];
    return o in Fl ? Fl[o] : Gy(o, o.split(":"));
  } catch {
    if (n in Fl) return Fl[n];
    const l = n?.match(IT);
    return l ? Gy(n, l.slice(1)) : NaN;
  }
}
const IT = /([+-]\d\d):?(\d\d)?/;
function Gy(n, a) {
  const l = +(a[0] || 0), o = +(a[1] || 0), s = +(a[2] || 0) / 60;
  return Fl[n] = l * 60 + o > 0 ? l * 60 + o + s : l * 60 - o - s;
}
class Gn extends Date {
  //#region static
  constructor(...a) {
    super(), a.length > 1 && typeof a[a.length - 1] == "string" && (this.timeZone = a.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(ya(this.timeZone, this)) ? this.setTime(NaN) : a.length ? typeof a[0] == "number" && (a.length === 1 || a.length === 2 && typeof a[1] != "number") ? this.setTime(a[0]) : typeof a[0] == "string" ? this.setTime(+new Date(a[0])) : a[0] instanceof Date ? this.setTime(+a[0]) : (this.setTime(+new Date(...a)), Xb(this, a)) : this.setTime(Date.now());
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
    return Date.prototype.setTime.apply(this, arguments), qs(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](a) {
    return new Gn(+new Date(a), this.timeZone);
  }
  //#endregion
}
const Wy = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((n) => {
  if (!Wy.test(n)) return;
  const a = n.replace(Wy, "$1UTC");
  Gn.prototype[a] && (n.startsWith("get") ? Gn.prototype[n] = function() {
    return this.internal[a]();
  } : (Gn.prototype[n] = function() {
    return Date.prototype[a].apply(this.internal, arguments), KT(this), +this;
  }, Gn.prototype[a] = function() {
    return Date.prototype[a].apply(this, arguments), qs(this), +this;
  }));
});
function qs(n) {
  n.internal.setTime(+n), n.internal.setUTCSeconds(n.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-ya(n.timeZone, n) * 60));
}
function KT(n) {
  Date.prototype.setFullYear.call(n, n.internal.getUTCFullYear(), n.internal.getUTCMonth(), n.internal.getUTCDate()), Date.prototype.setHours.call(n, n.internal.getUTCHours(), n.internal.getUTCMinutes(), n.internal.getUTCSeconds(), n.internal.getUTCMilliseconds()), Xb(n);
}
function Xb(n, a) {
  const l = Array.isArray(a) ? $T(a) : +n.internal, o = ya(n.timeZone, n), s = o > 0 ? Math.floor(o) : Math.ceil(o), f = /* @__PURE__ */ new Date(+n);
  f.setUTCHours(f.getUTCHours() - 1);
  const d = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset(), m = -(/* @__PURE__ */ new Date(+f)).getTimezoneOffset(), h = d - m;
  let p = d;
  if (h && d !== s) {
    const F = Date.prototype.getHours.apply(n), $ = Array.isArray(a) ? a[3] || 0 : n.internal.getUTCHours();
    if (F !== $) {
      const te = /* @__PURE__ */ new Date(+n), ee = d - s;
      ee && te.setUTCMinutes(te.getUTCMinutes() + ee);
      const ie = ya(n.timeZone, te);
      (ie > 0 ? Math.floor(ie) : Math.ceil(ie)) === s && (p = m);
    }
  }
  const b = p - s;
  b && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + b);
  const y = /* @__PURE__ */ new Date(+n);
  y.setUTCSeconds(0);
  const w = d > 0 ? y.getSeconds() : (y.getSeconds() - 60) % 60, E = Math.round(-(ya(n.timeZone, n) * 60)) % 60;
  (E || w) && Date.prototype.setUTCSeconds.call(n, Date.prototype.getUTCSeconds.call(n) + E + w);
  const M = ya(n.timeZone, n), O = M > 0 ? Math.floor(M) : Math.ceil(M), D = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset() - O, A = O !== s, _ = D - b, T = O - s, j = l - O * 60 * 1e3, z = T > 0 && Vy(n) - l === T * 60 * 1e3 && Vy(n, j) !== l;
  if (A && _ && !z) {
    Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + _);
    const F = ya(n.timeZone, n), $ = F > 0 ? Math.floor(F) : Math.ceil(F), te = O - $;
    te && _ < 0 && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + te);
  }
  qs(n);
  const U = (a ? l : l + E * 1e3) - +n.internal;
  U && Math.abs(U) < 1800 * 1e3 && (Date.prototype.setTime.call(n, +n + U), qs(n));
}
function $T(n) {
  return Date.UTC(n[0], n.length > 1 ? n[1] : 0, n.length > 2 ? n[2] : 1, ...n.slice(3));
}
function Vy(n, a) {
  const l = new Date(a ?? +n);
  return l.setUTCSeconds(l.getUTCSeconds() - Math.round(-ya(n.timeZone, l) * 60)), +l;
}
class qt extends Gn {
  //#region static
  static tz(a, ...l) {
    return l.length ? new qt(...l, a) : new qt(Date.now(), a);
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
    return `${a} GMT${l}${o}${s} (${QT(this.timeZone, this)})`;
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
    return new qt(+this, a);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](a) {
    return new qt(+new Date(a), this.timeZone);
  }
  //#endregion
}
const Xy = 5, JT = 4;
function eM(n, a) {
  const l = a.startOfMonth(n), o = l.getDay() > 0 ? l.getDay() : 7, s = a.addDays(n, -o + 1), f = a.addDays(s, Xy * 7 - 1);
  return a.getMonth(n) === a.getMonth(f) ? Xy : JT;
}
function Fb(n, a) {
  const l = a.startOfMonth(n), o = l.getDay();
  return o === 1 ? l : o === 0 ? a.addDays(l, -6) : a.addDays(l, -1 * (o - 1));
}
function tM(n, a) {
  const l = Fb(n, a), o = eM(n, a);
  return a.addDays(l, o * 7 - 1);
}
const Qb = {
  ...zr,
  labels: {
    labelDayButton: (n, a, l, o) => {
      let s;
      o && typeof o.format == "function" ? s = o.format.bind(o) : s = (d, m) => Vt(d, m, { locale: zr, ...l });
      let f = s(n, "PPPP");
      return a.today && (f = `Today, ${f}`), a.selected && (f = `${f}, selected`), f;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (n) => `Week ${n}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (n, a, l) => {
      let o;
      return l && typeof l.format == "function" ? o = l.format.bind(l) : o = (s, f) => Vt(s, f, { locale: zr, ...a }), o(n, "LLLL yyyy");
    },
    labelGridcell: (n, a, l, o) => {
      let s;
      o && typeof o.format == "function" ? s = o.format.bind(o) : s = (d, m) => Vt(d, m, { locale: zr, ...l });
      let f = s(n, "PPPP");
      return a?.today && (f = `Today, ${f}`), f;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (n, a, l) => {
      let o;
      return l && typeof l.format == "function" ? o = l.format.bind(l) : o = (s, f) => Vt(s, f, { locale: zr, ...a }), o(n, "cccc");
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
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? qt.tz(this.options.timeZone) : new this.Date(), this.newDate = (o, s, f) => this.overrides?.newDate ? this.overrides.newDate(o, s, f) : this.options.timeZone ? new qt(o, s, f, this.options.timeZone) : new Date(o, s, f), this.addDays = (o, s) => this.overrides?.addDays ? this.overrides.addDays(o, s) : Is(o, s), this.addMonths = (o, s) => this.overrides?.addMonths ? this.overrides.addMonths(o, s) : Bs(o, s), this.addWeeks = (o, s) => this.overrides?.addWeeks ? this.overrides.addWeeks(o, s) : fE(o, s), this.addYears = (o, s) => this.overrides?.addYears ? this.overrides.addYears(o, s) : dE(o, s), this.differenceInCalendarDays = (o, s) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(o, s) : Ud(o, s), this.differenceInCalendarMonths = (o, s) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(o, s) : Rb(o, s), this.eachMonthOfInterval = (o) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(o) : yE(o), this.eachYearOfInterval = (o) => {
      const s = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(o) : xE(o), f = new Set(s.map((m) => this.getYear(m)));
      if (f.size === s.length)
        return s;
      const d = [];
      return f.forEach((m) => {
        d.push(new Date(m, 0, 1));
      }), d;
    }, this.endOfBroadcastWeek = (o) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(o) : tM(o, this), this.endOfISOWeek = (o) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(o) : wE(o), this.endOfMonth = (o) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(o) : gE(o), this.endOfWeek = (o, s) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(o, s) : jb(o, this.options), this.endOfYear = (o) => this.overrides?.endOfYear ? this.overrides.endOfYear(o) : bE(o), this.format = (o, s, f) => {
      const d = this.overrides?.format ? this.overrides.format(o, s, this.options) : Vt(o, s, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(d) : d;
    }, this.getISOWeek = (o) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(o) : Ks(o), this.getMonth = (o, s) => this.overrides?.getMonth ? this.overrides.getMonth(o, this.options) : hO(o, this.options), this.getYear = (o, s) => this.overrides?.getYear ? this.overrides.getYear(o, this.options) : pO(o, this.options), this.getWeek = (o, s) => this.overrides?.getWeek ? this.overrides.getWeek(o, this.options) : $s(o, this.options), this.isAfter = (o, s) => this.overrides?.isAfter ? this.overrides.isAfter(o, s) : gO(o, s), this.isBefore = (o, s) => this.overrides?.isBefore ? this.overrides.isBefore(o, s) : yO(o, s), this.isDate = (o) => this.overrides?.isDate ? this.overrides.isDate(o) : Nb(o), this.isSameDay = (o, s) => this.overrides?.isSameDay ? this.overrides.isSameDay(o, s) : pE(o, s), this.isSameMonth = (o, s) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(o, s) : hT(o, s), this.isSameYear = (o, s) => this.overrides?.isSameYear ? this.overrides.isSameYear(o, s) : pT(o, s), this.max = (o) => this.overrides?.max ? this.overrides.max(o) : mE(o), this.min = (o) => this.overrides?.min ? this.overrides.min(o) : hE(o), this.setMonth = (o, s) => this.overrides?.setMonth ? this.overrides.setMonth(o, s) : gT(o, s), this.setYear = (o, s) => this.overrides?.setYear ? this.overrides.setYear(o, s) : yT(o, s), this.startOfBroadcastWeek = (o, s) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(o, this) : Fb(o, this), this.startOfDay = (o) => this.overrides?.startOfDay ? this.overrides.startOfDay(o) : Ql(o), this.startOfISOWeek = (o) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(o) : Yr(o), this.startOfMonth = (o) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(o) : vE(o), this.startOfWeek = (o, s) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(o, this.options) : Nn(o, this.options), this.startOfYear = (o) => this.overrides?.startOfYear ? this.overrides.startOfYear(o) : zb(o), this.options = { locale: Qb, ...a }, this.overrides = l;
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
    const { locale: l, timeZone: o, numerals: s } = this.options, f = l?.code;
    if (f && Ut.yearFirstLocales.has(f))
      try {
        return new Intl.DateTimeFormat(f, {
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
const Fn = new Ut(), nM = {
  ...FT,
  labels: {
    labelDayButton: (n, a, l, o) => {
      let f = (o ?? new Ut(l)).format(n, "PPPP");
      return a.today && (f = `今天，${f}`), a.selected && (f = `${f}，已选择`), f;
    },
    labelMonthDropdown: "选择月份",
    labelNext: "前往下个月",
    labelPrevious: "前往上个月",
    labelWeekNumber: (n) => `第 ${n} 周`,
    labelYearDropdown: "选择年份",
    labelGrid: (n, a, l) => (l ?? new Ut(a)).formatMonthYear(n),
    labelGridcell: (n, a, l, o) => {
      let f = (o ?? new Ut(l)).format(n, "PPPP");
      return a?.today && (f = `今天，${f}`), f;
    },
    labelNav: "导航栏",
    labelWeekNumberHeader: "周数",
    labelWeekday: (n, a, l) => (l ?? new Ut(a)).format(n, "cccc")
  }
};
const aM = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rM = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, l, o) => o ? o.toUpperCase() : l.toLowerCase()
), Fy = (n) => {
  const a = rM(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, Zb = (...n) => n.filter((a, l, o) => !!a && a.trim() !== "" && o.indexOf(a) === l).join(" ").trim(), oM = (n) => {
  for (const a in n)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
var lM = {
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
const iM = x.forwardRef(
  ({
    color: n = "currentColor",
    size: a = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: f,
    iconNode: d,
    ...m
  }, h) => x.createElement(
    "svg",
    {
      ref: h,
      ...lM,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: o ? Number(l) * 24 / Number(a) : l,
      className: Zb("lucide", s),
      ...!f && !oM(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([p, b]) => x.createElement(p, b)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const Qn = (n, a) => {
  const l = x.forwardRef(
    ({ className: o, ...s }, f) => x.createElement(iM, {
      ref: f,
      iconNode: a,
      className: Zb(
        `lucide-${aM(Fy(n))}`,
        `lucide-${n}`,
        o
      ),
      ...s
    })
  );
  return l.displayName = Fy(n), l;
};
const sM = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], cM = Qn("calendar", sM);
const uM = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Gd = Qn("check", uM);
const fM = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Wd = Qn("chevron-down", fM);
const dM = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ib = Qn("chevron-left", dM);
const mM = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Kb = Qn("chevron-right", mM);
const hM = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], pM = Qn("chevron-up", hM);
const gM = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], yM = Qn("clock-3", gM);
const vM = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], bM = Qn("ellipsis", vM);
const xM = [["path", { d: "M5 12h14", key: "1ays0h" }]], wM = Qn("minus", xM);
const SM = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], CM = Qn("x", SM);
class $b {
  constructor(a, l, o = Fn) {
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
class EM {
  constructor(a, l) {
    this.date = a, this.weeks = l;
  }
}
class OM {
  constructor(a, l) {
    this.days = l, this.weekNumber = a;
  }
}
function TM(n) {
  return se.createElement("button", { ...n });
}
function MM(n) {
  return se.createElement("span", { ...n });
}
function DM(n) {
  const { size: a = 24, orientation: l = "left", className: o } = n;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    se.createElement(
      "svg",
      { className: o, width: a, height: a, viewBox: "0 0 24 24" },
      l === "up" && se.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      l === "down" && se.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      l === "left" && se.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      l === "right" && se.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function _M(n) {
  const { day: a, modifiers: l, ...o } = n;
  return se.createElement("td", { ...o });
}
function NM(n) {
  const { day: a, modifiers: l, ...o } = n, s = se.useRef(null);
  return se.useEffect(() => {
    l.focused && s.current?.focus();
  }, [l.focused]), se.createElement("button", { ref: s, ...o });
}
var pe;
(function(n) {
  n.Root = "root", n.Chevron = "chevron", n.Day = "day", n.DayButton = "day_button", n.CaptionLabel = "caption_label", n.Dropdowns = "dropdowns", n.Dropdown = "dropdown", n.DropdownRoot = "dropdown_root", n.Footer = "footer", n.MonthGrid = "month_grid", n.MonthCaption = "month_caption", n.MonthsDropdown = "months_dropdown", n.Month = "month", n.Months = "months", n.Nav = "nav", n.NextMonthButton = "button_next", n.PreviousMonthButton = "button_previous", n.Week = "week", n.Weeks = "weeks", n.Weekday = "weekday", n.Weekdays = "weekdays", n.WeekNumber = "week_number", n.WeekNumberHeader = "week_number_header", n.YearsDropdown = "years_dropdown";
})(pe || (pe = {}));
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
function AM(n) {
  const { options: a, className: l, components: o, classNames: s, ...f } = n, d = [s[pe.Dropdown], l].join(" "), m = a?.find(({ value: h }) => h === f.value);
  return se.createElement(
    "span",
    { "data-disabled": f.disabled, className: s[pe.DropdownRoot] },
    se.createElement(o.Select, { className: d, ...f }, a?.map(({ value: h, label: p, disabled: b }) => se.createElement(o.Option, { key: h, value: h, disabled: b }, p))),
    se.createElement(
      "span",
      { className: s[pe.CaptionLabel], "aria-hidden": !0 },
      m?.label,
      se.createElement(o.Chevron, { orientation: "down", size: 18, className: s[pe.Chevron] })
    )
  );
}
function RM(n) {
  return se.createElement("div", { ...n });
}
function kM(n) {
  return se.createElement("div", { ...n });
}
function zM(n) {
  const { calendarMonth: a, displayIndex: l, ...o } = n;
  return se.createElement("div", { ...o }, n.children);
}
function jM(n) {
  const { calendarMonth: a, displayIndex: l, ...o } = n;
  return se.createElement("div", { ...o });
}
function YM(n) {
  return se.createElement("table", { ...n });
}
function HM(n) {
  return se.createElement("div", { ...n });
}
const Jb = x.createContext(void 0);
function ei() {
  const n = x.useContext(Jb);
  if (n === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return n;
}
function BM(n) {
  const { components: a } = ei();
  return se.createElement(a.Dropdown, { ...n });
}
function UM(n) {
  const { onPreviousClick: a, onNextClick: l, previousMonth: o, nextMonth: s, ...f } = n, { components: d, classNames: m, labels: { labelPrevious: h, labelNext: p } } = ei(), b = x.useCallback((w) => {
    s && l?.(w);
  }, [s, l]), y = x.useCallback((w) => {
    o && a?.(w);
  }, [o, a]);
  return se.createElement(
    "nav",
    { ...f },
    se.createElement(
      d.PreviousMonthButton,
      { type: "button", className: m[pe.PreviousMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": h(o), onClick: y },
      se.createElement(d.Chevron, { disabled: o ? void 0 : !0, className: m[pe.Chevron], orientation: "left" })
    ),
    se.createElement(
      d.NextMonthButton,
      { type: "button", className: m[pe.NextMonthButton], tabIndex: s ? void 0 : -1, "aria-disabled": s ? void 0 : !0, "aria-label": p(s), onClick: b },
      se.createElement(d.Chevron, { disabled: s ? void 0 : !0, orientation: "right", className: m[pe.Chevron] })
    )
  );
}
function LM(n) {
  const { components: a } = ei();
  return se.createElement(a.Button, { ...n });
}
function qM(n) {
  return se.createElement("option", { ...n });
}
function PM(n) {
  const { components: a } = ei();
  return se.createElement(a.Button, { ...n });
}
function GM(n) {
  const { rootRef: a, ...l } = n;
  return se.createElement("div", { ...l, ref: a });
}
function WM(n) {
  return se.createElement("select", { ...n });
}
function VM(n) {
  const { week: a, ...l } = n;
  return se.createElement("tr", { ...l });
}
function XM(n) {
  return se.createElement("th", { ...n });
}
function FM(n) {
  return se.createElement(
    "thead",
    { "aria-hidden": !0 },
    se.createElement("tr", { ...n })
  );
}
function QM(n) {
  const { week: a, ...l } = n;
  return se.createElement("th", { ...l });
}
function ZM(n) {
  return se.createElement("th", { ...n });
}
function IM(n) {
  return se.createElement("tbody", { ...n });
}
function KM(n) {
  const { components: a } = ei();
  return se.createElement(a.Dropdown, { ...n });
}
const $M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: TM,
  CaptionLabel: MM,
  Chevron: DM,
  Day: _M,
  DayButton: NM,
  Dropdown: AM,
  DropdownNav: RM,
  Footer: kM,
  Month: zM,
  MonthCaption: jM,
  MonthGrid: YM,
  Months: HM,
  MonthsDropdown: BM,
  Nav: UM,
  NextMonthButton: LM,
  Option: qM,
  PreviousMonthButton: PM,
  Root: GM,
  Select: WM,
  Week: VM,
  WeekNumber: QM,
  WeekNumberHeader: ZM,
  Weekday: XM,
  Weekdays: FM,
  Weeks: IM,
  YearsDropdown: KM
}, Symbol.toStringTag, { value: "Module" }));
function va(n, a, l = !1, o = Fn) {
  let { from: s, to: f } = n;
  const { differenceInCalendarDays: d, isSameDay: m } = o;
  return s && f ? (d(f, s) < 0 && ([s, f] = [f, s]), d(a, s) >= (l ? 1 : 0) && d(f, a) >= (l ? 1 : 0)) : !l && f ? m(f, a) : !l && s ? m(s, a) : !1;
}
function Vd(n) {
  return !!(n && typeof n == "object" && "before" in n && "after" in n);
}
function Js(n) {
  return !!(n && typeof n == "object" && "from" in n);
}
function Xd(n) {
  return !!(n && typeof n == "object" && "after" in n);
}
function Fd(n) {
  return !!(n && typeof n == "object" && "before" in n);
}
function e0(n) {
  return !!(n && typeof n == "object" && "dayOfWeek" in n);
}
function t0(n, a) {
  return Array.isArray(n) && n.every(a.isDate);
}
function ba(n, a, l = Fn) {
  const o = Array.isArray(a) ? a : [a], { isSameDay: s, differenceInCalendarDays: f, isAfter: d } = l;
  return o.some((m) => {
    if (typeof m == "boolean")
      return m;
    if (l.isDate(m))
      return s(n, m);
    if (t0(m, l))
      return m.some((h) => s(n, h));
    if (Js(m))
      return va(m, n, !1, l);
    if (e0(m))
      return Array.isArray(m.dayOfWeek) ? m.dayOfWeek.includes(n.getDay()) : m.dayOfWeek === n.getDay();
    if (Vd(m)) {
      const h = f(m.before, n), p = f(m.after, n), b = h > 0, y = p < 0;
      return d(m.before, m.after) ? y && b : b || y;
    }
    return Xd(m) ? f(n, m.after) > 0 : Fd(m) ? f(m.before, n) > 0 : typeof m == "function" ? m(n) : !1;
  });
}
function JM(n, a, l, o, s) {
  const { disabled: f, hidden: d, modifiers: m, showOutsideDays: h, broadcastCalendar: p, today: b = s.today() } = a, { isSameDay: y, isSameMonth: w, startOfMonth: E, isBefore: M, endOfMonth: O, isAfter: C } = s, D = l && E(l), A = o && O(o), _ = {
    [st.focused]: [],
    [st.outside]: [],
    [st.disabled]: [],
    [st.hidden]: [],
    [st.today]: []
  }, T = {};
  for (const j of n) {
    const { date: z, displayMonth: R } = j, U = !!(R && !w(z, R)), F = !!(D && M(z, D)), $ = !!(A && C(z, A)), te = !!(f && ba(z, f, s)), ee = !!(d && ba(z, d, s)) || F || $ || // Broadcast calendar will show outside days as default
    !p && !h && U || p && h === !1 && U, ie = y(z, b);
    U && _.outside.push(j), te && _.disabled.push(j), ee && _.hidden.push(j), ie && _.today.push(j), m && Object.keys(m).forEach((le) => {
      const me = m?.[le];
      me && ba(z, me, s) && (T[le] ? T[le].push(j) : T[le] = [j]);
    });
  }
  return (j) => {
    const z = {
      [st.focused]: !1,
      [st.disabled]: !1,
      [st.hidden]: !1,
      [st.outside]: !1,
      [st.today]: !1
    }, R = {};
    for (const U in _) {
      const F = _[U];
      z[U] = F.some(($) => $ === j);
    }
    for (const U in T)
      R[U] = T[U].some((F) => F === j);
    return {
      ...z,
      // custom modifiers should override all the previous ones
      ...R
    };
  };
}
function eD(n, a, l = {}) {
  return Object.entries(n).filter(([, s]) => s === !0).reduce((s, [f]) => (l[f] ? s.push(l[f]) : a[st[f]] ? s.push(a[st[f]]) : a[Dn[f]] && s.push(a[Dn[f]]), s), [a[pe.Day]]);
}
function tD(n) {
  return {
    ...$M,
    ...n
  };
}
function nD(n) {
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
function Qd() {
  const n = {};
  for (const a in pe)
    n[pe[a]] = `rdp-${pe[a]}`;
  for (const a in st)
    n[st[a]] = `rdp-${st[a]}`;
  for (const a in Dn)
    n[Dn[a]] = `rdp-${Dn[a]}`;
  for (const a in sn)
    n[sn[a]] = `rdp-${sn[a]}`;
  return n;
}
function n0(n, a, l) {
  return (l ?? new Ut(a)).formatMonthYear(n);
}
const aD = n0;
function rD(n, a, l) {
  return (l ?? new Ut(a)).format(n, "d");
}
function oD(n, a = Fn) {
  return a.format(n, "LLLL");
}
function lD(n, a, l) {
  return (l ?? new Ut(a)).format(n, "cccccc");
}
function iD(n, a = Fn) {
  return n < 10 ? a.formatNumber(`0${n.toLocaleString()}`) : a.formatNumber(`${n.toLocaleString()}`);
}
function sD() {
  return "";
}
function a0(n, a = Fn) {
  return a.format(n, "yyyy");
}
const cD = a0, uD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: n0,
  formatDay: rD,
  formatMonthCaption: aD,
  formatMonthDropdown: oD,
  formatWeekNumber: iD,
  formatWeekNumberHeader: sD,
  formatWeekdayName: lD,
  formatYearCaption: cD,
  formatYearDropdown: a0
}, Symbol.toStringTag, { value: "Module" }));
function fD(n) {
  return n?.formatMonthCaption && !n.formatCaption && (n.formatCaption = n.formatMonthCaption), n?.formatYearCaption && !n.formatYearDropdown && (n.formatYearDropdown = n.formatYearCaption), {
    ...uD,
    ...n
  };
}
function Zd(n, a, l, o) {
  let s = (o ?? new Ut(l)).format(n, "PPPP");
  return a.today && (s = `Today, ${s}`), a.selected && (s = `${s}, selected`), s;
}
const dD = Zd;
function Id(n, a, l) {
  return (l ?? new Ut(a)).formatMonthYear(n);
}
const mD = Id;
function r0(n, a, l, o) {
  let s = (o ?? new Ut(l)).format(n, "PPPP");
  return a?.today && (s = `Today, ${s}`), s;
}
function o0(n) {
  return "Choose the Month";
}
function l0() {
  return "";
}
const hD = "Go to the Next Month";
function i0(n, a) {
  return hD;
}
function s0(n) {
  return "Go to the Previous Month";
}
function c0(n, a, l) {
  return (l ?? new Ut(a)).format(n, "cccc");
}
function u0(n, a) {
  return `Week ${n}`;
}
function f0(n) {
  return "Week Number";
}
function d0(n) {
  return "Choose the Year";
}
const pD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: mD,
  labelDay: dD,
  labelDayButton: Zd,
  labelGrid: Id,
  labelGridcell: r0,
  labelMonthDropdown: o0,
  labelNav: l0,
  labelNext: i0,
  labelPrevious: s0,
  labelWeekNumber: u0,
  labelWeekNumberHeader: f0,
  labelWeekday: c0,
  labelYearDropdown: d0
}, Symbol.toStringTag, { value: "Module" })), Tn = (n, a, l) => a || (l ? typeof l == "function" ? l : (...o) => l : n);
function gD(n, a) {
  const l = a.locale?.labels ?? {};
  return {
    ...pD,
    ...n ?? {},
    labelDayButton: Tn(Zd, n?.labelDayButton, l.labelDayButton),
    labelMonthDropdown: Tn(o0, n?.labelMonthDropdown, l.labelMonthDropdown),
    labelNext: Tn(i0, n?.labelNext, l.labelNext),
    labelPrevious: Tn(s0, n?.labelPrevious, l.labelPrevious),
    labelWeekNumber: Tn(u0, n?.labelWeekNumber, l.labelWeekNumber),
    labelYearDropdown: Tn(d0, n?.labelYearDropdown, l.labelYearDropdown),
    labelGrid: Tn(Id, n?.labelGrid, l.labelGrid),
    labelGridcell: Tn(r0, n?.labelGridcell, l.labelGridcell),
    labelNav: Tn(l0, n?.labelNav, l.labelNav),
    labelWeekNumberHeader: Tn(f0, n?.labelWeekNumberHeader, l.labelWeekNumberHeader),
    labelWeekday: Tn(c0, n?.labelWeekday, l.labelWeekday)
  };
}
function yD(n, a, l, o, s) {
  const { startOfMonth: f, startOfYear: d, endOfYear: m, eachMonthOfInterval: h, getMonth: p } = s;
  return h({
    start: d(n),
    end: m(n)
  }).map((w) => {
    const E = o.formatMonthDropdown(w, s), M = p(w), O = a && w < f(a) || l && w > f(l) || !1;
    return { value: M, label: E, disabled: O };
  });
}
function vD(n, a = {}, l = {}) {
  let o = { ...a?.[pe.Day] };
  return Object.entries(n).filter(([, s]) => s === !0).forEach(([s]) => {
    o = {
      ...o,
      ...l?.[s]
    };
  }), o;
}
function bD(n, a, l, o) {
  const s = o ?? n.today(), f = l ? n.startOfBroadcastWeek(s, n) : a ? n.startOfISOWeek(s) : n.startOfWeek(s), d = [];
  for (let m = 0; m < 7; m++) {
    const h = n.addDays(f, m);
    d.push(h);
  }
  return d;
}
function xD(n, a, l, o, s = !1) {
  if (!n || !a)
    return;
  const { startOfYear: f, endOfYear: d, eachYearOfInterval: m, getYear: h } = o, p = f(n), b = d(a), y = m({ start: p, end: b });
  return s && y.reverse(), y.map((w) => {
    const E = l.formatYearDropdown(w, o);
    return {
      value: h(w),
      label: E,
      disabled: !1
    };
  });
}
function wD(n, a = {}) {
  const { weekStartsOn: l, locale: o } = a, s = l ?? o?.options?.weekStartsOn ?? 0, f = (m) => {
    const h = typeof m == "number" || typeof m == "string" ? new Date(m) : m;
    return new qt(h.getFullYear(), h.getMonth(), h.getDate(), 12, 0, 0, n);
  }, d = (m) => {
    const h = f(m);
    return new Date(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => f(qt.tz(n)),
    newDate: (m, h, p) => new qt(m, h, p, 12, 0, 0, n),
    startOfDay: (m) => f(m),
    startOfWeek: (m, h) => {
      const p = f(m), b = h?.weekStartsOn ?? s, y = (p.getDay() - b + 7) % 7;
      return p.setDate(p.getDate() - y), p;
    },
    startOfISOWeek: (m) => {
      const h = f(m), p = (h.getDay() - 1 + 7) % 7;
      return h.setDate(h.getDate() - p), h;
    },
    startOfMonth: (m) => {
      const h = f(m);
      return h.setDate(1), h;
    },
    startOfYear: (m) => {
      const h = f(m);
      return h.setMonth(0, 1), h;
    },
    endOfWeek: (m, h) => {
      const p = f(m), w = (((h?.weekStartsOn ?? s) + 6) % 7 - p.getDay() + 7) % 7;
      return p.setDate(p.getDate() + w), p;
    },
    endOfISOWeek: (m) => {
      const h = f(m), p = (7 - h.getDay()) % 7;
      return h.setDate(h.getDate() + p), h;
    },
    endOfMonth: (m) => {
      const h = f(m);
      return h.setMonth(h.getMonth() + 1, 0), h;
    },
    endOfYear: (m) => {
      const h = f(m);
      return h.setMonth(11, 31), h;
    },
    eachMonthOfInterval: (m) => {
      const h = f(m.start), p = f(m.end), b = [], y = new qt(h.getFullYear(), h.getMonth(), 1, 12, 0, 0, n), w = p.getFullYear() * 12 + p.getMonth();
      for (; y.getFullYear() * 12 + y.getMonth() <= w; )
        b.push(new qt(y, n)), y.setMonth(y.getMonth() + 1, 1);
      return b;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (m, h) => {
      const p = f(m);
      return p.setDate(p.getDate() + h), p;
    },
    addWeeks: (m, h) => {
      const p = f(m);
      return p.setDate(p.getDate() + h * 7), p;
    },
    addMonths: (m, h) => {
      const p = f(m);
      return p.setMonth(p.getMonth() + h), p;
    },
    addYears: (m, h) => {
      const p = f(m);
      return p.setFullYear(p.getFullYear() + h), p;
    },
    eachYearOfInterval: (m) => {
      const h = f(m.start), p = f(m.end), b = [], y = new qt(h.getFullYear(), 0, 1, 12, 0, 0, n);
      for (; y.getFullYear() <= p.getFullYear(); )
        b.push(new qt(y, n)), y.setFullYear(y.getFullYear() + 1, 0, 1);
      return b;
    },
    getWeek: (m, h) => {
      const p = d(m);
      return $s(p, {
        weekStartsOn: h?.weekStartsOn ?? s,
        firstWeekContainsDate: h?.firstWeekContainsDate ?? o?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (m) => {
      const h = d(m);
      return Ks(h);
    },
    differenceInCalendarDays: (m, h) => {
      const p = d(m), b = d(h);
      return Ud(p, b);
    },
    differenceInCalendarMonths: (m, h) => {
      const p = d(m), b = d(h);
      return Rb(p, b);
    }
  };
}
const ti = (n) => n instanceof HTMLElement ? n : null, Pf = (n) => [
  ...n.querySelectorAll("[data-animated-month]") ?? []
], SD = (n) => ti(n.querySelector("[data-animated-month]")), Gf = (n) => ti(n.querySelector("[data-animated-caption]")), Wf = (n) => ti(n.querySelector("[data-animated-weeks]")), CD = (n) => ti(n.querySelector("[data-animated-nav]")), ED = (n) => ti(n.querySelector("[data-animated-weekdays]"));
function OD(n, a, { classNames: l, months: o, focused: s, dateLib: f }) {
  const d = x.useRef(null), m = x.useRef(o), h = x.useRef(!1);
  x.useLayoutEffect(() => {
    const p = m.current;
    if (m.current = o, !a || !n.current || // safety check because the ref can be set to anything by consumers
    !(n.current instanceof HTMLElement) || // validation required for the animation to work as expected
    o.length === 0 || p.length === 0 || o.length !== p.length)
      return;
    const b = f.isSameMonth(o[0].date, p[0].date), y = f.isAfter(o[0].date, p[0].date), w = y ? l[sn.caption_after_enter] : l[sn.caption_before_enter], E = y ? l[sn.weeks_after_enter] : l[sn.weeks_before_enter], M = d.current, O = n.current.cloneNode(!0);
    if (O instanceof HTMLElement ? (Pf(O).forEach((_) => {
      if (!(_ instanceof HTMLElement))
        return;
      const T = SD(_);
      T && _.contains(T) && _.removeChild(T);
      const j = Gf(_);
      j && j.classList.remove(w);
      const z = Wf(_);
      z && z.classList.remove(E);
    }), d.current = O) : d.current = null, h.current || b || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    s)
      return;
    const C = M instanceof HTMLElement ? Pf(M) : [], D = Pf(n.current);
    if (D?.every((A) => A instanceof HTMLElement) && C && C.every((A) => A instanceof HTMLElement)) {
      h.current = !0, n.current.style.isolation = "isolate";
      const A = CD(n.current);
      A && (A.style.zIndex = "1"), D.forEach((_, T) => {
        const j = C[T];
        if (!j)
          return;
        _.style.position = "relative", _.style.overflow = "hidden";
        const z = Gf(_);
        z && z.classList.add(w);
        const R = Wf(_);
        R && R.classList.add(E);
        const U = () => {
          h.current = !1, n.current && (n.current.style.isolation = ""), A && (A.style.zIndex = ""), z && z.classList.remove(w), R && R.classList.remove(E), _.style.position = "", _.style.overflow = "", _.contains(j) && _.removeChild(j);
        };
        j.style.pointerEvents = "none", j.style.position = "absolute", j.style.overflow = "hidden", j.setAttribute("aria-hidden", "true");
        const F = ED(j);
        F && (F.style.opacity = "0");
        const $ = Gf(j);
        $ && ($.classList.add(y ? l[sn.caption_before_exit] : l[sn.caption_after_exit]), $.addEventListener("animationend", U));
        const te = Wf(j);
        te && te.classList.add(y ? l[sn.weeks_before_exit] : l[sn.weeks_after_exit]), _.insertBefore(j, _.firstChild);
      });
    }
  });
}
function TD(n, a, l, o) {
  const s = n[0], f = n[n.length - 1], { ISOWeek: d, fixedWeeks: m, broadcastCalendar: h } = l ?? {}, { addDays: p, differenceInCalendarDays: b, differenceInCalendarMonths: y, endOfBroadcastWeek: w, endOfISOWeek: E, endOfMonth: M, endOfWeek: O, isAfter: C, startOfBroadcastWeek: D, startOfISOWeek: A, startOfWeek: _ } = o, T = h ? D(s, o) : d ? A(s) : _(s), j = h ? w(f) : d ? E(M(f)) : O(M(f)), z = a && (h ? w(a) : d ? E(a) : O(a)), R = z && C(j, z) ? z : j, U = b(R, T), F = y(f, s) + 1, $ = [];
  for (let ie = 0; ie <= U; ie++) {
    const le = p(T, ie);
    $.push(le);
  }
  const ee = (h ? 35 : 42) * F;
  if (m && $.length < ee) {
    const ie = ee - $.length;
    for (let le = 0; le < ie; le++) {
      const me = p($[$.length - 1], 1);
      $.push(me);
    }
  }
  return $;
}
function MD(n) {
  const a = [];
  return n.reduce((l, o) => {
    const s = o.weeks.reduce((f, d) => f.concat(d.days.slice()), a.slice());
    return l.concat(s.slice());
  }, a.slice());
}
function DD(n, a, l, o) {
  const { numberOfMonths: s = 1 } = l, f = [];
  for (let d = 0; d < s; d++) {
    const m = o.addMonths(n, d);
    if (a && m > a)
      break;
    f.push(m);
  }
  return f;
}
function Qy(n, a, l, o) {
  const { month: s, defaultMonth: f, today: d = o.today(), numberOfMonths: m = 1 } = n;
  let h = s || f || d;
  const { differenceInCalendarMonths: p, addMonths: b, startOfMonth: y } = o;
  if (l && p(l, h) < m - 1) {
    const w = -1 * (m - 1);
    h = b(l, w);
  }
  return a && p(h, a) < 0 && (h = a), y(h);
}
function _D(n, a, l, o) {
  const { addDays: s, endOfBroadcastWeek: f, endOfISOWeek: d, endOfMonth: m, endOfWeek: h, getISOWeek: p, getWeek: b, startOfBroadcastWeek: y, startOfISOWeek: w, startOfWeek: E } = o, M = n.reduce((O, C) => {
    const D = l.broadcastCalendar ? y(C, o) : l.ISOWeek ? w(C) : E(C), A = l.broadcastCalendar ? f(C) : l.ISOWeek ? d(m(C)) : h(m(C)), _ = a.filter((R) => R >= D && R <= A), T = l.broadcastCalendar ? 35 : 42;
    if (l.fixedWeeks && _.length < T) {
      const R = a.filter((U) => {
        const F = T - _.length;
        return U > A && U <= s(A, F);
      });
      _.push(...R);
    }
    const j = _.reduce((R, U) => {
      const F = l.ISOWeek ? p(U) : b(U), $ = R.find((ee) => ee.weekNumber === F), te = new $b(U, C, o);
      return $ ? $.days.push(te) : R.push(new OM(F, [te])), R;
    }, []), z = new EM(C, j);
    return O.push(z), O;
  }, []);
  return l.reverseMonths ? M.reverse() : M;
}
function ND(n, a) {
  let { startMonth: l, endMonth: o } = n;
  const { startOfYear: s, startOfDay: f, startOfMonth: d, endOfMonth: m, addYears: h, endOfYear: p, newDate: b, today: y } = a, { fromYear: w, toYear: E, fromMonth: M, toMonth: O } = n;
  !l && M && (l = M), !l && w && (l = a.newDate(w, 0, 1)), !o && O && (o = O), !o && E && (o = b(E, 11, 31));
  const C = n.captionLayout === "dropdown" || n.captionLayout === "dropdown-years";
  return l ? l = d(l) : w ? l = b(w, 0, 1) : !l && C && (l = s(h(n.today ?? y(), -100))), o ? o = m(o) : E ? o = b(E, 11, 31) : !o && C && (o = p(n.today ?? y())), [
    l && f(l),
    o && f(o)
  ];
}
function AD(n, a, l, o) {
  if (l.disableNavigation)
    return;
  const { pagedNavigation: s, numberOfMonths: f = 1 } = l, { startOfMonth: d, addMonths: m, differenceInCalendarMonths: h } = o, p = s ? f : 1, b = d(n);
  if (!a)
    return m(b, p);
  if (!(h(a, n) < f))
    return m(b, p);
}
function RD(n, a, l, o) {
  if (l.disableNavigation)
    return;
  const { pagedNavigation: s, numberOfMonths: f } = l, { startOfMonth: d, addMonths: m, differenceInCalendarMonths: h } = o, p = s ? f ?? 1 : 1, b = d(n);
  if (!a)
    return m(b, -p);
  if (!(h(b, a) <= 0))
    return m(b, -p);
}
function kD(n) {
  const a = [];
  return n.reduce((l, o) => l.concat(o.weeks.slice()), a.slice());
}
function ec(n, a) {
  const [l, o] = x.useState(n);
  return [a === void 0 ? l : a, o];
}
function zD(n, a) {
  const [l, o] = ND(n, a), { startOfMonth: s, endOfMonth: f } = a, d = Qy(n, l, o, a), [m, h] = ec(
    d,
    // initialMonth is always computed from props.month if provided
    n.month ? d : void 0
  );
  x.useEffect(() => {
    const T = Qy(n, l, o, a);
    h(T);
  }, [n.timeZone]);
  const { months: p, weeks: b, days: y, previousMonth: w, nextMonth: E } = x.useMemo(() => {
    const T = DD(m, o, { numberOfMonths: n.numberOfMonths }, a), j = TD(T, n.endMonth ? f(n.endMonth) : void 0, {
      ISOWeek: n.ISOWeek,
      fixedWeeks: n.fixedWeeks,
      broadcastCalendar: n.broadcastCalendar
    }, a), z = _D(T, j, {
      broadcastCalendar: n.broadcastCalendar,
      fixedWeeks: n.fixedWeeks,
      ISOWeek: n.ISOWeek,
      reverseMonths: n.reverseMonths
    }, a), R = kD(z), U = MD(z), F = RD(m, l, n, a), $ = AD(m, o, n, a);
    return {
      months: z,
      weeks: R,
      days: U,
      previousMonth: F,
      nextMonth: $
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
  ]), { disableNavigation: M, onMonthChange: O } = n, C = (T) => b.some((j) => j.days.some((z) => z.isEqualTo(T))), D = (T) => {
    if (M)
      return;
    let j = s(T);
    l && j < s(l) && (j = s(l)), o && j > s(o) && (j = s(o)), h(j), O?.(j);
  };
  return {
    months: p,
    weeks: b,
    days: y,
    navStart: l,
    navEnd: o,
    previousMonth: w,
    nextMonth: E,
    goToMonth: D,
    goToDay: (T) => {
      C(T) || D(T.date);
    }
  };
}
var Hn;
(function(n) {
  n[n.Today = 0] = "Today", n[n.Selected = 1] = "Selected", n[n.LastFocused = 2] = "LastFocused", n[n.FocusedModifier = 3] = "FocusedModifier";
})(Hn || (Hn = {}));
function Zy(n) {
  return !n[st.disabled] && !n[st.hidden] && !n[st.outside];
}
function jD(n, a, l, o) {
  let s, f = -1;
  for (const d of n) {
    const m = a(d);
    Zy(m) && (m[st.focused] && f < Hn.FocusedModifier ? (s = d, f = Hn.FocusedModifier) : o?.isEqualTo(d) && f < Hn.LastFocused ? (s = d, f = Hn.LastFocused) : l(d.date) && f < Hn.Selected ? (s = d, f = Hn.Selected) : m[st.today] && f < Hn.Today && (s = d, f = Hn.Today));
  }
  return s || (s = n.find((d) => Zy(a(d)))), s;
}
function YD(n, a, l, o, s, f, d) {
  const { ISOWeek: m, broadcastCalendar: h } = f, { addDays: p, addMonths: b, addWeeks: y, addYears: w, endOfBroadcastWeek: E, endOfISOWeek: M, endOfWeek: O, max: C, min: D, startOfBroadcastWeek: A, startOfISOWeek: _, startOfWeek: T } = d;
  let z = {
    day: p,
    week: y,
    month: b,
    year: w,
    startOfWeek: (R) => h ? A(R, d) : m ? _(R) : T(R),
    endOfWeek: (R) => h ? E(R) : m ? M(R) : O(R)
  }[n](l, a === "after" ? 1 : -1);
  return a === "before" && o ? z = C([o, z]) : a === "after" && s && (z = D([s, z])), z;
}
function m0(n, a, l, o, s, f, d, m = 0) {
  if (m > 365)
    return;
  const h = YD(n, a, l.date, o, s, f, d), p = !!(f.disabled && ba(h, f.disabled, d)), b = !!(f.hidden && ba(h, f.hidden, d)), y = h, w = new $b(h, y, d);
  return !p && !b ? w : m0(n, a, w, o, s, f, d, m + 1);
}
function HD(n, a, l, o, s) {
  const { autoFocus: f } = n, [d, m] = x.useState(), h = jD(a.days, l, o || (() => !1), d), [p, b] = x.useState(f ? h : void 0);
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
      const D = m0(O, C, p, a.navStart, a.navEnd, n, s);
      D && (n.disableNavigation && !a.days.some((_) => _.isEqualTo(D)) || (a.goToDay(D), b(D)));
    }
  };
}
function BD(n, a) {
  const { selected: l, required: o, onSelect: s } = n, [f, d] = ec(l, s ? l : void 0), m = s ? l : f, { isSameDay: h } = a, p = (E) => m?.some((M) => h(M, E)) ?? !1, { min: b, max: y } = n;
  return {
    selected: m,
    select: (E, M, O) => {
      let C = [...m ?? []];
      if (p(E)) {
        if (m?.length === b || o && m?.length === 1)
          return;
        C = m?.filter((D) => !h(D, E));
      } else
        m?.length === y ? C = [E] : C = [...C, E];
      return s || d(C), s?.(C, E, M, O), C;
    },
    isSelected: p
  };
}
function UD(n, a, l = 0, o = 0, s = !1, f = Fn) {
  const { from: d, to: m } = a || {}, { isSameDay: h, isAfter: p, isBefore: b } = f;
  let y;
  if (!d && !m)
    y = { from: n, to: l > 0 ? void 0 : n };
  else if (d && !m)
    h(d, n) ? l === 0 ? y = { from: d, to: n } : s ? y = { from: d, to: void 0 } : y = void 0 : b(n, d) ? y = { from: n, to: d } : y = { from: d, to: n };
  else if (d && m)
    if (h(d, n) && h(m, n))
      s ? y = { from: d, to: m } : y = void 0;
    else if (h(d, n))
      y = { from: d, to: l > 0 ? void 0 : n };
    else if (h(m, n))
      y = { from: n, to: l > 0 ? void 0 : n };
    else if (b(n, d))
      y = { from: n, to: m };
    else if (p(n, d))
      y = { from: d, to: n };
    else if (p(n, m))
      y = { from: d, to: n };
    else
      throw new Error("Invalid range");
  if (y?.from && y?.to) {
    const w = f.differenceInCalendarDays(y.to, y.from);
    o > 0 && w > o ? y = { from: n, to: void 0 } : l > 1 && w < l && (y = { from: n, to: void 0 });
  }
  return y;
}
function LD(n, a, l = Fn) {
  const o = Array.isArray(a) ? a : [a];
  let s = n.from;
  const f = l.differenceInCalendarDays(n.to, n.from), d = Math.min(f, 6);
  for (let m = 0; m <= d; m++) {
    if (o.includes(s.getDay()))
      return !0;
    s = l.addDays(s, 1);
  }
  return !1;
}
function Iy(n, a, l = Fn) {
  return va(n, a.from, !1, l) || va(n, a.to, !1, l) || va(a, n.from, !1, l) || va(a, n.to, !1, l);
}
function qD(n, a, l = Fn) {
  const o = Array.isArray(a) ? a : [a];
  if (o.filter((m) => typeof m != "function").some((m) => typeof m == "boolean" ? m : l.isDate(m) ? va(n, m, !1, l) : t0(m, l) ? m.some((h) => va(n, h, !1, l)) : Js(m) ? m.from && m.to ? Iy(n, { from: m.from, to: m.to }, l) : !1 : e0(m) ? LD(n, m.dayOfWeek, l) : Vd(m) ? l.isAfter(m.before, m.after) ? Iy(n, {
    from: l.addDays(m.after, 1),
    to: l.addDays(m.before, -1)
  }, l) : ba(n.from, m, l) || ba(n.to, m, l) : Xd(m) || Fd(m) ? ba(n.from, m, l) || ba(n.to, m, l) : !1))
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
function PD(n, a) {
  const { disabled: l, excludeDisabled: o, resetOnSelect: s, selected: f, required: d, onSelect: m } = n, [h, p] = ec(f, m ? f : void 0), b = m ? f : h;
  return {
    selected: b,
    select: (E, M, O) => {
      const { min: C, max: D } = n;
      let A;
      if (E) {
        const _ = b?.from, T = b?.to, j = !!_ && !!T, z = !!_ && !!T && a.isSameDay(_, T) && a.isSameDay(E, _);
        s && (j || !b?.from) ? !d && z ? A = void 0 : A = { from: E, to: void 0 } : A = UD(E, b, C, D, d, a);
      }
      return o && l && A?.from && A.to && qD({ from: A.from, to: A.to }, l, a) && (A.from = E, A.to = void 0), m || p(A), m?.(A, E, M, O), A;
    },
    isSelected: (E) => b && va(b, E, !1, a)
  };
}
function GD(n, a) {
  const { selected: l, required: o, onSelect: s } = n, [f, d] = ec(l, s ? l : void 0), m = s ? l : f, { isSameDay: h } = a;
  return {
    selected: m,
    select: (y, w, E) => {
      let M = y;
      return !o && m && m && h(y, m) && (M = void 0), s || d(M), s?.(M, y, w, E), M;
    },
    isSelected: (y) => m ? h(m, y) : !1
  };
}
function WD(n, a) {
  const l = GD(n, a), o = BD(n, a), s = PD(n, a);
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
  return n instanceof qt && n.timeZone === a ? n : new qt(n, a);
}
function zo(n, a, l) {
  return wn(n, a);
}
function Ky(n, a, l) {
  return typeof n == "boolean" || typeof n == "function" ? n : n instanceof Date ? zo(n, a) : Array.isArray(n) ? n.map((o) => o instanceof Date ? zo(o, a) : o) : Js(n) ? {
    ...n,
    from: n.from ? wn(n.from, a) : n.from,
    to: n.to ? wn(n.to, a) : n.to
  } : Vd(n) ? {
    before: zo(n.before, a),
    after: zo(n.after, a)
  } : Xd(n) ? {
    after: zo(n.after, a)
  } : Fd(n) ? {
    before: zo(n.before, a)
  } : n;
}
function Vf(n, a, l) {
  return n && (Array.isArray(n) ? n.map((o) => Ky(o, a)) : Ky(n, a));
}
function VD(n) {
  let a = n;
  const l = a.timeZone;
  if (l && (a = {
    ...n,
    timeZone: l
  }, a.today && (a.today = wn(a.today, l)), a.month && (a.month = wn(a.month, l)), a.defaultMonth && (a.defaultMonth = wn(a.defaultMonth, l)), a.startMonth && (a.startMonth = wn(a.startMonth, l)), a.endMonth && (a.endMonth = wn(a.endMonth, l)), a.mode === "single" && a.selected ? a.selected = wn(a.selected, l) : a.mode === "multiple" && a.selected ? a.selected = a.selected?.map((Ee) => wn(Ee, l)) : a.mode === "range" && a.selected && (a.selected = {
    from: a.selected.from ? wn(a.selected.from, l) : a.selected.from,
    to: a.selected.to ? wn(a.selected.to, l) : a.selected.to
  }), a.disabled !== void 0 && (a.disabled = Vf(a.disabled, l)), a.hidden !== void 0 && (a.hidden = Vf(a.hidden, l)), a.modifiers)) {
    const Ee = {};
    Object.keys(a.modifiers).forEach((He) => {
      Ee[He] = Vf(a.modifiers?.[He], l);
    }), a.modifiers = Ee;
  }
  const { components: o, formatters: s, labels: f, dateLib: d, locale: m, classNames: h } = x.useMemo(() => {
    const Ee = { ...Qb, ...a.locale }, He = a.broadcastCalendar ? 1 : a.weekStartsOn, be = a.noonSafe && a.timeZone ? wD(a.timeZone, {
      weekStartsOn: He,
      locale: Ee
    }) : void 0, Re = a.dateLib && be ? { ...be, ...a.dateLib } : a.dateLib ?? be, mt = new Ut({
      locale: Ee,
      weekStartsOn: He,
      firstWeekContainsDate: a.firstWeekContainsDate,
      useAdditionalWeekYearTokens: a.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: a.useAdditionalDayOfYearTokens,
      timeZone: a.timeZone,
      numerals: a.numerals
    }, Re);
    return {
      dateLib: mt,
      components: tD(a.components),
      formatters: fD(a.formatters),
      labels: gD(a.labels, mt.options),
      locale: Ee,
      classNames: { ...Qd(), ...a.classNames }
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
  const { captionLayout: p, mode: b, navLayout: y, numberOfMonths: w = 1, onDayBlur: E, onDayClick: M, onDayFocus: O, onDayKeyDown: C, onDayMouseEnter: D, onDayMouseLeave: A, onNextClick: _, onPrevClick: T, showWeekNumber: j, styles: z } = a, { formatCaption: R, formatDay: U, formatMonthDropdown: F, formatWeekNumber: $, formatWeekNumberHeader: te, formatWeekdayName: ee, formatYearDropdown: ie } = s, le = zD(a, d), { days: me, months: H, navStart: Q, navEnd: K, previousMonth: ne, nextMonth: W, goToMonth: N } = le, V = JM(me, a, Q, K, d), { isSelected: J, select: ae, selected: re } = WD(a, d) ?? {}, { blur: oe, focused: ve, isFocusTarget: Fe, moveFocus: ye, setFocused: he } = HD(a, le, V, J ?? (() => !1), d), { labelDayButton: Qe, labelGridcell: qe, labelGrid: Ce, labelMonthDropdown: Oe, labelNav: We, labelPrevious: Zn, labelNext: ur, labelWeekday: Da, labelWeekNumber: Ko, labelWeekNumberHeader: $o, labelYearDropdown: Jo } = f, hc = x.useMemo(() => bD(d, a.ISOWeek, a.broadcastCalendar, a.today), [d, a.ISOWeek, a.broadcastCalendar, a.today]), ai = b !== void 0 || M !== void 0, Rt = x.useCallback(() => {
    ne && (N(ne), T?.(ne));
  }, [ne, N, T]), el = x.useCallback(() => {
    W && (N(W), _?.(W));
  }, [N, W, _]), ri = x.useCallback((Ee, He) => (be) => {
    be.preventDefault(), be.stopPropagation(), he(Ee), !He.disabled && (ae?.(Ee.date, He, be), M?.(Ee.date, He, be));
  }, [ae, M, he]), oi = x.useCallback((Ee, He) => (be) => {
    he(Ee), O?.(Ee.date, He, be);
  }, [O, he]), Fr = x.useCallback((Ee, He) => (be) => {
    oe(), E?.(Ee.date, He, be);
  }, [oe, E]), pc = x.useCallback((Ee, He) => (be) => {
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
      const [mt, De] = Re[be.key];
      ye(mt, De);
    }
    C?.(Ee.date, He, be);
  }, [ye, C, a.dir]), li = x.useCallback((Ee, He) => (be) => {
    D?.(Ee.date, He, be);
  }, [D]), gc = x.useCallback((Ee, He) => (be) => {
    A?.(Ee.date, He, be);
  }, [A]), yc = x.useCallback((Ee) => (He) => {
    const be = Number(He.target.value), Re = d.setMonth(d.startOfMonth(Ee), be);
    N(Re);
  }, [d, N]), fr = x.useCallback((Ee) => (He) => {
    const be = Number(He.target.value), Re = d.setYear(d.startOfMonth(Ee), be);
    N(Re);
  }, [d, N]), { className: Pt, style: An } = x.useMemo(() => ({
    className: [h[pe.Root], a.className].filter(Boolean).join(" "),
    style: { ...z?.[pe.Root], ...a.style }
  }), [h, a.className, a.style, z]), Gt = nD(a), ii = x.useRef(null);
  OD(ii, !!a.animate, {
    classNames: h,
    months: H,
    focused: ve,
    dateLib: d
  });
  const vc = {
    dayPickerProps: a,
    selected: re,
    select: ae,
    isSelected: J,
    months: H,
    nextMonth: W,
    previousMonth: ne,
    goToMonth: N,
    getModifiers: V,
    components: o,
    classNames: h,
    styles: z,
    labels: f,
    formatters: s
  };
  return se.createElement(
    Jb.Provider,
    { value: vc },
    se.createElement(
      o.Root,
      { rootRef: a.animate ? ii : void 0, className: Pt, style: An, dir: a.dir, id: a.id, lang: a.lang ?? m.code, nonce: a.nonce, title: a.title, role: a.role, "aria-label": a["aria-label"], "aria-labelledby": a["aria-labelledby"], ...Gt },
      se.createElement(
        o.Months,
        { className: h[pe.Months], style: z?.[pe.Months] },
        !a.hideNavigation && !y && se.createElement(o.Nav, { "data-animated-nav": a.animate ? "true" : void 0, className: h[pe.Nav], style: z?.[pe.Nav], "aria-label": We(), onPreviousClick: Rt, onNextClick: el, previousMonth: ne, nextMonth: W }),
        H.map((Ee, He) => se.createElement(
          o.Month,
          {
            "data-animated-month": a.animate ? "true" : void 0,
            className: h[pe.Month],
            style: z?.[pe.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: He,
            displayIndex: He,
            calendarMonth: Ee
          },
          y === "around" && !a.hideNavigation && He === 0 && se.createElement(
            o.PreviousMonthButton,
            { type: "button", className: h[pe.PreviousMonthButton], tabIndex: ne ? void 0 : -1, "aria-disabled": ne ? void 0 : !0, "aria-label": Zn(ne), onClick: Rt, "data-animated-button": a.animate ? "true" : void 0 },
            se.createElement(o.Chevron, { disabled: ne ? void 0 : !0, className: h[pe.Chevron], orientation: a.dir === "rtl" ? "right" : "left" })
          ),
          se.createElement(o.MonthCaption, { "data-animated-caption": a.animate ? "true" : void 0, className: h[pe.MonthCaption], style: z?.[pe.MonthCaption], calendarMonth: Ee, displayIndex: He }, p?.startsWith("dropdown") ? se.createElement(
            o.DropdownNav,
            { className: h[pe.Dropdowns], style: z?.[pe.Dropdowns] },
            (() => {
              const be = p === "dropdown" || p === "dropdown-months" ? se.createElement(o.MonthsDropdown, { key: "month", className: h[pe.MonthsDropdown], "aria-label": Oe(), classNames: h, components: o, disabled: !!a.disableNavigation, onChange: yc(Ee.date), options: yD(Ee.date, Q, K, s, d), style: z?.[pe.Dropdown], value: d.getMonth(Ee.date) }) : se.createElement("span", { key: "month" }, F(Ee.date, d)), Re = p === "dropdown" || p === "dropdown-years" ? se.createElement(o.YearsDropdown, { key: "year", className: h[pe.YearsDropdown], "aria-label": Jo(d.options), classNames: h, components: o, disabled: !!a.disableNavigation, onChange: fr(Ee.date), options: xD(Q, K, s, d, !!a.reverseYears), style: z?.[pe.Dropdown], value: d.getYear(Ee.date) }) : se.createElement("span", { key: "year" }, ie(Ee.date, d));
              return d.getMonthYearOrder() === "year-first" ? [Re, be] : [be, Re];
            })(),
            se.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, R(Ee.date, d.options, d))
          ) : se.createElement(o.CaptionLabel, { className: h[pe.CaptionLabel], role: "status", "aria-live": "polite" }, R(Ee.date, d.options, d))),
          y === "around" && !a.hideNavigation && He === w - 1 && se.createElement(
            o.NextMonthButton,
            { type: "button", className: h[pe.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": ur(W), onClick: el, "data-animated-button": a.animate ? "true" : void 0 },
            se.createElement(o.Chevron, { disabled: W ? void 0 : !0, className: h[pe.Chevron], orientation: a.dir === "rtl" ? "left" : "right" })
          ),
          He === w - 1 && y === "after" && !a.hideNavigation && se.createElement(o.Nav, { "data-animated-nav": a.animate ? "true" : void 0, className: h[pe.Nav], style: z?.[pe.Nav], "aria-label": We(), onPreviousClick: Rt, onNextClick: el, previousMonth: ne, nextMonth: W }),
          se.createElement(
            o.MonthGrid,
            { role: "grid", "aria-multiselectable": b === "multiple" || b === "range", "aria-label": Ce(Ee.date, d.options, d) || void 0, className: h[pe.MonthGrid], style: z?.[pe.MonthGrid] },
            !a.hideWeekdays && se.createElement(
              o.Weekdays,
              { "data-animated-weekdays": a.animate ? "true" : void 0, className: h[pe.Weekdays], style: z?.[pe.Weekdays] },
              j && se.createElement(o.WeekNumberHeader, { "aria-label": $o(d.options), className: h[pe.WeekNumberHeader], style: z?.[pe.WeekNumberHeader], scope: "col" }, te()),
              hc.map((be) => se.createElement(o.Weekday, { "aria-label": Da(be, d.options, d), className: h[pe.Weekday], key: String(be), style: z?.[pe.Weekday], scope: "col" }, ee(be, d.options, d)))
            ),
            se.createElement(o.Weeks, { "data-animated-weeks": a.animate ? "true" : void 0, className: h[pe.Weeks], style: z?.[pe.Weeks] }, Ee.weeks.map((be) => se.createElement(
              o.Week,
              { className: h[pe.Week], key: be.weekNumber, style: z?.[pe.Week], week: be },
              j && se.createElement(o.WeekNumber, { week: be, style: z?.[pe.WeekNumber], "aria-label": Ko(be.weekNumber, {
                locale: m
              }), className: h[pe.WeekNumber], scope: "row", role: "rowheader" }, $(be.weekNumber, d)),
              be.days.map((Re) => {
                const { date: mt } = Re, De = V(Re);
                if (De[st.focused] = !De.hidden && !!ve?.isEqualTo(Re), De[Dn.selected] = J?.(mt) || De.selected, Js(re)) {
                  const { from: mr, to: In } = re;
                  De[Dn.range_start] = !!(mr && In && d.isSameDay(mt, mr)), De[Dn.range_end] = !!(mr && In && d.isSameDay(mt, In)), De[Dn.range_middle] = va(re, mt, !0, d);
                }
                const dr = vD(De, z, a.modifiersStyles), bc = eD(De, h, a.modifiersClassNames), si = !ai && !De.hidden ? qe(mt, De, d.options, d) : void 0;
                return se.createElement(o.Day, { key: `${Re.isoDate}_${Re.displayMonthId}`, day: Re, modifiers: De, className: bc.join(" "), style: dr, role: "gridcell", "aria-selected": De.selected || void 0, "aria-label": si, "data-day": Re.isoDate, "data-month": Re.outside ? Re.dateMonthId : void 0, "data-selected": De.selected || void 0, "data-disabled": De.disabled || void 0, "data-hidden": De.hidden || void 0, "data-outside": Re.outside || void 0, "data-focused": De.focused || void 0, "data-today": De.today || void 0 }, !De.hidden && ai ? se.createElement(o.DayButton, { className: h[pe.DayButton], style: z?.[pe.DayButton], type: "button", day: Re, modifiers: De, disabled: !De.focused && De.disabled || void 0, "aria-disabled": De.focused && De.disabled || void 0, tabIndex: Fe(Re) ? 0 : -1, "aria-label": Qe(mt, De, d.options, d), onClick: ri(Re, De), onBlur: Fr(Re, De), onFocus: oi(Re, De), onKeyDown: pc(Re, De), onMouseEnter: li(Re, De), onMouseLeave: gc(Re, De) }, U(mt, d.options, d)) : !De.hidden && U(Re.date, d.options, d));
              })
            )))
          )
        ))
      ),
      a.footer && se.createElement(o.Footer, { className: h[pe.Footer], style: z?.[pe.Footer], role: "status", "aria-live": "polite" }, a.footer)
    )
  );
}
function XD({
  className: n,
  classNames: a,
  showOutsideDays: l = !0,
  captionLayout: o = "label",
  buttonVariant: s = "ghost",
  formatters: f,
  components: d,
  ...m
}) {
  const h = Qd();
  return /* @__PURE__ */ v.jsx(
    VD,
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
        ...f
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
          od({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          h.button_previous
        ),
        button_next: we(
          od({ variant: s }),
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
        Root: ({ className: p, rootRef: b, ...y }) => /* @__PURE__ */ v.jsx(
          "div",
          {
            "data-slot": "calendar",
            ref: b,
            className: we(p),
            ...y
          }
        ),
        Chevron: ({ className: p, orientation: b, ...y }) => b === "left" ? /* @__PURE__ */ v.jsx(Ib, { className: we("size-4", p), ...y }) : b === "right" ? /* @__PURE__ */ v.jsx(
          Kb,
          {
            className: we("size-4", p),
            ...y
          }
        ) : /* @__PURE__ */ v.jsx(Wd, { className: we("size-4", p), ...y }),
        DayButton: FD,
        WeekNumber: ({ children: p, ...b }) => /* @__PURE__ */ v.jsx("td", { ...b, children: /* @__PURE__ */ v.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) }),
        ...d
      },
      ...m
    }
  );
}
function FD({
  className: n,
  day: a,
  modifiers: l,
  ...o
}) {
  const s = Qd(), f = x.useRef(null);
  return x.useEffect(() => {
    l.focused && f.current?.focus();
  }, [l.focused]), /* @__PURE__ */ v.jsx(
    je,
    {
      ref: f,
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
var QD = Object.defineProperty, Nt = (n, a) => QD(n, "name", { value: a, configurable: !0 }), fd = "dismissableLayer.update", ZD = "dismissableLayer.pointerDownOutside", ID = "dismissableLayer.focusOutside", $y, h0 = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), p0 = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Nt(function(a, l) {
    const {
      disableOutsidePointerEvents: o = !1,
      deferPointerDownOutside: s = !1,
      onEscapeKeyDown: f,
      onPointerDownOutside: d,
      onFocusOutside: m,
      onInteractOutside: h,
      onDismiss: p,
      ...b
    } = a, y = x.useContext(h0), [w, E] = x.useState(null), M = w?.ownerDocument ?? globalThis?.document, [, O] = x.useState({}), C = at(l, E), D = Array.from(y.layers), [A] = [
      ...y.layersWithOutsidePointerEventsDisabled
    ].slice(-1), _ = A ? D.indexOf(A) : -1, T = w ? D.indexOf(w) : -1, j = y.layersWithOutsidePointerEventsDisabled.size > 0, z = T >= _, R = x.useRef(!1), U = g0(
      (ee) => {
        d?.(ee), h?.(ee), ee.defaultPrevented || p?.();
      },
      {
        ownerDocument: M,
        deferPointerDownOutside: s,
        isDeferredPointerDownOutsideRef: R,
        dismissableSurfaces: y.dismissableSurfaces,
        shouldHandlePointerDownOutside: x.useCallback(
          (ee) => {
            if (!(ee instanceof Node))
              return !1;
            const ie = [...y.branches].some(
              (le) => le.contains(ee)
            );
            return z && !ie;
          },
          [y.branches, z]
        )
      }
    ), F = y0((ee) => {
      if (s && R.current)
        return;
      const ie = ee.target;
      [...y.branches].some((me) => me.contains(ie)) || (m?.(ee), h?.(ee), ee.defaultPrevented || p?.());
    }, M), $ = w ? T === D.length - 1 : !1, te = _n((ee) => {
      ee.key === "Escape" && (f?.(ee), !ee.defaultPrevented && p && (ee.preventDefault(), p()));
    });
    return x.useEffect(() => {
      if ($)
        return M.addEventListener("keydown", te, { capture: !0 }), () => M.removeEventListener("keydown", te, { capture: !0 });
    }, [M, $, te]), x.useEffect(() => {
      if (w)
        return o && (y.layersWithOutsidePointerEventsDisabled.size === 0 && ($y = M.body.style.pointerEvents, M.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(w)), y.layers.add(w), dd(), () => {
          o && (y.layersWithOutsidePointerEventsDisabled.delete(w), y.layersWithOutsidePointerEventsDisabled.size === 0 && (M.body.style.pointerEvents = $y));
        };
    }, [w, M, o, y]), x.useEffect(() => () => {
      w && (y.layers.delete(w), y.layersWithOutsidePointerEventsDisabled.delete(w), dd());
    }, [w, y]), x.useEffect(() => {
      const ee = /* @__PURE__ */ Nt(() => O({}), "handleUpdate");
      return document.addEventListener(fd, ee), () => document.removeEventListener(fd, ee);
    }, []), /* @__PURE__ */ v.jsx(
      rt.div,
      {
        ...b,
        ref: C,
        style: {
          pointerEvents: j ? z ? "auto" : "none" : void 0,
          ...a.style
        },
        onFocusCapture: Ye(a.onFocusCapture, F.onFocusCapture),
        onBlurCapture: Ye(a.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: Ye(
          a.onPointerDownCapture,
          U.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function KD() {
  const n = x.useContext(h0), [a, l] = x.useState(null);
  return x.useEffect(() => {
    if (a)
      return n.dismissableSurfaces.add(a), () => {
        n.dismissableSurfaces.delete(a);
      };
  }, [a, n.dismissableSurfaces]), l;
}
Nt(KD, "useDismissableLayerSurface");
var $D = /* @__PURE__ */ Nt(() => !0, "IS_TRUE");
function g0(n, a) {
  const {
    ownerDocument: l = globalThis?.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: s,
    dismissableSurfaces: f,
    shouldHandlePointerDownOutside: d = $D
  } = a, m = _n(n), h = x.useRef(!1), p = x.useRef(!1), b = x.useRef(/* @__PURE__ */ new Map()), y = x.useRef(() => {
  });
  return x.useEffect(() => {
    function w() {
      p.current = !1, s.current = !1, b.current.clear();
    }
    Nt(w, "resetOutsideInteraction");
    function E() {
      return Array.from(b.current.values()).some(Boolean);
    }
    Nt(E, "isOutsideInteractionIntercepted");
    function M(_) {
      if (!p.current)
        return;
      const T = _.target;
      T instanceof Node && [...f].some((z) => z.contains(T)) || b.current.set(_.type, !0), _.type === "click" && window.setTimeout(() => {
        p.current && y.current();
      }, 0);
    }
    Nt(M, "handleInteractionCapture");
    function O(_) {
      p.current && b.current.set(_.type, !1);
    }
    Nt(O, "handleInteractionBubble");
    const C = /* @__PURE__ */ Nt((_) => {
      if (_.target && !h.current) {
        let T = function() {
          l.removeEventListener("click", y.current);
          const z = E();
          w(), z || Kd(
            ZD,
            m,
            j,
            { discrete: !0 }
          );
        };
        if (Nt(T, "handleAndDispatchPointerDownOutsideEvent"), !d(_.target)) {
          l.removeEventListener("click", y.current), w(), h.current = !1;
          return;
        }
        const j = { originalEvent: _ };
        p.current = !0, s.current = o && _.button === 0, b.current.clear(), !o || _.button !== 0 ? T() : (l.removeEventListener("click", y.current), y.current = T, l.addEventListener("click", y.current, { once: !0 }));
      } else
        l.removeEventListener("click", y.current), w();
      h.current = !1;
    }, "handlePointerDown"), D = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const _ of D)
      l.addEventListener(_, M, !0), l.addEventListener(_, O);
    const A = window.setTimeout(() => {
      l.addEventListener("pointerdown", C);
    }, 0);
    return () => {
      window.clearTimeout(A), l.removeEventListener("pointerdown", C), l.removeEventListener("click", y.current);
      for (const _ of D)
        l.removeEventListener(_, M, !0), l.removeEventListener(_, O);
    };
  }, [
    l,
    m,
    o,
    s,
    f,
    d
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ Nt(() => h.current = !0, "onPointerDownCapture")
  };
}
Nt(g0, "usePointerDownOutside");
function y0(n, a = globalThis?.document) {
  const l = _n(n), o = x.useRef(!1);
  return x.useEffect(() => {
    const s = /* @__PURE__ */ Nt((f) => {
      f.target && !o.current && Kd(ID, l, { originalEvent: f }, {
        discrete: !1
      });
    }, "handleFocus");
    return a.addEventListener("focusin", s), () => a.removeEventListener("focusin", s);
  }, [a, l]), {
    onFocusCapture: /* @__PURE__ */ Nt(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Nt(() => o.current = !1, "onBlurCapture")
  };
}
Nt(y0, "useFocusOutside");
function dd() {
  const n = new CustomEvent(fd);
  document.dispatchEvent(n);
}
Nt(dd, "dispatchUpdate");
function Kd(n, a, l, { discrete: o }) {
  const s = l.originalEvent.target, f = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: l });
  a && s.addEventListener(n, a, { once: !0 }), o ? Kv(s, f) : s.dispatchEvent(f);
}
Nt(Kd, "handleAndDispatchCustomEvent");
var JD = Object.defineProperty, $d = (n, a) => JD(n, "name", { value: a, configurable: !0 }), Es = 0, jo = null;
function e_(n) {
  return tc(), n.children;
}
$d(e_, "FocusGuards");
function tc() {
  x.useEffect(() => {
    jo || (jo = { start: md(), end: md() });
    const { start: n, end: a } = jo;
    return document.body.firstElementChild !== n && document.body.insertAdjacentElement("afterbegin", n), document.body.lastElementChild !== a && document.body.insertAdjacentElement("beforeend", a), Es++, () => {
      Es === 1 && (jo?.start.remove(), jo?.end.remove(), jo = null), Es = Math.max(0, Es - 1);
    };
  }, []);
}
$d(tc, "useFocusGuards");
function md() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
$d(md, "createFocusGuard");
var t_ = Object.defineProperty, Et = (n, a) => t_(n, "name", { value: a, configurable: !0 }), Xf = "focusScope.autoFocusOnMount", Ff = "focusScope.autoFocusOnUnmount", Jy = { bubbles: !1, cancelable: !0 }, v0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Et(function(a, l) {
    const {
      loop: o = !1,
      trapped: s = !1,
      branches: f,
      onMountAutoFocus: d,
      onUnmountAutoFocus: m,
      ...h
    } = a, [p, b] = x.useState(null), y = _n(d), w = _n(m), E = x.useRef(null), M = at(l, b), O = x.useRef(f);
    x.useEffect(() => {
      O.current = f;
    });
    const C = x.useCallback(
      (_) => _ ? p?.contains(_) ? !0 : !!O.current?.some((T) => T.contains(_)) : !1,
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
        let _ = function(R) {
          if (D.paused || !p) return;
          const U = R.target;
          C(U) ? E.current = U : ga(E.current, { select: !0 });
        }, T = function(R) {
          if (D.paused || !p) return;
          const U = R.relatedTarget;
          U !== null && (C(U) || ga(E.current, { select: !0 }));
        }, j = function(R) {
          if (document.activeElement === document.body)
            for (const F of R)
              F.removedNodes.length > 0 && ga(p);
        };
        Et(_, "handleFocusIn"), Et(T, "handleFocusOut"), Et(j, "handleMutations"), document.addEventListener("focusin", _), document.addEventListener("focusout", T);
        const z = new MutationObserver(j);
        return p && z.observe(p, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", _), document.removeEventListener("focusout", T), z.disconnect();
        };
      }
    }, [s, p, D.paused, C]), x.useEffect(() => {
      if (p) {
        ev.add(D);
        const _ = document.activeElement;
        if (!p.contains(_)) {
          const j = new CustomEvent(Xf, Jy);
          p.addEventListener(Xf, y), p.dispatchEvent(j), j.defaultPrevented || (C0(D0(Jd(p)), { select: !0 }), document.activeElement === _ && ga(p));
        }
        return () => {
          p.removeEventListener(Xf, y);
          const j = p.ownerDocument, z = CustomEvent;
          setTimeout(() => {
            const R = new z(Ff, Jy);
            p.addEventListener(Ff, w), p.dispatchEvent(R), R.defaultPrevented || ga(_ ?? j.body, { select: !0 }), p.removeEventListener(Ff, w), ev.remove(D);
          }, 0);
        };
      }
    }, [p, y, w, D]);
    const A = x.useCallback(
      (_) => {
        if (!o && !s || D.paused) return;
        const T = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey, j = document.activeElement;
        if (T && j) {
          const z = _.currentTarget, [R, U] = E0(z);
          R && U ? !_.shiftKey && j === U ? (_.preventDefault(), o && ga(R, { select: !0 })) : _.shiftKey && j === R && (_.preventDefault(), o && ga(U, { select: !0 })) : j === z && _.preventDefault();
        }
      },
      [o, s, D.paused]
    );
    return /* @__PURE__ */ v.jsx(rt.div, { tabIndex: -1, ...h, ref: M, onKeyDown: A });
  }, "FocusScope")
), b0 = x.createContext(null);
function x0({ registry: n, children: a }) {
  return n ? /* @__PURE__ */ v.jsx(b0.Provider, { value: n, children: a }) : a;
}
Et(x0, "FocusScopeBranchProvider");
function w0() {
  const [n, a] = x.useState([]), l = x.useMemo(
    () => ({
      add: /* @__PURE__ */ Et((o) => a((s) => s.includes(o) ? s : [...s, o]), "add"),
      remove: /* @__PURE__ */ Et((o) => a((s) => s.filter((f) => f !== o)), "remove")
    }),
    []
  );
  return { nodes: n, registry: l };
}
Et(w0, "useFocusScopeBranchRegistry");
function S0(n) {
  const a = x.useContext(b0);
  x.useEffect(() => {
    if (!(!n || !a))
      return a.add(n), () => a.remove(n);
  }, [n, a]);
}
Et(S0, "useFocusScopeBranch");
function C0(n, { select: a = !1 } = {}) {
  const l = document.activeElement;
  for (const o of n)
    if (ga(o, { select: a }), document.activeElement !== l) return;
}
Et(C0, "focusFirst");
function E0(n) {
  const a = Jd(n), l = hd(a, n), o = hd(a.reverse(), n);
  return [l, o];
}
Et(E0, "getTabbableEdges");
function Jd(n) {
  const a = [], o = n.ownerDocument.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Et((s) => {
      const f = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || f ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; o.nextNode(); )
    a.push(o.currentNode);
  return a;
}
Et(Jd, "getTabbableCandidates");
function hd(n, a) {
  const l = typeof a.checkVisibility == "function" && a.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of n)
    if (!(l ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : O0(o, { upTo: a })))
      return o;
}
Et(hd, "findVisible");
function O0(n, { upTo: a }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (a !== void 0 && n === a) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
Et(O0, "isHidden");
function T0(n) {
  return n.tagName === "INPUT" && typeof n.select == "function";
}
Et(T0, "isSelectableInput");
function ga(n, { select: a = !1 } = {}) {
  if (n && n.focus) {
    const o = (n.ownerDocument ?? document).activeElement;
    n.focus({ preventScroll: !0 }), n !== o && T0(n) && a && n.select();
  }
}
Et(ga, "focus");
var ev = M0();
function M0() {
  let n = [];
  return {
    add(a) {
      const l = n[0];
      a !== l && l?.pause(), n = pd(n, a), n.unshift(a);
    },
    remove(a) {
      n = pd(n, a), n[0]?.resume();
    }
  };
}
Et(M0, "createFocusScopesStack");
function pd(n, a) {
  const l = [...n], o = l.indexOf(a);
  return o !== -1 && l.splice(o, 1), l;
}
Et(pd, "arrayRemove");
function D0(n) {
  return n.filter((a) => a.tagName !== "A");
}
Et(D0, "removeLinks");
const n_ = ["top", "right", "bottom", "left"], or = Math.min, xa = Math.max, Ps = Math.round, Os = Math.floor, wa = (n) => ({
  x: n,
  y: n
}), a_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _0(n, a, l) {
  return xa(n, or(a, l));
}
function Ea(n, a) {
  return typeof n == "function" ? n(a) : n;
}
function lr(n) {
  return n.split("-")[0];
}
function Qo(n) {
  return n.split("-")[1];
}
function em(n) {
  return n === "x" ? "y" : "x";
}
function tm(n) {
  return n === "y" ? "height" : "width";
}
function Wn(n) {
  const a = n[0];
  return a === "t" || a === "b" ? "y" : "x";
}
function nm(n) {
  return em(Wn(n));
}
function r_(n, a, l) {
  l === void 0 && (l = !1);
  const o = Qo(n), s = nm(n), f = tm(s);
  let d = s === "x" ? o === (l ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return a.reference[f] > a.floating[f] && (d = Gs(d)), [d, Gs(d)];
}
function o_(n) {
  const a = Gs(n);
  return [gd(n), a, gd(a)];
}
function gd(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const tv = ["left", "right"], nv = ["right", "left"], l_ = ["top", "bottom"], i_ = ["bottom", "top"];
function s_(n, a, l) {
  switch (n) {
    case "top":
    case "bottom":
      return l ? a ? nv : tv : a ? tv : nv;
    case "left":
    case "right":
      return a ? l_ : i_;
    default:
      return [];
  }
}
function c_(n, a, l, o) {
  const s = Qo(n);
  let f = s_(lr(n), l === "start", o);
  return s && (f = f.map((d) => d + "-" + s), a && (f = f.concat(f.map(gd)))), f;
}
function Gs(n) {
  const a = lr(n);
  return a_[a] + n.slice(a.length);
}
function u_(n) {
  var a, l, o, s;
  return {
    top: (a = n.top) != null ? a : 0,
    right: (l = n.right) != null ? l : 0,
    bottom: (o = n.bottom) != null ? o : 0,
    left: (s = n.left) != null ? s : 0
  };
}
function N0(n) {
  return typeof n != "number" ? u_(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Ws(n) {
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
function av(n, a, l) {
  let {
    reference: o,
    floating: s
  } = n;
  const f = Wn(a), d = nm(a), m = tm(d), h = lr(a), p = f === "y", b = o.x + o.width / 2 - s.width / 2, y = o.y + o.height / 2 - s.height / 2, w = o[m] / 2 - s[m] / 2;
  let E;
  switch (h) {
    case "top":
      E = {
        x: b,
        y: o.y - s.height
      };
      break;
    case "bottom":
      E = {
        x: b,
        y: o.y + o.height
      };
      break;
    case "right":
      E = {
        x: o.x + o.width,
        y
      };
      break;
    case "left":
      E = {
        x: o.x - s.width,
        y
      };
      break;
    default:
      E = {
        x: o.x,
        y: o.y
      };
  }
  const M = Qo(a);
  return M && (E[d] += w * (M === "end" ? 1 : -1) * (l && p ? -1 : 1)), E;
}
async function f_(n, a) {
  var l;
  a === void 0 && (a = {});
  const {
    x: o,
    y: s,
    platform: f,
    rects: d,
    elements: m,
    strategy: h
  } = n, {
    boundary: p = "clippingAncestors",
    rootBoundary: b = "viewport",
    elementContext: y = "floating",
    altBoundary: w = !1,
    padding: E = 0
  } = Ea(a, n), M = N0(E), C = m[w ? y === "floating" ? "reference" : "floating" : y], D = Ws(await f.getClippingRect({
    element: (l = await (f.isElement == null ? void 0 : f.isElement(C))) == null || l ? C : C.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(m.floating)),
    boundary: p,
    rootBoundary: b,
    strategy: h
  })), A = y === "floating" ? {
    x: o,
    y: s,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, _ = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m.floating)), T = await (f.isElement == null ? void 0 : f.isElement(_)) && await (f.getScale == null ? void 0 : f.getScale(_)) || {
    x: 1,
    y: 1
  }, j = Ws(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: A,
    offsetParent: _,
    strategy: h
  }) : A);
  return {
    top: (D.top - j.top + M.top) / T.y,
    bottom: (j.bottom - D.bottom + M.bottom) / T.y,
    left: (D.left - j.left + M.left) / T.x,
    right: (j.right - D.right + M.right) / T.x
  };
}
const d_ = 50, m_ = async (n, a, l) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: f = [],
    platform: d
  } = l, m = d.detectOverflow ? d : {
    ...d,
    detectOverflow: f_
  }, h = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let p = await d.getElementRects({
    reference: n,
    floating: a,
    strategy: s
  }), {
    x: b,
    y
  } = av(p, o, h), w = o, E = 0;
  const M = {};
  for (let O = 0; O < f.length; O++) {
    const C = f[O];
    if (!C)
      continue;
    const {
      name: D,
      fn: A
    } = C, {
      x: _,
      y: T,
      data: j,
      reset: z
    } = await A({
      x: b,
      y,
      initialPlacement: o,
      placement: w,
      strategy: s,
      middlewareData: M,
      rects: p,
      platform: m,
      elements: {
        reference: n,
        floating: a
      }
    });
    b = _ ?? b, y = T ?? y, M[D] = {
      ...M[D],
      ...j
    }, z && E < d_ && (E++, typeof z == "object" && (z.placement && (w = z.placement), z.rects && (p = z.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: a,
      strategy: s
    }) : z.rects), {
      x: b,
      y
    } = av(p, w, h)), O = -1);
  }
  return {
    x: b,
    y,
    placement: w,
    strategy: s,
    middlewareData: M
  };
}, h_ = (n) => ({
  name: "arrow",
  options: n,
  async fn(a) {
    const {
      x: l,
      y: o,
      placement: s,
      rects: f,
      platform: d,
      elements: m,
      middlewareData: h
    } = a, {
      element: p,
      padding: b = 0
    } = Ea(n, a) || {};
    if (p == null)
      return {};
    const y = N0(b), w = {
      x: l,
      y: o
    }, E = nm(s), M = tm(E), O = await d.getDimensions(p), C = E === "y", D = C ? "top" : "left", A = C ? "bottom" : "right", _ = C ? "clientHeight" : "clientWidth", T = f.reference[M] + f.reference[E] - w[E] - f.floating[M], j = w[E] - f.reference[E], z = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
    let R = z ? z[_] : 0;
    (!R || !await (d.isElement == null ? void 0 : d.isElement(z))) && (R = m.floating[_] || f.floating[M]);
    const U = T / 2 - j / 2, F = R / 2 - O[M] / 2 - 1, $ = or(y[D], F), te = or(y[A], F), ee = R - O[M] - te, ie = R / 2 - O[M] / 2 + U, le = _0($, ie, ee), me = !h.arrow && Qo(s) != null && ie !== le && f.reference[M] / 2 - (ie < $ ? $ : te) - O[M] / 2 < 0, H = me ? ie < $ ? ie - $ : ie - ee : 0;
    return {
      [E]: w[E] + H,
      data: {
        [E]: le,
        centerOffset: ie - le - H,
        ...me && {
          alignmentOffset: H
        }
      },
      reset: me
    };
  }
}), p_ = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(a) {
      var l, o;
      const {
        placement: s,
        middlewareData: f,
        rects: d,
        initialPlacement: m,
        platform: h,
        elements: p
      } = a, {
        mainAxis: b = !0,
        crossAxis: y = !0,
        fallbackPlacements: w,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: M = "none",
        flipAlignment: O = !0,
        ...C
      } = Ea(n, a);
      if ((l = f.arrow) != null && l.alignmentOffset)
        return {};
      const D = lr(s), A = Wn(m), _ = lr(m) === m, T = await (h.isRTL == null ? void 0 : h.isRTL(p.floating)), j = w || (_ || !O ? [Gs(m)] : o_(m)), z = M !== "none";
      !w && z && j.push(...c_(m, O, M, T));
      const R = [m, ...j], U = await h.detectOverflow(a, C), F = [];
      let $ = ((o = f.flip) == null ? void 0 : o.overflows) || [];
      if (b && F.push(U[D]), y) {
        const le = r_(s, d, T);
        F.push(U[le[0]], U[le[1]]);
      }
      if ($ = [...$, {
        placement: s,
        overflows: F
      }], !F.every((le) => le <= 0)) {
        var te, ee;
        const le = (((te = f.flip) == null ? void 0 : te.index) || 0) + 1, me = R[le];
        if (me && (!(y === "alignment" ? A !== Wn(me) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((K) => Wn(K.placement) === A ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: le,
              overflows: $
            },
            reset: {
              placement: me
            }
          };
        let H = (ee = $.filter((Q) => Q.overflows[0] <= 0).sort((Q, K) => Q.overflows[1] - K.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!H)
          switch (E) {
            case "bestFit": {
              var ie;
              const Q = (ie = $.filter((K) => {
                if (z) {
                  const ne = Wn(K.placement);
                  return ne === A || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ne === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((ne) => ne > 0).reduce((ne, W) => ne + W, 0)]).sort((K, ne) => K[1] - ne[1])[0]) == null ? void 0 : ie[0];
              Q && (H = Q);
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
function rv(n, a) {
  return {
    top: n.top - a.height,
    right: n.right - a.width,
    bottom: n.bottom - a.height,
    left: n.left - a.width
  };
}
function ov(n) {
  return n_.some((a) => n[a] >= 0);
}
const g_ = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(a) {
      const {
        rects: l,
        platform: o
      } = a, {
        strategy: s = "referenceHidden",
        ...f
      } = Ea(n, a);
      switch (s) {
        case "referenceHidden": {
          const d = await o.detectOverflow(a, {
            ...f,
            elementContext: "reference"
          }), m = rv(d, l.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: ov(m)
            }
          };
        }
        case "escaped": {
          const d = await o.detectOverflow(a, {
            ...f,
            altBoundary: !0
          }), m = rv(d, l.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: ov(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, A0 = /* @__PURE__ */ new Set(["left", "top"]);
async function y_(n, a) {
  const {
    placement: l,
    platform: o,
    elements: s
  } = n, f = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), d = lr(l), m = Qo(l), h = Wn(l) === "y", p = A0.has(d) ? -1 : 1, b = f && h ? -1 : 1, y = Ea(a, n);
  let {
    mainAxis: w,
    crossAxis: E,
    alignmentAxis: M
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return m && typeof M == "number" && (E = m === "end" ? M * -1 : M), h ? {
    x: E * b,
    y: w * p
  } : {
    x: w * p,
    y: E * b
  };
}
const v_ = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(a) {
      var l, o;
      const {
        x: s,
        y: f,
        placement: d,
        middlewareData: m
      } = a, h = await y_(a, n);
      return d === ((l = m.offset) == null ? void 0 : l.placement) && (o = m.arrow) != null && o.alignmentOffset ? {} : {
        x: s + h.x,
        y: f + h.y,
        data: {
          ...h,
          placement: d
        }
      };
    }
  };
}, b_ = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(a) {
      const {
        x: l,
        y: o,
        placement: s,
        platform: f
      } = a, {
        mainAxis: d = !0,
        crossAxis: m = !1,
        limiter: h = {
          fn: (A) => {
            let {
              x: _,
              y: T
            } = A;
            return {
              x: _,
              y: T
            };
          }
        },
        ...p
      } = Ea(n, a), b = {
        x: l,
        y: o
      }, y = await f.detectOverflow(a, p), w = Wn(s), E = em(w);
      let M = b[E], O = b[w];
      const C = (A, _) => _0(_ + y[A === "y" ? "top" : "left"], _, _ - y[A === "y" ? "bottom" : "right"]);
      d && (M = C(E, M)), m && (O = C(w, O));
      const D = h.fn({
        ...a,
        [E]: M,
        [w]: O
      });
      return {
        ...D,
        data: {
          x: D.x - l,
          y: D.y - o,
          enabled: {
            [E]: d,
            [w]: m
          }
        }
      };
    }
  };
}, x_ = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(a) {
      var l, o;
      const {
        x: s,
        y: f,
        placement: d,
        rects: m,
        middlewareData: h
      } = a, {
        offset: p = 0,
        mainAxis: b = !0,
        crossAxis: y = !0
      } = Ea(n, a), w = {
        x: s,
        y: f
      }, E = Wn(d), M = em(E);
      let O = w[M], C = w[E];
      const D = Ea(p, a), A = typeof D == "number" ? {
        mainAxis: D,
        crossAxis: 0
      } : {
        mainAxis: (l = D.mainAxis) != null ? l : 0,
        crossAxis: (o = D.crossAxis) != null ? o : 0
      };
      if (b) {
        const j = M === "y" ? "height" : "width", z = m.reference[M] - m.floating[j] + A.mainAxis, R = m.reference[M] + m.reference[j] - A.mainAxis;
        O < z ? O = z : O > R && (O = R);
      }
      if (y) {
        var _, T;
        const j = M === "y" ? "width" : "height", z = A0.has(lr(d)), R = m.reference[E] - m.floating[j] + (z && ((_ = h.offset) == null ? void 0 : _[E]) || 0) + (z ? 0 : A.crossAxis), U = m.reference[E] + m.reference[j] + (z ? 0 : ((T = h.offset) == null ? void 0 : T[E]) || 0) - (z ? A.crossAxis : 0);
        C < R ? C = R : C > U && (C = U);
      }
      return {
        [M]: O,
        [E]: C
      };
    }
  };
}, w_ = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(a) {
      const {
        placement: l,
        rects: o,
        platform: s,
        elements: f
      } = a, {
        apply: d = () => {
        },
        ...m
      } = Ea(n, a), h = await s.detectOverflow(a, m), p = lr(l), b = Qo(l), y = Wn(l) === "y", {
        width: w,
        height: E
      } = o.floating;
      let M, O;
      p === "top" || p === "bottom" ? (M = p, O = b === (await (s.isRTL == null ? void 0 : s.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (O = p, M = b === "end" ? "top" : "bottom");
      const C = E - h.top - h.bottom, D = w - h.left - h.right, A = or(E - h[M], C), _ = or(w - h[O], D), T = a.middlewareData.shift, j = !T;
      let z = A, R = _;
      T != null && T.enabled.x && (R = D), T != null && T.enabled.y && (z = C), j && !b && (y ? R = w - 2 * xa(h.left, h.right) : z = E - 2 * xa(h.top, h.bottom)), await d({
        ...a,
        availableWidth: R,
        availableHeight: z
      });
      const U = await s.getDimensions(f.floating);
      return w !== U.width || E !== U.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function nc() {
  return typeof window < "u";
}
function Zo(n) {
  return R0(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Jt(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function Ta(n) {
  var a;
  return (a = (R0(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : a.documentElement;
}
function R0(n) {
  return nc() ? n instanceof Node || n instanceof Jt(n).Node : !1;
}
function Vn(n) {
  return nc() ? n instanceof Element || n instanceof Jt(n).Element : !1;
}
function sr(n) {
  return nc() ? n instanceof HTMLElement || n instanceof Jt(n).HTMLElement : !1;
}
function lv(n) {
  return !nc() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Jt(n).ShadowRoot;
}
function ac(n) {
  const {
    overflow: a,
    overflowX: l,
    overflowY: o,
    display: s
  } = Xn(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + o + l) && s !== "inline" && s !== "contents";
}
function S_(n) {
  return /^(table|td|th)$/.test(Zo(n));
}
function rc(n) {
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
const C_ = /transform|translate|scale|rotate|perspective|filter/, E_ = /paint|layout|strict|content/, Rr = (n) => !!n && n !== "none";
let Qf;
function am(n) {
  const a = Vn(n) ? Xn(n) : n;
  return Rr(a.transform) || Rr(a.translate) || Rr(a.scale) || Rr(a.rotate) || Rr(a.perspective) || !rm() && (Rr(a.backdropFilter) || Rr(a.filter)) || C_.test(a.willChange || "") || E_.test(a.contain || "");
}
function O_(n) {
  let a = Hr(n);
  for (; sr(a) && !Zl(a); ) {
    if (am(a))
      return a;
    if (rc(a))
      return null;
    a = Hr(a);
  }
  return null;
}
function rm() {
  return Qf == null && (Qf = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Qf;
}
function Zl(n) {
  return /^(html|body|#document)$/.test(Zo(n));
}
function Xn(n) {
  return Jt(n).getComputedStyle(n);
}
function oc(n) {
  return Vn(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Hr(n) {
  if (Zo(n) === "html")
    return n;
  const a = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    lv(n) && n.host || // Fallback.
    Ta(n)
  );
  return lv(a) ? a.host : a;
}
function k0(n) {
  const a = Hr(n);
  return Zl(a) ? (n.ownerDocument || n).body : sr(a) && ac(a) ? a : k0(a);
}
function Il(n, a, l) {
  var o;
  a === void 0 && (a = []), l === void 0 && (l = !0);
  const s = k0(n), f = s === ((o = n.ownerDocument) == null ? void 0 : o.body), d = Jt(s);
  if (f) {
    const m = yd(d);
    return a.concat(d, d.visualViewport || [], ac(s) ? s : [], m && l ? Il(m) : []);
  } else
    return a.concat(s, Il(s, [], l));
}
function yd(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function z0(n) {
  const a = Xn(n);
  let l = parseFloat(a.width) || 0, o = parseFloat(a.height) || 0;
  const s = sr(n), f = s ? n.offsetWidth : l, d = s ? n.offsetHeight : o, m = Ps(l) !== f || Ps(o) !== d;
  return m && (l = f, o = d), {
    width: l,
    height: o,
    $: m
  };
}
function om(n) {
  return Vn(n) ? n : n.contextElement;
}
function Po(n) {
  const a = om(n);
  if (!sr(a))
    return wa(1);
  const l = a.getBoundingClientRect(), {
    width: o,
    height: s,
    $: f
  } = z0(a);
  let d = (f ? Ps(l.width) : l.width) / o, m = (f ? Ps(l.height) : l.height) / s;
  return (!d || !Number.isFinite(d)) && (d = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: d,
    y: m
  };
}
const T_ = /* @__PURE__ */ wa(0);
function j0(n) {
  const a = Jt(n);
  return !rm() || !a.visualViewport ? T_ : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function M_(n, a, l) {
  return a === void 0 && (a = !1), !!l && a && l === Jt(n);
}
function Br(n, a, l, o) {
  a === void 0 && (a = !1), l === void 0 && (l = !1);
  const s = n.getBoundingClientRect(), f = om(n);
  let d = wa(1);
  a && (o ? Vn(o) && (d = Po(o)) : d = Po(n));
  const m = M_(f, l, o) ? j0(f) : wa(0);
  let h = (s.left + m.x) / d.x, p = (s.top + m.y) / d.y, b = s.width / d.x, y = s.height / d.y;
  if (f && o) {
    const w = Jt(f), E = Vn(o) ? Jt(o) : o;
    let M = w, O = yd(M);
    for (; O && E !== M; ) {
      const C = Po(O), D = O.getBoundingClientRect(), A = Xn(O), _ = D.left + (O.clientLeft + parseFloat(A.paddingLeft)) * C.x, T = D.top + (O.clientTop + parseFloat(A.paddingTop)) * C.y;
      h *= C.x, p *= C.y, b *= C.x, y *= C.y, h += _, p += T, M = Jt(O), O = yd(M);
    }
  }
  return Ws({
    width: b,
    height: y,
    x: h,
    y: p
  });
}
function lc(n, a) {
  const l = oc(n).scrollLeft;
  return a ? a.left + l : Br(Ta(n)).left + l;
}
function Y0(n, a) {
  const l = n.getBoundingClientRect(), o = l.left + a.scrollLeft - lc(n, l), s = l.top + a.scrollTop;
  return {
    x: o,
    y: s
  };
}
function D_(n) {
  let {
    elements: a,
    rect: l,
    offsetParent: o,
    strategy: s
  } = n;
  const f = s === "fixed", d = Ta(o), m = a ? rc(a.floating) : !1;
  if (o === d || m && f)
    return l;
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = wa(1);
  const b = wa(0), y = sr(o);
  if ((y || !f) && ((Zo(o) !== "body" || ac(d)) && (h = oc(o)), y)) {
    const E = Br(o);
    p = Po(o), b.x = E.x + o.clientLeft, b.y = E.y + o.clientTop;
  }
  const w = d && !y && !f ? Y0(d, h) : wa(0);
  return {
    width: l.width * p.x,
    height: l.height * p.y,
    x: l.x * p.x - h.scrollLeft * p.x + b.x + w.x,
    y: l.y * p.y - h.scrollTop * p.y + b.y + w.y
  };
}
function __(n) {
  return n.getClientRects ? Array.from(n.getClientRects()) : [];
}
function N_(n) {
  const a = oc(n), l = n.ownerDocument.body, o = xa(n.scrollWidth, n.clientWidth, l.scrollWidth, l.clientWidth), s = xa(n.scrollHeight, n.clientHeight, l.scrollHeight, l.clientHeight);
  let f = -a.scrollLeft + lc(n);
  const d = -a.scrollTop;
  return Xn(l).direction === "rtl" && (f += xa(n.clientWidth, l.clientWidth) - o), {
    width: o,
    height: s,
    x: f,
    y: d
  };
}
const A_ = 25;
function R_(n, a, l) {
  l === void 0 && (l = "viewport");
  const o = l === "layoutViewport", s = Jt(n), f = Ta(n), d = s.visualViewport;
  let m = f.clientWidth, h = f.clientHeight, p = 0, b = 0;
  if (d) {
    const w = !rm() || a === "fixed";
    o ? w || (p = -d.offsetLeft, b = -d.offsetTop) : (m = d.width, h = d.height, w && (p = d.offsetLeft, b = d.offsetTop));
  }
  if (lc(f) <= 0) {
    const w = f.ownerDocument, E = w.body, M = getComputedStyle(E), O = w.compatMode === "CSS1Compat" && parseFloat(M.marginLeft) + parseFloat(M.marginRight) || 0, C = Math.abs(f.clientWidth - E.clientWidth - O), D = getComputedStyle(f).scrollbarGutter === "stable both-edges" ? C / 2 : C;
    D <= A_ && (m -= D);
  }
  return {
    width: m,
    height: h,
    x: p,
    y: b
  };
}
function k_(n, a) {
  const l = Br(n, !0, a === "fixed"), o = l.top + n.clientTop, s = l.left + n.clientLeft, f = Po(n), d = n.clientWidth * f.x, m = n.clientHeight * f.y, h = s * f.x, p = o * f.y;
  return {
    width: d,
    height: m,
    x: h,
    y: p
  };
}
function iv(n, a, l) {
  let o;
  if (a === "viewport" || a === "layoutViewport")
    o = R_(n, l, a);
  else if (a === "document")
    o = N_(Ta(n));
  else if (Vn(a))
    o = k_(a, l);
  else {
    const s = j0(n);
    o = {
      x: a.x - s.x,
      y: a.y - s.y,
      width: a.width,
      height: a.height
    };
  }
  return Ws(o);
}
function z_(n, a) {
  const l = a.get(n);
  if (l)
    return l;
  let o = Il(n, [], !1).filter((m) => Vn(m) && Zo(m) !== "body"), s = null;
  const f = Xn(n).position === "fixed";
  let d = f ? Hr(n) : n;
  for (; Vn(d) && !Zl(d); ) {
    const m = Xn(d), h = am(d), p = s ? s.position : f ? "fixed" : "";
    !h && (p === "fixed" || p === "absolute" && m.position === "static") ? o = o.filter((y) => y !== d) : s = m, d = Hr(d);
  }
  return a.set(n, o), o;
}
function j_(n) {
  let {
    element: a,
    boundary: l,
    rootBoundary: o,
    strategy: s
  } = n;
  const d = [...l === "clippingAncestors" ? rc(a) ? [] : z_(a, this._c) : [].concat(l), o], m = iv(a, d[0], s);
  let h = m.top, p = m.right, b = m.bottom, y = m.left;
  for (let w = 1; w < d.length; w++) {
    const E = iv(a, d[w], s);
    h = xa(E.top, h), p = or(E.right, p), b = or(E.bottom, b), y = xa(E.left, y);
  }
  return {
    width: p - y,
    height: b - h,
    x: y,
    y: h
  };
}
function Y_(n) {
  const {
    width: a,
    height: l
  } = z0(n);
  return {
    width: a,
    height: l
  };
}
function H_(n, a, l) {
  const o = sr(a), s = Ta(a), f = l === "fixed", d = Br(n, !0, f, a);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const h = wa(0);
  if ((o || !f) && ((Zo(a) !== "body" || ac(s)) && (m = oc(a)), o)) {
    const w = Br(a, !0, f, a);
    h.x = w.x + a.clientLeft, h.y = w.y + a.clientTop;
  }
  !o && s && (h.x = lc(s));
  const p = s && !o && !f ? Y0(s, m) : wa(0), b = d.left + m.scrollLeft - h.x - p.x, y = d.top + m.scrollTop - h.y - p.y;
  return {
    x: b,
    y,
    width: d.width,
    height: d.height
  };
}
function Zf(n) {
  return Xn(n).position === "static";
}
function sv(n, a) {
  if (!sr(n) || Xn(n).position === "fixed")
    return null;
  if (a)
    return a(n);
  let l = n.offsetParent;
  return Ta(n) === l && (l = l.ownerDocument.body), l;
}
function H0(n, a) {
  const l = Jt(n);
  if (rc(n))
    return l;
  if (!sr(n)) {
    let s = Hr(n);
    for (; s && !Zl(s); ) {
      if (Vn(s) && !Zf(s))
        return s;
      s = Hr(s);
    }
    return l;
  }
  let o = sv(n, a);
  for (; o && S_(o) && Zf(o); )
    o = sv(o, a);
  return o && Zl(o) && Zf(o) && !am(o) ? l : o || O_(n) || l;
}
const B_ = async function(n) {
  const a = this.getOffsetParent || H0, l = this.getDimensions, o = await l(n.floating);
  return {
    reference: H_(n.reference, await a(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function U_(n) {
  return Xn(n).direction === "rtl";
}
const L_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: D_,
  getDocumentElement: Ta,
  getClippingRect: j_,
  getOffsetParent: H0,
  getElementRects: B_,
  getClientRects: __,
  getDimensions: Y_,
  getScale: Po,
  isElement: Vn,
  isRTL: U_
};
function B0(n, a) {
  return n.x === a.x && n.y === a.y && n.width === a.width && n.height === a.height;
}
function q_(n, a, l) {
  let o = null, s;
  const f = Ta(n);
  function d() {
    var b;
    clearTimeout(s), (b = o) == null || b.disconnect(), o = null;
  }
  function m(b, y) {
    b === void 0 && (b = !1), y === void 0 && (y = 1), d();
    const w = n.getBoundingClientRect(), {
      left: E,
      top: M,
      width: O,
      height: C
    } = w;
    if (b || a(), !O || !C)
      return;
    const D = Os(M), A = Os(f.clientWidth - (E + O)), _ = Os(f.clientHeight - (M + C)), T = Os(E), z = {
      rootMargin: -D + "px " + -A + "px " + -_ + "px " + -T + "px",
      threshold: xa(0, or(1, y)) || 1
    };
    let R = !0;
    function U(F) {
      const $ = F[0].intersectionRatio;
      if (!B0(w, n.getBoundingClientRect()))
        return m();
      if ($ !== y) {
        if (!R)
          return m();
        $ ? m(!1, $) : s = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      R = !1;
    }
    try {
      o = new IntersectionObserver(U, {
        ...z,
        // Handle <iframe>s
        root: f.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(U, z);
    }
    o.observe(n);
  }
  const h = Jt(n), p = () => m(l);
  return h.addEventListener("resize", p), m(!0), () => {
    h.removeEventListener("resize", p), d();
  };
}
function P_(n, a, l, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: h = !1
  } = o, p = om(n), b = s || f ? [...p ? Il(p) : [], ...a ? Il(a) : []] : [];
  b.forEach((D) => {
    s && D.addEventListener("scroll", l), f && D.addEventListener("resize", l);
  });
  const y = p && m ? q_(p, l, f) : null;
  let w = -1, E = null;
  d && (E = new ResizeObserver((D) => {
    let [A] = D;
    A && A.target === p && E && a && (E.unobserve(a), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
      var _;
      (_ = E) == null || _.observe(a);
    })), l();
  }), p && !h && E.observe(p), a && E.observe(a));
  let M, O = h ? Br(n) : null;
  h && C();
  function C() {
    const D = Br(n);
    O && !B0(O, D) && l(), O = D, M = requestAnimationFrame(C);
  }
  return l(), () => {
    var D;
    b.forEach((A) => {
      s && A.removeEventListener("scroll", l), f && A.removeEventListener("resize", l);
    }), y?.(), (D = E) == null || D.disconnect(), E = null, h && cancelAnimationFrame(M);
  };
}
const G_ = v_, W_ = b_, V_ = p_, X_ = w_, F_ = g_, cv = h_, Q_ = x_, Z_ = (n, a, l) => {
  const o = /* @__PURE__ */ new Map(), s = l ?? {}, f = {
    ...L_,
    ...s.platform,
    _c: o
  };
  return m_(n, a, {
    ...s,
    platform: f
  });
};
var I_ = typeof document < "u", K_ = function() {
}, ks = I_ ? x.useLayoutEffect : K_;
function Vs(n, a) {
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
        if (!Vs(n[o], a[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(n), l = s.length, l !== Object.keys(a).length)
      return !1;
    for (o = l; o-- !== 0; )
      if (!{}.hasOwnProperty.call(a, s[o]))
        return !1;
    for (o = l; o-- !== 0; ) {
      const f = s[o];
      if (!(f === "_owner" && n.$$typeof) && !Vs(n[f], a[f]))
        return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function U0(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function uv(n, a) {
  const l = U0(n);
  return Math.round(a * l) / l;
}
function If(n) {
  const a = x.useRef(n);
  return ks(() => {
    a.current = n;
  }), a;
}
function $_(n) {
  n === void 0 && (n = {});
  const {
    placement: a = "bottom",
    strategy: l = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: f,
      floating: d
    } = {},
    transform: m = !0,
    whileElementsMounted: h,
    open: p
  } = n, [b, y] = x.useState({
    x: 0,
    y: 0,
    strategy: l,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [w, E] = x.useState(o);
  Vs(w, o) || E(o);
  const [M, O] = x.useState(null), [C, D] = x.useState(null), A = x.useCallback((K) => {
    K !== z.current && (z.current = K, O(K));
  }, []), _ = x.useCallback((K) => {
    K !== R.current && (R.current = K, D(K));
  }, []), T = f || M, j = d || C, z = x.useRef(null), R = x.useRef(null), U = x.useRef(b), F = h != null, $ = If(h), te = If(s), ee = If(p), ie = x.useCallback(() => {
    if (!z.current || !R.current)
      return;
    const K = {
      placement: a,
      strategy: l,
      middleware: w
    };
    te.current && (K.platform = te.current), Z_(z.current, R.current, K).then((ne) => {
      const W = {
        ...ne,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ee.current !== !1
      };
      le.current && !Vs(U.current, W) && (U.current = W, $l.flushSync(() => {
        y(W);
      }));
    });
  }, [w, a, l, te, ee]);
  ks(() => {
    p === !1 && U.current.isPositioned && (U.current.isPositioned = !1, y((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [p]);
  const le = x.useRef(!1);
  ks(() => (le.current = !0, () => {
    le.current = !1;
  }), []), ks(() => {
    if (T && (z.current = T), j && (R.current = j), T && j) {
      if ($.current)
        return $.current(T, j, ie);
      ie();
    }
  }, [T, j, ie, $, F]);
  const me = x.useMemo(() => ({
    reference: z,
    floating: R,
    setReference: A,
    setFloating: _
  }), [A, _]), H = x.useMemo(() => ({
    reference: T,
    floating: j
  }), [T, j]), Q = x.useMemo(() => {
    const K = {
      position: l,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return K;
    const ne = uv(H.floating, b.x), W = uv(H.floating, b.y);
    return m ? {
      ...K,
      transform: "translate(" + ne + "px, " + W + "px)",
      ...U0(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: l,
      left: ne,
      top: W
    };
  }, [l, m, H.floating, b.x, b.y]);
  return x.useMemo(() => ({
    ...b,
    update: ie,
    refs: me,
    elements: H,
    floatingStyles: Q
  }), [b, ie, me, H, Q]);
}
const J_ = (n) => {
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
      return o && a(o) ? o.current != null ? cv({
        element: o.current,
        padding: s
      }).fn(l) : {} : o ? cv({
        element: o,
        padding: s
      }).fn(l) : {};
    }
  };
}, e2 = (n, a) => {
  const l = G_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, t2 = (n, a) => {
  const l = W_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, n2 = (n, a) => ({
  fn: Q_(n).fn,
  options: [n, a]
}), a2 = (n, a) => {
  const l = V_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, r2 = (n, a) => {
  const l = X_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, o2 = (n, a) => {
  const l = F_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, l2 = (n, a) => {
  const l = J_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
};
var i2 = Object.defineProperty, ar = (n, a) => i2(n, "name", { value: a, configurable: !0 }), fv = {
  Partial: "partial"
}, dv = {
  Optimized: "optimized",
  Always: "always"
}, L0 = "Popper", [q0, ic] = /* @__PURE__ */ Oa(L0), [s2, P0] = q0(L0), G0 = /* @__PURE__ */ ar((n) => {
  const { __scopePopper: a, children: l } = n, [o, s] = x.useState(null), [f, d] = x.useState(void 0);
  return /* @__PURE__ */ v.jsx(
    s2,
    {
      scope: a,
      anchor: o,
      onAnchorChange: s,
      placementState: f,
      setPlacementState: d,
      children: l
    }
  );
}, "Popper"), c2 = "PopperAnchor", W0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ ar(function(a, l) {
    const { __scopePopper: o, virtualRef: s, ...f } = a, d = P0(c2, o), m = x.useRef(null), h = d.onAnchorChange, p = x.useCallback(
      (O) => {
        m.current = O, O && h(O);
      },
      [h]
    ), b = at(l, p), y = x.useRef(null);
    x.useEffect(() => {
      if (!s)
        return;
      const O = y.current;
      y.current = s.current, O !== y.current && h(y.current);
    });
    const w = d.placementState && sc(d.placementState), E = w?.[0], M = w?.[1];
    return s ? null : /* @__PURE__ */ v.jsx(
      rt.div,
      {
        "data-radix-popper-side": E,
        "data-radix-popper-align": M,
        ...f,
        ref: b
      }
    );
  }, "PopperAnchor")
), V0 = "PopperContent", [u2, SA] = q0(V0), X0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ ar(function(a, l) {
    const {
      __scopePopper: o,
      side: s = "bottom",
      sideOffset: f = 0,
      align: d = "center",
      alignOffset: m = 0,
      arrowPadding: h = 0,
      avoidCollisions: p = !0,
      collisionBoundary: b = [],
      collisionPadding: y = 0,
      sticky: w = fv.Partial,
      hideWhenDetached: E = !1,
      updatePositionStrategy: M = dv.Optimized,
      onPlaced: O,
      ...C
    } = a, D = P0(V0, o), [A, _] = x.useState(null), T = at(l, _), [j, z] = x.useState(null), R = Md(j), U = R?.width ?? 0, F = R?.height ?? 0, $ = s + (d !== "center" ? "-" + d : ""), te = typeof y == "number" ? y : { top: 0, right: 0, bottom: 0, left: 0, ...y }, ee = Array.isArray(b) ? b : [b], ie = ee.length > 0, le = {
      padding: te,
      boundary: ee.filter(F0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ie
    }, { refs: me, floatingStyles: H, placement: Q, isPositioned: K, middlewareData: ne } = $_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: $,
      whileElementsMounted: /* @__PURE__ */ ar((...ye) => P_(...ye, {
        animationFrame: M === dv.Always
      }), "whileElementsMounted"),
      elements: {
        reference: D.anchor
      },
      middleware: [
        e2({ mainAxis: f + F, alignmentAxis: m }),
        p && t2({
          mainAxis: !0,
          crossAxis: !1,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...w === fv.Partial ? { limiter: n2() } : {},
          ...le
        }),
        p && a2({ ...le }),
        r2({
          ...le,
          apply: /* @__PURE__ */ ar(({ elements: ye, rects: he, availableWidth: Qe, availableHeight: qe }) => {
            const { width: Ce, height: Oe } = he.reference, We = ye.floating.style;
            We.setProperty("--radix-popper-available-width", `${Qe}px`), We.setProperty("--radix-popper-available-height", `${qe}px`), We.setProperty("--radix-popper-anchor-width", `${Ce}px`), We.setProperty("--radix-popper-anchor-height", `${Oe}px`);
          }, "apply")
        }),
        j && l2({ element: j, padding: h }),
        f2({ arrowWidth: U, arrowHeight: F }),
        E && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        o2(
          ie ? { strategy: "referenceHidden", ...le } : {
            strategy: "referenceHidden",
            padding: le.padding,
            altBoundary: le.altBoundary
          }
        )
      ]
    }), W = D.setPlacementState;
    bt(() => (W(Q), () => {
      W(void 0);
    }), [Q, W]);
    const [N, V] = sc(Q), J = _n(O);
    bt(() => {
      K && J?.();
    }, [K, J]);
    const ae = ne.arrow?.x, re = ne.arrow?.y, oe = ne.arrow?.centerOffset !== 0, [ve, Fe] = x.useState();
    return bt(() => {
      A && Fe(window.getComputedStyle(A).zIndex);
    }, [A]), /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: me.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: K ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            ne.transformOrigin?.x,
            ne.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...ne.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: a.dir,
        children: /* @__PURE__ */ v.jsx(
          u2,
          {
            scope: o,
            placedSide: N,
            placedAlign: V,
            onArrowChange: z,
            arrowX: ae,
            arrowY: re,
            shouldHideArrow: oe,
            children: /* @__PURE__ */ v.jsx(
              rt.div,
              {
                "data-side": N,
                "data-align": V,
                ...C,
                ref: T,
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
function F0(n) {
  return n !== null;
}
ar(F0, "isNotNull");
var f2 = /* @__PURE__ */ ar((n) => ({
  name: "transformOrigin",
  options: n,
  fn(a) {
    const { placement: l, rects: o, middlewareData: s } = a, d = s.arrow?.centerOffset !== 0, m = d ? 0 : n.arrowWidth, h = d ? 0 : n.arrowHeight, [p, b] = sc(l), y = { start: "0%", center: "50%", end: "100%" }[b], w = (s.arrow?.x ?? 0) + m / 2, E = (s.arrow?.y ?? 0) + h / 2;
    let M = "", O = "";
    return p === "bottom" ? (M = d ? y : `${w}px`, O = `${-h}px`) : p === "top" ? (M = d ? y : `${w}px`, O = `${o.floating.height + h}px`) : p === "right" ? (M = `${-h}px`, O = d ? y : `${E}px`) : p === "left" && (M = `${o.floating.width + h}px`, O = d ? y : `${E}px`), { data: { x: M, y: O } };
  }
}), "transformOrigin");
function sc(n) {
  const [a, l = "center"] = n.split("-");
  return [a, l];
}
ar(sc, "getSideAndAlignFromPlacement");
var d2 = Object.defineProperty, m2 = (n, a) => d2(n, "name", { value: a, configurable: !0 }), Q0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ m2(function(a, l) {
    const { container: o, ...s } = a, [f, d] = x.useState(!1);
    bt(() => d(!0), []);
    const m = o || f && globalThis?.document?.body;
    return m ? $l.createPortal(/* @__PURE__ */ v.jsx(rt.div, { ...s, ref: l }), m) : null;
  }, "Portal")
), h2 = function(n) {
  if (typeof document > "u")
    return null;
  var a = Array.isArray(n) ? n[0] : n;
  return a.ownerDocument.body;
}, Yo = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), Ms = {}, Kf = 0, Z0 = function(n) {
  return n && (n.host || Z0(n.parentNode));
}, p2 = function(n, a) {
  return a.map(function(l) {
    if (n.contains(l))
      return l;
    var o = Z0(l);
    return o && n.contains(o) ? o : (console.error("aria-hidden", l, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(l) {
    return !!l;
  });
}, g2 = function(n, a, l, o) {
  var s = p2(a, Array.isArray(n) ? n : [n]);
  Ms[l] || (Ms[l] = /* @__PURE__ */ new WeakMap());
  var f = Ms[l], d = [], m = /* @__PURE__ */ new Set(), h = new Set(s), p = function(y) {
    !y || m.has(y) || (m.add(y), p(y.parentNode));
  };
  s.forEach(p);
  var b = function(y) {
    !y || h.has(y) || Array.prototype.forEach.call(y.children, function(w) {
      if (m.has(w))
        b(w);
      else
        try {
          var E = w.getAttribute(o), M = E !== null && E !== "false", O = (Yo.get(w) || 0) + 1, C = (f.get(w) || 0) + 1;
          Yo.set(w, O), f.set(w, C), d.push(w), O === 1 && M && Ts.set(w, !0), C === 1 && w.setAttribute(l, "true"), M || w.setAttribute(o, "true");
        } catch (D) {
          console.error("aria-hidden: cannot operate on ", w, D);
        }
    });
  };
  return b(a), m.clear(), Kf++, function() {
    d.forEach(function(y) {
      var w = Yo.get(y) - 1, E = f.get(y) - 1;
      Yo.set(y, w), f.set(y, E), w || (Ts.has(y) || y.removeAttribute(o), Ts.delete(y)), E || y.removeAttribute(l);
    }), Kf--, Kf || (Yo = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), Ms = {});
  };
}, I0 = function(n, a, l) {
  l === void 0 && (l = "data-aria-hidden");
  var o = Array.from(Array.isArray(n) ? n : [n]), s = h2(n);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), g2(o, s, l, "aria-hidden")) : function() {
    return null;
  };
}, Pn = function() {
  return Pn = Object.assign || function(a) {
    for (var l, o = 1, s = arguments.length; o < s; o++) {
      l = arguments[o];
      for (var f in l) Object.prototype.hasOwnProperty.call(l, f) && (a[f] = l[f]);
    }
    return a;
  }, Pn.apply(this, arguments);
};
function K0(n, a) {
  var l = {};
  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && a.indexOf(o) < 0 && (l[o] = n[o]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(n); s < o.length; s++)
      a.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[s]) && (l[o[s]] = n[o[s]]);
  return l;
}
function y2(n, a, l) {
  if (l || arguments.length === 2) for (var o = 0, s = a.length, f; o < s; o++)
    (f || !(o in a)) && (f || (f = Array.prototype.slice.call(a, 0, o)), f[o] = a[o]);
  return n.concat(f || Array.prototype.slice.call(a));
}
var zs = "right-scroll-bar-position", js = "width-before-scroll-bar", v2 = "with-scroll-bars-hidden", b2 = "--removed-body-scroll-bar-size";
function $f(n, a) {
  return typeof n == "function" ? n(a) : n && (n.current = a), n;
}
function x2(n, a) {
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
var w2 = typeof window < "u" ? x.useLayoutEffect : x.useEffect, mv = /* @__PURE__ */ new WeakMap();
function S2(n, a) {
  var l = x2(null, function(o) {
    return n.forEach(function(s) {
      return $f(s, o);
    });
  });
  return w2(function() {
    var o = mv.get(l);
    if (o) {
      var s = new Set(o), f = new Set(n), d = l.current;
      s.forEach(function(m) {
        f.has(m) || $f(m, null);
      }), f.forEach(function(m) {
        s.has(m) || $f(m, d);
      });
    }
    mv.set(l, n);
  }, [n]), l;
}
function C2(n) {
  return n;
}
function E2(n, a) {
  a === void 0 && (a = C2);
  var l = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return l.length ? l[l.length - 1] : n;
    },
    useMedium: function(f) {
      var d = a(f, o);
      return l.push(d), function() {
        l = l.filter(function(m) {
          return m !== d;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (o = !0; l.length; ) {
        var d = l;
        l = [], d.forEach(f);
      }
      l = {
        push: function(m) {
          return f(m);
        },
        filter: function() {
          return l;
        }
      };
    },
    assignMedium: function(f) {
      o = !0;
      var d = [];
      if (l.length) {
        var m = l;
        l = [], m.forEach(f), d = l;
      }
      var h = function() {
        var b = d;
        d = [], b.forEach(f);
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
function O2(n) {
  n === void 0 && (n = {});
  var a = E2(null);
  return a.options = Pn({ async: !0, ssr: !1 }, n), a;
}
var $0 = function(n) {
  var a = n.sideCar, l = K0(n, ["sideCar"]);
  if (!a)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = a.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return x.createElement(o, Pn({}, l));
};
$0.isSideCarExport = !0;
function T2(n, a) {
  return n.useMedium(a), $0;
}
var J0 = O2(), Jf = function() {
}, cc = x.forwardRef(function(n, a) {
  var l = x.useRef(null), o = x.useState({
    onScrollCapture: Jf,
    onWheelCapture: Jf,
    onTouchMoveCapture: Jf
  }), s = o[0], f = o[1], d = n.forwardProps, m = n.children, h = n.className, p = n.removeScrollBar, b = n.enabled, y = n.shards, w = n.sideCar, E = n.noRelative, M = n.noIsolation, O = n.inert, C = n.allowPinchZoom, D = n.as, A = D === void 0 ? "div" : D, _ = n.gapMode, T = K0(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), j = w, z = S2([l, a]), R = Pn(Pn({}, T), s);
  return x.createElement(
    x.Fragment,
    null,
    b && x.createElement(j, { sideCar: J0, removeScrollBar: p, shards: y, noRelative: E, noIsolation: M, inert: O, setCallbacks: f, allowPinchZoom: !!C, lockRef: l, gapMode: _ }),
    d ? x.cloneElement(x.Children.only(m), Pn(Pn({}, R), { ref: z })) : x.createElement(A, Pn({}, R, { className: h, ref: z }), m)
  );
});
cc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
cc.classNames = {
  fullWidth: js,
  zeroRight: zs
};
var M2 = function() {
  if (typeof globalThis.__weiboStyleNonce < "u")
    return globalThis.__weiboStyleNonce;
};
function D2() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var a = M2();
  return a && n.setAttribute("nonce", a), n;
}
function _2(n, a) {
  n.styleSheet ? n.styleSheet.cssText = a : n.appendChild(document.createTextNode(a));
}
function N2(n) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(n);
}
var A2 = function() {
  var n = 0, a = null;
  return {
    add: function(l) {
      n == 0 && (a = D2()) && (_2(a, l), N2(a)), n++;
    },
    remove: function() {
      n--, !n && a && (a.parentNode && a.parentNode.removeChild(a), a = null);
    }
  };
}, R2 = function() {
  var n = A2();
  return function(a, l) {
    x.useEffect(function() {
      return n.add(a), function() {
        n.remove();
      };
    }, [a && l]);
  };
}, ex = function() {
  var n = R2(), a = function(l) {
    var o = l.styles, s = l.dynamic;
    return n(o, s), null;
  };
  return a;
}, k2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ed = function(n) {
  return parseInt(n || "", 10) || 0;
}, z2 = function(n) {
  var a = window.getComputedStyle(document.body), l = a[n === "padding" ? "paddingLeft" : "marginLeft"], o = a[n === "padding" ? "paddingTop" : "marginTop"], s = a[n === "padding" ? "paddingRight" : "marginRight"];
  return [ed(l), ed(o), ed(s)];
}, j2 = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return k2;
  var a = z2(n), l = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: a[0],
    top: a[1],
    right: a[2],
    gap: Math.max(0, o - l + a[2] - a[0])
  };
}, Y2 = ex(), Go = "data-scroll-locked", H2 = function(n, a, l, o) {
  var s = n.left, f = n.top, d = n.right, m = n.gap;
  return l === void 0 && (l = "margin"), `
  .`.concat(v2, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(m, "px ").concat(o, `;
  }
  body[`).concat(Go, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    a && "position: relative ".concat(o, ";"),
    l === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(o, `;
    `),
    l === "padding" && "padding-right: ".concat(m, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(zs, ` {
    right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(js, ` {
    margin-right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(zs, " .").concat(zs, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(js, " .").concat(js, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Go, `] {
    `).concat(b2, ": ").concat(m, `px;
  }
`);
}, hv = function() {
  var n = parseInt(document.body.getAttribute(Go) || "0", 10);
  return isFinite(n) ? n : 0;
}, B2 = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Go, (hv() + 1).toString()), function() {
      var n = hv() - 1;
      n <= 0 ? document.body.removeAttribute(Go) : document.body.setAttribute(Go, n.toString());
    };
  }, []);
}, U2 = function(n) {
  var a = n.noRelative, l = n.noImportant, o = n.gapMode, s = o === void 0 ? "margin" : o;
  B2();
  var f = x.useMemo(function() {
    return j2(s);
  }, [s]);
  return x.createElement(Y2, { styles: H2(f, !a, s, l ? "" : "!important") });
}, vd = !1;
if (typeof window < "u")
  try {
    var Ds = Object.defineProperty({}, "passive", {
      get: function() {
        return vd = !0, !0;
      }
    });
    window.addEventListener("test", Ds, Ds), window.removeEventListener("test", Ds, Ds);
  } catch {
    vd = !1;
  }
var Ho = vd ? { passive: !1 } : !1, L2 = function(n) {
  return n.tagName === "TEXTAREA";
}, tx = function(n, a) {
  if (!(n instanceof Element))
    return !1;
  var l = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    l[a] !== "hidden" && // contains scroll inside self
    !(l.overflowY === l.overflowX && !L2(n) && l[a] === "visible")
  );
}, q2 = function(n) {
  return tx(n, "overflowY");
}, P2 = function(n) {
  return tx(n, "overflowX");
}, pv = function(n, a) {
  var l = a.ownerDocument, o = a;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = nx(n, o);
    if (s) {
      var f = ax(n, o), d = f[1], m = f[2];
      if (d > m)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== l.body);
  return !1;
}, G2 = function(n) {
  var a = n.scrollTop, l = n.scrollHeight, o = n.clientHeight;
  return [
    a,
    l,
    o
  ];
}, W2 = function(n) {
  var a = n.scrollLeft, l = n.scrollWidth, o = n.clientWidth;
  return [
    a,
    l,
    o
  ];
}, nx = function(n, a) {
  return n === "v" ? q2(a) : P2(a);
}, ax = function(n, a) {
  return n === "v" ? G2(a) : W2(a);
}, V2 = function(n, a) {
  return n === "h" && a === "rtl" ? -1 : 1;
}, X2 = function(n, a, l, o, s) {
  var f = V2(n, window.getComputedStyle(a).direction), d = f * o, m = l.target, h = a.contains(m), p = !1, b = d > 0, y = 0, w = 0;
  do {
    if (!m)
      break;
    var E = ax(n, m), M = E[0], O = E[1], C = E[2], D = O - C - f * M;
    (M || D) && nx(n, m) && (y += D, w += M);
    var A = m.parentNode;
    m = A && A.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? A.host : A;
  } while (
    // portaled content
    !h && m !== document.body || // self content
    h && (a.contains(m) || a === m)
  );
  return (b && Math.abs(y) < 1 || !b && Math.abs(w) < 1) && (p = !0), p;
}, _s = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, gv = function(n) {
  return [n.deltaX, n.deltaY];
}, yv = function(n) {
  return n && "current" in n ? n.current : n;
}, F2 = function(n, a) {
  return n[0] === a[0] && n[1] === a[1];
}, Q2 = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, Z2 = 0, Bo = [];
function I2(n) {
  var a = x.useRef([]), l = x.useRef([0, 0]), o = x.useRef(), s = x.useState(Z2++)[0], f = x.useState(ex)[0], d = x.useRef(n);
  x.useEffect(function() {
    d.current = n;
  }, [n]), x.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var O = y2([n.lockRef.current], (n.shards || []).map(yv), !0).filter(Boolean);
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
    var D = _s(O), A = l.current, _ = "deltaX" in O ? O.deltaX : A[0] - D[0], T = "deltaY" in O ? O.deltaY : A[1] - D[1], j, z = O.target, R = Math.abs(_) > Math.abs(T) ? "h" : "v";
    if ("touches" in O && R === "h" && z.type === "range")
      return !1;
    var U = window.getSelection(), F = U && U.anchorNode, $ = F ? F === z || F.contains(z) : !1;
    if ($)
      return !1;
    var te = pv(R, z);
    if (!te)
      return !0;
    if (te ? j = R : (j = R === "v" ? "h" : "v", te = pv(R, z)), !te)
      return !1;
    if (!o.current && "changedTouches" in O && (_ || T) && (o.current = j), !j)
      return !0;
    var ee = o.current || j;
    return X2(ee, C, O, ee === "h" ? _ : T);
  }, []), h = x.useCallback(function(O) {
    var C = O;
    if (!(!Bo.length || Bo[Bo.length - 1] !== f)) {
      var D = "deltaY" in C ? gv(C) : _s(C), A = a.current.filter(function(j) {
        return j.name === C.type && (j.target === C.target || C.target === j.shadowParent) && F2(j.delta, D);
      })[0];
      if (A && A.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!A) {
        var _ = (d.current.shards || []).map(yv).filter(Boolean).filter(function(j) {
          return j.contains(C.target);
        }), T = _.length > 0 ? m(C, _[0]) : !d.current.noIsolation;
        T && C.cancelable && C.preventDefault();
      }
    }
  }, []), p = x.useCallback(function(O, C, D, A) {
    var _ = { name: O, delta: C, target: D, should: A, shadowParent: K2(D) };
    a.current.push(_), setTimeout(function() {
      a.current = a.current.filter(function(T) {
        return T !== _;
      });
    }, 1);
  }, []), b = x.useCallback(function(O) {
    l.current = _s(O), o.current = void 0;
  }, []), y = x.useCallback(function(O) {
    p(O.type, gv(O), O.target, m(O, n.lockRef.current));
  }, []), w = x.useCallback(function(O) {
    p(O.type, _s(O), O.target, m(O, n.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Bo.push(f), n.setCallbacks({
      onScrollCapture: y,
      onWheelCapture: y,
      onTouchMoveCapture: w
    }), document.addEventListener("wheel", h, Ho), document.addEventListener("touchmove", h, Ho), document.addEventListener("touchstart", b, Ho), function() {
      Bo = Bo.filter(function(O) {
        return O !== f;
      }), document.removeEventListener("wheel", h, Ho), document.removeEventListener("touchmove", h, Ho), document.removeEventListener("touchstart", b, Ho);
    };
  }, []);
  var E = n.removeScrollBar, M = n.inert;
  return x.createElement(
    x.Fragment,
    null,
    M ? x.createElement(f, { styles: Q2(s) }) : null,
    E ? x.createElement(U2, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function K2(n) {
  for (var a = null; n !== null; )
    n instanceof ShadowRoot && (a = n.host, n = n.host), n = n.parentNode;
  return a;
}
const $2 = T2(J0, I2);
var lm = x.forwardRef(function(n, a) {
  return x.createElement(cc, Pn({}, n, { ref: a, sideCar: $2 }));
});
lm.classNames = cc.classNames;
var J2 = Object.defineProperty, Ma = (n, a) => J2(n, "name", { value: a, configurable: !0 }), im = "Popover", [rx, CA] = /* @__PURE__ */ Oa(im, [
  ic
]), sm = ic(), [eN, Io] = rx(im), tN = /* @__PURE__ */ Ma((n) => {
  const {
    __scopePopover: a,
    children: l,
    open: o,
    defaultOpen: s,
    onOpenChange: f,
    modal: d = !1
  } = n, m = sm(a), h = x.useRef(null), [p, b] = x.useState(!1), [y, w] = x.useState(0), [E, M] = x.useState(0), [O, C] = jr({
    prop: o,
    defaultProp: s ?? !1,
    onChange: f,
    caller: im
  });
  return /* @__PURE__ */ v.jsx(G0, { ...m, children: /* @__PURE__ */ v.jsx(
    eN,
    {
      scope: a,
      contentId: nr(),
      titleId: nr(),
      descriptionId: nr(),
      titlePresent: y > 0,
      descriptionPresent: E > 0,
      setTitleCount: w,
      setDescriptionCount: M,
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
}, "Popover"), nN = "PopoverTrigger", aN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Ma(function(a, l) {
    const { __scopePopover: o, ...s } = a, f = Io(nN, o), d = sm(o), m = at(l, f.triggerRef), h = /* @__PURE__ */ v.jsx(
      rt.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": f.open,
        "aria-controls": f.open ? f.contentId : void 0,
        "data-state": cm(f.open),
        ...s,
        ref: m,
        onClick: Ye(a.onClick, f.onOpenToggle)
      }
    );
    return f.hasCustomAnchor ? h : /* @__PURE__ */ v.jsx(W0, { asChild: !0, ...d, children: h });
  }, "PopoverTrigger")
), ox = "PopoverPortal", [rN, oN] = rx(ox, {
  forceMount: void 0
}), lN = /* @__PURE__ */ Ma((n) => {
  const { __scopePopover: a, forceMount: l, children: o, container: s } = n, f = Io(ox, a);
  return /* @__PURE__ */ v.jsx(rN, { scope: a, forceMount: l, children: /* @__PURE__ */ v.jsx(Zs, { present: l || f.open, children: /* @__PURE__ */ v.jsx(Q0, { asChild: !0, container: s, children: o }) }) });
}, "PopoverPortal"), Kl = "PopoverContent", iN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = oN(Kl, a.__scopePopover), { forceMount: s = o.forceMount, ...f } = a, d = Io(Kl, a.__scopePopover);
    return /* @__PURE__ */ v.jsx(Zs, { present: s || d.open, children: d.modal ? /* @__PURE__ */ v.jsx(cN, { ...f, ref: l }) : /* @__PURE__ */ v.jsx(uN, { ...f, ref: l }) });
  }, "PopoverContent")
), sN = /* @__PURE__ */ Sa("PopoverContent.RemoveScroll"), cN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = Io(Kl, a.__scopePopover), s = x.useRef(null), f = at(l, s), d = x.useRef(!1), { nodes: m, registry: h } = w0();
    return x.useEffect(() => {
      const p = s.current;
      if (p) return I0(p);
    }, []), /* @__PURE__ */ v.jsx(
      lm,
      {
        as: sN,
        allowPinchZoom: !0,
        shards: x.useMemo(
          () => [s, ...m.map((p) => ({ current: p }))],
          [s, m]
        ),
        children: /* @__PURE__ */ v.jsx(
          lx,
          {
            ...a,
            ref: f,
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
                const b = p.detail.originalEvent, y = b.button === 0 && b.ctrlKey === !0, w = b.button === 2 || y;
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
), uN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = Io(Kl, a.__scopePopover), s = x.useRef(!1), f = x.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      lx,
      {
        ...a,
        ref: l,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (d) => {
          a.onCloseAutoFocus?.(d), d.defaultPrevented || (s.current || o.triggerRef.current?.focus(), d.preventDefault()), s.current = !1, f.current = !1;
        },
        onInteractOutside: (d) => {
          a.onInteractOutside?.(d), d.defaultPrevented || (s.current = !0, d.detail.originalEvent.type === "pointerdown" && (f.current = !0));
          const m = d.target;
          o.triggerRef.current?.contains(m) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && f.current && d.preventDefault();
        }
      }
    );
  }, "PopoverContentNonModal")
), lx = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const {
      __scopePopover: o,
      trapFocus: s,
      onOpenAutoFocus: f,
      onCloseAutoFocus: d,
      disableOutsidePointerEvents: m,
      onEscapeKeyDown: h,
      onPointerDownOutside: p,
      onFocusOutside: b,
      onInteractOutside: y,
      "aria-describedby": w,
      branchNodes: E,
      branchRegistry: M,
      ...O
    } = a, C = Io(Kl, o), D = sm(o), [A, _] = x.useState(null), T = at(l, _);
    return S0(A), tc(), /* @__PURE__ */ v.jsx(x0, { registry: M, children: /* @__PURE__ */ v.jsx(
      v0,
      {
        asChild: !0,
        loop: !0,
        trapped: s,
        branches: E,
        onMountAutoFocus: f,
        onUnmountAutoFocus: d,
        children: /* @__PURE__ */ v.jsx(
          p0,
          {
            asChild: !0,
            disableOutsidePointerEvents: m,
            onInteractOutside: y,
            onEscapeKeyDown: h,
            onPointerDownOutside: p,
            onFocusOutside: b,
            onDismiss: () => C.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ v.jsx(
              X0,
              {
                "data-state": cm(C.open),
                role: "dialog",
                id: C.contentId,
                "aria-labelledby": C.titlePresent ? C.titleId : void 0,
                "aria-describedby": C.descriptionPresent ? ix(w, C.descriptionId) : w,
                ...D,
                ...O,
                ref: T,
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
function cm(n) {
  return n ? "open" : "closed";
}
Ma(cm, "getState");
function ix(...n) {
  const a = /* @__PURE__ */ new Set();
  for (const l of n)
    if (typeof l == "string")
      for (const o of String(l).trim().split(/\s+/))
        o && a.add(o);
  return a.size > 0 ? Array.from(a).join(" ") : void 0;
}
Ma(ix, "concatAriaDescribedby");
const sx = tN, cx = aN;
function ux({
  className: n,
  align: a = "center",
  sideOffset: l = 4,
  ...o
}) {
  return /* @__PURE__ */ v.jsx(lN, { children: /* @__PURE__ */ v.jsx(
    iN,
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
var fN = Object.defineProperty, dN = (n, a) => fN(n, "name", { value: a, configurable: !0 });
function bd(n, [a, l]) {
  return Math.min(l, Math.max(a, n));
}
dN(bd, "clamp");
var mN = Object.freeze({
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
}), hN = Object.defineProperty, Le = (n, a) => hN(n, "name", { value: a, configurable: !0 }), vv = {
  ItemAligned: "item-aligned",
  Popper: "popper"
}, pN = {
  RTL: "rtl"
}, gN = [" ", "Enter", "ArrowUp", "ArrowDown"], yN = [" ", "Enter"], Wo = "Select", [uc, fc, vN] = /* @__PURE__ */ Ad(Wo), [Vr, EA] = /* @__PURE__ */ Oa(Wo, [
  vN,
  ic
]), um = ic(), [bN, cr] = Vr(Wo), [xN, wN] = Vr(Wo);
function fx(n) {
  const {
    __scopeSelect: a,
    children: l,
    open: o,
    defaultOpen: s,
    onOpenChange: f,
    value: d,
    defaultValue: m,
    onValueChange: h,
    dir: p,
    name: b,
    autoComplete: y,
    disabled: w,
    required: E,
    form: M,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: O
  } = n, C = um(a), [D, A] = x.useState(null), [_, T] = x.useState(null), [j, z] = x.useState(!1), R = Fs(p), [U, F] = jr({
    prop: o,
    defaultProp: s ?? !1,
    onChange: f,
    caller: Wo
  }), [$, te] = jr({
    prop: d,
    defaultProp: m,
    onChange: h,
    caller: Wo
  }), ee = x.useRef(null), ie = x.useRef(!1), [le, me] = x.useState(null), H = /* @__PURE__ */ Le((oe) => {
    me({
      value: oe,
      hasConsumerStoppedPropagation: ie.current
    }), te(oe);
  }, "handleUserSelect"), Q = x.useRef($);
  x.useEffect(() => {
    const oe = M ? D?.ownerDocument.getElementById(M) : D?.form;
    if (oe instanceof HTMLFormElement) {
      const ve = /* @__PURE__ */ Le(() => te(Q.current), "reset");
      return oe.addEventListener("reset", ve), () => oe.removeEventListener("reset", ve);
    }
  }, [M, D, te]);
  const K = D ? !!M || !!D.closest("form") : !0, [ne, W] = x.useState(/* @__PURE__ */ new Set()), N = nr(), V = Array.from(ne).map((oe) => oe.props.value).join(";"), J = x.useCallback((oe) => {
    W((ve) => new Set(ve).add(oe));
  }, []), ae = x.useCallback((oe) => {
    W((ve) => {
      const Fe = new Set(ve);
      return Fe.delete(oe), Fe;
    });
  }, []), re = {
    required: E,
    trigger: D,
    onTriggerChange: A,
    valueNode: _,
    onValueNodeChange: T,
    valueNodeHasChildren: j,
    onValueNodeHasChildrenChange: z,
    contentId: N,
    value: $,
    onValueChange: te,
    hasConsumerStoppedPropagationRef: ie,
    userSelection: le,
    onUserSelect: H,
    open: U,
    onOpenChange: F,
    dir: R,
    triggerPointerDownPosRef: ee,
    disabled: w,
    name: b,
    autoComplete: y,
    form: M,
    nativeOptions: ne,
    nativeSelectKey: V,
    isFormControl: K
  };
  return /* @__PURE__ */ v.jsx(G0, { ...C, children: /* @__PURE__ */ v.jsx(bN, { scope: a, ...re, children: /* @__PURE__ */ v.jsx(uc.Provider, { scope: a, children: /* @__PURE__ */ v.jsx(
    xN,
    {
      scope: a,
      onNativeOptionAdd: J,
      onNativeOptionRemove: ae,
      children: px(O) ? O(re) : l
    }
  ) }) }) });
}
Le(fx, "SelectProvider");
var SN = /* @__PURE__ */ Le((n) => {
  const { __scopeSelect: a, children: l, ...o } = n;
  return /* @__PURE__ */ v.jsx(
    fx,
    {
      __scopeSelect: a,
      ...o,
      internal_do_not_use_render: ({ isFormControl: s }) => /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        l,
        s ? /* @__PURE__ */ v.jsx(
          QN,
          {
            __scopeSelect: a
          }
        ) : null
      ] })
    }
  );
}, "Select"), CN = "SelectTrigger", EN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, disabled: s = !1, ...f } = a, d = um(o), m = cr(CN, o), h = m.disabled || s, p = at(l, m.onTriggerChange), b = fc(o), y = x.useRef("touch"), [w, E, M] = dm((C) => {
      const D = b().filter((T) => !T.disabled), A = D.find((T) => T.value === m.value), _ = mm(D, C, A);
      _ !== void 0 && m.onUserSelect(_.value);
    }), O = /* @__PURE__ */ Le((C) => {
      h || (m.onOpenChange(!0), M()), C && (m.triggerPointerDownPosRef.current = {
        x: Math.round(C.pageX),
        y: Math.round(C.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ v.jsx(W0, { asChild: !0, ...d, children: /* @__PURE__ */ v.jsx(
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
        "data-placeholder": ni(m.value) ? "" : void 0,
        ...f,
        ref: p,
        onClick: Ye(f.onClick, (C) => {
          C.currentTarget.focus(), y.current !== "mouse" && O(C);
        }),
        onPointerDown: Ye(f.onPointerDown, (C) => {
          y.current = C.pointerType;
          const D = C.target;
          D.hasPointerCapture(C.pointerId) && D.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (O(C), C.preventDefault());
        }),
        onKeyDown: Ye(f.onKeyDown, (C) => {
          const D = w.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && (m.hasConsumerStoppedPropagationRef.current = C.isPropagationStopped(), E(C.key)), !(D && C.key === " ") && gN.includes(C.key) && (O(), C.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), ON = "SelectValue", TN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, className: s, style: f, children: d, placeholder: m = "", ...h } = a, p = cr(ON, o), { onValueNodeHasChildrenChange: b } = p, y = d !== void 0, w = at(l, p.onValueNodeChange);
    bt(() => {
      b(y);
    }, [b, y]);
    const E = ni(p.value);
    return /* @__PURE__ */ v.jsx(
      rt.span,
      {
        ...h,
        asChild: E ? !1 : h.asChild,
        ref: w,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ v.jsx(x.Fragment, { children: E ? m : d }, E ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), MN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, children: s, ...f } = a;
    return /* @__PURE__ */ v.jsx(rt.span, { "aria-hidden": !0, ...f, ref: l, children: s || "▼" });
  }, "SelectIcon")
), DN = "SelectPortal", [_N, NN] = Vr(DN, {
  forceMount: void 0
}), AN = /* @__PURE__ */ Le((n) => {
  const { __scopeSelect: a, forceMount: l, ...o } = n;
  return /* @__PURE__ */ v.jsx(_N, { scope: n.__scopeSelect, forceMount: l, children: /* @__PURE__ */ v.jsx(Q0, { asChild: !0, ...o }) });
}, "SelectPortal"), Ur = "SelectContent", RN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const o = NN(Ur, a.__scopeSelect), { forceMount: s = o.forceMount, ...f } = a, d = cr(Ur, a.__scopeSelect), [m, h] = x.useState();
    return bt(() => {
      h(new DocumentFragment());
    }, []), /* @__PURE__ */ v.jsx(Zs, { present: s || d.open, children: ({ present: p }) => p ? /* @__PURE__ */ v.jsx(jN, { ...f, ref: l }) : /* @__PURE__ */ v.jsx(kN, { ...f, fragment: m }) });
  }, "SelectContent")
), kN = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const { __scopeSelect: o, children: s, fragment: f } = a;
  return f ? $l.createPortal(
    /* @__PURE__ */ v.jsx(dx, { scope: o, children: /* @__PURE__ */ v.jsx(uc.Slot, { scope: o, children: /* @__PURE__ */ v.jsx("div", { ref: l, children: s }) }) }),
    f
  ) : null;
}, "SelectContentFragment")), Mn = 10, [dx, Xr] = Vr(Ur), zN = /* @__PURE__ */ Sa("SelectContent.RemoveScroll"), jN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o } = a, {
      position: s = vv.ItemAligned,
      onCloseAutoFocus: f,
      onEscapeKeyDown: d,
      onPointerDownOutside: m,
      //
      // PopperContent props
      side: h,
      sideOffset: p,
      align: b,
      alignOffset: y,
      arrowPadding: w,
      collisionBoundary: E,
      collisionPadding: M,
      sticky: O,
      hideWhenDetached: C,
      avoidCollisions: D,
      //
      ...A
    } = a, _ = cr(Ur, o), [T, j] = x.useState(null), [z, R] = x.useState(null), U = at(l, j), [F, $] = x.useState(null), [te, ee] = x.useState(
      null
    ), ie = fc(o), [le, me] = x.useState(!1), H = x.useRef(!1), Q = x.useRef(!1), K = x.useRef(!1);
    x.useEffect(() => {
      if (T) return I0(T);
    }, [T]), tc();
    const ne = x.useCallback(
      (he) => {
        const [Qe, ...qe] = ie().map((We) => We.ref.current), [Ce] = qe.slice(-1), Oe = document.activeElement;
        for (const We of he)
          if (We === Oe || (We?.scrollIntoView({ block: "nearest" }), We === Qe && z && (z.scrollTop = 0), We === Ce && z && (z.scrollTop = z.scrollHeight), We?.focus(), document.activeElement !== Oe)) return;
      },
      [ie, z]
    ), W = x.useCallback(
      () => ne([F, T]),
      [ne, F, T]
    );
    x.useEffect(() => {
      le && W();
    }, [le, W]);
    const { onOpenChange: N, triggerPointerDownPosRef: V } = _;
    x.useEffect(() => {
      if (T) {
        let he = { x: 0, y: 0 };
        const Qe = /* @__PURE__ */ Le((Ce) => {
          he = {
            x: Math.abs(Math.round(Ce.pageX) - (V.current?.x ?? 0)),
            y: Math.abs(Math.round(Ce.pageY) - (V.current?.y ?? 0))
          };
        }, "handlePointerMove"), qe = /* @__PURE__ */ Le((Ce) => {
          he.x <= 10 && he.y <= 10 ? Ce.preventDefault() : Ce.composedPath().includes(T) || N(!1), document.removeEventListener("pointermove", Qe), V.current = null;
        }, "handlePointerUp");
        return V.current !== null && (document.addEventListener("pointermove", Qe), document.addEventListener("pointerup", qe, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Qe), document.removeEventListener("pointerup", qe, { capture: !0 });
        };
      }
    }, [T, N, V]), x.useEffect(() => {
      const he = /* @__PURE__ */ Le(() => N(!1), "close");
      return window.addEventListener("blur", he), window.addEventListener("resize", he), () => {
        window.removeEventListener("blur", he), window.removeEventListener("resize", he);
      };
    }, [N]);
    const [J, ae] = dm((he) => {
      const Qe = ie().filter((Oe) => !Oe.disabled), qe = Qe.find((Oe) => Oe.ref.current === document.activeElement), Ce = mm(Qe, he, qe);
      Ce && setTimeout(() => Ce.ref.current?.focus());
    }), re = x.useCallback(
      (he, Qe, qe) => {
        const Ce = !Q.current;
        Ce && (Q.current = !0);
        const Oe = !H.current && !qe;
        _.value !== void 0 && _.value === Qe || Oe ? ($(he), Oe && (H.current = !0)) : Ce && $(he);
      },
      [_.value]
    ), oe = x.useCallback(() => T?.focus(), [T]), ve = x.useCallback(
      (he, Qe, qe) => {
        if (!he) return;
        const Ce = !K.current;
        Ce && (K.current = !0);
        const Oe = !H.current && !qe;
        (_.value !== void 0 && _.value === Qe || Oe || Ce) && ee(he);
      },
      [_.value]
    ), Fe = s === vv.Popper ? bv : YN, ye = Fe === bv ? {
      side: h,
      sideOffset: p,
      align: b,
      alignOffset: y,
      arrowPadding: w,
      collisionBoundary: E,
      collisionPadding: M,
      sticky: O,
      hideWhenDetached: C,
      avoidCollisions: D
    } : {};
    return /* @__PURE__ */ v.jsx(
      dx,
      {
        scope: o,
        content: T,
        viewport: z,
        onViewportChange: R,
        itemRefCallback: re,
        selectedItem: F,
        onItemLeave: oe,
        itemTextRefCallback: ve,
        focusSelectedItem: W,
        selectedItemText: te,
        position: s,
        isPositioned: le,
        searchRef: J,
        children: /* @__PURE__ */ v.jsx(lm, { as: zN, allowPinchZoom: !0, children: /* @__PURE__ */ v.jsx(
          v0,
          {
            asChild: !0,
            trapped: _.open,
            onMountAutoFocus: (he) => {
              he.preventDefault();
            },
            onUnmountAutoFocus: Ye(f, (he) => {
              _.trigger?.focus({ preventScroll: !0 }), he.preventDefault();
            }),
            children: /* @__PURE__ */ v.jsx(
              p0,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: m,
                onFocusOutside: (he) => he.preventDefault(),
                onDismiss: () => _.onOpenChange(!1),
                children: /* @__PURE__ */ v.jsx(
                  Fe,
                  {
                    role: "listbox",
                    id: _.contentId,
                    "data-state": _.open ? "open" : "closed",
                    dir: _.dir,
                    onContextMenu: (he) => he.preventDefault(),
                    ...A,
                    ...ye,
                    onPlaced: () => me(!0),
                    ref: U,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...A.style
                    },
                    onKeyDown: Ye(A.onKeyDown, (he) => {
                      const Qe = he.ctrlKey || he.altKey || he.metaKey;
                      if (he.key === "Tab" && he.preventDefault(), !Qe && he.key.length === 1 && ae(he.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(he.key)) {
                        let Ce = ie().filter((Oe) => !Oe.disabled).map((Oe) => Oe.ref.current);
                        if (["ArrowUp", "End"].includes(he.key) && (Ce = Ce.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(he.key)) {
                          const Oe = he.target, We = Ce.indexOf(Oe);
                          Ce = Ce.slice(We + 1);
                        }
                        setTimeout(() => ne(Ce)), he.preventDefault();
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
), YN = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const { __scopeSelect: o, onPlaced: s, ...f } = a, d = cr(Ur, o), m = Xr(Ur, o), [h, p] = x.useState(null), [b, y] = x.useState(null), w = at(l, y), E = fc(o), M = x.useRef(!1), O = x.useRef(!0), { viewport: C, selectedItem: D, selectedItemText: A, focusSelectedItem: _ } = m, T = x.useCallback(() => {
    if (d.trigger && d.valueNode && h && b && C && D && A) {
      const U = d.trigger.getBoundingClientRect(), F = b.getBoundingClientRect(), $ = d.valueNode.getBoundingClientRect(), te = A.getBoundingClientRect();
      if (d.dir !== pN.RTL) {
        const qe = te.left - F.left, Ce = $.left - qe, Oe = U.left - Ce, We = U.width + Oe, Zn = Math.max(We, F.width), ur = window.innerWidth - Mn, Da = bd(Ce, [
          Mn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Mn, ur - Zn)
        ]);
        h.style.minWidth = We + "px", h.style.left = Da + "px";
      } else {
        const qe = F.right - te.right, Ce = window.innerWidth - $.right - qe, Oe = window.innerWidth - U.right - Ce, We = U.width + Oe, Zn = Math.max(We, F.width), ur = window.innerWidth - Mn, Da = bd(Ce, [
          Mn,
          Math.max(Mn, ur - Zn)
        ]);
        h.style.minWidth = We + "px", h.style.right = Da + "px";
      }
      const ee = E(), ie = window.innerHeight - Mn * 2, le = C.scrollHeight, me = window.getComputedStyle(b), H = parseInt(me.borderTopWidth, 10), Q = parseInt(me.paddingTop, 10), K = parseInt(me.borderBottomWidth, 10), ne = parseInt(me.paddingBottom, 10), W = H + Q + le + ne + K, N = Math.min(D.offsetHeight * 5, W), V = window.getComputedStyle(C), J = parseInt(V.paddingTop, 10), ae = parseInt(V.paddingBottom, 10), re = U.top + U.height / 2 - Mn, oe = ie - re, ve = D.offsetHeight / 2, Fe = D.offsetTop + ve, ye = H + Q + Fe, he = W - ye;
      if (ye <= re) {
        const qe = ee.length > 0 && D === ee[ee.length - 1].ref.current;
        h.style.bottom = "0px";
        const Ce = b.clientHeight - C.offsetTop - C.offsetHeight, Oe = Math.max(
          oe,
          ve + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (qe ? ae : 0) + Ce + K
        ), We = ye + Oe;
        h.style.height = We + "px";
      } else {
        const qe = ee.length > 0 && D === ee[0].ref.current;
        h.style.top = "0px";
        const Oe = Math.max(
          re,
          H + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (qe ? J : 0) + ve
        ) + he;
        h.style.height = Oe + "px", C.scrollTop = ye - re + C.offsetTop;
      }
      h.style.margin = `${Mn}px 0`, h.style.minHeight = N + "px", h.style.maxHeight = ie + "px", s?.(), requestAnimationFrame(() => M.current = !0);
    }
  }, [
    E,
    d.trigger,
    d.valueNode,
    h,
    b,
    C,
    D,
    A,
    d.dir,
    s
  ]);
  bt(() => T(), [T]);
  const [j, z] = x.useState();
  bt(() => {
    b && z(window.getComputedStyle(b).zIndex);
  }, [b]);
  const R = x.useCallback(
    (U) => {
      U && O.current === !0 && (T(), _?.(), O.current = !1);
    },
    [T, _]
  );
  return /* @__PURE__ */ v.jsx(
    HN,
    {
      scope: o,
      contentWrapper: h,
      shouldExpandOnScrollRef: M,
      onScrollButtonChange: R,
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: j
          },
          children: /* @__PURE__ */ v.jsx(
            rt.div,
            {
              ...f,
              ref: w,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...f.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), bv = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const {
    __scopeSelect: o,
    align: s = "start",
    collisionPadding: f = Mn,
    ...d
  } = a, m = um(o);
  return /* @__PURE__ */ v.jsx(
    X0,
    {
      ...m,
      ...d,
      ref: l,
      align: s,
      collisionPadding: f,
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
}, "SelectPopperPosition")), [HN, fm] = Vr(Ur, {}), xv = "SelectViewport", BN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, nonce: s, ...f } = a, d = Xr(xv, o), m = fm(xv, o), h = at(l, d.onViewportChange), p = x.useRef(0);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ v.jsx(uc.Slot, { scope: o, children: /* @__PURE__ */ v.jsx(
        rt.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...f,
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
            ...f.style
          },
          onScroll: Ye(f.onScroll, (b) => {
            const y = b.currentTarget, { contentWrapper: w, shouldExpandOnScrollRef: E } = m;
            if (E?.current && w) {
              const M = Math.abs(p.current - y.scrollTop);
              if (M > 0) {
                const O = window.innerHeight - Mn * 2, C = parseFloat(w.style.minHeight), D = parseFloat(w.style.height), A = Math.max(C, D);
                if (A < O) {
                  const _ = A + M, T = Math.min(O, _), j = _ - T;
                  w.style.height = T + "px", w.style.bottom === "0px" && (y.scrollTop = j > 0 ? j : 0, w.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = y.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), UN = "SelectGroup", [OA, TA] = Vr(UN), xd = "SelectItem", [LN, mx] = Vr(xd), qN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const {
      __scopeSelect: o,
      value: s,
      disabled: f = !1,
      textValue: d,
      ...m
    } = a, h = cr(xd, o), p = Xr(xd, o), b = h.value === s, [y, w] = x.useState(d ?? ""), [E, M] = x.useState(!1), O = _n(
      (T) => p.itemRefCallback?.(T, s, f)
    ), C = at(l, O), D = nr(), A = x.useRef("touch");
    function _(T) {
      h.hasConsumerStoppedPropagationRef.current = T.isPropagationStopped(), h.onUserSelect(s), h.onOpenChange(!1);
    }
    return Le(_, "handleSelect"), /* @__PURE__ */ v.jsx(
      LN,
      {
        scope: o,
        value: s,
        disabled: f,
        textId: D,
        isSelected: b,
        onItemTextChange: x.useCallback((T) => {
          w((j) => j || (T?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ v.jsx(
          uc.ItemSlot,
          {
            scope: o,
            value: s,
            disabled: f,
            textValue: y,
            children: /* @__PURE__ */ v.jsx(
              rt.div,
              {
                role: "option",
                "aria-labelledby": D,
                "data-highlighted": E ? "" : void 0,
                "aria-selected": b && E,
                "data-state": b ? "checked" : "unchecked",
                "aria-disabled": f || void 0,
                "data-disabled": f ? "" : void 0,
                tabIndex: f ? void 0 : -1,
                ...m,
                ref: C,
                onFocus: Ye(m.onFocus, () => M(!0)),
                onBlur: Ye(m.onBlur, () => M(!1)),
                onClick: Ye(m.onClick, (T) => {
                  f || A.current !== "mouse" && _(T);
                }),
                onPointerUp: Ye(m.onPointerUp, (T) => {
                  f || A.current === "mouse" && _(T);
                }),
                onPointerDown: Ye(m.onPointerDown, (T) => {
                  A.current = T.pointerType;
                }),
                onPointerMove: Ye(m.onPointerMove, (T) => {
                  A.current = T.pointerType, f ? p.onItemLeave?.() : A.current === "mouse" && T.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Ye(m.onPointerLeave, (T) => {
                  T.currentTarget === document.activeElement && p.onItemLeave?.();
                }),
                onKeyDown: Ye(m.onKeyDown, (T) => {
                  f || T.target !== T.currentTarget || p.searchRef?.current !== "" && T.key === " " || (yN.includes(T.key) && _(T), T.key === " " && T.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), Ns = "SelectItemText", PN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, className: s, style: f, ...d } = a, m = cr(Ns, o), h = Xr(Ns, o), p = mx(Ns, o), b = wN(Ns, o), [y, w] = x.useState(null), E = _n(
      (_) => h.itemTextRefCallback?.(_, p.value, p.disabled)
    ), M = at(
      l,
      w,
      p.onItemTextChange,
      E
    ), O = y?.textContent, C = x.useMemo(
      () => /* @__PURE__ */ v.jsx("option", { value: p.value, disabled: p.disabled, children: O }, p.value),
      [p.disabled, p.value, O]
    ), { onNativeOptionAdd: D, onNativeOptionRemove: A } = b;
    return bt(() => (D(C), () => A(C)), [D, A, C]), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(rt.span, { id: p.textId, ...d, ref: M }),
      p.isSelected && m.valueNode && !m.valueNodeHasChildren && !ni(m.value) ? $l.createPortal(d.children, m.valueNode) : null
    ] });
  }, "SelectItemText")
), GN = "SelectItemIndicator", WN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, ...s } = a;
    return mx(GN, o).isSelected ? /* @__PURE__ */ v.jsx(rt.span, { "aria-hidden": !0, ...s, ref: l }) : null;
  }, "SelectItemIndicator")
), wv = "SelectScrollUpButton", VN = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const o = Xr(wv, a.__scopeSelect), s = fm(wv, a.__scopeSelect), [f, d] = x.useState(!1), m = at(l, s.onScrollButtonChange);
  return bt(() => {
    if (o.viewport && o.isPositioned) {
      let h = function() {
        const b = p.scrollTop > 0;
        d(b);
      };
      Le(h, "handleScroll");
      const p = o.viewport;
      return h(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
    }
  }, [o.viewport, o.isPositioned]), f ? /* @__PURE__ */ v.jsx(
    hx,
    {
      ...a,
      ref: m,
      onAutoScroll: () => {
        const { viewport: h, selectedItem: p } = o;
        h && p && (h.scrollTop = h.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), Sv = "SelectScrollDownButton", XN = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const o = Xr(Sv, a.__scopeSelect), s = fm(Sv, a.__scopeSelect), [f, d] = x.useState(!1), m = at(l, s.onScrollButtonChange);
  return bt(() => {
    if (o.viewport && o.isPositioned) {
      let h = function() {
        const b = p.scrollHeight - p.clientHeight, y = Math.ceil(p.scrollTop) < b;
        d(y);
      };
      Le(h, "handleScroll");
      const p = o.viewport;
      return h(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
    }
  }, [o.viewport, o.isPositioned]), f ? /* @__PURE__ */ v.jsx(
    hx,
    {
      ...a,
      ref: m,
      onAutoScroll: () => {
        const { viewport: h, selectedItem: p } = o;
        h && p && (h.scrollTop = h.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), hx = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const { __scopeSelect: o, onAutoScroll: s, ...f } = a, d = Xr("SelectScrollButton", o), m = x.useRef(null), h = fc(o), p = x.useCallback(() => {
    m.current !== null && (window.clearInterval(m.current), m.current = null);
  }, []);
  return x.useEffect(() => () => p(), [p]), bt(() => {
    h().find((y) => y.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [h]), /* @__PURE__ */ v.jsx(
    rt.div,
    {
      "aria-hidden": !0,
      ...f,
      ref: l,
      style: { flexShrink: 0, ...f.style },
      onPointerDown: Ye(f.onPointerDown, () => {
        m.current === null && (m.current = window.setInterval(s, 50));
      }),
      onPointerMove: Ye(f.onPointerMove, () => {
        d.onItemLeave?.(), m.current === null && (m.current = window.setInterval(s, 50));
      }),
      onPointerLeave: Ye(f.onPointerLeave, () => {
        p();
      })
    }
  );
}, "SelectScrollButtonImpl")), FN = "SelectBubbleInput", QN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function({ __scopeSelect: a, ...l }, o) {
    const s = cr(FN, a), { value: f, onValueChange: d, required: m, disabled: h, name: p, autoComplete: b, form: y, userSelection: w } = s, { nativeOptions: E, nativeSelectKey: M } = s, O = x.useRef(null), C = at(o, O), D = f ?? "", A = x.useRef(D), _ = x.useRef(w), T = x.useRef(!1), j = Array.from(E).some(
      (z) => (z.props.value ?? "") === ""
    );
    return x.useEffect(() => {
      const z = O.current;
      if (!z) return;
      const R = window.HTMLSelectElement.prototype, F = Object.getOwnPropertyDescriptor(
        R,
        "value"
      ).set, $ = w !== null && w !== _.current;
      _.current = w;
      const te = A.current !== D;
      A.current = D;
      const ee = $ && te;
      if ($ && !te && w.value !== D && !w.hasConsumerStoppedPropagation && F) {
        T.current = !0;
        try {
          F.call(z, w.value), z.dispatchEvent(new Event("change", { bubbles: !0 }));
        } finally {
          T.current = !1, F.call(z, D);
        }
        return;
      }
      const ie = ee && !w.hasConsumerStoppedPropagation;
      if (te && F) {
        const le = new Event("change", { bubbles: ie });
        F.call(z, D), z.dispatchEvent(le);
      }
    }, [D, w]), /* @__PURE__ */ v.jsxs(
      rt.select,
      {
        "aria-hidden": !0,
        required: m,
        tabIndex: -1,
        name: p,
        autoComplete: b,
        disabled: h,
        form: y,
        onChange: (z) => {
          T.current || d(z.target.value);
        },
        ...l,
        style: { ...mN, ...l.style },
        ref: C,
        defaultValue: D,
        children: [
          ni(f) && !j ? /* @__PURE__ */ v.jsx("option", { value: "" }) : null,
          Array.from(E)
        ]
      },
      M
    );
  }, "SelectBubbleInput")
);
function px(n) {
  return typeof n == "function";
}
Le(px, "isFunction");
function ni(n) {
  return n === "" || n === void 0;
}
Le(ni, "shouldShowPlaceholder");
function dm(n) {
  const a = _n(n), l = x.useRef(""), o = x.useRef(0), s = x.useCallback(
    (d) => {
      const m = l.current + d;
      a(m);
      function h(p) {
        l.current = p, window.clearTimeout(o.current), p !== "" && (o.current = window.setTimeout(() => h(""), 1e3));
      }
      Le(h, "updateSearch"), h(m);
    },
    [a]
  ), f = x.useCallback(() => {
    l.current = "", window.clearTimeout(o.current);
  }, []);
  return x.useEffect(() => () => window.clearTimeout(o.current), []), [l, s, f];
}
Le(dm, "useTypeaheadSearch");
function mm(n, a, l) {
  const s = a.length > 1 && Array.from(a).every((p) => p === a[0]) ? a[0] : a, f = l ? n.indexOf(l) : -1;
  let d = gx(n, Math.max(f, 0));
  s.length === 1 && (d = d.filter((p) => p !== l));
  const h = d.find(
    (p) => p.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return h !== l ? h : void 0;
}
Le(mm, "findNextItem");
function gx(n, a) {
  return n.map((l, o) => n[(a + o) % n.length]);
}
Le(gx, "wrapArray");
const yx = document.querySelector(
  'meta[name="csp-nonce"]'
)?.content;
globalThis.__weiboStyleNonce = yx;
function ZN({
  ...n
}) {
  return /* @__PURE__ */ v.jsx(SN, { "data-slot": "select", ...n });
}
function IN({
  ...n
}) {
  return /* @__PURE__ */ v.jsx(TN, { "data-slot": "select-value", ...n });
}
function KN({
  className: n,
  size: a = "default",
  children: l,
  ...o
}) {
  return /* @__PURE__ */ v.jsxs(
    EN,
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
        /* @__PURE__ */ v.jsx(MN, { asChild: !0, children: /* @__PURE__ */ v.jsx(Wd, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function $N({
  className: n,
  children: a,
  position: l = "popper",
  align: o = "center",
  ...s
}) {
  return /* @__PURE__ */ v.jsx(AN, { children: /* @__PURE__ */ v.jsxs(
    RN,
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
        /* @__PURE__ */ v.jsx(eA, {}),
        /* @__PURE__ */ v.jsx(
          BN,
          {
            nonce: yx,
            className: we(
              "p-1",
              l === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: a
          }
        ),
        /* @__PURE__ */ v.jsx(tA, {})
      ]
    }
  ) });
}
function JN({
  className: n,
  children: a,
  ...l
}) {
  return /* @__PURE__ */ v.jsxs(
    qN,
    {
      "data-slot": "select-item",
      className: we(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...l,
      children: [
        /* @__PURE__ */ v.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(WN, { children: /* @__PURE__ */ v.jsx(Gd, { className: "size-4" }) }) }),
        /* @__PURE__ */ v.jsx(PN, { children: a })
      ]
    }
  );
}
function eA({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ v.jsx(
    VN,
    {
      "data-slot": "select-scroll-up-button",
      className: we(
        "flex cursor-pointer items-center justify-center py-1",
        n
      ),
      ...a,
      children: /* @__PURE__ */ v.jsx(pM, { className: "size-4" })
    }
  );
}
function tA({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ v.jsx(
    XN,
    {
      "data-slot": "select-scroll-down-button",
      className: we(
        "flex cursor-pointer items-center justify-center py-1",
        n
      ),
      ...a,
      children: /* @__PURE__ */ v.jsx(Wd, { className: "size-4" })
    }
  );
}
function Vo({
  id: n,
  label: a,
  value: l,
  onChange: o,
  options: s
}) {
  return /* @__PURE__ */ v.jsxs(
    ZN,
    {
      value: l || "__all__",
      onValueChange: (f) => o(f === "__all__" ? "" : f),
      children: [
        /* @__PURE__ */ v.jsx(KN, { id: n, className: "w-full h-9 text-xs", "aria-label": a, children: /* @__PURE__ */ v.jsx(IN, {}) }),
        /* @__PURE__ */ v.jsx($N, { className: "credit-popup", position: "popper", align: "start", children: s.map((f) => /* @__PURE__ */ v.jsx(
          JN,
          {
            value: f.value || "__all__",
            children: f.label
          },
          f.value || "__all__"
        )) })
      ]
    }
  );
}
function nA(n) {
  if (!n) return;
  const a = Vb(n, "yyyy-MM-dd", /* @__PURE__ */ new Date());
  return Ab(a) ? a : void 0;
}
function Cv({
  id: n,
  name: a,
  label: l,
  initialValue: o = ""
}) {
  const [s, f] = x.useState(o), [d, m] = x.useState(!1), h = nA(s);
  return /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ v.jsx(At, { htmlFor: n, children: l }),
    /* @__PURE__ */ v.jsx("input", { type: "hidden", name: a, value: s }),
    /* @__PURE__ */ v.jsxs(sx, { open: d, onOpenChange: m, children: [
      /* @__PURE__ */ v.jsx(cx, { asChild: !0, children: /* @__PURE__ */ v.jsxs(
        je,
        {
          id: n,
          type: "button",
          variant: "outline",
          className: "w-full justify-between h-9 px-3 text-xs font-normal",
          "aria-label": l,
          children: [
            /* @__PURE__ */ v.jsx("span", { className: s ? "" : "text-muted-foreground", children: h ? Vt(h, "yyyy/MM/dd") : "选择日期" }),
            /* @__PURE__ */ v.jsx(cM, { className: "size-4 text-muted-foreground" })
          ]
        }
      ) }),
      /* @__PURE__ */ v.jsxs(
        ux,
        {
          align: "start",
          className: "credit-popup date-popup w-auto p-0",
          "aria-label": `${l}日历`,
          children: [
            /* @__PURE__ */ v.jsx(
              XD,
              {
                mode: "single",
                selected: h,
                defaultMonth: h,
                locale: nM,
                autoFocus: !0,
                labels: {
                  labelPrevious: () => "上个月",
                  labelNext: () => "下个月",
                  labelDayButton: (p) => Vt(p, "yyyy年M月d日")
                },
                onSelect: (p) => {
                  f(p ? Vt(p, "yyyy-MM-dd") : ""), m(!1);
                }
              }
            ),
            /* @__PURE__ */ v.jsxs("div", { className: "credit-picker-footer", children: [
              /* @__PURE__ */ v.jsx(
                je,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    f(""), m(!1);
                  },
                  children: "清除日期"
                }
              ),
              /* @__PURE__ */ v.jsx(
                je,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  onClick: () => {
                    f(
                      new Intl.DateTimeFormat("en-CA", {
                        timeZone: "Asia/Shanghai",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                      }).format(/* @__PURE__ */ new Date())
                    ), m(!1);
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
const vx = (n) => Array.from({ length: n }, (a, l) => {
  const o = String(l).padStart(2, "0");
  return { value: o, label: o };
}), aA = vx(24), rA = vx(60);
function oA({ initialValue: n }) {
  const [a, l] = x.useState(n), [o, s] = x.useState(n), [f, d] = x.useState(!1), [m, h] = o.split(":");
  return /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ v.jsx(At, { htmlFor: "plan-time", children: "每天签到时间 · 北京时间" }),
    /* @__PURE__ */ v.jsx("input", { type: "hidden", name: "time", value: a }),
    /* @__PURE__ */ v.jsxs(
      sx,
      {
        open: f,
        onOpenChange: (p) => {
          p && s(a), d(p);
        },
        children: [
          /* @__PURE__ */ v.jsx(cx, { asChild: !0, children: /* @__PURE__ */ v.jsxs(
            je,
            {
              id: "plan-time",
              type: "button",
              variant: "outline",
              className: "credit-time-trigger w-full justify-between h-14 px-3 text-2xl font-medium tabular-nums",
              "aria-label": "每天签到时间 · 北京时间",
              children: [
                a,
                /* @__PURE__ */ v.jsx(yM, { className: "size-5 text-muted-foreground" })
              ]
            }
          ) }),
          /* @__PURE__ */ v.jsxs(
            ux,
            {
              align: "start",
              className: "credit-popup time-popup w-64 p-4",
              "aria-label": "签到时间选择器",
              children: [
                /* @__PURE__ */ v.jsxs("p", { className: "credit-picker-title", children: [
                  "每天签到时间 ",
                  /* @__PURE__ */ v.jsx("span", { children: "24 小时制" })
                ] }),
                /* @__PURE__ */ v.jsxs("div", { className: "credit-time-columns", children: [
                  /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ v.jsx(At, { htmlFor: "time-hour", children: "小时" }),
                    /* @__PURE__ */ v.jsx(
                      Vo,
                      {
                        id: "time-hour",
                        label: "小时",
                        value: m,
                        options: aA,
                        onChange: (p) => s(`${p}:${h}`)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsx("span", { className: "credit-time-separator", children: ":" }),
                  /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ v.jsx(At, { htmlFor: "time-minute", children: "分钟" }),
                    /* @__PURE__ */ v.jsx(
                      Vo,
                      {
                        id: "time-minute",
                        label: "分钟",
                        value: h,
                        options: rA,
                        onChange: (p) => s(`${m}:${p}`)
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ v.jsxs("div", { className: "credit-time-actions", children: [
                  /* @__PURE__ */ v.jsx(
                    je,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: () => d(!1),
                      children: "取消"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    je,
                    {
                      type: "button",
                      size: "sm",
                      onClick: () => {
                        l(o), d(!1);
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
function dc(n, a, l) {
  n.dispatchEvent(new CustomEvent(a, { detail: l, bubbles: !0 }));
}
class bx extends Error {
  constructor(a, l, o) {
    super(a), this.status = l, this.code = o;
  }
  status;
  code;
}
async function mc(n, a, l = "POST") {
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
    throw o.status === 401 && (n === "/api/settings" || n.startsWith("/api/admin/")) && location.assign("/login"), new bx(
      typeof s.detail == "string" ? s.detail : "请检查填写内容后重试",
      o.status,
      s.code
    );
  return s;
}
function wd({
  id: n,
  name: a,
  label: l,
  value: o,
  placeholder: s,
  numeric: f = !1
}) {
  return /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ v.jsx(At, { htmlFor: n, children: l }),
    /* @__PURE__ */ v.jsx(
      tr,
      {
        id: n,
        name: a,
        defaultValue: o,
        placeholder: s,
        inputMode: f ? "numeric" : void 0,
        maxLength: f ? 32 : 64,
        className: "h-9 text-xs"
      }
    )
  ] });
}
function lA({
  admin: n,
  values: a,
  statuses: l
}) {
  const [o, s] = x.useState(a.status || "");
  return /* @__PURE__ */ v.jsxs(
    "form",
    {
      id: "filter-form",
      className: "credit-filter-form",
      onSubmit: (f) => {
        f.preventDefault(), f.stopPropagation(), dc(f.currentTarget, "credit:filters", {
          kind: "records",
          values: Object.fromEntries(new FormData(f.currentTarget))
        });
      },
      children: [
        n && /* @__PURE__ */ v.jsx(
          wd,
          {
            id: "filter-username",
            name: "username",
            label: "平台用户名",
            value: a.username || "",
            placeholder: "完整用户名"
          }
        ),
        /* @__PURE__ */ v.jsx(
          wd,
          {
            id: "filter-uid",
            name: "uid",
            label: "微博 UID",
            value: a.uid || "",
            placeholder: "全部微博",
            numeric: !0
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
          /* @__PURE__ */ v.jsx(At, { htmlFor: "filter-status", children: "执行结果" }),
          /* @__PURE__ */ v.jsx("input", { type: "hidden", name: "status", value: o }),
          /* @__PURE__ */ v.jsx(
            Vo,
            {
              id: "filter-status",
              label: "执行结果",
              value: o,
              onChange: s,
              options: [{ value: "", label: "全部结果" }, ...l]
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(
          Cv,
          {
            id: "filter-start",
            name: "start",
            label: "开始日期",
            initialValue: a.start
          }
        ),
        /* @__PURE__ */ v.jsx(
          Cv,
          {
            id: "filter-end",
            name: "end",
            label: "结束日期",
            initialValue: a.end
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { className: "credit-filter-actions", children: [
          /* @__PURE__ */ v.jsx(je, { variant: "outline", type: "submit", className: "h-9 text-xs", children: "筛选" }),
          /* @__PURE__ */ v.jsx(
            je,
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
function iA({ search: n }) {
  const [a, l] = x.useState(!1);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs("div", { className: "credit-users-toolbar", children: [
      /* @__PURE__ */ v.jsxs(
        "form",
        {
          id: "user-search",
          className: "credit-filter-form credit-user-search",
          onSubmit: (o) => {
            o.preventDefault(), o.stopPropagation(), dc(o.currentTarget, "credit:filters", {
              kind: "users",
              values: Object.fromEntries(new FormData(o.currentTarget))
            });
          },
          children: [
            /* @__PURE__ */ v.jsx(
              wd,
              {
                id: "user-search-input",
                name: "search",
                label: "搜索用户名",
                value: n,
                placeholder: "输入用户名关键词"
              }
            ),
            /* @__PURE__ */ v.jsx(je, { type: "submit", variant: "outline", className: "h-9 text-xs", children: "搜索" })
          ]
        }
      ),
      /* @__PURE__ */ v.jsx(
        je,
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
    a && /* @__PURE__ */ v.jsx(sA, { onCancel: () => l(!1) })
  ] });
}
function sA({ onCancel: n }) {
  const [a, l] = x.useState(!1), [o, s] = x.useState("");
  async function f(d) {
    d.preventDefault(), d.stopPropagation();
    const m = d.currentTarget, h = new FormData(m);
    if (s(""), h.get("password") !== h.get("confirmation")) {
      s("两次密码输入不一致");
      return;
    }
    l(!0);
    try {
      const p = await mc("/api/admin/users", {
        username: h.get("username"),
        password: h.get("password")
      });
      m.reset(), dc(m, "credit:user-created", { username: p.user.username });
    } catch (p) {
      s(
        p instanceof TypeError ? "无法连接服务，请稍后重试" : p.message
      );
    } finally {
      l(!1);
    }
  }
  return /* @__PURE__ */ v.jsxs(
    "form",
    {
      id: "admin-create-user",
      className: "credit-create-user",
      onSubmit: f,
      children: [
        /* @__PURE__ */ v.jsx("h3", { children: "添加平台用户" }),
        /* @__PURE__ */ v.jsx("p", { children: "创建普通用户账号，用户登录后自行绑定微博。" }),
        /* @__PURE__ */ v.jsxs("fieldset", { disabled: a, children: [
          /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ v.jsx(At, { htmlFor: "new-user-name", children: "用户名" }),
            /* @__PURE__ */ v.jsx(
              tr,
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
          /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ v.jsx(At, { htmlFor: "new-user-password", children: "初始密码" }),
            /* @__PURE__ */ v.jsx(
              tr,
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
          /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ v.jsx(At, { htmlFor: "new-user-confirmation", children: "确认初始密码" }),
            /* @__PURE__ */ v.jsx(
              tr,
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
          o && /* @__PURE__ */ v.jsx("p", { role: "alert", className: "credit-form-error", children: o }),
          /* @__PURE__ */ v.jsxs("div", { className: "credit-filter-actions", children: [
            /* @__PURE__ */ v.jsx(je, { type: "submit", size: "sm", children: a ? "正在创建…" : "创建用户" }),
            /* @__PURE__ */ v.jsx(je, { type: "button", variant: "ghost", size: "sm", onClick: n, children: "取消" })
          ] })
        ] })
      ]
    }
  );
}
function cA({ settings: n }) {
  const [a, l] = x.useState(n.registration_enabled), [o, s] = x.useState(!1), [f, d] = x.useState(""), [m, h] = x.useState(!1);
  async function p(b) {
    b.preventDefault(), b.stopPropagation(), s(!0), d(""), h(!1);
    try {
      await mc(
        "/api/admin/settings",
        { registration_enabled: a },
        "PUT"
      ), d(
        a ? "已保存：公开注册已开启" : "已保存：公开注册已关闭"
      );
    } catch (y) {
      h(!0), d(
        y instanceof TypeError ? "无法连接服务，请稍后重试" : y.message
      );
    } finally {
      s(!1);
    }
  }
  return /* @__PURE__ */ v.jsxs("form", { className: "credit-system-settings", onSubmit: p, children: [
    /* @__PURE__ */ v.jsxs("fieldset", { disabled: o, children: [
      /* @__PURE__ */ v.jsxs("div", { className: "credit-switch-row", children: [
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx(At, { htmlFor: "registration-enabled", children: "开放用户注册" }),
          /* @__PURE__ */ v.jsx("p", { id: "registration-help", children: "关闭后仅管理员可创建新账号，不影响已有用户登录。" })
        ] }),
        /* @__PURE__ */ v.jsx(
          ib,
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
      /* @__PURE__ */ v.jsx(je, { type: "submit", size: "sm", children: o ? "正在保存…" : "保存系统设置" })
    ] }),
    f && /* @__PURE__ */ v.jsx(
      "p",
      {
        className: m ? "credit-form-error" : "credit-form-feedback",
        role: m ? "alert" : "status",
        children: f
      }
    )
  ] });
}
function uA({ plan: n }) {
  const [a, l] = x.useState(n.enabled), [o, s] = x.useState(!1), [f, d] = x.useState(""), [m, h] = x.useState(!1);
  async function p(b) {
    b.preventDefault(), b.stopPropagation();
    const y = b.currentTarget, w = { enabled: a, time: String(new FormData(y).get("time")) };
    s(!0), h(!1), d("");
    try {
      await mc("/api/settings", w, "PUT"), d(
        a ? `已保存：每天 ${w.time} 自动签到` : "已保存：每日签到已暂停"
      ), dc(y, "credit:plan-saved", w);
    } catch (E) {
      h(!0), d(
        E instanceof TypeError ? "无法连接服务，请稍后重试" : E.message
      );
    } finally {
      s(!1);
    }
  }
  return /* @__PURE__ */ v.jsxs("form", { id: "plan-form", className: "credit-plan-form", onSubmit: p, children: [
    /* @__PURE__ */ v.jsxs("fieldset", { disabled: o, children: [
      /* @__PURE__ */ v.jsx(oA, { initialValue: n.time }),
      /* @__PURE__ */ v.jsxs("div", { className: "credit-switch-row", children: [
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx(At, { htmlFor: "plan-enabled", children: "自动签到" }),
          /* @__PURE__ */ v.jsx("p", { id: "plan-enabled-help", children: "对你绑定的全部微博账号生效" })
        ] }),
        /* @__PURE__ */ v.jsx(
          ib,
          {
            id: "plan-enabled",
            checked: a,
            onCheckedChange: l,
            "aria-describedby": "plan-enabled-help"
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx(je, { type: "submit", className: "w-full h-9 text-xs", children: o ? "正在保存…" : "保存签到计划" })
    ] }),
    f && /* @__PURE__ */ v.jsx(
      "p",
      {
        id: "plan-feedback",
        className: m ? "credit-form-error" : "credit-form-feedback",
        role: m ? "alert" : "status",
        children: f
      }
    )
  ] });
}
function fA() {
  const [n, a] = x.useState(
    () => document.querySelector(
      'meta[name="registration-enabled"]'
    )?.content !== "false"
  ), [l, o] = x.useState("login"), [s, f] = x.useState(!1), [d, m] = x.useState(""), h = l === "register";
  async function p(b) {
    b.preventDefault(), m("");
    const y = b.currentTarget, w = new FormData(y);
    if (h && w.get("password") !== w.get("confirm-password")) {
      m("两次密码输入不一致");
      return;
    }
    f(!0);
    try {
      const E = await mc(`/api/auth/${l}`, {
        username: w.get("username"),
        password: w.get("password")
      });
      location.assign(
        new URLSearchParams(location.search).get("next") === "admin" && E.user.role === "admin" ? "/admin" : "/"
      );
    } catch (E) {
      h && E instanceof bx && E.code === "registration_closed" && (a(!1), o("login")), m(
        E instanceof TypeError ? "无法连接服务，请检查网络后重试" : E.message
      );
    } finally {
      f(!1);
    }
  }
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("span", { className: "eyebrow", children: "YOUR DAILY ROUTINE" }),
    /* @__PURE__ */ v.jsx("h1", { children: h ? "开始你的每日计划" : "欢迎回来" }),
    /* @__PURE__ */ v.jsx("p", { className: "credit-auth-description", children: h ? "创建平台账号，再扫码连接你的微博。" : "登录平台，查看你的微博与签到计划。" }),
    /* @__PURE__ */ v.jsxs(
      nE,
      {
        value: l,
        onValueChange: (b) => {
          o(b), m("");
        },
        children: [
          n && /* @__PURE__ */ v.jsxs(aE, { className: "credit-auth-tabs w-full", children: [
            /* @__PURE__ */ v.jsx(Yy, { value: "login", disabled: s, children: "登录" }),
            /* @__PURE__ */ v.jsx(Yy, { value: "register", disabled: s, children: "注册" })
          ] }),
          !n && /* @__PURE__ */ v.jsx("p", { className: "credit-registration-closed", children: "注册已关闭，请联系管理员开通账号。" }),
          (n ? ["login", "register"] : ["login"]).map(
            (b) => /* @__PURE__ */ v.jsx(rE, { value: b, children: /* @__PURE__ */ v.jsx(
              "form",
              {
                id: "auth-form",
                className: "credit-auth-form",
                onSubmit: p,
                children: /* @__PURE__ */ v.jsxs("fieldset", { disabled: s, children: [
                  /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ v.jsx(At, { htmlFor: `${b}-username`, children: "平台用户名" }),
                    /* @__PURE__ */ v.jsx(
                      tr,
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
                  /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ v.jsx(At, { htmlFor: `${b}-password`, children: "密码" }),
                    /* @__PURE__ */ v.jsx(
                      tr,
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
                    h && /* @__PURE__ */ v.jsx("small", { id: "password-hint", children: "12–128 位，建议混合使用字母、数字和符号" })
                  ] }),
                  h && /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ v.jsx(At, { htmlFor: "confirm-password", children: "确认密码" }),
                    /* @__PURE__ */ v.jsx(
                      tr,
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
                  d && /* @__PURE__ */ v.jsx("div", { className: "error-box", role: "alert", children: d }),
                  /* @__PURE__ */ v.jsx(je, { type: "submit", className: "h-10 w-full text-sm", children: s ? h ? "正在创建…" : "正在登录…" : h ? "创建账号" : "登录平台 →" })
                ] })
              }
            ) }, b)
          )
        ]
      }
    )
  ] });
}
const xx = {
  done: "今日已签到",
  pending: "待签到",
  failed: "签到失败",
  unknown: "待确认",
  done_before: "此前已签到",
  success: "本次签到成功",
  network_error: "接口异常"
}, Ev = {
  unscanned: "尚未扫描关注的超话。",
  scanning: "正在读取微博关注列表…",
  error: "扫描失败，请稍后刷新超话。",
  expired: "微博登录已失效，请重新扫码。",
  partial: "列表未完整读取，当前仅展示已读取的部分，请刷新重试。"
};
async function wx(n, a, l = "GET") {
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
function dA({
  items: n,
  historical: a = !1
}) {
  return /* @__PURE__ */ v.jsx("ul", { className: "topic-list", children: n.map((l, o) => /* @__PURE__ */ v.jsxs("li", { children: [
    /* @__PURE__ */ v.jsx("span", { className: "topic-name", children: l.name }),
    /* @__PURE__ */ v.jsx("span", { className: `topic-status ${l.status}`, children: a && l.status === "pending" ? "未执行" : a && l.status === "unknown" ? "状态未识别" : xx[l.status] || "待确认" })
  ] }, o)) });
}
function mA({
  accountId: n,
  selection: a,
  allItems: l,
  items: o,
  ready: s
}) {
  const [f, d] = x.useState({}), [m, h] = x.useState({}), [p, b] = x.useState({}), y = m[n] && m[n].revision > a.revision ? m[n] : a, w = f[n] || y, E = p[n] || {}, M = new Set(w.topic_ids), O = w.mode !== y.mode || [...w.topic_ids].sort().join(",") !== [...y.topic_ids].sort().join(",");
  function C(T) {
    d((j) => ({ ...j, [n]: T })), b((j) => ({ ...j, [n]: {} }));
  }
  function D(T) {
    const j = new Set(M);
    o.forEach((z) => {
      z.id && (T ? j.add(z.id) : j.delete(z.id));
    }), C({ ...w, topic_ids: [...j] });
  }
  async function A() {
    b((T) => ({ ...T, [n]: { saving: !0 } }));
    try {
      const T = await fetch(
        `/api/accounts/${encodeURIComponent(n)}/topics/selection`,
        {
          method: "PUT",
          headers: {
            "X-Requested-With": "WeiboPortal",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            mode: w.mode,
            topic_ids: w.mode === "all" ? [] : w.topic_ids
          })
        }
      );
      T.status === 401 && location.assign("/login");
      const j = await T.json();
      if (!T.ok)
        throw new Error(
          typeof j.detail == "string" ? j.detail : "保存失败，请稍后重试"
        );
      h((z) => ({ ...z, [n]: j.selection })), d((z) => {
        const R = { ...z };
        return delete R[n], R;
      }), b((z) => ({
        ...z,
        [n]: { message: "已保存，手动和定时签到均按此范围执行。" }
      })), document.dispatchEvent(new CustomEvent("credit:topics-saved"));
    } catch (T) {
      b((j) => ({
        ...j,
        [n]: {
          error: T instanceof TypeError ? "无法连接服务，请稍后重试" : T.message
        }
      }));
    }
  }
  const _ = w.topic_ids.filter(
    (T) => !l.some((j) => j.id === T)
  ).length;
  return s ? /* @__PURE__ */ v.jsxs("div", { className: "topic-selection", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "selection-settings", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
        /* @__PURE__ */ v.jsx(At, { htmlFor: "topic-mode", children: "签到范围" }),
        /* @__PURE__ */ v.jsx(
          Vo,
          {
            id: "topic-mode",
            label: "签到范围",
            value: w.mode,
            onChange: (T) => {
              E.saving || C({
                ...w,
                mode: T,
                topic_ids: T === "selected" && w.mode === "all" ? l.flatMap(
                  (j) => j.id ? [j.id] : []
                ) : w.topic_ids
              });
            },
            options: [
              { value: "all", label: "全部关注超话" },
              { value: "selected", label: "仅选中的超话" }
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "selection-actions", children: [
        O && /* @__PURE__ */ v.jsx(
          je,
          {
            type: "button",
            size: "sm",
            variant: "ghost",
            disabled: E.saving,
            onClick: () => C(y),
            children: "撤销修改"
          }
        ),
        /* @__PURE__ */ v.jsx(
          je,
          {
            type: "button",
            size: "sm",
            disabled: !O || E.saving,
            onClick: A,
            children: E.saving ? "正在保存…" : "保存签到范围"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("p", { className: "topics-notice", children: [
      w.mode === "all" ? "包含以后新关注的超话。" : `已选 ${M.size} 个；以后新关注的超话需手动勾选。`,
      w.mode === "selected" && !M.size && "未选择时暂停该微博的手动和定时签到。",
      O && /* @__PURE__ */ v.jsx("strong", { children: " 有未保存的修改。" })
    ] }),
    E.error && /* @__PURE__ */ v.jsx("p", { role: "alert", className: "credit-form-error", children: E.error }),
    E.message && /* @__PURE__ */ v.jsx("p", { role: "status", className: "selection-saved", children: E.message }),
    w.mode === "selected" && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsxs("div", { className: "selection-bulk", children: [
        /* @__PURE__ */ v.jsx(
          je,
          {
            type: "button",
            size: "sm",
            variant: "outline",
            disabled: E.saving || !o.some((T) => T.id),
            onClick: () => D(!0),
            children: "全选当前结果"
          }
        ),
        /* @__PURE__ */ v.jsx(
          je,
          {
            type: "button",
            size: "sm",
            variant: "ghost",
            disabled: E.saving || !o.some((T) => T.id),
            onClick: () => D(!1),
            children: "取消当前结果"
          }
        )
      ] }),
      _ > 0 && /* @__PURE__ */ v.jsxs("p", { className: "topics-notice", children: [
        "有 ",
        _,
        " 个已选超话不在当前列表中，请刷新确认。",
        /* @__PURE__ */ v.jsx(
          je,
          {
            type: "button",
            size: "sm",
            variant: "ghost",
            disabled: E.saving,
            onClick: () => C({
              ...w,
              topic_ids: w.topic_ids.filter(
                (T) => l.some((j) => j.id === T)
              )
            }),
            children: "移除未显示的选择"
          }
        )
      ] })
    ] }),
    o.length ? /* @__PURE__ */ v.jsx("ul", { className: "topic-list", children: o.map((T, j) => /* @__PURE__ */ v.jsxs("li", { children: [
      w.mode === "selected" ? /* @__PURE__ */ v.jsxs(
        je,
        {
          type: "button",
          variant: "ghost",
          className: "topic-choice whitespace-normal h-auto justify-start",
          role: "checkbox",
          "aria-checked": !!T.id && M.has(T.id),
          "aria-label": T.name,
          disabled: !T.id || E.saving,
          onClick: () => {
            const z = new Set(M);
            z.has(T.id) ? z.delete(T.id) : z.add(T.id), C({ ...w, topic_ids: [...z] });
          },
          children: [
            /* @__PURE__ */ v.jsx("span", { className: "topic-check", "aria-hidden": "true", children: T.id && M.has(T.id) && /* @__PURE__ */ v.jsx(Gd, { size: 14 }) }),
            /* @__PURE__ */ v.jsxs("span", { className: "topic-name", children: [
              T.name,
              !T.id && /* @__PURE__ */ v.jsx("small", { children: "缺少超话标识，请刷新后选择" })
            ] })
          ]
        }
      ) : /* @__PURE__ */ v.jsx("span", { className: "topic-name", children: T.name }),
      /* @__PURE__ */ v.jsx("span", { className: `topic-status ${T.status}`, children: xx[T.status] || "待确认" })
    ] }, T.id || j)) }) : /* @__PURE__ */ v.jsx("p", { className: "topics-empty", children: "没有可显示的超话" })
  ] }) : null;
}
function hA({
  accounts: n
}) {
  const [a, l] = x.useState(n), [o, s] = x.useState(n[0]?.id || ""), [f, d] = x.useState(""), [m, h] = x.useState({
    accountId: "",
    method: "GET",
    revision: 0
  }), [p, b] = x.useState({ accountId: "", loading: !1 }), y = p.accountId === o ? p : { loading: !!o }, w = y.scan;
  function E(O = "GET") {
    h((C) => ({
      accountId: o,
      method: O,
      revision: C.revision + 1
    }));
  }
  x.useEffect(() => {
    if (!o) return;
    const O = new AbortController();
    b((D) => ({
      accountId: o,
      scan: D.accountId === o ? D.scan : void 0,
      selection: D.accountId === o ? D.selection : void 0,
      loading: !0
    }));
    const C = m.accountId === o ? m.method : "GET";
    return wx(
      `/api/accounts/${encodeURIComponent(o)}/topics${C === "POST" ? "/refresh" : ""}`,
      O.signal,
      C
    ).then(({ scan: D, selection: A }) => {
      O.signal.aborted || b({ accountId: o, scan: D, selection: A, loading: !1 });
    }).catch((D) => {
      O.signal.aborted || b((A) => ({
        ...A,
        loading: !1,
        error: D instanceof TypeError ? "无法连接服务，请稍后重试" : D.message
      }));
    }), () => O.abort();
  }, [o, m]), x.useEffect(() => {
    if (!(!w || y.loading || y.error)) {
      if (w.status === "unscanned")
        h((O) => ({
          accountId: o,
          method: "POST",
          revision: O.revision + 1
        }));
      else if (w.status === "scanning") {
        const O = setTimeout(
          () => h((C) => ({
            accountId: o,
            method: "GET",
            revision: C.revision + 1
          })),
          2e3
        );
        return () => clearTimeout(O);
      }
    }
  }, [o, w, y.loading, y.error]), x.useEffect(() => {
    const O = (D) => {
      const A = D.detail?.accounts;
      A && (l(A), s(
        (_) => A.some((T) => T.id === _) ? _ : A[0]?.id || ""
      )), h((_) => ({
        accountId: "",
        method: "GET",
        revision: _.revision + 1
      }));
    }, C = (D) => {
      s(D.detail.id), d("");
    };
    return document.addEventListener("credit:calendar-refresh", O), document.addEventListener("credit:topics-select", C), () => {
      document.removeEventListener("credit:calendar-refresh", O), document.removeEventListener("credit:topics-select", C);
    };
  }, []);
  const M = (w?.items || []).filter(
    (O) => O.name.toLocaleLowerCase().includes(f.trim().toLocaleLowerCase())
  );
  return /* @__PURE__ */ v.jsxs(
    "section",
    {
      id: "followed-topics",
      className: "followed-topics",
      "aria-label": "关注的超话",
      children: [
        /* @__PURE__ */ v.jsxs("div", { className: "topics-heading", children: [
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx("h2", { children: "关注的超话" }),
            /* @__PURE__ */ v.jsx("p", { children: "查看今日状态，设置这个微博需要签到的超话。" })
          ] }),
          o && /* @__PURE__ */ v.jsx(
            je,
            {
              type: "button",
              size: "sm",
              variant: "outline",
              disabled: y.loading || w?.status === "scanning",
              onClick: () => E("POST"),
              children: y.loading || w?.status === "scanning" ? "正在扫描…" : "刷新超话"
            }
          )
        ] }),
        a.length ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsxs("div", { className: "topics-toolbar", children: [
            /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
              /* @__PURE__ */ v.jsx(At, { htmlFor: "topics-account", children: "微博账号" }),
              /* @__PURE__ */ v.jsx(
                Vo,
                {
                  id: "topics-account",
                  label: "微博账号",
                  value: o,
                  onChange: (O) => {
                    s(O), d("");
                  },
                  options: a.map((O) => ({
                    value: O.id,
                    label: `${O.nickname || "微博用户"} · ${O.uid}`
                  }))
                }
              )
            ] }),
            /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
              /* @__PURE__ */ v.jsx(At, { htmlFor: "topic-search", children: "搜索超话" }),
              /* @__PURE__ */ v.jsx(
                tr,
                {
                  id: "topic-search",
                  type: "search",
                  placeholder: "输入超话名称",
                  value: f,
                  onChange: (O) => d(O.target.value)
                }
              )
            ] })
          ] }),
          y.error && /* @__PURE__ */ v.jsxs("p", { role: "alert", className: "credit-form-error", children: [
            y.error,
            " ",
            /* @__PURE__ */ v.jsx(
              je,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                onClick: () => E(),
                children: "重试加载"
              }
            )
          ] }),
          w && Ev[w.status] && /* @__PURE__ */ v.jsx(
            "p",
            {
              className: "topics-notice",
              role: w.status === "error" || w.status === "expired" ? "alert" : "status",
              children: Ev[w.status]
            }
          ),
          w?.scanned_at ? /* @__PURE__ */ v.jsxs("div", { className: "topics-summary", children: [
            /* @__PURE__ */ v.jsxs("span", { children: [
              w.complete ? "关注" : "已读取",
              " ",
              w.items.length,
              " 个超话",
              w.fresh ? ` · 今日已签 ${w.items.filter((O) => O.status === "done").length} 个` : " · 今日状态待刷新"
            ] }),
            /* @__PURE__ */ v.jsxs("span", { children: [
              "同步于",
              " ",
              new Intl.DateTimeFormat("zh-CN", {
                timeZone: "Asia/Shanghai",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
              }).format(w.scanned_at * 1e3)
            ] })
          ] }) : null,
          y.loading && !w && /* @__PURE__ */ v.jsx("p", { className: "topics-empty", role: "status", children: "正在加载超话…" }),
          /* @__PURE__ */ v.jsx(
            mA,
            {
              accountId: o,
              selection: y.selection || { mode: "all", topic_ids: [], revision: 0 },
              allItems: w?.items || [],
              items: M,
              ready: !!w && !!y.selection
            }
          ),
          !M.length && w?.scanned_at ? /* @__PURE__ */ v.jsx("p", { className: "topics-empty", children: f ? "没有匹配的超话" : w.complete ? "当前没有关注的超话" : "暂未获取到超话，请刷新重试" }) : null
        ] }) : /* @__PURE__ */ v.jsx("p", { className: "topics-empty", children: "绑定微博后显示你关注的超话。" })
      ]
    }
  );
}
function Sx({ runId: n }) {
  const [a, l] = x.useState(!1), [o, s] = x.useState(0), [f, d] = x.useState(), [m, h] = x.useState("");
  return x.useEffect(() => {
    if (!a) return;
    const p = new AbortController();
    let b;
    return h(""), wx(
      `/api/runs/${encodeURIComponent(n)}/topics`,
      p.signal
    ).then((y) => {
      p.signal.aborted || (d(y), ["queued", "running"].includes(y.status) && (b = setTimeout(() => s((w) => w + 1), 2e3)));
    }).catch((y) => {
      p.signal.aborted || h(
        y instanceof TypeError ? "无法连接服务，请稍后重试" : y.message
      );
    }), () => {
      p.abort(), clearTimeout(b);
    };
  }, [a, n, o]), /* @__PURE__ */ v.jsxs("div", { className: "run-topics", children: [
    /* @__PURE__ */ v.jsx(
      je,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        "aria-expanded": a,
        onClick: () => l((p) => !p),
        children: a ? "收起超话明细" : "查看超话明细"
      }
    ),
    a && /* @__PURE__ */ v.jsx("div", { className: "run-topics-content", children: m ? /* @__PURE__ */ v.jsxs("p", { role: "alert", className: "credit-form-error", children: [
      m,
      " ",
      /* @__PURE__ */ v.jsx(
        je,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: () => s((p) => p + 1),
          children: "重试"
        }
      )
    ] }) : f ? f.items.length ? /* @__PURE__ */ v.jsx(dA, { items: f.items, historical: !0 }) : /* @__PURE__ */ v.jsx("p", { className: "topics-notice", children: "此记录暂无逐个超话明细。" }) : /* @__PURE__ */ v.jsx("p", { role: "status", children: "正在加载超话明细…" }) })
  ] });
}
const td = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  active: "执行中",
  none: "无记录"
}, pA = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  queued: "等待执行",
  running: "正在签到",
  expired: "登录失效",
  network_error: "网络 / 接口异常",
  no_topics: "未获取到超话",
  interrupted: "任务中断"
}, gA = (n) => Vt(n, "yyyy-MM-dd"), Uo = (n) => Vb(n, "yyyy-MM-dd", /* @__PURE__ */ new Date()), nd = () => new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(/* @__PURE__ */ new Date());
function Ov(n, a) {
  const [l, o] = x.useState({ url: "", loading: !1 });
  return x.useEffect(() => {
    if (!n) return;
    const s = new AbortController();
    return o((f) => ({
      url: n,
      data: f.url === n ? f.data : void 0,
      loading: !0
    })), (async () => {
      try {
        const f = await fetch(n, { signal: s.signal });
        if (f.status === 401) {
          location.assign("/login");
          return;
        }
        const d = await f.json();
        if (!f.ok)
          throw new Error(
            typeof d.detail == "string" ? d.detail : "暂时无法加载，请重试"
          );
        s.signal.aborted || o({ url: n, data: d, loading: !1 });
      } catch (f) {
        s.signal.aborted || o((d) => ({
          url: n,
          data: d.url === n ? d.data : void 0,
          error: f instanceof TypeError ? "无法连接服务，请稍后重试" : f.message,
          loading: !1
        }));
      }
    })(), () => s.abort();
  }, [n, a]), l.url === n ? l : { url: n, loading: !!n };
}
function yA({
  accounts: n
}) {
  const [a, l] = x.useState(n), [o, s] = x.useState(n[0]?.id || ""), [f, d] = x.useState(
    () => Uo(nd().slice(0, 7) + "-01")
  ), [m, h] = x.useState(() => Uo(nd())), [p, b] = x.useState(1), [y, w] = x.useState(0), E = Vt(f, "yyyy-MM"), M = gA(m), O = Ov(
    o ? `/api/calendar?account_id=${encodeURIComponent(o)}&month=${E}` : "",
    y
  ), C = O.data, D = C?.today || nd(), A = Object.fromEntries(
    (C?.days || []).map((R) => [R.date, R])
  ), _ = Array.from(
    { length: Lb(f) },
    (R, U) => `${E}-${String(U + 1).padStart(2, "0")}`
  ), T = A[M], j = Ov(
    o && C && T?.attempts ? `/api/runs?account_id=${encodeURIComponent(o)}&start=${M}&end=${M}&page=${p}&page_size=5` : "",
    y
  );
  x.useEffect(() => {
    const R = (U) => {
      const F = U.detail?.accounts;
      F && (l(F), s(
        ($) => F.some((te) => te.id === $) ? $ : F[0]?.id || ""
      )), w(($) => $ + 1);
    };
    return document.addEventListener("credit:calendar-refresh", R), () => document.removeEventListener("credit:calendar-refresh", R);
  }, []);
  function z(R) {
    d(R), h(
      Uo(
        Vt(R, "yyyy-MM") === D.slice(0, 7) ? D : Vt(R, "yyyy-MM") + "-01"
      )
    ), b(1);
  }
  return /* @__PURE__ */ v.jsxs("div", { className: "checkin-calendar", "aria-label": "签到日历", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "checkin-calendar-heading", children: [
      /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsx("h2", { children: "签到日历" }),
        /* @__PURE__ */ v.jsx("p", { children: "北京时间 · 按微博账号统计" })
      ] }),
      a.length > 0 && /* @__PURE__ */ v.jsx(
        je,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: () => w((R) => R + 1),
          children: "刷新日历"
        }
      )
    ] }),
    a.length === 0 ? /* @__PURE__ */ v.jsxs("div", { className: "checkin-calendar-empty", children: [
      /* @__PURE__ */ v.jsx("p", { children: "绑定微博后，在这里查看每天的签到进度。" }),
      /* @__PURE__ */ v.jsx(je, { type: "button", variant: "outline", "data-action": "bind", children: "绑定微博" })
    ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsxs("div", { className: "checkin-calendar-toolbar", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "credit-field", children: [
          /* @__PURE__ */ v.jsx(At, { htmlFor: "calendar-account", children: "微博账号" }),
          /* @__PURE__ */ v.jsx(
            Vo,
            {
              id: "calendar-account",
              label: "微博账号",
              value: o,
              onChange: (R) => {
                s(R), b(1);
              },
              options: a.map((R) => ({
                value: R.id,
                label: `${R.nickname || "微博用户"} · ${R.uid}`
              }))
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(
          je,
          {
            variant: "ghost",
            size: "sm",
            type: "button",
            onClick: () => z(Uo(D.slice(0, 7) + "-01")),
            children: "回到本月"
          }
        )
      ] }),
      O.loading && /* @__PURE__ */ v.jsx("p", { className: "checkin-calendar-message", role: "status", children: "正在加载签到日历…" }),
      O.error && /* @__PURE__ */ v.jsxs(
        "div",
        {
          className: "checkin-calendar-message credit-form-error",
          role: "alert",
          children: [
            O.error,
            " ",
            /* @__PURE__ */ v.jsx(
              je,
              {
                variant: "outline",
                type: "button",
                size: "sm",
                onClick: () => w((R) => R + 1),
                children: "重试"
              }
            )
          ]
        }
      ),
      C && /* @__PURE__ */ v.jsx(v.Fragment, { children: /* @__PURE__ */ v.jsxs("div", { className: "checkin-calendar-summary", children: [
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx("span", { children: "当月成功签到" }),
          /* @__PURE__ */ v.jsxs("strong", { "data-testid": "calendar-success-days", children: [
            C.summary.success_days,
            /* @__PURE__ */ v.jsx("small", { children: "天" })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx("span", { children: "当前连续签到" }),
          /* @__PURE__ */ v.jsxs("strong", { "data-testid": "calendar-streak", children: [
            C.summary.streak,
            /* @__PURE__ */ v.jsx("small", { children: "天" })
          ] })
        ] }),
        /* @__PURE__ */ v.jsx("p", { children: "每天完整成功计 1 天。今天未成功时，连续天数从昨天起算。" })
      ] }) }),
      /* @__PURE__ */ v.jsxs("div", { className: "checkin-calendar-body", "aria-busy": O.loading, children: [
        /* @__PURE__ */ v.jsxs("div", { className: "checkin-month", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "checkin-month-heading", children: [
            /* @__PURE__ */ v.jsx("h3", { "aria-live": "polite", children: Vt(f, "yyyy年M月") }),
            /* @__PURE__ */ v.jsxs("div", { className: "checkin-month-navigation", children: [
              /* @__PURE__ */ v.jsx(
                je,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-sm",
                  "aria-label": "上个月签到日历",
                  onClick: () => z(Bs(f, -1)),
                  children: /* @__PURE__ */ v.jsx(Ib, { "aria-hidden": "true" })
                }
              ),
              /* @__PURE__ */ v.jsx(
                je,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-sm",
                  "aria-label": "下个月签到日历",
                  disabled: E >= D.slice(0, 7),
                  onClick: () => z(Bs(f, 1)),
                  children: /* @__PURE__ */ v.jsx(Kb, { "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ v.jsx(
            "div",
            {
              className: "checkin-month-grid",
              role: "group",
              "aria-label": "每日签到方格",
              children: _.map((R) => {
                const U = A[R]?.status || "none", F = R > D, $ = `${Vt(Uo(R), "yyyy年M月d日")}，${C ? F ? "未到日期" : td[U] : O.error ? "加载失败" : "加载中"}`;
                return /* @__PURE__ */ v.jsx(
                  je,
                  {
                    type: "button",
                    variant: "outline",
                    size: "icon",
                    className: `checkin-tile ${U}`,
                    disabled: !C || F,
                    "aria-label": $,
                    title: $,
                    "aria-pressed": R === M,
                    "aria-current": R === D ? "date" : void 0,
                    onClick: () => {
                      h(Uo(R)), b(1);
                    },
                    children: U === "success" ? /* @__PURE__ */ v.jsx(Gd, { "aria-hidden": "true" }) : U === "partial" ? /* @__PURE__ */ v.jsx(wM, { "aria-hidden": "true" }) : U === "failed" ? /* @__PURE__ */ v.jsx(CM, { "aria-hidden": "true" }) : U === "active" ? /* @__PURE__ */ v.jsx(bM, { "aria-hidden": "true" }) : /* @__PURE__ */ v.jsx("span", { children: R.slice(-2) })
                  },
                  R
                );
              })
            }
          ),
          /* @__PURE__ */ v.jsx("div", { className: "checkin-calendar-legend", children: Object.entries(td).map(
            ([R, U]) => /* @__PURE__ */ v.jsxs("span", { children: [
              /* @__PURE__ */ v.jsx(
                "i",
                {
                  className: `checkin-legend-cell ${R}`,
                  "aria-hidden": "true"
                }
              ),
              U
            ] }, R)
          ) })
        ] }),
        /* @__PURE__ */ v.jsxs("section", { className: "checkin-day-details", "aria-label": "当日签到明细", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "checkin-day-heading", children: [
            /* @__PURE__ */ v.jsxs("h3", { children: [
              Vt(m, "M月d日"),
              /* @__PURE__ */ v.jsx("small", { children: "签到明细" })
            ] }),
            C && /* @__PURE__ */ v.jsx("span", { className: `checkin-status ${T?.status || "none"}`, children: td[T?.status || "none"] })
          ] }),
          !O.loading && !O.error && T?.attempts === 0 && /* @__PURE__ */ v.jsx("p", { className: "checkin-day-empty", children: "当天没有签到记录" }),
          j.loading && /* @__PURE__ */ v.jsx("p", { className: "checkin-day-empty", role: "status", children: "正在加载当天明细…" }),
          j.error && /* @__PURE__ */ v.jsxs(
            "div",
            {
              className: "checkin-calendar-message credit-form-error",
              role: "alert",
              children: [
                j.error,
                /* @__PURE__ */ v.jsx(
                  je,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => w((R) => R + 1),
                    children: "重试"
                  }
                )
              ]
            }
          ),
          j.data && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsxs("p", { className: "checkin-day-count", children: [
              "当天共 ",
              j.data.total,
              " 次执行"
            ] }),
            /* @__PURE__ */ v.jsx("ol", { className: "checkin-run-list", children: j.data.items.map((R) => /* @__PURE__ */ v.jsxs("li", { children: [
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("span", { className: `badge ${R.status}`, children: pA[R.status] || R.status }),
                /* @__PURE__ */ v.jsx(
                  "time",
                  {
                    dateTime: new Date(
                      R.started_at * 1e3
                    ).toISOString(),
                    children: new Intl.DateTimeFormat("zh-CN", {
                      timeZone: "Asia/Shanghai",
                      hour: "2-digit",
                      minute: "2-digit"
                    }).format(R.started_at * 1e3)
                  }
                )
              ] }),
              /* @__PURE__ */ v.jsx("p", { children: R.message }),
              /* @__PURE__ */ v.jsx(Sx, { runId: R.id }),
              /* @__PURE__ */ v.jsxs("small", { children: [
                R.trigger === "scheduled" ? "定时签到" : "手动签到",
                " ",
                "· 已签 ",
                R.done_before,
                " / 新签 ",
                R.success,
                " / 失败",
                " ",
                R.failed,
                " · 共 ",
                R.total,
                " 个超话"
              ] })
            ] }, R.id)) }),
            j.data.total > 5 && /* @__PURE__ */ v.jsxs("div", { className: "checkin-day-pager", children: [
              /* @__PURE__ */ v.jsx(
                je,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  disabled: p <= 1,
                  onClick: () => b((R) => R - 1),
                  children: "上一页"
                }
              ),
              /* @__PURE__ */ v.jsxs("span", { children: [
                "第 ",
                p,
                " 页"
              ] }),
              /* @__PURE__ */ v.jsx(
                je,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  disabled: p * 5 >= j.data.total,
                  onClick: () => b((R) => R + 1),
                  children: "下一页"
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Xs = /* @__PURE__ */ new Map();
function vA(n = document) {
  n.querySelectorAll("[data-credit-form]").forEach((a) => {
    if (Xs.has(a)) return;
    const l = VS.createRoot(a);
    if (a.classList.add("credit-controls"), Xs.set(a, l), a.dataset.creditForm === "login") {
      l.render(/* @__PURE__ */ v.jsx(fA, {}));
      return;
    }
    if (a.dataset.creditForm === "calendar" || a.dataset.creditForm === "topics") {
      const s = JSON.parse(a.dataset.props || "{}");
      l.render(
        a.dataset.creditForm === "calendar" ? /* @__PURE__ */ v.jsx(yA, { accounts: s.accounts }) : /* @__PURE__ */ v.jsx(hA, { accounts: s.accounts })
      );
      return;
    }
    const o = JSON.parse(a.dataset.props || "{}");
    o.kind === "plan" ? l.render(/* @__PURE__ */ v.jsx(uA, { plan: o.plan })) : o.kind === "filters" ? l.render(
      /* @__PURE__ */ v.jsx(
        lA,
        {
          admin: o.admin,
          values: o.values,
          statuses: o.statuses
        }
      )
    ) : o.kind === "users" ? l.render(/* @__PURE__ */ v.jsx(iA, { search: o.search })) : o.kind === "system-settings" ? l.render(/* @__PURE__ */ v.jsx(cA, { settings: o.settings })) : o.kind === "run-topics" && l.render(/* @__PURE__ */ v.jsx(Sx, { runId: o.runId }));
  });
}
function MA(n) {
  for (const [a, l] of Xs)
    n.contains(a) && (l.unmount(), Xs.delete(a));
}
vA();
export {
  vA as mountControls,
  MA as unmountControls
};
