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

  let dirName = "components";
  let inputName = "component";

  const input = componentPath.split("/");

  if (input.length > 1) {
    [dirName, inputName] = input;
  } else {
    [inputName] = input;
  }

  const fileName = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  const compDir = fileName;

  try {
    logger.info("Creating type file...");

    let data = await createTypeFile(fileName);

    writeFile({ ...data, dirName, compDir });

    logger.success("Created type file");

    logger.info("Creating styles file...");

    data = await createStylesFile(fileName);

    writeFile({ ...data, dirName, compDir });

    logger.success("Created styles file");

    logger.info("Creating component file...");

    data = await createComponentFile(fileName);

    writeFile({ ...data, dirName, compDir });

    logger.success("Created component file");

    logger.info("Creating stories file...");

    data = await createStoriesFile(dirName, fileName);

    writeFile({ ...data, dirName, compDir });

    logger.success("Created stories file");

    logger.info("Creating test file...");

    data = await createTestFile(fileName);

    writeFile({ ...data, dirName, compDir });

    logger.success("Created test file");

    logger.info("Creating index file...");

    data = await createIndexFile(fileName);

    logger.success("Created index file");

    writeFile({ ...data, dirName, compDir });

    logger.success("DONE");
  } catch (e) {
    logger.error(e);
  }
};

export default generateComponent;
