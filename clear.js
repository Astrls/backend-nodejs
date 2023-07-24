const path = require("path");
const fs = require("fs");

fs.rm(path.join(__dirname,'/client'),{recursive :true, force: true}, (err) => {if (err) throw err; console.log("client directory removed");})