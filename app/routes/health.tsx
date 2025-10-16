import { useEffect, useState } from "react";

interface HealthData {
  status: string;
  timestamp: string;
  service: string;
  version: string;
  environment: string;
  uptime: number;
  memory: {
    used: number;
    total: number;
  };
  checks: {
    client: string;
    dom: string;
  };
}

export default function Health() {
  const [healthData, setHealthData] = useState<HealthData | null>(null);

  useEffect(() => {
    const data: HealthData = {
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "sharepro-landing-page",
      version: "1.0.0",
      environment: "production",
      uptime: performance.now() / 1000, // Browser uptime approximation
      memory: {
        // In browser environment, we can't access process memory
        // So we'll use approximate values
        used: (performance as any).memory?.usedJSHeapSize || 0,
        total: (performance as any).memory?.totalJSHeapSize || 0,
      },
      checks: {
        client: "healthy",
        dom: typeof document !== "undefined" ? "ready" : "unavailable",
      },
    };
    setHealthData(data);
  }, []);

  // For API-like access, render JSON
  if (typeof window !== "undefined" && window.location.search.includes("format=json")) {
    return (
      <pre style={{ fontFamily: "monospace", fontSize: "14px" }}>
        {JSON.stringify(healthData, null, 2)}
      </pre>
    );
  }

  // Default health check page
  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif", 
      maxWidth: "600px", 
      margin: "50px auto", 
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px"
    }}>
      <h1 style={{ color: "#28a745", textAlign: "center" }}>✅ SharePro Landing Page Health Check</h1>
      
      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "4px", marginTop: "20px" }}>
        <h2>Service Status</h2>
        <p><strong>Status:</strong> <span style={{ color: "#28a745" }}>✅ Healthy</span></p>
        <p><strong>Service:</strong> SharePro Landing Page</p>
        <p><strong>Version:</strong> 1.0.0</p>
        <p><strong>Environment:</strong> Production</p>
        <p><strong>Timestamp:</strong> {healthData ? new Date(healthData.timestamp).toLocaleString() : "Loading..."}</p>
      </div>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "4px", marginTop: "20px" }}>
        <h2>System Information</h2>
        <p><strong>Client:</strong> ✅ Healthy</p>
        <p><strong>DOM:</strong> ✅ Ready</p>
        <p><strong>JavaScript:</strong> ✅ Running</p>
      </div>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "4px", marginTop: "20px" }}>
        <h2>Raw Data</h2>
        <pre style={{ 
          fontSize: "12px", 
          backgroundColor: "#f8f9fa", 
          padding: "10px", 
          borderRadius: "4px",
          overflow: "auto"
        }}>
          {healthData ? JSON.stringify(healthData, null, 2) : "Loading..."}
        </pre>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "14px", color: "#666" }}>
        <p>Add <code>?format=json</code> to the URL for JSON-only output</p>
      </div>
    </div>
  );
}