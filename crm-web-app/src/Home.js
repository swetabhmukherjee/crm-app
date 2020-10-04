import React from "react";
const Home = ({ handleLogout }) => {
  return (
    <section className="home">
      <nav>
        <h2>Welcome</h2>
        <h2>CRM Application</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <br></br><br></br><br></br><br></br>
      <center>
      <nav>
        <button>Add User</button> 
      </nav>
      <nav>
        <button>Update User</button> 
      </nav>
      <nav>
        <button>Delete User</button> 
      </nav>
      </center>
    </section>
  );
};

export default Home;