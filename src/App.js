import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
const HomePage = lazy(() => import('../src/pages/HomePage/HomePage.js'));
const TweetsPage = lazy(() => import('../src/pages/TweetsPage/TweetsPage.js'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
