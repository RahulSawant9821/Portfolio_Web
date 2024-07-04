
const projects = [
    { 
        id: 1,
        title: 'Predictive Analysis of Diabetic Dataset',
        link : 'https://github.com/RahulSawant9821/DS_DiabeticModel/blob/main/main.ipynb',
        image: 'https://th.bing.com/th/id/OIP.No21--0_kTMb8J9pnEIwdQHaE8?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        tech: 'Python | Logistic Regression',
        details: `Utilized logistic regression for data training to train a predictive model on a dataset comprising over 100,000 rows, achieving a commendable accuracy rate of 72%.
Applied meticulous data cleaning techniques to enhance dataset quality and performed thorough visualization to identify outliers.
Implemented oversampling methods to address data imbalance effectively.`
    },
    { 
        id: 2,
        title: 'British Airways Data Science Job Simulation on Forage - May 2024',
        link : 'https://github.com/RahulSawant9821/Forage-BritishAirways/blob/main/Model%20v2.ipynb',
        image: 'https://th.bing.com/th/id/OIP.NfUzR31GiUWppZ7sm4LlEQHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        tech: 'Python | Random Forest',
        details: ` Completed a simulation focussing on how data science is a critical component of British Airways success  
  Scraped and analysed customer review data to uncover findings  
  Built a predictive model to understand factors that influence buying Behaviour.`
    },
    { 
        id: 3,
        title: 'Quantium Software Engineering Job Simulation on Forage - July 2024',
        link : 'https://github.com/RahulSawant9821/Quantium_',
        image: 'https://th.bing.com/th/id/OIP.JTjB_hZMl2JUHP_gcXtjNQHaEB?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        tech: 'Python | Dash',
        details: ` Developed an interactive Dash application that enabled the client to assess the impact of price changes on sales and profitability.
Implemented a test suite to verify the Dash application is working and a bash script to automatically run the test suite.
Developed an intuitive user interface to make the application enjoyable and engaging for the client to interact with.`
    }
    
];

// Function to create project cards and modals
function createProjectCards() {
    const projectCardsContainer = document.getElementById('project-cards');

    projects.forEach(project => {
        // Create card
        const cardHtml = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.tech}</p>
                        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#project${project.id}Modal">Details</a>
                        <a href="${project.link}" class="btn btn-secondary" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        `;
        projectCardsContainer.innerHTML += cardHtml;

        // Create modal
        const modalHtml = `
            <div class="modal fade" id="project${project.id}Modal" tabindex="-1" aria-labelledby="project${project.id}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="project${project.id}ModalLabel">${project.title} Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>${project.details}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectCardsContainer.innerHTML += modalHtml;
    });
}

// Initialize project cards
createProjectCards();

// JavaScript for search functionality
document.getElementById('search-button').addEventListener('click', function() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        let title = card.querySelector('.card-title').textContent.toLowerCase();
        let tech = card.querySelector('.card-text').textContent.toLowerCase();

        if (title.includes(searchInput) || tech.includes(searchInput)) {
            card.style.display = 'block'; // Show matching cards
        } else {
            card.style.display = 'none'; // Hide non-matching cards
        }
    });
});
