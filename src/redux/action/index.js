export const ProfilesApi = (url, token, slice) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'FRIENDS', payload: slice(data) })

            } else {
                throw new Error("Errore nel recupero dei dati");
            }
        } catch (error) {
            console.error("Errore:", error);
            throw new Error("Errore nella fetch");
        }
    }
};