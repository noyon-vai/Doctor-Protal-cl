import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);


  useEffect(() => {
    fetch("appointmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div className="my-16">
      <p className="text-secondary text-3xl font-semibold text-center">
        You Picked a Date {format(selectedDate, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            setTreatment = {setTreatment}
            appointmentOption={option}
          ></AppointmentOption>
        ))}

        
      </div>
      {
        treatment && 
        <BookingModal 
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate = {selectedDate}
        />
      }
    </div>
  );
};

export default AvailableAppointment;
