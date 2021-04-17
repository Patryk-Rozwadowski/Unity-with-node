import * as dgram from "dgram";
import Logger from "./Logger";

const server = dgram.createSocket("udp4");

server.on("error", (err: Error) => {
	Logger.LogError(err.message + err.stack);
	server.close();
});

server.on("message", (msg, senderInfo) => {
	Logger.LogInfo(`Message received ${msg}`);
	server.send(msg, senderInfo.port, senderInfo.address, () => {
		Logger.LogInfo(`Message sent to ${senderInfo.address} port: ${senderInfo.port}`);
	});
});

server.on("listening", () => {
	const serverInfo = server.address();
	const { address, port } = serverInfo;

	Logger.LogInfo(`Server is listening on ${address}:${port}`);
});

server.bind(5000);
