const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://88m:Vtx00Lz9L5IVHIhb@cluster0.coxdjmc.mongodb.net/")
  .then(() => console.log("Connected mogno db"))
  .catch((e) => console.log(e));
