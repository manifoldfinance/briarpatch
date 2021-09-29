// import 'dotenv/config.js'
import { Command, parse } from 'commander';
import { shell } from './commands/shell';
import { startSocketServer } from './commands/socketServer';

import * as dotenv from 'dotenv';
dotenv.config();

const program = new Command();

program
  .command('shell')
  .description(
    'Starts a basic shell for exploring SushiSwap optimizing router results.',
  )
  .action(shell);

const DEFAULT_SOCKET_SVR_PORT = '3031';
program
  .command('socketServer [port]')
  .description(
    'Starts a socket server that accepts route requests. Default port is ' +
      `${DEFAULT_SOCKET_SVR_PORT} that can be overridden with the optional port argument.`,
  )
  .action(async (port) => {
    port = port || DEFAULT_SOCKET_SVR_PORT;
    await startSocketServer(port);
  });

program.command('help', { isDefault: true }).action(() => {
  program.help();
});

program.parse(process.argv);
