import express from 'express'

const dir = process.cwd()
const app = express()
app.use(express.static(dir+'/app/public'))
const PORT = process.env.PORT ?? 3000

app.get('/',(req,res)=>{
    res.status(200).sendFile(dir+'/app/web/index.html')
})

app.listen(PORT,()=>{
    console.log('web en linea')
})