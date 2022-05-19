const mongoose = require("mongoose");

const petSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true
  },

  age: {
    type: String,
    // required: true
  },

  gender: String, // пол

  image: String,

  description: String, // описание

  type: String, // тут можно было бы оставить реф на определенный тип животных, чтобы у нас была на фронте возможность сортировки животных по типу(виду). для этого надо будет создать отдельную модель

  contact: Number,

  address: String,

  date: {
    type: Date,
    default: Date.now,
  },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
