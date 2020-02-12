import React from 'react';
import CounterContainer from './containers/CounterContainer';
import PostListContainer from './containers/PostListContainer';
function App() {
    return (
        <div className="App">
            <CounterContainer />
            <PostListContainer />
        </div>
    );
}

export default App;
