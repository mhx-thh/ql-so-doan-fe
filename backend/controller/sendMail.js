var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var fs = require('fs');

exports.sendMail = (req, res, next) => {
  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
      if (err) {
        throw err;
        callback(err);
      }
      else {
        callback(null, html);
      }
    });
  };

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'nguyentanvinh2911@gmail.com',
      pass: ''
    }
  }));

  readHTMLFile('backend/models/email.html', function (err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      username: req.body.username
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
      from: 'nguyentanvinh2911@gmail.com',
      to: 'nguyentanvinh29112000@gmail.com',
      subject: 'test subject',
      html: htmlToSend
    };
    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        res.status(404).json({ "message": "Sent mail failed!" });
      } else {
        console.log('Email sent: ' + response.response);
        res.status(200).json({ "message": "Sent mail successfull!" });
      }
    });
  })
}
