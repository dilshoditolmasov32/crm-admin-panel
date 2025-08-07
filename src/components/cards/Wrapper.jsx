import "./Wrapper.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { Modal, Box } from "@mui/material";
import CalendarComponent from "../calendar/Calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const Wrapper = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); 
  };
  return (
    <>
      <div class="cards-wrapper">
        <div className="card">
          <div className="buttonRow">
            <p className="dateText">
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : "Сегодня"}
            </p>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="button1"
            >
              Calendar
            </button>
          </div>

          {showCalendar && (
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              inline
            />
          )}

          <div class="card-info">
            сделка: <span>1 000</span>
          </div>
          <div class="card-info">
            заявки: <span>10 000</span>
          </div>
        </div>

        <div class="card">
          <p>• Первичный контакты</p>
          <div class="card-info">
            сделка: <span>1 000</span>
          </div>
          <div class="card-info">
            на сумму: <span>1 000 000 000</span>
          </div>
        </div>
        <div class="card">
          <p>•Не дозвон</p>
          <div class="card-info">
            сделка: <span>1 000</span>
          </div>
          <div class="card-info">
            на сумму: <span>1 000 000 000</span>
          </div>
        </div>
        <div class="card">
          <p>• Принимают решение</p>
          <div class="card-info">
            сделка: <span>1 000</span>
          </div>
          <div class="card-info">
            на сумму: <span>1 000 000 000</span>
          </div>
        </div>
        <div class="card">
          <p>• Успешно реализовано</p>
          <div class="card-info">
            сделка: <span>1 000</span>
          </div>
          <div class="card-info">
            на сумму: <span>1 000 000 000</span>
          </div>
        </div>
        <div class="card">
          <p>• Закрыто не реализовано</p>
          <div class="card-info">
            сделка: <span>1 000</span>
          </div>
          <div class="card-info">
            на сумму: <span>1 000 000 000</span>
          </div>
        </div>
        {/* <!-- boshqa cardlar ham shunaqa davom etadi --> */}
      </div>
    </>
  );
};

export default Wrapper;
