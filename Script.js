// Navigation Script
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  // Fermer le menu mobile quand on clique sur un lien
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
    })
  })
})

// Scroll Script
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove("opacity-0", "invisible")
      backToTop.classList.add("opacity-100", "visible")
    } else {
      backToTop.classList.remove("opacity-100", "visible")
      backToTop.classList.add("opacity-0", "invisible")
    }
  })

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Smooth scroll pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajustement pour la navbar fixe
          behavior: "smooth",
        })
      }
    })
  })
})

// Project Filter Script
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Retirer la classe active de tous les boutons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "bg-primary", "text-white")
        btn.classList.add("text-gray-700", "hover:bg-gray-100")
      })

      // Ajouter la classe active au bouton cliqué
      this.classList.add("active", "bg-primary", "text-white")
      this.classList.remove("text-gray-700", "hover:bg-gray-100")

      const filter = this.getAttribute("data-filter")

      // Filtrer les projets
      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })
})

// Project Modal Script
document.addEventListener("DOMContentLoaded", () => {
  const projectModal = document.getElementById("project-modal")
  const modalContent = document.getElementById("modal-content")
  const closeModal = document.getElementById("close-modal")
  const viewProjectButtons = document.querySelectorAll(".view-project-btn")

  // Données des projets
  const projectsData = {
    1: {
      title: "Stratégie Digitale Complète - Banque Atlantique Gabon",
      image:
        "https://readdy.ai/api/search-image?query=digital%2520marketing%2520strategy%2520document%2C%2520professional%2520layout%2C%2520analytics%2520charts%2C%2520brand%2520guidelines%2C%2520marketing%2520plan%2C%2520clean%2520desk%2520with%2520laptop%2520showing%2520strategy%2520document%2C%2520professional%2520setting%2C%2520high%2520quality%2520image&width=800&height=500&seq=10&orientation=landscape",
      description:
        "La Banque Atlantique Gabon souhaitait moderniser sa présence digitale pour attirer une clientèle plus jeune et dynamiser son image. J'ai élaboré une stratégie digitale complète sur 18 mois comprenant :",
      details: [
        "Audit complet de la présence digitale existante et analyse concurrentielle",
        "Refonte complète du site web avec intégration d'outils de self-service bancaire",
        "Développement d'une stratégie de contenu axée sur l'éducation financière",
        "Mise en place d'un plan média digital ciblant les 25-45 ans",
        "Formation des équipes internes à la gestion des réseaux sociaux",
      ],
      results: [
        "Augmentation de 35% du trafic web en 6 mois",
        "Croissance de 150% de l'engagement sur les réseaux sociaux",
        "Acquisition de 2500 nouveaux clients via les canaux digitaux",
        "Réduction de 20% des appels au service client grâce aux outils en ligne",
      ],
      testimonial: {
        text: "Marie a transformé notre approche digitale avec une stratégie claire et efficace. Son expertise nous a permis d'atteindre une nouvelle clientèle et de moderniser notre image de marque.",
        author: "Alain Mbourou, Directeur Marketing, Banque Atlantique Gabon",
      },
    },
    2: {
      title: "Campagne Réseaux Sociaux - Office du Tourisme Gabonais",
      image:
        "https://readdy.ai/api/search-image?query=social%2520media%2520campaign%2520for%2520African%2520tourism%2C%2520beautiful%2520images%2520of%2520Gabon%2520nature%2C%2520wildlife%2C%2520beaches%2C%2520professional%2520social%2520media%2520posts%2520layout%2C%2520Instagram%2520and%2520Facebook%2520mockups%2C%2520engagement%2520metrics%2C%2520high%2520quality%2520image&width=800&height=500&seq=11&orientation=landscape",
      description:
        "L'Office du Tourisme Gabonais cherchait à promouvoir les destinations touristiques du pays auprès d'un public international. J'ai conçu et géré une campagne réseaux sociaux multi-plateformes :",
      details: [
        "Création d'une identité visuelle cohérente pour toutes les plateformes",
        "Production de contenu de haute qualité mettant en valeur les paysages et la culture gabonaise",
        "Mise en place d'une stratégie de hashtags et de partenariats avec des influenceurs voyage",
        "Campagnes publicitaires ciblées sur Facebook, Instagram et YouTube",
        "Organisation de concours et d'événements virtuels pour stimuler l'engagement",
      ],
      results: [
        "Augmentation de 150% de l'engagement en 3 mois",
        "Croissance de la communauté de 45 000 nouveaux abonnés",
        "Portée organique multipliée par 5 grâce aux partages",
        "Augmentation de 28% des demandes d'information touristique",
      ],
      testimonial: {
        text: "La campagne conçue par Marie a considérablement amélioré notre visibilité internationale. Sa compréhension des tendances actuelles et sa créativité ont fait toute la différence.",
        author: "Nadine Koumba, Directrice, Office du Tourisme Gabonais",
      },
    },
    3: {
      title: "Site E-commerce - Afrikrea Gabon",
      image:
        "https://readdy.ai/api/search-image?query=e-commerce%2520website%2520for%2520African%2520fashion%2C%2520responsive%2520design%2C%2520clean%2520layout%2C%2520product%2520showcase%2C%2520shopping%2520cart%2C%2520modern%2520web%2520design%2C%2520professional%2520website%2520mockup%2C%2520high%2520quality%2520image&width=800&height=500&seq=12&orientation=landscape",
      description:
        "Afrikrea Gabon, spécialiste de la mode africaine contemporaine, souhaitait développer sa présence en ligne avec un site e-commerce performant et attractif. J'ai supervisé l'ensemble du projet :",
      details: [
        "Conception UX/UI centrée sur l'expérience utilisateur et la mise en valeur des produits",
        "Développement d'une plateforme e-commerce responsive avec WordPress et WooCommerce",
        "Intégration de solutions de paiement adaptées au marché local et international",
        "Optimisation SEO complète et stratégie de contenu",
        "Mise en place d'un système de gestion des stocks et de suivi des commandes",
      ],
      results: [
        "Lancement réussi avec 200 commandes dans le premier mois",
        "Taux de conversion de 3.8%, supérieur à la moyenne du secteur",
        "Panier moyen de 85€, en augmentation constante",
        "Expansion vers les marchés internationaux avec 30% de commandes hors Gabon",
      ],
      testimonial: {
        text: "Marie a parfaitement compris nos besoins et a créé une plateforme qui reflète l'essence de notre marque tout en étant extrêmement fonctionnelle. Son expertise technique et marketing a été déterminante.",
        author: "Sophie Nguema, Fondatrice, Afrikjrea Gabon",
      },
    },
  }

  // Ouvrir la modal avec les détails du projet
  viewProjectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectId = this.getAttribute("data-id")
      const project = projectsData[projectId]

      if (project) {
        let detailsHTML = '<ul class="list-disc pl-5 space-y-2 mb-6">'
        project.details.forEach((detail) => {
          detailsHTML += <li class="text-gray-700">${detail}</li>
        })
        detailsHTML += "</ul>"

        let resultsHTML = '<ul class="list-disc pl-5 space-y-2 mb-6">'
        project.results.forEach((result) => {
          resultsHTML += <li class="text-gray-700">${result}</li>
        })
        resultsHTML += "</ul>"

        modalContent.innerHTML = `
                    <div class="mb-6">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-auto rounded-lg">
                    </div>
                    <h3 class="text-2xl font-semibold mb-4 text-primary">${project.title}</h3>
                    <p class="text-gray-700 mb-6">${project.description}</p>
                    <h4 class="text-xl font-semibold mb-3">Détails du projet</h4>
                    ${detailsHTML}
                    <h4 class="text-xl font-semibold mb-3">Résultats</h4>
                    ${resultsHTML}
                    <div class="bg-gray-50 p-6 rounded-lg mb-6">
                        <p class="text-gray-700 italic mb-4">"${project.testimonial.text}"</p>
                        <p class="text-gray-900 font-medium">— ${project.testimonial.author}</p>
                    </div>
                `

        projectModal.classList.remove("hidden")
        document.body.style.overflow = "hidden"
      }
    })
  })

  // Fermer la modal
  closeModal.addEventListener("click", () => {
    projectModal.classList.add("hidden")
    document.body.style.overflow = "auto"
  })

  // Fermer la modal en cliquant en dehors
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      projectModal.classList.add("hidden")
      document.body.style.overflow = "auto"
    }
  })
})

// Contact Form Script
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Simuler l'envoi du formulaire
    const submitButton = this.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    submitButton.disabled = true
    submitButton.textContent = "Envoi en cours..."

    setTimeout(() => {
      submitButton.textContent = "Message envoyé !"
      submitButton.classList.add("bg-green-600")

      // Réinitialiser le formulaire
      contactForm.reset()

      // Rétablir le bouton après quelques secondes
      setTimeout(() => {
        submitButton.disabled = false
        submitButton.textContent = originalText
        submitButton.classList.remove("bg-green-600")
      }, 3000)
    }, 1500)
  })
})