import { getModelForClass, prop, ReturnModelType } from '@typegoose/typegoose';

class GameType {
  @prop()
  name!: string;

  @prop()
  noOfPlayers!: number;

  @prop()
  noOfTeams!: number;

  @prop()
  pickingOrder!: number[];

  @prop()
  isCoinFlipEnabled!: boolean;
}

class QueryServer {
  @prop()
  key!: string;

  @prop()
  name!: string;

  @prop()
  host!: string;

  @prop()
  port!: number;

  @prop()
  timestamp!: Date;
}

class User {
  @prop()
  username!: string;
}

class Block {
  @prop({ _id: false })
  culprit!: User;

  @prop({ _id: false })
  by!: User;

  @prop()
  blockedOn!: Date;

  @prop()
  expiresAt!: Date;

  @prop({ default: '' })
  reason!: string;
}

class Guild {
  @prop({ type: String })
  _id!: string;

  @prop()
  pugChannel!: string;

  @prop()
  queryChannel!: string;

  @prop()
  ignoredCommandGroup!: string[];

  @prop({ _id: false })
  gameTypes!: GameType[];

  @prop({ _id: false })
  queryServers!: QueryServer[];

  @prop({ _id: false })
  blockedUsers!: Block[];

  @prop()
  prefix?: string;
}

export const Guilds = getModelForClass(Guild);
