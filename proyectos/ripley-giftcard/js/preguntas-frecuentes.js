const faqs = [
    {
      id: "pregunta1",
      pregunta: "¿Dónde puedo cotizar Gift cards Ripley?",
      respuesta: "Para cotizar Gift cards Ripley, puedes contactarnos a través del correo electrónico <a href='mailto:ventaempresa@ripley.com'>ventaempresa@ripley.com</a>.",
    },
    {
      id: "pregunta2",
      pregunta: "¿Cuáles son los plazos de entrega de las Gift cards?",
      respuesta: "Los plazos de entrega para Gift card digitales son de 2 días hábiles, para Gift card físicas son de 3 a 4 días hábiles en la Región Metropolitana y de 5 a 7 días hábiles en otras regiones. No hay costos asociados a ninguna de las opciones.",
    },
    {
      id: "pregunta3",
      pregunta: "¿Cómo utilizar mi Gift card en compras en Ripley.com?",
      respuesta: "Para usar tu Gift card en Ripley.com, inicia sesión en Ripley.com, agrega los productos deseados al carrito, selecciona la Gift card como método de pago, ingresa los 20 dígitos y la clave de la Gift card, y sigue las instrucciones para cambiar la clave por seguridad.",
    },
    {
      id: "pregunta4",
      pregunta: "¿Dónde puedo canjear mi Gift card Ripley?",
      respuesta: "Las Gift card Ripley se pueden canjear en nuestras 45 tiendas Ripley desde Arica a Punta Arenas y en Ripley.com.",
    },
    {
      id: "pregunta5",
      pregunta: "¿Cuál es la vigencia de las Gift cards Ripley?",
      respuesta: "Las Gift card Ripley generalmente tienen una vigencia de 12 meses, aunque esto puede ser adaptado según las solicitudes de cada empresa.",
    },
    {
      id: "pregunta6",
      pregunta: "En caso de que se bloquee la Gift card, ¿con quién me comunico?",
      respuesta: "Si tu Gift card Ripley se bloquea, contacta a nuestro servicio de atención al cliente a través del correo electrónico <a href='mailto:ventaempresa@ripley.com'>ventaempresa@ripley.com</a>. o ingresa a <a target='_blank' href='https://ripley.zendesk.com/hc/es-419'>Aquí</a>.",
    },
    {
      id: "pregunta7",
      pregunta: "¿En qué formato están disponibles las Gift cards?",
      respuesta: "Las Gift cards Ripley están disponibles en formato físico y digital (PDF).",
    },
    {
      id: "pregunta8",
      pregunta: "¿Cómo puedo verificar el saldo de mi Gift card Ripley?",
      respuesta: "Puedes verificar el saldo de tu Gift card en Ripley.com o solicitando el monto en la caja de nuestras tiendas físicas. En Ripley.com, ingresa a " + '"Mi cuenta"' + ", selecciona " + '"Saldo"' + " e ingresa los datos de la Gift card.",
    },
    {
      id: "pregunta9",
      pregunta: "¿Qué documento de venta se entrega al comprar Gift cards Ripley?",
      respuesta: "Ofrecemos dos opciones de documento de compra nota de venta (que permite canje de productos de Marketplace) y factura afecta (que no permite canje de productos Marketplace).",
    },
    {
      id: "pregunta10",
      pregunta: "¿Se puede comprar cualquier producto de Ripley con mi Gift card?",
      respuesta: "Dependiendo de las restricciones de la Gift card, podrás comprar todos los productos en Ripley.com y en las tiendas físicas Ripley. Si hay restricciones, consulta los detalles específicos para saber qué productos están excluidos.",
    },
    {
      id: "pregunta11",
      pregunta: "¿Qué debo hacer si la Gift card es robada o extraviada?",
      respuesta: "Si tu Gift card Ripley es robada o extraviada, contacta a <a href='mailto:ventaempresa@ripley.com'>ventaempresa@ripley.com</a> para reportar la situación.",
    },
    {
      id: "pregunta12",
      pregunta: "¿Puedo personalizar el diseño de las Gift card?",
      respuesta: "Ofrecemos opciones de personalización en el diseño de las Gift card digitales y también físicas.",
    },
    {
      id: "pregunta13",
      pregunta: "¿Es posible realizar más de una compra con una Gift card?",
      respuesta: "Sí, es posible realizar múltiples compras con una Gift card de Ripley. Tras cada transacción, el saldo restante se actualiza automáticamente y se puede consultar en Ripley.com o en nuestras tiendas físicas, permitiendo su uso varias veces hasta agotar el saldo total.",
    },
    {
      id: "pregunta14",
      pregunta: "¿Ripley ofrece la posibilidad de emitir Gift cards nominativas (a nombre de una persona específica) y/o al portador?",
      respuesta: "Ripley ofrece tanto Gift cards nominativas como al portador. Las nominativas están asociadas a una persona específica, mientras que las al portador pueden ser usadas por cualquier persona y transferidas.",
    },
];

const container = document.querySelector('.cards-faq');

// Crear 3 columnas
const columns = [];
for (let i = 0; i < 3; i++) {
  const col = document.createElement('div');
  col.className = 'col-md-4 col-12';
  columns.push(col);
  container.appendChild(col);
}

// Agregar las tarjetas alternadamente en las columnas
faqs.forEach((faq, index) => {
  const card = document.createElement('div');
  card.className = 'collapse-card mb-3';

  card.innerHTML = `
    <div class="collapse-card_btn"
         data-bs-toggle="collapse"
         data-bs-target="#${faq.id}"
         aria-expanded="false"
         aria-controls="${faq.id}">
      ${faq.pregunta}
    </div>
    <div class="collapse multi-collapse collapse-card_content" id="${faq.id}">
      <p>${faq.respuesta}</p>
    </div>
  `;

  // Insertar la tarjeta en la columna correspondiente (repartido de forma equitativa)
  const columnIndex = index % 3; // 0, 1, 2, 0, 1, 2, etc.
  columns[columnIndex].appendChild(card);
});
