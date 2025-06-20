const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 100 
    }
});

// Виртуальное свойство для URL жанра
GenreSchema.virtual('url').get(function() {
    return '/catalog/genre/' + this._id;
});

// Экспорт модели
module.exports = mongoose.model('Genre', GenreSchema);