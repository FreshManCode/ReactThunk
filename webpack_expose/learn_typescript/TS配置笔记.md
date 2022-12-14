#### 1.优化编译
* 1.解决TS和JS冲突问题
	
		 tsc --init 生成配置文件 
		 
* 2.自动编译
	
		tsc --watch 
* 	3.发生错误时不执行编译
	
		tsc -noEmitOnError hello.ts
		
#### 2.降级编译
> 有些浏览器不支持ES6的语法,把编译后的TS降级为es5,需要在tsconfig.json中配置

	 "target" :"es5"
	 
#### 3.严格模式
> tsconfig.json 中的参数配置

	//类型检查
	"strict":true,
	// strict 为true时,就相当于把以下两个字段也都开启了
	
	"noImplicitAny":true,
	"strictNullChecks":true,
