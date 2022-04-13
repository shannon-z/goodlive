import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Main/Home'
import LifeService from '../pages/Main/LifeService'
import Shop from '../pages/Main/Shop'
import User from '../pages/Main/User'
import Layout from '../pages/Main/Layout'
import BottomNav from '../components/BottomNav'
import City from '../pages/City'
import Search from '../pages/Search'
import Details from '../pages/Details'
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/city" component={City}></Route>
                <Route path="/details/:id" component={Details}></Route>
                <Route path="/search/:keywords" component={Search}></Route>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        {/* exact 开启严格匹配 */}
                        <Route path="/life" component={LifeService}></Route>
                        <Route path="/shop" component={Shop}></Route>
                        <Route path="/user" component={User}></Route>
                    </Switch>
                    <BottomNav />
                </Layout>
            </Switch>
            
        </Router>
    )
}
export default AppRouter