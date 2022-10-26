import './../../client/css/react-sidenav.css';
import './../../client/css/logo.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { RiSwordFill } from "@react-icons/all-files/ri/RiSwordFill";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { IoMdSettings } from "@react-icons/all-files/io/IoMdSettings";
import { IoPersonSharp } from "@react-icons/all-files/io5/IoPersonSharp";
import { HiLogout } from "@react-icons/all-files/hi/HiLogout";
import { render } from 'react-dom';
import { Hello } from './Hello';
import { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

const Sidebar = () => {
    const logout = () => Meteor.logout();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const user = useTracker(() => Meteor.user());
    const userFilter = user ? { userId: user._id } : {};
    return (
        <SideNav
        onSelect={(selected) => {
            switch(selected){
                case 'home':
                    render(<Home />, document.getElementById('root'));
                    break;
                case 'search':
                    render(<Search />, document.getElementById('root'));
                    break;
                case 'characters':
                    render(<Characters />, document.getElementById('root'));
                    break;    
                case 'settings':
                    render(<Settings />, document.getElementById('root'));
                    break;
                case 'logout':
                    logout();
                    break;
                default:
                    break;
            }
        }}>
        <SideNav.Toggle default='true' >
        </SideNav.Toggle> 
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <AiFillHome className="logo" />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="search">
                <NavIcon>
                    <FiSearch className="logo"/>
                </NavIcon>
                <NavText>
                    Search
                </NavText>
            </NavItem>
            <NavItem eventKey="characters">
                <NavIcon>
                    <RiSwordFill className="logo"/>
                </NavIcon>
                <NavText>
                    My Characters
                </NavText>
            </NavItem>
            <NavItem eventKey="settings">
                <NavIcon>
                    <IoMdSettings className="logo"/>
                </NavIcon>
                <NavText>
                    Settings
                </NavText>
            </NavItem>
            <NavItem eventKey="profile">
                <NavIcon>
                    <IoPersonSharp className="logo"/>
                </NavIcon>
                <NavText>
                    Profile
                </NavText>
            </NavItem>
            <NavItem eventKey="logout" style={{ backgroundColor: "#2D031D" }}>
                <NavIcon>
                    <HiLogout className="logo"/>
                </NavIcon>
                <NavText>
                    Logout
                </NavText>
            </NavItem>
        </SideNav.Nav>
        </SideNav>
        
    );
};
  
export default Sidebar;