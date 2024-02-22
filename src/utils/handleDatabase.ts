
import { db } from './db'

export async function getData() {
  const data = await db.query('SELECT * FROM names')
  return data.rows
}
