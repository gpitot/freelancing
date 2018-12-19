import React , {Component} from 'react';
import styled from 'styled-components';

import LogoPNG from '../../../images/logo3.png';
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
                    
                    <Item className = "heading" onClick={()=>{this.scroll('services')}}>services</Item>
                    <Item className = "heading" onClick={()=>{this.scroll('about')}}>About us</Item>
                    <Item className = "heading" onClick={()=>{this.scroll('deals')}}>deals</Item>
                    <Item className = "heading" onClick={()=>{this.scroll('contact')}}>contact</Item>
                </Inner>
    
                <MobileInner>
                    <Logo onClick={()=>{this.scroll('top')}}  src = {LogoPNG} />
                    <DropdownBtn onClick={this.toggleNav} src = {Hamburger} />
                    <DropdownArea open={this.state.navOpen}>
                        <Item className = "heading" onClick={()=>{this.scroll('services')}}>services</Item>
                        <Item className = "heading" onClick={()=>{this.scroll('about')}}>About us</Item>
                        <Item className = "heading" onClick={()=>{this.scroll('deals')}}>deals</Item>
                        <Item className = "heading" onClick={()=>{this.scroll('contact')}}>contact</Item>
                    </DropdownArea>
                </MobileInner>
            </Nav>
        )
    }
}



const Nav = styled.div`
    width:100%;
    position:fixed;
    
    box-shadow: 0px 2px 2px #414040b3;
    font-size:20px;
    text-transform:uppercase;
    background:white;
    z-index:3;
 
    font-weight:600;


    @media (max-width:600px) {
        box-shadow: none;
        border-bottom:solid 1px #414040b3;
    }
`;

const Inner = styled.div`
    display:flex;
    width:840px;
    max-width:100%;
    margin:auto;

    align-items:center;
    @media (max-width:650px) {
        display:none;
    }
`;

const Logo = styled.img`
    height:40px;
    margin:10px auto 10px 10px;
    cursor:pointer;
`;

const Item = styled.div`
    padding:5px;
    margin:10px;
    cursor:pointer;
    transition:background 0.5s ease;

  
    &:last-child {
        border:solid 1px black;

        &:hover {
            text-decoration:none;
            background:#222;
            color:white;
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
    @media (min-width:650px) {
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
    max-height: ${props => props.open ? '270px' : '0'};
    transition: max-height 0.5s ease;
    height:420px;
    
    position:absolute;
    right:0;
    top:61px;
    background:#eee;
    overflow:hidden;

    div {
        padding:10px 20px;
        text-align:center;
    }
`;

export default Navigation;