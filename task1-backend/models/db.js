const db = require("./index");
const Role = db.role;

let connection = db.mongoose
    .connect(
        process.env.MONGODB_URL,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        }
    )
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
module.export = connection;