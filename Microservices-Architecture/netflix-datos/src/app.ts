import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/serve";

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: 4000,
    publicPath: "public",
    routes: AppRoutes.routes,
  });
  server.start();
}
