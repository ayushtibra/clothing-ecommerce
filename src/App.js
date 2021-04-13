import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Test from './pages/test/test';
class App extends React.Component {
  // state = {
  //   currentUser: null,
  // };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: userAuth });
      console.log('App', userAuth);

      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          // this.setState({
          //   currentUser: {
          //     id: snapshot.id,
          //     ...snapshot.data(),
          //   },
          // });
        });
      } else {
        setCurrentUser(userAuth);
        // this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/sign-in'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
          <Route exact path='/test' component={Test} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
