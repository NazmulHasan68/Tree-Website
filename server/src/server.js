const app = require('./app');
const connectDB = require('./config/bd');
const {serverPort} = require('./secret')


app.listen(serverPort, async()=>{
    console.log(`server is running at ${serverPort}`);
    await connectDB()
})


