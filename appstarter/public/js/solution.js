(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _solutionData = _interopRequireDefault(require("./solutionData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function generateCategory() {
  var data = [];
  data.push(_solutionData["default"][0].category);
  var dataCount = data[0].length;
  var cardContainer = "";
  data[0].forEach(function (item) {
    cardContainer += "\n        <div class=\"category__card\">\n            <img src=\"assets/".concat(item.headerIMG_URL, "\" class=\"category__card--header\">\n            <div class=\"category__card--title\">\n                <div class=\"logo\"></div>\n                <h2>").concat(item.title, "</h2>\n            </div>\n            <div class=\"category__card--tag\">").concat(item.tag, "</div>\n            <div class=\"category__card--body\">").concat(item.body, "</div>\n        </div>\n        ");
  });
  console.log(cardContainer);
  document.querySelector('.category').innerHTML += cardContainer;
}

generateCategory();

},{"./solutionData.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  category: [{
    headerIMG_URL: "sampleSolutionHeader.png",
    logoIMG_URL: "",
    title: "SIAP+P",
    tag: "HRIS, HRMS, PAYROLL, Attendance PPH21",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique iure quaerat consequuntur? Veritatis aliquam recusandae sapiente earum quod eligendi modi."
  }, {
    headerIMG_URL: "sampleSolutionHeader.png",
    logoIMG_URL: "",
    title: "SIAP+P",
    tag: "HRIS, HRMS, PAYROLL, Attendance PPH21",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique iure quaerat consequuntur? Veritatis aliquam recusandae sapiente earum quod eligendi modi."
  }, {
    headerIMG_URL: "sampleSolutionHeader.png",
    logoIMG_URL: "",
    title: "SIAP+P",
    tag: "HRIS, HRMS, PAYROLL, Attendance PPH21",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique iure quaerat consequuntur? Veritatis aliquam recusandae sapiente earum quod eligendi modi."
  }, {
    headerIMG_URL: "sampleSolutionHeader.png",
    logoIMG_URL: "",
    title: "SIAP+P",
    tag: "HRIS, HRMS, PAYROLL, Attendance PPH21",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique iure quaerat consequuntur? Veritatis aliquam recusandae sapiente earum quod eligendi modi."
  }]
}];
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2xlb25hL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9zb2x1dGlvbi5qcyIsImpzL3NvbHV0aW9uRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxTQUFTLGdCQUFULEdBQTJCO0FBQ3ZCLE1BQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxFQUFBLElBQUksQ0FBQyxJQUFMLENBQVUseUJBQWEsQ0FBYixFQUFnQixRQUExQjtBQUNBLE1BQUksU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxNQUF4QjtBQUVBLE1BQUksYUFBYSxHQUFHLEVBQXBCO0FBRUEsRUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsT0FBUixDQUFnQixVQUFBLElBQUksRUFBSTtBQUNwQixJQUFBLGFBQWEsc0ZBR1UsSUFBSSxDQUFDLGFBSGYsc0tBTUMsSUFBSSxDQUFDLEtBTk4sdUZBUTBCLElBQUksQ0FBQyxHQVIvQixxRUFTMkIsSUFBSSxDQUFDLElBVGhDLHFDQUFiO0FBWUgsR0FiRDtBQWVBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaO0FBRUEsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxTQUFwQyxJQUFpRCxhQUFqRDtBQUVIOztBQUVELGdCQUFnQjs7Ozs7Ozs7O2VDOUJELENBQ1g7QUFDSSxFQUFBLFFBQVEsRUFBRyxDQUNQO0FBQ0ksSUFBQSxhQUFhLEVBQUcsMEJBRHBCO0FBRUksSUFBQSxXQUFXLEVBQUcsRUFGbEI7QUFHSSxJQUFBLEtBQUssRUFBRyxRQUhaO0FBSUksSUFBQSxHQUFHLEVBQUcsdUNBSlY7QUFLSSxJQUFBLElBQUksRUFBRztBQUxYLEdBRE8sRUFRUDtBQUNJLElBQUEsYUFBYSxFQUFHLDBCQURwQjtBQUVJLElBQUEsV0FBVyxFQUFHLEVBRmxCO0FBR0ksSUFBQSxLQUFLLEVBQUcsUUFIWjtBQUlJLElBQUEsR0FBRyxFQUFHLHVDQUpWO0FBS0ksSUFBQSxJQUFJLEVBQUc7QUFMWCxHQVJPLEVBZVA7QUFDSSxJQUFBLGFBQWEsRUFBRywwQkFEcEI7QUFFSSxJQUFBLFdBQVcsRUFBRyxFQUZsQjtBQUdJLElBQUEsS0FBSyxFQUFHLFFBSFo7QUFJSSxJQUFBLEdBQUcsRUFBRyx1Q0FKVjtBQUtJLElBQUEsSUFBSSxFQUFHO0FBTFgsR0FmTyxFQXNCUDtBQUNJLElBQUEsYUFBYSxFQUFHLDBCQURwQjtBQUVJLElBQUEsV0FBVyxFQUFHLEVBRmxCO0FBR0ksSUFBQSxLQUFLLEVBQUcsUUFIWjtBQUlJLElBQUEsR0FBRyxFQUFHLHVDQUpWO0FBS0ksSUFBQSxJQUFJLEVBQUc7QUFMWCxHQXRCTztBQURmLENBRFcsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzb2x1dGlvbkRhdGEgZnJvbSAnLi9zb2x1dGlvbkRhdGEuanMnXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNhdGVnb3J5KCl7XHJcbiAgICBsZXQgZGF0YSA9IFtdXHJcbiAgICBkYXRhLnB1c2goc29sdXRpb25EYXRhWzBdLmNhdGVnb3J5KVxyXG4gICAgbGV0IGRhdGFDb3VudCA9IGRhdGFbMF0ubGVuZ3RoIFxyXG5cclxuICAgIGxldCBjYXJkQ29udGFpbmVyID0gXCJcIlxyXG5cclxuICAgIGRhdGFbMF0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjYXJkQ29udGFpbmVyICs9IFxyXG4gICAgICAgIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2NhcmRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvJHtpdGVtLmhlYWRlcklNR19VUkx9XCIgY2xhc3M9XCJjYXRlZ29yeV9fY2FyZC0taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9fY2FyZC0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+JHtpdGVtLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2NhcmQtLXRhZ1wiPiR7aXRlbS50YWd9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9fY2FyZC0tYm9keVwiPiR7aXRlbS5ib2R5fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coY2FyZENvbnRhaW5lcilcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnknKS5pbm5lckhUTUwgKz0gY2FyZENvbnRhaW5lclxyXG5cclxufVxyXG5cclxuZ2VuZXJhdGVDYXRlZ29yeSgpIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIGNhdGVnb3J5IDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJJTUdfVVJMIDogXCJzYW1wbGVTb2x1dGlvbkhlYWRlci5wbmdcIixcclxuICAgICAgICAgICAgICAgIGxvZ29JTUdfVVJMIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTSUFQK1BcIixcclxuICAgICAgICAgICAgICAgIHRhZyA6IFwiSFJJUywgSFJNUywgUEFZUk9MTCwgQXR0ZW5kYW5jZSBQUEgyMVwiLFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBpdXJlIHF1YWVyYXQgY29uc2VxdXVudHVyPyBWZXJpdGF0aXMgYWxpcXVhbSByZWN1c2FuZGFlIHNhcGllbnRlIGVhcnVtIHF1b2QgZWxpZ2VuZGkgbW9kaS5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJJTUdfVVJMIDogXCJzYW1wbGVTb2x1dGlvbkhlYWRlci5wbmdcIixcclxuICAgICAgICAgICAgICAgIGxvZ29JTUdfVVJMIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTSUFQK1BcIixcclxuICAgICAgICAgICAgICAgIHRhZyA6IFwiSFJJUywgSFJNUywgUEFZUk9MTCwgQXR0ZW5kYW5jZSBQUEgyMVwiLFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBpdXJlIHF1YWVyYXQgY29uc2VxdXVudHVyPyBWZXJpdGF0aXMgYWxpcXVhbSByZWN1c2FuZGFlIHNhcGllbnRlIGVhcnVtIHF1b2QgZWxpZ2VuZGkgbW9kaS5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJJTUdfVVJMIDogXCJzYW1wbGVTb2x1dGlvbkhlYWRlci5wbmdcIixcclxuICAgICAgICAgICAgICAgIGxvZ29JTUdfVVJMIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTSUFQK1BcIixcclxuICAgICAgICAgICAgICAgIHRhZyA6IFwiSFJJUywgSFJNUywgUEFZUk9MTCwgQXR0ZW5kYW5jZSBQUEgyMVwiLFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBpdXJlIHF1YWVyYXQgY29uc2VxdXVudHVyPyBWZXJpdGF0aXMgYWxpcXVhbSByZWN1c2FuZGFlIHNhcGllbnRlIGVhcnVtIHF1b2QgZWxpZ2VuZGkgbW9kaS5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJJTUdfVVJMIDogXCJzYW1wbGVTb2x1dGlvbkhlYWRlci5wbmdcIixcclxuICAgICAgICAgICAgICAgIGxvZ29JTUdfVVJMIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTSUFQK1BcIixcclxuICAgICAgICAgICAgICAgIHRhZyA6IFwiSFJJUywgSFJNUywgUEFZUk9MTCwgQXR0ZW5kYW5jZSBQUEgyMVwiLFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBpdXJlIHF1YWVyYXQgY29uc2VxdXVudHVyPyBWZXJpdGF0aXMgYWxpcXVhbSByZWN1c2FuZGFlIHNhcGllbnRlIGVhcnVtIHF1b2QgZWxpZ2VuZGkgbW9kaS5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXSJdfQ==
