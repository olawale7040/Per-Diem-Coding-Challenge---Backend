const database = require("../utils/database");

exports.getProducts = (req, res, next) => {
  //   database.push("/test3", { test: "test", json: { test: ["test"] } });

  //   database.push("/test2/my/test/", 10, false);

  // const data = db.getData("/");

  // From a particular DataPath
  const data = database.getData("/test3");
  res.status(200).json({
    message: data,
    posts: "list of products",
  });
};
