const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

module.exports = {

    sendmail: function (req){
const output = `
<p> Node Mailer Contact </p>
<h3> Credentials for your login <h3>
<ul>
    <li>UserName: ${req.body.username}</li>
    <li>password: ${req.body.password}</li>
</ul>  
`;
var options = {
auth: {
  api_user: 'be_project',
  api_key: 'be_project@48'
}
}

var client = nodemailer.createTransport(sgTransport(options));

var email = {
from: 'beproject.group48@gmail.com',
to: req.body.email,
subject: 'Thank you for registering with us',
text: 'your login credentials are',
html: output
};

client.sendMail(email, function(err, info){
  if (err ){
    console.log(error);
  }
  else {
    console.log('email sent: ');
  }
});

}}