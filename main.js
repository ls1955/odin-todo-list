/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.todo-nav {\n    display: flex;\n    max-width: 800px;\n    align-items: flex-start;\n}\n\n.todo-nav > p {\n    flex: 1;\n    text-align: left;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dialog-controller.js":
/*!**********************************!*\
  !*** ./src/dialog-controller.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DialogController: () => (/* binding */ DialogController)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nconst DialogController = {\n    new(projects, storageHandler = null) {\n        const ctrller = Object.create(this);\n\n        let dialog = document.querySelector(\".create-todo-dialog\");\n\n        return Object.assign(ctrller, {\n            projects,\n            storageHandler,\n            dialog,\n            form : dialog.querySelector(\"form\"),\n            cancelBtn : dialog.querySelector(\".cancel-button\"),\n            createBtn : dialog.querySelector(\".create-button\"),\n            titleInput : dialog.querySelector(\".title-input\"),\n            descriptionInput : dialog.querySelector(\".description-input\"),\n            dateInput : dialog.querySelector(\".date-input\"),\n            priorityInput : dialog.querySelector(\".priority-input\"),\n            showBtn : document.querySelector(\".show-create-todo-dialog-button\")\n        });\n    },\n    createAndInsertTodo() {\n        let title = this.titleInput.value;\n        let description = this.descriptionInput.value;\n        let dueDate = this.dateInput.value;\n        let priority = this.priorityInput.value;\n        let todo = _todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new(title, description, dueDate, priority);\n\n        let index = document.querySelector(\".current-project-index-holder\").dataset.index;\n\n        this.projects[index].push(todo);\n        this.projects[index].updateMainContent();\n        this.storageHandler.updateStorage();\n    },\n    setDOMsEventListener() {\n        this.showBtn.addEventListener(\"click\", () => {\n            this.dateInput.value = new Date().toISOString().slice(0, 10);\n            this.dialog.show()\n        });\n        this.cancelBtn.addEventListener(\"click\", () => {\n            this.form.reset();\n            this.dialog.close()\n        });\n        this.createBtn.addEventListener(\"click\", (e) => {\n            e.preventDefault();\n            this.createAndInsertTodo();\n            this.form.reset();\n            this.dialog.close();\n        });\n    }\n};\n\n\n//# sourceURL=webpack://odin-todo-list/./src/dialog-controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dialog_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-controller */ \"./src/dialog-controller.js\");\n/* harmony import */ var _local_storage_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-handler */ \"./src/local-storage-handler.js\");\n/* harmony import */ var _sidebar_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-controller */ \"./src/sidebar-controller.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nlet storageHandler = _local_storage_handler__WEBPACK_IMPORTED_MODULE_1__.LocalStorageHandler.new();\nstorageHandler.init();\nlet dialogController = _dialog_controller__WEBPACK_IMPORTED_MODULE_0__.DialogController.new(storageHandler.projects, storageHandler);\ndialogController.setDOMsEventListener();\nlet sidebarController = _sidebar_controller__WEBPACK_IMPORTED_MODULE_2__.SidebarController.new(storageHandler.projects, storageHandler);\nsidebarController.setDOMsEventListener();\nsidebarController.populateSidebar();\n\n// Select and click first project button to update main\n// content and update current project index\ndocument.querySelector(\".project-button\")?.click();\n\n// OPTIONAL?:\n// For every project, it should be nice to show them\n// according to... (priority, name, deadline, or created date)\n\n// FIX?:\n// In index.html, create/edit todo form are identical\n// DRY it up?\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/local-storage-handler.js":
/*!**************************************!*\
  !*** ./src/local-storage-handler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LocalStorageHandler: () => (/* binding */ LocalStorageHandler)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst LocalStorageHandler = {\n    new() {\n        const handler = Object.create(this);\n\n        handler.projects = [];\n\n        return handler;\n    },\n    init() {\n        if (localStorage.getItem(\"odin-todo-list-projects\") != null) {\n            this.buildFromLocalStorage();\n        } else {\n            this.buildDefaultProject();\n        }\n    },\n    buildDefaultProject() {\n        let today = new Date().toISOString().substring(0, 10);\n\n        let defaultTodoOne = _todo__WEBPACK_IMPORTED_MODULE_1__.Todo.new(\"Sleep\", \"Go to bed early tonight.\", today, 3);\n        let defaultTodoTwo = _todo__WEBPACK_IMPORTED_MODULE_1__.Todo.new(\"Live healthy\", \"Be kind to myself.\", today, 3);\n        let defaultProject = _project__WEBPACK_IMPORTED_MODULE_0__.Project.new(\"Life\", [defaultTodoOne, defaultTodoTwo]);\n        \n        this.projects.push(defaultProject);\n\n        this.updateStorage();\n    },\n    buildFromLocalStorage() {\n        JSON.parse(localStorage.getItem(\"odin-todo-list-projects\")).forEach(projectData => {\n            let project = _project__WEBPACK_IMPORTED_MODULE_0__.Project.new(projectData[\"name\"], this);\n\n            projectData[\"todos\"].forEach(todoData => {\n                let todo = _todo__WEBPACK_IMPORTED_MODULE_1__.Todo.new(\n                    todoData[\"title\"],\n                    todoData[\"description\"],\n                    todoData[\"dueDate\"],\n                    todoData[\"priority\"]\n                )\n                project.push(todo);\n            });\n            this.projects.push(project);\n        });\n    },\n    updateStorage() {\n        let projectsString = JSON.stringify(this.projects.map(project => project.toJSONFriendlyObject()));\n\n        localStorage.setItem(\"odin-todo-list-projects\", projectsString);\n    }\n};\n\n\n//# sourceURL=webpack://odin-todo-list/./src/local-storage-handler.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nconst Project = {\n    new(name, storageHandler = null, todos = []) {\n        const project = Object.create(this);\n\n        project.name = name;\n        project.todos = [];\n        project.storageHandler = storageHandler;\n        todos.forEach(todo => project.push(todo));\n\n        return project;\n    },\n    push(todo) {\n        // Child will inform parent to kill\n        // itself when it time has come\n        todo.parent = this;\n        this.todos.push(todo);\n    },\n    updateMainContent() {\n        this.todos = this.todos.filter(todo => !todo.isCompleted);\n\n        const main = document.querySelector(\".todo-list-container\");\n        const indexHolder = document.querySelector(\".current-project-index-holder\");\n        \n        main.innerHTML = \"\";\n        // Let others know which project should new todo insert into\n        indexHolder.dataset.index = this.index;\n        \n        if (this.todos.length === 0) {\n            const message = document.createElement(\"p\");\n            message.textContent = \"This project is empty.\"\n            main.appendChild(message);\n        } else {\n            const ul = document.createElement(\"ul\");\n\n            this.todos.forEach(todo => ul.appendChild(todo.toListItem()));\n\n            main.appendChild(ul);\n        }\n\n        this.storageHandler.updateStorage();\n    },\n    toButton() {\n        const button = document.createElement(\"button\");\n\n        button.innerText = this.name;\n\n        button.addEventListener(\"click\", () => {\n            // Button's dataset index will be assign by sidebarController\n            // Useful to know coresspond project index inside projects array\n            this.index = button.dataset.index;\n            this.updateMainContent();\n        });\n\n        return button;\n    },\n    toJSONFriendlyObject() {\n        return {\n            name: this.name,\n            todos: this.todos.map(todo => todo.toJSONFriendlyObject())\n        }\n    }\n};\n\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/sidebar-controller.js":
/*!***********************************!*\
  !*** ./src/sidebar-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SidebarController: () => (/* binding */ SidebarController)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n// A controller that handle all the event related to project sidebar\nconst SidebarController = {\n    new(projects, storageHandler = null) {\n        const ctrller = Object.create(this);\n        const dialog = document.querySelector(\".create-project-dialog\");\n\n        return Object.assign(ctrller, {\n            projects,\n            storageHandler,\n            dialog,\n            projectsContainer : document.querySelector(\".projects-container\"),\n            sidebar : document.querySelector(\".projects-sidebar\"),\n            form : dialog.querySelector(\"form\"),\n            nameInput : dialog.querySelector(\"input\"),\n            errMsgContainer : dialog.querySelector(\".error-message-container\"),\n            cancelBtn : dialog.querySelector(\".cancel-button\"),\n            createBtn : dialog.querySelector(\".create-button\"),\n            showDialogBtn : document.querySelector(\".create-project-button\"),\n            deleteProjectBtn : document.querySelector(\".delete-project-button\")\n        });\n    },\n    createAndInsertProject() {\n        let newProjectName = this.nameInput.value;\n\n        if (newProjectName === \"\") {\n            this.errMsgContainer.textContent = \"empty project name\";\n            return;\n        }\n\n        if (this.projects.some(project => project.name === newProjectName )) {\n            this.errMsgContainer.textContent = \"existed project name\";\n            return;\n        }\n\n        this.errMsgContainer.textContent = \"\";\n\n        this.projects.push(_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(newProjectName, this.storageHandler));\n        this.storageHandler.updateStorage();\n        this.form.reset();\n        this.dialog.close();\n        this.populateSidebar(true);\n    },\n    populateSidebar(hadJustCreateNewProject = false, hadJustDeleteProject = false) {\n        this.projectsContainer.innerHTML = \"\";\n\n        this.projects.forEach((project, index) => {\n            let projectButton = project.toButton();\n\n            projectButton.dataset.index = index;\n            projectButton.classList.add(\"project-button\");\n\n            this.projectsContainer.appendChild(projectButton);\n\n            // It kind of make sense to focus on newly created project\n            // so we could add todo into it, right?\n            if (hadJustCreateNewProject && project === this.projects.at(-1)) {\n                projectButton.click();\n            } else if (hadJustDeleteProject && index === 0) {\n                projectButton.click();\n            }\n        });\n    },\n    setDOMsEventListener() {\n        this.showDialogBtn.addEventListener(\"click\", () => this.dialog.show());\n        this.cancelBtn.addEventListener(\"click\", () => {\n            this.form.reset();\n            this.dialog.close();\n        });\n        this.createBtn.addEventListener(\"click\", (e) => {\n            e.preventDefault();\n            this.createAndInsertProject();\n        });\n        this.deleteProjectBtn.addEventListener(\"click\", () => {\n            let deleteIndex = document.querySelector(\".current-project-index-holder\").dataset.index;\n\n            this.projects.splice(deleteIndex, 1);\n            this.populateSidebar(false, true);\n            this.storageHandler.updateStorage();\n        });\n    }\n};\n\n\n//# sourceURL=webpack://odin-todo-list/./src/sidebar-controller.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nconst Todo = {\n    new(title, description, dueDate, priority) {\n        const todo = Object.create(this);\n\n        return Object.assign(todo, {\n            title,\n            description,\n            dueDate,\n            priority,\n            isCompleted: false,\n            // Will be set by the parent later on.\n            // Useful when sending message to tell parent\n            // to remove itself when this.isCompleted\n            parent: null\n        });\n    },\n    toListItem() {\n        const template = document.querySelector(\"#todo-template\");\n        const result = template.content.cloneNode(true);\n\n        const titleOutput = result.querySelector(\".todo-title\");\n        const descriptionOutput = result.querySelector(\".description\");\n        const dueDateOutput = result.querySelector(\".due-date\");\n        const priorityOutput = result.querySelector(\".priority\");\n\n        titleOutput.textContent = this.title;\n        descriptionOutput.textContent = this.description;\n        dueDateOutput.textContent = this.dueDate;\n        priorityOutput.textContent = this.priority;\n\n        const editBtn = result.querySelector(\".edit-button\");\n        const editContainer = result.querySelector(\".edit-container\");\n        \n        const titleEditInput = editContainer.querySelector(\".title-edit-input\");\n        const descriptionEditInput = editContainer.querySelector(\".description-edit-input\");\n        const dueDateEditInput = editContainer.querySelector(\".due-date-edit-input\");\n        const priorityEditInput = editContainer.querySelector(\".priority-edit-input\");\n\n        editBtn.addEventListener(\"click\", () => {\n            titleEditInput.value = this.title;\n            descriptionEditInput.value = this.description;\n            dueDateEditInput.value = this.dueDate;\n            priorityEditInput.value = this.priority;\n            editContainer.style.display = editContainer.style.display === \"block\" ?\n                                          \"none\" :\n                                          \"block\";\n        });\n\n        const confirmEditBtn = editContainer.querySelector(\".confirm-edit-button\");\n\n        confirmEditBtn.addEventListener(\"click\", (e) => {\n            e.preventDefault();\n        \n            this.title = titleEditInput.value;\n            titleOutput.textContent = this.title;\n            this.description = descriptionEditInput.value;\n            descriptionOutput.textContent = this.description;\n            this.dueDate = dueDateEditInput.value;\n            dueDateOutput.textContent = this.dueDate;\n            this.priority = priorityEditInput.value\n            priorityOutput.value = this.priority;\n\n            editContainer.style.display = \"none\";\n        });\n\n        const checkbox = result.querySelector(\".check-todo-button\");\n        checkbox.addEventListener(\"click\", () => {\n            this.isCompleted = true;\n            this.parent.updateMainContent();\n        });\n\n        return result;\n    },\n    toJSONFriendlyObject() {\n        return {\n            title: this.title,\n            description: this.description,\n            dueDate: this.dueDate,\n            priority: this.priority\n        }\n    }\n};\n\n\n//# sourceURL=webpack://odin-todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;