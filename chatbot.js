// Chatbot responses
const chatbotResponses = {
    // Greetings
    "hi": "Hello! Welcome to NayiUmeed. How can I help you today?",
    "hello": "Hi there! I'm here to help you with any questions about NayiUmeed.",
    "hey": "Hey! How can I assist you with NayiUmeed's services?",

    // About NayiUmeed
    "what is nayiumeed": "NayiUmeed is a platform dedicated to empowering individuals through skill development, job opportunities, and support services. We help people transform their lives through various programs and features.",
    "about nayiumeed": "NayiUmeed is a comprehensive platform offering multiple services including skill training, job placement, health support, and career guidance. Our mission is to uplift those in need through technology and community support.",
    "mission": "Our mission is to uplift those we often ignore, using the power of tech, community, and compassion to create meaningful change in people's lives.",

    // Features
    "features": "NayiUmeed offers several key features:\n1. ZindagiAlert - Health and emergency support\n2. AwazResume - Voice-based resume creation\n3. UmeedConnect - Toll-free assistance line\n4. KaushalTracker - AI skill analyzer\n5. JeevanPath - Career guidance\n6. RozgarHub - Job opportunities\n7. KaamKiPehchaan - Professional networking\n8. KaushalShakti - Skill training",
    "what features do you offer": "We offer multiple features including emergency support, skill training, job placement, and career guidance. Would you like to know more about any specific feature?",
    "services": "Our services include skill development, job placement, health support, career counseling, and professional networking. Each service is designed to help individuals improve their lives.",

    // ZindagiAlert
    "what is zindagialert": "ZindagiAlert is our emergency response system that helps report and address health emergencies and basic needs of people in distress. It connects those in need with immediate support.",
    "how to use zindagialert": "You can use ZindagiAlert by downloading our app or calling our toll-free number. Simply report the situation, and our team will respond promptly.",
    "emergency support": "For emergency support, you can use ZindagiAlert through our app or call our toll-free number 1800-123-4567. Our team is available 24/7.",

    // AwazResume
    "what is awazresume": "AwazResume is our voice-based resume creation tool that helps you create professional profiles by simply speaking about your skills and experience.",
    "how to create resume": "To create a resume using AwazResume, simply speak about your skills and experience. Our AI will convert your voice into a professional resume format.",
    "voice resume": "AwazResume allows you to create resumes through voice commands, making it accessible for everyone, regardless of literacy level.",

    // UmeedConnect
    "what is umeedconnect": "UmeedConnect is our toll-free assistance line (1800-123-4567) that provides support, guidance, and information about our services.",
    "support number": "You can reach our support team at 1800-123-4567. We're available 24/7 to assist you.",
    "how to contact": "You can contact us through UmeedConnect at 1800-123-4567 or email us at support@nayiumeed.org.",

    // KaushalTracker
    "what is kaushaltracker": "KaushalTracker is our AI-powered skill analyzer that helps identify your natural talents and suggests suitable career paths.",
    "skill analysis": "KaushalTracker analyzes your skills and experiences to recommend the best career paths and training programs for you.",
    "how to check skills": "You can use KaushalTracker through our app or website. It will analyze your skills and suggest suitable career options.",

    // JeevanPath
    "what is jeevanpath": "JeevanPath is our career guidance system that helps create personalized career roadmaps based on your skills and goals.",
    "career guidance": "JeevanPath provides personalized career planning, showing you the steps needed to achieve your professional goals.",
    "how to plan career": "JeevanPath helps you plan your career by analyzing your skills and suggesting the best path forward.",

    // RozgarHub
    "what is rozgarhub": "RozgarHub is our job placement platform that connects skilled workers with employment opportunities.",
    "how to find jobs": "You can find jobs through RozgarHub by creating a profile and browsing available opportunities that match your skills.",
    "job opportunities": "RozgarHub offers various job opportunities across different sectors. Create a profile to start exploring.",

    // KaamKiPehchaan
    "what is kaamkipehchaan": "KaamKiPehchaan is our professional networking platform, similar to LinkedIn, designed specifically for skilled workers.",
    "professional network": "KaamKiPehchaan helps you build a professional network, connect with others in your field, and showcase your work.",
    "how to network": "Join KaamKiPehchaan to connect with professionals, share your work, and learn from others' experiences.",

    // KaushalShakti
    "what is kaushalshakti": "KaushalShakti is our skill training program offering courses in various fields like construction, cooking, and driving.",
    "training programs": "KaushalShakti offers training in multiple skills including construction, professional cooking, and commercial driving.",
    "how to learn skills": "You can enroll in KaushalShakti's training programs through our website or app. Courses are available in multiple languages.",

    // Registration and Joining
    "how to join": "You can join NayiUmeed by registering on our website or downloading our app. Click the 'Register' button to get started.",
    "registration": "To register, visit our website and click the 'Register' button. You'll need to provide basic information to create your account.",
    "become member": "To become a member, simply register on our platform. You'll get access to all our services and features.",

    // Training Details
    "training duration": "Training duration varies by course. Construction training is 4 weeks, cooking is 6 weeks, and driving is 8 weeks.",
    "training cost": "Our training programs are subsidized through government schemes. Contact us to learn about available financial support.",
    "training languages": "All our training programs are available in English, Hindi, and Kannada.",

    // Certification
    "certification": "We provide government-approved certificates upon successful completion of our training programs.",
    "valid certificate": "Our certificates are recognized across India and can help you secure better job opportunities.",
    "how to get certificate": "Complete any of our training programs successfully to receive a government-approved certificate.",

    // Support and Help
    "help": "I'm here to help! You can ask me about our services, features, or any specific program you're interested in.",
    "support": "For support, you can call our toll-free number 1800-123-4567 or email support@nayiumeed.org.",
    "contact": "You can contact us at:\nPhone: 1800-123-4567\nEmail: support@nayiumeed.org",

    // Location and Centers
    "where are you located": "We operate across India with multiple training centers and support locations. Contact us to find the nearest center to you.",
    "training centers": "We have training centers in multiple cities across India. Contact us to find the nearest one to your location.",
    "nearest center": "To find the nearest training center, please contact our support team at 1800-123-4567.",

    // Additional Training Questions
    "construction training": "Our construction training program covers:\n- Basic construction techniques\n- Safety protocols\n- Tool handling\n- Material knowledge\n- Project management basics\nDuration: 4 weeks\nLanguages: English, Hindi, Kannada\nCertification: Government approved",
    
    "cooking training": "Our professional cooking program includes:\n- Culinary techniques\n- Kitchen safety\n- Food hygiene\n- Menu planning\n- Restaurant operations\nDuration: 6 weeks\nLanguages: English, Hindi, Kannada\nCertification: Government approved",
    
    "driving training": "Our commercial driving program covers:\n- Vehicle operation\n- Traffic rules\n- Safety protocols\n- Vehicle maintenance\n- Documentation\nDuration: 8 weeks\nLanguages: English, Hindi, Kannada\nCertification: Government approved",

    // Course Specific Questions
    "construction tools": "In our construction training, you'll learn to use:\n- Basic hand tools\n- Power tools\n- Measuring instruments\n- Safety equipment\nAll tools are provided during training.",

    "cooking equipment": "Our cooking program provides access to:\n- Professional kitchen equipment\n- Industry-standard appliances\n- Quality cookware\n- Safety gear\nAll equipment is available in our training centers.",

    "driving vehicles": "Our driving program includes training on:\n- Light commercial vehicles\n- Heavy commercial vehicles\n- Passenger vehicles\nAll vehicles are well-maintained and safety-certified.",

    // Financial Questions
    "financial aid": "We offer various financial support options:\n1. Government subsidies\n2. Scholarship programs\n3. Easy EMI options\n4. Partner NGO support\nContact our support team for details.",

    "scholarship": "Our scholarship programs are based on:\n- Financial need\n- Academic background\n- Career goals\nApply through our website or contact support.",

    "payment options": "We accept:\n1. Online payment\n2. Bank transfer\n3. EMI options\n4. Government scheme vouchers\nFlexible payment plans available.",

    // Career Support
    "job guarantee": "While we don't guarantee job placement, we provide:\n1. Industry connections\n2. Interview preparation\n3. Resume building\n4. Job fair participation\n5. Alumni network access",

    "career growth": "Our programs support career growth through:\n1. Industry-recognized certification\n2. Practical skills development\n3. Professional networking\n4. Continuous learning opportunities\n5. Alumni success stories",

    "salary expectations": "Salary ranges vary by industry and location. Our graduates typically see:\n- Construction: ₹15,000-30,000/month\n- Professional Cooking: ₹20,000-40,000/month\n- Commercial Driving: ₹18,000-35,000/month",

    // Learning Support
    "study material": "We provide comprehensive learning materials:\n1. Digital course content\n2. Practice worksheets\n3. Video tutorials\n4. Mobile learning app\n5. Multilingual resources",

    "practical training": "Our practical training includes:\n1. Hands-on workshops\n2. Real-world projects\n3. Industry visits\n4. Simulated work environments\n5. Safety training",

    "assessment method": "We assess progress through:\n1. Regular practical tests\n2. Theory examinations\n3. Project work\n4. Attendance\n5. Final certification exam",

    // Post-Training Support
    "alumni network": "Our alumni network offers:\n1. Job referrals\n2. Networking events\n3. Skill upgradation\n4. Success story sharing\n5. Mentorship opportunities",

    "career counseling": "We provide ongoing career counseling:\n1. One-on-one guidance\n2. Industry insights\n3. Growth planning\n4. Skill assessment\n5. Market trends analysis",

    "skill upgrade": "After certification, you can:\n1. Join advanced courses\n2. Attend workshops\n3. Access online resources\n4. Join specialization programs\n5. Participate in skill competitions",

    // Eligibility Questions
    "eligibility": "Basic eligibility criteria for our courses:\n1. Age: 18-45 years\n2. Basic literacy\n3. Physical fitness (as per course requirements)\n4. Valid ID proof\nSpecific requirements vary by course.",

    "construction eligibility": "For construction training:\n- Age: 18-45 years\n- Physical fitness\n- Basic numeracy\n- No prior experience needed\nWe welcome both men and women.",

    "cooking eligibility": "For professional cooking:\n- Age: 18-45 years\n- Basic hygiene knowledge\n- No health issues\n- Basic reading ability\nPrior cooking experience is not required.",

    "driving eligibility": "For commercial driving:\n- Age: 18-45 years\n- Valid learner's license\n- Medical fitness certificate\n- Basic reading ability\nMust pass initial screening test.",

    // Admission Process
    "how to apply": "Application process:\n1. Fill online form\n2. Submit documents\n3. Eligibility check\n4. Counseling session\n5. Batch allocation\nThe process takes 3-5 working days.",

    "required documents": "Documents needed:\n1. ID proof (Aadhaar/PAN)\n2. Address proof\n3. Educational certificates\n4. Income proof (if applying for financial aid)\n5. Recent photographs",

    "admission process": "Steps to join:\n1. Online/offline application\n2. Document verification\n3. Counseling session\n4. Course selection\n5. Fee payment\n6. Batch assignment",

    // Course Schedule
    "batch timings": "We offer flexible batch timings:\n1. Morning: 7 AM - 11 AM\n2. Afternoon: 12 PM - 4 PM\n3. Evening: 5 PM - 9 PM\nChoose as per your convenience.",

    "weekend batches": "Weekend batches available:\n- Saturday: Full day\n- Sunday: Half day\nDuration will be adjusted accordingly.",

    "course schedule": "Regular batch schedule:\n- Theory: 2 hours/day\n- Practical: 3 hours/day\n- Assignments: 1 hour/day\nTotal: 6 hours daily training",

    // Course Flexibility
    "attendance policy": "Our attendance policy:\n1. Minimum 80% attendance required\n2. Leave application process\n3. Make-up classes available\n4. Flexible timing options\n5. Emergency absence support",

    "course transfer": "Course transfer options:\n1. Within first week\n2. Subject to availability\n3. One-time transfer only\n4. Additional fees may apply\nContact support for details.",

    "batch change": "Batch change possible:\n1. With valid reason\n2. Subject to availability\n3. Maximum twice per course\n4. Prior notice required\nApply through student portal.",

    // Additional Support
    "transportation": "Transportation support:\n1. Pick-up/drop facility\n2. Route information\n3. Transport allowance\n4. Safe travel assurance\nAvailable in select locations.",

    "accommodation": "Accommodation options:\n1. Hostel facilities\n2. PG arrangements\n3. Partner lodges\n4. Monthly rentals\nAvailable near training centers.",

    "food facilities": "Food arrangements:\n1. Subsidized canteen\n2. Meal packages\n3. Hygienic facilities\n4. Special diet options\nAvailable at main centers.",

    // Success Stories
    "success stories": "Our success stories include:\n1. Ramesh: From daily wage worker to site supervisor\n2. Priya: Now head chef at a star hotel\n3. Suresh: Owns a transport fleet\nRead more on our website.",

    "construction success": "Construction success stories:\n- Ramesh: Site supervisor at L&T\n- Lakshmi: Quality inspector\n- Ahmed: Project coordinator\nAverage salary growth: 100%",

    "cooking success": "Cooking success stories:\n- Priya: Head chef at Taj\n- Kumar: Restaurant owner\n- Fatima: Catering business\nAverage salary growth: 150%",

    "driving success": "Driving success stories:\n- Suresh: Fleet owner\n- Rajesh: Corporate driver\n- Mary: Logistics manager\nAverage salary growth: 120%",

    // Placement Statistics
    "placement stats": "Our placement statistics:\n- Overall placement rate: 85%\n- Average salary: ₹20,000/month\n- Career growth rate: 40% yearly\n- Industry retention: 90%",

    "construction placement": "Construction placement data:\n- Placement rate: 90%\n- Starting salary: ₹15,000-20,000\n- Top recruiters: L&T, Shapoorji\n- Growth potential: Supervisor",

    "cooking placement": "Cooking placement statistics:\n- Placement rate: 85%\n- Starting salary: ₹18,000-25,000\n- Top recruiters: Taj, ITC\n- Growth potential: Head Chef",

    "driving placement": "Driving placement details:\n- Placement rate: 80%\n- Starting salary: ₹16,000-22,000\n- Top recruiters: Uber, Logistics\n- Growth potential: Fleet Manager",

    // Industry Partnerships
    "industry partners": "Our industry partners include:\n1. Construction: L&T, Shapoorji\n2. Hospitality: Taj, ITC\n3. Transport: Uber, logistics companies\nRegular industry interactions.",

    "construction partners": "Construction industry partners:\n- L&T Construction\n- Shapoorji Pallonji\n- TATA Projects\n- Local builders\nRegular site visits arranged.",

    "cooking partners": "Hospitality industry partners:\n- Taj Group\n- ITC Hotels\n- Marriott\n- Local restaurants\nInternship opportunities available.",

    "driving partners": "Transport industry partners:\n- Uber India\n- Transport companies\n- Logistics firms\n- Corporate fleet\nDirect recruitment drives.",

    // Industry Recognition
    "industry recognition": "Our programs are recognized by:\n1. Construction Industry Development Council\n2. Hotel Management Federation\n3. All India Transport Council\nGovernment approved certification.",

    "testimonials": "Industry testimonials:\n- 'Best skilled workers' - L&T\n- 'Well-trained staff' - Taj\n- 'Professional drivers' - Uber\nRead more on our website.",

    "employer feedback": "Employer feedback highlights:\n1. Strong practical skills\n2. Professional attitude\n3. Safety consciousness\n4. Quick learners\n5. Good work ethics",

    // Comprehensive Feature Questions
    "explain all features": "Here's a detailed overview of all NayiUmeed features:\n\n1. ZindagiAlert:\n- 24/7 emergency support system\n- Health emergency reporting\n- Basic needs assistance\n- Toll-free helpline\n\n2. AwazResume:\n- Voice-based resume creation\n- Multi-language support\n- Professional formatting\n- Easy updating\n\n3. UmeedConnect:\n- 24/7 toll-free assistance\n- Multi-language support\n- Guidance and information\n- Quick response team\n\n4. KaushalTracker:\n- AI-powered skill analysis\n- Career path suggestions\n- Strength identification\n- Progress tracking\n\n5. JeevanPath:\n- Personalized career roadmap\n- Goal setting assistance\n- Progress monitoring\n- Expert guidance\n\n6. RozgarHub:\n- Job matching system\n- Direct employer connect\n- Interview preparation\n- Placement support\n\n7. KaamKiPehchaan:\n- Professional networking\n- Work portfolio\n- Industry connections\n- Skill showcase\n\n8. KaushalShakti:\n- Skill development programs\n- Practical training\n- Industry certification\n- Multi-language courses",

    "how do features work together": "NayiUmeed's features work together to provide complete support:\n\n1. Initial Contact:\n- ZindagiAlert for emergencies\n- UmeedConnect for general inquiries\n\n2. Skill Development:\n- KaushalTracker analyzes your abilities\n- JeevanPath creates your career plan\n- KaushalShakti provides training\n\n3. Career Building:\n- AwazResume creates your profile\n- KaamKiPehchaan builds your network\n- RozgarHub finds job opportunities\n\nThis integrated approach ensures:\n- Seamless support at every step\n- Continuous growth opportunities\n- Maximum career potential\n- Long-term success",

    // Default response
    "default": "I'm not sure I understand. Could you please rephrase your question? You can ask me about our features, services, or any specific program."
};

// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chatbot-container');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Check for specific keywords in the message
        for (const [key, response] of Object.entries(chatbotResponses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        
        return chatbotResponses.default;
    }

    function handleUserInput() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            const botResponse = getBotResponse(message);
            setTimeout(() => {
                addMessage(botResponse);
            }, 500);
            userInput.value = '';
        }
    }

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // Add welcome message
    setTimeout(() => {
        addMessage("Hello! I'm your NayiUmeed assistant. How can I help you today?");
    }, 500);
}); 