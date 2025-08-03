import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  const result = await query('select * from propiedades_alojamiento');
  return NextResponse.json(result.rows);
}