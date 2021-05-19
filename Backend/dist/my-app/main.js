(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\HW8\my-app\src\main.ts */"zUnb");


/***/ }),

/***/ "1XML":
/*!*************************************************************************************!*\
  !*** ./src/app/home/movie-carousel-component/movie-carousel-component.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MovieCarouselComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCarouselComponentComponent", function() { return MovieCarouselComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetchdata_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fetchdata-service.service */ "RG4Z");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function MovieCarouselComponentComponent_div_1_9_ng_template_0_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r6["image"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieCarouselComponentComponent_div_1_9_ng_template_0_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("carousel-caption ", ctx_r8.caption2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r6["title"]);
} }
function MovieCarouselComponentComponent_div_1_9_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCarouselComponentComponent_div_1_9_ng_template_0_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const data_r6 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r11.goToWatch(data_r6["id"], data_r6["media_type"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieCarouselComponentComponent_div_1_9_ng_template_0_div_2_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieCarouselComponentComponent_div_1_9_ng_template_0_div_2_span_4_Template, 2, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("", ctx_r5.colClass, " ", ctx_r5.imageDiv, " ", ctx_r5.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("overflow:hidden;position:relative;height:", ctx_r5.imageHeight, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.imageDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r6["image"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r6["title"]);
} }
function MovieCarouselComponentComponent_div_1_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieCarouselComponentComponent_div_1_9_ng_template_0_div_2_Template, 5, 13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", img_r3);
} }
function MovieCarouselComponentComponent_div_1_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieCarouselComponentComponent_div_1_9_ng_template_0_Template, 3, 1, "ng-template", 6);
} }
function MovieCarouselComponentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MovieCarouselComponentComponent_div_1_9_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx_r0.containerClass, " ", ctx_r0.colClass2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("container ", ctx_r0.removeIndicators, " ", ctx_r0.carousel1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.popMovies);
} }
class MovieCarouselComponentComponent {
    constructor(srv, breakpointObserver, router) {
        this.srv = srv;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
    }
    ngOnChanges() {
        this.ngOnInit();
    }
    ngOnInit() {
        this.breakpointObserver.observe('(min-width: 768px)').subscribe(result => {
            if (result.matches) {
                this.caption2 = "";
                this.colClass2 = "";
                this.containerClass = "";
                this.removeIndicators = "";
                this.colClass = "col-2";
                this.justifyCenter = "";
                this.imageDiv = "imageDiv";
                this.imageHeight = "13rem";
                this.carousel1 = "carousel1";
                this.containerClass2 = "container";
                if (this.name == "Popular Movies")
                    this.srv.getPopularMovies().subscribe(images => this.popMovies = images);
                else if (this.name == "Trending Movies")
                    this.srv.getTrendingMoviesAll().subscribe(images => this.popMovies = images);
                else if (this.name == "Top Rated Movies")
                    this.srv.getTopRatedMovies().subscribe(images => this.popMovies = images);
                else if (this.name == "Popular TV Shows")
                    this.srv.getPopularTVShows().subscribe(images => this.popMovies = images);
                else if (this.name == "Trending TV Shows")
                    this.srv.getTrendingTVShows().subscribe(images => this.popMovies = images);
                else if (this.name == "Top Rated TV Shows")
                    this.srv.getTopRatedTVShows().subscribe(images => this.popMovies = images);
                else if (this.name == "Recommended Movies")
                    this.srv.getRecommendedMovies(this.movieId).subscribe(images => this.popMovies = images);
                else if (this.name == "Similar Movies")
                    this.srv.getSimilarMovies(this.movieId).subscribe(images => this.popMovies = images);
                else if (this.name == "Recommended TV Shows") {
                    this.srv.getRecommendedTV(this.movieId).subscribe(images => this.popMovies = images);
                    console.log("recccc " + this.movieId);
                }
                else if (this.name == "Similar TV Shows")
                    this.srv.getSimilarTV(this.movieId).subscribe(images => this.popMovies = images);
                else if (this.name == "Continue Watching") {
                    this.popMovies = this.srv.getContinueWatching();
                }
            }
            else {
                this.colClass = "col-8";
                this.colClass2 = "colClass2";
                this.caption2 = "caption2";
                this.containerClass2 = "";
                this.carousel1 = "";
                this.imageDiv = "imageDiv2 imageDiv";
                this.containerClass = "container";
                this.removeIndicators = "removeIndicators";
                this.justifyCenter = "justify-content-center";
                this.imageHeight = "15rem";
                if (this.name == "Popular Movies")
                    this.srv.getPopularMovies_1().subscribe(images => this.popMovies = images);
                else if (this.name == "Trending Movies")
                    this.srv.getTrendingMoviesAll_1().subscribe(images => this.popMovies = images);
                else if (this.name == "Top Rated Movies")
                    this.srv.getTopRatedMovies_1().subscribe(images => this.popMovies = images);
                else if (this.name == "Popular TV Shows")
                    this.srv.getPopularTVShows_1().subscribe(images => this.popMovies = images);
                else if (this.name == "Trending TV Shows")
                    this.srv.getTrendingTVShows_1().subscribe(images => this.popMovies = images);
                else if (this.name == "Top Rated TV Shows")
                    this.srv.getTopRatedTVShows_1().subscribe(images => this.popMovies = images);
                else if (this.name == "Recommended Movies")
                    this.srv.getRecommendedMovies_1(this.movieId).subscribe(images => this.popMovies = images);
                else if (this.name == "Similar Movies")
                    this.srv.getSimilarMovies_1(this.movieId).subscribe(images => this.popMovies = images);
                else if (this.name == "Recommended TV Shows")
                    this.srv.getRecommendedTV_1(this.movieId).subscribe(images => this.popMovies = images);
                else if (this.name == "Similar TV Shows")
                    this.srv.getSimilarTV_1(this.movieId).subscribe(images => this.popMovies = images);
                else if (this.name == "Continue Watching") {
                    this.popMovies = this.srv.getContinueWatching_1();
                }
            }
        });
    }
    goToWatch(id, media_type) {
        this.router.navigate(['/watch/' + media_type, id]);
    }
}
MovieCarouselComponentComponent.ɵfac = function MovieCarouselComponentComponent_Factory(t) { return new (t || MovieCarouselComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetchdata_service_service__WEBPACK_IMPORTED_MODULE_1__["FetchdataServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MovieCarouselComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieCarouselComponentComponent, selectors: [["app-movie-carousel-component"]], inputs: { name: "name", movieId: "movieId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 4, consts: [["class", "container", 4, "ngIf"], [1, "container"], [2, "color", "white"], [3, "interval"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "col-12"], [1, "row"], ["style", "overflow:hidden;padding:15px;text-align:center", 3, "class", 4, "ngFor", "ngForOf"], [2, "overflow", "hidden", "padding", "15px", "text-align", "center"], [1, "stretched-link", 2, "border", "none", "outline", "none", "padding", "0", "margin", "0", 3, "click"], ["class", "d-block w-100", "style", "position:relative;height:100%;width:100%", 3, "src", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "d-block", "w-100", 2, "position", "relative", "height", "100%", "width", "100%", 3, "src"]], template: function MovieCarouselComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieCarouselComponentComponent_div_1_Template, 10, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.containerClass2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popMovies != undefined && ctx.popMovies.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"]], styles: [".carousel-caption[_ngcontent-%COMP%]{\r\n\tdisplay:none;\r\n\tbackground-image: linear-gradient(rgba(0,0,0,0.6) 8%, rgba(0,0,0,1) 30%);\r\n\tmax-width: 100%;\r\n    width:100%;\r\n\tpadding-left: 10%;\r\n\tleft:0;\r\n\ttext-align:left;\r\n\tpadding-bottom:3px;\r\n\tposition:absolute;\r\n\tbottom:0;\r\n}\r\n\r\n[_ngcontent-%COMP%]:focus {\r\n    outline:0;\r\n}\r\n\r\n.caption2[_ngcontent-%COMP%]{\r\n\tdisplay:block;\r\n}\r\n\r\n.imageDiv2[_ngcontent-%COMP%]{\r\n\ttransform: scale(1.05);\r\n}\r\n\r\n.imageDiv[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n}\r\n\r\n.imageDiv[_ngcontent-%COMP%]:hover{\r\n\ttransform: scale(1.1); \r\n}\r\n\r\n.colClass2[_ngcontent-%COMP%]{\r\n\tpadding-left:4rem;\r\n\tpadding-right:4rem;\r\n}\r\n\r\n  .removeIndicators .carousel-indicators {\r\n  display: none;\r\n}\r\n\r\n  .carousel1 .carousel-control-next{\r\n  left:95%;\r\n}\r\n\r\n  .carousel1 .carousel-control-prev{\r\n  left:-10%;\r\n}\r\n\r\n  .carousel1 .carousel-indicators{\r\n\ttop:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tb3ZpZS1jYXJvdXNlbC1jb21wb25lbnQvbW92aWUtY2Fyb3VzZWwtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osd0VBQXdFO0NBQ3hFLGVBQWU7SUFDWixVQUFVO0NBQ2IsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixRQUFRO0FBQ1Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUtBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0NBQ0MsUUFBUTtBQUNUIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tb3ZpZS1jYXJvdXNlbC1jb21wb25lbnQvbW92aWUtY2Fyb3VzZWwtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY2FwdGlvbntcclxuXHRkaXNwbGF5Om5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC42KSA4JSwgcmdiYSgwLDAsMCwxKSAzMCUpO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OiAxMCU7XHJcblx0bGVmdDowO1xyXG5cdHRleHQtYWxpZ246bGVmdDtcclxuXHRwYWRkaW5nLWJvdHRvbTozcHg7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0Ym90dG9tOjA7XHJcbn1cclxuXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOjA7XHJcbn1cclxuXHJcbi5jYXB0aW9uMntcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2VEaXYye1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5pbWFnZURpdjpob3ZlciAuY2Fyb3VzZWwtY2FwdGlvbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmltYWdlRGl2OmhvdmVye1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgXHJcbn1cclxuXHJcbi5jb2xDbGFzczJ7XHJcblx0cGFkZGluZy1sZWZ0OjRyZW07XHJcblx0cGFkZGluZy1yaWdodDo0cmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLnJlbW92ZUluZGljYXRvcnMgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwxIC5jYXJvdXNlbC1jb250cm9sLW5leHR7XHJcbiAgbGVmdDo5NSU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwxIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7XHJcbiAgbGVmdDotMTAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsMSAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcclxuXHR0b3A6MTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCarouselComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-carousel-component',
                templateUrl: './movie-carousel-component.component.html',
                styleUrls: ['./movie-carousel-component.component.css']
            }]
    }], function () { return [{ type: _fetchdata_service_service__WEBPACK_IMPORTED_MODULE_1__["FetchdataServiceService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], movieId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "76GK":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MylistComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function MylistComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No items found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistComponent_ng_template_5_div_6_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const list_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", list_r8["image"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MylistComponent_ng_template_5_div_6_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("carousel-caption ", ctx_r10.caption2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r8["title"]);
} }
function MylistComponent_ng_template_5_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_ng_template_5_div_6_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const list_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.goToWatch(list_r8["id"], list_r8["title"], list_r8["image"], list_r8["media_type"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_ng_template_5_div_6_div_1_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_ng_template_5_div_6_div_1_span_4_Template, 2, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("overflow:hidden;height:", ctx_r7.imageDivHeight, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("", ctx_r7.colClass, " ", ctx_r7.imageDiv, " ", ctx_r7.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("overflow:hidden;position:relative;height:", ctx_r7.imageDivHeight, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.imageDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r8["image"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r8["title"]);
} }
function MylistComponent_ng_template_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_ng_template_5_div_6_div_1_Template, 5, 16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list1_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("margin-bottom:", ctx_r5.marginBottom, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list1_r6);
} }
function MylistComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MylistComponent_ng_template_5_div_6_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r4.colClass2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.idList);
} }
class MylistComponent {
    constructor(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.idList = [];
    }
    ngOnChanges() {
        this.ngOnInit();
    }
    ngOnInit() {
        this.breakpointObserver.observe('(min-width: 768px)').subscribe(result => {
            if (result.matches) {
                this.colClass = "col-2";
                this.containerClass = "";
                this.caption2 = "";
                this.colClass2 = "";
                this.imageDiv = "imageDiv";
                this.imageDivHeight = "14rem";
                this.marginBottom = "4rem";
                var jsonObj = JSON.parse(window.localStorage.getItem("watchList"));
                var tempList = [];
                var count = 0;
                this.idList = this.getWatchList();
            }
            else {
                this.caption2 = "caption2";
                this.imageDiv = "imageDiv2 imageDiv";
                this.colClass = "col-8";
                this.colClass2 = "col-8";
                this.imageDivHeight = "18rem";
                this.marginBottom = "4rem";
                this.containerClass = "container";
                this.idList = this.getWatchList_1();
            }
        });
        this.idList.sort(function (a, b) {
            var x = b["time"];
            var y = a["time"];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        window.scrollTo(0, 0);
    }
    createSortedVisitedListArray() {
        var states = [];
        var jsonObj = JSON.parse(window.localStorage.getItem("watchList"));
        for (var x in jsonObj) {
            states.push(jsonObj[x]);
        }
        states.sort(function (a, b) {
            var x = b["time"];
            var y = a["time"];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        return states;
    }
    getWatchList() {
        const sortedArray = this.createSortedVisitedListArray();
        const states = [];
        var innerArray = [];
        var count = 0;
        for (var i = 0; i < sortedArray.length; i++) {
            if (count != 0 && count % 6 == 0) {
                states.push(innerArray);
                innerArray = [];
            }
            innerArray.push(sortedArray[i]);
            count++;
        }
        if (innerArray.length != 0)
            states.push(innerArray);
        return states;
    }
    getWatchList_1() {
        const sortedArray = this.createSortedVisitedListArray();
        const states = [];
        for (var i = 0; i < sortedArray.length; i++) {
            var innerArray = [];
            innerArray.push(sortedArray[i]);
            states.push(innerArray);
        }
        return states;
    }
    goToWatch(id, title, image, media_type) {
        var jsonObj = {};
        jsonObj['title'] = title;
        jsonObj['image'] = image;
        jsonObj['id'] = id;
        jsonObj['media_type'] = media_type;
        jsonObj['time'] = new Date().getTime();
        if (window.localStorage.getItem("visitedList") == undefined || window.localStorage.getItem("visitedList") == null) {
            var mainJsonObj = {};
            mainJsonObj[id] = jsonObj;
            window.localStorage.setItem("visitedList", JSON.stringify(mainJsonObj));
        }
        else {
            var tempObj = JSON.parse(window.localStorage.getItem("visitedList"));
            if (id in tempObj) {
                delete tempObj[id];
            }
            tempObj[id] = jsonObj;
            window.localStorage.setItem("visitedList", JSON.stringify(tempObj));
        }
        this.router.navigate(['/watch/' + media_type, id]);
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 3, consts: [[1, "container"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [2, "margin-top", "3rem"], [2, "color", "white", "text-align", "center"], [2, "color", "white", "margin-bottom", "4rem"], [1, "col-12"], ["class", "row", 3, "style", 4, "ngFor", "ngForOf"], [1, "row"], [3, "class", "style", 4, "ngFor", "ngForOf"], [1, "stretched-link", 2, "border", "none", "outline", "none", "padding", "0", "margin", "0", 3, "click"], ["class", "d-block w-100", "style", "position:relative;height:100%;width:100%", 3, "src", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "d-block", "w-100", 2, "position", "relative", "height", "100%", "width", "100%", 3, "src"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_2_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MylistComponent_ng_template_5_Template, 8, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idList.length == 0)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".carousel-caption[_ngcontent-%COMP%]{\r\n\tdisplay:none;\r\n\tbackground-image: linear-gradient(rgba(0,0,0,0.6) 8%, rgba(0,0,0,1) 30%);\r\n\tmax-width: 100%;\r\n    width:100%;\r\n\tpadding-left: 10%;\r\n\tleft:0;\r\n\ttext-align:left;\r\n\tposition:absolute;\r\n\tbottom:0;\r\n\t\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]:focus {\r\n    outline:0;\r\n}\r\n\r\n\r\n.caption2[_ngcontent-%COMP%]{\r\n\tdisplay:block;\r\n}\r\n\r\n\r\n.imageDiv2[_ngcontent-%COMP%]{\r\n\ttransform: scale(1.05);\r\n}\r\n\r\n\r\n.imageDiv[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n.imageDiv[_ngcontent-%COMP%]:hover{\r\n\ttransform: scale(1.1); \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlsaXN0L215bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLHdFQUF3RTtDQUN4RSxlQUFlO0lBQ1osVUFBVTtDQUNiLGlCQUFpQjtDQUNqQixNQUFNO0NBQ04sZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixRQUFROztBQUVUOzs7QUFHQTtJQUNJLFNBQVM7QUFDYjs7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7OztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOzs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9teWxpc3QvbXlsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY2FwdGlvbntcclxuXHRkaXNwbGF5Om5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC42KSA4JSwgcmdiYSgwLDAsMCwxKSAzMCUpO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcblx0cGFkZGluZy1sZWZ0OiAxMCU7XHJcblx0bGVmdDowO1xyXG5cdHRleHQtYWxpZ246bGVmdDtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRib3R0b206MDtcclxuXHRcclxufVxyXG5cclxuXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOjA7XHJcbn1cclxuXHJcbi5jYXB0aW9uMntcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2VEaXYye1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5pbWFnZURpdjpob3ZlciAuY2Fyb3VzZWwtY2FwdGlvbntcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmltYWdlRGl2OmhvdmVye1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mylist',
                templateUrl: './mylist.component.html',
                styleUrls: ['./mylist.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "7fYd":
/*!*************************************************************************************!*\
  !*** ./src/app/home/trending-movies-carousel/trending-movies-carousel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TrendingMoviesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingMoviesCarouselComponent", function() { return TrendingMoviesCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _fetchdata_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fetchdata-service.service */ "RG4Z");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["carousel"];
function TrendingMoviesCarouselComponent_div_1_3_ng_template_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r3["image"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TrendingMoviesCarouselComponent_div_1_3_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("carousel-caption ", ctx_r7.caption2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r3["title"]);
} }
function TrendingMoviesCarouselComponent_div_1_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendingMoviesCarouselComponent_div_1_3_ng_template_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.goToWatch(img_r3["id"], img_r3["media_type"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrendingMoviesCarouselComponent_div_1_3_ng_template_0_img_2_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrendingMoviesCarouselComponent_div_1_3_ng_template_0_span_3_Template, 2, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx_r5.imageDiv, " ", ctx_r5.imageDivResponsive, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", img_r3["image"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", img_r3["title"]);
} }
function TrendingMoviesCarouselComponent_div_1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendingMoviesCarouselComponent_div_1_3_ng_template_0_Template, 4, 6, "ng-template", 5);
} }
function TrendingMoviesCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("slide", function TrendingMoviesCarouselComponent_div_1_Template_ngb_carousel_slide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrendingMoviesCarouselComponent_div_1_3_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("container ", ctx_r0.removeIndicators, " ", ctx_r0.imageDiv, " carousel2 ", ctx_r0.carouselResponsive, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class TrendingMoviesCarouselComponent {
    constructor(srv, breakpointObserver, router) {
        this.srv = srv;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnChanges() {
        this.ngOnInit();
    }
    ngOnInit() {
        this.srv.getTrendingMovies().subscribe(images => this.images = images);
        this.breakpointObserver.observe('(min-width: 768px)').subscribe(result => {
            if (result.matches) {
                this.removeIndicators = "";
                this.caption2 = "";
                this.imageDiv = "imageDiv";
                this.carouselResponsive = "carousel2Desktop";
                this.imageDivResponsive = "imageDivDesktop";
                this.containerClass = "container";
            }
            else {
                this.removeIndicators = "removeIndicators";
                this.caption2 = "caption2";
                this.imageDiv = "imageDiv2 imageDiv";
                this.carouselResponsive = "carousel2Mobile";
                this.imageDivResponsive = "imageDivMobile";
                this.containerClass = "";
            }
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    goToWatch(id, media_type) {
        this.router.navigate(['/watch/' + media_type, id]);
    }
}
TrendingMoviesCarouselComponent.ɵfac = function TrendingMoviesCarouselComponent_Factory(t) { return new (t || TrendingMoviesCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetchdata_service_service__WEBPACK_IMPORTED_MODULE_2__["FetchdataServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TrendingMoviesCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendingMoviesCarouselComponent, selectors: [["app-trending-movies-carousel"]], viewQuery: function TrendingMoviesCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 4, consts: [["style", "width:90%;", 3, "class", 4, "ngIf"], [2, "width", "90%"], [3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "stretched-link", 2, "border", "none", "padding", "0", "margin", "0", "position", "relative", "width", "100%", 3, "click"], [2, "overflow", "hidden", "position", "relative", "width", "100%"], ["style", "position:relative;width:100%;height:100%", 3, "src", 4, "ngIf"], [3, "class", 4, "ngIf"], [2, "position", "relative", "width", "100%", "height", "100%", 3, "src"]], template: function TrendingMoviesCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingMoviesCarouselComponent_div_1_Template, 4, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.containerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images != undefined && ctx.images.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: [".carousel-caption[_ngcontent-%COMP%]{\r\n\tdisplay:none;\r\n\tbackground-image: linear-gradient(rgba(0,0,0,0.6) 8%, rgba(0,0,0,1) 30%);\r\n\tmax-width: 100%;\r\n    width:100%;\r\n\tpadding-left: 10%;\r\n\tleft:0;\r\n\ttext-align:left;\r\n\tposition:absolute;\r\n\tbottom:0;\r\n\t\r\n}\r\n\r\n[_ngcontent-%COMP%]:focus {\r\n    outline:0;\r\n}\r\n\r\n.caption2[_ngcontent-%COMP%]{\r\n\tdisplay:block;\r\n}\r\n\r\n.imageDiv2[_ngcontent-%COMP%]{\r\n\ttransform: scale(1.05);\r\n}\r\n\r\n.imageDiv[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n}\r\n\r\n.imageDiv[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n\ttransform: scale(1.1); \r\n}\r\n\r\n.imageDivDesktop[_ngcontent-%COMP%], .carousel2Desktop[_ngcontent-%COMP%]{\r\n\theight:20rem;\r\n}\r\n\r\n.imageDivMobile[_ngcontent-%COMP%], .carousel2Mobile[_ngcontent-%COMP%]{\r\n\theight:12rem;\r\n}\r\n\r\n  .removeIndicators .carousel-indicators {\r\n  display: none;\r\n}\r\n\r\n  .carousel2 .carousel-control-next{\r\n  left:90%;\r\n}\r\n\r\n  .carousel2 .carousel-control-prev{\r\n  left:-5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90cmVuZGluZy1tb3ZpZXMtY2Fyb3VzZWwvdHJlbmRpbmctbW92aWVzLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osd0VBQXdFO0NBQ3hFLGVBQWU7SUFDWixVQUFVO0NBQ2IsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLFFBQVE7O0FBRVQ7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RyZW5kaW5nLW1vdmllcy1jYXJvdXNlbC90cmVuZGluZy1tb3ZpZXMtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jYXB0aW9ue1xyXG5cdGRpc3BsYXk6bm9uZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjYpIDglLCByZ2JhKDAsMCwwLDEpIDMwJSk7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwJTtcclxuXHRsZWZ0OjA7XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGJvdHRvbTowO1xyXG5cdFxyXG59XHJcblxyXG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTowO1xyXG59XHJcblxyXG4uY2FwdGlvbjJ7XHJcblx0ZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuLmltYWdlRGl2MntcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uaW1hZ2VEaXY6aG92ZXIgLmNhcm91c2VsLWNhcHRpb257XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbWFnZURpdjpob3ZlciBpbWd7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpOyBcclxufVxyXG5cclxuLmltYWdlRGl2RGVza3RvcCwgLmNhcm91c2VsMkRlc2t0b3B7XHJcblx0aGVpZ2h0OjIwcmVtO1xyXG59XHJcblxyXG4uaW1hZ2VEaXZNb2JpbGUsIC5jYXJvdXNlbDJNb2JpbGV7XHJcblx0aGVpZ2h0OjEycmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnJlbW92ZUluZGljYXRvcnMgLmNhcm91c2VsLWluZGljYXRvcnMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwyIC5jYXJvdXNlbC1jb250cm9sLW5leHR7XHJcbiAgbGVmdDo5MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwyIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7XHJcbiAgbGVmdDotNSU7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendingMoviesCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trending-movies-carousel',
                templateUrl: './trending-movies-carousel.component.html',
                styleUrls: ['./trending-movies-carousel.component.css']
            }]
    }], function () { return [{ type: _fetchdata_service_service__WEBPACK_IMPORTED_MODULE_2__["FetchdataServiceService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel', { static: true }]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trending_movies_carousel_trending_movies_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trending-movies-carousel/trending-movies-carousel.component */ "7fYd");
/* harmony import */ var _movie_carousel_component_movie_carousel_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-carousel-component/movie-carousel-component.component */ "1XML");




class HomeComponent {
    constructor() {
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [[2, "padding-bottom", "10rem"], ["name", "Continue Watching"], ["name", "Popular Movies"], ["name", "Top Rated Movies"], ["name", "Trending Movies"], ["name", "Popular TV Shows"], ["name", "Top Rated TV Shows"], ["name", "Trending TV Shows"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-trending-movies-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-movie-carousel-component", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-movie-carousel-component", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-movie-carousel-component", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-movie-carousel-component", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-movie-carousel-component", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-movie-carousel-component", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-movie-carousel-component", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_trending_movies_carousel_trending_movies_carousel_component__WEBPACK_IMPORTED_MODULE_1__["TrendingMoviesCarouselComponent"], _movie_carousel_component_movie_carousel_component_component__WEBPACK_IMPORTED_MODULE_2__["MovieCarouselComponentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F/LR":
/*!******************************************************!*\
  !*** ./src/app/watch-movie/watch-movie.component.ts ***!
  \******************************************************/
/*! exports provided: WatchMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchMovieComponent", function() { return WatchMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fetchdata_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetchdata-service.service */ "RG4Z");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _home_movie_carousel_component_movie_carousel_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/movie-carousel-component/movie-carousel-component.component */ "1XML");











const _c0 = ["selfClosingAlert"];
function WatchMovieComponent_div_4_youtube_player_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "youtube-player", 17);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx_r8.movieVideo["key"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx_r8.videoHeight);
} }
function WatchMovieComponent_div_4_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.movieDetails["title"]);
} }
function WatchMovieComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.movieDetails["tagline"]);
} }
function WatchMovieComponent_div_4_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.movieDetails["release_date"], " ");
} }
function WatchMovieComponent_div_4_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.movieDetails["vote_average"], " ");
} }
function WatchMovieComponent_div_4_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", ctx_r13.movieDetails["runtime"], " ");
} }
function WatchMovieComponent_div_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Genres:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.movieDetails["genres"], "");
} }
function WatchMovieComponent_div_4_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Spoken Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.movieDetails["spoken_languages"], "");
} }
function WatchMovieComponent_div_4_ngb_alert_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WatchMovieComponent_div_4_ngb_alert_20_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.alertMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx_r16.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r16.alertMessage, " ");
} }
function WatchMovieComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchMovieComponent_div_4_youtube_player_3_Template, 1, 2, "youtube-player", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WatchMovieComponent_div_4_h1_5_Template, 2, 1, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WatchMovieComponent_div_4_div_6_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WatchMovieComponent_div_4_span_9_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WatchMovieComponent_div_4_span_10_Template, 4, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WatchMovieComponent_div_4_span_11_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WatchMovieComponent_div_4_div_13_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WatchMovieComponent_div_4_div_14_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchMovieComponent_div_4_Template_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.addToList($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WatchMovieComponent_div_4_ngb_alert_20_Template, 3, 2, "ngb-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.videoFirstClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieVideo != undefined && ctx_r0.movieVideo["key"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.videoSecondClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails["tagline"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails["release_date"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails["vote_average"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails["runtime"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails["genres"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails["spoken_languages"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r0.buttonid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.buttonText, " Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);
} }
function WatchMovieComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.movieDetails["overview"]);
} }
function WatchMovieComponent_div_6_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx_r23.movieDetails["title"], "&url=https://www.youtube.com/watch?v=", ctx_r23.movieVideo["key"], "&hashtags=USC,CSCI571,FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_div_6_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", ctx_r24.movieVideo["key"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchMovieComponent_div_6_div_1_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WatchMovieComponent_div_6_a_6_Template, 2, 2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WatchMovieComponent_div_6_a_7_Template, 2, 1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.movieDetails["overview"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.movieDetails != undefined && ctx_r1.movieVideo != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.movieVideo != undefined);
} }
function WatchMovieComponent_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full Cast and Crew ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchMovieComponent_ng_template_9_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.castDetails["name"]);
} }
function WatchMovieComponent_ng_template_9_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r27.castDetails["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_ng_template_9_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r28.castDetails["birthday"], "");
} }
function WatchMovieComponent_ng_template_9_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r29.castDetails["place_of_birth"], "");
} }
function WatchMovieComponent_ng_template_9_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r30.castDetails["gender"], "");
} }
function WatchMovieComponent_ng_template_9_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r31.castDetails["homepage"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.castDetails["homepage"]);
} }
function WatchMovieComponent_ng_template_9_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known For: ", ctx_r32.castDetails["known_for_department"], "");
} }
function WatchMovieComponent_ng_template_9_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r33.castDetails["also_known_as"], "");
} }
function WatchMovieComponent_ng_template_9_div_18_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ctx_r36.castExternalId["imdb_id"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_ng_template_9_div_18_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", ctx_r37.castExternalId["instagram_id"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_ng_template_9_div_18_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ctx_r38.castExternalId["facebook_id"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_ng_template_9_div_18_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.twitter.com/", ctx_r39.castExternalId["twitter_id"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_ng_template_9_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchMovieComponent_ng_template_9_div_18_a_1_Template, 2, 1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchMovieComponent_ng_template_9_div_18_a_2_Template, 2, 1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchMovieComponent_ng_template_9_div_18_a_3_Template, 2, 1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchMovieComponent_ng_template_9_div_18_a_4_Template, 2, 1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.castDetails != undefined && ctx_r34.castExternalId["imdb_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.castDetails != undefined && ctx_r34.castExternalId["instagram_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.castDetails != undefined && ctx_r34.castExternalId["facebook_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.castDetails != undefined && ctx_r34.castExternalId["twitter_id"]);
} }
function WatchMovieComponent_ng_template_9_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r35.castDetails["biography"]);
} }
function WatchMovieComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchMovieComponent_ng_template_9_h4_1_Template, 2, 1, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchMovieComponent_ng_template_9_Template_button_click_2_listener() { const modal_r25 = ctx.$implicit; return modal_r25.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WatchMovieComponent_ng_template_9_img_9_Template, 1, 1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WatchMovieComponent_ng_template_9_div_11_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WatchMovieComponent_ng_template_9_div_12_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WatchMovieComponent_ng_template_9_div_13_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WatchMovieComponent_ng_template_9_div_14_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WatchMovieComponent_ng_template_9_div_15_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WatchMovieComponent_ng_template_9_div_16_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WatchMovieComponent_ng_template_9_div_18_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WatchMovieComponent_ng_template_9_div_20_Template, 5, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx_r4.firstClass, " ", ctx_r4.restrictHeight, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["profile_path"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.secondClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["birthday"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["place_of_birth"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["homepage"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["known_for_department"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["also_known_as"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castExternalId != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.castDetails != undefined && ctx_r4.castDetails["biography"]);
} }
function WatchMovieComponent_div_11_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cast_r42["name"]);
} }
function WatchMovieComponent_div_11_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cast_r42["character"]);
} }
function WatchMovieComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchMovieComponent_div_11_div_2_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx_r47.openModal($event, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WatchMovieComponent_div_11_div_2_div_7_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WatchMovieComponent_div_11_div_2_div_10_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r42 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r41.cardClass, " text-wrap nopadding text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", cast_r42["id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cast_r42["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "img", cast_r42["id"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cast_r42["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cast_r42["character"]);
} }
function WatchMovieComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchMovieComponent_div_11_div_2_Template, 11, 8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container-fluid container scrollmenu ", ctx_r5.scrollmenu2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.movieCast);
} }
function WatchMovieComponent_div_13_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function WatchMovieComponent_div_13_div_5_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", review_r50["avatar_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_div_13_div_5_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchMovieComponent_div_13_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r50["author"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("oval ", ctx_r56.toggleOval1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r50["rating"], "");
} }
function WatchMovieComponent_div_13_div_5_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r50["author"], " on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, review_r50["created_at"], "MMMM d, y, h:mm:ss a"), "");
} }
function WatchMovieComponent_div_13_div_5_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r50["content"]);
} }
function WatchMovieComponent_div_13_div_5_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", review_r50["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchMovieComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchMovieComponent_div_13_div_5_div_4_Template, 1, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WatchMovieComponent_div_13_div_5_ng_template_5_Template, 2, 1, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WatchMovieComponent_div_13_div_5_ng_template_7_Template, 2, 0, "ng-template", null, 69, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WatchMovieComponent_div_13_div_5_div_10_Template, 8, 5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WatchMovieComponent_div_13_div_5_div_15_Template, 3, 5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WatchMovieComponent_div_13_div_5_div_17_Template, 2, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WatchMovieComponent_div_13_div_5_a_19_Template, 2, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r50 = ctx.$implicit;
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r49.reviewFirstClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r50["avatar_path"])("ngIfThen", _r52)("ngIfElse", _r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r49.reviewSecondClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r50["author"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("oval ", ctx_r49.toggleOval2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r50["rating"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r50["created_at"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r50["content"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r50["url"]);
} }
function WatchMovieComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WatchMovieComponent_div_13_div_5_Template, 20, 17, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.movieReviews.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.movieReviews);
} }
function WatchMovieComponent_div_15_app_movie_carousel_component_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-carousel-component", 90);
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("movieId", ctx_r65.movieDetails["id"]);
} }
function WatchMovieComponent_div_15_app_movie_carousel_component_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-carousel-component", 91);
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("movieId", ctx_r66.movieDetails["id"]);
} }
function WatchMovieComponent_div_15_app_movie_carousel_component_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-carousel-component", 92);
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("movieId", ctx_r67.movieDetails["id"]);
} }
function WatchMovieComponent_div_15_app_movie_carousel_component_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-carousel-component", 93);
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("movieId", ctx_r68.movieDetails["id"]);
} }
function WatchMovieComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchMovieComponent_div_15_app_movie_carousel_component_1_Template, 1, 1, "app-movie-carousel-component", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchMovieComponent_div_15_app_movie_carousel_component_2_Template, 1, 1, "app-movie-carousel-component", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchMovieComponent_div_15_app_movie_carousel_component_3_Template, 1, 1, "app-movie-carousel-component", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchMovieComponent_div_15_app_movie_carousel_component_4_Template, 1, 1, "app-movie-carousel-component", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.movieDetails["media_type"] && ctx_r7.movieDetails["media_type"] == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.movieDetails["media_type"] && ctx_r7.movieDetails["media_type"] == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.movieDetails["media_type"] && ctx_r7.movieDetails["media_type"] == "tv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.movieDetails["media_type"] && ctx_r7.movieDetails["media_type"] == "tv");
} }
class WatchMovieComponent {
    constructor(route, srv, modalService, breakpointObserver) {
        this.route = route;
        this.srv = srv;
        this.modalService = modalService;
        this.breakpointObserver = breakpointObserver;
        this.myStorage = window.localStorage;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.alertMessage = "";
    }
    ngOnChanges() {
        this.ngOnInit();
    }
    ngOnInit() {
        this.breakpointObserver.observe('(min-width: 768px)').subscribe(result => {
            if (result.matches) {
                this.firstClass = "col-3";
                this.secondClass = "col-9";
                this.videoFirstClass = "col-8";
                this.videoSecondClass = "col-4";
                this.cardClass = "col-2";
                this.reviewFirstClass = "col-1";
                this.reviewSecondClass = "col-11";
                this.scrollmenu2 = "";
                this.padContainer = "";
                this.padMobile = "";
                this.widthDesktop = "widthDesktop";
                this.containerClass = "container";
                this.videoHeight = "";
                this.restrictHeight = "restrictHeight";
                this.toggleOval1 = "showOval";
                this.toggleOval2 = "hideOval";
            }
            else {
                this.firstClass = "col-12";
                this.secondClass = "col-12";
                this.videoFirstClass = "col-12";
                this.videoSecondClass = "col-12";
                this.cardClass = "col-6";
                this.reviewFirstClass = "col-3";
                this.reviewSecondClass = "col-12";
                this.scrollmenu2 = "scrollmenu2";
                this.padContainer = "padContainer";
                this.padMobile = "padMobile";
                this.widthDesktop = "";
                this.containerClass = "";
                this.videoHeight = "100%";
                this.restrictHeight = "";
                this.toggleOval1 = "hideOval";
                this.toggleOval2 = "showOval";
            }
        });
        this.route.params.subscribe(routeParams => {
            this.id = routeParams.id;
            this.mediaType = routeParams.media_type;
            if (this.mediaType == "movie") {
                this.srv.getMovieVideo(this.id).subscribe(video => this.movieVideo = video);
                this.srv.getMovieDetails(this.id).subscribe(details => {
                    this.movieDetails = details;
                    this.addToWatch(this.movieDetails['id'], this.movieDetails['title'], this.movieDetails['poster_path'], this.movieDetails['media_type']);
                });
                this.srv.getMovieCast(this.id).subscribe(cast => this.movieCast = cast);
                this.srv.getMovieReviews(this.id).subscribe(reviews => this.movieReviews = reviews);
            }
            else if (this.mediaType == "tv") {
                this.srv.getTVVideo(this.id).subscribe(video => this.movieVideo = video);
                this.srv.getTVDetails(this.id).subscribe(details => {
                    this.movieDetails = details;
                    this.addToWatch(this.movieDetails['id'], this.movieDetails['title'], this.movieDetails['poster_path'], this.movieDetails['media_type']);
                });
                this.srv.getTVCast(this.id).subscribe(cast => this.movieCast = cast);
                this.srv.getTVReviews(this.id).subscribe(reviews => this.movieReviews = reviews);
            }
            if (window.localStorage.getItem("watchList") == undefined || window.localStorage.getItem("watchList") == null) {
                this.buttonid = "add";
                this.buttonText = "Add to";
            }
            else {
                if (this.id in JSON.parse(window.localStorage.getItem("watchList"))) {
                    this.buttonid = "remove";
                    this.buttonText = "Remove from";
                }
                else {
                    this.buttonid = "add";
                    this.buttonText = "Add to";
                }
            }
            this._success.subscribe(message => this.alertMessage = message);
            this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(() => {
                if (this.selfClosingAlert) {
                    this.selfClosingAlert.close();
                }
            });
            window.scrollTo(0, 0);
        });
    }
    addToWatch(id, title, image, media_type) {
        var jsonObj = {};
        jsonObj['title'] = title;
        jsonObj['image'] = image;
        jsonObj['id'] = id;
        jsonObj['media_type'] = media_type;
        jsonObj['time'] = new Date().getTime();
        if (window.localStorage.getItem("visitedList") == undefined || window.localStorage.getItem("visitedList") == null) {
            var mainJsonObj = {};
            mainJsonObj[id] = jsonObj;
            window.localStorage.setItem("visitedList", JSON.stringify(mainJsonObj));
        }
        else {
            var tempObj = JSON.parse(window.localStorage.getItem("visitedList"));
            if (id in tempObj) {
                delete tempObj[id];
            }
            tempObj[id] = jsonObj;
            window.localStorage.setItem("visitedList", JSON.stringify(tempObj));
        }
    }
    openModal(event, content) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.castId = target.attributes.id.nodeValue;
        this.castImgSrc = document.getElementById("img" + this.castId).src;
        this.srv.getCastDetails(this.castId).subscribe(castDetails => this.castDetails = castDetails);
        this.srv.getCastExternalIds(this.castId).subscribe(castExternalId => this.castExternalId = castExternalId);
        this.modalService.open(content, { size: 'lg', scrollable: true });
    }
    addToList(elem) {
        var jsonObj = {};
        jsonObj['title'] = this.movieDetails['title'];
        jsonObj['image'] = this.movieDetails['poster_path'];
        jsonObj['id'] = this.id;
        jsonObj['media_type'] = this.movieDetails['media_type'];
        jsonObj['time'] = new Date().getTime();
        if (this.buttonid == "add") {
            this.buttonid = "remove";
            this.buttonText = "Remove from";
            if (window.localStorage.getItem("watchList") == undefined || window.localStorage.getItem("watchList") == null) {
                var mainJsonObj = {};
                mainJsonObj[this.id] = jsonObj;
                window.localStorage.setItem("watchList", JSON.stringify(mainJsonObj));
            }
            else {
                var tempObj = JSON.parse(window.localStorage.getItem("watchList"));
                tempObj[this.id] = jsonObj;
                window.localStorage.setItem("watchList", JSON.stringify(tempObj));
            }
            this.alertType = "success";
            this._success.next(`Added to watchlist.`);
        }
        else {
            var tempObj = JSON.parse(window.localStorage.getItem("watchList"));
            delete tempObj[this.id];
            window.localStorage.setItem("watchList", JSON.stringify(tempObj));
            this.buttonid = "add";
            this.buttonText = "Add to";
            this.alertType = "danger";
            this._success.next(`Removed from watchlist.`);
        }
    }
}
WatchMovieComponent.ɵfac = function WatchMovieComponent_Factory(t) { return new (t || WatchMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetchdata_service_service__WEBPACK_IMPORTED_MODULE_4__["FetchdataServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"])); };
WatchMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchMovieComponent, selectors: [["app-watch-movie"]], viewQuery: function WatchMovieComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 16, consts: [[2, "padding-bottom", "10rem"], ["class", "container", 4, "ngIf"], [4, "ngIf"], ["style", "color:white", "class", "container", 4, "ngIf"], ["content", ""], [3, "class", 4, "ngIf"], ["class", "container ", 4, "ngIf"], [1, "container"], [1, "row"], [2, "color", "white"], ["width", "100%", 3, "videoId", "height", 4, "ngIf"], ["style", "color:white;", 4, "ngIf"], ["class", "font-italic", "style", "color:#8f98a8;font-size:1.0rem", 4, "ngIf"], [2, "color", "#8f98a8", "font-size", "1.0rem"], ["style", "color:#8f98a8;font-size:1.0rem", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "id", "click"], [3, "type", "closed", 4, "ngIf"], ["width", "100%", 3, "videoId", "height"], [1, "font-italic", 2, "color", "#8f98a8", "font-size", "1.0rem"], [1, "fas", "fa-star"], [2, "color", "white", "font-weight", "bold"], [3, "type", "closed"], ["selfClosingAlert", ""], ["class", "container text-justify", "style", "color:#8f98a8;font-size:1.0rem", 4, "ngIf"], [1, "container", 2, "color", "white"], ["target", "_blank", "class", "twitter-share-button", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "container", "text-justify", 2, "color", "#8f98a8", "font-size", "1.0rem"], ["target", "_blank", 1, "twitter-share-button", 3, "href"], [1, "fab", "fa-twitter", 2, "color", "#2a90f7", "font-size", "2rem", "padding-right", "1%"], ["target", "_blank", 3, "href"], [1, "fab", "fa-facebook-square", 2, "color", "#0000fa", "font-size", "2rem", "padding-right", "1%"], [1, "modal-header"], ["class", "modal-title", 4, "ngIf"], ["type", "button", "ngbAutofocus", "", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["style", "position:relative;width:100%;height:100%", 3, "src", 4, "ngIf"], [1, "modal-title"], [2, "position", "relative", "width", "100%", "height", "100%", 3, "src"], ["target", "_blank", "ngbPopover", "View IMDB", "triggers", "mouseenter:mouseleave", 3, "href", 4, "ngIf"], ["target", "_blank", "ngbPopover", "View Instagram", "triggers", "mouseenter:mouseleave", 3, "href", 4, "ngIf"], ["target", "_blank", "ngbPopover", "View Facebook", "triggers", "mouseenter:mouseleave", 3, "href", 4, "ngIf"], ["target", "_blank", "ngbPopover", "View Twitter", "triggers", "mouseenter:mouseleave", 3, "href", 4, "ngIf"], ["target", "_blank", "ngbPopover", "View IMDB", "triggers", "mouseenter:mouseleave", 3, "href"], [1, "fab", "fa-imdb", 2, "color", "#DBA506", "font-size", "2rem", "padding-right", "1%"], ["target", "_blank", "ngbPopover", "View Instagram", "triggers", "mouseenter:mouseleave", 3, "href"], [1, "fab", "fa-instagram", 2, "color", "#cd486b", "font-size", "2rem", "padding-right", "1%"], ["target", "_blank", "ngbPopover", "View Facebook", "triggers", "mouseenter:mouseleave", 3, "href"], [1, "fab", "fa-facebook-square", 2, "color", "#4267B2", "font-size", "2rem", "padding-right", "1%"], ["target", "_blank", "ngbPopover", "View Twitter", "triggers", "mouseenter:mouseleave", 3, "href"], [1, "fab", "fa-twitter", 2, "color", "#1DA1F2", "font-size", "2rem", "padding-right", "1%"], [1, "row", "flex-nowrap", 2, "padding-bottom", "10px"], [3, "class", 4, "ngFor", "ngForOf"], [1, "card", 2, "border-radius", "5%", "overflow", "hidden", "height", "20rem", "border", "none"], [1, "stretched-link", 2, "border", "none", "outline", "none", "background-color", "white", "padding", "0", "margin", "0", 3, "id", "click"], [1, "card-text"], [1, "img-fluid", 3, "src", "id"], [2, "position", "absolute", "bottom", "0", "background-color", "white", "width", "100%"], ["style", "font-weight:bold;", 4, "ngIf"], [2, "font-weight", "bold"], ["style", "padding-bottom:10px", 4, "ngIf"], [2, "padding-bottom", "10px"], [2, "color", "grey"], ["class", "card", "style", "margin-bottom:1rem", 4, "ngFor", "ngForOf"], [1, "card", 2, "margin-bottom", "1rem"], [1, "card-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["style", "font-weight:bold;margin-bottom:5px", 4, "ngIf"], [2, "color", "white", "white-space", "nowrap", "padding", "5px"], [1, "fas", "fa-star", 2, "padding-left", "1%"], [2, "padding-right", "1%"], ["style", "color:grey;margin-top:20px", 4, "ngIf"], ["class", "limitSize", 4, "ngIf"], ["target", "_blank", "style", "text-decoration: underline;", 3, "href", 4, "ngIf"], [2, "border-radius", "50%", "display", "inline-block", "overflow", "hidden"], [2, "position", "relative", "width", "100%", 3, "src"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU", 2, "position", "relative", "width", "100%"], [2, "font-weight", "bold", "margin-bottom", "5px"], [2, "font-size", "1.5rem"], [2, "color", "white", "white-space", "nowrap", "padding", "4px"], [2, "color", "grey", "margin-top", "20px"], [1, "limitSize"], ["target", "_blank", 2, "text-decoration", "underline", 3, "href"], ["name", "Recommended Movies", 3, "movieId", 4, "ngIf"], ["name", "Similar Movies", 3, "movieId", 4, "ngIf"], ["name", "Recommended TV Shows", 3, "movieId", 4, "ngIf"], ["name", "Similar TV Shows", 3, "movieId", 4, "ngIf"], ["name", "Recommended Movies", 3, "movieId"], ["name", "Similar Movies", 3, "movieId"], ["name", "Recommended TV Shows", 3, "movieId"], ["name", "Similar TV Shows", 3, "movieId"]], template: function WatchMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchMovieComponent_div_4_Template, 21, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WatchMovieComponent_div_6_Template, 8, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WatchMovieComponent_h2_8_Template, 2, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WatchMovieComponent_ng_template_9_Template, 21, 17, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WatchMovieComponent_div_11_Template, 3, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WatchMovieComponent_div_13_Template, 6, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WatchMovieComponent_div_15_Template, 5, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.containerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx.containerClass, " ", ctx.widthDesktop, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.padMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieDetails != undefined && ctx.movieDetails.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieDetails != undefined && ctx.movieDetails.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieCast != undefined && ctx.movieCast.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieCast != undefined && ctx.movieCast.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieReviews != undefined && ctx.movieReviews.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieDetails != undefined && ctx.movieDetails.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopover"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _home_movie_carousel_component_movie_carousel_component_component__WEBPACK_IMPORTED_MODULE_9__["MovieCarouselComponentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["div.scrollmenu[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.restrictHeight[_ngcontent-%COMP%]{\r\n\tmax-height:15rem;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  border: none;\r\n  border-radius:10px;\r\n  height:0.5rem;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  border-radius:10px;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: darkgrey;\r\n  border-radius:10px;\r\n  width:20em;\r\n  \r\n}\r\n\r\n.widthDesktop[_ngcontent-%COMP%]{\r\n\twidth:90%;\r\n}\r\n\r\n.padMobile[_ngcontent-%COMP%]{\r\n\tpadding-left:1rem;\r\n\tpadding-right:1rem;\r\n}\r\n\r\n.scrollmenu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  border: 3px solid grey;\r\n  border-radius:10px;\r\n  height:0.5rem;\r\n}\r\n\r\n.scrollmenu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  border-radius:10px;\r\n}\r\n\r\n.scrollmenu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: darkgrey;\r\n  border-radius:10px;\r\n  width:20em;\r\n  \r\n}\r\n\r\n.scrollmenu2[_ngcontent-%COMP%]::-webkit-scrollbar{\r\n\tdisplay:none;\r\n}\r\n\r\n.padContainer[_ngcontent-%COMP%]{\r\n\tpadding-left:40px;\r\n\tpadding-right:40px;\r\n}\r\n\r\n.nopadding[_ngcontent-%COMP%] {\r\n   padding-right: 0;\r\n}\r\n\r\n.oval[_ngcontent-%COMP%]{\r\n\tbackground-color:black;\r\n\tborder-radius: 1rem;\r\n}\r\n\r\n.hideOval[_ngcontent-%COMP%]{\r\n\tdisplay:none;\r\n}\r\n\r\n.limitSize[_ngcontent-%COMP%]{\r\n\toverflow: hidden;\r\n   text-overflow: ellipsis;\r\n   display: -webkit-box;\r\n   -webkit-line-clamp: 3; \r\n   -webkit-box-orient: vertical;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2gtbW92aWUvd2F0Y2gtbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFVBQVU7O0FBRVo7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBR0E7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixVQUFVOztBQUVaOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtHQUNHLGdCQUFnQjtBQUNuQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7R0FDZCx1QkFBdUI7R0FDdkIsb0JBQW9CO0dBQ3BCLHFCQUFxQixFQUFFLDRCQUE0QjtHQUNuRCw0QkFBNEI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC93YXRjaC1tb3ZpZS93YXRjaC1tb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnNjcm9sbG1lbnUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5yZXN0cmljdEhlaWdodHtcclxuXHRtYXgtaGVpZ2h0OjE1cmVtO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgaGVpZ2h0OjAuNXJlbTtcclxufVxyXG4gXHJcbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcbiBcclxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgd2lkdGg6MjBlbTtcclxuICBcclxufVxyXG5cclxuLndpZHRoRGVza3RvcHtcclxuXHR3aWR0aDo5MCU7XHJcbn1cclxuXHJcblxyXG4ucGFkTW9iaWxle1xyXG5cdHBhZGRpbmctbGVmdDoxcmVtO1xyXG5cdHBhZGRpbmctcmlnaHQ6MXJlbTtcclxufVxyXG5cclxuLnNjcm9sbG1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBoZWlnaHQ6MC41cmVtO1xyXG59XHJcbiBcclxuLnNjcm9sbG1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuIFxyXG4uc2Nyb2xsbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICB3aWR0aDoyMGVtO1xyXG4gIFxyXG59XHJcblxyXG4uc2Nyb2xsbWVudTI6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG5cdGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLnBhZENvbnRhaW5lcntcclxuXHRwYWRkaW5nLWxlZnQ6NDBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbn1cclxuXHJcbi5ub3BhZGRpbmcge1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ub3ZhbHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5cdGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5oaWRlT3ZhbHtcclxuXHRkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi5saW1pdFNpemV7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXHJcbiAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watch-movie',
                templateUrl: './watch-movie.component.html',
                styleUrls: ['./watch-movie.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _fetchdata_service_service__WEBPACK_IMPORTED_MODULE_4__["FetchdataServiceService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"] }]; }, { selfClosingAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selfClosingAlert', { static: false }]
        }] }); })();


/***/ }),

/***/ "RG4Z":
/*!**********************************************!*\
  !*** ./src/app/fetchdata-service.service.ts ***!
  \**********************************************/
/*! exports provided: FetchdataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchdataServiceService", function() { return FetchdataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FetchdataServiceService {
    constructor(http) {
        this.http = http;
    }
    getData(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/searchResults", { params });
        return states;
    }
    getTrendingMovies() {
        const states = this.http.get("/api/trendingMovies");
        return states;
    }
    capLocalStorage(states) {
        var tempArray = [];
        for (var i = 0; i < 24; i++) {
            tempArray.push((states[i]));
        }
        var removeIdList = [];
        for (var i = 24; i < states.length; i++) {
            removeIdList.push(states[i]["id"]);
        }
        var jsonObj = JSON.parse(window.localStorage.getItem("visitedList"));
        for (var i = 0; i < removeIdList.length; i++) {
            console.log(removeIdList[i]);
            delete jsonObj[removeIdList[i]];
        }
        window.localStorage.setItem("visitedList", JSON.stringify(jsonObj));
        return tempArray;
    }
    createSortedVisitedListArray() {
        var states = [];
        var jsonObj = JSON.parse(window.localStorage.getItem("visitedList"));
        for (var x in jsonObj) {
            states.push(jsonObj[x]);
        }
        states.sort(function (a, b) {
            var x = b["time"];
            var y = a["time"];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        if (states.length >= 25) {
            states = this.capLocalStorage(states);
        }
        return states;
    }
    getContinueWatching_1() {
        const sortedArray = this.createSortedVisitedListArray();
        const states = [];
        for (var i = 0; i < sortedArray.length; i++) {
            var innerArray = [];
            innerArray.push(sortedArray[i]);
            states.push(innerArray);
        }
        return states;
    }
    getContinueWatching() {
        const sortedArray = this.createSortedVisitedListArray();
        const states = [];
        var innerArray = [];
        var count = 0;
        for (var i = 0; i < sortedArray.length; i++) {
            if (count != 0 && count % 6 == 0) {
                states.push(innerArray);
                innerArray = [];
            }
            innerArray.push(sortedArray[i]);
            count++;
        }
        if (innerArray.length != 0)
            states.push(innerArray);
        return states;
    }
    getPopularMovies() {
        const states = this.http.get("/api/popularMovies/");
        return states;
    }
    getPopularMovies_1() {
        const states = this.http.get("/api/popularMovies1/");
        return states;
    }
    getTopRatedMovies() {
        const states = this.http.get("/api/topRatedMovies");
        return states;
    }
    getTopRatedMovies_1() {
        const states = this.http.get("/api/topRatedMovies1");
        return states;
    }
    getTrendingMoviesAll() {
        const states = this.http.get("/api/trendingMoviesAll");
        return states;
    }
    getTrendingMoviesAll_1() {
        const states = this.http.get("/api/trendingMoviesAll1");
        return states;
    }
    getPopularTVShows() {
        const states = this.http.get("/api/popularTVShows/");
        return states;
    }
    getPopularTVShows_1() {
        const states = this.http.get("/api/popularTVShows1/");
        return states;
    }
    getTopRatedTVShows() {
        const states = this.http.get("/api/topRatedTVShows/");
        return states;
    }
    getTopRatedTVShows_1() {
        const states = this.http.get("/api/topRatedTVShows1/");
        return states;
    }
    getTrendingTVShows() {
        const states = this.http.get("/api/trendingTVShows/");
        return states;
    }
    getTrendingTVShows_1() {
        const states = this.http.get("/api/trendingTVShows1/");
        return states;
    }
    getRecommendedMovies(movieId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', movieId);
        const states = this.http.get("/api/recommendedMovies/", { params });
        return states;
    }
    getRecommendedMovies_1(movieId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', movieId);
        const states = this.http.get("/api/recommendedMovies1/", { params });
        return states;
    }
    getSimilarMovies(movieId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', movieId);
        const states = this.http.get("/api/similarMovies/", { params });
        return states;
    }
    getSimilarMovies_1(movieId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', movieId);
        const states = this.http.get("/api/similarMovies1/", { params });
        return states;
    }
    getRecommendedTV(movieId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', movieId);
        const states = this.http.get("/api/recommendedTV/", { params });
        return states;
    }
    getRecommendedTV_1(movieId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', movieId);
        const states = this.http.get("/api/recommendedTV1/", { params });
        return states;
    }
    getSimilarTV(movieId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', movieId);
        const states = this.http.get("/api/similarTV/", { params });
        return states;
    }
    getSimilarTV_1(movieId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', movieId);
        const states = this.http.get("/api/similarTV1/", { params });
        return states;
    }
    getMovieVideo(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getMovieVideo/", { params });
        return states;
    }
    getMovieDetails(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getMovieDetails/", { params });
        return states;
    }
    getMovieCast(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getMovieCast/", { params });
        return states;
    }
    getMovieReviews(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getMovieReviews/", { params });
        return states;
    }
    getTVVideo(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getTVVideo/", { params });
        return states;
    }
    getTVDetails(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getTVDetails/", { params });
        return states;
    }
    getTVCast(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getTVCast/", { params });
        return states;
    }
    getTVReviews(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getTVReviews/", { params });
        return states;
    }
    getCastDetails(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getCastDetails/", { params });
        return states;
    }
    getCastExternalIds(query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('params', query);
        const states = this.http.get("/api/getCastExternalIds/", { params });
        return states;
    }
}
FetchdataServiceService.ɵfac = function FetchdataServiceService_Factory(t) { return new (t || FetchdataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FetchdataServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FetchdataServiceService, factory: FetchdataServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FetchdataServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fetchdata_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchdata-service.service */ "RG4Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function AppComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", r_r2["image"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", r_r2.title)("term", t_r3);
} }
const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
const statesWithFlags = [
    { 'title': 'Alabama', 'image': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'title': 'Alaska', 'image': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' }
];
class AppComponent {
    constructor(srv, router) {
        this.srv = srv;
        this.router = router;
        this.isMenuCollapsed = true;
        this.title = 'my-app';
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(term => {
            if (term === '')
                return [];
            else {
                this.srv.getData(term).subscribe(res => this.result = res);
                return this.result;
            }
        }));
        this.formatter = (x) => x.title;
    }
    selectedItem(item) {
        var jsonObj = {};
        item.item.title = '';
        this.isMenuCollapsed = true;
        this.router.navigate(['/watch/' + item.item.media_type, item.item.id]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetchdata_service_service__WEBPACK_IMPORTED_MODULE_2__["FetchdataServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 17, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [2, "margin", "0", "padding", "0", "position", "relative", "min-height", "100vh"], [1, "navbar", "navbar-expand-md", "sticky-top", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", 2, "float", "right"], ["routerLink", "/", 1, "nav-link", 3, "click"], ["routerLink", "/mylist", 1, "nav-link", 3, "click"], [1, "navbar-nav", "ml-auto", 2, "padding", "0", "margin", "0", "float", "left"], [1, "nav-item"], ["rt", ""], ["id", "typeahead-template", "onblur", "this.value=''", "placeholder", "Search", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "selectItem", "ngModelChange"], ["id", "footer"], [2, "max-width", "20rem", "overflow", "hidden", "color", "white"], [1, "mr-1", 2, "width", "3rem", 3, "src"], [3, "result", "term"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_17_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_ng_template_23_Template, 3, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectItem", function AppComponent_Template_input_selectItem_25_listener($event) { return ctx.selectedItem($event); })("ngModelChange", function AppComponent_Template_input_ngModelChange_25_listener($event) { return ctx.model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Powered by TMDB, Developed by Priyanshi Vora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], styles: ["body[_ngcontent-%COMP%]{\r\n\tbackground-color: #050a30;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n\tbackground-color:#000b1d;\r\n\tpadding-left:3rem;\r\n\tpadding-right:3rem;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus {\r\n\r\n    outline:none !important;\r\n    outline-width: 0 !important;\r\n    box-shadow: none;\r\n    -moz-box-shadow: none;\r\n    -webkit-box-shadow: none;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%]{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n  ::-webkit-scrollbar {\r\n  border: 3px solid grey;\r\n  border-radius:10px;\r\n  width:0.6rem;\r\n}\r\n\r\n  ::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  border-radius:10px;\r\n}\r\n\r\n  ::-webkit-scrollbar-thumb {\r\n  background-color: darkgrey;\r\n  border-radius:10px;\r\n  \r\n}\r\n\r\n  .navbar-nav .dropdown-menu{\r\n\tbackground-color:#050a30;\r\n\tborder: 1px solid grey;\r\n}\r\n\r\n#typeahead-template[_ngcontent-%COMP%]{\r\n\tbackground-color:#000b1d;\r\n\tborder:0;\r\n\tborder-radius:0;\r\n\tborder-bottom: 3px solid white;\r\n\tcolor: white;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%]{\r\n\tmargin-top:15px;\r\n\tposition:absolute;\r\n    bottom: 0;\r\n\twidth:100%;\r\n\tcolor: white;\r\n\tbackground-image: linear-gradient(#050a30 8%, black 30%);\r\n\tfont-size: 1rem;\r\n\ttext-align:center;\r\n\t\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjs7QUFFcEI7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLFFBQVE7Q0FDUixlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLFlBQVk7QUFDYjs7QUFHQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7SUFDZCxTQUFTO0NBQ1osVUFBVTtDQUNWLFlBQVk7Q0FDWix3REFBd0Q7Q0FDeEQsZUFBZTtDQUNmLGlCQUFpQjs7O0FBR2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwNTBhMzA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm5hdntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMwMDBiMWQ7XHJcblx0cGFkZGluZy1sZWZ0OjNyZW07XHJcblx0cGFkZGluZy1yaWdodDozcmVtO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHJcbiAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWx7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICB3aWR0aDowLjZyZW07XHJcbn1cclxuIFxyXG46Om5nLWRlZXAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcbiBcclxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51e1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzA1MGEzMDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4jdHlwZWFoZWFkLXRlbXBsYXRle1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzAwMGIxZDtcclxuXHRib3JkZXI6MDtcclxuXHRib3JkZXItcmFkaXVzOjA7XHJcblx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiNmb290ZXJ7XHJcblx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDUwYTMwIDglLCBibGFjayAzMCUpO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcclxuXHRcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _fetchdata_service_service__WEBPACK_IMPORTED_MODULE_2__["FetchdataServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _home_trending_movies_carousel_trending_movies_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/trending-movies-carousel/trending-movies-carousel.component */ "7fYd");
/* harmony import */ var _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./watch-movie/watch-movie.component */ "F/LR");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _home_movie_carousel_component_movie_carousel_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/movie-carousel-component/movie-carousel-component.component */ "1XML");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__["MylistComponent"],
        _home_trending_movies_carousel_trending_movies_carousel_component__WEBPACK_IMPORTED_MODULE_9__["TrendingMoviesCarouselComponent"],
        _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_10__["WatchMovieComponent"],
        _home_movie_carousel_component_movie_carousel_component_component__WEBPACK_IMPORTED_MODULE_12__["MovieCarouselComponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__["MylistComponent"],
                    _home_trending_movies_carousel_trending_movies_carousel_component__WEBPACK_IMPORTED_MODULE_9__["TrendingMoviesCarouselComponent"],
                    _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_10__["WatchMovieComponent"],
                    _home_movie_carousel_component_movie_carousel_component_component__WEBPACK_IMPORTED_MODULE_12__["MovieCarouselComponentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watch-movie/watch-movie.component */ "F/LR");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'mylist', component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_3__["MylistComponent"] },
    { path: 'watch/:media_type/:id', component: _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_4__["WatchMovieComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map