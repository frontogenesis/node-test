let glob = require('glob');
let fs = require('fs');

function renameFile() {

    try {
        process.chdir('../../Downloads');
    }
    catch (err) {
        error(err);
    }

    glob('*.csv', function(err, files) {
        if (err) {
            console.log(err.message);
        };
        csv = files[0];
        fs.rename(csv, 'vms.csv', callback);
    })
}

function error(err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Whatever');
    }
}

renameFile();