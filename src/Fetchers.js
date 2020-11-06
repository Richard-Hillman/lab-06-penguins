import request from 'superagent';

const URL = process.env.React_APP_API_URL || 'https://frozen-castle-37316.herokuapp.com/' 

// =====================================================================================================

export async function fetchPenguins() {
    try {
        const response = await request.get(`${URL}penguins`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

// ======================================================================================================

export async function fetchPenguin(someId) {
    try {
        const response = await request.get(`${URL}penguins/${someId}`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

// ======================================================================================================

export async function fetchSizes() {
    try {
        const response = await request.get(`${URL}sizes`);

        return response.body;
    } catch(err) {
        throw err;
    }
}


// ======================================================================================================

export async function createPenguin(newPenguin)  {
    try {
        await request
        .post(`${URL}penguins`)
        .send(newPenguin)
        
        return;
    } catch (err) {
        throw err;
    }
}

// =========================================================================================

export async function updatePenguin(someId, newPenguin)  {
    try {
        await request
        .put(`${URL}penguins/${someId}`)
        .send(newPenguin)
        
        return;
    } catch (err) {
        throw err;
    }
}

// ==========================================================================================

export async function deletePenguin(someId)  {
    try {
        await request.get(`${URL}penguins/${someId}`);

        return;
    } catch (err) {
        throw err;
    }
}
