module.exports = {

'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: "a9g5h61sunyyky5kccnp8gxu7fb1noskeyq6p21vrxqdfn28mqvm51whj7192l8g", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "ecommerce-tutucas", // the neon project under wich your DB runs
      neonRole: "neondb_owner", // create it manually under roles for your project first
      gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    }
},

}
