// '/tomato' 경로를 가지는 페이지
import Link from "next/link";

const Tomato = () => {
  return (
    <div>
      <h2>Link to 'main' Page</h2>
      <Link href="/">
        <a>Move to '/'</a>
      </Link>
    </div>
  );
};

export default Tomato;
