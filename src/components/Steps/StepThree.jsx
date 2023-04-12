import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * StepThree collects user input for the number of minutes
 */
function StepThree() {
    const history = useHistory();
    const dispatch = useDispatch();

    // Input value comes from Redux (useSelector)
    const minutes = useSelector(store => store.minutes);
    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_MINUTES', payload: event.target.value };
        dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
        if (minutes > 0) {
            history.push('/step-4');
        } else {
            alert('Minutes must be greater than 0.');
        }
    }

    return (
        <>
            <h3>Step Three</h3>
            <form onSubmit={nextPage}>
                <label htmlFor="minutes">Minutes:</label><br />
                <input id="minutes" value={minutes} onChange={handleChange} type="text" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default StepThree;