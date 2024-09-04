import { setResponseStatus } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';

function useResponseSuccess(data) {
  return {
    code: 0,
    data,
    error: null,
    message: "ok"
  };
}
function useResponseError(message, error = null) {
  return {
    code: -1,
    data: null,
    error,
    message
  };
}
function forbiddenResponse(event) {
  setResponseStatus(event, 403);
  return useResponseError("ForbiddenException", "Forbidden Exception");
}
function unAuthorizedResponse(event) {
  setResponseStatus(event, 401);
  return useResponseError("UnauthorizedException", "Unauthorized Exception");
}

export { useResponseSuccess as a, useResponseError as b, forbiddenResponse as f, unAuthorizedResponse as u };
//# sourceMappingURL=response.mjs.map
