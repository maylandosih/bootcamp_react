import React from 'react';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

import ProfilePage from './pages/UserPages/ProfilePage';
import CartPage from './pages/UserPages/CartPage';
import HistoryPage from './pages/UserPages/HistoryPage';

import ProductAdmin from './pages/AdminPages/ProductAdmin';
import TransactionAdmin from './pages/AdminPages/TransactionAdmin';

import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import { loginAction, keepLogin } from './actions';
import { connect } from 'react-redux';
import VerificationPage from './pages/VerificationPage';
import ForgotPage from './pages/ForgotPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.reLogin()
  }

  reLogin = () => {
    let token = localStorage.getItem("shopToken")
    console.log(token)
    if (token) {
      this.props.keepLogin(token)
    }
  }

  render() {
    return (
      <div>
        <Navbar brand="W-Commerce" />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/products" component={ProductPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/forgot" component={ForgotPage} />
          <Route path="/verification" component={VerificationPage} />
          {
            this.props.user_role == "Admin" ?
              <>
                <Route path="/products-admin" component={ProductAdmin} />
                <Route path="/transactions-admin" component={TransactionAdmin} />
              </> :
              <>
                <Route path="/profile" component={ProfilePage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/history" component={HistoryPage} />
              </>
          }
        </Switch>
      </div>
    );
  }
}
const mapToProps = (globalState) => {
  return {
    user_role: globalState.authReducer.user_role
  }
}

export default connect(mapToProps, { loginAction, keepLogin })(App);