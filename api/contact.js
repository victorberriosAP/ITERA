export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {

    const response = await fetch(
      `https://formsubmit.co/ajax/${process.env.FORM_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          nombre: req.body.nombre,
          email: req.body.email,
          mensaje: req.body.mensaje,
          _subject: "Nuevo mensaje desde ITERA"
        })
      }
    );

    if (!response.ok) {
      return res.status(500).json({
        error: "No se pudo enviar el mensaje"
      });
    }

    return res.status(200).json({
      success: true
    });

  } catch (error) {

    return res.status(500).json({
      error: "Error al enviar el mensaje"
    });

  }

}