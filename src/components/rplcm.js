import React from "react";
import events from "../variables/reportpandlcalendar";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);


const RPLCM = () => {
    return(
        <div className="month" style={{ height: 700 }}>
        <BigCalendar
          events={events}
          views={allViews}
          popup={false}
        />
      </div>
    );
};

export default RPLCM