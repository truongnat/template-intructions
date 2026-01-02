---
title: "Figma MCP Integration for @UIUX"
category: feature
priority: high
date: 2026-01-02
tags: [figma, mcp, uiux, design, code-generation]
related_files: [.agent/roles/role-uiux.md]
---

# Figma MCP Integration for @UIUX

## Overview

Figma MCP tools enable @UIUX to bridge design and development by:
- Generating screenshots from Figma designs
- Extracting design context and code
- Accessing design variables and tokens
- Creating diagrams directly in FigJam
- Mapping designs to code components

## Available Figma MCP Tools

### 1. Get Screenshot
**Tool:** `mcp_figma_get_screenshot`
**Purpose:** Generate visual previews of Figma designs

**Parameters:**
- `fileKey` (required): Extract from Figma URL
- `nodeId` (required): Node ID from URL (format: "123:456")
- `clientLanguages`: Programming languages (e.g., "typescript,react")
- `clientFrameworks`: Frameworks (e.g., "react,nextjs")

**Example URL:** `https://figma.com/design/pqrs/ExampleFile?node-id=1-2`
- `fileKey` = `pqrs`
- `nodeId` = `1:2`

**Usage:**
```javascript
// Get screenshot of a component
mcp_figma_get_screenshot({
  fileKey: "pqrs",
  nodeId: "1:2",
  clientLanguages: "typescript",
  clientFrameworks: "react"
})
```

### 2. Get Design Context
**Tool:** `mcp_figma_get_design_context`
**Purpose:** Generate UI code from Figma designs

**Parameters:**
- `fileKey` (required)
- `nodeId` (required)
- `clientLanguages`: Target languages
- `clientFrameworks`: Target frameworks
- `disableCodeConnect`: Disable Code Connect (optional)
- `forceCode`: Always return code (optional)

**Returns:**
- Generated code string
- Asset download URLs
- Component structure

**Usage:**
```javascript
// Generate React component from Figma
mcp_figma_get_design_context({
  fileKey: "pqrs",
  nodeId: "1:2",
  clientLanguages: "typescript",
  clientFrameworks: "react,nextjs"
})
```

### 3. Get Metadata
**Tool:** `mcp_figma_get_metadata`
**Purpose:** Get node structure overview in XML format

**Use Case:** Understanding design hierarchy before generating code

**Usage:**
```javascript
// Get page structure
mcp_figma_get_metadata({
  fileKey: "pqrs",
  nodeId: "0:1", // Page ID
  clientLanguages: "typescript",
  clientFrameworks: "react"
})
```

### 4. Get Variable Definitions
**Tool:** `mcp_figma_get_variable_defs`
**Purpose:** Extract design tokens (colors, spacing, typography)

**Returns:** `{'icon/default/secondary': '#949494'}`

**Usage:**
```javascript
// Get design tokens
mcp_figma_get_variable_defs({
  fileKey: "pqrs",
  nodeId: "1:2",
  clientLanguages: "typescript",
  clientFrameworks: "react"
})
```

### 5. Generate Diagram
**Tool:** `mcp_figma_generate_diagram`
**Purpose:** Create flowcharts, sequence diagrams, gantt charts in FigJam

**Supported Types:**
- Flowchart / Graph (LR direction by default)
- Sequence Diagram
- State Diagram
- Gantt Chart

**Parameters:**
- `name` (required): Diagram title
- `mermaidSyntax` (required): Mermaid.js code
- `userIntent`: Description of purpose

**Usage:**
```javascript
// Create user flow diagram
mcp_figma_generate_diagram({
  name: "User Authentication Flow",
  mermaidSyntax: `
    flowchart LR
      A["Login Page"] --> B["Enter Credentials"]
      B --> C{"Valid?"}
      C -->|"Yes"| D["Dashboard"]
      C -->|"No"| E["Error Message"]
  `,
  userIntent: "Document authentication user flow"
})
```

**Important Rules:**
- Use LR (left-right) direction for flowcharts
- Quote all text: `["Text"]`, `-->|"Edge Text"|`
- No emojis in Mermaid code
- No `\n` for newlines
- Avoid word "end" in classNames

### 6. Code Connect Map
**Tool:** `mcp_figma_get_code_connect_map`
**Purpose:** Get mapping of Figma nodes to code components

**Returns:** `{'1:2': { codeConnectSrc: 'components/Button.tsx', codeConnectName: 'Button' }}`

**Usage:**
```javascript
// Get component mappings
mcp_figma_get_code_connect_map({
  fileKey: "pqrs",
  nodeId: "1:2",
  codeConnectLabel: "React" // Optional: filter by framework
})
```

### 7. Add Code Connect Map
**Tool:** `mcp_figma_add_code_connect_map`
**Purpose:** Map Figma node to code component

**Parameters:**
- `fileKey`, `nodeId` (required)
- `source` (required): File path (e.g., "components/Button.tsx")
- `componentName` (required): Component name
- `label` (required): Framework (React, Vue, SwiftUI, etc.)

**Valid Labels:**
- React, Web Components, Vue, Svelte, Storybook, Javascript
- Swift UIKit, Objective-C UIKit, SwiftUI
- Compose, Java, Kotlin, Android XML Layout, Flutter

**Usage:**
```javascript
// Map Button component
mcp_figma_add_code_connect_map({
  fileKey: "pqrs",
  nodeId: "1:2",
  source: "src/components/Button.tsx",
  componentName: "Button",
  label: "React"
})
```

### 8. Get FigJam
**Tool:** `mcp_figma_get_figjam`
**Purpose:** Extract content from FigJam boards

**Note:** Only works for FigJam files, not regular Figma files

**Usage:**
```javascript
// Extract FigJam board
mcp_figma_get_figjam({
  fileKey: "board-key",
  nodeId: "1:2",
  includeImagesOfNodes: true
})
```

## @UIUX Workflow with Figma MCP

### Phase 1: Design Exploration
```bash
# 1. Get design structure
mcp_figma_get_metadata({
  fileKey: "your-file-key",
  nodeId: "0:1", # Page ID
  clientLanguages: "typescript",
  clientFrameworks: "react,nextjs"
})

# 2. Extract design tokens
mcp_figma_get_variable_defs({
  fileKey: "your-file-key",
  nodeId: "component-node-id"
})
```

### Phase 2: Component Generation
```bash
# 1. Generate screenshot for documentation
mcp_figma_get_screenshot({
  fileKey: "your-file-key",
  nodeId: "component-node-id",
  clientLanguages: "typescript",
  clientFrameworks: "react"
})

# 2. Generate component code
mcp_figma_get_design_context({
  fileKey: "your-file-key",
  nodeId: "component-node-id",
  clientLanguages: "typescript",
  clientFrameworks: "react,nextjs"
})
```

### Phase 3: Documentation
```bash
# Create user flow diagram
mcp_figma_generate_diagram({
  name: "User Journey - Checkout Flow",
  mermaidSyntax: `
    flowchart LR
      A["Cart"] --> B["Checkout"]
      B --> C["Payment"]
      C --> D["Confirmation"]
  `
})
```

### Phase 4: Code Mapping
```bash
# Map design to implementation
mcp_figma_add_code_connect_map({
  fileKey: "your-file-key",
  nodeId: "button-node-id",
  source: "src/components/ui/Button.tsx",
  componentName: "Button",
  label: "React"
})
```

## Best Practices

### 1. Extract File Key and Node ID
From URL: `https://figma.com/design/abc123/MyFile?node-id=45-67`
- `fileKey` = `abc123`
- `nodeId` = `45:67` (replace `-` with `:`)

### 2. Specify Client Context
Always provide:
- `clientLanguages`: "typescript" or "javascript,html,css"
- `clientFrameworks`: "react,nextjs" or "vue,nuxt"

This helps generate appropriate code.

### 3. Use Metadata First
Before generating code, use `get_metadata` to understand structure:
```javascript
// Get overview first
mcp_figma_get_metadata({ fileKey, nodeId: "0:1" })

// Then generate specific components
mcp_figma_get_design_context({ fileKey, nodeId: "specific-component" })
```

### 4. Document Design Tokens
Extract and document design variables:
```javascript
const tokens = mcp_figma_get_variable_defs({ fileKey, nodeId })
// Document in design system: colors, spacing, typography
```

### 5. Create Visual Documentation
Use diagrams for user flows:
```javascript
mcp_figma_generate_diagram({
  name: "Authentication Flow",
  mermaidSyntax: "flowchart LR\n  A[\"Login\"] --> B[\"Verify\"]"
})
// Returns URL - include in design spec
```

## Integration with @UIUX Workflow

### In Design Spec
```markdown
## Figma Design References

**Design File:** [Link to Figma]
- File Key: `abc123`
- Main Components: Node IDs `1:2`, `3:4`, `5:6`

**Design Tokens Extracted:**
```json
{
  "colors/primary": "#007AFF",
  "spacing/base": "8px",
  "typography/heading": "Inter Bold 24px"
}
```

**Generated Components:**
- Button: `src/components/ui/Button.tsx` (Node: 1:2)
- Card: `src/components/ui/Card.tsx` (Node: 3:4)

**User Flow Diagrams:**
- [Authentication Flow](figma-figjam-url)
- [Checkout Flow](figma-figjam-url)
```

### Handoff to @SA
```markdown
### Design-to-Code Mapping

**Figma Components → Code:**
| Component | Node ID | Code Path | Status |
|-----------|---------|-----------|--------|
| Button | 1:2 | src/components/ui/Button.tsx | Mapped |
| Card | 3:4 | src/components/ui/Card.tsx | Mapped |

**Design Tokens:**
- Extracted from Figma Variables
- Available in: `src/styles/tokens.ts`

### Next Step:
- @SA - Please review API requirements for these components
- @DEV - Figma code generation available for implementation
```

## Common Patterns

### Pattern 1: Component Library Setup
```javascript
// 1. Get all components metadata
const structure = await mcp_figma_get_metadata({
  fileKey: "design-system",
  nodeId: "0:1"
})

// 2. Extract design tokens
const tokens = await mcp_figma_get_variable_defs({
  fileKey: "design-system",
  nodeId: "tokens-page"
})

// 3. Generate each component
for (const component of components) {
  const code = await mcp_figma_get_design_context({
    fileKey: "design-system",
    nodeId: component.id,
    clientFrameworks: "react,nextjs"
  })
  
  // 4. Map to codebase
  await mcp_figma_add_code_connect_map({
    fileKey: "design-system",
    nodeId: component.id,
    source: `src/components/${component.name}.tsx`,
    componentName: component.name,
    label: "React"
  })
}
```

### Pattern 2: Design Documentation
```javascript
// 1. Screenshot for specs
const screenshot = await mcp_figma_get_screenshot({
  fileKey: "project",
  nodeId: "screen-id"
})

// 2. Create flow diagram
const flowUrl = await mcp_figma_generate_diagram({
  name: "User Flow",
  mermaidSyntax: "flowchart LR..."
})

// 3. Include in design spec
// Add screenshot and flow diagram URLs to documentation
```

### Pattern 3: Responsive Design
```javascript
// Generate code for different breakpoints
const desktop = await mcp_figma_get_design_context({
  fileKey: "project",
  nodeId: "desktop-variant"
})

const mobile = await mcp_figma_get_design_context({
  fileKey: "project",
  nodeId: "mobile-variant"
})

// Combine into responsive component
```

## Troubleshooting

### Issue: "Unsupported response item type: resource_link"
**Solution:** This is a known MCP response format issue. The tool still works, just ignore the error.

### Issue: Invalid Node ID
**Solution:** Ensure format is "123:456" not "123-456". Replace hyphens with colons.

### Issue: File Key Not Found
**Solution:** 
- Check URL format
- For branch URLs: `https://figma.com/design/:fileKey/branch/:branchKey/:fileName`
- Use `branchKey` as `fileKey`

### Issue: Code Generation Too Large
**Solution:** Use `forceCode: true` parameter or get metadata first to identify smaller nodes.

## Metrics to Track

- **Components Generated:** Number of Figma components converted to code
- **Design Tokens Extracted:** Number of variables documented
- **Code Mappings Created:** Figma nodes linked to codebase
- **Diagrams Created:** User flows and documentation diagrams
- **Time Saved:** Hours saved vs manual implementation

## Related Documentation

- `.agent/roles/role-uiux.md` - Full @UIUX role documentation
- `.agent/knowledge-base/features/figma-mcp-sa-guide.md` - @SA Figma integration
- Figma MCP Official Docs: [Link if available]

#figma #mcp #uiux #design #code-generation #compound-learning
