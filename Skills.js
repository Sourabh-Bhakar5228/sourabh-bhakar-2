import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>MongoDB:

                                Understanding of NoSQL databases.
                                Proficiency in designing and interacting with MongoDB databases.
                                Knowledge of CRUD operations (Create, Read, Update, Delete) using MongoDB.<br />
                                Express.js:

                                Knowledge of server-side web application framework.
                                Understanding of routing in Express.js.
                                Middleware configuration for handling HTTP requests and responses.<br />
                                React.js:

                                Proficiency in building user interfaces using React.js.
                                Understanding of React components, props, state, and lifecycle methods.
                                Experience with state management libraries like Redux or Context API.<br />
                                Node.js:

                                Server-side JavaScript runtime environment.
                                Ability to build scalable and efficient server-side applications.
                                Knowledge of NPM (Node Package Manager) for managing dependencies.<br />
                                JavaScript/ES6+:

                                Strong proficiency in JavaScript and its modern features (ES6 and beyond).
                                Asynchronous programming using Promises or Async/Await.
                                Familiarity with arrow functions, template literals, and other ES6+ syntax.<br />
                                HTML and CSS:

                                Building and styling user interfaces using HTML and CSS.
                                Knowledge of responsive design principles.
                                Experience with CSS preprocessors like Sass or Less.<br />
                                RESTful APIs:

                                Designing and consuming RESTful APIs.
                                HTTP methods (GET, POST, PUT, DELETE) and status codes.<br />
                                Version Control/Git:

                                Proficiency in using Git for version control.
                                Understanding of branching, merging, and pull requests.<br />
                                Web Development Tools:

                                Familiarity with build tools like Webpack.
                                Debugging using browser developer tools.
                                Experience with code editors such as Visual Studio Code.<br />
                                Testing:

                                Writing unit tests for both frontend and backend code.
                                Familiarity with testing libraries and frameworks.<br />
                                Deployment and Hosting:

                                Deploying applications on platforms like Heroku, AWS, or other cloud services.
                                Configuring and managing server environments.<br />
                                Soft Skills:

                                Problem-solving and critical thinking.
                                Good communication skills, especially in a team environment.
                                Adaptability to new technologies and frameworks.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="skkilsImg" />
                                    <h5>HTML and CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skkilsImg" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="skkilsImg" />
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="skkilsImg" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="skkilsImg" />
                                    <h5>Express JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="skkilsImg" />
                                    <h5>Mongo DB</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="backIMG" />
        </section>
    )
}
