// User in api v1.0.0
const userv100 = {
    "fullname": "Archibald Haddock",
    "birthdate": "18/10/1941", 
    "job": "capitaine"
}

// User in api v1.1.0
// Change : add firstname and lastname to avoid post-request parsing
const userv110 = {
    "fullname": "Archibald Haddock",
    "firstname": "Archibald",
    "lastname": "Haddock",
    "birthdate": "18/10/1941", 
    "job": "capitaine"
}

// User in api v1.1.0
// Breaking Change : data has been modified by book editor
const userv110breaking = {
    "fullname": "Archibald Haddock",
    "firstname": "Archibald",
    "lastname": "Haddock",
    "birthdate": "18 octobre 1941", 
    "job": "capitaine"
}

// User in api v1.2.0
// Change : cut birthdate in 3 params to avoid post-request parsing
const userv120 = {
    "fullname": "Archibald Haddock",
    "firstname": "Archibald",
    "lastname": "Haddock",
    "birthdate": "18/10/1941", 
    "birthdateday": "18", 
    "birthdatemonth": "10",
    "birthdateyear": "1941", 
    "job": "capitaine"
}

// User in api v2.0.0
// Breaking change : remove fullname and birthdate
const userv200 = {
    "firstname": "Archibald",
    "lastname": "Haddock",
    "birthdateday": "18", 
    "birthdatemonth": "10",
    "birthdateyear": "1941", 
    "job": "capitaine"
}

// User in api v2.0.0
// Breaking change : change value of month to NaN
const userv200breaking = {
    "firstname": "Archibald",
    "lastname": "Haddock",
    "birthdateday": "18", 
    "birthdatemonth": "october",
    "birthdateyear": "1941", 
    "job": "capitaine"
}

// User in api v2.1.0
// Change : Add jobs array, so user can have multiple jobs
const userv210 = {
    "firstname": "Archibald",
    "lastname": "Haddock",
    "birthdateday": "18", 
    "birthdatemonth": "10",
    "birthdateyear": "1941", 
    "job": "capitaine",
    "jobs" : ["capitaine", "distilleur"]
}

// User in api v2.1.0
// Change : Add jobs array, so user can have multiple jobs
const userv300 = {
    "firstname": "Archibald",
    "lastname": "Haddock",
    "birthdateday": "18", 
    "birthdatemonth": "10",
    "birthdateyear": "1941", 
    "jobs" : ["capitaine", "distilleur"]
}

const userv300lazy = {
    "fullname": "Archibald Haddock",
    "firstname": "Archibald",
    "lastname": "Haddock",
    "birthdate": "18/10/1941", 
    "birthdateday": "18", 
    "birthdatemonth": "10",
    "birthdateyear": "1941", 
    "job": "capitaine",
    "jobs" : ["capitaine", "distilleur"]
}

module.exports = {
    userv100,
    userv110,
    userv110breaking,
    userv120,
    userv200,
    userv200breaking,
    userv210, 
    userv300,
    userv300lazy
}