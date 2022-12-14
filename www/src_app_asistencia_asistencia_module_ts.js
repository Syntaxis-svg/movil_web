"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_asistencia_asistencia_module_ts"],{

/***/ 9241:
/*!*********************************************************!*\
  !*** ./src/app/asistencia/asistencia-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaPageRoutingModule": () => (/* binding */ AsistenciaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _asistencia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia.page */ 6817);




const routes = [
    {
        path: '',
        component: _asistencia_page__WEBPACK_IMPORTED_MODULE_0__.AsistenciaPage
    }
];
let AsistenciaPageRoutingModule = class AsistenciaPageRoutingModule {
};
AsistenciaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsistenciaPageRoutingModule);



/***/ }),

/***/ 3594:
/*!*************************************************!*\
  !*** ./src/app/asistencia/asistencia.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaPageModule": () => (/* binding */ AsistenciaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asistencia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-routing.module */ 9241);
/* harmony import */ var _asistencia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia.page */ 6817);







let AsistenciaPageModule = class AsistenciaPageModule {
};
AsistenciaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asistencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsistenciaPageRoutingModule
        ],
        declarations: [_asistencia_page__WEBPACK_IMPORTED_MODULE_1__.AsistenciaPage]
    })
], AsistenciaPageModule);



/***/ }),

/***/ 6817:
/*!***********************************************!*\
  !*** ./src/app/asistencia/asistencia.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaPage": () => (/* binding */ AsistenciaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asistencia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia.page.html?ngResource */ 1597);
/* harmony import */ var _asistencia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia.page.scss?ngResource */ 2125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AsistenciaPage = class AsistenciaPage {
    constructor() { }
    ngOnInit() {
    }
};
AsistenciaPage.ctorParameters = () => [];
AsistenciaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-asistencia',
        template: _asistencia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asistencia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsistenciaPage);



/***/ }),

/***/ 2125:
/*!************************************************************!*\
  !*** ./src/app/asistencia/asistencia.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lzdGVuY2lhLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1597:
/*!************************************************************!*\
  !*** ./src/app/asistencia/asistencia.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Asistencia</ion-title>\n    <ion-icon slot=\"end\"  name=\"jet\" class=\"ion-padding\"></ion-icon>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"qr.page.scss\"><link\n    rel=\"stylesheet\"\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"\n  />\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_asistencia_asistencia_module_ts.js.map