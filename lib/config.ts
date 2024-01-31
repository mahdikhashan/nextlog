import path from "path";

const configFilePath = path.resolve(process.cwd(), "nextlog.config.ts");

function readConfig(): NextlogConfig {
  try {
    const configModule = require(configFilePath);
    return configModule.default || configModule;
  } catch (error) {
    console.error(`Error reading config file: ${error}`);
    // Handle the error as per your requirement
    throw error;
  }
}

const config = readConfig();

export const DefaultNextlogConfig = {
  theme: "default",
  layout: "list",
} as NextlogConfig;

export function NextlogConfig(config = DefaultNextlogConfig) {
  return config;
}

export default config as NextlogConfig;
