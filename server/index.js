const express = require('express')
let app = express()

const http = require('http')
let server = http.createServer(app)

const socket = require('socket.io')
let io = socket(server)

server.listen(3000, () => {
    // 서버가 실행될경우
    console.log('server on 3001 Port');
})

let memberInfoName = {}
let memberInfoId = {}
// 채팅방 목록
let groups = []

let chat = io.of('/chat').on('connection', (socket) => {
    console.log('connection');
    socket.on('enter', (result) => {
        let id = socket.id
        if (memberInfoName.hasOwnProperty(name)) { 
            // 유저존재 여부 검사
            socket.emit('enter', false)
        } else {
            memberInfoName[Name] = id
            memberInfoId[id] = name
            socket.emit('enter', true)
        }
    })
})