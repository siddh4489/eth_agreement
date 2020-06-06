webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HeaderSegment.js":
/*!*************************************!*\
  !*** ./components/HeaderSegment.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var HeaderSegment = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HeaderSegment, _React$Component);

  var _super = _createSuper(HeaderSegment);

  function HeaderSegment() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeaderSegment);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderSegment, [{
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
        style: {
          padding: '8em 0em'
        },
        vertical: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        container: true,
        stackable: true,
        verticalAlign: "middle"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        width: 8
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, __jsx("h1", null, this.props.auth.authDetail), "With over XXX vineyards let us guide you"), __jsx("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "We Make Bananas That Can Dance"), __jsx("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        floated: "right",
        width: 6
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
        bordered: true,
        rounded: true,
        size: "large",
        src: "/assets/images/wireframe/white-image.png"
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        size: "huge",
        onClick: this.login_rt
      }, "Check Them Out"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
        style: {
          padding: '0em'
        },
        vertical: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        celled: "internally",
        columns: "equal",
        stackable: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
        textAlign: "center"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        style: {
          paddingBottom: '5em',
          paddingTop: '5em'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "\"What a Company\""), __jsx("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "That is what they all say about us")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        style: {
          paddingBottom: '5em',
          paddingTop: '5em'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "\"I shouldn't have gone with their competitor.\""), __jsx("p", {
        style: {
          fontSize: '1.33em'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
        avatar: true,
        src: "/assets/images/avatar/large/nan.jpg"
      }), __jsx("b", null, "Nan"), " Chief Fun Officer Acme Toys"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
        style: {
          padding: '8em 0em'
        },
        vertical: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        text: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "Breaking The Grid, Grabs Your Attention"), __jsx("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        as: "a",
        size: "large"
      }, "Read More"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
        as: "h4",
        className: "header",
        horizontal: true,
        style: {
          margin: '3em 0em',
          textTransform: 'uppercase'
        }
      }, __jsx("a", {
        href: "#"
      }, "Case Studies")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h3",
        style: {
          fontSize: '2em'
        }
      }, "Did We Tell You About Our Bananas?"), __jsx("p", {
        style: {
          fontSize: '1.33em'
        }
      }, "Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        as: "a",
        size: "large"
      }, "I'm Still Quite Interested"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Segment"], {
        inverted: true,
        vertical: true,
        style: {
          padding: '5em 0em'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        divided: true,
        inverted: true,
        stackable: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        width: 3
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        inverted: true,
        as: "h4",
        content: "About"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"], {
        link: true,
        inverted: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
        as: "a"
      }, "Sitemap"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
        as: "a"
      }, "Contact Us"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
        as: "a"
      }, "Religious Ceremonies"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
        as: "a"
      }, "Gazebo Plans"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        width: 3
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        inverted: true,
        as: "h4",
        content: "Services"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"], {
        link: true,
        inverted: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
        as: "a"
      }, "Banana Pre-Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
        as: "a"
      }, "DNA FAQ"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
        as: "a"
      }, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
        as: "a"
      }, "Favorite X-Men"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
        width: 7
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h4",
        inverted: true
      }, "Footer Header"), __jsx("p", null, "Extra space for a call to action inside the footer that could help re-engage users.")))))));
    }
  }]);

  return HeaderSegment;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HeaderSegment);

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