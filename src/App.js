import React, {Component} from 'react'
import { ProfileCards } from './components/ProfileCards'

class App extends components {
  constructor() {
    supper();
    this.handleClick = this.handleClick.bind(this)



    this.state = {
      writers: {
        loading: false,
        list: []
        
      }

    }
  
    this.handleClick(){
      this.setState({
        writers: {
          loading: true,
        }
      });
      setTimeout(async () => {
        let resp = await ("/writers.json");
        let result = await resp.json()


      })
      

      this.setState({
        writers: {
          loading: false,
        }

      });

    }
  }
  render() {
    const {

      writers: { loading, list }
    } = this.state;
  }
  if(loading) {
  return (
    <div>
      <h1>writers profile</h1>
      <div className='container'> </div>
      <div className='card action'> </div>
      <p className='infotext'> </p>
      
    </div>
  )
}

export default App