export const getEnvironmets = () => {
  // import.meta.env;

  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    ENV_MODE: import.meta.env.ENV_MODE,
  };
};
