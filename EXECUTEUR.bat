@echo off
start cmd /k "cd Administrateur && set PORT=3100 && npm start"
start cmd /k "cd partenaire && set PORT=3200 && npm start"
start cmd /k "cd Client && set PORT=3300 && npm run Front"
