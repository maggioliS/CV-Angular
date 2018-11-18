import { Model, MongoClientService, MongoModel } from '@hapiness/mongo';
import {string} from 'joi';

@MongoModel({
    adapter: 'mongoose',
    collection: 'cv'
})
export class CvModel extends Model {
    // property to store schema
    readonly schema: any;

    /**
     * Class constructor
     *
     * @param {MongoClientService} _mongoClientService
     */
    constructor(private _mongoClientService: MongoClientService) {
        // call parent constructor
        super(CvModel);

        // get dao
        const dao = this._mongoClientService.getDao(this.connectionOptions);
        // create schema
        this.schema = new dao.Schema({
            titre: {
                type: String,
                trim: true,
                required: true
            },
            nom: {
                type: String,
                required: true,
                minlength: 2,
                trim: true
            },
            prenom: {
                type: String,
                required: true,
                minlength: 2,
                trim: true
            },
            photo: {
                type: String,
                trim: true
            },
            adresse: {
                required: true,
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
            email: {
                type: String,
                trim: true,
                required: true
            },
            permis: {
                type: Boolean,
                trim: true,
                required: true
            },
            vehicule: {
                type: Boolean,
                trim: true,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
            telephone: {
                type: String,
                required: true,
                match: /^\d{10}$/
            },
            nationalite: {
                type: string,
                trim: true
            },
            experience: {
                sections: {
                    s1: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s2: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s3: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s4: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s5: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s6: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s7: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s8: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s9: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s10: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    }
                }
            },
            formation: {
                sections: {
                    s1: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s2: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s3: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s4: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s5: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s6: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s7: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s8: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s9: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s10: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    }
                }
            },
            hobbie: {
                sections: {
                    s1: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s2: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s3: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s4: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s5: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s6: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s7: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s8: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s9: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    },
                    s10: {
                        titre: {
                            type: String,
                            required: true,
                            trim: true
                        },
                        date: {
                            type: String,
                            trim: true
                        },
                        description: {
                            type: String,
                            trim: true
                        }
                    }
                }
            }
        }, {
            versionKey: false
        });

        // implement virtual method toJSON to delete _id field and stringify all ObjectId field
        this.schema.set('toJSON', {
                virtuals: true,
                transform: function (doc, ret) {
                    delete ret._titre;
                    if (!!ret.titre) {
                        ret.titre = doc.titre.toString();
                    }
                    return ret;
                }
            }
        );
    }
}
