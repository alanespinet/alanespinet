import React, { Component } from 'react';
import WorkSection from '../../common/WorkSection';

class WorkContent extends Component {

  render(){
    return (
      <div className="work-content">
        <div className="container">
          <WorkSection
            type="left"
            image="/images/web_applications_work.jpg"
            title="Web Applications"
            buttonText="View Portfolio"
            route="/work/webapplications"
          >
            I really enjoy creating Web Applications, especially when I can play around the MERN stack to do it. In my Web Applications portfolio, you will find projects containing: React.js, Node.js and Express.js, MongoDB and Mongoose, Firebase, SASS. All projects are hosted in Heroku.
          </WorkSection>

          <WorkSection
            type="right"
            image="/images/web_sites_work.jpg"
            title="Websites"
            buttonText="View Portfolio"
            route="/work/websites"
          >
            All websites you will find in my portfolio have been done using HTML5, CSS3, JavaScript and jQuery, Wordpress and PHP. This is basically what I do in my current every-day job. All of these websites are fully responsive and some are even WCAG 2.0 Compliant, one of the most important development aspects right now out there.
          </WorkSection>

          <WorkSection
            type="left"
            image="/images/video_games_work.jpg"
            title="Videogames"
            buttonText="View Portfolio"
            route="/work/videogames"
          >
            Video games are my passion, and thankfully I also have professional experience creating them. You won't see a very long list of video games here, because I only can make them in my free time, and I don't have very much of it. All video games in my portfolio were done using Unity 3d and C#.
          </WorkSection>
        </div>
      </div>
    );
  }
}

export default WorkContent;
