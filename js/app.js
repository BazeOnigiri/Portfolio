document.addEventListener('DOMContentLoaded', function() {

    // --- 1. INITIALISATION DE LENIS (Smooth Scroll) ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Gère les clics sur les ancres (y compris la nouvelle nav)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target) {
                lenis.scrollTo(target);
            }
        });
    });

    // --- 2. LOGIQUE DE TRADUCTION ---

    // Dictionnaire de traduction
    const translations = {
        'fr': {
            'lang-btn': 'EN',
            'nav-profil': 'Profil',
            'nav-competences': 'Compétences',
            'nav-projets': 'Projets',
            'nav-education': 'Éducation',
            'nav-contact': 'Contact',
            'profil-titre': '[ PROFIL ]',
            'profil-p': "Étudiant motivé en deuxième année de BUT Informatique. Actuellement à la recherche d'un stage pour compléter ma deuxième année, spécifiquement en développement .NET8 C# ou développement web. Je reste ouvert à l'apprentissage de nouveaux langages et technologies.",
            'profil-btn-cv': 'Télécharger mon CV',
            'competences-titre': '[ COMPÉTENCES TECHNIQUES ]',
            'projets-titre': '[ PROJETS ]',
            'projet1-titre': 'Projet Web (Laravel)',
            'projet1-p': "Collaboration en équipe pour construire un site web basé sur Laravel. Tâches incluant diagrammes MERISE et BPMN, cryptographie, conformité légale et graphiques POWER BI.",
            'projet2-titre': 'Projet C#.NET8 WPF',
            'projet2-p': "Conception d'une application de gestion de commandes de vin. Conception UML (cas d'utilisation, diagramme de classe) et collaboration via GitHub.",
            'projet3-titre': 'Ce Portfolio',
            'projet3-p': 'Site web portfolio personnel construit de zéro pour présenter mes compétences et projets, avec un design inspiré de Star Wars.',
            'projet4-titre': "Jeu 'Cailloux'",
            'projet4-p': "Implémentation d'un jeu 2D simple utilisant le framework Phaser.js, dans le cadre d'une évaluation.",
            'projet5-titre': "Jeu 'Premon'",
            'projet5-p': "Implémentation d'un jeu 2D simple utilisant le framework WPF, dans le cadre d'un projet évalué. Toutes ressemblances à un autre jeu n'a rien a voir 👀👀",
            'projet-lien-code': 'Code',
            'projet-lien-play': 'Jouer',
            'education-titre': '[ ÉDUCATION ]',
            'education1-date': '2024 - 2027',
            'education1-titre': 'BUT Informatique',
            'education1-loc': 'University of Savoy/IUT Annecy - Annecy-le-Vieux, France',
            'education2-date': '2022 - 2024',
            'education2-titre': 'Baccalauréat Général (Spé. NSI & Maths)',
            'education2-loc': 'Lycée Anna de Noailles - Evian-les-Bains, France',
            'langues-titre': '[ LANGUES ]',
            'langue1-nom': 'Français:',
            'langue1-lvl': '(Natif)',
            'langue2-nom': 'Anglais:',
            'langue2-lvl': '(B2 - Intermédiaire avancé)',
            'langue3-nom': 'Allemand:',
            'langue3-lvl': '(A2 - Débutant)',
            'interets-titre': "[ CENTRES D'INTÉRÊT ]",
            'interet1': 'Musique (Nujabes, 2Pac, Dire Straits...)',
            'interet2': 'Culture Geek (Manhwa, Manhua, Star Wars)',
            'interet3': 'Sport (Volleyball, Snowboard)',
            'contact-titre': '[ CONTACT ]',
            'contact-p': 'Prêt à rejoindre votre équipe. Contactez-moi :',
            'contact-loc': 'Annecy, France',
            'footer-p': 'Portfolio fait avec &#10084; par Timothée Kiehl.'
        },
        'en': {
            'lang-btn': 'FR',
            'nav-profil': 'Profile',
            'nav-competences': 'Skills',
            'nav-projets': 'Projects',
            'nav-education': 'Education',
            'nav-contact': 'Contact',
            'profil-titre': '[ PROFILE ]',
            'profil-p': "Motivated student in my second year of a Technical Bachelor's Degree in Computer Science, looking for an internship to complete my second year. I'm specifically interested in .NET8 C# or web development, but I remain open to learning new languages and technologies.",
            'profil-btn-cv': 'Download my CV',
            'competences-titre': '[ TECHNICAL SKILLS ]',
            'projets-titre': '[ PROJECTS ]',
            'projet1-titre': 'Web Project (Laravel)',
            'projet1-p': "Team collaboration to build a Laravel-based website. Tasks involved MERISE and BPMN diagram creation, cryptography, legal compliance, and POWER BI graphics.",
            'projet2-titre': 'C#.NET8 WPF Project',
            'projet2-p': "Design of a wine order management application. UML design (use cases, class diagram) and collaboration via GitHub.",
            'projet3-titre': 'This Portfolio',
            'projet3-p': 'Personal portfolio website built from scratch to showcase my skills and projects, with a Star Wars inspired design.',
            'projet4-titre': "'Cailloux' Game",
            'projet4-p': "Implementation of a simple 2D game using the Phaser.js framework, as part of an evaluation.",
            'projet5-titre': "'Premon' Game",
            'projet5-p': "Implementation of a simple 2D game using the WPF framework, as part of a evaluated project. Any resemblance to another game is purely coincidental 👀👀",
            'projet-lien-code': 'Code',
            'projet-lien-code': 'Play',
            'education-titre': '[ EDUCATION ]',
            'education1-date': '2024 - 2027',
            'education1-titre': "Technical Bachelor's Degree in Computer Science",
            'education1-loc': 'University of Savoy/IUT Annecy - Annecy-le-Vieux, France',
            'education2-date': '2022 - 2024',
            'education2-titre': 'French Baccalaureate (Specialized in CS & Maths)',
            'education2-loc': 'Anna de Noailles High School - Evian-les-Bains, France',
            'langues-titre': '[ LANGUAGES ]',
            'langue1-nom': 'French:',
            'langue1-lvl': '(Native)',
            'langue2-nom': 'English:',
            'langue2-lvl': '(B2 - Upper Intermediate)',
            'langue3-nom': 'German:',
            'langue3-lvl': '(A2 - Beginner)',
            'interets-titre': '[ MISCELLANOUS ]',
            'interet1': 'Music (Nujabes, 2Pac, Dire Straits...)',
            'interet2': 'Geek Culture (Manhwa, Manhua, Star Wars)',
            'interet3': 'Sport (Volleyball, Snowboarding)',
            'contact-titre': '[ CONTACT ]',
            'contact-p': 'Ready to join your team. Contact me:',
            'contact-loc': 'Annecy, France',
            'footer-p': "Portfolio made with &#10084; by Timothée Kiehl."
        }
    };

    // Textes pour Typed.js
    const typedStrings = {
        'fr': [
            "Étudiant en Informatique",
            "Développeur C#",
            "Développeur Web",
            "Recherche un stage..."
        ],
        'en': [
            "Computer Science Student",
            "C# Developer",
            "Web Developer",
            "Looking for an internship..."
        ]
    };

    let typedInstance = null;
    let currentLang = 'fr'; // Langue par défaut
    const langBtn = document.getElementById('lang-toggle-btn');

    // Fonction pour initialiser ou réinitialiser Typed.js
    function initTyped(lang) {
        if (typedInstance) {
            typedInstance.destroy();
        }
        if (document.getElementById('typed-text')) {
            var optionsTyped = {
                strings: typedStrings[lang],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 1500,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: '_',
            };
            typedInstance = new Typed('#typed-text', optionsTyped);
        }
    }

    // Fonction pour traduire la page
    function translatePage(targetLang) {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.dataset.lang;
            if (translations[targetLang] && translations[targetLang][key]) {
                element.textContent = translations[targetLang][key];
            }
        });
        initTyped(targetLang);
        langBtn.textContent = translations[targetLang]['btn-lang']; // Correction: 'btn-lang' -> 'lang-btn'
        
        // Correction de la clé (c'était 'btn-lang' au lieu de 'lang-btn' dans ma logique)
        if (translations[targetLang] && translations[targetLang]['lang-btn']) {
            langBtn.textContent = translations[targetLang]['lang-btn'];
        }
        
        currentLang = targetLang;
    }

    // Écouteur pour le bouton de langue
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = (currentLang === 'fr') ? 'en' : 'fr';
            translatePage(newLang);
        });
    }

    // --- 3. Initialisation de Particles.js ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 350,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.8,
                    "random": true,
                },
                "size": {
                    "value": 1.5,
                    "random": true,
                },
                "line_linked": {
                    "enable": false,
                },
                "move": {
                    "enable": true,
                    "speed": 0.3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                    },
                    "onclick": {
                        "enable": false,
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    }

    // --- 4. APPEL INITIAL ---
    // Initialise Typed.js en français au chargement
    initTyped(currentLang);

});