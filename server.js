require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: '*', // Allow all origins for development
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// MongoDB Connection
mongoose.connect('mongodb+srv://abhikaman24:iuHnXsBSMwOvjU2H@nayiumeed.hjzf8ah.mongodb.net/?retryWrites=true&w=majority&appName=NayiUmeed', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

// Report Schema (ZindagiAlert)
const reportSchema = new mongoose.Schema({
    image: String,
    location: {
        address: String,
        coordinates: {
            lat: Number,
            lng: Number
        }
    },
    condition: String,
    description: String,
    status: {
        type: String,
        enum: ['pending', 'in_progress', 'resolved'],
        default: 'pending'
    },
    time: {
        type: Date,
        default: Date.now
    }
});

const Report = mongoose.model('Report', reportSchema);

// File Upload Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Basic Authentication Middleware
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Authentication required' });
    }

    const [type, credentials] = authHeader.split(' ');
    if (type !== 'Basic') {
        return res.status(401).json({ error: 'Invalid authentication type' });
    }

    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
    if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    next();
};

// Routes
app.post('/api/reports', async (req, res) => {
    try {
        const { image, location, address, condition, description } = req.body;
        
        // Convert base64 image to file if provided
        let imagePath = null;
        if (image) {
            const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const filename = `${Date.now()}.jpg`;
            const filepath = path.join(__dirname, 'public', 'uploads', filename);
            require('fs').writeFileSync(filepath, buffer);
            imagePath = `/uploads/${filename}`;
        }

        // Format location to match schema
        const formattedLocation = {
            address: address || 'Unknown Location',
            coordinates: {
                lat: location?.latitude || 0,
                lng: location?.longitude || 0
            }
        };

        const report = new Report({
            image: imagePath,
            location: formattedLocation,
            condition,
            description,
            status: 'pending'
        });
        
        await report.save();
        res.status(201).json(report);
    } catch (error) {
        console.error('Error creating report:', error);
        res.status(500).json({ error: 'Failed to create report' });
    }
});

// Get all reports (protected route)
app.get('/api/reports', authenticate, async (req, res) => {
    try {
        const { status, condition, date } = req.query;
        let query = {};

        if (status && status !== 'all') {
            query.status = status;
        }

        if (condition && condition !== 'all') {
            query.condition = condition;
        }

        if (date && date !== 'all') {
            const now = new Date();
            let startDate;

            switch (date) {
                case 'today':
                    startDate = new Date(now.setHours(0, 0, 0, 0));
                    break;
                case 'week':
                    startDate = new Date(now.setDate(now.getDate() - 7));
                    break;
                case 'month':
                    startDate = new Date(now.setMonth(now.getMonth() - 1));
                    break;
            }

            query.time = { $gte: startDate };
        }

        const reports = await Report.find(query).sort({ time: -1 });
        res.json(reports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ error: 'Failed to fetch reports' });
    }
});

// Update report status (protected route)
app.put('/api/reports/:id/status', authenticate, async (req, res) => {
    try {
        const { status } = req.body;
        const report = await Report.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.json(report);
    } catch (error) {
        console.error('Error updating report status:', error);
        res.status(500).json({ error: 'Failed to update report status' });
    }
});

// User Schema (Recruiter Portal)
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    contact: String,
    password: String,
    role: { type: String, default: 'recruiter' },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/signup', async (req, res) => {
    try {
        console.log('Signup request received:', req.body);
        
        const { name, email, contact, password } = req.body;

        // Validate required fields
        if (!name || !email || !contact || !password) {
            console.log('Missing required fields');
            return res.status(400).json({ 
                message: 'All fields are required',
                missingFields: {
                    name: !name,
                    email: !email,
                    contact: !contact,
                    password: !password
                }
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log('Invalid email format:', email);
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('Email already registered:', email);
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create new user
        const user = new User({
            name,
            email,
            contact,
            password,
            role: 'recruiter'
        });

        await user.save();
        console.log('User registered successfully:', email);
        res.status(201).json({ 
            message: 'User registered successfully',
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Signup error details:', error);
        res.status(500).json({ 
            message: 'Error registering user',
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

app.post('/api/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Sign in successful', user: { name: user.name, email: user.email } });
    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ message: 'Error signing in' });
    }
});

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 