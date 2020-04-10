export default (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "inherit",
  },
  tabContainer: {
    marginTop: '30px',
  },
  formContainer: {
    padding: '15px 50px',
  },
  buttonStyles: {
    '&:focus': {
      backgroundColor: "#d50000",
      color: "white",
      outline: 'none'
    },
    border: 0,
    borderRadius: "1em",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginRight: ".5em",
    
  }

});
