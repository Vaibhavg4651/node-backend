const {readFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)


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
        const first = await getText('./content/subcontent/first.txt');
        const second = await getText('./content/subcontent/second.txt');
        console.log(first);
        console.log(second);
    } catch (error){
        console.log(error);
    }
}

start()