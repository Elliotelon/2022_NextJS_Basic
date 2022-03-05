import fetch from "isomorphic-unfetch";

const name = ({ user, time }) => {
  const username = user && user.name;
  return (
    <div>
      {username}
      {time}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString() }, revalidate: 3 };
    }
    return { props: { time: new Date().toISOString() } };
  } catch (e) {
    console.log(e);
    return { props: { time: new Date().toISOString() } };
  }
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { name: "jerrynim" } }],
    fallback: false,
  };
};

export default name;
