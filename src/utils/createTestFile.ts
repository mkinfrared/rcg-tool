import readFile from "utils/readFile";

import { TEMPLATE } from "./constants";

const createTestFile = async (input: string) => {
  const file = await readFile("Marklar.test.txt");
  const regex = new RegExp(TEMPLATE, "g");
  const content = file.replace(regex, input);
  const fileName = `${input}.test`;
  const ext = "tsx";

  return { fileName, content, ext };
};

export default createTestFile;
