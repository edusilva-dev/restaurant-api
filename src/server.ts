import { errorHandling } from '@middlewares/error-handling'
import { routes } from '@routes'
import express from 'express'

const PORT = 3333

const app = express()

app.use(express.json())

app.use(routes)

app.use(errorHandling)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))