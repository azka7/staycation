import React from 'react'
import Button from 'element/Button'
import BrandIcon from 'parts/IconText'
import Fade from 'react-reveal/Fade';


export default function Header(props) {

    // kondisi dimana untuk menerima path
    // klo isinya sama dengan path yang diminta akan ada nama class tambahan active
    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : "";
    }

    if (props.isCentered)
    return (
        <Fade>
            <header className="spacing-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Button className="brand-text-icon mx-auto" href="" type="link">
                            Stay<span className="text-gray-900">cation.</span>
                        </Button>
                    </nav>
                </div>
            </header>
        </Fade>
    )

    return (
        <Fade>
        <header className="spacing-sm">
            <div className="container">  
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href=""> 
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/car-rent")}`}>
                                <Button className="nav-link" type="link" href="/progress"> 
                                    Car Rent
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/blog")}`}>
                                <Button className="nav-link" type="link" href="/progress"> 
                                    Blog
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/agents")}`}>
                                <Button className="nav-link" type="link" href="/progress"> 
                                    Agents
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        </Fade>
    )
}
