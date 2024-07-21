import React from "react";
import ShowSchools from "./ShowSchools";

const SchoolPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-4">
        <ShowSchools />
      </h1>
      <SchoolList />
    </div>
  );
};

export default SchoolPage;
