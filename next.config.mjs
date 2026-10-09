import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root },
  // Let the dev server be opened from other devices on the network (phone, WSL/VM address, etc.).
  // Without this Next blocks its dev scripts for non-localhost origins and the page never becomes interactive.
  allowedDevOrigins: ["172.24.16.1", "192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;
