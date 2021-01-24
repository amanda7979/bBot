const group = 'general';
const generalCommandList: Command[] = [
  {
    group,
    key: 'handleRegisterServer',
    aliases: ['register'],
    type: 'solo',
    isPrivileged: true,
    needsRegisteredGuild: false,
  },
  {
    group,
    key: 'handleSetPugChannel',
    aliases: ['setpugchannel'],
    type: 'solo',
    isPrivileged: true,
    needsRegisteredGuild: true,
  },
  {
    group,
    key: 'handleSetQueryChannel',
    aliases: ['setquerychannel'],
    type: 'solo',
    isPrivileged: true,
    needsRegisteredGuild: true,
  },
  {
    group,
    key: 'handleSetPrefix',
    aliases: ['setprefix'],
    type: 'args',
    isPrivileged: true,
    needsRegisteredGuild: true,
  },
  {
    group,
    key: 'handleIgnoreCommandGroup',
    aliases: ['ignorecommandgroup', 'igc'],
    type: 'args',
    isPrivileged: true,
    needsRegisteredGuild: true,
  },
  {
    group,
    key: 'handleUnIgnoreCommandGroup',
    aliases: ['unignorecommandgroup', 'uigc'],
    type: 'args',
    isPrivileged: true,
    needsRegisteredGuild: true,
  },
  {
    group,
    key: 'handleWarnUser',
    aliases: ['warn'],
    type: 'args',
    isPrivileged: true,
    needsRegisteredGuild: true,
  },
];

export default generalCommandList;
