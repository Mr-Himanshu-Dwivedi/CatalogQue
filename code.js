const fs = require('fs');

function readData(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,'utf8',(err,data)=>{
            if(err) reject("ERR1");
            else{
                resolve(JSON.parse(data))
            }
        })
    })
}


function Calculation(data){
    const key = data.keys;
    const n = key.n;
    const k = key.k;

    let constantTerms = []

    for(let i=0;i<=n;i++){
        const base = parseInt(data[i].base);
        const value = data[i].value;

        const decimalValue = BigInt(parseInt(value,base));
        constantTerms.push(decimalValue);
    }

    const total = constantTerms.reduce((acc,val)=> acc+val,BigInt(0));
    return total.toString();
}

async function main() {
    try{
        console.log("1");
        const data = await readData('testcase.json');
        console.log("2");
        const constantTerm = Calculation(data);
        console.log(`Value of c:${constantTerm}`);
    }
    catch(err){
        console.log('ERR2');
    }
}
main();