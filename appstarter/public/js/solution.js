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
    cardContainer += "\n        <div class=\"category__card col-md-6 position-relative\">\n            <img src=\"assets/".concat(item.headerIMG_URL, "\" class=\"category__card--header w-100\">\n            <div class=\"category__card--title d-flex align-items-center my-3\">\n                <div class=\"logo me-2\"></div>\n                <h2>").concat(item.title, "</h2>\n            </div>\n            <div class=\"category__card--tag my-2\">").concat(item.tag, "</div>\n            <div class=\"category__card--body w-100 text-justify my-3\">").concat(item.body, "</div>\n            <a href=\"siap-subpage.html\" class=\"category__card--link\"></a>\n        </div>\n        ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL2xlb25hL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc09SSS9zb2x1dGlvbi5qcyIsImpzT1JJL3NvbHV0aW9uRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxTQUFTLGdCQUFULEdBQTJCO0FBQ3ZCLE1BQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxFQUFBLElBQUksQ0FBQyxJQUFMLENBQVUseUJBQWEsQ0FBYixFQUFnQixRQUExQjtBQUNBLE1BQUksU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUSxNQUF4QjtBQUVBLE1BQUksYUFBYSxHQUFHLEVBQXBCO0FBRUEsRUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEsT0FBUixDQUFnQixVQUFBLElBQUksRUFBSTtBQUNwQixJQUFBLGFBQWEsaUhBR1UsSUFBSSxDQUFDLGFBSGYsZ05BTUMsSUFBSSxDQUFDLEtBTk4sNEZBUStCLElBQUksQ0FBQyxHQVJwQyw2RkFTbUQsSUFBSSxDQUFDLElBVHhELG9IQUFiO0FBYUgsR0FkRDtBQWdCQSxFQUFBLGFBQWEsbURBQWI7QUFDQSxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixFQUE2QyxTQUE3QyxJQUEwRCxhQUExRDtBQUVIOztBQUVELGdCQUFnQjs7Ozs7Ozs7O2VDOUJELENBQ1g7QUFDSSxFQUFBLFFBQVEsRUFBRyxDQUNQO0FBQ0ksSUFBQSxhQUFhLEVBQUcsMEJBRHBCO0FBRUksSUFBQSxXQUFXLEVBQUcsRUFGbEI7QUFHSSxJQUFBLEtBQUssRUFBRyxRQUhaO0FBSUksSUFBQSxHQUFHLEVBQUcsdUNBSlY7QUFLSSxJQUFBLElBQUksRUFBRztBQUxYLEdBRE8sRUFRUDtBQUNJLElBQUEsYUFBYSxFQUFHLDBCQURwQjtBQUVJLElBQUEsV0FBVyxFQUFHLEVBRmxCO0FBR0ksSUFBQSxLQUFLLEVBQUcsUUFIWjtBQUlJLElBQUEsR0FBRyxFQUFHLHVDQUpWO0FBS0ksSUFBQSxJQUFJLEVBQUc7QUFMWCxHQVJPLEVBZVA7QUFDSSxJQUFBLGFBQWEsRUFBRywwQkFEcEI7QUFFSSxJQUFBLFdBQVcsRUFBRyxFQUZsQjtBQUdJLElBQUEsS0FBSyxFQUFHLFFBSFo7QUFJSSxJQUFBLEdBQUcsRUFBRyx1Q0FKVjtBQUtJLElBQUEsSUFBSSxFQUFHO0FBTFgsR0FmTztBQURmLENBRFcsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzb2x1dGlvbkRhdGEgZnJvbSAnLi9zb2x1dGlvbkRhdGEuanMnXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNhdGVnb3J5KCl7XHJcbiAgICBsZXQgZGF0YSA9IFtdXHJcbiAgICBkYXRhLnB1c2goc29sdXRpb25EYXRhWzBdLmNhdGVnb3J5KVxyXG4gICAgbGV0IGRhdGFDb3VudCA9IGRhdGFbMF0ubGVuZ3RoIFxyXG5cclxuICAgIGxldCBjYXJkQ29udGFpbmVyID0gXCJcIlxyXG5cclxuICAgIGRhdGFbMF0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjYXJkQ29udGFpbmVyICs9IFxyXG4gICAgICAgIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2NhcmQgY29sLW1kLTYgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvJHtpdGVtLmhlYWRlcklNR19VUkx9XCIgY2xhc3M9XCJjYXRlZ29yeV9fY2FyZC0taGVhZGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9fY2FyZC0tdGl0bGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nbyBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+JHtpdGVtLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2NhcmQtLXRhZyBteS0yXCI+JHtpdGVtLnRhZ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5X19jYXJkLS1ib2R5IHctMTAwIHRleHQtanVzdGlmeSBteS0zXCI+JHtpdGVtLmJvZHl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJzaWFwLXN1YnBhZ2UuaHRtbFwiIGNsYXNzPVwiY2F0ZWdvcnlfX2NhcmQtLWxpbmtcIj48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfSlcclxuXHJcbiAgICBjYXJkQ29udGFpbmVyICs9IGA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2NhcmQgY29sLW1kLTZcIj48L2Rpdj5gXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnlfX3dyYXBwZXInKS5pbm5lckhUTUwgKz0gY2FyZENvbnRhaW5lclxyXG5cclxufVxyXG5cclxuZ2VuZXJhdGVDYXRlZ29yeSgpIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIGNhdGVnb3J5IDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJJTUdfVVJMIDogXCJzYW1wbGVTb2x1dGlvbkhlYWRlci5wbmdcIixcclxuICAgICAgICAgICAgICAgIGxvZ29JTUdfVVJMIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTSUFQK1BcIixcclxuICAgICAgICAgICAgICAgIHRhZyA6IFwiSFJJUywgSFJNUywgUEFZUk9MTCwgQXR0ZW5kYW5jZSBQUEgyMVwiLFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBpdXJlIHF1YWVyYXQgY29uc2VxdXVudHVyPyBWZXJpdGF0aXMgYWxpcXVhbSByZWN1c2FuZGFlIHNhcGllbnRlIGVhcnVtIHF1b2QgZWxpZ2VuZGkgbW9kaS5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJJTUdfVVJMIDogXCJzYW1wbGVTb2x1dGlvbkhlYWRlci5wbmdcIixcclxuICAgICAgICAgICAgICAgIGxvZ29JTUdfVVJMIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTSUFQK1BcIixcclxuICAgICAgICAgICAgICAgIHRhZyA6IFwiSFJJUywgSFJNUywgUEFZUk9MTCwgQXR0ZW5kYW5jZSBQUEgyMVwiLFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBpdXJlIHF1YWVyYXQgY29uc2VxdXVudHVyPyBWZXJpdGF0aXMgYWxpcXVhbSByZWN1c2FuZGFlIHNhcGllbnRlIGVhcnVtIHF1b2QgZWxpZ2VuZGkgbW9kaS5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJJTUdfVVJMIDogXCJzYW1wbGVTb2x1dGlvbkhlYWRlci5wbmdcIixcclxuICAgICAgICAgICAgICAgIGxvZ29JTUdfVVJMIDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogXCJTSUFQK1BcIixcclxuICAgICAgICAgICAgICAgIHRhZyA6IFwiSFJJUywgSFJNUywgUEFZUk9MTCwgQXR0ZW5kYW5jZSBQUEgyMVwiLFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSBpdXJlIHF1YWVyYXQgY29uc2VxdXVudHVyPyBWZXJpdGF0aXMgYWxpcXVhbSByZWN1c2FuZGFlIHNhcGllbnRlIGVhcnVtIHF1b2QgZWxpZ2VuZGkgbW9kaS5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dIl19
