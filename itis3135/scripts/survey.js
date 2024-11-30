function validateForm(event) {
    const form = document.getElementById('introForm');
    const name = form.name.value;
    const mascot = form.mascot.value;
    const image = form.image.files.length;
    const caption = form.imageCaption.value;

    if (!name || !mascot || !image || !caption) {
        alert("Please fill in all required fields.");
        event.preventDefault();
        return false;
    }
    return true;
}

function addCourseField() {
    const courseContainer = document.getElementById('coursesContainer');
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
    const form = document.getElementById('introForm');
    document.getElementById('resultName').innerText = form.name.value;
    document.getElementById('resultMascot').innerText = form.mascot.value;
    document.getElementById('resultImage').src = URL.createObjectURL(form.image.files[0]);
    document.getElementById('resultImageCaption').innerText = form.imageCaption.value;
    document.getElementById('resultPersonalBackground').innerText = form.personalBackground.value;
    document.getElementById('resultProfessionalBackground').innerText = form.professionalBackground.value;
    document.getElementById('resultAcademicBackground').innerText = form.academicBackground.value;
    document.getElementById('resultWebDevelopment').innerText = form.webDevelopment.value;
    document.getElementById('resultPlatform').innerText = form.platform.value;

    const courses = form.querySelectorAll('[name="course[]"]');
    const coursesText = Array.from(courses).map(course => course.value).join(', ');
    document.getElementById('resultCourses').innerText = coursesText;

    document.getElementById('resultFunnyThing').innerText = form.funnyThing.value;
    document.getElementById('resultOtherInfo').innerText = form.otherInfo.value;

    form.style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('introForm').style.display = 'block';
}
