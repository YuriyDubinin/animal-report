class AnimalService {
    _apiBase = "http://localhost:3000";

    getData = async (url) => {
        let result = await fetch(`${url}`);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    };

    postData = async (url, data) => {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: data,
        });

        return await result.json();
    };

    // getting mainAnimalsList from db
    getMainAnimalsList = async () => {
        const result = await this.getData(`${this._apiBase}/mainAnimalsList`);

        return await result;
    };

    getMainUsersList = async () => {
        const result = await this.getData(`${this._apiBase}/mainUsersList`);

        return await result;
    };
}

export default AnimalService;
