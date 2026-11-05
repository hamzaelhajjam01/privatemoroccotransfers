@echo off
title Morocco Private Drivers - website
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Download it from https://nodejs.org and run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\lenis" (
  echo Installing packages, first run only. Please wait...
  call npm install
)

echo.
echo Starting the website. Your browser will open in a few seconds.
echo Keep this window open while you use the site. Close it to stop.
echo.
start "" cmd /c "timeout /t 6 /nobreak >nul & start http://localhost:3000"
call npm run dev
pause
