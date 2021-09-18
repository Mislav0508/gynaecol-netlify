const nodemailer = require("nodemailer");

const main = async (req, res) => {
  console.log(req.body);


  let transporter = nodemailer.createTransport({
    host: "mail.gynaecolperinatol.hr",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "josip.djelmis@gynaecolperinatol.hr", 
      pass: "Djelmis10203040", 
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    }
  });



  let info = await transporter.sendMail({
    from: '"gynaecol" <josip.djelmis@gynaecolperinatol.hr>', // sender address
    to: "josip.djelmis@gynaecolperinatol.hr, mislav0508@hotmail.com", // list of receivers
    subject: `${req.body.subject}`, // Subject line
    html: `
      <p>Ime i prezime: ${req.body.name} ${req.body.lastName}</p>                                       
      <p>Poruka: ${req.body.comment}</p> 
      `, // html body
  });
  console.log("Message sent: %s", info.messageId); 

}

module.exports = {
  main
}

