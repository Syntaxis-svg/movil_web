"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_asignatura-pga_asignatura-pga_module_ts"],{

/***/ 2739:
/*!***********************************************************************!*\
  !*** ./src/app/pages/asignatura-pga/asignatura-pga-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaPGAPageRoutingModule": () => (/* binding */ AsignaturaPGAPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _asignatura_pga_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-pga.page */ 1058);




const routes = [
    {
        path: '',
        component: _asignatura_pga_page__WEBPACK_IMPORTED_MODULE_0__.AsignaturaPGAPage
    }
];
let AsignaturaPGAPageRoutingModule = class AsignaturaPGAPageRoutingModule {
};
AsignaturaPGAPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsignaturaPGAPageRoutingModule);



/***/ }),

/***/ 6787:
/*!***************************************************************!*\
  !*** ./src/app/pages/asignatura-pga/asignatura-pga.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaPGAPageModule": () => (/* binding */ AsignaturaPGAPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asignatura_pga_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-pga-routing.module */ 2739);
/* harmony import */ var _asignatura_pga_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-pga.page */ 1058);







let AsignaturaPGAPageModule = class AsignaturaPGAPageModule {
};
AsignaturaPGAPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asignatura_pga_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsignaturaPGAPageRoutingModule
        ],
        declarations: [_asignatura_pga_page__WEBPACK_IMPORTED_MODULE_1__.AsignaturaPGAPage]
    })
], AsignaturaPGAPageModule);



/***/ }),

/***/ 1058:
/*!*************************************************************!*\
  !*** ./src/app/pages/asignatura-pga/asignatura-pga.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaPGAPage": () => (/* binding */ AsignaturaPGAPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asignatura_pga_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-pga.page.html?ngResource */ 7995);
/* harmony import */ var _asignatura_pga_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-pga.page.scss?ngResource */ 7182);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let AsignaturaPGAPage = class AsignaturaPGAPage {
    constructor(storage) {
        this.storage = storage;
        this.asistencia = [];
    }
    ngOnInit() {
        console.log(this.asistencia);
        this.asistencia = this.getPga();
    }
    getPga() {
        const pga = "asignatura_PGA";
        const pgaObject = this.storage.get(pga);
        let lista = [];
        this.storage.forEach((value) => {
            if (pgaObject !== value && value.asignatura === pga) {
                lista.push(value);
                console.log(lista);
            }
        });
        return lista;
    }
};
AsignaturaPGAPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
AsignaturaPGAPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-asignatura-pga',
        template: _asignatura_pga_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asignatura_pga_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignaturaPGAPage);



/***/ }),

/***/ 7182:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-pga/asignatura-pga.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmF0dXJhLXBnYS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7995:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-pga/asignatura-pga.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Programacion</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"asistencia.length === 0\">\n    <ion-text\n      class=\"ion-text-center ion-justify-content-center ion-text-capitalize\"\n      color=\"medium\"\n    >\n      <h3>Sin asistencia registrada!</h3>\n    </ion-text>\n  </div>\n  <div>\n    <ion-list>\n      <ion-item *ngFor=\"let item of asistencia\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">{{item.fecha.getDate()}}/{{item.fecha.getMonth()+1}}/{{item.fecha.getFullYear()}}</ion-col>\n            <ion-col size=\"4\" *ngIf=\"item.estado === true\">Presente</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_asignatura-pga_asignatura-pga_module_ts.js.map