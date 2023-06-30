import axios from 'axios';
import { NextResponse } from 'next/server';


export async function GET() {
  const response = await fetch('http://localhost:8000/user')
  const data = await response.json()
  return NextResponse.json(data)
    // .then((response) => {
    //   console.log('response.data', response.data);
    //   return response.data;
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
}
