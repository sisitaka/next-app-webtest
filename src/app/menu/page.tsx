import Link from "next/link";

export default function Page(){
    return (
        <div>
            <h1 className="text-2xl">テストメニュー</h1>
            <Link href="/">ログインページへ</Link>
        </div>
    )
}
