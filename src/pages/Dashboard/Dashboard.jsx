
function Dashboard({ isAdmin }) { 
  return (
    <div>
      {isAdmin ? <h1>Welcome Admin</h1> : <h1>Welcome User</h1>}
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}

export default Dashboard;