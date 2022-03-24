const baseUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs';
const ipflyUrl = 'https://api.ipify.org/?format=json';

const token = 'e6f2dd4467cfedff853e27d8e102eb62c0eff8be';

const headers = {
  'Content-Type': 'application/json',
  "Accept": "application/json",
  "Authorization": `Token ${token}`,
};

export const getStreetsByName = async (addressName: string) => {
  const response = await fetch(`${baseUrl}/suggest/address/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: addressName,
    }),
  });

  return await response.json();
}

export const getCityByIp = async (ip: string) => {
  const response = await fetch(`${baseUrl}/iplocate/address?ip=${ip}`, { headers });

  return await response.json();
}

export const getIpAddress = async () => {
  const response = await fetch(ipflyUrl);

  return await response.json();
}