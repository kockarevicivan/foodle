export default (theme) => ({
  header: {
    backgroundColor: "#d50000",
  },

  title: {
    color: "white",
    flex: "1 1 100%",
  },
  formContainer: {
    padding: "15px 50px",
  },
  inputField: {},
  buttonStyles: {
    "&:focus": {
      backgroundColor: "#d50000",
      color: "white",
      outline: "none",
    },
    border: 0,
    borderRadius: "1em",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginRight: ".5em",
  }
});
