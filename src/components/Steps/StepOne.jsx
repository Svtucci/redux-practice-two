import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {
    const history = useHistory();
    const dispatch = useDispatch();

    // Input value comes from Redux (useSelector)
    const personName = useSelector(store => store.personName);
    const allPeople = useSelector(store => store.allPeople);
    
    const handleChange = (event) => {
        const action = { type: 'SET_PERSON_NAME', payload: event.target.value };
        dispatch(action);
    }

    const addPerson = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_PERSON_NAME', payload: personName };
        dispatch(action);
    }

    const nextPage = () => {
        if (allPeople.length > 0) {
            history.push('/step-2');
        } else {
            alert('Please add a person.');
        }
    }

    return (
        <>
            <h3>Step One</h3>
            <form onSubmit={addPerson}>
                <label htmlFor="person">Person:</label><br />
                <input id="person" value={personName} onChange={handleChange} type="text" />
                <input type="submit" />
            </form>

            <ul>
                {
                    allPeople.map((person, i) => <li key={i}>{person}</li>)
                }
            </ul>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default StepOne;