import React, {useState} from "react";
import QRCode from 'qrcode';  // library
import './QRCodeGenerator.css';

function QRCodeGenerator() {

    var [name, setName] = useState(''); // empty string for while refresh all vanish
    var [rollNumber, setRollNumber] = useState('');
    var [department, setDepartment] = useState('');
    var [year, setYear] = useState('');
    var [contactNumber, setContactNumber] = useState('');
    var [qrCodeDataURL, setQRCodeDataURL] = useState('');

    var generateQRCode = async () => {
        var student = {
            name,
            rollNumber,
            department,
            year,
            contactNumber
        };

        var studentInfo = JSON.stringify(student);

        try{
            var dataURL = await QRCode.toDataURL(studentInfo, {
                errorCorrectionLevel: 'H',
                width: 500
            });
            setQRCodeDataURL(dataURL);

            // temporary anchor element to trigger download link
            var downloadLink = document.createElement('a');
            downloadLink.href = dataURL;
            downloadLink.download = `${name.toLowerCase().replace('', '-')}_qr_code.png`;
            downloadLink.click();
        }
        catch (err){
            console.error(err);
        }
    }

    return (
        <div className="qr-generator-container">
            <h2>Generate QR Code</h2>
            <div className="form-container">
                <label>
                    Name:  
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> {/*(e) - eventListener*/}
                </label>
                <label>
                    Roll Number:
                    <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
                </label>
                <label>
                    Department:
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
                </label>
                <label>
                    Year:
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                </label>
                <label>
                    Contact Number:
                    <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </label>
                <button onClick={generateQRCode}>Generate QR Code</button>
            </div>
            {qrCodeDataURL && (
                <div className="qr-code-container">
                    <h3>QR Code Generated</h3>
                    <img src={qrCodeDataURL} alt="QR Code" width={200} height={200}/>
                </div>
            )}
        </div>
    );
}

export default QRCodeGenerator;