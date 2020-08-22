#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "Visit website?",
    choices: [
      {
        name: `yes`,
        value: () => {
          open("https://maximousblk.now.sh");
          console.log("\nOpening...\n");
        },
      },
      {
        name: "no",
        value: () => {
          console.log("Ok, bye.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("Maximous Black"),
  handle: chalk.white("@maximousblk"),
  bio: "Web Developer and UI/UX Designer",
  web: chalk.cyan("https://maximousblk.now.sh"),
  email: chalk.cyan("maximousblk@gmail.com"),
};

const logo = {
  l1: chalk.hex("#AB9DF2").bold(" _____      _____ "),
  l2: chalk.hex("#AB9DF2").bold("|_  \\ \\    / /  _|"),
  l3: chalk.hex("#AB9DF2").bold("  | |\\ \\  / /| |  "),
  l4: chalk.hex("#AB9DF2").bold("  | | \\ \\/ / | |  "),
  l5: chalk.hex("#AB9DF2").bold("  | |  \\  /  | |  "),
  l6: chalk.hex("#AB9DF2").bold(" _| |   \\/   | |_ "),
  l7: chalk.hex("#AB9DF2").bold("|___|        |___|"),
};

const me = boxen(
  [
    `${logo.l1}`,
    `${logo.l2}  ${data.name} / ${data.handle}`,
    `${logo.l3}`,
    `${logo.l4}  ${data.bio}`,
    `${logo.l5}`,
    `${logo.l6}  ${data.web}`,
    `${logo.l7}  ${data.email}\n`,
  ].join("\n"),
  {
    margin: 2,
    float: "left",
    padding: 1,
    borderStyle: "round",
    borderColor: "#AB9DF2",
  }
);

console.log(me);

prompt(questions).then((answer) => answer.action());
