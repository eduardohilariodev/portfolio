// app/providers.jsx
"use client";

import { useEffect } from "react";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

import PostHogPageView from "@/components/watchers/PostHogPageView";

import type { ReactNode } from "react";

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageleave: true, // Enable pageleave capture
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      person_profiles: "always", // or 'always' to create profiles for anonymous users as well
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
