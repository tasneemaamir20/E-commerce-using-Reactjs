import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-centermt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3, px: 10 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <button className="pb-5" variant="h6">
              About
            </button>
          </div>

          <div>
            <button className="pb-5" variant="h6">
              Blog
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6">
              press
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6">
              career
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6">
              partners
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <button className="pb-5" variant="h6">
              Marketing
            </button>
          </div>

          <div>
            <button className="pb-5" variant="h6">
              Analytics
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6">
              Commerce
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6">
              Insight
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6">
              Support
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documnetation
          </Typography>
          <div>
            <button className="pb-5" variant="h6">
              Guides
            </button>
          </div>

          <div>
            <button className="pb-5" variant="h6">
              API status
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <button className="pb-5" variant="h6">
              claim
            </button>
          </div>

          <div>
            <button className="pb-5" variant="h6">
              privacy
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6">
              terms
            </button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company, All right reserved
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by me
          </Typography>
          <Typography variant="body2" component="p" align="center">
            icon made by{""}
            <Link
              href="https://Freepik.com"
              color=" inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            From {""}
            <Link
              href="https://Flaticon.com"
              color=" inherit"
              underline="always"
            >
              Flaticon
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
