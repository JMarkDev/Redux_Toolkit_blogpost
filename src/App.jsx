import AddPostForm from "./features/posts/AddPostForm"
import PostList from "./features/posts/PostList"
import './index.css'
import Layout from "./components/Layout"
import SinglePostPage from "./features/posts/SinglePostPage"
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header"
import EditPost from "./features/posts/EditPost"
import UsersList from "./features/users/UsersList"
import UserPage from "./features/users/UserPage"

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
          <Route path="edit/:postId" element={<EditPost />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace/>} />
    </Routes>
    </>
  );
}

export default App
