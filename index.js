const process = require('process');
const fs = require('fs');
const inquirer = require('inquirer');
const cli_color = require('cli-color');
const child = require('child_process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = require('prompt-sync')();


console.log(
    cli_color.cyanBright.bold(
        `\nHeyy, I am Frontify 💥💥. I'm here to deliver you your Bioler Plate: \n\n1. Bolier PLate with all required packages using create-react-app\n2 Bolier PLate with all required packages using vite .\n`
    )
);

inquirer.prompt([
    {
        type: "list",
        name: 'choice',
        choices: ["create-react-app", "vite"]
    }
]).then((result) => {
    if (result.choice == "create-react-app") {

        const name = prompt(`Whats your Application Name ?`);
        console.log(`Creating ${name}....`);

        child.execSync(`npx create-react-app ${name}`, { stdio: [] });

        fs.unlinkSync(`${process.cwd()}/${name}/src/reportWebVitals.js`);
        fs.unlinkSync(`${process.cwd()}/${name}/src/setupTests.js`);
        fs.unlinkSync(`${process.cwd()}/${name}/src/App.test.js`);
        fs.mkdirSync(`${process.cwd()}/${name}/src/components`);
        fs.mkdirSync(`${process.cwd()}/${name}/src/assets`);
        fs.mkdirSync(`${process.cwd()}/${name}/src/pages`);
        
        console.log(
            cli_color.greenBright(
              "Folders are created and files are deleted... \n Happy Coding ✨"
            )
          );
    }
}).catch((err) => {
    console.log(err);
});