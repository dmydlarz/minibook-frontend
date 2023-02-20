export default function authHeader() {
  const resultData = localStorage.getItem("user");
  if (!resultData) return undefined;

  const user = JSON.parse(resultData);

  if (user && user.accessToken) {
    // return { 'x-access-token': user.accessToken }
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return undefined;
  }
}
