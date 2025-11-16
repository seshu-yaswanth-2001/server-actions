import UserProvider from "@/context";

const { default: AddNewUser } = require("@/components/add-new-user");

async function UserManagement() {
  return (
    <UserProvider>
      <div className="p-20 max-w-6xl">
        <div className="flex justify-between">
          <h1>User Management</h1>
          <AddNewUser />
        </div>
      </div>
    </UserProvider>
  );
}

export default UserManagement;
