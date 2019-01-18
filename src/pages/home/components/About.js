import React, {Component} from 'react';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {

    state = {
        openInfo : true,
        info : this.props.content[0].info,
        openIndex : 0
    }

    openMoreInfo= (info, index) => {
        this.setState({
            openInfo: false,
            openIndex: index
        }, ()=> {
            setTimeout(()=>{
                this.setState({
                    info: info,
                    openInfo : true
                });
            }, 550);
        })
        
    }


    setInnerHtml = (html) => {
        return {__html: html};
    }

    render() {
        return (
            <Fade>
            <Area id = {this.props.id}>
    
                <h1>{this.props.heading}</h1>
                <Icons width={this.props.width}>
                    {
                        this.props.content.map((con, index) => {
                            return (
                                <IconArea key={con.heading}>
                                    <Icon 
                                        onClick={()=>{this.openMoreInfo(con.info, index)}}
                                        color={con.color} 
                                        shape={con.shape} 
                                        selected={this.state.openIndex === index}
                                    >
                                        <FontAwesomeIcon icon={con.icon} />
                                    </Icon>
                                    <Text>{con.heading}</Text>

                                    <MoreInfoMobile open={this.state.openIndex === index} dangerouslySetInnerHTML={this.setInnerHtml(con.info)} />
                                       
                                </IconArea>
                            );
                        })
                    }
                </Icons>
    
    
                <MoreInfo open={this.state.openInfo} dangerouslySetInnerHTML={this.setInnerHtml(this.state.info)} />
                    
               
            </Area>
            </Fade>
        );
    }
}

const Area = styled.section`
    font-size:20px;
    margin:30px 0;
    h1 {text-align:center;}
`;

const Icons = styled.div`
    ${props => props.width ? `width:${props.width};` : `width:840px`};
    max-width:100%;
    margin:auto;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
`;

const IconArea = styled.div`
    display:flex;
    flex-direction:column;
    width:200px;
    align-items:center;
`;

const Icon = styled.div`
    width:100px;
    height:100px;
    ${props => props.shape==='circle' ? `border-radius:50%` : ``};

    
    
    ${props => props.selected ? `background: ${props.color}; transform: scale(1.2);` : `background: #dfdfdf; `}

    border:solid 1px #222;
    margin:35px 0;
    cursor:pointer;
    transition:all 0.5s ease;
    font-size:34px;
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover {
        background:${props => props.color};
    }
`;

const Text = styled.div`
    text-align:center;
    margin:5px;
    font-weight:800;
`;




const MoreInfo = styled.div`
    width: 300px;
    text-align: center;
    max-width: 100%;
    margin: 25px auto;
    font-size:18px;
    
    max-height: ${props => props.open ? '400px' : '0'};
    overflow:hidden;

    transition: max-height 0.5s ease-in-out;


    @media (max-width: 600px) {
        display:none;
    }

`;



const MoreInfoMobile = styled.div`

    width: 300px;
    text-align: center;
    max-width: 100%;
    margin: 25px auto;
    padding: 0 15px;
    font-size:18px;

    max-height: ${props => props.open ? '400px' : '0'};
    overflow:hidden;

    

    @media (min-width: 600px) {
        display:none;
    }

`;


export default About;