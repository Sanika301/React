import express, { request, response } from "express"
import {PORT,mongoDBURL} from "./config.js"
import mongoose from "mongoose";
import {Book} from "./Models/bookModel.js"
import booksRoute from './Routes/booksRoute.js'
const app=express();

//Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS POLICY
//Option 1:Allow all Origins with Default of cors(*)
app.use(
    cors({
        origin:'http://localhost:3000',
        methods:['GET','POST','PUT','DELETE'],
        allowHeaders:['Content-Type'],
    })
)



app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');

})

app.use('/books',booksRoute);



mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`);
    })

}).catch((error)=>{
    console.log("HII");
    console.log(error);
})
