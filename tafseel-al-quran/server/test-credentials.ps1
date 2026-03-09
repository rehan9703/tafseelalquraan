# Quick API credentials check script
# Run from server folder: .\test-credentials.ps1

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  Quran Foundation API Credentials Check" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Test 1: Public API (no auth)
Write-Host "Test 1: Public API /chapters (no auth)..." -ForegroundColor Yellow
try {
    $r = Invoke-RestMethod -Uri "https://api.quran.com/api/v4/chapters?language=en" -Method GET -TimeoutSec 10
    $count = $r.chapters.Count
    $first = $r.chapters[0].name_simple
    Write-Host "  SUCCESS: $count chapters returned. First: $first" -ForegroundColor Green
} catch {
    Write-Host "  FAILED: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Test 2: Production OAuth2 token
Write-Host "Test 2: Production OAuth2 token..." -ForegroundColor Yellow
$prodToken = $null
try {
    $body = "grant_type=client_credentials&client_id=acd683e8-d917-415c-b747-c6234380ce6c&client_secret=y8_dHVwM.cH0QQ.UF1-9qa-NG0"
    $r = Invoke-RestMethod -Uri "https://oauth2.quran.foundation/token" -Method POST -Body $body -ContentType "application/x-www-form-urlencoded" -TimeoutSec 12
    $prodToken = $r.access_token
    $preview = $prodToken.Substring(0, [Math]::Min(30, $prodToken.Length)) + "..."
    Write-Host "  SUCCESS: Token = $preview" -ForegroundColor Green
    Write-Host "  Expires in: $($r.expires_in)s" -ForegroundColor Green
} catch {
    $status = $_.Exception.Response.StatusCode.value__
    Write-Host "  WARN ($status): OAuth2 failed - app still works via public API" -ForegroundColor Yellow
    Write-Host "  Detail: $($_.Exception.Message)" -ForegroundColor DarkYellow
}

Write-Host ""

# Test 3: Verses with auth (if token obtained)
if ($prodToken) {
    Write-Host "Test 3: Verses with Bearer token (Al-Fatiha)..." -ForegroundColor Yellow
    try {
        $headers = @{ Authorization = "Bearer $prodToken"; Accept = "application/json" }
        $r = Invoke-RestMethod -Uri "https://api.quran.com/api/v4/verses/by_chapter/1?language=en&translations=131&per_page=10" -Headers $headers -TimeoutSec 10
        $count = $r.verses.Count
        $arabic = $r.verses[0].text_uthmani
        Write-Host "  SUCCESS: $count verses. First: $($arabic.Substring(0,[Math]::Min(35,$arabic.Length)))..." -ForegroundColor Green
    } catch {
        Write-Host "  FAILED: $($_.Exception.Message)" -ForegroundColor Red
    }
    Write-Host ""
}

# Test 4: Pre-production OAuth2
Write-Host "Test 4: Pre-production OAuth2 token..." -ForegroundColor Yellow
try {
    $body = "grant_type=client_credentials&client_id=8abdecbf-e0b7-49e2-92a4-ff6abccbb583&client_secret=lVm1mD7DG520uXuhvAYpgtrUdc"
    $r = Invoke-RestMethod -Uri "https://prelive-oauth2.quran.foundation/token" -Method POST -Body $body -ContentType "application/x-www-form-urlencoded" -TimeoutSec 12
    $t = $r.access_token
    Write-Host "  SUCCESS: Token = $($t.Substring(0,[Math]::Min(30,$t.Length)))..." -ForegroundColor Green
} catch {
    $status = $_.Exception.Response.StatusCode.value__
    Write-Host "  WARN ($status): Pre-prod OAuth2 failed" -ForegroundColor Yellow
    Write-Host "  Detail: $($_.Exception.Message)" -ForegroundColor DarkYellow
}

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  Done. If Test 1 passed, your app works!" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""
