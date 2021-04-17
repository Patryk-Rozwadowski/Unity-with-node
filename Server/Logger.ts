class Logger {
	public static LogError(errorMessage: string) {
		console.log(`[Server] - Error: ${errorMessage}`);
	}

	public static LogInfo(infoMessage: string) {
		console.log(`[Server] - Info: ${infoMessage}`);
	}
}

export default Logger;
