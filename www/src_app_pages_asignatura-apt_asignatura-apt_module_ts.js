"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_asignatura-apt_asignatura-apt_module_ts"],{

/***/ 10:
/*!***********************************************************************!*\
  !*** ./src/app/pages/asignatura-apt/asignatura-apt-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaAPTPageRoutingModule": () => (/* binding */ AsignaturaAPTPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _asignatura_apt_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-apt.page */ 977);




const routes = [
    {
        path: '',
        component: _asignatura_apt_page__WEBPACK_IMPORTED_MODULE_0__.AsignaturaAPTPage
    }
];
let AsignaturaAPTPageRoutingModule = class AsignaturaAPTPageRoutingModule {
};
AsignaturaAPTPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsignaturaAPTPageRoutingModule);



/***/ }),

/***/ 6632:
/*!***************************************************************!*\
  !*** ./src/app/pages/asignatura-apt/asignatura-apt.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaAPTPageModule": () => (/* binding */ AsignaturaAPTPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asignatura_apt_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-apt-routing.module */ 10);
/* harmony import */ var _asignatura_apt_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-apt.page */ 977);







let AsignaturaAPTPageModule = class AsignaturaAPTPageModule {
};
AsignaturaAPTPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asignatura_apt_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsignaturaAPTPageRoutingModule
        ],
        declarations: [_asignatura_apt_page__WEBPACK_IMPORTED_MODULE_1__.AsignaturaAPTPage]
    })
], AsignaturaAPTPageModule);



/***/ }),

/***/ 977:
/*!*************************************************************!*\
  !*** ./src/app/pages/asignatura-apt/asignatura-apt.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignaturaAPTPage": () => (/* binding */ AsignaturaAPTPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asignatura_apt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asignatura-apt.page.html?ngResource */ 4803);
/* harmony import */ var _asignatura_apt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignatura-apt.page.scss?ngResource */ 3762);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let AsignaturaAPTPage = class AsignaturaAPTPage {
    constructor(storage) {
        this.storage = storage;
        this.asistencia = [];
    }
    ngOnInit() {
        console.log(this.asistencia);
        this.asistencia = this.getApt();
    }
    getApt() {
        const apt = "asignatura_APT";
        const pgaObject = this.storage.get(apt);
        let lista = [];
        this.storage.forEach((value) => {
            if (pgaObject !== value && value.asignatura === apt) {
                lista.push(value);
                console.log(lista);
            }
        });
        return lista;
    }
};
AsignaturaAPTPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
AsignaturaAPTPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-asignatura-apt',
        template: _asignatura_apt_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asignatura_apt_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignaturaAPTPage);



/***/ }),

/***/ 3762:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-apt/asignatura-apt.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmF0dXJhLWFwdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4803:
/*!**************************************************************************!*\
  !*** ./src/app/pages/asignatura-apt/asignatura-apt.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title\n    class=\"ion-text-capitalize ion-text-center\">Portafolio IV</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"asistencia.length === 0\">\n    <ion-text\n      class=\"ion-text-center ion-justify-content-center ion-text-capitalize\"\n      color=\"medium\"\n    >\n      <h3>Sin asistencia registrada!</h3>\n    </ion-text>\n  </div>\n  <div>\n    <ion-list *ngFor=\"let item of asistencia\">\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">{{item.fecha.getDate()}}/{{item.fecha.getMonth()+1}}/{{item.fecha.getFullYear()}}</ion-col>\n            <ion-col size=\"4\" *ngIf=\"item.estado === true\">Presente</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_asignatura-apt_asignatura-apt_module_ts.js.map