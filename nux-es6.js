// Unx.js v.0.1.3
let print = content => console.log(content);
let addText = text => document.write(text);
let choose = object => document.querySelector(object);
let chooseAll = object => document.querySelectorAll(object);
let selectId = object => document.getElementById(object);
let selectTagName = object => document.getElementsByTagName(object);
let msg = content => alert(content);
class Nux{
	static developer = 'Made By ©UraSoft Studio 2022';
	developer = "Made By ©UraSoft Studio 2022";
	about = 'Nux.js是一个整活+功能向JS库';
	version = 'v0.1.3';
	static version = 'v0.1.3'
	print = content => console.log(content);
	addText = text => document.write(text);
	msg = content => alert(content);
	closePage = () => {
		window.opener=null;
		window.open('','_self');
		window.close();
	}
	warn = content => {
		throw (content);
	}
}
class $${
	static id = id => document.getElementById(id);
	static tagName = tagname => document.getElementsByTagName(tagname);
	static name = name => document.getElementsByName(name);
	static class = content => document.getElementsByClassName(content);
}
let nux = new Nux;
let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPGRSTUVWXYZ1234567890';
let arr = str.split("");
let nux_captcha = null;
for(let i=0;i<4;i++){
	let a = Math.floor(Math.random() * arr.length);
	let b = Math.floor(Math.random() * arr.length);
	let c = Math.floor(Math.random() * arr.length);
	let d = Math.floor(Math.random() * arr.length);
	nux_captcha = arr[a]+arr[b]+arr[c]+arr[d];
}
addText(nux_captcha);
print(nux_captcha);
nux.print(nux.developer);