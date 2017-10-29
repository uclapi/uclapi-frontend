import React from 'react';

import SectionHeader from './SectionHeader.jsx';

import Welcome from './Meta/Welcome.jsx';
import VersionInformation from './Meta/VersionInformation.jsx';

import OAuthIntro from './Routes/OAuth/OAuthIntro.jsx';
import Authorise from './Routes/OAuth/Authorise.jsx';
import Token from './Routes/OAuth/Token.jsx';
import UserData from './Routes/OAuth/UserData.jsx';

import RoomBookingsVersionHeader from './Routes/RoomBookings/VersionHeader.jsx';
import GetRooms from './Routes/RoomBookings/GetRooms.jsx';
import GetBookings from './Routes/RoomBookings/GetBookings.jsx';
import GetEquiment from './Routes/RoomBookings/GetEquipment.jsx';

import SearchVersionHeader from './Routes/Search/VersionHeader.jsx';
import GetPeople from './Routes/Search/GetPeople.jsx';

import TimetableVersionHeader from './Routes/Timetable/VersionHeader.jsx';
import GetPersonalTimetable from './Routes/Timetable/GetPersonalTimetable.jsx';
import GetTimetableByModules from './Routes/Timetable/GetTimetableByModules.jsx';

import GetInvolved from './GetInvolved/GetInvolved.jsx';

import LanguageTabs from './LanguageTabs.jsx';
import Sidebar from './Sidebar.jsx';


export default class DocumentationComponent extends React.Component {

    render () {
      return (
        <div>
          <Sidebar />
          <LanguageTabs>
            <Welcome />
            <VersionInformation />

            <SectionHeader link="oauth" title="OAuth" />
            <OAuthIntro />
            <Authorise />
            <Token />
            <UserData />

            <SectionHeader link="roombookings" title="Room Bookings" />
            <RoomBookingsVersionHeader />
            <GetRooms />
            <GetBookings />
            <GetEquiment />

            <SectionHeader link="search" title="Search" />
            <SearchVersionHeader />
            <GetPeople />

            <SectionHeader link="timetable" title="Timetable" />
            <TimetableVersionHeader />
            <GetPersonalTimetable />
            <GetTimetableByModules />

            <GetInvolved />
          </LanguageTabs>
        </div>
      )
    }

}
