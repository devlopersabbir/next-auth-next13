// "use client";
import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";

const Home = async () => {
  const session = await getServerSession(options);
  console.log("session: ", session);
  return <>{session ? <Card /> : <h1>not user</h1>}</>;
};

export default Home;

const Card = () => {
  return <div>page</div>;
};
