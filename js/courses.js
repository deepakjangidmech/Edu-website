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
        description: "Learn how to manage businesses and improve leadership skills.",
        image: "images/business_management.png",
        link: "#"
    },
    {
        title: "Cybersecurity",
        description: "Learn how to protect systems and prevent cyber attacks.",
        image: "images/cybersecurity.png",
        link: "#"
    },
    {
        title: "Data Science",
        description: "Learn data analytics, visualization, and AI applications.",
        image: "images/data_science.png",
        link: "#"
    }
];

// Select the courses container
const coursesContainer = document.querySelector(".courses");

// Remove existing content to prevent duplication
coursesContainer.innerHTML = "";

// Loop through courses and add them to the page
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
