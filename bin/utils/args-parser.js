/**
 * Parse command line arguments
 */
export function parseArgs(args) {
  const options = {
    force: false,
    quiet: false,
    verbose: false,
    noColor: false,
  };

  const filtered = args.filter(arg => {
    if (arg === '-f' || arg === '--force') {
      options.force = true;
      return false;
    }
    if (arg === '-q' || arg === '--quiet') {
      options.quiet = true;
      return false;
    }
    if (arg === '--verbose') {
      options.verbose = true;
      return false;
    }
    if (arg === '--no-color') {
      options.noColor = true;
      return false;
    }
    return true;
  });

  return { options, args: filtered };
}
