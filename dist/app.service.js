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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const Component_1 = require("./core/Component");
const GenericValidationPipe_1 = require("./Validation/Pipes/GenericValidationPipe");
const Resistor_1 = require("./core/Resistor");
const Transistor_1 = require("./core/Transistor");
const Capacitor_1 = require("./core/Capacitor");
const ComponentEnum_1 = require("./enums/ComponentEnum");
let AppService = class AppService {
    constructor(validationPipe) {
        this.validationPipe = validationPipe;
    }
    getHello() {
        return 'Hello World!';
    }
    async getComponentValidation(component) {
        await this.validationPipe.transform(component, { metatype: Component_1.Component });
        switch (component.type) {
            case ComponentEnum_1.ComponentEnum.resistor:
                return await this.validationPipe.transform(component, { metatype: Resistor_1.Resistor });
            case ComponentEnum_1.ComponentEnum.transistor:
                return await this.validationPipe.transform(component, { metatype: Transistor_1.Transistor });
            case ComponentEnum_1.ComponentEnum.capacitor:
                return await this.validationPipe.transform(component, { metatype: Capacitor_1.Capacitor });
            default:
                throw new common_1.BadRequestException("Invalid Component Type!");
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [GenericValidationPipe_1.GenericValidationPipe])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map