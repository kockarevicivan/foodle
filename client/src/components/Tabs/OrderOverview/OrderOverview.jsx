import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllTodaysOrders,
  sendAllOrders,
} from "../../../store/actions/order/orderActions";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Toolbar,
  Grid,
  Button,
} from "@material-ui/core";
import { compose } from "redux";
import { withStyles } from "@material-ui/styles";
import EnterPriceButton from "./EnterPriceButton";
import jsPDF from "jspdf";
import "jspdf-autotable";

class OrderOverview extends Component {
  state = {};

  async componentDidMount() {
    await this.props.getAllTodaysOrders();
  }

  sendOrders = async () => {
    const { orders, sendAllOrders, menu } = this.props;
    const orderIds = orders?.map((order) => order._id);
    this.generatePdf();
    try {
      await sendAllOrders(orderIds, menu?._id);
      alert("All orders have been sent.");
    } catch (error) {
      alert(error);
    }
  };

  generatePdf = () => {
    const data = this.props.orders.map((order) => {
      let item = [order.user.fullName];
      const hrana = order.orderItems
        .map((item) => `${item.title} ${item.quantity}`)
        .join(`\n`);
      item.push(hrana);
      return item;
    });

    let doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });
    const date = `${new Date().getDate()}.${new Date().getMonth() + 1}`;
    doc.text(date, 1, 5);
    doc.autoTable({
      theme: "grid",
      head: [["ime", "hrana"]],
      body: data,
    });
    doc.save(`${date}.pdf`);
  };

  render() {
    const { orders, classes, menu } = this.props;
    return (
      <div>
        <Button
          disabled={menu.ordersSent}
          onClick={this.sendOrders}
          variant="contained"
          className={classes.buttonStyles}
        >
          Send the fucking order
        </Button>
        <Grid container spacing={3}>
          {orders?.map((order) => (
            <Grid item xs={6}>
              <TableContainer component={Paper}>
                <Toolbar className={classes.red}>
                  <h5 className={classes.title}>{order.user.fullName}</h5>
                  <EnterPriceButton order={order} />
                </Toolbar>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Title</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Quantity</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.orderItems.map((item) => (
                      <TableRow key={item._id}>
                        <TableCell>{item.title + " " + item.price}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orderReducers.orders,
  menu: state.menuReducers.menu,
});

const styles = (theme) => ({
  buttonStyles: {
    marginBottom: "1.5em",
  },
  red: {
    backgroundColor: "#d50000",
  },
  title: {
    flex: "1 1 100%",
    color: "white",
  },
});

export default compose(
  withStyles(styles, { name: "OrderOverview" }),
  connect(mapStateToProps, { getAllTodaysOrders, sendAllOrders })
)(OrderOverview);
