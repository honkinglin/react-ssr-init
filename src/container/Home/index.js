import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.newsList.length) {
            this.props.getHomeList();
        }
    }

    getList() {
        const { newsList } = this.props;
        return newsList.map(item => (
            <div key={item.title}>{item.title}</div>
        ));
    }

    render() {
        return (
            <div>
                <Header />
                <p>this is {this.props.name}!!!!</p>
                { this.getList() }
                <button onClick={() => alert('home')}>
                    click
                </button>
            </div>
        );
    }
}

Home.loadData = (store) => {
    // 在服务端渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getHomeList());
};

const mapStateToProps = state => ({
    name: state.home.name,
    newsList: state.home.newsList,
});

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
