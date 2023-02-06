import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Layout from './components/Layout';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
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
  );
}

export default App;
