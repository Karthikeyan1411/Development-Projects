const fs = require('fs');

const filePath = 'example.txt';
const additionalContent = "\nThis content written by Spyde"

if(fs.existsSync(filePath)){
    fs.appendFile(filePath, additionalContent , 'utf8', (err) =>{
        if(err){
            console.error(err);
            return;
        }
        console.log('Content has been appended');
    });
}
else{
    console.log('File doesn\'t exist');
}