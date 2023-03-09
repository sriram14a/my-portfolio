import { Button, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-around ">
        <div>
        <IconButton onClick={()=>navigate("/")} sx={{color:"white",":hover":{color:"#4caf50",transition:".4s ease-in-out"}}}>
               <HomeIcon/> 
            </IconButton>
        </div>
        <div >
          <div className="d-flex">  
            <Button onClick={()=>navigate("/projects")} sx={{color:"white",":hover":{color:"#4caf50",transition:".4s ease-in-out"}}} variant="text">Projects</Button>
            <Button onClick={()=>navigate("/contacts")} sx={{color:"white",":hover":{color:"#4caf50",transition:".4s ease-in-out"}}} variant="text">Contact</Button>
          </div>
        </div>
    </div>
  );
}
