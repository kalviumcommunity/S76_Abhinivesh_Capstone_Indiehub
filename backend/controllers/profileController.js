const { User } = require('../models/ProfileSchema');

// Get user profile by ID
exports.getUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;

        // Authorization check
        if (!req.user._id.equals(userId) && !req.user.isAdmin) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view this profile'
            });
        }

        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;

        // Authorization check
        if (!req.user._id.equals(userId) && !req.user.isAdmin) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to update this profile'
            });
        }

        const { fullName, bio, profileImageUrl, instruments, genres } = req.body;

        const updatedFields = {};
        if (fullName) updatedFields.fullName = fullName;
        if (bio) updatedFields.bio = bio;
        if (profileImageUrl) updatedFields.profileImageUrl = profileImageUrl;
        if (instruments) updatedFields.instruments = instruments;
        if (genres) updatedFields.genres = genres;

        updatedFields.updatedAt = new Date();

        const user = await User.findByIdAndUpdate(userId, updatedFields, {
            new: true,
            runValidators: true,
            context: 'query'
        }).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Delete user profile
exports.deleteUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;

        // Authorization check
        if (!req.user._id.equals(userId) && !req.user.isAdmin) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to delete this profile'
            });
        }

        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User profile deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
