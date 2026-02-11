import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI ?? "";

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables.");
}

type MongooseGlobal = typeof globalThis & {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

const globalForMongoose = globalThis as MongooseGlobal;
const mongooseCache =
  globalForMongoose.mongoose ??
  (globalForMongoose.mongoose = { conn: null, promise: null });

async function connectToDatabase(): Promise<typeof mongoose> {
  if (mongooseCache.conn) {
    return mongooseCache.conn;
  }

  if (!mongooseCache.promise) {
    mongooseCache.promise = mongoose.connect(MONGO_URI).catch((err) => {
      mongooseCache.promise = null;
      throw err;
    });
  }

  mongooseCache.conn = await mongooseCache.promise;
  return mongooseCache.conn;
}

export default connectToDatabase;
