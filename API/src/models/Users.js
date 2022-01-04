const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const unique = require('mongoose-unique-validator');

const UserSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'nombre is required'],
      unique: true,
    },
    apellido: {
      type: String,
      required: [true, 'apellido is required'],
      unique: true,
    },
    tipo_documento: {
        type: String,
        required: [true, 'Tipo de documento is required'],
        unique: true,
      },
    documento: {
        type: Number,
        required: [true, 'Documento is required'],
        unique: true,
      },
    celular: {
        type: Number,
        required: [true, 'celular is required'],
        unique: true,
      },
    fecha_nacimiento: {
        type: Date,
        required: [true, 'fecha de nacimiento is required'],
        unique: true,
      },
    email: {
      type: String,
      match: [/.+\@.+\..+/, 'please put a valid username format'],
      required: [true, 'email is required'],
      unique: true
    },
    archivos: {
      type: String,
      maxlength: [100, "avatar mustn't exceed 100 characters"],
    },
  },
  {
    versionKey: false,
  }
);

UserSchema.plugin(unique);
// UserSchema.path('avatar').validate((val) => {
//     const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

//     if(urlRegex.test(path));

// }, 'Invalid URL.');


module.exports = model('User', UserSchema);