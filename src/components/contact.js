import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, TextField, IconButton } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DownloadIcon from "@mui/icons-material/Download";
import Resume from "../resume/Resume.pdf";
import { Navbar } from "./navbar";
import { display } from "@mui/system";

export function Contact() {
  const form = useRef();

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nnfburb",
        "template_v32v8us",
        form.current,
        "J-28k9HCDHaRQznts"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.reset.reset()
          alert("Thank You For The Mail")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-background">
      <Navbar />

      <div className=" d-flex flex-wrap justify-content-around align-items-center mt-5">
        <div className="text-sm-left text-center">
          <h3 className="mt-2">Contact me</h3>
          <h6 className="mt-4">
            <PhoneAndroidIcon /> +91 8838758525
          </h6>
          <h6 className="mt-4">
            <MailOutlineIcon /> sriramjs07@gmail.com
          </h6>
          <div className="mt-4">
            <a className="text-decoration-none " href={Resume} download>
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
          </div>
        </div>
        <div className="text-center">
          <form name="reset" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <br />
            <TextField
              required
              className="input-width"
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <br />
            <label>  Email</label>
            <br />
            <TextField
              required
              className="input-width"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
            <br />
            <label>Message</label>
            <br />
            <TextField
              required
              className="input-width"
              name="message"
              placeholder="Message"
            />
            <br />
            <Button
              className="input-width"
              sx={{
                padding: "10px",
                marginTop: "20px",
                backgroundColor: "black",
                color: "white",
                ":hover": {
                  backgroundColor: "#4caf50",
                  color: "whitesmoke",
                  transition: ".4s ease-in-out",
                },
              }}
              variant="text"
              type="submit"
              value="sent"
            >
              Send
            </Button>
          </form>
          
        </div>
      </div>
    </div>
  );
}
