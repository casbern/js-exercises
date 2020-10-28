function extract(object, path) {
	let result = eval("object." + path)
	
	if(result == undefined) {
		result = null
	} 
	
	return result
}

const team = { coach: { name: "Jane" }, name: "Hoop Masters" };

console.log(extract(team, "coach.name"))