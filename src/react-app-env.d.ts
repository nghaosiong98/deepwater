/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    // types of envs
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_AZURE_ML_ENDPOINT_KEY_A: string;
    REACT_APP_AZURE_SUB_KEY_A: string;
  }
}
