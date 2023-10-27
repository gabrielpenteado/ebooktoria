import EbookList from "../components/EbookList";

export default function Home() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-8 gap-4 w-[100vw]">
        <EbookList />
      </div>
    </main>
  );
}
