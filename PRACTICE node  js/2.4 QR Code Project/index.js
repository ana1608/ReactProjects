/* 

3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";
inquirer
  .prompt([
    {
      name: "nameurl",
      message: "Enter your url:",
    },
  ])
  .then((answers) => {
    const url = answers.nameurl;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/**/
