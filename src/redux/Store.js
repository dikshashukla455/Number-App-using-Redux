import {createStore} from 'redux';
import ItemReducer from './Reducer';

const Store = createStore(ItemReducer);

export default Store;