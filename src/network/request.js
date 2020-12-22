import axiox from 'axios'
export function request(config) {
  const instance = axiox.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000

  })
  return instance(config)
}
