import React, { Component } from "react";
import { Tooltip, Button, TextField } from "@material-ui/core";
import { setTotal } from "../../../store/actions/order/orderActions";
import { connect } from "react-redux";

class EnterPriceButton extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      totalPrice: props.order.totalPrice,
    };
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  clicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  updateTotalPrice = async () => {
    const { _id } = this.props.order;
    const { totalPrice } = this.state;
    await this.props.setTotal(_id, totalPrice);
    this.clicked();
  };

  render() {
    const { order } = this.props;
    const { clicked, totalPrice } = this.state;
    return (
      <Tooltip>
        {order.status === 1 ? (
          <React.Fragment>
            {clicked ? (
              <React.Fragment>
                <TextField
                  style={{ color: "white" }}
                  type="number"
                  value={totalPrice}
                  name="totalPrice"
                  onChange={this.onChange}
                />
                <Button
                  onClick={this.updateTotalPrice}
                  variant="contained"
                  size="small"
                >
                  Ok
                </Button>
              </React.Fragment>
            ) : (
              <Button onClick={this.clicked} variant="contained" size="small">
                Enter price
              </Button>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {order.status === 2 ? (
              <React.Fragment>
                {!clicked ? (
                  <React.Fragment>
                    <p style={{ color: "white", marginRight: ".5em" }}>
                      Total price: {order.totalPrice}
                    </p>
                    <Button
                      onClick={this.clicked}
                      variant="contained"
                      size="small"
                    >
                      Change total price
                    </Button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <TextField
                      style={{ color: "white" }}
                      type="number"
                      value={totalPrice}
                      name="totalPrice"
                      onChange={this.onChange}
                    />
                    <Button
                      onClick={this.updateTotalPrice}
                      variant="contained"
                      size="small"
                    >
                      Ok
                    </Button>
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : null}
          </React.Fragment>
        )}
      </Tooltip>
    );
  }
}

export default connect(null, { setTotal })(EnterPriceButton);
