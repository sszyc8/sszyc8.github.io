import { eventHandler, getQuery, setResponseStatus } from 'file:///Users/sszyc8/Documents/workspace/github/sszyc8.github.io/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { b as useResponseError } from '../../_/response.mjs';

const status = eventHandler((event) => {
  const { status } = getQuery(event);
  setResponseStatus(event, Number(status));
  return useResponseError(`${status}`);
});

export { status as default };
//# sourceMappingURL=status.mjs.map
