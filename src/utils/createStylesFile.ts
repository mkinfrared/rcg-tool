import readFile from "utils/readFile";

import { TEMPLATE } from "./constants";

const createStylesFile = async (input: string) => {
  const file = await readFile("Marklar.module.txt");
  const regex = new RegExp(TEMPLATE, "g");
  const content = file.replace(regex, input);
  const fileName = `${input}.module`;
  const ext = "scss";

  return { content, ext, fileName };
};

export default createStylesFile;
