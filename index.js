var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
    if (err) throw err;
    fs.writeFile('./content.txt', data, function(err) {
        if (err) throw err;
        fs.readFile('./content.txt', 'utf-8', function(err, data) {
            console.log('Zawartość katalogu:'.red);
            console.log(data);
        });
    });
});