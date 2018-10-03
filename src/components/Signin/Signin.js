import React from 'react';

const Signin = (props) => {
 
return (
<article className="br3 ba  b--black-10 mv6 w-100 w-50-m w-25-l shadow-5 center">
    <main className="pa4 black-80 z-2">
        <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Welcome</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
               />
            </div>
            
        </fieldset>
        <div className="">
            <input 
            onClick={props.onRouteChange} 
            className="b ph3 pv2 input-reset ba bw1 b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in" 
            
            />
        </div>
        <div className="lh-copy mt3" >
            <p 
        onClick={this.onSubmitSignIn } 
            className="f6 link dim black db pointer">Register</p>
          
        </div>
        </div>
    </main>
    </article>
);
}
 
export default Signin;