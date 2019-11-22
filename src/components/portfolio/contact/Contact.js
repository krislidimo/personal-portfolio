import React from 'react';

function Contact() {
	return (
		<div className="contact">
			<a className="mail" href="mailto:krislidimo@gmail.com">
				<i className="fas fa-envelope-square"></i>
			</a>
			<i className="fab fa-linkedin"
				onClick={() => window.open("https://www.linkedin.com/in/krislidimo/", "_blank")}
			></i>
			<i className="fab fa-github-square"
				onClick={() => window.open("https://github.com/krislidimo", "_blank")}
			></i>
		</div>
	);
}

export default Contact;