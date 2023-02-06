import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Layout from './components/Layout';
import RegisterScreen from './screens/RegisterScreen';
import axios from 'axios';
import { UserContextProvider } from './components/UserContext';

axios.defaults.baseURL = 'http://127.0.0.1:1000';

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <main>
          <container className="mt-3">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
              </Route>
            </Routes>
          </container>
        </main>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
