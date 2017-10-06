(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  console.log('ChatApp constructor');
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'Nader' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? newDate().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = message;
    this.user = user;
    this.timestamp = timestamp;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        message: this.message,
        user: this.user,
        timestamp: this.timestamp

      };
    }
  }]);

  return ChatMessage;
}();

//new ChatApp();


exports.default = ChatApp;

},{}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sTyxHQUNKLG1CQUFhO0FBQUE7O0FBQ1gsVUFBUSxHQUFSLENBQVkscUJBQVo7QUFDRCxDOztJQUdHLFc7QUFDSiw2QkFJRztBQUFBLFFBSFEsQ0FHUixRQUhELE9BR0M7QUFBQSx5QkFGRCxJQUVDO0FBQUEsUUFGSyxDQUVMLDZCQUZPLE9BRVA7QUFBQSw4QkFERCxTQUNDO0FBQUEsUUFEVSxDQUNWLGtDQURhLFNBQUQsQ0FBWSxPQUFaLEVBQ1o7O0FBQUE7O0FBQ0QsU0FBSyxPQUFMLEdBQWEsT0FBYjtBQUNBLFNBQUssSUFBTCxHQUFVLElBQVY7QUFDQSxTQUFLLFNBQUwsR0FBZSxTQUFmO0FBQ0Q7Ozs7Z0NBQ1U7QUFDVCxhQUFPO0FBQ0wsaUJBQVMsS0FBSyxPQURUO0FBRUwsY0FBTSxLQUFLLElBRk47QUFHTCxtQkFBVyxLQUFLOztBQUhYLE9BQVA7QUFNRDs7Ozs7O0FBSUg7OztrQkFDZSxPOzs7OztBQzVCZjs7Ozs7O0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ2hhdEFwcCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgY29uc29sZS5sb2coJ0NoYXRBcHAgY29uc3RydWN0b3InKTtcbiAgfVxufVxuXG5jbGFzcyBDaGF0TWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtZXNzYWdlOiBtLFxuICAgIHVzZXI6IHU9J05hZGVyJyxcbiAgICB0aW1lc3RhbXA6IHQ9KG5ld0RhdGUoKSkuZ2V0VGltZSgpXG4gIH0pIHtcbiAgICB0aGlzLm1lc3NhZ2U9bWVzc2FnZTtcbiAgICB0aGlzLnVzZXI9dXNlcjtcbiAgICB0aGlzLnRpbWVzdGFtcD10aW1lc3RhbXA7XG4gIH1cbiAgc2VyaWFsaXplKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHVzZXI6IHRoaXMudXNlcixcbiAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcblxuICAgIH07XG4gIH1cbn1cblxuXG4vL25ldyBDaGF0QXBwKCk7XG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTtcbiJdfQ==
