const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//const getText = (path) =>{
// return new Promise((resolve,reject)=>{
    // readFile(path,'utf8',(err,data)=>{
            // const getText =(path)=>{
            // if(err){
                // reject(err)
            // } else{
                // resolve(data);
            // }
        // })
    // })
// }
// getText()
// .then(result=> console.log(result))
// .catch((err)=> console.log(err))

const start = async() =>{
    try{
        const first = await readFilePromise('./content/subcontent/first.txt','utf-8');
        const second = await readFilePromise('./content/subcontent/second.txt','utf-8');
        await writeFilePromise('./content/subcontent/nice.txt',"This is awesome")
        console.log(first);
        console.log(second);
    } catch (error){
        console.log(error);
    }
}

start()