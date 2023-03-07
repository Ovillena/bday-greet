import { useState } from "react";
import { useRouter } from "next/router";

const ModPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
    const fixedName = Buffer.from(`${name}`).toString("base64");
    const fixedMessage = Buffer.from(`${message}`).toString("base64");
    router.push(`/?n=${fixedName}&m=${fixedMessage}`);
  };

  return (
    <>
      <div>
        <header>
          <form>
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <label>message</label>
            <input
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></input>
            <button onClick={handleSubmit}>submit</button>
          </form>
        </header>
      </div>
    </>
  );
};

export default ModPage;
