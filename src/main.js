import React, { Component } from 'react';
import logo from './farmitlogo.png';
import data from "./data/data.json"
import './main.css';


export class Main extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    handleScroll = () => {
        let scrollTop = Math.trunc(document.documentElement.scrollTop);
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        /*Top */
        if (document.getElementById("logo")) {
            document.getElementById("logo").classList.remove("img-edit")
        }
        if (scrollTop === 0) {
            document.getElementById("navbar").style.padding = "220px 100px";
            document.getElementById("logo").style.height = "35vh";
            if (document.getElementById("logo")) { document.getElementById("logo").classList.add("logo-xs"); document.getElementById("logo").classList.add("img-edit") }
            document.getElementById("section").style.visibility = "hidden";


        }
        // if (scrollTop > 40) {
        //     document.getElementById("navbar").style.padding = "30px 10px";
        //     document.getElementById("logo").style.height = "25vh";
        //     document.getElementById("section").style.visibility = "hidden";

        // }
        // if (scrollTop > 60) {
        //     document.getElementById("navbar").style.padding = "30px 10px";
        //     document.getElementById("logo").style.height = "15vh";
        //     document.getElementById("section").style.visibility = "hidden";
        // }
        // if (scrollTop < 80) {
        //     document.getElementById("section").style.visibility = "hidden";
        // }
        if (scrollTop > 80) {
            document.getElementById("navbar").style.padding = "30px 10px";
            document.getElementById("navbar").style.float = "left";
            document.getElementById("navbar").style.display = "flex";
            document.getElementById("navbar").style.width = "100%";
            document.getElementById("logo").style.height = "5vh";
            document.getElementById("section").style.marginTop = "38vh";
            document.getElementById("section").style.visibility = "visible";
            if (document.getElementById("logo")) { document.getElementById("logo").classList.remove("logo-xs") }
        }

        /*towards bottom*/
        if (scrollTop > clientHeight) {
            console.log("towards bottom")
            if ((clientHeight + scrollTop) + 80 < scrollHeight) {
                document.getElementById("navbar").style.padding = "30px 10px";
                document.getElementById("navbar").style.float = "left";
                document.getElementById("navbar").style.display = "flex";
                document.getElementById("logo").style.height = "5vh";
                if (document.getElementById("logo")) { document.getElementById("logo").classList.remove("logo-xs") }
            }
            // if ((clientHeight + scrollTop) + 60 < scrollHeight) {
            //     document.getElementById("navbar").style.padding = "30px 10px";
            //     document.getElementById("logo").style.height = "5vh";
            // }
            // if ((clientHeight + scrollTop) + 40 < scrollHeight) {
            //     document.getElementById("navbar").style.padding = "30px 10px";
            //     document.getElementById("logo").style.height = "25vh";
            // }
            if ((clientHeight + scrollTop) === scrollHeight) {
                document.getElementById("navbar").style.padding = "220px 100px";
                document.getElementById("logo").style.height = "35vh";
                document.getElementById("show-icons").style.display = "block";
                if (document.getElementById("logo")) { document.getElementById("logo").classList.add("logo-xs"); document.getElementById("logo").classList.add("img-edit") }
            }
        }

    }
    render() {
        return (

            <div className="container">
                <div id="navbar">
                    <img id="logo" src={logo} className="logo-effects" alt="logo" />
                </div>
                <div id="section" className="sections " >{data.appcontainer.sections.map((sections) => {
                    return <h1 className="section-effect">{sections.paragraph}</h1>
                })}</div>
                <span className="social-icons" id="show-icons">
                    <ul class="social-network social-circle">
                        <li><a href={data.appcontainer.social ? data.appcontainer.social.facebook : "Loading"} class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href={data.appcontainer.social ? data.appcontainer.social.linkedin : "Loading"} class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </span>
            </div>

        )
    }
}

export default Main;