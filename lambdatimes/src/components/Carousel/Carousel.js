import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      imageIndex: 0,
      currentImage: ''
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
      imageIndex: 0,
      currentImage: carouselData[0]
    })
  }

  leftClick = () => {
    let num = this.state.imageIndex - 1;
    if(num < 0 ) {
      num = this.state.carousel.length - 1
    }

    this.setState({
      imageIndex: num,
      currentImage: this.state.carousel[num]
    })
  }

  rightClick = () => {
    let num = this.state.imageIndex + 1;
    if(num > this.state.carousel.length - 1 ) {
      num = 0
    }

    this.setState({
      imageIndex: num,
      currentImage: this.state.carousel[num]
    })
  }

  selectedImage = () => {
    return <img src={this.state.currentImage} alt="carousel-img" style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
