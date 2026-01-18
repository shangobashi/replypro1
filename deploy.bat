@echo off
echo ==========================================
echo    ReplyPro Deploy to Vercel
echo ==========================================
echo.

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Vercel CLI not found. Installing...
    call npm install -g vercel
)

echo.
echo This will deploy your app to Vercel.
echo.
echo Make sure you have:
echo   1. Created a Vercel account at https://vercel.com
echo   2. All your API keys ready
echo.
echo Press any key to continue or Ctrl+C to cancel...
pause >nul

echo.
echo Starting Vercel deployment...
echo.
echo You'll be asked to log in and configure your project.
echo When asked about environment variables, add them all.
echo.

call vercel

echo.
echo ==========================================
echo Deployment complete!
echo.
echo NEXT STEPS:
echo 1. Copy your deployment URL
echo 2. Set up Stripe webhook (see README.md Step 4)
echo 3. Update Supabase redirect URLs (see README.md Step 5)
echo 4. Test your app!
echo ==========================================
pause
