const fs = require('fs');

exports.createFolder = function(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
};

exports.readUnhiddenFilesAndFolders = function(path) {
    return fs
        .readdirSync(path, 'utf8')
        .filter(fileName => !fileName.startsWith('.'));
};

exports.rename = function (oldPath, newPath) {
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath)
    }
};