import axios from 'axios'
import protobuf from 'protobufjs'
import fs from 'fs'
import path from 'path'


const httpService = axios.create({
  timeout: 45000,
  method: 'post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/octet-stream'
  },
  responseType: 'arraybuffer'
})

protobuf.load('../proto/awesome.proto', (err, root) => {
  if (err) throw err
  console.log(root)
  const AwesomeMessage = root.lookup()
})
