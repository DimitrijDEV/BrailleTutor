const fs = require('fs'); 

const getData = (name, path) => {
    const 
        fileContent = fs.readFileSync(`./database/${path}.json`), 
        data = JSON.parse(fileContent);
    return data[name];
}

const writeData = (data, path) =>{
    let dataJSON = JSON.stringify(data);
    fs.writeFileSync(`./database/${path}.json`, dataJSON);
}

exports.getData = getData;
exports.writeData = writeData;