// User
{
  _id : ObjectId,
  balance : Number,
  name : {
    first : String,
    last : String
  },
  email : String,
  phone : String,
  address : String,
  registered : Date,
  gameplayed : Number,
  gamewon : Number,
  optIn : Boolean // Notification
}

// Game
{
  _id : ObjectId,
  results : {
    teamB : Number,
    teamA : Number
  },
  mom : playerID,
  players : [ Listof(playerID) ],
  date : Date,
  location : String
}

// Fees
{
    playFees : Number,
    lateFees : Number,
    cancelationFees : Number
}

