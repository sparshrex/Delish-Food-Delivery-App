import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client';

import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'si8kv5r2',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-27',
});

const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;