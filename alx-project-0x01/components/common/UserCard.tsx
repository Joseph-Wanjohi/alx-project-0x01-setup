import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Username:</span> {username}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Phone:</span> {phone}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Website:</span>{" "}
        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {website}
        </a>
      </p>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700">Address:</h4>
        <p className="text-sm text-gray-600">
          {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700">Company:</h4>
        <p className="text-sm text-gray-600">{company.name}</p>
        <p className="text-xs text-gray-500 italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;