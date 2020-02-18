const fs = require('fs');
const { readUnhiddenFilesAndFolders, rename } = require('../helpers');

module.exports = function (prevName, newName) {
    let modulePath = process.cwd() + '/' + prevName;
    const newModulePath = process.cwd() + '/' + newName;

    if (!fs.existsSync(modulePath)) {
        modulePath = newModulePath;
    }
    rename(modulePath, newModulePath);

    readUnhiddenFilesAndFolders(newModulePath)
        .forEach((componentName) => {
            const componentPath = newModulePath + '/' + componentName;
            const files = readUnhiddenFilesAndFolders(componentPath).filter(name => /\.\w+$/.test(name));

            files.forEach(fileName => {
                const newFilePath = componentPath + '/' + fileName.replace(prevName, newName);
                rename(componentPath + '/' + fileName, newFilePath);

                let content = fs.readFileSync(newFilePath, 'utf8');
                [
                    'Presenter', 'Interactor', 'Router',
                    'Configurator', 'Module',
                    'Scene', 'Node', 'View', 'Cell'
                ].forEach(suffix => {
                    content = content.replace(
                        new RegExp(`(\\s|\\()${prevName}${suffix}`, 'g'),
                        `$1${newName}${suffix}`)
                });

                fs.writeFileSync(newFilePath, content, 'utf8');
            });
        })
};