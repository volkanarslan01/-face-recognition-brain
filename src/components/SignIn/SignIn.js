import React from "react";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSign: "",
      isSignPassword: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ isSign: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ isSignPassword: event.target.value });
  };
  onSumbit = () => {
    console.log(this.state.isSign);
    console.log(this.state.isSignPassword);
    fetch("http://localhost:3007/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.isSign,
        password: this.state.isSignPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user[0].id) {
          this.props.loadUser(user[0]);
          this.props.onRouteChange("Home");
        }
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSumbit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                href="#0"
                className="f6 link dim black db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
