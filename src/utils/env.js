export default function getEnv(name) {
  return process.env[name] || window?.configs?.[name];
}
