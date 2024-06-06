import React from 'react';
import Dropdown from './components/Dropdown/Dropdown';

const Playground = () => {
    const playgroundContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
    };

    return (
        <div style={playgroundContainerStyle}>
            <h1>Dropdown Playground</h1>
            <Dropdown header="Sort By">
                <div>Popularity</div>
                <div>Price: Low to High</div>
                <div>Discount: High to Low</div>
            </Dropdown>
        </div>
    );
};

export default Playground;
