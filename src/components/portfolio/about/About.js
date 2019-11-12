import React from 'react';

import avatar from '../../../assets/images/avatar.svg';

function About() {
	return (
		<div className="about">
			<img className="avatar" src={avatar} alt='' />
			<h2 className="hello"><span>Hi, I’m Krisli.</span><span className="line2"> Nice to meet you.</span></h2>
			<p className="about-paragraph">After I completed my bachelors in Mechanical Engineering in 2018, I got involved with a crypto-currency community called EOS. 
				Working and debating with developers on a daily basis inspired me to become one.
				Because of this I joined Lambda, a 9 month coding academy where I learned how to build powerful applications using agile methodologies in a team setting.
				I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
				#Let'sWork
			</p>
		</div>
	);
}

export default About;