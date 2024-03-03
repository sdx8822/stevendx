const skills = [
    {
        category: 'languages',
        domain: 'frontend',
        label: 'JavaScript',
        color: '#ABD1ED'
    },
    {
        category: 'languages',
        domain: 'frontend',
        label: 'TypeScript',
        color: '#ABD1ED'
    },
    {
        category: 'languages',
        domain: 'frontend',
        label: 'HTML',
        color: '#ABD1ED'
    },
    {
        category: 'languages',
        domain: 'frontend',
        label: 'CSS',
        color: '#ABD1ED'
    },
    {
        category: 'languages',
        domain: 'frontend',
        label: 'SCSS (SASS)',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Angular',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'React',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Vue.js',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'RxJS',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'RESTful API',
        color: '#ABD1ED'
    },
    {
        category: 'languages',
        domain: 'backend',
        label: 'GraphQL',
        color: '#FFC997'
    },
    {
        category: 'languages',
        domain: 'backend',
        label: 'SQL',
        color: '#FFC997'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Tailwind CSS',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Accessibility (a11y)',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Bootstrap',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Jasmine',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Karma',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Jest',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Cypress',
        color: '#ABD1ED'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Git',
        color: '#C7A5FF'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Smartlook Analytics',
        color: '#C7A5FF'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Storybook',
        color: '#C7A5FF'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Figma',
        color: '#C7A5FF'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Nx',
        color: '#C7A5FF'
    },
    {
        category: 'tools',
        domain: 'frontend',
        label: 'Docker',
        color: '#C7A5FF'
    },
    {
        category: 'tools',
        domain: 'backend',
        label: 'Node.js',
        color: '#FFC997'
    },
    {
        category: 'tools',
        domain: 'backend',
        label: 'Express.js',
        color: '#FFC997'
    },
    {
        category: 'tools',
        domain: 'backend',
        label: 'MongoDB',
        color: '#FFC997'
    }
];

const contactMedias = [
    {
        url: './assets/contact-media-linkedin.svg',
        label: 'LinkedIn',
        alt: 'LinkedIn Contact',
        route: 'https://linkedin.com/in/stvnduong'
    },
    {
        url: './assets/contact-media-github.svg',
        label: 'GitHub',
        alt: 'GitHub Contact',
        route: 'https://github.com/sdx8822'
    },
    {
        url: './assets/contact-media-resume.svg',
        label: 'Resume',
        alt: 'Resume Contact',
        route: 'https://drive.google.com/file/d/1i32y9yJEQblzo3KwieKSfNtgnYAVnDEL/view?usp=drive_link'
    },
    {
        url: './assets/contact-media-email.svg',
        label: 'Email',
        alt: 'Email Contact',
        route: 'mailto:stevenduong22@gmail.com'
    },
];

const workItems = [
    {
        role: 'Senior Frontend Software Engineer',
        company: 'Trackforce Valiant (large)',
        companyDescription: 'Security Workforce Management',
        imgUrl: './assets/Trackforce-guardtek-Logbook.png',
        imgAlt: 'Trackforce Valiant Work Card',
        skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'HTML', 'SCSS (SASS)', 'RESTful API', 'RxJS', 'Jest', 'Cypress', 'Smartlook Analytics', 'Figma', 'Node.js', 'Express.js', 'MongoDB', 'SQL']
    },
    {
        role: 'Software Engineer Team & Tech Lead',
        company: 'snapIoT (start up)',
        companyDescription: 'HIPPA-compliant Clinical Trial Management',
        imgUrl: './assets/snapIoT-snapClinical-Telemedicine.png',
        imgAlt: 'snapIoT Work Card',
        skills: ['Angular', 'TypeScript', 'HTML', 'SCSS (SASS)', 'RESTful API', 'RxJS', 'Jasmine', 'Karma', 'Cypress', 'a11y', 'Storybook', 'Figma', 'Node.js', 'Express.js', 'MongoDB', 'SQL']
    },
];

const projects = [
    {
        role: 'All hats (product owner, designer, full-stack)',
        company: 'Rescue-a-Pet (WIP)',
        companyDescription: 'Pet Rescue & Shelter Management',
        imgUrl: './assets/Rescue-a-Pet-Pets.png',
        imgAlt: 'Rescue-a-Pet Project Card',
        skills: ['Angular', 'TypeScript', 'HTML', 'SCSS (SASS)', 'RESTful API', 'RxJS', 'Jest', 'Cypress', 'Storybook', 'Figma', 'Docker', 'Node.js', 'Express.js', 'MongoDB', 'SQL']
    }
];

function createBadgeElements() {
    const languageBadgeContainer = document.getElementById('language-skills')
                                           .getElementsByClassName('badge-container');
    
    const toolsBadgeContainer = document.getElementById('tool-skills')
                                        .getElementsByClassName('badge-container');

    skills.forEach((skill) => {
        const badgeElement = document.createElement('span');
        badgeElement.classList.add('skill-badge');
        badgeElement.style.backgroundColor = skill.color;
        badgeElement.append(skill.label);

        if (skill.category === 'languages') {
            languageBadgeContainer[0].appendChild(badgeElement);
        }

        if (skill.category === 'tools') {
            toolsBadgeContainer[0].appendChild(badgeElement);
        }
    });
}

function createBadgeElementsForCards(targetElementId, sourceItems) {
    const workCardsBadgeContainer = document.getElementById(targetElementId)
                                            .getElementsByClassName('badge-container');

    const skillsByWorkItem = sourceItems.map((items) => {
        const skillsMap = items.skills.map((skill) => {
            const sIndex = skills.findIndex((s) => s.label.toLowerCase() === skill.toLowerCase() || s.label.toLowerCase().includes(skill.toLowerCase()));
            if (sIndex > -1) {
                return skills[sIndex];
            }
        });

        return skillsMap;
    });

    for (let [index, skills] of skillsByWorkItem.entries()) {
        skills.forEach((skill) => {
            const badgeElement = document.createElement('span');
            badgeElement.classList.add('skill-badge');
            badgeElement.style.backgroundColor = skill.color;
            badgeElement.append(skill.label);

            workCardsBadgeContainer[index].appendChild(badgeElement);
        });
    }
}

function createContactMediaElements() {
    const contactMediaContainer = document.getElementsByClassName('contact-media-container');
    
    contactMedias.forEach((media) => {
        for (let container of contactMediaContainer) {
            container.insertAdjacentHTML('beforeEnd', `
                <a class="media-item" href="${media.route}" target="_blank">
                    <img src="${media.url}" alt="${media.alt}" />
                    <label>${media.label}</label>
                </a>
            `);
        }
    });
}

function createCardElements(targetElementId, sourceItems) {
    const workCardsContainer = document.getElementById(targetElementId);

    sourceItems.forEach((work) => {
        workCardsContainer.insertAdjacentHTML('beforeend', `
            <div class="card work-card">
                <div class="work-role">${work.role}</div>

                <img src="${work.imgUrl}" alt="T${work.imgAlt}">

                <div class="info-container">
                    <span>
                        <span class="bold">${work.company}:</span>
                        <span>${work.companyDescription}</span>
                    </span>

                    <div class="badge-container"></div>
                </div>
            </div>
        `);
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

createBadgeElements();
createContactMediaElements();
createCardElements('work-cards-container', workItems);
// createCardElements('project-cards-container', projects);
createBadgeElementsForCards('work-cards-container', workItems);
// createBadgeElementsForCards('project-cards-container', projects);

const footerElement = document.getElementsByTagName('footer')[0];
const infoArticleElement = document.getElementById('info-article');

document.addEventListener('scroll', function () {
    infoArticleElement.getElementsByClassName('contact-media-container')[0].style.visibility = isInViewport(footerElement) ? 'hidden' : 'visible';
});

document.addEventListener('resize', function () {
    infoArticleElement.getElementsByClassName('contact-media-container')[0].style.visibility = isInViewport(footerElement) ? 'hidden' : 'visible';
});

document.addEventListener('DOMContentLoaded', function () {
    infoArticleElement.getElementsByClassName('contact-media-container')[0].style.visibility = isInViewport(footerElement) ? 'hidden' : 'visible';
});
