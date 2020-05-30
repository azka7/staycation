import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked.js";
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

import landingPage from "json/landingPage.json";
export default class LandingPage extends Component {
    // ref - constructor itu bakal berjalan paling pertama
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        window.title = "StayCation | Home"
        window.scrollTo(0, 0)
    }

    render(){
        
        return (
        <>
            <Header {...this.props}></Header>
            <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
            <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
            <Categories data={landingPage.categories}/>
            <Testimony data={landingPage.testimonial}/>

            {/* bagian footer tidak perlu mengambil data, jadi tidak usah ditambahkan code
            data seperti diatas  */}
            <Footer/>
        </>
        );
    }
}
