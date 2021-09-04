import { signInWithGoogle } from '../firebase/firebase.utils';
import { auth } from '../firebase/firebase.utils';
import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';


class Login extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        currentUser: null
      };
    }
  
    unsubscribeFromAuth = null;
  
    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user });
      });
    }
  
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

    login() {
        // this.props.handleMenuClose()
        signInWithGoogle()
    }

    logout() {
        // this.props.handleMenuClose()
        auth.signOut()
    }

    render() {

        return (
            <div className='Login'>
                {
                this.state.currentUser ?
                <MenuItem onClick={this.logout}>Logout {this.state.currentUser.displayName}</MenuItem>
                :
                <MenuItem onClick={this.login}>Sign in</MenuItem>
                }
            </div>
        )

        // return (
        //     <div className='Login'>
        //       {
      
        //         this.state.currentUser ?
      
        //           (<div>
        //             <div>
        //               <img src={this.state.currentUser.photoURL} />
        //             </div>
        //             <div>Name: {this.state.currentUser.displayName}</div>
        //             <div>Email: {this.state.currentUser.email}</div>
      
        //             <button onClick={() => auth.signOut()}>LOG OUT</button>
        //           </div>
        //           ) :
      
        //           <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      
        //       }
        //     </div >
        //   );
    }


}

export default Login;
