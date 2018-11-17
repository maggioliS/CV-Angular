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
const entityts_1 = require("@juneil/entityts");
class AddressEntity extends entityts_1.Entity {
}
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(String),
    __metadata("design:type", String)
], AddressEntity.prototype, "street", void 0);
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(String),
    __metadata("design:type", String)
], AddressEntity.prototype, "postalCode", void 0);
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(String),
    __metadata("design:type", String)
], AddressEntity.prototype, "city", void 0);
exports.AddressEntity = AddressEntity;
//# sourceMappingURL=address.entity.js.map