(function () {
  /* 
 
    Copyright The Closure Library Authors. 
    SPDX-License-Identifier: Apache-2.0 
   */
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var l =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this),
    da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
    p = {},
    ea = {};
  function v(a, b) {
    var c = ea[b];
    if (null == c) return a[b];
    c = a[c];
    return void 0 !== c ? c : a[b];
  }
  function w(a, b, c) {
    if (b)
      a: {
        var d = a.split(".");
        a = 1 === d.length;
        var e = d[0],
          f;
        !a && e in p ? (f = p) : (f = ca);
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) break a;
          f = f[g];
        }
        d = d[d.length - 1];
        c = da && "es6" === c ? f[d] : null;
        b = b(c);
        null != b &&
          (a
            ? l(p, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              (void 0 === ea[d] &&
                ((a = (1e9 * Math.random()) >>> 0),
                (ea[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d)),
              l(f, ea[d], { configurable: !0, writable: !0, value: b })));
      }
  }
  w(
    "Symbol",
    function (a) {
      function b(f) {
        if (this instanceof b)
          throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++, f);
      }
      function c(f, g) {
        this.g = f;
        l(this, "description", { configurable: !0, writable: !0, value: g });
      }
      if (a) return a;
      c.prototype.toString = function () {
        return this.g;
      };
      var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        e = 0;
      return b;
    },
    "es6"
  );
  w(
    "Symbol.iterator",
    function (a) {
      if (a) return a;
      a = (0, p.Symbol)("Symbol.iterator");
      for (
        var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = ca[b[c]];
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          l(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return fa(aa(this));
            },
          });
      }
      return a;
    },
    "es6"
  );
  function fa(a) {
    a = { next: a };
    a[v(p.Symbol, "iterator")] = function () {
      return this;
    };
    return a;
  }
  w(
    "String.prototype.endsWith",
    function (a) {
      return a
        ? a
        : function (b, c) {
            if (null == this)
              throw new TypeError(
                "The 'this' value for String.prototype.endsWith must not be null or undefined"
              );
            if (b instanceof RegExp)
              throw new TypeError(
                "First argument to String.prototype.endsWith must not be a regular expression"
              );
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c; )
              if (this[--c] != b[--d]) return !1;
            return 0 >= d;
          };
    },
    "es6"
  );
  function ha(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[v(p.Symbol, "iterator")] = function () {
      return e;
    };
    return e;
  }
  w(
    "Array.prototype.values",
    function (a) {
      return a
        ? a
        : function () {
            return ha(this, function (b, c) {
              return c;
            });
          };
    },
    "es8"
  );
  w(
    "Array.prototype.keys",
    function (a) {
      return a
        ? a
        : function () {
            return ha(this, function (b) {
              return b;
            });
          };
    },
    "es6"
  );
  w(
    "Object.values",
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c;
          };
    },
    "es8"
  );
  var A = this || self;
  function ia(a) {
    a.v = void 0;
    a.i = function () {
      return a.v ? a.v : (a.v = new a());
    };
  }
  function ja(a) {
    return a;
  }
  function ka(a) {
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? 0 : a;
  }
  function la(a, b) {
    this.j = (a === ma && b) || "";
    this.g = na;
  }
  var na = {},
    ma = {};
  function oa(a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  var pa = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length
              ? -1
              : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    qa = Array.prototype.some
      ? function (a, b) {
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = "string" === typeof a ? a.split("") : a,
              e = 0;
            e < c;
            e++
          )
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
  var va;
  a: {
    var wa = A.navigator;
    if (wa) {
      var xa = wa.userAgent;
      if (xa) {
        va = xa;
        break a;
      }
    }
    va = "";
  }
  var ya;
  function za(a, b) {
    this.g = b === Aa ? a : "";
  }
  za.prototype.toString = function () {
    return this.g + "";
  };
  var Aa = {};
  function Ba(a) {
    if (void 0 === ya) {
      var b = null;
      var c = A.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy("goog#html", {
            createHTML: ja,
            createScript: ja,
            createScriptURL: ja,
          });
        } catch (d) {
          A.console && A.console.error(d.message);
        }
        ya = b;
      } else ya = b;
    }
    a = (b = ya) ? b.createScriptURL(a) : a;
    return new za(a, Aa);
  }
  function Ca(a, b) {
    a.src =
      b instanceof za && b.constructor === za
        ? b.g
        : "type_error:TrustedResourceUrl";
    (b = a.ownerDocument && a.ownerDocument.defaultView) && b != A
      ? (b = Da(b.document))
      : (null === Ea && (Ea = Da(A.document)), (b = Ea));
    b && a.setAttribute("nonce", b);
  }
  var Ea = null,
    Fa = /^[\w+/_-]+[=]{0,2}$/;
  function Da(a) {
    return a.querySelector
      ? (a = a.querySelector("script[nonce]")) &&
        (a = a.nonce || a.getAttribute("nonce")) &&
        Fa.test(a)
        ? a
        : ""
      : "";
  }
  function Ga(a) {
    Ga[" "](a);
    return a;
  }
  Ga[" "] = function () {};
  function Ha(a) {
    var b = document;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  }
  var Ia = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function Ja(a) {
    var b = a.match(Ia);
    a = b[5];
    var c = b[6];
    b = b[7];
    var d = "";
    a && (d += a);
    c && (d += "?" + c);
    b && (d += "#" + b);
    return d;
  }
  function Ka(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
      var f = a.charCodeAt(b - 1);
      if (38 == f || 63 == f)
        if (((f = a.charCodeAt(b + e)), !f || 61 == f || 38 == f || 35 == f))
          return b;
      b += e + 1;
    }
    return -1;
  }
  var La = /#|$/;
  function Ma(a, b) {
    var c = a.search(La),
      d = Ka(a, 0, b, c);
    if (0 > d) return null;
    var e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "));
  }
  var Na = /[?&]($|#)/;
  function B(a, b, c) {
    for (var d = a.search(La), e = 0, f, g = []; 0 <= (f = Ka(a, e, b, d)); )
      g.push(a.substring(e, f)), (e = Math.min(a.indexOf("&", f) + 1 || d, d));
    g.push(a.substr(e));
    a = g.join("").replace(Na, "$1");
    c = null != c ? "=" + encodeURIComponent(String(c)) : "";
    (b += c)
      ? ((c = a.indexOf("#")),
        0 > c && (c = a.length),
        (d = a.indexOf("?")),
        0 > d || d > c ? ((d = c), (e = "")) : (e = a.substring(d + 1, c)),
        (c = [a.substr(0, d), e, a.substr(c)]),
        (a = c[1]),
        (c[1] = b ? (a ? a + "&" + b : b) : a),
        (b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]))
      : (b = a);
    return b;
  }
  function Oa() {
    if (!A.crypto) return Math.random();
    try {
      var a = new Uint32Array(1);
      A.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch (b) {
      return Math.random();
    }
  }
  function Pa(a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) &&
          b.call(void 0, a[c], c, a);
  }
  var Ra = oa(function () {
      return (
        qa(
          [
            "Google Web Preview",
            "Mediapartners-Google",
            "Google-Read-Aloud",
            "Google-Adwords",
          ],
          Qa
        ) || 1e-4 > Math.random()
      );
    }),
    Sa = oa(function () {
      return -1 != va.indexOf("MSIE");
    });
  function Qa(a) {
    return -1 != va.indexOf(a);
  }
  function C(a) {
    return /^true$/.test(a);
  }
  var Ta = ka("0.20"),
    Ua = ka("0.002"),
    Va = ka("0.00"),
    Wa = ka("0.00"),
    Xa = C("true"),
    Ya = C("true"),
    Za = C("true"),
    $a = C("true"),
    ab = C("true");
  var bb = null;
  function cb() {
    if (null === bb) {
      bb = "";
      try {
        var a = "";
        try {
          a = A.top.location.hash;
        } catch (c) {
          a = A.location.hash;
        }
        if (a) {
          var b = a.match(/\bdeid=([\d,]+)/);
          bb = b ? b[1] : "";
        }
      } catch (c) {}
    }
    return bb;
  }
  function E(a, b, c) {
    var d = G;
    if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
      var e;
      e = (e = cb())
        ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b")))
          ? e[0]
          : null
        : null;
      if (e) a = e;
      else
        a: {
          if (!Sa() && !Ra() && ((e = Math.random()), e < b)) {
            e = Oa();
            a = a[Math.floor(e * a.length)];
            break a;
          }
          a = null;
        }
      a &&
        "" != a &&
        (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : (d.j[a] = !0));
    }
  }
  function H(a) {
    var b = G;
    return b.g.hasOwnProperty(a) ? b.g[a] : "";
  }
  function db() {
    var a = G,
      b = [];
    Pa(a.j, function (c, d) {
      b.push(d);
    });
    Pa(a.g, function (c) {
      "" != c && b.push(c);
    });
    return b;
  }
  var eb = { K: 2, S: 13, R: 14, N: 16, M: 17, L: 18 },
    G = null;
  function fb() {
    return !!G && "592230571" == H(16);
  }
  function I() {
    return !!G && ("2505059651" == H(18) || "2505059650" == H(18));
  }
  var gb = {};
  function J(a) {
    gb.TAGGING = gb.TAGGING || [];
    gb.TAGGING[a] = !0;
  }
  function hb(a) {
    var b = "[object Array]" == Object.prototype.toString.call(Object(a));
    Array.isArray ? Array.isArray(a) !== b && J(4) : J(5);
    return b;
  }
  function ib(a, b) {
    if (a && hb(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function jb(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  var kb = new (function (a, b) {
    this.g = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var K = window,
    L = document;
  function M() {
    var a = {};
    this.g = function () {
      var b = kb.g,
        c = kb.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.j = function (b) {
      a[kb.g] = b;
    };
  }
  ia(M);
  var N = [];
  function O() {
    var a = {};
    var b = K.google_tag_data;
    K.google_tag_data = void 0 === b ? a : b;
    a = K.google_tag_data;
    a.ics ||
      (a.ics = {
        entries: {},
        set: lb,
        update: mb,
        addListener: nb,
        notifyListeners: ob,
        active: !1,
        usedDefault: !1,
      });
    return a.ics;
  }
  function lb(a, b, c, d, e, f) {
    var g = O();
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries;
      g = h[a] || {};
      var k = g.region;
      c = c && "string" == typeof c ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
        e = !!(f && 0 < f && void 0 === g.update);
        var m = {
          region: c,
          initial: "granted" === b,
          update: g.update,
          quiet: e,
        };
        if ("" !== d || !1 !== g.initial) h[a] = m;
        e &&
          K.setTimeout(function () {
            h[a] === m && m.quiet && ((m.quiet = !1), pb(a), ob(), J(2));
          }, f);
      }
    }
  }
  function mb(a, b) {
    var c = O();
    c.active = !0;
    if (void 0 != b) {
      var d = P(a);
      c = c.entries;
      c = c[a] = c[a] || {};
      c.update = "granted" === b;
      b = P(a);
      c.quiet ? ((c.quiet = !1), pb(a)) : b !== d && pb(a);
    }
  }
  function nb(a, b) {
    N.push({ u: a, G: b });
  }
  function pb(a) {
    for (var b = 0; b < N.length; ++b) {
      var c = N[b];
      hb(c.u) && -1 !== c.u.indexOf(a) && (c.F = !0);
    }
  }
  function ob(a) {
    for (var b = 0; b < N.length; ++b) {
      var c = N[b];
      if (c.F) {
        c.F = !1;
        try {
          c.G({ T: a });
        } catch (d) {}
      }
    }
  }
  function P(a) {
    a = O().entries[a] || {};
    return void 0 !== a.update
      ? a.update
      : void 0 !== a.initial
      ? a.initial
      : void 0;
  }
  function qb(a) {
    return !(O().entries[a] || {}).quiet;
  }
  function rb(a, b) {
    O().addListener(a, b);
  }
  function sb(a) {
    function b() {
      for (var e = 0; e < c.length; e++) if (!qb(c[e])) return !0;
      return !1;
    }
    var c = ["ad_storage"];
    if (b()) {
      var d = !1;
      rb(c, function (e) {
        d || b() || ((d = !0), a(e));
      });
    } else a({});
  }
  function tb(a) {
    function b() {
      for (var e = [], f = 0; f < c.length; f++) {
        var g = c[f];
        !1 === P(g) || d[g] || (e.push(g), (d[g] = !0));
      }
      return e;
    }
    var c = ["ad_storage"],
      d = {};
    b().length !== c.length &&
      rb(c, function (e) {
        var f = b();
        0 < f.length && ((e.u = f), a(e));
      });
  }
  function ub(a, b, c, d) {
    if (vb(d)) {
      d = [];
      b = String(b || wb()).split(";");
      for (var e = 0; e < b.length; e++) {
        var f = b[e].split("="),
          g = f[0].replace(/^\s*|\s*$/g, "");
        g &&
          g == a &&
          ((f = f
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "")) &&
            c &&
            (f = decodeURIComponent(f)),
          d.push(f));
      }
      a = d;
    } else a = [];
    return a;
  }
  function xb(a, b, c, d) {
    var e = wb(),
      f = window;
    "null" !== f.origin && (f.document.cookie = a);
    a = wb();
    return e != a || (void 0 != c && 0 <= ub(b, a, !1, d).indexOf(c));
  }
  function yb(a, b, c) {
    function d(r, q, y) {
      if (null == y) return delete g[q], r;
      g[q] = y;
      return r + "; " + q + "=" + y;
    }
    function e(r, q) {
      if (null == q) return delete g[q], r;
      g[q] = !0;
      return r + "; " + q;
    }
    if (vb(c.s)) {
      if (void 0 == b)
        var f = a + "=deleted; expires=" + new Date(0).toUTCString();
      else
        c.encode && (b = encodeURIComponent(b)), (b = zb(b)), (f = a + "=" + b);
      var g = {};
      f = d(f, "path", c.path);
      if (c.expires instanceof Date) var h = c.expires.toUTCString();
      else null != c.expires && (h = c.expires);
      f = d(f, "expires", h);
      f = d(f, "max-age", c.U);
      f = d(f, "samesite", c.V);
      c.W && (f = e(f, "secure"));
      h = c.domain;
      if ("auto" === h) {
        h = Ab();
        for (var k = 0; k < h.length; ++k) {
          var m = "none" !== h[k] ? h[k] : void 0,
            n = d(f, "domain", m);
          n = e(n, c.flags);
          if (!Bb(m, c.path) && xb(n, a, b, c.s)) break;
        }
      } else
        h && "none" !== h && (f = d(f, "domain", h)),
          (f = e(f, c.flags)),
          Bb(h, c.path) || xb(f, a, b, c.s);
    }
  }
  function Cb(a, b, c) {
    null == c.path && (c.path = "/");
    c.domain || (c.domain = "auto");
    yb(a, b, c);
  }
  function zb(a) {
    a && 1200 < a.length && (a = a.substring(0, 1200));
    return a;
  }
  var Db = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Eb = /(^|\.)doubleclick\.net$/i;
  function Bb(a, b) {
    return (
      Eb.test(window.document.location.hostname) || ("/" === b && Db.test(a))
    );
  }
  function wb() {
    return "null" !== window.origin ? window.document.cookie : "";
  }
  function Ab() {
    var a = [],
      b = window.document.location.hostname.split(".");
    if (4 === b.length) {
      var c = b[b.length - 1];
      if (parseInt(c, 10).toString() === c) return ["none"];
    }
    for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
    b = window.document.location.hostname;
    Eb.test(b) || Db.test(b) || a.push("none");
    return a;
  }
  function vb(a) {
    if (!(M.i().g() && a && M.i().g() && O().active)) return !0;
    if (!qb(a)) return !1;
    a = P(a);
    return null == a ? !0 : !!a;
  }
  function Fb(a, b) {
    var c,
      d = Number(null != a.D ? a.D : void 0);
    0 !== d &&
      (c = new Date((b || new Date().getTime()) + 1e3 * (d || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !0,
      expires: c,
    };
  }
  function Gb(a) {
    var b = [],
      c = L.cookie.split(";");
    a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
    for (var d = 0; d < c.length; d++) {
      var e = c[d].match(a);
      e &&
        b.push({
          A: e[1],
          value: e[2],
          timestamp: Number(e[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (f, g) {
      return g.timestamp - f.timestamp;
    });
    return b;
  }
  function Q(a, b) {
    a = Gb(a);
    var c = {};
    if (!a || !a.length) return c;
    for (var d = 0; d < a.length; d++) {
      var e = a[d].value.split(".");
      if (
        !("1" !== e[0] || (b && 3 > e.length) || (!b && 3 !== e.length)) &&
        Number(e[1])
      ) {
        c[a[d].A] || (c[a[d].A] = []);
        var f = { version: e[0], timestamp: 1e3 * Number(e[1]), h: e[2] };
        b && 3 < e.length && (f.labels = e.slice(3));
        c[a[d].A].push(f);
      }
    }
    return c;
  }
  var Hb = /:[0-9]+$/;
  function Ib(a, b) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].split("=");
      if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b)
        return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ");
    }
  }
  function Jb(a, b) {
    var c = "query";
    if ("protocol" === c || "port" === c)
      a.protocol = Kb(a.protocol) || Kb(K.location.protocol);
    "port" === c
      ? (a.port = String(
          Number(a.hostname ? a.port : K.location.port) ||
            ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
        ))
      : "host" === c &&
        (a.hostname = (a.hostname || K.location.hostname)
          .replace(Hb, "")
          .toLowerCase());
    var d = Kb(a.protocol);
    c && (c = String(c).toLowerCase());
    switch (c) {
      case "url_no_fragment":
        b = "";
        a &&
          a.href &&
          ((b = a.href.indexOf("#")),
          (b = 0 > b ? a.href : a.href.substr(0, b)));
        a = b;
        break;
      case "protocol":
        a = d;
        break;
      case "host":
        a = a.hostname.replace(Hb, "").toLowerCase();
        break;
      case "port":
        a = String(
          Number(a.port) || ("http" == d ? 80 : "https" == d ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || J(1);
        a = "/" == a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
        a = a.split("/");
        a: if (((b = a[a.length - 1]), (c = []), Array.prototype.indexOf))
          (b = c.indexOf(b)), (b = "number" == typeof b ? b : -1);
        else {
          for (d = 0; d < c.length; d++)
            if (c[d] === b) {
              b = d;
              break a;
            }
          b = -1;
        }
        0 <= b && (a[a.length - 1] = "");
        a = a.join("/");
        break;
      case "query":
        a = a.search.replace("?", "");
        b && (a = Ib(a, b));
        break;
      case "extension":
        a = a.pathname.split(".");
        a = 1 < a.length ? a[a.length - 1] : "";
        a = a.split("/")[0];
        break;
      case "fragment":
        a = a.hash.replace("#", "");
        break;
      default:
        a = a && a.href;
    }
    return a;
  }
  function Kb(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  var Lb = {};
  var Mb = /^\w+$/,
    Nb = /^[\w-]+$/,
    Ob = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" };
  function R() {
    if (!M.i().g() || !M.i().g() || !O().active) return !0;
    var a = P("ad_storage");
    return null == a ? !0 : !!a;
  }
  function Pb(a, b) {
    qb("ad_storage")
      ? R()
        ? a()
        : tb(a)
      : b
      ? J(3)
      : sb(function () {
          Pb(a, !0);
        });
  }
  function Qb(a) {
    return Sb(a).map(function (b) {
      return b.h;
    });
  }
  function Sb(a) {
    var b = [];
    if ("null" === K.origin || !L.cookie) return b;
    a = ub(a, L.cookie, void 0, "ad_storage");
    if (!a || 0 == a.length) return b;
    for (var c = {}, d = 0; d < a.length; c = { l: c.l }, d++) {
      var e = Tb(a[d]);
      if (null != e) {
        var f = e;
        e = f.version;
        c.l = f.h;
        var g = f.timestamp;
        f = f.labels;
        var h = ib(
          b,
          (function (k) {
            return function (m) {
              return m.h === k.l;
            };
          })(c)
        );
        h
          ? ((h.timestamp = Math.max(h.timestamp, g)),
            (h.labels = Ub(h.labels, f || [])))
          : b.push({ version: e, h: c.l, timestamp: g, labels: f });
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Vb(b);
  }
  function Ub(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
    return d;
  }
  function Wb(a) {
    return a && "string" == typeof a && a.match(Mb) ? a : "_gcl";
  }
  function Xb() {
    var a = K.location.href,
      b = L.createElement("a");
    a && (b.href = a);
    var c = b.pathname;
    "/" !== c[0] && (a || J(1), (c = "/" + c));
    a = b.hostname.replace(Hb, "");
    var d = {
      href: b.href,
      protocol: b.protocol,
      host: b.host,
      hostname: a,
      pathname: c,
      search: b.search,
      hash: b.hash,
      port: b.port,
    };
    b = Jb(d, "gclid");
    c = Jb(d, "gclsrc");
    a = Jb(d, "wbraid");
    var e = Jb(d, "dclid");
    (b && c && a) ||
      ((d = d.hash.replace("#", "")),
      (b = b || Ib(d, "gclid")),
      (c = c || Ib(d, "gclsrc")),
      (a = a || Ib(d, "wbraid")));
    return Yb(b, c, e, a);
  }
  function Yb(a, b, c, d) {
    function e(g, h) {
      f[h] || (f[h] = []);
      f[h].push(g);
    }
    var f = {};
    f.gclid = a;
    f.gclsrc = b;
    f.dclid = c;
    void 0 !== d && Nb.test(d) && ((f.gbraid = d), e(d, "gb"));
    if (void 0 !== a && a.match(Nb))
      switch (b) {
        case void 0:
          e(a, "aw");
          break;
        case "aw.ds":
          e(a, "aw");
          e(a, "dc");
          break;
        case "ds":
          e(a, "dc");
          break;
        case "3p.ds":
          e(a, "dc");
          break;
        case "gf":
          e(a, "gf");
          break;
        case "ha":
          e(a, "ha");
      }
    c && e(c, "dc");
    return f;
  }
  function Zb() {
    var a = {},
      b = Xb();
    Pb(function () {
      $b(b, a);
    });
  }
  function $b(a, b, c, d) {
    function e(n) {
      n = ["GCL", m, n];
      0 < d.length && n.push(d.join("."));
      return n.join(".");
    }
    function f(n, r) {
      if ((n = ac(n, g))) Cb(n, r, h), (k = !0);
    }
    b = b || {};
    d = d || [];
    var g = Wb(b.prefix);
    c = c || new Date().getTime();
    var h = Fb(b, c);
    h.s = "ad_storage";
    var k = !1,
      m = Math.round(c / 1e3);
    a.aw && f("aw", e(a.aw[0]));
    a.dc && f("dc", e(a.dc[0]));
    a.gf && f("gf", e(a.gf[0]));
    a.ha && f("ha", e(a.ha[0]));
    a.gp && f("gp", e(a.gp[0]));
    (void 0 == Lb.enable_gbraid_cookie_write
      ? 0
      : Lb.enable_gbraid_cookie_write) &&
      !k &&
      a.gb &&
      f("gb", e(a.gb[0]));
  }
  function ac(a, b) {
    a = Ob[a];
    if (void 0 !== a) return b + a;
  }
  function bc(a) {
    return 0 !== cc(a.split(".")).length
      ? 1e3 * (Number(a.split(".")[1]) || 0)
      : 0;
  }
  function Tb(a) {
    a = cc(a.split("."));
    return 0 === a.length
      ? null
      : {
          version: a[0],
          h: a[2],
          timestamp: 1e3 * (Number(a[1]) || 0),
          labels: a.slice(3),
        };
  }
  function cc(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Nb.test(a[2])
      ? []
      : a;
  }
  function Vb(a) {
    return a.filter(function (b) {
      return Nb.test(b.h);
    });
  }
  function dc() {
    var a = ["aw"],
      b = {};
    if ("null" !== K.origin) {
      for (var c = Wb(b.prefix), d = {}, e = 0; e < a.length; e++)
        Ob[a[e]] && (d[a[e]] = Ob[a[e]]);
      Pb(function () {
        jb(d, function (f, g) {
          g = ub(c + g, L.cookie, void 0, "ad_storage");
          g.sort(function (n, r) {
            return bc(r) - bc(n);
          });
          if (g.length) {
            var h = g[0];
            g = bc(h);
            var k = 0 !== cc(h.split(".")).length ? h.split(".").slice(3) : [],
              m = {};
            h = 0 !== cc(h.split(".")).length ? h.split(".")[2] : void 0;
            m[f] = [h];
            $b(m, b, g, k);
          }
        });
      });
    }
  }
  function ec(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!R()) return e;
    var f = Sb(a);
    if (!f.length) return e;
    for (var g = 0; g < f.length; g++)
      -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
    if (d) return e;
    1 !== e[0] &&
      ((d = f[0]),
      (f = f[0].timestamp),
      (b = [d.version, Math.round(f / 1e3), d.h]
        .concat(d.labels || [], [b])
        .join(".")),
      (c = Fb(c, f)),
      (c.s = "ad_storage"),
      Cb(a, b, c));
    return e;
  }
  function fc(a, b) {
    b = Wb(b);
    a = ac(a, b);
    if (!a) return 0;
    a = Sb(a);
    for (var c = (b = 0); c < a.length; c++) b = Math.max(b, a[c].timestamp);
    return b;
  }
  function gc(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var hc = /^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,
    ic = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    jc = /^\d+\.fls\.doubleclick\.net$/,
    kc = /;gac=([^;?]+)/,
    lc = /;gacgb=([^;?]+)/,
    mc = /;gclaw=([^;?]+)/,
    nc = /;gclgb=([^;?]+)/;
  function oc(a, b, c) {
    if (jc.test(a.location.host))
      return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(hc)
        ? decodeURIComponent(b[1])
        : "";
    a = [];
    for (var d in b) {
      c = [];
      for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
      a.push(d + ":" + c.join(","));
    }
    return 0 < a.length ? a.join(";") : "";
  }
  function pc(a, b, c, d) {
    if (!I()) return { C: "", B: "" };
    var e = R() ? Q("_gac_gb", !0) : {},
      f = [],
      g = !1,
      h;
    for (h in e) {
      var k = ec("_gac_gb_" + h, b, c, d);
      g =
        g ||
        (0 !== k.length &&
          k.some(function (m) {
            return 1 === m;
          }));
      f.push(h + ":" + k.join(","));
    }
    return { C: g ? f.join(";") : "", B: oc(a, e, lc) };
  }
  function qc(a, b, c, d) {
    if (jc.test(a.location.host)) {
      if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(ic))
        return [{ h: a[1] }];
    } else return Sb((b || "_gcl") + c);
    return [];
  }
  function rc(a, b) {
    return qc(a, b, "_aw", mc)
      .map(function (c) {
        return c.h;
      })
      .join(".");
  }
  function sc(a, b) {
    return I()
      ? qc(a, b, "_gb", nc)
          .map(function (c) {
            return c.h;
          })
          .join(".")
      : "";
  }
  function tc(a, b) {
    var c =
      "" !== sc(a, b) ||
      0 < v(Object, "keys").call(Object, R() ? Q("_gac_gb", !0) : {}).length;
    a = "" !== rc(a, b) || "" !== oc(a, R() ? Q() : {}, kc);
    return c && a;
  }
  function uc(a) {
    0 !== Qb("_gcl_aw").length ||
      (a && 0 !== Qb(a + "_aw").length) ||
      (Zb(), dc());
  }
  function vc(a, b, c) {
    if (!I()) return "";
    a = ec(((b && b.prefix) || "_gcl") + "_gb", a, b, c);
    return 0 === a.length ||
      a.every(function (d) {
        return 0 === d;
      })
      ? ""
      : a.join(".");
  }
  function wc(a) {
    var b = A.performance;
    return (b && b.timing && b.timing[a]) || 0;
  }
  var xc = { O: 0, H: 1, P: 2, J: 3, I: 4 };
  function S() {
    this.g = {};
  }
  function yc(a, b, c) {
    "number" === typeof c && 0 < c && (a.g[b] = Math.round(c));
  }
  function zc(a) {
    var b = S.i();
    var c = void 0 === c ? A : c;
    c = c.performance;
    yc(b, a, c && c.now ? c.now() : null);
  }
  function Ac() {
    function a() {
      return yc(b, 0, wc("loadEventStart") - wc("navigationStart"));
    }
    var b = S.i();
    0 != wc("loadEventStart") ? a() : window.addEventListener("load", a);
  }
  function Bc(a, b) {
    b.google_tag_manager &&
      b.google_tag_manager._li &&
      ((b = b.google_tag_manager._li), yc(a, 4, b.cbt), yc(a, 3, b.cst));
  }
  function Cc() {
    var a = S.i();
    return v(Object, "values")
      .call(Object, xc)
      .map(function (b) {
        return [b, a.g[b] || 0];
      });
  }
  ia(S);
  function Dc(a, b, c) {
    a = Ec(a, !0);
    if (a[b]) return !1;
    a[b] = [];
    a[b][0] = c;
    return !0;
  }
  function Ec(a, b) {
    var c = a.GooglebQhCsO;
    c || ((c = {}), b && (a.GooglebQhCsO = c));
    return c;
  }
  var Fc = {},
    Gc = null;
  function Hc(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      255 < e && ((b[c++] = e & 255), (e >>= 8));
      b[c++] = e;
    }
    a = 4;
    void 0 === a && (a = 0);
    if (!Gc)
      for (
        Gc = {},
          c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
            ""
          ),
          d = ["+/=", "+/", "-_=", "-_.", "-_"],
          e = 0;
        5 > e;
        e++
      ) {
        var f = c.concat(d[e].split(""));
        Fc[e] = f;
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          void 0 === Gc[h] && (Gc[h] = g);
        }
      }
    a = Fc[a];
    c = [];
    for (d = 0; d < b.length; d += 3) {
      var k = b[d],
        m = (e = d + 1 < b.length) ? b[d + 1] : 0;
      h = (f = d + 2 < b.length) ? b[d + 2] : 0;
      g = k >> 2;
      k = ((k & 3) << 4) | (m >> 4);
      m = ((m & 15) << 2) | (h >> 6);
      h &= 63;
      f || ((h = 64), e || (m = 64));
      c.push(a[g], a[k], a[m] || "", a[h] || "");
    }
    return c.join("");
  }
  function Ic(a, b, c, d) {
    var e = Ma(c, "fmt");
    if (d) {
      var f = Ma(c, "random"),
        g = Ma(c, "label") || "";
      if (!f) return !1;
      f = Hc(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!Dc(a, f, d)) return !1;
    }
    e && 4 != e && (c = B(c, "rfmt", e));
    c = B(c, "fmt", 4);
    e = Ha("SCRIPT");
    Ca(e, Ba(c));
    e.onload = function () {
      a.google_noFurtherRedirects &&
        d &&
        d.call &&
        ((a.google_noFurtherRedirects = null), d());
    };
    b.getElementsByTagName("script")[0].parentElement.appendChild(e);
    return !0;
  }
  var Jc = C("false");
  function Kc() {
    if ("function" == typeof K.__uspapi) {
      var a = "";
      try {
        K.__uspapi("getUSPData", 1, function (b, c) {
          c &&
            b &&
            (b = b.uspString) &&
            /^[\da-zA-Z-]{1,20}$/.test(b) &&
            (a = b);
        });
      } catch (b) {}
      return a;
    }
  }
  var Lc = {
      id: !0,
      origin: !0,
      destination: !0,
      start_date: !0,
      end_date: !0,
      location_id: !0,
    },
    Mc = /^[a-zA-Z0-9_]+$/,
    Nc = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(
      " "
    );
  function Oc(a, b) {
    var c = a;
    return function () {
      --c;
      0 >= c && b();
    };
  }
  function T(a) {
    return null != a ? encodeURIComponent(String(a)) : "";
  }
  function Pc(a) {
    if (null != a) {
      a = String(a).substring(0, 512);
      var b = a.indexOf("#");
      return -1 == b ? a : a.substring(0, b);
    }
    return "";
  }
  function U(a, b) {
    b = T(b);
    return "" != b && ((a = T(a)), "" != a) ? "&".concat(a, "=", b) : "";
  }
  function Qc(a) {
    var b = typeof a;
    return null == a || "object" == b || "function" == b
      ? null
      : String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
  }
  function Rc(a) {
    if (!a || "object" != typeof a || "function" == typeof a.join) return "";
    var b = [],
      c;
    for (c in a)
      if (Object.prototype.hasOwnProperty.call(a, c)) {
        var d = a[c];
        if (d && "function" === typeof d.join) {
          for (var e = [], f = 0; f < d.length; ++f) {
            var g = Qc(d[f]);
            null != g && e.push(g);
          }
          d = 0 == e.length ? null : e.join(",");
        } else d = Qc(d);
        (e = Qc(c)) && null != d && b.push(e + "=" + d);
      }
    return b.join(";");
  }
  function V(a) {
    return "number" != typeof a && "string" != typeof a ? "" : T(a.toString());
  }
  function Sc(a, b) {
    if (
      b.google_read_gcl_cookie_opt_out ||
      b.google_remarketing_only ||
      (b.google_conversion_domain &&
        (!b.google_gcl_cookie_prefix ||
          !/^_ycl/.test(b.google_gcl_cookie_prefix)))
    )
      return "";
    var c = "",
      d = Tc(b),
      e = {};
    b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
    b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
    null != b.google_gcl_cookie_max_age_seconds &&
      (e.D = b.google_gcl_cookie_max_age_seconds);
    b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
    d && (e.prefix = d);
    if (Uc(b) && b.m) var f = void 0 === b.o;
    else
      I()
        ? jc.test(a.location.host)
          ? (f = !(mc.test(a.location.href) || kc.test(a.location.href)))
          : ((f = Math.max(fc("aw", d), gc(R() ? Q() : {}))),
            (f = Math.max(fc("gb", d), gc(R() ? Q("_gac_gb", !0) : {})) > f))
        : (f = !1);
    if (f) {
      if (void 0 !== b.o) return b.o;
      c = sc(a, d || void 0);
      f = b.google_conversion_label;
      var g = vc(f, e, b.m);
      c = U("gclgb", c) + (g ? U("mcov", g) : "");
      if (d) return (b.o = c);
      d = pc(a, f, e, b.m);
      a = d.B;
      d = d.C;
      c += (a ? U("gacgb", a) : "") + (d ? U("gacmcov", d) : "");
      return (b.o = c);
    }
    if (d) return (b = rc(a, d)), U("gclaw", b);
    (b = rc(a)) && (c = U("gclaw", b));
    b = oc(a, R() ? Q() : {}, kc);
    return c + (b ? U("gac", b) : "");
  }
  function Vc(a) {
    function b(d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    }
    a = a ? a.title : "";
    if (void 0 == a || "" == a) return "";
    a = encodeURIComponent(a);
    for (var c = 256; !b(a.substr(0, c)); ) c--;
    return "&tiba=" + a.substr(0, c);
  }
  function Wc(a, b, c, d, e, f) {
    var g = "https://",
      h = "landing" === d.google_conversion_type ? "/extclk" : "/";
    switch (e) {
      default:
        return "";
      case 2:
      case 3:
        var k = "googleads.g.doubleclick.net/";
        var m = "pagead/viewthroughconversion/";
        break;
      case 1:
        k = "www.google.com/";
        m = "pagead/1p-conversion/";
        break;
      case 0:
        k = d.google_conversion_domain || "www.googleadservices.com/";
        m = "pagead/conversion/";
        break;
      case 4:
        (k = "www.google.com/"), (m = "pagead/privacysandbox/conversion/");
    }
    Xa && d.google_transport_url && (k = d.google_transport_url);
    "/" !== k[k.length - 1] && (k += "/");
    if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
    g = [
      g,
      k,
      m,
      T(d.google_conversion_id),
      h,
      "?random=",
      T(d.google_conversion_time),
    ].join("");
    k = U("cv", d.google_conversion_js_version);
    m = U("fst", d.google_conversion_first_time);
    h = U("num", d.google_conversion_snippets);
    var n = U("fmt", d.google_conversion_format),
      r = d.google_remarketing_only ? U("userId", d.google_user_id) : "";
    var q = d.google_tag_for_child_directed_treatment;
    q = null == q || (0 !== q && 1 !== q) ? "" : U("tfcd", q);
    var y = d.google_tag_for_under_age_of_consent;
    y = null == y || (0 !== y && 1 !== y) ? "" : U("tfua", y);
    var ra = d.google_allow_ad_personalization_signals;
    ra = !1 === ra ? U("npa", 1) : !0 === ra ? U("npa", 0) : "";
    var sa = d.google_restricted_data_processing;
    sa = Za ? (!0 === sa ? U("rdp", 1) : !1 === sa ? U("rdp", 0) : "") : "";
    var dd = U("value", d.google_conversion_value),
      ed = U("currency_code", d.google_conversion_currency),
      fd = U("label", d.google_conversion_label),
      gd = U("oid", d.google_conversion_order_id),
      hd = U("bg", d.google_conversion_color);
    a: {
      var x = d.google_conversion_language;
      if (null != x) {
        x = x.toString();
        if (2 == x.length) {
          x = U("hl", x);
          break a;
        }
        if (5 == x.length) {
          x = U("hl", x.substring(0, 2)) + U("gl", x.substring(3, 5));
          break a;
        }
      }
      x = "";
    }
    var id = U("guid", "ON"),
      jd =
        !d.google_conversion_domain &&
        "GooglemKTybQhCsO" in A &&
        "function" == typeof A.GooglemKTybQhCsO
          ? U("resp", "GooglemKTybQhCsO")
          : "",
      kd = U("disvt", d.google_disable_viewthrough),
      ld = U("eid", db().join());
    var X = d.google_conversion_date;
    var u = [];
    if (a) {
      var D = a.screen;
      D &&
        (u.push(U("u_h", D.height)),
        u.push(U("u_w", D.width)),
        u.push(U("u_ah", D.availHeight)),
        u.push(U("u_aw", D.availWidth)),
        u.push(U("u_cd", D.colorDepth)));
      a.history && u.push(U("u_his", a.history.length));
    }
    X &&
      "function" == typeof X.getTimezoneOffset &&
      u.push(U("u_tz", -X.getTimezoneOffset()));
    b &&
      ("function" == typeof b.javaEnabled &&
        u.push(U("u_java", b.javaEnabled())),
      b.plugins && u.push(U("u_nplug", b.plugins.length)),
      b.mimeTypes && u.push(U("u_nmime", b.mimeTypes.length)));
    X = u.join("");
    u = U("gtm", d.google_gtm);
    b = b && b.sendBeacon ? U("sendb", "1") : "";
    D = Xc();
    var nd = U(
        "ig",
        /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0
      ),
      ta = Rc(d.google_custom_params);
    f = Rc(f);
    f = ta.concat(0 < ta.length && 0 < f.length ? ";" : "", f);
    f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
    ta = Sc(c, d);
    var Rb = d.google_conversion_page_url,
      od = d.google_conversion_referrer_url,
      ua = "";
    if (c) {
      if (a.top == a) var t = 0;
      else {
        var F = a.location.ancestorOrigins;
        if (F) t = F[F.length - 1] == a.location.origin ? 1 : 2;
        else {
          F = a.top;
          try {
            var z;
            if ((z = !!F && null != F.location.href))
              c: {
                try {
                  Ga(F.foo);
                  z = !0;
                  break c;
                } catch (pd) {}
                z = !1;
              }
            t = z;
          } catch (pd) {
            t = !1;
          }
          t = t ? 1 : 2;
        }
      }
      z = Rb ? Rb : 1 == t ? a.top.location.href : a.location.href;
      ua += U("frm", t);
      ua += U("url", Pc(z));
      ua += U("ref", Pc(od || c.referrer));
    }
    a = [
      k,
      m,
      h,
      n,
      r,
      q,
      y,
      ra,
      sa,
      dd,
      ed,
      fd,
      gd,
      hd,
      x,
      id,
      jd,
      kd,
      ld,
      X,
      u,
      b,
      D,
      nd,
      f,
      ta,
      ua,
      Vc(c),
      Yc(d.google_additional_params),
      Yc(
        d.google_remarketing_only ? {} : d.google_additional_conversion_params
      ),
      "&hn=" + T("www.googleadservices.com"),
      Zc(a),
    ].join("");
    c = cb();
    a += 0 < c.length ? "&debug_experiment_id=" + c : "";
    if (!d.google_remarketing_only && !d.google_conversion_domain) {
      c = [
        U("mid", d.google_conversion_merchant_id),
        U("fcntr", d.google_basket_feed_country),
        U("flng", d.google_basket_feed_language),
        U("dscnt", d.google_basket_discount),
        U("bttype", d.google_basket_transaction_type),
      ].join("");
      if (d)
        if ((t = d.google_conversion_items)) {
          z = [];
          k = 0;
          for (m = t.length; k < m; k++)
            (h = t[k]),
              (n = []),
              h &&
                (n.push(V(h.value)),
                n.push(V(h.quantity)),
                n.push(V(h.item_id)),
                n.push(V(h.start_date)),
                n.push(V(h.end_date)),
                z.push("(" + n.join("*") + ")"));
          t = 0 < z.length ? "&item=" + z.join("") : "";
        } else t = "";
      else t = "";
      c = [a, c, t].join("");
      a = 4e3 < c.length ? [a, U("item", "elngth")].join("") : c;
    }
    g += a;
    1 === e
      ? (g += [U("gcp", 1), U("sscte", 1), U("ct_cookie_present", 1)].join(""))
      : 3 == e && ((g += U("gcp", 1)), (g += U("ct_cookie_present", 1)));
    Ya && ((e = Kc()), void 0 !== e && (g += U("us_privacy", e || "error")));
    Uc(d) && (g = d.m ? g + U("gbcov", 1) : g + U("gbcov", 0));
    return g;
  }
  function $c(a) {
    if (!Jc) {
      var b = Ha("IFRAME");
      b.style.display = "none";
      b.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
      a.body.appendChild(b);
    }
  }
  function ad() {
    return new Image();
  }
  function bd(a, b, c, d, e, f) {
    var g = c.onload_callback;
    e = e && g && g.call ? g : function () {};
    d += U("async", "1");
    g = c.google_gtm_url_processor;
    "function" == typeof g && (d = g(d));
    var h = (g = c.opt_image_generator) && g.call;
    if (!(f = h || !f)) {
      if (c.google_conversion_domain) var k = !1;
      else
        try {
          k = Ic(a, b, d, e);
        } catch (m) {
          k = !1;
        }
      f = !k;
    }
    f && ((a = ad), h && (a = g), (a = a()), (a.src = d), (a.onload = e));
  }
  function cd(a, b) {
    G &&
      "376635471" == H(2) &&
      ("complete" === b.readyState
        ? $c(b)
        : a.addEventListener
        ? a.addEventListener("load", function () {
            $c(b);
          })
        : a.attachEvent("onload", function () {
            $c(b);
          }));
  }
  function md(a) {
    if (
      "landing" === a.google_conversion_type ||
      !a.google_conversion_id ||
      (a.google_remarketing_only && a.google_disable_viewthrough)
    )
      return !1;
    a.google_conversion_date = new Date();
    a.google_conversion_time = a.google_conversion_date.getTime();
    a.google_conversion_snippets =
      "number" === typeof a.google_conversion_snippets &&
      0 < a.google_conversion_snippets
        ? a.google_conversion_snippets + 1
        : 1;
    void 0 === a.google_conversion_first_time &&
      (a.google_conversion_first_time = a.google_conversion_time);
    a.google_conversion_js_version = "9";
    0 != a.google_conversion_format &&
      1 != a.google_conversion_format &&
      2 != a.google_conversion_format &&
      3 != a.google_conversion_format &&
      (a.google_conversion_format = 3);
    !1 !== a.google_enable_display_cookie_match &&
      (a.google_enable_display_cookie_match = !0);
    return !0;
  }
  function qd(a, b) {
    function c(f) {
      d[f] = b && null != b[f] ? b[f] : a[f];
    }
    for (var d = {}, e = 0; e < Nc.length; e++) c(Nc[e]);
    c("onload_callback");
    return d;
  }
  function rd(a) {
    for (var b = {}, c = 0; c < a.length; c++) {
      var d = a[c],
        e = void 0;
      d.hasOwnProperty("google_business_vertical")
        ? ((e = d.google_business_vertical),
          (b[e] = b[e] || { google_business_vertical: e }))
        : ((e = ""), Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
      e = b[e];
      for (
        var f = v(Object, "keys")
            .call(Object, d)
            .filter(function (k) {
              return Lc.hasOwnProperty(k);
            }),
          g = 0;
        g < f.length;
        g++
      ) {
        var h = f[g];
        h in e || (e[h] = []);
        e[h].push(d[h]);
      }
    }
    return v(Object, "values").call(Object, b);
  }
  function Xc() {
    var a = "";
    fb() &&
      (a = Cc()
        .map(function (b) {
          return b.join("-");
        })
        .join("_"));
    return U("li", a);
  }
  function Zc(a) {
    if (!$a || !a.__gsaExp || !a.__gsaExp.id) return "";
    a = a.__gsaExp.id;
    if ("function" != typeof a) return "";
    try {
      var b = Number(a());
      return isNaN(b) ? "" : U("gsaexp", b);
    } catch (c) {
      return "";
    }
  }
  function Yc(a) {
    if (!a) return "";
    var b = "",
      c;
    for (c in a) a.hasOwnProperty(c) && (b += U(c, a[c]));
    return b;
  }
  function Uc(a) {
    return I() ? ((a = a.google_gtm_experiments) && a.gbcov ? !0 : !1) : !1;
  }
  function Tc(a) {
    return a.google_gcl_cookie_prefix &&
      "_gcl" !== a.google_gcl_cookie_prefix &&
      Mc.test(a.google_gcl_cookie_prefix)
      ? a.google_gcl_cookie_prefix
      : "";
  }
  var sd = !1,
    td = (document.currentScript && document.currentScript.src) || "";
  function ud(a, b, c) {
    try {
      if (!sd && ((sd = !0), !c.google_gtm)) {
        var d = !1,
          e = a.location.search.split("?")[1];
        e && 0 <= pa(e.split("&"), "gtm_debug=x") && (d = !0);
        d ||
          0 !== b.referrer.indexOf("https://tagassistant.google.com/") ||
          (d = !0);
        !d && 0 <= pa(b.cookie.split("; "), "__TAG_ASSISTANT=x") && (d = !0);
        !d && a.__TAG_ASSISTANT_API && (d = !0);
        if (d) {
          if (!a["google.tagmanager.debugui2.queue"]) {
            a["google.tagmanager.debugui2.queue"] = [];
            var f = new la(
                ma,
                "https://www.googletagmanager.com/debug/bootstrap"
              ),
              g = Ba(
                f instanceof la && f.constructor === la && f.g === na
                  ? f.j
                  : "type_error:Const"
              ),
              h = b.createElement("script");
            Ca(h, g);
            var k = b.getElementsByTagName("script")[0];
            k && k.parentNode && k.parentNode.insertBefore(h, k);
          }
          a["google.tagmanager.debugui2.queue"].push({
            messageType: "LEGACY_CONTAINER_STARTING",
            data: {
              id: "AW-" + (c.google_conversion_id || ""),
              scriptSource: td,
            },
          });
        }
      }
    } catch (m) {}
  }
  var vd = !1;
  function wd(a, b) {
    a.onload_callback =
      a.onload_callback && "function" == typeof a.onload_callback.call
        ? Oc(b, a.onload_callback)
        : function () {};
  }
  function xd(a, b, c, d) {
    ud(a, c, d);
    fb() && (zc(2), d.google_gtm && Bc(S.i(), a));
    var e = !1;
    if (3 != d.google_conversion_format) return !1;
    try {
      if (md(d)) {
        d.google_remarketing_only &&
          d.google_enable_display_cookie_match &&
          !Jc &&
          G &&
          E(["376635470", "376635471"], Ta, 2);
        d.google_remarketing_only &&
          !d.google_conversion_domain &&
          G &&
          E(["759238990", "759238991"], Wa, 13);
        !d.google_remarketing_only ||
          d.google_conversion_domain ||
          (G && ("759248991" == H(14) || "759248990" == H(14))) ||
          (G && E(["759248990", "759248991"], Va, 14));
        !1 !== d.google_conversion_linker &&
          (G && E(["2505059650", "2505059651"], ab ? 1 : 0, 18),
          d.google_gtm || uc(d.google_gcl_cookie_prefix));
        if (
          1 == d.google_remarketing_only &&
          null != d.google_gtag_event_data &&
          null != d.google_gtag_event_data.items &&
          d.google_gtag_event_data.items.constructor === Array &&
          0 < d.google_gtag_event_data.items.length
        )
          yd(a, b, c, d);
        else {
          var f = !1;
          v("www.googleadservices.com", "endsWith").call(
            "www.googleadservices.com",
            "google.com"
          ) && (f = !0);
          var g = d.google_additional_params;
          g && g.dg && (f = "e" === g.dg);
          g = function () {
            var k = d.google_gtm_experiments;
            if (k && k.capi && !d.google_transport_url)
              a: {
                if (!vd) {
                  k = c;
                  var m = v("www.googleadservices.com", "endsWith").call(
                    "www.googleadservices.com",
                    "google.com"
                  )
                    ? ""
                    : "A7iusd6XVbb7SOF83vXQdziVdvBy4R7Bh2tuVErLbKXxemIjQH20g7jWaz48nG08Cd6zfylzuF+H+1s9S3JodAEAAACOeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d";
                  k = void 0 === k ? window.document : k;
                  if (m && k.head) {
                    var n = document.createElement("meta");
                    n.httpEquiv = "origin-trial";
                    n.content = m;
                    k.head.appendChild(n);
                    k = n;
                  } else k = null;
                  if (!k) {
                    k = !1;
                    break a;
                  }
                  k.httpEquiv = "origin-trial";
                }
                vd = !0;
                k =
                  (k = c.featurePolicy) && "function" === typeof k.features
                    ? 0 <= k.features().indexOf("conversion-measurement")
                    : !1;
              }
            else k = !1;
            k &&
              ((k = d.google_additional_conversion_params || {}),
              (k.capi = "1"),
              (d.google_additional_conversion_params = k),
              bd(a, c, d, Wc(a, b, c, d, 4), !1, !1));
          };
          var h = function (k, m) {
            m = void 0 === m ? !0 : m;
            bd(a, c, d, Wc(a, b, c, d, k), m, !0);
          };
          d.google_remarketing_only
            ? h(2)
            : f
            ? (wd(d, 2), g(), h(1), h(3))
            : (g(), h(0), Uc(d) && tc(c, Tc(d)) && ((d.m = !0), h(0, !1)));
        }
        d.google_remarketing_only &&
          d.google_enable_display_cookie_match &&
          cd(a, c);
        e = !0;
      }
    } catch (k) {}
    return e;
  }
  function yd(a, b, c, d) {
    var e = rd(d.google_gtag_event_data.items);
    wd(d, e.length);
    for (var f = 0; f < e.length; f++)
      bd(a, c, d, Wc(a, b, c, d, 2, e[f]), !0, !0),
        (d.google_conversion_time = d.google_conversion_time + 1);
  }
  G = new (function () {
    var a = [],
      b = 0,
      c;
    for (c in eb) a[b++] = eb[c];
    this.j = {};
    this.g = {};
    a = a || [];
    b = 0;
    for (c = a.length; b < c; ++b) this.g[a[b]] = "";
  })();
  E(["592230570", "592230571"], Ua, 16);
  fb() && (zc(1), Ac());
  function zd(a, b, c) {
    function d(m, n) {
      var r = new Image();
      r.onload = m;
      r.src = n;
    }
    function e() {
      --f;
      if (0 >= f) {
        var m = Ec(a, !1),
          n = m[b];
        n && (delete m[b], (m = n[0]) && m.call && m());
      }
    }
    var f = c.length + 1;
    if (2 == c.length) {
      var g = c[0],
        h = c[1];
      0 <= Ka(g, 0, "rmt_tld", g.search(La)) &&
        0 <= Ka(g, 0, "ipr", g.search(La)) &&
        !h.match(Ia)[6] &&
        ((h += Ja(g)), (c[1] = B(h, "rmt_tld", "1")));
    }
    for (g = 0; g < c.length; g++) {
      h = c[g];
      var k = Ma(h, "fmt");
      switch (parseInt(k, 10)) {
        case 1:
        case 2:
          (k = a.document.getElementById("goog_conv_iframe")) && !k.src
            ? ((k.onload = e), (k.src = h))
            : d(e, h);
          break;
        case 4:
          Ic(a, a.document, h, e);
          break;
        case 5:
          if (a.navigator && a.navigator.sendBeacon)
            if (a.navigator.sendBeacon(h, "")) {
              e();
              break;
            } else h = B(h, "sendb", 2);
          h = B(h, "fmt", 3);
        default:
          d(e, h);
      }
    }
    e();
  }
  var W = ["GooglemKTybQhCsO"],
    Y = A;
  W[0] in Y ||
    "undefined" == typeof Y.execScript ||
    Y.execScript("var " + W[0]);
  for (var Z; W.length && (Z = W.shift()); )
    W.length || void 0 === zd
      ? Y[Z] && Y[Z] !== Object.prototype[Z]
        ? (Y = Y[Z])
        : (Y = Y[Z] = {})
      : (Y[Z] = zd);
  window.google_trackConversion = function (a) {
    var b = window,
      c = navigator,
      d = document;
    a = qd(b, a);
    a.google_conversion_format = 3;
    var e = !!a.google_gtm;
    M.i().j(e);
    return xd(b, c, d, a);
  };
}.call(this));
