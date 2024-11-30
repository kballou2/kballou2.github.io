function validateForm(event) {
    const form = document.getElementById('intro-form');
    const name = form.name.value;
    const mascot = form.mascot.value;
    const image = form.image.files.length;
    const caption = form['image-caption'].value;

    if (!name || !mascot || !image || !caption) {
        alert("Please fill in all required fields.");
        event.preventDefault();
        return false;
    }

    event.preventDefault(); 
    submitFormData();
}

function addCourseField(event) {
    event.preventDefault();

    const courseContainer = document.getElementById('courses-container');
    const courseCount = courseContainer.children.length / 2; 
    const newCourseField = document.createElement("input");
    newCourseField.type = "text";
    newCourseField.name = "course[]";
    newCourseField.placeholder = `Course ${courseCount + 1}`;
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.type = "button";
    deleteButton.onclick = function () {
        courseContainer.removeChild(newCourseField);
        courseContainer.removeChild(deleteButton);
    };

    courseContainer.appendChild(newCourseField);
    courseContainer.appendChild(deleteButton);
}

function submitFormData() {
    const form = document.getElementById('intro-form');
    document.getElementById('result-name').innerText = form.name.value;
    document.getElementById('result-mascot').innerText = form.mascot.value;
    document.getElementById('result-image').src = URL.createObjectURL(form.image.files[0]);
    document.getElementById('result-image-caption').innerText = form['image-caption'].value;
    document.getElementById('result-personal-background').innerText = form['personal-background'].value;
    document.getElementById('result-professional-background').innerText = form['professional-background'].value;
    document.getElementById('result-academic-background').innerText = form['academic-background'].value;
    document.getElementById('result-web-development').innerText = form['web-development'].value;
    document.getElementById('result-platform').innerText = form.platform.value;

    const courses = form.querySelectorAll('[name="course[]"]');
    const coursesText = Array.from(courses).map(course => course.value).join(', ');
    document.getElementById('result-courses').innerText = coursesText;

    document.getElementById('result-funny-thing').innerText = form['funny-thing'].value;
    document.getElementById('result-other-info').innerText = form['other-info'].value;

    form.style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function resetForm() {
    document.getElementById('intro-form').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('intro-form').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("intro-form").addEventListener("submit", validateForm);

    document.getElementById("add-course-button").addEventListener("click", addCourseField);

    document.getElementById("reset-button").addEventListener("click", resetForm);
});
