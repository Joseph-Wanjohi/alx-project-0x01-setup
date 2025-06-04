import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h3>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Username:</span> {user.username}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Phone:</span> {user.phone}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Website:</span>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.website}
        </a>
      </p>
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700">Address:</h4>
        <p className="text-sm text-gray-600">
          {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700">Company:</h4>
        <p className="text-sm text-gray-600">{user.company.name}</p>
        <p className="text-xs text-gray-500 italic">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;