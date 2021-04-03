import readFile from "utils/readFile";

import { TEMPLATE } from "./constants";

const createTypeFile = async (input: string) => {
  const file = await readFile("Marklar.type.txt");
  const regex = new RegExp(TEMPLATE, "g");
  const content = file.replace(regex, input);
  const fileName = `${input}.type`;
  const ext = "ts";

  return { fileName, content, ext };
};

export default createTypeFile;
