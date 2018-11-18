import * as Joi from 'joi';


export const HELLO_NAME_PARAMETER = Joi.string().min(3).max(10);
export const HELLO_NAME_RESPONSE = Joi.string().required();

export const section = Joi.object().keys({
    titre: Joi.string().min(2),
    date: Joi.string(),
    description: Joi.string()
});
export const sections = Joi.object().keys({
    s1: section,
    s2: section,
    s3: section,
    s4: section,
    s5: section,
    s6: section,
    s7: section,
    s8: section,
    s9: section,
    s10: section
});

export const CV_PAYLOAD = Joi.object().keys({
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
    experience: sections,
    formation: sections,
    hobbie: sections
});


export const CV_RESPONSE = Joi.object().keys({
    titre: Joi.reach(CV_PAYLOAD, 'titre'),
    nom: Joi.reach(CV_PAYLOAD, 'nom'),
    prenom: Joi.reach(CV_PAYLOAD, 'prenom'),
    photo: Joi.reach(CV_PAYLOAD, 'photo'),
    adresse: Joi.reach(CV_PAYLOAD, 'adresse'),
    email: Joi.reach(CV_PAYLOAD, 'email'),
    permis: Joi.reach(CV_PAYLOAD, 'permis'),
    vehicule: Joi.reach(CV_PAYLOAD, 'vehicule'),
    age: Joi.reach(CV_PAYLOAD, 'age'),
    telephone: Joi.reach(CV_PAYLOAD, 'telephone'),
    nationalite: Joi.reach(CV_PAYLOAD, 'nationalite'),
    experience: Joi.reach(CV_PAYLOAD, 'experience'),
    formation: Joi.reach(CV_PAYLOAD, 'formation'),
    hobbie: Joi.reach(CV_PAYLOAD, 'hobbie')
});

export const CVS_RESPONSE = Joi.array().items(
    CV_RESPONSE
).unique().min(1);
