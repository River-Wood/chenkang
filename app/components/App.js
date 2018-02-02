import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

// export default React.createClass({
//   render() {
//     return (
//       <nav>
//         <ul role="nav">
//           <li>
//             <NavLink to="/home" onlyActiveOnIndex>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// });

const App = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/greeting">first</Link></li>
        <li><Link to="/memory">second</Link></li>
        <li><Link to="/ending">third</Link></li>
      </ul>
    </nav>
  );
};

export default App;
