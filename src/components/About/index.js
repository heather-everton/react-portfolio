import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <div className="flex-row">
          <img src={coverImage} style={{width: "25%"}} alt="cover" />
          <div style={{width: "70%", margin: "20px" }}>
            <p>
            I am a software deleoper who loves to code! As a utah native, I enjoy time in the mountains hiking, or paddle boarding and playing with my kids.
            I am a graduate of the U of U Full Stack Software Developer Boot Camp, and trained and experienced in the MERN Stack and more.
            I am a full-stack developer and would love to work with you on your project.
            </p>
          </div>
        </div>
        
    </section>
  );
}
export default About;
