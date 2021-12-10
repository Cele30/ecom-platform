import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {
  initializeApp,
  signOutUser,
  storeUser,
  uninitializedApp,
} from '../store/authentication/authentication.slice';

export default function useAuthListener() {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        // localStorage.setItem('authUser', JSON.stringify(user))
        // setUser(user)
        dispatch(
          storeUser({
            email: user.email,
            userId: user.uid,
            username: user.displayName,
          })
        );
        dispatch(initializeApp());
      } else {
        // localStorage.removeItem('authUser')
        // setUser(null)
        dispatch(signOutUser());
        dispatch(initializeApp());
      }
    });
  }, [dispatch]);

  // return { user }
}
