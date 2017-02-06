var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var NotesSchema = new Schema({
	match_id : { type: Number, index: { unique: true, dropDups: true } },
	notes : String
});

var User = mongoose.model('Notes', NotesSchema);
mongoose.connect( process.env.MONGO_URI );