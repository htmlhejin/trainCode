import program from "commander"
import Server from "./server"

// 通过这行命令可以得到myserver后面输入的命令，如myserver --help,这行命令可以得到--help
// console.log(process.argv)
// /D:\huashantrain\1907--1912\review\http-server>myserver --help
// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\联想\\AppData\\Roaming\\npm\\node_modules\\http-server\\bin\\www',
//   '--help' ]

program
    .option('-p, --port<val>','set myserver port')   //输入-p时，设置指定端口。就像http-server -p 8000
    .parse(process.argv)    // 解析并得到myserver后面的命令

// 指定一个端口
let config={
    port:8080
}

Object.assign(config,program)   //这个api表示把program作用到config,相当于progam中的信息复制到config中
// console.log(config)
// { port: 8080,
//     commands: [],
//     options:
//      [ Option {
//          flags: '-p, --port<val>',
//          required: true,
//          optional: false,
//          negate: false,
//          short: '-p',
//          long: '--port<val>',
//          description: 'set myserver port' } ],
//     _execs: {},
//     _allowUnknownOption: false,
//     _args: [],
//     _name: 'www',
//     _helpFlags: '-h, --help',
//     _helpDescription: 'output usage information',
//     _helpShortFlag: '-h',
//     _helpLongFlag: '--help',
//     Command:
//      { [Function: Command]
//        super_:
//         { [Function: EventEmitter]
//           EventEmitter: [Circular],
//           usingDomains: false,
//           defaultMaxListeners: [Getter/Setter],
//           init: [Function],
//           listenerCount: [Function] } },
//     Option: [Function: Option],
//     _events: [Object: null prototype] { 'option:port<val>': [Function] },
//     _eventsCount: 1,
//     rawArgs:
//      [ 'C:\\Program Files\\nodejs\\node.exe',
//        'C:\\Users\\联想\\AppData\\Roaming\\npm\\node_modules\\http-server\\bin\\www' ],
//     args: [] }

let server = new Server(config)
server.start()  //开启服务


// console.log(program.parse(process.argv))
// Usage: www [options]

// Options:
//   -h, --help  output usage information


// console.log(program)
// Command {
//     commands: [],
//     options: [],
//     _execs: {},
//     _allowUnknownOption: false,
//     _args: [],
//     _name: 'www',
//     _helpFlags: '-h, --help',
//     _helpDescription: 'output usage information',
//     _helpShortFlag: '-h',
//     _helpLongFlag: '--help',
//     Command:
//      { [Function: Command]
//        super_:
//         { [Function: EventEmitter]
//           EventEmitter: [Circular],
//           usingDomains: false,
//           defaultMaxListeners: [Getter/Setter],
//           init: [Function],
//           listenerCount: [Function] } },
//     Option: [Function: Option],
//     rawArgs:
//      [ 'C:\\Program Files\\nodejs\\node.exe',
//        'C:\\Users\\联想\\AppData\\Roaming\\npm\\node_modules\\http-server\\bin\\www' ],
//     args: [] }



// console.log("hello")
// console.log("world")