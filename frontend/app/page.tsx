import BBSCardList from "./components/BBSCardList";

export default function Home() {
  return (
    <>
      <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
        <BBSCardList />
      </main>
    </>
  );
}
