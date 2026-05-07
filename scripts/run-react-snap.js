const { spawnSync } = require("child_process");
const { existsSync } = require("fs");

const macChromePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const env = { ...process.env };

if (existsSync(macChromePath)) {
  env.PUPPETEER_EXECUTABLE_PATH = macChromePath;
}

const result = spawnSync("react-snap", {
  stdio: "inherit",
  shell: true,
  env,
});

if (typeof result.status === "number") {
  process.exit(result.status);
}

process.exit(1);
