import React from "react";
// Just my home page

const Homepage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h3>-Welcome to the home page, use the navigation bar above to navigate to the All Campuses and All Students pages.</h3>
      <h3>-On the All Campuses page, you can see all campuses that are recorded, and likewise on the All Students page.</h3>
      <h3>-Clicking on a campus or student's name in the All Campuses or All Students pages will redirect you to a single view.</h3>
      <h3>-In the Single View page, there is more information displayed. As a user, you can delete a campus or student from the database or edit information by clicking the Edit button.</h3>
      <h3>-On the Single Campus page, you can also help students register to the campus on the current page or remove them from the campus.</h3>
      <h3>-On the Student Profile page, you can enroll/change the campus for that student.</h3>
    </div>
  );
};

export default Homepage;