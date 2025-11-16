import mongoose from "mongoose";

const connectToDB = async () => {
  const url = `mongodb+srv://seshuk2409_db_user:seshu12345@users.deitnmc.mongodb.net/`;

  await mongoose
    .connect(url)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};

export default connectToDB;
