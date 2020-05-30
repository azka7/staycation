import React, { Component } from 'react'
import propTypes from 'prop-types'

import Button from 'element/Button'
import { InputNumber, InputDate } from 'element/Form'

export default class BookingForm extends Component {
    constructor (props) {
        super (props)
        this.state = {
            data: {
                duration: 1,
                date: {
                    startDate: new Date(),
                    endDate: new Date(),
                    key:"selection"
                }
            }
        }
    }

    // function 1 = menerima event target
    updateData = e => {
        this.setState({
            ...this.state,
            // rubah datanya
            data: {
                // menerima semua yang ada di state data
                ...this.state.data,
                // target apa yang mau dirubah
                // nilai yang mau dirubah apa?
                [e.target.name]: e.target.value
            }
        })
    }

    // fungsi utuk mengizinkan kapan komponennya harus dirender
    componentDidUpdate(prevProps, prevState){
        const { data } = this.state
        
        // jika keadaan date tidak sama dengan data/keadaan saat ini
        if (prevState.data.date !== data.date) {
            const startDate = new Date(data.date.startDate)
            const endDate = new Date (data.date.endDate)

            // syntax untuk mendapatkan nilai durasi
            const countDuration = new Date (endDate - startDate).getDate()
            
            // ganti state lokal
            this.setState({
                data: {
                    ...this.state.data,
                    duration: countDuration
                }
            })
        }

        // jika keadaan duration tidak sama dengan data/keadaan saat ini
        if (prevState.data.duration !== data.duration) {
            const startDate = new Date (data.date.startDate)
            const endDate = new Date (
                // kenapa dikurangi 1? karena hitungannya per malam
                startDate.setDate(startDate.getDate() + +data.duration - 1)
            )
            this.setState({
                ...this.state,
                data: {
                    ...this.state.data,
                    date: {
                        ...this.state.data.date,
                        endDate: endDate
                    }
                }
            })
        }
    } 

    render() {
        const { data } = this.state
        const { itemDetails, startBooking } = this.props
        return (
            <div className="card bordered" style={{padding: '60px 80px'}}>
                <h4 className="mb-3">Start Booking</h4>
                <h5 className="h2 text-teal mb-4">
                    ${itemDetails.price} {" "}
                    <span className="text-gray-500 font-weight-light">
                        per {itemDetails.unit}
                    </span>
                </h5>

                <label htmlFor="duration">How long you will stay?</label>
                <InputNumber
                    max={30}
                    suffix={" night"}
                    isSuffixPlural
                    onChange={this.updateData}
                    name="duration"
                    value={data.duration}
                />
                <label htmlFor="date">Pick a Date</label>
                <InputDate onChange={this.updateData} name="date" value={data.date}/>

                <h6
                    className="text-gray-500 font-weight-light"
                    style={{ marginBottom:40 }}
                >
                    You will pay{" "}
                    <span className="text-gray-900">
                        ${itemDetails.price * data.duration} USD
                    </span>{" "}
                    per{" "}
                    <span className="text-gray-900">
                        {data.duration} {itemDetails.unit}
                    </span>
                </h6>

                <Button className="btn" hasShadow isPrimary isBlock onClick={startBooking}>
                    Continue to Book
                </Button>
            </div>
        )
    }
}

BookingForm.propTypes = {
    itemDetails: propTypes.object,
    startBooking: propTypes.func
}