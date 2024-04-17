import mongoose,{Schema} from "mongoose";

const subscriptonSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //one who is subscribing
        ref: "User"
    },

    channel: {
        type: Schema.Types.ObjectId, // one whome 'Subscriber' to subscribing
        ref: "User"
    }
}, {timestamps: true})


export const Subscription = mongoose.model("Subscription", subscriptonSchema)