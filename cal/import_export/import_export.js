// What is the difference between import and require?

// require uses module.exports, which is the "old" (but still valid) syntax for exporting a module,
// which can be anything we want, an object, a string, etc.

// import uses both, ie, you can use module.exports and export,
// and it allows you to export various pieces of code more or less like module.export did.

// How can you enable using the import syntax using node js?

//Write npm init in the terminal, type ok to everything
// add to the package.json the follwing key and value "type": "module",

// Give 2 node.js environment variables that are not available
// when using the import syntax.

// console.log(__dirname);
// console.log(__filename);

// Create 3 functions using the export/import syntax.
// Import the file system module using the import syntax

import { add, divide, subtract } from "./functions.js";
console.log(add(1, 2));
console.log(divide(1, 2));
console.log(subtract(1, 2));

import * as fs from "fs";
const currentDirectory = "./";

fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
  } else {
    console.log("List of files in the current directory:");
    files.forEach((file) => {
      console.log(file);
    });
  }
});
