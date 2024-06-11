import React, {useState } from "react";
import DateRangePicker from './components/RangeDatePicker/DateRangePicker';

const Playground = () => {
  const [selectedRange, setSelectedRange] = useState({ startDate: null, endDate: null });

  const handleDateChange = ({ startDate, endDate }) => {
    setSelectedRange({ startDate, endDate });
  };

  return (
    <div>
      <h1>Date Range Picker Playground</h1>
      <DateRangePicker
        minDate={new Date("2003-06-01")}
        maxDate={new Date("2008-12-31")}
        theme="light"
        startDate={new Date("2005-05-01")}
        width="20rem"
        height="20rem"
        onDateChange={handleDateChange}
      />
      <div>
        Selected Range:
        {selectedRange.startDate && (
          <p>Start Date: {selectedRange.startDate.toDateString()}</p>
        )}
        {selectedRange.endDate && (
          <p>End Date: {selectedRange.endDate.toDateString()}</p>
        )}
      </div>
    </div>
  );
};

export default Playground;
