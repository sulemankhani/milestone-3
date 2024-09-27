document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeContainer = document.getElementById('resume-container');
    var resumeElement = document.getElementById('resume');
    var downloadButton = document.getElementById('download-button');
    var profilePictureInput = document.getElementById('profile-picture');
    var profilePictureDataUrl = null; // Change ArrayBuffer to string | null
    // Handle image file upload
    profilePictureInput.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && typeof e.target.result === 'string') {
                    profilePictureDataUrl = e.target.result; // Ensure it's a string (base64)
                }
            };
            reader.readAsDataURL(file);
        }
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Collect form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value.split(',');
        // Generate resume with profile picture
        resumeElement.innerHTML = "\n            <header>\n                ".concat(profilePictureDataUrl ? "<img src=\"".concat(profilePictureDataUrl, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : '', "\n                <h1>").concat(name, "</h1>\n                <p>Contact: ").concat(email, " | ").concat(phone, "</p>\n            </header>\n            <section>\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n            </section>\n            <section>\n                <h2>Work Experience</h2>\n                <p>").concat(workExperience, "</p>\n            </section>\n            <section>\n                <h2>Skills</h2>\n                <ul>\n                    ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n            </section>\n        ");
        // Show resume and download button
        resumeContainer.style.display = 'block';
    });
    // Add functionality for the download button (optional)
    downloadButton.addEventListener('click', function () {
        alert('PDF download functionality not implemented.');
    });
});
