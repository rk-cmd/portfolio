import React from 'react'
import styled from 'styled-components'

const BannerSheet = () => {
    return (
        <Banner id="HOME">
            <BannerWrap id="BannerWrap">
                <BannerContent id="BannerContent">
                    Hi, I'm Rohith. I design and build user interfaces.
                </BannerContent>
                
                <BannerFooter onClick={moveDown}>
                    <BannerFooterDesc>Learn more about what I do</BannerFooterDesc>
                    <BannerFooterArrow><ArrowRotate>{'>'}</ArrowRotate></BannerFooterArrow>
                </BannerFooter>
                
            </BannerWrap>
        </Banner>
    )
}

const moveDown = () => {
    console.log("Click detected");
    window.scrollBy( 0 , window.innerHeight);
}

const Banner = styled.div`
//   background-color: green;
    background-image: url(others/bannerMain.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    color: white;
    height: calc( 100% - 50px );
    width: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
`

const BannerWrap = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba( 0, 0, 0, 0.4);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const BannerContent = styled.div`

    @media (max-width: 480px) {
        font-size: 30px;
    }
    @media (min-width: 481px) and (max-width: 1199px) {
        font-size: 40px;
    }
    @media (min-width: 1200px) {
        font-size: 50px;
    }

    // background-color: rgba( 0, 0, 0, 0.4);
    height: 80%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    // font-size: 50px;
    font-weight: 700;
`

const BannerFooter = styled.a`
    height: 10%;
    width: 35%;
    // background-color: lightblue;    
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
`

const BannerFooterDesc = styled.span`

    @media (max-width: 480px) {
        font-size: 14px;
    }
    @media (min-width: 481px) and (max-width: 1199px) {
        font-size: 16px;
    }
    @media (min-width: 1200px) {
        font-size: 20px;
    }

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    // font-size: 20px;
    font-weight: 600;
`

const BannerFooterArrow = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ArrowRotate = styled.span`

    @media (max-width: 480px) {
        font-size: 14px;
    } 
    @media (min-width: 481px) and (max-width: 1199px) {
        font-size: 16px;
    }
    @media (min-width: 1200px) {
        font-size: 20px;
    }

    transform: rotate(90deg);
    // font-size: 20px;
    font-family: monospace;
`

export default BannerSheet
