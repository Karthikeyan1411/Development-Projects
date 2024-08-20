const fs = require('fs');

const filePath = 'example.txt';

if(fs.existsSync(filePath)){
    console.log('File Exist');
}
else{
    console.log('File doesn\'t exist');
}