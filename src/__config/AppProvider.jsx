import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
// import localForage from 'localforage'
import Loader from 'react-loader' 

import Store from './Store'
import App from '../containers/App'

export default class AppProvider extends Component {
  constructor() {
    super()
    this.state={rehydrated:false}
  }
  componentWillMount(){
    persistStore(Store, // {storage:localForage},
      {}, ()=>{ this.setState({rehydrated:true}) }
    )
  }
  render() {
    if(!this.state.rehydrated){return(<Loader/>)}
    return (<Provider store={Store}><App/></Provider>)
  }
}
