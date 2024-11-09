import { BookApi, Configuration, OAuthApi, UserApi,  } from '@teyvatology/teyvatapi-client'
import axios from 'axios'

const basePath = 'http://localhost:3000'
const configuration = new Configuration()

const bookController = () => new BookApi(configuration, basePath, axios)
const userController = () => new UserApi(configuration, basePath, axios)
const oauthController = () => new OAuthApi(configuration, basePath, axios)

export { bookController, userController, oauthController }
