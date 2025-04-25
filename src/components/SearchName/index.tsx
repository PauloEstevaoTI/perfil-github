import { useState } from "react";
import { IUser } from "../../App";
import lupa from "../../assets/lupa.png";
import { getUser } from "../../services/api";

interface ISearchUser {
  setUserData: React.Dispatch<React.SetStateAction<IUser | null>>;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export function SearchName({
  setUserData,
  setSearched,
  setError,
}: ISearchUser) {
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    setError(null);
    setSearched(true);
    try {
      const userResponse = await getUser(username);
      console.log(userResponse);
      setUserData(userResponse ?? null);
    } catch (error) {
      console.log(error);
      setError(`Usuário não encontrado.`);
    }
  };

  const handleChangeNameInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  return (
    <div className="">
      <form
        className="bg-white w-[503px] h-[62px] flex justify-end rounded-md"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          className="w-full outline-none pl-5"
          onChange={handleChangeNameInput}
          value={username}
        />

        <button
          className="bg-[#005CFF] flex items-center justify-center w-[62px] rounded-lg right-0 cursor-pointer"
          type="submit"
        >
          <img className="" src={lupa} width={25} height={25} />
        </button>
      </form>
      {/* <div className="bg-white w-[503px] h-[62px] flex justify-end rounded-md">
        <div className=""></div>
      </div> */}
    </div>
  );
}
