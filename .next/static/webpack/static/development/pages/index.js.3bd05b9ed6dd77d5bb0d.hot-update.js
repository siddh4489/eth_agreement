webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _HeaderSegment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./HeaderSegment */ "./components/HeaderSegment.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 //import { useAuth0 } from '../../contexts/auth0-context';

var HomepageHeading = function HomepageHeading(_ref) {
  var mobile = _ref.mobile;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    text: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
    as: "h1",
    content: "Wine Tripping",
    inverted: true,
    style: {
      fontSize: mobile ? '2em' : '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: mobile ? '1.5em' : '3em'
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
    as: "h2",
    content: "Find your favorite region with us...",
    inverted: true,
    style: {
      fontSize: mobile ? '1.5em' : '1.7em',
      fontWeight: 'normal',
      marginTop: mobile ? '0.5em' : '1.5em'
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    primary: true,
    size: "huge"
  }, "Plan a trip", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    name: "right arrow"
  })));
};

_c = HomepageHeading;

var Auth0Connection = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Auth0Connection, _React$Component);

  var _super = _createSuper(Auth0Connection);

  function Auth0Connection(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Auth0Connection);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "initializeAuth0", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var auth0Client, isAuthenticated, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_14___default()(_this.config);

            case 2:
              auth0Client = _context.sent;
              console.log('auth0Client : ' + JSON.stringify(auth0Client));

              _this.setState({
                auth0Client: auth0Client
              }); // check to see if they have been redirected after login


              if (!window.location.search.includes('code=')) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", _this.handleRedirectCallback());

            case 7:
              _context.next = 9;
              return auth0Client.isAuthenticated();

            case 9:
              isAuthenticated = _context.sent;

              if (!isAuthenticated) {
                _context.next = 16;
                break;
              }

              _context.next = 13;
              return auth0Client.getUser();

            case 13:
              _context.t0 = _context.sent;
              _context.next = 17;
              break;

            case 16:
              _context.t0 = null;

            case 17:
              user = _context.t0;
              console.log('user : ' + JSON.stringify(user));

              _this.setState({
                isLoading: false,
                isAuthenticated: isAuthenticated,
                user: user
              });

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleRedirectCallback", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                isLoading: true
              });

              _context2.next = 3;
              return _this.state.auth0Client.handleRedirectCallback();

            case 3:
              _context2.next = 5;
              return _this.state.auth0Client.getUser();

            case 5:
              user = _context2.sent;

              _this.setState({
                user: user,
                isAuthenticated: true,
                isLoading: false
              });

              window.history.replaceState({}, document.title, window.location.pathname);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.state = {
      auth0Client: null,
      isLoading: true,
      isAuthenticated: false,
      user: []
    };
    _this.config = {
      domain: process.env.REACT_APP_AUTH0_DOMAIN || 'dev-14avhjuy.auth0.com',
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID || 'ZJ14f961zjftMYbOBnZPnEGJd3ZHyQJC',
      redirect_uri: 'http://localhost:3000/'
    };
    _this.login = _this.login.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.logout = _this.logout.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Auth0Connection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeAuth0();
    } // initialize the auth0 library

  }, {
    key: "login",
    value: function login(e) {
      var _this2 = this;

      var auth0Client = this.state.auth0Client; //this.setState({data: e.target.value});

      auth0Client.loginWithRedirect({
        redirect_uri: 'http://localhost:3000/'
      }).then(function (token) {
        auth0Client.getUser().then(function (user) {
          _this2.setState({
            user: user
          });

          console.log('---here--' + user);
        });
      });
    }
  }, {
    key: "logout",
    value: function logout(e) {
      var auth0Client = this.state.auth0Client;
      auth0Client.logout();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(DesktopContainer, {
        auth0: this.state,
        login: this.login,
        logout: this.logout
      }));
    }
  }]);

  return Auth0Connection;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var DesktopContainer = /*#__PURE__*/function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DesktopContainer, _React$Component2);

  var _super2 = _createSuper(DesktopContainer);

  function DesktopContainer(props) {
    var _this3;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DesktopContainer);

    _this3 = _super2.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3), "state", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3), "hideFixedMenu", function () {
      return _this3.setState({
        fixed: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3), "showFixedMenu", function () {
      return _this3.setState({
        fixed: true
      });
    });

    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DesktopContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      console.log('Desktop');
      var children = this.props.children;
      var fixed = this.state.fixed;
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Responsive"], semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Responsive"].onlyComputer, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Visibility"], {
        once: false,
        onBottomPassed: this.showFixedMenu,
        onBottomPassedReverse: this.hideFixedMenu
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        inverted: true,
        textAlign: "center",
        style: {
          minHeight: 700,
          padding: '1em 0em'
        },
        vertical: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
        fixed: fixed ? 'top' : null,
        inverted: !fixed,
        pointing: !fixed,
        secondary: !fixed,
        size: "large"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a",
        active: true
      }, "Home"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a"
      }, "Explore"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a"
      }, "Plan Trip"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a"
      }, "Sommelier"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        position: "right"
      }, !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        as: "a",
        onClick: this.props.login,
        inverted: !fixed
      }, "Log in"), !this.props.auth0.isLoading && this.props.auth0.user && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", null, this.props.auth0.user.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        as: "a",
        onClick: this.props.logout,
        inverted: !fixed,
        primary: fixed,
        style: {
          marginLeft: '0.5em'
        }
      }, "Logout"))))), !this.props.auth0.isLoading && this.props.auth0.user && __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("h1", null, "You are logged in!"), __jsx("p", null, "Hello ", this.props.auth0.user.name, "--", this.props.auth0.user.email, "--"), this.props.auth0.user.picture && __jsx("img", {
        src: this.props.auth0.user.picture,
        alt: "My Avatar"
      })), !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(HomepageHeading, null))), !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(_HeaderSegment__WEBPACK_IMPORTED_MODULE_15__["default"], null));
    }
  }]);

  return DesktopContainer;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var MobileContainer = /*#__PURE__*/function (_React$Component3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MobileContainer, _React$Component3);

  var _super3 = _createSuper(MobileContainer);

  function MobileContainer() {
    var _this4;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MobileContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this4 = _super3.call.apply(_super3, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this4), "state", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this4), "handlePusherClick", function () {
      var sidebarOpened = _this4.state.sidebarOpened;
      if (sidebarOpened) _this4.setState({
        sidebarOpened: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this4), "handleToggle", function () {
      return _this4.setState({
        sidebarOpened: !_this4.state.sidebarOpened
      });
    });

    return _this4;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileContainer, [{
    key: "render",
    value: function render() {
      console.log('mobile');
      var children = this.props.children;
      var sidebarOpened = this.state.sidebarOpened;
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Responsive"], semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Responsive"].onlyMobile, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Sidebar"].Pushable, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Sidebar"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"],
        animation: "uncover",
        inverted: true,
        vertical: true,
        visible: sidebarOpened
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a",
        active: true
      }, "Home"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a"
      }, "Explore"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a"
      }, "Plan Trip"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a"
      }, "Sommelier"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a"
      }, "Log in"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        as: "a"
      }, "Sign Up")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Sidebar"].Pusher, {
        dimmed: sidebarOpened,
        onClick: this.handlePusherClick,
        style: {
          minHeight: '100vh'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        inverted: true,
        textAlign: "center",
        style: {
          minHeight: 350,
          padding: '1em 0em'
        },
        vertical: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
        inverted: true,
        pointing: true,
        secondary: true,
        size: "large"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        onClick: this.handleToggle
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        name: "sidebar"
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Menu"].Item, {
        position: "right"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        as: "a",
        inverted: true
      }, "Log in"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        as: "a",
        inverted: true,
        style: {
          marginLeft: '0.5em'
        }
      }, "Sign Up")))), __jsx(HomepageHeading, {
        mobile: true
      })), children)));
    }
  }]);

  return MobileContainer;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var ResponsiveContainer = function ResponsiveContainer(_ref4) {
  var children = _ref4.children;
  return __jsx("div", null, __jsx(DesktopContainer, null, children), __jsx(MobileContainer, null, children));
};

_c2 = ResponsiveContainer;

var HeaderLayout = /*#__PURE__*/function (_React$Component4) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HeaderLayout, _React$Component4);

  var _super4 = _createSuper(HeaderLayout);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderLayout, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref5) {
      var store = _ref5.store;
    }
  }]);

  function HeaderLayout(props) {
    var _this5;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HeaderLayout);

    _this5 = _super4.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this5), "login_rt", function () {
      _this5.props.login('loginType');
    });

    return _this5;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderLayout, [{
    key: "render",
    value: function render() {
      return __jsx(ResponsiveContainer, null);
    }
  }]);

  return HeaderLayout;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(function (state) {
  return state;
}, _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_13__["default"])(Auth0Connection));

var _c, _c2;

$RefreshReg$(_c, "HomepageHeading");
$RefreshReg$(_c2, "ResponsiveContainer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})