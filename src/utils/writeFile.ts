import fs from "fs";
import path from "path";
import { promisify } from "util";

import logger from "utils/logger";

type Data = {
  dirNames: string[];
  compDir: string;
  fileName: string;
  ext: string;
  content: string;
};

const writeFile = async ({
  compDir,
  content,
  dirNames,
  ext,
  fileName
}: Data) => {
  const write = promisify(fs.writeFile);
  const mkdir = promisify(fs.mkdir);
  const rootDir = process.cwd();

  try {
    await mkdir(path.join(rootDir, ...dirNames), { recursive: true });

    await mkdir(path.join(rootDir, ...dirNames, compDir), { recursive: true });

    const filePath = path.join(
      rootDir,
      ...dirNames,
      compDir,
      `${fileName}.${ext}`
    );

    await write(filePath, content, "utf8");
  } catch (e) {
    logger.error(e);
  }
};

export default writeFile;
