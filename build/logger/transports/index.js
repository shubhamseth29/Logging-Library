import consoleTransport from './console.js';
import fileTransport from './file.js';
import FirebaseTransport from './firebase.js';
import Transport from './transport.js';
var transports = { console: consoleTransport, file: fileTransport, firebase: FirebaseTransport };
export { Transport };
export default transports;
//# sourceMappingURL=index.js.map