import React from 'react';
import Button from '../../components/Button'

const Home = () => {
    const [toggled, setToggled] = React.useState(false);

    const handleClick = () => {
        setToggled(!toggled);
    }

    return <div>
        <h1>Home</h1>
        <Button variant="contained" onClick={handleClick}>Button</Button>
        
        <Button variant="outlined" onClick={handleClick}>Button</Button>
        {toggled === true ? <p>You can see mee</p> : null}
    </div>
    
}

export default Home;