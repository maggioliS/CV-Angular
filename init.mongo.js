/**
 * This script is to insert initial data inside the collection people of the database nwt
 * You can use it with mongo-shell or a tool like Robo3T
 */

// Insert people array
db.getCollection('cvs').insertMany([
{
    "adresse" : {
        "street" : "7 Rue de l'abatoir",
        "postalCode" : 54500,
        "city" : "Vandoeuvre"
    },
    "experience" : {
        "s1" : {
            "titre" : "Boucher-Charcutier",
            "date" : "01/12/12 - 25/06/13",
            "description" : "Découpe de viande"
        },
        "s2" : {
            "titre" : "Boucher-Charcutier",
            "date" : "01/12/14 - 25/06/15",
            "description" : "Découpe de Lard"
        }
    },
    "formation" : {
        "s1" : {
            "titre" : "Licence informatique",
            "date" : "2013-2017",
            "description" : "Faculte des sciences et technologie - Nancy"
        },
        "s2" : {
            "titre" : "Master Ingenierie Logicielle",
            "date" : "2017-2019",
            "description" : "Faculte des sciences et technologie - Nancy"
        }
    },
    "hobbie" : {
        "s1" : {
            "titre" : "Badminton",
            "date" : "string",
            "description" : "string"
        },
        "s2" : {
            "titre" : "Snowboard",
            "date" : "string",
            "description" : "string"
        }
    },
    "titre" : "Boucher",
    "nom" : "Maggioli",
    "prenom" : "Steve",
    "photo" : "https://pre00.deviantart.net/e6f6/th/pre/f/2014/159/e/a/pikachu_portrait__friend_gift__by_justinohadi-d7lm20g.png",
    "email" : "steve.maggioli@mail.fr",
    "permis" : true,
    "vehicule" : false,
    "age" : 25,
    "telephone" : "0495849584"
},
{
    "adresse" : {
        "street" : "7 Rue B",
        "postalCode" : 54500,
        "city" : "Vandoeuvre"
    },
    "experience" : {
        "s1" : {
            "titre" : "Facteur - La Poste",
            "date" : "01/12/12 - 25/06/13",
            "description" : "Distribution courrier / vente"
        }
    },
    "formation" : {
        "s1" : {
            "titre" : "Licence informatique",
            "date" : "2013-2017",
            "description" : "Faculte des sciences et technologie - Nancy"
        },
        "s2" : {
            "titre" : "Master Ingenierie Logicielle",
            "date" : "2017-2019",
            "description" : "Faculte des sciences et technologie - Nancy"
        }
    },
    "hobbie" : {
        "s1" : {
            "titre" : "Badminton",
            "date" : "string",
            "description" : "string"
        },
        "s2" : {
            "titre" : "Snowboard",
            "date" : "string",
            "description" : "string"
        },
        "s3" : {
            "titre" : "Guitare",
            "date" : "string",
            "description" : "string"
        },
        "s4" : {
            "titre" : "Jeux video",
            "date" : "string",
            "description" : "string"
        }
    },
    "titre" : "Developpeur Angular",
    "nom" : "Maggioli",
    "prenom" : "Steve",
    "photo" : "https://pre00.deviantart.net/e6f6/th/pre/f/2014/159/e/a/pikachu_portrait__friend_gift__by_justinohadi-d7lm20g.png",
    "email" : "steve.maggioli@mail.fr",
    "permis" : true,
    "vehicule" : true,
    "age" : 25,
    "telephone" : "0495849584",
    "nationalite" : "FR"
},
{
    "adresse" : {
        "street" : "7 Rue B",
        "postalCode" : 54500,
        "city" : "Vandoeuvre"
    },
    "experience" : {
        "s1" : {
            "titre" : "DEV",
            "date" : "01/12/12 - 25/06/13",
            "description" : "DEV"
        }
    },
    "formation" : {
        "s1" : {
            "titre" : "Licence informatique",
            "date" : "2013-2017",
            "description" : "Faculte des sciences et technologie - Nancy"
        },
        "s2" : {
            "titre" : "Master Ingenierie Logicielle",
            "date" : "2017-2019",
            "description" : "Faculte des sciences et technologie - Nancy"
        }
    },
    "hobbie" : {
        "s1" : {
            "titre" : "Badminton",
            "date" : "string",
            "description" : "string"
        },
        "s2" : {
            "titre" : "Snowboard",
            "date" : "string",
            "description" : "string"
        },
        "s3" : {
            "titre" : "Guitare",
            "date" : "string",
            "description" : "string"
        },
        "s4" : {
            "titre" : "Jeux video",
            "date" : "string",
            "description" : "string"
        }
    },
    "titre" : "Developpeur Angular",
    "nom" : "El Hadrachi",
    "prenom" : "Hicham",
    "photo" : "https://pre00.deviantart.net/e6f6/th/pre/f/2014/159/e/a/pikachu_portrait__friend_gift__by_justinohadi-d7lm20g.png",
    "email" : "hicham@mail.fr",
    "permis" : true,
    "vehicule" : true,
    "age" : 25,
    "telephone" : "0495849584",
    "nationalite" : "FR"
}
]);

