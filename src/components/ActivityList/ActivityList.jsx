import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function ActivityList() {
    const dispatch = useDispatch();
    const activities = useSelector(store => store.activities); 


    useEffect(() => {
        fetchActivityList();
    }, [])

    const fetchActivityList = () => {
        axios.get('/activity').then(response => {
            dispatch({ type: 'SET_ACTIVITY_LIST', payload: response.data })
        }).catch(error => {
            alert('Something went wrong.')
        });
    }

    return (
        <>
            <h3>Activity List</h3>
            {
                activities.map(activity => (
                    <div key={activity.id}>
                        <p>Name: {activity.name}</p>
                        <p>Type: {activity.type}</p>
                        <p>Minutes: {activity.minutes} </p>
                        <p>Miles: {activity.miles}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default ActivityList 