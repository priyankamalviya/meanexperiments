var restful = require('node-restful');

module.exports = function(app,route) {

    //Setup the controller for REST.
    var rest = restful.model(
        'movie',
        app.models.movie
    ).methods(['get', 'put', 'post', 'delete']);


    //Register this endpoint with te application
    rest.register(app,route);

    //Return moddleware.
    return function(req, res, next)
    {
        next();
    };
};
