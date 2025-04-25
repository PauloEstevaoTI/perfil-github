import { useState } from "react";
import { Header } from "./components/Header";
import { SearchName } from "./components/SearchName";

import NotFoundData from "./components/NotFoundData/NotFoundData";
import User from "./components/User";

export interface IUser {
  avatar_url: string;
  name: string;
  bio: string;
}

function App() {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //const [notFoundUser, setNotFoundUser] = useState(false);
  // useEffect(() => {
  //   const loadData = async () => {};
  //   loadData();
  // }, []);

  return (
    <div className="bg-[#1f1f1f] flex-1 min-h-screen flex items-center justify-center">
      <div className="bg-black h-[537px] w-[1156px]">
        <section className="flex justify-between items-center flex-col ">
          <Header />
          <SearchName
            setUserData={setUserData}
            setSearched={setSearched}
            setError={setError}
          />
          {!searched ? (
            <></>
          ) : error ? (
            <NotFoundData />
          ) : userData ? (
            <User {...userData} />
          ) : null}
        </section>
      </div>
    </div>
  );
}

export default App;
