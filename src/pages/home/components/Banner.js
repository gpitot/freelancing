import React from 'react';
import styled from 'styled-components';

const setInnerHtml = (html) => {
    return {__html: html};
}

const Banner = (props) => {
    
    return (
        <BannerArea >
            <WideBanner src={props.wideBanner} onLoad={props.loaded} maxHeight={props.maxHeight}/>
            <ThinBanner src={props.thinBanner} onLoad={props.loaded} maxHeight={props.maxHeight}/>

            {
                props.discount ?
                <Discount src = {props.discount} />
                : 
                null
            }


            {
                props.content ?
                <Content>
                    <ContentArea>
                        <Heading>{props.content.heading}</Heading>
                        <Body dangerouslySetInnerHTML={setInnerHtml(props.content.body)} />
                    </ContentArea>
                </Content>
                :
                null
            }

        </BannerArea>
    );
}

const BannerArea = styled.div`
    width:100%;
    position:relative;
  
`;

const WideBanner = styled.img`
    
    display:block;
    width:100%;
    height:auto;
    max-height: ${props => props.maxHeight};
    object-fit:cover;
    @media (max-width: 700px) {
        display:none;
    }
`;

const ThinBanner = styled.img`
    display:block;
    width:100%;
    height:auto;
    max-height: ${props => props.maxHeight};
    object-fit:cover;
    

    @media (min-width: 700px) {
        display:none;
    }
`;



const Discount = styled.img`
    position:absolute;
    z-index:2;
    top:65px;
    right:0;
    width:400px;
    max-width:50%;
    max-height:100%;
    object-fit:cover;

    @media (max-width:600px) {
        top:60px;
    }

    @media (max-width:480px) {
        display:none;
    }
`;



const Content = styled.div`
   width:100%;
   height:100%;
   background:rgba(0,0,0,0.4);
   position:absolute;
   top:0;
   color:white;
`;

const ContentArea = styled.div`
   width:500px;
   max-width:calc(100% - 300px);
   margin: 150px 0 0 300px;

   @media (max-width:1050px) {
       margin: 80px 40px;
       bottom:0;
       max-width:calc(100% - 80px);
   }

   @media (max-width:650px) {
       margin-top:150px;
   }

   @media (max-width:480px) {
       margin-top:85px;
   }
`;

const Heading = styled.h1`
   font-size:80px;


   @media (max-width:780px) {
       font-size: 54px;
   }
`;

const Body = styled.div`

   @media (max-width:350px) {display:none;}
`;

export default Banner;