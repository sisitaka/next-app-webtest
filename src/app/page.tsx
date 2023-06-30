import Link from 'next/link';
import Login from '../components/Login';
import { TestButton } from '@/components/TestButton';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api', {
    cache: 'no-store',
  });
  const users = await response.json();
  console.log('users', users);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="font-bold">Home</h1>
      <Login />
      <Link href="/menu">
        <button className=" rounded-lg bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">
          ログイン
        </button>
      </Link>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <TestButton />
    </div>
  );
}
