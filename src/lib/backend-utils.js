/* eslint-disable */
import fs from "fs";
import path from "path";


export function resetData() {
  const dataDirectory = path.join(process.cwd(), "data");
  const orig = path.join(dataDirectory, "seed-orig.json");
  const dest = path.join(dataDirectory, "seed.json");
  fs.copyFileSync(orig, dest);
}


export function readData() {
  const dataDirectory = path.join(process.cwd(), "data");
  const fullPath = path.join(dataDirectory, "seed.json");
  if (!fs.existsSync(fullPath)) {
    resetData();
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const events = JSON.parse(fileContents);

  return events;
}

export function saveData(events) {
  const dataDirectory = path.join(process.cwd(), "data");
  const fullPath = path.join(dataDirectory, "seed.json");
  if (!fs.existsSync(fullPath)) {
    resetData();
  }
  fs.writeFileSync(fullPath, JSON.stringify(events), "utf8");
}
