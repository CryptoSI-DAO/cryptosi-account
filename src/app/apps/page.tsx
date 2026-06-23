"use client";

import React from "react";
import Link from "next/link";
import AppHeader from "@/components/app/header";
import AppFooter from "@/components/app/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Shield, Zap, Users, Coins, ExternalLink } from "lucide-react";

const APPS = [
  {
    name: "Pump Minister",
    slug: "pump-minister",
    description: "AI-powered crypto price predictions. Train ML models and forecast Bitcoin, Ethereum, and 100+ assets.",
    icon: BarChart3,
    color: "text-primary",
    status: "live",
    url: "#",
    features: ["ML Price Predictions", "Multiple Analysts", "Share Images"],
  },
  {
    name: "Bitpact",
    slug: "bitpact",
    description: "Decentralized P2P Bitcoin trading. Multisig escrow, VRF arbitration, zero servers.",
    icon: Shield,
    color: "text-green-400",
    status: "live",
    url: "#",
    features: ["P2P Trading", "Multisig Escrow", "Arbiter System"],
  },
  {
    name: "CaseLens",
    slug: "caselens",
    description: "Legal intelligence and case analysis platform for crypto disputes and compliance.",
    icon: Zap,
    color: "text-blue-400",
    status: "coming-soon",
    url: "#",
    features: ["Case Analysis", "Legal Intelligence", "Compliance Tools"],
  },
  {
    name: "Vibrant Dossier",
    slug: "vibrant-dossier",
    description: "Rich media dossiers and project documentation for crypto assets and tokens.",
    icon: Users,
    color: "text-purple-400",
    status: "coming-soon",
    url: "#",
    features: ["Media Dossiers", "Token Docs", "Rich Content"],
  },
  {
    name: "Headline Graphix",
    slug: "headline-graphix",
    description: "Automated chart generation and visual content for crypto news and social media.",
    icon: Coins,
    color: "text-orange-400",
    status: "coming-soon",
    url: "#",
    features: ["Chart Generation", "Visual Content", "Auto Publishing"],
  },
];

export default function AppsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-headline text-3xl font-bold">Apps</h1>
          <p className="text-muted-foreground">All applications in the CryptoSI DAO ecosystem</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {APPS.map((app) => (
            <Card key={app.slug} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                    <app.icon className={`h-6 w-6 ${app.color}`} />
                  </div>
                  <Badge variant={app.status === "live" ? "default" : "secondary"}>
                    {app.status === "live" ? "Live" : "Coming Soon"}
                  </Badge>
                </div>
                <CardTitle>{app.name}</CardTitle>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">{feature}</Badge>
                  ))}
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" disabled={app.status !== "live"} asChild>
                  <Link href={app.url}>
                    {app.status === "live" ? <>Open App <ExternalLink className="ml-2 h-3 w-3" /></> : "Coming Soon"}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
