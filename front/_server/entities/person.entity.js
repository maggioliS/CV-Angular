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
const Joi = require("joi");
const address_entity_1 = require("./address.entity");
const id_entity_1 = require("./id.entity");
class PersonEntity extends entityts_1.EntityExtends(id_entity_1.IdEntity) {
    // add more validation on entity
    static more() {
        return Joi.object({
            email: Joi.string().email(),
            phone: Joi.string().regex(/^\d{10}$/)
        });
    }
}
__decorate([
    entityts_1.Type(String),
    __metadata("design:type", String)
], PersonEntity.prototype, "photo", void 0);
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Min(2),
    entityts_1.Type(String),
    __metadata("design:type", String)
], PersonEntity.prototype, "firstname", void 0);
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Min(2),
    entityts_1.Type(String),
    __metadata("design:type", String)
], PersonEntity.prototype, "lastname", void 0);
__decorate([
    entityts_1.Strip(entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(String),
    __metadata("design:type", String)
], PersonEntity.prototype, "entity", void 0);
__decorate([
    entityts_1.Strip(entityts_1.Entity.Mode.CREATE),
    entityts_1.Required(),
    __metadata("design:type", Number)
], PersonEntity.prototype, "birthDate", void 0);
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(String),
    __metadata("design:type", String)
], PersonEntity.prototype, "email", void 0);
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(String),
    __metadata("design:type", String)
], PersonEntity.prototype, "phone", void 0);
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(address_entity_1.AddressEntity),
    __metadata("design:type", address_entity_1.AddressEntity)
], PersonEntity.prototype, "address", void 0);
__decorate([
    entityts_1.Required(entityts_1.Entity.Mode.READ, entityts_1.Entity.Mode.UPDATE, entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(Boolean),
    __metadata("design:type", Boolean)
], PersonEntity.prototype, "isManager", void 0);
__decorate([
    entityts_1.Strip(entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(String),
    __metadata("design:type", String)
], PersonEntity.prototype, "manager", void 0);
__decorate([
    entityts_1.Strip(entityts_1.Entity.Mode.CREATE),
    entityts_1.Type(String),
    __metadata("design:type", String)
], PersonEntity.prototype, "managerId", void 0);
exports.PersonEntity = PersonEntity;
//# sourceMappingURL=person.entity.js.map