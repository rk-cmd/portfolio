import React from 'react'
import styled from 'styled-components'

const NavBarItems = ({title}) => {
    return (
            <ListItem href={ '#' + title } >{title}</ListItem>
    )
}

const ListItem = styled.a`

    @media (max-width: 480px) {
        font-size: 8px;
    }
    @media (min-width: 481px) {
        font-size: 15px;
    }

    font-weight: 700;
    // font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    text-decoration: none;
    color: #606060;
`

export default NavBarItems
