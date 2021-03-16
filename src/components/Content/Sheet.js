import React from 'react'
import styled from 'styled-components'

import PictureComponent from './Sheet/PictureComponent'
import InfoComponent from './Sheet/InfoComponent'

const Sheet = ({sheet}) => {
    return (
        <SheetContainer background={sheet.background} id={sheet.heading} className="SheetContainer">
            {/* <PictureContent className="PictureContent">
                <Picture />
            </PictureContent> */}
            {/* <InfoContent className="InfoContent">
                <InfoContentWrap>
                <InfoContentHeading id="InfoContentHeading">
                    <InfoContentHeadingDesc>ABOUT ME</InfoContentHeadingDesc>
                </InfoContentHeading>
                <InfoContentPara className="InfoContentPara">Hi, I'm Rohith. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</InfoContentPara>
                <InfoContentPara className="InfoContentPara">Hi, I'm Rohith. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</InfoContentPara>
                </InfoContentWrap>
            </InfoContent> */}

            { sheet.position == 'left' ?  
                <>
                    <PictureComponent picture={sheet.image} />
                    <InfoComponent sheet={sheet} />
                </>
            :
                <>
                    <InfoComponent sheet={sheet} />
                    <PictureComponent picture={sheet.image} />
                </>
            }

            {/* <PictureComponent picture={sheet.image} />
            <InfoComponent sheet={sheet} /> */}
        
        </SheetContainer>
    )
}

//is this a good way to code??
const SheetContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${ props => props.background};
    // background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-contents: center;
    align-items: center;
`
// const PictureContent = styled.div`
//     height: 100%;
//     width: 50%;
//     // background-color: blue;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// const Picture = styled.div`
//     background-image: url(/others/rohith.jpg);
//     height: 80%;
//     width: 50%;
//     background-size: cover;
//     background-position: center;
// `

// const InfoContent = styled.div`
//     height: 100%;
//     width: 50%;
//     // background-color:red;
//     color: #606060;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
// `

// const InfoContentWrap = styled.div`
//     // height: 100%;
//     // width: 100%;
//     // display: flex;
//     // justify-content:center;
//     // align-items: center;
//     height: fit-content;
// `

// const InfoContentHeading = styled.span`
//     // border-bottom: 5px solid #606060;
//     height: 65px;
//     font-size: 30px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// const InfoContentHeadingDesc = styled.span`
//     border-bottom: 5px solid #606060;
//     height: 60px;
// `

// const InfoContentPara = styled.p`
//     padding: 20px 90px 20px 90px;
//     // height: calc( 100% - 65px );
//     font-size: 20px;
//     text-align: justify;
// `

export default Sheet
