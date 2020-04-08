export default (theme) => ({
  header: {
    backgroundColor: "#d50000",
  },

  title: {
    color: "white",
  },
  formContainer: {
    padding: '15px 50px',
  },
  inputField: {
    '&:focus': {
      border:"none",
      boxShadow: "none"
    },
    '&:blur': {
      border:"none",
      boxShadow: "none"
    },
    color: "red",
    border:"none",
    boxShadow: "none"
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
