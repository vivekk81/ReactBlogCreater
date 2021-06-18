import Home from './components/layouts/Home/Home';
import Header from './components/layouts/Header';
import Blogs from './components/layouts/Blogs';
import BlogDetails from './components/Blog/BlogDetails'
import NewBlog from "./components/Blog/Create"
import { Route, Switch} from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Content } = Layout;

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Content className="site-layout" style={{ backgroundColor: "#FFFFFF", padding: '0 50px', marginTop: 64 }} >
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blogs" component={Blogs} exact/>
            <Route path="/blogs/new" component={NewBlog} exact />
            <Route path="/blogs/:title" component={BlogDetails} exact/>
          </Switch>
        </Content>
      </Layout>
    </>
  );
}

export default App;
