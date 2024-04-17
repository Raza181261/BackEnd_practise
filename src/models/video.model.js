import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: ture
        },
        thumbnail: {
            type: String, //cloudinary url
            required: ture
        },
        title:{
            type: String, 
            required: ture
        },
        description:{
            type: String, 
            required: ture
        },
        duration:{
            type: Number, 
            required: ture
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }


    },{
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)