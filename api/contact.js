export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {

    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        error: "Todos los campos son obligatorios"
      });
    }

    const response = await fetch(
      `https://formsubmit.co/ajax/${process.env.FORM_EMAIL}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },

        body: JSON.stringify({
          nombre: nombre,
          email: email,
          mensaje: mensaje,
          _subject: "Nuevo mensaje desde ITERA"
        })
      }
    );

    const data = await response.text();

    console.log("FormSubmit:", response.status, data);

    if (!response.ok) {
      console.error("ERROR FORMSUBMIT:", data);

      return res.status(500).json({
        error: "No se pudo enviar el mensaje"
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