const { getBills } = require('./request')
const fs = require('fs')

const writeBills = async () => {
    const bills = await getBills('fracking')
    console.log(bills[0].bill_id);
    for (const i in bills) {
        console.log(bills[i].bill_id);
        fs.writeFileSync(`${bills[i].bill_id}.json`, JSON.stringify(bills[i], null, 2))
    }
}

writeBills()