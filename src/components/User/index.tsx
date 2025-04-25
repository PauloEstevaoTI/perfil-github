import { IUser } from "../../App";

// interface IUserProps {
//   userData: IUser;
// }

function User({ avatar_url, bio, name }: IUser) {
  return (
    <div className="max-w-2xl w-full rounded-lg border border-blue-500 bg-gray-50 p-4 shadow-md mt-4">
      <div className="flex flex-col md:flex-row items-center gap-6 p-4">
        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500 flex-shrink-0">
          <img
            src={avatar_url}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-600">{name}</h2>
          <p className="text-gray-700">{bio}</p>
        </div>
      </div>
    </div>
  );
}
export default User;
