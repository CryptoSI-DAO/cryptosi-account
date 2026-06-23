"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AppHeader from "@/components/app/header";
import AppFooter from "@/components/app/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowRight, Wallet, TrendingUp, Coins, CreditCard, Plus } from "lucide-react";

interface AppBalance {
  app_id: string;
  app_name: string;
  slug: string;
  balance: number;
  balance_label: string;
  url: string;
}

const MOCK_APPS: AppBalance[] = [
  { app_id: "1", app_name: "Pump Minister", slug: "pump-minister", balance: 0, balance_label: "Pumps", url: "#" },
  { app_id: "2", app_name: "Bitpact", slug: "bitpact", balance: 0, balance_label: "Credits", url: "#" },
  { app_id: "3", app_name: "CaseLens", slug: "caselens", balance: 0, balance_label: "Tokens", url: "#" },
  { app_id: "4", app_name: "Vibrant Dossier", slug: "vibrant-dossier", balance: 0, balance_label: "Credits", url: "#" },
  { app_id: "5", app_name: "Headline Graphix", slug: "headline-graphix", balance: 0, balance_label: "Credits", url: "#" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState<AppBalance[]>(MOCK_APPS);

  useEffect(() => {
    // TODO: Fetch real balances from Supabase
    const checkAuth = async () => {
      // TODO: Check Supabase session, redirect to /login if none
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <AppHeader />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <AppFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader user={{ email: "user@example.com" }} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-headline text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your balances across all CryptoSI DAO apps</p>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Across all apps</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Apps</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Connected apps</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Account Status</CardTitle>
              <Badge className="h-4">Active</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Verified</div>
              <p className="text-xs text-muted-foreground">Full access</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-primary">Top Up All</CardTitle>
              <Plus className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <Button size="sm" variant="default" className="w-full" disabled>
                <CreditCard className="mr-2 h-3 w-3" /> Add Funds
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* App Balances */}
        <h2 className="font-headline text-xl font-bold mb-4">App Balances</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Card key={app.app_id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">{app.app_name}</CardTitle>
                <Badge variant="outline">{app.balance_label}</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold font-headline">
                  {app.balance.toLocaleString()}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={app.url}>Open</Link>
                  </Button>
                  <Button variant="default" size="sm" className="flex-1" disabled>
                    Top Up <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
