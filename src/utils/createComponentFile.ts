import readFile from "utils/readFile";

import { TEMPLATE } from "./constants";

const createComponentFile = async (input: string) => {
  const file = await readFile("Marklar.txt");
  const regex = new RegExp(TEMPLATE, "g");
  const content = file.replace(regex, input);
  const fileName = `${input}`;
  const ext = "tsx";

  return { fileName, content, ext };
};

export default createComponentFile;
