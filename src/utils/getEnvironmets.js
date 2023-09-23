export const getEnvironmets = () => {
  // import.meta.env;

  return {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    ENV_MODE: import.meta.env.ENV_MODE,
    VITE_AWS_S3_REGION: import.meta.env.VITE_AWS_S3_REGION,
    VITE_AWS_S3_BUCKET: import.meta.env.VITE_AWS_S3_BUCKET,
    VITE_AWS_ACCESS_KEY_ID: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    VITE_AWS_SECRET_ACCESS_KEY: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  };
};
