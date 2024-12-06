export async function chercherLivresGoogle(requete) {
    if (typeof requete !== 'string') {
        console.error('La requête doit être une chaîne de caractères');
        return [];
    }

    const requeteFormatee = requete.replace(/\s/g, '+');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${requeteFormatee}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('La réponse du serveur n\'est pas valide');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Erreur lors de la requête', error);
        return [];
    }
}