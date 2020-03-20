import React from 'react'
import {Container} from "react-bootstrap"
import Header from '../UI/Header/Header'
import Sidebar from '../UI/Sidebar'

function Layout({children}) {
    return (
        <Container>
            <Header></Header>
            <Sidebar></Sidebar>
            {children}
        </Container>
    )
}

export default Layout
