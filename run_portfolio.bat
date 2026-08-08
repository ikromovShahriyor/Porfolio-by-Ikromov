@echo off
title 3D Portfolio Run Script
echo ==============================================
echo       3D Portfolio ishga tushirilmoqda...
echo ==============================================
echo.

echo [1/2] Backend API (.NET 10) ishga tushmoqda...
start "Backend API (.NET 10)" cmd /k "dotnet run --project backend/Portfolio.API/Portfolio.API.csproj --launch-profile http"

echo.
echo [2/2] Frontend (React + Vite) ishga tushmoqda...
start "Frontend (Vite)" cmd /k "cd frontend && npm run dev"

echo.
echo ==============================================
echo  Serverlar ishga tushdi!
echo  Frontend URL: http://localhost:5173
echo  Backend URL:  http://localhost:5288
echo ==============================================
echo.
pause
