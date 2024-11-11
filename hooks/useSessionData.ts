// import { Configuration, FrontendApi, Session } from "@ory/client"
// import { edgeConfig } from "@ory/integrations/next"
import { useEffect, useState } from "react"

// const ory = new FrontendApi(new Configuration(edgeConfig))

export const useSessionData = () => {
  const [sessionData, setSessionData] = useState<
    // Session |
    null>(null)
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   ory
  //     .toSession()
  //     .then(({ data }) => {
  //       setSessionData(data)
  //     })
  //     .catch((err: Error) => {
  //       setError(err)
  //     })
  // }, [])

  return { sessionData, error }
}
