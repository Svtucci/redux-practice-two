import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * StepFour Collects user input for miles 
 */

function StepFour () {
    // Allows to send data to redux
    const dispatch = useDispatch();

    //This will allow us to navigate to next page
    const history = useHistory(); 

    // Miles is data coming from redux 
    const miles = useSelector(store => store.miles);

    // On input change, send the new value to redux
    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_MILES', payload: event.target.value };
        dispatch(action);
    }

    
    const nextPage = (event) => {
        event.preventDefault();
        if (miles > 0 ) {
            history.push('/review')
        } else {
            alert('PLease enter a value greater tahn 0.')
        }
    }
    return (
        <>
            <h3>Step Four</h3>
            <form onSubmit={nextPage}>
                <label htmlFor="miles">Miles:</label><br />
                <input value={miles} onChange={handleChange} type="number" />
                <input type="submit" value="Next" />
            </form>
        </>
    )
}

export default StepFour; 