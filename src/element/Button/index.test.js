import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

// jika isDisabled itu present di propnya udah pasti ga bisa diklik
test("Should not allowed click button if isDisabled is present", () => {
    const {container} = render(<Button isDisabled></Button>);

    // cek jika di kontainer komponen nanti ada span atau tidak
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// mengecek ketika buttonnya isLoading ada/gak
test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);

    // cek jika buttonnya loading, terus cek apa bener ada loading di komponen itu
    expect(getByText(/loading/i)).toBeInTheDocument();

    // cek jika di kontainer komponen nanti ada span atau tidak
    expect(container.querySelector("span")).toBeInTheDocument();
});

// jika button itu tipenya link dan external
test("Should render <a> tag", () => {
    const { container } = render(<Button type="link" isExternal></Button>);

    // cek jika di kontainer komponen nanti ada tag a atau ga dan pastiin ada di document
    expect(container.querySelector("a")).toBeInTheDocument();
});


// jika button itu tipenya link dan ngeaksesnya ke internal
test("Should render <link> component", () => {
    const { container } = render(
    <Router>
        <Button href="" type="link"></Button>
    </Router>
    );

    // cek jika di kontainer komponen nanti ada tag a atau ga dan pastiin ada di document
    expect(container.querySelector("a")).toBeInTheDocument();
});