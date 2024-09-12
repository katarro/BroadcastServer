#!/usr/bin/env node

const { program } = require('commander');
const { spawn } = require('child_process');

program
  .command('start')
  .description('Inicia el servidor WebSocket')
  .action(() => {
    console.log('Iniciando servidor WebSocket...');
    const serverProcess = spawn('node', ['server.js'], { stdio: 'inherit' });

    serverProcess.on('close', (code) => {
      console.log(`Servidor cerrado con código ${code}`);
    });
  });

program
  .command('connect')
  .description('Conecta el cliente al servidor WebSocket')
  .action(() => {
    console.log('Conectando el cliente al servidor WebSocket...');
    const serverProcess = spawn('node', ['client.js'], { stdio: 'inherit' });

    serverProcess.on('close', (code) => {
      console.log(`Cliente cerrado con código ${code}`);
    });
  });

program.parse(process.argv);
