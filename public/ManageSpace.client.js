"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["ManageSpace"],{

/***/ "./src/containers/Counter/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Counter/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Home = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(_class = /*#__PURE__*/function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));\n    console.log('Home 组件即将挂载');\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, this.props.store.counter.number), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n        onClick: function onClick() {\n          return _this2.props.store.counter.increment(1);\n        }\n      }, \"+\"));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class) || _class); // Home = connect(\n//     state => state.counter,\n//     actions\n// )(Home);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://easy-ssr-demo/./src/containers/Counter/index.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Home = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(_class = /*#__PURE__*/function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));\n    console.log('Home 组件即将挂载');\n    var home = props.store.home;\n\n    if (!home.list || !home.list.length) {\n      home.getHomeList();\n    }\n\n    return _this;\n  } // componentDidMount 在服务器端是不执行的\n\n\n  _createClass(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log('componentDidMount, 你看我在服务端执不执行');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var home = this.props.store.home;\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"React-SSR\"), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n        name: \"description\",\n        content: \"\\u9996\\u9875\\u63CF\\u8FF0\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n        className: \"list-group\"\n      }, home.list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n          key: item.id,\n          className: \"list-group-item\"\n        }, item.name);\n      })))));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class) || _class); // Home = connect(\n//     state => state.home,\n//     actions\n// )(Home);\n// 此方法是用来异步加载数据的方法，用这个方法可以加载数据并且放到仓库中去\n// Home.loadData = function (store) {\n//     return store.dispatch(actions.getHomeList());\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://easy-ssr-demo/./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Login = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(_class = /*#__PURE__*/function (_Component) {\n  _inherits(Login, _Component);\n\n  function Login(props) {\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));\n\n    _this.handleSubmit = function (event) {\n      event.preventDefault();\n\n      _this.props.store.session.login({\n        username: _this.state.username\n      });\n    };\n\n    _this.state = {\n      username: ''\n    };\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"form-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n        htmlFor: \"username\"\n      }, \"\\u7528\\u6237\\u540D\"), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control\",\n        value: this.state.username,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            username: event.target.value\n          });\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"form-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        type: \"submit\",\n        className: \"btn btn-primary\"\n      })))));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class) || _class); // Login = connect(\n//     state => state.session,\n//     actions\n// )(Login);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://easy-ssr-demo/./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/Logout/index.js":
/*!****************************************!*\
  !*** ./src/containers/Logout/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Logout = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(_class = /*#__PURE__*/function (_Component) {\n  _inherits(Logout, _Component);\n\n  function Logout(props) {\n    _classCallCheck(this, Logout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Logout).call(this, props));\n  }\n\n  _createClass(Logout, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-6\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n        onClick: function onClick() {\n          return _this.props.store.session.logout();\n        },\n        type: \"submit\",\n        className: \"btn btn-primary\"\n      }, \"\\u9000\\u51FA\")));\n    }\n  }]);\n\n  return Logout;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class) || _class);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);\n\n//# sourceURL=webpack://easy-ssr-demo/./src/containers/Logout/index.js?");

/***/ }),

/***/ "./src/containers/Notfound/index.js":
/*!******************************************!*\
  !*** ./src/containers/Notfound/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar NotFound = /*#__PURE__*/function (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.staticContext) {\n        // 给静态路由的上下文添加一个 notFound = true 的键值对\n        this.props.staticContext.notFound = true;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-6\"\n      }, \"\\u4F60\\u7684\\u9875\\u9762\\u98DE\\u4E86\"));\n    }\n  }]);\n\n  return NotFound;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://easy-ssr-demo/./src/containers/Notfound/index.js?");

/***/ }),

/***/ "./src/containers/Profile/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Profile/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/Redirect.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Login = (_dec = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.inject)('store'), _dec(_class = (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.observer)(_class = /*#__PURE__*/function (_Component) {\n  _inherits(Login, _Component);\n\n  function Login() {\n    _classCallCheck(this, Login);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      return this.props.store.session.user ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-6\"\n      }, \"\\u4E2A\\u4EBA\\u4E2D\\u5FC3\")) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        to: \"/login\"\n      });\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class) || _class); // Login = connect(\n//     state => state.session\n// )(Login);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://easy-ssr-demo/./src/containers/Profile/index.js?");

/***/ })

}]);