import { combineEpics } from 'redux-observable';

import CodeEpic from './codeEpic'

const rootEpic = combineEpics(
    CodeEpic.saveCodeEpic,
    CodeEpic.getCodeEpic
);

export default rootEpic;