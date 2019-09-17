import React from 'react';
import Button from '../../components/Button'

const Home = () => {
    const [toggled, setToggled] = React.useState(false);

    const handleClick = () => {
        setToggled(!toggled);
    }

    return <div>
        <h1>Home</h1>
        <Button onClick={handleClick}>Click</Button>
        {toggled === true ? <p>You can see mee</p> : null}
    </div>
}

export default Home;