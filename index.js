require('colors');
const { readUnhiddenFilesAndFolders } = require('./helpers');

switch(process.argv[2]) {
    case 'rename':
        if (!process.argv[3]) return console.log('Previous module name not set'.red);
        if (!process.argv[4]) return console.log('New module name not set'.red);

        require('./actions/rename')(process.argv[3], process.argv[4]);
        break;
    case 'create':
        const templates = readUnhiddenFilesAndFolders(__dirname + '/templates');

        if (!process.argv[3]) return console.log('Module name not set'.red);

        if (!process.argv[4] || !templates.includes(process.argv[4])) {
            return console.log(`Template name not set [${templates.join(', ')}]`.red);
        }

        const moduleName = process.argv[3];
        const templateName = process.argv[4];
        const templateFolder = __dirname + '/templates/' + templateName;

        console.log(`Template: ${templateName.bold}`.blue);

        require('./actions/create')(moduleName, templateFolder);
        break;
    default:
        console.log('Available actions: [create, rename]'.red);
}