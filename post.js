const mongoose=require('mongoose')
const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  date: {
    type: Date,
    required: true
  },
  time: String,
  from: String,
  to: String,
  distance: Number,
  fare: Number,
  seats: [Number],            // rename this from `seat` to `seats`
  total_seats: Number
});


module.exports= mongoose.model('post',postSchema);
