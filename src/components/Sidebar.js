import React from "react";
import "./Sidebar.css";
import { CgProfile } from "react-icons/cg";
import {ImProfile} from 'react-icons/im';
import {AiTwotoneCalendar} from 'react-icons/ai';
import {SiMicrosoftteams} from 'react-icons/si';
import {MdOutlineAssignmentTurnedIn} from 'react-icons/md';
import {TbReportAnalytics} from 'react-icons/tb';
import {MdOutlineQueryStats} from 'react-icons/md';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link style={{textDecoration: 'none'}} to="/">
      <div className="compo">
        <CgProfile size={25} />
        <div className="text"> STUDENT NAME</div>
      </div>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/StudentRegister">
      <div className="compo1">
        <ImProfile size={25} />
        <div className="text"> PROFILE</div>
      </div>
      </Link>
      <div className="compo1">
        <AiTwotoneCalendar size={25} />
        <div className="text"> CALENDAR</div>
      </div>
      <div className="compo1">
        <SiMicrosoftteams size={25} />
        <div className="text"> TEAMS</div>
      </div>
      <div className="compo1">
        <MdOutlineAssignmentTurnedIn size={25} />
        <div className="text"> ASSIGNMENTS</div>
      </div>
      <div className="compo1">
        <TbReportAnalytics size={25} />
        <div className="text"> REPORT</div>
      </div>
      <div className="compo1">
        <MdOutlineQueryStats size={25} />
        <div className="text"> RAISE A QUERY</div>
      </div>
    </div>
  );
};

export default Sidebar;
