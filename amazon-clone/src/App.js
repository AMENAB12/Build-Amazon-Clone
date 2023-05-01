import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import CheckOut from './Components/ChechOut/CheckOut';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/StateProvider/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51N11TbJMYIYcVrr9XRP7K8fEmQP6u5rQjoOeqQXJfet6Fz8VichHgchPGCpP6FYHYhTR19w5Z0IH8yZjvAbrrk1o00jSCEyzPE'
);

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
  <Router>
<div className="App">
{/* <Header/> */}
<Routes>

  <Route path="/" element = {<> <Header/> <Home/> </>}/>
  <Route path="/checkout" element = {<> <Header/> <CheckOut/> </>}/>
  <Route path="/login" element = {<> <Header/> <Login/> </>}/>
  <Route path="/payment" element = {<> <Header/>   <Elements stripe={promise}>
              <Payment />
            </Elements> </>}/>

  </Routes>
    

    </div>

    </Router>
    

       );
}

export default App;
