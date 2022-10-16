const {readFileSync,writeFileSync} = require('fs');

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