import { ref } from 'vue'

const livres = ref([])

export function utiliserCollection() {
    const ajouterLivre = (livre) => {
        livres.value.push({ ...livre, lu: false }) // Ajoute le livre avec l'état de lecture initialisé à false
    }

    const changerEtatLecture = (id) => {
        const livre = livres.value.find(l => l.id === id)
        if (livre) {
            livre.lu = true
        }
    }

    const supprimerLivre = (id) => {
        livres.value = livres.value.filter(l => l.id !== id)
    }

    const obtenirLivreParId = (id) => {
        return livres.value.find(l => l.id === id)
    }

    return {
        livres,
        ajouterLivre,
        changerEtatLecture,
        supprimerLivre,
        obtenirLivreParId
    }
}