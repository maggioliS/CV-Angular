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
var CvModel_1;
const mongo_1 = require("@hapiness/mongo");
const joi_1 = require("joi");
let CvModel = CvModel_1 = class CvModel extends mongo_1.Model {
    /**
     * Class constructor
     *
     * @param {MongoClientService} _mongoClientService
     */
    constructor(_mongoClientService) {
        // call parent constructor
        super(CvModel_1);
        this._mongoClientService = _mongoClientService;
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
                type: joi_1.string,
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
        });
    }
};
CvModel = CvModel_1 = __decorate([
    mongo_1.MongoModel({
        adapter: 'mongoose',
        collection: 'cv'
    }),
    __metadata("design:paramtypes", [mongo_1.MongoClientService])
], CvModel);
exports.CvModel = CvModel;
//# sourceMappingURL=cv.model.js.map