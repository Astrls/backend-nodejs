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

// function to create the structure of directories & add files to them
function createDir(selectPath, title, bgcolor) {
  fs.promises.mkdir(path.join(__dirname, `/${selectPath}`), { recursive: true })
  .then(() => {
    console.log(title + " directory created");
    fs.writeFile(
      path.join(__dirname, `/${selectPath}`, "index.html"),
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
          console.log(title + " HTML file created");
        }
    );

    fs.writeFile(
      path.join(__dirname, `/${selectPath}`, "style.css"),
      `body {
                background-color: ${bgcolor};
            }`,
      (err) => {
        if (err) throw err;
        console.log(title + " CSS file created");
      }
    );
  });
}

for (let i = 0; i < appStructure.length; i++) {
  createDir(
    appStructure[i].path,
    appStructure[i].title,
    appStructure[i].bgcolor
  );
}

fs.writeFile(
  path.join(__dirname, "/client", "info.txt"),
  `This is being run on a ${os.type()} computer!`,
  (err) => {
    if (err) throw err;
    console.log("OS Added");
  }
);
