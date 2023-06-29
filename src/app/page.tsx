import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div  className="flex h-screen flex-col items-center justify-center">
      <h1 className="font-bold">Home</h1>
      <button className=" rounded-lg bg-blue-500 hover:bg-blue-700 text-white px-2 py-1">
        ログイン
      </button>
    </div>
  );
}
