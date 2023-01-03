class AnimalsService {
  _apiBase = 'http://localhost:3000';

  getData = async (url) => {
    let result = await fetch(`${url}`);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
  };

  postData = async (url, data) => {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
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

  getAnimalDataById = async (id) => {
    const result = await this.getData(`${this._apiBase}/mainAnimalsList`);

    const animalDataObject = result.find((animal) => animal.id === id);

    return await animalDataObject;
  };

  getFilteredList = async (filterMode) => {
    const result = await this.getData(`${this._apiBase}/mainAnimalsList`);

    const filteredList = result.filter((item) => {
      if (filterMode === 'Все') {
        return item;
      }
      if (item.kindOfAnimal === filterMode) {
        return item;
      }
    });

    return await filteredList;
  };
}

export default AnimalsService;
