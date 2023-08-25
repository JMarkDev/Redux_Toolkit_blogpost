import AddPostForm from "./features/posts/AddPostForm"
import PostList from "./features/posts/PostList"
import './index.css'
import Layout from "./components/Layout"
import SinglePostPage from "./features/posts/SinglePostPage"
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path="/" element={<Layout />}/>  

        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPostForm />}/>
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
