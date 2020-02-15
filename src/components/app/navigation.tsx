import React, {Component} from 'react';

class Header extends Component {
    singOut = event => {
        localStorage.clear();
        document.location.reload(true);
    };
    render() {
        return (
            <header>
                <img
                    className="header__logo"
                    src="./logo.png"
                    alt="">
                </img>
                <div className="header__nav">

                    <i className="fas fa-search"/>
                    <i className="far fa-bell"/>
                    <div className="header__avatar">
                        <img src="./user2.jpg" alt="">
                        </img>
                        <i className="fas fa-chevron-down"/>
                    </div>
                    <i className="fas fa-sign-out-alt" onClick={this.singOut}></i>
                </div>
            </header>
        );
    }
}
export default Header;