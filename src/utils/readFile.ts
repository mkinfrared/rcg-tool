import fs from "fs";
import path from "path";
import { promisify } from "util";

const readFile = async (fileName: string) => {
  const filePath = path.resolve(__dirname, "../templates", fileName);
  const read = promisify(fs.readFile);
  const file = await read(filePath, "utf8");

  return file;
};

export default readFile;
