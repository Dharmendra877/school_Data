
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AddSchoolData">Add School</Link></li>
        <li><Link to="/ShowSchools">Show Schools</Link></li>
        {/* <li><Link to="/SchoolPage">Schools Page</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
