import { deleteCookie, setCookie, getCookie } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';

function clearRefreshTokenCookie(event) {
  deleteCookie(event, "jwt", {
    httpOnly: true,
    sameSite: "none",
    secure: true
  });
}
function setRefreshTokenCookie(event, refreshToken) {
  setCookie(event, "jwt", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1e3,
    sameSite: "none",
    secure: true
  });
}
function getRefreshTokenFromCookie(event) {
  const refreshToken = getCookie(event, "jwt");
  return refreshToken;
}

export { clearRefreshTokenCookie as c, getRefreshTokenFromCookie as g, setRefreshTokenCookie as s };
//# sourceMappingURL=cookie-utils.mjs.map
