import React from 'react';
import styled from 'styled-components';


const Banner = (props) => {
    return (
        <BannerArea maxHeight={props.maxHeight}>
            <WideBanner src={props.wideBanner} onLoad={props.loaded}/>
            <ThinBanner src={props.thinBanner} onLoad={props.loaded}/>

            {
                props.discount ?
                <Discount src = {props.discount} />
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
    top:65px;
    right:0;
    width:400px;
    max-width:50%;
    max-height:100%;
    object-fit:cover;

   @media (max-width:600px) {
       top:60px;
   }
`;

export default Banner;