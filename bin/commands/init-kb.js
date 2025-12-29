import fs from 'fs-extra';
import path from 'path';
import { log } from '../utils/colors.js';

/**
 * Initialize knowledge base structure
 */
export async function initKnowledgeBase(templatePath, options = {}) {
  const startTime = Date.now();
  const targetPath = path.join(process.cwd(), '.gemini', 'instructions', 'knowledge-base');

  try {
    if (!options.quiet) log.header('🧠 Initializing Knowledge Base');

    // Check if already exists
    if (await fs.pathExists(targetPath)) {
      if (!options.force) {
        log.warning('Knowledge base already exists');
        log.info('Use --force to reinitialize');
        process.exit(0);
      }
    }

    // Create directory structure
    if (!options.quiet) log.step('Creating directory structure...');
    
    const dirs = [
      'bugs/critical',
      'bugs/high',
      'bugs/medium',
      'bugs/low',
      'features/authentication',
      'features/performance',
      'features/integration',
      'features/ui-ux',
      'architecture',
      'security',
      'performance',
      'platform-specific/web',
      'platform-specific/mobile',
      'platform-specific/desktop',
      'platform-specific/cli',
      'platform-specific/embedded'
    ];

    for (const dir of dirs) {
      await fs.ensureDir(path.join(targetPath, dir));
    }

    // Copy README and index
    const kbSourcePath = path.join(templatePath, 'knowledge-base');
    await fs.copy(path.join(kbSourcePath, 'README.md'), path.join(targetPath, 'README.md'));
    await fs.copy(path.join(kbSourcePath, 'index.md'), path.join(targetPath, 'index.md'));

    if (!options.quiet) {
      log.success('Knowledge base initialized!');
      console.log(`Location: ${targetPath}`);
      console.log(`\nNext Steps:`);
      console.log('  • Read: .gemini/instructions/knowledge-base/README.md');
      console.log('  • Use template: Knowledge-Entry-Template.md');
      console.log('  • Search: Check index.md\n');

      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      log.info(`Completed in ${duration}s`);
    }

    process.exit(0);
  } catch (err) {
    log.error('Knowledge base initialization failed');
    log.error(err.message);
    if (options.verbose) console.error('\nStack trace:', err.stack);
    process.exit(1);
  }
}
