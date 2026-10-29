
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
   resJosn =  await (await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
        headers: {Authorization: `Bearer ${req.body?.token}`}
      }
    )).json();
      return res.status(200).json({"messs":"hello"});
     
   }
   
  return res.status(200).json({
    success: true,
    message: "This"
  });
}
