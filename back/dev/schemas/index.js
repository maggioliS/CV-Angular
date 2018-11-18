"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.HELLO_NAME_PARAMETER = Joi.string().min(3).max(10);
exports.HELLO_NAME_RESPONSE = Joi.string().required();
exports.section = Joi.object().keys({
    titre: Joi.string().min(2),
    date: Joi.string(),
    description: Joi.string()
});
exports.sections = Joi.object().keys({
    s1: exports.section,
    s2: exports.section,
    s3: exports.section,
    s4: exports.section,
    s5: exports.section,
    s6: exports.section,
    s7: exports.section,
    s8: exports.section,
    s9: exports.section,
    s10: exports.section
});
exports.CV_PAYLOAD = Joi.object().keys({
    titre: Joi.string().min(5),
    nom: Joi.string().min(2),
    prenom: Joi.string().min(2),
    photo: Joi.string(),
    adresse: Joi.object().keys({
        street: Joi.string().required(),
        postalCode: Joi.number().required(),
        city: Joi.string().required()
    }).required(),
    email: Joi.string().email().required(),
    permis: Joi.boolean().required(),
    vehicule: Joi.boolean().required(),
    age: Joi.number(),
    telephone: Joi.string().regex(/^\d{10}$/).required(),
    nationalite: Joi.string(),
    experience: exports.sections,
    formation: exports.sections,
    hobbie: exports.sections
});
exports.CV_RESPONSE = Joi.object().keys({
    titre: Joi.reach(exports.CV_PAYLOAD, 'titre'),
    nom: Joi.reach(exports.CV_PAYLOAD, 'nom'),
    prenom: Joi.reach(exports.CV_PAYLOAD, 'prenom'),
    photo: Joi.reach(exports.CV_PAYLOAD, 'photo'),
    adresse: Joi.reach(exports.CV_PAYLOAD, 'adresse'),
    email: Joi.reach(exports.CV_PAYLOAD, 'email'),
    permis: Joi.reach(exports.CV_PAYLOAD, 'permis'),
    vehicule: Joi.reach(exports.CV_PAYLOAD, 'vehicule'),
    age: Joi.reach(exports.CV_PAYLOAD, 'age'),
    telephone: Joi.reach(exports.CV_PAYLOAD, 'telephone'),
    nationalite: Joi.reach(exports.CV_PAYLOAD, 'nationalite'),
    experience: Joi.reach(exports.CV_PAYLOAD, 'experience'),
    formation: Joi.reach(exports.CV_PAYLOAD, 'formation'),
    hobbie: Joi.reach(exports.CV_PAYLOAD, 'hobbie')
});
exports.CVS_RESPONSE = Joi.array().items(exports.CV_RESPONSE).unique().min(1);
//# sourceMappingURL=index.js.map