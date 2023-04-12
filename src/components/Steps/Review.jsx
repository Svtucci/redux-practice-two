import { useSelector } from 'react-redux';
//Since review page we only need selector

function Review() {

    const personName = useSelector(store => store.personName);
    const activityType = useSelector(store => store.activityType);
    const minutes = useSelector(store => store.minutes);
    const miles = useSelector(store => store.miles);

    const sendToServer = () => {

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