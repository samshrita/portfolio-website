
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 50px 0;
  // background: #f9f9f9;
  font-size: 2rem;
  font-weight: 600;
  color: var(--purple);
    font-family: "Space Grotesk", sans-serif;
  .heading {
    text-align: center;
    font-size: 2rem;
  font-weight: 600;
  color: var(--purple);
    margin-bottom: 30px;
    i {
      margin-right: 30px;
    }
  }

  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    &::after {
      content: '';
      position: relative;
      width: 6px;
      background-color: #ddd;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
    }
  }

  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 100%;

    &.left {
      left: 0;
    }

    &.right {
      left: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      right: -17px;
      background-color: #fff;
      border: 4px solid #ff9f55;
      font-family: "Space Grotesk", sans-serif;
      top: 15px;
      border-radius: 50%;
      z-index: 1;
    }
  }

  .container.left::after {
    left: -16px;
  }

  .content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    &.right {
      margin-left: 10px;
    }
    &.left {
      margin-right: 60px;
    }
  }

  .tag {
    h2 {
      margin: 0;
      color: #ff9f55;
    }
  }

  .desc {
    margin-top: 10px;
    h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }
    p {
      margin: 0;
      font-size: 1rem;
      color: #777;
    }
  }

  .morebtn {
    text-align: center;
    margin-top: 20px;
    .btn {
      text-decoration: none;
      color: #fff;
      background: #ff9f55;
      padding: 10px 20px;
      border-radius: 5px;
      display: inline-block;
      transition: background 0.3s;
      &:hover {
        background: #ff7f26;
      }
      i {
        margin-left: 10px;
      }
    }
  }
`;

function Experience() {
  return (
    <ExperienceSection id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <div className="timeline">
        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Code Rush</h2>
            </div>
            <div className="desc">
              <h3>CLoud Security Apprentice</h3>
              <p>December 2023 - present</p>
            </div>
          </div>
        </div>


        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>Code For Nepal</h2>
            </div>
            <div className="desc">
              <h3>Data Fellow | Online</h3>
              <p>May 2024 - Present</p>
            </div>
          </div>
        </div>
      </div>

    </ExperienceSection>
  );
}

export default Experience;
