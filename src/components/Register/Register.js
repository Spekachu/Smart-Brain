import React from 'react';
import MyTilt from '../MyTilt/MyTilt';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''
        }
    }

    onNameChange = (e) => {
        this.setState({ registerName: e.target.value });
    }

    onEmailChange = (e) => {
        this.setState({ registerEmail: e.target.value });
    }
    onPasswordChange = (e) => {
        this.setState({ registerPassword: e.target.value });
    }
    onSubmitRegister = (e) => {
        e.preventDefault();
        fetch(`https://young-wildwood-34345.herokuapp.com/register`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange(this.props.routes.home);
                }
            }).catch(error => console.log('OMG!', error))
    }
    render() {
        const { routes, onRouteChange } = this.props;
        return (
            <MyTilt className="relative pa4 black-80 tl measure center mv4 z-1" options={{ scale: '1', max: 15, targetChild: true, childClassList: 'tilt-child w-100 z-0 h-100 absolute top-0 left-0 shadow-5 ba b--black-80 bg-white-10' }}>
                <form className="relative">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input
                                onChange={this.onNameChange}
                                className="text-input pa2 input-reset ba b--black bg-transparent hover-bg-black-80 animate hover-white w-100"
                                type="text"
                                name="name"
                                id="name" 
                                required/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                onChange={this.onEmailChange}
                                className="text-input pa2 input-reset ba b--black bg-transparent hover-bg-black-80 animate hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address" 
                                required />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                onChange={this.onPasswordChange}
                                className="text-input b pa2 input-reset ba b--black bg-transparent hover-bg-black-80 animate hover-white w-100"
                                type="password"
                                name="password"
                                id="password" 
                                required />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={this.onSubmitRegister}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Register" />
                    </div>
                    <div className="lh-copy mt3">
                        <p
                            onClick={() => onRouteChange(routes.signin)}
                            className="pointer mb0 mt4 f6 link dim black db">Already registered? Sign In</p>
                    </div>
                </form>
            </MyTilt>
        )
    }
}

export default Register;
