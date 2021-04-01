(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _swiper = _interopRequireDefault(require("swiper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swiper = new _swiper["default"]('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});

},{"swiper":92}],2:[function(require,module,exports){
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ssrWindow = require('ssr-window');

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = ssrWindow.getWindow();
  var document = ssrWindow.getDocument();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = ssrWindow.getWindow();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = ssrWindow.getWindow();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = ssrWindow.getWindow();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = ssrWindow.getWindow();
    var document = ssrWindow.getDocument();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = ssrWindow.getWindow();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = ssrWindow.getWindow();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = ssrWindow.getWindow();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = ssrWindow.getWindow();
  var document = ssrWindow.getDocument();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = ssrWindow.getDocument();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = ssrWindow.getDocument();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = ssrWindow.getWindow();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = ssrWindow.getWindow();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');

exports.$ = $;
exports.add = add;
exports.addClass = addClass;
exports.animate = animate;
exports.animationEnd = animationEnd;
exports.append = append;
exports.appendTo = appendTo;
exports.attr = attr;
exports.blur = blur;
exports.change = change;
exports.children = children;
exports.click = click;
exports.closest = closest;
exports.css = css;
exports.data = data;
exports.dataset = dataset;
exports.default = $;
exports.detach = detach;
exports.each = each;
exports.empty = empty;
exports.eq = eq;
exports.filter = filter;
exports.find = find;
exports.focus = focus;
exports.focusin = focusin;
exports.focusout = focusout;
exports.hasClass = hasClass;
exports.height = height;
exports.hide = hide;
exports.html = html;
exports.index = index;
exports.insertAfter = insertAfter;
exports.insertBefore = insertBefore;
exports.is = is;
exports.keydown = keydown;
exports.keypress = keypress;
exports.keyup = keyup;
exports.mousedown = mousedown;
exports.mouseenter = mouseenter;
exports.mouseleave = mouseleave;
exports.mousemove = mousemove;
exports.mouseout = mouseout;
exports.mouseover = mouseover;
exports.mouseup = mouseup;
exports.next = next;
exports.nextAll = nextAll;
exports.off = off;
exports.offset = offset;
exports.on = on;
exports.once = once;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.parent = parent;
exports.parents = parents;
exports.prepend = prepend;
exports.prependTo = prependTo;
exports.prev = prev;
exports.prevAll = prevAll;
exports.prop = prop;
exports.remove = remove;
exports.removeAttr = removeAttr;
exports.removeClass = removeClass;
exports.removeData = removeData;
exports.resize = resize;
exports.scroll = scroll;
exports.scrollLeft = scrollLeft;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.show = show;
exports.siblings = siblings;
exports.stop = stop;
exports.styles = styles;
exports.submit = submit;
exports.text = text;
exports.toggleClass = toggleClass;
exports.touchend = touchend;
exports.touchmove = touchmove;
exports.touchstart = touchstart;
exports.transform = transform;
exports.transition = transition;
exports.transitionEnd = transitionEnd;
exports.trigger = trigger;
exports.val = val;
exports.value = value;
exports.width = width;

},{"ssr-window":3}],3:[function(require,module,exports){
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.ssrWindow = {}));
}(this, (function (exports) { 'use strict';

    /* eslint-disable no-param-reassign */
    function isObject(obj) {
        return (obj !== null &&
            typeof obj === 'object' &&
            'constructor' in obj &&
            obj.constructor === Object);
    }
    function extend(target, src) {
        if (target === void 0) { target = {}; }
        if (src === void 0) { src = {}; }
        Object.keys(src).forEach(function (key) {
            if (typeof target[key] === 'undefined')
                target[key] = src[key];
            else if (isObject(src[key]) &&
                isObject(target[key]) &&
                Object.keys(src[key]).length > 0) {
                extend(target[key], src[key]);
            }
        });
    }

    var ssrDocument = {
        body: {},
        addEventListener: function () { },
        removeEventListener: function () { },
        activeElement: {
            blur: function () { },
            nodeName: '',
        },
        querySelector: function () {
            return null;
        },
        querySelectorAll: function () {
            return [];
        },
        getElementById: function () {
            return null;
        },
        createEvent: function () {
            return {
                initEvent: function () { },
            };
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () { },
                getElementsByTagName: function () {
                    return [];
                },
            };
        },
        createElementNS: function () {
            return {};
        },
        importNode: function () {
            return null;
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: '',
        },
    };
    function getDocument() {
        var doc = typeof document !== 'undefined' ? document : {};
        extend(doc, ssrDocument);
        return doc;
    }

    var ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: '',
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: '',
        },
        history: {
            replaceState: function () { },
            pushState: function () { },
            go: function () { },
            back: function () { },
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener: function () { },
        removeEventListener: function () { },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return '';
                },
            };
        },
        Image: function () { },
        Date: function () { },
        screen: {},
        setTimeout: function () { },
        clearTimeout: function () { },
        matchMedia: function () {
            return {};
        },
        requestAnimationFrame: function (callback) {
            if (typeof setTimeout === 'undefined') {
                callback();
                return null;
            }
            return setTimeout(callback, 0);
        },
        cancelAnimationFrame: function (id) {
            if (typeof setTimeout === 'undefined') {
                return;
            }
            clearTimeout(id);
        },
    };
    function getWindow() {
        var win = typeof window !== 'undefined' ? window : {};
        extend(win, ssrWindow);
        return win;
    }

    exports.extend = extend;
    exports.getDocument = getDocument;
    exports.getWindow = getWindow;
    exports.ssrDocument = ssrDocument;
    exports.ssrWindow = ssrWindow;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


},{}],4:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var A11y = {
  getRandomNumber: function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }

    var randomChar = function randomChar() {
      return Math.round(16 * Math.random()).toString(16);
    };

    return 'x'.repeat(size).replace(/x/g, randomChar);
  },
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  makeElNotFocusable: function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElRoleDescription: function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
    return $el;
  },
  addElControls: function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  addElId: function addElId($el, id) {
    $el.attr('id', id);
    return $el;
  },
  addElLive: function addElLive($el, live) {
    $el.attr('aria-live', live);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    var swiper = this;
    var params = swiper.params.a11y;
    var $targetEl = (0, _dom.default)(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass.replace(/ /g, '.'))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop || !swiper.navigation) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
        swiper.a11y.makeElNotFocusable($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
        swiper.a11y.makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
        swiper.a11y.makeElNotFocusable($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
        swiper.a11y.makeElFocusable($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletEl) {
        var $bulletEl = (0, _dom.default)(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      });
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.a11y;
    swiper.$el.append(swiper.a11y.liveRegion); // Container

    var $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      swiper.a11y.addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    var $wrapperEl = swiper.$wrapperEl;
    var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
    var live;
    swiper.a11y.addElId($wrapperEl, wrapperId);

    if (swiper.params.autoplay && swiper.params.autoplay.enabled) {
      live = 'off';
    } else {
      live = 'polite';
    }

    swiper.a11y.addElLive($wrapperEl, live); // Slide

    if (params.itemRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription((0, _dom.default)(swiper.slides), params.itemRoleDescriptionMessage);
    }

    swiper.a11y.addElRole((0, _dom.default)(swiper.slides), 'group');
    swiper.slides.each(function (slideEl) {
      var $slideEl = (0, _dom.default)(slideEl);
      var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, $slideEl.index() + 1).replace(/\{\{slidesLength\}\}/, swiper.slides.length);
      swiper.a11y.addElLabel($slideEl, ariaLabelMessage);
    }); // Navigation

    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      swiper.a11y.makeElFocusable($nextEl);

      if ($nextEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($nextEl, 'button');
        $nextEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
      }

      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      swiper.a11y.addElControls($nextEl, wrapperId);
    }

    if ($prevEl && $prevEl.length) {
      swiper.a11y.makeElFocusable($prevEl);

      if ($prevEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($prevEl, 'button');
        $prevEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
      }

      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      swiper.a11y.addElControls($prevEl, wrapperId);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass.replace(/ /g, '.'), swiper.a11y.onEnterOrSpaceKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass.replace(/ /g, '.'), swiper.a11y.onEnterOrSpaceKey);
    }
  }
};
var _default = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      a11y: _extends({}, A11y, {
        liveRegion: (0, _dom.default)("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
      })
    });
  },
  on: {
    afterInit: function afterInit(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = (0, _utils.nextTick)(function () {
      var autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
        swiper.autoplay.run();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
  onVisibilityChange: function onVisibilityChange() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      swiper.autoplay.pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      swiper.autoplay.run();
      swiper.autoplay.paused = false;
    }
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var swiper = this;
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.run();
    }
  }
};
var _default = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      autoplay: _extends({}, Autoplay, {
        running: false,
        paused: false
      })
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        var document = (0, _ssrWindow.getDocument)();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    },
    beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove(swiper) {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd: function touchEnd(swiper) {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }

      var document = (0, _ssrWindow.getDocument)();
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    }
  }
};
exports.default = _default;
},{"../../utils/utils":91,"ssr-window":3}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;

    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var Swiper = swiper.constructor;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          (0, _utils.nextTick)(function () {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
var _default = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      controller: _extends({
        control: swiper.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(swiper, translate, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(swiper, duration, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
};
exports.default = _default;
},{"../../utils/utils":91}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = getBreakpoint;

var _ssrWindow = require("ssr-window");

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }

  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  var breakpoint = false;
  var window = (0, _ssrWindow.getWindow)();
  var currentWidth = base === 'window' ? window.innerWidth : containerEl.clientWidth;
  var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = currentHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (value <= currentWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}
},{"ssr-window":3}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _setBreakpoint = _interopRequireDefault(require("./setBreakpoint"));

var _getBreakpoint = _interopRequireDefault(require("./getBreakpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  setBreakpoint: _setBreakpoint.default,
  getBreakpoint: _getBreakpoint.default
};
exports.default = _default;
},{"./getBreakpoint":7,"./setBreakpoint":9}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = setBreakpoint;

var _utils = require("../../../utils/utils");

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;

        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = params.slidesPerColumn > 1;
    var isMultiRow = breakpointParams.slidesPerColumn > 1;

    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(params.containerModifierClass + "multirow");

      if (breakpointParams.slidesPerColumnFill === 'column') {
        $el.addClass(params.containerModifierClass + "multirow-column");
      }

      swiper.emitContainerClasses();
    }

    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    (0, _utils.extend)(swiper.params, breakpointParams);
    (0, _utils.extend)(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}
},{"../../../utils/utils":91}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

var _default = {
  checkOverflow: checkOverflow
};
exports.default = _default;
},{}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = addClasses;

function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function (item) {
    if (typeof item === 'object') {
      Object.keys(item).forEach(function (classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device,
      support = swiper.support; // prettier-ignore

  var suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': support.pointerEvents && !support.touch
  }, {
    'free-mode': params.freeMode
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'multirow': params.slidesPerColumn > 1
  }, {
    'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }], params.containerModifierClass);
  classNames.push.apply(classNames, suffixes);
  $el.addClass([].concat(classNames).join(' '));
  swiper.emitContainerClasses();
}
},{}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _addClasses = _interopRequireDefault(require("./addClasses"));

var _removeClasses = _interopRequireDefault(require("./removeClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  addClasses: _addClasses.default,
  removeClasses: _removeClasses.default
};
exports.default = _default;
},{"./addClasses":11,"./removeClasses":13}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = removeClasses;

function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}
},{}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

var _getSupport = require("../../utils/get-support");

var _getDevice = require("../../utils/get-device");

var _getBrowser = require("../../utils/get-browser");

var _resize = _interopRequireDefault(require("../../modules/resize/resize"));

var _observer = _interopRequireDefault(require("../../modules/observer/observer"));

var _modular = _interopRequireDefault(require("./modular"));

var _eventsEmitter = _interopRequireDefault(require("./events-emitter"));

var _index = _interopRequireDefault(require("./update/index"));

var _index2 = _interopRequireDefault(require("./translate/index"));

var _index3 = _interopRequireDefault(require("./transition/index"));

var _index4 = _interopRequireDefault(require("./slide/index"));

var _index5 = _interopRequireDefault(require("./loop/index"));

var _index6 = _interopRequireDefault(require("./grab-cursor/index"));

var _index7 = _interopRequireDefault(require("./manipulation/index"));

var _index8 = _interopRequireDefault(require("./events/index"));

var _index9 = _interopRequireDefault(require("./breakpoints/index"));

var _index10 = _interopRequireDefault(require("./classes/index"));

var _index11 = _interopRequireDefault(require("./images/index"));

var _index12 = _interopRequireDefault(require("./check-overflow/index"));

var _defaults = _interopRequireDefault(require("./defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var prototypes = {
  modular: _modular.default,
  eventsEmitter: _eventsEmitter.default,
  update: _index.default,
  translate: _index2.default,
  transition: _index3.default,
  slide: _index4.default,
  loop: _index5.default,
  grabCursor: _index6.default,
  manipulation: _index7.default,
  events: _index8.default,
  breakpoints: _index9.default,
  checkOverflow: _index12.default,
  classes: _index10.default,
  images: _index11.default
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = (0, _utils.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0, _dom.default)(params.el).length > 1) {
      var swipers = [];
      (0, _dom.default)(params.el).each(function (containerEl) {
        var newParams = (0, _utils.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0, _getSupport.getSupport)();
    swiper.device = (0, _getDevice.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0, _getBrowser.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = (0, _utils.extend)({}, _defaults.default);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = (0, _utils.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0, _utils.extend)({}, swiper.params);
    swiper.passedParams = (0, _utils.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _dom.default; // Extend Swiper

    (0, _utils.extend)(swiper, {
      el: el,
      // Classes
      classNames: [],
      // Slides
      slides: (0, _dom.default)(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video, label',
        // Last click time
        lastClickTime: (0, _utils.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var updates = [];
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl: slideEl,
        classNames: classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.mount = function mount(el) {
    var swiper = this;
    if (swiper.mounted) return true; // Find el

    var $el = (0, _dom.default)(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper; // Find Wrapper

    var $wrapperEl;

    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
      $wrapperEl = (0, _dom.default)(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

      $wrapperEl.children = function (options) {
        return $el.children(options);
      };
    } else {
      $wrapperEl = $el.children("." + swiper.params.wrapperClass);
    }

    (0, _utils.extend)(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  };

  _proto.init = function init(el) {
    var swiper = this;
    if (swiper.initialized) return swiper;
    var mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0, _utils.deleteProps)(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    (0, _utils.extend)(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + (0, _utils.now)();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults.default;
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_resize.default, _observer.default]);
var _default = Swiper;
exports.default = _default;
},{"../../modules/observer/observer":85,"../../modules/resize/resize":86,"../../utils/dom":87,"../../utils/get-browser":88,"../../utils/get-device":89,"../../utils/get-support":90,"../../utils/utils":91,"./breakpoints/index":8,"./check-overflow/index":10,"./classes/index":12,"./defaults":15,"./events-emitter":16,"./events/index":17,"./grab-cursor/index":24,"./images/index":27,"./loop/index":30,"./manipulation/index":36,"./modular":40,"./slide/index":41,"./transition/index":49,"./translate/index":54,"./update/index":59}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: false,
  nested: false,
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
exports.default = _default;
},{}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

/* eslint-disable no-underscore-dangle */
var _default = {
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
exports.default = _default;
},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _onTouchStart = _interopRequireDefault(require("./onTouchStart"));

var _onTouchMove = _interopRequireDefault(require("./onTouchMove"));

var _onTouchEnd = _interopRequireDefault(require("./onTouchEnd"));

var _onResize = _interopRequireDefault(require("./onResize"));

var _onClick = _interopRequireDefault(require("./onClick"));

var _onScroll = _interopRequireDefault(require("./onScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = (0, _ssrWindow.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = _onTouchStart.default.bind(swiper);
  swiper.onTouchMove = _onTouchMove.default.bind(swiper);
  swiper.onTouchEnd = _onTouchEnd.default.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll.default.bind(swiper);
  }

  swiper.onClick = _onClick.default.bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize.default, true);
  } else {
    swiper.on('observerUpdate', _onResize.default, true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = (0, _ssrWindow.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize.default);
}

var _default = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};
exports.default = _default;
},{"./onClick":18,"./onResize":19,"./onScroll":20,"./onTouchEnd":21,"./onTouchMove":22,"./onTouchStart":23,"ssr-window":3}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = onClick;

function onClick(e) {
  var swiper = this;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
},{}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = onResize;

function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
},{}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = onScroll;

function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}
},{}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = onTouchEnd;

var _utils = require("../../../utils/utils");

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = (0, _utils.now)();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0, _utils.now)();
  (0, _utils.nextTick)(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0, _utils.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      swiper.emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
},{"../../../utils/utils":91}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = onTouchMove;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../../utils/dom"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onTouchMove(event) {
  var document = (0, _ssrWindow.getDocument)();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      (0, _utils.extend)(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0, _utils.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0, _dom.default)(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0, _utils.now)()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}
},{"../../../utils/dom":87,"../../../utils/utils":91,"ssr-window":3}],23:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = onTouchStart;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../../utils/dom"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onTouchStart(event) {
  var swiper = this;
  var document = (0, _ssrWindow.getDocument)();
  var window = (0, _ssrWindow.getWindow)();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = (0, _dom.default)(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = (0, _dom.default)(event.path[0]);
  }

  if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  (0, _utils.extend)(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0, _utils.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.formElements)) preventDefault = false;

    if (document.activeElement && (0, _dom.default)(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}
},{"../../../utils/dom":87,"../../../utils/utils":91,"ssr-window":3}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _setGrabCursor = _interopRequireDefault(require("./setGrabCursor"));

var _unsetGrabCursor = _interopRequireDefault(require("./unsetGrabCursor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  setGrabCursor: _setGrabCursor.default,
  unsetGrabCursor: _unsetGrabCursor.default
};
exports.default = _default;
},{"./setGrabCursor":25,"./unsetGrabCursor":26}],25:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = setGrabCursor;

function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}
},{}],26:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = unsetGrabCursor;

function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}
},{}],27:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _loadImage = _interopRequireDefault(require("./loadImage"));

var _preloadImages = _interopRequireDefault(require("./preloadImages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  loadImage: _loadImage.default,
  preloadImages: _preloadImages.default
};
exports.default = _default;
},{"./loadImage":28,"./preloadImages":29}],28:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = loadImage;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = (0, _ssrWindow.getWindow)();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = (0, _dom.default)(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}
},{"../../../utils/dom":87,"ssr-window":3}],29:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = preloadImages;

function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}
},{}],30:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _loopCreate = _interopRequireDefault(require("./loopCreate"));

var _loopFix = _interopRequireDefault(require("./loopFix"));

var _loopDestroy = _interopRequireDefault(require("./loopDestroy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  loopCreate: _loopCreate.default,
  loopFix: _loopFix.default,
  loopDestroy: _loopDestroy.default
};
exports.default = _default;
},{"./loopCreate":31,"./loopDestroy":32,"./loopFix":33}],31:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = loopCreate;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loopCreate() {
  var swiper = this;
  var document = (0, _ssrWindow.getDocument)();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = (0, _dom.default)(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = (0, _dom.default)(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append((0, _dom.default)(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend((0, _dom.default)(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}
},{"../../../utils/dom":87,"ssr-window":3}],32:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = loopDestroy;

function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}
},{}],33:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = loopFix;

function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}
},{}],34:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = addSlide;

function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
},{}],35:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = appendSlide;

function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}
},{}],36:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _appendSlide = _interopRequireDefault(require("./appendSlide"));

var _prependSlide = _interopRequireDefault(require("./prependSlide"));

var _addSlide = _interopRequireDefault(require("./addSlide"));

var _removeSlide = _interopRequireDefault(require("./removeSlide"));

var _removeAllSlides = _interopRequireDefault(require("./removeAllSlides"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  appendSlide: _appendSlide.default,
  prependSlide: _prependSlide.default,
  addSlide: _addSlide.default,
  removeSlide: _removeSlide.default,
  removeAllSlides: _removeAllSlides.default
};
exports.default = _default;
},{"./addSlide":34,"./appendSlide":35,"./prependSlide":37,"./removeAllSlides":38,"./removeSlide":39}],37:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = prependSlide;

function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}
},{}],38:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = removeAllSlides;

function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}
},{}],39:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = removeSlide;

function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
},{}],40:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils/utils");

var _default = {
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        (0, _utils.extend)(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
};
exports.default = _default;
},{"../../utils/utils":91}],41:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _slideTo = _interopRequireDefault(require("./slideTo"));

var _slideToLoop = _interopRequireDefault(require("./slideToLoop"));

var _slideNext = _interopRequireDefault(require("./slideNext"));

var _slidePrev = _interopRequireDefault(require("./slidePrev"));

var _slideReset = _interopRequireDefault(require("./slideReset"));

var _slideToClosest = _interopRequireDefault(require("./slideToClosest"));

var _slideToClickedSlide = _interopRequireDefault(require("./slideToClickedSlide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  slideTo: _slideTo.default,
  slideToLoop: _slideToLoop.default,
  slideNext: _slideNext.default,
  slidePrev: _slidePrev.default,
  slideReset: _slideReset.default,
  slideToClosest: _slideToClosest.default,
  slideToClickedSlide: _slideToClickedSlide.default
};
exports.default = _default;
},{"./slideNext":42,"./slidePrev":43,"./slideReset":44,"./slideTo":45,"./slideToClickedSlide":46,"./slideToClosest":47,"./slideToLoop":48}],42:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = slideNext;

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
},{}],43:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = slidePrev;

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
},{}],44:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = slideReset;

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
},{}],45:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = slideTo;

function slideTo(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate * 100);
      var normalizedGird = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGird) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}
},{}],46:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = slideToClickedSlide;

var _dom = _interopRequireDefault(require("../../../utils/dom"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0, _dom.default)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        (0, _utils.nextTick)(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      (0, _utils.nextTick)(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
},{"../../../utils/dom":87,"../../../utils/utils":91}],47:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = slideToClosest;

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
},{}],48:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = slideToLoop;

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
},{}],49:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _setTransition = _interopRequireDefault(require("./setTransition"));

var _transitionStart = _interopRequireDefault(require("./transitionStart"));

var _transitionEnd = _interopRequireDefault(require("./transitionEnd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  setTransition: _setTransition.default,
  transitionStart: _transitionStart.default,
  transitionEnd: _transitionEnd.default
};
exports.default = _default;
},{"./setTransition":50,"./transitionEnd":51,"./transitionStart":52}],50:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = setTransition;

function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}
},{}],51:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = transitionEnd;

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}
},{}],52:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = transitionStart;

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}
},{}],53:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = getSwiperTranslate;

var _utils = require("../../../utils/utils");

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = (0, _utils.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
},{"../../../utils/utils":91}],54:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _getTranslate = _interopRequireDefault(require("./getTranslate"));

var _setTranslate = _interopRequireDefault(require("./setTranslate"));

var _minTranslate = _interopRequireDefault(require("./minTranslate"));

var _maxTranslate = _interopRequireDefault(require("./maxTranslate"));

var _translateTo = _interopRequireDefault(require("./translateTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getTranslate: _getTranslate.default,
  setTranslate: _setTranslate.default,
  minTranslate: _minTranslate.default,
  maxTranslate: _maxTranslate.default,
  translateTo: _translateTo.default
};
exports.default = _default;
},{"./getTranslate":53,"./maxTranslate":55,"./minTranslate":56,"./setTranslate":57,"./translateTo":58}],55:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = maxTranslate;

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
},{}],56:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = minTranslate;

function minTranslate() {
  return -this.snapGrid[0];
}
},{}],57:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = setTranslate;

function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}
},{}],58:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = translateTo;

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}
},{}],59:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _updateSize = _interopRequireDefault(require("./updateSize"));

var _updateSlides = _interopRequireDefault(require("./updateSlides"));

var _updateAutoHeight = _interopRequireDefault(require("./updateAutoHeight"));

var _updateSlidesOffset = _interopRequireDefault(require("./updateSlidesOffset"));

var _updateSlidesProgress = _interopRequireDefault(require("./updateSlidesProgress"));

var _updateProgress = _interopRequireDefault(require("./updateProgress"));

var _updateSlidesClasses = _interopRequireDefault(require("./updateSlidesClasses"));

var _updateActiveIndex = _interopRequireDefault(require("./updateActiveIndex"));

var _updateClickedSlide = _interopRequireDefault(require("./updateClickedSlide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  updateSize: _updateSize.default,
  updateSlides: _updateSlides.default,
  updateAutoHeight: _updateAutoHeight.default,
  updateSlidesOffset: _updateSlidesOffset.default,
  updateSlidesProgress: _updateSlidesProgress.default,
  updateProgress: _updateProgress.default,
  updateSlidesClasses: _updateSlidesClasses.default,
  updateActiveIndex: _updateActiveIndex.default,
  updateClickedSlide: _updateClickedSlide.default
};
exports.default = _default;
},{"./updateActiveIndex":60,"./updateAutoHeight":61,"./updateClickedSlide":62,"./updateProgress":63,"./updateSize":64,"./updateSlides":65,"./updateSlidesClasses":66,"./updateSlidesOffset":67,"./updateSlidesProgress":68}],60:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateActiveIndex;

var _utils = require("../../../utils/utils");

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  (0, _utils.extend)(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}
},{"../../../utils/utils":91}],61:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateAutoHeight;

function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  } // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) break;
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}
},{}],62:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateClickedSlide;

var _dom = _interopRequireDefault(require("../../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = (0, _dom.default)(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  var slideIndex;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0, _dom.default)(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
},{"../../../utils/dom":87}],63:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateProgress;

var _utils = require("../../../utils/utils");

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  (0, _utils.extend)(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}
},{"../../../utils/utils":91}],64:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateSize;

var _utils = require("../../../utils/utils");

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  (0, _utils.extend)(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}
},{"../../../utils/utils":91}],65:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateSlides;

var _utils = require("../../../utils/utils");

function updateSlides() {
  var swiper = this;

  var getDirectionLabel = function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  };

  var getDirectionPropertyValue = function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  };

  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];

  function slidesForMargin(slideEl, slideIndex) {
    if (!params.cssMode) return true;

    if (slideIndex === slides.length - 1) {
      return false;
    }

    return true;
  }

  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css(getDirectionLabel('margin-top'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = getComputedStyle(slide[0]);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        var width = getDirectionPropertyValue(slideStyles, 'width');
        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        var boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = slideSize + "px";
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    var _$wrapperEl$css;

    $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
  }

  if (params.slidesPerColumn > 1) {
    var _$wrapperEl$css2;

    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    var _slides$filter$css;

    var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(slidesForMargin).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  (0, _utils.extend)(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}
},{"../../../utils/utils":91}],66:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateSlidesClasses;

function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}
},{}],67:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateSlidesOffset;

function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
},{}],68:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = updateSlidesProgress;

var _dom = _interopRequireDefault(require("../../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = (0, _dom.default)(swiper.visibleSlides);
}
},{"../../../utils/dom":87}],69:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append($shadowBeforeEl);
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append($shadowAfterEl);
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
var _default = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      coverflowEffect: _extends({}, Coverflow)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],70:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size,
        browser = swiper.browser;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0, _dom.default)('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: swiperWidth + "px"
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0, _dom.default)('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
      }
    }

    var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
var _default = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      cubeEffect: _extends({}, Cube)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "cube");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      (0, _utils.extend)(swiper.params, overwriteParams);
      (0, _utils.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],71:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var _default = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      fadeEffect: _extends({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      (0, _utils.extend)(swiper.params, overwriteParams);
      (0, _utils.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/utils":91}],72:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var _default = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      flipEffect: _extends({}, Flip)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "flip");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      (0, _utils.extend)(swiper.params, overwriteParams);
      (0, _utils.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],73:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();
    swiper.emit('hashChange');
    var newHash = document.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    var document = (0, _ssrWindow.getDocument)();
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
      swiper.emit('hashSet');
    } else {
      var slide = swiper.slides.eq(swiper.activeIndex);
      var hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      swiper.emit('hashSet');
    }
  },
  init: function init() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();
    var window = (0, _ssrWindow.getWindow)();
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = document.location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      (0, _dom.default)(window).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();

    if (swiper.params.hashNavigation.watchState) {
      (0, _dom.default)(window).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
var _default = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      hashNavigation: _extends({
        initialized: false
      }, HashNavigation)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
        swiper.hashNavigation.setHash();
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91,"ssr-window":3}],74:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var History = {
  init: function init() {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues(swiper.params.url);
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues(swiper.params.url);
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues(urlOverride) {
    var window = (0, _ssrWindow.getWindow)();
    var location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index) {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    var slide = swiper.slides.eq(index);
    var value = History.slugify(slide.attr('data-history'));

    if (!location.pathname.includes(key)) {
      value = key + "/" + value;
    }

    var currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value: value
      }, null, value);
    } else {
      window.history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;

    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHistory = History.slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
var _default = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      history: _extends({}, History)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.history.initialized && swiper.params.cssMode) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
};
exports.default = _default;
},{"../../utils/utils":91,"ssr-window":3}],75:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    var document = (0, _ssrWindow.getDocument)();
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode;
    var pageUpDown = swiper.params.keyboard.pageUpDown;
    var isPageUp = pageUpDown && kc === 33;
    var isPageDown = pageUpDown && kc === 34;
    var isArrowLeft = kc === 37;
    var isArrowRight = kc === 39;
    var isArrowUp = kc === 38;
    var isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
        return undefined;
      }

      var $el = swiper.$el;
      var swiperWidth = $el[0].clientWidth;
      var swiperHeight = $el[0].clientHeight;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();
    if (swiper.keyboard.enabled) return;
    (0, _dom.default)(document).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();
    if (!swiper.keyboard.enabled) return;
    (0, _dom.default)(document).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
var _default = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      keyboard: _extends({
        enabled: false
      }, Keyboard)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91,"ssr-window":3}],76:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Lazy = {
  loadInSlide: function loadInSlide(index, loadInDuplicate) {
    if (loadInDuplicate === void 0) {
      loadInDuplicate = true;
    }

    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
    var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageEl) {
      var $imageEl = (0, _dom.default)(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      var $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"" + background + "\")");
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(function (sourceEl) {
              var $source = (0, _dom.default)(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find("." + params.preloaderClass).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }

        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0, _dom.default)(slideEl).attr('data-swiper-slide-index');
      }

      return (0, _dom.default)(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
        var index = isVirtual ? (0, _dom.default)(slideEl).attr('data-swiper-slide-index') : (0, _dom.default)(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
          if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
        } // Prev Slides


        for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
          if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
        }
      } else {
        var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
  checkInViewOnLoad: function checkInViewOnLoad() {
    var window = (0, _ssrWindow.getWindow)();
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var $scrollElement = swiper.params.lazy.scrollingElement ? (0, _dom.default)(swiper.params.lazy.scrollingElement) : (0, _dom.default)(window);
    var isWindow = $scrollElement[0] === window;
    var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    var swiperOffset = swiper.$el.offset();
    var rtl = swiper.rtlTranslate;
    var inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (var i = 0; i < swiperCoord.length; i += 1) {
      var point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    if (inView) {
      swiper.lazy.load();
      $scrollElement.off('scroll', swiper.lazy.checkInViewOnLoad);
    } else if (!swiper.lazy.scrollHandlerAttached) {
      swiper.lazy.scrollHandlerAttached = true;
      $scrollElement.on('scroll', swiper.lazy.checkInViewOnLoad);
    }
  }
};
var _default = {
  name: 'lazy',
  params: {
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      lazy: _extends({
        initialImageLoaded: false
      }, Lazy)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        if (swiper.params.lazy.checkInView) {
          swiper.lazy.checkInViewOnLoad();
        } else {
          swiper.lazy.load();
        }
      }
    },
    scroll: function scroll(swiper) {
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    'scrollbarDragMove resize _freeModeNoMomentumRelease': function lazyLoad(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart(swiper) {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.cssMode) {
        swiper.lazy.load();
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91,"ssr-window":3}],77:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEventSupported() {
  var document = (0, _ssrWindow.getDocument)();
  var eventName = 'onwheel';
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var Mousewheel = {
  lastScrollTime: (0, _utils.now)(),
  lastEventBeforeSnap: undefined,
  recentWheelEvents: [],
  event: function event() {
    var window = (0, _ssrWindow.getWindow)();
    if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  },
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var disableParentSwiper = true;
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0, _dom.default)(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    var positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode) {
      // Register the new event in a variable which stores the relevant data
      var newEvent = {
        time: (0, _utils.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          swiper.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper.mousewheel.animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (swiper.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      var _newEvent = {
        time: (0, _utils.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
      var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        swiper.mousewheel.lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = undefined;
          var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

          if (_recentWheelEvents.length >= 15) {
            _recentWheelEvents.shift(); // only store the last N events

          }

          var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

          var firstEvent = _recentWheelEvents[0];

          _recentWheelEvents.push(_newEvent);

          if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            _recentWheelEvents.splice(0);
          } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper.mousewheel.lastEventBeforeSnap = _newEvent;

            _recentWheelEvents.splice(0);

            swiper.mousewheel.timeout = (0, _utils.nextTick)(function () {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!swiper.mousewheel.timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            swiper.mousewheel.timeout = (0, _utils.nextTick)(function () {
              var snapToThreshold = 0.5;
              swiper.mousewheel.lastEventBeforeSnap = _newEvent;

              _recentWheelEvents.splice(0);

              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  animateSlider: function animateSlider(newEvent) {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();

    if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (this.params.mousewheel.thresholdTime && (0, _utils.now)() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && (0, _utils.now)() - swiper.mousewheel.lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        swiper.emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      swiper.emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  },
  releaseScroll: function releaseScroll(newEvent) {
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  },
  enable: function enable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0, _dom.default)(swiper.params.mousewheel.eventsTarget);
    }

    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0, _dom.default)(swiper.params.mousewheel.eventsTarget);
    }

    target.off(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
var _default = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      mousewheel: {
        enabled: false,
        lastScrollTime: (0, _utils.now)(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        enable: Mousewheel.enable,
        disable: Mousewheel.disable,
        handle: Mousewheel.handle,
        handleMouseEnter: Mousewheel.handleMouseEnter,
        handleMouseLeave: Mousewheel.handleMouseLeave,
        animateSlider: Mousewheel.animateSlider,
        releaseScroll: Mousewheel.releaseScroll
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        swiper.mousewheel.disable();
      }

      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy(swiper) {
      if (swiper.params.cssMode) {
        swiper.mousewheel.enable();
      }

      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91,"ssr-window":3}],78:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Navigation = {
  toggleEl: function toggleEl($el, disabled) {
    $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
  },
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    var toggleEl = swiper.navigation.toggleEl;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        toggleEl($prevEl, true);
      } else {
        toggleEl($prevEl, false);
      }

      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        toggleEl($nextEl, true);
      } else {
        toggleEl($nextEl, false);
      }

      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = (0, _dom.default)(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = (0, _dom.default)(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    (0, _utils.extend)(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
var _default = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    click: function click(swiper, e) {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;
      var targetEl = e.target;

      if (swiper.params.navigation.hideOnClick && !(0, _dom.default)(targetEl).is($prevEl) && !(0, _dom.default)(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],79:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = (0, _dom.default)(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }

    if (params.type === 'fraction') {
      $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
      $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }

    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find("." + params.bulletClass.replace(/ /g, '.'));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = (0, _dom.default)(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', "." + params.bulletClass.replace(/ /g, '.'), function onClick(e) {
        e.preventDefault();
        var index = (0, _dom.default)(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    (0, _utils.extend)(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', "." + params.bulletClass.replace(/ /g, '.'));
    }
  }
};
var _default = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    click: function click(swiper, e) {
      var targetEl = e.target;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0, _dom.default)(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }

        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],80:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = (0, _dom.default)(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = parseInt(x, 10) * progress * rtlFactor + "%";
    } else {
      x = x * progress * rtlFactor + "px";
    }

    if (y.indexOf('%') >= 0) {
      y = parseInt(y, 10) * progress + "%";
    } else {
      y = y * progress + "px";
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(" + x + ", " + y + ", 0px)");
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideEl, slideIndex) {
      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0, _dom.default)(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition(duration) {
    if (duration === void 0) {
      duration = this.params.speed;
    }

    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
      var $parallaxEl = (0, _dom.default)(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
var _default = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      parallax: _extends({}, Parallax)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],81:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
      $dragEl[0].style.width = newSize + "px";
    } else {
      $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
      $dragEl[0].style.height = newSize + "px";
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + "px";
    } else {
      $dragEl[0].style.height = dragSize + "px";
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    (0, _utils.extend)(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition: function getPointerPosition(e) {
    var swiper = this;

    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        dragStartPos = scrollbar.dragStartPos;
    var positionRatio;
    positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = (0, _utils.nextTick)(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = (0, _ssrWindow.getDocument)();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;

    if (!support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = (0, _ssrWindow.getDocument)();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;

    if (!support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    var params = swiper.params.scrollbar;
    var $el = (0, _dom.default)(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

    if ($dragEl.length === 0) {
      $dragEl = (0, _dom.default)("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
      $el.append($dragEl);
    }

    (0, _utils.extend)(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
var _default = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      scrollbar: _extends({
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }, Scrollbar)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update(swiper) {
      swiper.scrollbar.updateSize();
    },
    resize: function resize(swiper) {
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate(swiper) {
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate(swiper) {
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy(swiper) {
      swiper.scrollbar.destroy();
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91,"ssr-window":3}],82:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils/utils");

var _dom = _interopRequireDefault(require("../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    if (swiper.thumbs.initialized) return false;
    swiper.thumbs.initialized = true;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      (0, _utils.extend)(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      (0, _utils.extend)(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if ((0, _utils.isObject)(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass((0, _utils.extend)({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    return true;
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0, _dom.default)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0, _dom.default)(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;
      var direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
      }
    } else {
      for (var _i = 0; _i < thumbsToActivate; _i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
      }
    }
  }
};
var _default = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      thumbs: _extends({
        swiper: null,
        initialized: false
      }, Thumbs)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(swiper, duration) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy(swiper) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;

      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],83:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    (0, _utils.extend)(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, offset + "px");
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      }

      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
        }
      }
    }

    for (var _i = 0; _i < slides.length; _i += 1) {
      if (_i >= from && _i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i);
        } else {
          if (_i > previousTo) appendIndexes.push(_i);
          if (_i < previousFrom) prependIndexes.push(_i);
        }
      }
    }

    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
    onRendered();
  },
  renderSlide: function renderSlide(slide, index) {
    var swiper = this;
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    var $slideEl = params.renderSlide ? (0, _dom.default)(params.renderSlide.call(swiper, slide, index)) : (0, _dom.default)("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slides) {
    var swiper = this;

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slides) {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var newActiveIndex = activeIndex + 1;
    var numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        var $cachedEl = cache[cachedIndex];
        var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide: function removeSlide(slidesIndexes) {
    var swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    var activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides: function removeAllSlides() {
    var swiper = this;
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  }
};
var _default = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      virtual: _extends({}, Virtual, {
        slides: swiper.params.virtual.slides,
        cache: {}
      })
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
      var overwriteParams = {
        watchSlidesProgress: true
      };
      (0, _utils.extend)(swiper.params, overwriteParams);
      (0, _utils.extend)(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91}],84:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0, _dom.default)(e.target).closest("." + swiper.params.slideClass);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') zoom.onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var device = swiper.device;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var device = swiper.device;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = (0, _utils.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = (0, _utils.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);

      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function _in(e) {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass("" + params.zoomedSlideClass);
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
    gesture.$slideEl = undefined;
  },
  toggleGestures: function toggleGestures(method) {
    var swiper = this;
    var zoom = swiper.zoom;
    var selector = zoom.slideSelector,
        passive = zoom.passiveListener;
    swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
    swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
    swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
  },
  enableGestures: function enableGestures() {
    if (this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = true;
    this.zoom.toggleGestures('on');
  },
  disableGestures: function disableGestures() {
    if (!this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = false;
    this.zoom.toggleGestures('off');
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var support = swiper.support;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass;
    swiper.zoom.passiveListener = passiveListener;
    swiper.zoom.slideSelector = slideSelector; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    var support = swiper.support;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  }
};
var _default = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      zoom: _extends({
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined
        }
      }, Zoom)
    });
    var scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }

        scale = value;
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy(swiper) {
      swiper.zoom.disable();
    },
    touchStart: function touchStart(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(swiper, e) {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":87,"../../utils/utils":91,"ssr-window":3}],85:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = (0, _ssrWindow.getWindow)();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
var _default = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
};
exports.default = _default;
},{"../../utils/utils":91,"ssr-window":3}],86:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _utils = require("../../utils/utils");

var supportsResizeObserver = function supportsResizeObserver() {
  var window = (0, _ssrWindow.getWindow)();
  return typeof window.ResizeObserver !== 'undefined';
};

var _default = {
  name: 'resize',
  create: function create() {
    var swiper = this;
    (0, _utils.extend)(swiper, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.resize.observer = new ResizeObserver(function (entries) {
            var width = swiper.width,
                height = swiper.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function (_ref) {
              var contentBoxSize = _ref.contentBoxSize,
                  contentRect = _ref.contentRect,
                  target = _ref.target;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              swiper.resize.resizeHandler();
            }
          });
          swiper.resize.observer.observe(swiper.el);
        },
        removeObserver: function removeObserver() {
          if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
            swiper.resize.observer.unobserve(swiper.el);
            swiper.resize.observer = null;
          }
        },
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = (0, _ssrWindow.getWindow)();

      if (swiper.params.resizeObserver && supportsResizeObserver()) {
        swiper.resize.createObserver();
        return;
      } // Emit resize


      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = (0, _ssrWindow.getWindow)();
      swiper.resize.removeObserver();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
};
exports.default = _default;
},{"../../utils/utils":91,"ssr-window":3}],87:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = require("dom7");

var Methods = {
  addClass: _dom.addClass,
  removeClass: _dom.removeClass,
  hasClass: _dom.hasClass,
  toggleClass: _dom.toggleClass,
  attr: _dom.attr,
  removeAttr: _dom.removeAttr,
  transform: _dom.transform,
  transition: _dom.transition,
  on: _dom.on,
  off: _dom.off,
  trigger: _dom.trigger,
  transitionEnd: _dom.transitionEnd,
  outerWidth: _dom.outerWidth,
  outerHeight: _dom.outerHeight,
  styles: _dom.styles,
  offset: _dom.offset,
  css: _dom.css,
  each: _dom.each,
  html: _dom.html,
  text: _dom.text,
  is: _dom.is,
  index: _dom.index,
  eq: _dom.eq,
  append: _dom.append,
  prepend: _dom.prepend,
  next: _dom.next,
  nextAll: _dom.nextAll,
  prev: _dom.prev,
  prevAll: _dom.prevAll,
  parent: _dom.parent,
  parents: _dom.parents,
  closest: _dom.closest,
  find: _dom.find,
  children: _dom.children,
  filter: _dom.filter,
  remove: _dom.remove
};
Object.keys(Methods).forEach(function (methodName) {
  _dom.$.fn[methodName] = Methods[methodName];
});
var _default = _dom.$;
exports.default = _default;
},{"dom7":2}],88:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.getBrowser = getBrowser;

var _ssrWindow = require("ssr-window");

var browser;

function calcBrowser() {
  var window = (0, _ssrWindow.getWindow)();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}
},{"ssr-window":3}],89:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.getDevice = getDevice;

var _ssrWindow = require("ssr-window");

var _getSupport = require("./get-support");

var device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = (0, _getSupport.getSupport)();
  var window = (0, _ssrWindow.getWindow)();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!device) {
    device = calcDevice(overrides);
  }

  return device;
}
},{"./get-support":90,"ssr-window":3}],90:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.getSupport = getSupport;

var _ssrWindow = require("ssr-window");

var support;

function calcSupport() {
  var window = (0, _ssrWindow.getWindow)();
  var document = (0, _ssrWindow.getDocument)();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}
},{"ssr-window":3}],91:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.deleteProps = deleteProps;
exports.nextTick = nextTick;
exports.now = now;
exports.getTranslate = getTranslate;
exports.isObject = isObject;
exports.extend = extend;
exports.bindModuleMethods = bindModuleMethods;
exports.getComputedStyle = getComputedStyle;

var _ssrWindow = require("ssr-window");

function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  var window = (0, _ssrWindow.getWindow)();
  var style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = (0, _ssrWindow.getWindow)();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  var noExtend = ['__proto__', 'constructor', 'prototype'];

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null) {
      var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      });

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}
},{"ssr-window":3}],92:[function(require,module,exports){
/**
 * Swiper 6.5.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 31, 2021
 */

"use strict";
exports.__esModule = true;
exports.default = require('./cjs/components/core/core-class').default;
exports.Swiper = require('./cjs/components/core/core-class').default;
exports.Virtual = require('./cjs/components/virtual/virtual').default;
exports.Keyboard = require('./cjs/components/keyboard/keyboard').default;
exports.Mousewheel = require('./cjs/components/mousewheel/mousewheel').default;
exports.Navigation = require('./cjs/components/navigation/navigation').default;
exports.Pagination = require('./cjs/components/pagination/pagination').default;
exports.Scrollbar = require('./cjs/components/scrollbar/scrollbar').default;
exports.Parallax = require('./cjs/components/parallax/parallax').default;
exports.Zoom = require('./cjs/components/zoom/zoom').default;
exports.Lazy = require('./cjs/components/lazy/lazy').default;
exports.Controller = require('./cjs/components/controller/controller').default;
exports.A11y = require('./cjs/components/a11y/a11y').default;
exports.History = require('./cjs/components/history/history').default;
exports.HashNavigation = require('./cjs/components/hash-navigation/hash-navigation').default;
exports.Autoplay = require('./cjs/components/autoplay/autoplay').default;
exports.EffectFade = require('./cjs/components/effect-fade/effect-fade').default;
exports.EffectCube = require('./cjs/components/effect-cube/effect-cube').default;
exports.EffectFlip = require('./cjs/components/effect-flip/effect-flip').default;
exports.EffectCoverflow = require('./cjs/components/effect-coverflow/effect-coverflow').default;
exports.Thumbs = require('./cjs/components/thumbs/thumbs').default;
},{"./cjs/components/a11y/a11y":4,"./cjs/components/autoplay/autoplay":5,"./cjs/components/controller/controller":6,"./cjs/components/core/core-class":14,"./cjs/components/effect-coverflow/effect-coverflow":69,"./cjs/components/effect-cube/effect-cube":70,"./cjs/components/effect-fade/effect-fade":71,"./cjs/components/effect-flip/effect-flip":72,"./cjs/components/hash-navigation/hash-navigation":73,"./cjs/components/history/history":74,"./cjs/components/keyboard/keyboard":75,"./cjs/components/lazy/lazy":76,"./cjs/components/mousewheel/mousewheel":77,"./cjs/components/navigation/navigation":78,"./cjs/components/pagination/pagination":79,"./cjs/components/parallax/parallax":80,"./cjs/components/scrollbar/scrollbar":81,"./cjs/components/thumbs/thumbs":82,"./cjs/components/virtual/virtual":83,"./cjs/components/zoom/zoom":84}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2xlb25hL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9ob21lcGFnZS5qcyIsIm5vZGVfbW9kdWxlcy9kb203L2RvbTcuY2pzLmpzIiwibm9kZV9tb2R1bGVzL3Nzci13aW5kb3cvc3NyLXdpbmRvdy51bWQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2ExMXkvYTExeS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvYXV0b3BsYXkvYXV0b3BsYXkuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9icmVha3BvaW50cy9nZXRCcmVha3BvaW50LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2JyZWFrcG9pbnRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2JyZWFrcG9pbnRzL3NldEJyZWFrcG9pbnQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvY2hlY2stb3ZlcmZsb3cvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9hZGRDbGFzc2VzLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2NsYXNzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9yZW1vdmVDbGFzc2VzLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2NvcmUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZGVmYXVsdHMuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZXZlbnRzLWVtaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZXZlbnRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vbkNsaWNrLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblJlc2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25TY3JvbGwuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uVG91Y2hFbmQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uVG91Y2hNb3ZlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblRvdWNoU3RhcnQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3Ivc2V0R3JhYkN1cnNvci5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9ncmFiLWN1cnNvci91bnNldEdyYWJDdXJzb3IuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvaW1hZ2VzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2ltYWdlcy9sb2FkSW1hZ2UuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvaW1hZ2VzL3ByZWxvYWRJbWFnZXMuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvbG9vcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BDcmVhdGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvbG9vcC9sb29wRGVzdHJveS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BGaXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2FkZFNsaWRlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9hcHBlbmRTbGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3ByZXBlbmRTbGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vcmVtb3ZlQWxsU2xpZGVzLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9yZW1vdmVTbGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9tb2R1bGFyLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3NsaWRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlTmV4dC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVByZXYuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVSZXNldC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVRvLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVUb0Nsb3Nlc3QuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVUb0xvb3AuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdHJhbnNpdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3NldFRyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdHJhbnNpdGlvbi90cmFuc2l0aW9uRW5kLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvblN0YXJ0LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9nZXRUcmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9tYXhUcmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL21pblRyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS90cmFuc2xhdGUvc2V0VHJhbnNsYXRlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS90cmFuc2xhdGVUby5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS91cGRhdGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZUFjdGl2ZUluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVBdXRvSGVpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVDbGlja2VkU2xpZGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVByb2dyZXNzLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTaXplLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXMuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc0NsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc09mZnNldC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzUHJvZ3Jlc3MuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2VmZmVjdC1jb3ZlcmZsb3cvZWZmZWN0LWNvdmVyZmxvdy5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvZWZmZWN0LWN1YmUvZWZmZWN0LWN1YmUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2VmZmVjdC1mYWRlL2VmZmVjdC1mYWRlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9lZmZlY3QtZmxpcC9lZmZlY3QtZmxpcC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvaGFzaC1uYXZpZ2F0aW9uL2hhc2gtbmF2aWdhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvaGlzdG9yeS9oaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9rZXlib2FyZC9rZXlib2FyZC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvbGF6eS9sYXp5LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9tb3VzZXdoZWVsL21vdXNld2hlZWwuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9wYXJhbGxheC9wYXJhbGxheC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvdmlydHVhbC92aXJ0dWFsLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy96b29tL3pvb20uanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9tb2R1bGVzL29ic2VydmVyL29ic2VydmVyLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvdXRpbHMvZG9tLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvdXRpbHMvZ2V0LWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy91dGlscy9nZXQtZGV2aWNlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvdXRpbHMvZ2V0LXN1cHBvcnQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy91dGlscy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLmNqcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxJQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFKLENBQVcsbUJBQVgsRUFBZ0M7QUFDM0M7QUFDQSxFQUFBLFNBQVMsRUFBRSxZQUZnQztBQUczQyxFQUFBLElBQUksRUFBRSxJQUhxQztBQUszQztBQUNBLEVBQUEsVUFBVSxFQUFFO0FBQ1YsSUFBQSxFQUFFLEVBQUU7QUFETSxHQU4rQjtBQVUzQztBQUNBLEVBQUEsVUFBVSxFQUFFO0FBQ1YsSUFBQSxNQUFNLEVBQUUscUJBREU7QUFFVixJQUFBLE1BQU0sRUFBRTtBQUZFLEdBWCtCO0FBZ0IzQztBQUNBLEVBQUEsU0FBUyxFQUFFO0FBQ1QsSUFBQSxFQUFFLEVBQUU7QUFESztBQWpCZ0MsQ0FBaEMsQ0FBZjs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2x2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2htQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5cclxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgXHJcbiAgICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgfSxcclxuICBcclxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgXHJcbiAgICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgIH0sXHJcbiAgfSk7IiwiLyoqXG4gKiBEb203IDMuMC4wXG4gKiBNaW5pbWFsaXN0aWMgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBET00gbWFuaXB1bGF0aW9uLCB3aXRoIGEgalF1ZXJ5LWNvbXBhdGlibGUgQVBJXG4gKiBodHRwczovL2ZyYW1ld29yazcuaW8vZG9jcy9kb203Lmh0bWxcbiAqXG4gKiBDb3B5cmlnaHQgMjAyMCwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogTm92ZW1iZXIgOSwgMjAyMFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzc3JXaW5kb3cgPSByZXF1aXJlKCdzc3Itd2luZG93Jyk7XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9O1xuXG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbmZ1bmN0aW9uIG1ha2VSZWFjdGl2ZShvYmopIHtcbiAgdmFyIHByb3RvID0gb2JqLl9fcHJvdG9fXztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19fcHJvdG9fXycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBwcm90bztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBwcm90by5fX3Byb3RvX18gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgRG9tNyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FycmF5KSB7XG4gIF9pbmhlcml0c0xvb3NlKERvbTcsIF9BcnJheSk7XG5cbiAgZnVuY3Rpb24gRG9tNyhpdGVtcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0FycmF5LmNhbGwuYXBwbHkoX0FycmF5LCBbdGhpc10uY29uY2F0KGl0ZW1zKSkgfHwgdGhpcztcbiAgICBtYWtlUmVhY3RpdmUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBEb203O1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoQXJyYXkpKTtcblxuZnVuY3Rpb24gYXJyYXlGbGF0KGFycikge1xuICBpZiAoYXJyID09PSB2b2lkIDApIHtcbiAgICBhcnIgPSBbXTtcbiAgfVxuXG4gIHZhciByZXMgPSBbXTtcbiAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XG4gICAgICByZXMucHVzaC5hcHBseShyZXMsIGFycmF5RmxhdChlbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMucHVzaChlbCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFyciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChhcnIsIGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycikge1xuICB2YXIgdW5pcXVlQXJyYXkgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh1bmlxdWVBcnJheS5pbmRleE9mKGFycltpXSkgPT09IC0xKSB1bmlxdWVBcnJheS5wdXNoKGFycltpXSk7XG4gIH1cblxuICByZXR1cm4gdW5pcXVlQXJyYXk7XG59XG5mdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oLikvZywgZnVuY3Rpb24gKG1hdGNoLCBncm91cCkge1xuICAgIHJldHVybiBncm91cC50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcXNhKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIFtzZWxlY3Rvcl07XG4gIH1cblxuICB2YXIgYSA9IFtdO1xuICB2YXIgcmVzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGEucHVzaChyZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgdmFyIHdpbmRvdyA9IHNzcldpbmRvdy5nZXRXaW5kb3coKTtcbiAgdmFyIGRvY3VtZW50ID0gc3NyV2luZG93LmdldERvY3VtZW50KCk7XG4gIHZhciBhcnIgPSBbXTtcblxuICBpZiAoIWNvbnRleHQgJiYgc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHJldHVybiBuZXcgRG9tNyhhcnIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgaHRtbCA9IHNlbGVjdG9yLnRyaW0oKTtcblxuICAgIGlmIChodG1sLmluZGV4T2YoJzwnKSA+PSAwICYmIGh0bWwuaW5kZXhPZignPicpID49IDApIHtcbiAgICAgIHZhciB0b0NyZWF0ZSA9ICdkaXYnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPGxpJykgPT09IDApIHRvQ3JlYXRlID0gJ3VsJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0cicpID09PSAwKSB0b0NyZWF0ZSA9ICd0Ym9keSc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGQnKSA9PT0gMCB8fCBodG1sLmluZGV4T2YoJzx0aCcpID09PSAwKSB0b0NyZWF0ZSA9ICd0cic7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGJvZHknKSA9PT0gMCkgdG9DcmVhdGUgPSAndGFibGUnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPG9wdGlvbicpID09PSAwKSB0b0NyZWF0ZSA9ICdzZWxlY3QnO1xuICAgICAgdmFyIHRlbXBQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRvQ3JlYXRlKTtcbiAgICAgIHRlbXBQYXJlbnQuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyLnB1c2godGVtcFBhcmVudC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXJyID0gcXNhKHNlbGVjdG9yLnRyaW0oKSwgY29udGV4dCB8fCBkb2N1bWVudCk7XG4gICAgfSAvLyBhcnIgPSBxc2Eoc2VsZWN0b3IsIGRvY3VtZW50KTtcblxuICB9IGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yID09PSB3aW5kb3cgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgYXJyLnB1c2goc2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykgcmV0dXJuIHNlbGVjdG9yO1xuICAgIGFyciA9IHNlbGVjdG9yO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEb203KGFycmF5VW5pcXVlKGFycikpO1xufVxuXG4kLmZuID0gRG9tNy5wcm90b3R5cGU7XG5cbmZ1bmN0aW9uIGFkZENsYXNzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjbGFzc2VzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5zcGxpdCgnICcpO1xuICB9KSk7XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICB2YXIgX2VsJGNsYXNzTGlzdDtcblxuICAgIChfZWwkY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0KS5hZGQuYXBwbHkoX2VsJGNsYXNzTGlzdCwgY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NlcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGNsYXNzZXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuc3BsaXQoJyAnKTtcbiAgfSkpO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIF9lbCRjbGFzc0xpc3QyO1xuXG4gICAgKF9lbCRjbGFzc0xpc3QyID0gZWwuY2xhc3NMaXN0KS5yZW1vdmUuYXBwbHkoX2VsJGNsYXNzTGlzdDIsIGNsYXNzTmFtZXMpO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBjbGFzc2VzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcygpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgY2xhc3Nlc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5zcGxpdCgnICcpO1xuICB9KSk7XG4gIHJldHVybiBhcnJheUZpbHRlcih0aGlzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIH0pLmxlbmd0aCA+IDA7XG4gIH0pLmxlbmd0aCA+IDA7XG59XG5cbmZ1bmN0aW9uIGF0dHIoYXR0cnMsIHZhbHVlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhdHRycyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBHZXQgYXR0clxuICAgIGlmICh0aGlzWzBdKSByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cnMpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gLy8gU2V0IGF0dHJzXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgLy8gU3RyaW5nXG4gICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRycywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3RcbiAgICAgIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJzKSB7XG4gICAgICAgIHRoaXNbaV1bYXR0ck5hbWVdID0gYXR0cnNbYXR0ck5hbWVdO1xuICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cnNbYXR0ck5hbWVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cihhdHRyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHByb3AocHJvcHMsIHZhbHVlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBHZXQgcHJvcFxuICAgIGlmICh0aGlzWzBdKSByZXR1cm4gdGhpc1swXVtwcm9wc107XG4gIH0gZWxzZSB7XG4gICAgLy8gU2V0IHByb3BzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBTdHJpbmdcbiAgICAgICAgdGhpc1tpXVtwcm9wc10gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9iamVjdFxuICAgICAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wcykge1xuICAgICAgICAgIHRoaXNbaV1bcHJvcE5hbWVdID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gIHZhciBlbDtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIGVsID0gdGhpc1swXTtcbiAgICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkOyAvLyBHZXQgdmFsdWVcblxuICAgIGlmIChlbC5kb203RWxlbWVudERhdGFTdG9yYWdlICYmIGtleSBpbiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKSB7XG4gICAgICByZXR1cm4gZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgIH1cblxuICAgIHZhciBkYXRhS2V5ID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIGtleSk7XG5cbiAgICBpZiAoZGF0YUtleSkge1xuICAgICAgcmV0dXJuIGRhdGFLZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSAvLyBTZXQgdmFsdWVcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGVsID0gdGhpc1tpXTtcbiAgICBpZiAoIWVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgPSB7fTtcbiAgICBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEYXRhKGtleSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldKSB7XG4gICAgICBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0gPSBudWxsO1xuICAgICAgZGVsZXRlIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0YXNldCgpIHtcbiAgdmFyIGVsID0gdGhpc1swXTtcbiAgaWYgKCFlbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGRhdGFzZXQgPSB7fTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGlmIChlbC5kYXRhc2V0KSB7XG4gICAgZm9yICh2YXIgZGF0YUtleSBpbiBlbC5kYXRhc2V0KSB7XG4gICAgICBkYXRhc2V0W2RhdGFLZXldID0gZWwuZGF0YXNldFtkYXRhS2V5XTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgX2F0dHIgPSBlbC5hdHRyaWJ1dGVzW2ldO1xuXG4gICAgICBpZiAoX2F0dHIubmFtZS5pbmRleE9mKCdkYXRhLScpID49IDApIHtcbiAgICAgICAgZGF0YXNldFt0b0NhbWVsQ2FzZShfYXR0ci5uYW1lLnNwbGl0KCdkYXRhLScpWzFdKV0gPSBfYXR0ci52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gZGF0YXNldCkge1xuICAgIGlmIChkYXRhc2V0W2tleV0gPT09ICdmYWxzZScpIGRhdGFzZXRba2V5XSA9IGZhbHNlO2Vsc2UgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ3RydWUnKSBkYXRhc2V0W2tleV0gPSB0cnVlO2Vsc2UgaWYgKHBhcnNlRmxvYXQoZGF0YXNldFtrZXldKSA9PT0gZGF0YXNldFtrZXldICogMSkgZGF0YXNldFtrZXldICo9IDE7XG4gIH1cblxuICByZXR1cm4gZGF0YXNldDtcbn1cblxuZnVuY3Rpb24gdmFsKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGVsLm11bHRpcGxlICYmIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKGVsLnNlbGVjdGVkT3B0aW9uc1tpXS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsLnZhbHVlO1xuICB9IC8vIHNldCB2YWx1ZVxuXG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgdmFyIF9lbCA9IHRoaXNbX2ldO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIF9lbC5tdWx0aXBsZSAmJiBfZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2VsLm9wdGlvbnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgX2VsLm9wdGlvbnNbal0uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKF9lbC5vcHRpb25zW2pdLnZhbHVlKSA+PSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMudmFsKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdHlwZW9mIGR1cmF0aW9uICE9PSAnc3RyaW5nJyA/IGR1cmF0aW9uICsgXCJtc1wiIDogZHVyYXRpb247XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb24oKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIHZhciBldmVudFR5cGUgPSBhcmdzWzBdLFxuICAgICAgdGFyZ2V0U2VsZWN0b3IgPSBhcmdzWzFdLFxuICAgICAgbGlzdGVuZXIgPSBhcmdzWzJdLFxuICAgICAgY2FwdHVyZSA9IGFyZ3NbM107XG5cbiAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUeXBlID0gYXJnc1swXTtcbiAgICBsaXN0ZW5lciA9IGFyZ3NbMV07XG4gICAgY2FwdHVyZSA9IGFyZ3NbMl07XG4gICAgdGFyZ2V0U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoIWNhcHR1cmUpIGNhcHR1cmUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBoYW5kbGVMaXZlRXZlbnQoZSkge1xuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIHZhciBldmVudERhdGEgPSBlLnRhcmdldC5kb203RXZlbnREYXRhIHx8IFtdO1xuXG4gICAgaWYgKGV2ZW50RGF0YS5pbmRleE9mKGUpIDwgMCkge1xuICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgfVxuXG4gICAgaWYgKCQodGFyZ2V0KS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmFwcGx5KHRhcmdldCwgZXZlbnREYXRhKTtlbHNlIHtcbiAgICAgIHZhciBfcGFyZW50cyA9ICQodGFyZ2V0KS5wYXJlbnRzKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IF9wYXJlbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICAgIGlmICgkKF9wYXJlbnRzW2tdKS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmFwcGx5KF9wYXJlbnRzW2tdLCBldmVudERhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGUpIHtcbiAgICB2YXIgZXZlbnREYXRhID0gZSAmJiBlLnRhcmdldCA/IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW10gOiBbXTtcblxuICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgIH1cblxuICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGV2ZW50RGF0YSk7XG4gIH1cblxuICB2YXIgZXZlbnRzID0gZXZlbnRUeXBlLnNwbGl0KCcgJyk7XG4gIHZhciBqO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50c1tqXTtcbiAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzKSBlbC5kb203TGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVyc1tldmVudF0pIGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdLnB1c2goe1xuICAgICAgICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcbiAgICAgICAgICBwcm94eUxpc3RlbmVyOiBoYW5kbGVFdmVudFxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlRXZlbnQsIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXZlIGV2ZW50c1xuICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICB2YXIgX2V2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzKSBlbC5kb203TGl2ZUxpc3RlbmVycyA9IHt9O1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzW19ldmVudF0pIGVsLmRvbTdMaXZlTGlzdGVuZXJzW19ldmVudF0gPSBbXTtcblxuICAgICAgICBlbC5kb203TGl2ZUxpc3RlbmVyc1tfZXZlbnRdLnB1c2goe1xuICAgICAgICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcbiAgICAgICAgICBwcm94eUxpc3RlbmVyOiBoYW5kbGVMaXZlRXZlbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihfZXZlbnQsIGhhbmRsZUxpdmVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIG9mZigpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgdmFyIGV2ZW50VHlwZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFR5cGUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuICB2YXIgZXZlbnRzID0gZXZlbnRUeXBlLnNwbGl0KCcgJyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZXZlbnQgPSBldmVudHNbaV07XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIHZhciBlbCA9IHRoaXNbal07XG4gICAgICB2YXIgaGFuZGxlcnMgPSB2b2lkIDA7XG5cbiAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IgJiYgZWwuZG9tN0xpc3RlbmVycykge1xuICAgICAgICBoYW5kbGVycyA9IGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGl2ZUxpc3RlbmVycykge1xuICAgICAgICBoYW5kbGVycyA9IGVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBrID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgayA+PSAwOyBrIC09IDEpIHtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IGhhbmRsZXJzW2tdO1xuXG4gICAgICAgICAgaWYgKGxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyLmRvbTdwcm94eSAmJiBoYW5kbGVyLmxpc3RlbmVyLmRvbTdwcm94eSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIG9uY2UoKSB7XG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgIGFyZ3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgfVxuXG4gIHZhciBldmVudE5hbWUgPSBhcmdzWzBdLFxuICAgICAgdGFyZ2V0U2VsZWN0b3IgPSBhcmdzWzFdLFxuICAgICAgbGlzdGVuZXIgPSBhcmdzWzJdLFxuICAgICAgY2FwdHVyZSA9IGFyZ3NbM107XG5cbiAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnROYW1lID0gYXJnc1swXTtcbiAgICBsaXN0ZW5lciA9IGFyZ3NbMV07XG4gICAgY2FwdHVyZSA9IGFyZ3NbMl07XG4gICAgdGFyZ2V0U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGV2ZW50QXJncyA9IG5ldyBBcnJheShfbGVuOCksIF9rZXk4ID0gMDsgX2tleTggPCBfbGVuODsgX2tleTgrKykge1xuICAgICAgZXZlbnRBcmdzW19rZXk4XSA9IGFyZ3VtZW50c1tfa2V5OF07XG4gICAgfVxuXG4gICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnRBcmdzKTtcbiAgICBkb20ub2ZmKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIG9uY2VIYW5kbGVyLCBjYXB0dXJlKTtcblxuICAgIGlmIChvbmNlSGFuZGxlci5kb203cHJveHkpIHtcbiAgICAgIGRlbGV0ZSBvbmNlSGFuZGxlci5kb203cHJveHk7XG4gICAgfVxuICB9XG5cbiAgb25jZUhhbmRsZXIuZG9tN3Byb3h5ID0gbGlzdGVuZXI7XG4gIHJldHVybiBkb20ub24oZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyKCkge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIF9sZW45ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuOSksIF9rZXk5ID0gMDsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgIGFyZ3NbX2tleTldID0gYXJndW1lbnRzW19rZXk5XTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSBhcmdzWzBdLnNwbGl0KCcgJyk7XG4gIHZhciBldmVudERhdGEgPSBhcmdzWzFdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGV2ZW50ID0gZXZlbnRzW2ldO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzW2pdO1xuXG4gICAgICBpZiAod2luZG93LkN1c3RvbUV2ZW50KSB7XG4gICAgICAgIHZhciBldnQgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgZGV0YWlsOiBldmVudERhdGEsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5kb203RXZlbnREYXRhID0gYXJncy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFJbmRleCkge1xuICAgICAgICAgIHJldHVybiBkYXRhSW5kZXggPiAwO1xuICAgICAgICB9KTtcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgICBlbC5kb203RXZlbnREYXRhID0gW107XG4gICAgICAgIGRlbGV0ZSBlbC5kb203RXZlbnREYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGNhbGxiYWNrKSB7XG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICBkb20ub2ZmKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGRvbS5vbigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uRW5kKGNhbGxiYWNrKSB7XG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICBkb20ub2ZmKCdhbmltYXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgZG9tLm9uKCdhbmltYXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHdpZHRoKCkge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuXG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgdmFyIF9zdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoX3N0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KCkge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuXG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuY3NzKCdoZWlnaHQnKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gb3V0ZXJIZWlnaHQoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgdmFyIF9zdHlsZXMyID0gdGhpcy5zdHlsZXMoKTtcblxuICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdChfc3R5bGVzMi5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpICsgcGFyc2VGbG9hdChfc3R5bGVzMi5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuICAgIHZhciBkb2N1bWVudCA9IHNzcldpbmRvdy5nZXREb2N1bWVudCgpO1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgdmFyIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgdmFyIGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICAgIHZhciBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoaWRlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2hvdygpIHtcbiAgdmFyIHdpbmRvdyA9IHNzcldpbmRvdy5nZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgIC8vIFN0aWxsIG5vdCB2aXNpYmxlXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc3R5bGVzKCkge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpO1xuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIGNzcyhwcm9wcywgdmFsdWUpIHtcbiAgdmFyIHdpbmRvdyA9IHNzcldpbmRvdy5nZXRXaW5kb3coKTtcbiAgdmFyIGk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gLmNzcygnd2lkdGgnKVxuICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLmNzcyh7IHdpZHRoOiAnMTAwcHgnIH0pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgIHRoaXNbaV0uc3R5bGVbX3Byb3BdID0gcHJvcHNbX3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAuY3NzKCd3aWR0aCcsICcxMDBweCcpXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpcztcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICBjYWxsYmFjay5hcHBseShlbCwgW2VsLCBpbmRleF0pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gYXJyYXlGaWx0ZXIodGhpcywgY2FsbGJhY2spO1xuICByZXR1cm4gJChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBodG1sKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRleHQodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuICB2YXIgZG9jdW1lbnQgPSBzc3JXaW5kb3cuZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIGVsID0gdGhpc1swXTtcbiAgdmFyIGNvbXBhcmVXaXRoO1xuICB2YXIgaTtcbiAgaWYgKCFlbCB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZWwubWF0Y2hlcykgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb21wYXJlV2l0aCA9ICQoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIGVsID09PSBkb2N1bWVudDtcbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIGVsID09PSB3aW5kb3c7XG4gIH1cblxuICBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgdmFyIGNoaWxkID0gdGhpc1swXTtcbiAgdmFyIGk7XG5cbiAgaWYgKGNoaWxkKSB7XG4gICAgaSA9IDA7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgd2hpbGUgKChjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgIT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXEoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzO1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID4gbGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICB2YXIgcmV0dXJuSW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgICBpZiAocmV0dXJuSW5kZXggPCAwKSByZXR1cm4gJChbXSk7XG4gICAgcmV0dXJuICQoW3RoaXNbcmV0dXJuSW5kZXhdXSk7XG4gIH1cblxuICByZXR1cm4gJChbdGhpc1tpbmRleF1dKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKCkge1xuICB2YXIgbmV3Q2hpbGQ7XG4gIHZhciBkb2N1bWVudCA9IHNzcldpbmRvdy5nZXREb2N1bWVudCgpO1xuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgYXJndW1lbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgbmV3Q2hpbGQgPSBrIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGsgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNba107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgd2hpbGUgKHRlbXBEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGRbal0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG8ocGFyZW50KSB7XG4gICQocGFyZW50KS5hcHBlbmQodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0NoaWxkKSB7XG4gIHZhciBkb2N1bWVudCA9IHNzcldpbmRvdy5nZXREb2N1bWVudCgpO1xuICB2YXIgaTtcbiAgdmFyIGo7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG5cbiAgICAgIGZvciAoaiA9IHRlbXBEaXYuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBqID49IDA7IGogLT0gMSkge1xuICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZSh0ZW1wRGl2LmNoaWxkTm9kZXNbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZFtqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmRUbyhwYXJlbnQpIHtcbiAgJChwYXJlbnQpLnByZXBlbmQodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUoc2VsZWN0b3IpIHtcbiAgdmFyIGJlZm9yZSA9ICQoc2VsZWN0b3IpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChiZWZvcmUubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZWZvcmVbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYmVmb3JlWzBdKTtcbiAgICB9IGVsc2UgaWYgKGJlZm9yZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJlZm9yZS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBiZWZvcmVbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGJlZm9yZVtqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydEFmdGVyKHNlbGVjdG9yKSB7XG4gIHZhciBhZnRlciA9ICQoc2VsZWN0b3IpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhZnRlci5sZW5ndGggPT09IDEpIHtcbiAgICAgIGFmdGVyWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGFmdGVyWzBdLm5leHRTaWJsaW5nKTtcbiAgICB9IGVsc2UgaWYgKGFmdGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYWZ0ZXIubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgYWZ0ZXJbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGFmdGVyW2pdLm5leHRTaWJsaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV4dChzZWxlY3Rvcikge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgJCh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKSByZXR1cm4gJChbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICByZXR1cm4gJChbXSk7XG59XG5cbmZ1bmN0aW9uIG5leHRBbGwoc2VsZWN0b3IpIHtcbiAgdmFyIG5leHRFbHMgPSBbXTtcbiAgdmFyIGVsID0gdGhpc1swXTtcbiAgaWYgKCFlbCkgcmV0dXJuICQoW10pO1xuXG4gIHdoaWxlIChlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICB2YXIgX25leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCQoX25leHQpLmlzKHNlbGVjdG9yKSkgbmV4dEVscy5wdXNoKF9uZXh0KTtcbiAgICB9IGVsc2UgbmV4dEVscy5wdXNoKF9uZXh0KTtcblxuICAgIGVsID0gX25leHQ7XG4gIH1cblxuICByZXR1cm4gJChuZXh0RWxzKTtcbn1cblxuZnVuY3Rpb24gcHJldihzZWxlY3Rvcikge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIGVsID0gdGhpc1swXTtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgJChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW2VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQoW10pO1xuICAgIH1cblxuICAgIGlmIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSByZXR1cm4gJChbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gcHJldkFsbChzZWxlY3Rvcikge1xuICB2YXIgcHJldkVscyA9IFtdO1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gJChbXSk7XG5cbiAgd2hpbGUgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICB2YXIgX3ByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICgkKF9wcmV2KS5pcyhzZWxlY3RvcikpIHByZXZFbHMucHVzaChfcHJldik7XG4gICAgfSBlbHNlIHByZXZFbHMucHVzaChfcHJldik7XG5cbiAgICBlbCA9IF9wcmV2O1xuICB9XG5cbiAgcmV0dXJuICQocHJldkVscyk7XG59XG5cbmZ1bmN0aW9uIHNpYmxpbmdzKHNlbGVjdG9yKSB7XG4gIHJldHVybiB0aGlzLm5leHRBbGwoc2VsZWN0b3IpLmFkZCh0aGlzLnByZXZBbGwoc2VsZWN0b3IpKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50KHNlbGVjdG9yKSB7XG4gIHZhciBwYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQodGhpc1tpXS5wYXJlbnROb2RlKS5pcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQocGFyZW50cyk7XG59XG5cbmZ1bmN0aW9uIHBhcmVudHMoc2VsZWN0b3IpIHtcbiAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBfcGFyZW50ID0gdGhpc1tpXS5wYXJlbnROb2RlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICB3aGlsZSAoX3BhcmVudCkge1xuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICgkKF9wYXJlbnQpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKF9wYXJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKF9wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBfcGFyZW50ID0gX3BhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKHBhcmVudHMpO1xufVxuXG5mdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XG4gIHZhciBjbG9zZXN0ID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgaWYgKCFjbG9zZXN0LmlzKHNlbGVjdG9yKSkge1xuICAgIGNsb3Nlc3QgPSBjbG9zZXN0LnBhcmVudHMoc2VsZWN0b3IpLmVxKDApO1xuICB9XG5cbiAgcmV0dXJuIGNsb3Nlc3Q7XG59XG5cbmZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgdmFyIGZvdW5kRWxlbWVudHMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZm91bmQgPSB0aGlzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBmb3VuZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgZm91bmRFbGVtZW50cy5wdXNoKGZvdW5kW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChmb3VuZEVsZW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgdmFyIGNoaWxkcmVuID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHRoaXNbaV0uY2hpbGRyZW47XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGlmICghc2VsZWN0b3IgfHwgJChjaGlsZE5vZGVzW2pdKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXNbaV0ucGFyZW50Tm9kZSkgdGhpc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgcmV0dXJuIHRoaXMucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZCgpIHtcbiAgdmFyIGRvbSA9IHRoaXM7XG4gIHZhciBpO1xuICB2YXIgajtcblxuICBmb3IgKHZhciBfbGVuMTAgPSBhcmd1bWVudHMubGVuZ3RoLCBlbHMgPSBuZXcgQXJyYXkoX2xlbjEwKSwgX2tleTEwID0gMDsgX2tleTEwIDwgX2xlbjEwOyBfa2V5MTArKykge1xuICAgIGVsc1tfa2V5MTBdID0gYXJndW1lbnRzW19rZXkxMF07XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHRvQWRkID0gJChlbHNbaV0pO1xuXG4gICAgZm9yIChqID0gMDsgaiA8IHRvQWRkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBkb20ucHVzaCh0b0FkZFtqXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvbTtcbn1cblxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZWwuY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAoZWwuY2hpbGROb2Rlc1tqXS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgZWwuY2hpbGROb2Rlc1tqXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsLmNoaWxkTm9kZXNbal0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVsLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFRvKCkge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbGVmdCA9IGFyZ3NbMF0sXG4gICAgICB0b3AgPSBhcmdzWzFdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzJdLFxuICAgICAgZWFzaW5nID0gYXJnc1szXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1s0XTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDQgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gZWFzaW5nO1xuICAgIGxlZnQgPSBhcmdzWzBdO1xuICAgIHRvcCA9IGFyZ3NbMV07XG4gICAgZHVyYXRpb24gPSBhcmdzWzJdO1xuICAgIGNhbGxiYWNrID0gYXJnc1szXTtcbiAgICBlYXNpbmcgPSBhcmdzWzRdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSBlYXNpbmcgPSAnc3dpbmcnO1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB2YXIgY3VycmVudFRvcDtcbiAgICB2YXIgY3VycmVudExlZnQ7XG4gICAgdmFyIG1heFRvcDtcbiAgICB2YXIgbWF4TGVmdDtcbiAgICB2YXIgbmV3VG9wO1xuICAgIHZhciBuZXdMZWZ0O1xuICAgIHZhciBzY3JvbGxUb3A7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHZhciBzY3JvbGxMZWZ0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICB2YXIgYW5pbWF0ZVRvcCA9IHRvcCA+IDAgfHwgdG9wID09PSAwO1xuICAgIHZhciBhbmltYXRlTGVmdCA9IGxlZnQgPiAwIHx8IGxlZnQgPT09IDA7XG5cbiAgICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVhc2luZyA9ICdzd2luZyc7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVUb3ApIHtcbiAgICAgIGN1cnJlbnRUb3AgPSBlbC5zY3JvbGxUb3A7XG5cbiAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbmltYXRlTGVmdCkge1xuICAgICAgY3VycmVudExlZnQgPSBlbC5zY3JvbGxMZWZ0O1xuXG4gICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZHVyYXRpb24pIHJldHVybjtcblxuICAgIGlmIChhbmltYXRlVG9wKSB7XG4gICAgICBtYXhUb3AgPSBlbC5zY3JvbGxIZWlnaHQgLSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdUb3AgPSBNYXRoLm1heChNYXRoLm1pbih0b3AsIG1heFRvcCksIDApO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlTGVmdCkge1xuICAgICAgbWF4TGVmdCA9IGVsLnNjcm9sbFdpZHRoIC0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICBuZXdMZWZ0ID0gTWF0aC5tYXgoTWF0aC5taW4obGVmdCwgbWF4TGVmdCksIDApO1xuICAgIH1cblxuICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA9PT0gY3VycmVudFRvcCkgYW5pbWF0ZVRvcCA9IGZhbHNlO1xuICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID09PSBjdXJyZW50TGVmdCkgYW5pbWF0ZUxlZnQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcih0aW1lKSB7XG4gICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbiwgMSksIDApO1xuICAgICAgdmFyIGVhc2VQcm9ncmVzcyA9IGVhc2luZyA9PT0gJ2xpbmVhcicgPyBwcm9ncmVzcyA6IDAuNSAtIE1hdGguY29zKHByb2dyZXNzICogTWF0aC5QSSkgLyAyO1xuICAgICAgdmFyIGRvbmU7XG4gICAgICBpZiAoYW5pbWF0ZVRvcCkgc2Nyb2xsVG9wID0gY3VycmVudFRvcCArIGVhc2VQcm9ncmVzcyAqIChuZXdUb3AgLSBjdXJyZW50VG9wKTtcbiAgICAgIGlmIChhbmltYXRlTGVmdCkgc2Nyb2xsTGVmdCA9IGN1cnJlbnRMZWZ0ICsgZWFzZVByb2dyZXNzICogKG5ld0xlZnQgLSBjdXJyZW50TGVmdCk7XG5cbiAgICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA+IGN1cnJlbnRUb3AgJiYgc2Nyb2xsVG9wID49IG5ld1RvcCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBuZXdUb3A7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPCBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA8PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPiBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0ID49IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0ZUxlZnQgJiYgbmV3TGVmdCA8IGN1cnJlbnRMZWZ0ICYmIHNjcm9sbExlZnQgPD0gbmV3TGVmdCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbmV3TGVmdDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCkgZWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgaWYgKGFuaW1hdGVMZWZ0KSBlbC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH0pO1xufSAvLyBzY3JvbGxUb3AodG9wLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjaykge1xuXG5cbmZ1bmN0aW9uIHNjcm9sbFRvcCgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIHRvcCA9IGFyZ3NbMF0sXG4gICAgICBkdXJhdGlvbiA9IGFyZ3NbMV0sXG4gICAgICBlYXNpbmcgPSBhcmdzWzJdLFxuICAgICAgY2FsbGJhY2sgPSBhcmdzWzNdO1xuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdG9wID0gYXJnc1swXTtcbiAgICBkdXJhdGlvbiA9IGFyZ3NbMV07XG4gICAgY2FsbGJhY2sgPSBhcmdzWzJdO1xuICAgIGVhc2luZyA9IGFyZ3NbM107XG4gIH1cblxuICB2YXIgZG9tID0gdGhpcztcblxuICBpZiAodHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA+IDApIHJldHVybiBkb21bMF0uc2Nyb2xsVG9wO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyh1bmRlZmluZWQsIHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxMZWZ0KCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICB2YXIgbGVmdCA9IGFyZ3NbMF0sXG4gICAgICBkdXJhdGlvbiA9IGFyZ3NbMV0sXG4gICAgICBlYXNpbmcgPSBhcmdzWzJdLFxuICAgICAgY2FsbGJhY2sgPSBhcmdzWzNdO1xuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGVmdCA9IGFyZ3NbMF07XG4gICAgZHVyYXRpb24gPSBhcmdzWzFdO1xuICAgIGNhbGxiYWNrID0gYXJnc1syXTtcbiAgICBlYXNpbmcgPSBhcmdzWzNdO1xuICB9XG5cbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyhsZWZ0LCB1bmRlZmluZWQsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShpbml0aWFsUHJvcHMsIGluaXRpYWxQYXJhbXMpIHtcbiAgdmFyIHdpbmRvdyA9IHNzcldpbmRvdy5nZXRXaW5kb3coKTtcbiAgdmFyIGVscyA9IHRoaXM7XG4gIHZhciBhID0ge1xuICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsUHJvcHMpLFxuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnIC8vIG9yICdsaW5lYXInXG5cbiAgICAgIC8qIENhbGxiYWNrc1xuICAgICAgYmVnaW4oZWxlbWVudHMpXG4gICAgICBjb21wbGV0ZShlbGVtZW50cylcbiAgICAgIHByb2dyZXNzKGVsZW1lbnRzLCBjb21wbGV0ZSwgcmVtYWluaW5nLCBzdGFydCwgdHdlZW5WYWx1ZSlcbiAgICAgICovXG5cbiAgICB9LCBpbml0aWFsUGFyYW1zKSxcbiAgICBlbGVtZW50czogZWxzLFxuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgcXVlOiBbXSxcbiAgICBlYXNpbmdQcm9ncmVzczogZnVuY3Rpb24gZWFzaW5nUHJvZ3Jlc3MoZWFzaW5nLCBwcm9ncmVzcykge1xuICAgICAgaWYgKGVhc2luZyA9PT0gJ3N3aW5nJykge1xuICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcocHJvZ3Jlc3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKGEuZnJhbWVJZCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5mcmFtZUlkKTtcbiAgICAgIH1cblxuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgYS5xdWUgPSBbXTtcbiAgICB9LFxuICAgIGRvbmU6IGZ1bmN0aW9uIGRvbmUoY29tcGxldGUpIHtcbiAgICAgIGEuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZWw7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChjb21wbGV0ZSkgY29tcGxldGUoZWxzKTtcblxuICAgICAgaWYgKGEucXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHF1ZSA9IGEucXVlLnNoaWZ0KCk7XG4gICAgICAgIGEuYW5pbWF0ZShxdWVbMF0sIHF1ZVsxXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbmltYXRlOiBmdW5jdGlvbiBhbmltYXRlKHByb3BzLCBwYXJhbXMpIHtcbiAgICAgIGlmIChhLmFuaW1hdGluZykge1xuICAgICAgICBhLnF1ZS5wdXNoKFtwcm9wcywgcGFyYW1zXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBbXTsgLy8gRGVmaW5lICYgQ2FjaGUgSW5pdGlhbHMgJiBVbml0c1xuXG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5pdGlhbEZ1bGxWYWx1ZTtcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZTtcbiAgICAgICAgdmFyIHVuaXQ7XG4gICAgICAgIHZhciBmaW5hbFZhbHVlO1xuICAgICAgICB2YXIgZmluYWxGdWxsVmFsdWU7XG4gICAgICAgIGlmICghZWwuZG9tN0FuaW1hdGVJbnN0YW5jZSkgYS5lbGVtZW50c1tpbmRleF0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gICAgICAgIGVsZW1lbnRzW2luZGV4XSA9IHtcbiAgICAgICAgICBjb250YWluZXI6IGVsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHBhcnNlRmxvYXQoaW5pdGlhbEZ1bGxWYWx1ZSk7XG4gICAgICAgICAgdW5pdCA9IGluaXRpYWxGdWxsVmFsdWUucmVwbGFjZShpbml0aWFsVmFsdWUsICcnKTtcbiAgICAgICAgICBmaW5hbFZhbHVlID0gcGFyc2VGbG9hdChwcm9wc1twcm9wXSk7XG4gICAgICAgICAgZmluYWxGdWxsVmFsdWUgPSBwcm9wc1twcm9wXSArIHVuaXQ7XG4gICAgICAgICAgZWxlbWVudHNbaW5kZXhdW3Byb3BdID0ge1xuICAgICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZTogaW5pdGlhbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgdW5pdDogdW5pdCxcbiAgICAgICAgICAgIGZpbmFsVmFsdWU6IGZpbmFsVmFsdWUsXG4gICAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZTogZmluYWxGdWxsVmFsdWUsXG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IGluaXRpYWxWYWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIHZhciB0aW1lO1xuICAgICAgdmFyIGVsZW1lbnRzRG9uZSA9IDA7XG4gICAgICB2YXIgcHJvcHNEb25lID0gMDtcbiAgICAgIHZhciBkb25lO1xuICAgICAgdmFyIGJlZ2FuID0gZmFsc2U7XG4gICAgICBhLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3M7XG4gICAgICAgIHZhciBlYXNlUHJvZ3Jlc3M7IC8vIGxldCBlbDtcblxuICAgICAgICBpZiAoIWJlZ2FuKSB7XG4gICAgICAgICAgYmVnYW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChwYXJhbXMuYmVnaW4pIHBhcmFtcy5iZWdpbihlbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcGFyYW1zLnByb2dyZXNzKGVscywgTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCksIHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUgPCAwID8gMCA6IHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUsIHN0YXJ0VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmIChkb25lIHx8IGVsLmRvbmUpIHJldHVybjtcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICAgICAgICBlYXNlUHJvZ3Jlc3MgPSBhLmVhc2luZ1Byb2dyZXNzKHBhcmFtcy5lYXNpbmcsIHByb2dyZXNzKTtcbiAgICAgICAgICAgIHZhciBfZWwkcHJvcCA9IGVsW3Byb3BdLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IF9lbCRwcm9wLmluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gX2VsJHByb3AuZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICB1bml0ID0gX2VsJHByb3AudW5pdDtcbiAgICAgICAgICAgIGVsW3Byb3BdLmN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZSArIGVhc2VQcm9ncmVzcyAqIChmaW5hbFZhbHVlIC0gaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBlbFtwcm9wXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChmaW5hbFZhbHVlID4gaW5pdGlhbFZhbHVlICYmIGN1cnJlbnRWYWx1ZSA+PSBmaW5hbFZhbHVlIHx8IGZpbmFsVmFsdWUgPCBpbml0aWFsVmFsdWUgJiYgY3VycmVudFZhbHVlIDw9IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gZmluYWxWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgICAgIHByb3BzRG9uZSArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wc0RvbmUgPT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlbC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c0RvbmUgKz0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlbGVtZW50c0RvbmUgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgIGEuZG9uZShwYXJhbXMuY29tcGxldGUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zdHlsZVtwcm9wXSA9IGN1cnJlbnRWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuOyAvLyBUaGVuIGNhbGxcblxuICAgICAgICBhLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICB9XG5cbiAgICAgIGEuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfTtcblxuICBpZiAoYS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZWxzO1xuICB9XG5cbiAgdmFyIGFuaW1hdGVJbnN0YW5jZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEuZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBhbmltYXRlSW5zdGFuY2UgPSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgfSBlbHNlIGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoIWFuaW1hdGVJbnN0YW5jZSkge1xuICAgIGFuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoaW5pdGlhbFByb3BzID09PSAnc3RvcCcpIHtcbiAgICBhbmltYXRlSW5zdGFuY2Uuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5hbmltYXRlKGEucHJvcHMsIGEucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBlbHM7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIHZhciBlbHMgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBlbHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZS5zdG9wKCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBub1RyaWdnZXIgPSAncmVzaXplIHNjcm9sbCcuc3BsaXQoJyAnKTtcblxuZnVuY3Rpb24gc2hvcnRjdXQobmFtZSkge1xuICBmdW5jdGlvbiBldmVudEhhbmRsZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobm9UcmlnZ2VyLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgICAgaWYgKG5hbWUgaW4gdGhpc1tpXSkgdGhpc1tpXVtuYW1lXSgpO2Vsc2Uge1xuICAgICAgICAgICAgJCh0aGlzW2ldKS50cmlnZ2VyKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vbi5hcHBseSh0aGlzLCBbbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuXG4gIHJldHVybiBldmVudEhhbmRsZXI7XG59XG5cbnZhciBjbGljayA9IHNob3J0Y3V0KCdjbGljaycpO1xudmFyIGJsdXIgPSBzaG9ydGN1dCgnYmx1cicpO1xudmFyIGZvY3VzID0gc2hvcnRjdXQoJ2ZvY3VzJyk7XG52YXIgZm9jdXNpbiA9IHNob3J0Y3V0KCdmb2N1c2luJyk7XG52YXIgZm9jdXNvdXQgPSBzaG9ydGN1dCgnZm9jdXNvdXQnKTtcbnZhciBrZXl1cCA9IHNob3J0Y3V0KCdrZXl1cCcpO1xudmFyIGtleWRvd24gPSBzaG9ydGN1dCgna2V5ZG93bicpO1xudmFyIGtleXByZXNzID0gc2hvcnRjdXQoJ2tleXByZXNzJyk7XG52YXIgc3VibWl0ID0gc2hvcnRjdXQoJ3N1Ym1pdCcpO1xudmFyIGNoYW5nZSA9IHNob3J0Y3V0KCdjaGFuZ2UnKTtcbnZhciBtb3VzZWRvd24gPSBzaG9ydGN1dCgnbW91c2Vkb3duJyk7XG52YXIgbW91c2Vtb3ZlID0gc2hvcnRjdXQoJ21vdXNlbW92ZScpO1xudmFyIG1vdXNldXAgPSBzaG9ydGN1dCgnbW91c2V1cCcpO1xudmFyIG1vdXNlZW50ZXIgPSBzaG9ydGN1dCgnbW91c2VlbnRlcicpO1xudmFyIG1vdXNlbGVhdmUgPSBzaG9ydGN1dCgnbW91c2VsZWF2ZScpO1xudmFyIG1vdXNlb3V0ID0gc2hvcnRjdXQoJ21vdXNlb3V0Jyk7XG52YXIgbW91c2VvdmVyID0gc2hvcnRjdXQoJ21vdXNlb3ZlcicpO1xudmFyIHRvdWNoc3RhcnQgPSBzaG9ydGN1dCgndG91Y2hzdGFydCcpO1xudmFyIHRvdWNoZW5kID0gc2hvcnRjdXQoJ3RvdWNoZW5kJyk7XG52YXIgdG91Y2htb3ZlID0gc2hvcnRjdXQoJ3RvdWNobW92ZScpO1xudmFyIHJlc2l6ZSA9IHNob3J0Y3V0KCdyZXNpemUnKTtcbnZhciBzY3JvbGwgPSBzaG9ydGN1dCgnc2Nyb2xsJyk7XG5cbmV4cG9ydHMuJCA9ICQ7XG5leHBvcnRzLmFkZCA9IGFkZDtcbmV4cG9ydHMuYWRkQ2xhc3MgPSBhZGRDbGFzcztcbmV4cG9ydHMuYW5pbWF0ZSA9IGFuaW1hdGU7XG5leHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZDtcbmV4cG9ydHMuYXBwZW5kID0gYXBwZW5kO1xuZXhwb3J0cy5hcHBlbmRUbyA9IGFwcGVuZFRvO1xuZXhwb3J0cy5hdHRyID0gYXR0cjtcbmV4cG9ydHMuYmx1ciA9IGJsdXI7XG5leHBvcnRzLmNoYW5nZSA9IGNoYW5nZTtcbmV4cG9ydHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbmV4cG9ydHMuY2xpY2sgPSBjbGljaztcbmV4cG9ydHMuY2xvc2VzdCA9IGNsb3Nlc3Q7XG5leHBvcnRzLmNzcyA9IGNzcztcbmV4cG9ydHMuZGF0YSA9IGRhdGE7XG5leHBvcnRzLmRhdGFzZXQgPSBkYXRhc2V0O1xuZXhwb3J0cy5kZWZhdWx0ID0gJDtcbmV4cG9ydHMuZGV0YWNoID0gZGV0YWNoO1xuZXhwb3J0cy5lYWNoID0gZWFjaDtcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMuZXEgPSBlcTtcbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuZXhwb3J0cy5maW5kID0gZmluZDtcbmV4cG9ydHMuZm9jdXMgPSBmb2N1cztcbmV4cG9ydHMuZm9jdXNpbiA9IGZvY3VzaW47XG5leHBvcnRzLmZvY3Vzb3V0ID0gZm9jdXNvdXQ7XG5leHBvcnRzLmhhc0NsYXNzID0gaGFzQ2xhc3M7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMuaGlkZSA9IGhpZGU7XG5leHBvcnRzLmh0bWwgPSBodG1sO1xuZXhwb3J0cy5pbmRleCA9IGluZGV4O1xuZXhwb3J0cy5pbnNlcnRBZnRlciA9IGluc2VydEFmdGVyO1xuZXhwb3J0cy5pbnNlcnRCZWZvcmUgPSBpbnNlcnRCZWZvcmU7XG5leHBvcnRzLmlzID0gaXM7XG5leHBvcnRzLmtleWRvd24gPSBrZXlkb3duO1xuZXhwb3J0cy5rZXlwcmVzcyA9IGtleXByZXNzO1xuZXhwb3J0cy5rZXl1cCA9IGtleXVwO1xuZXhwb3J0cy5tb3VzZWRvd24gPSBtb3VzZWRvd247XG5leHBvcnRzLm1vdXNlZW50ZXIgPSBtb3VzZWVudGVyO1xuZXhwb3J0cy5tb3VzZWxlYXZlID0gbW91c2VsZWF2ZTtcbmV4cG9ydHMubW91c2Vtb3ZlID0gbW91c2Vtb3ZlO1xuZXhwb3J0cy5tb3VzZW91dCA9IG1vdXNlb3V0O1xuZXhwb3J0cy5tb3VzZW92ZXIgPSBtb3VzZW92ZXI7XG5leHBvcnRzLm1vdXNldXAgPSBtb3VzZXVwO1xuZXhwb3J0cy5uZXh0ID0gbmV4dDtcbmV4cG9ydHMubmV4dEFsbCA9IG5leHRBbGw7XG5leHBvcnRzLm9mZiA9IG9mZjtcbmV4cG9ydHMub2Zmc2V0ID0gb2Zmc2V0O1xuZXhwb3J0cy5vbiA9IG9uO1xuZXhwb3J0cy5vbmNlID0gb25jZTtcbmV4cG9ydHMub3V0ZXJIZWlnaHQgPSBvdXRlckhlaWdodDtcbmV4cG9ydHMub3V0ZXJXaWR0aCA9IG91dGVyV2lkdGg7XG5leHBvcnRzLnBhcmVudCA9IHBhcmVudDtcbmV4cG9ydHMucGFyZW50cyA9IHBhcmVudHM7XG5leHBvcnRzLnByZXBlbmQgPSBwcmVwZW5kO1xuZXhwb3J0cy5wcmVwZW5kVG8gPSBwcmVwZW5kVG87XG5leHBvcnRzLnByZXYgPSBwcmV2O1xuZXhwb3J0cy5wcmV2QWxsID0gcHJldkFsbDtcbmV4cG9ydHMucHJvcCA9IHByb3A7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMucmVtb3ZlQXR0ciA9IHJlbW92ZUF0dHI7XG5leHBvcnRzLnJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3M7XG5leHBvcnRzLnJlbW92ZURhdGEgPSByZW1vdmVEYXRhO1xuZXhwb3J0cy5yZXNpemUgPSByZXNpemU7XG5leHBvcnRzLnNjcm9sbCA9IHNjcm9sbDtcbmV4cG9ydHMuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG5leHBvcnRzLnNjcm9sbFRvID0gc2Nyb2xsVG87XG5leHBvcnRzLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbmV4cG9ydHMuc2hvdyA9IHNob3c7XG5leHBvcnRzLnNpYmxpbmdzID0gc2libGluZ3M7XG5leHBvcnRzLnN0b3AgPSBzdG9wO1xuZXhwb3J0cy5zdHlsZXMgPSBzdHlsZXM7XG5leHBvcnRzLnN1Ym1pdCA9IHN1Ym1pdDtcbmV4cG9ydHMudGV4dCA9IHRleHQ7XG5leHBvcnRzLnRvZ2dsZUNsYXNzID0gdG9nZ2xlQ2xhc3M7XG5leHBvcnRzLnRvdWNoZW5kID0gdG91Y2hlbmQ7XG5leHBvcnRzLnRvdWNobW92ZSA9IHRvdWNobW92ZTtcbmV4cG9ydHMudG91Y2hzdGFydCA9IHRvdWNoc3RhcnQ7XG5leHBvcnRzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbmV4cG9ydHMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5leHBvcnRzLnRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kO1xuZXhwb3J0cy50cmlnZ2VyID0gdHJpZ2dlcjtcbmV4cG9ydHMudmFsID0gdmFsO1xuZXhwb3J0cy52YWx1ZSA9IHZhbHVlO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuIiwiLyoqXG4gKiBTU1IgV2luZG93IDMuMC4wXG4gKiBCZXR0ZXIgaGFuZGxpbmcgZm9yIHdpbmRvdyBvYmplY3QgaW4gU1NSIGVudmlyb25tZW50XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbm9saW1pdHM0d2ViL3Nzci13aW5kb3dcbiAqXG4gKiBDb3B5cmlnaHQgMjAyMCwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogTm92ZW1iZXIgOSwgMjAyMFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuc3NyV2luZG93ID0ge30pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgICAgIHJldHVybiAob2JqICE9PSBudWxsICYmXG4gICAgICAgICAgICB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgJ2NvbnN0cnVjdG9yJyBpbiBvYmogJiZcbiAgICAgICAgICAgIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc3JjKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB7fTsgfVxuICAgICAgICBpZiAoc3JjID09PSB2b2lkIDApIHsgc3JjID0ge307IH1cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChzcmNba2V5XSkgJiZcbiAgICAgICAgICAgICAgICBpc09iamVjdCh0YXJnZXRba2V5XSkgJiZcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzcmNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgc3NyRG9jdW1lbnQgPSB7XG4gICAgICAgIGJvZHk6IHt9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgYWN0aXZlRWxlbWVudDoge1xuICAgICAgICAgICAgYmx1cjogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgbm9kZU5hbWU6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBxdWVyeVNlbGVjdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRFbGVtZW50QnlJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUV2ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluaXRFdmVudDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlRWxlbWVudE5TOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGltcG9ydE5vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgaGFzaDogJycsXG4gICAgICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgICAgIGhvc3RuYW1lOiAnJyxcbiAgICAgICAgICAgIGhyZWY6ICcnLFxuICAgICAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnJyxcbiAgICAgICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBmdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgICAgICAgdmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuICAgICAgICBleHRlbmQoZG9jLCBzc3JEb2N1bWVudCk7XG4gICAgICAgIHJldHVybiBkb2M7XG4gICAgfVxuXG4gICAgdmFyIHNzcldpbmRvdyA9IHtcbiAgICAgICAgZG9jdW1lbnQ6IHNzckRvY3VtZW50LFxuICAgICAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgICAgIHVzZXJBZ2VudDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICAgICAgaHJlZjogJycsXG4gICAgICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGlzdG9yeToge1xuICAgICAgICAgICAgcmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgICAgIGdvOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICBiYWNrOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIH0sXG4gICAgICAgIEN1c3RvbUV2ZW50OiBmdW5jdGlvbiBDdXN0b21FdmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgSW1hZ2U6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgRGF0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBzY3JlZW46IHt9LFxuICAgICAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIGNsZWFyVGltZW91dDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBtYXRjaE1lZGlhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3coKSB7XG4gICAgICAgIHZhciB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuICAgICAgICBleHRlbmQod2luLCBzc3JXaW5kb3cpO1xuICAgICAgICByZXR1cm4gd2luO1xuICAgIH1cblxuICAgIGV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuICAgIGV4cG9ydHMuZ2V0RG9jdW1lbnQgPSBnZXREb2N1bWVudDtcbiAgICBleHBvcnRzLmdldFdpbmRvdyA9IGdldFdpbmRvdztcbiAgICBleHBvcnRzLnNzckRvY3VtZW50ID0gc3NyRG9jdW1lbnQ7XG4gICAgZXhwb3J0cy5zc3JXaW5kb3cgPSBzc3JXaW5kb3c7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3NyLXdpbmRvdy51bWQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgQTExeSA9IHtcbiAgZ2V0UmFuZG9tTnVtYmVyOiBmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIoc2l6ZSkge1xuICAgIGlmIChzaXplID09PSB2b2lkIDApIHtcbiAgICAgIHNpemUgPSAxNjtcbiAgICB9XG5cbiAgICB2YXIgcmFuZG9tQ2hhciA9IGZ1bmN0aW9uIHJhbmRvbUNoYXIoKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgxNiAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDE2KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuICd4Jy5yZXBlYXQoc2l6ZSkucmVwbGFjZSgveC9nLCByYW5kb21DaGFyKTtcbiAgfSxcbiAgbWFrZUVsRm9jdXNhYmxlOiBmdW5jdGlvbiBtYWtlRWxGb2N1c2FibGUoJGVsKSB7XG4gICAgJGVsLmF0dHIoJ3RhYkluZGV4JywgJzAnKTtcbiAgICByZXR1cm4gJGVsO1xuICB9LFxuICBtYWtlRWxOb3RGb2N1c2FibGU6IGZ1bmN0aW9uIG1ha2VFbE5vdEZvY3VzYWJsZSgkZWwpIHtcbiAgICAkZWwuYXR0cigndGFiSW5kZXgnLCAnLTEnKTtcbiAgICByZXR1cm4gJGVsO1xuICB9LFxuICBhZGRFbFJvbGU6IGZ1bmN0aW9uIGFkZEVsUm9sZSgkZWwsIHJvbGUpIHtcbiAgICAkZWwuYXR0cigncm9sZScsIHJvbGUpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGFkZEVsUm9sZURlc2NyaXB0aW9uOiBmdW5jdGlvbiBhZGRFbFJvbGVEZXNjcmlwdGlvbigkZWwsIGRlc2NyaXB0aW9uKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGFkZEVsQ29udHJvbHM6IGZ1bmN0aW9uIGFkZEVsQ29udHJvbHMoJGVsLCBjb250cm9scykge1xuICAgICRlbC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgY29udHJvbHMpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGFkZEVsTGFiZWw6IGZ1bmN0aW9uIGFkZEVsTGFiZWwoJGVsLCBsYWJlbCkge1xuICAgICRlbC5hdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGFkZEVsSWQ6IGZ1bmN0aW9uIGFkZEVsSWQoJGVsLCBpZCkge1xuICAgICRlbC5hdHRyKCdpZCcsIGlkKTtcbiAgICByZXR1cm4gJGVsO1xuICB9LFxuICBhZGRFbExpdmU6IGZ1bmN0aW9uIGFkZEVsTGl2ZSgkZWwsIGxpdmUpIHtcbiAgICAkZWwuYXR0cignYXJpYS1saXZlJywgbGl2ZSk7XG4gICAgcmV0dXJuICRlbDtcbiAgfSxcbiAgZGlzYWJsZUVsOiBmdW5jdGlvbiBkaXNhYmxlRWwoJGVsKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcbiAgICByZXR1cm4gJGVsO1xuICB9LFxuICBlbmFibGVFbDogZnVuY3Rpb24gZW5hYmxlRWwoJGVsKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgcmV0dXJuICRlbDtcbiAgfSxcbiAgb25FbnRlck9yU3BhY2VLZXk6IGZ1bmN0aW9uIG9uRW50ZXJPclNwYWNlS2V5KGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlICE9PSAxMyAmJiBlLmtleUNvZGUgIT09IDMyKSByZXR1cm47XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICB2YXIgJHRhcmdldEVsID0gKDAsIF9kb20uZGVmYXVsdCkoZS50YXJnZXQpO1xuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwgJiYgJHRhcmdldEVsLmlzKHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpKSB7XG4gICAgICBpZiAoIShzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm5vdGlmeShwYXJhbXMubGFzdFNsaWRlTWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsICYmICR0YXJnZXRFbC5pcyhzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsKSkge1xuICAgICAgaWYgKCEoc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmxvb3ApKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLmZpcnN0U2xpZGVNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm5vdGlmeShwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmICR0YXJnZXRFbC5pcyhcIi5cIiArIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcy5yZXBsYWNlKC8gL2csICcuJykpKSB7XG4gICAgICAkdGFyZ2V0RWxbMF0uY2xpY2soKTtcbiAgICB9XG4gIH0sXG4gIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgbm90aWZpY2F0aW9uID0gc3dpcGVyLmExMXkubGl2ZVJlZ2lvbjtcbiAgICBpZiAobm90aWZpY2F0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIG5vdGlmaWNhdGlvbi5odG1sKCcnKTtcbiAgICBub3RpZmljYXRpb24uaHRtbChtZXNzYWdlKTtcbiAgfSxcbiAgdXBkYXRlTmF2aWdhdGlvbjogZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbigpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wIHx8ICFzd2lwZXIubmF2aWdhdGlvbikgcmV0dXJuO1xuICAgIHZhciBfc3dpcGVyJG5hdmlnYXRpb24gPSBzd2lwZXIubmF2aWdhdGlvbixcbiAgICAgICAgJG5leHRFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbi4kbmV4dEVsLFxuICAgICAgICAkcHJldkVsID0gX3N3aXBlciRuYXZpZ2F0aW9uLiRwcmV2RWw7XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgc3dpcGVyLmExMXkuZGlzYWJsZUVsKCRwcmV2RWwpO1xuICAgICAgICBzd2lwZXIuYTExeS5tYWtlRWxOb3RGb2N1c2FibGUoJHByZXZFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuYTExeS5lbmFibGVFbCgkcHJldkVsKTtcbiAgICAgICAgc3dpcGVyLmExMXkubWFrZUVsRm9jdXNhYmxlKCRwcmV2RWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgICBzd2lwZXIuYTExeS5kaXNhYmxlRWwoJG5leHRFbCk7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbE5vdEZvY3VzYWJsZSgkbmV4dEVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5hMTF5LmVuYWJsZUVsKCRuZXh0RWwpO1xuICAgICAgICBzd2lwZXIuYTExeS5tYWtlRWxGb2N1c2FibGUoJG5leHRFbCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB1cGRhdGVQYWdpbmF0aW9uOiBmdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG5cbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmVhY2goZnVuY3Rpb24gKGJ1bGxldEVsKSB7XG4gICAgICAgIHZhciAkYnVsbGV0RWwgPSAoMCwgX2RvbS5kZWZhdWx0KShidWxsZXRFbCk7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkYnVsbGV0RWwpO1xuXG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLnJlbmRlckJ1bGxldCkge1xuICAgICAgICAgIHN3aXBlci5hMTF5LmFkZEVsUm9sZSgkYnVsbGV0RWwsICdidXR0b24nKTtcbiAgICAgICAgICBzd2lwZXIuYTExeS5hZGRFbExhYmVsKCRidWxsZXRFbCwgcGFyYW1zLnBhZ2luYXRpb25CdWxsZXRNZXNzYWdlLnJlcGxhY2UoL1xce1xce2luZGV4XFx9XFx9LywgJGJ1bGxldEVsLmluZGV4KCkgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIHN3aXBlci4kZWwuYXBwZW5kKHN3aXBlci5hMTF5LmxpdmVSZWdpb24pOyAvLyBDb250YWluZXJcblxuICAgIHZhciAkY29udGFpbmVyRWwgPSBzd2lwZXIuJGVsO1xuXG4gICAgaWYgKHBhcmFtcy5jb250YWluZXJSb2xlRGVzY3JpcHRpb25NZXNzYWdlKSB7XG4gICAgICBzd2lwZXIuYTExeS5hZGRFbFJvbGVEZXNjcmlwdGlvbigkY29udGFpbmVyRWwsIHBhcmFtcy5jb250YWluZXJSb2xlRGVzY3JpcHRpb25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lck1lc3NhZ2UpIHtcbiAgICAgIHN3aXBlci5hMTF5LmFkZEVsTGFiZWwoJGNvbnRhaW5lckVsLCBwYXJhbXMuY29udGFpbmVyTWVzc2FnZSk7XG4gICAgfSAvLyBXcmFwcGVyXG5cblxuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyIHdyYXBwZXJJZCA9ICR3cmFwcGVyRWwuYXR0cignaWQnKSB8fCBcInN3aXBlci13cmFwcGVyLVwiICsgc3dpcGVyLmExMXkuZ2V0UmFuZG9tTnVtYmVyKDE2KTtcbiAgICB2YXIgbGl2ZTtcbiAgICBzd2lwZXIuYTExeS5hZGRFbElkKCR3cmFwcGVyRWwsIHdyYXBwZXJJZCk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheSAmJiBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmVuYWJsZWQpIHtcbiAgICAgIGxpdmUgPSAnb2ZmJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGl2ZSA9ICdwb2xpdGUnO1xuICAgIH1cblxuICAgIHN3aXBlci5hMTF5LmFkZEVsTGl2ZSgkd3JhcHBlckVsLCBsaXZlKTsgLy8gU2xpZGVcblxuICAgIGlmIChwYXJhbXMuaXRlbVJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHN3aXBlci5hMTF5LmFkZEVsUm9sZURlc2NyaXB0aW9uKCgwLCBfZG9tLmRlZmF1bHQpKHN3aXBlci5zbGlkZXMpLCBwYXJhbXMuaXRlbVJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHN3aXBlci5hMTF5LmFkZEVsUm9sZSgoMCwgX2RvbS5kZWZhdWx0KShzd2lwZXIuc2xpZGVzKSwgJ2dyb3VwJyk7XG4gICAgc3dpcGVyLnNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZUVsKSB7XG4gICAgICB2YXIgJHNsaWRlRWwgPSAoMCwgX2RvbS5kZWZhdWx0KShzbGlkZUVsKTtcbiAgICAgIHZhciBhcmlhTGFiZWxNZXNzYWdlID0gcGFyYW1zLnNsaWRlTGFiZWxNZXNzYWdlLnJlcGxhY2UoL1xce1xce2luZGV4XFx9XFx9LywgJHNsaWRlRWwuaW5kZXgoKSArIDEpLnJlcGxhY2UoL1xce1xce3NsaWRlc0xlbmd0aFxcfVxcfS8sIHN3aXBlci5zbGlkZXMubGVuZ3RoKTtcbiAgICAgIHN3aXBlci5hMTF5LmFkZEVsTGFiZWwoJHNsaWRlRWwsIGFyaWFMYWJlbE1lc3NhZ2UpO1xuICAgIH0pOyAvLyBOYXZpZ2F0aW9uXG5cbiAgICB2YXIgJG5leHRFbDtcbiAgICB2YXIgJHByZXZFbDtcblxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsKSB7XG4gICAgICAkbmV4dEVsID0gc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbDtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCkge1xuICAgICAgJHByZXZFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWw7XG4gICAgfVxuXG4gICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGgpIHtcbiAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkbmV4dEVsKTtcblxuICAgICAgaWYgKCRuZXh0RWxbMF0udGFnTmFtZSAhPT0gJ0JVVFRPTicpIHtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlKCRuZXh0RWwsICdidXR0b24nKTtcbiAgICAgICAgJG5leHRFbC5vbigna2V5ZG93bicsIHN3aXBlci5hMTF5Lm9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLmExMXkuYWRkRWxMYWJlbCgkbmV4dEVsLCBwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICBzd2lwZXIuYTExeS5hZGRFbENvbnRyb2xzKCRuZXh0RWwsIHdyYXBwZXJJZCk7XG4gICAgfVxuXG4gICAgaWYgKCRwcmV2RWwgJiYgJHByZXZFbC5sZW5ndGgpIHtcbiAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkcHJldkVsKTtcblxuICAgICAgaWYgKCRwcmV2RWxbMF0udGFnTmFtZSAhPT0gJ0JVVFRPTicpIHtcbiAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlKCRwcmV2RWwsICdidXR0b24nKTtcbiAgICAgICAgJHByZXZFbC5vbigna2V5ZG93bicsIHN3aXBlci5hMTF5Lm9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLmExMXkuYWRkRWxMYWJlbCgkcHJldkVsLCBwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICBzd2lwZXIuYTExeS5hZGRFbENvbnRyb2xzKCRwcmV2RWwsIHdyYXBwZXJJZCk7XG4gICAgfSAvLyBQYWdpbmF0aW9uXG5cblxuICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGgpIHtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLiRlbC5vbigna2V5ZG93bicsIFwiLlwiICsgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzLnJlcGxhY2UoLyAvZywgJy4nKSwgc3dpcGVyLmExMXkub25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmExMXkubGl2ZVJlZ2lvbiAmJiBzd2lwZXIuYTExeS5saXZlUmVnaW9uLmxlbmd0aCA+IDApIHN3aXBlci5hMTF5LmxpdmVSZWdpb24ucmVtb3ZlKCk7XG4gICAgdmFyICRuZXh0RWw7XG4gICAgdmFyICRwcmV2RWw7XG5cbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbCkge1xuICAgICAgJG5leHRFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWw7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwpIHtcbiAgICAgICRwcmV2RWwgPSBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsO1xuICAgIH1cblxuICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAkbmV4dEVsLm9mZigna2V5ZG93bicsIHN3aXBlci5hMTF5Lm9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICB9XG5cbiAgICBpZiAoJHByZXZFbCkge1xuICAgICAgJHByZXZFbC5vZmYoJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyT3JTcGFjZUtleSk7XG4gICAgfSAvLyBQYWdpbmF0aW9uXG5cblxuICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGgpIHtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLiRlbC5vZmYoJ2tleWRvd24nLCBcIi5cIiArIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcy5yZXBsYWNlKC8gL2csICcuJyksIHN3aXBlci5hMTF5Lm9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdhMTF5JyxcbiAgcGFyYW1zOiB7XG4gICAgYTExeToge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIG5vdGlmaWNhdGlvbkNsYXNzOiAnc3dpcGVyLW5vdGlmaWNhdGlvbicsXG4gICAgICBwcmV2U2xpZGVNZXNzYWdlOiAnUHJldmlvdXMgc2xpZGUnLFxuICAgICAgbmV4dFNsaWRlTWVzc2FnZTogJ05leHQgc2xpZGUnLFxuICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZScsXG4gICAgICBsYXN0U2xpZGVNZXNzYWdlOiAnVGhpcyBpcyB0aGUgbGFzdCBzbGlkZScsXG4gICAgICBwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZTogJ0dvIHRvIHNsaWRlIHt7aW5kZXh9fScsXG4gICAgICBzbGlkZUxhYmVsTWVzc2FnZTogJ3t7aW5kZXh9fSAvIHt7c2xpZGVzTGVuZ3RofX0nLFxuICAgICAgY29udGFpbmVyTWVzc2FnZTogbnVsbCxcbiAgICAgIGNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2U6IG51bGwsXG4gICAgICBpdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZTogbnVsbFxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBhMTF5OiBfZXh0ZW5kcyh7fSwgQTExeSwge1xuICAgICAgICBsaXZlUmVnaW9uOiAoMCwgX2RvbS5kZWZhdWx0KShcIjxzcGFuIGNsYXNzPVxcXCJcIiArIHN3aXBlci5wYXJhbXMuYTExeS5ub3RpZmljYXRpb25DbGFzcyArIFwiXFxcIiBhcmlhLWxpdmU9XFxcImFzc2VydGl2ZVxcXCIgYXJpYS1hdG9taWM9XFxcInRydWVcXFwiPjwvc3Bhbj5cIilcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYWZ0ZXJJbml0OiBmdW5jdGlvbiBhZnRlckluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuYTExeS5pbml0KCk7XG4gICAgICBzd2lwZXIuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCk7XG4gICAgfSxcbiAgICB0b0VkZ2U6IGZ1bmN0aW9uIHRvRWRnZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgICB9LFxuICAgIGZyb21FZGdlOiBmdW5jdGlvbiBmcm9tRWRnZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgICB9LFxuICAgIHBhZ2luYXRpb25VcGRhdGU6IGZ1bmN0aW9uIHBhZ2luYXRpb25VcGRhdGUoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuYTExeS51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLmExMXkuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgQXV0b3BsYXkgPSB7XG4gIHJ1bjogZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciAkYWN0aXZlU2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICB2YXIgZGVsYXkgPSBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuXG4gICAgaWYgKCRhY3RpdmVTbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykpIHtcbiAgICAgIGRlbGF5ID0gJGFjdGl2ZVNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItYXV0b3BsYXknKSB8fCBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChzd2lwZXIuYXV0b3BsYXkudGltZW91dCk7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQgPSAoMCwgX3V0aWxzLm5leHRUaWNrKShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYXV0b3BsYXlSZXN1bHQ7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnJldmVyc2VEaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVQcmV2KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZVByZXYoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlKSB7XG4gICAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlTmV4dChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICB9IGVsc2UgaWYgKCFzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVOZXh0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlKSB7XG4gICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlVG8oMCwgc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSAmJiBzd2lwZXIuYXV0b3BsYXkucnVubmluZykgc3dpcGVyLmF1dG9wbGF5LnJ1bigpO2Vsc2UgaWYgKGF1dG9wbGF5UmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICB9XG4gICAgfSwgZGVsYXkpO1xuICB9LFxuICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIuYXV0b3BsYXkudGltZW91dCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IHRydWU7XG4gICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5U3RhcnQnKTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChzd2lwZXIuYXV0b3BsYXkudGltZW91dCk7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IGZhbHNlO1xuICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheVN0b3AnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKHNwZWVkKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS50aW1lb3V0KSBjbGVhclRpbWVvdXQoc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQpO1xuICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSB0cnVlO1xuXG4gICAgaWYgKHNwZWVkID09PSAwIHx8ICFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LndhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gIH0sXG4gIG9uVmlzaWJpbGl0eUNoYW5nZTogZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZSgpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJyAmJiBzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9LFxuICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLiR3cmFwcGVyRWwpIHJldHVybjtcbiAgICBpZiAoZS50YXJnZXQgIT09IHN3aXBlci4kd3JhcHBlckVsWzBdKSByZXR1cm47XG4gICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG5cbiAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnYXV0b3BsYXknLFxuICBwYXJhbXM6IHtcbiAgICBhdXRvcGxheToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBkZWxheTogMzAwMCxcbiAgICAgIHdhaXRGb3JUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgICBzdG9wT25MYXN0U2xpZGU6IGZhbHNlLFxuICAgICAgcmV2ZXJzZURpcmVjdGlvbjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgYXV0b3BsYXk6IF9leHRlbmRzKHt9LCBBdXRvcGxheSwge1xuICAgICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgICAgcGF1c2VkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RhcnQoKTtcbiAgICAgICAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBzd2lwZXIuYXV0b3BsYXkub25WaXNpYmlsaXR5Q2hhbmdlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJlZm9yZVRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24gYmVmb3JlVHJhbnNpdGlvblN0YXJ0KHN3aXBlciwgc3BlZWQsIGludGVybmFsKSB7XG4gICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgICAgaWYgKGludGVybmFsIHx8ICFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlKHNwZWVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzbGlkZXJGaXJzdE1vdmU6IGZ1bmN0aW9uIHNsaWRlckZpcnN0TW92ZShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRvdWNoRW5kOiBmdW5jdGlvbiB0b3VjaEVuZChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCAmJiAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIHN3aXBlci5hdXRvcGxheS5vblZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgQ29udHJvbGxlciA9IHtcbiAgTGluZWFyU3BsaW5lOiBmdW5jdGlvbiBMaW5lYXJTcGxpbmUoeCwgeSkge1xuICAgIHZhciBiaW5hcnlTZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgICB2YXIgbWF4SW5kZXg7XG4gICAgICB2YXIgbWluSW5kZXg7XG4gICAgICB2YXIgZ3Vlc3M7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFycmF5LCB2YWwpIHtcbiAgICAgICAgbWluSW5kZXggPSAtMTtcbiAgICAgICAgbWF4SW5kZXggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKG1heEluZGV4IC0gbWluSW5kZXggPiAxKSB7XG4gICAgICAgICAgZ3Vlc3MgPSBtYXhJbmRleCArIG1pbkluZGV4ID4+IDE7XG5cbiAgICAgICAgICBpZiAoYXJyYXlbZ3Vlc3NdIDw9IHZhbCkge1xuICAgICAgICAgICAgbWluSW5kZXggPSBndWVzcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF4SW5kZXggPSBndWVzcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF4SW5kZXg7XG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmxhc3RJbmRleCA9IHgubGVuZ3RoIC0gMTsgLy8gR2l2ZW4gYW4geCB2YWx1ZSAoeDIpLCByZXR1cm4gdGhlIGV4cGVjdGVkIHkyIHZhbHVlOlxuICAgIC8vICh4MSx5MSkgaXMgdGhlIGtub3duIHBvaW50IGJlZm9yZSBnaXZlbiB2YWx1ZSxcbiAgICAvLyAoeDMseTMpIGlzIHRoZSBrbm93biBwb2ludCBhZnRlciBnaXZlbiB2YWx1ZS5cblxuICAgIHZhciBpMTtcbiAgICB2YXIgaTM7XG5cbiAgICB0aGlzLmludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoeDIpIHtcbiAgICAgIGlmICgheDIpIHJldHVybiAwOyAvLyBHZXQgdGhlIGluZGV4ZXMgb2YgeDEgYW5kIHgzICh0aGUgYXJyYXkgaW5kZXhlcyBiZWZvcmUgYW5kIGFmdGVyIGdpdmVuIHgyKTpcblxuICAgICAgaTMgPSBiaW5hcnlTZWFyY2godGhpcy54LCB4Mik7XG4gICAgICBpMSA9IGkzIC0gMTsgLy8gV2UgaGF2ZSBvdXIgaW5kZXhlcyBpMSAmIGkzLCBzbyB3ZSBjYW4gY2FsY3VsYXRlIGFscmVhZHk6XG4gICAgICAvLyB5MiA6PSAoKHgy4oiSeDEpIMOXICh5M+KIknkxKSkgw7cgKHgz4oiSeDEpICsgeTFcblxuICAgICAgcmV0dXJuICh4MiAtIHRoaXMueFtpMV0pICogKHRoaXMueVtpM10gLSB0aGlzLnlbaTFdKSAvICh0aGlzLnhbaTNdIC0gdGhpcy54W2kxXSkgKyB0aGlzLnlbaTFdO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8geHh4OiBmb3Igbm93IGkgd2lsbCBqdXN0IHNhdmUgb25lIHNwbGluZSBmdW5jdGlvbiB0byB0b1xuICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBuZXcgQ29udHJvbGxlci5MaW5lYXJTcGxpbmUoc3dpcGVyLnNsaWRlc0dyaWQsIGMuc2xpZGVzR3JpZCkgOiBuZXcgQ29udHJvbGxlci5MaW5lYXJTcGxpbmUoc3dpcGVyLnNuYXBHcmlkLCBjLnNuYXBHcmlkKTtcbiAgICB9XG4gIH0sXG4gIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKF9zZXRUcmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBjb250cm9sbGVkID0gc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbDtcbiAgICB2YXIgbXVsdGlwbGllcjtcbiAgICB2YXIgY29udHJvbGxlZFRyYW5zbGF0ZTtcbiAgICB2YXIgU3dpcGVyID0gc3dpcGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjKSB7XG4gICAgICAvLyB0aGlzIHdpbGwgY3JlYXRlIGFuIEludGVycG9sYXRlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBzbmFwR3JpZHNcbiAgICAgIC8vIHggaXMgdGhlIEdyaWQgb2YgdGhlIHNjcm9sbGVkIHNjcm9sbGVyIGFuZCB5IHdpbGwgYmUgdGhlIGNvbnRyb2xsZWQgc2Nyb2xsZXJcbiAgICAgIC8vIGl0IG1ha2VzIHNlbnNlIHRvIGNyZWF0ZSB0aGlzIG9ubHkgb25jZSBhbmQgcmVjYWxsIGl0IGZvciB0aGUgaW50ZXJwb2xhdGlvblxuICAgICAgLy8gdGhlIGZ1bmN0aW9uIGRvZXMgYSBsb3Qgb2YgdmFsdWUgY2FjaGluZyBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIHZhciB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmJ5ID09PSAnc2xpZGUnKSB7XG4gICAgICAgIHN3aXBlci5jb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24oYyk7IC8vIGkgYW0gbm90IHN1cmUgd2h5IHRoZSB2YWx1ZXMgaGF2ZSB0byBiZSBtdWx0aXBsaWNhdGVkIHRoaXMgd2F5LCB0cmllZCB0byBpbnZlcnQgdGhlIHNuYXBHcmlkXG4gICAgICAgIC8vIGJ1dCBpdCBkaWQgbm90IHdvcmsgb3V0XG5cbiAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9IC1zd2lwZXIuY29udHJvbGxlci5zcGxpbmUuaW50ZXJwb2xhdGUoLXRyYW5zbGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghY29udHJvbGxlZFRyYW5zbGF0ZSB8fCBzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuYnkgPT09ICdjb250YWluZXInKSB7XG4gICAgICAgIG11bHRpcGxpZXIgPSAoYy5tYXhUcmFuc2xhdGUoKSAtIGMubWluVHJhbnNsYXRlKCkpIC8gKHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAqIG11bHRpcGxpZXIgKyBjLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmludmVyc2UpIHtcbiAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9IGMubWF4VHJhbnNsYXRlKCkgLSBjb250cm9sbGVkVHJhbnNsYXRlO1xuICAgICAgfVxuXG4gICAgICBjLnVwZGF0ZVByb2dyZXNzKGNvbnRyb2xsZWRUcmFuc2xhdGUpO1xuICAgICAgYy5zZXRUcmFuc2xhdGUoY29udHJvbGxlZFRyYW5zbGF0ZSwgc3dpcGVyKTtcbiAgICAgIGMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIGMudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRyb2xsZWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZWRbaV0gIT09IGJ5Q29udHJvbGxlciAmJiBjb250cm9sbGVkW2ldIGluc3RhbmNlb2YgU3dpcGVyKSB7XG4gICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcbiAgICAgIHNldENvbnRyb2xsZWRUcmFuc2xhdGUoY29udHJvbGxlZCk7XG4gICAgfVxuICB9LFxuICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgU3dpcGVyID0gc3dpcGVyLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb250cm9sbGVkID0gc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbDtcbiAgICB2YXIgaTtcblxuICAgIGZ1bmN0aW9uIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGMpIHtcbiAgICAgIGMuc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgc3dpcGVyKTtcblxuICAgICAgaWYgKGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgIGMudHJhbnNpdGlvblN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAoMCwgX3V0aWxzLm5leHRUaWNrKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMuJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWNvbnRyb2xsZWQpIHJldHVybjtcblxuICAgICAgICAgIGlmIChjLnBhcmFtcy5sb29wICYmIHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgYy5sb29wRml4KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYy50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcbiAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjb250cm9sbGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcbiAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWQpO1xuICAgIH1cbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ2NvbnRyb2xsZXInLFxuICBwYXJhbXM6IHtcbiAgICBjb250cm9sbGVyOiB7XG4gICAgICBjb250cm9sOiB1bmRlZmluZWQsXG4gICAgICBpbnZlcnNlOiBmYWxzZSxcbiAgICAgIGJ5OiAnc2xpZGUnIC8vIG9yICdjb250YWluZXInXG5cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgY29udHJvbGxlcjogX2V4dGVuZHMoe1xuICAgICAgICBjb250cm9sOiBzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuY29udHJvbFxuICAgICAgfSwgQ29udHJvbGxlcilcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkgcmV0dXJuO1xuXG4gICAgICBpZiAoc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgIHN3aXBlci5jb250cm9sbGVyLnNwbGluZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgZGVsZXRlIHN3aXBlci5jb250cm9sbGVyLnNwbGluZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSByZXR1cm47XG5cbiAgICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xuICAgICAgICBkZWxldGUgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lO1xuICAgICAgfVxuICAgIH0sXG4gICAgb2JzZXJ2ZXJVcGRhdGU6IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSByZXR1cm47XG5cbiAgICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xuICAgICAgICBkZWxldGUgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc3dpcGVyLCB0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSByZXR1cm47XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihzd2lwZXIsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldEJyZWFrcG9pbnQ7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbmZ1bmN0aW9uIGdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIGJhc2UsIGNvbnRhaW5lckVsKSB7XG4gIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICBiYXNlID0gJ3dpbmRvdyc7XG4gIH1cblxuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJhc2UgPT09ICdjb250YWluZXInICYmICFjb250YWluZXJFbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgdmFyIGN1cnJlbnRXaWR0aCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVyV2lkdGggOiBjb250YWluZXJFbC5jbGllbnRXaWR0aDtcbiAgdmFyIGN1cnJlbnRIZWlnaHQgPSBiYXNlID09PSAnd2luZG93JyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGNvbnRhaW5lckVsLmNsaWVudEhlaWdodDtcbiAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gJ3N0cmluZycgJiYgcG9pbnQuaW5kZXhPZignQCcpID09PSAwKSB7XG4gICAgICB2YXIgbWluUmF0aW8gPSBwYXJzZUZsb2F0KHBvaW50LnN1YnN0cigxKSk7XG4gICAgICB2YXIgdmFsdWUgPSBjdXJyZW50SGVpZ2h0ICogbWluUmF0aW87XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHBvaW50OiBwb2ludFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBvaW50LFxuICAgICAgcG9pbnQ6IHBvaW50XG4gICAgfTtcbiAgfSk7XG4gIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGEudmFsdWUsIDEwKSAtIHBhcnNlSW50KGIudmFsdWUsIDEwKTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgX3BvaW50cyRpID0gcG9pbnRzW2ldLFxuICAgICAgICBwb2ludCA9IF9wb2ludHMkaS5wb2ludCxcbiAgICAgICAgdmFsdWUgPSBfcG9pbnRzJGkudmFsdWU7XG5cbiAgICBpZiAodmFsdWUgPD0gY3VycmVudFdpZHRoKSB7XG4gICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJyZWFrcG9pbnQgfHwgJ21heCc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc2V0QnJlYWtwb2ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2V0QnJlYWtwb2ludFwiKSk7XG5cbnZhciBfZ2V0QnJlYWtwb2ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0QnJlYWtwb2ludFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgc2V0QnJlYWtwb2ludDogX3NldEJyZWFrcG9pbnQuZGVmYXVsdCxcbiAgZ2V0QnJlYWtwb2ludDogX2dldEJyZWFrcG9pbnQuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2V0QnJlYWtwb2ludDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gc2V0QnJlYWtwb2ludCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIGluaXRpYWxpemVkID0gc3dpcGVyLmluaXRpYWxpemVkLFxuICAgICAgX3N3aXBlciRsb29wZWRTbGlkZXMgPSBzd2lwZXIubG9vcGVkU2xpZGVzLFxuICAgICAgbG9vcGVkU2xpZGVzID0gX3N3aXBlciRsb29wZWRTbGlkZXMgPT09IHZvaWQgMCA/IDAgOiBfc3dpcGVyJGxvb3BlZFNsaWRlcyxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkZWwgPSBzd2lwZXIuJGVsO1xuICB2YXIgYnJlYWtwb2ludHMgPSBwYXJhbXMuYnJlYWtwb2ludHM7XG4gIGlmICghYnJlYWtwb2ludHMgfHwgYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyBHZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoIGFuZCB1cGRhdGUgcGFyYW1ldGVyc1xuXG4gIHZhciBicmVha3BvaW50ID0gc3dpcGVyLmdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHNCYXNlLCBzd2lwZXIuZWwpO1xuXG4gIGlmIChicmVha3BvaW50ICYmIHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCAhPT0gYnJlYWtwb2ludCkge1xuICAgIHZhciBicmVha3BvaW50T25seVBhcmFtcyA9IGJyZWFrcG9pbnQgaW4gYnJlYWtwb2ludHMgPyBicmVha3BvaW50c1ticmVha3BvaW50XSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChicmVha3BvaW50T25seVBhcmFtcykge1xuICAgICAgWydzbGlkZXNQZXJWaWV3JywgJ3NwYWNlQmV0d2VlbicsICdzbGlkZXNQZXJHcm91cCcsICdzbGlkZXNQZXJHcm91cFNraXAnLCAnc2xpZGVzUGVyQ29sdW1uJ10uZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgdmFyIHBhcmFtVmFsdWUgPSBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV07XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICBpZiAocGFyYW0gPT09ICdzbGlkZXNQZXJWaWV3JyAmJiAocGFyYW1WYWx1ZSA9PT0gJ0FVVE8nIHx8IHBhcmFtVmFsdWUgPT09ICdhdXRvJykpIHtcbiAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSAnYXV0byc7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW0gPT09ICdzbGlkZXNQZXJWaWV3Jykge1xuICAgICAgICAgIGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXSA9IHBhcnNlRmxvYXQocGFyYW1WYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dID0gcGFyc2VJbnQocGFyYW1WYWx1ZSwgMTApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgYnJlYWtwb2ludFBhcmFtcyA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zIHx8IHN3aXBlci5vcmlnaW5hbFBhcmFtcztcbiAgICB2YXIgd2FzTXVsdGlSb3cgPSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMTtcbiAgICB2YXIgaXNNdWx0aVJvdyA9IGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMTtcblxuICAgIGlmICh3YXNNdWx0aVJvdyAmJiAhaXNNdWx0aVJvdykge1xuICAgICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJtdWx0aXJvdyBcIiArIHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJtdWx0aXJvdy1jb2x1bW5cIik7XG4gICAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgICB9IGVsc2UgaWYgKCF3YXNNdWx0aVJvdyAmJiBpc011bHRpUm93KSB7XG4gICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93XCIpO1xuXG4gICAgICBpZiAoYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJykge1xuICAgICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93LWNvbHVtblwiKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gICAgfVxuXG4gICAgdmFyIGRpcmVjdGlvbkNoYW5nZWQgPSBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAmJiBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAhPT0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgICB2YXIgbmVlZHNSZUxvb3AgPSBwYXJhbXMubG9vcCAmJiAoYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSBwYXJhbXMuc2xpZGVzUGVyVmlldyB8fCBkaXJlY3Rpb25DaGFuZ2VkKTtcblxuICAgIGlmIChkaXJlY3Rpb25DaGFuZ2VkICYmIGluaXRpYWxpemVkKSB7XG4gICAgICBzd2lwZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci5wYXJhbXMsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIsIHtcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldlxuICAgIH0pO1xuICAgIHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gICAgc3dpcGVyLmVtaXQoJ19iZWZvcmVCcmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG5cbiAgICBpZiAobmVlZHNSZUxvb3AgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZUluZGV4IC0gbG9vcGVkU2xpZGVzICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdicmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgd2FzTG9ja2VkID0gc3dpcGVyLmlzTG9ja2VkO1xuICB2YXIgbGFzdFNsaWRlUG9zaXRpb24gPSBzd2lwZXIuc2xpZGVzLmxlbmd0aCA+IDAgJiYgcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKSArIHN3aXBlci5zbGlkZXNbMF0ub2Zmc2V0V2lkdGggKiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcblxuICBpZiAocGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSAmJiBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIgJiYgbGFzdFNsaWRlUG9zaXRpb24pIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBsYXN0U2xpZGVQb3NpdGlvbiA8PSBzd2lwZXIuc2l6ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDsgLy8gZXZlbnRzXG5cbiAgaWYgKHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7XG5cbiAgaWYgKHdhc0xvY2tlZCAmJiB3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbikgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gIH1cbn1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRDbGFzc2VzO1xuXG5mdW5jdGlvbiBwcmVwYXJlQ2xhc3NlcyhlbnRyaWVzLCBwcmVmaXgpIHtcbiAgdmFyIHJlc3VsdENsYXNzZXMgPSBbXTtcbiAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lcykge1xuICAgICAgICBpZiAoaXRlbVtjbGFzc05hbWVzXSkge1xuICAgICAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBjbGFzc05hbWVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0Q2xhc3Nlcztcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBjbGFzc05hbWVzID0gc3dpcGVyLmNsYXNzTmFtZXMsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bCxcbiAgICAgICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlLFxuICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0OyAvLyBwcmV0dGllci1pZ25vcmVcblxuICB2YXIgc3VmZml4ZXMgPSBwcmVwYXJlQ2xhc3NlcyhbJ2luaXRpYWxpemVkJywgcGFyYW1zLmRpcmVjdGlvbiwge1xuICAgICdwb2ludGVyLWV2ZW50cyc6IHN1cHBvcnQucG9pbnRlckV2ZW50cyAmJiAhc3VwcG9ydC50b3VjaFxuICB9LCB7XG4gICAgJ2ZyZWUtbW9kZSc6IHBhcmFtcy5mcmVlTW9kZVxuICB9LCB7XG4gICAgJ2F1dG9oZWlnaHQnOiBwYXJhbXMuYXV0b0hlaWdodFxuICB9LCB7XG4gICAgJ3J0bCc6IHJ0bFxuICB9LCB7XG4gICAgJ211bHRpcm93JzogcGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDFcbiAgfSwge1xuICAgICdtdWx0aXJvdy1jb2x1bW4nOiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSAmJiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbidcbiAgfSwge1xuICAgICdhbmRyb2lkJzogZGV2aWNlLmFuZHJvaWRcbiAgfSwge1xuICAgICdpb3MnOiBkZXZpY2UuaW9zXG4gIH0sIHtcbiAgICAnY3NzLW1vZGUnOiBwYXJhbXMuY3NzTW9kZVxuICB9XSwgcGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpO1xuICBjbGFzc05hbWVzLnB1c2guYXBwbHkoY2xhc3NOYW1lcywgc3VmZml4ZXMpO1xuICAkZWwuYWRkQ2xhc3MoW10uY29uY2F0KGNsYXNzTmFtZXMpLmpvaW4oJyAnKSk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2FkZENsYXNzZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FkZENsYXNzZXNcIikpO1xuXG52YXIgX3JlbW92ZUNsYXNzZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlbW92ZUNsYXNzZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGFkZENsYXNzZXM6IF9hZGRDbGFzc2VzLmRlZmF1bHQsXG4gIHJlbW92ZUNsYXNzZXM6IF9yZW1vdmVDbGFzc2VzLmRlZmF1bHRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlbW92ZUNsYXNzZXM7XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcztcbiAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxudmFyIF9nZXRTdXBwb3J0ID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL2dldC1zdXBwb3J0XCIpO1xuXG52YXIgX2dldERldmljZSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9nZXQtZGV2aWNlXCIpO1xuXG52YXIgX2dldEJyb3dzZXIgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvZ2V0LWJyb3dzZXJcIik7XG5cbnZhciBfcmVzaXplID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vbW9kdWxlcy9yZXNpemUvcmVzaXplXCIpKTtcblxudmFyIF9vYnNlcnZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL21vZHVsZXMvb2JzZXJ2ZXIvb2JzZXJ2ZXJcIikpO1xuXG52YXIgX21vZHVsYXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21vZHVsYXJcIikpO1xuXG52YXIgX2V2ZW50c0VtaXR0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50cy1lbWl0dGVyXCIpKTtcblxudmFyIF9pbmRleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXBkYXRlL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RyYW5zbGF0ZS9pbmRleFwiKSk7XG5cbnZhciBfaW5kZXgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi90cmFuc2l0aW9uL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NsaWRlL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvb3AvaW5kZXhcIikpO1xuXG52YXIgX2luZGV4NiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ3JhYi1jdXJzb3IvaW5kZXhcIikpO1xuXG52YXIgX2luZGV4NyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWFuaXB1bGF0aW9uL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50cy9pbmRleFwiKSk7XG5cbnZhciBfaW5kZXg5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9icmVha3BvaW50cy9pbmRleFwiKSk7XG5cbnZhciBfaW5kZXgxMCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY2xhc3Nlcy9pbmRleFwiKSk7XG5cbnZhciBfaW5kZXgxMSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaW1hZ2VzL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jaGVjay1vdmVyZmxvdy9pbmRleFwiKSk7XG5cbnZhciBfZGVmYXVsdHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZmF1bHRzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgcHJvdG90eXBlcyA9IHtcbiAgbW9kdWxhcjogX21vZHVsYXIuZGVmYXVsdCxcbiAgZXZlbnRzRW1pdHRlcjogX2V2ZW50c0VtaXR0ZXIuZGVmYXVsdCxcbiAgdXBkYXRlOiBfaW5kZXguZGVmYXVsdCxcbiAgdHJhbnNsYXRlOiBfaW5kZXgyLmRlZmF1bHQsXG4gIHRyYW5zaXRpb246IF9pbmRleDMuZGVmYXVsdCxcbiAgc2xpZGU6IF9pbmRleDQuZGVmYXVsdCxcbiAgbG9vcDogX2luZGV4NS5kZWZhdWx0LFxuICBncmFiQ3Vyc29yOiBfaW5kZXg2LmRlZmF1bHQsXG4gIG1hbmlwdWxhdGlvbjogX2luZGV4Ny5kZWZhdWx0LFxuICBldmVudHM6IF9pbmRleDguZGVmYXVsdCxcbiAgYnJlYWtwb2ludHM6IF9pbmRleDkuZGVmYXVsdCxcbiAgY2hlY2tPdmVyZmxvdzogX2luZGV4MTIuZGVmYXVsdCxcbiAgY2xhc3NlczogX2luZGV4MTAuZGVmYXVsdCxcbiAgaW1hZ2VzOiBfaW5kZXgxMS5kZWZhdWx0XG59O1xudmFyIGV4dGVuZGVkRGVmYXVsdHMgPSB7fTtcblxudmFyIFN3aXBlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN3aXBlcigpIHtcbiAgICB2YXIgZWw7XG4gICAgdmFyIHBhcmFtcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnc1swXSkuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jykge1xuICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwgPSBhcmdzWzBdO1xuICAgICAgcGFyYW1zID0gYXJnc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG4gICAgcGFyYW1zID0gKDAsIF91dGlscy5leHRlbmQpKHt9LCBwYXJhbXMpO1xuICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSBwYXJhbXMuZWwgPSBlbDtcblxuICAgIGlmIChwYXJhbXMuZWwgJiYgKDAsIF9kb20uZGVmYXVsdCkocGFyYW1zLmVsKS5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgc3dpcGVycyA9IFtdO1xuICAgICAgKDAsIF9kb20uZGVmYXVsdCkocGFyYW1zLmVsKS5lYWNoKGZ1bmN0aW9uIChjb250YWluZXJFbCkge1xuICAgICAgICB2YXIgbmV3UGFyYW1zID0gKDAsIF91dGlscy5leHRlbmQpKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBlbDogY29udGFpbmVyRWxcbiAgICAgICAgfSk7XG4gICAgICAgIHN3aXBlcnMucHVzaChuZXcgU3dpcGVyKG5ld1BhcmFtcykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3dpcGVycztcbiAgICB9IC8vIFN3aXBlciBJbnN0YW5jZVxuXG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIuX19zd2lwZXJfXyA9IHRydWU7XG4gICAgc3dpcGVyLnN1cHBvcnQgPSAoMCwgX2dldFN1cHBvcnQuZ2V0U3VwcG9ydCkoKTtcbiAgICBzd2lwZXIuZGV2aWNlID0gKDAsIF9nZXREZXZpY2UuZ2V0RGV2aWNlKSh7XG4gICAgICB1c2VyQWdlbnQ6IHBhcmFtcy51c2VyQWdlbnRcbiAgICB9KTtcbiAgICBzd2lwZXIuYnJvd3NlciA9ICgwLCBfZ2V0QnJvd3Nlci5nZXRCcm93c2VyKSgpO1xuICAgIHN3aXBlci5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcbiAgICBzd2lwZXIuZXZlbnRzQW55TGlzdGVuZXJzID0gW107XG5cbiAgICBpZiAodHlwZW9mIHN3aXBlci5tb2R1bGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgc3dpcGVyLm1vZHVsZXMgPSB7fTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzd2lwZXIubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IHN3aXBlci5tb2R1bGVzW21vZHVsZU5hbWVdO1xuXG4gICAgICBpZiAobW9kdWxlLnBhcmFtcykge1xuICAgICAgICB2YXIgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMobW9kdWxlLnBhcmFtcylbMF07XG4gICAgICAgIHZhciBtb2R1bGVQYXJhbXMgPSBtb2R1bGUucGFyYW1zW21vZHVsZVBhcmFtTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlUGFyYW1zICE9PSAnb2JqZWN0JyB8fCBtb2R1bGVQYXJhbXMgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKCEobW9kdWxlUGFyYW1OYW1lIGluIHBhcmFtcyAmJiAnZW5hYmxlZCcgaW4gbW9kdWxlUGFyYW1zKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSAnb2JqZWN0JyAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkpIHtcbiAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7IC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIG1vZHVsZXMgcGFyYW1zXG5cbiAgICB2YXIgc3dpcGVyUGFyYW1zID0gKDAsIF91dGlscy5leHRlbmQpKHt9LCBfZGVmYXVsdHMuZGVmYXVsdCk7XG4gICAgc3dpcGVyLnVzZVBhcmFtcyhzd2lwZXJQYXJhbXMpOyAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBwYXNzZWQgcGFyYW1zXG5cbiAgICBzd2lwZXIucGFyYW1zID0gKDAsIF91dGlscy5leHRlbmQpKHt9LCBzd2lwZXJQYXJhbXMsIGV4dGVuZGVkRGVmYXVsdHMsIHBhcmFtcyk7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gKDAsIF91dGlscy5leHRlbmQpKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICBzd2lwZXIucGFzc2VkUGFyYW1zID0gKDAsIF91dGlscy5leHRlbmQpKHt9LCBwYXJhbXMpOyAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uKSB7XG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIucGFyYW1zLm9uKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgc3dpcGVyLm9uKGV2ZW50TmFtZSwgc3dpcGVyLnBhcmFtcy5vbltldmVudE5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub25BbnkpIHtcbiAgICAgIHN3aXBlci5vbkFueShzd2lwZXIucGFyYW1zLm9uQW55KTtcbiAgICB9IC8vIFNhdmUgRG9tIGxpYlxuXG5cbiAgICBzd2lwZXIuJCA9IF9kb20uZGVmYXVsdDsgLy8gRXh0ZW5kIFN3aXBlclxuXG4gICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlciwge1xuICAgICAgZWw6IGVsLFxuICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgY2xhc3NOYW1lczogW10sXG4gICAgICAvLyBTbGlkZXNcbiAgICAgIHNsaWRlczogKDAsIF9kb20uZGVmYXVsdCkoKSxcbiAgICAgIHNsaWRlc0dyaWQ6IFtdLFxuICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBbXSxcbiAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICBpc0hvcml6b250YWw6IGZ1bmN0aW9uIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB9LFxuICAgICAgaXNWZXJ0aWNhbDogZnVuY3Rpb24gaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgfSxcbiAgICAgIC8vIEluZGV4ZXNcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgcmVhbEluZGV4OiAwLFxuICAgICAgLy9cbiAgICAgIGlzQmVnaW5uaW5nOiB0cnVlLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgLy8gUHJvcHNcbiAgICAgIHRyYW5zbGF0ZTogMCxcbiAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICB2ZWxvY2l0eTogMCxcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAvLyBMb2Nrc1xuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcbiAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgdG91Y2hFdmVudHM6IGZ1bmN0aW9uIHRvdWNoRXZlbnRzKCkge1xuICAgICAgICB2YXIgdG91Y2ggPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJ107XG4gICAgICAgIHZhciBkZXNrdG9wID0gWydtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnXTtcblxuICAgICAgICBpZiAoc3dpcGVyLnN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgICAgICAgIGRlc2t0b3AgPSBbJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCddO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggPSB7XG4gICAgICAgICAgc3RhcnQ6IHRvdWNoWzBdLFxuICAgICAgICAgIG1vdmU6IHRvdWNoWzFdLFxuICAgICAgICAgIGVuZDogdG91Y2hbMl0sXG4gICAgICAgICAgY2FuY2VsOiB0b3VjaFszXVxuICAgICAgICB9O1xuICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wID0ge1xuICAgICAgICAgIHN0YXJ0OiBkZXNrdG9wWzBdLFxuICAgICAgICAgIG1vdmU6IGRlc2t0b3BbMV0sXG4gICAgICAgICAgZW5kOiBkZXNrdG9wWzJdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggOiBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wO1xuICAgICAgfSgpLFxuICAgICAgdG91Y2hFdmVudHNEYXRhOiB7XG4gICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHVuZGVmaW5lZCxcbiAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmU6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxuICAgICAgICBmb3JtRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbCcsXG4gICAgICAgIC8vIExhc3QgY2xpY2sgdGltZVxuICAgICAgICBsYXN0Q2xpY2tUaW1lOiAoMCwgX3V0aWxzLm5vdykoKSxcbiAgICAgICAgY2xpY2tUaW1lb3V0OiB1bmRlZmluZWQsXG4gICAgICAgIC8vIFZlbG9jaXRpZXNcbiAgICAgICAgdmVsb2NpdGllczogW10sXG4gICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNUb3VjaEV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICAvLyBDbGlja3NcbiAgICAgIGFsbG93Q2xpY2s6IHRydWUsXG4gICAgICAvLyBUb3VjaGVzXG4gICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgIHRvdWNoZXM6IHtcbiAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgZGlmZjogMFxuICAgICAgfSxcbiAgICAgIC8vIEltYWdlc1xuICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgIGltYWdlc0xvYWRlZDogMFxuICAgIH0pOyAvLyBJbnN0YWxsIE1vZHVsZXNcblxuICAgIHN3aXBlci51c2VNb2R1bGVzKCk7XG4gICAgc3dpcGVyLmVtaXQoJ19zd2lwZXInKTsgLy8gSW5pdFxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaW5pdCkge1xuICAgICAgc3dpcGVyLmluaXQoKTtcbiAgICB9IC8vIFJldHVybiBhcHAgaW5zdGFuY2VcblxuXG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTd2lwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5lbWl0Q29udGFpbmVyQ2xhc3NlcyA9IGZ1bmN0aW9uIGVtaXRDb250YWluZXJDbGFzc2VzKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIHZhciBjbGFzc2VzID0gc3dpcGVyLmVsLmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlci1jb250YWluZXInKSA9PT0gMCB8fCBjbGFzc05hbWUuaW5kZXhPZihzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpID09PSAwO1xuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfY29udGFpbmVyQ2xhc3NlcycsIGNsYXNzZXMuam9pbignICcpKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24gZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICByZXR1cm4gc2xpZGVFbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmRleE9mKCdzd2lwZXItc2xpZGUnKSA9PT0gMCB8fCBjbGFzc05hbWUuaW5kZXhPZihzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpID09PSAwO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfTtcblxuICBfcHJvdG8uZW1pdFNsaWRlc0NsYXNzZXMgPSBmdW5jdGlvbiBlbWl0U2xpZGVzQ2xhc3NlcygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICB2YXIgdXBkYXRlcyA9IFtdO1xuICAgIHN3aXBlci5zbGlkZXMuZWFjaChmdW5jdGlvbiAoc2xpZGVFbCkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBzd2lwZXIuZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpO1xuICAgICAgdXBkYXRlcy5wdXNoKHtcbiAgICAgICAgc2xpZGVFbDogc2xpZGVFbCxcbiAgICAgICAgY2xhc3NOYW1lczogY2xhc3NOYW1lc1xuICAgICAgfSk7XG4gICAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3MnLCBzbGlkZUVsLCBjbGFzc05hbWVzKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3NlcycsIHVwZGF0ZXMpO1xuICB9O1xuXG4gIF9wcm90by5zbGlkZXNQZXJWaWV3RHluYW1pYyA9IGZ1bmN0aW9uIHNsaWRlc1BlclZpZXdEeW5hbWljKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgICBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICAgIHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZSxcbiAgICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgdmFyIHNwdiA9IDE7XG5cbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICB2YXIgc2xpZGVTaXplID0gc2xpZGVzW2FjdGl2ZUluZGV4XS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICB2YXIgYnJlYWtMb29wO1xuXG4gICAgICBmb3IgKHZhciBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pID0gYWN0aXZlSW5kZXggLSAxOyBfaSA+PSAwOyBfaSAtPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbX2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW19pXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2kyID0gYWN0aXZlSW5kZXggKyAxOyBfaTIgPCBzbGlkZXMubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzR3JpZFtfaTJdIC0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gPCBzd2lwZXJTaXplKSB7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3B2O1xuICB9O1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtczsgLy8gQnJlYWtwb2ludHNcblxuICAgIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgIGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgIHZhciB0cmFuc2xhdGVWYWx1ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlICogLTEgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgdmFyIG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVZhbHVlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2xhdGVkO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgIHNldFRyYW5zbGF0ZSgpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCd1cGRhdGUnKTtcbiAgfTtcblxuICBfcHJvdG8uY2hhbmdlRGlyZWN0aW9uID0gZnVuY3Rpb24gY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbiwgbmVlZFVwZGF0ZSkge1xuICAgIGlmIChuZWVkVXBkYXRlID09PSB2b2lkIDApIHtcbiAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50RGlyZWN0aW9uID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb247XG5cbiAgICBpZiAoIW5ld0RpcmVjdGlvbikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBuZXdEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cblxuICAgIGlmIChuZXdEaXJlY3Rpb24gPT09IGN1cnJlbnREaXJlY3Rpb24gfHwgbmV3RGlyZWN0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgbmV3RGlyZWN0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gc3dpcGVyO1xuICAgIH1cblxuICAgIHN3aXBlci4kZWwucmVtb3ZlQ2xhc3MoXCJcIiArIHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIGN1cnJlbnREaXJlY3Rpb24pLmFkZENsYXNzKFwiXCIgKyBzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBuZXdEaXJlY3Rpb24pO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuICAgIHN3aXBlci5zbGlkZXMuZWFjaChmdW5jdGlvbiAoc2xpZGVFbCkge1xuICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdjaGFuZ2VEaXJlY3Rpb24nKTtcbiAgICBpZiAobmVlZFVwZGF0ZSkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH07XG5cbiAgX3Byb3RvLm1vdW50ID0gZnVuY3Rpb24gbW91bnQoZWwpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLm1vdW50ZWQpIHJldHVybiB0cnVlOyAvLyBGaW5kIGVsXG5cbiAgICB2YXIgJGVsID0gKDAsIF9kb20uZGVmYXVsdCkoZWwgfHwgc3dpcGVyLnBhcmFtcy5lbCk7XG4gICAgZWwgPSAkZWxbMF07XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZWwuc3dpcGVyID0gc3dpcGVyOyAvLyBGaW5kIFdyYXBwZXJcblxuICAgIHZhciAkd3JhcHBlckVsO1xuXG4gICAgaWYgKGVsICYmIGVsLnNoYWRvd1Jvb3QgJiYgZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAkd3JhcHBlckVsID0gKDAsIF9kb20uZGVmYXVsdCkoZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MpKTsgLy8gQ2hpbGRyZW4gbmVlZHMgdG8gcmV0dXJuIHNsb3QgaXRlbXNcblxuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiAkZWwuY2hpbGRyZW4ob3B0aW9ucyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsID0gJGVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MpO1xuICAgIH1cblxuICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIsIHtcbiAgICAgICRlbDogJGVsLFxuICAgICAgZWw6IGVsLFxuICAgICAgJHdyYXBwZXJFbDogJHdyYXBwZXJFbCxcbiAgICAgIHdyYXBwZXJFbDogJHdyYXBwZXJFbFswXSxcbiAgICAgIG1vdW50ZWQ6IHRydWUsXG4gICAgICAvLyBSVExcbiAgICAgIHJ0bDogZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8ICRlbC5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiAoZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8ICRlbC5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJyksXG4gICAgICB3cm9uZ1JUTDogJHdyYXBwZXJFbC5jc3MoJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94J1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdChlbCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybiBzd2lwZXI7XG4gICAgdmFyIG1vdW50ZWQgPSBzd2lwZXIubW91bnQoZWwpO1xuICAgIGlmIChtb3VudGVkID09PSBmYWxzZSkgcmV0dXJuIHN3aXBlcjtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlSW5pdCcpOyAvLyBTZXQgYnJlYWtwb2ludFxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfSAvLyBBZGQgQ2xhc3Nlc1xuXG5cbiAgICBzd2lwZXIuYWRkQ2xhc3NlcygpOyAvLyBDcmVhdGUgbG9vcFxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9IC8vIFVwZGF0ZSBzaXplXG5cblxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7IC8vIFVwZGF0ZSBzbGlkZXNcblxuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHtcbiAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgfSAvLyBTZXQgR3JhYiBDdXJzb3JcblxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzKSB7XG4gICAgICBzd2lwZXIucHJlbG9hZEltYWdlcygpO1xuICAgIH0gLy8gU2xpZGUgVG8gSW5pdGlhbCBTbGlkZVxuXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcbiAgICB9IC8vIEF0dGFjaCBldmVudHNcblxuXG4gICAgc3dpcGVyLmF0dGFjaEV2ZW50cygpOyAvLyBJbml0IEZsYWdcblxuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IHRydWU7IC8vIEVtaXRcblxuICAgIHN3aXBlci5lbWl0KCdpbml0Jyk7XG4gICAgc3dpcGVyLmVtaXQoJ2FmdGVySW5pdCcpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGRlbGV0ZUluc3RhbmNlLCBjbGVhblN0eWxlcykge1xuICAgIGlmIChkZWxldGVJbnN0YW5jZSA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWxldGVJbnN0YW5jZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNsZWFuU3R5bGVzID09PSB2b2lkIDApIHtcbiAgICAgIGNsZWFuU3R5bGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gICAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlRGVzdHJveScpOyAvLyBJbml0IEZsYWdcblxuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IGZhbHNlOyAvLyBEZXRhY2ggZXZlbnRzXG5cbiAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7IC8vIERlc3Ryb3kgbG9vcFxuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9IC8vIENsZWFudXAgc3R5bGVzXG5cblxuICAgIGlmIChjbGVhblN0eWxlcykge1xuICAgICAgc3dpcGVyLnJlbW92ZUNsYXNzZXMoKTtcbiAgICAgICRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgJHdyYXBwZXJFbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICBpZiAoc2xpZGVzICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVzLnJlbW92ZUNsYXNzKFtwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzLCBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MsIHBhcmFtcy5zbGlkZVByZXZDbGFzc10uam9pbignICcpKS5yZW1vdmVBdHRyKCdzdHlsZScpLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTsgLy8gRGV0YWNoIGVtaXR0ZXIgZXZlbnRzXG5cbiAgICBPYmplY3Qua2V5cyhzd2lwZXIuZXZlbnRzTGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgIHN3aXBlci5vZmYoZXZlbnROYW1lKTtcbiAgICB9KTtcblxuICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgIHN3aXBlci4kZWxbMF0uc3dpcGVyID0gbnVsbDtcbiAgICAgICgwLCBfdXRpbHMuZGVsZXRlUHJvcHMpKHN3aXBlcik7XG4gICAgfVxuXG4gICAgc3dpcGVyLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgU3dpcGVyLmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgICAoMCwgX3V0aWxzLmV4dGVuZCkoZXh0ZW5kZWREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICB9O1xuXG4gIFN3aXBlci5pbnN0YWxsTW9kdWxlID0gZnVuY3Rpb24gaW5zdGFsbE1vZHVsZShtb2R1bGUpIHtcbiAgICBpZiAoIVN3aXBlci5wcm90b3R5cGUubW9kdWxlcykgU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzID0ge307XG4gICAgdmFyIG5hbWUgPSBtb2R1bGUubmFtZSB8fCBPYmplY3Qua2V5cyhTd2lwZXIucHJvdG90eXBlLm1vZHVsZXMpLmxlbmd0aCArIFwiX1wiICsgKDAsIF91dGlscy5ub3cpKCk7XG4gICAgU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzW25hbWVdID0gbW9kdWxlO1xuICB9O1xuXG4gIFN3aXBlci51c2UgPSBmdW5jdGlvbiB1c2UobW9kdWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kdWxlKSkge1xuICAgICAgbW9kdWxlLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgcmV0dXJuIFN3aXBlci5pbnN0YWxsTW9kdWxlKG0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gU3dpcGVyO1xuICAgIH1cblxuICAgIFN3aXBlci5pbnN0YWxsTW9kdWxlKG1vZHVsZSk7XG4gICAgcmV0dXJuIFN3aXBlcjtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3dpcGVyLCBudWxsLCBbe1xuICAgIGtleTogXCJleHRlbmRlZERlZmF1bHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZXh0ZW5kZWREZWZhdWx0cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZGVmYXVsdHMuZGVmYXVsdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3dpcGVyO1xufSgpO1xuXG5PYmplY3Qua2V5cyhwcm90b3R5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm90b3R5cGVHcm91cCkge1xuICBPYmplY3Qua2V5cyhwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXSkuZm9yRWFjaChmdW5jdGlvbiAocHJvdG9NZXRob2QpIHtcbiAgICBTd2lwZXIucHJvdG90eXBlW3Byb3RvTWV0aG9kXSA9IHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdW3Byb3RvTWV0aG9kXTtcbiAgfSk7XG59KTtcblN3aXBlci51c2UoW19yZXNpemUuZGVmYXVsdCwgX29ic2VydmVyLmRlZmF1bHRdKTtcbnZhciBfZGVmYXVsdCA9IFN3aXBlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICBpbml0OiB0cnVlLFxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgdG91Y2hFdmVudHNUYXJnZXQ6ICdjb250YWluZXInLFxuICBpbml0aWFsU2xpZGU6IDAsXG4gIHNwZWVkOiAzMDAsXG4gIGNzc01vZGU6IGZhbHNlLFxuICB1cGRhdGVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgcmVzaXplT2JzZXJ2ZXI6IGZhbHNlLFxuICBuZXN0ZWQ6IGZhbHNlLFxuICAvLyBPdmVycmlkZXNcbiAgd2lkdGg6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgLy9cbiAgcHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiBmYWxzZSxcbiAgLy8gc3NyXG4gIHVzZXJBZ2VudDogbnVsbCxcbiAgdXJsOiBudWxsLFxuICAvLyBUbyBzdXBwb3J0IGlPUydzIHN3aXBlLXRvLWdvLWJhY2sgZ2VzdHVyZSAod2hlbiBiZWluZyB1c2VkIGluLWFwcCkuXG4gIGVkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gIGVkZ2VTd2lwZVRocmVzaG9sZDogMjAsXG4gIC8vIEZyZWUgbW9kZVxuICBmcmVlTW9kZTogZmFsc2UsXG4gIGZyZWVNb2RlTW9tZW50dW06IHRydWUsXG4gIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogMSxcbiAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZTogdHJ1ZSxcbiAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvOiAxLFxuICBmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbzogMSxcbiAgZnJlZU1vZGVTdGlja3k6IGZhbHNlLFxuICBmcmVlTW9kZU1pbmltdW1WZWxvY2l0eTogMC4wMixcbiAgLy8gQXV0b2hlaWdodFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgLy8gU2V0IHdyYXBwZXIgd2lkdGhcbiAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuICAvLyBWaXJ0dWFsIFRyYW5zbGF0ZVxuICB2aXJ0dWFsVHJhbnNsYXRlOiBmYWxzZSxcbiAgLy8gRWZmZWN0c1xuICBlZmZlY3Q6ICdzbGlkZScsXG4gIC8vICdzbGlkZScgb3IgJ2ZhZGUnIG9yICdjdWJlJyBvciAnY292ZXJmbG93JyBvciAnZmxpcCdcbiAgLy8gQnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHVuZGVmaW5lZCxcbiAgYnJlYWtwb2ludHNCYXNlOiAnd2luZG93JyxcbiAgLy8gU2xpZGVzIGdyaWRcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzbGlkZXNQZXJDb2x1bW46IDEsXG4gIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW4nLFxuICBzbGlkZXNQZXJHcm91cDogMSxcbiAgc2xpZGVzUGVyR3JvdXBTa2lwOiAwLFxuICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzQm91bmRzOiBmYWxzZSxcbiAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxuICAvLyBpbiBweFxuICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcbiAgLy8gaW4gcHhcbiAgbm9ybWFsaXplU2xpZGVJbmRleDogdHJ1ZSxcbiAgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiBmYWxzZSxcbiAgLy8gRGlzYWJsZSBzd2lwZXIgYW5kIGhpZGUgbmF2aWdhdGlvbiB3aGVuIGNvbnRhaW5lciBub3Qgb3ZlcmZsb3dcbiAgd2F0Y2hPdmVyZmxvdzogZmFsc2UsXG4gIC8vIFJvdW5kIGxlbmd0aFxuICByb3VuZExlbmd0aHM6IGZhbHNlLFxuICAvLyBUb3VjaGVzXG4gIHRvdWNoUmF0aW86IDEsXG4gIHRvdWNoQW5nbGU6IDQ1LFxuICBzaW11bGF0ZVRvdWNoOiB0cnVlLFxuICBzaG9ydFN3aXBlczogdHJ1ZSxcbiAgbG9uZ1N3aXBlczogdHJ1ZSxcbiAgbG9uZ1N3aXBlc1JhdGlvOiAwLjUsXG4gIGxvbmdTd2lwZXNNczogMzAwLFxuICBmb2xsb3dGaW5nZXI6IHRydWUsXG4gIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICB0aHJlc2hvbGQ6IDAsXG4gIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG4gIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6IGZhbHNlLFxuICB0b3VjaFJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcbiAgLy8gVW5pcXVlIE5hdmlnYXRpb24gRWxlbWVudHNcbiAgdW5pcXVlTmF2RWxlbWVudHM6IHRydWUsXG4gIC8vIFJlc2lzdGFuY2VcbiAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgcmVzaXN0YW5jZVJhdGlvOiAwLjg1LFxuICAvLyBQcm9ncmVzc1xuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiBmYWxzZSxcbiAgLy8gQ3Vyc29yXG4gIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAvLyBDbGlja3NcbiAgcHJldmVudENsaWNrczogdHJ1ZSxcbiAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgLy8gSW1hZ2VzXG4gIHByZWxvYWRJbWFnZXM6IHRydWUsXG4gIHVwZGF0ZU9uSW1hZ2VzUmVhZHk6IHRydWUsXG4gIC8vIGxvb3BcbiAgbG9vcDogZmFsc2UsXG4gIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICBsb29wZWRTbGlkZXM6IG51bGwsXG4gIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IGZhbHNlLFxuICBsb29wUHJldmVudHNTbGlkZTogdHJ1ZSxcbiAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXG4gIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICBhbGxvd1NsaWRlTmV4dDogdHJ1ZSxcbiAgc3dpcGVIYW5kbGVyOiBudWxsLFxuICAvLyAnLnN3aXBlLWhhbmRsZXInLFxuICBub1N3aXBpbmc6IHRydWUsXG4gIG5vU3dpcGluZ0NsYXNzOiAnc3dpcGVyLW5vLXN3aXBpbmcnLFxuICBub1N3aXBpbmdTZWxlY3RvcjogbnVsbCxcbiAgLy8gUGFzc2l2ZSBMaXN0ZW5lcnNcbiAgcGFzc2l2ZUxpc3RlbmVyczogdHJ1ZSxcbiAgLy8gTlNcbiAgY29udGFpbmVyTW9kaWZpZXJDbGFzczogJ3N3aXBlci1jb250YWluZXItJyxcbiAgLy8gTkVXXG4gIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICBzbGlkZUJsYW5rQ2xhc3M6ICdzd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rJyxcbiAgc2xpZGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1hY3RpdmUnLFxuICBzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1hY3RpdmUnLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3N3aXBlci1zbGlkZS12aXNpYmxlJyxcbiAgc2xpZGVEdXBsaWNhdGVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUnLFxuICBzbGlkZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1uZXh0JyxcbiAgc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLW5leHQnLFxuICBzbGlkZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1wcmV2JyxcbiAgc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLXByZXYnLFxuICB3cmFwcGVyQ2xhc3M6ICdzd2lwZXItd3JhcHBlcicsXG4gIC8vIENhbGxiYWNrc1xuICBydW5DYWxsYmFja3NPbkluaXQ6IHRydWUsXG4gIC8vIEludGVybmFsc1xuICBfZW1pdENsYXNzZXM6IGZhbHNlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG52YXIgX2RlZmF1bHQgPSB7XG4gIG9uOiBmdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF1bbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb25jZTogZnVuY3Rpb24gb25jZShldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG5cbiAgICBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHtcbiAgICAgIHNlbGYub2ZmKGV2ZW50cywgb25jZUhhbmRsZXIpO1xuXG4gICAgICBpZiAob25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkpIHtcbiAgICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlci5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG5cbiAgICBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIHNlbGYub24oZXZlbnRzLCBvbmNlSGFuZGxlciwgcHJpb3JpdHkpO1xuICB9LFxuICBvbkFueTogZnVuY3Rpb24gb25BbnkoaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG5cbiAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKSA8IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZkFueTogZnVuY3Rpb24gb2ZmQW55KGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0FueUxpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIGluZGV4ID0gc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyLCBpbmRleCkge1xuICAgICAgICAgIGlmIChldmVudEhhbmRsZXIgPT09IGhhbmRsZXIgfHwgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ICYmIGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgZW1pdDogZnVuY3Rpb24gZW1pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIGV2ZW50cztcbiAgICB2YXIgZGF0YTtcbiAgICB2YXIgY29udGV4dDtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgZXZlbnRzID0gYXJnc1swXTtcbiAgICAgIGRhdGEgPSBhcmdzLnNsaWNlKDEsIGFyZ3MubGVuZ3RoKTtcbiAgICAgIGNvbnRleHQgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgfVxuXG4gICAgZGF0YS51bnNoaWZ0KGNvbnRleHQpO1xuICAgIHZhciBldmVudHNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdCgnICcpO1xuICAgIGV2ZW50c0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBbZXZlbnRdLmNvbmNhdChkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfb25Ub3VjaFN0YXJ0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vblRvdWNoU3RhcnRcIikpO1xuXG52YXIgX29uVG91Y2hNb3ZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vblRvdWNoTW92ZVwiKSk7XG5cbnZhciBfb25Ub3VjaEVuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vb25Ub3VjaEVuZFwiKSk7XG5cbnZhciBfb25SZXNpemUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29uUmVzaXplXCIpKTtcblxudmFyIF9vbkNsaWNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vbkNsaWNrXCIpKTtcblxudmFyIF9vblNjcm9sbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vb25TY3JvbGxcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZHVtbXlFdmVudEF0dGFjaGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGR1bW15RXZlbnRMaXN0ZW5lcigpIHt9XG5cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50cygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoRXZlbnRzID0gc3dpcGVyLnRvdWNoRXZlbnRzLFxuICAgICAgZWwgPSBzd2lwZXIuZWwsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgZGV2aWNlID0gc3dpcGVyLmRldmljZSxcbiAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgc3dpcGVyLm9uVG91Y2hTdGFydCA9IF9vblRvdWNoU3RhcnQuZGVmYXVsdC5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vblRvdWNoTW92ZSA9IF9vblRvdWNoTW92ZS5kZWZhdWx0LmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hFbmQgPSBfb25Ub3VjaEVuZC5kZWZhdWx0LmJpbmQoc3dpcGVyKTtcblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIub25TY3JvbGwgPSBfb25TY3JvbGwuZGVmYXVsdC5iaW5kKHN3aXBlcik7XG4gIH1cblxuICBzd2lwZXIub25DbGljayA9IF9vbkNsaWNrLmRlZmF1bHQuYmluZChzd2lwZXIpO1xuICB2YXIgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDsgLy8gVG91Y2ggRXZlbnRzXG5cbiAgaWYgKCFzdXBwb3J0LnRvdWNoICYmIHN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSB0b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICBjYXB0dXJlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciA/IHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgIGNhcHR1cmU6IGNhcHR1cmVcbiAgICAgIH0gOiBjYXB0dXJlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmNhbmNlbCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICghZHVtbXlFdmVudEF0dGFjaGVkKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkdW1teUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICBkdW1teUV2ZW50QXR0YWNoZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhZGV2aWNlLmlvcyAmJiAhZGV2aWNlLmFuZHJvaWQgfHwgcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXN1cHBvcnQudG91Y2ggJiYgZGV2aWNlLmlvcykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH1cbiAgfSAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuXG5cbiAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzd2lwZXIub25TY3JvbGwpO1xuICB9IC8vIFJlc2l6ZSBoYW5kbGVyXG5cblxuICBpZiAocGFyYW1zLnVwZGF0ZU9uV2luZG93UmVzaXplKSB7XG4gICAgc3dpcGVyLm9uKGRldmljZS5pb3MgfHwgZGV2aWNlLmFuZHJvaWQgPyAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlJyA6ICdyZXNpemUgb2JzZXJ2ZXJVcGRhdGUnLCBfb25SZXNpemUuZGVmYXVsdCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLm9uKCdvYnNlcnZlclVwZGF0ZScsIF9vblJlc2l6ZS5kZWZhdWx0LCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRhY2hFdmVudHMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB0b3VjaEV2ZW50cyA9IHN3aXBlci50b3VjaEV2ZW50cyxcbiAgICAgIGVsID0gc3dpcGVyLmVsLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIGRldmljZSA9IHN3aXBlci5kZXZpY2UsXG4gICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gIHZhciBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkOyAvLyBUb3VjaCBFdmVudHNcblxuICBpZiAoIXN1cHBvcnQudG91Y2ggJiYgc3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3VwcG9ydC50b3VjaCkge1xuICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAnb25Ub3VjaFN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICAgIH0gOiBmYWxzZTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG5cbiAgICAgIGlmICh0b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5jYW5jZWwsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhZGV2aWNlLmlvcyAmJiAhZGV2aWNlLmFuZHJvaWQgfHwgcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXN1cHBvcnQudG91Y2ggJiYgZGV2aWNlLmlvcykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH1cbiAgfSAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuXG5cbiAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzd2lwZXIub25TY3JvbGwpO1xuICB9IC8vIFJlc2l6ZSBoYW5kbGVyXG5cblxuICBzd2lwZXIub2ZmKGRldmljZS5pb3MgfHwgZGV2aWNlLmFuZHJvaWQgPyAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlJyA6ICdyZXNpemUgb2JzZXJ2ZXJVcGRhdGUnLCBfb25SZXNpemUuZGVmYXVsdCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgYXR0YWNoRXZlbnRzOiBhdHRhY2hFdmVudHMsXG4gIGRldGFjaEV2ZW50czogZGV0YWNoRXZlbnRzXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBvbkNsaWNrO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3MpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9uUmVzaXplO1xuXG5mdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgZWwgPSBzd2lwZXIuZWw7XG4gIGlmIChlbCAmJiBlbC5vZmZzZXRXaWR0aCA9PT0gMCkgcmV0dXJuOyAvLyBCcmVha3BvaW50c1xuXG4gIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICB9IC8vIFNhdmUgbG9ja3NcblxuXG4gIHZhciBhbGxvd1NsaWRlTmV4dCA9IHN3aXBlci5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2ID0gc3dpcGVyLmFsbG93U2xpZGVQcmV2LFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7IC8vIERpc2FibGUgbG9ja3Mgb24gcmVzaXplXG5cbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gIGlmICgocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gIH0gLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxuXG5cbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9uU2Nyb2xsO1xuXG5mdW5jdGlvbiBvblNjcm9sbCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgcnRsVHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgaWYgKHJ0bFRyYW5zbGF0ZSkge1xuICAgICAgc3dpcGVyLnRyYW5zbGF0ZSA9IHdyYXBwZXJFbC5zY3JvbGxXaWR0aCAtIHdyYXBwZXJFbC5vZmZzZXRXaWR0aCAtIHdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxUb3A7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICBpZiAoc3dpcGVyLnRyYW5zbGF0ZSA9PT0gLTApIHN3aXBlci50cmFuc2xhdGUgPSAwO1xuICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgdmFyIG5ld1Byb2dyZXNzO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHN3aXBlci50cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHN3aXBlci5wcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGZhbHNlKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9uVG91Y2hFbmQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB0b3VjaGVzID0gc3dpcGVyLnRvdWNoZXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7XG4gIHZhciBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICB9XG5cbiAgZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLmlzTW92ZWQgJiYgcGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG5cbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9IC8vIFJldHVybiBHcmFiIEN1cnNvclxuXG5cbiAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmlzVG91Y2hlZCAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gIH0gLy8gVGltZSBkaWZmXG5cblxuICB2YXIgdG91Y2hFbmRUaW1lID0gKDAsIF91dGlscy5ub3cpKCk7XG4gIHZhciB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIGRhdGEudG91Y2hTdGFydFRpbWU7IC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuXG4gIGlmIChzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIHN3aXBlci51cGRhdGVDbGlja2VkU2xpZGUoZSk7XG4gICAgc3dpcGVyLmVtaXQoJ3RhcCBjbGljaycsIGUpO1xuXG4gICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmIHRvdWNoRW5kVGltZSAtIGRhdGEubGFzdENsaWNrVGltZSA8IDMwMCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ2RvdWJsZVRhcCBkb3VibGVDbGljaycsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEubGFzdENsaWNrVGltZSA9ICgwLCBfdXRpbHMubm93KSgpO1xuICAoMCwgX3V0aWxzLm5leHRUaWNrKShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzd2lwZXIuZGVzdHJveWVkKSBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIH0pO1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQgfHwgIWRhdGEuaXNNb3ZlZCB8fCAhc3dpcGVyLnN3aXBlRGlyZWN0aW9uIHx8IHRvdWNoZXMuZGlmZiA9PT0gMCB8fCBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPT09IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICB2YXIgY3VycmVudFBvcztcblxuICBpZiAocGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgIGN1cnJlbnRQb3MgPSBydGwgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBvcyA9IC1kYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgaWYgKGN1cnJlbnRQb3MgPCAtc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50UG9zID4gLXN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXMubGVuZ3RoIDwgc25hcEdyaWQubGVuZ3RoKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSkge1xuICAgICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBsYXN0TW92ZUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICB2YXIgdmVsb2NpdHlFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gbGFzdE1vdmVFdmVudC5wb3NpdGlvbiAtIHZlbG9jaXR5RXZlbnQucG9zaXRpb247XG4gICAgICAgIHZhciB0aW1lID0gbGFzdE1vdmVFdmVudC50aW1lIC0gdmVsb2NpdHlFdmVudC50aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWU7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSAvPSAyO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpIDwgcGFyYW1zLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfSAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAvLyBUaGVyZSB3b3VsZCBiZSBubyBldmVudHMgd2l0aCBkaXN0YW5jZSB6ZXJvLCBzbyB0aGUgbGFzdCBldmVudCBpcyBzdGFsZS5cblxuXG4gICAgICAgIGlmICh0aW1lID4gMTUwIHx8ICgwLCBfdXRpbHMubm93KSgpIC0gbGFzdE1vdmVFdmVudC50aW1lID4gMzAwKSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcbiAgICAgIGRhdGEudmVsb2NpdGllcy5sZW5ndGggPSAwO1xuICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1SYXRpbztcbiAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlID0gc3dpcGVyLnZlbG9jaXR5ICogbW9tZW50dW1EdXJhdGlvbjtcbiAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHN3aXBlci50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgaWYgKHJ0bCkgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICB2YXIgZG9Cb3VuY2UgPSBmYWxzZTtcbiAgICAgIHZhciBhZnRlckJvdW5jZVBvc2l0aW9uO1xuICAgICAgdmFyIGJvdW5jZUFtb3VudCA9IE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgKiAyMCAqIHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW87XG4gICAgICB2YXIgbmVlZHNMb29wRml4O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uICsgc3dpcGVyLm1heFRyYW5zbGF0ZSgpIDwgLWJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSA+IGJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICB2YXIgbmV4dFNsaWRlO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc25hcEdyaWQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoc25hcEdyaWRbal0gPiAtbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5leHRTbGlkZSA9IGo7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlXSAtIG5ld1Bvc2l0aW9uKSA8IE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZSAtIDFdIC0gbmV3UG9zaXRpb24pIHx8IHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQb3NpdGlvbiA9IC1uZXdQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRzTG9vcEZpeCkge1xuICAgICAgICBzd2lwZXIub25jZSgndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRml4IGR1cmF0aW9uXG5cblxuICAgICAgaWYgKHN3aXBlci52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKCgtbmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAvLyBJZiBmcmVlTW9kZVN0aWNreSBpcyBhY3RpdmUgYW5kIHRoZSB1c2VyIGVuZHMgYSBzd2lwZSB3aXRoIGEgc2xvdy12ZWxvY2l0eVxuICAgICAgICAgIC8vIGV2ZW50LCB0aGVuIGR1cmF0aW9ucyBjYW4gYmUgMjArIHNlY29uZHMgdG8gc2xpZGUgb25lIChvciB6ZXJvISkgc2xpZGVzLlxuICAgICAgICAgIC8vIEl0J3MgZWFzeSB0byBzZWUgdGhpcyB3aGVuIHNpbXVsYXRpbmcgdG91Y2ggd2l0aCBtb3VzZSBldmVudHMuIFRvIGZpeCB0aGlzLFxuICAgICAgICAgIC8vIGxpbWl0IHNpbmdsZS1zbGlkZSBzd2lwZXMgdG8gdGhlIGRlZmF1bHQgc2xpZGUgZHVyYXRpb24uIFRoaXMgYWxzbyBoYXMgdGhlXG4gICAgICAgICAgLy8gbmljZSBzaWRlIGVmZmVjdCBvZiBtYXRjaGluZyBzbGlkZSBzcGVlZCBpZiB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBiZWZvcmVcbiAgICAgICAgICAvLyBsaWZ0aW5nIGZpbmdlciBvciBtb3VzZSB2cy4gbW92aW5nIHNsb3dseSBiZWZvcmUgbGlmdGluZyB0aGUgZmluZ2VyL21vdXNlLlxuICAgICAgICAgIC8vIEZvciBmYXN0ZXIgc3dpcGVzLCBhbHNvIGFwcGx5IGxpbWl0cyAoYWxiZWl0IGhpZ2hlciBvbmVzKS5cbiAgICAgICAgICB2YXIgbW92ZURpc3RhbmNlID0gTWF0aC5hYnMoKHJ0bCA/IC1uZXdQb3NpdGlvbiA6IG5ld1Bvc2l0aW9uKSAtIHN3aXBlci50cmFuc2xhdGUpO1xuICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuYWN0aXZlSW5kZXhdO1xuXG4gICAgICAgICAgaWYgKG1vdmVEaXN0YW5jZSA8IGN1cnJlbnRTbGlkZVNpemUpIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb3ZlRGlzdGFuY2UgPCAyICogY3VycmVudFNsaWRlU2l6ZSkge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDEuNTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDIuNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSAmJiBkb0JvdW5jZSkge1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbW9tZW50dW1Cb3VuY2UnKTtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihwYXJhbXMuc3BlZWQpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnZlbG9jaXR5KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuZW1pdCgnX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgc3dpcGVyLmVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSB8fCB0aW1lRGlmZiA+PSBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gRmluZCBjdXJyZW50IHNsaWRlXG5cblxuICB2YXIgc3RvcEluZGV4ID0gMDtcbiAgdmFyIGdyb3VwU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICB2YXIgX2luY3JlbWVudCA9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIF9pbmNyZW1lbnRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0gLSBzbGlkZXNHcmlkW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgIH1cbiAgfSAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuXG5cbiAgdmFyIHJhdGlvID0gKGN1cnJlbnRQb3MgLSBzbGlkZXNHcmlkW3N0b3BJbmRleF0pIC8gZ3JvdXBTaXplO1xuICB2YXIgaW5jcmVtZW50ID0gc3RvcEluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gIGlmICh0aW1lRGlmZiA+IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAvLyBMb25nIHRvdWNoZXNcbiAgICBpZiAoIXBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gMSAtIHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICBpZiAoIXBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNOYXZCdXR0b25UYXJnZXQgPSBzd2lwZXIubmF2aWdhdGlvbiAmJiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKTtcblxuICAgIGlmICghaXNOYXZCdXR0b25UYXJnZXQpIHtcbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBvblRvdWNoTW92ZTtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZShldmVudCkge1xuICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB0b3VjaGVzID0gc3dpcGVyLnRvdWNoZXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICB2YXIgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5zdGFydE1vdmluZyAmJiBkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZS50eXBlICE9PSAndG91Y2htb3ZlJykgcmV0dXJuO1xuICB2YXIgdGFyZ2V0VG91Y2ggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUudGFyZ2V0VG91Y2hlcyAmJiAoZS50YXJnZXRUb3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xuICB2YXIgcGFnZVggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVggOiBlLnBhZ2VYO1xuICB2YXIgcGFnZVkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVkgOiBlLnBhZ2VZO1xuXG4gIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgdG91Y2hlcy5zdGFydFggPSBwYWdlWDtcbiAgICB0b3VjaGVzLnN0YXJ0WSA9IHBhZ2VZO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93VG91Y2hNb3ZlKSB7XG4gICAgLy8gaXNNb3ZlZCA9IHRydWU7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgKDAsIF91dGlscy5leHRlbmQpKHRvdWNoZXMsIHtcbiAgICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgY3VycmVudFg6IHBhZ2VYLFxuICAgICAgICBjdXJyZW50WTogcGFnZVlcbiAgICAgIH0pO1xuICAgICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9ICgwLCBfdXRpbHMubm93KSgpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcyAmJiAhcGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgLy8gVmVydGljYWxcbiAgICAgIGlmIChwYWdlWSA8IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VZID4gdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhZ2VYIDwgdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVggPiB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICgwLCBfZG9tLmRlZmF1bHQpKGUudGFyZ2V0KS5pcyhkYXRhLmZvcm1FbGVtZW50cykpIHtcbiAgICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlJywgZSk7XG4gIH1cblxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm47XG4gIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IHBhZ2VZO1xuICB2YXIgZGlmZlggPSB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFg7XG4gIHZhciBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydChNYXRoLnBvdyhkaWZmWCwgMikgKyBNYXRoLnBvdyhkaWZmWSwgMikpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpIHJldHVybjtcblxuICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIHRvdWNoQW5nbGU7XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHRvdWNoZXMuY3VycmVudFkgPT09IHRvdWNoZXMuc3RhcnRZIHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgdG91Y2hlcy5jdXJyZW50WCA9PT0gdG91Y2hlcy5zdGFydFgpIHtcbiAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkgPj0gMjUpIHtcbiAgICAgICAgdG91Y2hBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZSA6IDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEuc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFkYXRhLnN0YXJ0TW92aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICBpZiAoIXBhcmFtcy5jc3NNb2RlICYmIGUuY2FuY2VsYWJsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFwYXJhbXMubmVzdGVkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGlmICghZGF0YS5pc01vdmVkKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgIH1cblxuICAgIGRhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG5cbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJpZ2dlcignd2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyk7XG4gICAgfVxuXG4gICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gZmFsc2U7IC8vIEdyYWIgQ3Vyc29yXG5cbiAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcih0cnVlKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICB2YXIgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gIHRvdWNoZXMuZGlmZiA9IGRpZmY7XG4gIGRpZmYgKj0gcGFyYW1zLnRvdWNoUmF0aW87XG4gIGlmIChydGwpIGRpZmYgPSAtZGlmZjtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB2YXIgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gIHZhciByZXNpc3RhbmNlUmF0aW8gPSBwYXJhbXMucmVzaXN0YW5jZVJhdGlvO1xuXG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gIH1cblxuICBpZiAoZGlmZiA+IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIC0gMSArIE1hdGgucG93KC1zd2lwZXIubWluVHJhbnNsYXRlKCkgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlICsgZGlmZiwgcmVzaXN0YW5jZVJhdGlvKTtcbiAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyAxIC0gTWF0aC5wb3coc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gZGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmYsIHJlc2lzdGFuY2VSYXRpbyk7XG4gIH1cblxuICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAhc3dpcGVyLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfSAvLyBUaHJlc2hvbGRcblxuXG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHBhcmFtcy50aHJlc2hvbGQgfHwgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgIGlmICghZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSB0cnVlO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgdG91Y2hlcy5kaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYIDogdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXJhbXMuZm9sbG93RmluZ2VyIHx8IHBhcmFtcy5jc3NNb2RlKSByZXR1cm47IC8vIFVwZGF0ZSBhY3RpdmUgaW5kZXggaW4gZnJlZSBtb2RlXG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSB8fCBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAvLyBWZWxvY2l0eVxuICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICB0aW1lOiBkYXRhLnRvdWNoU3RhcnRUaW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXG4gICAgICB0aW1lOiAoMCwgX3V0aWxzLm5vdykoKVxuICAgIH0pO1xuICB9IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7IC8vIFVwZGF0ZSB0cmFuc2xhdGVcblxuICBzd2lwZXIuc2V0VHJhbnNsYXRlKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBvblRvdWNoU3RhcnQ7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgdmFyIGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcztcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgdmFyICR0YXJnZXRFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKGUudGFyZ2V0KTtcblxuICBpZiAocGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnd3JhcHBlcicpIHtcbiAgICBpZiAoISR0YXJnZXRFbC5jbG9zZXN0KHN3aXBlci53cmFwcGVyRWwpLmxlbmd0aCkgcmV0dXJuO1xuICB9XG5cbiAgZGF0YS5pc1RvdWNoRXZlbnQgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JztcbiAgaWYgKCFkYXRhLmlzVG91Y2hFdmVudCAmJiAnd2hpY2gnIGluIGUgJiYgZS53aGljaCA9PT0gMykgcmV0dXJuO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPiAwKSByZXR1cm47XG4gIGlmIChkYXRhLmlzVG91Y2hlZCAmJiBkYXRhLmlzTW92ZWQpIHJldHVybjsgLy8gY2hhbmdlIHRhcmdldCBlbCBmb3Igc2hhZG93IHJvb3QgY29tcG9uZW5ldFxuXG4gIHZhciBzd2lwaW5nQ2xhc3NIYXNWYWx1ZSA9ICEhcGFyYW1zLm5vU3dpcGluZ0NsYXNzICYmIHBhcmFtcy5ub1N3aXBpbmdDbGFzcyAhPT0gJyc7XG5cbiAgaWYgKHN3aXBpbmdDbGFzc0hhc1ZhbHVlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgZXZlbnQucGF0aCAmJiBldmVudC5wYXRoWzBdKSB7XG4gICAgJHRhcmdldEVsID0gKDAsIF9kb20uZGVmYXVsdCkoZXZlbnQucGF0aFswXSk7XG4gIH1cblxuICBpZiAocGFyYW1zLm5vU3dpcGluZyAmJiAkdGFyZ2V0RWwuY2xvc2VzdChwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgPyBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgOiBcIi5cIiArIHBhcmFtcy5ub1N3aXBpbmdDbGFzcylbMF0pIHtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICBpZiAoISR0YXJnZXRFbC5jbG9zZXN0KHBhcmFtcy5zd2lwZUhhbmRsZXIpWzBdKSByZXR1cm47XG4gIH1cblxuICB0b3VjaGVzLmN1cnJlbnRYID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICB2YXIgc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgdmFyIHN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7IC8vIERvIE5PVCBzdGFydCBpZiBpT1MgZWRnZSBzd2lwZSBpcyBkZXRlY3RlZC4gT3RoZXJ3aXNlIGlPUyBhcHAgY2Fubm90IHN3aXBlLXRvLWdvLWJhY2sgYW55bW9yZVxuXG4gIHZhciBlZGdlU3dpcGVEZXRlY3Rpb24gPSBwYXJhbXMuZWRnZVN3aXBlRGV0ZWN0aW9uIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVEZXRlY3Rpb247XG4gIHZhciBlZGdlU3dpcGVUaHJlc2hvbGQgPSBwYXJhbXMuZWRnZVN3aXBlVGhyZXNob2xkIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVUaHJlc2hvbGQ7XG5cbiAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiAmJiAoc3RhcnRYIDw9IGVkZ2VTd2lwZVRocmVzaG9sZCB8fCBzdGFydFggPj0gd2luZG93LmlubmVyV2lkdGggLSBlZGdlU3dpcGVUaHJlc2hvbGQpKSB7XG4gICAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiA9PT0gJ3ByZXZlbnQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgKDAsIF91dGlscy5leHRlbmQpKGRhdGEsIHtcbiAgICBpc1RvdWNoZWQ6IHRydWUsXG4gICAgaXNNb3ZlZDogZmFsc2UsXG4gICAgYWxsb3dUb3VjaENhbGxiYWNrczogdHJ1ZSxcbiAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgfSk7XG4gIHRvdWNoZXMuc3RhcnRYID0gc3RhcnRYO1xuICB0b3VjaGVzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgZGF0YS50b3VjaFN0YXJ0VGltZSA9ICgwLCBfdXRpbHMubm93KSgpO1xuICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IGZhbHNlO1xuXG4gIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgaWYgKCR0YXJnZXRFbC5pcyhkYXRhLmZvcm1FbGVtZW50cykpIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoMCwgX2RvbS5kZWZhdWx0KShkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyhkYXRhLmZvcm1FbGVtZW50cykgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gJHRhcmdldEVsWzBdKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICB2YXIgc2hvdWxkUHJldmVudERlZmF1bHQgPSBwcmV2ZW50RGVmYXVsdCAmJiBzd2lwZXIuYWxsb3dUb3VjaE1vdmUgJiYgcGFyYW1zLnRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDtcblxuICAgIGlmICgocGFyYW1zLnRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KSAmJiAhJHRhcmdldEVsWzBdLmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3RvdWNoU3RhcnQnLCBlKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zZXRHcmFiQ3Vyc29yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zZXRHcmFiQ3Vyc29yXCIpKTtcblxudmFyIF91bnNldEdyYWJDdXJzb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Vuc2V0R3JhYkN1cnNvclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgc2V0R3JhYkN1cnNvcjogX3NldEdyYWJDdXJzb3IuZGVmYXVsdCxcbiAgdW5zZXRHcmFiQ3Vyc29yOiBfdW5zZXRHcmFiQ3Vyc29yLmRlZmF1bHRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNldEdyYWJDdXJzb3I7XG5cbmZ1bmN0aW9uIHNldEdyYWJDdXJzb3IobW92aW5nKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgIXN3aXBlci5wYXJhbXMuc2ltdWxhdGVUb3VjaCB8fCBzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICB2YXIgZWwgPSBzd2lwZXIuZWw7XG4gIGVsLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJy13ZWJraXQtZ3JhYmJpbmcnIDogJy13ZWJraXQtZ3JhYic7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctbW96LWdyYWJiaW4nIDogJy1tb3otZ3JhYic7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICdncmFiYmluZycgOiAnZ3JhYic7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB1bnNldEdyYWJDdXJzb3I7XG5cbmZ1bmN0aW9uIHVuc2V0R3JhYkN1cnNvcigpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpcGVyLmVsLnN0eWxlLmN1cnNvciA9ICcnO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2xvYWRJbWFnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZEltYWdlXCIpKTtcblxudmFyIF9wcmVsb2FkSW1hZ2VzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wcmVsb2FkSW1hZ2VzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBsb2FkSW1hZ2U6IF9sb2FkSW1hZ2UuZGVmYXVsdCxcbiAgcHJlbG9hZEltYWdlczogX3ByZWxvYWRJbWFnZXMuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9hZEltYWdlO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGxvYWRJbWFnZShpbWFnZUVsLCBzcmMsIHNyY3NldCwgc2l6ZXMsIGNoZWNrRm9yQ29tcGxldGUsIGNhbGxiYWNrKSB7XG4gIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gIHZhciBpbWFnZTtcblxuICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgfVxuXG4gIHZhciBpc1BpY3R1cmUgPSAoMCwgX2RvbS5kZWZhdWx0KShpbWFnZUVsKS5wYXJlbnQoJ3BpY3R1cmUnKVswXTtcblxuICBpZiAoIWlzUGljdHVyZSAmJiAoIWltYWdlRWwuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpKSB7XG4gICAgaWYgKHNyYykge1xuICAgICAgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG9uUmVhZHk7XG5cbiAgICAgIGlmIChzaXplcykge1xuICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNyYykge1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVhZHkoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICBvblJlYWR5KCk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByZWxvYWRJbWFnZXM7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICBzd2lwZXIuaW1hZ2VzVG9Mb2FkID0gc3dpcGVyLiRlbC5maW5kKCdpbWcnKTtcblxuICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIgPT09IG51bGwgfHwgIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5pbWFnZXNMb2FkZWQgIT09IHVuZGVmaW5lZCkgc3dpcGVyLmltYWdlc0xvYWRlZCArPSAxO1xuXG4gICAgaWYgKHN3aXBlci5pbWFnZXNMb2FkZWQgPT09IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy51cGRhdGVPbkltYWdlc1JlYWR5KSBzd2lwZXIudXBkYXRlKCk7XG4gICAgICBzd2lwZXIuZW1pdCgnaW1hZ2VzUmVhZHknKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgaW1hZ2VFbCA9IHN3aXBlci5pbWFnZXNUb0xvYWRbaV07XG4gICAgc3dpcGVyLmxvYWRJbWFnZShpbWFnZUVsLCBpbWFnZUVsLmN1cnJlbnRTcmMgfHwgaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoJ3NyYycpLCBpbWFnZUVsLnNyY3NldCB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc3Jjc2V0JyksIGltYWdlRWwuc2l6ZXMgfHwgaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoJ3NpemVzJyksIHRydWUsIG9uUmVhZHkpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbG9vcENyZWF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9vcENyZWF0ZVwiKSk7XG5cbnZhciBfbG9vcEZpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9vcEZpeFwiKSk7XG5cbnZhciBfbG9vcERlc3Ryb3kgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvb3BEZXN0cm95XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBsb29wQ3JlYXRlOiBfbG9vcENyZWF0ZS5kZWZhdWx0LFxuICBsb29wRml4OiBfbG9vcEZpeC5kZWZhdWx0LFxuICBsb29wRGVzdHJveTogX2xvb3BEZXN0cm95LmRlZmF1bHRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvb3BDcmVhdGU7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbG9vcENyZWF0ZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDsgLy8gUmVtb3ZlIGR1cGxpY2F0ZWQgc2xpZGVzXG5cbiAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykucmVtb3ZlKCk7XG4gIHZhciBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcEZpbGxHcm91cFdpdGhCbGFuaykge1xuICAgIHZhciBibGFua1NsaWRlc051bSA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCAtIHNsaWRlcy5sZW5ndGggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAoYmxhbmtTbGlkZXNOdW0gIT09IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibGFua1NsaWRlc051bTsgaSArPSAxKSB7XG4gICAgICAgIHZhciBibGFua05vZGUgPSAoMCwgX2RvbS5kZWZhdWx0KShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQ2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3MpO1xuICAgICAgICAkd3JhcHBlckVsLmFwcGVuZChibGFua05vZGUpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmICFwYXJhbXMubG9vcGVkU2xpZGVzKSBwYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5sb29wZWRTbGlkZXMgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gIHN3aXBlci5sb29wZWRTbGlkZXMgKz0gcGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuXG4gIGlmIChzd2lwZXIubG9vcGVkU2xpZGVzID4gc2xpZGVzLmxlbmd0aCkge1xuICAgIHN3aXBlci5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgdmFyIHByZXBlbmRTbGlkZXMgPSBbXTtcbiAgdmFyIGFwcGVuZFNsaWRlcyA9IFtdO1xuICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgdmFyIHNsaWRlID0gKDAsIF9kb20uZGVmYXVsdCkoZWwpO1xuXG4gICAgaWYgKGluZGV4IDwgc3dpcGVyLmxvb3BlZFNsaWRlcykge1xuICAgICAgYXBwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IHNsaWRlcy5sZW5ndGggJiYgaW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMpIHtcbiAgICAgIHByZXBlbmRTbGlkZXMucHVzaChlbCk7XG4gICAgfVxuXG4gICAgc2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnLCBpbmRleCk7XG4gIH0pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcHBlbmRTbGlkZXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoKDAsIF9kb20uZGVmYXVsdCkoYXBwZW5kU2xpZGVzW19pXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gIH1cblxuICBmb3IgKHZhciBfaTIgPSBwcmVwZW5kU2xpZGVzLmxlbmd0aCAtIDE7IF9pMiA+PSAwOyBfaTIgLT0gMSkge1xuICAgICR3cmFwcGVyRWwucHJlcGVuZCgoMCwgX2RvbS5kZWZhdWx0KShwcmVwZW5kU2xpZGVzW19pMl0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBsb29wRGVzdHJveTtcblxuZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIiwuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlQmxhbmtDbGFzcykucmVtb3ZlKCk7XG4gIHNsaWRlcy5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9vcEZpeDtcblxuZnVuY3Rpb24gbG9vcEZpeCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHN3aXBlci5lbWl0KCdiZWZvcmVMb29wRml4Jyk7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICBsb29wZWRTbGlkZXMgPSBzd2lwZXIubG9vcGVkU2xpZGVzLFxuICAgICAgYWxsb3dTbGlkZVByZXYgPSBzd2lwZXIuYWxsb3dTbGlkZVByZXYsXG4gICAgICBhbGxvd1NsaWRlTmV4dCA9IHN3aXBlci5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgdmFyIG5ld0luZGV4O1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICB2YXIgc25hcFRyYW5zbGF0ZSA9IC1zbmFwR3JpZFthY3RpdmVJbmRleF07XG4gIHZhciBkaWZmID0gc25hcFRyYW5zbGF0ZSAtIHN3aXBlci5nZXRUcmFuc2xhdGUoKTsgLy8gRml4IEZvciBOZWdhdGl2ZSBPdmVyc2xpZGluZ1xuXG4gIGlmIChhY3RpdmVJbmRleCA8IGxvb3BlZFNsaWRlcykge1xuICAgIG5ld0luZGV4ID0gc2xpZGVzLmxlbmd0aCAtIGxvb3BlZFNsaWRlcyAqIDMgKyBhY3RpdmVJbmRleDtcbiAgICBuZXdJbmRleCArPSBsb29wZWRTbGlkZXM7XG4gICAgdmFyIHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIGxvb3BlZFNsaWRlcykge1xuICAgIC8vIEZpeCBGb3IgUG9zaXRpdmUgT3ZlcnNsaWRpbmdcbiAgICBuZXdJbmRleCA9IC1zbGlkZXMubGVuZ3RoICsgYWN0aXZlSW5kZXggKyBsb29wZWRTbGlkZXM7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuXG4gICAgdmFyIF9zbGlkZUNoYW5nZWQgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKF9zbGlkZUNoYW5nZWQgJiYgZGlmZiAhPT0gMCkge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSgocnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKSAtIGRpZmYpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgc3dpcGVyLmVtaXQoJ2xvb3BGaXgnKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZFNsaWRlO1xuXG5mdW5jdGlvbiBhZGRTbGlkZShpbmRleCwgc2xpZGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICB2YXIgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBhY3RpdmVJbmRleEJ1ZmZlciAtPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICB9XG5cbiAgdmFyIGJhc2VMZW5ndGggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPD0gMCkge1xuICAgIHN3aXBlci5wcmVwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5kZXggPj0gYmFzZUxlbmd0aCkge1xuICAgIHN3aXBlci5hcHBlbmRTbGlkZShzbGlkZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyID4gaW5kZXggPyBhY3RpdmVJbmRleEJ1ZmZlciArIDEgOiBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgdmFyIHNsaWRlc0J1ZmZlciA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSBiYXNlTGVuZ3RoIC0gMTsgaSA+PSBpbmRleDsgaSAtPSAxKSB7XG4gICAgdmFyIGN1cnJlbnRTbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaSk7XG4gICAgY3VycmVudFNsaWRlLnJlbW92ZSgpO1xuICAgIHNsaWRlc0J1ZmZlci51bnNoaWZ0KGN1cnJlbnRTbGlkZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHNsaWRlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbX2ldKSAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNbX2ldKTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyID4gaW5kZXggPyBhY3RpdmVJbmRleEJ1ZmZlciArIHNsaWRlcy5sZW5ndGggOiBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXMpO1xuICB9XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgc2xpZGVzQnVmZmVyLmxlbmd0aDsgX2kyICs9IDEpIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNCdWZmZXJbX2kyXSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwcGVuZFNsaWRlO1xuXG5mdW5jdGlvbiBhcHBlbmRTbGlkZShzbGlkZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldKSAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXMpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuXG4gIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBzd2lwZXIuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9hcHBlbmRTbGlkZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYXBwZW5kU2xpZGVcIikpO1xuXG52YXIgX3ByZXBlbmRTbGlkZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcHJlcGVuZFNsaWRlXCIpKTtcblxudmFyIF9hZGRTbGlkZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWRkU2xpZGVcIikpO1xuXG52YXIgX3JlbW92ZVNsaWRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZW1vdmVTbGlkZVwiKSk7XG5cbnZhciBfcmVtb3ZlQWxsU2xpZGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZW1vdmVBbGxTbGlkZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGFwcGVuZFNsaWRlOiBfYXBwZW5kU2xpZGUuZGVmYXVsdCxcbiAgcHJlcGVuZFNsaWRlOiBfcHJlcGVuZFNsaWRlLmRlZmF1bHQsXG4gIGFkZFNsaWRlOiBfYWRkU2xpZGUuZGVmYXVsdCxcbiAgcmVtb3ZlU2xpZGU6IF9yZW1vdmVTbGlkZS5kZWZhdWx0LFxuICByZW1vdmVBbGxTbGlkZXM6IF9yZW1vdmVBbGxTbGlkZXMuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlcGVuZFNsaWRlO1xuXG5mdW5jdGlvbiBwcmVwZW5kU2xpZGUoc2xpZGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyAxO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIHNsaWRlcy5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSByZW1vdmVBbGxTbGlkZXM7XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXNJbmRleGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICB9XG5cbiAgc3dpcGVyLnJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVtb3ZlU2xpZGU7XG5cbmZ1bmN0aW9uIHJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIHZhciBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgdmFyIGluZGV4VG9SZW1vdmU7XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXNJbmRleGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXNJbmRleGVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNJbmRleGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlc1tpXTtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzd2lwZXIuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPCBuZXdBY3RpdmVJbmRleCkgbmV3QWN0aXZlSW5kZXggLT0gMTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfSBlbHNlIHtcbiAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlcztcbiAgICBpZiAoc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleCAtPSAxO1xuICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuXG4gIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBzd2lwZXIuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgdXNlUGFyYW1zOiBmdW5jdGlvbiB1c2VQYXJhbXMoaW5zdGFuY2VQYXJhbXMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghaW5zdGFuY2UubW9kdWxlcykgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdOyAvLyBFeHRlbmQgcGFyYW1zXG5cbiAgICAgIGlmIChtb2R1bGUucGFyYW1zKSB7XG4gICAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShpbnN0YW5jZVBhcmFtcywgbW9kdWxlLnBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHVzZU1vZHVsZXM6IGZ1bmN0aW9uIHVzZU1vZHVsZXMobW9kdWxlc1BhcmFtcykge1xuICAgIGlmIChtb2R1bGVzUGFyYW1zID09PSB2b2lkIDApIHtcbiAgICAgIG1vZHVsZXNQYXJhbXMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghaW5zdGFuY2UubW9kdWxlcykgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdO1xuICAgICAgdmFyIG1vZHVsZVBhcmFtcyA9IG1vZHVsZXNQYXJhbXNbbW9kdWxlTmFtZV0gfHwge307IC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcblxuICAgICAgaWYgKG1vZHVsZS5vbiAmJiBpbnN0YW5jZS5vbikge1xuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGUub24pLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUV2ZW50TmFtZSkge1xuICAgICAgICAgIGluc3RhbmNlLm9uKG1vZHVsZUV2ZW50TmFtZSwgbW9kdWxlLm9uW21vZHVsZUV2ZW50TmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gTW9kdWxlIGNyZWF0ZSBjYWxsYmFja1xuXG5cbiAgICAgIGlmIChtb2R1bGUuY3JlYXRlKSB7XG4gICAgICAgIG1vZHVsZS5jcmVhdGUuYmluZChpbnN0YW5jZSkobW9kdWxlUGFyYW1zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NsaWRlVG8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NsaWRlVG9cIikpO1xuXG52YXIgX3NsaWRlVG9Mb29wID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zbGlkZVRvTG9vcFwiKSk7XG5cbnZhciBfc2xpZGVOZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zbGlkZU5leHRcIikpO1xuXG52YXIgX3NsaWRlUHJldiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2xpZGVQcmV2XCIpKTtcblxudmFyIF9zbGlkZVJlc2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zbGlkZVJlc2V0XCIpKTtcblxudmFyIF9zbGlkZVRvQ2xvc2VzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2xpZGVUb0Nsb3Nlc3RcIikpO1xuXG52YXIgX3NsaWRlVG9DbGlja2VkU2xpZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NsaWRlVG9DbGlja2VkU2xpZGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIHNsaWRlVG86IF9zbGlkZVRvLmRlZmF1bHQsXG4gIHNsaWRlVG9Mb29wOiBfc2xpZGVUb0xvb3AuZGVmYXVsdCxcbiAgc2xpZGVOZXh0OiBfc2xpZGVOZXh0LmRlZmF1bHQsXG4gIHNsaWRlUHJldjogX3NsaWRlUHJldi5kZWZhdWx0LFxuICBzbGlkZVJlc2V0OiBfc2xpZGVSZXNldC5kZWZhdWx0LFxuICBzbGlkZVRvQ2xvc2VzdDogX3NsaWRlVG9DbG9zZXN0LmRlZmF1bHQsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IF9zbGlkZVRvQ2xpY2tlZFNsaWRlLmRlZmF1bHRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNsaWRlTmV4dDtcblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZU5leHQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIGFuaW1hdGluZyA9IHN3aXBlci5hbmltYXRpbmc7XG4gIHZhciBpbmNyZW1lbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNsaWRlUHJldjtcblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVByZXYoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIGFuaW1hdGluZyA9IHN3aXBlci5hbmltYXRpbmcsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGUpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlID0gcnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwpIHtcbiAgICBpZiAodmFsIDwgMCkgcmV0dXJuIC1NYXRoLmZsb29yKE1hdGguYWJzKHZhbCkpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IG5vcm1hbGl6ZSh0cmFuc2xhdGUpO1xuICB2YXIgbm9ybWFsaXplZFNuYXBHcmlkID0gc25hcEdyaWQubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplKHZhbCk7XG4gIH0pO1xuICB2YXIgY3VycmVudFNuYXAgPSBzbmFwR3JpZFtub3JtYWxpemVkU25hcEdyaWQuaW5kZXhPZihub3JtYWxpemVkVHJhbnNsYXRlKV07XG4gIHZhciBwcmV2U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpIC0gMV07XG5cbiAgaWYgKHR5cGVvZiBwcmV2U25hcCA9PT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICBzbmFwR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICBpZiAoIXByZXZTbmFwICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gc25hcCkgcHJldlNuYXAgPSBzbmFwO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHByZXZJbmRleDtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwICE9PSAndW5kZWZpbmVkJykge1xuICAgIHByZXZJbmRleCA9IHNsaWRlc0dyaWQuaW5kZXhPZihwcmV2U25hcCk7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHByZXZJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCAtIDE7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8ocHJldkluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzbGlkZVJlc2V0O1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlUmVzZXQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzbGlkZVRvO1xuXG5mdW5jdGlvbiBzbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgIGluZGV4ID0gMDtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgaW5kZXggIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdpbmRleCcgYXJndW1lbnQgY2Fubm90IGhhdmUgdHlwZSBvdGhlciB0aGFuICdudW1iZXInIG9yICdzdHJpbmcnLiBbXCIgKyB0eXBlb2YgaW5kZXggKyBcIl0gZ2l2ZW4uXCIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3N0cmluZycpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYGluZGV4YCBhcmd1bWVudCBjb252ZXJ0ZWQgZnJvbSBgc3RyaW5nYCB0byBgbnVtYmVyYC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHZhciBpbmRleEFzTnVtYmVyID0gcGFyc2VJbnQoaW5kZXgsIDEwKTtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGBpbmRleGAgYXJndW1lbnQgaXMgYSB2YWxpZCBgbnVtYmVyYFxuICAgICAqIGFmdGVyIGJlaW5nIGNvbnZlcnRlZCBmcm9tIHRoZSBgc3RyaW5nYCB0eXBlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gICAgdmFyIGlzVmFsaWROdW1iZXIgPSBpc0Zpbml0ZShpbmRleEFzTnVtYmVyKTtcblxuICAgIGlmICghaXNWYWxpZE51bWJlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBhc3NlZC1pbiAnaW5kZXgnIChzdHJpbmcpIGNvdWxkbid0IGJlIGNvbnZlcnRlZCB0byAnbnVtYmVyJy4gW1wiICsgaW5kZXggKyBcIl0gZ2l2ZW4uXCIpO1xuICAgIH0gLy8gS25vd2luZyB0aGF0IHRoZSBjb252ZXJ0ZWQgYGluZGV4YCBpcyBhIHZhbGlkIG51bWJlcixcbiAgICAvLyB3ZSBjYW4gdXBkYXRlIHRoZSBvcmlnaW5hbCBhcmd1bWVudCdzIHZhbHVlLlxuXG5cbiAgICBpbmRleCA9IGluZGV4QXNOdW1iZXI7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHNsaWRlSW5kZXggPSBpbmRleDtcbiAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gMDtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNJbmRleCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWw7XG5cbiAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBza2lwID0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIHNsaWRlSW5kZXgpO1xuICB2YXIgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKHNsaWRlSW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcblxuICBpZiAoKGFjdGl2ZUluZGV4IHx8IHBhcmFtcy5pbml0aWFsU2xpZGUgfHwgMCkgPT09IChwcmV2aW91c0luZGV4IHx8IDApICYmIHJ1bkNhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0Jyk7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlID0gLXNuYXBHcmlkW3NuYXBJbmRleF07IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpOyAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuXG4gIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSAtTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRHaXJkID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2ldICogMTAwKTtcbiAgICAgIHZhciBub3JtYWxpemVkR3JpZE5leHQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaSArIDFdICogMTAwKTtcblxuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdpcmQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCAtIChub3JtYWxpemVkR3JpZE5leHQgLSBub3JtYWxpemVkR2lyZCkgLyAyKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0KSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdpcmQpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgJiYgc2xpZGVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiB0cmFuc2xhdGUgPCBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA8IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHRyYW5zbGF0ZSA+IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlID4gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRpcmVjdGlvbjtcbiAgaWYgKHNsaWRlSW5kZXggPiBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ25leHQnO2Vsc2UgaWYgKHNsaWRlSW5kZXggPCBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ3ByZXYnO2Vsc2UgZGlyZWN0aW9uID0gJ3Jlc2V0JzsgLy8gVXBkYXRlIEluZGV4XG5cbiAgaWYgKHJ0bCAmJiAtdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlIHx8ICFydGwgJiYgdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpOyAvLyBVcGRhdGUgSGVpZ2h0XG5cbiAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgIGlmIChwYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgdmFyIGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICB2YXIgdCA9IC10cmFuc2xhdGU7XG5cbiAgICBpZiAocnRsKSB7XG4gICAgICB0ID0gd3JhcHBlckVsLnNjcm9sbFdpZHRoIC0gd3JhcHBlckVsLm9mZnNldFdpZHRoIC0gdDtcbiAgICB9XG5cbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmICh3cmFwcGVyRWwuc2Nyb2xsVG8pIHtcbiAgICAgICAgdmFyIF93cmFwcGVyRWwkc2Nyb2xsVG87XG5cbiAgICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKChfd3JhcHBlckVsJHNjcm9sbFRvID0ge30sIF93cmFwcGVyRWwkc2Nyb2xsVG9baXNIID8gJ2xlZnQnIDogJ3RvcCddID0gdCwgX3dyYXBwZXJFbCRzY3JvbGxUby5iZWhhdmlvciA9ICdzbW9vdGgnLCBfd3JhcHBlckVsJHNjcm9sbFRvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcblxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGlmICghc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2xpZGVUb0NsaWNrZWRTbGlkZTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzbGlkZVRvQ2xpY2tlZFNsaWRlKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gIHZhciBzbGlkZXNQZXJWaWV3ID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gIHZhciBzbGlkZVRvSW5kZXggPSBzd2lwZXIuY2xpY2tlZEluZGV4O1xuICB2YXIgcmVhbEluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgcmVhbEluZGV4ID0gcGFyc2VJbnQoKDAsIF9kb20uZGVmYXVsdCkoc3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgaWYgKHNsaWRlVG9JbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMgLSBzbGlkZXNQZXJWaWV3IC8gMiB8fCBzbGlkZVRvSW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKyBzbGlkZXNQZXJWaWV3IC8gMikge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICAoMCwgX3V0aWxzLm5leHRUaWNrKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIikuZXEoMCkuaW5kZXgoKTtcbiAgICAgICgwLCBfdXRpbHMubmV4dFRpY2spKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzbGlkZVRvQ2xvc2VzdDtcblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCwgdGhyZXNob2xkKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICBpZiAodGhyZXNob2xkID09PSB2b2lkIDApIHtcbiAgICB0aHJlc2hvbGQgPSAwLjU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICB2YXIgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCk7XG4gIHZhciBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoaW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBpZiAodHJhbnNsYXRlID49IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdKSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIG9uIG9yIGFmdGVyIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGFmdGVyIGl0LlxuICAgIHZhciBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIHZhciBuZXh0U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggKyAxXTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBjdXJyZW50U25hcCA+IChuZXh0U25hcCAtIGN1cnJlbnRTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggKz0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIGJlZm9yZSB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBiZWZvcmUgaXQuXG4gICAgdmFyIHByZXZTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCAtIDFdO1xuICAgIHZhciBfY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBwcmV2U25hcCA8PSAoX2N1cnJlbnRTbmFwIC0gcHJldlNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCAtPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIDApO1xuICBpbmRleCA9IE1hdGgubWluKGluZGV4LCBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzbGlkZVRvTG9vcDtcblxuZnVuY3Rpb24gc2xpZGVUb0xvb3AoaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgbmV3SW5kZXggPSBpbmRleDtcblxuICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgbmV3SW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NldFRyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NldFRyYW5zaXRpb25cIikpO1xuXG52YXIgX3RyYW5zaXRpb25TdGFydCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdHJhbnNpdGlvblN0YXJ0XCIpKTtcblxudmFyIF90cmFuc2l0aW9uRW5kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi90cmFuc2l0aW9uRW5kXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBzZXRUcmFuc2l0aW9uOiBfc2V0VHJhbnNpdGlvbi5kZWZhdWx0LFxuICB0cmFuc2l0aW9uU3RhcnQ6IF90cmFuc2l0aW9uU3RhcnQuZGVmYXVsdCxcbiAgdHJhbnNpdGlvbkVuZDogX3RyYW5zaXRpb25FbmQuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2V0VHJhbnNpdGlvbjtcblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmICghc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWwudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNpdGlvbicsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvbkVuZDtcblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNJbmRleCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICB2YXIgZGlyID0gZGlyZWN0aW9uO1xuXG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBhY3RpdmVJbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChkaXIgPT09ICdyZXNldCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnKTtcblxuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zaXRpb25TdGFydDtcblxuZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNJbmRleDtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG5cbiAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgfVxuXG4gIHZhciBkaXIgPSBkaXJlY3Rpb247XG5cbiAgaWYgKCFkaXIpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPiBwcmV2aW91c0luZGV4KSBkaXIgPSAnbmV4dCc7ZWxzZSBpZiAoYWN0aXZlSW5kZXggPCBwcmV2aW91c0luZGV4KSBkaXIgPSAncHJldic7ZWxzZSBkaXIgPSAncmVzZXQnO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuXG4gIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoZGlyID09PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCcpO1xuXG4gICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICB9XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFN3aXBlclRyYW5zbGF0ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gZ2V0U3dpcGVyVHJhbnNsYXRlKGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gJ3gnIDogJ3knO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIHRyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGUsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG5cbiAgaWYgKHBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgcmV0dXJuIHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRUcmFuc2xhdGUgPSAoMCwgX3V0aWxzLmdldFRyYW5zbGF0ZSkoJHdyYXBwZXJFbFswXSwgYXhpcyk7XG4gIGlmIChydGwpIGN1cnJlbnRUcmFuc2xhdGUgPSAtY3VycmVudFRyYW5zbGF0ZTtcbiAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9nZXRUcmFuc2xhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dldFRyYW5zbGF0ZVwiKSk7XG5cbnZhciBfc2V0VHJhbnNsYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zZXRUcmFuc2xhdGVcIikpO1xuXG52YXIgX21pblRyYW5zbGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWluVHJhbnNsYXRlXCIpKTtcblxudmFyIF9tYXhUcmFuc2xhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heFRyYW5zbGF0ZVwiKSk7XG5cbnZhciBfdHJhbnNsYXRlVG8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RyYW5zbGF0ZVRvXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBnZXRUcmFuc2xhdGU6IF9nZXRUcmFuc2xhdGUuZGVmYXVsdCxcbiAgc2V0VHJhbnNsYXRlOiBfc2V0VHJhbnNsYXRlLmRlZmF1bHQsXG4gIG1pblRyYW5zbGF0ZTogX21pblRyYW5zbGF0ZS5kZWZhdWx0LFxuICBtYXhUcmFuc2xhdGU6IF9tYXhUcmFuc2xhdGUuZGVmYXVsdCxcbiAgdHJhbnNsYXRlVG86IF90cmFuc2xhdGVUby5kZWZhdWx0XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBtYXhUcmFuc2xhdGU7XG5cbmZ1bmN0aW9uIG1heFRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkW3RoaXMuc25hcEdyaWQubGVuZ3RoIC0gMV07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBtaW5UcmFuc2xhdGU7XG5cbmZ1bmN0aW9uIG1pblRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkWzBdO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2V0VHJhbnNsYXRlO1xuXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcztcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG4gIHZhciB6ID0gMDtcblxuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgeCA9IHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgeSA9IHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWxbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXggOiAteTtcbiAgfSBlbHNlIGlmICghcGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAkd3JhcHBlckVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIFwiICsgeiArIFwicHgpXCIpO1xuICB9XG5cbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgc3dpcGVyLnRyYW5zbGF0ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHggOiB5OyAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBwcm9ncmVzc1xuXG4gIHZhciBuZXdQcm9ncmVzcztcbiAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zbGF0ZVRvO1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVUbyh0cmFuc2xhdGUsIHNwZWVkLCBydW5DYWxsYmFja3MsIHRyYW5zbGF0ZUJvdW5kcywgaW50ZXJuYWwpIHtcbiAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlID0gMDtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICBpZiAodHJhbnNsYXRlQm91bmRzID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGVCb3VuZHMgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbDtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG1pblRyYW5zbGF0ZSA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgdmFyIG1heFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgdmFyIG5ld1RyYW5zbGF0ZTtcbiAgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPiBtaW5UcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1pblRyYW5zbGF0ZTtlbHNlIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlIDwgbWF4VHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtYXhUcmFuc2xhdGU7ZWxzZSBuZXdUcmFuc2xhdGUgPSB0cmFuc2xhdGU7IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdUcmFuc2xhdGUpO1xuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHZhciBpc0ggPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG5cbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmICh3cmFwcGVyRWwuc2Nyb2xsVG8pIHtcbiAgICAgICAgdmFyIF93cmFwcGVyRWwkc2Nyb2xsVG87XG5cbiAgICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKChfd3JhcHBlckVsJHNjcm9sbFRvID0ge30sIF93cmFwcGVyRWwkc2Nyb2xsVG9baXNIID8gJ2xlZnQnIDogJ3RvcCddID0gLW5ld1RyYW5zbGF0ZSwgX3dyYXBwZXJFbCRzY3JvbGxUby5iZWhhdmlvciA9ICdzbW9vdGgnLCBfd3JhcHBlckVsJHNjcm9sbFRvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gLW5ld1RyYW5zbGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGlmICghc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG5cbiAgICAgICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3VwZGF0ZVNpemUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VwZGF0ZVNpemVcIikpO1xuXG52YXIgX3VwZGF0ZVNsaWRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXBkYXRlU2xpZGVzXCIpKTtcblxudmFyIF91cGRhdGVBdXRvSGVpZ2h0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cGRhdGVBdXRvSGVpZ2h0XCIpKTtcblxudmFyIF91cGRhdGVTbGlkZXNPZmZzZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VwZGF0ZVNsaWRlc09mZnNldFwiKSk7XG5cbnZhciBfdXBkYXRlU2xpZGVzUHJvZ3Jlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VwZGF0ZVNsaWRlc1Byb2dyZXNzXCIpKTtcblxudmFyIF91cGRhdGVQcm9ncmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXBkYXRlUHJvZ3Jlc3NcIikpO1xuXG52YXIgX3VwZGF0ZVNsaWRlc0NsYXNzZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VwZGF0ZVNsaWRlc0NsYXNzZXNcIikpO1xuXG52YXIgX3VwZGF0ZUFjdGl2ZUluZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cGRhdGVBY3RpdmVJbmRleFwiKSk7XG5cbnZhciBfdXBkYXRlQ2xpY2tlZFNsaWRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cGRhdGVDbGlja2VkU2xpZGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIHVwZGF0ZVNpemU6IF91cGRhdGVTaXplLmRlZmF1bHQsXG4gIHVwZGF0ZVNsaWRlczogX3VwZGF0ZVNsaWRlcy5kZWZhdWx0LFxuICB1cGRhdGVBdXRvSGVpZ2h0OiBfdXBkYXRlQXV0b0hlaWdodC5kZWZhdWx0LFxuICB1cGRhdGVTbGlkZXNPZmZzZXQ6IF91cGRhdGVTbGlkZXNPZmZzZXQuZGVmYXVsdCxcbiAgdXBkYXRlU2xpZGVzUHJvZ3Jlc3M6IF91cGRhdGVTbGlkZXNQcm9ncmVzcy5kZWZhdWx0LFxuICB1cGRhdGVQcm9ncmVzczogX3VwZGF0ZVByb2dyZXNzLmRlZmF1bHQsXG4gIHVwZGF0ZVNsaWRlc0NsYXNzZXM6IF91cGRhdGVTbGlkZXNDbGFzc2VzLmRlZmF1bHQsXG4gIHVwZGF0ZUFjdGl2ZUluZGV4OiBfdXBkYXRlQWN0aXZlSW5kZXguZGVmYXVsdCxcbiAgdXBkYXRlQ2xpY2tlZFNsaWRlOiBfdXBkYXRlQ2xpY2tlZFNsaWRlLmRlZmF1bHRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVwZGF0ZUFjdGl2ZUluZGV4O1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleChuZXdBY3RpdmVJbmRleCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIHZhciBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNSZWFsSW5kZXggPSBzd2lwZXIucmVhbEluZGV4LFxuICAgICAgcHJldmlvdXNTbmFwSW5kZXggPSBzd2lwZXIuc25hcEluZGV4O1xuICB2YXIgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgdmFyIHNuYXBJbmRleDtcblxuICBpZiAodHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdIC0gKHNsaWRlc0dyaWRbaSArIDFdIC0gc2xpZGVzR3JpZFtpXSkgLyAyKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfSAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuXG5cbiAgICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA8IDAgfHwgdHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykgYWN0aXZlSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSkgPj0gMCkge1xuICAgIHNuYXBJbmRleCA9IHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2tpcCA9IE1hdGgubWluKHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGFjdGl2ZUluZGV4KTtcbiAgICBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoYWN0aXZlSW5kZXggLSBza2lwKSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIH1cblxuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcblxuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoc25hcEluZGV4ICE9PSBwcmV2aW91c1NuYXBJbmRleCkge1xuICAgICAgc3dpcGVyLnNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gR2V0IHJlYWwgaW5kZXhcblxuXG4gIHZhciByZWFsSW5kZXggPSBwYXJzZUludChzd2lwZXIuc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIHx8IGFjdGl2ZUluZGV4LCAxMCk7XG4gICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIsIHtcbiAgICBzbmFwSW5kZXg6IHNuYXBJbmRleCxcbiAgICByZWFsSW5kZXg6IHJlYWxJbmRleCxcbiAgICBwcmV2aW91c0luZGV4OiBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleFxuICB9KTtcbiAgc3dpcGVyLmVtaXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJyk7XG4gIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcblxuICBpZiAocHJldmlvdXNSZWFsSW5kZXggIT09IHJlYWxJbmRleCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFsSW5kZXhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgfHwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2UnKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlQXV0b0hlaWdodDtcblxuZnVuY3Rpb24gdXBkYXRlQXV0b0hlaWdodChzcGVlZCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZVNsaWRlcyA9IFtdO1xuICB2YXIgbmV3SGVpZ2h0ID0gMDtcbiAgdmFyIGk7XG5cbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ251bWJlcicpIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gIH0gZWxzZSBpZiAoc3BlZWQgPT09IHRydWUpIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgfSAvLyBGaW5kIHNsaWRlcyBjdXJyZW50bHkgaW4gdmlld1xuXG5cbiAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXMuZWFjaChmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXRoLmNlaWwoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3KTsgaSArPSAxKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCArIGk7XG4gICAgICAgIGlmIChpbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goc3dpcGVyLnNsaWRlcy5lcShpbmRleClbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVTbGlkZXMucHVzaChzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleClbMF0pO1xuICB9IC8vIEZpbmQgbmV3IGhlaWdodCBmcm9tIGhpZ2hlc3Qgc2xpZGUgaW4gdmlld1xuXG5cbiAgZm9yIChpID0gMDsgaSA8IGFjdGl2ZVNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIGhlaWdodCA9IGFjdGl2ZVNsaWRlc1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPiBuZXdIZWlnaHQgPyBoZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgfVxuICB9IC8vIFVwZGF0ZSBIZWlnaHRcblxuXG4gIGlmIChuZXdIZWlnaHQpIHN3aXBlci4kd3JhcHBlckVsLmNzcygnaGVpZ2h0JywgbmV3SGVpZ2h0ICsgXCJweFwiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVwZGF0ZUNsaWNrZWRTbGlkZTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9kb21cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB1cGRhdGVDbGlja2VkU2xpZGUoZSkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciBzbGlkZSA9ICgwLCBfZG9tLmRlZmF1bHQpKGUudGFyZ2V0KS5jbG9zZXN0KFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpWzBdO1xuICB2YXIgc2xpZGVGb3VuZCA9IGZhbHNlO1xuICB2YXIgc2xpZGVJbmRleDtcblxuICBpZiAoc2xpZGUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2ldID09PSBzbGlkZSkge1xuICAgICAgICBzbGlkZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHNsaWRlO1xuXG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gcGFyc2VJbnQoKDAsIF9kb20uZGVmYXVsdCkoc2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLnNsaWRlVG9DbGlja2VkU2xpZGUgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHN3aXBlci5hY3RpdmVJbmRleCkge1xuICAgIHN3aXBlci5zbGlkZVRvQ2xpY2tlZFNsaWRlKCk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVwZGF0ZVByb2dyZXNzO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0cmFuc2xhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG11bHRpcGxpZXIgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLTEgOiAxOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHRyYW5zbGF0ZSA9IHN3aXBlciAmJiBzd2lwZXIudHJhbnNsYXRlICYmIHN3aXBlci50cmFuc2xhdGUgKiBtdWx0aXBsaWVyIHx8IDA7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICB2YXIgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3MsXG4gICAgICBpc0JlZ2lubmluZyA9IHN3aXBlci5pc0JlZ2lubmluZyxcbiAgICAgIGlzRW5kID0gc3dpcGVyLmlzRW5kO1xuICB2YXIgd2FzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmc7XG4gIHZhciB3YXNFbmQgPSBpc0VuZDtcblxuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBwcm9ncmVzcyA9IDA7XG4gICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgIGlzRW5kID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gICAgaXNCZWdpbm5pbmcgPSBwcm9ncmVzcyA8PSAwO1xuICAgIGlzRW5kID0gcHJvZ3Jlc3MgPj0gMTtcbiAgfVxuXG4gICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIsIHtcbiAgICBwcm9ncmVzczogcHJvZ3Jlc3MsXG4gICAgaXNCZWdpbm5pbmc6IGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kOiBpc0VuZFxuICB9KTtcbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkgfHwgcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5hdXRvSGVpZ2h0KSBzd2lwZXIudXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKTtcblxuICBpZiAoaXNCZWdpbm5pbmcgJiYgIXdhc0JlZ2lubmluZykge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEJlZ2lubmluZyB0b0VkZ2UnKTtcbiAgfVxuXG4gIGlmIChpc0VuZCAmJiAhd2FzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoRW5kIHRvRWRnZScpO1xuICB9XG5cbiAgaWYgKHdhc0JlZ2lubmluZyAmJiAhaXNCZWdpbm5pbmcgfHwgd2FzRW5kICYmICFpc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdmcm9tRWRnZScpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlU2l6ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciB3aWR0aDtcbiAgdmFyIGhlaWdodDtcbiAgdmFyICRlbCA9IHN3aXBlci4kZWw7XG5cbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLndpZHRoICE9PSBudWxsKSB7XG4gICAgd2lkdGggPSBzd2lwZXIucGFyYW1zLndpZHRoO1xuICB9IGVsc2Uge1xuICAgIHdpZHRoID0gJGVsWzBdLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09IG51bGwpIHtcbiAgICBoZWlnaHQgPSBzd2lwZXIucGFyYW1zLmhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBoZWlnaHQgPSAkZWxbMF0uY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgaWYgKHdpZHRoID09PSAwICYmIHN3aXBlci5pc0hvcml6b250YWwoKSB8fCBoZWlnaHQgPT09IDAgJiYgc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBTdWJ0cmFjdCBwYWRkaW5nc1xuXG5cbiAgd2lkdGggPSB3aWR0aCAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctbGVmdCcpIHx8IDAsIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLCAxMCk7XG4gIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctdG9wJykgfHwgMCwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1ib3R0b20nKSB8fCAwLCAxMCk7XG4gIGlmIChOdW1iZXIuaXNOYU4od2lkdGgpKSB3aWR0aCA9IDA7XG4gIGlmIChOdW1iZXIuaXNOYU4oaGVpZ2h0KSkgaGVpZ2h0ID0gMDtcbiAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlciwge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBzaXplOiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB3aWR0aCA6IGhlaWdodFxuICB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVwZGF0ZVNsaWRlcztcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICB2YXIgZ2V0RGlyZWN0aW9uTGFiZWwgPSBmdW5jdGlvbiBnZXREaXJlY3Rpb25MYWJlbChwcm9wZXJ0eSkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogJ2hlaWdodCcsXG4gICAgICAnbWFyZ2luLXRvcCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAnbWFyZ2luLWJvdHRvbSAnOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICdtYXJnaW4tbGVmdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAncGFkZGluZy1sZWZ0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICdwYWRkaW5nLXJpZ2h0JzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICdtYXJnaW5SaWdodCc6ICdtYXJnaW5Cb3R0b20nXG4gICAgfVtwcm9wZXJ0eV07XG4gIH07XG5cbiAgdmFyIGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUgPSBmdW5jdGlvbiBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKG5vZGUsIGxhYmVsKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobm9kZS5nZXRQcm9wZXJ0eVZhbHVlKGdldERpcmVjdGlvbkxhYmVsKGxhYmVsKSkgfHwgMCk7XG4gIH07XG5cbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBzd2lwZXJTaXplID0gc3dpcGVyLnNpemUsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgd3JvbmdSVEwgPSBzd2lwZXIud3JvbmdSVEw7XG4gIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICB2YXIgcHJldmlvdXNTbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gIHZhciBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgdmFyIHNsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzbGlkZXMubGVuZ3RoO1xuICB2YXIgc25hcEdyaWQgPSBbXTtcbiAgdmFyIHNsaWRlc0dyaWQgPSBbXTtcbiAgdmFyIHNsaWRlc1NpemVzR3JpZCA9IFtdO1xuXG4gIGZ1bmN0aW9uIHNsaWRlc0Zvck1hcmdpbihzbGlkZUVsLCBzbGlkZUluZGV4KSB7XG4gICAgaWYgKCFwYXJhbXMuY3NzTW9kZSkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoc2xpZGVJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlO1xuXG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cblxuICB2YXIgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XG5cbiAgaWYgKHR5cGVvZiBvZmZzZXRBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIHZhciBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcbiAgdmFyIHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCA9IHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aDtcbiAgdmFyIHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gIHZhciBzbGlkZVBvc2l0aW9uID0gLW9mZnNldEJlZm9yZTtcbiAgdmFyIHByZXZTbGlkZVNpemUgPSAwO1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIGlmICh0eXBlb2Ygc3dpcGVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzd2lwZXJTaXplO1xuICB9XG5cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjsgLy8gcmVzZXQgbWFyZ2luc1xuXG4gIGlmIChydGwpIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpbkxlZnQ6ICcnLFxuICAgIG1hcmdpblRvcDogJydcbiAgfSk7ZWxzZSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5SaWdodDogJycsXG4gICAgbWFyZ2luQm90dG9tOiAnJ1xuICB9KTtcbiAgdmFyIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3M7XG5cbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgaWYgKE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgPT09IHNsaWRlc0xlbmd0aCAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gc2xpZGVzTGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5jZWlsKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycpIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLm1heChzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzLCBwYXJhbXMuc2xpZGVzUGVyVmlldyAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pO1xuICAgIH1cbiAgfSAvLyBDYWxjIHNsaWRlc1xuXG5cbiAgdmFyIHNsaWRlU2l6ZTtcbiAgdmFyIHNsaWRlc1BlckNvbHVtbiA9IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gIHZhciBzbGlkZXNQZXJSb3cgPSBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICB2YXIgbnVtRnVsbENvbHVtbnMgPSBNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZVNpemUgPSAwO1xuICAgIHZhciBzbGlkZSA9IHNsaWRlcy5lcShpKTtcblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgLy8gU2V0IHNsaWRlcyBvcmRlclxuICAgICAgdmFyIG5ld1NsaWRlT3JkZXJJbmRleCA9IHZvaWQgMDtcbiAgICAgIHZhciBjb2x1bW4gPSB2b2lkIDA7XG4gICAgICB2YXIgcm93ID0gdm9pZCAwO1xuXG4gICAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdyb3cnICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEpIHtcbiAgICAgICAgdmFyIGdyb3VwSW5kZXggPSBNYXRoLmZsb29yKGkgLyAocGFyYW1zLnNsaWRlc1Blckdyb3VwICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbikpO1xuICAgICAgICB2YXIgc2xpZGVJbmRleEluR3JvdXAgPSBpIC0gcGFyYW1zLnNsaWRlc1BlckNvbHVtbiAqIHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIGdyb3VwSW5kZXg7XG4gICAgICAgIHZhciBjb2x1bW5zSW5Hcm91cCA9IGdyb3VwSW5kZXggPT09IDAgPyBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgOiBNYXRoLm1pbihNYXRoLmNlaWwoKHNsaWRlc0xlbmd0aCAtIGdyb3VwSW5kZXggKiBzbGlkZXNQZXJDb2x1bW4gKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIC8gc2xpZGVzUGVyQ29sdW1uKSwgcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcihzbGlkZUluZGV4SW5Hcm91cCAvIGNvbHVtbnNJbkdyb3VwKTtcbiAgICAgICAgY29sdW1uID0gc2xpZGVJbmRleEluR3JvdXAgLSByb3cgKiBjb2x1bW5zSW5Hcm91cCArIGdyb3VwSW5kZXggKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgIG5ld1NsaWRlT3JkZXJJbmRleCA9IGNvbHVtbiArIHJvdyAqIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgLyBzbGlkZXNQZXJDb2x1bW47XG4gICAgICAgIHNsaWRlLmNzcyh7XG4gICAgICAgICAgJy13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXAnOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgJy1tb3otYm94LW9yZGluYWwtZ3JvdXAnOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgJy1tcy1mbGV4LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICctd2Via2l0LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgIG9yZGVyOiBuZXdTbGlkZU9yZGVySW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJykge1xuICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICByb3cgPSBpIC0gY29sdW1uICogc2xpZGVzUGVyQ29sdW1uO1xuXG4gICAgICAgIGlmIChjb2x1bW4gPiBudW1GdWxsQ29sdW1ucyB8fCBjb2x1bW4gPT09IG51bUZ1bGxDb2x1bW5zICYmIHJvdyA9PT0gc2xpZGVzUGVyQ29sdW1uIC0gMSkge1xuICAgICAgICAgIHJvdyArPSAxO1xuXG4gICAgICAgICAgaWYgKHJvdyA+PSBzbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlclJvdyk7XG4gICAgICAgIGNvbHVtbiA9IGkgLSByb3cgKiBzbGlkZXNQZXJSb3c7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlLmNzcyhnZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luLXRvcCcpLCByb3cgIT09IDAgJiYgcGFyYW1zLnNwYWNlQmV0d2VlbiAmJiBwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiKTtcbiAgICB9XG5cbiAgICBpZiAoc2xpZGUuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICB2YXIgc2xpZGVTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNsaWRlWzBdKTtcbiAgICAgIHZhciBjdXJyZW50VHJhbnNmb3JtID0gc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtO1xuICAgICAgdmFyIGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm07XG5cbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgICBzbGlkZVNpemUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5vdXRlcldpZHRoKHRydWUpIDogc2xpZGUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdmFyIHdpZHRoID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3dpZHRoJyk7XG4gICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1sZWZ0Jyk7XG4gICAgICAgIHZhciBtYXJnaW5SaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgdmFyIGJveFNpemluZyA9IHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JveC1zaXppbmcnKTtcblxuICAgICAgICBpZiAoYm94U2l6aW5nICYmIGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9zbGlkZSQgPSBzbGlkZVswXSxcbiAgICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfc2xpZGUkLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICBvZmZzZXRXaWR0aCA9IF9zbGlkZSQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodCArIChvZmZzZXRXaWR0aCAtIGNsaWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50VHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBjdXJyZW50V2ViS2l0VHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVNpemUgPSAoc3dpcGVyU2l6ZSAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSAvIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcblxuICAgICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGVbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc2xpZGVTaXplICsgXCJweFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgfVxuXG4gICAgc2xpZGVzU2l6ZXNHcmlkLnB1c2goc2xpZGVTaXplKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplIC8gMiArIHByZXZTbGlkZVNpemUgLyAyICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKHByZXZTbGlkZVNpemUgPT09IDAgJiYgaSAhPT0gMCkgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSBzd2lwZXJTaXplIC8gMiAtIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKE1hdGguYWJzKHNsaWRlUG9zaXRpb24pIDwgMSAvIDEwMDApIHNsaWRlUG9zaXRpb24gPSAwO1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pO1xuICAgICAgaWYgKGluZGV4ICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoKGluZGV4IC0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGluZGV4KSkgJSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgfVxuXG4gICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICBwcmV2U2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgIGluZGV4ICs9IDE7XG4gIH1cblxuICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLm1heChzd2lwZXIudmlydHVhbFNpemUsIHN3aXBlclNpemUpICsgb2Zmc2V0QWZ0ZXI7XG4gIHZhciBuZXdTbGlkZXNHcmlkO1xuXG4gIGlmIChydGwgJiYgd3JvbmdSVEwgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2NvdmVyZmxvdycpKSB7XG4gICAgJHdyYXBwZXJFbC5jc3Moe1xuICAgICAgd2lkdGg6IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCJcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2V0V3JhcHBlclNpemUpIHtcbiAgICB2YXIgXyR3cmFwcGVyRWwkY3NzO1xuXG4gICAgJHdyYXBwZXJFbC5jc3MoKF8kd3JhcHBlckVsJGNzcyA9IHt9LCBfJHdyYXBwZXJFbCRjc3NbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiwgXyR3cmFwcGVyRWwkY3NzKSk7XG4gIH1cblxuICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICB2YXIgXyR3cmFwcGVyRWwkY3NzMjtcblxuICAgIHN3aXBlci52aXJ0dWFsU2l6ZSA9IChzbGlkZVNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKSAqIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3M7XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5jZWlsKHN3aXBlci52aXJ0dWFsU2l6ZSAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIC0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICAkd3JhcHBlckVsLmNzcygoXyR3cmFwcGVyRWwkY3NzMiA9IHt9LCBfJHdyYXBwZXJFbCRjc3MyW2dldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCIsIF8kd3JhcHBlckVsJGNzczIpKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHNuYXBHcmlkLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICAgICB2YXIgc2xpZGVzR3JpZEl0ZW0gPSBzbmFwR3JpZFtfaV07XG4gICAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgICBpZiAoc25hcEdyaWRbX2ldIDwgc3dpcGVyLnZpcnR1YWxTaXplICsgc25hcEdyaWRbMF0pIG5ld1NsaWRlc0dyaWQucHVzaChzbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcblxuXG4gIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgc25hcEdyaWQubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICAgdmFyIF9zbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW19pMl07XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocykgX3NsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihfc2xpZGVzR3JpZEl0ZW0pO1xuXG4gICAgICBpZiAoc25hcEdyaWRbX2kyXSA8PSBzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSB7XG4gICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChfc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcblxuICAgIGlmIChNYXRoLmZsb29yKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIC0gTWF0aC5mbG9vcihzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSkgPiAxKSB7XG4gICAgICBzbmFwR3JpZC5wdXNoKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzbmFwR3JpZC5sZW5ndGggPT09IDApIHNuYXBHcmlkID0gWzBdO1xuXG4gIGlmIChwYXJhbXMuc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgdmFyIF9zbGlkZXMkZmlsdGVyJGNzcztcblxuICAgIHZhciBrZXkgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgcnRsID8gJ21hcmdpbkxlZnQnIDogZ2V0RGlyZWN0aW9uTGFiZWwoJ21hcmdpblJpZ2h0Jyk7XG4gICAgc2xpZGVzLmZpbHRlcihzbGlkZXNGb3JNYXJnaW4pLmNzcygoX3NsaWRlcyRmaWx0ZXIkY3NzID0ge30sIF9zbGlkZXMkZmlsdGVyJGNzc1trZXldID0gc3BhY2VCZXR3ZWVuICsgXCJweFwiLCBfc2xpZGVzJGZpbHRlciRjc3MpKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzQm91bmRzKSB7XG4gICAgdmFyIGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZVNpemVWYWx1ZSkge1xuICAgICAgYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChwYXJhbXMuc3BhY2VCZXR3ZWVuID8gcGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApO1xuICAgIH0pO1xuICAgIGFsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICB2YXIgbWF4U25hcCA9IGFsbFNsaWRlc1NpemUgLSBzd2lwZXJTaXplO1xuICAgIHNuYXBHcmlkID0gc25hcEdyaWQubWFwKGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICBpZiAoc25hcCA8IDApIHJldHVybiAtb2Zmc2V0QmVmb3JlO1xuICAgICAgaWYgKHNuYXAgPiBtYXhTbmFwKSByZXR1cm4gbWF4U25hcCArIG9mZnNldEFmdGVyO1xuICAgICAgcmV0dXJuIHNuYXA7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNlbnRlckluc3VmZmljaWVudFNsaWRlcykge1xuICAgIHZhciBfYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlU2l6ZVZhbHVlKSB7XG4gICAgICBfYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChwYXJhbXMuc3BhY2VCZXR3ZWVuID8gcGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApO1xuICAgIH0pO1xuICAgIF9hbGxTbGlkZXNTaXplIC09IHBhcmFtcy5zcGFjZUJldHdlZW47XG5cbiAgICBpZiAoX2FsbFNsaWRlc1NpemUgPCBzd2lwZXJTaXplKSB7XG4gICAgICB2YXIgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBfYWxsU2xpZGVzU2l6ZSkgLyAyO1xuICAgICAgc25hcEdyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCwgc25hcEluZGV4KSB7XG4gICAgICAgIHNuYXBHcmlkW3NuYXBJbmRleF0gPSBzbmFwIC0gYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgICBzbGlkZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXAsIHNuYXBJbmRleCkge1xuICAgICAgICBzbGlkZXNHcmlkW3NuYXBJbmRleF0gPSBzbmFwICsgYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlciwge1xuICAgIHNsaWRlczogc2xpZGVzLFxuICAgIHNuYXBHcmlkOiBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkOiBzbGlkZXNHcmlkLFxuICAgIHNsaWRlc1NpemVzR3JpZDogc2xpZGVzU2l6ZXNHcmlkXG4gIH0pO1xuXG4gIGlmIChzbGlkZXNMZW5ndGggIT09IHByZXZpb3VzU2xpZGVzTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbmFwR3JpZExlbmd0aCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgc3dpcGVyLmVtaXQoJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc2xpZGVzR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlU2xpZGVzQ2xhc3NlcztcblxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcmVhbEluZGV4ID0gc3dpcGVyLnJlYWxJbmRleDtcbiAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlTmV4dENsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gIHZhciBhY3RpdmVTbGlkZTtcblxuICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBhY3RpdmVJbmRleCArIFwiXFxcIl1cIik7XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpO1xuICB9IC8vIEFjdGl2ZSBjbGFzc2VzXG5cblxuICBhY3RpdmVTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgaWYgKGFjdGl2ZVNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9IC8vIE5leHQgU2xpZGVcblxuXG4gIHZhciBuZXh0U2xpZGUgPSBhY3RpdmVTbGlkZS5uZXh0QWxsKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wICYmIG5leHRTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBuZXh0U2xpZGUgPSBzbGlkZXMuZXEoMCk7XG4gICAgbmV4dFNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gIH0gLy8gUHJldiBTbGlkZVxuXG5cbiAgdmFyIHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXZBbGwoXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3AgJiYgcHJldlNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHByZXZTbGlkZSA9IHNsaWRlcy5lcSgtMSk7XG4gICAgcHJldlNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAobmV4dFNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgbmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5lbWl0U2xpZGVzQ2xhc3NlcygpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlU2xpZGVzT2Zmc2V0O1xuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNPZmZzZXQoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlU2xpZGVzUHJvZ3Jlc3M7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gIGlmICh0cmFuc2xhdGUgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZSA9IHRoaXMgJiYgdGhpcy50cmFuc2xhdGUgfHwgMDtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICBpZiAoc2xpZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgdmFyIG9mZnNldENlbnRlciA9IC10cmFuc2xhdGU7XG4gIGlmIChydGwpIG9mZnNldENlbnRlciA9IHRyYW5zbGF0ZTsgLy8gVmlzaWJsZSBTbGlkZXNcblxuICBzbGlkZXMucmVtb3ZlQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzID0gW107XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgdmFyIHNsaWRlUHJvZ3Jlc3MgPSAob2Zmc2V0Q2VudGVyICsgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pO1xuXG4gICAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkgfHwgcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICB2YXIgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KTtcbiAgICAgIHZhciBzbGlkZUFmdGVyID0gc2xpZGVCZWZvcmUgKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgICAgdmFyIGlzVmlzaWJsZSA9IHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPCBzd2lwZXIuc2l6ZSAtIDEgfHwgc2xpZGVBZnRlciA+IDEgJiYgc2xpZGVBZnRlciA8PSBzd2lwZXIuc2l6ZSB8fCBzbGlkZUJlZm9yZSA8PSAwICYmIHNsaWRlQWZ0ZXIgPj0gc3dpcGVyLnNpemU7XG5cbiAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICBzbGlkZXMuZXEoaSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzbGlkZS5wcm9ncmVzcyA9IHJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgfVxuXG4gIHN3aXBlci52aXNpYmxlU2xpZGVzID0gKDAsIF9kb20uZGVmYXVsdCkoc3dpcGVyLnZpc2libGVTbGlkZXMpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBDb3ZlcmZsb3cgPSB7XG4gIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzd2lwZXJXaWR0aCA9IHN3aXBlci53aWR0aCxcbiAgICAgICAgc3dpcGVySGVpZ2h0ID0gc3dpcGVyLmhlaWdodCxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgICAgc2xpZGVzU2l6ZXNHcmlkID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZDtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5jb3ZlcmZsb3dFZmZlY3Q7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICB2YXIgdHJhbnNmb3JtID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICB2YXIgY2VudGVyID0gaXNIb3Jpem9udGFsID8gLXRyYW5zZm9ybSArIHN3aXBlcldpZHRoIC8gMiA6IC10cmFuc2Zvcm0gKyBzd2lwZXJIZWlnaHQgLyAyO1xuICAgIHZhciByb3RhdGUgPSBpc0hvcml6b250YWwgPyBwYXJhbXMucm90YXRlIDogLXBhcmFtcy5yb3RhdGU7XG4gICAgdmFyIHRyYW5zbGF0ZSA9IHBhcmFtcy5kZXB0aDsgLy8gRWFjaCBzbGlkZSBvZmZzZXQgZnJvbSBjZW50ZXJcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgIHZhciBzbGlkZVNpemUgPSBzbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICB2YXIgc2xpZGVPZmZzZXQgPSAkc2xpZGVFbFswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIHZhciBvZmZzZXRNdWx0aXBsaWVyID0gKGNlbnRlciAtIHNsaWRlT2Zmc2V0IC0gc2xpZGVTaXplIC8gMikgLyBzbGlkZVNpemUgKiBwYXJhbXMubW9kaWZpZXI7XG4gICAgICB2YXIgcm90YXRlWSA9IGlzSG9yaXpvbnRhbCA/IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgdmFyIHJvdGF0ZVggPSBpc0hvcml6b250YWwgPyAwIDogcm90YXRlICogb2Zmc2V0TXVsdGlwbGllcjsgLy8gdmFyIHJvdGF0ZVogPSAwXG5cbiAgICAgIHZhciB0cmFuc2xhdGVaID0gLXRyYW5zbGF0ZSAqIE1hdGguYWJzKG9mZnNldE11bHRpcGxpZXIpO1xuICAgICAgdmFyIHN0cmV0Y2ggPSBwYXJhbXMuc3RyZXRjaDsgLy8gQWxsb3cgcGVyY2VudGFnZSB0byBtYWtlIGEgcmVsYXRpdmUgc3RyZXRjaCBmb3IgcmVzcG9uc2l2ZSBzbGlkZXJzXG5cbiAgICAgIGlmICh0eXBlb2Ygc3RyZXRjaCA9PT0gJ3N0cmluZycgJiYgc3RyZXRjaC5pbmRleE9mKCclJykgIT09IC0xKSB7XG4gICAgICAgIHN0cmV0Y2ggPSBwYXJzZUZsb2F0KHBhcmFtcy5zdHJldGNoKSAvIDEwMCAqIHNsaWRlU2l6ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zbGF0ZVkgPSBpc0hvcml6b250YWwgPyAwIDogc3RyZXRjaCAqIG9mZnNldE11bHRpcGxpZXI7XG4gICAgICB2YXIgdHJhbnNsYXRlWCA9IGlzSG9yaXpvbnRhbCA/IHN0cmV0Y2ggKiBvZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgIHZhciBzY2FsZSA9IDEgLSAoMSAtIHBhcmFtcy5zY2FsZSkgKiBNYXRoLmFicyhvZmZzZXRNdWx0aXBsaWVyKTsgLy8gRml4IGZvciB1bHRyYSBzbWFsbCB2YWx1ZXNcblxuICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpIDwgMC4wMDEpIHRyYW5zbGF0ZVggPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVkpIDwgMC4wMDEpIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVopIDwgMC4wMDEpIHRyYW5zbGF0ZVogPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVkpIDwgMC4wMDEpIHJvdGF0ZVkgPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVgpIDwgMC4wMDEpIHJvdGF0ZVggPSAwO1xuICAgICAgaWYgKE1hdGguYWJzKHNjYWxlKSA8IDAuMDAxKSBzY2FsZSA9IDA7XG4gICAgICB2YXIgc2xpZGVUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgdHJhbnNsYXRlWCArIFwicHgsXCIgKyB0cmFuc2xhdGVZICsgXCJweCxcIiArIHRyYW5zbGF0ZVogKyBcInB4KSAgcm90YXRlWChcIiArIHJvdGF0ZVggKyBcImRlZykgcm90YXRlWShcIiArIHJvdGF0ZVkgKyBcImRlZykgc2NhbGUoXCIgKyBzY2FsZSArIFwiKVwiO1xuICAgICAgJHNsaWRlRWwudHJhbnNmb3JtKHNsaWRlVHJhbnNmb3JtKTtcbiAgICAgICRzbGlkZUVsWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKG9mZnNldE11bHRpcGxpZXIpKSArIDE7XG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIHZhciAkc2hhZG93QmVmb3JlRWwgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgdmFyICRzaGFkb3dBZnRlckVsID0gaXNIb3Jpem9udGFsID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuXG4gICAgICAgIGlmICgkc2hhZG93QmVmb3JlRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJHNoYWRvd0JlZm9yZUVsID0gKDAsIF9kb20uZGVmYXVsdCkoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKGlzSG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnKSArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKCRzaGFkb3dCZWZvcmVFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNoYWRvd0FmdGVyRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJHNoYWRvd0FmdGVyRWwgPSAoMCwgX2RvbS5kZWZhdWx0KShcIjxkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZS1zaGFkb3ctXCIgKyAoaXNIb3Jpem9udGFsID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKCRzaGFkb3dBZnRlckVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc2hhZG93QmVmb3JlRWwubGVuZ3RoKSAkc2hhZG93QmVmb3JlRWxbMF0uc3R5bGUub3BhY2l0eSA9IG9mZnNldE11bHRpcGxpZXIgPiAwID8gb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICAgIGlmICgkc2hhZG93QWZ0ZXJFbC5sZW5ndGgpICRzaGFkb3dBZnRlckVsWzBdLnN0eWxlLm9wYWNpdHkgPSAtb2Zmc2V0TXVsdGlwbGllciA+IDAgPyAtb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLnNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ2VmZmVjdC1jb3ZlcmZsb3cnLFxuICBwYXJhbXM6IHtcbiAgICBjb3ZlcmZsb3dFZmZlY3Q6IHtcbiAgICAgIHJvdGF0ZTogNTAsXG4gICAgICBzdHJldGNoOiAwLFxuICAgICAgZGVwdGg6IDEwMCxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgbW9kaWZpZXI6IDEsXG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWVcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgY292ZXJmbG93RWZmZWN0OiBfZXh0ZW5kcyh7fSwgQ292ZXJmbG93KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjb3ZlcmZsb3cnKSByZXR1cm47XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiY292ZXJmbG93XCIpO1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIjNkXCIpO1xuICAgICAgc3dpcGVyLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICB9LFxuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY292ZXJmbG93JykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmNvdmVyZmxvd0VmZmVjdC5zZXRUcmFuc2xhdGUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oc3dpcGVyLCBkdXJhdGlvbikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY292ZXJmbG93JykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmNvdmVyZmxvd0VmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgQ3ViZSA9IHtcbiAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgICAgc3dpcGVyV2lkdGggPSBzd2lwZXIud2lkdGgsXG4gICAgICAgIHN3aXBlckhlaWdodCA9IHN3aXBlci5oZWlnaHQsXG4gICAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICAgIHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZSxcbiAgICAgICAgYnJvd3NlciA9IHN3aXBlci5icm93c2VyO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmN1YmVFZmZlY3Q7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICB2YXIgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgdmFyIHdyYXBwZXJSb3RhdGUgPSAwO1xuICAgIHZhciAkY3ViZVNoYWRvd0VsO1xuXG4gICAgaWYgKHBhcmFtcy5zaGFkb3cpIHtcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICR3cmFwcGVyRWwuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuXG4gICAgICAgIGlmICgkY3ViZVNoYWRvd0VsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICRjdWJlU2hhZG93RWwgPSAoMCwgX2RvbS5kZWZhdWx0KSgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKCRjdWJlU2hhZG93RWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGN1YmVTaGFkb3dFbC5jc3Moe1xuICAgICAgICAgIGhlaWdodDogc3dpcGVyV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkY3ViZVNoYWRvd0VsID0gJGVsLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcblxuICAgICAgICBpZiAoJGN1YmVTaGFkb3dFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkY3ViZVNoYWRvd0VsID0gKDAsIF9kb20uZGVmYXVsdCkoJzxkaXYgY2xhc3M9XCJzd2lwZXItY3ViZS1zaGFkb3dcIj48L2Rpdj4nKTtcbiAgICAgICAgICAkZWwuYXBwZW5kKCRjdWJlU2hhZG93RWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgIHZhciBzbGlkZUluZGV4ID0gaTtcblxuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gcGFyc2VJbnQoJHNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xpZGVBbmdsZSA9IHNsaWRlSW5kZXggKiA5MDtcbiAgICAgIHZhciByb3VuZCA9IE1hdGguZmxvb3Ioc2xpZGVBbmdsZSAvIDM2MCk7XG5cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgc2xpZGVBbmdsZSA9IC1zbGlkZUFuZ2xlO1xuICAgICAgICByb3VuZCA9IE1hdGguZmxvb3IoLXNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigkc2xpZGVFbFswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgIHZhciB0eCA9IDA7XG4gICAgICB2YXIgdHkgPSAwO1xuICAgICAgdmFyIHR6ID0gMDtcblxuICAgICAgaWYgKHNsaWRlSW5kZXggJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gLXJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICAgIHR6ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoKHNsaWRlSW5kZXggLSAxKSAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSAwO1xuICAgICAgICB0eiA9IC1yb3VuZCAqIDQgKiBzd2lwZXJTaXplO1xuICAgICAgfSBlbHNlIGlmICgoc2xpZGVJbmRleCAtIDIpICUgNCA9PT0gMCkge1xuICAgICAgICB0eCA9IHN3aXBlclNpemUgKyByb3VuZCAqIDQgKiBzd2lwZXJTaXplO1xuICAgICAgICB0eiA9IHN3aXBlclNpemU7XG4gICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMykgJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gLXN3aXBlclNpemU7XG4gICAgICAgIHR6ID0gMyAqIHN3aXBlclNpemUgKyBzd2lwZXJTaXplICogNCAqIHJvdW5kO1xuICAgICAgfVxuXG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIHR4ID0gLXR4O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzSG9yaXpvbnRhbCkge1xuICAgICAgICB0eSA9IHR4O1xuICAgICAgICB0eCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBcInJvdGF0ZVgoXCIgKyAoaXNIb3Jpem9udGFsID8gMCA6IC1zbGlkZUFuZ2xlKSArIFwiZGVnKSByb3RhdGVZKFwiICsgKGlzSG9yaXpvbnRhbCA/IHNsaWRlQW5nbGUgOiAwKSArIFwiZGVnKSB0cmFuc2xhdGUzZChcIiArIHR4ICsgXCJweCwgXCIgKyB0eSArIFwicHgsIFwiICsgdHogKyBcInB4KVwiO1xuXG4gICAgICBpZiAocHJvZ3Jlc3MgPD0gMSAmJiBwcm9ncmVzcyA+IC0xKSB7XG4gICAgICAgIHdyYXBwZXJSb3RhdGUgPSBzbGlkZUluZGV4ICogOTAgKyBwcm9ncmVzcyAqIDkwO1xuICAgICAgICBpZiAocnRsKSB3cmFwcGVyUm90YXRlID0gLXNsaWRlSW5kZXggKiA5MCAtIHByb2dyZXNzICogOTA7XG4gICAgICB9XG5cbiAgICAgICRzbGlkZUVsLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuXG4gICAgICBpZiAocGFyYW1zLnNsaWRlU2hhZG93cykge1xuICAgICAgICAvLyBTZXQgc2hhZG93c1xuICAgICAgICB2YXIgc2hhZG93QmVmb3JlID0gaXNIb3Jpem9udGFsID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wJyk7XG4gICAgICAgIHZhciBzaGFkb3dBZnRlciA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcblxuICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICgwLCBfZG9tLmRlZmF1bHQpKFwiPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlLXNoYWRvdy1cIiArIChpc0hvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJykgKyBcIlxcXCI+PC9kaXY+XCIpO1xuICAgICAgICAgICRzbGlkZUVsLmFwcGVuZChzaGFkb3dCZWZvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNoYWRvd0FmdGVyID0gKDAsIF9kb20uZGVmYXVsdCkoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKGlzSG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJykgKyBcIlxcXCI+PC9kaXY+XCIpO1xuICAgICAgICAgICRzbGlkZUVsLmFwcGVuZChzaGFkb3dBZnRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgICR3cmFwcGVyRWwuY3NzKHtcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOiBcIjUwJSA1MCUgLVwiICsgc3dpcGVyU2l6ZSAvIDIgKyBcInB4XCIsXG4gICAgICAnLW1vei10cmFuc2Zvcm0tb3JpZ2luJzogXCI1MCUgNTAlIC1cIiArIHN3aXBlclNpemUgLyAyICsgXCJweFwiLFxuICAgICAgJy1tcy10cmFuc2Zvcm0tb3JpZ2luJzogXCI1MCUgNTAlIC1cIiArIHN3aXBlclNpemUgLyAyICsgXCJweFwiLFxuICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBcIjUwJSA1MCUgLVwiICsgc3dpcGVyU2l6ZSAvIDIgKyBcInB4XCJcbiAgICB9KTtcblxuICAgIGlmIChwYXJhbXMuc2hhZG93KSB7XG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICRjdWJlU2hhZG93RWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIChzd2lwZXJXaWR0aCAvIDIgKyBwYXJhbXMuc2hhZG93T2Zmc2V0KSArIFwicHgsIFwiICsgLXN3aXBlcldpZHRoIC8gMiArIFwicHgpIHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooMGRlZykgc2NhbGUoXCIgKyBwYXJhbXMuc2hhZG93U2NhbGUgKyBcIilcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2hhZG93QW5nbGUgPSBNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAtIE1hdGguZmxvb3IoTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLyA5MCkgKiA5MDtcbiAgICAgICAgdmFyIG11bHRpcGxpZXIgPSAxLjUgLSAoTWF0aC5zaW4oc2hhZG93QW5nbGUgKiAyICogTWF0aC5QSSAvIDM2MCkgLyAyICsgTWF0aC5jb3Moc2hhZG93QW5nbGUgKiAyICogTWF0aC5QSSAvIDM2MCkgLyAyKTtcbiAgICAgICAgdmFyIHNjYWxlMSA9IHBhcmFtcy5zaGFkb3dTY2FsZTtcbiAgICAgICAgdmFyIHNjYWxlMiA9IHBhcmFtcy5zaGFkb3dTY2FsZSAvIG11bHRpcGxpZXI7XG4gICAgICAgIHZhciBvZmZzZXQgPSBwYXJhbXMuc2hhZG93T2Zmc2V0O1xuICAgICAgICAkY3ViZVNoYWRvd0VsLnRyYW5zZm9ybShcInNjYWxlM2QoXCIgKyBzY2FsZTEgKyBcIiwgMSwgXCIgKyBzY2FsZTIgKyBcIikgdHJhbnNsYXRlM2QoMHB4LCBcIiArIChzd2lwZXJIZWlnaHQgLyAyICsgb2Zmc2V0KSArIFwicHgsIFwiICsgLXN3aXBlckhlaWdodCAvIDIgLyBzY2FsZTIgKyBcInB4KSByb3RhdGVYKC05MGRlZylcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHpGYWN0b3IgPSBicm93c2VyLmlzU2FmYXJpIHx8IGJyb3dzZXIuaXNXZWJWaWV3ID8gLXN3aXBlclNpemUgLyAyIDogMDtcbiAgICAkd3JhcHBlckVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDBweCwwLFwiICsgekZhY3RvciArIFwicHgpIHJvdGF0ZVgoXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gMCA6IHdyYXBwZXJSb3RhdGUpICsgXCJkZWcpIHJvdGF0ZVkoXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXdyYXBwZXJSb3RhdGUgOiAwKSArIFwiZGVnKVwiKTtcbiAgfSxcbiAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsLFxuICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgIHNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmN1YmVFZmZlY3Quc2hhZG93ICYmICFzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICRlbC5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnZWZmZWN0LWN1YmUnLFxuICBwYXJhbXM6IHtcbiAgICBjdWJlRWZmZWN0OiB7XG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICBzaGFkb3c6IHRydWUsXG4gICAgICBzaGFkb3dPZmZzZXQ6IDIwLFxuICAgICAgc2hhZG93U2NhbGU6IDAuOTRcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgY3ViZUVmZmVjdDogX2V4dGVuZHMoe30sIEN1YmUpXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gYmVmb3JlSW5pdChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2N1YmUnKSByZXR1cm47XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiY3ViZVwiKTtcbiAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCIzZFwiKTtcbiAgICAgIHZhciBvdmVyd3JpdGVQYXJhbXMgPSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHJlc2lzdGFuY2VSYXRpbzogMCxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAgIHZpcnR1YWxUcmFuc2xhdGU6IHRydWVcbiAgICAgIH07XG4gICAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2N1YmUnKSByZXR1cm47XG4gICAgICBzd2lwZXIuY3ViZUVmZmVjdC5zZXRUcmFuc2xhdGUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oc3dpcGVyLCBkdXJhdGlvbikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY3ViZScpIHJldHVybjtcbiAgICAgIHN3aXBlci5jdWJlRWZmZWN0LnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgRmFkZSA9IHtcbiAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyICRzbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgIHZhciBvZmZzZXQgPSAkc2xpZGVFbFswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIHZhciB0eCA9IC1vZmZzZXQ7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkgdHggLT0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIHZhciB0eSA9IDA7XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNsaWRlT3BhY2l0eSA9IHN3aXBlci5wYXJhbXMuZmFkZUVmZmVjdC5jcm9zc0ZhZGUgPyBNYXRoLm1heCgxIC0gTWF0aC5hYnMoJHNsaWRlRWxbMF0ucHJvZ3Jlc3MpLCAwKSA6IDEgKyBNYXRoLm1pbihNYXRoLm1heCgkc2xpZGVFbFswXS5wcm9ncmVzcywgLTEpLCAwKTtcbiAgICAgICRzbGlkZUVsLmNzcyh7XG4gICAgICAgIG9wYWNpdHk6IHNsaWRlT3BhY2l0eVxuICAgICAgfSkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB0eCArIFwicHgsIFwiICsgdHkgKyBcInB4LCAwcHgpXCIpO1xuICAgIH1cbiAgfSxcbiAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSAmJiBkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgdmFyIGV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICBzbGlkZXMudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgdHJpZ2dlckV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJ107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyRXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgJHdyYXBwZXJFbC50cmlnZ2VyKHRyaWdnZXJFdmVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdlZmZlY3QtZmFkZScsXG4gIHBhcmFtczoge1xuICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgIGNyb3NzRmFkZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgZmFkZUVmZmVjdDogX2V4dGVuZHMoe30sIEZhZGUpXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gYmVmb3JlSW5pdChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZhZGUnKSByZXR1cm47XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiZmFkZVwiKTtcbiAgICAgIHZhciBvdmVyd3JpdGVQYXJhbXMgPSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogdHJ1ZVxuICAgICAgfTtcbiAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIucGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci5vcmlnaW5hbFBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICB9LFxuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmFkZScpIHJldHVybjtcbiAgICAgIHN3aXBlci5mYWRlRWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihzd2lwZXIsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdmYWRlJykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmZhZGVFZmZlY3Quc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIEZsaXAgPSB7XG4gIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgIHZhciBwcm9ncmVzcyA9ICRzbGlkZUVsWzBdLnByb2dyZXNzO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mbGlwRWZmZWN0LmxpbWl0Um90YXRpb24pIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigkc2xpZGVFbFswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgdmFyIHJvdGF0ZSA9IC0xODAgKiBwcm9ncmVzcztcbiAgICAgIHZhciByb3RhdGVZID0gcm90YXRlO1xuICAgICAgdmFyIHJvdGF0ZVggPSAwO1xuICAgICAgdmFyIHR4ID0gLW9mZnNldDtcbiAgICAgIHZhciB0eSA9IDA7XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgICAgcm90YXRlWCA9IC1yb3RhdGVZO1xuICAgICAgICByb3RhdGVZID0gMDtcbiAgICAgIH0gZWxzZSBpZiAocnRsKSB7XG4gICAgICAgIHJvdGF0ZVkgPSAtcm90YXRlWTtcbiAgICAgIH1cblxuICAgICAgJHNsaWRlRWxbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQocHJvZ3Jlc3MpKSArIHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZsaXBFZmZlY3Quc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIHZhciBzaGFkb3dCZWZvcmUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgdmFyIHNoYWRvd0FmdGVyID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuXG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QmVmb3JlID0gKDAsIF9kb20uZGVmYXVsdCkoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QWZ0ZXIgPSAoMCwgX2RvbS5kZWZhdWx0KShcIjxkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZS1zaGFkb3ctXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KC1wcm9ncmVzcywgMCk7XG4gICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7XG4gICAgICB9XG5cbiAgICAgICRzbGlkZUVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgdHggKyBcInB4LCBcIiArIHR5ICsgXCJweCwgMHB4KSByb3RhdGVYKFwiICsgcm90YXRlWCArIFwiZGVnKSByb3RhdGVZKFwiICsgcm90YXRlWSArIFwiZGVnKVwiKTtcbiAgICB9XG4gIH0sXG4gIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICBzbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICB2YXIgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICAgIHNsaWRlcy5lcShhY3RpdmVJbmRleCkudHJhbnNpdGlvbkVuZChmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47IC8vIGlmICghJCh0aGlzKS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpKSByZXR1cm47XG5cbiAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHZhciB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJFdmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAkd3JhcHBlckVsLnRyaWdnZXIodHJpZ2dlckV2ZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ2VmZmVjdC1mbGlwJyxcbiAgcGFyYW1zOiB7XG4gICAgZmxpcEVmZmVjdDoge1xuICAgICAgc2xpZGVTaGFkb3dzOiB0cnVlLFxuICAgICAgbGltaXRSb3RhdGlvbjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBmbGlwRWZmZWN0OiBfZXh0ZW5kcyh7fSwgRmxpcClcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmxpcCcpIHJldHVybjtcbiAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJmbGlwXCIpO1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIjNkXCIpO1xuICAgICAgdmFyIG92ZXJ3cml0ZVBhcmFtcyA9IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICB2aXJ0dWFsVHJhbnNsYXRlOiB0cnVlXG4gICAgICB9O1xuICAgICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci5wYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdmbGlwJykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmZsaXBFZmZlY3Quc2V0VHJhbnNsYXRlKCk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKHN3aXBlciwgZHVyYXRpb24pIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZsaXAnKSByZXR1cm47XG4gICAgICBzd2lwZXIuZmxpcEVmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgSGFzaE5hdmlnYXRpb24gPSB7XG4gIG9uSGFzaENhbmdlOiBmdW5jdGlvbiBvbkhhc2hDYW5nZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgICBzd2lwZXIuZW1pdCgnaGFzaENoYW5nZScpO1xuICAgIHZhciBuZXdIYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgIHZhciBhY3RpdmVTbGlkZUhhc2ggPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCkuYXR0cignZGF0YS1oYXNoJyk7XG5cbiAgICBpZiAobmV3SGFzaCAhPT0gYWN0aXZlU2xpZGVIYXNoKSB7XG4gICAgICB2YXIgbmV3SW5kZXggPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcyArIFwiW2RhdGEtaGFzaD1cXFwiXCIgKyBuZXdIYXNoICsgXCJcXFwiXVwiKS5pbmRleCgpO1xuICAgICAgaWYgKHR5cGVvZiBuZXdJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4KTtcbiAgICB9XG4gIH0sXG4gIHNldEhhc2g6IGZ1bmN0aW9uIHNldEhhc2goKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgICBpZiAoIXN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCB8fCAhc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5yZXBsYWNlU3RhdGUgJiYgd2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgXCIjXCIgKyBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCkuYXR0cignZGF0YS1oYXNoJykgfHwgJycpO1xuICAgICAgc3dpcGVyLmVtaXQoJ2hhc2hTZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgdmFyIGhhc2ggPSBzbGlkZS5hdHRyKCdkYXRhLWhhc2gnKSB8fCBzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKTtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggPSBoYXNoIHx8ICcnO1xuICAgICAgc3dpcGVyLmVtaXQoJ2hhc2hTZXQnKTtcbiAgICB9XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCB8fCBzd2lwZXIucGFyYW1zLmhpc3RvcnkgJiYgc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBoYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgaWYgKGhhc2gpIHtcbiAgICAgIHZhciBzcGVlZCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBzbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaSk7XG4gICAgICAgIHZhciBzbGlkZUhhc2ggPSBzbGlkZS5hdHRyKCdkYXRhLWhhc2gnKSB8fCBzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKTtcblxuICAgICAgICBpZiAoc2xpZGVIYXNoID09PSBoYXNoICYmICFzbGlkZS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gc2xpZGUuaW5kZXgoKTtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLndhdGNoU3RhdGUpIHtcbiAgICAgICgwLCBfZG9tLmRlZmF1bHQpKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCBzd2lwZXIuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ud2F0Y2hTdGF0ZSkge1xuICAgICAgKDAsIF9kb20uZGVmYXVsdCkod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2UnLCBzd2lwZXIuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpO1xuICAgIH1cbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ2hhc2gtbmF2aWdhdGlvbicsXG4gIHBhcmFtczoge1xuICAgIGhhc2hOYXZpZ2F0aW9uOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHJlcGxhY2VTdGF0ZTogZmFsc2UsXG4gICAgICB3YXRjaFN0YXRlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBoYXNoTmF2aWdhdGlvbjogX2V4dGVuZHMoe1xuICAgICAgICBpbml0aWFsaXplZDogZmFsc2VcbiAgICAgIH0sIEhhc2hOYXZpZ2F0aW9uKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuaGFzaE5hdmlnYXRpb24uZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLnNldEhhc2goKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiBzbGlkZUNoYW5nZShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5zZXRIYXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBIaXN0b3J5ID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkpIHJldHVybjtcblxuICAgIGlmICghd2luZG93Lmhpc3RvcnkgfHwgIXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgICAgc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGhpc3RvcnkgPSBzd2lwZXIuaGlzdG9yeTtcbiAgICBoaXN0b3J5LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBoaXN0b3J5LnBhdGhzID0gSGlzdG9yeS5nZXRQYXRoVmFsdWVzKHN3aXBlci5wYXJhbXMudXJsKTtcbiAgICBpZiAoIWhpc3RvcnkucGF0aHMua2V5ICYmICFoaXN0b3J5LnBhdGhzLnZhbHVlKSByZXR1cm47XG4gICAgaGlzdG9yeS5zY3JvbGxUb1NsaWRlKDAsIGhpc3RvcnkucGF0aHMudmFsdWUsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcblxuICAgIGlmICghc3dpcGVyLnBhcmFtcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcblxuICAgIGlmICghc3dpcGVyLnBhcmFtcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlKTtcbiAgICB9XG4gIH0sXG4gIHNldEhpc3RvcnlQb3BTdGF0ZTogZnVuY3Rpb24gc2V0SGlzdG9yeVBvcFN0YXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5oaXN0b3J5LnBhdGhzID0gSGlzdG9yeS5nZXRQYXRoVmFsdWVzKHN3aXBlci5wYXJhbXMudXJsKTtcbiAgICBzd2lwZXIuaGlzdG9yeS5zY3JvbGxUb1NsaWRlKHN3aXBlci5wYXJhbXMuc3BlZWQsIHN3aXBlci5oaXN0b3J5LnBhdGhzLnZhbHVlLCBmYWxzZSk7XG4gIH0sXG4gIGdldFBhdGhWYWx1ZXM6IGZ1bmN0aW9uIGdldFBhdGhWYWx1ZXModXJsT3ZlcnJpZGUpIHtcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgIHZhciBsb2NhdGlvbjtcblxuICAgIGlmICh1cmxPdmVycmlkZSkge1xuICAgICAgbG9jYXRpb24gPSBuZXcgVVJMKHVybE92ZXJyaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgfVxuXG4gICAgdmFyIHBhdGhBcnJheSA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpLnNwbGl0KCcvJykuZmlsdGVyKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICByZXR1cm4gcGFydCAhPT0gJyc7XG4gICAgfSk7XG4gICAgdmFyIHRvdGFsID0gcGF0aEFycmF5Lmxlbmd0aDtcbiAgICB2YXIga2V5ID0gcGF0aEFycmF5W3RvdGFsIC0gMl07XG4gICAgdmFyIHZhbHVlID0gcGF0aEFycmF5W3RvdGFsIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgfSxcbiAgc2V0SGlzdG9yeTogZnVuY3Rpb24gc2V0SGlzdG9yeShrZXksIGluZGV4KSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgICBpZiAoIXN3aXBlci5oaXN0b3J5LmluaXRpYWxpemVkIHx8ICFzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHZhciBsb2NhdGlvbjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnVybCkge1xuICAgICAgbG9jYXRpb24gPSBuZXcgVVJMKHN3aXBlci5wYXJhbXMudXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgfVxuXG4gICAgdmFyIHNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpbmRleCk7XG4gICAgdmFyIHZhbHVlID0gSGlzdG9yeS5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcblxuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgdmFsdWUgPSBrZXkgKyBcIi9cIiArIHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50U3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZTtcblxuICAgIGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0sIG51bGwsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9LCBudWxsLCB2YWx1ZSk7XG4gICAgfVxuICB9LFxuICBzbHVnaWZ5OiBmdW5jdGlvbiBzbHVnaWZ5KHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC50b1N0cmluZygpLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC9bXlxcdy1dKy9nLCAnJykucmVwbGFjZSgvLS0rL2csICctJykucmVwbGFjZSgvXi0rLywgJycpLnJlcGxhY2UoLy0rJC8sICcnKTtcbiAgfSxcbiAgc2Nyb2xsVG9TbGlkZTogZnVuY3Rpb24gc2Nyb2xsVG9TbGlkZShzcGVlZCwgdmFsdWUsIHJ1bkNhbGxiYWNrcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgICB2YXIgc2xpZGVIaXN0b3J5ID0gSGlzdG9yeS5zbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcblxuICAgICAgICBpZiAoc2xpZGVIaXN0b3J5ID09PSB2YWx1ZSAmJiAhc2xpZGUuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKDAsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgIH1cbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ2hpc3RvcnknLFxuICBwYXJhbXM6IHtcbiAgICBoaXN0b3J5OiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHJlcGxhY2VTdGF0ZTogZmFsc2UsXG4gICAgICBrZXk6ICdzbGlkZXMnXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIGhpc3Rvcnk6IF9leHRlbmRzKHt9LCBIaXN0b3J5KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmhpc3RvcnkuaW5pdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuaGlzdG9yeS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5oaXN0b3J5LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHN3aXBlci5oaXN0b3J5LnNldEhpc3Rvcnkoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmtleSwgc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiBzbGlkZUNoYW5nZShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIuaGlzdG9yeS5pbml0aWFsaXplZCAmJiBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgICAgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeShzd2lwZXIucGFyYW1zLmhpc3Rvcnkua2V5LCBzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBLZXlib2FyZCA9IHtcbiAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIHZhciBlID0gZXZlbnQ7XG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDsgLy8ganF1ZXJ5IGZpeFxuXG4gICAgdmFyIGtjID0gZS5rZXlDb2RlIHx8IGUuY2hhckNvZGU7XG4gICAgdmFyIHBhZ2VVcERvd24gPSBzd2lwZXIucGFyYW1zLmtleWJvYXJkLnBhZ2VVcERvd247XG4gICAgdmFyIGlzUGFnZVVwID0gcGFnZVVwRG93biAmJiBrYyA9PT0gMzM7XG4gICAgdmFyIGlzUGFnZURvd24gPSBwYWdlVXBEb3duICYmIGtjID09PSAzNDtcbiAgICB2YXIgaXNBcnJvd0xlZnQgPSBrYyA9PT0gMzc7XG4gICAgdmFyIGlzQXJyb3dSaWdodCA9IGtjID09PSAzOTtcbiAgICB2YXIgaXNBcnJvd1VwID0ga2MgPT09IDM4O1xuICAgIHZhciBpc0Fycm93RG93biA9IGtjID09PSA0MDsgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBpc0Fycm93UmlnaHQgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiBpc0Fycm93RG93biB8fCBpc1BhZ2VEb3duKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgaXNBcnJvd0xlZnQgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiBpc0Fycm93VXAgfHwgaXNQYWdlVXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lICYmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5vbmx5SW5WaWV3cG9ydCAmJiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93TGVmdCB8fCBpc0Fycm93UmlnaHQgfHwgaXNBcnJvd1VwIHx8IGlzQXJyb3dEb3duKSkge1xuICAgICAgdmFyIGluVmlldyA9IGZhbHNlOyAvLyBDaGVjayB0aGF0IHN3aXBlciBzaG91bGQgYmUgaW5zaWRlIG9mIHZpc2libGUgYXJlYSBvZiB3aW5kb3dcblxuICAgICAgaWYgKHN3aXBlci4kZWwucGFyZW50cyhcIi5cIiArIHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykubGVuZ3RoID4gMCAmJiBzd2lwZXIuJGVsLnBhcmVudHMoXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcbiAgICAgIHZhciBzd2lwZXJXaWR0aCA9ICRlbFswXS5jbGllbnRXaWR0aDtcbiAgICAgIHZhciBzd2lwZXJIZWlnaHQgPSAkZWxbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgdmFyIHN3aXBlck9mZnNldCA9IHN3aXBlci4kZWwub2Zmc2V0KCk7XG4gICAgICBpZiAocnRsKSBzd2lwZXJPZmZzZXQubGVmdCAtPSBzd2lwZXIuJGVsWzBdLnNjcm9sbExlZnQ7XG4gICAgICB2YXIgc3dpcGVyQ29vcmQgPSBbW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wXSwgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyV2lkdGgsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXJIZWlnaHRdLCBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXJXaWR0aCwgc3dpcGVyT2Zmc2V0LnRvcCArIHN3aXBlckhlaWdodF1dO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlckNvb3JkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuXG4gICAgICAgIGlmIChwb2ludFswXSA+PSAwICYmIHBvaW50WzBdIDw9IHdpbmRvd1dpZHRoICYmIHBvaW50WzFdID49IDAgJiYgcG9pbnRbMV0gPD0gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgaWYgKHBvaW50WzBdID09PSAwICYmIHBvaW50WzFdID09PSAwKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWluVmlldykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICBpZiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93TGVmdCB8fCBpc0Fycm93UmlnaHQpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKChpc1BhZ2VEb3duIHx8IGlzQXJyb3dSaWdodCkgJiYgIXJ0bCB8fCAoaXNQYWdlVXAgfHwgaXNBcnJvd0xlZnQpICYmIHJ0bCkgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgaWYgKChpc1BhZ2VVcCB8fCBpc0Fycm93TGVmdCkgJiYgIXJ0bCB8fCAoaXNQYWdlRG93biB8fCBpc0Fycm93UmlnaHQpICYmIHJ0bCkgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93VXAgfHwgaXNBcnJvd0Rvd24pIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGFnZURvd24gfHwgaXNBcnJvd0Rvd24pIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgIGlmIChpc1BhZ2VVcCB8fCBpc0Fycm93VXApIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgna2V5UHJlc3MnLCBrYyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcbiAgZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSByZXR1cm47XG4gICAgKDAsIF9kb20uZGVmYXVsdCkoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgc3dpcGVyLmtleWJvYXJkLmhhbmRsZSk7XG4gICAgc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQgPSB0cnVlO1xuICB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICAgIGlmICghc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHJldHVybjtcbiAgICAoMCwgX2RvbS5kZWZhdWx0KShkb2N1bWVudCkub2ZmKCdrZXlkb3duJywgc3dpcGVyLmtleWJvYXJkLmhhbmRsZSk7XG4gICAgc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQgPSBmYWxzZTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ2tleWJvYXJkJyxcbiAgcGFyYW1zOiB7XG4gICAga2V5Ym9hcmQ6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgb25seUluVmlld3BvcnQ6IHRydWUsXG4gICAgICBwYWdlVXBEb3duOiB0cnVlXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIGtleWJvYXJkOiBfZXh0ZW5kcyh7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9LCBLZXlib2FyZClcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQuZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5rZXlib2FyZC5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIExhenkgPSB7XG4gIGxvYWRJblNsaWRlOiBmdW5jdGlvbiBsb2FkSW5TbGlkZShpbmRleCwgbG9hZEluRHVwbGljYXRlKSB7XG4gICAgaWYgKGxvYWRJbkR1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBsb2FkSW5EdXBsaWNhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmxhenk7XG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICB2YXIgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgdmFyICRzbGlkZUVsID0gaXNWaXJ0dWFsID8gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBpbmRleCArIFwiXFxcIl1cIikgOiBzd2lwZXIuc2xpZGVzLmVxKGluZGV4KTtcbiAgICB2YXIgJGltYWdlcyA9ICRzbGlkZUVsLmZpbmQoXCIuXCIgKyBwYXJhbXMuZWxlbWVudENsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5sb2FkZWRDbGFzcyArIFwiKTpub3QoLlwiICsgcGFyYW1zLmxvYWRpbmdDbGFzcyArIFwiKVwiKTtcblxuICAgIGlmICgkc2xpZGVFbC5oYXNDbGFzcyhwYXJhbXMuZWxlbWVudENsYXNzKSAmJiAhJHNsaWRlRWwuaGFzQ2xhc3MocGFyYW1zLmxvYWRlZENsYXNzKSAmJiAhJHNsaWRlRWwuaGFzQ2xhc3MocGFyYW1zLmxvYWRpbmdDbGFzcykpIHtcbiAgICAgICRpbWFnZXMucHVzaCgkc2xpZGVFbFswXSk7XG4gICAgfVxuXG4gICAgaWYgKCRpbWFnZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgJGltYWdlcy5lYWNoKGZ1bmN0aW9uIChpbWFnZUVsKSB7XG4gICAgICB2YXIgJGltYWdlRWwgPSAoMCwgX2RvbS5kZWZhdWx0KShpbWFnZUVsKTtcbiAgICAgICRpbWFnZUVsLmFkZENsYXNzKHBhcmFtcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgdmFyIGJhY2tncm91bmQgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLWJhY2tncm91bmQnKTtcbiAgICAgIHZhciBzcmMgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLXNyYycpO1xuICAgICAgdmFyIHNyY3NldCA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICB2YXIgc2l6ZXMgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICB2YXIgJHBpY3R1cmVFbCA9ICRpbWFnZUVsLnBhcmVudCgncGljdHVyZScpO1xuICAgICAgc3dpcGVyLmxvYWRJbWFnZSgkaW1hZ2VFbFswXSwgc3JjIHx8IGJhY2tncm91bmQsIHNyY3NldCwgc2l6ZXMsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3dpcGVyID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIgPT09IG51bGwgfHwgIXN3aXBlciB8fCBzd2lwZXIgJiYgIXN3aXBlci5wYXJhbXMgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgJGltYWdlRWwuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoXFxcIlwiICsgYmFja2dyb3VuZCArIFwiXFxcIilcIik7XG4gICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgJGltYWdlRWwuYXR0cignc3Jjc2V0Jywgc3Jjc2V0KTtcbiAgICAgICAgICAgICRpbWFnZUVsLnJlbW92ZUF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzaXplcycsIHNpemVzKTtcbiAgICAgICAgICAgICRpbWFnZUVsLnJlbW92ZUF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJHBpY3R1cmVFbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwaWN0dXJlRWwuY2hpbGRyZW4oJ3NvdXJjZScpLmVhY2goZnVuY3Rpb24gKHNvdXJjZUVsKSB7XG4gICAgICAgICAgICAgIHZhciAkc291cmNlID0gKDAsIF9kb20uZGVmYXVsdCkoc291cmNlRWwpO1xuXG4gICAgICAgICAgICAgIGlmICgkc291cmNlLmF0dHIoJ2RhdGEtc3Jjc2V0JykpIHtcbiAgICAgICAgICAgICAgICAkc291cmNlLmF0dHIoJ3NyY3NldCcsICRzb3VyY2UuYXR0cignZGF0YS1zcmNzZXQnKSk7XG4gICAgICAgICAgICAgICAgJHNvdXJjZS5yZW1vdmVBdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzcmMnLCBzcmMpO1xuICAgICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1zcmMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkaW1hZ2VFbC5hZGRDbGFzcyhwYXJhbXMubG9hZGVkQ2xhc3MpLnJlbW92ZUNsYXNzKHBhcmFtcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICAkc2xpZGVFbC5maW5kKFwiLlwiICsgcGFyYW1zLnByZWxvYWRlckNsYXNzKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wICYmIGxvYWRJbkR1cGxpY2F0ZSkge1xuICAgICAgICAgIHZhciBzbGlkZU9yaWdpbmFsSW5kZXggPSAkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuXG4gICAgICAgICAgaWYgKCRzbGlkZUVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgc2xpZGVPcmlnaW5hbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpXCIpO1xuICAgICAgICAgICAgc3dpcGVyLmxhenkubG9hZEluU2xpZGUob3JpZ2luYWxTbGlkZS5pbmRleCgpLCBmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkdXBsaWNhdGVkU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHNsaWRlT3JpZ2luYWxJbmRleCArIFwiXFxcIl1cIik7XG4gICAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShkdXBsaWNhdGVkU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlci5lbWl0KCdsYXp5SW1hZ2VSZWFkeScsICRzbGlkZUVsWzBdLCAkaW1hZ2VFbFswXSk7XG5cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLmVtaXQoJ2xhenlJbWFnZUxvYWQnLCAkc2xpZGVFbFswXSwgJGltYWdlRWxbMF0pO1xuICAgIH0pO1xuICB9LFxuICBsb2FkOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICAgIHN3aXBlclBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXJQYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXJQYXJhbXMubGF6eTtcbiAgICB2YXIgc2xpZGVzUGVyVmlldyA9IHN3aXBlclBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuXG4gICAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgc2xpZGVzUGVyVmlldyA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xpZGVFeGlzdChpbmRleCkge1xuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICBpZiAoJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHN3aXBlclBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgaW5kZXggKyBcIlxcXCJdXCIpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNsaWRlc1tpbmRleF0pIHJldHVybiB0cnVlO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xpZGVJbmRleChzbGlkZUVsKSB7XG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2RvbS5kZWZhdWx0KShzbGlkZUVsKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9kb20uZGVmYXVsdCkoc2xpZGVFbCkuaW5kZXgoKTtcbiAgICB9XG5cbiAgICBpZiAoIXN3aXBlci5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCkgc3dpcGVyLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkID0gdHJ1ZTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHN3aXBlclBhcmFtcy5zbGlkZVZpc2libGVDbGFzcykuZWFjaChmdW5jdGlvbiAoc2xpZGVFbCkge1xuICAgICAgICB2YXIgaW5kZXggPSBpc1ZpcnR1YWwgPyAoMCwgX2RvbS5kZWZhdWx0KShzbGlkZUVsKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIDogKDAsIF9kb20uZGVmYXVsdCkoc2xpZGVFbCkuaW5kZXgoKTtcbiAgICAgICAgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgICAgZm9yICh2YXIgaSA9IGFjdGl2ZUluZGV4OyBpIDwgYWN0aXZlSW5kZXggKyBzbGlkZXNQZXJWaWV3OyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlRXhpc3QoaSkpIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShhY3RpdmVJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5sb2FkUHJldk5leHQpIHtcbiAgICAgIGlmIChzbGlkZXNQZXJWaWV3ID4gMSB8fCBwYXJhbXMubG9hZFByZXZOZXh0QW1vdW50ICYmIHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQgPiAxKSB7XG4gICAgICAgIHZhciBhbW91bnQgPSBwYXJhbXMubG9hZFByZXZOZXh0QW1vdW50O1xuICAgICAgICB2YXIgc3B2ID0gc2xpZGVzUGVyVmlldztcbiAgICAgICAgdmFyIG1heEluZGV4ID0gTWF0aC5taW4oYWN0aXZlSW5kZXggKyBzcHYgKyBNYXRoLm1heChhbW91bnQsIHNwdiksIHNsaWRlcy5sZW5ndGgpO1xuICAgICAgICB2YXIgbWluSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCAtIE1hdGgubWF4KHNwdiwgYW1vdW50KSwgMCk7IC8vIE5leHQgU2xpZGVzXG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSBhY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXc7IF9pIDwgbWF4SW5kZXg7IF9pICs9IDEpIHtcbiAgICAgICAgICBpZiAoc2xpZGVFeGlzdChfaSkpIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKF9pKTtcbiAgICAgICAgfSAvLyBQcmV2IFNsaWRlc1xuXG5cbiAgICAgICAgZm9yICh2YXIgX2kyID0gbWluSW5kZXg7IF9pMiA8IGFjdGl2ZUluZGV4OyBfaTIgKz0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZUV4aXN0KF9pMikpIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKF9pMik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXh0U2xpZGUgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyUGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcbiAgICAgICAgaWYgKG5leHRTbGlkZS5sZW5ndGggPiAwKSBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShzbGlkZUluZGV4KG5leHRTbGlkZSkpO1xuICAgICAgICB2YXIgcHJldlNsaWRlID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHN3aXBlclBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gICAgICAgIGlmIChwcmV2U2xpZGUubGVuZ3RoID4gMCkgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoc2xpZGVJbmRleChwcmV2U2xpZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNoZWNrSW5WaWV3T25Mb2FkOiBmdW5jdGlvbiBjaGVja0luVmlld09uTG9hZCgpIHtcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICB2YXIgJHNjcm9sbEVsZW1lbnQgPSBzd2lwZXIucGFyYW1zLmxhenkuc2Nyb2xsaW5nRWxlbWVudCA/ICgwLCBfZG9tLmRlZmF1bHQpKHN3aXBlci5wYXJhbXMubGF6eS5zY3JvbGxpbmdFbGVtZW50KSA6ICgwLCBfZG9tLmRlZmF1bHQpKHdpbmRvdyk7XG4gICAgdmFyIGlzV2luZG93ID0gJHNjcm9sbEVsZW1lbnRbMF0gPT09IHdpbmRvdztcbiAgICB2YXIgc2Nyb2xsRWxlbWVudFdpZHRoID0gaXNXaW5kb3cgPyB3aW5kb3cuaW5uZXJXaWR0aCA6ICRzY3JvbGxFbGVtZW50WzBdLm9mZnNldFdpZHRoO1xuICAgIHZhciBzY3JvbGxFbGVtZW50SGVpZ2h0ID0gaXNXaW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiAkc2Nyb2xsRWxlbWVudFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIHN3aXBlck9mZnNldCA9IHN3aXBlci4kZWwub2Zmc2V0KCk7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgdmFyIGluVmlldyA9IGZhbHNlO1xuICAgIGlmIChydGwpIHN3aXBlck9mZnNldC5sZWZ0IC09IHN3aXBlci4kZWxbMF0uc2Nyb2xsTGVmdDtcbiAgICB2YXIgc3dpcGVyQ29vcmQgPSBbW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wXSwgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wXSwgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVyLmhlaWdodF0sIFtzd2lwZXJPZmZzZXQubGVmdCArIHN3aXBlci53aWR0aCwgc3dpcGVyT2Zmc2V0LnRvcCArIHN3aXBlci5oZWlnaHRdXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyQ29vcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuXG4gICAgICBpZiAocG9pbnRbMF0gPj0gMCAmJiBwb2ludFswXSA8PSBzY3JvbGxFbGVtZW50V2lkdGggJiYgcG9pbnRbMV0gPj0gMCAmJiBwb2ludFsxXSA8PSBzY3JvbGxFbGVtZW50SGVpZ2h0KSB7XG4gICAgICAgIGlmIChwb2ludFswXSA9PT0gMCAmJiBwb2ludFsxXSA9PT0gMCkgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpblZpZXcpIHtcbiAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgICRzY3JvbGxFbGVtZW50Lm9mZignc2Nyb2xsJywgc3dpcGVyLmxhenkuY2hlY2tJblZpZXdPbkxvYWQpO1xuICAgIH0gZWxzZSBpZiAoIXN3aXBlci5sYXp5LnNjcm9sbEhhbmRsZXJBdHRhY2hlZCkge1xuICAgICAgc3dpcGVyLmxhenkuc2Nyb2xsSGFuZGxlckF0dGFjaGVkID0gdHJ1ZTtcbiAgICAgICRzY3JvbGxFbGVtZW50Lm9uKCdzY3JvbGwnLCBzd2lwZXIubGF6eS5jaGVja0luVmlld09uTG9hZCk7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnbGF6eScsXG4gIHBhcmFtczoge1xuICAgIGxhenk6IHtcbiAgICAgIGNoZWNrSW5WaWV3OiBmYWxzZSxcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgbG9hZFByZXZOZXh0OiBmYWxzZSxcbiAgICAgIGxvYWRQcmV2TmV4dEFtb3VudDogMSxcbiAgICAgIGxvYWRPblRyYW5zaXRpb25TdGFydDogZmFsc2UsXG4gICAgICBzY3JvbGxpbmdFbGVtZW50OiAnJyxcbiAgICAgIGVsZW1lbnRDbGFzczogJ3N3aXBlci1sYXp5JyxcbiAgICAgIGxvYWRpbmdDbGFzczogJ3N3aXBlci1sYXp5LWxvYWRpbmcnLFxuICAgICAgbG9hZGVkQ2xhc3M6ICdzd2lwZXItbGF6eS1sb2FkZWQnLFxuICAgICAgcHJlbG9hZGVyQ2xhc3M6ICdzd2lwZXItbGF6eS1wcmVsb2FkZXInXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIGxhenk6IF9leHRlbmRzKHtcbiAgICAgICAgaW5pdGlhbEltYWdlTG9hZGVkOiBmYWxzZVxuICAgICAgfSwgTGF6eSlcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcykge1xuICAgICAgICBzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiBzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSA9PT0gMCkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmNoZWNrSW5WaWV3KSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkuY2hlY2tJblZpZXdPbkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbDogZnVuY3Rpb24gc2Nyb2xsKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgIXN3aXBlci5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgJ3Njcm9sbGJhckRyYWdNb3ZlIHJlc2l6ZSBfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZSc6IGZ1bmN0aW9uIGxhenlMb2FkKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0IHx8ICFzd2lwZXIucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0ICYmICFzd2lwZXIubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpIHtcbiAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgIXN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQpIHtcbiAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNFdmVudFN1cHBvcnRlZCgpIHtcbiAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gIHZhciBldmVudE5hbWUgPSAnb253aGVlbCc7XG4gIHZhciBpc1N1cHBvcnRlZCA9IChldmVudE5hbWUgaW4gZG9jdW1lbnQpO1xuXG4gIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGV2ZW50TmFtZSwgJ3JldHVybjsnKTtcbiAgICBpc1N1cHBvcnRlZCA9IHR5cGVvZiBlbGVtZW50W2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpZiAoIWlzU3VwcG9ydGVkICYmIGRvY3VtZW50LmltcGxlbWVudGF0aW9uICYmIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUgJiYgLy8gYWx3YXlzIHJldHVybnMgdHJ1ZSBpbiBuZXdlciBicm93c2VycyBhcyBwZXIgdGhlIHN0YW5kYXJkLlxuICAvLyBAc2VlIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24taGFzZmVhdHVyZVxuICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCcnLCAnJykgIT09IHRydWUpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHdheSB0byB0ZXN0IHN1cHBvcnQgZm9yIHRoZSBgd2hlZWxgIGV2ZW50IGluIElFOSsuXG4gICAgaXNTdXBwb3J0ZWQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCdFdmVudHMud2hlZWwnLCAnMy4wJyk7XG4gIH1cblxuICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG59XG5cbnZhciBNb3VzZXdoZWVsID0ge1xuICBsYXN0U2Nyb2xsVGltZTogKDAsIF91dGlscy5ub3cpKCksXG4gIGxhc3RFdmVudEJlZm9yZVNuYXA6IHVuZGVmaW5lZCxcbiAgcmVjZW50V2hlZWxFdmVudHM6IFtdLFxuICBldmVudDogZnVuY3Rpb24gZXZlbnQoKSB7XG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHJldHVybiAnRE9NTW91c2VTY3JvbGwnO1xuICAgIHJldHVybiBpc0V2ZW50U3VwcG9ydGVkKCkgPyAnd2hlZWwnIDogJ21vdXNld2hlZWwnO1xuICB9LFxuICBub3JtYWxpemU6IGZ1bmN0aW9uIG5vcm1hbGl6ZShlKSB7XG4gICAgLy8gUmVhc29uYWJsZSBkZWZhdWx0c1xuICAgIHZhciBQSVhFTF9TVEVQID0gMTA7XG4gICAgdmFyIExJTkVfSEVJR0hUID0gNDA7XG4gICAgdmFyIFBBR0VfSEVJR0hUID0gODAwO1xuICAgIHZhciBzWCA9IDA7XG4gICAgdmFyIHNZID0gMDsgLy8gc3BpblgsIHNwaW5ZXG5cbiAgICB2YXIgcFggPSAwO1xuICAgIHZhciBwWSA9IDA7IC8vIHBpeGVsWCwgcGl4ZWxZXG4gICAgLy8gTGVnYWN5XG5cbiAgICBpZiAoJ2RldGFpbCcgaW4gZSkge1xuICAgICAgc1kgPSBlLmRldGFpbDtcbiAgICB9XG5cbiAgICBpZiAoJ3doZWVsRGVsdGEnIGluIGUpIHtcbiAgICAgIHNZID0gLWUud2hlZWxEZWx0YSAvIDEyMDtcbiAgICB9XG5cbiAgICBpZiAoJ3doZWVsRGVsdGFZJyBpbiBlKSB7XG4gICAgICBzWSA9IC1lLndoZWVsRGVsdGFZIC8gMTIwO1xuICAgIH1cblxuICAgIGlmICgnd2hlZWxEZWx0YVgnIGluIGUpIHtcbiAgICAgIHNYID0gLWUud2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfSAvLyBzaWRlIHNjcm9sbGluZyBvbiBGRiB3aXRoIERPTU1vdXNlU2Nyb2xsXG5cblxuICAgIGlmICgnYXhpcycgaW4gZSAmJiBlLmF4aXMgPT09IGUuSE9SSVpPTlRBTF9BWElTKSB7XG4gICAgICBzWCA9IHNZO1xuICAgICAgc1kgPSAwO1xuICAgIH1cblxuICAgIHBYID0gc1ggKiBQSVhFTF9TVEVQO1xuICAgIHBZID0gc1kgKiBQSVhFTF9TVEVQO1xuXG4gICAgaWYgKCdkZWx0YVknIGluIGUpIHtcbiAgICAgIHBZID0gZS5kZWx0YVk7XG4gICAgfVxuXG4gICAgaWYgKCdkZWx0YVgnIGluIGUpIHtcbiAgICAgIHBYID0gZS5kZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgIXBYKSB7XG4gICAgICAvLyBpZiB1c2VyIHNjcm9sbHMgd2l0aCBzaGlmdCBoZSB3YW50cyBob3Jpem9udGFsIHNjcm9sbFxuICAgICAgcFggPSBwWTtcbiAgICAgIHBZID0gMDtcbiAgICB9XG5cbiAgICBpZiAoKHBYIHx8IHBZKSAmJiBlLmRlbHRhTW9kZSkge1xuICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAgIC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgICAgcFggKj0gTElORV9IRUlHSFQ7XG4gICAgICAgIHBZICo9IExJTkVfSEVJR0hUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVsdGEgaW4gUEFHRSB1bml0c1xuICAgICAgICBwWCAqPSBQQUdFX0hFSUdIVDtcbiAgICAgICAgcFkgKj0gUEFHRV9IRUlHSFQ7XG4gICAgICB9XG4gICAgfSAvLyBGYWxsLWJhY2sgaWYgc3BpbiBjYW5ub3QgYmUgZGV0ZXJtaW5lZFxuXG5cbiAgICBpZiAocFggJiYgIXNYKSB7XG4gICAgICBzWCA9IHBYIDwgMSA/IC0xIDogMTtcbiAgICB9XG5cbiAgICBpZiAocFkgJiYgIXNZKSB7XG4gICAgICBzWSA9IHBZIDwgMSA/IC0xIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3Bpblg6IHNYLFxuICAgICAgc3Bpblk6IHNZLFxuICAgICAgcGl4ZWxYOiBwWCxcbiAgICAgIHBpeGVsWTogcFlcbiAgICB9O1xuICB9LFxuICBoYW5kbGVNb3VzZUVudGVyOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5tb3VzZUVudGVyZWQgPSB0cnVlO1xuICB9LFxuICBoYW5kbGVNb3VzZUxlYXZlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5tb3VzZUVudGVyZWQgPSBmYWxzZTtcbiAgfSxcbiAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICB2YXIgZSA9IGV2ZW50O1xuICAgIHZhciBkaXNhYmxlUGFyZW50U3dpcGVyID0gdHJ1ZTtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXQgPSBzd2lwZXIuJGVsO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZXQgIT09ICdjb250YWluZXInKSB7XG4gICAgICB0YXJnZXQgPSAoMCwgX2RvbS5kZWZhdWx0KShzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXN3aXBlci5tb3VzZUVudGVyZWQgJiYgIXRhcmdldFswXS5jb250YWlucyhlLnRhcmdldCkgJiYgIXBhcmFtcy5yZWxlYXNlT25FZGdlcykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDsgLy8ganF1ZXJ5IGZpeFxuXG4gICAgdmFyIGRlbHRhID0gMDtcbiAgICB2YXIgcnRsRmFjdG9yID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTtcbiAgICB2YXIgZGF0YSA9IE1vdXNld2hlZWwubm9ybWFsaXplKGUpO1xuXG4gICAgaWYgKHBhcmFtcy5mb3JjZVRvQXhpcykge1xuICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGF0YS5waXhlbFgpID4gTWF0aC5hYnMoZGF0YS5waXhlbFkpKSBkZWx0YSA9IC1kYXRhLnBpeGVsWCAqIHJ0bEZhY3RvcjtlbHNlIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkYXRhLnBpeGVsWSkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWCkpIGRlbHRhID0gLWRhdGEucGl4ZWxZO2Vsc2UgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbHRhID0gTWF0aC5hYnMoZGF0YS5waXhlbFgpID4gTWF0aC5hYnMoZGF0YS5waXhlbFkpID8gLWRhdGEucGl4ZWxYICogcnRsRmFjdG9yIDogLWRhdGEucGl4ZWxZO1xuICAgIH1cblxuICAgIGlmIChkZWx0YSA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBhcmFtcy5pbnZlcnQpIGRlbHRhID0gLWRlbHRhOyAvLyBHZXQgdGhlIHNjcm9sbCBwb3NpdGlvbnNcblxuICAgIHZhciBwb3NpdGlvbnMgPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCkgKyBkZWx0YSAqIHBhcmFtcy5zZW5zaXRpdml0eTtcbiAgICBpZiAocG9zaXRpb25zID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkgcG9zaXRpb25zID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgIGlmIChwb3NpdGlvbnMgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSBwb3NpdGlvbnMgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7IC8vIFdoZW4gbG9vcCBpcyB0cnVlOlxuICAgIC8vICAgICB0aGUgZGlzYWJsZVBhcmVudFN3aXBlciB3aWxsIGJlIHRydWUuXG4gICAgLy8gV2hlbiBsb29wIGlzIGZhbHNlOlxuICAgIC8vICAgICBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9ucyBpcyBub3Qgb24gZWRnZSxcbiAgICAvLyAgICAgdGhlbiB0aGUgZGlzYWJsZVBhcmVudFN3aXBlciB3aWxsIGJlIHRydWUuXG4gICAgLy8gICAgIGlmIHRoZSBzY3JvbGwgb24gZWRnZSBwb3NpdGlvbnMsXG4gICAgLy8gICAgIHRoZW4gdGhlIGRpc2FibGVQYXJlbnRTd2lwZXIgd2lsbCBiZSBmYWxzZS5cblxuICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyB0cnVlIDogIShwb3NpdGlvbnMgPT09IHN3aXBlci5taW5UcmFuc2xhdGUoKSB8fCBwb3NpdGlvbnMgPT09IHN3aXBlci5tYXhUcmFuc2xhdGUoKSk7XG4gICAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIgJiYgc3dpcGVyLnBhcmFtcy5uZXN0ZWQpIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBuZXcgZXZlbnQgaW4gYSB2YXJpYWJsZSB3aGljaCBzdG9yZXMgdGhlIHJlbGV2YW50IGRhdGFcbiAgICAgIHZhciBuZXdFdmVudCA9IHtcbiAgICAgICAgdGltZTogKDAsIF91dGlscy5ub3cpKCksXG4gICAgICAgIGRlbHRhOiBNYXRoLmFicyhkZWx0YSksXG4gICAgICAgIGRpcmVjdGlvbjogTWF0aC5zaWduKGRlbHRhKSxcbiAgICAgICAgcmF3OiBldmVudFxuICAgICAgfTsgLy8gS2VlcCB0aGUgbW9zdCByZWNlbnQgZXZlbnRzXG5cbiAgICAgIHZhciByZWNlbnRXaGVlbEV2ZW50cyA9IHN3aXBlci5tb3VzZXdoZWVsLnJlY2VudFdoZWVsRXZlbnRzO1xuXG4gICAgICBpZiAocmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgcmVjZW50V2hlZWxFdmVudHMuc2hpZnQoKTsgLy8gb25seSBzdG9yZSB0aGUgbGFzdCBOIGV2ZW50c1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkV2ZW50ID0gcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID8gcmVjZW50V2hlZWxFdmVudHNbcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG4gICAgICByZWNlbnRXaGVlbEV2ZW50cy5wdXNoKG5ld0V2ZW50KTsgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHByZXZpb3VzIHJlY29yZGVkIGV2ZW50OlxuICAgICAgLy8gICBJZiBkaXJlY3Rpb24gaGFzIGNoYW5nZWQgb3JcbiAgICAgIC8vICAgaWYgdGhlIHNjcm9sbCBpcyBxdWlja2VyIHRoYW4gdGhlIHByZXZpb3VzIG9uZTpcbiAgICAgIC8vICAgICBBbmltYXRlIHRoZSBzbGlkZXIuXG4gICAgICAvLyBFbHNlICh0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSB3aGVlbCBpcyBtb3ZlZCk6XG4gICAgICAvLyAgICAgQW5pbWF0ZSB0aGUgc2xpZGVyLlxuXG4gICAgICBpZiAocHJldkV2ZW50KSB7XG4gICAgICAgIGlmIChuZXdFdmVudC5kaXJlY3Rpb24gIT09IHByZXZFdmVudC5kaXJlY3Rpb24gfHwgbmV3RXZlbnQuZGVsdGEgPiBwcmV2RXZlbnQuZGVsdGEgfHwgbmV3RXZlbnQudGltZSA+IHByZXZFdmVudC50aW1lICsgMTUwKSB7XG4gICAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwuYW5pbWF0ZVNsaWRlcihuZXdFdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmFuaW1hdGVTbGlkZXIobmV3RXZlbnQpO1xuICAgICAgfSAvLyBJZiBpdCdzIHRpbWUgdG8gcmVsZWFzZSB0aGUgc2Nyb2xsOlxuICAgICAgLy8gICBSZXR1cm4gbm93IHNvIHlvdSBkb24ndCBoaXQgdGhlIHByZXZlbnREZWZhdWx0LlxuXG5cbiAgICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5yZWxlYXNlU2Nyb2xsKG5ld0V2ZW50KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRnJlZW1vZGUgb3Igc2Nyb2xsQ29udGFpbmVyOlxuICAgICAgLy8gSWYgd2UgcmVjZW50bHkgc25hcHBlZCBhZnRlciBhIG1vbWVudHVtIHNjcm9sbCwgdGhlbiBpZ25vcmUgd2hlZWwgZXZlbnRzXG4gICAgICAvLyB0byBnaXZlIHRpbWUgZm9yIHRoZSBkZWNlbGVyYXRpb24gdG8gZmluaXNoLiBTdG9wIGlnbm9yaW5nIGFmdGVyIDUwMCBtc2Vjc1xuICAgICAgLy8gb3IgaWYgaXQncyBhIG5ldyBzY3JvbGwgKGxhcmdlciBkZWx0YSBvciBpbnZlcnNlIHNpZ24gYXMgbGFzdCBldmVudCBiZWZvcmVcbiAgICAgIC8vIGFuIGVuZC1vZi1tb21lbnR1bSBzbmFwKS5cbiAgICAgIHZhciBfbmV3RXZlbnQgPSB7XG4gICAgICAgIHRpbWU6ICgwLCBfdXRpbHMubm93KSgpLFxuICAgICAgICBkZWx0YTogTWF0aC5hYnMoZGVsdGEpLFxuICAgICAgICBkaXJlY3Rpb246IE1hdGguc2lnbihkZWx0YSlcbiAgICAgIH07XG4gICAgICB2YXIgbGFzdEV2ZW50QmVmb3JlU25hcCA9IHN3aXBlci5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXA7XG4gICAgICB2YXIgaWdub3JlV2hlZWxFdmVudHMgPSBsYXN0RXZlbnRCZWZvcmVTbmFwICYmIF9uZXdFdmVudC50aW1lIDwgbGFzdEV2ZW50QmVmb3JlU25hcC50aW1lICsgNTAwICYmIF9uZXdFdmVudC5kZWx0YSA8PSBsYXN0RXZlbnRCZWZvcmVTbmFwLmRlbHRhICYmIF9uZXdFdmVudC5kaXJlY3Rpb24gPT09IGxhc3RFdmVudEJlZm9yZVNuYXAuZGlyZWN0aW9uO1xuXG4gICAgICBpZiAoIWlnbm9yZVdoZWVsRXZlbnRzKSB7XG4gICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXAgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9zaXRpb24gPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCkgKyBkZWx0YSAqIHBhcmFtcy5zZW5zaXRpdml0eTtcbiAgICAgICAgdmFyIHdhc0JlZ2lubmluZyA9IHN3aXBlci5pc0JlZ2lubmluZztcbiAgICAgICAgdmFyIHdhc0VuZCA9IHN3aXBlci5pc0VuZDtcbiAgICAgICAgaWYgKHBvc2l0aW9uID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkgcG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgICAgICBpZiAoIXdhc0JlZ2lubmluZyAmJiBzd2lwZXIuaXNCZWdpbm5pbmcgfHwgIXdhc0VuZCAmJiBzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAvLyBXaGVuIHdoZWVsIHNjcm9sbGluZyBzdGFydHMgd2l0aCBzdGlja3kgKGFrYSBzbmFwKSBlbmFibGVkLCB0aGVuIGRldGVjdFxuICAgICAgICAgIC8vIHRoZSBlbmQgb2YgYSBtb21lbnR1bSBzY3JvbGwgYnkgc3RvcmluZyByZWNlbnQgKE49MTU/KSB3aGVlbCBldmVudHMuXG4gICAgICAgICAgLy8gMS4gZG8gYWxsIE4gZXZlbnRzIGhhdmUgZGVjcmVhc2luZyBvciBzYW1lIChhYnNvbHV0ZSB2YWx1ZSkgZGVsdGE/XG4gICAgICAgICAgLy8gMi4gZGlkIGFsbCBOIGV2ZW50cyBhcnJpdmUgaW4gdGhlIGxhc3QgTSAoTT01MDA/KSBtc2Vjcz9cbiAgICAgICAgICAvLyAzLiBkb2VzIHRoZSBlYXJsaWVzdCBldmVudCBoYXZlIGFuIChhYnNvbHV0ZSB2YWx1ZSkgZGVsdGEgdGhhdCdzXG4gICAgICAgICAgLy8gICAgYXQgbGVhc3QgUCAoUD0xPykgbGFyZ2VyIHRoYW4gdGhlIG1vc3QgcmVjZW50IGV2ZW50J3MgZGVsdGE/XG4gICAgICAgICAgLy8gNC4gZG9lcyB0aGUgbGF0ZXN0IGV2ZW50IGhhdmUgYSBkZWx0YSB0aGF0J3Mgc21hbGxlciB0aGFuIFEgKFE9Nj8pIHBpeGVscz9cbiAgICAgICAgICAvLyBJZiAxLTQgYXJlIFwieWVzXCIgdGhlbiB3ZSdyZSBuZWFyIHRoZSBlbmQgb2YgYSBtb21lbnR1bSBzY3JvbGwgZGVjZWxlcmF0aW9uLlxuICAgICAgICAgIC8vIFNuYXAgaW1tZWRpYXRlbHkgYW5kIGlnbm9yZSByZW1haW5pbmcgd2hlZWwgZXZlbnRzIGluIHRoaXMgc2Nyb2xsLlxuICAgICAgICAgIC8vIFNlZSBjb21tZW50IGFib3ZlIGZvciBcInJlbWFpbmluZyB3aGVlbCBldmVudHMgaW4gdGhpcyBzY3JvbGxcIiBkZXRlcm1pbmF0aW9uLlxuICAgICAgICAgIC8vIElmIDEtNCBhcmVuJ3Qgc2F0aXNmaWVkLCB0aGVuIHdhaXQgdG8gc25hcCB1bnRpbCA1MDBtcyBhZnRlciB0aGUgbGFzdCBldmVudC5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLm1vdXNld2hlZWwudGltZW91dCk7XG4gICAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwudGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB2YXIgX3JlY2VudFdoZWVsRXZlbnRzID0gc3dpcGVyLm1vdXNld2hlZWwucmVjZW50V2hlZWxFdmVudHM7XG5cbiAgICAgICAgICBpZiAoX3JlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA+PSAxNSkge1xuICAgICAgICAgICAgX3JlY2VudFdoZWVsRXZlbnRzLnNoaWZ0KCk7IC8vIG9ubHkgc3RvcmUgdGhlIGxhc3QgTiBldmVudHNcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfcHJldkV2ZW50ID0gX3JlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA/IF9yZWNlbnRXaGVlbEV2ZW50c1tfcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgZmlyc3RFdmVudCA9IF9yZWNlbnRXaGVlbEV2ZW50c1swXTtcblxuICAgICAgICAgIF9yZWNlbnRXaGVlbEV2ZW50cy5wdXNoKF9uZXdFdmVudCk7XG5cbiAgICAgICAgICBpZiAoX3ByZXZFdmVudCAmJiAoX25ld0V2ZW50LmRlbHRhID4gX3ByZXZFdmVudC5kZWx0YSB8fCBfbmV3RXZlbnQuZGlyZWN0aW9uICE9PSBfcHJldkV2ZW50LmRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIC8vIEluY3JlYXNpbmcgb3IgcmV2ZXJzZS1zaWduIGRlbHRhIG1lYW5zIHRoZSB1c2VyIHN0YXJ0ZWQgc2Nyb2xsaW5nIGFnYWluLiBDbGVhciB0aGUgd2hlZWwgZXZlbnQgbG9nLlxuICAgICAgICAgICAgX3JlY2VudFdoZWVsRXZlbnRzLnNwbGljZSgwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKF9yZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPj0gMTUgJiYgX25ld0V2ZW50LnRpbWUgLSBmaXJzdEV2ZW50LnRpbWUgPCA1MDAgJiYgZmlyc3RFdmVudC5kZWx0YSAtIF9uZXdFdmVudC5kZWx0YSA+PSAxICYmIF9uZXdFdmVudC5kZWx0YSA8PSA2KSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBkZWNlbGVyYXRpb24gb2YgYSBtb21lbnR1bSBzY3JvbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAgICAgICAgICAgLy8gdG8gd2FpdCBmb3IgbW9yZSBldmVudHMuIFNuYXAgQVNBUCBvbiB0aGUgbmV4dCB0aWNrLlxuICAgICAgICAgICAgLy8gQWxzbywgYmVjYXVzZSB0aGVyZSdzIHNvbWUgcmVtYWluaW5nIG1vbWVudHVtIHdlJ2xsIGJpYXMgdGhlIHNuYXAgaW4gdGhlXG4gICAgICAgICAgICAvLyBkaXJlY3Rpb24gb2YgdGhlIG9uZ29pbmcgc2Nyb2xsIGJlY2F1c2UgaXQncyBiZXR0ZXIgVVggZm9yIHRoZSBzY3JvbGwgdG8gc25hcFxuICAgICAgICAgICAgLy8gaW4gdGhlIHNhbWUgZGlyZWN0aW9uIGFzIHRoZSBzY3JvbGwgaW5zdGVhZCBvZiByZXZlcnNpbmcgdG8gc25hcC4gIFRoZXJlZm9yZSxcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgYWxyZWFkeSBzY3JvbGxlZCBtb3JlIHRoYW4gMjAlIGluIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwga2VlcCBnb2luZy5cbiAgICAgICAgICAgIHZhciBzbmFwVG9UaHJlc2hvbGQgPSBkZWx0YSA+IDAgPyAwLjggOiAwLjI7XG4gICAgICAgICAgICBzd2lwZXIubW91c2V3aGVlbC5sYXN0RXZlbnRCZWZvcmVTbmFwID0gX25ld0V2ZW50O1xuXG4gICAgICAgICAgICBfcmVjZW50V2hlZWxFdmVudHMuc3BsaWNlKDApO1xuXG4gICAgICAgICAgICBzd2lwZXIubW91c2V3aGVlbC50aW1lb3V0ID0gKDAsIF91dGlscy5uZXh0VGljaykoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3Qoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdW5kZWZpbmVkLCBzbmFwVG9UaHJlc2hvbGQpO1xuICAgICAgICAgICAgfSwgMCk7IC8vIG5vIGRlbGF5OyBtb3ZlIG9uIG5leHQgdGlja1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc3dpcGVyLm1vdXNld2hlZWwudGltZW91dCkge1xuICAgICAgICAgICAgLy8gaWYgd2UgZ2V0IGhlcmUsIHRoZW4gd2UgaGF2ZW4ndCBkZXRlY3RlZCB0aGUgZW5kIG9mIGEgbW9tZW50dW0gc2Nyb2xsLCBzb1xuICAgICAgICAgICAgLy8gd2UnbGwgY29uc2lkZXIgYSBzY3JvbGwgXCJjb21wbGV0ZVwiIHdoZW4gdGhlcmUgaGF2ZW4ndCBiZWVuIGFueSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgIC8vIGZvciA1MDBtcy5cbiAgICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLnRpbWVvdXQgPSAoMCwgX3V0aWxzLm5leHRUaWNrKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBzbmFwVG9UaHJlc2hvbGQgPSAwLjU7XG4gICAgICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXAgPSBfbmV3RXZlbnQ7XG5cbiAgICAgICAgICAgICAgX3JlY2VudFdoZWVsRXZlbnRzLnNwbGljZSgwKTtcblxuICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3Qoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdW5kZWZpbmVkLCBzbmFwVG9UaHJlc2hvbGQpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRW1pdCBldmVudFxuXG5cbiAgICAgICAgaWYgKCFpZ25vcmVXaGVlbEV2ZW50cykgc3dpcGVyLmVtaXQoJ3Njcm9sbCcsIGUpOyAvLyBTdG9wIGF1dG9wbGF5XG5cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkgJiYgc3dpcGVyLnBhcmFtcy5hdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uKSBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpOyAvLyBSZXR1cm4gcGFnZSBzY3JvbGwgb24gZWRnZSBwb3NpdGlvbnNcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IHN3aXBlci5taW5UcmFuc2xhdGUoKSB8fCBwb3NpdGlvbiA9PT0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgYW5pbWF0ZVNsaWRlcjogZnVuY3Rpb24gYW5pbWF0ZVNsaWRlcihuZXdFdmVudCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG5cbiAgICBpZiAodGhpcy5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGREZWx0YSAmJiBuZXdFdmVudC5kZWx0YSA8IHRoaXMucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkRGVsdGEpIHtcbiAgICAgIC8vIFByZXZlbnQgaWYgZGVsdGEgb2Ygd2hlZWwgc2Nyb2xsIGRlbHRhIGlzIGJlbG93IGNvbmZpZ3VyZWQgdGhyZXNob2xkXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkVGltZSAmJiAoMCwgX3V0aWxzLm5vdykoKSAtIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lIDwgdGhpcy5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGRUaW1lKSB7XG4gICAgICAvLyBQcmV2ZW50IGlmIHRpbWUgYmV0d2VlbiBzY3JvbGxzIGlzIGJlbG93IGNvbmZpZ3VyZWQgdGhyZXNob2xkXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBJZiB0aGUgbW92ZW1lbnQgaXMgTk9UIGJpZyBlbm91Z2ggYW5kXG4gICAgLy8gaWYgdGhlIGxhc3QgdGltZSB0aGUgdXNlciBzY3JvbGxlZCB3YXMgdG9vIGNsb3NlIHRvIHRoZSBjdXJyZW50IG9uZSAoYXZvaWQgY29udGludW91c2x5IHRyaWdnZXJpbmcgdGhlIHNsaWRlcik6XG4gICAgLy8gICBEb24ndCBnbyBhbnkgZnVydGhlciAoYXZvaWQgaW5zaWduaWZpY2FudCBzY3JvbGwgbW92ZW1lbnQpLlxuXG5cbiAgICBpZiAobmV3RXZlbnQuZGVsdGEgPj0gNiAmJiAoMCwgX3V0aWxzLm5vdykoKSAtIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lIDwgNjApIHtcbiAgICAgIC8vIFJldHVybiBmYWxzZSBhcyBhIGRlZmF1bHRcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gSWYgdXNlciBpcyBzY3JvbGxpbmcgdG93YXJkcyB0aGUgZW5kOlxuICAgIC8vICAgSWYgdGhlIHNsaWRlciBoYXNuJ3QgaGl0IHRoZSBsYXRlc3Qgc2xpZGUgb3JcbiAgICAvLyAgIGlmIHRoZSBzbGlkZXIgaXMgYSBsb29wIGFuZFxuICAgIC8vICAgaWYgdGhlIHNsaWRlciBpc24ndCBtb3ZpbmcgcmlnaHQgbm93OlxuICAgIC8vICAgICBHbyB0byBuZXh0IHNsaWRlIGFuZFxuICAgIC8vICAgICBlbWl0IGEgc2Nyb2xsIGV2ZW50LlxuICAgIC8vIEVsc2UgKHRoZSB1c2VyIGlzIHNjcm9sbGluZyB0b3dhcmRzIHRoZSBiZWdpbm5pbmcpIGFuZFxuICAgIC8vIGlmIHRoZSBzbGlkZXIgaGFzbid0IGhpdCB0aGUgZmlyc3Qgc2xpZGUgb3JcbiAgICAvLyBpZiB0aGUgc2xpZGVyIGlzIGEgbG9vcCBhbmRcbiAgICAvLyBpZiB0aGUgc2xpZGVyIGlzbid0IG1vdmluZyByaWdodCBub3c6XG4gICAgLy8gICBHbyB0byBwcmV2IHNsaWRlIGFuZFxuICAgIC8vICAgZW1pdCBhIHNjcm9sbCBldmVudC5cblxuXG4gICAgaWYgKG5ld0V2ZW50LmRpcmVjdGlvbiA8IDApIHtcbiAgICAgIGlmICgoIXN3aXBlci5pc0VuZCB8fCBzd2lwZXIucGFyYW1zLmxvb3ApICYmICFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3Njcm9sbCcsIG5ld0V2ZW50LnJhdyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoIXN3aXBlci5pc0JlZ2lubmluZyB8fCBzd2lwZXIucGFyYW1zLmxvb3ApICYmICFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsJywgbmV3RXZlbnQucmF3KTtcbiAgICB9IC8vIElmIHlvdSBnb3QgaGVyZSBpcyBiZWNhdXNlIGFuIGFuaW1hdGlvbiBoYXMgYmVlbiB0cmlnZ2VyZWQgc28gc3RvcmUgdGhlIGN1cnJlbnQgdGltZVxuXG5cbiAgICBzd2lwZXIubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZSA9IG5ldyB3aW5kb3cuRGF0ZSgpLmdldFRpbWUoKTsgLy8gUmV0dXJuIGZhbHNlIGFzIGEgZGVmYXVsdFxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICByZWxlYXNlU2Nyb2xsOiBmdW5jdGlvbiByZWxlYXNlU2Nyb2xsKG5ld0V2ZW50KSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubW91c2V3aGVlbDtcblxuICAgIGlmIChuZXdFdmVudC5kaXJlY3Rpb24gPCAwKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmxvb3AgJiYgcGFyYW1zLnJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgICAgIC8vIFJldHVybiB0cnVlIHRvIGFuaW1hdGUgc2Nyb2xsIG9uIGVkZ2VzXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmxvb3AgJiYgcGFyYW1zLnJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgICAvLyBSZXR1cm4gdHJ1ZSB0byBhbmltYXRlIHNjcm9sbCBvbiBlZGdlc1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZXZlbnQgPSBNb3VzZXdoZWVsLmV2ZW50KCk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHN3aXBlci5tb3VzZXdoZWVsLmhhbmRsZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWV2ZW50KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdGFyZ2V0ID0gc3dpcGVyLiRlbDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0ICE9PSAnY29udGFpbmVyJykge1xuICAgICAgdGFyZ2V0ID0gKDAsIF9kb20uZGVmYXVsdCkoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCk7XG4gICAgfVxuXG4gICAgdGFyZ2V0Lm9uKCdtb3VzZWVudGVyJywgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlTW91c2VFbnRlcik7XG4gICAgdGFyZ2V0Lm9uKCdtb3VzZWxlYXZlJywgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlTW91c2VMZWF2ZSk7XG4gICAgdGFyZ2V0Lm9uKGV2ZW50LCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGUpO1xuICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBldmVudCA9IE1vdXNld2hlZWwuZXZlbnQoKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdGFyZ2V0ID0gc3dpcGVyLiRlbDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0ICE9PSAnY29udGFpbmVyJykge1xuICAgICAgdGFyZ2V0ID0gKDAsIF9kb20uZGVmYXVsdCkoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCk7XG4gICAgfVxuXG4gICAgdGFyZ2V0Lm9mZihldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICBzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdtb3VzZXdoZWVsJyxcbiAgcGFyYW1zOiB7XG4gICAgbW91c2V3aGVlbDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICByZWxlYXNlT25FZGdlczogZmFsc2UsXG4gICAgICBpbnZlcnQ6IGZhbHNlLFxuICAgICAgZm9yY2VUb0F4aXM6IGZhbHNlLFxuICAgICAgc2Vuc2l0aXZpdHk6IDEsXG4gICAgICBldmVudHNUYXJnZXQ6ICdjb250YWluZXInLFxuICAgICAgdGhyZXNob2xkRGVsdGE6IG51bGwsXG4gICAgICB0aHJlc2hvbGRUaW1lOiBudWxsXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGxhc3RTY3JvbGxUaW1lOiAoMCwgX3V0aWxzLm5vdykoKSxcbiAgICAgICAgbGFzdEV2ZW50QmVmb3JlU25hcDogdW5kZWZpbmVkLFxuICAgICAgICByZWNlbnRXaGVlbEV2ZW50czogW10sXG4gICAgICAgIGVuYWJsZTogTW91c2V3aGVlbC5lbmFibGUsXG4gICAgICAgIGRpc2FibGU6IE1vdXNld2hlZWwuZGlzYWJsZSxcbiAgICAgICAgaGFuZGxlOiBNb3VzZXdoZWVsLmhhbmRsZSxcbiAgICAgICAgaGFuZGxlTW91c2VFbnRlcjogTW91c2V3aGVlbC5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICBoYW5kbGVNb3VzZUxlYXZlOiBNb3VzZXdoZWVsLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgIGFuaW1hdGVTbGlkZXI6IE1vdXNld2hlZWwuYW5pbWF0ZVNsaWRlcixcbiAgICAgICAgcmVsZWFzZVNjcm9sbDogTW91c2V3aGVlbC5yZWxlYXNlU2Nyb2xsXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmRpc2FibGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkKSBzd2lwZXIubW91c2V3aGVlbC5lbmFibGUoKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCkgc3dpcGVyLm1vdXNld2hlZWwuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBOYXZpZ2F0aW9uID0ge1xuICB0b2dnbGVFbDogZnVuY3Rpb24gdG9nZ2xlRWwoJGVsLCBkaXNhYmxlZCkge1xuICAgICRlbFtkaXNhYmxlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXSh0aGlzLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpO1xuICAgIGlmICgkZWxbMF0gJiYgJGVsWzBdLnRhZ05hbWUgPT09ICdCVVRUT04nKSAkZWxbMF0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gVXBkYXRlIE5hdmlnYXRpb24gQnV0dG9uc1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb247XG4gICAgdmFyIHRvZ2dsZUVsID0gc3dpcGVyLm5hdmlnYXRpb24udG9nZ2xlRWw7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIHZhciBfc3dpcGVyJG5hdmlnYXRpb24gPSBzd2lwZXIubmF2aWdhdGlvbixcbiAgICAgICAgJG5leHRFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbi4kbmV4dEVsLFxuICAgICAgICAkcHJldkVsID0gX3N3aXBlciRuYXZpZ2F0aW9uLiRwcmV2RWw7XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgdG9nZ2xlRWwoJHByZXZFbCwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVFbCgkcHJldkVsLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgICRwcmV2RWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgdG9nZ2xlRWwoJG5leHRFbCwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVFbCgkbmV4dEVsLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgICRuZXh0RWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICB9XG4gIH0sXG4gIG9uUHJldkNsaWNrOiBmdW5jdGlvbiBvblByZXZDbGljayhlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgfSxcbiAgb25OZXh0Q2xpY2s6IGZ1bmN0aW9uIG9uTmV4dENsaWNrKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb247XG4gICAgaWYgKCEocGFyYW1zLm5leHRFbCB8fCBwYXJhbXMucHJldkVsKSkgcmV0dXJuO1xuICAgIHZhciAkbmV4dEVsO1xuICAgIHZhciAkcHJldkVsO1xuXG4gICAgaWYgKHBhcmFtcy5uZXh0RWwpIHtcbiAgICAgICRuZXh0RWwgPSAoMCwgX2RvbS5kZWZhdWx0KShwYXJhbXMubmV4dEVsKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5uZXh0RWwgPT09ICdzdHJpbmcnICYmICRuZXh0RWwubGVuZ3RoID4gMSAmJiBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLm5leHRFbCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICRuZXh0RWwgPSBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLm5leHRFbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5wcmV2RWwpIHtcbiAgICAgICRwcmV2RWwgPSAoMCwgX2RvbS5kZWZhdWx0KShwYXJhbXMucHJldkVsKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5wcmV2RWwgPT09ICdzdHJpbmcnICYmICRwcmV2RWwubGVuZ3RoID4gMSAmJiBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLnByZXZFbCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICRwcmV2RWwgPSBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLnByZXZFbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGggPiAwKSB7XG4gICAgICAkbmV4dEVsLm9uKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uTmV4dENsaWNrKTtcbiAgICB9XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgICRwcmV2RWwub24oJ2NsaWNrJywgc3dpcGVyLm5hdmlnYXRpb24ub25QcmV2Q2xpY2spO1xuICAgIH1cblxuICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIubmF2aWdhdGlvbiwge1xuICAgICAgJG5leHRFbDogJG5leHRFbCxcbiAgICAgIG5leHRFbDogJG5leHRFbCAmJiAkbmV4dEVsWzBdLFxuICAgICAgJHByZXZFbDogJHByZXZFbCxcbiAgICAgIHByZXZFbDogJHByZXZFbCAmJiAkcHJldkVsWzBdXG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIF9zd2lwZXIkbmF2aWdhdGlvbjIgPSBzd2lwZXIubmF2aWdhdGlvbixcbiAgICAgICAgJG5leHRFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbjIuJG5leHRFbCxcbiAgICAgICAgJHByZXZFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbjIuJHByZXZFbDtcblxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoKSB7XG4gICAgICAkbmV4dEVsLm9mZignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vbk5leHRDbGljayk7XG4gICAgICAkbmV4dEVsLnJlbW92ZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCkge1xuICAgICAgJHByZXZFbC5vZmYoJ2NsaWNrJywgc3dpcGVyLm5hdmlnYXRpb24ub25QcmV2Q2xpY2spO1xuICAgICAgJHByZXZFbC5yZW1vdmVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcyk7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnbmF2aWdhdGlvbicsXG4gIHBhcmFtczoge1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogbnVsbCxcbiAgICAgIHByZXZFbDogbnVsbCxcbiAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyxcbiAgICAgIGhpZGRlbkNsYXNzOiAnc3dpcGVyLWJ1dHRvbi1oaWRkZW4nLFxuICAgICAgbG9ja0NsYXNzOiAnc3dpcGVyLWJ1dHRvbi1sb2NrJ1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBuYXZpZ2F0aW9uOiBfZXh0ZW5kcyh7fSwgTmF2aWdhdGlvbilcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24uaW5pdCgpO1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgfSxcbiAgICB0b0VkZ2U6IGZ1bmN0aW9uIHRvRWRnZShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgZnJvbUVkZ2U6IGZ1bmN0aW9uIGZyb21FZGdlKHN3aXBlcikge1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24uZGVzdHJveSgpO1xuICAgIH0sXG4gICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKHN3aXBlciwgZSkge1xuICAgICAgdmFyIF9zd2lwZXIkbmF2aWdhdGlvbjMgPSBzd2lwZXIubmF2aWdhdGlvbixcbiAgICAgICAgICAkbmV4dEVsID0gX3N3aXBlciRuYXZpZ2F0aW9uMy4kbmV4dEVsLFxuICAgICAgICAgICRwcmV2RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24zLiRwcmV2RWw7XG4gICAgICB2YXIgdGFyZ2V0RWwgPSBlLnRhcmdldDtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRlT25DbGljayAmJiAhKDAsIF9kb20uZGVmYXVsdCkodGFyZ2V0RWwpLmlzKCRwcmV2RWwpICYmICEoMCwgX2RvbS5kZWZhdWx0KSh0YXJnZXRFbCkuaXMoJG5leHRFbCkpIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIChzd2lwZXIucGFnaW5hdGlvbi5lbCA9PT0gdGFyZ2V0RWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uZWwuY29udGFpbnModGFyZ2V0RWwpKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaXNIaWRkZW47XG5cbiAgICAgICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICAgICBpc0hpZGRlbiA9ICRuZXh0RWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgfSBlbHNlIGlmICgkcHJldkVsKSB7XG4gICAgICAgICAgaXNIaWRkZW4gPSAkcHJldkVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbmF2aWdhdGlvblNob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbmF2aWdhdGlvbkhpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgICAgJG5leHRFbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgICAkcHJldkVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUGFnaW5hdGlvbiA9IHtcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gUmVuZGVyIHx8IFVwZGF0ZSBQYWdpbmF0aW9uIGJ1bGxldHMvaXRlbXNcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bDtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmICghcGFyYW1zLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uJGVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICB2YXIgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgdmFyICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDsgLy8gQ3VycmVudC9Ub3RhbFxuXG4gICAgdmFyIGN1cnJlbnQ7XG4gICAgdmFyIHRvdGFsID0gc3dpcGVyLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMikgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBjdXJyZW50ID0gTWF0aC5jZWlsKChzd2lwZXIuYWN0aXZlSW5kZXggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuXG4gICAgICBpZiAoY3VycmVudCA+IHNsaWRlc0xlbmd0aCAtIDEgLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMikge1xuICAgICAgICBjdXJyZW50IC09IHNsaWRlc0xlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudCA+IHRvdGFsIC0gMSkgY3VycmVudCAtPSB0b3RhbDtcbiAgICAgIGlmIChjdXJyZW50IDwgMCAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnYnVsbGV0cycpIGN1cnJlbnQgPSB0b3RhbCArIGN1cnJlbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuc25hcEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgfSAvLyBUeXBlc1xuXG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGJ1bGxldHMgPSBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzO1xuICAgICAgdmFyIGZpcnN0SW5kZXg7XG4gICAgICB2YXIgbGFzdEluZGV4O1xuICAgICAgdmFyIG1pZEluZGV4O1xuXG4gICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUgPSBidWxsZXRzLmVxKDApW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdvdXRlcldpZHRoJyA6ICdvdXRlckhlaWdodCddKHRydWUpO1xuICAgICAgICAkZWwuY3NzKHN3aXBlci5pc0hvcml6b250YWwoKSA/ICd3aWR0aCcgOiAnaGVpZ2h0Jywgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSAqIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCkgKyBcInB4XCIpO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID4gMSAmJiBzd2lwZXIucHJldmlvdXNJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ICs9IGN1cnJlbnQgLSBzd2lwZXIucHJldmlvdXNJbmRleDtcblxuICAgICAgICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPiBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMSkge1xuICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDE7XG4gICAgICAgICAgfSBlbHNlIGlmIChzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZpcnN0SW5kZXggPSBjdXJyZW50IC0gc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4O1xuICAgICAgICBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgKE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSAtIDEpO1xuICAgICAgICBtaWRJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGJ1bGxldHMucmVtb3ZlQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCIgXCIgKyBwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0IFwiICsgcGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dC1uZXh0IFwiICsgcGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldiBcIiArIHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXYtcHJldiBcIiArIHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW1haW5cIik7XG5cbiAgICAgIGlmICgkZWwubGVuZ3RoID4gMSkge1xuICAgICAgICBidWxsZXRzLmVhY2goZnVuY3Rpb24gKGJ1bGxldCkge1xuICAgICAgICAgIHZhciAkYnVsbGV0ID0gKDAsIF9kb20uZGVmYXVsdCkoYnVsbGV0KTtcbiAgICAgICAgICB2YXIgYnVsbGV0SW5kZXggPSAkYnVsbGV0LmluZGV4KCk7XG5cbiAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPj0gZmlyc3RJbmRleCAmJiBidWxsZXRJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1tYWluXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgJGJ1bGxldC5wcmV2KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldlwiKS5wcmV2KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldi1wcmV2XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAkYnVsbGV0Lm5leHQoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0XCIpLm5leHQoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0LW5leHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciAkYnVsbGV0ID0gYnVsbGV0cy5lcShjdXJyZW50KTtcbiAgICAgICAgdmFyIGJ1bGxldEluZGV4ID0gJGJ1bGxldC5pbmRleCgpO1xuICAgICAgICAkYnVsbGV0LmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgIHZhciAkZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGZpcnN0SW5kZXgpO1xuICAgICAgICAgIHZhciAkbGFzdERpc3BsYXllZEJ1bGxldCA9IGJ1bGxldHMuZXEobGFzdEluZGV4KTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgICBidWxsZXRzLmVxKGkpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW1haW5cIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID49IGJ1bGxldHMubGVuZ3RoIC0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cykge1xuICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHM7IF9pID49IDA7IF9pIC09IDEpIHtcbiAgICAgICAgICAgICAgICBidWxsZXRzLmVxKGJ1bGxldHMubGVuZ3RoIC0gX2kpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW1haW5cIik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBidWxsZXRzLmVxKGJ1bGxldHMubGVuZ3RoIC0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDEpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXZcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkZmlyc3REaXNwbGF5ZWRCdWxsZXQucHJldigpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXZcIikucHJldigpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXYtcHJldlwiKTtcbiAgICAgICAgICAgICAgJGxhc3REaXNwbGF5ZWRCdWxsZXQubmV4dCgpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHRcIikubmV4dCgpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGZpcnN0RGlzcGxheWVkQnVsbGV0LnByZXYoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2XCIpLnByZXYoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2LXByZXZcIik7XG4gICAgICAgICAgICAkbGFzdERpc3BsYXllZEJ1bGxldC5uZXh0KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dFwiKS5uZXh0KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dC1uZXh0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIHZhciBkeW5hbWljQnVsbGV0c0xlbmd0aCA9IE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCk7XG4gICAgICAgIHZhciBidWxsZXRzT2Zmc2V0ID0gKHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUgKiBkeW5hbWljQnVsbGV0c0xlbmd0aCAtIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUpIC8gMiAtIG1pZEluZGV4ICogc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZTtcbiAgICAgICAgdmFyIG9mZnNldFByb3AgPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICBidWxsZXRzLmNzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBvZmZzZXRQcm9wIDogJ3RvcCcsIGJ1bGxldHNPZmZzZXQgKyBcInB4XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgJGVsLmZpbmQoXCIuXCIgKyBwYXJhbXMuY3VycmVudENsYXNzKS50ZXh0KHBhcmFtcy5mb3JtYXRGcmFjdGlvbkN1cnJlbnQoY3VycmVudCArIDEpKTtcbiAgICAgICRlbC5maW5kKFwiLlwiICsgcGFyYW1zLnRvdGFsQ2xhc3MpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uVG90YWwodG90YWwpKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicpIHtcbiAgICAgIHZhciBwcm9ncmVzc2JhckRpcmVjdGlvbjtcblxuICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cblxuICAgICAgdmFyIHNjYWxlID0gKGN1cnJlbnQgKyAxKSAvIHRvdGFsO1xuICAgICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgICB2YXIgc2NhbGVZID0gMTtcblxuICAgICAgaWYgKHByb2dyZXNzYmFyRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgc2NhbGVYID0gc2NhbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2FsZVkgPSBzY2FsZTtcbiAgICAgIH1cblxuICAgICAgJGVsLmZpbmQoXCIuXCIgKyBwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZVgoXCIgKyBzY2FsZVggKyBcIikgc2NhbGVZKFwiICsgc2NhbGVZICsgXCIpXCIpLnRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnY3VzdG9tJyAmJiBwYXJhbXMucmVuZGVyQ3VzdG9tKSB7XG4gICAgICAkZWwuaHRtbChwYXJhbXMucmVuZGVyQ3VzdG9tKHN3aXBlciwgY3VycmVudCArIDEsIHRvdGFsKSk7XG4gICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblJlbmRlcicsICRlbFswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uVXBkYXRlJywgJGVsWzBdKTtcbiAgICB9XG5cbiAgICAkZWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gUmVuZGVyIENvbnRhaW5lclxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFwYXJhbXMuZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICB2YXIgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuICAgIHZhciBwYWdpbmF0aW9uSFRNTCA9ICcnO1xuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycpIHtcbiAgICAgIHZhciBudW1iZXJPZkJ1bGxldHMgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHNsaWRlc0xlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiBudW1iZXJPZkJ1bGxldHMgPiBzbGlkZXNMZW5ndGgpIHtcbiAgICAgICAgbnVtYmVyT2ZCdWxsZXRzID0gc2xpZGVzTGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQnVsbGV0czsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwYXJhbXMucmVuZGVyQnVsbGV0KSB7XG4gICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gcGFyYW1zLnJlbmRlckJ1bGxldC5jYWxsKHN3aXBlciwgaSwgcGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBcIjxcIiArIHBhcmFtcy5idWxsZXRFbGVtZW50ICsgXCIgY2xhc3M9XFxcIlwiICsgcGFyYW1zLmJ1bGxldENsYXNzICsgXCJcXFwiPjwvXCIgKyBwYXJhbXMuYnVsbGV0RWxlbWVudCArIFwiPlwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgPSAkZWwuZmluZChcIi5cIiArIHBhcmFtcy5idWxsZXRDbGFzcy5yZXBsYWNlKC8gL2csICcuJykpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgaWYgKHBhcmFtcy5yZW5kZXJGcmFjdGlvbikge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHBhcmFtcy5yZW5kZXJGcmFjdGlvbi5jYWxsKHN3aXBlciwgcGFyYW1zLmN1cnJlbnRDbGFzcywgcGFyYW1zLnRvdGFsQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBcIjxzcGFuIGNsYXNzPVxcXCJcIiArIHBhcmFtcy5jdXJyZW50Q2xhc3MgKyBcIlxcXCI+PC9zcGFuPlwiICsgJyAvICcgKyAoXCI8c3BhbiBjbGFzcz1cXFwiXCIgKyBwYXJhbXMudG90YWxDbGFzcyArIFwiXFxcIj48L3NwYW4+XCIpO1xuICAgICAgfVxuXG4gICAgICAkZWwuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICBpZiAocGFyYW1zLnJlbmRlclByb2dyZXNzYmFyKSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlclByb2dyZXNzYmFyLmNhbGwoc3dpcGVyLCBwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBcIjxzcGFuIGNsYXNzPVxcXCJcIiArIHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcyArIFwiXFxcIj48L3NwYW4+XCI7XG4gICAgICB9XG5cbiAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgIT09ICdjdXN0b20nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN3aXBlci5wYWdpbmF0aW9uLiRlbFswXSk7XG4gICAgfVxuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFwYXJhbXMuZWwpIHJldHVybjtcbiAgICB2YXIgJGVsID0gKDAsIF9kb20uZGVmYXVsdCkocGFyYW1zLmVsKTtcbiAgICBpZiAoJGVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICRlbCA9IHN3aXBlci4kZWwuZmluZChwYXJhbXMuZWwpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY2xpY2thYmxlQ2xhc3MpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlKTtcblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgJGVsLmFkZENsYXNzKFwiXCIgKyBwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlICsgXCItZHluYW1pY1wiKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG5cbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIDwgMSkge1xuICAgICAgICBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicgJiYgcGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGUpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLm9uKCdjbGljaycsIFwiLlwiICsgcGFyYW1zLmJ1bGxldENsYXNzLnJlcGxhY2UoLyAvZywgJy4nKSwgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gKDAsIF9kb20uZGVmYXVsdCkodGhpcykuaW5kZXgoKSAqIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIGluZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIucGFnaW5hdGlvbiwge1xuICAgICAgJGVsOiAkZWwsXG4gICAgICBlbDogJGVsWzBdXG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdmFyICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDtcbiAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLmhpZGRlbkNsYXNzKTtcbiAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLm1vZGlmaWVyQ2xhc3MgKyBwYXJhbXMudHlwZSk7XG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMpIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMucmVtb3ZlQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcblxuICAgIGlmIChwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAkZWwub2ZmKCdjbGljaycsIFwiLlwiICsgcGFyYW1zLmJ1bGxldENsYXNzLnJlcGxhY2UoLyAvZywgJy4nKSk7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAncGFnaW5hdGlvbicsXG4gIHBhcmFtczoge1xuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBudWxsLFxuICAgICAgYnVsbGV0RWxlbWVudDogJ3NwYW4nLFxuICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgIHJlbmRlckJ1bGxldDogbnVsbCxcbiAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBudWxsLFxuICAgICAgcmVuZGVyRnJhY3Rpb246IG51bGwsXG4gICAgICByZW5kZXJDdXN0b206IG51bGwsXG4gICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlOiBmYWxzZSxcbiAgICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgICAgIC8vICdidWxsZXRzJyBvciAncHJvZ3Jlc3NiYXInIG9yICdmcmFjdGlvbicgb3IgJ2N1c3RvbSdcbiAgICAgIGR5bmFtaWNCdWxsZXRzOiBmYWxzZSxcbiAgICAgIGR5bmFtaWNNYWluQnVsbGV0czogMSxcbiAgICAgIGZvcm1hdEZyYWN0aW9uQ3VycmVudDogZnVuY3Rpb24gZm9ybWF0RnJhY3Rpb25DdXJyZW50KG51bWJlcikge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgfSxcbiAgICAgIGZvcm1hdEZyYWN0aW9uVG90YWw6IGZ1bmN0aW9uIGZvcm1hdEZyYWN0aW9uVG90YWwobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICB9LFxuICAgICAgYnVsbGV0Q2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQnLFxuICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlJyxcbiAgICAgIG1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi0nLFxuICAgICAgLy8gTkVXXG4gICAgICBjdXJyZW50Q2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1jdXJyZW50JyxcbiAgICAgIHRvdGFsQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi10b3RhbCcsXG4gICAgICBoaWRkZW5DbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWhpZGRlbicsXG4gICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwnLFxuICAgICAgcHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUnLFxuICAgICAgY2xpY2thYmxlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUnLFxuICAgICAgLy8gTkVXXG4gICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1sb2NrJ1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBwYWdpbmF0aW9uOiBfZXh0ZW5kcyh7XG4gICAgICAgIGR5bmFtaWNCdWxsZXRJbmRleDogMFxuICAgICAgfSwgUGFnaW5hdGlvbilcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uaW5pdCgpO1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24ucmVuZGVyKCk7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICB9LFxuICAgIGFjdGl2ZUluZGV4Q2hhbmdlOiBmdW5jdGlvbiBhY3RpdmVJbmRleENoYW5nZShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzd2lwZXIuc25hcEluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNuYXBJbmRleENoYW5nZTogZnVuY3Rpb24gc25hcEluZGV4Q2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbGlkZXNMZW5ndGhDaGFuZ2U6IGZ1bmN0aW9uIHNsaWRlc0xlbmd0aENoYW5nZShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24ucmVuZGVyKCk7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc25hcEdyaWRMZW5ndGhDaGFuZ2U6IGZ1bmN0aW9uIHNuYXBHcmlkTGVuZ3RoQ2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24ucmVuZGVyKCk7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljayhzd2lwZXIsIGUpIHtcbiAgICAgIHZhciB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmVsICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRlT25DbGljayAmJiBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID4gMCAmJiAhKDAsIF9kb20uZGVmYXVsdCkodGFyZ2V0RWwpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcykpIHtcbiAgICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIChzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgJiYgdGFyZ2V0RWwgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwgJiYgdGFyZ2V0RWwgPT09IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCkpIHJldHVybjtcbiAgICAgICAgdmFyIGlzSGlkZGVuID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRkZW5DbGFzcyk7XG5cbiAgICAgICAgaWYgKGlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25TaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25IaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi4kZWwudG9nZ2xlQ2xhc3Moc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUGFyYWxsYXggPSB7XG4gIHNldFRyYW5zZm9ybTogZnVuY3Rpb24gc2V0VHJhbnNmb3JtKGVsLCBwcm9ncmVzcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsO1xuICAgIHZhciAkZWwgPSAoMCwgX2RvbS5kZWZhdWx0KShlbCk7XG4gICAgdmFyIHJ0bEZhY3RvciA9IHJ0bCA/IC0xIDogMTtcbiAgICB2YXIgcCA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheCcpIHx8ICcwJztcbiAgICB2YXIgeCA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC14Jyk7XG4gICAgdmFyIHkgPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteScpO1xuICAgIHZhciBzY2FsZSA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZScpO1xuICAgIHZhciBvcGFjaXR5ID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHknKTtcblxuICAgIGlmICh4IHx8IHkpIHtcbiAgICAgIHggPSB4IHx8ICcwJztcbiAgICAgIHkgPSB5IHx8ICcwJztcbiAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgeCA9IHA7XG4gICAgICB5ID0gJzAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gcDtcbiAgICAgIHggPSAnMCc7XG4gICAgfVxuXG4gICAgaWYgKHguaW5kZXhPZignJScpID49IDApIHtcbiAgICAgIHggPSBwYXJzZUludCh4LCAxMCkgKiBwcm9ncmVzcyAqIHJ0bEZhY3RvciArIFwiJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0geCAqIHByb2dyZXNzICogcnRsRmFjdG9yICsgXCJweFwiO1xuICAgIH1cblxuICAgIGlmICh5LmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICB5ID0gcGFyc2VJbnQoeSwgMTApICogcHJvZ3Jlc3MgKyBcIiVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgeSA9IHkgKiBwcm9ncmVzcyArIFwicHhcIjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wYWNpdHkgIT09ICd1bmRlZmluZWQnICYmIG9wYWNpdHkgIT09IG51bGwpIHtcbiAgICAgIHZhciBjdXJyZW50T3BhY2l0eSA9IG9wYWNpdHkgLSAob3BhY2l0eSAtIDEpICogKDEgLSBNYXRoLmFicyhwcm9ncmVzcykpO1xuICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSBjdXJyZW50T3BhY2l0eTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNjYWxlID09PSAndW5kZWZpbmVkJyB8fCBzY2FsZSA9PT0gbnVsbCkge1xuICAgICAgJGVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIiwgMHB4KVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGN1cnJlbnRTY2FsZSA9IHNjYWxlIC0gKHNjYWxlIC0gMSkgKiAoMSAtIE1hdGguYWJzKHByb2dyZXNzKSk7XG4gICAgICAkZWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiLCAwcHgpIHNjYWxlKFwiICsgY3VycmVudFNjYWxlICsgXCIpXCIpO1xuICAgIH1cbiAgfSxcbiAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICAgIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzLFxuICAgICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDtcbiAgICAkZWwuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZV0nKS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgc3dpcGVyLnBhcmFsbGF4LnNldFRyYW5zZm9ybShlbCwgcHJvZ3Jlc3MpO1xuICAgIH0pO1xuICAgIHNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZUVsLCBzbGlkZUluZGV4KSB7XG4gICAgICB2YXIgc2xpZGVQcm9ncmVzcyA9IHNsaWRlRWwucHJvZ3Jlc3M7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJykge1xuICAgICAgICBzbGlkZVByb2dyZXNzICs9IE1hdGguY2VpbChzbGlkZUluZGV4IC8gMikgLSBwcm9ncmVzcyAqIChzbmFwR3JpZC5sZW5ndGggLSAxKTtcbiAgICAgIH1cblxuICAgICAgc2xpZGVQcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHNsaWRlUHJvZ3Jlc3MsIC0xKSwgMSk7XG4gICAgICAoMCwgX2RvbS5kZWZhdWx0KShzbGlkZUVsKS5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJykuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgc3dpcGVyLnBhcmFsbGF4LnNldFRyYW5zZm9ybShlbCwgc2xpZGVQcm9ncmVzcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIGlmIChkdXJhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBkdXJhdGlvbiA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICAgIH1cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICRlbC5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJykuZWFjaChmdW5jdGlvbiAocGFyYWxsYXhFbCkge1xuICAgICAgdmFyICRwYXJhbGxheEVsID0gKDAsIF9kb20uZGVmYXVsdCkocGFyYWxsYXhFbCk7XG4gICAgICB2YXIgcGFyYWxsYXhEdXJhdGlvbiA9IHBhcnNlSW50KCRwYXJhbGxheEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LWR1cmF0aW9uJyksIDEwKSB8fCBkdXJhdGlvbjtcbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkgcGFyYWxsYXhEdXJhdGlvbiA9IDA7XG4gICAgICAkcGFyYWxsYXhFbC50cmFuc2l0aW9uKHBhcmFsbGF4RHVyYXRpb24pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAncGFyYWxsYXgnLFxuICBwYXJhbXM6IHtcbiAgICBwYXJhbGxheDoge1xuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgcGFyYWxsYXg6IF9leHRlbmRzKHt9LCBQYXJhbGxheClcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgICBzd2lwZXIub3JpZ2luYWxQYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2xhdGUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2xhdGUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oc3dpcGVyLCBkdXJhdGlvbikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgU2Nyb2xsYmFyID0ge1xuICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsXG4gICAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICAgIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzO1xuICAgIHZhciBkcmFnU2l6ZSA9IHNjcm9sbGJhci5kcmFnU2l6ZSxcbiAgICAgICAgdHJhY2tTaXplID0gc2Nyb2xsYmFyLnRyYWNrU2l6ZSxcbiAgICAgICAgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsLFxuICAgICAgICAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICB2YXIgbmV3U2l6ZSA9IGRyYWdTaXplO1xuICAgIHZhciBuZXdQb3MgPSAodHJhY2tTaXplIC0gZHJhZ1NpemUpICogcHJvZ3Jlc3M7XG5cbiAgICBpZiAocnRsKSB7XG4gICAgICBuZXdQb3MgPSAtbmV3UG9zO1xuXG4gICAgICBpZiAobmV3UG9zID4gMCkge1xuICAgICAgICBuZXdTaXplID0gZHJhZ1NpemUgLSBuZXdQb3M7XG4gICAgICAgIG5ld1BvcyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKC1uZXdQb3MgKyBkcmFnU2l6ZSA+IHRyYWNrU2l6ZSkge1xuICAgICAgICBuZXdTaXplID0gdHJhY2tTaXplICsgbmV3UG9zO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmV3UG9zIDwgMCkge1xuICAgICAgbmV3U2l6ZSA9IGRyYWdTaXplICsgbmV3UG9zO1xuICAgICAgbmV3UG9zID0gMDtcbiAgICB9IGVsc2UgaWYgKG5ld1BvcyArIGRyYWdTaXplID4gdHJhY2tTaXplKSB7XG4gICAgICBuZXdTaXplID0gdHJhY2tTaXplIC0gbmV3UG9zO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICRkcmFnRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyBuZXdQb3MgKyBcInB4LCAwLCAwKVwiKTtcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUud2lkdGggPSBuZXdTaXplICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZHJhZ0VsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDBweCwgXCIgKyBuZXdQb3MgKyBcInB4LCAwKVwiKTtcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gbmV3U2l6ZSArIFwicHhcIjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgIGNsZWFyVGltZW91dChzd2lwZXIuc2Nyb2xsYmFyLnRpbWVvdXQpO1xuICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgJGVsLnRyYW5zaXRpb24oNDAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfSxcbiAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICBzd2lwZXIuc2Nyb2xsYmFyLiRkcmFnRWwudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH0sXG4gIHVwZGF0ZVNpemU6IGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyO1xuICAgIHZhciAkZHJhZ0VsID0gc2Nyb2xsYmFyLiRkcmFnRWwsXG4gICAgICAgICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgdmFyIHRyYWNrU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICRlbFswXS5vZmZzZXRXaWR0aCA6ICRlbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIGRpdmlkZXIgPSBzd2lwZXIuc2l6ZSAvIHN3aXBlci52aXJ0dWFsU2l6ZTtcbiAgICB2YXIgbW92ZURpdmlkZXIgPSBkaXZpZGVyICogKHRyYWNrU2l6ZSAvIHN3aXBlci5zaXplKTtcbiAgICB2YXIgZHJhZ1NpemU7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemUgPT09ICdhdXRvJykge1xuICAgICAgZHJhZ1NpemUgPSB0cmFja1NpemUgKiBkaXZpZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnU2l6ZSA9IHBhcnNlSW50KHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplLCAxMCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9IGRyYWdTaXplICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9IGRyYWdTaXplICsgXCJweFwiO1xuICAgIH1cblxuICAgIGlmIChkaXZpZGVyID49IDEpIHtcbiAgICAgICRlbFswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZWxbMF0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5oaWRlKSB7XG4gICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgfVxuXG4gICAgKDAsIF91dGlscy5leHRlbmQpKHNjcm9sbGJhciwge1xuICAgICAgdHJhY2tTaXplOiB0cmFja1NpemUsXG4gICAgICBkaXZpZGVyOiBkaXZpZGVyLFxuICAgICAgbW92ZURpdmlkZXI6IG1vdmVEaXZpZGVyLFxuICAgICAgZHJhZ1NpemU6IGRyYWdTaXplXG4gICAgfSk7XG4gICAgc2Nyb2xsYmFyLiRlbFtzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmxvY2tDbGFzcyk7XG4gIH0sXG4gIGdldFBvaW50ZXJQb3NpdGlvbjogZnVuY3Rpb24gZ2V0UG9pbnRlclBvc2l0aW9uKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHJldHVybiBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WTtcbiAgfSxcbiAgc2V0RHJhZ1Bvc2l0aW9uOiBmdW5jdGlvbiBzZXREcmFnUG9zaXRpb24oZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsLFxuICAgICAgICBkcmFnU2l6ZSA9IHNjcm9sbGJhci5kcmFnU2l6ZSxcbiAgICAgICAgdHJhY2tTaXplID0gc2Nyb2xsYmFyLnRyYWNrU2l6ZSxcbiAgICAgICAgZHJhZ1N0YXJ0UG9zID0gc2Nyb2xsYmFyLmRyYWdTdGFydFBvcztcbiAgICB2YXIgcG9zaXRpb25SYXRpbztcbiAgICBwb3NpdGlvblJhdGlvID0gKHNjcm9sbGJhci5nZXRQb2ludGVyUG9zaXRpb24oZSkgLSAkZWwub2Zmc2V0KClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCddIC0gKGRyYWdTdGFydFBvcyAhPT0gbnVsbCA/IGRyYWdTdGFydFBvcyA6IGRyYWdTaXplIC8gMikpIC8gKHRyYWNrU2l6ZSAtIGRyYWdTaXplKTtcbiAgICBwb3NpdGlvblJhdGlvID0gTWF0aC5tYXgoTWF0aC5taW4ocG9zaXRpb25SYXRpbywgMSksIDApO1xuXG4gICAgaWYgKHJ0bCkge1xuICAgICAgcG9zaXRpb25SYXRpbyA9IDEgLSBwb3NpdGlvblJhdGlvO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSArIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogcG9zaXRpb25SYXRpbztcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocG9zaXRpb24pO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH0sXG4gIG9uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWwsXG4gICAgICAgICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbDtcbiAgICBzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgc3dpcGVyLnNjcm9sbGJhci5kcmFnU3RhcnRQb3MgPSBlLnRhcmdldCA9PT0gJGRyYWdFbFswXSB8fCBlLnRhcmdldCA9PT0gJGRyYWdFbCA/IHNjcm9sbGJhci5nZXRQb2ludGVyUG9zaXRpb24oZSkgLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJ10gOiBudWxsO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbigxMDApO1xuICAgICRkcmFnRWwudHJhbnNpdGlvbigxMDApO1xuICAgIHNjcm9sbGJhci5zZXREcmFnUG9zaXRpb24oZSk7XG4gICAgY2xlYXJUaW1lb3V0KHN3aXBlci5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpO1xuICAgICRlbC50cmFuc2l0aW9uKDApO1xuXG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICAkZWwuY3NzKCdvcGFjaXR5JywgMSk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdzY3JvbGwtc25hcC10eXBlJywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ1N0YXJ0JywgZSk7XG4gIH0sXG4gIG9uRHJhZ01vdmU6IGZ1bmN0aW9uIG9uRHJhZ01vdmUoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWwsXG4gICAgICAgICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbDtcbiAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkKSByZXR1cm47XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICBzY3JvbGxiYXIuc2V0RHJhZ1Bvc2l0aW9uKGUpO1xuICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbigwKTtcbiAgICAkZWwudHJhbnNpdGlvbigwKTtcbiAgICAkZHJhZ0VsLnRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLmVtaXQoJ3Njcm9sbGJhckRyYWdNb3ZlJywgZSk7XG4gIH0sXG4gIG9uRHJhZ0VuZDogZnVuY3Rpb24gb25EcmFnRW5kKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkKSByZXR1cm47XG4gICAgc3dpcGVyLnNjcm9sbGJhci5pc1RvdWNoZWQgPSBmYWxzZTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmNzcygnc2Nyb2xsLXNuYXAtdHlwZScsICcnKTtcbiAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbignJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLnNjcm9sbGJhci5kcmFnVGltZW91dCk7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0ID0gKDAsIF91dGlscy5uZXh0VGljaykoZnVuY3Rpb24gKCkge1xuICAgICAgICAkZWwuY3NzKCdvcGFjaXR5JywgMCk7XG4gICAgICAgICRlbC50cmFuc2l0aW9uKDQwMCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ0VuZCcsIGUpO1xuXG4gICAgaWYgKHBhcmFtcy5zbmFwT25SZWxlYXNlKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICB9XG4gIH0sXG4gIGVuYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gZW5hYmxlRHJhZ2dhYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcixcbiAgICAgICAgdG91Y2hFdmVudHNUb3VjaCA9IHN3aXBlci50b3VjaEV2ZW50c1RvdWNoLFxuICAgICAgICB0b3VjaEV2ZW50c0Rlc2t0b3AgPSBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wLFxuICAgICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgdmFyIHRhcmdldCA9ICRlbFswXTtcbiAgICB2YXIgYWN0aXZlTGlzdGVuZXIgPSBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG5cbiAgICBpZiAoIXN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5zdGFydCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3AubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLm1vdmUsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnTW92ZSwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgZGlzYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gZGlzYWJsZURyYWdnYWJsZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsXG4gICAgICAgIHRvdWNoRXZlbnRzVG91Y2ggPSBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCxcbiAgICAgICAgdG91Y2hFdmVudHNEZXNrdG9wID0gc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcCxcbiAgICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgIHZhciB0YXJnZXQgPSAkZWxbMF07XG4gICAgdmFyIGFjdGl2ZUxpc3RlbmVyID0gc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuXG4gICAgaWYgKCFzdXBwb3J0LnRvdWNoKSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3Auc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLm1vdmUsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnTW92ZSwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3AuZW5kLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5zdGFydCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guZW5kLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICAkc3dpcGVyRWwgPSBzd2lwZXIuJGVsO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICB2YXIgJGVsID0gKDAsIF9kb20uZGVmYXVsdCkocGFyYW1zLmVsKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBwYXJhbXMuZWwgPT09ICdzdHJpbmcnICYmICRlbC5sZW5ndGggPiAxICYmICRzd2lwZXJFbC5maW5kKHBhcmFtcy5lbCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAkZWwgPSAkc3dpcGVyRWwuZmluZChwYXJhbXMuZWwpO1xuICAgIH1cblxuICAgIHZhciAkZHJhZ0VsID0gJGVsLmZpbmQoXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3MpO1xuXG4gICAgaWYgKCRkcmFnRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAkZHJhZ0VsID0gKDAsIF9kb20uZGVmYXVsdCkoXCI8ZGl2IGNsYXNzPVxcXCJcIiArIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcyArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICAkZWwuYXBwZW5kKCRkcmFnRWwpO1xuICAgIH1cblxuICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzY3JvbGxiYXIsIHtcbiAgICAgICRlbDogJGVsLFxuICAgICAgZWw6ICRlbFswXSxcbiAgICAgICRkcmFnRWw6ICRkcmFnRWwsXG4gICAgICBkcmFnRWw6ICRkcmFnRWxbMF1cbiAgICB9KTtcblxuICAgIGlmIChwYXJhbXMuZHJhZ2dhYmxlKSB7XG4gICAgICBzY3JvbGxiYXIuZW5hYmxlRHJhZ2dhYmxlKCk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5zY3JvbGxiYXIuZGlzYWJsZURyYWdnYWJsZSgpO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnc2Nyb2xsYmFyJyxcbiAgcGFyYW1zOiB7XG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogbnVsbCxcbiAgICAgIGRyYWdTaXplOiAnYXV0bycsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBzbmFwT25SZWxlYXNlOiB0cnVlLFxuICAgICAgbG9ja0NsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1sb2NrJyxcbiAgICAgIGRyYWdDbGFzczogJ3N3aXBlci1zY3JvbGxiYXItZHJhZydcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgc2Nyb2xsYmFyOiBfZXh0ZW5kcyh7XG4gICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICAgIGRyYWdUaW1lb3V0OiBudWxsXG4gICAgICB9LCBTY3JvbGxiYXIpXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuaW5pdCgpO1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICB9LFxuICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKHN3aXBlcikge1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgfSxcbiAgICBvYnNlcnZlclVwZGF0ZTogZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHN3aXBlcikge1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oc3dpcGVyLCBkdXJhdGlvbikge1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgVGh1bWJzID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB0aHVtYnNQYXJhbXMgPSBzd2lwZXIucGFyYW1zLnRodW1icztcbiAgICBpZiAoc3dpcGVyLnRodW1icy5pbml0aWFsaXplZCkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci50aHVtYnMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBTd2lwZXJDbGFzcyA9IHN3aXBlci5jb25zdHJ1Y3RvcjtcblxuICAgIGlmICh0aHVtYnNQYXJhbXMuc3dpcGVyIGluc3RhbmNlb2YgU3dpcGVyQ2xhc3MpIHtcbiAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyID0gdGh1bWJzUGFyYW1zLnN3aXBlcjtcbiAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIudGh1bWJzLnN3aXBlci5vcmlnaW5hbFBhcmFtcywge1xuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLnRodW1icy5zd2lwZXIucGFyYW1zLCB7XG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHRodW1ic1BhcmFtcy5zd2lwZXIpKSB7XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlciA9IG5ldyBTd2lwZXJDbGFzcygoMCwgX3V0aWxzLmV4dGVuZCkoe30sIHRodW1ic1BhcmFtcy5zd2lwZXIsIHtcbiAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZVxuICAgICAgfSkpO1xuICAgICAgc3dpcGVyLnRodW1icy5zd2lwZXJDcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzd2lwZXIudGh1bWJzLnN3aXBlci4kZWwuYWRkQ2xhc3Moc3dpcGVyLnBhcmFtcy50aHVtYnMudGh1bWJzQ29udGFpbmVyQ2xhc3MpO1xuICAgIHN3aXBlci50aHVtYnMuc3dpcGVyLm9uKCd0YXAnLCBzd2lwZXIudGh1bWJzLm9uVGh1bWJDbGljayk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIG9uVGh1bWJDbGljazogZnVuY3Rpb24gb25UaHVtYkNsaWNrKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICBpZiAoIXRodW1ic1N3aXBlcikgcmV0dXJuO1xuICAgIHZhciBjbGlja2VkSW5kZXggPSB0aHVtYnNTd2lwZXIuY2xpY2tlZEluZGV4O1xuICAgIHZhciBjbGlja2VkU2xpZGUgPSB0aHVtYnNTd2lwZXIuY2xpY2tlZFNsaWRlO1xuICAgIGlmIChjbGlja2VkU2xpZGUgJiYgKDAsIF9kb20uZGVmYXVsdCkoY2xpY2tlZFNsaWRlKS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnRodW1icy5zbGlkZVRodW1iQWN0aXZlQ2xhc3MpKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBjbGlja2VkSW5kZXggPT09ICd1bmRlZmluZWQnIHx8IGNsaWNrZWRJbmRleCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciBzbGlkZVRvSW5kZXg7XG5cbiAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzbGlkZVRvSW5kZXggPSBwYXJzZUludCgoMCwgX2RvbS5kZWZhdWx0KSh0aHVtYnNTd2lwZXIuY2xpY2tlZFNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlVG9JbmRleCA9IGNsaWNrZWRJbmRleDtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICB2YXIgY3VycmVudEluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuXG4gICAgICBpZiAoc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICAgICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgY3VycmVudEluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkluZGV4ID0gc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLnByZXZBbGwoXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgc2xpZGVUb0luZGV4ICsgXCJcXFwiXVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgdmFyIG5leHRJbmRleCA9IHN3aXBlci5zbGlkZXMuZXEoY3VycmVudEluZGV4KS5uZXh0QWxsKFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHNsaWRlVG9JbmRleCArIFwiXFxcIl1cIikuZXEoMCkuaW5kZXgoKTtcbiAgICAgIGlmICh0eXBlb2YgcHJldkluZGV4ID09PSAndW5kZWZpbmVkJykgc2xpZGVUb0luZGV4ID0gbmV4dEluZGV4O2Vsc2UgaWYgKHR5cGVvZiBuZXh0SW5kZXggPT09ICd1bmRlZmluZWQnKSBzbGlkZVRvSW5kZXggPSBwcmV2SW5kZXg7ZWxzZSBpZiAobmV4dEluZGV4IC0gY3VycmVudEluZGV4IDwgY3VycmVudEluZGV4IC0gcHJldkluZGV4KSBzbGlkZVRvSW5kZXggPSBuZXh0SW5kZXg7ZWxzZSBzbGlkZVRvSW5kZXggPSBwcmV2SW5kZXg7XG4gICAgfVxuXG4gICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoaW5pdGlhbCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICBpZiAoIXRodW1ic1N3aXBlcikgcmV0dXJuO1xuICAgIHZhciBzbGlkZXNQZXJWaWV3ID0gdGh1bWJzU3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyB0aHVtYnNTd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IHRodW1ic1N3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICB2YXIgYXV0b1Njcm9sbE9mZnNldCA9IHN3aXBlci5wYXJhbXMudGh1bWJzLmF1dG9TY3JvbGxPZmZzZXQ7XG4gICAgdmFyIHVzZU9mZnNldCA9IGF1dG9TY3JvbGxPZmZzZXQgJiYgIXRodW1ic1N3aXBlci5wYXJhbXMubG9vcDtcblxuICAgIGlmIChzd2lwZXIucmVhbEluZGV4ICE9PSB0aHVtYnNTd2lwZXIucmVhbEluZGV4IHx8IHVzZU9mZnNldCkge1xuICAgICAgdmFyIGN1cnJlbnRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgIHZhciBuZXdUaHVtYnNJbmRleDtcbiAgICAgIHZhciBkaXJlY3Rpb247XG5cbiAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgaWYgKHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5oYXNDbGFzcyh0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgdGh1bWJzU3dpcGVyLmxvb3BGaXgoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICAgICAgICB0aHVtYnNTd2lwZXIuX2NsaWVudExlZnQgPSB0aHVtYnNTd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICAgICAgICAgIGN1cnJlbnRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgICAgfSAvLyBGaW5kIGFjdHVhbCB0aHVtYnMgaW5kZXggdG8gc2xpZGUgdG9cblxuXG4gICAgICAgIHZhciBwcmV2VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRUaHVtYnNJbmRleCkucHJldkFsbChcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBzd2lwZXIucmVhbEluZGV4ICsgXCJcXFwiXVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICB2YXIgbmV4dFRodW1ic0luZGV4ID0gdGh1bWJzU3dpcGVyLnNsaWRlcy5lcShjdXJyZW50VGh1bWJzSW5kZXgpLm5leHRBbGwoXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgc3dpcGVyLnJlYWxJbmRleCArIFwiXFxcIl1cIikuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmV2VGh1bWJzSW5kZXggPT09ICd1bmRlZmluZWQnKSBuZXdUaHVtYnNJbmRleCA9IG5leHRUaHVtYnNJbmRleDtlbHNlIGlmICh0eXBlb2YgbmV4dFRodW1ic0luZGV4ID09PSAndW5kZWZpbmVkJykgbmV3VGh1bWJzSW5kZXggPSBwcmV2VGh1bWJzSW5kZXg7ZWxzZSBpZiAobmV4dFRodW1ic0luZGV4IC0gY3VycmVudFRodW1ic0luZGV4ID09PSBjdXJyZW50VGh1bWJzSW5kZXggLSBwcmV2VGh1bWJzSW5kZXgpIG5ld1RodW1ic0luZGV4ID0gY3VycmVudFRodW1ic0luZGV4O2Vsc2UgaWYgKG5leHRUaHVtYnNJbmRleCAtIGN1cnJlbnRUaHVtYnNJbmRleCA8IGN1cnJlbnRUaHVtYnNJbmRleCAtIHByZXZUaHVtYnNJbmRleCkgbmV3VGh1bWJzSW5kZXggPSBuZXh0VGh1bWJzSW5kZXg7ZWxzZSBuZXdUaHVtYnNJbmRleCA9IHByZXZUaHVtYnNJbmRleDtcbiAgICAgICAgZGlyZWN0aW9uID0gc3dpcGVyLmFjdGl2ZUluZGV4ID4gc3dpcGVyLnByZXZpb3VzSW5kZXggPyAnbmV4dCcgOiAncHJldic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdUaHVtYnNJbmRleCA9IHN3aXBlci5yZWFsSW5kZXg7XG4gICAgICAgIGRpcmVjdGlvbiA9IG5ld1RodW1ic0luZGV4ID4gc3dpcGVyLnByZXZpb3VzSW5kZXggPyAnbmV4dCcgOiAncHJldic7XG4gICAgICB9XG5cbiAgICAgIGlmICh1c2VPZmZzZXQpIHtcbiAgICAgICAgbmV3VGh1bWJzSW5kZXggKz0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyBhdXRvU2Nyb2xsT2Zmc2V0IDogLTEgKiBhdXRvU2Nyb2xsT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGh1bWJzU3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzICYmIHRodW1ic1N3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5pbmRleE9mKG5ld1RodW1ic0luZGV4KSA8IDApIHtcbiAgICAgICAgaWYgKHRodW1ic1N3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICBpZiAobmV3VGh1bWJzSW5kZXggPiBjdXJyZW50VGh1bWJzSW5kZXgpIHtcbiAgICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gbmV3VGh1bWJzSW5kZXggLSBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSArIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gbmV3VGh1bWJzSW5kZXggKyBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5ld1RodW1ic0luZGV4ID4gY3VycmVudFRodW1ic0luZGV4KSB7XG4gICAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBuZXdUaHVtYnNJbmRleCAtIHNsaWRlc1BlclZpZXcgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGh1bWJzU3dpcGVyLnNsaWRlVG8obmV3VGh1bWJzSW5kZXgsIGluaXRpYWwgPyAwIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9IC8vIEFjdGl2YXRlIHRodW1ic1xuXG5cbiAgICB2YXIgdGh1bWJzVG9BY3RpdmF0ZSA9IDE7XG4gICAgdmFyIHRodW1iQWN0aXZlQ2xhc3MgPSBzd2lwZXIucGFyYW1zLnRodW1icy5zbGlkZVRodW1iQWN0aXZlQ2xhc3M7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgdGh1bWJzVG9BY3RpdmF0ZSA9IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICB9XG5cbiAgICBpZiAoIXN3aXBlci5wYXJhbXMudGh1bWJzLm11bHRpcGxlQWN0aXZlVGh1bWJzKSB7XG4gICAgICB0aHVtYnNUb0FjdGl2YXRlID0gMTtcbiAgICB9XG5cbiAgICB0aHVtYnNUb0FjdGl2YXRlID0gTWF0aC5mbG9vcih0aHVtYnNUb0FjdGl2YXRlKTtcbiAgICB0aHVtYnNTd2lwZXIuc2xpZGVzLnJlbW92ZUNsYXNzKHRodW1iQWN0aXZlQ2xhc3MpO1xuXG4gICAgaWYgKHRodW1ic1N3aXBlci5wYXJhbXMubG9vcCB8fCB0aHVtYnNTd2lwZXIucGFyYW1zLnZpcnR1YWwgJiYgdGh1bWJzU3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGh1bWJzVG9BY3RpdmF0ZTsgaSArPSAxKSB7XG4gICAgICAgIHRodW1ic1N3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIChzd2lwZXIucmVhbEluZGV4ICsgaSkgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHRodW1iQWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGh1bWJzVG9BY3RpdmF0ZTsgX2kgKz0gMSkge1xuICAgICAgICB0aHVtYnNTd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5yZWFsSW5kZXggKyBfaSkuYWRkQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAndGh1bWJzJyxcbiAgcGFyYW1zOiB7XG4gICAgdGh1bWJzOiB7XG4gICAgICBzd2lwZXI6IG51bGwsXG4gICAgICBtdWx0aXBsZUFjdGl2ZVRodW1iczogdHJ1ZSxcbiAgICAgIGF1dG9TY3JvbGxPZmZzZXQ6IDAsXG4gICAgICBzbGlkZVRodW1iQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlJyxcbiAgICAgIHRodW1ic0NvbnRhaW5lckNsYXNzOiAnc3dpcGVyLWNvbnRhaW5lci10aHVtYnMnXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIHRodW1iczogX2V4dGVuZHMoe1xuICAgICAgICBzd2lwZXI6IG51bGwsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZVxuICAgICAgfSwgVGh1bWJzKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoc3dpcGVyKSB7XG4gICAgICB2YXIgdGh1bWJzID0gc3dpcGVyLnBhcmFtcy50aHVtYnM7XG4gICAgICBpZiAoIXRodW1icyB8fCAhdGh1bWJzLnN3aXBlcikgcmV0dXJuO1xuICAgICAgc3dpcGVyLnRodW1icy5pbml0KCk7XG4gICAgICBzd2lwZXIudGh1bWJzLnVwZGF0ZSh0cnVlKTtcbiAgICB9LFxuICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiBzbGlkZUNoYW5nZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKCk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKCk7XG4gICAgfSxcbiAgICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKCk7XG4gICAgfSxcbiAgICBvYnNlcnZlclVwZGF0ZTogZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci50aHVtYnMuc3dpcGVyKSByZXR1cm47XG4gICAgICBzd2lwZXIudGh1bWJzLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihzd2lwZXIsIGR1cmF0aW9uKSB7XG4gICAgICB2YXIgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgICBpZiAoIXRodW1ic1N3aXBlcikgcmV0dXJuO1xuICAgICAgdGh1bWJzU3dpcGVyLnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gYmVmb3JlRGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHZhciB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICAgIGlmICghdGh1bWJzU3dpcGVyKSByZXR1cm47XG5cbiAgICAgIGlmIChzd2lwZXIudGh1bWJzLnN3aXBlckNyZWF0ZWQgJiYgdGh1bWJzU3dpcGVyKSB7XG4gICAgICAgIHRodW1ic1N3aXBlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIFZpcnR1YWwgPSB7XG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGZvcmNlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIF9zd2lwZXIkcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgc2xpZGVzUGVyVmlldyA9IF9zd2lwZXIkcGFyYW1zLnNsaWRlc1BlclZpZXcsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwID0gX3N3aXBlciRwYXJhbXMuc2xpZGVzUGVyR3JvdXAsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzID0gX3N3aXBlciRwYXJhbXMuY2VudGVyZWRTbGlkZXM7XG4gICAgdmFyIF9zd2lwZXIkcGFyYW1zJHZpcnR1YSA9IHN3aXBlci5wYXJhbXMudmlydHVhbCxcbiAgICAgICAgYWRkU2xpZGVzQmVmb3JlID0gX3N3aXBlciRwYXJhbXMkdmlydHVhLmFkZFNsaWRlc0JlZm9yZSxcbiAgICAgICAgYWRkU2xpZGVzQWZ0ZXIgPSBfc3dpcGVyJHBhcmFtcyR2aXJ0dWEuYWRkU2xpZGVzQWZ0ZXI7XG4gICAgdmFyIF9zd2lwZXIkdmlydHVhbCA9IHN3aXBlci52aXJ0dWFsLFxuICAgICAgICBwcmV2aW91c0Zyb20gPSBfc3dpcGVyJHZpcnR1YWwuZnJvbSxcbiAgICAgICAgcHJldmlvdXNUbyA9IF9zd2lwZXIkdmlydHVhbC50byxcbiAgICAgICAgc2xpZGVzID0gX3N3aXBlciR2aXJ0dWFsLnNsaWRlcyxcbiAgICAgICAgcHJldmlvdXNTbGlkZXNHcmlkID0gX3N3aXBlciR2aXJ0dWFsLnNsaWRlc0dyaWQsXG4gICAgICAgIHJlbmRlclNsaWRlID0gX3N3aXBlciR2aXJ0dWFsLnJlbmRlclNsaWRlLFxuICAgICAgICBwcmV2aW91c09mZnNldCA9IF9zd2lwZXIkdmlydHVhbC5vZmZzZXQ7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgdmFyIG9mZnNldFByb3A7XG4gICAgaWYgKHN3aXBlci5ydGxUcmFuc2xhdGUpIG9mZnNldFByb3AgPSAncmlnaHQnO2Vsc2Ugb2Zmc2V0UHJvcCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIHZhciBzbGlkZXNBZnRlcjtcbiAgICB2YXIgc2xpZGVzQmVmb3JlO1xuXG4gICAgaWYgKGNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzbGlkZXNBZnRlciA9IE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpICsgc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNBZnRlcjtcbiAgICAgIHNsaWRlc0JlZm9yZSA9IE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpICsgc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNCZWZvcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlc0FmdGVyID0gc2xpZGVzUGVyVmlldyArIChzbGlkZXNQZXJHcm91cCAtIDEpICsgYWRkU2xpZGVzQWZ0ZXI7XG4gICAgICBzbGlkZXNCZWZvcmUgPSBzbGlkZXNQZXJHcm91cCArIGFkZFNsaWRlc0JlZm9yZTtcbiAgICB9XG5cbiAgICB2YXIgZnJvbSA9IE1hdGgubWF4KChhY3RpdmVJbmRleCB8fCAwKSAtIHNsaWRlc0JlZm9yZSwgMCk7XG4gICAgdmFyIHRvID0gTWF0aC5taW4oKGFjdGl2ZUluZGV4IHx8IDApICsgc2xpZGVzQWZ0ZXIsIHNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICB2YXIgb2Zmc2V0ID0gKHN3aXBlci5zbGlkZXNHcmlkW2Zyb21dIHx8IDApIC0gKHN3aXBlci5zbGlkZXNHcmlkWzBdIHx8IDApO1xuICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIudmlydHVhbCwge1xuICAgICAgZnJvbTogZnJvbSxcbiAgICAgIHRvOiB0byxcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgc2xpZGVzR3JpZDogc3dpcGVyLnNsaWRlc0dyaWRcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9uUmVuZGVyZWQoKSB7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICAgIGlmIChzd2lwZXIubGF6eSAmJiBzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzRnJvbSA9PT0gZnJvbSAmJiBwcmV2aW91c1RvID09PSB0byAmJiAhZm9yY2UpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzR3JpZCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkICYmIG9mZnNldCAhPT0gcHJldmlvdXNPZmZzZXQpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlcy5jc3Mob2Zmc2V0UHJvcCwgb2Zmc2V0ICsgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbCkge1xuICAgICAgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsLmNhbGwoc3dpcGVyLCB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICB0bzogdG8sXG4gICAgICAgIHNsaWRlczogZnVuY3Rpb24gZ2V0U2xpZGVzKCkge1xuICAgICAgICAgIHZhciBzbGlkZXNUb1JlbmRlciA9IFtdO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IGZyb207IGkgPD0gdG87IGkgKz0gMSkge1xuICAgICAgICAgICAgc2xpZGVzVG9SZW5kZXIucHVzaChzbGlkZXNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzbGlkZXNUb1JlbmRlcjtcbiAgICAgICAgfSgpXG4gICAgICB9KTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbFVwZGF0ZSkge1xuICAgICAgICBvblJlbmRlcmVkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJlcGVuZEluZGV4ZXMgPSBbXTtcbiAgICB2YXIgYXBwZW5kSW5kZXhlcyA9IFtdO1xuXG4gICAgaWYgKGZvcmNlKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKS5yZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IHByZXZpb3VzRnJvbTsgaSA8PSBwcmV2aW91c1RvOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGkgPCBmcm9tIHx8IGkgPiB0bykge1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLmZpbmQoXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBpICsgXCJcXFwiXVwiKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBzbGlkZXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICBpZiAoX2kgPj0gZnJvbSAmJiBfaSA8PSB0bykge1xuICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzVG8gPT09ICd1bmRlZmluZWQnIHx8IGZvcmNlKSB7XG4gICAgICAgICAgYXBwZW5kSW5kZXhlcy5wdXNoKF9pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoX2kgPiBwcmV2aW91c1RvKSBhcHBlbmRJbmRleGVzLnB1c2goX2kpO1xuICAgICAgICAgIGlmIChfaSA8IHByZXZpb3VzRnJvbSkgcHJlcGVuZEluZGV4ZXMucHVzaChfaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRJbmRleGVzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5hcHBlbmQocmVuZGVyU2xpZGUoc2xpZGVzW2luZGV4XSwgaW5kZXgpKTtcbiAgICB9KTtcbiAgICBwcmVwZW5kSW5kZXhlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYiAtIGE7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLnByZXBlbmQocmVuZGVyU2xpZGUoc2xpZGVzW2luZGV4XSwgaW5kZXgpKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbignLnN3aXBlci1zbGlkZScpLmNzcyhvZmZzZXRQcm9wLCBvZmZzZXQgKyBcInB4XCIpO1xuICAgIG9uUmVuZGVyZWQoKTtcbiAgfSxcbiAgcmVuZGVyU2xpZGU6IGZ1bmN0aW9uIHJlbmRlclNsaWRlKHNsaWRlLCBpbmRleCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnZpcnR1YWw7XG5cbiAgICBpZiAocGFyYW1zLmNhY2hlICYmIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgJHNsaWRlRWwgPSBwYXJhbXMucmVuZGVyU2xpZGUgPyAoMCwgX2RvbS5kZWZhdWx0KShwYXJhbXMucmVuZGVyU2xpZGUuY2FsbChzd2lwZXIsIHNsaWRlLCBpbmRleCkpIDogKDAsIF9kb20uZGVmYXVsdCkoXCI8ZGl2IGNsYXNzPVxcXCJcIiArIHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcyArIFwiXFxcIiBkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBpbmRleCArIFwiXFxcIj5cIiArIHNsaWRlICsgXCI8L2Rpdj5cIik7XG4gICAgaWYgKCEkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpKSAkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgICBpZiAocGFyYW1zLmNhY2hlKSBzd2lwZXIudmlydHVhbC5jYWNoZVtpbmRleF0gPSAkc2xpZGVFbDtcbiAgICByZXR1cm4gJHNsaWRlRWw7XG4gIH0sXG4gIGFwcGVuZFNsaWRlOiBmdW5jdGlvbiBhcHBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0pIHN3aXBlci52aXJ0dWFsLnNsaWRlcy5wdXNoKHNsaWRlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy5wdXNoKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICB9LFxuICBwcmVwZW5kU2xpZGU6IGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyAxO1xuICAgIHZhciBudW1iZXJPZk5ld1NsaWRlcyA9IDE7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbGlkZXMpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldKSBzd2lwZXIudmlydHVhbC5zbGlkZXMudW5zaGlmdChzbGlkZXNbaV0pO1xuICAgICAgfVxuXG4gICAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgICAgIG51bWJlck9mTmV3U2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnVuc2hpZnQoc2xpZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICB2YXIgY2FjaGUgPSBzd2lwZXIudmlydHVhbC5jYWNoZTtcbiAgICAgIHZhciBuZXdDYWNoZSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoY2FjaGUpLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlZEluZGV4KSB7XG4gICAgICAgIHZhciAkY2FjaGVkRWwgPSBjYWNoZVtjYWNoZWRJbmRleF07XG4gICAgICAgIHZhciBjYWNoZWRFbEluZGV4ID0gJGNhY2hlZEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG5cbiAgICAgICAgaWYgKGNhY2hlZEVsSW5kZXgpIHtcbiAgICAgICAgICAkY2FjaGVkRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnLCBwYXJzZUludChjYWNoZWRFbEluZGV4LCAxMCkgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NhY2hlW3BhcnNlSW50KGNhY2hlZEluZGV4LCAxMCkgKyBudW1iZXJPZk5ld1NsaWRlc10gPSAkY2FjaGVkRWw7XG4gICAgICB9KTtcbiAgICAgIHN3aXBlci52aXJ0dWFsLmNhY2hlID0gbmV3Q2FjaGU7XG4gICAgfVxuXG4gICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfSxcbiAgcmVtb3ZlU2xpZGU6IGZ1bmN0aW9uIHJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICd1bmRlZmluZWQnIHx8IHNsaWRlc0luZGV4ZXMgPT09IG51bGwpIHJldHVybjtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbGlkZXNJbmRleGVzKSkge1xuICAgICAgZm9yICh2YXIgaSA9IHNsaWRlc0luZGV4ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnNwbGljZShzbGlkZXNJbmRleGVzW2ldLCAxKTtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci52aXJ0dWFsLmNhY2hlW3NsaWRlc0luZGV4ZXNbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNsaWRlc0luZGV4ZXNbaV0gPCBhY3RpdmVJbmRleCkgYWN0aXZlSW5kZXggLT0gMTtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCwgMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy5zcGxpY2Uoc2xpZGVzSW5kZXhlcywgMSk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgICAgZGVsZXRlIHN3aXBlci52aXJ0dWFsLmNhY2hlW3NsaWRlc0luZGV4ZXNdO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2xpZGVzSW5kZXhlcyA8IGFjdGl2ZUluZGV4KSBhY3RpdmVJbmRleCAtPSAxO1xuICAgICAgYWN0aXZlSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCwgMCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZUluZGV4LCAwKTtcbiAgfSxcbiAgcmVtb3ZlQWxsU2xpZGVzOiBmdW5jdGlvbiByZW1vdmVBbGxTbGlkZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzID0gW107XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICBzd2lwZXIudmlydHVhbC5jYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcbiAgICBzd2lwZXIuc2xpZGVUbygwLCAwKTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ3ZpcnR1YWwnLFxuICBwYXJhbXM6IHtcbiAgICB2aXJ0dWFsOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHNsaWRlczogW10sXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIHJlbmRlclNsaWRlOiBudWxsLFxuICAgICAgcmVuZGVyRXh0ZXJuYWw6IG51bGwsXG4gICAgICByZW5kZXJFeHRlcm5hbFVwZGF0ZTogdHJ1ZSxcbiAgICAgIGFkZFNsaWRlc0JlZm9yZTogMCxcbiAgICAgIGFkZFNsaWRlc0FmdGVyOiAwXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIHZpcnR1YWw6IF9leHRlbmRzKHt9LCBWaXJ0dWFsLCB7XG4gICAgICAgIHNsaWRlczogc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnNsaWRlcyxcbiAgICAgICAgY2FjaGU6IHt9XG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwidmlydHVhbFwiKTtcbiAgICAgIHZhciBvdmVyd3JpdGVQYXJhbXMgPSB7XG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWVcbiAgICAgIH07XG4gICAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG5cbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUpIHtcbiAgICAgICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBab29tID0ge1xuICAvLyBDYWxjIFNjYWxlIEZyb20gTXVsdGktdG91Y2hlc1xuICBnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzOiBmdW5jdGlvbiBnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpIHtcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHJldHVybiAxO1xuICAgIHZhciB4MSA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICB2YXIgeTEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgdmFyIHgyID0gZS50YXJnZXRUb3VjaGVzWzFdLnBhZ2VYO1xuICAgIHZhciB5MiA9IGUudGFyZ2V0VG91Y2hlc1sxXS5wYWdlWTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coeDIgLSB4MSwgMikgKyBNYXRoLnBvdyh5MiAtIHkxLCAyKSk7XG4gICAgcmV0dXJuIGRpc3RhbmNlO1xuICB9LFxuICAvLyBFdmVudHNcbiAgb25HZXN0dXJlU3RhcnQ6IGZ1bmN0aW9uIG9uR2VzdHVyZVN0YXJ0KGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcbiAgICB6b29tLmZha2VHZXN0dXJlVG91Y2hlZCA9IGZhbHNlO1xuICAgIHpvb20uZmFrZUdlc3R1cmVNb3ZlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB6b29tLmZha2VHZXN0dXJlVG91Y2hlZCA9IHRydWU7XG4gICAgICBnZXN0dXJlLnNjYWxlU3RhcnQgPSBab29tLmdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSk7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRzbGlkZUVsIHx8ICFnZXN0dXJlLiRzbGlkZUVsLmxlbmd0aCkge1xuICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKGUudGFyZ2V0KS5jbG9zZXN0KFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgIGlmIChnZXN0dXJlLiRzbGlkZUVsLmxlbmd0aCA9PT0gMCkgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSBnZXN0dXJlLiRzbGlkZUVsLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMsIHBpY3R1cmUsIC5zd2lwZXItem9vbS10YXJnZXQnKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoXCIuXCIgKyBwYXJhbXMuY29udGFpbmVyQ2xhc3MpO1xuICAgICAgZ2VzdHVyZS5tYXhSYXRpbyA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG5cbiAgICAgIGlmIChnZXN0dXJlLiRpbWFnZVdyYXBFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLiRpbWFnZUVsKSB7XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oMCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnpvb20uaXNTY2FsaW5nID0gdHJ1ZTtcbiAgfSxcbiAgb25HZXN0dXJlQ2hhbmdlOiBmdW5jdGlvbiBvbkdlc3R1cmVDaGFuZ2UoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuXG4gICAgaWYgKCFzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2htb3ZlJyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gdHJ1ZTtcbiAgICAgIGdlc3R1cmUuc2NhbGVNb3ZlID0gWm9vbS5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpO1xuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2dlc3R1cmVjaGFuZ2UnKSB6b29tLm9uR2VzdHVyZVN0YXJ0KGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICB6b29tLnNjYWxlID0gZS5zY2FsZSAqIHpvb20uY3VycmVudFNjYWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB6b29tLnNjYWxlID0gZ2VzdHVyZS5zY2FsZU1vdmUgLyBnZXN0dXJlLnNjYWxlU3RhcnQgKiB6b29tLmN1cnJlbnRTY2FsZTtcbiAgICB9XG5cbiAgICBpZiAoem9vbS5zY2FsZSA+IGdlc3R1cmUubWF4UmF0aW8pIHtcbiAgICAgIHpvb20uc2NhbGUgPSBnZXN0dXJlLm1heFJhdGlvIC0gMSArIE1hdGgucG93KHpvb20uc2NhbGUgLSBnZXN0dXJlLm1heFJhdGlvICsgMSwgMC41KTtcbiAgICB9XG5cbiAgICBpZiAoem9vbS5zY2FsZSA8IHBhcmFtcy5taW5SYXRpbykge1xuICAgICAgem9vbS5zY2FsZSA9IHBhcmFtcy5taW5SYXRpbyArIDEgLSBNYXRoLnBvdyhwYXJhbXMubWluUmF0aW8gLSB6b29tLnNjYWxlICsgMSwgMC41KTtcbiAgICB9XG5cbiAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIiArIHpvb20uc2NhbGUgKyBcIilcIik7XG4gIH0sXG4gIG9uR2VzdHVyZUVuZDogZnVuY3Rpb24gb25HZXN0dXJlRW5kKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZGV2aWNlID0gc3dpcGVyLmRldmljZTtcbiAgICB2YXIgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcblxuICAgIGlmICghc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgaWYgKCF6b29tLmZha2VHZXN0dXJlVG91Y2hlZCB8fCAhem9vbS5mYWtlR2VzdHVyZU1vdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPCAyICYmICFkZXZpY2UuYW5kcm9pZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHpvb20uZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgICB6b29tLmZha2VHZXN0dXJlTW92ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICB6b29tLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4oem9vbS5zY2FsZSwgZ2VzdHVyZS5tYXhSYXRpbyksIHBhcmFtcy5taW5SYXRpbyk7XG4gICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIiArIHpvb20uc2NhbGUgKyBcIilcIik7XG4gICAgem9vbS5jdXJyZW50U2NhbGUgPSB6b29tLnNjYWxlO1xuICAgIHpvb20uaXNTY2FsaW5nID0gZmFsc2U7XG4gICAgaWYgKHpvb20uc2NhbGUgPT09IDEpIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gIH0sXG4gIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZGV2aWNlID0gc3dpcGVyLmRldmljZTtcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlLFxuICAgICAgICBpbWFnZSA9IHpvb20uaW1hZ2U7XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKGltYWdlLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgIGlmIChkZXZpY2UuYW5kcm9pZCAmJiBlLmNhbmNlbGFibGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpbWFnZS5pc1RvdWNoZWQgPSB0cnVlO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC54ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC55ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICB9LFxuICBvblRvdWNoTW92ZTogZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmUsXG4gICAgICAgIGltYWdlID0gem9vbS5pbWFnZSxcbiAgICAgICAgdmVsb2NpdHkgPSB6b29tLnZlbG9jaXR5O1xuICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgaWYgKCFpbWFnZS5pc1RvdWNoZWQgfHwgIWdlc3R1cmUuJHNsaWRlRWwpIHJldHVybjtcblxuICAgIGlmICghaW1hZ2UuaXNNb3ZlZCkge1xuICAgICAgaW1hZ2Uud2lkdGggPSBnZXN0dXJlLiRpbWFnZUVsWzBdLm9mZnNldFdpZHRoO1xuICAgICAgaW1hZ2UuaGVpZ2h0ID0gZ2VzdHVyZS4kaW1hZ2VFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBpbWFnZS5zdGFydFggPSAoMCwgX3V0aWxzLmdldFRyYW5zbGF0ZSkoZ2VzdHVyZS4kaW1hZ2VXcmFwRWxbMF0sICd4JykgfHwgMDtcbiAgICAgIGltYWdlLnN0YXJ0WSA9ICgwLCBfdXRpbHMuZ2V0VHJhbnNsYXRlKShnZXN0dXJlLiRpbWFnZVdyYXBFbFswXSwgJ3knKSB8fCAwO1xuICAgICAgZ2VzdHVyZS5zbGlkZVdpZHRoID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgIGdlc3R1cmUuc2xpZGVIZWlnaHQgPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMCk7XG5cbiAgICAgIGlmIChzd2lwZXIucnRsKSB7XG4gICAgICAgIGltYWdlLnN0YXJ0WCA9IC1pbWFnZS5zdGFydFg7XG4gICAgICAgIGltYWdlLnN0YXJ0WSA9IC1pbWFnZS5zdGFydFk7XG4gICAgICB9XG4gICAgfSAvLyBEZWZpbmUgaWYgd2UgbmVlZCBpbWFnZSBkcmFnXG5cblxuICAgIHZhciBzY2FsZWRXaWR0aCA9IGltYWdlLndpZHRoICogem9vbS5zY2FsZTtcbiAgICB2YXIgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICBpZiAoc2NhbGVkV2lkdGggPCBnZXN0dXJlLnNsaWRlV2lkdGggJiYgc2NhbGVkSGVpZ2h0IDwgZ2VzdHVyZS5zbGlkZUhlaWdodCkgcmV0dXJuO1xuICAgIGltYWdlLm1pblggPSBNYXRoLm1pbihnZXN0dXJlLnNsaWRlV2lkdGggLyAyIC0gc2NhbGVkV2lkdGggLyAyLCAwKTtcbiAgICBpbWFnZS5tYXhYID0gLWltYWdlLm1pblg7XG4gICAgaW1hZ2UubWluWSA9IE1hdGgubWluKGdlc3R1cmUuc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiwgMCk7XG4gICAgaW1hZ2UubWF4WSA9IC1pbWFnZS5taW5ZO1xuICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICBpbWFnZS50b3VjaGVzQ3VycmVudC55ID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG5cbiAgICBpZiAoIWltYWdlLmlzTW92ZWQgJiYgIXpvb20uaXNTY2FsaW5nKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIChNYXRoLmZsb29yKGltYWdlLm1pblgpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WCkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA8IGltYWdlLnRvdWNoZXNTdGFydC54IHx8IE1hdGguZmxvb3IoaW1hZ2UubWF4WCkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRYKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC54ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LngpKSB7XG4gICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIChNYXRoLmZsb29yKGltYWdlLm1pblkpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WSkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA8IGltYWdlLnRvdWNoZXNTdGFydC55IHx8IE1hdGguZmxvb3IoaW1hZ2UubWF4WSkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRZKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC55ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LnkpKSB7XG4gICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaW1hZ2UuaXNNb3ZlZCA9IHRydWU7XG4gICAgaW1hZ2UuY3VycmVudFggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnggKyBpbWFnZS5zdGFydFg7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnkgKyBpbWFnZS5zdGFydFk7XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFggPCBpbWFnZS5taW5YKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WCA9IGltYWdlLm1pblggKyAxIC0gTWF0aC5wb3coaW1hZ2UubWluWCAtIGltYWdlLmN1cnJlbnRYICsgMSwgMC44KTtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFggPiBpbWFnZS5tYXhYKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WCA9IGltYWdlLm1heFggLSAxICsgTWF0aC5wb3coaW1hZ2UuY3VycmVudFggLSBpbWFnZS5tYXhYICsgMSwgMC44KTtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFkgPCBpbWFnZS5taW5ZKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WSA9IGltYWdlLm1pblkgKyAxIC0gTWF0aC5wb3coaW1hZ2UubWluWSAtIGltYWdlLmN1cnJlbnRZICsgMSwgMC44KTtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFkgPiBpbWFnZS5tYXhZKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WSA9IGltYWdlLm1heFkgLSAxICsgTWF0aC5wb3coaW1hZ2UuY3VycmVudFkgLSBpbWFnZS5tYXhZICsgMSwgMC44KTtcbiAgICB9IC8vIFZlbG9jaXR5XG5cblxuICAgIGlmICghdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgdmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lng7XG4gICAgaWYgKCF2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICBpZiAoIXZlbG9jaXR5LnByZXZUaW1lKSB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgdmVsb2NpdHkueCA9IChpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgdmVsb2NpdHkueSA9IChpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgaWYgKE1hdGguYWJzKGltYWdlLnRvdWNoZXNDdXJyZW50LnggLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSA8IDIpIHZlbG9jaXR5LnggPSAwO1xuICAgIGlmIChNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgPCAyKSB2ZWxvY2l0eS55ID0gMDtcbiAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueDtcbiAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyBpbWFnZS5jdXJyZW50WCArIFwicHgsIFwiICsgaW1hZ2UuY3VycmVudFkgKyBcInB4LDApXCIpO1xuICB9LFxuICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmUsXG4gICAgICAgIGltYWdlID0gem9vbS5pbWFnZSxcbiAgICAgICAgdmVsb2NpdHkgPSB6b29tLnZlbG9jaXR5O1xuICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgaWYgKCFpbWFnZS5pc1RvdWNoZWQgfHwgIWltYWdlLmlzTW92ZWQpIHtcbiAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgaW1hZ2UuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGltYWdlLmlzTW92ZWQgPSBmYWxzZTtcbiAgICB2YXIgbW9tZW50dW1EdXJhdGlvblggPSAzMDA7XG4gICAgdmFyIG1vbWVudHVtRHVyYXRpb25ZID0gMzAwO1xuICAgIHZhciBtb21lbnR1bURpc3RhbmNlWCA9IHZlbG9jaXR5LnggKiBtb21lbnR1bUR1cmF0aW9uWDtcbiAgICB2YXIgbmV3UG9zaXRpb25YID0gaW1hZ2UuY3VycmVudFggKyBtb21lbnR1bURpc3RhbmNlWDtcbiAgICB2YXIgbW9tZW50dW1EaXN0YW5jZVkgPSB2ZWxvY2l0eS55ICogbW9tZW50dW1EdXJhdGlvblk7XG4gICAgdmFyIG5ld1Bvc2l0aW9uWSA9IGltYWdlLmN1cnJlbnRZICsgbW9tZW50dW1EaXN0YW5jZVk7IC8vIEZpeCBkdXJhdGlvblxuXG4gICAgaWYgKHZlbG9jaXR5LnggIT09IDApIG1vbWVudHVtRHVyYXRpb25YID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWCAtIGltYWdlLmN1cnJlbnRYKSAvIHZlbG9jaXR5LngpO1xuICAgIGlmICh2ZWxvY2l0eS55ICE9PSAwKSBtb21lbnR1bUR1cmF0aW9uWSA9IE1hdGguYWJzKChuZXdQb3NpdGlvblkgLSBpbWFnZS5jdXJyZW50WSkgLyB2ZWxvY2l0eS55KTtcbiAgICB2YXIgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGgubWF4KG1vbWVudHVtRHVyYXRpb25YLCBtb21lbnR1bUR1cmF0aW9uWSk7XG4gICAgaW1hZ2UuY3VycmVudFggPSBuZXdQb3NpdGlvblg7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBuZXdQb3NpdGlvblk7IC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcblxuICAgIHZhciBzY2FsZWRXaWR0aCA9IGltYWdlLndpZHRoICogem9vbS5zY2FsZTtcbiAgICB2YXIgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICBpbWFnZS5taW5YID0gTWF0aC5taW4oZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiwgMCk7XG4gICAgaW1hZ2UubWF4WCA9IC1pbWFnZS5taW5YO1xuICAgIGltYWdlLm1pblkgPSBNYXRoLm1pbihnZXN0dXJlLnNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIsIDApO1xuICAgIGltYWdlLm1heFkgPSAtaW1hZ2UubWluWTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IE1hdGgubWF4KE1hdGgubWluKGltYWdlLmN1cnJlbnRYLCBpbWFnZS5tYXhYKSwgaW1hZ2UubWluWCk7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WSwgaW1hZ2UubWF4WSksIGltYWdlLm1pblkpO1xuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbikudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyBpbWFnZS5jdXJyZW50WCArIFwicHgsIFwiICsgaW1hZ2UuY3VycmVudFkgKyBcInB4LDApXCIpO1xuICB9LFxuICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuXG4gICAgaWYgKGdlc3R1cmUuJHNsaWRlRWwgJiYgc3dpcGVyLnByZXZpb3VzSW5kZXggIT09IHN3aXBlci5hY3RpdmVJbmRleCkge1xuICAgICAgaWYgKGdlc3R1cmUuJGltYWdlRWwpIHtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VXcmFwRWwpIHtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgIH1cblxuICAgICAgem9vbS5zY2FsZSA9IDE7XG4gICAgICB6b29tLmN1cnJlbnRTY2FsZSA9IDE7XG4gICAgICBnZXN0dXJlLiRzbGlkZUVsID0gdW5kZWZpbmVkO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IHVuZGVmaW5lZDtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgLy8gVG9nZ2xlIFpvb21cbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG5cbiAgICBpZiAoem9vbS5zY2FsZSAmJiB6b29tLnNjYWxlICE9PSAxKSB7XG4gICAgICAvLyBab29tIE91dFxuICAgICAgem9vbS5vdXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gWm9vbSBJblxuICAgICAgem9vbS5pbihlKTtcbiAgICB9XG4gIH0sXG4gIGluOiBmdW5jdGlvbiBfaW4oZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlLFxuICAgICAgICBpbWFnZSA9IHpvb20uaW1hZ2U7XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgJiYgc3dpcGVyLnZpcnR1YWwpIHtcbiAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSBnZXN0dXJlLiRzbGlkZUVsLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMsIHBpY3R1cmUsIC5zd2lwZXItem9vbS10YXJnZXQnKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoXCIuXCIgKyBwYXJhbXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGdlc3R1cmUuJHNsaWRlRWwuYWRkQ2xhc3MoXCJcIiArIHBhcmFtcy56b29tZWRTbGlkZUNsYXNzKTtcbiAgICB2YXIgdG91Y2hYO1xuICAgIHZhciB0b3VjaFk7XG4gICAgdmFyIG9mZnNldFg7XG4gICAgdmFyIG9mZnNldFk7XG4gICAgdmFyIGRpZmZYO1xuICAgIHZhciBkaWZmWTtcbiAgICB2YXIgdHJhbnNsYXRlWDtcbiAgICB2YXIgdHJhbnNsYXRlWTtcbiAgICB2YXIgaW1hZ2VXaWR0aDtcbiAgICB2YXIgaW1hZ2VIZWlnaHQ7XG4gICAgdmFyIHNjYWxlZFdpZHRoO1xuICAgIHZhciBzY2FsZWRIZWlnaHQ7XG4gICAgdmFyIHRyYW5zbGF0ZU1pblg7XG4gICAgdmFyIHRyYW5zbGF0ZU1pblk7XG4gICAgdmFyIHRyYW5zbGF0ZU1heFg7XG4gICAgdmFyIHRyYW5zbGF0ZU1heFk7XG4gICAgdmFyIHNsaWRlV2lkdGg7XG4gICAgdmFyIHNsaWRlSGVpZ2h0O1xuXG4gICAgaWYgKHR5cGVvZiBpbWFnZS50b3VjaGVzU3RhcnQueCA9PT0gJ3VuZGVmaW5lZCcgJiYgZSkge1xuICAgICAgdG91Y2hYID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICB0b3VjaFkgPSBlLnR5cGUgPT09ICd0b3VjaGVuZCcgPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG91Y2hYID0gaW1hZ2UudG91Y2hlc1N0YXJ0Lng7XG4gICAgICB0b3VjaFkgPSBpbWFnZS50b3VjaGVzU3RhcnQueTtcbiAgICB9XG5cbiAgICB6b29tLnNjYWxlID0gZ2VzdHVyZS4kaW1hZ2VXcmFwRWwuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHBhcmFtcy5tYXhSYXRpbztcbiAgICB6b29tLmN1cnJlbnRTY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG5cbiAgICBpZiAoZSkge1xuICAgICAgc2xpZGVXaWR0aCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBzbGlkZUhlaWdodCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgb2Zmc2V0WCA9IGdlc3R1cmUuJHNsaWRlRWwub2Zmc2V0KCkubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgICAgb2Zmc2V0WSA9IGdlc3R1cmUuJHNsaWRlRWwub2Zmc2V0KCkudG9wICsgd2luZG93LnNjcm9sbFk7XG4gICAgICBkaWZmWCA9IG9mZnNldFggKyBzbGlkZVdpZHRoIC8gMiAtIHRvdWNoWDtcbiAgICAgIGRpZmZZID0gb2Zmc2V0WSArIHNsaWRlSGVpZ2h0IC8gMiAtIHRvdWNoWTtcbiAgICAgIGltYWdlV2lkdGggPSBnZXN0dXJlLiRpbWFnZUVsWzBdLm9mZnNldFdpZHRoO1xuICAgICAgaW1hZ2VIZWlnaHQgPSBnZXN0dXJlLiRpbWFnZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgIHNjYWxlZFdpZHRoID0gaW1hZ2VXaWR0aCAqIHpvb20uc2NhbGU7XG4gICAgICBzY2FsZWRIZWlnaHQgPSBpbWFnZUhlaWdodCAqIHpvb20uc2NhbGU7XG4gICAgICB0cmFuc2xhdGVNaW5YID0gTWF0aC5taW4oc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIsIDApO1xuICAgICAgdHJhbnNsYXRlTWluWSA9IE1hdGgubWluKHNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIsIDApO1xuICAgICAgdHJhbnNsYXRlTWF4WCA9IC10cmFuc2xhdGVNaW5YO1xuICAgICAgdHJhbnNsYXRlTWF4WSA9IC10cmFuc2xhdGVNaW5ZO1xuICAgICAgdHJhbnNsYXRlWCA9IGRpZmZYICogem9vbS5zY2FsZTtcbiAgICAgIHRyYW5zbGF0ZVkgPSBkaWZmWSAqIHpvb20uc2NhbGU7XG5cbiAgICAgIGlmICh0cmFuc2xhdGVYIDwgdHJhbnNsYXRlTWluWCkge1xuICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlTWluWDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVNYXhYKSB7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNYXhYO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNsYXRlWSA8IHRyYW5zbGF0ZU1pblkpIHtcbiAgICAgICAgdHJhbnNsYXRlWSA9IHRyYW5zbGF0ZU1pblk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlTWF4WSkge1xuICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWF4WTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNsYXRlWCA9IDA7XG4gICAgICB0cmFuc2xhdGVZID0gMDtcbiAgICB9XG5cbiAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB0cmFuc2xhdGVYICsgXCJweCwgXCIgKyB0cmFuc2xhdGVZICsgXCJweCwwKVwiKTtcbiAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoXCIgKyB6b29tLnNjYWxlICsgXCIpXCIpO1xuICB9LFxuICBvdXQ6IGZ1bmN0aW9uIG91dCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgJiYgc3dpcGVyLnZpcnR1YWwpIHtcbiAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSBnZXN0dXJlLiRzbGlkZUVsLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMsIHBpY3R1cmUsIC5zd2lwZXItem9vbS10YXJnZXQnKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoXCIuXCIgKyBwYXJhbXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHpvb20uc2NhbGUgPSAxO1xuICAgIHpvb20uY3VycmVudFNjYWxlID0gMTtcbiAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgIGdlc3R1cmUuJHNsaWRlRWwucmVtb3ZlQ2xhc3MoXCJcIiArIHBhcmFtcy56b29tZWRTbGlkZUNsYXNzKTtcbiAgICBnZXN0dXJlLiRzbGlkZUVsID0gdW5kZWZpbmVkO1xuICB9LFxuICB0b2dnbGVHZXN0dXJlczogZnVuY3Rpb24gdG9nZ2xlR2VzdHVyZXMobWV0aG9kKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICB2YXIgc2VsZWN0b3IgPSB6b29tLnNsaWRlU2VsZWN0b3IsXG4gICAgICAgIHBhc3NpdmUgPSB6b29tLnBhc3NpdmVMaXN0ZW5lcjtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbFttZXRob2RdKCdnZXN0dXJlc3RhcnQnLCBzZWxlY3Rvciwgem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZSk7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWxbbWV0aG9kXSgnZ2VzdHVyZWNoYW5nZScsIHNlbGVjdG9yLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZSk7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWxbbWV0aG9kXSgnZ2VzdHVyZWVuZCcsIHNlbGVjdG9yLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZSk7XG4gIH0sXG4gIGVuYWJsZUdlc3R1cmVzOiBmdW5jdGlvbiBlbmFibGVHZXN0dXJlcygpIHtcbiAgICBpZiAodGhpcy56b29tLmdlc3R1cmVzRW5hYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuem9vbS5nZXN0dXJlc0VuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuem9vbS50b2dnbGVHZXN0dXJlcygnb24nKTtcbiAgfSxcbiAgZGlzYWJsZUdlc3R1cmVzOiBmdW5jdGlvbiBkaXNhYmxlR2VzdHVyZXMoKSB7XG4gICAgaWYgKCF0aGlzLnpvb20uZ2VzdHVyZXNFbmFibGVkKSByZXR1cm47XG4gICAgdGhpcy56b29tLmdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuem9vbS50b2dnbGVHZXN0dXJlcygnb2ZmJyk7XG4gIH0sXG4gIC8vIEF0dGFjaC9EZXRhY2ggRXZlbnRzXG4gIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoem9vbS5lbmFibGVkKSByZXR1cm47XG4gICAgem9vbS5lbmFibGVkID0gdHJ1ZTtcbiAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgc3dpcGVyLnBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuICAgIHZhciBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlID0gc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgPyB7XG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9IDogdHJ1ZTtcbiAgICB2YXIgc2xpZGVTZWxlY3RvciA9IFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzO1xuICAgIHN3aXBlci56b29tLnBhc3NpdmVMaXN0ZW5lciA9IHBhc3NpdmVMaXN0ZW5lcjtcbiAgICBzd2lwZXIuem9vbS5zbGlkZVNlbGVjdG9yID0gc2xpZGVTZWxlY3RvcjsgLy8gU2NhbGUgaW1hZ2VcblxuICAgIGlmIChzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci56b29tLmVuYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLnpvb20uZGlzYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgc2xpZGVTZWxlY3Rvciwgem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCBzbGlkZVNlbGVjdG9yLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSk7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuZW5kLCBzbGlkZVNlbGVjdG9yLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLmNhbmNlbCwgc2xpZGVTZWxlY3Rvciwgem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSAvLyBNb3ZlIGltYWdlXG5cblxuICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCBcIi5cIiArIHN3aXBlci5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzcywgem9vbS5vblRvdWNoTW92ZSwgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSk7XG4gIH0sXG4gIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoIXpvb20uZW5hYmxlZCkgcmV0dXJuO1xuICAgIHZhciBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgc3dpcGVyLnpvb20uZW5hYmxlZCA9IGZhbHNlO1xuICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgdmFyIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUgPSBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiB0cnVlO1xuICAgIHZhciBzbGlkZVNlbGVjdG9yID0gXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3M7IC8vIFNjYWxlIGltYWdlXG5cbiAgICBpZiAoc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLnpvb20uZW5hYmxlR2VzdHVyZXMsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLnpvb20uZGlzYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsIHNsaWRlU2VsZWN0b3IsIHpvb20ub25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsIHNsaWRlU2VsZWN0b3IsIHpvb20ub25HZXN0dXJlQ2hhbmdlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuZW5kLCBzbGlkZVNlbGVjdG9yLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwsIHNsaWRlU2VsZWN0b3IsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0gLy8gTW92ZSBpbWFnZVxuXG5cbiAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsIFwiLlwiICsgc3dpcGVyLnBhcmFtcy56b29tLmNvbnRhaW5lckNsYXNzLCB6b29tLm9uVG91Y2hNb3ZlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ3pvb20nLFxuICBwYXJhbXM6IHtcbiAgICB6b29tOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG1heFJhdGlvOiAzLFxuICAgICAgbWluUmF0aW86IDEsXG4gICAgICB0b2dnbGU6IHRydWUsXG4gICAgICBjb250YWluZXJDbGFzczogJ3N3aXBlci16b29tLWNvbnRhaW5lcicsXG4gICAgICB6b29tZWRTbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXpvb21lZCdcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgem9vbTogX2V4dGVuZHMoe1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIGN1cnJlbnRTY2FsZTogMSxcbiAgICAgICAgaXNTY2FsaW5nOiBmYWxzZSxcbiAgICAgICAgZ2VzdHVyZToge1xuICAgICAgICAgICRzbGlkZUVsOiB1bmRlZmluZWQsXG4gICAgICAgICAgc2xpZGVXaWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgIHNsaWRlSGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgICAgICAgJGltYWdlRWw6IHVuZGVmaW5lZCxcbiAgICAgICAgICAkaW1hZ2VXcmFwRWw6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtYXhSYXRpbzogM1xuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjdXJyZW50WDogdW5kZWZpbmVkLFxuICAgICAgICAgIGN1cnJlbnRZOiB1bmRlZmluZWQsXG4gICAgICAgICAgbWluWDogdW5kZWZpbmVkLFxuICAgICAgICAgIG1pblk6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtYXhYOiB1bmRlZmluZWQsXG4gICAgICAgICAgbWF4WTogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgICAgICAgc3RhcnRYOiB1bmRlZmluZWQsXG4gICAgICAgICAgc3RhcnRZOiB1bmRlZmluZWQsXG4gICAgICAgICAgdG91Y2hlc1N0YXJ0OiB7fSxcbiAgICAgICAgICB0b3VjaGVzQ3VycmVudDoge31cbiAgICAgICAgfSxcbiAgICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgICB4OiB1bmRlZmluZWQsXG4gICAgICAgICAgeTogdW5kZWZpbmVkLFxuICAgICAgICAgIHByZXZQb3NpdGlvblg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwcmV2UG9zaXRpb25ZOiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlRpbWU6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9LCBab29tKVxuICAgIH0pO1xuICAgIHZhciBzY2FsZSA9IDE7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN3aXBlci56b29tLCAnc2NhbGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNjYWxlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgIGlmIChzY2FsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICB2YXIgaW1hZ2VFbCA9IHN3aXBlci56b29tLmdlc3R1cmUuJGltYWdlRWwgPyBzd2lwZXIuem9vbS5nZXN0dXJlLiRpbWFnZUVsWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgIHZhciBzbGlkZUVsID0gc3dpcGVyLnpvb20uZ2VzdHVyZS4kc2xpZGVFbCA/IHN3aXBlci56b29tLmdlc3R1cmUuJHNsaWRlRWxbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ3pvb21DaGFuZ2UnLCB2YWx1ZSwgaW1hZ2VFbCwgc2xpZGVFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy56b29tLmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLnpvb20uZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgc3dpcGVyLnpvb20uZGlzYWJsZSgpO1xuICAgIH0sXG4gICAgdG91Y2hTdGFydDogZnVuY3Rpb24gdG91Y2hTdGFydChzd2lwZXIsIGUpIHtcbiAgICAgIGlmICghc3dpcGVyLnpvb20uZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLnpvb20ub25Ub3VjaFN0YXJ0KGUpO1xuICAgIH0sXG4gICAgdG91Y2hFbmQ6IGZ1bmN0aW9uIHRvdWNoRW5kKHN3aXBlciwgZSkge1xuICAgICAgaWYgKCFzd2lwZXIuem9vbS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuem9vbS5vblRvdWNoRW5kKGUpO1xuICAgIH0sXG4gICAgZG91YmxlVGFwOiBmdW5jdGlvbiBkb3VibGVUYXAoc3dpcGVyLCBlKSB7XG4gICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcgJiYgc3dpcGVyLnBhcmFtcy56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20udG9nZ2xlKSB7XG4gICAgICAgIHN3aXBlci56b29tLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuem9vbS5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiBzbGlkZUNoYW5nZShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIuem9vbS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuem9vbS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBzd2lwZXIuem9vbS5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIE9ic2VydmVyID0ge1xuICBhdHRhY2g6IGZ1bmN0aW9uIGF0dGFjaCh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyRnVuYyhmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAvLyBUaGUgb2JzZXJ2ZXJVcGRhdGUgZXZlbnQgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9ic2VydmVyVXBkYXRlID0gZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic2VydmVyVXBkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KG9ic2VydmVyVXBkYXRlLCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRMaXN0OiB0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hpbGRMaXN0LFxuICAgICAgY2hhcmFjdGVyRGF0YTogdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGFyYWN0ZXJEYXRhXG4gICAgfSk7XG4gICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5zdXBwb3J0Lm9ic2VydmVyIHx8ICFzd2lwZXIucGFyYW1zLm9ic2VydmVyKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5vYnNlcnZlUGFyZW50cykge1xuICAgICAgdmFyIGNvbnRhaW5lclBhcmVudHMgPSBzd2lwZXIuJGVsLnBhcmVudHMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXJQYXJlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN3aXBlci5vYnNlcnZlci5hdHRhY2goY29udGFpbmVyUGFyZW50c1tpXSk7XG4gICAgICB9XG4gICAgfSAvLyBPYnNlcnZlIGNvbnRhaW5lclxuXG5cbiAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKHN3aXBlci4kZWxbMF0sIHtcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlblxuICAgIH0pOyAvLyBPYnNlcnZlIHdyYXBwZXJcblxuICAgIHN3aXBlci5vYnNlcnZlci5hdHRhY2goc3dpcGVyLiR3cmFwcGVyRWxbMF0sIHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlXG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMgPSBbXTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ29ic2VydmVyJyxcbiAgcGFyYW1zOiB7XG4gICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2VcbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBvYnNlcnZlcjogX2V4dGVuZHMoe30sIE9ic2VydmVyLCB7XG4gICAgICAgIG9ic2VydmVyczogW11cbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5vYnNlcnZlci5pbml0KCk7XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgc3dpcGVyLm9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxudmFyIHN1cHBvcnRzUmVzaXplT2JzZXJ2ZXIgPSBmdW5jdGlvbiBzdXBwb3J0c1Jlc2l6ZU9ic2VydmVyKCkge1xuICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdy5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdyZXNpemUnLFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLCB7XG4gICAgICByZXNpemU6IHtcbiAgICAgICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgICAgIGNyZWF0ZU9ic2VydmVyOiBmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBzd2lwZXIud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gc3dpcGVyLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBuZXdXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgICB2YXIgY29udGVudEJveFNpemUgPSBfcmVmLmNvbnRlbnRCb3hTaXplLFxuICAgICAgICAgICAgICAgICAgY29udGVudFJlY3QgPSBfcmVmLmNvbnRlbnRSZWN0LFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQ7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBzd2lwZXIuZWwpIHJldHVybjtcbiAgICAgICAgICAgICAgbmV3V2lkdGggPSBjb250ZW50UmVjdCA/IGNvbnRlbnRSZWN0LndpZHRoIDogKGNvbnRlbnRCb3hTaXplWzBdIHx8IGNvbnRlbnRCb3hTaXplKS5pbmxpbmVTaXplO1xuICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBjb250ZW50UmVjdCA/IGNvbnRlbnRSZWN0LmhlaWdodCA6IChjb250ZW50Qm94U2l6ZVswXSB8fCBjb250ZW50Qm94U2l6ZSkuYmxvY2tTaXplO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChuZXdXaWR0aCAhPT0gd2lkdGggfHwgbmV3SGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlci5vYnNlcnZlKHN3aXBlci5lbCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZU9ic2VydmVyOiBmdW5jdGlvbiByZW1vdmVPYnNlcnZlcigpIHtcbiAgICAgICAgICBpZiAoc3dpcGVyLnJlc2l6ZS5vYnNlcnZlciAmJiBzd2lwZXIucmVzaXplLm9ic2VydmVyLnVub2JzZXJ2ZSAmJiBzd2lwZXIuZWwpIHtcbiAgICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIudW5vYnNlcnZlKHN3aXBlci5lbCk7XG4gICAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVJlc2l6ZScpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdyZXNpemUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbiBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ29yaWVudGF0aW9uY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMucmVzaXplT2JzZXJ2ZXIgJiYgc3VwcG9ydHNSZXNpemVPYnNlcnZlcigpKSB7XG4gICAgICAgIHN3aXBlci5yZXNpemUuY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBFbWl0IHJlc2l6ZVxuXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzd2lwZXIucmVzaXplLnJlc2l6ZUhhbmRsZXIpOyAvLyBFbWl0IG9yaWVudGF0aW9uY2hhbmdlXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgICAgc3dpcGVyLnJlc2l6ZS5yZW1vdmVPYnNlcnZlcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBzd2lwZXIucmVzaXplLm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZG9tID0gcmVxdWlyZShcImRvbTdcIik7XG5cbnZhciBNZXRob2RzID0ge1xuICBhZGRDbGFzczogX2RvbS5hZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IF9kb20ucmVtb3ZlQ2xhc3MsXG4gIGhhc0NsYXNzOiBfZG9tLmhhc0NsYXNzLFxuICB0b2dnbGVDbGFzczogX2RvbS50b2dnbGVDbGFzcyxcbiAgYXR0cjogX2RvbS5hdHRyLFxuICByZW1vdmVBdHRyOiBfZG9tLnJlbW92ZUF0dHIsXG4gIHRyYW5zZm9ybTogX2RvbS50cmFuc2Zvcm0sXG4gIHRyYW5zaXRpb246IF9kb20udHJhbnNpdGlvbixcbiAgb246IF9kb20ub24sXG4gIG9mZjogX2RvbS5vZmYsXG4gIHRyaWdnZXI6IF9kb20udHJpZ2dlcixcbiAgdHJhbnNpdGlvbkVuZDogX2RvbS50cmFuc2l0aW9uRW5kLFxuICBvdXRlcldpZHRoOiBfZG9tLm91dGVyV2lkdGgsXG4gIG91dGVySGVpZ2h0OiBfZG9tLm91dGVySGVpZ2h0LFxuICBzdHlsZXM6IF9kb20uc3R5bGVzLFxuICBvZmZzZXQ6IF9kb20ub2Zmc2V0LFxuICBjc3M6IF9kb20uY3NzLFxuICBlYWNoOiBfZG9tLmVhY2gsXG4gIGh0bWw6IF9kb20uaHRtbCxcbiAgdGV4dDogX2RvbS50ZXh0LFxuICBpczogX2RvbS5pcyxcbiAgaW5kZXg6IF9kb20uaW5kZXgsXG4gIGVxOiBfZG9tLmVxLFxuICBhcHBlbmQ6IF9kb20uYXBwZW5kLFxuICBwcmVwZW5kOiBfZG9tLnByZXBlbmQsXG4gIG5leHQ6IF9kb20ubmV4dCxcbiAgbmV4dEFsbDogX2RvbS5uZXh0QWxsLFxuICBwcmV2OiBfZG9tLnByZXYsXG4gIHByZXZBbGw6IF9kb20ucHJldkFsbCxcbiAgcGFyZW50OiBfZG9tLnBhcmVudCxcbiAgcGFyZW50czogX2RvbS5wYXJlbnRzLFxuICBjbG9zZXN0OiBfZG9tLmNsb3Nlc3QsXG4gIGZpbmQ6IF9kb20uZmluZCxcbiAgY2hpbGRyZW46IF9kb20uY2hpbGRyZW4sXG4gIGZpbHRlcjogX2RvbS5maWx0ZXIsXG4gIHJlbW92ZTogX2RvbS5yZW1vdmVcbn07XG5PYmplY3Qua2V5cyhNZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gIF9kb20uJC5mblttZXRob2ROYW1lXSA9IE1ldGhvZHNbbWV0aG9kTmFtZV07XG59KTtcbnZhciBfZGVmYXVsdCA9IF9kb20uJDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRCcm93c2VyID0gZ2V0QnJvd3NlcjtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIGJyb3dzZXI7XG5cbmZ1bmN0aW9uIGNhbGNCcm93c2VyKCkge1xuICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuXG4gIGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzRWRnZTogISF3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9nKSxcbiAgICBpc1NhZmFyaTogaXNTYWZhcmkoKSxcbiAgICBpc1dlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QnJvd3NlcigpIHtcbiAgaWYgKCFicm93c2VyKSB7XG4gICAgYnJvd3NlciA9IGNhbGNCcm93c2VyKCk7XG4gIH1cblxuICByZXR1cm4gYnJvd3Nlcjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0RGV2aWNlID0gZ2V0RGV2aWNlO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX2dldFN1cHBvcnQgPSByZXF1aXJlKFwiLi9nZXQtc3VwcG9ydFwiKTtcblxudmFyIGRldmljZTtcblxuZnVuY3Rpb24gY2FsY0RldmljZShfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgdXNlckFnZW50ID0gX3JlZi51c2VyQWdlbnQ7XG5cbiAgdmFyIHN1cHBvcnQgPSAoMCwgX2dldFN1cHBvcnQuZ2V0U3VwcG9ydCkoKTtcbiAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgdmFyIHBsYXRmb3JtID0gd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybTtcbiAgdmFyIHVhID0gdXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICB2YXIgZGV2aWNlID0ge1xuICAgIGlvczogZmFsc2UsXG4gICAgYW5kcm9pZDogZmFsc2VcbiAgfTtcbiAgdmFyIHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcbiAgdmFyIHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICB2YXIgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIHZhciBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgdmFyIGlwb2QgPSB1YS5tYXRjaCgvKGlQb2QpKC4qT1NcXHMoW1xcZF9dKykpPy8pO1xuICB2YXIgaXBob25lID0gIWlwYWQgJiYgdWEubWF0Y2goLyhpUGhvbmVcXHNPU3xpT1MpXFxzKFtcXGRfXSspLyk7XG4gIHZhciB3aW5kb3dzID0gcGxhdGZvcm0gPT09ICdXaW4zMic7XG4gIHZhciBtYWNvcyA9IHBsYXRmb3JtID09PSAnTWFjSW50ZWwnOyAvLyBpUGFkT3MgMTMgZml4XG5cbiAgdmFyIGlQYWRTY3JlZW5zID0gWycxMDI0eDEzNjYnLCAnMTM2NngxMDI0JywgJzgzNHgxMTk0JywgJzExOTR4ODM0JywgJzgzNHgxMTEyJywgJzExMTJ4ODM0JywgJzc2OHgxMDI0JywgJzEwMjR4NzY4JywgJzgyMHgxMTgwJywgJzExODB4ODIwJywgJzgxMHgxMDgwJywgJzEwODB4ODEwJ107XG5cbiAgaWYgKCFpcGFkICYmIG1hY29zICYmIHN1cHBvcnQudG91Y2ggJiYgaVBhZFNjcmVlbnMuaW5kZXhPZihzY3JlZW5XaWR0aCArIFwieFwiICsgc2NyZWVuSGVpZ2h0KSA+PSAwKSB7XG4gICAgaXBhZCA9IHVhLm1hdGNoKC8oVmVyc2lvbilcXC8oW1xcZC5dKykvKTtcbiAgICBpZiAoIWlwYWQpIGlwYWQgPSBbMCwgMSwgJzEzXzBfMCddO1xuICAgIG1hY29zID0gZmFsc2U7XG4gIH0gLy8gQW5kcm9pZFxuXG5cbiAgaWYgKGFuZHJvaWQgJiYgIXdpbmRvd3MpIHtcbiAgICBkZXZpY2Uub3MgPSAnYW5kcm9pZCc7XG4gICAgZGV2aWNlLmFuZHJvaWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGlwYWQgfHwgaXBob25lIHx8IGlwb2QpIHtcbiAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICBkZXZpY2UuaW9zID0gdHJ1ZTtcbiAgfSAvLyBFeHBvcnQgb2JqZWN0XG5cblxuICByZXR1cm4gZGV2aWNlO1xufVxuXG5mdW5jdGlvbiBnZXREZXZpY2Uob3ZlcnJpZGVzKSB7XG4gIGlmIChvdmVycmlkZXMgPT09IHZvaWQgMCkge1xuICAgIG92ZXJyaWRlcyA9IHt9O1xuICB9XG5cbiAgaWYgKCFkZXZpY2UpIHtcbiAgICBkZXZpY2UgPSBjYWxjRGV2aWNlKG92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRTdXBwb3J0ID0gZ2V0U3VwcG9ydDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIHN1cHBvcnQ7XG5cbmZ1bmN0aW9uIGNhbGNTdXBwb3J0KCkge1xuICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3VjaDogISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpLFxuICAgIHBvaW50ZXJFdmVudHM6ICEhd2luZG93LlBvaW50ZXJFdmVudCAmJiAnbWF4VG91Y2hQb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+PSAwLFxuICAgIG9ic2VydmVyOiBmdW5jdGlvbiBjaGVja09ic2VydmVyKCkge1xuICAgICAgcmV0dXJuICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgfHwgJ1dlYmtpdE11dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdztcbiAgICB9KCksXG4gICAgcGFzc2l2ZUxpc3RlbmVyOiBmdW5jdGlvbiBjaGVja1Bhc3NpdmVMaXN0ZW5lcigpIHtcbiAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVMaXN0ZW5lcicsIG51bGwsIG9wdHMpO1xuICAgICAgfSBjYXRjaCAoZSkgey8vIE5vIHN1cHBvcnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICB9KCksXG4gICAgZ2VzdHVyZXM6IGZ1bmN0aW9uIGNoZWNrR2VzdHVyZXMoKSB7XG4gICAgICByZXR1cm4gJ29uZ2VzdHVyZXN0YXJ0JyBpbiB3aW5kb3c7XG4gICAgfSgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gIGlmICghc3VwcG9ydCkge1xuICAgIHN1cHBvcnQgPSBjYWxjU3VwcG9ydCgpO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlbGV0ZVByb3BzID0gZGVsZXRlUHJvcHM7XG5leHBvcnRzLm5leHRUaWNrID0gbmV4dFRpY2s7XG5leHBvcnRzLm5vdyA9IG5vdztcbmV4cG9ydHMuZ2V0VHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlO1xuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5leHBvcnRzLmJpbmRNb2R1bGVNZXRob2RzID0gYmluZE1vZHVsZU1ldGhvZHM7XG5leHBvcnRzLmdldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9wcyhvYmopIHtcbiAgdmFyIG9iamVjdCA9IG9iajtcbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0cnkge1xuICAgICAgb2JqZWN0W2tleV0gPSBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHsvLyBubyBnZXR0ZXIgZm9yIG9iamVjdFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfSBjYXRjaCAoZSkgey8vIHNvbWV0aGluZyBnb3Qgd3JvbmdcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaywgZGVsYXkpIHtcbiAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICBkZWxheSA9IDA7XG4gIH1cblxuICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkpO1xufVxuXG5mdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBEYXRlLm5vdygpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsKSB7XG4gIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gIHZhciBzdHlsZTtcblxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcbiAgfVxuXG4gIGlmICghc3R5bGUgJiYgZWwuY3VycmVudFN0eWxlKSB7XG4gICAgc3R5bGUgPSBlbC5jdXJyZW50U3R5bGU7XG4gIH1cblxuICBpZiAoIXN0eWxlKSB7XG4gICAgc3R5bGUgPSBlbC5zdHlsZTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKGVsLCBheGlzKSB7XG4gIGlmIChheGlzID09PSB2b2lkIDApIHtcbiAgICBheGlzID0gJ3gnO1xuICB9XG5cbiAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgdmFyIG1hdHJpeDtcbiAgdmFyIGN1clRyYW5zZm9ybTtcbiAgdmFyIHRyYW5zZm9ybU1hdHJpeDtcbiAgdmFyIGN1clN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG5cbiAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIHtcbiAgICBjdXJUcmFuc2Zvcm0gPSBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUud2Via2l0VHJhbnNmb3JtO1xuXG4gICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGEucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICB9KS5qb2luKCcsICcpO1xuICAgIH0gLy8gU29tZSBvbGQgdmVyc2lvbnMgb2YgV2Via2l0IGNob2tlIHdoZW4gJ25vbmUnIGlzIHBhc3NlZDsgcGFzc1xuICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuXG5cbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs0XSk7XG4gIH1cblxuICBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MjsgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNikgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTNdKTsgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzVdKTtcbiAgfVxuXG4gIHJldHVybiBjdXJUcmFuc2Zvcm0gfHwgMDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICB2YXIgdG8gPSBPYmplY3QoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKTtcbiAgdmFyIG5vRXh0ZW5kID0gWydfX3Byb3RvX18nLCAnY29uc3RydWN0b3InLCAncHJvdG90eXBlJ107XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGkgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpXTtcblxuICAgIGlmIChuZXh0U291cmNlICE9PSB1bmRlZmluZWQgJiYgbmV4dFNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgdmFyIGtleXNBcnJheSA9IE9iamVjdC5rZXlzKE9iamVjdChuZXh0U291cmNlKSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIG5vRXh0ZW5kLmluZGV4T2Yoa2V5KSA8IDA7XG4gICAgICB9KTtcblxuICAgICAgZm9yICh2YXIgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDsgbmV4dEluZGV4IDwgbGVuOyBuZXh0SW5kZXggKz0gMSkge1xuICAgICAgICB2YXIgbmV4dEtleSA9IGtleXNBcnJheVtuZXh0SW5kZXhdO1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG5cbiAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICBpZiAoaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbmZ1bmN0aW9uIGJpbmRNb2R1bGVNZXRob2RzKGluc3RhbmNlLCBvYmopIHtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICBPYmplY3Qua2V5cyhvYmpba2V5XSkuZm9yRWFjaChmdW5jdGlvbiAoc3ViS2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV1bc3ViS2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9ialtrZXldW3N1YktleV0gPSBvYmpba2V5XVtzdWJLZXldLmJpbmQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtrZXldID0gb2JqW2tleV07XG4gIH0pO1xufSIsIi8qKlxuICogU3dpcGVyIDYuNS4zXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIxIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IE1hcmNoIDMxLCAyMDIxXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVxdWlyZSgnLi9janMvY29tcG9uZW50cy9jb3JlL2NvcmUtY2xhc3MnKS5kZWZhdWx0O1xuZXhwb3J0cy5Td2lwZXIgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2NvcmUvY29yZS1jbGFzcycpLmRlZmF1bHQ7XG5leHBvcnRzLlZpcnR1YWwgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL3ZpcnR1YWwvdmlydHVhbCcpLmRlZmF1bHQ7XG5leHBvcnRzLktleWJvYXJkID0gcmVxdWlyZSgnLi9janMvY29tcG9uZW50cy9rZXlib2FyZC9rZXlib2FyZCcpLmRlZmF1bHQ7XG5leHBvcnRzLk1vdXNld2hlZWwgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL21vdXNld2hlZWwvbW91c2V3aGVlbCcpLmRlZmF1bHQ7XG5leHBvcnRzLk5hdmlnYXRpb24gPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbicpLmRlZmF1bHQ7XG5leHBvcnRzLlBhZ2luYXRpb24gPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbicpLmRlZmF1bHQ7XG5leHBvcnRzLlNjcm9sbGJhciA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhcicpLmRlZmF1bHQ7XG5leHBvcnRzLlBhcmFsbGF4ID0gcmVxdWlyZSgnLi9janMvY29tcG9uZW50cy9wYXJhbGxheC9wYXJhbGxheCcpLmRlZmF1bHQ7XG5leHBvcnRzLlpvb20gPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL3pvb20vem9vbScpLmRlZmF1bHQ7XG5leHBvcnRzLkxhenkgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2xhenkvbGF6eScpLmRlZmF1bHQ7XG5leHBvcnRzLkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlcicpLmRlZmF1bHQ7XG5leHBvcnRzLkExMXkgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2ExMXkvYTExeScpLmRlZmF1bHQ7XG5leHBvcnRzLkhpc3RvcnkgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2hpc3RvcnkvaGlzdG9yeScpLmRlZmF1bHQ7XG5leHBvcnRzLkhhc2hOYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi9janMvY29tcG9uZW50cy9oYXNoLW5hdmlnYXRpb24vaGFzaC1uYXZpZ2F0aW9uJykuZGVmYXVsdDtcbmV4cG9ydHMuQXV0b3BsYXkgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2F1dG9wbGF5L2F1dG9wbGF5JykuZGVmYXVsdDtcbmV4cG9ydHMuRWZmZWN0RmFkZSA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvZWZmZWN0LWZhZGUvZWZmZWN0LWZhZGUnKS5kZWZhdWx0O1xuZXhwb3J0cy5FZmZlY3RDdWJlID0gcmVxdWlyZSgnLi9janMvY29tcG9uZW50cy9lZmZlY3QtY3ViZS9lZmZlY3QtY3ViZScpLmRlZmF1bHQ7XG5leHBvcnRzLkVmZmVjdEZsaXAgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2VmZmVjdC1mbGlwL2VmZmVjdC1mbGlwJykuZGVmYXVsdDtcbmV4cG9ydHMuRWZmZWN0Q292ZXJmbG93ID0gcmVxdWlyZSgnLi9janMvY29tcG9uZW50cy9lZmZlY3QtY292ZXJmbG93L2VmZmVjdC1jb3ZlcmZsb3cnKS5kZWZhdWx0O1xuZXhwb3J0cy5UaHVtYnMgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL3RodW1icy90aHVtYnMnKS5kZWZhdWx0OyJdfQ==
