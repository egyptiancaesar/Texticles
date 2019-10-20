const host = 'localhost:8090/';

function apiRequest(method: string, endpoint: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		if (!["GET", "POST", "PUT", "DELETE"].includes(method)){
			reject(new Error(method + " is not a valid http method"));
		}
		const req = new XMLHttpRequest();
		const url = "http://"+host+endpoint;
		req.open(method, url);
		req.onload = () =>{
			resolve(req.responseText);
		};
		req.onerror = () => {
			reject(new Error("HTTP get request failed: " + url));
		};
		req.send();
	});
}

async function apiGetRequest(endpoint: string): Promise<string> {
	return await apiRequest("GET", endpoint);	
}
