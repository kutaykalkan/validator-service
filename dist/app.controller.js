"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const ValidateComponentRequest_1 = require("./dtos/ValidateComponentRequest");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getValidation(request) {
        try {
            if (request.component === undefined)
                throw new common_1.BadRequestException("Component is not defined in request!");
            await this.appService.getComponentValidation(request.component);
        }
        catch (ex) {
            if (Array.isArray(ex.response.message)) {
                const formattedErrors = ex.response.message.map((o) => {
                    return { [o.property]: o.constraints };
                });
                throw new common_1.BadRequestException(formattedErrors);
            }
            else if (ex instanceof common_1.BadRequestException) {
                throw (ex);
            }
            else
                throw new common_1.InternalServerErrorException("An error occured with your request. Please try again later!");
        }
        return request;
    }
};
__decorate([
    (0, common_1.Get)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('Validate'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ValidateComponentRequest_1.ValidateComponentRequest]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getValidation", null);
AppController = __decorate([
    (0, common_1.Controller)('app'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map