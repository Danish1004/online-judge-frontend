import React from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import Codesvg from "../../images/Logocode.svg";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="about_section">
        <div>
          <h1 className="main_title">Learn Algorithm Together</h1>
          <div className="about_grid">
            <div className="grid-item">
              <div className="about_info">
                <h2>Join a Room</h2>
                <p className="p1">
                  Join or create a room, invite your friends, and get ready to
                  solve problems together.
                </p>
              </div>
            </div>
            <div className="grid-item">
              <div className="about_info">
                <h2>Start The Room</h2>
                <p>
                  You'll all get the same coding question to solve. Only you can
                  see your editor.
                </p>
              </div>
            </div>
            <div className="grid-item">
              <div className="about_info">
                <h2>Solve Problems</h2>
                <p>
                  Chat and solve questions together. Once you're done, you can
                  browse other people's solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main_image">
          <img src={Codesvg} alt="Main Logo" />
        </div>
      </div>
      <div className="secondary_info">
        <h2>Start Learning Together</h2>
        <p className="info_1">
          Join our community of over 100,000 programmers and start solving
          problems today.
        </p>
      </div>
      <div className="questions_info">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          <div className="question_parts">
            <h3>What is semicolon?</h3>
            <p>
              binarysearch is a free site where you can work on coding and
              algorithms problems together with others.
            </p>
          </div>

          <div className="question_parts">
            <h3>Can I use semicolon just by myself?</h3>
            <p>
              Yes! You can create a private room where only you can solve
              problems.
            </p>
          </div>

          <div className="question_parts">
            <h3>What can I type on chat?</h3>
            <p>
              Feel free to chat about whatever :, but don't outright give
              answers unprovoked and please be respectful.
            </p>
          </div>

          <div className="question_parts">
            <h3>What type of questions should I expect?</h3>
            <p>
              There are standard algorithms and data structures questions that
              you can expect from major tech companies such as Google,
              Microsoft, Facebook, and Amazon.
            </p>
          </div>

          <div className="question_parts">
            <h3>Who are you?</h3>
            <p>
              Hi! We're Lawrence and Jae, two engineers from Canada. We want to
              make learning algorithms more accessible. We got the idea for
              binarysearch from having had to prepare for interviews at many
              tech companies. We found that by working on problems with friends
              we had a lot of fun and learned faster.
            </p>
          </div>

          <div className="question_parts">
            <h3>Is it really free?</h3>
            <p>Yes, it's free and will always be free.</p>
          </div>

          <div className="question_parts">
            <h3>How can I get started?</h3>
            <p>You can get started below!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
