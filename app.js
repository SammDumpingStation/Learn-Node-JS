const arrayFromLogs = require("./log");

const os = require("os");
// console.log(__dirname);
// console.log(__filename);

// console.log(os.platform(), os.homedir());

//reading Files

const fileSystem = require("fs");

// fileSystem.readFile('./log.js', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//writing files

// fileSystem.writeFile('./docsExample/text.txt', 'Ayooo Whazzzuuppp', () => {
//   console.log('the file was written');
// });

// fileSystem.writeFile("./docsExample/niggaballs.txt", "Ayooo Ninjasszzz", () => {
//   console.log("a new file was written");
// });

//create directories

// if (!fileSystem.existsSync('./the-made-directory-sir')) {
//  fileSystem.mkdir("./the-made-directory-sir", (err) => {
//    if (err) {
//      console.log(err);
//    }
//    console.log("folder was created");
//  });
// } else {
//   fileSystem.rmdir('./the-made-directory-sir', (err)=> {
//     if (err) {
//       console.log(err);
//     }
//     console.log('The directory was deleted!');
//   })
// };

//creating read stream

const readStream = fileSystem.createReadStream('./docsExample/largeAmountsOfData.txt', {encoding: 'utf-8'});
const writeStream = fileSystem.createWriteStream('./docsExample/secondCuming.txt');

// readStream.on('data', (chunk) => {
//   console.log("------------- New Buffer -------------");
//   console.log(chunk);
//   writeStream.write('\n New Chunk \n');
//   writeStream.write(chunk);
// })

//piping
// readStream.pipe(writeStream);

fileSystem.rmdir('./docsExample', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('The directory was deleted');
});