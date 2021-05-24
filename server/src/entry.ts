import { Application } from "express";
import ServerInstance from "./Setup/ServerInstance";

const serverInstance: ServerInstance = new ServerInstance();

const app: Application = serverInstance.getServerInstance();