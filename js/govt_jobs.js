function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Fetch Job Listings from JSON
async function loadJobs() {
    try {
        const response = await fetch("data/govt_jobs.json");
        const data = await response.json();

        Object.keys(data).forEach(category => {
            let jobSection = document.getElementById(category);
            jobSection.innerHTML = `<h3>${category} Jobs</h3>`;
            
            data[category].forEach(job => {
                jobSection.innerHTML += `
                    <div class="job">
                        <h4>${job.title}</h4>
                        <p>${job.description}</p>
                        <a href="${job.apply_link}" target="_blank">Apply Now</a>
                    </div>
                `;
            });
        });
    } catch (error) {
        console.error("Error loading jobs:", error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablink").click();
    loadJobs();
});
