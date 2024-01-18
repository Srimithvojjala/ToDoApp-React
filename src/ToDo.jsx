/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Component } from "react";
import {
  TableRow,
  TableCell,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";

class YourComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      openDeleteDialog: false,
      openEditDialog: false,
      updateEditvalue: "",
    };
  }
  componentDidMount() {
    this.setState({ updateEditvalue: this.props.row.description });
  }
  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };

  handleClose = () => {
    this.setState({ openDeleteDialog: false, openEditDialog: false });
  };

  handleDelete = () => {
    this.props.handleDelete(this.props.index);
    this.handleClose();
  };

  handleEditClick = () => {
    this.props.handleEdit(this.props.row.id, this.state.updateEditvalue);
    this.handleClose();
  };

  render() {
    const { row } = this.props;
    const { checked } = this.state;
    const activeClass = { textDecoration: checked ? "line-through" : "none" };

    return (
      <>
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          style={{ ...activeClass }}
        >
          <TableCell component="th" scope="row" align="center" width={"20px"}>
            {row.id}
          </TableCell>
          <TableCell style={{ paddingLeft: "15px" }}>
            {row.description}
          </TableCell>
          <TableCell align="right">{row.progress}</TableCell>
          <TableCell align="center">
            <Button
              style={{ color: "steelblue" }}
              onClick={() => this.setState({ openEditDialog: true })}
            >
              <EditIcon />
            </Button>
            <Button
              style={{ color: "steelblue" }}
              onClick={() => this.setState({ openDeleteDialog: true })}
            >
              <DeleteIcon />
            </Button>
            <Dialog
              open={this.state.openDeleteDialog}
              onClose={this.handleClose}
            >
              <DialogContent>
                <DialogContentText>
                  Are you sure want to Delete?
                </DialogContentText>
              </DialogContent>
              <DialogActions >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "steelblue" }}
                  onClick={() => this.handleClose()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "steelblue" }}
                  onClick={() => this.handleDelete()}
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={this.state.openEditDialog} onClose={this.handleClose}>
              <DialogContent>
                <DialogContentText>Edit the Task Details</DialogContentText>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="editValue"
                  type="text"
                  value={this.state.updateEditvalue}
                  onChange={(e) =>
                    this.setState({ updateEditvalue: e.target.value })
                  }
                  style={{ width: "400px" }}
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "steelblue" }}
                  onClick={() => this.handleClose()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "steelblue" }}
                  onClick={() => this.handleEditClick()}
                >
                  Add
                </Button>
              </DialogActions>
            </Dialog>
          </TableCell>
          <TableCell align="left" style={{display:'flex',justifyContent:'center'}}>
            <Checkbox
              icon={<MarkAsUnreadOutlinedIcon />}
              checkedIcon={<MarkunreadIcon style={{ color: "steelblue" }} />}
              checked={checked}
              onChange={this.handleCheckboxChange}
            />
          </TableCell>
        </TableRow>
      </>
    );
  }
}

export default YourComponent;
