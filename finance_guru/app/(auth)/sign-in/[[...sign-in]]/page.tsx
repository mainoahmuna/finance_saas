import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

/**
 * A Next.js page that simply renders the SignIn component.
 *
 * This is a convenient, out-of-the-box solution for sites that don't require
 * a custom sign-in page. The SignIn component will handle all the necessary
 * authentication and authorization logic for you.
 *
 * @returns The SignIn component.
 */
export default function Page() {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='h-full lg:flex flex-col items-center justify-center px-4'>
            <div className='text-center space-y-4 pt-16'>
                <h1 className='font-bold text-3xl text-[#2E2A47]'>
                    Welcome Back!
                </h1>
                <p className='text-base text-[#7E8CA0]'>
                    Log In or Create Account to get back to your dashboard!
                </p>
            </div>
            <div className='flex items-center justify-center mt-8'>
                <ClerkLoaded>
                    <SignIn />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className='animate-spin text-muted-foreground' />
                </ClerkLoading>
            </div>
        </div>
        <div className='h-full bg-blue-600 hidden lg:flex items-center justify-center'>
            <Image src='/logo.svg' alt='Finance Guru Logo' width={100} height={100} />
        </div>
    </div>
  );
}