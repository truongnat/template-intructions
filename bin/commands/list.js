import fs from 'fs-extra';
import path from 'path';
import { colors, log } from '../utils/colors.js';

/**
 * List available templates and roles
 */
export async function listTemplates(templatePath) {
  try {
    log.header('📋 Available Templates & Roles');

    // List roles
    const rolesPath = path.join(templatePath, 'roles');
    const roles = await fs.readdir(rolesPath);
    console.log(`${colors.bright}Roles (${roles.length}):${colors.reset}`);
    roles.forEach(role => {
      const roleName = role.replace('.md', '');
      console.log(`  ${colors.green}•${colors.reset} ${roleName}`);
    });

    // List templates
    const templatesPath = path.join(templatePath, 'templates');
    const templates = await fs.readdir(templatesPath);
    console.log(`\n${colors.bright}Templates (${templates.length}):${colors.reset}`);
    templates.forEach(template => {
      const templateName = template.replace('.md', '').replace('.json', '');
      console.log(`  ${colors.blue}•${colors.reset} ${templateName}`);
    });

    console.log(`\n${colors.dim}Total: ${roles.length} roles, ${templates.length} templates${colors.reset}\n`);
  } catch (err) {
    log.error(`Failed to list templates: ${err.message}`);
    process.exit(1);
  }
}
