import React from "react";
import Contact from "./contact";
import { Box, List, Stack, Typography, ListItem } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareBehance } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
function AllContact() {
  return (
    <section className="gray">
      <div className="container">
        <div className="mainhead">
          <h2>Contact</h2>
        </div>
        <Stack
          gap={{
            xs: "25px",
            lg: "35px",
          }}
          className="containnn"
          direction={{
            sm: "column",
            md: "row",
          }}
          justifyContent={"center"}
        >
          <Box className="chat">
            <Typography className="MAIN">Let's Chat.</Typography>
            <Typography className="submain">
              tell me about your project
            </Typography>
            <Box className="boxes">
              <Box className="mailme box">
                <EmailIcon />
                <div className="texts">
                  <Typography>mail me at.</Typography>
                  <Typography>radwa.ehab99@gmail.com</Typography>
                </div>
              </Box>
              <Box>
                <Typography className="textsocial">Socials:</Typography>

                <Box className="Socials box">
                  <List>
                    <ListItem>
                      <FacebookIcon />
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon icon={faSquareBehance} />
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon icon={faSquareInstagram} />
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="form">
            <Contact />
          </Box>
        </Stack>
      </div>
    </section>
  );
}

export default AllContact;
