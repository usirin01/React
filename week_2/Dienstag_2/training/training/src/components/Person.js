// Person = (props) => {
//     return <h2>{props.firstname}</h2>;
// };

// export default Person;

Person = (props) => {
    return (
    <React.Fragment>
        <h2>{props.firstname}</h2>
        <h2>{props.lastname}</h2>
    </React.Fragment>);
};

export default Person;