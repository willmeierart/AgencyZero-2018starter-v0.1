import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {RouteTransition} from 'react-router-transition'
import 'normalize.css'
import '../styles/main.css'
import '../styles/animations.css'
import {fetchWPpages, fetchWPposts} from '../_actions'
import {binder} from '../__config/Utils'
import Home from '../components/Home'
import Header from '../components/Architecture/Header'
import Footer from '../components/Architecture/Footer'

class App extends Component {
  constructor(props){
    super(props)
    const {WPdata} = this.props.data
    const freshy = []

    // async function fresh(){
    //   const pages = await fetchWPpages().payload
    //   const posts = await fetchWPposts().payload
    //   freshy.concat([pages,posts])
    //   console.log(freshy)
    //   return freshy
    // }
    // fresh().then(()=>{
    //   if(WPdata[0]!==freshy.data[0]){
    //     fetchBoth()
    //   }
    // })

    // this.state = {}
    // binder(this,[''])
  }
  componentDidMount(){
    const fetchBoth=(()=>{
      this.props.onFetchWPpages()
      this.props.onFetchWPposts()
    })()
  }
  render() {
    // const {FnState} = this.props
    return (
      <div className="App">
        <Router>
          <div>
            <Header {...this.props}/>
            <main>
              <Route render={({location,history,match})=>{return(
                <RouteTransition
                    pathname={location.pathname}
                    atEnter={{ opacity: 0}}
                    atLeave={{ opacity: 0}}
                    atActive={{ opacity: 1}}
                    mapStyles={styles=>({opacity:styles.opacity, transform:`translateY(${styles.translateY}px) translateZ(${styles.translateZ})`})}>
                  <Switch key={location.pathname} location={location}>
                    <Route exact path="/" render={()=>{return(
                        <Home {...this.props}/>
                      )}}/>
                    <Route render={() => { return <Redirect to="/" /> }} />
                  </Switch>
                </RouteTransition>
              )}}/>
            </main>
            <Footer/>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{return {data:state}}
const mapDispatchToProps=(dispatch)=>{return{
  onFetchWPpages:()=>{dispatch(fetchWPpages())},
  onFetchWPposts:()=>{dispatch(fetchWPposts())}
}}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App
