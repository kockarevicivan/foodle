import React, { Component } from "react";
import { Tooltip, Button } from "@material-ui/core";

class EnterPriceButton extends Component {
  state = {
    clicked: false,
  };
  render() {
    const { order } = this.props;
    const { clicked } = this.state;
    return (
      <Tooltip>
        {order.status === 1 ? (
          <React.Fragment>
            {clicked ? (
              <React.Fragment>
                <input type="number" />
                <Button
                  onClick={() => this.setState({ clicked: false })}
                  variant="contained"
                  size="small"
                >
                  Ok
                </Button>
              </React.Fragment>
            ) : (
              <Button
                onClick={() => this.setState({ clicked: true })}
                variant="contained"
                size="small"
              >
                Enter price
              </Button>
            )}
          </React.Fragment>
        ) : null}
      </Tooltip>
    );
  }
}

export default EnterPriceButton;
