const fs = require('fs');
const colors = require('colors');

const templates = readUnhiddenFilesAndFolders(__dirname + '/templates');

if (!process.argv[2] || !templates.includes(process.argv[2])) {
    console.log(`Template name not set [${templates.join(', ')}]`.red);
    process.exit();
}
if (!process.argv[3]) return console.log('Module name not set'.red);

const templateName = process.argv[2];
const moduleName = process.argv[3];
const moduleFolder = process.cwd() + '/' + moduleName;
const templateFolder = __dirname + '/templates/' + (templateName);

console.log(`Template: ${templateName.bold}`.blue);

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
                            .readFileSync(templateFolder + '/' + componentName + '/' + fileName, 'utf8')
                            .replace(new RegExp('\\$MODULE\\$', 'g'), moduleName);
                        fs.writeFileSync(componentFolder + '/' + distFileName, fileContent, 'utf8');
                        console.log(`File created: ${componentFolder + '/' + distFileName}`.green);
                    }
                });
        });
    });

function createFolder(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

function readUnhiddenFilesAndFolders(path) {
    return fs.readdirSync(path, 'utf8')
        .filter(fileName => !fileName.startsWith('.'));
}