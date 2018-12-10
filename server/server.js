const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT;

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use( bodyParser.urlencoded({
  extended: true
}) );

app.use( bodyParser.json() );
app.use( cors() );
app.use( express.static(publicPath) );

const requireHTTPS = (req, res, next) => {
  if (!req.secure) {
    //FYI this should work for local development as well
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.use(requireHTTPS);

app.post('/sendmail', (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;

  const oauth2Client = new OAuth2(
       process.env.CLIENTID,
       process.env.SECRET,
       'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
       refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = oauth2Client.refreshAccessToken()
       .then(res => res.credentials.access_token);

  const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
           type: "OAuth2",
           user: "aelluvetaaportfolio@gmail.com",
           clientId: process.env.CLIENTID,
           clientSecret: process.env.SECRET,
           refreshToken: process.env.REFRESH_TOKEN,
           accessToken: accessToken
      }
  });

  const mailOptions = {
    from: 'aelluvetaaportfolio@gmail.com',
    to: 'aelluvetaa@gmail.com',
    subject: 'Portfolio Contact',
    html: '<p>Name: ' + name + ', phone: ' + phone + ', email: ' + email + ', message: ' + message + '.</p>'
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if( error ){
      res.status(403).send(error);
    } else {
      res.send('Message sent');
      smtpTransport.close();
    }
  });
});

app.get('/about', (req, res, next) => {
  res.redirect('/');
});

// app.get('*', (req, res, next) => {
//   res.redirect('https://' + req.headers.host + req.url);
//   next();
// });

app.get('*', (req, res) => {
  res.sendFile( path.join(publicPath, 'index.html') );
});

app.listen(port, () => {
  console.log('Server is running');
});
