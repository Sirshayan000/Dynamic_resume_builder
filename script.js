document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var previewContent = document.getElementById('preview-content');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        generateResume();
    });
    function generateResume() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        var education = document.getElementById('education').value;
        previewContent.innerHTML = "\n            <h3>".concat(name, "</h3>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Skills:</strong> ").concat(skills.split('\n').join(', '), "</p>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n        ");
    }
});
