import {
  Link
} from "react-router-dom";

import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
  const {currentUser, signOut} = useAuth();

  return (

    <nav>
      <ul>
        <li>
          <Link to={Routes.LANDING}>Home</Link>
        </li>
        <li>
          <Link to={Routes.MOVIES}>Movies</Link>
          </li>
          <li><Link to={Routes.MOVIES_POPULAIR}>Populair</Link>
          </li>
          <li><Link to={Routes.MOVIES_TOP_RATED}>Rated</Link>
          </li>
          <li><Link to={Routes.MOVIES_SOON}>Soon</Link>
          </li>
        <li>
          <Link to={Routes.SERIES}>Series</Link>
        </li>
        <li>
          {!!currentUser
          ? <button onClick={signOut}><img className={styles.user__avatar} src={currentUser.photoURL} alt={currentUser.email}/>Logout</button>
          : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
          }    
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;