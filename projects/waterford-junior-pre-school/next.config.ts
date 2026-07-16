import type { NextConfig } from "next";
import os from "os";

const getLocalIps = () => {
  const interfaces = os.networkInterfaces();
  const ips: string[] = ["localhost", "127.0.0.1"];
  for (const name of Object.keys(interfaces)) {
    const list = interfaces[name];
    if (list) {
      for (const iface of list) {
        if (iface.family === "IPv4" && !iface.internal) {
          ips.push(iface.address);
          ips.push(`${iface.address}:3000`);
        }
      }
    }
  }
  return ips;
};

const nextConfig: NextConfig = {
  allowedDevOrigins: getLocalIps(),
  devIndicators: false,
};

export default nextConfig;
