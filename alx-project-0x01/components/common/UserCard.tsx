// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

interface Props {
  user: UserProps;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition-all">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h2>
      <p className="text-sm text-gray-500 mb-2">@{user.username}</p>
      <p className="text-gray-600 mb-2">{user.email}</p>
      <p className="text-gray-600 mb-2">{user.phone}</p>
      <p className="text-blue-600 underline mb-4">{user.website}</p>

      <div className="bg-gray-50 p-3 rounded-lg mb-3">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-gray-500 text-sm">
          {user.address.street}, {user.address.city}
        </p>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-gray-500 text-sm">{user.company.name}</p>
        <p className="italic text-gray-400 text-xs">
          "{user.company.catchPhrase}"
        </p>
      </div>
    </div>
  );
};

export default UserCard;
