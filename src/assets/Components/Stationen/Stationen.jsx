import "./Stationen.scss";

const Stationen = ({ station, onClick }) => {
    const isLeft = station.index % 2 === 0; 

    const handleClick = () => {
        onClick(station); 
    };

    return ( 
        <div className={`station ${isLeft ? 'left' : 'right'}`} onClick={handleClick}> 
            <ul>
                {station.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Stationen;