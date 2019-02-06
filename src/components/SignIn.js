import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { reduxForm, Field } from 'redux-form';
import '../styling/Login.css'
import ProfileContainer from './ProfileContainer'
import { getUser } from './actions'

//HIT MY REDUCER TO UPDATE THE STORE, WHEN I SUBMIT IT SHOULD
// ALSO FETCH TO USERS & GRAB USER DATA TO UPDATE STATE AND MAKE IT AVAILABLE

const usersAPI = 'http://localhost:3000/api/v1/users/'

class SignIn extends React.Component {
  state = {
    // email: '',
    // password: '',
    first_name: '',
    last_name: ''
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let currentUser =
    this.props.users.find(user => {
    return user.first_name === this.state.first_name
  })
    this.props.getUser(currentUser)
  }
    // event.preventDefault();
    // this.props.emailAndPW(this.state)
    // const currentUser = {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       first_name: this.state.first_name,
    //       last_name: this.state.last_name
    //     }
    //   })
    // }
  //   fetch(usersAPI, currentUser)
  //   .then(r => r.json())
  //   .then(currentUser => this.props.getUser(currentUser))
  // }

  // handleChange = (event) => {
  //   console.log(event.target.name, event.target.value)
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  //   console.log(this.state)
  // }
  //
  //   handleSubmit = (event) => {
  //     event.preventDefault()
  //       this.props.dispatch({
  //         type: 'ADD_EMAIL_AND_PW',
  //         payload: this.state
  //       });
  //       // this.props.setCurrentUser(userObject)
  //     }

  // fetch(usersAPI)
  //   .then(r => r.json())
  //   .then(data => console.log(data))
  //   .then(data => {
  //     this.setState({
  //       currentUser: data
  //     })
  //   })
  //
  //   user: {
  //    name: this.state.name,
  //    email:this.state.email
  //  }
  // `${usersApi}/${userId}`

  render() {
    return(
    // const signUpForm =
    <div>
      <div className="login-container">
        <h1 className="signupHeader">Sign In</h1>
        <br/><br/>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <label className="loginLabel">Email:</label>
            <input
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              placeholder="Enter Email Address"
              className="loginPlaceholders"
            />
            <label className="loginLabel">Password:</label>
            <input
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              placeholder="Enter Password"
              className="loginPlaceholders"
            />

            <input
              // onClick={this.props.handleClick}
              type="submit"
              className="signupButton"
            />
          </form>
        </div>
        {/* <ProfileContainer /> */}
      </div>
    </div>
    )
      // return this.props.currentUser ? <Redirect to="/profile" /> : signUpForm
    }
  }

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    currentUser: state.currentUser.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (currentUser) => dispatch(getUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


// handleSubmit = (event) => {
//   console.log(this.state.first_name)
//   event.preventDefault()
//   const userInfo = {
//   	method:"POST",
//   	headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//       user: {
//         first_name: this.state.first_name,
//         last_name: this.state.last_name
//       }
//     })
//   }
//   fetch(usersAPI, userInfo)
//     .then(r => r.json())
//     .then(data => {
//       this.state.users = data
//       this.state.users.map(user => user.first_name === this.state.first_name && user.last_name == this.state.last_name)
//           const userObject = {
//             first_name: this.state.first_name,
//             last_name: this.props.last_name
//           }
//           // userObject => this.props.setCurrentUser(userObject)
//     }
//   )
// }
