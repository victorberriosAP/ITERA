const RESEND_API_KEY = process.env.RESEND_API_KEY;

export default async function handler(req, res) {

if (req.method !== "POST") {
    return res.status(405).json({

  error: "Método no permitido"

});
}

try {
    const response = await fetch(

  "https://api.resend.com/emails",

  {

    method: "POST",

    headers: {

      "Authorization": `Bearer ${RESEND_API_KEY}`,

      "Content-Type": "application/json"

    },

    body: JSON.stringify({

      from: "ITERA <onboarding@resend.dev>",

      to: ["victor.berrios.sa@gmail.com"],

      subject: "Nuevo mensaje desde ITERA",

      reply_to: req.body.email,

      text:

        "Nombre: " + req.body.nombre + "\n\n" +

        "Correo: " + req.body.email + "\n\n" +

        "Mensaje:\n" + req.body.mensaje

    })

  }

);

const data = await response.json();

console.log("Resend:", response.status, data);

if (!response.ok) {

  return res.status(500).json({

    error: "Resend rechazó el envío"

  });

}

return res.status(200).json({

  success: true

});
} catch (error) {
    console.error("Error:", error);

return res.status(500).json({

  error: "Error al enviar el mensaje"

});
}

}