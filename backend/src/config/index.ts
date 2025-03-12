import { config } from 'dotenv'
config()

export const port = process.env.PORT || 3000

export const monogo_uri =
	process.env.MONGO_URI || 'mongodb://localhost:27017/shop'

export const jwt_secret = process.env.JWT_SECRET
