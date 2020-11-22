import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitPayload = WithGuildID & GuildBlockState;
type AddBlockedUserPayload = WithGuildID & Block;
type RemoveBlockedUserPayload = WithGuildID & { userId: string };

type Block = {
  id: string;
  username: string;
  blockedOn: Date;
  expiresAt: Date;
  reason: string;
};

type GuildBlockState = {
  list: Record<string, Block>;
};

type BlocksState = {
  [guild: string]: GuildBlockState;
};

let initialState: BlocksState = {};
const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    initBlocks(state, action: PayloadAction<InitPayload>) {
      const { guildId, list } = action.payload;
      state[guildId].list = list;
    },
    addBlockedUser(state, action: PayloadAction<AddBlockedUserPayload>) {
      const { guildId, ...block } = action.payload;
      state[guildId].list[block.id] = block;
    },
    removeBlockedUser(state, action: PayloadAction<RemoveBlockedUserPayload>) {
      const { guildId, userId } = action.payload;
      delete state[guildId].list[userId];
    },
  },
});

export const {
  initBlocks,
  addBlockedUser,
  removeBlockedUser,
} = blocksSlice.actions;
export const blocksReducer = blocksSlice.reducer;
