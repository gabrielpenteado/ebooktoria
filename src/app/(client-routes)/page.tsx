import EbookList from "../components/EbookList";

export default function Home() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 w-full">
        <EbookList />
      </div>
    </main>
  );
}
