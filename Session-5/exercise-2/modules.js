import * as fs from 'fs/promises';

// Get data from the file
let result = await fs.readFile('boardgames.json');
let data = JSON.parse(result);

//Loop over the boardgames
for (let i in data) {
    //Create filename
    let filename = `${i}.json`
    //Stringify the value
    let bg = JSON.stringify(data[i])
    //Save to file
    await fs.writeFile(filename, bg)
}