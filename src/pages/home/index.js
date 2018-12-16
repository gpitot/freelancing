import React, {Component} from 'react';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Loading from './components/Loading';

import {Content} from './components/AboutContent';

import Beach from '../../images/beach3.jpeg';
import Discount from '../../images/discount.png';


class Home extends Component {
    state = {
        loaded:false
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
                    thinBanner="https://i.redd.it/jh0gfb3ktvkz.jpg"
                    loaded={this.bannerLoaded}

                    discount = {Discount}
                />
                <About {...Content('services')} />
                <Banner 
                    maxHeight="600px"
                    wideBanner="https://i.redd.it/g5g7mtzvmht01.jpg"
                    thinBanner="https://i.redd.it/mfqm1x49akgy.jpg"
                    loaded={null}
                />
                <About {...Content('aboutus')} />
                <Banner 
                    maxHeight="300px"
                    wideBanner="https://i.redd.it/g5g7mtzvmht01.jpg"
                    thinBanner="https://i.redd.it/mfqm1x49akgy.jpg"
                    loaded={null}
                />
                <About {...Content('deals')} />
                <Contact />
            </Main>
        );
    }
}

const Main = styled.main`
    opacity:${props => props.loaded ? '1' : '0'};

`;

export default Home;