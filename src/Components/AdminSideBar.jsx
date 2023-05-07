import React from 'react';
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from 'styled-components';

const AdminSideBar = () => {
  return (
    <DIV id="sidebar">
    <div id="top">
      <Link to="/admin" style={{ textDecoration: "none" }}>
        <span className="logo">Admin</span>
      </Link>
    </div>
    <hr />
    <div id="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon" />
          <span>Dashboard</span>
        </li>
        <p className="title">LISTS</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
        <Link to='/admin-destination'>
          <li>
            <StoreIcon className="icon" />
            <span>Destinations</span>
          </li>
        </Link>
        <Link to='/add-product'>
        <li>
          <CreditCardIcon className="icon" />
          <span>Add Destination</span>
        </li>
        </Link>
        <li>
          <LocalShippingIcon className="icon" />
          <span>Update Destination</span>
        </li>
        <p className="title">USEFUL</p>
        <li>
          <InsertChartIcon className="icon" />
          <span>Stats</span>
        </li>
        <li>
          <NotificationsNoneIcon className="icon" />
          <span>Notifications</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
          <SettingsSystemDaydreamOutlinedIcon className="icon" />
          <span>System Health</span>
        </li>
        <li>
          <PsychologyOutlinedIcon className="icon" />
          <span>Logs</span>
        </li>
        <li>
          <SettingsApplicationsIcon className="icon" />
          <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
          <AccountCircleOutlinedIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
          <ExitToAppIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
   
  </DIV>
  )
}

export default AdminSideBar

const DIV =styled.div`
    #sidebar {
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;
    }
    #top {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .logo {
      font-size: 20px;
      font-weight: bold;
      color: #6439ff;
    }
    hr {
    height: 0;
    border: 0.5px solid rgb(230, 227, 227);
  }
  #center {
    padding-left: 10px;
  }
  ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
  .title {
        font-size: 10px;
        font-weight: bold;
        color: #999;
        margin-top: 15px;
        margin-bottom: 5px;
      }
      li {
        display: flex;
        align-items: center;
        padding: 5px;
        cursor: pointer;

        &:hover {
          background-color: #ece8ff;
        }

        .icon {
          font-size: 18px;
          color: #7451f8;
        }

        span{
            font-size: 13px;
            font-weight: 600;
            color: #888;
            margin-left: 10px;
        }
      }
`