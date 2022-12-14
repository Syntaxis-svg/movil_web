"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







let LoginPage = class LoginPage {
    constructor(alertController, storage, router) {
        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.registrado = null;
        this.usuario = {
            username: '',
            password: '',
            correo: ''
        };
        //datos de asignatura
        this.listaDeAsignaturas = [
            { idAsignatura: "asignatura_APT", nameAsignatura: "Portafolio IV", urlAsignatura: "../assets/apis/media/portafolio.jpg", asistencia: [] },
            { idAsignatura: "asignatura_CAD", nameAsignatura: "Calidad de software", urlAsignatura: "../assets/apis/media/calidad_software.jpg", asistencia: [] },
            { idAsignatura: "asignatura_PGA", nameAsignatura: "Programación II", urlAsignatura: "../assets/apis/media/programing.jpg", asistencia: [] },
            { idAsignatura: "asignatura_PGY", nameAsignatura: "Programación de base de datos", urlAsignatura: "../assets/apis/media/database-1.jpg", asistencia: [] },
            { idAsignatura: "asignatura_REL", nameAsignatura: "Religión", urlAsignatura: "../assets/apis/media/religion.jpg", asistencia: [] }
        ];
    }
    ngOnInit() {
        if (this.storage.length) {
            console.log(this.storage.length);
            this.listaDeAsignaturas.forEach((value) => {
                this.storage.set(value.idAsignatura, value);
                console.log(value.idAsignatura, value);
            });
        }
    }
    //logeo
    onSubmit() {
        this.logear();
    }
    logear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.registrado = yield this.storage.get(this.usuario.username);
            if (this.registrado != null) {
                if (this.usuario.username == this.registrado.username && this.usuario.password == this.registrado.password) {
                    yield this.storage.set('session', this.registrado.username);
                    console.log(this.storage.get(this.usuario.username));
                    this.router.navigate(['/tabs/tab2']);
                }
                else {
                    this.presentAlert2();
                }
            }
            else {
                this.presentAlert2();
            }
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Datos Incorrectos',
                message: 'Intente nuevamente',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n<app-encabezado titulo=\"Login\" icono=\"person-outline\"></app-encabezado>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-capitalize ion-text-center\">iniciar sesión</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <ion-item>\n          <ion-label position=\"floating\">Usuario</ion-label>\n          <ion-input required type=\"text\" name=\"nombre\" [(ngModel)]=\"usuario.username\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input required type=\"password\" name=\"pass\" [(ngModel)]=\"usuario.password\" ></ion-input>\n        </ion-item>\n        <ion-button expand=\"full\" color=\"primary\"\n          type=\"submit\" [disabled]=\"form.invalid\" class=\"ion-margin-top\">\n          Iniciar Sesion\n        </ion-button>\n      </form>\n      <ion-button expand=\"block\" fill=\"clear\" shape=\"round\" routerLink=\"/registro\" >\n          Registrarse\n      </ion-button>\n      <ion-button expand=\"block\" fill=\"clear\" shape=\"round\" routerLink=\"/restablecer\">\n          Reestablecer\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-img src=\"assets/img/appStore.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-img src=\"assets/img/playStore.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map