module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "@auth0/auth0-spa-js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HeaderSegment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderSegment */ "./components/HeaderSegment.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const HomepageHeading = ({
  mobile
}) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  text: true
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  as: "h1",
  content: "Wine Tripping",
  inverted: true,
  style: {
    fontSize: mobile ? '2em' : '4em',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: mobile ? '1.5em' : '3em'
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  as: "h2",
  content: "Find your favorite region with us...",
  inverted: true,
  style: {
    fontSize: mobile ? '1.5em' : '1.7em',
    fontWeight: 'normal',
    marginTop: mobile ? '0.5em' : '1.5em'
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  primary: true,
  size: "huge"
}, "Plan a trip", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  name: "right arrow"
})));

class Auth0Connection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "initializeAuth0", async () => {
      const auth0Client = await _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5___default()(this.config);
      console.log('auth0Client : ' + JSON.stringify(auth0Client));
      this.setState({
        auth0Client
      }); // check to see if they have been redirected after login

      if (window.location.search.includes('code=')) {
        return this.handleRedirectCallback();
      }

      const isAuthenticated = await auth0Client.isAuthenticated();
      const user = isAuthenticated ? await auth0Client.getUser() : null;
      console.log('user : ' + JSON.stringify(user));
      this.setState({
        isLoading: false,
        isAuthenticated,
        user
      });
    });

    _defineProperty(this, "handleRedirectCallback", async () => {
      this.setState({
        isLoading: true
      });
      await this.state.auth0Client.handleRedirectCallback();
      const user = await this.state.auth0Client.getUser();
      this.setState({
        user,
        isAuthenticated: true,
        isLoading: false
      });
      window.history.replaceState({}, document.title, window.location.pathname);
    });

    this.state = {
      auth0Client: null,
      isLoading: true,
      isAuthenticated: false,
      user: []
    };
    this.config = {
      domain: process.env.REACT_APP_AUTH0_DOMAIN || 'dev-14avhjuy.auth0.com',
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID || 'ZJ14f961zjftMYbOBnZPnEGJd3ZHyQJC',
      redirect_uri: process.env.CALLBACK_URL || 'http://localhost:3000/'
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.initializeAuth0();
  } // initialize the auth0 library


  login(e) {
    const {
      auth0Client
    } = this.state; //this.setState({data: e.target.value});

    auth0Client.loginWithRedirect({
      redirect_uri: 'http://localhost:3000/'
    }).then(token => {
      auth0Client.getUser().then(user => {
        this.setState({
          user
        });
        console.log('---here--' + user);
      });
    });
  }

  logout(e) {
    const {
      auth0Client
    } = this.state;
    auth0Client.logout();
  }

  render() {
    return __jsx("div", null, __jsx(DesktopContainer, {
      auth0: this.state,
      login: this.login,
      logout: this.logout
    }), __jsx(MobileContainer, {
      auth0: this.state,
      login: this.login,
      logout: this.logout
    }));
  }

}

class DesktopContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {});

    _defineProperty(this, "hideFixedMenu", () => this.setState({
      fixed: false
    }));

    _defineProperty(this, "showFixedMenu", () => this.setState({
      fixed: true
    }));
  }

  render() {
    console.log('Desktop');
    const {
      children
    } = this.props;
    const {
      fixed
    } = this.state;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyComputer, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Visibility"], {
      once: false,
      onBottomPassed: this.showFixedMenu,
      onBottomPassedReverse: this.hideFixedMenu
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 700,
        padding: '1em 0em'
      },
      vertical: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      fixed: fixed ? 'top' : null,
      inverted: !fixed,
      pointing: !fixed,
      secondary: !fixed,
      size: "large"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a",
      active: true
    }, "Home"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a"
    }, "Explore"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a"
    }, "Plan Trip"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a"
    }, "Sommelier"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      position: "right"
    }, !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      as: "a",
      onClick: this.props.login,
      inverted: !fixed
    }, "Log in"), !this.props.auth0.isLoading && this.props.auth0.user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", null, this.props.auth0.user.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      as: "a",
      onClick: this.props.logout,
      inverted: !fixed,
      primary: fixed,
      style: {
        marginLeft: '0.5em'
      }
    }, "Logout"))))), !this.props.auth0.isLoading && this.props.auth0.user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", null, "You are logged in!"), __jsx("p", null, "Hello ", this.props.auth0.user.name, "--", this.props.auth0.user.email, "--"), this.props.auth0.user.picture && __jsx("img", {
      src: this.props.auth0.user.picture,
      alt: "My Avatar"
    })), !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(HomepageHeading, null))), !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(_HeaderSegment__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  }

}

class MobileContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handlePusherClick", () => {
      const {
        sidebarOpened
      } = this.state;
      if (sidebarOpened) this.setState({
        sidebarOpened: false
      });
    });

    _defineProperty(this, "handleToggle", () => this.setState({
      sidebarOpened: !this.state.sidebarOpened
    }));
  }

  render() {
    console.log('mobile');
    const {
      children
    } = this.props;
    const {
      sidebarOpened
    } = this.state;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"].onlyMobile, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"].Pushable, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"], {
      as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"],
      animation: "uncover",
      inverted: true,
      vertical: true,
      visible: sidebarOpened
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a",
      active: true
    }, "Home"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a"
    }, "Explore"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a"
    }, "Plan Trip"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a"
    }, "Sommelier"), !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a",
      onClick: this.props.login
    }, "Log in"), !this.props.auth0.isLoading && this.props.auth0.user && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      as: "a",
      onClick: this.props.logout
    }, "Logout")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Sidebar"].Pusher, {
      dimmed: sidebarOpened,
      onClick: this.handlePusherClick,
      style: {
        minHeight: '100vh'
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 350,
        padding: '1em 0em'
      },
      vertical: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      inverted: true,
      pointing: true,
      secondary: true,
      size: "large"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      onClick: this.handleToggle
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "sidebar"
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      position: "right"
    }, !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      as: "a",
      onClick: this.props.login,
      inverted: true
    }, "Log in"), !this.props.auth0.isLoading && this.props.auth0.user && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      as: "a",
      onClick: this.props.logout,
      inverted: true,
      style: {
        marginLeft: '0.5em'
      }
    }, "Logout")))), !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(HomepageHeading, {
      mobile: true
    })), !this.props.auth0.isLoading && !this.props.auth0.user && __jsx(_HeaderSegment__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state, _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["default"])(Auth0Connection));

/***/ }),

/***/ "./components/HeaderSegment.js":
/*!*************************************!*\
  !*** ./components/HeaderSegment.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/authActions */ "./redux/actions/authActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class HeaderSegment extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);

    _defineProperty(this, "login_rt", () => {
      this.props.login('loginType');
    });
  }

  render() {
    return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      style: {
        padding: '8em 0em'
      },
      vertical: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      stackable: true,
      verticalAlign: "middle"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 8
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      }
    }, __jsx("h1", null, this.props.auth.authDetail), "With over XXX vineyards let us guide you"), __jsx("p", {
      style: {
        fontSize: '1.33em'
      }
    }, "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      }
    }, "We Make Bananas That Can Dance"), __jsx("p", {
      style: {
        fontSize: '1.33em'
      }
    }, "Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      floated: "right",
      width: 6
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      bordered: true,
      rounded: true,
      size: "large",
      src: "/assets/images/wireframe/white-image.png"
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      textAlign: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      size: "huge",
      onClick: this.login_rt
    }, "Check Them Out"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      style: {
        padding: '0em'
      },
      vertical: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      celled: "internally",
      columns: "equal",
      stackable: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      textAlign: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      style: {
        paddingBottom: '5em',
        paddingTop: '5em'
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      }
    }, "\"What a Company\""), __jsx("p", {
      style: {
        fontSize: '1.33em'
      }
    }, "That is what they all say about us")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      style: {
        paddingBottom: '5em',
        paddingTop: '5em'
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      }
    }, "\"I shouldn't have gone with their competitor.\""), __jsx("p", {
      style: {
        fontSize: '1.33em'
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      avatar: true,
      src: "/assets/images/avatar/large/nan.jpg"
    }), __jsx("b", null, "Nan"), " Chief Fun Officer Acme Toys"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      style: {
        padding: '8em 0em'
      },
      vertical: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      text: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      }
    }, "Breaking The Grid, Grabs Your Attention"), __jsx("p", {
      style: {
        fontSize: '1.33em'
      }
    }, "Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      as: "a",
      size: "large"
    }, "Read More"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      as: "h4",
      className: "header",
      horizontal: true,
      style: {
        margin: '3em 0em',
        textTransform: 'uppercase'
      }
    }, __jsx("a", {
      href: "#"
    }, "Case Studies")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h3",
      style: {
        fontSize: '2em'
      }
    }, "Did We Tell You About Our Bananas?"), __jsx("p", {
      style: {
        fontSize: '1.33em'
      }
    }, "Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      as: "a",
      size: "large"
    }, "I'm Still Quite Interested"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      inverted: true,
      vertical: true,
      style: {
        padding: '5em 0em'
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      divided: true,
      inverted: true,
      stackable: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 3
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      inverted: true,
      as: "h4",
      content: "About"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      link: true,
      inverted: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      as: "a"
    }, "Sitemap"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      as: "a"
    }, "Contact Us"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      as: "a"
    }, "Religious Ceremonies"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      as: "a"
    }, "Gazebo Plans"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 3
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      inverted: true,
      as: "h4",
      content: "Services"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
      link: true,
      inverted: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      as: "a"
    }, "Banana Pre-Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      as: "a"
    }, "DNA FAQ"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      as: "a"
    }, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      as: "a"
    }, "Favorite X-Men"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 7
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h4",
      inverted: true
    }, "Footer Header"), __jsx("p", null, "Extra space for a call to action inside the footer that could help re-engage users.")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state, _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["default"])(HeaderSegment));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children);
});

/***/ }),

/***/ "./pages/Home/Home.js":
/*!****************************!*\
  !*** ./pages/Home/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/counterActions */ "./redux/actions/counterActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //test
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);

    _defineProperty(this, "incrementCounter_rt", () => {
      this.props.incrementCounter({
        value: this.props.counter.mathVal
      }, 'incrementCounterType');
    });

    _defineProperty(this, "decrementCounter_rt", () => {
      this.props.decrementCounter({
        value: this.props.counter.mathVal
      }, 'decrementCounterType');
    });

    _defineProperty(this, "reset_rt", () => {
      this.props.reset({
        value: this.props.counter.mathVal
      }, 'resetType');
    });

    _defineProperty(this, "callMyName_rt", () => {
      this.props.myName('nameType');
    });
  }

  render() {
    /*function incrementCounter_rt() {
      this.props.incrementCounter(
        {value: this.props.counter.mathVal},
        'incrementCounter'
      );
    }*/
    return __jsx("div", null, __jsx("button", {
      onClick: this.incrementCounter_rt
    }, "Increment"), __jsx("button", {
      onClick: this.decrementCounter_rt
    }, "Decrement"), __jsx("button", {
      onClick: this.reset_rt
    }, "Reset"), __jsx("button", {
      onClick: this.callMyName_rt
    }, "My Name"), __jsx("h1", null, this.props.counter.mathVal), __jsx("h1", null, this.props.counter.name));
  }

}

const mapStateToProps = state => ({//counter: state.counter.mathVal
});

const mapDispatchToProps = {//incrementCounter_rt: incrementCounter,
  //decrementCounter_rt: decrementCounter,
  // reset_rt: reset,
}; //export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state, _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)); //export default Home;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home/Home */ "./pages/Home/Home.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(App));

/***/ }),

/***/ "./redux/actionType.js":
/*!*****************************!*\
  !*** ./redux/actionType.js ***!
  \*****************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, RESET, MYNAME, LOGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MYNAME", function() { return MYNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
//Action Types
const INCREMENT_COUNTER = "incrementCounterType";
const DECREMENT_COUNTER = "decrementCounterType";
const RESET = "resetType";
const MYNAME = "nameType";
const LOGIN = "loginType";

/***/ }),

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionType */ "./redux/actionType.js");

 //import { useAuth0 } from '../../contexts/auth0-context';

const login = type => {
  return dispatch => {
    dispatch({
      type: _actionType__WEBPACK_IMPORTED_MODULE_1__["LOGIN"],
      payload: 'Login Details'
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  login
});

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionType */ "./redux/actionType.js");


const incrementCounter = ({
  value
}, type) => {
  return dispatch => {
    dispatch({
      type: _actionType__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_COUNTER"],
      payload: value + 1
    });
  };
};

const decrementCounter = ({
  value
}, type) => {
  return dispatch => {
    dispatch({
      type: _actionType__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_COUNTER"],
      payload: value - 1
    });
  };
};

const reset = type => {
  return dispatch => {
    dispatch({
      type: _actionType__WEBPACK_IMPORTED_MODULE_0__["RESET"],
      payload: 0,
      payloadName: 'reset raj'
    });
  };
};

const myName = type => {
  return dispatch => {
    dispatch({
      type: _actionType__WEBPACK_IMPORTED_MODULE_0__["MYNAME"],
      payload: 'Siddhraj Atodaria'
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  incrementCounter,
  decrementCounter,
  reset,
  myName
});

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BlockChain\eth_agreement\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@auth0/auth0-spa-js":
/*!**************************************!*\
  !*** external "@auth0/auth0-spa-js" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/auth0-spa-js");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });