import { SecretManagerServiceClient } from '@google-cloud/secret-manager'
import { FirebaseConfig } from '../../models/shared';

const client = new SecretManagerServiceClient();




const ENV_FIREBASE_CONFIG = process.env.FIREBASE_CONFIG ?? "{}"
export const FIREBASE_CONFIG = JSON.parse(ENV_FIREBASE_CONFIG) as FirebaseConfig


export const gcpSecretsLoader = async (secretName: string, secretVersion = 'latest') => {
    const name = `projects/${FIREBASE_CONFIG.projectId}/secrets/${secretName}/versions/${secretVersion}`

    const [version] = await client.accessSecretVersion({
      name: name,
    });

    return version?.payload?.data?.toString()
};