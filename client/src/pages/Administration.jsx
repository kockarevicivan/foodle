import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { IconButton } from "@material-ui/core";
import TabPanel from "../components/Tabs/TabPanel";
import DailyMenu from "../components/Tabs/DailyMenu";
import ManageUsers from "../components/Tabs/ManageUser";
import WeeklySummary from "../components/Tabs/WeeklySummary";
import styles from "./styles";
const useStyles = makeStyles(styles);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  console.log(classes);
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
        <IconButton
          className={classes.buttonStyles}
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => setValue(2)}
        >
          Summary
        </IconButton>
      </Tabs>
      <TabPanel value={value} index={0}>
        <DailyMenu />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ManageUsers />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WeeklySummary />
      </TabPanel>
    </div>
  );
}
