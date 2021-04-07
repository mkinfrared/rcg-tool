#!/usr/bin/env node

import yargs from "yargs";

import generateComponent from "utils/generateComponent";

const start = () => {
  const options = yargs
    .usage("Usage: -c <component>")
    .option("component", {
      alias: "c",
      describe: "Component name"
    })
    .demandOption(["component"], "Please provide a component name")
    .help().argv as { component: string };

  generateComponent(options.component);
};

start();
