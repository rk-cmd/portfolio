import React from 'react'
import styled from 'styled-components'

import NavBarItems from './NavBar/NavBarItems'

const NavBar = ({sheets}) => {
    return (
            <Navigation id="NavBar">

                <NavBarItems title={"HOME"} />

                {sheets.map( (item) => 
                    <NavBarItems key={item.id} title={item.heading} />
                )}

                <NavBarItems title={"CONTACT ME"} />

            </Navigation>
    )
}

const Navigation = styled.div`
    background-color: #F0F0F0;
    height: 50px;
    width: 100%;
    // color: #606060;
    display: flex;
    flex-wrap: wrap;
`

export default NavBar