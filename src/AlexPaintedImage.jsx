import React from "react"
// import alexpicPaintedResized2 from "./alexpicpaintedbackgroundremoved2.png"
import alexPainted from "./alexpicpaintedbackgroundremoved3.png"

class AlexPaintedImage extends React.Component{
     
    render(){
        return(            
            <img src={alexPainted} alt= "https://img.huffingtonpost.com/asset/5b0f14991a0000c704ce023d.jpeg?ops=crop_0_216_1350_1286%2Cscalefit_720_noupscale"></img>
        )
    }    
}

export default AlexPaintedImage;