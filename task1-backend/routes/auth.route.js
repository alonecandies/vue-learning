const verifySignUp = require ("../middlewares/verifySignUp");
const controller = require ("../controllers/auth.controller");

module.exports = function(app){
    app.use((req,res,next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "Authorization, Origin, Content-Type, Accept",
        );
        next();
    });
    app.post(
        "/backend/user/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );
    app.post(
        "/backend/user/signin",
        controller.signin
    );
}