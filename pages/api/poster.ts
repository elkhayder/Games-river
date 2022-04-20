// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const id = req.query["id"];

   const image = await axios.get(
      `https://vimm.net/image.php?type=box&id=${id}`,
      {
         responseType: "arraybuffer",
         headers: {
            Referer: `https://vimm.net/vault/${id}`,
         },
      }
   );

   const buffer = Buffer.from(image.data);

   res.writeHead(200, {
      "Content-Type": "image/jpeg",
      "Content-Length": buffer.length,
   }).end(buffer);
}
