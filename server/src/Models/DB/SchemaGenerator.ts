import { IChannelInfo } from "./Channel";

export const SchemaGenerator = (sequelize: any, schemaName: string, schemaForm: IChannelInfo) => (
    sequelize.define(schemaName, schemaForm)
);