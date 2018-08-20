function add1(str) {
	return 1+str;
}
function add2(str) {
	return 2+str;
}
function sum(a,b) {
	return a+b;
}
//let ret=add1(add2(add3('zfpx')));
//console.log(ret);
function compose(...fns) {//[add1,add2,add3]
	return function (...args) {
		let last=fns.pop();
		return fns.reduceRight((val,fn)=>fn(val),last(...args));
	}
}
export default function(...fns) {
	return fns.reduce((a,b)=>(...args)=>a(b(...args)));
}
/**
 * 第一次的时候 a =add1 b=add3 let ret = add1(add2(...args))
 * 第二次的时候 (...args)=>add1(add2(sum(...args)))
 */
let ret= compose(add1,add2,sum)('a','b');
console.log(ret);//123zfpx



function add1(str){
	console.log(str);
    return 1 + str
}
function add2(str){
	console.log(str);
    return 2 + str
}
function add3(str){
	console.log(str);
    return 3 + str
}

function compose(...fns){
	return fns.reduce((a,b) => (...args) => a(b(...args)));
}

console.log(compose(add1, add2, add3)('zmx'))