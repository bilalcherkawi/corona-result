const xlsx= require("xlsx");
let wb =xlsx.readFile("corona.xlsx");
let ws=wb.Sheets["Sheet1"]
let data =xlsx.utils.sheet_to_json(ws);




      for (let i = 0; i < data.length; i++) {
          if(data[i].TestResult="positif"){
            const nodemailer = require("nodemailer");
            let transporter = nodemailer.createTransport({
                service:"gmail",
                auth: {
                  user:"cherkawibilal7@gmail.com", // generated ethereal user
                  pass:"bilal1231" , // generated ethereal password
                },
              });
              let mailoption = {
                from: '"bilal cherkawi" <cherkawibilal7@gmail.com>', // sender address
                to: data[i].Email, // list of receivers
                subject: "وزارة الصحة", // Subject line
                text: "فحصك ايجابي ", // plain text body
                
              };
             
              transporter.sendMail(mailoption,function(err,info){
                  if(err){
                      console.log("error")
                  }
                  else{
                      console.log("email sent ")
                  }
              })
          }
          else{
            const nodemailer = require("nodemailer");
            let transporter = nodemailer.createTransport({
                service:"gmail",
                auth: {
                  user:"cherkawibilal7@gmail.com", // generated ethereal user
                  pass:"bilal1231" , // generated ethereal password
                },
              });
              let mailoption = {
                from: '"bilal cherkawi" <cherkawibilal7@gmail.com>', // sender address
                to: data[i].Email, // list of receivers
                subject: "وزارة الصحة", // Subject line
                text: "فحصك سلبي", // plain text body
                
              };
             
              transporter.sendMail(mailoption,function(err,info){
                  if(err){
                      console.log("error")
                  }
                  else{
                      console.log("email sent ")
                  }
              })
          }
        }
    
