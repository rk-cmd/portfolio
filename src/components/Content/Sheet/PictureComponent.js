import React from 'react'
import styled from 'styled-components'

const PictureComponent = ({picture}) => {
    return (
            <PictureContent className="PictureContent">
                <Picture picture={picture}/>
            </PictureContent>
    )
}

const PictureContent = styled.div`
    @media (max-width: 480px) {
        height: 50%;
        width: 100%;
    }
    @media (min-width: 481px) and (max-width: 1199px) {
        height: 50%;
        width: 100%;
    }
    @media (min-width: 1200px) {
        height: 100%;
        width: 50%;
    }
    // background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Picture = styled.div`

    @media (min-width: 481px) and (max-width: 1199px) {
        max-width: 250px;
    }

    // background-image: url(/others/rohith.jpg);
    background-image: url(${ props => props.picture});
    height: 80%;
    width: 50%;
    background-size: cover;
    background-position: center;
`

export default PictureComponent
