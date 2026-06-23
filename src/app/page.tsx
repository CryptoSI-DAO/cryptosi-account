"use client";

import React from "react";
import Link from "next/link";
import AppHeader from "@/components/app/header";
import AppFooter from "@/components/app/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Coins, Shield, Users, Zap } from "lucide-react";

const APPS = [
  {
    name: "Pump Minister",
    slug: "pump-minister",
    description: "AI-powered crypto price predictions using machine learning models.",
    icon: BarChart3,
    color: "text-primary",
    url: "#",
  },
  {
    name: "Bitpact",
    slug: "bitpact",
    description: "Decentralized P2P Bitcoin trading with multisig escrow and VRF arbitration.",
    icon: Shield,
    color: "text-green-400",
    url: "#",
  },
  {
    name: "CaseLens",
    slug: "caselens",
    description: "Legal intelligence and case analysis for crypto disputes.",
    icon: Zap,
    color: "text-blue-400",
    url: "#",
  },
  {
    name: "Vibrant Dossier",
    slug: "vibrant-dossier",
    description: "Rich media dossiers and project documentation for crypto assets.",
    icon: Users,
    color: "text-purple-400",
    url: "#",
  },
  {
    name: "Headline Graphix",
    slug: "headline-graphix",
    description: "Automated chart generation and visual content for crypto news.",
    icon: Coins,
    color: "text-orange-400",
    url: "#",
  },
];

const FEATURES = [
  {
    title: "Single Account",
    description: "One account across all CryptoSI DAO apps. Sign up once, access everything.",
    icon: Users,
  },
  {
    title: "Unified Balances",
    description: "View and manage balances for every app in one place.",
    icon: Coins,
  },
  {
    title: "Cross-App Top-Ups",
    description: "Top up your balance for any app from this portal.",
    icon: Zap,
  },
  {
    title: "Secure Auth",
    description: "Supabase-powered authentication with session management.",
    icon: Shield,
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your <span className="text-primary">CryptoSI DAO</span> Account
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              One account. Five apps. Unified balances. Manage everything from Pump Minister to Headline Graphix in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="font-headline text-2xl font-bold text-center mb-12">Why Use the Portal?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <feature.icon className="mx-auto h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Apps */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="font-headline text-2xl font-bold text-center mb-4">Connected Apps</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Access all CryptoSI DAO applications with a single account. Your balances travel with you.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APPS.map((app) => (
              <Card key={app.slug} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                      <app.icon className={`h-5 w-5 ${app.color}`} />
                    </div>
                    <CardTitle>{app.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{app.description}</CardDescription>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href={app.url}>
                      Open App <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20 text-center">
          <Card className="mx-auto max-w-2xl border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Ready to join the DAO?</CardTitle>
              <CardDescription>Create your account in seconds and access all apps.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link href="/signup">Create Account</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <AppFooter />
    </div>
  );
}
