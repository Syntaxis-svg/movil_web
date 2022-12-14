"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 4967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 4967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 2299);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 9575);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 7177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







let RegistroPage = class RegistroPage {
    constructor(alertController, storage, router) {
        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.usuario = {
            username: '',
            password: '',
            correo: ''
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        this.guardar();
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let usr = yield this.storage.get(this.usuario.username);
            if (usr == null) {
                yield this.storage.set(this.usuario.username, this.usuario);
                this.presentAlert();
                this.router.navigate(['/login']);
            }
            else {
                this.presentAlert2();
            }
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Registrado correctamente',
                message: 'Inicie Sesion',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Usuario registrado',
                message: 'El usuario se encuentra anteriormente registrado',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registro',
        template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



/***/ }),

/***/ 7177:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9575:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Atras\" mode=\"ios\" defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registrarse</ion-title>\n    <ion-icon slot=\"end\"  name=\"accessibility-outline\" class=\"ion-padding\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-capitalize ion-text-center\">Registrarse</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form #registro=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n        <ion-item>\n          <ion-label position=\"floating\">Correo</ion-label>\n          <ion-input  name=\"correo\" [(ngModel)]=\"usuario.correo\" required clearInput=\"\"></ion-input>          \n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Usuario</ion-label>\n          <ion-input  name=\"username\" [(ngModel)]=\"usuario.username\" required clearInput=\"\"></ion-input>          \n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"usuario.password\" required clearInput=\"\"></ion-input>          \n        </ion-item>\n\n        <ion-button expand=\"block\" class=\"ion-margin-top\" type=\"submit\" [disabled]=\"registro.invalid\">\n          Registrarse\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map