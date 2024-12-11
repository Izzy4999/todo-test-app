import AppInput from "@/components/AppInput";
import React, { useState } from "react";

type Props = {
  setUserName: (name: string) => void;
};

function Login({ setUserName }: Props) {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }
    setUserName(name);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="space-y-3">
        <p className="text-lg font-semibold">Enter your name:</p>
        <AppInput onChange={(e) => setName(e.currentTarget.value)} />
        <button className="border-2 px-4 py-1 font-semibold" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
