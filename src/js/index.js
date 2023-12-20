//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";

const SimpleCounter = (props) =>{
    return(
        <div className="container bg-dark">
            <div className="row">
                <div className="reloj col-1">
                <i className="far fa-clock"></i>
                </div>
                <div className="cienmiles col-1">
                    {props.crono6 % 10}
                </div>
                <div className="diezmiles col-1">
                    {props.crono5 % 10}
                </div>
                <div className="miles col-1">
                    {props.crono4 % 10}
                </div>
                <div className="centenas col-1">
                    {props.crono3 % 10}
                </div>
                <div className="decimos col-1">
                    {props.crono2 % 10}
                </div>
                <div className="unidades col-1">
                    {props.crono1 % 10}
                </div>
            </div>
        </div>
    )
}

SimpleCounter.propTypes = {
    crono1: PropTypes.number,
    crono2: PropTypes.number,
    crono3: PropTypes.number,
    crono4: PropTypes.number,
    crono5: PropTypes.number,
    crono6: PropTypes.number,
    
};

let counter = 0;
setInterval(function(){
    const seis = Math.floor(counter/100000);
    const cinco = Math.floor(counter/10000);
    const cuatro = Math.floor(counter/1000);
    const tres = Math.floor(counter/100);
    const dos = Math.floor(counter/10);
    const uni = Math.floor(counter/1);
    console.log(seis, cinco, cuatro, tres, dos, uni);
    counter++;
    ReactDOM.render(<SimpleCounter
        crono1={uni}
        crono2={dos}
        crono3={tres}
        crono4={cuatro}
        crono5={cinco}
        crono6={seis}
             />, document.querySelector("#app"));

},1000);



export default SimpleCounter;

//render your react application

