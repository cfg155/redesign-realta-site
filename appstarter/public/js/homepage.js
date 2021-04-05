(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _swiper = _interopRequireWildcard(require("swiper"));

var _homepageData = _interopRequireDefault(require("./homepageData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function productSection() {
  var title = document.querySelector('.product-section__left .title');
  var desc = document.querySelector('.product-section__left .desc');
  var count = 0;

  function setData(count) {
    var productData = {
      title: _homepageData["default"][0].productSsection[count].title,
      desc: _homepageData["default"][0].productSsection[count].desc,
      textBg: _homepageData["default"][0].productSsection[count].textBg,
      youtube: _homepageData["default"][0].productSsection[count].youtube,
      link: _homepageData["default"][0].productSsection[count].link
    };
    title.innerHTML = productData.title;
    desc.innerHTML = productData.desc;
    document.querySelector('.product-section__left .text-bg').innerHTML = productData.textBg;
    document.querySelector('.product-section__left .btn-learn-more').href = productData.link;
  }

  setData(count);

  function productTransition() {
    count = this.classList.contains('arrow-right') ? ++count : --count;

    if (count > _homepageData["default"][0].productSsection.length - 1) {
      count = 0;
    } else if (count < 0) {
      count = _homepageData["default"][0].productSsection.length - 1;
    }

    title.style.opacity = '0';
    title.style.transform = 'translateX(100px)';
    desc.style.opacity = '0';
    setTimeout(function () {
      setData(count);
      title.style.opacity = '1';
      title.style.transform = 'translateX(0)';
      desc.style.opacity = '1';
    }, 1000);
  }

  document.querySelectorAll('.arrow-left, .arrow-right').forEach(function (item) {
    item.addEventListener('click', productTransition);
  });
}

productSection();

function clientSection() {
  _swiper["default"].use([_swiper.Navigation, _swiper.Pagination, _swiper.Autoplay]);

  var swiper = new _swiper["default"]('.section-client__wrapper .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    breakpoints: {
      576: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 5
      }
    },
    allowTouchMove: false,
    autoplay: {
      delay: 1000
    }
  });
}

clientSection();

function moduleSection() {
  _swiper["default"].use([_swiper.Navigation, _swiper.Pagination]);

  var menu = ['Property', 'People', 'Manufacturing', 'IT Service & Asset', 'Hospitality', 'Distribution'];
  var swiper = new _swiper["default"]('.section-module .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 5,
    breakpoints: {
      300: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 5
      }
    },
    // If we need pagination
    pagination: {
      el: '.section-module .swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + menu[index] + '</span>';
      }
    } // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },

  });
}

moduleSection();

function featureSection() {
  var card = document.querySelectorAll('.section-feature__wrapper__left .card');

  function dropdown() {
    var isCollapsed = this.getAttribute('data-collapsed') === 'true';

    if (isCollapsed) {
      this.setAttribute('data-collapsed', 'false');
      console.log('not collpsed');
      var getTextHeight = this.lastElementChild.firstElementChild.scrollHeight;
      this.lastElementChild.firstElementChild.style.maxHeight = "0";
      this.lastElementChild.style.padding = "0";
    } else {
      this.setAttribute('data-collapsed', 'true');
      console.log('collapsed');
      var _getTextHeight = this.lastElementChild.firstElementChild.scrollHeight;
      this.lastElementChild.firstElementChild.style.maxHeight = "".concat(_getTextHeight, "px");
      this.lastElementChild.style.padding = "1em 0";
    }
  }

  if (card[0].getAttribute('data-collapsed') === 'true') {
    var getScrollHeight = card[0].lastElementChild.firstElementChild.scrollHeight;
    card[0].lastElementChild.style.padding = '1em 0';
    card[0].lastElementChild.firstElementChild.style.maxHeight = "".concat(getScrollHeight + 50, "px");
  }

  card.forEach(function (item, index) {
    item.addEventListener('click', dropdown);
  });
}

featureSection();

function aboutUs() {
  var aboutUs = document.querySelector('.section-about-us__wrapper');
  var aboutUsCount = _homepageData["default"][4].aboutUs.length;
  var count = 0;
  var data = [];
  data.push(_homepageData["default"][4].aboutUs);
  document.querySelector('.section-about-us__wrapper__left .title').innerHTML = data[0][count].title;
  document.querySelector('.section-about-us__wrapper__left .desc').innerHTML = data[0][count].desc;
  document.querySelector('.section-about-us__wrapper__left .btn-about-us').href = data[0][count].linkURL;
  document.querySelector('.section-about-us__wrapper__right').style.backgroundImage = "url(".concat(data[0][count].imageURL, ")");

  if (aboutUsCount > 1) {
    var aboutUsTransition = function aboutUsTransition() {
      var leftPanel = document.querySelector('.section-about-us__wrapper__left');
      var rightPanel = document.querySelector('.section-about-us__wrapper__right');
      setTimeout(function () {
        leftPanel.style.opacity = '0';
        rightPanel.style.opacity = '0';
        setTimeout(function () {
          count++;
          if (count > aboutUsCount - 1) count = 0;
          document.querySelector('.section-about-us__wrapper__left .title').innerHTML = data[0][count].title;
          document.querySelector('.section-about-us__wrapper__left .desc').innerHTML = data[0][count].desc;
          document.querySelector('.section-about-us__wrapper__left .btn-about-us').href = data[0][count].linkURL;
          document.querySelector('.section-about-us__wrapper__right').style.backgroundImage = "url(".concat(data[0][count].imageURL, ")");
          leftPanel.style.opacity = '1';
          rightPanel.style.opacity = '1';
        }, 1500);
        aboutUsTransition();
      }, 10000);
    };

    aboutUsTransition();
  } else {
    console.log('about us only contain one data');
  }
}

aboutUs();

},{"./homepageData":2,"swiper":93}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  productSsection: [{
    title: "Property<br>Mangement System",
    logo: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem temporibus provid ent, a omnis ipsum vitae odio quae alias cumque fugit rem porro voluptas nulla magni nisi vero libero! Aperiam.",
    textBg: "PMS",
    youtube: "#",
    link: "#"
  }, {
    title: "Property Mangement System2",
    desc: "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem temporibus provid ent, a omnis ipsum vitae odio quae alias cumque fugit rem porro voluptas nulla magni nisi vero libero! Aperiam.",
    textBg: "PMS2",
    youtube: "#",
    link: "#"
  }, {
    title: "Property Mangement System3",
    desc: "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem temporibus provid ent, a omnis ipsum vitae odio quae alias cumque fugit rem porro voluptas nulla magni nisi vero libero! Aperiam.",
    textBg: "PMS3",
    youtube: "#",
    link: "#"
  }]
}, {
  clientLogo: []
}, {
  module: []
}, {
  feature: []
}, {
  aboutUs: [{
    title: "ICT ONE Solutions",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ratione labore eveniet culpa incidunt odit, beatae eum magni provident accusantium quo doloribus doloremque eius, aperiam nihil modi, ea dolore rem?",
    linkURL: "#",
    imageURL: "../assets/entitas-privat.png"
  }, {
    title: "ICT ONE Solutions2",
    desc: "Lorem2 ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ratione labore eveniet culpa incidunt odit, beatae eum magni provident accusantium quo doloribus doloremque eius, aperiam nihil modi, ea dolore rem?",
    linkURL: "#",
    imageURL: "../assets/entitas-privat.png"
  }, {
    title: "ICT ONE Solutions3",
    desc: "Lorem3 ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ratione labore eveniet culpa incidunt odit, beatae eum magni provident accusantium quo doloribus doloremque eius, aperiam nihil modi, ea dolore rem?",
    linkURL: "#",
    imageURL: "../assets/entitas-privat.pnggit a"
  }]
}];
exports["default"] = _default;

},{}],3:[function(require,module,exports){
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

},{"ssr-window":4}],4:[function(require,module,exports){
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


},{}],5:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],6:[function(require,module,exports){
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
},{"../../utils/utils":92,"ssr-window":4}],7:[function(require,module,exports){
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
},{"../../utils/utils":92}],8:[function(require,module,exports){
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
},{"ssr-window":4}],9:[function(require,module,exports){
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
},{"./getBreakpoint":8,"./setBreakpoint":10}],10:[function(require,module,exports){
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
},{"../../../utils/utils":92}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{"./addClasses":12,"./removeClasses":14}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
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
},{"../../modules/observer/observer":86,"../../modules/resize/resize":87,"../../utils/dom":88,"../../utils/get-browser":89,"../../utils/get-device":90,"../../utils/get-support":91,"../../utils/utils":92,"./breakpoints/index":9,"./check-overflow/index":11,"./classes/index":13,"./defaults":16,"./events-emitter":17,"./events/index":18,"./grab-cursor/index":25,"./images/index":28,"./loop/index":31,"./manipulation/index":37,"./modular":41,"./slide/index":42,"./transition/index":50,"./translate/index":55,"./update/index":60}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
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
},{"./onClick":19,"./onResize":20,"./onScroll":21,"./onTouchEnd":22,"./onTouchMove":23,"./onTouchStart":24,"ssr-window":4}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{"../../../utils/utils":92}],23:[function(require,module,exports){
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
},{"../../../utils/dom":88,"../../../utils/utils":92,"ssr-window":4}],24:[function(require,module,exports){
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
},{"../../../utils/dom":88,"../../../utils/utils":92,"ssr-window":4}],25:[function(require,module,exports){
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
},{"./setGrabCursor":26,"./unsetGrabCursor":27}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
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
},{"./loadImage":29,"./preloadImages":30}],29:[function(require,module,exports){
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
},{"../../../utils/dom":88,"ssr-window":4}],30:[function(require,module,exports){
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
},{}],31:[function(require,module,exports){
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
},{"./loopCreate":32,"./loopDestroy":33,"./loopFix":34}],32:[function(require,module,exports){
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
},{"../../../utils/dom":88,"ssr-window":4}],33:[function(require,module,exports){
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
},{}],34:[function(require,module,exports){
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
},{}],35:[function(require,module,exports){
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
},{}],36:[function(require,module,exports){
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
},{}],37:[function(require,module,exports){
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
},{"./addSlide":35,"./appendSlide":36,"./prependSlide":38,"./removeAllSlides":39,"./removeSlide":40}],38:[function(require,module,exports){
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
},{}],39:[function(require,module,exports){
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
},{}],40:[function(require,module,exports){
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
},{}],41:[function(require,module,exports){
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
},{"../../utils/utils":92}],42:[function(require,module,exports){
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
},{"./slideNext":43,"./slidePrev":44,"./slideReset":45,"./slideTo":46,"./slideToClickedSlide":47,"./slideToClosest":48,"./slideToLoop":49}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
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
},{}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
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
},{}],47:[function(require,module,exports){
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
},{"../../../utils/dom":88,"../../../utils/utils":92}],48:[function(require,module,exports){
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
},{}],49:[function(require,module,exports){
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
},{}],50:[function(require,module,exports){
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
},{"./setTransition":51,"./transitionEnd":52,"./transitionStart":53}],51:[function(require,module,exports){
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
},{}],52:[function(require,module,exports){
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
},{}],53:[function(require,module,exports){
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
},{}],54:[function(require,module,exports){
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
},{"../../../utils/utils":92}],55:[function(require,module,exports){
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
},{"./getTranslate":54,"./maxTranslate":56,"./minTranslate":57,"./setTranslate":58,"./translateTo":59}],56:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = maxTranslate;

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
},{}],57:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = minTranslate;

function minTranslate() {
  return -this.snapGrid[0];
}
},{}],58:[function(require,module,exports){
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
},{}],59:[function(require,module,exports){
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
},{}],60:[function(require,module,exports){
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
},{"./updateActiveIndex":61,"./updateAutoHeight":62,"./updateClickedSlide":63,"./updateProgress":64,"./updateSize":65,"./updateSlides":66,"./updateSlidesClasses":67,"./updateSlidesOffset":68,"./updateSlidesProgress":69}],61:[function(require,module,exports){
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
},{"../../../utils/utils":92}],62:[function(require,module,exports){
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
},{}],63:[function(require,module,exports){
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
},{"../../../utils/dom":88}],64:[function(require,module,exports){
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
},{"../../../utils/utils":92}],65:[function(require,module,exports){
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
},{"../../../utils/utils":92}],66:[function(require,module,exports){
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
},{"../../../utils/utils":92}],67:[function(require,module,exports){
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
},{}],68:[function(require,module,exports){
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
},{}],69:[function(require,module,exports){
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
},{"../../../utils/dom":88}],70:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],71:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],72:[function(require,module,exports){
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
},{"../../utils/utils":92}],73:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],74:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92,"ssr-window":4}],75:[function(require,module,exports){
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
},{"../../utils/utils":92,"ssr-window":4}],76:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92,"ssr-window":4}],77:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92,"ssr-window":4}],78:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92,"ssr-window":4}],79:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],80:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],81:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],82:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92,"ssr-window":4}],83:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],84:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92}],85:[function(require,module,exports){
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
},{"../../utils/dom":88,"../../utils/utils":92,"ssr-window":4}],86:[function(require,module,exports){
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
},{"../../utils/utils":92,"ssr-window":4}],87:[function(require,module,exports){
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
},{"../../utils/utils":92,"ssr-window":4}],88:[function(require,module,exports){
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
},{"dom7":3}],89:[function(require,module,exports){
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
},{"ssr-window":4}],90:[function(require,module,exports){
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
},{"./get-support":91,"ssr-window":4}],91:[function(require,module,exports){
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
},{"ssr-window":4}],92:[function(require,module,exports){
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
},{"ssr-window":4}],93:[function(require,module,exports){
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
},{"./cjs/components/a11y/a11y":5,"./cjs/components/autoplay/autoplay":6,"./cjs/components/controller/controller":7,"./cjs/components/core/core-class":15,"./cjs/components/effect-coverflow/effect-coverflow":70,"./cjs/components/effect-cube/effect-cube":71,"./cjs/components/effect-fade/effect-fade":72,"./cjs/components/effect-flip/effect-flip":73,"./cjs/components/hash-navigation/hash-navigation":74,"./cjs/components/history/history":75,"./cjs/components/keyboard/keyboard":76,"./cjs/components/lazy/lazy":77,"./cjs/components/mousewheel/mousewheel":78,"./cjs/components/navigation/navigation":79,"./cjs/components/pagination/pagination":80,"./cjs/components/parallax/parallax":81,"./cjs/components/scrollbar/scrollbar":82,"./cjs/components/thumbs/thumbs":83,"./cjs/components/virtual/virtual":84,"./cjs/components/zoom/zoom":85}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2xlb25hL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9ob21lcGFnZS5qcyIsImpzL2hvbWVwYWdlRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9kb203L2RvbTcuY2pzLmpzIiwibm9kZV9tb2R1bGVzL3Nzci13aW5kb3cvc3NyLXdpbmRvdy51bWQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2ExMXkvYTExeS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvYXV0b3BsYXkvYXV0b3BsYXkuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9icmVha3BvaW50cy9nZXRCcmVha3BvaW50LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2JyZWFrcG9pbnRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2JyZWFrcG9pbnRzL3NldEJyZWFrcG9pbnQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvY2hlY2stb3ZlcmZsb3cvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9hZGRDbGFzc2VzLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2NsYXNzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9yZW1vdmVDbGFzc2VzLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2NvcmUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZGVmYXVsdHMuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZXZlbnRzLWVtaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZXZlbnRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vbkNsaWNrLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblJlc2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25TY3JvbGwuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uVG91Y2hFbmQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uVG91Y2hNb3ZlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblRvdWNoU3RhcnQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3Ivc2V0R3JhYkN1cnNvci5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9ncmFiLWN1cnNvci91bnNldEdyYWJDdXJzb3IuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvaW1hZ2VzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL2ltYWdlcy9sb2FkSW1hZ2UuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvaW1hZ2VzL3ByZWxvYWRJbWFnZXMuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvbG9vcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BDcmVhdGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvbG9vcC9sb29wRGVzdHJveS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BGaXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2FkZFNsaWRlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9hcHBlbmRTbGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3ByZXBlbmRTbGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vcmVtb3ZlQWxsU2xpZGVzLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9yZW1vdmVTbGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9tb2R1bGFyLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3NsaWRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlTmV4dC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVByZXYuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVSZXNldC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVRvLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVUb0Nsb3Nlc3QuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVUb0xvb3AuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdHJhbnNpdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3NldFRyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdHJhbnNpdGlvbi90cmFuc2l0aW9uRW5kLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvblN0YXJ0LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9nZXRUcmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9tYXhUcmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL21pblRyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS90cmFuc2xhdGUvc2V0VHJhbnNsYXRlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS90cmFuc2xhdGVUby5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS91cGRhdGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZUFjdGl2ZUluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVBdXRvSGVpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVDbGlja2VkU2xpZGUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVByb2dyZXNzLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTaXplLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXMuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc0NsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc09mZnNldC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzUHJvZ3Jlc3MuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2VmZmVjdC1jb3ZlcmZsb3cvZWZmZWN0LWNvdmVyZmxvdy5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvZWZmZWN0LWN1YmUvZWZmZWN0LWN1YmUuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL2VmZmVjdC1mYWRlL2VmZmVjdC1mYWRlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9lZmZlY3QtZmxpcC9lZmZlY3QtZmxpcC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvaGFzaC1uYXZpZ2F0aW9uL2hhc2gtbmF2aWdhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvaGlzdG9yeS9oaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9rZXlib2FyZC9rZXlib2FyZC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvbGF6eS9sYXp5LmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9tb3VzZXdoZWVsL21vdXNld2hlZWwuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy9wYXJhbGxheC9wYXJhbGxheC5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvY2pzL2NvbXBvbmVudHMvdmlydHVhbC92aXJ0dWFsLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvY29tcG9uZW50cy96b29tL3pvb20uanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy9tb2R1bGVzL29ic2VydmVyL29ic2VydmVyLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvdXRpbHMvZG9tLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvdXRpbHMvZ2V0LWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy91dGlscy9nZXQtZGV2aWNlLmpzIiwibm9kZV9tb2R1bGVzL3N3aXBlci9janMvdXRpbHMvZ2V0LXN1cHBvcnQuanMiLCJub2RlX21vZHVsZXMvc3dpcGVyL2Nqcy91dGlscy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLmNqcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTLGNBQVQsR0FBeUI7QUFDdkIsTUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsK0JBQXZCLENBQVo7QUFDQSxNQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBWDtBQUNBLE1BQUksS0FBSyxHQUFHLENBQVo7O0FBRUEsV0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXVCO0FBQ3JCLFFBQUksV0FBVyxHQUFHO0FBQ2hCLE1BQUEsS0FBSyxFQUFHLHlCQUFhLENBQWIsRUFBZ0IsZUFBaEIsQ0FBZ0MsS0FBaEMsRUFBdUMsS0FEL0I7QUFFaEIsTUFBQSxJQUFJLEVBQUcseUJBQWEsQ0FBYixFQUFnQixlQUFoQixDQUFnQyxLQUFoQyxFQUF1QyxJQUY5QjtBQUdoQixNQUFBLE1BQU0sRUFBRyx5QkFBYSxDQUFiLEVBQWdCLGVBQWhCLENBQWdDLEtBQWhDLEVBQXVDLE1BSGhDO0FBSWhCLE1BQUEsT0FBTyxFQUFHLHlCQUFhLENBQWIsRUFBZ0IsZUFBaEIsQ0FBZ0MsS0FBaEMsRUFBdUMsT0FKakM7QUFLaEIsTUFBQSxJQUFJLEVBQUcseUJBQWEsQ0FBYixFQUFnQixlQUFoQixDQUFnQyxLQUFoQyxFQUF1QztBQUw5QixLQUFsQjtBQVFBLElBQUEsS0FBSyxDQUFDLFNBQU4sR0FBa0IsV0FBVyxDQUFDLEtBQTlCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixXQUFXLENBQUMsSUFBN0I7QUFDQSxJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlDQUF2QixFQUEwRCxTQUExRCxHQUFzRSxXQUFXLENBQUMsTUFBbEY7QUFDQSxJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLHdDQUF2QixFQUFpRSxJQUFqRSxHQUF3RSxXQUFXLENBQUMsSUFBcEY7QUFFRDs7QUFFRCxFQUFBLE9BQU8sQ0FBQyxLQUFELENBQVA7O0FBRUEsV0FBUyxpQkFBVCxHQUE0QjtBQUMxQixJQUFBLEtBQUssR0FBRyxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCLGFBQXhCLElBQXlDLEVBQUUsS0FBM0MsR0FBbUQsRUFBRSxLQUE3RDs7QUFDQSxRQUFHLEtBQUssR0FBRyx5QkFBYSxDQUFiLEVBQWdCLGVBQWhCLENBQWdDLE1BQWhDLEdBQXVDLENBQWxELEVBQW9EO0FBQ2xELE1BQUEsS0FBSyxHQUFHLENBQVI7QUFDRCxLQUZELE1BRU0sSUFBRyxLQUFLLEdBQUcsQ0FBWCxFQUFhO0FBQ2pCLE1BQUEsS0FBSyxHQUFHLHlCQUFhLENBQWIsRUFBZ0IsZUFBaEIsQ0FBZ0MsTUFBaEMsR0FBdUMsQ0FBL0M7QUFDRDs7QUFDRCxJQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksT0FBWixHQUFzQixHQUF0QjtBQUNBLElBQUEsS0FBSyxDQUFDLEtBQU4sQ0FBWSxTQUFaLEdBQXdCLG1CQUF4QjtBQUNBLElBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLEdBQXJCO0FBRUEsSUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmLE1BQUEsT0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBLE1BQUEsS0FBSyxDQUFDLEtBQU4sQ0FBWSxPQUFaLEdBQXNCLEdBQXRCO0FBQ0EsTUFBQSxLQUFLLENBQUMsS0FBTixDQUFZLFNBQVosR0FBd0IsZUFBeEI7QUFDQSxNQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxHQUFxQixHQUFyQjtBQUNELEtBTFMsRUFLUCxJQUxPLENBQVY7QUFNRDs7QUFFRCxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQiwyQkFBMUIsRUFBdUQsT0FBdkQsQ0FBK0QsVUFBQSxJQUFJLEVBQUk7QUFDckUsSUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBOEIsaUJBQTlCO0FBQ0QsR0FGRDtBQUdEOztBQUVELGNBQWM7O0FBRWQsU0FBUyxhQUFULEdBQXdCO0FBQ3RCLHFCQUFPLEdBQVAsQ0FBVyxDQUFDLGtCQUFELEVBQVksa0JBQVosRUFBdUIsZ0JBQXZCLENBQVg7O0FBQ0EsTUFBTSxNQUFNLEdBQUcsSUFBSSxrQkFBSixDQUFXLDRDQUFYLEVBQXlEO0FBQ3RFO0FBQ0EsSUFBQSxTQUFTLEVBQUUsWUFGMkQ7QUFHdEUsSUFBQSxJQUFJLEVBQUUsSUFIZ0U7QUFJdEUsSUFBQSxhQUFhLEVBQUUsQ0FKdUQ7QUFLdEUsSUFBQSxXQUFXLEVBQUc7QUFDWixXQUFNO0FBQ0osUUFBQSxhQUFhLEVBQUc7QUFEWixPQURNO0FBS1osV0FBTTtBQUNKLFFBQUEsYUFBYSxFQUFHO0FBRFosT0FMTTtBQVNaLFdBQU07QUFDSixRQUFBLGFBQWEsRUFBRztBQURaO0FBVE0sS0FMd0Q7QUFrQnRFLElBQUEsY0FBYyxFQUFDLEtBbEJ1RDtBQW1CdEUsSUFBQSxRQUFRLEVBQUU7QUFDUixNQUFBLEtBQUssRUFBQztBQURFO0FBbkI0RCxHQUF6RCxDQUFmO0FBeUJEOztBQUVELGFBQWE7O0FBRWIsU0FBUyxhQUFULEdBQXdCO0FBQ3RCLHFCQUFPLEdBQVAsQ0FBVyxDQUFDLGtCQUFELEVBQVksa0JBQVosQ0FBWDs7QUFFQSxNQUFJLElBQUksR0FBRyxDQUFDLFVBQUQsRUFBWSxRQUFaLEVBQXFCLGVBQXJCLEVBQXFDLG9CQUFyQyxFQUEwRCxhQUExRCxFQUF3RSxjQUF4RSxDQUFYO0FBQ0EsTUFBTSxNQUFNLEdBQUcsSUFBSSxrQkFBSixDQUFXLG1DQUFYLEVBQWdEO0FBQzdEO0FBQ0EsSUFBQSxTQUFTLEVBQUUsWUFGa0Q7QUFHN0QsSUFBQSxJQUFJLEVBQUUsSUFIdUQ7QUFJN0QsSUFBQSxjQUFjLEVBQUUsSUFKNkM7QUFLN0QsSUFBQSxhQUFhLEVBQUcsQ0FMNkM7QUFNN0QsSUFBQSxXQUFXLEVBQUc7QUFDWixXQUFNO0FBQ0osUUFBQSxhQUFhLEVBQUc7QUFEWixPQURNO0FBS1osV0FBTTtBQUNKLFFBQUEsYUFBYSxFQUFHO0FBRFosT0FMTTtBQVNaLFdBQU07QUFDSixRQUFBLGFBQWEsRUFBRztBQURaLE9BVE07QUFhWixXQUFNO0FBQ0osUUFBQSxhQUFhLEVBQUc7QUFEWjtBQWJNLEtBTitDO0FBd0I3RDtBQUNBLElBQUEsVUFBVSxFQUFFO0FBQ1YsTUFBQSxFQUFFLEVBQUUsb0NBRE07QUFFVixNQUFBLFNBQVMsRUFBRSxJQUZEO0FBR1YsTUFBQSxZQUFZLEVBQUUsc0JBQVUsS0FBVixFQUFpQixTQUFqQixFQUE0QjtBQUN0QyxlQUFPLGtCQUFrQixTQUFsQixHQUE4QixJQUE5QixHQUFzQyxJQUFJLENBQUMsS0FBRCxDQUExQyxHQUFxRCxTQUE1RDtBQUNEO0FBTE8sS0F6QmlELENBaUM3RDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBRUU7QUFDRjtBQUNBO0FBQ0E7O0FBMUMrRCxHQUFoRCxDQUFmO0FBNENEOztBQUVELGFBQWE7O0FBRWIsU0FBUyxjQUFULEdBQXlCO0FBQ3ZCLE1BQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQix1Q0FBMUIsQ0FBWDs7QUFFQSxXQUFTLFFBQVQsR0FBbUI7QUFDakIsUUFBSSxXQUFXLEdBQUcsS0FBSyxZQUFMLENBQWtCLGdCQUFsQixNQUF3QyxNQUExRDs7QUFFQSxRQUFHLFdBQUgsRUFBZTtBQUNiLFdBQUssWUFBTCxDQUFrQixnQkFBbEIsRUFBbUMsT0FBbkM7QUFDQSxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjtBQUNBLFVBQUksYUFBYSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0IsaUJBQXRCLENBQXdDLFlBQTVEO0FBQ0EsV0FBSyxnQkFBTCxDQUFzQixpQkFBdEIsQ0FBd0MsS0FBeEMsQ0FBOEMsU0FBOUM7QUFDQSxXQUFLLGdCQUFMLENBQXNCLEtBQXRCLENBQTRCLE9BQTVCO0FBQ0QsS0FORCxNQU1NO0FBQ0osV0FBSyxZQUFMLENBQWtCLGdCQUFsQixFQUFtQyxNQUFuQztBQUNBLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsVUFBSSxjQUFhLEdBQUcsS0FBSyxnQkFBTCxDQUFzQixpQkFBdEIsQ0FBd0MsWUFBNUQ7QUFDQSxXQUFLLGdCQUFMLENBQXNCLGlCQUF0QixDQUF3QyxLQUF4QyxDQUE4QyxTQUE5QyxhQUE2RCxjQUE3RDtBQUNBLFdBQUssZ0JBQUwsQ0FBc0IsS0FBdEIsQ0FBNEIsT0FBNUI7QUFDRDtBQUNGOztBQUVELE1BQUcsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLFlBQVIsQ0FBcUIsZ0JBQXJCLE1BQTJDLE1BQTlDLEVBQXNEO0FBQ3BELFFBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxnQkFBUixDQUF5QixpQkFBekIsQ0FBMkMsWUFBakU7QUFDQSxJQUFBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxnQkFBUixDQUF5QixLQUF6QixDQUErQixPQUEvQixHQUF5QyxPQUF6QztBQUNBLElBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLGdCQUFSLENBQXlCLGlCQUF6QixDQUEyQyxLQUEzQyxDQUFpRCxTQUFqRCxhQUErRCxlQUFlLEdBQUMsRUFBL0U7QUFDRDs7QUFFRCxFQUFBLElBQUksQ0FBQyxPQUFMLENBQWEsVUFBQyxJQUFELEVBQU0sS0FBTixFQUFnQjtBQUMzQixJQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixPQUF0QixFQUE4QixRQUE5QjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxjQUFjOztBQUVkLFNBQVMsT0FBVCxHQUFrQjtBQUNoQixNQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBZDtBQUNBLE1BQUksWUFBWSxHQUFHLHlCQUFhLENBQWIsRUFBZ0IsT0FBaEIsQ0FBd0IsTUFBM0M7QUFFQSxNQUFJLEtBQUssR0FBRyxDQUFaO0FBRUEsTUFBSSxJQUFJLEdBQUcsRUFBWDtBQUNBLEVBQUEsSUFBSSxDQUFDLElBQUwsQ0FBVSx5QkFBYSxDQUFiLEVBQWdCLE9BQTFCO0FBRUEsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1Qix5Q0FBdkIsRUFBa0UsU0FBbEUsR0FBOEUsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLEtBQVIsRUFBZSxLQUE3RjtBQUNBLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsd0NBQXZCLEVBQWlFLFNBQWpFLEdBQTZFLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxLQUFSLEVBQWUsSUFBNUY7QUFDQSxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdEQUF2QixFQUF5RSxJQUF6RSxHQUFnRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsS0FBUixFQUFlLE9BQS9GO0FBQ0EsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixtQ0FBdkIsRUFBNEQsS0FBNUQsQ0FBa0UsZUFBbEUsaUJBQTJGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxLQUFSLEVBQWUsUUFBMUc7O0FBRUEsTUFBRyxZQUFZLEdBQUcsQ0FBbEIsRUFBb0I7QUFBQSxRQUNULGlCQURTLEdBQ2xCLFNBQVMsaUJBQVQsR0FBNEI7QUFDMUIsVUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0NBQXZCLENBQWhCO0FBQ0EsVUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUNBQXZCLENBQWpCO0FBRUEsTUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmLFFBQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsR0FBMUI7QUFDQSxRQUFBLFVBQVUsQ0FBQyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLEdBQTNCO0FBRUEsUUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmLFVBQUEsS0FBSztBQUNMLGNBQUcsS0FBSyxHQUFHLFlBQVksR0FBQyxDQUF4QixFQUEyQixLQUFLLEdBQUcsQ0FBUjtBQUUzQixVQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLHlDQUF2QixFQUFrRSxTQUFsRSxHQUE4RSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsS0FBUixFQUFlLEtBQTdGO0FBQ0EsVUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1Qix3Q0FBdkIsRUFBaUUsU0FBakUsR0FBNkUsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLEtBQVIsRUFBZSxJQUE1RjtBQUNBLFVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0RBQXZCLEVBQXlFLElBQXpFLEdBQWdGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxLQUFSLEVBQWUsT0FBL0Y7QUFDQSxVQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1DQUF2QixFQUE0RCxLQUE1RCxDQUFrRSxlQUFsRSxpQkFBMkYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRLEtBQVIsRUFBZSxRQUExRztBQUVBLFVBQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsR0FBMUI7QUFDQSxVQUFBLFVBQVUsQ0FBQyxLQUFYLENBQWlCLE9BQWpCLEdBQTJCLEdBQTNCO0FBQ0QsU0FYUyxFQVdQLElBWE8sQ0FBVjtBQWFBLFFBQUEsaUJBQWlCO0FBQ2xCLE9BbEJTLEVBa0JQLEtBbEJPLENBQVY7QUFtQkQsS0F4QmlCOztBQTBCbEIsSUFBQSxpQkFBaUI7QUFDbEIsR0EzQkQsTUEyQks7QUFDSCxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0NBQVo7QUFDRDtBQUNGOztBQUVELE9BQU87Ozs7Ozs7OztlQ3ROUCxDQUNJO0FBQ0ksRUFBQSxlQUFlLEVBQUUsQ0FDYjtBQUNJLElBQUEsS0FBSyxFQUFDLDhCQURWO0FBRUksSUFBQSxJQUFJLEVBQUMsRUFGVDtBQUdJLElBQUEsSUFBSSxFQUFDLGlOQUhUO0FBSUksSUFBQSxNQUFNLEVBQUMsS0FKWDtBQUtJLElBQUEsT0FBTyxFQUFDLEdBTFo7QUFNSSxJQUFBLElBQUksRUFBQztBQU5ULEdBRGEsRUFTYjtBQUNJLElBQUEsS0FBSyxFQUFDLDRCQURWO0FBRUksSUFBQSxJQUFJLEVBQUMsa05BRlQ7QUFHSSxJQUFBLE1BQU0sRUFBQyxNQUhYO0FBSUksSUFBQSxPQUFPLEVBQUMsR0FKWjtBQUtJLElBQUEsSUFBSSxFQUFDO0FBTFQsR0FUYSxFQWdCYjtBQUNJLElBQUEsS0FBSyxFQUFDLDRCQURWO0FBRUksSUFBQSxJQUFJLEVBQUMsa05BRlQ7QUFHSSxJQUFBLE1BQU0sRUFBQyxNQUhYO0FBSUksSUFBQSxPQUFPLEVBQUMsR0FKWjtBQUtJLElBQUEsSUFBSSxFQUFDO0FBTFQsR0FoQmE7QUFEckIsQ0FESixFQTRCSTtBQUNJLEVBQUEsVUFBVSxFQUFHO0FBRGpCLENBNUJKLEVBK0JJO0FBQ0ksRUFBQSxNQUFNLEVBQUU7QUFEWixDQS9CSixFQWtDSTtBQUNJLEVBQUEsT0FBTyxFQUFHO0FBRGQsQ0FsQ0osRUFxQ0k7QUFDSSxFQUFBLE9BQU8sRUFBRyxDQUNOO0FBQ0ksSUFBQSxLQUFLLEVBQUcsbUJBRFo7QUFFSSxJQUFBLElBQUksRUFBRyx5TkFGWDtBQUdJLElBQUEsT0FBTyxFQUFHLEdBSGQ7QUFJSSxJQUFBLFFBQVEsRUFBRztBQUpmLEdBRE0sRUFPTjtBQUNJLElBQUEsS0FBSyxFQUFHLG9CQURaO0FBRUksSUFBQSxJQUFJLEVBQUcsME5BRlg7QUFHSSxJQUFBLE9BQU8sRUFBRyxHQUhkO0FBSUksSUFBQSxRQUFRLEVBQUc7QUFKZixHQVBNLEVBYU47QUFDSSxJQUFBLEtBQUssRUFBRyxvQkFEWjtBQUVJLElBQUEsSUFBSSxFQUFHLDBOQUZYO0FBR0ksSUFBQSxPQUFPLEVBQUcsR0FIZDtBQUlJLElBQUEsUUFBUSxFQUFHO0FBSmYsR0FiTTtBQURkLENBckNKLEM7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ptQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaG1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgU3dpcGVyLCB7TmF2aWdhdGlvbixQYWdpbmF0aW9uLEF1dG9wbGF5fSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgaG9tZXBhZ2VEYXRhIGZyb20gJy4vaG9tZXBhZ2VEYXRhJztcclxuXHJcbmZ1bmN0aW9uIHByb2R1Y3RTZWN0aW9uKCl7XHJcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VjdGlvbl9fbGVmdCAudGl0bGUnKVxyXG4gIGxldCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VjdGlvbl9fbGVmdCAuZGVzYycpXHJcbiAgbGV0IGNvdW50ID0gMFxyXG4gIFxyXG4gIGZ1bmN0aW9uIHNldERhdGEoY291bnQpe1xyXG4gICAgbGV0IHByb2R1Y3REYXRhID0ge1xyXG4gICAgICB0aXRsZSA6IGhvbWVwYWdlRGF0YVswXS5wcm9kdWN0U3NlY3Rpb25bY291bnRdLnRpdGxlLFxyXG4gICAgICBkZXNjIDogaG9tZXBhZ2VEYXRhWzBdLnByb2R1Y3RTc2VjdGlvbltjb3VudF0uZGVzYyxcclxuICAgICAgdGV4dEJnIDogaG9tZXBhZ2VEYXRhWzBdLnByb2R1Y3RTc2VjdGlvbltjb3VudF0udGV4dEJnLFxyXG4gICAgICB5b3V0dWJlIDogaG9tZXBhZ2VEYXRhWzBdLnByb2R1Y3RTc2VjdGlvbltjb3VudF0ueW91dHViZSxcclxuICAgICAgbGluayA6IGhvbWVwYWdlRGF0YVswXS5wcm9kdWN0U3NlY3Rpb25bY291bnRdLmxpbmssXHJcbiAgICB9XHJcblxyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gcHJvZHVjdERhdGEudGl0bGVcclxuICAgIGRlc2MuaW5uZXJIVE1MID0gcHJvZHVjdERhdGEuZGVzY1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VjdGlvbl9fbGVmdCAudGV4dC1iZycpLmlubmVySFRNTCA9IHByb2R1Y3REYXRhLnRleHRCZ1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VjdGlvbl9fbGVmdCAuYnRuLWxlYXJuLW1vcmUnKS5ocmVmID0gcHJvZHVjdERhdGEubGlua1xyXG5cclxuICB9XHJcblxyXG4gIHNldERhdGEoY291bnQpXHJcblxyXG4gIGZ1bmN0aW9uIHByb2R1Y3RUcmFuc2l0aW9uKCl7XHJcbiAgICBjb3VudCA9IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnJvdy1yaWdodCcpID8gKytjb3VudCA6IC0tY291bnRcclxuICAgIGlmKGNvdW50ID4gaG9tZXBhZ2VEYXRhWzBdLnByb2R1Y3RTc2VjdGlvbi5sZW5ndGgtMSl7XHJcbiAgICAgIGNvdW50ID0gMFxyXG4gICAgfWVsc2UgaWYoY291bnQgPCAwKXtcclxuICAgICAgY291bnQgPSBob21lcGFnZURhdGFbMF0ucHJvZHVjdFNzZWN0aW9uLmxlbmd0aC0xXHJcbiAgICB9XHJcbiAgICB0aXRsZS5zdHlsZS5vcGFjaXR5ID0gJzAnXHJcbiAgICB0aXRsZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDBweCknXHJcbiAgICBkZXNjLnN0eWxlLm9wYWNpdHkgPSAnMCdcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERhdGEoY291bnQpXHJcbiAgICAgIHRpdGxlLnN0eWxlLm9wYWNpdHkgPSAnMSdcclxuICAgICAgdGl0bGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknXHJcbiAgICAgIGRlc2Muc3R5bGUub3BhY2l0eSA9ICcxJ1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctbGVmdCwgLmFycm93LXJpZ2h0JykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHByb2R1Y3RUcmFuc2l0aW9uKVxyXG4gIH0pXHJcbn1cclxuXHJcbnByb2R1Y3RTZWN0aW9uKClcclxuXHJcbmZ1bmN0aW9uIGNsaWVudFNlY3Rpb24oKXtcclxuICBTd2lwZXIudXNlKFtOYXZpZ2F0aW9uLFBhZ2luYXRpb24sQXV0b3BsYXldKVxyXG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zZWN0aW9uLWNsaWVudF9fd3JhcHBlciAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICBicmVha3BvaW50cyA6IHtcclxuICAgICAgNTc2IDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXcgOiAzXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICA3NjggOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldyA6IDRcclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIDk5MiA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3IDogNVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6ZmFsc2UsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheToxMDAwXHJcbiAgICB9LFxyXG5cclxuICB9KVxyXG5cclxufVxyXG5cclxuY2xpZW50U2VjdGlvbigpXHJcblxyXG5mdW5jdGlvbiBtb2R1bGVTZWN0aW9uKCl7XHJcbiAgU3dpcGVyLnVzZShbTmF2aWdhdGlvbixQYWdpbmF0aW9uXSlcclxuXHJcbiAgbGV0IG1lbnUgPSBbJ1Byb3BlcnR5JywnUGVvcGxlJywnTWFudWZhY3R1cmluZycsJ0lUIFNlcnZpY2UgJiBBc3NldCcsJ0hvc3BpdGFsaXR5JywnRGlzdHJpYnV0aW9uJ11cclxuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc2VjdGlvbi1tb2R1bGUgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXcgOiA1LFxyXG4gICAgYnJlYWtwb2ludHMgOiB7XHJcbiAgICAgIDMwMCA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3IDogMlxyXG4gICAgICB9LFxyXG5cclxuICAgICAgNTc2IDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXcgOiAzXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICA3NjggOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldyA6IDRcclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIDk5MiA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3IDogNVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLnNlY3Rpb24tbW9kdWxlIC5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChtZW51W2luZGV4XSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgXHJcbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gIC8vICAgbmF2aWdhdGlvbjoge1xyXG4gIC8vICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAvLyAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgLy8gICB9LFxyXG4gIFxyXG4gICAgLy8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcbiAgLy8gICBzY3JvbGxiYXI6IHtcclxuICAvLyAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgLy8gICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGVTZWN0aW9uKClcclxuXHJcbmZ1bmN0aW9uIGZlYXR1cmVTZWN0aW9uKCl7XHJcbiAgbGV0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi1mZWF0dXJlX193cmFwcGVyX19sZWZ0IC5jYXJkJylcclxuXHJcbiAgZnVuY3Rpb24gZHJvcGRvd24oKXtcclxuICAgIGxldCBpc0NvbGxhcHNlZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcpID09PSAndHJ1ZSdcclxuXHJcbiAgICBpZihpc0NvbGxhcHNlZCl7XHJcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsJ2ZhbHNlJylcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBjb2xscHNlZCcpXHJcbiAgICAgIGxldCBnZXRUZXh0SGVpZ2h0ID0gdGhpcy5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnNjcm9sbEhlaWdodFxyXG4gICAgICB0aGlzLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUubWF4SGVpZ2h0ID0gYDBgXHJcbiAgICAgIHRoaXMubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5wYWRkaW5nID0gYDBgXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsJ3RydWUnKVxyXG4gICAgICBjb25zb2xlLmxvZygnY29sbGFwc2VkJylcclxuICAgICAgbGV0IGdldFRleHRIZWlnaHQgPSB0aGlzLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgIHRoaXMubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtnZXRUZXh0SGVpZ2h0fXB4YFxyXG4gICAgICB0aGlzLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUucGFkZGluZyA9IGAxZW0gMGBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmKGNhcmRbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcpID09PSAndHJ1ZScgKXtcclxuICAgIGxldCBnZXRTY3JvbGxIZWlnaHQgPSBjYXJkWzBdLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc2Nyb2xsSGVpZ2h0XHJcbiAgICBjYXJkWzBdLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUucGFkZGluZyA9ICcxZW0gMCdcclxuICAgIGNhcmRbMF0ubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5tYXhIZWlnaHQgPWAke2dldFNjcm9sbEhlaWdodCs1MH1weGBcclxuICB9XHJcblxyXG4gIGNhcmQuZm9yRWFjaCgoaXRlbSxpbmRleCkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZHJvcGRvd24pXHJcbiAgfSlcclxufVxyXG5cclxuZmVhdHVyZVNlY3Rpb24oKVxyXG5cclxuZnVuY3Rpb24gYWJvdXRVcygpe1xyXG4gIGxldCBhYm91dFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tYWJvdXQtdXNfX3dyYXBwZXInKVxyXG4gIGxldCBhYm91dFVzQ291bnQgPSBob21lcGFnZURhdGFbNF0uYWJvdXRVcy5sZW5ndGhcclxuXHJcbiAgbGV0IGNvdW50ID0gMFxyXG5cclxuICBsZXQgZGF0YSA9IFtdXHJcbiAgZGF0YS5wdXNoKGhvbWVwYWdlRGF0YVs0XS5hYm91dFVzKVxyXG4gIFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWFib3V0LXVzX193cmFwcGVyX19sZWZ0IC50aXRsZScpLmlubmVySFRNTCA9IGRhdGFbMF1bY291bnRdLnRpdGxlXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tYWJvdXQtdXNfX3dyYXBwZXJfX2xlZnQgLmRlc2MnKS5pbm5lckhUTUwgPSBkYXRhWzBdW2NvdW50XS5kZXNjXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tYWJvdXQtdXNfX3dyYXBwZXJfX2xlZnQgLmJ0bi1hYm91dC11cycpLmhyZWYgPSBkYXRhWzBdW2NvdW50XS5saW5rVVJMXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tYWJvdXQtdXNfX3dyYXBwZXJfX3JpZ2h0Jykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RhdGFbMF1bY291bnRdLmltYWdlVVJMfSlgXHJcblxyXG4gIGlmKGFib3V0VXNDb3VudCA+IDEpe1xyXG4gICAgZnVuY3Rpb24gYWJvdXRVc1RyYW5zaXRpb24oKXtcclxuICAgICAgbGV0IGxlZnRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWFib3V0LXVzX193cmFwcGVyX19sZWZ0JylcclxuICAgICAgbGV0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1hYm91dC11c19fd3JhcHBlcl9fcmlnaHQnKVxyXG4gICAgICBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGVmdFBhbmVsLnN0eWxlLm9wYWNpdHkgPSAnMCdcclxuICAgICAgICByaWdodFBhbmVsLnN0eWxlLm9wYWNpdHkgPSAnMCdcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICBpZihjb3VudCA+IGFib3V0VXNDb3VudC0xKSBjb3VudCA9IDBcclxuICBcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWFib3V0LXVzX193cmFwcGVyX19sZWZ0IC50aXRsZScpLmlubmVySFRNTCA9IGRhdGFbMF1bY291bnRdLnRpdGxlXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1hYm91dC11c19fd3JhcHBlcl9fbGVmdCAuZGVzYycpLmlubmVySFRNTCA9IGRhdGFbMF1bY291bnRdLmRlc2NcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWFib3V0LXVzX193cmFwcGVyX19sZWZ0IC5idG4tYWJvdXQtdXMnKS5ocmVmID0gZGF0YVswXVtjb3VudF0ubGlua1VSTFxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tYWJvdXQtdXNfX3dyYXBwZXJfX3JpZ2h0Jykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RhdGFbMF1bY291bnRdLmltYWdlVVJMfSlgXHJcblxyXG4gICAgICAgICAgbGVmdFBhbmVsLnN0eWxlLm9wYWNpdHkgPSAnMSdcclxuICAgICAgICAgIHJpZ2h0UGFuZWwuc3R5bGUub3BhY2l0eSA9ICcxJ1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG5cclxuICAgICAgICBhYm91dFVzVHJhbnNpdGlvbigpXHJcbiAgICAgIH0sIDEwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBhYm91dFVzVHJhbnNpdGlvbigpXHJcbiAgfWVsc2V7XHJcbiAgICBjb25zb2xlLmxvZygnYWJvdXQgdXMgb25seSBjb250YWluIG9uZSBkYXRhJylcclxuICB9XHJcbn1cclxuXHJcbmFib3V0VXMoKVxyXG4iLCJleHBvcnQgZGVmYXVsdCBcclxuW1xyXG4gICAge1xyXG4gICAgICAgIHByb2R1Y3RTc2VjdGlvbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcIlByb3BlcnR5PGJyPk1hbmdlbWVudCBTeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgIGxvZ286XCJcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBleGVyY2l0YXRpb25lbSB0ZW1wb3JpYnVzIHByb3ZpZCBlbnQsIGEgb21uaXMgaXBzdW0gdml0YWUgb2RpbyBxdWFlIGFsaWFzIGN1bXF1ZSBmdWdpdCByZW0gcG9ycm8gdm9sdXB0YXMgbnVsbGEgbWFnbmkgbmlzaSB2ZXJvIGxpYmVybyEgQXBlcmlhbS5cIixcclxuICAgICAgICAgICAgICAgIHRleHRCZzpcIlBNU1wiLFxyXG4gICAgICAgICAgICAgICAgeW91dHViZTpcIiNcIixcclxuICAgICAgICAgICAgICAgIGxpbms6XCIjXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6XCJQcm9wZXJ0eSBNYW5nZW1lbnQgU3lzdGVtMlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzYzpcIkxvcmVtMiBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBleGVyY2l0YXRpb25lbSB0ZW1wb3JpYnVzIHByb3ZpZCBlbnQsIGEgb21uaXMgaXBzdW0gdml0YWUgb2RpbyBxdWFlIGFsaWFzIGN1bXF1ZSBmdWdpdCByZW0gcG9ycm8gdm9sdXB0YXMgbnVsbGEgbWFnbmkgbmlzaSB2ZXJvIGxpYmVybyEgQXBlcmlhbS5cIixcclxuICAgICAgICAgICAgICAgIHRleHRCZzpcIlBNUzJcIixcclxuICAgICAgICAgICAgICAgIHlvdXR1YmU6XCIjXCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rOlwiI1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOlwiUHJvcGVydHkgTWFuZ2VtZW50IFN5c3RlbTNcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6XCJMb3JlbTMgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWkgZXhlcmNpdGF0aW9uZW0gdGVtcG9yaWJ1cyBwcm92aWQgZW50LCBhIG9tbmlzIGlwc3VtIHZpdGFlIG9kaW8gcXVhZSBhbGlhcyBjdW1xdWUgZnVnaXQgcmVtIHBvcnJvIHZvbHVwdGFzIG51bGxhIG1hZ25pIG5pc2kgdmVybyBsaWJlcm8hIEFwZXJpYW0uXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0Qmc6XCJQTVMzXCIsXHJcbiAgICAgICAgICAgICAgICB5b3V0dWJlOlwiI1wiLFxyXG4gICAgICAgICAgICAgICAgbGluazpcIiNcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2xpZW50TG9nbyA6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1vZHVsZTogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZmVhdHVyZSA6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGFib3V0VXMgOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJJQ1QgT05FIFNvbHV0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzYyA6IFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVsaWdlbmRpIHJhdGlvbmUgbGFib3JlIGV2ZW5pZXQgY3VscGEgaW5jaWR1bnQgb2RpdCwgYmVhdGFlIGV1bSBtYWduaSBwcm92aWRlbnQgYWNjdXNhbnRpdW0gcXVvIGRvbG9yaWJ1cyBkb2xvcmVtcXVlIGVpdXMsIGFwZXJpYW0gbmloaWwgbW9kaSwgZWEgZG9sb3JlIHJlbT9cIixcclxuICAgICAgICAgICAgICAgIGxpbmtVUkwgOiBcIiNcIixcclxuICAgICAgICAgICAgICAgIGltYWdlVVJMIDogXCIuLi9hc3NldHMvZW50aXRhcy1wcml2YXQucG5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgOiBcIklDVCBPTkUgU29sdXRpb25zMlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzYyA6IFwiTG9yZW0yIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFbGlnZW5kaSByYXRpb25lIGxhYm9yZSBldmVuaWV0IGN1bHBhIGluY2lkdW50IG9kaXQsIGJlYXRhZSBldW0gbWFnbmkgcHJvdmlkZW50IGFjY3VzYW50aXVtIHF1byBkb2xvcmlidXMgZG9sb3JlbXF1ZSBlaXVzLCBhcGVyaWFtIG5paGlsIG1vZGksIGVhIGRvbG9yZSByZW0/XCIsXHJcbiAgICAgICAgICAgICAgICBsaW5rVVJMIDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVSTCA6IFwiLi4vYXNzZXRzL2VudGl0YXMtcHJpdmF0LnBuZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJJQ1QgT05FIFNvbHV0aW9uczNcIixcclxuICAgICAgICAgICAgICAgIGRlc2MgOiBcIkxvcmVtMyBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWxpZ2VuZGkgcmF0aW9uZSBsYWJvcmUgZXZlbmlldCBjdWxwYSBpbmNpZHVudCBvZGl0LCBiZWF0YWUgZXVtIG1hZ25pIHByb3ZpZGVudCBhY2N1c2FudGl1bSBxdW8gZG9sb3JpYnVzIGRvbG9yZW1xdWUgZWl1cywgYXBlcmlhbSBuaWhpbCBtb2RpLCBlYSBkb2xvcmUgcmVtP1wiLFxyXG4gICAgICAgICAgICAgICAgbGlua1VSTCA6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVUkwgOiBcIi4uL2Fzc2V0cy9lbnRpdGFzLXByaXZhdC5wbmdnaXQgYVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl0iLCIvKipcbiAqIERvbTcgMy4wLjBcbiAqIE1pbmltYWxpc3RpYyBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIERPTSBtYW5pcHVsYXRpb24sIHdpdGggYSBqUXVlcnktY29tcGF0aWJsZSBBUElcbiAqIGh0dHBzOi8vZnJhbWV3b3JrNy5pby9kb2NzL2RvbTcuaHRtbFxuICpcbiAqIENvcHlyaWdodCAyMDIwLCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBOb3ZlbWJlciA5LCAyMDIwXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNzcldpbmRvdyA9IHJlcXVpcmUoJ3Nzci13aW5kb3cnKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuZnVuY3Rpb24gbWFrZVJlYWN0aXZlKG9iaikge1xuICB2YXIgcHJvdG8gPSBvYmouX19wcm90b19fO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19wcm90b19fJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHByb3RvO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHByb3RvLl9fcHJvdG9fXyA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBEb203ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQXJyYXkpIHtcbiAgX2luaGVyaXRzTG9vc2UoRG9tNywgX0FycmF5KTtcblxuICBmdW5jdGlvbiBEb203KGl0ZW1zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQXJyYXkuY2FsbC5hcHBseShfQXJyYXksIFt0aGlzXS5jb25jYXQoaXRlbXMpKSB8fCB0aGlzO1xuICAgIG1ha2VSZWFjdGl2ZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIERvbTc7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihBcnJheSkpO1xuXG5mdW5jdGlvbiBhcnJheUZsYXQoYXJyKSB7XG4gIGlmIChhcnIgPT09IHZvaWQgMCkge1xuICAgIGFyciA9IFtdO1xuICB9XG5cbiAgdmFyIHJlcyA9IFtdO1xuICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcbiAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYXJyYXlGbGF0KGVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5wdXNoKGVsKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyLCBjYWxsYmFjaykge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGFyciwgY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gYXJyYXlVbmlxdWUoYXJyKSB7XG4gIHZhciB1bmlxdWVBcnJheSA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHVuaXF1ZUFycmF5LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHVuaXF1ZUFycmF5LnB1c2goYXJyW2ldKTtcbiAgfVxuXG4gIHJldHVybiB1bmlxdWVBcnJheTtcbn1cbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLSguKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGdyb3VwKSB7XG4gICAgcmV0dXJuIGdyb3VwLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBxc2Eoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gW3NlbGVjdG9yXTtcbiAgfVxuXG4gIHZhciBhID0gW107XG4gIHZhciByZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYS5wdXNoKHJlc1tpXSk7XG4gIH1cblxuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCkge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuICB2YXIgZG9jdW1lbnQgPSBzc3JXaW5kb3cuZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIGFyciA9IFtdO1xuXG4gIGlmICghY29udGV4dCAmJiBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBEb203KGFycik7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgIHZhciBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xuXG4gICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8bGknKSA9PT0gMCkgdG9DcmVhdGUgPSAndWwnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWwuaW5kZXhPZignPHRoJykgPT09IDApIHRvQ3JlYXRlID0gJ3RyJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0Ym9keScpID09PSAwKSB0b0NyZWF0ZSA9ICd0YWJsZSc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICB2YXIgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnIucHVzaCh0ZW1wUGFyZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhcnIgPSBxc2Eoc2VsZWN0b3IudHJpbSgpLCBjb250ZXh0IHx8IGRvY3VtZW50KTtcbiAgICB9IC8vIGFyciA9IHFzYShzZWxlY3RvciwgZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSByZXR1cm4gc2VsZWN0b3I7XG4gICAgYXJyID0gc2VsZWN0b3I7XG4gIH1cblxuICByZXR1cm4gbmV3IERvbTcoYXJyYXlVbmlxdWUoYXJyKSk7XG59XG5cbiQuZm4gPSBEb203LnByb3RvdHlwZTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIHZhciBfZWwkY2xhc3NMaXN0O1xuXG4gICAgKF9lbCRjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3QpLmFkZC5hcHBseShfZWwkY2xhc3NMaXN0LCBjbGFzc05hbWVzKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgY2xhc3Nlc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5zcGxpdCgnICcpO1xuICB9KSk7XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICB2YXIgX2VsJGNsYXNzTGlzdDI7XG5cbiAgICAoX2VsJGNsYXNzTGlzdDIgPSBlbC5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseShfZWwkY2xhc3NMaXN0MiwgY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGNsYXNzZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuc3BsaXQoJyAnKTtcbiAgfSkpO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKCkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBjbGFzc2VzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKHRoaXMsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSkubGVuZ3RoID4gMDtcbiAgfSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gYXR0cihhdHRycywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGF0dHJzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBhdHRyXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdLmdldEF0dHJpYnV0ZShhdHRycyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSAvLyBTZXQgYXR0cnNcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBTdHJpbmdcbiAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9iamVjdFxuICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyKGF0dHIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJvcChwcm9wcywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBwcm9wXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTZXQgcHJvcHNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICB0aGlzW2ldW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXVtwcm9wTmFtZV0gPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgdmFyIGVsO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7IC8vIEdldCB2YWx1ZVxuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYga2V5IGluIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRhdGFLZXkgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5KTtcblxuICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICByZXR1cm4gZGF0YUtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IC8vIFNldCB2YWx1ZVxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZWwgPSB0aGlzW2ldO1xuICAgIGlmICghZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9O1xuICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0pIHtcbiAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0KCkge1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgZGF0YXNldCA9IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKGVsLmRhdGFzZXQpIHtcbiAgICBmb3IgKHZhciBkYXRhS2V5IGluIGVsLmRhdGFzZXQpIHtcbiAgICAgIGRhdGFzZXRbZGF0YUtleV0gPSBlbC5kYXRhc2V0W2RhdGFLZXldO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBfYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmIChfYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPj0gMCkge1xuICAgICAgICBkYXRhc2V0W3RvQ2FtZWxDYXNlKF9hdHRyLm5hbWUuc3BsaXQoJ2RhdGEtJylbMV0pXSA9IF9hdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBkYXRhc2V0KSB7XG4gICAgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ2ZhbHNlJykgZGF0YXNldFtrZXldID0gZmFsc2U7ZWxzZSBpZiAoZGF0YXNldFtrZXldID09PSAndHJ1ZScpIGRhdGFzZXRba2V5XSA9IHRydWU7ZWxzZSBpZiAocGFyc2VGbG9hdChkYXRhc2V0W2tleV0pID09PSBkYXRhc2V0W2tleV0gKiAxKSBkYXRhc2V0W2tleV0gKj0gMTtcbiAgfVxuXG4gIHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiB2YWwodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBnZXQgdmFsdWVcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZWwubXVsdGlwbGUgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZWwuc2VsZWN0ZWRPcHRpb25zW2ldLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZWwudmFsdWU7XG4gIH0gLy8gc2V0IHZhbHVlXG5cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICB2YXIgX2VsID0gdGhpc1tfaV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgX2VsLm11bHRpcGxlICYmIF9lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZWwub3B0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBfZWwub3B0aW9uc1tqXS5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2YoX2VsLm9wdGlvbnNbal0udmFsdWUpID49IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9lbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy52YWwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnID8gZHVyYXRpb24gKyBcIm1zXCIgOiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgdmFyIGV2ZW50VHlwZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFR5cGUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgdmFyIGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO2Vsc2Uge1xuICAgICAgdmFyIF9wYXJlbnRzID0gJCh0YXJnZXQpLnBhcmVudHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgX3BhcmVudHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkoX3BhcmVudHNba10sIGV2ZW50RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgIHZhciBldmVudERhdGEgPSBlICYmIGUudGFyZ2V0ID8gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXSA6IFtdO1xuXG4gICAgaWYgKGV2ZW50RGF0YS5pbmRleE9mKGUpIDwgMCkge1xuICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnREYXRhKTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcbiAgdmFyIGo7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnMpIGVsLmRvbTdMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzW2V2ZW50XSkgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpdmUgZXZlbnRzXG4gICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHZhciBfZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnMpIGVsLmRvbTdMaXZlTGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSkgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSA9IFtdO1xuXG4gICAgICAgIGVsLmRvbTdMaXZlTGlzdGVuZXJzW19ldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudFxuICAgICAgICB9KTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKF9ldmVudCwgaGFuZGxlTGl2ZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb2ZmKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXSxcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXSxcbiAgICAgIGxpc3RlbmVyID0gYXJnc1syXSxcbiAgICAgIGNhcHR1cmUgPSBhcmdzWzNdO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VHlwZSA9IGFyZ3NbMF07XG4gICAgbGlzdGVuZXIgPSBhcmdzWzFdO1xuICAgIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcbiAgICAgIHZhciBoYW5kbGVycyA9IHZvaWQgMDtcblxuICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNba107XG5cbiAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb25jZSgpIHtcbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICB9XG5cbiAgdmFyIGV2ZW50TmFtZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudE5hbWUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgZXZlbnRBcmdzID0gbmV3IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgICBldmVudEFyZ3NbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gICAgaWYgKG9uY2VIYW5kbGVyLmRvbTdwcm94eSkge1xuICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmRvbTdwcm94eTtcbiAgICB9XG4gIH1cblxuICBvbmNlSGFuZGxlci5kb203cHJveHkgPSBsaXN0ZW5lcjtcbiAgcmV0dXJuIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBvbmNlSGFuZGxlciwgY2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBzc3JXaW5kb3cuZ2V0V2luZG93KCk7XG5cbiAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW45KSwgX2tleTkgPSAwOyBfa2V5OSA8IF9sZW45OyBfa2V5OSsrKSB7XG4gICAgYXJnc1tfa2V5OV0gPSBhcmd1bWVudHNbX2tleTldO1xuICB9XG5cbiAgdmFyIGV2ZW50cyA9IGFyZ3NbMF0uc3BsaXQoJyAnKTtcbiAgdmFyIGV2ZW50RGF0YSA9IGFyZ3NbMV07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZXZlbnQgPSBldmVudHNbaV07XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIHZhciBlbCA9IHRoaXNbal07XG5cbiAgICAgIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgdmFyIGV2dCA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgICBkZXRhaWw6IGV2ZW50RGF0YSxcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmRvbTdFdmVudERhdGEgPSBhcmdzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSwgZGF0YUluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFJbmRleCA+IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICAgIGVsLmRvbTdFdmVudERhdGEgPSBbXTtcbiAgICAgICAgZGVsZXRlIGVsLmRvbTdFdmVudERhdGE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoY2FsbGJhY2spIHtcbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgIGRvbS5vZmYoJ3RyYW5zaXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgZG9tLm9uKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBhbmltYXRpb25FbmQoY2FsbGJhY2spIHtcbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgIGRvbS5vZmYoJ2FuaW1hdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBkb20ub24oJ2FuaW1hdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gd2lkdGgoKSB7XG4gIHZhciB3aW5kb3cgPSBzc3JXaW5kb3cuZ2V0V2luZG93KCk7XG5cbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnd2lkdGgnKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gb3V0ZXJXaWR0aChpbmNsdWRlTWFyZ2lucykge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICB2YXIgX3N0eWxlcyA9IHRoaXMuc3R5bGVzKCk7XG5cbiAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdChfc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpKSArIHBhcnNlRmxvYXQoX3N0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tbGVmdCcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoZWlnaHQoKSB7XG4gIHZhciB3aW5kb3cgPSBzc3JXaW5kb3cuZ2V0V2luZG93KCk7XG5cbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRlckhlaWdodChpbmNsdWRlTWFyZ2lucykge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICB2YXIgX3N0eWxlczIgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHZhciB3aW5kb3cgPSBzc3JXaW5kb3cuZ2V0V2luZG93KCk7XG4gICAgdmFyIGRvY3VtZW50ID0gc3NyV2luZG93LmdldERvY3VtZW50KCk7XG4gICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICB2YXIgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciBjbGllbnRUb3AgPSBlbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICB2YXIgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgdmFyIHNjcm9sbFRvcCA9IGVsID09PSB3aW5kb3cgPyB3aW5kb3cuc2Nyb2xsWSA6IGVsLnNjcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsID09PSB3aW5kb3cgPyB3aW5kb3cuc2Nyb2xsWCA6IGVsLnNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzaG93KCkge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgLy8gU3RpbGwgbm90IHZpc2libGVcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMoKSB7XG4gIHZhciB3aW5kb3cgPSBzc3JXaW5kb3cuZ2V0V2luZG93KCk7XG4gIGlmICh0aGlzWzBdKSByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpc1swXSwgbnVsbCk7XG4gIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gY3NzKHByb3BzLCB2YWx1ZSkge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuICB2YXIgaTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyAuY3NzKCd3aWR0aCcpXG4gICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAuY3NzKHsgd2lkdGg6ICcxMDBweCcgfSlcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAodmFyIF9wcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXS5zdHlsZVtfcHJvcF0gPSBwcm9wc1tfcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIC5jc3MoJ3dpZHRoJywgJzEwMHB4JylcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wc10gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gIGlmICghY2FsbGJhY2spIHJldHVybiB0aGlzO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgIGNhbGxiYWNrLmFwcGx5KGVsLCBbZWwsIGluZGV4XSk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBhcnJheUZpbHRlcih0aGlzLCBjYWxsYmFjayk7XG4gIHJldHVybiAkKHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGh0bWwoaHRtbCkge1xuICBpZiAodHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmlubmVySFRNTCA6IG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdGV4dCh0ZXh0KSB7XG4gIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdGhpc1swXSA/IHRoaXNbMF0udGV4dENvbnRlbnQudHJpbSgpIDogbnVsbDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGlzKHNlbGVjdG9yKSB7XG4gIHZhciB3aW5kb3cgPSBzc3JXaW5kb3cuZ2V0V2luZG93KCk7XG4gIHZhciBkb2N1bWVudCA9IHNzcldpbmRvdy5nZXREb2N1bWVudCgpO1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICB2YXIgY29tcGFyZVdpdGg7XG4gIHZhciBpO1xuICBpZiAoIWVsIHx8IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgIGlmIChlbC5tYXRjaGVzKSByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbXBhcmVXaXRoID0gJChzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICByZXR1cm4gZWwgPT09IGRvY3VtZW50O1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gZWwgPT09IHdpbmRvdztcbiAgfVxuXG4gIGlmIChzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICBjb21wYXJlV2l0aCA9IHNlbGVjdG9yLm5vZGVUeXBlID8gW3NlbGVjdG9yXSA6IHNlbGVjdG9yO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICB2YXIgY2hpbGQgPSB0aGlzWzBdO1xuICB2YXIgaTtcblxuICBpZiAoY2hpbGQpIHtcbiAgICBpID0gMDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICB3aGlsZSAoKGNoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nKSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSBpICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGk7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBlcShpbmRleCkge1xuICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXM7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHZhciByZXR1cm5JbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgIGlmIChyZXR1cm5JbmRleCA8IDApIHJldHVybiAkKFtdKTtcbiAgICByZXR1cm4gJChbdGhpc1tyZXR1cm5JbmRleF1dKTtcbiAgfVxuXG4gIHJldHVybiAkKFt0aGlzW2luZGV4XV0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmQoKSB7XG4gIHZhciBuZXdDaGlsZDtcbiAgdmFyIGRvY3VtZW50ID0gc3NyV2luZG93LmdldERvY3VtZW50KCk7XG5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBhcmd1bWVudHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICBuZXdDaGlsZCA9IGsgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gayA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1trXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgICB3aGlsZSAodGVtcERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZCh0ZW1wRGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZFtqXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgJChwYXJlbnQpLmFwcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmQobmV3Q2hpbGQpIHtcbiAgdmFyIGRvY3VtZW50ID0gc3NyV2luZG93LmdldERvY3VtZW50KCk7XG4gIHZhciBpO1xuICB2YXIgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkucHJlcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShzZWxlY3Rvcikge1xuICB2YXIgYmVmb3JlID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJlZm9yZVswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBiZWZvcmVbMF0pO1xuICAgIH0gZWxzZSBpZiAoYmVmb3JlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmVmb3JlLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGJlZm9yZVtqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYmVmb3JlW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoc2VsZWN0b3IpIHtcbiAgdmFyIGFmdGVyID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICB2YXIgbmV4dEVscyA9IFtdO1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gJChbXSk7XG5cbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIHZhciBfbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChfbmV4dCkuaXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2goX25leHQpO1xuICAgIH0gZWxzZSBuZXh0RWxzLnB1c2goX25leHQpO1xuXG4gICAgZWwgPSBfbmV4dDtcbiAgfVxuXG4gIHJldHVybiAkKG5leHRFbHMpO1xufVxuXG5mdW5jdGlvbiBwcmV2KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAkKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gJChbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgcmV0dXJuICQoW10pO1xufVxuXG5mdW5jdGlvbiBwcmV2QWxsKHNlbGVjdG9yKSB7XG4gIHZhciBwcmV2RWxzID0gW107XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIHZhciBfcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCQoX3ByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKF9wcmV2KTtcbiAgICB9IGVsc2UgcHJldkVscy5wdXNoKF9wcmV2KTtcblxuICAgIGVsID0gX3ByZXY7XG4gIH1cblxuICByZXR1cm4gJChwcmV2RWxzKTtcbn1cblxuZnVuY3Rpb24gc2libGluZ3Moc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMubmV4dEFsbChzZWxlY3RvcikuYWRkKHRoaXMucHJldkFsbChzZWxlY3RvcikpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJCh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChwYXJlbnRzKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50cyhzZWxlY3Rvcikge1xuICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIF9wYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHdoaWxlIChfcGFyZW50KSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudCkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQocGFyZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgdmFyIGNsb3Nlc3QgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoIWNsb3Nlc3QuaXMoc2VsZWN0b3IpKSB7XG4gICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gIH1cblxuICByZXR1cm4gY2xvc2VzdDtcbn1cblxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBmb3VuZCA9IHRoaXNbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvdW5kLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZm91bmRbal0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGZvdW5kRWxlbWVudHMpO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihzZWxlY3Rvcikge1xuICB2YXIgY2hpbGRyZW4gPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZHJlbjtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlKSB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGV0YWNoKCkge1xuICByZXR1cm4gdGhpcy5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gYWRkKCkge1xuICB2YXIgZG9tID0gdGhpcztcbiAgdmFyIGk7XG4gIHZhciBqO1xuXG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGVscyA9IG5ldyBBcnJheShfbGVuMTApLCBfa2V5MTAgPSAwOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgZWxzW19rZXkxMF0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgdG9BZGQgPSAkKGVsc1tpXSk7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGRvbS5wdXNoKHRvQWRkW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwuY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gIHZhciB3aW5kb3cgPSBzc3JXaW5kb3cuZ2V0V2luZG93KCk7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBsZWZ0ID0gYXJnc1swXSxcbiAgICAgIHRvcCA9IGFyZ3NbMV0sXG4gICAgICBkdXJhdGlvbiA9IGFyZ3NbMl0sXG4gICAgICBlYXNpbmcgPSBhcmdzWzNdLFxuICAgICAgY2FsbGJhY2sgPSBhcmdzWzRdO1xuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gNCAmJiB0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBlYXNpbmc7XG4gICAgbGVmdCA9IGFyZ3NbMF07XG4gICAgdG9wID0gYXJnc1sxXTtcbiAgICBkdXJhdGlvbiA9IGFyZ3NbMl07XG4gICAgY2FsbGJhY2sgPSBhcmdzWzNdO1xuICAgIGVhc2luZyA9IGFyZ3NbNF07XG4gIH1cblxuICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ3VuZGVmaW5lZCcpIGVhc2luZyA9ICdzd2luZyc7XG4gIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50VG9wO1xuICAgIHZhciBjdXJyZW50TGVmdDtcbiAgICB2YXIgbWF4VG9wO1xuICAgIHZhciBtYXhMZWZ0O1xuICAgIHZhciBuZXdUb3A7XG4gICAgdmFyIG5ld0xlZnQ7XG4gICAgdmFyIHNjcm9sbFRvcDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgdmFyIHNjcm9sbExlZnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHZhciBhbmltYXRlVG9wID0gdG9wID4gMCB8fCB0b3AgPT09IDA7XG4gICAgdmFyIGFuaW1hdGVMZWZ0ID0gbGVmdCA+IDAgfHwgbGVmdCA9PT0gMDtcblxuICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZWFzaW5nID0gJ3N3aW5nJztcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgY3VycmVudFRvcCA9IGVsLnNjcm9sbFRvcDtcblxuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVMZWZ0KSB7XG4gICAgICBjdXJyZW50TGVmdCA9IGVsLnNjcm9sbExlZnQ7XG5cbiAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkdXJhdGlvbikgcmV0dXJuO1xuXG4gICAgaWYgKGFuaW1hdGVUb3ApIHtcbiAgICAgIG1heFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld1RvcCA9IE1hdGgubWF4KE1hdGgubWluKHRvcCwgbWF4VG9wKSwgMCk7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVMZWZ0KSB7XG4gICAgICBtYXhMZWZ0ID0gZWwuc2Nyb2xsV2lkdGggLSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgIG5ld0xlZnQgPSBNYXRoLm1heChNYXRoLm1pbihsZWZ0LCBtYXhMZWZ0KSwgMCk7XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wID09PSBjdXJyZW50VG9wKSBhbmltYXRlVG9wID0gZmFsc2U7XG4gICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPT09IGN1cnJlbnRMZWZ0KSBhbmltYXRlTGVmdCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKHRpbWUpIHtcbiAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICB2YXIgZWFzZVByb2dyZXNzID0gZWFzaW5nID09PSAnbGluZWFyJyA/IHByb2dyZXNzIDogMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgICB2YXIgZG9uZTtcbiAgICAgIGlmIChhbmltYXRlVG9wKSBzY3JvbGxUb3AgPSBjdXJyZW50VG9wICsgZWFzZVByb2dyZXNzICogKG5ld1RvcCAtIGN1cnJlbnRUb3ApO1xuICAgICAgaWYgKGFuaW1hdGVMZWZ0KSBzY3JvbGxMZWZ0ID0gY3VycmVudExlZnQgKyBlYXNlUHJvZ3Jlc3MgKiAobmV3TGVmdCAtIGN1cnJlbnRMZWZ0KTtcblxuICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wID4gY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPj0gbmV3VG9wKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG5ld1RvcDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA8IGN1cnJlbnRUb3AgJiYgc2Nyb2xsVG9wIDw9IG5ld1RvcCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBuZXdUb3A7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0ZUxlZnQgJiYgbmV3TGVmdCA+IGN1cnJlbnRMZWZ0ICYmIHNjcm9sbExlZnQgPj0gbmV3TGVmdCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbmV3TGVmdDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0IDwgY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA8PSBuZXdMZWZ0KSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlVG9wKSBlbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIGVsLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfSk7XG59IC8vIHNjcm9sbFRvcCh0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG5cblxuZnVuY3Rpb24gc2Nyb2xsVG9wKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICB2YXIgdG9wID0gYXJnc1swXSxcbiAgICAgIGR1cmF0aW9uID0gYXJnc1sxXSxcbiAgICAgIGVhc2luZyA9IGFyZ3NbMl0sXG4gICAgICBjYWxsYmFjayA9IGFyZ3NbM107XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0b3AgPSBhcmdzWzBdO1xuICAgIGR1cmF0aW9uID0gYXJnc1sxXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbMl07XG4gICAgZWFzaW5nID0gYXJnc1szXTtcbiAgfVxuXG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZG9tLnNjcm9sbFRvKHVuZGVmaW5lZCwgdG9wLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbExlZnQoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHZhciBsZWZ0ID0gYXJnc1swXSxcbiAgICAgIGR1cmF0aW9uID0gYXJnc1sxXSxcbiAgICAgIGVhc2luZyA9IGFyZ3NbMl0sXG4gICAgICBjYWxsYmFjayA9IGFyZ3NbM107XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsZWZ0ID0gYXJnc1swXTtcbiAgICBkdXJhdGlvbiA9IGFyZ3NbMV07XG4gICAgY2FsbGJhY2sgPSBhcmdzWzJdO1xuICAgIGVhc2luZyA9IGFyZ3NbM107XG4gIH1cblxuICB2YXIgZG9tID0gdGhpcztcblxuICBpZiAodHlwZW9mIGxlZnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPiAwKSByZXR1cm4gZG9tWzBdLnNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZG9tLnNjcm9sbFRvKGxlZnQsIHVuZGVmaW5lZCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlKGluaXRpYWxQcm9wcywgaW5pdGlhbFBhcmFtcykge1xuICB2YXIgd2luZG93ID0gc3NyV2luZG93LmdldFdpbmRvdygpO1xuICB2YXIgZWxzID0gdGhpcztcbiAgdmFyIGEgPSB7XG4gICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxQcm9wcyksXG4gICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBlYXNpbmc6ICdzd2luZycgLy8gb3IgJ2xpbmVhcidcblxuICAgICAgLyogQ2FsbGJhY2tzXG4gICAgICBiZWdpbihlbGVtZW50cylcbiAgICAgIGNvbXBsZXRlKGVsZW1lbnRzKVxuICAgICAgcHJvZ3Jlc3MoZWxlbWVudHMsIGNvbXBsZXRlLCByZW1haW5pbmcsIHN0YXJ0LCB0d2VlblZhbHVlKVxuICAgICAgKi9cblxuICAgIH0sIGluaXRpYWxQYXJhbXMpLFxuICAgIGVsZW1lbnRzOiBlbHMsXG4gICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICBxdWU6IFtdLFxuICAgIGVhc2luZ1Byb2dyZXNzOiBmdW5jdGlvbiBlYXNpbmdQcm9ncmVzcyhlYXNpbmcsIHByb2dyZXNzKSB7XG4gICAgICBpZiAoZWFzaW5nID09PSAnc3dpbmcnKSB7XG4gICAgICAgIHJldHVybiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAoYS5mcmFtZUlkKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhLmZyYW1lSWQpO1xuICAgICAgfVxuXG4gICAgICBhLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgYS5lbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVsO1xuICAgICAgICBkZWxldGUgZWxlbWVudC5kb203QW5pbWF0ZUluc3RhbmNlO1xuICAgICAgfSk7XG4gICAgICBhLnF1ZSA9IFtdO1xuICAgIH0sXG4gICAgZG9uZTogZnVuY3Rpb24gZG9uZShjb21wbGV0ZSkge1xuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGNvbXBsZXRlKSBjb21wbGV0ZShlbHMpO1xuXG4gICAgICBpZiAoYS5xdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgcXVlID0gYS5xdWUuc2hpZnQoKTtcbiAgICAgICAgYS5hbmltYXRlKHF1ZVswXSwgcXVlWzFdKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUocHJvcHMsIHBhcmFtcykge1xuICAgICAgaWYgKGEuYW5pbWF0aW5nKSB7XG4gICAgICAgIGEucXVlLnB1c2goW3Byb3BzLCBwYXJhbXNdKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IFtdOyAvLyBEZWZpbmUgJiBDYWNoZSBJbml0aWFscyAmIFVuaXRzXG5cbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBpbml0aWFsRnVsbFZhbHVlO1xuICAgICAgICB2YXIgaW5pdGlhbFZhbHVlO1xuICAgICAgICB2YXIgdW5pdDtcbiAgICAgICAgdmFyIGZpbmFsVmFsdWU7XG4gICAgICAgIHZhciBmaW5hbEZ1bGxWYWx1ZTtcbiAgICAgICAgaWYgKCFlbC5kb203QW5pbWF0ZUluc3RhbmNlKSBhLmVsZW1lbnRzW2luZGV4XS5kb203QW5pbWF0ZUluc3RhbmNlID0gYTtcbiAgICAgICAgZWxlbWVudHNbaW5kZXhdID0ge1xuICAgICAgICAgIGNvbnRhaW5lcjogZWxcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICBpbml0aWFsRnVsbFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCkucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgaW5pdGlhbFZhbHVlID0gcGFyc2VGbG9hdChpbml0aWFsRnVsbFZhbHVlKTtcbiAgICAgICAgICB1bml0ID0gaW5pdGlhbEZ1bGxWYWx1ZS5yZXBsYWNlKGluaXRpYWxWYWx1ZSwgJycpO1xuICAgICAgICAgIGZpbmFsVmFsdWUgPSBwYXJzZUZsb2F0KHByb3BzW3Byb3BdKTtcbiAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZSA9IHByb3BzW3Byb3BdICsgdW5pdDtcbiAgICAgICAgICBlbGVtZW50c1tpbmRleF1bcHJvcF0gPSB7XG4gICAgICAgICAgICBpbml0aWFsRnVsbFZhbHVlOiBpbml0aWFsRnVsbFZhbHVlLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICB1bml0OiB1bml0LFxuICAgICAgICAgICAgZmluYWxWYWx1ZTogZmluYWxWYWx1ZSxcbiAgICAgICAgICAgIGZpbmFsRnVsbFZhbHVlOiBmaW5hbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogaW5pdGlhbFZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgdmFyIHRpbWU7XG4gICAgICB2YXIgZWxlbWVudHNEb25lID0gMDtcbiAgICAgIHZhciBwcm9wc0RvbmUgPSAwO1xuICAgICAgdmFyIGRvbmU7XG4gICAgICB2YXIgYmVnYW4gPSBmYWxzZTtcbiAgICAgIGEuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBwcm9ncmVzcztcbiAgICAgICAgdmFyIGVhc2VQcm9ncmVzczsgLy8gbGV0IGVsO1xuXG4gICAgICAgIGlmICghYmVnYW4pIHtcbiAgICAgICAgICBiZWdhbiA9IHRydWU7XG4gICAgICAgICAgaWYgKHBhcmFtcy5iZWdpbikgcGFyYW1zLmJlZ2luKGVscyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBwYXJhbXMucHJvZ3Jlc3MoZWxzLCBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBwYXJhbXMuZHVyYXRpb24sIDEpLCAwKSwgc3RhcnRUaW1lICsgcGFyYW1zLmR1cmF0aW9uIC0gdGltZSA8IDAgPyAwIDogc3RhcnRUaW1lICsgcGFyYW1zLmR1cmF0aW9uIC0gdGltZSwgc3RhcnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgICAgICAgIGlmIChkb25lIHx8IGVsLmRvbmUpIHJldHVybjtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgaWYgKGRvbmUgfHwgZWwuZG9uZSkgcmV0dXJuO1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBwYXJhbXMuZHVyYXRpb24sIDEpLCAwKTtcbiAgICAgICAgICAgIGVhc2VQcm9ncmVzcyA9IGEuZWFzaW5nUHJvZ3Jlc3MocGFyYW1zLmVhc2luZywgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgdmFyIF9lbCRwcm9wID0gZWxbcHJvcF0sXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gX2VsJHByb3AuaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBfZWwkcHJvcC5maW5hbFZhbHVlLFxuICAgICAgICAgICAgICAgIHVuaXQgPSBfZWwkcHJvcC51bml0O1xuICAgICAgICAgICAgZWxbcHJvcF0uY3VycmVudFZhbHVlID0gaW5pdGlhbFZhbHVlICsgZWFzZVByb2dyZXNzICogKGZpbmFsVmFsdWUgLSBpbml0aWFsVmFsdWUpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGVsW3Byb3BdLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKGZpbmFsVmFsdWUgPiBpbml0aWFsVmFsdWUgJiYgY3VycmVudFZhbHVlID49IGZpbmFsVmFsdWUgfHwgZmluYWxWYWx1ZSA8IGluaXRpYWxWYWx1ZSAmJiBjdXJyZW50VmFsdWUgPD0gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICBlbC5jb250YWluZXIuc3R5bGVbcHJvcF0gPSBmaW5hbFZhbHVlICsgdW5pdDtcbiAgICAgICAgICAgICAgcHJvcHNEb25lICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BzRG9uZSA9PT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGVsLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzRG9uZSArPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzRG9uZSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgYS5kb25lKHBhcmFtcy5jb21wbGV0ZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gY3VycmVudFZhbHVlICsgdW5pdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47IC8vIFRoZW4gY2FsbFxuXG4gICAgICAgIGEuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgIH1cblxuICAgICAgYS5mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9O1xuXG4gIGlmIChhLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBlbHM7XG4gIH1cblxuICB2YXIgYW5pbWF0ZUluc3RhbmNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2UpIHtcbiAgICAgIGFuaW1hdGVJbnN0YW5jZSA9IGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICB9IGVsc2UgYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlID0gYTtcbiAgfVxuXG4gIGlmICghYW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgYW5pbWF0ZUluc3RhbmNlID0gYTtcbiAgfVxuXG4gIGlmIChpbml0aWFsUHJvcHMgPT09ICdzdG9wJykge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5zdG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgYW5pbWF0ZUluc3RhbmNlLmFuaW1hdGUoYS5wcm9wcywgYS5wYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIGVscztcbn1cblxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgdmFyIGVscyA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZWxzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2UpIHtcbiAgICAgIGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlLnN0b3AoKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIG5vVHJpZ2dlciA9ICdyZXNpemUgc2Nyb2xsJy5zcGxpdCgnICcpO1xuXG5mdW5jdGlvbiBzaG9ydGN1dChuYW1lKSB7XG4gIGZ1bmN0aW9uIGV2ZW50SGFuZGxlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChub1RyaWdnZXIuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgICBpZiAobmFtZSBpbiB0aGlzW2ldKSB0aGlzW2ldW25hbWVdKCk7ZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXNbaV0pLnRyaWdnZXIobmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm9uLmFwcGx5KHRoaXMsIFtuYW1lXS5jb25jYXQoYXJncykpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50SGFuZGxlcjtcbn1cblxudmFyIGNsaWNrID0gc2hvcnRjdXQoJ2NsaWNrJyk7XG52YXIgYmx1ciA9IHNob3J0Y3V0KCdibHVyJyk7XG52YXIgZm9jdXMgPSBzaG9ydGN1dCgnZm9jdXMnKTtcbnZhciBmb2N1c2luID0gc2hvcnRjdXQoJ2ZvY3VzaW4nKTtcbnZhciBmb2N1c291dCA9IHNob3J0Y3V0KCdmb2N1c291dCcpO1xudmFyIGtleXVwID0gc2hvcnRjdXQoJ2tleXVwJyk7XG52YXIga2V5ZG93biA9IHNob3J0Y3V0KCdrZXlkb3duJyk7XG52YXIga2V5cHJlc3MgPSBzaG9ydGN1dCgna2V5cHJlc3MnKTtcbnZhciBzdWJtaXQgPSBzaG9ydGN1dCgnc3VibWl0Jyk7XG52YXIgY2hhbmdlID0gc2hvcnRjdXQoJ2NoYW5nZScpO1xudmFyIG1vdXNlZG93biA9IHNob3J0Y3V0KCdtb3VzZWRvd24nKTtcbnZhciBtb3VzZW1vdmUgPSBzaG9ydGN1dCgnbW91c2Vtb3ZlJyk7XG52YXIgbW91c2V1cCA9IHNob3J0Y3V0KCdtb3VzZXVwJyk7XG52YXIgbW91c2VlbnRlciA9IHNob3J0Y3V0KCdtb3VzZWVudGVyJyk7XG52YXIgbW91c2VsZWF2ZSA9IHNob3J0Y3V0KCdtb3VzZWxlYXZlJyk7XG52YXIgbW91c2VvdXQgPSBzaG9ydGN1dCgnbW91c2VvdXQnKTtcbnZhciBtb3VzZW92ZXIgPSBzaG9ydGN1dCgnbW91c2VvdmVyJyk7XG52YXIgdG91Y2hzdGFydCA9IHNob3J0Y3V0KCd0b3VjaHN0YXJ0Jyk7XG52YXIgdG91Y2hlbmQgPSBzaG9ydGN1dCgndG91Y2hlbmQnKTtcbnZhciB0b3VjaG1vdmUgPSBzaG9ydGN1dCgndG91Y2htb3ZlJyk7XG52YXIgcmVzaXplID0gc2hvcnRjdXQoJ3Jlc2l6ZScpO1xudmFyIHNjcm9sbCA9IHNob3J0Y3V0KCdzY3JvbGwnKTtcblxuZXhwb3J0cy4kID0gJDtcbmV4cG9ydHMuYWRkID0gYWRkO1xuZXhwb3J0cy5hZGRDbGFzcyA9IGFkZENsYXNzO1xuZXhwb3J0cy5hbmltYXRlID0gYW5pbWF0ZTtcbmV4cG9ydHMuYW5pbWF0aW9uRW5kID0gYW5pbWF0aW9uRW5kO1xuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG5leHBvcnRzLmFwcGVuZFRvID0gYXBwZW5kVG87XG5leHBvcnRzLmF0dHIgPSBhdHRyO1xuZXhwb3J0cy5ibHVyID0gYmx1cjtcbmV4cG9ydHMuY2hhbmdlID0gY2hhbmdlO1xuZXhwb3J0cy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuZXhwb3J0cy5jbGljayA9IGNsaWNrO1xuZXhwb3J0cy5jbG9zZXN0ID0gY2xvc2VzdDtcbmV4cG9ydHMuY3NzID0gY3NzO1xuZXhwb3J0cy5kYXRhID0gZGF0YTtcbmV4cG9ydHMuZGF0YXNldCA9IGRhdGFzZXQ7XG5leHBvcnRzLmRlZmF1bHQgPSAkO1xuZXhwb3J0cy5kZXRhY2ggPSBkZXRhY2g7XG5leHBvcnRzLmVhY2ggPSBlYWNoO1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5lcSA9IGVxO1xuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG5leHBvcnRzLmZpbmQgPSBmaW5kO1xuZXhwb3J0cy5mb2N1cyA9IGZvY3VzO1xuZXhwb3J0cy5mb2N1c2luID0gZm9jdXNpbjtcbmV4cG9ydHMuZm9jdXNvdXQgPSBmb2N1c291dDtcbmV4cG9ydHMuaGFzQ2xhc3MgPSBoYXNDbGFzcztcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5oaWRlID0gaGlkZTtcbmV4cG9ydHMuaHRtbCA9IGh0bWw7XG5leHBvcnRzLmluZGV4ID0gaW5kZXg7XG5leHBvcnRzLmluc2VydEFmdGVyID0gaW5zZXJ0QWZ0ZXI7XG5leHBvcnRzLmluc2VydEJlZm9yZSA9IGluc2VydEJlZm9yZTtcbmV4cG9ydHMuaXMgPSBpcztcbmV4cG9ydHMua2V5ZG93biA9IGtleWRvd247XG5leHBvcnRzLmtleXByZXNzID0ga2V5cHJlc3M7XG5leHBvcnRzLmtleXVwID0ga2V5dXA7XG5leHBvcnRzLm1vdXNlZG93biA9IG1vdXNlZG93bjtcbmV4cG9ydHMubW91c2VlbnRlciA9IG1vdXNlZW50ZXI7XG5leHBvcnRzLm1vdXNlbGVhdmUgPSBtb3VzZWxlYXZlO1xuZXhwb3J0cy5tb3VzZW1vdmUgPSBtb3VzZW1vdmU7XG5leHBvcnRzLm1vdXNlb3V0ID0gbW91c2VvdXQ7XG5leHBvcnRzLm1vdXNlb3ZlciA9IG1vdXNlb3ZlcjtcbmV4cG9ydHMubW91c2V1cCA9IG1vdXNldXA7XG5leHBvcnRzLm5leHQgPSBuZXh0O1xuZXhwb3J0cy5uZXh0QWxsID0gbmV4dEFsbDtcbmV4cG9ydHMub2ZmID0gb2ZmO1xuZXhwb3J0cy5vZmZzZXQgPSBvZmZzZXQ7XG5leHBvcnRzLm9uID0gb247XG5leHBvcnRzLm9uY2UgPSBvbmNlO1xuZXhwb3J0cy5vdXRlckhlaWdodCA9IG91dGVySGVpZ2h0O1xuZXhwb3J0cy5vdXRlcldpZHRoID0gb3V0ZXJXaWR0aDtcbmV4cG9ydHMucGFyZW50ID0gcGFyZW50O1xuZXhwb3J0cy5wYXJlbnRzID0gcGFyZW50cztcbmV4cG9ydHMucHJlcGVuZCA9IHByZXBlbmQ7XG5leHBvcnRzLnByZXBlbmRUbyA9IHByZXBlbmRUbztcbmV4cG9ydHMucHJldiA9IHByZXY7XG5leHBvcnRzLnByZXZBbGwgPSBwcmV2QWxsO1xuZXhwb3J0cy5wcm9wID0gcHJvcDtcbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuZXhwb3J0cy5yZW1vdmVBdHRyID0gcmVtb3ZlQXR0cjtcbmV4cG9ydHMucmVtb3ZlQ2xhc3MgPSByZW1vdmVDbGFzcztcbmV4cG9ydHMucmVtb3ZlRGF0YSA9IHJlbW92ZURhdGE7XG5leHBvcnRzLnJlc2l6ZSA9IHJlc2l6ZTtcbmV4cG9ydHMuc2Nyb2xsID0gc2Nyb2xsO1xuZXhwb3J0cy5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbmV4cG9ydHMuc2Nyb2xsVG8gPSBzY3JvbGxUbztcbmV4cG9ydHMuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuZXhwb3J0cy5zaG93ID0gc2hvdztcbmV4cG9ydHMuc2libGluZ3MgPSBzaWJsaW5ncztcbmV4cG9ydHMuc3RvcCA9IHN0b3A7XG5leHBvcnRzLnN0eWxlcyA9IHN0eWxlcztcbmV4cG9ydHMuc3VibWl0ID0gc3VibWl0O1xuZXhwb3J0cy50ZXh0ID0gdGV4dDtcbmV4cG9ydHMudG9nZ2xlQ2xhc3MgPSB0b2dnbGVDbGFzcztcbmV4cG9ydHMudG91Y2hlbmQgPSB0b3VjaGVuZDtcbmV4cG9ydHMudG91Y2htb3ZlID0gdG91Y2htb3ZlO1xuZXhwb3J0cy50b3VjaHN0YXJ0ID0gdG91Y2hzdGFydDtcbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuZXhwb3J0cy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbmV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQ7XG5leHBvcnRzLnRyaWdnZXIgPSB0cmlnZ2VyO1xuZXhwb3J0cy52YWwgPSB2YWw7XG5leHBvcnRzLnZhbHVlID0gdmFsdWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG4iLCIvKipcbiAqIFNTUiBXaW5kb3cgMy4wLjBcbiAqIEJldHRlciBoYW5kbGluZyBmb3Igd2luZG93IG9iamVjdCBpbiBTU1IgZW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICpcbiAqIENvcHlyaWdodCAyMDIwLCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBOb3ZlbWJlciA5LCAyMDIwXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5zc3JXaW5kb3cgPSB7fSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICAgICAgcmV0dXJuIChvYmogIT09IG51bGwgJiZcbiAgICAgICAgICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAnY29uc3RydWN0b3InIGluIG9iaiAmJlxuICAgICAgICAgICAgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IHt9OyB9XG4gICAgICAgIGlmIChzcmMgPT09IHZvaWQgMCkgeyBzcmMgPSB7fTsgfVxuICAgICAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNyY1trZXldKSAmJlxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNyY1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzc3JEb2N1bWVudCA9IHtcbiAgICAgICAgYm9keToge30sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBhY3RpdmVFbGVtZW50OiB7XG4gICAgICAgICAgICBibHVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICBub2RlTmFtZTogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0sXG4gICAgICAgIGdldEVsZW1lbnRCeUlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5pdEV2ZW50OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgICAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVFbGVtZW50TlM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgaW1wb3J0Tm9kZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICAgICAgaHJlZjogJycsXG4gICAgICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldERvY3VtZW50KCkge1xuICAgICAgICB2YXIgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDoge307XG4gICAgICAgIGV4dGVuZChkb2MsIHNzckRvY3VtZW50KTtcbiAgICAgICAgcmV0dXJuIGRvYztcbiAgICB9XG5cbiAgICB2YXIgc3NyV2luZG93ID0ge1xuICAgICAgICBkb2N1bWVudDogc3NyRG9jdW1lbnQsXG4gICAgICAgIG5hdmlnYXRvcjoge1xuICAgICAgICAgICAgdXNlckFnZW50OiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGhhc2g6ICcnLFxuICAgICAgICAgICAgaG9zdDogJycsXG4gICAgICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgICAgICBwYXRobmFtZTogJycsXG4gICAgICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBoaXN0b3J5OiB7XG4gICAgICAgICAgICByZXBsYWNlU3RhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgZ286IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgICAgIGJhY2s6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgfSxcbiAgICAgICAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBJbWFnZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBEYXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIHNjcmVlbjoge30sXG4gICAgICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgY2xlYXJUaW1lb3V0OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIG1hdGNoTWVkaWE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgICAgICAgdmFyIHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4gICAgICAgIGV4dGVuZCh3aW4sIHNzcldpbmRvdyk7XG4gICAgICAgIHJldHVybiB3aW47XG4gICAgfVxuXG4gICAgZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG4gICAgZXhwb3J0cy5nZXREb2N1bWVudCA9IGdldERvY3VtZW50O1xuICAgIGV4cG9ydHMuZ2V0V2luZG93ID0gZ2V0V2luZG93O1xuICAgIGV4cG9ydHMuc3NyRG9jdW1lbnQgPSBzc3JEb2N1bWVudDtcbiAgICBleHBvcnRzLnNzcldpbmRvdyA9IHNzcldpbmRvdztcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zc3Itd2luZG93LnVtZC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBBMTF5ID0ge1xuICBnZXRSYW5kb21OdW1iZXI6IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihzaXplKSB7XG4gICAgaWYgKHNpemUgPT09IHZvaWQgMCkge1xuICAgICAgc2l6ZSA9IDE2O1xuICAgIH1cblxuICAgIHZhciByYW5kb21DaGFyID0gZnVuY3Rpb24gcmFuZG9tQ2hhcigpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKDE2ICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMTYpO1xuICAgIH07XG5cbiAgICByZXR1cm4gJ3gnLnJlcGVhdChzaXplKS5yZXBsYWNlKC94L2csIHJhbmRvbUNoYXIpO1xuICB9LFxuICBtYWtlRWxGb2N1c2FibGU6IGZ1bmN0aW9uIG1ha2VFbEZvY3VzYWJsZSgkZWwpIHtcbiAgICAkZWwuYXR0cigndGFiSW5kZXgnLCAnMCcpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIG1ha2VFbE5vdEZvY3VzYWJsZTogZnVuY3Rpb24gbWFrZUVsTm90Rm9jdXNhYmxlKCRlbCkge1xuICAgICRlbC5hdHRyKCd0YWJJbmRleCcsICctMScpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGFkZEVsUm9sZTogZnVuY3Rpb24gYWRkRWxSb2xlKCRlbCwgcm9sZSkge1xuICAgICRlbC5hdHRyKCdyb2xlJywgcm9sZSk7XG4gICAgcmV0dXJuICRlbDtcbiAgfSxcbiAgYWRkRWxSb2xlRGVzY3JpcHRpb246IGZ1bmN0aW9uIGFkZEVsUm9sZURlc2NyaXB0aW9uKCRlbCwgZGVzY3JpcHRpb24pIHtcbiAgICAkZWwuYXR0cignYXJpYS1yb2xlZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuICRlbDtcbiAgfSxcbiAgYWRkRWxDb250cm9sczogZnVuY3Rpb24gYWRkRWxDb250cm9scygkZWwsIGNvbnRyb2xzKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtY29udHJvbHMnLCBjb250cm9scyk7XG4gICAgcmV0dXJuICRlbDtcbiAgfSxcbiAgYWRkRWxMYWJlbDogZnVuY3Rpb24gYWRkRWxMYWJlbCgkZWwsIGxhYmVsKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgcmV0dXJuICRlbDtcbiAgfSxcbiAgYWRkRWxJZDogZnVuY3Rpb24gYWRkRWxJZCgkZWwsIGlkKSB7XG4gICAgJGVsLmF0dHIoJ2lkJywgaWQpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGFkZEVsTGl2ZTogZnVuY3Rpb24gYWRkRWxMaXZlKCRlbCwgbGl2ZSkge1xuICAgICRlbC5hdHRyKCdhcmlhLWxpdmUnLCBsaXZlKTtcbiAgICByZXR1cm4gJGVsO1xuICB9LFxuICBkaXNhYmxlRWw6IGZ1bmN0aW9uIGRpc2FibGVFbCgkZWwpIHtcbiAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGVuYWJsZUVsOiBmdW5jdGlvbiBlbmFibGVFbCgkZWwpIHtcbiAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgICByZXR1cm4gJGVsO1xuICB9LFxuICBvbkVudGVyT3JTcGFjZUtleTogZnVuY3Rpb24gb25FbnRlck9yU3BhY2VLZXkoZSkge1xuICAgIGlmIChlLmtleUNvZGUgIT09IDEzICYmIGUua2V5Q29kZSAhPT0gMzIpIHJldHVybjtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIHZhciAkdGFyZ2V0RWwgPSAoMCwgX2RvbS5kZWZhdWx0KShlLnRhcmdldCk7XG5cbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbCAmJiAkdGFyZ2V0RWwuaXMoc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbCkpIHtcbiAgICAgIGlmICghKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSkge1xuICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgc3dpcGVyLmExMXkubm90aWZ5KHBhcmFtcy5sYXN0U2xpZGVNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm5vdGlmeShwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwgJiYgJHRhcmdldEVsLmlzKHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwpKSB7XG4gICAgICBpZiAoIShzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm5vdGlmeShwYXJhbXMuZmlyc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmExMXkubm90aWZ5KHBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgJHRhcmdldEVsLmlzKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzLnJlcGxhY2UoLyAvZywgJy4nKSkpIHtcbiAgICAgICR0YXJnZXRFbFswXS5jbGljaygpO1xuICAgIH1cbiAgfSxcbiAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkobWVzc2FnZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBub3RpZmljYXRpb24gPSBzd2lwZXIuYTExeS5saXZlUmVnaW9uO1xuICAgIGlmIChub3RpZmljYXRpb24ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgbm90aWZpY2F0aW9uLmh0bWwoJycpO1xuICAgIG5vdGlmaWNhdGlvbi5odG1sKG1lc3NhZ2UpO1xuICB9LFxuICB1cGRhdGVOYXZpZ2F0aW9uOiBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3AgfHwgIXN3aXBlci5uYXZpZ2F0aW9uKSByZXR1cm47XG4gICAgdmFyIF9zd2lwZXIkbmF2aWdhdGlvbiA9IHN3aXBlci5uYXZpZ2F0aW9uLFxuICAgICAgICAkbmV4dEVsID0gX3N3aXBlciRuYXZpZ2F0aW9uLiRuZXh0RWwsXG4gICAgICAgICRwcmV2RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24uJHByZXZFbDtcblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICBzd2lwZXIuYTExeS5kaXNhYmxlRWwoJHByZXZFbCk7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbE5vdEZvY3VzYWJsZSgkcHJldkVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5hMTF5LmVuYWJsZUVsKCRwcmV2RWwpO1xuICAgICAgICBzd2lwZXIuYTExeS5tYWtlRWxGb2N1c2FibGUoJHByZXZFbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgIHN3aXBlci5hMTF5LmRpc2FibGVFbCgkbmV4dEVsKTtcbiAgICAgICAgc3dpcGVyLmExMXkubWFrZUVsTm90Rm9jdXNhYmxlKCRuZXh0RWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmExMXkuZW5hYmxlRWwoJG5leHRFbCk7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkbmV4dEVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHVwZGF0ZVBhZ2luYXRpb246IGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcblxuICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGgpIHtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMuZWFjaChmdW5jdGlvbiAoYnVsbGV0RWwpIHtcbiAgICAgICAgdmFyICRidWxsZXRFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKGJ1bGxldEVsKTtcbiAgICAgICAgc3dpcGVyLmExMXkubWFrZUVsRm9jdXNhYmxlKCRidWxsZXRFbCk7XG5cbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ucmVuZGVyQnVsbGV0KSB7XG4gICAgICAgICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlKCRidWxsZXRFbCwgJ2J1dHRvbicpO1xuICAgICAgICAgIHN3aXBlci5hMTF5LmFkZEVsTGFiZWwoJGJ1bGxldEVsLCBwYXJhbXMucGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UucmVwbGFjZSgvXFx7XFx7aW5kZXhcXH1cXH0vLCAkYnVsbGV0RWwuaW5kZXgoKSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgc3dpcGVyLiRlbC5hcHBlbmQoc3dpcGVyLmExMXkubGl2ZVJlZ2lvbik7IC8vIENvbnRhaW5lclxuXG4gICAgdmFyICRjb250YWluZXJFbCA9IHN3aXBlci4kZWw7XG5cbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHN3aXBlci5hMTF5LmFkZEVsUm9sZURlc2NyaXB0aW9uKCRjb250YWluZXJFbCwgcGFyYW1zLmNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY29udGFpbmVyTWVzc2FnZSkge1xuICAgICAgc3dpcGVyLmExMXkuYWRkRWxMYWJlbCgkY29udGFpbmVyRWwsIHBhcmFtcy5jb250YWluZXJNZXNzYWdlKTtcbiAgICB9IC8vIFdyYXBwZXJcblxuXG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgd3JhcHBlcklkID0gJHdyYXBwZXJFbC5hdHRyKCdpZCcpIHx8IFwic3dpcGVyLXdyYXBwZXItXCIgKyBzd2lwZXIuYTExeS5nZXRSYW5kb21OdW1iZXIoMTYpO1xuICAgIHZhciBsaXZlO1xuICAgIHN3aXBlci5hMTF5LmFkZEVsSWQoJHdyYXBwZXJFbCwgd3JhcHBlcklkKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5ICYmIHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCkge1xuICAgICAgbGl2ZSA9ICdvZmYnO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXZlID0gJ3BvbGl0ZSc7XG4gICAgfVxuXG4gICAgc3dpcGVyLmExMXkuYWRkRWxMaXZlKCR3cmFwcGVyRWwsIGxpdmUpOyAvLyBTbGlkZVxuXG4gICAgaWYgKHBhcmFtcy5pdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZSkge1xuICAgICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlRGVzY3JpcHRpb24oKDAsIF9kb20uZGVmYXVsdCkoc3dpcGVyLnNsaWRlcyksIHBhcmFtcy5pdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmExMXkuYWRkRWxSb2xlKCgwLCBfZG9tLmRlZmF1bHQpKHN3aXBlci5zbGlkZXMpLCAnZ3JvdXAnKTtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgIHZhciAkc2xpZGVFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKHNsaWRlRWwpO1xuICAgICAgdmFyIGFyaWFMYWJlbE1lc3NhZ2UgPSBwYXJhbXMuc2xpZGVMYWJlbE1lc3NhZ2UucmVwbGFjZSgvXFx7XFx7aW5kZXhcXH1cXH0vLCAkc2xpZGVFbC5pbmRleCgpICsgMSkucmVwbGFjZSgvXFx7XFx7c2xpZGVzTGVuZ3RoXFx9XFx9Lywgc3dpcGVyLnNsaWRlcy5sZW5ndGgpO1xuICAgICAgc3dpcGVyLmExMXkuYWRkRWxMYWJlbCgkc2xpZGVFbCwgYXJpYUxhYmVsTWVzc2FnZSk7XG4gICAgfSk7IC8vIE5hdmlnYXRpb25cblxuICAgIHZhciAkbmV4dEVsO1xuICAgIHZhciAkcHJldkVsO1xuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpIHtcbiAgICAgICRuZXh0RWwgPSBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsKSB7XG4gICAgICAkcHJldkVsID0gc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbDtcbiAgICB9XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCkge1xuICAgICAgc3dpcGVyLmExMXkubWFrZUVsRm9jdXNhYmxlKCRuZXh0RWwpO1xuXG4gICAgICBpZiAoJG5leHRFbFswXS50YWdOYW1lICE9PSAnQlVUVE9OJykge1xuICAgICAgICBzd2lwZXIuYTExeS5hZGRFbFJvbGUoJG5leHRFbCwgJ2J1dHRvbicpO1xuICAgICAgICAkbmV4dEVsLm9uKCdrZXlkb3duJywgc3dpcGVyLmExMXkub25FbnRlck9yU3BhY2VLZXkpO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuYTExeS5hZGRFbExhYmVsKCRuZXh0RWwsIHBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKTtcbiAgICAgIHN3aXBlci5hMTF5LmFkZEVsQ29udHJvbHMoJG5leHRFbCwgd3JhcHBlcklkKTtcbiAgICB9XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCkge1xuICAgICAgc3dpcGVyLmExMXkubWFrZUVsRm9jdXNhYmxlKCRwcmV2RWwpO1xuXG4gICAgICBpZiAoJHByZXZFbFswXS50YWdOYW1lICE9PSAnQlVUVE9OJykge1xuICAgICAgICBzd2lwZXIuYTExeS5hZGRFbFJvbGUoJHByZXZFbCwgJ2J1dHRvbicpO1xuICAgICAgICAkcHJldkVsLm9uKCdrZXlkb3duJywgc3dpcGVyLmExMXkub25FbnRlck9yU3BhY2VLZXkpO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuYTExeS5hZGRFbExhYmVsKCRwcmV2RWwsIHBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcbiAgICAgIHN3aXBlci5hMTF5LmFkZEVsQ29udHJvbHMoJHByZXZFbCwgd3JhcHBlcklkKTtcbiAgICB9IC8vIFBhZ2luYXRpb25cblxuXG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLm9uKCdrZXlkb3duJywgXCIuXCIgKyBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MucmVwbGFjZSgvIC9nLCAnLicpLCBzd2lwZXIuYTExeS5vbkVudGVyT3JTcGFjZUtleSk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuYTExeS5saXZlUmVnaW9uICYmIHN3aXBlci5hMTF5LmxpdmVSZWdpb24ubGVuZ3RoID4gMCkgc3dpcGVyLmExMXkubGl2ZVJlZ2lvbi5yZW1vdmUoKTtcbiAgICB2YXIgJG5leHRFbDtcbiAgICB2YXIgJHByZXZFbDtcblxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsKSB7XG4gICAgICAkbmV4dEVsID0gc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbDtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCkge1xuICAgICAgJHByZXZFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWw7XG4gICAgfVxuXG4gICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICRuZXh0RWwub2ZmKCdrZXlkb3duJywgc3dpcGVyLmExMXkub25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsKSB7XG4gICAgICAkcHJldkVsLm9mZigna2V5ZG93bicsIHN3aXBlci5hMTF5Lm9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICB9IC8vIFBhZ2luYXRpb25cblxuXG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLm9mZigna2V5ZG93bicsIFwiLlwiICsgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzLnJlcGxhY2UoLyAvZywgJy4nKSwgc3dpcGVyLmExMXkub25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH1cbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ2ExMXknLFxuICBwYXJhbXM6IHtcbiAgICBhMTF5OiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgbm90aWZpY2F0aW9uQ2xhc3M6ICdzd2lwZXItbm90aWZpY2F0aW9uJyxcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgICBuZXh0U2xpZGVNZXNzYWdlOiAnTmV4dCBzbGlkZScsXG4gICAgICBmaXJzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGZpcnN0IHNsaWRlJyxcbiAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcbiAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiAnR28gdG8gc2xpZGUge3tpbmRleH19JyxcbiAgICAgIHNsaWRlTGFiZWxNZXNzYWdlOiAne3tpbmRleH19IC8ge3tzbGlkZXNMZW5ndGh9fScsXG4gICAgICBjb250YWluZXJNZXNzYWdlOiBudWxsLFxuICAgICAgY29udGFpbmVyUm9sZURlc2NyaXB0aW9uTWVzc2FnZTogbnVsbCxcbiAgICAgIGl0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlOiBudWxsXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIGExMXk6IF9leHRlbmRzKHt9LCBBMTF5LCB7XG4gICAgICAgIGxpdmVSZWdpb246ICgwLCBfZG9tLmRlZmF1bHQpKFwiPHNwYW4gY2xhc3M9XFxcIlwiICsgc3dpcGVyLnBhcmFtcy5hMTF5Lm5vdGlmaWNhdGlvbkNsYXNzICsgXCJcXFwiIGFyaWEtbGl2ZT1cXFwiYXNzZXJ0aXZlXFxcIiBhcmlhLWF0b21pYz1cXFwidHJ1ZVxcXCI+PC9zcGFuPlwiKVxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBhZnRlckluaXQ6IGZ1bmN0aW9uIGFmdGVySW5pdChzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5hMTF5LmluaXQoKTtcbiAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgICB9LFxuICAgIHRvRWRnZTogZnVuY3Rpb24gdG9FZGdlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLmExMXkudXBkYXRlTmF2aWdhdGlvbigpO1xuICAgIH0sXG4gICAgZnJvbUVkZ2U6IGZ1bmN0aW9uIGZyb21FZGdlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLmExMXkudXBkYXRlTmF2aWdhdGlvbigpO1xuICAgIH0sXG4gICAgcGFnaW5hdGlvblVwZGF0ZTogZnVuY3Rpb24gcGFnaW5hdGlvblVwZGF0ZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuYTExeS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBBdXRvcGxheSA9IHtcbiAgcnVuOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICRhY3RpdmVTbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgIHZhciBkZWxheSA9IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG5cbiAgICBpZiAoJGFjdGl2ZVNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItYXV0b3BsYXknKSkge1xuICAgICAgZGVsYXkgPSAkYWN0aXZlU2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1hdXRvcGxheScpIHx8IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTtcbiAgICBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9ICgwLCBfdXRpbHMubmV4dFRpY2spKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhdXRvcGxheVJlc3VsdDtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkucmV2ZXJzZURpcmVjdGlvbikge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZVByZXYoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlUHJldihzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVOZXh0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5pc0VuZCkge1xuICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZU5leHQoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVUbygwLCBzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSBzd2lwZXIuYXV0b3BsYXkucnVuKCk7ZWxzZSBpZiAoYXV0b3BsYXlSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH0sXG4gIHN0YXJ0OiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHN3aXBlci5hdXRvcGxheS50aW1lb3V0ICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nID0gdHJ1ZTtcbiAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXlTdGFydCcpO1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTtcbiAgICAgIHN3aXBlci5hdXRvcGxheS50aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nID0gZmFsc2U7XG4gICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5U3RvcCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBwYXVzZTogZnVuY3Rpb24gcGF1c2Uoc3BlZWQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQpIGNsZWFyVGltZW91dChzd2lwZXIuYXV0b3BsYXkudGltZW91dCk7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IHRydWU7XG5cbiAgICBpZiAoc3BlZWQgPT09IDAgfHwgIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkud2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfSxcbiAgb25WaXNpYmlsaXR5Q2hhbmdlOiBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG5cbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJyAmJiBzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuJHdyYXBwZXJFbCkgcmV0dXJuO1xuICAgIGlmIChlLnRhcmdldCAhPT0gc3dpcGVyLiR3cmFwcGVyRWxbMF0pIHJldHVybjtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcblxuICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdhdXRvcGxheScsXG4gIHBhcmFtczoge1xuICAgIGF1dG9wbGF5OiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgIHN0b3BPbkxhc3RTbGlkZTogZmFsc2UsXG4gICAgICByZXZlcnNlRGlyZWN0aW9uOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBhdXRvcGxheTogX2V4dGVuZHMoe30sIEF1dG9wbGF5LCB7XG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICBwYXVzZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5zdGFydCgpO1xuICAgICAgICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIHN3aXBlci5hdXRvcGxheS5vblZpc2liaWxpdHlDaGFuZ2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiBiZWZvcmVUcmFuc2l0aW9uU3RhcnQoc3dpcGVyLCBzcGVlZCwgaW50ZXJuYWwpIHtcbiAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICBpZiAoaW50ZXJuYWwgfHwgIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2Uoc3BlZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNsaWRlckZpcnN0TW92ZTogZnVuY3Rpb24gc2xpZGVyRmlyc3RNb3ZlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdG91Y2hFbmQ6IGZ1bmN0aW9uIHRvdWNoRW5kKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSAmJiBzd2lwZXIuYXV0b3BsYXkucGF1c2VkICYmICFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgc3dpcGVyLmF1dG9wbGF5Lm9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBDb250cm9sbGVyID0ge1xuICBMaW5lYXJTcGxpbmU6IGZ1bmN0aW9uIExpbmVhclNwbGluZSh4LCB5KSB7XG4gICAgdmFyIGJpbmFyeVNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICAgIHZhciBtYXhJbmRleDtcbiAgICAgIHZhciBtaW5JbmRleDtcbiAgICAgIHZhciBndWVzcztcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYXJyYXksIHZhbCkge1xuICAgICAgICBtaW5JbmRleCA9IC0xO1xuICAgICAgICBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAobWF4SW5kZXggLSBtaW5JbmRleCA+IDEpIHtcbiAgICAgICAgICBndWVzcyA9IG1heEluZGV4ICsgbWluSW5kZXggPj4gMTtcblxuICAgICAgICAgIGlmIChhcnJheVtndWVzc10gPD0gdmFsKSB7XG4gICAgICAgICAgICBtaW5JbmRleCA9IGd1ZXNzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXhJbmRleCA9IGd1ZXNzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXhJbmRleDtcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMubGFzdEluZGV4ID0geC5sZW5ndGggLSAxOyAvLyBHaXZlbiBhbiB4IHZhbHVlICh4MiksIHJldHVybiB0aGUgZXhwZWN0ZWQgeTIgdmFsdWU6XG4gICAgLy8gKHgxLHkxKSBpcyB0aGUga25vd24gcG9pbnQgYmVmb3JlIGdpdmVuIHZhbHVlLFxuICAgIC8vICh4Myx5MykgaXMgdGhlIGtub3duIHBvaW50IGFmdGVyIGdpdmVuIHZhbHVlLlxuXG4gICAgdmFyIGkxO1xuICAgIHZhciBpMztcblxuICAgIHRoaXMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZSh4Mikge1xuICAgICAgaWYgKCF4MikgcmV0dXJuIDA7IC8vIEdldCB0aGUgaW5kZXhlcyBvZiB4MSBhbmQgeDMgKHRoZSBhcnJheSBpbmRleGVzIGJlZm9yZSBhbmQgYWZ0ZXIgZ2l2ZW4geDIpOlxuXG4gICAgICBpMyA9IGJpbmFyeVNlYXJjaCh0aGlzLngsIHgyKTtcbiAgICAgIGkxID0gaTMgLSAxOyAvLyBXZSBoYXZlIG91ciBpbmRleGVzIGkxICYgaTMsIHNvIHdlIGNhbiBjYWxjdWxhdGUgYWxyZWFkeTpcbiAgICAgIC8vIHkyIDo9ICgoeDLiiJJ4MSkgw5cgKHkz4oiSeTEpKSDDtyAoeDPiiJJ4MSkgKyB5MVxuXG4gICAgICByZXR1cm4gKHgyIC0gdGhpcy54W2kxXSkgKiAodGhpcy55W2kzXSAtIHRoaXMueVtpMV0pIC8gKHRoaXMueFtpM10gLSB0aGlzLnhbaTFdKSArIHRoaXMueVtpMV07XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyB4eHg6IGZvciBub3cgaSB3aWxsIGp1c3Qgc2F2ZSBvbmUgc3BsaW5lIGZ1bmN0aW9uIHRvIHRvXG4gIGdldEludGVycG9sYXRlRnVuY3Rpb246IGZ1bmN0aW9uIGdldEludGVycG9sYXRlRnVuY3Rpb24oYykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLnNwbGluZSA9IHN3aXBlci5wYXJhbXMubG9vcCA/IG5ldyBDb250cm9sbGVyLkxpbmVhclNwbGluZShzd2lwZXIuc2xpZGVzR3JpZCwgYy5zbGlkZXNHcmlkKSA6IG5ldyBDb250cm9sbGVyLkxpbmVhclNwbGluZShzd2lwZXIuc25hcEdyaWQsIGMuc25hcEdyaWQpO1xuICAgIH1cbiAgfSxcbiAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoX3NldFRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGNvbnRyb2xsZWQgPSBzd2lwZXIuY29udHJvbGxlci5jb250cm9sO1xuICAgIHZhciBtdWx0aXBsaWVyO1xuICAgIHZhciBjb250cm9sbGVkVHJhbnNsYXRlO1xuICAgIHZhciBTd2lwZXIgPSBzd2lwZXIuY29uc3RydWN0b3I7XG5cbiAgICBmdW5jdGlvbiBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGMpIHtcbiAgICAgIC8vIHRoaXMgd2lsbCBjcmVhdGUgYW4gSW50ZXJwb2xhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIHNuYXBHcmlkc1xuICAgICAgLy8geCBpcyB0aGUgR3JpZCBvZiB0aGUgc2Nyb2xsZWQgc2Nyb2xsZXIgYW5kIHkgd2lsbCBiZSB0aGUgY29udHJvbGxlZCBzY3JvbGxlclxuICAgICAgLy8gaXQgbWFrZXMgc2Vuc2UgdG8gY3JlYXRlIHRoaXMgb25seSBvbmNlIGFuZCByZWNhbGwgaXQgZm9yIHRoZSBpbnRlcnBvbGF0aW9uXG4gICAgICAvLyB0aGUgZnVuY3Rpb24gZG9lcyBhIGxvdCBvZiB2YWx1ZSBjYWNoaW5nIGZvciBwZXJmb3JtYW5jZVxuICAgICAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGU7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuYnkgPT09ICdzbGlkZScpIHtcbiAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbihjKTsgLy8gaSBhbSBub3Qgc3VyZSB3aHkgdGhlIHZhbHVlcyBoYXZlIHRvIGJlIG11bHRpcGxpY2F0ZWQgdGhpcyB3YXksIHRyaWVkIHRvIGludmVydCB0aGUgc25hcEdyaWRcbiAgICAgICAgLy8gYnV0IGl0IGRpZCBub3Qgd29yayBvdXRcblxuICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gLXN3aXBlci5jb250cm9sbGVyLnNwbGluZS5pbnRlcnBvbGF0ZSgtdHJhbnNsYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250cm9sbGVkVHJhbnNsYXRlIHx8IHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgbXVsdGlwbGllciA9IChjLm1heFRyYW5zbGF0ZSgpIC0gYy5taW5UcmFuc2xhdGUoKSkgLyAoc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogbXVsdGlwbGllciArIGMubWluVHJhbnNsYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuaW52ZXJzZSkge1xuICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gYy5tYXhUcmFuc2xhdGUoKSAtIGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgICB9XG5cbiAgICAgIGMudXBkYXRlUHJvZ3Jlc3MoY29udHJvbGxlZFRyYW5zbGF0ZSk7XG4gICAgICBjLnNldFRyYW5zbGF0ZShjb250cm9sbGVkVHJhbnNsYXRlLCBzd2lwZXIpO1xuICAgICAgYy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgYy51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbGxlZCkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcbiAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGNvbnRyb2xsZWRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xuICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkKTtcbiAgICB9XG4gIH0sXG4gIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBTd2lwZXIgPSBzd2lwZXIuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbnRyb2xsZWQgPSBzd2lwZXIuY29udHJvbGxlci5jb250cm9sO1xuICAgIHZhciBpO1xuXG4gICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oYykge1xuICAgICAgYy5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBzd2lwZXIpO1xuXG4gICAgICBpZiAoZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgYy50cmFuc2l0aW9uU3RhcnQoKTtcblxuICAgICAgICBpZiAoYy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICgwLCBfdXRpbHMubmV4dFRpY2spKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYy4kd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghY29udHJvbGxlZCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGMucGFyYW1zLmxvb3AgJiYgc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmJ5ID09PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICBjLmxvb3BGaXgoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbGxlZCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjb250cm9sbGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xuICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZCk7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnY29udHJvbGxlcicsXG4gIHBhcmFtczoge1xuICAgIGNvbnRyb2xsZXI6IHtcbiAgICAgIGNvbnRyb2w6IHVuZGVmaW5lZCxcbiAgICAgIGludmVyc2U6IGZhbHNlLFxuICAgICAgYnk6ICdzbGlkZScgLy8gb3IgJ2NvbnRhaW5lcidcblxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBjb250cm9sbGVyOiBfZXh0ZW5kcyh7XG4gICAgICAgIGNvbnRyb2w6IHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5jb250cm9sXG4gICAgICB9LCBDb250cm9sbGVyKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSByZXR1cm47XG5cbiAgICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xuICAgICAgICBkZWxldGUgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHJldHVybjtcblxuICAgICAgaWYgKHN3aXBlci5jb250cm9sbGVyLnNwbGluZSkge1xuICAgICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRlbGV0ZSBzd2lwZXIuY29udHJvbGxlci5zcGxpbmU7XG4gICAgICB9XG4gICAgfSxcbiAgICBvYnNlcnZlclVwZGF0ZTogZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHJldHVybjtcblxuICAgICAgaWYgKHN3aXBlci5jb250cm9sbGVyLnNwbGluZSkge1xuICAgICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRlbGV0ZSBzd2lwZXIuY29udHJvbGxlci5zcGxpbmU7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZShzd2lwZXIsIHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHJldHVybjtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKHN3aXBlciwgZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSByZXR1cm47XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0QnJlYWtwb2ludDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxuZnVuY3Rpb24gZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgYmFzZSwgY29udGFpbmVyRWwpIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSAnd2luZG93JztcbiAgfVxuXG4gIGlmICghYnJlYWtwb2ludHMgfHwgYmFzZSA9PT0gJ2NvbnRhaW5lcicgJiYgIWNvbnRhaW5lckVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgYnJlYWtwb2ludCA9IGZhbHNlO1xuICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICB2YXIgY3VycmVudFdpZHRoID0gYmFzZSA9PT0gJ3dpbmRvdycgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGNvbnRhaW5lckVsLmNsaWVudFdpZHRoO1xuICB2YXIgY3VycmVudEhlaWdodCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVySGVpZ2h0IDogY29udGFpbmVyRWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICBpZiAodHlwZW9mIHBvaW50ID09PSAnc3RyaW5nJyAmJiBwb2ludC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIHZhciBtaW5SYXRpbyA9IHBhcnNlRmxvYXQocG9pbnQuc3Vic3RyKDEpKTtcbiAgICAgIHZhciB2YWx1ZSA9IGN1cnJlbnRIZWlnaHQgKiBtaW5SYXRpbztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgcG9pbnQ6IHBvaW50XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcG9pbnQsXG4gICAgICBwb2ludDogcG9pbnRcbiAgICB9O1xuICB9KTtcbiAgcG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYS52YWx1ZSwgMTApIC0gcGFyc2VJbnQoYi52YWx1ZSwgMTApO1xuICB9KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBfcG9pbnRzJGkgPSBwb2ludHNbaV0sXG4gICAgICAgIHBvaW50ID0gX3BvaW50cyRpLnBvaW50LFxuICAgICAgICB2YWx1ZSA9IF9wb2ludHMkaS52YWx1ZTtcblxuICAgIGlmICh2YWx1ZSA8PSBjdXJyZW50V2lkdGgpIHtcbiAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4Jztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zZXRCcmVha3BvaW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zZXRCcmVha3BvaW50XCIpKTtcblxudmFyIF9nZXRCcmVha3BvaW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXRCcmVha3BvaW50XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBzZXRCcmVha3BvaW50OiBfc2V0QnJlYWtwb2ludC5kZWZhdWx0LFxuICBnZXRCcmVha3BvaW50OiBfZ2V0QnJlYWtwb2ludC5kZWZhdWx0XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzZXRCcmVha3BvaW50O1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBzZXRCcmVha3BvaW50KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgaW5pdGlhbGl6ZWQgPSBzd2lwZXIuaW5pdGlhbGl6ZWQsXG4gICAgICBfc3dpcGVyJGxvb3BlZFNsaWRlcyA9IHN3aXBlci5sb29wZWRTbGlkZXMsXG4gICAgICBsb29wZWRTbGlkZXMgPSBfc3dpcGVyJGxvb3BlZFNsaWRlcyA9PT0gdm9pZCAwID8gMCA6IF9zd2lwZXIkbG9vcGVkU2xpZGVzLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICRlbCA9IHN3aXBlci4kZWw7XG4gIHZhciBicmVha3BvaW50cyA9IHBhcmFtcy5icmVha3BvaW50cztcbiAgaWYgKCFicmVha3BvaW50cyB8fCBicmVha3BvaW50cyAmJiBPYmplY3Qua2V5cyhicmVha3BvaW50cykubGVuZ3RoID09PSAwKSByZXR1cm47IC8vIEdldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGggYW5kIHVwZGF0ZSBwYXJhbWV0ZXJzXG5cbiAgdmFyIGJyZWFrcG9pbnQgPSBzd2lwZXIuZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgc3dpcGVyLnBhcmFtcy5icmVha3BvaW50c0Jhc2UsIHN3aXBlci5lbCk7XG5cbiAgaWYgKGJyZWFrcG9pbnQgJiYgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ICE9PSBicmVha3BvaW50KSB7XG4gICAgdmFyIGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGJyZWFrcG9pbnRPbmx5UGFyYW1zKSB7XG4gICAgICBbJ3NsaWRlc1BlclZpZXcnLCAnc3BhY2VCZXR3ZWVuJywgJ3NsaWRlc1Blckdyb3VwJywgJ3NsaWRlc1Blckdyb3VwU2tpcCcsICdzbGlkZXNQZXJDb2x1bW4nXS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICB2YXIgcGFyYW1WYWx1ZSA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbVZhbHVlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChwYXJhbSA9PT0gJ3NsaWRlc1BlclZpZXcnICYmIChwYXJhbVZhbHVlID09PSAnQVVUTycgfHwgcGFyYW1WYWx1ZSA9PT0gJ2F1dG8nKSkge1xuICAgICAgICAgIGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXSA9ICdhdXRvJztcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbSA9PT0gJ3NsaWRlc1BlclZpZXcnKSB7XG4gICAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dID0gcGFyc2VGbG9hdChwYXJhbVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUludChwYXJhbVZhbHVlLCAxMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBicmVha3BvaW50UGFyYW1zID0gYnJlYWtwb2ludE9ubHlQYXJhbXMgfHwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zO1xuICAgIHZhciB3YXNNdWx0aVJvdyA9IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxO1xuICAgIHZhciBpc011bHRpUm93ID0gYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxO1xuXG4gICAgaWYgKHdhc011bHRpUm93ICYmICFpc011bHRpUm93KSB7XG4gICAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93IFwiICsgcGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93LWNvbHVtblwiKTtcbiAgICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIH0gZWxzZSBpZiAoIXdhc011bHRpUm93ICYmIGlzTXVsdGlSb3cpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3dcIik7XG5cbiAgICAgIGlmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3ctY29sdW1uXCIpO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgICB9XG5cbiAgICB2YXIgZGlyZWN0aW9uQ2hhbmdlZCA9IGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICYmIGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICE9PSBwYXJhbXMuZGlyZWN0aW9uO1xuICAgIHZhciBuZWVkc1JlTG9vcCA9IHBhcmFtcy5sb29wICYmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlclZpZXcgIT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3IHx8IGRpcmVjdGlvbkNoYW5nZWQpO1xuXG4gICAgaWYgKGRpcmVjdGlvbkNoYW5nZWQgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHN3aXBlci5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICB9XG5cbiAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLnBhcmFtcywgYnJlYWtwb2ludFBhcmFtcyk7XG4gICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlciwge1xuICAgICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2XG4gICAgfSk7XG4gICAgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgICBzd2lwZXIuZW1pdCgnX2JlZm9yZUJyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcblxuICAgIGlmIChuZWVkc1JlTG9vcCAmJiBpbml0aWFsaXplZCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXggLSBsb29wZWRTbGlkZXMgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2JyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciB3YXNMb2NrZWQgPSBzd2lwZXIuaXNMb2NrZWQ7XG4gIHZhciBsYXN0U2xpZGVQb3NpdGlvbiA9IHN3aXBlci5zbGlkZXMubGVuZ3RoID4gMCAmJiBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlICsgcGFyYW1zLnNwYWNlQmV0d2VlbiAqIChzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEpICsgc3dpcGVyLnNsaWRlc1swXS5vZmZzZXRXaWR0aCAqIHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuXG4gIGlmIChwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlICYmIHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlciAmJiBsYXN0U2xpZGVQb3NpdGlvbikge1xuICAgIHN3aXBlci5pc0xvY2tlZCA9IGxhc3RTbGlkZVBvc2l0aW9uIDw9IHN3aXBlci5zaXplO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5pc0xvY2tlZCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGggPT09IDE7XG4gIH1cblxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSAhc3dpcGVyLmlzTG9ja2VkO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSAhc3dpcGVyLmlzTG9ja2VkOyAvLyBldmVudHNcblxuICBpZiAod2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHN3aXBlci5lbWl0KHN3aXBlci5pc0xvY2tlZCA/ICdsb2NrJyA6ICd1bmxvY2snKTtcblxuICBpZiAod2FzTG9ja2VkICYmIHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgc3dpcGVyLmlzRW5kID0gZmFsc2U7XG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uKSBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgfVxufVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGNoZWNrT3ZlcmZsb3c6IGNoZWNrT3ZlcmZsb3dcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZENsYXNzZXM7XG5cbmZ1bmN0aW9uIHByZXBhcmVDbGFzc2VzKGVudHJpZXMsIHByZWZpeCkge1xuICB2YXIgcmVzdWx0Q2xhc3NlcyA9IFtdO1xuICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWVzKSB7XG4gICAgICAgIGlmIChpdGVtW2NsYXNzTmFtZXNdKSB7XG4gICAgICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGNsYXNzTmFtZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRDbGFzc2VzO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzc2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcyxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsLFxuICAgICAgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgIGRldmljZSA9IHN3aXBlci5kZXZpY2UsXG4gICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gIHZhciBzdWZmaXhlcyA9IHByZXBhcmVDbGFzc2VzKFsnaW5pdGlhbGl6ZWQnLCBwYXJhbXMuZGlyZWN0aW9uLCB7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogc3VwcG9ydC5wb2ludGVyRXZlbnRzICYmICFzdXBwb3J0LnRvdWNoXG4gIH0sIHtcbiAgICAnZnJlZS1tb2RlJzogcGFyYW1zLmZyZWVNb2RlXG4gIH0sIHtcbiAgICAnYXV0b2hlaWdodCc6IHBhcmFtcy5hdXRvSGVpZ2h0XG4gIH0sIHtcbiAgICAncnRsJzogcnRsXG4gIH0sIHtcbiAgICAnbXVsdGlyb3cnOiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMVxuICB9LCB7XG4gICAgJ211bHRpcm93LWNvbHVtbic6IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxICYmIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJ1xuICB9LCB7XG4gICAgJ2FuZHJvaWQnOiBkZXZpY2UuYW5kcm9pZFxuICB9LCB7XG4gICAgJ2lvcyc6IGRldmljZS5pb3NcbiAgfSwge1xuICAgICdjc3MtbW9kZSc6IHBhcmFtcy5jc3NNb2RlXG4gIH1dLCBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyk7XG4gIGNsYXNzTmFtZXMucHVzaC5hcHBseShjbGFzc05hbWVzLCBzdWZmaXhlcyk7XG4gICRlbC5hZGRDbGFzcyhbXS5jb25jYXQoY2xhc3NOYW1lcykuam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfYWRkQ2xhc3NlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWRkQ2xhc3Nlc1wiKSk7XG5cbnZhciBfcmVtb3ZlQ2xhc3NlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVtb3ZlQ2xhc3Nlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgYWRkQ2xhc3NlczogX2FkZENsYXNzZXMuZGVmYXVsdCxcbiAgcmVtb3ZlQ2xhc3NlczogX3JlbW92ZUNsYXNzZXMuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVtb3ZlQ2xhc3NlcztcblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciAkZWwgPSBzd2lwZXIuJGVsLFxuICAgICAgY2xhc3NOYW1lcyA9IHN3aXBlci5jbGFzc05hbWVzO1xuICAkZWwucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lcy5qb2luKCcgJykpO1xuICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG52YXIgX2dldFN1cHBvcnQgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvZ2V0LXN1cHBvcnRcIik7XG5cbnZhciBfZ2V0RGV2aWNlID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL2dldC1kZXZpY2VcIik7XG5cbnZhciBfZ2V0QnJvd3NlciA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9nZXQtYnJvd3NlclwiKTtcblxudmFyIF9yZXNpemUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9tb2R1bGVzL3Jlc2l6ZS9yZXNpemVcIikpO1xuXG52YXIgX29ic2VydmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vbW9kdWxlcy9vYnNlcnZlci9vYnNlcnZlclwiKSk7XG5cbnZhciBfbW9kdWxhciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbW9kdWxhclwiKSk7XG5cbnZhciBfZXZlbnRzRW1pdHRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZXZlbnRzLWVtaXR0ZXJcIikpO1xuXG52YXIgX2luZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cGRhdGUvaW5kZXhcIikpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdHJhbnNsYXRlL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RyYW5zaXRpb24vaW5kZXhcIikpO1xuXG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2xpZGUvaW5kZXhcIikpO1xuXG52YXIgX2luZGV4NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9vcC9pbmRleFwiKSk7XG5cbnZhciBfaW5kZXg2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ncmFiLWN1cnNvci9pbmRleFwiKSk7XG5cbnZhciBfaW5kZXg3ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYW5pcHVsYXRpb24vaW5kZXhcIikpO1xuXG52YXIgX2luZGV4OCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZXZlbnRzL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2JyZWFrcG9pbnRzL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDEwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jbGFzc2VzL2luZGV4XCIpKTtcblxudmFyIF9pbmRleDExID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbWFnZXMvaW5kZXhcIikpO1xuXG52YXIgX2luZGV4MTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NoZWNrLW92ZXJmbG93L2luZGV4XCIpKTtcblxudmFyIF9kZWZhdWx0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGVmYXVsdHNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBwcm90b3R5cGVzID0ge1xuICBtb2R1bGFyOiBfbW9kdWxhci5kZWZhdWx0LFxuICBldmVudHNFbWl0dGVyOiBfZXZlbnRzRW1pdHRlci5kZWZhdWx0LFxuICB1cGRhdGU6IF9pbmRleC5kZWZhdWx0LFxuICB0cmFuc2xhdGU6IF9pbmRleDIuZGVmYXVsdCxcbiAgdHJhbnNpdGlvbjogX2luZGV4My5kZWZhdWx0LFxuICBzbGlkZTogX2luZGV4NC5kZWZhdWx0LFxuICBsb29wOiBfaW5kZXg1LmRlZmF1bHQsXG4gIGdyYWJDdXJzb3I6IF9pbmRleDYuZGVmYXVsdCxcbiAgbWFuaXB1bGF0aW9uOiBfaW5kZXg3LmRlZmF1bHQsXG4gIGV2ZW50czogX2luZGV4OC5kZWZhdWx0LFxuICBicmVha3BvaW50czogX2luZGV4OS5kZWZhdWx0LFxuICBjaGVja092ZXJmbG93OiBfaW5kZXgxMi5kZWZhdWx0LFxuICBjbGFzc2VzOiBfaW5kZXgxMC5kZWZhdWx0LFxuICBpbWFnZXM6IF9pbmRleDExLmRlZmF1bHRcbn07XG52YXIgZXh0ZW5kZWREZWZhdWx0cyA9IHt9O1xuXG52YXIgU3dpcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3dpcGVyKCkge1xuICAgIHZhciBlbDtcbiAgICB2YXIgcGFyYW1zO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmdzWzBdKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnKSB7XG4gICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGFyZ3NbMF07XG4gICAgICBwYXJhbXMgPSBhcmdzWzFdO1xuICAgIH1cblxuICAgIGlmICghcGFyYW1zKSBwYXJhbXMgPSB7fTtcbiAgICBwYXJhbXMgPSAoMCwgX3V0aWxzLmV4dGVuZCkoe30sIHBhcmFtcyk7XG4gICAgaWYgKGVsICYmICFwYXJhbXMuZWwpIHBhcmFtcy5lbCA9IGVsO1xuXG4gICAgaWYgKHBhcmFtcy5lbCAmJiAoMCwgX2RvbS5kZWZhdWx0KShwYXJhbXMuZWwpLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBzd2lwZXJzID0gW107XG4gICAgICAoMCwgX2RvbS5kZWZhdWx0KShwYXJhbXMuZWwpLmVhY2goZnVuY3Rpb24gKGNvbnRhaW5lckVsKSB7XG4gICAgICAgIHZhciBuZXdQYXJhbXMgPSAoMCwgX3V0aWxzLmV4dGVuZCkoe30sIHBhcmFtcywge1xuICAgICAgICAgIGVsOiBjb250YWluZXJFbFxuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIobmV3UGFyYW1zKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgIH0gLy8gU3dpcGVyIEluc3RhbmNlXG5cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5fX3N3aXBlcl9fID0gdHJ1ZTtcbiAgICBzd2lwZXIuc3VwcG9ydCA9ICgwLCBfZ2V0U3VwcG9ydC5nZXRTdXBwb3J0KSgpO1xuICAgIHN3aXBlci5kZXZpY2UgPSAoMCwgX2dldERldmljZS5nZXREZXZpY2UpKHtcbiAgICAgIHVzZXJBZ2VudDogcGFyYW1zLnVzZXJBZ2VudFxuICAgIH0pO1xuICAgIHN3aXBlci5icm93c2VyID0gKDAsIF9nZXRCcm93c2VyLmdldEJyb3dzZXIpKCk7XG4gICAgc3dpcGVyLmV2ZW50c0xpc3RlbmVycyA9IHt9O1xuICAgIHN3aXBlci5ldmVudHNBbnlMaXN0ZW5lcnMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygc3dpcGVyLm1vZHVsZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzd2lwZXIubW9kdWxlcyA9IHt9O1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHN3aXBlci5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICB2YXIgbW9kdWxlID0gc3dpcGVyLm1vZHVsZXNbbW9kdWxlTmFtZV07XG5cbiAgICAgIGlmIChtb2R1bGUucGFyYW1zKSB7XG4gICAgICAgIHZhciBtb2R1bGVQYXJhbU5hbWUgPSBPYmplY3Qua2V5cyhtb2R1bGUucGFyYW1zKVswXTtcbiAgICAgICAgdmFyIG1vZHVsZVBhcmFtcyA9IG1vZHVsZS5wYXJhbXNbbW9kdWxlUGFyYW1OYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGVQYXJhbXMgIT09ICdvYmplY3QnIHx8IG1vZHVsZVBhcmFtcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAoIShtb2R1bGVQYXJhbU5hbWUgaW4gcGFyYW1zICYmICdlbmFibGVkJyBpbiBtb2R1bGVQYXJhbXMpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSB0cnVlKSB7XG4gICAgICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09ICdvYmplY3QnICYmICEoJ2VuYWJsZWQnIGluIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSkge1xuICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTsgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggbW9kdWxlcyBwYXJhbXNcblxuICAgIHZhciBzd2lwZXJQYXJhbXMgPSAoMCwgX3V0aWxzLmV4dGVuZCkoe30sIF9kZWZhdWx0cy5kZWZhdWx0KTtcbiAgICBzd2lwZXIudXNlUGFyYW1zKHN3aXBlclBhcmFtcyk7IC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIHBhc3NlZCBwYXJhbXNcblxuICAgIHN3aXBlci5wYXJhbXMgPSAoMCwgX3V0aWxzLmV4dGVuZCkoe30sIHN3aXBlclBhcmFtcywgZXh0ZW5kZWREZWZhdWx0cywgcGFyYW1zKTtcbiAgICBzd2lwZXIub3JpZ2luYWxQYXJhbXMgPSAoMCwgX3V0aWxzLmV4dGVuZCkoe30sIHN3aXBlci5wYXJhbXMpO1xuICAgIHN3aXBlci5wYXNzZWRQYXJhbXMgPSAoMCwgX3V0aWxzLmV4dGVuZCkoe30sIHBhcmFtcyk7IC8vIGFkZCBldmVudCBsaXN0ZW5lcnNcblxuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub24pIHtcbiAgICAgIE9iamVjdC5rZXlzKHN3aXBlci5wYXJhbXMub24pLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICBzd2lwZXIub24oZXZlbnROYW1lLCBzd2lwZXIucGFyYW1zLm9uW2V2ZW50TmFtZV0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMgJiYgc3dpcGVyLnBhcmFtcy5vbkFueSkge1xuICAgICAgc3dpcGVyLm9uQW55KHN3aXBlci5wYXJhbXMub25BbnkpO1xuICAgIH0gLy8gU2F2ZSBEb20gbGliXG5cblxuICAgIHN3aXBlci4kID0gX2RvbS5kZWZhdWx0OyAvLyBFeHRlbmQgU3dpcGVyXG5cbiAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLCB7XG4gICAgICBlbDogZWwsXG4gICAgICAvLyBDbGFzc2VzXG4gICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgIC8vIFNsaWRlc1xuICAgICAgc2xpZGVzOiAoMCwgX2RvbS5kZWZhdWx0KSgpLFxuICAgICAgc2xpZGVzR3JpZDogW10sXG4gICAgICBzbmFwR3JpZDogW10sXG4gICAgICBzbGlkZXNTaXplc0dyaWQ6IFtdLFxuICAgICAgLy8gaXNEaXJlY3Rpb25cbiAgICAgIGlzSG9yaXpvbnRhbDogZnVuY3Rpb24gaXNIb3Jpem9udGFsKCkge1xuICAgICAgICByZXR1cm4gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcbiAgICAgIH0sXG4gICAgICBpc1ZlcnRpY2FsOiBmdW5jdGlvbiBpc1ZlcnRpY2FsKCkge1xuICAgICAgICByZXR1cm4gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XG4gICAgICB9LFxuICAgICAgLy8gSW5kZXhlc1xuICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICByZWFsSW5kZXg6IDAsXG4gICAgICAvL1xuICAgICAgaXNCZWdpbm5pbmc6IHRydWUsXG4gICAgICBpc0VuZDogZmFsc2UsXG4gICAgICAvLyBQcm9wc1xuICAgICAgdHJhbnNsYXRlOiAwLFxuICAgICAgcHJldmlvdXNUcmFuc2xhdGU6IDAsXG4gICAgICBwcm9ncmVzczogMCxcbiAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgIC8vIExvY2tzXG4gICAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2LFxuICAgICAgLy8gVG91Y2ggRXZlbnRzXG4gICAgICB0b3VjaEV2ZW50czogZnVuY3Rpb24gdG91Y2hFdmVudHMoKSB7XG4gICAgICAgIHZhciB0b3VjaCA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnXTtcbiAgICAgICAgdmFyIGRlc2t0b3AgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCddO1xuXG4gICAgICAgIGlmIChzd2lwZXIuc3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgZGVza3RvcCA9IFsncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJ107XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCA9IHtcbiAgICAgICAgICBzdGFydDogdG91Y2hbMF0sXG4gICAgICAgICAgbW92ZTogdG91Y2hbMV0sXG4gICAgICAgICAgZW5kOiB0b3VjaFsyXSxcbiAgICAgICAgICBjYW5jZWw6IHRvdWNoWzNdXG4gICAgICAgIH07XG4gICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3AgPSB7XG4gICAgICAgICAgc3RhcnQ6IGRlc2t0b3BbMF0sXG4gICAgICAgICAgbW92ZTogZGVza3RvcFsxXSxcbiAgICAgICAgICBlbmQ6IGRlc2t0b3BbMl1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggPyBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCA6IHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3A7XG4gICAgICB9KCksXG4gICAgICB0b3VjaEV2ZW50c0RhdGE6IHtcbiAgICAgICAgaXNUb3VjaGVkOiB1bmRlZmluZWQsXG4gICAgICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrczogdW5kZWZpbmVkLFxuICAgICAgICB0b3VjaFN0YXJ0VGltZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgICAgICBjdXJyZW50VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VGhyZXNob2xkTW92ZTogdW5kZWZpbmVkLFxuICAgICAgICAvLyBGb3JtIGVsZW1lbnRzIHRvIG1hdGNoXG4gICAgICAgIGZvcm1FbGVtZW50czogJ2lucHV0LCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW8sIGxhYmVsJyxcbiAgICAgICAgLy8gTGFzdCBjbGljayB0aW1lXG4gICAgICAgIGxhc3RDbGlja1RpbWU6ICgwLCBfdXRpbHMubm93KSgpLFxuICAgICAgICBjbGlja1RpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gVmVsb2NpdGllc1xuICAgICAgICB2ZWxvY2l0aWVzOiBbXSxcbiAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1RvdWNoRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIC8vIENsaWNrc1xuICAgICAgYWxsb3dDbGljazogdHJ1ZSxcbiAgICAgIC8vIFRvdWNoZXNcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgdG91Y2hlczoge1xuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICBkaWZmOiAwXG4gICAgICB9LFxuICAgICAgLy8gSW1hZ2VzXG4gICAgICBpbWFnZXNUb0xvYWQ6IFtdLFxuICAgICAgaW1hZ2VzTG9hZGVkOiAwXG4gICAgfSk7IC8vIEluc3RhbGwgTW9kdWxlc1xuXG4gICAgc3dpcGVyLnVzZU1vZHVsZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnX3N3aXBlcicpOyAvLyBJbml0XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5pbml0KSB7XG4gICAgICBzd2lwZXIuaW5pdCgpO1xuICAgIH0gLy8gUmV0dXJuIGFwcCBpbnN0YW5jZVxuXG5cbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN3aXBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmVtaXRDb250YWluZXJDbGFzc2VzID0gZnVuY3Rpb24gZW1pdENvbnRhaW5lckNsYXNzZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgdmFyIGNsYXNzZXMgPSBzd2lwZXIuZWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyLWNvbnRhaW5lcicpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgPT09IDA7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19jb250YWluZXJDbGFzc2VzJywgY2xhc3Nlcy5qb2luKCcgJykpO1xuICB9O1xuXG4gIF9wcm90by5nZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbiBnZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHJldHVybiBzbGlkZUVsLmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlci1zbGlkZScpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgPT09IDA7XG4gICAgfSkuam9pbignICcpO1xuICB9O1xuXG4gIF9wcm90by5lbWl0U2xpZGVzQ2xhc3NlcyA9IGZ1bmN0aW9uIGVtaXRTbGlkZXNDbGFzc2VzKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIHZhciB1cGRhdGVzID0gW107XG4gICAgc3dpcGVyLnNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZUVsKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IHN3aXBlci5nZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCk7XG4gICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICBzbGlkZUVsOiBzbGlkZUVsLFxuICAgICAgICBjbGFzc05hbWVzOiBjbGFzc05hbWVzXG4gICAgICB9KTtcbiAgICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzcycsIHNsaWRlRWwsIGNsYXNzTmFtZXMpO1xuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzc2VzJywgdXBkYXRlcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNsaWRlc1BlclZpZXdEeW5hbWljID0gZnVuY3Rpb24gc2xpZGVzUGVyVmlld0R5bmFtaWMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICAgIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgICAgc3dpcGVyU2l6ZSA9IHN3aXBlci5zaXplLFxuICAgICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgc3B2ID0gMTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHZhciBzbGlkZVNpemUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgIHZhciBicmVha0xvb3A7XG5cbiAgICAgIGZvciAodmFyIGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2kgPSBhY3RpdmVJbmRleCAtIDE7IF9pID49IDA7IF9pIC09IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tfaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbX2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfaTIgPSBhY3RpdmVJbmRleCArIDE7IF9pMiA8IHNsaWRlcy5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNHcmlkW19pMl0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemUpIHtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcHY7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zOyAvLyBCcmVha3BvaW50c1xuXG4gICAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgdmFyIHRyYW5zbGF0ZVZhbHVlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgKiAtMSA6IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICB2YXIgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgodHJhbnNsYXRlVmFsdWUsIHN3aXBlci5tYXhUcmFuc2xhdGUoKSksIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zbGF0ZWQ7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgc2V0VHJhbnNsYXRlKCk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRyYW5zbGF0ZWQpIHtcbiAgICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICB9O1xuXG4gIF9wcm90by5jaGFuZ2VEaXJlY3Rpb24gPSBmdW5jdGlvbiBjaGFuZ2VEaXJlY3Rpb24obmV3RGlyZWN0aW9uLCBuZWVkVXBkYXRlKSB7XG4gICAgaWYgKG5lZWRVcGRhdGUgPT09IHZvaWQgMCkge1xuICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnREaXJlY3Rpb24gPSBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbjtcblxuICAgIGlmICghbmV3RGlyZWN0aW9uKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuXG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbiB8fCBuZXdEaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJyAmJiBuZXdEaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfVxuXG4gICAgc3dpcGVyLiRlbC5yZW1vdmVDbGFzcyhcIlwiICsgc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgY3VycmVudERpcmVjdGlvbikuYWRkQ2xhc3MoXCJcIiArIHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIG5ld0RpcmVjdGlvbik7XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gICAgc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XG4gICAgc3dpcGVyLnNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZUVsKSB7XG4gICAgICBpZiAobmV3RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHNsaWRlRWwuc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlRWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ2NoYW5nZURpcmVjdGlvbicpO1xuICAgIGlmIChuZWVkVXBkYXRlKSBzd2lwZXIudXBkYXRlKCk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudChlbCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIubW91bnRlZCkgcmV0dXJuIHRydWU7IC8vIEZpbmQgZWxcblxuICAgIHZhciAkZWwgPSAoMCwgX2RvbS5kZWZhdWx0KShlbCB8fCBzd2lwZXIucGFyYW1zLmVsKTtcbiAgICBlbCA9ICRlbFswXTtcblxuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBlbC5zd2lwZXIgPSBzd2lwZXI7IC8vIEZpbmQgV3JhcHBlclxuXG4gICAgdmFyICR3cmFwcGVyRWw7XG5cbiAgICBpZiAoZWwgJiYgZWwuc2hhZG93Um9vdCAmJiBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICR3cmFwcGVyRWwgPSAoMCwgX2RvbS5kZWZhdWx0KShlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcykpOyAvLyBDaGlsZHJlbiBuZWVkcyB0byByZXR1cm4gc2xvdCBpdGVtc1xuXG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuICRlbC5jaGlsZHJlbihvcHRpb25zKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwgPSAkZWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlciwge1xuICAgICAgJGVsOiAkZWwsXG4gICAgICBlbDogZWwsXG4gICAgICAkd3JhcHBlckVsOiAkd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsOiAkd3JhcHBlckVsWzBdLFxuICAgICAgbW91bnRlZDogdHJ1ZSxcbiAgICAgIC8vIFJUTFxuICAgICAgcnRsOiBlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgcnRsVHJhbnNsYXRlOiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIChlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKSxcbiAgICAgIHdyb25nUlRMOiAkd3JhcHBlckVsLmNzcygnZGlzcGxheScpID09PSAnLXdlYmtpdC1ib3gnXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KGVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuIHN3aXBlcjtcbiAgICB2YXIgbW91bnRlZCA9IHN3aXBlci5tb3VudChlbCk7XG4gICAgaWYgKG1vdW50ZWQgPT09IGZhbHNlKSByZXR1cm4gc3dpcGVyO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVJbml0Jyk7IC8vIFNldCBicmVha3BvaW50XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9IC8vIEFkZCBDbGFzc2VzXG5cblxuICAgIHN3aXBlci5hZGRDbGFzc2VzKCk7IC8vIENyZWF0ZSBsb29wXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIH0gLy8gVXBkYXRlIHNpemVcblxuXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTsgLy8gVXBkYXRlIHNsaWRlc1xuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9IC8vIFNldCBHcmFiIEN1cnNvclxuXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMpIHtcbiAgICAgIHN3aXBlci5wcmVsb2FkSW1hZ2VzKCk7XG4gICAgfSAvLyBTbGlkZSBUbyBJbml0aWFsIFNsaWRlXG5cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgIH0gLy8gQXR0YWNoIGV2ZW50c1xuXG5cbiAgICBzd2lwZXIuYXR0YWNoRXZlbnRzKCk7IC8vIEluaXQgRmxhZ1xuXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gdHJ1ZTsgLy8gRW1pdFxuXG4gICAgc3dpcGVyLmVtaXQoJ2luaXQnKTtcbiAgICBzd2lwZXIuZW1pdCgnYWZ0ZXJJbml0Jyk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koZGVsZXRlSW5zdGFuY2UsIGNsZWFuU3R5bGVzKSB7XG4gICAgaWYgKGRlbGV0ZUluc3RhbmNlID09PSB2b2lkIDApIHtcbiAgICAgIGRlbGV0ZUluc3RhbmNlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2xlYW5TdHlsZXMgPT09IHZvaWQgMCkge1xuICAgICAgY2xlYW5TdHlsZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgICAkZWwgPSBzd2lwZXIuJGVsLFxuICAgICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG5cbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlci5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVEZXN0cm95Jyk7IC8vIEluaXQgRmxhZ1xuXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gZmFsc2U7IC8vIERldGFjaCBldmVudHNcblxuICAgIHN3aXBlci5kZXRhY2hFdmVudHMoKTsgLy8gRGVzdHJveSBsb29wXG5cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH0gLy8gQ2xlYW51cCBzdHlsZXNcblxuXG4gICAgaWYgKGNsZWFuU3R5bGVzKSB7XG4gICAgICBzd2lwZXIucmVtb3ZlQ2xhc3NlcygpO1xuICAgICAgJGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAkd3JhcHBlckVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgIGlmIChzbGlkZXMgJiYgc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICBzbGlkZXMucmVtb3ZlQ2xhc3MoW3BhcmFtcy5zbGlkZVZpc2libGVDbGFzcywgcGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MsIHBhcmFtcy5zbGlkZU5leHRDbGFzcywgcGFyYW1zLnNsaWRlUHJldkNsYXNzXS5qb2luKCcgJykpLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnZGVzdHJveScpOyAvLyBEZXRhY2ggZW1pdHRlciBldmVudHNcblxuICAgIE9iamVjdC5rZXlzKHN3aXBlci5ldmVudHNMaXN0ZW5lcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgc3dpcGVyLm9mZihldmVudE5hbWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlbGV0ZUluc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgc3dpcGVyLiRlbFswXS5zd2lwZXIgPSBudWxsO1xuICAgICAgKDAsIF91dGlscy5kZWxldGVQcm9wcykoc3dpcGVyKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBTd2lwZXIuZXh0ZW5kRGVmYXVsdHMgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0cyhuZXdEZWZhdWx0cykge1xuICAgICgwLCBfdXRpbHMuZXh0ZW5kKShleHRlbmRlZERlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XG4gIH07XG5cbiAgU3dpcGVyLmluc3RhbGxNb2R1bGUgPSBmdW5jdGlvbiBpbnN0YWxsTW9kdWxlKG1vZHVsZSkge1xuICAgIGlmICghU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzKSBTd2lwZXIucHJvdG90eXBlLm1vZHVsZXMgPSB7fTtcbiAgICB2YXIgbmFtZSA9IG1vZHVsZS5uYW1lIHx8IE9iamVjdC5rZXlzKFN3aXBlci5wcm90b3R5cGUubW9kdWxlcykubGVuZ3RoICsgXCJfXCIgKyAoMCwgX3V0aWxzLm5vdykoKTtcbiAgICBTd2lwZXIucHJvdG90eXBlLm1vZHVsZXNbbmFtZV0gPSBtb2R1bGU7XG4gIH07XG5cbiAgU3dpcGVyLnVzZSA9IGZ1bmN0aW9uIHVzZShtb2R1bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtb2R1bGUpKSB7XG4gICAgICBtb2R1bGUuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gU3dpcGVyLmluc3RhbGxNb2R1bGUobSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBTd2lwZXI7XG4gICAgfVxuXG4gICAgU3dpcGVyLmluc3RhbGxNb2R1bGUobW9kdWxlKTtcbiAgICByZXR1cm4gU3dpcGVyO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTd2lwZXIsIG51bGwsIFt7XG4gICAga2V5OiBcImV4dGVuZGVkRGVmYXVsdHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBleHRlbmRlZERlZmF1bHRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9kZWZhdWx0cy5kZWZhdWx0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTd2lwZXI7XG59KCk7XG5cbk9iamVjdC5rZXlzKHByb3RvdHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3RvdHlwZUdyb3VwKSB7XG4gIE9iamVjdC5rZXlzKHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm90b01ldGhvZCkge1xuICAgIFN3aXBlci5wcm90b3R5cGVbcHJvdG9NZXRob2RdID0gcHJvdG90eXBlc1twcm90b3R5cGVHcm91cF1bcHJvdG9NZXRob2RdO1xuICB9KTtcbn0pO1xuU3dpcGVyLnVzZShbX3Jlc2l6ZS5kZWZhdWx0LCBfb2JzZXJ2ZXIuZGVmYXVsdF0pO1xudmFyIF9kZWZhdWx0ID0gU3dpcGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSB7XG4gIGluaXQ6IHRydWUsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gIGluaXRpYWxTbGlkZTogMCxcbiAgc3BlZWQ6IDMwMCxcbiAgY3NzTW9kZTogZmFsc2UsXG4gIHVwZGF0ZU9uV2luZG93UmVzaXplOiB0cnVlLFxuICByZXNpemVPYnNlcnZlcjogZmFsc2UsXG4gIG5lc3RlZDogZmFsc2UsXG4gIC8vIE92ZXJyaWRlc1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxuICAvL1xuICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuICAvLyBzc3JcbiAgdXNlckFnZW50OiBudWxsLFxuICB1cmw6IG51bGwsXG4gIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwKS5cbiAgZWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcbiAgLy8gRnJlZSBtb2RlXG4gIGZyZWVNb2RlOiBmYWxzZSxcbiAgZnJlZU1vZGVNb21lbnR1bTogdHJ1ZSxcbiAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW86IDEsXG4gIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gIGZyZWVNb2RlTWluaW11bVZlbG9jaXR5OiAwLjAyLFxuICAvLyBBdXRvaGVpZ2h0XG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuICAvLyBFZmZlY3RzXG4gIGVmZmVjdDogJ3NsaWRlJyxcbiAgLy8gJ3NsaWRlJyBvciAnZmFkZScgb3IgJ2N1YmUnIG9yICdjb3ZlcmZsb3cnIG9yICdmbGlwJ1xuICAvLyBCcmVha3BvaW50c1xuICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICBicmVha3BvaW50c0Jhc2U6ICd3aW5kb3cnLFxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgc2xpZGVzUGVyQ29sdW1uRmlsbDogJ2NvbHVtbicsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzbGlkZXNQZXJHcm91cFNraXA6IDAsXG4gIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gIC8vIGluIHB4XG4gIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAvLyBpbiBweFxuICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICB3YXRjaE92ZXJmbG93OiBmYWxzZSxcbiAgLy8gUm91bmQgbGVuZ3RoXG4gIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gIC8vIFRvdWNoZXNcbiAgdG91Y2hSYXRpbzogMSxcbiAgdG91Y2hBbmdsZTogNDUsXG4gIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gIHNob3J0U3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gIHRocmVzaG9sZDogMCxcbiAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcbiAgLy8gUmVzaXN0YW5jZVxuICByZXNpc3RhbmNlOiB0cnVlLFxuICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gIC8vIFByb2dyZXNzXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IGZhbHNlLFxuICAvLyBDdXJzb3JcbiAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gIC8vIENsaWNrc1xuICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAvLyBJbWFnZXNcbiAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgdXBkYXRlT25JbWFnZXNSZWFkeTogdHJ1ZSxcbiAgLy8gbG9vcFxuICBsb29wOiBmYWxzZSxcbiAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gIGxvb3BlZFNsaWRlczogbnVsbCxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG4gIGxvb3BQcmV2ZW50c1NsaWRlOiB0cnVlLFxuICAvLyBTd2lwaW5nL25vIHN3aXBpbmdcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG4gIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICBzd2lwZUhhbmRsZXI6IG51bGwsXG4gIC8vICcuc3dpcGUtaGFuZGxlcicsXG4gIG5vU3dpcGluZzogdHJ1ZSxcbiAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gIG5vU3dpcGluZ1NlbGVjdG9yOiBudWxsLFxuICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuICAvLyBOU1xuICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLWNvbnRhaW5lci0nLFxuICAvLyBORVdcbiAgc2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZScsXG4gIHNsaWRlQmxhbmtDbGFzczogJ3N3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsnLFxuICBzbGlkZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWFjdGl2ZScsXG4gIHNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLWFjdGl2ZScsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICBzbGlkZUR1cGxpY2F0ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZScsXG4gIHNsaWRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLW5leHQnLFxuICBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dCcsXG4gIHNsaWRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLXByZXYnLFxuICBzbGlkZUR1cGxpY2F0ZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtcHJldicsXG4gIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgLy8gQ2FsbGJhY2tzXG4gIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgLy8gSW50ZXJuYWxzXG4gIF9lbWl0Q2xhc3NlczogZmFsc2Vcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbnZhciBfZGVmYXVsdCA9IHtcbiAgb246IGZ1bmN0aW9uIG9uKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvbmNlOiBmdW5jdGlvbiBvbmNlKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcblxuICAgIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnRzLCBvbmNlSGFuZGxlcik7XG5cbiAgICAgIGlmIChvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSkge1xuICAgICAgICBkZWxldGUgb25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVyLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5ID0gaGFuZGxlcjtcbiAgICByZXR1cm4gc2VsZi5vbihldmVudHMsIG9uY2VIYW5kbGVyLCBwcmlvcml0eSk7XG4gIH0sXG4gIG9uQW55OiBmdW5jdGlvbiBvbkFueShoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIHZhciBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcblxuICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpIDwgMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnNbbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb2ZmQW55OiBmdW5jdGlvbiBvZmZBbnkoaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzQW55TGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgaW5kZXggPSBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZjogZnVuY3Rpb24gb2ZmKGV2ZW50cywgaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gaGFuZGxlciB8fCBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgJiYgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBlbWl0OiBmdW5jdGlvbiBlbWl0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgZXZlbnRzO1xuICAgIHZhciBkYXRhO1xuICAgIHZhciBjb250ZXh0O1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICB9XG5cbiAgICBkYXRhLnVuc2hpZnQoY29udGV4dCk7XG4gICAgdmFyIGV2ZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogZXZlbnRzLnNwbGl0KCcgJyk7XG4gICAgZXZlbnRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIFtldmVudF0uY29uY2F0KGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF9vblRvdWNoU3RhcnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29uVG91Y2hTdGFydFwiKSk7XG5cbnZhciBfb25Ub3VjaE1vdmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29uVG91Y2hNb3ZlXCIpKTtcblxudmFyIF9vblRvdWNoRW5kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vblRvdWNoRW5kXCIpKTtcblxudmFyIF9vblJlc2l6ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vb25SZXNpemVcIikpO1xuXG52YXIgX29uQ2xpY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29uQ2xpY2tcIikpO1xuXG52YXIgX29uU2Nyb2xsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vblNjcm9sbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkdW1teUV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHVtbXlFdmVudExpc3RlbmVyKCkge31cblxuZnVuY3Rpb24gYXR0YWNoRXZlbnRzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hFdmVudHMgPSBzd2lwZXIudG91Y2hFdmVudHMsXG4gICAgICBlbCA9IHN3aXBlci5lbCxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlLFxuICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gX29uVG91Y2hTdGFydC5kZWZhdWx0LmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hNb3ZlID0gX29uVG91Y2hNb3ZlLmRlZmF1bHQuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaEVuZCA9IF9vblRvdWNoRW5kLmRlZmF1bHQuYmluZChzd2lwZXIpO1xuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5vblNjcm9sbCA9IF9vblNjcm9sbC5kZWZhdWx0LmJpbmQoc3dpcGVyKTtcbiAgfVxuXG4gIHN3aXBlci5vbkNsaWNrID0gX29uQ2xpY2suZGVmYXVsdC5iaW5kKHN3aXBlcik7XG4gIHZhciBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkOyAvLyBUb3VjaCBFdmVudHNcblxuICBpZiAoIXN1cHBvcnQudG91Y2ggJiYgc3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3VwcG9ydC50b3VjaCkge1xuICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgICB9IDogZmFsc2U7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyID8ge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgY2FwdHVyZTogY2FwdHVyZVxuICAgICAgfSA6IGNhcHR1cmUpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuY2FuY2VsLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkdW1teUV2ZW50QXR0YWNoZWQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGR1bW15RXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIGR1bW15RXZlbnRBdHRhY2hlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFkZXZpY2UuaW9zICYmICFkZXZpY2UuYW5kcm9pZCB8fCBwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhc3VwcG9ydC50b3VjaCAmJiBkZXZpY2UuaW9zKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9IC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG5cblxuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH0gLy8gUmVzaXplIGhhbmRsZXJcblxuXG4gIGlmIChwYXJhbXMudXBkYXRlT25XaW5kb3dSZXNpemUpIHtcbiAgICBzd2lwZXIub24oZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIF9vblJlc2l6ZS5kZWZhdWx0LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIub24oJ29ic2VydmVyVXBkYXRlJywgX29uUmVzaXplLmRlZmF1bHQsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEV2ZW50cygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoRXZlbnRzID0gc3dpcGVyLnRvdWNoRXZlbnRzLFxuICAgICAgZWwgPSBzd2lwZXIuZWwsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgZGV2aWNlID0gc3dpcGVyLmRldmljZSxcbiAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgdmFyIGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7IC8vIFRvdWNoIEV2ZW50c1xuXG4gIGlmICghc3VwcG9ydC50b3VjaCAmJiBzdXBwb3J0LnBvaW50ZXJFdmVudHMpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzdXBwb3J0LnRvdWNoKSB7XG4gICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICdvblRvdWNoU3RhcnQnICYmIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICBjYXB0dXJlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmNhbmNlbCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFkZXZpY2UuaW9zICYmICFkZXZpY2UuYW5kcm9pZCB8fCBwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhc3VwcG9ydC50b3VjaCAmJiBkZXZpY2UuaW9zKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9IC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG5cblxuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH0gLy8gUmVzaXplIGhhbmRsZXJcblxuXG4gIHN3aXBlci5vZmYoZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIF9vblJlc2l6ZS5kZWZhdWx0KTtcbn1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBhdHRhY2hFdmVudHM6IGF0dGFjaEV2ZW50cyxcbiAgZGV0YWNoRXZlbnRzOiBkZXRhY2hFdmVudHNcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9uQ2xpY2s7XG5cbmZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gb25SZXNpemU7XG5cbmZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBlbCA9IHN3aXBlci5lbDtcbiAgaWYgKGVsICYmIGVsLm9mZnNldFdpZHRoID09PSAwKSByZXR1cm47IC8vIEJyZWFrcG9pbnRzXG5cbiAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gIH0gLy8gU2F2ZSBsb2Nrc1xuXG5cbiAgdmFyIGFsbG93U2xpZGVOZXh0ID0gc3dpcGVyLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXYgPSBzd2lwZXIuYWxsb3dTbGlkZVByZXYsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDsgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcblxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgfSAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG5cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gb25TY3JvbGw7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBydGxUcmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICBpZiAocnRsVHJhbnNsYXRlKSB7XG4gICAgICBzd2lwZXIudHJhbnNsYXRlID0gd3JhcHBlckVsLnNjcm9sbFdpZHRoIC0gd3JhcHBlckVsLm9mZnNldFdpZHRoIC0gd3JhcHBlckVsLnNjcm9sbExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbExlZnQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbFRvcDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gIGlmIChzd2lwZXIudHJhbnNsYXRlID09PSAtMCkgc3dpcGVyLnRyYW5zbGF0ZSA9IDA7XG4gIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB2YXIgbmV3UHJvZ3Jlc3M7XG4gIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcblxuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBuZXdQcm9ncmVzcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAoc3dpcGVyLnRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuXG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gc3dpcGVyLnByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHJ0bFRyYW5zbGF0ZSA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgZmFsc2UpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gb25Ub3VjaEVuZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gb25Ub3VjaEVuZChldmVudCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDtcbiAgdmFyIGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcblxuICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoRW5kJywgZSk7XG4gIH1cblxuICBkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MgPSBmYWxzZTtcblxuICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgaWYgKGRhdGEuaXNNb3ZlZCAmJiBwYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICAgIH1cblxuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH0gLy8gUmV0dXJuIEdyYWIgQ3Vyc29yXG5cblxuICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgZGF0YS5pc01vdmVkICYmIGRhdGEuaXNUb3VjaGVkICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgfSAvLyBUaW1lIGRpZmZcblxuXG4gIHZhciB0b3VjaEVuZFRpbWUgPSAoMCwgX3V0aWxzLm5vdykoKTtcbiAgdmFyIHRpbWVEaWZmID0gdG91Y2hFbmRUaW1lIC0gZGF0YS50b3VjaFN0YXJ0VGltZTsgLy8gVGFwLCBkb3VibGVUYXAsIENsaWNrXG5cbiAgaWYgKHN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUNsaWNrZWRTbGlkZShlKTtcbiAgICBzd2lwZXIuZW1pdCgndGFwIGNsaWNrJywgZSk7XG5cbiAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgdG91Y2hFbmRUaW1lIC0gZGF0YS5sYXN0Q2xpY2tUaW1lIDwgMzAwKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnZG91YmxlVGFwIGRvdWJsZUNsaWNrJywgZSk7XG4gICAgfVxuICB9XG5cbiAgZGF0YS5sYXN0Q2xpY2tUaW1lID0gKDAsIF91dGlscy5ub3cpKCk7XG4gICgwLCBfdXRpbHMubmV4dFRpY2spKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXN3aXBlci5kZXN0cm95ZWQpIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCB8fCAhZGF0YS5pc01vdmVkIHx8ICFzd2lwZXIuc3dpcGVEaXJlY3Rpb24gfHwgdG91Y2hlcy5kaWZmID09PSAwIHx8IGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9PT0gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gIHZhciBjdXJyZW50UG9zO1xuXG4gIGlmIChwYXJhbXMuZm9sbG93RmluZ2VyKSB7XG4gICAgY3VycmVudFBvcyA9IHJ0bCA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UG9zID0gLWRhdGEuY3VycmVudFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICBpZiAoY3VycmVudFBvcyA8IC1zd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQb3MgPiAtc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggPCBzbmFwR3JpZC5sZW5ndGgpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc25hcEdyaWQubGVuZ3RoIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtKSB7XG4gICAgICBpZiAoZGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIGxhc3RNb3ZlRXZlbnQgPSBkYXRhLnZlbG9jaXRpZXMucG9wKCk7XG4gICAgICAgIHZhciB2ZWxvY2l0eUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBsYXN0TW92ZUV2ZW50LnBvc2l0aW9uIC0gdmVsb2NpdHlFdmVudC5wb3NpdGlvbjtcbiAgICAgICAgdmFyIHRpbWUgPSBsYXN0TW92ZUV2ZW50LnRpbWUgLSB2ZWxvY2l0eUV2ZW50LnRpbWU7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IGRpc3RhbmNlIC8gdGltZTtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5IC89IDI7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgPCBwYXJhbXMuZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkpIHtcbiAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICB9IC8vIHRoaXMgaW1wbGllcyB0aGF0IHRoZSB1c2VyIHN0b3BwZWQgbW92aW5nIGEgZmluZ2VyIHRoZW4gcmVsZWFzZWQuXG4gICAgICAgIC8vIFRoZXJlIHdvdWxkIGJlIG5vIGV2ZW50cyB3aXRoIGRpc3RhbmNlIHplcm8sIHNvIHRoZSBsYXN0IGV2ZW50IGlzIHN0YWxlLlxuXG5cbiAgICAgICAgaWYgKHRpbWUgPiAxNTAgfHwgKDAsIF91dGlscy5ub3cpKCkgLSBsYXN0TW92ZUV2ZW50LnRpbWUgPiAzMDApIHtcbiAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIudmVsb2NpdHkgKj0gcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvO1xuICAgICAgZGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA9IDA7XG4gICAgICB2YXIgbW9tZW50dW1EdXJhdGlvbiA9IDEwMDAgKiBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bVJhdGlvO1xuICAgICAgdmFyIG1vbWVudHVtRGlzdGFuY2UgPSBzd2lwZXIudmVsb2NpdHkgKiBtb21lbnR1bUR1cmF0aW9uO1xuICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gc3dpcGVyLnRyYW5zbGF0ZSArIG1vbWVudHVtRGlzdGFuY2U7XG4gICAgICBpZiAocnRsKSBuZXdQb3NpdGlvbiA9IC1uZXdQb3NpdGlvbjtcbiAgICAgIHZhciBkb0JvdW5jZSA9IGZhbHNlO1xuICAgICAgdmFyIGFmdGVyQm91bmNlUG9zaXRpb247XG4gICAgICB2YXIgYm91bmNlQW1vdW50ID0gTWF0aC5hYnMoc3dpcGVyLnZlbG9jaXR5KSAqIDIwICogcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbztcbiAgICAgIHZhciBuZWVkc0xvb3BGaXg7XG5cbiAgICAgIGlmIChuZXdQb3NpdGlvbiA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24gKyBzd2lwZXIubWF4VHJhbnNsYXRlKCkgPCAtYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5sb29wICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlcykgbmVlZHNMb29wRml4ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24gPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpID4gYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSArIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5sb29wICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlcykgbmVlZHNMb29wRml4ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgIHZhciBuZXh0U2xpZGU7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzbmFwR3JpZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChzbmFwR3JpZFtqXSA+IC1uZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgbmV4dFNsaWRlID0gajtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzbmFwR3JpZFtuZXh0U2xpZGVdIC0gbmV3UG9zaXRpb24pIDwgTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlIC0gMV0gLSBuZXdQb3NpdGlvbikgfHwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHNuYXBHcmlkW25leHRTbGlkZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGUgLSAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1Bvc2l0aW9uID0gLW5ld1Bvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZHNMb29wRml4KSB7XG4gICAgICAgIHN3aXBlci5vbmNlKCd0cmFuc2l0aW9uRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBGaXggZHVyYXRpb25cblxuXG4gICAgICBpZiAoc3dpcGVyLnZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKC1uZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uIC0gc3dpcGVyLnRyYW5zbGF0ZSkgLyBzd2lwZXIudmVsb2NpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICAgIC8vIElmIGZyZWVNb2RlU3RpY2t5IGlzIGFjdGl2ZSBhbmQgdGhlIHVzZXIgZW5kcyBhIHN3aXBlIHdpdGggYSBzbG93LXZlbG9jaXR5XG4gICAgICAgICAgLy8gZXZlbnQsIHRoZW4gZHVyYXRpb25zIGNhbiBiZSAyMCsgc2Vjb25kcyB0byBzbGlkZSBvbmUgKG9yIHplcm8hKSBzbGlkZXMuXG4gICAgICAgICAgLy8gSXQncyBlYXN5IHRvIHNlZSB0aGlzIHdoZW4gc2ltdWxhdGluZyB0b3VjaCB3aXRoIG1vdXNlIGV2ZW50cy4gVG8gZml4IHRoaXMsXG4gICAgICAgICAgLy8gbGltaXQgc2luZ2xlLXNsaWRlIHN3aXBlcyB0byB0aGUgZGVmYXVsdCBzbGlkZSBkdXJhdGlvbi4gVGhpcyBhbHNvIGhhcyB0aGVcbiAgICAgICAgICAvLyBuaWNlIHNpZGUgZWZmZWN0IG9mIG1hdGNoaW5nIHNsaWRlIHNwZWVkIGlmIHRoZSB1c2VyIHN0b3BwZWQgbW92aW5nIGJlZm9yZVxuICAgICAgICAgIC8vIGxpZnRpbmcgZmluZ2VyIG9yIG1vdXNlIHZzLiBtb3Zpbmcgc2xvd2x5IGJlZm9yZSBsaWZ0aW5nIHRoZSBmaW5nZXIvbW91c2UuXG4gICAgICAgICAgLy8gRm9yIGZhc3RlciBzd2lwZXMsIGFsc28gYXBwbHkgbGltaXRzIChhbGJlaXQgaGlnaGVyIG9uZXMpLlxuICAgICAgICAgIHZhciBtb3ZlRGlzdGFuY2UgPSBNYXRoLmFicygocnRsID8gLW5ld1Bvc2l0aW9uIDogbmV3UG9zaXRpb24pIC0gc3dpcGVyLnRyYW5zbGF0ZSk7XG4gICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZVNpemUgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5hY3RpdmVJbmRleF07XG5cbiAgICAgICAgICBpZiAobW92ZURpc3RhbmNlIDwgY3VycmVudFNsaWRlU2l6ZSkge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVEaXN0YW5jZSA8IDIgKiBjdXJyZW50U2xpZGVTaXplKSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkICogMS41O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkICogMi41O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlICYmIGRvQm91bmNlKSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHRydWUsIHN3aXBlci5zd2lwZURpcmVjdGlvbik7XG4gICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIWRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdtb21lbnR1bUJvdW5jZScpO1xuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHBhcmFtcy5zcGVlZCk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzd2lwZXIudmVsb2NpdHkpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHRydWUsIHN3aXBlci5zd2lwZURpcmVjdGlvbik7XG5cbiAgICAgICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScpO1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3UG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy5mcmVlTW9kZU1vbWVudHVtIHx8IHRpbWVEaWZmID49IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcblxuXG4gIHZhciBzdG9wSW5kZXggPSAwO1xuICB2YXIgZ3JvdXBTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFswXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgIHZhciBfaW5jcmVtZW50ID0gaSA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldICYmIGN1cnJlbnRQb3MgPCBzbGlkZXNHcmlkW2kgKyBfaW5jcmVtZW50XSkge1xuICAgICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW2kgKyBfaW5jcmVtZW50XSAtIHNsaWRlc0dyaWRbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMl07XG4gICAgfVxuICB9IC8vIEZpbmQgY3VycmVudCBzbGlkZSBzaXplXG5cblxuICB2YXIgcmF0aW8gPSAoY3VycmVudFBvcyAtIHNsaWRlc0dyaWRbc3RvcEluZGV4XSkgLyBncm91cFNpemU7XG4gIHZhciBpbmNyZW1lbnQgPSBzdG9wSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgaWYgKHRpbWVEaWZmID4gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgIC8vIExvbmcgdG91Y2hlc1xuICAgIGlmICghcGFyYW1zLmxvbmdTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICBpZiAocmF0aW8gPj0gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtlbHNlIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICBpZiAocmF0aW8gPiAxIC0gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtlbHNlIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFNob3J0IHN3aXBlc1xuICAgIGlmICghcGFyYW1zLnNob3J0U3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc05hdkJ1dHRvblRhcmdldCA9IHN3aXBlci5uYXZpZ2F0aW9uICYmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsIHx8IGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwpO1xuXG4gICAgaWYgKCFpc05hdkJ1dHRvblRhcmdldCkge1xuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9uVG91Y2hNb3ZlO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gIHZhciBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLnN0YXJ0TW92aW5nICYmIGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmVPcHBvc2l0ZScsIGUpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBlLnR5cGUgIT09ICd0b3VjaG1vdmUnKSByZXR1cm47XG4gIHZhciB0YXJnZXRUb3VjaCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXNbMF0gfHwgZS5jaGFuZ2VkVG91Y2hlc1swXSk7XG4gIHZhciBwYWdlWCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyB0YXJnZXRUb3VjaC5wYWdlWCA6IGUucGFnZVg7XG4gIHZhciBwYWdlWSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyB0YXJnZXRUb3VjaC5wYWdlWSA6IGUucGFnZVk7XG5cbiAgaWYgKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpIHtcbiAgICB0b3VjaGVzLnN0YXJ0WCA9IHBhZ2VYO1xuICAgIHRvdWNoZXMuc3RhcnRZID0gcGFnZVk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICAvLyBpc01vdmVkID0gdHJ1ZTtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuXG4gICAgaWYgKGRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICAoMCwgX3V0aWxzLmV4dGVuZCkodG91Y2hlcywge1xuICAgICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgICBzdGFydFk6IHBhZ2VZLFxuICAgICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICAgIGN1cnJlbnRZOiBwYWdlWVxuICAgICAgfSk7XG4gICAgICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gKDAsIF91dGlscy5ub3cpKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAvLyBWZXJ0aWNhbFxuICAgICAgaWYgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVkgPiB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWCA+IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKDAsIF9kb20uZGVmYXVsdCkoZS50YXJnZXQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKSkge1xuICAgICAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmUnLCBlKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHJldHVybjtcbiAgdG91Y2hlcy5jdXJyZW50WCA9IHBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gcGFnZVk7XG4gIHZhciBkaWZmWCA9IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WDtcbiAgdmFyIGRpZmZZID0gdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICBpZiAoc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQgJiYgTWF0aC5zcXJ0KE1hdGgucG93KGRpZmZYLCAyKSArIE1hdGgucG93KGRpZmZZLCAyKSkgPCBzd2lwZXIucGFyYW1zLnRocmVzaG9sZCkgcmV0dXJuO1xuXG4gIGlmICh0eXBlb2YgZGF0YS5pc1Njcm9sbGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgdG91Y2hBbmdsZTtcblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgdG91Y2hlcy5jdXJyZW50WSA9PT0gdG91Y2hlcy5zdGFydFkgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRYID09PSB0b3VjaGVzLnN0YXJ0WCkge1xuICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmIChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSA+PSAyNSkge1xuICAgICAgICB0b3VjaEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlIDogOTAgLSB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGF0YS5zdGFydE1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodG91Y2hlcy5jdXJyZW50WCAhPT0gdG91Y2hlcy5zdGFydFggfHwgdG91Y2hlcy5jdXJyZW50WSAhPT0gdG91Y2hlcy5zdGFydFkpIHtcbiAgICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWRhdGEuc3RhcnRNb3ZpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuXG4gIGlmICghcGFyYW1zLmNzc01vZGUgJiYgZS5jYW5jZWxhYmxlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24gJiYgIXBhcmFtcy5uZXN0ZWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaWYgKCFkYXRhLmlzTW92ZWQpIHtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgfVxuXG4gICAgZGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcblxuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmlnZ2VyKCd3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnKTtcbiAgICB9XG5cbiAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSBmYWxzZTsgLy8gR3JhYiBDdXJzb3JcblxuICAgIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKHRydWUpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzbGlkZXJGaXJzdE1vdmUnLCBlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzbGlkZXJNb3ZlJywgZSk7XG4gIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gIHZhciBkaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZGlmZlggOiBkaWZmWTtcbiAgdG91Y2hlcy5kaWZmID0gZGlmZjtcbiAgZGlmZiAqPSBwYXJhbXMudG91Y2hSYXRpbztcbiAgaWYgKHJ0bCkgZGlmZiA9IC1kaWZmO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGlmZiArIGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIHZhciBkaXNhYmxlUGFyZW50U3dpcGVyID0gdHJ1ZTtcbiAgdmFyIHJlc2lzdGFuY2VSYXRpbyA9IHBhcmFtcy5yZXNpc3RhbmNlUmF0aW87XG5cbiAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgcmVzaXN0YW5jZVJhdGlvID0gMDtcbiAgfVxuXG4gIGlmIChkaWZmID4gMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgLSAxICsgTWF0aC5wb3coLXN3aXBlci5taW5UcmFuc2xhdGUoKSArIGRhdGEuc3RhcnRUcmFuc2xhdGUgKyBkaWZmLCByZXNpc3RhbmNlUmF0aW8pO1xuICB9IGVsc2UgaWYgKGRpZmYgPCAwICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSArIDEgLSBNYXRoLnBvdyhzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBkYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZiwgcmVzaXN0YW5jZVJhdGlvKTtcbiAgfVxuXG4gIGlmIChkaXNhYmxlUGFyZW50U3dpcGVyKSB7XG4gICAgZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciA9IHRydWU7XG4gIH0gLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmICFzd2lwZXIuYWxsb3dTbGlkZU5leHQpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9IC8vIFRocmVzaG9sZFxuXG5cbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgaWYgKE1hdGguYWJzKGRpZmYpID4gcGFyYW1zLnRocmVzaG9sZCB8fCBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgaWYgKCFkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICAgICAgdG91Y2hlcy5zdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZO1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICB0b3VjaGVzLmRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFggOiB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIXBhcmFtcy5mb2xsb3dGaW5nZXIgfHwgcGFyYW1zLmNzc01vZGUpIHJldHVybjsgLy8gVXBkYXRlIGFjdGl2ZSBpbmRleCBpbiBmcmVlIG1vZGVcblxuICBpZiAocGFyYW1zLmZyZWVNb2RlIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgIC8vIFZlbG9jaXR5XG4gICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRhdGEudmVsb2NpdGllcy5wdXNoKHtcbiAgICAgICAgcG9zaXRpb246IHRvdWNoZXNbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3N0YXJ0WCcgOiAnc3RhcnRZJ10sXG4gICAgICAgIHRpbWU6IGRhdGEudG91Y2hTdGFydFRpbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRhdGEudmVsb2NpdGllcy5wdXNoKHtcbiAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdjdXJyZW50WCcgOiAnY3VycmVudFknXSxcbiAgICAgIHRpbWU6ICgwLCBfdXRpbHMubm93KSgpXG4gICAgfSk7XG4gIH0gLy8gVXBkYXRlIHByb2dyZXNzXG5cblxuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTsgLy8gVXBkYXRlIHRyYW5zbGF0ZVxuXG4gIHN3aXBlci5zZXRUcmFuc2xhdGUoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9uVG91Y2hTdGFydDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICB2YXIgJHRhcmdldEVsID0gKDAsIF9kb20uZGVmYXVsdCkoZS50YXJnZXQpO1xuXG4gIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3Qoc3dpcGVyLndyYXBwZXJFbCkubGVuZ3RoKSByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA+IDApIHJldHVybjtcbiAgaWYgKGRhdGEuaXNUb3VjaGVkICYmIGRhdGEuaXNNb3ZlZCkgcmV0dXJuOyAvLyBjaGFuZ2UgdGFyZ2V0IGVsIGZvciBzaGFkb3cgcm9vdCBjb21wb25lbmV0XG5cbiAgdmFyIHN3aXBpbmdDbGFzc0hhc1ZhbHVlID0gISFwYXJhbXMubm9Td2lwaW5nQ2xhc3MgJiYgcGFyYW1zLm5vU3dpcGluZ0NsYXNzICE9PSAnJztcblxuICBpZiAoc3dpcGluZ0NsYXNzSGFzVmFsdWUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCAmJiBldmVudC5wYXRoICYmIGV2ZW50LnBhdGhbMF0pIHtcbiAgICAkdGFyZ2V0RWwgPSAoMCwgX2RvbS5kZWZhdWx0KShldmVudC5wYXRoWzBdKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubm9Td2lwaW5nICYmICR0YXJnZXRFbC5jbG9zZXN0KHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA/IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA6IFwiLlwiICsgcGFyYW1zLm5vU3dpcGluZ0NsYXNzKVswXSkge1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLnN3aXBlSGFuZGxlcikge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3QocGFyYW1zLnN3aXBlSGFuZGxlcilbMF0pIHJldHVybjtcbiAgfVxuXG4gIHRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gIHRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gIHZhciBzdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICB2YXIgc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTsgLy8gRG8gTk9UIHN0YXJ0IGlmIGlPUyBlZGdlIHN3aXBlIGlzIGRldGVjdGVkLiBPdGhlcndpc2UgaU9TIGFwcCBjYW5ub3Qgc3dpcGUtdG8tZ28tYmFjayBhbnltb3JlXG5cbiAgdmFyIGVkZ2VTd2lwZURldGVjdGlvbiA9IHBhcmFtcy5lZGdlU3dpcGVEZXRlY3Rpb24gfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZURldGVjdGlvbjtcbiAgdmFyIGVkZ2VTd2lwZVRocmVzaG9sZCA9IHBhcmFtcy5lZGdlU3dpcGVUaHJlc2hvbGQgfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZVRocmVzaG9sZDtcblxuICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uICYmIChzdGFydFggPD0gZWRnZVN3aXBlVGhyZXNob2xkIHx8IHN0YXJ0WCA+PSB3aW5kb3cuaW5uZXJXaWR0aCAtIGVkZ2VTd2lwZVRocmVzaG9sZCkpIHtcbiAgICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uID09PSAncHJldmVudCcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAoMCwgX3V0aWxzLmV4dGVuZCkoZGF0YSwge1xuICAgIGlzVG91Y2hlZDogdHJ1ZSxcbiAgICBpc01vdmVkOiBmYWxzZSxcbiAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB0cnVlLFxuICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZFxuICB9KTtcbiAgdG91Y2hlcy5zdGFydFggPSBzdGFydFg7XG4gIHRvdWNoZXMuc3RhcnRZID0gc3RhcnRZO1xuICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gKDAsIF91dGlscy5ub3cpKCk7XG4gIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gZmFsc2U7XG5cbiAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgdmFyIHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICBpZiAoJHRhcmdldEVsLmlzKGRhdGEuZm9ybUVsZW1lbnRzKSkgcHJldmVudERlZmF1bHQgPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICgwLCBfZG9tLmRlZmF1bHQpKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSAkdGFyZ2V0RWxbMF0pIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIHZhciBzaG91bGRQcmV2ZW50RGVmYXVsdCA9IHByZXZlbnREZWZhdWx0ICYmIHN3aXBlci5hbGxvd1RvdWNoTW92ZSAmJiBwYXJhbXMudG91Y2hTdGFydFByZXZlbnREZWZhdWx0O1xuXG4gICAgaWYgKChwYXJhbXMudG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQpICYmICEkdGFyZ2V0RWxbMF0uaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuZW1pdCgndG91Y2hTdGFydCcsIGUpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NldEdyYWJDdXJzb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NldEdyYWJDdXJzb3JcIikpO1xuXG52YXIgX3Vuc2V0R3JhYkN1cnNvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdW5zZXRHcmFiQ3Vyc29yXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBzZXRHcmFiQ3Vyc29yOiBfc2V0R3JhYkN1cnNvci5kZWZhdWx0LFxuICB1bnNldEdyYWJDdXJzb3I6IF91bnNldEdyYWJDdXJzb3IuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2V0R3JhYkN1cnNvcjtcblxuZnVuY3Rpb24gc2V0R3JhYkN1cnNvcihtb3ZpbmcpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIHZhciBlbCA9IHN3aXBlci5lbDtcbiAgZWwuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLXdlYmtpdC1ncmFiYmluZycgOiAnLXdlYmtpdC1ncmFiJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJy1tb3otZ3JhYmJpbicgOiAnLW1vei1ncmFiJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJ2dyYWJiaW5nJyA6ICdncmFiJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuc2V0R3JhYkN1cnNvcjtcblxuZnVuY3Rpb24gdW5zZXRHcmFiQ3Vyc29yKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBpZiAoc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzd2lwZXIuZWwuc3R5bGUuY3Vyc29yID0gJyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbG9hZEltYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkSW1hZ2VcIikpO1xuXG52YXIgX3ByZWxvYWRJbWFnZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ByZWxvYWRJbWFnZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGxvYWRJbWFnZTogX2xvYWRJbWFnZS5kZWZhdWx0LFxuICBwcmVsb2FkSW1hZ2VzOiBfcHJlbG9hZEltYWdlcy5kZWZhdWx0XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2FkSW1hZ2U7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbG9hZEltYWdlKGltYWdlRWwsIHNyYywgc3Jjc2V0LCBzaXplcywgY2hlY2tGb3JDb21wbGV0ZSwgY2FsbGJhY2spIHtcbiAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgdmFyIGltYWdlO1xuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICB9XG5cbiAgdmFyIGlzUGljdHVyZSA9ICgwLCBfZG9tLmRlZmF1bHQpKGltYWdlRWwpLnBhcmVudCgncGljdHVyZScpWzBdO1xuXG4gIGlmICghaXNQaWN0dXJlICYmICghaW1hZ2VFbC5jb21wbGV0ZSB8fCAhY2hlY2tGb3JDb21wbGV0ZSkpIHtcbiAgICBpZiAoc3JjKSB7XG4gICAgICBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IG9uUmVhZHk7XG4gICAgICBpbWFnZS5vbmVycm9yID0gb25SZWFkeTtcblxuICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgIGltYWdlLnNpemVzID0gc2l6ZXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAoc3JjKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb25SZWFkeSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpbWFnZSBhbHJlYWR5IGxvYWRlZC4uLlxuICAgIG9uUmVhZHkoKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcHJlbG9hZEltYWdlcztcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHN3aXBlci5pbWFnZXNUb0xvYWQgPSBzd2lwZXIuJGVsLmZpbmQoJ2ltZycpO1xuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCAhPT0gdW5kZWZpbmVkKSBzd2lwZXIuaW1hZ2VzTG9hZGVkICs9IDE7XG5cbiAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCA9PT0gc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVwZGF0ZU9uSW1hZ2VzUmVhZHkpIHN3aXBlci51cGRhdGUoKTtcbiAgICAgIHN3aXBlci5lbWl0KCdpbWFnZXNSZWFkeScpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBpbWFnZUVsID0gc3dpcGVyLmltYWdlc1RvTG9hZFtpXTtcbiAgICBzd2lwZXIubG9hZEltYWdlKGltYWdlRWwsIGltYWdlRWwuY3VycmVudFNyYyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc3JjJyksIGltYWdlRWwuc3Jjc2V0IHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSwgaW1hZ2VFbC5zaXplcyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc2l6ZXMnKSwgdHJ1ZSwgb25SZWFkeSk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9sb29wQ3JlYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb29wQ3JlYXRlXCIpKTtcblxudmFyIF9sb29wRml4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb29wRml4XCIpKTtcblxudmFyIF9sb29wRGVzdHJveSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9vcERlc3Ryb3lcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGxvb3BDcmVhdGU6IF9sb29wQ3JlYXRlLmRlZmF1bHQsXG4gIGxvb3BGaXg6IF9sb29wRml4LmRlZmF1bHQsXG4gIGxvb3BEZXN0cm95OiBfbG9vcERlc3Ryb3kuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9vcENyZWF0ZTtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9kb21cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBsb29wQ3JlYXRlKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsOyAvLyBSZW1vdmUgZHVwbGljYXRlZCBzbGlkZXNcblxuICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKS5yZW1vdmUoKTtcbiAgdmFyIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wRmlsbEdyb3VwV2l0aEJsYW5rKSB7XG4gICAgdmFyIGJsYW5rU2xpZGVzTnVtID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwIC0gc2xpZGVzLmxlbmd0aCAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICAgIGlmIChibGFua1NsaWRlc051bSAhPT0gcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsYW5rU2xpZGVzTnVtOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGJsYW5rTm9kZSA9ICgwLCBfZG9tLmRlZmF1bHQpKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlQmxhbmtDbGFzcyk7XG4gICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKGJsYW5rTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgIXBhcmFtcy5sb29wZWRTbGlkZXMpIHBhcmFtcy5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICBzd2lwZXIubG9vcGVkU2xpZGVzID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQocGFyYW1zLmxvb3BlZFNsaWRlcyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldywgMTApKTtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyArPSBwYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG5cbiAgaWYgKHN3aXBlci5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gIH1cblxuICB2YXIgcHJlcGVuZFNsaWRlcyA9IFtdO1xuICB2YXIgYXBwZW5kU2xpZGVzID0gW107XG4gIHNsaWRlcy5lYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICB2YXIgc2xpZGUgPSAoMCwgX2RvbS5kZWZhdWx0KShlbCk7XG5cbiAgICBpZiAoaW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzKSB7XG4gICAgICBhcHBlbmRTbGlkZXMucHVzaChlbCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgc2xpZGVzLmxlbmd0aCAmJiBpbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcykge1xuICAgICAgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICB9XG5cbiAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZCgoMCwgX2RvbS5kZWZhdWx0KShhcHBlbmRTbGlkZXNbX2ldLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgfVxuXG4gIGZvciAodmFyIF9pMiA9IHByZXBlbmRTbGlkZXMubGVuZ3RoIC0gMTsgX2kyID49IDA7IF9pMiAtPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5wcmVwZW5kKCgwLCBfZG9tLmRlZmF1bHQpKHByZXBlbmRTbGlkZXNbX2kyXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvb3BEZXN0cm95O1xuXG5mdW5jdGlvbiBsb29wRGVzdHJveSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiLC5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVCbGFua0NsYXNzKS5yZW1vdmUoKTtcbiAgc2xpZGVzLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBsb29wRml4O1xuXG5mdW5jdGlvbiBsb29wRml4KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgc3dpcGVyLmVtaXQoJ2JlZm9yZUxvb3BGaXgnKTtcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgIGxvb3BlZFNsaWRlcyA9IHN3aXBlci5sb29wZWRTbGlkZXMsXG4gICAgICBhbGxvd1NsaWRlUHJldiA9IHN3aXBlci5hbGxvd1NsaWRlUHJldixcbiAgICAgIGFsbG93U2xpZGVOZXh0ID0gc3dpcGVyLmFsbG93U2xpZGVOZXh0LFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICB2YXIgbmV3SW5kZXg7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IHRydWU7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gIHZhciBzbmFwVHJhbnNsYXRlID0gLXNuYXBHcmlkW2FjdGl2ZUluZGV4XTtcbiAgdmFyIGRpZmYgPSBzbmFwVHJhbnNsYXRlIC0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpOyAvLyBGaXggRm9yIE5lZ2F0aXZlIE92ZXJzbGlkaW5nXG5cbiAgaWYgKGFjdGl2ZUluZGV4IDwgbG9vcGVkU2xpZGVzKSB7XG4gICAgbmV3SW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gbG9vcGVkU2xpZGVzICogMyArIGFjdGl2ZUluZGV4O1xuICAgIG5ld0luZGV4ICs9IGxvb3BlZFNsaWRlcztcbiAgICB2YXIgc2xpZGVDaGFuZ2VkID0gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcblxuICAgIGlmIChzbGlkZUNoYW5nZWQgJiYgZGlmZiAhPT0gMCkge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSgocnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKSAtIGRpZmYpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVJbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gbG9vcGVkU2xpZGVzKSB7XG4gICAgLy8gRml4IEZvciBQb3NpdGl2ZSBPdmVyc2xpZGluZ1xuICAgIG5ld0luZGV4ID0gLXNsaWRlcy5sZW5ndGggKyBhY3RpdmVJbmRleCArIGxvb3BlZFNsaWRlcztcbiAgICBuZXdJbmRleCArPSBsb29wZWRTbGlkZXM7XG5cbiAgICB2YXIgX3NsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAoX3NsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9XG5cbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuICBzd2lwZXIuZW1pdCgnbG9vcEZpeCcpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkU2xpZGU7XG5cbmZ1bmN0aW9uIGFkZFNsaWRlKGluZGV4LCBzbGlkZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIHZhciBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG4gIH1cblxuICB2YXIgYmFzZUxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA8PSAwKSB7XG4gICAgc3dpcGVyLnByZXBlbmRTbGlkZShzbGlkZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBiYXNlTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmFwcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgMSA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuICB2YXIgc2xpZGVzQnVmZmVyID0gW107XG5cbiAgZm9yICh2YXIgaSA9IGJhc2VMZW5ndGggLSAxOyBpID49IGluZGV4OyBpIC09IDEpIHtcbiAgICB2YXIgY3VycmVudFNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICBjdXJyZW50U2xpZGUucmVtb3ZlKCk7XG4gICAgc2xpZGVzQnVmZmVyLnVuc2hpZnQoY3VycmVudFNsaWRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgc2xpZGVzLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tfaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tfaV0pO1xuICAgIH1cblxuICAgIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgc2xpZGVzLmxlbmd0aCA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuICB9IGVsc2Uge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzbGlkZXNCdWZmZXIubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc0J1ZmZlcltfaTJdKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXBwZW5kU2xpZGU7XG5cbmZ1bmN0aW9uIGFwcGVuZFNsaWRlKHNsaWRlcykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2FwcGVuZFNsaWRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hcHBlbmRTbGlkZVwiKSk7XG5cbnZhciBfcHJlcGVuZFNsaWRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wcmVwZW5kU2xpZGVcIikpO1xuXG52YXIgX2FkZFNsaWRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hZGRTbGlkZVwiKSk7XG5cbnZhciBfcmVtb3ZlU2xpZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlbW92ZVNsaWRlXCIpKTtcblxudmFyIF9yZW1vdmVBbGxTbGlkZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlbW92ZUFsbFNsaWRlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgYXBwZW5kU2xpZGU6IF9hcHBlbmRTbGlkZS5kZWZhdWx0LFxuICBwcmVwZW5kU2xpZGU6IF9wcmVwZW5kU2xpZGUuZGVmYXVsdCxcbiAgYWRkU2xpZGU6IF9hZGRTbGlkZS5kZWZhdWx0LFxuICByZW1vdmVTbGlkZTogX3JlbW92ZVNsaWRlLmRlZmF1bHQsXG4gIHJlbW92ZUFsbFNsaWRlczogX3JlbW92ZUFsbFNsaWRlcy5kZWZhdWx0XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBwcmVwZW5kU2xpZGU7XG5cbmZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldKSAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlbW92ZUFsbFNsaWRlcztcblxuZnVuY3Rpb24gcmVtb3ZlQWxsU2xpZGVzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHNsaWRlc0luZGV4ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gIH1cblxuICBzd2lwZXIucmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSByZW1vdmVTbGlkZTtcblxuZnVuY3Rpb24gcmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgdmFyIGFjdGl2ZUluZGV4QnVmZmVyID0gYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIuc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgfVxuXG4gIHZhciBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyO1xuICB2YXIgaW5kZXhUb1JlbW92ZTtcblxuICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlc0luZGV4ZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0luZGV4ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzW2ldO1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleCAtPSAxO1xuICAgIH1cblxuICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICB9IGVsc2Uge1xuICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzO1xuICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzd2lwZXIuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxudmFyIF9kZWZhdWx0ID0ge1xuICB1c2VQYXJhbXM6IGZ1bmN0aW9uIHVzZVBhcmFtcyhpbnN0YW5jZVBhcmFtcykge1xuICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG4gICAgaWYgKCFpbnN0YW5jZS5tb2R1bGVzKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoaW5zdGFuY2UubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGluc3RhbmNlLm1vZHVsZXNbbW9kdWxlTmFtZV07IC8vIEV4dGVuZCBwYXJhbXNcblxuICAgICAgaWYgKG1vZHVsZS5wYXJhbXMpIHtcbiAgICAgICAgKDAsIF91dGlscy5leHRlbmQpKGluc3RhbmNlUGFyYW1zLCBtb2R1bGUucGFyYW1zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdXNlTW9kdWxlczogZnVuY3Rpb24gdXNlTW9kdWxlcyhtb2R1bGVzUGFyYW1zKSB7XG4gICAgaWYgKG1vZHVsZXNQYXJhbXMgPT09IHZvaWQgMCkge1xuICAgICAgbW9kdWxlc1BhcmFtcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG4gICAgaWYgKCFpbnN0YW5jZS5tb2R1bGVzKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoaW5zdGFuY2UubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGluc3RhbmNlLm1vZHVsZXNbbW9kdWxlTmFtZV07XG4gICAgICB2YXIgbW9kdWxlUGFyYW1zID0gbW9kdWxlc1BhcmFtc1ttb2R1bGVOYW1lXSB8fCB7fTsgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICBpZiAobW9kdWxlLm9uICYmIGluc3RhbmNlLm9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5vbikuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlRXZlbnROYW1lKSB7XG4gICAgICAgICAgaW5zdGFuY2Uub24obW9kdWxlRXZlbnROYW1lLCBtb2R1bGUub25bbW9kdWxlRXZlbnROYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBNb2R1bGUgY3JlYXRlIGNhbGxiYWNrXG5cblxuICAgICAgaWYgKG1vZHVsZS5jcmVhdGUpIHtcbiAgICAgICAgbW9kdWxlLmNyZWF0ZS5iaW5kKGluc3RhbmNlKShtb2R1bGVQYXJhbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc2xpZGVUbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2xpZGVUb1wiKSk7XG5cbnZhciBfc2xpZGVUb0xvb3AgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NsaWRlVG9Mb29wXCIpKTtcblxudmFyIF9zbGlkZU5leHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NsaWRlTmV4dFwiKSk7XG5cbnZhciBfc2xpZGVQcmV2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zbGlkZVByZXZcIikpO1xuXG52YXIgX3NsaWRlUmVzZXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NsaWRlUmVzZXRcIikpO1xuXG52YXIgX3NsaWRlVG9DbG9zZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zbGlkZVRvQ2xvc2VzdFwiKSk7XG5cbnZhciBfc2xpZGVUb0NsaWNrZWRTbGlkZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2xpZGVUb0NsaWNrZWRTbGlkZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgc2xpZGVUbzogX3NsaWRlVG8uZGVmYXVsdCxcbiAgc2xpZGVUb0xvb3A6IF9zbGlkZVRvTG9vcC5kZWZhdWx0LFxuICBzbGlkZU5leHQ6IF9zbGlkZU5leHQuZGVmYXVsdCxcbiAgc2xpZGVQcmV2OiBfc2xpZGVQcmV2LmRlZmF1bHQsXG4gIHNsaWRlUmVzZXQ6IF9zbGlkZVJlc2V0LmRlZmF1bHQsXG4gIHNsaWRlVG9DbG9zZXN0OiBfc2xpZGVUb0Nsb3Nlc3QuZGVmYXVsdCxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogX3NsaWRlVG9DbGlja2VkU2xpZGUuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2xpZGVOZXh0O1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlTmV4dChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgYW5pbWF0aW5nID0gc3dpcGVyLmFuaW1hdGluZztcbiAgdmFyIGluY3JlbWVudCA9IHN3aXBlci5hY3RpdmVJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcgJiYgcGFyYW1zLmxvb3BQcmV2ZW50c1NsaWRlKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICB9XG5cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIGluY3JlbWVudCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2xpZGVQcmV2O1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlUHJldihzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgYW5pbWF0aW5nID0gc3dpcGVyLmFuaW1hdGluZyxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgcnRsVHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGUgPSBydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbCkge1xuICAgIGlmICh2YWwgPCAwKSByZXR1cm4gLU1hdGguZmxvb3IoTWF0aC5hYnModmFsKSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodmFsKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkVHJhbnNsYXRlID0gbm9ybWFsaXplKHRyYW5zbGF0ZSk7XG4gIHZhciBub3JtYWxpemVkU25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiBub3JtYWxpemUodmFsKTtcbiAgfSk7XG4gIHZhciBjdXJyZW50U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpXTtcbiAgdmFyIHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwID09PSAndW5kZWZpbmVkJyAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgIHNuYXBHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgIGlmICghcHJldlNuYXAgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBzbmFwKSBwcmV2U25hcCA9IHNuYXA7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcHJldkluZGV4O1xuXG4gIGlmICh0eXBlb2YgcHJldlNuYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJldkluZGV4ID0gc2xpZGVzR3JpZC5pbmRleE9mKHByZXZTbmFwKTtcbiAgICBpZiAocHJldkluZGV4IDwgMCkgcHJldkluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMTtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhwcmV2SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNsaWRlUmVzZXQ7XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVSZXNldChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNsaWRlVG87XG5cbmZ1bmN0aW9uIHNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInICYmIHR5cGVvZiBpbmRleCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ2luZGV4JyBhcmd1bWVudCBjYW5ub3QgaGF2ZSB0eXBlIG90aGVyIHRoYW4gJ251bWJlcicgb3IgJ3N0cmluZycuIFtcIiArIHR5cGVvZiBpbmRleCArIFwiXSBnaXZlbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIC8qKlxuICAgICAqIFRoZSBgaW5kZXhgIGFyZ3VtZW50IGNvbnZlcnRlZCBmcm9tIGBzdHJpbmdgIHRvIGBudW1iZXJgLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdmFyIGluZGV4QXNOdW1iZXIgPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYGluZGV4YCBhcmd1bWVudCBpcyBhIHZhbGlkIGBudW1iZXJgXG4gICAgICogYWZ0ZXIgYmVpbmcgY29udmVydGVkIGZyb20gdGhlIGBzdHJpbmdgIHR5cGUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgICB2YXIgaXNWYWxpZE51bWJlciA9IGlzRmluaXRlKGluZGV4QXNOdW1iZXIpO1xuXG4gICAgaWYgKCFpc1ZhbGlkTnVtYmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGFzc2VkLWluICdpbmRleCcgKHN0cmluZykgY291bGRuJ3QgYmUgY29udmVydGVkIHRvICdudW1iZXInLiBbXCIgKyBpbmRleCArIFwiXSBnaXZlbi5cIik7XG4gICAgfSAvLyBLbm93aW5nIHRoYXQgdGhlIGNvbnZlcnRlZCBgaW5kZXhgIGlzIGEgdmFsaWQgbnVtYmVyLFxuICAgIC8vIHdlIGNhbiB1cGRhdGUgdGhlIG9yaWdpbmFsIGFyZ3VtZW50J3MgdmFsdWUuXG5cblxuICAgIGluZGV4ID0gaW5kZXhBc051bWJlcjtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVJbmRleCA9IGluZGV4O1xuICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSAwO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4LFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbDtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgc2xpZGVJbmRleCk7XG4gIHZhciBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoc2xpZGVJbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmICgoYWN0aXZlSW5kZXggfHwgcGFyYW1zLmluaXRpYWxTbGlkZSB8fCAwKSA9PT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGUgPSAtc25hcEdyaWRbc25hcEluZGV4XTsgLy8gVXBkYXRlIHByb2dyZXNzXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IC1NYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCk7XG4gICAgICB2YXIgbm9ybWFsaXplZEdpcmQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaV0gKiAxMDApO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRHcmlkTmV4dCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpICsgMV0gKiAxMDApO1xuXG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0IC0gKG5vcm1hbGl6ZWRHcmlkTmV4dCAtIG5vcm1hbGl6ZWRHaXJkKSAvIDIpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHaXJkICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPCBub3JtYWxpemVkR3JpZE5leHQpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgdHJhbnNsYXRlID4gc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmICgoYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXgpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uO1xuICBpZiAoc2xpZGVJbmRleCA+IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAnbmV4dCc7ZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAncHJldic7ZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnOyAvLyBVcGRhdGUgSW5kZXhcblxuICBpZiAocnRsICYmIC10cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUgfHwgIXJ0bCAmJiB0cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7IC8vIFVwZGF0ZSBIZWlnaHRcblxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgaWYgKHBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB2YXIgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIHZhciB0ID0gLXRyYW5zbGF0ZTtcblxuICAgIGlmIChydGwpIHtcbiAgICAgIHQgPSB3cmFwcGVyRWwuc2Nyb2xsV2lkdGggLSB3cmFwcGVyRWwub2Zmc2V0V2lkdGggLSB0O1xuICAgIH1cblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICB2YXIgX3dyYXBwZXJFbCRzY3JvbGxUbztcblxuICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKF93cmFwcGVyRWwkc2Nyb2xsVG8gPSB7fSwgX3dyYXBwZXJFbCRzY3JvbGxUb1tpc0ggPyAnbGVmdCcgOiAndG9wJ10gPSB0LCBfd3JhcHBlckVsJHNjcm9sbFRvLmJlaGF2aW9yID0gJ3Ntb290aCcsIF93cmFwcGVyRWwkc2Nyb2xsVG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzbGlkZVRvQ2xpY2tlZFNsaWRlO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNsaWRlVG9DbGlja2VkU2xpZGUoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgdmFyIHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgdmFyIHNsaWRlVG9JbmRleCA9IHN3aXBlci5jbGlja2VkSW5kZXg7XG4gIHZhciByZWFsSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHJldHVybjtcbiAgICByZWFsSW5kZXggPSBwYXJzZUludCgoMCwgX2RvbS5kZWZhdWx0KShzd2lwZXIuY2xpY2tlZFNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG5cbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBpZiAoc2xpZGVUb0luZGV4IDwgc3dpcGVyLmxvb3BlZFNsaWRlcyAtIHNsaWRlc1BlclZpZXcgLyAyIHx8IHNsaWRlVG9JbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcyArIHNsaWRlc1BlclZpZXcgLyAyKSB7XG4gICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIHNsaWRlVG9JbmRleCA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl06bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpXCIpLmVxKDApLmluZGV4KCk7XG4gICAgICAgICgwLCBfdXRpbHMubmV4dFRpY2spKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzbGlkZVRvSW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHNsaWRlc1BlclZpZXcpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgKDAsIF91dGlscy5uZXh0VGljaykoZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNsaWRlVG9DbG9zZXN0O1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlVG9DbG9zZXN0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsLCB0aHJlc2hvbGQpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgIHRocmVzaG9sZCA9IDAuNTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIHZhciBza2lwID0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGluZGV4KTtcbiAgdmFyIHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChpbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIHZhciB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuXG4gIGlmICh0cmFuc2xhdGUgPj0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF0pIHtcbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgb24gb3IgYWZ0ZXIgdGhlIGN1cnJlbnQgc25hcCBpbmRleCwgc28gdGhlIGNob2ljZVxuICAgIC8vIGlzIGJldHdlZW4gdGhlIGN1cnJlbnQgaW5kZXggYW5kIHRoZSBvbmUgYWZ0ZXIgaXQuXG4gICAgdmFyIGN1cnJlbnRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF07XG4gICAgdmFyIG5leHRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCArIDFdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZSAtIGN1cnJlbnRTbmFwID4gKG5leHRTbmFwIC0gY3VycmVudFNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCArPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgYmVmb3JlIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGJlZm9yZSBpdC5cbiAgICB2YXIgcHJldlNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4IC0gMV07XG4gICAgdmFyIF9jdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZSAtIHByZXZTbmFwIDw9IChfY3VycmVudFNuYXAgLSBwcmV2U25hcCkgKiB0aHJlc2hvbGQpIHtcbiAgICAgIGluZGV4IC09IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgfVxuICB9XG5cbiAgaW5kZXggPSBNYXRoLm1heChpbmRleCwgMCk7XG4gIGluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNsaWRlVG9Mb29wO1xuXG5mdW5jdGlvbiBzbGlkZVRvTG9vcChpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cblxuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBuZXdJbmRleCA9IGluZGV4O1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBuZXdJbmRleCArPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICB9XG5cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc2V0VHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2V0VHJhbnNpdGlvblwiKSk7XG5cbnZhciBfdHJhbnNpdGlvblN0YXJ0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi90cmFuc2l0aW9uU3RhcnRcIikpO1xuXG52YXIgX3RyYW5zaXRpb25FbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RyYW5zaXRpb25FbmRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIHNldFRyYW5zaXRpb246IF9zZXRUcmFuc2l0aW9uLmRlZmF1bHQsXG4gIHRyYW5zaXRpb25TdGFydDogX3RyYW5zaXRpb25TdGFydC5kZWZhdWx0LFxuICB0cmFuc2l0aW9uRW5kOiBfdHJhbnNpdGlvbkVuZC5kZWZhdWx0XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzZXRUcmFuc2l0aW9uO1xuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKCFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2l0aW9uJywgZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uRW5kO1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4LFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gIHZhciBkaXIgPSBkaXJlY3Rpb247XG5cbiAgaWYgKCFkaXIpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPiBwcmV2aW91c0luZGV4KSBkaXIgPSAnbmV4dCc7ZWxzZSBpZiAoYWN0aXZlSW5kZXggPCBwcmV2aW91c0luZGV4KSBkaXIgPSAncHJldic7ZWxzZSBkaXIgPSAncmVzZXQnO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcblxuICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uRW5kJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcpO1xuXG4gICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvblN0YXJ0O1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4O1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcblxuICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICB9XG5cbiAgdmFyIGRpciA9IGRpcmVjdGlvbjtcblxuICBpZiAoIWRpcikge1xuICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpIGRpciA9ICduZXh0JztlbHNlIGlmIChhY3RpdmVJbmRleCA8IHByZXZpb3VzSW5kZXgpIGRpciA9ICdwcmV2JztlbHNlIGRpciA9ICdyZXNldCc7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBhY3RpdmVJbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChkaXIgPT09ICdyZXNldCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVJlc2V0VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0Jyk7XG5cbiAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUHJldlRyYW5zaXRpb25TdGFydCcpO1xuICAgIH1cbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0U3dpcGVyVHJhbnNsYXRlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBnZXRTd2lwZXJUcmFuc2xhdGUoYXhpcykge1xuICBpZiAoYXhpcyA9PT0gdm9pZCAwKSB7XG4gICAgYXhpcyA9IHRoaXMuaXNIb3Jpem9udGFsKCkgPyAneCcgOiAneSc7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgdHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZSxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcblxuICBpZiAocGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICByZXR1cm4gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybiB0cmFuc2xhdGU7XG4gIH1cblxuICB2YXIgY3VycmVudFRyYW5zbGF0ZSA9ICgwLCBfdXRpbHMuZ2V0VHJhbnNsYXRlKSgkd3JhcHBlckVsWzBdLCBheGlzKTtcbiAgaWYgKHJ0bCkgY3VycmVudFRyYW5zbGF0ZSA9IC1jdXJyZW50VHJhbnNsYXRlO1xuICByZXR1cm4gY3VycmVudFRyYW5zbGF0ZSB8fCAwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2dldFRyYW5zbGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0VHJhbnNsYXRlXCIpKTtcblxudmFyIF9zZXRUcmFuc2xhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NldFRyYW5zbGF0ZVwiKSk7XG5cbnZhciBfbWluVHJhbnNsYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9taW5UcmFuc2xhdGVcIikpO1xuXG52YXIgX21heFRyYW5zbGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4VHJhbnNsYXRlXCIpKTtcblxudmFyIF90cmFuc2xhdGVUbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdHJhbnNsYXRlVG9cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGdldFRyYW5zbGF0ZTogX2dldFRyYW5zbGF0ZS5kZWZhdWx0LFxuICBzZXRUcmFuc2xhdGU6IF9zZXRUcmFuc2xhdGUuZGVmYXVsdCxcbiAgbWluVHJhbnNsYXRlOiBfbWluVHJhbnNsYXRlLmRlZmF1bHQsXG4gIG1heFRyYW5zbGF0ZTogX21heFRyYW5zbGF0ZS5kZWZhdWx0LFxuICB0cmFuc2xhdGVUbzogX3RyYW5zbGF0ZVRvLmRlZmF1bHRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1heFRyYW5zbGF0ZTtcblxuZnVuY3Rpb24gbWF4VHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1pblRyYW5zbGF0ZTtcblxuZnVuY3Rpb24gbWluVHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbMF07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzZXRUcmFuc2xhdGU7XG5cbmZ1bmN0aW9uIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzO1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDtcbiAgdmFyIHogPSAwO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICB4ID0gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB5ID0gdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAteCA6IC15O1xuICB9IGVsc2UgaWYgKCFwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgICR3cmFwcGVyRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgXCIgKyB6ICsgXCJweClcIik7XG4gIH1cblxuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7IC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG5cbiAgdmFyIG5ld1Byb2dyZXNzO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuXG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNsYXRlVG87XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVRvKHRyYW5zbGF0ZSwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgdHJhbnNsYXRlQm91bmRzLCBpbnRlcm5hbCkge1xuICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGUgPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZUJvdW5kcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICB2YXIgbWF4VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICB2YXIgbmV3VHJhbnNsYXRlO1xuICBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA+IG1pblRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWluVHJhbnNsYXRlO2Vsc2UgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPCBtYXhUcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1heFRyYW5zbGF0ZTtlbHNlIG5ld1RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTsgLy8gVXBkYXRlIHByb2dyZXNzXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1RyYW5zbGF0ZSk7XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgdmFyIGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICB2YXIgX3dyYXBwZXJFbCRzY3JvbGxUbztcblxuICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKF93cmFwcGVyRWwkc2Nyb2xsVG8gPSB7fSwgX3dyYXBwZXJFbCRzY3JvbGxUb1tpc0ggPyAnbGVmdCcgOiAndG9wJ10gPSAtbmV3VHJhbnNsYXRlLCBfd3JhcHBlckVsJHNjcm9sbFRvLmJlaGF2aW9yID0gJ3Ntb290aCcsIF93cmFwcGVyRWwkc2Nyb2xsVG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcblxuICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdXBkYXRlU2l6ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXBkYXRlU2l6ZVwiKSk7XG5cbnZhciBfdXBkYXRlU2xpZGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cGRhdGVTbGlkZXNcIikpO1xuXG52YXIgX3VwZGF0ZUF1dG9IZWlnaHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VwZGF0ZUF1dG9IZWlnaHRcIikpO1xuXG52YXIgX3VwZGF0ZVNsaWRlc09mZnNldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXBkYXRlU2xpZGVzT2Zmc2V0XCIpKTtcblxudmFyIF91cGRhdGVTbGlkZXNQcm9ncmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXBkYXRlU2xpZGVzUHJvZ3Jlc3NcIikpO1xuXG52YXIgX3VwZGF0ZVByb2dyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cGRhdGVQcm9ncmVzc1wiKSk7XG5cbnZhciBfdXBkYXRlU2xpZGVzQ2xhc3NlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXBkYXRlU2xpZGVzQ2xhc3Nlc1wiKSk7XG5cbnZhciBfdXBkYXRlQWN0aXZlSW5kZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VwZGF0ZUFjdGl2ZUluZGV4XCIpKTtcblxudmFyIF91cGRhdGVDbGlja2VkU2xpZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VwZGF0ZUNsaWNrZWRTbGlkZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgdXBkYXRlU2l6ZTogX3VwZGF0ZVNpemUuZGVmYXVsdCxcbiAgdXBkYXRlU2xpZGVzOiBfdXBkYXRlU2xpZGVzLmRlZmF1bHQsXG4gIHVwZGF0ZUF1dG9IZWlnaHQ6IF91cGRhdGVBdXRvSGVpZ2h0LmRlZmF1bHQsXG4gIHVwZGF0ZVNsaWRlc09mZnNldDogX3VwZGF0ZVNsaWRlc09mZnNldC5kZWZhdWx0LFxuICB1cGRhdGVTbGlkZXNQcm9ncmVzczogX3VwZGF0ZVNsaWRlc1Byb2dyZXNzLmRlZmF1bHQsXG4gIHVwZGF0ZVByb2dyZXNzOiBfdXBkYXRlUHJvZ3Jlc3MuZGVmYXVsdCxcbiAgdXBkYXRlU2xpZGVzQ2xhc3NlczogX3VwZGF0ZVNsaWRlc0NsYXNzZXMuZGVmYXVsdCxcbiAgdXBkYXRlQWN0aXZlSW5kZXg6IF91cGRhdGVBY3RpdmVJbmRleC5kZWZhdWx0LFxuICB1cGRhdGVDbGlja2VkU2xpZGU6IF91cGRhdGVDbGlja2VkU2xpZGUuZGVmYXVsdFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlQWN0aXZlSW5kZXg7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgdmFyIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBwcmV2aW91c1JlYWxJbmRleCA9IHN3aXBlci5yZWFsSW5kZXgsXG4gICAgICBwcmV2aW91c1NuYXBJbmRleCA9IHN3aXBlci5zbmFwSW5kZXg7XG4gIHZhciBhY3RpdmVJbmRleCA9IG5ld0FjdGl2ZUluZGV4O1xuICB2YXIgc25hcEluZGV4O1xuXG4gIGlmICh0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0gLSAoc2xpZGVzR3JpZFtpICsgMV0gLSBzbGlkZXNHcmlkW2ldKSAvIDIpIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cblxuICAgIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgICAgaWYgKGFjdGl2ZUluZGV4IDwgMCB8fCB0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgc25hcEluZGV4ID0gc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBza2lwID0gTWF0aC5taW4ocGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgYWN0aXZlSW5kZXgpO1xuICAgIHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChhY3RpdmVJbmRleCAtIHNraXApIC8gcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgfVxuXG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmIChhY3RpdmVJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChzbmFwSW5kZXggIT09IHByZXZpb3VzU25hcEluZGV4KSB7XG4gICAgICBzd2lwZXIuc25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSAvLyBHZXQgcmVhbCBpbmRleFxuXG5cbiAgdmFyIHJlYWxJbmRleCA9IHBhcnNlSW50KHN3aXBlci5zbGlkZXMuZXEoYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgfHwgYWN0aXZlSW5kZXgsIDEwKTtcbiAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlciwge1xuICAgIHNuYXBJbmRleDogc25hcEluZGV4LFxuICAgIHJlYWxJbmRleDogcmVhbEluZGV4LFxuICAgIHByZXZpb3VzSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4XG4gIH0pO1xuICBzd2lwZXIuZW1pdCgnYWN0aXZlSW5kZXhDaGFuZ2UnKTtcbiAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuXG4gIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWxJbmRleENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCB8fCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZScpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB1cGRhdGVBdXRvSGVpZ2h0O1xuXG5mdW5jdGlvbiB1cGRhdGVBdXRvSGVpZ2h0KHNwZWVkKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgYWN0aXZlU2xpZGVzID0gW107XG4gIHZhciBuZXdIZWlnaHQgPSAwO1xuICB2YXIgaTtcblxuICBpZiAodHlwZW9mIHNwZWVkID09PSAnbnVtYmVyJykge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgfSBlbHNlIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICB9IC8vIEZpbmQgc2xpZGVzIGN1cnJlbnRseSBpbiB2aWV3XG5cblxuICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4ICsgaTtcbiAgICAgICAgaWYgKGluZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzd2lwZXIuc2xpZGVzLmVxKGluZGV4KVswXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KVswXSk7XG4gIH0gLy8gRmluZCBuZXcgaGVpZ2h0IGZyb20gaGlnaGVzdCBzbGlkZSBpbiB2aWV3XG5cblxuICBmb3IgKGkgPSAwOyBpIDwgYWN0aXZlU2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhY3RpdmVTbGlkZXNbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gYWN0aXZlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld0hlaWdodCA9IGhlaWdodCA+IG5ld0hlaWdodCA/IGhlaWdodCA6IG5ld0hlaWdodDtcbiAgICB9XG4gIH0gLy8gVXBkYXRlIEhlaWdodFxuXG5cbiAgaWYgKG5ld0hlaWdodCkgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdoZWlnaHQnLCBuZXdIZWlnaHQgKyBcInB4XCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlQ2xpY2tlZFNsaWRlO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsaWNrZWRTbGlkZShlKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHNsaWRlID0gKDAsIF9kb20uZGVmYXVsdCkoZS50YXJnZXQpLmNsb3Nlc3QoXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcylbMF07XG4gIHZhciBzbGlkZUZvdW5kID0gZmFsc2U7XG4gIHZhciBzbGlkZUluZGV4O1xuXG4gIGlmIChzbGlkZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaV0gPT09IHNsaWRlKSB7XG4gICAgICAgIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNsaWRlICYmIHNsaWRlRm91bmQpIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gc2xpZGU7XG5cbiAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBwYXJzZUludCgoMCwgX2RvbS5kZWZhdWx0KShzbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gc2xpZGVJbmRleDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgc3dpcGVyLnNsaWRlVG9DbGlja2VkU2xpZGUoKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlUHJvZ3Jlc3M7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbXVsdGlwbGllciA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtMSA6IDE7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgdHJhbnNsYXRlID0gc3dpcGVyICYmIHN3aXBlci50cmFuc2xhdGUgJiYgc3dpcGVyLnRyYW5zbGF0ZSAqIG11bHRpcGxpZXIgfHwgMDtcbiAgfVxuXG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIHZhciBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcyxcbiAgICAgIGlzQmVnaW5uaW5nID0gc3dpcGVyLmlzQmVnaW5uaW5nLFxuICAgICAgaXNFbmQgPSBzd2lwZXIuaXNFbmQ7XG4gIHZhciB3YXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZztcbiAgdmFyIHdhc0VuZCA9IGlzRW5kO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIHByb2dyZXNzID0gMDtcbiAgICBpc0JlZ2lubmluZyA9IHRydWU7XG4gICAgaXNFbmQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgICBpc0JlZ2lubmluZyA9IHByb2dyZXNzIDw9IDA7XG4gICAgaXNFbmQgPSBwcm9ncmVzcyA+PSAxO1xuICB9XG5cbiAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlciwge1xuICAgIHByb2dyZXNzOiBwcm9ncmVzcyxcbiAgICBpc0JlZ2lubmluZzogaXNCZWdpbm5pbmcsXG4gICAgaXNFbmQ6IGlzRW5kXG4gIH0pO1xuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSB8fCBwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmF1dG9IZWlnaHQpIHN3aXBlci51cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpO1xuXG4gIGlmIChpc0JlZ2lubmluZyAmJiAhd2FzQmVnaW5uaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoQmVnaW5uaW5nIHRvRWRnZScpO1xuICB9XG5cbiAgaWYgKGlzRW5kICYmICF3YXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gIH1cblxuICBpZiAod2FzQmVnaW5uaW5nICYmICFpc0JlZ2lubmluZyB8fCB3YXNFbmQgJiYgIWlzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2Zyb21FZGdlJyk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgncHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB1cGRhdGVTaXplO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVTaXplKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHdpZHRoO1xuICB2YXIgaGVpZ2h0O1xuICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMud2lkdGggIT09IG51bGwpIHtcbiAgICB3aWR0aCA9IHN3aXBlci5wYXJhbXMud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAkZWxbMF0uY2xpZW50V2lkdGg7XG4gIH1cblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gbnVsbCkge1xuICAgIGhlaWdodCA9IHN3aXBlci5wYXJhbXMuaGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBpZiAod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiBzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIFN1YnRyYWN0IHBhZGRpbmdzXG5cblxuICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1sZWZ0JykgfHwgMCwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbiAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy10b3AnKSB8fCAwLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpIHx8IDAsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTih3aWR0aCkpIHdpZHRoID0gMDtcbiAgaWYgKE51bWJlci5pc05hTihoZWlnaHQpKSBoZWlnaHQgPSAwO1xuICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLCB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHNpemU6IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHdpZHRoIDogaGVpZ2h0XG4gIH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlU2xpZGVzO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gIHZhciBnZXREaXJlY3Rpb25MYWJlbCA9IGZ1bmN0aW9uIGdldERpcmVjdGlvbkxhYmVsKHByb3BlcnR5KSB7XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0gLy8gcHJldHRpZXItaWdub3JlXG5cblxuICAgIHJldHVybiB7XG4gICAgICAnd2lkdGgnOiAnaGVpZ2h0JyxcbiAgICAgICdtYXJnaW4tdG9wJzogJ21hcmdpbi1sZWZ0JyxcbiAgICAgICdtYXJnaW4tYm90dG9tICc6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgJ21hcmdpbi1sZWZ0JzogJ21hcmdpbi10b3AnLFxuICAgICAgJ21hcmdpbi1yaWdodCc6ICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICdwYWRkaW5nLWxlZnQnOiAncGFkZGluZy10b3AnLFxuICAgICAgJ3BhZGRpbmctcmlnaHQnOiAncGFkZGluZy1ib3R0b20nLFxuICAgICAgJ21hcmdpblJpZ2h0JzogJ21hcmdpbkJvdHRvbSdcbiAgICB9W3Byb3BlcnR5XTtcbiAgfTtcblxuICB2YXIgZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUobm9kZSwgbGFiZWwpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChub2RlLmdldFByb3BlcnR5VmFsdWUoZ2V0RGlyZWN0aW9uTGFiZWwobGFiZWwpKSB8fCAwKTtcbiAgfTtcblxuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZSxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICB3cm9uZ1JUTCA9IHN3aXBlci53cm9uZ1JUTDtcbiAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHZhciBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgdmFyIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICB2YXIgc2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHNsaWRlcy5sZW5ndGg7XG4gIHZhciBzbmFwR3JpZCA9IFtdO1xuICB2YXIgc2xpZGVzR3JpZCA9IFtdO1xuICB2YXIgc2xpZGVzU2l6ZXNHcmlkID0gW107XG5cbiAgZnVuY3Rpb24gc2xpZGVzRm9yTWFyZ2luKHNsaWRlRWwsIHNsaWRlSW5kZXgpIHtcbiAgICBpZiAoIXBhcmFtcy5jc3NNb2RlKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmIChzbGlkZUluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmU7XG5cbiAgaWYgKHR5cGVvZiBvZmZzZXRCZWZvcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIHZhciBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcblxuICBpZiAodHlwZW9mIG9mZnNldEFmdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIuY2FsbChzd2lwZXIpO1xuICB9XG5cbiAgdmFyIHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICB2YXIgcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoID0gc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoO1xuICB2YXIgc3BhY2VCZXR3ZWVuID0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgdmFyIHNsaWRlUG9zaXRpb24gPSAtb2Zmc2V0QmVmb3JlO1xuICB2YXIgcHJldlNsaWRlU2l6ZSA9IDA7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgaWYgKHR5cGVvZiBzd2lwZXJTaXplID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJyAmJiBzcGFjZUJldHdlZW4uaW5kZXhPZignJScpID49IDApIHtcbiAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbi5yZXBsYWNlKCclJywgJycpKSAvIDEwMCAqIHN3aXBlclNpemU7XG4gIH1cblxuICBzd2lwZXIudmlydHVhbFNpemUgPSAtc3BhY2VCZXR3ZWVuOyAvLyByZXNldCBtYXJnaW5zXG5cbiAgaWYgKHJ0bCkgc2xpZGVzLmNzcyh7XG4gICAgbWFyZ2luTGVmdDogJycsXG4gICAgbWFyZ2luVG9wOiAnJ1xuICB9KTtlbHNlIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpblJpZ2h0OiAnJyxcbiAgICBtYXJnaW5Cb3R0b206ICcnXG4gIH0pO1xuICB2YXIgc2xpZGVzTnVtYmVyRXZlblRvUm93cztcblxuICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICBpZiAoTWF0aC5mbG9vcihzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSA9PT0gc2xpZGVzTGVuZ3RoIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBzbGlkZXNMZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLmNlaWwoc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93Jykge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGgubWF4KHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MsIHBhcmFtcy5zbGlkZXNQZXJWaWV3ICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG4gICAgfVxuICB9IC8vIENhbGMgc2xpZGVzXG5cblxuICB2YXIgc2xpZGVTaXplO1xuICB2YXIgc2xpZGVzUGVyQ29sdW1uID0gcGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgdmFyIHNsaWRlc1BlclJvdyA9IHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgLyBzbGlkZXNQZXJDb2x1bW47XG4gIHZhciBudW1GdWxsQ29sdW1ucyA9IE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNMZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlU2l6ZSA9IDA7XG4gICAgdmFyIHNsaWRlID0gc2xpZGVzLmVxKGkpO1xuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAvLyBTZXQgc2xpZGVzIG9yZGVyXG4gICAgICB2YXIgbmV3U2xpZGVPcmRlckluZGV4ID0gdm9pZCAwO1xuICAgICAgdmFyIGNvbHVtbiA9IHZvaWQgMDtcbiAgICAgIHZhciByb3cgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSkge1xuICAgICAgICB2YXIgZ3JvdXBJbmRleCA9IE1hdGguZmxvb3IoaSAvIChwYXJhbXMuc2xpZGVzUGVyR3JvdXAgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSk7XG4gICAgICAgIHZhciBzbGlkZUluZGV4SW5Hcm91cCA9IGkgLSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uICogcGFyYW1zLnNsaWRlc1Blckdyb3VwICogZ3JvdXBJbmRleDtcbiAgICAgICAgdmFyIGNvbHVtbnNJbkdyb3VwID0gZ3JvdXBJbmRleCA9PT0gMCA/IHBhcmFtcy5zbGlkZXNQZXJHcm91cCA6IE1hdGgubWluKE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gZ3JvdXBJbmRleCAqIHNsaWRlc1BlckNvbHVtbiAqIHBhcmFtcy5zbGlkZXNQZXJHcm91cCkgLyBzbGlkZXNQZXJDb2x1bW4pLCBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHNsaWRlSW5kZXhJbkdyb3VwIC8gY29sdW1uc0luR3JvdXApO1xuICAgICAgICBjb2x1bW4gPSBzbGlkZUluZGV4SW5Hcm91cCAtIHJvdyAqIGNvbHVtbnNJbkdyb3VwICsgZ3JvdXBJbmRleCAqIHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgbmV3U2xpZGVPcmRlckluZGV4ID0gY29sdW1uICsgcm93ICogc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgc2xpZGUuY3NzKHtcbiAgICAgICAgICAnLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAnLW1vei1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAnLW1zLWZsZXgtb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgJy13ZWJraXQtb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgb3JkZXI6IG5ld1NsaWRlT3JkZXJJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgIHJvdyA9IGkgLSBjb2x1bW4gKiBzbGlkZXNQZXJDb2x1bW47XG5cbiAgICAgICAgaWYgKGNvbHVtbiA+IG51bUZ1bGxDb2x1bW5zIHx8IGNvbHVtbiA9PT0gbnVtRnVsbENvbHVtbnMgJiYgcm93ID09PSBzbGlkZXNQZXJDb2x1bW4gLSAxKSB7XG4gICAgICAgICAgcm93ICs9IDE7XG5cbiAgICAgICAgICBpZiAocm93ID49IHNsaWRlc1BlckNvbHVtbikge1xuICAgICAgICAgICAgcm93ID0gMDtcbiAgICAgICAgICAgIGNvbHVtbiArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcihpIC8gc2xpZGVzUGVyUm93KTtcbiAgICAgICAgY29sdW1uID0gaSAtIHJvdyAqIHNsaWRlc1BlclJvdztcbiAgICAgIH1cblxuICAgICAgc2xpZGUuY3NzKGdldERpcmVjdGlvbkxhYmVsKCdtYXJnaW4tdG9wJyksIHJvdyAhPT0gMCAmJiBwYXJhbXMuc3BhY2VCZXR3ZWVuICYmIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCIpO1xuICAgIH1cblxuICAgIGlmIChzbGlkZS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIHZhciBzbGlkZVN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoc2xpZGVbMF0pO1xuICAgICAgdmFyIGN1cnJlbnRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICB2YXIgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlLm91dGVyV2lkdGgodHJ1ZSkgOiBzbGlkZS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB2YXIgd2lkdGggPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnd2lkdGgnKTtcbiAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLWxlZnQnKTtcbiAgICAgICAgdmFyIG1hcmdpblJpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1yaWdodCcpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpO1xuXG4gICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3NsaWRlJCA9IHNsaWRlWzBdLFxuICAgICAgICAgICAgICBjbGllbnRXaWR0aCA9IF9zbGlkZSQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgIG9mZnNldFdpZHRoID0gX3NsaWRlJC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0ICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0ICsgKG9mZnNldFdpZHRoIC0gY2xpZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRUcmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlU2l6ZSA9IChzd2lwZXJTaXplIC0gKHBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gMSkgKiBzcGFjZUJldHdlZW4pIC8gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuXG4gICAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZVtnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBzbGlkZVNpemUgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICB9XG5cbiAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKGkgPT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmICgoaW5kZXggLSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpKSAlIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHN3aXBlci52aXJ0dWFsU2l6ZSwgc3dpcGVyU2l6ZSkgKyBvZmZzZXRBZnRlcjtcbiAgdmFyIG5ld1NsaWRlc0dyaWQ7XG5cbiAgaWYgKHJ0bCAmJiB3cm9uZ1JUTCAmJiAocGFyYW1zLmVmZmVjdCA9PT0gJ3NsaWRlJyB8fCBwYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICAkd3JhcHBlckVsLmNzcyh7XG4gICAgICB3aWR0aDogc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIlxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgIHZhciBfJHdyYXBwZXJFbCRjc3M7XG5cbiAgICAkd3JhcHBlckVsLmNzcygoXyR3cmFwcGVyRWwkY3NzID0ge30sIF8kd3JhcHBlckVsJGNzc1tnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiLCBfJHdyYXBwZXJFbCRjc3MpKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgIHZhciBfJHdyYXBwZXJFbCRjc3MyO1xuXG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pICogc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLmNlaWwoc3dpcGVyLnZpcnR1YWxTaXplIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgICR3cmFwcGVyRWwuY3NzKChfJHdyYXBwZXJFbCRjc3MyID0ge30sIF8kd3JhcHBlckVsJGNzczJbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiwgXyR3cmFwcGVyRWwkY3NzMikpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgc25hcEdyaWQubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICAgIHZhciBzbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW19pXTtcbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkSXRlbSk7XG4gICAgICAgIGlmIChzbmFwR3JpZFtfaV0gPCBzd2lwZXIudmlydHVhbFNpemUgKyBzbmFwR3JpZFswXSkgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgIH1cbiAgfSAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuXG5cbiAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBuZXdTbGlkZXNHcmlkID0gW107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzbmFwR3JpZC5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgICB2YXIgX3NsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbX2kyXTtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBfc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKF9zbGlkZXNHcmlkSXRlbSk7XG5cbiAgICAgIGlmIChzbmFwR3JpZFtfaTJdIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKF9zbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuXG4gICAgaWYgKE1hdGguZmxvb3Ioc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkgLSBNYXRoLmZsb29yKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgIHNuYXBHcmlkLnB1c2goc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgc25hcEdyaWQgPSBbMF07XG5cbiAgaWYgKHBhcmFtcy5zcGFjZUJldHdlZW4gIT09IDApIHtcbiAgICB2YXIgX3NsaWRlcyRmaWx0ZXIkY3NzO1xuXG4gICAgdmFyIGtleSA9IHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBydGwgPyAnbWFyZ2luTGVmdCcgOiBnZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKHNsaWRlc0Zvck1hcmdpbikuY3NzKChfc2xpZGVzJGZpbHRlciRjc3MgPSB7fSwgX3NsaWRlcyRmaWx0ZXIkY3NzW2tleV0gPSBzcGFjZUJldHdlZW4gKyBcInB4XCIsIF9zbGlkZXMkZmlsdGVyJGNzcykpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICB2YXIgYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlU2l6ZVZhbHVlKSB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgYWxsU2xpZGVzU2l6ZSAtPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgIHZhciBtYXhTbmFwID0gYWxsU2xpZGVzU2l6ZSAtIHN3aXBlclNpemU7XG4gICAgc25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgIGlmIChzbmFwIDwgMCkgcmV0dXJuIC1vZmZzZXRCZWZvcmU7XG4gICAgICBpZiAoc25hcCA+IG1heFNuYXApIHJldHVybiBtYXhTbmFwICsgb2Zmc2V0QWZ0ZXI7XG4gICAgICByZXR1cm4gc25hcDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgdmFyIF9hbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGVTaXplVmFsdWUpIHtcbiAgICAgIF9hbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgX2FsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcblxuICAgIGlmIChfYWxsU2xpZGVzU2l6ZSA8IHN3aXBlclNpemUpIHtcbiAgICAgIHZhciBhbGxTbGlkZXNPZmZzZXQgPSAoc3dpcGVyU2l6ZSAtIF9hbGxTbGlkZXNTaXplKSAvIDI7XG4gICAgICBzbmFwR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwLCBzbmFwSW5kZXgpIHtcbiAgICAgICAgc25hcEdyaWRbc25hcEluZGV4XSA9IHNuYXAgLSBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlc0dyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCwgc25hcEluZGV4KSB7XG4gICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLCB7XG4gICAgc2xpZGVzOiBzbGlkZXMsXG4gICAgc25hcEdyaWQ6IHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQ6IHNsaWRlc0dyaWQsXG4gICAgc2xpZGVzU2l6ZXNHcmlkOiBzbGlkZXNTaXplc0dyaWRcbiAgfSk7XG5cbiAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc25hcEdyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB1cGRhdGVTbGlkZXNDbGFzc2VzO1xuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNDbGFzc2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICByZWFsSW5kZXggPSBzd2lwZXIucmVhbEluZGV4O1xuICB2YXIgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgc2xpZGVzLnJlbW92ZUNsYXNzKHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZVByZXZDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgdmFyIGFjdGl2ZVNsaWRlO1xuXG4gIGlmIChpc1ZpcnR1YWwpIHtcbiAgICBhY3RpdmVTbGlkZSA9IHN3aXBlci4kd3JhcHBlckVsLmZpbmQoXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIGFjdGl2ZUluZGV4ICsgXCJcXFwiXVwiKTtcbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVTbGlkZSA9IHNsaWRlcy5lcShhY3RpdmVJbmRleCk7XG4gIH0gLy8gQWN0aXZlIGNsYXNzZXNcblxuXG4gIGFjdGl2ZVNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAoYWN0aXZlU2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIjpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gIH0gLy8gTmV4dCBTbGlkZVxuXG5cbiAgdmFyIG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHRBbGwoXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3AgJiYgbmV4dFNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgIG5leHRTbGlkZSA9IHNsaWRlcy5lcSgwKTtcbiAgICBuZXh0U2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcbiAgfSAvLyBQcmV2IFNsaWRlXG5cblxuICB2YXIgcHJldlNsaWRlID0gYWN0aXZlU2xpZGUucHJldkFsbChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKS5lcSgwKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcCAmJiBwcmV2U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgcHJldlNsaWRlID0gc2xpZGVzLmVxKC0xKTtcbiAgICBwcmV2U2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgIGlmIChuZXh0U2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIjpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgbmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgc3dpcGVyLmVtaXRTbGlkZXNDbGFzc2VzKCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB1cGRhdGVTbGlkZXNPZmZzZXQ7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlT2Zmc2V0ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVzW2ldLm9mZnNldExlZnQgOiBzbGlkZXNbaV0ub2Zmc2V0VG9wO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB1cGRhdGVTbGlkZXNQcm9ncmVzcztcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi91dGlscy9kb21cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlID0gdGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSB8fCAwO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gIGlmIChzbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGlmICh0eXBlb2Ygc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0ID09PSAndW5kZWZpbmVkJykgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB2YXIgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgaWYgKHJ0bCkgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlOyAvLyBWaXNpYmxlIFNsaWRlc1xuXG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBzbGlkZSA9IHNsaWRlc1tpXTtcbiAgICB2YXIgc2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2Vlbik7XG5cbiAgICBpZiAocGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSB8fCBwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHZhciBzbGlkZUJlZm9yZSA9IC0ob2Zmc2V0Q2VudGVyIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpO1xuICAgICAgdmFyIHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICB2YXIgaXNWaXNpYmxlID0gc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8IHN3aXBlci5zaXplIC0gMSB8fCBzbGlkZUFmdGVyID4gMSAmJiBzbGlkZUFmdGVyIDw9IHN3aXBlci5zaXplIHx8IHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzd2lwZXIuc2l6ZTtcblxuICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgICAgIHNsaWRlcy5lcShpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNsaWRlLnByb2dyZXNzID0gcnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xuICB9XG5cbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSAoMCwgX2RvbS5kZWZhdWx0KShzd2lwZXIudmlzaWJsZVNsaWRlcyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIENvdmVyZmxvdyA9IHtcbiAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHN3aXBlcldpZHRoID0gc3dpcGVyLndpZHRoLFxuICAgICAgICBzd2lwZXJIZWlnaHQgPSBzd2lwZXIuaGVpZ2h0LFxuICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgICBzbGlkZXNTaXplc0dyaWQgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmNvdmVyZmxvd0VmZmVjdDtcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIHZhciB0cmFuc2Zvcm0gPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgIHZhciBjZW50ZXIgPSBpc0hvcml6b250YWwgPyAtdHJhbnNmb3JtICsgc3dpcGVyV2lkdGggLyAyIDogLXRyYW5zZm9ybSArIHN3aXBlckhlaWdodCAvIDI7XG4gICAgdmFyIHJvdGF0ZSA9IGlzSG9yaXpvbnRhbCA/IHBhcmFtcy5yb3RhdGUgOiAtcGFyYW1zLnJvdGF0ZTtcbiAgICB2YXIgdHJhbnNsYXRlID0gcGFyYW1zLmRlcHRoOyAvLyBFYWNoIHNsaWRlIG9mZnNldCBmcm9tIGNlbnRlclxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyICRzbGlkZUVsID0gc2xpZGVzLmVxKGkpO1xuICAgICAgdmFyIHNsaWRlU2l6ZSA9IHNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgIHZhciBzbGlkZU9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgdmFyIG9mZnNldE11bHRpcGxpZXIgPSAoY2VudGVyIC0gc2xpZGVPZmZzZXQgLSBzbGlkZVNpemUgLyAyKSAvIHNsaWRlU2l6ZSAqIHBhcmFtcy5tb2RpZmllcjtcbiAgICAgIHZhciByb3RhdGVZID0gaXNIb3Jpem9udGFsID8gcm90YXRlICogb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICB2YXIgcm90YXRlWCA9IGlzSG9yaXpvbnRhbCA/IDAgOiByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyOyAvLyB2YXIgcm90YXRlWiA9IDBcblxuICAgICAgdmFyIHRyYW5zbGF0ZVogPSAtdHJhbnNsYXRlICogTWF0aC5hYnMob2Zmc2V0TXVsdGlwbGllcik7XG4gICAgICB2YXIgc3RyZXRjaCA9IHBhcmFtcy5zdHJldGNoOyAvLyBBbGxvdyBwZXJjZW50YWdlIHRvIG1ha2UgYSByZWxhdGl2ZSBzdHJldGNoIGZvciByZXNwb25zaXZlIHNsaWRlcnNcblxuICAgICAgaWYgKHR5cGVvZiBzdHJldGNoID09PSAnc3RyaW5nJyAmJiBzdHJldGNoLmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICAgICAgc3RyZXRjaCA9IHBhcnNlRmxvYXQocGFyYW1zLnN0cmV0Y2gpIC8gMTAwICogc2xpZGVTaXplO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHJhbnNsYXRlWSA9IGlzSG9yaXpvbnRhbCA/IDAgOiBzdHJldGNoICogb2Zmc2V0TXVsdGlwbGllcjtcbiAgICAgIHZhciB0cmFuc2xhdGVYID0gaXNIb3Jpem9udGFsID8gc3RyZXRjaCAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgdmFyIHNjYWxlID0gMSAtICgxIC0gcGFyYW1zLnNjYWxlKSAqIE1hdGguYWJzKG9mZnNldE11bHRpcGxpZXIpOyAvLyBGaXggZm9yIHVsdHJhIHNtYWxsIHZhbHVlc1xuXG4gICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWCkgPCAwLjAwMSkgdHJhbnNsYXRlWCA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWSkgPCAwLjAwMSkgdHJhbnNsYXRlWSA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWikgPCAwLjAwMSkgdHJhbnNsYXRlWiA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnMocm90YXRlWSkgPCAwLjAwMSkgcm90YXRlWSA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnMocm90YXRlWCkgPCAwLjAwMSkgcm90YXRlWCA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnMoc2NhbGUpIDwgMC4wMDEpIHNjYWxlID0gMDtcbiAgICAgIHZhciBzbGlkZVRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoXCIgKyB0cmFuc2xhdGVYICsgXCJweCxcIiArIHRyYW5zbGF0ZVkgKyBcInB4LFwiICsgdHJhbnNsYXRlWiArIFwicHgpICByb3RhdGVYKFwiICsgcm90YXRlWCArIFwiZGVnKSByb3RhdGVZKFwiICsgcm90YXRlWSArIFwiZGVnKSBzY2FsZShcIiArIHNjYWxlICsgXCIpXCI7XG4gICAgICAkc2xpZGVFbC50cmFuc2Zvcm0oc2xpZGVUcmFuc2Zvcm0pO1xuICAgICAgJHNsaWRlRWxbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQob2Zmc2V0TXVsdGlwbGllcikpICsgMTtcblxuICAgICAgaWYgKHBhcmFtcy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgLy8gU2V0IHNoYWRvd3NcbiAgICAgICAgdmFyICRzaGFkb3dCZWZvcmVFbCA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICB2YXIgJHNoYWRvd0FmdGVyRWwgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG5cbiAgICAgICAgaWYgKCRzaGFkb3dCZWZvcmVFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkc2hhZG93QmVmb3JlRWwgPSAoMCwgX2RvbS5kZWZhdWx0KShcIjxkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZS1zaGFkb3ctXCIgKyAoaXNIb3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCcpICsgXCJcXFwiPjwvZGl2PlwiKTtcbiAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoJHNoYWRvd0JlZm9yZUVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc2hhZG93QWZ0ZXJFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkc2hhZG93QWZ0ZXJFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKFwiPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlLXNoYWRvdy1cIiArIChpc0hvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgXCJcXFwiPjwvZGl2PlwiKTtcbiAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoJHNoYWRvd0FmdGVyRWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRzaGFkb3dCZWZvcmVFbC5sZW5ndGgpICRzaGFkb3dCZWZvcmVFbFswXS5zdHlsZS5vcGFjaXR5ID0gb2Zmc2V0TXVsdGlwbGllciA+IDAgPyBvZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgICAgaWYgKCRzaGFkb3dBZnRlckVsLmxlbmd0aCkgJHNoYWRvd0FmdGVyRWxbMF0uc3R5bGUub3BhY2l0eSA9IC1vZmZzZXRNdWx0aXBsaWVyID4gMCA/IC1vZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIuc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnZWZmZWN0LWNvdmVyZmxvdycsXG4gIHBhcmFtczoge1xuICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgICAgcm90YXRlOiA1MCxcbiAgICAgIHN0cmV0Y2g6IDAsXG4gICAgICBkZXB0aDogMTAwLFxuICAgICAgc2NhbGU6IDEsXG4gICAgICBtb2RpZmllcjogMSxcbiAgICAgIHNsaWRlU2hhZG93czogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBjb3ZlcmZsb3dFZmZlY3Q6IF9leHRlbmRzKHt9LCBDb3ZlcmZsb3cpXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gYmVmb3JlSW5pdChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2NvdmVyZmxvdycpIHJldHVybjtcbiAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJjb3ZlcmZsb3dcIik7XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiM2RcIik7XG4gICAgICBzd2lwZXIucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjb3ZlcmZsb3cnKSByZXR1cm47XG4gICAgICBzd2lwZXIuY292ZXJmbG93RWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihzd2lwZXIsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjb3ZlcmZsb3cnKSByZXR1cm47XG4gICAgICBzd2lwZXIuY292ZXJmbG93RWZmZWN0LnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBDdWJlID0ge1xuICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgICBzd2lwZXJXaWR0aCA9IHN3aXBlci53aWR0aCxcbiAgICAgICAgc3dpcGVySGVpZ2h0ID0gc3dpcGVyLmhlaWdodCxcbiAgICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICAgc3dpcGVyU2l6ZSA9IHN3aXBlci5zaXplLFxuICAgICAgICBicm93c2VyID0gc3dpcGVyLmJyb3dzZXI7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY3ViZUVmZmVjdDtcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICB2YXIgd3JhcHBlclJvdGF0ZSA9IDA7XG4gICAgdmFyICRjdWJlU2hhZG93RWw7XG5cbiAgICBpZiAocGFyYW1zLnNoYWRvdykge1xuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAkY3ViZVNoYWRvd0VsID0gJHdyYXBwZXJFbC5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93Jyk7XG5cbiAgICAgICAgaWYgKCRjdWJlU2hhZG93RWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoJGN1YmVTaGFkb3dFbCk7XG4gICAgICAgIH1cblxuICAgICAgICAkY3ViZVNoYWRvd0VsLmNzcyh7XG4gICAgICAgICAgaGVpZ2h0OiBzd2lwZXJXaWR0aCArIFwicHhcIlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjdWJlU2hhZG93RWwgPSAkZWwuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuXG4gICAgICAgIGlmICgkY3ViZVNoYWRvd0VsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICRjdWJlU2hhZG93RWwgPSAoMCwgX2RvbS5kZWZhdWx0KSgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICRlbC5hcHBlbmQoJGN1YmVTaGFkb3dFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyICRzbGlkZUVsID0gc2xpZGVzLmVxKGkpO1xuICAgICAgdmFyIHNsaWRlSW5kZXggPSBpO1xuXG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSBwYXJzZUludCgkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzbGlkZUFuZ2xlID0gc2xpZGVJbmRleCAqIDkwO1xuICAgICAgdmFyIHJvdW5kID0gTWF0aC5mbG9vcihzbGlkZUFuZ2xlIC8gMzYwKTtcblxuICAgICAgaWYgKHJ0bCkge1xuICAgICAgICBzbGlkZUFuZ2xlID0gLXNsaWRlQW5nbGU7XG4gICAgICAgIHJvdW5kID0gTWF0aC5mbG9vcigtc2xpZGVBbmdsZSAvIDM2MCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCRzbGlkZUVsWzBdLnByb2dyZXNzLCAxKSwgLTEpO1xuICAgICAgdmFyIHR4ID0gMDtcbiAgICAgIHZhciB0eSA9IDA7XG4gICAgICB2YXIgdHogPSAwO1xuXG4gICAgICBpZiAoc2xpZGVJbmRleCAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSAtcm91bmQgKiA0ICogc3dpcGVyU2l6ZTtcbiAgICAgICAgdHogPSAwO1xuICAgICAgfSBlbHNlIGlmICgoc2xpZGVJbmRleCAtIDEpICUgNCA9PT0gMCkge1xuICAgICAgICB0eCA9IDA7XG4gICAgICAgIHR6ID0gLXJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMikgJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gc3dpcGVyU2l6ZSArIHJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICAgIHR6ID0gc3dpcGVyU2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAoKHNsaWRlSW5kZXggLSAzKSAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSAtc3dpcGVyU2l6ZTtcbiAgICAgICAgdHogPSAzICogc3dpcGVyU2l6ZSArIHN3aXBlclNpemUgKiA0ICogcm91bmQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgdHggPSAtdHg7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zZm9ybSA9IFwicm90YXRlWChcIiArIChpc0hvcml6b250YWwgPyAwIDogLXNsaWRlQW5nbGUpICsgXCJkZWcpIHJvdGF0ZVkoXCIgKyAoaXNIb3Jpem9udGFsID8gc2xpZGVBbmdsZSA6IDApICsgXCJkZWcpIHRyYW5zbGF0ZTNkKFwiICsgdHggKyBcInB4LCBcIiArIHR5ICsgXCJweCwgXCIgKyB0eiArIFwicHgpXCI7XG5cbiAgICAgIGlmIChwcm9ncmVzcyA8PSAxICYmIHByb2dyZXNzID4gLTEpIHtcbiAgICAgICAgd3JhcHBlclJvdGF0ZSA9IHNsaWRlSW5kZXggKiA5MCArIHByb2dyZXNzICogOTA7XG4gICAgICAgIGlmIChydGwpIHdyYXBwZXJSb3RhdGUgPSAtc2xpZGVJbmRleCAqIDkwIC0gcHJvZ3Jlc3MgKiA5MDtcbiAgICAgIH1cblxuICAgICAgJHNsaWRlRWwudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIHZhciBzaGFkb3dCZWZvcmUgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgdmFyIHNoYWRvd0FmdGVyID0gaXNIb3Jpem9udGFsID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuXG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QmVmb3JlID0gKDAsIF9kb20uZGVmYXVsdCkoXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGUtc2hhZG93LVwiICsgKGlzSG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnKSArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QWZ0ZXIgPSAoMCwgX2RvbS5kZWZhdWx0KShcIjxkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZS1zaGFkb3ctXCIgKyAoaXNIb3Jpem9udGFsID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KC1wcm9ncmVzcywgMCk7XG4gICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHdyYXBwZXJFbC5jc3Moe1xuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6IFwiNTAlIDUwJSAtXCIgKyBzd2lwZXJTaXplIC8gMiArIFwicHhcIixcbiAgICAgICctbW96LXRyYW5zZm9ybS1vcmlnaW4nOiBcIjUwJSA1MCUgLVwiICsgc3dpcGVyU2l6ZSAvIDIgKyBcInB4XCIsXG4gICAgICAnLW1zLXRyYW5zZm9ybS1vcmlnaW4nOiBcIjUwJSA1MCUgLVwiICsgc3dpcGVyU2l6ZSAvIDIgKyBcInB4XCIsXG4gICAgICAndHJhbnNmb3JtLW9yaWdpbic6IFwiNTAlIDUwJSAtXCIgKyBzd2lwZXJTaXplIC8gMiArIFwicHhcIlxuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtcy5zaGFkb3cpIHtcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgJGN1YmVTaGFkb3dFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgKHN3aXBlcldpZHRoIC8gMiArIHBhcmFtcy5zaGFkb3dPZmZzZXQpICsgXCJweCwgXCIgKyAtc3dpcGVyV2lkdGggLyAyICsgXCJweCkgcm90YXRlWCg5MGRlZykgcm90YXRlWigwZGVnKSBzY2FsZShcIiArIHBhcmFtcy5zaGFkb3dTY2FsZSArIFwiKVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzaGFkb3dBbmdsZSA9IE1hdGguYWJzKHdyYXBwZXJSb3RhdGUpIC0gTWF0aC5mbG9vcihNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAvIDkwKSAqIDkwO1xuICAgICAgICB2YXIgbXVsdGlwbGllciA9IDEuNSAtIChNYXRoLnNpbihzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAvIDIgKyBNYXRoLmNvcyhzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAvIDIpO1xuICAgICAgICB2YXIgc2NhbGUxID0gcGFyYW1zLnNoYWRvd1NjYWxlO1xuICAgICAgICB2YXIgc2NhbGUyID0gcGFyYW1zLnNoYWRvd1NjYWxlIC8gbXVsdGlwbGllcjtcbiAgICAgICAgdmFyIG9mZnNldCA9IHBhcmFtcy5zaGFkb3dPZmZzZXQ7XG4gICAgICAgICRjdWJlU2hhZG93RWwudHJhbnNmb3JtKFwic2NhbGUzZChcIiArIHNjYWxlMSArIFwiLCAxLCBcIiArIHNjYWxlMiArIFwiKSB0cmFuc2xhdGUzZCgwcHgsIFwiICsgKHN3aXBlckhlaWdodCAvIDIgKyBvZmZzZXQpICsgXCJweCwgXCIgKyAtc3dpcGVySGVpZ2h0IC8gMiAvIHNjYWxlMiArIFwicHgpIHJvdGF0ZVgoLTkwZGVnKVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgekZhY3RvciA9IGJyb3dzZXIuaXNTYWZhcmkgfHwgYnJvd3Nlci5pc1dlYlZpZXcgPyAtc3dpcGVyU2l6ZSAvIDIgOiAwO1xuICAgICR3cmFwcGVyRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LDAsXCIgKyB6RmFjdG9yICsgXCJweCkgcm90YXRlWChcIiArIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAwIDogd3JhcHBlclJvdGF0ZSkgKyBcImRlZykgcm90YXRlWShcIiArIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAtd3JhcHBlclJvdGF0ZSA6IDApICsgXCJkZWcpXCIpO1xuICB9LFxuICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICAgc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3ViZUVmZmVjdC5zaGFkb3cgJiYgIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgJGVsLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdlZmZlY3QtY3ViZScsXG4gIHBhcmFtczoge1xuICAgIGN1YmVFZmZlY3Q6IHtcbiAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgIHNoYWRvdzogdHJ1ZSxcbiAgICAgIHNoYWRvd09mZnNldDogMjAsXG4gICAgICBzaGFkb3dTY2FsZTogMC45NFxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBjdWJlRWZmZWN0OiBfZXh0ZW5kcyh7fSwgQ3ViZSlcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY3ViZScpIHJldHVybjtcbiAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJjdWJlXCIpO1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIjNkXCIpO1xuICAgICAgdmFyIG92ZXJ3cml0ZVBhcmFtcyA9IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgcmVzaXN0YW5jZVJhdGlvOiAwLFxuICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogdHJ1ZVxuICAgICAgfTtcbiAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIucGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci5vcmlnaW5hbFBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICB9LFxuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY3ViZScpIHJldHVybjtcbiAgICAgIHN3aXBlci5jdWJlRWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihzd2lwZXIsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjdWJlJykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmN1YmVFZmZlY3Quc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBGYWRlID0ge1xuICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgJHNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgdmFyIG9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgdmFyIHR4ID0gLW9mZnNldDtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB0eCAtPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgdmFyIHR5ID0gMDtcblxuICAgICAgaWYgKCFzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgdHggPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2xpZGVPcGFjaXR5ID0gc3dpcGVyLnBhcmFtcy5mYWRlRWZmZWN0LmNyb3NzRmFkZSA/IE1hdGgubWF4KDEgLSBNYXRoLmFicygkc2xpZGVFbFswXS5wcm9ncmVzcyksIDApIDogMSArIE1hdGgubWluKE1hdGgubWF4KCRzbGlkZUVsWzBdLnByb2dyZXNzLCAtMSksIDApO1xuICAgICAgJHNsaWRlRWwuY3NzKHtcbiAgICAgICAgb3BhY2l0eTogc2xpZGVPcGFjaXR5XG4gICAgICB9KS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIHR4ICsgXCJweCwgXCIgKyB0eSArIFwicHgsIDBweClcIik7XG4gICAgfVxuICB9LFxuICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICBzbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICB2YXIgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgIHNsaWRlcy50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGV2ZW50VHJpZ2dlcmVkKSByZXR1cm47XG4gICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHZhciB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJFdmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAkd3JhcHBlckVsLnRyaWdnZXIodHJpZ2dlckV2ZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ2VmZmVjdC1mYWRlJyxcbiAgcGFyYW1zOiB7XG4gICAgZmFkZUVmZmVjdDoge1xuICAgICAgY3Jvc3NGYWRlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBmYWRlRWZmZWN0OiBfZXh0ZW5kcyh7fSwgRmFkZSlcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBiZWZvcmVJbml0OiBmdW5jdGlvbiBiZWZvcmVJbml0KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmFkZScpIHJldHVybjtcbiAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJmYWRlXCIpO1xuICAgICAgdmFyIG92ZXJ3cml0ZVBhcmFtcyA9IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICB2aXJ0dWFsVHJhbnNsYXRlOiB0cnVlXG4gICAgICB9O1xuICAgICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci5wYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdmYWRlJykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmZhZGVFZmZlY3Quc2V0VHJhbnNsYXRlKCk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKHN3aXBlciwgZHVyYXRpb24pIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZhZGUnKSByZXR1cm47XG4gICAgICBzd2lwZXIuZmFkZUVmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgRmxpcCA9IHtcbiAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyICRzbGlkZUVsID0gc2xpZGVzLmVxKGkpO1xuICAgICAgdmFyIHByb2dyZXNzID0gJHNsaWRlRWxbMF0ucHJvZ3Jlc3M7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZsaXBFZmZlY3QubGltaXRSb3RhdGlvbikge1xuICAgICAgICBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCRzbGlkZUVsWzBdLnByb2dyZXNzLCAxKSwgLTEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0ID0gJHNsaWRlRWxbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICB2YXIgcm90YXRlID0gLTE4MCAqIHByb2dyZXNzO1xuICAgICAgdmFyIHJvdGF0ZVkgPSByb3RhdGU7XG4gICAgICB2YXIgcm90YXRlWCA9IDA7XG4gICAgICB2YXIgdHggPSAtb2Zmc2V0O1xuICAgICAgdmFyIHR5ID0gMDtcblxuICAgICAgaWYgKCFzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgdHggPSAwO1xuICAgICAgICByb3RhdGVYID0gLXJvdGF0ZVk7XG4gICAgICAgIHJvdGF0ZVkgPSAwO1xuICAgICAgfSBlbHNlIGlmIChydGwpIHtcbiAgICAgICAgcm90YXRlWSA9IC1yb3RhdGVZO1xuICAgICAgfVxuXG4gICAgICAkc2xpZGVFbFswXS5zdHlsZS56SW5kZXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChwcm9ncmVzcykpICsgc2xpZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZmxpcEVmZmVjdC5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgLy8gU2V0IHNoYWRvd3NcbiAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICB2YXIgc2hhZG93QWZ0ZXIgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG5cbiAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzaGFkb3dCZWZvcmUgPSAoMCwgX2RvbS5kZWZhdWx0KShcIjxkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZS1zaGFkb3ctXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCcpICsgXCJcXFwiPjwvZGl2PlwiKTtcbiAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoc2hhZG93QmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzaGFkb3dBZnRlciA9ICgwLCBfZG9tLmRlZmF1bHQpKFwiPGRpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlLXNoYWRvdy1cIiArIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgXCJcXFwiPjwvZGl2PlwiKTtcbiAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTtcbiAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCkgc2hhZG93QWZ0ZXJbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KHByb2dyZXNzLCAwKTtcbiAgICAgIH1cblxuICAgICAgJHNsaWRlRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB0eCArIFwicHgsIFwiICsgdHkgKyBcInB4LCAwcHgpIHJvdGF0ZVgoXCIgKyByb3RhdGVYICsgXCJkZWcpIHJvdGF0ZVkoXCIgKyByb3RhdGVZICsgXCJkZWcpXCIpO1xuICAgIH1cbiAgfSxcbiAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIHNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgJiYgZHVyYXRpb24gIT09IDApIHtcbiAgICAgIHZhciBldmVudFRyaWdnZXJlZCA9IGZhbHNlOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgICAgc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgaWYgKGV2ZW50VHJpZ2dlcmVkKSByZXR1cm47XG4gICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjsgLy8gaWYgKCEkKHRoaXMpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykpIHJldHVybjtcblxuICAgICAgICBldmVudFRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRyaWdnZXJFdmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCddO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICR3cmFwcGVyRWwudHJpZ2dlcih0cmlnZ2VyRXZlbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnZWZmZWN0LWZsaXAnLFxuICBwYXJhbXM6IHtcbiAgICBmbGlwRWZmZWN0OiB7XG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICBsaW1pdFJvdGF0aW9uOiB0cnVlXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIGZsaXBFZmZlY3Q6IF9leHRlbmRzKHt9LCBGbGlwKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdmbGlwJykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcImZsaXBcIik7XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwiM2RcIik7XG4gICAgICB2YXIgb3ZlcndyaXRlUGFyYW1zID0ge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBzbGlkZXNQZXJDb2x1bW46IDEsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgIHZpcnR1YWxUcmFuc2xhdGU6IHRydWVcbiAgICAgIH07XG4gICAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZsaXAnKSByZXR1cm47XG4gICAgICBzd2lwZXIuZmxpcEVmZmVjdC5zZXRUcmFuc2xhdGUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oc3dpcGVyLCBkdXJhdGlvbikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmxpcCcpIHJldHVybjtcbiAgICAgIHN3aXBlci5mbGlwRWZmZWN0LnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBIYXNoTmF2aWdhdGlvbiA9IHtcbiAgb25IYXNoQ2FuZ2U6IGZ1bmN0aW9uIG9uSGFzaENhbmdlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICAgIHN3aXBlci5lbWl0KCdoYXNoQ2hhbmdlJyk7XG4gICAgdmFyIG5ld0hhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgdmFyIGFjdGl2ZVNsaWRlSGFzaCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKTtcblxuICAgIGlmIChuZXdIYXNoICE9PSBhY3RpdmVTbGlkZUhhc2gpIHtcbiAgICAgIHZhciBuZXdJbmRleCA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1oYXNoPVxcXCJcIiArIG5ld0hhc2ggKyBcIlxcXCJdXCIpLmluZGV4KCk7XG4gICAgICBpZiAodHlwZW9mIG5ld0luZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgpO1xuICAgIH1cbiAgfSxcbiAgc2V0SGFzaDogZnVuY3Rpb24gc2V0SGFzaCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICAgIGlmICghc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkIHx8ICFzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHJldHVybjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLnJlcGxhY2VTdGF0ZSAmJiB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBcIiNcIiArIHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKSB8fCAnJyk7XG4gICAgICBzd2lwZXIuZW1pdCgnaGFzaFNldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICB2YXIgaGFzaCA9IHNsaWRlLmF0dHIoJ2RhdGEtaGFzaCcpIHx8IHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpO1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9IGhhc2ggfHwgJyc7XG4gICAgICBzd2lwZXIuZW1pdCgnaGFzaFNldCcpO1xuICAgIH1cbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkIHx8IHN3aXBlci5wYXJhbXMuaGlzdG9yeSAmJiBzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdmFyIGhhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICBpZiAoaGFzaCkge1xuICAgICAgdmFyIHNwZWVkID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgICAgdmFyIHNsaWRlSGFzaCA9IHNsaWRlLmF0dHIoJ2RhdGEtaGFzaCcpIHx8IHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpO1xuXG4gICAgICAgIGlmIChzbGlkZUhhc2ggPT09IGhhc2ggJiYgIXNsaWRlLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSBzbGlkZS5pbmRleCgpO1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ud2F0Y2hTdGF0ZSkge1xuICAgICAgKDAsIF9kb20uZGVmYXVsdCkod2luZG93KS5vbignaGFzaGNoYW5nZScsIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5vbkhhc2hDYW5nZSk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi53YXRjaFN0YXRlKSB7XG4gICAgICAoMCwgX2RvbS5kZWZhdWx0KSh3aW5kb3cpLm9mZignaGFzaGNoYW5nZScsIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5vbkhhc2hDYW5nZSk7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnaGFzaC1uYXZpZ2F0aW9uJyxcbiAgcGFyYW1zOiB7XG4gICAgaGFzaE5hdmlnYXRpb246IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVwbGFjZVN0YXRlOiBmYWxzZSxcbiAgICAgIHdhdGNoU3RhdGU6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIGhhc2hOYXZpZ2F0aW9uOiBfZXh0ZW5kcyh7XG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZVxuICAgICAgfSwgSGFzaE5hdmlnYXRpb24pXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLmluaXQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCkge1xuICAgICAgICBzd2lwZXIuaGFzaE5hdmlnYXRpb24uc2V0SGFzaCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCAmJiBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLnNldEhhc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIEhpc3RvcnkgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeSkgcmV0dXJuO1xuXG4gICAgaWYgKCF3aW5kb3cuaGlzdG9yeSB8fCAhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICBzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaGlzdG9yeSA9IHN3aXBlci5oaXN0b3J5O1xuICAgIGhpc3RvcnkuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGhpc3RvcnkucGF0aHMgPSBIaXN0b3J5LmdldFBhdGhWYWx1ZXMoc3dpcGVyLnBhcmFtcy51cmwpO1xuICAgIGlmICghaGlzdG9yeS5wYXRocy5rZXkgJiYgIWhpc3RvcnkucGF0aHMudmFsdWUpIHJldHVybjtcbiAgICBoaXN0b3J5LnNjcm9sbFRvU2xpZGUoMCwgaGlzdG9yeS5wYXRocy52YWx1ZSwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuXG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBzd2lwZXIuaGlzdG9yeS5zZXRIaXN0b3J5UG9wU3RhdGUpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuXG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBzd2lwZXIuaGlzdG9yeS5zZXRIaXN0b3J5UG9wU3RhdGUpO1xuICAgIH1cbiAgfSxcbiAgc2V0SGlzdG9yeVBvcFN0YXRlOiBmdW5jdGlvbiBzZXRIaXN0b3J5UG9wU3RhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLmhpc3RvcnkucGF0aHMgPSBIaXN0b3J5LmdldFBhdGhWYWx1ZXMoc3dpcGVyLnBhcmFtcy51cmwpO1xuICAgIHN3aXBlci5oaXN0b3J5LnNjcm9sbFRvU2xpZGUoc3dpcGVyLnBhcmFtcy5zcGVlZCwgc3dpcGVyLmhpc3RvcnkucGF0aHMudmFsdWUsIGZhbHNlKTtcbiAgfSxcbiAgZ2V0UGF0aFZhbHVlczogZnVuY3Rpb24gZ2V0UGF0aFZhbHVlcyh1cmxPdmVycmlkZSkge1xuICAgIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gICAgdmFyIGxvY2F0aW9uO1xuXG4gICAgaWYgKHVybE92ZXJyaWRlKSB7XG4gICAgICBsb2NhdGlvbiA9IG5ldyBVUkwodXJsT3ZlcnJpZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgcGF0aEFycmF5ID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoJy8nKS5maWx0ZXIoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgIHJldHVybiBwYXJ0ICE9PSAnJztcbiAgICB9KTtcbiAgICB2YXIgdG90YWwgPSBwYXRoQXJyYXkubGVuZ3RoO1xuICAgIHZhciBrZXkgPSBwYXRoQXJyYXlbdG90YWwgLSAyXTtcbiAgICB2YXIgdmFsdWUgPSBwYXRoQXJyYXlbdG90YWwgLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBrZXksXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9LFxuICBzZXRIaXN0b3J5OiBmdW5jdGlvbiBzZXRIaXN0b3J5KGtleSwgaW5kZXgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgIGlmICghc3dpcGVyLmhpc3RvcnkuaW5pdGlhbGl6ZWQgfHwgIXN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkKSByZXR1cm47XG4gICAgdmFyIGxvY2F0aW9uO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudXJsKSB7XG4gICAgICBsb2NhdGlvbiA9IG5ldyBVUkwoc3dpcGVyLnBhcmFtcy51cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGluZGV4KTtcbiAgICB2YXIgdmFsdWUgPSBIaXN0b3J5LnNsdWdpZnkoc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5JykpO1xuXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICB2YWx1ZSA9IGtleSArIFwiL1wiICsgdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnN0YXRlO1xuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSwgbnVsbCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0sIG51bGwsIHZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIHNsdWdpZnk6IGZ1bmN0aW9uIHNsdWdpZnkodGV4dCkge1xuICAgIHJldHVybiB0ZXh0LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoL1teXFx3LV0rL2csICcnKS5yZXBsYWNlKC8tLSsvZywgJy0nKS5yZXBsYWNlKC9eLSsvLCAnJykucmVwbGFjZSgvLSskLywgJycpO1xuICB9LFxuICBzY3JvbGxUb1NsaWRlOiBmdW5jdGlvbiBzY3JvbGxUb1NsaWRlKHNwZWVkLCB2YWx1ZSwgcnVuQ2FsbGJhY2tzKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBzbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaSk7XG4gICAgICAgIHZhciBzbGlkZUhpc3RvcnkgPSBIaXN0b3J5LnNsdWdpZnkoc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5JykpO1xuXG4gICAgICAgIGlmIChzbGlkZUhpc3RvcnkgPT09IHZhbHVlICYmICFzbGlkZS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gc2xpZGUuaW5kZXgoKTtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnaGlzdG9yeScsXG4gIHBhcmFtczoge1xuICAgIGhpc3Rvcnk6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVwbGFjZVN0YXRlOiBmYWxzZSxcbiAgICAgIGtleTogJ3NsaWRlcydcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgaGlzdG9yeTogX2V4dGVuZHMoe30sIEhpc3RvcnkpXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuaGlzdG9yeS5pbml0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5oaXN0b3J5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLmhpc3RvcnkuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeShzd2lwZXIucGFyYW1zLmhpc3Rvcnkua2V5LCBzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5oaXN0b3J5LmluaXRpYWxpemVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBzd2lwZXIuaGlzdG9yeS5zZXRIaXN0b3J5KHN3aXBlci5wYXJhbXMuaGlzdG9yeS5rZXksIHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIEtleWJvYXJkID0ge1xuICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gICAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgdmFyIGUgPSBldmVudDtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvLyBqcXVlcnkgZml4XG5cbiAgICB2YXIga2MgPSBlLmtleUNvZGUgfHwgZS5jaGFyQ29kZTtcbiAgICB2YXIgcGFnZVVwRG93biA9IHN3aXBlci5wYXJhbXMua2V5Ym9hcmQucGFnZVVwRG93bjtcbiAgICB2YXIgaXNQYWdlVXAgPSBwYWdlVXBEb3duICYmIGtjID09PSAzMztcbiAgICB2YXIgaXNQYWdlRG93biA9IHBhZ2VVcERvd24gJiYga2MgPT09IDM0O1xuICAgIHZhciBpc0Fycm93TGVmdCA9IGtjID09PSAzNztcbiAgICB2YXIgaXNBcnJvd1JpZ2h0ID0ga2MgPT09IDM5O1xuICAgIHZhciBpc0Fycm93VXAgPSBrYyA9PT0gMzg7XG4gICAgdmFyIGlzQXJyb3dEb3duID0ga2MgPT09IDQwOyAvLyBEaXJlY3Rpb25zIGxvY2tzXG5cbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIGlzQXJyb3dSaWdodCB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIGlzQXJyb3dEb3duIHx8IGlzUGFnZURvd24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBpc0Fycm93TGVmdCB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIGlzQXJyb3dVcCB8fCBpc1BhZ2VVcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYScpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmtleWJvYXJkLm9ubHlJblZpZXdwb3J0ICYmIChpc1BhZ2VVcCB8fCBpc1BhZ2VEb3duIHx8IGlzQXJyb3dMZWZ0IHx8IGlzQXJyb3dSaWdodCB8fCBpc0Fycm93VXAgfHwgaXNBcnJvd0Rvd24pKSB7XG4gICAgICB2YXIgaW5WaWV3ID0gZmFsc2U7IC8vIENoZWNrIHRoYXQgc3dpcGVyIHNob3VsZCBiZSBpbnNpZGUgb2YgdmlzaWJsZSBhcmVhIG9mIHdpbmRvd1xuXG4gICAgICBpZiAoc3dpcGVyLiRlbC5wYXJlbnRzKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKS5sZW5ndGggPiAwICYmIHN3aXBlci4kZWwucGFyZW50cyhcIi5cIiArIHN3aXBlci5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICAgdmFyIHN3aXBlcldpZHRoID0gJGVsWzBdLmNsaWVudFdpZHRoO1xuICAgICAgdmFyIHN3aXBlckhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB2YXIgc3dpcGVyT2Zmc2V0ID0gc3dpcGVyLiRlbC5vZmZzZXQoKTtcbiAgICAgIGlmIChydGwpIHN3aXBlck9mZnNldC5sZWZ0IC09IHN3aXBlci4kZWxbMF0uc2Nyb2xsTGVmdDtcbiAgICAgIHZhciBzd2lwZXJDb29yZCA9IFtbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXJXaWR0aCwgc3dpcGVyT2Zmc2V0LnRvcF0sIFtzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcCArIHN3aXBlckhlaWdodF0sIFtzd2lwZXJPZmZzZXQubGVmdCArIHN3aXBlcldpZHRoLCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVySGVpZ2h0XV07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyQ29vcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHBvaW50ID0gc3dpcGVyQ29vcmRbaV07XG5cbiAgICAgICAgaWYgKHBvaW50WzBdID49IDAgJiYgcG9pbnRbMF0gPD0gd2luZG93V2lkdGggJiYgcG9pbnRbMV0gPj0gMCAmJiBwb2ludFsxXSA8PSB3aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICBpZiAocG9pbnRbMF0gPT09IDAgJiYgcG9pbnRbMV0gPT09IDApIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaW5WaWV3KSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIGlmIChpc1BhZ2VVcCB8fCBpc1BhZ2VEb3duIHx8IGlzQXJyb3dMZWZ0IHx8IGlzQXJyb3dSaWdodCkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGlzUGFnZURvd24gfHwgaXNBcnJvd1JpZ2h0KSAmJiAhcnRsIHx8IChpc1BhZ2VVcCB8fCBpc0Fycm93TGVmdCkgJiYgcnRsKSBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICBpZiAoKGlzUGFnZVVwIHx8IGlzQXJyb3dMZWZ0KSAmJiAhcnRsIHx8IChpc1BhZ2VEb3duIHx8IGlzQXJyb3dSaWdodCkgJiYgcnRsKSBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1BhZ2VVcCB8fCBpc1BhZ2VEb3duIHx8IGlzQXJyb3dVcCB8fCBpc0Fycm93RG93bikge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNQYWdlRG93biB8fCBpc0Fycm93RG93bikgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgaWYgKGlzUGFnZVVwIHx8IGlzQXJyb3dVcCkgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdrZXlQcmVzcycsIGtjKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgICBpZiAoc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHJldHVybjtcbiAgICAoMCwgX2RvbS5kZWZhdWx0KShkb2N1bWVudCkub24oJ2tleWRvd24nLCBzd2lwZXIua2V5Ym9hcmQuaGFuZGxlKTtcbiAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCA9IHRydWU7XG4gIH0sXG4gIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGRvY3VtZW50ID0gKDAsIF9zc3JXaW5kb3cuZ2V0RG9jdW1lbnQpKCk7XG4gICAgaWYgKCFzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCkgcmV0dXJuO1xuICAgICgwLCBfZG9tLmRlZmF1bHQpKGRvY3VtZW50KS5vZmYoJ2tleWRvd24nLCBzd2lwZXIua2V5Ym9hcmQuaGFuZGxlKTtcbiAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCA9IGZhbHNlO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAna2V5Ym9hcmQnLFxuICBwYXJhbXM6IHtcbiAgICBrZXlib2FyZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcbiAgICAgIHBhZ2VVcERvd246IHRydWVcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAga2V5Ym9hcmQ6IF9leHRlbmRzKHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH0sIEtleWJvYXJkKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5rZXlib2FyZC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmtleWJvYXJkLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgTGF6eSA9IHtcbiAgbG9hZEluU2xpZGU6IGZ1bmN0aW9uIGxvYWRJblNsaWRlKGluZGV4LCBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICBpZiAobG9hZEluRHVwbGljYXRlID09PSB2b2lkIDApIHtcbiAgICAgIGxvYWRJbkR1cGxpY2F0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubGF6eTtcbiAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICB2YXIgJHNsaWRlRWwgPSBpc1ZpcnR1YWwgPyBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIGluZGV4ICsgXCJcXFwiXVwiKSA6IHN3aXBlci5zbGlkZXMuZXEoaW5kZXgpO1xuICAgIHZhciAkaW1hZ2VzID0gJHNsaWRlRWwuZmluZChcIi5cIiArIHBhcmFtcy5lbGVtZW50Q2xhc3MgKyBcIjpub3QoLlwiICsgcGFyYW1zLmxvYWRlZENsYXNzICsgXCIpOm5vdCguXCIgKyBwYXJhbXMubG9hZGluZ0NsYXNzICsgXCIpXCIpO1xuXG4gICAgaWYgKCRzbGlkZUVsLmhhc0NsYXNzKHBhcmFtcy5lbGVtZW50Q2xhc3MpICYmICEkc2xpZGVFbC5oYXNDbGFzcyhwYXJhbXMubG9hZGVkQ2xhc3MpICYmICEkc2xpZGVFbC5oYXNDbGFzcyhwYXJhbXMubG9hZGluZ0NsYXNzKSkge1xuICAgICAgJGltYWdlcy5wdXNoKCRzbGlkZUVsWzBdKTtcbiAgICB9XG5cbiAgICBpZiAoJGltYWdlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAkaW1hZ2VzLmVhY2goZnVuY3Rpb24gKGltYWdlRWwpIHtcbiAgICAgIHZhciAkaW1hZ2VFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKGltYWdlRWwpO1xuICAgICAgJGltYWdlRWwuYWRkQ2xhc3MocGFyYW1zLmxvYWRpbmdDbGFzcyk7XG4gICAgICB2YXIgYmFja2dyb3VuZCA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgdmFyIHNyYyA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc3JjJyk7XG4gICAgICB2YXIgc3Jjc2V0ID0gJGltYWdlRWwuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgIHZhciBzaXplcyA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgIHZhciAkcGljdHVyZUVsID0gJGltYWdlRWwucGFyZW50KCdwaWN0dXJlJyk7XG4gICAgICBzd2lwZXIubG9hZEltYWdlKCRpbWFnZUVsWzBdLCBzcmMgfHwgYmFja2dyb3VuZCwgc3Jjc2V0LCBzaXplcywgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IHN3aXBlciAmJiAhc3dpcGVyLnBhcmFtcyB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgICAgICAkaW1hZ2VFbC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBcInVybChcXFwiXCIgKyBiYWNrZ3JvdW5kICsgXCJcXFwiKVwiKTtcbiAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLWJhY2tncm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzcmNzZXQnLCBzcmNzZXQpO1xuICAgICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2l6ZXMpIHtcbiAgICAgICAgICAgICRpbWFnZUVsLmF0dHIoJ3NpemVzJywgc2l6ZXMpO1xuICAgICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgkcGljdHVyZUVsLmxlbmd0aCkge1xuICAgICAgICAgICAgJHBpY3R1cmVFbC5jaGlsZHJlbignc291cmNlJykuZWFjaChmdW5jdGlvbiAoc291cmNlRWwpIHtcbiAgICAgICAgICAgICAgdmFyICRzb3VyY2UgPSAoMCwgX2RvbS5kZWZhdWx0KShzb3VyY2VFbCk7XG5cbiAgICAgICAgICAgICAgaWYgKCRzb3VyY2UuYXR0cignZGF0YS1zcmNzZXQnKSkge1xuICAgICAgICAgICAgICAgICRzb3VyY2UuYXR0cignc3Jjc2V0JywgJHNvdXJjZS5hdHRyKCdkYXRhLXNyY3NldCcpKTtcbiAgICAgICAgICAgICAgICAkc291cmNlLnJlbW92ZUF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICRpbWFnZUVsLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICRpbWFnZUVsLmFkZENsYXNzKHBhcmFtcy5sb2FkZWRDbGFzcykucmVtb3ZlQ2xhc3MocGFyYW1zLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgICRzbGlkZUVsLmZpbmQoXCIuXCIgKyBwYXJhbXMucHJlbG9hZGVyQ2xhc3MpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3AgJiYgbG9hZEluRHVwbGljYXRlKSB7XG4gICAgICAgICAgdmFyIHNsaWRlT3JpZ2luYWxJbmRleCA9ICRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG5cbiAgICAgICAgICBpZiAoJHNsaWRlRWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbihcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBzbGlkZU9yaWdpbmFsSW5kZXggKyBcIlxcXCJdOm5vdCguXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIik7XG4gICAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShvcmlnaW5hbFNsaWRlLmluZGV4KCksIGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGR1cGxpY2F0ZWRTbGlkZSA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgc2xpZGVPcmlnaW5hbEluZGV4ICsgXCJcXFwiXVwiKTtcbiAgICAgICAgICAgIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKGR1cGxpY2F0ZWRTbGlkZS5pbmRleCgpLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVyLmVtaXQoJ2xhenlJbWFnZVJlYWR5JywgJHNsaWRlRWxbMF0sICRpbWFnZUVsWzBdKTtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzd2lwZXIuZW1pdCgnbGF6eUltYWdlTG9hZCcsICRzbGlkZUVsWzBdLCAkaW1hZ2VFbFswXSk7XG4gICAgfSk7XG4gIH0sXG4gIGxvYWQ6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgICAgc3dpcGVyUGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlclBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlclBhcmFtcy5sYXp5O1xuICAgIHZhciBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyUGFyYW1zLnNsaWRlc1BlclZpZXc7XG5cbiAgICBpZiAoc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICBzbGlkZXNQZXJWaWV3ID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzbGlkZUV4aXN0KGluZGV4KSB7XG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIGlmICgkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyUGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBpbmRleCArIFwiXFxcIl1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2xpZGVzW2luZGV4XSkgcmV0dXJuIHRydWU7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzbGlkZUluZGV4KHNsaWRlRWwpIHtcbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfZG9tLmRlZmF1bHQpKHNsaWRlRWwpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX2RvbS5kZWZhdWx0KShzbGlkZUVsKS5pbmRleCgpO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkKSBzd2lwZXIubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyUGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKS5lYWNoKGZ1bmN0aW9uIChzbGlkZUVsKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGlzVmlydHVhbCA/ICgwLCBfZG9tLmRlZmF1bHQpKHNsaWRlRWwpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgOiAoMCwgX2RvbS5kZWZhdWx0KShzbGlkZUVsKS5pbmRleCgpO1xuICAgICAgICBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShpbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgICBmb3IgKHZhciBpID0gYWN0aXZlSW5kZXg7IGkgPCBhY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXc7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVFeGlzdChpKSkgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKGFjdGl2ZUluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmxvYWRQcmV2TmV4dCkge1xuICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPiAxIHx8IHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQgJiYgcGFyYW1zLmxvYWRQcmV2TmV4dEFtb3VudCA+IDEpIHtcbiAgICAgICAgdmFyIGFtb3VudCA9IHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQ7XG4gICAgICAgIHZhciBzcHYgPSBzbGlkZXNQZXJWaWV3O1xuICAgICAgICB2YXIgbWF4SW5kZXggPSBNYXRoLm1pbihhY3RpdmVJbmRleCArIHNwdiArIE1hdGgubWF4KGFtb3VudCwgc3B2KSwgc2xpZGVzLmxlbmd0aCk7XG4gICAgICAgIHZhciBtaW5JbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4IC0gTWF0aC5tYXgoc3B2LCBhbW91bnQpLCAwKTsgLy8gTmV4dCBTbGlkZXNcblxuICAgICAgICBmb3IgKHZhciBfaSA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldzsgX2kgPCBtYXhJbmRleDsgX2kgKz0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZUV4aXN0KF9pKSkgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoX2kpO1xuICAgICAgICB9IC8vIFByZXYgU2xpZGVzXG5cblxuICAgICAgICBmb3IgKHZhciBfaTIgPSBtaW5JbmRleDsgX2kyIDwgYWN0aXZlSW5kZXg7IF9pMiArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlRXhpc3QoX2kyKSkgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoX2kyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5leHRTbGlkZSA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXJQYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgICAgICBpZiAobmV4dFNsaWRlLmxlbmd0aCA+IDApIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKHNsaWRlSW5kZXgobmV4dFNsaWRlKSk7XG4gICAgICAgIHZhciBwcmV2U2xpZGUgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyUGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgaWYgKHByZXZTbGlkZS5sZW5ndGggPiAwKSBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShzbGlkZUluZGV4KHByZXZTbGlkZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY2hlY2tJblZpZXdPbkxvYWQ6IGZ1bmN0aW9uIGNoZWNrSW5WaWV3T25Mb2FkKCkge1xuICAgIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciAkc2Nyb2xsRWxlbWVudCA9IHN3aXBlci5wYXJhbXMubGF6eS5zY3JvbGxpbmdFbGVtZW50ID8gKDAsIF9kb20uZGVmYXVsdCkoc3dpcGVyLnBhcmFtcy5sYXp5LnNjcm9sbGluZ0VsZW1lbnQpIDogKDAsIF9kb20uZGVmYXVsdCkod2luZG93KTtcbiAgICB2YXIgaXNXaW5kb3cgPSAkc2Nyb2xsRWxlbWVudFswXSA9PT0gd2luZG93O1xuICAgIHZhciBzY3JvbGxFbGVtZW50V2lkdGggPSBpc1dpbmRvdyA/IHdpbmRvdy5pbm5lcldpZHRoIDogJHNjcm9sbEVsZW1lbnRbMF0ub2Zmc2V0V2lkdGg7XG4gICAgdmFyIHNjcm9sbEVsZW1lbnRIZWlnaHQgPSBpc1dpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6ICRzY3JvbGxFbGVtZW50WzBdLm9mZnNldEhlaWdodDtcbiAgICB2YXIgc3dpcGVyT2Zmc2V0ID0gc3dpcGVyLiRlbC5vZmZzZXQoKTtcbiAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICB2YXIgaW5WaWV3ID0gZmFsc2U7XG4gICAgaWYgKHJ0bCkgc3dpcGVyT2Zmc2V0LmxlZnQgLT0gc3dpcGVyLiRlbFswXS5zY3JvbGxMZWZ0O1xuICAgIHZhciBzd2lwZXJDb29yZCA9IFtbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXIud2lkdGgsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXIuaGVpZ2h0XSwgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVyLmhlaWdodF1dO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIHBvaW50ID0gc3dpcGVyQ29vcmRbaV07XG5cbiAgICAgIGlmIChwb2ludFswXSA+PSAwICYmIHBvaW50WzBdIDw9IHNjcm9sbEVsZW1lbnRXaWR0aCAmJiBwb2ludFsxXSA+PSAwICYmIHBvaW50WzFdIDw9IHNjcm9sbEVsZW1lbnRIZWlnaHQpIHtcbiAgICAgICAgaWYgKHBvaW50WzBdID09PSAwICYmIHBvaW50WzFdID09PSAwKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluVmlldykge1xuICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgJHNjcm9sbEVsZW1lbnQub2ZmKCdzY3JvbGwnLCBzd2lwZXIubGF6eS5jaGVja0luVmlld09uTG9hZCk7XG4gICAgfSBlbHNlIGlmICghc3dpcGVyLmxhenkuc2Nyb2xsSGFuZGxlckF0dGFjaGVkKSB7XG4gICAgICBzd2lwZXIubGF6eS5zY3JvbGxIYW5kbGVyQXR0YWNoZWQgPSB0cnVlO1xuICAgICAgJHNjcm9sbEVsZW1lbnQub24oJ3Njcm9sbCcsIHN3aXBlci5sYXp5LmNoZWNrSW5WaWV3T25Mb2FkKTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdsYXp5JyxcbiAgcGFyYW1zOiB7XG4gICAgbGF6eToge1xuICAgICAgY2hlY2tJblZpZXc6IGZhbHNlLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBsb2FkUHJldk5leHQ6IGZhbHNlLFxuICAgICAgbG9hZFByZXZOZXh0QW1vdW50OiAxLFxuICAgICAgbG9hZE9uVHJhbnNpdGlvblN0YXJ0OiBmYWxzZSxcbiAgICAgIHNjcm9sbGluZ0VsZW1lbnQ6ICcnLFxuICAgICAgZWxlbWVudENsYXNzOiAnc3dpcGVyLWxhenknLFxuICAgICAgbG9hZGluZ0NsYXNzOiAnc3dpcGVyLWxhenktbG9hZGluZycsXG4gICAgICBsb2FkZWRDbGFzczogJ3N3aXBlci1sYXp5LWxvYWRlZCcsXG4gICAgICBwcmVsb2FkZXJDbGFzczogJ3N3aXBlci1sYXp5LXByZWxvYWRlcidcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgbGF6eTogX2V4dGVuZHMoe1xuICAgICAgICBpbml0aWFsSW1hZ2VMb2FkZWQ6IGZhbHNlXG4gICAgICB9LCBMYXp5KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzKSB7XG4gICAgICAgIHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlID09PSAwKSB7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuY2hlY2tJblZpZXcpIHtcbiAgICAgICAgICBzd2lwZXIubGF6eS5jaGVja0luVmlld09uTG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsOiBmdW5jdGlvbiBzY3JvbGwoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiAhc3dpcGVyLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICAnc2Nyb2xsYmFyRHJhZ01vdmUgcmVzaXplIF9mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJzogZnVuY3Rpb24gbGF6eUxvYWQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQgfHwgIXN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQgJiYgIXN3aXBlci5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCkge1xuICAgICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCAmJiAhc3dpcGVyLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCkge1xuICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24gc2xpZGVDaGFuZ2Uoc3dpcGVyKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9zc3JXaW5kb3cgPSByZXF1aXJlKFwic3NyLXdpbmRvd1wiKTtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0V2ZW50U3VwcG9ydGVkKCkge1xuICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgdmFyIGV2ZW50TmFtZSA9ICdvbndoZWVsJztcbiAgdmFyIGlzU3VwcG9ydGVkID0gKGV2ZW50TmFtZSBpbiBkb2N1bWVudCk7XG5cbiAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZXZlbnROYW1lLCAncmV0dXJuOycpO1xuICAgIGlzU3VwcG9ydGVkID0gdHlwZW9mIGVsZW1lbnRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlmICghaXNTdXBwb3J0ZWQgJiYgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24gJiYgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSAmJiAvLyBhbHdheXMgcmV0dXJucyB0cnVlIGluIG5ld2VyIGJyb3dzZXJzIGFzIHBlciB0aGUgc3RhbmRhcmQuXG4gIC8vIEBzZWUgaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1oYXNmZWF0dXJlXG4gIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJycsICcnKSAhPT0gdHJ1ZSkge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgd2F5IHRvIHRlc3Qgc3VwcG9ydCBmb3IgdGhlIGB3aGVlbGAgZXZlbnQgaW4gSUU5Ky5cbiAgICBpc1N1cHBvcnRlZCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJ0V2ZW50cy53aGVlbCcsICczLjAnKTtcbiAgfVxuXG4gIHJldHVybiBpc1N1cHBvcnRlZDtcbn1cblxudmFyIE1vdXNld2hlZWwgPSB7XG4gIGxhc3RTY3JvbGxUaW1lOiAoMCwgX3V0aWxzLm5vdykoKSxcbiAgbGFzdEV2ZW50QmVmb3JlU25hcDogdW5kZWZpbmVkLFxuICByZWNlbnRXaGVlbEV2ZW50czogW10sXG4gIGV2ZW50OiBmdW5jdGlvbiBldmVudCgpIHtcbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdmaXJlZm94JykgPiAtMSkgcmV0dXJuICdET01Nb3VzZVNjcm9sbCc7XG4gICAgcmV0dXJuIGlzRXZlbnRTdXBwb3J0ZWQoKSA/ICd3aGVlbCcgOiAnbW91c2V3aGVlbCc7XG4gIH0sXG4gIG5vcm1hbGl6ZTogZnVuY3Rpb24gbm9ybWFsaXplKGUpIHtcbiAgICAvLyBSZWFzb25hYmxlIGRlZmF1bHRzXG4gICAgdmFyIFBJWEVMX1NURVAgPSAxMDtcbiAgICB2YXIgTElORV9IRUlHSFQgPSA0MDtcbiAgICB2YXIgUEFHRV9IRUlHSFQgPSA4MDA7XG4gICAgdmFyIHNYID0gMDtcbiAgICB2YXIgc1kgPSAwOyAvLyBzcGluWCwgc3BpbllcblxuICAgIHZhciBwWCA9IDA7XG4gICAgdmFyIHBZID0gMDsgLy8gcGl4ZWxYLCBwaXhlbFlcbiAgICAvLyBMZWdhY3lcblxuICAgIGlmICgnZGV0YWlsJyBpbiBlKSB7XG4gICAgICBzWSA9IGUuZGV0YWlsO1xuICAgIH1cblxuICAgIGlmICgnd2hlZWxEZWx0YScgaW4gZSkge1xuICAgICAgc1kgPSAtZS53aGVlbERlbHRhIC8gMTIwO1xuICAgIH1cblxuICAgIGlmICgnd2hlZWxEZWx0YVknIGluIGUpIHtcbiAgICAgIHNZID0gLWUud2hlZWxEZWx0YVkgLyAxMjA7XG4gICAgfVxuXG4gICAgaWYgKCd3aGVlbERlbHRhWCcgaW4gZSkge1xuICAgICAgc1ggPSAtZS53aGVlbERlbHRhWCAvIDEyMDtcbiAgICB9IC8vIHNpZGUgc2Nyb2xsaW5nIG9uIEZGIHdpdGggRE9NTW91c2VTY3JvbGxcblxuXG4gICAgaWYgKCdheGlzJyBpbiBlICYmIGUuYXhpcyA9PT0gZS5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgIHNYID0gc1k7XG4gICAgICBzWSA9IDA7XG4gICAgfVxuXG4gICAgcFggPSBzWCAqIFBJWEVMX1NURVA7XG4gICAgcFkgPSBzWSAqIFBJWEVMX1NURVA7XG5cbiAgICBpZiAoJ2RlbHRhWScgaW4gZSkge1xuICAgICAgcFkgPSBlLmRlbHRhWTtcbiAgICB9XG5cbiAgICBpZiAoJ2RlbHRhWCcgaW4gZSkge1xuICAgICAgcFggPSBlLmRlbHRhWDtcbiAgICB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSAmJiAhcFgpIHtcbiAgICAgIC8vIGlmIHVzZXIgc2Nyb2xscyB3aXRoIHNoaWZ0IGhlIHdhbnRzIGhvcml6b250YWwgc2Nyb2xsXG4gICAgICBwWCA9IHBZO1xuICAgICAgcFkgPSAwO1xuICAgIH1cblxuICAgIGlmICgocFggfHwgcFkpICYmIGUuZGVsdGFNb2RlKSB7XG4gICAgICBpZiAoZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgICAgLy8gZGVsdGEgaW4gTElORSB1bml0c1xuICAgICAgICBwWCAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgcFkgKj0gTElORV9IRUlHSFQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWx0YSBpbiBQQUdFIHVuaXRzXG4gICAgICAgIHBYICo9IFBBR0VfSEVJR0hUO1xuICAgICAgICBwWSAqPSBQQUdFX0hFSUdIVDtcbiAgICAgIH1cbiAgICB9IC8vIEZhbGwtYmFjayBpZiBzcGluIGNhbm5vdCBiZSBkZXRlcm1pbmVkXG5cblxuICAgIGlmIChwWCAmJiAhc1gpIHtcbiAgICAgIHNYID0gcFggPCAxID8gLTEgOiAxO1xuICAgIH1cblxuICAgIGlmIChwWSAmJiAhc1kpIHtcbiAgICAgIHNZID0gcFkgPCAxID8gLTEgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzcGluWDogc1gsXG4gICAgICBzcGluWTogc1ksXG4gICAgICBwaXhlbFg6IHBYLFxuICAgICAgcGl4ZWxZOiBwWVxuICAgIH07XG4gIH0sXG4gIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLm1vdXNlRW50ZXJlZCA9IHRydWU7XG4gIH0sXG4gIGhhbmRsZU1vdXNlTGVhdmU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLm1vdXNlRW50ZXJlZCA9IGZhbHNlO1xuICB9LFxuICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIHZhciBlID0gZXZlbnQ7XG4gICAgdmFyIGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWw7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHN3aXBlci4kZWw7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgIHRhcmdldCA9ICgwLCBfZG9tLmRlZmF1bHQpKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZXQpO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLm1vdXNlRW50ZXJlZCAmJiAhdGFyZ2V0WzBdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhcGFyYW1zLnJlbGVhc2VPbkVkZ2VzKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvLyBqcXVlcnkgZml4XG5cbiAgICB2YXIgZGVsdGEgPSAwO1xuICAgIHZhciBydGxGYWN0b3IgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLTEgOiAxO1xuICAgIHZhciBkYXRhID0gTW91c2V3aGVlbC5ub3JtYWxpemUoZSk7XG5cbiAgICBpZiAocGFyYW1zLmZvcmNlVG9BeGlzKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkpIGRlbHRhID0gLWRhdGEucGl4ZWxYICogcnRsRmFjdG9yO2Vsc2UgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxZKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxYKSkgZGVsdGEgPSAtZGF0YS5waXhlbFk7ZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsdGEgPSBNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkgPyAtZGF0YS5waXhlbFggKiBydGxGYWN0b3IgOiAtZGF0YS5waXhlbFk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocGFyYW1zLmludmVydCkgZGVsdGEgPSAtZGVsdGE7IC8vIEdldCB0aGUgc2Nyb2xsIHBvc2l0aW9uc1xuXG4gICAgdmFyIHBvc2l0aW9ucyA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKSArIGRlbHRhICogcGFyYW1zLnNlbnNpdGl2aXR5O1xuICAgIGlmIChwb3NpdGlvbnMgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSBwb3NpdGlvbnMgPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgaWYgKHBvc2l0aW9ucyA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHBvc2l0aW9ucyA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTsgLy8gV2hlbiBsb29wIGlzIHRydWU6XG4gICAgLy8gICAgIHRoZSBkaXNhYmxlUGFyZW50U3dpcGVyIHdpbGwgYmUgdHJ1ZS5cbiAgICAvLyBXaGVuIGxvb3AgaXMgZmFsc2U6XG4gICAgLy8gICAgIGlmIHRoZSBzY3JvbGwgcG9zaXRpb25zIGlzIG5vdCBvbiBlZGdlLFxuICAgIC8vICAgICB0aGVuIHRoZSBkaXNhYmxlUGFyZW50U3dpcGVyIHdpbGwgYmUgdHJ1ZS5cbiAgICAvLyAgICAgaWYgdGhlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9ucyxcbiAgICAvLyAgICAgdGhlbiB0aGUgZGlzYWJsZVBhcmVudFN3aXBlciB3aWxsIGJlIGZhbHNlLlxuXG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IHN3aXBlci5wYXJhbXMubG9vcCA/IHRydWUgOiAhKHBvc2l0aW9ucyA9PT0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIHx8IHBvc2l0aW9ucyA9PT0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKTtcbiAgICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlciAmJiBzd2lwZXIucGFyYW1zLm5lc3RlZCkgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgLy8gUmVnaXN0ZXIgdGhlIG5ldyBldmVudCBpbiBhIHZhcmlhYmxlIHdoaWNoIHN0b3JlcyB0aGUgcmVsZXZhbnQgZGF0YVxuICAgICAgdmFyIG5ld0V2ZW50ID0ge1xuICAgICAgICB0aW1lOiAoMCwgX3V0aWxzLm5vdykoKSxcbiAgICAgICAgZGVsdGE6IE1hdGguYWJzKGRlbHRhKSxcbiAgICAgICAgZGlyZWN0aW9uOiBNYXRoLnNpZ24oZGVsdGEpLFxuICAgICAgICByYXc6IGV2ZW50XG4gICAgICB9OyAvLyBLZWVwIHRoZSBtb3N0IHJlY2VudCBldmVudHNcblxuICAgICAgdmFyIHJlY2VudFdoZWVsRXZlbnRzID0gc3dpcGVyLm1vdXNld2hlZWwucmVjZW50V2hlZWxFdmVudHM7XG5cbiAgICAgIGlmIChyZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zaGlmdCgpOyAvLyBvbmx5IHN0b3JlIHRoZSBsYXN0IE4gZXZlbnRzXG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2RXZlbnQgPSByZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPyByZWNlbnRXaGVlbEV2ZW50c1tyZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbiAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnB1c2gobmV3RXZlbnQpOyAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgcHJldmlvdXMgcmVjb3JkZWQgZXZlbnQ6XG4gICAgICAvLyAgIElmIGRpcmVjdGlvbiBoYXMgY2hhbmdlZCBvclxuICAgICAgLy8gICBpZiB0aGUgc2Nyb2xsIGlzIHF1aWNrZXIgdGhhbiB0aGUgcHJldmlvdXMgb25lOlxuICAgICAgLy8gICAgIEFuaW1hdGUgdGhlIHNsaWRlci5cbiAgICAgIC8vIEVsc2UgKHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIHdoZWVsIGlzIG1vdmVkKTpcbiAgICAgIC8vICAgICBBbmltYXRlIHRoZSBzbGlkZXIuXG5cbiAgICAgIGlmIChwcmV2RXZlbnQpIHtcbiAgICAgICAgaWYgKG5ld0V2ZW50LmRpcmVjdGlvbiAhPT0gcHJldkV2ZW50LmRpcmVjdGlvbiB8fCBuZXdFdmVudC5kZWx0YSA+IHByZXZFdmVudC5kZWx0YSB8fCBuZXdFdmVudC50aW1lID4gcHJldkV2ZW50LnRpbWUgKyAxNTApIHtcbiAgICAgICAgICBzd2lwZXIubW91c2V3aGVlbC5hbmltYXRlU2xpZGVyKG5ld0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwuYW5pbWF0ZVNsaWRlcihuZXdFdmVudCk7XG4gICAgICB9IC8vIElmIGl0J3MgdGltZSB0byByZWxlYXNlIHRoZSBzY3JvbGw6XG4gICAgICAvLyAgIFJldHVybiBub3cgc28geW91IGRvbid0IGhpdCB0aGUgcHJldmVudERlZmF1bHQuXG5cblxuICAgICAgaWYgKHN3aXBlci5tb3VzZXdoZWVsLnJlbGVhc2VTY3JvbGwobmV3RXZlbnQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGcmVlbW9kZSBvciBzY3JvbGxDb250YWluZXI6XG4gICAgICAvLyBJZiB3ZSByZWNlbnRseSBzbmFwcGVkIGFmdGVyIGEgbW9tZW50dW0gc2Nyb2xsLCB0aGVuIGlnbm9yZSB3aGVlbCBldmVudHNcbiAgICAgIC8vIHRvIGdpdmUgdGltZSBmb3IgdGhlIGRlY2VsZXJhdGlvbiB0byBmaW5pc2guIFN0b3AgaWdub3JpbmcgYWZ0ZXIgNTAwIG1zZWNzXG4gICAgICAvLyBvciBpZiBpdCdzIGEgbmV3IHNjcm9sbCAobGFyZ2VyIGRlbHRhIG9yIGludmVyc2Ugc2lnbiBhcyBsYXN0IGV2ZW50IGJlZm9yZVxuICAgICAgLy8gYW4gZW5kLW9mLW1vbWVudHVtIHNuYXApLlxuICAgICAgdmFyIF9uZXdFdmVudCA9IHtcbiAgICAgICAgdGltZTogKDAsIF91dGlscy5ub3cpKCksXG4gICAgICAgIGRlbHRhOiBNYXRoLmFicyhkZWx0YSksXG4gICAgICAgIGRpcmVjdGlvbjogTWF0aC5zaWduKGRlbHRhKVxuICAgICAgfTtcbiAgICAgIHZhciBsYXN0RXZlbnRCZWZvcmVTbmFwID0gc3dpcGVyLm1vdXNld2hlZWwubGFzdEV2ZW50QmVmb3JlU25hcDtcbiAgICAgIHZhciBpZ25vcmVXaGVlbEV2ZW50cyA9IGxhc3RFdmVudEJlZm9yZVNuYXAgJiYgX25ld0V2ZW50LnRpbWUgPCBsYXN0RXZlbnRCZWZvcmVTbmFwLnRpbWUgKyA1MDAgJiYgX25ld0V2ZW50LmRlbHRhIDw9IGxhc3RFdmVudEJlZm9yZVNuYXAuZGVsdGEgJiYgX25ld0V2ZW50LmRpcmVjdGlvbiA9PT0gbGFzdEV2ZW50QmVmb3JlU25hcC5kaXJlY3Rpb247XG5cbiAgICAgIGlmICghaWdub3JlV2hlZWxFdmVudHMpIHtcbiAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwubGFzdEV2ZW50QmVmb3JlU25hcCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKSArIGRlbHRhICogcGFyYW1zLnNlbnNpdGl2aXR5O1xuICAgICAgICB2YXIgd2FzQmVnaW5uaW5nID0gc3dpcGVyLmlzQmVnaW5uaW5nO1xuICAgICAgICB2YXIgd2FzRW5kID0gc3dpcGVyLmlzRW5kO1xuICAgICAgICBpZiAocG9zaXRpb24gPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSBwb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkgcG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHBvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgICAgIGlmICghd2FzQmVnaW5uaW5nICYmIHN3aXBlci5pc0JlZ2lubmluZyB8fCAhd2FzRW5kICYmIHN3aXBlci5pc0VuZCkge1xuICAgICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICAgIC8vIFdoZW4gd2hlZWwgc2Nyb2xsaW5nIHN0YXJ0cyB3aXRoIHN0aWNreSAoYWthIHNuYXApIGVuYWJsZWQsIHRoZW4gZGV0ZWN0XG4gICAgICAgICAgLy8gdGhlIGVuZCBvZiBhIG1vbWVudHVtIHNjcm9sbCBieSBzdG9yaW5nIHJlY2VudCAoTj0xNT8pIHdoZWVsIGV2ZW50cy5cbiAgICAgICAgICAvLyAxLiBkbyBhbGwgTiBldmVudHMgaGF2ZSBkZWNyZWFzaW5nIG9yIHNhbWUgKGFic29sdXRlIHZhbHVlKSBkZWx0YT9cbiAgICAgICAgICAvLyAyLiBkaWQgYWxsIE4gZXZlbnRzIGFycml2ZSBpbiB0aGUgbGFzdCBNIChNPTUwMD8pIG1zZWNzP1xuICAgICAgICAgIC8vIDMuIGRvZXMgdGhlIGVhcmxpZXN0IGV2ZW50IGhhdmUgYW4gKGFic29sdXRlIHZhbHVlKSBkZWx0YSB0aGF0J3NcbiAgICAgICAgICAvLyAgICBhdCBsZWFzdCBQIChQPTE/KSBsYXJnZXIgdGhhbiB0aGUgbW9zdCByZWNlbnQgZXZlbnQncyBkZWx0YT9cbiAgICAgICAgICAvLyA0LiBkb2VzIHRoZSBsYXRlc3QgZXZlbnQgaGF2ZSBhIGRlbHRhIHRoYXQncyBzbWFsbGVyIHRoYW4gUSAoUT02PykgcGl4ZWxzP1xuICAgICAgICAgIC8vIElmIDEtNCBhcmUgXCJ5ZXNcIiB0aGVuIHdlJ3JlIG5lYXIgdGhlIGVuZCBvZiBhIG1vbWVudHVtIHNjcm9sbCBkZWNlbGVyYXRpb24uXG4gICAgICAgICAgLy8gU25hcCBpbW1lZGlhdGVseSBhbmQgaWdub3JlIHJlbWFpbmluZyB3aGVlbCBldmVudHMgaW4gdGhpcyBzY3JvbGwuXG4gICAgICAgICAgLy8gU2VlIGNvbW1lbnQgYWJvdmUgZm9yIFwicmVtYWluaW5nIHdoZWVsIGV2ZW50cyBpbiB0aGlzIHNjcm9sbFwiIGRldGVybWluYXRpb24uXG4gICAgICAgICAgLy8gSWYgMS00IGFyZW4ndCBzYXRpc2ZpZWQsIHRoZW4gd2FpdCB0byBzbmFwIHVudGlsIDUwMG1zIGFmdGVyIHRoZSBsYXN0IGV2ZW50LlxuICAgICAgICAgIGNsZWFyVGltZW91dChzd2lwZXIubW91c2V3aGVlbC50aW1lb3V0KTtcbiAgICAgICAgICBzd2lwZXIubW91c2V3aGVlbC50aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHZhciBfcmVjZW50V2hlZWxFdmVudHMgPSBzd2lwZXIubW91c2V3aGVlbC5yZWNlbnRXaGVlbEV2ZW50cztcblxuICAgICAgICAgIGlmIChfcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID49IDE1KSB7XG4gICAgICAgICAgICBfcmVjZW50V2hlZWxFdmVudHMuc2hpZnQoKTsgLy8gb25seSBzdG9yZSB0aGUgbGFzdCBOIGV2ZW50c1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9wcmV2RXZlbnQgPSBfcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID8gX3JlY2VudFdoZWVsRXZlbnRzW19yZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBmaXJzdEV2ZW50ID0gX3JlY2VudFdoZWVsRXZlbnRzWzBdO1xuXG4gICAgICAgICAgX3JlY2VudFdoZWVsRXZlbnRzLnB1c2goX25ld0V2ZW50KTtcblxuICAgICAgICAgIGlmIChfcHJldkV2ZW50ICYmIChfbmV3RXZlbnQuZGVsdGEgPiBfcHJldkV2ZW50LmRlbHRhIHx8IF9uZXdFdmVudC5kaXJlY3Rpb24gIT09IF9wcmV2RXZlbnQuZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgLy8gSW5jcmVhc2luZyBvciByZXZlcnNlLXNpZ24gZGVsdGEgbWVhbnMgdGhlIHVzZXIgc3RhcnRlZCBzY3JvbGxpbmcgYWdhaW4uIENsZWFyIHRoZSB3aGVlbCBldmVudCBsb2cuXG4gICAgICAgICAgICBfcmVjZW50V2hlZWxFdmVudHMuc3BsaWNlKDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX3JlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA+PSAxNSAmJiBfbmV3RXZlbnQudGltZSAtIGZpcnN0RXZlbnQudGltZSA8IDUwMCAmJiBmaXJzdEV2ZW50LmRlbHRhIC0gX25ld0V2ZW50LmRlbHRhID49IDEgJiYgX25ld0V2ZW50LmRlbHRhIDw9IDYpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIGRlY2VsZXJhdGlvbiBvZiBhIG1vbWVudHVtIHNjcm9sbCwgc28gdGhlcmUncyBubyBuZWVkXG4gICAgICAgICAgICAvLyB0byB3YWl0IGZvciBtb3JlIGV2ZW50cy4gU25hcCBBU0FQIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgICAgICAgICAvLyBBbHNvLCBiZWNhdXNlIHRoZXJlJ3Mgc29tZSByZW1haW5pbmcgbW9tZW50dW0gd2UnbGwgYmlhcyB0aGUgc25hcCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGRpcmVjdGlvbiBvZiB0aGUgb25nb2luZyBzY3JvbGwgYmVjYXVzZSBpdCdzIGJldHRlciBVWCBmb3IgdGhlIHNjcm9sbCB0byBzbmFwXG4gICAgICAgICAgICAvLyBpbiB0aGUgc2FtZSBkaXJlY3Rpb24gYXMgdGhlIHNjcm9sbCBpbnN0ZWFkIG9mIHJldmVyc2luZyB0byBzbmFwLiAgVGhlcmVmb3JlLFxuICAgICAgICAgICAgLy8gaWYgaXQncyBhbHJlYWR5IHNjcm9sbGVkIG1vcmUgdGhhbiAyMCUgaW4gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBrZWVwIGdvaW5nLlxuICAgICAgICAgICAgdmFyIHNuYXBUb1RocmVzaG9sZCA9IGRlbHRhID4gMCA/IDAuOCA6IDAuMjtcbiAgICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXAgPSBfbmV3RXZlbnQ7XG5cbiAgICAgICAgICAgIF9yZWNlbnRXaGVlbEV2ZW50cy5zcGxpY2UoMCk7XG5cbiAgICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLnRpbWVvdXQgPSAoMCwgX3V0aWxzLm5leHRUaWNrKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB1bmRlZmluZWQsIHNuYXBUb1RocmVzaG9sZCk7XG4gICAgICAgICAgICB9LCAwKTsgLy8gbm8gZGVsYXk7IG1vdmUgb24gbmV4dCB0aWNrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzd2lwZXIubW91c2V3aGVlbC50aW1lb3V0KSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBnZXQgaGVyZSwgdGhlbiB3ZSBoYXZlbid0IGRldGVjdGVkIHRoZSBlbmQgb2YgYSBtb21lbnR1bSBzY3JvbGwsIHNvXG4gICAgICAgICAgICAvLyB3ZSdsbCBjb25zaWRlciBhIHNjcm9sbCBcImNvbXBsZXRlXCIgd2hlbiB0aGVyZSBoYXZlbid0IGJlZW4gYW55IHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgLy8gZm9yIDUwMG1zLlxuICAgICAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwudGltZW91dCA9ICgwLCBfdXRpbHMubmV4dFRpY2spKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHNuYXBUb1RocmVzaG9sZCA9IDAuNTtcbiAgICAgICAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwubGFzdEV2ZW50QmVmb3JlU25hcCA9IF9uZXdFdmVudDtcblxuICAgICAgICAgICAgICBfcmVjZW50V2hlZWxFdmVudHMuc3BsaWNlKDApO1xuXG4gICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB1bmRlZmluZWQsIHNuYXBUb1RocmVzaG9sZCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBFbWl0IGV2ZW50XG5cblxuICAgICAgICBpZiAoIWlnbm9yZVdoZWVsRXZlbnRzKSBzd2lwZXIuZW1pdCgnc2Nyb2xsJywgZSk7IC8vIFN0b3AgYXV0b3BsYXlcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheSAmJiBzd2lwZXIucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24pIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7IC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIHx8IHBvc2l0aW9uID09PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7ZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBhbmltYXRlU2xpZGVyOiBmdW5jdGlvbiBhbmltYXRlU2xpZGVyKG5ld0V2ZW50KSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcblxuICAgIGlmICh0aGlzLnBhcmFtcy5tb3VzZXdoZWVsLnRocmVzaG9sZERlbHRhICYmIG5ld0V2ZW50LmRlbHRhIDwgdGhpcy5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGREZWx0YSkge1xuICAgICAgLy8gUHJldmVudCBpZiBkZWx0YSBvZiB3aGVlbCBzY3JvbGwgZGVsdGEgaXMgYmVsb3cgY29uZmlndXJlZCB0aHJlc2hvbGRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGRUaW1lICYmICgwLCBfdXRpbHMubm93KSgpIC0gc3dpcGVyLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUgPCB0aGlzLnBhcmFtcy5tb3VzZXdoZWVsLnRocmVzaG9sZFRpbWUpIHtcbiAgICAgIC8vIFByZXZlbnQgaWYgdGltZSBiZXR3ZWVuIHNjcm9sbHMgaXMgYmVsb3cgY29uZmlndXJlZCB0aHJlc2hvbGRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIElmIHRoZSBtb3ZlbWVudCBpcyBOT1QgYmlnIGVub3VnaCBhbmRcbiAgICAvLyBpZiB0aGUgbGFzdCB0aW1lIHRoZSB1c2VyIHNjcm9sbGVkIHdhcyB0b28gY2xvc2UgdG8gdGhlIGN1cnJlbnQgb25lIChhdm9pZCBjb250aW51b3VzbHkgdHJpZ2dlcmluZyB0aGUgc2xpZGVyKTpcbiAgICAvLyAgIERvbid0IGdvIGFueSBmdXJ0aGVyIChhdm9pZCBpbnNpZ25pZmljYW50IHNjcm9sbCBtb3ZlbWVudCkuXG5cblxuICAgIGlmIChuZXdFdmVudC5kZWx0YSA+PSA2ICYmICgwLCBfdXRpbHMubm93KSgpIC0gc3dpcGVyLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUgPCA2MCkge1xuICAgICAgLy8gUmV0dXJuIGZhbHNlIGFzIGEgZGVmYXVsdFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBJZiB1c2VyIGlzIHNjcm9sbGluZyB0b3dhcmRzIHRoZSBlbmQ6XG4gICAgLy8gICBJZiB0aGUgc2xpZGVyIGhhc24ndCBoaXQgdGhlIGxhdGVzdCBzbGlkZSBvclxuICAgIC8vICAgaWYgdGhlIHNsaWRlciBpcyBhIGxvb3AgYW5kXG4gICAgLy8gICBpZiB0aGUgc2xpZGVyIGlzbid0IG1vdmluZyByaWdodCBub3c6XG4gICAgLy8gICAgIEdvIHRvIG5leHQgc2xpZGUgYW5kXG4gICAgLy8gICAgIGVtaXQgYSBzY3JvbGwgZXZlbnQuXG4gICAgLy8gRWxzZSAodGhlIHVzZXIgaXMgc2Nyb2xsaW5nIHRvd2FyZHMgdGhlIGJlZ2lubmluZykgYW5kXG4gICAgLy8gaWYgdGhlIHNsaWRlciBoYXNuJ3QgaGl0IHRoZSBmaXJzdCBzbGlkZSBvclxuICAgIC8vIGlmIHRoZSBzbGlkZXIgaXMgYSBsb29wIGFuZFxuICAgIC8vIGlmIHRoZSBzbGlkZXIgaXNuJ3QgbW92aW5nIHJpZ2h0IG5vdzpcbiAgICAvLyAgIEdvIHRvIHByZXYgc2xpZGUgYW5kXG4gICAgLy8gICBlbWl0IGEgc2Nyb2xsIGV2ZW50LlxuXG5cbiAgICBpZiAobmV3RXZlbnQuZGlyZWN0aW9uIDwgMCkge1xuICAgICAgaWYgKCghc3dpcGVyLmlzRW5kIHx8IHN3aXBlci5wYXJhbXMubG9vcCkgJiYgIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsJywgbmV3RXZlbnQucmF3KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCghc3dpcGVyLmlzQmVnaW5uaW5nIHx8IHN3aXBlci5wYXJhbXMubG9vcCkgJiYgIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGwnLCBuZXdFdmVudC5yYXcpO1xuICAgIH0gLy8gSWYgeW91IGdvdCBoZXJlIGlzIGJlY2F1c2UgYW4gYW5pbWF0aW9uIGhhcyBiZWVuIHRyaWdnZXJlZCBzbyBzdG9yZSB0aGUgY3VycmVudCB0aW1lXG5cblxuICAgIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID0gbmV3IHdpbmRvdy5EYXRlKCkuZ2V0VGltZSgpOyAvLyBSZXR1cm4gZmFsc2UgYXMgYSBkZWZhdWx0XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIHJlbGVhc2VTY3JvbGw6IGZ1bmN0aW9uIHJlbGVhc2VTY3JvbGwobmV3RXZlbnQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsO1xuXG4gICAgaWYgKG5ld0V2ZW50LmRpcmVjdGlvbiA8IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiBwYXJhbXMucmVsZWFzZU9uRWRnZXMpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRydWUgdG8gYW5pbWF0ZSBzY3JvbGwgb24gZWRnZXNcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiBwYXJhbXMucmVsZWFzZU9uRWRnZXMpIHtcbiAgICAgIC8vIFJldHVybiB0cnVlIHRvIGFuaW1hdGUgc2Nyb2xsIG9uIGVkZ2VzXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBldmVudCA9IE1vdXNld2hlZWwuZXZlbnQoKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0YXJnZXQgPSBzd2lwZXIuJGVsO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZXQgIT09ICdjb250YWluZXInKSB7XG4gICAgICB0YXJnZXQgPSAoMCwgX2RvbS5kZWZhdWx0KShzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0KTtcbiAgICB9XG5cbiAgICB0YXJnZXQub24oJ21vdXNlZW50ZXInLCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGVNb3VzZUVudGVyKTtcbiAgICB0YXJnZXQub24oJ21vdXNlbGVhdmUnLCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICB0YXJnZXQub24oZXZlbnQsIHN3aXBlci5tb3VzZXdoZWVsLmhhbmRsZSk7XG4gICAgc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRpc2FibGU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGV2ZW50ID0gTW91c2V3aGVlbC5ldmVudCgpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLndyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFldmVudCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0YXJnZXQgPSBzd2lwZXIuJGVsO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZXQgIT09ICdjb250YWluZXInKSB7XG4gICAgICB0YXJnZXQgPSAoMCwgX2RvbS5kZWZhdWx0KShzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0KTtcbiAgICB9XG5cbiAgICB0YXJnZXQub2ZmKGV2ZW50LCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGUpO1xuICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ21vdXNld2hlZWwnLFxuICBwYXJhbXM6IHtcbiAgICBtb3VzZXdoZWVsOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcbiAgICAgIGludmVydDogZmFsc2UsXG4gICAgICBmb3JjZVRvQXhpczogZmFsc2UsXG4gICAgICBzZW5zaXRpdml0eTogMSxcbiAgICAgIGV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gICAgICB0aHJlc2hvbGREZWx0YTogbnVsbCxcbiAgICAgIHRocmVzaG9sZFRpbWU6IG51bGxcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgbW91c2V3aGVlbDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgbGFzdFNjcm9sbFRpbWU6ICgwLCBfdXRpbHMubm93KSgpLFxuICAgICAgICBsYXN0RXZlbnRCZWZvcmVTbmFwOiB1bmRlZmluZWQsXG4gICAgICAgIHJlY2VudFdoZWVsRXZlbnRzOiBbXSxcbiAgICAgICAgZW5hYmxlOiBNb3VzZXdoZWVsLmVuYWJsZSxcbiAgICAgICAgZGlzYWJsZTogTW91c2V3aGVlbC5kaXNhYmxlLFxuICAgICAgICBoYW5kbGU6IE1vdXNld2hlZWwuaGFuZGxlLFxuICAgICAgICBoYW5kbGVNb3VzZUVudGVyOiBNb3VzZXdoZWVsLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIGhhbmRsZU1vdXNlTGVhdmU6IE1vdXNld2hlZWwuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgYW5pbWF0ZVNsaWRlcjogTW91c2V3aGVlbC5hbmltYXRlU2xpZGVyLFxuICAgICAgICByZWxlYXNlU2Nyb2xsOiBNb3VzZXdoZWVsLnJlbGVhc2VTY3JvbGxcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwuZGlzYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmVuYWJsZWQpIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZSgpO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSBzd2lwZXIubW91c2V3aGVlbC5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIE5hdmlnYXRpb24gPSB7XG4gIHRvZ2dsZUVsOiBmdW5jdGlvbiB0b2dnbGVFbCgkZWwsIGRpc2FibGVkKSB7XG4gICAgJGVsW2Rpc2FibGVkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHRoaXMucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcyk7XG4gICAgaWYgKCRlbFswXSAmJiAkZWxbMF0udGFnTmFtZSA9PT0gJ0JVVFRPTicpICRlbFswXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgTmF2aWdhdGlvbiBCdXR0b25zXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICB2YXIgdG9nZ2xlRWwgPSBzd2lwZXIubmF2aWdhdGlvbi50b2dnbGVFbDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgdmFyIF9zd2lwZXIkbmF2aWdhdGlvbiA9IHN3aXBlci5uYXZpZ2F0aW9uLFxuICAgICAgICAkbmV4dEVsID0gX3N3aXBlciRuYXZpZ2F0aW9uLiRuZXh0RWwsXG4gICAgICAgICRwcmV2RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24uJHByZXZFbDtcblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICB0b2dnbGVFbCgkcHJldkVsLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZ2dsZUVsKCRwcmV2RWwsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgJHByZXZFbFtzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgICB0b2dnbGVFbCgkbmV4dEVsLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZ2dsZUVsKCRuZXh0RWwsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgJG5leHRFbFtzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgfSxcbiAgb25QcmV2Q2xpY2s6IGZ1bmN0aW9uIG9uUHJldkNsaWNrKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICB9LFxuICBvbk5leHRDbGljazogZnVuY3Rpb24gb25OZXh0Q2xpY2soZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICBpZiAoIShwYXJhbXMubmV4dEVsIHx8IHBhcmFtcy5wcmV2RWwpKSByZXR1cm47XG4gICAgdmFyICRuZXh0RWw7XG4gICAgdmFyICRwcmV2RWw7XG5cbiAgICBpZiAocGFyYW1zLm5leHRFbCkge1xuICAgICAgJG5leHRFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKHBhcmFtcy5uZXh0RWwpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLm5leHRFbCA9PT0gJ3N0cmluZycgJiYgJG5leHRFbC5sZW5ndGggPiAxICYmIHN3aXBlci4kZWwuZmluZChwYXJhbXMubmV4dEVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgJG5leHRFbCA9IHN3aXBlci4kZWwuZmluZChwYXJhbXMubmV4dEVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnByZXZFbCkge1xuICAgICAgJHByZXZFbCA9ICgwLCBfZG9tLmRlZmF1bHQpKHBhcmFtcy5wcmV2RWwpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLnByZXZFbCA9PT0gJ3N0cmluZycgJiYgJHByZXZFbC5sZW5ndGggPiAxICYmIHN3aXBlci4kZWwuZmluZChwYXJhbXMucHJldkVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgJHByZXZFbCA9IHN3aXBlci4kZWwuZmluZChwYXJhbXMucHJldkVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCA+IDApIHtcbiAgICAgICRuZXh0RWwub24oJ2NsaWNrJywgc3dpcGVyLm5hdmlnYXRpb24ub25OZXh0Q2xpY2spO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgJHByZXZFbC5vbignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vblByZXZDbGljayk7XG4gICAgfVxuXG4gICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci5uYXZpZ2F0aW9uLCB7XG4gICAgICAkbmV4dEVsOiAkbmV4dEVsLFxuICAgICAgbmV4dEVsOiAkbmV4dEVsICYmICRuZXh0RWxbMF0sXG4gICAgICAkcHJldkVsOiAkcHJldkVsLFxuICAgICAgcHJldkVsOiAkcHJldkVsICYmICRwcmV2RWxbMF1cbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgX3N3aXBlciRuYXZpZ2F0aW9uMiA9IHN3aXBlci5uYXZpZ2F0aW9uLFxuICAgICAgICAkbmV4dEVsID0gX3N3aXBlciRuYXZpZ2F0aW9uMi4kbmV4dEVsLFxuICAgICAgICAkcHJldkVsID0gX3N3aXBlciRuYXZpZ2F0aW9uMi4kcHJldkVsO1xuXG4gICAgaWYgKCRuZXh0RWwgJiYgJG5leHRFbC5sZW5ndGgpIHtcbiAgICAgICRuZXh0RWwub2ZmKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uTmV4dENsaWNrKTtcbiAgICAgICRuZXh0RWwucmVtb3ZlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoKSB7XG4gICAgICAkcHJldkVsLm9mZignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vblByZXZDbGljayk7XG4gICAgICAkcHJldkVsLnJlbW92ZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICduYXZpZ2F0aW9uJyxcbiAgcGFyYW1zOiB7XG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBudWxsLFxuICAgICAgcHJldkVsOiBudWxsLFxuICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgZGlzYWJsZWRDbGFzczogJ3N3aXBlci1idXR0b24tZGlzYWJsZWQnLFxuICAgICAgaGlkZGVuQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWhpZGRlbicsXG4gICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWxvY2snXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIG5hdmlnYXRpb246IF9leHRlbmRzKHt9LCBOYXZpZ2F0aW9uKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi5pbml0KCk7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICB9LFxuICAgIHRvRWRnZTogZnVuY3Rpb24gdG9FZGdlKHN3aXBlcikge1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgfSxcbiAgICBmcm9tRWRnZTogZnVuY3Rpb24gZnJvbUVkZ2Uoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi5kZXN0cm95KCk7XG4gICAgfSxcbiAgICBjbGljazogZnVuY3Rpb24gY2xpY2soc3dpcGVyLCBlKSB7XG4gICAgICB2YXIgX3N3aXBlciRuYXZpZ2F0aW9uMyA9IHN3aXBlci5uYXZpZ2F0aW9uLFxuICAgICAgICAgICRuZXh0RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24zLiRuZXh0RWwsXG4gICAgICAgICAgJHByZXZFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbjMuJHByZXZFbDtcbiAgICAgIHZhciB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGVPbkNsaWNrICYmICEoMCwgX2RvbS5kZWZhdWx0KSh0YXJnZXRFbCkuaXMoJHByZXZFbCkgJiYgISgwLCBfZG9tLmRlZmF1bHQpKHRhcmdldEVsKS5pcygkbmV4dEVsKSkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgKHN3aXBlci5wYWdpbmF0aW9uLmVsID09PSB0YXJnZXRFbCB8fCBzd2lwZXIucGFnaW5hdGlvbi5lbC5jb250YWlucyh0YXJnZXRFbCkpKSByZXR1cm47XG4gICAgICAgIHZhciBpc0hpZGRlbjtcblxuICAgICAgICBpZiAoJG5leHRFbCkge1xuICAgICAgICAgIGlzSGlkZGVuID0gJG5leHRFbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICB9IGVsc2UgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgICBpc0hpZGRlbiA9ICRwcmV2RWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCduYXZpZ2F0aW9uU2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCduYXZpZ2F0aW9uSGlkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICAgICAkbmV4dEVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZFbCkge1xuICAgICAgICAgICRwcmV2RWwudG9nZ2xlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBQYWdpbmF0aW9uID0ge1xuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBSZW5kZXIgfHwgVXBkYXRlIFBhZ2luYXRpb24gYnVsbGV0cy9pdGVtc1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFwYXJhbXMuZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICB2YXIgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsOyAvLyBDdXJyZW50L1RvdGFsXG5cbiAgICB2YXIgY3VycmVudDtcbiAgICB2YXIgdG90YWwgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHNsaWRlc0xlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIGN1cnJlbnQgPSBNYXRoLmNlaWwoKHN3aXBlci5hY3RpdmVJbmRleCAtIHN3aXBlci5sb29wZWRTbGlkZXMpIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG5cbiAgICAgIGlmIChjdXJyZW50ID4gc2xpZGVzTGVuZ3RoIC0gMSAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSB7XG4gICAgICAgIGN1cnJlbnQgLT0gc2xpZGVzTGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50ID4gdG90YWwgLSAxKSBjdXJyZW50IC09IHRvdGFsO1xuICAgICAgaWYgKGN1cnJlbnQgPCAwICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvblR5cGUgIT09ICdidWxsZXRzJykgY3VycmVudCA9IHRvdGFsICsgY3VycmVudDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzd2lwZXIuc25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3VycmVudCA9IHN3aXBlci5zbmFwSW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggfHwgMDtcbiAgICB9IC8vIFR5cGVzXG5cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgYnVsbGV0cyA9IHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHM7XG4gICAgICB2YXIgZmlyc3RJbmRleDtcbiAgICAgIHZhciBsYXN0SW5kZXg7XG4gICAgICB2YXIgbWlkSW5kZXg7XG5cbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSA9IGJ1bGxldHMuZXEoMClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ291dGVyV2lkdGgnIDogJ291dGVySGVpZ2h0J10odHJ1ZSk7XG4gICAgICAgICRlbC5jc3Moc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3dpZHRoJyA6ICdoZWlnaHQnLCBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplICogKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KSArIFwicHhcIik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPiAxICYmIHN3aXBlci5wcmV2aW91c0luZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggKz0gY3VycmVudCAtIHN3aXBlci5wcmV2aW91c0luZGV4O1xuXG4gICAgICAgICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA+IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxKSB7XG4gICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmlyc3RJbmRleCA9IGN1cnJlbnQgLSBzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXg7XG4gICAgICAgIGxhc3RJbmRleCA9IGZpcnN0SW5kZXggKyAoTWF0aC5taW4oYnVsbGV0cy5sZW5ndGgsIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMpIC0gMSk7XG4gICAgICAgIG1pZEluZGV4ID0gKGxhc3RJbmRleCArIGZpcnN0SW5kZXgpIC8gMjtcbiAgICAgIH1cblxuICAgICAgYnVsbGV0cy5yZW1vdmVDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIiBcIiArIHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQgXCIgKyBwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0LW5leHQgXCIgKyBwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2IFwiICsgcGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldi1wcmV2IFwiICsgcGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbWFpblwiKTtcblxuICAgICAgaWYgKCRlbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGJ1bGxldHMuZWFjaChmdW5jdGlvbiAoYnVsbGV0KSB7XG4gICAgICAgICAgdmFyICRidWxsZXQgPSAoMCwgX2RvbS5kZWZhdWx0KShidWxsZXQpO1xuICAgICAgICAgIHZhciBidWxsZXRJbmRleCA9ICRidWxsZXQuaW5kZXgoKTtcblxuICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA+PSBmaXJzdEluZGV4ICYmIGJ1bGxldEluZGV4IDw9IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAkYnVsbGV0LmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW1haW5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gZmlyc3RJbmRleCkge1xuICAgICAgICAgICAgICAkYnVsbGV0LnByZXYoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2XCIpLnByZXYoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2LXByZXZcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICRidWxsZXQubmV4dCgpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHRcIikubmV4dCgpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyICRidWxsZXQgPSBidWxsZXRzLmVxKGN1cnJlbnQpO1xuICAgICAgICB2YXIgYnVsbGV0SW5kZXggPSAkYnVsbGV0LmluZGV4KCk7XG4gICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcblxuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgdmFyICRmaXJzdERpc3BsYXllZEJ1bGxldCA9IGJ1bGxldHMuZXEoZmlyc3RJbmRleCk7XG4gICAgICAgICAgdmFyICRsYXN0RGlzcGxheWVkQnVsbGV0ID0gYnVsbGV0cy5lcShsYXN0SW5kZXgpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJ1bGxldHMuZXEoaSkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbWFpblwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPj0gYnVsbGV0cy5sZW5ndGggLSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9pID0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0czsgX2kgPj0gMDsgX2kgLT0gMSkge1xuICAgICAgICAgICAgICAgIGJ1bGxldHMuZXEoYnVsbGV0cy5sZW5ndGggLSBfaSkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbWFpblwiKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJ1bGxldHMuZXEoYnVsbGV0cy5sZW5ndGggLSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMSkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRmaXJzdERpc3BsYXllZEJ1bGxldC5wcmV2KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldlwiKS5wcmV2KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldi1wcmV2XCIpO1xuICAgICAgICAgICAgICAkbGFzdERpc3BsYXllZEJ1bGxldC5uZXh0KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dFwiKS5uZXh0KCkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dC1uZXh0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZmlyc3REaXNwbGF5ZWRCdWxsZXQucHJldigpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXZcIikucHJldigpLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXYtcHJldlwiKTtcbiAgICAgICAgICAgICRsYXN0RGlzcGxheWVkQnVsbGV0Lm5leHQoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0XCIpLm5leHQoKS5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0LW5leHRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgdmFyIGR5bmFtaWNCdWxsZXRzTGVuZ3RoID0gTWF0aC5taW4oYnVsbGV0cy5sZW5ndGgsIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KTtcbiAgICAgICAgdmFyIGJ1bGxldHNPZmZzZXQgPSAoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSAqIGR5bmFtaWNCdWxsZXRzTGVuZ3RoIC0gc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSkgLyAyIC0gbWlkSW5kZXggKiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplO1xuICAgICAgICB2YXIgb2Zmc2V0UHJvcCA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIGJ1bGxldHMuY3NzKHN3aXBlci5pc0hvcml6b250YWwoKSA/IG9mZnNldFByb3AgOiAndG9wJywgYnVsbGV0c09mZnNldCArIFwicHhcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAkZWwuZmluZChcIi5cIiArIHBhcmFtcy5jdXJyZW50Q2xhc3MpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uQ3VycmVudChjdXJyZW50ICsgMSkpO1xuICAgICAgJGVsLmZpbmQoXCIuXCIgKyBwYXJhbXMudG90YWxDbGFzcykudGV4dChwYXJhbXMuZm9ybWF0RnJhY3Rpb25Ub3RhbCh0b3RhbCkpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgdmFyIHByb2dyZXNzYmFyRGlyZWN0aW9uO1xuXG4gICAgICBpZiAocGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGUpIHtcbiAgICAgICAgcHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2NhbGUgPSAoY3VycmVudCArIDEpIC8gdG90YWw7XG4gICAgICB2YXIgc2NhbGVYID0gMTtcbiAgICAgIHZhciBzY2FsZVkgPSAxO1xuXG4gICAgICBpZiAocHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBzY2FsZVggPSBzY2FsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjYWxlWSA9IHNjYWxlO1xuICAgICAgfVxuXG4gICAgICAkZWwuZmluZChcIi5cIiArIHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcykudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlWChcIiArIHNjYWxlWCArIFwiKSBzY2FsZVkoXCIgKyBzY2FsZVkgKyBcIilcIikudHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdjdXN0b20nICYmIHBhcmFtcy5yZW5kZXJDdXN0b20pIHtcbiAgICAgICRlbC5odG1sKHBhcmFtcy5yZW5kZXJDdXN0b20oc3dpcGVyLCBjdXJyZW50ICsgMSwgdG90YWwpKTtcbiAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgJGVsWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25VcGRhdGUnLCAkZWxbMF0pO1xuICAgIH1cblxuICAgICRlbFtzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBSZW5kZXIgQ29udGFpbmVyXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdmFyIHNsaWRlc0xlbmd0aCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIHZhciAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7XG4gICAgdmFyIHBhZ2luYXRpb25IVE1MID0gJyc7XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJykge1xuICAgICAgdmFyIG51bWJlck9mQnVsbGV0cyA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDIpIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIG51bWJlck9mQnVsbGV0cyA+IHNsaWRlc0xlbmd0aCkge1xuICAgICAgICBudW1iZXJPZkJ1bGxldHMgPSBzbGlkZXNMZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBwYXJhbXMucmVuZGVyQnVsbGV0LmNhbGwoc3dpcGVyLCBpLCBwYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IFwiPFwiICsgcGFyYW1zLmJ1bGxldEVsZW1lbnQgKyBcIiBjbGFzcz1cXFwiXCIgKyBwYXJhbXMuYnVsbGV0Q2xhc3MgKyBcIlxcXCI+PC9cIiArIHBhcmFtcy5idWxsZXRFbGVtZW50ICsgXCI+XCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyA9ICRlbC5maW5kKFwiLlwiICsgcGFyYW1zLmJ1bGxldENsYXNzLnJlcGxhY2UoLyAvZywgJy4nKSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICBpZiAocGFyYW1zLnJlbmRlckZyYWN0aW9uKSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlckZyYWN0aW9uLmNhbGwoc3dpcGVyLCBwYXJhbXMuY3VycmVudENsYXNzLCBwYXJhbXMudG90YWxDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IFwiPHNwYW4gY2xhc3M9XFxcIlwiICsgcGFyYW1zLmN1cnJlbnRDbGFzcyArIFwiXFxcIj48L3NwYW4+XCIgKyAnIC8gJyArIChcIjxzcGFuIGNsYXNzPVxcXCJcIiArIHBhcmFtcy50b3RhbENsYXNzICsgXCJcXFwiPjwvc3Bhbj5cIik7XG4gICAgICB9XG5cbiAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicpIHtcbiAgICAgIGlmIChwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIpIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIuY2FsbChzd2lwZXIsIHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IFwiPHNwYW4gY2xhc3M9XFxcIlwiICsgcGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzICsgXCJcXFwiPjwvc3Bhbj5cIjtcbiAgICAgIH1cblxuICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSAhPT0gJ2N1c3RvbScpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgc3dpcGVyLnBhZ2luYXRpb24uJGVsWzBdKTtcbiAgICB9XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoIXBhcmFtcy5lbCkgcmV0dXJuO1xuICAgIHZhciAkZWwgPSAoMCwgX2RvbS5kZWZhdWx0KShwYXJhbXMuZWwpO1xuICAgIGlmICgkZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiAkZWwubGVuZ3RoID4gMSkge1xuICAgICAgJGVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5lbCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5jbGlja2FibGVDbGFzcyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoXCJcIiArIHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUgKyBcIi1keW5hbWljXCIpO1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gMDtcblxuICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPCAxKSB7XG4gICAgICAgIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJyAmJiBwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZSkge1xuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAkZWwub24oJ2NsaWNrJywgXCIuXCIgKyBwYXJhbXMuYnVsbGV0Q2xhc3MucmVwbGFjZSgvIC9nLCAnLicpLCBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaW5kZXggPSAoMCwgX2RvbS5kZWZhdWx0KSh0aGlzKS5pbmRleCgpICogc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgaW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci5wYWdpbmF0aW9uLCB7XG4gICAgICAkZWw6ICRlbCxcbiAgICAgIGVsOiAkZWxbMF1cbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmICghcGFyYW1zLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uJGVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICB2YXIgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuICAgICRlbC5yZW1vdmVDbGFzcyhwYXJhbXMuaGlkZGVuQ2xhc3MpO1xuICAgICRlbC5yZW1vdmVDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlKTtcbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cykgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5yZW1vdmVDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuXG4gICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICRlbC5vZmYoJ2NsaWNrJywgXCIuXCIgKyBwYXJhbXMuYnVsbGV0Q2xhc3MucmVwbGFjZSgvIC9nLCAnLicpKTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgcGFyYW1zOiB7XG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IG51bGwsXG4gICAgICBidWxsZXRFbGVtZW50OiAnc3BhbicsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBudWxsLFxuICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IG51bGwsXG4gICAgICByZW5kZXJGcmFjdGlvbjogbnVsbCxcbiAgICAgIHJlbmRlckN1c3RvbTogbnVsbCxcbiAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGU6IGZhbHNlLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzc2Jhcicgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxuICAgICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiBmdW5jdGlvbiBmb3JtYXRGcmFjdGlvbkN1cnJlbnQobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICB9LFxuICAgICAgZm9ybWF0RnJhY3Rpb25Ub3RhbDogZnVuY3Rpb24gZm9ybWF0RnJhY3Rpb25Ub3RhbChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH0sXG4gICAgICBidWxsZXRDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCcsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUnLFxuICAgICAgbW9kaWZpZXJDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLScsXG4gICAgICAvLyBORVdcbiAgICAgIGN1cnJlbnRDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnQnLFxuICAgICAgdG90YWxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyxcbiAgICAgIGhpZGRlbkNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuJyxcbiAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCcsXG4gICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZScsXG4gICAgICBjbGlja2FibGVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZScsXG4gICAgICAvLyBORVdcbiAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWxvY2snXG4gICAgfVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIHBhZ2luYXRpb246IF9leHRlbmRzKHtcbiAgICAgICAgZHluYW1pY0J1bGxldEluZGV4OiAwXG4gICAgICB9LCBQYWdpbmF0aW9uKVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi5pbml0KCk7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgYWN0aXZlSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uIGFjdGl2ZUluZGV4Q2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHN3aXBlci5zbmFwSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc25hcEluZGV4Q2hhbmdlOiBmdW5jdGlvbiBzbmFwSW5kZXhDaGFuZ2Uoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsaWRlc0xlbmd0aENoYW5nZTogZnVuY3Rpb24gc2xpZGVzTGVuZ3RoQ2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbmFwR3JpZExlbmd0aENoYW5nZTogZnVuY3Rpb24gc25hcEdyaWRMZW5ndGhDaGFuZ2Uoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZGVzdHJveSgpO1xuICAgIH0sXG4gICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKHN3aXBlciwgZSkge1xuICAgICAgdmFyIHRhcmdldEVsID0gZS50YXJnZXQ7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGVPbkNsaWNrICYmIHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPiAwICYmICEoMCwgX2RvbS5kZWZhdWx0KSh0YXJnZXRFbCkuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSkge1xuICAgICAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgKHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCAmJiB0YXJnZXRFbCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsIHx8IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCAmJiB0YXJnZXRFbCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaXNIaWRkZW4gPSBzd2lwZXIucGFnaW5hdGlvbi4kZWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKTtcblxuICAgICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblNob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvbkhpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLiRlbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBQYXJhbGxheCA9IHtcbiAgc2V0VHJhbnNmb3JtOiBmdW5jdGlvbiBzZXRUcmFuc2Zvcm0oZWwsIHByb2dyZXNzKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHJ0bCA9IHN3aXBlci5ydGw7XG4gICAgdmFyICRlbCA9ICgwLCBfZG9tLmRlZmF1bHQpKGVsKTtcbiAgICB2YXIgcnRsRmFjdG9yID0gcnRsID8gLTEgOiAxO1xuICAgIHZhciBwID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4JykgfHwgJzAnO1xuICAgIHZhciB4ID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXgnKTtcbiAgICB2YXIgeSA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC15Jyk7XG4gICAgdmFyIHNjYWxlID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlJyk7XG4gICAgdmFyIG9wYWNpdHkgPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eScpO1xuXG4gICAgaWYgKHggfHwgeSkge1xuICAgICAgeCA9IHggfHwgJzAnO1xuICAgICAgeSA9IHkgfHwgJzAnO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICB4ID0gcDtcbiAgICAgIHkgPSAnMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSBwO1xuICAgICAgeCA9ICcwJztcbiAgICB9XG5cbiAgICBpZiAoeC5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgeCA9IHBhcnNlSW50KHgsIDEwKSAqIHByb2dyZXNzICogcnRsRmFjdG9yICsgXCIlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSB4ICogcHJvZ3Jlc3MgKiBydGxGYWN0b3IgKyBcInB4XCI7XG4gICAgfVxuXG4gICAgaWYgKHkuaW5kZXhPZignJScpID49IDApIHtcbiAgICAgIHkgPSBwYXJzZUludCh5LCAxMCkgKiBwcm9ncmVzcyArIFwiJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0geSAqIHByb2dyZXNzICsgXCJweFwiO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcgJiYgb3BhY2l0eSAhPT0gbnVsbCkge1xuICAgICAgdmFyIGN1cnJlbnRPcGFjaXR5ID0gb3BhY2l0eSAtIChvcGFjaXR5IC0gMSkgKiAoMSAtIE1hdGguYWJzKHByb2dyZXNzKSk7XG4gICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2NhbGUgPT09ICd1bmRlZmluZWQnIHx8IHNjYWxlID09PSBudWxsKSB7XG4gICAgICAkZWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiLCAwcHgpXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY3VycmVudFNjYWxlID0gc2NhbGUgLSAoc2NhbGUgLSAxKSAqICgxIC0gTWF0aC5hYnMocHJvZ3Jlc3MpKTtcbiAgICAgICRlbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIDBweCkgc2NhbGUoXCIgKyBjdXJyZW50U2NhbGUgKyBcIilcIik7XG4gICAgfVxuICB9LFxuICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgICAgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3MsXG4gICAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgICRlbC5jaGlsZHJlbignW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlXScpLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBzd2lwZXIucGFyYWxsYXguc2V0VHJhbnNmb3JtKGVsLCBwcm9ncmVzcyk7XG4gICAgfSk7XG4gICAgc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwsIHNsaWRlSW5kZXgpIHtcbiAgICAgIHZhciBzbGlkZVByb2dyZXNzID0gc2xpZGVFbC5wcm9ncmVzcztcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nKSB7XG4gICAgICAgIHNsaWRlUHJvZ3Jlc3MgKz0gTWF0aC5jZWlsKHNsaWRlSW5kZXggLyAyKSAtIHByb2dyZXNzICogKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZVByb2dyZXNzID0gTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVQcm9ncmVzcywgLTEpLCAxKTtcbiAgICAgICgwLCBfZG9tLmRlZmF1bHQpKHNsaWRlRWwpLmZpbmQoJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZV0nKS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBzd2lwZXIucGFyYWxsYXguc2V0VHJhbnNmb3JtKGVsLCBzbGlkZVByb2dyZXNzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgaWYgKGR1cmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGR1cmF0aW9uID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICRlbCA9IHN3aXBlci4kZWw7XG4gICAgJGVsLmZpbmQoJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZV0nKS5lYWNoKGZ1bmN0aW9uIChwYXJhbGxheEVsKSB7XG4gICAgICB2YXIgJHBhcmFsbGF4RWwgPSAoMCwgX2RvbS5kZWZhdWx0KShwYXJhbGxheEVsKTtcbiAgICAgIHZhciBwYXJhbGxheER1cmF0aW9uID0gcGFyc2VJbnQoJHBhcmFsbGF4RWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb24nKSwgMTApIHx8IGR1cmF0aW9uO1xuICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSBwYXJhbGxheER1cmF0aW9uID0gMDtcbiAgICAgICRwYXJhbGxheEVsLnRyYW5zaXRpb24ocGFyYWxsYXhEdXJhdGlvbik7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdwYXJhbGxheCcsXG4gIHBhcmFtczoge1xuICAgIHBhcmFsbGF4OiB7XG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBwYXJhbGxheDogX2V4dGVuZHMoe30sIFBhcmFsbGF4KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uIGJlZm9yZUluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc3dpcGVyKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihzd2lwZXIsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLnBhcmFsbGF4LnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBTY3JvbGxiYXIgPSB7XG4gIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcixcbiAgICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICAgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3M7XG4gICAgdmFyIGRyYWdTaXplID0gc2Nyb2xsYmFyLmRyYWdTaXplLFxuICAgICAgICB0cmFja1NpemUgPSBzY3JvbGxiYXIudHJhY2tTaXplLFxuICAgICAgICAkZHJhZ0VsID0gc2Nyb2xsYmFyLiRkcmFnRWwsXG4gICAgICAgICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIHZhciBuZXdTaXplID0gZHJhZ1NpemU7XG4gICAgdmFyIG5ld1BvcyA9ICh0cmFja1NpemUgLSBkcmFnU2l6ZSkgKiBwcm9ncmVzcztcblxuICAgIGlmIChydGwpIHtcbiAgICAgIG5ld1BvcyA9IC1uZXdQb3M7XG5cbiAgICAgIGlmIChuZXdQb3MgPiAwKSB7XG4gICAgICAgIG5ld1NpemUgPSBkcmFnU2l6ZSAtIG5ld1BvcztcbiAgICAgICAgbmV3UG9zID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoLW5ld1BvcyArIGRyYWdTaXplID4gdHJhY2tTaXplKSB7XG4gICAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgKyBuZXdQb3M7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuZXdQb3MgPCAwKSB7XG4gICAgICBuZXdTaXplID0gZHJhZ1NpemUgKyBuZXdQb3M7XG4gICAgICBuZXdQb3MgPSAwO1xuICAgIH0gZWxzZSBpZiAobmV3UG9zICsgZHJhZ1NpemUgPiB0cmFja1NpemUpIHtcbiAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgLSBuZXdQb3M7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgJGRyYWdFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIG5ld1BvcyArIFwicHgsIDAsIDApXCIpO1xuICAgICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9IG5ld1NpemUgKyBcInB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICRkcmFnRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIG5ld1BvcyArIFwicHgsIDApXCIpO1xuICAgICAgJGRyYWdFbFswXS5zdHlsZS5oZWlnaHQgPSBuZXdTaXplICsgXCJweFwiO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5zY3JvbGxiYXIudGltZW91dCk7XG4gICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAkZWwudHJhbnNpdGlvbig0MDApO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9LFxuICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIHN3aXBlci5zY3JvbGxiYXIuJGRyYWdFbC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfSxcbiAgdXBkYXRlU2l6ZTogZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgdmFyICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbCxcbiAgICAgICAgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICAkZHJhZ0VsWzBdLnN0eWxlLndpZHRoID0gJyc7XG4gICAgJGRyYWdFbFswXS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB2YXIgdHJhY2tTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJGVsWzBdLm9mZnNldFdpZHRoIDogJGVsWzBdLm9mZnNldEhlaWdodDtcbiAgICB2YXIgZGl2aWRlciA9IHN3aXBlci5zaXplIC8gc3dpcGVyLnZpcnR1YWxTaXplO1xuICAgIHZhciBtb3ZlRGl2aWRlciA9IGRpdmlkZXIgKiAodHJhY2tTaXplIC8gc3dpcGVyLnNpemUpO1xuICAgIHZhciBkcmFnU2l6ZTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICBkcmFnU2l6ZSA9IHRyYWNrU2l6ZSAqIGRpdmlkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdTaXplID0gcGFyc2VJbnQoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemUsIDEwKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLndpZHRoID0gZHJhZ1NpemUgKyBcInB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gZHJhZ1NpemUgKyBcInB4XCI7XG4gICAgfVxuXG4gICAgaWYgKGRpdmlkZXIgPj0gMSkge1xuICAgICAgJGVsWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICRlbFswXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmhpZGUpIHtcbiAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG5cbiAgICAoMCwgX3V0aWxzLmV4dGVuZCkoc2Nyb2xsYmFyLCB7XG4gICAgICB0cmFja1NpemU6IHRyYWNrU2l6ZSxcbiAgICAgIGRpdmlkZXI6IGRpdmlkZXIsXG4gICAgICBtb3ZlRGl2aWRlcjogbW92ZURpdmlkZXIsXG4gICAgICBkcmFnU2l6ZTogZHJhZ1NpemVcbiAgICB9KTtcbiAgICBzY3JvbGxiYXIuJGVsW3N3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgfSxcbiAgZ2V0UG9pbnRlclBvc2l0aW9uOiBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgcmV0dXJuIGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbiAgICB9XG5cbiAgICByZXR1cm4gZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZO1xuICB9LFxuICBzZXREcmFnUG9zaXRpb246IGZ1bmN0aW9uIHNldERyYWdQb3NpdGlvbihlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsXG4gICAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWwsXG4gICAgICAgIGRyYWdTaXplID0gc2Nyb2xsYmFyLmRyYWdTaXplLFxuICAgICAgICB0cmFja1NpemUgPSBzY3JvbGxiYXIudHJhY2tTaXplLFxuICAgICAgICBkcmFnU3RhcnRQb3MgPSBzY3JvbGxiYXIuZHJhZ1N0YXJ0UG9zO1xuICAgIHZhciBwb3NpdGlvblJhdGlvO1xuICAgIHBvc2l0aW9uUmF0aW8gPSAoc2Nyb2xsYmFyLmdldFBvaW50ZXJQb3NpdGlvbihlKSAtICRlbC5vZmZzZXQoKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJ10gLSAoZHJhZ1N0YXJ0UG9zICE9PSBudWxsID8gZHJhZ1N0YXJ0UG9zIDogZHJhZ1NpemUgLyAyKSkgLyAodHJhY2tTaXplIC0gZHJhZ1NpemUpO1xuICAgIHBvc2l0aW9uUmF0aW8gPSBNYXRoLm1heChNYXRoLm1pbihwb3NpdGlvblJhdGlvLCAxKSwgMCk7XG5cbiAgICBpZiAocnRsKSB7XG4gICAgICBwb3NpdGlvblJhdGlvID0gMSAtIHBvc2l0aW9uUmF0aW87XG4gICAgfVxuXG4gICAgdmFyIHBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgKHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgKiBwb3NpdGlvblJhdGlvO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhwb3NpdGlvbik7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfSxcbiAgb25EcmFnU3RhcnQ6IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbCxcbiAgICAgICAgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsO1xuICAgIHN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkID0gdHJ1ZTtcbiAgICBzd2lwZXIuc2Nyb2xsYmFyLmRyYWdTdGFydFBvcyA9IGUudGFyZ2V0ID09PSAkZHJhZ0VsWzBdIHx8IGUudGFyZ2V0ID09PSAkZHJhZ0VsID8gc2Nyb2xsYmFyLmdldFBvaW50ZXJQb3NpdGlvbihlKSAtIGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXSA6IG51bGw7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uKDEwMCk7XG4gICAgJGRyYWdFbC50cmFuc2l0aW9uKDEwMCk7XG4gICAgc2Nyb2xsYmFyLnNldERyYWdQb3NpdGlvbihlKTtcbiAgICBjbGVhclRpbWVvdXQoc3dpcGVyLnNjcm9sbGJhci5kcmFnVGltZW91dCk7XG4gICAgJGVsLnRyYW5zaXRpb24oMCk7XG5cbiAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgICRlbC5jc3MoJ29wYWNpdHknLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ3Njcm9sbC1zbmFwLXR5cGUnLCAnbm9uZScpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzY3JvbGxiYXJEcmFnU3RhcnQnLCBlKTtcbiAgfSxcbiAgb25EcmFnTW92ZTogZnVuY3Rpb24gb25EcmFnTW92ZShlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbCxcbiAgICAgICAgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsO1xuICAgIGlmICghc3dpcGVyLnNjcm9sbGJhci5pc1RvdWNoZWQpIHJldHVybjtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIHNjcm9sbGJhci5zZXREcmFnUG9zaXRpb24oZSk7XG4gICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uKDApO1xuICAgICRlbC50cmFuc2l0aW9uKDApO1xuICAgICRkcmFnRWwudHJhbnNpdGlvbigwKTtcbiAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ01vdmUnLCBlKTtcbiAgfSxcbiAgb25EcmFnRW5kOiBmdW5jdGlvbiBvbkRyYWdFbmQoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcixcbiAgICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgIGlmICghc3dpcGVyLnNjcm9sbGJhci5pc1RvdWNoZWQpIHJldHVybjtcbiAgICBzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdzY3JvbGwtc25hcC10eXBlJywgJycpO1xuICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uKCcnKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgIGNsZWFyVGltZW91dChzd2lwZXIuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0KTtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQgPSAoMCwgX3V0aWxzLm5leHRUaWNrKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICRlbC5jc3MoJ29wYWNpdHknLCAwKTtcbiAgICAgICAgJGVsLnRyYW5zaXRpb24oNDAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzY3JvbGxiYXJEcmFnRW5kJywgZSk7XG5cbiAgICBpZiAocGFyYW1zLnNuYXBPblJlbGVhc2UpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgIH1cbiAgfSxcbiAgZW5hYmxlRHJhZ2dhYmxlOiBmdW5jdGlvbiBlbmFibGVEcmFnZ2FibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICB0b3VjaEV2ZW50c1RvdWNoID0gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnRzRGVza3RvcCA9IHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3AsXG4gICAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICB2YXIgdGFyZ2V0ID0gJGVsWzBdO1xuICAgIHZhciBhY3RpdmVMaXN0ZW5lciA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgIGlmICghc3VwcG9ydC50b3VjaCkge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2gubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICB9LFxuICBkaXNhYmxlRHJhZ2dhYmxlOiBmdW5jdGlvbiBkaXNhYmxlRHJhZ2dhYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICB2YXIgZG9jdW1lbnQgPSAoMCwgX3NzcldpbmRvdy5nZXREb2N1bWVudCkoKTtcbiAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcixcbiAgICAgICAgdG91Y2hFdmVudHNUb3VjaCA9IHN3aXBlci50b3VjaEV2ZW50c1RvdWNoLFxuICAgICAgICB0b3VjaEV2ZW50c0Rlc2t0b3AgPSBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wLFxuICAgICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgdmFyIHRhcmdldCA9ICRlbFswXTtcbiAgICB2YXIgYWN0aXZlTGlzdGVuZXIgPSBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG5cbiAgICBpZiAoIXN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5zdGFydCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3AubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLm1vdmUsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnTW92ZSwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsXG4gICAgICAgICRzd2lwZXJFbCA9IHN3aXBlci4kZWw7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIHZhciAkZWwgPSAoMCwgX2RvbS5kZWZhdWx0KShwYXJhbXMuZWwpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgJGVsLmxlbmd0aCA+IDEgJiYgJHN3aXBlckVsLmZpbmQocGFyYW1zLmVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICRlbCA9ICRzd2lwZXJFbC5maW5kKHBhcmFtcy5lbCk7XG4gICAgfVxuXG4gICAgdmFyICRkcmFnRWwgPSAkZWwuZmluZChcIi5cIiArIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcyk7XG5cbiAgICBpZiAoJGRyYWdFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICRkcmFnRWwgPSAoMCwgX2RvbS5kZWZhdWx0KShcIjxkaXYgY2xhc3M9XFxcIlwiICsgc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ0NsYXNzICsgXCJcXFwiPjwvZGl2PlwiKTtcbiAgICAgICRlbC5hcHBlbmQoJGRyYWdFbCk7XG4gICAgfVxuXG4gICAgKDAsIF91dGlscy5leHRlbmQpKHNjcm9sbGJhciwge1xuICAgICAgJGVsOiAkZWwsXG4gICAgICBlbDogJGVsWzBdLFxuICAgICAgJGRyYWdFbDogJGRyYWdFbCxcbiAgICAgIGRyYWdFbDogJGRyYWdFbFswXVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtcy5kcmFnZ2FibGUpIHtcbiAgICAgIHNjcm9sbGJhci5lbmFibGVEcmFnZ2FibGUoKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKCk7XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICdzY3JvbGxiYXInLFxuICBwYXJhbXM6IHtcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiBudWxsLFxuICAgICAgZHJhZ1NpemU6ICdhdXRvJyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHNuYXBPblJlbGVhc2U6IHRydWUsXG4gICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItc2Nyb2xsYmFyLWxvY2snLFxuICAgICAgZHJhZ0NsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1kcmFnJ1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICBzY3JvbGxiYXI6IF9leHRlbmRzKHtcbiAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcbiAgICAgICAgdGltZW91dDogbnVsbCxcbiAgICAgICAgZHJhZ1RpbWVvdXQ6IG51bGxcbiAgICAgIH0sIFNjcm9sbGJhcilcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci5pbml0KCk7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuc2V0VHJhbnNsYXRlKCk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICB9LFxuICAgIG9ic2VydmVyVXBkYXRlOiBmdW5jdGlvbiBvYnNlcnZlclVwZGF0ZShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihzd2lwZXIsIGR1cmF0aW9uKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG52YXIgX2RvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxzL2RvbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBUaHVtYnMgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHRodW1ic1BhcmFtcyA9IHN3aXBlci5wYXJhbXMudGh1bWJzO1xuICAgIGlmIChzd2lwZXIudGh1bWJzLmluaXRpYWxpemVkKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLnRodW1icy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdmFyIFN3aXBlckNsYXNzID0gc3dpcGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKHRodW1ic1BhcmFtcy5zd2lwZXIgaW5zdGFuY2VvZiBTd2lwZXJDbGFzcykge1xuICAgICAgc3dpcGVyLnRodW1icy5zd2lwZXIgPSB0aHVtYnNQYXJhbXMuc3dpcGVyO1xuICAgICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci50aHVtYnMuc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCB7XG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIudGh1bWJzLnN3aXBlci5wYXJhbXMsIHtcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc09iamVjdCkodGh1bWJzUGFyYW1zLnN3aXBlcikpIHtcbiAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyID0gbmV3IFN3aXBlckNsYXNzKCgwLCBfdXRpbHMuZXh0ZW5kKSh7fSwgdGh1bWJzUGFyYW1zLnN3aXBlciwge1xuICAgICAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlckNyZWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN3aXBlci50aHVtYnMuc3dpcGVyLiRlbC5hZGRDbGFzcyhzd2lwZXIucGFyYW1zLnRodW1icy50aHVtYnNDb250YWluZXJDbGFzcyk7XG4gICAgc3dpcGVyLnRodW1icy5zd2lwZXIub24oJ3RhcCcsIHN3aXBlci50aHVtYnMub25UaHVtYkNsaWNrKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgb25UaHVtYkNsaWNrOiBmdW5jdGlvbiBvblRodW1iQ2xpY2soKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgIGlmICghdGh1bWJzU3dpcGVyKSByZXR1cm47XG4gICAgdmFyIGNsaWNrZWRJbmRleCA9IHRodW1ic1N3aXBlci5jbGlja2VkSW5kZXg7XG4gICAgdmFyIGNsaWNrZWRTbGlkZSA9IHRodW1ic1N3aXBlci5jbGlja2VkU2xpZGU7XG4gICAgaWYgKGNsaWNrZWRTbGlkZSAmJiAoMCwgX2RvbS5kZWZhdWx0KShjbGlja2VkU2xpZGUpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcykpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGNsaWNrZWRJbmRleCA9PT0gJ3VuZGVmaW5lZCcgfHwgY2xpY2tlZEluZGV4ID09PSBudWxsKSByZXR1cm47XG4gICAgdmFyIHNsaWRlVG9JbmRleDtcblxuICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHNsaWRlVG9JbmRleCA9IHBhcnNlSW50KCgwLCBfZG9tLmRlZmF1bHQpKHRodW1ic1N3aXBlci5jbGlja2VkU2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVUb0luZGV4ID0gY2xpY2tlZEluZGV4O1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHZhciBjdXJyZW50SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRJbmRleCkuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgICAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICAgICAgICBjdXJyZW50SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2SW5kZXggPSBzd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRJbmRleCkucHJldkFsbChcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBzbGlkZVRvSW5kZXggKyBcIlxcXCJdXCIpLmVxKDApLmluZGV4KCk7XG4gICAgICB2YXIgbmV4dEluZGV4ID0gc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLm5leHRBbGwoXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgc2xpZGVUb0luZGV4ICsgXCJcXFwiXVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgaWYgKHR5cGVvZiBwcmV2SW5kZXggPT09ICd1bmRlZmluZWQnKSBzbGlkZVRvSW5kZXggPSBuZXh0SW5kZXg7ZWxzZSBpZiAodHlwZW9mIG5leHRJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHNsaWRlVG9JbmRleCA9IHByZXZJbmRleDtlbHNlIGlmIChuZXh0SW5kZXggLSBjdXJyZW50SW5kZXggPCBjdXJyZW50SW5kZXggLSBwcmV2SW5kZXgpIHNsaWRlVG9JbmRleCA9IG5leHRJbmRleDtlbHNlIHNsaWRlVG9JbmRleCA9IHByZXZJbmRleDtcbiAgICB9XG5cbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShpbml0aWFsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgIGlmICghdGh1bWJzU3dpcGVyKSByZXR1cm47XG4gICAgdmFyIHNsaWRlc1BlclZpZXcgPSB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHRodW1ic1N3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogdGh1bWJzU3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgIHZhciBhdXRvU2Nyb2xsT2Zmc2V0ID0gc3dpcGVyLnBhcmFtcy50aHVtYnMuYXV0b1Njcm9sbE9mZnNldDtcbiAgICB2YXIgdXNlT2Zmc2V0ID0gYXV0b1Njcm9sbE9mZnNldCAmJiAhdGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wO1xuXG4gICAgaWYgKHN3aXBlci5yZWFsSW5kZXggIT09IHRodW1ic1N3aXBlci5yZWFsSW5kZXggfHwgdXNlT2Zmc2V0KSB7XG4gICAgICB2YXIgY3VycmVudFRodW1ic0luZGV4ID0gdGh1bWJzU3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgdmFyIG5ld1RodW1ic0luZGV4O1xuICAgICAgdmFyIGRpcmVjdGlvbjtcblxuICAgICAgaWYgKHRodW1ic1N3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBpZiAodGh1bWJzU3dpcGVyLnNsaWRlcy5lcShjdXJyZW50VGh1bWJzSW5kZXgpLmhhc0NsYXNzKHRodW1ic1N3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICB0aHVtYnNTd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgICAgICAgIHRodW1ic1N3aXBlci5fY2xpZW50TGVmdCA9IHRodW1ic1N3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gICAgICAgICAgY3VycmVudFRodW1ic0luZGV4ID0gdGh1bWJzU3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgICAgICB9IC8vIEZpbmQgYWN0dWFsIHRodW1icyBpbmRleCB0byBzbGlkZSB0b1xuXG5cbiAgICAgICAgdmFyIHByZXZUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5wcmV2QWxsKFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHN3aXBlci5yZWFsSW5kZXggKyBcIlxcXCJdXCIpLmVxKDApLmluZGV4KCk7XG4gICAgICAgIHZhciBuZXh0VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRUaHVtYnNJbmRleCkubmV4dEFsbChcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBzd2lwZXIucmVhbEluZGV4ICsgXCJcXFwiXVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICBpZiAodHlwZW9mIHByZXZUaHVtYnNJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIG5ld1RodW1ic0luZGV4ID0gbmV4dFRodW1ic0luZGV4O2Vsc2UgaWYgKHR5cGVvZiBuZXh0VGh1bWJzSW5kZXggPT09ICd1bmRlZmluZWQnKSBuZXdUaHVtYnNJbmRleCA9IHByZXZUaHVtYnNJbmRleDtlbHNlIGlmIChuZXh0VGh1bWJzSW5kZXggLSBjdXJyZW50VGh1bWJzSW5kZXggPT09IGN1cnJlbnRUaHVtYnNJbmRleCAtIHByZXZUaHVtYnNJbmRleCkgbmV3VGh1bWJzSW5kZXggPSBjdXJyZW50VGh1bWJzSW5kZXg7ZWxzZSBpZiAobmV4dFRodW1ic0luZGV4IC0gY3VycmVudFRodW1ic0luZGV4IDwgY3VycmVudFRodW1ic0luZGV4IC0gcHJldlRodW1ic0luZGV4KSBuZXdUaHVtYnNJbmRleCA9IG5leHRUaHVtYnNJbmRleDtlbHNlIG5ld1RodW1ic0luZGV4ID0gcHJldlRodW1ic0luZGV4O1xuICAgICAgICBkaXJlY3Rpb24gPSBzd2lwZXIuYWN0aXZlSW5kZXggPiBzd2lwZXIucHJldmlvdXNJbmRleCA/ICduZXh0JyA6ICdwcmV2JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1RodW1ic0luZGV4ID0gc3dpcGVyLnJlYWxJbmRleDtcbiAgICAgICAgZGlyZWN0aW9uID0gbmV3VGh1bWJzSW5kZXggPiBzd2lwZXIucHJldmlvdXNJbmRleCA/ICduZXh0JyA6ICdwcmV2JztcbiAgICAgIH1cblxuICAgICAgaWYgKHVzZU9mZnNldCkge1xuICAgICAgICBuZXdUaHVtYnNJbmRleCArPSBkaXJlY3Rpb24gPT09ICduZXh0JyA/IGF1dG9TY3JvbGxPZmZzZXQgOiAtMSAqIGF1dG9TY3JvbGxPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aHVtYnNTd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMgJiYgdGh1bWJzU3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzLmluZGV4T2YobmV3VGh1bWJzSW5kZXgpIDwgMCkge1xuICAgICAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgIGlmIChuZXdUaHVtYnNJbmRleCA+IGN1cnJlbnRUaHVtYnNJbmRleCkge1xuICAgICAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBuZXdUaHVtYnNJbmRleCAtIE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpICsgMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBuZXdUaHVtYnNJbmRleCArIE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmV3VGh1bWJzSW5kZXggPiBjdXJyZW50VGh1bWJzSW5kZXgpIHtcbiAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aHVtYnNTd2lwZXIuc2xpZGVUbyhuZXdUaHVtYnNJbmRleCwgaW5pdGlhbCA/IDAgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0gLy8gQWN0aXZhdGUgdGh1bWJzXG5cblxuICAgIHZhciB0aHVtYnNUb0FjdGl2YXRlID0gMTtcbiAgICB2YXIgdGh1bWJBY3RpdmVDbGFzcyA9IHN3aXBlci5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcztcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICB0aHVtYnNUb0FjdGl2YXRlID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLnBhcmFtcy50aHVtYnMubXVsdGlwbGVBY3RpdmVUaHVtYnMpIHtcbiAgICAgIHRodW1ic1RvQWN0aXZhdGUgPSAxO1xuICAgIH1cblxuICAgIHRodW1ic1RvQWN0aXZhdGUgPSBNYXRoLmZsb29yKHRodW1ic1RvQWN0aXZhdGUpO1xuICAgIHRodW1ic1N3aXBlci5zbGlkZXMucmVtb3ZlQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG5cbiAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wIHx8IHRodW1ic1N3aXBlci5wYXJhbXMudmlydHVhbCAmJiB0aHVtYnNTd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aHVtYnNUb0FjdGl2YXRlOyBpICs9IDEpIHtcbiAgICAgICAgdGh1bWJzU3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgKHN3aXBlci5yZWFsSW5kZXggKyBpKSArIFwiXFxcIl1cIikuYWRkQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aHVtYnNUb0FjdGl2YXRlOyBfaSArPSAxKSB7XG4gICAgICAgIHRodW1ic1N3aXBlci5zbGlkZXMuZXEoc3dpcGVyLnJlYWxJbmRleCArIF9pKS5hZGRDbGFzcyh0aHVtYkFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSB7XG4gIG5hbWU6ICd0aHVtYnMnLFxuICBwYXJhbXM6IHtcbiAgICB0aHVtYnM6IHtcbiAgICAgIHN3aXBlcjogbnVsbCxcbiAgICAgIG11bHRpcGxlQWN0aXZlVGh1bWJzOiB0cnVlLFxuICAgICAgYXV0b1Njcm9sbE9mZnNldDogMCxcbiAgICAgIHNsaWRlVGh1bWJBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS10aHVtYi1hY3RpdmUnLFxuICAgICAgdGh1bWJzQ29udGFpbmVyQ2xhc3M6ICdzd2lwZXItY29udGFpbmVyLXRodW1icydcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgdGh1bWJzOiBfZXh0ZW5kcyh7XG4gICAgICAgIHN3aXBlcjogbnVsbCxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlXG4gICAgICB9LCBUaHVtYnMpXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gYmVmb3JlSW5pdChzd2lwZXIpIHtcbiAgICAgIHZhciB0aHVtYnMgPSBzd2lwZXIucGFyYW1zLnRodW1icztcbiAgICAgIGlmICghdGh1bWJzIHx8ICF0aHVtYnMuc3dpcGVyKSByZXR1cm47XG4gICAgICBzd2lwZXIudGh1bWJzLmluaXQoKTtcbiAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKHRydWUpO1xuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIudGh1bWJzLnN3aXBlcikgcmV0dXJuO1xuICAgICAgc3dpcGVyLnRodW1icy51cGRhdGUoKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIudGh1bWJzLnN3aXBlcikgcmV0dXJuO1xuICAgICAgc3dpcGVyLnRodW1icy51cGRhdGUoKTtcbiAgICB9LFxuICAgIHJlc2l6ZTogZnVuY3Rpb24gcmVzaXplKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIudGh1bWJzLnN3aXBlcikgcmV0dXJuO1xuICAgICAgc3dpcGVyLnRodW1icy51cGRhdGUoKTtcbiAgICB9LFxuICAgIG9ic2VydmVyVXBkYXRlOiBmdW5jdGlvbiBvYnNlcnZlclVwZGF0ZShzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKCk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKHN3aXBlciwgZHVyYXRpb24pIHtcbiAgICAgIHZhciB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICAgIGlmICghdGh1bWJzU3dpcGVyKSByZXR1cm47XG4gICAgICB0aHVtYnNTd2lwZXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KHN3aXBlcikge1xuICAgICAgdmFyIHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgICAgaWYgKCF0aHVtYnNTd2lwZXIpIHJldHVybjtcblxuICAgICAgaWYgKHN3aXBlci50aHVtYnMuc3dpcGVyQ3JlYXRlZCAmJiB0aHVtYnNTd2lwZXIpIHtcbiAgICAgICAgdGh1bWJzU3dpcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlscy9kb21cIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgVmlydHVhbCA9IHtcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZm9yY2UpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgX3N3aXBlciRwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgICBzbGlkZXNQZXJWaWV3ID0gX3N3aXBlciRwYXJhbXMuc2xpZGVzUGVyVmlldyxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXAgPSBfc3dpcGVyJHBhcmFtcy5zbGlkZXNQZXJHcm91cCxcbiAgICAgICAgY2VudGVyZWRTbGlkZXMgPSBfc3dpcGVyJHBhcmFtcy5jZW50ZXJlZFNsaWRlcztcbiAgICB2YXIgX3N3aXBlciRwYXJhbXMkdmlydHVhID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsLFxuICAgICAgICBhZGRTbGlkZXNCZWZvcmUgPSBfc3dpcGVyJHBhcmFtcyR2aXJ0dWEuYWRkU2xpZGVzQmVmb3JlLFxuICAgICAgICBhZGRTbGlkZXNBZnRlciA9IF9zd2lwZXIkcGFyYW1zJHZpcnR1YS5hZGRTbGlkZXNBZnRlcjtcbiAgICB2YXIgX3N3aXBlciR2aXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwsXG4gICAgICAgIHByZXZpb3VzRnJvbSA9IF9zd2lwZXIkdmlydHVhbC5mcm9tLFxuICAgICAgICBwcmV2aW91c1RvID0gX3N3aXBlciR2aXJ0dWFsLnRvLFxuICAgICAgICBzbGlkZXMgPSBfc3dpcGVyJHZpcnR1YWwuc2xpZGVzLFxuICAgICAgICBwcmV2aW91c1NsaWRlc0dyaWQgPSBfc3dpcGVyJHZpcnR1YWwuc2xpZGVzR3JpZCxcbiAgICAgICAgcmVuZGVyU2xpZGUgPSBfc3dpcGVyJHZpcnR1YWwucmVuZGVyU2xpZGUsXG4gICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gX3N3aXBlciR2aXJ0dWFsLm9mZnNldDtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggfHwgMDtcbiAgICB2YXIgb2Zmc2V0UHJvcDtcbiAgICBpZiAoc3dpcGVyLnJ0bFRyYW5zbGF0ZSkgb2Zmc2V0UHJvcCA9ICdyaWdodCc7ZWxzZSBvZmZzZXRQcm9wID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgdmFyIHNsaWRlc0FmdGVyO1xuICAgIHZhciBzbGlkZXNCZWZvcmU7XG5cbiAgICBpZiAoY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlc0FmdGVyID0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgKyBzbGlkZXNQZXJHcm91cCArIGFkZFNsaWRlc0FmdGVyO1xuICAgICAgc2xpZGVzQmVmb3JlID0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgKyBzbGlkZXNQZXJHcm91cCArIGFkZFNsaWRlc0JlZm9yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVzQWZ0ZXIgPSBzbGlkZXNQZXJWaWV3ICsgKHNsaWRlc1Blckdyb3VwIC0gMSkgKyBhZGRTbGlkZXNBZnRlcjtcbiAgICAgIHNsaWRlc0JlZm9yZSA9IHNsaWRlc1Blckdyb3VwICsgYWRkU2xpZGVzQmVmb3JlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gTWF0aC5tYXgoKGFjdGl2ZUluZGV4IHx8IDApIC0gc2xpZGVzQmVmb3JlLCAwKTtcbiAgICB2YXIgdG8gPSBNYXRoLm1pbigoYWN0aXZlSW5kZXggfHwgMCkgKyBzbGlkZXNBZnRlciwgc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgIHZhciBvZmZzZXQgPSAoc3dpcGVyLnNsaWRlc0dyaWRbZnJvbV0gfHwgMCkgLSAoc3dpcGVyLnNsaWRlc0dyaWRbMF0gfHwgMCk7XG4gICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci52aXJ0dWFsLCB7XG4gICAgICBmcm9tOiBmcm9tLFxuICAgICAgdG86IHRvLFxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICBzbGlkZXNHcmlkOiBzd2lwZXIuc2xpZGVzR3JpZFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25SZW5kZXJlZCgpIHtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgICAgaWYgKHN3aXBlci5sYXp5ICYmIHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNGcm9tID09PSBmcm9tICYmIHByZXZpb3VzVG8gPT09IHRvICYmICFmb3JjZSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNHcmlkICE9PSBwcmV2aW91c1NsaWRlc0dyaWQgJiYgb2Zmc2V0ICE9PSBwcmV2aW91c09mZnNldCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVzLmNzcyhvZmZzZXRQcm9wLCBvZmZzZXQgKyBcInB4XCIpO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsKSB7XG4gICAgICBzd2lwZXIucGFyYW1zLnZpcnR1YWwucmVuZGVyRXh0ZXJuYWwuY2FsbChzd2lwZXIsIHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIGZyb206IGZyb20sXG4gICAgICAgIHRvOiB0byxcbiAgICAgICAgc2xpZGVzOiBmdW5jdGlvbiBnZXRTbGlkZXMoKSB7XG4gICAgICAgICAgdmFyIHNsaWRlc1RvUmVuZGVyID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gZnJvbTsgaSA8PSB0bzsgaSArPSAxKSB7XG4gICAgICAgICAgICBzbGlkZXNUb1JlbmRlci5wdXNoKHNsaWRlc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNsaWRlc1RvUmVuZGVyO1xuICAgICAgICB9KClcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsVXBkYXRlKSB7XG4gICAgICAgIG9uUmVuZGVyZWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmVwZW5kSW5kZXhlcyA9IFtdO1xuICAgIHZhciBhcHBlbmRJbmRleGVzID0gW107XG5cbiAgICBpZiAoZm9yY2UpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmZpbmQoXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpLnJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gcHJldmlvdXNGcm9tOyBpIDw9IHByZXZpb3VzVG87IGkgKz0gMSkge1xuICAgICAgICBpZiAoaSA8IGZyb20gfHwgaSA+IHRvKSB7XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwuZmluZChcIi5cIiArIHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIGkgKyBcIlxcXCJdXCIpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHNsaWRlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgIGlmIChfaSA+PSBmcm9tICYmIF9pIDw9IHRvKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNUbyA9PT0gJ3VuZGVmaW5lZCcgfHwgZm9yY2UpIHtcbiAgICAgICAgICBhcHBlbmRJbmRleGVzLnB1c2goX2kpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChfaSA+IHByZXZpb3VzVG8pIGFwcGVuZEluZGV4ZXMucHVzaChfaSk7XG4gICAgICAgICAgaWYgKF9pIDwgcHJldmlvdXNGcm9tKSBwcmVwZW5kSW5kZXhlcy5wdXNoKF9pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFwcGVuZEluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmFwcGVuZChyZW5kZXJTbGlkZShzbGlkZXNbaW5kZXhdLCBpbmRleCkpO1xuICAgIH0pO1xuICAgIHByZXBlbmRJbmRleGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBiIC0gYTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwucHJlcGVuZChyZW5kZXJTbGlkZShzbGlkZXNbaW5kZXhdLCBpbmRleCkpO1xuICAgIH0pO1xuICAgIHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKCcuc3dpcGVyLXNsaWRlJykuY3NzKG9mZnNldFByb3AsIG9mZnNldCArIFwicHhcIik7XG4gICAgb25SZW5kZXJlZCgpO1xuICB9LFxuICByZW5kZXJTbGlkZTogZnVuY3Rpb24gcmVuZGVyU2xpZGUoc2xpZGUsIGluZGV4KSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMudmlydHVhbDtcblxuICAgIGlmIChwYXJhbXMuY2FjaGUgJiYgc3dpcGVyLnZpcnR1YWwuY2FjaGVbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gc3dpcGVyLnZpcnR1YWwuY2FjaGVbaW5kZXhdO1xuICAgIH1cblxuICAgIHZhciAkc2xpZGVFbCA9IHBhcmFtcy5yZW5kZXJTbGlkZSA/ICgwLCBfZG9tLmRlZmF1bHQpKHBhcmFtcy5yZW5kZXJTbGlkZS5jYWxsKHN3aXBlciwgc2xpZGUsIGluZGV4KSkgOiAoMCwgX2RvbS5kZWZhdWx0KShcIjxkaXYgY2xhc3M9XFxcIlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzICsgXCJcXFwiIGRhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIGluZGV4ICsgXCJcXFwiPlwiICsgc2xpZGUgKyBcIjwvZGl2PlwiKTtcbiAgICBpZiAoISRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykpICRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgIGlmIChwYXJhbXMuY2FjaGUpIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XSA9ICRzbGlkZUVsO1xuICAgIHJldHVybiAkc2xpZGVFbDtcbiAgfSxcbiAgYXBwZW5kU2xpZGU6IGZ1bmN0aW9uIGFwcGVuZFNsaWRlKHNsaWRlcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSkgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnB1c2goc2xpZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnB1c2goc2xpZGVzKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbC51cGRhdGUodHJ1ZSk7XG4gIH0sXG4gIHByZXBlbmRTbGlkZTogZnVuY3Rpb24gcHJlcGVuZFNsaWRlKHNsaWRlcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG4gICAgdmFyIG51bWJlck9mTmV3U2xpZGVzID0gMTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNsaWRlcykpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0pIHN3aXBlci52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KHNsaWRlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgbnVtYmVyT2ZOZXdTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMudW5zaGlmdChzbGlkZXMpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgIHZhciBjYWNoZSA9IHN3aXBlci52aXJ0dWFsLmNhY2hlO1xuICAgICAgdmFyIG5ld0NhY2hlID0ge307XG4gICAgICBPYmplY3Qua2V5cyhjYWNoZSkuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGVkSW5kZXgpIHtcbiAgICAgICAgdmFyICRjYWNoZWRFbCA9IGNhY2hlW2NhY2hlZEluZGV4XTtcbiAgICAgICAgdmFyIGNhY2hlZEVsSW5kZXggPSAkY2FjaGVkRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcblxuICAgICAgICBpZiAoY2FjaGVkRWxJbmRleCkge1xuICAgICAgICAgICRjYWNoZWRFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIHBhcnNlSW50KGNhY2hlZEVsSW5kZXgsIDEwKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2FjaGVbcGFyc2VJbnQoY2FjaGVkSW5kZXgsIDEwKSArIG51bWJlck9mTmV3U2xpZGVzXSA9ICRjYWNoZWRFbDtcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLnZpcnR1YWwuY2FjaGUgPSBuZXdDYWNoZTtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbC51cGRhdGUodHJ1ZSk7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDApO1xuICB9LFxuICByZW1vdmVTbGlkZTogZnVuY3Rpb24gcmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgc2xpZGVzSW5kZXhlcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNsaWRlc0luZGV4ZXMpKSB7XG4gICAgICBmb3IgKHZhciBpID0gc2xpZGVzSW5kZXhlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMuc3BsaWNlKHNsaWRlc0luZGV4ZXNbaV0sIDEpO1xuXG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLnZpcnR1YWwuY2FjaGVbc2xpZGVzSW5kZXhlc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2xpZGVzSW5kZXhlc1tpXSA8IGFjdGl2ZUluZGV4KSBhY3RpdmVJbmRleCAtPSAxO1xuICAgICAgICBhY3RpdmVJbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4LCAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnNwbGljZShzbGlkZXNJbmRleGVzLCAxKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgICBkZWxldGUgc3dpcGVyLnZpcnR1YWwuY2FjaGVbc2xpZGVzSW5kZXhlc107XG4gICAgICB9XG5cbiAgICAgIGlmIChzbGlkZXNJbmRleGVzIDwgYWN0aXZlSW5kZXgpIGFjdGl2ZUluZGV4IC09IDE7XG4gICAgICBhY3RpdmVJbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4LCAwKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbC51cGRhdGUodHJ1ZSk7XG4gICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXgsIDApO1xuICB9LFxuICByZW1vdmVBbGxTbGlkZXM6IGZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMgPSBbXTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgIHN3aXBlci52aXJ0dWFsLmNhY2hlID0ge307XG4gICAgfVxuXG4gICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKDAsIDApO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAndmlydHVhbCcsXG4gIHBhcmFtczoge1xuICAgIHZpcnR1YWw6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgc2xpZGVzOiBbXSxcbiAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgcmVuZGVyU2xpZGU6IG51bGwsXG4gICAgICByZW5kZXJFeHRlcm5hbDogbnVsbCxcbiAgICAgIHJlbmRlckV4dGVybmFsVXBkYXRlOiB0cnVlLFxuICAgICAgYWRkU2xpZGVzQmVmb3JlOiAwLFxuICAgICAgYWRkU2xpZGVzQWZ0ZXI6IDBcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuYmluZE1vZHVsZU1ldGhvZHMpKHN3aXBlciwge1xuICAgICAgdmlydHVhbDogX2V4dGVuZHMoe30sIFZpcnR1YWwsIHtcbiAgICAgICAgc2xpZGVzOiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuc2xpZGVzLFxuICAgICAgICBjYWNoZToge31cbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gYmVmb3JlSW5pdChzd2lwZXIpIHtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJ2aXJ0dWFsXCIpO1xuICAgICAgdmFyIG92ZXJ3cml0ZVBhcmFtcyA9IHtcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZVxuICAgICAgfTtcbiAgICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIucGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuICAgICAgKDAsIF91dGlscy5leHRlbmQpKHN3aXBlci5vcmlnaW5hbFBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcblxuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSkge1xuICAgICAgICBzd2lwZXIudmlydHVhbC51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gc2V0VHJhbnNsYXRlKHN3aXBlcikge1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKCk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfZG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbHMvZG9tXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIFpvb20gPSB7XG4gIC8vIENhbGMgU2NhbGUgRnJvbSBNdWx0aS10b3VjaGVzXG4gIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXM6IGZ1bmN0aW9uIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikgcmV0dXJuIDE7XG4gICAgdmFyIHgxID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgIHZhciB5MSA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWTtcbiAgICB2YXIgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVg7XG4gICAgdmFyIHkyID0gZS50YXJnZXRUb3VjaGVzWzFdLnBhZ2VZO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpKTtcbiAgICByZXR1cm4gZGlzdGFuY2U7XG4gIH0sXG4gIC8vIEV2ZW50c1xuICBvbkdlc3R1cmVTdGFydDogZnVuY3Rpb24gb25HZXN0dXJlU3RhcnQoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuICAgIHpvb20uZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gZmFsc2U7XG5cbiAgICBpZiAoIXN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHpvb20uZmFrZUdlc3R1cmVUb3VjaGVkID0gdHJ1ZTtcbiAgICAgIGdlc3R1cmUuc2NhbGVTdGFydCA9IFpvb20uZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKTtcbiAgICB9XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwgfHwgIWdlc3R1cmUuJHNsaWRlRWwubGVuZ3RoKSB7XG4gICAgICBnZXN0dXJlLiRzbGlkZUVsID0gKDAsIF9kb20uZGVmYXVsdCkoZS50YXJnZXQpLmNsb3Nlc3QoXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgICAgaWYgKGdlc3R1cmUuJHNsaWRlRWwubGVuZ3RoID09PSAwKSBnZXN0dXJlLiRzbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcywgcGljdHVyZSwgLnN3aXBlci16b29tLXRhcmdldCcpO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSBnZXN0dXJlLiRpbWFnZUVsLnBhcmVudChcIi5cIiArIHBhcmFtcy5jb250YWluZXJDbGFzcyk7XG4gICAgICBnZXN0dXJlLm1heFJhdGlvID0gZ2VzdHVyZS4kaW1hZ2VXcmFwRWwuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHBhcmFtcy5tYXhSYXRpbztcblxuICAgICAgaWYgKGdlc3R1cmUuJGltYWdlV3JhcEVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBnZXN0dXJlLiRpbWFnZUVsID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuJGltYWdlRWwpIHtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbigwKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuem9vbS5pc1NjYWxpbmcgPSB0cnVlO1xuICB9LFxuICBvbkdlc3R1cmVDaGFuZ2U6IGZ1bmN0aW9uIG9uR2VzdHVyZUNoYW5nZShlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG5cbiAgICBpZiAoIXN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaG1vdmUnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB6b29tLmZha2VHZXN0dXJlTW92ZWQgPSB0cnVlO1xuICAgICAgZ2VzdHVyZS5zY2FsZU1vdmUgPSBab29tLmdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSk7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoZS50eXBlID09PSAnZ2VzdHVyZWNoYW5nZScpIHpvb20ub25HZXN0dXJlU3RhcnQoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgIHpvb20uc2NhbGUgPSBlLnNjYWxlICogem9vbS5jdXJyZW50U2NhbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHpvb20uc2NhbGUgPSBnZXN0dXJlLnNjYWxlTW92ZSAvIGdlc3R1cmUuc2NhbGVTdGFydCAqIHpvb20uY3VycmVudFNjYWxlO1xuICAgIH1cblxuICAgIGlmICh6b29tLnNjYWxlID4gZ2VzdHVyZS5tYXhSYXRpbykge1xuICAgICAgem9vbS5zY2FsZSA9IGdlc3R1cmUubWF4UmF0aW8gLSAxICsgTWF0aC5wb3coem9vbS5zY2FsZSAtIGdlc3R1cmUubWF4UmF0aW8gKyAxLCAwLjUpO1xuICAgIH1cblxuICAgIGlmICh6b29tLnNjYWxlIDwgcGFyYW1zLm1pblJhdGlvKSB7XG4gICAgICB6b29tLnNjYWxlID0gcGFyYW1zLm1pblJhdGlvICsgMSAtIE1hdGgucG93KHBhcmFtcy5taW5SYXRpbyAtIHpvb20uc2NhbGUgKyAxLCAwLjUpO1xuICAgIH1cblxuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKFwiICsgem9vbS5zY2FsZSArIFwiKVwiKTtcbiAgfSxcbiAgb25HZXN0dXJlRW5kOiBmdW5jdGlvbiBvbkdlc3R1cmVFbmQoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlO1xuICAgIHZhciBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlO1xuXG4gICAgaWYgKCFzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoIXpvb20uZmFrZUdlc3R1cmVUb3VjaGVkIHx8ICF6b29tLmZha2VHZXN0dXJlTW92ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA8IDIgJiYgIWRldmljZS5hbmRyb2lkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgem9vbS5mYWtlR2VzdHVyZVRvdWNoZWQgPSBmYWxzZTtcbiAgICAgIHpvb20uZmFrZUdlc3R1cmVNb3ZlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHpvb20uc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih6b29tLnNjYWxlLCBnZXN0dXJlLm1heFJhdGlvKSwgcGFyYW1zLm1pblJhdGlvKTtcbiAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKFwiICsgem9vbS5zY2FsZSArIFwiKVwiKTtcbiAgICB6b29tLmN1cnJlbnRTY2FsZSA9IHpvb20uc2NhbGU7XG4gICAgem9vbS5pc1NjYWxpbmcgPSBmYWxzZTtcbiAgICBpZiAoem9vbS5zY2FsZSA9PT0gMSkgZ2VzdHVyZS4kc2xpZGVFbCA9IHVuZGVmaW5lZDtcbiAgfSxcbiAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlO1xuICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmUsXG4gICAgICAgIGltYWdlID0gem9vbS5pbWFnZTtcbiAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBpZiAoaW1hZ2UuaXNUb3VjaGVkKSByZXR1cm47XG4gICAgaWYgKGRldmljZS5hbmRyb2lkICYmIGUuY2FuY2VsYWJsZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGltYWdlLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgaW1hZ2UudG91Y2hlc1N0YXJ0LnggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgaW1hZ2UudG91Y2hlc1N0YXJ0LnkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gIH0sXG4gIG9uVG91Y2hNb3ZlOiBmdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZSxcbiAgICAgICAgaW1hZ2UgPSB6b29tLmltYWdlLFxuICAgICAgICB2ZWxvY2l0eSA9IHpvb20udmVsb2NpdHk7XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICBpZiAoIWltYWdlLmlzVG91Y2hlZCB8fCAhZ2VzdHVyZS4kc2xpZGVFbCkgcmV0dXJuO1xuXG4gICAgaWYgKCFpbWFnZS5pc01vdmVkKSB7XG4gICAgICBpbWFnZS53aWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBpbWFnZS5oZWlnaHQgPSBnZXN0dXJlLiRpbWFnZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgIGltYWdlLnN0YXJ0WCA9ICgwLCBfdXRpbHMuZ2V0VHJhbnNsYXRlKShnZXN0dXJlLiRpbWFnZVdyYXBFbFswXSwgJ3gnKSB8fCAwO1xuICAgICAgaW1hZ2Uuc3RhcnRZID0gKDAsIF91dGlscy5nZXRUcmFuc2xhdGUpKGdlc3R1cmUuJGltYWdlV3JhcEVsWzBdLCAneScpIHx8IDA7XG4gICAgICBnZXN0dXJlLnNsaWRlV2lkdGggPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldFdpZHRoO1xuICAgICAgZ2VzdHVyZS5zbGlkZUhlaWdodCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigwKTtcblxuICAgICAgaWYgKHN3aXBlci5ydGwpIHtcbiAgICAgICAgaW1hZ2Uuc3RhcnRYID0gLWltYWdlLnN0YXJ0WDtcbiAgICAgICAgaW1hZ2Uuc3RhcnRZID0gLWltYWdlLnN0YXJ0WTtcbiAgICAgIH1cbiAgICB9IC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcblxuXG4gICAgdmFyIHNjYWxlZFdpZHRoID0gaW1hZ2Uud2lkdGggKiB6b29tLnNjYWxlO1xuICAgIHZhciBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiB6b29tLnNjYWxlO1xuICAgIGlmIChzY2FsZWRXaWR0aCA8IGdlc3R1cmUuc2xpZGVXaWR0aCAmJiBzY2FsZWRIZWlnaHQgPCBnZXN0dXJlLnNsaWRlSGVpZ2h0KSByZXR1cm47XG4gICAgaW1hZ2UubWluWCA9IE1hdGgubWluKGdlc3R1cmUuc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIsIDApO1xuICAgIGltYWdlLm1heFggPSAtaW1hZ2UubWluWDtcbiAgICBpbWFnZS5taW5ZID0gTWF0aC5taW4oZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIgLSBzY2FsZWRIZWlnaHQgLyAyLCAwKTtcbiAgICBpbWFnZS5tYXhZID0gLWltYWdlLm1pblk7XG4gICAgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcblxuICAgIGlmICghaW1hZ2UuaXNNb3ZlZCAmJiAhem9vbS5pc1NjYWxpbmcpIHtcbiAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgKE1hdGguZmxvb3IoaW1hZ2UubWluWCkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRYKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC54IDwgaW1hZ2UudG91Y2hlc1N0YXJ0LnggfHwgTWF0aC5mbG9vcihpbWFnZS5tYXhYKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFgpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPiBpbWFnZS50b3VjaGVzU3RhcnQueCkpIHtcbiAgICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgKE1hdGguZmxvb3IoaW1hZ2UubWluWSkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRZKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC55IDwgaW1hZ2UudG91Y2hlc1N0YXJ0LnkgfHwgTWF0aC5mbG9vcihpbWFnZS5tYXhZKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFkpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPiBpbWFnZS50b3VjaGVzU3RhcnQueSkpIHtcbiAgICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpbWFnZS5pc01vdmVkID0gdHJ1ZTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IGltYWdlLnRvdWNoZXNDdXJyZW50LnggLSBpbWFnZS50b3VjaGVzU3RhcnQueCArIGltYWdlLnN0YXJ0WDtcbiAgICBpbWFnZS5jdXJyZW50WSA9IGltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSBpbWFnZS50b3VjaGVzU3RhcnQueSArIGltYWdlLnN0YXJ0WTtcblxuICAgIGlmIChpbWFnZS5jdXJyZW50WCA8IGltYWdlLm1pblgpIHtcbiAgICAgIGltYWdlLmN1cnJlbnRYID0gaW1hZ2UubWluWCArIDEgLSBNYXRoLnBvdyhpbWFnZS5taW5YIC0gaW1hZ2UuY3VycmVudFggKyAxLCAwLjgpO1xuICAgIH1cblxuICAgIGlmIChpbWFnZS5jdXJyZW50WCA+IGltYWdlLm1heFgpIHtcbiAgICAgIGltYWdlLmN1cnJlbnRYID0gaW1hZ2UubWF4WCAtIDEgKyBNYXRoLnBvdyhpbWFnZS5jdXJyZW50WCAtIGltYWdlLm1heFggKyAxLCAwLjgpO1xuICAgIH1cblxuICAgIGlmIChpbWFnZS5jdXJyZW50WSA8IGltYWdlLm1pblkpIHtcbiAgICAgIGltYWdlLmN1cnJlbnRZID0gaW1hZ2UubWluWSArIDEgLSBNYXRoLnBvdyhpbWFnZS5taW5ZIC0gaW1hZ2UuY3VycmVudFkgKyAxLCAwLjgpO1xuICAgIH1cblxuICAgIGlmIChpbWFnZS5jdXJyZW50WSA+IGltYWdlLm1heFkpIHtcbiAgICAgIGltYWdlLmN1cnJlbnRZID0gaW1hZ2UubWF4WSAtIDEgKyBNYXRoLnBvdyhpbWFnZS5jdXJyZW50WSAtIGltYWdlLm1heFkgKyAxLCAwLjgpO1xuICAgIH0gLy8gVmVsb2NpdHlcblxuXG4gICAgaWYgKCF2ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueDtcbiAgICBpZiAoIXZlbG9jaXR5LnByZXZQb3NpdGlvblkpIHZlbG9jaXR5LnByZXZQb3NpdGlvblkgPSBpbWFnZS50b3VjaGVzQ3VycmVudC55O1xuICAgIGlmICghdmVsb2NpdHkucHJldlRpbWUpIHZlbG9jaXR5LnByZXZUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB2ZWxvY2l0eS54ID0gKGltYWdlLnRvdWNoZXNDdXJyZW50LnggLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSAvIChEYXRlLm5vdygpIC0gdmVsb2NpdHkucHJldlRpbWUpIC8gMjtcbiAgICB2ZWxvY2l0eS55ID0gKGltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSAvIChEYXRlLm5vdygpIC0gdmVsb2NpdHkucHJldlRpbWUpIC8gMjtcbiAgICBpZiAoTWF0aC5hYnMoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIHZlbG9jaXR5LnByZXZQb3NpdGlvblgpIDwgMikgdmVsb2NpdHkueCA9IDA7XG4gICAgaWYgKE1hdGguYWJzKGltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSA8IDIpIHZlbG9jaXR5LnkgPSAwO1xuICAgIHZlbG9jaXR5LnByZXZQb3NpdGlvblggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54O1xuICAgIHZlbG9jaXR5LnByZXZQb3NpdGlvblkgPSBpbWFnZS50b3VjaGVzQ3VycmVudC55O1xuICAgIHZlbG9jaXR5LnByZXZUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIGltYWdlLmN1cnJlbnRYICsgXCJweCwgXCIgKyBpbWFnZS5jdXJyZW50WSArIFwicHgsMClcIik7XG4gIH0sXG4gIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZSxcbiAgICAgICAgaW1hZ2UgPSB6b29tLmltYWdlLFxuICAgICAgICB2ZWxvY2l0eSA9IHpvb20udmVsb2NpdHk7XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAoIWltYWdlLmlzVG91Y2hlZCB8fCAhaW1hZ2UuaXNNb3ZlZCkge1xuICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICBpbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgaW1hZ2UuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIHZhciBtb21lbnR1bUR1cmF0aW9uWCA9IDMwMDtcbiAgICB2YXIgbW9tZW50dW1EdXJhdGlvblkgPSAzMDA7XG4gICAgdmFyIG1vbWVudHVtRGlzdGFuY2VYID0gdmVsb2NpdHkueCAqIG1vbWVudHVtRHVyYXRpb25YO1xuICAgIHZhciBuZXdQb3NpdGlvblggPSBpbWFnZS5jdXJyZW50WCArIG1vbWVudHVtRGlzdGFuY2VYO1xuICAgIHZhciBtb21lbnR1bURpc3RhbmNlWSA9IHZlbG9jaXR5LnkgKiBtb21lbnR1bUR1cmF0aW9uWTtcbiAgICB2YXIgbmV3UG9zaXRpb25ZID0gaW1hZ2UuY3VycmVudFkgKyBtb21lbnR1bURpc3RhbmNlWTsgLy8gRml4IGR1cmF0aW9uXG5cbiAgICBpZiAodmVsb2NpdHkueCAhPT0gMCkgbW9tZW50dW1EdXJhdGlvblggPSBNYXRoLmFicygobmV3UG9zaXRpb25YIC0gaW1hZ2UuY3VycmVudFgpIC8gdmVsb2NpdHkueCk7XG4gICAgaWYgKHZlbG9jaXR5LnkgIT09IDApIG1vbWVudHVtRHVyYXRpb25ZID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWSAtIGltYWdlLmN1cnJlbnRZKSAvIHZlbG9jaXR5LnkpO1xuICAgIHZhciBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5tYXgobW9tZW50dW1EdXJhdGlvblgsIG1vbWVudHVtRHVyYXRpb25ZKTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1Bvc2l0aW9uWDtcbiAgICBpbWFnZS5jdXJyZW50WSA9IG5ld1Bvc2l0aW9uWTsgLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xuXG4gICAgdmFyIHNjYWxlZFdpZHRoID0gaW1hZ2Uud2lkdGggKiB6b29tLnNjYWxlO1xuICAgIHZhciBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiB6b29tLnNjYWxlO1xuICAgIGltYWdlLm1pblggPSBNYXRoLm1pbihnZXN0dXJlLnNsaWRlV2lkdGggLyAyIC0gc2NhbGVkV2lkdGggLyAyLCAwKTtcbiAgICBpbWFnZS5tYXhYID0gLWltYWdlLm1pblg7XG4gICAgaW1hZ2UubWluWSA9IE1hdGgubWluKGdlc3R1cmUuc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiwgMCk7XG4gICAgaW1hZ2UubWF4WSA9IC1pbWFnZS5taW5ZO1xuICAgIGltYWdlLmN1cnJlbnRYID0gTWF0aC5tYXgoTWF0aC5taW4oaW1hZ2UuY3VycmVudFgsIGltYWdlLm1heFgpLCBpbWFnZS5taW5YKTtcbiAgICBpbWFnZS5jdXJyZW50WSA9IE1hdGgubWF4KE1hdGgubWluKGltYWdlLmN1cnJlbnRZLCBpbWFnZS5tYXhZKSwgaW1hZ2UubWluWSk7XG4gICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIGltYWdlLmN1cnJlbnRYICsgXCJweCwgXCIgKyBpbWFnZS5jdXJyZW50WSArIFwicHgsMClcIik7XG4gIH0sXG4gIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG5cbiAgICBpZiAoZ2VzdHVyZS4kc2xpZGVFbCAmJiBzd2lwZXIucHJldmlvdXNJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VFbCkge1xuICAgICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnZXN0dXJlLiRpbWFnZVdyYXBFbCkge1xuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKScpO1xuICAgICAgfVxuXG4gICAgICB6b29tLnNjYWxlID0gMTtcbiAgICAgIHpvb20uY3VycmVudFNjYWxlID0gMTtcbiAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsID0gdW5kZWZpbmVkO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuICAvLyBUb2dnbGUgWm9vbVxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcblxuICAgIGlmICh6b29tLnNjYWxlICYmIHpvb20uc2NhbGUgIT09IDEpIHtcbiAgICAgIC8vIFpvb20gT3V0XG4gICAgICB6b29tLm91dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBab29tIEluXG4gICAgICB6b29tLmluKGUpO1xuICAgIH1cbiAgfSxcbiAgaW46IGZ1bmN0aW9uIF9pbihlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmUsXG4gICAgICAgIGltYWdlID0gem9vbS5pbWFnZTtcblxuICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBzd2lwZXIudmlydHVhbCkge1xuICAgICAgICBnZXN0dXJlLiRzbGlkZUVsID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcywgcGljdHVyZSwgLnN3aXBlci16b29tLXRhcmdldCcpO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSBnZXN0dXJlLiRpbWFnZUVsLnBhcmVudChcIi5cIiArIHBhcmFtcy5jb250YWluZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgZ2VzdHVyZS4kc2xpZGVFbC5hZGRDbGFzcyhcIlwiICsgcGFyYW1zLnpvb21lZFNsaWRlQ2xhc3MpO1xuICAgIHZhciB0b3VjaFg7XG4gICAgdmFyIHRvdWNoWTtcbiAgICB2YXIgb2Zmc2V0WDtcbiAgICB2YXIgb2Zmc2V0WTtcbiAgICB2YXIgZGlmZlg7XG4gICAgdmFyIGRpZmZZO1xuICAgIHZhciB0cmFuc2xhdGVYO1xuICAgIHZhciB0cmFuc2xhdGVZO1xuICAgIHZhciBpbWFnZVdpZHRoO1xuICAgIHZhciBpbWFnZUhlaWdodDtcbiAgICB2YXIgc2NhbGVkV2lkdGg7XG4gICAgdmFyIHNjYWxlZEhlaWdodDtcbiAgICB2YXIgdHJhbnNsYXRlTWluWDtcbiAgICB2YXIgdHJhbnNsYXRlTWluWTtcbiAgICB2YXIgdHJhbnNsYXRlTWF4WDtcbiAgICB2YXIgdHJhbnNsYXRlTWF4WTtcbiAgICB2YXIgc2xpZGVXaWR0aDtcbiAgICB2YXIgc2xpZGVIZWlnaHQ7XG5cbiAgICBpZiAodHlwZW9mIGltYWdlLnRvdWNoZXNTdGFydC54ID09PSAndW5kZWZpbmVkJyAmJiBlKSB7XG4gICAgICB0b3VjaFggPSBlLnR5cGUgPT09ICd0b3VjaGVuZCcgPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgIHRvdWNoWSA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3VjaFggPSBpbWFnZS50b3VjaGVzU3RhcnQueDtcbiAgICAgIHRvdWNoWSA9IGltYWdlLnRvdWNoZXNTdGFydC55O1xuICAgIH1cblxuICAgIHpvb20uc2NhbGUgPSBnZXN0dXJlLiRpbWFnZVdyYXBFbC5hdHRyKCdkYXRhLXN3aXBlci16b29tJykgfHwgcGFyYW1zLm1heFJhdGlvO1xuICAgIHpvb20uY3VycmVudFNjYWxlID0gZ2VzdHVyZS4kaW1hZ2VXcmFwRWwuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHBhcmFtcy5tYXhSYXRpbztcblxuICAgIGlmIChlKSB7XG4gICAgICBzbGlkZVdpZHRoID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgIHNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBvZmZzZXRYID0gZ2VzdHVyZS4kc2xpZGVFbC5vZmZzZXQoKS5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gICAgICBvZmZzZXRZID0gZ2VzdHVyZS4kc2xpZGVFbC5vZmZzZXQoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGRpZmZYID0gb2Zmc2V0WCArIHNsaWRlV2lkdGggLyAyIC0gdG91Y2hYO1xuICAgICAgZGlmZlkgPSBvZmZzZXRZICsgc2xpZGVIZWlnaHQgLyAyIC0gdG91Y2hZO1xuICAgICAgaW1hZ2VXaWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBpbWFnZUhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgc2NhbGVkV2lkdGggPSBpbWFnZVdpZHRoICogem9vbS5zY2FsZTtcbiAgICAgIHNjYWxlZEhlaWdodCA9IGltYWdlSGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICAgIHRyYW5zbGF0ZU1pblggPSBNYXRoLm1pbihzbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiwgMCk7XG4gICAgICB0cmFuc2xhdGVNaW5ZID0gTWF0aC5taW4oc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiwgMCk7XG4gICAgICB0cmFuc2xhdGVNYXhYID0gLXRyYW5zbGF0ZU1pblg7XG4gICAgICB0cmFuc2xhdGVNYXhZID0gLXRyYW5zbGF0ZU1pblk7XG4gICAgICB0cmFuc2xhdGVYID0gZGlmZlggKiB6b29tLnNjYWxlO1xuICAgICAgdHJhbnNsYXRlWSA9IGRpZmZZICogem9vbS5zY2FsZTtcblxuICAgICAgaWYgKHRyYW5zbGF0ZVggPCB0cmFuc2xhdGVNaW5YKSB7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNaW5YO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNsYXRlWCA+IHRyYW5zbGF0ZU1heFgpIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1heFg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2xhdGVZIDwgdHJhbnNsYXRlTWluWSkge1xuICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWluWTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVNYXhZKSB7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNYXhZO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2xhdGVYID0gMDtcbiAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgIH1cblxuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIHRyYW5zbGF0ZVggKyBcInB4LCBcIiArIHRyYW5zbGF0ZVkgKyBcInB4LDApXCIpO1xuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIiArIHpvb20uc2NhbGUgKyBcIilcIik7XG4gIH0sXG4gIG91dDogZnVuY3Rpb24gb3V0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcblxuICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBzd2lwZXIudmlydHVhbCkge1xuICAgICAgICBnZXN0dXJlLiRzbGlkZUVsID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcywgcGljdHVyZSwgLnN3aXBlci16b29tLXRhcmdldCcpO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSBnZXN0dXJlLiRpbWFnZUVsLnBhcmVudChcIi5cIiArIHBhcmFtcy5jb250YWluZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgem9vbS5zY2FsZSA9IDE7XG4gICAgem9vbS5jdXJyZW50U2NhbGUgPSAxO1xuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKScpO1xuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpJyk7XG4gICAgZ2VzdHVyZS4kc2xpZGVFbC5yZW1vdmVDbGFzcyhcIlwiICsgcGFyYW1zLnpvb21lZFNsaWRlQ2xhc3MpO1xuICAgIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gIH0sXG4gIHRvZ2dsZUdlc3R1cmVzOiBmdW5jdGlvbiB0b2dnbGVHZXN0dXJlcyhtZXRob2QpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIHZhciBzZWxlY3RvciA9IHpvb20uc2xpZGVTZWxlY3RvcixcbiAgICAgICAgcGFzc2l2ZSA9IHpvb20ucGFzc2l2ZUxpc3RlbmVyO1xuICAgIHN3aXBlci4kd3JhcHBlckVsW21ldGhvZF0oJ2dlc3R1cmVzdGFydCcsIHNlbGVjdG9yLCB6b29tLm9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlKTtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbFttZXRob2RdKCdnZXN0dXJlY2hhbmdlJywgc2VsZWN0b3IsIHpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlKTtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbFttZXRob2RdKCdnZXN0dXJlZW5kJywgc2VsZWN0b3IsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlKTtcbiAgfSxcbiAgZW5hYmxlR2VzdHVyZXM6IGZ1bmN0aW9uIGVuYWJsZUdlc3R1cmVzKCkge1xuICAgIGlmICh0aGlzLnpvb20uZ2VzdHVyZXNFbmFibGVkKSByZXR1cm47XG4gICAgdGhpcy56b29tLmdlc3R1cmVzRW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy56b29tLnRvZ2dsZUdlc3R1cmVzKCdvbicpO1xuICB9LFxuICBkaXNhYmxlR2VzdHVyZXM6IGZ1bmN0aW9uIGRpc2FibGVHZXN0dXJlcygpIHtcbiAgICBpZiAoIXRoaXMuem9vbS5nZXN0dXJlc0VuYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLnpvb20uZ2VzdHVyZXNFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy56b29tLnRvZ2dsZUdlc3R1cmVzKCdvZmYnKTtcbiAgfSxcbiAgLy8gQXR0YWNoL0RldGFjaCBFdmVudHNcbiAgZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGlmICh6b29tLmVuYWJsZWQpIHJldHVybjtcbiAgICB6b29tLmVuYWJsZWQgPSB0cnVlO1xuICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgdmFyIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUgPSBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiB0cnVlO1xuICAgIHZhciBzbGlkZVNlbGVjdG9yID0gXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3M7XG4gICAgc3dpcGVyLnpvb20ucGFzc2l2ZUxpc3RlbmVyID0gcGFzc2l2ZUxpc3RlbmVyO1xuICAgIHN3aXBlci56b29tLnNsaWRlU2VsZWN0b3IgPSBzbGlkZVNlbGVjdG9yOyAvLyBTY2FsZSBpbWFnZVxuXG4gICAgaWYgKHN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLnpvb20uZW5hYmxlR2VzdHVyZXMsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuZW5kLCBzd2lwZXIuem9vbS5kaXNhYmxlR2VzdHVyZXMsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfSBlbHNlIGlmIChzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0LCBzbGlkZVNlbGVjdG9yLCB6b29tLm9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsIHNsaWRlU2VsZWN0b3IsIHpvb20ub25HZXN0dXJlQ2hhbmdlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsIHNsaWRlU2VsZWN0b3IsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgICBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuY2FuY2VsLCBzbGlkZVNlbGVjdG9yLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IC8vIE1vdmUgaW1hZ2VcblxuXG4gICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsIFwiLlwiICsgc3dpcGVyLnBhcmFtcy56b29tLmNvbnRhaW5lckNsYXNzLCB6b29tLm9uVG91Y2hNb3ZlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgfSxcbiAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGlmICghem9vbS5lbmFibGVkKSByZXR1cm47XG4gICAgdmFyIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICBzd2lwZXIuem9vbS5lbmFibGVkID0gZmFsc2U7XG4gICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHN3aXBlci5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICB2YXIgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSA6IHRydWU7XG4gICAgdmFyIHNsaWRlU2VsZWN0b3IgPSBcIi5cIiArIHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzczsgLy8gU2NhbGUgaW1hZ2VcblxuICAgIGlmIChzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIuem9vbS5lbmFibGVHZXN0dXJlcywgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuZW5kLCBzd2lwZXIuem9vbS5kaXNhYmxlR2VzdHVyZXMsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfSBlbHNlIGlmIChzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgc2xpZGVTZWxlY3Rvciwgem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgc2xpZGVTZWxlY3Rvciwgem9vbS5vbkdlc3R1cmVDaGFuZ2UsIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsIHNsaWRlU2VsZWN0b3IsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgICBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLmNhbmNlbCwgc2xpZGVTZWxlY3Rvciwgem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSAvLyBNb3ZlIGltYWdlXG5cblxuICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgXCIuXCIgKyBzd2lwZXIucGFyYW1zLnpvb20uY29udGFpbmVyQ2xhc3MsIHpvb20ub25Ub3VjaE1vdmUsIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUpO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnem9vbScsXG4gIHBhcmFtczoge1xuICAgIHpvb206IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgbWF4UmF0aW86IDMsXG4gICAgICBtaW5SYXRpbzogMSxcbiAgICAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lckNsYXNzOiAnc3dpcGVyLXpvb20tY29udGFpbmVyJyxcbiAgICAgIHpvb21lZFNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtem9vbWVkJ1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgKDAsIF91dGlscy5iaW5kTW9kdWxlTWV0aG9kcykoc3dpcGVyLCB7XG4gICAgICB6b29tOiBfZXh0ZW5kcyh7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgY3VycmVudFNjYWxlOiAxLFxuICAgICAgICBpc1NjYWxpbmc6IGZhbHNlLFxuICAgICAgICBnZXN0dXJlOiB7XG4gICAgICAgICAgJHNsaWRlRWw6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzbGlkZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgc2xpZGVIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAkaW1hZ2VFbDogdW5kZWZpbmVkLFxuICAgICAgICAgICRpbWFnZVdyYXBFbDogdW5kZWZpbmVkLFxuICAgICAgICAgIG1heFJhdGlvOiAzXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgaXNUb3VjaGVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGN1cnJlbnRYOiB1bmRlZmluZWQsXG4gICAgICAgICAgY3VycmVudFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtaW5YOiB1bmRlZmluZWQsXG4gICAgICAgICAgbWluWTogdW5kZWZpbmVkLFxuICAgICAgICAgIG1heFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtYXhZOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGFydFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGFydFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0b3VjaGVzU3RhcnQ6IHt9LFxuICAgICAgICAgIHRvdWNoZXNDdXJyZW50OiB7fVxuICAgICAgICB9LFxuICAgICAgICB2ZWxvY2l0eToge1xuICAgICAgICAgIHg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB5OiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlBvc2l0aW9uWDogdW5kZWZpbmVkLFxuICAgICAgICAgIHByZXZQb3NpdGlvblk6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwcmV2VGltZTogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH0sIFpvb20pXG4gICAgfSk7XG4gICAgdmFyIHNjYWxlID0gMTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3dpcGVyLnpvb20sICdzY2FsZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gc2NhbGU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgaWYgKHNjYWxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIHZhciBpbWFnZUVsID0gc3dpcGVyLnpvb20uZ2VzdHVyZS4kaW1hZ2VFbCA/IHN3aXBlci56b29tLmdlc3R1cmUuJGltYWdlRWxbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgdmFyIHNsaWRlRWwgPSBzd2lwZXIuem9vbS5nZXN0dXJlLiRzbGlkZUVsID8gc3dpcGVyLnpvb20uZ2VzdHVyZS4kc2xpZGVFbFswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnem9vbUNoYW5nZScsIHZhbHVlLCBpbWFnZUVsLCBzbGlkZUVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjYWxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuem9vbS5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuem9vbS5kaXNhYmxlKCk7XG4gICAgfSxcbiAgICB0b3VjaFN0YXJ0OiBmdW5jdGlvbiB0b3VjaFN0YXJ0KHN3aXBlciwgZSkge1xuICAgICAgaWYgKCFzd2lwZXIuem9vbS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuem9vbS5vblRvdWNoU3RhcnQoZSk7XG4gICAgfSxcbiAgICB0b3VjaEVuZDogZnVuY3Rpb24gdG91Y2hFbmQoc3dpcGVyLCBlKSB7XG4gICAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci56b29tLm9uVG91Y2hFbmQoZSk7XG4gICAgfSxcbiAgICBkb3VibGVUYXA6IGZ1bmN0aW9uIGRvdWJsZVRhcChzd2lwZXIsIGUpIHtcbiAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZyAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIuem9vbS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuem9vbS50b2dnbGUpIHtcbiAgICAgICAgc3dpcGVyLnpvb20udG9nZ2xlKGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChzd2lwZXIpIHtcbiAgICAgIGlmIChzd2lwZXIuem9vbS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuem9vbS5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci56b29tLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIHNsaWRlQ2hhbmdlKHN3aXBlcikge1xuICAgICAgaWYgKHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIHN3aXBlci56b29tLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgT2JzZXJ2ZXIgPSB7XG4gIGF0dGFjaDogZnVuY3Rpb24gYXR0YWNoKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBPYnNlcnZlckZ1bmMgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2Via2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgIC8vIFRoZSBvYnNlcnZlclVwZGF0ZSBldmVudCBzaG91bGQgb25seSBiZSB0cmlnZ2VyZWRcbiAgICAgIC8vIG9uY2UgZGVzcGl0ZSB0aGUgbnVtYmVyIG9mIG11dGF0aW9ucy4gIEFkZGl0aW9uYWxcbiAgICAgIC8vIHRyaWdnZXJzIGFyZSByZWR1bmRhbnQgYW5kIGFyZSB2ZXJ5IGNvc3RseVxuICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2JzZXJ2ZXJVcGRhdGUgPSBmdW5jdGlvbiBvYnNlcnZlclVwZGF0ZSgpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUob2JzZXJ2ZXJVcGRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQob2JzZXJ2ZXJVcGRhdGUsIDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZExpc3Q6IHR5cGVvZiBvcHRpb25zLmNoaWxkTGlzdCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGlsZExpc3QsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0eXBlb2Ygb3B0aW9ucy5jaGFyYWN0ZXJEYXRhID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoYXJhY3RlckRhdGFcbiAgICB9KTtcbiAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIgfHwgIXN3aXBlci5wYXJhbXMub2JzZXJ2ZXIpIHJldHVybjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLm9ic2VydmVQYXJlbnRzKSB7XG4gICAgICB2YXIgY29udGFpbmVyUGFyZW50cyA9IHN3aXBlci4kZWwucGFyZW50cygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRhaW5lclBhcmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChjb250YWluZXJQYXJlbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9IC8vIE9ic2VydmUgY29udGFpbmVyXG5cblxuICAgIHN3aXBlci5vYnNlcnZlci5hdHRhY2goc3dpcGVyLiRlbFswXSwge1xuICAgICAgY2hpbGRMaXN0OiBzd2lwZXIucGFyYW1zLm9ic2VydmVTbGlkZUNoaWxkcmVuXG4gICAgfSk7IC8vIE9ic2VydmUgd3JhcHBlclxuXG4gICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChzd2lwZXIuJHdyYXBwZXJFbFswXSwge1xuICAgICAgYXR0cmlidXRlczogZmFsc2VcbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycyA9IFtdO1xuICB9XG59O1xudmFyIF9kZWZhdWx0ID0ge1xuICBuYW1lOiAnb2JzZXJ2ZXInLFxuICBwYXJhbXM6IHtcbiAgICBvYnNlcnZlcjogZmFsc2UsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IGZhbHNlLFxuICAgIG9ic2VydmVTbGlkZUNoaWxkcmVuOiBmYWxzZVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAoMCwgX3V0aWxzLmJpbmRNb2R1bGVNZXRob2RzKShzd2lwZXIsIHtcbiAgICAgIG9ic2VydmVyOiBfZXh0ZW5kcyh7fSwgT2JzZXJ2ZXIsIHtcbiAgICAgICAgb2JzZXJ2ZXJzOiBbXVxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgc3dpcGVyLm9ic2VydmVyLmluaXQoKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBzd2lwZXIub2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3V0aWxzXCIpO1xuXG52YXIgc3VwcG9ydHNSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIHN1cHBvcnRzUmVzaXplT2JzZXJ2ZXIoKSB7XG4gIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93LlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbn07XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgbmFtZTogJ3Jlc2l6ZScsXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICgwLCBfdXRpbHMuZXh0ZW5kKShzd2lwZXIsIHtcbiAgICAgIHJlc2l6ZToge1xuICAgICAgICBvYnNlcnZlcjogbnVsbCxcbiAgICAgICAgY3JlYXRlT2JzZXJ2ZXI6IGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHN3aXBlci53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBzd2lwZXIuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIG5ld1dpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICAgIHZhciBjb250ZW50Qm94U2l6ZSA9IF9yZWYuY29udGVudEJveFNpemUsXG4gICAgICAgICAgICAgICAgICBjb250ZW50UmVjdCA9IF9yZWYuY29udGVudFJlY3QsXG4gICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IHN3aXBlci5lbCkgcmV0dXJuO1xuICAgICAgICAgICAgICBuZXdXaWR0aCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3Qud2lkdGggOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmlubGluZVNpemU7XG4gICAgICAgICAgICAgIG5ld0hlaWdodCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3QuaGVpZ2h0IDogKGNvbnRlbnRCb3hTaXplWzBdIHx8IGNvbnRlbnRCb3hTaXplKS5ibG9ja1NpemU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG5ld1dpZHRoICE9PSB3aWR0aCB8fCBuZXdIZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgICBzd2lwZXIucmVzaXplLnJlc2l6ZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyLm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlT2JzZXJ2ZXI6IGZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKCkge1xuICAgICAgICAgIGlmIChzd2lwZXIucmVzaXplLm9ic2VydmVyICYmIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIudW5vYnNlcnZlICYmIHN3aXBlci5lbCkge1xuICAgICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlci51bm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplSGFuZGxlcjogZnVuY3Rpb24gcmVzaXplSGFuZGxlcigpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlUmVzaXplJyk7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ3Jlc2l6ZScpO1xuICAgICAgICB9LFxuICAgICAgICBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcigpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnb3JpZW50YXRpb25jaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5yZXNpemVPYnNlcnZlciAmJiBzdXBwb3J0c1Jlc2l6ZU9ic2VydmVyKCkpIHtcbiAgICAgICAgc3dpcGVyLnJlc2l6ZS5jcmVhdGVPYnNlcnZlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEVtaXQgcmVzaXplXG5cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcik7IC8vIEVtaXQgb3JpZW50YXRpb25jaGFuZ2VcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgc3dpcGVyLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gICAgICBzd2lwZXIucmVzaXplLnJlbW92ZU9ic2VydmVyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kb20gPSByZXF1aXJlKFwiZG9tN1wiKTtcblxudmFyIE1ldGhvZHMgPSB7XG4gIGFkZENsYXNzOiBfZG9tLmFkZENsYXNzLFxuICByZW1vdmVDbGFzczogX2RvbS5yZW1vdmVDbGFzcyxcbiAgaGFzQ2xhc3M6IF9kb20uaGFzQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzOiBfZG9tLnRvZ2dsZUNsYXNzLFxuICBhdHRyOiBfZG9tLmF0dHIsXG4gIHJlbW92ZUF0dHI6IF9kb20ucmVtb3ZlQXR0cixcbiAgdHJhbnNmb3JtOiBfZG9tLnRyYW5zZm9ybSxcbiAgdHJhbnNpdGlvbjogX2RvbS50cmFuc2l0aW9uLFxuICBvbjogX2RvbS5vbixcbiAgb2ZmOiBfZG9tLm9mZixcbiAgdHJpZ2dlcjogX2RvbS50cmlnZ2VyLFxuICB0cmFuc2l0aW9uRW5kOiBfZG9tLnRyYW5zaXRpb25FbmQsXG4gIG91dGVyV2lkdGg6IF9kb20ub3V0ZXJXaWR0aCxcbiAgb3V0ZXJIZWlnaHQ6IF9kb20ub3V0ZXJIZWlnaHQsXG4gIHN0eWxlczogX2RvbS5zdHlsZXMsXG4gIG9mZnNldDogX2RvbS5vZmZzZXQsXG4gIGNzczogX2RvbS5jc3MsXG4gIGVhY2g6IF9kb20uZWFjaCxcbiAgaHRtbDogX2RvbS5odG1sLFxuICB0ZXh0OiBfZG9tLnRleHQsXG4gIGlzOiBfZG9tLmlzLFxuICBpbmRleDogX2RvbS5pbmRleCxcbiAgZXE6IF9kb20uZXEsXG4gIGFwcGVuZDogX2RvbS5hcHBlbmQsXG4gIHByZXBlbmQ6IF9kb20ucHJlcGVuZCxcbiAgbmV4dDogX2RvbS5uZXh0LFxuICBuZXh0QWxsOiBfZG9tLm5leHRBbGwsXG4gIHByZXY6IF9kb20ucHJldixcbiAgcHJldkFsbDogX2RvbS5wcmV2QWxsLFxuICBwYXJlbnQ6IF9kb20ucGFyZW50LFxuICBwYXJlbnRzOiBfZG9tLnBhcmVudHMsXG4gIGNsb3Nlc3Q6IF9kb20uY2xvc2VzdCxcbiAgZmluZDogX2RvbS5maW5kLFxuICBjaGlsZHJlbjogX2RvbS5jaGlsZHJlbixcbiAgZmlsdGVyOiBfZG9tLmZpbHRlcixcbiAgcmVtb3ZlOiBfZG9tLnJlbW92ZVxufTtcbk9iamVjdC5rZXlzKE1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgX2RvbS4kLmZuW21ldGhvZE5hbWVdID0gTWV0aG9kc1ttZXRob2ROYW1lXTtcbn0pO1xudmFyIF9kZWZhdWx0ID0gX2RvbS4kO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldEJyb3dzZXIgPSBnZXRCcm93c2VyO1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgYnJvd3NlcjtcblxuZnVuY3Rpb24gY2FsY0Jyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG5cbiAgZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignc2FmYXJpJykgPj0gMCAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA8IDAgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpIDwgMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNFZGdlOiAhIXdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlL2cpLFxuICAgIGlzU2FmYXJpOiBpc1NhZmFyaSgpLFxuICAgIGlzV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCcm93c2VyKCkge1xuICBpZiAoIWJyb3dzZXIpIHtcbiAgICBicm93c2VyID0gY2FsY0Jyb3dzZXIoKTtcbiAgfVxuXG4gIHJldHVybiBicm93c2VyO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXREZXZpY2UgPSBnZXREZXZpY2U7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbnZhciBfZ2V0U3VwcG9ydCA9IHJlcXVpcmUoXCIuL2dldC1zdXBwb3J0XCIpO1xuXG52YXIgZGV2aWNlO1xuXG5mdW5jdGlvbiBjYWxjRGV2aWNlKF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICB1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudDtcblxuICB2YXIgc3VwcG9ydCA9ICgwLCBfZ2V0U3VwcG9ydC5nZXRTdXBwb3J0KSgpO1xuICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICB2YXIgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtO1xuICB2YXIgdWEgPSB1c2VyQWdlbnQgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHZhciBkZXZpY2UgPSB7XG4gICAgaW9zOiBmYWxzZSxcbiAgICBhbmRyb2lkOiBmYWxzZVxuICB9O1xuICB2YXIgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICB2YXIgc2NyZWVuSGVpZ2h0ID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gIHZhciBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgdmFyIGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pO1xuICB2YXIgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gIHZhciBpcGhvbmUgPSAhaXBhZCAmJiB1YS5tYXRjaCgvKGlQaG9uZVxcc09TfGlPUylcXHMoW1xcZF9dKykvKTtcbiAgdmFyIHdpbmRvd3MgPSBwbGF0Zm9ybSA9PT0gJ1dpbjMyJztcbiAgdmFyIG1hY29zID0gcGxhdGZvcm0gPT09ICdNYWNJbnRlbCc7IC8vIGlQYWRPcyAxMyBmaXhcblxuICB2YXIgaVBhZFNjcmVlbnMgPSBbJzEwMjR4MTM2NicsICcxMzY2eDEwMjQnLCAnODM0eDExOTQnLCAnMTE5NHg4MzQnLCAnODM0eDExMTInLCAnMTExMng4MzQnLCAnNzY4eDEwMjQnLCAnMTAyNHg3NjgnLCAnODIweDExODAnLCAnMTE4MHg4MjAnLCAnODEweDEwODAnLCAnMTA4MHg4MTAnXTtcblxuICBpZiAoIWlwYWQgJiYgbWFjb3MgJiYgc3VwcG9ydC50b3VjaCAmJiBpUGFkU2NyZWVucy5pbmRleE9mKHNjcmVlbldpZHRoICsgXCJ4XCIgKyBzY3JlZW5IZWlnaHQpID49IDApIHtcbiAgICBpcGFkID0gdWEubWF0Y2goLyhWZXJzaW9uKVxcLyhbXFxkLl0rKS8pO1xuICAgIGlmICghaXBhZCkgaXBhZCA9IFswLCAxLCAnMTNfMF8wJ107XG4gICAgbWFjb3MgPSBmYWxzZTtcbiAgfSAvLyBBbmRyb2lkXG5cblxuICBpZiAoYW5kcm9pZCAmJiAhd2luZG93cykge1xuICAgIGRldmljZS5vcyA9ICdhbmRyb2lkJztcbiAgICBkZXZpY2UuYW5kcm9pZCA9IHRydWU7XG4gIH1cblxuICBpZiAoaXBhZCB8fCBpcGhvbmUgfHwgaXBvZCkge1xuICAgIGRldmljZS5vcyA9ICdpb3MnO1xuICAgIGRldmljZS5pb3MgPSB0cnVlO1xuICB9IC8vIEV4cG9ydCBvYmplY3RcblxuXG4gIHJldHVybiBkZXZpY2U7XG59XG5cbmZ1bmN0aW9uIGdldERldmljZShvdmVycmlkZXMpIHtcbiAgaWYgKG92ZXJyaWRlcyA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnJpZGVzID0ge307XG4gIH1cblxuICBpZiAoIWRldmljZSkge1xuICAgIGRldmljZSA9IGNhbGNEZXZpY2Uob3ZlcnJpZGVzKTtcbiAgfVxuXG4gIHJldHVybiBkZXZpY2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldFN1cHBvcnQgPSBnZXRTdXBwb3J0O1xuXG52YXIgX3NzcldpbmRvdyA9IHJlcXVpcmUoXCJzc3Itd2luZG93XCIpO1xuXG52YXIgc3VwcG9ydDtcblxuZnVuY3Rpb24gY2FsY1N1cHBvcnQoKSB7XG4gIHZhciB3aW5kb3cgPSAoMCwgX3NzcldpbmRvdy5nZXRXaW5kb3cpKCk7XG4gIHZhciBkb2N1bWVudCA9ICgwLCBfc3NyV2luZG93LmdldERvY3VtZW50KSgpO1xuICByZXR1cm4ge1xuICAgIHRvdWNoOiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCksXG4gICAgcG9pbnRlckV2ZW50czogISF3aW5kb3cuUG9pbnRlckV2ZW50ICYmICdtYXhUb3VjaFBvaW50cycgaW4gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID49IDAsXG4gICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uIGNoZWNrT2JzZXJ2ZXIoKSB7XG4gICAgICByZXR1cm4gJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyB8fCAnV2Via2l0TXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93O1xuICAgIH0oKSxcbiAgICBwYXNzaXZlTGlzdGVuZXI6IGZ1bmN0aW9uIGNoZWNrUGFzc2l2ZUxpc3RlbmVyKCkge1xuICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUxpc3RlbmVyJywgbnVsbCwgb3B0cyk7XG4gICAgICB9IGNhdGNoIChlKSB7Ly8gTm8gc3VwcG9ydFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH0oKSxcbiAgICBnZXN0dXJlczogZnVuY3Rpb24gY2hlY2tHZXN0dXJlcygpIHtcbiAgICAgIHJldHVybiAnb25nZXN0dXJlc3RhcnQnIGluIHdpbmRvdztcbiAgICB9KClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgaWYgKCFzdXBwb3J0KSB7XG4gICAgc3VwcG9ydCA9IGNhbGNTdXBwb3J0KCk7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVsZXRlUHJvcHMgPSBkZWxldGVQcm9wcztcbmV4cG9ydHMubmV4dFRpY2sgPSBuZXh0VGljaztcbmV4cG9ydHMubm93ID0gbm93O1xuZXhwb3J0cy5nZXRUcmFuc2xhdGUgPSBnZXRUcmFuc2xhdGU7XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbmV4cG9ydHMuYmluZE1vZHVsZU1ldGhvZHMgPSBiaW5kTW9kdWxlTWV0aG9kcztcbmV4cG9ydHMuZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGU7XG5cbnZhciBfc3NyV2luZG93ID0gcmVxdWlyZShcInNzci13aW5kb3dcIik7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb3BzKG9iaikge1xuICB2YXIgb2JqZWN0ID0gb2JqO1xuICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHRyeSB7XG4gICAgICBvYmplY3Rba2V5XSA9IG51bGw7XG4gICAgfSBjYXRjaCAoZSkgey8vIG5vIGdldHRlciBmb3Igb2JqZWN0XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrLCBkZWxheSkge1xuICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgIGRlbGF5ID0gMDtcbiAgfVxuXG4gIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSk7XG59XG5cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWwpIHtcbiAgdmFyIHdpbmRvdyA9ICgwLCBfc3NyV2luZG93LmdldFdpbmRvdykoKTtcbiAgdmFyIHN0eWxlO1xuXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSAmJiBlbC5jdXJyZW50U3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLnN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSAneCc7XG4gIH1cblxuICB2YXIgd2luZG93ID0gKDAsIF9zc3JXaW5kb3cuZ2V0V2luZG93KSgpO1xuICB2YXIgbWF0cml4O1xuICB2YXIgY3VyVHJhbnNmb3JtO1xuICB2YXIgdHJhbnNmb3JtTWF0cml4O1xuICB2YXIgY3VyU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcblxuICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkge1xuICAgIGN1clRyYW5zZm9ybSA9IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS53ZWJraXRUcmFuc2Zvcm07XG5cbiAgICBpZiAoY3VyVHJhbnNmb3JtLnNwbGl0KCcsJykubGVuZ3RoID4gNikge1xuICAgICAgY3VyVHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtLnNwbGl0KCcsICcpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gYS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgfSAvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBXZWJraXQgY2hva2Ugd2hlbiAnbm9uZScgaXMgcGFzc2VkOyBwYXNzXG4gICAgLy8gZW1wdHkgc3RyaW5nIGluc3RlYWQgaW4gdGhpcyBjYXNlXG5cblxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IG5ldyB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KGN1clRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBjdXJUcmFuc2Zvcm0pO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zZm9ybU1hdHJpeCA9IGN1clN0eWxlLk1velRyYW5zZm9ybSB8fCBjdXJTdHlsZS5PVHJhbnNmb3JtIHx8IGN1clN0eWxlLk1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLm1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKCd0cmFuc2xhdGUoJywgJ21hdHJpeCgxLCAwLCAwLCAxLCcpO1xuICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gIH1cblxuICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MTsgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNikgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTJdKTsgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzRdKTtcbiAgfVxuXG4gIGlmIChheGlzID09PSAneScpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQyOyAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pOyAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICB9XG5cbiAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gIHZhciB0byA9IE9iamVjdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pO1xuICB2YXIgbm9FeHRlbmQgPSBbJ19fcHJvdG9fXycsICdjb25zdHJ1Y3RvcicsICdwcm90b3R5cGUnXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBuZXh0U291cmNlID0gaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKG5leHRTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBuZXh0U291cmNlICE9PSBudWxsKSB7XG4gICAgICB2YXIga2V5c0FycmF5ID0gT2JqZWN0LmtleXMoT2JqZWN0KG5leHRTb3VyY2UpKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gbm9FeHRlbmQuaW5kZXhPZihrZXkpIDwgMDtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgIHZhciBuZXh0S2V5ID0ga2V5c0FycmF5W25leHRJbmRleF07XG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcblxuICAgICAgICBpZiAoZGVzYyAhPT0gdW5kZWZpbmVkICYmIGRlc2MuZW51bWVyYWJsZSkge1xuICAgICAgICAgIGlmIChpc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlW25leHRLZXldLl9fc3dpcGVyX18pIHtcbiAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFpc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0ge307XG5cbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlW25leHRLZXldLl9fc3dpcGVyX18pIHtcbiAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxuZnVuY3Rpb24gYmluZE1vZHVsZU1ldGhvZHMoaW5zdGFuY2UsIG9iaikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChpc09iamVjdChvYmpba2V5XSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKG9ialtrZXldKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJLZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XVtzdWJLZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb2JqW2tleV1bc3ViS2V5XSA9IG9ialtrZXldW3N1YktleV0uYmluZChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluc3RhbmNlW2tleV0gPSBvYmpba2V5XTtcbiAgfSk7XG59IiwiLyoqXG4gKiBTd2lwZXIgNi41LjNcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjEgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogTWFyY2ggMzEsIDIwMjFcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2NvcmUvY29yZS1jbGFzcycpLmRlZmF1bHQ7XG5leHBvcnRzLlN3aXBlciA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvY29yZS9jb3JlLWNsYXNzJykuZGVmYXVsdDtcbmV4cG9ydHMuVmlydHVhbCA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvdmlydHVhbC92aXJ0dWFsJykuZGVmYXVsdDtcbmV4cG9ydHMuS2V5Ym9hcmQgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2tleWJvYXJkL2tleWJvYXJkJykuZGVmYXVsdDtcbmV4cG9ydHMuTW91c2V3aGVlbCA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvbW91c2V3aGVlbC9tb3VzZXdoZWVsJykuZGVmYXVsdDtcbmV4cG9ydHMuTmF2aWdhdGlvbiA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJykuZGVmYXVsdDtcbmV4cG9ydHMuUGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uJykuZGVmYXVsdDtcbmV4cG9ydHMuU2Nyb2xsYmFyID0gcmVxdWlyZSgnLi9janMvY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyJykuZGVmYXVsdDtcbmV4cG9ydHMuUGFyYWxsYXggPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL3BhcmFsbGF4L3BhcmFsbGF4JykuZGVmYXVsdDtcbmV4cG9ydHMuWm9vbSA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvem9vbS96b29tJykuZGVmYXVsdDtcbmV4cG9ydHMuTGF6eSA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvbGF6eS9sYXp5JykuZGVmYXVsdDtcbmV4cG9ydHMuQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvY29udHJvbGxlci9jb250cm9sbGVyJykuZGVmYXVsdDtcbmV4cG9ydHMuQTExeSA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvYTExeS9hMTF5JykuZGVmYXVsdDtcbmV4cG9ydHMuSGlzdG9yeSA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvaGlzdG9yeS9oaXN0b3J5JykuZGVmYXVsdDtcbmV4cG9ydHMuSGFzaE5hdmlnYXRpb24gPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2hhc2gtbmF2aWdhdGlvbi9oYXNoLW5hdmlnYXRpb24nKS5kZWZhdWx0O1xuZXhwb3J0cy5BdXRvcGxheSA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvYXV0b3BsYXkvYXV0b3BsYXknKS5kZWZhdWx0O1xuZXhwb3J0cy5FZmZlY3RGYWRlID0gcmVxdWlyZSgnLi9janMvY29tcG9uZW50cy9lZmZlY3QtZmFkZS9lZmZlY3QtZmFkZScpLmRlZmF1bHQ7XG5leHBvcnRzLkVmZmVjdEN1YmUgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2VmZmVjdC1jdWJlL2VmZmVjdC1jdWJlJykuZGVmYXVsdDtcbmV4cG9ydHMuRWZmZWN0RmxpcCA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvZWZmZWN0LWZsaXAvZWZmZWN0LWZsaXAnKS5kZWZhdWx0O1xuZXhwb3J0cy5FZmZlY3RDb3ZlcmZsb3cgPSByZXF1aXJlKCcuL2Nqcy9jb21wb25lbnRzL2VmZmVjdC1jb3ZlcmZsb3cvZWZmZWN0LWNvdmVyZmxvdycpLmRlZmF1bHQ7XG5leHBvcnRzLlRodW1icyA9IHJlcXVpcmUoJy4vY2pzL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icycpLmRlZmF1bHQ7Il19
