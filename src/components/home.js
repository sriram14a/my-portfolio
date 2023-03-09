import { Button, IconButton } from "@mui/material";
import Resume from "../resume/Resume.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import { Navbar } from "./navbar";
import GitHubIcon from '@mui/icons-material/GitHub';

export function Home() {
  return (
    <div >
      <div className="body" >
      <Navbar/>
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        <div className="about p-3">
          <h1 className="text-center font-size text-light">Hi,I am Sriram</h1>
          <h5 className="mt-3 mb-3 text-center text-sm-left text-light">Full Stack Developer</h5>
          <div className="text-center text-sm-left">
          <a className="text-decoration-none" href={Resume} download>
            <Button
              sx={{
                padding: "0 20px 0 5px",
                backgroundColor: "black",
                color: "white",
                ":hover": {
                  backgroundColor: "#4caf50",
                  color: "whitesmoke",
                  transition: ".4s ease-in-out",
                },
              }}
              variant="text"
            >
              {" "}
              <IconButton>
                <DownloadIcon sx={{ color: "white" }} />
              </IconButton>{" "}
              Resume
            </Button>
          </a>
          <a href="https://github.com/sriram14a" target="_blank"><IconButton sx={{marginLeft:"20px"}}>
              <GitHubIcon sx={{color:"white"}} />
            </IconButton></a>
          </div>
        </div>
        <div>
          <h1 className="text-light text-center mt-5">Skills</h1>
          <section className="text-light">
            <h3 className="mt-3 text-sm-left text-center mb-3">Front end</h3>
            <div className="d-flex flex-wrap">
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt="img"
                />
                <p className="text-center">HTML</p>
              </div>
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                  alt="img"/>
                <p className="text-center">CSS</p>
              </div>
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt="img"/>
                <p className="text-center">Js</p>
              </div>
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="img"/>
                <p className="text-center">Bootstrap</p>
              </div>
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="img" />
                <p className="text-center">React</p>
              </div>
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://v4.material-ui.com/static/logo.png"
                  alt="img"/>
                <p className="text-center">Mui</p>
              </div>
            </div>
            <h3 className="mt-3 text-sm-left text-center mb-3">Back end</h3>
            <div className="d-flex flex-wrap ">
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                  alt="img" />
                <p className="text-center">node js</p>
              </div>
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                  alt="img"/>
                <p className="text-center">express js</p>
              </div>
            </div>
            <h3 className="mt-3 text-sm-left text-center mb-3">Database</h3>
            <div className="d-flex flex-wrap pb-5">
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
                  alt="img"/>
                <p className="text-center">Mongo Db</p>
              </div>
              <div>
                <img
                  className="image-size p-2 ml-2"
                  src="https://cdn-icons-png.flaticon.com/512/4299/4299956.png"
                  alt="img"/>
                <p className="text-center">SQL</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div >
    </div>
  );
}
