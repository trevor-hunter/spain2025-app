import axios from 'axios'

export default async function handler(req, res) {
  const tag = req.query.tag
  const { CLOUD_NAME, API_KEY, API_SECRET } = process.env

  if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    return res.status(500).json({ error: 'Missing Cloudinary credentials' })
  }

  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64')

  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/tags/${tag}`,
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    )

    res.status(200).json(response.data)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Failed to fetch images' })
  }
}
