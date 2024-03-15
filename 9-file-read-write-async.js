const { readFile, writeFile } = require("fs");

readFile("./parent/first.txt", "utf8", (err, result) => {
    if(err) {
        return;
    }
    const first = result;

    readFile("./parent/second.txt", "utf8", (err, result) => {
        if(err) {
            return;
        }
        const second = result;

        writeFile("./parent/third-result-async.txt",`Here is the final one : ${first} , ${second}`, (err, result)=>{
            if(err) {
                return;
            }
            console.log(result);
        })
    })
});
