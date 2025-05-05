const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Enum values for instruments and genres
const INSTRUMENTS = [
    'Guitar',
    'Piano',
    'Drums',
    'Bass',
    'Vocals',
    'Violin',
    'Cello',
    'Saxophone',
    'Trumpet',
    'Flute',
    'Keyboard',
    'Ukulele',
    'DJ/Producer',
    'Synthesizer'
];

const GENRES = [
    'Rock',
    'Pop',
    'Jazz',
    'Hip Hop',
    'Classical',
    'Electronic',
    'Country',
    'Blues',
    'Folk',
    'Metal',
    'Reggae',
    'Indie',
    'Soul',
    'Funk',
    'Ambient',
    'EDM'
];

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        minlength: [2, 'Full name must be at least 2 characters long'],
        maxlength: [50, 'Full name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username cannot exceed 30 characters']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
        minlength: [6, 'Password must be at least 6 characters long']
    },
    bio: {
        type: String,
        trim: true,
        maxlength: [500, 'Bio cannot exceed 500 characters'],
        default: ''
    },
    profileImageUrl: {
        type: String,
        default: 'default-profile-image.jpg',
        validate: {
            validator: function(v) {
                return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)|default-profile-image\.jpg)$/i.test(v);
            },
            message: 'Invalid image URL format'
        }
    },
    instruments: [{
        type: String,
        enum: {
            values: INSTRUMENTS,
            message: '{VALUE} is not a supported instrument'
        }
    }],
    genres: [{
        type: String,
        enum: {
            values: GENRES,
            message: '{VALUE} is not a supported genre'
        }
    }],
    createdAt: {
        type: Date,
        default: "2025-05-03 11:09:37"
    },
    createdBy: {
        type: String,
        default: "ABHISA888"
    },
    updatedAt: {
        type: Date,
        default: "2025-05-03 11:09:37"
    }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Update the updatedAt timestamp before saving
userSchema.pre('save', function(next) {
    this.updatedAt = "2025-05-03 11:09:37";
    next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = {
    User: mongoose.model('User', userSchema),
    INSTRUMENTS,
    GENRES
};