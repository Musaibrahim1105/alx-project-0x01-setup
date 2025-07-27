// pages/users/index.tsx

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import { UserData } from "@/interfaces";
import UserModal from "@/components/common/UserModal";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [userList, setUserList] = useState<UserData[]>(users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: userList.length + 1 };
    setUserList([newUserWithId, ...userList]);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {userList.map((user, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p>@{user.username}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm">{user.address.city}</p>
              <p className="text-sm text-blue-600">{user.website}</p>
              <p className="text-xs italic">{user.company.name}</p>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <UserModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
