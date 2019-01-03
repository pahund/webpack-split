import React, { lazy, Suspense, Component } from 'react';
import styles from './App.css';

const Message = lazy(() => import(/* webpackChunkName: "message" */ './Message'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
        this.expand = this.expand.bind(this);
    }

    expand() {
        this.setState({ expanded: true });
    }

    render() {
        const { expanded } = this.state;
        return (
            <div className={styles.App}>
                <h1>webpack-split</h1>
                <h2>Demo for code splitting with webpack</h2>
                {
                    expanded ?
                    <Suspense fallback={<p>Loading…</p>}>
                        <Message/>
                    </Suspense> :
                    <button onClick={this.expand}>Click Me</button>
                }
            </div>
        );
    }
}

export default App;
