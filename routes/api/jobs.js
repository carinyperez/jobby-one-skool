const express = require('express');
const router = express.Router(); 
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config(); 


// @route api/jobs
// @desc get jobs 
router.get('/:query', (req, res)=> {
    axios.get(`
    https://api.proxycrawl.com/?token=${process.env.proxyCrawler}&url=https://www.indeed.com/jobs?q=${req.params.query}
    `).then(
        response =>  {
            let dataArr =[]; 
            const $ = cheerio.load(response.data); 
            const name = $('.jobTitle').each(function (i, elem) {
                elem[i] = $(this).text();
            });
            for(let i = 0; i < name.length; i++) {
                for(let j = 0; j < name.length; j++) {
                    if(i == j) {
                        dataArr.push(name[i][j])
                    }   
                }
            }
            res.send(dataArr);
    }).catch(err => res.send(err)); 
});


module.exports = router; 









