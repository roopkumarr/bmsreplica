const nodemailer = require('nodemailer');

module.exports = async function(bookingObj){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // Specify the email and password for sending mail replace it with some_email, some_email_pass respectively
        auth: {
            user: some_email,
            pass: some_email_pass
        }
    });
    var mailOptions = {
        to: bookingObj.email,
        subject: 'Booking Confirmation mail',
        html: `<p><h1>Your booking has been confirmed for ${bookingObj.seats_booked} Seats and booing Id is ${bookingObj._id} </h1></p>`
    };
    try {
        var x = await transporter.sendMail(mailOptions);
        return '200';
      }
      catch (err) {
        console.log(err);
        return '404';
      }
};