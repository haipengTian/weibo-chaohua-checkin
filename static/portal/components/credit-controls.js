var iy = (n) => {
  throw TypeError(n);
};
var sy = (n, a, l) => a.has(n) || iy("Cannot " + l);
var Ht = (n, a, l) => (sy(n, a, "read from private field"), l ? l.call(n) : a.get(n)), cy = (n, a, l) => a.has(n) ? iy("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(n) : a.set(n, l), Af = (n, a, l, o) => (sy(n, a, "write to private field"), o ? o.call(n, l) : a.set(n, l), l);
function _S(n, a) {
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
function AS(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Nf = { exports: {} }, Pl = {};
var uy;
function NS() {
  if (uy) return Pl;
  uy = 1;
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
  return Pl.Fragment = a, Pl.jsx = l, Pl.jsxs = l, Pl;
}
var fy;
function RS() {
  return fy || (fy = 1, Nf.exports = NS()), Nf.exports;
}
var x = RS(), Rf = { exports: {} }, Gl = {}, kf = { exports: {} }, zf = {};
var dy;
function kS() {
  return dy || (dy = 1, (function(n) {
    function a(Y, F) {
      var K = Y.length;
      Y.push(F);
      e: for (; 0 < K; ) {
        var ne = K - 1 >>> 1, W = Y[ne];
        if (0 < s(W, F))
          Y[ne] = F, Y[K] = W, K = ne;
        else break e;
      }
    }
    function l(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function o(Y) {
      if (Y.length === 0) return null;
      var F = Y[0], K = Y.pop();
      if (K !== F) {
        Y[0] = K;
        e: for (var ne = 0, W = Y.length, D = W >>> 1; ne < D; ) {
          var V = 2 * (ne + 1) - 1, J = Y[V], ae = V + 1, re = Y[ae];
          if (0 > s(J, K))
            ae < W && 0 > s(re, J) ? (Y[ne] = re, Y[ae] = K, ne = ae) : (Y[ne] = J, Y[V] = K, ne = V);
          else if (ae < W && 0 > s(re, K))
            Y[ne] = re, Y[ae] = K, ne = ae;
          else break e;
        }
      }
      return F;
    }
    function s(Y, F) {
      var K = Y.sortIndex - F.sortIndex;
      return K !== 0 ? K : Y.id - F.id;
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
    var h = [], p = [], v = 1, y = null, S = 3, E = !1, T = !1, O = !1, C = !1, M = typeof setTimeout == "function" ? setTimeout : null, R = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    function k(Y) {
      for (var F = l(p); F !== null; ) {
        if (F.callback === null) o(p);
        else if (F.startTime <= Y)
          o(p), F.sortIndex = F.expirationTime, a(h, F);
        else break;
        F = l(p);
      }
    }
    function H(Y) {
      if (O = !1, k(Y), !T)
        if (l(h) !== null)
          T = !0, z || (z = !0, ee());
        else {
          var F = l(p);
          F !== null && me(H, F.startTime - Y);
        }
    }
    var z = !1, N = -1, U = 5, Q = -1;
    function $() {
      return C ? !0 : !(n.unstable_now() - Q < U);
    }
    function te() {
      if (C = !1, z) {
        var Y = n.unstable_now();
        Q = Y;
        var F = !0;
        try {
          e: {
            T = !1, O && (O = !1, R(N), N = -1), E = !0;
            var K = S;
            try {
              t: {
                for (k(Y), y = l(h); y !== null && !(y.expirationTime > Y && $()); ) {
                  var ne = y.callback;
                  if (typeof ne == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var W = ne(
                      y.expirationTime <= Y
                    );
                    if (Y = n.unstable_now(), typeof W == "function") {
                      y.callback = W, k(Y), F = !0;
                      break t;
                    }
                    y === l(h) && o(h), k(Y);
                  } else o(h);
                  y = l(h);
                }
                if (y !== null) F = !0;
                else {
                  var D = l(p);
                  D !== null && me(
                    H,
                    D.startTime - Y
                  ), F = !1;
                }
              }
              break e;
            } finally {
              y = null, S = K, E = !1;
            }
            F = void 0;
          }
        } finally {
          F ? ee() : z = !1;
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
        M(te, 0);
      };
    function me(Y, F) {
      N = M(function() {
        Y(n.unstable_now());
      }, F);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, n.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : U = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, n.unstable_next = function(Y) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = S;
      }
      var K = S;
      S = F;
      try {
        return Y();
      } finally {
        S = K;
      }
    }, n.unstable_requestPaint = function() {
      C = !0;
    }, n.unstable_runWithPriority = function(Y, F) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var K = S;
      S = Y;
      try {
        return F();
      } finally {
        S = K;
      }
    }, n.unstable_scheduleCallback = function(Y, F, K) {
      var ne = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ne + K : ne) : K = ne, Y) {
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
      return W = K + W, Y = {
        id: v++,
        callback: F,
        priorityLevel: Y,
        startTime: K,
        expirationTime: W,
        sortIndex: -1
      }, K > ne ? (Y.sortIndex = K, a(p, Y), l(h) === null && Y === l(p) && (O ? (R(N), N = -1) : O = !0, me(H, K - ne))) : (Y.sortIndex = W, a(h, Y), T || E || (T = !0, z || (z = !0, ee()))), Y;
    }, n.unstable_shouldYield = $, n.unstable_wrapCallback = function(Y) {
      var F = S;
      return function() {
        var K = S;
        S = F;
        try {
          return Y.apply(this, arguments);
        } finally {
          S = K;
        }
      };
    };
  })(zf)), zf;
}
var my;
function zS() {
  return my || (my = 1, kf.exports = kS()), kf.exports;
}
var jf = { exports: {} }, xe = {};
var hy;
function jS() {
  if (hy) return xe;
  hy = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = Symbol.iterator;
  function E(D) {
    return D === null || typeof D != "object" ? null : (D = S && D[S] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var T = {
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
  function M(D, V, J) {
    this.props = D, this.context = V, this.refs = C, this.updater = J || T;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(D, V) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, D, V, "setState");
  }, M.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function R() {
  }
  R.prototype = M.prototype;
  function _(D, V, J) {
    this.props = D, this.context = V, this.refs = C, this.updater = J || T;
  }
  var k = _.prototype = new R();
  k.constructor = _, O(k, M.prototype), k.isPureReactComponent = !0;
  var H = Array.isArray;
  function z() {
  }
  var N = { H: null, A: null, T: null, S: null }, U = Object.prototype.hasOwnProperty;
  function Q(D, V, J) {
    var ae = J.ref;
    return {
      $$typeof: n,
      type: D,
      key: V,
      ref: ae !== void 0 ? ae : null,
      props: J
    };
  }
  function $(D, V) {
    return Q(D.type, V, D.props);
  }
  function te(D) {
    return typeof D == "object" && D !== null && D.$$typeof === n;
  }
  function ee(D) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(J) {
      return V[J];
    });
  }
  var ie = /\/+/g;
  function le(D, V) {
    return typeof D == "object" && D !== null && D.key != null ? ee("" + D.key) : V.toString(36);
  }
  function me(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (typeof D.status == "string" ? D.then(z, z) : (D.status = "pending", D.then(
          function(V) {
            D.status === "pending" && (D.status = "fulfilled", D.value = V);
          },
          function(V) {
            D.status === "pending" && (D.status = "rejected", D.reason = V);
          }
        )), D.status) {
          case "fulfilled":
            return D.value;
          case "rejected":
            throw D.reason;
        }
    }
    throw D;
  }
  function Y(D, V, J, ae, re) {
    var oe = typeof D;
    (oe === "undefined" || oe === "boolean") && (D = null);
    var ve = !1;
    if (D === null) ve = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case n:
            case a:
              ve = !0;
              break;
            case v:
              return ve = D._init, Y(
                ve(D._payload),
                V,
                J,
                ae,
                re
              );
          }
      }
    if (ve)
      return re = re(D), ve = ae === "" ? "." + le(D, 0) : ae, H(re) ? (J = "", ve != null && (J = ve.replace(ie, "$&/") + "/"), Y(re, V, J, "", function(he) {
        return he;
      })) : re != null && (te(re) && (re = $(
        re,
        J + (re.key == null || D && D.key === re.key ? "" : ("" + re.key).replace(
          ie,
          "$&/"
        ) + "/") + ve
      )), V.push(re)), 1;
    ve = 0;
    var Xe = ae === "" ? "." : ae + ":";
    if (H(D))
      for (var ye = 0; ye < D.length; ye++)
        ae = D[ye], oe = Xe + le(ae, ye), ve += Y(
          ae,
          V,
          J,
          oe,
          re
        );
    else if (ye = E(D), typeof ye == "function")
      for (D = ye.call(D), ye = 0; !(ae = D.next()).done; )
        ae = ae.value, oe = Xe + le(ae, ye++), ve += Y(
          ae,
          V,
          J,
          oe,
          re
        );
    else if (oe === "object") {
      if (typeof D.then == "function")
        return Y(
          me(D),
          V,
          J,
          ae,
          re
        );
      throw V = String(D), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ve;
  }
  function F(D, V, J) {
    if (D == null) return D;
    var ae = [], re = 0;
    return Y(D, ae, "", "", function(oe) {
      return V.call(J, oe, re++);
    }), ae;
  }
  function K(D) {
    if (D._status === -1) {
      var V = D._result;
      V = V(), V.then(
        function(J) {
          (D._status === 0 || D._status === -1) && (D._status = 1, D._result = J);
        },
        function(J) {
          (D._status === 0 || D._status === -1) && (D._status = 2, D._result = J);
        }
      ), D._status === -1 && (D._status = 0, D._result = V);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var ne = typeof reportError == "function" ? reportError : function(D) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof D == "object" && D !== null && typeof D.message == "string" ? String(D.message) : String(D),
        error: D
      });
      if (!window.dispatchEvent(V)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", D);
      return;
    }
    console.error(D);
  }, W = {
    map: F,
    forEach: function(D, V, J) {
      F(
        D,
        function() {
          V.apply(this, arguments);
        },
        J
      );
    },
    count: function(D) {
      var V = 0;
      return F(D, function() {
        V++;
      }), V;
    },
    toArray: function(D) {
      return F(D, function(V) {
        return V;
      }) || [];
    },
    only: function(D) {
      if (!te(D))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return D;
    }
  };
  return xe.Activity = y, xe.Children = W, xe.Component = M, xe.Fragment = l, xe.Profiler = s, xe.PureComponent = _, xe.StrictMode = o, xe.Suspense = h, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, xe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) {
      return N.H.useMemoCache(D);
    }
  }, xe.cache = function(D) {
    return function() {
      return D.apply(null, arguments);
    };
  }, xe.cacheSignal = function() {
    return null;
  }, xe.cloneElement = function(D, V, J) {
    if (D == null)
      throw Error(
        "The argument must be a React element, but you passed " + D + "."
      );
    var ae = O({}, D.props), re = D.key;
    if (V != null)
      for (oe in V.key !== void 0 && (re = "" + V.key), V)
        !U.call(V, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && V.ref === void 0 || (ae[oe] = V[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) ae.children = J;
    else if (1 < oe) {
      for (var ve = Array(oe), Xe = 0; Xe < oe; Xe++)
        ve[Xe] = arguments[Xe + 2];
      ae.children = ve;
    }
    return Q(D.type, re, ae);
  }, xe.createContext = function(D) {
    return D = {
      $$typeof: d,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, D.Provider = D, D.Consumer = {
      $$typeof: f,
      _context: D
    }, D;
  }, xe.createElement = function(D, V, J) {
    var ae, re = {}, oe = null;
    if (V != null)
      for (ae in V.key !== void 0 && (oe = "" + V.key), V)
        U.call(V, ae) && ae !== "key" && ae !== "__self" && ae !== "__source" && (re[ae] = V[ae]);
    var ve = arguments.length - 2;
    if (ve === 1) re.children = J;
    else if (1 < ve) {
      for (var Xe = Array(ve), ye = 0; ye < ve; ye++)
        Xe[ye] = arguments[ye + 2];
      re.children = Xe;
    }
    if (D && D.defaultProps)
      for (ae in ve = D.defaultProps, ve)
        re[ae] === void 0 && (re[ae] = ve[ae]);
    return Q(D, oe, re);
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(D) {
    return { $$typeof: m, render: D };
  }, xe.isValidElement = te, xe.lazy = function(D) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: D },
      _init: K
    };
  }, xe.memo = function(D, V) {
    return {
      $$typeof: p,
      type: D,
      compare: V === void 0 ? null : V
    };
  }, xe.startTransition = function(D) {
    var V = N.T, J = {};
    N.T = J;
    try {
      var ae = D(), re = N.S;
      re !== null && re(J, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && ae.then(z, ne);
    } catch (oe) {
      ne(oe);
    } finally {
      V !== null && J.types !== null && (V.types = J.types), N.T = V;
    }
  }, xe.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, xe.use = function(D) {
    return N.H.use(D);
  }, xe.useActionState = function(D, V, J) {
    return N.H.useActionState(D, V, J);
  }, xe.useCallback = function(D, V) {
    return N.H.useCallback(D, V);
  }, xe.useContext = function(D) {
    return N.H.useContext(D);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(D, V) {
    return N.H.useDeferredValue(D, V);
  }, xe.useEffect = function(D, V) {
    return N.H.useEffect(D, V);
  }, xe.useEffectEvent = function(D) {
    return N.H.useEffectEvent(D);
  }, xe.useId = function() {
    return N.H.useId();
  }, xe.useImperativeHandle = function(D, V, J) {
    return N.H.useImperativeHandle(D, V, J);
  }, xe.useInsertionEffect = function(D, V) {
    return N.H.useInsertionEffect(D, V);
  }, xe.useLayoutEffect = function(D, V) {
    return N.H.useLayoutEffect(D, V);
  }, xe.useMemo = function(D, V) {
    return N.H.useMemo(D, V);
  }, xe.useOptimistic = function(D, V) {
    return N.H.useOptimistic(D, V);
  }, xe.useReducer = function(D, V, J) {
    return N.H.useReducer(D, V, J);
  }, xe.useRef = function(D) {
    return N.H.useRef(D);
  }, xe.useState = function(D) {
    return N.H.useState(D);
  }, xe.useSyncExternalStore = function(D, V, J) {
    return N.H.useSyncExternalStore(
      D,
      V,
      J
    );
  }, xe.useTransition = function() {
    return N.H.useTransition();
  }, xe.version = "19.2.3", xe;
}
var py;
function wd() {
  return py || (py = 1, jf.exports = jS()), jf.exports;
}
var Yf = { exports: {} }, Ut = {};
var gy;
function YS() {
  if (gy) return Ut;
  gy = 1;
  var n = wd();
  function a(h) {
    var p = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
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
  function f(h, p, v) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: h,
      containerInfo: p,
      implementation: v
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, p) {
    if (h === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Ut.createPortal = function(h, p) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(a(299));
    return f(h, p, null, v);
  }, Ut.flushSync = function(h) {
    var p = d.T, v = o.p;
    try {
      if (d.T = null, o.p = 2, h) return h();
    } finally {
      d.T = p, o.p = v, o.d.f();
    }
  }, Ut.preconnect = function(h, p) {
    typeof h == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(h, p));
  }, Ut.prefetchDNS = function(h) {
    typeof h == "string" && o.d.D(h);
  }, Ut.preinit = function(h, p) {
    if (typeof h == "string" && p && typeof p.as == "string") {
      var v = p.as, y = m(v, p.crossOrigin), S = typeof p.integrity == "string" ? p.integrity : void 0, E = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      v === "style" ? o.d.S(
        h,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: y,
          integrity: S,
          fetchPriority: E
        }
      ) : v === "script" && o.d.X(h, {
        crossOrigin: y,
        integrity: S,
        fetchPriority: E,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Ut.preinitModule = function(h, p) {
    if (typeof h == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var v = m(
            p.as,
            p.crossOrigin
          );
          o.d.M(h, {
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && o.d.M(h);
  }, Ut.preload = function(h, p) {
    if (typeof h == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var v = p.as, y = m(v, p.crossOrigin);
      o.d.L(h, v, {
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
  }, Ut.preloadModule = function(h, p) {
    if (typeof h == "string")
      if (p) {
        var v = m(p.as, p.crossOrigin);
        o.d.m(h, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(h);
  }, Ut.requestFormReset = function(h) {
    o.d.r(h);
  }, Ut.unstable_batchedUpdates = function(h, p) {
    return h(p);
  }, Ut.useFormState = function(h, p, v) {
    return d.H.useFormState(h, p, v);
  }, Ut.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, Ut.version = "19.2.3", Ut;
}
var yy;
function Cv() {
  if (yy) return Yf.exports;
  yy = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Yf.exports = YS(), Yf.exports;
}
var vy;
function HS() {
  if (vy) return Gl;
  vy = 1;
  var n = zS(), a = wd(), l = Cv();
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
        for (var g = !1, w = c.child; w; ) {
          if (w === r) {
            g = !0, r = c, i = u;
            break;
          }
          if (w === i) {
            g = !0, i = c, r = u;
            break;
          }
          w = w.sibling;
        }
        if (!g) {
          for (w = u.child; w; ) {
            if (w === r) {
              g = !0, r = u, i = c;
              break;
            }
            if (w === i) {
              g = !0, i = u, r = c;
              break;
            }
            w = w.sibling;
          }
          if (!g) throw Error(o(189));
        }
      }
      if (r.alternate !== i) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, S = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), R = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.suspense_list"), N = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), Q = /* @__PURE__ */ Symbol.for("react.activity"), $ = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), te = Symbol.iterator;
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
      case M:
        return "Profiler";
      case C:
        return "StrictMode";
      case H:
        return "Suspense";
      case z:
        return "SuspenseList";
      case Q:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case _:
          return e.displayName || "Context";
        case R:
          return (e._context.displayName || "Context") + ".Consumer";
        case k:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case N:
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
  var me = Array.isArray, Y = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ne = [], W = -1;
  function D(e) {
    return { current: e };
  }
  function V(e) {
    0 > W || (e.current = ne[W], ne[W] = null, W--);
  }
  function J(e, t) {
    W++, ne[W] = e.current, e.current = t;
  }
  var ae = D(null), re = D(null), oe = D(null), ve = D(null);
  function Xe(e, t) {
    switch (J(oe, t), J(re, e), J(ae, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Ag(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Ag(t), e = Ng(t, e);
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
    var t = ae.current, r = Ng(t, e.type);
    t !== r && (J(re, e), J(ae, r));
  }
  function Qe(e) {
    re.current === e && (V(ae), V(re)), ve.current === e && (V(ve), Bl._currentValue = K);
  }
  var Le, Ce;
  function Oe(e) {
    if (Le === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        Le = t && t[1] || "", Ce = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Le + e + Ce;
  }
  var Ge = !1;
  function Zn(e, t) {
    if (!e || Ge) return "";
    Ge = !0;
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
      var u = i.DetermineComponentFrameRoot(), g = u[0], w = u[1];
      if (g && w) {
        var A = g.split(`
`), q = w.split(`
`);
        for (c = i = 0; i < A.length && !A[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (i === A.length || c === q.length)
          for (i = A.length - 1, c = q.length - 1; 1 <= i && 0 <= c && A[i] !== q[c]; )
            c--;
        for (; 1 <= i && 0 <= c; i--, c--)
          if (A[i] !== q[c]) {
            if (i !== 1 || c !== 1)
              do
                if (i--, c--, 0 > c || A[i] !== q[c]) {
                  var X = `
` + A[i].replace(" at new ", " at ");
                  return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
                }
              while (1 <= i && 0 <= c);
            break;
          }
      }
    } finally {
      Ge = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? Oe(r) : "";
  }
  function cr(e, t) {
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
        t += cr(e, r), r = e, e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var Zo = Object.prototype.hasOwnProperty, Io = n.unstable_scheduleCallback, Ko = n.unstable_cancelCallback, dc = n.unstable_shouldYield, ti = n.unstable_requestPaint, Nt = n.unstable_now, $o = n.unstable_getCurrentPriorityLevel, ni = n.unstable_ImmediatePriority, ai = n.unstable_UserBlockingPriority, Xr = n.unstable_NormalPriority, mc = n.unstable_LowPriority, ri = n.unstable_IdlePriority, hc = n.log, pc = n.unstable_setDisableYieldValue, ur = null, qt = null;
  function Nn(e) {
    if (typeof hc == "function" && pc(e), qt && typeof qt.setStrictMode == "function")
      try {
        qt.setStrictMode(ur, e);
      } catch {
      }
  }
  var Pt = Math.clz32 ? Math.clz32 : Ee, oi = Math.log, gc = Math.LN2;
  function Ee(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (oi(e) / gc | 0) | 0;
  }
  var Ye = 256, be = 262144, Re = 4194304;
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
    var w = i & 134217727;
    return w !== 0 ? (i = w & ~u, i !== 0 ? c = mt(i) : (g &= w, g !== 0 ? c = mt(g) : r || (r = w & ~e, r !== 0 && (c = mt(r))))) : (w = i & ~u, w !== 0 ? c = mt(w) : g !== 0 ? c = mt(g) : r || (r = i & ~e, r !== 0 && (c = mt(r)))), c === 0 ? 0 : t !== 0 && t !== c && (t & u) === 0 && (u = c & -c, r = t & -t, u >= r || u === 32 && (r & 4194048) !== 0) ? t : c;
  }
  function fr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function yc(e, t) {
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
  function li() {
    var e = Re;
    return Re <<= 1, (Re & 62914560) === 0 && (Re = 4194304), e;
  }
  function dr(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function In(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function yw(e, t, r, i, c, u) {
    var g = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var w = e.entanglements, A = e.expirationTimes, q = e.hiddenUpdates;
    for (r = g & ~r; 0 < r; ) {
      var X = 31 - Pt(r), I = 1 << X;
      w[X] = 0, A[X] = -1;
      var P = q[X];
      if (P !== null)
        for (q[X] = null, X = 0; X < P.length; X++) {
          var G = P[X];
          G !== null && (G.lane &= -536870913);
        }
      r &= ~I;
    }
    i !== 0 && dm(e, i, 0), u !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(g & ~t));
  }
  function dm(e, t, r) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - Pt(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | r & 261930;
  }
  function mm(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var i = 31 - Pt(r), c = 1 << i;
      c & t | e[i] & t && (e[i] |= t), r &= ~c;
    }
  }
  function hm(e, t) {
    var r = t & -t;
    return r = (r & 42) !== 0 ? 1 : vc(r), (r & (e.suspendedLanes | t)) !== 0 ? 0 : r;
  }
  function vc(e) {
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
  function bc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function pm() {
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ey(e.type));
  }
  function gm(e, t) {
    var r = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = r;
    }
  }
  var _a = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + _a, Vt = "__reactProps$" + _a, Qr = "__reactContainer$" + _a, wc = "__reactEvents$" + _a, vw = "__reactListeners$" + _a, bw = "__reactHandles$" + _a, ym = "__reactResources$" + _a, Jo = "__reactMarker$" + _a;
  function Sc(e) {
    delete e[Rt], delete e[Vt], delete e[wc], delete e[vw], delete e[bw];
  }
  function Fr(e) {
    var t = e[Rt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[Qr] || r[Rt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
          for (e = Bg(e); e !== null; ) {
            if (r = e[Rt]) return r;
            e = Bg(e);
          }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Zr(e) {
    if (e = e[Rt] || e[Qr]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function el(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ir(e) {
    var t = e[ym];
    return t || (t = e[ym] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dt(e) {
    e[Jo] = !0;
  }
  var vm = /* @__PURE__ */ new Set(), bm = {};
  function mr(e, t) {
    Kr(e, t), Kr(e + "Capture", t);
  }
  function Kr(e, t) {
    for (bm[e] = t, e = 0; e < t.length; e++)
      vm.add(t[e]);
  }
  var ww = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wm = {}, Sm = {};
  function Sw(e) {
    return Zo.call(Sm, e) ? !0 : Zo.call(wm, e) ? !1 : ww.test(e) ? Sm[e] = !0 : (wm[e] = !0, !1);
  }
  function ii(e, t, r) {
    if (Sw(t))
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
  function si(e, t, r) {
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
  function un(e) {
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
  function xm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xw(e, t, r) {
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
  function xc(e) {
    if (!e._valueTracker) {
      var t = xm(e) ? "checked" : "value";
      e._valueTracker = xw(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Cm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), i = "";
    return e && (i = xm(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== r ? (t.setValue(e), !0) : !1;
  }
  function ci(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Cw = /[\n"\\]/g;
  function fn(e) {
    return e.replace(
      Cw,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Cc(e, t, r, i, c, u, g, w) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + un(t)) : e.value !== "" + un(t) && (e.value = "" + un(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? Ec(e, g, un(t)) : r != null ? Ec(e, g, un(r)) : i != null && e.removeAttribute("value"), c == null && u != null && (e.defaultChecked = !!u), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.name = "" + un(w) : e.removeAttribute("name");
  }
  function Em(e, t, r, i, c, u, g, w) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || r != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        xc(e);
        return;
      }
      r = r != null ? "" + un(r) : "", t = t != null ? "" + un(t) : r, w || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? c, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = w ? e.checked : !!i, e.defaultChecked = !!i, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g), xc(e);
  }
  function Ec(e, t, r) {
    t === "number" && ci(e.ownerDocument) === e || e.defaultValue === "" + r || (e.defaultValue = "" + r);
  }
  function $r(e, t, r, i) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < r.length; c++)
        t["$" + r[c]] = !0;
      for (r = 0; r < e.length; r++)
        c = t.hasOwnProperty("$" + e[r].value), e[r].selected !== c && (e[r].selected = c), c && i && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + un(r), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === r) {
          e[c].selected = !0, i && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Om(e, t, r) {
    if (t != null && (t = "" + un(t), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? "" + un(r) : "";
  }
  function Tm(e, t, r, i) {
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
    r = un(t), e.defaultValue = r, i = e.textContent, i === r && i !== "" && i !== null && (e.value = i), xc(e);
  }
  function Jr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ew = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Mm(e, t, r) {
    var i = t.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, r) : typeof r != "number" || r === 0 || Ew.has(t) ? t === "float" ? e.cssFloat = r : e[t] = ("" + r).trim() : e[t] = r + "px";
  }
  function Dm(e, t, r) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, r != null) {
      for (var i in r)
        !r.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var c in t)
        i = t[c], t.hasOwnProperty(c) && r[c] !== i && Mm(e, c, i);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Mm(e, u, t[u]);
  }
  function Oc(e) {
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
  var Ow = /* @__PURE__ */ new Map([
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
  ]), Tw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ui(e) {
    return Tw.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function $n() {
  }
  var Tc = null;
  function Mc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var eo = null, to = null;
  function _m(e) {
    var t = Zr(e);
    if (t && (e = t.stateNode)) {
      var r = e[Vt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Cc(
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
              'input[name="' + fn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < r.length; t++) {
              var i = r[t];
              if (i !== e && i.form === e.form) {
                var c = i[Vt] || null;
                if (!c) throw Error(o(90));
                Cc(
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
              i = r[t], i.form === e.form && Cm(i);
          }
          break e;
        case "textarea":
          Om(e, r.value, r.defaultValue);
          break e;
        case "select":
          t = r.value, t != null && $r(e, !!r.multiple, t, !1);
      }
    }
  }
  var Dc = !1;
  function Am(e, t, r) {
    if (Dc) return e(t, r);
    Dc = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (Dc = !1, (eo !== null || to !== null) && (Ki(), eo && (t = eo, e = to, to = eo = null, _m(t), e)))
        for (t = 0; t < e.length; t++) _m(e[t]);
    }
  }
  function tl(e, t) {
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
  var Jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _c = !1;
  if (Jn)
    try {
      var nl = {};
      Object.defineProperty(nl, "passive", {
        get: function() {
          _c = !0;
        }
      }), window.addEventListener("test", nl, nl), window.removeEventListener("test", nl, nl);
    } catch {
      _c = !1;
    }
  var Aa = null, Ac = null, fi = null;
  function Nm() {
    if (fi) return fi;
    var e, t = Ac, r = t.length, i, c = "value" in Aa ? Aa.value : Aa.textContent, u = c.length;
    for (e = 0; e < r && t[e] === c[e]; e++) ;
    var g = r - e;
    for (i = 1; i <= g && t[r - i] === c[u - i]; i++) ;
    return fi = c.slice(e, 1 < i ? 1 - i : void 0);
  }
  function di(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function mi() {
    return !0;
  }
  function Rm() {
    return !1;
  }
  function Xt(e) {
    function t(r, i, c, u, g) {
      this._reactName = r, this._targetInst = c, this.type = i, this.nativeEvent = u, this.target = g, this.currentTarget = null;
      for (var w in e)
        e.hasOwnProperty(w) && (r = e[w], this[w] = r ? r(u) : u[w]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? mi : Rm, this.isPropagationStopped = Rm, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = mi);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = mi);
      },
      persist: function() {
      },
      isPersistent: mi
    }), t;
  }
  var hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, hi = Xt(hr), al = y({}, hr, { view: 0, detail: 0 }), Mw = Xt(al), Nc, Rc, rl, pi = y({}, al, {
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
    getModifierState: zc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== rl && (rl && e.type === "mousemove" ? (Nc = e.screenX - rl.screenX, Rc = e.screenY - rl.screenY) : Rc = Nc = 0, rl = e), Nc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Rc;
    }
  }), km = Xt(pi), Dw = y({}, pi, { dataTransfer: 0 }), _w = Xt(Dw), Aw = y({}, al, { relatedTarget: 0 }), kc = Xt(Aw), Nw = y({}, hr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Rw = Xt(Nw), kw = y({}, hr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), zw = Xt(kw), jw = y({}, hr, { data: 0 }), zm = Xt(jw), Yw = {
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
  }, Hw = {
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
  }, Bw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Uw(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Bw[e]) ? !!t[e] : !1;
  }
  function zc() {
    return Uw;
  }
  var Lw = y({}, al, {
    key: function(e) {
      if (e.key) {
        var t = Yw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = di(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zc,
    charCode: function(e) {
      return e.type === "keypress" ? di(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), qw = Xt(Lw), Pw = y({}, pi, {
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
  }), jm = Xt(Pw), Gw = y({}, al, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zc
  }), Ww = Xt(Gw), Vw = y({}, hr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xw = Xt(Vw), Qw = y({}, pi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fw = Xt(Qw), Zw = y({}, hr, {
    newState: 0,
    oldState: 0
  }), Iw = Xt(Zw), Kw = [9, 13, 27, 32], jc = Jn && "CompositionEvent" in window, ol = null;
  Jn && "documentMode" in document && (ol = document.documentMode);
  var $w = Jn && "TextEvent" in window && !ol, Ym = Jn && (!jc || ol && 8 < ol && 11 >= ol), Hm = " ", Bm = !1;
  function Um(e, t) {
    switch (e) {
      case "keyup":
        return Kw.indexOf(t.keyCode) !== -1;
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
  function Lm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var no = !1;
  function Jw(e, t) {
    switch (e) {
      case "compositionend":
        return Lm(t);
      case "keypress":
        return t.which !== 32 ? null : (Bm = !0, Hm);
      case "textInput":
        return e = t.data, e === Hm && Bm ? null : e;
      default:
        return null;
    }
  }
  function e1(e, t) {
    if (no)
      return e === "compositionend" || !jc && Um(e, t) ? (e = Nm(), fi = Ac = Aa = null, no = !1, e) : null;
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
        return Ym && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var t1 = {
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
  function qm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!t1[e.type] : t === "textarea";
  }
  function Pm(e, t, r, i) {
    eo ? to ? to.push(i) : to = [i] : eo = i, t = rs(t, "onChange"), 0 < t.length && (r = new hi(
      "onChange",
      "change",
      null,
      r,
      i
    ), e.push({ event: r, listeners: t }));
  }
  var ll = null, il = null;
  function n1(e) {
    Eg(e, 0);
  }
  function gi(e) {
    var t = el(e);
    if (Cm(t)) return e;
  }
  function Gm(e, t) {
    if (e === "change") return t;
  }
  var Wm = !1;
  if (Jn) {
    var Yc;
    if (Jn) {
      var Hc = "oninput" in document;
      if (!Hc) {
        var Vm = document.createElement("div");
        Vm.setAttribute("oninput", "return;"), Hc = typeof Vm.oninput == "function";
      }
      Yc = Hc;
    } else Yc = !1;
    Wm = Yc && (!document.documentMode || 9 < document.documentMode);
  }
  function Xm() {
    ll && (ll.detachEvent("onpropertychange", Qm), il = ll = null);
  }
  function Qm(e) {
    if (e.propertyName === "value" && gi(il)) {
      var t = [];
      Pm(
        t,
        il,
        e,
        Mc(e)
      ), Am(n1, t);
    }
  }
  function a1(e, t, r) {
    e === "focusin" ? (Xm(), ll = t, il = r, ll.attachEvent("onpropertychange", Qm)) : e === "focusout" && Xm();
  }
  function r1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return gi(il);
  }
  function o1(e, t) {
    if (e === "click") return gi(t);
  }
  function l1(e, t) {
    if (e === "input" || e === "change")
      return gi(t);
  }
  function i1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Jt = typeof Object.is == "function" ? Object.is : i1;
  function sl(e, t) {
    if (Jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var r = Object.keys(e), i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var c = r[i];
      if (!Zo.call(t, c) || !Jt(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function Fm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zm(e, t) {
    var r = Fm(e);
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
      r = Fm(r);
    }
  }
  function Im(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Im(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Km(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ci(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = ci(e.document);
    }
    return t;
  }
  function Bc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var s1 = Jn && "documentMode" in document && 11 >= document.documentMode, ao = null, Uc = null, cl = null, Lc = !1;
  function $m(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Lc || ao == null || ao !== ci(i) || (i = ao, "selectionStart" in i && Bc(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), cl && sl(cl, i) || (cl = i, i = rs(Uc, "onSelect"), 0 < i.length && (t = new hi(
      "onSelect",
      "select",
      null,
      t,
      r
    ), e.push({ event: t, listeners: i }), t.target = ao)));
  }
  function pr(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var ro = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionrun: pr("Transition", "TransitionRun"),
    transitionstart: pr("Transition", "TransitionStart"),
    transitioncancel: pr("Transition", "TransitionCancel"),
    transitionend: pr("Transition", "TransitionEnd")
  }, qc = {}, Jm = {};
  Jn && (Jm = document.createElement("div").style, "AnimationEvent" in window || (delete ro.animationend.animation, delete ro.animationiteration.animation, delete ro.animationstart.animation), "TransitionEvent" in window || delete ro.transitionend.transition);
  function gr(e) {
    if (qc[e]) return qc[e];
    if (!ro[e]) return e;
    var t = ro[e], r;
    for (r in t)
      if (t.hasOwnProperty(r) && r in Jm)
        return qc[e] = t[r];
    return e;
  }
  var eh = gr("animationend"), th = gr("animationiteration"), nh = gr("animationstart"), c1 = gr("transitionrun"), u1 = gr("transitionstart"), f1 = gr("transitioncancel"), ah = gr("transitionend"), rh = /* @__PURE__ */ new Map(), Pc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Pc.push("scrollEnd");
  function xn(e, t) {
    rh.set(e, t), mr(t, [e]);
  }
  var yi = typeof reportError == "function" ? reportError : function(e) {
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
  }, dn = [], oo = 0, Gc = 0;
  function vi() {
    for (var e = oo, t = Gc = oo = 0; t < e; ) {
      var r = dn[t];
      dn[t++] = null;
      var i = dn[t];
      dn[t++] = null;
      var c = dn[t];
      dn[t++] = null;
      var u = dn[t];
      if (dn[t++] = null, i !== null && c !== null) {
        var g = i.pending;
        g === null ? c.next = c : (c.next = g.next, g.next = c), i.pending = c;
      }
      u !== 0 && oh(r, c, u);
    }
  }
  function bi(e, t, r, i) {
    dn[oo++] = e, dn[oo++] = t, dn[oo++] = r, dn[oo++] = i, Gc |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Wc(e, t, r, i) {
    return bi(e, t, r, i), wi(e);
  }
  function yr(e, t) {
    return bi(e, null, null, t), wi(e);
  }
  function oh(e, t, r) {
    e.lanes |= r;
    var i = e.alternate;
    i !== null && (i.lanes |= r);
    for (var c = !1, u = e.return; u !== null; )
      u.childLanes |= r, i = u.alternate, i !== null && (i.childLanes |= r), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (c = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, c && t !== null && (c = 31 - Pt(r), e = u.hiddenUpdates, i = e[c], i === null ? e[c] = [t] : i.push(t), t.lane = r | 536870912), u) : null;
  }
  function wi(e) {
    if (50 < Nl)
      throw Nl = 0, Ju = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var lo = {};
  function d1(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(e, t, r, i) {
    return new d1(e, t, r, i);
  }
  function Vc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ea(e, t) {
    var r = e.alternate;
    return r === null ? (r = en(
      e.tag,
      t,
      e.key,
      e.mode
    ), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 65011712, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function lh(e, t) {
    e.flags &= 65011714;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Si(e, t, r, i, c, u) {
    var g = 0;
    if (i = e, typeof e == "function") Vc(e) && (g = 1);
    else if (typeof e == "string")
      g = yS(
        e,
        r,
        ae.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Q:
          return e = en(31, r, t, c), e.elementType = Q, e.lanes = u, e;
        case O:
          return vr(r.children, c, u, t);
        case C:
          g = 8, c |= 24;
          break;
        case M:
          return e = en(12, r, t, c | 2), e.elementType = M, e.lanes = u, e;
        case H:
          return e = en(13, r, t, c), e.elementType = H, e.lanes = u, e;
        case z:
          return e = en(19, r, t, c), e.elementType = z, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _:
                g = 10;
                break e;
              case R:
                g = 9;
                break e;
              case k:
                g = 11;
                break e;
              case N:
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
    return t = en(g, r, t, c), t.elementType = e, t.type = i, t.lanes = u, t;
  }
  function vr(e, t, r, i) {
    return e = en(7, e, i, t), e.lanes = r, e;
  }
  function Xc(e, t, r) {
    return e = en(6, e, null, t), e.lanes = r, e;
  }
  function ih(e) {
    var t = en(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Qc(e, t, r) {
    return t = en(
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
  var sh = /* @__PURE__ */ new WeakMap();
  function mn(e, t) {
    if (typeof e == "object" && e !== null) {
      var r = sh.get(e);
      return r !== void 0 ? r : (t = {
        value: e,
        source: t,
        stack: Da(t)
      }, sh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Da(t)
    };
  }
  var io = [], so = 0, xi = null, ul = 0, hn = [], pn = 0, Na = null, Rn = 1, kn = "";
  function ta(e, t) {
    io[so++] = ul, io[so++] = xi, xi = e, ul = t;
  }
  function ch(e, t, r) {
    hn[pn++] = Rn, hn[pn++] = kn, hn[pn++] = Na, Na = e;
    var i = Rn;
    e = kn;
    var c = 32 - Pt(i) - 1;
    i &= ~(1 << c), r += 1;
    var u = 32 - Pt(t) + c;
    if (30 < u) {
      var g = c - c % 5;
      u = (i & (1 << g) - 1).toString(32), i >>= g, c -= g, Rn = 1 << 32 - Pt(t) + c | r << c | i, kn = u + e;
    } else
      Rn = 1 << u | r << c | i, kn = e;
  }
  function Fc(e) {
    e.return !== null && (ta(e, 1), ch(e, 1, 0));
  }
  function Zc(e) {
    for (; e === xi; )
      xi = io[--so], io[so] = null, ul = io[--so], io[so] = null;
    for (; e === Na; )
      Na = hn[--pn], hn[pn] = null, kn = hn[--pn], hn[pn] = null, Rn = hn[--pn], hn[pn] = null;
  }
  function uh(e, t) {
    hn[pn++] = Rn, hn[pn++] = kn, hn[pn++] = Na, Rn = t.id, kn = t.overflow, Na = e;
  }
  var kt = null, rt = null, He = !1, Ra = null, gn = !1, Ic = Error(o(519));
  function ka(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw fl(mn(t, e)), Ic;
  }
  function fh(e) {
    var t = e.stateNode, r = e.type, i = e.memoizedProps;
    switch (t[Rt] = e, t[Vt] = i, r) {
      case "dialog":
        Ne("cancel", t), Ne("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ne("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < kl.length; r++)
          Ne(kl[r], t);
        break;
      case "source":
        Ne("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ne("error", t), Ne("load", t);
        break;
      case "details":
        Ne("toggle", t);
        break;
      case "input":
        Ne("invalid", t), Em(
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
        Ne("invalid", t);
        break;
      case "textarea":
        Ne("invalid", t), Tm(t, i.value, i.defaultValue, i.children);
    }
    r = i.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || t.textContent === "" + r || i.suppressHydrationWarning === !0 || Dg(t.textContent, r) ? (i.popover != null && (Ne("beforetoggle", t), Ne("toggle", t)), i.onScroll != null && Ne("scroll", t), i.onScrollEnd != null && Ne("scrollend", t), i.onClick != null && (t.onclick = $n), t = !0) : t = !1, t || ka(e, !0);
  }
  function dh(e) {
    for (kt = e.return; kt; )
      switch (kt.tag) {
        case 5:
        case 31:
        case 13:
          gn = !1;
          return;
        case 27:
        case 3:
          gn = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function co(e) {
    if (e !== kt) return !1;
    if (!He) return dh(e), He = !0, !1;
    var t = e.tag, r;
    if ((r = t !== 3 && t !== 27) && ((r = t === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || pf(e.type, e.memoizedProps)), r = !r), r && rt && ka(e), dh(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      rt = Hg(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      rt = Hg(e);
    } else
      t === 27 ? (t = rt, Qa(e.type) ? (e = wf, wf = null, rt = e) : rt = t) : rt = kt ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function br() {
    rt = kt = null, He = !1;
  }
  function Kc() {
    var e = Ra;
    return e !== null && (It === null ? It = e : It.push.apply(
      It,
      e
    ), Ra = null), e;
  }
  function fl(e) {
    Ra === null ? Ra = [e] : Ra.push(e);
  }
  var $c = D(null), wr = null, na = null;
  function za(e, t, r) {
    J($c, t._currentValue), t._currentValue = r;
  }
  function aa(e) {
    e._currentValue = $c.current, V($c);
  }
  function Jc(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function eu(e, t, r, i) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var u = c.dependencies;
      if (u !== null) {
        var g = c.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var w = u;
          u = c;
          for (var A = 0; A < t.length; A++)
            if (w.context === t[A]) {
              u.lanes |= r, w = u.alternate, w !== null && (w.lanes |= r), Jc(
                u.return,
                r,
                e
              ), i || (g = null);
              break e;
            }
          u = w.next;
        }
      } else if (c.tag === 18) {
        if (g = c.return, g === null) throw Error(o(341));
        g.lanes |= r, u = g.alternate, u !== null && (u.lanes |= r), Jc(g, r, e), g = null;
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
  function uo(e, t, r, i) {
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
          var w = c.type;
          Jt(c.pendingProps.value, g.value) || (e !== null ? e.push(w) : e = [w]);
        }
      } else if (c === ve.current) {
        if (g = c.alternate, g === null) throw Error(o(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Bl) : e = [Bl]);
      }
      c = c.return;
    }
    e !== null && eu(
      t,
      e,
      r,
      i
    ), t.flags |= 262144;
  }
  function Ci(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Jt(
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
  function zt(e) {
    return mh(wr, e);
  }
  function Ei(e, t) {
    return wr === null && Sr(e), mh(e, t);
  }
  function mh(e, t) {
    var r = t._currentValue;
    if (t = { context: t, memoizedValue: r, next: null }, na === null) {
      if (e === null) throw Error(o(308));
      na = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else na = na.next = t;
    return r;
  }
  var m1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, h1 = n.unstable_scheduleCallback, p1 = n.unstable_NormalPriority, wt = {
    $$typeof: _,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function tu() {
    return {
      controller: new m1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function dl(e) {
    e.refCount--, e.refCount === 0 && h1(p1, function() {
      e.controller.abort();
    });
  }
  var ml = null, nu = 0, fo = 0, mo = null;
  function g1(e, t) {
    if (ml === null) {
      var r = ml = [];
      nu = 0, fo = of(), mo = {
        status: "pending",
        value: void 0,
        then: function(i) {
          r.push(i);
        }
      };
    }
    return nu++, t.then(hh, hh), t;
  }
  function hh() {
    if (--nu === 0 && ml !== null) {
      mo !== null && (mo.status = "fulfilled");
      var e = ml;
      ml = null, fo = 0, mo = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function y1(e, t) {
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
  var ph = Y.S;
  Y.S = function(e, t) {
    $p = Nt(), typeof t == "object" && t !== null && typeof t.then == "function" && g1(e, t), ph !== null && ph(e, t);
  };
  var xr = D(null);
  function au() {
    var e = xr.current;
    return e !== null ? e : tt.pooledCache;
  }
  function Oi(e, t) {
    t === null ? J(xr, xr.current) : J(xr, t.pool);
  }
  function gh() {
    var e = au();
    return e === null ? null : { parent: wt._currentValue, pool: e };
  }
  var ho = Error(o(460)), ru = Error(o(474)), Ti = Error(o(542)), Mi = { then: function() {
  } };
  function yh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function vh(e, t, r) {
    switch (r = e[r], r === void 0 ? e.push(t) : r !== t && (t.then($n, $n), t = r), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, wh(e), e;
      default:
        if (typeof t.status == "string") t.then($n, $n);
        else {
          if (e = tt, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, wh(e), e;
        }
        throw Er = t, ho;
    }
  }
  function Cr(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Er = r, ho) : r;
    }
  }
  var Er = null;
  function bh() {
    if (Er === null) throw Error(o(459));
    var e = Er;
    return Er = null, e;
  }
  function wh(e) {
    if (e === ho || e === Ti)
      throw Error(o(483));
  }
  var po = null, hl = 0;
  function Di(e) {
    var t = hl;
    return hl += 1, po === null && (po = []), vh(po, e, t);
  }
  function pl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function _i(e, t) {
    throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Sh(e) {
    function t(B, j) {
      if (e) {
        var L = B.deletions;
        L === null ? (B.deletions = [j], B.flags |= 16) : L.push(j);
      }
    }
    function r(B, j) {
      if (!e) return null;
      for (; j !== null; )
        t(B, j), j = j.sibling;
      return null;
    }
    function i(B) {
      for (var j = /* @__PURE__ */ new Map(); B !== null; )
        B.key !== null ? j.set(B.key, B) : j.set(B.index, B), B = B.sibling;
      return j;
    }
    function c(B, j) {
      return B = ea(B, j), B.index = 0, B.sibling = null, B;
    }
    function u(B, j, L) {
      return B.index = L, e ? (L = B.alternate, L !== null ? (L = L.index, L < j ? (B.flags |= 67108866, j) : L) : (B.flags |= 67108866, j)) : (B.flags |= 1048576, j);
    }
    function g(B) {
      return e && B.alternate === null && (B.flags |= 67108866), B;
    }
    function w(B, j, L, Z) {
      return j === null || j.tag !== 6 ? (j = Xc(L, B.mode, Z), j.return = B, j) : (j = c(j, L), j.return = B, j);
    }
    function A(B, j, L, Z) {
      var ge = L.type;
      return ge === O ? X(
        B,
        j,
        L.props.children,
        Z,
        L.key
      ) : j !== null && (j.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === U && Cr(ge) === j.type) ? (j = c(j, L.props), pl(j, L), j.return = B, j) : (j = Si(
        L.type,
        L.key,
        L.props,
        null,
        B.mode,
        Z
      ), pl(j, L), j.return = B, j);
    }
    function q(B, j, L, Z) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== L.containerInfo || j.stateNode.implementation !== L.implementation ? (j = Qc(L, B.mode, Z), j.return = B, j) : (j = c(j, L.children || []), j.return = B, j);
    }
    function X(B, j, L, Z, ge) {
      return j === null || j.tag !== 7 ? (j = vr(
        L,
        B.mode,
        Z,
        ge
      ), j.return = B, j) : (j = c(j, L), j.return = B, j);
    }
    function I(B, j, L) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return j = Xc(
          "" + j,
          B.mode,
          L
        ), j.return = B, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case E:
            return L = Si(
              j.type,
              j.key,
              j.props,
              null,
              B.mode,
              L
            ), pl(L, j), L.return = B, L;
          case T:
            return j = Qc(
              j,
              B.mode,
              L
            ), j.return = B, j;
          case U:
            return j = Cr(j), I(B, j, L);
        }
        if (me(j) || ee(j))
          return j = vr(
            j,
            B.mode,
            L,
            null
          ), j.return = B, j;
        if (typeof j.then == "function")
          return I(B, Di(j), L);
        if (j.$$typeof === _)
          return I(
            B,
            Ei(B, j),
            L
          );
        _i(B, j);
      }
      return null;
    }
    function P(B, j, L, Z) {
      var ge = j !== null ? j.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return ge !== null ? null : w(B, j, "" + L, Z);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case E:
            return L.key === ge ? A(B, j, L, Z) : null;
          case T:
            return L.key === ge ? q(B, j, L, Z) : null;
          case U:
            return L = Cr(L), P(B, j, L, Z);
        }
        if (me(L) || ee(L))
          return ge !== null ? null : X(B, j, L, Z, null);
        if (typeof L.then == "function")
          return P(
            B,
            j,
            Di(L),
            Z
          );
        if (L.$$typeof === _)
          return P(
            B,
            j,
            Ei(B, L),
            Z
          );
        _i(B, L);
      }
      return null;
    }
    function G(B, j, L, Z, ge) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return B = B.get(L) || null, w(j, B, "" + Z, ge);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case E:
            return B = B.get(
              Z.key === null ? L : Z.key
            ) || null, A(j, B, Z, ge);
          case T:
            return B = B.get(
              Z.key === null ? L : Z.key
            ) || null, q(j, B, Z, ge);
          case U:
            return Z = Cr(Z), G(
              B,
              j,
              L,
              Z,
              ge
            );
        }
        if (me(Z) || ee(Z))
          return B = B.get(L) || null, X(j, B, Z, ge, null);
        if (typeof Z.then == "function")
          return G(
            B,
            j,
            L,
            Di(Z),
            ge
          );
        if (Z.$$typeof === _)
          return G(
            B,
            j,
            L,
            Ei(j, Z),
            ge
          );
        _i(j, Z);
      }
      return null;
    }
    function fe(B, j, L, Z) {
      for (var ge = null, qe = null, de = j, Me = j = 0, ze = null; de !== null && Me < L.length; Me++) {
        de.index > Me ? (ze = de, de = null) : ze = de.sibling;
        var Pe = P(
          B,
          de,
          L[Me],
          Z
        );
        if (Pe === null) {
          de === null && (de = ze);
          break;
        }
        e && de && Pe.alternate === null && t(B, de), j = u(Pe, j, Me), qe === null ? ge = Pe : qe.sibling = Pe, qe = Pe, de = ze;
      }
      if (Me === L.length)
        return r(B, de), He && ta(B, Me), ge;
      if (de === null) {
        for (; Me < L.length; Me++)
          de = I(B, L[Me], Z), de !== null && (j = u(
            de,
            j,
            Me
          ), qe === null ? ge = de : qe.sibling = de, qe = de);
        return He && ta(B, Me), ge;
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
        ), j = u(
          ze,
          j,
          Me
        ), qe === null ? ge = ze : qe.sibling = ze, qe = ze);
      return e && de.forEach(function($a) {
        return t(B, $a);
      }), He && ta(B, Me), ge;
    }
    function we(B, j, L, Z) {
      if (L == null) throw Error(o(151));
      for (var ge = null, qe = null, de = j, Me = j = 0, ze = null, Pe = L.next(); de !== null && !Pe.done; Me++, Pe = L.next()) {
        de.index > Me ? (ze = de, de = null) : ze = de.sibling;
        var $a = P(B, de, Pe.value, Z);
        if ($a === null) {
          de === null && (de = ze);
          break;
        }
        e && de && $a.alternate === null && t(B, de), j = u($a, j, Me), qe === null ? ge = $a : qe.sibling = $a, qe = $a, de = ze;
      }
      if (Pe.done)
        return r(B, de), He && ta(B, Me), ge;
      if (de === null) {
        for (; !Pe.done; Me++, Pe = L.next())
          Pe = I(B, Pe.value, Z), Pe !== null && (j = u(Pe, j, Me), qe === null ? ge = Pe : qe.sibling = Pe, qe = Pe);
        return He && ta(B, Me), ge;
      }
      for (de = i(de); !Pe.done; Me++, Pe = L.next())
        Pe = G(de, B, Me, Pe.value, Z), Pe !== null && (e && Pe.alternate !== null && de.delete(Pe.key === null ? Me : Pe.key), j = u(Pe, j, Me), qe === null ? ge = Pe : qe.sibling = Pe, qe = Pe);
      return e && de.forEach(function(DS) {
        return t(B, DS);
      }), He && ta(B, Me), ge;
    }
    function et(B, j, L, Z) {
      if (typeof L == "object" && L !== null && L.type === O && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case E:
            e: {
              for (var ge = L.key; j !== null; ) {
                if (j.key === ge) {
                  if (ge = L.type, ge === O) {
                    if (j.tag === 7) {
                      r(
                        B,
                        j.sibling
                      ), Z = c(
                        j,
                        L.props.children
                      ), Z.return = B, B = Z;
                      break e;
                    }
                  } else if (j.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === U && Cr(ge) === j.type) {
                    r(
                      B,
                      j.sibling
                    ), Z = c(j, L.props), pl(Z, L), Z.return = B, B = Z;
                    break e;
                  }
                  r(B, j);
                  break;
                } else t(B, j);
                j = j.sibling;
              }
              L.type === O ? (Z = vr(
                L.props.children,
                B.mode,
                Z,
                L.key
              ), Z.return = B, B = Z) : (Z = Si(
                L.type,
                L.key,
                L.props,
                null,
                B.mode,
                Z
              ), pl(Z, L), Z.return = B, B = Z);
            }
            return g(B);
          case T:
            e: {
              for (ge = L.key; j !== null; ) {
                if (j.key === ge)
                  if (j.tag === 4 && j.stateNode.containerInfo === L.containerInfo && j.stateNode.implementation === L.implementation) {
                    r(
                      B,
                      j.sibling
                    ), Z = c(j, L.children || []), Z.return = B, B = Z;
                    break e;
                  } else {
                    r(B, j);
                    break;
                  }
                else t(B, j);
                j = j.sibling;
              }
              Z = Qc(L, B.mode, Z), Z.return = B, B = Z;
            }
            return g(B);
          case U:
            return L = Cr(L), et(
              B,
              j,
              L,
              Z
            );
        }
        if (me(L))
          return fe(
            B,
            j,
            L,
            Z
          );
        if (ee(L)) {
          if (ge = ee(L), typeof ge != "function") throw Error(o(150));
          return L = ge.call(L), we(
            B,
            j,
            L,
            Z
          );
        }
        if (typeof L.then == "function")
          return et(
            B,
            j,
            Di(L),
            Z
          );
        if (L.$$typeof === _)
          return et(
            B,
            j,
            Ei(B, L),
            Z
          );
        _i(B, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, j !== null && j.tag === 6 ? (r(B, j.sibling), Z = c(j, L), Z.return = B, B = Z) : (r(B, j), Z = Xc(L, B.mode, Z), Z.return = B, B = Z), g(B)) : r(B, j);
    }
    return function(B, j, L, Z) {
      try {
        hl = 0;
        var ge = et(
          B,
          j,
          L,
          Z
        );
        return po = null, ge;
      } catch (de) {
        if (de === ho || de === Ti) throw de;
        var qe = en(29, de, null, B.mode);
        return qe.lanes = Z, qe.return = B, qe;
      }
    };
  }
  var Or = Sh(!0), xh = Sh(!1), ja = !1;
  function ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function lu(e, t) {
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
    if (i = i.shared, (We & 2) !== 0) {
      var c = i.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), i.pending = t, t = wi(e), oh(e, null, r), t;
    }
    return bi(e, i, t, r), wi(e);
  }
  function gl(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, mm(e, r);
    }
  }
  function iu(e, t) {
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
  var su = !1;
  function yl() {
    if (su) {
      var e = mo;
      if (e !== null) throw e;
    }
  }
  function vl(e, t, r, i) {
    su = !1;
    var c = e.updateQueue;
    ja = !1;
    var u = c.firstBaseUpdate, g = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var A = w, q = A.next;
      A.next = null, g === null ? u = q : g.next = q, g = A;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, w = X.lastBaseUpdate, w !== g && (w === null ? X.firstBaseUpdate = q : w.next = q, X.lastBaseUpdate = A));
    }
    if (u !== null) {
      var I = c.baseState;
      g = 0, X = q = A = null, w = u;
      do {
        var P = w.lane & -536870913, G = P !== w.lane;
        if (G ? (ke & P) === P : (i & P) === P) {
          P !== 0 && P === fo && (su = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = e, we = w;
            P = t;
            var et = r;
            switch (we.tag) {
              case 1:
                if (fe = we.payload, typeof fe == "function") {
                  I = fe.call(et, I, P);
                  break e;
                }
                I = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = we.payload, P = typeof fe == "function" ? fe.call(et, I, P) : fe, P == null) break e;
                I = y({}, I, P);
                break e;
              case 2:
                ja = !0;
            }
          }
          P = w.callback, P !== null && (e.flags |= 64, G && (e.flags |= 8192), G = c.callbacks, G === null ? c.callbacks = [P] : G.push(P));
        } else
          G = {
            lane: P,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          }, X === null ? (q = X = G, A = I) : X = X.next = G, g |= P;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null)
            break;
          G = w, w = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      X === null && (A = I), c.baseState = A, c.firstBaseUpdate = q, c.lastBaseUpdate = X, u === null && (c.shared.lanes = 0), Pa |= g, e.lanes = g, e.memoizedState = I;
    }
  }
  function Ch(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Eh(e, t) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        Ch(r[e], t);
  }
  var go = D(null), Ai = D(0);
  function Oh(e, t) {
    e = da, J(Ai, e), J(go, t), da = e | t.baseLanes;
  }
  function cu() {
    J(Ai, da), J(go, go.current);
  }
  function uu() {
    da = Ai.current, V(go), V(Ai);
  }
  var tn = D(null), yn = null;
  function Ba(e) {
    var t = e.alternate;
    J(ht, ht.current & 1), J(tn, e), yn === null && (t === null || go.current !== null || t.memoizedState !== null) && (yn = e);
  }
  function fu(e) {
    J(ht, ht.current), J(tn, e), yn === null && (yn = e);
  }
  function Th(e) {
    e.tag === 22 ? (J(ht, ht.current), J(tn, e), yn === null && (yn = e)) : Ua();
  }
  function Ua() {
    J(ht, ht.current), J(tn, tn.current);
  }
  function nn(e) {
    V(tn), yn === e && (yn = null), V(ht);
  }
  var ht = D(0);
  function Ni(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || vf(r) || bf(r)))
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
  var ra = 0, Te = null, $e = null, St = null, Ri = !1, yo = !1, Tr = !1, ki = 0, bl = 0, vo = null, v1 = 0;
  function ct() {
    throw Error(o(321));
  }
  function du(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Jt(e[r], t[r])) return !1;
    return !0;
  }
  function mu(e, t, r, i, c, u) {
    return ra = u, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? cp : Du, Tr = !1, u = r(i, c), Tr = !1, yo && (u = Dh(
      t,
      r,
      i,
      c
    )), Mh(e), u;
  }
  function Mh(e) {
    Y.H = xl;
    var t = $e !== null && $e.next !== null;
    if (ra = 0, St = $e = Te = null, Ri = !1, bl = 0, vo = null, t) throw Error(o(300));
    e === null || xt || (e = e.dependencies, e !== null && Ci(e) && (xt = !0));
  }
  function Dh(e, t, r, i) {
    Te = e;
    var c = 0;
    do {
      if (yo && (vo = null), bl = 0, yo = !1, 25 <= c) throw Error(o(301));
      if (c += 1, St = $e = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Y.H = up, u = t(r, i);
    } while (yo);
    return u;
  }
  function b1() {
    var e = Y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? wl(t) : t, e = e.useState()[0], ($e !== null ? $e.memoizedState : null) !== e && (Te.flags |= 1024), t;
  }
  function hu() {
    var e = ki !== 0;
    return ki = 0, e;
  }
  function pu(e, t, r) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r;
  }
  function gu(e) {
    if (Ri) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ri = !1;
    }
    ra = 0, St = $e = Te = null, yo = !1, bl = ki = 0, vo = null;
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return St === null ? Te.memoizedState = St = e : St = St.next = e, St;
  }
  function pt() {
    if ($e === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = St === null ? Te.memoizedState : St.next;
    if (t !== null)
      St = t, $e = e;
    else {
      if (e === null)
        throw Te.alternate === null ? Error(o(467)) : Error(o(310));
      $e = e, e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null
      }, St === null ? Te.memoizedState = St = e : St = St.next = e;
    }
    return St;
  }
  function zi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wl(e) {
    var t = bl;
    return bl += 1, vo === null && (vo = []), e = vh(vo, e, t), t = Te, (St === null ? t.memoizedState : St.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? cp : Du), e;
  }
  function ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wl(e);
      if (e.$$typeof === _) return zt(e);
    }
    throw Error(o(438, String(e)));
  }
  function yu(e) {
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
    if (t == null && (t = { data: [], index: 0 }), r === null && (r = zi(), Te.updateQueue = r), r.memoCache = t, r = t.data[t.index], r === void 0)
      for (r = t.data[t.index] = Array(e), i = 0; i < e; i++)
        r[i] = $;
    return t.index++, r;
  }
  function oa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yi(e) {
    var t = pt();
    return vu(t, $e, e);
  }
  function vu(e, t, r) {
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
      var w = g = null, A = null, q = t, X = !1;
      do {
        var I = q.lane & -536870913;
        if (I !== q.lane ? (ke & I) === I : (ra & I) === I) {
          var P = q.revertLane;
          if (P === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), I === fo && (X = !0);
          else if ((ra & P) === P) {
            q = q.next, P === fo && (X = !0);
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
            }, A === null ? (w = A = I, g = u) : A = A.next = I, Te.lanes |= P, Pa |= P;
          I = q.action, Tr && r(u, I), u = q.hasEagerState ? q.eagerState : r(u, I);
        } else
          P = {
            lane: I,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, A === null ? (w = A = P, g = u) : A = A.next = P, Te.lanes |= I, Pa |= I;
        q = q.next;
      } while (q !== null && q !== t);
      if (A === null ? g = u : A.next = w, !Jt(u, e.memoizedState) && (xt = !0, X && (r = mo, r !== null)))
        throw r;
      e.memoizedState = u, e.baseState = g, e.baseQueue = A, i.lastRenderedState = u;
    }
    return c === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function bu(e) {
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
      Jt(u, t.memoizedState) || (xt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), r.lastRenderedState = u;
    }
    return [u, i];
  }
  function _h(e, t, r) {
    var i = Te, c = pt(), u = He;
    if (u) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = t();
    var g = !Jt(
      ($e || c).memoizedState,
      r
    );
    if (g && (c.memoizedState = r, xt = !0), c = c.queue, xu(Rh.bind(null, i, c, e), [
      e
    ]), c.getSnapshot !== t || g || St !== null && St.memoizedState.tag & 1) {
      if (i.flags |= 2048, bo(
        9,
        { destroy: void 0 },
        Nh.bind(
          null,
          i,
          c,
          r,
          t
        ),
        null
      ), tt === null) throw Error(o(349));
      u || (ra & 127) !== 0 || Ah(i, t, r);
    }
    return r;
  }
  function Ah(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Te.updateQueue, t === null ? (t = zi(), Te.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function Nh(e, t, r, i) {
    t.value = r, t.getSnapshot = i, kh(t) && zh(e);
  }
  function Rh(e, t, r) {
    return r(function() {
      kh(t) && zh(e);
    });
  }
  function kh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Jt(e, r);
    } catch {
      return !0;
    }
  }
  function zh(e) {
    var t = yr(e, 2);
    t !== null && Kt(t, e, 2);
  }
  function wu(e) {
    var t = Gt();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), Tr) {
        Nn(!0);
        try {
          r();
        } finally {
          Nn(!1);
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
  function jh(e, t, r, i) {
    return e.baseState = r, vu(
      e,
      $e,
      typeof i == "function" ? i : oa
    );
  }
  function w1(e, t, r, i, c) {
    if (Ui(e)) throw Error(o(485));
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
      Y.T !== null ? r(!0) : u.isTransition = !1, i(u), r = t.pending, r === null ? (u.next = t.pending = u, Yh(t, u)) : (u.next = r.next, t.pending = r.next = u);
    }
  }
  function Yh(e, t) {
    var r = t.action, i = t.payload, c = e.state;
    if (t.isTransition) {
      var u = Y.T, g = {};
      Y.T = g;
      try {
        var w = r(c, i), A = Y.S;
        A !== null && A(g, w), Hh(e, t, w);
      } catch (q) {
        Su(e, t, q);
      } finally {
        u !== null && g.types !== null && (u.types = g.types), Y.T = u;
      }
    } else
      try {
        u = r(c, i), Hh(e, t, u);
      } catch (q) {
        Su(e, t, q);
      }
  }
  function Hh(e, t, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(i) {
        Bh(e, t, i);
      },
      function(i) {
        return Su(e, t, i);
      }
    ) : Bh(e, t, r);
  }
  function Bh(e, t, r) {
    t.status = "fulfilled", t.value = r, Uh(t), e.state = r, t = e.pending, t !== null && (r = t.next, r === t ? e.pending = null : (r = r.next, t.next = r, Yh(e, r)));
  }
  function Su(e, t, r) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = r, Uh(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function Uh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Lh(e, t) {
    return t;
  }
  function qh(e, t) {
    if (He) {
      var r = tt.formState;
      if (r !== null) {
        e: {
          var i = Te;
          if (He) {
            if (rt) {
              t: {
                for (var c = rt, u = gn; c.nodeType !== 8; ) {
                  if (!u) {
                    c = null;
                    break t;
                  }
                  if (c = vn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                u = c.data, c = u === "F!" || u === "F" ? c : null;
              }
              if (c) {
                rt = vn(
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
    return r = Gt(), r.memoizedState = r.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lh,
      lastRenderedState: t
    }, r.queue = i, r = lp.bind(
      null,
      Te,
      i
    ), i.dispatch = r, i = wu(!1), u = Mu.bind(
      null,
      Te,
      !1,
      i.queue
    ), i = Gt(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = c, r = w1.bind(
      null,
      Te,
      c,
      u,
      r
    ), c.dispatch = r, i.memoizedState = e, [t, r, !1];
  }
  function Ph(e) {
    var t = pt();
    return Gh(t, $e, e);
  }
  function Gh(e, t, r) {
    if (t = vu(
      e,
      t,
      Lh
    )[0], e = Yi(oa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = wl(t);
      } catch (g) {
        throw g === ho ? Ti : g;
      }
    else i = t;
    t = pt();
    var c = t.queue, u = c.dispatch;
    return r !== t.memoizedState && (Te.flags |= 2048, bo(
      9,
      { destroy: void 0 },
      S1.bind(null, c, r),
      null
    )), [i, u, e];
  }
  function S1(e, t) {
    e.action = t;
  }
  function Wh(e) {
    var t = pt(), r = $e;
    if (r !== null)
      return Gh(t, r, e);
    pt(), t = t.memoizedState, r = pt();
    var i = r.queue.dispatch;
    return r.memoizedState = e, [t, i, !1];
  }
  function bo(e, t, r, i) {
    return e = { tag: e, create: r, deps: i, inst: t, next: null }, t = Te.updateQueue, t === null && (t = zi(), Te.updateQueue = t), r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e), e;
  }
  function Vh() {
    return pt().memoizedState;
  }
  function Hi(e, t, r, i) {
    var c = Gt();
    Te.flags |= e, c.memoizedState = bo(
      1 | t,
      { destroy: void 0 },
      r,
      i === void 0 ? null : i
    );
  }
  function Bi(e, t, r, i) {
    var c = pt();
    i = i === void 0 ? null : i;
    var u = c.memoizedState.inst;
    $e !== null && i !== null && du(i, $e.memoizedState.deps) ? c.memoizedState = bo(t, u, r, i) : (Te.flags |= e, c.memoizedState = bo(
      1 | t,
      u,
      r,
      i
    ));
  }
  function Xh(e, t) {
    Hi(8390656, 8, e, t);
  }
  function xu(e, t) {
    Bi(2048, 8, e, t);
  }
  function x1(e) {
    Te.flags |= 4;
    var t = Te.updateQueue;
    if (t === null)
      t = zi(), Te.updateQueue = t, t.events = [e];
    else {
      var r = t.events;
      r === null ? t.events = [e] : r.push(e);
    }
  }
  function Qh(e) {
    var t = pt().memoizedState;
    return x1({ ref: t, nextImpl: e }), function() {
      if ((We & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Fh(e, t) {
    return Bi(4, 2, e, t);
  }
  function Zh(e, t) {
    return Bi(4, 4, e, t);
  }
  function Ih(e, t) {
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
  function Kh(e, t, r) {
    r = r != null ? r.concat([e]) : null, Bi(4, 4, Ih.bind(null, t, e), r);
  }
  function Cu() {
  }
  function $h(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return t !== null && du(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function Jh(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    if (t !== null && du(t, i[1]))
      return i[0];
    if (i = e(), Tr) {
      Nn(!0);
      try {
        e();
      } finally {
        Nn(!1);
      }
    }
    return r.memoizedState = [i, t], i;
  }
  function Eu(e, t, r) {
    return r === void 0 || (ra & 1073741824) !== 0 && (ke & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = r, e = eg(), Te.lanes |= e, Pa |= e, r);
  }
  function ep(e, t, r, i) {
    return Jt(r, t) ? r : go.current !== null ? (e = Eu(e, r, i), Jt(e, t) || (xt = !0), e) : (ra & 42) === 0 || (ra & 1073741824) !== 0 && (ke & 261930) === 0 ? (xt = !0, e.memoizedState = r) : (e = eg(), Te.lanes |= e, Pa |= e, t);
  }
  function tp(e, t, r, i, c) {
    var u = F.p;
    F.p = u !== 0 && 8 > u ? u : 8;
    var g = Y.T, w = {};
    Y.T = w, Mu(e, !1, t, r);
    try {
      var A = c(), q = Y.S;
      if (q !== null && q(w, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var X = y1(
          A,
          i
        );
        Sl(
          e,
          t,
          X,
          on(e)
        );
      } else
        Sl(
          e,
          t,
          i,
          on(e)
        );
    } catch (I) {
      Sl(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: I },
        on()
      );
    } finally {
      F.p = u, g !== null && w.types !== null && (g.types = w.types), Y.T = g;
    }
  }
  function C1() {
  }
  function Ou(e, t, r, i) {
    if (e.tag !== 5) throw Error(o(476));
    var c = np(e).queue;
    tp(
      e,
      c,
      t,
      K,
      r === null ? C1 : function() {
        return ap(e), r(i);
      }
    );
  }
  function np(e) {
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
  function ap(e) {
    var t = np(e);
    t.next === null && (t = e.alternate.memoizedState), Sl(
      e,
      t.next.queue,
      {},
      on()
    );
  }
  function Tu() {
    return zt(Bl);
  }
  function rp() {
    return pt().memoizedState;
  }
  function op() {
    return pt().memoizedState;
  }
  function E1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = on();
          e = Ya(r);
          var i = Ha(t, e, r);
          i !== null && (Kt(i, t, r), gl(i, t, r)), t = { cache: tu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function O1(e, t, r) {
    var i = on();
    r = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ui(e) ? ip(t, r) : (r = Wc(e, t, r, i), r !== null && (Kt(r, e, i), sp(r, t, i)));
  }
  function lp(e, t, r) {
    var i = on();
    Sl(e, t, r, i);
  }
  function Sl(e, t, r, i) {
    var c = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ui(e)) ip(t, c);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var g = t.lastRenderedState, w = u(g, r);
          if (c.hasEagerState = !0, c.eagerState = w, Jt(w, g))
            return bi(e, t, c, 0), tt === null && vi(), !1;
        } catch {
        }
      if (r = Wc(e, t, c, i), r !== null)
        return Kt(r, e, i), sp(r, t, i), !0;
    }
    return !1;
  }
  function Mu(e, t, r, i) {
    if (i = {
      lane: 2,
      revertLane: of(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ui(e)) {
      if (t) throw Error(o(479));
    } else
      t = Wc(
        e,
        r,
        i,
        2
      ), t !== null && Kt(t, e, 2);
  }
  function Ui(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te;
  }
  function ip(e, t) {
    yo = Ri = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function sp(e, t, r) {
    if ((r & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, mm(e, r);
    }
  }
  var xl = {
    readContext: zt,
    use: ji,
    useCallback: ct,
    useContext: ct,
    useEffect: ct,
    useImperativeHandle: ct,
    useLayoutEffect: ct,
    useInsertionEffect: ct,
    useMemo: ct,
    useReducer: ct,
    useRef: ct,
    useState: ct,
    useDebugValue: ct,
    useDeferredValue: ct,
    useTransition: ct,
    useSyncExternalStore: ct,
    useId: ct,
    useHostTransitionStatus: ct,
    useFormState: ct,
    useActionState: ct,
    useOptimistic: ct,
    useMemoCache: ct,
    useCacheRefresh: ct
  };
  xl.useEffectEvent = ct;
  var cp = {
    readContext: zt,
    use: ji,
    useCallback: function(e, t) {
      return Gt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: zt,
    useEffect: Xh,
    useImperativeHandle: function(e, t, r) {
      r = r != null ? r.concat([e]) : null, Hi(
        4194308,
        4,
        Ih.bind(null, t, e),
        r
      );
    },
    useLayoutEffect: function(e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Hi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var r = Gt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Tr) {
        Nn(!0);
        try {
          e();
        } finally {
          Nn(!1);
        }
      }
      return r.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, r) {
      var i = Gt();
      if (r !== void 0) {
        var c = r(t);
        if (Tr) {
          Nn(!0);
          try {
            r(t);
          } finally {
            Nn(!1);
          }
        }
      } else c = t;
      return i.memoizedState = i.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, i.queue = e, e = e.dispatch = O1.bind(
        null,
        Te,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = Gt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = wu(e);
      var t = e.queue, r = lp.bind(null, Te, t);
      return t.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Cu,
    useDeferredValue: function(e, t) {
      var r = Gt();
      return Eu(r, e, t);
    },
    useTransition: function() {
      var e = wu(!1);
      return e = tp.bind(
        null,
        Te,
        e.queue,
        !0,
        !1
      ), Gt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, r) {
      var i = Te, c = Gt();
      if (He) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = t(), tt === null)
          throw Error(o(349));
        (ke & 127) !== 0 || Ah(i, t, r);
      }
      c.memoizedState = r;
      var u = { value: r, getSnapshot: t };
      return c.queue = u, Xh(Rh.bind(null, i, u, e), [
        e
      ]), i.flags |= 2048, bo(
        9,
        { destroy: void 0 },
        Nh.bind(
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
      var e = Gt(), t = tt.identifierPrefix;
      if (He) {
        var r = kn, i = Rn;
        r = (i & ~(1 << 32 - Pt(i) - 1)).toString(32) + r, t = "_" + t + "R_" + r, r = ki++, 0 < r && (t += "H" + r.toString(32)), t += "_";
      } else
        r = v1++, t = "_" + t + "r_" + r.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Tu,
    useFormState: qh,
    useActionState: qh,
    useOptimistic: function(e) {
      var t = Gt();
      t.memoizedState = t.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = r, t = Mu.bind(
        null,
        Te,
        !0,
        r
      ), r.dispatch = t, [e, t];
    },
    useMemoCache: yu,
    useCacheRefresh: function() {
      return Gt().memoizedState = E1.bind(
        null,
        Te
      );
    },
    useEffectEvent: function(e) {
      var t = Gt(), r = { impl: e };
      return t.memoizedState = r, function() {
        if ((We & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, Du = {
    readContext: zt,
    use: ji,
    useCallback: $h,
    useContext: zt,
    useEffect: xu,
    useImperativeHandle: Kh,
    useInsertionEffect: Fh,
    useLayoutEffect: Zh,
    useMemo: Jh,
    useReducer: Yi,
    useRef: Vh,
    useState: function() {
      return Yi(oa);
    },
    useDebugValue: Cu,
    useDeferredValue: function(e, t) {
      var r = pt();
      return ep(
        r,
        $e.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yi(oa)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : wl(e),
        t
      ];
    },
    useSyncExternalStore: _h,
    useId: rp,
    useHostTransitionStatus: Tu,
    useFormState: Ph,
    useActionState: Ph,
    useOptimistic: function(e, t) {
      var r = pt();
      return jh(r, $e, e, t);
    },
    useMemoCache: yu,
    useCacheRefresh: op
  };
  Du.useEffectEvent = Qh;
  var up = {
    readContext: zt,
    use: ji,
    useCallback: $h,
    useContext: zt,
    useEffect: xu,
    useImperativeHandle: Kh,
    useInsertionEffect: Fh,
    useLayoutEffect: Zh,
    useMemo: Jh,
    useReducer: bu,
    useRef: Vh,
    useState: function() {
      return bu(oa);
    },
    useDebugValue: Cu,
    useDeferredValue: function(e, t) {
      var r = pt();
      return $e === null ? Eu(r, e, t) : ep(
        r,
        $e.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = bu(oa)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : wl(e),
        t
      ];
    },
    useSyncExternalStore: _h,
    useId: rp,
    useHostTransitionStatus: Tu,
    useFormState: Wh,
    useActionState: Wh,
    useOptimistic: function(e, t) {
      var r = pt();
      return $e !== null ? jh(r, $e, e, t) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: yu,
    useCacheRefresh: op
  };
  up.useEffectEvent = Qh;
  function _u(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : y({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Au = {
    enqueueSetState: function(e, t, r) {
      e = e._reactInternals;
      var i = on(), c = Ya(i);
      c.payload = t, r != null && (c.callback = r), t = Ha(e, c, i), t !== null && (Kt(t, e, i), gl(t, e, i));
    },
    enqueueReplaceState: function(e, t, r) {
      e = e._reactInternals;
      var i = on(), c = Ya(i);
      c.tag = 1, c.payload = t, r != null && (c.callback = r), t = Ha(e, c, i), t !== null && (Kt(t, e, i), gl(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var r = on(), i = Ya(r);
      i.tag = 2, t != null && (i.callback = t), t = Ha(e, i, r), t !== null && (Kt(t, e, r), gl(t, e, r));
    }
  };
  function fp(e, t, r, i, c, u, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, g) : t.prototype && t.prototype.isPureReactComponent ? !sl(r, i) || !sl(c, u) : !0;
  }
  function dp(e, t, r, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && Au.enqueueReplaceState(t, t.state, null);
  }
  function Mr(e, t) {
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
  function mp(e) {
    yi(e);
  }
  function hp(e) {
    console.error(e);
  }
  function pp(e) {
    yi(e);
  }
  function Li(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function gp(e, t, r) {
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
  function Nu(e, t, r) {
    return r = Ya(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      Li(e, t);
    }, r;
  }
  function yp(e) {
    return e = Ya(e), e.tag = 3, e;
  }
  function vp(e, t, r, i) {
    var c = r.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var u = i.value;
      e.payload = function() {
        return c(u);
      }, e.callback = function() {
        gp(t, r, i);
      };
    }
    var g = r.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      gp(t, r, i), typeof c != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var w = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: w !== null ? w : ""
      });
    });
  }
  function T1(e, t, r, i, c) {
    if (r.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = r.alternate, t !== null && uo(
        t,
        r,
        c,
        !0
      ), r = tn.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return yn === null ? $i() : r.alternate === null && ut === 0 && (ut = 3), r.flags &= -257, r.flags |= 65536, r.lanes = c, i === Mi ? r.flags |= 16384 : (t = r.updateQueue, t === null ? r.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), nf(e, i, c)), !1;
          case 22:
            return r.flags |= 65536, i === Mi ? r.flags |= 16384 : (t = r.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, r.updateQueue = t) : (r = t.retryQueue, r === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : r.add(i)), nf(e, i, c)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return nf(e, i, c), $i(), !1;
    }
    if (He)
      return t = tn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, i !== Ic && (e = Error(o(422), { cause: i }), fl(mn(e, r)))) : (i !== Ic && (t = Error(o(423), {
        cause: i
      }), fl(
        mn(t, r)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, i = mn(i, r), c = Nu(
        e.stateNode,
        i,
        c
      ), iu(e, c), ut !== 4 && (ut = 2)), !1;
    var u = Error(o(520), { cause: i });
    if (u = mn(u, r), Al === null ? Al = [u] : Al.push(u), ut !== 4 && (ut = 2), t === null) return !0;
    i = mn(i, r), r = t;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = c & -c, r.lanes |= e, e = Nu(r.stateNode, i, e), iu(r, e), !1;
        case 1:
          if (t = r.type, u = r.stateNode, (r.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ga === null || !Ga.has(u))))
            return r.flags |= 65536, c &= -c, r.lanes |= c, c = yp(c), vp(
              c,
              e,
              r,
              i
            ), iu(r, c), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Ru = Error(o(461)), xt = !1;
  function jt(e, t, r, i) {
    t.child = e === null ? xh(t, null, r, i) : Or(
      t,
      e.child,
      r,
      i
    );
  }
  function bp(e, t, r, i, c) {
    r = r.render;
    var u = t.ref;
    if ("ref" in i) {
      var g = {};
      for (var w in i)
        w !== "ref" && (g[w] = i[w]);
    } else g = i;
    return Sr(t), i = mu(
      e,
      t,
      r,
      g,
      u,
      c
    ), w = hu(), e !== null && !xt ? (pu(e, t, c), la(e, t, c)) : (He && w && Fc(t), t.flags |= 1, jt(e, t, i, c), t.child);
  }
  function wp(e, t, r, i, c) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" && !Vc(u) && u.defaultProps === void 0 && r.compare === null ? (t.tag = 15, t.type = u, Sp(
        e,
        t,
        u,
        i,
        c
      )) : (e = Si(
        r.type,
        null,
        i,
        t,
        t.mode,
        c
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Lu(e, c)) {
      var g = u.memoizedProps;
      if (r = r.compare, r = r !== null ? r : sl, r(g, i) && e.ref === t.ref)
        return la(e, t, c);
    }
    return t.flags |= 1, e = ea(u, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Sp(e, t, r, i, c) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (sl(u, i) && e.ref === t.ref)
        if (xt = !1, t.pendingProps = i = u, Lu(e, c))
          (e.flags & 131072) !== 0 && (xt = !0);
        else
          return t.lanes = e.lanes, la(e, t, c);
    }
    return ku(
      e,
      t,
      r,
      i,
      c
    );
  }
  function xp(e, t, r, i) {
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
        return Cp(
          e,
          t,
          u,
          r,
          i
        );
      }
      if ((r & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Oi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Oh(t, u) : cu(), Th(t);
      else
        return i = t.lanes = 536870912, Cp(
          e,
          t,
          u !== null ? u.baseLanes | r : r,
          r,
          i
        );
    } else
      u !== null ? (Oi(t, u.cachePool), Oh(t, u), Ua(), t.memoizedState = null) : (e !== null && Oi(t, null), cu(), Ua());
    return jt(e, t, c, r), t.child;
  }
  function Cl(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Cp(e, t, r, i, c) {
    var u = au();
    return u = u === null ? null : { parent: wt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: r,
      cachePool: u
    }, e !== null && Oi(t, null), cu(), Th(t), e !== null && uo(e, t, i, !0), t.childLanes = c, null;
  }
  function qi(e, t) {
    return t = Gi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ep(e, t, r) {
    return Or(t, e.child, null, r), e = qi(t, t.pendingProps), e.flags |= 2, nn(t), t.memoizedState = null, e;
  }
  function M1(e, t, r) {
    var i = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (He) {
        if (i.mode === "hidden")
          return e = qi(t, i), t.lanes = 536870912, Cl(null, e);
        if (fu(t), (e = rt) ? (e = Yg(
          e,
          gn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Na !== null ? { id: Rn, overflow: kn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = ih(e), r.return = t, t.child = r, kt = t, rt = null)) : e = null, e === null) throw ka(t);
        return t.lanes = 536870912, null;
      }
      return qi(t, i);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var g = u.dehydrated;
      if (fu(t), c)
        if (t.flags & 256)
          t.flags &= -257, t = Ep(
            e,
            t,
            r
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (xt || uo(e, t, r, !1), c = (r & e.childLanes) !== 0, xt || c) {
        if (i = tt, i !== null && (g = hm(i, r), g !== 0 && g !== u.retryLane))
          throw u.retryLane = g, yr(e, g), Kt(i, e, g), Ru;
        $i(), t = Ep(
          e,
          t,
          r
        );
      } else
        e = u.treeContext, rt = vn(g.nextSibling), kt = t, He = !0, Ra = null, gn = !1, e !== null && uh(t, e), t = qi(t, i), t.flags |= 4096;
      return t;
    }
    return e = ea(e.child, {
      mode: i.mode,
      children: i.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Pi(e, t) {
    var r = t.ref;
    if (r === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (e === null || e.ref !== r) && (t.flags |= 4194816);
    }
  }
  function ku(e, t, r, i, c) {
    return Sr(t), r = mu(
      e,
      t,
      r,
      i,
      void 0,
      c
    ), i = hu(), e !== null && !xt ? (pu(e, t, c), la(e, t, c)) : (He && i && Fc(t), t.flags |= 1, jt(e, t, r, c), t.child);
  }
  function Op(e, t, r, i, c, u) {
    return Sr(t), t.updateQueue = null, r = Dh(
      t,
      i,
      r,
      c
    ), Mh(e), i = hu(), e !== null && !xt ? (pu(e, t, u), la(e, t, u)) : (He && i && Fc(t), t.flags |= 1, jt(e, t, r, u), t.child);
  }
  function Tp(e, t, r, i, c) {
    if (Sr(t), t.stateNode === null) {
      var u = lo, g = r.contextType;
      typeof g == "object" && g !== null && (u = zt(g)), u = new r(i, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Au, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = i, u.state = t.memoizedState, u.refs = {}, ou(t), g = r.contextType, u.context = typeof g == "object" && g !== null ? zt(g) : lo, u.state = t.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (_u(
        t,
        r,
        g,
        i
      ), u.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (g = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), g !== u.state && Au.enqueueReplaceState(u, u.state, null), vl(t, i, u, c), yl(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      u = t.stateNode;
      var w = t.memoizedProps, A = Mr(r, w);
      u.props = A;
      var q = u.context, X = r.contextType;
      g = lo, typeof X == "object" && X !== null && (g = zt(X));
      var I = r.getDerivedStateFromProps;
      X = typeof I == "function" || typeof u.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, X || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (w || q !== g) && dp(
        t,
        u,
        i,
        g
      ), ja = !1;
      var P = t.memoizedState;
      u.state = P, vl(t, i, u, c), yl(), q = t.memoizedState, w || P !== q || ja ? (typeof I == "function" && (_u(
        t,
        r,
        I,
        i
      ), q = t.memoizedState), (A = ja || fp(
        t,
        r,
        A,
        i,
        P,
        q,
        g
      )) ? (X || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = q), u.props = i, u.state = q, u.context = g, i = A) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      u = t.stateNode, lu(e, t), g = t.memoizedProps, X = Mr(r, g), u.props = X, I = t.pendingProps, P = u.context, q = r.contextType, A = lo, typeof q == "object" && q !== null && (A = zt(q)), w = r.getDerivedStateFromProps, (q = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (g !== I || P !== A) && dp(
        t,
        u,
        i,
        A
      ), ja = !1, P = t.memoizedState, u.state = P, vl(t, i, u, c), yl();
      var G = t.memoizedState;
      g !== I || P !== G || ja || e !== null && e.dependencies !== null && Ci(e.dependencies) ? (typeof w == "function" && (_u(
        t,
        r,
        w,
        i
      ), G = t.memoizedState), (X = ja || fp(
        t,
        r,
        X,
        i,
        P,
        G,
        A
      ) || e !== null && e.dependencies !== null && Ci(e.dependencies)) ? (q || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, G, A), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        i,
        G,
        A
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), u.props = i, u.state = G, u.context = A, i = X) : (typeof u.componentDidUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return u = i, Pi(e, t), i = (t.flags & 128) !== 0, u || i ? (u = t.stateNode, r = i && typeof r.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && i ? (t.child = Or(
      t,
      e.child,
      null,
      c
    ), t.child = Or(
      t,
      null,
      r,
      c
    )) : jt(e, t, r, c), t.memoizedState = u.state, e = t.child) : e = la(
      e,
      t,
      c
    ), e;
  }
  function Mp(e, t, r, i) {
    return br(), t.flags |= 256, jt(e, t, r, i), t.child;
  }
  var zu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ju(e) {
    return { baseLanes: e, cachePool: gh() };
  }
  function Yu(e, t, r) {
    return e = e !== null ? e.childLanes & ~r : 0, t && (e |= rn), e;
  }
  function Dp(e, t, r) {
    var i = t.pendingProps, c = !1, u = (t.flags & 128) !== 0, g;
    if ((g = u) || (g = e !== null && e.memoizedState === null ? !1 : (ht.current & 2) !== 0), g && (c = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (He) {
        if (c ? Ba(t) : Ua(), (e = rt) ? (e = Yg(
          e,
          gn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Na !== null ? { id: Rn, overflow: kn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = ih(e), r.return = t, t.child = r, kt = t, rt = null)) : e = null, e === null) throw ka(t);
        return bf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var w = i.children;
      return i = i.fallback, c ? (Ua(), c = t.mode, w = Gi(
        { mode: "hidden", children: w },
        c
      ), i = vr(
        i,
        c,
        r,
        null
      ), w.return = t, i.return = t, w.sibling = i, t.child = w, i = t.child, i.memoizedState = ju(r), i.childLanes = Yu(
        e,
        g,
        r
      ), t.memoizedState = zu, Cl(null, i)) : (Ba(t), Hu(t, w));
    }
    var A = e.memoizedState;
    if (A !== null && (w = A.dehydrated, w !== null)) {
      if (u)
        t.flags & 256 ? (Ba(t), t.flags &= -257, t = Bu(
          e,
          t,
          r
        )) : t.memoizedState !== null ? (Ua(), t.child = e.child, t.flags |= 128, t = null) : (Ua(), w = i.fallback, c = t.mode, i = Gi(
          { mode: "visible", children: i.children },
          c
        ), w = vr(
          w,
          c,
          r,
          null
        ), w.flags |= 2, i.return = t, w.return = t, i.sibling = w, t.child = i, Or(
          t,
          e.child,
          null,
          r
        ), i = t.child, i.memoizedState = ju(r), i.childLanes = Yu(
          e,
          g,
          r
        ), t.memoizedState = zu, t = Cl(null, i));
      else if (Ba(t), bf(w)) {
        if (g = w.nextSibling && w.nextSibling.dataset, g) var q = g.dgst;
        g = q, i = Error(o(419)), i.stack = "", i.digest = g, fl({ value: i, source: null, stack: null }), t = Bu(
          e,
          t,
          r
        );
      } else if (xt || uo(e, t, r, !1), g = (r & e.childLanes) !== 0, xt || g) {
        if (g = tt, g !== null && (i = hm(g, r), i !== 0 && i !== A.retryLane))
          throw A.retryLane = i, yr(e, i), Kt(g, e, i), Ru;
        vf(w) || $i(), t = Bu(
          e,
          t,
          r
        );
      } else
        vf(w) ? (t.flags |= 192, t.child = e.child, t = null) : (e = A.treeContext, rt = vn(
          w.nextSibling
        ), kt = t, He = !0, Ra = null, gn = !1, e !== null && uh(t, e), t = Hu(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return c ? (Ua(), w = i.fallback, c = t.mode, A = e.child, q = A.sibling, i = ea(A, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = A.subtreeFlags & 65011712, q !== null ? w = ea(
      q,
      w
    ) : (w = vr(
      w,
      c,
      r,
      null
    ), w.flags |= 2), w.return = t, i.return = t, i.sibling = w, t.child = i, Cl(null, i), i = t.child, w = e.child.memoizedState, w === null ? w = ju(r) : (c = w.cachePool, c !== null ? (A = wt._currentValue, c = c.parent !== A ? { parent: A, pool: A } : c) : c = gh(), w = {
      baseLanes: w.baseLanes | r,
      cachePool: c
    }), i.memoizedState = w, i.childLanes = Yu(
      e,
      g,
      r
    ), t.memoizedState = zu, Cl(e.child, i)) : (Ba(t), r = e.child, e = r.sibling, r = ea(r, {
      mode: "visible",
      children: i.children
    }), r.return = t, r.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = r, t.memoizedState = null, r);
  }
  function Hu(e, t) {
    return t = Gi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Gi(e, t) {
    return e = en(22, e, null, t), e.lanes = 0, e;
  }
  function Bu(e, t, r) {
    return Or(t, e.child, null, r), e = Hu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function _p(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Jc(e.return, t, r);
  }
  function Uu(e, t, r, i, c, u) {
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
  function Ap(e, t, r) {
    var i = t.pendingProps, c = i.revealOrder, u = i.tail;
    i = i.children;
    var g = ht.current, w = (g & 2) !== 0;
    if (w ? (g = g & 1 | 2, t.flags |= 128) : g &= 1, J(ht, g), jt(e, t, i, r), i = He ? ul : 0, !w && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && _p(e, r, t);
        else if (e.tag === 19)
          _p(e, r, t);
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
          e = r.alternate, e !== null && Ni(e) === null && (c = r), r = r.sibling;
        r = c, r === null ? (c = t.child, t.child = null) : (c = r.sibling, r.sibling = null), Uu(
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
          if (e = c.alternate, e !== null && Ni(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = r, r = c, c = e;
        }
        Uu(
          t,
          !0,
          r,
          null,
          u,
          i
        );
        break;
      case "together":
        Uu(
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
        if (uo(
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
  function Lu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ci(e)));
  }
  function D1(e, t, r) {
    switch (t.tag) {
      case 3:
        Xe(t, t.stateNode.containerInfo), za(t, wt, e.memoizedState.cache), br();
        break;
      case 27:
      case 5:
        he(t);
        break;
      case 4:
        Xe(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, fu(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Ba(t), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Dp(e, t, r) : (Ba(t), e = la(
            e,
            t,
            r
          ), e !== null ? e.sibling : null);
        Ba(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (i = (r & t.childLanes) !== 0, i || (uo(
          e,
          t,
          r,
          !1
        ), i = (r & t.childLanes) !== 0), c) {
          if (i)
            return Ap(
              e,
              t,
              r
            );
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), J(ht, ht.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, xp(
          e,
          t,
          r,
          t.pendingProps
        );
      case 24:
        za(t, wt, e.memoizedState.cache);
    }
    return la(e, t, r);
  }
  function Np(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        xt = !0;
      else {
        if (!Lu(e, r) && (t.flags & 128) === 0)
          return xt = !1, D1(
            e,
            t,
            r
          );
        xt = (e.flags & 131072) !== 0;
      }
    else
      xt = !1, He && (t.flags & 1048576) !== 0 && ch(t, ul, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = Cr(t.elementType), t.type = e, typeof e == "function")
            Vc(e) ? (i = Mr(e, i), t.tag = 1, t = Tp(
              null,
              t,
              e,
              i,
              r
            )) : (t.tag = 0, t = ku(
              null,
              t,
              e,
              i,
              r
            ));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === k) {
                t.tag = 11, t = bp(
                  null,
                  t,
                  e,
                  i,
                  r
                );
                break e;
              } else if (c === N) {
                t.tag = 14, t = wp(
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
        return ku(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 1:
        return i = t.type, c = Mr(
          i,
          t.pendingProps
        ), Tp(
          e,
          t,
          i,
          c,
          r
        );
      case 3:
        e: {
          if (Xe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          i = t.pendingProps;
          var u = t.memoizedState;
          c = u.element, lu(e, t), vl(t, i, null, r);
          var g = t.memoizedState;
          if (i = g.cache, za(t, wt, i), i !== u.cache && eu(
            t,
            [wt],
            r,
            !0
          ), yl(), i = g.element, u.isDehydrated)
            if (u = {
              element: i,
              isDehydrated: !1,
              cache: g.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Mp(
                e,
                t,
                i,
                r
              );
              break e;
            } else if (i !== c) {
              c = mn(
                Error(o(424)),
                t
              ), fl(c), t = Mp(
                e,
                t,
                i,
                r
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, rt = vn(e.firstChild), kt = t, He = !0, Ra = null, gn = !0, r = xh(
                t,
                null,
                i,
                r
              ), t.child = r; r; )
                r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (br(), i === c) {
              t = la(
                e,
                t,
                r
              );
              break e;
            }
            jt(e, t, i, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Pi(e, t), e === null ? (r = Pg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = r : He || (r = t.type, e = t.pendingProps, i = os(
          oe.current
        ).createElement(r), i[Rt] = t, i[Vt] = e, Yt(i, r, e), Dt(i), t.stateNode = i) : t.memoizedState = Pg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return he(t), e === null && He && (i = t.stateNode = Ug(
          t.type,
          t.pendingProps,
          oe.current
        ), kt = t, gn = !0, c = rt, Qa(t.type) ? (wf = c, rt = vn(i.firstChild)) : rt = c), jt(
          e,
          t,
          t.pendingProps.children,
          r
        ), Pi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && He && ((c = i = rt) && (i = rS(
          i,
          t.type,
          t.pendingProps,
          gn
        ), i !== null ? (t.stateNode = i, kt = t, rt = vn(i.firstChild), gn = !1, c = !0) : c = !1), c || ka(t)), he(t), c = t.type, u = t.pendingProps, g = e !== null ? e.memoizedProps : null, i = u.children, pf(c, u) ? i = null : g !== null && pf(c, g) && (t.flags |= 32), t.memoizedState !== null && (c = mu(
          e,
          t,
          b1,
          null,
          null,
          r
        ), Bl._currentValue = c), Pi(e, t), jt(e, t, i, r), t.child;
      case 6:
        return e === null && He && ((e = r = rt) && (r = oS(
          r,
          t.pendingProps,
          gn
        ), r !== null ? (t.stateNode = r, kt = t, rt = null, e = !0) : e = !1), e || ka(t)), null;
      case 13:
        return Dp(e, t, r);
      case 4:
        return Xe(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Or(
          t,
          null,
          i,
          r
        ) : jt(e, t, i, r), t.child;
      case 11:
        return bp(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 7:
        return jt(
          e,
          t,
          t.pendingProps,
          r
        ), t.child;
      case 8:
        return jt(
          e,
          t,
          t.pendingProps.children,
          r
        ), t.child;
      case 12:
        return jt(
          e,
          t,
          t.pendingProps.children,
          r
        ), t.child;
      case 10:
        return i = t.pendingProps, za(t, t.type, i.value), jt(e, t, i.children, r), t.child;
      case 9:
        return c = t.type._context, i = t.pendingProps.children, Sr(t), c = zt(c), i = i(c), t.flags |= 1, jt(e, t, i, r), t.child;
      case 14:
        return wp(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 15:
        return Sp(
          e,
          t,
          t.type,
          t.pendingProps,
          r
        );
      case 19:
        return Ap(e, t, r);
      case 31:
        return M1(e, t, r);
      case 22:
        return xp(
          e,
          t,
          r,
          t.pendingProps
        );
      case 24:
        return Sr(t), i = zt(wt), e === null ? (c = au(), c === null && (c = tt, u = tu(), c.pooledCache = u, u.refCount++, u !== null && (c.pooledCacheLanes |= r), c = u), t.memoizedState = { parent: i, cache: c }, ou(t), za(t, wt, c)) : ((e.lanes & r) !== 0 && (lu(e, t), vl(t, null, null, r), yl()), c = e.memoizedState, u = t.memoizedState, c.parent !== i ? (c = { parent: i, cache: i }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), za(t, wt, i)) : (i = u.cache, za(t, wt, i), i !== c.cache && eu(
          t,
          [wt],
          r,
          !0
        ))), jt(
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
  function qu(e, t, r, i, c) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (c & 335544128) === c)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rg()) e.flags |= 8192;
        else
          throw Er = Mi, ru;
    } else e.flags &= -16777217;
  }
  function Rp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Qg(t))
      if (rg()) e.flags |= 8192;
      else
        throw Er = Mi, ru;
  }
  function Wi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? li() : 536870912, e.lanes |= t, Co |= t);
  }
  function El(e, t) {
    if (!He)
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
  function ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, i = 0;
    if (t)
      for (var c = e.child; c !== null; )
        r |= c.lanes | c.childLanes, i |= c.subtreeFlags & 65011712, i |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        r |= c.lanes | c.childLanes, i |= c.subtreeFlags, i |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= i, e.childLanes = r, t;
  }
  function _1(e, t, r) {
    var i = t.pendingProps;
    switch (Zc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(t), null;
      case 1:
        return ot(t), null;
      case 3:
        return r = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), aa(wt), ye(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (co(t) ? ia(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Kc())), ot(t), null;
      case 26:
        var c = t.type, u = t.memoizedState;
        return e === null ? (ia(t), u !== null ? (ot(t), Rp(t, u)) : (ot(t), qu(
          t,
          c,
          null,
          i,
          r
        ))) : u ? u !== e.memoizedState ? (ia(t), ot(t), Rp(t, u)) : (ot(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && ia(t), ot(t), qu(
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
            return ot(t), null;
          }
          e = ae.current, co(t) ? fh(t) : (e = Ug(c, i, r), t.stateNode = e, ia(t));
        }
        return ot(t), null;
      case 5:
        if (Qe(t), c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && ia(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(o(166));
            return ot(t), null;
          }
          if (u = ae.current, co(t))
            fh(t);
          else {
            var g = os(
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
            u[Rt] = t, u[Vt] = i;
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
            e: switch (Yt(u, c, i), c) {
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
        return ot(t), qu(
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
          if (e = oe.current, co(t)) {
            if (e = t.stateNode, r = t.memoizedProps, i = null, c = kt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  i = c.memoizedProps;
              }
            e[Rt] = t, e = !!(e.nodeValue === r || i !== null && i.suppressHydrationWarning === !0 || Dg(e.nodeValue, r)), e || ka(t, !0);
          } else
            e = os(e).createTextNode(
              i
            ), e[Rt] = t, t.stateNode = e;
        }
        return ot(t), null;
      case 31:
        if (r = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = co(t), r !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Rt] = t;
            } else
              br(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ot(t), e = !1;
          } else
            r = Kc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return t.flags & 256 ? (nn(t), t) : (nn(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return ot(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = co(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317));
              c[Rt] = t;
            } else
              br(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ot(t), c = !1;
          } else
            c = Kc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (nn(t), t) : (nn(t), null);
        }
        return nn(t), (t.flags & 128) !== 0 ? (t.lanes = r, t) : (r = i !== null, e = e !== null && e.memoizedState !== null, r && (i = t.child, c = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (c = i.alternate.memoizedState.cachePool.pool), u = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool), u !== c && (i.flags |= 2048)), r !== e && r && (t.child.flags |= 8192), Wi(t, t.updateQueue), ot(t), null);
      case 4:
        return ye(), e === null && uf(t.stateNode.containerInfo), ot(t), null;
      case 10:
        return aa(t.type), ot(t), null;
      case 19:
        if (V(ht), i = t.memoizedState, i === null) return ot(t), null;
        if (c = (t.flags & 128) !== 0, u = i.rendering, u === null)
          if (c) El(i, !1);
          else {
            if (ut !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Ni(e), u !== null) {
                  for (t.flags |= 128, El(i, !1), e = u.updateQueue, t.updateQueue = e, Wi(t, e), t.subtreeFlags = 0, e = r, r = t.child; r !== null; )
                    lh(r, e), r = r.sibling;
                  return J(
                    ht,
                    ht.current & 1 | 2
                  ), He && ta(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && Nt() > Zi && (t.flags |= 128, c = !0, El(i, !1), t.lanes = 4194304);
          }
        else {
          if (!c)
            if (e = Ni(u), e !== null) {
              if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Wi(t, e), El(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !He)
                return ot(t), null;
            } else
              2 * Nt() - i.renderingStartTime > Zi && r !== 536870912 && (t.flags |= 128, c = !0, El(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (e = i.last, e !== null ? e.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Nt(), e.sibling = null, r = ht.current, J(
          ht,
          c ? r & 1 | 2 : r & 1
        ), He && ta(t, i.treeForkCount), e) : (ot(t), null);
      case 22:
      case 23:
        return nn(t), uu(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (r & 536870912) !== 0 && (t.flags & 128) === 0 && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ot(t), r = t.updateQueue, r !== null && Wi(t, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== r && (t.flags |= 2048), e !== null && V(xr), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), aa(wt), ot(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function A1(e, t) {
    switch (Zc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return aa(wt), ye(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Qe(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (nn(t), t.alternate === null)
            throw Error(o(340));
          br();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (nn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          br();
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
        return nn(t), uu(), e !== null && V(xr), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return aa(wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kp(e, t) {
    switch (Zc(t), t.tag) {
      case 3:
        aa(wt), ye();
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
        t.memoizedState !== null && nn(t);
        break;
      case 13:
        nn(t);
        break;
      case 19:
        V(ht);
        break;
      case 10:
        aa(t.type);
        break;
      case 22:
      case 23:
        nn(t), uu(), e !== null && V(xr);
        break;
      case 24:
        aa(wt);
    }
  }
  function Ol(e, t) {
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
    } catch (w) {
      Ze(t, t.return, w);
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
            var g = i.inst, w = g.destroy;
            if (w !== void 0) {
              g.destroy = void 0, c = t;
              var A = r, q = w;
              try {
                q();
              } catch (X) {
                Ze(
                  c,
                  A,
                  X
                );
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (X) {
      Ze(t, t.return, X);
    }
  }
  function zp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Eh(t, r);
      } catch (i) {
        Ze(e, e.return, i);
      }
    }
  }
  function jp(e, t, r) {
    r.props = Mr(
      e.type,
      e.memoizedProps
    ), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (i) {
      Ze(e, t, i);
    }
  }
  function Tl(e, t) {
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
      Ze(e, t, c);
    }
  }
  function zn(e, t) {
    var r = e.ref, i = e.refCleanup;
    if (r !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (c) {
          Ze(e, t, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (c) {
          Ze(e, t, c);
        }
      else r.current = null;
  }
  function Yp(e) {
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
      Ze(e, e.return, c);
    }
  }
  function Pu(e, t, r) {
    try {
      var i = e.stateNode;
      $1(i, e.type, r, t), i[Vt] = t;
    } catch (c) {
      Ze(e, e.return, c);
    }
  }
  function Hp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Qa(e.type) || e.tag === 4;
  }
  function Gu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Qa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Wu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(e, t) : (t = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, t.appendChild(e), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = $n));
    else if (i !== 4 && (i === 27 && Qa(e.type) && (r = e.stateNode, t = null), e = e.child, e !== null))
      for (Wu(e, t, r), e = e.sibling; e !== null; )
        Wu(e, t, r), e = e.sibling;
  }
  function Vi(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (i !== 4 && (i === 27 && Qa(e.type) && (r = e.stateNode), e = e.child, e !== null))
      for (Vi(e, t, r), e = e.sibling; e !== null; )
        Vi(e, t, r), e = e.sibling;
  }
  function Bp(e) {
    var t = e.stateNode, r = e.memoizedProps;
    try {
      for (var i = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      Yt(t, i, r), t[Rt] = e, t[Vt] = r;
    } catch (u) {
      Ze(e, e.return, u);
    }
  }
  var sa = !1, Ct = !1, Vu = !1, Up = typeof WeakSet == "function" ? WeakSet : Set, _t = null;
  function N1(e, t) {
    if (e = e.containerInfo, mf = ds, e = Km(e), Bc(e)) {
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
            var g = 0, w = -1, A = -1, q = 0, X = 0, I = e, P = null;
            t: for (; ; ) {
              for (var G; I !== r || c !== 0 && I.nodeType !== 3 || (w = g + c), I !== u || i !== 0 && I.nodeType !== 3 || (A = g + i), I.nodeType === 3 && (g += I.nodeValue.length), (G = I.firstChild) !== null; )
                P = I, I = G;
              for (; ; ) {
                if (I === e) break t;
                if (P === r && ++q === c && (w = g), P === u && ++X === i && (A = g), (G = I.nextSibling) !== null) break;
                I = P, P = I.parentNode;
              }
              I = G;
            }
            r = w === -1 || A === -1 ? null : { start: w, end: A };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (hf = { focusedElem: e, selectionRange: r }, ds = !1, _t = t; _t !== null; )
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
                  var fe = Mr(
                    r.type,
                    c
                  );
                  e = i.getSnapshotBeforeUpdate(
                    fe,
                    u
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (we) {
                  Ze(
                    r,
                    r.return,
                    we
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, r = e.nodeType, r === 9)
                  yf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yf(e);
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
  function Lp(e, t, r) {
    var i = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ua(e, r), i & 4 && Ol(5, r);
        break;
      case 1:
        if (ua(e, r), i & 4)
          if (e = r.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (g) {
              Ze(r, r.return, g);
            }
          else {
            var c = Mr(
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
              Ze(
                r,
                r.return,
                g
              );
            }
          }
        i & 64 && zp(r), i & 512 && Tl(r, r.return);
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
            Eh(e, t);
          } catch (g) {
            Ze(r, r.return, g);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Bp(r);
      case 26:
      case 5:
        ua(e, r), t === null && i & 4 && Yp(r), i & 512 && Tl(r, r.return);
        break;
      case 12:
        ua(e, r);
        break;
      case 31:
        ua(e, r), i & 4 && Gp(e, r);
        break;
      case 13:
        ua(e, r), i & 4 && Wp(e, r), i & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = L1.bind(
          null,
          r
        ), lS(e, r))));
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
  function qp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, qp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Sc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var lt = null, Qt = !1;
  function ca(e, t, r) {
    for (r = r.child; r !== null; )
      Pp(e, t, r), r = r.sibling;
  }
  function Pp(e, t, r) {
    if (qt && typeof qt.onCommitFiberUnmount == "function")
      try {
        qt.onCommitFiberUnmount(ur, r);
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
        var i = lt, c = Qt;
        Qa(r.type) && (lt = r.stateNode, Qt = !1), ca(
          e,
          t,
          r
        ), jl(r.stateNode), lt = i, Qt = c;
        break;
      case 5:
        Ct || zn(r, t);
      case 6:
        if (i = lt, c = Qt, lt = null, ca(
          e,
          t,
          r
        ), lt = i, Qt = c, lt !== null)
          if (Qt)
            try {
              (lt.nodeType === 9 ? lt.body : lt.nodeName === "HTML" ? lt.ownerDocument.body : lt).removeChild(r.stateNode);
            } catch (u) {
              Ze(
                r,
                t,
                u
              );
            }
          else
            try {
              lt.removeChild(r.stateNode);
            } catch (u) {
              Ze(
                r,
                t,
                u
              );
            }
        break;
      case 18:
        lt !== null && (Qt ? (e = lt, zg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), No(e)) : zg(lt, r.stateNode));
        break;
      case 4:
        i = lt, c = Qt, lt = r.stateNode.containerInfo, Qt = !0, ca(
          e,
          t,
          r
        ), lt = i, Qt = c;
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
        Ct || (zn(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function" && jp(
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
  function Gp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        No(e);
      } catch (r) {
        Ze(t, t.return, r);
      }
    }
  }
  function Wp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        No(e);
      } catch (r) {
        Ze(t, t.return, r);
      }
  }
  function R1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Up()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Up()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Xi(e, t) {
    var r = R1(e);
    t.forEach(function(i) {
      if (!r.has(i)) {
        r.add(i);
        var c = q1.bind(null, e, i);
        i.then(c, c);
      }
    });
  }
  function Ft(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var c = r[i], u = e, g = t, w = g;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (Qa(w.type)) {
                lt = w.stateNode, Qt = !1;
                break e;
              }
              break;
            case 5:
              lt = w.stateNode, Qt = !1;
              break e;
            case 3:
            case 4:
              lt = w.stateNode.containerInfo, Qt = !0;
              break e;
          }
          w = w.return;
        }
        if (lt === null) throw Error(o(160));
        Pp(u, g, c), lt = null, Qt = !1, u = c.alternate, u !== null && (u.return = null), c.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Vp(t, e), t = t.sibling;
  }
  var Cn = null;
  function Vp(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ft(t, e), Zt(e), i & 4 && (La(3, e, e.return), Ol(3, e), La(5, e, e.return));
        break;
      case 1:
        Ft(t, e), Zt(e), i & 512 && (Ct || r === null || zn(r, r.return)), i & 64 && sa && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? i : r.concat(i))));
        break;
      case 26:
        var c = Cn;
        if (Ft(t, e), Zt(e), i & 512 && (Ct || r === null || zn(r, r.return)), i & 4) {
          var u = r !== null ? r.memoizedState : null;
          if (i = e.memoizedState, r === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, r = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (i) {
                    case "title":
                      u = c.getElementsByTagName("title")[0], (!u || u[Jo] || u[Rt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = c.createElement(i), c.head.insertBefore(
                        u,
                        c.querySelector("head > title")
                      )), Yt(u, i, r), u[Rt] = e, Dt(u), i = u;
                      break e;
                    case "link":
                      var g = Vg(
                        "link",
                        "href",
                        c
                      ).get(i + (r.href || ""));
                      if (g) {
                        for (var w = 0; w < g.length; w++)
                          if (u = g[w], u.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && u.getAttribute("rel") === (r.rel == null ? null : r.rel) && u.getAttribute("title") === (r.title == null ? null : r.title) && u.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                            g.splice(w, 1);
                            break t;
                          }
                      }
                      u = c.createElement(i), Yt(u, i, r), c.head.appendChild(u);
                      break;
                    case "meta":
                      if (g = Vg(
                        "meta",
                        "content",
                        c
                      ).get(i + (r.content || ""))) {
                        for (w = 0; w < g.length; w++)
                          if (u = g[w], u.getAttribute("content") === (r.content == null ? null : "" + r.content) && u.getAttribute("name") === (r.name == null ? null : r.name) && u.getAttribute("property") === (r.property == null ? null : r.property) && u.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && u.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                            g.splice(w, 1);
                            break t;
                          }
                      }
                      u = c.createElement(i), Yt(u, i, r), c.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  u[Rt] = e, Dt(u), i = u;
                }
                e.stateNode = i;
              } else
                Xg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Wg(
                c,
                i,
                e.memoizedProps
              );
          else
            u !== i ? (u === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : u.count--, i === null ? Xg(
              c,
              e.type,
              e.stateNode
            ) : Wg(
              c,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && Pu(
              e,
              e.memoizedProps,
              r.memoizedProps
            );
        }
        break;
      case 27:
        Ft(t, e), Zt(e), i & 512 && (Ct || r === null || zn(r, r.return)), r !== null && i & 4 && Pu(
          e,
          e.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (Ft(t, e), Zt(e), i & 512 && (Ct || r === null || zn(r, r.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Jr(c, "");
          } catch (fe) {
            Ze(e, e.return, fe);
          }
        }
        i & 4 && e.stateNode != null && (c = e.memoizedProps, Pu(
          e,
          c,
          r !== null ? r.memoizedProps : c
        )), i & 1024 && (Vu = !0);
        break;
      case 6:
        if (Ft(t, e), Zt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          i = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = i;
          } catch (fe) {
            Ze(e, e.return, fe);
          }
        }
        break;
      case 3:
        if (ss = null, c = Cn, Cn = ls(t.containerInfo), Ft(t, e), Cn = c, Zt(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            No(t.containerInfo);
          } catch (fe) {
            Ze(e, e.return, fe);
          }
        Vu && (Vu = !1, Xp(e));
        break;
      case 4:
        i = Cn, Cn = ls(
          e.stateNode.containerInfo
        ), Ft(t, e), Zt(e), Cn = i;
        break;
      case 12:
        Ft(t, e), Zt(e);
        break;
      case 31:
        Ft(t, e), Zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Xi(e, i)));
        break;
      case 13:
        Ft(t, e), Zt(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (Fi = Nt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Xi(e, i)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var A = r !== null && r.memoizedState !== null, q = sa, X = Ct;
        if (sa = q || c, Ct = X || A, Ft(t, e), Ct = X, sa = q, Zt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (r === null || A || sa || Ct || Dr(e)), r = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (r === null) {
                A = r = t;
                try {
                  if (u = A.stateNode, c)
                    g = u.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    w = A.stateNode;
                    var I = A.memoizedProps.style, P = I != null && I.hasOwnProperty("display") ? I.display : null;
                    w.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (fe) {
                  Ze(A, A.return, fe);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = c ? "" : A.memoizedProps;
                } catch (fe) {
                  Ze(A, A.return, fe);
                }
              }
            } else if (t.tag === 18) {
              if (r === null) {
                A = t;
                try {
                  var G = A.stateNode;
                  c ? jg(G, !0) : jg(A.stateNode, !1);
                } catch (fe) {
                  Ze(A, A.return, fe);
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
        i & 4 && (i = e.updateQueue, i !== null && (r = i.retryQueue, r !== null && (i.retryQueue = null, Xi(e, r))));
        break;
      case 19:
        Ft(t, e), Zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Xi(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ft(t, e), Zt(e);
    }
  }
  function Zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var r, i = e.return; i !== null; ) {
          if (Hp(i)) {
            r = i;
            break;
          }
          i = i.return;
        }
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var c = r.stateNode, u = Gu(e);
            Vi(e, u, c);
            break;
          case 5:
            var g = r.stateNode;
            r.flags & 32 && (Jr(g, ""), r.flags &= -33);
            var w = Gu(e);
            Vi(e, w, g);
            break;
          case 3:
          case 4:
            var A = r.stateNode.containerInfo, q = Gu(e);
            Wu(
              e,
              q,
              A
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (X) {
        Ze(e, e.return, X);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Xp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ua(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Lp(e, t.alternate, t), t = t.sibling;
  }
  function Dr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          La(4, t, t.return), Dr(t);
          break;
        case 1:
          zn(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && jp(
            t,
            t.return,
            r
          ), Dr(t);
          break;
        case 27:
          jl(t.stateNode);
        case 26:
        case 5:
          zn(t, t.return), Dr(t);
          break;
        case 22:
          t.memoizedState === null && Dr(t);
          break;
        case 30:
          Dr(t);
          break;
        default:
          Dr(t);
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
          ), Ol(4, u);
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
              Ze(i, i.return, q);
            }
          if (i = u, c = i.updateQueue, c !== null) {
            var w = i.stateNode;
            try {
              var A = c.shared.hiddenCallbacks;
              if (A !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < A.length; c++)
                  Ch(A[c], w);
            } catch (q) {
              Ze(i, i.return, q);
            }
          }
          r && g & 64 && zp(u), Tl(u, u.return);
          break;
        case 27:
          Bp(u);
        case 26:
        case 5:
          fa(
            c,
            u,
            r
          ), r && i === null && g & 4 && Yp(u), Tl(u, u.return);
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
          ), r && g & 4 && Gp(c, u);
          break;
        case 13:
          fa(
            c,
            u,
            r
          ), r && g & 4 && Wp(c, u);
          break;
        case 22:
          u.memoizedState === null && fa(
            c,
            u,
            r
          ), Tl(u, u.return);
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
  function Xu(e, t) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && dl(r));
  }
  function Qu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && dl(e));
  }
  function En(e, t, r, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Qp(
          e,
          t,
          r,
          i
        ), t = t.sibling;
  }
  function Qp(e, t, r, i) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        En(
          e,
          t,
          r,
          i
        ), c & 2048 && Ol(9, t);
        break;
      case 1:
        En(
          e,
          t,
          r,
          i
        );
        break;
      case 3:
        En(
          e,
          t,
          r,
          i
        ), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && dl(e)));
        break;
      case 12:
        if (c & 2048) {
          En(
            e,
            t,
            r,
            i
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, g = u.id, w = u.onPostCommit;
            typeof w == "function" && w(
              g,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (A) {
            Ze(t, t.return, A);
          }
        } else
          En(
            e,
            t,
            r,
            i
          );
        break;
      case 31:
        En(
          e,
          t,
          r,
          i
        );
        break;
      case 13:
        En(
          e,
          t,
          r,
          i
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, g = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? En(
          e,
          t,
          r,
          i
        ) : Ml(e, t) : u._visibility & 2 ? En(
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
        )), c & 2048 && Xu(g, t);
        break;
      case 24:
        En(
          e,
          t,
          r,
          i
        ), c & 2048 && Qu(t.alternate, t);
        break;
      default:
        En(
          e,
          t,
          r,
          i
        );
    }
  }
  function wo(e, t, r, i, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, g = t, w = r, A = i, q = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          wo(
            u,
            g,
            w,
            A,
            c
          ), Ol(8, g);
          break;
        case 23:
          break;
        case 22:
          var X = g.stateNode;
          g.memoizedState !== null ? X._visibility & 2 ? wo(
            u,
            g,
            w,
            A,
            c
          ) : Ml(
            u,
            g
          ) : (X._visibility |= 2, wo(
            u,
            g,
            w,
            A,
            c
          )), c && q & 2048 && Xu(
            g.alternate,
            g
          );
          break;
        case 24:
          wo(
            u,
            g,
            w,
            A,
            c
          ), c && q & 2048 && Qu(g.alternate, g);
          break;
        default:
          wo(
            u,
            g,
            w,
            A,
            c
          );
      }
      t = t.sibling;
    }
  }
  function Ml(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e, i = t, c = i.flags;
        switch (i.tag) {
          case 22:
            Ml(r, i), c & 2048 && Xu(
              i.alternate,
              i
            );
            break;
          case 24:
            Ml(r, i), c & 2048 && Qu(i.alternate, i);
            break;
          default:
            Ml(r, i);
        }
        t = t.sibling;
      }
  }
  var Dl = 8192;
  function So(e, t, r) {
    if (e.subtreeFlags & Dl)
      for (e = e.child; e !== null; )
        Fp(
          e,
          t,
          r
        ), e = e.sibling;
  }
  function Fp(e, t, r) {
    switch (e.tag) {
      case 26:
        So(
          e,
          t,
          r
        ), e.flags & Dl && e.memoizedState !== null && vS(
          r,
          Cn,
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
        var i = Cn;
        Cn = ls(e.stateNode.containerInfo), So(
          e,
          t,
          r
        ), Cn = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = Dl, Dl = 16777216, So(
          e,
          t,
          r
        ), Dl = i) : So(
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
  function Zp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function _l(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          _t = i, Kp(
            i,
            e
          );
        }
      Zp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ip(e), e = e.sibling;
  }
  function Ip(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _l(e), e.flags & 2048 && La(9, e, e.return);
        break;
      case 3:
        _l(e);
        break;
      case 12:
        _l(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Qi(e)) : _l(e);
        break;
      default:
        _l(e);
    }
  }
  function Qi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          _t = i, Kp(
            i,
            e
          );
        }
      Zp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          La(8, t, t.return), Qi(t);
          break;
        case 22:
          r = t.stateNode, r._visibility & 2 && (r._visibility &= -3, Qi(t));
          break;
        default:
          Qi(t);
      }
      e = e.sibling;
    }
  }
  function Kp(e, t) {
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
          dl(r.memoizedState.cache);
      }
      if (i = r.child, i !== null) i.return = r, _t = i;
      else
        e: for (r = e; _t !== null; ) {
          i = _t;
          var c = i.sibling, u = i.return;
          if (qp(i), i === r) {
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
  var k1 = {
    getCacheForType: function(e) {
      var t = zt(wt), r = t.data.get(e);
      return r === void 0 && (r = e(), t.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return zt(wt).controller.signal;
    }
  }, z1 = typeof WeakMap == "function" ? WeakMap : Map, We = 0, tt = null, Ae = null, ke = 0, Fe = 0, an = null, qa = !1, xo = !1, Fu = !1, da = 0, ut = 0, Pa = 0, _r = 0, Zu = 0, rn = 0, Co = 0, Al = null, It = null, Iu = !1, Fi = 0, $p = 0, Zi = 1 / 0, Ii = null, Ga = null, Ot = 0, Wa = null, Eo = null, ma = 0, Ku = 0, $u = null, Jp = null, Nl = 0, Ju = null;
  function on() {
    return (We & 2) !== 0 && ke !== 0 ? ke & -ke : Y.T !== null ? of() : pm();
  }
  function eg() {
    if (rn === 0)
      if ((ke & 536870912) === 0 || He) {
        var e = be;
        be <<= 1, (be & 3932160) === 0 && (be = 262144), rn = e;
      } else rn = 536870912;
    return e = tn.current, e !== null && (e.flags |= 32), rn;
  }
  function Kt(e, t, r) {
    (e === tt && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (Oo(e, 0), Va(
      e,
      ke,
      rn,
      !1
    )), In(e, r), ((We & 2) === 0 || e !== tt) && (e === tt && ((We & 2) === 0 && (_r |= r), ut === 4 && Va(
      e,
      ke,
      rn,
      !1
    )), jn(e));
  }
  function tg(e, t, r) {
    if ((We & 6) !== 0) throw Error(o(327));
    var i = !r && (t & 127) === 0 && (t & e.expiredLanes) === 0 || fr(e, t), c = i ? H1(e, t) : tf(e, t, !0), u = i;
    do {
      if (c === 0) {
        xo && !i && Va(e, t, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, u && !j1(r)) {
          c = tf(e, t, !1), u = !1;
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
              var w = e;
              c = Al;
              var A = w.current.memoizedState.isDehydrated;
              if (A && (Oo(w, g).flags |= 256), g = tf(
                w,
                g,
                !1
              ), g !== 2) {
                if (Fu && !A) {
                  w.errorRecoveryDisabledLanes |= u, _r |= u, c = 4;
                  break e;
                }
                u = It, It = c, u !== null && (It === null ? It = u : It.push.apply(
                  It,
                  u
                ));
              }
              c = g;
            }
            if (u = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          Oo(e, 0), Va(e, t, 0, !0);
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
                rn,
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
          if ((t & 62914560) === t && (c = Fi + 300 - Nt(), 10 < c)) {
            if (Va(
              i,
              t,
              rn,
              !qa
            ), De(i, 0, !0) !== 0) break e;
            ma = t, i.timeoutHandle = Rg(
              ng.bind(
                null,
                i,
                r,
                It,
                Ii,
                Iu,
                t,
                rn,
                _r,
                Co,
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
          ng(
            i,
            r,
            It,
            Ii,
            Iu,
            t,
            rn,
            _r,
            Co,
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
  function ng(e, t, r, i, c, u, g, w, A, q, X, I, P, G) {
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
      }, Fp(
        t,
        u,
        I
      );
      var fe = (u & 62914560) === u ? Fi - Nt() : (u & 4194048) === u ? $p - Nt() : 0;
      if (fe = bS(
        I,
        fe
      ), fe !== null) {
        ma = u, e.cancelPendingCommit = fe(
          ug.bind(
            null,
            e,
            t,
            u,
            r,
            i,
            c,
            g,
            w,
            A,
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
    ug(
      e,
      t,
      u,
      r,
      i,
      c,
      g,
      w,
      A
    );
  }
  function j1(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if ((r === 0 || r === 11 || r === 15) && t.flags & 16384 && (r = t.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var i = 0; i < r.length; i++) {
          var c = r[i], u = c.getSnapshot;
          c = c.value;
          try {
            if (!Jt(u(), c)) return !1;
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
    t &= ~Zu, t &= ~_r, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var u = 31 - Pt(c), g = 1 << u;
      i[u] = -1, c &= ~g;
    }
    r !== 0 && dm(e, r, t);
  }
  function Ki() {
    return (We & 6) === 0 ? (Rl(0), !1) : !0;
  }
  function ef() {
    if (Ae !== null) {
      if (Fe === 0)
        var e = Ae.return;
      else
        e = Ae, na = wr = null, gu(e), po = null, hl = 0, e = Ae;
      for (; e !== null; )
        kp(e.alternate, e), e = e.return;
      Ae = null;
    }
  }
  function Oo(e, t) {
    var r = e.timeoutHandle;
    r !== -1 && (e.timeoutHandle = -1, tS(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), ma = 0, ef(), tt = e, Ae = r = ea(e.current, null), ke = t, Fe = 0, an = null, qa = !1, xo = fr(e, t), Fu = !1, Co = rn = Zu = _r = Pa = ut = 0, It = Al = null, Iu = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var c = 31 - Pt(i), u = 1 << c;
        t |= e[c], i &= ~u;
      }
    return da = t, vi(), r;
  }
  function ag(e, t) {
    Te = null, Y.H = xl, t === ho || t === Ti ? (t = bh(), Fe = 3) : t === ru ? (t = bh(), Fe = 4) : Fe = t === Ru ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, an = t, Ae === null && (ut = 1, Li(
      e,
      mn(t, e.current)
    ));
  }
  function rg() {
    var e = tn.current;
    return e === null ? !0 : (ke & 4194048) === ke ? yn === null : (ke & 62914560) === ke || (ke & 536870912) !== 0 ? e === yn : !1;
  }
  function og() {
    var e = Y.H;
    return Y.H = xl, e === null ? xl : e;
  }
  function lg() {
    var e = Y.A;
    return Y.A = k1, e;
  }
  function $i() {
    ut = 4, qa || (ke & 4194048) !== ke && tn.current !== null || (xo = !0), (Pa & 134217727) === 0 && (_r & 134217727) === 0 || tt === null || Va(
      tt,
      ke,
      rn,
      !1
    );
  }
  function tf(e, t, r) {
    var i = We;
    We |= 2;
    var c = og(), u = lg();
    (tt !== e || ke !== t) && (Ii = null, Oo(e, t)), t = !1;
    var g = ut;
    e: do
      try {
        if (Fe !== 0 && Ae !== null) {
          var w = Ae, A = an;
          switch (Fe) {
            case 8:
              ef(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              tn.current === null && (t = !0);
              var q = Fe;
              if (Fe = 0, an = null, To(e, w, A, q), r && xo) {
                g = 0;
                break e;
              }
              break;
            default:
              q = Fe, Fe = 0, an = null, To(e, w, A, q);
          }
        }
        Y1(), g = ut;
        break;
      } catch (X) {
        ag(e, X);
      }
    while (!0);
    return t && e.shellSuspendCounter++, na = wr = null, We = i, Y.H = c, Y.A = u, Ae === null && (tt = null, ke = 0, vi()), g;
  }
  function Y1() {
    for (; Ae !== null; ) ig(Ae);
  }
  function H1(e, t) {
    var r = We;
    We |= 2;
    var i = og(), c = lg();
    tt !== e || ke !== t ? (Ii = null, Zi = Nt() + 500, Oo(e, t)) : xo = fr(
      e,
      t
    );
    e: do
      try {
        if (Fe !== 0 && Ae !== null) {
          t = Ae;
          var u = an;
          t: switch (Fe) {
            case 1:
              Fe = 0, an = null, To(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (yh(u)) {
                Fe = 0, an = null, sg(t);
                break;
              }
              t = function() {
                Fe !== 2 && Fe !== 9 || tt !== e || (Fe = 7), jn(e);
              }, u.then(t, t);
              break e;
            case 3:
              Fe = 7;
              break e;
            case 4:
              Fe = 5;
              break e;
            case 7:
              yh(u) ? (Fe = 0, an = null, sg(t)) : (Fe = 0, an = null, To(e, t, u, 7));
              break;
            case 5:
              var g = null;
              switch (Ae.tag) {
                case 26:
                  g = Ae.memoizedState;
                case 5:
                case 27:
                  var w = Ae;
                  if (g ? Qg(g) : w.stateNode.complete) {
                    Fe = 0, an = null;
                    var A = w.sibling;
                    if (A !== null) Ae = A;
                    else {
                      var q = w.return;
                      q !== null ? (Ae = q, Ji(q)) : Ae = null;
                    }
                    break t;
                  }
              }
              Fe = 0, an = null, To(e, t, u, 5);
              break;
            case 6:
              Fe = 0, an = null, To(e, t, u, 6);
              break;
            case 8:
              ef(), ut = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        B1();
        break;
      } catch (X) {
        ag(e, X);
      }
    while (!0);
    return na = wr = null, Y.H = i, Y.A = c, We = r, Ae !== null ? 0 : (tt = null, ke = 0, vi(), ut);
  }
  function B1() {
    for (; Ae !== null && !dc(); )
      ig(Ae);
  }
  function ig(e) {
    var t = Np(e.alternate, e, da);
    e.memoizedProps = e.pendingProps, t === null ? Ji(e) : Ae = t;
  }
  function sg(e) {
    var t = e, r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Op(
          r,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ke
        );
        break;
      case 11:
        t = Op(
          r,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ke
        );
        break;
      case 5:
        gu(t);
      default:
        kp(r, t), t = Ae = lh(t, da), t = Np(r, t, da);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ji(e) : Ae = t;
  }
  function To(e, t, r, i) {
    na = wr = null, gu(t), po = null, hl = 0;
    var c = t.return;
    try {
      if (T1(
        e,
        c,
        t,
        r,
        ke
      )) {
        ut = 1, Li(
          e,
          mn(r, e.current)
        ), Ae = null;
        return;
      }
    } catch (u) {
      if (c !== null) throw Ae = c, u;
      ut = 1, Li(
        e,
        mn(r, e.current)
      ), Ae = null;
      return;
    }
    t.flags & 32768 ? (He || i === 1 ? e = !0 : xo || (ke & 536870912) !== 0 ? e = !1 : (qa = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = tn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), cg(t, e)) : Ji(t);
  }
  function Ji(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cg(
          t,
          qa
        );
        return;
      }
      e = t.return;
      var r = _1(
        t.alternate,
        t,
        da
      );
      if (r !== null) {
        Ae = r;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    ut === 0 && (ut = 5);
  }
  function cg(e, t) {
    do {
      var r = A1(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, Ae = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ae = e;
        return;
      }
      Ae = e = r;
    } while (e !== null);
    ut = 6, Ae = null;
  }
  function ug(e, t, r, i, c, u, g, w, A) {
    e.cancelPendingCommit = null;
    do
      es();
    while (Ot !== 0);
    if ((We & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Gc, yw(
        e,
        r,
        u,
        g,
        w,
        A
      ), e === tt && (Ae = tt = null, ke = 0), Eo = t, Wa = e, ma = r, Ku = u, $u = c, Jp = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, P1(Xr, function() {
        return pg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = Y.T, Y.T = null, c = F.p, F.p = 2, g = We, We |= 4;
        try {
          N1(e, t, r);
        } finally {
          We = g, F.p = c, Y.T = i;
        }
      }
      Ot = 1, fg(), dg(), mg();
    }
  }
  function fg() {
    if (Ot === 1) {
      Ot = 0;
      var e = Wa, t = Eo, r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        r = Y.T, Y.T = null;
        var i = F.p;
        F.p = 2;
        var c = We;
        We |= 4;
        try {
          Vp(t, e);
          var u = hf, g = Km(e.containerInfo), w = u.focusedElem, A = u.selectionRange;
          if (g !== w && w && w.ownerDocument && Im(
            w.ownerDocument.documentElement,
            w
          )) {
            if (A !== null && Bc(w)) {
              var q = A.start, X = A.end;
              if (X === void 0 && (X = q), "selectionStart" in w)
                w.selectionStart = q, w.selectionEnd = Math.min(
                  X,
                  w.value.length
                );
              else {
                var I = w.ownerDocument || document, P = I && I.defaultView || window;
                if (P.getSelection) {
                  var G = P.getSelection(), fe = w.textContent.length, we = Math.min(A.start, fe), et = A.end === void 0 ? we : Math.min(A.end, fe);
                  !G.extend && we > et && (g = et, et = we, we = g);
                  var B = Zm(
                    w,
                    we
                  ), j = Zm(
                    w,
                    et
                  );
                  if (B && j && (G.rangeCount !== 1 || G.anchorNode !== B.node || G.anchorOffset !== B.offset || G.focusNode !== j.node || G.focusOffset !== j.offset)) {
                    var L = I.createRange();
                    L.setStart(B.node, B.offset), G.removeAllRanges(), we > et ? (G.addRange(L), G.extend(j.node, j.offset)) : (L.setEnd(j.node, j.offset), G.addRange(L));
                  }
                }
              }
            }
            for (I = [], G = w; G = G.parentNode; )
              G.nodeType === 1 && I.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < I.length; w++) {
              var Z = I[w];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          ds = !!mf, hf = mf = null;
        } finally {
          We = c, F.p = i, Y.T = r;
        }
      }
      e.current = t, Ot = 2;
    }
  }
  function dg() {
    if (Ot === 2) {
      Ot = 0;
      var e = Wa, t = Eo, r = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        r = Y.T, Y.T = null;
        var i = F.p;
        F.p = 2;
        var c = We;
        We |= 4;
        try {
          Lp(e, t.alternate, t);
        } finally {
          We = c, F.p = i, Y.T = r;
        }
      }
      Ot = 3;
    }
  }
  function mg() {
    if (Ot === 4 || Ot === 3) {
      Ot = 0, ti();
      var e = Wa, t = Eo, r = ma, i = Jp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ot = 5 : (Ot = 0, Eo = Wa = null, hg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Ga = null), bc(r), t = t.stateNode, qt && typeof qt.onCommitFiberRoot == "function")
        try {
          qt.onCommitFiberRoot(
            ur,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = Y.T, c = F.p, F.p = 2, Y.T = null;
        try {
          for (var u = e.onRecoverableError, g = 0; g < i.length; g++) {
            var w = i[g];
            u(w.value, {
              componentStack: w.stack
            });
          }
        } finally {
          Y.T = t, F.p = c;
        }
      }
      (ma & 3) !== 0 && es(), jn(e), c = e.pendingLanes, (r & 261930) !== 0 && (c & 42) !== 0 ? e === Ju ? Nl++ : (Nl = 0, Ju = e) : Nl = 0, Rl(0);
    }
  }
  function hg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, dl(t)));
  }
  function es() {
    return fg(), dg(), mg(), pg();
  }
  function pg() {
    if (Ot !== 5) return !1;
    var e = Wa, t = Ku;
    Ku = 0;
    var r = bc(ma), i = Y.T, c = F.p;
    try {
      F.p = 32 > r ? 32 : r, Y.T = null, r = $u, $u = null;
      var u = Wa, g = ma;
      if (Ot = 0, Eo = Wa = null, ma = 0, (We & 6) !== 0) throw Error(o(331));
      var w = We;
      if (We |= 4, Ip(u.current), Qp(
        u,
        u.current,
        g,
        r
      ), We = w, Rl(0, !1), qt && typeof qt.onPostCommitFiberRoot == "function")
        try {
          qt.onPostCommitFiberRoot(ur, u);
        } catch {
        }
      return !0;
    } finally {
      F.p = c, Y.T = i, hg(e, t);
    }
  }
  function gg(e, t, r) {
    t = mn(r, t), t = Nu(e.stateNode, t, 2), e = Ha(e, t, 2), e !== null && (In(e, 2), jn(e));
  }
  function Ze(e, t, r) {
    if (e.tag === 3)
      gg(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gg(
            t,
            e,
            r
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ga === null || !Ga.has(i))) {
            e = mn(r, e), r = yp(2), i = Ha(t, r, 2), i !== null && (vp(
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
  function nf(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new z1();
      var c = /* @__PURE__ */ new Set();
      i.set(t, c);
    } else
      c = i.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), i.set(t, c));
    c.has(r) || (Fu = !0, c.add(r), e = U1.bind(null, e, t, r), t.then(e, e));
  }
  function U1(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, tt === e && (ke & r) === r && (ut === 4 || ut === 3 && (ke & 62914560) === ke && 300 > Nt() - Fi ? (We & 2) === 0 && Oo(e, 0) : Zu |= r, Co === ke && (Co = 0)), jn(e);
  }
  function yg(e, t) {
    t === 0 && (t = li()), e = yr(e, t), e !== null && (In(e, t), jn(e));
  }
  function L1(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), yg(e, r);
  }
  function q1(e, t) {
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
    i !== null && i.delete(t), yg(e, r);
  }
  function P1(e, t) {
    return Io(e, t);
  }
  var ts = null, Mo = null, af = !1, ns = !1, rf = !1, Xa = 0;
  function jn(e) {
    e !== Mo && e.next === null && (Mo === null ? ts = Mo = e : Mo = Mo.next = e), ns = !0, af || (af = !0, W1());
  }
  function Rl(e, t) {
    if (!rf && ns) {
      rf = !0;
      do
        for (var r = !1, i = ts; i !== null; ) {
          if (e !== 0) {
            var c = i.pendingLanes;
            if (c === 0) var u = 0;
            else {
              var g = i.suspendedLanes, w = i.pingedLanes;
              u = (1 << 31 - Pt(42 | e) + 1) - 1, u &= c & ~(g & ~w), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (r = !0, Sg(i, u));
          } else
            u = ke, u = De(
              i,
              i === tt ? u : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (u & 3) === 0 || fr(i, u) || (r = !0, Sg(i, u));
          i = i.next;
        }
      while (r);
      rf = !1;
    }
  }
  function G1() {
    vg();
  }
  function vg() {
    ns = af = !1;
    var e = 0;
    Xa !== 0 && eS() && (e = Xa);
    for (var t = Nt(), r = null, i = ts; i !== null; ) {
      var c = i.next, u = bg(i, t);
      u === 0 ? (i.next = null, r === null ? ts = c : r.next = c, c === null && (Mo = r)) : (r = i, (e !== 0 || (u & 3) !== 0) && (ns = !0)), i = c;
    }
    Ot !== 0 && Ot !== 5 || Rl(e), Xa !== 0 && (Xa = 0);
  }
  function bg(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, c = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var g = 31 - Pt(u), w = 1 << g, A = c[g];
      A === -1 ? ((w & r) === 0 || (w & i) !== 0) && (c[g] = yc(w, t)) : A <= t && (e.expiredLanes |= w), u &= ~w;
    }
    if (t = tt, r = ke, r = De(
      e,
      e === t ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, r === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Ko(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || fr(e, r)) {
      if (t = r & -r, t === e.callbackPriority) return t;
      switch (i !== null && Ko(i), bc(r)) {
        case 2:
        case 8:
          r = ai;
          break;
        case 32:
          r = Xr;
          break;
        case 268435456:
          r = ri;
          break;
        default:
          r = Xr;
      }
      return i = wg.bind(null, e), r = Io(r, i), e.callbackPriority = t, e.callbackNode = r, t;
    }
    return i !== null && i !== null && Ko(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function wg(e, t) {
    if (Ot !== 0 && Ot !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (es() && e.callbackNode !== r)
      return null;
    var i = ke;
    return i = De(
      e,
      e === tt ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (tg(e, i, t), bg(e, Nt()), e.callbackNode != null && e.callbackNode === r ? wg.bind(null, e) : null);
  }
  function Sg(e, t) {
    if (es()) return null;
    tg(e, t, !0);
  }
  function W1() {
    nS(function() {
      (We & 6) !== 0 ? Io(
        ni,
        G1
      ) : vg();
    });
  }
  function of() {
    if (Xa === 0) {
      var e = fo;
      e === 0 && (e = Ye, Ye <<= 1, (Ye & 261888) === 0 && (Ye = 256)), Xa = e;
    }
    return Xa;
  }
  function xg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ui("" + e);
  }
  function Cg(e, t) {
    var r = t.ownerDocument.createElement("input");
    return r.name = t.name, r.value = t.value, e.id && r.setAttribute("form", e.id), t.parentNode.insertBefore(r, t), e = new FormData(e), r.parentNode.removeChild(r), e;
  }
  function V1(e, t, r, i, c) {
    if (t === "submit" && r && r.stateNode === c) {
      var u = xg(
        (c[Vt] || null).action
      ), g = i.submitter;
      g && (t = (t = g[Vt] || null) ? xg(t.formAction) : g.getAttribute("formAction"), t !== null && (u = t, g = null));
      var w = new hi(
        "action",
        "action",
        null,
        i,
        c
      );
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (Xa !== 0) {
                  var A = g ? Cg(c, g) : new FormData(c);
                  Ou(
                    r,
                    {
                      pending: !0,
                      data: A,
                      method: c.method,
                      action: u
                    },
                    null,
                    A
                  );
                }
              } else
                typeof u == "function" && (w.preventDefault(), A = g ? Cg(c, g) : new FormData(c), Ou(
                  r,
                  {
                    pending: !0,
                    data: A,
                    method: c.method,
                    action: u
                  },
                  u,
                  A
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var lf = 0; lf < Pc.length; lf++) {
    var sf = Pc[lf], X1 = sf.toLowerCase(), Q1 = sf[0].toUpperCase() + sf.slice(1);
    xn(
      X1,
      "on" + Q1
    );
  }
  xn(eh, "onAnimationEnd"), xn(th, "onAnimationIteration"), xn(nh, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(c1, "onTransitionRun"), xn(u1, "onTransitionStart"), xn(f1, "onTransitionCancel"), xn(ah, "onTransitionEnd"), Kr("onMouseEnter", ["mouseout", "mouseover"]), Kr("onMouseLeave", ["mouseout", "mouseover"]), Kr("onPointerEnter", ["pointerout", "pointerover"]), Kr("onPointerLeave", ["pointerout", "pointerover"]), mr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), mr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), mr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), mr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), mr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var kl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), F1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl)
  );
  function Eg(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], c = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var w = i[g], A = w.instance, q = w.currentTarget;
            if (w = w.listener, A !== u && c.isPropagationStopped())
              break e;
            u = w, c.currentTarget = q;
            try {
              u(c);
            } catch (X) {
              yi(X);
            }
            c.currentTarget = null, u = A;
          }
        else
          for (g = 0; g < i.length; g++) {
            if (w = i[g], A = w.instance, q = w.currentTarget, w = w.listener, A !== u && c.isPropagationStopped())
              break e;
            u = w, c.currentTarget = q;
            try {
              u(c);
            } catch (X) {
              yi(X);
            }
            c.currentTarget = null, u = A;
          }
      }
    }
  }
  function Ne(e, t) {
    var r = t[wc];
    r === void 0 && (r = t[wc] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (Og(t, e, 2, !1), r.add(i));
  }
  function cf(e, t, r) {
    var i = 0;
    t && (i |= 4), Og(
      r,
      e,
      i,
      t
    );
  }
  var as = "_reactListening" + Math.random().toString(36).slice(2);
  function uf(e) {
    if (!e[as]) {
      e[as] = !0, vm.forEach(function(r) {
        r !== "selectionchange" && (F1.has(r) || cf(r, !1, e), cf(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[as] || (t[as] = !0, cf("selectionchange", !1, t));
    }
  }
  function Og(e, t, r, i) {
    switch (ey(t)) {
      case 2:
        var c = xS;
        break;
      case 8:
        c = CS;
        break;
      default:
        c = Of;
    }
    r = c.bind(
      null,
      t,
      r,
      e
    ), c = void 0, !_c || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), i ? c !== void 0 ? e.addEventListener(t, r, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, r, !0) : c !== void 0 ? e.addEventListener(t, r, {
      passive: c
    }) : e.addEventListener(t, r, !1);
  }
  function ff(e, t, r, i, c) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var w = i.stateNode.containerInfo;
          if (w === c) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var A = g.tag;
              if ((A === 3 || A === 4) && g.stateNode.containerInfo === c)
                return;
              g = g.return;
            }
          for (; w !== null; ) {
            if (g = Fr(w), g === null) return;
            if (A = g.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              i = u = g;
              continue e;
            }
            w = w.parentNode;
          }
        }
        i = i.return;
      }
    Am(function() {
      var q = u, X = Mc(r), I = [];
      e: {
        var P = rh.get(e);
        if (P !== void 0) {
          var G = hi, fe = e;
          switch (e) {
            case "keypress":
              if (di(r) === 0) break e;
            case "keydown":
            case "keyup":
              G = qw;
              break;
            case "focusin":
              fe = "focus", G = kc;
              break;
            case "focusout":
              fe = "blur", G = kc;
              break;
            case "beforeblur":
            case "afterblur":
              G = kc;
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
              G = km;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = _w;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Ww;
              break;
            case eh:
            case th:
            case nh:
              G = Rw;
              break;
            case ah:
              G = Xw;
              break;
            case "scroll":
            case "scrollend":
              G = Mw;
              break;
            case "wheel":
              G = Fw;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = zw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = jm;
              break;
            case "toggle":
            case "beforetoggle":
              G = Iw;
          }
          var we = (t & 4) !== 0, et = !we && (e === "scroll" || e === "scrollend"), B = we ? P !== null ? P + "Capture" : null : P;
          we = [];
          for (var j = q, L; j !== null; ) {
            var Z = j;
            if (L = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || L === null || B === null || (Z = tl(j, B), Z != null && we.push(
              zl(j, Z, L)
            )), et) break;
            j = j.return;
          }
          0 < we.length && (P = new G(
            P,
            fe,
            null,
            r,
            X
          ), I.push({ event: P, listeners: we }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (P = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", P && r !== Tc && (fe = r.relatedTarget || r.fromElement) && (Fr(fe) || fe[Qr]))
            break e;
          if ((G || P) && (P = X.window === X ? X : (P = X.ownerDocument) ? P.defaultView || P.parentWindow : window, G ? (fe = r.relatedTarget || r.toElement, G = q, fe = fe ? Fr(fe) : null, fe !== null && (et = f(fe), we = fe.tag, fe !== et || we !== 5 && we !== 27 && we !== 6) && (fe = null)) : (G = null, fe = q), G !== fe)) {
            if (we = km, Z = "onMouseLeave", B = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (we = jm, Z = "onPointerLeave", B = "onPointerEnter", j = "pointer"), et = G == null ? P : el(G), L = fe == null ? P : el(fe), P = new we(
              Z,
              j + "leave",
              G,
              r,
              X
            ), P.target = et, P.relatedTarget = L, Z = null, Fr(X) === q && (we = new we(
              B,
              j + "enter",
              fe,
              r,
              X
            ), we.target = L, we.relatedTarget = et, Z = we), et = Z, G && fe)
              t: {
                for (we = Z1, B = G, j = fe, L = 0, Z = B; Z; Z = we(Z))
                  L++;
                Z = 0;
                for (var ge = j; ge; ge = we(ge))
                  Z++;
                for (; 0 < L - Z; )
                  B = we(B), L--;
                for (; 0 < Z - L; )
                  j = we(j), Z--;
                for (; L--; ) {
                  if (B === j || j !== null && B === j.alternate) {
                    we = B;
                    break t;
                  }
                  B = we(B), j = we(j);
                }
                we = null;
              }
            else we = null;
            G !== null && Tg(
              I,
              P,
              G,
              we,
              !1
            ), fe !== null && et !== null && Tg(
              I,
              et,
              fe,
              we,
              !0
            );
          }
        }
        e: {
          if (P = q ? el(q) : window, G = P.nodeName && P.nodeName.toLowerCase(), G === "select" || G === "input" && P.type === "file")
            var qe = Gm;
          else if (qm(P))
            if (Wm)
              qe = l1;
            else {
              qe = r1;
              var de = a1;
            }
          else
            G = P.nodeName, !G || G.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? q && Oc(q.elementType) && (qe = Gm) : qe = o1;
          if (qe && (qe = qe(e, q))) {
            Pm(
              I,
              qe,
              r,
              X
            );
            break e;
          }
          de && de(e, P, q), e === "focusout" && q && P.type === "number" && q.memoizedProps.value != null && Ec(P, "number", P.value);
        }
        switch (de = q ? el(q) : window, e) {
          case "focusin":
            (qm(de) || de.contentEditable === "true") && (ao = de, Uc = q, cl = null);
            break;
          case "focusout":
            cl = Uc = ao = null;
            break;
          case "mousedown":
            Lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Lc = !1, $m(I, r, X);
            break;
          case "selectionchange":
            if (s1) break;
          case "keydown":
          case "keyup":
            $m(I, r, X);
        }
        var Me;
        if (jc)
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
          no ? Um(e, r) && (ze = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (ze = "onCompositionStart");
        ze && (Ym && r.locale !== "ko" && (no || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && no && (Me = Nm()) : (Aa = X, Ac = "value" in Aa ? Aa.value : Aa.textContent, no = !0)), de = rs(q, ze), 0 < de.length && (ze = new zm(
          ze,
          e,
          null,
          r,
          X
        ), I.push({ event: ze, listeners: de }), Me ? ze.data = Me : (Me = Lm(r), Me !== null && (ze.data = Me)))), (Me = $w ? Jw(e, r) : e1(e, r)) && (ze = rs(q, "onBeforeInput"), 0 < ze.length && (de = new zm(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          X
        ), I.push({
          event: de,
          listeners: ze
        }), de.data = Me)), V1(
          I,
          e,
          q,
          r,
          X
        );
      }
      Eg(I, t);
    });
  }
  function zl(e, t, r) {
    return {
      instance: e,
      listener: t,
      currentTarget: r
    };
  }
  function rs(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var c = e, u = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || u === null || (c = tl(e, r), c != null && i.unshift(
        zl(e, c, u)
      ), c = tl(e, t), c != null && i.push(
        zl(e, c, u)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function Z1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Tg(e, t, r, i, c) {
    for (var u = t._reactName, g = []; r !== null && r !== i; ) {
      var w = r, A = w.alternate, q = w.stateNode;
      if (w = w.tag, A !== null && A === i) break;
      w !== 5 && w !== 26 && w !== 27 || q === null || (A = q, c ? (q = tl(r, u), q != null && g.unshift(
        zl(r, q, A)
      )) : c || (q = tl(r, u), q != null && g.push(
        zl(r, q, A)
      ))), r = r.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var I1 = /\r\n?/g, K1 = /\u0000|\uFFFD/g;
  function Mg(e) {
    return (typeof e == "string" ? e : "" + e).replace(I1, `
`).replace(K1, "");
  }
  function Dg(e, t) {
    return t = Mg(t), Mg(e) === t;
  }
  function Je(e, t, r, i, c, u) {
    switch (r) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || Jr(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && Jr(e, "" + i);
        break;
      case "className":
        si(e, "class", i);
        break;
      case "tabIndex":
        si(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        si(e, r, i);
        break;
      case "style":
        Dm(e, i, u);
        break;
      case "data":
        if (t !== "object") {
          si(e, "data", i);
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
        i = ui("" + i), e.setAttribute(r, i);
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
          typeof u == "function" && (r === "formAction" ? (t !== "input" && Je(e, t, "name", c.name, c, null), Je(
            e,
            t,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Je(
            e,
            t,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Je(
            e,
            t,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Je(e, t, "encType", c.encType, c, null), Je(e, t, "method", c.method, c, null), Je(e, t, "target", c.target, c, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(r);
          break;
        }
        i = ui("" + i), e.setAttribute(r, i);
        break;
      case "onClick":
        i != null && (e.onclick = $n);
        break;
      case "onScroll":
        i != null && Ne("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ne("scrollend", e);
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
        r = ui("" + i), e.setAttributeNS(
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
        Ne("beforetoggle", e), Ne("toggle", e), ii(e, "popover", i);
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
        ii(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Ow.get(r) || r, ii(e, r, i));
    }
  }
  function df(e, t, r, i, c, u) {
    switch (r) {
      case "style":
        Dm(e, i, u);
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
        typeof i == "string" ? Jr(e, i) : (typeof i == "number" || typeof i == "bigint") && Jr(e, "" + i);
        break;
      case "onScroll":
        i != null && Ne("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ne("scrollend", e);
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
        if (!bm.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (c = r.endsWith("Capture"), t = r.slice(2, c ? r.length - 7 : void 0), u = e[Vt] || null, u = u != null ? u[r] : null, typeof u == "function" && e.removeEventListener(t, u, c), typeof i == "function")) {
              typeof u != "function" && u !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(t, i, c);
              break e;
            }
            r in e ? e[r] = i : i === !0 ? e.setAttribute(r, "") : ii(e, r, i);
          }
    }
  }
  function Yt(e, t, r) {
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
        Ne("error", e), Ne("load", e);
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
                  Je(e, t, u, g, r, null);
              }
          }
        c && Je(e, t, "srcSet", r.srcSet, r, null), i && Je(e, t, "src", r.src, r, null);
        return;
      case "input":
        Ne("invalid", e);
        var w = u = g = c = null, A = null, q = null;
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
                  A = X;
                  break;
                case "defaultChecked":
                  q = X;
                  break;
                case "value":
                  u = X;
                  break;
                case "defaultValue":
                  w = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Je(e, t, i, X, r, null);
              }
          }
        Em(
          e,
          u,
          w,
          A,
          q,
          g,
          c,
          !1
        );
        return;
      case "select":
        Ne("invalid", e), i = g = u = null;
        for (c in r)
          if (r.hasOwnProperty(c) && (w = r[c], w != null))
            switch (c) {
              case "value":
                u = w;
                break;
              case "defaultValue":
                g = w;
                break;
              case "multiple":
                i = w;
              default:
                Je(e, t, c, w, r, null);
            }
        t = u, r = g, e.multiple = !!i, t != null ? $r(e, !!i, t, !1) : r != null && $r(e, !!i, r, !0);
        return;
      case "textarea":
        Ne("invalid", e), u = c = i = null;
        for (g in r)
          if (r.hasOwnProperty(g) && (w = r[g], w != null))
            switch (g) {
              case "value":
                i = w;
                break;
              case "defaultValue":
                c = w;
                break;
              case "children":
                u = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(o(91));
                break;
              default:
                Je(e, t, g, w, r, null);
            }
        Tm(e, i, c, u);
        return;
      case "option":
        for (A in r)
          r.hasOwnProperty(A) && (i = r[A], i != null) && (A === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : Je(e, t, A, i, r, null));
        return;
      case "dialog":
        Ne("beforetoggle", e), Ne("toggle", e), Ne("cancel", e), Ne("close", e);
        break;
      case "iframe":
      case "object":
        Ne("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < kl.length; i++)
          Ne(kl[i], e);
        break;
      case "image":
        Ne("error", e), Ne("load", e);
        break;
      case "details":
        Ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ne("error", e), Ne("load", e);
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
                Je(e, t, q, i, r, null);
            }
        return;
      default:
        if (Oc(t)) {
          for (X in r)
            r.hasOwnProperty(X) && (i = r[X], i !== void 0 && df(
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
    for (w in r)
      r.hasOwnProperty(w) && (i = r[w], i != null && Je(e, t, w, i, r, null));
  }
  function $1(e, t, r, i) {
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
        var c = null, u = null, g = null, w = null, A = null, q = null, X = null;
        for (G in r) {
          var I = r[G];
          if (r.hasOwnProperty(G) && I != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = I;
              default:
                i.hasOwnProperty(G) || Je(e, t, G, null, i, I);
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
                w = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(o(137, t));
                break;
              default:
                G !== I && Je(
                  e,
                  t,
                  P,
                  G,
                  i,
                  I
                );
            }
        }
        Cc(
          e,
          g,
          w,
          A,
          q,
          X,
          u,
          c
        );
        return;
      case "select":
        G = g = w = P = null;
        for (u in r)
          if (A = r[u], r.hasOwnProperty(u) && A != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                G = A;
              default:
                i.hasOwnProperty(u) || Je(
                  e,
                  t,
                  u,
                  null,
                  i,
                  A
                );
            }
        for (c in i)
          if (u = i[c], A = r[c], i.hasOwnProperty(c) && (u != null || A != null))
            switch (c) {
              case "value":
                P = u;
                break;
              case "defaultValue":
                w = u;
                break;
              case "multiple":
                g = u;
              default:
                u !== A && Je(
                  e,
                  t,
                  c,
                  u,
                  i,
                  A
                );
            }
        t = w, r = g, i = G, P != null ? $r(e, !!r, P, !1) : !!i != !!r && (t != null ? $r(e, !!r, t, !0) : $r(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        G = P = null;
        for (w in r)
          if (c = r[w], r.hasOwnProperty(w) && c != null && !i.hasOwnProperty(w))
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                Je(e, t, w, null, i, c);
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
                c !== u && Je(e, t, g, c, i, u);
            }
        Om(e, P, G);
        return;
      case "option":
        for (var fe in r)
          P = r[fe], r.hasOwnProperty(fe) && P != null && !i.hasOwnProperty(fe) && (fe === "selected" ? e.selected = !1 : Je(
            e,
            t,
            fe,
            null,
            i,
            P
          ));
        for (A in i)
          P = i[A], G = r[A], i.hasOwnProperty(A) && P !== G && (P != null || G != null) && (A === "selected" ? e.selected = P && typeof P != "function" && typeof P != "symbol" : Je(
            e,
            t,
            A,
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
        for (var we in r)
          P = r[we], r.hasOwnProperty(we) && P != null && !i.hasOwnProperty(we) && Je(e, t, we, null, i, P);
        for (q in i)
          if (P = i[q], G = r[q], i.hasOwnProperty(q) && P !== G && (P != null || G != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null)
                  throw Error(o(137, t));
                break;
              default:
                Je(
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
        if (Oc(t)) {
          for (var et in r)
            P = r[et], r.hasOwnProperty(et) && P !== void 0 && !i.hasOwnProperty(et) && df(
              e,
              t,
              et,
              void 0,
              i,
              P
            );
          for (X in i)
            P = i[X], G = r[X], !i.hasOwnProperty(X) || P === G || P === void 0 && G === void 0 || df(
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
      P = r[B], r.hasOwnProperty(B) && P != null && !i.hasOwnProperty(B) && Je(e, t, B, null, i, P);
    for (I in i)
      P = i[I], G = r[I], !i.hasOwnProperty(I) || P === G || P == null && G == null || Je(e, t, I, P, i, G);
  }
  function _g(e) {
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
  function J1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, r = performance.getEntriesByType("resource"), i = 0; i < r.length; i++) {
        var c = r[i], u = c.transferSize, g = c.initiatorType, w = c.duration;
        if (u && w && _g(g)) {
          for (g = 0, w = c.responseEnd, i += 1; i < r.length; i++) {
            var A = r[i], q = A.startTime;
            if (q > w) break;
            var X = A.transferSize, I = A.initiatorType;
            X && _g(I) && (A = A.responseEnd, g += X * (A < w ? 1 : (w - q) / (A - q)));
          }
          if (--i, t += 8 * (u + g) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var mf = null, hf = null;
  function os(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ag(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ng(e, t) {
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
  function pf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var gf = null;
  function eS() {
    var e = window.event;
    return e && e.type === "popstate" ? e === gf ? !1 : (gf = e, !0) : (gf = null, !1);
  }
  var Rg = typeof setTimeout == "function" ? setTimeout : void 0, tS = typeof clearTimeout == "function" ? clearTimeout : void 0, kg = typeof Promise == "function" ? Promise : void 0, nS = typeof queueMicrotask == "function" ? queueMicrotask : typeof kg < "u" ? function(e) {
    return kg.resolve(null).then(e).catch(aS);
  } : Rg;
  function aS(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qa(e) {
    return e === "head";
  }
  function zg(e, t) {
    var r = t, i = 0;
    do {
      var c = r.nextSibling;
      if (e.removeChild(r), c && c.nodeType === 8)
        if (r = c.data, r === "/$" || r === "/&") {
          if (i === 0) {
            e.removeChild(c), No(t);
            return;
          }
          i--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          i++;
        else if (r === "html")
          jl(e.ownerDocument.documentElement);
        else if (r === "head") {
          r = e.ownerDocument.head, jl(r);
          for (var u = r.firstChild; u; ) {
            var g = u.nextSibling, w = u.nodeName;
            u[Jo] || w === "SCRIPT" || w === "STYLE" || w === "LINK" && u.rel.toLowerCase() === "stylesheet" || r.removeChild(u), u = g;
          }
        } else
          r === "body" && jl(e.ownerDocument.body);
      r = c;
    } while (r);
    No(t);
  }
  function jg(e, t) {
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
  function yf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (t = t.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yf(r), Sc(r);
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
  function rS(e, t, r, i) {
    for (; e.nodeType === 1; ) {
      var c = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[Jo])
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
      if (e = vn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function oS(e, t, r) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Yg(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function vf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function bf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function lS(e, t) {
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
  function vn(e) {
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
  var wf = null;
  function Hg(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (t === 0)
            return vn(e.nextSibling);
          t--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Bg(e) {
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
  function Ug(e, t, r) {
    switch (t = os(r), e) {
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
  function jl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Sc(e);
  }
  var bn = /* @__PURE__ */ new Map(), Lg = /* @__PURE__ */ new Set();
  function ls(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ha = F.d;
  F.d = {
    f: iS,
    r: sS,
    D: cS,
    C: uS,
    L: fS,
    m: dS,
    X: hS,
    S: mS,
    M: pS
  };
  function iS() {
    var e = ha.f(), t = Ki();
    return e || t;
  }
  function sS(e) {
    var t = Zr(e);
    t !== null && t.tag === 5 && t.type === "form" ? ap(t) : ha.r(e);
  }
  var Do = typeof document > "u" ? null : document;
  function qg(e, t, r) {
    var i = Do;
    if (i && typeof t == "string" && t) {
      var c = fn(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof r == "string" && (c += '[crossorigin="' + r + '"]'), Lg.has(c) || (Lg.add(c), e = { rel: e, crossOrigin: r, href: t }, i.querySelector(c) === null && (t = i.createElement("link"), Yt(t, "link", e), Dt(t), i.head.appendChild(t)));
    }
  }
  function cS(e) {
    ha.D(e), qg("dns-prefetch", e, null);
  }
  function uS(e, t) {
    ha.C(e, t), qg("preconnect", e, t);
  }
  function fS(e, t, r) {
    ha.L(e, t, r);
    var i = Do;
    if (i && e && t) {
      var c = 'link[rel="preload"][as="' + fn(t) + '"]';
      t === "image" && r && r.imageSrcSet ? (c += '[imagesrcset="' + fn(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (c += '[imagesizes="' + fn(
        r.imageSizes
      ) + '"]')) : c += '[href="' + fn(e) + '"]';
      var u = c;
      switch (t) {
        case "style":
          u = _o(e);
          break;
        case "script":
          u = Ao(e);
      }
      bn.has(u) || (e = y(
        {
          rel: "preload",
          href: t === "image" && r && r.imageSrcSet ? void 0 : e,
          as: t
        },
        r
      ), bn.set(u, e), i.querySelector(c) !== null || t === "style" && i.querySelector(Yl(u)) || t === "script" && i.querySelector(Hl(u)) || (t = i.createElement("link"), Yt(t, "link", e), Dt(t), i.head.appendChild(t)));
    }
  }
  function dS(e, t) {
    ha.m(e, t);
    var r = Do;
    if (r && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + fn(i) + '"][href="' + fn(e) + '"]', u = c;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ao(e);
      }
      if (!bn.has(u) && (e = y({ rel: "modulepreload", href: e }, t), bn.set(u, e), r.querySelector(c) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Hl(u)))
              return;
        }
        i = r.createElement("link"), Yt(i, "link", e), Dt(i), r.head.appendChild(i);
      }
    }
  }
  function mS(e, t, r) {
    ha.S(e, t, r);
    var i = Do;
    if (i && e) {
      var c = Ir(i).hoistableStyles, u = _o(e);
      t = t || "default";
      var g = c.get(u);
      if (!g) {
        var w = { loading: 0, preload: null };
        if (g = i.querySelector(
          Yl(u)
        ))
          w.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            r
          ), (r = bn.get(u)) && Sf(e, r);
          var A = g = i.createElement("link");
          Dt(A), Yt(A, "link", e), A._p = new Promise(function(q, X) {
            A.onload = q, A.onerror = X;
          }), A.addEventListener("load", function() {
            w.loading |= 1;
          }), A.addEventListener("error", function() {
            w.loading |= 2;
          }), w.loading |= 4, is(g, t, i);
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: w
        }, c.set(u, g);
      }
    }
  }
  function hS(e, t) {
    ha.X(e, t);
    var r = Do;
    if (r && e) {
      var i = Ir(r).hoistableScripts, c = Ao(e), u = i.get(c);
      u || (u = r.querySelector(Hl(c)), u || (e = y({ src: e, async: !0 }, t), (t = bn.get(c)) && xf(e, t), u = r.createElement("script"), Dt(u), Yt(u, "link", e), r.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(c, u));
    }
  }
  function pS(e, t) {
    ha.M(e, t);
    var r = Do;
    if (r && e) {
      var i = Ir(r).hoistableScripts, c = Ao(e), u = i.get(c);
      u || (u = r.querySelector(Hl(c)), u || (e = y({ src: e, async: !0, type: "module" }, t), (t = bn.get(c)) && xf(e, t), u = r.createElement("script"), Dt(u), Yt(u, "link", e), r.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(c, u));
    }
  }
  function Pg(e, t, r, i) {
    var c = (c = oe.current) ? ls(c) : null;
    if (!c) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (t = _o(r.href), r = Ir(
          c
        ).hoistableStyles, i = r.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = _o(r.href);
          var u = Ir(
            c
          ).hoistableStyles, g = u.get(e);
          if (g || (c = c.ownerDocument || c, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, g), (u = c.querySelector(
            Yl(e)
          )) && !u._p && (g.instance = u, g.state.loading = 5), bn.has(e) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, bn.set(e, r), u || gS(
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
        return t = r.async, r = r.src, typeof r == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ao(r), r = Ir(
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
  function _o(e) {
    return 'href="' + fn(e) + '"';
  }
  function Yl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Gg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function gS(e, t, r, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), Yt(t, "link", r), Dt(t), e.head.appendChild(t));
  }
  function Ao(e) {
    return '[src="' + fn(e) + '"]';
  }
  function Hl(e) {
    return "script[async]" + e;
  }
  function Wg(e, t, r) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + fn(r.href) + '"]'
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
          ), Dt(i), Yt(i, "style", c), is(i, r.precedence, e), t.instance = i;
        case "stylesheet":
          c = _o(r.href);
          var u = e.querySelector(
            Yl(c)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Dt(u), u;
          i = Gg(r), (c = bn.get(c)) && Sf(i, c), u = (e.ownerDocument || e).createElement("link"), Dt(u);
          var g = u;
          return g._p = new Promise(function(w, A) {
            g.onload = w, g.onerror = A;
          }), Yt(u, "link", i), t.state.loading |= 4, is(u, r.precedence, e), t.instance = u;
        case "script":
          return u = Ao(r.src), (c = e.querySelector(
            Hl(u)
          )) ? (t.instance = c, Dt(c), c) : (i = r, (c = bn.get(u)) && (i = y({}, r), xf(i, c)), e = e.ownerDocument || e, c = e.createElement("script"), Dt(c), Yt(c, "link", i), e.head.appendChild(c), t.instance = c);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, is(i, r.precedence, e));
    return t.instance;
  }
  function is(e, t, r) {
    for (var i = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = i.length ? i[i.length - 1] : null, u = c, g = 0; g < i.length; g++) {
      var w = i[g];
      if (w.dataset.precedence === t) u = w;
      else if (u !== c) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = r.nodeType === 9 ? r.head : r, t.insertBefore(e, t.firstChild));
  }
  function Sf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function xf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ss = null;
  function Vg(e, t, r) {
    if (ss === null) {
      var i = /* @__PURE__ */ new Map(), c = ss = /* @__PURE__ */ new Map();
      c.set(r, i);
    } else
      c = ss, i = c.get(r), i || (i = /* @__PURE__ */ new Map(), c.set(r, i));
    if (i.has(e)) return i;
    for (i.set(e, null), r = r.getElementsByTagName(e), c = 0; c < r.length; c++) {
      var u = r[c];
      if (!(u[Jo] || u[Rt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = u.getAttribute(t) || "";
        g = e + g;
        var w = i.get(g);
        w ? w.push(u) : i.set(g, [u]);
      }
    }
    return i;
  }
  function Xg(e, t, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function yS(e, t, r) {
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
  function Qg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function vS(e, t, r, i) {
    if (r.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var c = _o(i.href), u = t.querySelector(
          Yl(c)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = cs.bind(e), t.then(e, e)), r.state.loading |= 4, r.instance = u, Dt(u);
          return;
        }
        u = t.ownerDocument || t, i = Gg(i), (c = bn.get(c)) && Sf(i, c), u = u.createElement("link"), Dt(u);
        var g = u;
        g._p = new Promise(function(w, A) {
          g.onload = w, g.onerror = A;
        }), Yt(u, "link", i), r.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, t), (t = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = cs.bind(e), t.addEventListener("load", r), t.addEventListener("error", r));
    }
  }
  var Cf = 0;
  function bS(e, t) {
    return e.stylesheets && e.count === 0 && fs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var i = setTimeout(function() {
        if (e.stylesheets && fs(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Cf === 0 && (Cf = 62500 * J1());
      var c = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && fs(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Cf ? 50 : 800) + t
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(i), clearTimeout(c);
      };
    } : null;
  }
  function cs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) fs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var us = null;
  function fs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, us = /* @__PURE__ */ new Map(), t.forEach(wS, e), us = null, cs.call(e));
  }
  function wS(e, t) {
    if (!(t.state.loading & 4)) {
      var r = us.get(e);
      if (r) var i = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), us.set(e, r);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < c.length; u++) {
          var g = c[u];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (r.set(g.dataset.precedence, g), i = g);
        }
        i && r.set(null, i);
      }
      c = t.instance, g = c.getAttribute("data-precedence"), u = r.get(g) || i, u === i && r.set(null, c), r.set(g, c), this.count++, i = cs.bind(this), c.addEventListener("load", i), c.addEventListener("error", i), u ? u.parentNode.insertBefore(c, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Bl = {
    $$typeof: _,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function SS(e, t, r, i, c, u, g, w, A) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = dr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dr(0), this.hiddenUpdates = dr(null), this.identifierPrefix = i, this.onUncaughtError = c, this.onCaughtError = u, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fg(e, t, r, i, c, u, g, w, A, q, X, I) {
    return e = new SS(
      e,
      t,
      r,
      g,
      A,
      q,
      X,
      I,
      w
    ), t = 1, u === !0 && (t |= 24), u = en(3, null, null, t), e.current = u, u.stateNode = e, t = tu(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: i,
      isDehydrated: r,
      cache: t
    }, ou(u), e;
  }
  function Zg(e) {
    return e ? (e = lo, e) : lo;
  }
  function Ig(e, t, r, i, c, u) {
    c = Zg(c), i.context === null ? i.context = c : i.pendingContext = c, i = Ya(t), i.payload = { element: r }, u = u === void 0 ? null : u, u !== null && (i.callback = u), r = Ha(e, i, t), r !== null && (Kt(r, e, t), gl(r, e, t));
  }
  function Kg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Ef(e, t) {
    Kg(e, t), (e = e.alternate) && Kg(e, t);
  }
  function $g(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = yr(e, 67108864);
      t !== null && Kt(t, e, 67108864), Ef(e, 67108864);
    }
  }
  function Jg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = on();
      t = vc(t);
      var r = yr(e, t);
      r !== null && Kt(r, e, t), Ef(e, t);
    }
  }
  var ds = !0;
  function xS(e, t, r, i) {
    var c = Y.T;
    Y.T = null;
    var u = F.p;
    try {
      F.p = 2, Of(e, t, r, i);
    } finally {
      F.p = u, Y.T = c;
    }
  }
  function CS(e, t, r, i) {
    var c = Y.T;
    Y.T = null;
    var u = F.p;
    try {
      F.p = 8, Of(e, t, r, i);
    } finally {
      F.p = u, Y.T = c;
    }
  }
  function Of(e, t, r, i) {
    if (ds) {
      var c = Tf(i);
      if (c === null)
        ff(
          e,
          t,
          i,
          ms,
          r
        ), ty(e, i);
      else if (OS(
        c,
        e,
        t,
        r,
        i
      ))
        i.stopPropagation();
      else if (ty(e, i), t & 4 && -1 < ES.indexOf(e)) {
        for (; c !== null; ) {
          var u = Zr(c);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var g = mt(u.pendingLanes);
                  if (g !== 0) {
                    var w = u;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; g; ) {
                      var A = 1 << 31 - Pt(g);
                      w.entanglements[1] |= A, g &= ~A;
                    }
                    jn(u), (We & 6) === 0 && (Zi = Nt() + 500, Rl(0));
                  }
                }
                break;
              case 31:
              case 13:
                w = yr(u, 2), w !== null && Kt(w, u, 2), Ki(), Ef(u, 2);
            }
          if (u = Tf(i), u === null && ff(
            e,
            t,
            i,
            ms,
            r
          ), u === c) break;
          c = u;
        }
        c !== null && i.stopPropagation();
      } else
        ff(
          e,
          t,
          i,
          null,
          r
        );
    }
  }
  function Tf(e) {
    return e = Mc(e), Mf(e);
  }
  var ms = null;
  function Mf(e) {
    if (ms = null, e = Fr(e), e !== null) {
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
    return ms = e, null;
  }
  function ey(e) {
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
        switch ($o()) {
          case ni:
            return 2;
          case ai:
            return 8;
          case Xr:
          case mc:
            return 32;
          case ri:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Df = !1, Fa = null, Za = null, Ia = null, Ul = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new Map(), Ka = [], ES = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ty(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Fa = null;
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
        Ul.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ll.delete(t.pointerId);
    }
  }
  function ql(e, t, r, i, c, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: r,
      eventSystemFlags: i,
      nativeEvent: u,
      targetContainers: [c]
    }, t !== null && (t = Zr(t), t !== null && $g(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function OS(e, t, r, i, c) {
    switch (t) {
      case "focusin":
        return Fa = ql(
          Fa,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "dragenter":
        return Za = ql(
          Za,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "mouseover":
        return Ia = ql(
          Ia,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "pointerover":
        var u = c.pointerId;
        return Ul.set(
          u,
          ql(
            Ul.get(u) || null,
            e,
            t,
            r,
            i,
            c
          )
        ), !0;
      case "gotpointercapture":
        return u = c.pointerId, Ll.set(
          u,
          ql(
            Ll.get(u) || null,
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
  function ny(e) {
    var t = Fr(e.target);
    if (t !== null) {
      var r = f(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = d(r), t !== null) {
            e.blockedOn = t, gm(e.priority, function() {
              Jg(r);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(r), t !== null) {
            e.blockedOn = t, gm(e.priority, function() {
              Jg(r);
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
  function hs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Tf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(
          r.type,
          r
        );
        Tc = i, r.target.dispatchEvent(i), Tc = null;
      } else
        return t = Zr(r), t !== null && $g(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function ay(e, t, r) {
    hs(e) && r.delete(t);
  }
  function TS() {
    Df = !1, Fa !== null && hs(Fa) && (Fa = null), Za !== null && hs(Za) && (Za = null), Ia !== null && hs(Ia) && (Ia = null), Ul.forEach(ay), Ll.forEach(ay);
  }
  function ps(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Df || (Df = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      TS
    )));
  }
  var gs = null;
  function ry(e) {
    gs !== e && (gs = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        gs === e && (gs = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t], i = e[t + 1], c = e[t + 2];
          if (typeof i != "function") {
            if (Mf(i || r) === null)
              continue;
            break;
          }
          var u = Zr(r);
          u !== null && (e.splice(t, 3), t -= 3, Ou(
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
  function No(e) {
    function t(A) {
      return ps(A, e);
    }
    Fa !== null && ps(Fa, e), Za !== null && ps(Za, e), Ia !== null && ps(Ia, e), Ul.forEach(t), Ll.forEach(t);
    for (var r = 0; r < Ka.length; r++) {
      var i = Ka[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Ka.length && (r = Ka[0], r.blockedOn === null); )
      ny(r), r.blockedOn === null && Ka.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (i = 0; i < r.length; i += 3) {
        var c = r[i], u = r[i + 1], g = c[Vt] || null;
        if (typeof u == "function")
          g || ry(r);
        else if (g) {
          var w = null;
          if (u && u.hasAttribute("formAction")) {
            if (c = u, g = u[Vt] || null)
              w = g.formAction;
            else if (Mf(c) !== null) continue;
          } else w = g.action;
          typeof w == "function" ? r[i + 1] = w : (r.splice(i, 3), i -= 3), ry(r);
        }
      }
  }
  function oy() {
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
  function _f(e) {
    this._internalRoot = e;
  }
  ys.prototype.render = _f.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var r = t.current, i = on();
    Ig(r, i, e, t, null, null);
  }, ys.prototype.unmount = _f.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ig(e.current, 2, null, e, null, null), Ki(), t[Qr] = null;
    }
  };
  function ys(e) {
    this._internalRoot = e;
  }
  ys.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = pm();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Ka.length && t !== 0 && t < Ka[r].priority; r++) ;
      Ka.splice(r, 0, e), r === 0 && ny(e);
    }
  };
  var ly = a.version;
  if (ly !== "19.2.3")
    throw Error(
      o(
        527,
        ly,
        "19.2.3"
      )
    );
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = p(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var MS = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vs.isDisabled && vs.supportsFiber)
      try {
        ur = vs.inject(
          MS
        ), qt = vs;
      } catch {
      }
  }
  return Gl.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var r = !1, i = "", c = mp, u = hp, g = pp;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError)), t = Fg(
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
      oy
    ), e[Qr] = t.current, uf(e), new _f(t);
  }, Gl.hydrateRoot = function(e, t, r) {
    if (!s(e)) throw Error(o(299));
    var i = !1, c = "", u = mp, g = hp, w = pp, A = null;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onUncaughtError !== void 0 && (u = r.onUncaughtError), r.onCaughtError !== void 0 && (g = r.onCaughtError), r.onRecoverableError !== void 0 && (w = r.onRecoverableError), r.formState !== void 0 && (A = r.formState)), t = Fg(
      e,
      1,
      !0,
      t,
      r ?? null,
      i,
      c,
      A,
      u,
      g,
      w,
      oy
    ), t.context = Zg(null), r = t.current, i = on(), i = vc(i), c = Ya(i), c.callback = null, Ha(r, c, i), r = i, t.current.lanes = r, In(t, r), jn(t), e[Qr] = t.current, uf(e), new ys(t);
  }, Gl.version = "19.2.3", Gl;
}
var by;
function BS() {
  if (by) return Rf.exports;
  by = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Rf.exports = HS(), Rf.exports;
}
var US = BS(), b = wd();
const se = /* @__PURE__ */ AS(b), Ur = /* @__PURE__ */ _S({
  __proto__: null,
  default: se
}, [b]);
var LS = Object.defineProperty, Sd = (n, a) => LS(n, "name", { value: a, configurable: !0 });
function td(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
Sd(td, "setRef");
function Ev(...n) {
  return (a) => {
    let l = !1;
    const o = n.map((s) => {
      const f = td(s, a);
      return !l && typeof f == "function" && (l = !0), f;
    });
    if (l)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const f = o[s];
          typeof f == "function" ? f() : td(n[s], null);
        }
      };
  };
}
Sd(Ev, "composeRefs");
function nt(...n) {
  return b.useCallback(Ev(...n), n);
}
Sd(nt, "useComposedRefs");
var qS = Object.defineProperty, cn = (n, a) => qS(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function xa(n) {
  const a = b.forwardRef((l, o) => {
    let { children: s, ...f } = l, d = null, m = !1;
    const h = [];
    s = Av(s), b.Children.forEach(s, (S) => {
      if (Dv(S)) {
        m = !0;
        const E = S;
        let T = "child" in E.props ? E.props.child : E.props.children;
        for (; xd(T) && typeof js == "function"; )
          T = js(T._payload);
        d = WS(E, T), h.push(d?.props?.children);
      } else
        h.push(S);
    }), d ? d = b.cloneElement(d, void 0, h) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && b.Children.count(s) === 1 && b.isValidElement(s) && (d = s)
    );
    const p = d ? Mv(d) : void 0, v = nt(o, p);
    if (!d) {
      if (s || s === 0)
        throw new Error(
          m ? QS(n) : XS(n)
        );
      return s;
    }
    const y = Tv(f, d.props ?? {});
    return d.type !== b.Fragment && (y.ref = o ? v : p), b.cloneElement(d, y);
  });
  return a.displayName = `${n}.Slot`, a;
}
cn(xa, "createSlot");
var PS = /* @__PURE__ */ xa("Slot"), Ov = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function GS(n) {
  const a = /* @__PURE__ */ cn((l) => "child" in l ? l.children(l.child) : l.children, "Slottable");
  return a.displayName = `${n}.Slottable`, a.__radixId = Ov, a;
}
cn(GS, "createSlottable");
var WS = /* @__PURE__ */ cn((n, a) => "child" in n.props ? b.isValidElement(a) ? b.cloneElement(a, void 0, n.props.children(a.props.children)) : null : b.isValidElement(a) ? a : null, "getSlottableElementFromSlottable");
function Tv(n, a) {
  const l = { ...a };
  for (const o in a) {
    const s = n[o], f = a[o];
    /^on[A-Z]/.test(o) ? s && f ? l[o] = (...m) => {
      const h = f(...m);
      return s(...m), h;
    } : s && (l[o] = s) : o === "style" ? l[o] = { ...s, ...f } : o === "className" ? l[o] = [s, f].filter(Boolean).join(" ") : o === "aria-describedby" && (l[o] = Nv(f, s));
  }
  return { ...n, ...l };
}
cn(Tv, "mergeProps");
function Mv(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning;
  return l ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
cn(Mv, "getElementRef");
function Dv(n) {
  return b.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Ov;
}
cn(Dv, "isSlottable");
var VS = /* @__PURE__ */ Symbol.for("react.lazy");
function xd(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === VS && "_payload" in n && _v(n._payload);
}
cn(xd, "isLazyComponent");
function _v(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
cn(_v, "isPromiseLike");
function Av(n) {
  let a = n;
  for (; xd(a) && typeof js == "function"; )
    a = js(a._payload);
  return a;
}
cn(Av, "useUnwrappedLazy");
function Nv(...n) {
  const a = /* @__PURE__ */ new Set();
  for (const l of n)
    if (typeof l == "string")
      for (const o of String(l).trim().split(/\s+/))
        o && a.add(o);
  return a.size > 0 ? Array.from(a).join(" ") : void 0;
}
cn(Nv, "concatAriaDescribedby");
var XS = /* @__PURE__ */ cn((n) => `${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), QS = /* @__PURE__ */ cn((n) => `${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), js = Ur[" use ".trim().toString()];
function Rv(n) {
  var a, l, o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (a = 0; a < s; a++) n[a] && (l = Rv(n[a])) && (o && (o += " "), o += l);
  } else for (l in n) n[l] && (o && (o += " "), o += l);
  return o;
}
function kv() {
  for (var n, a, l = 0, o = "", s = arguments.length; l < s; l++) (n = arguments[l]) && (a = Rv(n)) && (o && (o += " "), o += a);
  return o;
}
const wy = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, Sy = kv, FS = (n, a) => (l) => {
  var o;
  if (a?.variants == null) return Sy(n, l?.class, l?.className);
  const { variants: s, defaultVariants: f } = a, d = Object.keys(s).map((p) => {
    const v = l?.[p], y = f?.[p];
    if (v === null) return null;
    const S = wy(v) || wy(y);
    return s[p][S];
  }), m = l && Object.entries(l).reduce((p, v) => {
    let [y, S] = v;
    return S === void 0 || (p[y] = S), p;
  }, {}), h = a == null || (o = a.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, v) => {
    let { class: y, className: S, ...E } = v;
    return Object.entries(E).every((T) => {
      let [O, C] = T;
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
      S
    ] : p;
  }, []);
  return Sy(n, d, h, l?.class, l?.className);
}, ZS = (n, a) => {
  const l = new Array(n.length + a.length);
  for (let o = 0; o < n.length; o++)
    l[o] = n[o];
  for (let o = 0; o < a.length; o++)
    l[n.length + o] = a[o];
  return l;
}, IS = (n, a) => ({
  classGroupId: n,
  validator: a
}), zv = (n = /* @__PURE__ */ new Map(), a = null, l) => ({
  nextPart: n,
  validators: a,
  classGroupId: l
}), Ys = "-", xy = [], KS = "arbitrary..", $S = (n) => {
  const a = ex(n), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: o
  } = n;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return JS(d);
      const m = d.split(Ys), h = m[0] === "" && m.length > 1 ? 1 : 0;
      return jv(m, h, a);
    },
    getConflictingClassGroupIds: (d, m) => {
      if (m) {
        const h = o[d], p = l[d];
        return h ? p ? ZS(p, h) : h : p || xy;
      }
      return l[d] || xy;
    }
  };
}, jv = (n, a, l) => {
  if (n.length - a === 0)
    return l.classGroupId;
  const s = n[a], f = l.nextPart.get(s);
  if (f) {
    const p = jv(n, a + 1, f);
    if (p) return p;
  }
  const d = l.validators;
  if (d === null)
    return;
  const m = a === 0 ? n.join(Ys) : n.slice(a).join(Ys), h = d.length;
  for (let p = 0; p < h; p++) {
    const v = d[p];
    if (v.validator(m))
      return v.classGroupId;
  }
}, JS = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const a = n.slice(1, -1), l = a.indexOf(":"), o = a.slice(0, l);
  return o ? KS + o : void 0;
})(), ex = (n) => {
  const {
    theme: a,
    classGroups: l
  } = n;
  return tx(l, a);
}, tx = (n, a) => {
  const l = zv();
  for (const o in n) {
    const s = n[o];
    Cd(s, l, o, a);
  }
  return l;
}, Cd = (n, a, l, o) => {
  const s = n.length;
  for (let f = 0; f < s; f++) {
    const d = n[f];
    nx(d, a, l, o);
  }
}, nx = (n, a, l, o) => {
  if (typeof n == "string") {
    ax(n, a, l);
    return;
  }
  if (typeof n == "function") {
    rx(n, a, l, o);
    return;
  }
  ox(n, a, l, o);
}, ax = (n, a, l) => {
  const o = n === "" ? a : Yv(a, n);
  o.classGroupId = l;
}, rx = (n, a, l, o) => {
  if (lx(n)) {
    Cd(n(o), a, l, o);
    return;
  }
  a.validators === null && (a.validators = []), a.validators.push(IS(l, n));
}, ox = (n, a, l, o) => {
  const s = Object.entries(n), f = s.length;
  for (let d = 0; d < f; d++) {
    const [m, h] = s[d];
    Cd(h, Yv(a, m), l, o);
  }
}, Yv = (n, a) => {
  let l = n;
  const o = a.split(Ys), s = o.length;
  for (let f = 0; f < s; f++) {
    const d = o[f];
    let m = l.nextPart.get(d);
    m || (m = zv(), l.nextPart.set(d, m)), l = m;
  }
  return l;
}, lx = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, ix = (n) => {
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
}, nd = "!", Cy = ":", sx = [], Ey = (n, a, l, o, s) => ({
  modifiers: n,
  hasImportantModifier: a,
  baseClassName: l,
  maybePostfixModifierPosition: o,
  isExternal: s
}), cx = (n) => {
  const {
    prefix: a,
    experimentalParseClassName: l
  } = n;
  let o = (s) => {
    const f = [];
    let d = 0, m = 0, h = 0, p;
    const v = s.length;
    for (let O = 0; O < v; O++) {
      const C = s[O];
      if (d === 0 && m === 0) {
        if (C === Cy) {
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
    let S = y, E = !1;
    y.endsWith(nd) ? (S = y.slice(0, -1), E = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(nd) && (S = y.slice(1), E = !0)
    );
    const T = p && p > h ? p - h : void 0;
    return Ey(f, E, S, T);
  };
  if (a) {
    const s = a + Cy, f = o;
    o = (d) => d.startsWith(s) ? f(d.slice(s.length)) : Ey(sx, !1, d, void 0, !0);
  }
  if (l) {
    const s = o;
    o = (f) => l({
      className: f,
      parseClassName: s
    });
  }
  return o;
}, ux = (n) => {
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
}, fx = (n) => ({
  cache: ix(n.cacheSize),
  parseClassName: cx(n),
  sortModifiers: ux(n),
  postfixLookupClassGroupIds: dx(n),
  ...$S(n)
}), dx = (n) => {
  const a = /* @__PURE__ */ Object.create(null), l = n.postfixLookupClassGroups;
  if (l)
    for (let o = 0; o < l.length; o++)
      a[l[o]] = !0;
  return a;
}, mx = /\s+/, hx = (n, a) => {
  const {
    parseClassName: l,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: f,
    postfixLookupClassGroupIds: d
  } = a, m = [], h = n.trim().split(mx);
  let p = "";
  for (let v = h.length - 1; v >= 0; v -= 1) {
    const y = h[v], {
      isExternal: S,
      modifiers: E,
      hasImportantModifier: T,
      baseClassName: O,
      maybePostfixModifierPosition: C
    } = l(y);
    if (S) {
      p = y + (p.length > 0 ? " " + p : p);
      continue;
    }
    let M = !!C, R;
    if (M) {
      const N = O.substring(0, C);
      R = o(N);
      const U = R && d[R] ? o(O) : void 0;
      U && U !== R && (R = U, M = !1);
    } else
      R = o(O);
    if (!R) {
      if (!M) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (R = o(O), !R) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      M = !1;
    }
    const _ = E.length === 0 ? "" : E.length === 1 ? E[0] : f(E).join(":"), k = T ? _ + nd : _, H = k + R;
    if (m.indexOf(H) > -1)
      continue;
    m.push(H);
    const z = s(R, M);
    for (let N = 0; N < z.length; ++N) {
      const U = z[N];
      m.push(k + U);
    }
    p = y + (p.length > 0 ? " " + p : p);
  }
  return p;
}, px = (...n) => {
  let a = 0, l, o, s = "";
  for (; a < n.length; )
    (l = n[a++]) && (o = Hv(l)) && (s && (s += " "), s += o);
  return s;
}, Hv = (n) => {
  if (typeof n == "string")
    return n;
  let a, l = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (a = Hv(n[o])) && (l && (l += " "), l += a);
  return l;
}, gx = (n, ...a) => {
  let l, o, s, f;
  const d = (h) => {
    const p = a.reduce((v, y) => y(v), n());
    return l = fx(p), o = l.cache.get, s = l.cache.set, f = m, m(h);
  }, m = (h) => {
    const p = o(h);
    if (p)
      return p;
    const v = hx(h, l);
    return s(h, v), v;
  };
  return f = d, (...h) => f(px(...h));
}, yx = [], Tt = (n) => {
  const a = (l) => l[n] || yx;
  return a.isThemeGetter = !0, a.themeKey = n, a;
}, Bv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Uv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, vx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, bx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Sx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, xx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ja = (n) => vx.test(n), _e = (n) => !!n && !Number.isNaN(Number(n)), Yn = (n) => !!n && Number.isInteger(Number(n)), Hf = (n) => n.endsWith("%") && _e(n.slice(0, -1)), pa = (n) => bx.test(n), Lv = () => !0, Ex = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  wx.test(n) && !Sx.test(n)
), Ed = () => !1, Ox = (n) => xx.test(n), Tx = (n) => Cx.test(n), Mx = (n) => !ce(n) && !ue(n), Dx = (n) => n.startsWith("@container") && (n[10] === "/" && n[11] !== void 0 || n[11] === "s" && n[16] !== void 0 && n.startsWith("-size/", 10) || n[11] === "n" && n[18] !== void 0 && n.startsWith("-normal/", 10)), _x = (n) => lr(n, Gv, Ed), ce = (n) => Bv.test(n), Ar = (n) => lr(n, Wv, Ex), Oy = (n) => lr(n, Hx, _e), Ax = (n) => lr(n, Xv, Lv), Nx = (n) => lr(n, Vv, Ed), Ty = (n) => lr(n, qv, Ed), Rx = (n) => lr(n, Pv, Tx), bs = (n) => lr(n, Qv, Ox), ue = (n) => Uv.test(n), Wl = (n) => Lr(n, Wv), kx = (n) => Lr(n, Vv), My = (n) => Lr(n, qv), zx = (n) => Lr(n, Gv), jx = (n) => Lr(n, Pv), ws = (n) => Lr(n, Qv, !0), Yx = (n) => Lr(n, Xv, !0), lr = (n, a, l) => {
  const o = Bv.exec(n);
  return o ? o[1] ? a(o[1]) : l(o[2]) : !1;
}, Lr = (n, a, l = !1) => {
  const o = Uv.exec(n);
  return o ? o[1] ? a(o[1]) : l : !1;
}, qv = (n) => n === "position" || n === "percentage", Pv = (n) => n === "image" || n === "url", Gv = (n) => n === "length" || n === "size" || n === "bg-size", Wv = (n) => n === "length", Hx = (n) => n === "number", Vv = (n) => n === "family-name", Xv = (n) => n === "number" || n === "weight", Qv = (n) => n === "shadow", Bx = () => {
  const n = Tt("color"), a = Tt("font"), l = Tt("text"), o = Tt("font-weight"), s = Tt("tracking"), f = Tt("leading"), d = Tt("breakpoint"), m = Tt("container"), h = Tt("spacing"), p = Tt("radius"), v = Tt("shadow"), y = Tt("inset-shadow"), S = Tt("text-shadow"), E = Tt("drop-shadow"), T = Tt("blur"), O = Tt("perspective"), C = Tt("aspect"), M = Tt("ease"), R = Tt("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], H = () => [...k(), ue, ce], z = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], U = () => [ue, ce, h], Q = () => [Ja, "full", "auto", ...U()], $ = () => [Yn, "none", "subgrid", ue, ce], te = () => ["auto", {
    span: ["full", Yn, ue, ce]
  }, Yn, ue, ce], ee = () => [Yn, "auto", ue, ce], ie = () => ["auto", "min", "max", "fr", ue, ce], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], me = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Y = () => ["auto", ...U()], F = () => [Ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...U()], K = () => [m, Ja, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...U()], ne = () => [Ja, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...U()], W = () => [n, ue, ce], D = () => [...k(), My, Ty, {
    position: [ue, ce]
  }], V = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], J = () => ["auto", "cover", "contain", zx, _x, {
    size: [ue, ce]
  }], ae = () => [Hf, Wl, Ar], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    ue,
    ce
  ], oe = () => ["", _e, Wl, Ar], ve = () => ["solid", "dashed", "dotted", "double"], Xe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => [_e, Hf, My, Ty], he = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    T,
    ue,
    ce
  ], Qe = () => ["none", _e, ue, ce], Le = () => ["none", _e, ue, ce], Ce = () => [_e, ue, ce], Oe = () => [Ja, "full", ...U()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pa],
      breakpoint: [pa],
      color: [Lv],
      container: [pa],
      "drop-shadow": [pa],
      ease: ["in", "out", "in-out"],
      font: [Mx],
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
      "container-named": [Dx],
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
        object: H()
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
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: Q()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Q()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Q()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": Q(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: Q()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": Q(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: Q()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": Q()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": Q()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Q()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Q()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Q()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Q()
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
        m: Y()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Y()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Y()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Y()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Y()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: Y()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: Y()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Y()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Y()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Y()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Y()
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
        text: ["base", l, Wl, Ar]
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
        font: [o, Yx, Ax]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Hf, ce]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [kx, Nx, a]
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
        "line-clamp": [_e, "none", ue, Oy]
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
        bg: D()
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
        }, jx, Rx]
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
        outline: ["", _e, Wl, Ar]
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
          v,
          ws,
          bs
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
        "inset-shadow": ["none", y, ws, bs]
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
        "text-shadow": ["none", S, ws, bs]
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
        "mix-blend": [...Xe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Xe()
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
        "mask-radial-at": k()
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
        mask: D()
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
          ws,
          bs
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
        ease: ["linear", "initial", M, ue, ce]
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
        animate: ["none", R, ue, ce]
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
        "perspective-origin": H()
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
        scale: Le()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Le()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Le()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Le()
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
        origin: H()
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
        stroke: [_e, Wl, Ar, Oy]
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
}, Ux = /* @__PURE__ */ gx(Bx);
function Se(...n) {
  return Ux(kv(n));
}
const ad = FS(
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
function ft({
  className: n,
  variant: a,
  size: l,
  asChild: o = !1,
  ...s
}) {
  const f = o ? PS : "button";
  return /* @__PURE__ */ x.jsx(
    f,
    {
      "data-slot": "button",
      className: Se(ad({ variant: a, size: l, className: n })),
      ...s
    }
  );
}
function _s({ className: n, type: a, ...l }) {
  return /* @__PURE__ */ x.jsx(
    "input",
    {
      type: a,
      "data-slot": "input",
      className: Se(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-xs file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[2px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n
      ),
      ...l
    }
  );
}
var Il = Cv(), Lx = Object.defineProperty, qx = (n, a) => Lx(n, "name", { value: a, configurable: !0 }), Px = [
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
], at = Px.reduce((n, a) => {
  const l = /* @__PURE__ */ xa(`Primitive.${a}`), o = b.forwardRef((s, f) => {
    const { asChild: d, ...m } = s, h = d ? l : a;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x.jsx(h, { ...m, ref: f });
  });
  return o.displayName = `Primitive.${a}`, { ...n, [a]: o };
}, {});
function Fv(n, a) {
  n && Il.flushSync(() => n.dispatchEvent(a));
}
qx(Fv, "dispatchDiscreteCustomEvent");
var Gx = Object.defineProperty, Wx = (n, a) => Gx(n, "name", { value: a, configurable: !0 }), Vx = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Wx(function(a, l) {
    return /* @__PURE__ */ x.jsx(
      at.label,
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
function Dn({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ x.jsx(
    Vx,
    {
      "data-slot": "label",
      className: Se(
        "flex items-center gap-2 text-xs leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        n
      ),
      ...a
    }
  );
}
var Xx = Object.defineProperty, Wo = (n, a) => Xx(n, "name", { value: a, configurable: !0 }), Zv = !!(typeof window < "u" && window.document && window.document.createElement);
function je(n, a, { checkForDefaultPrevented: l = !0 } = {}) {
  return /* @__PURE__ */ Wo(function(s) {
    if (n?.(s), l === !1 || !s || !s.defaultPrevented)
      return a?.(s);
  }, "handleEvent");
}
Wo(je, "composeEventHandlers");
function Qx(n) {
  if (!Zv)
    throw new Error("Cannot access window outside of the DOM");
  return n?.ownerDocument?.defaultView ?? window;
}
Wo(Qx, "getOwnerWindow");
function rd(n) {
  if (!Zv)
    throw new Error("Cannot access document outside of the DOM");
  return n?.ownerDocument ?? document;
}
Wo(rd, "getOwnerDocument");
function Iv(n, a = !1) {
  const { activeElement: l } = rd(n);
  if (!l?.nodeName)
    return null;
  if (Kv(l) && l.contentDocument)
    return Iv(l.contentDocument.body, a);
  if (a) {
    const o = l.getAttribute("aria-activedescendant");
    if (o) {
      const s = rd(l).getElementById(o);
      if (s)
        return s;
    }
  }
  return l;
}
Wo(Iv, "getActiveElement");
function Kv(n) {
  return n.tagName === "IFRAME";
}
Wo(Kv, "isFrame");
var Fx = Object.defineProperty, Sn = (n, a) => Fx(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Zx(n, a) {
  const l = b.createContext(a);
  l.displayName = n + "Context";
  const o = /* @__PURE__ */ Sn((f) => {
    const { children: d, ...m } = f, h = b.useMemo(() => m, Object.values(m));
    return /* @__PURE__ */ x.jsx(l.Provider, { value: h, children: d });
  }, "Provider");
  o.displayName = n + "Provider";
  function s(f, d = {}) {
    const { optional: m = !1 } = d, h = b.useContext(l);
    if (h) return h;
    if (a !== void 0) return a;
    if (!m)
      throw new Error(`\`${f}\` must be used within \`${n}\``);
  }
  return Sn(s, "useContext"), [o, s];
}
Sn(Zx, "createContext");
// @__NO_SIDE_EFFECTS__
function Oa(n, a = []) {
  let l = [];
  function o(f, d) {
    const m = b.createContext(d);
    m.displayName = f + "Context";
    const h = l.length;
    l = [...l, d];
    const p = /* @__PURE__ */ Sn((y) => {
      const { scope: S, children: E, ...T } = y, O = S?.[n]?.[h] || m, C = b.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ x.jsx(O.Provider, { value: C, children: E });
    }, "Provider");
    p.displayName = f + "Provider";
    function v(y, S, E = {}) {
      const { optional: T = !1 } = E, O = S?.[n]?.[h] || m, C = b.useContext(O);
      if (C) return C;
      if (d !== void 0) return d;
      if (!T)
        throw new Error(`\`${y}\` must be used within \`${f}\``);
    }
    return Sn(v, "useContext"), [p, v];
  }
  Sn(o, "createContext");
  const s = /* @__PURE__ */ Sn(() => {
    const f = l.map((d) => b.createContext(d));
    return /* @__PURE__ */ Sn(function(m) {
      const h = m?.[n] || f;
      return b.useMemo(
        () => ({ [`__scope${n}`]: { ...m, [n]: h } }),
        [m, h]
      );
    }, "useScope");
  }, "createScope");
  return s.scopeName = n, [o, $v(s, ...a)];
}
Sn(Oa, "createContextScope");
function $v(...n) {
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
      return b.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    }, "useComposedScopes");
  }, "createScope");
  return l.scopeName = a.scopeName, l;
}
Sn($v, "composeContextScopes");
var bt = globalThis?.document ? b.useLayoutEffect : () => {
}, Ix = Object.defineProperty, Kx = (n, a) => Ix(n, "name", { value: a, configurable: !0 }), Dy = Ur[" useEffectEvent ".trim().toString()], _y = Ur[" useInsertionEffect ".trim().toString()];
function Jv(n) {
  if (typeof Dy == "function")
    return Dy(n);
  const a = b.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof _y == "function" ? _y(() => {
    a.current = n;
  }) : bt(() => {
    a.current = n;
  }), b.useMemo(() => ((...l) => a.current?.(...l)), []);
}
Kx(Jv, "useEffectEvent");
var $x = Object.defineProperty, Kl = (n, a) => $x(n, "name", { value: a, configurable: !0 }), Jx = Ur[" useInsertionEffect ".trim().toString()] || bt;
function zr({
  prop: n,
  defaultProp: a,
  onChange: l = /* @__PURE__ */ Kl(() => {
  }, "onChange"),
  caller: o
}) {
  const [s, f, d] = eb({
    defaultProp: a,
    onChange: l
  }), m = n !== void 0, h = m ? n : s, p = b.useCallback(
    (v) => {
      if (m) {
        const y = tb(v) ? v(n) : v;
        y !== n && d.current?.(y);
      } else
        f(v);
    },
    [m, n, f, d]
  );
  return [h, p];
}
Kl(zr, "useControllableState");
function eb({
  defaultProp: n,
  onChange: a
}) {
  const [l, o] = b.useState(n), s = b.useRef(l), f = b.useRef(a);
  return Jx(() => {
    f.current = a;
  }, [a]), b.useEffect(() => {
    s.current !== l && (f.current?.(l), s.current = l);
  }, [l, s]), [l, o, f];
}
Kl(eb, "useUncontrolledState");
function tb(n) {
  return typeof n == "function";
}
Kl(tb, "isFunction");
var Ay = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function eC(n, a, l, o) {
  const { prop: s, defaultProp: f, onChange: d, caller: m } = a, h = s !== void 0, p = Jv(d), v = [{ ...l, state: f }];
  o && v.push(o);
  const [y, S] = b.useReducer(
    (C, M) => {
      if (M.type === Ay)
        return { ...C, state: M.state };
      const R = n(C, M);
      return h && !Object.is(R.state, C.state) && p(R.state), R;
    },
    ...v
  ), E = y.state, T = b.useRef(E);
  b.useEffect(() => {
    T.current !== E && (T.current = E, h || p(E));
  }, [E, T, h]);
  const O = b.useMemo(() => s !== void 0 ? { ...y, state: s } : y, [y, s]);
  return b.useEffect(() => {
    h && !Object.is(s, y.state) && S({ type: Ay, state: s });
  }, [s, y.state, h]), [O, S];
}
Kl(eC, "useControllableStateReducer");
var tC = Object.defineProperty, nC = (n, a) => tC(n, "name", { value: a, configurable: !0 });
function Od(n) {
  const [a, l] = b.useState(void 0);
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
            const p = d.borderBoxSize, v = Array.isArray(p) ? p[0] : p;
            m = v.inlineSize, h = v.blockSize;
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
nC(Od, "useSize");
var aC = Object.defineProperty, ar = (n, a) => aC(n, "name", { value: a, configurable: !0 }), Td = "Switch", [rC, uN] = /* @__PURE__ */ Oa(Td), [oC, Md] = rC(Td);
function nb(n) {
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
    value: v = "on",
    // @ts-expect-error
    internal_do_not_use_render: y
  } = n, [S, E] = zr({
    prop: l,
    defaultProp: s ?? !1,
    onChange: h,
    caller: Td
  }), [T, O] = b.useState(null), [C, M] = b.useState(null), [R, _] = b.useState(null), k = T ? !!d || !!T.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), H = {
    checked: S,
    setChecked: E,
    disabled: f,
    control: T,
    setControl: O,
    name: m,
    form: d,
    value: v,
    userClick: R,
    onUserClick: _,
    required: p,
    defaultChecked: s,
    isFormControl: k,
    bubbleInput: C,
    setBubbleInput: M
  };
  return /* @__PURE__ */ x.jsx(oC, { scope: a, ...H, children: ab(y) ? y(H) : o });
}
ar(nb, "SwitchProvider");
var lC = "SwitchTrigger", iC = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ ar(function({ __scopeSwitch: a, onClick: l, ...o }, s) {
    const {
      control: f,
      form: d,
      value: m,
      disabled: h,
      checked: p,
      required: v,
      setControl: y,
      setChecked: S,
      onUserClick: E,
      isFormControl: T,
      bubbleInput: O
    } = Md(lC, a), C = nt(s, y), M = b.useRef(p);
    return b.useEffect(() => {
      const R = d ? f?.ownerDocument.getElementById(d) : f?.form;
      if (R instanceof HTMLFormElement) {
        const _ = /* @__PURE__ */ ar(() => S(M.current), "reset");
        return R.addEventListener("reset", _), () => R.removeEventListener("reset", _);
      }
    }, [f, d, S]), /* @__PURE__ */ x.jsx(
      at.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": p,
        "aria-required": v,
        "data-state": Dd(p),
        "data-disabled": h ? "" : void 0,
        disabled: h,
        value: m,
        ...o,
        ref: C,
        onClick: je(l, (R) => {
          const _ = R.isPropagationStopped();
          E({ requestedChecked: !p, hasConsumerStoppedPropagation: _ }), S((k) => !k), O && T && (_ || R.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), sC = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ar(function(a, l) {
    const {
      __scopeSwitch: o,
      name: s,
      checked: f,
      defaultChecked: d,
      required: m,
      disabled: h,
      value: p,
      onCheckedChange: v,
      form: y,
      ...S
    } = a;
    return /* @__PURE__ */ x.jsx(
      nb,
      {
        __scopeSwitch: o,
        checked: f,
        defaultChecked: d,
        disabled: h,
        required: m,
        onCheckedChange: v,
        name: s,
        form: y,
        value: p,
        internal_do_not_use_render: ({ isFormControl: E }) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(
            iC,
            {
              ...S,
              ref: l,
              __scopeSwitch: o
            }
          ),
          E && /* @__PURE__ */ x.jsx(
            dC,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), cC = "SwitchThumb", uC = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ ar(function(a, l) {
    const { __scopeSwitch: o, ...s } = a, f = Md(cC, o);
    return /* @__PURE__ */ x.jsx(
      at.span,
      {
        "data-state": Dd(f.checked),
        "data-disabled": f.disabled ? "" : void 0,
        ...s,
        ref: l
      }
    );
  }, "SwitchThumb")
), fC = "SwitchBubbleInput", dC = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ar(function({ __scopeSwitch: a, onClick: l, ...o }, s) {
    const {
      control: f,
      userClick: d,
      checked: m,
      defaultChecked: h,
      required: p,
      disabled: v,
      name: y,
      value: S,
      form: E,
      bubbleInput: T,
      setBubbleInput: O
    } = Md(fC, a), C = nt(s, O), M = Od(f), R = b.useRef(!1), _ = b.useRef(m), k = b.useRef(d), H = b.useRef(null);
    b.useEffect(() => {
      const N = T;
      if (!N) return;
      const U = window.HTMLInputElement.prototype, $ = Object.getOwnPropertyDescriptor(
        U,
        "checked"
      ).set;
      if (!$)
        return;
      const te = _.current !== m;
      _.current = m;
      const ee = d !== null && d !== k.current;
      if (k.current = d, ee)
        H.current = te ? null : d, te && $.call(N, m), N.dispatchEvent(
          new Event("click", { bubbles: !d.hasConsumerStoppedPropagation })
        );
      else if (te) {
        const ie = H.current;
        H.current = null;
        const le = ie?.requestedChecked === m;
        R.current = !0, $.call(N, m), N.dispatchEvent(
          new Event("click", {
            bubbles: !(le && ie.hasConsumerStoppedPropagation)
          })
        ), R.current = !1;
      }
    }, [T, m, d]);
    const z = b.useRef(m);
    return /* @__PURE__ */ x.jsx(
      at.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: h ?? z.current,
        required: p,
        disabled: v,
        name: y,
        value: S,
        form: E,
        ...o,
        tabIndex: -1,
        ref: C,
        onClick: je(l, (N) => {
          R.current && N.stopPropagation();
        }),
        style: {
          ...o.style,
          ...M,
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
function ab(n) {
  return typeof n == "function";
}
ar(ab, "isFunction");
function Dd(n) {
  return n ? "checked" : "unchecked";
}
ar(Dd, "getState");
function mC({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ x.jsx(
    sC,
    {
      "data-slot": "switch",
      className: Se(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ...a,
      children: /* @__PURE__ */ x.jsx(
        uC,
        {
          "data-slot": "switch-thumb",
          className: Se(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
var hC = Object.defineProperty, Mt = (n, a) => hC(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function _d(n) {
  const a = n + "CollectionProvider", [l, o] = /* @__PURE__ */ Oa(a), [s, f] = l(
    a,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = /* @__PURE__ */ Mt((O) => {
    const { scope: C, children: M } = O, R = b.useRef(null), _ = b.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ x.jsx(s, { scope: C, itemMap: _, collectionRef: R, children: M });
  }, "CollectionProvider");
  d.displayName = a;
  const m = n + "CollectionSlot", h = /* @__PURE__ */ xa(m), p = b.forwardRef(
    (O, C) => {
      const { scope: M, children: R } = O, _ = f(m, M), k = nt(C, _.collectionRef);
      return /* @__PURE__ */ x.jsx(h, { ref: k, children: R });
    }
  );
  p.displayName = m;
  const v = n + "CollectionItemSlot", y = "data-radix-collection-item", S = /* @__PURE__ */ xa(v), E = b.forwardRef(
    (O, C) => {
      const { scope: M, children: R, ..._ } = O, k = b.useRef(null), H = nt(C, k), z = f(v, M);
      return b.useEffect(() => (z.itemMap.set(k, { ref: k, ..._ }), () => {
        z.itemMap.delete(k);
      })), /* @__PURE__ */ x.jsx(S, { [y]: "", ref: H, children: R });
    }
  );
  E.displayName = v;
  function T(O) {
    const C = f(n + "CollectionConsumer", O);
    return b.useCallback(() => {
      const R = C.collectionRef.current;
      if (!R) return [];
      const _ = Array.from(R.querySelectorAll(`[${y}]`));
      return Array.from(C.itemMap.values()).sort(
        (z, N) => _.indexOf(z.ref.current) - _.indexOf(N.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return Mt(T, "useCollection"), [
    { Provider: d, Slot: p, ItemSlot: E },
    T,
    o
  ];
}
Mt(_d, "createCollection");
var Ny = /* @__PURE__ */ new WeakMap(), gt, sn, Ss = (sn = class extends Map {
  constructor(l) {
    super(l);
    cy(this, gt);
    Af(this, gt, [...super.keys()]), Ny.set(this, !0);
  }
  set(l, o) {
    return Ny.get(this) && !this.has(l) && Ht(this, gt).push(l), super.set(l, o), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(l, o, s) {
    const f = this.has(o), d = f ? this.size : this.size + 1, m = Ad(l), h = m >= 0 ? Math.min(m, d - 1) : Math.max(d + m, 0);
    if (f ? Ht(this, gt).indexOf(o) === h : h === this.size)
      return this.set(o, s), this;
    const p = Ht(this, gt).filter((y) => y !== o);
    p.splice(h, 0, o);
    const v = p.map((y) => [
      y,
      y === o ? s : this.get(y)
    ]);
    this.clear();
    for (const [y, S] of v)
      this.set(y, S);
    return this;
  }
  with(l, o, s) {
    const f = new sn(this);
    return f.insert(l, o, s), f;
  }
  before(l) {
    const o = Ht(this, gt).indexOf(l) - 1;
    if (!(o < 0))
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(l, o, s) {
    const f = Ht(this, gt).indexOf(l);
    if (f === -1)
      return this;
    const d = Ht(this, gt).indexOf(o), m = d !== -1 && d < f ? f - 1 : f;
    return this.insert(m, o, s);
  }
  after(l) {
    let o = Ht(this, gt).indexOf(l);
    if (o = o === -1 || o === this.size - 1 ? -1 : o + 1, o !== -1)
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(l, o, s) {
    const f = Ht(this, gt).indexOf(l);
    if (f === -1)
      return this;
    const d = Ht(this, gt).indexOf(o), m = d !== -1 && d <= f ? f : f + 1;
    return this.insert(m, o, s);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return Af(this, gt, []), super.clear();
  }
  delete(l) {
    const o = super.delete(l);
    return o && Ht(this, gt).splice(Ht(this, gt).indexOf(l), 1), o;
  }
  deleteAt(l) {
    const o = this.keyAt(l);
    return o !== void 0 ? this.delete(o) : !1;
  }
  at(l) {
    const o = As(Ht(this, gt), l);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(l) {
    const o = As(Ht(this, gt), l);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(l) {
    return Ht(this, gt).indexOf(l);
  }
  keyAt(l) {
    return As(Ht(this, gt), l);
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
    return new sn(s);
  }
  map(l, o) {
    const s = [];
    let f = 0;
    for (const d of this)
      s.push([d[0], Reflect.apply(l, o, [d, f, this])]), f++;
    return new sn(s);
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
    return new sn(o);
  }
  toReversed() {
    const l = new sn();
    for (let o = this.size - 1; o >= 0; o--) {
      const s = this.keyAt(o), f = this.get(s);
      l.set(s, f);
    }
    return l;
  }
  toSpliced(...l) {
    const o = [...this.entries()];
    return o.splice(...l), new sn(o);
  }
  slice(l, o) {
    const s = new sn();
    for (const f of Ht(this, gt).slice(l, o))
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
}, gt = new WeakMap(), Mt(sn, "OrderedDict"), sn);
function As(n, a) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(n, a);
  const l = rb(n, a);
  return l === -1 ? void 0 : n[l];
}
Mt(As, "at");
function rb(n, a) {
  const l = n.length, o = Ad(a), s = o >= 0 ? o : l + o;
  return s < 0 || s >= l ? -1 : s;
}
Mt(rb, "toSafeIndex");
function Ad(n) {
  return n !== n || n === 0 ? 0 : Math.trunc(n);
}
Mt(Ad, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function pC(n) {
  const a = n + "CollectionProvider", [l, o] = /* @__PURE__ */ Oa(a), [s, f] = l(a);
  s.displayName = n + "CollectionStableContextProvider";
  const [d, m] = l(a);
  d.displayName = n + "CollectionStatefulContextProvider";
  const h = /* @__PURE__ */ Mt(({ state: z, ...N }) => z ? /* @__PURE__ */ x.jsx(v, { ...N, state: z }) : /* @__PURE__ */ x.jsx(p, { ...N }), "CollectionProvider");
  h.displayName = a;
  const p = /* @__PURE__ */ Mt((z) => {
    const N = R();
    return /* @__PURE__ */ x.jsx(v, { ...z, state: N });
  }, "CollectionInit");
  p.displayName = n + "CollectionInit";
  const v = /* @__PURE__ */ Mt((z) => {
    const { scope: N, children: U, state: Q } = z, $ = b.useRef(null), [te, ee] = b.useState(
      null
    ), ie = nt($, ee), [le, me] = Q, Y = b.useRef(
      new Ss()
    ), F = b.useCallback(() => {
      const K = Y.current;
      return ib(K) || K.sort(Ns), K;
    }, []);
    return b.useEffect(() => {
      if (!te)
        return;
      const K = sb(() => {
        me((ne) => {
          const W = ne.toSorted(Ns);
          return W.some(([V], J) => ne.keyAt(J) !== V) ? W : ne;
        });
      });
      return K.observe(te, {
        childList: !0,
        subtree: !0
      }), () => {
        K.disconnect();
      };
    }, [te, me]), /* @__PURE__ */ x.jsx(
      s,
      {
        scope: N,
        collectionElementRef: ie,
        collectionElementRefObject: $,
        getCollection: F,
        setCollection: me,
        registryRef: Y,
        children: /* @__PURE__ */ x.jsx(
          d,
          {
            scope: N,
            collectionElement: te,
            collection: le,
            children: U
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  v.displayName = n + "CollectionProviderImpl";
  const y = n + "CollectionSlot", S = /* @__PURE__ */ xa(y), E = b.forwardRef(
    (z, N) => {
      const { scope: U, children: Q } = z, $ = f(y, U), te = nt(N, $.collectionElementRef);
      return /* @__PURE__ */ x.jsx(S, { ref: te, children: Q });
    }
  );
  E.displayName = y;
  const T = n + "CollectionItemSlot", O = "data-radix-collection-item", C = /* @__PURE__ */ xa(T), M = b.forwardRef(
    (z, N) => {
      const { scope: U, children: Q, ...$ } = z, te = b.useRef(null), ee = f(T, U), { setCollection: ie, registryRef: le } = ee, me = b.useRef($);
      ob(me.current, $) || (me.current = $);
      const Y = me.current, F = b.useCallback(
        (W) => {
          const D = le.current;
          W ? D.set(W, {
            ...me.current,
            element: W
          }) : te.current && D.delete(te.current);
        },
        [le]
      ), K = nt(N, F, te);
      bt(() => {
        const W = te.current, D = le.current;
        W && D.has(W) && D.set(W, { ...Y, element: W });
      }, [Y, le]);
      const ne = b.useRef(null);
      return b.useEffect(() => {
        const W = te.current, D = ne.current;
        (D?.element ?? null) === W && (!W || D?.itemData === Y) || (ne.current = W ? { element: W, itemData: Y } : null, ie((V) => {
          const J = new Ss(V);
          return D && D.element !== W && J.delete(D.element), W && J.set(W, { ...Y, element: W }), J.sort(Ns);
        }));
      }), b.useEffect(() => () => {
        const W = ne.current;
        ne.current = null, W && ie((D) => {
          if (!D.has(W.element))
            return D;
          const V = new Ss(D);
          return V.delete(W.element), V;
        });
      }, [ie]), /* @__PURE__ */ x.jsx(C, { [O]: "", ref: K, children: Q });
    }
  );
  M.displayName = T;
  function R() {
    return b.useState(new Ss());
  }
  Mt(R, "useInitCollection");
  function _(z) {
    const { collection: N } = m(n + "CollectionConsumer", z);
    return N;
  }
  Mt(_, "useCollection");
  function k(z) {
    const { getCollection: N } = f(n + "CollectionConsumer", z);
    return N;
  }
  return Mt(k, "useGetCollection"), [
    { Provider: h, Slot: E, ItemSlot: M },
    {
      createCollectionScope: o,
      useCollection: _,
      useGetCollection: k,
      useInitCollection: R
    }
  ];
}
Mt(pC, "createCollection");
function ob(n, a) {
  if (n === a) return !0;
  if (typeof n != "object" || typeof a != "object" || n == null || a == null) return !1;
  const l = Object.keys(n), o = Object.keys(a);
  if (l.length !== o.length) return !1;
  for (const s of l)
    if (!Object.prototype.hasOwnProperty.call(a, s) || n[s] !== a[s]) return !1;
  return !0;
}
Mt(ob, "shallowEqual");
function lb(n, a) {
  return !!(a.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING);
}
Mt(lb, "isElementPreceding");
function ib(n) {
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
Mt(ib, "isInDocumentOrder");
function Ns(n, a) {
  return !n[1].element || !a[1].element ? 0 : lb(n[1].element, a[1].element) ? -1 : 1;
}
Mt(Ns, "sortByDocumentPosition");
function sb(n) {
  return new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList") {
        n();
        return;
      }
  });
}
Mt(sb, "getChildListObserver");
var gC = Object.defineProperty, yC = (n, a) => gC(n, "name", { value: a, configurable: !0 }), vC = Ur[" useId ".trim().toString()] || (() => {
}), bC = 0;
function tr(n) {
  const [a, l] = b.useState(vC());
  return bt(() => {
    n || l((o) => o ?? String(bC++));
  }, [n]), n || (a ? `radix-${a}` : "");
}
yC(tr, "useId");
var wC = Object.defineProperty, SC = (n, a) => wC(n, "name", { value: a, configurable: !0 }), Ry = Ur[" useInsertionEffect ".trim().toString()];
function _n(n) {
  const a = b.useRef(n);
  return typeof Ry == "function" ? Ry(() => {
    a.current = n;
  }) : bt(() => {
    a.current = n;
  }), b.useMemo(() => ((...l) => a.current?.(...l)), []);
}
SC(_n, "useCallbackRef");
var xC = Object.defineProperty, CC = (n, a) => xC(n, "name", { value: a, configurable: !0 }), EC = {
  LTR: "ltr"
}, OC = b.createContext(void 0);
function Qs(n) {
  const a = b.useContext(OC);
  return n || a || EC.LTR;
}
CC(Qs, "useDirection");
var TC = Object.defineProperty, Nd = (n, a) => TC(n, "name", { value: a, configurable: !0 }), Bf = !1;
function cb() {
  const [n, a] = b.useState(Bf);
  return b.useEffect(() => {
    Bf || (Bf = !0, a(!0));
  }, []), n;
}
Nd(cb, "useIsHydrated");
var ub = Ur[" useSyncExternalStore ".trim().toString()];
function fb() {
  return () => {
  };
}
Nd(fb, "subscribe");
function db() {
  return ub(
    fb,
    () => !0,
    () => !1
  );
}
Nd(db, "useIsHydratedModern");
var MC = typeof ub == "function" ? db : cb, DC = Object.defineProperty, qr = (n, a) => DC(n, "name", { value: a, configurable: !0 }), Uf = "rovingFocusGroup.onEntryFocus", _C = { bubbles: !1, cancelable: !0 }, Fs = "RovingFocusGroup", [od, mb, AC] = /* @__PURE__ */ _d(Fs), [NC, hb] = /* @__PURE__ */ Oa(
  Fs,
  [AC]
), ky = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, RC = {
  RTL: "rtl"
}, [kC, zC] = NC(Fs), jC = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qr(function(a, l) {
    return /* @__PURE__ */ x.jsx(od.Provider, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ x.jsx(od.Slot, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ x.jsx(YC, { ...a, ref: l }) }) });
  }, "RovingFocusGroup")
), YC = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ qr(function(a, l) {
  const {
    __scopeRovingFocusGroup: o,
    orientation: s,
    loop: f = !1,
    dir: d,
    currentTabStopId: m,
    defaultCurrentTabStopId: h,
    onCurrentTabStopIdChange: p,
    onEntryFocus: v,
    preventScrollOnEntryFocus: y = !1,
    ...S
  } = a, E = b.useRef(null), T = nt(l, E), O = Qs(d), [C, M] = zr({
    prop: m,
    defaultProp: h ?? null,
    onChange: p,
    caller: Fs
  }), [R, _] = b.useState(!1), k = _n(v), H = mb(o), z = b.useRef(!1), [N, U] = b.useState(0);
  return b.useEffect(() => {
    const Q = E.current;
    if (Q)
      return Q.addEventListener(Uf, k), () => Q.removeEventListener(Uf, k);
  }, [k]), /* @__PURE__ */ x.jsx(
    kC,
    {
      scope: o,
      orientation: s,
      dir: O,
      loop: f,
      currentTabStopId: C,
      onItemFocus: b.useCallback(
        (Q) => M(Q),
        [M]
      ),
      onItemShiftTab: b.useCallback(() => _(!0), []),
      onFocusableItemAdd: b.useCallback(
        () => U((Q) => Q + 1),
        []
      ),
      onFocusableItemRemove: b.useCallback(
        () => U((Q) => Q - 1),
        []
      ),
      children: /* @__PURE__ */ x.jsx(
        at.div,
        {
          tabIndex: R || N === 0 ? -1 : 0,
          "data-orientation": s,
          ...S,
          ref: T,
          style: { outline: "none", ...a.style },
          onMouseDown: je(a.onMouseDown, () => {
            z.current = !0;
          }),
          onFocus: je(a.onFocus, (Q) => {
            const $ = !z.current;
            if (Q.target === Q.currentTarget && $ && !R) {
              const te = new CustomEvent(Uf, _C);
              if (Q.currentTarget.dispatchEvent(te), !te.defaultPrevented) {
                const ee = H().filter((F) => F.focusable), ie = ee.find((F) => F.active), le = ee.find((F) => F.id === C), Y = [ie, le, ...ee].filter(
                  Boolean
                ).map((F) => F.ref.current);
                Rd(Y, y);
              }
            }
            z.current = !1;
          }),
          onBlur: je(a.onBlur, () => _(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), HC = "RovingFocusGroupItem", BC = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qr(function(a, l) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: s = !0,
      active: f = !1,
      tabStopId: d,
      children: m,
      ...h
    } = a, p = tr(), v = d || p, y = zC(HC, o), S = y.currentTabStopId === v, E = mb(o), { onFocusableItemAdd: T, onFocusableItemRemove: O, currentTabStopId: C } = y, M = MC();
    return bt(() => {
      if (!(!M || !s))
        return T(), () => O();
    }, [M, s, T, O]), b.useEffect(() => {
      if (!(M || !s))
        return T(), () => O();
    }, [M, s, T, O]), /* @__PURE__ */ x.jsx(
      od.ItemSlot,
      {
        scope: o,
        id: v,
        focusable: s,
        active: f,
        children: /* @__PURE__ */ x.jsx(
          at.span,
          {
            tabIndex: S ? 0 : -1,
            "data-orientation": y.orientation,
            ...h,
            ref: l,
            onMouseDown: je(a.onMouseDown, (R) => {
              s ? y.onItemFocus(v) : R.preventDefault();
            }),
            onFocus: je(a.onFocus, () => y.onItemFocus(v)),
            onKeyDown: je(a.onKeyDown, (R) => {
              if (R.key === "Tab" && R.shiftKey) {
                y.onItemShiftTab();
                return;
              }
              if (R.target !== R.currentTarget) return;
              const _ = gb(R, y.orientation, y.dir);
              if (_ !== void 0) {
                if (R.metaKey || R.ctrlKey || R.altKey || R.shiftKey) return;
                R.preventDefault();
                let H = E().filter((z) => z.focusable).map((z) => z.ref.current);
                if (_ === "last") H.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && H.reverse();
                  const z = H.indexOf(R.currentTarget);
                  H = y.loop ? yb(H, z + 1) : H.slice(z + 1);
                }
                setTimeout(() => Rd(H));
              }
            }),
            children: typeof m == "function" ? m({ isCurrentTabStop: S, hasTabStop: C != null }) : m
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), UC = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function pb(n, a) {
  return a !== RC.RTL ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
qr(pb, "getDirectionAwareKey");
function gb(n, a, l) {
  const o = pb(n.key, l);
  if (!(a === ky.Vertical && ["ArrowLeft", "ArrowRight"].includes(o)) && !(a === ky.Horizontal && ["ArrowUp", "ArrowDown"].includes(o)))
    return UC[o];
}
qr(gb, "getFocusIntent");
function Rd(n, a = !1) {
  const l = document.activeElement;
  for (const o of n)
    if (o === l || (o.focus({ preventScroll: a }), document.activeElement !== l)) return;
}
qr(Rd, "focusFirst");
function yb(n, a) {
  return n.map((l, o) => n[(a + o) % n.length]);
}
qr(yb, "wrapArray");
var LC = Object.defineProperty, Ca = (n, a) => LC(n, "name", { value: a, configurable: !0 });
function vb(n, a) {
  return b.useReducer((l, o) => a[l][o] ?? l, n);
}
Ca(vb, "useStateMachine");
var Zs = /* @__PURE__ */ Ca((n) => {
  const { present: a, children: l } = n, o = bb(a), s = typeof l == "function" ? l({ present: o.isPresent }) : b.Children.only(l), f = wb(o.ref, Sb(s));
  return typeof l == "function" || o.isPresent ? b.cloneElement(s, { ref: f }) : null;
}, "Presence");
function bb(n) {
  const [a, l] = b.useState(), o = b.useRef(null), s = b.useRef(n), f = b.useRef("none"), d = b.useRef(void 0), m = n ? "mounted" : "unmounted", [h, p] = vb(m, {
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
  return b.useEffect(() => {
    h === "mounted" ? (f.current = d.current ?? Uo(o.current), d.current = void 0) : f.current = "none";
  }, [h]), bt(() => {
    const v = o.current, y = s.current;
    if (y !== n) {
      const E = f.current, T = Uo(v);
      n ? (d.current = T, p("MOUNT")) : T === "none" || v?.display === "none" ? p("UNMOUNT") : p(y && E !== T ? "ANIMATION_OUT" : "UNMOUNT"), s.current = n;
    }
  }, [n, p]), bt(() => {
    if (a) {
      let v;
      const y = a.ownerDocument.defaultView ?? window, S = /* @__PURE__ */ Ca((T) => {
        const C = Uo(o.current).includes(CSS.escape(T.animationName));
        if (T.target === a && C && (p("ANIMATION_END"), !s.current)) {
          const M = a.style.animationFillMode;
          a.style.animationFillMode = "forwards", v = y.setTimeout(() => {
            a.style.animationFillMode === "forwards" && (a.style.animationFillMode = M);
          });
        }
      }, "handleAnimationEnd"), E = /* @__PURE__ */ Ca((T) => {
        T.target === a && (f.current = Uo(o.current));
      }, "handleAnimationStart");
      return a.addEventListener("animationstart", E), a.addEventListener("animationcancel", S), a.addEventListener("animationend", S), () => {
        y.clearTimeout(v), a.removeEventListener("animationstart", E), a.removeEventListener("animationcancel", S), a.removeEventListener("animationend", S);
      };
    } else
      p("ANIMATION_END");
  }, [a, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: b.useCallback((v) => {
      if (v) {
        const y = getComputedStyle(v);
        o.current = y, d.current = Uo(y);
      } else
        o.current = null;
      l(v);
    }, [])
  };
}
Ca(bb, "usePresence");
function ld(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
Ca(ld, "setRef");
function wb(...n) {
  const a = b.useRef(n);
  return a.current = n, b.useCallback((l) => {
    const o = a.current;
    let s = !1;
    const f = o.map((d) => {
      const m = ld(d, l);
      return !s && typeof m == "function" && (s = !0), m;
    });
    if (s)
      return () => {
        for (let d = 0; d < f.length; d++) {
          const m = f[d];
          typeof m == "function" ? m() : ld(o[d], null);
        }
      };
  }, []);
}
Ca(wb, "useStableComposedRefs");
function Uo(n) {
  return n?.animationName || "none";
}
Ca(Uo, "getAnimationName");
function Sb(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning;
  return l ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
Ca(Sb, "getElementRef");
var qC = Object.defineProperty, Vo = (n, a) => qC(n, "name", { value: a, configurable: !0 }), xb = {
  Automatic: "automatic",
  Manual: "manual"
}, kd = "Tabs", [PC, fN] = /* @__PURE__ */ Oa(kd, [
  hb
]), Cb = hb(), [GC, zd] = PC(kd), WC = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Vo(function(a, l) {
    const {
      __scopeTabs: o,
      value: s,
      onValueChange: f,
      defaultValue: d,
      orientation: m = "horizontal",
      dir: h,
      activationMode: p = xb.Automatic,
      ...v
    } = a, y = Qs(h), [S, E] = zr({
      prop: s,
      onChange: f,
      defaultProp: d ?? "",
      caller: kd
    });
    return /* @__PURE__ */ x.jsx(
      GC,
      {
        scope: o,
        baseId: tr(),
        value: S,
        onValueChange: E,
        orientation: m,
        dir: y,
        activationMode: p,
        children: /* @__PURE__ */ x.jsx(
          at.div,
          {
            dir: y,
            "data-orientation": m,
            ...v,
            ref: l
          }
        )
      }
    );
  }, "Tabs")
), VC = "TabsList", XC = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Vo(function(a, l) {
    const { __scopeTabs: o, loop: s = !0, ...f } = a, d = zd(VC, o), m = Cb(o);
    return /* @__PURE__ */ x.jsx(
      jC,
      {
        asChild: !0,
        ...m,
        orientation: d.orientation,
        dir: d.dir,
        loop: s,
        children: /* @__PURE__ */ x.jsx(
          at.div,
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
), QC = "TabsTrigger", FC = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Vo(function(a, l) {
    const { __scopeTabs: o, value: s, disabled: f = !1, ...d } = a, m = zd(QC, o), h = Cb(o), p = jd(m.baseId, s), v = Yd(m.baseId, s), y = s === m.value;
    return /* @__PURE__ */ x.jsx(
      BC,
      {
        asChild: !0,
        ...h,
        focusable: !f,
        active: y,
        children: /* @__PURE__ */ x.jsx(
          at.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": y,
            "aria-controls": v,
            "data-state": y ? "active" : "inactive",
            "data-disabled": f ? "" : void 0,
            disabled: f,
            id: p,
            ...d,
            ref: l,
            onMouseDown: je(a.onMouseDown, (S) => {
              !f && S.button === 0 && S.ctrlKey === !1 ? (S.currentTarget.focus(), m.onValueChange(s)) : S.preventDefault();
            }),
            onKeyDown: je(a.onKeyDown, (S) => {
              f || S.target !== S.currentTarget || [" ", "Enter"].includes(S.key) && m.onValueChange(s);
            }),
            onFocus: je(a.onFocus, () => {
              const S = m.activationMode !== xb.Manual;
              !y && !f && S && m.onValueChange(s);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), ZC = "TabsContent", IC = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Vo(function(a, l) {
    const { __scopeTabs: o, value: s, forceMount: f, children: d, ...m } = a, h = zd(ZC, o), p = jd(h.baseId, s), v = Yd(h.baseId, s), y = s === h.value, S = b.useRef(y);
    return b.useEffect(() => {
      const E = requestAnimationFrame(() => S.current = !1);
      return () => cancelAnimationFrame(E);
    }, []), /* @__PURE__ */ x.jsx(Zs, { present: f || y, children: ({ present: E }) => /* @__PURE__ */ x.jsx(
      at.div,
      {
        "data-state": y ? "active" : "inactive",
        "data-orientation": h.orientation,
        role: "tabpanel",
        "aria-labelledby": p,
        hidden: !E,
        id: v,
        tabIndex: 0,
        ...m,
        ref: l,
        style: {
          ...a.style,
          animationDuration: S.current ? "0s" : void 0
        },
        children: E && d
      }
    ) });
  }, "TabsContent")
);
function jd(n, a) {
  return `${n}-trigger-${a}`;
}
Vo(jd, "makeTriggerId");
function Yd(n, a) {
  return `${n}-content-${a}`;
}
Vo(Yd, "makeContentId");
function KC({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ x.jsx(
    WC,
    {
      "data-slot": "tabs",
      className: Se("flex flex-col gap-2", n),
      ...a
    }
  );
}
function $C({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ x.jsx(
    XC,
    {
      "data-slot": "tabs-list",
      className: Se(
        "bg-background text-muted-foreground inline-flex h-9 w-fit items-center justify-start rounded-none gap-4 border-b border-border",
        n
      ),
      ...a
    }
  );
}
function zy({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ x.jsx(
    FC,
    {
      "data-slot": "tabs-trigger",
      className: Se(
        "cursor-pointer data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n
      ),
      ...a
    }
  );
}
function JC({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ x.jsx(
    IC,
    {
      "data-slot": "tabs-content",
      className: Se("flex-1 outline-none", n),
      ...a
    }
  );
}
const Eb = 6048e5, eE = 864e5, tE = 6e4, nE = 36e5, aE = 1e3, jy = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Ke(n, a) {
  return typeof n == "function" ? n(a) : n && typeof n == "object" && jy in n ? n[jy](a) : n instanceof Date ? new n.constructor(a) : new Date(a);
}
function Be(n, a) {
  return Ke(a || n, n);
}
function Is(n, a, l) {
  const o = Be(n, l?.in);
  return isNaN(a) ? Ke(l?.in || n, NaN) : (a && o.setDate(o.getDate() + a), o);
}
function Hs(n, a, l) {
  const o = Be(n, l?.in);
  if (isNaN(a)) return Ke(n, NaN);
  if (!a)
    return o;
  const s = o.getDate(), f = Ke(n, o.getTime());
  f.setMonth(o.getMonth() + a + 1, 0);
  const d = f.getDate();
  return s >= d ? f : (o.setFullYear(
    f.getFullYear(),
    f.getMonth(),
    s
  ), o);
}
let rE = {};
function Pr() {
  return rE;
}
function An(n, a) {
  const l = Pr(), o = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, s = Be(n, a?.in), f = s.getDay(), d = (f < o ? 7 : 0) + f - o;
  return s.setDate(s.getDate() - d), s.setHours(0, 0, 0, 0), s;
}
function jr(n, a) {
  return An(n, { ...a, weekStartsOn: 1 });
}
function Ob(n, a) {
  const l = Be(n, a?.in), o = l.getFullYear(), s = Ke(l, 0);
  s.setFullYear(o + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const f = jr(s), d = Ke(l, 0);
  d.setFullYear(o, 0, 4), d.setHours(0, 0, 0, 0);
  const m = jr(d);
  return l.getTime() >= f.getTime() ? o + 1 : l.getTime() >= m.getTime() ? o : o - 1;
}
function Bs(n) {
  const a = Be(n), l = new Date(
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
function Gr(n, ...a) {
  const l = Ke.bind(
    null,
    n || a.find((o) => typeof o == "object")
  );
  return a.map(l);
}
function Xl(n, a) {
  const l = Be(n, a?.in);
  return l.setHours(0, 0, 0, 0), l;
}
function Hd(n, a, l) {
  const [o, s] = Gr(
    l?.in,
    n,
    a
  ), f = Xl(o), d = Xl(s), m = +f - Bs(f), h = +d - Bs(d);
  return Math.round((m - h) / eE);
}
function oE(n, a) {
  const l = Ob(n, a), o = Ke(n, 0);
  return o.setFullYear(l, 0, 4), o.setHours(0, 0, 0, 0), jr(o);
}
function lE(n, a, l) {
  return Is(n, a * 7, l);
}
function iE(n, a, l) {
  return Hs(n, a * 12, l);
}
function sE(n, a) {
  let l, o = a?.in;
  return n.forEach((s) => {
    !o && typeof s == "object" && (o = Ke.bind(null, s));
    const f = Be(s, o);
    (!l || l < f || isNaN(+f)) && (l = f);
  }), Ke(o, l || NaN);
}
function cE(n, a) {
  let l, o = a?.in;
  return n.forEach((s) => {
    !o && typeof s == "object" && (o = Ke.bind(null, s));
    const f = Be(s, o);
    (!l || l > f || isNaN(+f)) && (l = f);
  }), Ke(o, l || NaN);
}
function uE(n, a, l) {
  const [o, s] = Gr(
    l?.in,
    n,
    a
  );
  return +Xl(o) == +Xl(s);
}
function Tb(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function Mb(n) {
  return !(!Tb(n) && typeof n != "number" || isNaN(+Be(n)));
}
function Db(n, a, l) {
  const [o, s] = Gr(
    l?.in,
    n,
    a
  ), f = o.getFullYear() - s.getFullYear(), d = o.getMonth() - s.getMonth();
  return f * 12 + d;
}
function fE(n, a) {
  const l = Be(n, a?.in), o = l.getMonth();
  return l.setFullYear(l.getFullYear(), o + 1, 0), l.setHours(23, 59, 59, 999), l;
}
function _b(n, a) {
  const [l, o] = Gr(n, a.start, a.end);
  return { start: l, end: o };
}
function dE(n, a) {
  const { start: l, end: o } = _b(a?.in, n);
  let s = +l > +o;
  const f = s ? +l : +o, d = s ? o : l;
  d.setHours(0, 0, 0, 0), d.setDate(1);
  let m = 1;
  const h = [];
  for (; +d <= f; )
    h.push(Ke(l, d)), d.setMonth(d.getMonth() + m);
  return s ? h.reverse() : h;
}
function mE(n, a) {
  const l = Be(n, a?.in);
  return l.setDate(1), l.setHours(0, 0, 0, 0), l;
}
function hE(n, a) {
  const l = Be(n, a?.in), o = l.getFullYear();
  return l.setFullYear(o + 1, 0, 0), l.setHours(23, 59, 59, 999), l;
}
function Ab(n, a) {
  const l = Be(n, a?.in);
  return l.setFullYear(l.getFullYear(), 0, 1), l.setHours(0, 0, 0, 0), l;
}
function pE(n, a) {
  const { start: l, end: o } = _b(a?.in, n);
  let s = +l > +o;
  const f = s ? +l : +o, d = s ? o : l;
  d.setHours(0, 0, 0, 0), d.setMonth(0, 1);
  let m = 1;
  const h = [];
  for (; +d <= f; )
    h.push(Ke(l, d)), d.setFullYear(d.getFullYear() + m);
  return s ? h.reverse() : h;
}
function Nb(n, a) {
  const l = Pr(), o = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, s = Be(n, a?.in), f = s.getDay(), d = (f < o ? -7 : 0) + 6 - (f - o);
  return s.setDate(s.getDate() + d), s.setHours(23, 59, 59, 999), s;
}
function gE(n, a) {
  return Nb(n, { ...a, weekStartsOn: 1 });
}
const yE = {
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
}, vE = (n, a, l) => {
  let o;
  const s = yE[n];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", a.toString()), l?.addSuffix ? l.comparison && l.comparison > 0 ? "in " + o : o + " ago" : o;
};
function Lo(n) {
  return (a = {}) => {
    const l = a.width ? String(a.width) : n.defaultWidth;
    return n.formats[l] || n.formats[n.defaultWidth];
  };
}
const bE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, wE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, SE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xE = {
  date: Lo({
    formats: bE,
    defaultWidth: "full"
  }),
  time: Lo({
    formats: wE,
    defaultWidth: "full"
  }),
  dateTime: Lo({
    formats: SE,
    defaultWidth: "full"
  })
}, CE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, EE = (n, a, l, o) => CE[n];
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
const OE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, TE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ME = {
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
}, DE = {
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
}, _E = {
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
}, AE = {
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
}, NE = (n, a) => {
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
}, RE = {
  ordinalNumber: NE,
  era: Bn({
    values: OE,
    defaultWidth: "wide"
  }),
  quarter: Bn({
    values: TE,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Bn({
    values: ME,
    defaultWidth: "wide"
  }),
  day: Bn({
    values: DE,
    defaultWidth: "wide"
  }),
  dayPeriod: Bn({
    values: _E,
    defaultWidth: "wide",
    formattingValues: AE,
    defaultFormattingWidth: "wide"
  })
};
function Un(n) {
  return (a, l = {}) => {
    const o = l.width, s = o && n.matchPatterns[o] || n.matchPatterns[n.defaultMatchWidth], f = a.match(s);
    if (!f)
      return null;
    const d = f[0], m = o && n.parsePatterns[o] || n.parsePatterns[n.defaultParseWidth], h = Array.isArray(m) ? zE(m, (y) => y.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      kE(m, (y) => y.test(d))
    );
    let p;
    p = n.valueCallback ? n.valueCallback(h) : h, p = l.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      l.valueCallback(p)
    ) : p;
    const v = a.slice(d.length);
    return { value: p, rest: v };
  };
}
function kE(n, a) {
  for (const l in n)
    if (Object.prototype.hasOwnProperty.call(n, l) && a(n[l]))
      return l;
}
function zE(n, a) {
  for (let l = 0; l < n.length; l++)
    if (a(n[l]))
      return l;
}
function Rb(n) {
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
const jE = /^(\d+)(th|st|nd|rd)?/i, YE = /\d+/i, HE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, BE = {
  any: [/^b/i, /^(a|c)/i]
}, UE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, LE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, qE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, PE = {
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
}, GE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, WE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, VE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, XE = {
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
}, QE = {
  ordinalNumber: Rb({
    matchPattern: jE,
    parsePattern: YE,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Un({
    matchPatterns: HE,
    defaultMatchWidth: "wide",
    parsePatterns: BE,
    defaultParseWidth: "any"
  }),
  quarter: Un({
    matchPatterns: UE,
    defaultMatchWidth: "wide",
    parsePatterns: LE,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Un({
    matchPatterns: qE,
    defaultMatchWidth: "wide",
    parsePatterns: PE,
    defaultParseWidth: "any"
  }),
  day: Un({
    matchPatterns: GE,
    defaultMatchWidth: "wide",
    parsePatterns: WE,
    defaultParseWidth: "any"
  }),
  dayPeriod: Un({
    matchPatterns: VE,
    defaultMatchWidth: "any",
    parsePatterns: XE,
    defaultParseWidth: "any"
  })
}, kr = {
  code: "en-US",
  formatDistance: vE,
  formatLong: xE,
  formatRelative: EE,
  localize: RE,
  match: QE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function FE(n, a) {
  const l = Be(n, a?.in);
  return Hd(l, Ab(l)) + 1;
}
function Ks(n, a) {
  const l = Be(n, a?.in), o = +jr(l) - +oE(l);
  return Math.round(o / Eb) + 1;
}
function Bd(n, a) {
  const l = Be(n, a?.in), o = l.getFullYear(), s = Pr(), f = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, d = Ke(a?.in || n, 0);
  d.setFullYear(o + 1, 0, f), d.setHours(0, 0, 0, 0);
  const m = An(d, a), h = Ke(a?.in || n, 0);
  h.setFullYear(o, 0, f), h.setHours(0, 0, 0, 0);
  const p = An(h, a);
  return +l >= +m ? o + 1 : +l >= +p ? o : o - 1;
}
function ZE(n, a) {
  const l = Pr(), o = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, s = Bd(n, a), f = Ke(a?.in || n, 0);
  return f.setFullYear(s, 0, o), f.setHours(0, 0, 0, 0), An(f, a);
}
function $s(n, a) {
  const l = Be(n, a?.in), o = +An(l, a) - +ZE(l, a);
  return Math.round(o / Eb) + 1;
}
function Ie(n, a) {
  const l = n < 0 ? "-" : "", o = Math.abs(n).toString().padStart(a, "0");
  return l + o;
}
const er = {
  // Year
  y(n, a) {
    const l = n.getFullYear(), o = l > 0 ? l : 1 - l;
    return Ie(a === "yy" ? o % 100 : o, a.length);
  },
  // Month
  M(n, a) {
    const l = n.getMonth();
    return a === "M" ? String(l + 1) : Ie(l + 1, 2);
  },
  // Day of the month
  d(n, a) {
    return Ie(n.getDate(), a.length);
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
    return Ie(n.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(n, a) {
    return Ie(n.getHours(), a.length);
  },
  // Minute
  m(n, a) {
    return Ie(n.getMinutes(), a.length);
  },
  // Second
  s(n, a) {
    return Ie(n.getSeconds(), a.length);
  },
  // Fraction of second
  S(n, a) {
    const l = a.length, o = n.getMilliseconds(), s = Math.trunc(
      o * Math.pow(10, l - 3)
    );
    return Ie(s, a.length);
  }
}, Ro = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Yy = {
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
    const s = Bd(n, o), f = s > 0 ? s : 1 - s;
    if (a === "YY") {
      const d = f % 100;
      return Ie(d, 2);
    }
    return a === "Yo" ? l.ordinalNumber(f, { unit: "year" }) : Ie(f, a.length);
  },
  // ISO week-numbering year
  R: function(n, a) {
    const l = Ob(n);
    return Ie(l, a.length);
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
    return Ie(l, a.length);
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
        return Ie(o, 2);
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
        return Ie(o, 2);
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
        return Ie(o + 1, 2);
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
    return a === "wo" ? l.ordinalNumber(s, { unit: "week" }) : Ie(s, a.length);
  },
  // ISO week of year
  I: function(n, a, l) {
    const o = Ks(n);
    return a === "Io" ? l.ordinalNumber(o, { unit: "week" }) : Ie(o, a.length);
  },
  // Day of the month
  d: function(n, a, l) {
    return a === "do" ? l.ordinalNumber(n.getDate(), { unit: "date" }) : er.d(n, a);
  },
  // Day of year
  D: function(n, a, l) {
    const o = FE(n);
    return a === "Do" ? l.ordinalNumber(o, { unit: "dayOfYear" }) : Ie(o, a.length);
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
        return Ie(f, 2);
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
        return Ie(f, a.length);
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
        return Ie(s, a.length);
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
    return a === "Ko" ? l.ordinalNumber(o, { unit: "hour" }) : Ie(o, a.length);
  },
  // Hour [1-24]
  k: function(n, a, l) {
    let o = n.getHours();
    return o === 0 && (o = 24), a === "ko" ? l.ordinalNumber(o, { unit: "hour" }) : Ie(o, a.length);
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
        return By(o);
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
        return By(o);
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
        return "GMT" + Hy(o, ":");
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
        return "GMT" + Hy(o, ":");
      default:
        return "GMT" + Rr(o, ":");
    }
  },
  // Seconds timestamp
  t: function(n, a, l) {
    const o = Math.trunc(+n / 1e3);
    return Ie(o, a.length);
  },
  // Milliseconds timestamp
  T: function(n, a, l) {
    return Ie(+n, a.length);
  }
};
function Hy(n, a = "") {
  const l = n > 0 ? "-" : "+", o = Math.abs(n), s = Math.trunc(o / 60), f = o % 60;
  return f === 0 ? l + String(s) : l + String(s) + a + Ie(f, 2);
}
function By(n, a) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + Ie(Math.abs(n) / 60, 2) : Rr(n, a);
}
function Rr(n, a = "") {
  const l = n > 0 ? "-" : "+", o = Math.abs(n), s = Ie(Math.trunc(o / 60), 2), f = Ie(o % 60, 2);
  return l + s + a + f;
}
const Uy = (n, a) => {
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
}, kb = (n, a) => {
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
}, IE = (n, a) => {
  const l = n.match(/(P+)(p+)?/) || [], o = l[1], s = l[2];
  if (!s)
    return Uy(n, a);
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
  return f.replace("{{date}}", Uy(o, a)).replace("{{time}}", kb(s, a));
}, id = {
  p: kb,
  P: IE
}, KE = /^D+$/, $E = /^Y+$/, JE = ["D", "DD", "YY", "YYYY"];
function zb(n) {
  return KE.test(n);
}
function jb(n) {
  return $E.test(n);
}
function sd(n, a, l) {
  const o = eO(n, a, l);
  if (console.warn(o), JE.includes(n)) throw new RangeError(o);
}
function eO(n, a, l) {
  const o = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${o} to the input \`${l}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const tO = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, nO = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, aO = /^'([^]*?)'?$/, rO = /''/g, oO = /[a-zA-Z]/;
function Wt(n, a, l) {
  const o = Pr(), s = l?.locale ?? o.locale ?? kr, f = l?.firstWeekContainsDate ?? l?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, d = l?.weekStartsOn ?? l?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, m = Be(n, l?.in);
  if (!Mb(m))
    throw new RangeError("Invalid time value");
  let h = a.match(nO).map((v) => {
    const y = v[0];
    if (y === "p" || y === "P") {
      const S = id[y];
      return S(v, s.formatLong);
    }
    return v;
  }).join("").match(tO).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const y = v[0];
    if (y === "'")
      return { isToken: !1, value: lO(v) };
    if (Yy[y])
      return { isToken: !0, value: v };
    if (y.match(oO))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: v };
  });
  s.localize.preprocessor && (h = s.localize.preprocessor(m, h));
  const p = {
    firstWeekContainsDate: f,
    weekStartsOn: d,
    locale: s
  };
  return h.map((v) => {
    if (!v.isToken) return v.value;
    const y = v.value;
    (!l?.useAdditionalWeekYearTokens && jb(y) || !l?.useAdditionalDayOfYearTokens && zb(y)) && sd(y, a, String(n));
    const S = Yy[y[0]];
    return S(m, y, s.localize, p);
  }).join("");
}
function lO(n) {
  const a = n.match(aO);
  return a ? a[1].replace(rO, "'") : n;
}
function Yb(n, a) {
  const l = Be(n, a?.in), o = l.getFullYear(), s = l.getMonth(), f = Ke(l, 0);
  return f.setFullYear(o, s + 1, 0), f.setHours(0, 0, 0, 0), f.getDate();
}
function iO() {
  return Object.assign({}, Pr());
}
function sO(n, a) {
  const l = Be(n, a?.in).getDay();
  return l === 0 ? 7 : l;
}
function cO(n, a) {
  return Be(n, a?.in).getMonth();
}
function uO(n, a) {
  return Be(n, a?.in).getFullYear();
}
function fO(n, a) {
  return +Be(n) > +Be(a);
}
function dO(n, a) {
  return +Be(n) < +Be(a);
}
function mO(n, a) {
  const l = hO(a) ? new a(0) : Ke(a, 0);
  return l.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), l.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), l;
}
function hO(n) {
  return typeof n == "function" && n.prototype?.constructor === n;
}
const pO = 10;
class Hb {
  subPriority = 0;
  validate(a, l) {
    return !0;
  }
}
class gO extends Hb {
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
class yO extends Hb {
  priority = pO;
  subPriority = -1;
  constructor(a, l) {
    super(), this.context = a || ((o) => Ke(l, o));
  }
  set(a, l) {
    return l.timestampIsSet ? a : Ke(a, mO(a, this.context));
  }
}
class Ve {
  run(a, l, o, s) {
    const f = this.parse(a, l, o, s);
    return f ? {
      setter: new gO(
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
class vO extends Ve {
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
function st(n, a) {
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
    value: o * (s * nE + f * tE + d * aE),
    rest: a.slice(l[0].length)
  };
}
function Bb(n) {
  return st(yt.anyDigitsSigned, n);
}
function dt(n, a) {
  switch (n) {
    case 1:
      return st(yt.singleDigit, a);
    case 2:
      return st(yt.twoDigits, a);
    case 3:
      return st(yt.threeDigits, a);
    case 4:
      return st(yt.fourDigits, a);
    default:
      return st(new RegExp("^\\d{1," + n + "}"), a);
  }
}
function Us(n, a) {
  switch (n) {
    case 1:
      return st(yt.singleDigitSigned, a);
    case 2:
      return st(yt.twoDigitsSigned, a);
    case 3:
      return st(yt.threeDigitsSigned, a);
    case 4:
      return st(yt.fourDigitsSigned, a);
    default:
      return st(new RegExp("^-?\\d{1," + n + "}"), a);
  }
}
function Ud(n) {
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
function Ub(n, a) {
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
function Lb(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class bO extends Ve {
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
      const d = Ub(
        o.year,
        s
      );
      return a.setFullYear(d, 0, 1), a.setHours(0, 0, 0, 0), a;
    }
    const f = !("era" in l) || l.era === 1 ? o.year : 1 - o.year;
    return a.setFullYear(f, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class wO extends Ve {
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
    const f = Bd(a, s);
    if (o.isTwoDigitYear) {
      const m = Ub(
        o.year,
        f
      );
      return a.setFullYear(
        m,
        0,
        s.firstWeekContainsDate
      ), a.setHours(0, 0, 0, 0), An(a, s);
    }
    const d = !("era" in l) || l.era === 1 ? o.year : 1 - o.year;
    return a.setFullYear(d, 0, s.firstWeekContainsDate), a.setHours(0, 0, 0, 0), An(a, s);
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
class SO extends Ve {
  priority = 130;
  parse(a, l) {
    return Us(l === "R" ? 4 : l.length, a);
  }
  set(a, l, o) {
    const s = Ke(a, 0);
    return s.setFullYear(o, 0, 4), s.setHours(0, 0, 0, 0), jr(s);
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
class xO extends Ve {
  priority = 130;
  parse(a, l) {
    return Us(l === "u" ? 4 : l.length, a);
  }
  set(a, l, o) {
    return a.setFullYear(o, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class CO extends Ve {
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
class EO extends Ve {
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
class OO extends Ve {
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
          st(yt.month, a),
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
class TO extends Ve {
  priority = 110;
  parse(a, l, o) {
    const s = (f) => f - 1;
    switch (l) {
      // 1, 2, ..., 12
      case "L":
        return vt(
          st(yt.month, a),
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
function MO(n, a, l) {
  const o = Be(n, l?.in), s = $s(o, l) - a;
  return o.setDate(o.getDate() - s * 7), Be(o, l?.in);
}
class DO extends Ve {
  priority = 100;
  parse(a, l, o) {
    switch (l) {
      case "w":
        return st(yt.week, a);
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
    return An(MO(a, o, s), s);
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
function _O(n, a, l) {
  const o = Be(n, l?.in), s = Ks(o, l) - a;
  return o.setDate(o.getDate() - s * 7), o;
}
class AO extends Ve {
  priority = 100;
  parse(a, l, o) {
    switch (l) {
      case "I":
        return st(yt.week, a);
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
    return jr(_O(a, o));
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
const NO = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], RO = [
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
class kO extends Ve {
  priority = 90;
  subPriority = 1;
  parse(a, l, o) {
    switch (l) {
      case "d":
        return st(yt.date, a);
      case "do":
        return o.ordinalNumber(a, { unit: "date" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    const o = a.getFullYear(), s = Lb(o), f = a.getMonth();
    return s ? l >= 1 && l <= RO[f] : l >= 1 && l <= NO[f];
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
class zO extends Ve {
  priority = 90;
  subpriority = 1;
  parse(a, l, o) {
    switch (l) {
      case "D":
      case "DD":
        return st(yt.dayOfYear, a);
      case "Do":
        return o.ordinalNumber(a, { unit: "date" });
      default:
        return dt(l.length, a);
    }
  }
  validate(a, l) {
    const o = a.getFullYear();
    return Lb(o) ? l >= 1 && l <= 366 : l >= 1 && l <= 365;
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
function Ld(n, a, l) {
  const o = Pr(), s = l?.weekStartsOn ?? l?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, f = Be(n, l?.in), d = f.getDay(), h = (a % 7 + 7) % 7, p = 7 - s, v = a < 0 || a > 6 ? a - (d + p) % 7 : (h + p) % 7 - (d + p) % 7;
  return Is(f, v, l);
}
class jO extends Ve {
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
    return a = Ld(a, o, s), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class YO extends Ve {
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
    return a = Ld(a, o, s), a.setHours(0, 0, 0, 0), a;
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
class HO extends Ve {
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
    return a = Ld(a, o, s), a.setHours(0, 0, 0, 0), a;
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
function BO(n, a, l) {
  const o = Be(n, l?.in), s = sO(o, l), f = a - s;
  return Is(o, f, l);
}
class UO extends Ve {
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
    return a = BO(a, o), a.setHours(0, 0, 0, 0), a;
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
class LO extends Ve {
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
    return a.setHours(Ud(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class qO extends Ve {
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
    return a.setHours(Ud(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class PO extends Ve {
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
    return a.setHours(Ud(o), 0, 0, 0), a;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class GO extends Ve {
  priority = 70;
  parse(a, l, o) {
    switch (l) {
      case "h":
        return st(yt.hour12h, a);
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
class WO extends Ve {
  priority = 70;
  parse(a, l, o) {
    switch (l) {
      case "H":
        return st(yt.hour23h, a);
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
class VO extends Ve {
  priority = 70;
  parse(a, l, o) {
    switch (l) {
      case "K":
        return st(yt.hour11h, a);
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
class XO extends Ve {
  priority = 70;
  parse(a, l, o) {
    switch (l) {
      case "k":
        return st(yt.hour24h, a);
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
class QO extends Ve {
  priority = 60;
  parse(a, l, o) {
    switch (l) {
      case "m":
        return st(yt.minute, a);
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
class FO extends Ve {
  priority = 50;
  parse(a, l, o) {
    switch (l) {
      case "s":
        return st(yt.second, a);
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
class ZO extends Ve {
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
class IO extends Ve {
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
      a.getTime() - Bs(a) - o
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class KO extends Ve {
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
      a.getTime() - Bs(a) - o
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class $O extends Ve {
  priority = 40;
  parse(a) {
    return Bb(a);
  }
  set(a, l, o) {
    return [Ke(a, o * 1e3), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
class JO extends Ve {
  priority = 20;
  parse(a) {
    return Bb(a);
  }
  set(a, l, o) {
    return [Ke(a, o), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
const eT = {
  G: new vO(),
  y: new bO(),
  Y: new wO(),
  R: new SO(),
  u: new xO(),
  Q: new CO(),
  q: new EO(),
  M: new OO(),
  L: new TO(),
  w: new DO(),
  I: new AO(),
  d: new kO(),
  D: new zO(),
  E: new jO(),
  e: new YO(),
  c: new HO(),
  i: new UO(),
  a: new LO(),
  b: new qO(),
  B: new PO(),
  h: new GO(),
  H: new WO(),
  K: new VO(),
  k: new XO(),
  m: new QO(),
  s: new FO(),
  S: new ZO(),
  X: new IO(),
  x: new KO(),
  t: new $O(),
  T: new JO()
}, tT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, nT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, aT = /^'([^]*?)'?$/, rT = /''/g, oT = /\S/, lT = /[a-zA-Z]/;
function qb(n, a, l, o) {
  const s = () => Ke(l, NaN), f = iO(), d = f.locale ?? kr, m = f.firstWeekContainsDate ?? f.locale?.options?.firstWeekContainsDate ?? 1, h = f.weekStartsOn ?? f.locale?.options?.weekStartsOn ?? 0, p = {
    firstWeekContainsDate: m,
    weekStartsOn: h,
    locale: d
  }, v = [new yO(o?.in, l)], y = a.match(nT).map((C) => {
    const M = C[0];
    if (M in id) {
      const R = id[M];
      return R(C, d.formatLong);
    }
    return C;
  }).join("").match(tT), S = [];
  for (let C of y) {
    jb(C) && sd(C, a, n), zb(C) && sd(C, a, n);
    const M = C[0], R = eT[M];
    if (R) {
      const { incompatibleTokens: _ } = R;
      if (Array.isArray(_)) {
        const H = S.find(
          (z) => _.includes(z.token) || z.token === M
        );
        if (H)
          throw new RangeError(
            `The format string mustn't contain \`${H.fullToken}\` and \`${C}\` at the same time`
          );
      } else if (R.incompatibleTokens === "*" && S.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${C}\` and any other token at the same time`
        );
      S.push({ token: M, fullToken: C });
      const k = R.run(
        n,
        C,
        d.match,
        p
      );
      if (!k)
        return s();
      v.push(k.setter), n = k.rest;
    } else {
      if (M.match(lT))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + M + "`"
        );
      if (C === "''" ? C = "'" : M === "'" && (C = iT(C)), n.indexOf(C) === 0)
        n = n.slice(C.length);
      else
        return s();
    }
  }
  if (n.length > 0 && oT.test(n))
    return s();
  const E = v.map((C) => C.priority).sort((C, M) => M - C).filter((C, M, R) => R.indexOf(C) === M).map(
    (C) => v.filter((M) => M.priority === C).sort((M, R) => R.subPriority - M.subPriority)
  ).map((C) => C[0]);
  let T = Be(l, o?.in);
  if (isNaN(+T)) return s();
  const O = {};
  for (const C of E) {
    if (!C.validate(T, p))
      return s();
    const M = C.set(T, O, p);
    Array.isArray(M) ? (T = M[0], Object.assign(O, M[1])) : T = M;
  }
  return T;
}
function iT(n) {
  return n.match(aT)[1].replace(rT, "'");
}
function sT(n, a, l) {
  const [o, s] = Gr(
    l?.in,
    n,
    a
  );
  return +An(o, l) == +An(s, l);
}
function cT(n, a, l) {
  const [o, s] = Gr(
    l?.in,
    n,
    a
  );
  return o.getFullYear() === s.getFullYear() && o.getMonth() === s.getMonth();
}
function uT(n, a, l) {
  const [o, s] = Gr(
    l?.in,
    n,
    a
  );
  return o.getFullYear() === s.getFullYear();
}
function fT(n, a, l) {
  const o = Be(n, l?.in), s = o.getFullYear(), f = o.getDate(), d = Ke(n, 0);
  d.setFullYear(s, a, 15), d.setHours(0, 0, 0, 0);
  const m = Yb(d);
  return o.setMonth(a, Math.min(f, m)), o;
}
function dT(n, a, l) {
  const o = Be(n, l?.in);
  return isNaN(+o) ? Ke(n, NaN) : (o.setFullYear(a), o);
}
const mT = {
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
}, hT = (n, a, l) => {
  let o;
  const s = mT[n];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", String(a)), l?.addSuffix ? l.comparison && l.comparison > 0 ? o + "内" : o + "前" : o;
}, pT = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, gT = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, yT = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, vT = {
  date: Lo({
    formats: pT,
    defaultWidth: "full"
  }),
  time: Lo({
    formats: gT,
    defaultWidth: "full"
  }),
  dateTime: Lo({
    formats: yT,
    defaultWidth: "full"
  })
};
function Ly(n, a, l) {
  const o = "eeee p";
  return sT(n, a, l) ? o : n.getTime() > a.getTime() ? "'下个'" + o : "'上个'" + o;
}
const bT = {
  lastWeek: Ly,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Ly,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, wT = (n, a, l, o) => {
  const s = bT[n];
  return typeof s == "function" ? s(a, l, o) : s;
}, ST = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, xT = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, CT = {
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
}, ET = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, OT = {
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
}, TT = {
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
}, MT = (n, a) => {
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
}, DT = {
  ordinalNumber: MT,
  era: Bn({
    values: ST,
    defaultWidth: "wide"
  }),
  quarter: Bn({
    values: xT,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Bn({
    values: CT,
    defaultWidth: "wide"
  }),
  day: Bn({
    values: ET,
    defaultWidth: "wide"
  }),
  dayPeriod: Bn({
    values: OT,
    defaultWidth: "wide",
    formattingValues: TT,
    defaultFormattingWidth: "wide"
  })
}, _T = /^(第\s*)?\d+(日|时|分|秒)?/i, AT = /\d+/i, NT = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, RT = {
  any: [/^(前)/i, /^(公元)/i]
}, kT = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, zT = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, jT = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i
}, YT = {
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
}, HT = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, BT = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, UT = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, LT = {
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
}, qT = {
  ordinalNumber: Rb({
    matchPattern: _T,
    parsePattern: AT,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Un({
    matchPatterns: NT,
    defaultMatchWidth: "wide",
    parsePatterns: RT,
    defaultParseWidth: "any"
  }),
  quarter: Un({
    matchPatterns: kT,
    defaultMatchWidth: "wide",
    parsePatterns: zT,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Un({
    matchPatterns: jT,
    defaultMatchWidth: "wide",
    parsePatterns: YT,
    defaultParseWidth: "any"
  }),
  day: Un({
    matchPatterns: HT,
    defaultMatchWidth: "wide",
    parsePatterns: BT,
    defaultParseWidth: "any"
  }),
  dayPeriod: Un({
    matchPatterns: UT,
    defaultMatchWidth: "any",
    parsePatterns: LT,
    defaultParseWidth: "any"
  })
}, PT = {
  code: "zh-CN",
  formatDistance: hT,
  formatLong: vT,
  formatRelative: wT,
  localize: DT,
  match: qT,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function GT(n, a, l = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: n,
    timeZoneName: l
  }).format(a).split(/\s/g).slice(2).join(" ");
}
const WT = {}, Vl = {};
function ya(n, a) {
  try {
    const o = (WT[n] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: n,
      timeZoneName: "longOffset"
    }).format)(a).split("GMT")[1];
    return o in Vl ? Vl[o] : qy(o, o.split(":"));
  } catch {
    if (n in Vl) return Vl[n];
    const l = n?.match(VT);
    return l ? qy(n, l.slice(1)) : NaN;
  }
}
const VT = /([+-]\d\d):?(\d\d)?/;
function qy(n, a) {
  const l = +(a[0] || 0), o = +(a[1] || 0), s = +(a[2] || 0) / 60;
  return Vl[n] = l * 60 + o > 0 ? l * 60 + o + s : l * 60 - o - s;
}
class Gn extends Date {
  //#region static
  constructor(...a) {
    super(), a.length > 1 && typeof a[a.length - 1] == "string" && (this.timeZone = a.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(ya(this.timeZone, this)) ? this.setTime(NaN) : a.length ? typeof a[0] == "number" && (a.length === 1 || a.length === 2 && typeof a[1] != "number") ? this.setTime(a[0]) : typeof a[0] == "string" ? this.setTime(+new Date(a[0])) : a[0] instanceof Date ? this.setTime(+a[0]) : (this.setTime(+new Date(...a)), Pb(this, a)) : this.setTime(Date.now());
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
    return Date.prototype.setTime.apply(this, arguments), Ls(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](a) {
    return new Gn(+new Date(a), this.timeZone);
  }
  //#endregion
}
const Py = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((n) => {
  if (!Py.test(n)) return;
  const a = n.replace(Py, "$1UTC");
  Gn.prototype[a] && (n.startsWith("get") ? Gn.prototype[n] = function() {
    return this.internal[a]();
  } : (Gn.prototype[n] = function() {
    return Date.prototype[a].apply(this.internal, arguments), XT(this), +this;
  }, Gn.prototype[a] = function() {
    return Date.prototype[a].apply(this, arguments), Ls(this), +this;
  }));
});
function Ls(n) {
  n.internal.setTime(+n), n.internal.setUTCSeconds(n.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-ya(n.timeZone, n) * 60));
}
function XT(n) {
  Date.prototype.setFullYear.call(n, n.internal.getUTCFullYear(), n.internal.getUTCMonth(), n.internal.getUTCDate()), Date.prototype.setHours.call(n, n.internal.getUTCHours(), n.internal.getUTCMinutes(), n.internal.getUTCSeconds(), n.internal.getUTCMilliseconds()), Pb(n);
}
function Pb(n, a) {
  const l = Array.isArray(a) ? QT(a) : +n.internal, o = ya(n.timeZone, n), s = o > 0 ? Math.floor(o) : Math.ceil(o), f = /* @__PURE__ */ new Date(+n);
  f.setUTCHours(f.getUTCHours() - 1);
  const d = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset(), m = -(/* @__PURE__ */ new Date(+f)).getTimezoneOffset(), h = d - m;
  let p = d;
  if (h && d !== s) {
    const Q = Date.prototype.getHours.apply(n), $ = Array.isArray(a) ? a[3] || 0 : n.internal.getUTCHours();
    if (Q !== $) {
      const te = /* @__PURE__ */ new Date(+n), ee = d - s;
      ee && te.setUTCMinutes(te.getUTCMinutes() + ee);
      const ie = ya(n.timeZone, te);
      (ie > 0 ? Math.floor(ie) : Math.ceil(ie)) === s && (p = m);
    }
  }
  const v = p - s;
  v && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + v);
  const y = /* @__PURE__ */ new Date(+n);
  y.setUTCSeconds(0);
  const S = d > 0 ? y.getSeconds() : (y.getSeconds() - 60) % 60, E = Math.round(-(ya(n.timeZone, n) * 60)) % 60;
  (E || S) && Date.prototype.setUTCSeconds.call(n, Date.prototype.getUTCSeconds.call(n) + E + S);
  const T = ya(n.timeZone, n), O = T > 0 ? Math.floor(T) : Math.ceil(T), M = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset() - O, R = O !== s, _ = M - v, k = O - s, H = l - O * 60 * 1e3, z = k > 0 && Gy(n) - l === k * 60 * 1e3 && Gy(n, H) !== l;
  if (R && _ && !z) {
    Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + _);
    const Q = ya(n.timeZone, n), $ = Q > 0 ? Math.floor(Q) : Math.ceil(Q), te = O - $;
    te && _ < 0 && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + te);
  }
  Ls(n);
  const U = (a ? l : l + E * 1e3) - +n.internal;
  U && Math.abs(U) < 1800 * 1e3 && (Date.prototype.setTime.call(n, +n + U), Ls(n));
}
function QT(n) {
  return Date.UTC(n[0], n.length > 1 ? n[1] : 0, n.length > 2 ? n[2] : 1, ...n.slice(3));
}
function Gy(n, a) {
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
    return `${a} GMT${l}${o}${s} (${GT(this.timeZone, this)})`;
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
const Wy = 5, FT = 4;
function ZT(n, a) {
  const l = a.startOfMonth(n), o = l.getDay() > 0 ? l.getDay() : 7, s = a.addDays(n, -o + 1), f = a.addDays(s, Wy * 7 - 1);
  return a.getMonth(n) === a.getMonth(f) ? Wy : FT;
}
function Gb(n, a) {
  const l = a.startOfMonth(n), o = l.getDay();
  return o === 1 ? l : o === 0 ? a.addDays(l, -6) : a.addDays(l, -1 * (o - 1));
}
function IT(n, a) {
  const l = Gb(n, a), o = ZT(n, a);
  return a.addDays(l, o * 7 - 1);
}
const Wb = {
  ...kr,
  labels: {
    labelDayButton: (n, a, l, o) => {
      let s;
      o && typeof o.format == "function" ? s = o.format.bind(o) : s = (d, m) => Wt(d, m, { locale: kr, ...l });
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
      return l && typeof l.format == "function" ? o = l.format.bind(l) : o = (s, f) => Wt(s, f, { locale: kr, ...a }), o(n, "LLLL yyyy");
    },
    labelGridcell: (n, a, l, o) => {
      let s;
      o && typeof o.format == "function" ? s = o.format.bind(o) : s = (d, m) => Wt(d, m, { locale: kr, ...l });
      let f = s(n, "PPPP");
      return a?.today && (f = `Today, ${f}`), f;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (n, a, l) => {
      let o;
      return l && typeof l.format == "function" ? o = l.format.bind(l) : o = (s, f) => Wt(s, f, { locale: kr, ...a }), o(n, "cccc");
    }
  }
};
class Bt {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(a, l) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Lt.tz(this.options.timeZone) : new this.Date(), this.newDate = (o, s, f) => this.overrides?.newDate ? this.overrides.newDate(o, s, f) : this.options.timeZone ? new Lt(o, s, f, this.options.timeZone) : new Date(o, s, f), this.addDays = (o, s) => this.overrides?.addDays ? this.overrides.addDays(o, s) : Is(o, s), this.addMonths = (o, s) => this.overrides?.addMonths ? this.overrides.addMonths(o, s) : Hs(o, s), this.addWeeks = (o, s) => this.overrides?.addWeeks ? this.overrides.addWeeks(o, s) : lE(o, s), this.addYears = (o, s) => this.overrides?.addYears ? this.overrides.addYears(o, s) : iE(o, s), this.differenceInCalendarDays = (o, s) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(o, s) : Hd(o, s), this.differenceInCalendarMonths = (o, s) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(o, s) : Db(o, s), this.eachMonthOfInterval = (o) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(o) : dE(o), this.eachYearOfInterval = (o) => {
      const s = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(o) : pE(o), f = new Set(s.map((m) => this.getYear(m)));
      if (f.size === s.length)
        return s;
      const d = [];
      return f.forEach((m) => {
        d.push(new Date(m, 0, 1));
      }), d;
    }, this.endOfBroadcastWeek = (o) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(o) : IT(o, this), this.endOfISOWeek = (o) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(o) : gE(o), this.endOfMonth = (o) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(o) : fE(o), this.endOfWeek = (o, s) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(o, s) : Nb(o, this.options), this.endOfYear = (o) => this.overrides?.endOfYear ? this.overrides.endOfYear(o) : hE(o), this.format = (o, s, f) => {
      const d = this.overrides?.format ? this.overrides.format(o, s, this.options) : Wt(o, s, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(d) : d;
    }, this.getISOWeek = (o) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(o) : Ks(o), this.getMonth = (o, s) => this.overrides?.getMonth ? this.overrides.getMonth(o, this.options) : cO(o, this.options), this.getYear = (o, s) => this.overrides?.getYear ? this.overrides.getYear(o, this.options) : uO(o, this.options), this.getWeek = (o, s) => this.overrides?.getWeek ? this.overrides.getWeek(o, this.options) : $s(o, this.options), this.isAfter = (o, s) => this.overrides?.isAfter ? this.overrides.isAfter(o, s) : fO(o, s), this.isBefore = (o, s) => this.overrides?.isBefore ? this.overrides.isBefore(o, s) : dO(o, s), this.isDate = (o) => this.overrides?.isDate ? this.overrides.isDate(o) : Tb(o), this.isSameDay = (o, s) => this.overrides?.isSameDay ? this.overrides.isSameDay(o, s) : uE(o, s), this.isSameMonth = (o, s) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(o, s) : cT(o, s), this.isSameYear = (o, s) => this.overrides?.isSameYear ? this.overrides.isSameYear(o, s) : uT(o, s), this.max = (o) => this.overrides?.max ? this.overrides.max(o) : sE(o), this.min = (o) => this.overrides?.min ? this.overrides.min(o) : cE(o), this.setMonth = (o, s) => this.overrides?.setMonth ? this.overrides.setMonth(o, s) : fT(o, s), this.setYear = (o, s) => this.overrides?.setYear ? this.overrides.setYear(o, s) : dT(o, s), this.startOfBroadcastWeek = (o, s) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(o, this) : Gb(o, this), this.startOfDay = (o) => this.overrides?.startOfDay ? this.overrides.startOfDay(o) : Xl(o), this.startOfISOWeek = (o) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(o) : jr(o), this.startOfMonth = (o) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(o) : mE(o), this.startOfWeek = (o, s) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(o, this.options) : An(o, this.options), this.startOfYear = (o) => this.overrides?.startOfYear ? this.overrides.startOfYear(o) : Ab(o), this.options = { locale: Wb, ...a }, this.overrides = l;
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
    return a && Bt.yearFirstLocales.has(a) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(a) {
    const { locale: l, timeZone: o, numerals: s } = this.options, f = l?.code;
    if (f && Bt.yearFirstLocales.has(f))
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
Bt.yearFirstLocales = /* @__PURE__ */ new Set([
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
const Qn = new Bt(), KT = {
  ...PT,
  labels: {
    labelDayButton: (n, a, l, o) => {
      let f = (o ?? new Bt(l)).format(n, "PPPP");
      return a.today && (f = `今天，${f}`), a.selected && (f = `${f}，已选择`), f;
    },
    labelMonthDropdown: "选择月份",
    labelNext: "前往下个月",
    labelPrevious: "前往上个月",
    labelWeekNumber: (n) => `第 ${n} 周`,
    labelYearDropdown: "选择年份",
    labelGrid: (n, a, l) => (l ?? new Bt(a)).formatMonthYear(n),
    labelGridcell: (n, a, l, o) => {
      let f = (o ?? new Bt(l)).format(n, "PPPP");
      return a?.today && (f = `今天，${f}`), f;
    },
    labelNav: "导航栏",
    labelWeekNumberHeader: "周数",
    labelWeekday: (n, a, l) => (l ?? new Bt(a)).format(n, "cccc")
  }
};
const $T = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), JT = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, l, o) => o ? o.toUpperCase() : l.toLowerCase()
), Vy = (n) => {
  const a = JT(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, Vb = (...n) => n.filter((a, l, o) => !!a && a.trim() !== "" && o.indexOf(a) === l).join(" ").trim(), eM = (n) => {
  for (const a in n)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
var tM = {
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
const nM = b.forwardRef(
  ({
    color: n = "currentColor",
    size: a = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: f,
    iconNode: d,
    ...m
  }, h) => b.createElement(
    "svg",
    {
      ref: h,
      ...tM,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: o ? Number(l) * 24 / Number(a) : l,
      className: Vb("lucide", s),
      ...!f && !eM(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([p, v]) => b.createElement(p, v)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
const Fn = (n, a) => {
  const l = b.forwardRef(
    ({ className: o, ...s }, f) => b.createElement(nM, {
      ref: f,
      iconNode: a,
      className: Vb(
        `lucide-${$T(Vy(n))}`,
        `lucide-${n}`,
        o
      ),
      ...s
    })
  );
  return l.displayName = Vy(n), l;
};
const aM = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], rM = Fn("calendar", aM);
const oM = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Xb = Fn("check", oM);
const lM = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], qd = Fn("chevron-down", lM);
const iM = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Qb = Fn("chevron-left", iM);
const sM = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Fb = Fn("chevron-right", sM);
const cM = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], uM = Fn("chevron-up", cM);
const fM = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], dM = Fn("clock-3", fM);
const mM = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], hM = Fn("ellipsis", mM);
const pM = [["path", { d: "M5 12h14", key: "1ays0h" }]], gM = Fn("minus", pM);
const yM = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], vM = Fn("x", yM);
class Zb {
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
class bM {
  constructor(a, l) {
    this.date = a, this.weeks = l;
  }
}
class wM {
  constructor(a, l) {
    this.days = l, this.weekNumber = a;
  }
}
function SM(n) {
  return se.createElement("button", { ...n });
}
function xM(n) {
  return se.createElement("span", { ...n });
}
function CM(n) {
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
function EM(n) {
  const { day: a, modifiers: l, ...o } = n;
  return se.createElement("td", { ...o });
}
function OM(n) {
  const { day: a, modifiers: l, ...o } = n, s = se.useRef(null);
  return se.useEffect(() => {
    l.focused && s.current?.focus();
  }, [l.focused]), se.createElement("button", { ref: s, ...o });
}
var pe;
(function(n) {
  n.Root = "root", n.Chevron = "chevron", n.Day = "day", n.DayButton = "day_button", n.CaptionLabel = "caption_label", n.Dropdowns = "dropdowns", n.Dropdown = "dropdown", n.DropdownRoot = "dropdown_root", n.Footer = "footer", n.MonthGrid = "month_grid", n.MonthCaption = "month_caption", n.MonthsDropdown = "months_dropdown", n.Month = "month", n.Months = "months", n.Nav = "nav", n.NextMonthButton = "button_next", n.PreviousMonthButton = "button_previous", n.Week = "week", n.Weeks = "weeks", n.Weekday = "weekday", n.Weekdays = "weekdays", n.WeekNumber = "week_number", n.WeekNumberHeader = "week_number_header", n.YearsDropdown = "years_dropdown";
})(pe || (pe = {}));
var it;
(function(n) {
  n.disabled = "disabled", n.hidden = "hidden", n.outside = "outside", n.focused = "focused", n.today = "today";
})(it || (it = {}));
var Mn;
(function(n) {
  n.range_end = "range_end", n.range_middle = "range_middle", n.range_start = "range_start", n.selected = "selected";
})(Mn || (Mn = {}));
var ln;
(function(n) {
  n.weeks_before_enter = "weeks_before_enter", n.weeks_before_exit = "weeks_before_exit", n.weeks_after_enter = "weeks_after_enter", n.weeks_after_exit = "weeks_after_exit", n.caption_after_enter = "caption_after_enter", n.caption_after_exit = "caption_after_exit", n.caption_before_enter = "caption_before_enter", n.caption_before_exit = "caption_before_exit";
})(ln || (ln = {}));
function TM(n) {
  const { options: a, className: l, components: o, classNames: s, ...f } = n, d = [s[pe.Dropdown], l].join(" "), m = a?.find(({ value: h }) => h === f.value);
  return se.createElement(
    "span",
    { "data-disabled": f.disabled, className: s[pe.DropdownRoot] },
    se.createElement(o.Select, { className: d, ...f }, a?.map(({ value: h, label: p, disabled: v }) => se.createElement(o.Option, { key: h, value: h, disabled: v }, p))),
    se.createElement(
      "span",
      { className: s[pe.CaptionLabel], "aria-hidden": !0 },
      m?.label,
      se.createElement(o.Chevron, { orientation: "down", size: 18, className: s[pe.Chevron] })
    )
  );
}
function MM(n) {
  return se.createElement("div", { ...n });
}
function DM(n) {
  return se.createElement("div", { ...n });
}
function _M(n) {
  const { calendarMonth: a, displayIndex: l, ...o } = n;
  return se.createElement("div", { ...o }, n.children);
}
function AM(n) {
  const { calendarMonth: a, displayIndex: l, ...o } = n;
  return se.createElement("div", { ...o });
}
function NM(n) {
  return se.createElement("table", { ...n });
}
function RM(n) {
  return se.createElement("div", { ...n });
}
const Ib = b.createContext(void 0);
function $l() {
  const n = b.useContext(Ib);
  if (n === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return n;
}
function kM(n) {
  const { components: a } = $l();
  return se.createElement(a.Dropdown, { ...n });
}
function zM(n) {
  const { onPreviousClick: a, onNextClick: l, previousMonth: o, nextMonth: s, ...f } = n, { components: d, classNames: m, labels: { labelPrevious: h, labelNext: p } } = $l(), v = b.useCallback((S) => {
    s && l?.(S);
  }, [s, l]), y = b.useCallback((S) => {
    o && a?.(S);
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
      { type: "button", className: m[pe.NextMonthButton], tabIndex: s ? void 0 : -1, "aria-disabled": s ? void 0 : !0, "aria-label": p(s), onClick: v },
      se.createElement(d.Chevron, { disabled: s ? void 0 : !0, orientation: "right", className: m[pe.Chevron] })
    )
  );
}
function jM(n) {
  const { components: a } = $l();
  return se.createElement(a.Button, { ...n });
}
function YM(n) {
  return se.createElement("option", { ...n });
}
function HM(n) {
  const { components: a } = $l();
  return se.createElement(a.Button, { ...n });
}
function BM(n) {
  const { rootRef: a, ...l } = n;
  return se.createElement("div", { ...l, ref: a });
}
function UM(n) {
  return se.createElement("select", { ...n });
}
function LM(n) {
  const { week: a, ...l } = n;
  return se.createElement("tr", { ...l });
}
function qM(n) {
  return se.createElement("th", { ...n });
}
function PM(n) {
  return se.createElement(
    "thead",
    { "aria-hidden": !0 },
    se.createElement("tr", { ...n })
  );
}
function GM(n) {
  const { week: a, ...l } = n;
  return se.createElement("th", { ...l });
}
function WM(n) {
  return se.createElement("th", { ...n });
}
function VM(n) {
  return se.createElement("tbody", { ...n });
}
function XM(n) {
  const { components: a } = $l();
  return se.createElement(a.Dropdown, { ...n });
}
const QM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: SM,
  CaptionLabel: xM,
  Chevron: CM,
  Day: EM,
  DayButton: OM,
  Dropdown: TM,
  DropdownNav: MM,
  Footer: DM,
  Month: _M,
  MonthCaption: AM,
  MonthGrid: NM,
  Months: RM,
  MonthsDropdown: kM,
  Nav: zM,
  NextMonthButton: jM,
  Option: YM,
  PreviousMonthButton: HM,
  Root: BM,
  Select: UM,
  Week: LM,
  WeekNumber: GM,
  WeekNumberHeader: WM,
  Weekday: qM,
  Weekdays: PM,
  Weeks: VM,
  YearsDropdown: XM
}, Symbol.toStringTag, { value: "Module" }));
function va(n, a, l = !1, o = Qn) {
  let { from: s, to: f } = n;
  const { differenceInCalendarDays: d, isSameDay: m } = o;
  return s && f ? (d(f, s) < 0 && ([s, f] = [f, s]), d(a, s) >= (l ? 1 : 0) && d(f, a) >= (l ? 1 : 0)) : !l && f ? m(f, a) : !l && s ? m(s, a) : !1;
}
function Pd(n) {
  return !!(n && typeof n == "object" && "before" in n && "after" in n);
}
function Js(n) {
  return !!(n && typeof n == "object" && "from" in n);
}
function Gd(n) {
  return !!(n && typeof n == "object" && "after" in n);
}
function Wd(n) {
  return !!(n && typeof n == "object" && "before" in n);
}
function Kb(n) {
  return !!(n && typeof n == "object" && "dayOfWeek" in n);
}
function $b(n, a) {
  return Array.isArray(n) && n.every(a.isDate);
}
function ba(n, a, l = Qn) {
  const o = Array.isArray(a) ? a : [a], { isSameDay: s, differenceInCalendarDays: f, isAfter: d } = l;
  return o.some((m) => {
    if (typeof m == "boolean")
      return m;
    if (l.isDate(m))
      return s(n, m);
    if ($b(m, l))
      return m.some((h) => s(n, h));
    if (Js(m))
      return va(m, n, !1, l);
    if (Kb(m))
      return Array.isArray(m.dayOfWeek) ? m.dayOfWeek.includes(n.getDay()) : m.dayOfWeek === n.getDay();
    if (Pd(m)) {
      const h = f(m.before, n), p = f(m.after, n), v = h > 0, y = p < 0;
      return d(m.before, m.after) ? y && v : v || y;
    }
    return Gd(m) ? f(n, m.after) > 0 : Wd(m) ? f(m.before, n) > 0 : typeof m == "function" ? m(n) : !1;
  });
}
function FM(n, a, l, o, s) {
  const { disabled: f, hidden: d, modifiers: m, showOutsideDays: h, broadcastCalendar: p, today: v = s.today() } = a, { isSameDay: y, isSameMonth: S, startOfMonth: E, isBefore: T, endOfMonth: O, isAfter: C } = s, M = l && E(l), R = o && O(o), _ = {
    [it.focused]: [],
    [it.outside]: [],
    [it.disabled]: [],
    [it.hidden]: [],
    [it.today]: []
  }, k = {};
  for (const H of n) {
    const { date: z, displayMonth: N } = H, U = !!(N && !S(z, N)), Q = !!(M && T(z, M)), $ = !!(R && C(z, R)), te = !!(f && ba(z, f, s)), ee = !!(d && ba(z, d, s)) || Q || $ || // Broadcast calendar will show outside days as default
    !p && !h && U || p && h === !1 && U, ie = y(z, v);
    U && _.outside.push(H), te && _.disabled.push(H), ee && _.hidden.push(H), ie && _.today.push(H), m && Object.keys(m).forEach((le) => {
      const me = m?.[le];
      me && ba(z, me, s) && (k[le] ? k[le].push(H) : k[le] = [H]);
    });
  }
  return (H) => {
    const z = {
      [it.focused]: !1,
      [it.disabled]: !1,
      [it.hidden]: !1,
      [it.outside]: !1,
      [it.today]: !1
    }, N = {};
    for (const U in _) {
      const Q = _[U];
      z[U] = Q.some(($) => $ === H);
    }
    for (const U in k)
      N[U] = k[U].some((Q) => Q === H);
    return {
      ...z,
      // custom modifiers should override all the previous ones
      ...N
    };
  };
}
function ZM(n, a, l = {}) {
  return Object.entries(n).filter(([, s]) => s === !0).reduce((s, [f]) => (l[f] ? s.push(l[f]) : a[it[f]] ? s.push(a[it[f]]) : a[Mn[f]] && s.push(a[Mn[f]]), s), [a[pe.Day]]);
}
function IM(n) {
  return {
    ...QM,
    ...n
  };
}
function KM(n) {
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
function Vd() {
  const n = {};
  for (const a in pe)
    n[pe[a]] = `rdp-${pe[a]}`;
  for (const a in it)
    n[it[a]] = `rdp-${it[a]}`;
  for (const a in Mn)
    n[Mn[a]] = `rdp-${Mn[a]}`;
  for (const a in ln)
    n[ln[a]] = `rdp-${ln[a]}`;
  return n;
}
function Jb(n, a, l) {
  return (l ?? new Bt(a)).formatMonthYear(n);
}
const $M = Jb;
function JM(n, a, l) {
  return (l ?? new Bt(a)).format(n, "d");
}
function eD(n, a = Qn) {
  return a.format(n, "LLLL");
}
function tD(n, a, l) {
  return (l ?? new Bt(a)).format(n, "cccccc");
}
function nD(n, a = Qn) {
  return n < 10 ? a.formatNumber(`0${n.toLocaleString()}`) : a.formatNumber(`${n.toLocaleString()}`);
}
function aD() {
  return "";
}
function e0(n, a = Qn) {
  return a.format(n, "yyyy");
}
const rD = e0, oD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Jb,
  formatDay: JM,
  formatMonthCaption: $M,
  formatMonthDropdown: eD,
  formatWeekNumber: nD,
  formatWeekNumberHeader: aD,
  formatWeekdayName: tD,
  formatYearCaption: rD,
  formatYearDropdown: e0
}, Symbol.toStringTag, { value: "Module" }));
function lD(n) {
  return n?.formatMonthCaption && !n.formatCaption && (n.formatCaption = n.formatMonthCaption), n?.formatYearCaption && !n.formatYearDropdown && (n.formatYearDropdown = n.formatYearCaption), {
    ...oD,
    ...n
  };
}
function Xd(n, a, l, o) {
  let s = (o ?? new Bt(l)).format(n, "PPPP");
  return a.today && (s = `Today, ${s}`), a.selected && (s = `${s}, selected`), s;
}
const iD = Xd;
function Qd(n, a, l) {
  return (l ?? new Bt(a)).formatMonthYear(n);
}
const sD = Qd;
function t0(n, a, l, o) {
  let s = (o ?? new Bt(l)).format(n, "PPPP");
  return a?.today && (s = `Today, ${s}`), s;
}
function n0(n) {
  return "Choose the Month";
}
function a0() {
  return "";
}
const cD = "Go to the Next Month";
function r0(n, a) {
  return cD;
}
function o0(n) {
  return "Go to the Previous Month";
}
function l0(n, a, l) {
  return (l ?? new Bt(a)).format(n, "cccc");
}
function i0(n, a) {
  return `Week ${n}`;
}
function s0(n) {
  return "Week Number";
}
function c0(n) {
  return "Choose the Year";
}
const uD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: sD,
  labelDay: iD,
  labelDayButton: Xd,
  labelGrid: Qd,
  labelGridcell: t0,
  labelMonthDropdown: n0,
  labelNav: a0,
  labelNext: r0,
  labelPrevious: o0,
  labelWeekNumber: i0,
  labelWeekNumberHeader: s0,
  labelWeekday: l0,
  labelYearDropdown: c0
}, Symbol.toStringTag, { value: "Module" })), On = (n, a, l) => a || (l ? typeof l == "function" ? l : (...o) => l : n);
function fD(n, a) {
  const l = a.locale?.labels ?? {};
  return {
    ...uD,
    ...n ?? {},
    labelDayButton: On(Xd, n?.labelDayButton, l.labelDayButton),
    labelMonthDropdown: On(n0, n?.labelMonthDropdown, l.labelMonthDropdown),
    labelNext: On(r0, n?.labelNext, l.labelNext),
    labelPrevious: On(o0, n?.labelPrevious, l.labelPrevious),
    labelWeekNumber: On(i0, n?.labelWeekNumber, l.labelWeekNumber),
    labelYearDropdown: On(c0, n?.labelYearDropdown, l.labelYearDropdown),
    labelGrid: On(Qd, n?.labelGrid, l.labelGrid),
    labelGridcell: On(t0, n?.labelGridcell, l.labelGridcell),
    labelNav: On(a0, n?.labelNav, l.labelNav),
    labelWeekNumberHeader: On(s0, n?.labelWeekNumberHeader, l.labelWeekNumberHeader),
    labelWeekday: On(l0, n?.labelWeekday, l.labelWeekday)
  };
}
function dD(n, a, l, o, s) {
  const { startOfMonth: f, startOfYear: d, endOfYear: m, eachMonthOfInterval: h, getMonth: p } = s;
  return h({
    start: d(n),
    end: m(n)
  }).map((S) => {
    const E = o.formatMonthDropdown(S, s), T = p(S), O = a && S < f(a) || l && S > f(l) || !1;
    return { value: T, label: E, disabled: O };
  });
}
function mD(n, a = {}, l = {}) {
  let o = { ...a?.[pe.Day] };
  return Object.entries(n).filter(([, s]) => s === !0).forEach(([s]) => {
    o = {
      ...o,
      ...l?.[s]
    };
  }), o;
}
function hD(n, a, l, o) {
  const s = o ?? n.today(), f = l ? n.startOfBroadcastWeek(s, n) : a ? n.startOfISOWeek(s) : n.startOfWeek(s), d = [];
  for (let m = 0; m < 7; m++) {
    const h = n.addDays(f, m);
    d.push(h);
  }
  return d;
}
function pD(n, a, l, o, s = !1) {
  if (!n || !a)
    return;
  const { startOfYear: f, endOfYear: d, eachYearOfInterval: m, getYear: h } = o, p = f(n), v = d(a), y = m({ start: p, end: v });
  return s && y.reverse(), y.map((S) => {
    const E = l.formatYearDropdown(S, o);
    return {
      value: h(S),
      label: E,
      disabled: !1
    };
  });
}
function gD(n, a = {}) {
  const { weekStartsOn: l, locale: o } = a, s = l ?? o?.options?.weekStartsOn ?? 0, f = (m) => {
    const h = typeof m == "number" || typeof m == "string" ? new Date(m) : m;
    return new Lt(h.getFullYear(), h.getMonth(), h.getDate(), 12, 0, 0, n);
  }, d = (m) => {
    const h = f(m);
    return new Date(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => f(Lt.tz(n)),
    newDate: (m, h, p) => new Lt(m, h, p, 12, 0, 0, n),
    startOfDay: (m) => f(m),
    startOfWeek: (m, h) => {
      const p = f(m), v = h?.weekStartsOn ?? s, y = (p.getDay() - v + 7) % 7;
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
      const p = f(m), S = (((h?.weekStartsOn ?? s) + 6) % 7 - p.getDay() + 7) % 7;
      return p.setDate(p.getDate() + S), p;
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
      const h = f(m.start), p = f(m.end), v = [], y = new Lt(h.getFullYear(), h.getMonth(), 1, 12, 0, 0, n), S = p.getFullYear() * 12 + p.getMonth();
      for (; y.getFullYear() * 12 + y.getMonth() <= S; )
        v.push(new Lt(y, n)), y.setMonth(y.getMonth() + 1, 1);
      return v;
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
      const h = f(m.start), p = f(m.end), v = [], y = new Lt(h.getFullYear(), 0, 1, 12, 0, 0, n);
      for (; y.getFullYear() <= p.getFullYear(); )
        v.push(new Lt(y, n)), y.setFullYear(y.getFullYear() + 1, 0, 1);
      return v;
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
      const p = d(m), v = d(h);
      return Hd(p, v);
    },
    differenceInCalendarMonths: (m, h) => {
      const p = d(m), v = d(h);
      return Db(p, v);
    }
  };
}
const Jl = (n) => n instanceof HTMLElement ? n : null, Lf = (n) => [
  ...n.querySelectorAll("[data-animated-month]") ?? []
], yD = (n) => Jl(n.querySelector("[data-animated-month]")), qf = (n) => Jl(n.querySelector("[data-animated-caption]")), Pf = (n) => Jl(n.querySelector("[data-animated-weeks]")), vD = (n) => Jl(n.querySelector("[data-animated-nav]")), bD = (n) => Jl(n.querySelector("[data-animated-weekdays]"));
function wD(n, a, { classNames: l, months: o, focused: s, dateLib: f }) {
  const d = b.useRef(null), m = b.useRef(o), h = b.useRef(!1);
  b.useLayoutEffect(() => {
    const p = m.current;
    if (m.current = o, !a || !n.current || // safety check because the ref can be set to anything by consumers
    !(n.current instanceof HTMLElement) || // validation required for the animation to work as expected
    o.length === 0 || p.length === 0 || o.length !== p.length)
      return;
    const v = f.isSameMonth(o[0].date, p[0].date), y = f.isAfter(o[0].date, p[0].date), S = y ? l[ln.caption_after_enter] : l[ln.caption_before_enter], E = y ? l[ln.weeks_after_enter] : l[ln.weeks_before_enter], T = d.current, O = n.current.cloneNode(!0);
    if (O instanceof HTMLElement ? (Lf(O).forEach((_) => {
      if (!(_ instanceof HTMLElement))
        return;
      const k = yD(_);
      k && _.contains(k) && _.removeChild(k);
      const H = qf(_);
      H && H.classList.remove(S);
      const z = Pf(_);
      z && z.classList.remove(E);
    }), d.current = O) : d.current = null, h.current || v || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    s)
      return;
    const C = T instanceof HTMLElement ? Lf(T) : [], M = Lf(n.current);
    if (M?.every((R) => R instanceof HTMLElement) && C && C.every((R) => R instanceof HTMLElement)) {
      h.current = !0, n.current.style.isolation = "isolate";
      const R = vD(n.current);
      R && (R.style.zIndex = "1"), M.forEach((_, k) => {
        const H = C[k];
        if (!H)
          return;
        _.style.position = "relative", _.style.overflow = "hidden";
        const z = qf(_);
        z && z.classList.add(S);
        const N = Pf(_);
        N && N.classList.add(E);
        const U = () => {
          h.current = !1, n.current && (n.current.style.isolation = ""), R && (R.style.zIndex = ""), z && z.classList.remove(S), N && N.classList.remove(E), _.style.position = "", _.style.overflow = "", _.contains(H) && _.removeChild(H);
        };
        H.style.pointerEvents = "none", H.style.position = "absolute", H.style.overflow = "hidden", H.setAttribute("aria-hidden", "true");
        const Q = bD(H);
        Q && (Q.style.opacity = "0");
        const $ = qf(H);
        $ && ($.classList.add(y ? l[ln.caption_before_exit] : l[ln.caption_after_exit]), $.addEventListener("animationend", U));
        const te = Pf(H);
        te && te.classList.add(y ? l[ln.weeks_before_exit] : l[ln.weeks_after_exit]), _.insertBefore(H, _.firstChild);
      });
    }
  });
}
function SD(n, a, l, o) {
  const s = n[0], f = n[n.length - 1], { ISOWeek: d, fixedWeeks: m, broadcastCalendar: h } = l ?? {}, { addDays: p, differenceInCalendarDays: v, differenceInCalendarMonths: y, endOfBroadcastWeek: S, endOfISOWeek: E, endOfMonth: T, endOfWeek: O, isAfter: C, startOfBroadcastWeek: M, startOfISOWeek: R, startOfWeek: _ } = o, k = h ? M(s, o) : d ? R(s) : _(s), H = h ? S(f) : d ? E(T(f)) : O(T(f)), z = a && (h ? S(a) : d ? E(a) : O(a)), N = z && C(H, z) ? z : H, U = v(N, k), Q = y(f, s) + 1, $ = [];
  for (let ie = 0; ie <= U; ie++) {
    const le = p(k, ie);
    $.push(le);
  }
  const ee = (h ? 35 : 42) * Q;
  if (m && $.length < ee) {
    const ie = ee - $.length;
    for (let le = 0; le < ie; le++) {
      const me = p($[$.length - 1], 1);
      $.push(me);
    }
  }
  return $;
}
function xD(n) {
  const a = [];
  return n.reduce((l, o) => {
    const s = o.weeks.reduce((f, d) => f.concat(d.days.slice()), a.slice());
    return l.concat(s.slice());
  }, a.slice());
}
function CD(n, a, l, o) {
  const { numberOfMonths: s = 1 } = l, f = [];
  for (let d = 0; d < s; d++) {
    const m = o.addMonths(n, d);
    if (a && m > a)
      break;
    f.push(m);
  }
  return f;
}
function Xy(n, a, l, o) {
  const { month: s, defaultMonth: f, today: d = o.today(), numberOfMonths: m = 1 } = n;
  let h = s || f || d;
  const { differenceInCalendarMonths: p, addMonths: v, startOfMonth: y } = o;
  if (l && p(l, h) < m - 1) {
    const S = -1 * (m - 1);
    h = v(l, S);
  }
  return a && p(h, a) < 0 && (h = a), y(h);
}
function ED(n, a, l, o) {
  const { addDays: s, endOfBroadcastWeek: f, endOfISOWeek: d, endOfMonth: m, endOfWeek: h, getISOWeek: p, getWeek: v, startOfBroadcastWeek: y, startOfISOWeek: S, startOfWeek: E } = o, T = n.reduce((O, C) => {
    const M = l.broadcastCalendar ? y(C, o) : l.ISOWeek ? S(C) : E(C), R = l.broadcastCalendar ? f(C) : l.ISOWeek ? d(m(C)) : h(m(C)), _ = a.filter((N) => N >= M && N <= R), k = l.broadcastCalendar ? 35 : 42;
    if (l.fixedWeeks && _.length < k) {
      const N = a.filter((U) => {
        const Q = k - _.length;
        return U > R && U <= s(R, Q);
      });
      _.push(...N);
    }
    const H = _.reduce((N, U) => {
      const Q = l.ISOWeek ? p(U) : v(U), $ = N.find((ee) => ee.weekNumber === Q), te = new Zb(U, C, o);
      return $ ? $.days.push(te) : N.push(new wM(Q, [te])), N;
    }, []), z = new bM(C, H);
    return O.push(z), O;
  }, []);
  return l.reverseMonths ? T.reverse() : T;
}
function OD(n, a) {
  let { startMonth: l, endMonth: o } = n;
  const { startOfYear: s, startOfDay: f, startOfMonth: d, endOfMonth: m, addYears: h, endOfYear: p, newDate: v, today: y } = a, { fromYear: S, toYear: E, fromMonth: T, toMonth: O } = n;
  !l && T && (l = T), !l && S && (l = a.newDate(S, 0, 1)), !o && O && (o = O), !o && E && (o = v(E, 11, 31));
  const C = n.captionLayout === "dropdown" || n.captionLayout === "dropdown-years";
  return l ? l = d(l) : S ? l = v(S, 0, 1) : !l && C && (l = s(h(n.today ?? y(), -100))), o ? o = m(o) : E ? o = v(E, 11, 31) : !o && C && (o = p(n.today ?? y())), [
    l && f(l),
    o && f(o)
  ];
}
function TD(n, a, l, o) {
  if (l.disableNavigation)
    return;
  const { pagedNavigation: s, numberOfMonths: f = 1 } = l, { startOfMonth: d, addMonths: m, differenceInCalendarMonths: h } = o, p = s ? f : 1, v = d(n);
  if (!a)
    return m(v, p);
  if (!(h(a, n) < f))
    return m(v, p);
}
function MD(n, a, l, o) {
  if (l.disableNavigation)
    return;
  const { pagedNavigation: s, numberOfMonths: f } = l, { startOfMonth: d, addMonths: m, differenceInCalendarMonths: h } = o, p = s ? f ?? 1 : 1, v = d(n);
  if (!a)
    return m(v, -p);
  if (!(h(v, a) <= 0))
    return m(v, -p);
}
function DD(n) {
  const a = [];
  return n.reduce((l, o) => l.concat(o.weeks.slice()), a.slice());
}
function ec(n, a) {
  const [l, o] = b.useState(n);
  return [a === void 0 ? l : a, o];
}
function _D(n, a) {
  const [l, o] = OD(n, a), { startOfMonth: s, endOfMonth: f } = a, d = Xy(n, l, o, a), [m, h] = ec(
    d,
    // initialMonth is always computed from props.month if provided
    n.month ? d : void 0
  );
  b.useEffect(() => {
    const k = Xy(n, l, o, a);
    h(k);
  }, [n.timeZone]);
  const { months: p, weeks: v, days: y, previousMonth: S, nextMonth: E } = b.useMemo(() => {
    const k = CD(m, o, { numberOfMonths: n.numberOfMonths }, a), H = SD(k, n.endMonth ? f(n.endMonth) : void 0, {
      ISOWeek: n.ISOWeek,
      fixedWeeks: n.fixedWeeks,
      broadcastCalendar: n.broadcastCalendar
    }, a), z = ED(k, H, {
      broadcastCalendar: n.broadcastCalendar,
      fixedWeeks: n.fixedWeeks,
      ISOWeek: n.ISOWeek,
      reverseMonths: n.reverseMonths
    }, a), N = DD(z), U = xD(z), Q = MD(m, l, n, a), $ = TD(m, o, n, a);
    return {
      months: z,
      weeks: N,
      days: U,
      previousMonth: Q,
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
  ]), { disableNavigation: T, onMonthChange: O } = n, C = (k) => v.some((H) => H.days.some((z) => z.isEqualTo(k))), M = (k) => {
    if (T)
      return;
    let H = s(k);
    l && H < s(l) && (H = s(l)), o && H > s(o) && (H = s(o)), h(H), O?.(H);
  };
  return {
    months: p,
    weeks: v,
    days: y,
    navStart: l,
    navEnd: o,
    previousMonth: S,
    nextMonth: E,
    goToMonth: M,
    goToDay: (k) => {
      C(k) || M(k.date);
    }
  };
}
var Hn;
(function(n) {
  n[n.Today = 0] = "Today", n[n.Selected = 1] = "Selected", n[n.LastFocused = 2] = "LastFocused", n[n.FocusedModifier = 3] = "FocusedModifier";
})(Hn || (Hn = {}));
function Qy(n) {
  return !n[it.disabled] && !n[it.hidden] && !n[it.outside];
}
function AD(n, a, l, o) {
  let s, f = -1;
  for (const d of n) {
    const m = a(d);
    Qy(m) && (m[it.focused] && f < Hn.FocusedModifier ? (s = d, f = Hn.FocusedModifier) : o?.isEqualTo(d) && f < Hn.LastFocused ? (s = d, f = Hn.LastFocused) : l(d.date) && f < Hn.Selected ? (s = d, f = Hn.Selected) : m[it.today] && f < Hn.Today && (s = d, f = Hn.Today));
  }
  return s || (s = n.find((d) => Qy(a(d)))), s;
}
function ND(n, a, l, o, s, f, d) {
  const { ISOWeek: m, broadcastCalendar: h } = f, { addDays: p, addMonths: v, addWeeks: y, addYears: S, endOfBroadcastWeek: E, endOfISOWeek: T, endOfWeek: O, max: C, min: M, startOfBroadcastWeek: R, startOfISOWeek: _, startOfWeek: k } = d;
  let z = {
    day: p,
    week: y,
    month: v,
    year: S,
    startOfWeek: (N) => h ? R(N, d) : m ? _(N) : k(N),
    endOfWeek: (N) => h ? E(N) : m ? T(N) : O(N)
  }[n](l, a === "after" ? 1 : -1);
  return a === "before" && o ? z = C([o, z]) : a === "after" && s && (z = M([s, z])), z;
}
function u0(n, a, l, o, s, f, d, m = 0) {
  if (m > 365)
    return;
  const h = ND(n, a, l.date, o, s, f, d), p = !!(f.disabled && ba(h, f.disabled, d)), v = !!(f.hidden && ba(h, f.hidden, d)), y = h, S = new Zb(h, y, d);
  return !p && !v ? S : u0(n, a, S, o, s, f, d, m + 1);
}
function RD(n, a, l, o, s) {
  const { autoFocus: f } = n, [d, m] = b.useState(), h = AD(a.days, l, o || (() => !1), d), [p, v] = b.useState(f ? h : void 0);
  return {
    isFocusTarget: (O) => !!h?.isEqualTo(O),
    setFocused: v,
    focused: p,
    blur: () => {
      m(p), v(void 0);
    },
    moveFocus: (O, C) => {
      if (!p)
        return;
      const M = u0(O, C, p, a.navStart, a.navEnd, n, s);
      M && (n.disableNavigation && !a.days.some((_) => _.isEqualTo(M)) || (a.goToDay(M), v(M)));
    }
  };
}
function kD(n, a) {
  const { selected: l, required: o, onSelect: s } = n, [f, d] = ec(l, s ? l : void 0), m = s ? l : f, { isSameDay: h } = a, p = (E) => m?.some((T) => h(T, E)) ?? !1, { min: v, max: y } = n;
  return {
    selected: m,
    select: (E, T, O) => {
      let C = [...m ?? []];
      if (p(E)) {
        if (m?.length === v || o && m?.length === 1)
          return;
        C = m?.filter((M) => !h(M, E));
      } else
        m?.length === y ? C = [E] : C = [...C, E];
      return s || d(C), s?.(C, E, T, O), C;
    },
    isSelected: p
  };
}
function zD(n, a, l = 0, o = 0, s = !1, f = Qn) {
  const { from: d, to: m } = a || {}, { isSameDay: h, isAfter: p, isBefore: v } = f;
  let y;
  if (!d && !m)
    y = { from: n, to: l > 0 ? void 0 : n };
  else if (d && !m)
    h(d, n) ? l === 0 ? y = { from: d, to: n } : s ? y = { from: d, to: void 0 } : y = void 0 : v(n, d) ? y = { from: n, to: d } : y = { from: d, to: n };
  else if (d && m)
    if (h(d, n) && h(m, n))
      s ? y = { from: d, to: m } : y = void 0;
    else if (h(d, n))
      y = { from: d, to: l > 0 ? void 0 : n };
    else if (h(m, n))
      y = { from: n, to: l > 0 ? void 0 : n };
    else if (v(n, d))
      y = { from: n, to: m };
    else if (p(n, d))
      y = { from: d, to: n };
    else if (p(n, m))
      y = { from: d, to: n };
    else
      throw new Error("Invalid range");
  if (y?.from && y?.to) {
    const S = f.differenceInCalendarDays(y.to, y.from);
    o > 0 && S > o ? y = { from: n, to: void 0 } : l > 1 && S < l && (y = { from: n, to: void 0 });
  }
  return y;
}
function jD(n, a, l = Qn) {
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
function Fy(n, a, l = Qn) {
  return va(n, a.from, !1, l) || va(n, a.to, !1, l) || va(a, n.from, !1, l) || va(a, n.to, !1, l);
}
function YD(n, a, l = Qn) {
  const o = Array.isArray(a) ? a : [a];
  if (o.filter((m) => typeof m != "function").some((m) => typeof m == "boolean" ? m : l.isDate(m) ? va(n, m, !1, l) : $b(m, l) ? m.some((h) => va(n, h, !1, l)) : Js(m) ? m.from && m.to ? Fy(n, { from: m.from, to: m.to }, l) : !1 : Kb(m) ? jD(n, m.dayOfWeek, l) : Pd(m) ? l.isAfter(m.before, m.after) ? Fy(n, {
    from: l.addDays(m.after, 1),
    to: l.addDays(m.before, -1)
  }, l) : ba(n.from, m, l) || ba(n.to, m, l) : Gd(m) || Wd(m) ? ba(n.from, m, l) || ba(n.to, m, l) : !1))
    return !0;
  const d = o.filter((m) => typeof m == "function");
  if (d.length) {
    let m = n.from;
    const h = l.differenceInCalendarDays(n.to, n.from);
    for (let p = 0; p <= h; p++) {
      if (d.some((v) => v(m)))
        return !0;
      m = l.addDays(m, 1);
    }
  }
  return !1;
}
function HD(n, a) {
  const { disabled: l, excludeDisabled: o, resetOnSelect: s, selected: f, required: d, onSelect: m } = n, [h, p] = ec(f, m ? f : void 0), v = m ? f : h;
  return {
    selected: v,
    select: (E, T, O) => {
      const { min: C, max: M } = n;
      let R;
      if (E) {
        const _ = v?.from, k = v?.to, H = !!_ && !!k, z = !!_ && !!k && a.isSameDay(_, k) && a.isSameDay(E, _);
        s && (H || !v?.from) ? !d && z ? R = void 0 : R = { from: E, to: void 0 } : R = zD(E, v, C, M, d, a);
      }
      return o && l && R?.from && R.to && YD({ from: R.from, to: R.to }, l, a) && (R.from = E, R.to = void 0), m || p(R), m?.(R, E, T, O), R;
    },
    isSelected: (E) => v && va(v, E, !1, a)
  };
}
function BD(n, a) {
  const { selected: l, required: o, onSelect: s } = n, [f, d] = ec(l, s ? l : void 0), m = s ? l : f, { isSameDay: h } = a;
  return {
    selected: m,
    select: (y, S, E) => {
      let T = y;
      return !o && m && m && h(y, m) && (T = void 0), s || d(T), s?.(T, y, S, E), T;
    },
    isSelected: (y) => m ? h(m, y) : !1
  };
}
function UD(n, a) {
  const l = BD(n, a), o = kD(n, a), s = HD(n, a);
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
function ko(n, a, l) {
  return wn(n, a);
}
function Zy(n, a, l) {
  return typeof n == "boolean" || typeof n == "function" ? n : n instanceof Date ? ko(n, a) : Array.isArray(n) ? n.map((o) => o instanceof Date ? ko(o, a) : o) : Js(n) ? {
    ...n,
    from: n.from ? wn(n.from, a) : n.from,
    to: n.to ? wn(n.to, a) : n.to
  } : Pd(n) ? {
    before: ko(n.before, a),
    after: ko(n.after, a)
  } : Gd(n) ? {
    after: ko(n.after, a)
  } : Wd(n) ? {
    before: ko(n.before, a)
  } : n;
}
function Gf(n, a, l) {
  return n && (Array.isArray(n) ? n.map((o) => Zy(o, a)) : Zy(n, a));
}
function LD(n) {
  let a = n;
  const l = a.timeZone;
  if (l && (a = {
    ...n,
    timeZone: l
  }, a.today && (a.today = wn(a.today, l)), a.month && (a.month = wn(a.month, l)), a.defaultMonth && (a.defaultMonth = wn(a.defaultMonth, l)), a.startMonth && (a.startMonth = wn(a.startMonth, l)), a.endMonth && (a.endMonth = wn(a.endMonth, l)), a.mode === "single" && a.selected ? a.selected = wn(a.selected, l) : a.mode === "multiple" && a.selected ? a.selected = a.selected?.map((Ee) => wn(Ee, l)) : a.mode === "range" && a.selected && (a.selected = {
    from: a.selected.from ? wn(a.selected.from, l) : a.selected.from,
    to: a.selected.to ? wn(a.selected.to, l) : a.selected.to
  }), a.disabled !== void 0 && (a.disabled = Gf(a.disabled, l)), a.hidden !== void 0 && (a.hidden = Gf(a.hidden, l)), a.modifiers)) {
    const Ee = {};
    Object.keys(a.modifiers).forEach((Ye) => {
      Ee[Ye] = Gf(a.modifiers?.[Ye], l);
    }), a.modifiers = Ee;
  }
  const { components: o, formatters: s, labels: f, dateLib: d, locale: m, classNames: h } = b.useMemo(() => {
    const Ee = { ...Wb, ...a.locale }, Ye = a.broadcastCalendar ? 1 : a.weekStartsOn, be = a.noonSafe && a.timeZone ? gD(a.timeZone, {
      weekStartsOn: Ye,
      locale: Ee
    }) : void 0, Re = a.dateLib && be ? { ...be, ...a.dateLib } : a.dateLib ?? be, mt = new Bt({
      locale: Ee,
      weekStartsOn: Ye,
      firstWeekContainsDate: a.firstWeekContainsDate,
      useAdditionalWeekYearTokens: a.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: a.useAdditionalDayOfYearTokens,
      timeZone: a.timeZone,
      numerals: a.numerals
    }, Re);
    return {
      dateLib: mt,
      components: IM(a.components),
      formatters: lD(a.formatters),
      labels: fD(a.labels, mt.options),
      locale: Ee,
      classNames: { ...Vd(), ...a.classNames }
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
  const { captionLayout: p, mode: v, navLayout: y, numberOfMonths: S = 1, onDayBlur: E, onDayClick: T, onDayFocus: O, onDayKeyDown: C, onDayMouseEnter: M, onDayMouseLeave: R, onNextClick: _, onPrevClick: k, showWeekNumber: H, styles: z } = a, { formatCaption: N, formatDay: U, formatMonthDropdown: Q, formatWeekNumber: $, formatWeekNumberHeader: te, formatWeekdayName: ee, formatYearDropdown: ie } = s, le = _D(a, d), { days: me, months: Y, navStart: F, navEnd: K, previousMonth: ne, nextMonth: W, goToMonth: D } = le, V = FM(me, a, F, K, d), { isSelected: J, select: ae, selected: re } = UD(a, d) ?? {}, { blur: oe, focused: ve, isFocusTarget: Xe, moveFocus: ye, setFocused: he } = RD(a, le, V, J ?? (() => !1), d), { labelDayButton: Qe, labelGridcell: Le, labelGrid: Ce, labelMonthDropdown: Oe, labelNav: Ge, labelPrevious: Zn, labelNext: cr, labelWeekday: Da, labelWeekNumber: Zo, labelWeekNumberHeader: Io, labelYearDropdown: Ko } = f, dc = b.useMemo(() => hD(d, a.ISOWeek, a.broadcastCalendar, a.today), [d, a.ISOWeek, a.broadcastCalendar, a.today]), ti = v !== void 0 || T !== void 0, Nt = b.useCallback(() => {
    ne && (D(ne), k?.(ne));
  }, [ne, D, k]), $o = b.useCallback(() => {
    W && (D(W), _?.(W));
  }, [D, W, _]), ni = b.useCallback((Ee, Ye) => (be) => {
    be.preventDefault(), be.stopPropagation(), he(Ee), !Ye.disabled && (ae?.(Ee.date, Ye, be), T?.(Ee.date, Ye, be));
  }, [ae, T, he]), ai = b.useCallback((Ee, Ye) => (be) => {
    he(Ee), O?.(Ee.date, Ye, be);
  }, [O, he]), Xr = b.useCallback((Ee, Ye) => (be) => {
    oe(), E?.(Ee.date, Ye, be);
  }, [oe, E]), mc = b.useCallback((Ee, Ye) => (be) => {
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
    C?.(Ee.date, Ye, be);
  }, [ye, C, a.dir]), ri = b.useCallback((Ee, Ye) => (be) => {
    M?.(Ee.date, Ye, be);
  }, [M]), hc = b.useCallback((Ee, Ye) => (be) => {
    R?.(Ee.date, Ye, be);
  }, [R]), pc = b.useCallback((Ee) => (Ye) => {
    const be = Number(Ye.target.value), Re = d.setMonth(d.startOfMonth(Ee), be);
    D(Re);
  }, [d, D]), ur = b.useCallback((Ee) => (Ye) => {
    const be = Number(Ye.target.value), Re = d.setYear(d.startOfMonth(Ee), be);
    D(Re);
  }, [d, D]), { className: qt, style: Nn } = b.useMemo(() => ({
    className: [h[pe.Root], a.className].filter(Boolean).join(" "),
    style: { ...z?.[pe.Root], ...a.style }
  }), [h, a.className, a.style, z]), Pt = KM(a), oi = b.useRef(null);
  wD(oi, !!a.animate, {
    classNames: h,
    months: Y,
    focused: ve,
    dateLib: d
  });
  const gc = {
    dayPickerProps: a,
    selected: re,
    select: ae,
    isSelected: J,
    months: Y,
    nextMonth: W,
    previousMonth: ne,
    goToMonth: D,
    getModifiers: V,
    components: o,
    classNames: h,
    styles: z,
    labels: f,
    formatters: s
  };
  return se.createElement(
    Ib.Provider,
    { value: gc },
    se.createElement(
      o.Root,
      { rootRef: a.animate ? oi : void 0, className: qt, style: Nn, dir: a.dir, id: a.id, lang: a.lang ?? m.code, nonce: a.nonce, title: a.title, role: a.role, "aria-label": a["aria-label"], "aria-labelledby": a["aria-labelledby"], ...Pt },
      se.createElement(
        o.Months,
        { className: h[pe.Months], style: z?.[pe.Months] },
        !a.hideNavigation && !y && se.createElement(o.Nav, { "data-animated-nav": a.animate ? "true" : void 0, className: h[pe.Nav], style: z?.[pe.Nav], "aria-label": Ge(), onPreviousClick: Nt, onNextClick: $o, previousMonth: ne, nextMonth: W }),
        Y.map((Ee, Ye) => se.createElement(
          o.Month,
          {
            "data-animated-month": a.animate ? "true" : void 0,
            className: h[pe.Month],
            style: z?.[pe.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: Ye,
            displayIndex: Ye,
            calendarMonth: Ee
          },
          y === "around" && !a.hideNavigation && Ye === 0 && se.createElement(
            o.PreviousMonthButton,
            { type: "button", className: h[pe.PreviousMonthButton], tabIndex: ne ? void 0 : -1, "aria-disabled": ne ? void 0 : !0, "aria-label": Zn(ne), onClick: Nt, "data-animated-button": a.animate ? "true" : void 0 },
            se.createElement(o.Chevron, { disabled: ne ? void 0 : !0, className: h[pe.Chevron], orientation: a.dir === "rtl" ? "right" : "left" })
          ),
          se.createElement(o.MonthCaption, { "data-animated-caption": a.animate ? "true" : void 0, className: h[pe.MonthCaption], style: z?.[pe.MonthCaption], calendarMonth: Ee, displayIndex: Ye }, p?.startsWith("dropdown") ? se.createElement(
            o.DropdownNav,
            { className: h[pe.Dropdowns], style: z?.[pe.Dropdowns] },
            (() => {
              const be = p === "dropdown" || p === "dropdown-months" ? se.createElement(o.MonthsDropdown, { key: "month", className: h[pe.MonthsDropdown], "aria-label": Oe(), classNames: h, components: o, disabled: !!a.disableNavigation, onChange: pc(Ee.date), options: dD(Ee.date, F, K, s, d), style: z?.[pe.Dropdown], value: d.getMonth(Ee.date) }) : se.createElement("span", { key: "month" }, Q(Ee.date, d)), Re = p === "dropdown" || p === "dropdown-years" ? se.createElement(o.YearsDropdown, { key: "year", className: h[pe.YearsDropdown], "aria-label": Ko(d.options), classNames: h, components: o, disabled: !!a.disableNavigation, onChange: ur(Ee.date), options: pD(F, K, s, d, !!a.reverseYears), style: z?.[pe.Dropdown], value: d.getYear(Ee.date) }) : se.createElement("span", { key: "year" }, ie(Ee.date, d));
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
            } }, N(Ee.date, d.options, d))
          ) : se.createElement(o.CaptionLabel, { className: h[pe.CaptionLabel], role: "status", "aria-live": "polite" }, N(Ee.date, d.options, d))),
          y === "around" && !a.hideNavigation && Ye === S - 1 && se.createElement(
            o.NextMonthButton,
            { type: "button", className: h[pe.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": cr(W), onClick: $o, "data-animated-button": a.animate ? "true" : void 0 },
            se.createElement(o.Chevron, { disabled: W ? void 0 : !0, className: h[pe.Chevron], orientation: a.dir === "rtl" ? "left" : "right" })
          ),
          Ye === S - 1 && y === "after" && !a.hideNavigation && se.createElement(o.Nav, { "data-animated-nav": a.animate ? "true" : void 0, className: h[pe.Nav], style: z?.[pe.Nav], "aria-label": Ge(), onPreviousClick: Nt, onNextClick: $o, previousMonth: ne, nextMonth: W }),
          se.createElement(
            o.MonthGrid,
            { role: "grid", "aria-multiselectable": v === "multiple" || v === "range", "aria-label": Ce(Ee.date, d.options, d) || void 0, className: h[pe.MonthGrid], style: z?.[pe.MonthGrid] },
            !a.hideWeekdays && se.createElement(
              o.Weekdays,
              { "data-animated-weekdays": a.animate ? "true" : void 0, className: h[pe.Weekdays], style: z?.[pe.Weekdays] },
              H && se.createElement(o.WeekNumberHeader, { "aria-label": Io(d.options), className: h[pe.WeekNumberHeader], style: z?.[pe.WeekNumberHeader], scope: "col" }, te()),
              dc.map((be) => se.createElement(o.Weekday, { "aria-label": Da(be, d.options, d), className: h[pe.Weekday], key: String(be), style: z?.[pe.Weekday], scope: "col" }, ee(be, d.options, d)))
            ),
            se.createElement(o.Weeks, { "data-animated-weeks": a.animate ? "true" : void 0, className: h[pe.Weeks], style: z?.[pe.Weeks] }, Ee.weeks.map((be) => se.createElement(
              o.Week,
              { className: h[pe.Week], key: be.weekNumber, style: z?.[pe.Week], week: be },
              H && se.createElement(o.WeekNumber, { week: be, style: z?.[pe.WeekNumber], "aria-label": Zo(be.weekNumber, {
                locale: m
              }), className: h[pe.WeekNumber], scope: "row", role: "rowheader" }, $(be.weekNumber, d)),
              be.days.map((Re) => {
                const { date: mt } = Re, De = V(Re);
                if (De[it.focused] = !De.hidden && !!ve?.isEqualTo(Re), De[Mn.selected] = J?.(mt) || De.selected, Js(re)) {
                  const { from: dr, to: In } = re;
                  De[Mn.range_start] = !!(dr && In && d.isSameDay(mt, dr)), De[Mn.range_end] = !!(dr && In && d.isSameDay(mt, In)), De[Mn.range_middle] = va(re, mt, !0, d);
                }
                const fr = mD(De, z, a.modifiersStyles), yc = ZM(De, h, a.modifiersClassNames), li = !ti && !De.hidden ? Le(mt, De, d.options, d) : void 0;
                return se.createElement(o.Day, { key: `${Re.isoDate}_${Re.displayMonthId}`, day: Re, modifiers: De, className: yc.join(" "), style: fr, role: "gridcell", "aria-selected": De.selected || void 0, "aria-label": li, "data-day": Re.isoDate, "data-month": Re.outside ? Re.dateMonthId : void 0, "data-selected": De.selected || void 0, "data-disabled": De.disabled || void 0, "data-hidden": De.hidden || void 0, "data-outside": Re.outside || void 0, "data-focused": De.focused || void 0, "data-today": De.today || void 0 }, !De.hidden && ti ? se.createElement(o.DayButton, { className: h[pe.DayButton], style: z?.[pe.DayButton], type: "button", day: Re, modifiers: De, disabled: !De.focused && De.disabled || void 0, "aria-disabled": De.focused && De.disabled || void 0, tabIndex: Xe(Re) ? 0 : -1, "aria-label": Qe(mt, De, d.options, d), onClick: ni(Re, De), onBlur: Xr(Re, De), onFocus: ai(Re, De), onKeyDown: mc(Re, De), onMouseEnter: ri(Re, De), onMouseLeave: hc(Re, De) }, U(mt, d.options, d)) : !De.hidden && U(Re.date, d.options, d));
              })
            )))
          )
        ))
      ),
      a.footer && se.createElement(o.Footer, { className: h[pe.Footer], style: z?.[pe.Footer], role: "status", "aria-live": "polite" }, a.footer)
    )
  );
}
function qD({
  className: n,
  classNames: a,
  showOutsideDays: l = !0,
  captionLayout: o = "label",
  buttonVariant: s = "ghost",
  formatters: f,
  components: d,
  ...m
}) {
  const h = Vd();
  return /* @__PURE__ */ x.jsx(
    LD,
    {
      showOutsideDays: l,
      className: Se(
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
        root: Se("w-fit", h.root),
        months: Se(
          "flex gap-4 flex-col md:flex-row relative",
          h.months
        ),
        month: Se("flex flex-col w-full gap-4", h.month),
        nav: Se(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          h.nav
        ),
        button_previous: Se(
          ad({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          h.button_previous
        ),
        button_next: Se(
          ad({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          h.button_next
        ),
        month_caption: Se(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          h.month_caption
        ),
        dropdowns: Se(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          h.dropdowns
        ),
        dropdown_root: Se(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          h.dropdown_root
        ),
        dropdown: Se(
          "absolute bg-popover inset-0 opacity-0",
          h.dropdown
        ),
        caption_label: Se(
          "select-none font-medium",
          o === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          h.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: Se("flex", h.weekdays),
        weekday: Se(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          h.weekday
        ),
        week: Se("flex w-full mt-2", h.week),
        week_number_header: Se(
          "select-none w-(--cell-size)",
          h.week_number_header
        ),
        week_number: Se(
          "text-[0.8rem] select-none text-muted-foreground",
          h.week_number
        ),
        day: Se(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          m.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          h.day
        ),
        range_start: Se(
          "rounded-l-md bg-accent",
          h.range_start
        ),
        range_middle: Se("rounded-none", h.range_middle),
        range_end: Se("rounded-r-md bg-accent", h.range_end),
        today: Se(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          h.today
        ),
        outside: Se(
          "text-muted-foreground aria-selected:text-muted-foreground",
          h.outside
        ),
        disabled: Se(
          "text-muted-foreground opacity-50",
          h.disabled
        ),
        hidden: Se("invisible", h.hidden),
        ...a
      },
      components: {
        Root: ({ className: p, rootRef: v, ...y }) => /* @__PURE__ */ x.jsx(
          "div",
          {
            "data-slot": "calendar",
            ref: v,
            className: Se(p),
            ...y
          }
        ),
        Chevron: ({ className: p, orientation: v, ...y }) => v === "left" ? /* @__PURE__ */ x.jsx(Qb, { className: Se("size-4", p), ...y }) : v === "right" ? /* @__PURE__ */ x.jsx(
          Fb,
          {
            className: Se("size-4", p),
            ...y
          }
        ) : /* @__PURE__ */ x.jsx(qd, { className: Se("size-4", p), ...y }),
        DayButton: PD,
        WeekNumber: ({ children: p, ...v }) => /* @__PURE__ */ x.jsx("td", { ...v, children: /* @__PURE__ */ x.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) }),
        ...d
      },
      ...m
    }
  );
}
function PD({
  className: n,
  day: a,
  modifiers: l,
  ...o
}) {
  const s = Vd(), f = b.useRef(null);
  return b.useEffect(() => {
    l.focused && f.current?.focus();
  }, [l.focused]), /* @__PURE__ */ x.jsx(
    ft,
    {
      ref: f,
      variant: "ghost",
      size: "icon",
      "data-day": a.date.toLocaleDateString(),
      "data-selected-single": l.selected && !l.range_start && !l.range_end && !l.range_middle,
      "data-range-start": l.range_start,
      "data-range-end": l.range_end,
      "data-range-middle": l.range_middle,
      className: Se(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        s.day,
        n
      ),
      ...o
    }
  );
}
var GD = Object.defineProperty, At = (n, a) => GD(n, "name", { value: a, configurable: !0 }), cd = "dismissableLayer.update", WD = "dismissableLayer.pointerDownOutside", VD = "dismissableLayer.focusOutside", Iy, f0 = b.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), d0 = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ At(function(a, l) {
    const {
      disableOutsidePointerEvents: o = !1,
      deferPointerDownOutside: s = !1,
      onEscapeKeyDown: f,
      onPointerDownOutside: d,
      onFocusOutside: m,
      onInteractOutside: h,
      onDismiss: p,
      ...v
    } = a, y = b.useContext(f0), [S, E] = b.useState(null), T = S?.ownerDocument ?? globalThis?.document, [, O] = b.useState({}), C = nt(l, E), M = Array.from(y.layers), [R] = [
      ...y.layersWithOutsidePointerEventsDisabled
    ].slice(-1), _ = R ? M.indexOf(R) : -1, k = S ? M.indexOf(S) : -1, H = y.layersWithOutsidePointerEventsDisabled.size > 0, z = k >= _, N = b.useRef(!1), U = m0(
      (ee) => {
        d?.(ee), h?.(ee), ee.defaultPrevented || p?.();
      },
      {
        ownerDocument: T,
        deferPointerDownOutside: s,
        isDeferredPointerDownOutsideRef: N,
        dismissableSurfaces: y.dismissableSurfaces,
        shouldHandlePointerDownOutside: b.useCallback(
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
    ), Q = h0((ee) => {
      if (s && N.current)
        return;
      const ie = ee.target;
      [...y.branches].some((me) => me.contains(ie)) || (m?.(ee), h?.(ee), ee.defaultPrevented || p?.());
    }, T), $ = S ? k === M.length - 1 : !1, te = _n((ee) => {
      ee.key === "Escape" && (f?.(ee), !ee.defaultPrevented && p && (ee.preventDefault(), p()));
    });
    return b.useEffect(() => {
      if ($)
        return T.addEventListener("keydown", te, { capture: !0 }), () => T.removeEventListener("keydown", te, { capture: !0 });
    }, [T, $, te]), b.useEffect(() => {
      if (S)
        return o && (y.layersWithOutsidePointerEventsDisabled.size === 0 && (Iy = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(S)), y.layers.add(S), ud(), () => {
          o && (y.layersWithOutsidePointerEventsDisabled.delete(S), y.layersWithOutsidePointerEventsDisabled.size === 0 && (T.body.style.pointerEvents = Iy));
        };
    }, [S, T, o, y]), b.useEffect(() => () => {
      S && (y.layers.delete(S), y.layersWithOutsidePointerEventsDisabled.delete(S), ud());
    }, [S, y]), b.useEffect(() => {
      const ee = /* @__PURE__ */ At(() => O({}), "handleUpdate");
      return document.addEventListener(cd, ee), () => document.removeEventListener(cd, ee);
    }, []), /* @__PURE__ */ x.jsx(
      at.div,
      {
        ...v,
        ref: C,
        style: {
          pointerEvents: H ? z ? "auto" : "none" : void 0,
          ...a.style
        },
        onFocusCapture: je(a.onFocusCapture, Q.onFocusCapture),
        onBlurCapture: je(a.onBlurCapture, Q.onBlurCapture),
        onPointerDownCapture: je(
          a.onPointerDownCapture,
          U.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function XD() {
  const n = b.useContext(f0), [a, l] = b.useState(null);
  return b.useEffect(() => {
    if (a)
      return n.dismissableSurfaces.add(a), () => {
        n.dismissableSurfaces.delete(a);
      };
  }, [a, n.dismissableSurfaces]), l;
}
At(XD, "useDismissableLayerSurface");
var QD = /* @__PURE__ */ At(() => !0, "IS_TRUE");
function m0(n, a) {
  const {
    ownerDocument: l = globalThis?.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: s,
    dismissableSurfaces: f,
    shouldHandlePointerDownOutside: d = QD
  } = a, m = _n(n), h = b.useRef(!1), p = b.useRef(!1), v = b.useRef(/* @__PURE__ */ new Map()), y = b.useRef(() => {
  });
  return b.useEffect(() => {
    function S() {
      p.current = !1, s.current = !1, v.current.clear();
    }
    At(S, "resetOutsideInteraction");
    function E() {
      return Array.from(v.current.values()).some(Boolean);
    }
    At(E, "isOutsideInteractionIntercepted");
    function T(_) {
      if (!p.current)
        return;
      const k = _.target;
      k instanceof Node && [...f].some((z) => z.contains(k)) || v.current.set(_.type, !0), _.type === "click" && window.setTimeout(() => {
        p.current && y.current();
      }, 0);
    }
    At(T, "handleInteractionCapture");
    function O(_) {
      p.current && v.current.set(_.type, !1);
    }
    At(O, "handleInteractionBubble");
    const C = /* @__PURE__ */ At((_) => {
      if (_.target && !h.current) {
        let k = function() {
          l.removeEventListener("click", y.current);
          const z = E();
          S(), z || Fd(
            WD,
            m,
            H,
            { discrete: !0 }
          );
        };
        if (At(k, "handleAndDispatchPointerDownOutsideEvent"), !d(_.target)) {
          l.removeEventListener("click", y.current), S(), h.current = !1;
          return;
        }
        const H = { originalEvent: _ };
        p.current = !0, s.current = o && _.button === 0, v.current.clear(), !o || _.button !== 0 ? k() : (l.removeEventListener("click", y.current), y.current = k, l.addEventListener("click", y.current, { once: !0 }));
      } else
        l.removeEventListener("click", y.current), S();
      h.current = !1;
    }, "handlePointerDown"), M = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const _ of M)
      l.addEventListener(_, T, !0), l.addEventListener(_, O);
    const R = window.setTimeout(() => {
      l.addEventListener("pointerdown", C);
    }, 0);
    return () => {
      window.clearTimeout(R), l.removeEventListener("pointerdown", C), l.removeEventListener("click", y.current);
      for (const _ of M)
        l.removeEventListener(_, T, !0), l.removeEventListener(_, O);
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
    onPointerDownCapture: /* @__PURE__ */ At(() => h.current = !0, "onPointerDownCapture")
  };
}
At(m0, "usePointerDownOutside");
function h0(n, a = globalThis?.document) {
  const l = _n(n), o = b.useRef(!1);
  return b.useEffect(() => {
    const s = /* @__PURE__ */ At((f) => {
      f.target && !o.current && Fd(VD, l, { originalEvent: f }, {
        discrete: !1
      });
    }, "handleFocus");
    return a.addEventListener("focusin", s), () => a.removeEventListener("focusin", s);
  }, [a, l]), {
    onFocusCapture: /* @__PURE__ */ At(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ At(() => o.current = !1, "onBlurCapture")
  };
}
At(h0, "useFocusOutside");
function ud() {
  const n = new CustomEvent(cd);
  document.dispatchEvent(n);
}
At(ud, "dispatchUpdate");
function Fd(n, a, l, { discrete: o }) {
  const s = l.originalEvent.target, f = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: l });
  a && s.addEventListener(n, a, { once: !0 }), o ? Fv(s, f) : s.dispatchEvent(f);
}
At(Fd, "handleAndDispatchCustomEvent");
var FD = Object.defineProperty, Zd = (n, a) => FD(n, "name", { value: a, configurable: !0 }), xs = 0, zo = null;
function ZD(n) {
  return tc(), n.children;
}
Zd(ZD, "FocusGuards");
function tc() {
  b.useEffect(() => {
    zo || (zo = { start: fd(), end: fd() });
    const { start: n, end: a } = zo;
    return document.body.firstElementChild !== n && document.body.insertAdjacentElement("afterbegin", n), document.body.lastElementChild !== a && document.body.insertAdjacentElement("beforeend", a), xs++, () => {
      xs === 1 && (zo?.start.remove(), zo?.end.remove(), zo = null), xs = Math.max(0, xs - 1);
    };
  }, []);
}
Zd(tc, "useFocusGuards");
function fd() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
Zd(fd, "createFocusGuard");
var ID = Object.defineProperty, Et = (n, a) => ID(n, "name", { value: a, configurable: !0 }), Wf = "focusScope.autoFocusOnMount", Vf = "focusScope.autoFocusOnUnmount", Ky = { bubbles: !1, cancelable: !0 }, p0 = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Et(function(a, l) {
    const {
      loop: o = !1,
      trapped: s = !1,
      branches: f,
      onMountAutoFocus: d,
      onUnmountAutoFocus: m,
      ...h
    } = a, [p, v] = b.useState(null), y = _n(d), S = _n(m), E = b.useRef(null), T = nt(l, v), O = b.useRef(f);
    b.useEffect(() => {
      O.current = f;
    });
    const C = b.useCallback(
      (_) => _ ? p?.contains(_) ? !0 : !!O.current?.some((k) => k.contains(_)) : !1,
      [p]
    ), M = b.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    b.useEffect(() => {
      if (s) {
        let _ = function(N) {
          if (M.paused || !p) return;
          const U = N.target;
          C(U) ? E.current = U : ga(E.current, { select: !0 });
        }, k = function(N) {
          if (M.paused || !p) return;
          const U = N.relatedTarget;
          U !== null && (C(U) || ga(E.current, { select: !0 }));
        }, H = function(N) {
          if (document.activeElement === document.body)
            for (const Q of N)
              Q.removedNodes.length > 0 && ga(p);
        };
        Et(_, "handleFocusIn"), Et(k, "handleFocusOut"), Et(H, "handleMutations"), document.addEventListener("focusin", _), document.addEventListener("focusout", k);
        const z = new MutationObserver(H);
        return p && z.observe(p, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", _), document.removeEventListener("focusout", k), z.disconnect();
        };
      }
    }, [s, p, M.paused, C]), b.useEffect(() => {
      if (p) {
        $y.add(M);
        const _ = document.activeElement;
        if (!p.contains(_)) {
          const H = new CustomEvent(Wf, Ky);
          p.addEventListener(Wf, y), p.dispatchEvent(H), H.defaultPrevented || (w0(O0(Id(p)), { select: !0 }), document.activeElement === _ && ga(p));
        }
        return () => {
          p.removeEventListener(Wf, y);
          const H = p.ownerDocument, z = CustomEvent;
          setTimeout(() => {
            const N = new z(Vf, Ky);
            p.addEventListener(Vf, S), p.dispatchEvent(N), N.defaultPrevented || ga(_ ?? H.body, { select: !0 }), p.removeEventListener(Vf, S), $y.remove(M);
          }, 0);
        };
      }
    }, [p, y, S, M]);
    const R = b.useCallback(
      (_) => {
        if (!o && !s || M.paused) return;
        const k = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey, H = document.activeElement;
        if (k && H) {
          const z = _.currentTarget, [N, U] = S0(z);
          N && U ? !_.shiftKey && H === U ? (_.preventDefault(), o && ga(N, { select: !0 })) : _.shiftKey && H === N && (_.preventDefault(), o && ga(U, { select: !0 })) : H === z && _.preventDefault();
        }
      },
      [o, s, M.paused]
    );
    return /* @__PURE__ */ x.jsx(at.div, { tabIndex: -1, ...h, ref: T, onKeyDown: R });
  }, "FocusScope")
), g0 = b.createContext(null);
function y0({ registry: n, children: a }) {
  return n ? /* @__PURE__ */ x.jsx(g0.Provider, { value: n, children: a }) : a;
}
Et(y0, "FocusScopeBranchProvider");
function v0() {
  const [n, a] = b.useState([]), l = b.useMemo(
    () => ({
      add: /* @__PURE__ */ Et((o) => a((s) => s.includes(o) ? s : [...s, o]), "add"),
      remove: /* @__PURE__ */ Et((o) => a((s) => s.filter((f) => f !== o)), "remove")
    }),
    []
  );
  return { nodes: n, registry: l };
}
Et(v0, "useFocusScopeBranchRegistry");
function b0(n) {
  const a = b.useContext(g0);
  b.useEffect(() => {
    if (!(!n || !a))
      return a.add(n), () => a.remove(n);
  }, [n, a]);
}
Et(b0, "useFocusScopeBranch");
function w0(n, { select: a = !1 } = {}) {
  const l = document.activeElement;
  for (const o of n)
    if (ga(o, { select: a }), document.activeElement !== l) return;
}
Et(w0, "focusFirst");
function S0(n) {
  const a = Id(n), l = dd(a, n), o = dd(a.reverse(), n);
  return [l, o];
}
Et(S0, "getTabbableEdges");
function Id(n) {
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
Et(Id, "getTabbableCandidates");
function dd(n, a) {
  const l = typeof a.checkVisibility == "function" && a.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of n)
    if (!(l ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : x0(o, { upTo: a })))
      return o;
}
Et(dd, "findVisible");
function x0(n, { upTo: a }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (a !== void 0 && n === a) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
Et(x0, "isHidden");
function C0(n) {
  return n.tagName === "INPUT" && typeof n.select == "function";
}
Et(C0, "isSelectableInput");
function ga(n, { select: a = !1 } = {}) {
  if (n && n.focus) {
    const o = (n.ownerDocument ?? document).activeElement;
    n.focus({ preventScroll: !0 }), n !== o && C0(n) && a && n.select();
  }
}
Et(ga, "focus");
var $y = E0();
function E0() {
  let n = [];
  return {
    add(a) {
      const l = n[0];
      a !== l && l?.pause(), n = md(n, a), n.unshift(a);
    },
    remove(a) {
      n = md(n, a), n[0]?.resume();
    }
  };
}
Et(E0, "createFocusScopesStack");
function md(n, a) {
  const l = [...n], o = l.indexOf(a);
  return o !== -1 && l.splice(o, 1), l;
}
Et(md, "arrayRemove");
function O0(n) {
  return n.filter((a) => a.tagName !== "A");
}
Et(O0, "removeLinks");
const KD = ["top", "right", "bottom", "left"], rr = Math.min, wa = Math.max, qs = Math.round, Cs = Math.floor, Sa = (n) => ({
  x: n,
  y: n
}), $D = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function T0(n, a, l) {
  return wa(n, rr(a, l));
}
function Ea(n, a) {
  return typeof n == "function" ? n(a) : n;
}
function or(n) {
  return n.split("-")[0];
}
function Xo(n) {
  return n.split("-")[1];
}
function Kd(n) {
  return n === "x" ? "y" : "x";
}
function $d(n) {
  return n === "y" ? "height" : "width";
}
function Wn(n) {
  const a = n[0];
  return a === "t" || a === "b" ? "y" : "x";
}
function Jd(n) {
  return Kd(Wn(n));
}
function JD(n, a, l) {
  l === void 0 && (l = !1);
  const o = Xo(n), s = Jd(n), f = $d(s);
  let d = s === "x" ? o === (l ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return a.reference[f] > a.floating[f] && (d = Ps(d)), [d, Ps(d)];
}
function e_(n) {
  const a = Ps(n);
  return [hd(n), a, hd(a)];
}
function hd(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const Jy = ["left", "right"], ev = ["right", "left"], t_ = ["top", "bottom"], n_ = ["bottom", "top"];
function a_(n, a, l) {
  switch (n) {
    case "top":
    case "bottom":
      return l ? a ? ev : Jy : a ? Jy : ev;
    case "left":
    case "right":
      return a ? t_ : n_;
    default:
      return [];
  }
}
function r_(n, a, l, o) {
  const s = Xo(n);
  let f = a_(or(n), l === "start", o);
  return s && (f = f.map((d) => d + "-" + s), a && (f = f.concat(f.map(hd)))), f;
}
function Ps(n) {
  const a = or(n);
  return $D[a] + n.slice(a.length);
}
function o_(n) {
  var a, l, o, s;
  return {
    top: (a = n.top) != null ? a : 0,
    right: (l = n.right) != null ? l : 0,
    bottom: (o = n.bottom) != null ? o : 0,
    left: (s = n.left) != null ? s : 0
  };
}
function M0(n) {
  return typeof n != "number" ? o_(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Gs(n) {
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
function tv(n, a, l) {
  let {
    reference: o,
    floating: s
  } = n;
  const f = Wn(a), d = Jd(a), m = $d(d), h = or(a), p = f === "y", v = o.x + o.width / 2 - s.width / 2, y = o.y + o.height / 2 - s.height / 2, S = o[m] / 2 - s[m] / 2;
  let E;
  switch (h) {
    case "top":
      E = {
        x: v,
        y: o.y - s.height
      };
      break;
    case "bottom":
      E = {
        x: v,
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
  const T = Xo(a);
  return T && (E[d] += S * (T === "end" ? 1 : -1) * (l && p ? -1 : 1)), E;
}
async function l_(n, a) {
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
    rootBoundary: v = "viewport",
    elementContext: y = "floating",
    altBoundary: S = !1,
    padding: E = 0
  } = Ea(a, n), T = M0(E), C = m[S ? y === "floating" ? "reference" : "floating" : y], M = Gs(await f.getClippingRect({
    element: (l = await (f.isElement == null ? void 0 : f.isElement(C))) == null || l ? C : C.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(m.floating)),
    boundary: p,
    rootBoundary: v,
    strategy: h
  })), R = y === "floating" ? {
    x: o,
    y: s,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, _ = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m.floating)), k = await (f.isElement == null ? void 0 : f.isElement(_)) && await (f.getScale == null ? void 0 : f.getScale(_)) || {
    x: 1,
    y: 1
  }, H = Gs(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: R,
    offsetParent: _,
    strategy: h
  }) : R);
  return {
    top: (M.top - H.top + T.top) / k.y,
    bottom: (H.bottom - M.bottom + T.bottom) / k.y,
    left: (M.left - H.left + T.left) / k.x,
    right: (H.right - M.right + T.right) / k.x
  };
}
const i_ = 50, s_ = async (n, a, l) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: f = [],
    platform: d
  } = l, m = d.detectOverflow ? d : {
    ...d,
    detectOverflow: l_
  }, h = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let p = await d.getElementRects({
    reference: n,
    floating: a,
    strategy: s
  }), {
    x: v,
    y
  } = tv(p, o, h), S = o, E = 0;
  const T = {};
  for (let O = 0; O < f.length; O++) {
    const C = f[O];
    if (!C)
      continue;
    const {
      name: M,
      fn: R
    } = C, {
      x: _,
      y: k,
      data: H,
      reset: z
    } = await R({
      x: v,
      y,
      initialPlacement: o,
      placement: S,
      strategy: s,
      middlewareData: T,
      rects: p,
      platform: m,
      elements: {
        reference: n,
        floating: a
      }
    });
    v = _ ?? v, y = k ?? y, T[M] = {
      ...T[M],
      ...H
    }, z && E < i_ && (E++, typeof z == "object" && (z.placement && (S = z.placement), z.rects && (p = z.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: a,
      strategy: s
    }) : z.rects), {
      x: v,
      y
    } = tv(p, S, h)), O = -1);
  }
  return {
    x: v,
    y,
    placement: S,
    strategy: s,
    middlewareData: T
  };
}, c_ = (n) => ({
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
      padding: v = 0
    } = Ea(n, a) || {};
    if (p == null)
      return {};
    const y = M0(v), S = {
      x: l,
      y: o
    }, E = Jd(s), T = $d(E), O = await d.getDimensions(p), C = E === "y", M = C ? "top" : "left", R = C ? "bottom" : "right", _ = C ? "clientHeight" : "clientWidth", k = f.reference[T] + f.reference[E] - S[E] - f.floating[T], H = S[E] - f.reference[E], z = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
    let N = z ? z[_] : 0;
    (!N || !await (d.isElement == null ? void 0 : d.isElement(z))) && (N = m.floating[_] || f.floating[T]);
    const U = k / 2 - H / 2, Q = N / 2 - O[T] / 2 - 1, $ = rr(y[M], Q), te = rr(y[R], Q), ee = N - O[T] - te, ie = N / 2 - O[T] / 2 + U, le = T0($, ie, ee), me = !h.arrow && Xo(s) != null && ie !== le && f.reference[T] / 2 - (ie < $ ? $ : te) - O[T] / 2 < 0, Y = me ? ie < $ ? ie - $ : ie - ee : 0;
    return {
      [E]: S[E] + Y,
      data: {
        [E]: le,
        centerOffset: ie - le - Y,
        ...me && {
          alignmentOffset: Y
        }
      },
      reset: me
    };
  }
}), u_ = function(n) {
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
        mainAxis: v = !0,
        crossAxis: y = !0,
        fallbackPlacements: S,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: O = !0,
        ...C
      } = Ea(n, a);
      if ((l = f.arrow) != null && l.alignmentOffset)
        return {};
      const M = or(s), R = Wn(m), _ = or(m) === m, k = await (h.isRTL == null ? void 0 : h.isRTL(p.floating)), H = S || (_ || !O ? [Ps(m)] : e_(m)), z = T !== "none";
      !S && z && H.push(...r_(m, O, T, k));
      const N = [m, ...H], U = await h.detectOverflow(a, C), Q = [];
      let $ = ((o = f.flip) == null ? void 0 : o.overflows) || [];
      if (v && Q.push(U[M]), y) {
        const le = JD(s, d, k);
        Q.push(U[le[0]], U[le[1]]);
      }
      if ($ = [...$, {
        placement: s,
        overflows: Q
      }], !Q.every((le) => le <= 0)) {
        var te, ee;
        const le = (((te = f.flip) == null ? void 0 : te.index) || 0) + 1, me = N[le];
        if (me && (!(y === "alignment" ? R !== Wn(me) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((K) => Wn(K.placement) === R ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: le,
              overflows: $
            },
            reset: {
              placement: me
            }
          };
        let Y = (ee = $.filter((F) => F.overflows[0] <= 0).sort((F, K) => F.overflows[1] - K.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var ie;
              const F = (ie = $.filter((K) => {
                if (z) {
                  const ne = Wn(K.placement);
                  return ne === R || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ne === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((ne) => ne > 0).reduce((ne, W) => ne + W, 0)]).sort((K, ne) => K[1] - ne[1])[0]) == null ? void 0 : ie[0];
              F && (Y = F);
              break;
            }
            case "initialPlacement":
              Y = m;
              break;
          }
        if (s !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
function nv(n, a) {
  return {
    top: n.top - a.height,
    right: n.right - a.width,
    bottom: n.bottom - a.height,
    left: n.left - a.width
  };
}
function av(n) {
  return KD.some((a) => n[a] >= 0);
}
const f_ = function(n) {
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
          }), m = nv(d, l.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: av(m)
            }
          };
        }
        case "escaped": {
          const d = await o.detectOverflow(a, {
            ...f,
            altBoundary: !0
          }), m = nv(d, l.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: av(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, D0 = /* @__PURE__ */ new Set(["left", "top"]);
async function d_(n, a) {
  const {
    placement: l,
    platform: o,
    elements: s
  } = n, f = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), d = or(l), m = Xo(l), h = Wn(l) === "y", p = D0.has(d) ? -1 : 1, v = f && h ? -1 : 1, y = Ea(a, n);
  let {
    mainAxis: S,
    crossAxis: E,
    alignmentAxis: T
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return m && typeof T == "number" && (E = m === "end" ? T * -1 : T), h ? {
    x: E * v,
    y: S * p
  } : {
    x: S * p,
    y: E * v
  };
}
const m_ = function(n) {
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
      } = a, h = await d_(a, n);
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
}, h_ = function(n) {
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
          fn: (R) => {
            let {
              x: _,
              y: k
            } = R;
            return {
              x: _,
              y: k
            };
          }
        },
        ...p
      } = Ea(n, a), v = {
        x: l,
        y: o
      }, y = await f.detectOverflow(a, p), S = Wn(s), E = Kd(S);
      let T = v[E], O = v[S];
      const C = (R, _) => T0(_ + y[R === "y" ? "top" : "left"], _, _ - y[R === "y" ? "bottom" : "right"]);
      d && (T = C(E, T)), m && (O = C(S, O));
      const M = h.fn({
        ...a,
        [E]: T,
        [S]: O
      });
      return {
        ...M,
        data: {
          x: M.x - l,
          y: M.y - o,
          enabled: {
            [E]: d,
            [S]: m
          }
        }
      };
    }
  };
}, p_ = function(n) {
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
        mainAxis: v = !0,
        crossAxis: y = !0
      } = Ea(n, a), S = {
        x: s,
        y: f
      }, E = Wn(d), T = Kd(E);
      let O = S[T], C = S[E];
      const M = Ea(p, a), R = typeof M == "number" ? {
        mainAxis: M,
        crossAxis: 0
      } : {
        mainAxis: (l = M.mainAxis) != null ? l : 0,
        crossAxis: (o = M.crossAxis) != null ? o : 0
      };
      if (v) {
        const H = T === "y" ? "height" : "width", z = m.reference[T] - m.floating[H] + R.mainAxis, N = m.reference[T] + m.reference[H] - R.mainAxis;
        O < z ? O = z : O > N && (O = N);
      }
      if (y) {
        var _, k;
        const H = T === "y" ? "width" : "height", z = D0.has(or(d)), N = m.reference[E] - m.floating[H] + (z && ((_ = h.offset) == null ? void 0 : _[E]) || 0) + (z ? 0 : R.crossAxis), U = m.reference[E] + m.reference[H] + (z ? 0 : ((k = h.offset) == null ? void 0 : k[E]) || 0) - (z ? R.crossAxis : 0);
        C < N ? C = N : C > U && (C = U);
      }
      return {
        [T]: O,
        [E]: C
      };
    }
  };
}, g_ = function(n) {
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
      } = Ea(n, a), h = await s.detectOverflow(a, m), p = or(l), v = Xo(l), y = Wn(l) === "y", {
        width: S,
        height: E
      } = o.floating;
      let T, O;
      p === "top" || p === "bottom" ? (T = p, O = v === (await (s.isRTL == null ? void 0 : s.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (O = p, T = v === "end" ? "top" : "bottom");
      const C = E - h.top - h.bottom, M = S - h.left - h.right, R = rr(E - h[T], C), _ = rr(S - h[O], M), k = a.middlewareData.shift, H = !k;
      let z = R, N = _;
      k != null && k.enabled.x && (N = M), k != null && k.enabled.y && (z = C), H && !v && (y ? N = S - 2 * wa(h.left, h.right) : z = E - 2 * wa(h.top, h.bottom)), await d({
        ...a,
        availableWidth: N,
        availableHeight: z
      });
      const U = await s.getDimensions(f.floating);
      return S !== U.width || E !== U.height ? {
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
function Qo(n) {
  return _0(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function $t(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function Ta(n) {
  var a;
  return (a = (_0(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : a.documentElement;
}
function _0(n) {
  return nc() ? n instanceof Node || n instanceof $t(n).Node : !1;
}
function Vn(n) {
  return nc() ? n instanceof Element || n instanceof $t(n).Element : !1;
}
function ir(n) {
  return nc() ? n instanceof HTMLElement || n instanceof $t(n).HTMLElement : !1;
}
function rv(n) {
  return !nc() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof $t(n).ShadowRoot;
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
function y_(n) {
  return /^(table|td|th)$/.test(Qo(n));
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
const v_ = /transform|translate|scale|rotate|perspective|filter/, b_ = /paint|layout|strict|content/, Nr = (n) => !!n && n !== "none";
let Xf;
function em(n) {
  const a = Vn(n) ? Xn(n) : n;
  return Nr(a.transform) || Nr(a.translate) || Nr(a.scale) || Nr(a.rotate) || Nr(a.perspective) || !tm() && (Nr(a.backdropFilter) || Nr(a.filter)) || v_.test(a.willChange || "") || b_.test(a.contain || "");
}
function w_(n) {
  let a = Yr(n);
  for (; ir(a) && !Ql(a); ) {
    if (em(a))
      return a;
    if (rc(a))
      return null;
    a = Yr(a);
  }
  return null;
}
function tm() {
  return Xf == null && (Xf = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Xf;
}
function Ql(n) {
  return /^(html|body|#document)$/.test(Qo(n));
}
function Xn(n) {
  return $t(n).getComputedStyle(n);
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
function Yr(n) {
  if (Qo(n) === "html")
    return n;
  const a = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    rv(n) && n.host || // Fallback.
    Ta(n)
  );
  return rv(a) ? a.host : a;
}
function A0(n) {
  const a = Yr(n);
  return Ql(a) ? (n.ownerDocument || n).body : ir(a) && ac(a) ? a : A0(a);
}
function Fl(n, a, l) {
  var o;
  a === void 0 && (a = []), l === void 0 && (l = !0);
  const s = A0(n), f = s === ((o = n.ownerDocument) == null ? void 0 : o.body), d = $t(s);
  if (f) {
    const m = pd(d);
    return a.concat(d, d.visualViewport || [], ac(s) ? s : [], m && l ? Fl(m) : []);
  } else
    return a.concat(s, Fl(s, [], l));
}
function pd(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function N0(n) {
  const a = Xn(n);
  let l = parseFloat(a.width) || 0, o = parseFloat(a.height) || 0;
  const s = ir(n), f = s ? n.offsetWidth : l, d = s ? n.offsetHeight : o, m = qs(l) !== f || qs(o) !== d;
  return m && (l = f, o = d), {
    width: l,
    height: o,
    $: m
  };
}
function nm(n) {
  return Vn(n) ? n : n.contextElement;
}
function qo(n) {
  const a = nm(n);
  if (!ir(a))
    return Sa(1);
  const l = a.getBoundingClientRect(), {
    width: o,
    height: s,
    $: f
  } = N0(a);
  let d = (f ? qs(l.width) : l.width) / o, m = (f ? qs(l.height) : l.height) / s;
  return (!d || !Number.isFinite(d)) && (d = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: d,
    y: m
  };
}
const S_ = /* @__PURE__ */ Sa(0);
function R0(n) {
  const a = $t(n);
  return !tm() || !a.visualViewport ? S_ : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function x_(n, a, l) {
  return a === void 0 && (a = !1), !!l && a && l === $t(n);
}
function Hr(n, a, l, o) {
  a === void 0 && (a = !1), l === void 0 && (l = !1);
  const s = n.getBoundingClientRect(), f = nm(n);
  let d = Sa(1);
  a && (o ? Vn(o) && (d = qo(o)) : d = qo(n));
  const m = x_(f, l, o) ? R0(f) : Sa(0);
  let h = (s.left + m.x) / d.x, p = (s.top + m.y) / d.y, v = s.width / d.x, y = s.height / d.y;
  if (f && o) {
    const S = $t(f), E = Vn(o) ? $t(o) : o;
    let T = S, O = pd(T);
    for (; O && E !== T; ) {
      const C = qo(O), M = O.getBoundingClientRect(), R = Xn(O), _ = M.left + (O.clientLeft + parseFloat(R.paddingLeft)) * C.x, k = M.top + (O.clientTop + parseFloat(R.paddingTop)) * C.y;
      h *= C.x, p *= C.y, v *= C.x, y *= C.y, h += _, p += k, T = $t(O), O = pd(T);
    }
  }
  return Gs({
    width: v,
    height: y,
    x: h,
    y: p
  });
}
function lc(n, a) {
  const l = oc(n).scrollLeft;
  return a ? a.left + l : Hr(Ta(n)).left + l;
}
function k0(n, a) {
  const l = n.getBoundingClientRect(), o = l.left + a.scrollLeft - lc(n, l), s = l.top + a.scrollTop;
  return {
    x: o,
    y: s
  };
}
function C_(n) {
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
  }, p = Sa(1);
  const v = Sa(0), y = ir(o);
  if ((y || !f) && ((Qo(o) !== "body" || ac(d)) && (h = oc(o)), y)) {
    const E = Hr(o);
    p = qo(o), v.x = E.x + o.clientLeft, v.y = E.y + o.clientTop;
  }
  const S = d && !y && !f ? k0(d, h) : Sa(0);
  return {
    width: l.width * p.x,
    height: l.height * p.y,
    x: l.x * p.x - h.scrollLeft * p.x + v.x + S.x,
    y: l.y * p.y - h.scrollTop * p.y + v.y + S.y
  };
}
function E_(n) {
  return n.getClientRects ? Array.from(n.getClientRects()) : [];
}
function O_(n) {
  const a = oc(n), l = n.ownerDocument.body, o = wa(n.scrollWidth, n.clientWidth, l.scrollWidth, l.clientWidth), s = wa(n.scrollHeight, n.clientHeight, l.scrollHeight, l.clientHeight);
  let f = -a.scrollLeft + lc(n);
  const d = -a.scrollTop;
  return Xn(l).direction === "rtl" && (f += wa(n.clientWidth, l.clientWidth) - o), {
    width: o,
    height: s,
    x: f,
    y: d
  };
}
const T_ = 25;
function M_(n, a, l) {
  l === void 0 && (l = "viewport");
  const o = l === "layoutViewport", s = $t(n), f = Ta(n), d = s.visualViewport;
  let m = f.clientWidth, h = f.clientHeight, p = 0, v = 0;
  if (d) {
    const S = !tm() || a === "fixed";
    o ? S || (p = -d.offsetLeft, v = -d.offsetTop) : (m = d.width, h = d.height, S && (p = d.offsetLeft, v = d.offsetTop));
  }
  if (lc(f) <= 0) {
    const S = f.ownerDocument, E = S.body, T = getComputedStyle(E), O = S.compatMode === "CSS1Compat" && parseFloat(T.marginLeft) + parseFloat(T.marginRight) || 0, C = Math.abs(f.clientWidth - E.clientWidth - O), M = getComputedStyle(f).scrollbarGutter === "stable both-edges" ? C / 2 : C;
    M <= T_ && (m -= M);
  }
  return {
    width: m,
    height: h,
    x: p,
    y: v
  };
}
function D_(n, a) {
  const l = Hr(n, !0, a === "fixed"), o = l.top + n.clientTop, s = l.left + n.clientLeft, f = qo(n), d = n.clientWidth * f.x, m = n.clientHeight * f.y, h = s * f.x, p = o * f.y;
  return {
    width: d,
    height: m,
    x: h,
    y: p
  };
}
function ov(n, a, l) {
  let o;
  if (a === "viewport" || a === "layoutViewport")
    o = M_(n, l, a);
  else if (a === "document")
    o = O_(Ta(n));
  else if (Vn(a))
    o = D_(a, l);
  else {
    const s = R0(n);
    o = {
      x: a.x - s.x,
      y: a.y - s.y,
      width: a.width,
      height: a.height
    };
  }
  return Gs(o);
}
function __(n, a) {
  const l = a.get(n);
  if (l)
    return l;
  let o = Fl(n, [], !1).filter((m) => Vn(m) && Qo(m) !== "body"), s = null;
  const f = Xn(n).position === "fixed";
  let d = f ? Yr(n) : n;
  for (; Vn(d) && !Ql(d); ) {
    const m = Xn(d), h = em(d), p = s ? s.position : f ? "fixed" : "";
    !h && (p === "fixed" || p === "absolute" && m.position === "static") ? o = o.filter((y) => y !== d) : s = m, d = Yr(d);
  }
  return a.set(n, o), o;
}
function A_(n) {
  let {
    element: a,
    boundary: l,
    rootBoundary: o,
    strategy: s
  } = n;
  const d = [...l === "clippingAncestors" ? rc(a) ? [] : __(a, this._c) : [].concat(l), o], m = ov(a, d[0], s);
  let h = m.top, p = m.right, v = m.bottom, y = m.left;
  for (let S = 1; S < d.length; S++) {
    const E = ov(a, d[S], s);
    h = wa(E.top, h), p = rr(E.right, p), v = rr(E.bottom, v), y = wa(E.left, y);
  }
  return {
    width: p - y,
    height: v - h,
    x: y,
    y: h
  };
}
function N_(n) {
  const {
    width: a,
    height: l
  } = N0(n);
  return {
    width: a,
    height: l
  };
}
function R_(n, a, l) {
  const o = ir(a), s = Ta(a), f = l === "fixed", d = Hr(n, !0, f, a);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const h = Sa(0);
  if ((o || !f) && ((Qo(a) !== "body" || ac(s)) && (m = oc(a)), o)) {
    const S = Hr(a, !0, f, a);
    h.x = S.x + a.clientLeft, h.y = S.y + a.clientTop;
  }
  !o && s && (h.x = lc(s));
  const p = s && !o && !f ? k0(s, m) : Sa(0), v = d.left + m.scrollLeft - h.x - p.x, y = d.top + m.scrollTop - h.y - p.y;
  return {
    x: v,
    y,
    width: d.width,
    height: d.height
  };
}
function Qf(n) {
  return Xn(n).position === "static";
}
function lv(n, a) {
  if (!ir(n) || Xn(n).position === "fixed")
    return null;
  if (a)
    return a(n);
  let l = n.offsetParent;
  return Ta(n) === l && (l = l.ownerDocument.body), l;
}
function z0(n, a) {
  const l = $t(n);
  if (rc(n))
    return l;
  if (!ir(n)) {
    let s = Yr(n);
    for (; s && !Ql(s); ) {
      if (Vn(s) && !Qf(s))
        return s;
      s = Yr(s);
    }
    return l;
  }
  let o = lv(n, a);
  for (; o && y_(o) && Qf(o); )
    o = lv(o, a);
  return o && Ql(o) && Qf(o) && !em(o) ? l : o || w_(n) || l;
}
const k_ = async function(n) {
  const a = this.getOffsetParent || z0, l = this.getDimensions, o = await l(n.floating);
  return {
    reference: R_(n.reference, await a(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function z_(n) {
  return Xn(n).direction === "rtl";
}
const j_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: C_,
  getDocumentElement: Ta,
  getClippingRect: A_,
  getOffsetParent: z0,
  getElementRects: k_,
  getClientRects: E_,
  getDimensions: N_,
  getScale: qo,
  isElement: Vn,
  isRTL: z_
};
function j0(n, a) {
  return n.x === a.x && n.y === a.y && n.width === a.width && n.height === a.height;
}
function Y_(n, a, l) {
  let o = null, s;
  const f = Ta(n);
  function d() {
    var v;
    clearTimeout(s), (v = o) == null || v.disconnect(), o = null;
  }
  function m(v, y) {
    v === void 0 && (v = !1), y === void 0 && (y = 1), d();
    const S = n.getBoundingClientRect(), {
      left: E,
      top: T,
      width: O,
      height: C
    } = S;
    if (v || a(), !O || !C)
      return;
    const M = Cs(T), R = Cs(f.clientWidth - (E + O)), _ = Cs(f.clientHeight - (T + C)), k = Cs(E), z = {
      rootMargin: -M + "px " + -R + "px " + -_ + "px " + -k + "px",
      threshold: wa(0, rr(1, y)) || 1
    };
    let N = !0;
    function U(Q) {
      const $ = Q[0].intersectionRatio;
      if (!j0(S, n.getBoundingClientRect()))
        return m();
      if ($ !== y) {
        if (!N)
          return m();
        $ ? m(!1, $) : s = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      N = !1;
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
  const h = $t(n), p = () => m(l);
  return h.addEventListener("resize", p), m(!0), () => {
    h.removeEventListener("resize", p), d();
  };
}
function H_(n, a, l, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: f = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: h = !1
  } = o, p = nm(n), v = s || f ? [...p ? Fl(p) : [], ...a ? Fl(a) : []] : [];
  v.forEach((M) => {
    s && M.addEventListener("scroll", l), f && M.addEventListener("resize", l);
  });
  const y = p && m ? Y_(p, l, f) : null;
  let S = -1, E = null;
  d && (E = new ResizeObserver((M) => {
    let [R] = M;
    R && R.target === p && E && a && (E.unobserve(a), cancelAnimationFrame(S), S = requestAnimationFrame(() => {
      var _;
      (_ = E) == null || _.observe(a);
    })), l();
  }), p && !h && E.observe(p), a && E.observe(a));
  let T, O = h ? Hr(n) : null;
  h && C();
  function C() {
    const M = Hr(n);
    O && !j0(O, M) && l(), O = M, T = requestAnimationFrame(C);
  }
  return l(), () => {
    var M;
    v.forEach((R) => {
      s && R.removeEventListener("scroll", l), f && R.removeEventListener("resize", l);
    }), y?.(), (M = E) == null || M.disconnect(), E = null, h && cancelAnimationFrame(T);
  };
}
const B_ = m_, U_ = h_, L_ = u_, q_ = g_, P_ = f_, iv = c_, G_ = p_, W_ = (n, a, l) => {
  const o = /* @__PURE__ */ new Map(), s = l ?? {}, f = {
    ...j_,
    ...s.platform,
    _c: o
  };
  return s_(n, a, {
    ...s,
    platform: f
  });
};
var V_ = typeof document < "u", X_ = function() {
}, Rs = V_ ? b.useLayoutEffect : X_;
function Ws(n, a) {
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
        if (!Ws(n[o], a[o]))
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
      if (!(f === "_owner" && n.$$typeof) && !Ws(n[f], a[f]))
        return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function Y0(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sv(n, a) {
  const l = Y0(n);
  return Math.round(a * l) / l;
}
function Ff(n) {
  const a = b.useRef(n);
  return Rs(() => {
    a.current = n;
  }), a;
}
function Q_(n) {
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
  } = n, [v, y] = b.useState({
    x: 0,
    y: 0,
    strategy: l,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [S, E] = b.useState(o);
  Ws(S, o) || E(o);
  const [T, O] = b.useState(null), [C, M] = b.useState(null), R = b.useCallback((K) => {
    K !== z.current && (z.current = K, O(K));
  }, []), _ = b.useCallback((K) => {
    K !== N.current && (N.current = K, M(K));
  }, []), k = f || T, H = d || C, z = b.useRef(null), N = b.useRef(null), U = b.useRef(v), Q = h != null, $ = Ff(h), te = Ff(s), ee = Ff(p), ie = b.useCallback(() => {
    if (!z.current || !N.current)
      return;
    const K = {
      placement: a,
      strategy: l,
      middleware: S
    };
    te.current && (K.platform = te.current), W_(z.current, N.current, K).then((ne) => {
      const W = {
        ...ne,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ee.current !== !1
      };
      le.current && !Ws(U.current, W) && (U.current = W, Il.flushSync(() => {
        y(W);
      }));
    });
  }, [S, a, l, te, ee]);
  Rs(() => {
    p === !1 && U.current.isPositioned && (U.current.isPositioned = !1, y((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [p]);
  const le = b.useRef(!1);
  Rs(() => (le.current = !0, () => {
    le.current = !1;
  }), []), Rs(() => {
    if (k && (z.current = k), H && (N.current = H), k && H) {
      if ($.current)
        return $.current(k, H, ie);
      ie();
    }
  }, [k, H, ie, $, Q]);
  const me = b.useMemo(() => ({
    reference: z,
    floating: N,
    setReference: R,
    setFloating: _
  }), [R, _]), Y = b.useMemo(() => ({
    reference: k,
    floating: H
  }), [k, H]), F = b.useMemo(() => {
    const K = {
      position: l,
      left: 0,
      top: 0
    };
    if (!Y.floating)
      return K;
    const ne = sv(Y.floating, v.x), W = sv(Y.floating, v.y);
    return m ? {
      ...K,
      transform: "translate(" + ne + "px, " + W + "px)",
      ...Y0(Y.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: l,
      left: ne,
      top: W
    };
  }, [l, m, Y.floating, v.x, v.y]);
  return b.useMemo(() => ({
    ...v,
    update: ie,
    refs: me,
    elements: Y,
    floatingStyles: F
  }), [v, ie, me, Y, F]);
}
const F_ = (n) => {
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
      return o && a(o) ? o.current != null ? iv({
        element: o.current,
        padding: s
      }).fn(l) : {} : o ? iv({
        element: o,
        padding: s
      }).fn(l) : {};
    }
  };
}, Z_ = (n, a) => {
  const l = B_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, I_ = (n, a) => {
  const l = U_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, K_ = (n, a) => ({
  fn: G_(n).fn,
  options: [n, a]
}), $_ = (n, a) => {
  const l = L_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, J_ = (n, a) => {
  const l = q_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, e2 = (n, a) => {
  const l = P_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, t2 = (n, a) => {
  const l = F_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
};
var n2 = Object.defineProperty, nr = (n, a) => n2(n, "name", { value: a, configurable: !0 }), cv = {
  Partial: "partial"
}, uv = {
  Optimized: "optimized",
  Always: "always"
}, H0 = "Popper", [B0, ic] = /* @__PURE__ */ Oa(H0), [a2, U0] = B0(H0), L0 = /* @__PURE__ */ nr((n) => {
  const { __scopePopper: a, children: l } = n, [o, s] = b.useState(null), [f, d] = b.useState(void 0);
  return /* @__PURE__ */ x.jsx(
    a2,
    {
      scope: a,
      anchor: o,
      onAnchorChange: s,
      placementState: f,
      setPlacementState: d,
      children: l
    }
  );
}, "Popper"), r2 = "PopperAnchor", q0 = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ nr(function(a, l) {
    const { __scopePopper: o, virtualRef: s, ...f } = a, d = U0(r2, o), m = b.useRef(null), h = d.onAnchorChange, p = b.useCallback(
      (O) => {
        m.current = O, O && h(O);
      },
      [h]
    ), v = nt(l, p), y = b.useRef(null);
    b.useEffect(() => {
      if (!s)
        return;
      const O = y.current;
      y.current = s.current, O !== y.current && h(y.current);
    });
    const S = d.placementState && sc(d.placementState), E = S?.[0], T = S?.[1];
    return s ? null : /* @__PURE__ */ x.jsx(
      at.div,
      {
        "data-radix-popper-side": E,
        "data-radix-popper-align": T,
        ...f,
        ref: v
      }
    );
  }, "PopperAnchor")
), P0 = "PopperContent", [o2, dN] = B0(P0), G0 = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ nr(function(a, l) {
    const {
      __scopePopper: o,
      side: s = "bottom",
      sideOffset: f = 0,
      align: d = "center",
      alignOffset: m = 0,
      arrowPadding: h = 0,
      avoidCollisions: p = !0,
      collisionBoundary: v = [],
      collisionPadding: y = 0,
      sticky: S = cv.Partial,
      hideWhenDetached: E = !1,
      updatePositionStrategy: T = uv.Optimized,
      onPlaced: O,
      ...C
    } = a, M = U0(P0, o), [R, _] = b.useState(null), k = nt(l, _), [H, z] = b.useState(null), N = Od(H), U = N?.width ?? 0, Q = N?.height ?? 0, $ = s + (d !== "center" ? "-" + d : ""), te = typeof y == "number" ? y : { top: 0, right: 0, bottom: 0, left: 0, ...y }, ee = Array.isArray(v) ? v : [v], ie = ee.length > 0, le = {
      padding: te,
      boundary: ee.filter(W0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ie
    }, { refs: me, floatingStyles: Y, placement: F, isPositioned: K, middlewareData: ne } = Q_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: $,
      whileElementsMounted: /* @__PURE__ */ nr((...ye) => H_(...ye, {
        animationFrame: T === uv.Always
      }), "whileElementsMounted"),
      elements: {
        reference: M.anchor
      },
      middleware: [
        Z_({ mainAxis: f + Q, alignmentAxis: m }),
        p && I_({
          mainAxis: !0,
          crossAxis: !1,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...S === cv.Partial ? { limiter: K_() } : {},
          ...le
        }),
        p && $_({ ...le }),
        J_({
          ...le,
          apply: /* @__PURE__ */ nr(({ elements: ye, rects: he, availableWidth: Qe, availableHeight: Le }) => {
            const { width: Ce, height: Oe } = he.reference, Ge = ye.floating.style;
            Ge.setProperty("--radix-popper-available-width", `${Qe}px`), Ge.setProperty("--radix-popper-available-height", `${Le}px`), Ge.setProperty("--radix-popper-anchor-width", `${Ce}px`), Ge.setProperty("--radix-popper-anchor-height", `${Oe}px`);
          }, "apply")
        }),
        H && t2({ element: H, padding: h }),
        l2({ arrowWidth: U, arrowHeight: Q }),
        E && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        e2(
          ie ? { strategy: "referenceHidden", ...le } : {
            strategy: "referenceHidden",
            padding: le.padding,
            altBoundary: le.altBoundary
          }
        )
      ]
    }), W = M.setPlacementState;
    bt(() => (W(F), () => {
      W(void 0);
    }), [F, W]);
    const [D, V] = sc(F), J = _n(O);
    bt(() => {
      K && J?.();
    }, [K, J]);
    const ae = ne.arrow?.x, re = ne.arrow?.y, oe = ne.arrow?.centerOffset !== 0, [ve, Xe] = b.useState();
    return bt(() => {
      R && Xe(window.getComputedStyle(R).zIndex);
    }, [R]), /* @__PURE__ */ x.jsx(
      "div",
      {
        ref: me.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: K ? Y.transform : "translate(0, -200%)",
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
        children: /* @__PURE__ */ x.jsx(
          o2,
          {
            scope: o,
            placedSide: D,
            placedAlign: V,
            onArrowChange: z,
            arrowX: ae,
            arrowY: re,
            shouldHideArrow: oe,
            children: /* @__PURE__ */ x.jsx(
              at.div,
              {
                "data-side": D,
                "data-align": V,
                ...C,
                ref: k,
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
function W0(n) {
  return n !== null;
}
nr(W0, "isNotNull");
var l2 = /* @__PURE__ */ nr((n) => ({
  name: "transformOrigin",
  options: n,
  fn(a) {
    const { placement: l, rects: o, middlewareData: s } = a, d = s.arrow?.centerOffset !== 0, m = d ? 0 : n.arrowWidth, h = d ? 0 : n.arrowHeight, [p, v] = sc(l), y = { start: "0%", center: "50%", end: "100%" }[v], S = (s.arrow?.x ?? 0) + m / 2, E = (s.arrow?.y ?? 0) + h / 2;
    let T = "", O = "";
    return p === "bottom" ? (T = d ? y : `${S}px`, O = `${-h}px`) : p === "top" ? (T = d ? y : `${S}px`, O = `${o.floating.height + h}px`) : p === "right" ? (T = `${-h}px`, O = d ? y : `${E}px`) : p === "left" && (T = `${o.floating.width + h}px`, O = d ? y : `${E}px`), { data: { x: T, y: O } };
  }
}), "transformOrigin");
function sc(n) {
  const [a, l = "center"] = n.split("-");
  return [a, l];
}
nr(sc, "getSideAndAlignFromPlacement");
var i2 = Object.defineProperty, s2 = (n, a) => i2(n, "name", { value: a, configurable: !0 }), V0 = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ s2(function(a, l) {
    const { container: o, ...s } = a, [f, d] = b.useState(!1);
    bt(() => d(!0), []);
    const m = o || f && globalThis?.document?.body;
    return m ? Il.createPortal(/* @__PURE__ */ x.jsx(at.div, { ...s, ref: l }), m) : null;
  }, "Portal")
), c2 = function(n) {
  if (typeof document > "u")
    return null;
  var a = Array.isArray(n) ? n[0] : n;
  return a.ownerDocument.body;
}, jo = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), Os = {}, Zf = 0, X0 = function(n) {
  return n && (n.host || X0(n.parentNode));
}, u2 = function(n, a) {
  return a.map(function(l) {
    if (n.contains(l))
      return l;
    var o = X0(l);
    return o && n.contains(o) ? o : (console.error("aria-hidden", l, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(l) {
    return !!l;
  });
}, f2 = function(n, a, l, o) {
  var s = u2(a, Array.isArray(n) ? n : [n]);
  Os[l] || (Os[l] = /* @__PURE__ */ new WeakMap());
  var f = Os[l], d = [], m = /* @__PURE__ */ new Set(), h = new Set(s), p = function(y) {
    !y || m.has(y) || (m.add(y), p(y.parentNode));
  };
  s.forEach(p);
  var v = function(y) {
    !y || h.has(y) || Array.prototype.forEach.call(y.children, function(S) {
      if (m.has(S))
        v(S);
      else
        try {
          var E = S.getAttribute(o), T = E !== null && E !== "false", O = (jo.get(S) || 0) + 1, C = (f.get(S) || 0) + 1;
          jo.set(S, O), f.set(S, C), d.push(S), O === 1 && T && Es.set(S, !0), C === 1 && S.setAttribute(l, "true"), T || S.setAttribute(o, "true");
        } catch (M) {
          console.error("aria-hidden: cannot operate on ", S, M);
        }
    });
  };
  return v(a), m.clear(), Zf++, function() {
    d.forEach(function(y) {
      var S = jo.get(y) - 1, E = f.get(y) - 1;
      jo.set(y, S), f.set(y, E), S || (Es.has(y) || y.removeAttribute(o), Es.delete(y)), E || y.removeAttribute(l);
    }), Zf--, Zf || (jo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), Os = {});
  };
}, Q0 = function(n, a, l) {
  l === void 0 && (l = "data-aria-hidden");
  var o = Array.from(Array.isArray(n) ? n : [n]), s = c2(n);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), f2(o, s, l, "aria-hidden")) : function() {
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
function F0(n, a) {
  var l = {};
  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && a.indexOf(o) < 0 && (l[o] = n[o]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(n); s < o.length; s++)
      a.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[s]) && (l[o[s]] = n[o[s]]);
  return l;
}
function d2(n, a, l) {
  if (l || arguments.length === 2) for (var o = 0, s = a.length, f; o < s; o++)
    (f || !(o in a)) && (f || (f = Array.prototype.slice.call(a, 0, o)), f[o] = a[o]);
  return n.concat(f || Array.prototype.slice.call(a));
}
var ks = "right-scroll-bar-position", zs = "width-before-scroll-bar", m2 = "with-scroll-bars-hidden", h2 = "--removed-body-scroll-bar-size";
function If(n, a) {
  return typeof n == "function" ? n(a) : n && (n.current = a), n;
}
function p2(n, a) {
  var l = b.useState(function() {
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
var g2 = typeof window < "u" ? b.useLayoutEffect : b.useEffect, fv = /* @__PURE__ */ new WeakMap();
function y2(n, a) {
  var l = p2(null, function(o) {
    return n.forEach(function(s) {
      return If(s, o);
    });
  });
  return g2(function() {
    var o = fv.get(l);
    if (o) {
      var s = new Set(o), f = new Set(n), d = l.current;
      s.forEach(function(m) {
        f.has(m) || If(m, null);
      }), f.forEach(function(m) {
        s.has(m) || If(m, d);
      });
    }
    fv.set(l, n);
  }, [n]), l;
}
function v2(n) {
  return n;
}
function b2(n, a) {
  a === void 0 && (a = v2);
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
        var v = d;
        d = [], v.forEach(f);
      }, p = function() {
        return Promise.resolve().then(h);
      };
      p(), l = {
        push: function(v) {
          d.push(v), p();
        },
        filter: function(v) {
          return d = d.filter(v), l;
        }
      };
    }
  };
  return s;
}
function w2(n) {
  n === void 0 && (n = {});
  var a = b2(null);
  return a.options = Pn({ async: !0, ssr: !1 }, n), a;
}
var Z0 = function(n) {
  var a = n.sideCar, l = F0(n, ["sideCar"]);
  if (!a)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = a.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return b.createElement(o, Pn({}, l));
};
Z0.isSideCarExport = !0;
function S2(n, a) {
  return n.useMedium(a), Z0;
}
var I0 = w2(), Kf = function() {
}, cc = b.forwardRef(function(n, a) {
  var l = b.useRef(null), o = b.useState({
    onScrollCapture: Kf,
    onWheelCapture: Kf,
    onTouchMoveCapture: Kf
  }), s = o[0], f = o[1], d = n.forwardProps, m = n.children, h = n.className, p = n.removeScrollBar, v = n.enabled, y = n.shards, S = n.sideCar, E = n.noRelative, T = n.noIsolation, O = n.inert, C = n.allowPinchZoom, M = n.as, R = M === void 0 ? "div" : M, _ = n.gapMode, k = F0(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), H = S, z = y2([l, a]), N = Pn(Pn({}, k), s);
  return b.createElement(
    b.Fragment,
    null,
    v && b.createElement(H, { sideCar: I0, removeScrollBar: p, shards: y, noRelative: E, noIsolation: T, inert: O, setCallbacks: f, allowPinchZoom: !!C, lockRef: l, gapMode: _ }),
    d ? b.cloneElement(b.Children.only(m), Pn(Pn({}, N), { ref: z })) : b.createElement(R, Pn({}, N, { className: h, ref: z }), m)
  );
});
cc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
cc.classNames = {
  fullWidth: zs,
  zeroRight: ks
};
var x2 = function() {
  if (typeof globalThis.__weiboStyleNonce < "u")
    return globalThis.__weiboStyleNonce;
};
function C2() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var a = x2();
  return a && n.setAttribute("nonce", a), n;
}
function E2(n, a) {
  n.styleSheet ? n.styleSheet.cssText = a : n.appendChild(document.createTextNode(a));
}
function O2(n) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(n);
}
var T2 = function() {
  var n = 0, a = null;
  return {
    add: function(l) {
      n == 0 && (a = C2()) && (E2(a, l), O2(a)), n++;
    },
    remove: function() {
      n--, !n && a && (a.parentNode && a.parentNode.removeChild(a), a = null);
    }
  };
}, M2 = function() {
  var n = T2();
  return function(a, l) {
    b.useEffect(function() {
      return n.add(a), function() {
        n.remove();
      };
    }, [a && l]);
  };
}, K0 = function() {
  var n = M2(), a = function(l) {
    var o = l.styles, s = l.dynamic;
    return n(o, s), null;
  };
  return a;
}, D2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $f = function(n) {
  return parseInt(n || "", 10) || 0;
}, _2 = function(n) {
  var a = window.getComputedStyle(document.body), l = a[n === "padding" ? "paddingLeft" : "marginLeft"], o = a[n === "padding" ? "paddingTop" : "marginTop"], s = a[n === "padding" ? "paddingRight" : "marginRight"];
  return [$f(l), $f(o), $f(s)];
}, A2 = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return D2;
  var a = _2(n), l = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: a[0],
    top: a[1],
    right: a[2],
    gap: Math.max(0, o - l + a[2] - a[0])
  };
}, N2 = K0(), Po = "data-scroll-locked", R2 = function(n, a, l, o) {
  var s = n.left, f = n.top, d = n.right, m = n.gap;
  return l === void 0 && (l = "margin"), `
  .`.concat(m2, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(m, "px ").concat(o, `;
  }
  body[`).concat(Po, `] {
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
  
  .`).concat(ks, ` {
    right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(zs, ` {
    margin-right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(ks, " .").concat(ks, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(zs, " .").concat(zs, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Po, `] {
    `).concat(h2, ": ").concat(m, `px;
  }
`);
}, dv = function() {
  var n = parseInt(document.body.getAttribute(Po) || "0", 10);
  return isFinite(n) ? n : 0;
}, k2 = function() {
  b.useEffect(function() {
    return document.body.setAttribute(Po, (dv() + 1).toString()), function() {
      var n = dv() - 1;
      n <= 0 ? document.body.removeAttribute(Po) : document.body.setAttribute(Po, n.toString());
    };
  }, []);
}, z2 = function(n) {
  var a = n.noRelative, l = n.noImportant, o = n.gapMode, s = o === void 0 ? "margin" : o;
  k2();
  var f = b.useMemo(function() {
    return A2(s);
  }, [s]);
  return b.createElement(N2, { styles: R2(f, !a, s, l ? "" : "!important") });
}, gd = !1;
if (typeof window < "u")
  try {
    var Ts = Object.defineProperty({}, "passive", {
      get: function() {
        return gd = !0, !0;
      }
    });
    window.addEventListener("test", Ts, Ts), window.removeEventListener("test", Ts, Ts);
  } catch {
    gd = !1;
  }
var Yo = gd ? { passive: !1 } : !1, j2 = function(n) {
  return n.tagName === "TEXTAREA";
}, $0 = function(n, a) {
  if (!(n instanceof Element))
    return !1;
  var l = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    l[a] !== "hidden" && // contains scroll inside self
    !(l.overflowY === l.overflowX && !j2(n) && l[a] === "visible")
  );
}, Y2 = function(n) {
  return $0(n, "overflowY");
}, H2 = function(n) {
  return $0(n, "overflowX");
}, mv = function(n, a) {
  var l = a.ownerDocument, o = a;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = J0(n, o);
    if (s) {
      var f = ew(n, o), d = f[1], m = f[2];
      if (d > m)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== l.body);
  return !1;
}, B2 = function(n) {
  var a = n.scrollTop, l = n.scrollHeight, o = n.clientHeight;
  return [
    a,
    l,
    o
  ];
}, U2 = function(n) {
  var a = n.scrollLeft, l = n.scrollWidth, o = n.clientWidth;
  return [
    a,
    l,
    o
  ];
}, J0 = function(n, a) {
  return n === "v" ? Y2(a) : H2(a);
}, ew = function(n, a) {
  return n === "v" ? B2(a) : U2(a);
}, L2 = function(n, a) {
  return n === "h" && a === "rtl" ? -1 : 1;
}, q2 = function(n, a, l, o, s) {
  var f = L2(n, window.getComputedStyle(a).direction), d = f * o, m = l.target, h = a.contains(m), p = !1, v = d > 0, y = 0, S = 0;
  do {
    if (!m)
      break;
    var E = ew(n, m), T = E[0], O = E[1], C = E[2], M = O - C - f * T;
    (T || M) && J0(n, m) && (y += M, S += T);
    var R = m.parentNode;
    m = R && R.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? R.host : R;
  } while (
    // portaled content
    !h && m !== document.body || // self content
    h && (a.contains(m) || a === m)
  );
  return (v && Math.abs(y) < 1 || !v && Math.abs(S) < 1) && (p = !0), p;
}, Ms = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, hv = function(n) {
  return [n.deltaX, n.deltaY];
}, pv = function(n) {
  return n && "current" in n ? n.current : n;
}, P2 = function(n, a) {
  return n[0] === a[0] && n[1] === a[1];
}, G2 = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, W2 = 0, Ho = [];
function V2(n) {
  var a = b.useRef([]), l = b.useRef([0, 0]), o = b.useRef(), s = b.useState(W2++)[0], f = b.useState(K0)[0], d = b.useRef(n);
  b.useEffect(function() {
    d.current = n;
  }, [n]), b.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var O = d2([n.lockRef.current], (n.shards || []).map(pv), !0).filter(Boolean);
      return O.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), O.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var m = b.useCallback(function(O, C) {
    if ("touches" in O && O.touches.length === 2 || O.type === "wheel" && O.ctrlKey)
      return !d.current.allowPinchZoom;
    var M = Ms(O), R = l.current, _ = "deltaX" in O ? O.deltaX : R[0] - M[0], k = "deltaY" in O ? O.deltaY : R[1] - M[1], H, z = O.target, N = Math.abs(_) > Math.abs(k) ? "h" : "v";
    if ("touches" in O && N === "h" && z.type === "range")
      return !1;
    var U = window.getSelection(), Q = U && U.anchorNode, $ = Q ? Q === z || Q.contains(z) : !1;
    if ($)
      return !1;
    var te = mv(N, z);
    if (!te)
      return !0;
    if (te ? H = N : (H = N === "v" ? "h" : "v", te = mv(N, z)), !te)
      return !1;
    if (!o.current && "changedTouches" in O && (_ || k) && (o.current = H), !H)
      return !0;
    var ee = o.current || H;
    return q2(ee, C, O, ee === "h" ? _ : k);
  }, []), h = b.useCallback(function(O) {
    var C = O;
    if (!(!Ho.length || Ho[Ho.length - 1] !== f)) {
      var M = "deltaY" in C ? hv(C) : Ms(C), R = a.current.filter(function(H) {
        return H.name === C.type && (H.target === C.target || C.target === H.shadowParent) && P2(H.delta, M);
      })[0];
      if (R && R.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!R) {
        var _ = (d.current.shards || []).map(pv).filter(Boolean).filter(function(H) {
          return H.contains(C.target);
        }), k = _.length > 0 ? m(C, _[0]) : !d.current.noIsolation;
        k && C.cancelable && C.preventDefault();
      }
    }
  }, []), p = b.useCallback(function(O, C, M, R) {
    var _ = { name: O, delta: C, target: M, should: R, shadowParent: X2(M) };
    a.current.push(_), setTimeout(function() {
      a.current = a.current.filter(function(k) {
        return k !== _;
      });
    }, 1);
  }, []), v = b.useCallback(function(O) {
    l.current = Ms(O), o.current = void 0;
  }, []), y = b.useCallback(function(O) {
    p(O.type, hv(O), O.target, m(O, n.lockRef.current));
  }, []), S = b.useCallback(function(O) {
    p(O.type, Ms(O), O.target, m(O, n.lockRef.current));
  }, []);
  b.useEffect(function() {
    return Ho.push(f), n.setCallbacks({
      onScrollCapture: y,
      onWheelCapture: y,
      onTouchMoveCapture: S
    }), document.addEventListener("wheel", h, Yo), document.addEventListener("touchmove", h, Yo), document.addEventListener("touchstart", v, Yo), function() {
      Ho = Ho.filter(function(O) {
        return O !== f;
      }), document.removeEventListener("wheel", h, Yo), document.removeEventListener("touchmove", h, Yo), document.removeEventListener("touchstart", v, Yo);
    };
  }, []);
  var E = n.removeScrollBar, T = n.inert;
  return b.createElement(
    b.Fragment,
    null,
    T ? b.createElement(f, { styles: G2(s) }) : null,
    E ? b.createElement(z2, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function X2(n) {
  for (var a = null; n !== null; )
    n instanceof ShadowRoot && (a = n.host, n = n.host), n = n.parentNode;
  return a;
}
const Q2 = S2(I0, V2);
var am = b.forwardRef(function(n, a) {
  return b.createElement(cc, Pn({}, n, { ref: a, sideCar: Q2 }));
});
am.classNames = cc.classNames;
var F2 = Object.defineProperty, Ma = (n, a) => F2(n, "name", { value: a, configurable: !0 }), rm = "Popover", [tw, mN] = /* @__PURE__ */ Oa(rm, [
  ic
]), om = ic(), [Z2, Fo] = tw(rm), I2 = /* @__PURE__ */ Ma((n) => {
  const {
    __scopePopover: a,
    children: l,
    open: o,
    defaultOpen: s,
    onOpenChange: f,
    modal: d = !1
  } = n, m = om(a), h = b.useRef(null), [p, v] = b.useState(!1), [y, S] = b.useState(0), [E, T] = b.useState(0), [O, C] = zr({
    prop: o,
    defaultProp: s ?? !1,
    onChange: f,
    caller: rm
  });
  return /* @__PURE__ */ x.jsx(L0, { ...m, children: /* @__PURE__ */ x.jsx(
    Z2,
    {
      scope: a,
      contentId: tr(),
      titleId: tr(),
      descriptionId: tr(),
      titlePresent: y > 0,
      descriptionPresent: E > 0,
      setTitleCount: S,
      setDescriptionCount: T,
      triggerRef: h,
      open: O,
      onOpenChange: C,
      onOpenToggle: b.useCallback(() => C((M) => !M), [C]),
      hasCustomAnchor: p,
      onCustomAnchorAdd: b.useCallback(() => v(!0), []),
      onCustomAnchorRemove: b.useCallback(() => v(!1), []),
      modal: d,
      children: l
    }
  ) });
}, "Popover"), K2 = "PopoverTrigger", $2 = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Ma(function(a, l) {
    const { __scopePopover: o, ...s } = a, f = Fo(K2, o), d = om(o), m = nt(l, f.triggerRef), h = /* @__PURE__ */ x.jsx(
      at.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": f.open,
        "aria-controls": f.open ? f.contentId : void 0,
        "data-state": lm(f.open),
        ...s,
        ref: m,
        onClick: je(a.onClick, f.onOpenToggle)
      }
    );
    return f.hasCustomAnchor ? h : /* @__PURE__ */ x.jsx(q0, { asChild: !0, ...d, children: h });
  }, "PopoverTrigger")
), nw = "PopoverPortal", [J2, eA] = tw(nw, {
  forceMount: void 0
}), tA = /* @__PURE__ */ Ma((n) => {
  const { __scopePopover: a, forceMount: l, children: o, container: s } = n, f = Fo(nw, a);
  return /* @__PURE__ */ x.jsx(J2, { scope: a, forceMount: l, children: /* @__PURE__ */ x.jsx(Zs, { present: l || f.open, children: /* @__PURE__ */ x.jsx(V0, { asChild: !0, container: s, children: o }) }) });
}, "PopoverPortal"), Zl = "PopoverContent", nA = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = eA(Zl, a.__scopePopover), { forceMount: s = o.forceMount, ...f } = a, d = Fo(Zl, a.__scopePopover);
    return /* @__PURE__ */ x.jsx(Zs, { present: s || d.open, children: d.modal ? /* @__PURE__ */ x.jsx(rA, { ...f, ref: l }) : /* @__PURE__ */ x.jsx(oA, { ...f, ref: l }) });
  }, "PopoverContent")
), aA = /* @__PURE__ */ xa("PopoverContent.RemoveScroll"), rA = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = Fo(Zl, a.__scopePopover), s = b.useRef(null), f = nt(l, s), d = b.useRef(!1), { nodes: m, registry: h } = v0();
    return b.useEffect(() => {
      const p = s.current;
      if (p) return Q0(p);
    }, []), /* @__PURE__ */ x.jsx(
      am,
      {
        as: aA,
        allowPinchZoom: !0,
        shards: b.useMemo(
          () => [s, ...m.map((p) => ({ current: p }))],
          [s, m]
        ),
        children: /* @__PURE__ */ x.jsx(
          aw,
          {
            ...a,
            ref: f,
            branchNodes: m,
            branchRegistry: h,
            trapFocus: o.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: je(a.onCloseAutoFocus, (p) => {
              p.preventDefault(), d.current || o.triggerRef.current?.focus();
            }),
            onPointerDownOutside: je(
              a.onPointerDownOutside,
              (p) => {
                const v = p.detail.originalEvent, y = v.button === 0 && v.ctrlKey === !0, S = v.button === 2 || y;
                d.current = S;
              },
              { checkForDefaultPrevented: !1 }
            ),
            onFocusOutside: je(
              a.onFocusOutside,
              (p) => p.preventDefault(),
              { checkForDefaultPrevented: !1 }
            )
          }
        )
      }
    );
  }, "PopoverContentModal")
), oA = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = Fo(Zl, a.__scopePopover), s = b.useRef(!1), f = b.useRef(!1);
    return /* @__PURE__ */ x.jsx(
      aw,
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
), aw = /* @__PURE__ */ b.forwardRef(
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
      onFocusOutside: v,
      onInteractOutside: y,
      "aria-describedby": S,
      branchNodes: E,
      branchRegistry: T,
      ...O
    } = a, C = Fo(Zl, o), M = om(o), [R, _] = b.useState(null), k = nt(l, _);
    return b0(R), tc(), /* @__PURE__ */ x.jsx(y0, { registry: T, children: /* @__PURE__ */ x.jsx(
      p0,
      {
        asChild: !0,
        loop: !0,
        trapped: s,
        branches: E,
        onMountAutoFocus: f,
        onUnmountAutoFocus: d,
        children: /* @__PURE__ */ x.jsx(
          d0,
          {
            asChild: !0,
            disableOutsidePointerEvents: m,
            onInteractOutside: y,
            onEscapeKeyDown: h,
            onPointerDownOutside: p,
            onFocusOutside: v,
            onDismiss: () => C.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ x.jsx(
              G0,
              {
                "data-state": lm(C.open),
                role: "dialog",
                id: C.contentId,
                "aria-labelledby": C.titlePresent ? C.titleId : void 0,
                "aria-describedby": C.descriptionPresent ? rw(S, C.descriptionId) : S,
                ...M,
                ...O,
                ref: k,
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
function lm(n) {
  return n ? "open" : "closed";
}
Ma(lm, "getState");
function rw(...n) {
  const a = /* @__PURE__ */ new Set();
  for (const l of n)
    if (typeof l == "string")
      for (const o of String(l).trim().split(/\s+/))
        o && a.add(o);
  return a.size > 0 ? Array.from(a).join(" ") : void 0;
}
Ma(rw, "concatAriaDescribedby");
const ow = I2, lw = $2;
function iw({
  className: n,
  align: a = "center",
  sideOffset: l = 4,
  ...o
}) {
  return /* @__PURE__ */ x.jsx(tA, { children: /* @__PURE__ */ x.jsx(
    nA,
    {
      align: a,
      sideOffset: l,
      className: Se(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n
      ),
      ...o
    }
  ) });
}
var lA = Object.defineProperty, iA = (n, a) => lA(n, "name", { value: a, configurable: !0 });
function yd(n, [a, l]) {
  return Math.min(l, Math.max(a, n));
}
iA(yd, "clamp");
var sA = Object.freeze({
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
}), cA = Object.defineProperty, Ue = (n, a) => cA(n, "name", { value: a, configurable: !0 }), gv = {
  ItemAligned: "item-aligned",
  Popper: "popper"
}, uA = {
  RTL: "rtl"
}, fA = [" ", "Enter", "ArrowUp", "ArrowDown"], dA = [" ", "Enter"], Go = "Select", [uc, fc, mA] = /* @__PURE__ */ _d(Go), [Wr, hN] = /* @__PURE__ */ Oa(Go, [
  mA,
  ic
]), im = ic(), [hA, sr] = Wr(Go), [pA, gA] = Wr(Go);
function sw(n) {
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
    name: v,
    autoComplete: y,
    disabled: S,
    required: E,
    form: T,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: O
  } = n, C = im(a), [M, R] = b.useState(null), [_, k] = b.useState(null), [H, z] = b.useState(!1), N = Qs(p), [U, Q] = zr({
    prop: o,
    defaultProp: s ?? !1,
    onChange: f,
    caller: Go
  }), [$, te] = zr({
    prop: d,
    defaultProp: m,
    onChange: h,
    caller: Go
  }), ee = b.useRef(null), ie = b.useRef(!1), [le, me] = b.useState(null), Y = /* @__PURE__ */ Ue((oe) => {
    me({
      value: oe,
      hasConsumerStoppedPropagation: ie.current
    }), te(oe);
  }, "handleUserSelect"), F = b.useRef($);
  b.useEffect(() => {
    const oe = T ? M?.ownerDocument.getElementById(T) : M?.form;
    if (oe instanceof HTMLFormElement) {
      const ve = /* @__PURE__ */ Ue(() => te(F.current), "reset");
      return oe.addEventListener("reset", ve), () => oe.removeEventListener("reset", ve);
    }
  }, [T, M, te]);
  const K = M ? !!T || !!M.closest("form") : !0, [ne, W] = b.useState(/* @__PURE__ */ new Set()), D = tr(), V = Array.from(ne).map((oe) => oe.props.value).join(";"), J = b.useCallback((oe) => {
    W((ve) => new Set(ve).add(oe));
  }, []), ae = b.useCallback((oe) => {
    W((ve) => {
      const Xe = new Set(ve);
      return Xe.delete(oe), Xe;
    });
  }, []), re = {
    required: E,
    trigger: M,
    onTriggerChange: R,
    valueNode: _,
    onValueNodeChange: k,
    valueNodeHasChildren: H,
    onValueNodeHasChildrenChange: z,
    contentId: D,
    value: $,
    onValueChange: te,
    hasConsumerStoppedPropagationRef: ie,
    userSelection: le,
    onUserSelect: Y,
    open: U,
    onOpenChange: Q,
    dir: N,
    triggerPointerDownPosRef: ee,
    disabled: S,
    name: v,
    autoComplete: y,
    form: T,
    nativeOptions: ne,
    nativeSelectKey: V,
    isFormControl: K
  };
  return /* @__PURE__ */ x.jsx(L0, { ...C, children: /* @__PURE__ */ x.jsx(hA, { scope: a, ...re, children: /* @__PURE__ */ x.jsx(uc.Provider, { scope: a, children: /* @__PURE__ */ x.jsx(
    pA,
    {
      scope: a,
      onNativeOptionAdd: J,
      onNativeOptionRemove: ae,
      children: dw(O) ? O(re) : l
    }
  ) }) }) });
}
Ue(sw, "SelectProvider");
var yA = /* @__PURE__ */ Ue((n) => {
  const { __scopeSelect: a, children: l, ...o } = n;
  return /* @__PURE__ */ x.jsx(
    sw,
    {
      __scopeSelect: a,
      ...o,
      internal_do_not_use_render: ({ isFormControl: s }) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        l,
        s ? /* @__PURE__ */ x.jsx(
          GA,
          {
            __scopeSelect: a
          }
        ) : null
      ] })
    }
  );
}, "Select"), vA = "SelectTrigger", bA = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Ue(function(a, l) {
    const { __scopeSelect: o, disabled: s = !1, ...f } = a, d = im(o), m = sr(vA, o), h = m.disabled || s, p = nt(l, m.onTriggerChange), v = fc(o), y = b.useRef("touch"), [S, E, T] = cm((C) => {
      const M = v().filter((k) => !k.disabled), R = M.find((k) => k.value === m.value), _ = um(M, C, R);
      _ !== void 0 && m.onUserSelect(_.value);
    }), O = /* @__PURE__ */ Ue((C) => {
      h || (m.onOpenChange(!0), T()), C && (m.triggerPointerDownPosRef.current = {
        x: Math.round(C.pageX),
        y: Math.round(C.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ x.jsx(q0, { asChild: !0, ...d, children: /* @__PURE__ */ x.jsx(
      at.button,
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
        "data-placeholder": ei(m.value) ? "" : void 0,
        ...f,
        ref: p,
        onClick: je(f.onClick, (C) => {
          C.currentTarget.focus(), y.current !== "mouse" && O(C);
        }),
        onPointerDown: je(f.onPointerDown, (C) => {
          y.current = C.pointerType;
          const M = C.target;
          M.hasPointerCapture(C.pointerId) && M.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (O(C), C.preventDefault());
        }),
        onKeyDown: je(f.onKeyDown, (C) => {
          const M = S.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && (m.hasConsumerStoppedPropagationRef.current = C.isPropagationStopped(), E(C.key)), !(M && C.key === " ") && fA.includes(C.key) && (O(), C.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), wA = "SelectValue", SA = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Ue(function(a, l) {
    const { __scopeSelect: o, className: s, style: f, children: d, placeholder: m = "", ...h } = a, p = sr(wA, o), { onValueNodeHasChildrenChange: v } = p, y = d !== void 0, S = nt(l, p.onValueNodeChange);
    bt(() => {
      v(y);
    }, [v, y]);
    const E = ei(p.value);
    return /* @__PURE__ */ x.jsx(
      at.span,
      {
        ...h,
        asChild: E ? !1 : h.asChild,
        ref: S,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ x.jsx(b.Fragment, { children: E ? m : d }, E ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), xA = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Ue(function(a, l) {
    const { __scopeSelect: o, children: s, ...f } = a;
    return /* @__PURE__ */ x.jsx(at.span, { "aria-hidden": !0, ...f, ref: l, children: s || "▼" });
  }, "SelectIcon")
), CA = "SelectPortal", [EA, OA] = Wr(CA, {
  forceMount: void 0
}), TA = /* @__PURE__ */ Ue((n) => {
  const { __scopeSelect: a, forceMount: l, ...o } = n;
  return /* @__PURE__ */ x.jsx(EA, { scope: n.__scopeSelect, forceMount: l, children: /* @__PURE__ */ x.jsx(V0, { asChild: !0, ...o }) });
}, "SelectPortal"), Br = "SelectContent", MA = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Ue(function(a, l) {
    const o = OA(Br, a.__scopeSelect), { forceMount: s = o.forceMount, ...f } = a, d = sr(Br, a.__scopeSelect), [m, h] = b.useState();
    return bt(() => {
      h(new DocumentFragment());
    }, []), /* @__PURE__ */ x.jsx(Zs, { present: s || d.open, children: ({ present: p }) => p ? /* @__PURE__ */ x.jsx(AA, { ...f, ref: l }) : /* @__PURE__ */ x.jsx(DA, { ...f, fragment: m }) });
  }, "SelectContent")
), DA = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ue(function(a, l) {
  const { __scopeSelect: o, children: s, fragment: f } = a;
  return f ? Il.createPortal(
    /* @__PURE__ */ x.jsx(cw, { scope: o, children: /* @__PURE__ */ x.jsx(uc.Slot, { scope: o, children: /* @__PURE__ */ x.jsx("div", { ref: l, children: s }) }) }),
    f
  ) : null;
}, "SelectContentFragment")), Tn = 10, [cw, Vr] = Wr(Br), _A = /* @__PURE__ */ xa("SelectContent.RemoveScroll"), AA = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ue(function(a, l) {
    const { __scopeSelect: o } = a, {
      position: s = gv.ItemAligned,
      onCloseAutoFocus: f,
      onEscapeKeyDown: d,
      onPointerDownOutside: m,
      //
      // PopperContent props
      side: h,
      sideOffset: p,
      align: v,
      alignOffset: y,
      arrowPadding: S,
      collisionBoundary: E,
      collisionPadding: T,
      sticky: O,
      hideWhenDetached: C,
      avoidCollisions: M,
      //
      ...R
    } = a, _ = sr(Br, o), [k, H] = b.useState(null), [z, N] = b.useState(null), U = nt(l, H), [Q, $] = b.useState(null), [te, ee] = b.useState(
      null
    ), ie = fc(o), [le, me] = b.useState(!1), Y = b.useRef(!1), F = b.useRef(!1), K = b.useRef(!1);
    b.useEffect(() => {
      if (k) return Q0(k);
    }, [k]), tc();
    const ne = b.useCallback(
      (he) => {
        const [Qe, ...Le] = ie().map((Ge) => Ge.ref.current), [Ce] = Le.slice(-1), Oe = document.activeElement;
        for (const Ge of he)
          if (Ge === Oe || (Ge?.scrollIntoView({ block: "nearest" }), Ge === Qe && z && (z.scrollTop = 0), Ge === Ce && z && (z.scrollTop = z.scrollHeight), Ge?.focus(), document.activeElement !== Oe)) return;
      },
      [ie, z]
    ), W = b.useCallback(
      () => ne([Q, k]),
      [ne, Q, k]
    );
    b.useEffect(() => {
      le && W();
    }, [le, W]);
    const { onOpenChange: D, triggerPointerDownPosRef: V } = _;
    b.useEffect(() => {
      if (k) {
        let he = { x: 0, y: 0 };
        const Qe = /* @__PURE__ */ Ue((Ce) => {
          he = {
            x: Math.abs(Math.round(Ce.pageX) - (V.current?.x ?? 0)),
            y: Math.abs(Math.round(Ce.pageY) - (V.current?.y ?? 0))
          };
        }, "handlePointerMove"), Le = /* @__PURE__ */ Ue((Ce) => {
          he.x <= 10 && he.y <= 10 ? Ce.preventDefault() : Ce.composedPath().includes(k) || D(!1), document.removeEventListener("pointermove", Qe), V.current = null;
        }, "handlePointerUp");
        return V.current !== null && (document.addEventListener("pointermove", Qe), document.addEventListener("pointerup", Le, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Qe), document.removeEventListener("pointerup", Le, { capture: !0 });
        };
      }
    }, [k, D, V]), b.useEffect(() => {
      const he = /* @__PURE__ */ Ue(() => D(!1), "close");
      return window.addEventListener("blur", he), window.addEventListener("resize", he), () => {
        window.removeEventListener("blur", he), window.removeEventListener("resize", he);
      };
    }, [D]);
    const [J, ae] = cm((he) => {
      const Qe = ie().filter((Oe) => !Oe.disabled), Le = Qe.find((Oe) => Oe.ref.current === document.activeElement), Ce = um(Qe, he, Le);
      Ce && setTimeout(() => Ce.ref.current?.focus());
    }), re = b.useCallback(
      (he, Qe, Le) => {
        const Ce = !F.current;
        Ce && (F.current = !0);
        const Oe = !Y.current && !Le;
        _.value !== void 0 && _.value === Qe || Oe ? ($(he), Oe && (Y.current = !0)) : Ce && $(he);
      },
      [_.value]
    ), oe = b.useCallback(() => k?.focus(), [k]), ve = b.useCallback(
      (he, Qe, Le) => {
        if (!he) return;
        const Ce = !K.current;
        Ce && (K.current = !0);
        const Oe = !Y.current && !Le;
        (_.value !== void 0 && _.value === Qe || Oe || Ce) && ee(he);
      },
      [_.value]
    ), Xe = s === gv.Popper ? yv : NA, ye = Xe === yv ? {
      side: h,
      sideOffset: p,
      align: v,
      alignOffset: y,
      arrowPadding: S,
      collisionBoundary: E,
      collisionPadding: T,
      sticky: O,
      hideWhenDetached: C,
      avoidCollisions: M
    } : {};
    return /* @__PURE__ */ x.jsx(
      cw,
      {
        scope: o,
        content: k,
        viewport: z,
        onViewportChange: N,
        itemRefCallback: re,
        selectedItem: Q,
        onItemLeave: oe,
        itemTextRefCallback: ve,
        focusSelectedItem: W,
        selectedItemText: te,
        position: s,
        isPositioned: le,
        searchRef: J,
        children: /* @__PURE__ */ x.jsx(am, { as: _A, allowPinchZoom: !0, children: /* @__PURE__ */ x.jsx(
          p0,
          {
            asChild: !0,
            trapped: _.open,
            onMountAutoFocus: (he) => {
              he.preventDefault();
            },
            onUnmountAutoFocus: je(f, (he) => {
              _.trigger?.focus({ preventScroll: !0 }), he.preventDefault();
            }),
            children: /* @__PURE__ */ x.jsx(
              d0,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: m,
                onFocusOutside: (he) => he.preventDefault(),
                onDismiss: () => _.onOpenChange(!1),
                children: /* @__PURE__ */ x.jsx(
                  Xe,
                  {
                    role: "listbox",
                    id: _.contentId,
                    "data-state": _.open ? "open" : "closed",
                    dir: _.dir,
                    onContextMenu: (he) => he.preventDefault(),
                    ...R,
                    ...ye,
                    onPlaced: () => me(!0),
                    ref: U,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...R.style
                    },
                    onKeyDown: je(R.onKeyDown, (he) => {
                      const Qe = he.ctrlKey || he.altKey || he.metaKey;
                      if (he.key === "Tab" && he.preventDefault(), !Qe && he.key.length === 1 && ae(he.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(he.key)) {
                        let Ce = ie().filter((Oe) => !Oe.disabled).map((Oe) => Oe.ref.current);
                        if (["ArrowUp", "End"].includes(he.key) && (Ce = Ce.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(he.key)) {
                          const Oe = he.target, Ge = Ce.indexOf(Oe);
                          Ce = Ce.slice(Ge + 1);
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
), NA = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ue(function(a, l) {
  const { __scopeSelect: o, onPlaced: s, ...f } = a, d = sr(Br, o), m = Vr(Br, o), [h, p] = b.useState(null), [v, y] = b.useState(null), S = nt(l, y), E = fc(o), T = b.useRef(!1), O = b.useRef(!0), { viewport: C, selectedItem: M, selectedItemText: R, focusSelectedItem: _ } = m, k = b.useCallback(() => {
    if (d.trigger && d.valueNode && h && v && C && M && R) {
      const U = d.trigger.getBoundingClientRect(), Q = v.getBoundingClientRect(), $ = d.valueNode.getBoundingClientRect(), te = R.getBoundingClientRect();
      if (d.dir !== uA.RTL) {
        const Le = te.left - Q.left, Ce = $.left - Le, Oe = U.left - Ce, Ge = U.width + Oe, Zn = Math.max(Ge, Q.width), cr = window.innerWidth - Tn, Da = yd(Ce, [
          Tn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Tn, cr - Zn)
        ]);
        h.style.minWidth = Ge + "px", h.style.left = Da + "px";
      } else {
        const Le = Q.right - te.right, Ce = window.innerWidth - $.right - Le, Oe = window.innerWidth - U.right - Ce, Ge = U.width + Oe, Zn = Math.max(Ge, Q.width), cr = window.innerWidth - Tn, Da = yd(Ce, [
          Tn,
          Math.max(Tn, cr - Zn)
        ]);
        h.style.minWidth = Ge + "px", h.style.right = Da + "px";
      }
      const ee = E(), ie = window.innerHeight - Tn * 2, le = C.scrollHeight, me = window.getComputedStyle(v), Y = parseInt(me.borderTopWidth, 10), F = parseInt(me.paddingTop, 10), K = parseInt(me.borderBottomWidth, 10), ne = parseInt(me.paddingBottom, 10), W = Y + F + le + ne + K, D = Math.min(M.offsetHeight * 5, W), V = window.getComputedStyle(C), J = parseInt(V.paddingTop, 10), ae = parseInt(V.paddingBottom, 10), re = U.top + U.height / 2 - Tn, oe = ie - re, ve = M.offsetHeight / 2, Xe = M.offsetTop + ve, ye = Y + F + Xe, he = W - ye;
      if (ye <= re) {
        const Le = ee.length > 0 && M === ee[ee.length - 1].ref.current;
        h.style.bottom = "0px";
        const Ce = v.clientHeight - C.offsetTop - C.offsetHeight, Oe = Math.max(
          oe,
          ve + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Le ? ae : 0) + Ce + K
        ), Ge = ye + Oe;
        h.style.height = Ge + "px";
      } else {
        const Le = ee.length > 0 && M === ee[0].ref.current;
        h.style.top = "0px";
        const Oe = Math.max(
          re,
          Y + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Le ? J : 0) + ve
        ) + he;
        h.style.height = Oe + "px", C.scrollTop = ye - re + C.offsetTop;
      }
      h.style.margin = `${Tn}px 0`, h.style.minHeight = D + "px", h.style.maxHeight = ie + "px", s?.(), requestAnimationFrame(() => T.current = !0);
    }
  }, [
    E,
    d.trigger,
    d.valueNode,
    h,
    v,
    C,
    M,
    R,
    d.dir,
    s
  ]);
  bt(() => k(), [k]);
  const [H, z] = b.useState();
  bt(() => {
    v && z(window.getComputedStyle(v).zIndex);
  }, [v]);
  const N = b.useCallback(
    (U) => {
      U && O.current === !0 && (k(), _?.(), O.current = !1);
    },
    [k, _]
  );
  return /* @__PURE__ */ x.jsx(
    RA,
    {
      scope: o,
      contentWrapper: h,
      shouldExpandOnScrollRef: T,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ x.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: H
          },
          children: /* @__PURE__ */ x.jsx(
            at.div,
            {
              ...f,
              ref: S,
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
}, "SelectItemAlignedPosition")), yv = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ue(function(a, l) {
  const {
    __scopeSelect: o,
    align: s = "start",
    collisionPadding: f = Tn,
    ...d
  } = a, m = im(o);
  return /* @__PURE__ */ x.jsx(
    G0,
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
}, "SelectPopperPosition")), [RA, sm] = Wr(Br, {}), vv = "SelectViewport", kA = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Ue(function(a, l) {
    const { __scopeSelect: o, nonce: s, ...f } = a, d = Vr(vv, o), m = sm(vv, o), h = nt(l, d.onViewportChange), p = b.useRef(0);
    return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      /* @__PURE__ */ x.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ x.jsx(uc.Slot, { scope: o, children: /* @__PURE__ */ x.jsx(
        at.div,
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
          onScroll: je(f.onScroll, (v) => {
            const y = v.currentTarget, { contentWrapper: S, shouldExpandOnScrollRef: E } = m;
            if (E?.current && S) {
              const T = Math.abs(p.current - y.scrollTop);
              if (T > 0) {
                const O = window.innerHeight - Tn * 2, C = parseFloat(S.style.minHeight), M = parseFloat(S.style.height), R = Math.max(C, M);
                if (R < O) {
                  const _ = R + T, k = Math.min(O, _), H = _ - k;
                  S.style.height = k + "px", S.style.bottom === "0px" && (y.scrollTop = H > 0 ? H : 0, S.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = y.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), zA = "SelectGroup", [pN, gN] = Wr(zA), vd = "SelectItem", [jA, uw] = Wr(vd), YA = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Ue(function(a, l) {
    const {
      __scopeSelect: o,
      value: s,
      disabled: f = !1,
      textValue: d,
      ...m
    } = a, h = sr(vd, o), p = Vr(vd, o), v = h.value === s, [y, S] = b.useState(d ?? ""), [E, T] = b.useState(!1), O = _n(
      (k) => p.itemRefCallback?.(k, s, f)
    ), C = nt(l, O), M = tr(), R = b.useRef("touch");
    function _(k) {
      h.hasConsumerStoppedPropagationRef.current = k.isPropagationStopped(), h.onUserSelect(s), h.onOpenChange(!1);
    }
    return Ue(_, "handleSelect"), /* @__PURE__ */ x.jsx(
      jA,
      {
        scope: o,
        value: s,
        disabled: f,
        textId: M,
        isSelected: v,
        onItemTextChange: b.useCallback((k) => {
          S((H) => H || (k?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ x.jsx(
          uc.ItemSlot,
          {
            scope: o,
            value: s,
            disabled: f,
            textValue: y,
            children: /* @__PURE__ */ x.jsx(
              at.div,
              {
                role: "option",
                "aria-labelledby": M,
                "data-highlighted": E ? "" : void 0,
                "aria-selected": v && E,
                "data-state": v ? "checked" : "unchecked",
                "aria-disabled": f || void 0,
                "data-disabled": f ? "" : void 0,
                tabIndex: f ? void 0 : -1,
                ...m,
                ref: C,
                onFocus: je(m.onFocus, () => T(!0)),
                onBlur: je(m.onBlur, () => T(!1)),
                onClick: je(m.onClick, (k) => {
                  f || R.current !== "mouse" && _(k);
                }),
                onPointerUp: je(m.onPointerUp, (k) => {
                  f || R.current === "mouse" && _(k);
                }),
                onPointerDown: je(m.onPointerDown, (k) => {
                  R.current = k.pointerType;
                }),
                onPointerMove: je(m.onPointerMove, (k) => {
                  R.current = k.pointerType, f ? p.onItemLeave?.() : R.current === "mouse" && k.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: je(m.onPointerLeave, (k) => {
                  k.currentTarget === document.activeElement && p.onItemLeave?.();
                }),
                onKeyDown: je(m.onKeyDown, (k) => {
                  f || k.target !== k.currentTarget || p.searchRef?.current !== "" && k.key === " " || (dA.includes(k.key) && _(k), k.key === " " && k.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), Ds = "SelectItemText", HA = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Ue(function(a, l) {
    const { __scopeSelect: o, className: s, style: f, ...d } = a, m = sr(Ds, o), h = Vr(Ds, o), p = uw(Ds, o), v = gA(Ds, o), [y, S] = b.useState(null), E = _n(
      (_) => h.itemTextRefCallback?.(_, p.value, p.disabled)
    ), T = nt(
      l,
      S,
      p.onItemTextChange,
      E
    ), O = y?.textContent, C = b.useMemo(
      () => /* @__PURE__ */ x.jsx("option", { value: p.value, disabled: p.disabled, children: O }, p.value),
      [p.disabled, p.value, O]
    ), { onNativeOptionAdd: M, onNativeOptionRemove: R } = v;
    return bt(() => (M(C), () => R(C)), [M, R, C]), /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      /* @__PURE__ */ x.jsx(at.span, { id: p.textId, ...d, ref: T }),
      p.isSelected && m.valueNode && !m.valueNodeHasChildren && !ei(m.value) ? Il.createPortal(d.children, m.valueNode) : null
    ] });
  }, "SelectItemText")
), BA = "SelectItemIndicator", UA = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ue(function(a, l) {
    const { __scopeSelect: o, ...s } = a;
    return uw(BA, o).isSelected ? /* @__PURE__ */ x.jsx(at.span, { "aria-hidden": !0, ...s, ref: l }) : null;
  }, "SelectItemIndicator")
), bv = "SelectScrollUpButton", LA = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ue(function(a, l) {
  const o = Vr(bv, a.__scopeSelect), s = sm(bv, a.__scopeSelect), [f, d] = b.useState(!1), m = nt(l, s.onScrollButtonChange);
  return bt(() => {
    if (o.viewport && o.isPositioned) {
      let h = function() {
        const v = p.scrollTop > 0;
        d(v);
      };
      Ue(h, "handleScroll");
      const p = o.viewport;
      return h(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
    }
  }, [o.viewport, o.isPositioned]), f ? /* @__PURE__ */ x.jsx(
    fw,
    {
      ...a,
      ref: m,
      onAutoScroll: () => {
        const { viewport: h, selectedItem: p } = o;
        h && p && (h.scrollTop = h.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), wv = "SelectScrollDownButton", qA = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ue(function(a, l) {
  const o = Vr(wv, a.__scopeSelect), s = sm(wv, a.__scopeSelect), [f, d] = b.useState(!1), m = nt(l, s.onScrollButtonChange);
  return bt(() => {
    if (o.viewport && o.isPositioned) {
      let h = function() {
        const v = p.scrollHeight - p.clientHeight, y = Math.ceil(p.scrollTop) < v;
        d(y);
      };
      Ue(h, "handleScroll");
      const p = o.viewport;
      return h(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
    }
  }, [o.viewport, o.isPositioned]), f ? /* @__PURE__ */ x.jsx(
    fw,
    {
      ...a,
      ref: m,
      onAutoScroll: () => {
        const { viewport: h, selectedItem: p } = o;
        h && p && (h.scrollTop = h.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), fw = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ue(function(a, l) {
  const { __scopeSelect: o, onAutoScroll: s, ...f } = a, d = Vr("SelectScrollButton", o), m = b.useRef(null), h = fc(o), p = b.useCallback(() => {
    m.current !== null && (window.clearInterval(m.current), m.current = null);
  }, []);
  return b.useEffect(() => () => p(), [p]), bt(() => {
    h().find((y) => y.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [h]), /* @__PURE__ */ x.jsx(
    at.div,
    {
      "aria-hidden": !0,
      ...f,
      ref: l,
      style: { flexShrink: 0, ...f.style },
      onPointerDown: je(f.onPointerDown, () => {
        m.current === null && (m.current = window.setInterval(s, 50));
      }),
      onPointerMove: je(f.onPointerMove, () => {
        d.onItemLeave?.(), m.current === null && (m.current = window.setInterval(s, 50));
      }),
      onPointerLeave: je(f.onPointerLeave, () => {
        p();
      })
    }
  );
}, "SelectScrollButtonImpl")), PA = "SelectBubbleInput", GA = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ue(function({ __scopeSelect: a, ...l }, o) {
    const s = sr(PA, a), { value: f, onValueChange: d, required: m, disabled: h, name: p, autoComplete: v, form: y, userSelection: S } = s, { nativeOptions: E, nativeSelectKey: T } = s, O = b.useRef(null), C = nt(o, O), M = f ?? "", R = b.useRef(M), _ = b.useRef(S), k = b.useRef(!1), H = Array.from(E).some(
      (z) => (z.props.value ?? "") === ""
    );
    return b.useEffect(() => {
      const z = O.current;
      if (!z) return;
      const N = window.HTMLSelectElement.prototype, Q = Object.getOwnPropertyDescriptor(
        N,
        "value"
      ).set, $ = S !== null && S !== _.current;
      _.current = S;
      const te = R.current !== M;
      R.current = M;
      const ee = $ && te;
      if ($ && !te && S.value !== M && !S.hasConsumerStoppedPropagation && Q) {
        k.current = !0;
        try {
          Q.call(z, S.value), z.dispatchEvent(new Event("change", { bubbles: !0 }));
        } finally {
          k.current = !1, Q.call(z, M);
        }
        return;
      }
      const ie = ee && !S.hasConsumerStoppedPropagation;
      if (te && Q) {
        const le = new Event("change", { bubbles: ie });
        Q.call(z, M), z.dispatchEvent(le);
      }
    }, [M, S]), /* @__PURE__ */ x.jsxs(
      at.select,
      {
        "aria-hidden": !0,
        required: m,
        tabIndex: -1,
        name: p,
        autoComplete: v,
        disabled: h,
        form: y,
        onChange: (z) => {
          k.current || d(z.target.value);
        },
        ...l,
        style: { ...sA, ...l.style },
        ref: C,
        defaultValue: M,
        children: [
          ei(f) && !H ? /* @__PURE__ */ x.jsx("option", { value: "" }) : null,
          Array.from(E)
        ]
      },
      T
    );
  }, "SelectBubbleInput")
);
function dw(n) {
  return typeof n == "function";
}
Ue(dw, "isFunction");
function ei(n) {
  return n === "" || n === void 0;
}
Ue(ei, "shouldShowPlaceholder");
function cm(n) {
  const a = _n(n), l = b.useRef(""), o = b.useRef(0), s = b.useCallback(
    (d) => {
      const m = l.current + d;
      a(m);
      function h(p) {
        l.current = p, window.clearTimeout(o.current), p !== "" && (o.current = window.setTimeout(() => h(""), 1e3));
      }
      Ue(h, "updateSearch"), h(m);
    },
    [a]
  ), f = b.useCallback(() => {
    l.current = "", window.clearTimeout(o.current);
  }, []);
  return b.useEffect(() => () => window.clearTimeout(o.current), []), [l, s, f];
}
Ue(cm, "useTypeaheadSearch");
function um(n, a, l) {
  const s = a.length > 1 && Array.from(a).every((p) => p === a[0]) ? a[0] : a, f = l ? n.indexOf(l) : -1;
  let d = mw(n, Math.max(f, 0));
  s.length === 1 && (d = d.filter((p) => p !== l));
  const h = d.find(
    (p) => p.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return h !== l ? h : void 0;
}
Ue(um, "findNextItem");
function mw(n, a) {
  return n.map((l, o) => n[(a + o) % n.length]);
}
Ue(mw, "wrapArray");
const hw = document.querySelector(
  'meta[name="csp-nonce"]'
)?.content;
globalThis.__weiboStyleNonce = hw;
function WA({
  ...n
}) {
  return /* @__PURE__ */ x.jsx(yA, { "data-slot": "select", ...n });
}
function VA({
  ...n
}) {
  return /* @__PURE__ */ x.jsx(SA, { "data-slot": "select-value", ...n });
}
function XA({
  className: n,
  size: a = "default",
  children: l,
  ...o
}) {
  return /* @__PURE__ */ x.jsxs(
    bA,
    {
      "data-slot": "select-trigger",
      "data-size": a,
      className: Se(
        "cursor-pointer border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-8 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n
      ),
      ...o,
      children: [
        l,
        /* @__PURE__ */ x.jsx(xA, { asChild: !0, children: /* @__PURE__ */ x.jsx(qd, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function QA({
  className: n,
  children: a,
  position: l = "popper",
  align: o = "center",
  ...s
}) {
  return /* @__PURE__ */ x.jsx(TA, { children: /* @__PURE__ */ x.jsxs(
    MA,
    {
      "data-slot": "select-content",
      className: Se(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        l === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        n
      ),
      position: l,
      align: o,
      ...s,
      children: [
        /* @__PURE__ */ x.jsx(ZA, {}),
        /* @__PURE__ */ x.jsx(
          kA,
          {
            nonce: hw,
            className: Se(
              "p-1",
              l === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: a
          }
        ),
        /* @__PURE__ */ x.jsx(IA, {})
      ]
    }
  ) });
}
function FA({
  className: n,
  children: a,
  ...l
}) {
  return /* @__PURE__ */ x.jsxs(
    YA,
    {
      "data-slot": "select-item",
      className: Se(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...l,
      children: [
        /* @__PURE__ */ x.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ x.jsx(UA, { children: /* @__PURE__ */ x.jsx(Xb, { className: "size-4" }) }) }),
        /* @__PURE__ */ x.jsx(HA, { children: a })
      ]
    }
  );
}
function ZA({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ x.jsx(
    LA,
    {
      "data-slot": "select-scroll-up-button",
      className: Se(
        "flex cursor-pointer items-center justify-center py-1",
        n
      ),
      ...a,
      children: /* @__PURE__ */ x.jsx(uM, { className: "size-4" })
    }
  );
}
function IA({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ x.jsx(
    qA,
    {
      "data-slot": "select-scroll-down-button",
      className: Se(
        "flex cursor-pointer items-center justify-center py-1",
        n
      ),
      ...a,
      children: /* @__PURE__ */ x.jsx(qd, { className: "size-4" })
    }
  );
}
function Vs({
  id: n,
  label: a,
  value: l,
  onChange: o,
  options: s
}) {
  return /* @__PURE__ */ x.jsxs(
    WA,
    {
      value: l || "__all__",
      onValueChange: (f) => o(f === "__all__" ? "" : f),
      children: [
        /* @__PURE__ */ x.jsx(XA, { id: n, className: "w-full h-9 text-xs", "aria-label": a, children: /* @__PURE__ */ x.jsx(VA, {}) }),
        /* @__PURE__ */ x.jsx(QA, { className: "credit-popup", position: "popper", align: "start", children: s.map((f) => /* @__PURE__ */ x.jsx(
          FA,
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
function KA(n) {
  if (!n) return;
  const a = qb(n, "yyyy-MM-dd", /* @__PURE__ */ new Date());
  return Mb(a) ? a : void 0;
}
function Sv({
  id: n,
  name: a,
  label: l,
  initialValue: o = ""
}) {
  const [s, f] = b.useState(o), [d, m] = b.useState(!1), h = KA(s);
  return /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ x.jsx(Dn, { htmlFor: n, children: l }),
    /* @__PURE__ */ x.jsx("input", { type: "hidden", name: a, value: s }),
    /* @__PURE__ */ x.jsxs(ow, { open: d, onOpenChange: m, children: [
      /* @__PURE__ */ x.jsx(lw, { asChild: !0, children: /* @__PURE__ */ x.jsxs(
        ft,
        {
          id: n,
          type: "button",
          variant: "outline",
          className: "w-full justify-between h-9 px-3 text-xs font-normal",
          "aria-label": l,
          children: [
            /* @__PURE__ */ x.jsx("span", { className: s ? "" : "text-muted-foreground", children: h ? Wt(h, "yyyy/MM/dd") : "选择日期" }),
            /* @__PURE__ */ x.jsx(rM, { className: "size-4 text-muted-foreground" })
          ]
        }
      ) }),
      /* @__PURE__ */ x.jsxs(
        iw,
        {
          align: "start",
          className: "credit-popup date-popup w-auto p-0",
          "aria-label": `${l}日历`,
          children: [
            /* @__PURE__ */ x.jsx(
              qD,
              {
                mode: "single",
                selected: h,
                defaultMonth: h,
                locale: KT,
                autoFocus: !0,
                labels: {
                  labelPrevious: () => "上个月",
                  labelNext: () => "下个月",
                  labelDayButton: (p) => Wt(p, "yyyy年M月d日")
                },
                onSelect: (p) => {
                  f(p ? Wt(p, "yyyy-MM-dd") : ""), m(!1);
                }
              }
            ),
            /* @__PURE__ */ x.jsxs("div", { className: "credit-picker-footer", children: [
              /* @__PURE__ */ x.jsx(
                ft,
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
              /* @__PURE__ */ x.jsx(
                ft,
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
const pw = (n) => Array.from({ length: n }, (a, l) => {
  const o = String(l).padStart(2, "0");
  return { value: o, label: o };
}), $A = pw(24), JA = pw(60);
function eN({ initialValue: n }) {
  const [a, l] = b.useState(n), [o, s] = b.useState(n), [f, d] = b.useState(!1), [m, h] = o.split(":");
  return /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ x.jsx(Dn, { htmlFor: "plan-time", children: "每天签到时间 · 北京时间" }),
    /* @__PURE__ */ x.jsx("input", { type: "hidden", name: "time", value: a }),
    /* @__PURE__ */ x.jsxs(
      ow,
      {
        open: f,
        onOpenChange: (p) => {
          p && s(a), d(p);
        },
        children: [
          /* @__PURE__ */ x.jsx(lw, { asChild: !0, children: /* @__PURE__ */ x.jsxs(
            ft,
            {
              id: "plan-time",
              type: "button",
              variant: "outline",
              className: "credit-time-trigger w-full justify-between h-14 px-3 text-2xl font-medium tabular-nums",
              "aria-label": "每天签到时间 · 北京时间",
              children: [
                a,
                /* @__PURE__ */ x.jsx(dM, { className: "size-5 text-muted-foreground" })
              ]
            }
          ) }),
          /* @__PURE__ */ x.jsxs(
            iw,
            {
              align: "start",
              className: "credit-popup time-popup w-64 p-4",
              "aria-label": "签到时间选择器",
              children: [
                /* @__PURE__ */ x.jsxs("p", { className: "credit-picker-title", children: [
                  "每天签到时间 ",
                  /* @__PURE__ */ x.jsx("span", { children: "24 小时制" })
                ] }),
                /* @__PURE__ */ x.jsxs("div", { className: "credit-time-columns", children: [
                  /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ x.jsx(Dn, { htmlFor: "time-hour", children: "小时" }),
                    /* @__PURE__ */ x.jsx(
                      Vs,
                      {
                        id: "time-hour",
                        label: "小时",
                        value: m,
                        options: $A,
                        onChange: (p) => s(`${p}:${h}`)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ x.jsx("span", { className: "credit-time-separator", children: ":" }),
                  /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ x.jsx(Dn, { htmlFor: "time-minute", children: "分钟" }),
                    /* @__PURE__ */ x.jsx(
                      Vs,
                      {
                        id: "time-minute",
                        label: "分钟",
                        value: h,
                        options: JA,
                        onChange: (p) => s(`${m}:${p}`)
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ x.jsxs("div", { className: "credit-time-actions", children: [
                  /* @__PURE__ */ x.jsx(
                    ft,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: () => d(!1),
                      children: "取消"
                    }
                  ),
                  /* @__PURE__ */ x.jsx(
                    ft,
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
function fm(n, a, l) {
  n.dispatchEvent(new CustomEvent(a, { detail: l, bubbles: !0 }));
}
async function gw(n, a, l = "POST") {
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
    throw o.status === 401 && n === "/api/settings" && location.assign("/login"), new Error(
      typeof s.detail == "string" ? s.detail : "请检查填写内容后重试"
    );
  return s;
}
function bd({
  id: n,
  name: a,
  label: l,
  value: o,
  placeholder: s,
  numeric: f = !1
}) {
  return /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ x.jsx(Dn, { htmlFor: n, children: l }),
    /* @__PURE__ */ x.jsx(
      _s,
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
function tN({
  admin: n,
  values: a,
  statuses: l
}) {
  const [o, s] = b.useState(a.status || "");
  return /* @__PURE__ */ x.jsxs(
    "form",
    {
      id: "filter-form",
      className: "credit-filter-form",
      onSubmit: (f) => {
        f.preventDefault(), f.stopPropagation(), fm(f.currentTarget, "credit:filters", {
          kind: "records",
          values: Object.fromEntries(new FormData(f.currentTarget))
        });
      },
      children: [
        n && /* @__PURE__ */ x.jsx(
          bd,
          {
            id: "filter-username",
            name: "username",
            label: "平台用户名",
            value: a.username || "",
            placeholder: "完整用户名"
          }
        ),
        /* @__PURE__ */ x.jsx(
          bd,
          {
            id: "filter-uid",
            name: "uid",
            label: "微博 UID",
            value: a.uid || "",
            placeholder: "全部微博",
            numeric: !0
          }
        ),
        /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
          /* @__PURE__ */ x.jsx(Dn, { htmlFor: "filter-status", children: "执行结果" }),
          /* @__PURE__ */ x.jsx("input", { type: "hidden", name: "status", value: o }),
          /* @__PURE__ */ x.jsx(
            Vs,
            {
              id: "filter-status",
              label: "执行结果",
              value: o,
              onChange: s,
              options: [{ value: "", label: "全部结果" }, ...l]
            }
          )
        ] }),
        /* @__PURE__ */ x.jsx(
          Sv,
          {
            id: "filter-start",
            name: "start",
            label: "开始日期",
            initialValue: a.start
          }
        ),
        /* @__PURE__ */ x.jsx(
          Sv,
          {
            id: "filter-end",
            name: "end",
            label: "结束日期",
            initialValue: a.end
          }
        ),
        /* @__PURE__ */ x.jsxs("div", { className: "credit-filter-actions", children: [
          /* @__PURE__ */ x.jsx(ft, { variant: "outline", type: "submit", className: "h-9 text-xs", children: "筛选" }),
          /* @__PURE__ */ x.jsx(
            ft,
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
function nN({ search: n }) {
  return /* @__PURE__ */ x.jsxs(
    "form",
    {
      id: "user-search",
      className: "credit-filter-form credit-user-search",
      onSubmit: (a) => {
        a.preventDefault(), a.stopPropagation(), fm(a.currentTarget, "credit:filters", {
          kind: "users",
          values: Object.fromEntries(new FormData(a.currentTarget))
        });
      },
      children: [
        /* @__PURE__ */ x.jsx(
          bd,
          {
            id: "user-search-input",
            name: "search",
            label: "搜索用户名",
            value: n,
            placeholder: "输入用户名关键词"
          }
        ),
        /* @__PURE__ */ x.jsx(ft, { type: "submit", variant: "outline", className: "h-9 text-xs", children: "搜索" })
      ]
    }
  );
}
function aN({ plan: n }) {
  const [a, l] = b.useState(n.enabled), [o, s] = b.useState(!1), [f, d] = b.useState(""), [m, h] = b.useState(!1);
  async function p(v) {
    v.preventDefault(), v.stopPropagation();
    const y = v.currentTarget, S = { enabled: a, time: String(new FormData(y).get("time")) };
    s(!0), h(!1), d("");
    try {
      await gw("/api/settings", S, "PUT"), d(
        a ? `已保存：每天 ${S.time} 自动签到` : "已保存：每日签到已暂停"
      ), fm(y, "credit:plan-saved", S);
    } catch (E) {
      h(!0), d(
        E instanceof TypeError ? "无法连接服务，请稍后重试" : E.message
      );
    } finally {
      s(!1);
    }
  }
  return /* @__PURE__ */ x.jsxs("form", { id: "plan-form", className: "credit-plan-form", onSubmit: p, children: [
    /* @__PURE__ */ x.jsxs("fieldset", { disabled: o, children: [
      /* @__PURE__ */ x.jsx(eN, { initialValue: n.time }),
      /* @__PURE__ */ x.jsxs("div", { className: "credit-switch-row", children: [
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(Dn, { htmlFor: "plan-enabled", children: "自动签到" }),
          /* @__PURE__ */ x.jsx("p", { id: "plan-enabled-help", children: "对你绑定的全部微博账号生效" })
        ] }),
        /* @__PURE__ */ x.jsx(
          mC,
          {
            id: "plan-enabled",
            checked: a,
            onCheckedChange: l,
            "aria-describedby": "plan-enabled-help"
          }
        )
      ] }),
      /* @__PURE__ */ x.jsx(ft, { type: "submit", className: "w-full h-9 text-xs", children: o ? "正在保存…" : "保存签到计划" })
    ] }),
    f && /* @__PURE__ */ x.jsx(
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
function rN() {
  const [n, a] = b.useState("login"), [l, o] = b.useState(!1), [s, f] = b.useState(""), d = n === "register";
  async function m(h) {
    h.preventDefault(), f("");
    const p = h.currentTarget, v = new FormData(p);
    if (d && v.get("password") !== v.get("confirm-password")) {
      f("两次密码输入不一致");
      return;
    }
    o(!0);
    try {
      const y = await gw(`/api/auth/${n}`, {
        username: v.get("username"),
        password: v.get("password")
      });
      location.assign(
        new URLSearchParams(location.search).get("next") === "admin" && y.user.role === "admin" ? "/admin" : "/"
      );
    } catch (y) {
      f(
        y instanceof TypeError ? "无法连接服务，请检查网络后重试" : y.message
      );
    } finally {
      o(!1);
    }
  }
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("span", { className: "eyebrow", children: "YOUR DAILY ROUTINE" }),
    /* @__PURE__ */ x.jsx("h1", { children: d ? "开始你的每日计划" : "欢迎回来" }),
    /* @__PURE__ */ x.jsx("p", { className: "credit-auth-description", children: d ? "创建平台账号，再扫码连接你的微博。" : "登录平台，查看你的微博与签到计划。" }),
    /* @__PURE__ */ x.jsxs(
      KC,
      {
        value: n,
        onValueChange: (h) => {
          a(h), f("");
        },
        children: [
          /* @__PURE__ */ x.jsxs($C, { className: "credit-auth-tabs w-full", children: [
            /* @__PURE__ */ x.jsx(zy, { value: "login", disabled: l, children: "登录" }),
            /* @__PURE__ */ x.jsx(zy, { value: "register", disabled: l, children: "注册" })
          ] }),
          ["login", "register"].map((h) => /* @__PURE__ */ x.jsx(JC, { value: h, children: /* @__PURE__ */ x.jsx("form", { id: "auth-form", className: "credit-auth-form", onSubmit: m, children: /* @__PURE__ */ x.jsxs("fieldset", { disabled: l, children: [
            /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
              /* @__PURE__ */ x.jsx(Dn, { htmlFor: `${h}-username`, children: "平台用户名" }),
              /* @__PURE__ */ x.jsx(
                _s,
                {
                  id: `${h}-username`,
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
            /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
              /* @__PURE__ */ x.jsx(Dn, { htmlFor: `${h}-password`, children: "密码" }),
              /* @__PURE__ */ x.jsx(
                _s,
                {
                  id: `${h}-password`,
                  name: "password",
                  type: "password",
                  autoComplete: d ? "new-password" : "current-password",
                  required: !0,
                  minLength: d ? 12 : 1,
                  maxLength: 128,
                  placeholder: "输入你的密码",
                  "aria-describedby": d ? "password-hint" : void 0,
                  className: "h-10 text-sm"
                }
              ),
              d && /* @__PURE__ */ x.jsx("small", { id: "password-hint", children: "12–128 位，建议混合使用字母、数字和符号" })
            ] }),
            d && /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
              /* @__PURE__ */ x.jsx(Dn, { htmlFor: "confirm-password", children: "确认密码" }),
              /* @__PURE__ */ x.jsx(
                _s,
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
            s && /* @__PURE__ */ x.jsx("div", { className: "error-box", role: "alert", children: s }),
            /* @__PURE__ */ x.jsx(ft, { type: "submit", className: "h-10 w-full text-sm", children: l ? d ? "正在创建…" : "正在登录…" : d ? "创建账号" : "登录平台 →" })
          ] }) }) }, h))
        ]
      }
    )
  ] });
}
const Jf = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  active: "执行中",
  none: "无记录"
}, oN = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  queued: "等待执行",
  running: "正在签到",
  expired: "登录失效",
  network_error: "网络 / 接口异常",
  no_topics: "未获取到超话",
  interrupted: "任务中断"
}, lN = (n) => Wt(n, "yyyy-MM-dd"), Bo = (n) => qb(n, "yyyy-MM-dd", /* @__PURE__ */ new Date()), ed = () => new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(/* @__PURE__ */ new Date());
function xv(n, a) {
  const [l, o] = b.useState({ url: "", loading: !1 });
  return b.useEffect(() => {
    if (!n) return;
    const s = new AbortController();
    return o({ url: n, loading: !0 }), (async () => {
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
        s.signal.aborted || o({
          url: n,
          error: f instanceof TypeError ? "无法连接服务，请稍后重试" : f.message,
          loading: !1
        });
      }
    })(), () => s.abort();
  }, [n, a]), l.url === n ? l : { url: n, loading: !!n };
}
function iN({
  accounts: n
}) {
  const [a, l] = b.useState(n), [o, s] = b.useState(n[0]?.id || ""), [f, d] = b.useState(
    () => Bo(ed().slice(0, 7) + "-01")
  ), [m, h] = b.useState(() => Bo(ed())), [p, v] = b.useState(1), [y, S] = b.useState(0), E = Wt(f, "yyyy-MM"), T = lN(m), O = xv(
    o ? `/api/calendar?account_id=${encodeURIComponent(o)}&month=${E}` : "",
    y
  ), C = O.data, M = C?.today || ed(), R = Object.fromEntries(
    (C?.days || []).map((N) => [N.date, N])
  ), _ = Array.from(
    { length: Yb(f) },
    (N, U) => `${E}-${String(U + 1).padStart(2, "0")}`
  ), k = R[T], H = xv(
    o && C && k?.attempts ? `/api/runs?account_id=${encodeURIComponent(o)}&start=${T}&end=${T}&page=${p}&page_size=5` : "",
    y
  );
  b.useEffect(() => {
    const N = (U) => {
      const Q = U.detail?.accounts;
      Q && (l(Q), s(
        ($) => Q.some((te) => te.id === $) ? $ : Q[0]?.id || ""
      )), S(($) => $ + 1);
    };
    return document.addEventListener("credit:calendar-refresh", N), () => document.removeEventListener("credit:calendar-refresh", N);
  }, []);
  function z(N) {
    d(N), h(
      Bo(
        Wt(N, "yyyy-MM") === M.slice(0, 7) ? M : Wt(N, "yyyy-MM") + "-01"
      )
    ), v(1);
  }
  return /* @__PURE__ */ x.jsxs("div", { className: "checkin-calendar", "aria-label": "签到日历", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "checkin-calendar-heading", children: [
      /* @__PURE__ */ x.jsxs("div", { children: [
        /* @__PURE__ */ x.jsx("h2", { children: "签到日历" }),
        /* @__PURE__ */ x.jsx("p", { children: "北京时间 · 按微博账号统计" })
      ] }),
      a.length > 0 && /* @__PURE__ */ x.jsx(
        ft,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: () => S((N) => N + 1),
          children: "刷新日历"
        }
      )
    ] }),
    a.length === 0 ? /* @__PURE__ */ x.jsxs("div", { className: "checkin-calendar-empty", children: [
      /* @__PURE__ */ x.jsx("p", { children: "绑定微博后，在这里查看每天的签到进度。" }),
      /* @__PURE__ */ x.jsx(ft, { type: "button", variant: "outline", "data-action": "bind", children: "绑定微博" })
    ] }) : /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      /* @__PURE__ */ x.jsxs("div", { className: "checkin-calendar-toolbar", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "credit-field", children: [
          /* @__PURE__ */ x.jsx(Dn, { htmlFor: "calendar-account", children: "微博账号" }),
          /* @__PURE__ */ x.jsx(
            Vs,
            {
              id: "calendar-account",
              label: "微博账号",
              value: o,
              onChange: (N) => {
                s(N), v(1);
              },
              options: a.map((N) => ({
                value: N.id,
                label: `${N.nickname || "微博用户"} · ${N.uid}`
              }))
            }
          )
        ] }),
        /* @__PURE__ */ x.jsx(
          ft,
          {
            variant: "ghost",
            size: "sm",
            type: "button",
            onClick: () => z(Bo(M.slice(0, 7) + "-01")),
            children: "回到本月"
          }
        )
      ] }),
      O.loading && /* @__PURE__ */ x.jsx("p", { className: "checkin-calendar-message", role: "status", children: "正在加载签到日历…" }),
      O.error && /* @__PURE__ */ x.jsxs(
        "div",
        {
          className: "checkin-calendar-message credit-form-error",
          role: "alert",
          children: [
            O.error,
            " ",
            /* @__PURE__ */ x.jsx(
              ft,
              {
                variant: "outline",
                type: "button",
                size: "sm",
                onClick: () => S((N) => N + 1),
                children: "重试"
              }
            )
          ]
        }
      ),
      C && /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsxs("div", { className: "checkin-calendar-summary", children: [
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx("span", { children: "当月成功签到" }),
          /* @__PURE__ */ x.jsxs("strong", { "data-testid": "calendar-success-days", children: [
            C.summary.success_days,
            /* @__PURE__ */ x.jsx("small", { children: "天" })
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx("span", { children: "当前连续签到" }),
          /* @__PURE__ */ x.jsxs("strong", { "data-testid": "calendar-streak", children: [
            C.summary.streak,
            /* @__PURE__ */ x.jsx("small", { children: "天" })
          ] })
        ] }),
        /* @__PURE__ */ x.jsx("p", { children: "每天完整成功计 1 天。今天未成功时，连续天数从昨天起算。" })
      ] }) }),
      /* @__PURE__ */ x.jsxs("div", { className: "checkin-calendar-body", "aria-busy": O.loading, children: [
        /* @__PURE__ */ x.jsxs("div", { className: "checkin-month", children: [
          /* @__PURE__ */ x.jsxs("div", { className: "checkin-month-heading", children: [
            /* @__PURE__ */ x.jsx("h3", { "aria-live": "polite", children: Wt(f, "yyyy年M月") }),
            /* @__PURE__ */ x.jsxs("div", { className: "checkin-month-navigation", children: [
              /* @__PURE__ */ x.jsx(
                ft,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-sm",
                  "aria-label": "上个月签到日历",
                  onClick: () => z(Hs(f, -1)),
                  children: /* @__PURE__ */ x.jsx(Qb, { "aria-hidden": "true" })
                }
              ),
              /* @__PURE__ */ x.jsx(
                ft,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-sm",
                  "aria-label": "下个月签到日历",
                  disabled: E >= M.slice(0, 7),
                  onClick: () => z(Hs(f, 1)),
                  children: /* @__PURE__ */ x.jsx(Fb, { "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ x.jsx(
            "div",
            {
              className: "checkin-month-grid",
              role: "group",
              "aria-label": "每日签到方格",
              children: _.map((N) => {
                const U = R[N]?.status || "none", Q = N > M, $ = `${Wt(Bo(N), "yyyy年M月d日")}，${C ? Q ? "未到日期" : Jf[U] : O.error ? "加载失败" : "加载中"}`;
                return /* @__PURE__ */ x.jsx(
                  ft,
                  {
                    type: "button",
                    variant: "outline",
                    size: "icon",
                    className: `checkin-tile ${U}`,
                    disabled: !C || Q,
                    "aria-label": $,
                    title: $,
                    "aria-pressed": N === T,
                    "aria-current": N === M ? "date" : void 0,
                    onClick: () => {
                      h(Bo(N)), v(1);
                    },
                    children: U === "success" ? /* @__PURE__ */ x.jsx(Xb, { "aria-hidden": "true" }) : U === "partial" ? /* @__PURE__ */ x.jsx(gM, { "aria-hidden": "true" }) : U === "failed" ? /* @__PURE__ */ x.jsx(vM, { "aria-hidden": "true" }) : U === "active" ? /* @__PURE__ */ x.jsx(hM, { "aria-hidden": "true" }) : /* @__PURE__ */ x.jsx("span", { children: N.slice(-2) })
                  },
                  N
                );
              })
            }
          ),
          /* @__PURE__ */ x.jsx("div", { className: "checkin-calendar-legend", children: Object.entries(Jf).map(
            ([N, U]) => /* @__PURE__ */ x.jsxs("span", { children: [
              /* @__PURE__ */ x.jsx(
                "i",
                {
                  className: `checkin-legend-cell ${N}`,
                  "aria-hidden": "true"
                }
              ),
              U
            ] }, N)
          ) })
        ] }),
        /* @__PURE__ */ x.jsxs("section", { className: "checkin-day-details", "aria-label": "当日签到明细", children: [
          /* @__PURE__ */ x.jsxs("div", { className: "checkin-day-heading", children: [
            /* @__PURE__ */ x.jsxs("h3", { children: [
              Wt(m, "M月d日"),
              /* @__PURE__ */ x.jsx("small", { children: "签到明细" })
            ] }),
            C && /* @__PURE__ */ x.jsx("span", { className: `checkin-status ${k?.status || "none"}`, children: Jf[k?.status || "none"] })
          ] }),
          !O.loading && !O.error && k?.attempts === 0 && /* @__PURE__ */ x.jsx("p", { className: "checkin-day-empty", children: "当天没有签到记录" }),
          H.loading && /* @__PURE__ */ x.jsx("p", { className: "checkin-day-empty", role: "status", children: "正在加载当天明细…" }),
          H.error && /* @__PURE__ */ x.jsxs(
            "div",
            {
              className: "checkin-calendar-message credit-form-error",
              role: "alert",
              children: [
                H.error,
                /* @__PURE__ */ x.jsx(
                  ft,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: () => S((N) => N + 1),
                    children: "重试"
                  }
                )
              ]
            }
          ),
          H.data && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ x.jsxs("p", { className: "checkin-day-count", children: [
              "当天共 ",
              H.data.total,
              " 次执行"
            ] }),
            /* @__PURE__ */ x.jsx("ol", { className: "checkin-run-list", children: H.data.items.map((N) => /* @__PURE__ */ x.jsxs("li", { children: [
              /* @__PURE__ */ x.jsxs("div", { children: [
                /* @__PURE__ */ x.jsx("span", { className: `badge ${N.status}`, children: oN[N.status] || N.status }),
                /* @__PURE__ */ x.jsx(
                  "time",
                  {
                    dateTime: new Date(
                      N.started_at * 1e3
                    ).toISOString(),
                    children: new Intl.DateTimeFormat("zh-CN", {
                      timeZone: "Asia/Shanghai",
                      hour: "2-digit",
                      minute: "2-digit"
                    }).format(N.started_at * 1e3)
                  }
                )
              ] }),
              /* @__PURE__ */ x.jsx("p", { children: N.message }),
              /* @__PURE__ */ x.jsxs("small", { children: [
                N.trigger === "scheduled" ? "定时签到" : "手动签到",
                " ",
                "· 已签 ",
                N.done_before,
                " / 新签 ",
                N.success,
                " / 失败",
                " ",
                N.failed,
                " · 共 ",
                N.total,
                " 个超话"
              ] })
            ] }, N.id)) }),
            H.data.total > 5 && /* @__PURE__ */ x.jsxs("div", { className: "checkin-day-pager", children: [
              /* @__PURE__ */ x.jsx(
                ft,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  disabled: p <= 1,
                  onClick: () => v((N) => N - 1),
                  children: "上一页"
                }
              ),
              /* @__PURE__ */ x.jsxs("span", { children: [
                "第 ",
                p,
                " 页"
              ] }),
              /* @__PURE__ */ x.jsx(
                ft,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  disabled: p * 5 >= H.data.total,
                  onClick: () => v((N) => N + 1),
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
function sN(n = document) {
  n.querySelectorAll("[data-credit-form]").forEach((a) => {
    if (Xs.has(a)) return;
    const l = US.createRoot(a);
    if (a.classList.add("credit-controls"), Xs.set(a, l), a.dataset.creditForm === "login") {
      l.render(/* @__PURE__ */ x.jsx(rN, {}));
      return;
    }
    if (a.dataset.creditForm === "calendar") {
      const s = JSON.parse(a.dataset.props || "{}");
      l.render(/* @__PURE__ */ x.jsx(iN, { accounts: s.accounts }));
      return;
    }
    const o = JSON.parse(a.dataset.props || "{}");
    o.kind === "plan" ? l.render(/* @__PURE__ */ x.jsx(aN, { plan: o.plan })) : o.kind === "filters" ? l.render(
      /* @__PURE__ */ x.jsx(
        tN,
        {
          admin: o.admin,
          values: o.values,
          statuses: o.statuses
        }
      )
    ) : o.kind === "users" && l.render(/* @__PURE__ */ x.jsx(nN, { search: o.search }));
  });
}
function yN(n) {
  for (const [a, l] of Xs)
    n.contains(a) && (l.unmount(), Xs.delete(a));
}
sN();
export {
  sN as mountControls,
  yN as unmountControls
};
