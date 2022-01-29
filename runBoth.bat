@ECHO OFF
CD C:\Users\marti\Documents\Nile\Nile
START code .
CD nile-frontend
START npm start
CD ..\nile-backend
START node index.js
EXIT