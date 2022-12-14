"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_resetpass_resetpass-routing_module_ts"],{

/***/ 3507:
/*!*******************************************************!*\
  !*** ./src/app/resetpass/resetpass-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpassPageRoutingModule": () => (/* binding */ ResetpassPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _resetpass_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpass.page */ 8963);




const routes = [
    {
        path: '',
        component: _resetpass_page__WEBPACK_IMPORTED_MODULE_0__.ResetpassPage
    }
];
let ResetpassPageRoutingModule = class ResetpassPageRoutingModule {
};
ResetpassPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetpassPageRoutingModule);



/***/ }),

/***/ 8963:
/*!*********************************************!*\
  !*** ./src/app/resetpass/resetpass.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpassPage": () => (/* binding */ ResetpassPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _resetpass_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpass.page.html?ngResource */ 8311);
/* harmony import */ var _resetpass_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetpass.page.scss?ngResource */ 2206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 190);







let ResetpassPage = class ResetpassPage {
    constructor(alertController, router, storage) {
        this.alertController = alertController;
        this.router = router;
        this.storage = storage;
        this.isModalOpen = false;
        this.registrado = null;
        this.usuario = {
            username: '',
            password: '',
            correo: '',
        };
        this.nuevapassword = {
            password: '',
        };
        this.nuevousuario = null;
    }
    setOpen(isOpen) {
        this.isModalOpen = isOpen;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.reestablecer();
    }
    reestablecer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.registrado = yield this.storage.get(this.usuario.username);
            //console.log("entro a reestablecer", this.registrado);
            if (this.registrado != null) {
                if (this.usuario.username == this.registrado.username) {
                    yield this.cambiar(this.registrado);
                }
                else {
                }
            }
            else {
                this.presentAlert3();
            }
        });
    }
    // async cambiar(usuarioantiguo) {
    //   this.nuevousuario = usuarioantiguo
    //   let nueva = this.nuevapassword.password
    //   this.nuevousuario.password = nueva
    //   await this.storage.set(this.usuario.username, this.nuevousuario)
    //   this.registrado = await this.storage.get(this.usuario.username)
    // }
    cambiar(usuario_antiguo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.nuevousuario = usuario_antiguo;
            console.log(this.nuevousuario);
            let nueva = this.nuevapassword.password;
            console.log(nueva);
            this.registrado = yield this.storage.get(this.usuario.username);
            this.registrado.password = nueva;
            yield this.storage.set(this.usuario.username, this.registrado);
            this.presentAlert4();
        });
    }
    presentAlert4() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Reestablecer Contraseña',
                message: 'La contraseña ha sido cambiada',
                buttons: ['OK'],
            });
            yield alert.present();
            this.router.navigate(['/login']);
        });
    }
    presentAlert3() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Usuario no encontrado',
                message: 'El usuario no esta registrado, porfavor verificar',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
ResetpassPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage }
];
ResetpassPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-resetpass',
        template: _resetpass_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_resetpass_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetpassPage);



/***/ }),

/***/ 2206:
/*!**********************************************************!*\
  !*** ./src/app/resetpass/resetpass.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldHBhc3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8311:
/*!**********************************************************!*\
  !*** ./src/app/resetpass/resetpass.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-encabezado titulo=\"\" icono=\"\"></app-encabezado>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Atras\" mode=\"ios\" defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reestablecer Contraseña</ion-title>\n    <ion-icon slot=\"end\"  name=\"key-outline\" class=\"ion-padding\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-capitalize ion-text-center\">Recuperar Contraseña</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <!-- <form #recuperar=\"ngForm\" (ngSubmit)=\"onSubmit()\" > -->\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n        <!-- <ion-item>\n          <ion-label position=\"floating\">Correo</ion-label>\n          <ion-input type=\"email\" name=\"correo\" [(ngModel)]=\"usuario.correo\" required clearInput=\"\"></ion-input>\n        </ion-item> -->\n        <ion-item>\n          <ion-label position=\"floating\">Usuario</ion-label>\n          <ion-input type=\"text\" name=\"nombre\" [(ngModel)]=\"usuario.username\" required clearInput=\"\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Nueva Contraseña</ion-label>\n          <ion-input type=\"text\" name=\"contraseña\" [(ngModel)]=\"nuevapassword.password\" required clearInput=\"\"></ion-input>\n        </ion-item>\n        <ion-button (click)=\"cambiar(usuario.username)\"expand=\"block\" class=\"ion-margin-top\" type=\"submit\" [disabled]=\"form.invalid\">\n          Cambiar Contraseña\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_resetpass_resetpass-routing_module_ts.js.map