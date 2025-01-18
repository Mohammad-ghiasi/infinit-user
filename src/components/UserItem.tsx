import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
export default function UserItem({ user }: { user: any }) {
  return (
    <>
      <div
        key={user.login.uuid}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out px-1"
      >
        <div className="flex items-center space-x-4">
          <img
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <div className="flex-grow">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              {`${user.name.first} ${user.name.last}`}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              {`${user.login.username} / ${user.gender}`}
            </p>
          </div>
          <img
            src={`https://flagcdn.com/w40/${user.nat.toLowerCase()}.png`}
            alt={user.nat}
            className="w-6 h-4 rounded-sm border border-gray-200"
          />
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <FaPhoneAlt className="mr-2" />
            <p className="text-sm sm:text-base md:text-lg">{user.phone}</p>
          </div>
          <div className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2" />
            <p className="text-sm sm:text-base md:text-lg">{user.email}</p>
          </div>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <p className="text-sm sm:text-base md:text-lg">
              {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}, ${user.location.country}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
