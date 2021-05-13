import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    {
      id: "HobbyBuddy0623",
      name: "GroupMe",
      type: "oauth",
      version: "2.0",
      scope: "",
      params: {  grant_type: 'authorization_code', state:"ad16fe59a3a9a6815f2ff6ae85fdcbcc34bd574e301054663f2391f1a5685cbb" },
      accessTokenUrl: "https://oauth.groupme.com/oauth/token",
      requestTokenUrl: "https://oauth.groupme.com/oauth/auth",
      authorizationUrl:
        "https://oauth.groupme.com/oauth/authorize?client_id=cAmGJKz0Y8pmSyZy27EmZyOQLOZUEZz6p9gMioDuZhDZgCMu",
      profileUrl: "",
      authorizationParams: {
        client_id: "cAmGJKz0Y8pmSyZy27EmZyOQLOZUEZz6p9gMioDuZhDZgCMu"
      },
      async profile (profile){
        console.log(profile);
        return profile.response;
      },
      clientId: "cAmGJKz0Y8pmSyZy27EmZyOQLOZUEZz6p9gMioDuZhDZgCMu",
      clientSecret: "",
      
    }
  ], 
 secret: process.env.NEXTAUTH_SECRET,
 session: {
        jwt: true,
        maxAge: 10

    },
  callbacks: {
  async session(session, token) {
    //session.accessToken = token.accessToken;
    console.log("Session token");
    console.log(token);
    if (userAccount !== null)
    {
        session.user = userAccount;
    }
    else if (typeof token !== typeof undefined)
    {
        session.token = token;
    }
    console.log("session callback returning");
    console.log(session);
    return session;
},
  async jwt(token, user, account, profile, isNewUser) {
    console.log("JWT Token User");
    console.log(token.user);
    if (typeof user !== typeof undefined)
    {
         token.user = user;
    }
    return token;
}
  },  
events: {
    async session(message){}



  },
  debug: true
 
  

};

export default (req, res) => NextAuth(req, res, options);