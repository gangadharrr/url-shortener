import pino from "pino";
import { loggerConfig } from "../configs/logger.config";

export const logger = pino(loggerConfig);
