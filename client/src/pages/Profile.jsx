import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import { IconButton, Grid } from "@material-ui/core";
import TabPanel from "../components/Tabs/TabPanel";
import { makeStyles } from "@material-ui/styles";
import ProfileCredentialsForm from "../components/Tabs/ProfileCredentialsForm";
import ProfileSecurityForm from "../components/Tabs/ProfileSecurityForm";
import styles from "./styles";
const useStyles = makeStyles(styles);


export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  
    return (
      <div className={classes.root}>
        <Tabs value={value}>
          <IconButton
            size="small"
            className={classes.buttonStyles}
            variant="outlined"
            color="secondary"
            onClick={() => setValue(0)}
          >
            Menu
          </IconButton>
          <IconButton
            className={classes.buttonStyles}
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => setValue(1)}
          >
            Users
          </IconButton>
        </Tabs>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <TabPanel value={value} index={0}>
            <ProfileCredentialsForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProfileSecurityForm />
          </TabPanel>
        </Grid>
      </div>
    );
}

