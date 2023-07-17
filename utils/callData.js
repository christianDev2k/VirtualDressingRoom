const url = 'https://64a28223b45881cc0ae540aa.mockapi.io/dressingroom';

const getData = async () => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        throw new Error('Error fetch: ' + error.message);
    }
};

export { getData };
