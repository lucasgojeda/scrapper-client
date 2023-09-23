/** Libraries */
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

/** Env variables / Utils */
import { getEnvironmets } from "../utils";
const {
  VITE_AWS_S3_REGION,
  VITE_AWS_ACCESS_KEY_ID,
  VITE_AWS_SECRET_ACCESS_KEY,
  VITE_AWS_S3_BUCKET,
} = getEnvironmets();

console.log({
  VITE_AWS_S3_REGION,
  VITE_AWS_ACCESS_KEY_ID,
  VITE_AWS_SECRET_ACCESS_KEY,
  VITE_AWS_S3_BUCKET,
});

export const useS3Client = () => {
  const getS3Link = async (id, name) => {
    console.log("id: ", id);
    try {
      const client = new S3Client({
        region: VITE_AWS_S3_REGION,
        credentials: {
          accessKeyId: VITE_AWS_ACCESS_KEY_ID,
          secretAccessKey: VITE_AWS_SECRET_ACCESS_KEY,
        },
      });
      const command = new GetObjectCommand({
        Bucket: VITE_AWS_S3_BUCKET,
        Key: `${id}.xlsx`,
        ResponseContentDisposition: `attachment; filename=${name}.xlsx`,
      });
      const clientUrl = await getSignedUrl(client, command, {
        expiresIn: 3600,
      });
      console.log("Presigned URL with client");
      console.log(clientUrl);

      const downloadLink = document.createElement("a");
      downloadLink.href = clientUrl;
      downloadLink.download = `${name}.xlsx`; // Cambia aquí el nombre deseado
      downloadLink.click();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    //* Propiedades
    // someProperty,

    //* Métodos
    getS3Link,
  };
};
