const database = require("../utils/database");
const uniqueId = require("../utils/uuid");
const currentDate = require("../utils/dateTime");

exports.getProducts = (req, res, next) => {
  //   database.push("/product/data", [{ name: "cloth", qty: 2 }], false);
  database.push(
    "/products",
    [{ id: uniqueId, name: "T-Shirt", qty: 15, createdAt: currentDate }],
    false
  );
  //   database.push("/test2/my/test/", 10, false);

  // const data = db.getData("/");

  // From a particular DataPath
  //   const data = database.getData("/test");
  res.status(200).json({
    message: "added",
    posts: "list of products",
  });
};
