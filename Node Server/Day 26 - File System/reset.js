const fs = require('fs');

const content = 'Hello, this is some content!';
const filePath = 'example.txt';

if (fs.existsSync(filePath)){
    fs.writeFile('example.txt', content, 'utf8', (err) => {
        if(err){
            console.error(err);
            return;
        }
        console.log('File has been resetted.');
    });
}
else{
    console.log('File doesn\'t exists.');
}