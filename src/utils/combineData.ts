import fs from 'fs';
import path from 'path';

const phonesInfo: any[] = [];

const jsonInDir = fs
  .readdirSync('./data/phones')
  .filter((file) => path.extname(file) === '.json');

console.log(jsonInDir);

jsonInDir.forEach((file) => {
  const fileData = fs.readFileSync(path.join('./data/phones', file));

  const jsonData = JSON.parse(fileData.toString());

  phonesInfo.push(jsonData);
});

fs.writeFileSync('phonesDetails.json', JSON.stringify(phonesInfo));
