const jwt = require("jsonwebtoken");
const db = require("../models/index");
const User = db.user;
const Role = db.role;

verifyToken = (req,res,next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    if (!token){
        return res.status(403).send({message:"No token provided!"});
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.status(401).send({message:"Unauthorized!"});
        }
        req.userId = decoded.id;
        next();
    });
};

isAdmin = (req,res,next) => {
    User.findById(req.userId).exec((err,user) => {
        if(err){
            res.status(500).send({message:err});
            return;
        }

        Role.find(
            {
            _id:{$in : user.roles}
            },
            (err,roles) => {
                if(err){
                    res.status(500).send({message:err});
                    return;
                }
                for(let i=0;i<roles.length;i++){
                    if(roles[i].name==="admin"){
                        next();
                        return;
                    }
                }
                res.status(403).send({message:"Required Admin role!"});
                return;
            }
        );
    });
};

const authJwt = {
    verifyToken,
    isAdmin
};

module.exports = authJwt;