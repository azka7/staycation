import React, { useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'
import { DateRange } from 'react-date-range'
import './index.scss'

// main css file
import "react-date-range/dist/styles.css"; 

// theme css file
import "react-date-range/dist/theme/default.css";

import formatDate from 'utils/formatDate.js'
import iconCalendar from 'assets/image/icons/icon-calendar.svg'

export default function Date(props) {

    // destructor
    const { value, placeholder, name } = props
    
    // isShowed berfungsi untuk toogle wrapper date-picker
    // setIsShowed berfungsi untuk ngatur true / false
    const [isShowed, setIsShowed] = useState(false);

    // kondisi ketika meng-select datepicker
    const datePickerChange = value => {
        // bakal diirim ke parrent component siapa yang make datePickerChange 
        const target = {
            target: {
                value: value.selection,
                name: name
            }
        }
        props.onChange(target);
    }

    // hook useEffect untuk lifeCycle
    // handleClickOutside fungsinya untuk menutup kalender jika diklik diluar component
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    });

    const refDate = useRef(null)
    const handleClickOutside = (event) => {
        // pengecekan refDte udah keiisi atau belum
        if (refDate && !refDate.current.contains(event.target)){
            setIsShowed(false);
        }
    }
    
    const check = focus => {
        // indexOf = fungsi untuk ngecek string/array punya unsur
        focus.indexOf(1) < 0 && setIsShowed(false)
    }

    // penyesuaian format tanggal sesuai yang diinginkan
    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
        value.endDate ? " - " + formatDate(value.endDate) : "" }`
    
    return (
        // ketika komponen ref-nya udah dimount, komponennya udah ga null lagi
        <div ref={refDate}
            className={["input-date mb-3", props.outerClassName].join(" ")}
        >
            <div className="input-group">
                <div className="input-group-prepend bg-gray-900">
                    <span className="input-group-text">
                        <img src={iconCalendar} alt="icon calendar"/>
                    </span>
                </div>
                
                <input
                    // value yang digunakan agar tidak bisa diketik manual
                    readOnly
                    
                    type="text"
                    className="form-control"
                    value={displayDate}

                    placeholder={placeholder}
                    onClick={() => setIsShowed(!isShowed) }
                />

                {isShowed && (
                    <div className="date-range-wrapper">
                        <DateRange
                            editableDateInputs = {true}
                            onChange = {datePickerChange}
                            moveRangeOnFirstSelection = {false}
                            onRangeFocusChange = {check}
                            ranges = {[value]}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

Date.propTypes = {
    // value-nya haruus object
    value: propTypes.object,

    // value-nya harus function
    onChange: propTypes.func,

    placeholder: propTypes.string,
    outerClassName: propTypes.string
}