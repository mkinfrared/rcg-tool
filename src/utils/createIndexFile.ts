import readFile from "utils/readFile";

import { TEMPLATE } from "./constants";

const createIndexFile = async (input: string) => {
  const file = await readFile("index.txt");
  const regex = new RegExp(TEMPLATE, "g");
  const content = file.replace(regex, input);
  const ext = "ts";
  const fileName = "index";

  return { content, ext, fileName };
};

export default createIndexFile;
