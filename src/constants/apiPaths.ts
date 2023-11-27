const hostname = window.location.hostname;
const port = window.location.port;
const protocol = window.location.protocol;

const API_BASE = port
  ? `${protocol}//${hostname}:${port}/api`
  : `${protocol}//${hostname}/api`;

const API_PATHS = {
  product: API_BASE,
  order: API_BASE,
  import: API_BASE,
  bff: API_BASE,
  cart: API_BASE,
};

export default API_PATHS;
