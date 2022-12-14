"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_asignatura-rel_asignatura-rel_module_ts"],{

/***/ 1155:
/*!***********************************************************************!*\
  !*** ./src/app/pages/asignatura-rel/asignatura-rel-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaRELPageRoutingModule": () => (/* binding */ AsignaturaRELPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _asignatura_rel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-rel.page */ 1618);




const routes = [
    {
        path: '',
        component: _asignatura_rel_page__WEBPACK_IMPORTED_MODULE_0__.AsignaturaRELPage
    }
];
let AsignaturaRELPageRoutingModule = class AsignaturaRELPageRoutingModule {
};
AsignaturaRELPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsignaturaRELPageRoutingModule);



/***/ }),

/***/ 20:
/*!***************************************************************!*\
  !*** ./src/app/pages/asignatura-rel/asignatura-rel.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaRELPageModule": () => (/* binding */ AsignaturaRELPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asignatura_rel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-rel-routing.module */ 1155);
/* harmony import */ var _asignatura_rel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-rel.page */ 1618);







let AsignaturaRELPageModule = class AsignaturaRELPageModule {
};
AsignaturaRELPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asignatura_rel_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsignaturaRELPageRoutingModule
        ],
        declarations: [_asignatura_rel_page__WEBPACK_IMPORTED_MODULE_1__.AsignaturaRELPage]
    })
], AsignaturaRELPageModule);



/***/ }),

/***/ 1618:
/*!*************************************************************!*\
  !*** ./src/app/pages/asignatura-rel/asignatura-rel.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaRELPage": () => (/* binding */ AsignaturaRELPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asignatura_rel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-rel.page.html?ngResource */ 8090);
/* harmony import */ var _asignatura_rel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-rel.page.scss?ngResource */ 1096);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let AsignaturaRELPage = class AsignaturaRELPage {
    constructor(storage) {
        this.storage = storage;
        this.asistencia = [];
    }
    ngOnInit() {
        console.log(this.asistencia);
        this.asistencia = this.getRel();
    }
    getRel() {
        const rel = "asignatura_REL";
        const pgaObject = this.storage.get(rel);
        let lista = [];
        this.storage.forEach((value) => {
            if (pgaObject !== value && value.asignatura === rel) {
                lista.push(value);
                console.log(lista);
            }
        });
        return lista;
    }
};
AsignaturaRELPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
AsignaturaRELPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-asignatura-rel',
        template: _asignatura_rel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asignatura_rel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignaturaRELPage);



/***/ }),

/***/ 1096:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-rel/asignatura-rel.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmF0dXJhLXJlbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8090:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-rel/asignatura-rel.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Religion</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"asistencia.length === 0\">\n    <ion-text  class=\"ion-text-center ion-justify-content-center ion-text-capitalize\" color=\"medium\">\n      <h3>Sin asistencia registrada!</h3>\n    </ion-text>\n  </div>\n  <div>\n    <ion-list>\n      <ion-item *ngFor=\"let item of asistencia\" >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">{{item.fecha.getDate()}}/{{item.fecha.getMonth()+1}}/{{item.fecha.getFullYear()}}</ion-col>\n            <ion-col size=\"4\" *ngIf=\"item.estado === true\">Presente</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_asignatura-rel_asignatura-rel_module_ts.js.map