import React, {Component} from 'react';
import styled from 'styled-components';

import {ValidateForm} from './Validation';

class Contact extends Component {
    state = {
        form : {
            username:{
                text:'',
                valid:true
            },
            company:{
                text:'',
                valid:true
            },
            email:{
                text:'',
                valid:true
            },
            phone:{
                text:'',
                valid:true
            },
            extra:{
                text:'',
                valid:true
            }
        },

        sent:false,
        error:false,
        submitting : false
    }


    handleChange = (e) => {
        let form = this.state.form;
        form[e.target.name].text = e.target.value;
        this.setState({form:form})
    }

    submit = () => {
        
        //check form for validation
        let form = this.state.form;
        const isValid = ValidateForm(form);
        this.setState({form:form});
        if (!isValid) {
            return;
        };
        
        this.setState({submitting:true});
        //try submit
        const data = {
            name : form.username.text,
            company : form.company.text,
            phone : form.phone.text,
            email : form.email.text,
            extra : form.extra.text
        }
        const config = {
            method : 'POST',
            headers : {
                'Accept': 'application/json',
			    'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }

        const url = 'http://gpitot.pythonanywhere.com/freelancing'

        
        fetch(url, config)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                if (data.success) {
                    this.setState({sent:true, error:false});
                } else {
                    this.setState({sent:true, error:true});
                }
            })
            .catch((err) => {
                this.setState({sent:true, error:true});
            });
       
        
    }

    render() {
        let form = this.state.form;

        if (this.state.submitting) {
            
            if (this.state.sent) {
                return (
                    <Area id="contact">
                        <h1>Contact us</h1>
                        <Form>
                            {
                                this.state.error ?
                                <Submit>An unknown error occurred</Submit>  
                                :
                                <Submit>Form submitted</Submit>
                            }
                            
                        </Form>
                    </Area>
                );
            }


            return (
                <Area id="contact">
                    <h1>Contact us</h1>
                    <Form>
                        <Submit>Submitting</Submit>  
                        
                    </Form>
                </Area>
            );
            
        }
        return (
            <Area id="contact">
                <h1>Contact us</h1>
                <Form>
                    <Label>Name</Label>
                    {
                        form.username.valid ?
                        null :
                        <Error>Please enter your name</Error>
                    }
                    <Input type='text' name='username' value={form.username.text} onChange={this.handleChange} valid={form.username.valid} />

                    <Label>Company</Label>
                    {
                        form.company.valid ?
                        null :
                        <Error>Please enter your company name</Error>
                    }
                    <Input type='text' name='company' value={form.company.text} onChange={this.handleChange} valid={form.company.valid} />

                    <Label>Email</Label>
                    {
                        form.email.valid ?
                        null :
                        <Error>Please enter your email address</Error>
                    }
                    <Input type='text' name='email' value={form.email.text} onChange={this.handleChange} valid={form.email.valid} />

                    <Label>Phone</Label>
                    {
                        form.phone.valid ?
                        null :
                        <Error>Please enter your phone number</Error>
                    }
                    <Input type='number' name='phone' value={form.phone.text} onChange={this.handleChange} valid={form.phone.valid} placeholder = "0433 611 722" />

                    <Label>Anything extra you want us to know</Label>
                    <TextBox name='extra' value={form.extra.text} onChange={this.handleChange} />

                    <Submit onClick={this.submit}>Talk to us</Submit>
                </Form>
            </Area>
        );
    }
}

const Area = styled.div`
    width: 640px;
    max-width:100%;
    margin:auto;

    

    @media (max-width:640px) {
        h1 {
            text-align:center;
        }
    }
`;

const Form = styled.form`
    width: 640px;
    max-width:100%;
    
    background:white;
    border-radius:5px;
    padding:30px;
    margin:50px auto;
    display:flex;
    flex-direction:column;
    font-weight:600;


    @media (max-width:640px) {
        margin: 50px auto 0 auto;
    }
`;

const Label = styled.label``;

const Error = styled.p`
    color:red;
    font-style:italic;
    margin:0;
    padding:0;
`;

const Input = styled.input`
    width:600px;
    max-width:calc(100% - 30px);
    height:40px;
    margin:0 15px 30px 15px;
    border:none;
    border-bottom:solid 1px;
    border-color: ${props => props.valid ? 'black' : 'red'};
    font-family:inherit;
    &:focus {
        outline:none;
    }
`;

const TextBox = styled.textarea`
    width:600px;
    max-width:calc(100% - 30px);
    height:180px;
    margin:15px;
    font-family:inherit;
`;

const Submit = styled.h1`
    width: 200px;
    padding: 8px;
    background: white;
    border: solid 1px black;
    margin: 15px;
    font-size: 22px;
    
    cursor: pointer;
    text-align:center;

    transition: background 0.5s ease;

    &:hover {
        text-decoration:none;
        background:#222;
        color:white;
    }
`;

export default Contact;