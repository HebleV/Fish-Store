import React from 'react';

export class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Enter store name</h2>
                <input type="text" placeholder="store name" />
                <button type="submit">Visit</button>
            </form>
        )
    };
};