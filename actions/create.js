const fs = require('fs');
const handlebars = require('handlebars');
const { createFolder, readUnhiddenFilesAndFolders } = require('../helpers');

module.exports = function (moduleName, templateFolder) {
  const moduleFolder = process.cwd() + '/' + moduleName;

  Promise
    .resolve(createFolder(moduleFolder))
    .then(() => readUnhiddenFilesAndFolders(templateFolder))
    .then(components => {
      components.forEach((componentName) => {
        const componentFolder = moduleFolder + '/' + componentName;
        createFolder(componentFolder);

        readUnhiddenFilesAndFolders(templateFolder + '/' + componentName)
          .forEach((fileName) => {
            const distFileName = moduleName + fileName;
            const filePath = componentFolder + '/' + distFileName;
            if (fs.existsSync(filePath)) {
              console.log(`File exists: ${componentFolder + '/' + distFileName}`.red);
            } else {
              const fileContent = fs
                .readFileSync(templateFolder + '/' + componentName + '/' + fileName, 'utf8');
              const template = handlebars.compile(fileContent);

              fs.writeFileSync(
                componentFolder + '/' + distFileName,
                template({
                  module: {
                    name: moduleName
                  }
                }),
                'utf8');
              console.log(`File created: ${componentFolder + '/' + distFileName}`.green);
            }
          });
      });
    });
};
