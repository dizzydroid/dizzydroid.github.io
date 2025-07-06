# Project Images Specification

## Image Directories
- `images/projects/` - For regular project thumbnails (Student, Developer personas)
- `images/design/` - For design work thumbnails (Explorer persona)

## Image Dimensions & Guidelines

### Regular Project Thumbnails (Student & Developer)
- **Recommended dimensions**: 400x300px (4:3 aspect ratio)
- **Format**: PNG or JPG
- **File size**: Keep under 200KB for fast loading
- **Naming convention**: `project-name.png` (use hyphens, lowercase)

### Design Project Thumbnails (Explorer)
- **Flexible dimensions**: Any aspect ratio is supported
- **Common sizes**: 
  - Logo designs: 400x300px or 500x400px
  - Banners: 600x200px or 800x300px
  - Posters: 400x600px or 500x700px
  - Social media graphics: Various sizes supported
- **Format**: PNG (recommended for logos), JPG for photos
- **File size**: Keep under 300KB
- **Naming convention**: `design-project-name.png`

## How to Add Images to Projects

### For Regular Projects (Student/Developer):
```javascript
{
    title: "Project Name",
    // ... other properties
    image: "images/projects/project-name.png"
}
```

### For Design Projects (Explorer):
```javascript
{
    title: "Design Project Name",
    // ... other properties
    image: "images/design/design-project-name.png"
}
```

## CSS Features
- **Auto-scaling**: Images automatically scale to fit containers
- **Hover effects**: Gentle zoom on hover
- **Fallback**: If no image is provided, falls back to icon
- **Responsive**: Images adapt to different screen sizes
- **Performance**: CSS optimizations for smooth loading

## Current Examples
- Portfolio website: `images/portfoliod.png`
- Skimble game: `images/skimblegif.gif` (GIFs supported!)
- Quotes generator: `images/quotes.png`

## Tips for Best Results
1. Use high-quality images with good contrast
2. Ensure text in images is readable at thumbnail size
3. Consider the background color of your site when designing
4. Test images on both light and dark themes
5. For design work, showcase the best part of your design
6. Use consistent styling across similar project types
