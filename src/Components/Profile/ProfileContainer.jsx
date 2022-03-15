import React from "react";
import './Profile.css'
import Profile from "./Proofile";
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from "../../Redux/profilePageReducer";
import { useParams } from "react-router-dom"


const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}
        
        />
    );
};

class ProfileContainer extends React.Component{
  
    componentDidMount() {
        let userId = this.props.params.userId
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile
})

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent)