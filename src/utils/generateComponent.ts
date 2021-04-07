import createComponentFile from "utils/createComponentFile";
import createIndexFile from "utils/createIndexFile";
import createStoriesFile from "utils/createStoriesFile";
import createStylesFile from "utils/createStylesFile";
import createTestFile from "utils/createTestFile";
import createTypeFile from "utils/createTypeFile";
import logger from "utils/logger";
import writeFile from "utils/writeFile";

const generateComponent = async (componentPath: string) => {
  logger.info("Generating component...");

  const dirNames = componentPath.split("/");
  const inputName = dirNames.pop() ?? "component";

  if (!dirNames.length) {
    dirNames.push("components");
  }

  const fileName = inputName
    .split("-")
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join("");

  const compDir = fileName;

  try {
    logger.info("Creating type file...");

    let data = await createTypeFile(fileName);

    writeFile({ ...data, dirNames, compDir });

    logger.success("Created type file");

    logger.info("Creating styles file...");

    data = await createStylesFile(fileName);

    writeFile({ ...data, dirNames, compDir });

    logger.success("Created styles file");

    logger.info("Creating component file...");

    data = await createComponentFile(fileName);

    writeFile({ ...data, dirNames, compDir });

    logger.success("Created component file");

    logger.info("Creating stories file...");

    data = await createStoriesFile(dirNames, fileName);

    writeFile({ ...data, dirNames, compDir });

    logger.success("Created stories file");

    logger.info("Creating test file...");

    data = await createTestFile(fileName);

    writeFile({ ...data, dirNames, compDir });

    logger.success("Created test file");

    logger.info("Creating index file...");

    data = await createIndexFile(fileName);

    logger.success("Created index file");

    writeFile({ ...data, dirNames, compDir });

    logger.success("DONE");
  } catch (e) {
    logger.error(e);
  }
};

export default generateComponent;
