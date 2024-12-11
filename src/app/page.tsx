"use client";
import { useState } from "react";
import HomePage from "./HomePage";
import Login from "./login";

export default function Home() {
  const [userName, setUserName] = useState<string>("");

  return userName === "" ? (
    <Login setUserName={setUserName} />
  ) : (
    <HomePage username={userName} />
  );
}
