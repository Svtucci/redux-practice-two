import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * StepTwo collects user input for the type of activity
 */
function StepTwo() {
    const history = useHistory();
    const dispatch = useDispatch();

    // Input value comes from Redux (useSelector)
    const activityType = useSelector(store => store.activityType);
    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_TYPE', payload: event.target.value };
        dispatch(action);
    }
    const nextPage = (event) => {
        event.preventDefault();
        if (activityType.length > 0) {
            history.push('/step-3');
        } else {
            alert('Please add an activity type.');
        }
    }
    return (
        <>
            <h3>Step Two</h3>
            <form onSubmit={nextPage}>
                <label htmlFor="activity-type">Activity Type:</label><br />
                <input id="activity-type" value={activityType} onChange={handleChange} type="text" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default StepTwo;