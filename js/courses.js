document.addEventListener("DOMContentLoaded", function() {
    const courses = [
        {
            title: "Web Development for Beginners",
            description: "Learn the basics of web development using HTML, CSS, and JavaScript.",
            image: "images/web_dev.png",
            link: "#"
        },
        {
            title: "Python Programming",
            description: "Master Python from scratch and build amazing projects.",
            image: "images/python_programming.png",
            link: "#"
        },
        {
            title: "Digital Marketing",
            description: "Learn SEO, Social Media Marketing, and PPC to grow online.",
            image: "images/digital_marketing.png",
            link: "#"
        },
        {
            title: "Graphic Design",
            description: "Learn Photoshop, Illustrator, and UI/UX design.",
            image: "images/graphic_design.png",
            link: "#"
        },
        {
            title: "AI & Machine Learning",
            description: "Understand AI, deep learning, and build ML models.",
            image: "images/ai_ml.png",
            link: "#"
        },
        {
            title: "Business Management",
            description: "Learn essential business strategies and leadership skills.",
            image: "images/business_management.png",
            link: "#"
        },
        {
            title: "Cybersecurity",
            description: "Understand ethical hacking, network security, and online threats.",
            image: "images/cybersecurity.png",
            link: "#"
        },
        {
            title: "Data Science",
            description: "Analyze data and build machine learning models.",
            image: "images/data_science.png",
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
