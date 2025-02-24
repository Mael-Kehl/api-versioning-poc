const swaggerAutogen = require('swagger-autogen')

const outputFile = './swagger_output.json'
const endpointsFiles = ['./userapi.js']

const doc = {
    info: {
        title: 'User API',
        description: 'API (PoC) de gestion des utilisateurs avec différentes versions.'
    },
    host: 'localhost:3000',  // Mets ici l'URL de ton serveur si en production
    schemes: ['http'],
    definitions: {
        UserV100: {
            fullname: "Archibald Haddock",
            birthdate: "18/10/1941", 
            job: "capitaine"
        },
        UserV110: {
            fullname: "Archibald Haddock",
            firstname: "Archibald",
            lastname: "Haddock",
            birthdate: "18/10/1941", 
            job: "capitaine"
        },
        UserV110breaking: {
            fullname: "Archibald Haddock",
            firstname: "Archibald",
            lastname: "Haddock",
            birthdate: "18 octobre 1941", 
            job: "capitaine"
        },
        UserV120: {
            fullname: "Archibald Haddock",
            firstname: "Archibald",
            lastname: "Haddock",
            birthdate: "18/10/1941", 
            birthdateday: "18", 
            birthdatemonth: "10",
            birthdateyear: "1941", 
            job: "capitaine"
        },
        UserV200: {
            firstname: "Archibald",
            lastname: "Haddock",
            birthdateday: "18", 
            birthdatemonth: "10",
            birthdateyear: "1941", 
            job: "capitaine"
        },
        UserV200breaking: {
            firstname: "Archibald",
            lastname: "Haddock",
            birthdateday: "18", 
            birthdatemonth: "october",
            birthdateyear: "1941", 
            job: "capitaine"
        },
        UserV210: {
            firstname: "Archibald",
            lastname: "Haddock",
            birthdateday: "18", 
            birthdatemonth: "10",
            birthdateyear: "1941", 
            job: "capitaine",
            jobs : ["capitaine", "distilleur"]
        },
        UserV300: {
            firstname: "Archibald",
            lastname: "Haddock",
            birthdateday: "18", 
            birthdatemonth: "10",
            birthdateyear: "1941", 
            jobs : ["capitaine", "distilleur"]
        }
    }
};

swaggerAutogen(outputFile, endpointsFiles, doc)
