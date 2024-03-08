import React, { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";
import { getAdminAll } from "../api/Client";
import { useNavigate } from "react-router";

export const AdminDashboardCard = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    getAdminAll()
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);


  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (userId) => {
    console.log(`User with ID ${userId} clicked`);
    navigate('/admin-user-report-list', {state: userId})
  };

  return (
    <div className="main-div">
      <div className="dashboard-div">
        <h2 name="title" className="dashboard-title">List of All Users</h2>
        <input
          type="text"
          placeholder="Search by email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="admin-search-bar"
        />
        <div className="dashboard-list">
          <div className="scrollable-list">
            <ul className="user-list">
              {filteredUsers.map((user) => (
                <button
                  key={user.user_id}
                  onClick={() => handleClick(user.user_id)}
                >
                  <span className="initials">{user.email.substring(0, 2)}</span>{" "}
                  {user.email}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};