import mongoose from 'mongoose';
const { Schema } = mongoose;
const ideaSchema = new Schema(
    {
    title:{
        type:String,
        require : true
    },
   student: { type: Schema.Types.ObjectId, ref: 'User' },
    ideaFeedback:String,
    ideaType:String,
    ideaStatus:String,
    ideaDescription:String
    
}
    );
    const  Idea = mongoose.model("Idea",ideaSchema)
    export default Idea