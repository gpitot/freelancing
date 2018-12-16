import React , {Component} from 'react';
import styled from 'styled-components';

import LogoPNG from '../../../images/logo.png';
import Hamburger from '../../../images/hamburger.png';

class Navigation extends Component {
    state = {
        navOpen : false
    }

    scroll = (id) => {
        const myOffset = window.pageYOffset;
        const itemOffset = document.getElementById(id).getBoundingClientRect().top;
        window.scrollTo({
            left:0,
            top:(itemOffset + myOffset - 80),
            behavior:'smooth'
        });
        window.history.replaceState(null, null, `#${id}`)

        this.setState({navOpen: false});
    }

    toggleNav = () => {
        this.setState({navOpen: !this.state.navOpen});
    }


    render() {
        return (
            <Nav>
                <Inner>
                    <Logo onClick={()=>{this.scroll('top')}}  src = {LogoPNG} />
                    
                    <Item onClick={()=>{this.scroll('services')}}>services</Item>
                    <Item onClick={()=>{this.scroll('about')}}>About us</Item>
                    <Item onClick={()=>{this.scroll('deals')}}>deals</Item>
                    <Item onClick={()=>{this.scroll('contact')}}>contact</Item>
                </Inner>
    
                <MobileInner>
                    <Logo onClick={()=>{this.scroll('top')}}  src = {LogoPNG} />
                    <DropdownBtn onClick={this.toggleNav} src = {Hamburger} />
                    <DropdownArea open={this.state.navOpen}>
                        <Item onClick={()=>{this.scroll('services')}}>services</Item>
                        <Item onClick={()=>{this.scroll('about')}}>About us</Item>
                        <Item onClick={()=>{this.scroll('deals')}}>deals</Item>
                        <Item onClick={()=>{this.scroll('contact')}}>contact</Item>
                    </DropdownArea>
                </MobileInner>
            </Nav>
        )
    }
}



const Nav = styled.div`
    width:100%;
    position:fixed;
    border-bottom:solid 1px black;
    font-size:20px;
    text-transform:uppercase;
    background:#eee;
    z-index:3;
    

    background: rgb(114,133,236);
    background: linear-gradient(90deg, rgba(114,133,236,1) 0%, rgba(165,197,232,1) 95%);

    font-weight:600;
`;

const Inner = styled.div`
    display:flex;
    width:840px;
    max-width:100%;
    margin:auto;

    align-items:center;
    @media (max-width:600px) {
        display:none;
    }
`;

const Logo = styled.img`
    height:40px;
    margin:10px auto 10px 10px;
`;

const Item = styled.div`
    padding:10px;
    margin:10px;
    cursor:pointer;
    transition:background 0.5s ease;

  
    &:last-child {
        border:solid 1px black;

        &:hover {
            text-decoration:none;
            background:#c0f3fc;
        }
    }

    &:hover {
        text-decoration:underline;
    }

`;



const MobileInner = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (min-width:600px) {
        display:none;
    }
`;

const DropdownBtn = styled.img`
    padding:10px;
    margin:10px;
    cursor:pointer;
    width:40px;
   
`;

const DropdownArea = styled.div`
    max-height: ${props => props.open ? '250px' : '0'};
    transition: max-height 0.5s ease;
    height:400px;
    
    position:absolute;
    right:0;
    top:61px;
    background:#a3c2e9;
    overflow:hidden;

    div {
        padding:10px 20px;
        text-align:center;
    }
`;

export default Navigation;