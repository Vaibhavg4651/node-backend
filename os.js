const os = require("os");

// console.log(`the time is ${os.uptime()} Seconds`);
// console.log(os.userInfo());

const currentOs ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOs);


