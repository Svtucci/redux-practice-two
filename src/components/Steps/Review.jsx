import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
//Since review page we only need selector
import axios from 'axios'; 

function Review() {
    const dispatch = useDispatch(); 
    const history = useHistory(); 
    // History is ony available to a component inside router


    const personName = useSelector(store => store.personName);
    const activityType = useSelector(store => store.activityType);
    const minutes = useSelector(store => store.minutes);
    const miles = useSelector(store => store.miles);

    const sendToServer = () => {
        axios.post('/activity', {
            name: personName, 
            type: activityType, 
            minutes: minutes,
            miles: miles,
        }).then((response) => {
            // Clear our inputs
            dispatch({type: 'CLEAR_FORM'});
            // Navigate to the list view
            history.push('/activity-list'); 
        }).catch(error => {
            alert('Something went wrong! Please try again.');
            console.log(error)
        })
    }

    return (
        <>
            <h3>Review</h3>
            <div>Name: {personName}</div>
            <div>Type: {activityType}</div>
            <div>Minutes: {minutes} </div>
            <div>Miles: {miles}</div>
            <button onClick={sendToServer}>Submit</button>
        </>
    )
}

export default Review