module.exports.isAuth = (request , response , next) => {
    if (!request.isAuth){
        return response.status(403).send("403 Forbbiden.")
    }
    next()
}

module.exports.isAnonymous = (request , response , next) => {
    if (request.isAuth) {
        return response.status(403).send("403 Forbbiden.")
    }
    next()
}