function readConfig(): NextlogConfig {
  try {
    const configModule = require("../nextlog.config");
    return configModule.default || configModule;
  } catch (error) {
    console.error(`Error reading config file: ${error}`);
    throw error;
  }
}

export const DefaultNextlogConfig = {
  theme: "default",
  layout: "list",
} as NextlogConfig;

export function NextlogConfig(config = DefaultNextlogConfig) {
  return config;
}

const config = readConfig();

export default config as NextlogConfig;
