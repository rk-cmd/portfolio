import React from 'react'
import styled from 'styled-components'

const InfoComponent = ({sheet}) => {
    return (
        <InfoContent fontColor={sheet.fontColor} className="InfoContent">
            <InfoContentWrap>
                <InfoContentHeading id="InfoContentHeading">
                    {/* <InfoContentHeadingDesc>ABOUT ME</InfoContentHeadingDesc> */}
                    <InfoContentHeadingDesc fontColor={sheet.fontColor} >{sheet.heading}</InfoContentHeadingDesc>
                </InfoContentHeading>
                {/* <InfoContentPara className="InfoContentPara">Hi, I'm Rohith. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</InfoContentPara> */}
                <InfoContentPara className="InfoContentPara">{sheet.description}</InfoContentPara>
                {/* <InfoContentPara className="InfoContentPara">Hi, I'm Rohith. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</InfoContentPara> */}
            </InfoContentWrap>
        </InfoContent>
    )
}

const InfoContent = styled.div`
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

    // background-color:red;
    color: ${ props => props.fontColor };
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const InfoContentWrap = styled.div`
    // height: 100%;
    // width: 100%;
    // display: flex;
    // justify-content:center;
    // align-items: center;
    height: fit-content;
`

const InfoContentHeading = styled.span`
    @media (max-width: 480px) {
        height: 35px;
        font-size: 25px;
    }
    @media (min-width: 481px) and (max-width: 1199px) {
        height: 65px;
        font-size: 35px;
    }
    @media (min-width: 1200px) {
        height: 65px;
        font-size: 40px;
    }
    // border-bottom: 5px solid #606060;
    // height: 40px;
    // font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InfoContentHeadingDesc = styled.span`
    @media (max-width: 480px) {
        border-bottom: 2px solid ${ props => props.fontColor };
        height: 35px;
    }
    @media (min-width: 481px) {
        border-bottom: 5px solid ${ props => props.fontColor };
        height: 65px;
    }  
    // height: 35px;
`

const InfoContentPara = styled.p`
    @media (max-width: 480px) {
        padding: 0px 15px 0px 15px;
        font-size: 12px;
    }
    @media (min-width: 481px) and (max-width: 1199px) {
        padding: 10px 50px 10px 50px;
    }    
    @media (min-width: 481px) and (max-width: 720px) {
        font-size: 12px;
    }
    @media (min-width: 721px) and (max-width: 1199px) {
        font-size: 14px;
    }
    @media (min-width: 1200px) {
        padding: 20px 90px 20px 90px;
        font-size: 20px;
    }
    // padding: 0px 15px 0px 15px;
    // height: calc( 100% - 65px );
    // font-size: 20px;
    text-align: justify;
`

export default InfoComponent
