import React, {Component} from 'react';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Loading from './components/Loading';
import Video from './components/Video';
import {Content} from './components/AboutContent';

import BeachVertical from '../../images/beach_vertical.jpeg';
import Beach from '../../images/beach.jpg';
import Beach2 from '../../images/beach4.jpeg';
import Sand from '../../images/sand.jpeg';
import DunesVertical from '../../images/dunes_v.jpeg';
import SandVertical from '../../images/sand_vertical.jpeg';

import Discount from '../../images/discount.png';

import DrawingRoom from '../../images/drawingroom.webm';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false
        }
    
        this.bannerContent = {
            heading : 'Sunshine Dev',
            body : `At Sunshine we pride ourselves on
                <ul>
                <li>leaving our customers satisfied</li>
                <li>helping local businesses</li>
                <li>building custom solutions to fit the individual problem</li>
                </ul>
                `
        }
    }
    

    bannerLoaded = () => {
        this.setState({loaded:true});
    }

    render() {
        
        return (
            <Main id = "top" loaded={this.state.loaded}>
                <Navigation />
                <Banner 
                    maxHeight="none"
                    wideBanner={Beach}
                    thinBanner={BeachVertical}
                    loaded={this.bannerLoaded}

                    discount = {Discount}
                    content = {this.bannerContent}
                />
                <About {...Content('services')} />
                <Banner 
                    maxHeight="300px"
                    wideBanner={Beach2}
                    thinBanner={DunesVertical}
                    loaded={null}
                />
                <About {...Content('aboutus')} />
                <Banner 
                    maxHeight="300px"
                    wideBanner={Sand}
                    thinBanner={SandVertical}
                    loaded={null}
                />
                <About {...Content('deals')} />

                <Video 
                    video = {{
                        src : DrawingRoom,
                        muted : true,
                        controls: true
                    }} />

                <Contact />
            </Main>
        );
    }
}

const Main = styled.main`
    opacity:${props => props.loaded ? '1' : '0'};

`;

export default Home;