import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const mocks = axios.create({ baseURL: BASE_URL });

/*
 * Fetches all data from db file
 * */
export async function getAllMockData() {
  const resp = await mocks.get('/db');
  return resp.data;
}
