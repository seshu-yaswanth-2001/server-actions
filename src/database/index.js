import mongoose from "mongoose";

const connectDB = async () => {
  const URL = `mongodb+srv://seshuk2409_db_user:seshu12345@users.deitnmc.mongodb.net/`;
  await mongoose
    .connect(URL)
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
};

export default connectDB;
