const db = require("../models");
const User = db.user;
var bcrypt = require("bcryptjs");

exports.changePassword = (req,res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id,{$set:{password:bcrypt.hashSync(req.body.password,8)}},{useFindAndModify:false}).then(()=>{
        res.status(200).send({
            message:"Password change successfully!"
        })
    })
}