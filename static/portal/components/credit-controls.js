var cy = (n) => {
  throw TypeError(n);
};
var uy = (n, a, l) => a.has(n) || cy("Cannot " + l);
var Yt = (n, a, l) => (uy(n, a, "read from private field"), l ? l.call(n) : a.get(n)), fy = (n, a, l) => a.has(n) ? cy("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(n) : a.set(n, l), Af = (n, a, l, o) => (uy(n, a, "write to private field"), o ? o.call(n, l) : a.set(n, l), l);
function WS(n, a) {
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
function VS(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Rf = { exports: {} }, Gl = {};
var dy;
function XS() {
  if (dy) return Gl;
  dy = 1;
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
  return Gl.Fragment = a, Gl.jsx = l, Gl.jsxs = l, Gl;
}
var my;
function FS() {
  return my || (my = 1, Rf.exports = XS()), Rf.exports;
}
var y = FS(), kf = { exports: {} }, Wl = {}, jf = { exports: {} }, zf = {};
var hy;
function QS() {
  return hy || (hy = 1, (function(n) {
    function a(H, F) {
      var K = H.length;
      H.push(F);
      e: for (; 0 < K; ) {
        var re = K - 1 >>> 1, W = H[re];
        if (0 < s(W, F))
          H[re] = F, H[K] = W, K = re;
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
        e: for (var re = 0, W = H.length, A = W >>> 1; re < A; ) {
          var V = 2 * (re + 1) - 1, te = H[V], le = V + 1, ie = H[le];
          if (0 > s(te, K))
            le < W && 0 > s(ie, te) ? (H[re] = ie, H[le] = K, re = le) : (H[re] = te, H[V] = K, re = V);
          else if (le < W && 0 > s(ie, K))
            H[re] = ie, H[le] = K, re = le;
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
    var h = [], p = [], b = 1, v = null, S = 3, T = !1, E = !1, O = !1, C = !1, D = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
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
          E = !0, R || (R = !0, ne());
        else {
          var F = l(p);
          F !== null && oe(z, F.startTime - H);
        }
    }
    var R = !1, Y = -1, U = 5, Z = -1;
    function ee() {
      return C ? !0 : !(n.unstable_now() - Z < U);
    }
    function ae() {
      if (C = !1, R) {
        var H = n.unstable_now();
        Z = H;
        var F = !0;
        try {
          e: {
            E = !1, O && (O = !1, _(Y), Y = -1), T = !0;
            var K = S;
            try {
              t: {
                for (N(H), v = l(h); v !== null && !(v.expirationTime > H && ee()); ) {
                  var re = v.callback;
                  if (typeof re == "function") {
                    v.callback = null, S = v.priorityLevel;
                    var W = re(
                      v.expirationTime <= H
                    );
                    if (H = n.unstable_now(), typeof W == "function") {
                      v.callback = W, N(H), F = !0;
                      break t;
                    }
                    v === l(h) && o(h), N(H);
                  } else o(h);
                  v = l(h);
                }
                if (v !== null) F = !0;
                else {
                  var A = l(p);
                  A !== null && oe(
                    z,
                    A.startTime - H
                  ), F = !1;
                }
              }
              break e;
            } finally {
              v = null, S = K, T = !1;
            }
            F = void 0;
          }
        } finally {
          F ? ne() : R = !1;
        }
      }
    }
    var ne;
    if (typeof M == "function")
      ne = function() {
        M(ae);
      };
    else if (typeof MessageChannel < "u") {
      var I = new MessageChannel(), J = I.port2;
      I.port1.onmessage = ae, ne = function() {
        J.postMessage(null);
      };
    } else
      ne = function() {
        D(ae, 0);
      };
    function oe(H, F) {
      Y = D(function() {
        H(n.unstable_now());
      }, F);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, n.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : U = 0 < H ? Math.floor(1e3 / H) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, n.unstable_next = function(H) {
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
        return H();
      } finally {
        S = K;
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
      var K = S;
      S = H;
      try {
        return F();
      } finally {
        S = K;
      }
    }, n.unstable_scheduleCallback = function(H, F, K) {
      var re = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? re + K : re) : K = re, H) {
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
        callback: F,
        priorityLevel: H,
        startTime: K,
        expirationTime: W,
        sortIndex: -1
      }, K > re ? (H.sortIndex = K, a(p, H), l(h) === null && H === l(p) && (O ? (_(Y), Y = -1) : O = !0, oe(z, K - re))) : (H.sortIndex = W, a(h, H), E || T || (E = !0, R || (R = !0, ne()))), H;
    }, n.unstable_shouldYield = ee, n.unstable_wrapCallback = function(H) {
      var F = S;
      return function() {
        var K = S;
        S = F;
        try {
          return H.apply(this, arguments);
        } finally {
          S = K;
        }
      };
    };
  })(zf)), zf;
}
var py;
function ZS() {
  return py || (py = 1, jf.exports = QS()), jf.exports;
}
var Hf = { exports: {} }, Se = {};
var gy;
function IS() {
  if (gy) return Se;
  gy = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), u = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), S = Symbol.iterator;
  function T(A) {
    return A === null || typeof A != "object" ? null : (A = S && A[S] || A["@@iterator"], typeof A == "function" ? A : null);
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
  function D(A, V, te) {
    this.props = A, this.context = V, this.refs = C, this.updater = te || E;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(A, V) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, V, "setState");
  }, D.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function _() {
  }
  _.prototype = D.prototype;
  function M(A, V, te) {
    this.props = A, this.context = V, this.refs = C, this.updater = te || E;
  }
  var N = M.prototype = new _();
  N.constructor = M, O(N, D.prototype), N.isPureReactComponent = !0;
  var z = Array.isArray;
  function R() {
  }
  var Y = { H: null, A: null, T: null, S: null }, U = Object.prototype.hasOwnProperty;
  function Z(A, V, te) {
    var le = te.ref;
    return {
      $$typeof: n,
      type: A,
      key: V,
      ref: le !== void 0 ? le : null,
      props: te
    };
  }
  function ee(A, V) {
    return Z(A.type, V, A.props);
  }
  function ae(A) {
    return typeof A == "object" && A !== null && A.$$typeof === n;
  }
  function ne(A) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(te) {
      return V[te];
    });
  }
  var I = /\/+/g;
  function J(A, V) {
    return typeof A == "object" && A !== null && A.key != null ? ne("" + A.key) : V.toString(36);
  }
  function oe(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(R, R) : (A.status = "pending", A.then(
          function(V) {
            A.status === "pending" && (A.status = "fulfilled", A.value = V);
          },
          function(V) {
            A.status === "pending" && (A.status = "rejected", A.reason = V);
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
  function H(A, V, te, le, ie) {
    var se = typeof A;
    (se === "undefined" || se === "boolean") && (A = null);
    var ve = !1;
    if (A === null) ve = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case n:
            case a:
              ve = !0;
              break;
            case b:
              return ve = A._init, H(
                ve(A._payload),
                V,
                te,
                le,
                ie
              );
          }
      }
    if (ve)
      return ie = ie(A), ve = le === "" ? "." + J(A, 0) : le, z(ie) ? (te = "", ve != null && (te = ve.replace(I, "$&/") + "/"), H(ie, V, te, "", function(he) {
        return he;
      })) : ie != null && (ae(ie) && (ie = ee(
        ie,
        te + (ie.key == null || A && A.key === ie.key ? "" : ("" + ie.key).replace(
          I,
          "$&/"
        ) + "/") + ve
      )), V.push(ie)), 1;
    ve = 0;
    var Fe = le === "" ? "." : le + ":";
    if (z(A))
      for (var ye = 0; ye < A.length; ye++)
        le = A[ye], se = Fe + J(le, ye), ve += H(
          le,
          V,
          te,
          se,
          ie
        );
    else if (ye = T(A), typeof ye == "function")
      for (A = ye.call(A), ye = 0; !(le = A.next()).done; )
        le = le.value, se = Fe + J(le, ye++), ve += H(
          le,
          V,
          te,
          se,
          ie
        );
    else if (se === "object") {
      if (typeof A.then == "function")
        return H(
          oe(A),
          V,
          te,
          le,
          ie
        );
      throw V = String(A), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ve;
  }
  function F(A, V, te) {
    if (A == null) return A;
    var le = [], ie = 0;
    return H(A, le, "", "", function(se) {
      return V.call(te, se, ie++);
    }), le;
  }
  function K(A) {
    if (A._status === -1) {
      var V = A._result;
      V = V(), V.then(
        function(te) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = te);
        },
        function(te) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = te);
        }
      ), A._status === -1 && (A._status = 0, A._result = V);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var re = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(V)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  }, W = {
    map: F,
    forEach: function(A, V, te) {
      F(
        A,
        function() {
          V.apply(this, arguments);
        },
        te
      );
    },
    count: function(A) {
      var V = 0;
      return F(A, function() {
        V++;
      }), V;
    },
    toArray: function(A) {
      return F(A, function(V) {
        return V;
      }) || [];
    },
    only: function(A) {
      if (!ae(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return Se.Activity = v, Se.Children = W, Se.Component = D, Se.Fragment = l, Se.Profiler = s, Se.PureComponent = M, Se.StrictMode = o, Se.Suspense = h, Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, Se.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return Y.H.useMemoCache(A);
    }
  }, Se.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, Se.cacheSignal = function() {
    return null;
  }, Se.cloneElement = function(A, V, te) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var le = O({}, A.props), ie = A.key;
    if (V != null)
      for (se in V.key !== void 0 && (ie = "" + V.key), V)
        !U.call(V, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && V.ref === void 0 || (le[se] = V[se]);
    var se = arguments.length - 2;
    if (se === 1) le.children = te;
    else if (1 < se) {
      for (var ve = Array(se), Fe = 0; Fe < se; Fe++)
        ve[Fe] = arguments[Fe + 2];
      le.children = ve;
    }
    return Z(A.type, ie, le);
  }, Se.createContext = function(A) {
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
  }, Se.createElement = function(A, V, te) {
    var le, ie = {}, se = null;
    if (V != null)
      for (le in V.key !== void 0 && (se = "" + V.key), V)
        U.call(V, le) && le !== "key" && le !== "__self" && le !== "__source" && (ie[le] = V[le]);
    var ve = arguments.length - 2;
    if (ve === 1) ie.children = te;
    else if (1 < ve) {
      for (var Fe = Array(ve), ye = 0; ye < ve; ye++)
        Fe[ye] = arguments[ye + 2];
      ie.children = Fe;
    }
    if (A && A.defaultProps)
      for (le in ve = A.defaultProps, ve)
        ie[le] === void 0 && (ie[le] = ve[le]);
    return Z(A, se, ie);
  }, Se.createRef = function() {
    return { current: null };
  }, Se.forwardRef = function(A) {
    return { $$typeof: m, render: A };
  }, Se.isValidElement = ae, Se.lazy = function(A) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: A },
      _init: K
    };
  }, Se.memo = function(A, V) {
    return {
      $$typeof: p,
      type: A,
      compare: V === void 0 ? null : V
    };
  }, Se.startTransition = function(A) {
    var V = Y.T, te = {};
    Y.T = te;
    try {
      var le = A(), ie = Y.S;
      ie !== null && ie(te, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(R, re);
    } catch (se) {
      re(se);
    } finally {
      V !== null && te.types !== null && (V.types = te.types), Y.T = V;
    }
  }, Se.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, Se.use = function(A) {
    return Y.H.use(A);
  }, Se.useActionState = function(A, V, te) {
    return Y.H.useActionState(A, V, te);
  }, Se.useCallback = function(A, V) {
    return Y.H.useCallback(A, V);
  }, Se.useContext = function(A) {
    return Y.H.useContext(A);
  }, Se.useDebugValue = function() {
  }, Se.useDeferredValue = function(A, V) {
    return Y.H.useDeferredValue(A, V);
  }, Se.useEffect = function(A, V) {
    return Y.H.useEffect(A, V);
  }, Se.useEffectEvent = function(A) {
    return Y.H.useEffectEvent(A);
  }, Se.useId = function() {
    return Y.H.useId();
  }, Se.useImperativeHandle = function(A, V, te) {
    return Y.H.useImperativeHandle(A, V, te);
  }, Se.useInsertionEffect = function(A, V) {
    return Y.H.useInsertionEffect(A, V);
  }, Se.useLayoutEffect = function(A, V) {
    return Y.H.useLayoutEffect(A, V);
  }, Se.useMemo = function(A, V) {
    return Y.H.useMemo(A, V);
  }, Se.useOptimistic = function(A, V) {
    return Y.H.useOptimistic(A, V);
  }, Se.useReducer = function(A, V, te) {
    return Y.H.useReducer(A, V, te);
  }, Se.useRef = function(A) {
    return Y.H.useRef(A);
  }, Se.useState = function(A) {
    return Y.H.useState(A);
  }, Se.useSyncExternalStore = function(A, V, te) {
    return Y.H.useSyncExternalStore(
      A,
      V,
      te
    );
  }, Se.useTransition = function() {
    return Y.H.useTransition();
  }, Se.version = "19.2.3", Se;
}
var yy;
function wd() {
  return yy || (yy = 1, Hf.exports = IS()), Hf.exports;
}
var Yf = { exports: {} }, Ut = {};
var vy;
function $S() {
  if (vy) return Ut;
  vy = 1;
  var n = wd();
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
  return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Ut.createPortal = function(h, p) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(a(299));
    return u(h, p, null, b);
  }, Ut.flushSync = function(h) {
    var p = d.T, b = o.p;
    try {
      if (d.T = null, o.p = 2, h) return h();
    } finally {
      d.T = p, o.p = b, o.d.f();
    }
  }, Ut.preconnect = function(h, p) {
    typeof h == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(h, p));
  }, Ut.prefetchDNS = function(h) {
    typeof h == "string" && o.d.D(h);
  }, Ut.preinit = function(h, p) {
    if (typeof h == "string" && p && typeof p.as == "string") {
      var b = p.as, v = m(b, p.crossOrigin), S = typeof p.integrity == "string" ? p.integrity : void 0, T = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      b === "style" ? o.d.S(
        h,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: v,
          integrity: S,
          fetchPriority: T
        }
      ) : b === "script" && o.d.X(h, {
        crossOrigin: v,
        integrity: S,
        fetchPriority: T,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Ut.preinitModule = function(h, p) {
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
  }, Ut.preload = function(h, p) {
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
  }, Ut.preloadModule = function(h, p) {
    if (typeof h == "string")
      if (p) {
        var b = m(p.as, p.crossOrigin);
        o.d.m(h, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(h);
  }, Ut.requestFormReset = function(h) {
    o.d.r(h);
  }, Ut.unstable_batchedUpdates = function(h, p) {
    return h(p);
  }, Ut.useFormState = function(h, p, b) {
    return d.H.useFormState(h, p, b);
  }, Ut.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, Ut.version = "19.2.3", Ut;
}
var by;
function Mv() {
  if (by) return Yf.exports;
  by = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), Yf.exports = $S(), Yf.exports;
}
var xy;
function KS() {
  if (xy) return Wl;
  xy = 1;
  var n = ZS(), a = wd(), l = Mv();
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
        for (var g = !1, w = c.child; w; ) {
          if (w === r) {
            g = !0, r = c, i = f;
            break;
          }
          if (w === i) {
            g = !0, i = c, r = f;
            break;
          }
          w = w.sibling;
        }
        if (!g) {
          for (w = f.child; w; ) {
            if (w === r) {
              g = !0, r = f, i = c;
              break;
            }
            if (w === i) {
              g = !0, i = f, r = c;
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
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign, S = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), M = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ae = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object" ? null : (e = ae && e[ae] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var I = /* @__PURE__ */ Symbol.for("react.client.reference");
  function J(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === I ? null : e.displayName || e.name || null;
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
      case R:
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
          return t = e.displayName || null, t !== null ? t : J(e.type) || "Memo";
        case U:
          t = e._payload, e = e._init;
          try {
            return J(e(t));
          } catch {
          }
      }
    return null;
  }
  var oe = Array.isArray, H = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, re = [], W = -1;
  function A(e) {
    return { current: e };
  }
  function V(e) {
    0 > W || (e.current = re[W], re[W] = null, W--);
  }
  function te(e, t) {
    W++, re[W] = e.current, e.current = t;
  }
  var le = A(null), ie = A(null), se = A(null), ve = A(null);
  function Fe(e, t) {
    switch (te(se, t), te(ie, e), te(le, null), t.nodeType) {
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
    V(le), te(le, e);
  }
  function ye() {
    V(le), V(ie), V(se);
  }
  function he(e) {
    e.memoizedState !== null && te(ve, e);
    var t = le.current, r = kg(t, e.type);
    t !== r && (te(ie, e), te(le, r));
  }
  function Qe(e) {
    ie.current === e && (V(le), V(ie)), ve.current === e && (V(ve), Ul._currentValue = K);
  }
  var qe, Ce;
  function Te(e) {
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
  function Qn(e, t) {
    if (!e || We) return "";
    We = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (G) {
                  var P = G;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (G) {
                  P = G;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                P = G;
              }
              ($ = e()) && typeof $.catch == "function" && $.catch(function() {
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
      var f = i.DetermineComponentFrameRoot(), g = f[0], w = f[1];
      if (g && w) {
        var k = g.split(`
`), q = w.split(`
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
    return (r = e ? e.displayName || e.name : "") ? Te(r) : "";
  }
  function ur(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Te(e.type);
      case 16:
        return Te("Lazy");
      case 13:
        return e.child !== t && t !== null ? Te("Suspense Fallback") : Te("Suspense");
      case 19:
        return Te("SuspenseList");
      case 0:
      case 15:
        return Qn(e.type, !1);
      case 11:
        return Qn(e.type.render, !1);
      case 1:
        return Qn(e.type, !0);
      case 31:
        return Te("Activity");
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
  var Io = Object.prototype.hasOwnProperty, $o = n.unstable_scheduleCallback, Ko = n.unstable_cancelCallback, mc = n.unstable_shouldYield, ai = n.unstable_requestPaint, At = n.unstable_now, Jo = n.unstable_getCurrentPriorityLevel, ri = n.unstable_ImmediatePriority, oi = n.unstable_UserBlockingPriority, Fr = n.unstable_NormalPriority, hc = n.unstable_LowPriority, li = n.unstable_IdlePriority, pc = n.log, gc = n.unstable_setDisableYieldValue, fr = null, qt = null;
  function An(e) {
    if (typeof pc == "function" && gc(e), qt && typeof qt.setStrictMode == "function")
      try {
        qt.setStrictMode(fr, e);
      } catch {
      }
  }
  var Pt = Math.clz32 ? Math.clz32 : Ee, ii = Math.log, yc = Math.LN2;
  function Ee(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ii(e) / yc | 0) | 0;
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
    var c = 0, f = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var w = i & 134217727;
    return w !== 0 ? (i = w & ~f, i !== 0 ? c = mt(i) : (g &= w, g !== 0 ? c = mt(g) : r || (r = w & ~e, r !== 0 && (c = mt(r))))) : (w = i & ~f, w !== 0 ? c = mt(w) : g !== 0 ? c = mt(g) : r || (r = i & ~e, r !== 0 && (c = mt(r)))), c === 0 ? 0 : t !== 0 && t !== c && (t & f) === 0 && (f = c & -c, r = t & -t, f >= r || f === 32 && (r & 4194048) !== 0) ? t : c;
  }
  function dr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function vc(e, t) {
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
  function Zn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Rx(e, t, r, i, c, f) {
    var g = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var w = e.entanglements, k = e.expirationTimes, q = e.hiddenUpdates;
    for (r = g & ~r; 0 < r; ) {
      var X = 31 - Pt(r), $ = 1 << X;
      w[X] = 0, k[X] = -1;
      var P = q[X];
      if (P !== null)
        for (q[X] = null, X = 0; X < P.length; X++) {
          var G = P[X];
          G !== null && (G.lane &= -536870913);
        }
      r &= ~$;
    }
    i !== 0 && hm(e, i, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t));
  }
  function hm(e, t, r) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - Pt(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | r & 261930;
  }
  function pm(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var i = 31 - Pt(r), c = 1 << i;
      c & t | e[i] & t && (e[i] |= t), r &= ~c;
    }
  }
  function gm(e, t) {
    var r = t & -t;
    return r = (r & 42) !== 0 ? 1 : bc(r), (r & (e.suspendedLanes | t)) !== 0 ? 0 : r;
  }
  function bc(e) {
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
  function xc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ym() {
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ny(e.type));
  }
  function vm(e, t) {
    var r = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = r;
    }
  }
  var _a = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + _a, Vt = "__reactProps$" + _a, Qr = "__reactContainer$" + _a, wc = "__reactEvents$" + _a, kx = "__reactListeners$" + _a, jx = "__reactHandles$" + _a, bm = "__reactResources$" + _a, el = "__reactMarker$" + _a;
  function Sc(e) {
    delete e[Rt], delete e[Vt], delete e[wc], delete e[kx], delete e[jx];
  }
  function Zr(e) {
    var t = e[Rt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[Qr] || r[Rt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
          for (e = Lg(e); e !== null; ) {
            if (r = e[Rt]) return r;
            e = Lg(e);
          }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Ir(e) {
    if (e = e[Rt] || e[Qr]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function tl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function $r(e) {
    var t = e[bm];
    return t || (t = e[bm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dt(e) {
    e[el] = !0;
  }
  var xm = /* @__PURE__ */ new Set(), wm = {};
  function hr(e, t) {
    Kr(e, t), Kr(e + "Capture", t);
  }
  function Kr(e, t) {
    for (wm[e] = t, e = 0; e < t.length; e++)
      xm.add(t[e]);
  }
  var zx = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Sm = {}, Cm = {};
  function Hx(e) {
    return Io.call(Cm, e) ? !0 : Io.call(Sm, e) ? !1 : zx.test(e) ? Cm[e] = !0 : (Sm[e] = !0, !1);
  }
  function ci(e, t, r) {
    if (Hx(t))
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
  function In(e, t, r, i) {
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
  function Em(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Yx(e, t, r) {
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
        set: function(g) {
          r = "" + g, f.call(this, g);
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
  function Cc(e) {
    if (!e._valueTracker) {
      var t = Em(e) ? "checked" : "value";
      e._valueTracker = Yx(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Tm(e) {
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
  var Bx = /[\n"\\]/g;
  function fn(e) {
    return e.replace(
      Bx,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ec(e, t, r, i, c, f, g, w) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + un(t)) : e.value !== "" + un(t) && (e.value = "" + un(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? Tc(e, g, un(t)) : r != null ? Tc(e, g, un(r)) : i != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.name = "" + un(w) : e.removeAttribute("name");
  }
  function Om(e, t, r, i, c, f, g, w) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || r != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        Cc(e);
        return;
      }
      r = r != null ? "" + un(r) : "", t = t != null ? "" + un(t) : r, w || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? c, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = w ? e.checked : !!i, e.defaultChecked = !!i, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g), Cc(e);
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
  function Mm(e, t, r) {
    if (t != null && (t = "" + un(t), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? "" + un(r) : "";
  }
  function Dm(e, t, r, i) {
    if (t == null) {
      if (i != null) {
        if (r != null) throw Error(o(92));
        if (oe(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), t = r;
    }
    r = un(t), e.defaultValue = r, i = e.textContent, i === r && i !== "" && i !== null && (e.value = i), Cc(e);
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
  var Ux = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _m(e, t, r) {
    var i = t.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, r) : typeof r != "number" || r === 0 || Ux.has(t) ? t === "float" ? e.cssFloat = r : e[t] = ("" + r).trim() : e[t] = r + "px";
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
      for (var f in t)
        t.hasOwnProperty(f) && _m(e, f, t[f]);
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
  var Lx = /* @__PURE__ */ new Map([
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
  ]), qx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function di(e) {
    return qx.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function $n() {
  }
  var Mc = null;
  function Dc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var to = null, no = null;
  function Am(e) {
    var t = Ir(e);
    if (t && (e = t.stateNode)) {
      var r = e[Vt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ec(
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
                Ec(
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
              i = r[t], i.form === e.form && Tm(i);
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
  var _c = !1;
  function Rm(e, t, r) {
    if (_c) return e(t, r);
    _c = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (_c = !1, (to !== null || no !== null) && (Ji(), to && (t = to, e = no, no = to = null, Am(t), e)))
        for (t = 0; t < e.length; t++) Am(e[t]);
    }
  }
  function nl(e, t) {
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
  var Kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Nc = !1;
  if (Kn)
    try {
      var al = {};
      Object.defineProperty(al, "passive", {
        get: function() {
          Nc = !0;
        }
      }), window.addEventListener("test", al, al), window.removeEventListener("test", al, al);
    } catch {
      Nc = !1;
    }
  var Na = null, Ac = null, mi = null;
  function km() {
    if (mi) return mi;
    var e, t = Ac, r = t.length, i, c = "value" in Na ? Na.value : Na.textContent, f = c.length;
    for (e = 0; e < r && t[e] === c[e]; e++) ;
    var g = r - e;
    for (i = 1; i <= g && t[r - i] === c[f - i]; i++) ;
    return mi = c.slice(e, 1 < i ? 1 - i : void 0);
  }
  function hi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function pi() {
    return !0;
  }
  function jm() {
    return !1;
  }
  function Xt(e) {
    function t(r, i, c, f, g) {
      this._reactName = r, this._targetInst = c, this.type = i, this.nativeEvent = f, this.target = g, this.currentTarget = null;
      for (var w in e)
        e.hasOwnProperty(w) && (r = e[w], this[w] = r ? r(f) : f[w]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? pi : jm, this.isPropagationStopped = jm, this;
    }
    return v(t.prototype, {
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
  }, gi = Xt(pr), rl = v({}, pr, { view: 0, detail: 0 }), Px = Xt(rl), Rc, kc, ol, yi = v({}, rl, {
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
      return "movementX" in e ? e.movementX : (e !== ol && (ol && e.type === "mousemove" ? (Rc = e.screenX - ol.screenX, kc = e.screenY - ol.screenY) : kc = Rc = 0, ol = e), Rc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : kc;
    }
  }), zm = Xt(yi), Gx = v({}, yi, { dataTransfer: 0 }), Wx = Xt(Gx), Vx = v({}, rl, { relatedTarget: 0 }), jc = Xt(Vx), Xx = v({}, pr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fx = Xt(Xx), Qx = v({}, pr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Zx = Xt(Qx), Ix = v({}, pr, { data: 0 }), Hm = Xt(Ix), $x = {
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
  }, Kx = {
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
  }, Jx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ew(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jx[e]) ? !!t[e] : !1;
  }
  function zc() {
    return ew;
  }
  var tw = v({}, rl, {
    key: function(e) {
      if (e.key) {
        var t = $x[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = hi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kx[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? hi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), nw = Xt(tw), aw = v({}, yi, {
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
  }), Ym = Xt(aw), rw = v({}, rl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zc
  }), ow = Xt(rw), lw = v({}, pr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), iw = Xt(lw), sw = v({}, yi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), cw = Xt(sw), uw = v({}, pr, {
    newState: 0,
    oldState: 0
  }), fw = Xt(uw), dw = [9, 13, 27, 32], Hc = Kn && "CompositionEvent" in window, ll = null;
  Kn && "documentMode" in document && (ll = document.documentMode);
  var mw = Kn && "TextEvent" in window && !ll, Bm = Kn && (!Hc || ll && 8 < ll && 11 >= ll), Um = " ", Lm = !1;
  function qm(e, t) {
    switch (e) {
      case "keyup":
        return dw.indexOf(t.keyCode) !== -1;
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
  function hw(e, t) {
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
  function pw(e, t) {
    if (ao)
      return e === "compositionend" || !Hc && qm(e, t) ? (e = km(), mi = Ac = Na = null, ao = !1, e) : null;
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
  var gw = {
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
    return t === "input" ? !!gw[e.type] : t === "textarea";
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
  var il = null, sl = null;
  function yw(e) {
    Og(e, 0);
  }
  function vi(e) {
    var t = tl(e);
    if (Tm(t)) return e;
  }
  function Vm(e, t) {
    if (e === "change") return t;
  }
  var Xm = !1;
  if (Kn) {
    var Yc;
    if (Kn) {
      var Bc = "oninput" in document;
      if (!Bc) {
        var Fm = document.createElement("div");
        Fm.setAttribute("oninput", "return;"), Bc = typeof Fm.oninput == "function";
      }
      Yc = Bc;
    } else Yc = !1;
    Xm = Yc && (!document.documentMode || 9 < document.documentMode);
  }
  function Qm() {
    il && (il.detachEvent("onpropertychange", Zm), sl = il = null);
  }
  function Zm(e) {
    if (e.propertyName === "value" && vi(sl)) {
      var t = [];
      Wm(
        t,
        sl,
        e,
        Dc(e)
      ), Rm(yw, t);
    }
  }
  function vw(e, t, r) {
    e === "focusin" ? (Qm(), il = t, sl = r, il.attachEvent("onpropertychange", Zm)) : e === "focusout" && Qm();
  }
  function bw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vi(sl);
  }
  function xw(e, t) {
    if (e === "click") return vi(t);
  }
  function ww(e, t) {
    if (e === "input" || e === "change")
      return vi(t);
  }
  function Sw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Jt = typeof Object.is == "function" ? Object.is : Sw;
  function cl(e, t) {
    if (Jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var r = Object.keys(e), i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (i = 0; i < r.length; i++) {
      var c = r[i];
      if (!Io.call(t, c) || !Jt(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function Im(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $m(e, t) {
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
  function Km(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Km(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
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
  function Uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Cw = Kn && "documentMode" in document && 11 >= document.documentMode, ro = null, Lc = null, ul = null, qc = !1;
  function eh(e, t, r) {
    var i = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    qc || ro == null || ro !== fi(i) || (i = ro, "selectionStart" in i && Uc(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), ul && cl(ul, i) || (ul = i, i = ls(Lc, "onSelect"), 0 < i.length && (t = new gi(
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
  }, Pc = {}, th = {};
  Kn && (th = document.createElement("div").style, "AnimationEvent" in window || (delete oo.animationend.animation, delete oo.animationiteration.animation, delete oo.animationstart.animation), "TransitionEvent" in window || delete oo.transitionend.transition);
  function yr(e) {
    if (Pc[e]) return Pc[e];
    if (!oo[e]) return e;
    var t = oo[e], r;
    for (r in t)
      if (t.hasOwnProperty(r) && r in th)
        return Pc[e] = t[r];
    return e;
  }
  var nh = yr("animationend"), ah = yr("animationiteration"), rh = yr("animationstart"), Ew = yr("transitionrun"), Tw = yr("transitionstart"), Ow = yr("transitioncancel"), oh = yr("transitionend"), lh = /* @__PURE__ */ new Map(), Gc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Gc.push("scrollEnd");
  function Sn(e, t) {
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
  }, dn = [], lo = 0, Wc = 0;
  function xi() {
    for (var e = lo, t = Wc = lo = 0; t < e; ) {
      var r = dn[t];
      dn[t++] = null;
      var i = dn[t];
      dn[t++] = null;
      var c = dn[t];
      dn[t++] = null;
      var f = dn[t];
      if (dn[t++] = null, i !== null && c !== null) {
        var g = i.pending;
        g === null ? c.next = c : (c.next = g.next, g.next = c), i.pending = c;
      }
      f !== 0 && ih(r, c, f);
    }
  }
  function wi(e, t, r, i) {
    dn[lo++] = e, dn[lo++] = t, dn[lo++] = r, dn[lo++] = i, Wc |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Vc(e, t, r, i) {
    return wi(e, t, r, i), Si(e);
  }
  function vr(e, t) {
    return wi(e, null, null, t), Si(e);
  }
  function ih(e, t, r) {
    e.lanes |= r;
    var i = e.alternate;
    i !== null && (i.lanes |= r);
    for (var c = !1, f = e.return; f !== null; )
      f.childLanes |= r, i = f.alternate, i !== null && (i.childLanes |= r), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, c && t !== null && (c = 31 - Pt(r), e = f.hiddenUpdates, i = e[c], i === null ? e[c] = [t] : i.push(t), t.lane = r | 536870912), f) : null;
  }
  function Si(e) {
    if (50 < Rl)
      throw Rl = 0, ef = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var io = {};
  function Mw(e, t, r, i) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(e, t, r, i) {
    return new Mw(e, t, r, i);
  }
  function Xc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Jn(e, t) {
    var r = e.alternate;
    return r === null ? (r = en(
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
  function Ci(e, t, r, i, c, f) {
    var g = 0;
    if (i = e, typeof e == "function") Xc(e) && (g = 1);
    else if (typeof e == "string")
      g = RS(
        e,
        r,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Z:
          return e = en(31, r, t, c), e.elementType = Z, e.lanes = f, e;
        case O:
          return br(r.children, c, f, t);
        case C:
          g = 8, c |= 24;
          break;
        case D:
          return e = en(12, r, t, c | 2), e.elementType = D, e.lanes = f, e;
        case z:
          return e = en(13, r, t, c), e.elementType = z, e.lanes = f, e;
        case R:
          return e = en(19, r, t, c), e.elementType = R, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
                g = 10;
                break e;
              case _:
                g = 9;
                break e;
              case N:
                g = 11;
                break e;
              case Y:
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
    return t = en(g, r, t, c), t.elementType = e, t.type = i, t.lanes = f, t;
  }
  function br(e, t, r, i) {
    return e = en(7, e, i, t), e.lanes = r, e;
  }
  function Fc(e, t, r) {
    return e = en(6, e, null, t), e.lanes = r, e;
  }
  function ch(e) {
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
  var uh = /* @__PURE__ */ new WeakMap();
  function mn(e, t) {
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
  var so = [], co = 0, Ei = null, fl = 0, hn = [], pn = 0, Aa = null, Rn = 1, kn = "";
  function ea(e, t) {
    so[co++] = fl, so[co++] = Ei, Ei = e, fl = t;
  }
  function fh(e, t, r) {
    hn[pn++] = Rn, hn[pn++] = kn, hn[pn++] = Aa, Aa = e;
    var i = Rn;
    e = kn;
    var c = 32 - Pt(i) - 1;
    i &= ~(1 << c), r += 1;
    var f = 32 - Pt(t) + c;
    if (30 < f) {
      var g = c - c % 5;
      f = (i & (1 << g) - 1).toString(32), i >>= g, c -= g, Rn = 1 << 32 - Pt(t) + c | r << c | i, kn = f + e;
    } else
      Rn = 1 << f | r << c | i, kn = e;
  }
  function Zc(e) {
    e.return !== null && (ea(e, 1), fh(e, 1, 0));
  }
  function Ic(e) {
    for (; e === Ei; )
      Ei = so[--co], so[co] = null, fl = so[--co], so[co] = null;
    for (; e === Aa; )
      Aa = hn[--pn], hn[pn] = null, kn = hn[--pn], hn[pn] = null, Rn = hn[--pn], hn[pn] = null;
  }
  function dh(e, t) {
    hn[pn++] = Rn, hn[pn++] = kn, hn[pn++] = Aa, Rn = t.id, kn = t.overflow, Aa = e;
  }
  var kt = null, ot = null, Ye = !1, Ra = null, gn = !1, $c = Error(o(519));
  function ka(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw dl(mn(t, e)), $c;
  }
  function mh(e) {
    var t = e.stateNode, r = e.type, i = e.memoizedProps;
    switch (t[Rt] = e, t[Vt] = i, r) {
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
        Ae("invalid", t), Om(
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
  function uo(e) {
    if (e !== kt) return !1;
    if (!Ye) return hh(e), Ye = !0, !1;
    var t = e.tag, r;
    if ((r = t !== 3 && t !== 27) && ((r = t === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || gf(e.type, e.memoizedProps)), r = !r), r && ot && ka(e), hh(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = Ug(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = Ug(e);
    } else
      t === 27 ? (t = ot, Fa(e.type) ? (e = wf, wf = null, ot = e) : ot = t) : ot = kt ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function xr() {
    ot = kt = null, Ye = !1;
  }
  function Kc() {
    var e = Ra;
    return e !== null && (It === null ? It = e : It.push.apply(
      It,
      e
    ), Ra = null), e;
  }
  function dl(e) {
    Ra === null ? Ra = [e] : Ra.push(e);
  }
  var Jc = A(null), wr = null, ta = null;
  function ja(e, t, r) {
    te(Jc, t._currentValue), t._currentValue = r;
  }
  function na(e) {
    e._currentValue = Jc.current, V(Jc);
  }
  function eu(e, t, r) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function tu(e, t, r, i) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var g = c.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var w = f;
          f = c;
          for (var k = 0; k < t.length; k++)
            if (w.context === t[k]) {
              f.lanes |= r, w = f.alternate, w !== null && (w.lanes |= r), eu(
                f.return,
                r,
                e
              ), i || (g = null);
              break e;
            }
          f = w.next;
        }
      } else if (c.tag === 18) {
        if (g = c.return, g === null) throw Error(o(341));
        g.lanes |= r, f = g.alternate, f !== null && (f.lanes |= r), eu(g, r, e), g = null;
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
    for (var c = t, f = !1; c !== null; ) {
      if (!f) {
        if ((c.flags & 524288) !== 0) f = !0;
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
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ul) : e = [Ul]);
      }
      c = c.return;
    }
    e !== null && tu(
      t,
      e,
      r,
      i
    ), t.flags |= 262144;
  }
  function Ti(e) {
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
    wr = e, ta = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function jt(e) {
    return ph(wr, e);
  }
  function Oi(e, t) {
    return wr === null && Sr(e), ph(e, t);
  }
  function ph(e, t) {
    var r = t._currentValue;
    if (t = { context: t, memoizedValue: r, next: null }, ta === null) {
      if (e === null) throw Error(o(308));
      ta = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ta = ta.next = t;
    return r;
  }
  var Dw = typeof AbortController < "u" ? AbortController : function() {
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
  }, _w = n.unstable_scheduleCallback, Nw = n.unstable_NormalPriority, xt = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function nu() {
    return {
      controller: new Dw(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ml(e) {
    e.refCount--, e.refCount === 0 && _w(Nw, function() {
      e.controller.abort();
    });
  }
  var hl = null, au = 0, mo = 0, ho = null;
  function Aw(e, t) {
    if (hl === null) {
      var r = hl = [];
      au = 0, mo = lf(), ho = {
        status: "pending",
        value: void 0,
        then: function(i) {
          r.push(i);
        }
      };
    }
    return au++, t.then(gh, gh), t;
  }
  function gh() {
    if (--au === 0 && hl !== null) {
      ho !== null && (ho.status = "fulfilled");
      var e = hl;
      hl = null, mo = 0, ho = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Rw(e, t) {
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
    eg = At(), typeof t == "object" && t !== null && typeof t.then == "function" && Aw(e, t), yh !== null && yh(e, t);
  };
  var Cr = A(null);
  function ru() {
    var e = Cr.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Mi(e, t) {
    t === null ? te(Cr, Cr.current) : te(Cr, t.pool);
  }
  function vh() {
    var e = ru();
    return e === null ? null : { parent: xt._currentValue, pool: e };
  }
  var po = Error(o(460)), ou = Error(o(474)), Di = Error(o(542)), _i = { then: function() {
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
        throw Tr = t, po;
    }
  }
  function Er(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Tr = r, po) : r;
    }
  }
  var Tr = null;
  function wh() {
    if (Tr === null) throw Error(o(459));
    var e = Tr;
    return Tr = null, e;
  }
  function Sh(e) {
    if (e === po || e === Di)
      throw Error(o(483));
  }
  var go = null, pl = 0;
  function Ni(e) {
    var t = pl;
    return pl += 1, go === null && (go = []), xh(go, e, t);
  }
  function gl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ai(e, t) {
    throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ch(e) {
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
      return B = Jn(B, j), B.index = 0, B.sibling = null, B;
    }
    function f(B, j, L) {
      return B.index = L, e ? (L = B.alternate, L !== null ? (L = L.index, L < j ? (B.flags |= 67108866, j) : L) : (B.flags |= 67108866, j)) : (B.flags |= 1048576, j);
    }
    function g(B) {
      return e && B.alternate === null && (B.flags |= 67108866), B;
    }
    function w(B, j, L, Q) {
      return j === null || j.tag !== 6 ? (j = Fc(L, B.mode, Q), j.return = B, j) : (j = c(j, L), j.return = B, j);
    }
    function k(B, j, L, Q) {
      var ge = L.type;
      return ge === O ? X(
        B,
        j,
        L.props.children,
        Q,
        L.key
      ) : j !== null && (j.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === U && Er(ge) === j.type) ? (j = c(j, L.props), gl(j, L), j.return = B, j) : (j = Ci(
        L.type,
        L.key,
        L.props,
        null,
        B.mode,
        Q
      ), gl(j, L), j.return = B, j);
    }
    function q(B, j, L, Q) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== L.containerInfo || j.stateNode.implementation !== L.implementation ? (j = Qc(L, B.mode, Q), j.return = B, j) : (j = c(j, L.children || []), j.return = B, j);
    }
    function X(B, j, L, Q, ge) {
      return j === null || j.tag !== 7 ? (j = br(
        L,
        B.mode,
        Q,
        ge
      ), j.return = B, j) : (j = c(j, L), j.return = B, j);
    }
    function $(B, j, L) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return j = Fc(
          "" + j,
          B.mode,
          L
        ), j.return = B, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case T:
            return L = Ci(
              j.type,
              j.key,
              j.props,
              null,
              B.mode,
              L
            ), gl(L, j), L.return = B, L;
          case E:
            return j = Qc(
              j,
              B.mode,
              L
            ), j.return = B, j;
          case U:
            return j = Er(j), $(B, j, L);
        }
        if (oe(j) || ne(j))
          return j = br(
            j,
            B.mode,
            L,
            null
          ), j.return = B, j;
        if (typeof j.then == "function")
          return $(B, Ni(j), L);
        if (j.$$typeof === M)
          return $(
            B,
            Oi(B, j),
            L
          );
        Ai(B, j);
      }
      return null;
    }
    function P(B, j, L, Q) {
      var ge = j !== null ? j.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return ge !== null ? null : w(B, j, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case T:
            return L.key === ge ? k(B, j, L, Q) : null;
          case E:
            return L.key === ge ? q(B, j, L, Q) : null;
          case U:
            return L = Er(L), P(B, j, L, Q);
        }
        if (oe(L) || ne(L))
          return ge !== null ? null : X(B, j, L, Q, null);
        if (typeof L.then == "function")
          return P(
            B,
            j,
            Ni(L),
            Q
          );
        if (L.$$typeof === M)
          return P(
            B,
            j,
            Oi(B, L),
            Q
          );
        Ai(B, L);
      }
      return null;
    }
    function G(B, j, L, Q, ge) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return B = B.get(L) || null, w(j, B, "" + Q, ge);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case T:
            return B = B.get(
              Q.key === null ? L : Q.key
            ) || null, k(j, B, Q, ge);
          case E:
            return B = B.get(
              Q.key === null ? L : Q.key
            ) || null, q(j, B, Q, ge);
          case U:
            return Q = Er(Q), G(
              B,
              j,
              L,
              Q,
              ge
            );
        }
        if (oe(Q) || ne(Q))
          return B = B.get(L) || null, X(j, B, Q, ge, null);
        if (typeof Q.then == "function")
          return G(
            B,
            j,
            L,
            Ni(Q),
            ge
          );
        if (Q.$$typeof === M)
          return G(
            B,
            j,
            L,
            Oi(j, Q),
            ge
          );
        Ai(j, Q);
      }
      return null;
    }
    function de(B, j, L, Q) {
      for (var ge = null, Pe = null, me = j, Me = j = 0, je = null; me !== null && Me < L.length; Me++) {
        me.index > Me ? (je = me, me = null) : je = me.sibling;
        var Ge = P(
          B,
          me,
          L[Me],
          Q
        );
        if (Ge === null) {
          me === null && (me = je);
          break;
        }
        e && me && Ge.alternate === null && t(B, me), j = f(Ge, j, Me), Pe === null ? ge = Ge : Pe.sibling = Ge, Pe = Ge, me = je;
      }
      if (Me === L.length)
        return r(B, me), Ye && ea(B, Me), ge;
      if (me === null) {
        for (; Me < L.length; Me++)
          me = $(B, L[Me], Q), me !== null && (j = f(
            me,
            j,
            Me
          ), Pe === null ? ge = me : Pe.sibling = me, Pe = me);
        return Ye && ea(B, Me), ge;
      }
      for (me = i(me); Me < L.length; Me++)
        je = G(
          me,
          B,
          Me,
          L[Me],
          Q
        ), je !== null && (e && je.alternate !== null && me.delete(
          je.key === null ? Me : je.key
        ), j = f(
          je,
          j,
          Me
        ), Pe === null ? ge = je : Pe.sibling = je, Pe = je);
      return e && me.forEach(function(Ka) {
        return t(B, Ka);
      }), Ye && ea(B, Me), ge;
    }
    function xe(B, j, L, Q) {
      if (L == null) throw Error(o(151));
      for (var ge = null, Pe = null, me = j, Me = j = 0, je = null, Ge = L.next(); me !== null && !Ge.done; Me++, Ge = L.next()) {
        me.index > Me ? (je = me, me = null) : je = me.sibling;
        var Ka = P(B, me, Ge.value, Q);
        if (Ka === null) {
          me === null && (me = je);
          break;
        }
        e && me && Ka.alternate === null && t(B, me), j = f(Ka, j, Me), Pe === null ? ge = Ka : Pe.sibling = Ka, Pe = Ka, me = je;
      }
      if (Ge.done)
        return r(B, me), Ye && ea(B, Me), ge;
      if (me === null) {
        for (; !Ge.done; Me++, Ge = L.next())
          Ge = $(B, Ge.value, Q), Ge !== null && (j = f(Ge, j, Me), Pe === null ? ge = Ge : Pe.sibling = Ge, Pe = Ge);
        return Ye && ea(B, Me), ge;
      }
      for (me = i(me); !Ge.done; Me++, Ge = L.next())
        Ge = G(me, B, Me, Ge.value, Q), Ge !== null && (e && Ge.alternate !== null && me.delete(Ge.key === null ? Me : Ge.key), j = f(Ge, j, Me), Pe === null ? ge = Ge : Pe.sibling = Ge, Pe = Ge);
      return e && me.forEach(function(GS) {
        return t(B, GS);
      }), Ye && ea(B, Me), ge;
    }
    function tt(B, j, L, Q) {
      if (typeof L == "object" && L !== null && L.type === O && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case T:
            e: {
              for (var ge = L.key; j !== null; ) {
                if (j.key === ge) {
                  if (ge = L.type, ge === O) {
                    if (j.tag === 7) {
                      r(
                        B,
                        j.sibling
                      ), Q = c(
                        j,
                        L.props.children
                      ), Q.return = B, B = Q;
                      break e;
                    }
                  } else if (j.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === U && Er(ge) === j.type) {
                    r(
                      B,
                      j.sibling
                    ), Q = c(j, L.props), gl(Q, L), Q.return = B, B = Q;
                    break e;
                  }
                  r(B, j);
                  break;
                } else t(B, j);
                j = j.sibling;
              }
              L.type === O ? (Q = br(
                L.props.children,
                B.mode,
                Q,
                L.key
              ), Q.return = B, B = Q) : (Q = Ci(
                L.type,
                L.key,
                L.props,
                null,
                B.mode,
                Q
              ), gl(Q, L), Q.return = B, B = Q);
            }
            return g(B);
          case E:
            e: {
              for (ge = L.key; j !== null; ) {
                if (j.key === ge)
                  if (j.tag === 4 && j.stateNode.containerInfo === L.containerInfo && j.stateNode.implementation === L.implementation) {
                    r(
                      B,
                      j.sibling
                    ), Q = c(j, L.children || []), Q.return = B, B = Q;
                    break e;
                  } else {
                    r(B, j);
                    break;
                  }
                else t(B, j);
                j = j.sibling;
              }
              Q = Qc(L, B.mode, Q), Q.return = B, B = Q;
            }
            return g(B);
          case U:
            return L = Er(L), tt(
              B,
              j,
              L,
              Q
            );
        }
        if (oe(L))
          return de(
            B,
            j,
            L,
            Q
          );
        if (ne(L)) {
          if (ge = ne(L), typeof ge != "function") throw Error(o(150));
          return L = ge.call(L), xe(
            B,
            j,
            L,
            Q
          );
        }
        if (typeof L.then == "function")
          return tt(
            B,
            j,
            Ni(L),
            Q
          );
        if (L.$$typeof === M)
          return tt(
            B,
            j,
            Oi(B, L),
            Q
          );
        Ai(B, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, j !== null && j.tag === 6 ? (r(B, j.sibling), Q = c(j, L), Q.return = B, B = Q) : (r(B, j), Q = Fc(L, B.mode, Q), Q.return = B, B = Q), g(B)) : r(B, j);
    }
    return function(B, j, L, Q) {
      try {
        pl = 0;
        var ge = tt(
          B,
          j,
          L,
          Q
        );
        return go = null, ge;
      } catch (me) {
        if (me === po || me === Di) throw me;
        var Pe = en(29, me, null, B.mode);
        return Pe.lanes = Q, Pe.return = B, Pe;
      }
    };
  }
  var Or = Ch(!0), Eh = Ch(!1), za = !1;
  function lu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function iu(e, t) {
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
    if (i = i.shared, (Ve & 2) !== 0) {
      var c = i.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), i.pending = t, t = Si(e), ih(e, null, r), t;
    }
    return wi(e, i, t, r), Si(e);
  }
  function yl(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, pm(e, r);
    }
  }
  function su(e, t) {
    var r = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, r === i)) {
      var c = null, f = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var g = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          f === null ? c = f = g : f = f.next = g, r = r.next;
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
  var cu = !1;
  function vl() {
    if (cu) {
      var e = ho;
      if (e !== null) throw e;
    }
  }
  function bl(e, t, r, i) {
    cu = !1;
    var c = e.updateQueue;
    za = !1;
    var f = c.firstBaseUpdate, g = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var k = w, q = k.next;
      k.next = null, g === null ? f = q : g.next = q, g = k;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, w = X.lastBaseUpdate, w !== g && (w === null ? X.firstBaseUpdate = q : w.next = q, X.lastBaseUpdate = k));
    }
    if (f !== null) {
      var $ = c.baseState;
      g = 0, X = q = k = null, w = f;
      do {
        var P = w.lane & -536870913, G = P !== w.lane;
        if (G ? (ke & P) === P : (i & P) === P) {
          P !== 0 && P === mo && (cu = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: null,
            next: null
          });
          e: {
            var de = e, xe = w;
            P = t;
            var tt = r;
            switch (xe.tag) {
              case 1:
                if (de = xe.payload, typeof de == "function") {
                  $ = de.call(tt, $, P);
                  break e;
                }
                $ = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = xe.payload, P = typeof de == "function" ? de.call(tt, $, P) : de, P == null) break e;
                $ = v({}, $, P);
                break e;
              case 2:
                za = !0;
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
          }, X === null ? (q = X = G, k = $) : X = X.next = G, g |= P;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null)
            break;
          G = w, w = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      X === null && (k = $), c.baseState = k, c.firstBaseUpdate = q, c.lastBaseUpdate = X, f === null && (c.shared.lanes = 0), Pa |= g, e.lanes = g, e.memoizedState = $;
    }
  }
  function Th(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Oh(e, t) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        Th(r[e], t);
  }
  var yo = A(null), Ri = A(0);
  function Mh(e, t) {
    e = fa, te(Ri, e), te(yo, t), fa = e | t.baseLanes;
  }
  function uu() {
    te(Ri, fa), te(yo, yo.current);
  }
  function fu() {
    fa = Ri.current, V(yo), V(Ri);
  }
  var tn = A(null), yn = null;
  function Ba(e) {
    var t = e.alternate;
    te(ht, ht.current & 1), te(tn, e), yn === null && (t === null || yo.current !== null || t.memoizedState !== null) && (yn = e);
  }
  function du(e) {
    te(ht, ht.current), te(tn, e), yn === null && (yn = e);
  }
  function Dh(e) {
    e.tag === 22 ? (te(ht, ht.current), te(tn, e), yn === null && (yn = e)) : Ua();
  }
  function Ua() {
    te(ht, ht.current), te(tn, tn.current);
  }
  function nn(e) {
    V(tn), yn === e && (yn = null), V(ht);
  }
  var ht = A(0);
  function ki(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || bf(r) || xf(r)))
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
  var aa = 0, Oe = null, Je = null, wt = null, ji = !1, vo = !1, Mr = !1, zi = 0, xl = 0, bo = null, kw = 0;
  function ut() {
    throw Error(o(321));
  }
  function mu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Jt(e[r], t[r])) return !1;
    return !0;
  }
  function hu(e, t, r, i, c, f) {
    return aa = f, Oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? fp : _u, Mr = !1, f = r(i, c), Mr = !1, vo && (f = Nh(
      t,
      r,
      i,
      c
    )), _h(e), f;
  }
  function _h(e) {
    H.H = Cl;
    var t = Je !== null && Je.next !== null;
    if (aa = 0, wt = Je = Oe = null, ji = !1, xl = 0, bo = null, t) throw Error(o(300));
    e === null || St || (e = e.dependencies, e !== null && Ti(e) && (St = !0));
  }
  function Nh(e, t, r, i) {
    Oe = e;
    var c = 0;
    do {
      if (vo && (bo = null), xl = 0, vo = !1, 25 <= c) throw Error(o(301));
      if (c += 1, wt = Je = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      H.H = dp, f = t(r, i);
    } while (vo);
    return f;
  }
  function jw() {
    var e = H.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? wl(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Oe.flags |= 1024), t;
  }
  function pu() {
    var e = zi !== 0;
    return zi = 0, e;
  }
  function gu(e, t, r) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r;
  }
  function yu(e) {
    if (ji) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ji = !1;
    }
    aa = 0, wt = Je = Oe = null, vo = !1, xl = zi = 0, bo = null;
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return wt === null ? Oe.memoizedState = wt = e : wt = wt.next = e, wt;
  }
  function pt() {
    if (Je === null) {
      var e = Oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = wt === null ? Oe.memoizedState : wt.next;
    if (t !== null)
      wt = t, Je = e;
    else {
      if (e === null)
        throw Oe.alternate === null ? Error(o(467)) : Error(o(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, wt === null ? Oe.memoizedState = wt = e : wt = wt.next = e;
    }
    return wt;
  }
  function Hi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wl(e) {
    var t = xl;
    return xl += 1, bo === null && (bo = []), e = xh(bo, e, t), t = Oe, (wt === null ? t.memoizedState : wt.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? fp : _u), e;
  }
  function Yi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wl(e);
      if (e.$$typeof === M) return jt(e);
    }
    throw Error(o(438, String(e)));
  }
  function vu(e) {
    var t = null, r = Oe.updateQueue;
    if (r !== null && (t = r.memoCache), t == null) {
      var i = Oe.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), r === null && (r = Hi(), Oe.updateQueue = r), r.memoCache = t, r = t.data[t.index], r === void 0)
      for (r = t.data[t.index] = Array(e), i = 0; i < e; i++)
        r[i] = ee;
    return t.index++, r;
  }
  function ra(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bi(e) {
    var t = pt();
    return bu(t, Je, e);
  }
  function bu(e, t, r) {
    var i = e.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = r;
    var c = e.baseQueue, f = i.pending;
    if (f !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = f.next, f.next = g;
      }
      t.baseQueue = c = f, i.pending = null;
    }
    if (f = e.baseState, c === null) e.memoizedState = f;
    else {
      t = c.next;
      var w = g = null, k = null, q = t, X = !1;
      do {
        var $ = q.lane & -536870913;
        if ($ !== q.lane ? (ke & $) === $ : (aa & $) === $) {
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
            }), $ === mo && (X = !0);
          else if ((aa & P) === P) {
            q = q.next, P === mo && (X = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, k === null ? (w = k = $, g = f) : k = k.next = $, Oe.lanes |= P, Pa |= P;
          $ = q.action, Mr && r(f, $), f = q.hasEagerState ? q.eagerState : r(f, $);
        } else
          P = {
            lane: $,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, k === null ? (w = k = P, g = f) : k = k.next = P, Oe.lanes |= $, Pa |= $;
        q = q.next;
      } while (q !== null && q !== t);
      if (k === null ? g = f : k.next = w, !Jt(f, e.memoizedState) && (St = !0, X && (r = ho, r !== null)))
        throw r;
      e.memoizedState = f, e.baseState = g, e.baseQueue = k, i.lastRenderedState = f;
    }
    return c === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function xu(e) {
    var t = pt(), r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var i = r.dispatch, c = r.pending, f = t.memoizedState;
    if (c !== null) {
      r.pending = null;
      var g = c = c.next;
      do
        f = e(f, g.action), g = g.next;
      while (g !== c);
      Jt(f, t.memoizedState) || (St = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), r.lastRenderedState = f;
    }
    return [f, i];
  }
  function Ah(e, t, r) {
    var i = Oe, c = pt(), f = Ye;
    if (f) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = t();
    var g = !Jt(
      (Je || c).memoizedState,
      r
    );
    if (g && (c.memoizedState = r, St = !0), c = c.queue, Cu(jh.bind(null, i, c, e), [
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
      f || (aa & 127) !== 0 || Rh(i, t, r);
    }
    return r;
  }
  function Rh(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Oe.updateQueue, t === null ? (t = Hi(), Oe.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function kh(e, t, r, i) {
    t.value = r, t.getSnapshot = i, zh(t) && Hh(e);
  }
  function jh(e, t, r) {
    return r(function() {
      zh(t) && Hh(e);
    });
  }
  function zh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Jt(e, r);
    } catch {
      return !0;
    }
  }
  function Hh(e) {
    var t = vr(e, 2);
    t !== null && $t(t, e, 2);
  }
  function wu(e) {
    var t = Gt();
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
      lastRenderedReducer: ra,
      lastRenderedState: e
    }, t;
  }
  function Yh(e, t, r, i) {
    return e.baseState = r, bu(
      e,
      Je,
      typeof i == "function" ? i : ra
    );
  }
  function zw(e, t, r, i, c) {
    if (qi(e)) throw Error(o(485));
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
        then: function(g) {
          f.listeners.push(g);
        }
      };
      H.T !== null ? r(!0) : f.isTransition = !1, i(f), r = t.pending, r === null ? (f.next = t.pending = f, Bh(t, f)) : (f.next = r.next, t.pending = r.next = f);
    }
  }
  function Bh(e, t) {
    var r = t.action, i = t.payload, c = e.state;
    if (t.isTransition) {
      var f = H.T, g = {};
      H.T = g;
      try {
        var w = r(c, i), k = H.S;
        k !== null && k(g, w), Uh(e, t, w);
      } catch (q) {
        Su(e, t, q);
      } finally {
        f !== null && g.types !== null && (f.types = g.types), H.T = f;
      }
    } else
      try {
        f = r(c, i), Uh(e, t, f);
      } catch (q) {
        Su(e, t, q);
      }
  }
  function Uh(e, t, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(i) {
        Lh(e, t, i);
      },
      function(i) {
        return Su(e, t, i);
      }
    ) : Lh(e, t, r);
  }
  function Lh(e, t, r) {
    t.status = "fulfilled", t.value = r, qh(t), e.state = r, t = e.pending, t !== null && (r = t.next, r === t ? e.pending = null : (r = r.next, t.next = r, Bh(e, r)));
  }
  function Su(e, t, r) {
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
    if (Ye) {
      var r = nt.formState;
      if (r !== null) {
        e: {
          var i = Oe;
          if (Ye) {
            if (ot) {
              t: {
                for (var c = ot, f = gn; c.nodeType !== 8; ) {
                  if (!f) {
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
                f = c.data, c = f === "F!" || f === "F" ? c : null;
              }
              if (c) {
                ot = vn(
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
      lastRenderedReducer: Ph,
      lastRenderedState: t
    }, r.queue = i, r = sp.bind(
      null,
      Oe,
      i
    ), i.dispatch = r, i = wu(!1), f = Du.bind(
      null,
      Oe,
      !1,
      i.queue
    ), i = Gt(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = c, r = zw.bind(
      null,
      Oe,
      c,
      f,
      r
    ), c.dispatch = r, i.memoizedState = e, [t, r, !1];
  }
  function Wh(e) {
    var t = pt();
    return Vh(t, Je, e);
  }
  function Vh(e, t, r) {
    if (t = bu(
      e,
      t,
      Ph
    )[0], e = Bi(ra)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = wl(t);
      } catch (g) {
        throw g === po ? Di : g;
      }
    else i = t;
    t = pt();
    var c = t.queue, f = c.dispatch;
    return r !== t.memoizedState && (Oe.flags |= 2048, xo(
      9,
      { destroy: void 0 },
      Hw.bind(null, c, r),
      null
    )), [i, f, e];
  }
  function Hw(e, t) {
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
    return e = { tag: e, create: r, deps: i, inst: t, next: null }, t = Oe.updateQueue, t === null && (t = Hi(), Oe.updateQueue = t), r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (i = r.next, r.next = e, e.next = i, t.lastEffect = e), e;
  }
  function Fh() {
    return pt().memoizedState;
  }
  function Ui(e, t, r, i) {
    var c = Gt();
    Oe.flags |= e, c.memoizedState = xo(
      1 | t,
      { destroy: void 0 },
      r,
      i === void 0 ? null : i
    );
  }
  function Li(e, t, r, i) {
    var c = pt();
    i = i === void 0 ? null : i;
    var f = c.memoizedState.inst;
    Je !== null && i !== null && mu(i, Je.memoizedState.deps) ? c.memoizedState = xo(t, f, r, i) : (Oe.flags |= e, c.memoizedState = xo(
      1 | t,
      f,
      r,
      i
    ));
  }
  function Qh(e, t) {
    Ui(8390656, 8, e, t);
  }
  function Cu(e, t) {
    Li(2048, 8, e, t);
  }
  function Yw(e) {
    Oe.flags |= 4;
    var t = Oe.updateQueue;
    if (t === null)
      t = Hi(), Oe.updateQueue = t, t.events = [e];
    else {
      var r = t.events;
      r === null ? t.events = [e] : r.push(e);
    }
  }
  function Zh(e) {
    var t = pt().memoizedState;
    return Yw({ ref: t, nextImpl: e }), function() {
      if ((Ve & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ih(e, t) {
    return Li(4, 2, e, t);
  }
  function $h(e, t) {
    return Li(4, 4, e, t);
  }
  function Kh(e, t) {
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
    r = r != null ? r.concat([e]) : null, Li(4, 4, Kh.bind(null, t, e), r);
  }
  function Eu() {
  }
  function ep(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    return t !== null && mu(t, i[1]) ? i[0] : (r.memoizedState = [e, t], e);
  }
  function tp(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var i = r.memoizedState;
    if (t !== null && mu(t, i[1]))
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
    return r === void 0 || (aa & 1073741824) !== 0 && (ke & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = r, e = ng(), Oe.lanes |= e, Pa |= e, r);
  }
  function np(e, t, r, i) {
    return Jt(r, t) ? r : yo.current !== null ? (e = Tu(e, r, i), Jt(e, t) || (St = !0), e) : (aa & 42) === 0 || (aa & 1073741824) !== 0 && (ke & 261930) === 0 ? (St = !0, e.memoizedState = r) : (e = ng(), Oe.lanes |= e, Pa |= e, t);
  }
  function ap(e, t, r, i, c) {
    var f = F.p;
    F.p = f !== 0 && 8 > f ? f : 8;
    var g = H.T, w = {};
    H.T = w, Du(e, !1, t, r);
    try {
      var k = c(), q = H.S;
      if (q !== null && q(w, k), k !== null && typeof k == "object" && typeof k.then == "function") {
        var X = Rw(
          k,
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
    } catch ($) {
      Sl(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: $ },
        on()
      );
    } finally {
      F.p = f, g !== null && w.types !== null && (g.types = w.types), H.T = g;
    }
  }
  function Bw() {
  }
  function Ou(e, t, r, i) {
    if (e.tag !== 5) throw Error(o(476));
    var c = rp(e).queue;
    ap(
      e,
      c,
      t,
      K,
      r === null ? Bw : function() {
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
        lastRenderedReducer: ra,
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
        lastRenderedReducer: ra,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function op(e) {
    var t = rp(e);
    t.next === null && (t = e.alternate.memoizedState), Sl(
      e,
      t.next.queue,
      {},
      on()
    );
  }
  function Mu() {
    return jt(Ul);
  }
  function lp() {
    return pt().memoizedState;
  }
  function ip() {
    return pt().memoizedState;
  }
  function Uw(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = on();
          e = Ha(r);
          var i = Ya(t, e, r);
          i !== null && ($t(i, t, r), yl(i, t, r)), t = { cache: nu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Lw(e, t, r) {
    var i = on();
    r = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qi(e) ? cp(t, r) : (r = Vc(e, t, r, i), r !== null && ($t(r, e, i), up(r, t, i)));
  }
  function sp(e, t, r) {
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
    if (qi(e)) cp(t, c);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var g = t.lastRenderedState, w = f(g, r);
          if (c.hasEagerState = !0, c.eagerState = w, Jt(w, g))
            return wi(e, t, c, 0), nt === null && xi(), !1;
        } catch {
        }
      if (r = Vc(e, t, c, i), r !== null)
        return $t(r, e, i), up(r, t, i), !0;
    }
    return !1;
  }
  function Du(e, t, r, i) {
    if (i = {
      lane: 2,
      revertLane: lf(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, qi(e)) {
      if (t) throw Error(o(479));
    } else
      t = Vc(
        e,
        r,
        i,
        2
      ), t !== null && $t(t, e, 2);
  }
  function qi(e) {
    var t = e.alternate;
    return e === Oe || t !== null && t === Oe;
  }
  function cp(e, t) {
    vo = ji = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function up(e, t, r) {
    if ((r & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, r |= i, t.lanes = r, pm(e, r);
    }
  }
  var Cl = {
    readContext: jt,
    use: Yi,
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
  Cl.useEffectEvent = ut;
  var fp = {
    readContext: jt,
    use: Yi,
    useCallback: function(e, t) {
      return Gt().memoizedState = [
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
        Kh.bind(null, t, e),
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
      var r = Gt();
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
      var i = Gt();
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
      }, i.queue = e, e = e.dispatch = Lw.bind(
        null,
        Oe,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = Gt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = wu(e);
      var t = e.queue, r = sp.bind(null, Oe, t);
      return t.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Eu,
    useDeferredValue: function(e, t) {
      var r = Gt();
      return Tu(r, e, t);
    },
    useTransition: function() {
      var e = wu(!1);
      return e = ap.bind(
        null,
        Oe,
        e.queue,
        !0,
        !1
      ), Gt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, r) {
      var i = Oe, c = Gt();
      if (Ye) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = t(), nt === null)
          throw Error(o(349));
        (ke & 127) !== 0 || Rh(i, t, r);
      }
      c.memoizedState = r;
      var f = { value: r, getSnapshot: t };
      return c.queue = f, Qh(jh.bind(null, i, f, e), [
        e
      ]), i.flags |= 2048, xo(
        9,
        { destroy: void 0 },
        kh.bind(
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
      var e = Gt(), t = nt.identifierPrefix;
      if (Ye) {
        var r = kn, i = Rn;
        r = (i & ~(1 << 32 - Pt(i) - 1)).toString(32) + r, t = "_" + t + "R_" + r, r = zi++, 0 < r && (t += "H" + r.toString(32)), t += "_";
      } else
        r = kw++, t = "_" + t + "r_" + r.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Mu,
    useFormState: Gh,
    useActionState: Gh,
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
      return t.queue = r, t = Du.bind(
        null,
        Oe,
        !0,
        r
      ), r.dispatch = t, [e, t];
    },
    useMemoCache: vu,
    useCacheRefresh: function() {
      return Gt().memoizedState = Uw.bind(
        null,
        Oe
      );
    },
    useEffectEvent: function(e) {
      var t = Gt(), r = { impl: e };
      return t.memoizedState = r, function() {
        if ((Ve & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, _u = {
    readContext: jt,
    use: Yi,
    useCallback: ep,
    useContext: jt,
    useEffect: Cu,
    useImperativeHandle: Jh,
    useInsertionEffect: Ih,
    useLayoutEffect: $h,
    useMemo: tp,
    useReducer: Bi,
    useRef: Fh,
    useState: function() {
      return Bi(ra);
    },
    useDebugValue: Eu,
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
      var e = Bi(ra)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : wl(e),
        t
      ];
    },
    useSyncExternalStore: Ah,
    useId: lp,
    useHostTransitionStatus: Mu,
    useFormState: Wh,
    useActionState: Wh,
    useOptimistic: function(e, t) {
      var r = pt();
      return Yh(r, Je, e, t);
    },
    useMemoCache: vu,
    useCacheRefresh: ip
  };
  _u.useEffectEvent = Zh;
  var dp = {
    readContext: jt,
    use: Yi,
    useCallback: ep,
    useContext: jt,
    useEffect: Cu,
    useImperativeHandle: Jh,
    useInsertionEffect: Ih,
    useLayoutEffect: $h,
    useMemo: tp,
    useReducer: xu,
    useRef: Fh,
    useState: function() {
      return xu(ra);
    },
    useDebugValue: Eu,
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
      var e = xu(ra)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : wl(e),
        t
      ];
    },
    useSyncExternalStore: Ah,
    useId: lp,
    useHostTransitionStatus: Mu,
    useFormState: Xh,
    useActionState: Xh,
    useOptimistic: function(e, t) {
      var r = pt();
      return Je !== null ? Yh(r, Je, e, t) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: vu,
    useCacheRefresh: ip
  };
  dp.useEffectEvent = Zh;
  function Nu(e, t, r, i) {
    t = e.memoizedState, r = r(i, t), r = r == null ? t : v({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Au = {
    enqueueSetState: function(e, t, r) {
      e = e._reactInternals;
      var i = on(), c = Ha(i);
      c.payload = t, r != null && (c.callback = r), t = Ya(e, c, i), t !== null && ($t(t, e, i), yl(t, e, i));
    },
    enqueueReplaceState: function(e, t, r) {
      e = e._reactInternals;
      var i = on(), c = Ha(i);
      c.tag = 1, c.payload = t, r != null && (c.callback = r), t = Ya(e, c, i), t !== null && ($t(t, e, i), yl(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var r = on(), i = Ha(r);
      i.tag = 2, t != null && (i.callback = t), t = Ya(e, i, r), t !== null && ($t(t, e, r), yl(t, e, r));
    }
  };
  function mp(e, t, r, i, c, f, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, f, g) : t.prototype && t.prototype.isPureReactComponent ? !cl(r, i) || !cl(c, f) : !0;
  }
  function hp(e, t, r, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== e && Au.enqueueReplaceState(t, t.state, null);
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
  function Ru(e, t, r) {
    return r = Ha(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      Pi(e, t);
    }, r;
  }
  function bp(e) {
    return e = Ha(e), e.tag = 3, e;
  }
  function xp(e, t, r, i) {
    var c = r.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var f = i.value;
      e.payload = function() {
        return c(f);
      }, e.callback = function() {
        vp(t, r, i);
      };
    }
    var g = r.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      vp(t, r, i), typeof c != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var w = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: w !== null ? w : ""
      });
    });
  }
  function qw(e, t, r, i, c) {
    if (r.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = r.alternate, t !== null && fo(
        t,
        r,
        c,
        !0
      ), r = tn.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return yn === null ? es() : r.alternate === null && ft === 0 && (ft = 3), r.flags &= -257, r.flags |= 65536, r.lanes = c, i === _i ? r.flags |= 16384 : (t = r.updateQueue, t === null ? r.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), af(e, i, c)), !1;
          case 22:
            return r.flags |= 65536, i === _i ? r.flags |= 16384 : (t = r.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, r.updateQueue = t) : (r = t.retryQueue, r === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : r.add(i)), af(e, i, c)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return af(e, i, c), es(), !1;
    }
    if (Ye)
      return t = tn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, i !== $c && (e = Error(o(422), { cause: i }), dl(mn(e, r)))) : (i !== $c && (t = Error(o(423), {
        cause: i
      }), dl(
        mn(t, r)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, i = mn(i, r), c = Ru(
        e.stateNode,
        i,
        c
      ), su(e, c), ft !== 4 && (ft = 2)), !1;
    var f = Error(o(520), { cause: i });
    if (f = mn(f, r), Al === null ? Al = [f] : Al.push(f), ft !== 4 && (ft = 2), t === null) return !0;
    i = mn(i, r), r = t;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = c & -c, r.lanes |= e, e = Ru(r.stateNode, i, e), su(r, e), !1;
        case 1:
          if (t = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Ga === null || !Ga.has(f))))
            return r.flags |= 65536, c &= -c, r.lanes |= c, c = bp(c), xp(
              c,
              e,
              r,
              i
            ), su(r, c), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var ku = Error(o(461)), St = !1;
  function zt(e, t, r, i) {
    t.child = e === null ? Eh(t, null, r, i) : Or(
      t,
      e.child,
      r,
      i
    );
  }
  function wp(e, t, r, i, c) {
    r = r.render;
    var f = t.ref;
    if ("ref" in i) {
      var g = {};
      for (var w in i)
        w !== "ref" && (g[w] = i[w]);
    } else g = i;
    return Sr(t), i = hu(
      e,
      t,
      r,
      g,
      f,
      c
    ), w = pu(), e !== null && !St ? (gu(e, t, c), oa(e, t, c)) : (Ye && w && Zc(t), t.flags |= 1, zt(e, t, i, c), t.child);
  }
  function Sp(e, t, r, i, c) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" && !Xc(f) && f.defaultProps === void 0 && r.compare === null ? (t.tag = 15, t.type = f, Cp(
        e,
        t,
        f,
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
    if (f = e.child, !qu(e, c)) {
      var g = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : cl, r(g, i) && e.ref === t.ref)
        return oa(e, t, c);
    }
    return t.flags |= 1, e = Jn(f, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Cp(e, t, r, i, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (cl(f, i) && e.ref === t.ref)
        if (St = !1, t.pendingProps = i = f, qu(e, c))
          (e.flags & 131072) !== 0 && (St = !0);
        else
          return t.lanes = e.lanes, oa(e, t, c);
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
        return Tp(
          e,
          t,
          f,
          r,
          i
        );
      }
      if ((r & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Mi(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? Mh(t, f) : uu(), Dh(t);
      else
        return i = t.lanes = 536870912, Tp(
          e,
          t,
          f !== null ? f.baseLanes | r : r,
          r,
          i
        );
    } else
      f !== null ? (Mi(t, f.cachePool), Mh(t, f), Ua(), t.memoizedState = null) : (e !== null && Mi(t, null), uu(), Ua());
    return zt(e, t, c, r), t.child;
  }
  function El(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Tp(e, t, r, i, c) {
    var f = ru();
    return f = f === null ? null : { parent: xt._currentValue, pool: f }, t.memoizedState = {
      baseLanes: r,
      cachePool: f
    }, e !== null && Mi(t, null), uu(), Dh(t), e !== null && fo(e, t, i, !0), t.childLanes = c, null;
  }
  function Gi(e, t) {
    return t = Vi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Op(e, t, r) {
    return Or(t, e.child, null, r), e = Gi(t, t.pendingProps), e.flags |= 2, nn(t), t.memoizedState = null, e;
  }
  function Pw(e, t, r) {
    var i = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ye) {
        if (i.mode === "hidden")
          return e = Gi(t, i), t.lanes = 536870912, El(null, e);
        if (du(t), (e = ot) ? (e = Bg(
          e,
          gn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Aa !== null ? { id: Rn, overflow: kn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = ch(e), r.return = t, t.child = r, kt = t, ot = null)) : e = null, e === null) throw ka(t);
        return t.lanes = 536870912, null;
      }
      return Gi(t, i);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var g = f.dehydrated;
      if (du(t), c)
        if (t.flags & 256)
          t.flags &= -257, t = Op(
            e,
            t,
            r
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (St || fo(e, t, r, !1), c = (r & e.childLanes) !== 0, St || c) {
        if (i = nt, i !== null && (g = gm(i, r), g !== 0 && g !== f.retryLane))
          throw f.retryLane = g, vr(e, g), $t(i, e, g), ku;
        es(), t = Op(
          e,
          t,
          r
        );
      } else
        e = f.treeContext, ot = vn(g.nextSibling), kt = t, Ye = !0, Ra = null, gn = !1, e !== null && dh(t, e), t = Gi(t, i), t.flags |= 4096;
      return t;
    }
    return e = Jn(e.child, {
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
    return Sr(t), r = hu(
      e,
      t,
      r,
      i,
      void 0,
      c
    ), i = pu(), e !== null && !St ? (gu(e, t, c), oa(e, t, c)) : (Ye && i && Zc(t), t.flags |= 1, zt(e, t, r, c), t.child);
  }
  function Mp(e, t, r, i, c, f) {
    return Sr(t), t.updateQueue = null, r = Nh(
      t,
      i,
      r,
      c
    ), _h(e), i = pu(), e !== null && !St ? (gu(e, t, f), oa(e, t, f)) : (Ye && i && Zc(t), t.flags |= 1, zt(e, t, r, f), t.child);
  }
  function Dp(e, t, r, i, c) {
    if (Sr(t), t.stateNode === null) {
      var f = io, g = r.contextType;
      typeof g == "object" && g !== null && (f = jt(g)), f = new r(i, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Au, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, lu(t), g = r.contextType, f.context = typeof g == "object" && g !== null ? jt(g) : io, f.state = t.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (Nu(
        t,
        r,
        g,
        i
      ), f.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (g = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), g !== f.state && Au.enqueueReplaceState(f, f.state, null), bl(t, i, f, c), vl(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      f = t.stateNode;
      var w = t.memoizedProps, k = Dr(r, w);
      f.props = k;
      var q = f.context, X = r.contextType;
      g = io, typeof X == "object" && X !== null && (g = jt(X));
      var $ = r.getDerivedStateFromProps;
      X = typeof $ == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, X || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || q !== g) && hp(
        t,
        f,
        i,
        g
      ), za = !1;
      var P = t.memoizedState;
      f.state = P, bl(t, i, f, c), vl(), q = t.memoizedState, w || P !== q || za ? (typeof $ == "function" && (Nu(
        t,
        r,
        $,
        i
      ), q = t.memoizedState), (k = za || mp(
        t,
        r,
        k,
        i,
        P,
        q,
        g
      )) ? (X || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = q), f.props = i, f.state = q, f.context = g, i = k) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, iu(e, t), g = t.memoizedProps, X = Dr(r, g), f.props = X, $ = t.pendingProps, P = f.context, q = r.contextType, k = io, typeof q == "object" && q !== null && (k = jt(q)), w = r.getDerivedStateFromProps, (q = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== $ || P !== k) && hp(
        t,
        f,
        i,
        k
      ), za = !1, P = t.memoizedState, f.state = P, bl(t, i, f, c), vl();
      var G = t.memoizedState;
      g !== $ || P !== G || za || e !== null && e.dependencies !== null && Ti(e.dependencies) ? (typeof w == "function" && (Nu(
        t,
        r,
        w,
        i
      ), G = t.memoizedState), (X = za || mp(
        t,
        r,
        X,
        i,
        P,
        G,
        k
      ) || e !== null && e.dependencies !== null && Ti(e.dependencies)) ? (q || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, G, k), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        i,
        G,
        k
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = k, i = X) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return f = i, Wi(e, t), i = (t.flags & 128) !== 0, f || i ? (f = t.stateNode, r = i && typeof r.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && i ? (t.child = Or(
      t,
      e.child,
      null,
      c
    ), t.child = Or(
      t,
      null,
      r,
      c
    )) : zt(e, t, r, c), t.memoizedState = f.state, e = t.child) : e = oa(
      e,
      t,
      c
    ), e;
  }
  function _p(e, t, r, i) {
    return xr(), t.flags |= 256, zt(e, t, r, i), t.child;
  }
  var zu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hu(e) {
    return { baseLanes: e, cachePool: vh() };
  }
  function Yu(e, t, r) {
    return e = e !== null ? e.childLanes & ~r : 0, t && (e |= rn), e;
  }
  function Np(e, t, r) {
    var i = t.pendingProps, c = !1, f = (t.flags & 128) !== 0, g;
    if ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (ht.current & 2) !== 0), g && (c = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ye) {
        if (c ? Ba(t) : Ua(), (e = ot) ? (e = Bg(
          e,
          gn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Aa !== null ? { id: Rn, overflow: kn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = ch(e), r.return = t, t.child = r, kt = t, ot = null)) : e = null, e === null) throw ka(t);
        return xf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var w = i.children;
      return i = i.fallback, c ? (Ua(), c = t.mode, w = Vi(
        { mode: "hidden", children: w },
        c
      ), i = br(
        i,
        c,
        r,
        null
      ), w.return = t, i.return = t, w.sibling = i, t.child = w, i = t.child, i.memoizedState = Hu(r), i.childLanes = Yu(
        e,
        g,
        r
      ), t.memoizedState = zu, El(null, i)) : (Ba(t), Bu(t, w));
    }
    var k = e.memoizedState;
    if (k !== null && (w = k.dehydrated, w !== null)) {
      if (f)
        t.flags & 256 ? (Ba(t), t.flags &= -257, t = Uu(
          e,
          t,
          r
        )) : t.memoizedState !== null ? (Ua(), t.child = e.child, t.flags |= 128, t = null) : (Ua(), w = i.fallback, c = t.mode, i = Vi(
          { mode: "visible", children: i.children },
          c
        ), w = br(
          w,
          c,
          r,
          null
        ), w.flags |= 2, i.return = t, w.return = t, i.sibling = w, t.child = i, Or(
          t,
          e.child,
          null,
          r
        ), i = t.child, i.memoizedState = Hu(r), i.childLanes = Yu(
          e,
          g,
          r
        ), t.memoizedState = zu, t = El(null, i));
      else if (Ba(t), xf(w)) {
        if (g = w.nextSibling && w.nextSibling.dataset, g) var q = g.dgst;
        g = q, i = Error(o(419)), i.stack = "", i.digest = g, dl({ value: i, source: null, stack: null }), t = Uu(
          e,
          t,
          r
        );
      } else if (St || fo(e, t, r, !1), g = (r & e.childLanes) !== 0, St || g) {
        if (g = nt, g !== null && (i = gm(g, r), i !== 0 && i !== k.retryLane))
          throw k.retryLane = i, vr(e, i), $t(g, e, i), ku;
        bf(w) || es(), t = Uu(
          e,
          t,
          r
        );
      } else
        bf(w) ? (t.flags |= 192, t.child = e.child, t = null) : (e = k.treeContext, ot = vn(
          w.nextSibling
        ), kt = t, Ye = !0, Ra = null, gn = !1, e !== null && dh(t, e), t = Bu(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return c ? (Ua(), w = i.fallback, c = t.mode, k = e.child, q = k.sibling, i = Jn(k, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = k.subtreeFlags & 65011712, q !== null ? w = Jn(
      q,
      w
    ) : (w = br(
      w,
      c,
      r,
      null
    ), w.flags |= 2), w.return = t, i.return = t, i.sibling = w, t.child = i, El(null, i), i = t.child, w = e.child.memoizedState, w === null ? w = Hu(r) : (c = w.cachePool, c !== null ? (k = xt._currentValue, c = c.parent !== k ? { parent: k, pool: k } : c) : c = vh(), w = {
      baseLanes: w.baseLanes | r,
      cachePool: c
    }), i.memoizedState = w, i.childLanes = Yu(
      e,
      g,
      r
    ), t.memoizedState = zu, El(e.child, i)) : (Ba(t), r = e.child, e = r.sibling, r = Jn(r, {
      mode: "visible",
      children: i.children
    }), r.return = t, r.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = r, t.memoizedState = null, r);
  }
  function Bu(e, t) {
    return t = Vi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Vi(e, t) {
    return e = en(22, e, null, t), e.lanes = 0, e;
  }
  function Uu(e, t, r) {
    return Or(t, e.child, null, r), e = Bu(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ap(e, t, r) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), eu(e.return, t, r);
  }
  function Lu(e, t, r, i, c, f) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: r,
      tailMode: c,
      treeForkCount: f
    } : (g.isBackwards = t, g.rendering = null, g.renderingStartTime = 0, g.last = i, g.tail = r, g.tailMode = c, g.treeForkCount = f);
  }
  function Rp(e, t, r) {
    var i = t.pendingProps, c = i.revealOrder, f = i.tail;
    i = i.children;
    var g = ht.current, w = (g & 2) !== 0;
    if (w ? (g = g & 1 | 2, t.flags |= 128) : g &= 1, te(ht, g), zt(e, t, i, r), i = Ye ? fl : 0, !w && e !== null && (e.flags & 128) !== 0)
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
        r = c, r === null ? (c = t.child, t.child = null) : (c = r.sibling, r.sibling = null), Lu(
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
          if (e = c.alternate, e !== null && ki(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = r, r = c, c = e;
        }
        Lu(
          t,
          !0,
          r,
          null,
          f,
          i
        );
        break;
      case "together":
        Lu(
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
  function oa(e, t, r) {
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
      for (e = t.child, r = Jn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
        e = e.sibling, r = r.sibling = Jn(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function qu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ti(e)));
  }
  function Gw(e, t, r) {
    switch (t.tag) {
      case 3:
        Fe(t, t.stateNode.containerInfo), ja(t, xt, e.memoizedState.cache), xr();
        break;
      case 27:
      case 5:
        he(t);
        break;
      case 4:
        Fe(t, t.stateNode.containerInfo);
        break;
      case 10:
        ja(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, du(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Ba(t), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Np(e, t, r) : (Ba(t), e = oa(
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
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), te(ht, ht.current), i) break;
        return null;
      case 22:
        return t.lanes = 0, Ep(
          e,
          t,
          r,
          t.pendingProps
        );
      case 24:
        ja(t, xt, e.memoizedState.cache);
    }
    return oa(e, t, r);
  }
  function kp(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        St = !0;
      else {
        if (!qu(e, r) && (t.flags & 128) === 0)
          return St = !1, Gw(
            e,
            t,
            r
          );
        St = (e.flags & 131072) !== 0;
      }
    else
      St = !1, Ye && (t.flags & 1048576) !== 0 && fh(t, fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (e = Er(t.elementType), t.type = e, typeof e == "function")
            Xc(e) ? (i = Dr(e, i), t.tag = 1, t = Dp(
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
              if (c === N) {
                t.tag = 11, t = wp(
                  null,
                  t,
                  e,
                  i,
                  r
                );
                break e;
              } else if (c === Y) {
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
            throw t = J(e) || e, Error(o(306, t, ""));
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
          var f = t.memoizedState;
          c = f.element, iu(e, t), bl(t, i, null, r);
          var g = t.memoizedState;
          if (i = g.cache, ja(t, xt, i), i !== f.cache && tu(
            t,
            [xt],
            r,
            !0
          ), vl(), i = g.element, f.isDehydrated)
            if (f = {
              element: i,
              isDehydrated: !1,
              cache: g.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = _p(
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
              ), dl(c), t = _p(
                e,
                t,
                i,
                r
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ot = vn(e.firstChild), kt = t, Ye = !0, Ra = null, gn = !0, r = Eh(
                t,
                null,
                i,
                r
              ), t.child = r; r; )
                r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (xr(), i === c) {
              t = oa(
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
        return Wi(e, t), e === null ? (r = Wg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = r : Ye || (r = t.type, e = t.pendingProps, i = is(
          se.current
        ).createElement(r), i[Rt] = t, i[Vt] = e, Ht(i, r, e), Dt(i), t.stateNode = i) : t.memoizedState = Wg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return he(t), e === null && Ye && (i = t.stateNode = qg(
          t.type,
          t.pendingProps,
          se.current
        ), kt = t, gn = !0, c = ot, Fa(t.type) ? (wf = c, ot = vn(i.firstChild)) : ot = c), zt(
          e,
          t,
          t.pendingProps.children,
          r
        ), Wi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ye && ((c = i = ot) && (i = bS(
          i,
          t.type,
          t.pendingProps,
          gn
        ), i !== null ? (t.stateNode = i, kt = t, ot = vn(i.firstChild), gn = !1, c = !0) : c = !1), c || ka(t)), he(t), c = t.type, f = t.pendingProps, g = e !== null ? e.memoizedProps : null, i = f.children, gf(c, f) ? i = null : g !== null && gf(c, g) && (t.flags |= 32), t.memoizedState !== null && (c = hu(
          e,
          t,
          jw,
          null,
          null,
          r
        ), Ul._currentValue = c), Wi(e, t), zt(e, t, i, r), t.child;
      case 6:
        return e === null && Ye && ((e = r = ot) && (r = xS(
          r,
          t.pendingProps,
          gn
        ), r !== null ? (t.stateNode = r, kt = t, ot = null, e = !0) : e = !1), e || ka(t)), null;
      case 13:
        return Np(e, t, r);
      case 4:
        return Fe(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Or(
          t,
          null,
          i,
          r
        ) : zt(e, t, i, r), t.child;
      case 11:
        return wp(
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
        return i = t.pendingProps, ja(t, t.type, i.value), zt(e, t, i.children, r), t.child;
      case 9:
        return c = t.type._context, i = t.pendingProps.children, Sr(t), c = jt(c), i = i(c), t.flags |= 1, zt(e, t, i, r), t.child;
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
        return Pw(e, t, r);
      case 22:
        return Ep(
          e,
          t,
          r,
          t.pendingProps
        );
      case 24:
        return Sr(t), i = jt(xt), e === null ? (c = ru(), c === null && (c = nt, f = nu(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= r), c = f), t.memoizedState = { parent: i, cache: c }, lu(t), ja(t, xt, c)) : ((e.lanes & r) !== 0 && (iu(e, t), bl(t, null, null, r), vl()), c = e.memoizedState, f = t.memoizedState, c.parent !== i ? (c = { parent: i, cache: i }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), ja(t, xt, i)) : (i = f.cache, ja(t, xt, i), i !== c.cache && tu(
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
  function la(e) {
    e.flags |= 4;
  }
  function Pu(e, t, r, i, c) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (c & 335544128) === c)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (lg()) e.flags |= 8192;
        else
          throw Tr = _i, ou;
    } else e.flags &= -16777217;
  }
  function jp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Zg(t))
      if (lg()) e.flags |= 8192;
      else
        throw Tr = _i, ou;
  }
  function Xi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? si() : 536870912, e.lanes |= t, Eo |= t);
  }
  function Tl(e, t) {
    if (!Ye)
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
  function Ww(e, t, r) {
    var i = t.pendingProps;
    switch (Ic(t), t.tag) {
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
        return r = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), na(xt), ye(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (uo(t) ? la(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Kc())), lt(t), null;
      case 26:
        var c = t.type, f = t.memoizedState;
        return e === null ? (la(t), f !== null ? (lt(t), jp(t, f)) : (lt(t), Pu(
          t,
          c,
          null,
          i,
          r
        ))) : f ? f !== e.memoizedState ? (la(t), lt(t), jp(t, f)) : (lt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && la(t), lt(t), Pu(
          t,
          c,
          e,
          i,
          r
        )), null;
      case 27:
        if (Qe(t), r = se.current, c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && la(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(o(166));
            return lt(t), null;
          }
          e = le.current, uo(t) ? mh(t) : (e = qg(c, i, r), t.stateNode = e, la(t));
        }
        return lt(t), null;
      case 5:
        if (Qe(t), c = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && la(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(o(166));
            return lt(t), null;
          }
          if (f = le.current, uo(t))
            mh(t);
          else {
            var g = is(
              se.current
            );
            switch (f) {
              case 1:
                f = g.createElementNS(
                  "http://www.w3.org/2000/svg",
                  c
                );
                break;
              case 2:
                f = g.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  c
                );
                break;
              default:
                switch (c) {
                  case "svg":
                    f = g.createElementNS(
                      "http://www.w3.org/2000/svg",
                      c
                    );
                    break;
                  case "math":
                    f = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c
                    );
                    break;
                  case "script":
                    f = g.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof i.is == "string" ? g.createElement("select", {
                      is: i.is
                    }) : g.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                    break;
                  default:
                    f = typeof i.is == "string" ? g.createElement(c, { is: i.is }) : g.createElement(c);
                }
            }
            f[Rt] = t, f[Vt] = i;
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6)
                f.appendChild(g.stateNode);
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
            i && la(t);
          }
        }
        return lt(t), Pu(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          r
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && la(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = se.current, uo(t)) {
            if (e = t.stateNode, r = t.memoizedProps, i = null, c = kt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  i = c.memoizedProps;
              }
            e[Rt] = t, e = !!(e.nodeValue === r || i !== null && i.suppressHydrationWarning === !0 || Ng(e.nodeValue, r)), e || ka(t, !0);
          } else
            e = is(e).createTextNode(
              i
            ), e[Rt] = t, t.stateNode = e;
        }
        return lt(t), null;
      case 31:
        if (r = t.memoizedState, e === null || e.memoizedState !== null) {
          if (i = uo(t), r !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Rt] = t;
            } else
              xr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), e = !1;
          } else
            r = Kc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return t.flags & 256 ? (nn(t), t) : (nn(t), null);
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
              c[Rt] = t;
            } else
              xr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), c = !1;
          } else
            c = Kc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (nn(t), t) : (nn(t), null);
        }
        return nn(t), (t.flags & 128) !== 0 ? (t.lanes = r, t) : (r = i !== null, e = e !== null && e.memoizedState !== null, r && (i = t.child, c = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (c = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== c && (i.flags |= 2048)), r !== e && r && (t.child.flags |= 8192), Xi(t, t.updateQueue), lt(t), null);
      case 4:
        return ye(), e === null && ff(t.stateNode.containerInfo), lt(t), null;
      case 10:
        return na(t.type), lt(t), null;
      case 19:
        if (V(ht), i = t.memoizedState, i === null) return lt(t), null;
        if (c = (t.flags & 128) !== 0, f = i.rendering, f === null)
          if (c) Tl(i, !1);
          else {
            if (ft !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = ki(e), f !== null) {
                  for (t.flags |= 128, Tl(i, !1), e = f.updateQueue, t.updateQueue = e, Xi(t, e), t.subtreeFlags = 0, e = r, r = t.child; r !== null; )
                    sh(r, e), r = r.sibling;
                  return te(
                    ht,
                    ht.current & 1 | 2
                  ), Ye && ea(t, i.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null && At() > $i && (t.flags |= 128, c = !0, Tl(i, !1), t.lanes = 4194304);
          }
        else {
          if (!c)
            if (e = ki(f), e !== null) {
              if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Xi(t, e), Tl(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !Ye)
                return lt(t), null;
            } else
              2 * At() - i.renderingStartTime > $i && r !== 536870912 && (t.flags |= 128, c = !0, Tl(i, !1), t.lanes = 4194304);
          i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = At(), e.sibling = null, r = ht.current, te(
          ht,
          c ? r & 1 | 2 : r & 1
        ), Ye && ea(t, i.treeForkCount), e) : (lt(t), null);
      case 22:
      case 23:
        return nn(t), fu(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (r & 536870912) !== 0 && (t.flags & 128) === 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), r = t.updateQueue, r !== null && Xi(t, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== r && (t.flags |= 2048), e !== null && V(Cr), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), na(xt), lt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Vw(e, t) {
    switch (Ic(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return na(xt), ye(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Qe(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (nn(t), t.alternate === null)
            throw Error(o(340));
          xr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (nn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
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
        return na(t.type), null;
      case 22:
      case 23:
        return nn(t), fu(), e !== null && V(Cr), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return na(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zp(e, t) {
    switch (Ic(t), t.tag) {
      case 3:
        na(xt), ye();
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
        na(t.type);
        break;
      case 22:
      case 23:
        nn(t), fu(), e !== null && V(Cr);
        break;
      case 24:
        na(xt);
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
            var f = r.create, g = r.inst;
            i = f(), g.destroy = i;
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (w) {
      Ie(t, t.return, w);
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
            var g = i.inst, w = g.destroy;
            if (w !== void 0) {
              g.destroy = void 0, c = t;
              var k = r, q = w;
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
        } while (i !== f);
      }
    } catch (X) {
      Ie(t, t.return, X);
    }
  }
  function Hp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Oh(t, r);
      } catch (i) {
        Ie(e, e.return, i);
      }
    }
  }
  function Yp(e, t, r) {
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
  function Ml(e, t) {
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
  function jn(e, t) {
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
  function Gu(e, t, r) {
    try {
      var i = e.stateNode;
      mS(i, e.type, r, t), i[Vt] = t;
    } catch (c) {
      Ie(e, e.return, c);
    }
  }
  function Up(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fa(e.type) || e.tag === 4;
  }
  function Wu(e) {
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
  function Vu(e, t, r) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(e, t) : (t = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, t.appendChild(e), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = $n));
    else if (i !== 4 && (i === 27 && Fa(e.type) && (r = e.stateNode, t = null), e = e.child, e !== null))
      for (Vu(e, t, r), e = e.sibling; e !== null; )
        Vu(e, t, r), e = e.sibling;
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
      Ht(t, i, r), t[Rt] = e, t[Vt] = r;
    } catch (f) {
      Ie(e, e.return, f);
    }
  }
  var ia = !1, Ct = !1, Xu = !1, qp = typeof WeakSet == "function" ? WeakSet : Set, _t = null;
  function Xw(e, t) {
    if (e = e.containerInfo, hf = hs, e = Jm(e), Uc(e)) {
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
            var g = 0, w = -1, k = -1, q = 0, X = 0, $ = e, P = null;
            t: for (; ; ) {
              for (var G; $ !== r || c !== 0 && $.nodeType !== 3 || (w = g + c), $ !== f || i !== 0 && $.nodeType !== 3 || (k = g + i), $.nodeType === 3 && (g += $.nodeValue.length), (G = $.firstChild) !== null; )
                P = $, $ = G;
              for (; ; ) {
                if ($ === e) break t;
                if (P === r && ++q === c && (w = g), P === f && ++X === i && (k = g), (G = $.nextSibling) !== null) break;
                $ = P, P = $.parentNode;
              }
              $ = G;
            }
            r = w === -1 || k === -1 ? null : { start: w, end: k };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (pf = { focusedElem: e, selectionRange: r }, hs = !1, _t = t; _t !== null; )
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
                  var de = Dr(
                    r.type,
                    c
                  );
                  e = i.getSnapshotBeforeUpdate(
                    de,
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
                  vf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      vf(e);
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
        ca(e, r), i & 4 && Ol(5, r);
        break;
      case 1:
        if (ca(e, r), i & 4)
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
        i & 64 && Hp(r), i & 512 && Ml(r, r.return);
        break;
      case 3:
        if (ca(e, r), i & 64 && (e = r.updateQueue, e !== null)) {
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
            Oh(e, t);
          } catch (g) {
            Ie(r, r.return, g);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Lp(r);
      case 26:
      case 5:
        ca(e, r), t === null && i & 4 && Bp(r), i & 512 && Ml(r, r.return);
        break;
      case 12:
        ca(e, r);
        break;
      case 31:
        ca(e, r), i & 4 && Vp(e, r);
        break;
      case 13:
        ca(e, r), i & 4 && Xp(e, r), i & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = tS.bind(
          null,
          r
        ), wS(e, r))));
        break;
      case 22:
        if (i = r.memoizedState !== null || ia, !i) {
          t = t !== null && t.memoizedState !== null || Ct, c = ia;
          var f = Ct;
          ia = i, (Ct = t) && !f ? ua(
            e,
            r,
            (r.subtreeFlags & 8772) !== 0
          ) : ca(e, r), ia = c, Ct = f;
        }
        break;
      case 30:
        break;
      default:
        ca(e, r);
    }
  }
  function Gp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Sc(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var it = null, Ft = !1;
  function sa(e, t, r) {
    for (r = r.child; r !== null; )
      Wp(e, t, r), r = r.sibling;
  }
  function Wp(e, t, r) {
    if (qt && typeof qt.onCommitFiberUnmount == "function")
      try {
        qt.onCommitFiberUnmount(fr, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Ct || jn(r, t), sa(
          e,
          t,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Ct || jn(r, t);
        var i = it, c = Ft;
        Fa(r.type) && (it = r.stateNode, Ft = !1), sa(
          e,
          t,
          r
        ), Hl(r.stateNode), it = i, Ft = c;
        break;
      case 5:
        Ct || jn(r, t);
      case 6:
        if (i = it, c = Ft, it = null, sa(
          e,
          t,
          r
        ), it = i, Ft = c, it !== null)
          if (Ft)
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
        it !== null && (Ft ? (e = it, Hg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), Ro(e)) : Hg(it, r.stateNode));
        break;
      case 4:
        i = it, c = Ft, it = r.stateNode.containerInfo, Ft = !0, sa(
          e,
          t,
          r
        ), it = i, Ft = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        La(2, r, t), Ct || La(4, r, t), sa(
          e,
          t,
          r
        );
        break;
      case 1:
        Ct || (jn(r, t), i = r.stateNode, typeof i.componentWillUnmount == "function" && Yp(
          r,
          t,
          i
        )), sa(
          e,
          t,
          r
        );
        break;
      case 21:
        sa(
          e,
          t,
          r
        );
        break;
      case 22:
        Ct = (i = Ct) || r.memoizedState !== null, sa(
          e,
          t,
          r
        ), Ct = i;
        break;
      default:
        sa(
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
  function Fw(e) {
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
    var r = Fw(e);
    t.forEach(function(i) {
      if (!r.has(i)) {
        r.add(i);
        var c = nS.bind(null, e, i);
        i.then(c, c);
      }
    });
  }
  function Qt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var i = 0; i < r.length; i++) {
        var c = r[i], f = e, g = t, w = g;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (Fa(w.type)) {
                it = w.stateNode, Ft = !1;
                break e;
              }
              break;
            case 5:
              it = w.stateNode, Ft = !1;
              break e;
            case 3:
            case 4:
              it = w.stateNode.containerInfo, Ft = !0;
              break e;
          }
          w = w.return;
        }
        if (it === null) throw Error(o(160));
        Wp(f, g, c), it = null, Ft = !1, f = c.alternate, f !== null && (f.return = null), c.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Fp(t, e), t = t.sibling;
  }
  var Cn = null;
  function Fp(e, t) {
    var r = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Qt(t, e), Zt(e), i & 4 && (La(3, e, e.return), Ol(3, e), La(5, e, e.return));
        break;
      case 1:
        Qt(t, e), Zt(e), i & 512 && (Ct || r === null || jn(r, r.return)), i & 64 && ia && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? i : r.concat(i))));
        break;
      case 26:
        var c = Cn;
        if (Qt(t, e), Zt(e), i & 512 && (Ct || r === null || jn(r, r.return)), i & 4) {
          var f = r !== null ? r.memoizedState : null;
          if (i = e.memoizedState, r === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, r = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (i) {
                    case "title":
                      f = c.getElementsByTagName("title")[0], (!f || f[el] || f[Rt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(i), c.head.insertBefore(
                        f,
                        c.querySelector("head > title")
                      )), Ht(f, i, r), f[Rt] = e, Dt(f), i = f;
                      break e;
                    case "link":
                      var g = Fg(
                        "link",
                        "href",
                        c
                      ).get(i + (r.href || ""));
                      if (g) {
                        for (var w = 0; w < g.length; w++)
                          if (f = g[w], f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                            g.splice(w, 1);
                            break t;
                          }
                      }
                      f = c.createElement(i), Ht(f, i, r), c.head.appendChild(f);
                      break;
                    case "meta":
                      if (g = Fg(
                        "meta",
                        "content",
                        c
                      ).get(i + (r.content || ""))) {
                        for (w = 0; w < g.length; w++)
                          if (f = g[w], f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                            g.splice(w, 1);
                            break t;
                          }
                      }
                      f = c.createElement(i), Ht(f, i, r), c.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  f[Rt] = e, Dt(f), i = f;
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
            f !== i ? (f === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : f.count--, i === null ? Qg(
              c,
              e.type,
              e.stateNode
            ) : Xg(
              c,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && Gu(
              e,
              e.memoizedProps,
              r.memoizedProps
            );
        }
        break;
      case 27:
        Qt(t, e), Zt(e), i & 512 && (Ct || r === null || jn(r, r.return)), r !== null && i & 4 && Gu(
          e,
          e.memoizedProps,
          r.memoizedProps
        );
        break;
      case 5:
        if (Qt(t, e), Zt(e), i & 512 && (Ct || r === null || jn(r, r.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            eo(c, "");
          } catch (de) {
            Ie(e, e.return, de);
          }
        }
        i & 4 && e.stateNode != null && (c = e.memoizedProps, Gu(
          e,
          c,
          r !== null ? r.memoizedProps : c
        )), i & 1024 && (Xu = !0);
        break;
      case 6:
        if (Qt(t, e), Zt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          i = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = i;
          } catch (de) {
            Ie(e, e.return, de);
          }
        }
        break;
      case 3:
        if (us = null, c = Cn, Cn = ss(t.containerInfo), Qt(t, e), Cn = c, Zt(e), i & 4 && r !== null && r.memoizedState.isDehydrated)
          try {
            Ro(t.containerInfo);
          } catch (de) {
            Ie(e, e.return, de);
          }
        Xu && (Xu = !1, Qp(e));
        break;
      case 4:
        i = Cn, Cn = ss(
          e.stateNode.containerInfo
        ), Qt(t, e), Zt(e), Cn = i;
        break;
      case 12:
        Qt(t, e), Zt(e);
        break;
      case 31:
        Qt(t, e), Zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Qi(e, i)));
        break;
      case 13:
        Qt(t, e), Zt(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (Ii = At()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Qi(e, i)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var k = r !== null && r.memoizedState !== null, q = ia, X = Ct;
        if (ia = q || c, Ct = X || k, Qt(t, e), Ct = X, ia = q, Zt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (r === null || k || ia || Ct || _r(e)), r = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (r === null) {
                k = r = t;
                try {
                  if (f = k.stateNode, c)
                    g = f.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    w = k.stateNode;
                    var $ = k.memoizedProps.style, P = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    w.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                  }
                } catch (de) {
                  Ie(k, k.return, de);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                k = t;
                try {
                  k.stateNode.nodeValue = c ? "" : k.memoizedProps;
                } catch (de) {
                  Ie(k, k.return, de);
                }
              }
            } else if (t.tag === 18) {
              if (r === null) {
                k = t;
                try {
                  var G = k.stateNode;
                  c ? Yg(G, !0) : Yg(k.stateNode, !1);
                } catch (de) {
                  Ie(k, k.return, de);
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
        Qt(t, e), Zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Qi(e, i)));
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
          if (Up(i)) {
            r = i;
            break;
          }
          i = i.return;
        }
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var c = r.stateNode, f = Wu(e);
            Fi(e, f, c);
            break;
          case 5:
            var g = r.stateNode;
            r.flags & 32 && (eo(g, ""), r.flags &= -33);
            var w = Wu(e);
            Fi(e, w, g);
            break;
          case 3:
          case 4:
            var k = r.stateNode.containerInfo, q = Wu(e);
            Vu(
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
  function ca(e, t) {
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
          jn(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && Yp(
            t,
            t.return,
            r
          ), _r(t);
          break;
        case 27:
          Hl(t.stateNode);
        case 26:
        case 5:
          jn(t, t.return), _r(t);
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
  function ua(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, c = e, f = t, g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ua(
            c,
            f,
            r
          ), Ol(4, f);
          break;
        case 1:
          if (ua(
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
            var w = i.stateNode;
            try {
              var k = c.shared.hiddenCallbacks;
              if (k !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < k.length; c++)
                  Th(k[c], w);
            } catch (q) {
              Ie(i, i.return, q);
            }
          }
          r && g & 64 && Hp(f), Ml(f, f.return);
          break;
        case 27:
          Lp(f);
        case 26:
        case 5:
          ua(
            c,
            f,
            r
          ), r && i === null && g & 4 && Bp(f), Ml(f, f.return);
          break;
        case 12:
          ua(
            c,
            f,
            r
          );
          break;
        case 31:
          ua(
            c,
            f,
            r
          ), r && g & 4 && Vp(c, f);
          break;
        case 13:
          ua(
            c,
            f,
            r
          ), r && g & 4 && Xp(c, f);
          break;
        case 22:
          f.memoizedState === null && ua(
            c,
            f,
            r
          ), Ml(f, f.return);
          break;
        case 30:
          break;
        default:
          ua(
            c,
            f,
            r
          );
      }
      t = t.sibling;
    }
  }
  function Fu(e, t) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && ml(r));
  }
  function Qu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ml(e));
  }
  function En(e, t, r, i) {
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
        ), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ml(e)));
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
            var f = t.memoizedProps, g = f.id, w = f.onPostCommit;
            typeof w == "function" && w(
              g,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (k) {
            Ie(t, t.return, k);
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
        f = t.stateNode, g = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? En(
          e,
          t,
          r,
          i
        ) : Dl(e, t) : f._visibility & 2 ? En(
          e,
          t,
          r,
          i
        ) : (f._visibility |= 2, wo(
          e,
          t,
          r,
          i,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), c & 2048 && Fu(g, t);
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
      var f = e, g = t, w = r, k = i, q = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          wo(
            f,
            g,
            w,
            k,
            c
          ), Ol(8, g);
          break;
        case 23:
          break;
        case 22:
          var X = g.stateNode;
          g.memoizedState !== null ? X._visibility & 2 ? wo(
            f,
            g,
            w,
            k,
            c
          ) : Dl(
            f,
            g
          ) : (X._visibility |= 2, wo(
            f,
            g,
            w,
            k,
            c
          )), c && q & 2048 && Fu(
            g.alternate,
            g
          );
          break;
        case 24:
          wo(
            f,
            g,
            w,
            k,
            c
          ), c && q & 2048 && Qu(g.alternate, g);
          break;
        default:
          wo(
            f,
            g,
            w,
            k,
            c
          );
      }
      t = t.sibling;
    }
  }
  function Dl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e, i = t, c = i.flags;
        switch (i.tag) {
          case 22:
            Dl(r, i), c & 2048 && Fu(
              i.alternate,
              i
            );
            break;
          case 24:
            Dl(r, i), c & 2048 && Qu(i.alternate, i);
            break;
          default:
            Dl(r, i);
        }
        t = t.sibling;
      }
  }
  var _l = 8192;
  function So(e, t, r) {
    if (e.subtreeFlags & _l)
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
        ), e.flags & _l && e.memoizedState !== null && kS(
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
        Cn = ss(e.stateNode.containerInfo), So(
          e,
          t,
          r
        ), Cn = i;
        break;
      case 22:
        e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = _l, _l = 16777216, So(
          e,
          t,
          r
        ), _l = i) : So(
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
  function $p(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Nl(e) {
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
      $p(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Kp(e), e = e.sibling;
  }
  function Kp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Nl(e), e.flags & 2048 && La(9, e, e.return);
        break;
      case 3:
        Nl(e);
        break;
      case 12:
        Nl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Zi(e)) : Nl(e);
        break;
      default:
        Nl(e);
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
      $p(e);
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
          ml(r.memoizedState.cache);
      }
      if (i = r.child, i !== null) i.return = r, _t = i;
      else
        e: for (r = e; _t !== null; ) {
          i = _t;
          var c = i.sibling, f = i.return;
          if (Gp(i), i === r) {
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
  var Qw = {
    getCacheForType: function(e) {
      var t = jt(xt), r = t.data.get(e);
      return r === void 0 && (r = e(), t.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return jt(xt).controller.signal;
    }
  }, Zw = typeof WeakMap == "function" ? WeakMap : Map, Ve = 0, nt = null, Ne = null, ke = 0, Ze = 0, an = null, qa = !1, Co = !1, Zu = !1, fa = 0, ft = 0, Pa = 0, Nr = 0, Iu = 0, rn = 0, Eo = 0, Al = null, It = null, $u = !1, Ii = 0, eg = 0, $i = 1 / 0, Ki = null, Ga = null, Tt = 0, Wa = null, To = null, da = 0, Ku = 0, Ju = null, tg = null, Rl = 0, ef = null;
  function on() {
    return (Ve & 2) !== 0 && ke !== 0 ? ke & -ke : H.T !== null ? lf() : ym();
  }
  function ng() {
    if (rn === 0)
      if ((ke & 536870912) === 0 || Ye) {
        var e = be;
        be <<= 1, (be & 3932160) === 0 && (be = 262144), rn = e;
      } else rn = 536870912;
    return e = tn.current, e !== null && (e.flags |= 32), rn;
  }
  function $t(e, t, r) {
    (e === nt && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null) && (Oo(e, 0), Va(
      e,
      ke,
      rn,
      !1
    )), Zn(e, r), ((Ve & 2) === 0 || e !== nt) && (e === nt && ((Ve & 2) === 0 && (Nr |= r), ft === 4 && Va(
      e,
      ke,
      rn,
      !1
    )), zn(e));
  }
  function ag(e, t, r) {
    if ((Ve & 6) !== 0) throw Error(o(327));
    var i = !r && (t & 127) === 0 && (t & e.expiredLanes) === 0 || dr(e, t), c = i ? Kw(e, t) : nf(e, t, !0), f = i;
    do {
      if (c === 0) {
        Co && !i && Va(e, t, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, f && !Iw(r)) {
          c = nf(e, t, !1), f = !1;
          continue;
        }
        if (c === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var g = 0;
          else
            g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            t = g;
            e: {
              var w = e;
              c = Al;
              var k = w.current.memoizedState.isDehydrated;
              if (k && (Oo(w, g).flags |= 256), g = nf(
                w,
                g,
                !1
              ), g !== 2) {
                if (Zu && !k) {
                  w.errorRecoveryDisabledLanes |= f, Nr |= f, c = 4;
                  break e;
                }
                f = It, It = c, f !== null && (It === null ? It = f : It.push.apply(
                  It,
                  f
                ));
              }
              c = g;
            }
            if (f = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          Oo(e, 0), Va(e, t, 0, !0);
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
          if ((t & 62914560) === t && (c = Ii + 300 - At(), 10 < c)) {
            if (Va(
              i,
              t,
              rn,
              !qa
            ), De(i, 0, !0) !== 0) break e;
            da = t, i.timeoutHandle = jg(
              rg.bind(
                null,
                i,
                r,
                It,
                Ki,
                $u,
                t,
                rn,
                Nr,
                Eo,
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
          rg(
            i,
            r,
            It,
            Ki,
            $u,
            t,
            rn,
            Nr,
            Eo,
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
  function rg(e, t, r, i, c, f, g, w, k, q, X, $, P, G) {
    if (e.timeoutHandle = -1, $ = t.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
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
        f,
        $
      );
      var de = (f & 62914560) === f ? Ii - At() : (f & 4194048) === f ? eg - At() : 0;
      if (de = jS(
        $,
        de
      ), de !== null) {
        da = f, e.cancelPendingCommit = de(
          dg.bind(
            null,
            e,
            t,
            f,
            r,
            i,
            c,
            g,
            w,
            k,
            X,
            $,
            null,
            P,
            G
          )
        ), Va(e, f, g, !q);
        return;
      }
    }
    dg(
      e,
      t,
      f,
      r,
      i,
      c,
      g,
      w,
      k
    );
  }
  function Iw(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if ((r === 0 || r === 11 || r === 15) && t.flags & 16384 && (r = t.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var i = 0; i < r.length; i++) {
          var c = r[i], f = c.getSnapshot;
          c = c.value;
          try {
            if (!Jt(f(), c)) return !1;
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
    t &= ~Iu, t &= ~Nr, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var f = 31 - Pt(c), g = 1 << f;
      i[f] = -1, c &= ~g;
    }
    r !== 0 && hm(e, r, t);
  }
  function Ji() {
    return (Ve & 6) === 0 ? (kl(0), !1) : !0;
  }
  function tf() {
    if (Ne !== null) {
      if (Ze === 0)
        var e = Ne.return;
      else
        e = Ne, ta = wr = null, yu(e), go = null, pl = 0, e = Ne;
      for (; e !== null; )
        zp(e.alternate, e), e = e.return;
      Ne = null;
    }
  }
  function Oo(e, t) {
    var r = e.timeoutHandle;
    r !== -1 && (e.timeoutHandle = -1, gS(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), da = 0, tf(), nt = e, Ne = r = Jn(e.current, null), ke = t, Ze = 0, an = null, qa = !1, Co = dr(e, t), Zu = !1, Eo = rn = Iu = Nr = Pa = ft = 0, It = Al = null, $u = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var c = 31 - Pt(i), f = 1 << c;
        t |= e[c], i &= ~f;
      }
    return fa = t, xi(), r;
  }
  function og(e, t) {
    Oe = null, H.H = Cl, t === po || t === Di ? (t = wh(), Ze = 3) : t === ou ? (t = wh(), Ze = 4) : Ze = t === ku ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, an = t, Ne === null && (ft = 1, Pi(
      e,
      mn(t, e.current)
    ));
  }
  function lg() {
    var e = tn.current;
    return e === null ? !0 : (ke & 4194048) === ke ? yn === null : (ke & 62914560) === ke || (ke & 536870912) !== 0 ? e === yn : !1;
  }
  function ig() {
    var e = H.H;
    return H.H = Cl, e === null ? Cl : e;
  }
  function sg() {
    var e = H.A;
    return H.A = Qw, e;
  }
  function es() {
    ft = 4, qa || (ke & 4194048) !== ke && tn.current !== null || (Co = !0), (Pa & 134217727) === 0 && (Nr & 134217727) === 0 || nt === null || Va(
      nt,
      ke,
      rn,
      !1
    );
  }
  function nf(e, t, r) {
    var i = Ve;
    Ve |= 2;
    var c = ig(), f = sg();
    (nt !== e || ke !== t) && (Ki = null, Oo(e, t)), t = !1;
    var g = ft;
    e: do
      try {
        if (Ze !== 0 && Ne !== null) {
          var w = Ne, k = an;
          switch (Ze) {
            case 8:
              tf(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              tn.current === null && (t = !0);
              var q = Ze;
              if (Ze = 0, an = null, Mo(e, w, k, q), r && Co) {
                g = 0;
                break e;
              }
              break;
            default:
              q = Ze, Ze = 0, an = null, Mo(e, w, k, q);
          }
        }
        $w(), g = ft;
        break;
      } catch (X) {
        og(e, X);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ta = wr = null, Ve = i, H.H = c, H.A = f, Ne === null && (nt = null, ke = 0, xi()), g;
  }
  function $w() {
    for (; Ne !== null; ) cg(Ne);
  }
  function Kw(e, t) {
    var r = Ve;
    Ve |= 2;
    var i = ig(), c = sg();
    nt !== e || ke !== t ? (Ki = null, $i = At() + 500, Oo(e, t)) : Co = dr(
      e,
      t
    );
    e: do
      try {
        if (Ze !== 0 && Ne !== null) {
          t = Ne;
          var f = an;
          t: switch (Ze) {
            case 1:
              Ze = 0, an = null, Mo(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (bh(f)) {
                Ze = 0, an = null, ug(t);
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
              bh(f) ? (Ze = 0, an = null, ug(t)) : (Ze = 0, an = null, Mo(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (Ne.tag) {
                case 26:
                  g = Ne.memoizedState;
                case 5:
                case 27:
                  var w = Ne;
                  if (g ? Zg(g) : w.stateNode.complete) {
                    Ze = 0, an = null;
                    var k = w.sibling;
                    if (k !== null) Ne = k;
                    else {
                      var q = w.return;
                      q !== null ? (Ne = q, ts(q)) : Ne = null;
                    }
                    break t;
                  }
              }
              Ze = 0, an = null, Mo(e, t, f, 5);
              break;
            case 6:
              Ze = 0, an = null, Mo(e, t, f, 6);
              break;
            case 8:
              tf(), ft = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Jw();
        break;
      } catch (X) {
        og(e, X);
      }
    while (!0);
    return ta = wr = null, H.H = i, H.A = c, Ve = r, Ne !== null ? 0 : (nt = null, ke = 0, xi(), ft);
  }
  function Jw() {
    for (; Ne !== null && !mc(); )
      cg(Ne);
  }
  function cg(e) {
    var t = kp(e.alternate, e, fa);
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
        yu(t);
      default:
        zp(r, t), t = Ne = sh(t, fa), t = kp(r, t, fa);
    }
    e.memoizedProps = e.pendingProps, t === null ? ts(e) : Ne = t;
  }
  function Mo(e, t, r, i) {
    ta = wr = null, yu(t), go = null, pl = 0;
    var c = t.return;
    try {
      if (qw(
        e,
        c,
        t,
        r,
        ke
      )) {
        ft = 1, Pi(
          e,
          mn(r, e.current)
        ), Ne = null;
        return;
      }
    } catch (f) {
      if (c !== null) throw Ne = c, f;
      ft = 1, Pi(
        e,
        mn(r, e.current)
      ), Ne = null;
      return;
    }
    t.flags & 32768 ? (Ye || i === 1 ? e = !0 : Co || (ke & 536870912) !== 0 ? e = !1 : (qa = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = tn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), fg(t, e)) : ts(t);
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
      var r = Ww(
        t.alternate,
        t,
        fa
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
      var r = Vw(e.alternate, e);
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
  function dg(e, t, r, i, c, f, g, w, k) {
    e.cancelPendingCommit = null;
    do
      ns();
    while (Tt !== 0);
    if ((Ve & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (f = t.lanes | t.childLanes, f |= Wc, Rx(
        e,
        r,
        f,
        g,
        w,
        k
      ), e === nt && (Ne = nt = null, ke = 0), To = t, Wa = e, da = r, Ku = f, Ju = c, tg = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, aS(Fr, function() {
        return yg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = H.T, H.T = null, c = F.p, F.p = 2, g = Ve, Ve |= 4;
        try {
          Xw(e, t, r);
        } finally {
          Ve = g, F.p = c, H.T = i;
        }
      }
      Tt = 1, mg(), hg(), pg();
    }
  }
  function mg() {
    if (Tt === 1) {
      Tt = 0;
      var e = Wa, t = To, r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        r = H.T, H.T = null;
        var i = F.p;
        F.p = 2;
        var c = Ve;
        Ve |= 4;
        try {
          Fp(t, e);
          var f = pf, g = Jm(e.containerInfo), w = f.focusedElem, k = f.selectionRange;
          if (g !== w && w && w.ownerDocument && Km(
            w.ownerDocument.documentElement,
            w
          )) {
            if (k !== null && Uc(w)) {
              var q = k.start, X = k.end;
              if (X === void 0 && (X = q), "selectionStart" in w)
                w.selectionStart = q, w.selectionEnd = Math.min(
                  X,
                  w.value.length
                );
              else {
                var $ = w.ownerDocument || document, P = $ && $.defaultView || window;
                if (P.getSelection) {
                  var G = P.getSelection(), de = w.textContent.length, xe = Math.min(k.start, de), tt = k.end === void 0 ? xe : Math.min(k.end, de);
                  !G.extend && xe > tt && (g = tt, tt = xe, xe = g);
                  var B = $m(
                    w,
                    xe
                  ), j = $m(
                    w,
                    tt
                  );
                  if (B && j && (G.rangeCount !== 1 || G.anchorNode !== B.node || G.anchorOffset !== B.offset || G.focusNode !== j.node || G.focusOffset !== j.offset)) {
                    var L = $.createRange();
                    L.setStart(B.node, B.offset), G.removeAllRanges(), xe > tt ? (G.addRange(L), G.extend(j.node, j.offset)) : (L.setEnd(j.node, j.offset), G.addRange(L));
                  }
                }
              }
            }
            for ($ = [], G = w; G = G.parentNode; )
              G.nodeType === 1 && $.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < $.length; w++) {
              var Q = $[w];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          hs = !!hf, pf = hf = null;
        } finally {
          Ve = c, F.p = i, H.T = r;
        }
      }
      e.current = t, Tt = 2;
    }
  }
  function hg() {
    if (Tt === 2) {
      Tt = 0;
      var e = Wa, t = To, r = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        r = H.T, H.T = null;
        var i = F.p;
        F.p = 2;
        var c = Ve;
        Ve |= 4;
        try {
          Pp(e, t.alternate, t);
        } finally {
          Ve = c, F.p = i, H.T = r;
        }
      }
      Tt = 3;
    }
  }
  function pg() {
    if (Tt === 4 || Tt === 3) {
      Tt = 0, ai();
      var e = Wa, t = To, r = da, i = tg;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tt = 5 : (Tt = 0, To = Wa = null, gg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Ga = null), xc(r), t = t.stateNode, qt && typeof qt.onCommitFiberRoot == "function")
        try {
          qt.onCommitFiberRoot(
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
          for (var f = e.onRecoverableError, g = 0; g < i.length; g++) {
            var w = i[g];
            f(w.value, {
              componentStack: w.stack
            });
          }
        } finally {
          H.T = t, F.p = c;
        }
      }
      (da & 3) !== 0 && ns(), zn(e), c = e.pendingLanes, (r & 261930) !== 0 && (c & 42) !== 0 ? e === ef ? Rl++ : (Rl = 0, ef = e) : Rl = 0, kl(0);
    }
  }
  function gg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ml(t)));
  }
  function ns() {
    return mg(), hg(), pg(), yg();
  }
  function yg() {
    if (Tt !== 5) return !1;
    var e = Wa, t = Ku;
    Ku = 0;
    var r = xc(da), i = H.T, c = F.p;
    try {
      F.p = 32 > r ? 32 : r, H.T = null, r = Ju, Ju = null;
      var f = Wa, g = da;
      if (Tt = 0, To = Wa = null, da = 0, (Ve & 6) !== 0) throw Error(o(331));
      var w = Ve;
      if (Ve |= 4, Kp(f.current), Zp(
        f,
        f.current,
        g,
        r
      ), Ve = w, kl(0, !1), qt && typeof qt.onPostCommitFiberRoot == "function")
        try {
          qt.onPostCommitFiberRoot(fr, f);
        } catch {
        }
      return !0;
    } finally {
      F.p = c, H.T = i, gg(e, t);
    }
  }
  function vg(e, t, r) {
    t = mn(r, t), t = Ru(e.stateNode, t, 2), e = Ya(e, t, 2), e !== null && (Zn(e, 2), zn(e));
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
            e = mn(r, e), r = bp(2), i = Ya(t, r, 2), i !== null && (xp(
              r,
              i,
              t,
              e
            ), Zn(i, 2), zn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function af(e, t, r) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Zw();
      var c = /* @__PURE__ */ new Set();
      i.set(t, c);
    } else
      c = i.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), i.set(t, c));
    c.has(r) || (Zu = !0, c.add(r), e = eS.bind(null, e, t, r), t.then(e, e));
  }
  function eS(e, t, r) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, nt === e && (ke & r) === r && (ft === 4 || ft === 3 && (ke & 62914560) === ke && 300 > At() - Ii ? (Ve & 2) === 0 && Oo(e, 0) : Iu |= r, Eo === ke && (Eo = 0)), zn(e);
  }
  function bg(e, t) {
    t === 0 && (t = si()), e = vr(e, t), e !== null && (Zn(e, t), zn(e));
  }
  function tS(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), bg(e, r);
  }
  function nS(e, t) {
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
  function aS(e, t) {
    return $o(e, t);
  }
  var as = null, Do = null, rf = !1, rs = !1, of = !1, Xa = 0;
  function zn(e) {
    e !== Do && e.next === null && (Do === null ? as = Do = e : Do = Do.next = e), rs = !0, rf || (rf = !0, oS());
  }
  function kl(e, t) {
    if (!of && rs) {
      of = !0;
      do
        for (var r = !1, i = as; i !== null; ) {
          if (e !== 0) {
            var c = i.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var g = i.suspendedLanes, w = i.pingedLanes;
              f = (1 << 31 - Pt(42 | e) + 1) - 1, f &= c & ~(g & ~w), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (r = !0, Cg(i, f));
          } else
            f = ke, f = De(
              i,
              i === nt ? f : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (f & 3) === 0 || dr(i, f) || (r = !0, Cg(i, f));
          i = i.next;
        }
      while (r);
      of = !1;
    }
  }
  function rS() {
    xg();
  }
  function xg() {
    rs = rf = !1;
    var e = 0;
    Xa !== 0 && pS() && (e = Xa);
    for (var t = At(), r = null, i = as; i !== null; ) {
      var c = i.next, f = wg(i, t);
      f === 0 ? (i.next = null, r === null ? as = c : r.next = c, c === null && (Do = r)) : (r = i, (e !== 0 || (f & 3) !== 0) && (rs = !0)), i = c;
    }
    Tt !== 0 && Tt !== 5 || kl(e), Xa !== 0 && (Xa = 0);
  }
  function wg(e, t) {
    for (var r = e.suspendedLanes, i = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var g = 31 - Pt(f), w = 1 << g, k = c[g];
      k === -1 ? ((w & r) === 0 || (w & i) !== 0) && (c[g] = vc(w, t)) : k <= t && (e.expiredLanes |= w), f &= ~w;
    }
    if (t = nt, r = ke, r = De(
      e,
      e === t ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, r === 0 || e === t && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Ko(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || dr(e, r)) {
      if (t = r & -r, t === e.callbackPriority) return t;
      switch (i !== null && Ko(i), xc(r)) {
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
    return i !== null && i !== null && Ko(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Sg(e, t) {
    if (Tt !== 0 && Tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (ns() && e.callbackNode !== r)
      return null;
    var i = ke;
    return i = De(
      e,
      e === nt ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (ag(e, i, t), wg(e, At()), e.callbackNode != null && e.callbackNode === r ? Sg.bind(null, e) : null);
  }
  function Cg(e, t) {
    if (ns()) return null;
    ag(e, t, !0);
  }
  function oS() {
    yS(function() {
      (Ve & 6) !== 0 ? $o(
        ri,
        rS
      ) : xg();
    });
  }
  function lf() {
    if (Xa === 0) {
      var e = mo;
      e === 0 && (e = He, He <<= 1, (He & 261888) === 0 && (He = 256)), Xa = e;
    }
    return Xa;
  }
  function Eg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : di("" + e);
  }
  function Tg(e, t) {
    var r = t.ownerDocument.createElement("input");
    return r.name = t.name, r.value = t.value, e.id && r.setAttribute("form", e.id), t.parentNode.insertBefore(r, t), e = new FormData(e), r.parentNode.removeChild(r), e;
  }
  function lS(e, t, r, i, c) {
    if (t === "submit" && r && r.stateNode === c) {
      var f = Eg(
        (c[Vt] || null).action
      ), g = i.submitter;
      g && (t = (t = g[Vt] || null) ? Eg(t.formAction) : g.getAttribute("formAction"), t !== null && (f = t, g = null));
      var w = new gi(
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
                  var k = g ? Tg(c, g) : new FormData(c);
                  Ou(
                    r,
                    {
                      pending: !0,
                      data: k,
                      method: c.method,
                      action: f
                    },
                    null,
                    k
                  );
                }
              } else
                typeof f == "function" && (w.preventDefault(), k = g ? Tg(c, g) : new FormData(c), Ou(
                  r,
                  {
                    pending: !0,
                    data: k,
                    method: c.method,
                    action: f
                  },
                  f,
                  k
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var sf = 0; sf < Gc.length; sf++) {
    var cf = Gc[sf], iS = cf.toLowerCase(), sS = cf[0].toUpperCase() + cf.slice(1);
    Sn(
      iS,
      "on" + sS
    );
  }
  Sn(nh, "onAnimationEnd"), Sn(ah, "onAnimationIteration"), Sn(rh, "onAnimationStart"), Sn("dblclick", "onDoubleClick"), Sn("focusin", "onFocus"), Sn("focusout", "onBlur"), Sn(Ew, "onTransitionRun"), Sn(Tw, "onTransitionStart"), Sn(Ow, "onTransitionCancel"), Sn(oh, "onTransitionEnd"), Kr("onMouseEnter", ["mouseout", "mouseover"]), Kr("onMouseLeave", ["mouseout", "mouseover"]), Kr("onPointerEnter", ["pointerout", "pointerover"]), Kr("onPointerLeave", ["pointerout", "pointerover"]), hr(
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
  ), cS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl)
  );
  function Og(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var i = e[r], c = i.event;
      i = i.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var w = i[g], k = w.instance, q = w.currentTarget;
            if (w = w.listener, k !== f && c.isPropagationStopped())
              break e;
            f = w, c.currentTarget = q;
            try {
              f(c);
            } catch (X) {
              bi(X);
            }
            c.currentTarget = null, f = k;
          }
        else
          for (g = 0; g < i.length; g++) {
            if (w = i[g], k = w.instance, q = w.currentTarget, w = w.listener, k !== f && c.isPropagationStopped())
              break e;
            f = w, c.currentTarget = q;
            try {
              f(c);
            } catch (X) {
              bi(X);
            }
            c.currentTarget = null, f = k;
          }
      }
    }
  }
  function Ae(e, t) {
    var r = t[wc];
    r === void 0 && (r = t[wc] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    r.has(i) || (Mg(t, e, 2, !1), r.add(i));
  }
  function uf(e, t, r) {
    var i = 0;
    t && (i |= 4), Mg(
      r,
      e,
      i,
      t
    );
  }
  var os = "_reactListening" + Math.random().toString(36).slice(2);
  function ff(e) {
    if (!e[os]) {
      e[os] = !0, xm.forEach(function(r) {
        r !== "selectionchange" && (cS.has(r) || uf(r, !1, e), uf(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[os] || (t[os] = !0, uf("selectionchange", !1, t));
    }
  }
  function Mg(e, t, r, i) {
    switch (ny(t)) {
      case 2:
        var c = YS;
        break;
      case 8:
        c = BS;
        break;
      default:
        c = Of;
    }
    r = c.bind(
      null,
      t,
      r,
      e
    ), c = void 0, !Nc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), i ? c !== void 0 ? e.addEventListener(t, r, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, r, !0) : c !== void 0 ? e.addEventListener(t, r, {
      passive: c
    }) : e.addEventListener(t, r, !1);
  }
  function df(e, t, r, i, c) {
    var f = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var w = i.stateNode.containerInfo;
          if (w === c) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var k = g.tag;
              if ((k === 3 || k === 4) && g.stateNode.containerInfo === c)
                return;
              g = g.return;
            }
          for (; w !== null; ) {
            if (g = Zr(w), g === null) return;
            if (k = g.tag, k === 5 || k === 6 || k === 26 || k === 27) {
              i = f = g;
              continue e;
            }
            w = w.parentNode;
          }
        }
        i = i.return;
      }
    Rm(function() {
      var q = f, X = Dc(r), $ = [];
      e: {
        var P = lh.get(e);
        if (P !== void 0) {
          var G = gi, de = e;
          switch (e) {
            case "keypress":
              if (hi(r) === 0) break e;
            case "keydown":
            case "keyup":
              G = nw;
              break;
            case "focusin":
              de = "focus", G = jc;
              break;
            case "focusout":
              de = "blur", G = jc;
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
              G = zm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Wx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = ow;
              break;
            case nh:
            case ah:
            case rh:
              G = Fx;
              break;
            case oh:
              G = iw;
              break;
            case "scroll":
            case "scrollend":
              G = Px;
              break;
            case "wheel":
              G = cw;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Zx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Ym;
              break;
            case "toggle":
            case "beforetoggle":
              G = fw;
          }
          var xe = (t & 4) !== 0, tt = !xe && (e === "scroll" || e === "scrollend"), B = xe ? P !== null ? P + "Capture" : null : P;
          xe = [];
          for (var j = q, L; j !== null; ) {
            var Q = j;
            if (L = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || L === null || B === null || (Q = nl(j, B), Q != null && xe.push(
              zl(j, Q, L)
            )), tt) break;
            j = j.return;
          }
          0 < xe.length && (P = new G(
            P,
            de,
            null,
            r,
            X
          ), $.push({ event: P, listeners: xe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (P = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", P && r !== Mc && (de = r.relatedTarget || r.fromElement) && (Zr(de) || de[Qr]))
            break e;
          if ((G || P) && (P = X.window === X ? X : (P = X.ownerDocument) ? P.defaultView || P.parentWindow : window, G ? (de = r.relatedTarget || r.toElement, G = q, de = de ? Zr(de) : null, de !== null && (tt = u(de), xe = de.tag, de !== tt || xe !== 5 && xe !== 27 && xe !== 6) && (de = null)) : (G = null, de = q), G !== de)) {
            if (xe = zm, Q = "onMouseLeave", B = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (xe = Ym, Q = "onPointerLeave", B = "onPointerEnter", j = "pointer"), tt = G == null ? P : tl(G), L = de == null ? P : tl(de), P = new xe(
              Q,
              j + "leave",
              G,
              r,
              X
            ), P.target = tt, P.relatedTarget = L, Q = null, Zr(X) === q && (xe = new xe(
              B,
              j + "enter",
              de,
              r,
              X
            ), xe.target = L, xe.relatedTarget = tt, Q = xe), tt = Q, G && de)
              t: {
                for (xe = uS, B = G, j = de, L = 0, Q = B; Q; Q = xe(Q))
                  L++;
                Q = 0;
                for (var ge = j; ge; ge = xe(ge))
                  Q++;
                for (; 0 < L - Q; )
                  B = xe(B), L--;
                for (; 0 < Q - L; )
                  j = xe(j), Q--;
                for (; L--; ) {
                  if (B === j || j !== null && B === j.alternate) {
                    xe = B;
                    break t;
                  }
                  B = xe(B), j = xe(j);
                }
                xe = null;
              }
            else xe = null;
            G !== null && Dg(
              $,
              P,
              G,
              xe,
              !1
            ), de !== null && tt !== null && Dg(
              $,
              tt,
              de,
              xe,
              !0
            );
          }
        }
        e: {
          if (P = q ? tl(q) : window, G = P.nodeName && P.nodeName.toLowerCase(), G === "select" || G === "input" && P.type === "file")
            var Pe = Vm;
          else if (Gm(P))
            if (Xm)
              Pe = ww;
            else {
              Pe = bw;
              var me = vw;
            }
          else
            G = P.nodeName, !G || G.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? q && Oc(q.elementType) && (Pe = Vm) : Pe = xw;
          if (Pe && (Pe = Pe(e, q))) {
            Wm(
              $,
              Pe,
              r,
              X
            );
            break e;
          }
          me && me(e, P, q), e === "focusout" && q && P.type === "number" && q.memoizedProps.value != null && Tc(P, "number", P.value);
        }
        switch (me = q ? tl(q) : window, e) {
          case "focusin":
            (Gm(me) || me.contentEditable === "true") && (ro = me, Lc = q, ul = null);
            break;
          case "focusout":
            ul = Lc = ro = null;
            break;
          case "mousedown":
            qc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qc = !1, eh($, r, X);
            break;
          case "selectionchange":
            if (Cw) break;
          case "keydown":
          case "keyup":
            eh($, r, X);
        }
        var Me;
        if (Hc)
          e: {
            switch (e) {
              case "compositionstart":
                var je = "onCompositionStart";
                break e;
              case "compositionend":
                je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                je = "onCompositionUpdate";
                break e;
            }
            je = void 0;
          }
        else
          ao ? qm(e, r) && (je = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (je = "onCompositionStart");
        je && (Bm && r.locale !== "ko" && (ao || je !== "onCompositionStart" ? je === "onCompositionEnd" && ao && (Me = km()) : (Na = X, Ac = "value" in Na ? Na.value : Na.textContent, ao = !0)), me = ls(q, je), 0 < me.length && (je = new Hm(
          je,
          e,
          null,
          r,
          X
        ), $.push({ event: je, listeners: me }), Me ? je.data = Me : (Me = Pm(r), Me !== null && (je.data = Me)))), (Me = mw ? hw(e, r) : pw(e, r)) && (je = ls(q, "onBeforeInput"), 0 < je.length && (me = new Hm(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          X
        ), $.push({
          event: me,
          listeners: je
        }), me.data = Me)), lS(
          $,
          e,
          q,
          r,
          X
        );
      }
      Og($, t);
    });
  }
  function zl(e, t, r) {
    return {
      instance: e,
      listener: t,
      currentTarget: r
    };
  }
  function ls(e, t) {
    for (var r = t + "Capture", i = []; e !== null; ) {
      var c = e, f = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = nl(e, r), c != null && i.unshift(
        zl(e, c, f)
      ), c = nl(e, t), c != null && i.push(
        zl(e, c, f)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function uS(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Dg(e, t, r, i, c) {
    for (var f = t._reactName, g = []; r !== null && r !== i; ) {
      var w = r, k = w.alternate, q = w.stateNode;
      if (w = w.tag, k !== null && k === i) break;
      w !== 5 && w !== 26 && w !== 27 || q === null || (k = q, c ? (q = nl(r, f), q != null && g.unshift(
        zl(r, q, k)
      )) : c || (q = nl(r, f), q != null && g.push(
        zl(r, q, k)
      ))), r = r.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var fS = /\r\n?/g, dS = /\u0000|\uFFFD/g;
  function _g(e) {
    return (typeof e == "string" ? e : "" + e).replace(fS, `
`).replace(dS, "");
  }
  function Ng(e, t) {
    return t = _g(t), _g(e) === t;
  }
  function et(e, t, r, i, c, f) {
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
        Nm(e, i, f);
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
        In(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        In(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        In(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        In(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        In(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        In(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        In(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        In(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        In(
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
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Lx.get(r) || r, ci(e, r, i));
    }
  }
  function mf(e, t, r, i, c, f) {
    switch (r) {
      case "style":
        Nm(e, i, f);
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
            if (r[0] === "o" && r[1] === "n" && (c = r.endsWith("Capture"), t = r.slice(2, c ? r.length - 7 : void 0), f = e[Vt] || null, f = f != null ? f[r] : null, typeof f == "function" && e.removeEventListener(t, f, c), typeof i == "function")) {
              typeof f != "function" && f !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(t, i, c);
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
        var i = !1, c = !1, f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var g = r[f];
            if (g != null)
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
                  et(e, t, f, g, r, null);
              }
          }
        c && et(e, t, "srcSet", r.srcSet, r, null), i && et(e, t, "src", r.src, r, null);
        return;
      case "input":
        Ae("invalid", e);
        var w = f = g = c = null, k = null, q = null;
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
                  f = X;
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
                  et(e, t, i, X, r, null);
              }
          }
        Om(
          e,
          f,
          w,
          k,
          q,
          g,
          c,
          !1
        );
        return;
      case "select":
        Ae("invalid", e), i = g = f = null;
        for (c in r)
          if (r.hasOwnProperty(c) && (w = r[c], w != null))
            switch (c) {
              case "value":
                f = w;
                break;
              case "defaultValue":
                g = w;
                break;
              case "multiple":
                i = w;
              default:
                et(e, t, c, w, r, null);
            }
        t = f, r = g, e.multiple = !!i, t != null ? Jr(e, !!i, t, !1) : r != null && Jr(e, !!i, r, !0);
        return;
      case "textarea":
        Ae("invalid", e), f = c = i = null;
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
                f = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(o(91));
                break;
              default:
                et(e, t, g, w, r, null);
            }
        Dm(e, i, c, f);
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
        if (Oc(t)) {
          for (X in r)
            r.hasOwnProperty(X) && (i = r[X], i !== void 0 && mf(
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
      r.hasOwnProperty(w) && (i = r[w], i != null && et(e, t, w, i, r, null));
  }
  function mS(e, t, r, i) {
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
        var c = null, f = null, g = null, w = null, k = null, q = null, X = null;
        for (G in r) {
          var $ = r[G];
          if (r.hasOwnProperty(G) && $ != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                k = $;
              default:
                i.hasOwnProperty(G) || et(e, t, G, null, i, $);
            }
        }
        for (var P in i) {
          var G = i[P];
          if ($ = r[P], i.hasOwnProperty(P) && (G != null || $ != null))
            switch (P) {
              case "type":
                f = G;
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
                G !== $ && et(
                  e,
                  t,
                  P,
                  G,
                  i,
                  $
                );
            }
        }
        Ec(
          e,
          g,
          w,
          k,
          q,
          X,
          f,
          c
        );
        return;
      case "select":
        G = g = w = P = null;
        for (f in r)
          if (k = r[f], r.hasOwnProperty(f) && k != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                G = k;
              default:
                i.hasOwnProperty(f) || et(
                  e,
                  t,
                  f,
                  null,
                  i,
                  k
                );
            }
        for (c in i)
          if (f = i[c], k = r[c], i.hasOwnProperty(c) && (f != null || k != null))
            switch (c) {
              case "value":
                P = f;
                break;
              case "defaultValue":
                w = f;
                break;
              case "multiple":
                g = f;
              default:
                f !== k && et(
                  e,
                  t,
                  c,
                  f,
                  i,
                  k
                );
            }
        t = w, r = g, i = G, P != null ? Jr(e, !!r, P, !1) : !!i != !!r && (t != null ? Jr(e, !!r, t, !0) : Jr(e, !!r, r ? [] : "", !1));
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
                et(e, t, w, null, i, c);
            }
        for (g in i)
          if (c = i[g], f = r[g], i.hasOwnProperty(g) && (c != null || f != null))
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
                c !== f && et(e, t, g, c, i, f);
            }
        Mm(e, P, G);
        return;
      case "option":
        for (var de in r)
          P = r[de], r.hasOwnProperty(de) && P != null && !i.hasOwnProperty(de) && (de === "selected" ? e.selected = !1 : et(
            e,
            t,
            de,
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
        if (Oc(t)) {
          for (var tt in r)
            P = r[tt], r.hasOwnProperty(tt) && P !== void 0 && !i.hasOwnProperty(tt) && mf(
              e,
              t,
              tt,
              void 0,
              i,
              P
            );
          for (X in i)
            P = i[X], G = r[X], !i.hasOwnProperty(X) || P === G || P === void 0 && G === void 0 || mf(
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
    for ($ in i)
      P = i[$], G = r[$], !i.hasOwnProperty($) || P === G || P == null && G == null || et(e, t, $, P, i, G);
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
  function hS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, r = performance.getEntriesByType("resource"), i = 0; i < r.length; i++) {
        var c = r[i], f = c.transferSize, g = c.initiatorType, w = c.duration;
        if (f && w && Ag(g)) {
          for (g = 0, w = c.responseEnd, i += 1; i < r.length; i++) {
            var k = r[i], q = k.startTime;
            if (q > w) break;
            var X = k.transferSize, $ = k.initiatorType;
            X && Ag($) && (k = k.responseEnd, g += X * (k < w ? 1 : (w - q) / (k - q)));
          }
          if (--i, t += 8 * (f + g) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var hf = null, pf = null;
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
  function gf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var yf = null;
  function pS() {
    var e = window.event;
    return e && e.type === "popstate" ? e === yf ? !1 : (yf = e, !0) : (yf = null, !1);
  }
  var jg = typeof setTimeout == "function" ? setTimeout : void 0, gS = typeof clearTimeout == "function" ? clearTimeout : void 0, zg = typeof Promise == "function" ? Promise : void 0, yS = typeof queueMicrotask == "function" ? queueMicrotask : typeof zg < "u" ? function(e) {
    return zg.resolve(null).then(e).catch(vS);
  } : jg;
  function vS(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fa(e) {
    return e === "head";
  }
  function Hg(e, t) {
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
          for (var f = r.firstChild; f; ) {
            var g = f.nextSibling, w = f.nodeName;
            f[el] || w === "SCRIPT" || w === "STYLE" || w === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = g;
          }
        } else
          r === "body" && Hl(e.ownerDocument.body);
      r = c;
    } while (r);
    Ro(t);
  }
  function Yg(e, t) {
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
  function vf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (t = t.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vf(r), Sc(r);
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
  function bS(e, t, r, i) {
    for (; e.nodeType === 1; ) {
      var c = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[el])
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
      if (e = vn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function xS(e, t, r) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bg(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function bf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function xf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function wS(e, t) {
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
  function Ug(e) {
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
    Sc(e);
  }
  var bn = /* @__PURE__ */ new Map(), Pg = /* @__PURE__ */ new Set();
  function ss(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ma = F.d;
  F.d = {
    f: SS,
    r: CS,
    D: ES,
    C: TS,
    L: OS,
    m: MS,
    X: _S,
    S: DS,
    M: NS
  };
  function SS() {
    var e = ma.f(), t = Ji();
    return e || t;
  }
  function CS(e) {
    var t = Ir(e);
    t !== null && t.tag === 5 && t.type === "form" ? op(t) : ma.r(e);
  }
  var _o = typeof document > "u" ? null : document;
  function Gg(e, t, r) {
    var i = _o;
    if (i && typeof t == "string" && t) {
      var c = fn(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof r == "string" && (c += '[crossorigin="' + r + '"]'), Pg.has(c) || (Pg.add(c), e = { rel: e, crossOrigin: r, href: t }, i.querySelector(c) === null && (t = i.createElement("link"), Ht(t, "link", e), Dt(t), i.head.appendChild(t)));
    }
  }
  function ES(e) {
    ma.D(e), Gg("dns-prefetch", e, null);
  }
  function TS(e, t) {
    ma.C(e, t), Gg("preconnect", e, t);
  }
  function OS(e, t, r) {
    ma.L(e, t, r);
    var i = _o;
    if (i && e && t) {
      var c = 'link[rel="preload"][as="' + fn(t) + '"]';
      t === "image" && r && r.imageSrcSet ? (c += '[imagesrcset="' + fn(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (c += '[imagesizes="' + fn(
        r.imageSizes
      ) + '"]')) : c += '[href="' + fn(e) + '"]';
      var f = c;
      switch (t) {
        case "style":
          f = No(e);
          break;
        case "script":
          f = Ao(e);
      }
      bn.has(f) || (e = v(
        {
          rel: "preload",
          href: t === "image" && r && r.imageSrcSet ? void 0 : e,
          as: t
        },
        r
      ), bn.set(f, e), i.querySelector(c) !== null || t === "style" && i.querySelector(Yl(f)) || t === "script" && i.querySelector(Bl(f)) || (t = i.createElement("link"), Ht(t, "link", e), Dt(t), i.head.appendChild(t)));
    }
  }
  function MS(e, t) {
    ma.m(e, t);
    var r = _o;
    if (r && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + fn(i) + '"][href="' + fn(e) + '"]', f = c;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ao(e);
      }
      if (!bn.has(f) && (e = v({ rel: "modulepreload", href: e }, t), bn.set(f, e), r.querySelector(c) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Bl(f)))
              return;
        }
        i = r.createElement("link"), Ht(i, "link", e), Dt(i), r.head.appendChild(i);
      }
    }
  }
  function DS(e, t, r) {
    ma.S(e, t, r);
    var i = _o;
    if (i && e) {
      var c = $r(i).hoistableStyles, f = No(e);
      t = t || "default";
      var g = c.get(f);
      if (!g) {
        var w = { loading: 0, preload: null };
        if (g = i.querySelector(
          Yl(f)
        ))
          w.loading = 5;
        else {
          e = v(
            { rel: "stylesheet", href: e, "data-precedence": t },
            r
          ), (r = bn.get(f)) && Sf(e, r);
          var k = g = i.createElement("link");
          Dt(k), Ht(k, "link", e), k._p = new Promise(function(q, X) {
            k.onload = q, k.onerror = X;
          }), k.addEventListener("load", function() {
            w.loading |= 1;
          }), k.addEventListener("error", function() {
            w.loading |= 2;
          }), w.loading |= 4, cs(g, t, i);
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: w
        }, c.set(f, g);
      }
    }
  }
  function _S(e, t) {
    ma.X(e, t);
    var r = _o;
    if (r && e) {
      var i = $r(r).hoistableScripts, c = Ao(e), f = i.get(c);
      f || (f = r.querySelector(Bl(c)), f || (e = v({ src: e, async: !0 }, t), (t = bn.get(c)) && Cf(e, t), f = r.createElement("script"), Dt(f), Ht(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(c, f));
    }
  }
  function NS(e, t) {
    ma.M(e, t);
    var r = _o;
    if (r && e) {
      var i = $r(r).hoistableScripts, c = Ao(e), f = i.get(c);
      f || (f = r.querySelector(Bl(c)), f || (e = v({ src: e, async: !0, type: "module" }, t), (t = bn.get(c)) && Cf(e, t), f = r.createElement("script"), Dt(f), Ht(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(c, f));
    }
  }
  function Wg(e, t, r, i) {
    var c = (c = se.current) ? ss(c) : null;
    if (!c) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (t = No(r.href), r = $r(
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
          var f = $r(
            c
          ).hoistableStyles, g = f.get(e);
          if (g || (c = c.ownerDocument || c, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, g), (f = c.querySelector(
            Yl(e)
          )) && !f._p && (g.instance = f, g.state.loading = 5), bn.has(e) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, bn.set(e, r), f || AS(
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
        return t = r.async, r = r.src, typeof r == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ao(r), r = $r(
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
    return 'href="' + fn(e) + '"';
  }
  function Yl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Vg(e) {
    return v({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function AS(e, t, r, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), Ht(t, "link", r), Dt(t), e.head.appendChild(t));
  }
  function Ao(e) {
    return '[src="' + fn(e) + '"]';
  }
  function Bl(e) {
    return "script[async]" + e;
  }
  function Xg(e, t, r) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + fn(r.href) + '"]'
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
          ), Dt(i), Ht(i, "style", c), cs(i, r.precedence, e), t.instance = i;
        case "stylesheet":
          c = No(r.href);
          var f = e.querySelector(
            Yl(c)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, Dt(f), f;
          i = Vg(r), (c = bn.get(c)) && Sf(i, c), f = (e.ownerDocument || e).createElement("link"), Dt(f);
          var g = f;
          return g._p = new Promise(function(w, k) {
            g.onload = w, g.onerror = k;
          }), Ht(f, "link", i), t.state.loading |= 4, cs(f, r.precedence, e), t.instance = f;
        case "script":
          return f = Ao(r.src), (c = e.querySelector(
            Bl(f)
          )) ? (t.instance = c, Dt(c), c) : (i = r, (c = bn.get(f)) && (i = v({}, r), Cf(i, c)), e = e.ownerDocument || e, c = e.createElement("script"), Dt(c), Ht(c, "link", i), e.head.appendChild(c), t.instance = c);
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
    ), c = i.length ? i[i.length - 1] : null, f = c, g = 0; g < i.length; g++) {
      var w = i[g];
      if (w.dataset.precedence === t) f = w;
      else if (f !== c) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = r.nodeType === 9 ? r.head : r, t.insertBefore(e, t.firstChild));
  }
  function Sf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Cf(e, t) {
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
      var f = r[c];
      if (!(f[el] || f[Rt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = f.getAttribute(t) || "";
        g = e + g;
        var w = i.get(g);
        w ? w.push(f) : i.set(g, [f]);
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
  function RS(e, t, r) {
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
  function kS(e, t, r, i) {
    if (r.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var c = No(i.href), f = t.querySelector(
          Yl(c)
        );
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = fs.bind(e), t.then(e, e)), r.state.loading |= 4, r.instance = f, Dt(f);
          return;
        }
        f = t.ownerDocument || t, i = Vg(i), (c = bn.get(c)) && Sf(i, c), f = f.createElement("link"), Dt(f);
        var g = f;
        g._p = new Promise(function(w, k) {
          g.onload = w, g.onerror = k;
        }), Ht(f, "link", i), r.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, t), (t = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = fs.bind(e), t.addEventListener("load", r), t.addEventListener("error", r));
    }
  }
  var Ef = 0;
  function jS(e, t) {
    return e.stylesheets && e.count === 0 && ms(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var i = setTimeout(function() {
        if (e.stylesheets && ms(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ef === 0 && (Ef = 62500 * hS());
      var c = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ms(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > Ef ? 50 : 800) + t
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ds = /* @__PURE__ */ new Map(), t.forEach(zS, e), ds = null, fs.call(e));
  }
  function zS(e, t) {
    if (!(t.state.loading & 4)) {
      var r = ds.get(e);
      if (r) var i = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), ds.set(e, r);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < c.length; f++) {
          var g = c[f];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (r.set(g.dataset.precedence, g), i = g);
        }
        i && r.set(null, i);
      }
      c = t.instance, g = c.getAttribute("data-precedence"), f = r.get(g) || i, f === i && r.set(null, c), r.set(g, c), this.count++, i = fs.bind(this), c.addEventListener("load", i), c.addEventListener("error", i), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ul = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function HS(e, t, r, i, c, f, g, w, k) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mr(0), this.hiddenUpdates = mr(null), this.identifierPrefix = i, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = k, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ig(e, t, r, i, c, f, g, w, k, q, X, $) {
    return e = new HS(
      e,
      t,
      r,
      g,
      k,
      q,
      X,
      $,
      w
    ), t = 1, f === !0 && (t |= 24), f = en(3, null, null, t), e.current = f, f.stateNode = e, t = nu(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: i,
      isDehydrated: r,
      cache: t
    }, lu(f), e;
  }
  function $g(e) {
    return e ? (e = io, e) : io;
  }
  function Kg(e, t, r, i, c, f) {
    c = $g(c), i.context === null ? i.context = c : i.pendingContext = c, i = Ha(t), i.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (i.callback = f), r = Ya(e, i, t), r !== null && ($t(r, e, t), yl(r, e, t));
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
      var t = on();
      t = bc(t);
      var r = vr(e, t);
      r !== null && $t(r, e, t), Tf(e, t);
    }
  }
  var hs = !0;
  function YS(e, t, r, i) {
    var c = H.T;
    H.T = null;
    var f = F.p;
    try {
      F.p = 2, Of(e, t, r, i);
    } finally {
      F.p = f, H.T = c;
    }
  }
  function BS(e, t, r, i) {
    var c = H.T;
    H.T = null;
    var f = F.p;
    try {
      F.p = 8, Of(e, t, r, i);
    } finally {
      F.p = f, H.T = c;
    }
  }
  function Of(e, t, r, i) {
    if (hs) {
      var c = Mf(i);
      if (c === null)
        df(
          e,
          t,
          i,
          ps,
          r
        ), ay(e, i);
      else if (LS(
        c,
        e,
        t,
        r,
        i
      ))
        i.stopPropagation();
      else if (ay(e, i), t & 4 && -1 < US.indexOf(e)) {
        for (; c !== null; ) {
          var f = Ir(c);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var g = mt(f.pendingLanes);
                  if (g !== 0) {
                    var w = f;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; g; ) {
                      var k = 1 << 31 - Pt(g);
                      w.entanglements[1] |= k, g &= ~k;
                    }
                    zn(f), (Ve & 6) === 0 && ($i = At() + 500, kl(0));
                  }
                }
                break;
              case 31:
              case 13:
                w = vr(f, 2), w !== null && $t(w, f, 2), Ji(), Tf(f, 2);
            }
          if (f = Mf(i), f === null && df(
            e,
            t,
            i,
            ps,
            r
          ), f === c) break;
          c = f;
        }
        c !== null && i.stopPropagation();
      } else
        df(
          e,
          t,
          i,
          null,
          r
        );
    }
  }
  function Mf(e) {
    return e = Dc(e), Df(e);
  }
  var ps = null;
  function Df(e) {
    if (ps = null, e = Zr(e), e !== null) {
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
        switch (Jo()) {
          case ri:
            return 2;
          case oi:
            return 8;
          case Fr:
          case hc:
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
  var _f = !1, Qa = null, Za = null, Ia = null, Ll = /* @__PURE__ */ new Map(), ql = /* @__PURE__ */ new Map(), $a = [], US = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        Ll.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ql.delete(t.pointerId);
    }
  }
  function Pl(e, t, r, i, c, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: r,
      eventSystemFlags: i,
      nativeEvent: f,
      targetContainers: [c]
    }, t !== null && (t = Ir(t), t !== null && ey(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function LS(e, t, r, i, c) {
    switch (t) {
      case "focusin":
        return Qa = Pl(
          Qa,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "dragenter":
        return Za = Pl(
          Za,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "mouseover":
        return Ia = Pl(
          Ia,
          e,
          t,
          r,
          i,
          c
        ), !0;
      case "pointerover":
        var f = c.pointerId;
        return Ll.set(
          f,
          Pl(
            Ll.get(f) || null,
            e,
            t,
            r,
            i,
            c
          )
        ), !0;
      case "gotpointercapture":
        return f = c.pointerId, ql.set(
          f,
          Pl(
            ql.get(f) || null,
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
      var r = u(t);
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
      var r = Mf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var i = new r.constructor(
          r.type,
          r
        );
        Mc = i, r.target.dispatchEvent(i), Mc = null;
      } else
        return t = Ir(r), t !== null && ey(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function oy(e, t, r) {
    gs(e) && r.delete(t);
  }
  function qS() {
    _f = !1, Qa !== null && gs(Qa) && (Qa = null), Za !== null && gs(Za) && (Za = null), Ia !== null && gs(Ia) && (Ia = null), Ll.forEach(oy), ql.forEach(oy);
  }
  function ys(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _f || (_f = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      qS
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
            if (Df(i || r) === null)
              continue;
            break;
          }
          var f = Ir(r);
          f !== null && (e.splice(t, 3), t -= 3, Ou(
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
  function Ro(e) {
    function t(k) {
      return ys(k, e);
    }
    Qa !== null && ys(Qa, e), Za !== null && ys(Za, e), Ia !== null && ys(Ia, e), Ll.forEach(t), ql.forEach(t);
    for (var r = 0; r < $a.length; r++) {
      var i = $a[r];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < $a.length && (r = $a[0], r.blockedOn === null); )
      ry(r), r.blockedOn === null && $a.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (i = 0; i < r.length; i += 3) {
        var c = r[i], f = r[i + 1], g = c[Vt] || null;
        if (typeof f == "function")
          g || ly(r);
        else if (g) {
          var w = null;
          if (f && f.hasAttribute("formAction")) {
            if (c = f, g = f[Vt] || null)
              w = g.formAction;
            else if (Df(c) !== null) continue;
          } else w = g.action;
          typeof w == "function" ? r[i + 1] = w : (r.splice(i, 3), i -= 3), ly(r);
        }
      }
  }
  function iy() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
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
  function Nf(e) {
    this._internalRoot = e;
  }
  bs.prototype.render = Nf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var r = t.current, i = on();
    Kg(r, i, e, t, null, null);
  }, bs.prototype.unmount = Nf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Kg(e.current, 2, null, e, null, null), Ji(), t[Qr] = null;
    }
  };
  function bs(e) {
    this._internalRoot = e;
  }
  bs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ym();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < $a.length && t !== 0 && t < $a[r].priority; r++) ;
      $a.splice(r, 0, e), r === 0 && ry(e);
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
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = p(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var PS = {
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
          PS
        ), qt = xs;
      } catch {
      }
  }
  return Wl.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var r = !1, i = "", c = pp, f = gp, g = yp;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError)), t = Ig(
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
      g,
      iy
    ), e[Qr] = t.current, ff(e), new Nf(t);
  }, Wl.hydrateRoot = function(e, t, r) {
    if (!s(e)) throw Error(o(299));
    var i = !1, c = "", f = pp, g = gp, w = yp, k = null;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onUncaughtError !== void 0 && (f = r.onUncaughtError), r.onCaughtError !== void 0 && (g = r.onCaughtError), r.onRecoverableError !== void 0 && (w = r.onRecoverableError), r.formState !== void 0 && (k = r.formState)), t = Ig(
      e,
      1,
      !0,
      t,
      r ?? null,
      i,
      c,
      k,
      f,
      g,
      w,
      iy
    ), t.context = $g(null), r = t.current, i = on(), i = bc(i), c = Ha(i), c.callback = null, Ya(r, c, i), r = i, t.current.lanes = r, Zn(t, r), zn(t), e[Qr] = t.current, ff(e), new bs(t);
  }, Wl.version = "19.2.3", Wl;
}
var wy;
function JS() {
  if (wy) return kf.exports;
  wy = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), kf.exports = KS(), kf.exports;
}
var e1 = JS(), x = wd();
const ce = /* @__PURE__ */ VS(x), Lr = /* @__PURE__ */ WS({
  __proto__: null,
  default: ce
}, [x]);
var t1 = Object.defineProperty, Sd = (n, a) => t1(n, "name", { value: a, configurable: !0 });
function td(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
Sd(td, "setRef");
function Dv(...n) {
  return (a) => {
    let l = !1;
    const o = n.map((s) => {
      const u = td(s, a);
      return !l && typeof u == "function" && (l = !0), u;
    });
    if (l)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const u = o[s];
          typeof u == "function" ? u() : td(n[s], null);
        }
      };
  };
}
Sd(Dv, "composeRefs");
function at(...n) {
  return x.useCallback(Dv(...n), n);
}
Sd(at, "useComposedRefs");
var n1 = Object.defineProperty, cn = (n, a) => n1(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Sa(n) {
  const a = x.forwardRef((l, o) => {
    let { children: s, ...u } = l, d = null, m = !1;
    const h = [];
    s = jv(s), x.Children.forEach(s, (S) => {
      if (Rv(S)) {
        m = !0;
        const T = S;
        let E = "child" in T.props ? T.props.child : T.props.children;
        for (; Cd(E) && typeof Hs == "function"; )
          E = Hs(E._payload);
        d = o1(T, E), h.push(d?.props?.children);
      } else
        h.push(S);
    }), d ? d = x.cloneElement(d, void 0, h) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && x.Children.count(s) === 1 && x.isValidElement(s) && (d = s)
    );
    const p = d ? Av(d) : void 0, b = at(o, p);
    if (!d) {
      if (s || s === 0)
        throw new Error(
          m ? s1(n) : i1(n)
        );
      return s;
    }
    const v = Nv(u, d.props ?? {});
    return d.type !== x.Fragment && (v.ref = o ? b : p), x.cloneElement(d, v);
  });
  return a.displayName = `${n}.Slot`, a;
}
cn(Sa, "createSlot");
var a1 = /* @__PURE__ */ Sa("Slot"), _v = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function r1(n) {
  const a = /* @__PURE__ */ cn((l) => "child" in l ? l.children(l.child) : l.children, "Slottable");
  return a.displayName = `${n}.Slottable`, a.__radixId = _v, a;
}
cn(r1, "createSlottable");
var o1 = /* @__PURE__ */ cn((n, a) => "child" in n.props ? x.isValidElement(a) ? x.cloneElement(a, void 0, n.props.children(a.props.children)) : null : x.isValidElement(a) ? a : null, "getSlottableElementFromSlottable");
function Nv(n, a) {
  const l = { ...a };
  for (const o in a) {
    const s = n[o], u = a[o];
    /^on[A-Z]/.test(o) ? s && u ? l[o] = (...m) => {
      const h = u(...m);
      return s(...m), h;
    } : s && (l[o] = s) : o === "style" ? l[o] = { ...s, ...u } : o === "className" ? l[o] = [s, u].filter(Boolean).join(" ") : o === "aria-describedby" && (l[o] = zv(u, s));
  }
  return { ...n, ...l };
}
cn(Nv, "mergeProps");
function Av(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning;
  return l ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
cn(Av, "getElementRef");
function Rv(n) {
  return x.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === _v;
}
cn(Rv, "isSlottable");
var l1 = /* @__PURE__ */ Symbol.for("react.lazy");
function Cd(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === l1 && "_payload" in n && kv(n._payload);
}
cn(Cd, "isLazyComponent");
function kv(n) {
  return typeof n == "object" && n !== null && "then" in n;
}
cn(kv, "isPromiseLike");
function jv(n) {
  let a = n;
  for (; Cd(a) && typeof Hs == "function"; )
    a = Hs(a._payload);
  return a;
}
cn(jv, "useUnwrappedLazy");
function zv(...n) {
  const a = /* @__PURE__ */ new Set();
  for (const l of n)
    if (typeof l == "string")
      for (const o of String(l).trim().split(/\s+/))
        o && a.add(o);
  return a.size > 0 ? Array.from(a).join(" ") : void 0;
}
cn(zv, "concatAriaDescribedby");
var i1 = /* @__PURE__ */ cn((n) => `${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), s1 = /* @__PURE__ */ cn((n) => `${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Hs = Lr[" use ".trim().toString()];
function Hv(n) {
  var a, l, o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (a = 0; a < s; a++) n[a] && (l = Hv(n[a])) && (o && (o += " "), o += l);
  } else for (l in n) n[l] && (o && (o += " "), o += l);
  return o;
}
function Yv() {
  for (var n, a, l = 0, o = "", s = arguments.length; l < s; l++) (n = arguments[l]) && (a = Hv(n)) && (o && (o += " "), o += a);
  return o;
}
const Sy = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, Cy = Yv, c1 = (n, a) => (l) => {
  var o;
  if (a?.variants == null) return Cy(n, l?.class, l?.className);
  const { variants: s, defaultVariants: u } = a, d = Object.keys(s).map((p) => {
    const b = l?.[p], v = u?.[p];
    if (b === null) return null;
    const S = Sy(b) || Sy(v);
    return s[p][S];
  }), m = l && Object.entries(l).reduce((p, b) => {
    let [v, S] = b;
    return S === void 0 || (p[v] = S), p;
  }, {}), h = a == null || (o = a.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, b) => {
    let { class: v, className: S, ...T } = b;
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
      S
    ] : p;
  }, []);
  return Cy(n, d, h, l?.class, l?.className);
}, u1 = (n, a) => {
  const l = new Array(n.length + a.length);
  for (let o = 0; o < n.length; o++)
    l[o] = n[o];
  for (let o = 0; o < a.length; o++)
    l[n.length + o] = a[o];
  return l;
}, f1 = (n, a) => ({
  classGroupId: n,
  validator: a
}), Bv = (n = /* @__PURE__ */ new Map(), a = null, l) => ({
  nextPart: n,
  validators: a,
  classGroupId: l
}), Ys = "-", Ey = [], d1 = "arbitrary..", m1 = (n) => {
  const a = p1(n), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: o
  } = n;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return h1(d);
      const m = d.split(Ys), h = m[0] === "" && m.length > 1 ? 1 : 0;
      return Uv(m, h, a);
    },
    getConflictingClassGroupIds: (d, m) => {
      if (m) {
        const h = o[d], p = l[d];
        return h ? p ? u1(p, h) : h : p || Ey;
      }
      return l[d] || Ey;
    }
  };
}, Uv = (n, a, l) => {
  if (n.length - a === 0)
    return l.classGroupId;
  const s = n[a], u = l.nextPart.get(s);
  if (u) {
    const p = Uv(n, a + 1, u);
    if (p) return p;
  }
  const d = l.validators;
  if (d === null)
    return;
  const m = a === 0 ? n.join(Ys) : n.slice(a).join(Ys), h = d.length;
  for (let p = 0; p < h; p++) {
    const b = d[p];
    if (b.validator(m))
      return b.classGroupId;
  }
}, h1 = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const a = n.slice(1, -1), l = a.indexOf(":"), o = a.slice(0, l);
  return o ? d1 + o : void 0;
})(), p1 = (n) => {
  const {
    theme: a,
    classGroups: l
  } = n;
  return g1(l, a);
}, g1 = (n, a) => {
  const l = Bv();
  for (const o in n) {
    const s = n[o];
    Ed(s, l, o, a);
  }
  return l;
}, Ed = (n, a, l, o) => {
  const s = n.length;
  for (let u = 0; u < s; u++) {
    const d = n[u];
    y1(d, a, l, o);
  }
}, y1 = (n, a, l, o) => {
  if (typeof n == "string") {
    v1(n, a, l);
    return;
  }
  if (typeof n == "function") {
    b1(n, a, l, o);
    return;
  }
  x1(n, a, l, o);
}, v1 = (n, a, l) => {
  const o = n === "" ? a : Lv(a, n);
  o.classGroupId = l;
}, b1 = (n, a, l, o) => {
  if (w1(n)) {
    Ed(n(o), a, l, o);
    return;
  }
  a.validators === null && (a.validators = []), a.validators.push(f1(l, n));
}, x1 = (n, a, l, o) => {
  const s = Object.entries(n), u = s.length;
  for (let d = 0; d < u; d++) {
    const [m, h] = s[d];
    Ed(h, Lv(a, m), l, o);
  }
}, Lv = (n, a) => {
  let l = n;
  const o = a.split(Ys), s = o.length;
  for (let u = 0; u < s; u++) {
    const d = o[u];
    let m = l.nextPart.get(d);
    m || (m = Bv(), l.nextPart.set(d, m)), l = m;
  }
  return l;
}, w1 = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, S1 = (n) => {
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
}, nd = "!", Ty = ":", C1 = [], Oy = (n, a, l, o, s) => ({
  modifiers: n,
  hasImportantModifier: a,
  baseClassName: l,
  maybePostfixModifierPosition: o,
  isExternal: s
}), E1 = (n) => {
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
        if (C === Ty) {
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
    let S = v, T = !1;
    v.endsWith(nd) ? (S = v.slice(0, -1), T = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      v.startsWith(nd) && (S = v.slice(1), T = !0)
    );
    const E = p && p > h ? p - h : void 0;
    return Oy(u, T, S, E);
  };
  if (a) {
    const s = a + Ty, u = o;
    o = (d) => d.startsWith(s) ? u(d.slice(s.length)) : Oy(C1, !1, d, void 0, !0);
  }
  if (l) {
    const s = o;
    o = (u) => l({
      className: u,
      parseClassName: s
    });
  }
  return o;
}, T1 = (n) => {
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
}, O1 = (n) => ({
  cache: S1(n.cacheSize),
  parseClassName: E1(n),
  sortModifiers: T1(n),
  postfixLookupClassGroupIds: M1(n),
  ...m1(n)
}), M1 = (n) => {
  const a = /* @__PURE__ */ Object.create(null), l = n.postfixLookupClassGroups;
  if (l)
    for (let o = 0; o < l.length; o++)
      a[l[o]] = !0;
  return a;
}, D1 = /\s+/, _1 = (n, a) => {
  const {
    parseClassName: l,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: u,
    postfixLookupClassGroupIds: d
  } = a, m = [], h = n.trim().split(D1);
  let p = "";
  for (let b = h.length - 1; b >= 0; b -= 1) {
    const v = h[b], {
      isExternal: S,
      modifiers: T,
      hasImportantModifier: E,
      baseClassName: O,
      maybePostfixModifierPosition: C
    } = l(v);
    if (S) {
      p = v + (p.length > 0 ? " " + p : p);
      continue;
    }
    let D = !!C, _;
    if (D) {
      const Y = O.substring(0, C);
      _ = o(Y);
      const U = _ && d[_] ? o(O) : void 0;
      U && U !== _ && (_ = U, D = !1);
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
    const M = T.length === 0 ? "" : T.length === 1 ? T[0] : u(T).join(":"), N = E ? M + nd : M, z = N + _;
    if (m.indexOf(z) > -1)
      continue;
    m.push(z);
    const R = s(_, D);
    for (let Y = 0; Y < R.length; ++Y) {
      const U = R[Y];
      m.push(N + U);
    }
    p = v + (p.length > 0 ? " " + p : p);
  }
  return p;
}, N1 = (...n) => {
  let a = 0, l, o, s = "";
  for (; a < n.length; )
    (l = n[a++]) && (o = qv(l)) && (s && (s += " "), s += o);
  return s;
}, qv = (n) => {
  if (typeof n == "string")
    return n;
  let a, l = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (a = qv(n[o])) && (l && (l += " "), l += a);
  return l;
}, A1 = (n, ...a) => {
  let l, o, s, u;
  const d = (h) => {
    const p = a.reduce((b, v) => v(b), n());
    return l = O1(p), o = l.cache.get, s = l.cache.set, u = m, m(h);
  }, m = (h) => {
    const p = o(h);
    if (p)
      return p;
    const b = _1(h, l);
    return s(h, b), b;
  };
  return u = d, (...h) => u(N1(...h));
}, R1 = [], Ot = (n) => {
  const a = (l) => l[n] || R1;
  return a.isThemeGetter = !0, a.themeKey = n, a;
}, Pv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, k1 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, j1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, z1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, H1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, Y1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, B1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ja = (n) => k1.test(n), _e = (n) => !!n && !Number.isNaN(Number(n)), Hn = (n) => !!n && Number.isInteger(Number(n)), Bf = (n) => n.endsWith("%") && _e(n.slice(0, -1)), ha = (n) => j1.test(n), Wv = () => !0, U1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  z1.test(n) && !H1.test(n)
), Td = () => !1, L1 = (n) => Y1.test(n), q1 = (n) => B1.test(n), P1 = (n) => !ue(n) && !fe(n), G1 = (n) => n.startsWith("@container") && (n[10] === "/" && n[11] !== void 0 || n[11] === "s" && n[16] !== void 0 && n.startsWith("-size/", 10) || n[11] === "n" && n[18] !== void 0 && n.startsWith("-normal/", 10)), W1 = (n) => ir(n, Fv, Td), ue = (n) => Pv.test(n), Ar = (n) => ir(n, Qv, U1), My = (n) => ir(n, K1, _e), V1 = (n) => ir(n, Iv, Wv), X1 = (n) => ir(n, Zv, Td), Dy = (n) => ir(n, Vv, Td), F1 = (n) => ir(n, Xv, q1), ws = (n) => ir(n, $v, L1), fe = (n) => Gv.test(n), Vl = (n) => qr(n, Qv), Q1 = (n) => qr(n, Zv), _y = (n) => qr(n, Vv), Z1 = (n) => qr(n, Fv), I1 = (n) => qr(n, Xv), Ss = (n) => qr(n, $v, !0), $1 = (n) => qr(n, Iv, !0), ir = (n, a, l) => {
  const o = Pv.exec(n);
  return o ? o[1] ? a(o[1]) : l(o[2]) : !1;
}, qr = (n, a, l = !1) => {
  const o = Gv.exec(n);
  return o ? o[1] ? a(o[1]) : l : !1;
}, Vv = (n) => n === "position" || n === "percentage", Xv = (n) => n === "image" || n === "url", Fv = (n) => n === "length" || n === "size" || n === "bg-size", Qv = (n) => n === "length", K1 = (n) => n === "number", Zv = (n) => n === "family-name", Iv = (n) => n === "number" || n === "weight", $v = (n) => n === "shadow", J1 = () => {
  const n = Ot("color"), a = Ot("font"), l = Ot("text"), o = Ot("font-weight"), s = Ot("tracking"), u = Ot("leading"), d = Ot("breakpoint"), m = Ot("container"), h = Ot("spacing"), p = Ot("radius"), b = Ot("shadow"), v = Ot("inset-shadow"), S = Ot("text-shadow"), T = Ot("drop-shadow"), E = Ot("blur"), O = Ot("perspective"), C = Ot("aspect"), D = Ot("ease"), _ = Ot("animate"), M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
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
  ], z = () => [...N(), fe, ue], R = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", "contain", "none"], U = () => [fe, ue, h], Z = () => [Ja, "full", "auto", ...U()], ee = () => [Hn, "none", "subgrid", fe, ue], ae = () => ["auto", {
    span: ["full", Hn, fe, ue]
  }, Hn, fe, ue], ne = () => [Hn, "auto", fe, ue], I = () => ["auto", "min", "max", "fr", fe, ue], J = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], oe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...U()], F = () => [Ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...U()], K = () => [m, Ja, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...U()], re = () => [Ja, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...U()], W = () => [n, fe, ue], A = () => [...N(), _y, Dy, {
    position: [fe, ue]
  }], V = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], te = () => ["auto", "cover", "contain", Z1, W1, {
    size: [fe, ue]
  }], le = () => [Bf, Vl, Ar], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    fe,
    ue
  ], se = () => ["", _e, Vl, Ar], ve = () => ["solid", "dashed", "dotted", "double"], Fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => [_e, Bf, _y, Dy], he = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    fe,
    ue
  ], Qe = () => ["none", _e, fe, ue], qe = () => ["none", _e, fe, ue], Ce = () => [_e, fe, ue], Te = () => [Ja, "full", ...U()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ha],
      breakpoint: [ha],
      color: [Wv],
      container: [ha],
      "drop-shadow": [ha],
      ease: ["in", "out", "in-out"],
      font: [P1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ha],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ha],
      shadow: [ha],
      spacing: ["px", _e],
      text: [ha],
      "text-shadow": [ha],
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
        aspect: ["auto", "square", Ja, ue, fe, C]
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
        "@container": ["", "normal", "size", fe, ue]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [G1],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [_e, "auto", ue, fe, m]
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
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
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
        z: [Hn, "auto", fe, ue]
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
        flex: [_e, Ja, "auto", "initial", "none", ue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _e, fe, ue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _e, fe, ue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Hn, "first", "last", "none", fe, ue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ee()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ae()
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
        "grid-rows": ee()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ae()
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
        "auto-cols": I()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": I()
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
        justify: [...J(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...oe(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...oe()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...J()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...oe(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...oe(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": J()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...oe(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...oe()]
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
        block: ["auto", ...re()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...re()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...re()]
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
        text: ["base", l, Vl, Ar]
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
        font: [o, $1, V1]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Bf, ue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Q1, X1, a]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ue]
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
        tracking: [s, fe, ue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_e, "none", fe, My]
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
          ...U()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", fe, ue]
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
        list: ["disc", "decimal", "none", fe, ue]
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
        decoration: [_e, "from-font", "auto", fe, Ar]
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
        "underline-offset": [_e, "auto", fe, ue]
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
        tab: [Hn, fe, ue]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", fe, ue]
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
        content: ["none", fe, ue]
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
        bg: V()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: te()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Hn, fe, ue],
          radial: ["", fe, ue],
          conic: ["", Hn, fe, ue]
        }, I1, F1]
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
        from: le()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: le()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: le()
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
        rounded: ie()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ie()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ie()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ie()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ie()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ie()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ie()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ie()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ie()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ie()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ie()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ie()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ie()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ie()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ie()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: se()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": se()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": se()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": se()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": se()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": se()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": se()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": se()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": se()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": se()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": se()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": se()
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
        "divide-y": se()
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
        "outline-offset": [_e, fe, ue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _e, Vl, Ar]
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
        "inset-shadow": ["none", v, Ss, ws]
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
        ring: se()
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
        "inset-ring": se()
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
        "text-shadow": ["none", S, Ss, ws]
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
        opacity: [_e, fe, ue]
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
        "mask-radial": [fe, ue]
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
        "mask-radial-at": N()
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
        mask: A()
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
        mask: te()
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
        mask: ["none", fe, ue]
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
          fe,
          ue
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
        brightness: [_e, fe, ue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_e, fe, ue]
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
        grayscale: ["", _e, fe, ue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_e, fe, ue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _e, fe, ue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_e, fe, ue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _e, fe, ue]
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
          fe,
          ue
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
        "backdrop-brightness": [_e, fe, ue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_e, fe, ue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _e, fe, ue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_e, fe, ue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _e, fe, ue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_e, fe, ue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_e, fe, ue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _e, fe, ue]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", fe, ue]
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
        duration: [_e, "initial", fe, ue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, fe, ue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_e, fe, ue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", _, fe, ue]
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
        perspective: [O, fe, ue]
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
        transform: [fe, ue, "", "none", "gpu", "cpu"]
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
        translate: Te()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Te()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Te()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Te()
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
        zoom: [Hn, fe, ue]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", fe, ue]
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
        "will-change": ["auto", "scroll", "contents", "transform", fe, ue]
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
        stroke: [_e, Vl, Ar, My]
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
}, eC = /* @__PURE__ */ A1(J1);
function we(...n) {
  return eC(Yv(n));
}
const ad = c1(
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
function Ue({
  className: n,
  variant: a,
  size: l,
  asChild: o = !1,
  ...s
}) {
  const u = o ? a1 : "button";
  return /* @__PURE__ */ y.jsx(
    u,
    {
      "data-slot": "button",
      className: we(ad({ variant: a, size: l, className: n })),
      ...s
    }
  );
}
function ba({ className: n, type: a, ...l }) {
  return /* @__PURE__ */ y.jsx(
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
var Kl = Mv(), tC = Object.defineProperty, nC = (n, a) => tC(n, "name", { value: a, configurable: !0 }), aC = [
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
], rt = aC.reduce((n, a) => {
  const l = /* @__PURE__ */ Sa(`Primitive.${a}`), o = x.forwardRef((s, u) => {
    const { asChild: d, ...m } = s, h = d ? l : a;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ y.jsx(h, { ...m, ref: u });
  });
  return o.displayName = `Primitive.${a}`, { ...n, [a]: o };
}, {});
function Kv(n, a) {
  n && Kl.flushSync(() => n.dispatchEvent(a));
}
nC(Kv, "dispatchDiscreteCustomEvent");
var rC = Object.defineProperty, oC = (n, a) => rC(n, "name", { value: a, configurable: !0 }), lC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ oC(function(a, l) {
    return /* @__PURE__ */ y.jsx(
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
function Wt({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ y.jsx(
    lC,
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
var iC = Object.defineProperty, Vo = (n, a) => iC(n, "name", { value: a, configurable: !0 }), Jv = !!(typeof window < "u" && window.document && window.document.createElement);
function ze(n, a, { checkForDefaultPrevented: l = !0 } = {}) {
  return /* @__PURE__ */ Vo(function(s) {
    if (n?.(s), l === !1 || !s || !s.defaultPrevented)
      return a?.(s);
  }, "handleEvent");
}
Vo(ze, "composeEventHandlers");
function sC(n) {
  if (!Jv)
    throw new Error("Cannot access window outside of the DOM");
  return n?.ownerDocument?.defaultView ?? window;
}
Vo(sC, "getOwnerWindow");
function rd(n) {
  if (!Jv)
    throw new Error("Cannot access document outside of the DOM");
  return n?.ownerDocument ?? document;
}
Vo(rd, "getOwnerDocument");
function eb(n, a = !1) {
  const { activeElement: l } = rd(n);
  if (!l?.nodeName)
    return null;
  if (tb(l) && l.contentDocument)
    return eb(l.contentDocument.body, a);
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
Vo(eb, "getActiveElement");
function tb(n) {
  return n.tagName === "IFRAME";
}
Vo(tb, "isFrame");
var cC = Object.defineProperty, wn = (n, a) => cC(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function uC(n, a) {
  const l = x.createContext(a);
  l.displayName = n + "Context";
  const o = /* @__PURE__ */ wn((u) => {
    const { children: d, ...m } = u, h = x.useMemo(() => m, Object.values(m));
    return /* @__PURE__ */ y.jsx(l.Provider, { value: h, children: d });
  }, "Provider");
  o.displayName = n + "Provider";
  function s(u, d = {}) {
    const { optional: m = !1 } = d, h = x.useContext(l);
    if (h) return h;
    if (a !== void 0) return a;
    if (!m)
      throw new Error(`\`${u}\` must be used within \`${n}\``);
  }
  return wn(s, "useContext"), [o, s];
}
wn(uC, "createContext");
// @__NO_SIDE_EFFECTS__
function Ta(n, a = []) {
  let l = [];
  function o(u, d) {
    const m = x.createContext(d);
    m.displayName = u + "Context";
    const h = l.length;
    l = [...l, d];
    const p = /* @__PURE__ */ wn((v) => {
      const { scope: S, children: T, ...E } = v, O = S?.[n]?.[h] || m, C = x.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ y.jsx(O.Provider, { value: C, children: T });
    }, "Provider");
    p.displayName = u + "Provider";
    function b(v, S, T = {}) {
      const { optional: E = !1 } = T, O = S?.[n]?.[h] || m, C = x.useContext(O);
      if (C) return C;
      if (d !== void 0) return d;
      if (!E)
        throw new Error(`\`${v}\` must be used within \`${u}\``);
    }
    return wn(b, "useContext"), [p, b];
  }
  wn(o, "createContext");
  const s = /* @__PURE__ */ wn(() => {
    const u = l.map((d) => x.createContext(d));
    return /* @__PURE__ */ wn(function(m) {
      const h = m?.[n] || u;
      return x.useMemo(
        () => ({ [`__scope${n}`]: { ...m, [n]: h } }),
        [m, h]
      );
    }, "useScope");
  }, "createScope");
  return s.scopeName = n, [o, nb(s, ...a)];
}
wn(Ta, "createContextScope");
function nb(...n) {
  const a = n[0];
  if (n.length === 1) return a;
  const l = /* @__PURE__ */ wn(() => {
    const o = n.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return /* @__PURE__ */ wn(function(u) {
      const d = o.reduce((m, { useScope: h, scopeName: p }) => {
        const v = h(u)[`__scope${p}`];
        return { ...m, ...v };
      }, {});
      return x.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    }, "useComposedScopes");
  }, "createScope");
  return l.scopeName = a.scopeName, l;
}
wn(nb, "composeContextScopes");
var bt = globalThis?.document ? x.useLayoutEffect : () => {
}, fC = Object.defineProperty, dC = (n, a) => fC(n, "name", { value: a, configurable: !0 }), Ny = Lr[" useEffectEvent ".trim().toString()], Ay = Lr[" useInsertionEffect ".trim().toString()];
function ab(n) {
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
dC(ab, "useEffectEvent");
var mC = Object.defineProperty, Jl = (n, a) => mC(n, "name", { value: a, configurable: !0 }), hC = Lr[" useInsertionEffect ".trim().toString()] || bt;
function zr({
  prop: n,
  defaultProp: a,
  onChange: l = /* @__PURE__ */ Jl(() => {
  }, "onChange"),
  caller: o
}) {
  const [s, u, d] = rb({
    defaultProp: a,
    onChange: l
  }), m = n !== void 0, h = m ? n : s, p = x.useCallback(
    (b) => {
      if (m) {
        const v = ob(b) ? b(n) : b;
        v !== n && d.current?.(v);
      } else
        u(b);
    },
    [m, n, u, d]
  );
  return [h, p];
}
Jl(zr, "useControllableState");
function rb({
  defaultProp: n,
  onChange: a
}) {
  const [l, o] = x.useState(n), s = x.useRef(l), u = x.useRef(a);
  return hC(() => {
    u.current = a;
  }, [a]), x.useEffect(() => {
    s.current !== l && (u.current?.(l), s.current = l);
  }, [l, s]), [l, o, u];
}
Jl(rb, "useUncontrolledState");
function ob(n) {
  return typeof n == "function";
}
Jl(ob, "isFunction");
var Ry = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function pC(n, a, l, o) {
  const { prop: s, defaultProp: u, onChange: d, caller: m } = a, h = s !== void 0, p = ab(d), b = [{ ...l, state: u }];
  o && b.push(o);
  const [v, S] = x.useReducer(
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
    h && !Object.is(s, v.state) && S({ type: Ry, state: s });
  }, [s, v.state, h]), [O, S];
}
Jl(pC, "useControllableStateReducer");
var gC = Object.defineProperty, yC = (n, a) => gC(n, "name", { value: a, configurable: !0 });
function Od(n) {
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
yC(Od, "useSize");
var vC = Object.defineProperty, rr = (n, a) => vC(n, "name", { value: a, configurable: !0 }), Md = "Switch", [bC, BA] = /* @__PURE__ */ Ta(Md), [xC, Dd] = bC(Md);
function lb(n) {
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
  } = n, [S, T] = zr({
    prop: l,
    defaultProp: s ?? !1,
    onChange: h,
    caller: Md
  }), [E, O] = x.useState(null), [C, D] = x.useState(null), [_, M] = x.useState(null), N = E ? !!d || !!E.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), z = {
    checked: S,
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
  return /* @__PURE__ */ y.jsx(xC, { scope: a, ...z, children: ib(v) ? v(z) : o });
}
rr(lb, "SwitchProvider");
var wC = "SwitchTrigger", SC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ rr(function({ __scopeSwitch: a, onClick: l, ...o }, s) {
    const {
      control: u,
      form: d,
      value: m,
      disabled: h,
      checked: p,
      required: b,
      setControl: v,
      setChecked: S,
      onUserClick: T,
      isFormControl: E,
      bubbleInput: O
    } = Dd(wC, a), C = at(s, v), D = x.useRef(p);
    return x.useEffect(() => {
      const _ = d ? u?.ownerDocument.getElementById(d) : u?.form;
      if (_ instanceof HTMLFormElement) {
        const M = /* @__PURE__ */ rr(() => S(D.current), "reset");
        return _.addEventListener("reset", M), () => _.removeEventListener("reset", M);
      }
    }, [u, d, S]), /* @__PURE__ */ y.jsx(
      rt.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": p,
        "aria-required": b,
        "data-state": _d(p),
        "data-disabled": h ? "" : void 0,
        disabled: h,
        value: m,
        ...o,
        ref: C,
        onClick: ze(l, (_) => {
          const M = _.isPropagationStopped();
          T({ requestedChecked: !p, hasConsumerStoppedPropagation: M }), S((N) => !N), O && E && (M || _.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), CC = /* @__PURE__ */ x.forwardRef(
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
      ...S
    } = a;
    return /* @__PURE__ */ y.jsx(
      lb,
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
        internal_do_not_use_render: ({ isFormControl: T }) => /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
          /* @__PURE__ */ y.jsx(
            SC,
            {
              ...S,
              ref: l,
              __scopeSwitch: o
            }
          ),
          T && /* @__PURE__ */ y.jsx(
            MC,
            {
              __scopeSwitch: o
            }
          )
        ] })
      }
    );
  }, "Switch")
), EC = "SwitchThumb", TC = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ rr(function(a, l) {
    const { __scopeSwitch: o, ...s } = a, u = Dd(EC, o);
    return /* @__PURE__ */ y.jsx(
      rt.span,
      {
        "data-state": _d(u.checked),
        "data-disabled": u.disabled ? "" : void 0,
        ...s,
        ref: l
      }
    );
  }, "SwitchThumb")
), OC = "SwitchBubbleInput", MC = /* @__PURE__ */ x.forwardRef(
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
      value: S,
      form: T,
      bubbleInput: E,
      setBubbleInput: O
    } = Dd(OC, a), C = at(s, O), D = Od(u), _ = x.useRef(!1), M = x.useRef(m), N = x.useRef(d), z = x.useRef(null);
    x.useEffect(() => {
      const Y = E;
      if (!Y) return;
      const U = window.HTMLInputElement.prototype, ee = Object.getOwnPropertyDescriptor(
        U,
        "checked"
      ).set;
      if (!ee)
        return;
      const ae = M.current !== m;
      M.current = m;
      const ne = d !== null && d !== N.current;
      if (N.current = d, ne)
        z.current = ae ? null : d, ae && ee.call(Y, m), Y.dispatchEvent(
          new Event("click", { bubbles: !d.hasConsumerStoppedPropagation })
        );
      else if (ae) {
        const I = z.current;
        z.current = null;
        const J = I?.requestedChecked === m;
        _.current = !0, ee.call(Y, m), Y.dispatchEvent(
          new Event("click", {
            bubbles: !(J && I.hasConsumerStoppedPropagation)
          })
        ), _.current = !1;
      }
    }, [E, m, d]);
    const R = x.useRef(m);
    return /* @__PURE__ */ y.jsx(
      rt.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: h ?? R.current,
        required: p,
        disabled: b,
        name: v,
        value: S,
        form: T,
        ...o,
        tabIndex: -1,
        ref: C,
        onClick: ze(l, (Y) => {
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
function ib(n) {
  return typeof n == "function";
}
rr(ib, "isFunction");
function _d(n) {
  return n ? "checked" : "unchecked";
}
rr(_d, "getState");
function Nd({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ y.jsx(
    CC,
    {
      "data-slot": "switch",
      className: we(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ...a,
      children: /* @__PURE__ */ y.jsx(
        TC,
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
var DC = Object.defineProperty, Mt = (n, a) => DC(n, "name", { value: a, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Ad(n) {
  const a = n + "CollectionProvider", [l, o] = /* @__PURE__ */ Ta(a), [s, u] = l(
    a,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = /* @__PURE__ */ Mt((O) => {
    const { scope: C, children: D } = O, _ = x.useRef(null), M = x.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ y.jsx(s, { scope: C, itemMap: M, collectionRef: _, children: D });
  }, "CollectionProvider");
  d.displayName = a;
  const m = n + "CollectionSlot", h = /* @__PURE__ */ Sa(m), p = x.forwardRef(
    (O, C) => {
      const { scope: D, children: _ } = O, M = u(m, D), N = at(C, M.collectionRef);
      return /* @__PURE__ */ y.jsx(h, { ref: N, children: _ });
    }
  );
  p.displayName = m;
  const b = n + "CollectionItemSlot", v = "data-radix-collection-item", S = /* @__PURE__ */ Sa(b), T = x.forwardRef(
    (O, C) => {
      const { scope: D, children: _, ...M } = O, N = x.useRef(null), z = at(C, N), R = u(b, D);
      return x.useEffect(() => (R.itemMap.set(N, { ref: N, ...M }), () => {
        R.itemMap.delete(N);
      })), /* @__PURE__ */ y.jsx(S, { [v]: "", ref: z, children: _ });
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
        (R, Y) => M.indexOf(R.ref.current) - M.indexOf(Y.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return Mt(E, "useCollection"), [
    { Provider: d, Slot: p, ItemSlot: T },
    E,
    o
  ];
}
Mt(Ad, "createCollection");
var ky = /* @__PURE__ */ new WeakMap(), gt, sn, Cs = (sn = class extends Map {
  constructor(l) {
    super(l);
    fy(this, gt);
    Af(this, gt, [...super.keys()]), ky.set(this, !0);
  }
  set(l, o) {
    return ky.get(this) && !this.has(l) && Yt(this, gt).push(l), super.set(l, o), this;
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
    for (const [v, S] of b)
      this.set(v, S);
    return this;
  }
  with(l, o, s) {
    const u = new sn(this);
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
    return Af(this, gt, []), super.clear();
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
    const o = As(Yt(this, gt), l);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(l) {
    const o = As(Yt(this, gt), l);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(l) {
    return Yt(this, gt).indexOf(l);
  }
  keyAt(l) {
    return As(Yt(this, gt), l);
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
    return new sn(s);
  }
  map(l, o) {
    const s = [];
    let u = 0;
    for (const d of this)
      s.push([d[0], Reflect.apply(l, o, [d, u, this])]), u++;
    return new sn(s);
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
    return new sn(o);
  }
  toReversed() {
    const l = new sn();
    for (let o = this.size - 1; o >= 0; o--) {
      const s = this.keyAt(o), u = this.get(s);
      l.set(s, u);
    }
    return l;
  }
  toSpliced(...l) {
    const o = [...this.entries()];
    return o.splice(...l), new sn(o);
  }
  slice(l, o) {
    const s = new sn();
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
}, gt = new WeakMap(), Mt(sn, "OrderedDict"), sn);
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
function _C(n) {
  const a = n + "CollectionProvider", [l, o] = /* @__PURE__ */ Ta(a), [s, u] = l(a);
  s.displayName = n + "CollectionStableContextProvider";
  const [d, m] = l(a);
  d.displayName = n + "CollectionStatefulContextProvider";
  const h = /* @__PURE__ */ Mt(({ state: R, ...Y }) => R ? /* @__PURE__ */ y.jsx(b, { ...Y, state: R }) : /* @__PURE__ */ y.jsx(p, { ...Y }), "CollectionProvider");
  h.displayName = a;
  const p = /* @__PURE__ */ Mt((R) => {
    const Y = _();
    return /* @__PURE__ */ y.jsx(b, { ...R, state: Y });
  }, "CollectionInit");
  p.displayName = n + "CollectionInit";
  const b = /* @__PURE__ */ Mt((R) => {
    const { scope: Y, children: U, state: Z } = R, ee = x.useRef(null), [ae, ne] = x.useState(
      null
    ), I = at(ee, ne), [J, oe] = Z, H = x.useRef(
      new Cs()
    ), F = x.useCallback(() => {
      const K = H.current;
      return fb(K) || K.sort(Rs), K;
    }, []);
    return x.useEffect(() => {
      if (!ae)
        return;
      const K = db(() => {
        oe((re) => {
          const W = re.toSorted(Rs);
          return W.some(([V], te) => re.keyAt(te) !== V) ? W : re;
        });
      });
      return K.observe(ae, {
        childList: !0,
        subtree: !0
      }), () => {
        K.disconnect();
      };
    }, [ae, oe]), /* @__PURE__ */ y.jsx(
      s,
      {
        scope: Y,
        collectionElementRef: I,
        collectionElementRefObject: ee,
        getCollection: F,
        setCollection: oe,
        registryRef: H,
        children: /* @__PURE__ */ y.jsx(
          d,
          {
            scope: Y,
            collectionElement: ae,
            collection: J,
            children: U
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  b.displayName = n + "CollectionProviderImpl";
  const v = n + "CollectionSlot", S = /* @__PURE__ */ Sa(v), T = x.forwardRef(
    (R, Y) => {
      const { scope: U, children: Z } = R, ee = u(v, U), ae = at(Y, ee.collectionElementRef);
      return /* @__PURE__ */ y.jsx(S, { ref: ae, children: Z });
    }
  );
  T.displayName = v;
  const E = n + "CollectionItemSlot", O = "data-radix-collection-item", C = /* @__PURE__ */ Sa(E), D = x.forwardRef(
    (R, Y) => {
      const { scope: U, children: Z, ...ee } = R, ae = x.useRef(null), ne = u(E, U), { setCollection: I, registryRef: J } = ne, oe = x.useRef(ee);
      cb(oe.current, ee) || (oe.current = ee);
      const H = oe.current, F = x.useCallback(
        (W) => {
          const A = J.current;
          W ? A.set(W, {
            ...oe.current,
            element: W
          }) : ae.current && A.delete(ae.current);
        },
        [J]
      ), K = at(Y, F, ae);
      bt(() => {
        const W = ae.current, A = J.current;
        W && A.has(W) && A.set(W, { ...H, element: W });
      }, [H, J]);
      const re = x.useRef(null);
      return x.useEffect(() => {
        const W = ae.current, A = re.current;
        (A?.element ?? null) === W && (!W || A?.itemData === H) || (re.current = W ? { element: W, itemData: H } : null, I((V) => {
          const te = new Cs(V);
          return A && A.element !== W && te.delete(A.element), W && te.set(W, { ...H, element: W }), te.sort(Rs);
        }));
      }), x.useEffect(() => () => {
        const W = re.current;
        re.current = null, W && I((A) => {
          if (!A.has(W.element))
            return A;
          const V = new Cs(A);
          return V.delete(W.element), V;
        });
      }, [I]), /* @__PURE__ */ y.jsx(C, { [O]: "", ref: K, children: Z });
    }
  );
  D.displayName = E;
  function _() {
    return x.useState(new Cs());
  }
  Mt(_, "useInitCollection");
  function M(R) {
    const { collection: Y } = m(n + "CollectionConsumer", R);
    return Y;
  }
  Mt(M, "useCollection");
  function N(R) {
    const { getCollection: Y } = u(n + "CollectionConsumer", R);
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
Mt(_C, "createCollection");
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
var NC = Object.defineProperty, AC = (n, a) => NC(n, "name", { value: a, configurable: !0 }), RC = Lr[" useId ".trim().toString()] || (() => {
}), kC = 0;
function nr(n) {
  const [a, l] = x.useState(RC());
  return bt(() => {
    n || l((o) => o ?? String(kC++));
  }, [n]), n || (a ? `radix-${a}` : "");
}
AC(nr, "useId");
var jC = Object.defineProperty, zC = (n, a) => jC(n, "name", { value: a, configurable: !0 }), jy = Lr[" useInsertionEffect ".trim().toString()];
function Dn(n) {
  const a = x.useRef(n);
  return typeof jy == "function" ? jy(() => {
    a.current = n;
  }) : bt(() => {
    a.current = n;
  }), x.useMemo(() => ((...l) => a.current?.(...l)), []);
}
zC(Dn, "useCallbackRef");
var HC = Object.defineProperty, YC = (n, a) => HC(n, "name", { value: a, configurable: !0 }), BC = {
  LTR: "ltr"
}, UC = x.createContext(void 0);
function Xs(n) {
  const a = x.useContext(UC);
  return n || a || BC.LTR;
}
YC(Xs, "useDirection");
var LC = Object.defineProperty, kd = (n, a) => LC(n, "name", { value: a, configurable: !0 }), Uf = !1;
function mb() {
  const [n, a] = x.useState(Uf);
  return x.useEffect(() => {
    Uf || (Uf = !0, a(!0));
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
var qC = typeof hb == "function" ? gb : mb, PC = Object.defineProperty, Pr = (n, a) => PC(n, "name", { value: a, configurable: !0 }), Lf = "rovingFocusGroup.onEntryFocus", GC = { bubbles: !1, cancelable: !0 }, Fs = "RovingFocusGroup", [od, yb, WC] = /* @__PURE__ */ Ad(Fs), [VC, vb] = /* @__PURE__ */ Ta(
  Fs,
  [WC]
), zy = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, XC = {
  RTL: "rtl"
}, [FC, QC] = VC(Fs), ZC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pr(function(a, l) {
    return /* @__PURE__ */ y.jsx(od.Provider, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(od.Slot, { scope: a.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(IC, { ...a, ref: l }) }) });
  }, "RovingFocusGroup")
), IC = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Pr(function(a, l) {
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
    ...S
  } = a, T = x.useRef(null), E = at(l, T), O = Xs(d), [C, D] = zr({
    prop: m,
    defaultProp: h ?? null,
    onChange: p,
    caller: Fs
  }), [_, M] = x.useState(!1), N = Dn(b), z = yb(o), R = x.useRef(!1), [Y, U] = x.useState(0);
  return x.useEffect(() => {
    const Z = T.current;
    if (Z)
      return Z.addEventListener(Lf, N), () => Z.removeEventListener(Lf, N);
  }, [N]), /* @__PURE__ */ y.jsx(
    FC,
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
        () => U((Z) => Z + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => U((Z) => Z - 1),
        []
      ),
      children: /* @__PURE__ */ y.jsx(
        rt.div,
        {
          tabIndex: _ || Y === 0 ? -1 : 0,
          "data-orientation": s,
          ...S,
          ref: E,
          style: { outline: "none", ...a.style },
          onMouseDown: ze(a.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: ze(a.onFocus, (Z) => {
            const ee = !R.current;
            if (Z.target === Z.currentTarget && ee && !_) {
              const ae = new CustomEvent(Lf, GC);
              if (Z.currentTarget.dispatchEvent(ae), !ae.defaultPrevented) {
                const ne = z().filter((F) => F.focusable), I = ne.find((F) => F.active), J = ne.find((F) => F.id === C), H = [I, J, ...ne].filter(
                  Boolean
                ).map((F) => F.ref.current);
                jd(H, v);
              }
            }
            R.current = !1;
          }),
          onBlur: ze(a.onBlur, () => M(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), $C = "RovingFocusGroupItem", KC = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pr(function(a, l) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: s = !0,
      active: u = !1,
      tabStopId: d,
      children: m,
      ...h
    } = a, p = nr(), b = d || p, v = QC($C, o), S = v.currentTabStopId === b, T = yb(o), { onFocusableItemAdd: E, onFocusableItemRemove: O, currentTabStopId: C } = v, D = qC();
    return bt(() => {
      if (!(!D || !s))
        return E(), () => O();
    }, [D, s, E, O]), x.useEffect(() => {
      if (!(D || !s))
        return E(), () => O();
    }, [D, s, E, O]), /* @__PURE__ */ y.jsx(
      od.ItemSlot,
      {
        scope: o,
        id: b,
        focusable: s,
        active: u,
        children: /* @__PURE__ */ y.jsx(
          rt.span,
          {
            tabIndex: S ? 0 : -1,
            "data-orientation": v.orientation,
            ...h,
            ref: l,
            onMouseDown: ze(a.onMouseDown, (_) => {
              s ? v.onItemFocus(b) : _.preventDefault();
            }),
            onFocus: ze(a.onFocus, () => v.onItemFocus(b)),
            onKeyDown: ze(a.onKeyDown, (_) => {
              if (_.key === "Tab" && _.shiftKey) {
                v.onItemShiftTab();
                return;
              }
              if (_.target !== _.currentTarget) return;
              const M = xb(_, v.orientation, v.dir);
              if (M !== void 0) {
                if (_.metaKey || _.ctrlKey || _.altKey || _.shiftKey) return;
                _.preventDefault();
                let z = T().filter((R) => R.focusable).map((R) => R.ref.current);
                if (M === "last") z.reverse();
                else if (M === "prev" || M === "next") {
                  M === "prev" && z.reverse();
                  const R = z.indexOf(_.currentTarget);
                  z = v.loop ? wb(z, R + 1) : z.slice(R + 1);
                }
                setTimeout(() => jd(z));
              }
            }),
            children: typeof m == "function" ? m({ isCurrentTabStop: S, hasTabStop: C != null }) : m
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), JC = {
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
  return a !== XC.RTL ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
Pr(bb, "getDirectionAwareKey");
function xb(n, a, l) {
  const o = bb(n.key, l);
  if (!(a === zy.Vertical && ["ArrowLeft", "ArrowRight"].includes(o)) && !(a === zy.Horizontal && ["ArrowUp", "ArrowDown"].includes(o)))
    return JC[o];
}
Pr(xb, "getFocusIntent");
function jd(n, a = !1) {
  const l = document.activeElement;
  for (const o of n)
    if (o === l || (o.focus({ preventScroll: a }), document.activeElement !== l)) return;
}
Pr(jd, "focusFirst");
function wb(n, a) {
  return n.map((l, o) => n[(a + o) % n.length]);
}
Pr(wb, "wrapArray");
var eE = Object.defineProperty, Ca = (n, a) => eE(n, "name", { value: a, configurable: !0 });
function Sb(n, a) {
  return x.useReducer((l, o) => a[l][o] ?? l, n);
}
Ca(Sb, "useStateMachine");
var Qs = /* @__PURE__ */ Ca((n) => {
  const { present: a, children: l } = n, o = Cb(a), s = typeof l == "function" ? l({ present: o.isPresent }) : x.Children.only(l), u = Eb(o.ref, Tb(s));
  return typeof l == "function" || o.isPresent ? x.cloneElement(s, { ref: u }) : null;
}, "Presence");
function Cb(n) {
  const [a, l] = x.useState(), o = x.useRef(null), s = x.useRef(n), u = x.useRef("none"), d = x.useRef(void 0), m = n ? "mounted" : "unmounted", [h, p] = Sb(m, {
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
    h === "mounted" ? (u.current = d.current ?? Lo(o.current), d.current = void 0) : u.current = "none";
  }, [h]), bt(() => {
    const b = o.current, v = s.current;
    if (v !== n) {
      const T = u.current, E = Lo(b);
      n ? (d.current = E, p("MOUNT")) : E === "none" || b?.display === "none" ? p("UNMOUNT") : p(v && T !== E ? "ANIMATION_OUT" : "UNMOUNT"), s.current = n;
    }
  }, [n, p]), bt(() => {
    if (a) {
      let b;
      const v = a.ownerDocument.defaultView ?? window, S = /* @__PURE__ */ Ca((E) => {
        const C = Lo(o.current).includes(CSS.escape(E.animationName));
        if (E.target === a && C && (p("ANIMATION_END"), !s.current)) {
          const D = a.style.animationFillMode;
          a.style.animationFillMode = "forwards", b = v.setTimeout(() => {
            a.style.animationFillMode === "forwards" && (a.style.animationFillMode = D);
          });
        }
      }, "handleAnimationEnd"), T = /* @__PURE__ */ Ca((E) => {
        E.target === a && (u.current = Lo(o.current));
      }, "handleAnimationStart");
      return a.addEventListener("animationstart", T), a.addEventListener("animationcancel", S), a.addEventListener("animationend", S), () => {
        v.clearTimeout(b), a.removeEventListener("animationstart", T), a.removeEventListener("animationcancel", S), a.removeEventListener("animationend", S);
      };
    } else
      p("ANIMATION_END");
  }, [a, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: x.useCallback((b) => {
      if (b) {
        const v = getComputedStyle(b);
        o.current = v, d.current = Lo(v);
      } else
        o.current = null;
      l(b);
    }, [])
  };
}
Ca(Cb, "usePresence");
function ld(n, a) {
  if (typeof n == "function")
    return n(a);
  n != null && (n.current = a);
}
Ca(ld, "setRef");
function Eb(...n) {
  const a = x.useRef(n);
  return a.current = n, x.useCallback((l) => {
    const o = a.current;
    let s = !1;
    const u = o.map((d) => {
      const m = ld(d, l);
      return !s && typeof m == "function" && (s = !0), m;
    });
    if (s)
      return () => {
        for (let d = 0; d < u.length; d++) {
          const m = u[d];
          typeof m == "function" ? m() : ld(o[d], null);
        }
      };
  }, []);
}
Ca(Eb, "useStableComposedRefs");
function Lo(n) {
  return n?.animationName || "none";
}
Ca(Lo, "getAnimationName");
function Tb(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning;
  return l ? n.ref : (a = Object.getOwnPropertyDescriptor(n, "ref")?.get, l = a && "isReactWarning" in a && a.isReactWarning, l ? n.props.ref : n.props.ref || n.ref);
}
Ca(Tb, "getElementRef");
var tE = Object.defineProperty, Xo = (n, a) => tE(n, "name", { value: a, configurable: !0 }), Ob = {
  Automatic: "automatic",
  Manual: "manual"
}, zd = "Tabs", [nE, UA] = /* @__PURE__ */ Ta(zd, [
  vb
]), Mb = vb(), [aE, Hd] = nE(zd), rE = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xo(function(a, l) {
    const {
      __scopeTabs: o,
      value: s,
      onValueChange: u,
      defaultValue: d,
      orientation: m = "horizontal",
      dir: h,
      activationMode: p = Ob.Automatic,
      ...b
    } = a, v = Xs(h), [S, T] = zr({
      prop: s,
      onChange: u,
      defaultProp: d ?? "",
      caller: zd
    });
    return /* @__PURE__ */ y.jsx(
      aE,
      {
        scope: o,
        baseId: nr(),
        value: S,
        onValueChange: T,
        orientation: m,
        dir: v,
        activationMode: p,
        children: /* @__PURE__ */ y.jsx(
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
), oE = "TabsList", lE = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xo(function(a, l) {
    const { __scopeTabs: o, loop: s = !0, ...u } = a, d = Hd(oE, o), m = Mb(o);
    return /* @__PURE__ */ y.jsx(
      ZC,
      {
        asChild: !0,
        ...m,
        orientation: d.orientation,
        dir: d.dir,
        loop: s,
        children: /* @__PURE__ */ y.jsx(
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
), iE = "TabsTrigger", sE = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Xo(function(a, l) {
    const { __scopeTabs: o, value: s, disabled: u = !1, ...d } = a, m = Hd(iE, o), h = Mb(o), p = Yd(m.baseId, s), b = Bd(m.baseId, s), v = s === m.value;
    return /* @__PURE__ */ y.jsx(
      KC,
      {
        asChild: !0,
        ...h,
        focusable: !u,
        active: v,
        children: /* @__PURE__ */ y.jsx(
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
            onMouseDown: ze(a.onMouseDown, (S) => {
              !u && S.button === 0 && S.ctrlKey === !1 ? (S.currentTarget.focus(), m.onValueChange(s)) : S.preventDefault();
            }),
            onKeyDown: ze(a.onKeyDown, (S) => {
              u || S.target !== S.currentTarget || [" ", "Enter"].includes(S.key) && m.onValueChange(s);
            }),
            onFocus: ze(a.onFocus, () => {
              const S = m.activationMode !== Ob.Manual;
              !v && !u && S && m.onValueChange(s);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), cE = "TabsContent", uE = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Xo(function(a, l) {
    const { __scopeTabs: o, value: s, forceMount: u, children: d, ...m } = a, h = Hd(cE, o), p = Yd(h.baseId, s), b = Bd(h.baseId, s), v = s === h.value, S = x.useRef(v);
    return x.useEffect(() => {
      const T = requestAnimationFrame(() => S.current = !1);
      return () => cancelAnimationFrame(T);
    }, []), /* @__PURE__ */ y.jsx(Qs, { present: u || v, children: ({ present: T }) => /* @__PURE__ */ y.jsx(
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
          animationDuration: S.current ? "0s" : void 0
        },
        children: T && d
      }
    ) });
  }, "TabsContent")
);
function Yd(n, a) {
  return `${n}-trigger-${a}`;
}
Xo(Yd, "makeTriggerId");
function Bd(n, a) {
  return `${n}-content-${a}`;
}
Xo(Bd, "makeContentId");
function Db({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ y.jsx(
    rE,
    {
      "data-slot": "tabs",
      className: we("flex flex-col gap-2", n),
      ...a
    }
  );
}
function _b({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ y.jsx(
    lE,
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
function Nb({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ y.jsx(
    sE,
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
function Ab({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ y.jsx(
    uE,
    {
      "data-slot": "tabs-content",
      className: we("flex-1 outline-none", n),
      ...a
    }
  );
}
const Rb = 6048e5, fE = 864e5, dE = 6e4, mE = 36e5, hE = 1e3, Hy = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Ke(n, a) {
  return typeof n == "function" ? n(a) : n && typeof n == "object" && Hy in n ? n[Hy](a) : n instanceof Date ? new n.constructor(a) : new Date(a);
}
function Be(n, a) {
  return Ke(a || n, n);
}
function Zs(n, a, l) {
  const o = Be(n, l?.in);
  return isNaN(a) ? Ke(l?.in || n, NaN) : (a && o.setDate(o.getDate() + a), o);
}
function kb(n, a, l) {
  const o = Be(n, l?.in);
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
let pE = {};
function Gr() {
  return pE;
}
function _n(n, a) {
  const l = Gr(), o = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, s = Be(n, a?.in), u = s.getDay(), d = (u < o ? 7 : 0) + u - o;
  return s.setDate(s.getDate() - d), s.setHours(0, 0, 0, 0), s;
}
function Hr(n, a) {
  return _n(n, { ...a, weekStartsOn: 1 });
}
function jb(n, a) {
  const l = Be(n, a?.in), o = l.getFullYear(), s = Ke(l, 0);
  s.setFullYear(o + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const u = Hr(s), d = Ke(l, 0);
  d.setFullYear(o, 0, 4), d.setHours(0, 0, 0, 0);
  const m = Hr(d);
  return l.getTime() >= u.getTime() ? o + 1 : l.getTime() >= m.getTime() ? o : o - 1;
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
function Wr(n, ...a) {
  const l = Ke.bind(
    null,
    n || a.find((o) => typeof o == "object")
  );
  return a.map(l);
}
function Fl(n, a) {
  const l = Be(n, a?.in);
  return l.setHours(0, 0, 0, 0), l;
}
function Ud(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  ), u = Fl(o), d = Fl(s), m = +u - Bs(u), h = +d - Bs(d);
  return Math.round((m - h) / fE);
}
function gE(n, a) {
  const l = jb(n, a), o = Ke(n, 0);
  return o.setFullYear(l, 0, 4), o.setHours(0, 0, 0, 0), Hr(o);
}
function yE(n, a, l) {
  return Zs(n, a * 7, l);
}
function vE(n, a, l) {
  return kb(n, a * 12, l);
}
function bE(n, a) {
  let l, o = a?.in;
  return n.forEach((s) => {
    !o && typeof s == "object" && (o = Ke.bind(null, s));
    const u = Be(s, o);
    (!l || l < u || isNaN(+u)) && (l = u);
  }), Ke(o, l || NaN);
}
function xE(n, a) {
  let l, o = a?.in;
  return n.forEach((s) => {
    !o && typeof s == "object" && (o = Ke.bind(null, s));
    const u = Be(s, o);
    (!l || l > u || isNaN(+u)) && (l = u);
  }), Ke(o, l || NaN);
}
function wE(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  );
  return +Fl(o) == +Fl(s);
}
function zb(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function Hb(n) {
  return !(!zb(n) && typeof n != "number" || isNaN(+Be(n)));
}
function Yb(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  ), u = o.getFullYear() - s.getFullYear(), d = o.getMonth() - s.getMonth();
  return u * 12 + d;
}
function SE(n, a) {
  const l = Be(n, a?.in), o = l.getMonth();
  return l.setFullYear(l.getFullYear(), o + 1, 0), l.setHours(23, 59, 59, 999), l;
}
function Bb(n, a) {
  const [l, o] = Wr(n, a.start, a.end);
  return { start: l, end: o };
}
function CE(n, a) {
  const { start: l, end: o } = Bb(a?.in, n);
  let s = +l > +o;
  const u = s ? +l : +o, d = s ? o : l;
  d.setHours(0, 0, 0, 0), d.setDate(1);
  let m = 1;
  const h = [];
  for (; +d <= u; )
    h.push(Ke(l, d)), d.setMonth(d.getMonth() + m);
  return s ? h.reverse() : h;
}
function EE(n, a) {
  const l = Be(n, a?.in);
  return l.setDate(1), l.setHours(0, 0, 0, 0), l;
}
function TE(n, a) {
  const l = Be(n, a?.in), o = l.getFullYear();
  return l.setFullYear(o + 1, 0, 0), l.setHours(23, 59, 59, 999), l;
}
function Ub(n, a) {
  const l = Be(n, a?.in);
  return l.setFullYear(l.getFullYear(), 0, 1), l.setHours(0, 0, 0, 0), l;
}
function OE(n, a) {
  const { start: l, end: o } = Bb(a?.in, n);
  let s = +l > +o;
  const u = s ? +l : +o, d = s ? o : l;
  d.setHours(0, 0, 0, 0), d.setMonth(0, 1);
  let m = 1;
  const h = [];
  for (; +d <= u; )
    h.push(Ke(l, d)), d.setFullYear(d.getFullYear() + m);
  return s ? h.reverse() : h;
}
function Lb(n, a) {
  const l = Gr(), o = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, s = Be(n, a?.in), u = s.getDay(), d = (u < o ? -7 : 0) + 6 - (u - o);
  return s.setDate(s.getDate() + d), s.setHours(23, 59, 59, 999), s;
}
function ME(n, a) {
  return Lb(n, { ...a, weekStartsOn: 1 });
}
const DE = {
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
}, _E = (n, a, l) => {
  let o;
  const s = DE[n];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", a.toString()), l?.addSuffix ? l.comparison && l.comparison > 0 ? "in " + o : o + " ago" : o;
};
function qo(n) {
  return (a = {}) => {
    const l = a.width ? String(a.width) : n.defaultWidth;
    return n.formats[l] || n.formats[n.defaultWidth];
  };
}
const NE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, AE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, RE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, kE = {
  date: qo({
    formats: NE,
    defaultWidth: "full"
  }),
  time: qo({
    formats: AE,
    defaultWidth: "full"
  }),
  dateTime: qo({
    formats: RE,
    defaultWidth: "full"
  })
}, jE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zE = (n, a, l, o) => jE[n];
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
    const u = n.argumentCallback ? n.argumentCallback(a) : a;
    return s[u];
  };
}
const HE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, YE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, BE = {
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
}, UE = {
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
}, LE = {
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
}, qE = {
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
}, PE = (n, a) => {
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
}, GE = {
  ordinalNumber: PE,
  era: Bn({
    values: HE,
    defaultWidth: "wide"
  }),
  quarter: Bn({
    values: YE,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Bn({
    values: BE,
    defaultWidth: "wide"
  }),
  day: Bn({
    values: UE,
    defaultWidth: "wide"
  }),
  dayPeriod: Bn({
    values: LE,
    defaultWidth: "wide",
    formattingValues: qE,
    defaultFormattingWidth: "wide"
  })
};
function Un(n) {
  return (a, l = {}) => {
    const o = l.width, s = o && n.matchPatterns[o] || n.matchPatterns[n.defaultMatchWidth], u = a.match(s);
    if (!u)
      return null;
    const d = u[0], m = o && n.parsePatterns[o] || n.parsePatterns[n.defaultParseWidth], h = Array.isArray(m) ? VE(m, (v) => v.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      WE(m, (v) => v.test(d))
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
function WE(n, a) {
  for (const l in n)
    if (Object.prototype.hasOwnProperty.call(n, l) && a(n[l]))
      return l;
}
function VE(n, a) {
  for (let l = 0; l < n.length; l++)
    if (a(n[l]))
      return l;
}
function qb(n) {
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
const XE = /^(\d+)(th|st|nd|rd)?/i, FE = /\d+/i, QE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ZE = {
  any: [/^b/i, /^(a|c)/i]
}, IE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, $E = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, KE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, JE = {
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
}, eT = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tT = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, nT = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, aT = {
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
}, rT = {
  ordinalNumber: qb({
    matchPattern: XE,
    parsePattern: FE,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Un({
    matchPatterns: QE,
    defaultMatchWidth: "wide",
    parsePatterns: ZE,
    defaultParseWidth: "any"
  }),
  quarter: Un({
    matchPatterns: IE,
    defaultMatchWidth: "wide",
    parsePatterns: $E,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Un({
    matchPatterns: KE,
    defaultMatchWidth: "wide",
    parsePatterns: JE,
    defaultParseWidth: "any"
  }),
  day: Un({
    matchPatterns: eT,
    defaultMatchWidth: "wide",
    parsePatterns: tT,
    defaultParseWidth: "any"
  }),
  dayPeriod: Un({
    matchPatterns: nT,
    defaultMatchWidth: "any",
    parsePatterns: aT,
    defaultParseWidth: "any"
  })
}, jr = {
  code: "en-US",
  formatDistance: _E,
  formatLong: kE,
  formatRelative: zE,
  localize: GE,
  match: rT,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function oT(n, a) {
  const l = Be(n, a?.in);
  return Ud(l, Ub(l)) + 1;
}
function Is(n, a) {
  const l = Be(n, a?.in), o = +Hr(l) - +gE(l);
  return Math.round(o / Rb) + 1;
}
function Ld(n, a) {
  const l = Be(n, a?.in), o = l.getFullYear(), s = Gr(), u = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, d = Ke(a?.in || n, 0);
  d.setFullYear(o + 1, 0, u), d.setHours(0, 0, 0, 0);
  const m = _n(d, a), h = Ke(a?.in || n, 0);
  h.setFullYear(o, 0, u), h.setHours(0, 0, 0, 0);
  const p = _n(h, a);
  return +l >= +m ? o + 1 : +l >= +p ? o : o - 1;
}
function lT(n, a) {
  const l = Gr(), o = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, s = Ld(n, a), u = Ke(a?.in || n, 0);
  return u.setFullYear(s, 0, o), u.setHours(0, 0, 0, 0), _n(u, a);
}
function $s(n, a) {
  const l = Be(n, a?.in), o = +_n(l, a) - +lT(l, a);
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
}, ko = {
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
    const s = Ld(n, o), u = s > 0 ? s : 1 - s;
    if (a === "YY") {
      const d = u % 100;
      return $e(d, 2);
    }
    return a === "Yo" ? l.ordinalNumber(u, { unit: "year" }) : $e(u, a.length);
  },
  // ISO week-numbering year
  R: function(n, a) {
    const l = jb(n);
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
    const s = $s(n, o);
    return a === "wo" ? l.ordinalNumber(s, { unit: "week" }) : $e(s, a.length);
  },
  // ISO week of year
  I: function(n, a, l) {
    const o = Is(n);
    return a === "Io" ? l.ordinalNumber(o, { unit: "week" }) : $e(o, a.length);
  },
  // Day of the month
  d: function(n, a, l) {
    return a === "do" ? l.ordinalNumber(n.getDate(), { unit: "date" }) : er.d(n, a);
  },
  // Day of year
  D: function(n, a, l) {
    const o = oT(n);
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
        return Uy(o);
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
        return Uy(o);
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
        return "GMT" + By(o, ":");
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
        return "GMT" + By(o, ":");
      default:
        return "GMT" + kr(o, ":");
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
function By(n, a = "") {
  const l = n > 0 ? "-" : "+", o = Math.abs(n), s = Math.trunc(o / 60), u = o % 60;
  return u === 0 ? l + String(s) : l + String(s) + a + $e(u, 2);
}
function Uy(n, a) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + $e(Math.abs(n) / 60, 2) : kr(n, a);
}
function kr(n, a = "") {
  const l = n > 0 ? "-" : "+", o = Math.abs(n), s = $e(Math.trunc(o / 60), 2), u = $e(o % 60, 2);
  return l + s + a + u;
}
const Ly = (n, a) => {
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
}, Pb = (n, a) => {
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
}, iT = (n, a) => {
  const l = n.match(/(P+)(p+)?/) || [], o = l[1], s = l[2];
  if (!s)
    return Ly(n, a);
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
  return u.replace("{{date}}", Ly(o, a)).replace("{{time}}", Pb(s, a));
}, id = {
  p: Pb,
  P: iT
}, sT = /^D+$/, cT = /^Y+$/, uT = ["D", "DD", "YY", "YYYY"];
function Gb(n) {
  return sT.test(n);
}
function Wb(n) {
  return cT.test(n);
}
function sd(n, a, l) {
  const o = fT(n, a, l);
  if (console.warn(o), uT.includes(n)) throw new RangeError(o);
}
function fT(n, a, l) {
  const o = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${o} to the input \`${l}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const dT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, mT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, hT = /^'([^]*?)'?$/, pT = /''/g, gT = /[a-zA-Z]/;
function tr(n, a, l) {
  const o = Gr(), s = l?.locale ?? o.locale ?? jr, u = l?.firstWeekContainsDate ?? l?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, d = l?.weekStartsOn ?? l?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, m = Be(n, l?.in);
  if (!Hb(m))
    throw new RangeError("Invalid time value");
  let h = a.match(mT).map((b) => {
    const v = b[0];
    if (v === "p" || v === "P") {
      const S = id[v];
      return S(b, s.formatLong);
    }
    return b;
  }).join("").match(dT).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const v = b[0];
    if (v === "'")
      return { isToken: !1, value: yT(b) };
    if (Yy[v])
      return { isToken: !0, value: b };
    if (v.match(gT))
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
    (!l?.useAdditionalWeekYearTokens && Wb(v) || !l?.useAdditionalDayOfYearTokens && Gb(v)) && sd(v, a, String(n));
    const S = Yy[v[0]];
    return S(m, v, s.localize, p);
  }).join("");
}
function yT(n) {
  const a = n.match(hT);
  return a ? a[1].replace(pT, "'") : n;
}
function vT(n, a) {
  const l = Be(n, a?.in), o = l.getFullYear(), s = l.getMonth(), u = Ke(l, 0);
  return u.setFullYear(o, s + 1, 0), u.setHours(0, 0, 0, 0), u.getDate();
}
function bT() {
  return Object.assign({}, Gr());
}
function xT(n, a) {
  const l = Be(n, a?.in).getDay();
  return l === 0 ? 7 : l;
}
function wT(n, a) {
  return Be(n, a?.in).getMonth();
}
function ST(n, a) {
  return Be(n, a?.in).getFullYear();
}
function CT(n, a) {
  return +Be(n) > +Be(a);
}
function ET(n, a) {
  return +Be(n) < +Be(a);
}
function TT(n, a) {
  const l = OT(a) ? new a(0) : Ke(a, 0);
  return l.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), l.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), l;
}
function OT(n) {
  return typeof n == "function" && n.prototype?.constructor === n;
}
const MT = 10;
class Vb {
  subPriority = 0;
  validate(a, l) {
    return !0;
  }
}
class DT extends Vb {
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
class _T extends Vb {
  priority = MT;
  subPriority = -1;
  constructor(a, l) {
    super(), this.context = a || ((o) => Ke(l, o));
  }
  set(a, l) {
    return l.timestampIsSet ? a : Ke(a, TT(a, this.context));
  }
}
class Xe {
  run(a, l, o, s) {
    const u = this.parse(a, l, o, s);
    return u ? {
      setter: new DT(
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
class NT extends Xe {
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
    value: o * (s * mE + u * dE + d * hE),
    rest: a.slice(l[0].length)
  };
}
function Xb(n) {
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
function Us(n, a) {
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
function Fb(n, a) {
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
function Qb(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class AT extends Xe {
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
      const d = Fb(
        o.year,
        s
      );
      return a.setFullYear(d, 0, 1), a.setHours(0, 0, 0, 0), a;
    }
    const u = !("era" in l) || l.era === 1 ? o.year : 1 - o.year;
    return a.setFullYear(u, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class RT extends Xe {
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
    const u = Ld(a, s);
    if (o.isTwoDigitYear) {
      const m = Fb(
        o.year,
        u
      );
      return a.setFullYear(
        m,
        0,
        s.firstWeekContainsDate
      ), a.setHours(0, 0, 0, 0), _n(a, s);
    }
    const d = !("era" in l) || l.era === 1 ? o.year : 1 - o.year;
    return a.setFullYear(d, 0, s.firstWeekContainsDate), a.setHours(0, 0, 0, 0), _n(a, s);
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
class kT extends Xe {
  priority = 130;
  parse(a, l) {
    return Us(l === "R" ? 4 : l.length, a);
  }
  set(a, l, o) {
    const s = Ke(a, 0);
    return s.setFullYear(o, 0, 4), s.setHours(0, 0, 0, 0), Hr(s);
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
class jT extends Xe {
  priority = 130;
  parse(a, l) {
    return Us(l === "u" ? 4 : l.length, a);
  }
  set(a, l, o) {
    return a.setFullYear(o, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class zT extends Xe {
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
class HT extends Xe {
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
class YT extends Xe {
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
class BT extends Xe {
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
function UT(n, a, l) {
  const o = Be(n, l?.in), s = $s(o, l) - a;
  return o.setDate(o.getDate() - s * 7), Be(o, l?.in);
}
class LT extends Xe {
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
    return _n(UT(a, o, s), s);
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
function qT(n, a, l) {
  const o = Be(n, l?.in), s = Is(o, l) - a;
  return o.setDate(o.getDate() - s * 7), o;
}
class PT extends Xe {
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
    return Hr(qT(a, o));
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
const GT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], WT = [
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
class VT extends Xe {
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
    const o = a.getFullYear(), s = Qb(o), u = a.getMonth();
    return s ? l >= 1 && l <= WT[u] : l >= 1 && l <= GT[u];
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
class XT extends Xe {
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
    return Qb(o) ? l >= 1 && l <= 366 : l >= 1 && l <= 365;
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
  const o = Gr(), s = l?.weekStartsOn ?? l?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, u = Be(n, l?.in), d = u.getDay(), h = (a % 7 + 7) % 7, p = 7 - s, b = a < 0 || a > 6 ? a - (d + p) % 7 : (h + p) % 7 - (d + p) % 7;
  return Zs(u, b, l);
}
class FT extends Xe {
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
class QT extends Xe {
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
class ZT extends Xe {
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
function IT(n, a, l) {
  const o = Be(n, l?.in), s = xT(o, l), u = a - s;
  return Zs(o, u, l);
}
class $T extends Xe {
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
    return a = IT(a, o), a.setHours(0, 0, 0, 0), a;
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
class KT extends Xe {
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
class JT extends Xe {
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
class eO extends Xe {
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
class tO extends Xe {
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
class nO extends Xe {
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
class aO extends Xe {
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
class rO extends Xe {
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
class oO extends Xe {
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
class lO extends Xe {
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
class iO extends Xe {
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
class sO extends Xe {
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
class cO extends Xe {
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
class uO extends Xe {
  priority = 40;
  parse(a) {
    return Xb(a);
  }
  set(a, l, o) {
    return [Ke(a, o * 1e3), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
class fO extends Xe {
  priority = 20;
  parse(a) {
    return Xb(a);
  }
  set(a, l, o) {
    return [Ke(a, o), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
const dO = {
  G: new NT(),
  y: new AT(),
  Y: new RT(),
  R: new kT(),
  u: new jT(),
  Q: new zT(),
  q: new HT(),
  M: new YT(),
  L: new BT(),
  w: new LT(),
  I: new PT(),
  d: new VT(),
  D: new XT(),
  E: new FT(),
  e: new QT(),
  c: new ZT(),
  i: new $T(),
  a: new KT(),
  b: new JT(),
  B: new eO(),
  h: new tO(),
  H: new nO(),
  K: new aO(),
  k: new rO(),
  m: new oO(),
  s: new lO(),
  S: new iO(),
  X: new sO(),
  x: new cO(),
  t: new uO(),
  T: new fO()
}, mO = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hO = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, pO = /^'([^]*?)'?$/, gO = /''/g, yO = /\S/, vO = /[a-zA-Z]/;
function bO(n, a, l, o) {
  const s = () => Ke(l, NaN), u = bT(), d = u.locale ?? jr, m = u.firstWeekContainsDate ?? u.locale?.options?.firstWeekContainsDate ?? 1, h = u.weekStartsOn ?? u.locale?.options?.weekStartsOn ?? 0, p = {
    firstWeekContainsDate: m,
    weekStartsOn: h,
    locale: d
  }, b = [new _T(o?.in, l)], v = a.match(hO).map((C) => {
    const D = C[0];
    if (D in id) {
      const _ = id[D];
      return _(C, d.formatLong);
    }
    return C;
  }).join("").match(mO), S = [];
  for (let C of v) {
    Wb(C) && sd(C, a, n), Gb(C) && sd(C, a, n);
    const D = C[0], _ = dO[D];
    if (_) {
      const { incompatibleTokens: M } = _;
      if (Array.isArray(M)) {
        const z = S.find(
          (R) => M.includes(R.token) || R.token === D
        );
        if (z)
          throw new RangeError(
            `The format string mustn't contain \`${z.fullToken}\` and \`${C}\` at the same time`
          );
      } else if (_.incompatibleTokens === "*" && S.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${C}\` and any other token at the same time`
        );
      S.push({ token: D, fullToken: C });
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
      if (D.match(vO))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + D + "`"
        );
      if (C === "''" ? C = "'" : D === "'" && (C = xO(C)), n.indexOf(C) === 0)
        n = n.slice(C.length);
      else
        return s();
    }
  }
  if (n.length > 0 && yO.test(n))
    return s();
  const T = b.map((C) => C.priority).sort((C, D) => D - C).filter((C, D, _) => _.indexOf(C) === D).map(
    (C) => b.filter((D) => D.priority === C).sort((D, _) => _.subPriority - D.subPriority)
  ).map((C) => C[0]);
  let E = Be(l, o?.in);
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
function xO(n) {
  return n.match(pO)[1].replace(gO, "'");
}
function wO(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  );
  return +_n(o, l) == +_n(s, l);
}
function SO(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  );
  return o.getFullYear() === s.getFullYear() && o.getMonth() === s.getMonth();
}
function CO(n, a, l) {
  const [o, s] = Wr(
    l?.in,
    n,
    a
  );
  return o.getFullYear() === s.getFullYear();
}
function EO(n, a, l) {
  const o = Be(n, l?.in), s = o.getFullYear(), u = o.getDate(), d = Ke(n, 0);
  d.setFullYear(s, a, 15), d.setHours(0, 0, 0, 0);
  const m = vT(d);
  return o.setMonth(a, Math.min(u, m)), o;
}
function TO(n, a, l) {
  const o = Be(n, l?.in);
  return isNaN(+o) ? Ke(n, NaN) : (o.setFullYear(a), o);
}
const OO = {
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
}, MO = (n, a, l) => {
  let o;
  const s = OO[n];
  return typeof s == "string" ? o = s : a === 1 ? o = s.one : o = s.other.replace("{{count}}", String(a)), l?.addSuffix ? l.comparison && l.comparison > 0 ? o + "内" : o + "前" : o;
}, DO = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, _O = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, NO = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, AO = {
  date: qo({
    formats: DO,
    defaultWidth: "full"
  }),
  time: qo({
    formats: _O,
    defaultWidth: "full"
  }),
  dateTime: qo({
    formats: NO,
    defaultWidth: "full"
  })
};
function qy(n, a, l) {
  const o = "eeee p";
  return wO(n, a, l) ? o : n.getTime() > a.getTime() ? "'下个'" + o : "'上个'" + o;
}
const RO = {
  lastWeek: qy,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: qy,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, kO = (n, a, l, o) => {
  const s = RO[n];
  return typeof s == "function" ? s(a, l, o) : s;
}, jO = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, zO = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, HO = {
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
}, YO = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, BO = {
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
}, UO = {
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
}, LO = (n, a) => {
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
}, qO = {
  ordinalNumber: LO,
  era: Bn({
    values: jO,
    defaultWidth: "wide"
  }),
  quarter: Bn({
    values: zO,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Bn({
    values: HO,
    defaultWidth: "wide"
  }),
  day: Bn({
    values: YO,
    defaultWidth: "wide"
  }),
  dayPeriod: Bn({
    values: BO,
    defaultWidth: "wide",
    formattingValues: UO,
    defaultFormattingWidth: "wide"
  })
}, PO = /^(第\s*)?\d+(日|时|分|秒)?/i, GO = /\d+/i, WO = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, VO = {
  any: [/^(前)/i, /^(公元)/i]
}, XO = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, FO = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, QO = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i
}, ZO = {
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
}, IO = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, $O = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, KO = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, JO = {
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
}, eM = {
  ordinalNumber: qb({
    matchPattern: PO,
    parsePattern: GO,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Un({
    matchPatterns: WO,
    defaultMatchWidth: "wide",
    parsePatterns: VO,
    defaultParseWidth: "any"
  }),
  quarter: Un({
    matchPatterns: XO,
    defaultMatchWidth: "wide",
    parsePatterns: FO,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Un({
    matchPatterns: QO,
    defaultMatchWidth: "wide",
    parsePatterns: ZO,
    defaultParseWidth: "any"
  }),
  day: Un({
    matchPatterns: IO,
    defaultMatchWidth: "wide",
    parsePatterns: $O,
    defaultParseWidth: "any"
  }),
  dayPeriod: Un({
    matchPatterns: KO,
    defaultMatchWidth: "any",
    parsePatterns: JO,
    defaultParseWidth: "any"
  })
}, tM = {
  code: "zh-CN",
  formatDistance: MO,
  formatLong: AO,
  formatRelative: kO,
  localize: qO,
  match: eM,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function nM(n, a, l = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: n,
    timeZoneName: l
  }).format(a).split(/\s/g).slice(2).join(" ");
}
const aM = {}, Xl = {};
function ga(n, a) {
  try {
    const o = (aM[n] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: n,
      timeZoneName: "longOffset"
    }).format)(a).split("GMT")[1];
    return o in Xl ? Xl[o] : Py(o, o.split(":"));
  } catch {
    if (n in Xl) return Xl[n];
    const l = n?.match(rM);
    return l ? Py(n, l.slice(1)) : NaN;
  }
}
const rM = /([+-]\d\d):?(\d\d)?/;
function Py(n, a) {
  const l = +(a[0] || 0), o = +(a[1] || 0), s = +(a[2] || 0) / 60;
  return Xl[n] = l * 60 + o > 0 ? l * 60 + o + s : l * 60 - o - s;
}
class Gn extends Date {
  //#region static
  constructor(...a) {
    super(), a.length > 1 && typeof a[a.length - 1] == "string" && (this.timeZone = a.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(ga(this.timeZone, this)) ? this.setTime(NaN) : a.length ? typeof a[0] == "number" && (a.length === 1 || a.length === 2 && typeof a[1] != "number") ? this.setTime(a[0]) : typeof a[0] == "string" ? this.setTime(+new Date(a[0])) : a[0] instanceof Date ? this.setTime(+a[0]) : (this.setTime(+new Date(...a)), Zb(this, a)) : this.setTime(Date.now());
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
    const a = -ga(this.timeZone, this);
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
const Gy = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((n) => {
  if (!Gy.test(n)) return;
  const a = n.replace(Gy, "$1UTC");
  Gn.prototype[a] && (n.startsWith("get") ? Gn.prototype[n] = function() {
    return this.internal[a]();
  } : (Gn.prototype[n] = function() {
    return Date.prototype[a].apply(this.internal, arguments), oM(this), +this;
  }, Gn.prototype[a] = function() {
    return Date.prototype[a].apply(this, arguments), Ls(this), +this;
  }));
});
function Ls(n) {
  n.internal.setTime(+n), n.internal.setUTCSeconds(n.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-ga(n.timeZone, n) * 60));
}
function oM(n) {
  Date.prototype.setFullYear.call(n, n.internal.getUTCFullYear(), n.internal.getUTCMonth(), n.internal.getUTCDate()), Date.prototype.setHours.call(n, n.internal.getUTCHours(), n.internal.getUTCMinutes(), n.internal.getUTCSeconds(), n.internal.getUTCMilliseconds()), Zb(n);
}
function Zb(n, a) {
  const l = Array.isArray(a) ? lM(a) : +n.internal, o = ga(n.timeZone, n), s = o > 0 ? Math.floor(o) : Math.ceil(o), u = /* @__PURE__ */ new Date(+n);
  u.setUTCHours(u.getUTCHours() - 1);
  const d = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset(), m = -(/* @__PURE__ */ new Date(+u)).getTimezoneOffset(), h = d - m;
  let p = d;
  if (h && d !== s) {
    const Z = Date.prototype.getHours.apply(n), ee = Array.isArray(a) ? a[3] || 0 : n.internal.getUTCHours();
    if (Z !== ee) {
      const ae = /* @__PURE__ */ new Date(+n), ne = d - s;
      ne && ae.setUTCMinutes(ae.getUTCMinutes() + ne);
      const I = ga(n.timeZone, ae);
      (I > 0 ? Math.floor(I) : Math.ceil(I)) === s && (p = m);
    }
  }
  const b = p - s;
  b && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + b);
  const v = /* @__PURE__ */ new Date(+n);
  v.setUTCSeconds(0);
  const S = d > 0 ? v.getSeconds() : (v.getSeconds() - 60) % 60, T = Math.round(-(ga(n.timeZone, n) * 60)) % 60;
  (T || S) && Date.prototype.setUTCSeconds.call(n, Date.prototype.getUTCSeconds.call(n) + T + S);
  const E = ga(n.timeZone, n), O = E > 0 ? Math.floor(E) : Math.ceil(E), D = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset() - O, _ = O !== s, M = D - b, N = O - s, z = l - O * 60 * 1e3, R = N > 0 && Wy(n) - l === N * 60 * 1e3 && Wy(n, z) !== l;
  if (_ && M && !R) {
    Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + M);
    const Z = ga(n.timeZone, n), ee = Z > 0 ? Math.floor(Z) : Math.ceil(Z), ae = O - ee;
    ae && M < 0 && Date.prototype.setUTCMinutes.call(n, Date.prototype.getUTCMinutes.call(n) + ae);
  }
  Ls(n);
  const U = (a ? l : l + T * 1e3) - +n.internal;
  U && Math.abs(U) < 1800 * 1e3 && (Date.prototype.setTime.call(n, +n + U), Ls(n));
}
function lM(n) {
  return Date.UTC(n[0], n.length > 1 ? n[1] : 0, n.length > 2 ? n[2] : 1, ...n.slice(3));
}
function Wy(n, a) {
  const l = new Date(a ?? +n);
  return l.setUTCSeconds(l.getUTCSeconds() - Math.round(-ga(n.timeZone, l) * 60)), +l;
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
    return `${a} GMT${l}${o}${s} (${nM(this.timeZone, this)})`;
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
const Vy = 5, iM = 4;
function sM(n, a) {
  const l = a.startOfMonth(n), o = l.getDay() > 0 ? l.getDay() : 7, s = a.addDays(n, -o + 1), u = a.addDays(s, Vy * 7 - 1);
  return a.getMonth(n) === a.getMonth(u) ? Vy : iM;
}
function Ib(n, a) {
  const l = a.startOfMonth(n), o = l.getDay();
  return o === 1 ? l : o === 0 ? a.addDays(l, -6) : a.addDays(l, -1 * (o - 1));
}
function cM(n, a) {
  const l = Ib(n, a), o = sM(n, a);
  return a.addDays(l, o * 7 - 1);
}
const $b = {
  ...jr,
  labels: {
    labelDayButton: (n, a, l, o) => {
      let s;
      o && typeof o.format == "function" ? s = o.format.bind(o) : s = (d, m) => tr(d, m, { locale: jr, ...l });
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
      return l && typeof l.format == "function" ? o = l.format.bind(l) : o = (s, u) => tr(s, u, { locale: jr, ...a }), o(n, "LLLL yyyy");
    },
    labelGridcell: (n, a, l, o) => {
      let s;
      o && typeof o.format == "function" ? s = o.format.bind(o) : s = (d, m) => tr(d, m, { locale: jr, ...l });
      let u = s(n, "PPPP");
      return a?.today && (u = `Today, ${u}`), u;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (n, a, l) => {
      let o;
      return l && typeof l.format == "function" ? o = l.format.bind(l) : o = (s, u) => tr(s, u, { locale: jr, ...a }), o(n, "cccc");
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
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Lt.tz(this.options.timeZone) : new this.Date(), this.newDate = (o, s, u) => this.overrides?.newDate ? this.overrides.newDate(o, s, u) : this.options.timeZone ? new Lt(o, s, u, this.options.timeZone) : new Date(o, s, u), this.addDays = (o, s) => this.overrides?.addDays ? this.overrides.addDays(o, s) : Zs(o, s), this.addMonths = (o, s) => this.overrides?.addMonths ? this.overrides.addMonths(o, s) : kb(o, s), this.addWeeks = (o, s) => this.overrides?.addWeeks ? this.overrides.addWeeks(o, s) : yE(o, s), this.addYears = (o, s) => this.overrides?.addYears ? this.overrides.addYears(o, s) : vE(o, s), this.differenceInCalendarDays = (o, s) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(o, s) : Ud(o, s), this.differenceInCalendarMonths = (o, s) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(o, s) : Yb(o, s), this.eachMonthOfInterval = (o) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(o) : CE(o), this.eachYearOfInterval = (o) => {
      const s = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(o) : OE(o), u = new Set(s.map((m) => this.getYear(m)));
      if (u.size === s.length)
        return s;
      const d = [];
      return u.forEach((m) => {
        d.push(new Date(m, 0, 1));
      }), d;
    }, this.endOfBroadcastWeek = (o) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(o) : cM(o, this), this.endOfISOWeek = (o) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(o) : ME(o), this.endOfMonth = (o) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(o) : SE(o), this.endOfWeek = (o, s) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(o, s) : Lb(o, this.options), this.endOfYear = (o) => this.overrides?.endOfYear ? this.overrides.endOfYear(o) : TE(o), this.format = (o, s, u) => {
      const d = this.overrides?.format ? this.overrides.format(o, s, this.options) : tr(o, s, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(d) : d;
    }, this.getISOWeek = (o) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(o) : Is(o), this.getMonth = (o, s) => this.overrides?.getMonth ? this.overrides.getMonth(o, this.options) : wT(o, this.options), this.getYear = (o, s) => this.overrides?.getYear ? this.overrides.getYear(o, this.options) : ST(o, this.options), this.getWeek = (o, s) => this.overrides?.getWeek ? this.overrides.getWeek(o, this.options) : $s(o, this.options), this.isAfter = (o, s) => this.overrides?.isAfter ? this.overrides.isAfter(o, s) : CT(o, s), this.isBefore = (o, s) => this.overrides?.isBefore ? this.overrides.isBefore(o, s) : ET(o, s), this.isDate = (o) => this.overrides?.isDate ? this.overrides.isDate(o) : zb(o), this.isSameDay = (o, s) => this.overrides?.isSameDay ? this.overrides.isSameDay(o, s) : wE(o, s), this.isSameMonth = (o, s) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(o, s) : SO(o, s), this.isSameYear = (o, s) => this.overrides?.isSameYear ? this.overrides.isSameYear(o, s) : CO(o, s), this.max = (o) => this.overrides?.max ? this.overrides.max(o) : bE(o), this.min = (o) => this.overrides?.min ? this.overrides.min(o) : xE(o), this.setMonth = (o, s) => this.overrides?.setMonth ? this.overrides.setMonth(o, s) : EO(o, s), this.setYear = (o, s) => this.overrides?.setYear ? this.overrides.setYear(o, s) : TO(o, s), this.startOfBroadcastWeek = (o, s) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(o, this) : Ib(o, this), this.startOfDay = (o) => this.overrides?.startOfDay ? this.overrides.startOfDay(o) : Fl(o), this.startOfISOWeek = (o) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(o) : Hr(o), this.startOfMonth = (o) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(o) : EE(o), this.startOfWeek = (o, s) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(o, this.options) : _n(o, this.options), this.startOfYear = (o) => this.overrides?.startOfYear ? this.overrides.startOfYear(o) : Ub(o), this.options = { locale: $b, ...a }, this.overrides = l;
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
    const { locale: l, timeZone: o, numerals: s } = this.options, u = l?.code;
    if (u && Bt.yearFirstLocales.has(u))
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
const Fn = new Bt(), uM = {
  ...tM,
  labels: {
    labelDayButton: (n, a, l, o) => {
      let u = (o ?? new Bt(l)).format(n, "PPPP");
      return a.today && (u = `今天，${u}`), a.selected && (u = `${u}，已选择`), u;
    },
    labelMonthDropdown: "选择月份",
    labelNext: "前往下个月",
    labelPrevious: "前往上个月",
    labelWeekNumber: (n) => `第 ${n} 周`,
    labelYearDropdown: "选择年份",
    labelGrid: (n, a, l) => (l ?? new Bt(a)).formatMonthYear(n),
    labelGridcell: (n, a, l, o) => {
      let u = (o ?? new Bt(l)).format(n, "PPPP");
      return a?.today && (u = `今天，${u}`), u;
    },
    labelNav: "导航栏",
    labelWeekNumberHeader: "周数",
    labelWeekday: (n, a, l) => (l ?? new Bt(a)).format(n, "cccc")
  }
};
const fM = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), dM = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, l, o) => o ? o.toUpperCase() : l.toLowerCase()
), Xy = (n) => {
  const a = dM(n);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, Kb = (...n) => n.filter((a, l, o) => !!a && a.trim() !== "" && o.indexOf(a) === l).join(" ").trim(), mM = (n) => {
  for (const a in n)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
};
var hM = {
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
const pM = x.forwardRef(
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
      ...hM,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: o ? Number(l) * 24 / Number(a) : l,
      className: Kb("lucide", s),
      ...!u && !mM(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...d.map(([p, b]) => x.createElement(p, b)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
const Nn = (n, a) => {
  const l = x.forwardRef(
    ({ className: o, ...s }, u) => x.createElement(pM, {
      ref: u,
      iconNode: a,
      className: Kb(
        `lucide-${fM(Xy(n))}`,
        `lucide-${n}`,
        o
      ),
      ...s
    })
  );
  return l.displayName = Xy(n), l;
};
const gM = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], yM = Nn("calendar", gM);
const vM = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], cd = Nn("check", vM);
const bM = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Gd = Nn("chevron-down", bM);
const xM = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], wM = Nn("chevron-left", xM);
const SM = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], CM = Nn("chevron-right", SM);
const EM = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], TM = Nn("chevron-up", EM);
const OM = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], MM = Nn("clock-3", OM);
const DM = [["path", { d: "M5 12h14", key: "1ays0h" }]], _M = Nn("minus", DM);
const NM = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], AM = Nn("refresh-cw", NM);
const RM = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Fy = Nn("search", RM);
const kM = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Jb = Nn("x", kM);
class e0 {
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
class jM {
  constructor(a, l) {
    this.date = a, this.weeks = l;
  }
}
class zM {
  constructor(a, l) {
    this.days = l, this.weekNumber = a;
  }
}
function HM(n) {
  return ce.createElement("button", { ...n });
}
function YM(n) {
  return ce.createElement("span", { ...n });
}
function BM(n) {
  const { size: a = 24, orientation: l = "left", className: o } = n;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    ce.createElement(
      "svg",
      { className: o, width: a, height: a, viewBox: "0 0 24 24" },
      l === "up" && ce.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      l === "down" && ce.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      l === "left" && ce.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      l === "right" && ce.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function UM(n) {
  const { day: a, modifiers: l, ...o } = n;
  return ce.createElement("td", { ...o });
}
function LM(n) {
  const { day: a, modifiers: l, ...o } = n, s = ce.useRef(null);
  return ce.useEffect(() => {
    l.focused && s.current?.focus();
  }, [l.focused]), ce.createElement("button", { ref: s, ...o });
}
var pe;
(function(n) {
  n.Root = "root", n.Chevron = "chevron", n.Day = "day", n.DayButton = "day_button", n.CaptionLabel = "caption_label", n.Dropdowns = "dropdowns", n.Dropdown = "dropdown", n.DropdownRoot = "dropdown_root", n.Footer = "footer", n.MonthGrid = "month_grid", n.MonthCaption = "month_caption", n.MonthsDropdown = "months_dropdown", n.Month = "month", n.Months = "months", n.Nav = "nav", n.NextMonthButton = "button_next", n.PreviousMonthButton = "button_previous", n.Week = "week", n.Weeks = "weeks", n.Weekday = "weekday", n.Weekdays = "weekdays", n.WeekNumber = "week_number", n.WeekNumberHeader = "week_number_header", n.YearsDropdown = "years_dropdown";
})(pe || (pe = {}));
var st;
(function(n) {
  n.disabled = "disabled", n.hidden = "hidden", n.outside = "outside", n.focused = "focused", n.today = "today";
})(st || (st = {}));
var Mn;
(function(n) {
  n.range_end = "range_end", n.range_middle = "range_middle", n.range_start = "range_start", n.selected = "selected";
})(Mn || (Mn = {}));
var ln;
(function(n) {
  n.weeks_before_enter = "weeks_before_enter", n.weeks_before_exit = "weeks_before_exit", n.weeks_after_enter = "weeks_after_enter", n.weeks_after_exit = "weeks_after_exit", n.caption_after_enter = "caption_after_enter", n.caption_after_exit = "caption_after_exit", n.caption_before_enter = "caption_before_enter", n.caption_before_exit = "caption_before_exit";
})(ln || (ln = {}));
function qM(n) {
  const { options: a, className: l, components: o, classNames: s, ...u } = n, d = [s[pe.Dropdown], l].join(" "), m = a?.find(({ value: h }) => h === u.value);
  return ce.createElement(
    "span",
    { "data-disabled": u.disabled, className: s[pe.DropdownRoot] },
    ce.createElement(o.Select, { className: d, ...u }, a?.map(({ value: h, label: p, disabled: b }) => ce.createElement(o.Option, { key: h, value: h, disabled: b }, p))),
    ce.createElement(
      "span",
      { className: s[pe.CaptionLabel], "aria-hidden": !0 },
      m?.label,
      ce.createElement(o.Chevron, { orientation: "down", size: 18, className: s[pe.Chevron] })
    )
  );
}
function PM(n) {
  return ce.createElement("div", { ...n });
}
function GM(n) {
  return ce.createElement("div", { ...n });
}
function WM(n) {
  const { calendarMonth: a, displayIndex: l, ...o } = n;
  return ce.createElement("div", { ...o }, n.children);
}
function VM(n) {
  const { calendarMonth: a, displayIndex: l, ...o } = n;
  return ce.createElement("div", { ...o });
}
function XM(n) {
  return ce.createElement("table", { ...n });
}
function FM(n) {
  return ce.createElement("div", { ...n });
}
const t0 = x.createContext(void 0);
function ei() {
  const n = x.useContext(t0);
  if (n === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return n;
}
function QM(n) {
  const { components: a } = ei();
  return ce.createElement(a.Dropdown, { ...n });
}
function ZM(n) {
  const { onPreviousClick: a, onNextClick: l, previousMonth: o, nextMonth: s, ...u } = n, { components: d, classNames: m, labels: { labelPrevious: h, labelNext: p } } = ei(), b = x.useCallback((S) => {
    s && l?.(S);
  }, [s, l]), v = x.useCallback((S) => {
    o && a?.(S);
  }, [o, a]);
  return ce.createElement(
    "nav",
    { ...u },
    ce.createElement(
      d.PreviousMonthButton,
      { type: "button", className: m[pe.PreviousMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": h(o), onClick: v },
      ce.createElement(d.Chevron, { disabled: o ? void 0 : !0, className: m[pe.Chevron], orientation: "left" })
    ),
    ce.createElement(
      d.NextMonthButton,
      { type: "button", className: m[pe.NextMonthButton], tabIndex: s ? void 0 : -1, "aria-disabled": s ? void 0 : !0, "aria-label": p(s), onClick: b },
      ce.createElement(d.Chevron, { disabled: s ? void 0 : !0, orientation: "right", className: m[pe.Chevron] })
    )
  );
}
function IM(n) {
  const { components: a } = ei();
  return ce.createElement(a.Button, { ...n });
}
function $M(n) {
  return ce.createElement("option", { ...n });
}
function KM(n) {
  const { components: a } = ei();
  return ce.createElement(a.Button, { ...n });
}
function JM(n) {
  const { rootRef: a, ...l } = n;
  return ce.createElement("div", { ...l, ref: a });
}
function eD(n) {
  return ce.createElement("select", { ...n });
}
function tD(n) {
  const { week: a, ...l } = n;
  return ce.createElement("tr", { ...l });
}
function nD(n) {
  return ce.createElement("th", { ...n });
}
function aD(n) {
  return ce.createElement(
    "thead",
    { "aria-hidden": !0 },
    ce.createElement("tr", { ...n })
  );
}
function rD(n) {
  const { week: a, ...l } = n;
  return ce.createElement("th", { ...l });
}
function oD(n) {
  return ce.createElement("th", { ...n });
}
function lD(n) {
  return ce.createElement("tbody", { ...n });
}
function iD(n) {
  const { components: a } = ei();
  return ce.createElement(a.Dropdown, { ...n });
}
const sD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: HM,
  CaptionLabel: YM,
  Chevron: BM,
  Day: UM,
  DayButton: LM,
  Dropdown: qM,
  DropdownNav: PM,
  Footer: GM,
  Month: WM,
  MonthCaption: VM,
  MonthGrid: XM,
  Months: FM,
  MonthsDropdown: QM,
  Nav: ZM,
  NextMonthButton: IM,
  Option: $M,
  PreviousMonthButton: KM,
  Root: JM,
  Select: eD,
  Week: tD,
  WeekNumber: rD,
  WeekNumberHeader: oD,
  Weekday: nD,
  Weekdays: aD,
  Weeks: lD,
  YearsDropdown: iD
}, Symbol.toStringTag, { value: "Module" }));
function ya(n, a, l = !1, o = Fn) {
  let { from: s, to: u } = n;
  const { differenceInCalendarDays: d, isSameDay: m } = o;
  return s && u ? (d(u, s) < 0 && ([s, u] = [u, s]), d(a, s) >= (l ? 1 : 0) && d(u, a) >= (l ? 1 : 0)) : !l && u ? m(u, a) : !l && s ? m(s, a) : !1;
}
function Wd(n) {
  return !!(n && typeof n == "object" && "before" in n && "after" in n);
}
function Ks(n) {
  return !!(n && typeof n == "object" && "from" in n);
}
function Vd(n) {
  return !!(n && typeof n == "object" && "after" in n);
}
function Xd(n) {
  return !!(n && typeof n == "object" && "before" in n);
}
function n0(n) {
  return !!(n && typeof n == "object" && "dayOfWeek" in n);
}
function a0(n, a) {
  return Array.isArray(n) && n.every(a.isDate);
}
function va(n, a, l = Fn) {
  const o = Array.isArray(a) ? a : [a], { isSameDay: s, differenceInCalendarDays: u, isAfter: d } = l;
  return o.some((m) => {
    if (typeof m == "boolean")
      return m;
    if (l.isDate(m))
      return s(n, m);
    if (a0(m, l))
      return m.some((h) => s(n, h));
    if (Ks(m))
      return ya(m, n, !1, l);
    if (n0(m))
      return Array.isArray(m.dayOfWeek) ? m.dayOfWeek.includes(n.getDay()) : m.dayOfWeek === n.getDay();
    if (Wd(m)) {
      const h = u(m.before, n), p = u(m.after, n), b = h > 0, v = p < 0;
      return d(m.before, m.after) ? v && b : b || v;
    }
    return Vd(m) ? u(n, m.after) > 0 : Xd(m) ? u(m.before, n) > 0 : typeof m == "function" ? m(n) : !1;
  });
}
function cD(n, a, l, o, s) {
  const { disabled: u, hidden: d, modifiers: m, showOutsideDays: h, broadcastCalendar: p, today: b = s.today() } = a, { isSameDay: v, isSameMonth: S, startOfMonth: T, isBefore: E, endOfMonth: O, isAfter: C } = s, D = l && T(l), _ = o && O(o), M = {
    [st.focused]: [],
    [st.outside]: [],
    [st.disabled]: [],
    [st.hidden]: [],
    [st.today]: []
  }, N = {};
  for (const z of n) {
    const { date: R, displayMonth: Y } = z, U = !!(Y && !S(R, Y)), Z = !!(D && E(R, D)), ee = !!(_ && C(R, _)), ae = !!(u && va(R, u, s)), ne = !!(d && va(R, d, s)) || Z || ee || // Broadcast calendar will show outside days as default
    !p && !h && U || p && h === !1 && U, I = v(R, b);
    U && M.outside.push(z), ae && M.disabled.push(z), ne && M.hidden.push(z), I && M.today.push(z), m && Object.keys(m).forEach((J) => {
      const oe = m?.[J];
      oe && va(R, oe, s) && (N[J] ? N[J].push(z) : N[J] = [z]);
    });
  }
  return (z) => {
    const R = {
      [st.focused]: !1,
      [st.disabled]: !1,
      [st.hidden]: !1,
      [st.outside]: !1,
      [st.today]: !1
    }, Y = {};
    for (const U in M) {
      const Z = M[U];
      R[U] = Z.some((ee) => ee === z);
    }
    for (const U in N)
      Y[U] = N[U].some((Z) => Z === z);
    return {
      ...R,
      // custom modifiers should override all the previous ones
      ...Y
    };
  };
}
function uD(n, a, l = {}) {
  return Object.entries(n).filter(([, s]) => s === !0).reduce((s, [u]) => (l[u] ? s.push(l[u]) : a[st[u]] ? s.push(a[st[u]]) : a[Mn[u]] && s.push(a[Mn[u]]), s), [a[pe.Day]]);
}
function fD(n) {
  return {
    ...sD,
    ...n
  };
}
function dD(n) {
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
function Fd() {
  const n = {};
  for (const a in pe)
    n[pe[a]] = `rdp-${pe[a]}`;
  for (const a in st)
    n[st[a]] = `rdp-${st[a]}`;
  for (const a in Mn)
    n[Mn[a]] = `rdp-${Mn[a]}`;
  for (const a in ln)
    n[ln[a]] = `rdp-${ln[a]}`;
  return n;
}
function r0(n, a, l) {
  return (l ?? new Bt(a)).formatMonthYear(n);
}
const mD = r0;
function hD(n, a, l) {
  return (l ?? new Bt(a)).format(n, "d");
}
function pD(n, a = Fn) {
  return a.format(n, "LLLL");
}
function gD(n, a, l) {
  return (l ?? new Bt(a)).format(n, "cccccc");
}
function yD(n, a = Fn) {
  return n < 10 ? a.formatNumber(`0${n.toLocaleString()}`) : a.formatNumber(`${n.toLocaleString()}`);
}
function vD() {
  return "";
}
function o0(n, a = Fn) {
  return a.format(n, "yyyy");
}
const bD = o0, xD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: r0,
  formatDay: hD,
  formatMonthCaption: mD,
  formatMonthDropdown: pD,
  formatWeekNumber: yD,
  formatWeekNumberHeader: vD,
  formatWeekdayName: gD,
  formatYearCaption: bD,
  formatYearDropdown: o0
}, Symbol.toStringTag, { value: "Module" }));
function wD(n) {
  return n?.formatMonthCaption && !n.formatCaption && (n.formatCaption = n.formatMonthCaption), n?.formatYearCaption && !n.formatYearDropdown && (n.formatYearDropdown = n.formatYearCaption), {
    ...xD,
    ...n
  };
}
function Qd(n, a, l, o) {
  let s = (o ?? new Bt(l)).format(n, "PPPP");
  return a.today && (s = `Today, ${s}`), a.selected && (s = `${s}, selected`), s;
}
const SD = Qd;
function Zd(n, a, l) {
  return (l ?? new Bt(a)).formatMonthYear(n);
}
const CD = Zd;
function l0(n, a, l, o) {
  let s = (o ?? new Bt(l)).format(n, "PPPP");
  return a?.today && (s = `Today, ${s}`), s;
}
function i0(n) {
  return "Choose the Month";
}
function s0() {
  return "";
}
const ED = "Go to the Next Month";
function c0(n, a) {
  return ED;
}
function u0(n) {
  return "Go to the Previous Month";
}
function f0(n, a, l) {
  return (l ?? new Bt(a)).format(n, "cccc");
}
function d0(n, a) {
  return `Week ${n}`;
}
function m0(n) {
  return "Week Number";
}
function h0(n) {
  return "Choose the Year";
}
const TD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: CD,
  labelDay: SD,
  labelDayButton: Qd,
  labelGrid: Zd,
  labelGridcell: l0,
  labelMonthDropdown: i0,
  labelNav: s0,
  labelNext: c0,
  labelPrevious: u0,
  labelWeekNumber: d0,
  labelWeekNumberHeader: m0,
  labelWeekday: f0,
  labelYearDropdown: h0
}, Symbol.toStringTag, { value: "Module" })), Tn = (n, a, l) => a || (l ? typeof l == "function" ? l : (...o) => l : n);
function OD(n, a) {
  const l = a.locale?.labels ?? {};
  return {
    ...TD,
    ...n ?? {},
    labelDayButton: Tn(Qd, n?.labelDayButton, l.labelDayButton),
    labelMonthDropdown: Tn(i0, n?.labelMonthDropdown, l.labelMonthDropdown),
    labelNext: Tn(c0, n?.labelNext, l.labelNext),
    labelPrevious: Tn(u0, n?.labelPrevious, l.labelPrevious),
    labelWeekNumber: Tn(d0, n?.labelWeekNumber, l.labelWeekNumber),
    labelYearDropdown: Tn(h0, n?.labelYearDropdown, l.labelYearDropdown),
    labelGrid: Tn(Zd, n?.labelGrid, l.labelGrid),
    labelGridcell: Tn(l0, n?.labelGridcell, l.labelGridcell),
    labelNav: Tn(s0, n?.labelNav, l.labelNav),
    labelWeekNumberHeader: Tn(m0, n?.labelWeekNumberHeader, l.labelWeekNumberHeader),
    labelWeekday: Tn(f0, n?.labelWeekday, l.labelWeekday)
  };
}
function MD(n, a, l, o, s) {
  const { startOfMonth: u, startOfYear: d, endOfYear: m, eachMonthOfInterval: h, getMonth: p } = s;
  return h({
    start: d(n),
    end: m(n)
  }).map((S) => {
    const T = o.formatMonthDropdown(S, s), E = p(S), O = a && S < u(a) || l && S > u(l) || !1;
    return { value: E, label: T, disabled: O };
  });
}
function DD(n, a = {}, l = {}) {
  let o = { ...a?.[pe.Day] };
  return Object.entries(n).filter(([, s]) => s === !0).forEach(([s]) => {
    o = {
      ...o,
      ...l?.[s]
    };
  }), o;
}
function _D(n, a, l, o) {
  const s = o ?? n.today(), u = l ? n.startOfBroadcastWeek(s, n) : a ? n.startOfISOWeek(s) : n.startOfWeek(s), d = [];
  for (let m = 0; m < 7; m++) {
    const h = n.addDays(u, m);
    d.push(h);
  }
  return d;
}
function ND(n, a, l, o, s = !1) {
  if (!n || !a)
    return;
  const { startOfYear: u, endOfYear: d, eachYearOfInterval: m, getYear: h } = o, p = u(n), b = d(a), v = m({ start: p, end: b });
  return s && v.reverse(), v.map((S) => {
    const T = l.formatYearDropdown(S, o);
    return {
      value: h(S),
      label: T,
      disabled: !1
    };
  });
}
function AD(n, a = {}) {
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
      const p = u(m), S = (((h?.weekStartsOn ?? s) + 6) % 7 - p.getDay() + 7) % 7;
      return p.setDate(p.getDate() + S), p;
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
      const h = u(m.start), p = u(m.end), b = [], v = new Lt(h.getFullYear(), h.getMonth(), 1, 12, 0, 0, n), S = p.getFullYear() * 12 + p.getMonth();
      for (; v.getFullYear() * 12 + v.getMonth() <= S; )
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
      return $s(p, {
        weekStartsOn: h?.weekStartsOn ?? s,
        firstWeekContainsDate: h?.firstWeekContainsDate ?? o?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (m) => {
      const h = d(m);
      return Is(h);
    },
    differenceInCalendarDays: (m, h) => {
      const p = d(m), b = d(h);
      return Ud(p, b);
    },
    differenceInCalendarMonths: (m, h) => {
      const p = d(m), b = d(h);
      return Yb(p, b);
    }
  };
}
const ti = (n) => n instanceof HTMLElement ? n : null, qf = (n) => [
  ...n.querySelectorAll("[data-animated-month]") ?? []
], RD = (n) => ti(n.querySelector("[data-animated-month]")), Pf = (n) => ti(n.querySelector("[data-animated-caption]")), Gf = (n) => ti(n.querySelector("[data-animated-weeks]")), kD = (n) => ti(n.querySelector("[data-animated-nav]")), jD = (n) => ti(n.querySelector("[data-animated-weekdays]"));
function zD(n, a, { classNames: l, months: o, focused: s, dateLib: u }) {
  const d = x.useRef(null), m = x.useRef(o), h = x.useRef(!1);
  x.useLayoutEffect(() => {
    const p = m.current;
    if (m.current = o, !a || !n.current || // safety check because the ref can be set to anything by consumers
    !(n.current instanceof HTMLElement) || // validation required for the animation to work as expected
    o.length === 0 || p.length === 0 || o.length !== p.length)
      return;
    const b = u.isSameMonth(o[0].date, p[0].date), v = u.isAfter(o[0].date, p[0].date), S = v ? l[ln.caption_after_enter] : l[ln.caption_before_enter], T = v ? l[ln.weeks_after_enter] : l[ln.weeks_before_enter], E = d.current, O = n.current.cloneNode(!0);
    if (O instanceof HTMLElement ? (qf(O).forEach((M) => {
      if (!(M instanceof HTMLElement))
        return;
      const N = RD(M);
      N && M.contains(N) && M.removeChild(N);
      const z = Pf(M);
      z && z.classList.remove(S);
      const R = Gf(M);
      R && R.classList.remove(T);
    }), d.current = O) : d.current = null, h.current || b || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    s)
      return;
    const C = E instanceof HTMLElement ? qf(E) : [], D = qf(n.current);
    if (D?.every((_) => _ instanceof HTMLElement) && C && C.every((_) => _ instanceof HTMLElement)) {
      h.current = !0, n.current.style.isolation = "isolate";
      const _ = kD(n.current);
      _ && (_.style.zIndex = "1"), D.forEach((M, N) => {
        const z = C[N];
        if (!z)
          return;
        M.style.position = "relative", M.style.overflow = "hidden";
        const R = Pf(M);
        R && R.classList.add(S);
        const Y = Gf(M);
        Y && Y.classList.add(T);
        const U = () => {
          h.current = !1, n.current && (n.current.style.isolation = ""), _ && (_.style.zIndex = ""), R && R.classList.remove(S), Y && Y.classList.remove(T), M.style.position = "", M.style.overflow = "", M.contains(z) && M.removeChild(z);
        };
        z.style.pointerEvents = "none", z.style.position = "absolute", z.style.overflow = "hidden", z.setAttribute("aria-hidden", "true");
        const Z = jD(z);
        Z && (Z.style.opacity = "0");
        const ee = Pf(z);
        ee && (ee.classList.add(v ? l[ln.caption_before_exit] : l[ln.caption_after_exit]), ee.addEventListener("animationend", U));
        const ae = Gf(z);
        ae && ae.classList.add(v ? l[ln.weeks_before_exit] : l[ln.weeks_after_exit]), M.insertBefore(z, M.firstChild);
      });
    }
  });
}
function HD(n, a, l, o) {
  const s = n[0], u = n[n.length - 1], { ISOWeek: d, fixedWeeks: m, broadcastCalendar: h } = l ?? {}, { addDays: p, differenceInCalendarDays: b, differenceInCalendarMonths: v, endOfBroadcastWeek: S, endOfISOWeek: T, endOfMonth: E, endOfWeek: O, isAfter: C, startOfBroadcastWeek: D, startOfISOWeek: _, startOfWeek: M } = o, N = h ? D(s, o) : d ? _(s) : M(s), z = h ? S(u) : d ? T(E(u)) : O(E(u)), R = a && (h ? S(a) : d ? T(a) : O(a)), Y = R && C(z, R) ? R : z, U = b(Y, N), Z = v(u, s) + 1, ee = [];
  for (let I = 0; I <= U; I++) {
    const J = p(N, I);
    ee.push(J);
  }
  const ne = (h ? 35 : 42) * Z;
  if (m && ee.length < ne) {
    const I = ne - ee.length;
    for (let J = 0; J < I; J++) {
      const oe = p(ee[ee.length - 1], 1);
      ee.push(oe);
    }
  }
  return ee;
}
function YD(n) {
  const a = [];
  return n.reduce((l, o) => {
    const s = o.weeks.reduce((u, d) => u.concat(d.days.slice()), a.slice());
    return l.concat(s.slice());
  }, a.slice());
}
function BD(n, a, l, o) {
  const { numberOfMonths: s = 1 } = l, u = [];
  for (let d = 0; d < s; d++) {
    const m = o.addMonths(n, d);
    if (a && m > a)
      break;
    u.push(m);
  }
  return u;
}
function Qy(n, a, l, o) {
  const { month: s, defaultMonth: u, today: d = o.today(), numberOfMonths: m = 1 } = n;
  let h = s || u || d;
  const { differenceInCalendarMonths: p, addMonths: b, startOfMonth: v } = o;
  if (l && p(l, h) < m - 1) {
    const S = -1 * (m - 1);
    h = b(l, S);
  }
  return a && p(h, a) < 0 && (h = a), v(h);
}
function UD(n, a, l, o) {
  const { addDays: s, endOfBroadcastWeek: u, endOfISOWeek: d, endOfMonth: m, endOfWeek: h, getISOWeek: p, getWeek: b, startOfBroadcastWeek: v, startOfISOWeek: S, startOfWeek: T } = o, E = n.reduce((O, C) => {
    const D = l.broadcastCalendar ? v(C, o) : l.ISOWeek ? S(C) : T(C), _ = l.broadcastCalendar ? u(C) : l.ISOWeek ? d(m(C)) : h(m(C)), M = a.filter((Y) => Y >= D && Y <= _), N = l.broadcastCalendar ? 35 : 42;
    if (l.fixedWeeks && M.length < N) {
      const Y = a.filter((U) => {
        const Z = N - M.length;
        return U > _ && U <= s(_, Z);
      });
      M.push(...Y);
    }
    const z = M.reduce((Y, U) => {
      const Z = l.ISOWeek ? p(U) : b(U), ee = Y.find((ne) => ne.weekNumber === Z), ae = new e0(U, C, o);
      return ee ? ee.days.push(ae) : Y.push(new zM(Z, [ae])), Y;
    }, []), R = new jM(C, z);
    return O.push(R), O;
  }, []);
  return l.reverseMonths ? E.reverse() : E;
}
function LD(n, a) {
  let { startMonth: l, endMonth: o } = n;
  const { startOfYear: s, startOfDay: u, startOfMonth: d, endOfMonth: m, addYears: h, endOfYear: p, newDate: b, today: v } = a, { fromYear: S, toYear: T, fromMonth: E, toMonth: O } = n;
  !l && E && (l = E), !l && S && (l = a.newDate(S, 0, 1)), !o && O && (o = O), !o && T && (o = b(T, 11, 31));
  const C = n.captionLayout === "dropdown" || n.captionLayout === "dropdown-years";
  return l ? l = d(l) : S ? l = b(S, 0, 1) : !l && C && (l = s(h(n.today ?? v(), -100))), o ? o = m(o) : T ? o = b(T, 11, 31) : !o && C && (o = p(n.today ?? v())), [
    l && u(l),
    o && u(o)
  ];
}
function qD(n, a, l, o) {
  if (l.disableNavigation)
    return;
  const { pagedNavigation: s, numberOfMonths: u = 1 } = l, { startOfMonth: d, addMonths: m, differenceInCalendarMonths: h } = o, p = s ? u : 1, b = d(n);
  if (!a)
    return m(b, p);
  if (!(h(a, n) < u))
    return m(b, p);
}
function PD(n, a, l, o) {
  if (l.disableNavigation)
    return;
  const { pagedNavigation: s, numberOfMonths: u } = l, { startOfMonth: d, addMonths: m, differenceInCalendarMonths: h } = o, p = s ? u ?? 1 : 1, b = d(n);
  if (!a)
    return m(b, -p);
  if (!(h(b, a) <= 0))
    return m(b, -p);
}
function GD(n) {
  const a = [];
  return n.reduce((l, o) => l.concat(o.weeks.slice()), a.slice());
}
function Js(n, a) {
  const [l, o] = x.useState(n);
  return [a === void 0 ? l : a, o];
}
function WD(n, a) {
  const [l, o] = LD(n, a), { startOfMonth: s, endOfMonth: u } = a, d = Qy(n, l, o, a), [m, h] = Js(
    d,
    // initialMonth is always computed from props.month if provided
    n.month ? d : void 0
  );
  x.useEffect(() => {
    const N = Qy(n, l, o, a);
    h(N);
  }, [n.timeZone]);
  const { months: p, weeks: b, days: v, previousMonth: S, nextMonth: T } = x.useMemo(() => {
    const N = BD(m, o, { numberOfMonths: n.numberOfMonths }, a), z = HD(N, n.endMonth ? u(n.endMonth) : void 0, {
      ISOWeek: n.ISOWeek,
      fixedWeeks: n.fixedWeeks,
      broadcastCalendar: n.broadcastCalendar
    }, a), R = UD(N, z, {
      broadcastCalendar: n.broadcastCalendar,
      fixedWeeks: n.fixedWeeks,
      ISOWeek: n.ISOWeek,
      reverseMonths: n.reverseMonths
    }, a), Y = GD(R), U = YD(R), Z = PD(m, l, n, a), ee = qD(m, o, n, a);
    return {
      months: R,
      weeks: Y,
      days: U,
      previousMonth: Z,
      nextMonth: ee
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
  ]), { disableNavigation: E, onMonthChange: O } = n, C = (N) => b.some((z) => z.days.some((R) => R.isEqualTo(N))), D = (N) => {
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
    previousMonth: S,
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
function Zy(n) {
  return !n[st.disabled] && !n[st.hidden] && !n[st.outside];
}
function VD(n, a, l, o) {
  let s, u = -1;
  for (const d of n) {
    const m = a(d);
    Zy(m) && (m[st.focused] && u < Yn.FocusedModifier ? (s = d, u = Yn.FocusedModifier) : o?.isEqualTo(d) && u < Yn.LastFocused ? (s = d, u = Yn.LastFocused) : l(d.date) && u < Yn.Selected ? (s = d, u = Yn.Selected) : m[st.today] && u < Yn.Today && (s = d, u = Yn.Today));
  }
  return s || (s = n.find((d) => Zy(a(d)))), s;
}
function XD(n, a, l, o, s, u, d) {
  const { ISOWeek: m, broadcastCalendar: h } = u, { addDays: p, addMonths: b, addWeeks: v, addYears: S, endOfBroadcastWeek: T, endOfISOWeek: E, endOfWeek: O, max: C, min: D, startOfBroadcastWeek: _, startOfISOWeek: M, startOfWeek: N } = d;
  let R = {
    day: p,
    week: v,
    month: b,
    year: S,
    startOfWeek: (Y) => h ? _(Y, d) : m ? M(Y) : N(Y),
    endOfWeek: (Y) => h ? T(Y) : m ? E(Y) : O(Y)
  }[n](l, a === "after" ? 1 : -1);
  return a === "before" && o ? R = C([o, R]) : a === "after" && s && (R = D([s, R])), R;
}
function p0(n, a, l, o, s, u, d, m = 0) {
  if (m > 365)
    return;
  const h = XD(n, a, l.date, o, s, u, d), p = !!(u.disabled && va(h, u.disabled, d)), b = !!(u.hidden && va(h, u.hidden, d)), v = h, S = new e0(h, v, d);
  return !p && !b ? S : p0(n, a, S, o, s, u, d, m + 1);
}
function FD(n, a, l, o, s) {
  const { autoFocus: u } = n, [d, m] = x.useState(), h = VD(a.days, l, o || (() => !1), d), [p, b] = x.useState(u ? h : void 0);
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
      const D = p0(O, C, p, a.navStart, a.navEnd, n, s);
      D && (n.disableNavigation && !a.days.some((M) => M.isEqualTo(D)) || (a.goToDay(D), b(D)));
    }
  };
}
function QD(n, a) {
  const { selected: l, required: o, onSelect: s } = n, [u, d] = Js(l, s ? l : void 0), m = s ? l : u, { isSameDay: h } = a, p = (T) => m?.some((E) => h(E, T)) ?? !1, { min: b, max: v } = n;
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
function ZD(n, a, l = 0, o = 0, s = !1, u = Fn) {
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
    const S = u.differenceInCalendarDays(v.to, v.from);
    o > 0 && S > o ? v = { from: n, to: void 0 } : l > 1 && S < l && (v = { from: n, to: void 0 });
  }
  return v;
}
function ID(n, a, l = Fn) {
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
function Iy(n, a, l = Fn) {
  return ya(n, a.from, !1, l) || ya(n, a.to, !1, l) || ya(a, n.from, !1, l) || ya(a, n.to, !1, l);
}
function $D(n, a, l = Fn) {
  const o = Array.isArray(a) ? a : [a];
  if (o.filter((m) => typeof m != "function").some((m) => typeof m == "boolean" ? m : l.isDate(m) ? ya(n, m, !1, l) : a0(m, l) ? m.some((h) => ya(n, h, !1, l)) : Ks(m) ? m.from && m.to ? Iy(n, { from: m.from, to: m.to }, l) : !1 : n0(m) ? ID(n, m.dayOfWeek, l) : Wd(m) ? l.isAfter(m.before, m.after) ? Iy(n, {
    from: l.addDays(m.after, 1),
    to: l.addDays(m.before, -1)
  }, l) : va(n.from, m, l) || va(n.to, m, l) : Vd(m) || Xd(m) ? va(n.from, m, l) || va(n.to, m, l) : !1))
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
function KD(n, a) {
  const { disabled: l, excludeDisabled: o, resetOnSelect: s, selected: u, required: d, onSelect: m } = n, [h, p] = Js(u, m ? u : void 0), b = m ? u : h;
  return {
    selected: b,
    select: (T, E, O) => {
      const { min: C, max: D } = n;
      let _;
      if (T) {
        const M = b?.from, N = b?.to, z = !!M && !!N, R = !!M && !!N && a.isSameDay(M, N) && a.isSameDay(T, M);
        s && (z || !b?.from) ? !d && R ? _ = void 0 : _ = { from: T, to: void 0 } : _ = ZD(T, b, C, D, d, a);
      }
      return o && l && _?.from && _.to && $D({ from: _.from, to: _.to }, l, a) && (_.from = T, _.to = void 0), m || p(_), m?.(_, T, E, O), _;
    },
    isSelected: (T) => b && ya(b, T, !1, a)
  };
}
function JD(n, a) {
  const { selected: l, required: o, onSelect: s } = n, [u, d] = Js(l, s ? l : void 0), m = s ? l : u, { isSameDay: h } = a;
  return {
    selected: m,
    select: (v, S, T) => {
      let E = v;
      return !o && m && m && h(v, m) && (E = void 0), s || d(E), s?.(E, v, S, T), E;
    },
    isSelected: (v) => m ? h(m, v) : !1
  };
}
function e_(n, a) {
  const l = JD(n, a), o = QD(n, a), s = KD(n, a);
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
function xn(n, a) {
  return n instanceof Lt && n.timeZone === a ? n : new Lt(n, a);
}
function jo(n, a, l) {
  return xn(n, a);
}
function $y(n, a, l) {
  return typeof n == "boolean" || typeof n == "function" ? n : n instanceof Date ? jo(n, a) : Array.isArray(n) ? n.map((o) => o instanceof Date ? jo(o, a) : o) : Ks(n) ? {
    ...n,
    from: n.from ? xn(n.from, a) : n.from,
    to: n.to ? xn(n.to, a) : n.to
  } : Wd(n) ? {
    before: jo(n.before, a),
    after: jo(n.after, a)
  } : Vd(n) ? {
    after: jo(n.after, a)
  } : Xd(n) ? {
    before: jo(n.before, a)
  } : n;
}
function Wf(n, a, l) {
  return n && (Array.isArray(n) ? n.map((o) => $y(o, a)) : $y(n, a));
}
function t_(n) {
  let a = n;
  const l = a.timeZone;
  if (l && (a = {
    ...n,
    timeZone: l
  }, a.today && (a.today = xn(a.today, l)), a.month && (a.month = xn(a.month, l)), a.defaultMonth && (a.defaultMonth = xn(a.defaultMonth, l)), a.startMonth && (a.startMonth = xn(a.startMonth, l)), a.endMonth && (a.endMonth = xn(a.endMonth, l)), a.mode === "single" && a.selected ? a.selected = xn(a.selected, l) : a.mode === "multiple" && a.selected ? a.selected = a.selected?.map((Ee) => xn(Ee, l)) : a.mode === "range" && a.selected && (a.selected = {
    from: a.selected.from ? xn(a.selected.from, l) : a.selected.from,
    to: a.selected.to ? xn(a.selected.to, l) : a.selected.to
  }), a.disabled !== void 0 && (a.disabled = Wf(a.disabled, l)), a.hidden !== void 0 && (a.hidden = Wf(a.hidden, l)), a.modifiers)) {
    const Ee = {};
    Object.keys(a.modifiers).forEach((He) => {
      Ee[He] = Wf(a.modifiers?.[He], l);
    }), a.modifiers = Ee;
  }
  const { components: o, formatters: s, labels: u, dateLib: d, locale: m, classNames: h } = x.useMemo(() => {
    const Ee = { ...$b, ...a.locale }, He = a.broadcastCalendar ? 1 : a.weekStartsOn, be = a.noonSafe && a.timeZone ? AD(a.timeZone, {
      weekStartsOn: He,
      locale: Ee
    }) : void 0, Re = a.dateLib && be ? { ...be, ...a.dateLib } : a.dateLib ?? be, mt = new Bt({
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
      components: fD(a.components),
      formatters: wD(a.formatters),
      labels: OD(a.labels, mt.options),
      locale: Ee,
      classNames: { ...Fd(), ...a.classNames }
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
  const { captionLayout: p, mode: b, navLayout: v, numberOfMonths: S = 1, onDayBlur: T, onDayClick: E, onDayFocus: O, onDayKeyDown: C, onDayMouseEnter: D, onDayMouseLeave: _, onNextClick: M, onPrevClick: N, showWeekNumber: z, styles: R } = a, { formatCaption: Y, formatDay: U, formatMonthDropdown: Z, formatWeekNumber: ee, formatWeekNumberHeader: ae, formatWeekdayName: ne, formatYearDropdown: I } = s, J = WD(a, d), { days: oe, months: H, navStart: F, navEnd: K, previousMonth: re, nextMonth: W, goToMonth: A } = J, V = cD(oe, a, F, K, d), { isSelected: te, select: le, selected: ie } = e_(a, d) ?? {}, { blur: se, focused: ve, isFocusTarget: Fe, moveFocus: ye, setFocused: he } = FD(a, J, V, te ?? (() => !1), d), { labelDayButton: Qe, labelGridcell: qe, labelGrid: Ce, labelMonthDropdown: Te, labelNav: We, labelPrevious: Qn, labelNext: ur, labelWeekday: Da, labelWeekNumber: Io, labelWeekNumberHeader: $o, labelYearDropdown: Ko } = u, mc = x.useMemo(() => _D(d, a.ISOWeek, a.broadcastCalendar, a.today), [d, a.ISOWeek, a.broadcastCalendar, a.today]), ai = b !== void 0 || E !== void 0, At = x.useCallback(() => {
    re && (A(re), N?.(re));
  }, [re, A, N]), Jo = x.useCallback(() => {
    W && (A(W), M?.(W));
  }, [A, W, M]), ri = x.useCallback((Ee, He) => (be) => {
    be.preventDefault(), be.stopPropagation(), he(Ee), !He.disabled && (le?.(Ee.date, He, be), E?.(Ee.date, He, be));
  }, [le, E, he]), oi = x.useCallback((Ee, He) => (be) => {
    he(Ee), O?.(Ee.date, He, be);
  }, [O, he]), Fr = x.useCallback((Ee, He) => (be) => {
    se(), T?.(Ee.date, He, be);
  }, [se, T]), hc = x.useCallback((Ee, He) => (be) => {
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
  }, [D]), pc = x.useCallback((Ee, He) => (be) => {
    _?.(Ee.date, He, be);
  }, [_]), gc = x.useCallback((Ee) => (He) => {
    const be = Number(He.target.value), Re = d.setMonth(d.startOfMonth(Ee), be);
    A(Re);
  }, [d, A]), fr = x.useCallback((Ee) => (He) => {
    const be = Number(He.target.value), Re = d.setYear(d.startOfMonth(Ee), be);
    A(Re);
  }, [d, A]), { className: qt, style: An } = x.useMemo(() => ({
    className: [h[pe.Root], a.className].filter(Boolean).join(" "),
    style: { ...R?.[pe.Root], ...a.style }
  }), [h, a.className, a.style, R]), Pt = dD(a), ii = x.useRef(null);
  zD(ii, !!a.animate, {
    classNames: h,
    months: H,
    focused: ve,
    dateLib: d
  });
  const yc = {
    dayPickerProps: a,
    selected: ie,
    select: le,
    isSelected: te,
    months: H,
    nextMonth: W,
    previousMonth: re,
    goToMonth: A,
    getModifiers: V,
    components: o,
    classNames: h,
    styles: R,
    labels: u,
    formatters: s
  };
  return ce.createElement(
    t0.Provider,
    { value: yc },
    ce.createElement(
      o.Root,
      { rootRef: a.animate ? ii : void 0, className: qt, style: An, dir: a.dir, id: a.id, lang: a.lang ?? m.code, nonce: a.nonce, title: a.title, role: a.role, "aria-label": a["aria-label"], "aria-labelledby": a["aria-labelledby"], ...Pt },
      ce.createElement(
        o.Months,
        { className: h[pe.Months], style: R?.[pe.Months] },
        !a.hideNavigation && !v && ce.createElement(o.Nav, { "data-animated-nav": a.animate ? "true" : void 0, className: h[pe.Nav], style: R?.[pe.Nav], "aria-label": We(), onPreviousClick: At, onNextClick: Jo, previousMonth: re, nextMonth: W }),
        H.map((Ee, He) => ce.createElement(
          o.Month,
          {
            "data-animated-month": a.animate ? "true" : void 0,
            className: h[pe.Month],
            style: R?.[pe.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: He,
            displayIndex: He,
            calendarMonth: Ee
          },
          v === "around" && !a.hideNavigation && He === 0 && ce.createElement(
            o.PreviousMonthButton,
            { type: "button", className: h[pe.PreviousMonthButton], tabIndex: re ? void 0 : -1, "aria-disabled": re ? void 0 : !0, "aria-label": Qn(re), onClick: At, "data-animated-button": a.animate ? "true" : void 0 },
            ce.createElement(o.Chevron, { disabled: re ? void 0 : !0, className: h[pe.Chevron], orientation: a.dir === "rtl" ? "right" : "left" })
          ),
          ce.createElement(o.MonthCaption, { "data-animated-caption": a.animate ? "true" : void 0, className: h[pe.MonthCaption], style: R?.[pe.MonthCaption], calendarMonth: Ee, displayIndex: He }, p?.startsWith("dropdown") ? ce.createElement(
            o.DropdownNav,
            { className: h[pe.Dropdowns], style: R?.[pe.Dropdowns] },
            (() => {
              const be = p === "dropdown" || p === "dropdown-months" ? ce.createElement(o.MonthsDropdown, { key: "month", className: h[pe.MonthsDropdown], "aria-label": Te(), classNames: h, components: o, disabled: !!a.disableNavigation, onChange: gc(Ee.date), options: MD(Ee.date, F, K, s, d), style: R?.[pe.Dropdown], value: d.getMonth(Ee.date) }) : ce.createElement("span", { key: "month" }, Z(Ee.date, d)), Re = p === "dropdown" || p === "dropdown-years" ? ce.createElement(o.YearsDropdown, { key: "year", className: h[pe.YearsDropdown], "aria-label": Ko(d.options), classNames: h, components: o, disabled: !!a.disableNavigation, onChange: fr(Ee.date), options: ND(F, K, s, d, !!a.reverseYears), style: R?.[pe.Dropdown], value: d.getYear(Ee.date) }) : ce.createElement("span", { key: "year" }, I(Ee.date, d));
              return d.getMonthYearOrder() === "year-first" ? [Re, be] : [be, Re];
            })(),
            ce.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, Y(Ee.date, d.options, d))
          ) : ce.createElement(o.CaptionLabel, { className: h[pe.CaptionLabel], role: "status", "aria-live": "polite" }, Y(Ee.date, d.options, d))),
          v === "around" && !a.hideNavigation && He === S - 1 && ce.createElement(
            o.NextMonthButton,
            { type: "button", className: h[pe.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": ur(W), onClick: Jo, "data-animated-button": a.animate ? "true" : void 0 },
            ce.createElement(o.Chevron, { disabled: W ? void 0 : !0, className: h[pe.Chevron], orientation: a.dir === "rtl" ? "left" : "right" })
          ),
          He === S - 1 && v === "after" && !a.hideNavigation && ce.createElement(o.Nav, { "data-animated-nav": a.animate ? "true" : void 0, className: h[pe.Nav], style: R?.[pe.Nav], "aria-label": We(), onPreviousClick: At, onNextClick: Jo, previousMonth: re, nextMonth: W }),
          ce.createElement(
            o.MonthGrid,
            { role: "grid", "aria-multiselectable": b === "multiple" || b === "range", "aria-label": Ce(Ee.date, d.options, d) || void 0, className: h[pe.MonthGrid], style: R?.[pe.MonthGrid] },
            !a.hideWeekdays && ce.createElement(
              o.Weekdays,
              { "data-animated-weekdays": a.animate ? "true" : void 0, className: h[pe.Weekdays], style: R?.[pe.Weekdays] },
              z && ce.createElement(o.WeekNumberHeader, { "aria-label": $o(d.options), className: h[pe.WeekNumberHeader], style: R?.[pe.WeekNumberHeader], scope: "col" }, ae()),
              mc.map((be) => ce.createElement(o.Weekday, { "aria-label": Da(be, d.options, d), className: h[pe.Weekday], key: String(be), style: R?.[pe.Weekday], scope: "col" }, ne(be, d.options, d)))
            ),
            ce.createElement(o.Weeks, { "data-animated-weeks": a.animate ? "true" : void 0, className: h[pe.Weeks], style: R?.[pe.Weeks] }, Ee.weeks.map((be) => ce.createElement(
              o.Week,
              { className: h[pe.Week], key: be.weekNumber, style: R?.[pe.Week], week: be },
              z && ce.createElement(o.WeekNumber, { week: be, style: R?.[pe.WeekNumber], "aria-label": Io(be.weekNumber, {
                locale: m
              }), className: h[pe.WeekNumber], scope: "row", role: "rowheader" }, ee(be.weekNumber, d)),
              be.days.map((Re) => {
                const { date: mt } = Re, De = V(Re);
                if (De[st.focused] = !De.hidden && !!ve?.isEqualTo(Re), De[Mn.selected] = te?.(mt) || De.selected, Ks(ie)) {
                  const { from: mr, to: Zn } = ie;
                  De[Mn.range_start] = !!(mr && Zn && d.isSameDay(mt, mr)), De[Mn.range_end] = !!(mr && Zn && d.isSameDay(mt, Zn)), De[Mn.range_middle] = ya(ie, mt, !0, d);
                }
                const dr = DD(De, R, a.modifiersStyles), vc = uD(De, h, a.modifiersClassNames), si = !ai && !De.hidden ? qe(mt, De, d.options, d) : void 0;
                return ce.createElement(o.Day, { key: `${Re.isoDate}_${Re.displayMonthId}`, day: Re, modifiers: De, className: vc.join(" "), style: dr, role: "gridcell", "aria-selected": De.selected || void 0, "aria-label": si, "data-day": Re.isoDate, "data-month": Re.outside ? Re.dateMonthId : void 0, "data-selected": De.selected || void 0, "data-disabled": De.disabled || void 0, "data-hidden": De.hidden || void 0, "data-outside": Re.outside || void 0, "data-focused": De.focused || void 0, "data-today": De.today || void 0 }, !De.hidden && ai ? ce.createElement(o.DayButton, { className: h[pe.DayButton], style: R?.[pe.DayButton], type: "button", day: Re, modifiers: De, disabled: !De.focused && De.disabled || void 0, "aria-disabled": De.focused && De.disabled || void 0, tabIndex: Fe(Re) ? 0 : -1, "aria-label": Qe(mt, De, d.options, d), onClick: ri(Re, De), onBlur: Fr(Re, De), onFocus: oi(Re, De), onKeyDown: hc(Re, De), onMouseEnter: li(Re, De), onMouseLeave: pc(Re, De) }, U(mt, d.options, d)) : !De.hidden && U(Re.date, d.options, d));
              })
            )))
          )
        ))
      ),
      a.footer && ce.createElement(o.Footer, { className: h[pe.Footer], style: R?.[pe.Footer], role: "status", "aria-live": "polite" }, a.footer)
    )
  );
}
function n_({
  className: n,
  classNames: a,
  showOutsideDays: l = !0,
  captionLayout: o = "label",
  buttonVariant: s = "ghost",
  formatters: u,
  components: d,
  ...m
}) {
  const h = Fd();
  return /* @__PURE__ */ y.jsx(
    t_,
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
          ad({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          h.button_previous
        ),
        button_next: we(
          ad({ variant: s }),
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
        Root: ({ className: p, rootRef: b, ...v }) => /* @__PURE__ */ y.jsx(
          "div",
          {
            "data-slot": "calendar",
            ref: b,
            className: we(p),
            ...v
          }
        ),
        Chevron: ({ className: p, orientation: b, ...v }) => b === "left" ? /* @__PURE__ */ y.jsx(wM, { className: we("size-4", p), ...v }) : b === "right" ? /* @__PURE__ */ y.jsx(
          CM,
          {
            className: we("size-4", p),
            ...v
          }
        ) : /* @__PURE__ */ y.jsx(Gd, { className: we("size-4", p), ...v }),
        DayButton: a_,
        WeekNumber: ({ children: p, ...b }) => /* @__PURE__ */ y.jsx("td", { ...b, children: /* @__PURE__ */ y.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) }),
        ...d
      },
      ...m
    }
  );
}
function a_({
  className: n,
  day: a,
  modifiers: l,
  ...o
}) {
  const s = Fd(), u = x.useRef(null);
  return x.useEffect(() => {
    l.focused && u.current?.focus();
  }, [l.focused]), /* @__PURE__ */ y.jsx(
    Ue,
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
var r_ = Object.defineProperty, Nt = (n, a) => r_(n, "name", { value: a, configurable: !0 }), ud = "dismissableLayer.update", o_ = "dismissableLayer.pointerDownOutside", l_ = "dismissableLayer.focusOutside", Ky, g0 = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), y0 = /* @__PURE__ */ x.forwardRef(
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
    } = a, v = x.useContext(g0), [S, T] = x.useState(null), E = S?.ownerDocument ?? globalThis?.document, [, O] = x.useState({}), C = at(l, T), D = Array.from(v.layers), [_] = [
      ...v.layersWithOutsidePointerEventsDisabled
    ].slice(-1), M = _ ? D.indexOf(_) : -1, N = S ? D.indexOf(S) : -1, z = v.layersWithOutsidePointerEventsDisabled.size > 0, R = N >= M, Y = x.useRef(!1), U = v0(
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
            const I = [...v.branches].some(
              (J) => J.contains(ne)
            );
            return R && !I;
          },
          [v.branches, R]
        )
      }
    ), Z = b0((ne) => {
      if (s && Y.current)
        return;
      const I = ne.target;
      [...v.branches].some((oe) => oe.contains(I)) || (m?.(ne), h?.(ne), ne.defaultPrevented || p?.());
    }, E), ee = S ? N === D.length - 1 : !1, ae = Dn((ne) => {
      ne.key === "Escape" && (u?.(ne), !ne.defaultPrevented && p && (ne.preventDefault(), p()));
    });
    return x.useEffect(() => {
      if (ee)
        return E.addEventListener("keydown", ae, { capture: !0 }), () => E.removeEventListener("keydown", ae, { capture: !0 });
    }, [E, ee, ae]), x.useEffect(() => {
      if (S)
        return o && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (Ky = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(S)), v.layers.add(S), fd(), () => {
          o && (v.layersWithOutsidePointerEventsDisabled.delete(S), v.layersWithOutsidePointerEventsDisabled.size === 0 && (E.body.style.pointerEvents = Ky));
        };
    }, [S, E, o, v]), x.useEffect(() => () => {
      S && (v.layers.delete(S), v.layersWithOutsidePointerEventsDisabled.delete(S), fd());
    }, [S, v]), x.useEffect(() => {
      const ne = /* @__PURE__ */ Nt(() => O({}), "handleUpdate");
      return document.addEventListener(ud, ne), () => document.removeEventListener(ud, ne);
    }, []), /* @__PURE__ */ y.jsx(
      rt.div,
      {
        ...b,
        ref: C,
        style: {
          pointerEvents: z ? R ? "auto" : "none" : void 0,
          ...a.style
        },
        onFocusCapture: ze(a.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: ze(a.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: ze(
          a.onPointerDownCapture,
          U.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function i_() {
  const n = x.useContext(g0), [a, l] = x.useState(null);
  return x.useEffect(() => {
    if (a)
      return n.dismissableSurfaces.add(a), () => {
        n.dismissableSurfaces.delete(a);
      };
  }, [a, n.dismissableSurfaces]), l;
}
Nt(i_, "useDismissableLayerSurface");
var s_ = /* @__PURE__ */ Nt(() => !0, "IS_TRUE");
function v0(n, a) {
  const {
    ownerDocument: l = globalThis?.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: s,
    dismissableSurfaces: u,
    shouldHandlePointerDownOutside: d = s_
  } = a, m = Dn(n), h = x.useRef(!1), p = x.useRef(!1), b = x.useRef(/* @__PURE__ */ new Map()), v = x.useRef(() => {
  });
  return x.useEffect(() => {
    function S() {
      p.current = !1, s.current = !1, b.current.clear();
    }
    Nt(S, "resetOutsideInteraction");
    function T() {
      return Array.from(b.current.values()).some(Boolean);
    }
    Nt(T, "isOutsideInteractionIntercepted");
    function E(M) {
      if (!p.current)
        return;
      const N = M.target;
      N instanceof Node && [...u].some((R) => R.contains(N)) || b.current.set(M.type, !0), M.type === "click" && window.setTimeout(() => {
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
          const R = T();
          S(), R || Id(
            o_,
            m,
            z,
            { discrete: !0 }
          );
        };
        if (Nt(N, "handleAndDispatchPointerDownOutsideEvent"), !d(M.target)) {
          l.removeEventListener("click", v.current), S(), h.current = !1;
          return;
        }
        const z = { originalEvent: M };
        p.current = !0, s.current = o && M.button === 0, b.current.clear(), !o || M.button !== 0 ? N() : (l.removeEventListener("click", v.current), v.current = N, l.addEventListener("click", v.current, { once: !0 }));
      } else
        l.removeEventListener("click", v.current), S();
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
Nt(v0, "usePointerDownOutside");
function b0(n, a = globalThis?.document) {
  const l = Dn(n), o = x.useRef(!1);
  return x.useEffect(() => {
    const s = /* @__PURE__ */ Nt((u) => {
      u.target && !o.current && Id(l_, l, { originalEvent: u }, {
        discrete: !1
      });
    }, "handleFocus");
    return a.addEventListener("focusin", s), () => a.removeEventListener("focusin", s);
  }, [a, l]), {
    onFocusCapture: /* @__PURE__ */ Nt(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Nt(() => o.current = !1, "onBlurCapture")
  };
}
Nt(b0, "useFocusOutside");
function fd() {
  const n = new CustomEvent(ud);
  document.dispatchEvent(n);
}
Nt(fd, "dispatchUpdate");
function Id(n, a, l, { discrete: o }) {
  const s = l.originalEvent.target, u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: l });
  a && s.addEventListener(n, a, { once: !0 }), o ? Kv(s, u) : s.dispatchEvent(u);
}
Nt(Id, "handleAndDispatchCustomEvent");
var c_ = Object.defineProperty, $d = (n, a) => c_(n, "name", { value: a, configurable: !0 }), Es = 0, zo = null;
function u_(n) {
  return ec(), n.children;
}
$d(u_, "FocusGuards");
function ec() {
  x.useEffect(() => {
    zo || (zo = { start: dd(), end: dd() });
    const { start: n, end: a } = zo;
    return document.body.firstElementChild !== n && document.body.insertAdjacentElement("afterbegin", n), document.body.lastElementChild !== a && document.body.insertAdjacentElement("beforeend", a), Es++, () => {
      Es === 1 && (zo?.start.remove(), zo?.end.remove(), zo = null), Es = Math.max(0, Es - 1);
    };
  }, []);
}
$d(ec, "useFocusGuards");
function dd() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
$d(dd, "createFocusGuard");
var f_ = Object.defineProperty, Et = (n, a) => f_(n, "name", { value: a, configurable: !0 }), Vf = "focusScope.autoFocusOnMount", Xf = "focusScope.autoFocusOnUnmount", Jy = { bubbles: !1, cancelable: !0 }, x0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Et(function(a, l) {
    const {
      loop: o = !1,
      trapped: s = !1,
      branches: u,
      onMountAutoFocus: d,
      onUnmountAutoFocus: m,
      ...h
    } = a, [p, b] = x.useState(null), v = Dn(d), S = Dn(m), T = x.useRef(null), E = at(l, b), O = x.useRef(u);
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
          const U = Y.target;
          C(U) ? T.current = U : pa(T.current, { select: !0 });
        }, N = function(Y) {
          if (D.paused || !p) return;
          const U = Y.relatedTarget;
          U !== null && (C(U) || pa(T.current, { select: !0 }));
        }, z = function(Y) {
          if (document.activeElement === document.body)
            for (const Z of Y)
              Z.removedNodes.length > 0 && pa(p);
        };
        Et(M, "handleFocusIn"), Et(N, "handleFocusOut"), Et(z, "handleMutations"), document.addEventListener("focusin", M), document.addEventListener("focusout", N);
        const R = new MutationObserver(z);
        return p && R.observe(p, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", M), document.removeEventListener("focusout", N), R.disconnect();
        };
      }
    }, [s, p, D.paused, C]), x.useEffect(() => {
      if (p) {
        ev.add(D);
        const M = document.activeElement;
        if (!p.contains(M)) {
          const z = new CustomEvent(Vf, Jy);
          p.addEventListener(Vf, v), p.dispatchEvent(z), z.defaultPrevented || (T0(N0(Kd(p)), { select: !0 }), document.activeElement === M && pa(p));
        }
        return () => {
          p.removeEventListener(Vf, v);
          const z = p.ownerDocument, R = CustomEvent;
          setTimeout(() => {
            const Y = new R(Xf, Jy);
            p.addEventListener(Xf, S), p.dispatchEvent(Y), Y.defaultPrevented || pa(M ?? z.body, { select: !0 }), p.removeEventListener(Xf, S), ev.remove(D);
          }, 0);
        };
      }
    }, [p, v, S, D]);
    const _ = x.useCallback(
      (M) => {
        if (!o && !s || D.paused) return;
        const N = M.key === "Tab" && !M.altKey && !M.ctrlKey && !M.metaKey, z = document.activeElement;
        if (N && z) {
          const R = M.currentTarget, [Y, U] = O0(R);
          Y && U ? !M.shiftKey && z === U ? (M.preventDefault(), o && pa(Y, { select: !0 })) : M.shiftKey && z === Y && (M.preventDefault(), o && pa(U, { select: !0 })) : z === R && M.preventDefault();
        }
      },
      [o, s, D.paused]
    );
    return /* @__PURE__ */ y.jsx(rt.div, { tabIndex: -1, ...h, ref: E, onKeyDown: _ });
  }, "FocusScope")
), w0 = x.createContext(null);
function S0({ registry: n, children: a }) {
  return n ? /* @__PURE__ */ y.jsx(w0.Provider, { value: n, children: a }) : a;
}
Et(S0, "FocusScopeBranchProvider");
function C0() {
  const [n, a] = x.useState([]), l = x.useMemo(
    () => ({
      add: /* @__PURE__ */ Et((o) => a((s) => s.includes(o) ? s : [...s, o]), "add"),
      remove: /* @__PURE__ */ Et((o) => a((s) => s.filter((u) => u !== o)), "remove")
    }),
    []
  );
  return { nodes: n, registry: l };
}
Et(C0, "useFocusScopeBranchRegistry");
function E0(n) {
  const a = x.useContext(w0);
  x.useEffect(() => {
    if (!(!n || !a))
      return a.add(n), () => a.remove(n);
  }, [n, a]);
}
Et(E0, "useFocusScopeBranch");
function T0(n, { select: a = !1 } = {}) {
  const l = document.activeElement;
  for (const o of n)
    if (pa(o, { select: a }), document.activeElement !== l) return;
}
Et(T0, "focusFirst");
function O0(n) {
  const a = Kd(n), l = md(a, n), o = md(a.reverse(), n);
  return [l, o];
}
Et(O0, "getTabbableEdges");
function Kd(n) {
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
Et(Kd, "getTabbableCandidates");
function md(n, a) {
  const l = typeof a.checkVisibility == "function" && a.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of n)
    if (!(l ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : M0(o, { upTo: a })))
      return o;
}
Et(md, "findVisible");
function M0(n, { upTo: a }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (a !== void 0 && n === a) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
Et(M0, "isHidden");
function D0(n) {
  return n.tagName === "INPUT" && typeof n.select == "function";
}
Et(D0, "isSelectableInput");
function pa(n, { select: a = !1 } = {}) {
  if (n && n.focus) {
    const o = (n.ownerDocument ?? document).activeElement;
    n.focus({ preventScroll: !0 }), n !== o && D0(n) && a && n.select();
  }
}
Et(pa, "focus");
var ev = _0();
function _0() {
  let n = [];
  return {
    add(a) {
      const l = n[0];
      a !== l && l?.pause(), n = hd(n, a), n.unshift(a);
    },
    remove(a) {
      n = hd(n, a), n[0]?.resume();
    }
  };
}
Et(_0, "createFocusScopesStack");
function hd(n, a) {
  const l = [...n], o = l.indexOf(a);
  return o !== -1 && l.splice(o, 1), l;
}
Et(hd, "arrayRemove");
function N0(n) {
  return n.filter((a) => a.tagName !== "A");
}
Et(N0, "removeLinks");
const d_ = ["top", "right", "bottom", "left"], or = Math.min, xa = Math.max, qs = Math.round, Ts = Math.floor, wa = (n) => ({
  x: n,
  y: n
}), m_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function A0(n, a, l) {
  return xa(n, or(a, l));
}
function Ea(n, a) {
  return typeof n == "function" ? n(a) : n;
}
function lr(n) {
  return n.split("-")[0];
}
function Fo(n) {
  return n.split("-")[1];
}
function Jd(n) {
  return n === "x" ? "y" : "x";
}
function em(n) {
  return n === "y" ? "height" : "width";
}
function Wn(n) {
  const a = n[0];
  return a === "t" || a === "b" ? "y" : "x";
}
function tm(n) {
  return Jd(Wn(n));
}
function h_(n, a, l) {
  l === void 0 && (l = !1);
  const o = Fo(n), s = tm(n), u = em(s);
  let d = s === "x" ? o === (l ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return a.reference[u] > a.floating[u] && (d = Ps(d)), [d, Ps(d)];
}
function p_(n) {
  const a = Ps(n);
  return [pd(n), a, pd(a)];
}
function pd(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const tv = ["left", "right"], nv = ["right", "left"], g_ = ["top", "bottom"], y_ = ["bottom", "top"];
function v_(n, a, l) {
  switch (n) {
    case "top":
    case "bottom":
      return l ? a ? nv : tv : a ? tv : nv;
    case "left":
    case "right":
      return a ? g_ : y_;
    default:
      return [];
  }
}
function b_(n, a, l, o) {
  const s = Fo(n);
  let u = v_(lr(n), l === "start", o);
  return s && (u = u.map((d) => d + "-" + s), a && (u = u.concat(u.map(pd)))), u;
}
function Ps(n) {
  const a = lr(n);
  return m_[a] + n.slice(a.length);
}
function x_(n) {
  var a, l, o, s;
  return {
    top: (a = n.top) != null ? a : 0,
    right: (l = n.right) != null ? l : 0,
    bottom: (o = n.bottom) != null ? o : 0,
    left: (s = n.left) != null ? s : 0
  };
}
function R0(n) {
  return typeof n != "number" ? x_(n) : {
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
function av(n, a, l) {
  let {
    reference: o,
    floating: s
  } = n;
  const u = Wn(a), d = tm(a), m = em(d), h = lr(a), p = u === "y", b = o.x + o.width / 2 - s.width / 2, v = o.y + o.height / 2 - s.height / 2, S = o[m] / 2 - s[m] / 2;
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
  const E = Fo(a);
  return E && (T[d] += S * (E === "end" ? 1 : -1) * (l && p ? -1 : 1)), T;
}
async function w_(n, a) {
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
    altBoundary: S = !1,
    padding: T = 0
  } = Ea(a, n), E = R0(T), C = m[S ? v === "floating" ? "reference" : "floating" : v], D = Gs(await u.getClippingRect({
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
  }, z = Gs(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const S_ = 50, C_ = async (n, a, l) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: u = [],
    platform: d
  } = l, m = d.detectOverflow ? d : {
    ...d,
    detectOverflow: w_
  }, h = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let p = await d.getElementRects({
    reference: n,
    floating: a,
    strategy: s
  }), {
    x: b,
    y: v
  } = av(p, o, h), S = o, T = 0;
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
      reset: R
    } = await _({
      x: b,
      y: v,
      initialPlacement: o,
      placement: S,
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
    }, R && T < S_ && (T++, typeof R == "object" && (R.placement && (S = R.placement), R.rects && (p = R.rects === !0 ? await d.getElementRects({
      reference: n,
      floating: a,
      strategy: s
    }) : R.rects), {
      x: b,
      y: v
    } = av(p, S, h)), O = -1);
  }
  return {
    x: b,
    y: v,
    placement: S,
    strategy: s,
    middlewareData: E
  };
}, E_ = (n) => ({
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
    const v = R0(b), S = {
      x: l,
      y: o
    }, T = tm(s), E = em(T), O = await d.getDimensions(p), C = T === "y", D = C ? "top" : "left", _ = C ? "bottom" : "right", M = C ? "clientHeight" : "clientWidth", N = u.reference[E] + u.reference[T] - S[T] - u.floating[E], z = S[T] - u.reference[T], R = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
    let Y = R ? R[M] : 0;
    (!Y || !await (d.isElement == null ? void 0 : d.isElement(R))) && (Y = m.floating[M] || u.floating[E]);
    const U = N / 2 - z / 2, Z = Y / 2 - O[E] / 2 - 1, ee = or(v[D], Z), ae = or(v[_], Z), ne = Y - O[E] - ae, I = Y / 2 - O[E] / 2 + U, J = A0(ee, I, ne), oe = !h.arrow && Fo(s) != null && I !== J && u.reference[E] / 2 - (I < ee ? ee : ae) - O[E] / 2 < 0, H = oe ? I < ee ? I - ee : I - ne : 0;
    return {
      [T]: S[T] + H,
      data: {
        [T]: J,
        centerOffset: I - J - H,
        ...oe && {
          alignmentOffset: H
        }
      },
      reset: oe
    };
  }
}), T_ = function(n) {
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
        fallbackPlacements: S,
        fallbackStrategy: T = "bestFit",
        fallbackAxisSideDirection: E = "none",
        flipAlignment: O = !0,
        ...C
      } = Ea(n, a);
      if ((l = u.arrow) != null && l.alignmentOffset)
        return {};
      const D = lr(s), _ = Wn(m), M = lr(m) === m, N = await (h.isRTL == null ? void 0 : h.isRTL(p.floating)), z = S || (M || !O ? [Ps(m)] : p_(m)), R = E !== "none";
      !S && R && z.push(...b_(m, O, E, N));
      const Y = [m, ...z], U = await h.detectOverflow(a, C), Z = [];
      let ee = ((o = u.flip) == null ? void 0 : o.overflows) || [];
      if (b && Z.push(U[D]), v) {
        const J = h_(s, d, N);
        Z.push(U[J[0]], U[J[1]]);
      }
      if (ee = [...ee, {
        placement: s,
        overflows: Z
      }], !Z.every((J) => J <= 0)) {
        var ae, ne;
        const J = (((ae = u.flip) == null ? void 0 : ae.index) || 0) + 1, oe = Y[J];
        if (oe && (!(v === "alignment" ? _ !== Wn(oe) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        ee.every((K) => Wn(K.placement) === _ ? K.overflows[0] > 0 : !0)))
          return {
            data: {
              index: J,
              overflows: ee
            },
            reset: {
              placement: oe
            }
          };
        let H = (ne = ee.filter((F) => F.overflows[0] <= 0).sort((F, K) => F.overflows[1] - K.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!H)
          switch (T) {
            case "bestFit": {
              var I;
              const F = (I = ee.filter((K) => {
                if (R) {
                  const re = Wn(K.placement);
                  return re === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  re === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((re) => re > 0).reduce((re, W) => re + W, 0)]).sort((K, re) => K[1] - re[1])[0]) == null ? void 0 : I[0];
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
function rv(n, a) {
  return {
    top: n.top - a.height,
    right: n.right - a.width,
    bottom: n.bottom - a.height,
    left: n.left - a.width
  };
}
function ov(n) {
  return d_.some((a) => n[a] >= 0);
}
const O_ = function(n) {
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
            ...u,
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
}, k0 = /* @__PURE__ */ new Set(["left", "top"]);
async function M_(n, a) {
  const {
    placement: l,
    platform: o,
    elements: s
  } = n, u = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), d = lr(l), m = Fo(l), h = Wn(l) === "y", p = k0.has(d) ? -1 : 1, b = u && h ? -1 : 1, v = Ea(a, n);
  let {
    mainAxis: S,
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
    y: S * p
  } : {
    x: S * p,
    y: T * b
  };
}
const D_ = function(n) {
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
      } = a, h = await M_(a, n);
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
}, __ = function(n) {
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
      }, v = await u.detectOverflow(a, p), S = Wn(s), T = Jd(S);
      let E = b[T], O = b[S];
      const C = (_, M) => A0(M + v[_ === "y" ? "top" : "left"], M, M - v[_ === "y" ? "bottom" : "right"]);
      d && (E = C(T, E)), m && (O = C(S, O));
      const D = h.fn({
        ...a,
        [T]: E,
        [S]: O
      });
      return {
        ...D,
        data: {
          x: D.x - l,
          y: D.y - o,
          enabled: {
            [T]: d,
            [S]: m
          }
        }
      };
    }
  };
}, N_ = function(n) {
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
      } = Ea(n, a), S = {
        x: s,
        y: u
      }, T = Wn(d), E = Jd(T);
      let O = S[E], C = S[T];
      const D = Ea(p, a), _ = typeof D == "number" ? {
        mainAxis: D,
        crossAxis: 0
      } : {
        mainAxis: (l = D.mainAxis) != null ? l : 0,
        crossAxis: (o = D.crossAxis) != null ? o : 0
      };
      if (b) {
        const z = E === "y" ? "height" : "width", R = m.reference[E] - m.floating[z] + _.mainAxis, Y = m.reference[E] + m.reference[z] - _.mainAxis;
        O < R ? O = R : O > Y && (O = Y);
      }
      if (v) {
        var M, N;
        const z = E === "y" ? "width" : "height", R = k0.has(lr(d)), Y = m.reference[T] - m.floating[z] + (R && ((M = h.offset) == null ? void 0 : M[T]) || 0) + (R ? 0 : _.crossAxis), U = m.reference[T] + m.reference[z] + (R ? 0 : ((N = h.offset) == null ? void 0 : N[T]) || 0) - (R ? _.crossAxis : 0);
        C < Y ? C = Y : C > U && (C = U);
      }
      return {
        [E]: O,
        [T]: C
      };
    }
  };
}, A_ = function(n) {
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
      } = Ea(n, a), h = await s.detectOverflow(a, m), p = lr(l), b = Fo(l), v = Wn(l) === "y", {
        width: S,
        height: T
      } = o.floating;
      let E, O;
      p === "top" || p === "bottom" ? (E = p, O = b === (await (s.isRTL == null ? void 0 : s.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (O = p, E = b === "end" ? "top" : "bottom");
      const C = T - h.top - h.bottom, D = S - h.left - h.right, _ = or(T - h[E], C), M = or(S - h[O], D), N = a.middlewareData.shift, z = !N;
      let R = _, Y = M;
      N != null && N.enabled.x && (Y = D), N != null && N.enabled.y && (R = C), z && !b && (v ? Y = S - 2 * xa(h.left, h.right) : R = T - 2 * xa(h.top, h.bottom)), await d({
        ...a,
        availableWidth: Y,
        availableHeight: R
      });
      const U = await s.getDimensions(u.floating);
      return S !== U.width || T !== U.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function tc() {
  return typeof window < "u";
}
function Qo(n) {
  return j0(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Kt(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function Oa(n) {
  var a;
  return (a = (j0(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : a.documentElement;
}
function j0(n) {
  return tc() ? n instanceof Node || n instanceof Kt(n).Node : !1;
}
function Vn(n) {
  return tc() ? n instanceof Element || n instanceof Kt(n).Element : !1;
}
function sr(n) {
  return tc() ? n instanceof HTMLElement || n instanceof Kt(n).HTMLElement : !1;
}
function lv(n) {
  return !tc() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Kt(n).ShadowRoot;
}
function nc(n) {
  const {
    overflow: a,
    overflowX: l,
    overflowY: o,
    display: s
  } = Xn(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + o + l) && s !== "inline" && s !== "contents";
}
function R_(n) {
  return /^(table|td|th)$/.test(Qo(n));
}
function ac(n) {
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
const k_ = /transform|translate|scale|rotate|perspective|filter/, j_ = /paint|layout|strict|content/, Rr = (n) => !!n && n !== "none";
let Ff;
function nm(n) {
  const a = Vn(n) ? Xn(n) : n;
  return Rr(a.transform) || Rr(a.translate) || Rr(a.scale) || Rr(a.rotate) || Rr(a.perspective) || !am() && (Rr(a.backdropFilter) || Rr(a.filter)) || k_.test(a.willChange || "") || j_.test(a.contain || "");
}
function z_(n) {
  let a = Yr(n);
  for (; sr(a) && !Ql(a); ) {
    if (nm(a))
      return a;
    if (ac(a))
      return null;
    a = Yr(a);
  }
  return null;
}
function am() {
  return Ff == null && (Ff = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ff;
}
function Ql(n) {
  return /^(html|body|#document)$/.test(Qo(n));
}
function Xn(n) {
  return Kt(n).getComputedStyle(n);
}
function rc(n) {
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
    lv(n) && n.host || // Fallback.
    Oa(n)
  );
  return lv(a) ? a.host : a;
}
function z0(n) {
  const a = Yr(n);
  return Ql(a) ? (n.ownerDocument || n).body : sr(a) && nc(a) ? a : z0(a);
}
function Zl(n, a, l) {
  var o;
  a === void 0 && (a = []), l === void 0 && (l = !0);
  const s = z0(n), u = s === ((o = n.ownerDocument) == null ? void 0 : o.body), d = Kt(s);
  if (u) {
    const m = gd(d);
    return a.concat(d, d.visualViewport || [], nc(s) ? s : [], m && l ? Zl(m) : []);
  } else
    return a.concat(s, Zl(s, [], l));
}
function gd(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function H0(n) {
  const a = Xn(n);
  let l = parseFloat(a.width) || 0, o = parseFloat(a.height) || 0;
  const s = sr(n), u = s ? n.offsetWidth : l, d = s ? n.offsetHeight : o, m = qs(l) !== u || qs(o) !== d;
  return m && (l = u, o = d), {
    width: l,
    height: o,
    $: m
  };
}
function rm(n) {
  return Vn(n) ? n : n.contextElement;
}
function Po(n) {
  const a = rm(n);
  if (!sr(a))
    return wa(1);
  const l = a.getBoundingClientRect(), {
    width: o,
    height: s,
    $: u
  } = H0(a);
  let d = (u ? qs(l.width) : l.width) / o, m = (u ? qs(l.height) : l.height) / s;
  return (!d || !Number.isFinite(d)) && (d = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: d,
    y: m
  };
}
const H_ = /* @__PURE__ */ wa(0);
function Y0(n) {
  const a = Kt(n);
  return !am() || !a.visualViewport ? H_ : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function Y_(n, a, l) {
  return a === void 0 && (a = !1), !!l && a && l === Kt(n);
}
function Br(n, a, l, o) {
  a === void 0 && (a = !1), l === void 0 && (l = !1);
  const s = n.getBoundingClientRect(), u = rm(n);
  let d = wa(1);
  a && (o ? Vn(o) && (d = Po(o)) : d = Po(n));
  const m = Y_(u, l, o) ? Y0(u) : wa(0);
  let h = (s.left + m.x) / d.x, p = (s.top + m.y) / d.y, b = s.width / d.x, v = s.height / d.y;
  if (u && o) {
    const S = Kt(u), T = Vn(o) ? Kt(o) : o;
    let E = S, O = gd(E);
    for (; O && T !== E; ) {
      const C = Po(O), D = O.getBoundingClientRect(), _ = Xn(O), M = D.left + (O.clientLeft + parseFloat(_.paddingLeft)) * C.x, N = D.top + (O.clientTop + parseFloat(_.paddingTop)) * C.y;
      h *= C.x, p *= C.y, b *= C.x, v *= C.y, h += M, p += N, E = Kt(O), O = gd(E);
    }
  }
  return Gs({
    width: b,
    height: v,
    x: h,
    y: p
  });
}
function oc(n, a) {
  const l = rc(n).scrollLeft;
  return a ? a.left + l : Br(Oa(n)).left + l;
}
function B0(n, a) {
  const l = n.getBoundingClientRect(), o = l.left + a.scrollLeft - oc(n, l), s = l.top + a.scrollTop;
  return {
    x: o,
    y: s
  };
}
function B_(n) {
  let {
    elements: a,
    rect: l,
    offsetParent: o,
    strategy: s
  } = n;
  const u = s === "fixed", d = Oa(o), m = a ? ac(a.floating) : !1;
  if (o === d || m && u)
    return l;
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = wa(1);
  const b = wa(0), v = sr(o);
  if ((v || !u) && ((Qo(o) !== "body" || nc(d)) && (h = rc(o)), v)) {
    const T = Br(o);
    p = Po(o), b.x = T.x + o.clientLeft, b.y = T.y + o.clientTop;
  }
  const S = d && !v && !u ? B0(d, h) : wa(0);
  return {
    width: l.width * p.x,
    height: l.height * p.y,
    x: l.x * p.x - h.scrollLeft * p.x + b.x + S.x,
    y: l.y * p.y - h.scrollTop * p.y + b.y + S.y
  };
}
function U_(n) {
  return n.getClientRects ? Array.from(n.getClientRects()) : [];
}
function L_(n) {
  const a = rc(n), l = n.ownerDocument.body, o = xa(n.scrollWidth, n.clientWidth, l.scrollWidth, l.clientWidth), s = xa(n.scrollHeight, n.clientHeight, l.scrollHeight, l.clientHeight);
  let u = -a.scrollLeft + oc(n);
  const d = -a.scrollTop;
  return Xn(l).direction === "rtl" && (u += xa(n.clientWidth, l.clientWidth) - o), {
    width: o,
    height: s,
    x: u,
    y: d
  };
}
const q_ = 25;
function P_(n, a, l) {
  l === void 0 && (l = "viewport");
  const o = l === "layoutViewport", s = Kt(n), u = Oa(n), d = s.visualViewport;
  let m = u.clientWidth, h = u.clientHeight, p = 0, b = 0;
  if (d) {
    const S = !am() || a === "fixed";
    o ? S || (p = -d.offsetLeft, b = -d.offsetTop) : (m = d.width, h = d.height, S && (p = d.offsetLeft, b = d.offsetTop));
  }
  if (oc(u) <= 0) {
    const S = u.ownerDocument, T = S.body, E = getComputedStyle(T), O = S.compatMode === "CSS1Compat" && parseFloat(E.marginLeft) + parseFloat(E.marginRight) || 0, C = Math.abs(u.clientWidth - T.clientWidth - O), D = getComputedStyle(u).scrollbarGutter === "stable both-edges" ? C / 2 : C;
    D <= q_ && (m -= D);
  }
  return {
    width: m,
    height: h,
    x: p,
    y: b
  };
}
function G_(n, a) {
  const l = Br(n, !0, a === "fixed"), o = l.top + n.clientTop, s = l.left + n.clientLeft, u = Po(n), d = n.clientWidth * u.x, m = n.clientHeight * u.y, h = s * u.x, p = o * u.y;
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
    o = P_(n, l, a);
  else if (a === "document")
    o = L_(Oa(n));
  else if (Vn(a))
    o = G_(a, l);
  else {
    const s = Y0(n);
    o = {
      x: a.x - s.x,
      y: a.y - s.y,
      width: a.width,
      height: a.height
    };
  }
  return Gs(o);
}
function W_(n, a) {
  const l = a.get(n);
  if (l)
    return l;
  let o = Zl(n, [], !1).filter((m) => Vn(m) && Qo(m) !== "body"), s = null;
  const u = Xn(n).position === "fixed";
  let d = u ? Yr(n) : n;
  for (; Vn(d) && !Ql(d); ) {
    const m = Xn(d), h = nm(d), p = s ? s.position : u ? "fixed" : "";
    !h && (p === "fixed" || p === "absolute" && m.position === "static") ? o = o.filter((v) => v !== d) : s = m, d = Yr(d);
  }
  return a.set(n, o), o;
}
function V_(n) {
  let {
    element: a,
    boundary: l,
    rootBoundary: o,
    strategy: s
  } = n;
  const d = [...l === "clippingAncestors" ? ac(a) ? [] : W_(a, this._c) : [].concat(l), o], m = iv(a, d[0], s);
  let h = m.top, p = m.right, b = m.bottom, v = m.left;
  for (let S = 1; S < d.length; S++) {
    const T = iv(a, d[S], s);
    h = xa(T.top, h), p = or(T.right, p), b = or(T.bottom, b), v = xa(T.left, v);
  }
  return {
    width: p - v,
    height: b - h,
    x: v,
    y: h
  };
}
function X_(n) {
  const {
    width: a,
    height: l
  } = H0(n);
  return {
    width: a,
    height: l
  };
}
function F_(n, a, l) {
  const o = sr(a), s = Oa(a), u = l === "fixed", d = Br(n, !0, u, a);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const h = wa(0);
  if ((o || !u) && ((Qo(a) !== "body" || nc(s)) && (m = rc(a)), o)) {
    const S = Br(a, !0, u, a);
    h.x = S.x + a.clientLeft, h.y = S.y + a.clientTop;
  }
  !o && s && (h.x = oc(s));
  const p = s && !o && !u ? B0(s, m) : wa(0), b = d.left + m.scrollLeft - h.x - p.x, v = d.top + m.scrollTop - h.y - p.y;
  return {
    x: b,
    y: v,
    width: d.width,
    height: d.height
  };
}
function Qf(n) {
  return Xn(n).position === "static";
}
function sv(n, a) {
  if (!sr(n) || Xn(n).position === "fixed")
    return null;
  if (a)
    return a(n);
  let l = n.offsetParent;
  return Oa(n) === l && (l = l.ownerDocument.body), l;
}
function U0(n, a) {
  const l = Kt(n);
  if (ac(n))
    return l;
  if (!sr(n)) {
    let s = Yr(n);
    for (; s && !Ql(s); ) {
      if (Vn(s) && !Qf(s))
        return s;
      s = Yr(s);
    }
    return l;
  }
  let o = sv(n, a);
  for (; o && R_(o) && Qf(o); )
    o = sv(o, a);
  return o && Ql(o) && Qf(o) && !nm(o) ? l : o || z_(n) || l;
}
const Q_ = async function(n) {
  const a = this.getOffsetParent || U0, l = this.getDimensions, o = await l(n.floating);
  return {
    reference: F_(n.reference, await a(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Z_(n) {
  return Xn(n).direction === "rtl";
}
const I_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: B_,
  getDocumentElement: Oa,
  getClippingRect: V_,
  getOffsetParent: U0,
  getElementRects: Q_,
  getClientRects: U_,
  getDimensions: X_,
  getScale: Po,
  isElement: Vn,
  isRTL: Z_
};
function L0(n, a) {
  return n.x === a.x && n.y === a.y && n.width === a.width && n.height === a.height;
}
function $_(n, a, l) {
  let o = null, s;
  const u = Oa(n);
  function d() {
    var b;
    clearTimeout(s), (b = o) == null || b.disconnect(), o = null;
  }
  function m(b, v) {
    b === void 0 && (b = !1), v === void 0 && (v = 1), d();
    const S = n.getBoundingClientRect(), {
      left: T,
      top: E,
      width: O,
      height: C
    } = S;
    if (b || a(), !O || !C)
      return;
    const D = Ts(E), _ = Ts(u.clientWidth - (T + O)), M = Ts(u.clientHeight - (E + C)), N = Ts(T), R = {
      rootMargin: -D + "px " + -_ + "px " + -M + "px " + -N + "px",
      threshold: xa(0, or(1, v)) || 1
    };
    let Y = !0;
    function U(Z) {
      const ee = Z[0].intersectionRatio;
      if (!L0(S, n.getBoundingClientRect()))
        return m();
      if (ee !== v) {
        if (!Y)
          return m();
        ee ? m(!1, ee) : s = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      Y = !1;
    }
    try {
      o = new IntersectionObserver(U, {
        ...R,
        // Handle <iframe>s
        root: u.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(U, R);
    }
    o.observe(n);
  }
  const h = Kt(n), p = () => m(l);
  return h.addEventListener("resize", p), m(!0), () => {
    h.removeEventListener("resize", p), d();
  };
}
function K_(n, a, l, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: u = !0,
    elementResize: d = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: h = !1
  } = o, p = rm(n), b = s || u ? [...p ? Zl(p) : [], ...a ? Zl(a) : []] : [];
  b.forEach((D) => {
    s && D.addEventListener("scroll", l), u && D.addEventListener("resize", l);
  });
  const v = p && m ? $_(p, l, u) : null;
  let S = -1, T = null;
  d && (T = new ResizeObserver((D) => {
    let [_] = D;
    _ && _.target === p && T && a && (T.unobserve(a), cancelAnimationFrame(S), S = requestAnimationFrame(() => {
      var M;
      (M = T) == null || M.observe(a);
    })), l();
  }), p && !h && T.observe(p), a && T.observe(a));
  let E, O = h ? Br(n) : null;
  h && C();
  function C() {
    const D = Br(n);
    O && !L0(O, D) && l(), O = D, E = requestAnimationFrame(C);
  }
  return l(), () => {
    var D;
    b.forEach((_) => {
      s && _.removeEventListener("scroll", l), u && _.removeEventListener("resize", l);
    }), v?.(), (D = T) == null || D.disconnect(), T = null, h && cancelAnimationFrame(E);
  };
}
const J_ = D_, e2 = __, t2 = T_, n2 = A_, a2 = O_, cv = E_, r2 = N_, o2 = (n, a, l) => {
  const o = /* @__PURE__ */ new Map(), s = l ?? {}, u = {
    ...I_,
    ...s.platform,
    _c: o
  };
  return C_(n, a, {
    ...s,
    platform: u
  });
};
var l2 = typeof document < "u", i2 = function() {
}, ks = l2 ? x.useLayoutEffect : i2;
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
      const u = s[o];
      if (!(u === "_owner" && n.$$typeof) && !Ws(n[u], a[u]))
        return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function q0(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function uv(n, a) {
  const l = q0(n);
  return Math.round(a * l) / l;
}
function Zf(n) {
  const a = x.useRef(n);
  return ks(() => {
    a.current = n;
  }), a;
}
function s2(n) {
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
  }), [S, T] = x.useState(o);
  Ws(S, o) || T(o);
  const [E, O] = x.useState(null), [C, D] = x.useState(null), _ = x.useCallback((K) => {
    K !== R.current && (R.current = K, O(K));
  }, []), M = x.useCallback((K) => {
    K !== Y.current && (Y.current = K, D(K));
  }, []), N = u || E, z = d || C, R = x.useRef(null), Y = x.useRef(null), U = x.useRef(b), Z = h != null, ee = Zf(h), ae = Zf(s), ne = Zf(p), I = x.useCallback(() => {
    if (!R.current || !Y.current)
      return;
    const K = {
      placement: a,
      strategy: l,
      middleware: S
    };
    ae.current && (K.platform = ae.current), o2(R.current, Y.current, K).then((re) => {
      const W = {
        ...re,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ne.current !== !1
      };
      J.current && !Ws(U.current, W) && (U.current = W, Kl.flushSync(() => {
        v(W);
      }));
    });
  }, [S, a, l, ae, ne]);
  ks(() => {
    p === !1 && U.current.isPositioned && (U.current.isPositioned = !1, v((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [p]);
  const J = x.useRef(!1);
  ks(() => (J.current = !0, () => {
    J.current = !1;
  }), []), ks(() => {
    if (N && (R.current = N), z && (Y.current = z), N && z) {
      if (ee.current)
        return ee.current(N, z, I);
      I();
    }
  }, [N, z, I, ee, Z]);
  const oe = x.useMemo(() => ({
    reference: R,
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
    const re = uv(H.floating, b.x), W = uv(H.floating, b.y);
    return m ? {
      ...K,
      transform: "translate(" + re + "px, " + W + "px)",
      ...q0(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: l,
      left: re,
      top: W
    };
  }, [l, m, H.floating, b.x, b.y]);
  return x.useMemo(() => ({
    ...b,
    update: I,
    refs: oe,
    elements: H,
    floatingStyles: F
  }), [b, I, oe, H, F]);
}
const c2 = (n) => {
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
}, u2 = (n, a) => {
  const l = J_(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, f2 = (n, a) => {
  const l = e2(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, d2 = (n, a) => ({
  fn: r2(n).fn,
  options: [n, a]
}), m2 = (n, a) => {
  const l = t2(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, h2 = (n, a) => {
  const l = n2(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, p2 = (n, a) => {
  const l = a2(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
}, g2 = (n, a) => {
  const l = c2(n);
  return {
    name: l.name,
    fn: l.fn,
    options: [n, a]
  };
};
var y2 = Object.defineProperty, ar = (n, a) => y2(n, "name", { value: a, configurable: !0 }), fv = {
  Partial: "partial"
}, dv = {
  Optimized: "optimized",
  Always: "always"
}, P0 = "Popper", [G0, lc] = /* @__PURE__ */ Ta(P0), [v2, W0] = G0(P0), V0 = /* @__PURE__ */ ar((n) => {
  const { __scopePopper: a, children: l } = n, [o, s] = x.useState(null), [u, d] = x.useState(void 0);
  return /* @__PURE__ */ y.jsx(
    v2,
    {
      scope: a,
      anchor: o,
      onAnchorChange: s,
      placementState: u,
      setPlacementState: d,
      children: l
    }
  );
}, "Popper"), b2 = "PopperAnchor", X0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ ar(function(a, l) {
    const { __scopePopper: o, virtualRef: s, ...u } = a, d = W0(b2, o), m = x.useRef(null), h = d.onAnchorChange, p = x.useCallback(
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
    const S = d.placementState && ic(d.placementState), T = S?.[0], E = S?.[1];
    return s ? null : /* @__PURE__ */ y.jsx(
      rt.div,
      {
        "data-radix-popper-side": T,
        "data-radix-popper-align": E,
        ...u,
        ref: b
      }
    );
  }, "PopperAnchor")
), F0 = "PopperContent", [x2, LA] = G0(F0), Q0 = /* @__PURE__ */ x.forwardRef(
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
      sticky: S = fv.Partial,
      hideWhenDetached: T = !1,
      updatePositionStrategy: E = dv.Optimized,
      onPlaced: O,
      ...C
    } = a, D = W0(F0, o), [_, M] = x.useState(null), N = at(l, M), [z, R] = x.useState(null), Y = Od(z), U = Y?.width ?? 0, Z = Y?.height ?? 0, ee = s + (d !== "center" ? "-" + d : ""), ae = typeof v == "number" ? v : { top: 0, right: 0, bottom: 0, left: 0, ...v }, ne = Array.isArray(b) ? b : [b], I = ne.length > 0, J = {
      padding: ae,
      boundary: ne.filter(Z0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: oe, floatingStyles: H, placement: F, isPositioned: K, middlewareData: re } = s2({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ee,
      whileElementsMounted: /* @__PURE__ */ ar((...ye) => K_(...ye, {
        animationFrame: E === dv.Always
      }), "whileElementsMounted"),
      elements: {
        reference: D.anchor
      },
      middleware: [
        u2({ mainAxis: u + Z, alignmentAxis: m }),
        p && f2({
          mainAxis: !0,
          crossAxis: !1,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...S === fv.Partial ? { limiter: d2() } : {},
          ...J
        }),
        p && m2({ ...J }),
        h2({
          ...J,
          apply: /* @__PURE__ */ ar(({ elements: ye, rects: he, availableWidth: Qe, availableHeight: qe }) => {
            const { width: Ce, height: Te } = he.reference, We = ye.floating.style;
            We.setProperty("--radix-popper-available-width", `${Qe}px`), We.setProperty("--radix-popper-available-height", `${qe}px`), We.setProperty("--radix-popper-anchor-width", `${Ce}px`), We.setProperty("--radix-popper-anchor-height", `${Te}px`);
          }, "apply")
        }),
        z && g2({ element: z, padding: h }),
        w2({ arrowWidth: U, arrowHeight: Z }),
        T && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        p2(
          I ? { strategy: "referenceHidden", ...J } : {
            strategy: "referenceHidden",
            padding: J.padding,
            altBoundary: J.altBoundary
          }
        )
      ]
    }), W = D.setPlacementState;
    bt(() => (W(F), () => {
      W(void 0);
    }), [F, W]);
    const [A, V] = ic(F), te = Dn(O);
    bt(() => {
      K && te?.();
    }, [K, te]);
    const le = re.arrow?.x, ie = re.arrow?.y, se = re.arrow?.centerOffset !== 0, [ve, Fe] = x.useState();
    return bt(() => {
      _ && Fe(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ y.jsx(
      "div",
      {
        ref: oe.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: K ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            re.transformOrigin?.x,
            re.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...re.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: a.dir,
        children: /* @__PURE__ */ y.jsx(
          x2,
          {
            scope: o,
            placedSide: A,
            placedAlign: V,
            onArrowChange: R,
            arrowX: le,
            arrowY: ie,
            shouldHideArrow: se,
            children: /* @__PURE__ */ y.jsx(
              rt.div,
              {
                "data-side": A,
                "data-align": V,
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
function Z0(n) {
  return n !== null;
}
ar(Z0, "isNotNull");
var w2 = /* @__PURE__ */ ar((n) => ({
  name: "transformOrigin",
  options: n,
  fn(a) {
    const { placement: l, rects: o, middlewareData: s } = a, d = s.arrow?.centerOffset !== 0, m = d ? 0 : n.arrowWidth, h = d ? 0 : n.arrowHeight, [p, b] = ic(l), v = { start: "0%", center: "50%", end: "100%" }[b], S = (s.arrow?.x ?? 0) + m / 2, T = (s.arrow?.y ?? 0) + h / 2;
    let E = "", O = "";
    return p === "bottom" ? (E = d ? v : `${S}px`, O = `${-h}px`) : p === "top" ? (E = d ? v : `${S}px`, O = `${o.floating.height + h}px`) : p === "right" ? (E = `${-h}px`, O = d ? v : `${T}px`) : p === "left" && (E = `${o.floating.width + h}px`, O = d ? v : `${T}px`), { data: { x: E, y: O } };
  }
}), "transformOrigin");
function ic(n) {
  const [a, l = "center"] = n.split("-");
  return [a, l];
}
ar(ic, "getSideAndAlignFromPlacement");
var S2 = Object.defineProperty, C2 = (n, a) => S2(n, "name", { value: a, configurable: !0 }), I0 = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ C2(function(a, l) {
    const { container: o, ...s } = a, [u, d] = x.useState(!1);
    bt(() => d(!0), []);
    const m = o || u && globalThis?.document?.body;
    return m ? Kl.createPortal(/* @__PURE__ */ y.jsx(rt.div, { ...s, ref: l }), m) : null;
  }, "Portal")
), E2 = function(n) {
  if (typeof document > "u")
    return null;
  var a = Array.isArray(n) ? n[0] : n;
  return a.ownerDocument.body;
}, Ho = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), Ms = {}, If = 0, $0 = function(n) {
  return n && (n.host || $0(n.parentNode));
}, T2 = function(n, a) {
  return a.map(function(l) {
    if (n.contains(l))
      return l;
    var o = $0(l);
    return o && n.contains(o) ? o : (console.error("aria-hidden", l, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(l) {
    return !!l;
  });
}, O2 = function(n, a, l, o) {
  var s = T2(a, Array.isArray(n) ? n : [n]);
  Ms[l] || (Ms[l] = /* @__PURE__ */ new WeakMap());
  var u = Ms[l], d = [], m = /* @__PURE__ */ new Set(), h = new Set(s), p = function(v) {
    !v || m.has(v) || (m.add(v), p(v.parentNode));
  };
  s.forEach(p);
  var b = function(v) {
    !v || h.has(v) || Array.prototype.forEach.call(v.children, function(S) {
      if (m.has(S))
        b(S);
      else
        try {
          var T = S.getAttribute(o), E = T !== null && T !== "false", O = (Ho.get(S) || 0) + 1, C = (u.get(S) || 0) + 1;
          Ho.set(S, O), u.set(S, C), d.push(S), O === 1 && E && Os.set(S, !0), C === 1 && S.setAttribute(l, "true"), E || S.setAttribute(o, "true");
        } catch (D) {
          console.error("aria-hidden: cannot operate on ", S, D);
        }
    });
  };
  return b(a), m.clear(), If++, function() {
    d.forEach(function(v) {
      var S = Ho.get(v) - 1, T = u.get(v) - 1;
      Ho.set(v, S), u.set(v, T), S || (Os.has(v) || v.removeAttribute(o), Os.delete(v)), T || v.removeAttribute(l);
    }), If--, If || (Ho = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), Ms = {});
  };
}, K0 = function(n, a, l) {
  l === void 0 && (l = "data-aria-hidden");
  var o = Array.from(Array.isArray(n) ? n : [n]), s = E2(n);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), O2(o, s, l, "aria-hidden")) : function() {
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
function J0(n, a) {
  var l = {};
  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && a.indexOf(o) < 0 && (l[o] = n[o]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(n); s < o.length; s++)
      a.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, o[s]) && (l[o[s]] = n[o[s]]);
  return l;
}
function M2(n, a, l) {
  if (l || arguments.length === 2) for (var o = 0, s = a.length, u; o < s; o++)
    (u || !(o in a)) && (u || (u = Array.prototype.slice.call(a, 0, o)), u[o] = a[o]);
  return n.concat(u || Array.prototype.slice.call(a));
}
var js = "right-scroll-bar-position", zs = "width-before-scroll-bar", D2 = "with-scroll-bars-hidden", _2 = "--removed-body-scroll-bar-size";
function $f(n, a) {
  return typeof n == "function" ? n(a) : n && (n.current = a), n;
}
function N2(n, a) {
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
var A2 = typeof window < "u" ? x.useLayoutEffect : x.useEffect, mv = /* @__PURE__ */ new WeakMap();
function R2(n, a) {
  var l = N2(null, function(o) {
    return n.forEach(function(s) {
      return $f(s, o);
    });
  });
  return A2(function() {
    var o = mv.get(l);
    if (o) {
      var s = new Set(o), u = new Set(n), d = l.current;
      s.forEach(function(m) {
        u.has(m) || $f(m, null);
      }), u.forEach(function(m) {
        s.has(m) || $f(m, d);
      });
    }
    mv.set(l, n);
  }, [n]), l;
}
function k2(n) {
  return n;
}
function j2(n, a) {
  a === void 0 && (a = k2);
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
function z2(n) {
  n === void 0 && (n = {});
  var a = j2(null);
  return a.options = Pn({ async: !0, ssr: !1 }, n), a;
}
var ex = function(n) {
  var a = n.sideCar, l = J0(n, ["sideCar"]);
  if (!a)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = a.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return x.createElement(o, Pn({}, l));
};
ex.isSideCarExport = !0;
function H2(n, a) {
  return n.useMedium(a), ex;
}
var tx = z2(), Kf = function() {
}, sc = x.forwardRef(function(n, a) {
  var l = x.useRef(null), o = x.useState({
    onScrollCapture: Kf,
    onWheelCapture: Kf,
    onTouchMoveCapture: Kf
  }), s = o[0], u = o[1], d = n.forwardProps, m = n.children, h = n.className, p = n.removeScrollBar, b = n.enabled, v = n.shards, S = n.sideCar, T = n.noRelative, E = n.noIsolation, O = n.inert, C = n.allowPinchZoom, D = n.as, _ = D === void 0 ? "div" : D, M = n.gapMode, N = J0(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), z = S, R = R2([l, a]), Y = Pn(Pn({}, N), s);
  return x.createElement(
    x.Fragment,
    null,
    b && x.createElement(z, { sideCar: tx, removeScrollBar: p, shards: v, noRelative: T, noIsolation: E, inert: O, setCallbacks: u, allowPinchZoom: !!C, lockRef: l, gapMode: M }),
    d ? x.cloneElement(x.Children.only(m), Pn(Pn({}, Y), { ref: R })) : x.createElement(_, Pn({}, Y, { className: h, ref: R }), m)
  );
});
sc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
sc.classNames = {
  fullWidth: zs,
  zeroRight: js
};
var Y2 = function() {
  if (typeof globalThis.__weiboStyleNonce < "u")
    return globalThis.__weiboStyleNonce;
};
function B2() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var a = Y2();
  return a && n.setAttribute("nonce", a), n;
}
function U2(n, a) {
  n.styleSheet ? n.styleSheet.cssText = a : n.appendChild(document.createTextNode(a));
}
function L2(n) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(n);
}
var q2 = function() {
  var n = 0, a = null;
  return {
    add: function(l) {
      n == 0 && (a = B2()) && (U2(a, l), L2(a)), n++;
    },
    remove: function() {
      n--, !n && a && (a.parentNode && a.parentNode.removeChild(a), a = null);
    }
  };
}, P2 = function() {
  var n = q2();
  return function(a, l) {
    x.useEffect(function() {
      return n.add(a), function() {
        n.remove();
      };
    }, [a && l]);
  };
}, nx = function() {
  var n = P2(), a = function(l) {
    var o = l.styles, s = l.dynamic;
    return n(o, s), null;
  };
  return a;
}, G2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Jf = function(n) {
  return parseInt(n || "", 10) || 0;
}, W2 = function(n) {
  var a = window.getComputedStyle(document.body), l = a[n === "padding" ? "paddingLeft" : "marginLeft"], o = a[n === "padding" ? "paddingTop" : "marginTop"], s = a[n === "padding" ? "paddingRight" : "marginRight"];
  return [Jf(l), Jf(o), Jf(s)];
}, V2 = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return G2;
  var a = W2(n), l = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: a[0],
    top: a[1],
    right: a[2],
    gap: Math.max(0, o - l + a[2] - a[0])
  };
}, X2 = nx(), Go = "data-scroll-locked", F2 = function(n, a, l, o) {
  var s = n.left, u = n.top, d = n.right, m = n.gap;
  return l === void 0 && (l = "margin"), `
  .`.concat(D2, ` {
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
    padding-top: `).concat(u, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(o, `;
    `),
    l === "padding" && "padding-right: ".concat(m, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(js, ` {
    right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(zs, ` {
    margin-right: `).concat(m, "px ").concat(o, `;
  }
  
  .`).concat(js, " .").concat(js, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(zs, " .").concat(zs, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Go, `] {
    `).concat(_2, ": ").concat(m, `px;
  }
`);
}, hv = function() {
  var n = parseInt(document.body.getAttribute(Go) || "0", 10);
  return isFinite(n) ? n : 0;
}, Q2 = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Go, (hv() + 1).toString()), function() {
      var n = hv() - 1;
      n <= 0 ? document.body.removeAttribute(Go) : document.body.setAttribute(Go, n.toString());
    };
  }, []);
}, Z2 = function(n) {
  var a = n.noRelative, l = n.noImportant, o = n.gapMode, s = o === void 0 ? "margin" : o;
  Q2();
  var u = x.useMemo(function() {
    return V2(s);
  }, [s]);
  return x.createElement(X2, { styles: F2(u, !a, s, l ? "" : "!important") });
}, yd = !1;
if (typeof window < "u")
  try {
    var Ds = Object.defineProperty({}, "passive", {
      get: function() {
        return yd = !0, !0;
      }
    });
    window.addEventListener("test", Ds, Ds), window.removeEventListener("test", Ds, Ds);
  } catch {
    yd = !1;
  }
var Yo = yd ? { passive: !1 } : !1, I2 = function(n) {
  return n.tagName === "TEXTAREA";
}, ax = function(n, a) {
  if (!(n instanceof Element))
    return !1;
  var l = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    l[a] !== "hidden" && // contains scroll inside self
    !(l.overflowY === l.overflowX && !I2(n) && l[a] === "visible")
  );
}, $2 = function(n) {
  return ax(n, "overflowY");
}, K2 = function(n) {
  return ax(n, "overflowX");
}, pv = function(n, a) {
  var l = a.ownerDocument, o = a;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = rx(n, o);
    if (s) {
      var u = ox(n, o), d = u[1], m = u[2];
      if (d > m)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== l.body);
  return !1;
}, J2 = function(n) {
  var a = n.scrollTop, l = n.scrollHeight, o = n.clientHeight;
  return [
    a,
    l,
    o
  ];
}, eN = function(n) {
  var a = n.scrollLeft, l = n.scrollWidth, o = n.clientWidth;
  return [
    a,
    l,
    o
  ];
}, rx = function(n, a) {
  return n === "v" ? $2(a) : K2(a);
}, ox = function(n, a) {
  return n === "v" ? J2(a) : eN(a);
}, tN = function(n, a) {
  return n === "h" && a === "rtl" ? -1 : 1;
}, nN = function(n, a, l, o, s) {
  var u = tN(n, window.getComputedStyle(a).direction), d = u * o, m = l.target, h = a.contains(m), p = !1, b = d > 0, v = 0, S = 0;
  do {
    if (!m)
      break;
    var T = ox(n, m), E = T[0], O = T[1], C = T[2], D = O - C - u * E;
    (E || D) && rx(n, m) && (v += D, S += E);
    var _ = m.parentNode;
    m = _ && _.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? _.host : _;
  } while (
    // portaled content
    !h && m !== document.body || // self content
    h && (a.contains(m) || a === m)
  );
  return (b && Math.abs(v) < 1 || !b && Math.abs(S) < 1) && (p = !0), p;
}, _s = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, gv = function(n) {
  return [n.deltaX, n.deltaY];
}, yv = function(n) {
  return n && "current" in n ? n.current : n;
}, aN = function(n, a) {
  return n[0] === a[0] && n[1] === a[1];
}, rN = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, oN = 0, Bo = [];
function lN(n) {
  var a = x.useRef([]), l = x.useRef([0, 0]), o = x.useRef(), s = x.useState(oN++)[0], u = x.useState(nx)[0], d = x.useRef(n);
  x.useEffect(function() {
    d.current = n;
  }, [n]), x.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var O = M2([n.lockRef.current], (n.shards || []).map(yv), !0).filter(Boolean);
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
    var D = _s(O), _ = l.current, M = "deltaX" in O ? O.deltaX : _[0] - D[0], N = "deltaY" in O ? O.deltaY : _[1] - D[1], z, R = O.target, Y = Math.abs(M) > Math.abs(N) ? "h" : "v";
    if ("touches" in O && Y === "h" && R.type === "range")
      return !1;
    var U = window.getSelection(), Z = U && U.anchorNode, ee = Z ? Z === R || Z.contains(R) : !1;
    if (ee)
      return !1;
    var ae = pv(Y, R);
    if (!ae)
      return !0;
    if (ae ? z = Y : (z = Y === "v" ? "h" : "v", ae = pv(Y, R)), !ae)
      return !1;
    if (!o.current && "changedTouches" in O && (M || N) && (o.current = z), !z)
      return !0;
    var ne = o.current || z;
    return nN(ne, C, O, ne === "h" ? M : N);
  }, []), h = x.useCallback(function(O) {
    var C = O;
    if (!(!Bo.length || Bo[Bo.length - 1] !== u)) {
      var D = "deltaY" in C ? gv(C) : _s(C), _ = a.current.filter(function(z) {
        return z.name === C.type && (z.target === C.target || C.target === z.shadowParent) && aN(z.delta, D);
      })[0];
      if (_ && _.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!_) {
        var M = (d.current.shards || []).map(yv).filter(Boolean).filter(function(z) {
          return z.contains(C.target);
        }), N = M.length > 0 ? m(C, M[0]) : !d.current.noIsolation;
        N && C.cancelable && C.preventDefault();
      }
    }
  }, []), p = x.useCallback(function(O, C, D, _) {
    var M = { name: O, delta: C, target: D, should: _, shadowParent: iN(D) };
    a.current.push(M), setTimeout(function() {
      a.current = a.current.filter(function(N) {
        return N !== M;
      });
    }, 1);
  }, []), b = x.useCallback(function(O) {
    l.current = _s(O), o.current = void 0;
  }, []), v = x.useCallback(function(O) {
    p(O.type, gv(O), O.target, m(O, n.lockRef.current));
  }, []), S = x.useCallback(function(O) {
    p(O.type, _s(O), O.target, m(O, n.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Bo.push(u), n.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: S
    }), document.addEventListener("wheel", h, Yo), document.addEventListener("touchmove", h, Yo), document.addEventListener("touchstart", b, Yo), function() {
      Bo = Bo.filter(function(O) {
        return O !== u;
      }), document.removeEventListener("wheel", h, Yo), document.removeEventListener("touchmove", h, Yo), document.removeEventListener("touchstart", b, Yo);
    };
  }, []);
  var T = n.removeScrollBar, E = n.inert;
  return x.createElement(
    x.Fragment,
    null,
    E ? x.createElement(u, { styles: rN(s) }) : null,
    T ? x.createElement(Z2, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function iN(n) {
  for (var a = null; n !== null; )
    n instanceof ShadowRoot && (a = n.host, n = n.host), n = n.parentNode;
  return a;
}
const sN = H2(tx, lN);
var om = x.forwardRef(function(n, a) {
  return x.createElement(sc, Pn({}, n, { ref: a, sideCar: sN }));
});
om.classNames = sc.classNames;
var cN = Object.defineProperty, Ma = (n, a) => cN(n, "name", { value: a, configurable: !0 }), lm = "Popover", [lx, qA] = /* @__PURE__ */ Ta(lm, [
  lc
]), im = lc(), [uN, Zo] = lx(lm), fN = /* @__PURE__ */ Ma((n) => {
  const {
    __scopePopover: a,
    children: l,
    open: o,
    defaultOpen: s,
    onOpenChange: u,
    modal: d = !1
  } = n, m = im(a), h = x.useRef(null), [p, b] = x.useState(!1), [v, S] = x.useState(0), [T, E] = x.useState(0), [O, C] = zr({
    prop: o,
    defaultProp: s ?? !1,
    onChange: u,
    caller: lm
  });
  return /* @__PURE__ */ y.jsx(V0, { ...m, children: /* @__PURE__ */ y.jsx(
    uN,
    {
      scope: a,
      contentId: nr(),
      titleId: nr(),
      descriptionId: nr(),
      titlePresent: v > 0,
      descriptionPresent: T > 0,
      setTitleCount: S,
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
}, "Popover"), dN = "PopoverTrigger", mN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Ma(function(a, l) {
    const { __scopePopover: o, ...s } = a, u = Zo(dN, o), d = im(o), m = at(l, u.triggerRef), h = /* @__PURE__ */ y.jsx(
      rt.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : void 0,
        "data-state": sm(u.open),
        ...s,
        ref: m,
        onClick: ze(a.onClick, u.onOpenToggle)
      }
    );
    return u.hasCustomAnchor ? h : /* @__PURE__ */ y.jsx(X0, { asChild: !0, ...d, children: h });
  }, "PopoverTrigger")
), ix = "PopoverPortal", [hN, pN] = lx(ix, {
  forceMount: void 0
}), gN = /* @__PURE__ */ Ma((n) => {
  const { __scopePopover: a, forceMount: l, children: o, container: s } = n, u = Zo(ix, a);
  return /* @__PURE__ */ y.jsx(hN, { scope: a, forceMount: l, children: /* @__PURE__ */ y.jsx(Qs, { present: l || u.open, children: /* @__PURE__ */ y.jsx(I0, { asChild: !0, container: s, children: o }) }) });
}, "PopoverPortal"), Il = "PopoverContent", yN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = pN(Il, a.__scopePopover), { forceMount: s = o.forceMount, ...u } = a, d = Zo(Il, a.__scopePopover);
    return /* @__PURE__ */ y.jsx(Qs, { present: s || d.open, children: d.modal ? /* @__PURE__ */ y.jsx(bN, { ...u, ref: l }) : /* @__PURE__ */ y.jsx(xN, { ...u, ref: l }) });
  }, "PopoverContent")
), vN = /* @__PURE__ */ Sa("PopoverContent.RemoveScroll"), bN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = Zo(Il, a.__scopePopover), s = x.useRef(null), u = at(l, s), d = x.useRef(!1), { nodes: m, registry: h } = C0();
    return x.useEffect(() => {
      const p = s.current;
      if (p) return K0(p);
    }, []), /* @__PURE__ */ y.jsx(
      om,
      {
        as: vN,
        allowPinchZoom: !0,
        shards: x.useMemo(
          () => [s, ...m.map((p) => ({ current: p }))],
          [s, m]
        ),
        children: /* @__PURE__ */ y.jsx(
          sx,
          {
            ...a,
            ref: u,
            branchNodes: m,
            branchRegistry: h,
            trapFocus: o.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ze(a.onCloseAutoFocus, (p) => {
              p.preventDefault(), d.current || o.triggerRef.current?.focus();
            }),
            onPointerDownOutside: ze(
              a.onPointerDownOutside,
              (p) => {
                const b = p.detail.originalEvent, v = b.button === 0 && b.ctrlKey === !0, S = b.button === 2 || v;
                d.current = S;
              },
              { checkForDefaultPrevented: !1 }
            ),
            onFocusOutside: ze(
              a.onFocusOutside,
              (p) => p.preventDefault(),
              { checkForDefaultPrevented: !1 }
            )
          }
        )
      }
    );
  }, "PopoverContentModal")
), xN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ma(function(a, l) {
    const o = Zo(Il, a.__scopePopover), s = x.useRef(!1), u = x.useRef(!1);
    return /* @__PURE__ */ y.jsx(
      sx,
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
), sx = /* @__PURE__ */ x.forwardRef(
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
      "aria-describedby": S,
      branchNodes: T,
      branchRegistry: E,
      ...O
    } = a, C = Zo(Il, o), D = im(o), [_, M] = x.useState(null), N = at(l, M);
    return E0(_), ec(), /* @__PURE__ */ y.jsx(S0, { registry: E, children: /* @__PURE__ */ y.jsx(
      x0,
      {
        asChild: !0,
        loop: !0,
        trapped: s,
        branches: T,
        onMountAutoFocus: u,
        onUnmountAutoFocus: d,
        children: /* @__PURE__ */ y.jsx(
          y0,
          {
            asChild: !0,
            disableOutsidePointerEvents: m,
            onInteractOutside: v,
            onEscapeKeyDown: h,
            onPointerDownOutside: p,
            onFocusOutside: b,
            onDismiss: () => C.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ y.jsx(
              Q0,
              {
                "data-state": sm(C.open),
                role: "dialog",
                id: C.contentId,
                "aria-labelledby": C.titlePresent ? C.titleId : void 0,
                "aria-describedby": C.descriptionPresent ? cx(S, C.descriptionId) : S,
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
function sm(n) {
  return n ? "open" : "closed";
}
Ma(sm, "getState");
function cx(...n) {
  const a = /* @__PURE__ */ new Set();
  for (const l of n)
    if (typeof l == "string")
      for (const o of String(l).trim().split(/\s+/))
        o && a.add(o);
  return a.size > 0 ? Array.from(a).join(" ") : void 0;
}
Ma(cx, "concatAriaDescribedby");
const cm = x.createContext(null), ux = fN, fx = mN;
function dx({
  className: n,
  align: a = "center",
  sideOffset: l = 4,
  ...o
}) {
  const s = x.useContext(cm);
  return /* @__PURE__ */ y.jsx(gN, { container: s || void 0, children: /* @__PURE__ */ y.jsx(
    yN,
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
var wN = Object.defineProperty, SN = (n, a) => wN(n, "name", { value: a, configurable: !0 });
function vd(n, [a, l]) {
  return Math.min(l, Math.max(a, n));
}
SN(vd, "clamp");
var CN = Object.freeze({
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
}), EN = Object.defineProperty, Le = (n, a) => EN(n, "name", { value: a, configurable: !0 }), vv = {
  ItemAligned: "item-aligned",
  Popper: "popper"
}, TN = {
  RTL: "rtl"
}, ON = [" ", "Enter", "ArrowUp", "ArrowDown"], MN = [" ", "Enter"], Wo = "Select", [cc, uc, DN] = /* @__PURE__ */ Ad(Wo), [Vr, PA] = /* @__PURE__ */ Ta(Wo, [
  DN,
  lc
]), um = lc(), [_N, cr] = Vr(Wo), [NN, AN] = Vr(Wo);
function mx(n) {
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
    disabled: S,
    required: T,
    form: E,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: O
  } = n, C = um(a), [D, _] = x.useState(null), [M, N] = x.useState(null), [z, R] = x.useState(!1), Y = Xs(p), [U, Z] = zr({
    prop: o,
    defaultProp: s ?? !1,
    onChange: u,
    caller: Wo
  }), [ee, ae] = zr({
    prop: d,
    defaultProp: m,
    onChange: h,
    caller: Wo
  }), ne = x.useRef(null), I = x.useRef(!1), [J, oe] = x.useState(null), H = /* @__PURE__ */ Le((se) => {
    oe({
      value: se,
      hasConsumerStoppedPropagation: I.current
    }), ae(se);
  }, "handleUserSelect"), F = x.useRef(ee);
  x.useEffect(() => {
    const se = E ? D?.ownerDocument.getElementById(E) : D?.form;
    if (se instanceof HTMLFormElement) {
      const ve = /* @__PURE__ */ Le(() => ae(F.current), "reset");
      return se.addEventListener("reset", ve), () => se.removeEventListener("reset", ve);
    }
  }, [E, D, ae]);
  const K = D ? !!E || !!D.closest("form") : !0, [re, W] = x.useState(/* @__PURE__ */ new Set()), A = nr(), V = Array.from(re).map((se) => se.props.value).join(";"), te = x.useCallback((se) => {
    W((ve) => new Set(ve).add(se));
  }, []), le = x.useCallback((se) => {
    W((ve) => {
      const Fe = new Set(ve);
      return Fe.delete(se), Fe;
    });
  }, []), ie = {
    required: T,
    trigger: D,
    onTriggerChange: _,
    valueNode: M,
    onValueNodeChange: N,
    valueNodeHasChildren: z,
    onValueNodeHasChildrenChange: R,
    contentId: A,
    value: ee,
    onValueChange: ae,
    hasConsumerStoppedPropagationRef: I,
    userSelection: J,
    onUserSelect: H,
    open: U,
    onOpenChange: Z,
    dir: Y,
    triggerPointerDownPosRef: ne,
    disabled: S,
    name: b,
    autoComplete: v,
    form: E,
    nativeOptions: re,
    nativeSelectKey: V,
    isFormControl: K
  };
  return /* @__PURE__ */ y.jsx(V0, { ...C, children: /* @__PURE__ */ y.jsx(_N, { scope: a, ...ie, children: /* @__PURE__ */ y.jsx(cc.Provider, { scope: a, children: /* @__PURE__ */ y.jsx(
    NN,
    {
      scope: a,
      onNativeOptionAdd: te,
      onNativeOptionRemove: le,
      children: yx(O) ? O(ie) : l
    }
  ) }) }) });
}
Le(mx, "SelectProvider");
var RN = /* @__PURE__ */ Le((n) => {
  const { __scopeSelect: a, children: l, ...o } = n;
  return /* @__PURE__ */ y.jsx(
    mx,
    {
      __scopeSelect: a,
      ...o,
      internal_do_not_use_render: ({ isFormControl: s }) => /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        l,
        s ? /* @__PURE__ */ y.jsx(
          rA,
          {
            __scopeSelect: a
          }
        ) : null
      ] })
    }
  );
}, "Select"), kN = "SelectTrigger", jN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, disabled: s = !1, ...u } = a, d = um(o), m = cr(kN, o), h = m.disabled || s, p = at(l, m.onTriggerChange), b = uc(o), v = x.useRef("touch"), [S, T, E] = dm((C) => {
      const D = b().filter((N) => !N.disabled), _ = D.find((N) => N.value === m.value), M = mm(D, C, _);
      M !== void 0 && m.onUserSelect(M.value);
    }), O = /* @__PURE__ */ Le((C) => {
      h || (m.onOpenChange(!0), E()), C && (m.triggerPointerDownPosRef.current = {
        x: Math.round(C.pageX),
        y: Math.round(C.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ y.jsx(X0, { asChild: !0, ...d, children: /* @__PURE__ */ y.jsx(
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
        ...u,
        ref: p,
        onClick: ze(u.onClick, (C) => {
          C.currentTarget.focus(), v.current !== "mouse" && O(C);
        }),
        onPointerDown: ze(u.onPointerDown, (C) => {
          v.current = C.pointerType;
          const D = C.target;
          D.hasPointerCapture(C.pointerId) && D.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (O(C), C.preventDefault());
        }),
        onKeyDown: ze(u.onKeyDown, (C) => {
          const D = S.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && (m.hasConsumerStoppedPropagationRef.current = C.isPropagationStopped(), T(C.key)), !(D && C.key === " ") && ON.includes(C.key) && (O(), C.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), zN = "SelectValue", HN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, className: s, style: u, children: d, placeholder: m = "", ...h } = a, p = cr(zN, o), { onValueNodeHasChildrenChange: b } = p, v = d !== void 0, S = at(l, p.onValueNodeChange);
    bt(() => {
      b(v);
    }, [b, v]);
    const T = ni(p.value);
    return /* @__PURE__ */ y.jsx(
      rt.span,
      {
        ...h,
        asChild: T ? !1 : h.asChild,
        ref: S,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ y.jsx(x.Fragment, { children: T ? m : d }, T ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), YN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, children: s, ...u } = a;
    return /* @__PURE__ */ y.jsx(rt.span, { "aria-hidden": !0, ...u, ref: l, children: s || "▼" });
  }, "SelectIcon")
), BN = "SelectPortal", [UN, LN] = Vr(BN, {
  forceMount: void 0
}), qN = /* @__PURE__ */ Le((n) => {
  const { __scopeSelect: a, forceMount: l, ...o } = n;
  return /* @__PURE__ */ y.jsx(UN, { scope: n.__scopeSelect, forceMount: l, children: /* @__PURE__ */ y.jsx(I0, { asChild: !0, ...o }) });
}, "SelectPortal"), Ur = "SelectContent", PN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const o = LN(Ur, a.__scopeSelect), { forceMount: s = o.forceMount, ...u } = a, d = cr(Ur, a.__scopeSelect), [m, h] = x.useState();
    return bt(() => {
      h(new DocumentFragment());
    }, []), /* @__PURE__ */ y.jsx(Qs, { present: s || d.open, children: ({ present: p }) => p ? /* @__PURE__ */ y.jsx(VN, { ...u, ref: l }) : /* @__PURE__ */ y.jsx(GN, { ...u, fragment: m }) });
  }, "SelectContent")
), GN = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const { __scopeSelect: o, children: s, fragment: u } = a;
  return u ? Kl.createPortal(
    /* @__PURE__ */ y.jsx(hx, { scope: o, children: /* @__PURE__ */ y.jsx(cc.Slot, { scope: o, children: /* @__PURE__ */ y.jsx("div", { ref: l, children: s }) }) }),
    u
  ) : null;
}, "SelectContentFragment")), On = 10, [hx, Xr] = Vr(Ur), WN = /* @__PURE__ */ Sa("SelectContent.RemoveScroll"), VN = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o } = a, {
      position: s = vv.ItemAligned,
      onCloseAutoFocus: u,
      onEscapeKeyDown: d,
      onPointerDownOutside: m,
      //
      // PopperContent props
      side: h,
      sideOffset: p,
      align: b,
      alignOffset: v,
      arrowPadding: S,
      collisionBoundary: T,
      collisionPadding: E,
      sticky: O,
      hideWhenDetached: C,
      avoidCollisions: D,
      //
      ..._
    } = a, M = cr(Ur, o), [N, z] = x.useState(null), [R, Y] = x.useState(null), U = at(l, z), [Z, ee] = x.useState(null), [ae, ne] = x.useState(
      null
    ), I = uc(o), [J, oe] = x.useState(!1), H = x.useRef(!1), F = x.useRef(!1), K = x.useRef(!1);
    x.useEffect(() => {
      if (N) return K0(N);
    }, [N]), ec();
    const re = x.useCallback(
      (he) => {
        const [Qe, ...qe] = I().map((We) => We.ref.current), [Ce] = qe.slice(-1), Te = document.activeElement;
        for (const We of he)
          if (We === Te || (We?.scrollIntoView({ block: "nearest" }), We === Qe && R && (R.scrollTop = 0), We === Ce && R && (R.scrollTop = R.scrollHeight), We?.focus(), document.activeElement !== Te)) return;
      },
      [I, R]
    ), W = x.useCallback(
      () => re([Z, N]),
      [re, Z, N]
    );
    x.useEffect(() => {
      J && W();
    }, [J, W]);
    const { onOpenChange: A, triggerPointerDownPosRef: V } = M;
    x.useEffect(() => {
      if (N) {
        let he = { x: 0, y: 0 };
        const Qe = /* @__PURE__ */ Le((Ce) => {
          he = {
            x: Math.abs(Math.round(Ce.pageX) - (V.current?.x ?? 0)),
            y: Math.abs(Math.round(Ce.pageY) - (V.current?.y ?? 0))
          };
        }, "handlePointerMove"), qe = /* @__PURE__ */ Le((Ce) => {
          he.x <= 10 && he.y <= 10 ? Ce.preventDefault() : Ce.composedPath().includes(N) || A(!1), document.removeEventListener("pointermove", Qe), V.current = null;
        }, "handlePointerUp");
        return V.current !== null && (document.addEventListener("pointermove", Qe), document.addEventListener("pointerup", qe, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Qe), document.removeEventListener("pointerup", qe, { capture: !0 });
        };
      }
    }, [N, A, V]), x.useEffect(() => {
      const he = /* @__PURE__ */ Le(() => A(!1), "close");
      return window.addEventListener("blur", he), window.addEventListener("resize", he), () => {
        window.removeEventListener("blur", he), window.removeEventListener("resize", he);
      };
    }, [A]);
    const [te, le] = dm((he) => {
      const Qe = I().filter((Te) => !Te.disabled), qe = Qe.find((Te) => Te.ref.current === document.activeElement), Ce = mm(Qe, he, qe);
      Ce && setTimeout(() => Ce.ref.current?.focus());
    }), ie = x.useCallback(
      (he, Qe, qe) => {
        const Ce = !F.current;
        Ce && (F.current = !0);
        const Te = !H.current && !qe;
        M.value !== void 0 && M.value === Qe || Te ? (ee(he), Te && (H.current = !0)) : Ce && ee(he);
      },
      [M.value]
    ), se = x.useCallback(() => N?.focus(), [N]), ve = x.useCallback(
      (he, Qe, qe) => {
        if (!he) return;
        const Ce = !K.current;
        Ce && (K.current = !0);
        const Te = !H.current && !qe;
        (M.value !== void 0 && M.value === Qe || Te || Ce) && ne(he);
      },
      [M.value]
    ), Fe = s === vv.Popper ? bv : XN, ye = Fe === bv ? {
      side: h,
      sideOffset: p,
      align: b,
      alignOffset: v,
      arrowPadding: S,
      collisionBoundary: T,
      collisionPadding: E,
      sticky: O,
      hideWhenDetached: C,
      avoidCollisions: D
    } : {};
    return /* @__PURE__ */ y.jsx(
      hx,
      {
        scope: o,
        content: N,
        viewport: R,
        onViewportChange: Y,
        itemRefCallback: ie,
        selectedItem: Z,
        onItemLeave: se,
        itemTextRefCallback: ve,
        focusSelectedItem: W,
        selectedItemText: ae,
        position: s,
        isPositioned: J,
        searchRef: te,
        children: /* @__PURE__ */ y.jsx(om, { as: WN, allowPinchZoom: !0, children: /* @__PURE__ */ y.jsx(
          x0,
          {
            asChild: !0,
            trapped: M.open,
            onMountAutoFocus: (he) => {
              he.preventDefault();
            },
            onUnmountAutoFocus: ze(u, (he) => {
              M.trigger?.focus({ preventScroll: !0 }), he.preventDefault();
            }),
            children: /* @__PURE__ */ y.jsx(
              y0,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: m,
                onFocusOutside: (he) => he.preventDefault(),
                onDismiss: () => M.onOpenChange(!1),
                children: /* @__PURE__ */ y.jsx(
                  Fe,
                  {
                    role: "listbox",
                    id: M.contentId,
                    "data-state": M.open ? "open" : "closed",
                    dir: M.dir,
                    onContextMenu: (he) => he.preventDefault(),
                    ..._,
                    ...ye,
                    onPlaced: () => oe(!0),
                    ref: U,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: ze(_.onKeyDown, (he) => {
                      const Qe = he.ctrlKey || he.altKey || he.metaKey;
                      if (he.key === "Tab" && he.preventDefault(), !Qe && he.key.length === 1 && le(he.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(he.key)) {
                        let Ce = I().filter((Te) => !Te.disabled).map((Te) => Te.ref.current);
                        if (["ArrowUp", "End"].includes(he.key) && (Ce = Ce.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(he.key)) {
                          const Te = he.target, We = Ce.indexOf(Te);
                          Ce = Ce.slice(We + 1);
                        }
                        setTimeout(() => re(Ce)), he.preventDefault();
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
), XN = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const { __scopeSelect: o, onPlaced: s, ...u } = a, d = cr(Ur, o), m = Xr(Ur, o), [h, p] = x.useState(null), [b, v] = x.useState(null), S = at(l, v), T = uc(o), E = x.useRef(!1), O = x.useRef(!0), { viewport: C, selectedItem: D, selectedItemText: _, focusSelectedItem: M } = m, N = x.useCallback(() => {
    if (d.trigger && d.valueNode && h && b && C && D && _) {
      const U = d.trigger.getBoundingClientRect(), Z = b.getBoundingClientRect(), ee = d.valueNode.getBoundingClientRect(), ae = _.getBoundingClientRect();
      if (d.dir !== TN.RTL) {
        const qe = ae.left - Z.left, Ce = ee.left - qe, Te = U.left - Ce, We = U.width + Te, Qn = Math.max(We, Z.width), ur = window.innerWidth - On, Da = vd(Ce, [
          On,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(On, ur - Qn)
        ]);
        h.style.minWidth = We + "px", h.style.left = Da + "px";
      } else {
        const qe = Z.right - ae.right, Ce = window.innerWidth - ee.right - qe, Te = window.innerWidth - U.right - Ce, We = U.width + Te, Qn = Math.max(We, Z.width), ur = window.innerWidth - On, Da = vd(Ce, [
          On,
          Math.max(On, ur - Qn)
        ]);
        h.style.minWidth = We + "px", h.style.right = Da + "px";
      }
      const ne = T(), I = window.innerHeight - On * 2, J = C.scrollHeight, oe = window.getComputedStyle(b), H = parseInt(oe.borderTopWidth, 10), F = parseInt(oe.paddingTop, 10), K = parseInt(oe.borderBottomWidth, 10), re = parseInt(oe.paddingBottom, 10), W = H + F + J + re + K, A = Math.min(D.offsetHeight * 5, W), V = window.getComputedStyle(C), te = parseInt(V.paddingTop, 10), le = parseInt(V.paddingBottom, 10), ie = U.top + U.height / 2 - On, se = I - ie, ve = D.offsetHeight / 2, Fe = D.offsetTop + ve, ye = H + F + Fe, he = W - ye;
      if (ye <= ie) {
        const qe = ne.length > 0 && D === ne[ne.length - 1].ref.current;
        h.style.bottom = "0px";
        const Ce = b.clientHeight - C.offsetTop - C.offsetHeight, Te = Math.max(
          se,
          ve + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (qe ? le : 0) + Ce + K
        ), We = ye + Te;
        h.style.height = We + "px";
      } else {
        const qe = ne.length > 0 && D === ne[0].ref.current;
        h.style.top = "0px";
        const Te = Math.max(
          ie,
          H + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (qe ? te : 0) + ve
        ) + he;
        h.style.height = Te + "px", C.scrollTop = ye - ie + C.offsetTop;
      }
      h.style.margin = `${On}px 0`, h.style.minHeight = A + "px", h.style.maxHeight = I + "px", s?.(), requestAnimationFrame(() => E.current = !0);
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
  const [z, R] = x.useState();
  bt(() => {
    b && R(window.getComputedStyle(b).zIndex);
  }, [b]);
  const Y = x.useCallback(
    (U) => {
      U && O.current === !0 && (N(), M?.(), O.current = !1);
    },
    [N, M]
  );
  return /* @__PURE__ */ y.jsx(
    FN,
    {
      scope: o,
      contentWrapper: h,
      shouldExpandOnScrollRef: E,
      onScrollButtonChange: Y,
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: z
          },
          children: /* @__PURE__ */ y.jsx(
            rt.div,
            {
              ...u,
              ref: S,
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
}, "SelectItemAlignedPosition")), bv = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const {
    __scopeSelect: o,
    align: s = "start",
    collisionPadding: u = On,
    ...d
  } = a, m = um(o);
  return /* @__PURE__ */ y.jsx(
    Q0,
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
}, "SelectPopperPosition")), [FN, fm] = Vr(Ur, {}), xv = "SelectViewport", QN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, nonce: s, ...u } = a, d = Xr(xv, o), m = fm(xv, o), h = at(l, d.onViewportChange), p = x.useRef(0);
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ y.jsx(cc.Slot, { scope: o, children: /* @__PURE__ */ y.jsx(
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
          onScroll: ze(u.onScroll, (b) => {
            const v = b.currentTarget, { contentWrapper: S, shouldExpandOnScrollRef: T } = m;
            if (T?.current && S) {
              const E = Math.abs(p.current - v.scrollTop);
              if (E > 0) {
                const O = window.innerHeight - On * 2, C = parseFloat(S.style.minHeight), D = parseFloat(S.style.height), _ = Math.max(C, D);
                if (_ < O) {
                  const M = _ + E, N = Math.min(O, M), z = M - N;
                  S.style.height = N + "px", S.style.bottom === "0px" && (v.scrollTop = z > 0 ? z : 0, S.style.justifyContent = "flex-end");
                }
              }
            }
            p.current = v.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), ZN = "SelectGroup", [GA, WA] = Vr(ZN), bd = "SelectItem", [IN, px] = Vr(bd), $N = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const {
      __scopeSelect: o,
      value: s,
      disabled: u = !1,
      textValue: d,
      ...m
    } = a, h = cr(bd, o), p = Xr(bd, o), b = h.value === s, [v, S] = x.useState(d ?? ""), [T, E] = x.useState(!1), O = Dn(
      (N) => p.itemRefCallback?.(N, s, u)
    ), C = at(l, O), D = nr(), _ = x.useRef("touch");
    function M(N) {
      h.hasConsumerStoppedPropagationRef.current = N.isPropagationStopped(), h.onUserSelect(s), h.onOpenChange(!1);
    }
    return Le(M, "handleSelect"), /* @__PURE__ */ y.jsx(
      IN,
      {
        scope: o,
        value: s,
        disabled: u,
        textId: D,
        isSelected: b,
        onItemTextChange: x.useCallback((N) => {
          S((z) => z || (N?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ y.jsx(
          cc.ItemSlot,
          {
            scope: o,
            value: s,
            disabled: u,
            textValue: v,
            children: /* @__PURE__ */ y.jsx(
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
                onFocus: ze(m.onFocus, () => E(!0)),
                onBlur: ze(m.onBlur, () => E(!1)),
                onClick: ze(m.onClick, (N) => {
                  u || _.current !== "mouse" && M(N);
                }),
                onPointerUp: ze(m.onPointerUp, (N) => {
                  u || _.current === "mouse" && M(N);
                }),
                onPointerDown: ze(m.onPointerDown, (N) => {
                  _.current = N.pointerType;
                }),
                onPointerMove: ze(m.onPointerMove, (N) => {
                  _.current = N.pointerType, u ? p.onItemLeave?.() : _.current === "mouse" && N.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ze(m.onPointerLeave, (N) => {
                  N.currentTarget === document.activeElement && p.onItemLeave?.();
                }),
                onKeyDown: ze(m.onKeyDown, (N) => {
                  u || N.target !== N.currentTarget || p.searchRef?.current !== "" && N.key === " " || (MN.includes(N.key) && M(N), N.key === " " && N.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), Ns = "SelectItemText", KN = /* @__PURE__ */ x.forwardRef(
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, className: s, style: u, ...d } = a, m = cr(Ns, o), h = Xr(Ns, o), p = px(Ns, o), b = AN(Ns, o), [v, S] = x.useState(null), T = Dn(
      (M) => h.itemTextRefCallback?.(M, p.value, p.disabled)
    ), E = at(
      l,
      S,
      p.onItemTextChange,
      T
    ), O = v?.textContent, C = x.useMemo(
      () => /* @__PURE__ */ y.jsx("option", { value: p.value, disabled: p.disabled, children: O }, p.value),
      [p.disabled, p.value, O]
    ), { onNativeOptionAdd: D, onNativeOptionRemove: _ } = b;
    return bt(() => (D(C), () => _(C)), [D, _, C]), /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(rt.span, { id: p.textId, ...d, ref: E }),
      p.isSelected && m.valueNode && !m.valueNodeHasChildren && !ni(m.value) ? Kl.createPortal(d.children, m.valueNode) : null
    ] });
  }, "SelectItemText")
), JN = "SelectItemIndicator", eA = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(a, l) {
    const { __scopeSelect: o, ...s } = a;
    return px(JN, o).isSelected ? /* @__PURE__ */ y.jsx(rt.span, { "aria-hidden": !0, ...s, ref: l }) : null;
  }, "SelectItemIndicator")
), wv = "SelectScrollUpButton", tA = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const o = Xr(wv, a.__scopeSelect), s = fm(wv, a.__scopeSelect), [u, d] = x.useState(!1), m = at(l, s.onScrollButtonChange);
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
  }, [o.viewport, o.isPositioned]), u ? /* @__PURE__ */ y.jsx(
    gx,
    {
      ...a,
      ref: m,
      onAutoScroll: () => {
        const { viewport: h, selectedItem: p } = o;
        h && p && (h.scrollTop = h.scrollTop - p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), Sv = "SelectScrollDownButton", nA = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const o = Xr(Sv, a.__scopeSelect), s = fm(Sv, a.__scopeSelect), [u, d] = x.useState(!1), m = at(l, s.onScrollButtonChange);
  return bt(() => {
    if (o.viewport && o.isPositioned) {
      let h = function() {
        const b = p.scrollHeight - p.clientHeight, v = Math.ceil(p.scrollTop) < b;
        d(v);
      };
      Le(h, "handleScroll");
      const p = o.viewport;
      return h(), p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
    }
  }, [o.viewport, o.isPositioned]), u ? /* @__PURE__ */ y.jsx(
    gx,
    {
      ...a,
      ref: m,
      onAutoScroll: () => {
        const { viewport: h, selectedItem: p } = o;
        h && p && (h.scrollTop = h.scrollTop + p.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), gx = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Le(function(a, l) {
  const { __scopeSelect: o, onAutoScroll: s, ...u } = a, d = Xr("SelectScrollButton", o), m = x.useRef(null), h = uc(o), p = x.useCallback(() => {
    m.current !== null && (window.clearInterval(m.current), m.current = null);
  }, []);
  return x.useEffect(() => () => p(), [p]), bt(() => {
    h().find((v) => v.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [h]), /* @__PURE__ */ y.jsx(
    rt.div,
    {
      "aria-hidden": !0,
      ...u,
      ref: l,
      style: { flexShrink: 0, ...u.style },
      onPointerDown: ze(u.onPointerDown, () => {
        m.current === null && (m.current = window.setInterval(s, 50));
      }),
      onPointerMove: ze(u.onPointerMove, () => {
        d.onItemLeave?.(), m.current === null && (m.current = window.setInterval(s, 50));
      }),
      onPointerLeave: ze(u.onPointerLeave, () => {
        p();
      })
    }
  );
}, "SelectScrollButtonImpl")), aA = "SelectBubbleInput", rA = /* @__PURE__ */ x.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function({ __scopeSelect: a, ...l }, o) {
    const s = cr(aA, a), { value: u, onValueChange: d, required: m, disabled: h, name: p, autoComplete: b, form: v, userSelection: S } = s, { nativeOptions: T, nativeSelectKey: E } = s, O = x.useRef(null), C = at(o, O), D = u ?? "", _ = x.useRef(D), M = x.useRef(S), N = x.useRef(!1), z = Array.from(T).some(
      (R) => (R.props.value ?? "") === ""
    );
    return x.useEffect(() => {
      const R = O.current;
      if (!R) return;
      const Y = window.HTMLSelectElement.prototype, Z = Object.getOwnPropertyDescriptor(
        Y,
        "value"
      ).set, ee = S !== null && S !== M.current;
      M.current = S;
      const ae = _.current !== D;
      _.current = D;
      const ne = ee && ae;
      if (ee && !ae && S.value !== D && !S.hasConsumerStoppedPropagation && Z) {
        N.current = !0;
        try {
          Z.call(R, S.value), R.dispatchEvent(new Event("change", { bubbles: !0 }));
        } finally {
          N.current = !1, Z.call(R, D);
        }
        return;
      }
      const I = ne && !S.hasConsumerStoppedPropagation;
      if (ae && Z) {
        const J = new Event("change", { bubbles: I });
        Z.call(R, D), R.dispatchEvent(J);
      }
    }, [D, S]), /* @__PURE__ */ y.jsxs(
      rt.select,
      {
        "aria-hidden": !0,
        required: m,
        tabIndex: -1,
        name: p,
        autoComplete: b,
        disabled: h,
        form: v,
        onChange: (R) => {
          N.current || d(R.target.value);
        },
        ...l,
        style: { ...CN, ...l.style },
        ref: C,
        defaultValue: D,
        children: [
          ni(u) && !z ? /* @__PURE__ */ y.jsx("option", { value: "" }) : null,
          Array.from(T)
        ]
      },
      E
    );
  }, "SelectBubbleInput")
);
function yx(n) {
  return typeof n == "function";
}
Le(yx, "isFunction");
function ni(n) {
  return n === "" || n === void 0;
}
Le(ni, "shouldShowPlaceholder");
function dm(n) {
  const a = Dn(n), l = x.useRef(""), o = x.useRef(0), s = x.useCallback(
    (d) => {
      const m = l.current + d;
      a(m);
      function h(p) {
        l.current = p, window.clearTimeout(o.current), p !== "" && (o.current = window.setTimeout(() => h(""), 1e3));
      }
      Le(h, "updateSearch"), h(m);
    },
    [a]
  ), u = x.useCallback(() => {
    l.current = "", window.clearTimeout(o.current);
  }, []);
  return x.useEffect(() => () => window.clearTimeout(o.current), []), [l, s, u];
}
Le(dm, "useTypeaheadSearch");
function mm(n, a, l) {
  const s = a.length > 1 && Array.from(a).every((p) => p === a[0]) ? a[0] : a, u = l ? n.indexOf(l) : -1;
  let d = vx(n, Math.max(u, 0));
  s.length === 1 && (d = d.filter((p) => p !== l));
  const h = d.find(
    (p) => p.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return h !== l ? h : void 0;
}
Le(mm, "findNextItem");
function vx(n, a) {
  return n.map((l, o) => n[(a + o) % n.length]);
}
Le(vx, "wrapArray");
const bx = document.querySelector(
  'meta[name="csp-nonce"]'
)?.content;
globalThis.__weiboStyleNonce = bx;
function oA({
  ...n
}) {
  return /* @__PURE__ */ y.jsx(RN, { "data-slot": "select", ...n });
}
function lA({
  ...n
}) {
  return /* @__PURE__ */ y.jsx(HN, { "data-slot": "select-value", ...n });
}
function iA({
  className: n,
  size: a = "default",
  children: l,
  ...o
}) {
  return /* @__PURE__ */ y.jsxs(
    jN,
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
        /* @__PURE__ */ y.jsx(YN, { asChild: !0, children: /* @__PURE__ */ y.jsx(Gd, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function sA({
  className: n,
  children: a,
  position: l = "popper",
  align: o = "center",
  ...s
}) {
  const u = x.useContext(cm);
  return /* @__PURE__ */ y.jsx(qN, { container: u || void 0, children: /* @__PURE__ */ y.jsxs(
    PN,
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
        /* @__PURE__ */ y.jsx(uA, {}),
        /* @__PURE__ */ y.jsx(
          QN,
          {
            nonce: bx,
            className: we(
              "p-1",
              l === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: a
          }
        ),
        /* @__PURE__ */ y.jsx(fA, {})
      ]
    }
  ) });
}
function cA({
  className: n,
  children: a,
  ...l
}) {
  return /* @__PURE__ */ y.jsxs(
    $N,
    {
      "data-slot": "select-item",
      className: we(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...l,
      children: [
        /* @__PURE__ */ y.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ y.jsx(eA, { children: /* @__PURE__ */ y.jsx(cd, { className: "size-4" }) }) }),
        /* @__PURE__ */ y.jsx(KN, { children: a })
      ]
    }
  );
}
function uA({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ y.jsx(
    tA,
    {
      "data-slot": "select-scroll-up-button",
      className: we(
        "flex cursor-pointer items-center justify-center py-1",
        n
      ),
      ...a,
      children: /* @__PURE__ */ y.jsx(TM, { className: "size-4" })
    }
  );
}
function fA({
  className: n,
  ...a
}) {
  return /* @__PURE__ */ y.jsx(
    nA,
    {
      "data-slot": "select-scroll-down-button",
      className: we(
        "flex cursor-pointer items-center justify-center py-1",
        n
      ),
      ...a,
      children: /* @__PURE__ */ y.jsx(Gd, { className: "size-4" })
    }
  );
}
function $l({
  id: n,
  label: a,
  value: l,
  onChange: o,
  options: s
}) {
  return /* @__PURE__ */ y.jsxs(
    oA,
    {
      value: l || "__all__",
      onValueChange: (u) => o(u === "__all__" ? "" : u),
      children: [
        /* @__PURE__ */ y.jsx(iA, { id: n, className: "w-full h-9 text-xs", "aria-label": a, children: /* @__PURE__ */ y.jsx(lA, {}) }),
        /* @__PURE__ */ y.jsx(sA, { className: "credit-popup", position: "popper", align: "start", children: s.map((u) => /* @__PURE__ */ y.jsx(
          cA,
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
function dA(n) {
  if (!n) return;
  const a = bO(n, "yyyy-MM-dd", /* @__PURE__ */ new Date());
  return Hb(a) ? a : void 0;
}
function Cv({
  id: n,
  name: a,
  label: l,
  initialValue: o = "",
  placeholder: s = "选择日期"
}) {
  const [u, d] = x.useState(o), [m, h] = x.useState(!1), p = dA(u);
  return /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ y.jsx(Wt, { htmlFor: n, children: l }),
    /* @__PURE__ */ y.jsx("input", { type: "hidden", name: a, value: u }),
    /* @__PURE__ */ y.jsxs(ux, { open: m, onOpenChange: h, children: [
      /* @__PURE__ */ y.jsx(fx, { asChild: !0, children: /* @__PURE__ */ y.jsxs(
        Ue,
        {
          id: n,
          type: "button",
          variant: "outline",
          className: "w-full justify-between h-9 px-3 text-xs font-normal",
          "aria-label": l,
          children: [
            /* @__PURE__ */ y.jsx("span", { className: u ? "" : "text-muted-foreground", children: p ? tr(p, "yyyy/MM/dd") : s }),
            /* @__PURE__ */ y.jsx(yM, { className: "size-4 text-muted-foreground" })
          ]
        }
      ) }),
      /* @__PURE__ */ y.jsxs(
        dx,
        {
          align: "start",
          className: "credit-popup date-popup w-auto p-0",
          "aria-label": `${l}日历`,
          children: [
            /* @__PURE__ */ y.jsx(
              n_,
              {
                mode: "single",
                selected: p,
                defaultMonth: p,
                locale: uM,
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
            /* @__PURE__ */ y.jsxs("div", { className: "credit-picker-footer", children: [
              /* @__PURE__ */ y.jsx(
                Ue,
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
              /* @__PURE__ */ y.jsx(
                Ue,
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
const xx = (n) => Array.from({ length: n }, (a, l) => {
  const o = String(l).padStart(2, "0");
  return { value: o, label: o };
}), mA = xx(24), hA = xx(60);
function pA({
  initialValue: n,
  onChange: a
}) {
  const [l, o] = x.useState(n), [s, u] = x.useState(n), [d, m] = x.useState(!1), [h, p] = s.split(":");
  return /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ y.jsx(Wt, { htmlFor: "plan-time", children: "每天签到时间 · 北京时间" }),
    /* @__PURE__ */ y.jsx("input", { type: "hidden", name: "time", value: l }),
    /* @__PURE__ */ y.jsxs(
      ux,
      {
        open: d,
        onOpenChange: (b) => {
          b && u(l), m(b);
        },
        children: [
          /* @__PURE__ */ y.jsx(fx, { asChild: !0, children: /* @__PURE__ */ y.jsxs(
            Ue,
            {
              id: "plan-time",
              type: "button",
              variant: "outline",
              className: "credit-time-trigger w-full justify-between h-14 px-3 text-2xl font-medium tabular-nums",
              "aria-label": "每天签到时间 · 北京时间",
              children: [
                l,
                /* @__PURE__ */ y.jsx(MM, { className: "size-5 text-muted-foreground" })
              ]
            }
          ) }),
          /* @__PURE__ */ y.jsxs(
            dx,
            {
              align: "start",
              className: "credit-popup time-popup w-64 p-4",
              "aria-label": "签到时间选择器",
              children: [
                /* @__PURE__ */ y.jsxs("p", { className: "credit-picker-title", children: [
                  "每天签到时间 ",
                  /* @__PURE__ */ y.jsx("span", { children: "24 小时制" })
                ] }),
                /* @__PURE__ */ y.jsxs("div", { className: "credit-time-columns", children: [
                  /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ y.jsx(Wt, { htmlFor: "time-hour", children: "小时" }),
                    /* @__PURE__ */ y.jsx(
                      $l,
                      {
                        id: "time-hour",
                        label: "小时",
                        value: h,
                        options: mA,
                        onChange: (b) => u(`${b}:${p}`)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ y.jsx("span", { className: "credit-time-separator", children: ":" }),
                  /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
                    /* @__PURE__ */ y.jsx(Wt, { htmlFor: "time-minute", children: "分钟" }),
                    /* @__PURE__ */ y.jsx(
                      $l,
                      {
                        id: "time-minute",
                        label: "分钟",
                        value: p,
                        options: hA,
                        onChange: (b) => u(`${h}:${b}`)
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ y.jsxs("div", { className: "credit-time-actions", children: [
                  /* @__PURE__ */ y.jsx(
                    Ue,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: () => m(!1),
                      children: "取消"
                    }
                  ),
                  /* @__PURE__ */ y.jsx(
                    Ue,
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
function fc(n, a, l) {
  n.dispatchEvent(new CustomEvent(a, { detail: l, bubbles: !0 }));
}
class wx extends Error {
  constructor(a, l, o) {
    super(a), this.status = l, this.code = o;
  }
  status;
  code;
}
async function dc(n, a, l = "POST") {
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
    throw o.status === 401 && (n === "/api/settings" || n.startsWith("/api/admin/")) && location.assign("/login"), new wx(
      typeof s.detail == "string" ? s.detail : "请检查填写内容后重试",
      o.status,
      s.code
    );
  return s;
}
function xd({
  id: n,
  name: a,
  label: l,
  value: o,
  placeholder: s,
  numeric: u = !1
}) {
  return /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
    /* @__PURE__ */ y.jsx(Wt, { htmlFor: n, children: l }),
    /* @__PURE__ */ y.jsx(
      ba,
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
function gA({
  admin: n,
  values: a,
  statuses: l
}) {
  const [o, s] = x.useState(a.status || "");
  return /* @__PURE__ */ y.jsxs(
    "form",
    {
      id: "filter-form",
      className: "credit-filter-form",
      onSubmit: (u) => {
        u.preventDefault(), u.stopPropagation(), fc(u.currentTarget, "credit:filters", {
          kind: "records",
          values: Object.fromEntries(new FormData(u.currentTarget))
        });
      },
      children: [
        n && /* @__PURE__ */ y.jsx(
          xd,
          {
            id: "filter-username",
            name: "username",
            label: "平台用户名",
            value: a.username || "",
            placeholder: "完整用户名"
          }
        ),
        /* @__PURE__ */ y.jsx(
          xd,
          {
            id: "filter-uid",
            name: "uid",
            label: "微博 UID",
            value: a.uid || "",
            placeholder: n ? "全部微博" : "微博 UID",
            numeric: !0
          }
        ),
        /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
          /* @__PURE__ */ y.jsx(Wt, { htmlFor: "filter-status", children: "执行结果" }),
          /* @__PURE__ */ y.jsx("input", { type: "hidden", name: "status", value: o }),
          /* @__PURE__ */ y.jsx(
            $l,
            {
              id: "filter-status",
              label: "执行结果",
              value: o,
              onChange: s,
              options: [{ value: "", label: "全部结果" }, ...l]
            }
          )
        ] }),
        /* @__PURE__ */ y.jsx(
          Cv,
          {
            id: "filter-start",
            name: "start",
            label: "开始日期",
            placeholder: n ? void 0 : "开始日期",
            initialValue: a.start
          }
        ),
        /* @__PURE__ */ y.jsx(
          Cv,
          {
            id: "filter-end",
            name: "end",
            label: "结束日期",
            placeholder: n ? void 0 : "结束日期",
            initialValue: a.end
          }
        ),
        /* @__PURE__ */ y.jsxs("div", { className: "credit-filter-actions", children: [
          /* @__PURE__ */ y.jsx(Ue, { variant: "outline", type: "submit", className: "h-9 text-xs", children: "筛选" }),
          /* @__PURE__ */ y.jsx(
            Ue,
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
function yA({ search: n }) {
  const [a, l] = x.useState(!1);
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs("div", { className: "credit-users-toolbar", children: [
      /* @__PURE__ */ y.jsxs(
        "form",
        {
          id: "user-search",
          className: "credit-filter-form credit-user-search",
          onSubmit: (o) => {
            o.preventDefault(), o.stopPropagation(), fc(o.currentTarget, "credit:filters", {
              kind: "users",
              values: Object.fromEntries(new FormData(o.currentTarget))
            });
          },
          children: [
            /* @__PURE__ */ y.jsx(
              xd,
              {
                id: "user-search-input",
                name: "search",
                label: "搜索用户名",
                value: n,
                placeholder: "输入用户名关键词"
              }
            ),
            /* @__PURE__ */ y.jsx(Ue, { type: "submit", variant: "outline", className: "h-9 text-xs", children: "搜索" })
          ]
        }
      ),
      /* @__PURE__ */ y.jsx(
        Ue,
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
    a && /* @__PURE__ */ y.jsx(vA, { onCancel: () => l(!1) })
  ] });
}
function vA({ onCancel: n }) {
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
      const p = await dc("/api/admin/users", {
        username: h.get("username"),
        password: h.get("password")
      });
      m.reset(), fc(m, "credit:user-created", { username: p.user.username });
    } catch (p) {
      s(
        p instanceof TypeError ? "无法连接服务，请稍后重试" : p.message
      );
    } finally {
      l(!1);
    }
  }
  return /* @__PURE__ */ y.jsxs(
    "form",
    {
      id: "admin-create-user",
      className: "credit-create-user",
      onSubmit: u,
      children: [
        /* @__PURE__ */ y.jsx("h3", { children: "添加平台用户" }),
        /* @__PURE__ */ y.jsx("p", { children: "创建普通用户账号，用户登录后自行绑定微博。" }),
        /* @__PURE__ */ y.jsxs("fieldset", { disabled: a, children: [
          /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ y.jsx(Wt, { htmlFor: "new-user-name", children: "用户名" }),
            /* @__PURE__ */ y.jsx(
              ba,
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
          /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ y.jsx(Wt, { htmlFor: "new-user-password", children: "初始密码" }),
            /* @__PURE__ */ y.jsx(
              ba,
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
          /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
            /* @__PURE__ */ y.jsx(Wt, { htmlFor: "new-user-confirmation", children: "确认初始密码" }),
            /* @__PURE__ */ y.jsx(
              ba,
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
          o && /* @__PURE__ */ y.jsx("p", { role: "alert", className: "credit-form-error", children: o }),
          /* @__PURE__ */ y.jsxs("div", { className: "credit-filter-actions", children: [
            /* @__PURE__ */ y.jsx(Ue, { type: "submit", size: "sm", children: a ? "正在创建…" : "创建用户" }),
            /* @__PURE__ */ y.jsx(Ue, { type: "button", variant: "ghost", size: "sm", onClick: n, children: "取消" })
          ] })
        ] })
      ]
    }
  );
}
function bA({ settings: n }) {
  const [a, l] = x.useState(n.registration_enabled), [o, s] = x.useState(!1), [u, d] = x.useState(""), [m, h] = x.useState(!1);
  async function p(b) {
    b.preventDefault(), b.stopPropagation(), s(!0), d(""), h(!1);
    try {
      await dc(
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
  return /* @__PURE__ */ y.jsxs("form", { className: "credit-system-settings", onSubmit: p, children: [
    /* @__PURE__ */ y.jsxs("fieldset", { disabled: o, children: [
      /* @__PURE__ */ y.jsxs("div", { className: "credit-switch-row", children: [
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx(Wt, { htmlFor: "registration-enabled", children: "开放用户注册" }),
          /* @__PURE__ */ y.jsx("p", { id: "registration-help", children: "关闭后仅管理员可创建新账号，不影响已有用户登录。" })
        ] }),
        /* @__PURE__ */ y.jsx(
          Nd,
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
      /* @__PURE__ */ y.jsx(Ue, { type: "submit", size: "sm", children: o ? "正在保存…" : "保存系统设置" })
    ] }),
    u && /* @__PURE__ */ y.jsx(
      "p",
      {
        className: m ? "credit-form-error" : "credit-form-feedback",
        role: m ? "alert" : "status",
        children: u
      }
    )
  ] });
}
function Sx({
  plan: n,
  onSaved: a,
  onStateChange: l
}) {
  const [o, s] = x.useState(n.enabled), [u, d] = x.useState(n.time), [m, h] = x.useState(!1), [p, b] = x.useState(""), [v, S] = x.useState(!1);
  x.useEffect(() => {
    l?.({
      dirty: o !== n.enabled || u !== n.time,
      saving: m
    });
  }, [o, u, n.enabled, n.time, m, l]);
  async function T(E) {
    E.preventDefault(), E.stopPropagation();
    const O = E.currentTarget, C = { enabled: o, time: String(new FormData(O).get("time")) };
    h(!0), S(!1), b("");
    try {
      await dc("/api/settings", C, "PUT"), b(
        o ? `已保存：每天 ${C.time} 自动签到` : "已保存：每日签到已暂停"
      ), fc(O, "credit:plan-saved", C), a?.();
    } catch (D) {
      S(!0), b(
        D instanceof TypeError ? "无法连接服务，请稍后重试" : D.message
      );
    } finally {
      h(!1);
    }
  }
  return /* @__PURE__ */ y.jsxs("form", { id: "plan-form", className: "credit-plan-form", onSubmit: T, children: [
    /* @__PURE__ */ y.jsxs("fieldset", { disabled: m, children: [
      /* @__PURE__ */ y.jsx(pA, { initialValue: n.time, onChange: d }),
      /* @__PURE__ */ y.jsxs("div", { className: "credit-switch-row", children: [
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx(Wt, { htmlFor: "plan-enabled", children: "自动签到" }),
          /* @__PURE__ */ y.jsx("p", { id: "plan-enabled-help", children: "对你绑定的全部微博账号生效" })
        ] }),
        /* @__PURE__ */ y.jsx(
          Nd,
          {
            id: "plan-enabled",
            checked: o,
            onCheckedChange: s,
            "aria-describedby": "plan-enabled-help"
          }
        )
      ] }),
      /* @__PURE__ */ y.jsx(Ue, { type: "submit", className: "w-full h-9 text-xs", children: m ? "正在保存…" : "保存签到计划" })
    ] }),
    p && /* @__PURE__ */ y.jsx(
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
function xA() {
  const [n, a] = x.useState(
    () => document.documentElement.classList.contains("dark")
  );
  return /* @__PURE__ */ y.jsxs("div", { className: "credit-switch-row", children: [
    /* @__PURE__ */ y.jsx(Wt, { htmlFor: "client-dark-mode", children: "深色模式" }),
    /* @__PURE__ */ y.jsx(
      Nd,
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
function wA() {
  const [n, a] = x.useState(
    () => document.querySelector(
      'meta[name="registration-enabled"]'
    )?.content !== "false"
  ), [l, o] = x.useState("login"), [s, u] = x.useState(!1), [d, m] = x.useState(""), h = l === "register";
  async function p(b) {
    b.preventDefault(), m("");
    const v = b.currentTarget, S = new FormData(v);
    if (h && S.get("password") !== S.get("confirm-password")) {
      m("两次密码输入不一致");
      return;
    }
    u(!0);
    try {
      const T = await dc(`/api/auth/${l}`, {
        username: S.get("username"),
        password: S.get("password")
      });
      location.assign(
        new URLSearchParams(location.search).get("next") === "admin" && T.user.role === "admin" ? "/admin" : "/"
      );
    } catch (T) {
      h && T instanceof wx && T.code === "registration_closed" && (a(!1), o("login")), m(
        T instanceof TypeError ? "无法连接服务，请检查网络后重试" : T.message
      );
    } finally {
      u(!1);
    }
  }
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs(
    Db,
    {
      value: l,
      onValueChange: (b) => {
        o(b), m("");
      },
      children: [
        n && /* @__PURE__ */ y.jsx(_b, { className: "credit-auth-tabs h-10 w-full gap-1 rounded-full border-0 bg-muted p-1", children: [["login", "登录"], ["register", "注册"]].map(([b, v]) => /* @__PURE__ */ y.jsx(Nb, { value: b, disabled: s, className: "h-full rounded-full", children: v }, b)) }),
        !n && /* @__PURE__ */ y.jsx("p", { className: "credit-registration-closed", children: "注册已关闭，请联系管理员开通账号。" }),
        (n ? ["login", "register"] : ["login"]).map(
          (b) => /* @__PURE__ */ y.jsx(Ab, { value: b, children: /* @__PURE__ */ y.jsx(
            "form",
            {
              id: "auth-form",
              className: "credit-auth-form",
              onSubmit: p,
              children: /* @__PURE__ */ y.jsxs("fieldset", { disabled: s, children: [
                /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
                  /* @__PURE__ */ y.jsx(Wt, { htmlFor: `${b}-username`, children: "平台用户名" }),
                  /* @__PURE__ */ y.jsx(
                    ba,
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
                /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
                  /* @__PURE__ */ y.jsx(Wt, { htmlFor: `${b}-password`, children: "密码" }),
                  /* @__PURE__ */ y.jsx(
                    ba,
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
                  h && /* @__PURE__ */ y.jsx("small", { id: "password-hint", children: "12–128 位，建议混合使用字母、数字和符号" })
                ] }),
                h && /* @__PURE__ */ y.jsxs("div", { className: "credit-field", children: [
                  /* @__PURE__ */ y.jsx(Wt, { htmlFor: "confirm-password", children: "确认密码" }),
                  /* @__PURE__ */ y.jsx(
                    ba,
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
                d && /* @__PURE__ */ y.jsx("div", { className: "error-box", role: "alert", children: d }),
                /* @__PURE__ */ y.jsx(Ue, { type: "submit", className: "mt-0.5 h-10 w-full rounded-full text-sm", children: s ? h ? "正在创建…" : "正在登录…" : h ? "创建账号" : "登录平台 →" })
              ] })
            }
          ) }, b)
        )
      ]
    }
  ) });
}
const Cx = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  active: "执行中",
  none: "无记录"
}, SA = () => new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(/* @__PURE__ */ new Date());
function CA(n, a, l) {
  if (!n) return "";
  const o = new URLSearchParams({ account_id: n });
  return a === "month" ? o.set("month", l) : o.set("period", a), `/api/calendar?${o}`;
}
function Ex(n, a) {
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
const EA = ["一", "二", "三", "四", "五", "六", "日"], Tx = 864e5;
function TA(n, a) {
  return new Date(Date.parse(n) - (a - 1) * Tx).toISOString().slice(0, 10);
}
function Ox(n) {
  return (new Date(n).getUTCDay() + 6) % 7;
}
function Mx({ day: n, accountId: a, today: l, includeYear: o = !1 }) {
  if (!n) return /* @__PURE__ */ y.jsx("span", { className: "footprint-day placeholder", "aria-hidden": "true" });
  const [s, u, d] = n.date.split("-").map(Number), m = n.date > l, h = `${o ? `${s}年` : ""}${u}月${d}日，${m ? "未到日期" : Cx[n.status]}`;
  return /* @__PURE__ */ y.jsx(
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
function OA({ monthKey: n, days: a, accountId: l, today: o, loading: s }) {
  const [u, d] = n.split("-").map(Number), m = new Date(Date.UTC(u, d, 0)).getUTCDate(), h = Ox(`${n}-01`);
  return /* @__PURE__ */ y.jsxs("div", { className: "footprint-grid", role: "group", "aria-label": "本月每日签到状态", "aria-busy": s, children: [
    EA.map((p) => /* @__PURE__ */ y.jsx("span", { "aria-hidden": "true", children: p }, p)),
    Array.from({ length: h }, (p, b) => /* @__PURE__ */ y.jsx("span", { "aria-hidden": "true" }, `leading-${b}`)),
    Array.from({ length: m }, (p, b) => /* @__PURE__ */ y.jsx(Mx, { day: a?.[b], accountId: l, today: o }, b))
  ] });
}
function MA({ days: n, accountId: a, today: l, start: o, length: s, label: u, loading: d }) {
  const m = x.useRef(null), h = Date.parse(o), p = Ox(o), b = Math.ceil((p + s) / 7);
  return x.useLayoutEffect(() => {
    const v = m.current;
    v && (v.scrollLeft = v.scrollWidth - v.clientWidth);
  }, [o]), /* @__PURE__ */ y.jsx("div", { className: "footprint-year-scroll", ref: m, role: "region", "aria-label": `${u}每日签到状态，可横向滚动`, tabIndex: 0, children: /* @__PURE__ */ y.jsx("div", { className: "footprint-year-grid", "aria-busy": d, children: Array.from({ length: b }, (v, S) => {
    const T = S * 7 - p, E = Array.from({ length: 7 }, (C, D) => {
      const _ = T + D;
      return _ >= 0 && _ < s ? new Date(h + _ * Tx) : void 0;
    }), O = E.find((C) => C?.getUTCDate() === 1);
    return /* @__PURE__ */ y.jsxs("div", { className: "footprint-week", children: [
      /* @__PURE__ */ y.jsx("span", { className: "footprint-week-label", "aria-hidden": "true", children: O ? s > 365 && O.getUTCMonth() === 0 ? `${O.getUTCFullYear()}年` : `${O.getUTCMonth() + 1}月` : "" }),
      E.map((C, D) => C ? /* @__PURE__ */ y.jsx(Mx, { day: n?.[T + D], accountId: a, today: l, includeYear: !0 }, D) : /* @__PURE__ */ y.jsx("span", { "aria-hidden": "true" }, D))
    ] }, S);
  }) }) });
}
function DA() {
  return /* @__PURE__ */ y.jsx("div", { className: "footprint-legend", children: Object.entries(Cx).map(([n, a]) => /* @__PURE__ */ y.jsxs("span", { children: [
    /* @__PURE__ */ y.jsx("i", { className: n, "aria-hidden": "true" }),
    a
  ] }, n)) });
}
const ed = { month: "本月", year: "近一年", two_years: "近两年" };
function Ev({ value: n }) {
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
  }, [a, n]), /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs("span", { className: "footprint-count", children: [
      /* @__PURE__ */ y.jsx("span", { className: "footprint-count-target", children: n }),
      /* @__PURE__ */ y.jsx("span", { className: "footprint-count-display", "data-animated": a, "aria-hidden": "true", children: l })
    ] }),
    /* @__PURE__ */ y.jsx("small", { children: "天" })
  ] });
}
function _A({ accounts: n }) {
  const [a, l] = x.useState(n), [o, s] = x.useState(n[0]?.id || ""), [u, d] = x.useState("month"), [m, h] = x.useState(0), p = SA(), b = p.slice(0, 7), [v, S] = b.split("-").map(Number), T = Ex(CA(o, u, b), m), E = T.data, O = T.loading && !E, C = E?.today ?? p, D = u === "month" ? 0 : u === "year" ? 365 : 730, _ = D ? E?.start ?? TA(C, D) : "", M = D ? `${_.replaceAll("-", "/")} – ${C.replaceAll("-", "/")}` : `${v}年${S}月`;
  return x.useEffect(() => {
    const N = (z) => {
      const R = z.detail?.accounts;
      R && (l(R), s((Y) => R.some((U) => U.id === Y) ? Y : R[0]?.id || "")), h((Y) => Y + 1);
    };
    return document.addEventListener("credit:calendar-refresh", N), () => document.removeEventListener("credit:calendar-refresh", N);
  }, []), /* @__PURE__ */ y.jsx("section", { className: "card checkin-footprint", "aria-labelledby": "footprint-heading", children: /* @__PURE__ */ y.jsxs(Db, { className: "gap-4", value: u, onValueChange: (N) => d(N), children: [
    /* @__PURE__ */ y.jsxs("div", { className: "footprint-heading", children: [
      /* @__PURE__ */ y.jsx("h2", { id: "footprint-heading", children: "签到足迹" }),
      /* @__PURE__ */ y.jsxs("p", { className: "footprint-period", children: [
        M,
        " · 北京时间"
      ] })
    ] }),
    o ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsxs("div", { className: "footprint-toolbar", children: [
        a.length > 1 && /* @__PURE__ */ y.jsx("div", { className: "footprint-account", children: /* @__PURE__ */ y.jsx(
          $l,
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
        /* @__PURE__ */ y.jsx(_b, { "aria-label": "签到足迹时间范围", className: "footprint-ranges h-9 gap-1 rounded-full border-0 bg-muted p-1", children: Object.entries(ed).map(([N, z]) => /* @__PURE__ */ y.jsx(Nb, { value: N, className: "h-full rounded-full px-3 text-xs max-[640px]:px-2", children: z }, N)) })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "footprint-body", "data-period": u, children: [
        /* @__PURE__ */ y.jsxs("dl", { className: "footprint-metrics", children: [
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsxs("dt", { children: [
              ed[u],
              "已签"
            ] }),
            /* @__PURE__ */ y.jsx("dd", { "data-testid": "footprint-success-days", children: E ? /* @__PURE__ */ y.jsx(Ev, { value: E.summary.success_days }, E.summary.success_days) : "—" })
          ] }),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("dt", { children: "连续签到" }),
            /* @__PURE__ */ y.jsx("dd", { "data-testid": "footprint-streak", children: E ? /* @__PURE__ */ y.jsx(Ev, { value: E.summary.streak }, E.summary.streak) : "—" })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs(Ab, { value: u, className: "footprint-chart", children: [
          O && /* @__PURE__ */ y.jsx("p", { className: "sr-only", role: "status", children: "正在加载签到足迹…" }),
          D ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
            /* @__PURE__ */ y.jsx(
              MA,
              {
                accountId: o,
                days: E?.days,
                today: C,
                start: _,
                length: D,
                label: ed[u],
                loading: O
              }
            ),
            /* @__PURE__ */ y.jsx("p", { className: "footprint-year-hint", children: "左右滑动查看更多日期" })
          ] }) : /* @__PURE__ */ y.jsx(OA, { monthKey: b, accountId: o, days: E?.days, today: C, loading: O }),
          /* @__PURE__ */ y.jsx(DA, {}),
          T.error && /* @__PURE__ */ y.jsxs("div", { className: "footprint-error", role: "alert", children: [
            /* @__PURE__ */ y.jsx("span", { children: T.error }),
            /* @__PURE__ */ y.jsx(Ue, { type: "button", variant: "outline", size: "sm", onClick: () => h((N) => N + 1), children: "重试" })
          ] })
        ] }, u)
      ] })
    ] }) : /* @__PURE__ */ y.jsx("p", { className: "footprint-empty", children: "绑定微博后，在这里查看每天的签到进度。" })
  ] }) });
}
const Dx = {
  done: "今日已签到",
  pending: "待签到",
  failed: "签到失败",
  unknown: "待确认",
  done_before: "此前已签到",
  success: "本次签到成功",
  network_error: "接口异常"
}, Tv = {
  unscanned: "尚未扫描关注的超话。",
  scanning: "正在读取微博关注列表…",
  error: "扫描失败，请稍后刷新超话。",
  expired: "微博登录已失效，请重新扫码。",
  partial: "列表未完整读取，当前仅展示已读取的部分，请刷新重试。"
};
async function _x(n, a, l = "GET") {
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
function NA({
  items: n,
  historical: a = !1
}) {
  return /* @__PURE__ */ y.jsx("ul", { className: "topic-list", children: n.map((l, o) => /* @__PURE__ */ y.jsxs("li", { children: [
    /* @__PURE__ */ y.jsx("span", { className: "topic-name", children: l.name }),
    /* @__PURE__ */ y.jsx("span", { className: `topic-status ${l.status}`, children: a && l.status === "pending" ? "未执行" : a && l.status === "unknown" ? "状态未识别" : Dx[l.status] || "待确认" })
  ] }, o)) });
}
function AA({
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
  const [v, S] = x.useState({}), [T, E] = x.useState({}), [O, C] = x.useState({}), D = T[n] && T[n].revision > a.revision ? T[n] : a, _ = v[n] || D, M = O[n] || {}, N = new Set(_.topic_ids), z = _.mode !== D.mode || [..._.topic_ids].sort().join(",") !== [...D.topic_ids].sort().join(",");
  x.useEffect(() => {
    h?.({ dirty: z, saving: !!M.saving });
  }, [z, M.saving, h]);
  function R(I) {
    S((J) => ({ ...J, [n]: I })), C((J) => ({ ...J, [n]: {} }));
  }
  function Y(I) {
    const J = new Set(
      _.mode === "all" ? l.flatMap((oe) => oe.id ? [oe.id] : []) : N
    );
    o.forEach((oe) => {
      oe.id && (I ? J.add(oe.id) : J.delete(oe.id));
    }), R({ ..._, mode: "selected", topic_ids: [...J] });
  }
  async function U() {
    C((I) => ({ ...I, [n]: { saving: !0 } }));
    try {
      const I = await fetch(
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
      I.status === 401 && location.assign("/login");
      const J = await I.json();
      if (!I.ok)
        throw new Error(
          typeof J.detail == "string" ? J.detail : "保存失败，请稍后重试"
        );
      E((oe) => ({ ...oe, [n]: J.selection })), S((oe) => {
        const H = { ...oe };
        return delete H[n], H;
      }), C((oe) => ({
        ...oe,
        [n]: { message: "已保存" }
      })), document.dispatchEvent(
        new CustomEvent("credit:topics-saved", {
          detail: { accountId: n, selection: J.selection }
        })
      ), b?.();
    } catch (I) {
      C((J) => ({
        ...J,
        [n]: {
          error: I instanceof TypeError ? "无法连接服务，请稍后重试" : I.message
        }
      }));
    }
  }
  const Z = _.topic_ids.filter(
    (I) => !l.some((J) => J.id === I)
  ).length, ee = o.flatMap((I) => I.id ? [I.id] : []), ae = ee.filter(
    (I) => _.mode === "all" || N.has(I)
  ).length, ne = ee.length > 0 && ae === ee.length;
  return s ? /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: `topic-selection${d ? " topic-configuration" : ""}`,
      children: [
        /* @__PURE__ */ y.jsxs("div", { className: "selection-settings", children: [
          /* @__PURE__ */ y.jsx(
            "div",
            {
              className: "selection-mode",
              role: d ? "radiogroup" : "group",
              "aria-label": "签到范围",
              children: [
                ["all", "全部签到"],
                ["selected", "自选超话"]
              ].map(([I, J]) => /* @__PURE__ */ y.jsx(
                Ue,
                {
                  type: "button",
                  size: "sm",
                  variant: "ghost",
                  className: d ? "justify-start whitespace-normal h-auto px-3 py-3" : void 0,
                  role: d ? "radio" : void 0,
                  "aria-checked": d ? _.mode === I : void 0,
                  "aria-pressed": d ? void 0 : _.mode === I,
                  title: I === "selected" ? "只签到勾选的超话；新关注需手动勾选" : "包含以后新关注的超话",
                  disabled: M.saving || I === "selected" && _.mode === "all" && !u,
                  onClick: () => {
                    I !== _.mode && R({
                      ..._,
                      mode: I,
                      topic_ids: I === "all" ? [] : l.flatMap(
                        (oe) => oe.id ? [oe.id] : []
                      )
                    });
                  },
                  children: d ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                    /* @__PURE__ */ y.jsx("span", { className: "mode-indicator", "aria-hidden": "true" }),
                    /* @__PURE__ */ y.jsx("span", { children: I === "all" ? "全部关注的超话" : "只签到选中的超话" })
                  ] }) : J
                },
                I
              ))
            }
          ),
          !d && /* @__PURE__ */ y.jsx("span", { className: "selection-count", children: _.mode === "all" ? u ? "新关注也会自动签到" : "刷新完整列表后可自选" : `已选 ${N.size} / ${l.length}` })
        ] }),
        d && _.mode === "all" && /* @__PURE__ */ y.jsxs("p", { className: "topics-notice", children: [
          u ? `将为全部 ${l.length} 个关注超话签到` : "将为全部关注超话签到，当前列表尚未读完",
          "，以后新关注的也会自动加入。",
          !u && "刷新完整列表后可改为自选。"
        ] }),
        d && _.mode === "selected" && m,
        (!d || _.mode === "selected") && /* @__PURE__ */ y.jsxs("div", { className: "selection-list-heading", children: [
          /* @__PURE__ */ y.jsxs(
            Ue,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              className: "selection-toggle",
              role: "checkbox",
              "aria-checked": ne ? !0 : ae > 0 ? "mixed" : !1,
              "aria-label": o.length === l.length ? "全选超话" : "全选搜索结果",
              disabled: M.saving || !ee.length || _.mode === "all" && !u,
              onClick: () => Y(!ne),
              children: [
                /* @__PURE__ */ y.jsx("span", { className: "topic-check", "aria-hidden": "true", children: ne ? /* @__PURE__ */ y.jsx(cd, { size: 14 }) : ae > 0 ? /* @__PURE__ */ y.jsx(_M, { size: 14 }) : null }),
                o.length === l.length ? "全选" : `搜索结果 ${o.length}`
              ]
            }
          ),
          /* @__PURE__ */ y.jsx("span", { className: "topic-status", children: d ? `已选 ${N.size} 个` : "今日状态" })
        ] }),
        Z > 0 && _.mode === "selected" && /* @__PURE__ */ y.jsxs("p", { className: "topics-notice", children: [
          Z,
          " 个已选超话未在列表中找到",
          /* @__PURE__ */ y.jsx(
            Ue,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              disabled: M.saving,
              onClick: () => R({
                ..._,
                topic_ids: _.topic_ids.filter(
                  (I) => l.some((J) => J.id === I)
                )
              }),
              children: "移除"
            }
          )
        ] }),
        o.length > 0 && (!d || _.mode === "selected") && /* @__PURE__ */ y.jsx("ul", { className: "topic-list selectable-topic-list", children: o.map((I, J) => {
          const oe = _.mode === "all" || !!I.id && N.has(I.id);
          return /* @__PURE__ */ y.jsxs("li", { children: [
            /* @__PURE__ */ y.jsxs(
              Ue,
              {
                type: "button",
                variant: "ghost",
                className: "topic-choice whitespace-normal h-auto justify-start px-2 py-0",
                role: "checkbox",
                "aria-checked": oe,
                "aria-label": I.name,
                disabled: !I.id || M.saving || _.mode === "all" && !u,
                onClick: () => {
                  const H = new Set(
                    _.mode === "all" ? l.flatMap((F) => F.id ? [F.id] : []) : N
                  );
                  H.has(I.id) ? H.delete(I.id) : H.add(I.id), R({
                    ..._,
                    mode: "selected",
                    topic_ids: [...H]
                  });
                },
                children: [
                  /* @__PURE__ */ y.jsx("span", { className: "topic-check", "aria-hidden": "true", children: oe && /* @__PURE__ */ y.jsx(cd, { size: 14 }) }),
                  /* @__PURE__ */ y.jsxs("span", { className: "topic-name", children: [
                    I.name,
                    !I.id && /* @__PURE__ */ y.jsx("small", { children: "请刷新后选择" })
                  ] })
                ]
              }
            ),
            !d && /* @__PURE__ */ y.jsx("span", { className: `topic-status ${I.status}`, children: Dx[I.status] || "待确认" })
          ] }, I.id || J);
        }) }),
        _.mode === "selected" && !N.size && /* @__PURE__ */ y.jsx("p", { className: "topics-notice", children: z ? "未选择超话，保存后暂停这个微博的签到。" : "这个微博已暂停签到，勾选超话即可恢复。" }),
        M.error && /* @__PURE__ */ y.jsx("p", { role: "alert", className: "credit-form-error", children: M.error }),
        d || z ? /* @__PURE__ */ y.jsxs("div", { className: "selection-footer", children: [
          /* @__PURE__ */ y.jsx("span", { className: "selection-count", children: z ? "有未保存的修改" : "保存后用于手动和定时签到" }),
          /* @__PURE__ */ y.jsxs("div", { className: "selection-actions", children: [
            /* @__PURE__ */ y.jsx(
              Ue,
              {
                type: "button",
                size: "sm",
                variant: "ghost",
                disabled: M.saving,
                onClick: () => d ? p?.() : R(D),
                children: "取消"
              }
            ),
            /* @__PURE__ */ y.jsx(
              Ue,
              {
                type: "button",
                size: "sm",
                disabled: M.saving || !z,
                onClick: U,
                children: M.saving ? "保存中…" : d ? "保存设置" : "保存"
              }
            )
          ] })
        ] }) : M.message ? /* @__PURE__ */ y.jsx("p", { role: "status", className: "selection-saved", children: M.message }) : null
      ]
    }
  ) : null;
}
function Nx({
  accounts: n,
  configuration: a = !1,
  onStateChange: l,
  onCancel: o,
  onSaved: s
}) {
  const [u, d] = x.useState(n), [m, h] = x.useState(n[0]?.id || ""), [p, b] = x.useState(""), [v, S] = x.useState({
    accountId: "",
    method: "GET",
    revision: 0
  }), [T, E] = x.useState({ accountId: "", loading: !1 }), O = T.accountId === m ? T : { loading: !!m }, C = O.scan;
  function D(M = "GET") {
    S((N) => ({
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
    return _x(
      `/api/accounts/${encodeURIComponent(m)}/topics${N === "POST" ? "/refresh" : ""}`,
      M.signal,
      N
    ).then(({ scan: z, selection: R }) => {
      M.signal.aborted || (E({ accountId: m, scan: z, selection: R, loading: !1 }), document.dispatchEvent(
        new CustomEvent("credit:topics-loaded", {
          detail: { accountId: m, scan: z, selection: R }
        })
      ));
    }).catch((z) => {
      M.signal.aborted || E((R) => ({
        ...R,
        loading: !1,
        error: z instanceof TypeError ? "无法连接服务，请稍后重试" : z.message
      }));
    }), () => M.abort();
  }, [m, v]), x.useEffect(() => {
    if (!(!C || O.loading || O.error)) {
      if (C.status === "unscanned")
        S((M) => ({
          accountId: m,
          method: "POST",
          revision: M.revision + 1
        }));
      else if (C.status === "scanning") {
        const M = setTimeout(
          () => S((N) => ({
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
      const R = z.detail?.accounts;
      R && !a && (d(R), h(
        (Y) => R.some((U) => U.id === Y) ? Y : R[0]?.id || ""
      )), S((Y) => ({
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
  return /* @__PURE__ */ y.jsxs(
    "section",
    {
      id: "followed-topics",
      className: `followed-topics${a ? " configured-topics" : ""}`,
      "aria-label": "关注的超话",
      children: [
        /* @__PURE__ */ y.jsxs("div", { className: "topics-heading", children: [
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("h2", { children: a ? "签到范围" : "超话签到" }),
            !a && C?.scanned_at ? /* @__PURE__ */ y.jsxs("p", { children: [
              C.complete ? "关注" : "已读取",
              " ",
              C.items.length,
              " 个",
              C.fresh ? ` · 今日已签 ${C.items.filter((M) => M.status === "done").length} 个` : " · 今日状态待刷新"
            ] }) : null
          ] }),
          m && /* @__PURE__ */ y.jsxs(
            Ue,
            {
              type: "button",
              size: "sm",
              variant: "ghost",
              title: C?.scanned_at ? `同步于 ${new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(C.scanned_at * 1e3)}` : "刷新关注列表",
              "aria-label": "刷新超话",
              disabled: O.loading || C?.status === "scanning",
              onClick: () => D("POST"),
              children: [
                /* @__PURE__ */ y.jsx(AM, { size: 14 }),
                O.loading || C?.status === "scanning" ? "扫描中…" : "刷新"
              ]
            }
          )
        ] }),
        u.length ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
          !a && /* @__PURE__ */ y.jsxs("div", { className: "topics-toolbar", children: [
            /* @__PURE__ */ y.jsx("div", { className: "credit-field", children: /* @__PURE__ */ y.jsx(
              $l,
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
            /* @__PURE__ */ y.jsxs("div", { className: "topic-search", children: [
              /* @__PURE__ */ y.jsx(Fy, { size: 14, "aria-hidden": "true" }),
              /* @__PURE__ */ y.jsx(
                ba,
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
          O.error && /* @__PURE__ */ y.jsxs("p", { role: "alert", className: "credit-form-error", children: [
            O.error,
            " ",
            /* @__PURE__ */ y.jsx(
              Ue,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                onClick: () => D(),
                children: "重试加载"
              }
            )
          ] }),
          C && Tv[C.status] && /* @__PURE__ */ y.jsx(
            "p",
            {
              className: "topics-notice",
              role: C.status === "error" || C.status === "expired" ? "alert" : "status",
              children: Tv[C.status]
            }
          ),
          O.loading && !C && /* @__PURE__ */ y.jsx("p", { className: "topics-empty", role: "status", children: "正在加载超话…" }),
          /* @__PURE__ */ y.jsx(
            AA,
            {
              accountId: m,
              selection: O.selection || { mode: "all", topic_ids: [], revision: 0 },
              allItems: C?.items || [],
              items: _,
              ready: !!C && !!O.selection,
              complete: !!C?.complete,
              configuration: a,
              searchControl: /* @__PURE__ */ y.jsxs("div", { className: "topic-search", children: [
                /* @__PURE__ */ y.jsx(Fy, { size: 14, "aria-hidden": "true" }),
                /* @__PURE__ */ y.jsx(
                  ba,
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
          !_.length && C?.scanned_at ? /* @__PURE__ */ y.jsx("p", { className: "topics-empty", children: p ? "没有匹配的超话" : C.complete ? "当前没有关注的超话" : "暂未获取到超话，请刷新重试" }) : null
        ] }) : /* @__PURE__ */ y.jsx("p", { className: "topics-empty", children: "绑定微博后显示你关注的超话。" })
      ]
    }
  );
}
const Ov = (n) => ["failed", "network_error", "unknown", "pending"].includes(n.status);
function Ax({
  runId: n,
  embedded: a = !1
}) {
  const [l, o] = x.useState(a), [s, u] = x.useState(0), [d, m] = x.useState(), [h, p] = x.useState("");
  return x.useEffect(() => {
    if (!l) return;
    const b = new AbortController();
    let v;
    return p(""), _x(
      `/api/runs/${encodeURIComponent(n)}/topics`,
      b.signal
    ).then((S) => {
      b.signal.aborted || (m(S), ["queued", "running"].includes(S.status) && (v = setTimeout(() => u((T) => T + 1), 2e3)));
    }).catch((S) => {
      b.signal.aborted || p(
        S instanceof TypeError ? "无法连接服务，请稍后重试" : S.message
      );
    }), () => {
      b.abort(), clearTimeout(v);
    };
  }, [l, n, s]), /* @__PURE__ */ y.jsxs("div", { className: "run-topics", children: [
    !a && /* @__PURE__ */ y.jsx(
      Ue,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        "aria-expanded": l,
        onClick: () => o((b) => !b),
        children: l ? "收起超话明细" : "查看超话明细"
      }
    ),
    l && /* @__PURE__ */ y.jsx("div", { className: "run-topics-content", children: h ? /* @__PURE__ */ y.jsxs("p", { role: "alert", className: "credit-form-error", children: [
      h,
      " ",
      /* @__PURE__ */ y.jsx(
        Ue,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: () => u((b) => b + 1),
          children: "重试"
        }
      )
    ] }) : d ? d.items.length ? /* @__PURE__ */ y.jsx(
      NA,
      {
        items: a ? [...d.items.filter(Ov), ...d.items.filter((b) => !Ov(b))] : d.items,
        historical: !0
      }
    ) : /* @__PURE__ */ y.jsx("p", { className: "topics-notice", children: "此记录暂无逐个超话明细。" }) : /* @__PURE__ */ y.jsx("p", { role: "status", children: "正在加载超话明细…" }) })
  ] });
}
const RA = {
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  queued: "等待执行",
  running: "正在签到",
  expired: "登录失效",
  network_error: "网络 / 接口异常",
  no_topics: "未获取到超话",
  interrupted: "任务中断"
}, kA = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
});
function Uo({ label: n, children: a }) {
  return /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsx("dt", { children: n }),
    /* @__PURE__ */ y.jsx("dd", { children: a })
  ] });
}
function jA({ account: n, date: a, onClose: l }) {
  const [o, s] = x.useState(1), [u, d] = x.useState(0), [m, h] = x.useState(0), p = () => h((D) => D + 1), b = new URLSearchParams({
    account_id: n.id,
    start: a,
    end: a,
    page: String(o),
    page_size: "1"
  }), { data: v, loading: S, error: T } = Ex(`/api/runs?${b}`, m), E = v?.items[0], O = v?.total ?? u;
  x.useEffect(() => (document.addEventListener("credit:calendar-refresh", p), () => document.removeEventListener("credit:calendar-refresh", p)), []);
  function C(D) {
    S || (d(O), s((_) => _ + D));
  }
  return /* @__PURE__ */ y.jsxs("section", { className: "checkin-day run-receipt-paper", "aria-label": "当日签到明细", children: [
    /* @__PURE__ */ y.jsx(
      Ue,
      {
        type: "button",
        size: "icon",
        variant: "ghost",
        className: "run-receipt-close",
        "aria-label": "关闭弹窗",
        onClick: l,
        children: /* @__PURE__ */ y.jsx(Jb, { "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ y.jsxs("header", { className: "run-receipt-header", children: [
      /* @__PURE__ */ y.jsx("h2", { id: "account-panel-title", children: "签到详情" }),
      /* @__PURE__ */ y.jsxs("p", { className: "mono", children: [
        E ? kA.format(E.started_at * 1e3) : a.replaceAll("-", "/"),
        " · 北京时间"
      ] })
    ] }),
    O > 1 && /* @__PURE__ */ y.jsxs("nav", { className: "checkin-day-pager", "aria-label": "当日执行记录", children: [
      /* @__PURE__ */ y.jsx(Ue, { type: "button", variant: "outline", size: "sm", disabled: o <= 1, onClick: () => C(-1), children: "上一条" }),
      /* @__PURE__ */ y.jsxs("span", { children: [
        "第 ",
        o,
        " 条 · 共 ",
        O,
        " 条"
      ] }),
      /* @__PURE__ */ y.jsx(Ue, { type: "button", variant: "outline", size: "sm", disabled: o >= O, onClick: () => C(1), children: "下一条" })
    ] }),
    T ? /* @__PURE__ */ y.jsxs("div", { className: "checkin-day-notice", role: "alert", children: [
      /* @__PURE__ */ y.jsx("p", { children: T }),
      /* @__PURE__ */ y.jsx(Ue, { type: "button", variant: "outline", size: "sm", onClick: p, children: "重试" })
    ] }) : E ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsxs("div", { className: "run-receipt-total", children: [
        /* @__PURE__ */ y.jsx("span", { children: "本次新签超话" }),
        /* @__PURE__ */ y.jsx("strong", { children: E.success })
      ] }),
      /* @__PURE__ */ y.jsxs("dl", { className: "run-receipt-fields", children: [
        /* @__PURE__ */ y.jsx(Uo, { label: "微博账号", children: n.nickname || "微博用户" }),
        /* @__PURE__ */ y.jsx(Uo, { label: "微博 UID", children: /* @__PURE__ */ y.jsx("span", { className: "mono", children: n.uid }) }),
        /* @__PURE__ */ y.jsx(Uo, { label: "执行结果", children: /* @__PURE__ */ y.jsx("span", { className: `badge ${E.status}`, children: RA[E.status] || E.status }) }),
        /* @__PURE__ */ y.jsx(Uo, { label: "触发方式", children: E.trigger === "scheduled" ? "定时签到" : "手动签到" }),
        /* @__PURE__ */ y.jsxs(Uo, { label: "签到汇总", children: [
          "此前已签 ",
          E.done_before,
          " · ",
          /* @__PURE__ */ y.jsxs("span", { className: E.failed ? "has-failures" : void 0, children: [
            "失败 ",
            E.failed
          ] }),
          " · 共 ",
          E.total
        ] }),
        E.message && /* @__PURE__ */ y.jsx(Uo, { label: "说明", children: E.message })
      ] }),
      /* @__PURE__ */ y.jsxs("section", { className: "run-receipt-topics", "aria-labelledby": "day-receipt-topics-title", children: [
        /* @__PURE__ */ y.jsx("h3", { id: "day-receipt-topics-title", children: "超话明细" }),
        /* @__PURE__ */ y.jsx(Ax, { runId: E.id, embedded: !0 }, E.id)
      ] })
    ] }) : S ? /* @__PURE__ */ y.jsx("p", { className: "checkin-day-notice", role: "status", children: "正在加载当天明细…" }) : /* @__PURE__ */ y.jsx("p", { className: "checkin-day-notice", children: "当天没有签到记录" })
  ] });
}
function zA() {
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
  const S = l && "account" in l ? l.account : void 0, T = l?.kind === "topics" ? "配置签到" : "每日计划";
  return /* @__PURE__ */ y.jsx(
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
      children: l && /* @__PURE__ */ y.jsx(cm.Provider, { value: n.current, children: /* @__PURE__ */ y.jsxs("div", { className: "account-panel-layout", inert: h, children: [
        l.kind !== "day-details" && /* @__PURE__ */ y.jsxs("header", { className: "account-panel-header", children: [
          /* @__PURE__ */ y.jsx(
            Ue,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              "aria-label": "关闭弹窗",
              disabled: s.saving,
              onClick: v,
              children: /* @__PURE__ */ y.jsx(Jb, { "aria-hidden": "true" })
            }
          ),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("h2", { id: "account-panel-title", children: T }),
            S ? /* @__PURE__ */ y.jsxs("p", { children: [
              S.nickname || "微博用户",
              /* @__PURE__ */ y.jsxs("span", { children: [
                "UID ",
                S.uid
              ] })
            ] }) : /* @__PURE__ */ y.jsx("p", { children: "北京时间 · 对你绑定的全部微博生效" })
          ] })
        ] }),
        d && /* @__PURE__ */ y.jsxs("div", { className: "panel-discard", role: "alert", children: [
          /* @__PURE__ */ y.jsx("p", { children: "还有未保存的修改，是否放弃？" }),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx(
              Ue,
              {
                type: "button",
                size: "sm",
                variant: "outline",
                onClick: () => m(!1),
                children: "继续编辑"
              }
            ),
            /* @__PURE__ */ y.jsx(
              Ue,
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
        /* @__PURE__ */ y.jsxs("div", { className: "account-panel-body", children: [
          l.kind === "topics" && /* @__PURE__ */ y.jsx(
            Nx,
            {
              accounts: [l.account],
              configuration: !0,
              onStateChange: u,
              onCancel: v,
              onSaved: b
            },
            l.account.id
          ),
          l.kind === "day-details" && /* @__PURE__ */ y.jsx(jA, { account: l.account, date: l.date, onClose: v }),
          l.kind === "plan" && /* @__PURE__ */ y.jsx(
            Sx,
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
const Vs = /* @__PURE__ */ new Map();
function HA(n = document) {
  n.querySelectorAll("[data-credit-form]").forEach((a) => {
    if (Vs.has(a)) return;
    const l = e1.createRoot(a);
    if (a.classList.add("credit-controls"), Vs.set(a, l), a.dataset.creditForm === "appearance") {
      l.render(/* @__PURE__ */ y.jsx(xA, {}));
      return;
    }
    if (a.dataset.creditForm === "account-panel") {
      l.render(/* @__PURE__ */ y.jsx(zA, {}));
      return;
    }
    if (a.dataset.creditForm === "login") {
      l.render(/* @__PURE__ */ y.jsx(wA, {}));
      return;
    }
    if (a.dataset.creditForm === "footprint" || a.dataset.creditForm === "topics") {
      const s = JSON.parse(a.dataset.props || "{}");
      l.render(
        a.dataset.creditForm === "footprint" ? /* @__PURE__ */ y.jsx(_A, { accounts: s.accounts }) : /* @__PURE__ */ y.jsx(Nx, { accounts: s.accounts })
      );
      return;
    }
    const o = JSON.parse(a.dataset.props || "{}");
    o.kind === "plan" ? l.render(/* @__PURE__ */ y.jsx(Sx, { plan: o.plan })) : o.kind === "filters" ? l.render(
      /* @__PURE__ */ y.jsx(
        gA,
        {
          admin: o.admin,
          values: o.values,
          statuses: o.statuses
        }
      )
    ) : o.kind === "users" ? l.render(/* @__PURE__ */ y.jsx(yA, { search: o.search })) : o.kind === "system-settings" ? l.render(/* @__PURE__ */ y.jsx(bA, { settings: o.settings })) : o.kind === "run-topics" && l.render(/* @__PURE__ */ y.jsx(Ax, { runId: o.runId, embedded: o.embedded }));
  });
}
function VA(n) {
  for (const [a, l] of Vs)
    n.contains(a) && (l.unmount(), Vs.delete(a));
}
HA();
export {
  HA as mountControls,
  VA as unmountControls
};
