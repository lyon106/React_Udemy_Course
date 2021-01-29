//Second template
const user = {
    name: 'Andrew',
    age: 18,
    location: 'Philadelphia' 
};

function getLocation(location) {
    if(location) return <p>Location: {location}</p>;
    else return undefined;
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>} 
        {getLocation(user.location)}
    </div>
);
