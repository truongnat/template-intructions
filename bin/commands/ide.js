import fs from 'fs-extra';
import path from 'path';
import { log } from '../utils/colors.js';

/**
 * Setup single IDE configuration
 */
async function setupSingleIDE(config, options) {
  // Create directory if needed
  if (config.createDir) {
    await fs.ensureDir(config.createDir);
  }

  // Check if file exists
  if (await fs.pathExists(config.target)) {
    if (!options.force) {
      log.warning(`${config.name} config already exists`);
      log.info('Use --force to overwrite');
      return;
    } else {
      log.warning(`Overwriting ${config.name} config...`);
    }
  }

  // Copy config file
  if (!options.quiet) log.step(`Installing ${config.name}...`);
  await fs.copy(config.source, config.target);
  if (!options.quiet) log.success(`${config.name} installed`);
}

/**
 * Setup IDE integration
 */
export async function setupIDE(templatePath, ideName, options = {}) {
  const startTime = Date.now();
  const targetPath = process.cwd();
  const ideIntegrationPath = path.join(templatePath, 'ide-integration');

  try {
    if (!options.quiet) log.header(`🔧 Setting up ${ideName.toUpperCase()} Integration`);

    const ideConfigs = {
      cursor: {
        source: path.join(ideIntegrationPath, 'cursor-rules.md'),
        target: path.join(targetPath, '.cursorrules'),
        name: 'Cursor IDE'
      },
      copilot: {
        source: path.join(ideIntegrationPath, 'github-copilot-instructions.md'),
        target: path.join(targetPath, '.github', 'copilot-instructions.md'),
        name: 'GitHub Copilot',
        createDir: path.join(targetPath, '.github')
      },
      windsurf: {
        source: path.join(ideIntegrationPath, 'windsurf-cascade.md'),
        target: path.join(targetPath, '.windsurfrules'),
        name: 'Windsurf Cascade'
      },
      cline: {
        source: path.join(ideIntegrationPath, 'cline-config.json'),
        target: path.join(targetPath, '.vscode', 'cline-config.json'),
        name: 'Cline Extension',
        createDir: path.join(targetPath, '.vscode')
      },
      aider: {
        source: path.join(ideIntegrationPath, 'aider-commands.md'),
        target: path.join(targetPath, '.aider.conf.yml'),
        name: 'Aider CLI'
      }
    };

    if (ideName === 'all') {
      // Setup all IDEs
      for (const [ide, config] of Object.entries(ideConfigs)) {
        await setupSingleIDE(config, options);
      }
      
      if (!options.quiet) {
        log.success('All IDE integrations installed!');
        console.log(`\nNext Steps:`);
        console.log('  • Restart your IDE');
        console.log('  • Type / in chat to see available commands');
        console.log('  • Try: /pm Build a todo app\n');
      }
    } else {
      // Setup single IDE
      const config = ideConfigs[ideName];
      if (!config) {
        log.error(`Unknown IDE: ${ideName}`);
        console.log(`Available: cursor, copilot, windsurf, cline, aider, all`);
        process.exit(1);
      }

      await setupSingleIDE(config, options);
      
      if (!options.quiet) {
        log.success(`${config.name} integration installed!`);
        console.log(`Location: ${config.target}`);
        console.log(`\nNext Steps:`);
        console.log(`  • Restart ${config.name}`);
        console.log('  • Type / in chat to see commands');
        console.log('  • Try: /pm Build a todo app\n');
      }
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    if (!options.quiet) log.info(`Completed in ${duration}s`);

    process.exit(0);
  } catch (err) {
    log.error('IDE setup failed');
    log.error(err.message);
    if (options.verbose) console.error('\nStack trace:', err.stack);
    process.exit(1);
  }
}
