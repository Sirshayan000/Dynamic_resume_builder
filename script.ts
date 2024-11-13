document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const previewContent = document.getElementById('preview-content') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        generateResume();
    });

    function generateResume() {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;

        previewContent.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Skills:</strong> ${skills.split('\n').join(', ')}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Education:</strong> ${education}</p>
        `;
    }
});