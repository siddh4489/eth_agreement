webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var NavBarMobile = function NavBarMobile(_ref) {
  var children = _ref.children,
      leftItems = _ref.leftItems,
      onPusherClick = _ref.onPusherClick,
      onToggle = _ref.onToggle,
      rightItems = _ref.rightItems,
      visible = _ref.visible;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Sidebar"].Pushable, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Sidebar"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"],
    animation: "overlay",
    icon: "labeled",
    inverted: true,
    items: leftItems,
    vertical: true,
    visible: true
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Sidebar"].Pusher, {
    dimmed: visible,
    onClick: onPusherClick,
    style: {
      minHeight: "100vh"
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
    fixed: "top",
    inverted: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    size: "mini",
    src: "https://react.semantic-ui.com/logo.png"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, {
    onClick: onToggle
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    name: "sidebar"
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Menu, {
    position: "right"
  }, lodash__WEBPACK_IMPORTED_MODULE_10___default.a.map(rightItems, function (item) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, item);
  }))), children));
};

_c = NavBarMobile;

var NavBarDesktop = function NavBarDesktop(_ref2) {
  var leftItems = _ref2.leftItems,
      rightItems = _ref2.rightItems;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
    fixed: "top",
    inverted: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    size: "mini",
    src: "https://react.semantic-ui.com/logo.png"
  })), lodash__WEBPACK_IMPORTED_MODULE_10___default.a.map(leftItems, function (item) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, item);
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Menu, {
    position: "right"
  }, lodash__WEBPACK_IMPORTED_MODULE_10___default.a.map(rightItems, function (item) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Menu"].Item, item);
  })));
};

_c2 = NavBarDesktop;

var NavBarChildren = function NavBarChildren(_ref3) {
  var children = _ref3.children;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    style: {
      marginTop: "5em"
    }
  }, children);
};

_c3 = NavBarChildren;

var NavBar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar, _Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      visible: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handlePusher", function () {
      var visible = _this.state.visible;
      if (visible) _this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleToggle", function () {
      return _this.setState({
        visible: !_this.state.visible
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          leftItems = _this$props.leftItems,
          rightItems = _this$props.rightItems;
      var visible = this.state.visible;
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Responsive"], semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Responsive"].onlyMobile, __jsx(NavBarMobile, {
        leftItems: leftItems,
        onPusherClick: this.handlePusher,
        onToggle: this.handleToggle,
        rightItems: rightItems,
        visible: visible
      }, __jsx(NavBarChildren, null, "-"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Responsive"], {
        minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Responsive"].onlyTablet.minWidth
      }, __jsx(NavBarDesktop, {
        leftItems: leftItems,
        rightItems: rightItems
      }), __jsx(NavBarChildren, null, "--")));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var leftItems = [{
  as: "a",
  content: "Home",
  key: "home"
}, {
  as: "a",
  content: "Users",
  key: "users"
}];
var rightItems = [{
  as: "a",
  content: "Login",
  key: "login"
}, {
  as: "a",
  content: "Register",
  key: "register"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(NavBar, {
    leftItems: leftItems,
    rightItems: rightItems
  }, "wow", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "https://react.semantic-ui.com/logo.png"
  }));
});

var _c, _c2, _c3;

$RefreshReg$(_c, "NavBarMobile");
$RefreshReg$(_c2, "NavBarDesktop");
$RefreshReg$(_c3, "NavBarChildren");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})