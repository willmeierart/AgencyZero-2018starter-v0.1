import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'
import {autoRehydrate} from 'redux-persist'
// import localForage from 'localforage'
import reducers from '../_reducers'

const Store = compose(
  applyMiddleware(promise, logger),
  autoRehydrate()
)(createStore)(reducers)

export default Store
