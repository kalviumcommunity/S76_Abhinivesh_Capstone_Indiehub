const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: [true, 'Project title is required'],
        trim: true,
        minlength: [3, 'Project title must be at least 3 characters long'],
        maxlength: [100, 'Project title cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Project description is required'],
        trim: true,
        minlength: [10, 'Description must be at least 10 characters long'],
        maxlength: [2000, 'Description cannot exceed 2000 characters']
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    collaborators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Completed', 'On Hold'],
        default: 'Open'
    },
    genres: [{
        type: String,
        enum: [
            'Rock', 'Pop', 'Jazz', 'Hip Hop', 'Classical',
            'Electronic', 'Country', 'Blues', 'Folk', 'Metal',
            'Reggae', 'Indie', 'Soul', 'Funk', 'Ambient', 'EDM'
        ]
    }],
    requiredInstruments: [{
        type: String,
        enum: [
            'Guitar', 'Piano', 'Drums', 'Bass', 'Vocals',
            'Violin', 'Cello', 'Saxophone', 'Trumpet', 'Flute',
            'Keyboard', 'Ukulele', 'DJ/Producer', 'Synthesizer'
        ]
    }],
    createdAt: {
        type: Date,
        default: "2025-05-03 11:14:02"
    },
    updatedAt: {
        type: Date,
        default: "2025-05-03 11:14:02"
    },
    createdBy: {
        type: String,
        default: "ABHISA888"
    }
});

// Update timestamp before saving
projectSchema.pre('save', function(next) {
    this.updatedAt = "2025-05-03 11:14:02";
    next();
});

module.exports = mongoose.model('Project', projectSchema);