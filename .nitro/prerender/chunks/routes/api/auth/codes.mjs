import { eventHandler } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { v as verifyAccessToken, M as MOCK_CODES } from '../../../_/jwt-utils.mjs';
import { u as unAuthorizedResponse, a as useResponseSuccess } from '../../../_/response.mjs';
import 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js';

const codes = eventHandler((event) => {
  var _a, _b;
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  const codes = (_b = (_a = MOCK_CODES.find((item) => item.username === userinfo.username)) == null ? void 0 : _a.codes) != null ? _b : [];
  return useResponseSuccess(codes);
});

export { codes as default };
//# sourceMappingURL=codes.mjs.map
