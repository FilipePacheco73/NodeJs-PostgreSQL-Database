import { createServer } from 'node:http'

const server = createServer( (request, response) => {
    response.write('oii')
    
    return response.end()
})
    
server.listen(5500)