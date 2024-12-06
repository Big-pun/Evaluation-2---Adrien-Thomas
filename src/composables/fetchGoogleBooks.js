export async function fetchGoogleBooks(query) {
    const formattedQuery = query.replace(/\s/g, '+');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}`;

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