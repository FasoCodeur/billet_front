"use client"

import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { handleGetFlowError, handleFlowError } from "@/pkg/errors"
// import ory from "@/pkg/sdk"
// import { Flow } from "@/pkg/ui"
// import { LoginFlow, UpdateLoginFlowBody, RegistrationFlow } from "@ory/client"
import { AxiosError } from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import * as React from "react"
import { useEffect, useState } from "react"
import * as z from "zod"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthFormRegister({
  className,
  ...props
}: UserAuthFormProps) {
  // const [flow, setFlow] = useState<RegistrationFlow>()
  const router = useRouter()

  const searchParams = useSearchParams()

  const returnTo = String(searchParams?.get("return_to") || "")
  const flowId = String(searchParams?.get("flow") || "")
  const refresh = Boolean(searchParams?.get("refresh"))
  const aal = String(searchParams?.get("aal") || "")

  // In this effect we either initiate a new registration flow, or we fetch an existing registration flow.
  // useEffect(() => {
  //   // If the router is not ready yet, or we already have a flow, do nothing.
  //   if (!router || flow) {
  //     return
  //   }
  //
  //   // If ?flow=.. was in the URL, we fetch it
  //   if (flowId) {
  //     ory
  //       .getRegistrationFlow({ id: String(flowId) })
  //       .then(({ data }) => {
  //         // We received the flow - let's use its data and render the form!
  //         setFlow(data)
  //       })
  //       .catch(handleFlowError(router, "registration", setFlow))
  //     return
  //   }
  //
  //   // Otherwise we initialize it
  //   ory
  //     .createBrowserRegistrationFlow({
  //       returnTo: returnTo ? String(returnTo) : undefined,
  //     })
  //     .then(({ data }) => {
  //       setFlow(data)
  //     })
  //     .catch(handleFlowError(router, "registration", setFlow))
  // }, [flowId, router, returnTo, flow])

  // const onSubmit = async (values: UpdateRegistrationFlowBody) => {
  //   await router
  //     // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
  //     // his data when she/he reloads the page.
  //     .push(`/register?flow=${flow?.id}`, undefined, { shallow: true })
  //
  //   ory
  //     .updateRegistrationFlow({
  //       flow: String(flow?.id),
  //       updateRegistrationFlowBody: values,
  //     })
  //     .then(async ({ data }) => {
  //       // If we ended up here, it means we are successfully signed up!
  //       //
  //       // You can do cool stuff here, like having access to the identity which just signed up:
  //       console.log("This is the user session: ", data, data.identity)
  //
  //       // If continue_with did not contain anything, we can just return to the home page.
  //       await router.push(flow?.return_to || "/dashboard")
  //     })
  //     .catch(handleFlowError(router, "register", setFlow))
  //     .catch((err: AxiosError) => {
  //       // If the previous handler did not catch the error it's most likely a form validation error
  //       if (err.response?.status === 400) {
  //         // Yup, it is!
  //         setFlow(err.response?.data)
  //         return
  //       }
  //
  //       return Promise.reject(err)
  //     })
  // }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <h1>Register</h1>
      {/*<Flow onSubmit={onSubmit} flow={flow} />*/}
    </div>
  )
}
