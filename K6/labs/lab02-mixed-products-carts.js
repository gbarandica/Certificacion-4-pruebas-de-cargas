import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://fakestoreapi.com';

export const options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '1m', target: 0 },
  ],

  thresholds: {
    http_req_failed: ['rate<0.01'],
    'http_req_duration{endpoint:products}': ['p(95)<1000'],
    'http_req_duration{endpoint:carts}': ['p(95)<1000'],
    checks: ['rate>0.99'],
  },
};

export default function () {

  if (Math.random() < 0.70) {

    const res = http.get(`${BASE_URL}/products`, {
      tags: { endpoint: 'products' },
    });

    check(res, {
      'products status 200': (r) => r.status === 200
    });

  } else {

    const res = http.get(`${BASE_URL}/carts`, {
      tags: { endpoint: 'carts' },
    });

    check(res, {
      'carts status 200': (r) => r.status === 200
    });
  }

  sleep(1);
}