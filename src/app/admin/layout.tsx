"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hasApiKey, setHasApiKey] = useState(false);

    const handleConnectBilling = async () => {
        // Placeholder for billing connection
        // Will be implemented when Supabase is configured
        setHasApiKey(true);
    };

    return (
        <div className="flex min-h-screen">
            <AdminSidebar
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                hasApiKey={hasApiKey}
                onConnectBilling={handleConnectBilling}
            />
            <main className="flex-1 p-6 bg-gray-900">
                {children}
            </main>
        </div>
    );
}
