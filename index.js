const express = require('express')
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter')
const userRouter = require('./routers/userRouter')
const personRouter = require('./routers/personRouter')
const helloRouter = require('./routers/helloRouter')
const loginRouter = require('./routers/loginRouter')
const session = require('express-session')
const mwTimeStamp = require('./middleware/mwTimestamp')
const mwPrintSession = require('./middleware/mwPrintSession')
const path = require('path')
const app = express()
const port = 9001

let sess = session({
    secret: 'some-secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 10000 * 60 * 60 * 24
    }
})

app.use(sess)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(mwTimeStamp)
app.use(mwPrintSession)
app.use('/', homeRouter)
app.use('/hello', helloRouter)
app.use('/login', loginRouter)
app.use('/person', personRouter)
app.use('/users', userRouter)
app.use(express.static('assets'))


app.set('views', path.join(__dirname, 'assets/views'))
app.set('view engine', 'ejs')
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})