webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }\r\n  .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"container\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Start Bootstrap</a>\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li>\r\n                    <a routerLink=\"\" routerLinkActive=\"active\">Home</a>\r\n                </li>\r\n                <li>\r\n                    <a *ngIf=\"loginService.IsLoggedIn()\" routerLink=\"employees\" routerLinkActive=\"active\">Employee list</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"login\" routerLinkActive=\"active\">Login</a>\r\n                </li>\r\n                <li>\r\n                    <a (click)=\"logout()\">Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container -->\r\n</nav>\r\n\r\n<!-- Page Content -->\r\n<div class=\"container\">\r\n    <div class=\"row text-center\">\r\n        <hr>\r\n        <hr>\r\n        <hr>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <hr>\r\n    <!-- Footer -->\r\n    <footer>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <p>Copyright &copy; Your Website 2014</p>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n\r\n</div>\r\n<!-- /.container -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
    }
    AppComponent.prototype.logout = function () {
        this.loginService.setLogin(false);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_component__ = __webpack_require__("./src/app/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_employee_service__ = __webpack_require__("./src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notFound_component__ = __webpack_require__("./src/app/notFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employee_detail_component__ = __webpack_require__("./src/app/employee-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__employee_overview_component__ = __webpack_require__("./src/app/employee-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__employee_projects_component__ = __webpack_require__("./src/app/employee-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_component__ = __webpack_require__("./src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_check_login_guard__ = __webpack_require__("./src/app/guards/check-login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_check_save_form_guard__ = __webpack_require__("./src/app/guards/check-save-form.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__employee_component__["a" /* EmployeeListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__notFound_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__employee_detail_component__["a" /* EmployeeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__employee_overview_component__["a" /* EmployeeOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__employee_projects_component__["a" /* EmployeeProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* appRoutes */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_15__guards_check_login_guard__["a" /* CheckloginGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_check_save_form_guard__["a" /* CheckSaveGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_component__ = __webpack_require__("./src/app/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notFound_component__ = __webpack_require__("./src/app/notFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_detail_component__ = __webpack_require__("./src/app/employee-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_overview_component__ = __webpack_require__("./src/app/employee-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_projects_component__ = __webpack_require__("./src/app/employee-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_component__ = __webpack_require__("./src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_check_login_guard__ = __webpack_require__("./src/app/guards/check-login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_check_save_form_guard__ = __webpack_require__("./src/app/guards/check-save-form.guard.ts");










var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */] },
    // {path: '',redirectTo: 'employees', pathMatch:'full'}, //Chuyển trang khi vào Home
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_2__employee_component__["a" /* EmployeeListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_check_login_guard__["a" /* CheckloginGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_component__["a" /* LoginComponent */] },
    {
        path: 'employee-detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__employee_detail_component__["a" /* EmployeeDetailComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_9__guards_check_save_form_guard__["a" /* CheckSaveGuard */]], children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_5__employee_overview_component__["a" /* EmployeeOverviewComponent */] },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_6__employee_projects_component__["a" /* EmployeeProjectsComponent */] }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__notFound_component__["a" /* NotFoundComponent */] }
];
var appRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routing);


/***/ }),

/***/ "./src/app/employee-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" *ngIf=\"employee\">\r\n        <tr>\r\n            <td>Id</td>\r\n            <td>{{employee.id}}</td>\r\n        </tr>\r\n         <tr>\r\n            <td>Name</td>\r\n            <td>{{employee.name}}</td>\r\n        </tr>\r\n         <tr>\r\n            <td>Age</td>\r\n            <td>{{employee.age}}</td>\r\n        </tr>\r\n         <tr>\r\n            <td>Status</td>\r\n            <td>{{employee.status}}</td>\r\n        </tr>\r\n    </table>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['overview']\">OverView</a>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['projects']\">Projects</a>\r\n\r\n    <a class=\"btn btn-default\" [routerLink]=\"['/employees']\">Go back</a>\r\n    <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/employee-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_employee_service__ = __webpack_require__("./src/app/services/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent(router, activatedRoute, employeeService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        this.employeeService.GetSingle(this._id).subscribe(function (data) {
            _this.employee = data;
        });
    };
    EmployeeDetailComponent.prototype.GotoEmployee = function () {
        this.router.navigate(['employees']);
    };
    EmployeeDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EmployeeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'employee-detail-component',
            template: __webpack_require__("./src/app/employee-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_employee_service__["a" /* EmployeeService */]])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());



/***/ }),

/***/ "./src/app/employee-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeeOverviewComponent = /** @class */ (function () {
    function EmployeeOverviewComponent() {
    }
    EmployeeOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'employee-overview-component',
            template: "\n    <h3>Overview employee</h3>\n    "
        })
    ], EmployeeOverviewComponent);
    return EmployeeOverviewComponent;
}());



/***/ }),

/***/ "./src/app/employee-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\r\n    Welcome employee id: {{employeeid}}\r\n</h3>"

/***/ }),

/***/ "./src/app/employee-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeProjectsComponent = /** @class */ (function () {
    function EmployeeProjectsComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    EmployeeProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.parent.params.subscribe(function (data) {
            _this.employeeid = data['id'];
        });
        //alert(this.employeeid);
    };
    EmployeeProjectsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EmployeeProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'employee-projects-component',
            template: __webpack_require__("./src/app/employee-projects.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EmployeeProjectsComponent);
    return EmployeeProjectsComponent;
}());



/***/ }),

/***/ "./src/app/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Employee List </h1>\r\n<table class =\"table\">\r\n    <thead>\r\n        <tr>\r\n            <td>Name</td>\r\n            <td>Age</td>\r\n            <td>Status</td>\r\n            <td>Created At</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n            <tr *ngFor =\"let emp of employees\" >\r\n                    <td>{{emp.name}}</td>\r\n                    <td>{{emp.age}}</td>\r\n                    <td>{{emp.status}}</td>\r\n                    <td>{{emp.createdAt | date:'dd/MM/yyyy hh:mm:ss' }}</td>\r\n                    <td>\r\n                        <a [routerLink]=\"['/employee-detail',emp.id]\">Show detail</a>\r\n                    </td>\r\n                </tr>\r\n    </tbody>\r\n</table>\r\n<nav aria-label=\"Page navigation\">\r\n    <ul class=\"pagination\">\r\n      <li>\r\n        <a href=\"#\" aria-label=\"Previous\">\r\n          <span aria-hidden=\"true\">&laquo;</span>\r\n        </a>\r\n      </li>\r\n      <li *ngFor =\"let page of pages\" ><a [routerLink] =\"['/employees']\" [queryParams] =\"{numberPage:page}\">{{page}}</a></li>\r\n      <li>\r\n        <a href=\"#\" aria-label=\"Next\">\r\n          <span aria-hidden=\"true\">&raquo;</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>"

/***/ }),

/***/ "./src/app/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_employee_service__ = __webpack_require__("./src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService, router, activatedRoute) {
        this.employeeService = employeeService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pages = [1, 2, 3, 4, 5];
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.activePage = params['numberPage'] || 1;
            alert(_this.activePage);
        });
        this.employeeService.GetList().subscribe(function (response) {
            _this.employees = response;
        }, function (error) {
            console.error("System error API: " + error);
        });
    };
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'employee-list',
            template: __webpack_require__("./src/app/employee.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/guards/check-login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckloginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckloginGuard = /** @class */ (function () {
    function CheckloginGuard(loginService) {
        this.loginService = loginService;
    }
    CheckloginGuard.prototype.canActivate = function () {
        var status = this.loginService.IsLoggedIn();
        if (!status) {
            alert("You don't permisson access this page");
        }
        return status;
    };
    CheckloginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]])
    ], CheckloginGuard);
    return CheckloginGuard;
}());



/***/ }),

/***/ "./src/app/guards/check-save-form.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckSaveGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckSaveGuard = /** @class */ (function () {
    function CheckSaveGuard() {
    }
    CheckSaveGuard.prototype.canDeactivate = function (component) {
        alert("You don't save data!");
        return false;
    };
    CheckSaveGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CheckSaveGuard);
    return CheckSaveGuard;
}());



/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.GotoEmployee = function () {
        this.router.navigate(['employees']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home-component',
            template: "\n    <h1>Home Component</h1>\n    <button (click) =\"GotoEmployee()\" >Go to Employee</button>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup] =\"loginFormGroup\" >\r\n    <div class =\"form-group\">\r\n        <label class =\"col-md-2\">User Name</label>\r\n        <div class =\"col-md-10\">\r\n            <input class =\"form-control\" type=\"text\" placeholder=\"Username\"  formControlName =\"username\" />  \r\n        </div>\r\n    </div>\r\n    <div class =\"form-group\">\r\n        <label class =\"col-md-2\">Password</label>\r\n        <div class =\"col-md-10\">\r\n            <input class =\"form-control\" type=\"password\" placeholder=\"Password\" formControlName =\"password\" />  \r\n        </div>\r\n    </div>\r\n    <div>\r\n        <button class =\"btn btn-primary\" [disabled] =\"loginFormGroup.invalid\" (click) =\"checkValueFormGroup()\">Login</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFormGroup = this.fb.group({
            username: ['admin123', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ''
        });
    };
    LoginComponent.prototype.checkLogin = function () {
        // if (value.txtUserName =="admin" && value.txtPassword =="admin") 
        // {
        //     this.loginService.setLogin(true);
        // //console.log(value);
        //  this.router.navigate(['/']);
        // }
    };
    LoginComponent.prototype.checkValueFormGroup = function () {
        console.log(this.loginFormGroup.get("username").value);
        // this.loginFormGroup.setValue({
        //     username:    'abc123',
        //     password: '125'
        //  });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-component',
            template: __webpack_require__("./src/app/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/notFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'not-found-component',
            template: '<h1>Not Found 402</h1>'
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.urlApi = "http://5adadf6fba92a2001425c9a2.mockapi.io/api/employees/";
    }
    EmployeeService.prototype.GetList = function () {
        return this._http.get(this.urlApi).map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.GetSingle = function (id) {
        return this._http.get(this.urlApi + id).map(function (response) { return response.json(); });
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginService = /** @class */ (function () {
    function LoginService() {
        this._isLoggedIn = false;
    }
    LoginService.prototype.IsLoggedIn = function () {
        return this._isLoggedIn;
    };
    LoginService.prototype.setLogin = function (value) {
        this._isLoggedIn = value;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map