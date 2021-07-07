export default async function Fetcher(url: string): Promise<Response> {
  const res = await fetch(url)

  return res.json()
}
