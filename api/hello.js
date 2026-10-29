
export default function handler(req, res) {
  return res.status(200).json({
    success: true,
    message: "Hello! My API is working."
  });
}
