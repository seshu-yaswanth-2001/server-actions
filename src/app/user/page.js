import AddNewUser from "@/components/add-new-user";

const UserMangement = () => {
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Mangement</h1>
        <AddNewUser />
      </div>
    </div>
  );
};

export default UserMangement;
