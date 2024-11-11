"use client"

// import { Configuration, FrontendApi } from "@ory/client";
// import { edgeConfig } from "@ory/integrations/next";

// const ory = new FrontendApi(new Configuration(edgeConfig));

export async function getCurrentUser() {
  // console.log("getCurrentUser")
  try {
    const { data: sessionData } = {
      data: {
        identity: {
          id: "e3e4b2e2-0b5e-4f4e-8e4e-0e5b0e5b0e5b",
          traits: {
            name: {
              first: "Admin",
              last: "Bybus",
            },
            email: "admin@bybus.com",
          },
        },
      },
    }
    // await ory.toSession();
    // console.log("sessionData")

    const { first, last } = sessionData.identity.traits.name || ""
    const { email } = sessionData.identity.traits || ""
    const name =
      `${first ? first : "Rabie"} ${last ? last[0] : "J"}.` || "Rabie J."

    const user = {
      email: email || "",
      name: name || "",
      image: `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`,
      logoutUrl: "",
    }
    // console.log(user)
    const { data: logoutData } = {
      data: {
        logout_url: "/logout",
      },
    }
    // await ory.createBrowserLogoutFlow();
    // console.log(logoutData.logout_url);
    user.logoutUrl = logoutData?.logout_url
    // console.log(user)
    return user
  } catch (err: any) {
    console.log(err?.message)
    return null
  }
}

export async function getCurrentUserRoles() {
  // console.log("getCurrentUser")
  try {
    const { data: sessionData } = {
      data: {
        identity: {
          id: "e3e4b2e2-0b5e-4f4e-8e4e-0e5b0e5b0e5b",
          traits: {
            name: {
              first: "Admin",
              last: "Bybus",
            },
            role: "admin",
            email: "admin@bybus.com",
          },
        },
      },
    }
    // await ory.toSession()
    // console.log("sessionData")
    // console.log(sessionData)

    const { first, last } = sessionData.identity.traits.name || ""
    const { email } = sessionData.identity.traits || ""
    const roles = sessionData.identity.traits?.role
      ? sessionData.identity.traits?.role
      : "user"
    const name =
      `${first ? first : "Rabie"} ${last ? last[0] : "J"}.` || "Rabie J."

    const user = {
      email: email || "",
      name: name || "",
      image: `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`,
      logoutUrl: "",
      roles: roles || "user",
    }
    // console.log(user)
    const { data: logoutData } = {
      data: {
        logout_url: "/logout",
      },
    }
    // await ory.createBrowserLogoutFlow()

    // console.log(logoutData.logout_url);
    user.logoutUrl = logoutData?.logout_url
    // console.log(user)
    return user
  } catch (err: any) {
    console.log(err.message)
    return null
  }
}

export async function GETSession(cookie: string) {
  try {
    const res = await fetch(process.env.ORY_SDK_URL + "/sessions/whoami", {
      method: "GET",
      headers: {
        Cookie: cookie,
      },
      next: { revalidate: 0 },
    })
    return await res.json()
  } catch (e: any) {
    console.log("session error")
    return null
  }
}
