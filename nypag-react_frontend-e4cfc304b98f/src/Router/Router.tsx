import { Route, Routes } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../components/pages/HomePage/HomePage';
import UserTable from '../components/pages/UserPage/UserTable';
import UserPage from '../components/pages/UserPage/UserPage';
import authorities from '../config/Authorities';
import SinglePostPage from "../components/pages/SinglePostPage/SinglePostPage";
import SighnedInPage from "../components/pages/HomePage/SighnedInPage";
import NewPostPage from '../components/pages/PostPage/NewPostPage';
import EditPostPage from "../components/pages/EditPostPage/EditPostPage";
import AdminPage from "../components/pages/AdminPage/AdminPage";
import UnauthorizedPage from "../components/pages/UnauthorizedPage";


/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
  //const { checkRole } = useContext(ActiveUserContext);

  /** navigate to different "home"-locations depending on Role the user have */

  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/post/:id'} element={<SinglePostPage />} />
      <Route path={'/home'} element={<SighnedInPage />} />
        <Route path={'/edit-post/:id'} element={<EditPostPage />} />
        <Route path={'/admin'} element={<AdminPage />} />
        <Route path='/unauthorized' element={<UnauthorizedPage />} />

        <Route path={'/usergallery'} element={<SinglePostPage />} />

        <Route
            path={'/create-post'}
             element={<NewPostPage />}
        />




        <Route
            path={'/users'}
            element={
                <PrivateRoute
                    requiredAuths={[authorities.USER_READ]}  
                    element={<UserTable />}
                />
            }
        />
      <Route
        path='/useredit'
        element={
          <PrivateRoute
            requiredAuths={[authorities.USER_DEACTIVATE, authorities.USER_CREATE]}
            element={<UserPage />}
          ></PrivateRoute>
        }
      />
      <Route
        path='/useredit/:userId'
        element={
          <PrivateRoute
            requiredAuths={[authorities.USER_READ]}
            element={<UserPage />}
          ></PrivateRoute>
        }
      />

      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Router;
