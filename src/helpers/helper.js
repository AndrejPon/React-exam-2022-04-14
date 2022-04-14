const BASE_URL = 'https://autumn-delicate-wilderness.glitch.me/v1';

export async function getFetch(resource) {
  try {
    const resp = await fetch(`${BASE_URL}/${resource}`);
    const dataInJs = await resp.json();
    return dataInJs;
  } catch (error) {
    console.log('getFetch error:', error);
    return false;
  }
}

export async function sendFetch(resource, dataToPost) {
  try {
    const resp = await fetch(`${BASE_URL}/${resource}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToPost),
    });
    const dataInJS = await resp.json();
    return dataInJS;
  } catch (error) {
    console.log('sendFetch error', error);
    return false;
  }
}
