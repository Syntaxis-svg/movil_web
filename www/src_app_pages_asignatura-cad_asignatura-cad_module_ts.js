"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_asignatura-cad_asignatura-cad_module_ts"],{

/***/ 25:
/*!***********************************************************************!*\
  !*** ./src/app/pages/asignatura-cad/asignatura-cad-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaCADPageRoutingModule": () => (/* binding */ AsignaturaCADPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _asignatura_cad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-cad.page */ 1554);




const routes = [
    {
        path: '',
        component: _asignatura_cad_page__WEBPACK_IMPORTED_MODULE_0__.AsignaturaCADPage
    }
];
let AsignaturaCADPageRoutingModule = class AsignaturaCADPageRoutingModule {
};
AsignaturaCADPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsignaturaCADPageRoutingModule);



/***/ }),

/***/ 1801:
/*!***************************************************************!*\
  !*** ./src/app/pages/asignatura-cad/asignatura-cad.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaCADPageModule": () => (/* binding */ AsignaturaCADPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asignatura_cad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-cad-routing.module */ 25);
/* harmony import */ var _asignatura_cad_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-cad.page */ 1554);







let AsignaturaCADPageModule = class AsignaturaCADPageModule {
};
AsignaturaCADPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asignatura_cad_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsignaturaCADPageRoutingModule
        ],
        declarations: [_asignatura_cad_page__WEBPACK_IMPORTED_MODULE_1__.AsignaturaCADPage]
    })
], AsignaturaCADPageModule);



/***/ }),

/***/ 1554:
/*!*************************************************************!*\
  !*** ./src/app/pages/asignatura-cad/asignatura-cad.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaCADPage": () => (/* binding */ AsignaturaCADPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asignatura_cad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-cad.page.html?ngResource */ 4269);
/* harmony import */ var _asignatura_cad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-cad.page.scss?ngResource */ 7226);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let AsignaturaCADPage = class AsignaturaCADPage {
    constructor(storage) {
        this.storage = storage;
        this.lista = [];
    }
    ngOnInit() {
        console.log(this.lista);
        this.lista = this.getCad();
    }
    getCad() {
        const cad = "asignatura_CAD";
        const pgaObject = this.storage.get(cad);
        let lista = [];
        this.storage.forEach((value) => {
            if (pgaObject !== value && value.asignatura === cad) {
                lista.push(value);
                console.log(lista);
            }
        });
        return lista;
    }
};
AsignaturaCADPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
AsignaturaCADPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-asignatura-cad',
        template: _asignatura_cad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asignatura_cad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignaturaCADPage);



/***/ }),

/***/ 7226:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-cad/asignatura-cad.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmF0dXJhLWNhZC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4269:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-cad/asignatura-cad.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Calidad de software</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"lista.length === 0\">\n    <ion-text  class=\"ion-text-center ion-justify-content-center ion-text-capitalize\" color=\"medium\">\n      <h3>Sin asistencia registrada!</h3>\n    </ion-text>\n  </div>\n  <div>\n    <ion-list>\n      <ion-item *ngFor=\"let item of lista\" >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">{{item.fecha.getDate()}}/{{item.fecha.getMonth()+1}}/{{item.fecha.getFullYear()}}</ion-col>\n            <ion-col size=\"4\" *ngIf=\"item.estado === true\">Presente</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_asignatura-cad_asignatura-cad_module_ts.js.map