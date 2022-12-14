"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_list-asistencia_list-asistencia_module_ts"],{

/***/ 2670:
/*!*************************************************************************!*\
  !*** ./src/app/pages/list-asistencia/list-asistencia-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListAsistenciaPageRoutingModule": () => (/* binding */ ListAsistenciaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _list_asistencia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-asistencia.page */ 7630);




const routes = [
    {
        path: '',
        component: _list_asistencia_page__WEBPACK_IMPORTED_MODULE_0__.ListAsistenciaPage
    }
];
let ListAsistenciaPageRoutingModule = class ListAsistenciaPageRoutingModule {
};
ListAsistenciaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListAsistenciaPageRoutingModule);



/***/ }),

/***/ 7068:
/*!*****************************************************************!*\
  !*** ./src/app/pages/list-asistencia/list-asistencia.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListAsistenciaPageModule": () => (/* binding */ ListAsistenciaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _list_asistencia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-asistencia-routing.module */ 2670);
/* harmony import */ var _list_asistencia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-asistencia.page */ 7630);







let ListAsistenciaPageModule = class ListAsistenciaPageModule {
};
ListAsistenciaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_asistencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListAsistenciaPageRoutingModule
        ],
        declarations: [_list_asistencia_page__WEBPACK_IMPORTED_MODULE_1__.ListAsistenciaPage]
    })
], ListAsistenciaPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_list-asistencia_list-asistencia_module_ts.js.map