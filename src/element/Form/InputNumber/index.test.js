import React from 'react'
// fireEvent berfungsi untuk menstimulasi seperti click dibrowser
import { render, fireEvent } from "@testing-library/react"
import InputNumber from './index'

class TestInput extends React.Component {
    state = {
        value: ""
    };

    // funsi untuk merubah ngeset state
    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    render(){
        return (
            <InputNumber
                max={30}
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
            />
        );
    }
}

// fungsi untuk agar tidak perlu setup lagi setiap testing 
const setup = () => {
    const { container } = render(<TestInput/>);
    const input = container.querySelector(`input.form-control[name='value']`);

    return {
        input
    };
};

// test - 1 : komponen ini harus bisa merubah value
test("Should able to change value", () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: 23 }});
    console.log (input.value);
    expect(input.value).toBe("23");
});

// test - 2 : komponen ini tidak boleh berubah ketika udah nyentuh max
test("Should not be able to change when reach max value", () => {
    const { input } = setup();

    fireEvent.change(input, {target: { value: 33 }});
    expect(input.value).toBe("");
});

