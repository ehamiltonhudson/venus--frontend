import React from 'react';
import { connect } from 'react-redux'
import ProfileDetail from './ProfileDetail'

class ProfileContainer extends React.Component {

  // renderProfileDetails = () => this.props.map((detail, id) => <ProfileDetail key={id} text={detail} />)

  render () {
    console.log("state in profilecontainer is", this.state)
    console.log("props in profilecontainer is", this.props)
    return (
      <div>
        <div>
          Profile
          {/* <p>{this.props.first_name} {this.props.last_name}</p>
          <p>{this.props.birth_month}/{this.props.birth_day}/{this.props.birth_year}</p> */}
        </div>
        {/* {this.renderProfileDetails()} */}
      </div>
    )
  }
}

// const mapStateToProps = state => {
  // return {
  //   // newUser: state.newUser
  //     first_name: this.state.first_name,
  //     last_name: this.state.last_name,
  //     birth_year: this.state.birth_year,
  //     birth_month: this.state.birth_month,
  //     birth_day: this.state.birth_day,
  //   }
  // }

  // const mapStateToProps = (state) => {
  //   return {
  //     users: state.users,
  //     suns: state.suns
  //   }
  // }
export default ProfileContainer;
// export default connect(mapStateToProps)(ProfileContainer);
