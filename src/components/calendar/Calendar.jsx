import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div style={styles.container}>
      <label htmlFor="date" style={styles.label}>Select a Date:</label>
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        // placeholderText="Click to select a date"
        style={styles.input}
      />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "200px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
  },
}

export default CalendarComponent
