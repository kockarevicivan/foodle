import React from 'react'
import {withStyles} from "@material-ui/styles"
    import style from "./style"

function Home({classes}) {
    return (
        <div className={classes.blueColor}>
            Hello bitch
        </div>
    )
}

export default withStyles(style)(Home);
