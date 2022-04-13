class AnimalService {
    _apiBase = "http://localhost:3000/animals";

    //getting datd from the server
    getResource = async (url = this._apiBase) => {
        let result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    };
}

export default AnimalService;
