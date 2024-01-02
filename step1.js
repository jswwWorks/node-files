"use strict";

const fsP = require("fs/promises");

const argv = process.argv;

const filePath = argv[argv.length - 1];
console.log('file path we care about', filePath);


// for (let i = 0; i < argv.length; i++) {
//   console.log(i, argv);
// }

/** Takes a string, path, and reads file with that string.
 *  Prints that file.
 *
 *  TODO: add more details as we go
 *
 * @param {file path} path
 */

async function cat(path) {

  try {
    const file = await fsP.readFile(path, "utf8");
    console.log("this file's contents:", file);
  } catch {
    console.log("problem with operation");
    process.exit(1);
  }

}



cat(process.argv[2]);