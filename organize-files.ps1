# Create necessary directories if they don't exist
$directories = @(
    "src/components/common",
    "src/components/layout",
    "src/components/sections",
    "src/styles",
    "src/assets/images",
    "src/assets/icons",
    "src/hooks",
    "src/utils"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
    }
}

# Move files to their respective directories
$fileMappings = @{
    # Layout components
    "src/Navigation.js" = "src/components/layout/"
    "src/Navigation.styled.js" = "src/components/layout/"
    
    # Section components
    "src/About.js" = "src/components/sections/"
    "src/About.styled.js" = "src/components/sections/"
    "src/Contact.js" = "src/components/sections/"
    "src/Contact.styled.js" = "src/components/sections/"
    "src/Hero.js" = "src/components/sections/"
    "src/Hero.styled.js" = "src/components/sections/"
    "src/Projects.js" = "src/components/sections/"
    "src/Projects.styled.js" = "src/components/sections/"
    "src/Skills.js" = "src/components/sections/"
    "src/Skills.styled.js" = "src/components/sections/"
    
    # Styles
    "src/shared" = "src/styles/"
    
    # Utils
    "src/utils.js" = "src/utils/"
    
    # Assets
    "src/logo.svg" = "src/assets/icons/"
}

# Move files
foreach ($file in $fileMappings.GetEnumerator()) {
    $source = $file.Key
    $destination = $file.Value
    
    if (Test-Path $source) {
        Move-Item -Path $source -Destination $destination -Force
        Write-Host "Moved $source to $destination"
    } else {
        Write-Host "Warning: $source not found"
    }
}

# Create index files for cleaner imports
$indexFiles = @{
    "src/components/sections/index.js" = @(
        "About",
        "Contact",
        "Hero",
        "Projects",
        "Skills"
    )
    
    "src/components/layout/index.js" = @(
        "Navigation"
    )
    
    "src/components/index.js" = @(
        "export * from './sections';",
        "export * from './layout';",
        "export * from './common';"
    )
}

foreach ($indexFile in $indexFiles.GetEnumerator()) {
    $content = $indexFile.Value | ForEach-Object {
        if ($_.StartsWith("export")) {
            $_
        } else {
            "export { default as $_ } from './$_';"
            "export * from './$_.styled';"
        }
    }
    
    $content | Set-Content -Path $indexFile.Key -Force
    Write-Host "Created index file: $($indexFile.Key)"
}

Write-Host "File organization complete!"
