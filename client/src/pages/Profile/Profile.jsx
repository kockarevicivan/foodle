import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../store/actions/users/usersActions";
import Layout from "../../components/Layout/Layout";

class Profile extends Component {
    state = {
        username: "",
        fullName: ""
    };

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    onSubmit = async event => {
        event.preventDefault();
        const userPayload = {
            username: this.state.username,
            fullName: this.state.fullName
        };
        const { _id: userId } = this.props.user;
        try {
            await this.props.updateProfile(userPayload, userId);
        } catch (error) {
            console.log(error.message);
        }
    };
    render() {
        return (
            <Layout>
                <h1>This is the profile page</h1>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <label htmlFor="username">Username:</label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            required
                            value={this.state.username}
                            onChange={this.onChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="fullName">Full name:</label>
                        <br />
                        <input
                            type="text"
                            name="fullName"
                            required
                            value={this.state.fullName}
                            onChange={this.onChange}
                        />
                    </p>

                    <button>Update profile</button>
                </form>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    user: state.authenticationReducers.user
});

export default connect(mapStateToProps, { updateProfile })(Profile);
