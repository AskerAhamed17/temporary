const os = require('os');

// Info about the current user
const user = os.userInfo();
console.log(user);

//Method that returns the system uptime in seconds
console.log(`This system uptime is ${os.uptime()}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOs);