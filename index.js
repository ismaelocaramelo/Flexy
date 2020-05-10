module.exports =
  process.env.NODE_ENV === "production"
    ? require("./dist/flexy.bundle.min.js")
    : require("./dist/flexy.bundle.js");
