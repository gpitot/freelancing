import React from 'react';
import styled from 'styled-components';



const Video = (props) => {
    return (
        
        <Area>
            
            <VideoArea {...props.video} />
        </Area>
    )
}


const Area = styled.div`
    
    max-width:calc(100% - 20px);
    margin:50px auto;

    
`;


const VideoArea = styled.video`
    height:400px;
    width:auto;
    box-shadow:0 4px 4px black;
    border-radius:5px;

    @media (max-width:1600px) {
        height:auto;
        width:850px;
        max-width:100%;
    }
`;

export default Video;