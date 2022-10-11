import mongoose, { mongo } from "mongoose";


const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  by:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
});

export const Quote=mongoose.model('Quote',quoteSchema)
