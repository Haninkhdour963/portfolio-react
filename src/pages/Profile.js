import React from 'react';
import meImage from '../assets/me.png';

const Profile = () => (
  <section className="creative">
    <div className="left">
      <h3>Web Developer</h3>
      <h4>Full Stack Developer | Trainee at Orange Academy</h4>
      <p>
      I am a dedicated web developer currently training at Orange Academy’s intensive programming bootcamp, where I am on the path to becoming a full-stack developer. With a strong foundation in HTML, CSS, and JavaScript, I am expanding my skill set to include modern frameworks like React for front-end development and PHP with Laravel for back-end solutions. Throughout my training, I have engaged in hands-on projects that enhance my understanding of both client-side and server-side technologies. I am learning to implement RESTful APIs, manage databases, and utilize version control systems such as Github to ensure collaborative and efficient workflows. I am passionate about creating responsive, user-friendly web applications that prioritize user experience and accessibility. My training has instilled in me the importance of best practices in coding, problem-solving, and debugging. I thrive in team environments and enjoy collaborating on projects that challenge my skills and creativity. As I continue my journey in web development, I am eager to apply my knowledge and contribute to innovative projects, while further developing my expertise in this dynamic field. I am excited about the opportunities ahead and am committed to continuous learning and growth as a developer.
      </p>
    </div>
    <div className="right">
      <img src={meImage} alt="Profile" className="profile" />
    </div>
  </section>
);

export default Profile;
