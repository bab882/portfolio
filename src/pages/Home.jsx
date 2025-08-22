//import React from "react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio";
import Project from "../components/Project";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <main>
                <Banner />
                <NavBar />
                <Project />
                <Portfolio />
                <Footer />
            </main>
        </div>
    );
}
export default Home;