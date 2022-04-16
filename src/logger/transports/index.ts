import consoleTransport from './console.js';
import fileTransport from './file.js';
import FirebaseTransport from './firebase.js';
import Transport, { TransportConfig } from './transport.js';


const transports = { console: consoleTransport, file: fileTransport , firebase: FirebaseTransport };

export { Transport, TransportConfig };

export default transports;
