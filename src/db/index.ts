import mongoose from "mongoose";

const connectDb = async () => {
await mongoose.connect("mongodb://localhost/EpicureNew");
};
export { connectDb }