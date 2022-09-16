// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { 
      id:0,
      title: "Diego", 
      price:100,
      img:"http://localhost:3000/img/octocat.webp",
      description:"prueba de conexión"
    },
  ])
}
