const authJwt = require("../middlewares/authJwt");
const controller = require("../controllers/user.controller");
module.exports = function(app){
    app.use((req,res,next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "Authorization, Origin, Content-Type, Accept",
        );
        next();
    });
    app.put(
        "/backend/user/changePassword/:id",
        [
            authJwt.verifyToken
        ],
        controller.changePassword
    );
}