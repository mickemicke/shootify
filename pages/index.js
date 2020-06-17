import Head from "next/head";

export default function Home({ props }) {
  console.log("props", props);
  return <div>{props.name}</div>;
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const json = await res.json();

  console.log("json", json);
  // return { stars: json.stargazers_count }
  return { props: json };
};
