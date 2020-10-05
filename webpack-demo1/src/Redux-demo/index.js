const createStore = function (reducer, initState) {
    let state = initState;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        state = reducer(state, action);
        for (let listener of listeners) {
            listener();
        }
    }

    function getState() {
        return state;
    }
    dispatch({ type: Symbol() });
    return {
        subscribe, dispatch, getState
    }
}
let counter = {
    count: 0
}
let info = {
    name: '前端九部',
    description: '我们都是前端爱好者！'
}
function counterReducer(state, action) {
    if (!state) state = counter;
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

function InfoReducer(state, action) {
    if (!state) state = info;
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.description
            }
        default:
            return state;
    }
}

function combineReducers(reducers) {
    let reducerskeys = Object.keys(reducers);
    return function conbination(state = {}, action) {
        const newState = {};
        for (let k of reducerskeys) {
            const previousStateKey = state[k];
            const reducer = reducers[k];
            const nextStateKey = reducer(previousStateKey, action);
            newState[k] = nextStateKey
        }
        return newState;
    }
}

const combreducer = combineReducers({
    counter: counterReducer,
    info: InfoReducer
});

let initState = {
}

let store = createStore(combreducer, initState);

store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count);
})

let next = store.dispatch;

let loggerMidware = (next) => (action) => {
    console.log('this state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
}

let errorMidware = (next) => (action) => {
    try {
        next(action);
    } catch (error) {
        console.log(error);
    }
}

store.dispatch = errorMidware(loggerMidware(next));

store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'DECREMENT' });