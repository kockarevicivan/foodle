import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { IconButton } from "@material-ui/core";
import TabPanel from "../components/Tabs/TabPanel";
import { connect } from "react-redux";
import PlaceOrder from "../components/Tabs/PlaceOrder";
import OrderOverview from "../components/Tabs/OrderOverview";
import OrderHistory from "../components/Tabs/OrderHistory";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "inherit",
  },

  buttonStyles: {
    marginRight: ".5em",
  },
}));

function Ordering({ isAdmin }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <Tabs value={value}>
        <IconButton
          className={classes.buttonStyles}
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => setValue(0)}
        >
          Place an order
        </IconButton>
        <IconButton
          className={classes.buttonStyles}
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => setValue(1)}
        >
          Order history
        </IconButton>
        {isAdmin ? (
          <IconButton
            color="secondary"
            size="small"
            className={classes.buttonStyles}
            variant="contained"
            onClick={() => setValue(2)}
          >
            Send an order
          </IconButton>
        ) : null}
      </Tabs>
      <TabPanel value={value} index={0}>
        <PlaceOrder />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderHistory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderOverview />
      </TabPanel>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAdmin: state.authenticationReducers.user?.role === "admin",
});

export default connect(mapStateToProps, {})(Ordering);
