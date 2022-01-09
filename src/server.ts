import express, {Request, Response, NextFunction} from 'express';
import { CreateHttpError } from 'http-errors';
import cors from 'cors';
import proxy from  "express-http-proxy";
import env from './config/envConfig'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.post(/inbound[\/].*/i, proxy(env.INBOUND_URL!))
app.post(/outbound[\/].*/i, proxy( env.OUTBOUND_URL!));



app.use('*', (request, response, next)=>{
    response.status(405).json({
        message: "",
        error: "Invalid route.",
      });
})

app.use((error: CreateHttpError, request: Request, response:Response, next:NextFunction)=>{
    response.status(500).json({
        message: '',
        error: 'Server currently unable to service request, try again later.'
    })
})





const PORT = process.env.PORT!
app.listen(PORT, ()=>{
    console.log(`Server now running on port ${PORT}`)
})