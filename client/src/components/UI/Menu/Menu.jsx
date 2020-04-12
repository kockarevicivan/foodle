import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodaysMenu } from "../../../store/actions/menu/menuActions";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AdminMenuItem from "./AdminMenuItem";
import RegularMenuItem from "./RegularMenuItem";
import { withStyles } from "@material-ui/styles";
import { compose } from "redux";
import styles from "../../Tabs/styles";

class Menu extends Component {
  state = {};

  componentDidMount() {
    this.props.getTodaysMenu();
  }

  render() {
    const { menu } = this.props;
    return (
      <div>
        <Toolbar className={this.props.classes.header}>
          <Typography
            className={this.props.classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Food menu
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <strong>Title</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Price</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Actions</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu?.ordersSent ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Orders have been sent for today, you're to late.
                  </TableCell>
                </TableRow>
              ) : (
                <React.Fragment>
                  {menu?.items.map((item, index) =>
                    this.props.admin ? (
                      <AdminMenuItem key={item._id} item={item} index={index} />
                    ) : (
                      <RegularMenuItem key={item._id} item={item} />
                    )
                  )}
                  {menu?.items.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} align="center">
                        Menu wasn't created for today.{" "}
                        <Link to="/administration">Create a menu</Link>
                      </TableCell>
                    </TableRow>
                  ) : null}
                </React.Fragment>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.menuReducers.menu,
});

export default compose(
  withStyles(styles, { name: "Menu" }),
  connect(mapStateToProps, { getTodaysMenu })
)(Menu);
