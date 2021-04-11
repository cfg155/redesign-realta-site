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
    cardContainer += "\n        <div class=\"category__card col-md-6\">\n        <img src=\"assets/".concat(item.headerIMG_URL, "\" class=\"category__card--header w-100\">\n        <div class=\"category__card--title my-3\">\n            <div class=\"logo\"></div>\n            <h2>").concat(item.title, "</h2>\n        </div>\n        <div class=\"category__card--tag my-2\">").concat(item.tag, "</div>\n        <div class=\"category__card--body w-100 text-justify\">").concat(item.body, "</div>\n        </div>\n        ");
  });
  cardContainer += "<div class=\"category__card col-md-6\"></div>";
  document.querySelector('.category__wrapper').innerHTML += cardContainer;
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
  }]
}];
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2xlb25hL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9zb2x1dGlvbi5qcyIsImpzL3NvbHV0aW9uRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxTQUFTLGdCQUFULEdBQTJCO0FBQ3ZCLE1BQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxFQUFBLElBQUksQ0FBQyxJQUFMLENBQVUseUJBQWEsQ0FBYixFQUFnQixRQUExQjtBQUNBLE1BQUksU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxNQUF4QjtBQUVBLE1BQUksYUFBYSxHQUFHLEVBQXBCO0FBRUEsRUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsT0FBUixDQUFnQixVQUFBLElBQUksRUFBSTtBQUNwQixJQUFBLGFBQWEsMkZBR00sSUFBSSxDQUFDLGFBSFgscUtBTUgsSUFBSSxDQUFDLEtBTkYsb0ZBUTJCLElBQUksQ0FBQyxHQVJoQyxvRkFTMEMsSUFBSSxDQUFDLElBVC9DLHFDQUFiO0FBWUgsR0FiRDtBQWVBLEVBQUEsYUFBYSxtREFBYjtBQUNBLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDLFNBQTdDLElBQTBELGFBQTFEO0FBRUg7O0FBRUQsZ0JBQWdCOzs7Ozs7Ozs7ZUM3QkQsQ0FDWDtBQUNJLEVBQUEsUUFBUSxFQUFHLENBQ1A7QUFDSSxJQUFBLGFBQWEsRUFBRywwQkFEcEI7QUFFSSxJQUFBLFdBQVcsRUFBRyxFQUZsQjtBQUdJLElBQUEsS0FBSyxFQUFHLFFBSFo7QUFJSSxJQUFBLEdBQUcsRUFBRyx1Q0FKVjtBQUtJLElBQUEsSUFBSSxFQUFHO0FBTFgsR0FETyxFQVFQO0FBQ0ksSUFBQSxhQUFhLEVBQUcsMEJBRHBCO0FBRUksSUFBQSxXQUFXLEVBQUcsRUFGbEI7QUFHSSxJQUFBLEtBQUssRUFBRyxRQUhaO0FBSUksSUFBQSxHQUFHLEVBQUcsdUNBSlY7QUFLSSxJQUFBLElBQUksRUFBRztBQUxYLEdBUk8sRUFlUDtBQUNJLElBQUEsYUFBYSxFQUFHLDBCQURwQjtBQUVJLElBQUEsV0FBVyxFQUFHLEVBRmxCO0FBR0ksSUFBQSxLQUFLLEVBQUcsUUFIWjtBQUlJLElBQUEsR0FBRyxFQUFHLHVDQUpWO0FBS0ksSUFBQSxJQUFJLEVBQUc7QUFMWCxHQWZPO0FBRGYsQ0FEVyxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHNvbHV0aW9uRGF0YSBmcm9tICcuL3NvbHV0aW9uRGF0YS5qcydcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ2F0ZWdvcnkoKXtcclxuICAgIGxldCBkYXRhID0gW11cclxuICAgIGRhdGEucHVzaChzb2x1dGlvbkRhdGFbMF0uY2F0ZWdvcnkpXHJcbiAgICBsZXQgZGF0YUNvdW50ID0gZGF0YVswXS5sZW5ndGggXHJcblxyXG4gICAgbGV0IGNhcmRDb250YWluZXIgPSBcIlwiXHJcblxyXG4gICAgZGF0YVswXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNhcmRDb250YWluZXIgKz0gXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9fY2FyZCBjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzLyR7aXRlbS5oZWFkZXJJTUdfVVJMfVwiIGNsYXNzPVwiY2F0ZWdvcnlfX2NhcmQtLWhlYWRlciB3LTEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9fY2FyZC0tdGl0bGUgbXktM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8aDI+JHtpdGVtLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5X19jYXJkLS10YWcgbXktMlwiPiR7aXRlbS50YWd9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5X19jYXJkLS1ib2R5IHctMTAwIHRleHQtanVzdGlmeVwiPiR7aXRlbS5ib2R5fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH0pXHJcblxyXG4gICAgY2FyZENvbnRhaW5lciArPSBgPGRpdiBjbGFzcz1cImNhdGVnb3J5X19jYXJkIGNvbC1tZC02XCI+PC9kaXY+YFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5X193cmFwcGVyJykuaW5uZXJIVE1MICs9IGNhcmRDb250YWluZXJcclxuXHJcbn1cclxuXHJcbmdlbmVyYXRlQ2F0ZWdvcnkoKSIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeSA6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVySU1HX1VSTCA6IFwic2FtcGxlU29sdXRpb25IZWFkZXIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBsb2dvSU1HX1VSTCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA6IFwiU0lBUCtQXCIsXHJcbiAgICAgICAgICAgICAgICB0YWcgOiBcIkhSSVMsIEhSTVMsIFBBWVJPTEwsIEF0dGVuZGFuY2UgUFBIMjFcIixcclxuICAgICAgICAgICAgICAgIGJvZHkgOiBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW1pbGlxdWUgaXVyZSBxdWFlcmF0IGNvbnNlcXV1bnR1cj8gVmVyaXRhdGlzIGFsaXF1YW0gcmVjdXNhbmRhZSBzYXBpZW50ZSBlYXJ1bSBxdW9kIGVsaWdlbmRpIG1vZGkuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVySU1HX1VSTCA6IFwic2FtcGxlU29sdXRpb25IZWFkZXIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBsb2dvSU1HX1VSTCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA6IFwiU0lBUCtQXCIsXHJcbiAgICAgICAgICAgICAgICB0YWcgOiBcIkhSSVMsIEhSTVMsIFBBWVJPTEwsIEF0dGVuZGFuY2UgUFBIMjFcIixcclxuICAgICAgICAgICAgICAgIGJvZHkgOiBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW1pbGlxdWUgaXVyZSBxdWFlcmF0IGNvbnNlcXV1bnR1cj8gVmVyaXRhdGlzIGFsaXF1YW0gcmVjdXNhbmRhZSBzYXBpZW50ZSBlYXJ1bSBxdW9kIGVsaWdlbmRpIG1vZGkuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVySU1HX1VSTCA6IFwic2FtcGxlU29sdXRpb25IZWFkZXIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICBsb2dvSU1HX1VSTCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA6IFwiU0lBUCtQXCIsXHJcbiAgICAgICAgICAgICAgICB0YWcgOiBcIkhSSVMsIEhSTVMsIFBBWVJPTEwsIEF0dGVuZGFuY2UgUFBIMjFcIixcclxuICAgICAgICAgICAgICAgIGJvZHkgOiBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW1pbGlxdWUgaXVyZSBxdWFlcmF0IGNvbnNlcXV1bnR1cj8gVmVyaXRhdGlzIGFsaXF1YW0gcmVjdXNhbmRhZSBzYXBpZW50ZSBlYXJ1bSBxdW9kIGVsaWdlbmRpIG1vZGkuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXSJdfQ==
