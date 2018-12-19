import { combineReducers } from 'redux-immutable';
import { reducer as headerReaducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReaducer } from '../pages/detail/store';
import { reducer as loginReaducer } from '../pages/login/store';

const readucer = combineReducers({
    header: headerReaducer,
    home: homeReducer,
    detail: detailReaducer,
    login: loginReaducer
})

export default readucer;