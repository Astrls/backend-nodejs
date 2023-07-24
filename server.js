//Stating module dependencies
const path = require("path");
const fs = require("fs");
const os = require("os");

// Structure of our app as an array of objects containing their values as arguments for our functions
const appStructure = [
  {
    path: "client",
    title: "Client",
    bgcolor: "yellow",
  },
  {
    path: "client/contact",
    title: "Contact",
    bgcolor: "blue",
  },
  {
    path: "client/about",
    title: "About",
    bgcolor: "green",
  },
  {
    path: "client/blog",
    title: "Blog",
    bgcolor: "red",
  },
];

//Function to create a directory
function createDir(selectPath) {
  fs.mkdir(path.join(__dirname, `/${selectPath}`), {}, (err) => {
    if (err) throw err;
    console.log("Step 1: create folder => ok");
  });
}

// async function createDir(selectPath) {
//   fs.mkdir(path.join(__dirname, `/${selectPath}`), {}, (err) => {
//     if (err) throw err;
//     console.log("Step 1: create folder => ok");
//   });
// }


// Function to create the HTML and CSS files with the required variables as parameters
const createFiles = (selectPath, title, bgcolor) => {
  fs.writeFile(
    path.join(__dirname, `${selectPath}`, "index.html"),
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>${title}</h1>
    </body>
    </html>`,
    (err) => {
      if (err) throw err;
      console.log("Step 2: create HTML => ok");
    }
  );

  fs.writeFile(
    path.join(__dirname, `/${selectPath}`, "style.css"),
    `body {
        background-color: ${bgcolor};
    }`,
    (err) => {
      if (err) throw err;
      console.log("Step 3: css bg => ok");
    }
  );
};

//Loops through our functions to create folders and add files for each object in our App Structure
appStructure.forEach((data) => {
  createDir(data.path);
  setTimeout(function () {
    createFiles(data.path, data.title, data.bgcolor);
  }, 500);
  //   createFiles(data.path, data.title, data.bgcolor)
});

//Adds a info file text with the OS type
fs.writeFile(
  path.join(__dirname, '/client', "info.txt"),
  `This is being run on a ${os.type()} computer!`,
  (err) => {
    if (err) throw err;
    console.log("OS Added");
  }
);
