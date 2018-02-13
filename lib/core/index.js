'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require('../lib');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assign = require('es6-object-assign').assign;

var defaults = {
  offsetTop: 0,
  target: '[data-spy]',
  targetAttr: 'data-spy',
  className: 'is-active'
};

var ScrollSpy = function () {
  function ScrollSpy(ele, opt) {
    var _this = this;

    _classCallCheck(this, ScrollSpy);

    this.opt = assign({}, defaults, opt);
    this.targetElements = typeof ele === 'string' ? document.querySelectorAll(ele) : ele;
    this.sections = typeof this.opt.target === 'string' ? document.querySelectorAll(this.opt.target) : this.opt.target;
    window.addEventListener('scroll', function () {
      _this.onScroll();
    });
  }

  _createClass(ScrollSpy, [{
    key: 'onScroll',
    value: function onScroll() {
      var _this2 = this;

      var scroll = (0, _lib.getScrollTop)();
      var offsetTop = this.opt.offsetTop;

      var find = [].find.call(this.sections, function (item) {
        var top = (0, _lib.getOffset)(item).top;
        var height = (0, _lib.outerHeight)(item);
        if (scroll + offsetTop >= top && scroll + offsetTop <= top + height) {
          return true;
        }
        return false;
      });
      if (find) {
        var attr = find.getAttribute(this.opt.targetAttr);
        var target = [].forEach.call(this.targetElements, function (item) {
          var href = item.getAttribute('href');
          if (href.replace('#', '') === attr) {
            (0, _lib.addClass)(item, _this2.opt.className);
          } else {
            (0, _lib.removeClass)(item, _this2.opt.className);
          }
        });
      }
    }
  }]);

  return ScrollSpy;
}();

exports.default = ScrollSpy;
module.exports = exports['default'];