// ex. scripts/build_npm.ts
import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "satchel-three",
    version: Deno.args[0],
    description: "Satchel Three cause two wasn't enough.",
    dependencies: {
      "@std/datetime": "npm:@jsr/std__datetime@^0.225.2"
    }
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});