var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);

mongoose.connection.once('open', function () {
    console.log('Connection have been made');
});


//Declare movie schema with the given movie variables
var MoviesSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: {unique: true}
    },
    YearRelease: Number,
    genre: {type: String,
        enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Fiction'],
        required: true,
    },
    Actors: []
});

module.exports = mongoose.model('Movies', MoviesSchema);
