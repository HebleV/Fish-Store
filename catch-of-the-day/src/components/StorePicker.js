import React from 'react';
import { getFunName } from '../helpers';

export class StorePicker extends React.Component {
    myInput = React.createRef();
     goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Enter store name</h2>
                <input 
                    ref={this.myInput}
                    type="text" 
                    placeholder="store name" 
                    defaultValue={getFunName()}/>
                <button type="submit" >Visit</button>
            </form>
        )
    };
};