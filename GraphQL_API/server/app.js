// app starts here

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema.js')
const connection_string = 'mongodb+srv://cooluser:rootytooty@cluster0.awaadm7.mongodb.net/?retryWrites=true&w=majority';
const mongoose = require('mongoose');

const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
  }
);

mongoose.connect(connection_string);
