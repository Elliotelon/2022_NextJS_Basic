// '/' 경로를 가지는 페이지
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const App = () => {
  const [username, setUserName] = useState();
  return (
    <div>
      <label htmlFor="uName">username</label>
      <input
        type="text"
        id="uName"
        value={username || ""}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>{username} 깃허브검색하기</p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default App;
