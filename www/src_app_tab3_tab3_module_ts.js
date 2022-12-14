"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 5642);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_list_asistencia_list_asistencia_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pages/list-asistencia/list-asistencia.page */ 7630);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/modal/modal.component */ 385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);









let Tab3Page = class Tab3Page {
    constructor(storage, modalCtrl, modal, router, listA) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.modal = modal;
        this.router = router;
        this.listA = listA;
        this.asignaturas = [];
        this.asignatura = [];
        this.asistencias = [];
        this.asistencia = [];
        this.newAsis = {
            'id_asignatura': 'asignatura_CAD',
            'nameAsignatura': 'Calidad de software',
            'url': '../assets/apis/media/calidad_software.jpg',
            'asistencia': []
        };
    }
    ngOnInit() {
        this.dataTest = this.getAsignaturas2();
    }
    ;
    getArrAsistencia() {
        this.storage.forEach((value, key) => {
            if (key.startsWith('asistencia')) {
            }
        });
    }
    getAsignaturas2() {
        let arrAsignatura = new Array;
        this.storage.forEach((value, key) => {
            if (key.startsWith('asignatura')) {
                arrAsignatura.push(value);
            }
        });
        return arrAsignatura;
    }
    onClick(param) {
        this.listA.dataId(param);
        this.router.navigate(['/list-asistencia']);
    }
    open_modal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent
            });
            modal.present();
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _pages_list_asistencia_list_asistencia_page__WEBPACK_IMPORTED_MODULE_2__.ListAsistenciaPage }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_pages_list_asistencia_list_asistencia_page__WEBPACK_IMPORTED_MODULE_2__.ListAsistenciaPage, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent],
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-encabezado titulo=\"Asignaturas\" icono=\"layers-outline\"></app-encabezado>\n\n<ion-content>\n  <ion-list *ngFor=\"let data of dataTest\">\n    <ion-item class=\"asignatura animate__animated animate__backInLeft\"  id=\"{{data.idAsignatura}}\" routerLink=\"/{{data.idAsignatura}}\">\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n      <ion-avatar slot=\"start\">\n        <img src=\"{{ data.urlAsignatura }}\" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ data.nameAsignatura }}</h2>\n        <p>{{ data.idAsignatura }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<!--\n    <ion-list *ngFor=\"let data of asignatura \">\n       (click)=\"onClick(this.listA.dataId(data.idAsignatura))\"\n    <ion-item (click)=\"open_modal()\" class=\"animate__animated animate__backInLeft\" (click)=\"dataId(data.idAsignatura)\">\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n      <ion-avatar slot=\"start\">\n        <img src=\"{{ data.urlAsignatura }}\" />\n      </ion-avatar>\n      <ion-label >\n        <h2>{{data.nameAsignatura}}</h2>\n        <p>{{data.idAsignatura}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  </ion-list>\n-->";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map