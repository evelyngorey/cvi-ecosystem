System.register(["jimu-core","jimu-arcgis","jimu-core/react","esri/Graphic","esri/layers/FeatureLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/info-card/src/runtime/style.css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/info-card/src/runtime/style.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: "Inter", sans-serif;
  background-color: #f9f9f9;
}

.info-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.info-card {
  padding: 20px;
  background: #ffffff;
  color: #363537;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  transition: box-shadow 0.2s ease;
  overflow: visible; /* Ensure content can flow */
  max-height: 100vh;
}

.info-card:hover {
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

.info-card > div {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
}

.program-name {
  color: #ef2d56;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.program-type {
  color: #555;
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.8;
}

.info-card-item {
  margin-bottom: 15px;
}

.contact-info p {
  display: flex;
  gap: 10px; /* space between icon and text */
  margin: 6px 0;
  font-size: 0.85rem;
}

.contact-info svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.eligibility-card {
  background-color: #fffbea;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 16px;
  margin-top: 20px;
  font-family: "Segoe UI", sans-serif;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.eligibility-header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
}

.eligibility-icon {
  margin-top: 3px;
}

.eligibility-icon.yellow {
  color: #d97706;
}

.eligibility-icon.green {
  color: #059669;
}

.eligibility-criteria ul {
  margin-top: 0.25rem;
  padding-left: 1.25rem;
  line-height: 1.4;
  color: #444;
}

.eligibility-criteria li {
  margin-bottom: 0.25rem;
}

.capacity {
  margin-top: 15px;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #999;
  transition: background 0.2s ease;
}

.dot.selected {
  background-color: #ef2d56;
  border-color: #ef2d56;
}

.labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #999;
}

.services-table {
  margin-top: 15px;
  width: 100%;
  font-size: 0.75rem;
}

.services-table table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}

.services-table th {
  background-color: #222;
  color: white;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.services-table th,
.services-table td {
  padding: 10px;
  border: 1px solid #eee;
}

.services-table td svg {
  vertical-align: middle;
}

.collaboration-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.collab-box {
  padding: 1rem;
  color: #ffffff;
  background-color: #363537;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

@media (min-height: 800px) {
  .info-card {
    max-height: 70vh;
    overflow-y: auto;
  }
}
@media print {
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 0;
    padding: 0;
  }
  .info-card {
    width: 100%;
    overflow: visible !important;
    page-break-inside: avoid;
  }
  .contact-info,
  .eligibility-card,
  .collaboration-grid,
  .comments {
    page-break-inside: avoid;
  }
  h1, h2, h3, p {
    color: black !important;
  }
  a {
    color: black !important;
    text-decoration: none;
  }
  /* Force page break after long sections if needed */
  .services-table, .collaboration-grid, .comments {
    page-break-before: auto;
    page-break-after: auto;
  }
  /* Optional: hide print button */
  button[aria-label=Print] {
    display: none !important;
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/info-card/src/runtime/style.css","webpack://./../../../../Program%20Files/ArcGIS/ArcGISExperienceBuilder/client/your-extensions/widgets/info-card/src/runtime/style.css"],"names":[],"mappings":"AAEA;EACE,gCAAA;EACA,yBAAA;ACAF;;ADGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,uBAAA;EACA,aAAA;ACAF;;ADGA;EACE,aAAA;EACA,mBAAA;EACA,cAAA;EACA,0CAAA;EACA,sBAAA;EACA,gCAAA;EACA,iBAAA,EAAA,4BAAA;EACA,iBAAA;ACAF;;ADGA;EACE,0CAAA;ACAF;;ADGA;EACE,mBAAA;EACA,6BAAA;EACA,oBAAA;ACAF;;ADGA;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;ACAF;;ADGA;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;ACAF;;ADGA;EACE,mBAAA;ACAF;;ADGA;EACE,aAAA;EACA,SAAA,EAAA,gCAAA;EACA,aAAA;EACA,kBAAA;ACAF;;ADGA;EACE,WAAA;EACA,YAAA;EACA,cAAA;ACAF;;ADGA;EACE,yBAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,mCAAA;EACA,gBAAA;EACA,yCAAA;ACAF;;ADGA;EACE,aAAA;EACA,uBAAA;EACA,QAAA;EACA,mBAAA;ACAF;;ADGA;EACE,eAAA;ACAF;;ADGA;EACE,cAAA;ACAF;;ADGA;EACE,cAAA;ACAF;;ADGA;EACE,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;ACAF;;ADGA;EACE,sBAAA;ACAF;;ADGA;EACE,gBAAA;ACAF;;ADGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,gCAAA;ACAF;;ADGA;EACE,yBAAA;EACA,qBAAA;ACAF;;ADGA;EACE,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,WAAA;ACAF;;ADGA;EACE,gBAAA;EACA,WAAA;EACA,kBAAA;ACAF;;ADGA;EACE,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;ACAF;;ADGA;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;ACAF;;ADGA;;EAEE,aAAA;EACA,sBAAA;ACAF;;ADGA;EACE,sBAAA;ACAF;;ADGA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;ACAF;;ADGA;EACE,aAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,wCAAA;ACAF;;ADGA;EACE;IACE,gBAAA;IACA,gBAAA;ECAF;AACF;ADGA;EACE;IACE,iCAAA;IACA,yBAAA;IACA,SAAA;IACA,UAAA;ECDF;EDIA;IACE,WAAA;IACA,4BAAA;IACA,wBAAA;ECFF;EDKA;;;;IAIE,wBAAA;ECHF;EDMA;IACE,uBAAA;ECJF;EDOA;IACE,uBAAA;IACA,qBAAA;ECLF;EDQA,mDAAA;EACA;IACE,uBAAA;IACA,sBAAA;ECNF;EDSA,gCAAA;EACA;IACE,wBAAA;ECPF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');\r\n\r\nbody {\r\n  font-family: 'Inter', sans-serif;\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n.info-card-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n  justify-content: center;\r\n  padding: 20px;\r\n}\r\n\r\n.info-card {\r\n  padding: 20px;\r\n  background: #ffffff;\r\n  color: #363537;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\r\n  box-sizing: border-box;\r\n  transition: box-shadow 0.2s ease;\r\n  overflow: visible;       /* Ensure content can flow */\r\n  max-height: 100vh;\r\n}\r\n\r\n.info-card:hover {\r\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.info-card > div {\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid #eee;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n.program-name {\r\n  color: #ef2d56;\r\n  font-size: 1.50rem;\r\n  font-weight: 700;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.program-type {\r\n  color: #555;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  opacity: 0.8;\r\n}\r\n\r\n.info-card-item {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.contact-info p {\r\n  display: flex;\r\n  gap: 10px;               /* space between icon and text */\r\n  margin: 6px 0;\r\n  font-size: 0.85rem;\r\n}\r\n\r\n.contact-info svg {\r\n  width: 20px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.eligibility-card {\r\n  background-color: #fffbea;\r\n  border: 1px solid #fde68a;\r\n  border-radius: 12px;\r\n  padding: 16px;\r\n  margin-top: 20px;\r\n  font-family: 'Segoe UI', sans-serif;\r\n  max-width: 600px;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\r\n}\r\n\r\n.eligibility-header {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 8px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.eligibility-icon {\r\n  margin-top: 3px;\r\n}\r\n\r\n.eligibility-icon.yellow {\r\n  color: #d97706;\r\n}\r\n\r\n.eligibility-icon.green {\r\n  color: #059669;\r\n}\r\n\r\n.eligibility-criteria ul {\r\n  margin-top: 0.25rem;\r\n  padding-left: 1.25rem;\r\n  line-height: 1.4;\r\n  color: #444;\r\n}\r\n\r\n.eligibility-criteria li {\r\n  margin-bottom: 0.25rem;\r\n}\r\n\r\n.capacity {\r\n  margin-top: 15px;\r\n}\r\n\r\n.dot {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  border: 2px solid #999;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n.dot.selected {\r\n  background-color: #ef2d56;\r\n  border-color: #ef2d56;\r\n}\r\n\r\n.labels {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 0.8rem;\r\n  color: #999;\r\n}\r\n\r\n.services-table {\r\n  margin-top: 15px;\r\n  width: 100%;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.services-table table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.services-table th {\r\n  background-color: #222;\r\n  color: white;\r\n  font-size: 0.85rem;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n.services-table th,\r\n.services-table td {\r\n  padding: 10px;\r\n  border: 1px solid #eee;\r\n}\r\n\r\n.services-table td svg {\r\n  vertical-align: middle;\r\n}\r\n\r\n.collaboration-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1rem;\r\n}\r\n\r\n.collab-box {\r\n  padding: 1rem;\r\n  color: #ffffff;\r\n  background-color: #363537;\r\n  border-radius: 8px;\r\n  text-align: center;\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\r\n}\r\n\r\n@media (min-height: 800px) {\r\n  .info-card {\r\n    max-height: 70vh;\r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n@media print {\r\n  body {\r\n    -webkit-print-color-adjust: exact;\r\n    print-color-adjust: exact;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .info-card {\r\n    width: 100%;\r\n    overflow: visible !important;\r\n    page-break-inside: avoid;\r\n  }\r\n\r\n  .contact-info,\r\n  .eligibility-card,\r\n  .collaboration-grid,\r\n  .comments {\r\n    page-break-inside: avoid;\r\n  }\r\n\r\n  h1, h2, h3, p {\r\n    color: black !important;\r\n  }\r\n\r\n  a {\r\n    color: black !important;\r\n    text-decoration: none;\r\n  }\r\n\r\n  /* Force page break after long sections if needed */\r\n  .services-table, .collaboration-grid, .comments {\r\n    page-break-before: auto;\r\n    page-break-after: auto;\r\n  }\r\n\r\n  /* Optional: hide print button */\r\n  button[aria-label=\"Print\"] {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap\");\nbody {\n  font-family: \"Inter\", sans-serif;\n  background-color: #f9f9f9;\n}\n\n.info-card-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  padding: 20px;\n}\n\n.info-card {\n  padding: 20px;\n  background: #ffffff;\n  color: #363537;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n  box-sizing: border-box;\n  transition: box-shadow 0.2s ease;\n  overflow: visible; /* Ensure content can flow */\n  max-height: 100vh;\n}\n\n.info-card:hover {\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);\n}\n\n.info-card > div {\n  margin-bottom: 20px;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 12px;\n}\n\n.program-name {\n  color: #ef2d56;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n\n.program-type {\n  color: #555;\n  font-size: 1rem;\n  font-weight: 400;\n  opacity: 0.8;\n}\n\n.info-card-item {\n  margin-bottom: 15px;\n}\n\n.contact-info p {\n  display: flex;\n  gap: 10px; /* space between icon and text */\n  margin: 6px 0;\n  font-size: 0.85rem;\n}\n\n.contact-info svg {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n\n.eligibility-card {\n  background-color: #fffbea;\n  border: 1px solid #fde68a;\n  border-radius: 12px;\n  padding: 16px;\n  margin-top: 20px;\n  font-family: \"Segoe UI\", sans-serif;\n  max-width: 600px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n\n.eligibility-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.eligibility-icon {\n  margin-top: 3px;\n}\n\n.eligibility-icon.yellow {\n  color: #d97706;\n}\n\n.eligibility-icon.green {\n  color: #059669;\n}\n\n.eligibility-criteria ul {\n  margin-top: 0.25rem;\n  padding-left: 1.25rem;\n  line-height: 1.4;\n  color: #444;\n}\n\n.eligibility-criteria li {\n  margin-bottom: 0.25rem;\n}\n\n.capacity {\n  margin-top: 15px;\n}\n\n.dot {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid #999;\n  transition: background 0.2s ease;\n}\n\n.dot.selected {\n  background-color: #ef2d56;\n  border-color: #ef2d56;\n}\n\n.labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  color: #999;\n}\n\n.services-table {\n  margin-top: 15px;\n  width: 100%;\n  font-size: 0.75rem;\n}\n\n.services-table table {\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.services-table th {\n  background-color: #222;\n  color: white;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n}\n\n.services-table th,\n.services-table td {\n  padding: 10px;\n  border: 1px solid #eee;\n}\n\n.services-table td svg {\n  vertical-align: middle;\n}\n\n.collaboration-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n\n.collab-box {\n  padding: 1rem;\n  color: #ffffff;\n  background-color: #363537;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n@media (min-height: 800px) {\n  .info-card {\n    max-height: 70vh;\n    overflow-y: auto;\n  }\n}\n@media print {\n  body {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n    margin: 0;\n    padding: 0;\n  }\n  .info-card {\n    width: 100%;\n    overflow: visible !important;\n    page-break-inside: avoid;\n  }\n  .contact-info,\n  .eligibility-card,\n  .collaboration-grid,\n  .comments {\n    page-break-inside: avoid;\n  }\n  h1, h2, h3, p {\n    color: black !important;\n  }\n  a {\n    color: black !important;\n    text-decoration: none;\n  }\n  /* Force page break after long sections if needed */\n  .services-table, .collaboration-grid, .comments {\n    page-break-before: auto;\n    page-break-after: auto;\n  }\n  /* Optional: hide print button */\n  button[aria-label=Print] {\n    display: none !important;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/Icon.js":
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "svg",
      {
        ref,
        ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);


//# sourceMappingURL=Icon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(`lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/check.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/check.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-check-big.js":
/*!**********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleCheckBig)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("CircleCheckBig", __iconNode);


//# sourceMappingURL=circle-check-big.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-x.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-x.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleX)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("CircleX", __iconNode);


//# sourceMappingURL=circle-x.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/globe.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/globe.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Globe)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Globe", __iconNode);


//# sourceMappingURL=globe.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/graduation-cap.js":
/*!********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/graduation-cap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ GraduationCap)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("GraduationCap", __iconNode);


//# sourceMappingURL=graduation-cap.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/mail.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/mail.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Mail)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
];
const Mail = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Mail", __iconNode);


//# sourceMappingURL=mail.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/map-pin.js":
/*!*************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/map-pin.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ MapPin)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("MapPin", __iconNode);


//# sourceMappingURL=map-pin.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/phone.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/phone.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Phone)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
];
const Phone = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Phone", __iconNode);


//# sourceMappingURL=phone.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/printer.js":
/*!*************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/printer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Printer)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Printer", __iconNode);


//# sourceMappingURL=printer.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/shield.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/shield.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Shield)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Shield", __iconNode);


//# sourceMappingURL=shield.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js":
/*!********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("TriangleAlert", __iconNode);


//# sourceMappingURL=triangle-alert.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/x.js":
/*!*******************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/x.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("X", __iconNode);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase)
/* harmony export */ });
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./your-extensions/widgets/info-card/src/runtime/style.css":
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/info-card/src/runtime/style.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/info-card/src/runtime/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./your-extensions/widgets/info-card/src/components/createfeatures.tsx":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/info-card/src/components/createfeatures.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateFeatures)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/printer.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/phone.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/globe.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/graduation-cap.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var _servicestable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicestable */ "./your-extensions/widgets/info-card/src/components/servicestable.tsx");




{ /* Program Types */ }
const programTypeLabels = {
    "hvip": "Hospital-Based Violence Intervention Program (HVIP)",
    "cureviolence": "Cure Violence Program",
    "cvi": "Community Violence Interruption/Street Outreach Program",
    "victimservices": "Victim Services Agency",
    "youthorg": "Youth-Focused Community Organization",
    "commborg": "Community-Based Organization",
    "gov": "Government Office",
    "univ": "University",
    "other": "Other"
};
{ /* School Collaboration Types */ }
const collabSchoolDescriptions = {
    y_program: "Has a designated school program",
    y_clearance: "Program staff have school clearances",
    y_informal: "Has an informal relationship with schools",
    n: "Does not collaborate with schools"
};
{ /* Police Collaboration Types */ }
const collabPoliceDescriptions = {
    y_formal: "Has a formal relationship with police (e.g., signed agreement)",
    y_informal: "Has an informal relationship with police (e.g., works with police sometimes)",
    n: "Does not collaborate with police"
};
function CreateFeatures({ features }) {
    const firstFeature = features[0];
    const attrs = (firstFeature === null || firstFeature === void 0 ? void 0 : firstFeature.attributes) || {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const element = document.querySelector(".info-card");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [features]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "info-card" }, features.length > 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem"
            } },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h1", { style: { marginBottom: "0.5rem", color: "#ef2d56" } }, attrs.program_name || "Program name"),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h2", { style: { marginTop: 0, marginBottom: 0, color: "#555", opacity: 0.8, fontSize: "1rem" } }, attrs.program_type
                    ? attrs.program_type
                        .split(",")
                        .map((type) => programTypeLabels[type.trim()] || type)
                        .join(", ")
                    : "Program type")),
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => window.print(), style: {
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.5rem",
                    alignSelf: "flex-start"
                }, "aria-label": "Print" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], { size: 20, color: "#555" }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "contact-info" },
            attrs.address && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], { size: 16 }),
                " ",
                attrs.address),
            attrs.add_addresses && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], { size: 16 }),
                " ",
                attrs.add_addresses),
            attrs.contact_email && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], { size: 16 }),
                " ",
                attrs.contact_email),
            attrs.contact_phone && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], { size: 16 }),
                " ",
                attrs.contact_phone),
            attrs.contact_website && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], { size: 16 }),
                " ",
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("a", { href: attrs.contact_website, target: "_blank", rel: "noreferrer" }, attrs.contact_website)))),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "eligibility-card" },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h3", null, "Eligibility"),
            attrs.eligibility_yn === "yes" ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "eligibility-header mb-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], { size: 20, className: "eligibility-icon yellow" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { className: "mb-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("strong", null, "This program only enrolls clients who meet certain eligibility requirements:"))),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "eligibility-criteria pl-5" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("ul", { className: "list-disc leading-snug" },
                        attrs.eligibility_text && attrs.eligibility_text.split(';').map((item, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("li", { key: `crit-${index}`, className: "mb-1" }, item.trim()))),
                        attrs.geog_eligibility_yn === "yes" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("li", null,
                            "Residents of the following zip codes:",
                            attrs.zip_eligibility && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("ul", { className: "pl-5 mt-1 list-disc" }, attrs.zip_eligibility.split(',').map((zip, i) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("li", { key: `zip-${i}` }, zip.trim()))))))))))) : (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "eligibility-header" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, className: "eligibility-icon green" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("strong", null, "This program does not have defined eligibility requirements \u2014 anyone can enroll.")))),
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h3", null, "Self-referrals"),
            attrs.self_refer === "yes" ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "eligibility-header mt-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, className: "eligibility-icon green" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("strong", null, "This program accepts self-referrals.")))) : attrs.self_refer === "no" ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "eligibility-header mt-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], { size: 20, className: "eligibility-icon red" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("strong", null, "This program does not accept self-referrals.")))) : null,
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h3", null, "Capacity"),
            attrs.capacity === "n_capacity" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], { size: 20, className: "eligibility-icon red" }),
                " ",
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("b", null, "None:"),
                " Cannot take any new clients in the next month")),
            attrs.capacity === "l_capacity" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], { size: 20, className: "eligibility-icon yellow" }),
                " ",
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("b", null, "Limited:"),
                " Can take fewer than 10 new clients in the next month")),
            attrs.capacity === "h_capacity" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, className: "eligibility-icon green" }),
                " ",
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("b", null, "High:"),
                " Can take any eligible referral in the next month"))),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_servicestable__WEBPACK_IMPORTED_MODULE_2__["default"], { services: attrs.services, referral_services: attrs.referral_services, services_other: attrs.services_other, referral_services_other: attrs.referral_services_other, services_bilingual: attrs.services_bilingual, referral_services_bilingual: attrs.referral_services_bilingual }),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h3", null, "Collaborations"),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "collaboration-grid" },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "collab-box" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], { size: 24, className: "mx-auto mb-3 text-blue-600" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "text-xl font-bold mb-1" }, "Schools"),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { className: "text-sm" }, (() => {
                    const val = attrs.collab_schools;
                    // If it's a stringified list, clean and split it
                    if (typeof val === "string" && val.startsWith("[") && val.endsWith("]")) {
                        // Remove brackets and quotes, then split by comma
                        const cleaned = val.replace(/[\[\]'"]/g, "").split(",").map(s => s.trim());
                        return cleaned
                            .map(key => collabSchoolDescriptions[key] || key)
                            .join(", ");
                    }
                    // If it's just a single string
                    return collabSchoolDescriptions[val] || "Not specified";
                })())),
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "collab-box" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], { size: 24, className: "mx-auto mb-3 text-gray-600" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "text-lg font-bold mb-1" }, "Police"),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { className: "text-sm" }, collabPoliceDescriptions[attrs.collab_police] || "Not specified"))),
        attrs.comments && !/^\s*(n\/a|na|null|none)?\s*$/i.test(attrs.comments) && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "comments" },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h3", null, "Other information"),
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null, attrs.comments))))) : (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", null, "No features found."))));
}


/***/ }),

/***/ "./your-extensions/widgets/info-card/src/components/servicestable.tsx":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/info-card/src/components/servicestable.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServicesTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check-big.js");


// Define a dictionary of aliases for display
const serviceAliases = {
    cm: "Case management",
    couns: "Counseling",
    bhs: "Behavioral health services",
    emp: "Employment support",
    yd: "Youth development",
    ca: "Community activism/advocacy",
    fcl: "Financial counseling/literacy",
    fa: "Financial assistance",
    la: "Legal assistance",
    ctadv: "Court advocacy",
    med: "Mediation",
    mbn: "Meeting basic needs (food, clothing, school supplies, etc.)",
    hous: "Housing assistance",
    emhous: "Emergency housing & relocation assistance",
    transp: "Transportation assistance",
    childc: "Childcare assistance",
    ment: "Mentoring",
    vca: "Victim Compensation Assistance",
    edu: "Educational support",
    medc: "Medical care",
    reent: "Reentry services",
    imm: "Immigration support",
    biling: "Multilingual services",
    other: "Other",
};
function ServicesTable({ services, services_other, services_bilingual, referral_services, referral_services_other, referral_services_bilingual, }) {
    // Convert comma-separated strings into arrays
    const serviceList = services ? services.split(",").map(s => s.trim()) : [];
    const referralList = referral_services ? referral_services.split(",").map(s => s.trim()) : [];
    // Ensure "Other" is always last
    const allServices = Object.keys(serviceAliases).sort((a, b) => a === "other" ? 1 : b === "other" ? -1 : 0);
    console.log("Props:", { services, services_other, services_bilingual, referral_services, referral_services_other, referral_services_bilingual });
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: "services-table" },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h4", null, "Services Provided"),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("table", null,
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", null, "Service"),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", null, "Provides in house"),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("th", null, "Refers out"))),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tbody", null, allServices.map((service) => {
                let displayName = serviceAliases[service] || service;
                if (service === "biling") {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", { key: service },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, displayName),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, serviceList.includes("biling") ? (services_bilingual && services_bilingual.trim() !== ""
                            ? services_bilingual
                            : "No details provided") : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "red", size: 16 }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, referralList.includes("biling") ? (referral_services_bilingual && referral_services_bilingual.trim() !== ""
                            ? referral_services_bilingual
                            : "No details provided") : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "red", size: 16 })))));
                }
                if (service === "other") {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", { key: service },
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, displayName),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, serviceList.includes("other") ? (services_other && services_other.trim() !== ""
                            ? services_other
                            : "No details provided") : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "red", size: 16 }))),
                        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, referralList.includes("other") ? (referral_services_other && referral_services_other.trim() !== ""
                            ? referral_services_other
                            : "No details provided") : (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "red", size: 16 })))));
                }
                return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("tr", { key: service },
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, displayName),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, serviceList.includes(service) ? react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], { color: "green", size: 16 }) : react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "red", size: 16 })),
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("td", null, referralList.includes(service) ? react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], { color: "green", size: 16 }) : react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], { color: "red", size: 16 }))));
            })))));
}


/***/ }),

/***/ "@arcgis/core/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_Graphic__;

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/info-card/src/runtime/widget.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/Graphic */ "@arcgis/core/Graphic");
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var _components_createfeatures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/createfeatures */ "./your-extensions/widgets/info-card/src/components/createfeatures.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./your-extensions/widgets/info-card/src/runtime/style.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







function Widget(props) {
    const { useMapWidgetIds, useDataSources } = props;
    const [selectedFeatures, setSelectedFeatures] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    // Type guard to ensure we have a Graphic with layer
    function isEsriGraphic(obj) {
        return obj && typeof obj === 'object' && 'geometry' in obj && 'layer' in obj;
    }
    function onActiveViewChange(jimuMapView) {
        if (!jimuMapView || !(useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length))
            return;
        const selectedLayerId = useDataSources[0].dataSourceId;
        jimuMapView.view.on("click", (event) => __awaiter(this, void 0, void 0, function* () {
            const response = yield jimuMapView.view.hitTest(event);
            const graphics = response.results
                .map(r => r.graphic)
                .filter((g) => g instanceof _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_3__["default"] &&
                g.layer instanceof _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"] &&
                g.layer.id === selectedLayerId);
            if (graphics.length > 0) {
                const updated = yield Promise.all(graphics.map((graphic) => __awaiter(this, void 0, void 0, function* () {
                    if (graphic.attributes) {
                        const layer = graphic.layer;
                        try {
                            const full = yield layer.queryFeatures({
                                objectIds: [graphic.attributes[layer.objectIdField]],
                                returnGeometry: true,
                                outFields: ['*']
                            });
                            return full.features[0] || graphic;
                        }
                        catch (_a) {
                            return graphic;
                        }
                    }
                    return graphic;
                })));
                setSelectedFeatures(updated.filter(Boolean));
            }
        }));
    }
    function handleDataSourceInfoChange(info) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (((_a = info === null || info === void 0 ? void 0 : info.selectedIds) === null || _a === void 0 ? void 0 : _a.length) > 0 && dataSource) {
                const records = dataSource.getSelectedRecords();
                const fullFeatures = yield Promise.all(records.map((record) => __awaiter(this, void 0, void 0, function* () {
                    const feat = record.getFeature();
                    if (isEsriGraphic(feat)) {
                        const layer = feat.layer;
                        if (layer && feat.attributes) {
                            try {
                                const full = yield layer.queryFeatures({
                                    objectIds: [feat.attributes[layer.objectIdField]],
                                    returnGeometry: true,
                                    outFields: ['*']
                                });
                                return full.features[0] || feat;
                            }
                            catch (_a) {
                                return feat;
                            }
                        }
                        return feat;
                    }
                    return null;
                })));
                setSelectedFeatures(fullFeatures.filter(Boolean));
            }
        });
    }
    function onDataSourceCreated(ds) {
        setDataSource(ds);
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-container" },
        (useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds.length) > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: useMapWidgetIds[0], onActiveViewChange: onActiveViewChange })),
        (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDataSources[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated, onDataSourceInfoChange: handleDataSourceInfoChange })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_createfeatures__WEBPACK_IMPORTED_MODULE_5__["default"], { features: selectedFeatures })));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmZvLWNhcmQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsOEdBQThHLElBQUksa0JBQWtCO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrUUFBa1EsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLHNCQUFzQixXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxxQkFBcUIsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFX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QUNwQixDQUFDO0lBRUQsT0FBTyxDQUNMLG9FQUFLLFNBQVMsRUFBQyxrQkFBa0I7UUFDOUIsZ0JBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxNQUFNLElBQUcsQ0FBQyxJQUFJLENBQzlCLDJEQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUNsQyxrQkFBa0IsRUFBRSxrQkFBa0IsR0FDdEMsQ0FDSDtRQUVBLGVBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxNQUFNLElBQUcsQ0FBQyxJQUFJLENBQzdCLDJEQUFDLDBEQUFtQixJQUNsQixhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFDbEIsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQ3hDLHNCQUFzQixFQUFFLDBCQUEwQixHQUNsRCxDQUNIO1FBRUQsMkRBQUMsa0VBQWMsSUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEdBQUksQ0FDMUMsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZm8tY2FyZC9zcmMvcnVudGltZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL0ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vY3JlYXRlTHVjaWRlSWNvbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9kZWZhdWx0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9jaGVjay5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9jaXJjbGUtY2hlY2stYmlnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2NpcmNsZS14LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2dsb2JlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2dyYWR1YXRpb24tY2FwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL21haWwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvbWFwLXBpbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9waG9uZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9wcmludGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3NoaWVsZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy90cmlhbmdsZS1hbGVydC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy94LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL3NoYXJlZC9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZm8tY2FyZC9zcmMvcnVudGltZS9zdHlsZS5jc3M/ZGIwYiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbmZvLWNhcmQvc3JjL2NvbXBvbmVudHMvY3JlYXRlZmVhdHVyZXMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbmZvLWNhcmQvc3JjL2NvbXBvbmVudHMvc2VydmljZXN0YWJsZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZm8tY2FyZC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4uaW5mby1jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmluZm8tY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMzYzNTM3O1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlO1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogRW5zdXJlIGNvbnRlbnQgY2FuIGZsb3cgKi9cbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbi5pbmZvLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDEycHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbmZvLWNhcmQgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5wcm9ncmFtLW5hbWUge1xuICBjb2xvcjogI2VmMmQ1NjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnByb2dyYW0tdHlwZSB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmluZm8tY2FyZC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhY3QtaW5mbyBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4OyAvKiBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHRleHQgKi9cbiAgbWFyZ2luOiA2cHggMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4uY29udGFjdC1pbmZvIHN2ZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZWxpZ2liaWxpdHktY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZGU2OGE7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uZWxpZ2liaWxpdHktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZWxpZ2liaWxpdHktaWNvbiB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmVsaWdpYmlsaXR5LWljb24ueWVsbG93IHtcbiAgY29sb3I6ICNkOTc3MDY7XG59XG5cbi5lbGlnaWJpbGl0eS1pY29uLmdyZWVuIHtcbiAgY29sb3I6ICMwNTk2Njk7XG59XG5cbi5lbGlnaWJpbGl0eS1jcml0ZXJpYSB1bCB7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5lbGlnaWJpbGl0eS1jcml0ZXJpYSBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi5jYXBhY2l0eSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5kb3Qge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xufVxuXG4uZG90LnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMmQ1NjtcbiAgYm9yZGVyLWNvbG9yOiAjZWYyZDU2O1xufVxuXG4ubGFiZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5zZXJ2aWNlcy10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbi5zZXJ2aWNlcy10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZXJ2aWNlcy10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5zZXJ2aWNlcy10YWJsZSB0aCxcbi5zZXJ2aWNlcy10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5zZXJ2aWNlcy10YWJsZSB0ZCBzdmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sbGFib3JhdGlvbi1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDFyZW07XG59XG5cbi5jb2xsYWItYm94IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM1Mzc7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgwMHB4KSB7XG4gIC5pbmZvLWNhcmQge1xuICAgIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgYm9keSB7XG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmluZm8tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cbiAgLmNvbnRhY3QtaW5mbyxcbiAgLmVsaWdpYmlsaXR5LWNhcmQsXG4gIC5jb2xsYWJvcmF0aW9uLWdyaWQsXG4gIC5jb21tZW50cyB7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG4gIGgxLCBoMiwgaDMsIHAge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAvKiBGb3JjZSBwYWdlIGJyZWFrIGFmdGVyIGxvbmcgc2VjdGlvbnMgaWYgbmVlZGVkICovXG4gIC5zZXJ2aWNlcy10YWJsZSwgLmNvbGxhYm9yYXRpb24tZ3JpZCwgLmNvbW1lbnRzIHtcbiAgICBwYWdlLWJyZWFrLWJlZm9yZTogYXV0bztcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xuICB9XG4gIC8qIE9wdGlvbmFsOiBoaWRlIHByaW50IGJ1dHRvbiAqL1xuICBidXR0b25bYXJpYS1sYWJlbD1QcmludF0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW5mby1jYXJkL3NyYy9ydW50aW1lL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vUHJvZ3JhbSUyMEZpbGVzL0FyY0dJUy9BcmNHSVNFeHBlcmllbmNlQnVpbGRlci9jbGllbnQveW91ci1leHRlbnNpb25zL3dpZGdldHMvaW5mby1jYXJkL3NyYy9ydW50aW1lL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBLEVBQUEsNEJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsMENBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsU0FBQSxFQUFBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNERjtFRElBO0lBQ0UsV0FBQTtJQUNBLDRCQUFBO0lBQ0Esd0JBQUE7RUNGRjtFREtBOzs7O0lBSUUsd0JBQUE7RUNIRjtFRE1BO0lBQ0UsdUJBQUE7RUNKRjtFRE9BO0lBQ0UsdUJBQUE7SUFDQSxxQkFBQTtFQ0xGO0VEUUEsbURBQUE7RUFDQTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7RUNORjtFRFNBLGdDQUFBO0VBQ0E7SUFDRSx3QkFBQTtFQ1BGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY2FyZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXHJcXG4gIGNvbG9yOiAjMzYzNTM3O1xcclxcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlO1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7ICAgICAgIC8qIEVuc3VyZSBjb250ZW50IGNhbiBmbG93ICovXFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY2FyZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDEycHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWNhcmQgPiBkaXYge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9ncmFtLW5hbWUge1xcclxcbiAgY29sb3I6ICNlZjJkNTY7XFxyXFxuICBmb250LXNpemU6IDEuNTByZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZ3JhbS10eXBlIHtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY2FyZC1pdGVtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8gcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4OyAgICAgICAgICAgICAgIC8qIHNwYWNlIGJldHdlZW4gaWNvbiBhbmQgdGV4dCAqL1xcclxcbiAgbWFyZ2luOiA2cHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW5mbyBzdmcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVsaWdpYmlsaXR5LWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlYTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZGU2OGE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVsaWdpYmlsaXR5LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5lbGlnaWJpbGl0eS1pY29uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVsaWdpYmlsaXR5LWljb24ueWVsbG93IHtcXHJcXG4gIGNvbG9yOiAjZDk3NzA2O1xcclxcbn1cXHJcXG5cXHJcXG4uZWxpZ2liaWxpdHktaWNvbi5ncmVlbiB7XFxyXFxuICBjb2xvcjogIzA1OTY2OTtcXHJcXG59XFxyXFxuXFxyXFxuLmVsaWdpYmlsaXR5LWNyaXRlcmlhIHVsIHtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi5lbGlnaWJpbGl0eS1jcml0ZXJpYSBsaSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FwYWNpdHkge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdCB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdC5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyZDU2O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZWYyZDU2O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VydmljZXMtdGFibGUge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VydmljZXMtdGFibGUgdGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VzLXRhYmxlIHRoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2aWNlcy10YWJsZSB0aCxcXHJcXG4uc2VydmljZXMtdGFibGUgdGQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2aWNlcy10YWJsZSB0ZCBzdmcge1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbGxhYm9yYXRpb24tZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sbGFiLWJveCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNTM3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xcclxcbiAgLmluZm8tY2FyZCB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBwcmludCB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcclxcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW5mby1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWluZm8sXFxyXFxuICAuZWxpZ2liaWxpdHktY2FyZCxcXHJcXG4gIC5jb2xsYWJvcmF0aW9uLWdyaWQsXFxyXFxuICAuY29tbWVudHMge1xcclxcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSwgaDIsIGgzLCBwIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIEZvcmNlIHBhZ2UgYnJlYWsgYWZ0ZXIgbG9uZyBzZWN0aW9ucyBpZiBuZWVkZWQgKi9cXHJcXG4gIC5zZXJ2aWNlcy10YWJsZSwgLmNvbGxhYm9yYXRpb24tZ3JpZCwgLmNvbW1lbnRzIHtcXHJcXG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGF1dG87XFxyXFxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBPcHRpb25hbDogaGlkZSBwcmludCBidXR0b24gKi9cXHJcXG4gIGJ1dHRvblthcmlhLWxhYmVsPVxcXCJQcmludFxcXCJdIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi5pbmZvLWNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbmZvLWNhcmQge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBjb2xvcjogIzM2MzUzNztcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBFbnN1cmUgY29udGVudCBjYW4gZmxvdyAqL1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5pbmZvLWNhcmQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uaW5mby1jYXJkID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ucHJvZ3JhbS1uYW1lIHtcXG4gIGNvbG9yOiAjZWYyZDU2O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG5cXG4ucHJvZ3JhbS10eXBlIHtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmluZm8tY2FyZC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jb250YWN0LWluZm8gcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4OyAvKiBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHRleHQgKi9cXG4gIG1hcmdpbjogNnB4IDA7XFxuICBmb250LXNpemU6IDAuODVyZW07XFxufVxcblxcbi5jb250YWN0LWluZm8gc3ZnIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5lbGlnaWJpbGl0eS1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmRlNjhhO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcblxcbi5lbGlnaWJpbGl0eS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uZWxpZ2liaWxpdHktaWNvbiB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi5lbGlnaWJpbGl0eS1pY29uLnllbGxvdyB7XFxuICBjb2xvcjogI2Q5NzcwNjtcXG59XFxuXFxuLmVsaWdpYmlsaXR5LWljb24uZ3JlZW4ge1xcbiAgY29sb3I6ICMwNTk2Njk7XFxufVxcblxcbi5lbGlnaWJpbGl0eS1jcml0ZXJpYSB1bCB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGNvbG9yOiAjNDQ0O1xcbn1cXG5cXG4uZWxpZ2liaWxpdHktY3JpdGVyaWEgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuXFxuLmNhcGFjaXR5IHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5kb3Qge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XFxufVxcblxcbi5kb3Quc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMmQ1NjtcXG4gIGJvcmRlci1jb2xvcjogI2VmMmQ1NjtcXG59XFxuXFxuLmxhYmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuLnNlcnZpY2VzLXRhYmxlIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuXFxuLnNlcnZpY2VzLXRhYmxlIHRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zZXJ2aWNlcy10YWJsZSB0aCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4uc2VydmljZXMtdGFibGUgdGgsXFxuLnNlcnZpY2VzLXRhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbn1cXG5cXG4uc2VydmljZXMtdGFibGUgdGQgc3ZnIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5jb2xsYWJvcmF0aW9uLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbGxhYi1ib3gge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzUzNztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcXG4gIC5pbmZvLWNhcmQge1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgcHJpbnQge1xcbiAgYm9keSB7XFxuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLmluZm8tY2FyZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxuICB9XFxuICAuY29udGFjdC1pbmZvLFxcbiAgLmVsaWdpYmlsaXR5LWNhcmQsXFxuICAuY29sbGFib3JhdGlvbi1ncmlkLFxcbiAgLmNvbW1lbnRzIHtcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcbiAgfVxcbiAgaDEsIGgyLCBoMywgcCB7XFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgfVxcbiAgYSB7XFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxuICAvKiBGb3JjZSBwYWdlIGJyZWFrIGFmdGVyIGxvbmcgc2VjdGlvbnMgaWYgbmVlZGVkICovXFxuICAuc2VydmljZXMtdGFibGUsIC5jb2xsYWJvcmF0aW9uLWdyaWQsIC5jb21tZW50cyB7XFxuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhdXRvO1xcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xcbiAgfVxcbiAgLyogT3B0aW9uYWw6IGhpZGUgcHJpbnQgYnV0dG9uICovXFxuICBidXR0b25bYXJpYS1sYWJlbD1QcmludF0ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNDc3LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7IGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi9kZWZhdWx0QXR0cmlidXRlcy5qcyc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMgfSBmcm9tICcuL3NoYXJlZC9zcmMvdXRpbHMuanMnO1xuXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZihcbiAgKHtcbiAgICBjb2xvciA9IFwiY3VycmVudENvbG9yXCIsXG4gICAgc2l6ZSA9IDI0LFxuICAgIHN0cm9rZVdpZHRoID0gMixcbiAgICBhYnNvbHV0ZVN0cm9rZVdpZHRoLFxuICAgIGNsYXNzTmFtZSA9IFwiXCIsXG4gICAgY2hpbGRyZW4sXG4gICAgaWNvbk5vZGUsXG4gICAgLi4ucmVzdFxuICB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHJlZixcbiAgICAgICAgLi4uZGVmYXVsdEF0dHJpYnV0ZXMsXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBhYnNvbHV0ZVN0cm9rZVdpZHRoID8gTnVtYmVyKHN0cm9rZVdpZHRoKSAqIDI0IC8gTnVtYmVyKHNpemUpIDogc3Ryb2tlV2lkdGgsXG4gICAgICAgIGNsYXNzTmFtZTogbWVyZ2VDbGFzc2VzKFwibHVjaWRlXCIsIGNsYXNzTmFtZSksXG4gICAgICAgIC4uLnJlc3RcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIC4uLmljb25Ob2RlLm1hcCgoW3RhZywgYXR0cnNdKSA9PiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cnMpKSxcbiAgICAgICAgLi4uQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl1cbiAgICAgIF1cbiAgICApO1xuICB9XG4pO1xuXG5leHBvcnQgeyBJY29uIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUljb24uanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MC40NzcuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHsgZm9yd2FyZFJlZiwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgdG9LZWJhYkNhc2UgfSBmcm9tICcuL3NoYXJlZC9zcmMvdXRpbHMuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcblxuY29uc3QgY3JlYXRlTHVjaWRlSWNvbiA9IChpY29uTmFtZSwgaWNvbk5vZGUpID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gZm9yd2FyZFJlZihcbiAgICAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gY3JlYXRlRWxlbWVudChJY29uLCB7XG4gICAgICByZWYsXG4gICAgICBpY29uTm9kZSxcbiAgICAgIGNsYXNzTmFtZTogbWVyZ2VDbGFzc2VzKGBsdWNpZGUtJHt0b0tlYmFiQ2FzZShpY29uTmFtZSl9YCwgY2xhc3NOYW1lKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSlcbiAgKTtcbiAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYCR7aWNvbk5hbWV9YDtcbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUx1Y2lkZUljb24gYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlTHVjaWRlSWNvbi5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjQ3Ny4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgZGVmYXVsdEF0dHJpYnV0ZXMgPSB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiAyNCxcbiAgaGVpZ2h0OiAyNCxcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgZmlsbDogXCJub25lXCIsXG4gIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgc3Ryb2tlV2lkdGg6IDIsXG4gIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxufTtcblxuZXhwb3J0IHsgZGVmYXVsdEF0dHJpYnV0ZXMgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdEF0dHJpYnV0ZXMuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MC40NzcuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbW1wicGF0aFwiLCB7IGQ6IFwiTTIwIDYgOSAxN2wtNS01XCIsIGtleTogXCIxZ21mMmNcIiB9XV07XG5jb25zdCBDaGVjayA9IGNyZWF0ZUx1Y2lkZUljb24oXCJDaGVja1wiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgQ2hlY2sgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hlY2suanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MC40NzcuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzVcIiwga2V5OiBcInlwczNjdFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJtOSAxMSAzIDNMMjIgNFwiLCBrZXk6IFwiMXBmbHpsXCIgfV1cbl07XG5jb25zdCBDaXJjbGVDaGVja0JpZyA9IGNyZWF0ZUx1Y2lkZUljb24oXCJDaXJjbGVDaGVja0JpZ1wiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgQ2lyY2xlQ2hlY2tCaWcgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2lyY2xlLWNoZWNrLWJpZy5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjQ3Ny4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wiY2lyY2xlXCIsIHsgY3g6IFwiMTJcIiwgY3k6IFwiMTJcIiwgcjogXCIxMFwiLCBrZXk6IFwiMW1nbGF5XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIm0xNSA5LTYgNlwiLCBrZXk6IFwiMXV6aHZyXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIm05IDkgNiA2XCIsIGtleTogXCJ6MGJpcWZcIiB9XVxuXTtcbmNvbnN0IENpcmNsZVggPSBjcmVhdGVMdWNpZGVJY29uKFwiQ2lyY2xlWFwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgQ2lyY2xlWCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGUteC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjQ3Ny4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wiY2lyY2xlXCIsIHsgY3g6IFwiMTJcIiwgY3k6IFwiMTJcIiwgcjogXCIxMFwiLCBrZXk6IFwiMW1nbGF5XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMiAyYTE0LjUgMTQuNSAwIDAgMCAwIDIwIDE0LjUgMTQuNSAwIDAgMCAwLTIwXCIsIGtleTogXCIxM28xemxcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTIgMTJoMjBcIiwga2V5OiBcIjlpNHB1NFwiIH1dXG5dO1xuY29uc3QgR2xvYmUgPSBjcmVhdGVMdWNpZGVJY29uKFwiR2xvYmVcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIEdsb2JlIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JlLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNDc3LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24uanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJNMjEuNDIgMTAuOTIyYTEgMSAwIDAgMC0uMDE5LTEuODM4TDEyLjgzIDUuMThhMiAyIDAgMCAwLTEuNjYgMEwyLjYgOS4wOGExIDEgMCAwIDAgMCAxLjgzMmw4LjU3IDMuOTA4YTIgMiAwIDAgMCAxLjY2IDB6XCIsXG4gICAgICBrZXk6IFwiajc2amwwXCJcbiAgICB9XG4gIF0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0yMiAxMHY2XCIsIGtleTogXCIxbHU4ZjNcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTYgMTIuNVYxNmE2IDMgMCAwIDAgMTIgMHYtMy41XCIsIGtleTogXCIxcjhsZWZcIiB9XVxuXTtcbmNvbnN0IEdyYWR1YXRpb25DYXAgPSBjcmVhdGVMdWNpZGVJY29uKFwiR3JhZHVhdGlvbkNhcFwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgR3JhZHVhdGlvbkNhcCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmFkdWF0aW9uLWNhcC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjQ3Ny4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicmVjdFwiLCB7IHdpZHRoOiBcIjIwXCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjJcIiwgeTogXCI0XCIsIHJ4OiBcIjJcIiwga2V5OiBcIjE4bjNrMVwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJtMjIgNy04Ljk3IDUuN2ExLjk0IDEuOTQgMCAwIDEtMi4wNiAwTDIgN1wiLCBrZXk6IFwiMW9jcmczXCIgfV1cbl07XG5jb25zdCBNYWlsID0gY3JlYXRlTHVjaWRlSWNvbihcIk1haWxcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIE1haWwgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjQ3Ny4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1xuICAgIFwicGF0aFwiLFxuICAgIHtcbiAgICAgIGQ6IFwiTTIwIDEwYzAgNC45OTMtNS41MzkgMTAuMTkzLTcuMzk5IDExLjc5OWExIDEgMCAwIDEtMS4yMDIgMEM5LjUzOSAyMC4xOTMgNCAxNC45OTMgNCAxMGE4IDggMCAwIDEgMTYgMFwiLFxuICAgICAga2V5OiBcIjFyMGYwelwiXG4gICAgfVxuICBdLFxuICBbXCJjaXJjbGVcIiwgeyBjeDogXCIxMlwiLCBjeTogXCIxMFwiLCByOiBcIjNcIiwga2V5OiBcImlscWhyN1wiIH1dXG5dO1xuY29uc3QgTWFwUGluID0gY3JlYXRlTHVjaWRlSWNvbihcIk1hcFBpblwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgTWFwUGluIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC1waW4uanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MC40NzcuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcbiAgICBcInBhdGhcIixcbiAgICB7XG4gICAgICBkOiBcIk0yMiAxNi45MnYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3IDE5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyelwiLFxuICAgICAga2V5OiBcImZvaXFyNVwiXG4gICAgfVxuICBdXG5dO1xuY29uc3QgUGhvbmUgPSBjcmVhdGVMdWNpZGVJY29uKFwiUGhvbmVcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIFBob25lIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBob25lLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNDc3LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24uanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJNNiAxOEg0YTIgMiAwIDAgMS0yLTJ2LTVhMiAyIDAgMCAxIDItMmgxNmEyIDIgMCAwIDEgMiAydjVhMiAyIDAgMCAxLTIgMmgtMlwiLFxuICAgICAga2V5OiBcIjE0M3d5ZFwiXG4gICAgfVxuICBdLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNNiA5VjNhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxdjZcIiwga2V5OiBcIjFpdG5lN1wiIH1dLFxuICBbXCJyZWN0XCIsIHsgeDogXCI2XCIsIHk6IFwiMTRcIiwgd2lkdGg6IFwiMTJcIiwgaGVpZ2h0OiBcIjhcIiwgcng6IFwiMVwiLCBrZXk6IFwiMXVlMHRnXCIgfV1cbl07XG5jb25zdCBQcmludGVyID0gY3JlYXRlTHVjaWRlSWNvbihcIlByaW50ZXJcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIFByaW50ZXIgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJpbnRlci5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjQ3Ny4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1xuICAgIFwicGF0aFwiLFxuICAgIHtcbiAgICAgIGQ6IFwiTTIwIDEzYzAgNS0zLjUgNy41LTcuNjYgOC45NWExIDEgMCAwIDEtLjY3LS4wMUM3LjUgMjAuNSA0IDE4IDQgMTNWNmExIDEgMCAwIDEgMS0xYzIgMCA0LjUtMS4yIDYuMjQtMi43MmExLjE3IDEuMTcgMCAwIDEgMS41MiAwQzE0LjUxIDMuODEgMTcgNSAxOSA1YTEgMSAwIDAgMSAxIDF6XCIsXG4gICAgICBrZXk6IFwib2VsNDF5XCJcbiAgICB9XG4gIF1cbl07XG5jb25zdCBTaGllbGQgPSBjcmVhdGVMdWNpZGVJY29uKFwiU2hpZWxkXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBTaGllbGQgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hpZWxkLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNDc3LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24uanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJtMjEuNzMgMTgtOC0xNGEyIDIgMCAwIDAtMy40OCAwbC04IDE0QTIgMiAwIDAgMCA0IDIxaDE2YTIgMiAwIDAgMCAxLjczLTNcIixcbiAgICAgIGtleTogXCJ3bW9lbnFcIlxuICAgIH1cbiAgXSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTEyIDl2NFwiLCBrZXk6IFwianV6cHU3XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMiAxN2guMDFcIiwga2V5OiBcInAzMnAwNVwiIH1dXG5dO1xuY29uc3QgVHJpYW5nbGVBbGVydCA9IGNyZWF0ZUx1Y2lkZUljb24oXCJUcmlhbmdsZUFsZXJ0XCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBUcmlhbmdsZUFsZXJ0IGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyaWFuZ2xlLWFsZXJ0LmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNDc3LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24uanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMTggNiA2IDE4XCIsIGtleTogXCIxYmw1ZjhcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwibTYgNiAxMiAxMlwiLCBrZXk6IFwiZDhiazZ2XCIgfV1cbl07XG5jb25zdCBYID0gY3JlYXRlTHVjaWRlSWNvbihcIlhcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIFggYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9eC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjQ3Ny4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5jb25zdCB0b0tlYmFiQ2FzZSA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG5jb25zdCBtZXJnZUNsYXNzZXMgPSAoLi4uY2xhc3NlcykgPT4gY2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gIHJldHVybiBCb29sZWFuKGNsYXNzTmFtZSkgJiYgY2xhc3NOYW1lLnRyaW0oKSAhPT0gXCJcIiAmJiBhcnJheS5pbmRleE9mKGNsYXNzTmFtZSkgPT09IGluZGV4O1xufSkuam9pbihcIiBcIikudHJpbSgpO1xuXG5leHBvcnQgeyBtZXJnZUNsYXNzZXMsIHRvS2ViYWJDYXNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXBcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHcmFwaGljIGZyb20gXCJAYXJjZ2lzL2NvcmUvR3JhcGhpY1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIE1haWwsIFBob25lLCBHbG9iZSwgTWFwUGluLCBMaXN0Q2hlY2tzLCBYLCBBbGVydFRyaWFuZ2xlLFxyXG4gIENoZWNrLCBHcmFkdWF0aW9uQ2FwLCBTaGllbGQsIFByaW50ZXJcclxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCBTZXJ2aWNlc1RhYmxlIGZyb20gXCIuL3NlcnZpY2VzdGFibGVcIjtcclxuXHJcbnR5cGUgQ3JlYXRlRmVhdHVyZXNQcm9wcyA9IHtcclxuICBmZWF0dXJlczogR3JhcGhpY1tdO1xyXG59O1xyXG5cclxuXHJcbnsvKiBQcm9ncmFtIFR5cGVzICovfVxyXG5jb25zdCBwcm9ncmFtVHlwZUxhYmVsczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICBcImh2aXBcIjogXCJIb3NwaXRhbC1CYXNlZCBWaW9sZW5jZSBJbnRlcnZlbnRpb24gUHJvZ3JhbSAoSFZJUClcIixcclxuICBcImN1cmV2aW9sZW5jZVwiOiBcIkN1cmUgVmlvbGVuY2UgUHJvZ3JhbVwiLFxyXG4gIFwiY3ZpXCI6IFwiQ29tbXVuaXR5IFZpb2xlbmNlIEludGVycnVwdGlvbi9TdHJlZXQgT3V0cmVhY2ggUHJvZ3JhbVwiLFxyXG4gIFwidmljdGltc2VydmljZXNcIjogXCJWaWN0aW0gU2VydmljZXMgQWdlbmN5XCIsXHJcbiAgXCJ5b3V0aG9yZ1wiOiBcIllvdXRoLUZvY3VzZWQgQ29tbXVuaXR5IE9yZ2FuaXphdGlvblwiLFxyXG4gIFwiY29tbWJvcmdcIjogXCJDb21tdW5pdHktQmFzZWQgT3JnYW5pemF0aW9uXCIsXHJcbiAgXCJnb3ZcIjogXCJHb3Zlcm5tZW50IE9mZmljZVwiLFxyXG4gIFwidW5pdlwiOiBcIlVuaXZlcnNpdHlcIixcclxuICBcIm90aGVyXCI6IFwiT3RoZXJcIlxyXG59O1xyXG5cclxuey8qIFNjaG9vbCBDb2xsYWJvcmF0aW9uIFR5cGVzICovfVxyXG5jb25zdCBjb2xsYWJTY2hvb2xEZXNjcmlwdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgeV9wcm9ncmFtOiBcIkhhcyBhIGRlc2lnbmF0ZWQgc2Nob29sIHByb2dyYW1cIixcclxuICB5X2NsZWFyYW5jZTogXCJQcm9ncmFtIHN0YWZmIGhhdmUgc2Nob29sIGNsZWFyYW5jZXNcIixcclxuICB5X2luZm9ybWFsOiBcIkhhcyBhbiBpbmZvcm1hbCByZWxhdGlvbnNoaXAgd2l0aCBzY2hvb2xzXCIsXHJcbiAgbjogXCJEb2VzIG5vdCBjb2xsYWJvcmF0ZSB3aXRoIHNjaG9vbHNcIlxyXG59O1xyXG5cclxuey8qIFBvbGljZSBDb2xsYWJvcmF0aW9uIFR5cGVzICovfVxyXG5jb25zdCBjb2xsYWJQb2xpY2VEZXNjcmlwdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgeV9mb3JtYWw6IFwiSGFzIGEgZm9ybWFsIHJlbGF0aW9uc2hpcCB3aXRoIHBvbGljZSAoZS5nLiwgc2lnbmVkIGFncmVlbWVudClcIixcclxuICB5X2luZm9ybWFsOiBcIkhhcyBhbiBpbmZvcm1hbCByZWxhdGlvbnNoaXAgd2l0aCBwb2xpY2UgKGUuZy4sIHdvcmtzIHdpdGggcG9saWNlIHNvbWV0aW1lcylcIixcclxuICBuOiBcIkRvZXMgbm90IGNvbGxhYm9yYXRlIHdpdGggcG9saWNlXCJcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVGZWF0dXJlcyh7IGZlYXR1cmVzIH06IENyZWF0ZUZlYXR1cmVzUHJvcHMpIHtcclxuICBjb25zdCBmaXJzdEZlYXR1cmUgPSBmZWF0dXJlc1swXTtcclxuICBjb25zdCBhdHRycyA9IGZpcnN0RmVhdHVyZT8uYXR0cmlidXRlcyB8fCB7fTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tY2FyZFwiKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcclxuICAgIH1cclxuICB9LCBbZmVhdHVyZXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1jYXJkXCI+XHJcbiAgICAgIHtmZWF0dXJlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgICAgICBnYXA6IFwiMXJlbVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBMZWZ0OiBuYW1lIGFuZCB0eXBlIHN0YWNrZWQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwLjVyZW1cIiwgY29sb3I6IFwiI2VmMmQ1NlwiIH19PlxyXG4gICAgICAgICAgICAgICAge2F0dHJzLnByb2dyYW1fbmFtZSB8fCBcIlByb2dyYW0gbmFtZVwifVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwLCBjb2xvcjogXCIjNTU1XCIsIG9wYWNpdHk6IDAuOCwgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAge2F0dHJzLnByb2dyYW1fdHlwZVxyXG4gICAgICAgICAgICAgICAgICA/IGF0dHJzLnByb2dyYW1fdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgodHlwZSkgPT4gcHJvZ3JhbVR5cGVMYWJlbHNbdHlwZS50cmltKCldIHx8IHR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAgIDogXCJQcm9ncmFtIHR5cGVcIn1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSaWdodDogcHJpbnQgaWNvbiAqL31cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5wcmludCgpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmludFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UHJpbnRlciBzaXplPXsyMH0gY29sb3I9XCIjNTU1XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgey8qIEFkZHJlc3MgYW5kIENvbnRhY3QgSW5mbyAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgIHthdHRycy5hZGRyZXNzICYmIDxwPjxNYXBQaW4gc2l6ZT17MTZ9IC8+IHthdHRycy5hZGRyZXNzfTwvcD59XHJcbiAgICAgICAgICAgIHthdHRycy5hZGRfYWRkcmVzc2VzICYmIDxwPjxNYXBQaW4gc2l6ZT17MTZ9IC8+IHthdHRycy5hZGRfYWRkcmVzc2VzfTwvcD59XHJcbiAgICAgICAgICAgIHthdHRycy5jb250YWN0X2VtYWlsICYmIDxwPjxNYWlsIHNpemU9ezE2fSAvPiB7YXR0cnMuY29udGFjdF9lbWFpbH08L3A+fVxyXG4gICAgICAgICAgICB7YXR0cnMuY29udGFjdF9waG9uZSAmJiA8cD48UGhvbmUgc2l6ZT17MTZ9IC8+IHthdHRycy5jb250YWN0X3Bob25lfTwvcD59XHJcbiAgICAgICAgICAgIHthdHRycy5jb250YWN0X3dlYnNpdGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxwPjxHbG9iZSBzaXplPXsxNn0gLz4gPGEgaHJlZj17YXR0cnMuY29udGFjdF93ZWJzaXRlfXRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj57YXR0cnMuY29udGFjdF93ZWJzaXRlfTwvYT48L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgey8qIEVsaWdpYmlsaXR5IFNlY3Rpb24gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsaWdpYmlsaXR5LWNhcmRcIj5cclxuICAgICAgICAgICAgPGgzPkVsaWdpYmlsaXR5PC9oMz5cclxuXHJcbiAgICAgICAgICAgIHthdHRycy5lbGlnaWJpbGl0eV95biA9PT0gXCJ5ZXNcIiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGlnaWJpbGl0eS1oZWFkZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBzaXplPXsyMH0gY2xhc3NOYW1lPVwiZWxpZ2liaWxpdHktaWNvbiB5ZWxsb3dcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UaGlzIHByb2dyYW0gb25seSBlbnJvbGxzIGNsaWVudHMgd2hvIG1lZXQgY2VydGFpbiBlbGlnaWJpbGl0eSByZXF1aXJlbWVudHM6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGlnaWJpbGl0eS1jcml0ZXJpYSBwbC01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGVhZGluZy1zbnVnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2F0dHJzLmVsaWdpYmlsaXR5X3RleHQgJiYgYXR0cnMuZWxpZ2liaWxpdHlfdGV4dC5zcGxpdCgnOycpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Bjcml0LSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwibWItMVwiPntpdGVtLnRyaW0oKX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHthdHRycy5nZW9nX2VsaWdpYmlsaXR5X3luID09PSBcInllc1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzaWRlbnRzIG9mIHRoZSBmb2xsb3dpbmcgemlwIGNvZGVzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXR0cnMuemlwX2VsaWdpYmlsaXR5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGwtNSBtdC0xIGxpc3QtZGlzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dHJzLnppcF9lbGlnaWJpbGl0eS5zcGxpdCgnLCcpLm1hcCgoemlwLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2B6aXAtJHtpfWB9Pnt6aXAudHJpbSgpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGlnaWJpbGl0eS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVjayBzaXplPXsyMH0gY2xhc3NOYW1lPVwiZWxpZ2liaWxpdHktaWNvbiBncmVlblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlRoaXMgcHJvZ3JhbSBkb2VzIG5vdCBoYXZlIGRlZmluZWQgZWxpZ2liaWxpdHkgcmVxdWlyZW1lbnRzIOKAlCBhbnlvbmUgY2FuIGVucm9sbC48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgIDxoMz5TZWxmLXJlZmVycmFsczwvaDM+XHJcbiAgICAgICAgICAgIHthdHRycy5zZWxmX3JlZmVyID09PSBcInllc1wiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxpZ2liaWxpdHktaGVhZGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVjayBzaXplPXsyMH0gY2xhc3NOYW1lPVwiZWxpZ2liaWxpdHktaWNvbiBncmVlblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlRoaXMgcHJvZ3JhbSBhY2NlcHRzIHNlbGYtcmVmZXJyYWxzLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IGF0dHJzLnNlbGZfcmVmZXIgPT09IFwibm9cIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsaWdpYmlsaXR5LWhlYWRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8WCBzaXplPXsyMH0gY2xhc3NOYW1lPVwiZWxpZ2liaWxpdHktaWNvbiByZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5UaGlzIHByb2dyYW0gZG9lcyBub3QgYWNjZXB0IHNlbGYtcmVmZXJyYWxzLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG5cclxuICAgICAgICAgIDxoMz5DYXBhY2l0eTwvaDM+XHJcbiAgICAgICAgICAgIHthdHRycy5jYXBhY2l0eSA9PT0gXCJuX2NhcGFjaXR5XCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxwPjxYIHNpemU9ezIwfSBjbGFzc05hbWU9XCJlbGlnaWJpbGl0eS1pY29uIHJlZFwiIC8+IDxiPk5vbmU6PC9iPiBDYW5ub3QgdGFrZSBhbnkgbmV3IGNsaWVudHMgaW4gdGhlIG5leHQgbW9udGg8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHthdHRycy5jYXBhY2l0eSA9PT0gXCJsX2NhcGFjaXR5XCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxwPjxBbGVydFRyaWFuZ2xlIHNpemU9ezIwfSBjbGFzc05hbWU9XCJlbGlnaWJpbGl0eS1pY29uIHllbGxvd1wiIC8+IDxiPkxpbWl0ZWQ6PC9iPiBDYW4gdGFrZSBmZXdlciB0aGFuIDEwIG5ldyBjbGllbnRzIGluIHRoZSBuZXh0IG1vbnRoPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7YXR0cnMuY2FwYWNpdHkgPT09IFwiaF9jYXBhY2l0eVwiICYmIChcclxuICAgICAgICAgICAgICA8cD48Q2hlY2sgc2l6ZT17MjB9IGNsYXNzTmFtZT1cImVsaWdpYmlsaXR5LWljb24gZ3JlZW5cIiAvPiA8Yj5IaWdoOjwvYj4gQ2FuIHRha2UgYW55IGVsaWdpYmxlIHJlZmVycmFsIGluIHRoZSBuZXh0IG1vbnRoPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIHsvKiBTZXJ2aWNlcyBUYWJsZSAqL31cclxuICAgICAgICAgIDxTZXJ2aWNlc1RhYmxlXHJcbiAgICAgICAgICAgIHNlcnZpY2VzPXthdHRycy5zZXJ2aWNlc31cclxuICAgICAgICAgICAgcmVmZXJyYWxfc2VydmljZXM9e2F0dHJzLnJlZmVycmFsX3NlcnZpY2VzfVxyXG4gICAgICAgICAgICBzZXJ2aWNlc19vdGhlcj17YXR0cnMuc2VydmljZXNfb3RoZXJ9XHJcbiAgICAgICAgICAgIHJlZmVycmFsX3NlcnZpY2VzX290aGVyPXthdHRycy5yZWZlcnJhbF9zZXJ2aWNlc19vdGhlcn1cclxuICAgICAgICAgICAgc2VydmljZXNfYmlsaW5ndWFsPXthdHRycy5zZXJ2aWNlc19iaWxpbmd1YWx9XHJcbiAgICAgICAgICAgIHJlZmVycmFsX3NlcnZpY2VzX2JpbGluZ3VhbD17YXR0cnMucmVmZXJyYWxfc2VydmljZXNfYmlsaW5ndWFsfVxyXG4gICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgey8qIENvbGxhYm9yYXRpb25zIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICA8aDM+Q29sbGFib3JhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYWJvcmF0aW9uLWdyaWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYWItYm94XCI+XHJcbiAgICAgICAgICAgICAgPEdyYWR1YXRpb25DYXAgc2l6ZT17MjR9IGNsYXNzTmFtZT1cIm14LWF1dG8gbWItMyB0ZXh0LWJsdWUtNjAwXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTFcIj5TY2hvb2xzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgeygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGF0dHJzLmNvbGxhYl9zY2hvb2xzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIHN0cmluZ2lmaWVkIGxpc3QsIGNsZWFuIGFuZCBzcGxpdCBpdFxyXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiB2YWwuc3RhcnRzV2l0aChcIltcIikgJiYgdmFsLmVuZHNXaXRoKFwiXVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBicmFja2V0cyBhbmQgcXVvdGVzLCB0aGVuIHNwbGl0IGJ5IGNvbW1hXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5lZCA9IHZhbC5yZXBsYWNlKC9bXFxbXFxdJ1wiXS9nLCBcIlwiKS5zcGxpdChcIixcIikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGVhbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBjb2xsYWJTY2hvb2xEZXNjcmlwdGlvbnNba2V5XSB8fCBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGp1c3QgYSBzaW5nbGUgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xsYWJTY2hvb2xEZXNjcmlwdGlvbnNbdmFsXSB8fCBcIk5vdCBzcGVjaWZpZWRcIjtcclxuICAgICAgICAgICAgICAgIH0pKCl9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFiLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxTaGllbGQgc2l6ZT17MjR9IGNsYXNzTmFtZT1cIm14LWF1dG8gbWItMyB0ZXh0LWdyYXktNjAwXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTFcIj5Qb2xpY2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29sbGFiUG9saWNlRGVzY3JpcHRpb25zW2F0dHJzLmNvbGxhYl9wb2xpY2VdIHx8IFwiTm90IHNwZWNpZmllZFwifVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIHsvKiBDb21tZW50cyBTZWN0aW9uICovfVxyXG4gICAgICAgIHthdHRycy5jb21tZW50cyAmJiAhL15cXHMqKG5cXC9hfG5hfG51bGx8bm9uZSk/XFxzKiQvaS50ZXN0KGF0dHJzLmNvbW1lbnRzKSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgIDxoMz5PdGhlciBpbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgIDxwPnthdHRycy5jb21tZW50c308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5ObyBmZWF0dXJlcyBmb3VuZC48L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGVja0NpcmNsZSwgWENpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuXHJcbnR5cGUgU2VydmljZXNUYWJsZVByb3BzID0ge1xyXG4gIHNlcnZpY2VzPzogc3RyaW5nO1xyXG4gIHNlcnZpY2VzX290aGVyPzogc3RyaW5nOyAvLyBIb2xkcyBhZGRpdGlvbmFsIFwib3RoZXJcIiBzZXJ2aWNlIGRlc2NyaXB0aW9uc1xyXG4gIHNlcnZpY2VzX2JpbGluZ3VhbD86IHN0cmluZzsgLy8gSG9sZHMgbXVsdGlsaW5ndWFsIHNlcnZpY2UgZGVzY3JpcHRpb25zXHJcbiAgcmVmZXJyYWxfc2VydmljZXM/OiBzdHJpbmc7XHJcbiAgcmVmZXJyYWxfc2VydmljZXNfb3RoZXI/OiBzdHJpbmc7IC8vIEhvbGRzIGFkZGl0aW9uYWwgXCJvdGhlclwiIHJlZmVycmFsIGRlc2NyaXB0aW9uc1xyXG4gIHJlZmVycmFsX3NlcnZpY2VzX2JpbGluZ3VhbD86IHN0cmluZzsgLy8gSG9sZHMgbXVsdGlsaW5ndWFsIHJlZmVycmFsIGRlc2NyaXB0aW9uc1xyXG59O1xyXG5cclxuLy8gRGVmaW5lIGEgZGljdGlvbmFyeSBvZiBhbGlhc2VzIGZvciBkaXNwbGF5XHJcbmNvbnN0IHNlcnZpY2VBbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gIGNtOiBcIkNhc2UgbWFuYWdlbWVudFwiLFxyXG4gIGNvdW5zOiBcIkNvdW5zZWxpbmdcIixcclxuICBiaHM6IFwiQmVoYXZpb3JhbCBoZWFsdGggc2VydmljZXNcIixcclxuICBlbXA6IFwiRW1wbG95bWVudCBzdXBwb3J0XCIsXHJcbiAgeWQ6IFwiWW91dGggZGV2ZWxvcG1lbnRcIixcclxuICBjYTogXCJDb21tdW5pdHkgYWN0aXZpc20vYWR2b2NhY3lcIixcclxuICBmY2w6IFwiRmluYW5jaWFsIGNvdW5zZWxpbmcvbGl0ZXJhY3lcIixcclxuICBmYTogXCJGaW5hbmNpYWwgYXNzaXN0YW5jZVwiLFxyXG4gIGxhOiBcIkxlZ2FsIGFzc2lzdGFuY2VcIixcclxuICBjdGFkdjogXCJDb3VydCBhZHZvY2FjeVwiLFxyXG4gIG1lZDogXCJNZWRpYXRpb25cIixcclxuICBtYm46IFwiTWVldGluZyBiYXNpYyBuZWVkcyAoZm9vZCwgY2xvdGhpbmcsIHNjaG9vbCBzdXBwbGllcywgZXRjLilcIixcclxuICBob3VzOiBcIkhvdXNpbmcgYXNzaXN0YW5jZVwiLFxyXG4gIGVtaG91czogXCJFbWVyZ2VuY3kgaG91c2luZyAmIHJlbG9jYXRpb24gYXNzaXN0YW5jZVwiLFxyXG4gIHRyYW5zcDogXCJUcmFuc3BvcnRhdGlvbiBhc3Npc3RhbmNlXCIsXHJcbiAgY2hpbGRjOiBcIkNoaWxkY2FyZSBhc3Npc3RhbmNlXCIsXHJcbiAgbWVudDogXCJNZW50b3JpbmdcIixcclxuICB2Y2E6IFwiVmljdGltIENvbXBlbnNhdGlvbiBBc3Npc3RhbmNlXCIsXHJcbiAgZWR1OiBcIkVkdWNhdGlvbmFsIHN1cHBvcnRcIixcclxuICBtZWRjOiBcIk1lZGljYWwgY2FyZVwiLFxyXG4gIHJlZW50OiBcIlJlZW50cnkgc2VydmljZXNcIixcclxuICBpbW06IFwiSW1taWdyYXRpb24gc3VwcG9ydFwiLFxyXG4gIGJpbGluZzogXCJNdWx0aWxpbmd1YWwgc2VydmljZXNcIixcclxuICBvdGhlcjogXCJPdGhlclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXNUYWJsZSh7XHJcbiAgc2VydmljZXMsXHJcbiAgc2VydmljZXNfb3RoZXIsXHJcbiAgc2VydmljZXNfYmlsaW5ndWFsLFxyXG4gIHJlZmVycmFsX3NlcnZpY2VzLFxyXG4gIHJlZmVycmFsX3NlcnZpY2VzX290aGVyLFxyXG4gIHJlZmVycmFsX3NlcnZpY2VzX2JpbGluZ3VhbCxcclxufTogU2VydmljZXNUYWJsZVByb3BzKSB7XHJcbiAgLy8gQ29udmVydCBjb21tYS1zZXBhcmF0ZWQgc3RyaW5ncyBpbnRvIGFycmF5c1xyXG4gIGNvbnN0IHNlcnZpY2VMaXN0ID0gc2VydmljZXMgPyBzZXJ2aWNlcy5zcGxpdChcIixcIikubWFwKHMgPT4gcy50cmltKCkpIDogW107XHJcbiAgY29uc3QgcmVmZXJyYWxMaXN0ID0gcmVmZXJyYWxfc2VydmljZXMgPyByZWZlcnJhbF9zZXJ2aWNlcy5zcGxpdChcIixcIikubWFwKHMgPT4gcy50cmltKCkpIDogW107XHJcblxyXG4gIC8vIEVuc3VyZSBcIk90aGVyXCIgaXMgYWx3YXlzIGxhc3RcclxuICBjb25zdCBhbGxTZXJ2aWNlcyA9IE9iamVjdC5rZXlzKHNlcnZpY2VBbGlhc2VzKS5zb3J0KChhLCBiKSA9PlxyXG4gICAgYSA9PT0gXCJvdGhlclwiID8gMSA6IGIgPT09IFwib3RoZXJcIiA/IC0xIDogMFxyXG4gICk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiUHJvcHM6XCIsIHsgc2VydmljZXMsIHNlcnZpY2VzX290aGVyLCBzZXJ2aWNlc19iaWxpbmd1YWwsIHJlZmVycmFsX3NlcnZpY2VzLCByZWZlcnJhbF9zZXJ2aWNlc19vdGhlciwgcmVmZXJyYWxfc2VydmljZXNfYmlsaW5ndWFsIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy10YWJsZVwiPlxyXG4gICAgICA8aDQ+U2VydmljZXMgUHJvdmlkZWQ8L2g0PlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+U2VydmljZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Qcm92aWRlcyBpbiBob3VzZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5SZWZlcnMgb3V0PC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7YWxsU2VydmljZXMubWFwKChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXNwbGF5TmFtZSA9IHNlcnZpY2VBbGlhc2VzW3NlcnZpY2VdIHx8IHNlcnZpY2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VydmljZSA9PT0gXCJiaWxpbmdcIikge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtzZXJ2aWNlfT5cclxuICAgICAgICAgICAgICAgICAgPHRkPntkaXNwbGF5TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VMaXN0LmluY2x1ZGVzKFwiYmlsaW5nXCIpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VydmljZXNfYmlsaW5ndWFsICYmIHNlcnZpY2VzX2JpbGluZ3VhbC50cmltKCkgIT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXJ2aWNlc19iaWxpbmd1YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk5vIGRldGFpbHMgcHJvdmlkZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8WENpcmNsZSBjb2xvcj1cInJlZFwiIHNpemU9ezE2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICB7cmVmZXJyYWxMaXN0LmluY2x1ZGVzKFwiYmlsaW5nXCIpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmZXJyYWxfc2VydmljZXNfYmlsaW5ndWFsICYmIHJlZmVycmFsX3NlcnZpY2VzX2JpbGluZ3VhbC50cmltKCkgIT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZWZlcnJhbF9zZXJ2aWNlc19iaWxpbmd1YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk5vIGRldGFpbHMgcHJvdmlkZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8WENpcmNsZSBjb2xvcj1cInJlZFwiIHNpemU9ezE2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlID09PSBcIm90aGVyXCIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17c2VydmljZX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57ZGlzcGxheU5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlTGlzdC5pbmNsdWRlcyhcIm90aGVyXCIpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VydmljZXNfb3RoZXIgJiYgc2VydmljZXNfb3RoZXIudHJpbSgpICE9PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VydmljZXNfb3RoZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk5vIGRldGFpbHMgcHJvdmlkZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8WENpcmNsZSBjb2xvcj1cInJlZFwiIHNpemU9ezE2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICB7cmVmZXJyYWxMaXN0LmluY2x1ZGVzKFwib3RoZXJcIikgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWZlcnJhbF9zZXJ2aWNlc19vdGhlciAmJiByZWZlcnJhbF9zZXJ2aWNlc19vdGhlci50cmltKCkgIT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZWZlcnJhbF9zZXJ2aWNlc19vdGhlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiTm8gZGV0YWlscyBwcm92aWRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxYQ2lyY2xlIGNvbG9yPVwicmVkXCIgc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtzZXJ2aWNlfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57ZGlzcGxheU5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c2VydmljZUxpc3QuaW5jbHVkZXMoc2VydmljZSkgPyA8Q2hlY2tDaXJjbGUgY29sb3I9XCJncmVlblwiIHNpemU9ezE2fSAvPiA6IDxYQ2lyY2xlIGNvbG9yPVwicmVkXCIgc2l6ZT17MTZ9IC8+fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3JlZmVycmFsTGlzdC5pbmNsdWRlcyhzZXJ2aWNlKSA/IDxDaGVja0NpcmNsZSBjb2xvcj1cImdyZWVuXCIgc2l6ZT17MTZ9IC8+IDogPFhDaXJjbGUgY29sb3I9XCJyZWRcIiBzaXplPXsxNn0gLz59PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIEFsbFdpZGdldFByb3BzLCBEYXRhU291cmNlQ29tcG9uZW50LCBGZWF0dXJlRGF0YVJlY29yZCwgSU1EYXRhU291cmNlSW5mbywgRGF0YVNvdXJjZSB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHcmFwaGljIGZyb20gXCJAYXJjZ2lzL2NvcmUvR3JhcGhpY1wiO1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xyXG5pbXBvcnQgQ3JlYXRlRmVhdHVyZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlZmVhdHVyZXNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55Pikge1xyXG4gIGNvbnN0IHsgdXNlTWFwV2lkZ2V0SWRzLCB1c2VEYXRhU291cmNlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3NlbGVjdGVkRmVhdHVyZXMsIHNldFNlbGVjdGVkRmVhdHVyZXNdID0gdXNlU3RhdGU8R3JhcGhpY1tdPihbXSk7XHJcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGU8RGF0YVNvdXJjZSB8IG51bGw+KG51bGwpO1xyXG5cclxuICAvLyBUeXBlIGd1YXJkIHRvIGVuc3VyZSB3ZSBoYXZlIGEgR3JhcGhpYyB3aXRoIGxheWVyXHJcbiAgZnVuY3Rpb24gaXNFc3JpR3JhcGhpYyhvYmo6IGFueSk6IG9iaiBpcyBHcmFwaGljIHtcclxuICAgIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgJ2dlb21ldHJ5JyBpbiBvYmogJiYgJ2xheWVyJyBpbiBvYmo7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkFjdGl2ZVZpZXdDaGFuZ2UoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3IHx8ICF1c2VEYXRhU291cmNlcz8ubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRMYXllcklkID0gdXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkO1xyXG5cclxuICAgIGppbXVNYXBWaWV3LnZpZXcub24oXCJjbGlja1wiLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBqaW11TWFwVmlldy52aWV3LmhpdFRlc3QoZXZlbnQpO1xyXG4gICAgICBjb25zdCBncmFwaGljcyA9IHJlc3BvbnNlLnJlc3VsdHNcclxuICAgICAgICAubWFwKHIgPT4gKHIgYXMgYW55KS5ncmFwaGljKVxyXG4gICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAoZzogYW55KTogZyBpcyBHcmFwaGljID0+XHJcbiAgICAgICAgICAgIGcgaW5zdGFuY2VvZiBHcmFwaGljICYmXHJcbiAgICAgICAgICAgIGcubGF5ZXIgaW5zdGFuY2VvZiBGZWF0dXJlTGF5ZXIgJiZcclxuICAgICAgICAgICAgZy5sYXllci5pZCA9PT0gc2VsZWN0ZWRMYXllcklkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChncmFwaGljcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgZ3JhcGhpY3MubWFwKGFzeW5jIChncmFwaGljKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChncmFwaGljLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICBjb25zdCBsYXllciA9IGdyYXBoaWMubGF5ZXIgYXMgRmVhdHVyZUxheWVyO1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyh7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdElkczogW2dyYXBoaWMuYXR0cmlidXRlc1tsYXllci5vYmplY3RJZEZpZWxkXV0sXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdWxsLmZlYXR1cmVzWzBdIHx8IGdyYXBoaWM7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JhcGhpYztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdyYXBoaWM7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRGZWF0dXJlcyh1cGRhdGVkLmZpbHRlcihCb29sZWFuKSBhcyBHcmFwaGljW10pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURhdGFTb3VyY2VJbmZvQ2hhbmdlKGluZm86IElNRGF0YVNvdXJjZUluZm8pIHtcclxuICAgIGlmIChpbmZvPy5zZWxlY3RlZElkcz8ubGVuZ3RoID4gMCAmJiBkYXRhU291cmNlKSB7XHJcbiAgICAgIGNvbnN0IHJlY29yZHMgPSBkYXRhU291cmNlLmdldFNlbGVjdGVkUmVjb3JkcygpIGFzIEZlYXR1cmVEYXRhUmVjb3JkW107XHJcblxyXG4gICAgICBjb25zdCBmdWxsRmVhdHVyZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICByZWNvcmRzLm1hcChhc3luYyAocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmZWF0ID0gcmVjb3JkLmdldEZlYXR1cmUoKTtcclxuICAgICAgICAgIGlmIChpc0VzcmlHcmFwaGljKGZlYXQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gZmVhdC5sYXllciBhcyBGZWF0dXJlTGF5ZXI7XHJcbiAgICAgICAgICAgIGlmIChsYXllciAmJiBmZWF0LmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbCA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMoe1xyXG4gICAgICAgICAgICAgICAgICBvYmplY3RJZHM6IFtmZWF0LmF0dHJpYnV0ZXNbbGF5ZXIub2JqZWN0SWRGaWVsZF1dLFxyXG4gICAgICAgICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVsbC5mZWF0dXJlc1swXSB8fCBmZWF0O1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlYXQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmZWF0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldFNlbGVjdGVkRmVhdHVyZXMoZnVsbEZlYXR1cmVzLmZpbHRlcihCb29sZWFuKSBhcyBHcmFwaGljW10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25EYXRhU291cmNlQ3JlYXRlZChkczogRGF0YVNvdXJjZSkge1xyXG4gICAgc2V0RGF0YVNvdXJjZShkcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGFpbmVyXCI+XHJcbiAgICAgIHt1c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3VzZU1hcFdpZGdldElkc1swXX1cclxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17b25BY3RpdmVWaWV3Q2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7dXNlRGF0YVNvdXJjZXM/Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlc1swXX1cclxuICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XHJcbiAgICAgICAgICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXtoYW5kbGVEYXRhU291cmNlSW5mb0NoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPENyZWF0ZUZlYXR1cmVzIGZlYXR1cmVzPXtzZWxlY3RlZEZlYXR1cmVzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9