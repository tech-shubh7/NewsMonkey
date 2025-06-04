import { Component, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import News from './components/News'
import About from './components/About'
import LoadingBar from "react-top-loading-bar";
import{
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"

export default class App extends Component{
  pageSize=6;
  state={
    progress:0
  }
  
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
    render(){

      return (
        <>
          <Router>
          <NavBar/>
          <LoadingBar
        color="#f11946"
        height={3}
        progress={this.state.progress}
        
      />
          <div className='container'>
               <Routes>
                <Route exact path='/' element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='us' category='general' />}/>
                <Route exact path='/general' element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='us' category='general' />}/>
                <Route exact path='/business' element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country='us' category='business' />}/>
                <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country='us' category='entertainment' />}/>
                <Route exact path='/health' element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country='us' category='health' />}/>
                <Route exact path='/science' element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country='us' category='science' />}/>
                <Route exact path='/sports' element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country='us' category='sports' />}/>
                <Route exact path='/technology' element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country='us' category='technology' />}/>
            <Route exact path='About' element={<About />}/>
          </Routes>
          </div>
          </Router> 
       
        </>
      )

}


}
