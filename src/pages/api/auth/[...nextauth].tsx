// Let's begin defining our Auth providers
// Next-auth comes with tons of built-ins providers
import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next-auth/_utils";

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      // enviroment variables for github
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Twitter({
      // enviroment variables for twitter
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
};


// We export our authentication passing our options 
// where we can define several configurations such as custom providers
// encryption methods, custom sign in/out pages and more...
export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
