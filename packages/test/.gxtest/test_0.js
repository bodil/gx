#!/usr/bin/env -S gjs -m
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// ../gi/Gjs/Adw-1.js
import Adw from "gi://Adw?version=1";
var init_Adw_1 = __esm({
  "../gi/Gjs/Adw-1.js"() {
    "use strict";
  }
});

// ../gi/Gjs/GLib-2.0.js
import GLib from "gi://GLib?version=2.0";
var init_GLib_2_0 = __esm({
  "../gi/Gjs/GLib-2.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/GModule-2.0.js
import GModule from "gi://GModule?version=2.0";
var init_GModule_2_0 = __esm({
  "../gi/Gjs/GModule-2.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/GObject-2.0.js
import GObject from "gi://GObject?version=2.0";
var init_GObject_2_0 = __esm({
  "../gi/Gjs/GObject-2.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Gdk-4.0.js
import Gdk from "gi://Gdk?version=4.0";
var init_Gdk_4_0 = __esm({
  "../gi/Gjs/Gdk-4.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/GdkPixbuf-2.0.js
import GdkPixbuf from "gi://GdkPixbuf?version=2.0";
var init_GdkPixbuf_2_0 = __esm({
  "../gi/Gjs/GdkPixbuf-2.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Gio-2.0.js
import Gio from "gi://Gio?version=2.0";
var init_Gio_2_0 = __esm({
  "../gi/Gjs/Gio-2.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Graphene-1.0.js
import Graphene from "gi://Graphene?version=1.0";
var init_Graphene_1_0 = __esm({
  "../gi/Gjs/Graphene-1.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Gsk-4.0.js
import Gsk from "gi://Gsk?version=4.0";
var init_Gsk_4_0 = __esm({
  "../gi/Gjs/Gsk-4.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Gst-1.0.js
import Gst from "gi://Gst?version=1.0";
var init_Gst_1_0 = __esm({
  "../gi/Gjs/Gst-1.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Gtk-4.0.js
import Gtk from "gi://Gtk?version=4.0";
var init_Gtk_4_0 = __esm({
  "../gi/Gjs/Gtk-4.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/HarfBuzz-0.0.js
import HarfBuzz from "gi://HarfBuzz?version=0.0";
var init_HarfBuzz_0_0 = __esm({
  "../gi/Gjs/HarfBuzz-0.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Pango-1.0.js
import Pango from "gi://Pango?version=1.0";
var init_Pango_1_0 = __esm({
  "../gi/Gjs/Pango-1.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/PangoCairo-1.0.js
import PangoCairo from "gi://PangoCairo?version=1.0";
var init_PangoCairo_1_0 = __esm({
  "../gi/Gjs/PangoCairo-1.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Soup-3.0.js
import Soup from "gi://Soup?version=3.0";
var init_Soup_3_0 = __esm({
  "../gi/Gjs/Soup-3.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Vte-3.91.js
import Vte from "gi://Vte?version=3.91";
var init_Vte_3_91 = __esm({
  "../gi/Gjs/Vte-3.91.js"() {
    "use strict";
  }
});

// ../gi/Gjs/cairo-1.0.js
import cairo from "gi://cairo?version=1.0";
var init_cairo_1_0 = __esm({
  "../gi/Gjs/cairo-1.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/freetype2-2.0.js
import freetype2 from "gi://freetype2?version=2.0";
var init_freetype2_2_0 = __esm({
  "../gi/Gjs/freetype2-2.0.js"() {
    "use strict";
  }
});

// ../gi/Gjs/Gjs.js
var byteArray, Lang, Format, Mainloop, gettext, System, Signals, Package;
var init_Gjs = __esm({
  "../gi/Gjs/Gjs.js"() {
    "use strict";
    byteArray = imports.byteArray;
    Lang = imports.lang;
    Format = imports.format;
    Mainloop = imports.mainloop;
    gettext = imports.gettext;
    System = imports.system;
    Signals = imports.signals;
    Package = imports.package;
  }
});

// ../gi/Gjs/index.js
var _imports;
var init_Gjs2 = __esm({
  "../gi/Gjs/index.js"() {
    "use strict";
    _imports = imports || {};
  }
});

// ../gi/index.ts
var init_gi = __esm({
  "../gi/index.ts"() {
    init_Adw_1();
    init_GLib_2_0();
    init_GModule_2_0();
    init_GObject_2_0();
    init_Gdk_4_0();
    init_GdkPixbuf_2_0();
    init_Gio_2_0();
    init_Graphene_1_0();
    init_Gsk_4_0();
    init_Gst_1_0();
    init_Gtk_4_0();
    init_HarfBuzz_0_0();
    init_Pango_1_0();
    init_PangoCairo_1_0();
    init_Soup_3_0();
    init_Vte_3_91();
    init_cairo_1_0();
    init_freetype2_2_0();
    init_Gjs();
    init_Gjs2();
  }
});

// ../../node_modules/.pnpm/is-callable@1.2.4/node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "../../node_modules/.pnpm/is-callable@1.2.4/node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var documentDotAll = typeof document === "object" && typeof document.all === "undefined" && document.all !== void 0 ? document.all : {};
    module.exports = reflectApply ? function isCallable2(value) {
      if (value === documentDotAll) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (typeof value === "function" && !value.prototype) {
        return true;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value);
    } : function isCallable2(value) {
      if (value === documentDotAll) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (typeof value === "function" && !value.prototype) {
        return true;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      return strClass === fnClass || strClass === genClass;
    };
  }
});

// ../../node_modules/.pnpm/@base2+pretty-print-object@1.0.2/node_modules/@base2/pretty-print-object/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.pnpm/@base2+pretty-print-object@1.0.2/node_modules/@base2/pretty-print-object/dist/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prettyPrint = void 0;
    var seen = [];
    function isObj(value) {
      var type = typeof value;
      return value !== null && (type === "object" || type === "function");
    }
    function isRegexp(value) {
      return Object.prototype.toString.call(value) === "[object RegExp]";
    }
    function getOwnEnumPropSymbols(object2) {
      return Object.getOwnPropertySymbols(object2).filter(function(keySymbol) {
        return Object.prototype.propertyIsEnumerable.call(object2, keySymbol);
      });
    }
    function prettyPrint2(input, options2, pad) {
      if (pad === void 0) {
        pad = "";
      }
      var defaultOptions = {
        indent: "	",
        singleQuotes: true
      };
      var combinedOptions = __assign(__assign({}, defaultOptions), options2);
      var tokens;
      if (combinedOptions.inlineCharacterLimit === void 0) {
        tokens = {
          newLine: "\n",
          newLineOrSpace: "\n",
          pad,
          indent: pad + combinedOptions.indent
        };
      } else {
        tokens = {
          newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
          newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
          pad: "@@__PRETTY_PRINT_PAD__@@",
          indent: "@@__PRETTY_PRINT_INDENT__@@"
        };
      }
      var expandWhiteSpace = function(string) {
        if (combinedOptions.inlineCharacterLimit === void 0) {
          return string;
        }
        var oneLined = string.replace(new RegExp(tokens.newLine, "g"), "").replace(new RegExp(tokens.newLineOrSpace, "g"), " ").replace(new RegExp(tokens.pad + "|" + tokens.indent, "g"), "");
        if (oneLined.length <= combinedOptions.inlineCharacterLimit) {
          return oneLined;
        }
        return string.replace(new RegExp(tokens.newLine + "|" + tokens.newLineOrSpace, "g"), "\n").replace(new RegExp(tokens.pad, "g"), pad).replace(new RegExp(tokens.indent, "g"), pad + combinedOptions.indent);
      };
      if (seen.indexOf(input) !== -1) {
        return '"[Circular]"';
      }
      if (input === null || input === void 0 || typeof input === "number" || typeof input === "boolean" || typeof input === "function" || typeof input === "symbol" || isRegexp(input)) {
        return String(input);
      }
      if (input instanceof Date) {
        return "new Date('".concat(input.toISOString(), "')");
      }
      if (Array.isArray(input)) {
        if (input.length === 0) {
          return "[]";
        }
        seen.push(input);
        var ret = "[" + tokens.newLine + input.map(function(el, i) {
          var eol = input.length - 1 === i ? tokens.newLine : "," + tokens.newLineOrSpace;
          var value = prettyPrint2(el, combinedOptions, pad + combinedOptions.indent);
          if (combinedOptions.transform) {
            value = combinedOptions.transform(input, i, value);
          }
          return tokens.indent + value + eol;
        }).join("") + tokens.pad + "]";
        seen.pop();
        return expandWhiteSpace(ret);
      }
      if (isObj(input)) {
        var objKeys_1 = __spreadArray(__spreadArray([], Object.keys(input), true), getOwnEnumPropSymbols(input), true);
        if (combinedOptions.filter) {
          objKeys_1 = objKeys_1.filter(function(el) {
            return combinedOptions.filter && combinedOptions.filter(input, el);
          });
        }
        if (objKeys_1.length === 0) {
          return "{}";
        }
        seen.push(input);
        var ret = "{" + tokens.newLine + objKeys_1.map(function(el, i) {
          var eol = objKeys_1.length - 1 === i ? tokens.newLine : "," + tokens.newLineOrSpace;
          var isSymbol = typeof el === "symbol";
          var isClassic = !isSymbol && /^[a-z$_][a-z$_0-9]*$/i.test(el.toString());
          var key = isSymbol || isClassic ? el : prettyPrint2(el, combinedOptions);
          var value = prettyPrint2(input[el], combinedOptions, pad + combinedOptions.indent);
          if (combinedOptions.transform) {
            value = combinedOptions.transform(input, el, value);
          }
          return tokens.indent + String(key) + ": " + value + eol;
        }).join("") + tokens.pad + "}";
        seen.pop();
        return expandWhiteSpace(ret);
      }
      input = String(input).replace(/[\r\n]/g, function(x) {
        return x === "\n" ? "\\n" : "\\r";
      });
      if (!combinedOptions.singleQuotes) {
        input = input.replace(/"/g, '\\"');
        return '"'.concat(input, '"');
      }
      input = input.replace(/\\?'/g, "\\'");
      return "'".concat(input, "'");
    }
    exports.prettyPrint = prettyPrint2;
  }
});

// ../core/fs.ts
function cwd() {
  return Gio.File.new_for_path(GLib.get_current_dir());
}
function relativePath(source, dest) {
  let level = 0;
  while (true) {
    const path = source.get_relative_path(dest);
    if (path !== null) {
      return "../".repeat(level) + path;
    }
    const parent = source.get_parent();
    if (parent === null) {
      return dest.get_parse_name();
    }
    source = parent;
    level += 1;
  }
}
function cwdiseFilename(fileOrUri) {
  const file = typeof fileOrUri === "string" ? Gio.File.new_for_uri(fileOrUri) : fileOrUri;
  if (file.get_uri_scheme() !== "file") {
    let uri = file.get_uri();
    uri = replaceStart("resource:///org/gnome/gjs/", "<gjs>/", uri);
    uri = replaceStart("resource:///org/gnome/", "<gnome>/", uri);
    return uri;
  }
  return relativePath(cwd(), file);
}
function replaceStart(pattern, replacement, s) {
  if (s.startsWith(pattern)) {
    return replacement + s.slice(pattern.length);
  }
  return s;
}
var init_fs = __esm({
  "../core/fs.ts"() {
    "use strict";
    init_gi();
  }
});

// ../../node_modules/.pnpm/ansi-regex@5.0.1/node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "../../node_modules/.pnpm/ansi-regex@5.0.1/node_modules/ansi-regex/index.js"(exports, module) {
    "use strict";
    module.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// ../../node_modules/.pnpm/strip-ansi@6.0.1/node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "../../node_modules/.pnpm/strip-ansi@6.0.1/node_modules/strip-ansi/index.js"(exports, module) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    module.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
  }
});

// ../../node_modules/.pnpm/is-fullwidth-code-point@3.0.0/node_modules/is-fullwidth-code-point/index.js
var require_is_fullwidth_code_point = __commonJS({
  "../../node_modules/.pnpm/is-fullwidth-code-point@3.0.0/node_modules/is-fullwidth-code-point/index.js"(exports, module) {
    "use strict";
    var isFullwidthCodePoint = (codePoint) => {
      if (Number.isNaN(codePoint)) {
        return false;
      }
      if (codePoint >= 4352 && (codePoint <= 4447 || codePoint === 9001 || codePoint === 9002 || 11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || 12880 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65131 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 262141)) {
        return true;
      }
      return false;
    };
    module.exports = isFullwidthCodePoint;
    module.exports.default = isFullwidthCodePoint;
  }
});

// ../../node_modules/.pnpm/emoji-regex@8.0.0/node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "../../node_modules/.pnpm/emoji-regex@8.0.0/node_modules/emoji-regex/index.js"(exports, module) {
    "use strict";
    module.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
});

// ../../node_modules/.pnpm/string-width@4.2.3/node_modules/string-width/index.js
var require_string_width = __commonJS({
  "../../node_modules/.pnpm/string-width@4.2.3/node_modules/string-width/index.js"(exports, module) {
    "use strict";
    var stripAnsi = require_strip_ansi();
    var isFullwidthCodePoint = require_is_fullwidth_code_point();
    var emojiRegex = require_emoji_regex();
    var stringWidth = (string) => {
      if (typeof string !== "string" || string.length === 0) {
        return 0;
      }
      string = stripAnsi(string);
      if (string.length === 0) {
        return 0;
      }
      string = string.replace(emojiRegex(), "  ");
      let width = 0;
      for (let i = 0; i < string.length; i++) {
        const code = string.codePointAt(i);
        if (code <= 31 || code >= 127 && code <= 159) {
          continue;
        }
        if (code >= 768 && code <= 879) {
          continue;
        }
        if (code > 65535) {
          i++;
        }
        width += isFullwidthCodePoint(code) ? 2 : 1;
      }
      return width;
    };
    module.exports = stringWidth;
    module.exports.default = stringWidth;
  }
});

// ../../node_modules/.pnpm/astral-regex@2.0.0/node_modules/astral-regex/index.js
var require_astral_regex = __commonJS({
  "../../node_modules/.pnpm/astral-regex@2.0.0/node_modules/astral-regex/index.js"(exports, module) {
    "use strict";
    var regex = "[\uD800-\uDBFF][\uDC00-\uDFFF]";
    var astralRegex = (options2) => options2 && options2.exact ? new RegExp(`^${regex}$`) : new RegExp(regex, "g");
    module.exports = astralRegex;
  }
});

// ../../node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "../../node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(exports, module) {
    "use strict";
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// ../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"(exports, module) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c2) {
        return (v - c2) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c2 = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c2 * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c2 = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c2 * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c2 = Math.sqrt(a * a + b * b);
      return [l, c2, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c2 = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c2 * Math.cos(hr);
      const b = c2 * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c2 = (args - 232) * 10 + 8;
        return [c2, c2, c2];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c2 = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c2 < 1) {
        f = (l - 0.5 * c2) / (1 - c2);
      }
      return [hsl[0], c2 * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c2 = s * v;
      let f = 0;
      if (c2 < 1) {
        f = (v - c2) / (1 - c2);
      }
      return [hsv[0], c2 * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c2 = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c2 === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c2) * g;
      return [
        (c2 * pure[0] + mg) * 255,
        (c2 * pure[1] + mg) * 255,
        (c2 * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c2 = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c2 + g * (1 - c2);
      let f = 0;
      if (v > 0) {
        f = c2 / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c2 = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c2) + 0.5 * c2;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c2 / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c2 / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c2 = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c2 + g * (1 - c2);
      return [hcg[0], (v - c2) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c2 = v - w;
      let g = 0;
      if (c2 < 1) {
        g = (v - c2) / (1 - c2);
      }
      return [hwb[0], c2 * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// ../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js
var require_route = __commonJS({
  "../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"(exports, module) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// ../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"(exports, module) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert;
  }
});

// ../../node_modules/.pnpm/ansi-styles@4.3.0/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "../../node_modules/.pnpm/ansi-styles@4.3.0/node_modules/ansi-styles/index.js"(exports, module) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object2, property, get) => {
      Object.defineProperty(object2, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object2, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles2 = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles2[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles2[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles2;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles2 = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles2.color.gray = styles2.color.blackBright;
      styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
      styles2.color.grey = styles2.color.blackBright;
      styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles2)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles2[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles2[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles2, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles2, "codes", {
        value: codes,
        enumerable: false
      });
      styles2.color.close = "\x1B[39m";
      styles2.bgColor.close = "\x1B[49m";
      setLazyProperty(styles2.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles2.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles2.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles2.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles2.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles2.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles2;
    }
    Object.defineProperty(module, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// ../../node_modules/.pnpm/slice-ansi@4.0.0/node_modules/slice-ansi/index.js
var require_slice_ansi = __commonJS({
  "../../node_modules/.pnpm/slice-ansi@4.0.0/node_modules/slice-ansi/index.js"(exports, module) {
    "use strict";
    var isFullwidthCodePoint = require_is_fullwidth_code_point();
    var astralRegex = require_astral_regex();
    var ansiStyles = require_ansi_styles();
    var ESCAPES = [
      "\x1B",
      "\x9B"
    ];
    var wrapAnsi = (code) => `${ESCAPES[0]}[${code}m`;
    var checkAnsi = (ansiCodes, isEscapes, endAnsiCode) => {
      let output = [];
      ansiCodes = [...ansiCodes];
      for (let ansiCode of ansiCodes) {
        const ansiCodeOrigin = ansiCode;
        if (ansiCode.includes(";")) {
          ansiCode = ansiCode.split(";")[0][0] + "0";
        }
        const item = ansiStyles.codes.get(Number.parseInt(ansiCode, 10));
        if (item) {
          const indexEscape = ansiCodes.indexOf(item.toString());
          if (indexEscape === -1) {
            output.push(wrapAnsi(isEscapes ? item : ansiCodeOrigin));
          } else {
            ansiCodes.splice(indexEscape, 1);
          }
        } else if (isEscapes) {
          output.push(wrapAnsi(0));
          break;
        } else {
          output.push(wrapAnsi(ansiCodeOrigin));
        }
      }
      if (isEscapes) {
        output = output.filter((element, index) => output.indexOf(element) === index);
        if (endAnsiCode !== void 0) {
          const fistEscapeCode = wrapAnsi(ansiStyles.codes.get(Number.parseInt(endAnsiCode, 10)));
          output = output.reduce((current, next) => next === fistEscapeCode ? [next, ...current] : [...current, next], []);
        }
      }
      return output.join("");
    };
    module.exports = (string, begin, end) => {
      const characters = [...string];
      const ansiCodes = [];
      let stringEnd = typeof end === "number" ? end : characters.length;
      let isInsideEscape = false;
      let ansiCode;
      let visible = 0;
      let output = "";
      for (const [index, character] of characters.entries()) {
        let leftEscape = false;
        if (ESCAPES.includes(character)) {
          const code = /\d[^m]*/.exec(string.slice(index, index + 18));
          ansiCode = code && code.length > 0 ? code[0] : void 0;
          if (visible < stringEnd) {
            isInsideEscape = true;
            if (ansiCode !== void 0) {
              ansiCodes.push(ansiCode);
            }
          }
        } else if (isInsideEscape && character === "m") {
          isInsideEscape = false;
          leftEscape = true;
        }
        if (!isInsideEscape && !leftEscape) {
          visible++;
        }
        if (!astralRegex({ exact: true }).test(character) && isFullwidthCodePoint(character.codePointAt())) {
          visible++;
          if (typeof end !== "number") {
            stringEnd++;
          }
        }
        if (visible > begin && visible <= stringEnd) {
          output += character;
        } else if (visible === begin && !isInsideEscape && ansiCode !== void 0) {
          output = checkAnsi(ansiCodes);
        } else if (visible >= stringEnd) {
          output += checkAnsi(ansiCodes, true, ansiCode);
          break;
        }
      }
      return output;
    };
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/getBorderCharacters.js
var require_getBorderCharacters = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/getBorderCharacters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBorderCharacters = void 0;
    var getBorderCharacters2 = (name) => {
      if (name === "honeywell") {
        return {
          topBody: "\u2550",
          topJoin: "\u2564",
          topLeft: "\u2554",
          topRight: "\u2557",
          bottomBody: "\u2550",
          bottomJoin: "\u2567",
          bottomLeft: "\u255A",
          bottomRight: "\u255D",
          bodyLeft: "\u2551",
          bodyRight: "\u2551",
          bodyJoin: "\u2502",
          headerJoin: "\u252C",
          joinBody: "\u2500",
          joinLeft: "\u255F",
          joinRight: "\u2562",
          joinJoin: "\u253C",
          joinMiddleDown: "\u252C",
          joinMiddleUp: "\u2534",
          joinMiddleLeft: "\u2524",
          joinMiddleRight: "\u251C"
        };
      }
      if (name === "norc") {
        return {
          topBody: "\u2500",
          topJoin: "\u252C",
          topLeft: "\u250C",
          topRight: "\u2510",
          bottomBody: "\u2500",
          bottomJoin: "\u2534",
          bottomLeft: "\u2514",
          bottomRight: "\u2518",
          bodyLeft: "\u2502",
          bodyRight: "\u2502",
          bodyJoin: "\u2502",
          headerJoin: "\u252C",
          joinBody: "\u2500",
          joinLeft: "\u251C",
          joinRight: "\u2524",
          joinJoin: "\u253C",
          joinMiddleDown: "\u252C",
          joinMiddleUp: "\u2534",
          joinMiddleLeft: "\u2524",
          joinMiddleRight: "\u251C"
        };
      }
      if (name === "ramac") {
        return {
          topBody: "-",
          topJoin: "+",
          topLeft: "+",
          topRight: "+",
          bottomBody: "-",
          bottomJoin: "+",
          bottomLeft: "+",
          bottomRight: "+",
          bodyLeft: "|",
          bodyRight: "|",
          bodyJoin: "|",
          headerJoin: "+",
          joinBody: "-",
          joinLeft: "|",
          joinRight: "|",
          joinJoin: "|",
          joinMiddleDown: "+",
          joinMiddleUp: "+",
          joinMiddleLeft: "+",
          joinMiddleRight: "+"
        };
      }
      if (name === "void") {
        return {
          topBody: "",
          topJoin: "",
          topLeft: "",
          topRight: "",
          bottomBody: "",
          bottomJoin: "",
          bottomLeft: "",
          bottomRight: "",
          bodyLeft: "",
          bodyRight: "",
          bodyJoin: "",
          headerJoin: "",
          joinBody: "",
          joinLeft: "",
          joinRight: "",
          joinJoin: "",
          joinMiddleDown: "",
          joinMiddleUp: "",
          joinMiddleLeft: "",
          joinMiddleRight: ""
        };
      }
      throw new Error('Unknown border template "' + name + '".');
    };
    exports.getBorderCharacters = getBorderCharacters2;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/utils.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/utils.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isCellInRange = exports.areCellEqual = exports.calculateRangeCoordinate = exports.findOriginalRowIndex = exports.flatten = exports.extractTruncates = exports.sumArray = exports.sequence = exports.distributeUnevenly = exports.countSpaceSequence = exports.groupBySizes = exports.makeBorderConfig = exports.splitAnsi = exports.normalizeString = void 0;
    var slice_ansi_1 = __importDefault(require_slice_ansi());
    var string_width_1 = __importDefault(require_string_width());
    var strip_ansi_1 = __importDefault(require_strip_ansi());
    var getBorderCharacters_1 = require_getBorderCharacters();
    var normalizeString = (input) => {
      return input.replace(/\r\n/g, "\n");
    };
    exports.normalizeString = normalizeString;
    var splitAnsi = (input) => {
      const lengths = (0, strip_ansi_1.default)(input).split("\n").map(string_width_1.default);
      const result = [];
      let startIndex = 0;
      lengths.forEach((length) => {
        result.push(length === 0 ? "" : (0, slice_ansi_1.default)(input, startIndex, startIndex + length));
        startIndex += length + 1;
      });
      return result;
    };
    exports.splitAnsi = splitAnsi;
    var makeBorderConfig = (border) => {
      return {
        ...(0, getBorderCharacters_1.getBorderCharacters)("honeywell"),
        ...border
      };
    };
    exports.makeBorderConfig = makeBorderConfig;
    var groupBySizes = (array, sizes) => {
      let startIndex = 0;
      return sizes.map((size) => {
        const group = array.slice(startIndex, startIndex + size);
        startIndex += size;
        return group;
      });
    };
    exports.groupBySizes = groupBySizes;
    var countSpaceSequence = (input) => {
      var _a2, _b;
      return (_b = (_a2 = input.match(/\s+/g)) === null || _a2 === void 0 ? void 0 : _a2.length) !== null && _b !== void 0 ? _b : 0;
    };
    exports.countSpaceSequence = countSpaceSequence;
    var distributeUnevenly = (sum, length) => {
      const result = Array.from({ length }).fill(Math.floor(sum / length));
      return result.map((element, index) => {
        return element + (index < sum % length ? 1 : 0);
      });
    };
    exports.distributeUnevenly = distributeUnevenly;
    var sequence = (start, end) => {
      return Array.from({ length: end - start + 1 }, (_, index) => {
        return index + start;
      });
    };
    exports.sequence = sequence;
    var sumArray = (array) => {
      return array.reduce((accumulator, element) => {
        return accumulator + element;
      }, 0);
    };
    exports.sumArray = sumArray;
    var extractTruncates = (config2) => {
      return config2.columns.map(({ truncate: truncate2 }) => {
        return truncate2;
      });
    };
    exports.extractTruncates = extractTruncates;
    var flatten = (array) => {
      return [].concat(...array);
    };
    exports.flatten = flatten;
    var findOriginalRowIndex = (mappedRowHeights, mappedRowIndex) => {
      const rowIndexMapping = (0, exports.flatten)(mappedRowHeights.map((height, index) => {
        return Array.from({ length: height }, () => {
          return index;
        });
      }));
      return rowIndexMapping[mappedRowIndex];
    };
    exports.findOriginalRowIndex = findOriginalRowIndex;
    var calculateRangeCoordinate = (spanningCellConfig) => {
      const { row, col, colSpan = 1, rowSpan = 1 } = spanningCellConfig;
      return {
        bottomRight: {
          col: col + colSpan - 1,
          row: row + rowSpan - 1
        },
        topLeft: {
          col,
          row
        }
      };
    };
    exports.calculateRangeCoordinate = calculateRangeCoordinate;
    var areCellEqual = (cell1, cell2) => {
      return cell1.row === cell2.row && cell1.col === cell2.col;
    };
    exports.areCellEqual = areCellEqual;
    var isCellInRange = (cell2, { topLeft, bottomRight }) => {
      return topLeft.row <= cell2.row && cell2.row <= bottomRight.row && topLeft.col <= cell2.col && cell2.col <= bottomRight.col;
    };
    exports.isCellInRange = isCellInRange;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/alignString.js
var require_alignString = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/alignString.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.alignString = void 0;
    var string_width_1 = __importDefault(require_string_width());
    var utils_1 = require_utils();
    var alignLeft = (subject, width) => {
      return subject + " ".repeat(width);
    };
    var alignRight = (subject, width) => {
      return " ".repeat(width) + subject;
    };
    var alignCenter = (subject, width) => {
      return " ".repeat(Math.floor(width / 2)) + subject + " ".repeat(Math.ceil(width / 2));
    };
    var alignJustify = (subject, width) => {
      const spaceSequenceCount = (0, utils_1.countSpaceSequence)(subject);
      if (spaceSequenceCount === 0) {
        return alignLeft(subject, width);
      }
      const addingSpaces = (0, utils_1.distributeUnevenly)(width, spaceSequenceCount);
      if (Math.max(...addingSpaces) > 3) {
        return alignLeft(subject, width);
      }
      let spaceSequenceIndex = 0;
      return subject.replace(/\s+/g, (groupSpace) => {
        return groupSpace + " ".repeat(addingSpaces[spaceSequenceIndex++]);
      });
    };
    var alignString = (subject, containerWidth, alignment) => {
      const subjectWidth = (0, string_width_1.default)(subject);
      if (subjectWidth === containerWidth) {
        return subject;
      }
      if (subjectWidth > containerWidth) {
        throw new Error("Subject parameter value width cannot be greater than the container width.");
      }
      if (subjectWidth === 0) {
        return " ".repeat(containerWidth);
      }
      const availableWidth = containerWidth - subjectWidth;
      if (alignment === "left") {
        return alignLeft(subject, availableWidth);
      }
      if (alignment === "right") {
        return alignRight(subject, availableWidth);
      }
      if (alignment === "justify") {
        return alignJustify(subject, availableWidth);
      }
      return alignCenter(subject, availableWidth);
    };
    exports.alignString = alignString;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/alignTableData.js
var require_alignTableData = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/alignTableData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.alignTableData = void 0;
    var alignString_1 = require_alignString();
    var alignTableData = (rows, config2) => {
      return rows.map((row, rowIndex) => {
        return row.map((cell2, cellIndex) => {
          var _a2;
          const { width, alignment } = config2.columns[cellIndex];
          const containingRange = (_a2 = config2.spanningCellManager) === null || _a2 === void 0 ? void 0 : _a2.getContainingRange({
            col: cellIndex,
            row: rowIndex
          }, { mapped: true });
          if (containingRange) {
            return cell2;
          }
          return (0, alignString_1.alignString)(cell2, width, alignment);
        });
      });
    };
    exports.alignTableData = alignTableData;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/wrapString.js
var require_wrapString = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/wrapString.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.wrapString = void 0;
    var slice_ansi_1 = __importDefault(require_slice_ansi());
    var string_width_1 = __importDefault(require_string_width());
    var wrapString = (subject, size) => {
      let subjectSlice = subject;
      const chunks = [];
      do {
        chunks.push((0, slice_ansi_1.default)(subjectSlice, 0, size));
        subjectSlice = (0, slice_ansi_1.default)(subjectSlice, size).trim();
      } while ((0, string_width_1.default)(subjectSlice));
      return chunks;
    };
    exports.wrapString = wrapString;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/wrapWord.js
var require_wrapWord = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/wrapWord.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.wrapWord = void 0;
    var slice_ansi_1 = __importDefault(require_slice_ansi());
    var strip_ansi_1 = __importDefault(require_strip_ansi());
    var calculateStringLengths = (input, size) => {
      let subject = (0, strip_ansi_1.default)(input);
      const chunks = [];
      const re = new RegExp("(^.{1," + String(Math.max(size, 1)) + "}(\\s+|$))|(^.{1," + String(Math.max(size - 1, 1)) + "}(\\\\|/|_|\\.|,|;|-))");
      do {
        let chunk;
        const match = re.exec(subject);
        if (match) {
          chunk = match[0];
          subject = subject.slice(chunk.length);
          const trimmedLength = chunk.trim().length;
          const offset = chunk.length - trimmedLength;
          chunks.push([trimmedLength, offset]);
        } else {
          chunk = subject.slice(0, size);
          subject = subject.slice(size);
          chunks.push([chunk.length, 0]);
        }
      } while (subject.length);
      return chunks;
    };
    var wrapWord = (input, size) => {
      const result = [];
      let startIndex = 0;
      calculateStringLengths(input, size).forEach(([length, offset]) => {
        result.push((0, slice_ansi_1.default)(input, startIndex, startIndex + length));
        startIndex += length + offset;
      });
      return result;
    };
    exports.wrapWord = wrapWord;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/wrapCell.js
var require_wrapCell = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/wrapCell.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.wrapCell = void 0;
    var utils_1 = require_utils();
    var wrapString_1 = require_wrapString();
    var wrapWord_1 = require_wrapWord();
    var wrapCell = (cellValue, cellWidth, useWrapWord) => {
      const cellLines = (0, utils_1.splitAnsi)(cellValue);
      for (let lineNr = 0; lineNr < cellLines.length; ) {
        let lineChunks;
        if (useWrapWord) {
          lineChunks = (0, wrapWord_1.wrapWord)(cellLines[lineNr], cellWidth);
        } else {
          lineChunks = (0, wrapString_1.wrapString)(cellLines[lineNr], cellWidth);
        }
        cellLines.splice(lineNr, 1, ...lineChunks);
        lineNr += lineChunks.length;
      }
      return cellLines;
    };
    exports.wrapCell = wrapCell;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateCellHeight.js
var require_calculateCellHeight = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateCellHeight.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateCellHeight = void 0;
    var wrapCell_1 = require_wrapCell();
    var calculateCellHeight = (value, columnWidth, useWrapWord = false) => {
      return (0, wrapCell_1.wrapCell)(value, columnWidth, useWrapWord).length;
    };
    exports.calculateCellHeight = calculateCellHeight;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateRowHeights.js
var require_calculateRowHeights = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateRowHeights.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateRowHeights = void 0;
    var calculateCellHeight_1 = require_calculateCellHeight();
    var utils_1 = require_utils();
    var calculateRowHeights = (rows, config2) => {
      const rowHeights = [];
      for (const [rowIndex, row] of rows.entries()) {
        let rowHeight = 1;
        row.forEach((cell2, cellIndex) => {
          var _a2;
          const containingRange = (_a2 = config2.spanningCellManager) === null || _a2 === void 0 ? void 0 : _a2.getContainingRange({
            col: cellIndex,
            row: rowIndex
          });
          if (!containingRange) {
            const cellHeight = (0, calculateCellHeight_1.calculateCellHeight)(cell2, config2.columns[cellIndex].width, config2.columns[cellIndex].wrapWord);
            rowHeight = Math.max(rowHeight, cellHeight);
            return;
          }
          const { topLeft, bottomRight, height } = containingRange;
          if (rowIndex === bottomRight.row) {
            const totalOccupiedSpanningCellHeight = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row));
            const totalHorizontalBorderHeight = bottomRight.row - topLeft.row;
            const totalHiddenHorizontalBorderHeight = (0, utils_1.sequence)(topLeft.row + 1, bottomRight.row).filter((horizontalBorderIndex) => {
              var _a3;
              return !((_a3 = config2.drawHorizontalLine) === null || _a3 === void 0 ? void 0 : _a3.call(config2, horizontalBorderIndex, rows.length));
            }).length;
            const cellHeight = height - totalOccupiedSpanningCellHeight - totalHorizontalBorderHeight + totalHiddenHorizontalBorderHeight;
            rowHeight = Math.max(rowHeight, cellHeight);
          }
        });
        rowHeights.push(rowHeight);
      }
      return rowHeights;
    };
    exports.calculateRowHeights = calculateRowHeights;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/drawContent.js
var require_drawContent = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/drawContent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.drawContent = void 0;
    var drawContent = (parameters) => {
      const { contents, separatorGetter, drawSeparator, spanningCellManager, rowIndex, elementType } = parameters;
      const contentSize = contents.length;
      const result = [];
      if (drawSeparator(0, contentSize)) {
        result.push(separatorGetter(0, contentSize));
      }
      contents.forEach((content, contentIndex) => {
        if (!elementType || elementType === "border" || elementType === "row") {
          result.push(content);
        }
        if (elementType === "cell" && rowIndex === void 0) {
          result.push(content);
        }
        if (elementType === "cell" && rowIndex !== void 0) {
          const containingRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange({
            col: contentIndex,
            row: rowIndex
          });
          if (!containingRange || contentIndex === containingRange.topLeft.col) {
            result.push(content);
          }
        }
        if (contentIndex + 1 < contentSize && drawSeparator(contentIndex + 1, contentSize)) {
          const separator = separatorGetter(contentIndex + 1, contentSize);
          if (elementType === "cell" && rowIndex !== void 0) {
            const currentCell = {
              col: contentIndex + 1,
              row: rowIndex
            };
            const containingRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange(currentCell);
            if (!containingRange || containingRange.topLeft.col === currentCell.col) {
              result.push(separator);
            }
          } else {
            result.push(separator);
          }
        }
      });
      if (drawSeparator(contentSize, contentSize)) {
        result.push(separatorGetter(contentSize, contentSize));
      }
      return result.join("");
    };
    exports.drawContent = drawContent;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/drawBorder.js
var require_drawBorder = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/drawBorder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTableBorderGetter = exports.drawBorderBottom = exports.drawBorderJoin = exports.drawBorderTop = exports.drawBorder = exports.createSeparatorGetter = exports.drawBorderSegments = void 0;
    var drawContent_1 = require_drawContent();
    var drawBorderSegments = (columnWidths, parameters) => {
      const { separator, horizontalBorderIndex, spanningCellManager } = parameters;
      return columnWidths.map((columnWidth, columnIndex) => {
        const normalSegment = separator.body.repeat(columnWidth);
        if (horizontalBorderIndex === void 0) {
          return normalSegment;
        }
        const range = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange({
          col: columnIndex,
          row: horizontalBorderIndex
        });
        if (!range) {
          return normalSegment;
        }
        const { topLeft } = range;
        if (horizontalBorderIndex === topLeft.row) {
          return normalSegment;
        }
        if (columnIndex !== topLeft.col) {
          return "";
        }
        return range.extractBorderContent(horizontalBorderIndex);
      });
    };
    exports.drawBorderSegments = drawBorderSegments;
    var createSeparatorGetter = (dependencies) => {
      const { separator, spanningCellManager, horizontalBorderIndex, rowCount } = dependencies;
      return (verticalBorderIndex, columnCount) => {
        const inSameRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.inSameRange;
        if (horizontalBorderIndex !== void 0 && inSameRange) {
          const topCell = {
            col: verticalBorderIndex,
            row: horizontalBorderIndex - 1
          };
          const leftCell = {
            col: verticalBorderIndex - 1,
            row: horizontalBorderIndex
          };
          const oppositeCell = {
            col: verticalBorderIndex - 1,
            row: horizontalBorderIndex - 1
          };
          const currentCell = {
            col: verticalBorderIndex,
            row: horizontalBorderIndex
          };
          const pairs = [
            [oppositeCell, topCell],
            [topCell, currentCell],
            [currentCell, leftCell],
            [leftCell, oppositeCell]
          ];
          if (verticalBorderIndex === 0) {
            if (inSameRange(currentCell, topCell) && separator.bodyJoinOuter) {
              return separator.bodyJoinOuter;
            }
            return separator.left;
          }
          if (verticalBorderIndex === columnCount) {
            if (inSameRange(oppositeCell, leftCell) && separator.bodyJoinOuter) {
              return separator.bodyJoinOuter;
            }
            return separator.right;
          }
          if (horizontalBorderIndex === 0) {
            if (inSameRange(currentCell, leftCell)) {
              return separator.body;
            }
            return separator.join;
          }
          if (horizontalBorderIndex === rowCount) {
            if (inSameRange(topCell, oppositeCell)) {
              return separator.body;
            }
            return separator.join;
          }
          const sameRangeCount = pairs.map((pair) => {
            return inSameRange(...pair);
          }).filter(Boolean).length;
          if (sameRangeCount === 0) {
            return separator.join;
          }
          if (sameRangeCount === 4) {
            return "";
          }
          if (sameRangeCount === 2) {
            if (inSameRange(...pairs[1]) && inSameRange(...pairs[3]) && separator.bodyJoinInner) {
              return separator.bodyJoinInner;
            }
            return separator.body;
          }
          if (sameRangeCount === 1) {
            if (!separator.joinRight || !separator.joinLeft || !separator.joinUp || !separator.joinDown) {
              throw new Error(`Can not get border separator for position [${horizontalBorderIndex}, ${verticalBorderIndex}]`);
            }
            if (inSameRange(...pairs[0])) {
              return separator.joinDown;
            }
            if (inSameRange(...pairs[1])) {
              return separator.joinLeft;
            }
            if (inSameRange(...pairs[2])) {
              return separator.joinUp;
            }
            return separator.joinRight;
          }
          throw new Error("Invalid case");
        }
        if (verticalBorderIndex === 0) {
          return separator.left;
        }
        if (verticalBorderIndex === columnCount) {
          return separator.right;
        }
        return separator.join;
      };
    };
    exports.createSeparatorGetter = createSeparatorGetter;
    var drawBorder = (columnWidths, parameters) => {
      const borderSegments = (0, exports.drawBorderSegments)(columnWidths, parameters);
      const { drawVerticalLine, horizontalBorderIndex, spanningCellManager } = parameters;
      return (0, drawContent_1.drawContent)({
        contents: borderSegments,
        drawSeparator: drawVerticalLine,
        elementType: "border",
        rowIndex: horizontalBorderIndex,
        separatorGetter: (0, exports.createSeparatorGetter)(parameters),
        spanningCellManager
      }) + "\n";
    };
    exports.drawBorder = drawBorder;
    var drawBorderTop = (columnWidths, parameters) => {
      const { border } = parameters;
      const result = (0, exports.drawBorder)(columnWidths, {
        ...parameters,
        separator: {
          body: border.topBody,
          join: border.topJoin,
          left: border.topLeft,
          right: border.topRight
        }
      });
      if (result === "\n") {
        return "";
      }
      return result;
    };
    exports.drawBorderTop = drawBorderTop;
    var drawBorderJoin = (columnWidths, parameters) => {
      const { border } = parameters;
      return (0, exports.drawBorder)(columnWidths, {
        ...parameters,
        separator: {
          body: border.joinBody,
          bodyJoinInner: border.bodyJoin,
          bodyJoinOuter: border.bodyLeft,
          join: border.joinJoin,
          joinDown: border.joinMiddleDown,
          joinLeft: border.joinMiddleLeft,
          joinRight: border.joinMiddleRight,
          joinUp: border.joinMiddleUp,
          left: border.joinLeft,
          right: border.joinRight
        }
      });
    };
    exports.drawBorderJoin = drawBorderJoin;
    var drawBorderBottom = (columnWidths, parameters) => {
      const { border } = parameters;
      return (0, exports.drawBorder)(columnWidths, {
        ...parameters,
        separator: {
          body: border.bottomBody,
          join: border.bottomJoin,
          left: border.bottomLeft,
          right: border.bottomRight
        }
      });
    };
    exports.drawBorderBottom = drawBorderBottom;
    var createTableBorderGetter = (columnWidths, parameters) => {
      return (index, size) => {
        const drawBorderParameters = {
          ...parameters,
          horizontalBorderIndex: index
        };
        if (index === 0) {
          return (0, exports.drawBorderTop)(columnWidths, drawBorderParameters);
        } else if (index === size) {
          return (0, exports.drawBorderBottom)(columnWidths, drawBorderParameters);
        }
        return (0, exports.drawBorderJoin)(columnWidths, drawBorderParameters);
      };
    };
    exports.createTableBorderGetter = createTableBorderGetter;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/drawRow.js
var require_drawRow = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/drawRow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.drawRow = void 0;
    var drawContent_1 = require_drawContent();
    var drawRow = (row, config2) => {
      const { border, drawVerticalLine, rowIndex, spanningCellManager } = config2;
      return (0, drawContent_1.drawContent)({
        contents: row,
        drawSeparator: drawVerticalLine,
        elementType: "cell",
        rowIndex,
        separatorGetter: (index, columnCount) => {
          if (index === 0) {
            return border.bodyLeft;
          }
          if (index === columnCount) {
            return border.bodyRight;
          }
          return border.bodyJoin;
        },
        spanningCellManager
      }) + "\n";
    };
    exports.drawRow = drawRow;
  }
});

// ../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// ../../node_modules/.pnpm/ajv@8.11.0/node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "../../node_modules/.pnpm/ajv@8.11.0/node_modules/ajv/dist/runtime/equal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports.default = equal;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/generated/validators.js
var require_validators = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/generated/validators.js"(exports) {
    "use strict";
    exports["config.json"] = validate43;
    var schema13 = {
      "$id": "config.json",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "border": {
          "$ref": "shared.json#/definitions/borders"
        },
        "header": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            },
            "alignment": {
              "$ref": "shared.json#/definitions/alignment"
            },
            "wrapWord": {
              "type": "boolean"
            },
            "truncate": {
              "type": "integer"
            },
            "paddingLeft": {
              "type": "integer"
            },
            "paddingRight": {
              "type": "integer"
            }
          },
          "required": ["content"],
          "additionalProperties": false
        },
        "columns": {
          "$ref": "shared.json#/definitions/columns"
        },
        "columnDefault": {
          "$ref": "shared.json#/definitions/column"
        },
        "drawVerticalLine": {
          "typeof": "function"
        },
        "drawHorizontalLine": {
          "typeof": "function"
        },
        "singleLine": {
          "typeof": "boolean"
        },
        "spanningCells": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "col": {
                "type": "integer",
                "minimum": 0
              },
              "row": {
                "type": "integer",
                "minimum": 0
              },
              "colSpan": {
                "type": "integer",
                "minimum": 1
              },
              "rowSpan": {
                "type": "integer",
                "minimum": 1
              },
              "alignment": {
                "$ref": "shared.json#/definitions/alignment"
              },
              "verticalAlignment": {
                "$ref": "shared.json#/definitions/verticalAlignment"
              },
              "wrapWord": {
                "type": "boolean"
              },
              "truncate": {
                "type": "integer"
              },
              "paddingLeft": {
                "type": "integer"
              },
              "paddingRight": {
                "type": "integer"
              }
            },
            "required": ["row", "col"],
            "additionalProperties": false
          }
        }
      },
      "additionalProperties": false
    };
    var schema15 = {
      "type": "object",
      "properties": {
        "topBody": {
          "$ref": "#/definitions/border"
        },
        "topJoin": {
          "$ref": "#/definitions/border"
        },
        "topLeft": {
          "$ref": "#/definitions/border"
        },
        "topRight": {
          "$ref": "#/definitions/border"
        },
        "bottomBody": {
          "$ref": "#/definitions/border"
        },
        "bottomJoin": {
          "$ref": "#/definitions/border"
        },
        "bottomLeft": {
          "$ref": "#/definitions/border"
        },
        "bottomRight": {
          "$ref": "#/definitions/border"
        },
        "bodyLeft": {
          "$ref": "#/definitions/border"
        },
        "bodyRight": {
          "$ref": "#/definitions/border"
        },
        "bodyJoin": {
          "$ref": "#/definitions/border"
        },
        "headerJoin": {
          "$ref": "#/definitions/border"
        },
        "joinBody": {
          "$ref": "#/definitions/border"
        },
        "joinLeft": {
          "$ref": "#/definitions/border"
        },
        "joinRight": {
          "$ref": "#/definitions/border"
        },
        "joinJoin": {
          "$ref": "#/definitions/border"
        },
        "joinMiddleUp": {
          "$ref": "#/definitions/border"
        },
        "joinMiddleDown": {
          "$ref": "#/definitions/border"
        },
        "joinMiddleLeft": {
          "$ref": "#/definitions/border"
        },
        "joinMiddleRight": {
          "$ref": "#/definitions/border"
        }
      },
      "additionalProperties": false
    };
    var func8 = Object.prototype.hasOwnProperty;
    function validate46(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (typeof data !== "string") {
        const err0 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      validate46.errors = vErrors;
      return errors === 0;
    }
    function validate45(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
          if (!func8.call(schema15.properties, key0)) {
            const err0 = {
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
        if (data.topBody !== void 0) {
          if (!validate46(data.topBody, {
            instancePath: instancePath + "/topBody",
            parentData: data,
            parentDataProperty: "topBody",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.topJoin !== void 0) {
          if (!validate46(data.topJoin, {
            instancePath: instancePath + "/topJoin",
            parentData: data,
            parentDataProperty: "topJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.topLeft !== void 0) {
          if (!validate46(data.topLeft, {
            instancePath: instancePath + "/topLeft",
            parentData: data,
            parentDataProperty: "topLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.topRight !== void 0) {
          if (!validate46(data.topRight, {
            instancePath: instancePath + "/topRight",
            parentData: data,
            parentDataProperty: "topRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bottomBody !== void 0) {
          if (!validate46(data.bottomBody, {
            instancePath: instancePath + "/bottomBody",
            parentData: data,
            parentDataProperty: "bottomBody",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bottomJoin !== void 0) {
          if (!validate46(data.bottomJoin, {
            instancePath: instancePath + "/bottomJoin",
            parentData: data,
            parentDataProperty: "bottomJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bottomLeft !== void 0) {
          if (!validate46(data.bottomLeft, {
            instancePath: instancePath + "/bottomLeft",
            parentData: data,
            parentDataProperty: "bottomLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bottomRight !== void 0) {
          if (!validate46(data.bottomRight, {
            instancePath: instancePath + "/bottomRight",
            parentData: data,
            parentDataProperty: "bottomRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bodyLeft !== void 0) {
          if (!validate46(data.bodyLeft, {
            instancePath: instancePath + "/bodyLeft",
            parentData: data,
            parentDataProperty: "bodyLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bodyRight !== void 0) {
          if (!validate46(data.bodyRight, {
            instancePath: instancePath + "/bodyRight",
            parentData: data,
            parentDataProperty: "bodyRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bodyJoin !== void 0) {
          if (!validate46(data.bodyJoin, {
            instancePath: instancePath + "/bodyJoin",
            parentData: data,
            parentDataProperty: "bodyJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.headerJoin !== void 0) {
          if (!validate46(data.headerJoin, {
            instancePath: instancePath + "/headerJoin",
            parentData: data,
            parentDataProperty: "headerJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinBody !== void 0) {
          if (!validate46(data.joinBody, {
            instancePath: instancePath + "/joinBody",
            parentData: data,
            parentDataProperty: "joinBody",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinLeft !== void 0) {
          if (!validate46(data.joinLeft, {
            instancePath: instancePath + "/joinLeft",
            parentData: data,
            parentDataProperty: "joinLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinRight !== void 0) {
          if (!validate46(data.joinRight, {
            instancePath: instancePath + "/joinRight",
            parentData: data,
            parentDataProperty: "joinRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinJoin !== void 0) {
          if (!validate46(data.joinJoin, {
            instancePath: instancePath + "/joinJoin",
            parentData: data,
            parentDataProperty: "joinJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinMiddleUp !== void 0) {
          if (!validate46(data.joinMiddleUp, {
            instancePath: instancePath + "/joinMiddleUp",
            parentData: data,
            parentDataProperty: "joinMiddleUp",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinMiddleDown !== void 0) {
          if (!validate46(data.joinMiddleDown, {
            instancePath: instancePath + "/joinMiddleDown",
            parentData: data,
            parentDataProperty: "joinMiddleDown",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinMiddleLeft !== void 0) {
          if (!validate46(data.joinMiddleLeft, {
            instancePath: instancePath + "/joinMiddleLeft",
            parentData: data,
            parentDataProperty: "joinMiddleLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinMiddleRight !== void 0) {
          if (!validate46(data.joinMiddleRight, {
            instancePath: instancePath + "/joinMiddleRight",
            parentData: data,
            parentDataProperty: "joinMiddleRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err1 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      validate45.errors = vErrors;
      return errors === 0;
    }
    var schema17 = {
      "type": "string",
      "enum": ["left", "right", "center", "justify"]
    };
    var func0 = require_equal().default;
    function validate68(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (typeof data !== "string") {
        const err0 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      if (!(data === "left" || data === "right" || data === "center" || data === "justify")) {
        const err1 = {
          instancePath,
          schemaPath: "#/enum",
          keyword: "enum",
          params: {
            allowedValues: schema17.enum
          },
          message: "must be equal to one of the allowed values"
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      validate68.errors = vErrors;
      return errors === 0;
    }
    var pattern0 = new RegExp("^[0-9]+$", "u");
    function validate72(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (typeof data !== "string") {
        const err0 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      if (!(data === "left" || data === "right" || data === "center" || data === "justify")) {
        const err1 = {
          instancePath,
          schemaPath: "#/enum",
          keyword: "enum",
          params: {
            allowedValues: schema17.enum
          },
          message: "must be equal to one of the allowed values"
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      validate72.errors = vErrors;
      return errors === 0;
    }
    var schema21 = {
      "type": "string",
      "enum": ["top", "middle", "bottom"]
    };
    function validate74(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (typeof data !== "string") {
        const err0 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      if (!(data === "top" || data === "middle" || data === "bottom")) {
        const err1 = {
          instancePath,
          schemaPath: "#/enum",
          keyword: "enum",
          params: {
            allowedValues: schema21.enum
          },
          message: "must be equal to one of the allowed values"
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      validate74.errors = vErrors;
      return errors === 0;
    }
    function validate71(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
          if (!(key0 === "alignment" || key0 === "verticalAlignment" || key0 === "width" || key0 === "wrapWord" || key0 === "truncate" || key0 === "paddingLeft" || key0 === "paddingRight")) {
            const err0 = {
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
        if (data.alignment !== void 0) {
          if (!validate72(data.alignment, {
            instancePath: instancePath + "/alignment",
            parentData: data,
            parentDataProperty: "alignment",
            rootData
          })) {
            vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
            errors = vErrors.length;
          }
        }
        if (data.verticalAlignment !== void 0) {
          if (!validate74(data.verticalAlignment, {
            instancePath: instancePath + "/verticalAlignment",
            parentData: data,
            parentDataProperty: "verticalAlignment",
            rootData
          })) {
            vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
            errors = vErrors.length;
          }
        }
        if (data.width !== void 0) {
          let data2 = data.width;
          if (!(typeof data2 == "number" && (!(data2 % 1) && !isNaN(data2)) && isFinite(data2))) {
            const err1 = {
              instancePath: instancePath + "/width",
              schemaPath: "#/properties/width/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
          if (typeof data2 == "number" && isFinite(data2)) {
            if (data2 < 1 || isNaN(data2)) {
              const err2 = {
                instancePath: instancePath + "/width",
                schemaPath: "#/properties/width/minimum",
                keyword: "minimum",
                params: {
                  comparison: ">=",
                  limit: 1
                },
                message: "must be >= 1"
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          }
        }
        if (data.wrapWord !== void 0) {
          if (typeof data.wrapWord !== "boolean") {
            const err3 = {
              instancePath: instancePath + "/wrapWord",
              schemaPath: "#/properties/wrapWord/type",
              keyword: "type",
              params: {
                type: "boolean"
              },
              message: "must be boolean"
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        if (data.truncate !== void 0) {
          let data4 = data.truncate;
          if (!(typeof data4 == "number" && (!(data4 % 1) && !isNaN(data4)) && isFinite(data4))) {
            const err4 = {
              instancePath: instancePath + "/truncate",
              schemaPath: "#/properties/truncate/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
        if (data.paddingLeft !== void 0) {
          let data5 = data.paddingLeft;
          if (!(typeof data5 == "number" && (!(data5 % 1) && !isNaN(data5)) && isFinite(data5))) {
            const err5 = {
              instancePath: instancePath + "/paddingLeft",
              schemaPath: "#/properties/paddingLeft/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
        if (data.paddingRight !== void 0) {
          let data6 = data.paddingRight;
          if (!(typeof data6 == "number" && (!(data6 % 1) && !isNaN(data6)) && isFinite(data6))) {
            const err6 = {
              instancePath: instancePath + "/paddingRight",
              schemaPath: "#/properties/paddingRight/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
      } else {
        const err7 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
      validate71.errors = vErrors;
      return errors === 0;
    }
    function validate70(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      const _errs0 = errors;
      let valid0 = false;
      let passing0 = null;
      const _errs1 = errors;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
          if (!pattern0.test(key0)) {
            const err0 = {
              instancePath,
              schemaPath: "#/oneOf/0/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
        for (const key1 in data) {
          if (pattern0.test(key1)) {
            if (!validate71(data[key1], {
              instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: data,
              parentDataProperty: key1,
              rootData
            })) {
              vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
              errors = vErrors.length;
            }
          }
        }
      } else {
        const err1 = {
          instancePath,
          schemaPath: "#/oneOf/0/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      var _valid0 = _errs1 === errors;
      if (_valid0) {
        valid0 = true;
        passing0 = 0;
      }
      const _errs5 = errors;
      if (Array.isArray(data)) {
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate71(data[i0], {
            instancePath: instancePath + "/" + i0,
            parentData: data,
            parentDataProperty: i0,
            rootData
          })) {
            vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err2 = {
          instancePath,
          schemaPath: "#/oneOf/1/type",
          keyword: "type",
          params: {
            type: "array"
          },
          message: "must be array"
        };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
      var _valid0 = _errs5 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 1;
        }
      }
      if (!valid0) {
        const err3 = {
          instancePath,
          schemaPath: "#/oneOf",
          keyword: "oneOf",
          params: {
            passingSchemas: passing0
          },
          message: "must match exactly one schema in oneOf"
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        errors = _errs0;
        if (vErrors !== null) {
          if (_errs0) {
            vErrors.length = _errs0;
          } else {
            vErrors = null;
          }
        }
      }
      validate70.errors = vErrors;
      return errors === 0;
    }
    function validate79(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
          if (!(key0 === "alignment" || key0 === "verticalAlignment" || key0 === "width" || key0 === "wrapWord" || key0 === "truncate" || key0 === "paddingLeft" || key0 === "paddingRight")) {
            const err0 = {
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
        if (data.alignment !== void 0) {
          if (!validate72(data.alignment, {
            instancePath: instancePath + "/alignment",
            parentData: data,
            parentDataProperty: "alignment",
            rootData
          })) {
            vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
            errors = vErrors.length;
          }
        }
        if (data.verticalAlignment !== void 0) {
          if (!validate74(data.verticalAlignment, {
            instancePath: instancePath + "/verticalAlignment",
            parentData: data,
            parentDataProperty: "verticalAlignment",
            rootData
          })) {
            vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
            errors = vErrors.length;
          }
        }
        if (data.width !== void 0) {
          let data2 = data.width;
          if (!(typeof data2 == "number" && (!(data2 % 1) && !isNaN(data2)) && isFinite(data2))) {
            const err1 = {
              instancePath: instancePath + "/width",
              schemaPath: "#/properties/width/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
          if (typeof data2 == "number" && isFinite(data2)) {
            if (data2 < 1 || isNaN(data2)) {
              const err2 = {
                instancePath: instancePath + "/width",
                schemaPath: "#/properties/width/minimum",
                keyword: "minimum",
                params: {
                  comparison: ">=",
                  limit: 1
                },
                message: "must be >= 1"
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          }
        }
        if (data.wrapWord !== void 0) {
          if (typeof data.wrapWord !== "boolean") {
            const err3 = {
              instancePath: instancePath + "/wrapWord",
              schemaPath: "#/properties/wrapWord/type",
              keyword: "type",
              params: {
                type: "boolean"
              },
              message: "must be boolean"
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        if (data.truncate !== void 0) {
          let data4 = data.truncate;
          if (!(typeof data4 == "number" && (!(data4 % 1) && !isNaN(data4)) && isFinite(data4))) {
            const err4 = {
              instancePath: instancePath + "/truncate",
              schemaPath: "#/properties/truncate/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
        if (data.paddingLeft !== void 0) {
          let data5 = data.paddingLeft;
          if (!(typeof data5 == "number" && (!(data5 % 1) && !isNaN(data5)) && isFinite(data5))) {
            const err5 = {
              instancePath: instancePath + "/paddingLeft",
              schemaPath: "#/properties/paddingLeft/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
        if (data.paddingRight !== void 0) {
          let data6 = data.paddingRight;
          if (!(typeof data6 == "number" && (!(data6 % 1) && !isNaN(data6)) && isFinite(data6))) {
            const err6 = {
              instancePath: instancePath + "/paddingRight",
              schemaPath: "#/properties/paddingRight/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
      } else {
        const err7 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
      validate79.errors = vErrors;
      return errors === 0;
    }
    function validate84(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (typeof data !== "string") {
        const err0 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      if (!(data === "top" || data === "middle" || data === "bottom")) {
        const err1 = {
          instancePath,
          schemaPath: "#/enum",
          keyword: "enum",
          params: {
            allowedValues: schema21.enum
          },
          message: "must be equal to one of the allowed values"
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      validate84.errors = vErrors;
      return errors === 0;
    }
    function validate43(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      ;
      let vErrors = null;
      let errors = 0;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
          if (!(key0 === "border" || key0 === "header" || key0 === "columns" || key0 === "columnDefault" || key0 === "drawVerticalLine" || key0 === "drawHorizontalLine" || key0 === "singleLine" || key0 === "spanningCells")) {
            const err0 = {
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
        if (data.border !== void 0) {
          if (!validate45(data.border, {
            instancePath: instancePath + "/border",
            parentData: data,
            parentDataProperty: "border",
            rootData
          })) {
            vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
            errors = vErrors.length;
          }
        }
        if (data.header !== void 0) {
          let data1 = data.header;
          if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
            if (data1.content === void 0) {
              const err1 = {
                instancePath: instancePath + "/header",
                schemaPath: "#/properties/header/required",
                keyword: "required",
                params: {
                  missingProperty: "content"
                },
                message: "must have required property 'content'"
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            for (const key1 in data1) {
              if (!(key1 === "content" || key1 === "alignment" || key1 === "wrapWord" || key1 === "truncate" || key1 === "paddingLeft" || key1 === "paddingRight")) {
                const err2 = {
                  instancePath: instancePath + "/header",
                  schemaPath: "#/properties/header/additionalProperties",
                  keyword: "additionalProperties",
                  params: {
                    additionalProperty: key1
                  },
                  message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                  vErrors = [err2];
                } else {
                  vErrors.push(err2);
                }
                errors++;
              }
            }
            if (data1.content !== void 0) {
              if (typeof data1.content !== "string") {
                const err3 = {
                  instancePath: instancePath + "/header/content",
                  schemaPath: "#/properties/header/properties/content/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string"
                };
                if (vErrors === null) {
                  vErrors = [err3];
                } else {
                  vErrors.push(err3);
                }
                errors++;
              }
            }
            if (data1.alignment !== void 0) {
              if (!validate68(data1.alignment, {
                instancePath: instancePath + "/header/alignment",
                parentData: data1,
                parentDataProperty: "alignment",
                rootData
              })) {
                vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
                errors = vErrors.length;
              }
            }
            if (data1.wrapWord !== void 0) {
              if (typeof data1.wrapWord !== "boolean") {
                const err4 = {
                  instancePath: instancePath + "/header/wrapWord",
                  schemaPath: "#/properties/header/properties/wrapWord/type",
                  keyword: "type",
                  params: {
                    type: "boolean"
                  },
                  message: "must be boolean"
                };
                if (vErrors === null) {
                  vErrors = [err4];
                } else {
                  vErrors.push(err4);
                }
                errors++;
              }
            }
            if (data1.truncate !== void 0) {
              let data5 = data1.truncate;
              if (!(typeof data5 == "number" && (!(data5 % 1) && !isNaN(data5)) && isFinite(data5))) {
                const err5 = {
                  instancePath: instancePath + "/header/truncate",
                  schemaPath: "#/properties/header/properties/truncate/type",
                  keyword: "type",
                  params: {
                    type: "integer"
                  },
                  message: "must be integer"
                };
                if (vErrors === null) {
                  vErrors = [err5];
                } else {
                  vErrors.push(err5);
                }
                errors++;
              }
            }
            if (data1.paddingLeft !== void 0) {
              let data6 = data1.paddingLeft;
              if (!(typeof data6 == "number" && (!(data6 % 1) && !isNaN(data6)) && isFinite(data6))) {
                const err6 = {
                  instancePath: instancePath + "/header/paddingLeft",
                  schemaPath: "#/properties/header/properties/paddingLeft/type",
                  keyword: "type",
                  params: {
                    type: "integer"
                  },
                  message: "must be integer"
                };
                if (vErrors === null) {
                  vErrors = [err6];
                } else {
                  vErrors.push(err6);
                }
                errors++;
              }
            }
            if (data1.paddingRight !== void 0) {
              let data7 = data1.paddingRight;
              if (!(typeof data7 == "number" && (!(data7 % 1) && !isNaN(data7)) && isFinite(data7))) {
                const err7 = {
                  instancePath: instancePath + "/header/paddingRight",
                  schemaPath: "#/properties/header/properties/paddingRight/type",
                  keyword: "type",
                  params: {
                    type: "integer"
                  },
                  message: "must be integer"
                };
                if (vErrors === null) {
                  vErrors = [err7];
                } else {
                  vErrors.push(err7);
                }
                errors++;
              }
            }
          } else {
            const err8 = {
              instancePath: instancePath + "/header",
              schemaPath: "#/properties/header/type",
              keyword: "type",
              params: {
                type: "object"
              },
              message: "must be object"
            };
            if (vErrors === null) {
              vErrors = [err8];
            } else {
              vErrors.push(err8);
            }
            errors++;
          }
        }
        if (data.columns !== void 0) {
          if (!validate70(data.columns, {
            instancePath: instancePath + "/columns",
            parentData: data,
            parentDataProperty: "columns",
            rootData
          })) {
            vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
            errors = vErrors.length;
          }
        }
        if (data.columnDefault !== void 0) {
          if (!validate79(data.columnDefault, {
            instancePath: instancePath + "/columnDefault",
            parentData: data,
            parentDataProperty: "columnDefault",
            rootData
          })) {
            vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
            errors = vErrors.length;
          }
        }
        if (data.drawVerticalLine !== void 0) {
          if (typeof data.drawVerticalLine != "function") {
            const err9 = {
              instancePath: instancePath + "/drawVerticalLine",
              schemaPath: "#/properties/drawVerticalLine/typeof",
              keyword: "typeof",
              params: {},
              message: 'must pass "typeof" keyword validation'
            };
            if (vErrors === null) {
              vErrors = [err9];
            } else {
              vErrors.push(err9);
            }
            errors++;
          }
        }
        if (data.drawHorizontalLine !== void 0) {
          if (typeof data.drawHorizontalLine != "function") {
            const err10 = {
              instancePath: instancePath + "/drawHorizontalLine",
              schemaPath: "#/properties/drawHorizontalLine/typeof",
              keyword: "typeof",
              params: {},
              message: 'must pass "typeof" keyword validation'
            };
            if (vErrors === null) {
              vErrors = [err10];
            } else {
              vErrors.push(err10);
            }
            errors++;
          }
        }
        if (data.singleLine !== void 0) {
          if (typeof data.singleLine != "boolean") {
            const err11 = {
              instancePath: instancePath + "/singleLine",
              schemaPath: "#/properties/singleLine/typeof",
              keyword: "typeof",
              params: {},
              message: 'must pass "typeof" keyword validation'
            };
            if (vErrors === null) {
              vErrors = [err11];
            } else {
              vErrors.push(err11);
            }
            errors++;
          }
        }
        if (data.spanningCells !== void 0) {
          let data13 = data.spanningCells;
          if (Array.isArray(data13)) {
            const len0 = data13.length;
            for (let i0 = 0; i0 < len0; i0++) {
              let data14 = data13[i0];
              if (data14 && typeof data14 == "object" && !Array.isArray(data14)) {
                if (data14.row === void 0) {
                  const err12 = {
                    instancePath: instancePath + "/spanningCells/" + i0,
                    schemaPath: "#/properties/spanningCells/items/required",
                    keyword: "required",
                    params: {
                      missingProperty: "row"
                    },
                    message: "must have required property 'row'"
                  };
                  if (vErrors === null) {
                    vErrors = [err12];
                  } else {
                    vErrors.push(err12);
                  }
                  errors++;
                }
                if (data14.col === void 0) {
                  const err13 = {
                    instancePath: instancePath + "/spanningCells/" + i0,
                    schemaPath: "#/properties/spanningCells/items/required",
                    keyword: "required",
                    params: {
                      missingProperty: "col"
                    },
                    message: "must have required property 'col'"
                  };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                for (const key2 in data14) {
                  if (!func8.call(schema13.properties.spanningCells.items.properties, key2)) {
                    const err14 = {
                      instancePath: instancePath + "/spanningCells/" + i0,
                      schemaPath: "#/properties/spanningCells/items/additionalProperties",
                      keyword: "additionalProperties",
                      params: {
                        additionalProperty: key2
                      },
                      message: "must NOT have additional properties"
                    };
                    if (vErrors === null) {
                      vErrors = [err14];
                    } else {
                      vErrors.push(err14);
                    }
                    errors++;
                  }
                }
                if (data14.col !== void 0) {
                  let data15 = data14.col;
                  if (!(typeof data15 == "number" && (!(data15 % 1) && !isNaN(data15)) && isFinite(data15))) {
                    const err15 = {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/col",
                      schemaPath: "#/properties/spanningCells/items/properties/col/type",
                      keyword: "type",
                      params: {
                        type: "integer"
                      },
                      message: "must be integer"
                    };
                    if (vErrors === null) {
                      vErrors = [err15];
                    } else {
                      vErrors.push(err15);
                    }
                    errors++;
                  }
                  if (typeof data15 == "number" && isFinite(data15)) {
                    if (data15 < 0 || isNaN(data15)) {
                      const err16 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/col",
                        schemaPath: "#/properties/spanningCells/items/properties/col/minimum",
                        keyword: "minimum",
                        params: {
                          comparison: ">=",
                          limit: 0
                        },
                        message: "must be >= 0"
                      };
                      if (vErrors === null) {
                        vErrors = [err16];
                      } else {
                        vErrors.push(err16);
                      }
                      errors++;
                    }
                  }
                }
                if (data14.row !== void 0) {
                  let data16 = data14.row;
                  if (!(typeof data16 == "number" && (!(data16 % 1) && !isNaN(data16)) && isFinite(data16))) {
                    const err17 = {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/row",
                      schemaPath: "#/properties/spanningCells/items/properties/row/type",
                      keyword: "type",
                      params: {
                        type: "integer"
                      },
                      message: "must be integer"
                    };
                    if (vErrors === null) {
                      vErrors = [err17];
                    } else {
                      vErrors.push(err17);
                    }
                    errors++;
                  }
                  if (typeof data16 == "number" && isFinite(data16)) {
                    if (data16 < 0 || isNaN(data16)) {
                      const err18 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/row",
                        schemaPath: "#/properties/spanningCells/items/properties/row/minimum",
                        keyword: "minimum",
                        params: {
                          comparison: ">=",
                          limit: 0
                        },
                        message: "must be >= 0"
                      };
                      if (vErrors === null) {
                        vErrors = [err18];
                      } else {
                        vErrors.push(err18);
                      }
                      errors++;
                    }
                  }
                }
                if (data14.colSpan !== void 0) {
                  let data17 = data14.colSpan;
                  if (!(typeof data17 == "number" && (!(data17 % 1) && !isNaN(data17)) && isFinite(data17))) {
                    const err19 = {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/colSpan",
                      schemaPath: "#/properties/spanningCells/items/properties/colSpan/type",
                      keyword: "type",
                      params: {
                        type: "integer"
                      },
                      message: "must be integer"
                    };
                    if (vErrors === null) {
                      vErrors = [err19];
                    } else {
                      vErrors.push(err19);
                    }
                    errors++;
                  }
                  if (typeof data17 == "number" && isFinite(data17)) {
                    if (data17 < 1 || isNaN(data17)) {
                      const err20 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/colSpan",
                        schemaPath: "#/properties/spanningCells/items/properties/colSpan/minimum",
                        keyword: "minimum",
                        params: {
                          comparison: ">=",
                          limit: 1
                        },
                        message: "must be >= 1"
                      };
                      if (vErrors === null) {
                        vErrors = [err20];
                      } else {
                        vErrors.push(err20);
                      }
                      errors++;
                    }
                  }
                }
                if (data14.rowSpan !== void 0) {
                  let data18 = data14.rowSpan;
                  if (!(typeof data18 == "number" && (!(data18 % 1) && !isNaN(data18)) && isFinite(data18))) {
                    const err21 = {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/rowSpan",
                      schemaPath: "#/properties/spanningCells/items/properties/rowSpan/type",
                      keyword: "type",
                      params: {
                        type: "integer"
                      },
                      message: "must be integer"
                    };
                    if (vErrors === null) {
                      vErrors = [err21];
                    } else {
                      vErrors.push(err21);
                    }
                    errors++;
                  }
                  if (typeof data18 == "number" && isFinite(data18)) {
                    if (data18 < 1 || isNaN(data18)) {
                      const err22 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/rowSpan",
                        schemaPath: "#/properties/spanningCells/items/properties/rowSpan/minimum",
                        keyword: "minimum",
                        params: {
                          comparison: ">=",
                          limit: 1
                        },
                        message: "must be >= 1"
                      };
                      if (vErrors === null) {
                        vErrors = [err22];
                      } else {
                        vErrors.push(err22);
                      }
                      errors++;
                    }
                  }
                }
                if (data14.alignment !== void 0) {
                  if (!validate68(data14.alignment, {
                    instancePath: instancePath + "/spanningCells/" + i0 + "/alignment",
                    parentData: data14,
                    parentDataProperty: "alignment",
                    rootData
                  })) {
                    vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
                    errors = vErrors.length;
                  }
                }
                if (data14.verticalAlignment !== void 0) {
                  if (!validate84(data14.verticalAlignment, {
                    instancePath: instancePath + "/spanningCells/" + i0 + "/verticalAlignment",
                    parentData: data14,
                    parentDataProperty: "verticalAlignment",
                    rootData
                  })) {
                    vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
                    errors = vErrors.length;
                  }
                }
                if (data14.wrapWord !== void 0) {
                  if (typeof data14.wrapWord !== "boolean") {
                    const err23 = {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/wrapWord",
                      schemaPath: "#/properties/spanningCells/items/properties/wrapWord/type",
                      keyword: "type",
                      params: {
                        type: "boolean"
                      },
                      message: "must be boolean"
                    };
                    if (vErrors === null) {
                      vErrors = [err23];
                    } else {
                      vErrors.push(err23);
                    }
                    errors++;
                  }
                }
                if (data14.truncate !== void 0) {
                  let data22 = data14.truncate;
                  if (!(typeof data22 == "number" && (!(data22 % 1) && !isNaN(data22)) && isFinite(data22))) {
                    const err24 = {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/truncate",
                      schemaPath: "#/properties/spanningCells/items/properties/truncate/type",
                      keyword: "type",
                      params: {
                        type: "integer"
                      },
                      message: "must be integer"
                    };
                    if (vErrors === null) {
                      vErrors = [err24];
                    } else {
                      vErrors.push(err24);
                    }
                    errors++;
                  }
                }
                if (data14.paddingLeft !== void 0) {
                  let data23 = data14.paddingLeft;
                  if (!(typeof data23 == "number" && (!(data23 % 1) && !isNaN(data23)) && isFinite(data23))) {
                    const err25 = {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/paddingLeft",
                      schemaPath: "#/properties/spanningCells/items/properties/paddingLeft/type",
                      keyword: "type",
                      params: {
                        type: "integer"
                      },
                      message: "must be integer"
                    };
                    if (vErrors === null) {
                      vErrors = [err25];
                    } else {
                      vErrors.push(err25);
                    }
                    errors++;
                  }
                }
                if (data14.paddingRight !== void 0) {
                  let data24 = data14.paddingRight;
                  if (!(typeof data24 == "number" && (!(data24 % 1) && !isNaN(data24)) && isFinite(data24))) {
                    const err26 = {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/paddingRight",
                      schemaPath: "#/properties/spanningCells/items/properties/paddingRight/type",
                      keyword: "type",
                      params: {
                        type: "integer"
                      },
                      message: "must be integer"
                    };
                    if (vErrors === null) {
                      vErrors = [err26];
                    } else {
                      vErrors.push(err26);
                    }
                    errors++;
                  }
                }
              } else {
                const err27 = {
                  instancePath: instancePath + "/spanningCells/" + i0,
                  schemaPath: "#/properties/spanningCells/items/type",
                  keyword: "type",
                  params: {
                    type: "object"
                  },
                  message: "must be object"
                };
                if (vErrors === null) {
                  vErrors = [err27];
                } else {
                  vErrors.push(err27);
                }
                errors++;
              }
            }
          } else {
            const err28 = {
              instancePath: instancePath + "/spanningCells",
              schemaPath: "#/properties/spanningCells/type",
              keyword: "type",
              params: {
                type: "array"
              },
              message: "must be array"
            };
            if (vErrors === null) {
              vErrors = [err28];
            } else {
              vErrors.push(err28);
            }
            errors++;
          }
        }
      } else {
        const err29 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err29];
        } else {
          vErrors.push(err29);
        }
        errors++;
      }
      validate43.errors = vErrors;
      return errors === 0;
    }
    exports["streamConfig.json"] = validate86;
    function validate87(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
          if (!func8.call(schema15.properties, key0)) {
            const err0 = {
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
        if (data.topBody !== void 0) {
          if (!validate46(data.topBody, {
            instancePath: instancePath + "/topBody",
            parentData: data,
            parentDataProperty: "topBody",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.topJoin !== void 0) {
          if (!validate46(data.topJoin, {
            instancePath: instancePath + "/topJoin",
            parentData: data,
            parentDataProperty: "topJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.topLeft !== void 0) {
          if (!validate46(data.topLeft, {
            instancePath: instancePath + "/topLeft",
            parentData: data,
            parentDataProperty: "topLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.topRight !== void 0) {
          if (!validate46(data.topRight, {
            instancePath: instancePath + "/topRight",
            parentData: data,
            parentDataProperty: "topRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bottomBody !== void 0) {
          if (!validate46(data.bottomBody, {
            instancePath: instancePath + "/bottomBody",
            parentData: data,
            parentDataProperty: "bottomBody",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bottomJoin !== void 0) {
          if (!validate46(data.bottomJoin, {
            instancePath: instancePath + "/bottomJoin",
            parentData: data,
            parentDataProperty: "bottomJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bottomLeft !== void 0) {
          if (!validate46(data.bottomLeft, {
            instancePath: instancePath + "/bottomLeft",
            parentData: data,
            parentDataProperty: "bottomLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bottomRight !== void 0) {
          if (!validate46(data.bottomRight, {
            instancePath: instancePath + "/bottomRight",
            parentData: data,
            parentDataProperty: "bottomRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bodyLeft !== void 0) {
          if (!validate46(data.bodyLeft, {
            instancePath: instancePath + "/bodyLeft",
            parentData: data,
            parentDataProperty: "bodyLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bodyRight !== void 0) {
          if (!validate46(data.bodyRight, {
            instancePath: instancePath + "/bodyRight",
            parentData: data,
            parentDataProperty: "bodyRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.bodyJoin !== void 0) {
          if (!validate46(data.bodyJoin, {
            instancePath: instancePath + "/bodyJoin",
            parentData: data,
            parentDataProperty: "bodyJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.headerJoin !== void 0) {
          if (!validate46(data.headerJoin, {
            instancePath: instancePath + "/headerJoin",
            parentData: data,
            parentDataProperty: "headerJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinBody !== void 0) {
          if (!validate46(data.joinBody, {
            instancePath: instancePath + "/joinBody",
            parentData: data,
            parentDataProperty: "joinBody",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinLeft !== void 0) {
          if (!validate46(data.joinLeft, {
            instancePath: instancePath + "/joinLeft",
            parentData: data,
            parentDataProperty: "joinLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinRight !== void 0) {
          if (!validate46(data.joinRight, {
            instancePath: instancePath + "/joinRight",
            parentData: data,
            parentDataProperty: "joinRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinJoin !== void 0) {
          if (!validate46(data.joinJoin, {
            instancePath: instancePath + "/joinJoin",
            parentData: data,
            parentDataProperty: "joinJoin",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinMiddleUp !== void 0) {
          if (!validate46(data.joinMiddleUp, {
            instancePath: instancePath + "/joinMiddleUp",
            parentData: data,
            parentDataProperty: "joinMiddleUp",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinMiddleDown !== void 0) {
          if (!validate46(data.joinMiddleDown, {
            instancePath: instancePath + "/joinMiddleDown",
            parentData: data,
            parentDataProperty: "joinMiddleDown",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinMiddleLeft !== void 0) {
          if (!validate46(data.joinMiddleLeft, {
            instancePath: instancePath + "/joinMiddleLeft",
            parentData: data,
            parentDataProperty: "joinMiddleLeft",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
        if (data.joinMiddleRight !== void 0) {
          if (!validate46(data.joinMiddleRight, {
            instancePath: instancePath + "/joinMiddleRight",
            parentData: data,
            parentDataProperty: "joinMiddleRight",
            rootData
          })) {
            vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err1 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      validate87.errors = vErrors;
      return errors === 0;
    }
    function validate109(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      const _errs0 = errors;
      let valid0 = false;
      let passing0 = null;
      const _errs1 = errors;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
          if (!pattern0.test(key0)) {
            const err0 = {
              instancePath,
              schemaPath: "#/oneOf/0/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
        for (const key1 in data) {
          if (pattern0.test(key1)) {
            if (!validate71(data[key1], {
              instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: data,
              parentDataProperty: key1,
              rootData
            })) {
              vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
              errors = vErrors.length;
            }
          }
        }
      } else {
        const err1 = {
          instancePath,
          schemaPath: "#/oneOf/0/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
      var _valid0 = _errs1 === errors;
      if (_valid0) {
        valid0 = true;
        passing0 = 0;
      }
      const _errs5 = errors;
      if (Array.isArray(data)) {
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
          if (!validate71(data[i0], {
            instancePath: instancePath + "/" + i0,
            parentData: data,
            parentDataProperty: i0,
            rootData
          })) {
            vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
            errors = vErrors.length;
          }
        }
      } else {
        const err2 = {
          instancePath,
          schemaPath: "#/oneOf/1/type",
          keyword: "type",
          params: {
            type: "array"
          },
          message: "must be array"
        };
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
      var _valid0 = _errs5 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 1;
        }
      }
      if (!valid0) {
        const err3 = {
          instancePath,
          schemaPath: "#/oneOf",
          keyword: "oneOf",
          params: {
            passingSchemas: passing0
          },
          message: "must match exactly one schema in oneOf"
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        errors = _errs0;
        if (vErrors !== null) {
          if (_errs0) {
            vErrors.length = _errs0;
          } else {
            vErrors = null;
          }
        }
      }
      validate109.errors = vErrors;
      return errors === 0;
    }
    function validate113(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
          if (!(key0 === "alignment" || key0 === "verticalAlignment" || key0 === "width" || key0 === "wrapWord" || key0 === "truncate" || key0 === "paddingLeft" || key0 === "paddingRight")) {
            const err0 = {
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
        }
        if (data.alignment !== void 0) {
          if (!validate72(data.alignment, {
            instancePath: instancePath + "/alignment",
            parentData: data,
            parentDataProperty: "alignment",
            rootData
          })) {
            vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
            errors = vErrors.length;
          }
        }
        if (data.verticalAlignment !== void 0) {
          if (!validate74(data.verticalAlignment, {
            instancePath: instancePath + "/verticalAlignment",
            parentData: data,
            parentDataProperty: "verticalAlignment",
            rootData
          })) {
            vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
            errors = vErrors.length;
          }
        }
        if (data.width !== void 0) {
          let data2 = data.width;
          if (!(typeof data2 == "number" && (!(data2 % 1) && !isNaN(data2)) && isFinite(data2))) {
            const err1 = {
              instancePath: instancePath + "/width",
              schemaPath: "#/properties/width/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
          if (typeof data2 == "number" && isFinite(data2)) {
            if (data2 < 1 || isNaN(data2)) {
              const err2 = {
                instancePath: instancePath + "/width",
                schemaPath: "#/properties/width/minimum",
                keyword: "minimum",
                params: {
                  comparison: ">=",
                  limit: 1
                },
                message: "must be >= 1"
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          }
        }
        if (data.wrapWord !== void 0) {
          if (typeof data.wrapWord !== "boolean") {
            const err3 = {
              instancePath: instancePath + "/wrapWord",
              schemaPath: "#/properties/wrapWord/type",
              keyword: "type",
              params: {
                type: "boolean"
              },
              message: "must be boolean"
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
        }
        if (data.truncate !== void 0) {
          let data4 = data.truncate;
          if (!(typeof data4 == "number" && (!(data4 % 1) && !isNaN(data4)) && isFinite(data4))) {
            const err4 = {
              instancePath: instancePath + "/truncate",
              schemaPath: "#/properties/truncate/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
        if (data.paddingLeft !== void 0) {
          let data5 = data.paddingLeft;
          if (!(typeof data5 == "number" && (!(data5 % 1) && !isNaN(data5)) && isFinite(data5))) {
            const err5 = {
              instancePath: instancePath + "/paddingLeft",
              schemaPath: "#/properties/paddingLeft/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
        if (data.paddingRight !== void 0) {
          let data6 = data.paddingRight;
          if (!(typeof data6 == "number" && (!(data6 % 1) && !isNaN(data6)) && isFinite(data6))) {
            const err6 = {
              instancePath: instancePath + "/paddingRight",
              schemaPath: "#/properties/paddingRight/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
        }
      } else {
        const err7 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err7];
        } else {
          vErrors.push(err7);
        }
        errors++;
      }
      validate113.errors = vErrors;
      return errors === 0;
    }
    function validate86(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      ;
      let vErrors = null;
      let errors = 0;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.columnDefault === void 0) {
          const err0 = {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: {
              missingProperty: "columnDefault"
            },
            message: "must have required property 'columnDefault'"
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        if (data.columnCount === void 0) {
          const err1 = {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: {
              missingProperty: "columnCount"
            },
            message: "must have required property 'columnCount'"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        for (const key0 in data) {
          if (!(key0 === "border" || key0 === "columns" || key0 === "columnDefault" || key0 === "columnCount" || key0 === "drawVerticalLine")) {
            const err2 = {
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            };
            if (vErrors === null) {
              vErrors = [err2];
            } else {
              vErrors.push(err2);
            }
            errors++;
          }
        }
        if (data.border !== void 0) {
          if (!validate87(data.border, {
            instancePath: instancePath + "/border",
            parentData: data,
            parentDataProperty: "border",
            rootData
          })) {
            vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
            errors = vErrors.length;
          }
        }
        if (data.columns !== void 0) {
          if (!validate109(data.columns, {
            instancePath: instancePath + "/columns",
            parentData: data,
            parentDataProperty: "columns",
            rootData
          })) {
            vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
            errors = vErrors.length;
          }
        }
        if (data.columnDefault !== void 0) {
          if (!validate113(data.columnDefault, {
            instancePath: instancePath + "/columnDefault",
            parentData: data,
            parentDataProperty: "columnDefault",
            rootData
          })) {
            vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
            errors = vErrors.length;
          }
        }
        if (data.columnCount !== void 0) {
          let data3 = data.columnCount;
          if (!(typeof data3 == "number" && (!(data3 % 1) && !isNaN(data3)) && isFinite(data3))) {
            const err3 = {
              instancePath: instancePath + "/columnCount",
              schemaPath: "#/properties/columnCount/type",
              keyword: "type",
              params: {
                type: "integer"
              },
              message: "must be integer"
            };
            if (vErrors === null) {
              vErrors = [err3];
            } else {
              vErrors.push(err3);
            }
            errors++;
          }
          if (typeof data3 == "number" && isFinite(data3)) {
            if (data3 < 1 || isNaN(data3)) {
              const err4 = {
                instancePath: instancePath + "/columnCount",
                schemaPath: "#/properties/columnCount/minimum",
                keyword: "minimum",
                params: {
                  comparison: ">=",
                  limit: 1
                },
                message: "must be >= 1"
              };
              if (vErrors === null) {
                vErrors = [err4];
              } else {
                vErrors.push(err4);
              }
              errors++;
            }
          }
        }
        if (data.drawVerticalLine !== void 0) {
          if (typeof data.drawVerticalLine != "function") {
            const err5 = {
              instancePath: instancePath + "/drawVerticalLine",
              schemaPath: "#/properties/drawVerticalLine/typeof",
              keyword: "typeof",
              params: {},
              message: 'must pass "typeof" keyword validation'
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
        }
      } else {
        const err6 = {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      }
      validate86.errors = vErrors;
      return errors === 0;
    }
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/validateConfig.js
var require_validateConfig = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/validateConfig.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateConfig = void 0;
    var validators_1 = __importDefault(require_validators());
    var validateConfig = (schemaId, config2) => {
      const validate = validators_1.default[schemaId];
      if (!validate(config2) && validate.errors) {
        const errors = validate.errors.map((error) => {
          return {
            message: error.message,
            params: error.params,
            schemaPath: error.schemaPath
          };
        });
        console.log("config", config2);
        console.log("errors", errors);
        throw new Error("Invalid config.");
      }
    };
    exports.validateConfig = validateConfig;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/makeStreamConfig.js
var require_makeStreamConfig = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/makeStreamConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeStreamConfig = void 0;
    var utils_1 = require_utils();
    var validateConfig_1 = require_validateConfig();
    var makeColumnsConfig = (columnCount, columns = {}, columnDefault) => {
      return Array.from({ length: columnCount }).map((_, index) => {
        return {
          alignment: "left",
          paddingLeft: 1,
          paddingRight: 1,
          truncate: Number.POSITIVE_INFINITY,
          verticalAlignment: "top",
          wrapWord: false,
          ...columnDefault,
          ...columns[index]
        };
      });
    };
    var makeStreamConfig = (config2) => {
      (0, validateConfig_1.validateConfig)("streamConfig.json", config2);
      if (config2.columnDefault.width === void 0) {
        throw new Error("Must provide config.columnDefault.width when creating a stream.");
      }
      return {
        drawVerticalLine: () => {
          return true;
        },
        ...config2,
        border: (0, utils_1.makeBorderConfig)(config2.border),
        columns: makeColumnsConfig(config2.columnCount, config2.columns, config2.columnDefault)
      };
    };
    exports.makeStreamConfig = makeStreamConfig;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/mapDataUsingRowHeights.js
var require_mapDataUsingRowHeights = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/mapDataUsingRowHeights.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapDataUsingRowHeights = exports.padCellVertically = void 0;
    var utils_1 = require_utils();
    var wrapCell_1 = require_wrapCell();
    var createEmptyStrings = (length) => {
      return new Array(length).fill("");
    };
    var padCellVertically = (lines, rowHeight, verticalAlignment) => {
      const availableLines = rowHeight - lines.length;
      if (verticalAlignment === "top") {
        return [...lines, ...createEmptyStrings(availableLines)];
      }
      if (verticalAlignment === "bottom") {
        return [...createEmptyStrings(availableLines), ...lines];
      }
      return [
        ...createEmptyStrings(Math.floor(availableLines / 2)),
        ...lines,
        ...createEmptyStrings(Math.ceil(availableLines / 2))
      ];
    };
    exports.padCellVertically = padCellVertically;
    var mapDataUsingRowHeights = (unmappedRows, rowHeights, config2) => {
      const nColumns = unmappedRows[0].length;
      const mappedRows = unmappedRows.map((unmappedRow, unmappedRowIndex) => {
        const outputRowHeight = rowHeights[unmappedRowIndex];
        const outputRow = Array.from({ length: outputRowHeight }, () => {
          return new Array(nColumns).fill("");
        });
        unmappedRow.forEach((cell2, cellIndex) => {
          var _a2;
          const containingRange = (_a2 = config2.spanningCellManager) === null || _a2 === void 0 ? void 0 : _a2.getContainingRange({
            col: cellIndex,
            row: unmappedRowIndex
          });
          if (containingRange) {
            containingRange.extractCellContent(unmappedRowIndex).forEach((cellLine, cellLineIndex) => {
              outputRow[cellLineIndex][cellIndex] = cellLine;
            });
            return;
          }
          const cellLines = (0, wrapCell_1.wrapCell)(cell2, config2.columns[cellIndex].width, config2.columns[cellIndex].wrapWord);
          const paddedCellLines = (0, exports.padCellVertically)(cellLines, outputRowHeight, config2.columns[cellIndex].verticalAlignment);
          paddedCellLines.forEach((cellLine, cellLineIndex) => {
            outputRow[cellLineIndex][cellIndex] = cellLine;
          });
        });
        return outputRow;
      });
      return (0, utils_1.flatten)(mappedRows);
    };
    exports.mapDataUsingRowHeights = mapDataUsingRowHeights;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/padTableData.js
var require_padTableData = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/padTableData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.padTableData = exports.padString = void 0;
    var padString = (input, paddingLeft, paddingRight) => {
      return " ".repeat(paddingLeft) + input + " ".repeat(paddingRight);
    };
    exports.padString = padString;
    var padTableData = (rows, config2) => {
      return rows.map((cells, rowIndex) => {
        return cells.map((cell2, cellIndex) => {
          var _a2;
          const containingRange = (_a2 = config2.spanningCellManager) === null || _a2 === void 0 ? void 0 : _a2.getContainingRange({
            col: cellIndex,
            row: rowIndex
          }, { mapped: true });
          if (containingRange) {
            return cell2;
          }
          const { paddingLeft, paddingRight } = config2.columns[cellIndex];
          return (0, exports.padString)(cell2, paddingLeft, paddingRight);
        });
      });
    };
    exports.padTableData = padTableData;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/stringifyTableData.js
var require_stringifyTableData = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/stringifyTableData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringifyTableData = void 0;
    var utils_1 = require_utils();
    var stringifyTableData = (rows) => {
      return rows.map((cells) => {
        return cells.map((cell2) => {
          return (0, utils_1.normalizeString)(String(cell2));
        });
      });
    };
    exports.stringifyTableData = stringifyTableData;
  }
});

// ../../node_modules/.pnpm/lodash.truncate@4.4.2/node_modules/lodash.truncate/index.js
var require_lodash = __commonJS({
  "../../node_modules/.pnpm/lodash.truncate@4.4.2/node_modules/lodash.truncate/index.js"(exports, module) {
    var DEFAULT_TRUNC_LENGTH = 30;
    var DEFAULT_TRUNC_OMISSION = "...";
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var regexpTag = "[object RegExp]";
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var freeParseInt = parseInt;
    var freeGlobal = typeof window == "object" && window && window.Object === Object && window;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function baseProperty(key) {
      return function(object2) {
        return object2 == null ? void 0 : object2[key];
      };
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        result++;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root2.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseIsRegExp(value) {
      return isObject(value) && objectToString.call(value) == regexpTag;
    }
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function toString2(value) {
      return value == null ? "" : baseToString(value);
    }
    function truncate2(string, options2) {
      var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
      if (isObject(options2)) {
        var separator = "separator" in options2 ? options2.separator : separator;
        length = "length" in options2 ? toInteger(options2.length) : length;
        omission = "omission" in options2 ? baseToString(options2.omission) : omission;
      }
      string = toString2(string);
      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
      if (separator === void 0) {
        return result + omission;
      }
      if (strSymbols) {
        end += result.length - end;
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match, substring = result;
          if (!separator.global) {
            separator = RegExp(separator.source, toString2(reFlags.exec(separator)) + "g");
          }
          separator.lastIndex = 0;
          while (match = separator.exec(substring)) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === void 0 ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }
    module.exports = truncate2;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/truncateTableData.js
var require_truncateTableData = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/truncateTableData.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.truncateTableData = exports.truncateString = void 0;
    var lodash_truncate_1 = __importDefault(require_lodash());
    var truncateString = (input, length) => {
      return (0, lodash_truncate_1.default)(input, {
        length,
        omission: "\u2026"
      });
    };
    exports.truncateString = truncateString;
    var truncateTableData = (rows, truncates) => {
      return rows.map((cells) => {
        return cells.map((cell2, cellIndex) => {
          return (0, exports.truncateString)(cell2, truncates[cellIndex]);
        });
      });
    };
    exports.truncateTableData = truncateTableData;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/createStream.js
var require_createStream = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/createStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createStream = void 0;
    var alignTableData_1 = require_alignTableData();
    var calculateRowHeights_1 = require_calculateRowHeights();
    var drawBorder_1 = require_drawBorder();
    var drawRow_1 = require_drawRow();
    var makeStreamConfig_1 = require_makeStreamConfig();
    var mapDataUsingRowHeights_1 = require_mapDataUsingRowHeights();
    var padTableData_1 = require_padTableData();
    var stringifyTableData_1 = require_stringifyTableData();
    var truncateTableData_1 = require_truncateTableData();
    var utils_1 = require_utils();
    var prepareData = (data, config2) => {
      let rows = (0, stringifyTableData_1.stringifyTableData)(data);
      rows = (0, truncateTableData_1.truncateTableData)(rows, (0, utils_1.extractTruncates)(config2));
      const rowHeights = (0, calculateRowHeights_1.calculateRowHeights)(rows, config2);
      rows = (0, mapDataUsingRowHeights_1.mapDataUsingRowHeights)(rows, rowHeights, config2);
      rows = (0, alignTableData_1.alignTableData)(rows, config2);
      rows = (0, padTableData_1.padTableData)(rows, config2);
      return rows;
    };
    var create = (row, columnWidths, config2) => {
      const rows = prepareData([row], config2);
      const body = rows.map((literalRow) => {
        return (0, drawRow_1.drawRow)(literalRow, config2);
      }).join("");
      let output;
      output = "";
      output += (0, drawBorder_1.drawBorderTop)(columnWidths, config2);
      output += body;
      output += (0, drawBorder_1.drawBorderBottom)(columnWidths, config2);
      output = output.trimEnd();
      process.stdout.write(output);
    };
    var append = (row, columnWidths, config2) => {
      const rows = prepareData([row], config2);
      const body = rows.map((literalRow) => {
        return (0, drawRow_1.drawRow)(literalRow, config2);
      }).join("");
      let output = "";
      const bottom = (0, drawBorder_1.drawBorderBottom)(columnWidths, config2);
      if (bottom !== "\n") {
        output = "\r\x1B[K";
      }
      output += (0, drawBorder_1.drawBorderJoin)(columnWidths, config2);
      output += body;
      output += bottom;
      output = output.trimEnd();
      process.stdout.write(output);
    };
    var createStream = (userConfig) => {
      const config2 = (0, makeStreamConfig_1.makeStreamConfig)(userConfig);
      const columnWidths = Object.values(config2.columns).map((column) => {
        return column.width + column.paddingLeft + column.paddingRight;
      });
      let empty = true;
      return {
        write: (row) => {
          if (row.length !== config2.columnCount) {
            throw new Error("Row cell count does not match the config.columnCount.");
          }
          if (empty) {
            empty = false;
            create(row, columnWidths, config2);
          } else {
            append(row, columnWidths, config2);
          }
        }
      };
    };
    exports.createStream = createStream;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateOutputColumnWidths.js
var require_calculateOutputColumnWidths = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateOutputColumnWidths.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateOutputColumnWidths = void 0;
    var calculateOutputColumnWidths = (config2) => {
      return config2.columns.map((col) => {
        return col.paddingLeft + col.width + col.paddingRight;
      });
    };
    exports.calculateOutputColumnWidths = calculateOutputColumnWidths;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/drawTable.js
var require_drawTable = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/drawTable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.drawTable = void 0;
    var drawBorder_1 = require_drawBorder();
    var drawContent_1 = require_drawContent();
    var drawRow_1 = require_drawRow();
    var utils_1 = require_utils();
    var drawTable = (rows, outputColumnWidths, rowHeights, config2) => {
      const { drawHorizontalLine, singleLine } = config2;
      const contents = (0, utils_1.groupBySizes)(rows, rowHeights).map((group, groupIndex) => {
        return group.map((row) => {
          return (0, drawRow_1.drawRow)(row, {
            ...config2,
            rowIndex: groupIndex
          });
        }).join("");
      });
      return (0, drawContent_1.drawContent)({
        contents,
        drawSeparator: (index, size) => {
          if (index === 0 || index === size) {
            return drawHorizontalLine(index, size);
          }
          return !singleLine && drawHorizontalLine(index, size);
        },
        elementType: "row",
        rowIndex: -1,
        separatorGetter: (0, drawBorder_1.createTableBorderGetter)(outputColumnWidths, {
          ...config2,
          rowCount: contents.length
        }),
        spanningCellManager: config2.spanningCellManager
      });
    };
    exports.drawTable = drawTable;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/injectHeaderConfig.js
var require_injectHeaderConfig = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/injectHeaderConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectHeaderConfig = void 0;
    var injectHeaderConfig = (rows, config2) => {
      var _a2;
      let spanningCellConfig = (_a2 = config2.spanningCells) !== null && _a2 !== void 0 ? _a2 : [];
      const headerConfig = config2.header;
      const adjustedRows = [...rows];
      if (headerConfig) {
        spanningCellConfig = spanningCellConfig.map(({ row, ...rest }) => {
          return {
            ...rest,
            row: row + 1
          };
        });
        const { content, ...headerStyles } = headerConfig;
        spanningCellConfig.unshift({
          alignment: "center",
          col: 0,
          colSpan: rows[0].length,
          paddingLeft: 1,
          paddingRight: 1,
          row: 0,
          wrapWord: false,
          ...headerStyles
        });
        adjustedRows.unshift([content, ...Array.from({ length: rows[0].length - 1 }).fill("")]);
      }
      return [
        adjustedRows,
        spanningCellConfig
      ];
    };
    exports.injectHeaderConfig = injectHeaderConfig;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateMaximumColumnWidths.js
var require_calculateMaximumColumnWidths = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateMaximumColumnWidths.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateMaximumColumnWidths = exports.calculateMaximumCellWidth = void 0;
    var string_width_1 = __importDefault(require_string_width());
    var utils_1 = require_utils();
    var calculateMaximumCellWidth = (cell2) => {
      return Math.max(...cell2.split("\n").map(string_width_1.default));
    };
    exports.calculateMaximumCellWidth = calculateMaximumCellWidth;
    var calculateMaximumColumnWidths = (rows, spanningCellConfigs = []) => {
      const columnWidths = new Array(rows[0].length).fill(0);
      const rangeCoordinates = spanningCellConfigs.map(utils_1.calculateRangeCoordinate);
      const isSpanningCell = (rowIndex, columnIndex) => {
        return rangeCoordinates.some((rangeCoordinate) => {
          return (0, utils_1.isCellInRange)({
            col: columnIndex,
            row: rowIndex
          }, rangeCoordinate);
        });
      };
      rows.forEach((row, rowIndex) => {
        row.forEach((cell2, cellIndex) => {
          if (isSpanningCell(rowIndex, cellIndex)) {
            return;
          }
          columnWidths[cellIndex] = Math.max(columnWidths[cellIndex], (0, exports.calculateMaximumCellWidth)(cell2));
        });
      });
      return columnWidths;
    };
    exports.calculateMaximumColumnWidths = calculateMaximumColumnWidths;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/alignSpanningCell.js
var require_alignSpanningCell = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/alignSpanningCell.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.alignVerticalRangeContent = exports.wrapRangeContent = void 0;
    var alignString_1 = require_alignString();
    var mapDataUsingRowHeights_1 = require_mapDataUsingRowHeights();
    var padTableData_1 = require_padTableData();
    var truncateTableData_1 = require_truncateTableData();
    var utils_1 = require_utils();
    var wrapCell_1 = require_wrapCell();
    var wrapRangeContent = (rangeConfig, rangeWidth, context) => {
      const { topLeft, paddingRight, paddingLeft, truncate: truncate2, wrapWord, alignment } = rangeConfig;
      const originalContent = context.rows[topLeft.row][topLeft.col];
      const contentWidth = rangeWidth - paddingLeft - paddingRight;
      return (0, wrapCell_1.wrapCell)((0, truncateTableData_1.truncateString)(originalContent, truncate2), contentWidth, wrapWord).map((line) => {
        const alignedLine = (0, alignString_1.alignString)(line, contentWidth, alignment);
        return (0, padTableData_1.padString)(alignedLine, paddingLeft, paddingRight);
      });
    };
    exports.wrapRangeContent = wrapRangeContent;
    var alignVerticalRangeContent = (range, content, context) => {
      const { rows, drawHorizontalLine, rowHeights } = context;
      const { topLeft, bottomRight, verticalAlignment } = range;
      if (rowHeights.length === 0) {
        return [];
      }
      const totalCellHeight = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row, bottomRight.row + 1));
      const totalBorderHeight = bottomRight.row - topLeft.row;
      const hiddenHorizontalBorderCount = (0, utils_1.sequence)(topLeft.row + 1, bottomRight.row).filter((horizontalBorderIndex) => {
        return !drawHorizontalLine(horizontalBorderIndex, rows.length);
      }).length;
      const availableRangeHeight = totalCellHeight + totalBorderHeight - hiddenHorizontalBorderCount;
      return (0, mapDataUsingRowHeights_1.padCellVertically)(content, availableRangeHeight, verticalAlignment).map((line) => {
        if (line.length === 0) {
          return " ".repeat(content[0].length);
        }
        return line;
      });
    };
    exports.alignVerticalRangeContent = alignVerticalRangeContent;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateSpanningCellWidth.js
var require_calculateSpanningCellWidth = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/calculateSpanningCellWidth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateSpanningCellWidth = void 0;
    var utils_1 = require_utils();
    var calculateSpanningCellWidth = (rangeConfig, dependencies) => {
      const { columnsConfig, drawVerticalLine } = dependencies;
      const { topLeft, bottomRight } = rangeConfig;
      const totalWidth = (0, utils_1.sumArray)(columnsConfig.slice(topLeft.col, bottomRight.col + 1).map(({ width }) => {
        return width;
      }));
      const totalPadding = topLeft.col === bottomRight.col ? columnsConfig[topLeft.col].paddingRight + columnsConfig[bottomRight.col].paddingLeft : (0, utils_1.sumArray)(columnsConfig.slice(topLeft.col, bottomRight.col + 1).map(({ paddingLeft, paddingRight }) => {
        return paddingLeft + paddingRight;
      }));
      const totalBorderWidths = bottomRight.col - topLeft.col;
      const totalHiddenVerticalBorders = (0, utils_1.sequence)(topLeft.col + 1, bottomRight.col).filter((verticalBorderIndex) => {
        return !drawVerticalLine(verticalBorderIndex, columnsConfig.length);
      }).length;
      return totalWidth + totalPadding + totalBorderWidths - totalHiddenVerticalBorders;
    };
    exports.calculateSpanningCellWidth = calculateSpanningCellWidth;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/makeRangeConfig.js
var require_makeRangeConfig = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/makeRangeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeRangeConfig = void 0;
    var utils_1 = require_utils();
    var makeRangeConfig = (spanningCellConfig, columnsConfig) => {
      var _a2;
      const { topLeft, bottomRight } = (0, utils_1.calculateRangeCoordinate)(spanningCellConfig);
      const cellConfig = {
        ...columnsConfig[topLeft.col],
        ...spanningCellConfig,
        paddingRight: (_a2 = spanningCellConfig.paddingRight) !== null && _a2 !== void 0 ? _a2 : columnsConfig[bottomRight.col].paddingRight
      };
      return {
        ...cellConfig,
        bottomRight,
        topLeft
      };
    };
    exports.makeRangeConfig = makeRangeConfig;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/spanningCellManager.js
var require_spanningCellManager = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/spanningCellManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSpanningCellManager = void 0;
    var alignSpanningCell_1 = require_alignSpanningCell();
    var calculateSpanningCellWidth_1 = require_calculateSpanningCellWidth();
    var makeRangeConfig_1 = require_makeRangeConfig();
    var utils_1 = require_utils();
    var findRangeConfig = (cell2, rangeConfigs) => {
      return rangeConfigs.find((rangeCoordinate) => {
        return (0, utils_1.isCellInRange)(cell2, rangeCoordinate);
      });
    };
    var getContainingRange = (rangeConfig, context) => {
      const width = (0, calculateSpanningCellWidth_1.calculateSpanningCellWidth)(rangeConfig, context);
      const wrappedContent = (0, alignSpanningCell_1.wrapRangeContent)(rangeConfig, width, context);
      const alignedContent = (0, alignSpanningCell_1.alignVerticalRangeContent)(rangeConfig, wrappedContent, context);
      const getCellContent = (rowIndex) => {
        const { topLeft } = rangeConfig;
        const { drawHorizontalLine, rowHeights } = context;
        const totalWithinHorizontalBorderHeight = rowIndex - topLeft.row;
        const totalHiddenHorizontalBorderHeight = (0, utils_1.sequence)(topLeft.row + 1, rowIndex).filter((index) => {
          return !(drawHorizontalLine === null || drawHorizontalLine === void 0 ? void 0 : drawHorizontalLine(index, rowHeights.length));
        }).length;
        const offset = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row, rowIndex)) + totalWithinHorizontalBorderHeight - totalHiddenHorizontalBorderHeight;
        return alignedContent.slice(offset, offset + rowHeights[rowIndex]);
      };
      const getBorderContent = (borderIndex) => {
        const { topLeft } = rangeConfig;
        const offset = (0, utils_1.sumArray)(context.rowHeights.slice(topLeft.row, borderIndex)) + (borderIndex - topLeft.row - 1);
        return alignedContent[offset];
      };
      return {
        ...rangeConfig,
        extractBorderContent: getBorderContent,
        extractCellContent: getCellContent,
        height: wrappedContent.length,
        width
      };
    };
    var inSameRange = (cell1, cell2, ranges) => {
      const range1 = findRangeConfig(cell1, ranges);
      const range2 = findRangeConfig(cell2, ranges);
      if (range1 && range2) {
        return (0, utils_1.areCellEqual)(range1.topLeft, range2.topLeft);
      }
      return false;
    };
    var hashRange = (range) => {
      const { row, col } = range.topLeft;
      return `${row}/${col}`;
    };
    var createSpanningCellManager = (parameters) => {
      const { spanningCellConfigs, columnsConfig } = parameters;
      const ranges = spanningCellConfigs.map((config2) => {
        return (0, makeRangeConfig_1.makeRangeConfig)(config2, columnsConfig);
      });
      const rangeCache = {};
      let rowHeights = [];
      return {
        getContainingRange: (cell2, options2) => {
          var _a2;
          const originalRow = (options2 === null || options2 === void 0 ? void 0 : options2.mapped) ? (0, utils_1.findOriginalRowIndex)(rowHeights, cell2.row) : cell2.row;
          const range = findRangeConfig({
            ...cell2,
            row: originalRow
          }, ranges);
          if (!range) {
            return void 0;
          }
          if (rowHeights.length === 0) {
            return getContainingRange(range, {
              ...parameters,
              rowHeights
            });
          }
          const hash = hashRange(range);
          (_a2 = rangeCache[hash]) !== null && _a2 !== void 0 ? _a2 : rangeCache[hash] = getContainingRange(range, {
            ...parameters,
            rowHeights
          });
          return rangeCache[hash];
        },
        inSameRange: (cell1, cell2) => {
          return inSameRange(cell1, cell2, ranges);
        },
        rowHeights,
        setRowHeights: (_rowHeights) => {
          rowHeights = _rowHeights;
        }
      };
    };
    exports.createSpanningCellManager = createSpanningCellManager;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/validateSpanningCellConfig.js
var require_validateSpanningCellConfig = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/validateSpanningCellConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateSpanningCellConfig = void 0;
    var utils_1 = require_utils();
    var inRange = (start, end, value) => {
      return start <= value && value <= end;
    };
    var validateSpanningCellConfig = (rows, configs) => {
      const [nRow, nCol] = [rows.length, rows[0].length];
      configs.forEach((config2, configIndex) => {
        const { colSpan, rowSpan } = config2;
        if (colSpan === void 0 && rowSpan === void 0) {
          throw new Error(`Expect at least colSpan or rowSpan is provided in config.spanningCells[${configIndex}]`);
        }
        if (colSpan !== void 0 && colSpan < 1) {
          throw new Error(`Expect colSpan is not equal zero, instead got: ${colSpan} in config.spanningCells[${configIndex}]`);
        }
        if (rowSpan !== void 0 && rowSpan < 1) {
          throw new Error(`Expect rowSpan is not equal zero, instead got: ${rowSpan} in config.spanningCells[${configIndex}]`);
        }
      });
      const rangeCoordinates = configs.map(utils_1.calculateRangeCoordinate);
      rangeCoordinates.forEach(({ topLeft, bottomRight }, rangeIndex) => {
        if (!inRange(0, nCol - 1, topLeft.col) || !inRange(0, nRow - 1, topLeft.row) || !inRange(0, nCol - 1, bottomRight.col) || !inRange(0, nRow - 1, bottomRight.row)) {
          throw new Error(`Some cells in config.spanningCells[${rangeIndex}] are out of the table`);
        }
      });
      const configOccupy = Array.from({ length: nRow }, () => {
        return Array.from({ length: nCol });
      });
      rangeCoordinates.forEach(({ topLeft, bottomRight }, rangeIndex) => {
        (0, utils_1.sequence)(topLeft.row, bottomRight.row).forEach((row) => {
          (0, utils_1.sequence)(topLeft.col, bottomRight.col).forEach((col) => {
            if (configOccupy[row][col] !== void 0) {
              throw new Error(`Spanning cells in config.spanningCells[${configOccupy[row][col]}] and config.spanningCells[${rangeIndex}] are overlap each other`);
            }
            configOccupy[row][col] = rangeIndex;
          });
        });
      });
    };
    exports.validateSpanningCellConfig = validateSpanningCellConfig;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/makeTableConfig.js
var require_makeTableConfig = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/makeTableConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTableConfig = void 0;
    var calculateMaximumColumnWidths_1 = require_calculateMaximumColumnWidths();
    var spanningCellManager_1 = require_spanningCellManager();
    var utils_1 = require_utils();
    var validateConfig_1 = require_validateConfig();
    var validateSpanningCellConfig_1 = require_validateSpanningCellConfig();
    var makeColumnsConfig = (rows, columns, columnDefault, spanningCellConfigs) => {
      const columnWidths = (0, calculateMaximumColumnWidths_1.calculateMaximumColumnWidths)(rows, spanningCellConfigs);
      return rows[0].map((_, columnIndex) => {
        return {
          alignment: "left",
          paddingLeft: 1,
          paddingRight: 1,
          truncate: Number.POSITIVE_INFINITY,
          verticalAlignment: "top",
          width: columnWidths[columnIndex],
          wrapWord: false,
          ...columnDefault,
          ...columns === null || columns === void 0 ? void 0 : columns[columnIndex]
        };
      });
    };
    var makeTableConfig = (rows, config2 = {}, injectedSpanningCellConfig) => {
      var _a2, _b, _c, _d, _e;
      (0, validateConfig_1.validateConfig)("config.json", config2);
      (0, validateSpanningCellConfig_1.validateSpanningCellConfig)(rows, (_a2 = config2.spanningCells) !== null && _a2 !== void 0 ? _a2 : []);
      const spanningCellConfigs = (_b = injectedSpanningCellConfig !== null && injectedSpanningCellConfig !== void 0 ? injectedSpanningCellConfig : config2.spanningCells) !== null && _b !== void 0 ? _b : [];
      const columnsConfig = makeColumnsConfig(rows, config2.columns, config2.columnDefault, spanningCellConfigs);
      const drawVerticalLine = (_c = config2.drawVerticalLine) !== null && _c !== void 0 ? _c : () => {
        return true;
      };
      const drawHorizontalLine = (_d = config2.drawHorizontalLine) !== null && _d !== void 0 ? _d : () => {
        return true;
      };
      return {
        ...config2,
        border: (0, utils_1.makeBorderConfig)(config2.border),
        columns: columnsConfig,
        drawHorizontalLine,
        drawVerticalLine,
        singleLine: (_e = config2.singleLine) !== null && _e !== void 0 ? _e : false,
        spanningCellManager: (0, spanningCellManager_1.createSpanningCellManager)({
          columnsConfig,
          drawHorizontalLine,
          drawVerticalLine,
          rows,
          spanningCellConfigs
        })
      };
    };
    exports.makeTableConfig = makeTableConfig;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/validateTableData.js
var require_validateTableData = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/validateTableData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateTableData = void 0;
    var utils_1 = require_utils();
    var validateTableData = (rows) => {
      if (!Array.isArray(rows)) {
        throw new TypeError("Table data must be an array.");
      }
      if (rows.length === 0) {
        throw new Error("Table must define at least one row.");
      }
      if (rows[0].length === 0) {
        throw new Error("Table must define at least one column.");
      }
      const columnNumber = rows[0].length;
      for (const row of rows) {
        if (!Array.isArray(row)) {
          throw new TypeError("Table row data must be an array.");
        }
        if (row.length !== columnNumber) {
          throw new Error("Table must have a consistent number of cells.");
        }
        for (const cell2 of row) {
          if (/[\u0001-\u0006\u0008\u0009\u000B-\u001A]/.test((0, utils_1.normalizeString)(String(cell2)))) {
            throw new Error("Table data must not contain control characters.");
          }
        }
      }
    };
    exports.validateTableData = validateTableData;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/table.js
var require_table = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/table.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.table = void 0;
    var alignTableData_1 = require_alignTableData();
    var calculateOutputColumnWidths_1 = require_calculateOutputColumnWidths();
    var calculateRowHeights_1 = require_calculateRowHeights();
    var drawTable_1 = require_drawTable();
    var injectHeaderConfig_1 = require_injectHeaderConfig();
    var makeTableConfig_1 = require_makeTableConfig();
    var mapDataUsingRowHeights_1 = require_mapDataUsingRowHeights();
    var padTableData_1 = require_padTableData();
    var stringifyTableData_1 = require_stringifyTableData();
    var truncateTableData_1 = require_truncateTableData();
    var utils_1 = require_utils();
    var validateTableData_1 = require_validateTableData();
    var table2 = (data, userConfig = {}) => {
      (0, validateTableData_1.validateTableData)(data);
      let rows = (0, stringifyTableData_1.stringifyTableData)(data);
      const [injectedRows, injectedSpanningCellConfig] = (0, injectHeaderConfig_1.injectHeaderConfig)(rows, userConfig);
      const config2 = (0, makeTableConfig_1.makeTableConfig)(injectedRows, userConfig, injectedSpanningCellConfig);
      rows = (0, truncateTableData_1.truncateTableData)(injectedRows, (0, utils_1.extractTruncates)(config2));
      const rowHeights = (0, calculateRowHeights_1.calculateRowHeights)(rows, config2);
      config2.spanningCellManager.setRowHeights(rowHeights);
      rows = (0, mapDataUsingRowHeights_1.mapDataUsingRowHeights)(rows, rowHeights, config2);
      rows = (0, alignTableData_1.alignTableData)(rows, config2);
      rows = (0, padTableData_1.padTableData)(rows, config2);
      const outputColumnWidths = (0, calculateOutputColumnWidths_1.calculateOutputColumnWidths)(config2);
      return (0, drawTable_1.drawTable)(rows, outputColumnWidths, rowHeights, config2);
    };
    exports.table = table2;
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/types/api.js
var require_api = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/types/api.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/table@6.8.0/node_modules/table/dist/src/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBorderCharacters = exports.createStream = exports.table = void 0;
    var createStream_1 = require_createStream();
    Object.defineProperty(exports, "createStream", { enumerable: true, get: function() {
      return createStream_1.createStream;
    } });
    var getBorderCharacters_1 = require_getBorderCharacters();
    Object.defineProperty(exports, "getBorderCharacters", { enumerable: true, get: function() {
      return getBorderCharacters_1.getBorderCharacters;
    } });
    var table_1 = require_table();
    Object.defineProperty(exports, "table", { enumerable: true, get: function() {
      return table_1.table;
    } });
    __exportStar(require_api(), exports);
  }
});

// ../../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/symbols.js
var require_symbols = __commonJS({
  "../../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/symbols.js"(exports, module) {
    "use strict";
    var isHyper = typeof process !== "undefined" && process.env.TERM_PROGRAM === "Hyper";
    var isWindows = typeof process !== "undefined" && process.platform === "win32";
    var isLinux = typeof process !== "undefined" && process.platform === "linux";
    var common = {
      ballotDisabled: "\u2612",
      ballotOff: "\u2610",
      ballotOn: "\u2611",
      bullet: "\u2022",
      bulletWhite: "\u25E6",
      fullBlock: "\u2588",
      heart: "\u2764",
      identicalTo: "\u2261",
      line: "\u2500",
      mark: "\u203B",
      middot: "\xB7",
      minus: "\uFF0D",
      multiplication: "\xD7",
      obelus: "\xF7",
      pencilDownRight: "\u270E",
      pencilRight: "\u270F",
      pencilUpRight: "\u2710",
      percent: "%",
      pilcrow2: "\u2761",
      pilcrow: "\xB6",
      plusMinus: "\xB1",
      question: "?",
      section: "\xA7",
      starsOff: "\u2606",
      starsOn: "\u2605",
      upDownArrow: "\u2195"
    };
    var windows = Object.assign({}, common, {
      check: "\u221A",
      cross: "\xD7",
      ellipsisLarge: "...",
      ellipsis: "...",
      info: "i",
      questionSmall: "?",
      pointer: ">",
      pointerSmall: "\xBB",
      radioOff: "( )",
      radioOn: "(*)",
      warning: "\u203C"
    });
    var other = Object.assign({}, common, {
      ballotCross: "\u2718",
      check: "\u2714",
      cross: "\u2716",
      ellipsisLarge: "\u22EF",
      ellipsis: "\u2026",
      info: "\u2139",
      questionFull: "\uFF1F",
      questionSmall: "\uFE56",
      pointer: isLinux ? "\u25B8" : "\u276F",
      pointerSmall: isLinux ? "\u2023" : "\u203A",
      radioOff: "\u25EF",
      radioOn: "\u25C9",
      warning: "\u26A0"
    });
    module.exports = isWindows && !isHyper ? windows : other;
    Reflect.defineProperty(module.exports, "common", { enumerable: false, value: common });
    Reflect.defineProperty(module.exports, "windows", { enumerable: false, value: windows });
    Reflect.defineProperty(module.exports, "other", { enumerable: false, value: other });
  }
});

// ../../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/index.js
var require_ansi_colors = __commonJS({
  "../../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/index.js"(exports, module) {
    "use strict";
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;
    var hasColor = () => {
      if (typeof process !== "undefined") {
        return process.env.FORCE_COLOR !== "0";
      }
      return false;
    };
    var create = () => {
      const colors = {
        enabled: hasColor(),
        visible: true,
        styles: {},
        keys: {}
      };
      const ansi = (style2) => {
        let open = style2.open = `\x1B[${style2.codes[0]}m`;
        let close = style2.close = `\x1B[${style2.codes[1]}m`;
        let regex = style2.regex = new RegExp(`\\u001b\\[${style2.codes[1]}m`, "g");
        style2.wrap = (input, newline) => {
          if (input.includes(close))
            input = input.replace(regex, close + open);
          let output = open + input + close;
          return newline ? output.replace(/\r*\n/g, `${close}$&${open}`) : output;
        };
        return style2;
      };
      const wrap = (style2, input, newline) => {
        return typeof style2 === "function" ? style2(input) : style2.wrap(input, newline);
      };
      const style = (input, stack) => {
        if (input === "" || input == null)
          return "";
        if (colors.enabled === false)
          return input;
        if (colors.visible === false)
          return "";
        let str = "" + input;
        let nl = str.includes("\n");
        let n = stack.length;
        if (n > 0 && stack.includes("unstyle")) {
          stack = [.../* @__PURE__ */ new Set(["unstyle", ...stack])].reverse();
        }
        while (n-- > 0)
          str = wrap(colors.styles[stack[n]], str, nl);
        return str;
      };
      const define2 = (name, codes, type) => {
        colors.styles[name] = ansi({ name, codes });
        let keys = colors.keys[type] || (colors.keys[type] = []);
        keys.push(name);
        Reflect.defineProperty(colors, name, {
          configurable: true,
          enumerable: true,
          set(value) {
            colors.alias(name, value);
          },
          get() {
            let color = (input) => style(input, color.stack);
            Reflect.setPrototypeOf(color, colors);
            color.stack = this.stack ? this.stack.concat(name) : [name];
            return color;
          }
        });
      };
      define2("reset", [0, 0], "modifier");
      define2("bold", [1, 22], "modifier");
      define2("dim", [2, 22], "modifier");
      define2("italic", [3, 23], "modifier");
      define2("underline", [4, 24], "modifier");
      define2("inverse", [7, 27], "modifier");
      define2("hidden", [8, 28], "modifier");
      define2("strikethrough", [9, 29], "modifier");
      define2("black", [30, 39], "color");
      define2("red", [31, 39], "color");
      define2("green", [32, 39], "color");
      define2("yellow", [33, 39], "color");
      define2("blue", [34, 39], "color");
      define2("magenta", [35, 39], "color");
      define2("cyan", [36, 39], "color");
      define2("white", [37, 39], "color");
      define2("gray", [90, 39], "color");
      define2("grey", [90, 39], "color");
      define2("bgBlack", [40, 49], "bg");
      define2("bgRed", [41, 49], "bg");
      define2("bgGreen", [42, 49], "bg");
      define2("bgYellow", [43, 49], "bg");
      define2("bgBlue", [44, 49], "bg");
      define2("bgMagenta", [45, 49], "bg");
      define2("bgCyan", [46, 49], "bg");
      define2("bgWhite", [47, 49], "bg");
      define2("blackBright", [90, 39], "bright");
      define2("redBright", [91, 39], "bright");
      define2("greenBright", [92, 39], "bright");
      define2("yellowBright", [93, 39], "bright");
      define2("blueBright", [94, 39], "bright");
      define2("magentaBright", [95, 39], "bright");
      define2("cyanBright", [96, 39], "bright");
      define2("whiteBright", [97, 39], "bright");
      define2("bgBlackBright", [100, 49], "bgBright");
      define2("bgRedBright", [101, 49], "bgBright");
      define2("bgGreenBright", [102, 49], "bgBright");
      define2("bgYellowBright", [103, 49], "bgBright");
      define2("bgBlueBright", [104, 49], "bgBright");
      define2("bgMagentaBright", [105, 49], "bgBright");
      define2("bgCyanBright", [106, 49], "bgBright");
      define2("bgWhiteBright", [107, 49], "bgBright");
      colors.ansiRegex = ANSI_REGEX;
      colors.hasColor = colors.hasAnsi = (str) => {
        colors.ansiRegex.lastIndex = 0;
        return typeof str === "string" && str !== "" && colors.ansiRegex.test(str);
      };
      colors.alias = (name, color) => {
        let fn = typeof color === "string" ? colors[color] : color;
        if (typeof fn !== "function") {
          throw new TypeError("Expected alias to be the name of an existing color (string) or a function");
        }
        if (!fn.stack) {
          Reflect.defineProperty(fn, "name", { value: name });
          colors.styles[name] = fn;
          fn.stack = [name];
        }
        Reflect.defineProperty(colors, name, {
          configurable: true,
          enumerable: true,
          set(value) {
            colors.alias(name, value);
          },
          get() {
            let color2 = (input) => style(input, color2.stack);
            Reflect.setPrototypeOf(color2, colors);
            color2.stack = this.stack ? this.stack.concat(fn.stack) : fn.stack;
            return color2;
          }
        });
      };
      colors.theme = (custom2) => {
        if (!isObject(custom2))
          throw new TypeError("Expected theme to be an object");
        for (let name of Object.keys(custom2)) {
          colors.alias(name, custom2[name]);
        }
        return colors;
      };
      colors.alias("unstyle", (str) => {
        if (typeof str === "string" && str !== "") {
          colors.ansiRegex.lastIndex = 0;
          return str.replace(colors.ansiRegex, "");
        }
        return "";
      });
      colors.alias("noop", (str) => str);
      colors.none = colors.clear = colors.noop;
      colors.stripColor = colors.unstyle;
      colors.symbols = require_symbols();
      colors.define = define2;
      return colors;
    };
    module.exports = create();
    module.exports.create = create;
  }
});

// ../core/display.ts
var display_exports = {};
__export(display_exports, {
  c: () => import_ansi_colors.default,
  err: () => err,
  errln: () => errln,
  out: () => out,
  outln: () => outln,
  stderr: () => stderr,
  stdout: () => stdout,
  write: () => write
});
function write(stream, s) {
  const data = textEncoder.encode(s);
  stream.write(data, null);
}
function out(s) {
  if (s !== void 0) {
    write(stdout, s);
  }
}
function outln(s) {
  out(`${s ?? ""}
`);
}
function err(s) {
  if (s !== void 0) {
    write(stderr, s);
  }
}
function errln(s) {
  err(`${s ?? ""}
`);
}
var import_ansi_colors, textEncoder, stdout, stderr;
var init_display = __esm({
  "../core/display.ts"() {
    "use strict";
    init_gi();
    import_ansi_colors = __toESM(require_ansi_colors(), 1);
    import_ansi_colors.default.enabled = true;
    textEncoder = /* @__PURE__ */ new TextEncoder();
    stdout = /* @__PURE__ */ new Gio.UnixOutputStream({ fd: 1 });
    stderr = /* @__PURE__ */ new Gio.UnixOutputStream({ fd: 2 });
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64.js
var require_base64 = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64.js"(exports) {
    var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    exports.encode = function(number) {
      if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
      }
      throw new TypeError("Must be between 0 and 63: " + number);
    };
    exports.decode = function(charCode) {
      var bigA = 65;
      var bigZ = 90;
      var littleA = 97;
      var littleZ = 122;
      var zero = 48;
      var nine = 57;
      var plus = 43;
      var slash = 47;
      var littleOffset = 26;
      var numberOffset = 52;
      if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
      }
      if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
      }
      if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
      }
      if (charCode == plus) {
        return 62;
      }
      if (charCode == slash) {
        return 63;
      }
      return -1;
    };
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64-vlq.js
var require_base64_vlq = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64-vlq.js"(exports) {
    var base64 = require_base64();
    var VLQ_BASE_SHIFT = 5;
    var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
    var VLQ_BASE_MASK = VLQ_BASE - 1;
    var VLQ_CONTINUATION_BIT = VLQ_BASE;
    function toVLQSigned(aValue) {
      return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
    }
    function fromVLQSigned(aValue) {
      var isNegative = (aValue & 1) === 1;
      var shifted = aValue >> 1;
      return isNegative ? -shifted : shifted;
    }
    exports.encode = function base64VLQ_encode(aValue) {
      var encoded = "";
      var digit;
      var vlq = toVLQSigned(aValue);
      do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
          digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
      } while (vlq > 0);
      return encoded;
    };
    exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
      var strLen = aStr.length;
      var result = 0;
      var shift = 0;
      var continuation, digit;
      do {
        if (aIndex >= strLen) {
          throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
          throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
      } while (continuation);
      aOutParam.value = fromVLQSigned(result);
      aOutParam.rest = aIndex;
    };
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js
var require_util = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js"(exports) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports.urlGenerate = urlGenerate;
    var MAX_CACHED_INPUTS = 32;
    function lruMemoize(f) {
      var cache = [];
      return function(input) {
        for (var i = 0; i < cache.length; i++) {
          if (cache[i].input === input) {
            var temp = cache[0];
            cache[0] = cache[i];
            cache[i] = temp;
            return cache[0].result;
          }
        }
        var result = f(input);
        cache.unshift({
          input,
          result
        });
        if (cache.length > MAX_CACHED_INPUTS) {
          cache.pop();
        }
        return result;
      };
    }
    var normalize = lruMemoize(function normalize2(aPath) {
      var path = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path = url.path;
      }
      var isAbsolute = exports.isAbsolute(path);
      var parts = [];
      var start = 0;
      var i = 0;
      while (true) {
        start = i;
        i = path.indexOf("/", start);
        if (i === -1) {
          parts.push(path.slice(start));
          break;
        } else {
          parts.push(path.slice(start, i));
          while (i < path.length && path[i] === "/") {
            i++;
          }
        }
      }
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path = parts.join("/");
      if (path === "") {
        path = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path;
        return urlGenerate(url);
      }
      return path;
    });
    exports.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports.join = join;
    exports.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports.relative = relative;
    var supportsNullProto = function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByOriginalPositionsNoSource(mappingA, mappingB, onlyCompareOriginal) {
      var cmp;
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositionsNoSource = compareByOriginalPositionsNoSource;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function compareByGeneratedPositionsDeflatedNoLine(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflatedNoLine = compareByGeneratedPositionsDeflatedNoLine;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index = parsed.path.lastIndexOf("/");
          if (index >= 0) {
            parsed.path = parsed.path.substring(0, index + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports.computeSourceURL = computeSourceURL;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/array-set.js
var require_array_set = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/array-set.js"(exports) {
    var util2 = require_util();
    var has = Object.prototype.hasOwnProperty;
    var hasNativeMap = typeof Map !== "undefined";
    function ArraySet() {
      this._array = [];
      this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
    }
    ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
      var set = new ArraySet();
      for (var i = 0, len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
      }
      return set;
    };
    ArraySet.prototype.size = function ArraySet_size() {
      return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    };
    ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
      var sStr = hasNativeMap ? aStr : util2.toSetString(aStr);
      var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
      var idx = this._array.length;
      if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
      }
      if (!isDuplicate) {
        if (hasNativeMap) {
          this._set.set(aStr, idx);
        } else {
          this._set[sStr] = idx;
        }
      }
    };
    ArraySet.prototype.has = function ArraySet_has(aStr) {
      if (hasNativeMap) {
        return this._set.has(aStr);
      } else {
        var sStr = util2.toSetString(aStr);
        return has.call(this._set, sStr);
      }
    };
    ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
      if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
          return idx;
        }
      } else {
        var sStr = util2.toSetString(aStr);
        if (has.call(this._set, sStr)) {
          return this._set[sStr];
        }
      }
      throw new Error('"' + aStr + '" is not in the set.');
    };
    ArraySet.prototype.at = function ArraySet_at(aIdx) {
      if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
      }
      throw new Error("No element indexed by " + aIdx);
    };
    ArraySet.prototype.toArray = function ArraySet_toArray() {
      return this._array.slice();
    };
    exports.ArraySet = ArraySet;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/mapping-list.js
var require_mapping_list = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/mapping-list.js"(exports) {
    var util2 = require_util();
    function generatedPositionAfter(mappingA, mappingB) {
      var lineA = mappingA.generatedLine;
      var lineB = mappingB.generatedLine;
      var columnA = mappingA.generatedColumn;
      var columnB = mappingB.generatedColumn;
      return lineB > lineA || lineB == lineA && columnB >= columnA || util2.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
    }
    function MappingList() {
      this._array = [];
      this._sorted = true;
      this._last = { generatedLine: -1, generatedColumn: 0 };
    }
    MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };
    MappingList.prototype.add = function MappingList_add(aMapping) {
      if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
      } else {
        this._sorted = false;
        this._array.push(aMapping);
      }
    };
    MappingList.prototype.toArray = function MappingList_toArray() {
      if (!this._sorted) {
        this._array.sort(util2.compareByGeneratedPositionsInflated);
        this._sorted = true;
      }
      return this._array;
    };
    exports.MappingList = MappingList;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-generator.js
var require_source_map_generator = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-generator.js"(exports) {
    var base64VLQ = require_base64_vlq();
    var util2 = require_util();
    var ArraySet = require_array_set().ArraySet;
    var MappingList = require_mapping_list().MappingList;
    function SourceMapGenerator(aArgs) {
      if (!aArgs) {
        aArgs = {};
      }
      this._file = util2.getArg(aArgs, "file", null);
      this._sourceRoot = util2.getArg(aArgs, "sourceRoot", null);
      this._skipValidation = util2.getArg(aArgs, "skipValidation", false);
      this._sources = new ArraySet();
      this._names = new ArraySet();
      this._mappings = new MappingList();
      this._sourcesContents = null;
    }
    SourceMapGenerator.prototype._version = 3;
    SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot
      });
      aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };
        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util2.relative(sourceRoot, newMapping.source);
          }
          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };
          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }
        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) {
          sourceRelative = util2.relative(sourceRoot, sourceFile);
        }
        if (!generator._sources.has(sourceRelative)) {
          generator._sources.add(sourceRelative);
        }
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };
    SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
      var generated = util2.getArg(aArgs, "generated");
      var original = util2.getArg(aArgs, "original", null);
      var source = util2.getArg(aArgs, "source", null);
      var name = util2.getArg(aArgs, "name", null);
      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }
      if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
          this._sources.add(source);
        }
      }
      if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
          this._names.add(name);
        }
      }
      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source,
        name
      });
    };
    SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util2.relative(this._sourceRoot, source);
      }
      if (aSourceContent != null) {
        if (!this._sourcesContents) {
          this._sourcesContents = /* @__PURE__ */ Object.create(null);
        }
        this._sourcesContents[util2.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        delete this._sourcesContents[util2.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };
    SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
          );
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      if (sourceRoot != null) {
        sourceFile = util2.relative(sourceRoot, sourceFile);
      }
      var newSources = new ArraySet();
      var newNames = new ArraySet();
      this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util2.join(aSourceMapPath, mapping.source);
            }
            if (sourceRoot != null) {
              mapping.source = util2.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }
      }, this);
      this._sources = newSources;
      this._names = newNames;
      aSourceMapConsumer.sources.forEach(function(sourceFile2) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile2 = util2.join(aSourceMapPath, sourceFile2);
          }
          if (sourceRoot != null) {
            sourceFile2 = util2.relative(sourceRoot, sourceFile2);
          }
          this.setSourceContent(sourceFile2, content);
        }
      }, this);
    };
    SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
      if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
        );
      }
      if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
      } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
      } else {
        throw new Error("Invalid mapping: " + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };
    SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = "";
      var next;
      var mapping;
      var nameIdx;
      var sourceIdx;
      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            next += ";";
            previousGeneratedLine++;
          }
        } else {
          if (i > 0) {
            if (!util2.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            next += ",";
          }
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
          sourceIdx = this._sources.indexOf(mapping.source);
          next += base64VLQ.encode(sourceIdx - previousSource);
          previousSource = sourceIdx;
          next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;
          next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;
          if (mapping.name != null) {
            nameIdx = this._names.indexOf(mapping.name);
            next += base64VLQ.encode(nameIdx - previousName);
            previousName = nameIdx;
          }
        }
        result += next;
      }
      return result;
    };
    SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function(source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util2.relative(aSourceRoot, source);
        }
        var key = util2.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
      }, this);
    };
    SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }
      return map;
    };
    SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };
    exports.SourceMapGenerator = SourceMapGenerator;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/binary-search.js
var require_binary_search = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/binary-search.js"(exports) {
    exports.GREATEST_LOWER_BOUND = 1;
    exports.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(
        -1,
        aHaystack.length,
        aNeedle,
        aHaystack,
        aCompare,
        aBias || exports.GREATEST_LOWER_BOUND
      );
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/quick-sort.js
var require_quick_sort = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/quick-sort.js"(exports) {
    function SortTemplate(comparator) {
      function swap(ary, x, y) {
        var temp = ary[x];
        ary[x] = ary[y];
        ary[y] = temp;
      }
      function randomIntInRange(low, high) {
        return Math.round(low + Math.random() * (high - low));
      }
      function doQuickSort(ary, comparator2, p, r) {
        if (p < r) {
          var pivotIndex = randomIntInRange(p, r);
          var i = p - 1;
          swap(ary, pivotIndex, r);
          var pivot = ary[r];
          for (var j = p; j < r; j++) {
            if (comparator2(ary[j], pivot, false) <= 0) {
              i += 1;
              swap(ary, i, j);
            }
          }
          swap(ary, i + 1, j);
          var q = i + 1;
          doQuickSort(ary, comparator2, p, q - 1);
          doQuickSort(ary, comparator2, q + 1, r);
        }
      }
      return doQuickSort;
    }
    function cloneSort(comparator) {
      let template = SortTemplate.toString();
      let templateFn = new Function(`return ${template}`)();
      return templateFn(comparator);
    }
    var sortCache = /* @__PURE__ */ new WeakMap();
    exports.quickSort = function(ary, comparator, start = 0) {
      let doQuickSort = sortCache.get(comparator);
      if (doQuickSort === void 0) {
        doQuickSort = cloneSort(comparator);
        sortCache.set(comparator, doQuickSort);
      }
      doQuickSort(ary, comparator, start, ary.length - 1);
    };
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-consumer.js
var require_source_map_consumer = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-consumer.js"(exports) {
    var util2 = require_util();
    var binarySearch = require_binary_search();
    var ArraySet = require_array_set().ArraySet;
    var base64VLQ = require_base64_vlq();
    var quickSort = require_quick_sort().quickSort;
    function SourceMapConsumer2(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util2.parseSourceMapInput(aSourceMap);
      }
      return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
    }
    SourceMapConsumer2.fromSourceMap = function(aSourceMap, aSourceMapURL) {
      return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
    };
    SourceMapConsumer2.prototype._version = 3;
    SourceMapConsumer2.prototype.__generatedMappings = null;
    Object.defineProperty(SourceMapConsumer2.prototype, "_generatedMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__generatedMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
      }
    });
    SourceMapConsumer2.prototype.__originalMappings = null;
    Object.defineProperty(SourceMapConsumer2.prototype, "_originalMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__originalMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
      }
    });
    SourceMapConsumer2.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
      var c2 = aStr.charAt(index);
      return c2 === ";" || c2 === ",";
    };
    SourceMapConsumer2.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };
    SourceMapConsumer2.GENERATED_ORDER = 1;
    SourceMapConsumer2.ORIGINAL_ORDER = 2;
    SourceMapConsumer2.GREATEST_LOWER_BOUND = 1;
    SourceMapConsumer2.LEAST_UPPER_BOUND = 2;
    SourceMapConsumer2.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order2 = aOrder || SourceMapConsumer2.GENERATED_ORDER;
      var mappings;
      switch (order2) {
        case SourceMapConsumer2.GENERATED_ORDER:
          mappings = this._generatedMappings;
          break;
        case SourceMapConsumer2.ORIGINAL_ORDER:
          mappings = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var sourceRoot = this.sourceRoot;
      var boundCallback = aCallback.bind(context);
      var names = this._names;
      var sources = this._sources;
      var sourceMapURL = this._sourceMapURL;
      for (var i = 0, n = mappings.length; i < n; i++) {
        var mapping = mappings[i];
        var source = mapping.source === null ? null : sources.at(mapping.source);
        source = util2.computeSourceURL(sourceRoot, source, sourceMapURL);
        boundCallback({
          source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : names.at(mapping.name)
        });
      }
    };
    SourceMapConsumer2.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util2.getArg(aArgs, "line");
      var needle = {
        source: util2.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util2.getArg(aArgs, "column", 0)
      };
      needle.source = this._findSourceIndex(needle.source);
      if (needle.source < 0) {
        return [];
      }
      var mappings = [];
      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util2.compareByOriginalPositions,
        binarySearch.LEAST_UPPER_BOUND
      );
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === void 0) {
          var originalLine = mapping.originalLine;
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util2.getArg(mapping, "generatedLine", null),
              column: util2.getArg(mapping, "generatedColumn", null),
              lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        } else {
          var originalColumn = mapping.originalColumn;
          while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util2.getArg(mapping, "generatedLine", null),
              column: util2.getArg(mapping, "generatedColumn", null),
              lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        }
      }
      return mappings;
    };
    exports.SourceMapConsumer = SourceMapConsumer2;
    function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util2.parseSourceMapInput(aSourceMap);
      }
      var version2 = util2.getArg(sourceMap, "version");
      var sources = util2.getArg(sourceMap, "sources");
      var names = util2.getArg(sourceMap, "names", []);
      var sourceRoot = util2.getArg(sourceMap, "sourceRoot", null);
      var sourcesContent = util2.getArg(sourceMap, "sourcesContent", null);
      var mappings = util2.getArg(sourceMap, "mappings");
      var file = util2.getArg(sourceMap, "file", null);
      if (version2 != this._version) {
        throw new Error("Unsupported version: " + version2);
      }
      if (sourceRoot) {
        sourceRoot = util2.normalize(sourceRoot);
      }
      sources = sources.map(String).map(util2.normalize).map(function(source) {
        return sourceRoot && util2.isAbsolute(sourceRoot) && util2.isAbsolute(source) ? util2.relative(sourceRoot, source) : source;
      });
      this._names = ArraySet.fromArray(names.map(String), true);
      this._sources = ArraySet.fromArray(sources, true);
      this._absoluteSources = this._sources.toArray().map(function(s) {
        return util2.computeSourceURL(sourceRoot, s, aSourceMapURL);
      });
      this.sourceRoot = sourceRoot;
      this.sourcesContent = sourcesContent;
      this._mappings = mappings;
      this._sourceMapURL = aSourceMapURL;
      this.file = file;
    }
    BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer2.prototype);
    BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer2;
    BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util2.relative(this.sourceRoot, relativeSource);
      }
      if (this._sources.has(relativeSource)) {
        return this._sources.indexOf(relativeSource);
      }
      var i;
      for (i = 0; i < this._absoluteSources.length; ++i) {
        if (this._absoluteSources[i] == aSource) {
          return i;
        }
      }
      return -1;
    };
    BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);
      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(
        smc._sources.toArray(),
        smc.sourceRoot
      );
      smc.file = aSourceMap._file;
      smc._sourceMapURL = aSourceMapURL;
      smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util2.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
      });
      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];
      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping();
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;
          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }
          destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
      }
      quickSort(smc.__originalMappings, util2.compareByOriginalPositions);
      return smc;
    };
    BasicSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
      get: function() {
        return this._absoluteSources.slice();
      }
    });
    function Mapping() {
      this.generatedLine = 0;
      this.generatedColumn = 0;
      this.source = null;
      this.originalLine = null;
      this.originalColumn = null;
      this.name = null;
    }
    var compareGenerated = util2.compareByGeneratedPositionsDeflatedNoLine;
    function sortGenerated(array, start) {
      let l = array.length;
      let n = array.length - start;
      if (n <= 1) {
        return;
      } else if (n == 2) {
        let a = array[start];
        let b = array[start + 1];
        if (compareGenerated(a, b) > 0) {
          array[start] = b;
          array[start + 1] = a;
        }
      } else if (n < 20) {
        for (let i = start; i < l; i++) {
          for (let j = i; j > start; j--) {
            let a = array[j - 1];
            let b = array[j];
            if (compareGenerated(a, b) <= 0) {
              break;
            }
            array[j - 1] = b;
            array[j] = a;
          }
        }
      } else {
        quickSort(array, compareGenerated, start);
      }
    }
    BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;
      let subarrayStart = 0;
      while (index < length) {
        if (aStr.charAt(index) === ";") {
          generatedLine++;
          index++;
          previousGeneratedColumn = 0;
          sortGenerated(generatedMappings, subarrayStart);
          subarrayStart = generatedMappings.length;
        } else if (aStr.charAt(index) === ",") {
          index++;
        } else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;
          for (end = index; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index, end);
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }
          if (segment.length === 2) {
            throw new Error("Found a source, but no line and column");
          }
          if (segment.length === 3) {
            throw new Error("Found a source and line, but no column");
          }
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;
          if (segment.length > 1) {
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            mapping.originalLine += 1;
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;
            if (segment.length > 4) {
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }
          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === "number") {
            let currentSource = mapping.source;
            while (originalMappings.length <= currentSource) {
              originalMappings.push(null);
            }
            if (originalMappings[currentSource] === null) {
              originalMappings[currentSource] = [];
            }
            originalMappings[currentSource].push(mapping);
          }
        }
      }
      sortGenerated(generatedMappings, subarrayStart);
      this.__generatedMappings = generatedMappings;
      for (var i = 0; i < originalMappings.length; i++) {
        if (originalMappings[i] != null) {
          quickSort(originalMappings[i], util2.compareByOriginalPositionsNoSource);
        }
      }
      this.__originalMappings = [].concat(...originalMappings);
    };
    BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
      if (aNeedle[aLineName] <= 0) {
        throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
      }
      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };
    BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];
          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }
        mapping.lastGeneratedColumn = Infinity;
      }
    };
    BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util2.getArg(aArgs, "line"),
        generatedColumn: util2.getArg(aArgs, "column")
      };
      var index = this._findMapping(
        needle,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        util2.compareByGeneratedPositionsDeflated,
        util2.getArg(aArgs, "bias", SourceMapConsumer2.GREATEST_LOWER_BOUND)
      );
      if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
          var source = util2.getArg(mapping, "source", null);
          if (source !== null) {
            source = this._sources.at(source);
            source = util2.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
          }
          var name = util2.getArg(mapping, "name", null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source,
            line: util2.getArg(mapping, "originalLine", null),
            column: util2.getArg(mapping, "originalColumn", null),
            name
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };
    BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
      });
    };
    BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }
      var index = this._findSourceIndex(aSource);
      if (index >= 0) {
        return this.sourcesContent[index];
      }
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util2.relative(this.sourceRoot, relativeSource);
      }
      var url;
      if (this.sourceRoot != null && (url = util2.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + relativeSource + '" is not in the SourceMap.');
      }
    };
    BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util2.getArg(aArgs, "source");
      source = this._findSourceIndex(source);
      if (source < 0) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      var needle = {
        source,
        originalLine: util2.getArg(aArgs, "line"),
        originalColumn: util2.getArg(aArgs, "column")
      };
      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util2.compareByOriginalPositions,
        util2.getArg(aArgs, "bias", SourceMapConsumer2.GREATEST_LOWER_BOUND)
      );
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) {
          return {
            line: util2.getArg(mapping, "generatedLine", null),
            column: util2.getArg(mapping, "generatedColumn", null),
            lastColumn: util2.getArg(mapping, "lastGeneratedColumn", null)
          };
        }
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };
    exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
    function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util2.parseSourceMapInput(aSourceMap);
      }
      var version2 = util2.getArg(sourceMap, "version");
      var sections = util2.getArg(sourceMap, "sections");
      if (version2 != this._version) {
        throw new Error("Unsupported version: " + version2);
      }
      this._sources = new ArraySet();
      this._names = new ArraySet();
      var lastOffset = {
        line: -1,
        column: 0
      };
      this._sections = sections.map(function(s) {
        if (s.url) {
          throw new Error("Support for url field in sections not implemented.");
        }
        var offset = util2.getArg(s, "offset");
        var offsetLine = util2.getArg(offset, "line");
        var offsetColumn = util2.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
          throw new Error("Section offsets must be ordered and non-overlapping.");
        }
        lastOffset = offset;
        return {
          generatedOffset: {
            generatedLine: offsetLine + 1,
            generatedColumn: offsetColumn + 1
          },
          consumer: new SourceMapConsumer2(util2.getArg(s, "map"), aSourceMapURL)
        };
      });
    }
    IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer2.prototype);
    IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer2;
    IndexedSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
      get: function() {
        var sources = [];
        for (var i = 0; i < this._sections.length; i++) {
          for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
            sources.push(this._sections[i].consumer.sources[j]);
          }
        }
        return sources;
      }
    });
    IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util2.getArg(aArgs, "line"),
        generatedColumn: util2.getArg(aArgs, "column")
      };
      var sectionIndex = binarySearch.search(
        needle,
        this._sections,
        function(needle2, section2) {
          var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
          if (cmp) {
            return cmp;
          }
          return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
        }
      );
      var section = this._sections[sectionIndex];
      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }
      return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
      });
    };
    IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };
    IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        if (section.consumer._findSourceIndex(util2.getArg(aArgs, "source")) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
          };
          return ret;
        }
      }
      return {
        line: null,
        column: null
      };
    };
    IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[j];
          var source = section.consumer._sources.at(mapping.source);
          source = util2.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
          this._sources.add(source);
          source = this._sources.indexOf(source);
          var name = null;
          if (mapping.name) {
            name = section.consumer._names.at(mapping.name);
            this._names.add(name);
            name = this._names.indexOf(name);
          }
          var adjustedMapping = {
            source,
            generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name
          };
          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === "number") {
            this.__originalMappings.push(adjustedMapping);
          }
        }
      }
      quickSort(this.__generatedMappings, util2.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util2.compareByOriginalPositions);
    };
    exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-node.js
var require_source_node = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-node.js"(exports) {
    var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    var util2 = require_util();
    var REGEX_NEWLINE = /(\r?\n)/;
    var NEWLINE_CODE = 10;
    var isSourceNode = "$$$isSourceNode$$$";
    function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
      this.children = [];
      this.sourceContents = {};
      this.line = aLine == null ? null : aLine;
      this.column = aColumn == null ? null : aColumn;
      this.source = aSource == null ? null : aSource;
      this.name = aName == null ? null : aName;
      this[isSourceNode] = true;
      if (aChunks != null)
        this.add(aChunks);
    }
    SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      var node = new SourceNode();
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var remainingLinesIndex = 0;
      var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
          return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
        }
      };
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;
      var lastMapping = null;
      aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
          if (lastGeneratedLine < mapping.generatedLine) {
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
          } else {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            lastMapping = mapping;
            return;
          }
        }
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
      }
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util2.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });
      return node;
      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === void 0) {
          node.add(code);
        } else {
          var source = aRelativePath ? util2.join(aRelativePath, mapping.source) : mapping.source;
          node.add(new SourceNode(
            mapping.originalLine,
            mapping.originalColumn,
            source,
            code,
            mapping.name
          ));
        }
      }
    };
    SourceNode.prototype.add = function SourceNode_add(aChunk) {
      if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
          this.add(chunk);
        }, this);
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
          this.children.push(aChunk);
        }
      } else {
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
      }
      return this;
    };
    SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
      if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
          this.prepend(aChunk[i]);
        }
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
      } else {
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
      }
      return this;
    };
    SourceNode.prototype.walk = function SourceNode_walk(aFn) {
      var chunk;
      for (var i = 0, len = this.children.length; i < len; i++) {
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
          chunk.walk(aFn);
        } else {
          if (chunk !== "") {
            aFn(chunk, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
          }
        }
      }
    };
    SourceNode.prototype.join = function SourceNode_join(aSep) {
      var newChildren;
      var i;
      var len = this.children.length;
      if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
          newChildren.push(this.children[i]);
          newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
      }
      return this;
    };
    SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
      var lastChild = this.children[this.children.length - 1];
      if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
      } else if (typeof lastChild === "string") {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
      } else {
        this.children.push("".replace(aPattern, aReplacement));
      }
      return this;
    };
    SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util2.toSetString(aSourceFile)] = aSourceContent;
    };
    SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }
      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util2.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };
    SourceNode.prototype.toString = function SourceNode_toString() {
      var str = "";
      this.walk(function(chunk) {
        str += chunk;
      });
      return str;
    };
    SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
      var generated = {
        code: "",
        line: 1,
        column: 0
      };
      var map = new SourceMapGenerator(aArgs);
      var sourceMappingActive = false;
      var lastOriginalSource = null;
      var lastOriginalLine = null;
      var lastOriginalColumn = null;
      var lastOriginalName = null;
      this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
          if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
          lastOriginalSource = original.source;
          lastOriginalLine = original.line;
          lastOriginalColumn = original.column;
          lastOriginalName = original.name;
          sourceMappingActive = true;
        } else if (sourceMappingActive) {
          map.addMapping({
            generated: {
              line: generated.line,
              column: generated.column
            }
          });
          lastOriginalSource = null;
          sourceMappingActive = false;
        }
        for (var idx = 0, length = chunk.length; idx < length; idx++) {
          if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            if (idx + 1 === length) {
              lastOriginalSource = null;
              sourceMappingActive = false;
            } else if (sourceMappingActive) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
          } else {
            generated.column++;
          }
        }
      });
      this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
      });
      return { code: generated.code, map };
    };
    exports.SourceNode = SourceNode;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/source-map.js
var require_source_map = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/source-map.js"(exports) {
    exports.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    exports.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
    exports.SourceNode = require_source_node().SourceNode;
  }
});

// ../core/sourcemap.ts
var import_source_map_js, textDecoder, SourceMaps;
var init_sourcemap = __esm({
  "../core/sourcemap.ts"() {
    "use strict";
    init_gi();
    import_source_map_js = __toESM(require_source_map(), 1);
    textDecoder = /* @__PURE__ */ new TextDecoder();
    SourceMaps = class {
      map = {};
      sourceFileMap;
      constructor(sourceFileMap) {
        this.sourceFileMap = sourceFileMap;
      }
      loadSourceMap(uri) {
        if (this.map[uri] !== void 0) {
          return this.map[uri];
        }
        const file = Gio.File.new_for_uri(`${uri}.map`);
        if (file.query_exists(null)) {
          const [_, data] = file.load_contents(null);
          const map = JSON.parse(textDecoder.decode(data));
          this.map[uri] = new import_source_map_js.SourceMapConsumer(map);
          return this.map[uri];
        }
        return void 0;
      }
      sourceFileFor(fileOrUri) {
        const uri = typeof fileOrUri === "string" ? fileOrUri : fileOrUri.get_uri();
        const file = this.sourceFileMap[uri];
        return file === void 0 ? Gio.File.new_for_uri(uri) : file;
      }
    };
  }
});

// ../core/stack.ts
function parseTraceLine(line) {
  const match = /^(.*)@(.*):([0-9]+):([0-9]+)$/.exec(line);
  if (match !== null) {
    return {
      name: match[1].length > 0 ? match[1] : void 0,
      source: match[2],
      line: Number.parseInt(match[3], 10),
      column: Number.parseInt(match[4], 10)
    };
  }
  throw new Error(`Unable to parse trace entry: "${line}"`);
}
function mapLine(line, sourceMap) {
  if (!sourceMap) {
    return line;
  }
  const mapped = sourceMap.originalPositionFor(line);
  if (mapped.source === null) {
    return line;
  }
  const sourceDir = Gio.File.new_for_uri(line.source).get_parent();
  const mappedFile = sourceDir.resolve_relative_path(mapped.source);
  const result = {
    name: mapped.name ?? line.name ?? "",
    source: mappedFile.get_uri(),
    origSource: line.source,
    line: mapped.line,
    column: mapped.column
  };
  return result;
}
function stackTrace(trace, sourceMaps2, filter) {
  let lines = trace.split("\n").map((line) => line.trim()).filter((line) => line.length > 0).map(parseTraceLine);
  if (filter !== void 0) {
    lines = lines.filter(filter);
  }
  return lines.map((line) => mapLine(line, sourceMaps2.loadSourceMap(line.source)));
}
var import_table, sourceMaps;
var init_stack = __esm({
  "../core/stack.ts"() {
    "use strict";
    init_gi();
    import_table = __toESM(require_src(), 1);
    init_display();
    init_fs();
    init_sourcemap();
    sourceMaps = /* @__PURE__ */ new SourceMaps({});
  }
});

// ../core/log.ts
function compareLevels(a, b) {
  return order.indexOf(b) - order.indexOf(a);
}
function renderLogLevel(level, levelString) {
  const theme = {
    ["error" /* Error */]: import_ansi_colors.default.bgRedBright,
    ["warn" /* Warn */]: import_ansi_colors.default.bgYellow,
    ["info" /* Info */]: import_ansi_colors.default.bgGreenBright,
    ["debug" /* Debug */]: import_ansi_colors.default.bgCyan,
    ["trace" /* Trace */]: import_ansi_colors.default.bgBlue
  };
  return " ".repeat(5 - level.length) + theme[level](import_ansi_colors.default.bold(levelString ?? level.toUpperCase()));
}
function stackTrace2() {
  try {
    throw new Error();
  } catch (err2) {
    const error = err2;
    const stack = stackTrace(error.stack, sourceMaps);
    return stack;
  }
}
function doLog(logger3, level, msg) {
  if (compareLevels(logger3.level, level) > 0) {
    return;
  }
  const stack = stackTrace2();
  const frame = stack[3];
  const fileName = cwdiseFilename(frame.source);
  const { line, column } = frame;
  errln(
    `${renderLogLevel(level, ` ${level.toUpperCase()} `)}${logger3.path === void 0 ? "" : import_ansi_colors.default.bgBlackBright(` ${logger3.path} `)} ${import_ansi_colors.default.magentaBright(`${fileName}:${line}:${column}:`)} ${msg.map((item) => typeof item === "string" ? item : inspect(item)).join(" ")}`
  );
}
function logFactory(logger3, level) {
  return (...msg) => doLog(logger3, level, msg);
}
function extendLogger(obj) {
  const logger3 = obj;
  for (const level of order) {
    logger3[level] = logFactory(obj, level);
  }
  return logger3;
}
var import_pretty_print_object, order, LoggerInstance, inspectConfig, inspect, log;
var init_log = __esm({
  "../core/log.ts"() {
    import_pretty_print_object = __toESM(require_dist(), 1);
    init_fs();
    init_stack();
    init_display();
    init_gi();
    order = ["error" /* Error */, "warn" /* Warn */, "info" /* Info */, "debug" /* Debug */, "trace" /* Trace */];
    LoggerInstance = class {
      #level;
      #parent;
      #path;
      #children = {};
      constructor(parent, path) {
        this.#parent = parent;
        if (parent !== void 0 && parent.path !== void 0 && path !== void 0) {
          this.#path = `${parent.path}.${path}`;
        } else {
          this.#path = path;
        }
      }
      get level() {
        return this.#level ?? this.#parent?.level ?? "warn" /* Warn */;
      }
      set level(level) {
        this.#level = level;
      }
      get path() {
        return this.#path;
      }
      scope(path) {
        const dot = path.indexOf(".");
        if (dot >= 0) {
          const prefix = path.slice(0, dot);
          const remainder = path.slice(dot + 1);
          return this.scope(prefix).scope(remainder);
        }
        let child = this.#children[path];
        if (child !== void 0) {
          return child;
        }
        child = extendLogger(new LoggerInstance(this, path));
        this.#children[path] = child;
        return child;
      }
    };
    inspectConfig = { indent: "    ", singleQuotes: false, inlineCharacterLimit: 32 };
    inspect = (v) => (0, import_pretty_print_object.prettyPrint)(v, inspectConfig);
    log = extendLogger(new LoggerInstance(void 0, void 0));
  }
});

// ../core/effect/context.ts
function signalForProperty(prop2) {
  return `notify::${prop2}`;
}
function signalForPSpec(pspec) {
  return signalForProperty(typeof pspec === "string" ? pspec : pspec.get_name());
}
function getOwner() {
  return Owner;
}
function runInContext(owner, listener, f) {
  const oldOwner = Owner;
  const oldListener = Listener;
  if (owner !== void 0) {
    Owner = owner;
  }
  if (listener !== void 0) {
    Listener = listener;
  }
  try {
    return f();
  } finally {
    Listener = oldListener;
    Owner = oldOwner;
  }
}
function logAccessor(signalSpec, name) {
  if (Listener !== null) {
    Listener.log(signalSpec);
    logger.trace("Effect read:", Listener.name, "=>", name);
  }
}
function registerEffect(node) {
  if (Owner !== null) {
    node.scheduler = Owner.scheduler;
    Owner.addChild(node);
    node.owner = Owner;
  } else {
    throw new Error("Effect was created outside a root. Wrap it in an Ef.root() call.");
  }
}
function installEffect(effectNode) {
  registerEffect(effectNode);
  const result = effectNode.run();
  if (!effectNode.hasSideEffects()) {
    getOwner()?.removeChild(effectNode);
  }
  return result;
}
function logUpdate(name, value) {
  logger.trace("Cell updated:", name, "=>", value);
}
var Owner, Listener, logger;
var init_context = __esm({
  "../core/effect/context.ts"() {
    "use strict";
    init_log();
    Owner = null;
    Listener = null;
    logger = log.scope("gx.effect");
  }
});

// ../core/gobject.ts
var gobject_exports = {};
__export(gobject_exports, {
  Class: () => Class,
  Implements: () => Implements,
  Override: () => Override,
  Property: () => Property,
  Signals: () => Signals2,
  Template: () => Template,
  TemplateChild: () => TemplateChild,
  assertCast: () => assertCast,
  gtypeFor: () => gtypeFor,
  gtypeForConstructor: () => gtypeForConstructor,
  gtypeForObject: () => gtypeForObject,
  isA: () => isA,
  isConstructor: () => isConstructor,
  tryCast: () => tryCast
});
function gtypeFor(object2) {
  if (object2.constructor !== void 0) {
    return object2.constructor.$gtype;
  }
  return void 0;
}
function gtypeForObject(object2) {
  return object2.constructor.$gtype;
}
function gtypeForConstructor(constructor) {
  return constructor.$gtype;
}
function isA(cls, obj) {
  const gtype = gtypeFor(obj);
  if (gtype === void 0) {
    return false;
  }
  return GObject.type_is_a(gtype, gtypeForConstructor(cls));
}
function isConstructor(cls, obj) {
  return obj.$gtype !== void 0 && GObject.type_is_a(obj.$gtype, gtypeForConstructor(cls));
}
function tryCast(cls, obj) {
  return GObject.type_is_a(gtypeForObject(obj), gtypeForConstructor(cls)) ? obj : void 0;
}
function assertCast(cls, obj) {
  if (obj === null) {
    throw new Error(`Can't cast null value to ${gtypeForConstructor(cls).name}`);
  }
  const result = tryCast(cls, obj);
  if (result === void 0) {
    throw new Error(
      `${gtypeForObject(obj).name} can't be cast to ${gtypeForConstructor(cls).name}`
    );
  } else {
    return result;
  }
}
function decorateMeta(target) {
  const decorated = target;
  if (decorated[gmeta] === void 0) {
    decorated[gmeta] = {};
  }
  return decorated;
}
function Class(typeName) {
  if (typeof typeName === "string") {
    return function(targetConstructor) {
      const target2 = decorateMeta(targetConstructor);
      target2[gmeta].GTypeName = typeName;
      Class(target2);
    };
  }
  const target = decorateMeta(typeName);
  const metadata = target[gmeta] ?? {};
  target[gmeta] = void 0;
  GObject.registerClass(metadata, target);
}
function Override(overrides) {
  return function(targetConstructor) {
    const target = decorateMeta(targetConstructor);
    target[gmeta] = { ...target[gmeta], ...overrides };
  };
}
function Implements(interfaces) {
  return function(targetConstructor) {
    const target = decorateMeta(targetConstructor);
    target[gmeta].Implements = interfaces;
  };
}
function Template(template) {
  return function(targetConstructor) {
    if (!(template instanceof Uint8Array)) {
      throw new Error(
        "Template must be an Uint8Array, try using Gx.GObj.readFile() to load it"
      );
    }
    const target = decorateMeta(targetConstructor);
    target[gmeta].Template = template;
  };
}
function TemplateChild(proto, name, _desc) {
  const target = decorateMeta(proto.constructor);
  const meta = target[gmeta];
  if (meta.InternalChildren === void 0) {
    meta.InternalChildren = [];
  }
  meta.InternalChildren.push(name);
  const privateName = `_${name}`;
  return {
    configurable: false,
    enumerable: true,
    get() {
      return this[privateName];
    }
  };
}
function Property(paramSpec) {
  return function(proto, name, descriptor) {
    const target = decorateMeta(proto.constructor);
    const meta = target[gmeta];
    if (meta.Properties === void 0) {
      meta.Properties = {};
    }
    const propName = name.replace("_", "-");
    if (propName !== paramSpec.name) {
      throw new Error(
        `@Property name must be the snake case equivalent of the GObject property name: was "${name} but should be ${paramSpec.name.replace(
          "-",
          "_"
        )}"`
      );
    }
    if (descriptor !== void 0) {
      descriptor.configurable = false;
    } else {
      throw new Error("@Property must decorate a property accessor, not a property.");
    }
    meta.Properties[propName] = paramSpec;
  };
}
function Signals2(signals) {
  return function(targetConstructor) {
    const target = decorateMeta(targetConstructor);
    target[gmeta].Signals = signals;
  };
}
var gmeta;
var init_gobject = __esm({
  "../core/gobject.ts"() {
    "use strict";
    init_gi();
    gmeta = Symbol("GObject.Decorator.Meta");
  }
});

// ../core/effect/cellnode.ts
var _a, _current, _equals, CellNode;
var init_cellnode = __esm({
  "../core/effect/cellnode.ts"() {
    "use strict";
    init_gi();
    init_effect();
    init_context();
    init_gobject();
    CellNode = class extends GObject.Object {
      constructor(value, name, equals) {
        super();
        __publicField(this, _a);
        __publicField(this, "name");
        __privateAdd(this, _current, void 0);
        __privateAdd(this, _equals, void 0);
        __publicField(this, "signalSpec", {
          target: this,
          signal: signalForPSpec(CellNode.currentSpec)
        });
        this.name = name;
        __privateSet(this, _current, value);
        __privateSet(this, _equals, equals);
        this[CellType] = 1 /* Readable */ | 2 /* Writable */;
      }
      get current() {
        return this.get();
      }
      set current(value) {
        this.set(value);
      }
      get() {
        logAccessor(this.signalSpec, this.name ?? "[Cell]");
        return __privateGet(this, _current);
      }
      set(value) {
        if (__privateGet(this, _equals) !== void 0 && __privateGet(this, _equals).call(this, value, __privateGet(this, _current))) {
          return;
        }
        __privateSet(this, _current, value);
        logUpdate(this.name ?? "[Cell]", value);
        this.notify_by_pspec(CellNode.currentSpec);
      }
      update(f) {
        this.set(f(__privateGet(this, _current)));
      }
    };
    _a = CellType;
    _current = new WeakMap();
    _equals = new WeakMap();
    __publicField(CellNode, "currentSpec", GObject.ParamSpec.jsobject(
      "current",
      "current",
      "The cell's current value.",
      GObject.ParamFlags.READWRITE
    ));
    __decorateClass([
      Property(CellNode.currentSpec)
    ], CellNode.prototype, "current", 1);
    CellNode = __decorateClass([
      Class
    ], CellNode);
  }
});

// ../core/effect/effectnode.ts
var EffectNode;
var init_effectnode = __esm({
  "../core/effect/effectnode.ts"() {
    "use strict";
    init_gi();
    init_effect();
    init_gobject();
    init_context();
    EffectNode = class extends GObject.Object {
      [CellType];
      get current() {
        return this.get();
      }
      get() {
        logAccessor(this.signalSpec, this.name ?? "[Effect]");
        return this.value;
      }
      name;
      effect;
      value;
      dependencies = /* @__PURE__ */ new Map();
      children = [];
      cleanups = [];
      scheduler = void 0;
      owner;
      constructor(effect2, name) {
        super();
        this.name = name;
        this.effect = effect2;
        this[CellType] = 1 /* Readable */;
      }
      signalSpec = { target: this, signal: signalForPSpec(EffectNode.currentSpec) };
      addChild(node) {
        this.children.push(node);
      }
      removeChild(node) {
        if (Object.is(this.children[this.children.length - 1], node)) {
          this.children.pop();
          return;
        }
        const index = this.children.findIndex((child) => Object.is(child, node));
        if (index < 0) {
          throw new Error(
            "EffectNode: inconsistent state: tried to remove a child which wasn't a child."
          );
        }
        this.children.splice(index, 1);
      }
      hasSideEffects() {
        return this.children.length > 0 || this.dependencies.size > 0 || this.cleanups.length > 0;
      }
      addDependency(signal) {
        const signalSpec = isCell(signal) ? signal.signalSpec : signal;
        this.log(signalSpec);
      }
      log(signalSpec) {
        if (this.dependencies === null) {
          this.dependencies = /* @__PURE__ */ new Map();
        }
        let targetMap = this.dependencies.get(signalSpec.target);
        if (targetMap === void 0) {
          targetMap = /* @__PURE__ */ new Map();
          this.dependencies.set(signalSpec.target, targetMap);
        }
        if (!targetMap.has(signalSpec.signal)) {
          const listener = signalSpec.detail === void 0 ? () => this.scheduleUpdate() : (_, detail) => {
            if (detail === signalSpec.detail) {
              this.scheduleUpdate();
            }
          };
          targetMap.set(
            signalSpec.signal,
            signalSpec.target.connect(signalSpec.signal, listener)
          );
        }
      }
      scheduleUpdate() {
        this.scheduler.add(this);
      }
      run() {
        return runInContext(this, this, () => {
          this.cleanup(false);
          const result = this.effect();
          this.value = result;
          if (result !== void 0) {
            logUpdate(this.name ?? "[Effect]", result);
          }
          this.notify_by_pspec(EffectNode.currentSpec);
          return result;
        });
      }
      onCleanup(f) {
        if (this.cleanups === null) {
          this.cleanups = [f];
        } else {
          this.cleanups.push(f);
        }
      }
      cleanup(final) {
        this.children.forEach((child) => child.dispose());
        this.children = [];
        this.cleanups.forEach((f) => f(final));
        this.cleanups = [];
        this.dependencies.forEach(
          (targetMap, target) => targetMap.forEach((handle) => target.disconnect(handle))
        );
        this.dependencies.clear();
      }
      dispose() {
        this.cleanup(true);
        this.effect = void 0;
        this.value = void 0;
        if (this.owner === void 0 && this.scheduler !== void 0) {
          this.scheduler.dispose();
          this.scheduler = void 0;
        }
      }
    };
    __publicField(EffectNode, "currentSpec", GObject.ParamSpec.jsobject(
      "current",
      "current",
      "The effect's current value.",
      GObject.ParamFlags.READABLE
    ));
    __decorateClass([
      Property(EffectNode.currentSpec)
    ], EffectNode.prototype, "current", 1);
    EffectNode = __decorateClass([
      Class
    ], EffectNode);
  }
});

// ../core/effect/scheduler.ts
var logger2, Scheduler;
var init_scheduler = __esm({
  "../core/effect/scheduler.ts"() {
    "use strict";
    init_gi();
    init_log();
    init_gobject();
    logger2 = log.scope("gx.effect");
    Scheduler = class extends GObject.Object {
      #idleSource;
      #jobs = [];
      #exception;
      #onException;
      constructor(options2 = {}) {
        super();
        this.#onException = options2.onException;
      }
      scheduleTick() {
        if (this.#idleSource !== void 0) {
          return;
        }
        this.#idleSource = GLib.idle_add(GLib.PRIORITY_HIGH_IDLE, () => {
          this.process();
          if (this.#jobs.length > 0) {
            return GLib.SOURCE_CONTINUE;
          }
          this.#idleSource = void 0;
          this.emit("empty");
          return GLib.SOURCE_REMOVE;
        });
      }
      process() {
        const queue = this.#jobs;
        this.#jobs = [];
        for (const job of queue) {
          try {
            logger2.trace("Effect re-run:", job.name);
            job.run();
          } catch (err2) {
            this.#exception = err2;
            this.emit("exception");
            if (this.#onException) {
              this.#onException(err2);
            }
            break;
          }
        }
      }
      add(job) {
        this.#jobs.push(job);
        this.scheduleTick();
      }
      join() {
        if (this.#jobs.length === 0) {
          return this.#exception === void 0 ? Promise.resolve() : Promise.reject(this.#exception);
        }
        return new Promise((resolve, reject) => {
          this.connect("empty", () => {
            resolve();
          });
          this.connect("exception", () => {
            reject(this.#exception);
          });
        });
      }
      dispose() {
        if (this.#idleSource !== void 0) {
          GLib.source_remove(this.#idleSource);
          this.#idleSource = void 0;
        }
      }
    };
    Scheduler = __decorateClass([
      Class,
      Signals2({ empty: {}, exception: {} })
    ], Scheduler);
  }
});

// ../core/effect/object.ts
function object(object2, options2 = {}) {
  const signaller = new ProxySignaller();
  const name = (prop2) => `${options2.name ?? "[object]"}.${prop2}`;
  const equals = typeof options2.equals === "function" ? options2.equals : options2.equals === true || options2.equals === void 0 ? (prop2, a, b) => Object.is(a, b) : void 0;
  return new Proxy(object2, {
    get(target, prop2, receiver) {
      if (typeof prop2 === "string") {
        logAccessor(signaller.signalSpec(prop2), name(prop2));
        return target[prop2];
      }
      return Reflect.get(target, prop2, receiver);
    },
    set(target, prop2, value, receiver) {
      if (typeof prop2 === "string") {
        const changed = equals === void 0 ? true : !equals(prop2, target[prop2], value);
        target[prop2] = value;
        if (changed) {
          logUpdate(name(prop2), value);
          signaller.update(prop2);
        }
        return true;
      }
      Reflect.set(target, prop2, value, receiver);
      return true;
    }
  });
}
var ProxySignaller;
var init_object = __esm({
  "../core/effect/object.ts"() {
    "use strict";
    init_gi();
    init_gobject();
    init_context();
    ProxySignaller = class extends GObject.Object {
      signalSpec(prop2) {
        return {
          target: this,
          signal: "update",
          detail: prop2
        };
      }
      update(prop2) {
        this.emit("update", prop2);
      }
    };
    ProxySignaller = __decorateClass([
      Class,
      Signals2({ update: { param_types: [GObject.TYPE_STRING] } })
    ], ProxySignaller);
  }
});

// ../core/effect/async.ts
function asyncRequest(input, request, options2 = {}) {
  const output = object({
    loading: false,
    cancel: options2.cancel
  });
  on(
    [input],
    () => {
      output.loading = true;
      output.error = void 0;
      output.current = void 0;
      request(input.get(), options2.cancel).then((result) => {
        output.loading = false;
        output.error = void 0;
        output.current = result;
        output.latest = result;
      }).catch((err2) => {
        output.loading = false;
        output.error = err2;
        output.current = void 0;
      });
    },
    { name: options2.name }
  );
  return output;
}
var init_async = __esm({
  "../core/effect/async.ts"() {
    "use strict";
    init_effect();
  }
});

// ../core/effect/gobj.ts
function prop(object2, property, options2 = {}) {
  const signalSpec = {
    target: object2,
    signal: signalForProperty(property)
  };
  const name = options2.name !== void 0 ? options2.name : `${object2.constructor.$gtype.name}.${property}`;
  return {
    signalSpec,
    get() {
      logAccessor(signalSpec, name);
      return object2[property];
    },
    set(value) {
      logUpdate(name, value);
      object2[property] = value;
    },
    update(f) {
      object2[property] = f(object2[property]);
    },
    [CellType]: 1 /* Readable */ | 2 /* Writable */,
    name
  };
}
function bind(targetObject, targetProperty, f, options2 = {}) {
  const propertyName = typeof targetProperty === "string" ? targetProperty : targetProperty.get_name();
  const name = options2.name ?? `${targetObject.constructor.$gtype.name}.${propertyName}`;
  const effectNode = new EffectNode(() => {
    const value = f();
    if (value !== void 0) {
      targetObject.set_property(propertyName, value);
    }
  }, name);
  registerEffect(effectNode);
  effectNode.run();
  if (!effectNode.hasSideEffects()) {
    getOwner()?.removeChild(effectNode);
  }
}
var init_gobj = __esm({
  "../core/effect/gobj.ts"() {
    "use strict";
    init_effect();
    init_context();
    init_effectnode();
  }
});

// ../core/effect/array.ts
function dispose(disposers) {
  disposers.forEach((d) => d());
}
function mapArray(list, f, options2 = {}) {
  let items = [];
  let mapped = [];
  let len = 0;
  let disposers = [];
  let indices = f.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return memo(() => {
    const newItems = list.get() ?? [];
    let i, j;
    function mapper() {
      if (indices !== null) {
        const indexCell = cell(j);
        indices[j] = indexCell;
        return f(newItems[j], indexCell);
      }
      return f(newItems[j]);
    }
    return untrack(() => {
      const newLen = newItems.length;
      let temp;
      let tempDisposers;
      let tempIndices;
      let newIndices;
      let newIndicesNext;
      let start, end, newEnd;
      let item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          if (indices !== null) {
            indices = [];
          }
        }
      } else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          const [node, result] = createRoot(mapper, { name: options2.name });
          mapped[j] = result;
          disposers[j] = () => node.dispose();
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempDisposers = new Array(newLen);
        if (indices !== null) {
          tempIndices = new Array(newLen);
        }
        start = 0;
        end = Math.min(len, newLen);
        while (start < end && Object.is(items[start], newItems[start])) {
          start++;
        }
        end = len - 1;
        newEnd = newLen - 1;
        while (end >= start && newEnd >= start && Object.is(items[end], newItems[newEnd])) {
          end--;
          newEnd--;
        }
        newIndices = /* @__PURE__ */ new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === void 0 ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== void 0 && j !== -1) {
            temp[j] = mapped[i];
            tempDisposers[j] = disposers[i];
            if (indices !== null) {
              tempIndices[j] = indices[i];
            }
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else {
            disposers[i]();
          }
        }
        for (j = start; j <= newEnd; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempDisposers[j];
            if (indices !== null) {
              indices[j] = tempIndices[j];
              indices[j].set(j);
            }
          } else {
            const [node, result] = createRoot(mapper, { name: options2.name });
            mapped[j] = result;
            disposers[j] = () => node.dispose();
          }
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice();
      }
      return mapped;
    });
  });
}
function untangle(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  if (isCell(value)) {
    return untangle(value.get());
  }
  if (isA(GObject.Object, value) || !isIterable(value)) {
    return [value];
  }
  return Array.from(value).filter((a) => a !== null && a !== void 0);
}
function buildArray(inputs, options2 = {}) {
  return memo(() => inputs.flatMap(untangle), options2);
}
var init_array = __esm({
  "../core/effect/array.ts"() {
    "use strict";
    init_gi();
    init_effect();
    init_core();
    init_gobject();
  }
});

// ../core/effect/index.ts
var effect_exports = {};
__export(effect_exports, {
  CellType: () => CellType,
  CellTypeFlags: () => CellTypeFlags,
  asyncRequest: () => asyncRequest,
  bind: () => bind,
  buildArray: () => buildArray,
  cell: () => cell,
  createRoot: () => createRoot,
  effect: () => effect,
  getOwner: () => getOwner,
  isCell: () => isCell,
  isWritableCell: () => isWritableCell,
  mapArray: () => mapArray,
  memo: () => memo,
  object: () => object,
  on: () => on,
  onCleanup: () => onCleanup,
  onRef: () => onRef,
  prop: () => prop,
  ref: () => ref,
  root: () => root,
  runWithOwner: () => runWithOwner,
  schedule: () => schedule,
  untrack: () => untrack
});
function isCell(object2) {
  return CellType in object2;
}
function isWritableCell(object2) {
  return isCell(object2) && (object2[CellType] & 2 /* Writable */) === 2 /* Writable */;
}
function cell(value, options2 = {}) {
  return new CellNode(value, options2.name, options2.equals);
}
function ref(name) {
  const ref2 = new CellNode(void 0, name, Object.is);
  ref2[CellType] |= 4 /* Deferred */;
  return ref2;
}
function memo(f, options2 = {}) {
  const effectNode = new EffectNode(f, options2.name);
  registerEffect(effectNode);
  effectNode.run();
  return effectNode;
}
function effect(f, options2 = {}) {
  if (options2.initial !== void 0) {
    const initial = options2.initial;
    const subsequent = f;
    let firstRun = true;
    f = () => {
      if (firstRun) {
        firstRun = false;
        return initial();
      }
      return subsequent();
    };
  }
  return installEffect(new EffectNode(f, options2.name));
}
async function root(f, options2 = {}) {
  const rootNode = new EffectNode(f, options2.name ?? "[Root]");
  rootNode.scheduler = new Scheduler();
  const result = await Promise.resolve(rootNode.run());
  await rootNode.scheduler.join();
  rootNode.dispose();
  return result;
}
function createRoot(f, options2 = {}) {
  const rootNode = new EffectNode(f, options2.name ?? "[Root]");
  rootNode.scheduler = new Scheduler({ onException: logException });
  const result = rootNode.run();
  return [rootNode, result];
}
function untrack(f) {
  return runInContext(void 0, null, f);
}
function on(dependencies, f, options2 = {}) {
  const effectNode = new EffectNode(() => untrack(() => f()), options2.name);
  for (const signal of dependencies) {
    effectNode.addDependency(signal);
  }
  registerEffect(effectNode);
  return effectNode.run();
}
function onRef(ref2, f, options2 = {}) {
  return on(
    [ref2],
    () => {
      const value = ref2.get();
      if (value !== void 0) {
        f(value);
      }
    },
    options2
  );
}
function onCleanup(f) {
  const owner = getOwner();
  if (owner !== null) {
    owner.onCleanup(f);
  } else {
    throw new Error("You can only call onCleanup() from inside an effect root.");
  }
}
function schedule(job) {
  return new Promise((resolve, reject) => {
    GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
      try {
        resolve(job());
      } catch (err2) {
        reject(err2);
      }
      return GLib.SOURCE_REMOVE;
    });
  });
}
function runWithOwner(owner, f) {
  return runInContext(owner, void 0, f);
}
var CellType, CellTypeFlags;
var init_effect = __esm({
  "../core/effect/index.ts"() {
    "use strict";
    init_gi();
    init_context();
    init_cellnode();
    init_effectnode();
    init_scheduler();
    init_core();
    init_object();
    init_async();
    init_gobj();
    init_array();
    CellType = /* @__PURE__ */ Symbol("Gx.Ef.CellType");
    CellTypeFlags = /* @__PURE__ */ ((CellTypeFlags2) => {
      CellTypeFlags2[CellTypeFlags2["Readable"] = 1] = "Readable";
      CellTypeFlags2[CellTypeFlags2["Writable"] = 2] = "Writable";
      CellTypeFlags2[CellTypeFlags2["Deferred"] = 4] = "Deferred";
      return CellTypeFlags2;
    })(CellTypeFlags || {});
  }
});

// ../core/jsx.ts
var init_jsx = __esm({
  "../core/jsx.ts"() {
    "use strict";
    init_gi();
    init_effect();
    init_gobject();
  }
});

// ../core/async.ts
var async_exports = {};
__export(async_exports, {
  CancelledError: () => CancelledError,
  TimeoutError: () => TimeoutError,
  timeout: () => timeout
});
function timeout(promise, milliseconds, cancellable) {
  let timer = void 0;
  const timeoutPromise = new Promise((resolve, reject) => {
    if (milliseconds === Number.POSITIVE_INFINITY) {
      resolve(promise);
      return;
    }
    if (cancellable !== void 0) {
      if (cancellable.is_cancelled()) {
        reject(new CancelledError());
        return;
      }
      cancellable.connect(() => {
        if (timer !== void 0) {
          GLib.source_remove(timer);
          timer = void 0;
        }
        reject(new CancelledError());
      });
    }
    timer = GLib.timeout_add(GLib.PRIORITY_DEFAULT, milliseconds, () => {
      timer = void 0;
      reject(
        new TimeoutError(
          `Promise timed out after ${milliseconds} milliseconds`,
          milliseconds
        )
      );
      return GLib.SOURCE_REMOVE;
    });
    promise.then((result) => resolve(result)).catch((error) => reject(error)).finally(() => {
      if (timer !== void 0) {
        GLib.source_remove(timer);
        timer = void 0;
      }
    });
  });
  return timeoutPromise;
}
var TimeoutError, CancelledError;
var init_async2 = __esm({
  "../core/async.ts"() {
    "use strict";
    init_gi();
    TimeoutError = class extends Error {
      timeout;
      constructor(message, milliseconds) {
        super(message);
        this.name = "TimeoutError";
        this.timeout = milliseconds;
      }
    };
    CancelledError = class extends Error {
      constructor() {
        super("The task was cancelled.");
      }
    };
  }
});

// ../core/index.ts
function logException(e) {
  console.error(import_ansi_colors.default.redBright("ERROR:"), e.toString());
}
function isIterable(a) {
  return Symbol.iterator in a;
}
var init_core = __esm({
  "../core/index.ts"() {
    init_jsx();
    init_effect();
    init_fs();
    init_display();
    init_gobject();
    init_async2();
    init_log();
    init_gi();
  }
});

// ../../node_modules/.pnpm/assertion-error@1.1.0/node_modules/assertion-error/index.js
var require_assertion_error = __commonJS({
  "../../node_modules/.pnpm/assertion-error@1.1.0/node_modules/assertion-error/index.js"(exports, module) {
    function exclude() {
      var excludes = [].slice.call(arguments);
      function excludeProps(res, obj) {
        Object.keys(obj).forEach(function(key) {
          if (!~excludes.indexOf(key))
            res[key] = obj[key];
        });
      }
      return function extendExclude() {
        var args = [].slice.call(arguments), i = 0, res = {};
        for (; i < args.length; i++) {
          excludeProps(res, args[i]);
        }
        return res;
      };
    }
    module.exports = AssertionError2;
    function AssertionError2(message, _props, ssf) {
      var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
      this.message = message || "Unspecified AssertionError";
      this.showDiff = false;
      for (var key in props) {
        this[key] = props[key];
      }
      ssf = ssf || AssertionError2;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ssf);
      } else {
        try {
          throw new Error();
        } catch (e) {
          this.stack = e.stack;
        }
      }
    }
    AssertionError2.prototype = Object.create(Error.prototype);
    AssertionError2.prototype.name = "AssertionError";
    AssertionError2.prototype.constructor = AssertionError2;
    AssertionError2.prototype.toJSON = function(stack) {
      var extend = exclude("constructor", "toJSON", "stack"), props = extend({ name: this.name }, this);
      if (false !== stack && this.stack) {
        props.stack = this.stack;
      }
      return props;
    };
  }
});

// ../../node_modules/.pnpm/pathval@1.1.1/node_modules/pathval/index.js
var require_pathval = __commonJS({
  "../../node_modules/.pnpm/pathval@1.1.1/node_modules/pathval/index.js"(exports, module) {
    "use strict";
    function hasProperty(obj, name) {
      if (typeof obj === "undefined" || obj === null) {
        return false;
      }
      return name in Object(obj);
    }
    function parsePath(path) {
      var str = path.replace(/([^\\])\[/g, "$1.[");
      var parts = str.match(/(\\\.|[^.]+?)+/g);
      return parts.map(function mapMatches(value) {
        if (value === "constructor" || value === "__proto__" || value === "prototype") {
          return {};
        }
        var regexp = /^\[(\d+)\]$/;
        var mArr = regexp.exec(value);
        var parsed = null;
        if (mArr) {
          parsed = { i: parseFloat(mArr[1]) };
        } else {
          parsed = { p: value.replace(/\\([.[\]])/g, "$1") };
        }
        return parsed;
      });
    }
    function internalGetPathValue(obj, parsed, pathDepth) {
      var temporaryValue = obj;
      var res = null;
      pathDepth = typeof pathDepth === "undefined" ? parsed.length : pathDepth;
      for (var i = 0; i < pathDepth; i++) {
        var part = parsed[i];
        if (temporaryValue) {
          if (typeof part.p === "undefined") {
            temporaryValue = temporaryValue[part.i];
          } else {
            temporaryValue = temporaryValue[part.p];
          }
          if (i === pathDepth - 1) {
            res = temporaryValue;
          }
        }
      }
      return res;
    }
    function internalSetPathValue(obj, val, parsed) {
      var tempObj = obj;
      var pathDepth = parsed.length;
      var part = null;
      for (var i = 0; i < pathDepth; i++) {
        var propName = null;
        var propVal = null;
        part = parsed[i];
        if (i === pathDepth - 1) {
          propName = typeof part.p === "undefined" ? part.i : part.p;
          tempObj[propName] = val;
        } else if (typeof part.p !== "undefined" && tempObj[part.p]) {
          tempObj = tempObj[part.p];
        } else if (typeof part.i !== "undefined" && tempObj[part.i]) {
          tempObj = tempObj[part.i];
        } else {
          var next = parsed[i + 1];
          propName = typeof part.p === "undefined" ? part.i : part.p;
          propVal = typeof next.p === "undefined" ? [] : {};
          tempObj[propName] = propVal;
          tempObj = tempObj[propName];
        }
      }
    }
    function getPathInfo(obj, path) {
      var parsed = parsePath(path);
      var last = parsed[parsed.length - 1];
      var info = {
        parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
        name: last.p || last.i,
        value: internalGetPathValue(obj, parsed)
      };
      info.exists = hasProperty(info.parent, info.name);
      return info;
    }
    function getPathValue(obj, path) {
      var info = getPathInfo(obj, path);
      return info.value;
    }
    function setPathValue(obj, path, val) {
      var parsed = parsePath(path);
      internalSetPathValue(obj, val, parsed);
      return obj;
    }
    module.exports = {
      hasProperty,
      getPathInfo,
      getPathValue,
      setPathValue
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/flag.js
var require_flag = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/flag.js"(exports, module) {
    module.exports = function flag(obj, key, value) {
      var flags = obj.__flags || (obj.__flags = /* @__PURE__ */ Object.create(null));
      if (arguments.length === 3) {
        flags[key] = value;
      } else {
        return flags[key];
      }
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/test.js
var require_test = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/test.js"(exports, module) {
    var flag = require_flag();
    module.exports = function test(obj, args) {
      var negate = flag(obj, "negate"), expr = args[0];
      return negate ? !expr : expr;
    };
  }
});

// ../../node_modules/.pnpm/type-detect@4.0.8/node_modules/type-detect/type-detect.js
var require_type_detect = __commonJS({
  "../../node_modules/.pnpm/type-detect@4.0.8/node_modules/type-detect/type-detect.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.typeDetect = factory();
    })(exports, function() {
      "use strict";
      var promiseExists = typeof Promise === "function";
      var globalObject = typeof self === "object" ? self : window;
      var symbolExists = typeof Symbol !== "undefined";
      var mapExists = typeof Map !== "undefined";
      var setExists = typeof Set !== "undefined";
      var weakMapExists = typeof WeakMap !== "undefined";
      var weakSetExists = typeof WeakSet !== "undefined";
      var dataViewExists = typeof DataView !== "undefined";
      var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
      var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
      var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
      var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
      var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
      var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
      var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
      var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
      var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
      var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
      var toStringLeftSliceLength = 8;
      var toStringRightSliceLength = -1;
      function typeDetect(obj) {
        var typeofObj = typeof obj;
        if (typeofObj !== "object") {
          return typeofObj;
        }
        if (obj === null) {
          return "null";
        }
        if (obj === globalObject) {
          return "global";
        }
        if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
          return "Array";
        }
        if (typeof window === "object" && window !== null) {
          if (typeof window.location === "object" && obj === window.location) {
            return "Location";
          }
          if (typeof window.document === "object" && obj === window.document) {
            return "Document";
          }
          if (typeof window.navigator === "object") {
            if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
              return "MimeTypeArray";
            }
            if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
              return "PluginArray";
            }
          }
          if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
            if (obj.tagName === "BLOCKQUOTE") {
              return "HTMLQuoteElement";
            }
            if (obj.tagName === "TD") {
              return "HTMLTableDataCellElement";
            }
            if (obj.tagName === "TH") {
              return "HTMLTableHeaderCellElement";
            }
          }
        }
        var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
        if (typeof stringTag === "string") {
          return stringTag;
        }
        var objPrototype = Object.getPrototypeOf(obj);
        if (objPrototype === RegExp.prototype) {
          return "RegExp";
        }
        if (objPrototype === Date.prototype) {
          return "Date";
        }
        if (promiseExists && objPrototype === Promise.prototype) {
          return "Promise";
        }
        if (setExists && objPrototype === Set.prototype) {
          return "Set";
        }
        if (mapExists && objPrototype === Map.prototype) {
          return "Map";
        }
        if (weakSetExists && objPrototype === WeakSet.prototype) {
          return "WeakSet";
        }
        if (weakMapExists && objPrototype === WeakMap.prototype) {
          return "WeakMap";
        }
        if (dataViewExists && objPrototype === DataView.prototype) {
          return "DataView";
        }
        if (mapExists && objPrototype === mapIteratorPrototype) {
          return "Map Iterator";
        }
        if (setExists && objPrototype === setIteratorPrototype) {
          return "Set Iterator";
        }
        if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
          return "Array Iterator";
        }
        if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
          return "String Iterator";
        }
        if (objPrototype === null) {
          return "Object";
        }
        return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
      }
      return typeDetect;
    });
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/expectTypes.js
var require_expectTypes = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/expectTypes.js"(exports, module) {
    var AssertionError2 = require_assertion_error();
    var flag = require_flag();
    var type = require_type_detect();
    module.exports = function expectTypes(obj, types) {
      var flagMsg = flag(obj, "message");
      var ssfi = flag(obj, "ssfi");
      flagMsg = flagMsg ? flagMsg + ": " : "";
      obj = flag(obj, "object");
      types = types.map(function(t) {
        return t.toLowerCase();
      });
      types.sort();
      var str = types.map(function(t, index) {
        var art = ~["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an" : "a";
        var or = types.length > 1 && index === types.length - 1 ? "or " : "";
        return or + art + " " + t;
      }).join(", ");
      var objType = type(obj).toLowerCase();
      if (!types.some(function(expected) {
        return objType === expected;
      })) {
        throw new AssertionError2(
          flagMsg + "object tested must be " + str + ", but " + objType + " given",
          void 0,
          ssfi
        );
      }
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getActual.js
var require_getActual = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getActual.js"(exports, module) {
    module.exports = function getActual(obj, args) {
      return args.length > 4 ? args[4] : obj._obj;
    };
  }
});

// ../../node_modules/.pnpm/get-func-name@2.0.0/node_modules/get-func-name/index.js
var require_get_func_name = __commonJS({
  "../../node_modules/.pnpm/get-func-name@2.0.0/node_modules/get-func-name/index.js"(exports, module) {
    "use strict";
    var toString2 = Function.prototype.toString;
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
    function getFuncName3(aFunc) {
      if (typeof aFunc !== "function") {
        return null;
      }
      var name = "";
      if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
        var match = toString2.call(aFunc).match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = aFunc.name;
      }
      return name;
    }
    module.exports = getFuncName3;
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/helpers.js
function colorise(value, styleType) {
  const color = ansiColors[styles[styleType]] || ansiColors[styleType];
  if (!color) {
    return String(value);
  }
  return `\x1B[${color[0]}m${String(value)}\x1B[${color[1]}m`;
}
function normaliseOptions({
  showHidden = false,
  depth = 2,
  colors = false,
  customInspect = true,
  showProxy = false,
  maxArrayLength = Infinity,
  breakLength = Infinity,
  seen = [],
  truncate: truncate2 = Infinity,
  stylize = String
} = {}) {
  const options2 = {
    showHidden: Boolean(showHidden),
    depth: Number(depth),
    colors: Boolean(colors),
    customInspect: Boolean(customInspect),
    showProxy: Boolean(showProxy),
    maxArrayLength: Number(maxArrayLength),
    breakLength: Number(breakLength),
    truncate: Number(truncate2),
    seen,
    stylize
  };
  if (options2.colors) {
    options2.stylize = colorise;
  }
  return options2;
}
function truncate(string, length, tail = truncator) {
  string = String(string);
  const tailLength = tail.length;
  const stringLength = string.length;
  if (tailLength > length && stringLength > tailLength) {
    return tail;
  }
  if (stringLength > length && stringLength > tailLength) {
    return `${string.slice(0, length - tailLength)}${tail}`;
  }
  return string;
}
function inspectList(list, options2, inspectItem, separator = ", ") {
  inspectItem = inspectItem || options2.inspect;
  const size = list.length;
  if (size === 0)
    return "";
  const originalLength = options2.truncate;
  let output = "";
  let peek = "";
  let truncated = "";
  for (let i = 0; i < size; i += 1) {
    const last = i + 1 === list.length;
    const secondToLast = i + 2 === list.length;
    truncated = `${truncator}(${list.length - i})`;
    const value = list[i];
    options2.truncate = originalLength - output.length - (last ? 0 : separator.length);
    const string = peek || inspectItem(value, options2) + (last ? "" : separator);
    const nextLength = output.length + string.length;
    const truncatedLength = nextLength + truncated.length;
    if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
      break;
    }
    if (!last && !secondToLast && truncatedLength > originalLength) {
      break;
    }
    peek = last ? "" : inspectItem(list[i + 1], options2) + (secondToLast ? "" : separator);
    if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
      break;
    }
    output += string;
    if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
      truncated = `${truncator}(${list.length - i - 1})`;
      break;
    }
    truncated = "";
  }
  return `${output}${truncated}`;
}
function quoteComplexKey(key) {
  if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
    return key;
  }
  return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
function inspectProperty([key, value], options2) {
  options2.truncate -= 2;
  if (typeof key === "string") {
    key = quoteComplexKey(key);
  } else if (typeof key !== "number") {
    key = `[${options2.inspect(key, options2)}]`;
  }
  options2.truncate -= key.length;
  value = options2.inspect(value, options2);
  return `${key}: ${value}`;
}
var ansiColors, styles, truncator;
var init_helpers = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/helpers.js"() {
    ansiColors = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    };
    styles = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    };
    truncator = "\u2026";
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/array.js
function inspectArray(array, options2) {
  const nonIndexProperties = Object.keys(array).slice(array.length);
  if (!array.length && !nonIndexProperties.length)
    return "[]";
  options2.truncate -= 4;
  const listContents = inspectList(array, options2);
  options2.truncate -= listContents.length;
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array[key]]),
      options2,
      inspectProperty
    );
  }
  return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var init_array2 = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/array.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/typedarray.js
function inspectTypedArray(array, options2) {
  const name = getArrayName(array);
  options2.truncate -= name.length + 4;
  const nonIndexProperties = Object.keys(array).slice(array.length);
  if (!array.length && !nonIndexProperties.length)
    return `${name}[]`;
  let output = "";
  for (let i = 0; i < array.length; i++) {
    const string = `${options2.stylize(truncate(array[i], options2.truncate), "number")}${i === array.length - 1 ? "" : ", "}`;
    options2.truncate -= string.length;
    if (array[i] !== array.length && options2.truncate <= 3) {
      output += `${truncator}(${array.length - array[i] + 1})`;
      break;
    }
    output += string;
  }
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array[key]]),
      options2,
      inspectProperty
    );
  }
  return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var import_get_func_name, getArrayName;
var init_typedarray = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/typedarray.js"() {
    import_get_func_name = __toESM(require_get_func_name());
    init_helpers();
    getArrayName = (array) => {
      if (typeof Buffer === "function" && array instanceof Buffer) {
        return "Buffer";
      }
      if (array[Symbol.toStringTag]) {
        return array[Symbol.toStringTag];
      }
      return (0, import_get_func_name.default)(array.constructor);
    };
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/date.js
function inspectDate(dateObject, options2) {
  const split = dateObject.toJSON().split("T");
  const date = split[0];
  return options2.stylize(`${date}T${truncate(split[1], options2.truncate - date.length - 1)}`, "date");
}
var init_date = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/date.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/function.js
function inspectFunction(func, options2) {
  const name = (0, import_get_func_name2.default)(func);
  if (!name) {
    return options2.stylize("[Function]", "special");
  }
  return options2.stylize(`[Function ${truncate(name, options2.truncate - 11)}]`, "special");
}
var import_get_func_name2;
var init_function = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/function.js"() {
    import_get_func_name2 = __toESM(require_get_func_name());
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/map.js
function inspectMapEntry([key, value], options2) {
  options2.truncate -= 4;
  key = options2.inspect(key, options2);
  options2.truncate -= key.length;
  value = options2.inspect(value, options2);
  return `${key} => ${value}`;
}
function mapToEntries(map) {
  const entries = [];
  map.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
}
function inspectMap(map, options2) {
  const size = map.size - 1;
  if (size <= 0) {
    return "Map{}";
  }
  options2.truncate -= 7;
  return `Map{ ${inspectList(mapToEntries(map), options2, inspectMapEntry)} }`;
}
var init_map = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/map.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/number.js
function inspectNumber(number, options2) {
  if (isNaN2(number)) {
    return options2.stylize("NaN", "number");
  }
  if (number === Infinity) {
    return options2.stylize("Infinity", "number");
  }
  if (number === -Infinity) {
    return options2.stylize("-Infinity", "number");
  }
  if (number === 0) {
    return options2.stylize(1 / number === Infinity ? "+0" : "-0", "number");
  }
  return options2.stylize(truncate(number, options2.truncate), "number");
}
var isNaN2;
var init_number = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/number.js"() {
    init_helpers();
    isNaN2 = Number.isNaN || ((i) => i !== i);
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/bigint.js
function inspectBigInt(number, options2) {
  let nums = truncate(number.toString(), options2.truncate - 1);
  if (nums !== truncator)
    nums += "n";
  return options2.stylize(nums, "bigint");
}
var init_bigint = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/bigint.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/regexp.js
function inspectRegExp(value, options2) {
  const flags = value.toString().split("/")[2];
  const sourceLength = options2.truncate - (2 + flags.length);
  const source = value.source;
  return options2.stylize(`/${truncate(source, sourceLength)}/${flags}`, "regexp");
}
var init_regexp = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/regexp.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/set.js
function arrayFromSet(set) {
  const values = [];
  set.forEach((value) => {
    values.push(value);
  });
  return values;
}
function inspectSet(set, options2) {
  if (set.size === 0)
    return "Set{}";
  options2.truncate -= 7;
  return `Set{ ${inspectList(arrayFromSet(set), options2)} }`;
}
var init_set = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/set.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/string.js
function escape(char) {
  return escapeCharacters[char] || `\\u${`0000${char.charCodeAt(0).toString(hex)}`.slice(-unicodeLength)}`;
}
function inspectString(string, options2) {
  if (stringEscapeChars.test(string)) {
    string = string.replace(stringEscapeChars, escape);
  }
  return options2.stylize(`'${truncate(string, options2.truncate - 2)}'`, "string");
}
var stringEscapeChars, escapeCharacters, hex, unicodeLength;
var init_string = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/string.js"() {
    init_helpers();
    stringEscapeChars = new RegExp(
      "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
      "g"
    );
    escapeCharacters = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    };
    hex = 16;
    unicodeLength = 4;
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/symbol.js
function inspectSymbol(value) {
  if ("description" in Symbol.prototype) {
    return value.description ? `Symbol(${value.description})` : "Symbol()";
  }
  return value.toString();
}
var init_symbol = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/symbol.js"() {
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/promise.js
var getPromiseValue, promise_default;
var init_promise = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/promise.js"() {
    getPromiseValue = () => "Promise{\u2026}";
    try {
      const { getPromiseDetails, kPending, kRejected } = process.binding("util");
      if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
        getPromiseValue = (value, options2) => {
          const [state, innerValue] = getPromiseDetails(value);
          if (state === kPending) {
            return "Promise{<pending>}";
          }
          return `Promise${state === kRejected ? "!" : ""}{${options2.inspect(innerValue, options2)}}`;
        };
      }
    } catch (notNode) {
    }
    promise_default = getPromiseValue;
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/object.js
function inspectObject(object2, options2) {
  const properties = Object.getOwnPropertyNames(object2);
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object2) : [];
  if (properties.length === 0 && symbols.length === 0) {
    return "{}";
  }
  options2.truncate -= 4;
  options2.seen = options2.seen || [];
  if (options2.seen.indexOf(object2) >= 0) {
    return "[Circular]";
  }
  options2.seen.push(object2);
  const propertyContents = inspectList(
    properties.map((key) => [key, object2[key]]),
    options2,
    inspectProperty
  );
  const symbolContents = inspectList(
    symbols.map((key) => [key, object2[key]]),
    options2,
    inspectProperty
  );
  options2.seen.pop();
  let sep = "";
  if (propertyContents && symbolContents) {
    sep = ", ";
  }
  return `{ ${propertyContents}${sep}${symbolContents} }`;
}
var init_object2 = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/object.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/class.js
function inspectClass(value, options2) {
  let name = "";
  if (toStringTag && toStringTag in value) {
    name = value[toStringTag];
  }
  name = name || (0, import_get_func_name3.default)(value.constructor);
  if (!name || name === "_class") {
    name = "<Anonymous Class>";
  }
  options2.truncate -= name.length;
  return `${name}${inspectObject(value, options2)}`;
}
var import_get_func_name3, toStringTag;
var init_class = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/class.js"() {
    import_get_func_name3 = __toESM(require_get_func_name());
    init_object2();
    toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/arguments.js
function inspectArguments(args, options2) {
  if (args.length === 0)
    return "Arguments[]";
  options2.truncate -= 13;
  return `Arguments[ ${inspectList(args, options2)} ]`;
}
var init_arguments = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/arguments.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/error.js
function inspectObject2(error, options2) {
  const properties = Object.getOwnPropertyNames(error).filter((key) => errorKeys.indexOf(key) === -1);
  const name = error.name;
  options2.truncate -= name.length;
  let message = "";
  if (typeof error.message === "string") {
    message = truncate(error.message, options2.truncate);
  } else {
    properties.unshift("message");
  }
  message = message ? `: ${message}` : "";
  options2.truncate -= message.length + 5;
  const propertyContents = inspectList(
    properties.map((key) => [key, error[key]]),
    options2,
    inspectProperty
  );
  return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ""}`;
}
var errorKeys;
var init_error = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/error.js"() {
    init_helpers();
    errorKeys = [
      "stack",
      "line",
      "column",
      "name",
      "message",
      "fileName",
      "lineNumber",
      "columnNumber",
      "number",
      "description"
    ];
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/html.js
function inspectAttribute([key, value], options2) {
  options2.truncate -= 3;
  if (!value) {
    return `${options2.stylize(key, "yellow")}`;
  }
  return `${options2.stylize(key, "yellow")}=${options2.stylize(`"${value}"`, "string")}`;
}
function inspectHTMLCollection(collection, options2) {
  return inspectList(collection, options2, inspectHTML, "\n");
}
function inspectHTML(element, options2) {
  const properties = element.getAttributeNames();
  const name = element.tagName.toLowerCase();
  const head = options2.stylize(`<${name}`, "special");
  const headClose = options2.stylize(`>`, "special");
  const tail = options2.stylize(`</${name}>`, "special");
  options2.truncate -= name.length * 2 + 5;
  let propertyContents = "";
  if (properties.length > 0) {
    propertyContents += " ";
    propertyContents += inspectList(
      properties.map((key) => [key, element.getAttribute(key)]),
      options2,
      inspectAttribute,
      " "
    );
  }
  options2.truncate -= propertyContents.length;
  const truncate2 = options2.truncate;
  let children = inspectHTMLCollection(element.children, options2);
  if (children && children.length > truncate2) {
    children = `${truncator}(${element.children.length})`;
  }
  return `${head}${propertyContents}${headClose}${children}${tail}`;
}
var init_html = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/lib/html.js"() {
    init_helpers();
  }
});

// ../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/index.js
var loupe_exports = {};
__export(loupe_exports, {
  custom: () => custom,
  default: () => loupe_default,
  inspect: () => inspect2,
  registerConstructor: () => registerConstructor,
  registerStringTag: () => registerStringTag
});
function inspect2(value, options2) {
  options2 = normaliseOptions(options2);
  options2.inspect = inspect2;
  const { customInspect } = options2;
  let type = value === null ? "null" : typeof value;
  if (type === "object") {
    type = toString.call(value).slice(8, -1);
  }
  if (baseTypesMap[type]) {
    return baseTypesMap[type](value, options2);
  }
  if (customInspect && value) {
    const output = inspectCustom(value, options2, type);
    if (output) {
      if (typeof output === "string")
        return output;
      return inspect2(output, options2);
    }
  }
  const proto = value ? Object.getPrototypeOf(value) : false;
  if (proto === Object.prototype || proto === null) {
    return inspectObject(value, options2);
  }
  if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
    return inspectHTML(value, options2);
  }
  if ("constructor" in value) {
    if (value.constructor !== Object) {
      return inspectClass(value, options2);
    }
    return inspectObject(value, options2);
  }
  if (value === Object(value)) {
    return inspectObject(value, options2);
  }
  return options2.stylize(String(value), type);
}
function registerConstructor(constructor, inspector) {
  if (constructorMap.has(constructor)) {
    return false;
  }
  constructorMap.add(constructor, inspector);
  return true;
}
function registerStringTag(stringTag, inspector) {
  if (stringTag in stringTagMap) {
    return false;
  }
  stringTagMap[stringTag] = inspector;
  return true;
}
var symbolsSupported, chaiInspect, nodeInspect, constructorMap, stringTagMap, baseTypesMap, inspectCustom, toString, custom, loupe_default;
var init_loupe = __esm({
  "../../node_modules/.pnpm/loupe@2.3.4/node_modules/loupe/index.js"() {
    init_array2();
    init_typedarray();
    init_date();
    init_function();
    init_map();
    init_number();
    init_bigint();
    init_regexp();
    init_set();
    init_string();
    init_symbol();
    init_promise();
    init_class();
    init_object2();
    init_arguments();
    init_error();
    init_html();
    init_helpers();
    symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
    chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
    nodeInspect = false;
    try {
      const nodeUtil = __require("util");
      nodeInspect = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
    } catch (noNodeInspect) {
      nodeInspect = false;
    }
    constructorMap = /* @__PURE__ */ new WeakMap();
    stringTagMap = {};
    baseTypesMap = {
      undefined: (value, options2) => options2.stylize("undefined", "undefined"),
      null: (value, options2) => options2.stylize(null, "null"),
      boolean: (value, options2) => options2.stylize(value, "boolean"),
      Boolean: (value, options2) => options2.stylize(value, "boolean"),
      number: inspectNumber,
      Number: inspectNumber,
      bigint: inspectBigInt,
      BigInt: inspectBigInt,
      string: inspectString,
      String: inspectString,
      function: inspectFunction,
      Function: inspectFunction,
      symbol: inspectSymbol,
      Symbol: inspectSymbol,
      Array: inspectArray,
      Date: inspectDate,
      Map: inspectMap,
      Set: inspectSet,
      RegExp: inspectRegExp,
      Promise: promise_default,
      WeakSet: (value, options2) => options2.stylize("WeakSet{\u2026}", "special"),
      WeakMap: (value, options2) => options2.stylize("WeakMap{\u2026}", "special"),
      Arguments: inspectArguments,
      Int8Array: inspectTypedArray,
      Uint8Array: inspectTypedArray,
      Uint8ClampedArray: inspectTypedArray,
      Int16Array: inspectTypedArray,
      Uint16Array: inspectTypedArray,
      Int32Array: inspectTypedArray,
      Uint32Array: inspectTypedArray,
      Float32Array: inspectTypedArray,
      Float64Array: inspectTypedArray,
      Generator: () => "",
      DataView: () => "",
      ArrayBuffer: () => "",
      Error: inspectObject2,
      HTMLCollection: inspectHTMLCollection,
      NodeList: inspectHTMLCollection
    };
    inspectCustom = (value, options2, type) => {
      if (chaiInspect in value && typeof value[chaiInspect] === "function") {
        return value[chaiInspect](options2);
      }
      if (nodeInspect && nodeInspect in value && typeof value[nodeInspect] === "function") {
        return value[nodeInspect](options2.depth, options2);
      }
      if ("inspect" in value && typeof value.inspect === "function") {
        return value.inspect(options2.depth, options2);
      }
      if ("constructor" in value && constructorMap.has(value.constructor)) {
        return constructorMap.get(value.constructor)(value, options2);
      }
      if (stringTagMap[type]) {
        return stringTagMap[type](value, options2);
      }
      return "";
    };
    toString = Object.prototype.toString;
    custom = chaiInspect;
    loupe_default = inspect2;
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/config.js
var require_config = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/config.js"(exports, module) {
    module.exports = {
      includeStack: false,
      showDiff: true,
      truncateThreshold: 40,
      useProxy: true,
      proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"]
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/inspect.js
var require_inspect = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/inspect.js"(exports, module) {
    var getName = require_get_func_name();
    var loupe = (init_loupe(), __toCommonJS(loupe_exports));
    var config2 = require_config();
    module.exports = inspect3;
    function inspect3(obj, showHidden, depth, colors) {
      var options2 = {
        colors,
        depth: typeof depth === "undefined" ? 2 : depth,
        showHidden,
        truncate: config2.truncateThreshold ? config2.truncateThreshold : Infinity
      };
      return loupe.inspect(obj, options2);
    }
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/objDisplay.js
var require_objDisplay = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/objDisplay.js"(exports, module) {
    var inspect3 = require_inspect();
    var config2 = require_config();
    module.exports = function objDisplay(obj) {
      var str = inspect3(obj), type = Object.prototype.toString.call(obj);
      if (config2.truncateThreshold && str.length >= config2.truncateThreshold) {
        if (type === "[object Function]") {
          return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
        } else if (type === "[object Array]") {
          return "[ Array(" + obj.length + ") ]";
        } else if (type === "[object Object]") {
          var keys = Object.keys(obj), kstr = keys.length > 2 ? keys.splice(0, 2).join(", ") + ", ..." : keys.join(", ");
          return "{ Object (" + kstr + ") }";
        } else {
          return str;
        }
      } else {
        return str;
      }
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getMessage.js
var require_getMessage = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getMessage.js"(exports, module) {
    var flag = require_flag();
    var getActual = require_getActual();
    var objDisplay = require_objDisplay();
    module.exports = function getMessage(obj, args) {
      var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      msg = msg.replace(/#\{this\}/g, function() {
        return objDisplay(val);
      }).replace(/#\{act\}/g, function() {
        return objDisplay(actual);
      }).replace(/#\{exp\}/g, function() {
        return objDisplay(expected);
      });
      return flagMsg ? flagMsg + ": " + msg : msg;
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/transferFlags.js
var require_transferFlags = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/transferFlags.js"(exports, module) {
    module.exports = function transferFlags(assertion, object2, includeAll) {
      var flags = assertion.__flags || (assertion.__flags = /* @__PURE__ */ Object.create(null));
      if (!object2.__flags) {
        object2.__flags = /* @__PURE__ */ Object.create(null);
      }
      includeAll = arguments.length === 3 ? includeAll : true;
      for (var flag in flags) {
        if (includeAll || flag !== "object" && flag !== "ssfi" && flag !== "lockSsfi" && flag != "message") {
          object2.__flags[flag] = flags[flag];
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/deep-eql@3.0.1/node_modules/deep-eql/index.js
var require_deep_eql = __commonJS({
  "../../node_modules/.pnpm/deep-eql@3.0.1/node_modules/deep-eql/index.js"(exports, module) {
    "use strict";
    var type = require_type_detect();
    function FakeMap() {
      this._key = "chai/deep-eql__" + Math.random() + Date.now();
    }
    FakeMap.prototype = {
      get: function getMap(key) {
        return key[this._key];
      },
      set: function setMap(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this._key, {
            value,
            configurable: true
          });
        }
      }
    };
    var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap;
    function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
      if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
        return null;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        var result = leftHandMap.get(rightHandOperand);
        if (typeof result === "boolean") {
          return result;
        }
      }
      return null;
    }
    function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
      if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
        return;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        leftHandMap.set(rightHandOperand, result);
      } else {
        leftHandMap = new MemoizeMap();
        leftHandMap.set(rightHandOperand, result);
        memoizeMap.set(leftHandOperand, leftHandMap);
      }
    }
    module.exports = deepEqual;
    module.exports.MemoizeMap = MemoizeMap;
    function deepEqual(leftHandOperand, rightHandOperand, options2) {
      if (options2 && options2.comparator) {
        return extensiveDeepEqual(leftHandOperand, rightHandOperand, options2);
      }
      var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
      if (simpleResult !== null) {
        return simpleResult;
      }
      return extensiveDeepEqual(leftHandOperand, rightHandOperand, options2);
    }
    function simpleEqual(leftHandOperand, rightHandOperand) {
      if (leftHandOperand === rightHandOperand) {
        return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
      }
      if (leftHandOperand !== leftHandOperand && rightHandOperand !== rightHandOperand) {
        return true;
      }
      if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
        return false;
      }
      return null;
    }
    function extensiveDeepEqual(leftHandOperand, rightHandOperand, options2) {
      options2 = options2 || {};
      options2.memoize = options2.memoize === false ? false : options2.memoize || new MemoizeMap();
      var comparator = options2 && options2.comparator;
      var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options2.memoize);
      if (memoizeResultLeft !== null) {
        return memoizeResultLeft;
      }
      var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options2.memoize);
      if (memoizeResultRight !== null) {
        return memoizeResultRight;
      }
      if (comparator) {
        var comparatorResult = comparator(leftHandOperand, rightHandOperand);
        if (comparatorResult === false || comparatorResult === true) {
          memoizeSet(leftHandOperand, rightHandOperand, options2.memoize, comparatorResult);
          return comparatorResult;
        }
        var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
        if (simpleResult !== null) {
          return simpleResult;
        }
      }
      var leftHandType = type(leftHandOperand);
      if (leftHandType !== type(rightHandOperand)) {
        memoizeSet(leftHandOperand, rightHandOperand, options2.memoize, false);
        return false;
      }
      memoizeSet(leftHandOperand, rightHandOperand, options2.memoize, true);
      var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options2);
      memoizeSet(leftHandOperand, rightHandOperand, options2.memoize, result);
      return result;
    }
    function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options2) {
      switch (leftHandType) {
        case "String":
        case "Number":
        case "Boolean":
        case "Date":
          return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
        case "Promise":
        case "Symbol":
        case "function":
        case "WeakMap":
        case "WeakSet":
        case "Error":
          return leftHandOperand === rightHandOperand;
        case "Arguments":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "Array":
          return iterableEqual(leftHandOperand, rightHandOperand, options2);
        case "RegExp":
          return regexpEqual(leftHandOperand, rightHandOperand);
        case "Generator":
          return generatorEqual(leftHandOperand, rightHandOperand, options2);
        case "DataView":
          return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options2);
        case "ArrayBuffer":
          return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options2);
        case "Set":
          return entriesEqual(leftHandOperand, rightHandOperand, options2);
        case "Map":
          return entriesEqual(leftHandOperand, rightHandOperand, options2);
        default:
          return objectEqual(leftHandOperand, rightHandOperand, options2);
      }
    }
    function regexpEqual(leftHandOperand, rightHandOperand) {
      return leftHandOperand.toString() === rightHandOperand.toString();
    }
    function entriesEqual(leftHandOperand, rightHandOperand, options2) {
      if (leftHandOperand.size !== rightHandOperand.size) {
        return false;
      }
      if (leftHandOperand.size === 0) {
        return true;
      }
      var leftHandItems = [];
      var rightHandItems = [];
      leftHandOperand.forEach(function gatherEntries(key, value) {
        leftHandItems.push([key, value]);
      });
      rightHandOperand.forEach(function gatherEntries(key, value) {
        rightHandItems.push([key, value]);
      });
      return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options2);
    }
    function iterableEqual(leftHandOperand, rightHandOperand, options2) {
      var length = leftHandOperand.length;
      if (length !== rightHandOperand.length) {
        return false;
      }
      if (length === 0) {
        return true;
      }
      var index = -1;
      while (++index < length) {
        if (deepEqual(leftHandOperand[index], rightHandOperand[index], options2) === false) {
          return false;
        }
      }
      return true;
    }
    function generatorEqual(leftHandOperand, rightHandOperand, options2) {
      return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options2);
    }
    function hasIteratorFunction(target) {
      return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
    }
    function getIteratorEntries(target) {
      if (hasIteratorFunction(target)) {
        try {
          return getGeneratorEntries(target[Symbol.iterator]());
        } catch (iteratorError) {
          return [];
        }
      }
      return [];
    }
    function getGeneratorEntries(generator) {
      var generatorResult = generator.next();
      var accumulator = [generatorResult.value];
      while (generatorResult.done === false) {
        generatorResult = generator.next();
        accumulator.push(generatorResult.value);
      }
      return accumulator;
    }
    function getEnumerableKeys(target) {
      var keys = [];
      for (var key in target) {
        keys.push(key);
      }
      return keys;
    }
    function keysEqual(leftHandOperand, rightHandOperand, keys, options2) {
      var length = keys.length;
      if (length === 0) {
        return true;
      }
      for (var i = 0; i < length; i += 1) {
        if (deepEqual(leftHandOperand[keys[i]], rightHandOperand[keys[i]], options2) === false) {
          return false;
        }
      }
      return true;
    }
    function objectEqual(leftHandOperand, rightHandOperand, options2) {
      var leftHandKeys = getEnumerableKeys(leftHandOperand);
      var rightHandKeys = getEnumerableKeys(rightHandOperand);
      if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
        leftHandKeys.sort();
        rightHandKeys.sort();
        if (iterableEqual(leftHandKeys, rightHandKeys) === false) {
          return false;
        }
        return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options2);
      }
      var leftHandEntries = getIteratorEntries(leftHandOperand);
      var rightHandEntries = getIteratorEntries(rightHandOperand);
      if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
        leftHandEntries.sort();
        rightHandEntries.sort();
        return iterableEqual(leftHandEntries, rightHandEntries, options2);
      }
      if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
        return true;
      }
      return false;
    }
    function isPrimitive(value) {
      return value === null || typeof value !== "object";
    }
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/isProxyEnabled.js
var require_isProxyEnabled = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/isProxyEnabled.js"(exports, module) {
    var config2 = require_config();
    module.exports = function isProxyEnabled() {
      return config2.useProxy && typeof Proxy !== "undefined" && typeof Reflect !== "undefined";
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/addProperty.js
var require_addProperty = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/addProperty.js"(exports, module) {
    var chai2 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module.exports = function addProperty(ctx, name, getter) {
      getter = getter === void 0 ? function() {
      } : getter;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function propertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", propertyGetter);
            }
            var result = getter.call(this);
            if (result !== void 0)
              return result;
            var newAssertion = new chai2.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/addLengthGuard.js
var require_addLengthGuard = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/addLengthGuard.js"(exports, module) {
    var fnLengthDesc = Object.getOwnPropertyDescriptor(function() {
    }, "length");
    module.exports = function addLengthGuard(fn, assertionName, isChainable) {
      if (!fnLengthDesc.configurable)
        return fn;
      Object.defineProperty(fn, "length", {
        get: function() {
          if (isChainable) {
            throw Error("Invalid Chai property: " + assertionName + '.length. Due to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
          }
          throw Error("Invalid Chai property: " + assertionName + '.length. See docs for proper usage of "' + assertionName + '".');
        }
      });
      return fn;
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getProperties.js
var require_getProperties = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getProperties.js"(exports, module) {
    module.exports = function getProperties(object2) {
      var result = Object.getOwnPropertyNames(object2);
      function addProperty(property) {
        if (result.indexOf(property) === -1) {
          result.push(property);
        }
      }
      var proto = Object.getPrototypeOf(object2);
      while (proto !== null) {
        Object.getOwnPropertyNames(proto).forEach(addProperty);
        proto = Object.getPrototypeOf(proto);
      }
      return result;
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/proxify.js
var require_proxify = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/proxify.js"(exports, module) {
    var config2 = require_config();
    var flag = require_flag();
    var getProperties = require_getProperties();
    var isProxyEnabled = require_isProxyEnabled();
    var builtins = ["__flags", "__methods", "_obj", "assert"];
    module.exports = function proxify(obj, nonChainableMethodName) {
      if (!isProxyEnabled())
        return obj;
      return new Proxy(obj, {
        get: function proxyGetter(target, property) {
          if (typeof property === "string" && config2.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
            if (nonChainableMethodName) {
              throw Error("Invalid Chai property: " + nonChainableMethodName + "." + property + '. See docs for proper usage of "' + nonChainableMethodName + '".');
            }
            var suggestion = null;
            var suggestionDistance = 4;
            getProperties(target).forEach(function(prop2) {
              if (!Object.prototype.hasOwnProperty(prop2) && builtins.indexOf(prop2) === -1) {
                var dist = stringDistanceCapped(
                  property,
                  prop2,
                  suggestionDistance
                );
                if (dist < suggestionDistance) {
                  suggestion = prop2;
                  suggestionDistance = dist;
                }
              }
            });
            if (suggestion !== null) {
              throw Error("Invalid Chai property: " + property + '. Did you mean "' + suggestion + '"?');
            } else {
              throw Error("Invalid Chai property: " + property);
            }
          }
          if (builtins.indexOf(property) === -1 && !flag(target, "lockSsfi")) {
            flag(target, "ssfi", proxyGetter);
          }
          return Reflect.get(target, property);
        }
      });
    };
    function stringDistanceCapped(strA, strB, cap) {
      if (Math.abs(strA.length - strB.length) >= cap) {
        return cap;
      }
      var memo2 = [];
      for (var i = 0; i <= strA.length; i++) {
        memo2[i] = Array(strB.length + 1).fill(0);
        memo2[i][0] = i;
      }
      for (var j = 0; j < strB.length; j++) {
        memo2[0][j] = j;
      }
      for (var i = 1; i <= strA.length; i++) {
        var ch = strA.charCodeAt(i - 1);
        for (var j = 1; j <= strB.length; j++) {
          if (Math.abs(i - j) >= cap) {
            memo2[i][j] = cap;
            continue;
          }
          memo2[i][j] = Math.min(
            memo2[i - 1][j] + 1,
            memo2[i][j - 1] + 1,
            memo2[i - 1][j - 1] + (ch === strB.charCodeAt(j - 1) ? 0 : 1)
          );
        }
      }
      return memo2[strA.length][strB.length];
    }
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/addMethod.js
var require_addMethod = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/addMethod.js"(exports, module) {
    var addLengthGuard = require_addLengthGuard();
    var chai2 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module.exports = function addMethod(ctx, name, method) {
      var methodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", methodWrapper);
        }
        var result = method.apply(this, arguments);
        if (result !== void 0)
          return result;
        var newAssertion = new chai2.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(methodWrapper, name, false);
      ctx[name] = proxify(methodWrapper, name);
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/overwriteProperty.js
var require_overwriteProperty = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/overwriteProperty.js"(exports, module) {
    var chai2 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module.exports = function overwriteProperty(ctx, name, getter) {
      var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = function() {
      };
      if (_get && "function" === typeof _get.get)
        _super = _get.get;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function overwritingPropertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", overwritingPropertyGetter);
            }
            var origLockSsfi = flag(this, "lockSsfi");
            flag(this, "lockSsfi", true);
            var result = getter(_super).call(this);
            flag(this, "lockSsfi", origLockSsfi);
            if (result !== void 0) {
              return result;
            }
            var newAssertion = new chai2.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/overwriteMethod.js
var require_overwriteMethod = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/overwriteMethod.js"(exports, module) {
    var addLengthGuard = require_addLengthGuard();
    var chai2 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module.exports = function overwriteMethod(ctx, name, method) {
      var _method = ctx[name], _super = function() {
        throw new Error(name + " is not a function");
      };
      if (_method && "function" === typeof _method)
        _super = _method;
      var overwritingMethodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", overwritingMethodWrapper);
        }
        var origLockSsfi = flag(this, "lockSsfi");
        flag(this, "lockSsfi", true);
        var result = method(_super).apply(this, arguments);
        flag(this, "lockSsfi", origLockSsfi);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai2.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(overwritingMethodWrapper, name, false);
      ctx[name] = proxify(overwritingMethodWrapper, name);
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/addChainableMethod.js
var require_addChainableMethod = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/addChainableMethod.js"(exports, module) {
    var addLengthGuard = require_addLengthGuard();
    var chai2 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    var canSetPrototype = typeof Object.setPrototypeOf === "function";
    var testFn = function() {
    };
    var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
      var propDesc = Object.getOwnPropertyDescriptor(testFn, name);
      if (typeof propDesc !== "object")
        return true;
      return !propDesc.configurable;
    });
    var call = Function.prototype.call;
    var apply = Function.prototype.apply;
    module.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
      if (typeof chainingBehavior !== "function") {
        chainingBehavior = function() {
        };
      }
      var chainableBehavior = {
        method,
        chainingBehavior
      };
      if (!ctx.__methods) {
        ctx.__methods = {};
      }
      ctx.__methods[name] = chainableBehavior;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function chainableMethodGetter() {
            chainableBehavior.chainingBehavior.call(this);
            var chainableMethodWrapper = function() {
              if (!flag(this, "lockSsfi")) {
                flag(this, "ssfi", chainableMethodWrapper);
              }
              var result = chainableBehavior.method.apply(this, arguments);
              if (result !== void 0) {
                return result;
              }
              var newAssertion = new chai2.Assertion();
              transferFlags(this, newAssertion);
              return newAssertion;
            };
            addLengthGuard(chainableMethodWrapper, name, true);
            if (canSetPrototype) {
              var prototype = Object.create(this);
              prototype.call = call;
              prototype.apply = apply;
              Object.setPrototypeOf(chainableMethodWrapper, prototype);
            } else {
              var asserterNames = Object.getOwnPropertyNames(ctx);
              asserterNames.forEach(function(asserterName) {
                if (excludeNames.indexOf(asserterName) !== -1) {
                  return;
                }
                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                Object.defineProperty(chainableMethodWrapper, asserterName, pd);
              });
            }
            transferFlags(this, chainableMethodWrapper);
            return proxify(chainableMethodWrapper);
          },
          configurable: true
        }
      );
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/overwriteChainableMethod.js
var require_overwriteChainableMethod = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/overwriteChainableMethod.js"(exports, module) {
    var chai2 = require_chai();
    var transferFlags = require_transferFlags();
    module.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
      var chainableBehavior = ctx.__methods[name];
      var _chainingBehavior = chainableBehavior.chainingBehavior;
      chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
        var result = chainingBehavior(_chainingBehavior).call(this);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai2.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      var _method = chainableBehavior.method;
      chainableBehavior.method = function overwritingChainableMethodWrapper() {
        var result = method(_method).apply(this, arguments);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai2.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/compareByInspect.js
var require_compareByInspect = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/compareByInspect.js"(exports, module) {
    var inspect3 = require_inspect();
    module.exports = function compareByInspect(a, b) {
      return inspect3(a) < inspect3(b) ? -1 : 1;
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js
var require_getOwnEnumerablePropertySymbols = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js"(exports, module) {
    module.exports = function getOwnEnumerablePropertySymbols(obj) {
      if (typeof Object.getOwnPropertySymbols !== "function")
        return [];
      return Object.getOwnPropertySymbols(obj).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
      });
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js
var require_getOwnEnumerableProperties = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js"(exports, module) {
    var getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    module.exports = function getOwnEnumerableProperties(obj) {
      return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
    };
  }
});

// ../../node_modules/.pnpm/check-error@1.0.2/node_modules/check-error/index.js
var require_check_error = __commonJS({
  "../../node_modules/.pnpm/check-error@1.0.2/node_modules/check-error/index.js"(exports, module) {
    "use strict";
    function compatibleInstance(thrown, errorLike) {
      return errorLike instanceof Error && thrown === errorLike;
    }
    function compatibleConstructor(thrown, errorLike) {
      if (errorLike instanceof Error) {
        return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
      } else if (errorLike.prototype instanceof Error || errorLike === Error) {
        return thrown.constructor === errorLike || thrown instanceof errorLike;
      }
      return false;
    }
    function compatibleMessage(thrown, errMatcher) {
      var comparisonString = typeof thrown === "string" ? thrown : thrown.message;
      if (errMatcher instanceof RegExp) {
        return errMatcher.test(comparisonString);
      } else if (typeof errMatcher === "string") {
        return comparisonString.indexOf(errMatcher) !== -1;
      }
      return false;
    }
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
    function getFunctionName2(constructorFn) {
      var name = "";
      if (typeof constructorFn.name === "undefined") {
        var match = String(constructorFn).match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = constructorFn.name;
      }
      return name;
    }
    function getConstructorName(errorLike) {
      var constructorName = errorLike;
      if (errorLike instanceof Error) {
        constructorName = getFunctionName2(errorLike.constructor);
      } else if (typeof errorLike === "function") {
        constructorName = getFunctionName2(errorLike).trim() || getFunctionName2(new errorLike());
      }
      return constructorName;
    }
    function getMessage(errorLike) {
      var msg = "";
      if (errorLike && errorLike.message) {
        msg = errorLike.message;
      } else if (typeof errorLike === "string") {
        msg = errorLike;
      }
      return msg;
    }
    module.exports = {
      compatibleInstance,
      compatibleConstructor,
      compatibleMessage,
      getMessage,
      getConstructorName
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/isNaN.js
var require_isNaN = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/isNaN.js"(exports, module) {
    function isNaN3(value) {
      return value !== value;
    }
    module.exports = Number.isNaN || isNaN3;
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getOperator.js
var require_getOperator = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/getOperator.js"(exports, module) {
    var type = require_type_detect();
    var flag = require_flag();
    function isObjectType(obj) {
      var objectType = type(obj);
      var objectTypes = ["Array", "Object", "function"];
      return objectTypes.indexOf(objectType) !== -1;
    }
    module.exports = function getOperator(obj, args) {
      var operator = flag(obj, "operator");
      var negate = flag(obj, "negate");
      var expected = args[3];
      var msg = negate ? args[2] : args[1];
      if (operator) {
        return operator;
      }
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      if (!msg) {
        return void 0;
      }
      if (/\shave\s/.test(msg)) {
        return void 0;
      }
      var isObject = isObjectType(expected);
      if (/\snot\s/.test(msg)) {
        return isObject ? "notDeepStrictEqual" : "notStrictEqual";
      }
      return isObject ? "deepStrictEqual" : "strictEqual";
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/index.js
var require_utils2 = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/utils/index.js"(exports) {
    var pathval = require_pathval();
    exports.test = require_test();
    exports.type = require_type_detect();
    exports.expectTypes = require_expectTypes();
    exports.getMessage = require_getMessage();
    exports.getActual = require_getActual();
    exports.inspect = require_inspect();
    exports.objDisplay = require_objDisplay();
    exports.flag = require_flag();
    exports.transferFlags = require_transferFlags();
    exports.eql = require_deep_eql();
    exports.getPathInfo = pathval.getPathInfo;
    exports.hasProperty = pathval.hasProperty;
    exports.getName = require_get_func_name();
    exports.addProperty = require_addProperty();
    exports.addMethod = require_addMethod();
    exports.overwriteProperty = require_overwriteProperty();
    exports.overwriteMethod = require_overwriteMethod();
    exports.addChainableMethod = require_addChainableMethod();
    exports.overwriteChainableMethod = require_overwriteChainableMethod();
    exports.compareByInspect = require_compareByInspect();
    exports.getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    exports.getOwnEnumerableProperties = require_getOwnEnumerableProperties();
    exports.checkError = require_check_error();
    exports.proxify = require_proxify();
    exports.addLengthGuard = require_addLengthGuard();
    exports.isProxyEnabled = require_isProxyEnabled();
    exports.isNaN = require_isNaN();
    exports.getOperator = require_getOperator();
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/assertion.js
var require_assertion = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/assertion.js"(exports, module) {
    var config2 = require_config();
    module.exports = function(_chai, util2) {
      var AssertionError2 = _chai.AssertionError, flag = util2.flag;
      _chai.Assertion = Assertion2;
      function Assertion2(obj, msg, ssfi, lockSsfi) {
        flag(this, "ssfi", ssfi || Assertion2);
        flag(this, "lockSsfi", lockSsfi);
        flag(this, "object", obj);
        flag(this, "message", msg);
        return util2.proxify(this);
      }
      Object.defineProperty(Assertion2, "includeStack", {
        get: function() {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          return config2.includeStack;
        },
        set: function(value) {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          config2.includeStack = value;
        }
      });
      Object.defineProperty(Assertion2, "showDiff", {
        get: function() {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          return config2.showDiff;
        },
        set: function(value) {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          config2.showDiff = value;
        }
      });
      Assertion2.addProperty = function(name, fn) {
        util2.addProperty(this.prototype, name, fn);
      };
      Assertion2.addMethod = function(name, fn) {
        util2.addMethod(this.prototype, name, fn);
      };
      Assertion2.addChainableMethod = function(name, fn, chainingBehavior) {
        util2.addChainableMethod(this.prototype, name, fn, chainingBehavior);
      };
      Assertion2.overwriteProperty = function(name, fn) {
        util2.overwriteProperty(this.prototype, name, fn);
      };
      Assertion2.overwriteMethod = function(name, fn) {
        util2.overwriteMethod(this.prototype, name, fn);
      };
      Assertion2.overwriteChainableMethod = function(name, fn, chainingBehavior) {
        util2.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
      };
      Assertion2.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
        var ok = util2.test(this, arguments);
        if (false !== showDiff)
          showDiff = true;
        if (void 0 === expected && void 0 === _actual)
          showDiff = false;
        if (true !== config2.showDiff)
          showDiff = false;
        if (!ok) {
          msg = util2.getMessage(this, arguments);
          var actual = util2.getActual(this, arguments);
          var assertionErrorObjectProperties = {
            actual,
            expected,
            showDiff
          };
          var operator = util2.getOperator(this, arguments);
          if (operator) {
            assertionErrorObjectProperties.operator = operator;
          }
          throw new AssertionError2(
            msg,
            assertionErrorObjectProperties,
            config2.includeStack ? this.assert : flag(this, "ssfi")
          );
        }
      };
      Object.defineProperty(
        Assertion2.prototype,
        "_obj",
        {
          get: function() {
            return flag(this, "object");
          },
          set: function(val) {
            flag(this, "object", val);
          }
        }
      );
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/core/assertions.js
var require_assertions = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/core/assertions.js"(exports, module) {
    module.exports = function(chai2, _) {
      var Assertion2 = chai2.Assertion, AssertionError2 = chai2.AssertionError, flag = _.flag;
      [
        "to",
        "be",
        "been",
        "is",
        "and",
        "has",
        "have",
        "with",
        "that",
        "which",
        "at",
        "of",
        "same",
        "but",
        "does",
        "still",
        "also"
      ].forEach(function(chain) {
        Assertion2.addProperty(chain);
      });
      Assertion2.addProperty("not", function() {
        flag(this, "negate", true);
      });
      Assertion2.addProperty("deep", function() {
        flag(this, "deep", true);
      });
      Assertion2.addProperty("nested", function() {
        flag(this, "nested", true);
      });
      Assertion2.addProperty("own", function() {
        flag(this, "own", true);
      });
      Assertion2.addProperty("ordered", function() {
        flag(this, "ordered", true);
      });
      Assertion2.addProperty("any", function() {
        flag(this, "any", true);
        flag(this, "all", false);
      });
      Assertion2.addProperty("all", function() {
        flag(this, "all", true);
        flag(this, "any", false);
      });
      function an(type, msg) {
        if (msg)
          flag(this, "message", msg);
        type = type.toLowerCase();
        var obj = flag(this, "object"), article = ~["a", "e", "i", "o", "u"].indexOf(type.charAt(0)) ? "an " : "a ";
        this.assert(
          type === _.type(obj).toLowerCase(),
          "expected #{this} to be " + article + type,
          "expected #{this} not to be " + article + type
        );
      }
      Assertion2.addChainableMethod("an", an);
      Assertion2.addChainableMethod("a", an);
      function SameValueZero(a, b) {
        return _.isNaN(a) && _.isNaN(b) || a === b;
      }
      function includeChainingBehavior() {
        flag(this, "contains", true);
      }
      function include(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), negate = flag(this, "negate"), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), descriptor = isDeep ? "deep " : "";
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var included = false;
        switch (objType) {
          case "string":
            included = obj.indexOf(val) !== -1;
            break;
          case "weakset":
            if (isDeep) {
              throw new AssertionError2(
                flagMsg + "unable to use .deep.include with WeakSet",
                void 0,
                ssfi
              );
            }
            included = obj.has(val);
            break;
          case "map":
            var isEql = isDeep ? _.eql : SameValueZero;
            obj.forEach(function(item) {
              included = included || isEql(item, val);
            });
            break;
          case "set":
            if (isDeep) {
              obj.forEach(function(item) {
                included = included || _.eql(item, val);
              });
            } else {
              included = obj.has(val);
            }
            break;
          case "array":
            if (isDeep) {
              included = obj.some(function(item) {
                return _.eql(item, val);
              });
            } else {
              included = obj.indexOf(val) !== -1;
            }
            break;
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + "the given combination of arguments (" + objType + " and " + _.type(val).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + _.type(val).toLowerCase(),
                void 0,
                ssfi
              );
            }
            var props = Object.keys(val), firstErr = null, numErrs = 0;
            props.forEach(function(prop2) {
              var propAssertion = new Assertion2(obj);
              _.transferFlags(this, propAssertion, true);
              flag(propAssertion, "lockSsfi", true);
              if (!negate || props.length === 1) {
                propAssertion.property(prop2, val[prop2]);
                return;
              }
              try {
                propAssertion.property(prop2, val[prop2]);
              } catch (err2) {
                if (!_.checkError.compatibleConstructor(err2, AssertionError2)) {
                  throw err2;
                }
                if (firstErr === null)
                  firstErr = err2;
                numErrs++;
              }
            }, this);
            if (negate && props.length > 1 && numErrs === props.length) {
              throw firstErr;
            }
            return;
        }
        this.assert(
          included,
          "expected #{this} to " + descriptor + "include " + _.inspect(val),
          "expected #{this} to not " + descriptor + "include " + _.inspect(val)
        );
      }
      Assertion2.addChainableMethod("include", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contain", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contains", include, includeChainingBehavior);
      Assertion2.addChainableMethod("includes", include, includeChainingBehavior);
      Assertion2.addProperty("ok", function() {
        this.assert(
          flag(this, "object"),
          "expected #{this} to be truthy",
          "expected #{this} to be falsy"
        );
      });
      Assertion2.addProperty("true", function() {
        this.assert(
          true === flag(this, "object"),
          "expected #{this} to be true",
          "expected #{this} to be false",
          flag(this, "negate") ? false : true
        );
      });
      Assertion2.addProperty("false", function() {
        this.assert(
          false === flag(this, "object"),
          "expected #{this} to be false",
          "expected #{this} to be true",
          flag(this, "negate") ? true : false
        );
      });
      Assertion2.addProperty("null", function() {
        this.assert(
          null === flag(this, "object"),
          "expected #{this} to be null",
          "expected #{this} not to be null"
        );
      });
      Assertion2.addProperty("undefined", function() {
        this.assert(
          void 0 === flag(this, "object"),
          "expected #{this} to be undefined",
          "expected #{this} not to be undefined"
        );
      });
      Assertion2.addProperty("NaN", function() {
        this.assert(
          _.isNaN(flag(this, "object")),
          "expected #{this} to be NaN",
          "expected #{this} not to be NaN"
        );
      });
      function assertExist() {
        var val = flag(this, "object");
        this.assert(
          val !== null && val !== void 0,
          "expected #{this} to exist",
          "expected #{this} to not exist"
        );
      }
      Assertion2.addProperty("exist", assertExist);
      Assertion2.addProperty("exists", assertExist);
      Assertion2.addProperty("empty", function() {
        var val = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), itemsCount;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        switch (_.type(val).toLowerCase()) {
          case "array":
          case "string":
            itemsCount = val.length;
            break;
          case "map":
          case "set":
            itemsCount = val.size;
            break;
          case "weakmap":
          case "weakset":
            throw new AssertionError2(
              flagMsg + ".empty was passed a weak collection",
              void 0,
              ssfi
            );
          case "function":
            var msg = flagMsg + ".empty was passed a function " + _.getName(val);
            throw new AssertionError2(msg.trim(), void 0, ssfi);
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + ".empty was passed non-string primitive " + _.inspect(val),
                void 0,
                ssfi
              );
            }
            itemsCount = Object.keys(val).length;
        }
        this.assert(
          0 === itemsCount,
          "expected #{this} to be empty",
          "expected #{this} not to be empty"
        );
      });
      function checkArguments() {
        var obj = flag(this, "object"), type = _.type(obj);
        this.assert(
          "Arguments" === type,
          "expected #{this} to be arguments but got " + type,
          "expected #{this} to not be arguments"
        );
      }
      Assertion2.addProperty("arguments", checkArguments);
      Assertion2.addProperty("Arguments", checkArguments);
      function assertEqual(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        if (flag(this, "deep")) {
          var prevLockSsfi = flag(this, "lockSsfi");
          flag(this, "lockSsfi", true);
          this.eql(val);
          flag(this, "lockSsfi", prevLockSsfi);
        } else {
          this.assert(
            val === obj,
            "expected #{this} to equal #{exp}",
            "expected #{this} to not equal #{exp}",
            val,
            this._obj,
            true
          );
        }
      }
      Assertion2.addMethod("equal", assertEqual);
      Assertion2.addMethod("equals", assertEqual);
      Assertion2.addMethod("eq", assertEqual);
      function assertEql(obj, msg) {
        if (msg)
          flag(this, "message", msg);
        this.assert(
          _.eql(obj, flag(this, "object")),
          "expected #{this} to deeply equal #{exp}",
          "expected #{this} to not deeply equal #{exp}",
          obj,
          this._obj,
          true
        );
      }
      Assertion2.addMethod("eql", assertEql);
      Assertion2.addMethod("eqls", assertEql);
      function assertAbove(n, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to above must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to above must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount > n,
            "expected #{this} to have a " + descriptor + " above #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " above #{exp}",
            n,
            itemsCount
          );
        } else {
          this.assert(
            obj > n,
            "expected #{this} to be above #{exp}",
            "expected #{this} to be at most #{exp}",
            n
          );
        }
      }
      Assertion2.addMethod("above", assertAbove);
      Assertion2.addMethod("gt", assertAbove);
      Assertion2.addMethod("greaterThan", assertAbove);
      function assertLeast(n, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to least must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to least must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= n,
            "expected #{this} to have a " + descriptor + " at least #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " below #{exp}",
            n,
            itemsCount
          );
        } else {
          this.assert(
            obj >= n,
            "expected #{this} to be at least #{exp}",
            "expected #{this} to be below #{exp}",
            n
          );
        }
      }
      Assertion2.addMethod("least", assertLeast);
      Assertion2.addMethod("gte", assertLeast);
      Assertion2.addMethod("greaterThanOrEqual", assertLeast);
      function assertBelow(n, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to below must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to below must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount < n,
            "expected #{this} to have a " + descriptor + " below #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " below #{exp}",
            n,
            itemsCount
          );
        } else {
          this.assert(
            obj < n,
            "expected #{this} to be below #{exp}",
            "expected #{this} to be at least #{exp}",
            n
          );
        }
      }
      Assertion2.addMethod("below", assertBelow);
      Assertion2.addMethod("lt", assertBelow);
      Assertion2.addMethod("lessThan", assertBelow);
      function assertMost(n, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to most must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to most must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount <= n,
            "expected #{this} to have a " + descriptor + " at most #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " above #{exp}",
            n,
            itemsCount
          );
        } else {
          this.assert(
            obj <= n,
            "expected #{this} to be at most #{exp}",
            "expected #{this} to be above #{exp}",
            n
          );
        }
      }
      Assertion2.addMethod("most", assertMost);
      Assertion2.addMethod("lte", assertMost);
      Assertion2.addMethod("lessThanOrEqual", assertMost);
      Assertion2.addMethod("within", function(start, finish, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), startType = _.type(start).toLowerCase(), finishType = _.type(finish).toLowerCase(), errorMessage, shouldThrow = true, range = startType === "date" && finishType === "date" ? start.toISOString() + ".." + finish.toISOString() : start + ".." + finish;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && (startType !== "date" || finishType !== "date"))) {
          errorMessage = msgPrefix + "the arguments to within must be dates";
        } else if ((startType !== "number" || finishType !== "number") && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the arguments to within must be numbers";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= start && itemsCount <= finish,
            "expected #{this} to have a " + descriptor + " within " + range,
            "expected #{this} to not have a " + descriptor + " within " + range
          );
        } else {
          this.assert(
            obj >= start && obj <= finish,
            "expected #{this} to be within " + range,
            "expected #{this} to not be within " + range
          );
        }
      });
      function assertInstanceOf(constructor, msg) {
        if (msg)
          flag(this, "message", msg);
        var target = flag(this, "object");
        var ssfi = flag(this, "ssfi");
        var flagMsg = flag(this, "message");
        try {
          var isInstanceOf = target instanceof constructor;
        } catch (err2) {
          if (err2 instanceof TypeError) {
            flagMsg = flagMsg ? flagMsg + ": " : "";
            throw new AssertionError2(
              flagMsg + "The instanceof assertion needs a constructor but " + _.type(constructor) + " was given.",
              void 0,
              ssfi
            );
          }
          throw err2;
        }
        var name = _.getName(constructor);
        if (name === null) {
          name = "an unnamed constructor";
        }
        this.assert(
          isInstanceOf,
          "expected #{this} to be an instance of " + name,
          "expected #{this} to not be an instance of " + name
        );
      }
      ;
      Assertion2.addMethod("instanceof", assertInstanceOf);
      Assertion2.addMethod("instanceOf", assertInstanceOf);
      function assertProperty(name, val, msg) {
        if (msg)
          flag(this, "message", msg);
        var isNested = flag(this, "nested"), isOwn = flag(this, "own"), flagMsg = flag(this, "message"), obj = flag(this, "object"), ssfi = flag(this, "ssfi"), nameType = typeof name;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        if (isNested) {
          if (nameType !== "string") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string when using nested syntax",
              void 0,
              ssfi
            );
          }
        } else {
          if (nameType !== "string" && nameType !== "number" && nameType !== "symbol") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string, number, or symbol",
              void 0,
              ssfi
            );
          }
        }
        if (isNested && isOwn) {
          throw new AssertionError2(
            flagMsg + 'The "nested" and "own" flags cannot be combined.',
            void 0,
            ssfi
          );
        }
        if (obj === null || obj === void 0) {
          throw new AssertionError2(
            flagMsg + "Target cannot be null or undefined.",
            void 0,
            ssfi
          );
        }
        var isDeep = flag(this, "deep"), negate = flag(this, "negate"), pathInfo = isNested ? _.getPathInfo(obj, name) : null, value = isNested ? pathInfo.value : obj[name];
        var descriptor = "";
        if (isDeep)
          descriptor += "deep ";
        if (isOwn)
          descriptor += "own ";
        if (isNested)
          descriptor += "nested ";
        descriptor += "property ";
        var hasProperty;
        if (isOwn)
          hasProperty = Object.prototype.hasOwnProperty.call(obj, name);
        else if (isNested)
          hasProperty = pathInfo.exists;
        else
          hasProperty = _.hasProperty(obj, name);
        if (!negate || arguments.length === 1) {
          this.assert(
            hasProperty,
            "expected #{this} to have " + descriptor + _.inspect(name),
            "expected #{this} to not have " + descriptor + _.inspect(name)
          );
        }
        if (arguments.length > 1) {
          this.assert(
            hasProperty && (isDeep ? _.eql(val, value) : val === value),
            "expected #{this} to have " + descriptor + _.inspect(name) + " of #{exp}, but got #{act}",
            "expected #{this} to not have " + descriptor + _.inspect(name) + " of #{act}",
            val,
            value
          );
        }
        flag(this, "object", value);
      }
      Assertion2.addMethod("property", assertProperty);
      function assertOwnProperty(name, value, msg) {
        flag(this, "own", true);
        assertProperty.apply(this, arguments);
      }
      Assertion2.addMethod("ownProperty", assertOwnProperty);
      Assertion2.addMethod("haveOwnProperty", assertOwnProperty);
      function assertOwnPropertyDescriptor(name, descriptor, msg) {
        if (typeof descriptor === "string") {
          msg = descriptor;
          descriptor = null;
        }
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
        if (actualDescriptor && descriptor) {
          this.assert(
            _.eql(descriptor, actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to match " + _.inspect(descriptor) + ", got " + _.inspect(actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to not match " + _.inspect(descriptor),
            descriptor,
            actualDescriptor,
            true
          );
        } else {
          this.assert(
            actualDescriptor,
            "expected #{this} to have an own property descriptor for " + _.inspect(name),
            "expected #{this} to not have an own property descriptor for " + _.inspect(name)
          );
        }
        flag(this, "object", actualDescriptor);
      }
      Assertion2.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
      Assertion2.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
      function assertLengthChain() {
        flag(this, "doLength", true);
      }
      function assertLength(n, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), descriptor = "length", itemsCount;
        switch (objType) {
          case "map":
          case "set":
            descriptor = "size";
            itemsCount = obj.size;
            break;
          default:
            new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
            itemsCount = obj.length;
        }
        this.assert(
          itemsCount == n,
          "expected #{this} to have a " + descriptor + " of #{exp} but got #{act}",
          "expected #{this} to not have a " + descriptor + " of #{act}",
          n,
          itemsCount
        );
      }
      Assertion2.addChainableMethod("length", assertLength, assertLengthChain);
      Assertion2.addChainableMethod("lengthOf", assertLength, assertLengthChain);
      function assertMatch(re, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        this.assert(
          re.exec(obj),
          "expected #{this} to match " + re,
          "expected #{this} not to match " + re
        );
      }
      Assertion2.addMethod("match", assertMatch);
      Assertion2.addMethod("matches", assertMatch);
      Assertion2.addMethod("string", function(str, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("string");
        this.assert(
          ~obj.indexOf(str),
          "expected #{this} to contain " + _.inspect(str),
          "expected #{this} to not contain " + _.inspect(str)
        );
      });
      function assertKeys(keys) {
        var obj = flag(this, "object"), objType = _.type(obj), keysType = _.type(keys), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), str, deepStr = "", actual, ok = true, flagMsg = flag(this, "message");
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var mixedArgsMsg = flagMsg + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
        if (objType === "Map" || objType === "Set") {
          deepStr = isDeep ? "deeply " : "";
          actual = [];
          obj.forEach(function(val, key) {
            actual.push(key);
          });
          if (keysType !== "Array") {
            keys = Array.prototype.slice.call(arguments);
          }
        } else {
          actual = _.getOwnEnumerableProperties(obj);
          switch (keysType) {
            case "Array":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              break;
            case "Object":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              keys = Object.keys(keys);
              break;
            default:
              keys = Array.prototype.slice.call(arguments);
          }
          keys = keys.map(function(val) {
            return typeof val === "symbol" ? val : String(val);
          });
        }
        if (!keys.length) {
          throw new AssertionError2(flagMsg + "keys required", void 0, ssfi);
        }
        var len = keys.length, any = flag(this, "any"), all = flag(this, "all"), expected = keys;
        if (!any && !all) {
          all = true;
        }
        if (any) {
          ok = expected.some(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
        }
        if (all) {
          ok = expected.every(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
          if (!flag(this, "contains")) {
            ok = ok && keys.length == actual.length;
          }
        }
        if (len > 1) {
          keys = keys.map(function(key) {
            return _.inspect(key);
          });
          var last = keys.pop();
          if (all) {
            str = keys.join(", ") + ", and " + last;
          }
          if (any) {
            str = keys.join(", ") + ", or " + last;
          }
        } else {
          str = _.inspect(keys[0]);
        }
        str = (len > 1 ? "keys " : "key ") + str;
        str = (flag(this, "contains") ? "contain " : "have ") + str;
        this.assert(
          ok,
          "expected #{this} to " + deepStr + str,
          "expected #{this} to not " + deepStr + str,
          expected.slice(0).sort(_.compareByInspect),
          actual.sort(_.compareByInspect),
          true
        );
      }
      Assertion2.addMethod("keys", assertKeys);
      Assertion2.addMethod("key", assertKeys);
      function assertThrows(errorLike, errMsgMatcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), negate = flag(this, "negate") || false;
        new Assertion2(obj, flagMsg, ssfi, true).is.a("function");
        if (errorLike instanceof RegExp || typeof errorLike === "string") {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var caughtErr;
        try {
          obj();
        } catch (err2) {
          caughtErr = err2;
        }
        var everyArgIsUndefined = errorLike === void 0 && errMsgMatcher === void 0;
        var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
        var errorLikeFail = false;
        var errMsgMatcherFail = false;
        if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
          var errorLikeString = "an error";
          if (errorLike instanceof Error) {
            errorLikeString = "#{exp}";
          } else if (errorLike) {
            errorLikeString = _.checkError.getConstructorName(errorLike);
          }
          this.assert(
            caughtErr,
            "expected #{this} to throw " + errorLikeString,
            "expected #{this} to not throw an error but #{act} was thrown",
            errorLike && errorLike.toString(),
            caughtErr instanceof Error ? caughtErr.toString() : typeof caughtErr === "string" ? caughtErr : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        if (errorLike && caughtErr) {
          if (errorLike instanceof Error) {
            var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);
            if (isCompatibleInstance === negate) {
              if (everyArgIsDefined && negate) {
                errorLikeFail = true;
              } else {
                this.assert(
                  negate,
                  "expected #{this} to throw #{exp} but #{act} was thrown",
                  "expected #{this} to not throw #{exp}" + (caughtErr && !negate ? " but #{act} was thrown" : ""),
                  errorLike.toString(),
                  caughtErr.toString()
                );
              }
            }
          }
          var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
          if (isCompatibleConstructor === negate) {
            if (everyArgIsDefined && negate) {
              errorLikeFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw #{exp} but #{act} was thrown",
                "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
                errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
                caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
              );
            }
          }
        }
        if (caughtErr && errMsgMatcher !== void 0 && errMsgMatcher !== null) {
          var placeholder = "including";
          if (errMsgMatcher instanceof RegExp) {
            placeholder = "matching";
          }
          var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
          if (isCompatibleMessage === negate) {
            if (everyArgIsDefined && negate) {
              errMsgMatcherFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw error " + placeholder + " #{exp} but got #{act}",
                "expected #{this} to throw error not " + placeholder + " #{exp}",
                errMsgMatcher,
                _.checkError.getMessage(caughtErr)
              );
            }
          }
        }
        if (errorLikeFail && errMsgMatcherFail) {
          this.assert(
            negate,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
            errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
            caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        flag(this, "object", caughtErr);
      }
      ;
      Assertion2.addMethod("throw", assertThrows);
      Assertion2.addMethod("throws", assertThrows);
      Assertion2.addMethod("Throw", assertThrows);
      function respondTo(method, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), itself = flag(this, "itself"), context = "function" === typeof obj && !itself ? obj.prototype[method] : obj[method];
        this.assert(
          "function" === typeof context,
          "expected #{this} to respond to " + _.inspect(method),
          "expected #{this} to not respond to " + _.inspect(method)
        );
      }
      Assertion2.addMethod("respondTo", respondTo);
      Assertion2.addMethod("respondsTo", respondTo);
      Assertion2.addProperty("itself", function() {
        flag(this, "itself", true);
      });
      function satisfy(matcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var result = matcher(obj);
        this.assert(
          result,
          "expected #{this} to satisfy " + _.objDisplay(matcher),
          "expected #{this} to not satisfy" + _.objDisplay(matcher),
          flag(this, "negate") ? false : true,
          result
        );
      }
      Assertion2.addMethod("satisfy", satisfy);
      Assertion2.addMethod("satisfies", satisfy);
      function closeTo(expected, delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("number");
        if (typeof expected !== "number" || typeof delta !== "number") {
          flagMsg = flagMsg ? flagMsg + ": " : "";
          var deltaMessage = delta === void 0 ? ", and a delta is required" : "";
          throw new AssertionError2(
            flagMsg + "the arguments to closeTo or approximately must be numbers" + deltaMessage,
            void 0,
            ssfi
          );
        }
        this.assert(
          Math.abs(obj - expected) <= delta,
          "expected #{this} to be close to " + expected + " +/- " + delta,
          "expected #{this} not to be close to " + expected + " +/- " + delta
        );
      }
      Assertion2.addMethod("closeTo", closeTo);
      Assertion2.addMethod("approximately", closeTo);
      function isSubsetOf(subset, superset, cmp, contains, ordered) {
        if (!contains) {
          if (subset.length !== superset.length)
            return false;
          superset = superset.slice();
        }
        return subset.every(function(elem, idx) {
          if (ordered)
            return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];
          if (!cmp) {
            var matchIdx = superset.indexOf(elem);
            if (matchIdx === -1)
              return false;
            if (!contains)
              superset.splice(matchIdx, 1);
            return true;
          }
          return superset.some(function(elem2, matchIdx2) {
            if (!cmp(elem, elem2))
              return false;
            if (!contains)
              superset.splice(matchIdx2, 1);
            return true;
          });
        });
      }
      Assertion2.addMethod("members", function(subset, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).to.be.an("array");
        new Assertion2(subset, flagMsg, ssfi, true).to.be.an("array");
        var contains = flag(this, "contains");
        var ordered = flag(this, "ordered");
        var subject, failMsg, failNegateMsg;
        if (contains) {
          subject = ordered ? "an ordered superset" : "a superset";
          failMsg = "expected #{this} to be " + subject + " of #{exp}";
          failNegateMsg = "expected #{this} to not be " + subject + " of #{exp}";
        } else {
          subject = ordered ? "ordered members" : "members";
          failMsg = "expected #{this} to have the same " + subject + " as #{exp}";
          failNegateMsg = "expected #{this} to not have the same " + subject + " as #{exp}";
        }
        var cmp = flag(this, "deep") ? _.eql : void 0;
        this.assert(
          isSubsetOf(subset, obj, cmp, contains, ordered),
          failMsg,
          failNegateMsg,
          subset,
          obj,
          true
        );
      });
      function oneOf(list, msg) {
        if (msg)
          flag(this, "message", msg);
        var expected = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), contains = flag(this, "contains"), isDeep = flag(this, "deep");
        new Assertion2(list, flagMsg, ssfi, true).to.be.an("array");
        if (contains) {
          this.assert(
            list.some(function(possibility) {
              return expected.indexOf(possibility) > -1;
            }),
            "expected #{this} to contain one of #{exp}",
            "expected #{this} to not contain one of #{exp}",
            list,
            expected
          );
        } else {
          if (isDeep) {
            this.assert(
              list.some(function(possibility) {
                return _.eql(expected, possibility);
              }),
              "expected #{this} to deeply equal one of #{exp}",
              "expected #{this} to deeply equal one of #{exp}",
              list,
              expected
            );
          } else {
            this.assert(
              list.indexOf(expected) > -1,
              "expected #{this} to be one of #{exp}",
              "expected #{this} to not be one of #{exp}",
              list,
              expected
            );
          }
        }
      }
      Assertion2.addMethod("oneOf", oneOf);
      function assertChanges(subject, prop2, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop2) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop2);
          initial = subject[prop2];
        }
        fn();
        var final = prop2 === void 0 || prop2 === null ? subject() : subject[prop2];
        var msgObj = prop2 === void 0 || prop2 === null ? initial : "." + prop2;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "change");
        flag(this, "realDelta", final !== initial);
        this.assert(
          initial !== final,
          "expected " + msgObj + " to change",
          "expected " + msgObj + " to not change"
        );
      }
      Assertion2.addMethod("change", assertChanges);
      Assertion2.addMethod("changes", assertChanges);
      function assertIncreases(subject, prop2, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop2) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop2);
          initial = subject[prop2];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn();
        var final = prop2 === void 0 || prop2 === null ? subject() : subject[prop2];
        var msgObj = prop2 === void 0 || prop2 === null ? initial : "." + prop2;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "increase");
        flag(this, "realDelta", final - initial);
        this.assert(
          final - initial > 0,
          "expected " + msgObj + " to increase",
          "expected " + msgObj + " to not increase"
        );
      }
      Assertion2.addMethod("increase", assertIncreases);
      Assertion2.addMethod("increases", assertIncreases);
      function assertDecreases(subject, prop2, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop2) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop2);
          initial = subject[prop2];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn();
        var final = prop2 === void 0 || prop2 === null ? subject() : subject[prop2];
        var msgObj = prop2 === void 0 || prop2 === null ? initial : "." + prop2;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "decrease");
        flag(this, "realDelta", initial - final);
        this.assert(
          final - initial < 0,
          "expected " + msgObj + " to decrease",
          "expected " + msgObj + " to not decrease"
        );
      }
      Assertion2.addMethod("decrease", assertDecreases);
      Assertion2.addMethod("decreases", assertDecreases);
      function assertDelta(delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var msgObj = flag(this, "deltaMsgObj");
        var initial = flag(this, "initialDeltaValue");
        var final = flag(this, "finalDeltaValue");
        var behavior = flag(this, "deltaBehavior");
        var realDelta = flag(this, "realDelta");
        var expression;
        if (behavior === "change") {
          expression = Math.abs(final - initial) === Math.abs(delta);
        } else {
          expression = realDelta === Math.abs(delta);
        }
        this.assert(
          expression,
          "expected " + msgObj + " to " + behavior + " by " + delta,
          "expected " + msgObj + " to not " + behavior + " by " + delta
        );
      }
      Assertion2.addMethod("by", assertDelta);
      Assertion2.addProperty("extensible", function() {
        var obj = flag(this, "object");
        var isExtensible = obj === Object(obj) && Object.isExtensible(obj);
        this.assert(
          isExtensible,
          "expected #{this} to be extensible",
          "expected #{this} to not be extensible"
        );
      });
      Assertion2.addProperty("sealed", function() {
        var obj = flag(this, "object");
        var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;
        this.assert(
          isSealed,
          "expected #{this} to be sealed",
          "expected #{this} to not be sealed"
        );
      });
      Assertion2.addProperty("frozen", function() {
        var obj = flag(this, "object");
        var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;
        this.assert(
          isFrozen,
          "expected #{this} to be frozen",
          "expected #{this} to not be frozen"
        );
      });
      Assertion2.addProperty("finite", function(msg) {
        var obj = flag(this, "object");
        this.assert(
          typeof obj === "number" && isFinite(obj),
          "expected #{this} to be a finite number",
          "expected #{this} to not be a finite number"
        );
      });
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/interface/expect.js
var require_expect = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/interface/expect.js"(exports, module) {
    module.exports = function(chai2, util2) {
      chai2.expect = function(val, message) {
        return new chai2.Assertion(val, message);
      };
      chai2.expect.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "expect.fail()";
        throw new chai2.AssertionError(message, {
          actual,
          expected,
          operator
        }, chai2.expect.fail);
      };
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/interface/should.js
var require_should = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/interface/should.js"(exports, module) {
    module.exports = function(chai2, util2) {
      var Assertion2 = chai2.Assertion;
      function loadShould() {
        function shouldGetter() {
          if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === "function" && this instanceof Symbol || typeof BigInt === "function" && this instanceof BigInt) {
            return new Assertion2(this.valueOf(), null, shouldGetter);
          }
          return new Assertion2(this, null, shouldGetter);
        }
        function shouldSetter(value) {
          Object.defineProperty(this, "should", {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        }
        Object.defineProperty(Object.prototype, "should", {
          set: shouldSetter,
          get: shouldGetter,
          configurable: true
        });
        var should2 = {};
        should2.fail = function(actual, expected, message, operator) {
          if (arguments.length < 2) {
            message = actual;
            actual = void 0;
          }
          message = message || "should.fail()";
          throw new chai2.AssertionError(message, {
            actual,
            expected,
            operator
          }, should2.fail);
        };
        should2.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.equal(val2);
        };
        should2.Throw = function(fn, errt, errs, msg) {
          new Assertion2(fn, msg).to.Throw(errt, errs);
        };
        should2.exist = function(val, msg) {
          new Assertion2(val, msg).to.exist;
        };
        should2.not = {};
        should2.not.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.not.equal(val2);
        };
        should2.not.Throw = function(fn, errt, errs, msg) {
          new Assertion2(fn, msg).to.not.Throw(errt, errs);
        };
        should2.not.exist = function(val, msg) {
          new Assertion2(val, msg).to.not.exist;
        };
        should2["throw"] = should2["Throw"];
        should2.not["throw"] = should2.not["Throw"];
        return should2;
      }
      ;
      chai2.should = loadShould;
      chai2.Should = loadShould;
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/interface/assert.js
var require_assert = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai/interface/assert.js"(exports, module) {
    module.exports = function(chai2, util2) {
      var Assertion2 = chai2.Assertion, flag = util2.flag;
      var assert2 = chai2.assert = function(express, errmsg) {
        var test = new Assertion2(null, null, chai2.assert, true);
        test.assert(
          express,
          errmsg,
          "[ negation message unavailable ]"
        );
      };
      assert2.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "assert.fail()";
        throw new chai2.AssertionError(message, {
          actual,
          expected,
          operator
        }, assert2.fail);
      };
      assert2.isOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isOk, true).is.ok;
      };
      assert2.isNotOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotOk, true).is.not.ok;
      };
      assert2.equal = function(act, exp, msg) {
        var test = new Assertion2(act, msg, assert2.equal, true);
        test.assert(
          exp == flag(test, "object"),
          "expected #{this} to equal #{exp}",
          "expected #{this} to not equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.notEqual = function(act, exp, msg) {
        var test = new Assertion2(act, msg, assert2.notEqual, true);
        test.assert(
          exp != flag(test, "object"),
          "expected #{this} to not equal #{exp}",
          "expected #{this} to equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.strictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.strictEqual, true).to.equal(exp);
      };
      assert2.notStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notStrictEqual, true).to.not.equal(exp);
      };
      assert2.deepEqual = assert2.deepStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.deepEqual, true).to.eql(exp);
      };
      assert2.notDeepEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notDeepEqual, true).to.not.eql(exp);
      };
      assert2.isAbove = function(val, abv, msg) {
        new Assertion2(val, msg, assert2.isAbove, true).to.be.above(abv);
      };
      assert2.isAtLeast = function(val, atlst, msg) {
        new Assertion2(val, msg, assert2.isAtLeast, true).to.be.least(atlst);
      };
      assert2.isBelow = function(val, blw, msg) {
        new Assertion2(val, msg, assert2.isBelow, true).to.be.below(blw);
      };
      assert2.isAtMost = function(val, atmst, msg) {
        new Assertion2(val, msg, assert2.isAtMost, true).to.be.most(atmst);
      };
      assert2.isTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isTrue, true).is["true"];
      };
      assert2.isNotTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotTrue, true).to.not.equal(true);
      };
      assert2.isFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isFalse, true).is["false"];
      };
      assert2.isNotFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFalse, true).to.not.equal(false);
      };
      assert2.isNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNull, true).to.equal(null);
      };
      assert2.isNotNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNull, true).to.not.equal(null);
      };
      assert2.isNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNaN, true).to.be.NaN;
      };
      assert2.isNotNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNaN, true).not.to.be.NaN;
      };
      assert2.exists = function(val, msg) {
        new Assertion2(val, msg, assert2.exists, true).to.exist;
      };
      assert2.notExists = function(val, msg) {
        new Assertion2(val, msg, assert2.notExists, true).to.not.exist;
      };
      assert2.isUndefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isUndefined, true).to.equal(void 0);
      };
      assert2.isDefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isDefined, true).to.not.equal(void 0);
      };
      assert2.isFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isFunction, true).to.be.a("function");
      };
      assert2.isNotFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFunction, true).to.not.be.a("function");
      };
      assert2.isObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isObject, true).to.be.a("object");
      };
      assert2.isNotObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotObject, true).to.not.be.a("object");
      };
      assert2.isArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isArray, true).to.be.an("array");
      };
      assert2.isNotArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotArray, true).to.not.be.an("array");
      };
      assert2.isString = function(val, msg) {
        new Assertion2(val, msg, assert2.isString, true).to.be.a("string");
      };
      assert2.isNotString = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotString, true).to.not.be.a("string");
      };
      assert2.isNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNumber, true).to.be.a("number");
      };
      assert2.isNotNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNumber, true).to.not.be.a("number");
      };
      assert2.isFinite = function(val, msg) {
        new Assertion2(val, msg, assert2.isFinite, true).to.be.finite;
      };
      assert2.isBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isBoolean, true).to.be.a("boolean");
      };
      assert2.isNotBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotBoolean, true).to.not.be.a("boolean");
      };
      assert2.typeOf = function(val, type, msg) {
        new Assertion2(val, msg, assert2.typeOf, true).to.be.a(type);
      };
      assert2.notTypeOf = function(val, type, msg) {
        new Assertion2(val, msg, assert2.notTypeOf, true).to.not.be.a(type);
      };
      assert2.instanceOf = function(val, type, msg) {
        new Assertion2(val, msg, assert2.instanceOf, true).to.be.instanceOf(type);
      };
      assert2.notInstanceOf = function(val, type, msg) {
        new Assertion2(val, msg, assert2.notInstanceOf, true).to.not.be.instanceOf(type);
      };
      assert2.include = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.include, true).include(inc);
      };
      assert2.notInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notInclude, true).not.include(inc);
      };
      assert2.deepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepInclude, true).deep.include(inc);
      };
      assert2.notDeepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepInclude, true).not.deep.include(inc);
      };
      assert2.nestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.nestedInclude, true).nested.include(inc);
      };
      assert2.notNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notNestedInclude, true).not.nested.include(inc);
      };
      assert2.deepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepNestedInclude, true).deep.nested.include(inc);
      };
      assert2.notDeepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepNestedInclude, true).not.deep.nested.include(inc);
      };
      assert2.ownInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.ownInclude, true).own.include(inc);
      };
      assert2.notOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notOwnInclude, true).not.own.include(inc);
      };
      assert2.deepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepOwnInclude, true).deep.own.include(inc);
      };
      assert2.notDeepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepOwnInclude, true).not.deep.own.include(inc);
      };
      assert2.match = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.match, true).to.match(re);
      };
      assert2.notMatch = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.notMatch, true).to.not.match(re);
      };
      assert2.property = function(obj, prop2, msg) {
        new Assertion2(obj, msg, assert2.property, true).to.have.property(prop2);
      };
      assert2.notProperty = function(obj, prop2, msg) {
        new Assertion2(obj, msg, assert2.notProperty, true).to.not.have.property(prop2);
      };
      assert2.propertyVal = function(obj, prop2, val, msg) {
        new Assertion2(obj, msg, assert2.propertyVal, true).to.have.property(prop2, val);
      };
      assert2.notPropertyVal = function(obj, prop2, val, msg) {
        new Assertion2(obj, msg, assert2.notPropertyVal, true).to.not.have.property(prop2, val);
      };
      assert2.deepPropertyVal = function(obj, prop2, val, msg) {
        new Assertion2(obj, msg, assert2.deepPropertyVal, true).to.have.deep.property(prop2, val);
      };
      assert2.notDeepPropertyVal = function(obj, prop2, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepPropertyVal, true).to.not.have.deep.property(prop2, val);
      };
      assert2.ownProperty = function(obj, prop2, msg) {
        new Assertion2(obj, msg, assert2.ownProperty, true).to.have.own.property(prop2);
      };
      assert2.notOwnProperty = function(obj, prop2, msg) {
        new Assertion2(obj, msg, assert2.notOwnProperty, true).to.not.have.own.property(prop2);
      };
      assert2.ownPropertyVal = function(obj, prop2, value, msg) {
        new Assertion2(obj, msg, assert2.ownPropertyVal, true).to.have.own.property(prop2, value);
      };
      assert2.notOwnPropertyVal = function(obj, prop2, value, msg) {
        new Assertion2(obj, msg, assert2.notOwnPropertyVal, true).to.not.have.own.property(prop2, value);
      };
      assert2.deepOwnPropertyVal = function(obj, prop2, value, msg) {
        new Assertion2(obj, msg, assert2.deepOwnPropertyVal, true).to.have.deep.own.property(prop2, value);
      };
      assert2.notDeepOwnPropertyVal = function(obj, prop2, value, msg) {
        new Assertion2(obj, msg, assert2.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(prop2, value);
      };
      assert2.nestedProperty = function(obj, prop2, msg) {
        new Assertion2(obj, msg, assert2.nestedProperty, true).to.have.nested.property(prop2);
      };
      assert2.notNestedProperty = function(obj, prop2, msg) {
        new Assertion2(obj, msg, assert2.notNestedProperty, true).to.not.have.nested.property(prop2);
      };
      assert2.nestedPropertyVal = function(obj, prop2, val, msg) {
        new Assertion2(obj, msg, assert2.nestedPropertyVal, true).to.have.nested.property(prop2, val);
      };
      assert2.notNestedPropertyVal = function(obj, prop2, val, msg) {
        new Assertion2(obj, msg, assert2.notNestedPropertyVal, true).to.not.have.nested.property(prop2, val);
      };
      assert2.deepNestedPropertyVal = function(obj, prop2, val, msg) {
        new Assertion2(obj, msg, assert2.deepNestedPropertyVal, true).to.have.deep.nested.property(prop2, val);
      };
      assert2.notDeepNestedPropertyVal = function(obj, prop2, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(prop2, val);
      };
      assert2.lengthOf = function(exp, len, msg) {
        new Assertion2(exp, msg, assert2.lengthOf, true).to.have.lengthOf(len);
      };
      assert2.hasAnyKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.hasAnyKeys, true).to.have.any.keys(keys);
      };
      assert2.hasAllKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.hasAllKeys, true).to.have.all.keys(keys);
      };
      assert2.containsAllKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.containsAllKeys, true).to.contain.all.keys(keys);
      };
      assert2.doesNotHaveAnyKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyKeys, true).to.not.have.any.keys(keys);
      };
      assert2.doesNotHaveAllKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllKeys, true).to.not.have.all.keys(keys);
      };
      assert2.hasAnyDeepKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.hasAnyDeepKeys, true).to.have.any.deep.keys(keys);
      };
      assert2.hasAllDeepKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.hasAllDeepKeys, true).to.have.all.deep.keys(keys);
      };
      assert2.containsAllDeepKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.containsAllDeepKeys, true).to.contain.all.deep.keys(keys);
      };
      assert2.doesNotHaveAnyDeepKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(keys);
      };
      assert2.doesNotHaveAllDeepKeys = function(obj, keys, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(keys);
      };
      assert2.throws = function(fn, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var assertErr = new Assertion2(fn, msg, assert2.throws, true).to.throw(errorLike, errMsgMatcher);
        return flag(assertErr, "object");
      };
      assert2.doesNotThrow = function(fn, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        new Assertion2(fn, msg, assert2.doesNotThrow, true).to.not.throw(errorLike, errMsgMatcher);
      };
      assert2.operator = function(val, operator, val2, msg) {
        var ok;
        switch (operator) {
          case "==":
            ok = val == val2;
            break;
          case "===":
            ok = val === val2;
            break;
          case ">":
            ok = val > val2;
            break;
          case ">=":
            ok = val >= val2;
            break;
          case "<":
            ok = val < val2;
            break;
          case "<=":
            ok = val <= val2;
            break;
          case "!=":
            ok = val != val2;
            break;
          case "!==":
            ok = val !== val2;
            break;
          default:
            msg = msg ? msg + ": " : msg;
            throw new chai2.AssertionError(
              msg + 'Invalid operator "' + operator + '"',
              void 0,
              assert2.operator
            );
        }
        var test = new Assertion2(ok, msg, assert2.operator, true);
        test.assert(
          true === flag(test, "object"),
          "expected " + util2.inspect(val) + " to be " + operator + " " + util2.inspect(val2),
          "expected " + util2.inspect(val) + " to not be " + operator + " " + util2.inspect(val2)
        );
      };
      assert2.closeTo = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.closeTo, true).to.be.closeTo(exp, delta);
      };
      assert2.approximately = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.approximately, true).to.be.approximately(exp, delta);
      };
      assert2.sameMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.sameMembers, true).to.have.same.members(set2);
      };
      assert2.notSameMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.notSameMembers, true).to.not.have.same.members(set2);
      };
      assert2.sameDeepMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.sameDeepMembers, true).to.have.same.deep.members(set2);
      };
      assert2.notSameDeepMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepMembers, true).to.not.have.same.deep.members(set2);
      };
      assert2.sameOrderedMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.sameOrderedMembers, true).to.have.same.ordered.members(set2);
      };
      assert2.notSameOrderedMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.notSameOrderedMembers, true).to.not.have.same.ordered.members(set2);
      };
      assert2.sameDeepOrderedMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(set2);
      };
      assert2.notSameDeepOrderedMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(set2);
      };
      assert2.includeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeMembers, true).to.include.members(subset);
      };
      assert2.notIncludeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeMembers, true).to.not.include.members(subset);
      };
      assert2.includeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepMembers, true).to.include.deep.members(subset);
      };
      assert2.notIncludeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepMembers, true).to.not.include.deep.members(subset);
      };
      assert2.includeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeOrderedMembers, true).to.include.ordered.members(subset);
      };
      assert2.notIncludeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeOrderedMembers, true).to.not.include.ordered.members(subset);
      };
      assert2.includeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepOrderedMembers, true).to.include.deep.ordered.members(subset);
      };
      assert2.notIncludeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(subset);
      };
      assert2.oneOf = function(inList, list, msg) {
        new Assertion2(inList, msg, assert2.oneOf, true).to.be.oneOf(list);
      };
      assert2.changes = function(fn, obj, prop2, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop2;
          prop2 = null;
        }
        new Assertion2(fn, msg, assert2.changes, true).to.change(obj, prop2);
      };
      assert2.changesBy = function(fn, obj, prop2, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop2;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop2;
          prop2 = null;
        }
        new Assertion2(fn, msg, assert2.changesBy, true).to.change(obj, prop2).by(delta);
      };
      assert2.doesNotChange = function(fn, obj, prop2, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop2;
          prop2 = null;
        }
        return new Assertion2(fn, msg, assert2.doesNotChange, true).to.not.change(obj, prop2);
      };
      assert2.changesButNotBy = function(fn, obj, prop2, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop2;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop2;
          prop2 = null;
        }
        new Assertion2(fn, msg, assert2.changesButNotBy, true).to.change(obj, prop2).but.not.by(delta);
      };
      assert2.increases = function(fn, obj, prop2, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop2;
          prop2 = null;
        }
        return new Assertion2(fn, msg, assert2.increases, true).to.increase(obj, prop2);
      };
      assert2.increasesBy = function(fn, obj, prop2, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop2;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop2;
          prop2 = null;
        }
        new Assertion2(fn, msg, assert2.increasesBy, true).to.increase(obj, prop2).by(delta);
      };
      assert2.doesNotIncrease = function(fn, obj, prop2, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop2;
          prop2 = null;
        }
        return new Assertion2(fn, msg, assert2.doesNotIncrease, true).to.not.increase(obj, prop2);
      };
      assert2.increasesButNotBy = function(fn, obj, prop2, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop2;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop2;
          prop2 = null;
        }
        new Assertion2(fn, msg, assert2.increasesButNotBy, true).to.increase(obj, prop2).but.not.by(delta);
      };
      assert2.decreases = function(fn, obj, prop2, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop2;
          prop2 = null;
        }
        return new Assertion2(fn, msg, assert2.decreases, true).to.decrease(obj, prop2);
      };
      assert2.decreasesBy = function(fn, obj, prop2, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop2;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop2;
          prop2 = null;
        }
        new Assertion2(fn, msg, assert2.decreasesBy, true).to.decrease(obj, prop2).by(delta);
      };
      assert2.doesNotDecrease = function(fn, obj, prop2, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop2;
          prop2 = null;
        }
        return new Assertion2(fn, msg, assert2.doesNotDecrease, true).to.not.decrease(obj, prop2);
      };
      assert2.doesNotDecreaseBy = function(fn, obj, prop2, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop2;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop2;
          prop2 = null;
        }
        return new Assertion2(fn, msg, assert2.doesNotDecreaseBy, true).to.not.decrease(obj, prop2).by(delta);
      };
      assert2.decreasesButNotBy = function(fn, obj, prop2, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop2;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop2;
          prop2 = null;
        }
        new Assertion2(fn, msg, assert2.decreasesButNotBy, true).to.decrease(obj, prop2).but.not.by(delta);
      };
      assert2.ifError = function(val) {
        if (val) {
          throw val;
        }
      };
      assert2.isExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isExtensible, true).to.be.extensible;
      };
      assert2.isNotExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotExtensible, true).to.not.be.extensible;
      };
      assert2.isSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isSealed, true).to.be.sealed;
      };
      assert2.isNotSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotSealed, true).to.not.be.sealed;
      };
      assert2.isFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isFrozen, true).to.be.frozen;
      };
      assert2.isNotFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotFrozen, true).to.not.be.frozen;
      };
      assert2.isEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isEmpty, true).to.be.empty;
      };
      assert2.isNotEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotEmpty, true).to.not.be.empty;
      };
      (function alias(name, as) {
        assert2[as] = assert2[name];
        return alias;
      })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
    };
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai.js
var require_chai = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/lib/chai.js"(exports) {
    var used = [];
    exports.version = "4.3.3";
    exports.AssertionError = require_assertion_error();
    var util2 = require_utils2();
    exports.use = function(fn) {
      if (!~used.indexOf(fn)) {
        fn(exports, util2);
        used.push(fn);
      }
      return exports;
    };
    exports.util = util2;
    var config2 = require_config();
    exports.config = config2;
    var assertion = require_assertion();
    exports.use(assertion);
    var core2 = require_assertions();
    exports.use(core2);
    var expect2 = require_expect();
    exports.use(expect2);
    var should2 = require_should();
    exports.use(should2);
    var assert2 = require_assert();
    exports.use(assert2);
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/index.js
var require_chai2 = __commonJS({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/index.js"(exports, module) {
    module.exports = require_chai();
  }
});

// ../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/index.mjs
var import_index, expect, version, Assertion, AssertionError, util, config, use, should, assert, core, chai_default;
var init_chai = __esm({
  "../../node_modules/.pnpm/chai@4.3.6/node_modules/chai/index.mjs"() {
    import_index = __toESM(require_chai2(), 1);
    expect = import_index.default.expect;
    version = import_index.default.version;
    Assertion = import_index.default.Assertion;
    AssertionError = import_index.default.AssertionError;
    util = import_index.default.util;
    config = import_index.default.config;
    use = import_index.default.use;
    should = import_index.default.should;
    assert = import_index.default.assert;
    core = import_index.default.core;
    chai_default = import_index.default;
  }
});

// index.ts
var init_test = __esm({
  "index.ts"() {
    "use strict";
    init_gi();
    init_core();
    init_chai();
    init_chai();
    chai_default.use((chai2, _utils) => {
      const Assertion2 = chai2.Assertion;
      Assertion2.addMethod("implements", function(cls) {
        const me = this;
        const theirType = gobject_exports.gtypeForConstructor(cls);
        const ourType = gobject_exports.gtypeFor(me._obj);
        me.assert(
          ourType !== void 0 && GObject.type_is_a(ourType, theirType),
          "expected #{act} to implement #{exp}",
          "expected #{act} to not implement #{exp}",
          theirType.name,
          ourType.name,
          false
        );
      });
    });
  }
});

// test/effect.test.ts
var effect_test_exports = {};
__export(effect_test_exports, {
  array_map: () => array_map,
  cell_is_cell: () => cell_is_cell,
  cell_reruns_effect: () => cell_reruns_effect,
  memo_is_cell: () => memo_is_cell
});
function cell_reruns_effect() {
  return effect_exports.root(async () => {
    const cell2 = effect_exports.cell("Joe");
    const expected = ["Joe", "Mike", "Robert"];
    effect_exports.effect(() => expect(cell2.get()).equals(expected.shift()));
    await effect_exports.schedule(async () => {
      cell2.set("Mike");
      await effect_exports.schedule(() => {
        cell2.set("Robert");
      });
    });
  });
}
function cell_is_cell() {
  const cell2 = effect_exports.cell(0);
  expect(effect_exports.isCell(cell2)).equals(true);
  expect(effect_exports.isWritableCell(cell2)).equals(true);
}
async function memo_is_cell() {
  await effect_exports.root(() => {
    const memo2 = effect_exports.memo(() => 0);
    expect(effect_exports.isCell(memo2)).equals(true);
    expect(effect_exports.isWritableCell(memo2)).equals(false);
  });
}
async function array_map() {
  class TestValue {
    value;
    constructor(value) {
      this.value = value;
    }
  }
  await effect_exports.root(() => {
    const a = effect_exports.cell([1, 2, 3, 4, 5, 7, 8, 9, 10]);
    const b = effect_exports.mapArray(a, (v) => new TestValue(v + 2));
    const orig = effect_exports.untrack(() => b.get()).slice();
    let pass = 1;
    effect_exports.effect(() => {
      const next = b.get();
      if (pass === 1) {
        orig.forEach((v, i) => expect(v).equals(next[i]));
      } else {
        orig.forEach((v, i) => {
          if (i === 4) {
            expect(v).not.equals(next[i]);
            expect(v.value).equals(7);
            expect(next[i].value).equals(8);
          } else {
            expect(v).equals(next[i]);
          }
        });
      }
      expect(pass).lessThan(3);
      pass++;
    });
    a.set([1, 2, 3, 4, 6, 7, 8, 9, 10]);
  });
}
var init_effect_test = __esm({
  "test/effect.test.ts"() {
    "use strict";
    init_core();
    init_log();
    init_test();
    log.scope("gx.effect").level = "trace" /* Trace */;
  }
});

// runner.ts
init_gi();
var import_is_callable = __toESM(require_is_callable(), 1);
init_core();

// queue.ts
init_gi();
init_core();
var TaskQueue = class extends GObject.Object {
  cancellable = new Gio.Cancellable();
  options;
  queue = [];
  pending = 0;
  idleSource = void 0;
  constructor(options2) {
    super();
    this.options = {
      jobs: GLib.get_num_processors(),
      cancelOnFail: false,
      ...options2 || {}
    };
    if (this.options.jobs < 1) {
      throw new Error(
        `Job queue cannot have a size of less than 1 (set to ${this.options.jobs}).`
      );
    }
  }
  trySchedule() {
    if (this.idleSource === void 0 && !this.cancellable.is_cancelled()) {
      this.idleSource = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
        return this.schedule();
      });
    }
  }
  jobDone() {
    this.pending--;
    this.trySchedule();
    if (this.pending === 0 && this.queue.length === 0) {
      this.emit("empty");
    }
  }
  schedule() {
    while (this.queue.length > 0) {
      if (this.cancellable.is_cancelled() || this.pending >= this.options.jobs) {
        break;
      }
      const job = this.queue.shift();
      this.emit("job-started");
      job().catch(() => {
      });
    }
    this.idleSource = void 0;
    return GLib.SOURCE_REMOVE;
  }
  get runningJobs() {
    return this.pending;
  }
  cancel() {
    this.cancellable.cancel();
    this.emit("cancelled");
  }
  join() {
    if (this.queue.length === 0 && this.pending === 0) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.connect("empty", () => resolve());
      this.connect("cancelled", () => reject(new async_exports.CancelledError()));
    });
  }
  add(task) {
    return new Promise((resolve, reject) => {
      const job = async () => {
        if (this.cancellable.is_cancelled()) {
          reject(new async_exports.CancelledError());
          return;
        }
        this.pending++;
        try {
          const result = await task(this.cancellable);
          if (this.cancellable.is_cancelled()) {
            reject(new async_exports.CancelledError());
          } else {
            resolve(result);
            this.emit("job-done");
          }
        } catch (e) {
          if (this.cancellable.is_cancelled()) {
            reject(new async_exports.CancelledError());
          } else {
            reject(e);
            this.emit("job-failed");
            if (this.options.cancelOnFail) {
              this.cancel();
            }
          }
        }
        this.jobDone();
      };
      this.queue.push(job);
      this.trySchedule();
    });
  }
  dispose() {
    if (this.idleSource !== void 0) {
      GLib.source_remove(this.idleSource);
      this.idleSource = void 0;
    }
    this.cancel();
    this.queue = [];
  }
};
TaskQueue = __decorateClass([
  gobject_exports.Class,
  gobject_exports.Signals({
    "job-started": {},
    "job-done": {},
    "job-failed": {},
    empty: {},
    cancelled: {}
  })
], TaskQueue);

// message.ts
var DidNotThrowError = class extends Error {
  constructor(expected, actual) {
    super(`Test failed to throw ${expected.name}`);
    if (actual !== void 0) {
      this.message = `${this.message}, threw ${actual.name ?? actual.toString()} instead`;
    }
    this.name = "DidNotThrowError";
  }
};

// runner.ts
init_log();
var options = {
  jobs: Number.parseInt(GLib.getenv("GXTEST_RUNNER_JOBS") ?? "8", 10),
  failEarly: GLib.getenv("GXTEST_RUNNER_FAIL_EARLY") === "true",
  timeout: Number.parseInt(GLib.getenv("GXTEST_RUNNER_TIMEOUT") ?? "3000", 10)
};
function deduceTestResult(test, threw) {
  let success = false;
  if (threw instanceof async_exports.TimeoutError) {
    if (test.throws !== void 0 && threw instanceof test.throws) {
      return ["ok", threw];
    }
    return ["timeout", threw];
  }
  if (test.throws !== void 0) {
    if (threw !== void 0 && threw instanceof test.throws) {
      success = true;
    } else {
      threw = new DidNotThrowError(test.throws, threw);
    }
  } else if (threw === void 0) {
    success = true;
  }
  return success ? ["ok", threw] : ["failed", threw];
}
function errorDesc(error) {
  const desc = {
    name: error.name,
    detail: error.message,
    stack: error.stack
  };
  if (error.cause !== void 0) {
    desc.cause = errorDesc(error.cause);
  }
  const err2 = error;
  if (err2.actual !== void 0) {
    desc.actual = inspect(err2.actual);
  }
  if (err2.expected !== void 0) {
    desc.expected = inspect(err2.expected);
  }
  if (typeof err2.showDiff === "boolean") {
    desc.showDiff = err2.showDiff;
  }
  if (typeof err2.operator === "string") {
    desc.operator = err2.operator;
  }
  return desc;
}
function send(message) {
  display_exports.outln(JSON.stringify(message));
}
function runAsPromise(f, cancel) {
  return new Promise((resolve) => {
    let result;
    try {
      result = f(cancel);
    } catch (err2) {
      resolve(err2);
      return;
    }
    Promise.resolve(result).then(
      () => resolve(void 0),
      (err2) => resolve(err2)
    );
  });
}
async function runTests(app, exports) {
  app.hold();
  const tests = [];
  try {
    const resolvedExports = await exports;
    for (const key in resolvedExports) {
      if ((0, import_is_callable.default)(resolvedExports[key])) {
        tests.push([key, resolvedExports[key]]);
      }
    }
  } catch (err2) {
    send({
      type: "importError",
      error: errorDesc(
        err2 instanceof Error ? err2 : new Error(`Unknown error: ${inspect(err2)}`)
      )
    });
    app.quit();
    return;
  }
  send({ type: "prelude", total: tests.length });
  const queue = new TaskQueue({
    jobs: options.jobs,
    cancelOnFail: options.failEarly
  });
  const runTest = async (name, test, cancel) => {
    const timeout2 = test.timeout !== void 0 ? test.timeout : options.timeout;
    const threw = await async_exports.timeout(runAsPromise(test, cancel), timeout2, cancel).catch(
      (err2) => err2
    );
    const [result, error] = deduceTestResult(test, threw);
    switch (result) {
      case "ok":
        send({ type: "ok", name });
        break;
      case "failed":
        send({ type: "failed", name, error: errorDesc(error) });
        throw error;
      case "timeout":
        send({
          type: "timeout",
          name,
          timeout: error.timeout
        });
        break;
    }
  };
  tests.forEach(([name, test]) => {
    queue.add((cancel) => runTest(name, test, cancel)).catch(() => {
    });
  });
  await queue.join().catch(() => {
  });
  app.release();
}
function runner(exports) {
  const app = new Gtk.Application();
  app.connect("activate", () => {
    runTests(app, exports).catch((err2) => console.error("Toplevel exception:", err2));
  });
  System.exit(app.run([System.programInvocationName, ...ARGV]));
}

// .gxtest/test_0.harness.js
runner(Promise.resolve().then(() => (init_effect_test(), effect_test_exports)));
/*!
 * ### ._obj
 *
 * Quick reference to stored `actual` value for plugin developers.
 *
 * @api private
 */
/*!
 * ### .ifError(object)
 *
 * Asserts if value is not a false value, and throws if it is a true value.
 * This is added to allow for chai to be a drop-in replacement for Node's
 * assert class.
 *
 *     var err = new Error('I am a custom error');
 *     assert.ifError(err); // Rethrows err!
 *
 * @name ifError
 * @param {Object} object
 * @namespace Assert
 * @api public
 */
/*!
 * Add a chainable method
 */
/*!
 * Aliases.
 */
/*!
 * Assert interface
 */
/*!
 * Assertion Constructor
 *
 * Creates object for chaining.
 *
 * `Assertion` objects contain metadata in the form of flags. Three flags can
 * be assigned during instantiation by passing arguments to this constructor:
 *
 * - `object`: This flag contains the target of the assertion. For example, in
 *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
 *   contain `numKittens` so that the `equal` assertion can reference it when
 *   needed.
 *
 * - `message`: This flag contains an optional custom error message to be
 *   prepended to the error message that's generated by the assertion when it
 *   fails.
 *
 * - `ssfi`: This flag stands for "start stack function indicator". It
 *   contains a function reference that serves as the starting point for
 *   removing frames from the stack trace of the error that's created by the
 *   assertion when it fails. The goal is to provide a cleaner stack trace to
 *   end users by removing Chai's internal functions. Note that it only works
 *   in environments that support `Error.captureStackTrace`, and only when
 *   `Chai.config.includeStack` hasn't been set to `false`.
 *
 * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
 *   should retain its current value, even as assertions are chained off of
 *   this object. This is usually set to `true` when creating a new assertion
 *   from within another assertion. It's also temporarily set to `true` before
 *   an overwritten assertion gets called by the overwriting assertion.
 *
 * @param {Mixed} obj target of the assertion
 * @param {String} msg (optional) custom error message
 * @param {Function} ssfi (optional) starting point for removing stack frames
 * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
 * @api private
 */
/*!
 * Assertion Error
 */
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai dependencies.
 */
/*!
 * Chai version
 */
/*!
 * Check if a property exists
 */
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
/*!
 * Checks error against a given set of criteria
 */
/*!
 * Compare by inspect method
 */
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Configuration
 */
/*!
 * Core Assertions
 */
/*!
 * Deep equal utility
 */
/*!
 * Deep path info
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Ensure correct constructor
 */
/*!
 * Expect interface
 */
/*!
 * Flag transferring utility
 */
/*!
 * Flag utility
 */
/*!
 * Function name
 */
/*!
 * Get own enumerable properties method
 */
/*!
 * Get own enumerable property symbols method
 */
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
/*!
 * Inherit from Error.prototype
 */
/*!
 * Inspect util
 */
/*!
 * Module dependencies
 */
/*!
 * Module dependencies.
 */
/*!
 * Module export.
 */
/*!
 * Module variables
 */
/*!
 * Object Display util
 */
/*!
 * Overwrite chainable method
 */
/*!
 * Primary Export
 */
/*!
 * Primary Exports
 */
/*!
 * Primary `Assertion` prototype
 */
/*!
 * Proxify util
 */
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
/*!
 * Should interface
 */
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Statically set name
 */
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
/*!
 * Utility Functions
 */
/*!
 * Utils for plugins (not exported)
 */
/*!
 * actual utility
 */
/*!
 * add Method
 */
/*!
 * add Property
 */
/*!
 * addLengthGuard util
 */
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * expectTypes utility
 */
/*!
 * getOperator method
 */
/*!
 * isNaN method
 */
/*!
 * isProxyEnabled helper
 */
/*!
 * message utility
 */
/*!
 * overwrite Method
 */
/*!
 * overwrite Property
 */
/*!
 * test utility
 */
/*!
 * type utility
 */
//# sourceMappingURL=test_0.js.map
