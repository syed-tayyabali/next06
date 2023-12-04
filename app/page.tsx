import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="mt-12 mb-2 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Tayyab</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
