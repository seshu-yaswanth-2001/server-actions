import AddNewUser from "@/components/add-new-user";
import { getUsers } from "../actions";
import SingleCard from "@/components/single-card";
import ContextProvider from "../../context/index";

async function UserMangement() {
  const getListOfUsers = await getUsers();

  return (
    <ContextProvider>
      <div className="p-20 max-w-6xl">
        <div className="flex justify-between">
          <h1>User Mangement</h1>
          <AddNewUser />
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {getListOfUsers &&
          getListOfUsers.data &&
          getListOfUsers.data.length > 0 ? (
            getListOfUsers?.data?.map((user) => (
              <SingleCard key={user._id} user={user} />
            ))
          ) : (
            <h3>No users found! Please create one</h3>
          )}
        </div>
      </div>
    </ContextProvider>
  );
}

export default UserMangement;
