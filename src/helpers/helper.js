const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = 'https://autumn-delicate-wilderness.glitch.me/v1';

export async function getFetch(resource) {
  try {
    const token = localStorage.getItem('token');
    const resp = await fetch(`${BASE_URL}/${resource}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

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
    // console.log('dataInJS', dataInJS);
    if (dataInJS.msg === 'Successfully logged in') {
      // console.log('dataInJS ===', dataInJS);
      localStorage.setItem('token', dataInJS.token);
    }
    return dataInJS;
  } catch (error) {
    console.log('sendFetch error', error);
    return false;
  }
}
export async function sendFetchWithToken(resource, dataToPost) {
  try {
    const token = localStorage.getItem('token');
    const resp = await fetch(`${BASE_URL}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(dataToPost),
    });
    const dataInJS = await resp.json();
    // console.log('dataInJS', dataInJS);
    if (dataInJS.msg === 'Successfully logged in') {
      // console.log('dataInJS ===', dataInJS);
      localStorage.setItem('token', dataInJS.token);
    }
    return dataInJS;
  } catch (error) {
    console.log('sendFetch error', error);
    return false;
  }
}

// export function saveTokenToLocalStorage(tokenDetails) {
//   localStorage.setItem('userDetails', tokenDetails);
// }
