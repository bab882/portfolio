import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SnakeGame from '../../components/SnakeGame';


function routesnake() {
  return (
    <Router>
      <Routes>
        <Route path="/projet/Snake" element={<SnakeGame />} />
      </Routes>
    </Router>
  );
}

export default routesnake;
