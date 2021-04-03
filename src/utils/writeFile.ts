import fs from "fs";
import { promisify } from "util";

import logger from "utils/logger";

type Data = {
  dirName: string;
  compDir: string;
  fileName: string;
  ext: string;
  content: string;
};

const writeFile = async ({
  compDir,
  content,
  dirName,
  ext,
  fileName
}: Data) => {
  const write = promisify(fs.writeFile);
  const mkdir = promisify(fs.mkdir);
  const rootDir = process.cwd();

  try {
    await mkdir(`${rootDir}/${dirName}`, { recursive: true });

    await mkdir(`${rootDir}/${dirName}/${compDir}`, { recursive: true });

    const path = `${rootDir}/${dirName}/${compDir}/${fileName}.${ext}`;

    await write(path, content, "utf8");
  } catch (e) {
    logger.error(e);
  }
};

export default writeFile;
