const slugify = require('slugify');

// module.exports = {
//   beforeCreate(event) {
//     const { data } = event.params;
//     if (data.name) {
//       data.slug = slugify(data.name, { lower: true });
//     }
//   },
//   beforeUpdate(event) {
//     const { data } = event.params;
//     if (data.name) {
//       data.slug = slugify(data.name, { lower: true });
//     }
//   },
// };

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    // Si el código no está definido, se genera automáticamente
    if (!data.code && data.name) {
      data.code = slugify(data.name).toUpperCase();  // Convertir a mayúsculas
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    // Si el código no está definido, se genera automáticamente
    if (!data.code && data.name) {
      data.code = slugify(data.name).toUpperCase();  // Convertir a mayúsculas
    }
  },
};