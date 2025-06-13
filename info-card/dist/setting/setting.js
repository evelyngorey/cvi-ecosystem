System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/info-card/src/setting/translations/default.ts":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/info-card/src/setting/translations/default.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    instruction: "Configure your widget using the dialog below.",
    ds: "Select a data source you would like to listen for clicks on.",
    br: "Select a buffer radius for your click event.",
    bu: "Select a unit for your buffer radius.",
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/info-card/src/setting/setting.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/info-card/src/setting/translations/default.ts");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");




function Setting(props) {
    const dsTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
    function onDSSelected(useDataSources) {
        props.onSettingChange({
            id: props.id,
            useDataSources: useDataSources,
        });
    }
    function onMapSelected(useMapWidgetIds) {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds,
        });
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "instruction", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].instruction }) }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: onMapSelected, useMapWidgetIds: props.useMapWidgetIds })),
            props.useMapWidgetIds && props.useMapWidgetIds.length !== 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "ds", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].ds }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { mustUseDataSource: true, hideAddDataButton: true, types: dsTypes, onChange: onDSSelected, useDataSources: props.useDataSources }))),
            props.useDataSources && props.useDataSources.length !== 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "br", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].br }))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmZvLWNhcmQvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFdBQVcsRUFBRSwrQ0FBK0M7SUFDNUQsRUFBRSxFQUFFLDhEQUE4RDtJQUNsRSxFQUFFLEVBQUUsOENBQThDO0lBQ2xELEVBQUUsRUFBRSx1Q0FBdUM7Q0FDNUMsRUFBQzs7Ozs7Ozs7Ozs7O0FDTEY7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFaEM7QUFNMEI7QUFFUTtBQUNzQjtBQUc1RCxTQUFTLE9BQU8sQ0FBQyxLQUFzQztJQUNwRSxNQUFNLE9BQU8sR0FBRyxvREFBUyxDQUFDLENBQUMsc0RBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRTFELFNBQVMsWUFBWSxDQUFDLGNBQStCO1FBQ25ELEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osY0FBYyxFQUFFLGNBQWM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLGVBQXlCO1FBQzlDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osZUFBZSxFQUFFLGVBQWU7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FDTDtRQUNFLDJEQUFDLCtFQUFjO1lBQ2IsMkRBQUMsMkVBQVUsSUFDVCxLQUFLLEVBQ0gsMkRBQUMsdURBQWdCLElBQ2YsRUFBRSxFQUFDLGFBQWEsRUFDaEIsY0FBYyxFQUFFLDZEQUFlLENBQUMsV0FBVyxHQUN6QixHQUVWO1lBRWQsMkRBQUMsK0VBQWM7Z0JBQ2IsMkRBQUMsa0ZBQWlCLElBQ2hCLFFBQVEsRUFBRSxhQUFhLEVBQ3ZCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxHQUN0QyxDQUNhO1lBRWhCLEtBQUssQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQzlELDJEQUFDLCtFQUFjO2dCQUNiLDJEQUFDLHVEQUFnQixJQUNmLEVBQUUsRUFBQyxJQUFJLEVBQ1AsY0FBYyxFQUFFLDZEQUFlLENBQUMsRUFBRSxHQUNoQjtnQkFDcEIsMkRBQUMscUZBQWtCLElBQ2pCLGlCQUFpQixRQUNqQixpQkFBaUIsUUFDakIsS0FBSyxFQUFFLE9BQU8sRUFDZCxRQUFRLEVBQUUsWUFBWSxFQUN0QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsR0FDaEIsQ0FDUCxDQUNsQjtZQUNBLEtBQUssQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQzVELDJEQUFDLCtFQUFjO2dCQUNiLDJEQUFDLHVEQUFnQixJQUNmLEVBQUUsRUFBQyxJQUFJLEVBQ1AsY0FBYyxFQUFFLDZEQUFlLENBQUMsRUFBRSxHQUNoQixDQUNMLENBQ2xCLENBQ2MsQ0FDYixDQUNQLENBQUM7QUFDSixDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW5mby1jYXJkL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW5mby1jYXJkL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBpbnN0cnVjdGlvbjogXCJDb25maWd1cmUgeW91ciB3aWRnZXQgdXNpbmcgdGhlIGRpYWxvZyBiZWxvdy5cIixcclxuICBkczogXCJTZWxlY3QgYSBkYXRhIHNvdXJjZSB5b3Ugd291bGQgbGlrZSB0byBsaXN0ZW4gZm9yIGNsaWNrcyBvbi5cIixcclxuICBicjogXCJTZWxlY3QgYSBidWZmZXIgcmFkaXVzIGZvciB5b3VyIGNsaWNrIGV2ZW50LlwiLFxyXG4gIGJ1OiBcIlNlbGVjdCBhIHVuaXQgZm9yIHlvdXIgYnVmZmVyIHJhZGl1cy5cIixcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICBGb3JtYXR0ZWRNZXNzYWdlLFxyXG4gIGNzcyxcclxuICBqc3gsXHJcbiAgSW1tdXRhYmxlLFxyXG4gIERhdGFTb3VyY2VUeXBlcyxcclxuICBVc2VEYXRhU291cmNlLFxyXG59IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xyXG5pbXBvcnQge1xyXG4gIE1hcFdpZGdldFNlbGVjdG9yLFxyXG4gIFNldHRpbmdSb3csXHJcbiAgU2V0dGluZ1NlY3Rpb24sXHJcbn0gZnJvbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCI7XHJcbmltcG9ydCB7IE51bWVyaWNJbnB1dCwgU2VsZWN0LCBPcHRpb24gfSBmcm9tIFwiamltdS11aVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZyhwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikge1xyXG4gIGNvbnN0IGRzVHlwZXMgPSBJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKTtcclxuXHJcbiAgZnVuY3Rpb24gb25EU1NlbGVjdGVkKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pIHtcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbk1hcFNlbGVjdGVkKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pIHtcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcclxuICAgICAgICAgICAgICBpZD1cImluc3RydWN0aW9uXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdE1lc3NhZ2VzLmluc3RydWN0aW9ufVxyXG4gICAgICAgICAgICA+PC9Gb3JtYXR0ZWRNZXNzYWdlPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID48L1NldHRpbmdSb3c+XHJcblxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxyXG4gICAgICAgICAgICBvblNlbGVjdD17b25NYXBTZWxlY3RlZH1cclxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXtwcm9wcy51c2VNYXBXaWRnZXRJZHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXHJcbiAgICAgICAgICAgICAgaWQ9XCJkc1wiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy5kc31cclxuICAgICAgICAgICAgPjwvRm9ybWF0dGVkTWVzc2FnZT5cclxuICAgICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxyXG4gICAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICAgICAgaGlkZUFkZERhdGFCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlcz17ZHNUeXBlc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25EU1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtwcm9wcy51c2VEYXRhU291cmNlc31cclxuICAgICAgICAgICAgPjwvRGF0YVNvdXJjZVNlbGVjdG9yPlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9wcy51c2VEYXRhU291cmNlcyAmJiBwcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggIT09IDAgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgIGlkPVwiYnJcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0TWVzc2FnZXMuYnJ9XHJcbiAgICAgICAgICAgID48L0Zvcm1hdHRlZE1lc3NhZ2U+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=