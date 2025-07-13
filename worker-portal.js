// Worker Portal Data Management
const workerData = {
    profile: {
        name: '',
        contactNumber: '',
        skills: [],
        resume: null,
        applications: 0,
        interviews: 0,
        profileScore: 0
    },
    applications: [],
    notifications: []
};

// Server configuration
const SERVER_URL = 'http://localhost:3001';

// Authentication state
let currentUser = null;

// Initialize the worker portal
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        const savedWorkerData = localStorage.getItem('workerData');
        if (savedWorkerData) {
            Object.assign(workerData, JSON.parse(savedWorkerData));
            showMainContent();
        } else {
            showProfileSetup();
        }
    } else {
        showAuthModal();
    }

    // Setup authentication modal
    setupAuthModal();
});

// Setup authentication modal
function setupAuthModal() {
    const modal = document.getElementById('authModal');
    const closeBtn = modal.querySelector('.close');
    const tabs = modal.querySelectorAll('.auth-tab');
    const forms = modal.querySelectorAll('.auth-form');

    // Close modal
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    };

    // Tab switching
    tabs.forEach(tab => {
        tab.onclick = () => {
            const tabName = tab.getAttribute('data-tab');
            console.log('Switching to tab:', tabName);
            
            // Update tab styles
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Hide all forms first
            forms.forEach(form => {
                form.classList.remove('active');
                form.style.display = 'none';
                form.style.opacity = '0';
                form.style.visibility = 'hidden';
            });
            
            // Show the target form
            const targetForm = document.getElementById(`${tabName}Form`);
            if (targetForm) {
                targetForm.classList.add('active');
                targetForm.style.display = 'block';
                targetForm.style.opacity = '1';
                targetForm.style.visibility = 'visible';
                console.log('Showing form:', targetForm.id);
            }
            
            // Verify the active form
            const activeForm = document.querySelector('.auth-form.active');
            console.log('Active form after switch:', activeForm?.id);
        };
    });

    // Sign in form
    document.getElementById('signInForm').onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;

        try {
            const response = await fetch(`${SERVER_URL}/api/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                currentUser = {
                    ...data.user,
                    token: data.user.token
                };
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                modal.style.display = 'none';
                showProfileSetup();
            } else {
                alert(data.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Sign in error:', error);
            alert('Failed to sign in. Please try again.');
        }
    };

    // Sign up form
    document.getElementById('signUpForm').onsubmit = async (e) => {
        e.preventDefault();
        console.log('Sign up form submitted');
        
        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        console.log('Form data:', { email, password, confirmPassword });

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            console.log('Sending signup request to:', `${SERVER_URL}/api/signup`);
            const response = await fetch(`${SERVER_URL}/api/signup`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                console.log('Sign up successful');
                currentUser = {
                    ...data.user,
                    token: data.user.token
                };
                console.log('Current user:', currentUser);
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                modal.style.display = 'none';
                showProfileSetup();
            } else {
                console.error('Sign up failed:', data.message);
                alert(data.message || 'Failed to sign up');
            }
        } catch (error) {
            console.error('Sign up error:', error);
            alert('Failed to sign up. Please try again.');
        }
    };
}

// Show authentication modal
function showAuthModal() {
    const modal = document.getElementById('authModal');
    modal.style.display = 'block';
    document.getElementById('mainContent').classList.remove('active');
    document.getElementById('profileSetup').classList.remove('active');
    
    // Ensure sign-in form is shown by default
    const signInTab = modal.querySelector('[data-tab="signin"]');
    if (signInTab) {
        signInTab.click();
    }
}

// Show profile setup
function showProfileSetup() {
    document.getElementById('profileSetup').classList.add('active');
    document.getElementById('mainContent').classList.remove('active');

    // Setup profile form
    document.getElementById('profileSetupForm').onsubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('workerName').value.trim();
        const contactNumber = document.getElementById('contactNumber').value.trim();

        if (!name || !contactNumber) {
            alert('Please fill in all required fields');
            return;
        }

        workerData.profile.name = name;
        workerData.profile.contactNumber = contactNumber;
        saveWorkerData();

        try {
            // Check if we have a valid token
            if (!currentUser || !currentUser.token) {
                alert('Please sign in again');
                showAuthModal();
                return;
            }

            const response = await fetch(`${SERVER_URL}/api/worker/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${currentUser.token}`
                },
                body: JSON.stringify({
                    name: workerData.profile.name,
                    contactNumber: workerData.profile.contactNumber,
                    skills: workerData.profile.skills || [],
                    resume: workerData.profile.resume || null
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                showMainContent();
            } else if (response.status === 401 || response.status === 403) {
                // Token is invalid or expired
                alert('Session expired. Please sign in again.');
                showAuthModal();
            } else {
                alert(data.message || 'Failed to save profile. Please try again.');
                if (data.missingFields) {
                    console.error('Missing fields:', data.missingFields);
                }
            }
        } catch (error) {
            console.error('Profile save error:', error);
            alert('Failed to save profile. Please try again.');
        }
    };

    // Setup resume upload
    const resumeUpload = document.getElementById('resumeUpload');
    resumeUpload.onclick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf,.doc,.docx';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File size should be less than 5MB');
                    return;
                }
                workerData.profile.resume = file.name;
                saveWorkerData();
                resumeUpload.innerHTML = `
                    <i class="fas fa-file-check"></i>
                    <p>${file.name}</p>
                    <p>Click to change</p>
                `;
            }
        };
        input.click();
    };
}

// Show main content
function showMainContent() {
    document.getElementById('mainContent').classList.add('active');
    document.getElementById('profileSetup').classList.remove('active');
    updateMainContent();
}

// Update main content
function updateMainContent() {
    // Update welcome message
    document.getElementById('welcomeName').textContent = workerData.profile.name;

    // Update stats
    document.getElementById('totalApplications').textContent = workerData.profile.applications;
    document.getElementById('totalInterviews').textContent = workerData.profile.interviews;
    document.getElementById('profileScore').textContent = `${workerData.profile.profileScore}%`;

    // Update user info in navbar
    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = `
        <span class="user-name">${workerData.profile.name}</span>
        <button class="logout-btn" onclick="logout()">Logout</button>
    `;
}

// Add skill
function addSkill() {
    const input = document.getElementById('newSkill');
    const skill = input.value.trim();
    
    if (!skill) {
        alert('Please enter a skill');
        return;
    }
    
    if (workerData.profile.skills.includes(skill)) {
        alert('This skill is already added');
        return;
    }
    
    workerData.profile.skills.push(skill);
    saveWorkerData();
    updateSkillsUI();
    input.value = '';
}

// Update skills UI
function updateSkillsUI() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    
    container.innerHTML = workerData.profile.skills.map(skill => `
        <span class="skill-tag">
            ${skill}
            <i class="fas fa-times" onclick="removeSkill('${skill}')"></i>
        </span>
    `).join('');
}

// Remove skill
function removeSkill(skill) {
    workerData.profile.skills = workerData.profile.skills.filter(s => s !== skill);
    saveWorkerData();
    updateSkillsUI();
}

// Save worker data
function saveWorkerData() {
    localStorage.setItem('workerData', JSON.stringify(workerData));
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('workerData');
    showAuthModal();
}

// Handle job application
function handleJobApplication(jobTitle, company) {
    addApplication(jobTitle, company);
    addNotification(`You have applied for ${jobTitle} at ${company}`, 'success');
}

// Add new job application
function addApplication(jobTitle, company, status = 'pending') {
    const application = {
        id: Date.now(),
        jobTitle,
        company,
        status,
        date: new Date().toISOString()
    };
    workerData.applications.push(application);
    workerData.profile.applications++;
    saveWorkerData();
    updateMainContent();
}

// Add new notification
function addNotification(message, type = 'info') {
    const notification = {
        id: Date.now(),
        message,
        type,
        date: new Date().toISOString(),
        read: false
    };
    workerData.notifications.push(notification);
    saveWorkerData();
} 