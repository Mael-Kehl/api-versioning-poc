const express = require('express');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
require('dotenv').config();
const serverHost = process.env.SERVER_HOST_IP || "{{SERVER_IP}}";

const userRoutes = require('./routes/userRoutes')

const app = express();
const port = 3000;

//setting custom headers
const headersAppLevel = function(req,res,next) {
    res.set("Host", String("karaboudjan.be"))
    next();
};

app.use(cors({
    origin: '*',
    exposedHeaders: ['Warning', 'Information', 'Host']
}))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(headersAppLevel)

app.use('/user', userRoutes);

app.listen(port, serverHost, () => {
  console.log(`Server running : ${serverHost}:${port}`);
  
});