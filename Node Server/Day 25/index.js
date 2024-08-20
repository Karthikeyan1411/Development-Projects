const qr = require('qrcode');

let data = {
    "name" : "Karthikeyan M",
    "gender" : "Male",
    "copyright" : "Spyde",
    "email" : "karthikeyan1411m@gmail.com",
    "id" : 123,
};

let stJson = JSON.stringify(data);
// qr.toString(stJson, {type: 'terminal'}, function(err, code) {});
qr.toDataURL(stJson, {type: 'terminal'}, function(err, code) {
    if(err) return console.log("error");
    console.log(code);
});

// codebeautify.org - using for base64 string to qr image
