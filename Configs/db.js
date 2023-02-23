const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://arpitkumarsahu:arpit@cluster0.bsbym9t.mongodb.net/flightbook?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
