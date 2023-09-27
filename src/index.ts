import "dotenv/config";
import server from "./server/server";

const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`Server Online: http://localhost:${port}`);
});
