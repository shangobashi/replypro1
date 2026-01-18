@echo off
echo ==========================================
echo    ReplyPro Setup Script
echo ==========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERROR: Node.js is not installed.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Step 1: Installing dependencies...
call npm install

if %ERRORLEVEL% neq 0 (
    echo ERROR: Failed to install dependencies.
    pause
    exit /b 1
)

echo.
echo Step 2: Checking for .env file...
if not exist .env (
    echo Creating .env file from template...
    copy .env.example .env
    echo.
    echo IMPORTANT: You need to edit the .env file with your API keys!
    echo.
    echo Open .env in a text editor and fill in:
    echo   - NEXT_PUBLIC_SUPABASE_URL
    echo   - NEXT_PUBLIC_SUPABASE_ANON_KEY
    echo   - SUPABASE_SERVICE_ROLE_KEY
    echo   - GROQ_API_KEY
    echo   - STRIPE_SECRET_KEY
    echo   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    echo   - STRIPE_PRICE_ID
    echo   - STRIPE_WEBHOOK_SECRET
    echo.
    echo After filling in the values, run this script again.
    echo.
    notepad .env
    pause
    exit /b 0
)

echo .env file exists. Checking if configured...
findstr /C:"your_" .env >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo.
    echo WARNING: Your .env file still has placeholder values!
    echo Please edit .env and replace all "your_" values with real API keys.
    echo.
    notepad .env
    pause
    exit /b 0
)

echo.
echo Step 3: Environment configured! Starting development server...
echo.
echo ==========================================
echo Your app will be available at:
echo   http://localhost:3000
echo ==========================================
echo.
echo Press Ctrl+C to stop the server.
echo.

call npm run dev
