const fs = require('fs');
const { readUnhiddenFilesAndFolders, rename } = require('../helpers');

module.exports = function (prevName, newName) {
    const modulePath = process.cwd() + '/' + prevName;
    const newModulePath = process.cwd() + '/' + newName;

    if (!fs.existsSync(modulePath)) {
        return console.log(`No folder ${prevName}`.red)
    }
    rename(modulePath, newModulePath);

    readUnhiddenFilesAndFolders(newModulePath)
        .forEach((componentName) => {
            const componentPath = newModulePath + '/' + componentName;
            const files = fs.readdirSync(componentPath);

            files.forEach(fileName => {
                const newFilePath = componentPath + '/' + fileName.replace(prevName, newName);
                rename(componentPath + '/' + fileName, newFilePath);

                const content = fs
                    .readFileSync(newFilePath, 'utf8')
                    .replace(new RegExp(`(\\s|\\()${prevName}`, 'g'), `$1${newName}`);

                fs.writeFileSync(newFilePath, content, 'utf8');
            });
        })
};