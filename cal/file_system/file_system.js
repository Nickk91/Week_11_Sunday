// 1. Create a new txt file using the same fs module method we have
// learned before.

// const fs = require("fs");

// const fileName = "new_file.txt";
// const fileContent = "bla bla bla...";

// fs.writeFile(fileName, fileContent, (err) => {
//   if (err) {
//     console.error("Error creating file:", err);
//   } else {
//     console.log("File created successfully.");
//   }
// });

// 2. Create a copy of the newly created txt file using a method from
// the fs module.

// const fs = require("fs").promises;

// const sourceFile = "new_file.txt";
// const destinationFile = "new_file(copy).txt";

// async function copyFile() {
//   try {
//     await fs.copyFile(sourceFile, destinationFile);
//     console.log("File copied successfully.");
//   } catch (err) {
//     console.error("Error copying file:", err);
//   }
// }

// copyFile();

// 3. Rename one of the files using a method from the fs module.

// const fs = require("fs");

// const oldFileName = "new_file.txt";
// const newFileName = "new_file1.txt";

// fs.access(newFileName, fs.constants.F_OK, (err) => {
//   if (err) {
//     // The destination file does not exist, perform the rename
//     fs.rename(oldFileName, newFileName, (renameErr) => {
//       if (renameErr) {
//         console.error("Error renaming file:", renameErr);
//       } else {
//         console.log("File renamed successfully.");
//       }
//     });
//   } else {
//     console.error("Destination file already exists. Choose a different name.");
//   }
// });

// 4. Get a list of all the file names of the current directory using a
// method from the fs module.

const fs = require("fs");
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

// 5. Find out and implement another method for the fs module.
