[ &#127968; Return To Design Info](../design_info.md)

# Style Guide

## Project Folder Structure
The basic structure of our project should look like this:

```
src
  -components
    -ExampleComponent
      -component
      -test file
      -SCSS file
      -component specific utils
  -pages
    -PageComponent
      -component
      -test file
      -SCSS file
      -component specific utils
  -services
    -api
      -apiCalls
  -utils
    -globally usable helper functions
```

## Code Standards for SCSS

### Naming Conventions:

### Variables:
- Define reusable variables for colors, spacing, and typography.
### File Structure:
- Use scss modules for component specific styles.