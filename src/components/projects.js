import * as React from "react";
import { Navbar } from "./navbar";


const htmlCssProject = [
  {
    projectname: "Country details app",
    link: "https://vermillion-fox-bba983.netlify.app",
    summary: "countries with their flag and wheather details",
    image:"https://img.freepik.com/free-vector/all-country-flags-euro-cup_1057-1259.jpg"
  },
  {
    projectname: "Currency converter",
    link: "https://graceful-beijinho-3a2b28.netlify.app",
    summary: "convert all currencies",
    image:"https://youmatter.world/app/uploads/sites/2/2021/04/local-currencies-alternative-economy2.jpg"
  }
];

const Reactproject = [
  {
    projectname: "E-commerce app",
    link: "https://comfy-rolypoly-b03b65.netlify.app/",
    summary:
      "Add product to cart view cart items",
      image:"https://1.bp.blogspot.com/-d3naBjwfrSE/VHVRNle-CLI/AAAAAAAAACo/2ADzqat6xR4/s1600/shopping-cart-1920.jpg"
    }
];

const fullstackproject = [
  {
    projectname: "Library app",
    link: "https://dynamic-cuchufli-7ede92.netlify.app",
    summary:
      "CRUD operations with library app",
      image:"https://static.toiimg.com/thumb/80507427.cms?resizemode=75&width=1200&height=900"
  },
  {
    projectname: "Authentication app",
    link: "https://elaborate-beijinho-3afe6d.netlify.app",
    summary:
      "Create an account login and forgot-password operatons",
      image:"https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg"
  }
];

export function Projects() {
  return (
    <div className="body text-light text-center">
      <div>
        <Navbar/>
      </div>
      

      <h2 className="mt-3"> HTML & CSS Projects</h2>
      <div className="d-flex mb-5 flex-wrap m-2 justify-content-around">
        {htmlCssProject.map((e) => (
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
            </div>
         </div>
          </div>
        ))}
      </div>

      <h2 className="mt-4"> React  Projects</h2>

      <div className=" mb-5 d-flex flex-wrap m-2 justify-content-around">
        {Reactproject.map((e) => (
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
            </div>
         </div>
          </div>
        ))}
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
            </div>
         </div>
          </div>
        ))}
      </div>


    </div>
  );
}
