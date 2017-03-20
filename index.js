function countdown(callback){
	setTimeout(callback,1000)
}


function createMultiplier(multiplierValue){
	return function(n){
		return multiplierValue * n
	}
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(a,b){
	return a * b
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);