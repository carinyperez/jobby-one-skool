const express = require('express'); 
const cors = require('cors'); 
const path = require('path'); 
const jobs = require('./routes/api/jobs'); 

// create express application 
const app = express(); 

// middleware 
app.use('*', cors());
app.use(express.json({extended: false})) 

const PORT = process.env.PORT || 5000; 

// app.get('/', (req, res) => res.send(`API is running`));

// serve static assets in production 

if(process.env.NODE_ENV === 'production') {
    // set static folder 
    app.use(express.static('client', 'build', 'index.html')); 
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 

// define routes 
app.use('/api/jobs', jobs);