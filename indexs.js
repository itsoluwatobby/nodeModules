const path = require('path');
const { readFile, writeFile } = require('fs');

// console.log(path.parse(__dirname))
// console.log(path.parse(__filename))

// const filePath = path.join(path.join(__dirname, 'subfolder', 'test.txt'));

// const base = path.basename(filePath)
// console.log(`BASENAME: ${base}`)

// const absolute = path.resolve(filePath)
// console.log(`ABSOLUTE: ${absolute}`)
// console.log('Starting task')
// const first = readFileSync('./subfolder/first.txt', 'utf8');
// const second = readFileSync('./subfolder/test.txt', 'utf8');

// writeFileSync('./subfolder/create.txt', `WRITING THIS: \n${first} \n${second}`)

// console.log('done with task')
// console.log('starting next task')

console.log('Starting')

readFile('./subfolder/first.txt', 'utf8', (err, data) => {
   if(err){
      console.log(err)
      return
   }
   const first = data;
   readFile('./subfolder/test.txt', 'utf8', (err, data) => {
         if(err){
            console.log(err)
            return
         }
         const second = data
         writeFile('./subfolder/result-async.txt', `RESULT : \n${first}\n${second}`, {flag: 'a'}, err => {
            if(err){
            console.log(err)
            return
            }
            console.log('done with task')              
         })
      })
})
console.log('starting next task') 