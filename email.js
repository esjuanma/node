const nodemailer = require('nodemailer');

const auth = {
    user: 'bsc52bin2aag4okf@ethereal.email',
    pass: 'dNqgShpEEucrATegch'
};

const config = {
	auth,
    host: 'smtp.ethereal.email',
    port: 587
}

const transporter = nodemailer.createTransport(config);

const mailOptions = {
	from: auth.user,
	to: 'test@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'Open this email with an HTML viewer/client',
	html: 'That was <b>easy</b>!'
};

console.log('-> Sending..');

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.log('->', error);
	} else {
		console.log('-> Email sent:', info.response);
	}

	console.log('-> Script finished!');
});
