const axios = require('axios')
const fs = require('fs')

const key = require('./secrets')

const url = 'https://api.propublica.org/congress/v1'

const headers = {
    'X-API-Key': key
};

const getBills = async (query = "environment") => {
    const queryUrl = `${url}/bills/search.json?query=${query}`
    const options = { headers }
    const billData = await sendGetRequest(queryUrl, options)
    const bills = billData.results[0].bills
    return bills
}

const sendGetRequest = async (url, options) => {
    try {
        const resp = await axios.get(url, options);
        fs.writeFileSync('garbage.json', JSON.stringify(resp.data.results[0].bills, null, 2))
        return resp.data
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getBills }