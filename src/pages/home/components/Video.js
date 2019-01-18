import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Video = (props) => {
    return (
        <Fade>
            <Area>
                <Heading>Our Work</Heading>
                <VideoArea {...props.video} />
            </Area>
        </Fade>
    )
}


const Area = styled.div`
    width:840px;
    max-width:100%;
    margin:auto;
`;

const Heading = styled.h1`
    text-align:center;
`;

const VideoArea = styled.video`
    width:100%;
    height:auto;
    box-shadow:0 4px 4px black;
    border-radius:5px;
`;

export default Video;