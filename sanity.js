import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient
} from "next-sanity";

export const config = {
  // data set in .env.local are not in sanity.json file anymore
  // but in sanity project/sanity.cli.ts
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const useCurrentUser = createCurrentUserHook(config);