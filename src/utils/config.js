export const DOMAIN = 'https://fiverr.cybersoft.edu.vn';
export let TOKEN;
if (localStorage.getItem('user')) {
  TOKEN = JSON.parse(localStorage.getItem('user')).token;
}

export const TOKEN_CYBER =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMSIsIkhldEhhblN0cmluZyI6IjA1LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDE5ODQwMDAwMCIsIm5iZiI6MTY0MTkyMDQwMCwiZXhwIjoxNjcwMzQ2MDAwfQ.kdBVHpDWKZ-X7NZhWx-Y-ILozaT3RsvaQQF-Yqk4uV4';
