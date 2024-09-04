import { eventHandler } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { v as verifyAccessToken, d as MOCK_MENUS } from '../../../_/jwt-utils.mjs';
import { u as unAuthorizedResponse, a as useResponseSuccess } from '../../../_/response.mjs';
import 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js';

const all = eventHandler((event) => {
  var _a, _b;
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  const menus = (_b = (_a = MOCK_MENUS.find((item) => item.username === userinfo.username)) == null ? void 0 : _a.menus) != null ? _b : [];
  return useResponseSuccess(menus);
});

export { all as default };
//# sourceMappingURL=all.mjs.map
