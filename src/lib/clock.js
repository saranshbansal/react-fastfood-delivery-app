import React from 'react';

class Clock extends React.Component {
    state = {
        time: ''
    }

    componentWillMount() {
        console.log('inside cwm');
        
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    componentDidMount() {
        console.log('inside cdm');
        this.intId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        console.log('inside cwum');
        clearInterval(this.intId);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return this.state.time;

    }
}

export default Clock;