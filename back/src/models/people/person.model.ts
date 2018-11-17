import { Model, MongoClientService, MongoModel } from '@hapiness/mongo';
import * as mongoose from 'mongoose';

@MongoModel({
    adapter: 'mongoose',
    collection: 'person'
})
export class PersonModel extends Model {
    // property to store schema
    readonly schema: any;

    /**
     * Class constructor
     *
     * @param {MongoClientService} _mongoClientService
     */
    constructor(private _mongoClientService: MongoClientService) {
        // call parent constructor
        super(PersonModel);

        // get dao
        const dao = this._mongoClientService.getDao(this.connectionOptions);

        // create schema
        this.schema = new dao.Schema({
            photo: {
                type: String,
                trim: true
            },
            firstname: {
                type: String,
                required: true,
                minlength: 2,
                trim: true
            },
            lastname: {
                type: String,
                required: true,
                minlength: 2,
                trim: true
            },
            entity: {
                type: String,
                trim: true
            },
            birthDate: {
                type: Date
            },
            email: {
                type: String,
                required: true,
                trim: true
            },
            phone: {
                type: String,
                required: true,
                match: /^\d{10}$/
            },
            address: {
                street: {
                    type: String,
                    required: true,
                    trim: true
                },
                postalCode: {
                    type: Number,
                    required: true,
                },
                city: {
                    type: String,
                    required: true,
                    trim: true
                }
            },
            isManager: {
                type: Boolean,
                required: true
            },
            manager: {
                type: String,
                trim: true
            },
            managerId: {
                type: mongoose.Schema.Types.ObjectId
            }
        }, {
            versionKey: false
        });

        // implement virtual method toJSON to delete _id field and stringify all ObjectId field
        this.schema.set('toJSON', {
                virtuals: true,
                transform: function (doc, ret) {
                    delete ret._id;
                    if (!!ret.managerId) {
                        ret.managerId = doc.managerId.toString();
                    }
                    return ret;
                }
            }
        );
    }
}
