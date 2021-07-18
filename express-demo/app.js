const express = require('express')
const app = express()

const router = express.Router()

function logger(req,res,next){
    console.log('There is a requesting at '+ new Date().toLocaleDateString());
    console.log('The requested host ip is '+req.ip);
    // next()
}

app.use(express.urlencoded({ extended: true }))
router.use(logger)
router.get('/',(req, res) => {
    
    res.send('<h1>Hello Rock!</h1>')
})

// router.use(function (req, res, next) {
//     console.log('There is a requesting at '+ new Date().toLocaleDateString());
//     next();
// });

router.get('/:name', function (req, res) {
    res.send('<h1>Hello ' + req.params.name + '</h1>');
});

app.get('/search',(req,res)=>{
    const query = req.query
    res.send(query)
})

router.post('/', (req, res) => {
    const name = req.body.name
    res.send({ message: `Hello ${name}!` })
})
app.use('/home', router)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('Server has started on port ' + PORT);
})