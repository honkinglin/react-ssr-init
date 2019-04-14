import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getHomeList } from './store/actions';
import styles from './style.css';
import withStyle from '@/withStyle';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.staticContext) {
            this.props.staticContext.css.push(styles._getCss());
        }
    }

    componentDidMount() {
        if (!this.props.newsList.length) {
            this.props.getHomeList();
        }
    }

    getList() {
        const { newsList } = this.props;
        return newsList.map(item => (
            <p key={item.title} className={styles.item}>{item.title}</p>
        ));
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>hello</title>
                    <meta name="description" content="lalalala" />
                </Helmet>
                <div>
                    <p className={styles.item}>this is {this.props.name}!!!!</p>
                    { this.getList() }
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    name: state.home.name,
    newsList: state.home.newsList,
});

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList());
    }
});

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles));

ExportHome.loadData = (store) => {
    // 在服务端渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getHomeList());
};

export default ExportHome;
