alert("courses.js is running!");
document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        {
            title: "Web Development for Beginners",
            description: "Learn the basics of web development using HTML, CSS, and JavaScript.",
            image: "images/course1.jpg",
            link: "#"
        },
        {
            title: "Python Programming",
            description: "Master Python from scratch and build amazing projects.",
            image: "images/course2.jpg",
            link: "#"
        },
        {
            title: "Digital Marketing",
            description: "Learn SEO, Social Media Marketing, and PPC to grow online.",
            image: "images/course3.jpg",
            link: "#"
        },
        {
            title: "Graphic Design",
            description: "Learn Photoshop, Illustrator, and UI/UX design.",
            image: "images/course4.jpg",
            link: "#"
        },
        {
            title: "AI & Machine Learning",
            description: "Understand AI, deep learning, and build ML models.",
            image: "images/course5.jpg",
            link: "#"
        }
    ];

    const coursesContainer = document.querySelector(".courses");

    courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course");

        courseElement.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <a href="${course.link}">Enroll Now</a>
        `;

        coursesContainer.appendChild(courseElement);
    });
});
