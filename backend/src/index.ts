import express, { Application, Request, Response } from 'express'
import mongoose from 'mongoose'
import { monogo_uri, port } from './config'

const app: Application = express()

const main = async () => {
	try {
		await mongoose.connect(monogo_uri)
		app.listen(port)
		console.log(
			`Backend server is waiting for connections on http://localhost:${port}/`
		)
	} catch (error) {
		console.log(error)
	}
}

main()

app.get('/', (req: Request, res: Response) => {
	res.json({
		message: 'W',
	})
})
