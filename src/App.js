
import './App.css';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { Component } from 'react';

import Clarifai from 'clarifai';
// import { func } from 'prop-types';

const app = new Clarifai.App({
  apiKey: '6443f1dfe1a24dd9b9a2326bb44272ee'
 });

const particleOptions = {
  particles: {
      number:{
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
  }
}

class App extends Component{
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:''
    }
  }

  onInputChange = (Event) =>{
    this.setState({input: Event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(
      function(response){
        console.log(response);
      },
      function(err){

      }
    );
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions} 
        />
        <Navigation />
        <Logo />
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />

        <FaceRecognition imageUrl={this.state.imageUrl}/>

      </div>
    );
  }
}

export default App;
