const {readFileSync,writeFileSync, createReadStream} = require('fs');
const { result } = require('lodash');

// const first = readFileSync('./content/subcontent/first.txt','utf-8');
// 
// // const second = readFileSync('./content/subcontent/second .txt','utf-8');
// 
// console.log(first,second);

writeFileSync('./content/result.js',`Here is the result of ${first} and ${second}`);

readFileSync('./content/subcontent/first.txt', 'utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFileSync('./content/subcontent/second.txt', 'utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFileSync('./content/subcontent/first.txt',`here is the result: ${first},${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })

})

//stream example
const stream = createReadStream('./content/subcontent/nice.txt',{
    highWaterMark:90000,
    encoding:'utf-8'
})

stream.on('data',(result) =>{
    console.log(result)
})
stream.on('error',(err)=> console.log(err))