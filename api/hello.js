
export default async function handler(req, res) {
   res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

   if(req.body?.name === "token"){

     
   }
   
  return res.status(200).json({
    success: true,
    message: "This"
  });
}
