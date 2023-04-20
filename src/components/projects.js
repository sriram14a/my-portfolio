import * as React from "react";
import { Navbar } from "./navbar";

const fullstackproject = [
  {
    projectname: "Library app",
    link: "https://dynamic-cuchufli-7ede92.netlify.app",
    summary:
      "CRUD operations with library app",
      image:"https://static.toiimg.com/thumb/80507427.cms?resizemode=75&width=1200&height=900",
      front:"",
      back:"",
  },
  {
    projectname: "Authentication app",
    link: "https://elaborate-beijinho-3afe6d.netlify.app",
    summary:
      "Create an account login and forgot-password operatons",
      image:"https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg",
      front:"",
      back:"",
  },
  
];

export function Projects() {
  return (
    <div className="projects  text-light text-center">
      <div>
        <Navbar/>
      </div>


      <h2 className="mt-4 mb-4"> Full Stack Projects</h2>
      <div className="d-flex flex-wrap m-2 justify-content-around">
        {fullstackproject.map((e) => (
          <div className="card-width bg-light text-dark m-2 rounded ">
         <div className="hover">
         <img className="project-image" src={e.image} alt="img"/>
            <div className="text-area text-light">
            <div className="card-body">
              <h5 className="card-title">{e.projectname}</h5>
              <p className="summary">{e.summary}</p>
              <a className="text-decoration-none text-light bg-dark p-2 rounded" href={e.link} target="_blank">
                Click here to view app
              </a>
            </div>
            <div className=" d-flex justify-content-around">
            <a className="text-decoration-none text-light bg-dark p-2 rounded" href={e.front} target="_blank">
                Front-end code
              </a>
              <a className="text-decoration-none text-light bg-dark p-2 rounded" href={e.back} target="_blank">
                Back-end code
              </a>
            </div>
            </div>
         </div>
          </div>
        ))}
      </div>


    </div>
  );
}
