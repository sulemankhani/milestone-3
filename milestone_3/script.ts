document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeContainer = document.getElementById('resume-container') as HTMLDivElement;
    const resumeElement = document.getElementById('resume') as HTMLDivElement;
    const downloadButton = document.getElementById('download-button') as HTMLButtonElement;
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;

    let profilePictureDataUrl: string | null = null; // Change ArrayBuffer to string | null

    // Handle image file upload
    profilePictureInput.addEventListener('change', (event: Event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                if (e.target && typeof e.target.result === 'string') {
                    profilePictureDataUrl = e.target.result; // Ensure it's a string (base64)
                }
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

        // Generate resume with profile picture
        resumeElement.innerHTML = `
            <header>
                ${profilePictureDataUrl ? `<img src="${profilePictureDataUrl}" alt="Profile Picture" class="profile-picture">` : ''}
                <h1>${name}</h1>
                <p>Contact: ${email} | ${phone}</p>
            </header>
            <section>
                <h2>Education</h2>
                <p>${education}</p>
            </section>
            <section>
                <h2>Work Experience</h2>
                <p>${workExperience}</p>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </section>
        `;

        // Show resume and download button
        resumeContainer.style.display = 'block';
    });

    // Add functionality for the download button (optional)
    downloadButton.addEventListener('click', () => {
        alert('PDF download functionality not implemented.');
    });
});