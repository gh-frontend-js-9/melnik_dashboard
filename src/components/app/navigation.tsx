import React, {Component} from 'react';
import AddProjectModal from "./Modals/addProjectModal";
import { connect } from "react-redux";
import {delUser} from "../../store/actions";


class Header extends Component<{delUser:any},{}> {

    singOut = () => {
        localStorage.clear();
        this.props.delUser();
    };
    render() {
        return (
            <header>
                <img
                    className="header__logo"
                    src="./../logo.png"
                    alt="">
                </img>
                <div className="header__nav">
                    {<AddProjectModal/>}
                    <i className="fas fa-search"/>
                    <i className="far fa-bell"/>
                    <div className="header__avatar">
                        <img src="./../user2.jpg" alt="">
                        </img>
                        <i className="fas fa-chevron-down"/>
                    </div>
                    <i className="fas fa-sign-out-alt" onClick={this.singOut}/>
                </div>
            </header>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
const  mapDispatchToProps = {
    delUser,
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);