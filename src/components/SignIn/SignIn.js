import React from 'react';
import MyTilt from '../MyTilt/MyTilt';
import './SignIn.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (e) => {
        this.setState({ signInEmail: e.target.value });
    }
    onPasswordChange = (e) => {
        this.setState({ signInPassword: e.target.value });
    }
    onSubmitSignIn = (e) => {
        e.preventDefault();
        fetch(`https://young-wildwood-34345.herokuapp.com/signin`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
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
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                onChange={this.onEmailChange}
                                className="text-input pa2 input-reset ba b--black bg-transparent hover-bg-black-80 animate hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                onChange={this.onPasswordChange}
                                className="text-input b pa2 input-reset ba b--black bg-transparent hover-bg-black-80 animate hover-white w-100"
                                type="password"
                                name="password"
                                id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign In" />
                    </div>
                    <div className="lh-copy mt3">
                        <p
                            onClick={() => onRouteChange(routes.register)}
                            className="pointer mb0 mt4 f6 link dim black db">Register</p>
                    </div>
                </form>
            </MyTilt>
        )
    }
}

export default SignIn;
