import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'

const Footer = ({socialMedia}) => {

    return (
        <FooterContent id="CONTACT ME">
            <FooterContentWrap>

                <FooterContentIcons>
                    {socialMedia.map( (item) => 
                        <FooterIcon key={item.id} iconDetails={item} href={item.linkUrl} target="_blank" />
                    )}
                </FooterContentIcons>

                <FooterContentText>
                    &#169; Rohith Krishnan
                </FooterContentText>

            </FooterContentWrap>
        </FooterContent>
    )
}

const FooterContent = styled.div`
    height: 175px;
    width: 100%;
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const FooterContentWrap = styled.div`
    height: 70%;
    width: 35%;
    min-width: 315px;
    // background-color: red;
`

const FooterContentIcons = styled.div`
    height: 70%;
    width: 100%;
    // background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterIcon = styled.a`

    @media (max-width: 480px) {
        height: 45px;
        width: 45px;
        background-size: 20px;
    }
    @media (min-width: 481px) {
        height: 55px;
        width: 55px;
        background-size: 25px;
    }

    background-image: url(${ props => props.iconDetails.iconUrl});
    background-repeat: no-repeat;
    background-position: center;
    // background-size: 25px;
    // height: 55px;
    // width: 55px;
    background-color: white;
    border-radius: 50%;
    margin: 0px 10px 0px 10px;
`

const FooterContentText = styled.div`
    width: 100%;
    height: 30%;
    // background-color: blueviolet;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Footer
