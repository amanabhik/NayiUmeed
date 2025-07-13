// MyMemory Translation API configuration
const MYMEMORY_API_URL = 'https://api.mymemory.translated.net/get';

// Function to translate text using LibreTranslate API
async function translateText(text) {
    try {
        // First try to translate using the API
        const apiTranslation = await translateUsingAPI(text);
        if (apiTranslation) {
            return apiTranslation;
        }
    } catch (error) {
        console.error('API Translation error:', error);
    }
    
    // Fallback to enhanced word-by-word translation with grammar rules
    return enhancedFallbackTranslation(text);
}

async function translateUsingAPI(text) {
    try {
        const response = await fetch(`${MYMEMORY_API_URL}?q=${encodeURIComponent(text)}&langpair=hi|en`);
        
        if (!response.ok) {
            throw new Error('Translation failed');
        }

        const data = await response.json();
        
        if (data.responseStatus === 200 && data.responseData) {
            return data.responseData.translatedText;
        } else {
            throw new Error('Translation not available');
        }
    } catch (error) {
        console.error('MyMemory API error:', error);
        throw error;
    }
}

// Enhanced Hindi to English translation dictionary with grammar rules
const hindiToEnglish = {
    // Personal Information
    'नाम': 'name',
    'उम्र': 'age',
    'जन्मतिथि': 'date of birth',
    'पता': 'address',
    'ईमेल': 'email',
    'फोन': 'phone',
    'मोबाइल': 'mobile',
    'वेबसाइट': 'website',
    'लिंक्डइन': 'linkedin',

    // Common Names
    'अमन': 'Aman',
    'राहुल': 'Rahul',
    'प्रियंका': 'Priyanka',
    'अंकित': 'Ankit',
    'नीतू': 'Neetu',
    'सुमित': 'Sumit',
    'पूजा': 'Pooja',
    'राज': 'Raj',
    'सोनू': 'Sonu',
    'मोनू': 'Monu',
    'रितु': 'Ritu',
    'अनु': 'Anu',
    'अनिल': 'Anil',
    'अरुण': 'Arun',
    'अभिषेक': 'Abhishek',
    'अक्षय': 'Akshay',
    'अमित': 'Amit',
    'अनुराग': 'Anurag',
    'आकाश': 'Akash',
    'आदित्य': 'Aditya',
    'इशान': 'Ishan',
    'उमेश': 'Umesh',
    'करण': 'Karan',
    'कुणाल': 'Kunal',
    'कृष्ण': 'Krishna',
    'गौरव': 'Gaurav',
    'चंदन': 'Chandan',
    'जतिन': 'Jatin',
    'जय': 'Jay',
    'जितेंद्र': 'Jitendra',
    'दीपक': 'Deepak',
    'नितिन': 'Nitin',
    'पंकज': 'Pankaj',
    'प्रकाश': 'Prakash',
    'प्रदीप': 'Pradeep',
    'प्रशांत': 'Prashant',
    'रवि': 'Ravi',
    'रोहित': 'Rohit',
    'संजय': 'Sanjay',
    'सचिन': 'Sachin',
    'सुरेश': 'Suresh',
    'हरीश': 'Harish',

    // Common Surnames
    'शर्मा': 'Sharma',
    'वर्मा': 'Verma',
    'गुप्ता': 'Gupta',
    'मल्होत्रा': 'Malhotra',
    'सिंह': 'Singh',
    'पटेल': 'Patel',
    'मेहरा': 'Mehra',
    'जैन': 'Jain',
    'अग्रवाल': 'Agrawal',
    'चौधरी': 'Choudhary',
    'मिश्रा': 'Mishra',
    'तिवारी': 'Tiwari',
    'त्रिपाठी': 'Tripathi',
    'द्विवेदी': 'Dwivedi',
    'पांडे': 'Pandey',
    'दुबे': 'Dubey',
    'मिश्र': 'Mishra',
    'सक्सेना': 'Saxena',
    'नागर': 'Nagar',
    'बंसल': 'Bansal',

    // Conjunctions and Prepositions
    'और': 'and',
    'या': 'or',
    'लेकिन': 'but',
    'क्योंकि': 'because',
    'अगर': 'if',
    'तो': 'then',
    'जब': 'when',
    'जहां': 'where',
    'कैसे': 'how',
    'क्यों': 'why',
    'क्या': 'what',
    'कौन': 'who',
    'किसने': 'who',
    'किसको': 'whom',
    'किसका': 'whose',
    'में': 'in',
    'पर': 'on',
    'से': 'from',
    'को': 'to',
    'के': 'of',
    'का': 'of',
    'की': 'of',
    'ने': 'by',
    'तक': 'until',
    'तरफ': 'towards',
    'बिना': 'without',
    'साथ': 'with',
    'बाद': 'after',
    'पहले': 'before',
    'बीच': 'between',
    'अंदर': 'inside',
    'बाहर': 'outside',
    'ऊपर': 'above',
    'नीचे': 'below',
    'आगे': 'ahead',
    'पीछे': 'behind',
    'पास': 'near',
    'दूर': 'far',

    // Common Phrases
    'मेरा नाम है': 'My name is',
    'मैं हूं': 'I am',
    'मैं एक': 'I am a',
    'मैंने किया है': 'I have done',
    'मैंने की है': 'I have done',
    'मैं करता हूं': 'I do',
    'मैं करती हूं': 'I do',
    'मैं कर रहा हूं': 'I am doing',
    'मैं कर रही हूं': 'I am doing',
    'मैं करूंगा': 'I will do',
    'मैं करूंगी': 'I will do',
    'मैं कर चुका हूं': 'I have done',
    'मैं कर चुकी हूं': 'I have done',
    'सॉफ्टवेयर इंजीनियर': 'software engineer',
    'मेरा': 'my',
    'मेरे': 'my',
    'मैंने': 'I have',
    'मैं करता हूं': 'I do',
    'मैं करती हूं': 'I do',
    'मैं कर रहा हूं': 'I am doing',
    'मैं कर रही हूं': 'I am doing',
    'मैं करूंगा': 'I will do',
    'मैं करूंगी': 'I will do',
    'मैं कर चुका हूं': 'I have done',
    'मैं कर चुकी हूं': 'I have done',

    // Education
    'शिक्षा': 'education',
    'विद्यालय': 'school',
    'कॉलेज': 'college',
    'विश्वविद्यालय': 'university',
    'डिग्री': 'degree',
    'स्नातक': 'graduate',
    'स्नातकोत्तर': 'postgraduate',
    'डिप्लोमा': 'diploma',
    'प्रमाणपत्र': 'certificate',
    'पाठ्यक्रम': 'course',
    'विषय': 'subject',
    'प्रतिशत': 'percentage',
    'सीजीपीए': 'CGPA',
    'वर्ष': 'year',

    // Skills
    'कौशल': 'skills',
    'तकनीकी': 'technical',
    'सॉफ्टवेयर': 'software',
    'हार्डवेयर': 'hardware',
    'प्रोग्रामिंग': 'programming',
    'भाषा': 'language',
    'संचार': 'communication',
    'नेतृत्व': 'leadership',
    'टीम': 'team',
    'समस्या': 'problem',
    'समाधान': 'solution',
    'प्रबंधन': 'management',
    'योजना': 'planning',
    'संगठन': 'organization',
    'रचनात्मक': 'creative',
    'विश्लेषणात्मक': 'analytical',

    // Experience
    'अनुभव': 'experience',
    'काम': 'work',
    'नौकरी': 'job',
    'कंपनी': 'company',
    'संगठन': 'organization',
    'पद': 'position',
    'कार्य': 'work',
    'जिम्मेदारी': 'responsibility',
    'उपलब्धि': 'achievement',
    'परियोजना': 'project',
    'टीम': 'team',
    'सहयोग': 'collaboration',
    'ग्राहक': 'client',
    'सेवा': 'service',
    'उत्पाद': 'product',

    // Projects
    'प्रोजेक्ट': 'project',
    'विवरण': 'description',
    'उद्देश्य': 'objective',
    'परिणाम': 'result',
    'सफल': 'successful',
    'पूरा': 'completed',
    'विकसित': 'developed',
    'डिजाइन': 'design',
    'कार्यान्वयन': 'implementation',
    'परीक्षण': 'testing',
    'रखरखाव': 'maintenance',

    // Achievements
    'पुरस्कार': 'award',
    'मान्यता': 'recognition',
    'प्रशंसा': 'appreciation',
    'योगदान': 'contribution',
    'सफलता': 'success',
    'लक्ष्य': 'goal',
    'प्राप्त': 'received',
    'जीता': 'won',

    // Personal Qualities
    'कठिन परिश्रमी': 'hardworking',
    'समर्पित': 'dedicated',
    'अनुशासित': 'disciplined',
    'सीखने की इच्छा': 'willingness to learn',
    'रचनात्मक': 'creative',
    'विश्लेषणात्मक': 'analytical',
    'समस्या समाधान': 'problem solving',
    'टीम वर्क': 'teamwork',
    'नेतृत्व': 'leadership',
    'संचार': 'communication'
};

// Enhanced fallback translation function with grammar rules
function enhancedFallbackTranslation(text) {
    let translatedText = text;
    
    // Replace common phrases first (longer phrases first)
    const phrases = Object.entries(hindiToEnglish).sort((a, b) => b[0].length - a[0].length);
    for (const [hindi, english] of phrases) {
        if (text.includes(hindi)) {
            translatedText = translatedText.replace(new RegExp(hindi, 'g'), english);
        }
    }

    // Apply grammar rules
    translatedText = translatedText
        .replace(/\s+/g, ' ') // Remove extra spaces
        .replace(/\s+([.,!?])/g, '$1') // Fix punctuation spacing
        .replace(/([a-z])\s+([A-Z])/g, '$1. $2') // Add periods between sentences
        .replace(/\s+and\s+/g, ' and ') // Fix 'and' spacing
        .replace(/\s+or\s+/g, ' or ') // Fix 'or' spacing
        .replace(/\s+but\s+/g, ' but '); // Fix 'but' spacing

    return translatedText;
}

// Export the translate function
window.translateText = translateText; 