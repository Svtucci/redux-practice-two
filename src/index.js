import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const personName = (state = 'Chris', action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_PERSON_NAME') {
        // This changes the value of our reducer
        return action.payload;
    }
    // Value of our reducer remains unchanged
    return state;
}

const allPeople = (state = [], action) => {
    if (action.type === 'ADD_PERSON_NAME') {
        // return a new array with existing items PLUS the new item
        return [...state, action.payload];
        // basically the same as state.push(action.payload);
    }
    return state;
}

const activityType = (state = 'Walking', action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_ACTIVITY_TYPE') {
        // This changes the value of our reducer
        return action.payload;
    }
    // Value of our reducer remains unchanged
    return state;
}

const minutes = (state = 0, action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_ACTIVITY_MINUTES') {
        // This changes the value of our reducer
        return action.payload;
    }
    // Value of our reducer remains unchanged
    return state;
}

const miles = (state = 0, action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_ACTIVITY_MILES') {
        // This changes the value of our reducer
        return action.payload;
    }
    // Value of our reducer remains unchanged
    return state;
}

const storeInstance = createStore(
    combineReducers(
        {
            personName,
            allPeople,
            activityType,
            minutes,
            miles,
            // Other reducers go here
        }
    ),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
