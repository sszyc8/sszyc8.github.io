import { eventHandler } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { u as unAuthorizedResponse, a as useResponseSuccess } from '../../../_/response.mjs';
import { v as verifyAccessToken } from '../../../_/jwt-utils.mjs';
import 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js';

const info = eventHandler((event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }
  return useResponseSuccess(userinfo);
});

export { info as default };
//# sourceMappingURL=info.mjs.map
