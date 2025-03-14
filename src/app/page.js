import Button from "./components/Button/Button";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="bg-black text-white">Jaimin Kharadi</h2>
      <Button variant="primary">Lets</Button>
    </div>
  );
}
