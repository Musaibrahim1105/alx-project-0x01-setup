// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Nested field handling
    if (name.includes("address.")) {
      const [_, field] = name.split(".");
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value
        }
      }));
    } else if (name.includes("geo.")) {
      const [_, field] = name.split(".");
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value
          }
        }
      }));
    } else if (name.includes("company.")) {
      const [_, field] = name.split(".");
      setUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value
        }
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input name="name" placeholder="Name" value={user.name} onChange={handleChange} className="input" />
          <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
          <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
          <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />

          <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="input" />
          <input name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} className="input" />
          <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="input" />
          <input name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} className="input" />
          <input name="geo.lat" placeholder="Geo Lat" value={user.address.geo.lat} onChange={handleChange} className="input" />
          <input name="geo.lng" placeholder="Geo Lng" value={user.address.geo.lng} onChange={handleChange} className="input" />

          <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="input" />
          <input name="company.catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={handleChange} className="input" />
          <input name="company.bs" placeholder="BS" value={user.company.bs} onChange={handleChange} className="input" />

          <div className="col-span-2 flex justify-between mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
