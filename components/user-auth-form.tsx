"use client"

import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { handleFlowError, handleGetFlowError } from "@/pkg/errors"
// import ory from "@/pkg/sdk"
// import { Flow } from "@/pkg/ui"
// import { LoginFlow, UpdateLoginFlowBody } from "@ory/client"
import { AxiosError } from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import * as React from "react"
import { useEffect, useState } from "react"
import * as z from "zod"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [flow, setFlow] = useState<
    // LoginFlow
    | null | undefined>(null)
  const router = useRouter()

  const searchParams = useSearchParams()

  const returnTo = String(searchParams?.get("return_to") || "")
  const flowId = String(searchParams?.get("flow") || "")
  const refresh = Boolean(searchParams?.get("refresh"))
  const aal = String(searchParams?.get("aal") || "")

  // useEffect(() => {
  //   // If the router is not ready yet, or we already have a flow, do nothing.
  //   if (!router || flow) {
  //     return
  //   }
  //
  //   // If ?flow=.. was in the URL, we fetch it
  //   if (flowId) {
  //     ory
  //       .getLoginFlow({ id: String(flowId) })
  //       .then(({ data }) => {
  //         setFlow(data)
  //       })
  //       // .catch((e: any) => {
  //       //   console.log(e);
  //       // });
  //       .catch(handleGetFlowError(router, "login", setFlow))
  //     return
  //   }
  //
  //   // Otherwise we initialize it
  //   ory
  //     .createBrowserLoginFlow({
  //       refresh: true,
  //       aal: aal ? String(aal) : undefined,
  //       returnTo: returnTo ? String(returnTo) : undefined,
  //     })
  //     .then(({ data }) => {
  //       setFlow(data)
  //     })
  //     .catch(handleFlowError(router, "login", setFlow))
  // }, [flowId, router, aal, refresh, returnTo, flow])

  // const onSubmit = async (values: UpdateLoginFlowBody): Promise<void> => {
  //   router
  //     // On submission, add the flow ID to the URL but do not navigate. This prevents the user loosing
  //     // his data when she/he reloads the page.
  //     .push(`/login?flow=${flow?.id}`)
  //   await ory
  //     .updateLoginFlow({
  //       flow: String(flow?.id),
  //       updateLoginFlowBody: values,
  //     })
  //     // We logged in successfully! Let's bring the user home.
  //     .then(() => {
  //       console.log("login success")
  //       if (flow?.return_to) {
  //         window.location.href = flow?.return_to
  //         return
  //       }
  //       router.push("/dashboard")
  //     })
  //     .then(() => {})
  //     // .catch(handleFlowError(router, "login", setFlow))
  //     .catch(handleFlowError(router, "login", setFlow))
  //     .catch((err: AxiosError) => {
  //       // If the previous handler did not catch the error it's most likely a form validation error
  //       if (err.response?.status === 400) {
  //         // Yup, it is!
  //         setFlow(err.response?.data as any)
  //         return
  //       }
  //
  //       return Promise.reject(err)
  //     })
  // }

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   // resolver: zodResolver(userAuthSchema),
  //   resolver: undefined,
  // });
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  //
  // async function onSubmit(data: FormData) {
  //   setIsLoading(true);
  //
  //   const signInResult = await signIn("email", {
  //     email: data.email.toLowerCase(),
  //     redirect: false,
  //     callbackUrl: searchParams?.get("from") || "/dashboard",
  //   });
  //
  //   setIsLoading(false);
  //
  //   if (!signInResult?.ok) {
  //     return toast({
  //       title: "Something went wrong.",
  //       description: "Your sign in request failed. Please try again.",
  //       variant: "destructive",
  //     });
  //   }
  //
  //   return toast({
  //     title: "Check your email",
  //     description: "We sent you a login link. Be sure to check your spam too.",
  //   });
  // }

  // return flow ? (
  //   // create a login form that dynamically renders based on the flow data using Ory Elements
  //   <UserAuthCard
  //     cardImage="/ory.svg"
  //     title={"Login"}
  //     // This defines what kind of card we want to render.
  //     flowType={"login"}
  //     // we always need the flow data which populates the form fields and error messages dynamically
  //     flow={flow}
  //     // the login card should allow the user to go to the registration page and the recovery page
  //     additionalProps={{
  //       forgotPasswordURL: "/recovery",
  //       signupURL: "/registration",
  //     }}
  //     // we might need webauthn support which requires additional js
  //     includeScripts={true}
  //     // we submit the form data to Ory
  //     onSubmit={({ body }) => submitFlow(body as UpdateLoginFlowBody)}
  //   />
  // ) : (
  //   <div>Loading...</div>
  // );

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <h1>SIGN in FORM</h1>
      {/*<Flow onSubmit={onSubmit} flow={flow!} />*/}

      {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
      {/*  <div className="grid gap-2">*/}
      {/*    <div className="grid gap-1">*/}
      {/*      <Label className="sr-only" htmlFor="email">*/}
      {/*        Email*/}
      {/*      </Label>*/}
      {/*      <Input*/}
      {/*        id="email"*/}
      {/*        placeholder="name@example.com"*/}
      {/*        type="email"*/}
      {/*        autoCapitalize="none"*/}
      {/*        autoComplete="email"*/}
      {/*        autoCorrect="off"*/}
      {/*        disabled={isLoading || isGitHubLoading}*/}
      {/*        {...register("email")}*/}
      {/*      />*/}
      {/*      {errors?.email && (*/}
      {/*        <p className="px-1 text-xs text-red-600">*/}
      {/*          {errors.email.message}*/}
      {/*        </p>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*    <button className={cn(buttonVariants())} disabled={isLoading}>*/}
      {/*      {isLoading && (*/}
      {/*        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />*/}
      {/*      )}*/}
      {/*      Sign In with Email*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</form>*/}
      {/*<div className="relative">*/}
      {/*  <div className="absolute inset-0 flex items-center">*/}
      {/*    <span className="w-full border-t" />*/}
      {/*  </div>*/}
      {/*  <div className="relative flex justify-center text-xs uppercase">*/}
      {/*    <span className="bg-background px-2 text-muted-foreground">*/}
      {/*      Or continue with*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<button*/}
      {/*  type="button"*/}
      {/*  className={cn(buttonVariants({ variant: "outline" }))}*/}
      {/*  onClick={() => {*/}
      {/*    setIsGitHubLoading(true);*/}
      {/*    signIn("github");*/}
      {/*  }}*/}
      {/*  disabled={isLoading || isGitHubLoading}*/}
      {/*>*/}
      {/*  {isGitHubLoading ? (*/}
      {/*    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />*/}
      {/*  ) : (*/}
      {/*    <Icons.gitHub className="mr-2 h-4 w-4" />*/}
      {/*  )}{" "}*/}
      {/*  Github*/}
      {/*</button>*/}
    </div>
  )
}
