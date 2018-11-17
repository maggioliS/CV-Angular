import * as Joi from 'joi';

export const HELLO_NAME_PARAMETER = Joi.string().min(3).max(10);
export const HELLO_NAME_RESPONSE = Joi.string().required();

export const ID_PARAMETER = Joi.string().required();

export const PERSON_PAYLOAD = Joi.object().keys({
    photo: Joi.string(),
    firstname: Joi.string().min(2),
    lastname: Joi.string().min(2),
    entity: Joi.string(),
    birthDate: Joi.date().timestamp().raw(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^\d{10}$/).required(),
    address: Joi.object().keys({
        street: Joi.string().required(),
        postalCode: Joi.number().required(),
        city: Joi.string().required()
    }).required(),
    isManager: Joi.boolean().required(),
    manager: Joi.string(),
    managerId: Joi.string()
});

export const PERSON_RESPONSE = Joi.object().keys({
    id: ID_PARAMETER,
    photo: Joi.reach(PERSON_PAYLOAD, 'photo'),
    firstname: Joi.reach(PERSON_PAYLOAD, 'firstname'),
    lastname: Joi.reach(PERSON_PAYLOAD, 'lastname'),
    entity: Joi.reach(PERSON_PAYLOAD, 'entity'),
    birthDate: Joi.reach(PERSON_PAYLOAD, 'birthDate'),
    email: Joi.reach(PERSON_PAYLOAD, 'email'),
    phone: Joi.reach(PERSON_PAYLOAD, 'phone'),
    address: Joi.reach(PERSON_PAYLOAD, 'address'),
    isManager: Joi.reach(PERSON_PAYLOAD, 'isManager'),
    manager: Joi.reach(PERSON_PAYLOAD, 'manager'),
    managerId: Joi.reach(PERSON_PAYLOAD, 'managerId')
});

export const PEOPLE_RESPONSE = Joi.array().items(
    PERSON_RESPONSE
).unique().min(1);
