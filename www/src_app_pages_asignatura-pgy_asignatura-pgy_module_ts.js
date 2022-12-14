"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_asignatura-pgy_asignatura-pgy_module_ts"],{

/***/ 3827:
/*!***********************************************************************!*\
  !*** ./src/app/pages/asignatura-pgy/asignatura-pgy-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaPGYPageRoutingModule": () => (/* binding */ AsignaturaPGYPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _asignatura_pgy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-pgy.page */ 9801);




const routes = [
    {
        path: '',
        component: _asignatura_pgy_page__WEBPACK_IMPORTED_MODULE_0__.AsignaturaPGYPage
    }
];
let AsignaturaPGYPageRoutingModule = class AsignaturaPGYPageRoutingModule {
};
AsignaturaPGYPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsignaturaPGYPageRoutingModule);



/***/ }),

/***/ 2116:
/*!***************************************************************!*\
  !*** ./src/app/pages/asignatura-pgy/asignatura-pgy.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaPGYPageModule": () => (/* binding */ AsignaturaPGYPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asignatura_pgy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-pgy-routing.module */ 3827);
/* harmony import */ var _asignatura_pgy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-pgy.page */ 9801);







let AsignaturaPGYPageModule = class AsignaturaPGYPageModule {
};
AsignaturaPGYPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asignatura_pgy_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsignaturaPGYPageRoutingModule
        ],
        declarations: [_asignatura_pgy_page__WEBPACK_IMPORTED_MODULE_1__.AsignaturaPGYPage]
    })
], AsignaturaPGYPageModule);



/***/ }),

/***/ 9801:
/*!*************************************************************!*\
  !*** ./src/app/pages/asignatura-pgy/asignatura-pgy.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaPGYPage": () => (/* binding */ AsignaturaPGYPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asignatura_pgy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-pgy.page.html?ngResource */ 5006);
/* harmony import */ var _asignatura_pgy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-pgy.page.scss?ngResource */ 8982);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let AsignaturaPGYPage = class AsignaturaPGYPage {
    constructor(storage) {
        this.storage = storage;
        this.asistencia = [];
    }
    ngOnInit() {
        console.log(this.asistencia);
        this.asistencia = this.getPgy();
    }
    getPgy() {
        const pgy = "asignatura_PGY";
        const pgaObject = this.storage.get(pgy);
        let lista = [];
        this.storage.forEach((value) => {
            if (pgaObject !== value && value.asignatura === pgy) {
                lista.push(value);
                console.log(lista);
            }
        });
        return lista;
    }
};
AsignaturaPGYPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
AsignaturaPGYPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-asignatura-pgy',
        template: _asignatura_pgy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asignatura_pgy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignaturaPGYPage);



/***/ }),

/***/ 8982:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-pgy/asignatura-pgy.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmF0dXJhLXBneS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5006:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-pgy/asignatura-pgy.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Programacion base de datos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"asistencia.length === 0\">\n    <ion-text class=\"ion-text-center ion-justify-content-center ion-text-capitalize\" color=\"medium\">\n      <h3>Sin asistencia registrada!</h3>\n    </ion-text>\n  </div>\n  <div>\n    <ion-list>\n      <ion-item *ngFor=\"let item of asistencia\" >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">{{item.fecha.getDate()}}/{{item.fecha.getMonth()+1}}/{{item.fecha.getFullYear()}}</ion-col>\n            <ion-col size=\"4\" *ngIf=\"item.estado === true\">Presente</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_asignatura-pgy_asignatura-pgy_module_ts.js.map