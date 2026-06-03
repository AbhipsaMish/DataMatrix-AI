        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // --- CAREERS LOGIC ---
        document.addEventListener("DOMContentLoaded", function() {
            
            // 1. DEFINE YOUR JOBS HERE
            const jobs = [
                 { title: "Senior AI Engineer", location: "Bangalore (Hybrid)", type: "Full-Time", link: "#" }
            ];

            const jobContainer = document.getElementById('job-list-container');
            const noRolesMsg = document.getElementById('no-roles-message');
            const introText = document.getElementById('careers-intro');

            if (jobs.length > 0) {
                noRolesMsg.style.display = 'none';
                introText.style.display = 'block';

                jobs.forEach(job => {
                    const card = document.createElement('div');
                    card.className = 'job-card';
                    card.innerHTML = `
                        <div class="job-info">
                            <h4>${job.title}</h4>
                            <div class="job-meta">
                                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                                <span><i class="fas fa-briefcase"></i> ${job.type}</span>
                            </div>
                        </div>
                        <a href="${job.link}" class="btn-apply">Apply Now</a>
                    `;
                    jobContainer.appendChild(card);
                });

            } else {
                noRolesMsg.style.display = 'block';
                introText.style.display = 'none';
            }
        });

