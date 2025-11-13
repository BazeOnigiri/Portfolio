document.addEventListener('DOMContentLoaded', function() {
    
    // Initialisation de Particles.js pour le fond étoilé
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 100, // Nombre d'étoiles (ajustable)
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
                    "value": 0.5,
                    "random": true,
                },
                "size": {
                    "value": 2,
                    "random": true,
                },
                "line_linked": {
                    "enable": false, // Pas de liens entre les étoiles pour l'effet espace
                },
                "move": {
                    "enable": true,
                    "speed": 0.5, // Vitesse lente pour fond calme
                    "direction": "none",
                    "random": false,
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
});