import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>Hello, Next.js</h1>
      <h2>
        <Link href="/about">
          <a>about</a>
        </Link>
      </h2>
    </div>
  );
};

export default index;
