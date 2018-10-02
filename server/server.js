const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT;
const nm_password = process.env.NMPSWD;

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use( bodyParser.urlencoded({
  extended: true
}) );

app.use( bodyParser.json() );
app.use( cors() );
app.use( express.static(publicPath) );

app.post('/sendmail', (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aelluvetaaportfolio@gmail.com',
      pass: nm_password
    }
  });

  const mailOptions = {
    from: 'aelluvetaaportfolio@gmail.com',
    to: 'aelluvetaa@gmail.com',
    subject: 'Portfolio Contact',
    html: '<p>Name: ' + name + ', phone: ' + phone + ', email: ' + email + ', message: ' + message + '.</p>'
  };

  transport.sendMail(mailOptions, (error, info) => {
    if( error ){
      res.status(403).send('Message not sent');
    }
  });

  res.send('Message sent');
  res.end();
});

app.get('*', (req, res) => {
  res.sendFile( path.join(publicPath, 'index.html') );
});

app.listen(port, () => {
  console.log('Server is running');
});
