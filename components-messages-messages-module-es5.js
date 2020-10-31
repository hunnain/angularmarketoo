function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-messages-messages-module"], {
  /***/
  "./src/app/components/messages/chat-box/chat-box.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/messages/chat-box/chat-box.component.ts ***!
    \********************************************************************/

  /*! exports provided: ChatBoxComponent */

  /***/
  function srcAppComponentsMessagesChatBoxChatBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function () {
      return ChatBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/components/feather-icons/feather-icons.component */
    "./src/app/shared/components/feather-icons/feather-icons.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "right": a0
      };
    };

    function ChatBoxComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, msg_r1.user_id == ctx_r0.user.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r1.message);
      }
    }

    var ChatBoxComponent = /*#__PURE__*/function () {
      function ChatBoxComponent() {
        _classCallCheck(this, ChatBoxComponent);

        this.user = {};
        this.messages = [];
        this.sendMsg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ChatBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatBoxComponent;
    }();

    ChatBoxComponent.ɵfac = function ChatBoxComponent_Factory(t) {
      return new (t || ChatBoxComponent)();
    };

    ChatBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatBoxComponent,
      selectors: [["app-chat-box"]],
      inputs: {
        user: "user",
        messages: "messages"
      },
      outputs: {
        sendMsg: "sendMsg"
      },
      decls: 28,
      vars: 6,
      consts: [[2, "height", "100%"], [1, "row", 2, "height", "100%"], [1, "col-sm-12"], [1, "card", "chat-container"], [1, "card-header"], [1, "list"], [1, "clearfix"], ["alt", "", 1, "rounded-circle", "user-image", "blur-up", "lazyloaded", 3, "src"], [1, "status-circle", "online"], [1, "about"], [1, "name"], [1, "status"], [1, "card-body", "content"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "action-footer"], [1, "needs-validation"], [2, "display", "grid", "grid-template-columns", "1fr 9fr 1fr", "margin-top", "5px"], [1, "icon-btn"], [1, "font-primary", 2, "color", "#fff !important", 3, "icon"], ["type", "text", "placeholder", "Type here"], [3, "ngClass"], [1, "msg"]],
      template: function ChatBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChatBoxComponent_li_16_Template, 3, 4, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-feather-icons", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-feather-icons", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.status, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "paperclip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "send");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__["FeatherIconsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".chat-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.chat-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  border-bottom: 1px solid #c1c1c1;\n}\n.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 20px;\n}\n.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  background-color: #e1ffc7;\n  color: #000;\n}\n.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  color: #898989;\n  width: 100%;\n  background-color: #dddddd;\n  border: 1px solid #f8f8f9;\n  padding: 10px 15px;\n  border-radius: 25px;\n  letter-spacing: 1px;\n}\n.action-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  background-color: #c1c1c1;\n  height: 45px;\n}\n.action-footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  border: none;\n  outline: transparent;\n  padding-left: 10px;\n}\n.action-footer[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color: #c1c1c1;\n}\n.action-footer[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  cursor: pointer;\n}\n.card-header[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  float: left;\n  width: 52px;\n  height: 52px;\n  margin-right: 5px;\n}\n.card-header[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 5px;\n  padding-left: 10px;\n}\n.card-header[_ngcontent-%COMP%]   .friend-list[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9jaGF0LWJveC9DOlxcd29ya1xcbWFya2V0b29cXGZyb250ZW5kXFxhbmd1bGFybWFya2V0b28vc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxjaGF0LWJveFxcY2hhdC1ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvY2hhdC1ib3gvY2hhdC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0FDRVI7QURBSTtFQUNJLGlCQUFBO0FDRVI7QUREUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0daO0FEQUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRGFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEV0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDVFI7QURXSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ1RSO0FEVVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUlo7QURlSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDWlI7QURjSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNaUjtBRGNJO0VBQ0UsaUJBQUE7QUNaTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvY2hhdC1ib3gvY2hhdC1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFjMWMxO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnR7ICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgbGl7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgbGkucmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAubXNne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmZmM3O1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250ZW50IC5tc2d7XHJcbiAgICAgICAgY29sb3I6ICM4OTg5ODk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOGY5O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgLy8gOmFmdGVyIHtcclxuICAgICAgICAvLyAgICAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2UxZmZjNztcclxuICAgICAgICAvLyAgICAgdG9wOiAwO1xyXG4gICAgICAgIC8vICAgICByaWdodDogLTEwcHg7XHJcblxyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbi5hY3Rpb24tZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5pY29uLWJ0bntcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIC51c2VyLWltYWdle1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweFxyXG4gICAgfVxyXG4gICAgLmFib3V0IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZyaWVuZC1saXN0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfSIsIi5jaGF0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNoYXQtY29udGFpbmVyIC5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWMxYzE7XG59XG4uY2hhdC1jb250YWluZXIgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDIwcHg7XG59XG4uY2hhdC1jb250YWluZXIgLmNvbnRlbnQgbGkge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmNoYXQtY29udGFpbmVyIC5jb250ZW50IGxpLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2hhdC1jb250YWluZXIgLmNvbnRlbnQgbGkucmlnaHQgLm1zZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWZmYzc7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNoYXQtY29udGFpbmVyIC5jb250ZW50IC5tc2cge1xuICBjb2xvcjogIzg5ODk4OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjk7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmFjdGlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XG4gIGhlaWdodDogNDVweDtcbn1cbi5hY3Rpb24tZm9vdGVyIGlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmFjdGlvbi1mb290ZXIgLmljb24tYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xufVxuLmFjdGlvbi1mb290ZXIgLmljb24tYnRuIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlciAudXNlci1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jYXJkLWhlYWRlciAuYWJvdXQge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY2FyZC1oZWFkZXIgLmZyaWVuZC1saXN0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-box',
          templateUrl: './chat-box.component.html',
          styleUrls: ['./chat-box.component.scss']
        }]
      }], function () {
        return [];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        messages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sendMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/messages/list-message/list-message.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/messages/list-message/list-message.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ListMessageComponent */

  /***/
  function srcAppComponentsMessagesListMessageListMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListMessageComponent", function () {
      return ListMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/components/right-sidebar/right-sidebar.component */
    "./src/app/shared/components/right-sidebar/right-sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../chat-box/chat-box.component */
    "./src/app/components/messages/chat-box/chat-box.component.ts");

    function ListMessageComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click on user to start chat ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListMessageComponent_app_chat_box_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-box", 9);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r1.selectedUser)("messages", ctx_r1.dummyMessages);
      }
    }

    var ListMessageComponent = /*#__PURE__*/function () {
      function ListMessageComponent() {
        _classCallCheck(this, ListMessageComponent);

        this.selectedUser = {};
        this.openChatScreen = false;
        this.dummyMessages = [{
          user_id: 1,
          message: 'hello there'
        }, {
          user_id: 2,
          message: 'Hi, how are you?'
        }, {
          user_id: 1,
          message: "I'm, how are you?"
        }];
      }

      _createClass(ListMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openChat",
        value: function openChat(user) {
          this.openChatScreen = true;
          console.log("user", user);
          this.selectedUser = user;
        }
      }]);

      return ListMessageComponent;
    }();

    ListMessageComponent.ɵfac = function ListMessageComponent_Factory(t) {
      return new (t || ListMessageComponent)();
    };

    ListMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListMessageComponent,
      selectors: [["app-list-message"]],
      decls: 8,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "col-md-4"], [1, "right-sidebar", "chat-side-bar"], [3, "selectUser"], [1, "col12", "col-md-8"], ["class", "no-chat-msg", 4, "ngIf"], [3, "user", "messages", 4, "ngIf"], [1, "no-chat-msg"], [3, "user", "messages"]],
      template: function ListMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-right-sidebar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectUser", function ListMessageComponent_Template_app_right_sidebar_selectUser_4_listener($event) {
            return ctx.openChat($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListMessageComponent_div_6_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListMessageComponent_app_chat_box_7_Template, 1, 2, "app-chat-box", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.openChatScreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openChatScreen);
        }
      },
      directives: [_shared_components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["RightSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_3__["ChatBoxComponent"]],
      styles: [".chat-side-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 9px rgba(191, 191, 191, 0.36);\n  right: 0 !important;\n  top: 0 !important;\n  position: unset !important;\n}\n\n.no-chat-msg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #c1c1c1;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9saXN0LW1lc3NhZ2UvQzpcXHdvcmtcXG1hcmtldG9vXFxmcm9udGVuZFxcYW5ndWxhcm1hcmtldG9vL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZXNzYWdlc1xcbGlzdC1tZXNzYWdlXFxsaXN0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbGlzdC1tZXNzYWdlL2xpc3QtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzL2xpc3QtbWVzc2FnZS9saXN0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1zaWRlLWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4zNik7XHJcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uby1jaGF0LW1zZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiKDE5MyAxOTMgMTkzKTtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59IiwiLmNoYXQtc2lkZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggcmdiYSgxOTEsIDE5MSwgMTkxLCAwLjM2KTtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4ubm8tY2hhdC1tc2cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNjMWMxYzE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-message',
          templateUrl: './list-message.component.html',
          styleUrls: ['./list-message.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/messages/messages-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/messages/messages-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: MessagesRoutingModule */

  /***/
  function srcAppComponentsMessagesMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesRoutingModule", function () {
      return MessagesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _list_message_list_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-message/list-message.component */
    "./src/app/components/messages/list-message/list-message.component.ts");

    var routes = [{
      path: '',
      component: _list_message_list_message_component__WEBPACK_IMPORTED_MODULE_2__["ListMessageComponent"],
      data: {
        title: "All Messages",
        breadcrumb: "Messages"
      }
    }];

    var MessagesRoutingModule = function MessagesRoutingModule() {
      _classCallCheck(this, MessagesRoutingModule);
    };

    MessagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MessagesRoutingModule
    });
    MessagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MessagesRoutingModule_Factory(t) {
        return new (t || MessagesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MessagesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/messages/messages.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/messages/messages.module.ts ***!
    \********************************************************/

  /*! exports provided: MessagesModule */

  /***/
  function srcAppComponentsMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesModule", function () {
      return MessagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _messages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./messages-routing.module */
    "./src/app/components/messages/messages-routing.module.ts");
    /* harmony import */


    var _list_message_list_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-message/list-message.component */
    "./src/app/components/messages/list-message/list-message.component.ts");
    /* harmony import */


    var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-box/chat-box.component */
    "./src/app/components/messages/chat-box/chat-box.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var MessagesModule = function MessagesModule() {
      _classCallCheck(this, MessagesModule);
    };

    MessagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MessagesModule
    });
    MessagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MessagesModule_Factory(t) {
        return new (t || MessagesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_3__["MessagesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MessagesModule, {
        declarations: [_list_message_list_message_component__WEBPACK_IMPORTED_MODULE_4__["ListMessageComponent"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__["ChatBoxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_3__["MessagesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_list_message_list_message_component__WEBPACK_IMPORTED_MODULE_4__["ListMessageComponent"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__["ChatBoxComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_3__["MessagesRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-messages-messages-module-es5.js.map