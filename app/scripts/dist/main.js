(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  console.log('ChatApp constructor');
  _wsClient2.default.init('ws://localhost:8000');
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

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socket = void 0;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

exports.default = {
  init: init
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0osbUJBQWE7QUFBQTs7QUFDWCxVQUFRLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLHFCQUFPLElBQVAsQ0FBWSxxQkFBWjtBQUNELEM7O0lBR0csVztBQUNKLDZCQUlHO0FBQUEsUUFIUSxDQUdSLFFBSEQsT0FHQztBQUFBLHlCQUZELElBRUM7QUFBQSxRQUZLLENBRUwsNkJBRk8sT0FFUDtBQUFBLDhCQURELFNBQ0M7QUFBQSxRQURVLENBQ1Ysa0NBRGEsU0FBRCxDQUFZLE9BQVosRUFDWjs7QUFBQTs7QUFDRCxTQUFLLE9BQUwsR0FBYSxPQUFiO0FBQ0EsU0FBSyxJQUFMLEdBQVUsSUFBVjtBQUNBLFNBQUssU0FBTCxHQUFlLFNBQWY7QUFDRDs7OztnQ0FDVTtBQUNULGFBQU87QUFDTCxpQkFBUyxLQUFLLE9BRFQ7QUFFTCxjQUFNLEtBQUssSUFGTjtBQUdMLG1CQUFXLEtBQUs7O0FBSFgsT0FBUDtBQU1EOzs7Ozs7QUFJSDs7O2tCQUNlLE87Ozs7O0FDL0JmOzs7Ozs7QUFDQTs7Ozs7Ozs7QUNEQSxJQUFJLGVBQUo7O0FBRUEsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFrQjtBQUNoQixXQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFVBQVEsR0FBUixDQUFZLGVBQVo7QUFFRDs7a0JBRWM7QUFDYjtBQURhLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCdcblxuY2xhc3MgQ2hhdEFwcCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgY29uc29sZS5sb2coJ0NoYXRBcHAgY29uc3RydWN0b3InKTtcbiAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6ODAwMCcpO1xuICB9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIG1lc3NhZ2U6IG0sXG4gICAgdXNlcjogdT0nTmFkZXInLFxuICAgIHRpbWVzdGFtcDogdD0obmV3RGF0ZSgpKS5nZXRUaW1lKClcbiAgfSkge1xuICAgIHRoaXMubWVzc2FnZT1tZXNzYWdlO1xuICAgIHRoaXMudXNlcj11c2VyO1xuICAgIHRoaXMudGltZXN0YW1wPXRpbWVzdGFtcDtcbiAgfVxuICBzZXJpYWxpemUoKXtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxuXG4gICAgfTtcbiAgfVxufVxuXG5cbi8vbmV3IENoYXRBcHAoKTtcbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7XG4iLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XG5uZXcgQ2hhdEFwcCgpO1xuIiwibGV0IHNvY2tldDtcblxuZnVuY3Rpb24gaW5pdCh1cmwpe1xuICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0LFxufVxuIl19
