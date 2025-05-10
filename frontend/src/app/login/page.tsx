import MainLayout from "@/components/layouts/MainLayout";
import Button from "@/components/widgets/Button";
import TextField from "@/components/widgets/TextField";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";

export default function page() {
  return (
    <MainLayout>
      <div className="bg-slate-100 min-height flex flex-col justify-center items-center">
        <div className="w-full bg-white sm:rounded-lg sm:shadow  md:mt-0 sm:max-w-lg xl:p-0  ">
          <div className="p-6 space-y-4 sm:px-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Login
            </h1>

            <form className="space-y-1">
              <TextField
                label="Email Address"
                type="email"
                name="email"
                icon={<MdEmail />}
              />

              <TextField
                label="Password"
                type="password"
                name="password"
                icon={<PiPasswordFill />}
              />

              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center py-1">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="checkbox checkbox-neutral checkbox-xs rounded-md border-gray-300"
                  />
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 text-sm"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href={"/forget"}
                  className="text-sm font-light text-gray-500"
                >
                  Forget password
                </Link>
              </div>
              <Button label="Login" className="w-full" />

              <p className="text-sm font-light text-gray-500 ">
                I have no account,{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
