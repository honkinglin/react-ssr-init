import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <div>
            <Header />
            <p>this is {props.name}!!!!</p>
            <button onClick={() => alert('home')}>click</button>
        </div>
    )
}

const mapStateToProps = state => ({
    name: state.home.name
});

export default connect(mapStateToProps, null)(Home);
