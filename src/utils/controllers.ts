import { BookApi, Configuration } from '@teyvatology/teyvatapi-client'

const configuration = new Configuration({
  basePath: 'http://localhost:3000',
})

const bookController = () => new BookApi(configuration)

export { bookController }